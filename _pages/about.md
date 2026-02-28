---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
.masthead {
  display: none !important;
}

:root {
  --ink: #20252d;
  --muted: #5f6977;
  --line: rgba(18, 24, 32, 0.14);
  --surface: rgba(255, 255, 255, 0.7);
  --accent-a: #0f6b7f;
  --accent-a-bg: rgba(15, 107, 127, 0.09);
  --accent-b: #b83b5e;
  --accent-b-bg: rgba(184, 59, 94, 0.1);
  --accent-c: #8d6e00;
  --accent-c-bg: rgba(141, 110, 0, 0.1);
}

.about-wrap {
  color: var(--ink);
  font-family: Arial, "Noto Sans SC", "Microsoft YaHei", sans-serif;
  font-size: 1.1rem;
  line-height: 1.65;
}

.about-wrap a,
.about-wrap a:hover,
.about-wrap a:focus,
.about-wrap a:active,
.about-wrap a:visited {
  text-decoration: none !important;
}

.about-hero {
  background:
    linear-gradient(130deg, rgba(15, 107, 127, 0.05), rgba(184, 59, 94, 0.05)),
    var(--surface);
  padding: 1.2rem 1.1rem;
  margin-bottom: 1.2rem;
  border-radius: 0;
}

.about-hero p {
  margin: 0.35rem 0;
  line-height: 1.75;
}

.about-contact {
  background: rgba(184, 59, 94, 0.08);
  padding: 0.6rem 0.75rem;
  border-radius: 0;
  text-align: center;
}

.scholar-link {
  display: inline-block;
  color: #4e5968;
  font-weight: 600;
}

.scholar-badge {
  vertical-align: middle;
}

.scholar-fallback {
  display: none;
  margin-left: 0.25rem;
}

.about-section {
  margin-top: 1.85rem;
}

.about-section h2 {
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  font-weight: 640;
  color: #4b5563;
  border-bottom: none !important;
  box-shadow: none !important;
  padding-bottom: 0 !important;
}

.about-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.about-list li {
  padding: 0.75rem 0.85rem;
  margin-bottom: 0.65rem;
  background: rgba(255, 255, 255, 0.55);
  border-radius: 0;
}

.plain-list li {
  position: relative;
  padding: 0 0 0.28rem 1rem;
  margin-bottom: 0.62rem;
  background: transparent;
}

.plain-list {
  list-style: none;
  padding-left: 0;
}

.plain-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.56em;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  background: rgba(15, 107, 127, 0.62);
}

.news-date {
  color: #4b5563;
  font-weight: 600;
}

.interest-list {
  list-style: none;
  margin: 0.35rem 0 0;
  padding: 0;
}

.interest-list li {
  position: relative;
  padding-left: 1rem;
  margin: 0.2rem 0;
}

.interest-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 0.38rem;
  height: 0.38rem;
  border: 1.5px solid rgba(15, 107, 127, 0.8);
  border-radius: 50%;
}

.pub-list li {
  position: relative;
  padding: 0.12rem 0 0.35rem 1rem;
  margin-bottom: 0.72rem;
  background: transparent;
  transition: none;
  overflow: visible;
}

.pub-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.56rem;
  width: 0.32rem;
  height: 0.32rem;
  border-radius: 50%;
  background: rgba(15, 107, 127, 0.45);
}

.pub-list li:hover {
  transform: none;
}

.about-list li p {
  margin: 0.2rem 0 0;
}

.pub-title {
  display: block;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.12rem;
  line-height: 1.34;
}

.pub-title a {
  color: #1f2937;
  text-decoration: none;
}

.pub-title a:hover {
  text-decoration: none;
}

.pub-meta {
  font-family: inherit;
  margin: 0.06rem 0 0;
  color: #4e5968;
  font-size: 0.95rem !important;
  font-weight: 550;
  line-height: 1.45;
}

.pub-venue {
  color: rgba(15, 107, 127, 0.88);
}

.pub-venue-slot {
  display: inline;
}

.pub-venue-abbr {
  position: relative;
  cursor: pointer;
  border-bottom: 1px dotted rgba(75, 85, 99, 0.45);
  outline: none;
}

.pub-venue-abbr::after {
  content: attr(data-full);
  position: absolute;
  left: 50%;
  bottom: calc(100% + 10px);
  transform: translate(-50%, 4px);
  min-width: 180px;
  max-width: 320px;
  padding: 0.34rem 0.5rem;
  background: rgba(255, 255, 255, 0.97);
  color: #1f2937;
  border: 1px solid rgba(15, 107, 127, 0.2);
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(18, 24, 32, 0.12);
  text-align: center;
  white-space: normal;
  line-height: 1.45;
  font-size: 0.86rem;
  font-style: normal;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.16s ease, transform 0.16s ease;
  z-index: 12;
}

.pub-venue-abbr::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: calc(100% + 4px);
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.97);
  border-right: 1px solid rgba(15, 107, 127, 0.2);
  border-bottom: 1px solid rgba(15, 107, 127, 0.2);
  transform: translateX(-50%) rotate(45deg);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.16s ease;
  z-index: 12;
}

.pub-venue-abbr:hover::after {
  opacity: 1;
  transform: translate(-50%, 0);
}

.pub-venue-abbr:hover::before {
  opacity: 1;
}

.pub-venue-abbr.is-open::after {
  opacity: 1;
  transform: translate(-50%, 0);
}

.pub-venue-abbr.is-open::before {
  opacity: 1;
}

.pub-authors {
  font-family: inherit;
  color: #4e5968;
  font-size: 0.95rem !important;
  font-weight: 500;
  line-height: 1.45;
  margin: 0.02rem 0 0;
}

.pub-authors .me {
  color: var(--ink);
  font-weight: 600;
}

.pub-links a {
  font-weight: 400;
  text-decoration: none;
}

.pub-link-icon {
  margin-right: 0.18rem;
  font-size: 0.92em;
  vertical-align: -0.02em;
}

.pub-links a:hover {
  text-decoration: none;
}

.pub-links .paper {
  color: rgba(21, 101, 192, 0.9);
}

.pub-links .code {
  color: rgba(184, 59, 94, 0.86);
}

.pub-links .sep {
  color: #9aa3af;
  margin: 0 0.3rem;
}

.meta-grid {
  display: grid;
  gap: 0.55rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.meta-grid div {
  padding: 0.55rem 0.7rem;
  background: rgba(255, 255, 255, 0.55);
  font-size: 0.95rem;
}

.meta-grid strong {
  color: var(--ink);
}

.map-container {
  width: 50%;
  margin: 2rem auto;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: all 0.3s ease;
}

.map-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.vis-placeholder {
  color: #6b7280;
  font-size: 0.95rem;
}

.edu-grid {
  display: grid;
  gap: 0.72rem;
}

.edu-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.88rem 1rem;
  min-height: 106px;
  border-radius: 10px;
}

.edu-card:first-child {
  background: linear-gradient(130deg, rgba(15, 107, 127, 0.08), rgba(15, 107, 127, 0.03));
}

.edu-card:last-child {
  background: linear-gradient(130deg, rgba(184, 59, 94, 0.08), rgba(184, 59, 94, 0.03));
}

.edu-card.intern-card {
  background: rgba(128, 128, 128, 0.08);
}

.edu-main {
  min-width: 0;
  display: grid;
  row-gap: 0.1rem;
}

.edu-school {
  color: var(--ink);
  font-weight: 760;
  font-size: 1.18rem;
  line-height: 1.32;
  margin-bottom: 0.02rem;
}

.edu-time {
  color: var(--muted);
  font-weight: 400;
  font-size: 1.02rem;
  line-height: 1.35;
}

.edu-degree {
  color: #3f4958;
  font-weight: 560;
  font-size: 1.1rem;
  line-height: 1.35;
}

.edu-icon {
  flex: 0 0 140px;
  width: 140px;
  opacity: 0.96;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.edu-icon img {
  height: 72px;
  width: auto;
  max-width: 140px;
  object-fit: contain;
  display: block;
}

.edu-icon img.ict-logo {
  height: 72px;
  max-width: 260px;
}

.edu-icon img.cambricon-logo {
  height: 48px;
  max-width: 240px;
}

@media (max-width: 860px) {
  .meta-grid {
    grid-template-columns: 1fr;
  }

  .map-container {
    width: 100%;
    margin: 1rem 0;
    border-radius: 12px;
  }

  .edu-card {
    min-height: 0;
    align-items: flex-start;
    flex-direction: column;
    gap: 0.7rem;
  }

  .edu-icon {
    flex: none;
    width: 100%;
    justify-content: flex-start;
  }

  .pub-venue-abbr::after {
    left: 0;
    right: auto;
    transform: translate(0, 4px);
    min-width: min(14rem, 50vw) !important;
    width: fit-content !important;
    max-width: 50vw !important;
    text-align: left;
  }

  .pub-venue-abbr::before {
    left: 0.9rem;
    transform: rotate(45deg);
  }

  .pub-venue-abbr:hover::after,
  .pub-venue-abbr.is-open::after {
    transform: translate(0, 0);
  }

}
</style>

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
    const mapUrl = "https://mapmyvisitors.com/map.js?cl=665e5e&w=a&t=tt&d=SjjurNgWllQXVKAe4foD6Jsl7veBsrfGxa02WosLzvE&co=ffffff&ct=808080&cmo=ff7c53&cmn=31d631";
    const s = document.createElement("script");
    s.id = "mapmyvisitors";
    s.async = true;
    s.src = mapUrl;

    const failTimer = setTimeout(function () {
      if (!document.getElementById("mapmyvisitors")) return;
      visitorsBox.innerHTML = "<p class='vis-placeholder'>Visitor map is unavailable under current network conditions.</p>";
    }, 6000);

    s.onload = function () {
      clearTimeout(failTimer);
    };
    s.onerror = function () {
      clearTimeout(failTimer);
      visitorsBox.innerHTML = "<p class='vis-placeholder'>Visitor map failed to load. Please retry later.</p>";
    };

    visitorsBox.innerHTML = "";
    visitorsBox.appendChild(s);
  }
});
</script>

<span class="anchor" id="about-me"></span>

<div class="about-wrap">
  <section class="about-hero">
    <p>I am a second-year Master's student at the Intelligent Processor Research Center, Institute of Computing Technology (ICT), Chinese Academy of Sciences, advised by <a href='https://ict.cas.cn/sourcedb/cn/jssrck/202111/t20211108_6246309.html'>Prof. Rui Zhang</a>.</p>
    <p>Previously, as an undergraduate student at Harbin Institute of Technology, I completed a research internship at <a href="https://ir.hit.edu.cn">SCIR</a>, focusing on Dialogue System research, supervised by <a href='https://homepage.hit.edu.cn/zhangweinan'>Prof. Wei-Nan Zhang</a>.</p>
    <p>Currently, my research interests include:
      <a class="scholar-link" href='https://scholar.google.com/citations?user=puvUUPwAAAAJ'>
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
      </a>
    </p>
    <ul class="interest-list">
      <li>AI for Chip Design</li>
      <li>AI for Domain-Specific Code Generation</li>
    </ul>
    <p class="about-contact"><span style="color:red;">If you are seeking any form of collaboration, communication or offering internship opportunity<br>feel free to email me <a href="mailto:kcxain@gmail.com" style="color:red"><i class="fas fa-envelope" aria-hidden="true"></i> kcxain@gmail.com</a>.</span></p>
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
          <span class="pub-venue-slot"><span class="pub-venue pub-venue-abbr" data-full="{{ pub.conf_full }}">{{ pub.conf }}, {{ pub.year }}</span></span>
          {% if pub.links and pub.links.size > 0 %}
            <span class="sep">&nbsp;&nbsp;</span>
            <span class="pub-links">
              {% for link in pub.links %}
                {% unless forloop.first %}<span class="sep">|</span>{% endunless %}
                {% assign icon_class = "" %}
                {% if link.type == "code" %}
                  {% assign icon_class = "fab fa-github" %}
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
                <a class="{{ link.type }}" href="{{ link.url }}">[{% if icon_class != "" %}<i class="{{ icon_class }} pub-link-icon" aria-hidden="true"></i>{% endif %}{{ link.name }}]</a>
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
    <h2>Educations</h2>
    <div class="edu-grid">
      <div class="edu-card">
        <div class="edu-main">
          <div class="edu-school">Institute of Computing Technology</div>
          <div class="edu-degree">Master</div>
          <div class="edu-time">2024.08 - Present</div>
        </div>
        <div class="edu-icon">
          <img class="ict-logo" src="/images/logos/ict_logo.png" alt="ICT logo">
        </div>
      </div>
      <div class="edu-card">
        <div class="edu-main">
          <div class="edu-school">Harbin Institute of Technology</div>
          <div class="edu-degree">Undergraduate</div>
          <div class="edu-time">2020.09 - 2024.06</div>
        </div>
        <div class="edu-icon">
          <img src="/images/logos/hit_logo.png" alt="HIT logo">
        </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <h2>Experience</h2>
    <div class="edu-grid">
      <div class="edu-card intern-card">
        <div class="edu-main">
          <div class="edu-school">Cambricon</div>
          <div class="edu-degree">AI Research Intern</div>
          <div class="edu-time">2026.01 - Present</div>
        </div>
        <div class="edu-icon">
          <img class="cambricon-logo" src="/images/logos/cambricon_logo.png" alt="Cambricon logo">
        </div>
      </div>
    </div>
  </section>

  <section class="about-section">
    <h2>Competitions</h2>
    <ul class="about-list plain-list">
      <li>
        <a href='https://dstc11.dstc.community'>The 11th Dialog System Technology Challenge (DSTC11)</a>
        <p><strong>1st</strong> place in one subtask and <strong>3rd</strong> place overall, in the task of enhancing task-oriented dialogue generation with external knowledge retrieval.</p>
      </li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Honors</h2>
    <ul class="about-list plain-list">
      <li><span class="news-date">[2025.11]</span> Excellent Prize of the President Scholarship, ICT, CAS</li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Services</h2>
    <ul class="about-list plain-list">
      <li>Reviewer: EMNLP'23</li>
    </ul>
  </section>

  <section class="about-section">
    <h2>Visitors</h2>
    <div class="map-container" id="visitors-box">
      <p class="vis-placeholder">Loading visitor map when this section is in view...</p>
    </div>
  </section>
</div>
