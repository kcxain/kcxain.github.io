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


<style>
/* 会议标签：保持你之前的学术方框风格 */
.conference-tag {
  display: inline-block;
  border: 1.6px solid #3f51b5;
  color: #3f51b5;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.2em 0.55em;
  border-radius: 6px;
  margin-right: 0.4em;
  background-color: rgba(63,81,181,0.05);
  transition: all 0.2s ease;
}


/* 链接部分整体容器 */
.pub-links {
  margin-left: 0.3em;
  font-size: 1.00rem;
}

/* 分隔符 */
.sep {
  color: #bbb;
  margin: 0 0.25em;
}

/* ---- 链接样式（无边框，仅颜色） ---- */
.pub-link {
  text-decoration: none;
  font-weight: 600;
  transition: all 0.15s ease;
  position: relative;
}

/* Paper - 学术绿色 */
.pub-link.paper {
  color: #2e7d32;
}
.pub-link.paper:hover {
  color: #1b5e20;
  text-decoration: underline;
}

/* Code - 工程蓝 */
.pub-link.code {
  color: #1565c0;
}
.pub-link.code:hover {
  color: #0d47a1;
  text-decoration: underline;
}
</style>


<style>
.conference-tag {
  display: inline-block;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.15em 0.45em;
  border-radius: 4px;
  margin-right: 0.4em;
  transition: background-color 0.2s ease, color 0.2s ease;

  /* 关键部分 ↓↓↓ */
  font-family: "Menlo", "Consolas", "Courier New", monospace !important;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0, "calt" 0, "clig" 0;
  -webkit-font-smoothing: antialiased;
}

/* === 顶会（鲜艳醒目）=== */
.conference-tag[data-conf="NeurIPS"] { color: #ef6c00; background-color: rgba(239,108,0,0.07); }   /* 橙色 */
.conference-tag[data-conf="ICML"]   { color: #2e7d32; background-color: rgba(46,125,50,0.07); }   /* 绿色 */
.conference-tag[data-conf="ICLR"]   { color: #8e24aa; background-color: rgba(142,36,170,0.07); }  /* 紫色 */

/* === 其他AI顶会（次一级，区分但不喧宾夺主）=== */
.conference-tag[data-conf="AAAI"]   { color: #1565c0; background-color: rgba(21,101,192,0.07); }  /* 蓝色偏冷 */
.conference-tag[data-conf="IJCAI"]  { color: #00897b; background-color: rgba(0,137,123,0.07); }   /* 青绿 */
.conference-tag[data-conf="ACL"]    { color:rgb(202, 91, 91); background-color: rgba(198,40,40,0.07); }   /* 红色 */
.conference-tag[data-conf="EMNLP"]  { color: #6d4c41; background-color: rgba(109,76,65,0.07); }   /* 棕色 */

/* === 其他会议 / 期刊 === */
.conference-tag[data-conf="COLING"] { color: #3f51b5; background-color: rgba(63,81,181,0.07); }
.conference-tag[data-conf="Neurocomputing"] { color: #1565c0; background-color: rgba(21,101,192,0.07); }

/* === Preprint 灰色标签 === */
.conference-tag[data-conf="Preprint"] {
  color: #666;
  background-color: rgba(0,0,0,0.05);
}

/* === Hover 效果（轻微）=== */
.conference-tag:hover {
  background-color: rgba(0,0,0,0.08);
}

.paper-title {
  font-size: 1.05rem;          /* 比正文稍大，清晰突出 */
  font-weight: 650;           /* 比 normal 粗一点，但不至于太重 */
  line-height: 1.4;
  display: inline;
  margin-bottom: 0.15em;
}
</style>
<style>
.paper-authors {
  font-size: 1.0rem;
  font-weight: 400;
  line-height: 1.4;
  margin-right: 0.5em;
  display: inline;
  color: #444;
  margin-bottom: 0.75em;
}

/* 自动高亮后的样式 */
.paper-authors .me {
  font-weight: 650;
  color: #2c3e50;
  text-decoration: underline;
  text-underline-offset: 3px;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".paper-authors").forEach(el => {
    el.innerHTML = el.innerHTML.replace(
      /\bChangxin Ke\b/g,
      '<span class="me">Changxin Ke</span>'
    );
  });
});
</script>


<span class='anchor' id='about-me'></span>

🤗 Hello! I'm a second-year Master's student at Institute of Computing Technology (ICT), Chinese Academy of Sciences (CAS), majoring in Computer Science, at Intelligent Processor Research Center (IPRC). I'm fortunately supervised by <a href='https://ict.cas.cn/sourcedb/cn/jssrck/202111/t20211108_6246309.html'>Prof. Rui Zhang</a>.

Previously, as an undergraduate student at Harbin Institute of Technology (HIT), I completed a research internship at <a href="https://ir.hit.edu.cn">SCIR</a>, focusing on <strong>Dialogue System</strong> research, supervised by <a href='https://homepage.hit.edu.cn/zhangweinan'>Prof. Wei-Nan Zhang</a> and <a href='https://xzy.kmust.edu.cn/info/1129/3556.htm'>Prof. Longxuan Ma</a>.

Currently, my research interests include <strong>AI for Chip Design</strong> and <strong>AI for Domain-Specific Code Generation</strong> <a href='https://scholar.google.com/citations?user=puvUUPwAAAAJ'><img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/kcxain/kcxain.github.io/refs/heads/google-scholar-stats/gs_data_shieldsio.json&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

<span style="color:red;">If you are seeking any form of collaboration, communication or internship opportunity, please feel free to email me 📮<a href="mailto:kcxain@gmail.com" style="color:red">kcxain@gmail.com</a>.</span>

# 🔥 News
- *2025.09*: &nbsp;🎉 <a href='arxiv.org/abs/2506.11153'>QiMeng-MuPa</a> has been accepted to <strong>NeurIPS 2025</strong>.

# 📝 Publications 

- <span class="paper-title">QiMeng-MuPa: Mutual-Supervised Learning for Sequential-to-Parallel Code Translation</span> <span class="conference-tag" data-conf="NeurIPS">NeurIPS'25</span>
  - <span class="paper-authors">Changxin Ke, Rui Zhang, Shuo Wang, Li Ding, Guangli Li, Yuanbo Wen, Shuoming Zhang, Ruiyuan Xu, Jin Qin, Jiaming Guo, Chenxi Wang, Ling Li, Qi Guo, Yunji Chen</span><span class="pub-links"><a href="https://arxiv.org/abs/2506.11153" target="_blank" class="pub-link paper">Paper</a><span class="sep">|</span><a href="https://github.com/kcxain/mupa" target="_blank" class="pub-link code">Code</a>
- <span class="paper-title">Large processor chip model</span> <span class="conference-tag" data-conf="Preprint">Preprint</span>
  - <span class="paper-authors">Kaiyan Chang, Mingzhi Chen, Yunji Chen, Zhirong Chen, Dongrui Fan, Junfeng Gong, Nan Guo, Yinhe Han, Qinfen Hao, Shuo Hou, Xuan Huang, Pengwei Jin, Changxin Ke, Cangyuan Li, Guangli Li, Huawei Li, Kuan Li, Naipeng Li, Shengwen Liang, Cheng Liu, Hongwei Liu, Jiahua Liu, Junliang Lv, Jianan Mu, Jin Qin, Bin Sun, Chenxi Wang, Duo Wang, Mingjun Wang, Ying Wang, Chenggang Wu, Peiyang Wu, Teng Wu, Xiao Xiao, Mengyao Xie, Chenwei Xiong, Ruiyuan Xu, Mingyu Yan, Xiaochun Ye, Kuai Yu, Rui Zhang, Shuoming Zhang, Jiacheng Zhao</span>
  <span class="pub-links">
    <a href="https://arxiv.org/abs/2506.02929" target="_blank" class="pub-link paper">Paper</a>
  </span>
- <span class="paper-title">Sycophancy in Vision-Language Models: A Systematic Analysis and an Inference-Time Mitigation Framework</span> <span class="conference-tag" data-conf="Neurocomputing">Neurocomputing'25</span>
  - <span class="paper-authors">Yunpu Zhao, Rui Zhang, Junbin Xiao, Changxin Ke, Ruibo Hou, Yifan Hao, Ling Li</span>
  <span class="pub-links">
    <a href="https://arxiv.org/abs/2408.11261" target="_blank" class="pub-link paper">Paper</a>
  </span>
- <span class="paper-title">A Self-verified Method for Exploring Simile Knowledge from Pre-trained Language Models</span> <span class="conference-tag" data-conf="COLING">COLING'24</span>
  - <span class="paper-authors">Longxuan Ma, Changxin Ke, Shuhan Zhou, Churui Sun, Weinan Zhang, Ting Liu</span>
  <span class="pub-links">
    <a href="https://aclanthology.org/2024.lrec-main.138/" target="_blank" class="pub-link paper">Paper</a><span class="sep">|</span><a href="https://github.com/kcxain/mlsr" target="_blank" class="pub-link code">Code</a>
  </span>
- <span class="paper-title">A Difference-aware Ensemble Method for Task-oriented Dialogue with Subjective Knowledge</span> <span class="conference-tag" data-conf="ACL">DSTC11</span>
  - <span class="paper-authors">Changxin Ke, Churui Sun, Longxuan Ma, Weinan Zhang, Ting Liu</span>
  <span class="pub-links">
    <a href="https://aclanthology.org/2023.dstc-1.24/" target="_blank" class="pub-link paper">Paper</a>
  </span>
- <span class="paper-title">I run as fast as a rabbit, can you? A Multilingual Simile Dialogue Dataset</span> <span class="conference-tag" data-conf="ACL">ACL'23</span>
  - <span class="paper-authors">Longxuan Ma, Weinan Zhang, Shuhan Zhou, Churui Sun, Changxin Ke, Ting Liu</span>
  <span class="pub-links">
    <a href="https://arxiv.org/abs/2306.05672" target="_blank" class="pub-link paper">Paper</a><span class="sep">|</span><a href="https://github.com/malongxuan/msd" target="_blank" class="pub-link code">Code</a>
  </span>

# 📖 Educations
- *2024.08 - Now*, Master's student, Institute of Computing Technology, Beijing.
- *2020.09 - 2024.06*, Undergraduate, Harbin Institute of Technology, Harbin.

# ✊ Competitions
- <strong>🏅1st</strong> place in one subtask and <strong>🥉3rd</strong> place overall at the 11th <a href='https://dstc11.dstc.community'>Dialog System Technology Challenge</a>, in the task of enhancing task-oriented dialogue generation with external knowledge retrieval.

# 📄 Patents
- 一种自验证式的探索预训练语言模型中明喻知识的方法及其系统
  - 张伟男,马龙轩,柯昌鑫,刘挺

# 🏢 Services
- Reviewer: EMNLP'23

# 🌍 Visitors

<script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=665e5e&w=a&t=tt&d=SjjurNgWllQXVKAe4foD6Jsl7veBsrfGxa02WosLzvE&co=ffffff&cmo=ff7c53&cmn=31d631&ct=808080'></script>


<!-- # 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<!-- # 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->