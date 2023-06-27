"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[2705],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=o(a),m=n,k=u["".concat(c,".").concat(m)]||u[m]||h[m]||l;return a?r.createElement(k,p(p({ref:t},s),{},{components:a})):r.createElement(k,p({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36742:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={authors:"kcxain",tags:["\u8ba1\u7b97\u673a\u79d1\u5b66"]},p="CSAPP\uff0c\u6211\u7684\u8ba1\u7b97\u673a\u79d1\u5b66\u542f\u8499\u4e66",i={permalink:"/blog/2022/05/01/csapp",editUrl:"https://github.com/kcxain/Kcx_Learning/tree/master/blog/2022/05-01-csapp.md",source:"@site/blog/2022/05-01-csapp.md",title:"CSAPP\uff0c\u6211\u7684\u8ba1\u7b97\u673a\u79d1\u5b66\u542f\u8499\u4e66",description:"\u672c\u6587\u6700\u65e9\u53d1\u5e03\u4e8e\u6211\u7684\u77e5\u4e4e\uff1a\u5982\u4f55\u9605\u8bfb\u300a\u6df1\u5165\u7406\u89e3\u8ba1\u7b97\u673a\u7cfb\u7edf\u300b\u8fd9\u672c\u4e66\uff1f - \u77e5\u4e4e",date:"2022-05-01T00:00:00.000Z",formattedDate:"2022\u5e745\u67081\u65e5",tags:[{label:"\u8ba1\u7b97\u673a\u79d1\u5b66",permalink:"/blog/tags/\u8ba1\u7b97\u673a\u79d1\u5b66"}],readingTime:12.105,hasTruncateMarker:!0,authors:[{name:"Kcxain",url:"https://github.com/kcxain",email:"kcxain@gmail.com",imageURL:"https://github.com/kcxain.png",key:"kcxain"}],frontMatter:{authors:"kcxain",tags:["\u8ba1\u7b97\u673a\u79d1\u5b66"]},prevItem:{title:"BERT \u539f\u7406\u4e0e\u4ee3\u7801\u89e3\u6790",permalink:"/blog/2022/08/04/bert-code"}},c={authorsImageUrls:[void 0]},o=[{value:"\u5148\u63d0\u51fa\u4e00\u4e9b\u603b\u4f53\u4e0a\u7684\u5efa\u8bae\uff1a",id:"\u5148\u63d0\u51fa\u4e00\u4e9b\u603b\u4f53\u4e0a\u7684\u5efa\u8bae",level:3},{value:"\u7b2c\u4e00\u7ae0\uff1a\u8ba1\u7b97\u673a\u7cfb\u7edf\u6f2b\u6e38",id:"\u7b2c\u4e00\u7ae0\u8ba1\u7b97\u673a\u7cfb\u7edf\u6f2b\u6e38",level:3},{value:"\u7b2c\u4e8c\u7ae0\uff1a\u4fe1\u606f\u7684\u8868\u793a\u548c\u5904\u7406",id:"\u7b2c\u4e8c\u7ae0\u4fe1\u606f\u7684\u8868\u793a\u548c\u5904\u7406",level:3},{value:"\u7b2c\u4e09\u7ae0\uff1a\u7a0b\u5e8f\u7684\u673a\u5668\u7ea7\u8868\u793a",id:"\u7b2c\u4e09\u7ae0\u7a0b\u5e8f\u7684\u673a\u5668\u7ea7\u8868\u793a",level:3},{value:"\u7b2c\u56db\u7ae0\uff1a\u5904\u7406\u5668\u4f53\u7cfb\u7ed3\u6784",id:"\u7b2c\u56db\u7ae0\u5904\u7406\u5668\u4f53\u7cfb\u7ed3\u6784",level:3},{value:"<strong>\u7b2c\u4e94\u7ae0\uff1a\u4f18\u5316\u7a0b\u5e8f\u6027\u80fd</strong>",id:"\u7b2c\u4e94\u7ae0\u4f18\u5316\u7a0b\u5e8f\u6027\u80fd",level:3},{value:"\u7b2c\u516d\u7ae0\uff1a\u5b58\u50a8\u5668\u5c42\u6b21\u7ed3\u6784",id:"\u7b2c\u516d\u7ae0\u5b58\u50a8\u5668\u5c42\u6b21\u7ed3\u6784",level:3},{value:"\u7b2c\u4e03\u7ae0\uff1a\u94fe\u63a5",id:"\u7b2c\u4e03\u7ae0\u94fe\u63a5",level:3},{value:"\u7b2c\u516b\u7ae0\uff1a\u5f02\u5e38\u63a7\u5236\u6d41",id:"\u7b2c\u516b\u7ae0\u5f02\u5e38\u63a7\u5236\u6d41",level:3},{value:"<strong>\u7b2c\u4e5d\u7ae0\uff1a\u865a\u62df\u5185\u5b58</strong>",id:"\u7b2c\u4e5d\u7ae0\u865a\u62df\u5185\u5b58",level:3},{value:"\u7b2c\u5341\u7ae0\uff1a\u7cfb\u7edf\u7ea7 I/O",id:"\u7b2c\u5341\u7ae0\u7cfb\u7edf\u7ea7-io",level:3},{value:"\u7b2c\u5341\u4e00\u3001\u5341\u4e8c\u7ae0\uff1a\u7f51\u7edc\u7f16\u7a0b\u548c\u5e76\u53d1\u7f16\u7a0b",id:"\u7b2c\u5341\u4e00\u5341\u4e8c\u7ae0\u7f51\u7edc\u7f16\u7a0b\u548c\u5e76\u53d1\u7f16\u7a0b",level:3},{value:"\u91cd\u8bfb\u7b2c\u4e00\u7ae0",id:"\u91cd\u8bfb\u7b2c\u4e00\u7ae0",level:3},{value:"\u540e\u7eed\u5b66\u4e60",id:"\u540e\u7eed\u5b66\u4e60",level:2}],s={toc:o},u="wrapper";function h(e){let{components:t,...l}=e;return(0,n.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u672c\u6587\u6700\u65e9\u53d1\u5e03\u4e8e\u6211\u7684\u77e5\u4e4e\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://www.zhihu.com/question/20402534/answer/2655186100"},"\u5982\u4f55\u9605\u8bfb\u300a\u6df1\u5165\u7406\u89e3\u8ba1\u7b97\u673a\u7cfb\u7edf\u300b\u8fd9\u672c\u4e66\uff1f - \u77e5\u4e4e")),(0,n.kt)("p",null,"\u4eca\u5929\uff0c\u804a\u804a\u300a\u6df1\u5165\u7406\u89e3\u8ba1\u7b97\u673a\u7cfb\u7edf\u300b\u8fd9\u672c\u4e66\uff0c\u5f88\u591a\u4eba\u4e00\u770b\u201c\u6df1\u5165\u201d\u4e8c\u5b57\u5c31\u4f1a\u88ab\u5413\u5230\u3002\u5b9e\u9645\u4e0a\uff0c\u5b83\u7684\u82f1\u6587\u5168\u79f0\u662f\uff1aComputer Systems: A Programmer\u2019s Perspective"),(0,n.kt)("p",null,"\u76f4\u8bd1\u8fc7\u6765\uff1a\u4ee5\u4e00\u4e2a\u7a0b\u5e8f\u5458\u7684\u89c6\u89d2\u6765\u770b\u8ba1\u7b97\u673a\u7cfb\u7edf\u3002\u5185\u5bb9\u5e76\u6ca1\u6709\u90a3\u4e48\u96be\uff0c\u53ef\u4ee5\u8bf4\u662f\u8ba1\u7b97\u673a\u79d1\u5b66\u7684\u5927\u7eb2\uff0c\u8ba1\u7b97\u673a\u7ec4\u6210\u539f\u7406\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u7f16\u8bd1\u539f\u7406\u3001\u8ba1\u7b97\u673a\u7f51\u7edc\u7684\u77e5\u8bc6\u5747\u6709\u6d89\u53ca\uff0c\u5185\u5bb9\u517c\u5177\u5e7f\u5ea6\u4e0e\u6df1\u5ea6\u3002"),(0,n.kt)("p",null,"\u8fd9\u672c\u4e66\u6700\u65e9\u662f CMU \u5f00\u8bbe\u7684 Introduction to Computer Systems \u8bfe\u7a0b\u6559\u6750\uff0c\u540e\u6765\u4e5f\u88ab\u56fd\u5185\u7684\u5317\u5927\u3001\u4e0a\u4ea4\u3001\u54c8\u5de5\u5927\u3001\u5317\u90ae\u3001\u6b66\u5927\u7b49\u5b66\u6821\u4f7f\u7528\uff0c\u4f5c\u4e3a\u672c\u79d1\u751f\u201c\u8ba1\u7b97\u673a\u7cfb\u7edf\u5bfc\u8bba\u201d\u8bfe\u7a0b\u7684\u6559\u6750\u3002\u6211\u6821\uff08\u54c8\u5de5\u5927\uff09\u751a\u81f3\u5c06\u5b83\u4f5c\u4e3a\u8003\u7814\u4e13\u4e1a\u8bfe\u7684\u53c2\u8003\u6559\u6750\u3002"),(0,n.kt)("p",null,"\u6211\u662f\u4ece\u5927\u4e8c\u7684\u5bd2\u5047\u5f00\u59cb\u8bfb\u7684\uff0c\u8017\u65f6\u4e09\u4e2a\u6708\uff0c\u8bfb\u5b8c\u4e86\u6574\u672c\u4e66\uff0c\u505a\u5b8c\u4e86\u4e66\u4e2d\u6240\u6709\u7684 exercise\uff08homework \u53ea\u505a\u4e86\u90e8\u5206\u9898\uff09\uff0c\u5e76\u5b8c\u6210\u4e86\u914d\u5957\u7684\u5168\u90e8 9 \u4e2a\u5b9e\u9a8c\u3002"),(0,n.kt)("p",null,"\u8bfb\u5b8c\u4e5f\u662f\u6210\u5c31\u611f\u6ee1\u6ee1\uff08\u56fe\u7247\u6c34\u5370\u4e3a\u6211\u4e2a\u4eba\u77e5\u4e4e\uff09\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(93732).Z,width:"720",height:"486"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(56830).Z,width:"720",height:"540"})),(0,n.kt)("p",null,"\u6211\u6821\u5927\u4e8c\u4e0b\u7684\u201c\u8ba1\u7b97\u673a\u7cfb\u7edf\u201d\u8bfe\u7a0b\u5c31\u662f\u7528\u7684\u8fd9\u672c\u6559\u6750\uff0c\u6211\u5728\u5907\u8003\u671f\u672b\u65f6\u5236\u4f5c\u7684\u4e00\u7eb8\u5f00\u5377\uff0c\u68b3\u7406\u4e86\u5168\u4e66\u5185\u5bb9\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(35838).Z,width:"720",height:"540"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(26470).Z,width:"720",height:"540"})),(0,n.kt)("p",null,"\u6700\u540e\u8003\u4e86 92 \u5206\uff0c\u6210\u7ee9\u8fd8\u7b97\u7406\u60f3"),(0,n.kt)("p",null,"\u6211\u9605\u8bfb\u6b64\u4e66\u524d\u8ba1\u7b97\u673a\u57fa\u7840\u51e0\u4e4e\u4e3a 0\uff08\u4e13\u4e1a\u8bfe\u53ea\u5b66\u4e86 C \u8bed\u8a00\u548c\u6570\u636e\u7ed3\u6784\uff09\uff0c\u6545\u6211\u7684\u9605\u8bfb\u65b9\u6cd5\u5e94\u8be5\u662f\u9002\u5408\u5927\u90e8\u5206\u4eba\u7684\u3002"),(0,n.kt)("h3",{id:"\u5148\u63d0\u51fa\u4e00\u4e9b\u603b\u4f53\u4e0a\u7684\u5efa\u8bae"},"\u5148\u63d0\u51fa\u4e00\u4e9b\u603b\u4f53\u4e0a\u7684\u5efa\u8bae\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u5efa\u8bae"),"\u770b\u4efb\u4f55\u7f51\u8bfe\uff0c\u5305\u62ec\u8be5\u4e66\u4f5c\u8005\u5728 CMU \u5f55\u5236\u7684\u8bfe\u3002\u8fd9\u672c\u4e66\u7684\u5185\u5bb9\u76f8\u5f53\u4e30\u5bcc\uff0c\u800c\u4e14\u8bb2\u89e3\u7684\u5f88\u6e05\u6670\uff0c\u96be\u5ea6\u66f2\u7ebf\u4e0a\u5347\u5f88\u7f13\u6162\uff0c\u76f4\u63a5\u8010\u5fc3\u5543\u4e66\u5c31\u597d\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7ae0\u8282\u7684 ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"https://www.zhihu.com/search?q=exercise&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22:%22answer%22%2C%22sourceId%22:2655186100%7D"},"exercise"))," \u4e00\u5b9a\u8981\u505a\uff01\u8fd9\u4e9b\u4e60\u9898\u90fd\u662f\u4f5c\u8005\u7cbe\u5fc3\u8bbe\u8ba1\u7528\u6765\u5de9\u56fa\u5f53\u524d\u5b66\u4e60\u5185\u5bb9\u7684\uff0c\u5c24\u5176\u662f\u524d\u516d\u7ae0\u548c\u7b2c\u4e5d\u7ae0\u7684\u4e60\u9898\u8bbe\u8ba1\u7684\u975e\u5e38\u597d\uff0c\u540e\u9762\u8fd8\u9644\u4e0a\u4e86\u7ec6\u81f4\u7684\u89e3\u6790\uff0c\u505a\u5b8c\u5bf9\u77e5\u8bc6\u7684\u7406\u89e3\u5927\u6709\u597d\u5904\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4efb\u52a1\u9a71\u52a8\u5f0f"),"\u5b66\u4e60\u3002\u6211\u8bfb\u8fd9\u672c\u4e66\u65f6\u5b9a\u4e0b\u7684\u76ee\u6807\u662f\u6bcf\u4e2a\u5468\u672b\u505a\u5b8c\u4e00\u4e2a lab\uff0c\u4e00\u4e2a lab \u57fa\u672c\u4e0a\u5bf9\u5e94\u4e66\u4e2d\u7684\u4e00\u4e2a\u7ae0\u8282\u3002\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\u6211\u6bcf\u5468\u8981\u81f3\u5c11\u8bfb\u5b8c\u4e00\u4e2a\u7ae0\u8282\uff0c\u6709\u4e86\u8fd9\u79cd\u660e\u786e\u7684\u76ee\u6807\uff0c\u6211\u7684\u5b66\u4e60\u6548\u7387\u5927\u5927\u63d0\u5347")),(0,n.kt)("p",null,"\u4e0b\u9762\u5206\u7ae0\u8282\u63d0\u51fa\u4e00\u4e9b\u9605\u8bfb\u5efa\u8bae\uff1a"),(0,n.kt)("h3",{id:"\u7b2c\u4e00\u7ae0\u8ba1\u7b97\u673a\u7cfb\u7edf\u6f2b\u6e38"},"\u7b2c\u4e00\u7ae0\uff1a\u8ba1\u7b97\u673a\u7cfb\u7edf\u6f2b\u6e38"),(0,n.kt)("p",null,"\u5c5e\u4e8e\u662f\u5168\u4e66\u7684\u7eb2\u8981\uff0c\u6982\u62ec\u4e86\u5168\u4e66\u8981\u8bb2\u89e3\u7684\u5185\u5bb9\u3002\u8bfb\u4e0d\u61c2\u5f88\u6b63\u5e38\uff0c\u7565\u8bfb\u5373\u53ef\uff0c\u7b49\u8bfb\u5b8c\u5168\u4e66\u518d\u56de\u6765\u81ea\u4f1a\u6709\u4e0d\u540c\u7684\u9886\u609f\u3002"),(0,n.kt)("h3",{id:"\u7b2c\u4e8c\u7ae0\u4fe1\u606f\u7684\u8868\u793a\u548c\u5904\u7406"},"\u7b2c\u4e8c\u7ae0\uff1a\u4fe1\u606f\u7684\u8868\u793a\u548c\u5904\u7406"),(0,n.kt)("p",null,"\u8bb2\u89e3\u6570\u636e\u7684\u673a\u5668\u7ea7\u5b58\u50a8\uff0c\u8865\u7801/\u53cd\u7801\u3001IEEE \u6d6e\u70b9\u6570\u8868\u793a\u7b49\u3002\u672c\u7ae0\u975e\u5e38\u96be\u5543\u4e14\u6280\u5de7\u6027\u8f83\u5f3a\uff0c\u5efa\u8bae\u8bfb\u65f6\u4ee5\u7406\u89e3\u4e3a\u4e3b\uff0c\u4e0d\u8981\u6b7b\u6263\u4e66\u4e0a\u7684\u6570\u5b66\u63a8\u5bfc\u3002\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u8fb9\u8bfb\u8fb9\u505a\u672c\u7ae0\u5bf9\u5e94\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/472188244"},"Data Lab")," \u6765\u4fc3\u8fdb\u7406\u89e3"),(0,n.kt)("h3",{id:"\u7b2c\u4e09\u7ae0\u7a0b\u5e8f\u7684\u673a\u5668\u7ea7\u8868\u793a"},"\u7b2c\u4e09\u7ae0\uff1a\u7a0b\u5e8f\u7684\u673a\u5668\u7ea7\u8868\u793a"),(0,n.kt)("p",null,"\u8fd9\u7ae0\u4ece\u5e95\u5c42\u8bb2\u89e3\u4e00\u6bb5\u4ee3\u7801\u662f\u5982\u4f55\u8fd0\u884c\u7684\uff0c\u6d89\u53ca\u6c47\u7f16\u4ee3\u7801\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://www.zhihu.com/search?q=%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E6%A0%88&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22:%22answer%22%2C%22sourceId%22:2655186100%7D"},"\u51fd\u6570\u8c03\u7528\u6808"),"\u7b49\uff0c\u662f\u76f8\u5bf9\u96be\u5543\u7684\u4e00\u7ae0\u3002"),(0,n.kt)("p",null,"\u5982\u679c\u5b9e\u5728\u8bfb\u4e0d\u4e0b\u53bb\u53ef\u4ee5\u5148\u8bfb\u4e00\u8bfb\u738b\u723d\u7684",(0,n.kt)("strong",{parentName:"p"},"\u300a\u6c47\u7f16\u8bed\u8a00\u300b")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(27163).Z,width:"720",height:"1067"})),(0,n.kt)("p",null,"\u6b64\u4e66\u76f8\u5f53\u4e8e\u7f29\u5c0f\u7248\u7684 CSAPP\uff0c\u901a\u4fd7\u6613\u61c2\uff0c\u96be\u5ea6\u66f2\u7ebf\u66f4\u4f4e\u3002\u6211\u82b1\u4e86\u4e09\u5929\u65f6\u95f4\u8bfb\u5b8c\u8fd9\u672c\u4e66\uff0c\u7136\u540e\u518d\u56de\u6765\u8bfb CSAPP \u7684\u7b2c\u4e09\u7ae0\uff0c\u57fa\u672c\u5c31\u6ca1\u4ec0\u4e48\u969c\u788d\u4e86\u3002"),(0,n.kt)("p",null,"\u8bfb\u5b8c\u672c\u7ae0\u53ef\u4ee5\u505a\u4e24\u4e2a lab\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u662f\u975e\u5e38\u51fa\u540d\u7684",(0,n.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/472178808"},"Bomb Lab"),"\uff0c\u8fd9\u4e2a lab \u8003\u5bdf\u9605\u8bfb\u6c47\u7f16\u4ee3\u7801\u7684\u80fd\u529b\uff0c\u975e\u5e38\u96be\uff0c\u4f46\u662f\u5982\u679c\u4f60\u771f\u7684\u80fd\u4e00\u884c\u4e00\u884c\u4ee3\u7801\u8bfb\u4e0b\u6765\uff0c\u5f53\u505a\u5b8c\u8fd9\u4e2a\u5b9e\u9a8c\u540e\uff0c\u4f60\u9605\u8bfb\u6c47\u7f16\u4ee3\u7801\u5c06\u5982\u9605\u8bfb C \u4ee3\u7801\u822c\u4e1d\u6ed1\uff01"),(0,n.kt)("li",{parentName:"ul"},"\u53e6\u4e00\u4e2a\u662f",(0,n.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/476396465"},"Attack Lab"),"\uff0c\u8fd9\u4e2a lab \u4e3b\u8981\u8003\u5bdf\u7b2c\u4e09\u7ae0\u4e2d\u8bb2\u89e3\u7684\u7f13\u51b2\u533a\u6ea2\u51fa\u539f\u7406\uff0c\u540c\u6837\u4e5f\u662f\u8bad\u7ec3\u9605\u8bfb\u6c47\u7f16\u4ee3\u7801\u7684\u80fd\u529b\uff0c\u4ee5\u53ca\u5bf9\u51fd\u6570\u8c03\u7528\u6808\u7684\u7406\u89e3\u3002")),(0,n.kt)("h3",{id:"\u7b2c\u56db\u7ae0\u5904\u7406\u5668\u4f53\u7cfb\u7ed3\u6784"},"\u7b2c\u56db\u7ae0\uff1a\u5904\u7406\u5668\u4f53\u7cfb\u7ed3\u6784"),(0,n.kt)("p",null,"\u8fd9\u7ae0\u4f9d\u65e7\u5f88\u96be\uff0c\u4ecb\u7ecd\u5904\u7406\u5668\u7684\u6267\u884c\u8fc7\u7a0b\uff0c\u6d41\u6c34\u7ebf\u8bbe\u8ba1\u7b49\uff0c\u539f\u4e66\u4f5c\u8005\u4e3a\u4e86\u5199\u8fd9\u7ae0\u82b1\u8d39\u4e86\u4e0d\u5c11\u5fc3\u8840\uff0c\u8bbe\u8ba1\u4e86\u4e00\u4e2a Y86-64 \u6307\u4ee4\u96c6\u6765\u4e3a\u6211\u4eec\u8bb2\u89e3\u3002\u5b66\u4e60\u8fd9\u7ae0\u4e00\u5b9a\u8981\u591a\u753b\u753b\u56fe\uff0c\u628a\u5404\u4e2a\u6307\u4ee4\u6bcf\u4e00\u9636\u6bb5\u6267\u884c\u7684\u8fc7\u7a0b\u641e\u6e05\u695a\u3002"),(0,n.kt)("p",null,"\u8bfb\u5b8c\u672c\u7ae0\u53ef\u4ee5\u505a",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/480380496"},"Architecture Lab"),"\uff0c\u8fd9\u4e2a lab \u4e2d\u4f5c\u8005\u5b9e\u73b0\u4e86 Y86-64 \u7684\u6a21\u62df\u5668\uff0c\u6211\u4eec\u7684\u4efb\u52a1\u6709\u4e09\u90e8\u5206\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7528 Y86-64 \u6307\u4ee4\u96c6\u7f16\u5199\u4ee3\u7801\uff0c\u8003\u5bdf\u672c\u7ae0",(0,n.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u8282")),(0,n.kt)("li",{parentName:"ul"},"\u4e3a Y86-64 \u65b0\u589e\u6307\u4ee4\uff0c\u8003\u5bdf\u672c\u7ae0",(0,n.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u3001\u4e09\u8282")),(0,n.kt)("li",{parentName:"ul"},"\u4f18\u5316 Y86-64 \u7a0b\u5e8f\uff0c\u8003\u5bdf\u672c\u7ae0",(0,n.kt)("strong",{parentName:"li"},"\u7b2c\u56db\u3001\u4e94\u8282"))),(0,n.kt)("p",null,"\u5efa\u8bae\u8bfb\u5b8c\u5bf9\u5e94\u5c0f\u8282\u540e\u5c31\u505a\u5b9e\u9a8c\u7684\u5bf9\u5e94\u90e8\u5206\uff0c\u52a0\u6df1\u7406\u89e3\u3002\u800c\u4e66\u4e0a\u8bb2\u89e3\u6709\u4e0d\u7406\u89e3\u7684\u5730\u65b9\uff0c\u4e5f\u53ef\u4ee5\u6253\u5f00\u672c\u5b9e\u9a8c\u6750\u6599\u67e5\u770b\u539f\u4e66\u4f5c\u8005\u7684\u4ee3\u7801\u5b9e\u73b0\u3002"),(0,n.kt)("h3",{id:"\u7b2c\u4e94\u7ae0\u4f18\u5316\u7a0b\u5e8f\u6027\u80fd"},(0,n.kt)("strong",{parentName:"h3"},"\u7b2c\u4e94\u7ae0\uff1a\u4f18\u5316\u7a0b\u5e8f\u6027\u80fd")),(0,n.kt)("p",null,"\u5728\u7b2c\u56db\u7ae0\u7684\u57fa\u7840\u4e0a\u8bb2\u89e3\u4f18\u5316\u7a0b\u5e8f\u6027\u80fd\u7684\u6280\u5de7\uff0c\u5982\u5faa\u73af\u5c55\u5f00\u7b49\uff0c\u901f\u8bfb\u5373\u53ef\uff0c\u4e0d\u5fc5\u5728\u610f\u8fc7\u591a\u7ec6\u8282\u3002"),(0,n.kt)("h3",{id:"\u7b2c\u516d\u7ae0\u5b58\u50a8\u5668\u5c42\u6b21\u7ed3\u6784"},"\u7b2c\u516d\u7ae0\uff1a\u5b58\u50a8\u5668\u5c42\u6b21\u7ed3\u6784"),(0,n.kt)("p",null,"\u8fd9\u4e00\u7ae0\u53c8\u662f\u91cd\u70b9\uff0c\u4e3b\u8981\u8bb2\u89e3\u7f13\u5b58\u7684\u5b9e\u73b0\u53ca\u4f5c\u7528\uff0c\u96be\u70b9\u5728\u4e8e\u7406\u89e3\u8fd9\u6837\u8bbe\u8ba1\u80cc\u540e\u7684\u539f\u7406\uff0c\u5207\u8bb0\u4e0d\u8981\u6b7b\u8bb0\u786c\u80cc"),(0,n.kt)("p",null,"\u672c\u7ae0\u8bfb\u5b8c\u540e\uff0c\u53ef\u4ee5\u505a",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/484657229"},"Cache Lab"),"\uff0c\u8fd9\u4e5f\u662f\u975e\u5e38\u7ecf\u5178\u7684 lab\uff0c\u65e2\u8003\u5bdf\u4e86 Cache \u7684\u5b9e\u73b0\uff0c\u53c8\u8003\u5bdf\u4e86\u5982\u4f55\u7f16\u5199 Cache \u53cb\u597d\u7684\u7a0b\u5e8f"),(0,n.kt)("h3",{id:"\u7b2c\u4e03\u7ae0\u94fe\u63a5"},"\u7b2c\u4e03\u7ae0\uff1a\u94fe\u63a5"),(0,n.kt)("p",null,"\u8bb2\u89e3\u7a0b\u5e8f\u7f16\u8bd1\u7684\u8fc7\u7a0b\uff0c\u4e2a\u4eba\u8ba4\u4e3a\u8bb2\u89e3\u4e0d\u662f\u5f88\u6e05\u6670\uff0c\u53ef\u4ee5\u7ed3\u5408\u7535\u5b50\u5de5\u4e1a\u51fa\u7248\u793e\u7684\u300a",(0,n.kt)("a",{parentName:"p",href:"https://book.douban.com/subject/3652388/"},"\u7a0b\u5e8f\u5458\u7684\u81ea\u6211\u4fee\u517b"),"\u300b\u6765\u770b"),(0,n.kt)("h3",{id:"\u7b2c\u516b\u7ae0\u5f02\u5e38\u63a7\u5236\u6d41"},"\u7b2c\u516b\u7ae0\uff1a\u5f02\u5e38\u63a7\u5236\u6d41"),(0,n.kt)("p",null,"\u662f\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5bb9\uff0c\u8bb2\u89e3\u64cd\u4f5c\u7cfb\u7edf\u5f02\u5e38\u3001\u8fdb\u7a0b\u8c03\u5ea6\u3001\u4fe1\u53f7\u7b49\u6982\u5ff5\u3002\u5982\u679c\u50cf\u6211\u4e00\u6837\u6ca1\u6709\u5b66\u8fc7\u64cd\u4f5c\u7cfb\u7edf\uff0c\u8bfb\u8fd9\u4e00\u7ae0\u662f\u975e\u5e38\u5403\u529b\u7684\u3002"),(0,n.kt)("p",null,"\u540c\u65f6\u4e66\u4e2d\u4f1a\u6709\u5927\u91cf\u4ee3\u7801\uff0c\u6240\u4ee5\u6211\u5efa\u8bae\u8fb9\u8bfb\u8fb9\u505a\u8fd9\u7ae0\u5bf9\u5e94\u7684\u5b9e\u9a8c",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/492645370"},"Shell Lab"),"\uff0c\u6bd5\u7adf\u8fd9\u4e9b\u4ee3\u7801\u8981\u5728\u5b9e\u8df5\u4e2d\u624d\u80fd\u7406\u89e3\u3002\u672c\u7ae0\u5bf9\u5e94\u7684 Shell Lab \u5c31\u662f\u5728\u539f\u4e66\u4f5c\u8005\u5b9e\u73b0\u7684 Shell \u6846\u67b6\u4e0b\uff0c\u81ea\u5df1\u8865\u5168\u76f8\u5173\u51fd\u6570\uff0c\u5b9e\u73b0\u4f5c\u4e1a\u63a7\u5236\u529f\u80fd"),(0,n.kt)("h3",{id:"\u7b2c\u4e5d\u7ae0\u865a\u62df\u5185\u5b58"},(0,n.kt)("strong",{parentName:"h3"},"\u7b2c\u4e5d\u7ae0\uff1a\u865a\u62df\u5185\u5b58")),(0,n.kt)("p",null,"\u8fd9\u7ae0\u7684\u5185\u5bb9\u975e\u5e38\u96be\uff0c\u5b66\u4e60\u8fd9\u7ae0\u4e4b\u524d\u53ef\u4ee5\u5148\u56de\u987e\u4e00\u4e0b\u7b2c\u4e94\u7ae0\u7684\u5185\u5bb9\uff0c\u5b66\u4e60\u8fc7\u7a0b\u4e2d\u4e0d\u8981\u8f7b\u6613\u8df3\u8fc7\u4e66\u4e2d\u6a21\u62df\u5730\u5740\u7ffb\u8bd1\u7684\u9898\u76ee\uff0c\u591a\u6a21\u62df\u51e0\u904d\u624d\u80fd\u7406\u89e3\u900f\u5f7b\u3002"),(0,n.kt)("p",null,"\u540e\u9762",(0,n.kt)("strong",{parentName:"p"},"\u52a8\u6001\u5185\u5b58\u5206\u914d\u5668"),"\u7684\u5b9e\u73b0\u4e5f\u662f\u5f88\u96be\u7684\u5185\u5bb9\uff0c\u8981\u60f3\u5c06\u5176\u8bfb\u61c2\u8bfb\u900f\uff0c\u9700\u8981\u4e0b\u5927\u529f\u592b\u3002\u672c\u7ae0\u5bf9\u5e94\u7684 lab ",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/496366818"},"Malloc Lab"),"\uff0c\u8981\u81ea\u5df1\u5b9e\u73b0",(0,n.kt)("inlineCode",{parentName:"p"},"malloc"),"\u51fd\u6570\uff0c\u5bf9\u4e8e\u6211\u8fd9\u79cd\u4ee3\u7801\u80fd\u529b\u8f83\u5f31\u7684\u4eba\u6765\u8bf4\uff0c\u8fd9\u4e2a lab \u662f\u5168\u4e66\u6700\u96be\u4e5f\u662f\u6700\u8017\u65f6\u7684\uff0c\u8fd8\u597d\u5728\u53c2\u8003\u522b\u4eba\u4ee3\u7801\u7684\u57fa\u7840\u4e0a\u6210\u529f\u8dd1\u901a\u4e86"),(0,n.kt)("h3",{id:"\u7b2c\u5341\u7ae0\u7cfb\u7edf\u7ea7-io"},"\u7b2c\u5341\u7ae0\uff1a\u7cfb\u7edf\u7ea7 I/O"),(0,n.kt)("p",null,"\u4ecb\u7ecd\u64cd\u4f5c\u7cfb\u7edf I/O \u7684\u76f8\u5173\u77e5\u8bc6\uff0c\u611f\u89c9\u4f5c\u8005\u4ece\u8fd9\u4e00\u7ae0\u5f00\u59cb\u5c31\u5199\u5f97\u6709\u70b9\u7b80\u7565\u4e86\uff0c\u6ca1\u6709\u76f8\u5173\u7684\u7f16\u7a0b\u7ecf\u9a8c\u5f88\u96be\u8bfb\u4e0b\u53bb"),(0,n.kt)("h3",{id:"\u7b2c\u5341\u4e00\u5341\u4e8c\u7ae0\u7f51\u7edc\u7f16\u7a0b\u548c\u5e76\u53d1\u7f16\u7a0b"},"\u7b2c\u5341\u4e00\u3001\u5341\u4e8c\u7ae0\uff1a",(0,n.kt)("a",{parentName:"h3",href:"https://www.zhihu.com/search?q=%E7%BD%91%E7%BB%9C%E7%BC%96%E7%A8%8B&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22:%22answer%22%2C%22sourceId%22:2655186100%7D"},"\u7f51\u7edc\u7f16\u7a0b"),"\u548c\u5e76\u53d1\u7f16\u7a0b"),(0,n.kt)("p",null,"\u6d89\u53ca\u8ba1\u7f51\u548c\u64cd\u4f5c\u7cfb\u7edf\u7684\u5185\u5bb9\uff0c\u6ca1\u6709\u57fa\u7840\u7684\u8bdd\u5f88\u96be\u770b\u61c2\uff0c\u8fd9\u4e24\u7ae0\u4f9d\u65e7\u6709\u5927\u91cf\u7684\u4ee3\u7801\uff0c\u6bd4\u5982\u4f5c\u8005\u5b9e\u73b0\u7684 TINY Web \u670d\u52a1\u5668\uff0c\u4ee5\u53ca\u540e\u9762\u7684\u57fa\u4e8e\u9884\u7ebf\u7a0b\u5316\u7684\u670d\u52a1\u5668\uff0c\u8fd8\u662f\u5efa\u8bae\u8fb9\u5b9e\u8df5\u8fb9\u8bfb"),(0,n.kt)("p",null,"\u670d\u52a1\u5668\u7684\u4ee3\u7801\u5728\u672c\u7ae0\u5bf9\u5e94\u7684",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/497982541"},"Proxy Lab"),"\u4e2d\uff0c\u8fd9\u4e2a lab \u662f\u5b9e\u73b0\u4e00\u4e2a",(0,n.kt)("a",{parentName:"p",href:"https://www.zhihu.com/search?q=%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%B8%A6%E7%BC%93%E5%AD%98&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22:%22answer%22%2C%22sourceId%22:2655186100%7D"},"\u591a\u7ebf\u7a0b\u5e26\u7f13\u5b58")," Web \u4ee3\u7406\uff0c\u53ea\u8981\u80fd\u8bfb\u61c2\u539f\u4e66\u4f5c\u8005\u670d\u52a1\u5668\u7684\u5b9e\u73b0\uff0c\u518d\u7ed3\u5408 Cache Lab \u5c31\u80fd\u5f88\u5bb9\u6613\u5199\u51fa\u6765"),(0,n.kt)("h3",{id:"\u91cd\u8bfb\u7b2c\u4e00\u7ae0"},"\u91cd\u8bfb\u7b2c\u4e00\u7ae0"),(0,n.kt)("p",null,"\u8bfb\u5b8c\u6574\u672c\u4e66\uff0c\u518d\u56de\u5230\u7b2c\u4e00\u7ae0\u68b3\u7406\u5168\u4e66\u7684\u8109\u7edc\uff0c\u4f60\u4f1a\u53d1\u73b0\u6574\u4e2a\u4eba\u90fd\u901a\u900f\u4e86\uff0c\u6bd5\u7adf\u4e66\u540d\u7684\u76f4\u8bd1\u662f\u201c\u4ee5\u4e00\u4e2a\u7a0b\u5e8f\u5458\u7684\u89d2\u5ea6\u6765\u770b\u5f85\u8ba1\u7b97\u673a\u7cfb\u7edf\u201d\uff0c\u6574\u672c\u4e66\u8bb2\u89e3\u7684\u65e0\u975e\u5c31\u662f\u4e00\u6bb5\u7a0b\u5e8f\u5728\u6574\u4e2a\u8ba1\u7b97\u673a\u7cfb\u7edf\u4e2d\u4ece",(0,n.kt)("strong",{parentName:"p"},"\u51fa\u751f\u5230\u6b7b\u4ea1"),"\u7684\u5168\u8fc7\u7a0b\u3002"),(0,n.kt)("p",null,"\u7531\u6b64\uff0c\u6211\u5199\u4e86\u4e00\u7bc7\u6587\u7ae0\uff0c\u4e32\u8d77\u5168\u4e66\u7684\u77e5\u8bc6\uff0c\u8bb2\u89e3\u4e00\u6bb5 C \u8bed\u8a00\u7a0b\u5e8f\u4ece\u7f16\u8bd1\u5230\u8fd0\u884c\u7684\u5168\u8fc7\u7a0b\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/513307151"},"\u8ba1\u7b97\u673a\u7cfb\u7edf\u6f2b\u6e38 | Hello, world \u7684\u4e00\u751f")),(0,n.kt)("h2",{id:"\u540e\u7eed\u5b66\u4e60"},"\u540e\u7eed\u5b66\u4e60"),(0,n.kt)("p",null,"\u672c\u4e66\u524d\u534a\u90e8\u5206\u5199\u7684\u975e\u5e38\u597d\uff0c\u4f46\u662f\u540e\u9762\u6d89\u53ca",(0,n.kt)("strong",{parentName:"p"},"\u64cd\u4f5c\u7cfb\u7edf"),"\uff0c\u8ba1\u7b97\u673a\u7f51\u7edc\u6982\u5ff5\u7684\u90e8\u5206\u5c31\u663e\u5f97\u6709\u4e9b\u7b80\u7565\u4e86\uff0c\u5982\u679c\u8bfb\u4e0d\u61c2\u4e0d\u5efa\u8bae\u5728\u8fd9\u4e0a\u9762\u6b7b\u78d5\uff0c\u53ef\u4ee5\u53bb\u641c\u7d22\u5176\u5b83\u5b66\u4e60\u6750\u6599\u3002"),(0,n.kt)("p",null,"\u6bd4\u5982\uff0c\u6211\u975e\u5e38\u5efa\u8bae\u8bfb\u5b8c\u672c\u4e66\u540e\u53bb\u5b66\u4e60MIT ",(0,n.kt)("a",{parentName:"p",href:"https://www.zhihu.com/search?q=%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%AF%BC%E8%AE%BA&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22:%22answer%22%2C%22sourceId%22:2655186100%7D"},"\u64cd\u4f5c\u7cfb\u7edf\u5bfc\u8bba"),"\u8bfe\u7a0b ",(0,n.kt)("strong",{parentName:"p"},"6.S081: Operating System Engineering")),(0,n.kt)("p",null,"\u8fd9\u95e8\u8bfe\u7a0b\u516c\u5f00\u4e86\u8be6\u5c3d\u7684\u5b66\u4e60\u8ba1\u5212\u8868\uff0c\u8bfe\u7a0b\u89c6\u9891\u4ee5\u53ca 10 \u4e2a lab\uff0c\u6559\u5b66\u4f7f\u7528\u7684 MIT \u4e09\u4e2a\u8001\u5e08\u7f16\u5199\u7684\u7c7b Unix \u64cd\u4f5c\u7cfb\u7edf xv6\uff0c\u53ca\u5176\u8bf4\u660e\u6587\u6863 ",(0,n.kt)("a",{parentName:"p",href:"https://pdos.csail.mit.edu/6.828/2021/xv6/book-riscv-rev2.pdf"},"xv6 book")," \u4e5f\u5168\u90e8\u5f00\u6e90\uff0c\u7b80\u76f4\u4e0d\u8981\u592a\u826f\u5fc3\uff01"),(0,n.kt)("p",null,"6.S081 \u53ef\u4ee5\u8bf4\u662f\u65e0\u7f1d\u8854\u63a5 CSAPP\uff0c\u6bd4\u5982\u524d\u8005\u7684\u7b2c\u4e09\u4e2a\u5b9e\u9a8c\u5c31\u662f\u5728\u5185\u6838\u4e2d",(0,n.kt)("strong",{parentName:"p"},"\u9875\u8868"),"\u76f8\u5173\u7684\u4ee3\u7801\u4e0a\u52a8\u5200\uff0c\u800c\u9875\u8868\u6b63\u662f CSAPP \u7b2c\u4e5d\u7ae0\u7684\u91cd\u70b9\uff0c\u8fd8\u6709\u7b2c\u4e94\u4e2a\u5b9e\u9a8c COW \u548c\u7b2c\u5341\u4e2a\u5b9e\u9a8c mmap \u90fd\u662f\u5728 CSAPP \u4e2d\u6709\u8bb2\u89e3\u4f46\u662f\u5e76\u4e0d\u6df1\u5165\u7684\u5185\u5bb9\u3002"),(0,n.kt)("p",null,"\u8bfe\u7a0b\u4e3b\u9875\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://pdos.csail.mit.edu/6.828/2021/schedule.html"},"6.S081 / Fall 2021")),(0,n.kt)("p",null,"\u5bf9\u4e8e\u8ba1\u7f51\uff0c\u53ef\u4ee5\u5b66\u4e60\u65af\u5766\u798f\u7684\u8bfe\u7a0b ",(0,n.kt)("strong",{parentName:"p"},"CS 144: Introduction to Computer Networking"),"\uff0c\u8be5\u8bfe\u7a0b\u662f\u7528 C++ \u5b9e\u73b0\u4e00\u4e2aTCP\uff0c\u53c2\u8003\u6559\u6750\u4e3a\u300a\u8ba1\u7b97\u673a\u7f51\u7edc\uff1a\u81ea\u9876\u5411\u4e0b\u65b9\u6cd5\u300b"),(0,n.kt)("p",null,"\u8bfe\u7a0b\u4e3b\u9875\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://cs144.github.io/"},"CS 144: Introduction to Computer Networking")))}h.isMDXComponent=!0},56830:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/v2-0805340d1858d58b284d3f7537c26b10_720w-862443c00916c66472d4b4422c7e0c70.webp"},26470:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/v2-0f0072083850bbda3306ec5f71218b99_720w-8ca8448c2744569c5bcda6f28be291ed.webp"},93732:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/v2-1435e8b4a167fb514e291aff1c7ef695_720w-da2e6447af2991680b2010799cf8feac.webp"},35838:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/v2-21941a3f99caabdbb44ad5cda43834f8_720w-6483bcd1c86860d1248fceccd05acf5b.webp"},27163:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/v2-5cfb610c486daa42d88e247081ac065e_720w-c0d9e433e2efacedee7ada264f387906.webp"}}]);