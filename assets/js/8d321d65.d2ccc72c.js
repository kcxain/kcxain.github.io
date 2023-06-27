"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[9679],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(67294),a=r(86010),i=r(52802),o=r(39960),c=r(13919),l=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function u(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},11650:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),i=r(52991);const o={sidebar_position:1},c="\u6df1\u5165\u7406\u89e3\u8ba1\u7b97\u673a\u7cfb\u7edf",l={unversionedId:"system/CSAPP/README",id:"system/CSAPP/README",title:"\u6df1\u5165\u7406\u89e3\u8ba1\u7b97\u673a\u7cfb\u7edf",description:"\u8d44\u6599",source:"@site/docs/system/CSAPP/README.md",sourceDirName:"system/CSAPP",slug:"/system/CSAPP/",permalink:"/docs/system/CSAPP/",draft:!1,editUrl:"https://github.com/kcxain/Kcx_Learning/tree/master/docs/system/CSAPP/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u8ba1\u7b97\u673a\u57fa\u7840",permalink:"/docs/system/"},next:{title:"Lab1-Data Lab \u6df1\u5165\u89e3\u6790",permalink:"/docs/system/CSAPP/Lab01-Data_Lab"}},s={},p=[{value:"\u8d44\u6599",id:"\u8d44\u6599",level:2},{value:"\u9605\u8bfb\u5efa\u8bae",id:"\u9605\u8bfb\u5efa\u8bae",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6df1\u5165\u7406\u89e3\u8ba1\u7b97\u673a\u7cfb\u7edf"},"\u6df1\u5165\u7406\u89e3\u8ba1\u7b97\u673a\u7cfb\u7edf"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"\u8d44\u6599"},"\u8d44\u6599"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e66\u540e homework \u7b54\u6848\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://dreamanddead.github.io/CSAPP-3e-Solutions/"},"https://dreamanddead.github.io/CSAPP-3e-Solutions/dreamanddead.github.io/CSAPP-3e-Solutions/"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8bfe\u7a0b lab \u4e0b\u8f7d\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://csapp.cs.cmu.edu/3e/labs.html"},"CS:APP3e, Bryant and O'Hallaroncsapp.cs.cmu.edu/3e/labs.html"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6211\u7684 GitHub \u4ed3\u5e93\u6253\u5305\u7684 lab\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Deconx/CSAPP-Lab"},"https://github.com/kcxain/CSAPP-Lab"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CMU 15-213 \u8bfe\u7a0b\u4e3b\u9875\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://www.cs.cmu.edu/~213/personal.html"},"15-213 Introduction to Computer Systems (ICS)")))),(0,a.kt)("h2",{id:"\u9605\u8bfb\u5efa\u8bae"},"\u9605\u8bfb\u5efa\u8bae"),(0,a.kt)("p",null,"\u53c2\u8003\u6211\u7684\u535a\u5ba2\uff1a",(0,a.kt)("a",{parentName:"p",href:"/blog/2022/05/01/csapp"},"CSAPP\uff0c\u6211\u7684\u8ba1\u7b97\u673a\u79d1\u5b66\u542f\u8499\u4e66")))}d.isMDXComponent=!0}}]);