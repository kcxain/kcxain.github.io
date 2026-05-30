---
permalink: /
title: ""
excerpt: ""
author_profile: true
body_class: home
redirect_from:
  - /about/
  - /about.html
---


<script>
document.addEventListener("DOMContentLoaded", function () {
  const venueNodes = document.querySelectorAll(".pub-venue-abbr");
  venueNodes.forEach(function (node) {
    node.setAttribute("tabindex", "0");
    node.setAttribute("role", "button");
    node.setAttribute("aria-expanded", "false");

    node.addEventListener("click", function (e) {
      e.stopPropagation();
      const willOpen = !node.classList.contains("is-open");
      venueNodes.forEach(function (n) {
        n.classList.remove("is-open");
        n.setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        node.classList.add("is-open");
        node.setAttribute("aria-expanded", "true");
      }
    });

    node.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        node.click();
      }
    });
  });

  document.addEventListener("click", function () {
    venueNodes.forEach(function (n) {
      n.classList.remove("is-open");
      n.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      venueNodes.forEach(function (n) {
        n.classList.remove("is-open");
        n.setAttribute("aria-expanded", "false");
      });
    }
  });

  const contributionStats = document.querySelector("[data-contribution-stats]");
  if (contributionStats) {
    const parseStatNumber = function (value) {
      const match = String(value == null ? "" : value).trim().replace(/,/g, "").match(/([\d.]+)\s*([kKmM])?/);
      if (!match) return NaN;
      const multiplier = match[2] && match[2].toLowerCase() === "m" ? 1000000 : match[2] ? 1000 : 1;
      return Number(match[1]) * multiplier;
    };

    const setStat = function (name, value) {
      const node = contributionStats.querySelector("[data-stat='" + name + "']");
      const number = parseStatNumber(value);
      if (!node || !Number.isFinite(number)) return;
      node.textContent = new Intl.NumberFormat("en-US").format(Math.round(number));
      node.classList.add("is-loaded");
    };

    const fetchWithTimeout = function (url) {
      const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timer = controller ? window.setTimeout(function () { controller.abort(); }, 7000) : null;
      const options = {};
      if (controller) options.signal = controller.signal;
      return fetch(url, options).finally(function () {
        if (timer) window.clearTimeout(timer);
      });
    };

    const fetchJson = function (url) {
      return fetchWithTimeout(url).then(function (response) {
        if (!response.ok) throw new Error("Request failed");
        return response.json();
      });
    };

    const loadContributionStats = function () {
      const statsUrl = "https://raw.githubusercontent.com/{{ site.repository }}/contribution-stats/contribution_stats.json";
      fetchJson(statsUrl)
        .then(function (data) {
          setStat("scholar-citations", data.google_scholar && data.google_scholar.citations);
          setStat("zhihu-followers", data.zhihu && data.zhihu.followers);
          setStat("zhihu-voteups", data.zhihu && data.zhihu.upvotes);
          setStat("github-stars", data.github && data.github.stars);
        })
        .catch(function () {});
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadContributionStats, { timeout: 2000 });
    } else {
      window.setTimeout(loadContributionStats, 0);
    }
  }

  const visitorsBox = document.getElementById("visitors-box");
  if (visitorsBox) {
    const visitorsSection = visitorsBox.closest(".about-section");
    const mapSourceWidth = 856;
    const mapUrl = "https://mapmyvisitors.com/map.js?cl=665e5e&w=" + mapSourceWidth + "&t=tt&d=SjjurNgWllQXVKAe4foD6Jsl7veBsrfGxa02WosLzvE&co=ffffff&ct=808080&cmo=ff7c53&cmn=31d631";

    const hideVisitors = function () {
      if (visitorsSection) {
        visitorsSection.style.display = "none";
      }
    };

    const stopPendingLoads = function () {
      if (typeof window.stop === "function" && document.readyState !== "complete") {
        window.stop();
      }
    };

    const loadMap = function () {
      const s = document.createElement("script");
      s.id = "mapmyvisitors";
      s.async = true;
      s.src = mapUrl;

      const timer = setTimeout(function () {
        if (s.parentNode) s.parentNode.removeChild(s);
        hideVisitors();
        stopPendingLoads();
      }, 6000);

      s.onload = function () {
        clearTimeout(timer);
      };
      s.onerror = function () {
        clearTimeout(timer);
        hideVisitors();
        stopPendingLoads();
      };

      visitorsBox.innerHTML = "";
      visitorsBox.appendChild(s);
    };

    const controller = typeof AbortController !== "undefined" ? new AbortController() : null;
    const probeTimer = setTimeout(function () {
      if (controller) controller.abort();
      hideVisitors();
      stopPendingLoads();
    }, 2500);

    fetch(mapUrl, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
      signal: controller ? controller.signal : undefined
    })
      .then(function () {
        clearTimeout(probeTimer);
        loadMap();
      })
      .catch(function () {
        clearTimeout(probeTimer);
        hideVisitors();
        stopPendingLoads();
      });
  }

});
</script>

<span class="anchor" id="about-me"></span>

<div class="about-wrap">
  <section class="about-hero">
    <p>I am a second-year Master's student at the Intelligent Processor Research Center, Institute of Computing Technology (ICT), Chinese Academy of Sciences, advised by <a href='https://ict.cas.cn/sourcedb/cn/jssrck/202111/t20211108_6246309.html'>Prof. Rui Zhang</a>.</p>
    <p>Previously, as an undergraduate student at Harbin Institute of Technology, I completed a research internship at <a href="https://ir.hit.edu.cn">SCIR</a>, focusing on Dialogue System research, supervised by <a href='https://homepage.hit.edu.cn/zhangweinan'>Prof. Wei-Nan Zhang</a>.</p>
    <p>Currently, my research interests focus on <strong>AI for Chip Design</strong> and <strong>AI for System</strong>.</p>
    <div class="research-map" aria-label="Research methods and application domains">
      <div class="research-ai">
        <span class="research-ai__title">AI</span>
        <span class="research-ai__method">Self-Evolving Coding Agent</span>
        <span class="research-ai__method">Reinforcement Learning</span>
      </div>
      <div class="research-map__arrow" aria-hidden="true"></div>
      <div class="research-map__domains">
        <div class="research-domain research-domain--system">System</div>
        <div class="research-domain research-domain--chip">Chip Design</div>
      </div>
    </div>
    <p class="about-contact">
      <span>Open to collaboration, academic exchange, and internship opportunities.</span>
      <a href="mailto:kcxain@gmail.com"><i class="fas fa-envelope" aria-hidden="true"></i> kcxain@gmail.com</a>
    </p>
  </section>

  <section class="about-section contributions-section">
    <h2>Contributions</h2>
    <ul class="contribution-stats" data-contribution-stats>
      <li class="contribution-stat contribution-stat--scholar">
        <a class="contribution-stat__link" href="{{ site.author.googlescholar }}" aria-label="Google Scholar citations">
          <span class="contribution-stat__mark" aria-hidden="true"><i class="fas fa-graduation-cap"></i></span>
          <span class="contribution-stat__source">Google Scholar</span>
          <span class="contribution-stat__value" data-stat="scholar-citations">--</span>
          <span class="contribution-stat__label">Citations</span>
        </a>
      </li>
      <li class="contribution-stat contribution-stat--github">
        <a class="contribution-stat__link" href="https://github.com/{{ site.author.github }}?tab=repositories" aria-label="GitHub stars">
          <span class="contribution-stat__mark" aria-hidden="true"><i class="fab fa-github"></i></span>
          <span class="contribution-stat__source">GitHub</span>
          <span class="contribution-stat__value" data-stat="github-stars">--</span>
          <span class="contribution-stat__label">Stars</span>
        </a>
      </li>
      <li class="contribution-stat contribution-stat--zhihu">
        <a class="contribution-stat__link" href="https://www.zhihu.com/people/{{ site.author.zhihu }}" aria-label="Zhihu followers">
          <span class="contribution-stat__mark" aria-hidden="true">{% include icons/zhihu-square.svg %}</span>
          <span class="contribution-stat__source">Zhihu</span>
          <span class="contribution-stat__value" data-stat="zhihu-followers">--</span>
          <span class="contribution-stat__label">Followers</span>
        </a>
      </li>
      <li class="contribution-stat contribution-stat--zhihu">
        <a class="contribution-stat__link" href="https://www.zhihu.com/people/{{ site.author.zhihu }}" aria-label="Zhihu upvotes">
          <span class="contribution-stat__mark" aria-hidden="true">{% include icons/zhihu-square.svg %}</span>
          <span class="contribution-stat__source">Zhihu</span>
          <span class="contribution-stat__value" data-stat="zhihu-voteups">--</span>
          <span class="contribution-stat__label">Upvotes</span>
        </a>
      </li>
    </ul>
  </section>

  <section class="about-section">
    <h2>News</h2>
    <ul class="about-list plain-list news-list">
      {% for item in site.data.news %}
      <li>
        {% if item.content_html %}
          {{ item.content_html }}
        {% elsif item.content %}
          {{ item.content | markdownify | remove: '<p>' | remove: '</p>' }}
        {% else %}
          <span class="news-date">[{{ item.date }}]</span>
          <a href="{{ item.link_url }}">{{ item.title }}</a>
          {{ item.text_after_link }} <strong>{{ item.venue }}</strong>.
        {% endif %}
      </li>
      {% endfor %}
    </ul>
  </section>
  <section class="about-section">
    <h2>Publications</h2>
    <ul class="about-list pub-list">
      {% for pub in site.data.publications %}
      <li>
        {% assign paper_link = nil %}
        {% for link in pub.links %}
          {% if link.type == "paper" and paper_link == nil %}
            {% assign paper_link = link.url %}
          {% endif %}
        {% endfor %}
        <span class="pub-title">
          {% if paper_link %}
            <a href="{{ paper_link }}">{{ pub.title }}</a>
          {% else %}
            {{ pub.title }}
          {% endif %}
        </span>
        <p class="pub-authors">{{ pub.authors | replace: "Changxin Ke", "<span class='me'>Changxin Ke</span>" }}</p>
        <p class="pub-meta">
          {% if pub.conf and pub.conf != "" %}
            {% assign venue_label = pub.conf | append: ", " | append: pub.year %}
          {% else %}
            {% assign venue_label = pub.year %}
          {% endif %}
          {% assign has_venue_tooltip = false %}
          {% if pub.conf_full and pub.conf_full != "" %}
            {% assign has_venue_tooltip = true %}
          {% endif %}
          {% assign venue_class = "pub-venue" %}
          {% if pub.conf == "Preprint" %}
            {% assign venue_class = venue_class | append: " pub-venue--preprint" %}
          {% endif %}
          <span class="pub-venue-slot">
            {% if has_venue_tooltip %}
              <span class="{{ venue_class }} pub-venue-abbr" data-full="{{ pub.conf_full }}" aria-label="{{ venue_label }}: {{ pub.conf_full }}">{{ venue_label }}</span>
            {% else %}
              <span class="{{ venue_class }}">{{ venue_label }}</span>
            {% endif %}
          </span>
          {% if pub.links and pub.links.size > 0 %}
            <span class="pub-links">
              {% for link in pub.links %}
                {% assign icon_class = "" %}
                {% assign icon_include = "" %}
                {% if link.type == "code" %}
                  {% assign icon_class = "fab fa-github" %}
                {% elsif link.type == "models" %}
                  {% assign icon_class = "hf-icon" %}
                {% elsif link.type == "blog" %}
                  {% if link.url contains "zhihu.com" %}
                    {% assign icon_include = "zhihu-square" %}
                  {% elsif link.url contains "weixin.qq.com" %}
                    {% assign icon_class = "fab fa-weixin" %}
                  {% else %}
                    {% assign icon_class = "far fa-newspaper" %}
                  {% endif %}
                {% elsif link.type == "paper" %}
                  {% assign icon_class = "fas fa-file-alt" %}
                {% endif %}
                <a class="{{ link.type }}{% if icon_include == "zhihu-square" %} zhihu-blog-link{% endif %}" href="{{ link.url }}">[{% if icon_include == "zhihu-square" %}{% include icons/zhihu-square.svg %}{% elsif icon_class == "hf-icon" %}<img class="pub-link-icon hf-icon" src="/images/logos/huggingface.svg" width="95" height="88" alt="HF" aria-hidden="true" loading="lazy" decoding="async">{% elsif icon_class != "" %}<i class="{{ icon_class }} pub-link-icon" aria-hidden="true"></i>{% endif %}{{ link.name }}]</a>
              {% endfor %}
            </span>
          {% endif %}
        </p>
      </li>
      {% endfor %}
    </ul>
  </section>

  <section class="about-section">
    <h2>Patents</h2>
    <ul class="about-list plain-list">
      <li>一种自验证式的探索预训练语言模型中明喻知识的方法及其系统
        <p>张伟男，马龙轩，柯昌鑫，刘挺</p>
      </li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Education</h2>
    <div class="timeline">
      <div class="timeline__item">
        <div class="timeline__date">2024.08 - Present</div>
        <div class="timeline__axis" aria-hidden="true"></div>
        <div class="timeline__card">
          <div class="timeline__main">
            <div class="timeline__title">Institute of Computing Technology</div>
            <div class="timeline__meta">Master</div>
          </div>
          <div class="timeline__logo timeline__logo--wordmark">
            <img src="/images/logos/ict_logo.png" width="569" height="86" alt="ICT logo" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
      <div class="timeline__item">
        <div class="timeline__date">2020.09 - 2024.06</div>
        <div class="timeline__axis" aria-hidden="true"></div>
        <div class="timeline__card">
          <div class="timeline__main">
            <div class="timeline__title">Harbin Institute of Technology</div>
            <div class="timeline__meta">Undergraduate</div>
          </div>
          <div class="timeline__logo timeline__logo--seal">
            <img src="/images/logos/hit_logo.png" width="1280" height="1164" alt="HIT logo" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <h2>Experience</h2>
    <div class="timeline">
      <div class="timeline__item">
        <div class="timeline__date">2026.01 - Present</div>
        <div class="timeline__axis" aria-hidden="true"></div>
        <div class="timeline__card timeline__card--experience">
          <div class="timeline__main">
            <div class="timeline__title">Cambricon</div>
            <div class="timeline__meta">AI Research Intern</div>
          </div>
          <div class="timeline__logo timeline__logo--brand">
            <img src="/images/logos/cambricon_logo.png" width="1482" height="508" alt="Cambricon logo" loading="lazy" decoding="async">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <h2>Competitions</h2>
    <ul class="about-list plain-list">
      <li>
        <span class="news-date">[2023.03]</span> <a href='https://dstc11.dstc.community'>The 11th Dialog System Technology Challenge</a>
        <p>🏅<strong>1st</strong> place in one subtask and 🥉<strong>3rd</strong> place overall, in the task of enhancing task-oriented dialogue generation with external knowledge retrieval.</p>
      </li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Honors</h2>
    <ul class="about-list plain-list">
      <li><span class="news-date">[2025.11]</span> Excellent Prize of the President Scholarship（所长优秀奖）, ICT, CAS</li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Services</h2>
    <ul class="about-list plain-list">
      <li>Reviewer: EMNLP 2023, NeurIPS 2026</li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Visitors</h2>
    <div class="visitor-map-card">
      <div class="visitor-map" id="visitors-box" aria-label="Visitor map"></div>
    </div>
  </section>

</div>
