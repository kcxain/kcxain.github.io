"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[8717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),k=a,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},75968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={title:"DSTC11-Track5 \u7ade\u8d5b\u603b\u7ed3",authors:"kcxain",tags:["NLP"]},i=void 0,o={permalink:"/blog/2023/04/10/dstc",editUrl:"https://github.com/kcxain/Kcx_Learning/tree/master/blog/2023-04-10-dstc.md",source:"@site/blog/2023-04-10-dstc.md",title:"DSTC11-Track5 \u7ade\u8d5b\u603b\u7ed3",description:"\u6628\u5929\uff0cDSTC \u7ade\u8d5b\u7684\u7ed3\u679c\u51fa\u6765\u4e86\u3002\u6392\u540d\u51fa\u4e4e\u610f\u6599\uff1a\u4e00\u5171 14 \u4e2a\u961f\u63d0\u4ea4\uff0c\u6211\u961f\u6309\u7167\u5ba2\u89c2\u6307\u6807\u6392\u5728\u7b2c 3 \u540d\uff01\u6392\u540d\u5982\u56fe\uff08\u6211\u961f\u4e3a\u7b2c 7 \u961f\uff09",date:"2023-04-10T00:00:00.000Z",formattedDate:"2023\u5e744\u670810\u65e5",tags:[{label:"NLP",permalink:"/blog/tags/nlp"}],readingTime:6.945,hasTruncateMarker:!0,authors:[{name:"Kcxain",url:"https://github.com/kcxain",email:"kcxain@gmail.com",imageURL:"https://github.com/kcxain.png",key:"kcxain"}],frontMatter:{title:"DSTC11-Track5 \u7ade\u8d5b\u603b\u7ed3",authors:"kcxain",tags:["NLP"]},prevItem:{title:"\u3010\u4ee3\u7801\u89e3\u8bfb\u3011Bert\u53e5\u5b50\u8868\u5f81\u80fd\u529b\u7684\u6539\u8fdb\uff1aCondenser",permalink:"/blog/2023/05/18/condenser"}},c={authorsImageUrls:[void 0]},p=[{value:"\u8d5b\u9898\u4ecb\u7ecd",id:"\u8d5b\u9898\u4ecb\u7ecd",level:2},{value:"Baseline \u505a\u6cd5",id:"baseline-\u505a\u6cd5",level:2},{value:"\u7ade\u8d5b\u8fc7\u7a0b",id:"\u7ade\u8d5b\u8fc7\u7a0b",level:2},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6628\u5929\uff0cDSTC \u7ade\u8d5b\u7684\u7ed3\u679c\u51fa\u6765\u4e86\u3002\u6392\u540d\u51fa\u4e4e\u610f\u6599\uff1a\u4e00\u5171 14 \u4e2a\u961f\u63d0\u4ea4\uff0c\u6211\u961f\u6309\u7167\u5ba2\u89c2\u6307\u6807\u6392\u5728\u7b2c 3 \u540d\uff01\u6392\u540d\u5982\u56fe\uff08\u6211\u961f\u4e3a\u7b2c 7 \u961f\uff09"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(53904).Z,width:"2371",height:"906"})),(0,a.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u867d\u7136\u548c\u524d\u4e24\u961f\u5dee\u8ddd\u8f83\u5927\uff0c\u4f46\u7b2c 3 \u5df2\u7ecf\u662f\u4e00\u4e2a\u76f8\u5f53\u4e0d\u9519\u7684\u540d\u6b21\u4e86\uff08\u5c24\u5176\u662f\u6211\u8d1f\u8d23\u7684 Turn Detection \u90e8\u5206\u62ff\u5230\u4e86\u7b2c 1 \u540d\uff01)"),(0,a.kt)("h2",{id:"\u8d5b\u9898\u4ecb\u7ecd"},"\u8d5b\u9898\u4ecb\u7ecd"),(0,a.kt)("p",null,"DSTC11-Track5 \u7684\u4e3b\u9898\u662f Task-oriented Conversational Modeling with Subjective Knowledge\uff0c\u5c31\u662f\u5229\u7528\u4e3b\u89c2\u77e5\u8bc6\u5bf9\u4efb\u52a1\u578b\u5bf9\u8bdd\u8fdb\u884c\u5efa\u6a21\u3002"),(0,a.kt)("p",null," \u6574\u4e2a\u4efb\u52a1\u88ab\u5212\u5206\u4e3a\u4e86 three stage\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Turn Detection\u3002\u5224\u65ad\u5f53\u524d\u7684\u5bf9\u8bdd\u662f\u5426\u9700\u8981\u5916\u90e8\u77e5\u8bc6"),(0,a.kt)("li",{parentName:"ul"},"Knowledge Selection\u3002\u5728\u975e\u7ed3\u6784\u5316\u77e5\u8bc6\u6587\u6863\u4e2d\u9009\u51fa\u76f8\u5173\u7684\u77e5\u8bc6\u5019\u9009"),(0,a.kt)("li",{parentName:"ul"},"Response Generation\u3002\u6839\u636e\u7b2c\u4e8c\u6b65\u7684\u77e5\u8bc6\u5019\u9009\u751f\u6210\u56de\u590d")),(0,a.kt)("p",null,"\u5982\u56fe\u6240\u793a",(0,a.kt)("sup",{parentName:"p",id:"fnref-1-5ce6c4"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1-5ce6c4",className:"footnote-ref"},"1")),"\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(68515).Z,width:"2230",height:"1168"})),(0,a.kt)("p",null,"\u7ed9\u5b9a\u7684\u6570\u636e\u96c6\u5305\u62ec\u591a\u8f6e\u5bf9\u8bdd\uff0c\u4ee5\u53ca\u6bcf\u8f6e\u5bf9\u8bdd\u7684\u6807\u7b7e\uff08\u662f\u5426\u9700\u8981\u5916\u90e8\u77e5\u8bc6\uff0c\u9700\u8981\u7684\u77e5\u8bc6\u5019\u9009)\u3002\u5176\u4e2d\u975e\u7ed3\u6784\u5316\u77e5\u8bc6\u5305\u542b\u4e24\u4e2a\u57df\uff0c\u6bcf\u4e2a\u57df\u53c8\u6709\u82e5\u5e72\u5b9e\u4f53\u3002\u786e\u5b9a\u5f53\u524d\u5bf9\u8bdd\u76f8\u5173\u7684\u5b9e\u4f53\u662f\u5f88\u91cd\u8981\u7684\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\u3001\u7b2c\u4e8c\u6b65\u7684\u8bc4\u4ef7\u6307\u6807\u5747\u4e3a Precision/Recall/F-measure\uff0c\u751f\u6210\u56de\u590d\u7684\u6307\u6807\u4e3a BLEU\uff0cROUGE\uff0cMETOR\u3002"),(0,a.kt)("h2",{id:"baseline-\u505a\u6cd5"},"Baseline \u505a\u6cd5"),(0,a.kt)("p",null,"Turn Detection \u9636\u6bb5\uff1a\u4e8c\u5206\u7c7b\u95ee\u9898\uff0c\u4f7f\u7528 Roberta \u6a21\u578b\uff0c\u5c06\u5bf9\u8bdd\u4e0a\u6587\u548c\u67e5\u8be2\u4f5c\u4e3a\u8f93\u5165\uff0c\u5c06 Roberta \u7684 CLS \u6807\u7b7e\u52a0\u5168\u8fde\u63a5\u5c42\u540e\u4f5c\u4e3a\u8f93\u51fa\uff0c\u635f\u5931\u51fd\u6570\u7528\u4ea4\u53c9\u71b5\u3002"),(0,a.kt)("p",null,"Knowledge Sealetion \u9636\u6bb5\uff1a\u8fd8\u662f\u5c06\u95ee\u9898\u770b\u4f5c\u4e8c\u5206\u7c7b\u4efb\u52a1\uff0c\u5bf9\u6bcf\u4e00\u6761\u77e5\u8bc6\u9010\u4e00\u5224\u65ad\u662f\u5426\u52a0\u5165\u5019\u9009\uff0c\u4e0e Turn Detection \u76f8\u540c\u7684\u505a\u6cd5\uff0c\u53ea\u4e0d\u8fc7\u8f93\u5165\u589e\u52a0\u4e86\u9700\u8981\u5224\u65ad\u7684\u77e5\u8bc6\u6761\u76ee\u3002\u8fd9\u79cd\u505a\u6cd5\u9700\u8981\u5bf9\u6bcf\u4e00\u6761\u77e5\u8bc6\u9010\u4e00\u5224\u65ad\uff0c\u65f6\u95f4\u6d88\u8017\u96be\u4ee5\u627f\u53d7\uff0c\u56e0\u6b64\uff0cBaseline \u63d0\u51fa\u7684\u6539\u8fdb\u662f\uff0c\u5148\u5728\u5bf9\u8bdd\u4e0a\u6587\u4e2d\u4f7f\u7528\u673a\u68b0\u7684\u6a21\u7cca\u5339\u914d\u6765\u786e\u5b9a\u5f53\u524d\u5bf9\u8bdd\u6240\u5173\u8054\u7684\u57df\uff0c\u7136\u540e\u5bf9\u8fd9\u4e2a\u57df\u4e2d\u7684\u77e5\u8bc6\u518d\u9010\u4e00\u5224\u65ad\u3002"),(0,a.kt)("p",null,"Response Generation \u9636\u6bb5\uff1a\u4f7f\u7528 Bard \u6a21\u578b\uff0c\u5c06\u5bf9\u8bdd\u4e0a\u6587\uff0c\u67e5\u8be2\uff0c\u77e5\u8bc6\u5019\u9009\u8f93\u5165\u5f97\u5230\u56de\u590d\u3002"),(0,a.kt)("h2",{id:"\u7ade\u8d5b\u8fc7\u7a0b"},"\u7ade\u8d5b\u8fc7\u7a0b"),(0,a.kt)("p",null,"\u6211\u4eec\u662f\u4ece 2 \u6708 20 \u65e5\u5f00\u59cb\u51c6\u5907\u7684\uff0c\u5230 4 \u6708 1 \u65e5\u63d0\u4ea4\u7ed3\u679c\u5dee\u4e0d\u591a\u6709\u4e00\u4e2a\u534a\u6708\u7684\u65f6\u95f4\u3002\u524d\u671f\u7684\u5de5\u4f5c\u4e3b\u8981\u5c31\u662f\u8bfb Baseline\uff0c\u8bfb\u9886\u57df\u5185\u8bba\u6587\u3002\u5728\u8fd9\u671f\u95f4\uff0c\u5bf9\u6211\u63d0\u5347\u5f88\u5927\u7684\u662f\u8bfb Baseline \u4ee3\u7801\u3002DSTC \u7ec4\u7ec7\u65b9\u63d0\u4f9b\u7684\u4ee3\u7801\u67b6\u6784\u7b80\u76f4\u592a\u597d\u4e86\uff0c\u6a21\u5757\u4e4b\u95f4\u8026\u5408\u5ea6\u4f4e\uff0c\u6574\u4efd\u4ee3\u7801\u7684\u53ef\u7ef4\u62a4\u6027\u548c\u53ef\u6269\u5c55\u6027\u975e\u5e38\u9ad8\uff0c\u8bfb\u8d77\u6765\u7b80\u76f4\u5c31\u662f\u4e00\u79cd\u4eab\u53d7\uff01\uff08\u6211\u6628\u5929\u624d\u5199\u5b8c\u7684\u8bba\u6587\u5b9e\u9a8c\u5c31\u662f\u5728\u8fd9\u4e2a\u67b6\u6784\u4e0a\u4fee\u6539\u7684\uff09\u3002\u800c\u8bfb\u9886\u57df\u5185\u8bba\u6587\u5374\u8db3\u8db3\u4f7f\u6211\u714e\u71ac\u4e86\u4e00\u4e2a\u6708\uff0c\u5c24\u5176\u662f\u5f80\u5c4a DSTC \u7ade\u8d5b\u6295\u7a3f\u7684 Workshop \u8bba\u6587\uff0c\u63d0\u51fa\u7684\u5f88\u591a idea \u5f88\u597d\uff0c\u4f46\u662f\u5f00\u6e90\u7684\u4ee3\u7801\u5374\u6ca1\u4e00\u4e2a\u80fd\u8dd1\u3002\u6211\u82b1\u4e86\u4e00\u4e2a\u6708\u65f6\u95f4\u5929\u5929\u6574\u7406\u3001\u8c03\u8bd5\u8fd9\u4e9b\u4ee3\u7801\uff0c\u8dd1\u901a\u540e\u7684\u6548\u679c\u5374\u975e\u5e38\u5dee\u52b2\uff0c\u6211\u81f3\u4eca\u4e0d\u6e05\u695a\u662f\u8bba\u6587\u6570\u636e\u7684\u95ee\u9898\u8fd8\u662f\u6211\u5199\u7684\u4ee3\u7801\u7684\u95ee\u9898\u3002\u603b\u4e4b\uff0c\u8fd9\u4e00\u4e2a\u6708\u6b9a\u7cbe\u7aed\u8651\uff0c\u5374\u51e0\u4e4e\u6ca1\u6709\u4efb\u4f55\u4ea7\u51fa\u3002"),(0,a.kt)("p",null,"\u4ece 3 \u6708 20 \u65e5\u5f00\u59cb\uff0c\u6211\u4fbf\u653e\u5f03\u4e86\u4f7f\u7528\u4ed6\u4eba\u8bba\u6587\u7684 idea\uff0c\u800c\u662f\u5728 Baseline \u4e0a\u4fee\u6539\u3002\u4e3b\u8981\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u63d0\u9ad8\u6a21\u578b\u80fd\u529b\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6570\u636e"),"\u65b9\u9762\u3002\u5bf9\u6570\u636e\u96c6\u91c7\u7528\u56de\u8bd1\u7684\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u589e\u5f3a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u578b"),"\u65b9\u9762\u3002\u5148\u4f7f\u7528\u6570\u636e\u96c6\u5bf9\u6a21\u578b\u8fdb\u884c\u9884\u8bad\u7ec3\u540e\u518d\u5728\u7279\u5b9a\u4efb\u52a1\u4e0a\u5fae\u8c03\uff1b\u6362\u7528\u4e0d\u540c\u53c2\u6570\u5927\u5c0f\u7684\u6a21\u578b\uff0c\u4fee\u6539\u4e0d\u540c\u7684\u5b66\u4e60\u7387\uff0c\u67e5\u770b\u6536\u655b\u540e\u7684\u7ed3\u679c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u578b\u878d\u5408"),"\u3002\u6700\u540e\u901a\u8fc7\u6a21\u578b\u878d\u5408\u63d0\u9ad8\u6a21\u578b\u5728\u5206\u7c7b\u4efb\u52a1\u4e0a\u7684\u51c6\u786e\u7387\uff08\u8fd9\u5927\u6982\u662f Task 1 \u80fd\u62ff\u5230\u7b2c 1 \u540d\u7684\u4e3b\u8981\u539f\u56e0\uff09")),(0,a.kt)("p",null,"\u8fd9\u671f\u95f4\uff0c\u6211\u8fd8\u7528\u4e86\u4e00\u4e2a\u665a\u4e0a\uff0c\u901a\u8fc7\u628a Baseline \u7684 Task 2 \u635f\u5931\u51fd\u6570\u6362\u4e3a infoNCE \u7684\u65b9\u5f0f\uff0c\u5c06\u4efb\u52a1\u4ece\u4e8c\u5206\u7c7b\u95ee\u9898\u8f6c\u6362\u4e3a\u6392\u5e8f\u95ee\u9898\u3002\u7136\u800c\u6700\u540e\u7684\u6548\u679c\u5374\u662f\u60e8\u4e0d\u5fcd\u7779\u3002\u4e5f\u662f\u4ece\u8fd9\u4ee5\u540e\uff0c\u6211\u5b8c\u5168\u653e\u5f03\u4e86\u5728 Baseline \u7684\u6a21\u578b\u7ed3\u6784\u4e0a\u52a8\u5200\u3002"),(0,a.kt)("p",null,"\u73b0\u5728\u60f3\u60f3\uff0c\u5176\u5b9e\u8fd9\u6b21\u6bd4\u8d5b\u524d\u671f\u7684\u8bfb\u8bba\u6587\u3001\u590d\u73b0\u8bba\u6587\u5de5\u4f5c\u4e5f\u5e76\u4e0d\u662f\u6beb\u65e0\u610f\u4e49\u7684\u3002\u6211\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5b66\u4e60\u5230\u4e86\u6570\u636e\u589e\u5f3a\u7684\u6280\u5de7\uff0c\u52a0\u6df1\u4e86\u76f8\u5173\u9886\u57df\u4efb\u52a1\u7684\u7406\u89e3\uff0c\u5bf9\u540e\u9762\u7684\u8c03\u53c2\u5de5\u4f5c\u6709\u5f88\u5927\u7684\u79ef\u6781\u4f5c\u7528\u3002\u5f53\u7136\uff0c\u8c03\u53c2\u5de5\u4f5c\u4e5f\u6709\u5f88\u591a\u53ef\u4ee5\u6539\u8fdb\u7684\u5730\u65b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e94\u9996\u5148\u5206\u6790\u3001\u63d0\u5347\u539f\u59cb\u6570\u636e\u7684\u8d28\u91cf\u3002\u4f8b\u5982\uff1a\u6839\u636e\u6807\u7b7e\u3001\u6570\u636e\u957f\u5ea6\u53bb\u9664\u4f4e\u8d28\u91cf\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u641c\u96c6\u4e00\u5207\u53ef\u4ee5\u641c\u96c6\u5230\u7684\u76f8\u5173\u9886\u57df\u6570\u636e\u8fdb\u884c\u6a21\u578b\u9884\u8bad\u7ec3\u3002\u4f8b\u5982\uff0cWizard of Wikipedia \u6570\u636e\u96c6\u4e5f\u662f\u591a\u8f6e\u5bf9\u8bdd\u4e14\u6807\u6ce8\u5916\u90e8\u77e5\u8bc6\u70b9\u7684\u6570\u636e\u96c6\uff0c\u5b8c\u5168\u53ef\u4ee5\u62ff\u6765\u505a\u9884\u8bad\u7ec3\u751a\u81f3\u5fae\u8c03")),(0,a.kt)("p",null,"\u6211\u5bf9\u8fd9\u573a\u7ade\u8d5b\u7684\u7ed3\u679c\u672c\u6765\u662f\u5f88\u4e0d\u770b\u597d\u7684\uff0c\u56e0\u4e3a\u6211\u4eec\u6700\u540e\u505a\u7684\u57fa\u672c\u90fd\u662f\u8c03\u53c2\u3001\u6362\u6a21\u578b\u8fd9\u7c7b\u5de5\u4f5c\uff0c\u6392\u540d\u600e\u4e48\u4f1a\u9ad8\u5462\uff1f\u7136\u800c\u4e8b\u5b9e\u8bc1\u660e\uff0c\u8fd9\u6837\u505a\u5c31\u662f\u80fd\u62ff\u5230\u4e0d\u9519\u7684\u6392\u540d\u3002\u6211\u4e2a\u4eba\u8ba4\u4e3a\u539f\u56e0\u662f\u5728 nlp \u5806\u5927\u9884\u8bad\u7ec3\u6a21\u578b\u7684\u65f6\u4ee3\uff0c\u6570\u636e\u5927\u5c0f\u3001\u6570\u636e\u8d28\u91cf\u5bf9\u6a21\u578b\u6548\u679c\u7684\u5f71\u54cd\u8fdc\u8fdc\u8d85\u8fc7\u6a21\u578b\u7ed3\u6784\u672c\u8eab\u3002"),(0,a.kt)("p",null,"\u603b\u4e4b\uff0c\u4ee5\u540e\u5728\u53c2\u52a0\u7ade\u8d5b\u65f6\uff0c\u5148\u4e0d\u8981\u53bb\u60f3\u90a3\u4e9b\u5929\u9a6c\u884c\u7a7a\u7684 idea\uff0c\u4e0d\u59a8\u53bb\u505a\u505a\u6570\u636e\u589e\u5f3a\uff0c\u8c03\u8c03\u53c2\u5427\uff0c\u7ed3\u679c\u5f88\u53ef\u80fd\u8fdc\u8d85\u9884\u671f\uff01"),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1-5ce6c4"},"S. Kim, S. Gella, D. Jin, A. Papangelis, B. Hedayatnia, and Y. Liu, \u201cTask-oriented Conversational Modeling with Subjective Knowledge,\u201d p. 4.",(0,a.kt)("a",{parentName:"li",href:"#fnref-1-5ce6c4",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},53904:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20230410172909573-c21f99440fe3a20d74674e597b20680e.png"},68515:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20230416233037362-d780a8ed4341dd3e299b3bed1a653120.png"}}]);