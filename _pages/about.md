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

  const visitorsBox = document.getElementById("visitors-box");
  if (visitorsBox) {
    const visitorsSection = visitorsBox.closest(".about-section");
    const mapUrl = "https://mapmyvisitors.com/map.js?cl=665e5e&w=a&t=tt&d=SjjurNgWllQXVKAe4foD6Jsl7veBsrfGxa02WosLzvE&co=ffffff&ct=808080&cmo=ff7c53&cmn=31d631";

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
    <p>Currently, my research interests center on <strong>Self-Evolving Coding Agent</strong> and <strong>Reinforcement Learning</strong>, with applications in:</p>
    <ul class="interest-list">
      <li><strong>AI for Chip Design</strong></li>
      <li><strong>AI for System</strong></li>
    </ul>
    <p class="about-contact"><span style="color:red;">If you are seeking any form of collaboration, communication or offering internship opportunity, feel free to email me <a href="mailto:kcxain@gmail.com" style="color:red"><i class="fas fa-envelope" aria-hidden="true"></i> kcxain@gmail.com</a>.</span></p>
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
    <h2>Publications <a class="scholar-link heading-scholar-link" href='https://scholar.google.com/citations?user=puvUUPwAAAAJ'>
      <img
        class="scholar-badge"
        src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/kcxain/kcxain.github.io/refs/heads/google-scholar-stats/gs_data_shieldsio.json&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"
        alt="Google Scholar citations"
        loading="lazy"
        decoding="async"
        referrerpolicy="no-referrer"
        onerror="this.style.display='none'; var f=this.parentNode.querySelector('.scholar-fallback'); if(f){f.style.display='inline';}"
      >
      <span class="scholar-fallback">Google Scholar Profile</span>
    </a></h2>
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
          <span class="pub-venue-slot"><span class="pub-venue pub-venue-abbr" data-full="{{ pub.conf_full }}">{{ pub.conf }}, {{ pub.year }}</span></span>
          {% if pub.links and pub.links.size > 0 %}
            <span class="sep">&nbsp;&nbsp;</span>
            <span class="pub-links">
              {% for link in pub.links %}
                {% unless forloop.first %}<span class="sep">|</span>{% endunless %}
                {% assign icon_class = "" %}
                {% if link.type == "code" %}
                  {% assign icon_class = "fab fa-github" %}
                {% elsif link.type == "models" %}
                  {% assign icon_class = "hf-icon" %}
                {% elsif link.type == "blog" %}
                  {% if link.url contains "zhihu.com" %}
                    {% assign icon_class = "fab fa-zhihu" %}
                  {% elsif link.url contains "weixin.qq.com" %}
                    {% assign icon_class = "fab fa-weixin" %}
                  {% else %}
                    {% assign icon_class = "far fa-newspaper" %}
                  {% endif %}
                {% elsif link.type == "paper" %}
                  {% assign icon_class = "fas fa-file-alt" %}
                {% endif %}
                <a class="{{ link.type }}" href="{{ link.url }}">[{% if icon_class == "hf-icon" %}<img class="pub-link-icon hf-icon" src="/images/logos/huggingface.svg" width="95" height="88" alt="HF" aria-hidden="true" loading="lazy" decoding="async">{% elsif icon_class != "" %}<i class="{{ icon_class }} pub-link-icon" aria-hidden="true"></i>{% endif %}{{ link.name }}]</a>
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
    <div class="cv-timeline">
      <div class="cv-row">
        <div class="cv-time">2024.08 - Present</div>
        <div class="edu-card">
        <div class="edu-main">
          <div class="edu-school">Institute of Computing Technology</div>
          <div class="edu-degree">Master</div>
        </div>
        <div class="edu-icon">
          <img class="ict-logo" src="/images/logos/ict_logo.png" width="569" height="86" alt="ICT logo" loading="lazy" decoding="async">
        </div>
      </div>
      </div>
      <div class="cv-row">
        <div class="cv-time">2020.09 - 2024.06</div>
        <div class="edu-card">
        <div class="edu-main">
          <div class="edu-school">Harbin Institute of Technology</div>
          <div class="edu-degree">Undergraduate</div>
        </div>
        <div class="edu-icon">
          <img src="/images/logos/hit_logo.png" width="1280" height="1164" alt="HIT logo" loading="lazy" decoding="async">
        </div>
      </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <h2>Experience</h2>
    <div class="cv-timeline">
      <div class="cv-row">
        <div class="cv-time">2026.01 - Present</div>
        <div class="edu-card intern-card">
        <div class="edu-main">
          <div class="edu-school">Cambricon</div>
          <div class="edu-degree">AI Research Intern</div>
        </div>
        <div class="edu-icon">
          <img class="cambricon-logo" src="/images/logos/cambricon_logo.png" width="1482" height="508" alt="Cambricon logo" loading="lazy" decoding="async">
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
      <li>Reviewer: EMNLP 23, NeurIPS 26-</li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Visitors</h2>
    <div class="map-container" id="visitors-box"></div>
  </section>

</div>
