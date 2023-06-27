"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[4256],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),m=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,N=c["".concat(i,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(N,s(s({ref:t},o),{},{components:a})):n.createElement(N,s({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=k;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,s[1]=p;for(var m=2;m<l;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},54190:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={authors:"kcxain",tags:["NLP","deep learning"]},s="BERT \u5bb6\u65cf\u5927\u5168\u89e3\u2014\u2014RoBERTa, DeBERTa",p={permalink:"/blog/2022/11/12/bert-family",editUrl:"https://github.com/kcxain/Kcx_Learning/tree/master/blog/2022/11-12-bert-family.md",source:"@site/blog/2022/11-12-bert-family.md",title:"BERT \u5bb6\u65cf\u5927\u5168\u89e3\u2014\u2014RoBERTa, DeBERTa",description:"\u672c\u6587\u5c06\u5bf9 BERT \u53ca\u5176\u53d8\u79cd\u6a21\u578b\u8fdb\u884c\u5168\u9762\u7684\u4ecb\u7ecd\u548c\u5206\u6790\uff0c\u5305\u62ec RoBERTa\u3001DeBERTa\u3001BART \u7b49\uff0c\u5e0c\u671b\u80fd\u591f\u4e3a\u8bfb\u8005\u63d0\u4f9b\u4e00\u4e2a\u6e05\u6670\u7684\u6982\u89c8\u548c\u53c2\u8003\u3002",date:"2022-11-12T00:00:00.000Z",formattedDate:"2022\u5e7411\u670812\u65e5",tags:[{label:"NLP",permalink:"/blog/tags/nlp"},{label:"deep learning",permalink:"/blog/tags/deep-learning"}],readingTime:1.985,hasTruncateMarker:!0,authors:[{name:"Kcxain",url:"https://github.com/kcxain",email:"kcxain@gmail.com",imageURL:"https://github.com/kcxain.png",key:"kcxain"}],frontMatter:{authors:"kcxain",tags:["NLP","deep learning"]},prevItem:{title:"DSTC11-Track5 \u7ade\u8d5b\u603b\u7ed3",permalink:"/blog/2023/04/10/dstc"},nextItem:{title:"\u8be6\u89e3 Beam Search \u4ee3\u7801\u5b9e\u73b0",permalink:"/blog/2022/09/01/beam-search"}},i={authorsImageUrls:[void 0]},m=[{value:"BERT",id:"bert",level:2},{value:"RoBERTa",id:"roberta",level:2},{value:"\u52a8\u6001\u63a9\u7801",id:"\u52a8\u6001\u63a9\u7801",level:3},{value:"\u79fb\u9664NSP\u4efb\u52a1",id:"\u79fb\u9664nsp\u4efb\u52a1",level:3},{value:"DeBERTa\uff1a\u5177\u6709\u89e3\u7801\u589e\u5f3a\u548c\u6ce8\u610f\u529b\u89e3\u8026\u7684 BERT",id:"deberta\u5177\u6709\u89e3\u7801\u589e\u5f3a\u548c\u6ce8\u610f\u529b\u89e3\u8026\u7684-bert",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],o={toc:m},c="wrapper";function u(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},o,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(72088).Z,width:"1408",height:"821"})),(0,r.kt)("p",null,"\u672c\u6587\u5c06\u5bf9 BERT \u53ca\u5176\u53d8\u79cd\u6a21\u578b\u8fdb\u884c\u5168\u9762\u7684\u4ecb\u7ecd\u548c\u5206\u6790\uff0c\u5305\u62ec RoBERTa\u3001DeBERTa\u3001BART \u7b49\uff0c\u5e0c\u671b\u80fd\u591f\u4e3a\u8bfb\u8005\u63d0\u4f9b\u4e00\u4e2a\u6e05\u6670\u7684\u6982\u89c8\u548c\u53c2\u8003\u3002"),(0,r.kt)("h2",{id:"bert"},"BERT"),(0,r.kt)("p",null,"\u89c1\uff1a",(0,r.kt)("a",{parentName:"p",href:"/blog/2022/11/04/bert-code"},"BERT \u539f\u7406\u4e0e\u4ee3\u7801\u89e3\u6790")),(0,r.kt)("h2",{id:"roberta"},"RoBERTa"),(0,r.kt)("p",null,"\u8bba\u6587\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1907.11692"},"RoBERTa: A Robustly Optimized BERT Pretraining Approach (arxiv.org)")),(0,r.kt)("p",null,"\u6539\u8fdb\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4fee\u6539\u4e86\u8d85\u53c2\u6570\uff1a\u5c06 adam \u7684 ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"\u03b2"),(0,r.kt)("mn",{parentName:"msub"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\beta_2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05278em"}},"\u03b2"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3011em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"-0.0528em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,r.kt)("span",{parentName:"span"}))))))))))," \u53c2\u6570\u4ece 0.999 \u6539\u4e3a 0.98"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5165\u4e86\u6df7\u5408\u7cbe\u5ea6"),(0,r.kt)("li",{parentName:"ul"},"\u52a0\u5927batch size\uff1a\u4ece BERT \u7684 256 \u6539\u4e3a 2K \u751a\u81f3 8K\uff0c\u8bad\u7ec3\u6b65\u6570\u4ece 1M \u964d\u5230 500K"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u66f4\u957f\u7684\u5e8f\u5217\u4e0a\u8bad\u7ec3\uff0c\u4fee\u6539\u8f93\u5165\u683c\u5f0f\uff1aFULL-SENTENCES + \u79fb\u9664 NSP \u4efb\u52a1"),(0,r.kt)("li",{parentName:"ul"},"\u52a8\u6001\u63a9\u7801\u673a\u5236")),(0,r.kt)("h3",{id:"\u52a8\u6001\u63a9\u7801"},"\u52a8\u6001\u63a9\u7801"),(0,r.kt)("p",null,"BERT \u5728\u9884\u8bad\u7ec3\u65f6\u5bf9\u6570\u636e\u8fdb\u884c mask\uff0c\u4e00\u65e6\u5904\u7406\u597d\u4fbf\u4e0d\u4f1a\u518d\u53d8\uff0c\u8fd9\u4fbf\u662f",(0,r.kt)("strong",{parentName:"p"},"\u9759\u6001\u63a9\u7801"),"\u3002RoBERTa \u6240\u8c13\u7684\u52a8\u6001\u63a9\u7801\u5c31\u662f\u6bcf\u6b21\u8f93\u5165\u65f6\u90fd\u968f\u673a\u8fdb\u884c mask\uff0c\u8fd9\u6837\uff0c\u5728\u5927\u91cf\u6570\u636e\u4e0d\u65ad\u8f93\u5165\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6a21\u578b\u4f1a\u9010\u6e10\u9002\u5e94\u4e0d\u540c\u7684\u63a9\u7801\u7b56\u7565\uff0c\u5b66\u4e60\u4e0d\u540c\u7684\u8bed\u8a00\u8868\u5f81\u3002"),(0,r.kt)("h3",{id:"\u79fb\u9664nsp\u4efb\u52a1"},"\u79fb\u9664NSP\u4efb\u52a1"),(0,r.kt)("p",null,"\u4f5c\u8005\u5bf9\u6bd4\u4e86\u56db\u79cd\u8f93\u5165\u6a21\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SEGMENT-PAIR+NSP\uff1aBERT \u4f7f\u7528\u7684\u65b9\u6cd5\uff0c\u6bcf\u4e2a\u8f93\u5165\u6709\u4e00\u5bf9\u6bb5\u843d\uff0c\u6bb5\u843d\u4e4b\u95f4\u7528 ","[SEP]"," \u5206\u5272\uff0c\u5e76\u4e14\u8ba1\u7b97 NSP \u635f\u5931"),(0,r.kt)("li",{parentName:"ul"},"SENTENCE-PAIR+NSP\uff1a\u5c06 segment \u66ff\u6362\u4e3a sentence"),(0,r.kt)("li",{parentName:"ul"},"FULL-SENTENCES\uff1a\u5982\u679c\u8f93\u5165\u7684\u6700\u5927\u957f\u5ea6\u4e3a512\uff0c\u90a3\u4e48\u5c31\u662f\u5c3d\u91cf\u9009\u62e9 512 \u957f\u5ea6\u7684\u8fde\u7eed\u53e5\u5b50\u3002\u5982\u679c\u8de8 document\u4e86\uff0c\u5c31\u5728\u4e2d\u95f4\u52a0\u4e0a\u4e00\u4e2a\u7279\u6b8a\u5206\u9694\u7b26\uff0c\u4e0d\u4f7f\u7528 NSP \u635f\u5931"),(0,r.kt)("li",{parentName:"ul"},"DOC-SENTENCES\uff1a\u548c FULL-SENTENCES \u4e00\u6837\uff0c\u53ea\u662f\u4e0d\u80fd\u8de8\u6587\u6863")),(0,r.kt)("p",null,"\u5b9e\u9a8c\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(41420).Z,width:"714",height:"365"})),(0,r.kt)("h2",{id:"deberta\u5177\u6709\u89e3\u7801\u589e\u5f3a\u548c\u6ce8\u610f\u529b\u89e3\u8026\u7684-bert"},"DeBERTa\uff1a\u5177\u6709\u89e3\u7801\u589e\u5f3a\u548c\u6ce8\u610f\u529b\u89e3\u8026\u7684 BERT"),(0,r.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/145119424"},"\u4e07\u5b57\u957f\u6587\u5e26\u4f60\u7eb5\u89c8 BERT \u5bb6\u65cf - \u77e5\u4e4e (zhihu.com)"))))}u.isMDXComponent=!0},72088:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1686580600888-79fa286bd07c697a7bd12e3b1018bc13.jpeg"},41420:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-20230613003736967-c7862220b0d60ed75a2b8ba98acbfe7a.png"}}]);