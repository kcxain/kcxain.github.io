/* Conference map. jsVectorMap 1.7.0 and its basemap load only near the viewport. */
(function () {
  "use strict";

  const section = document.querySelector("[data-conference-map]");
  if (!section) return;
  const stage = section.querySelector(".conference-map-stage");
  const container = section.querySelector(".conference-map");
  const entries = Array.from(section.querySelectorAll("[data-conference-index]"));
  const status = section.querySelector(".conference-map-status");
  const conferences = JSON.parse(section.querySelector("[data-conference-data]").textContent);
  const controls = section.querySelectorAll("[data-map-action]");
  let map;
  let active = -1;

  // Reserve the stage before loading; the server-rendered list also works on its own.
  stage.hidden = false;
  section.classList.add("has-map");
  controls.forEach(function (button) { button.disabled = true; });

  function loadScript(file) {
    return new Promise(function (resolve, reject) {
      const script = document.createElement("script");
      const timeout = setTimeout(function () {
        script.remove();
        reject(new Error("Map resource timed out"));
      }, 12000);
      script.src = section.dataset.assets + file;
      script.onload = function () { clearTimeout(timeout); resolve(); };
      script.onerror = function () { clearTimeout(timeout); reject(new Error("Map resource unavailable")); };
      document.head.appendChild(script);
    });
  }

  function updateSelection(index) {
    active = index;
    entries.forEach(function (button, i) {
      button.setAttribute("aria-pressed", String(i === index));
    });
    container.querySelectorAll(".jvm-marker").forEach(function (marker, i) {
      marker.setAttribute("aria-pressed", String(i === index));
    });
    map.clearSelectedMarkers();
    if (index >= 0) map.setSelectedMarkers([index]);
  }

  function select(index) {
    if (!map) return;
    const conference = conferences[index];
    updateSelection(index);
    map.setFocus({ coords: conference.coords, scale: 4.5, animate: false });
    status.textContent = conference.city + ": " + conference.name + ", " + conference.date_start + " to " + conference.date_end;
    // Reveal the matching row by scrolling only the conference list.
    const row = entries[index].parentElement;
    const list = row.parentElement;
    if (row.offsetTop < list.scrollTop) list.scrollTop = row.offsetTop;
    else if (row.offsetTop + row.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = row.offsetTop + row.offsetHeight - list.clientHeight;
    }
  }

  function overview() {
    updateSelection(-1);
    // Center the complete world at the pinned library's minimum zoom.
    map._setScale(map._baseScale, -map._defaultWidth / 2, -map._defaultHeight / 2, true, false);
    status.textContent = "Showing the world map.";
  }

  function updateControls() {
    if (!map) return;
    container.querySelectorAll(".jvm-label").forEach(function (label) {
      const width = label.getComputedTextLength();
      if (Number(label.getAttribute("x")) + width > container.clientWidth - 8) {
        const marker = container.querySelector('.jvm-marker[data-index="' + label.dataset.index + '"]');
        if (marker) label.setAttribute("x", Number(marker.getAttribute("cx")) - width - 12);
      }
    });
    const scale = map.scale / map._baseScale;
    section.querySelector('[data-map-action="in"]').disabled = scale >= 5.99;
    section.querySelector('[data-map-action="out"]').disabled = scale <= 1.01;
  }

  async function initialize() {
    try {
      await loadScript("jsvectormap.min.js");
      await loadScript("world.js");
      map = new window.jsVectorMap({
        selector: "#conference-map",
        map: "world",
        backgroundColor: "transparent",
        zoomButtons: false,
        zoomOnScroll: false,
        zoomAnimate: false,
        zoomMax: 6,
        // Preserve natural page scrolling on touchscreens. Buttons provide touch zoom.
        bindTouchEvents: false,
        showTooltip: false,
        regionStyle: {
          initial: { fill: "#dce5df", stroke: "#f7f9f8", strokeWidth: 0.7 },
          hover: { fill: "#dce5df", fillOpacity: 1, cursor: "default" }
        },
        markers: conferences.map(function (conference) {
          return { name: conference.city, coords: conference.coords };
        }),
        markerStyle: {
          initial: { r: 5, fill: "#2d786a", stroke: "#fff", strokeWidth: 3, strokeOpacity: 1 },
          hover: { fill: "#174e42", cursor: "pointer" },
          selected: { r: 6, fill: "#174e42" }
        },
        markerLabelStyle: {
          initial: { fontFamily: getComputedStyle(section).fontFamily, fontSize: 16, fontWeight: 500, fill: "#436055" }
        },
        labels: { markers: {
          render: function (marker) { return marker.name; },
          offsets: function (index) { return conferences[index].labelOffset || [10, -14]; }
        } },
        onMarkerClick: function (event, index) { select(Number(index)); },
        onViewportChange: updateControls
      });

      container.querySelectorAll(".jvm-marker").forEach(function (marker, index) {
        marker.setAttribute("tabindex", "0");
        marker.setAttribute("role", "button");
        marker.setAttribute("aria-label", conferences[index].city + ": " + conferences[index].name);
        marker.addEventListener("keydown", function (event) {
          if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(index); }
        });
      });
      entries.forEach(function (button, index) {
        button.disabled = false;
        button.addEventListener("click", function () { select(index); });
      });
      controls.forEach(function (button) {
        button.disabled = false;
        button.addEventListener("click", function () {
          if (button.dataset.mapAction === "overview") return overview();
          const factor = button.dataset.mapAction === "in" ? 1.35 : 1 / 1.35;
          map._setScale(map.scale * factor, container.clientWidth / 2, container.clientHeight / 2, false, false);
        });
      });
      overview();
      if ("ResizeObserver" in window) {
        let previousWidth = container.clientWidth;
        new ResizeObserver(function () {
          if (container.clientWidth === previousWidth) return;
          previousWidth = container.clientWidth;
          map.updateSize();
          if (active < 0) overview();
          else select(active);
        }).observe(container);
      }
    } catch (error) {
      console.warn("Conference map could not be loaded:", error);
      section.classList.remove("has-map");
      stage.hidden = true;
      status.textContent = "Conference locations are available in the list below.";
    }
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (items) {
      if (items.some(function (item) { return item.isIntersecting; })) {
        observer.disconnect();
        initialize();
      }
    }, { rootMargin: "300px" });
    observer.observe(section);
  } else {
    initialize();
  }
}());
