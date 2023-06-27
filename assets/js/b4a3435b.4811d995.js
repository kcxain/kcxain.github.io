"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[6271],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),g=a,f=s["".concat(i,".").concat(g)]||s[g]||m[g]||o;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:a,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},75970:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={authors:"kcxain",tags:["NLP","\u9879\u76ee"]},c="\u6211\u7528 2 \u4e07\u6761\u804a\u5929\u8bb0\u5f55\uff0c\u521b\u9020\u4e86\u6211\u7684\u6570\u5b57\u751f\u547d",l={permalink:"/blog/2023/05/24/chatglm",editUrl:"https://github.com/kcxain/Kcx_Learning/tree/master/blog/2023/05-24-chatglm.md",source:"@site/blog/2023/05-24-chatglm.md",title:"\u6211\u7528 2 \u4e07\u6761\u804a\u5929\u8bb0\u5f55\uff0c\u521b\u9020\u4e86\u6211\u7684\u6570\u5b57\u751f\u547d",description:"\u672c\u6587\u4ecd\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\uff01",date:"2023-05-24T00:00:00.000Z",formattedDate:"2023\u5e745\u670824\u65e5",tags:[{label:"NLP",permalink:"/blog/tags/nlp"},{label:"\u9879\u76ee",permalink:"/blog/tags/\u9879\u76ee"}],readingTime:4.095,hasTruncateMarker:!0,authors:[{name:"Kcxain",url:"https://github.com/kcxain",email:"kcxain@gmail.com",imageURL:"https://github.com/kcxain.png",key:"kcxain"}],frontMatter:{authors:"kcxain",tags:["NLP","\u9879\u76ee"]},prevItem:{title:"\u54c8\u5de5\u5927 SCIR \u5b9e\u9a8c\u5ba4\u7b14\u8bd5\u5c0f\u8bb0",permalink:"/blog/2023/06/26/scir-test"},nextItem:{title:"[\u4ee3\u7801\u89e3\u8bfb] BERT\u53e5\u5b50\u8868\u5f81\u80fd\u529b\u7684\u6539\u8fdb\uff1aCondenser",permalink:"/blog/2023/05/18/condenser"}},i={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u672c\u6587\u4ecd\u5728\u6301\u7eed\u66f4\u65b0\u4e2d\uff01")),(0,a.kt)("p",null,"\u6700\u8fd1\u6709\u4e2a\u5947\u5947\u602a\u602a\u7684\u60f3\u6cd5\uff1a\u5982\u679c\u7528\u6211\u7684\u6240\u6709\u793e\u4ea4\u8f6f\u4ef6\u7684\u804a\u5929\u8bb0\u5f55\u6765\u8bad\u7ec3\u50cf ChatGPT \u8fd9\u6837\u7684\u5927\u8bed\u8a00\u6a21\u578b\uff0c\u90a3\u4e48\u5b83\u80fd\u4e0d\u80fd\u5b66\u4f1a\u6211\u7684\u8bf4\u8bdd\u98ce\u683c\uff0c\u751a\u81f3\u62e5\u6709\u6211\u7684\u8bb0\u5fc6\u5462\uff1f"),(0,a.kt)("p",null,"\u8bf4\u5e72\u5c31\u5e72\uff0c\u6211\u4ece\u6211\u7684 QQ \u5bfc\u51fa\u6240\u6709\u804a\u5929\u8bb0\u5f55\uff0c\u5e76\u6784\u9020\u51fa\u4e86\u4e24\u4e07\u6761\u5bf9\u8bdd\u6570\u636e\uff0c\u4f7f\u7528 P-Tune v2 \u5fae\u8c03\u6e05\u534e\u5927\u5b66\u5f00\u6e90\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/THUDM/ChatGLM-6B"},"ChatGLM-6B")," \u6a21\u578b\uff0c\u521b\u9020\u4e86\u6211\u7684\u6570\u5b57\u751f\u547d\uff01"),(0,a.kt)("p",null,"\u9879\u76ee\u5df2\u5f00\u6e90\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kcxain/CloneLLM"},"kcxain/CloneLLM: Clone Yourself by Fine-tuning a Large Language Model | \u7528\u5927\u8bed\u8a00\u6a21\u578b\u521b\u9020\u4f60\u7684\u6570\u5b57\u751f\u547d\uff01 (github.com)")))}m.isMDXComponent=!0}}]);