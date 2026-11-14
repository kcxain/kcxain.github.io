---
layout: home
permalink: /
redirect_from:
  - /about/
  - /about.html
---

<section id="about" class="intro" aria-labelledby="about-title">
  <img class="portrait" src="{{ site.author.avatar | relative_url }}" alt="{{ site.author.name | escape }}" width="350" height="350" fetchpriority="high" decoding="async">
  <h1 id="about-title">{{ site.author.name_en }} <span lang="zh">{{ site.author.name_zh }}</span></h1>
  <ul class="resource-links" aria-label="Contact and profile links">
    <li><a href="mailto:{{ site.author.email }}">{% include icon.html name="envelope" %} {{ site.author.email }}</a></li>
    <li><a href="{{ site.author.googlescholar }}">{% include icon.html name="graduation-cap" %} Google Scholar</a></li>
    <li><a href="https://github.com/{{ site.author.github }}">{% include icon.html name="github" %} GitHub</a></li>
    <li><a href="https://www.zhihu.com/people/{{ site.author.zhihu }}">{% include icon.html name="zhihu-square" %} Zhihu</a></li>
  </ul>
  <p class="profile-stats"><span>Citations <span class="profile-count" aria-label="{{ site.data.profile_stats.google_scholar.citations }} citations" title="Citations · updated {{ site.data.profile_stats.google_scholar.updated_at | date: '%Y-%m-%d' }}">{% include stat-number.html value=site.data.profile_stats.google_scholar.citations %}</span></span><span class="stats-separator" aria-hidden="true">·</span><span>Followers <span class="profile-count" aria-label="{{ site.data.profile_stats.zhihu.followers }} followers" title="Followers · updated {{ site.data.profile_stats.zhihu.updated_at | date: '%Y-%m-%d' }}">{% include stat-number.html value=site.data.profile_stats.zhihu.followers %}</span></span></p>
  <p>I am a third-year PhD candidate of <strong>Intelligent Processor Research Center（智能处理器研究中心）</strong>, Institute of Computing Technology, supervised by <a href='https://ict.cas.cn/sourcedb/cn/jssrck/202111/t20211108_6246309.html'>Rui Zhang</a>, <a href='https://ict.cas.cn/sourcedb/cn/jssrck/202502/t20250220_7530352.html'>Yuanbo Wen</a> and <a href='https://ict.cas.cn/sourcedb/cn/jssrck/202003/t20200310_5509322.html'>Xishan Zhang</a>.</p>

  <p>Previously, as an undergraduate student at Harbin Institute of Technology, I completed a research internship at <a href="https://ir.hit.edu.cn">SCIR</a>, working on Dialogue System, advised by <a href='https://homepage.hit.edu.cn/zhangweinan'>Wei-Nan Zhang</a>.</p>

  <p>My research focuses on <strong>Recursive Self-Improvement (RSI)</strong> through <strong>AI4Chip</strong> and <strong>AI4Sys</strong>: AI improves chip design and system software, enabling more capable AI.</p>
  <ul>
    <li>Reinforcement Learning for Model Post-Training</li>
    <li>Self-Verifying and Self-Improving Agents</li>
    <li>Agent Systems for Reliably Scaling Frontier Discovery</li>
  </ul>
  <p>Open to collaboration, academic exchange, and internship opportunities.</p>
</section>

<section id="news" class="content-section" aria-labelledby="news-title">
  <h2 id="news-title">News</h2>
  <ul class="detail-list">
    {% for item in site.data.news %}
    <li>
      {{ item.content_html }}
    </li>
    {% endfor %}
  </ul>
</section>

<section id="publications" class="content-section" aria-labelledby="publications-title">
  <h2 id="publications-title">Publications</h2>
  <div class="publication-list">
    {% for pub in site.data.publications %}
    {% include publication.html pub=pub index=forloop.index %}
    {% endfor %}
  </div>
</section>

<section id="education" class="content-section" aria-labelledby="education-title">
  <h2 id="education-title">Education</h2>
  {% include career-list.html entries=site.data.career.education %}
</section>

<section id="experience" class="content-section" aria-labelledby="experience-title">
  <h2 id="experience-title">Experience</h2>
  {% include career-list.html entries=site.data.career.experience %}
</section>

<section class="content-section" aria-labelledby="patents-title">
  <h2 id="patents-title">Patents</h2>
  <ul class="detail-list">
    <li>一种自验证式的探索预训练语言模型中明喻知识的方法及其系统
      <p>张伟男，马龙轩，柯昌鑫，刘挺</p>
    </li>
  </ul>
</section>

<section class="content-section" aria-labelledby="competitions-title">
  <h2 id="competitions-title">Competitions</h2>
  <ul class="detail-list">
    <li>
      <span class="date">[2023.03]</span> <a href='https://dstc11.dstc.community'>The 11th Dialog System Technology Challenge</a>
      <p><strong>1st</strong> place in one subtask and <strong>3rd</strong> place overall, in the task of enhancing task-oriented dialogue generation with external knowledge retrieval.</p>
    </li>
  </ul>
</section>

<section class="content-section" aria-labelledby="honors-title">
  <h2 id="honors-title">Honors</h2>
  <ul class="detail-list">
    <li><span class="date">[2026.10]</span> Huang Kun–Cambricon Qingjin Award（黄昆-寒武纪青衿奖）, 20th National Semiconductor and Integrated Technology Conference</li>
    <li><span class="date">[2026.05]</span> Outstanding Model Student（三好学生标兵）, UCAS</li>
    <li><span class="date">[2025.11]</span> Excellent Prize of the President Scholarship（所长优秀奖）, ICT, CAS</li>
  </ul>
</section>

<section class="content-section" aria-labelledby="services-title">
  <h2 id="services-title">Services</h2>
  <ul class="detail-list">
    <li>Reviewer: EMNLP 2023, NeurIPS 2026, AAAI 2027, ICLR 2027</li>
  </ul>
</section>
