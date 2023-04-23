"use strict";(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[3116],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=n.createContext({}),m=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,p=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=m(t),d=l,k=u["".concat(i,".").concat(d)]||u[d]||o[d]||p;return t?n.createElement(k,s(s({ref:a},c),{},{components:t})):n.createElement(k,s({ref:a},c))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=t.length,s=new Array(p);s[0]=d;var r={};for(var i in a)hasOwnProperty.call(a,i)&&(r[i]=a[i]);r.originalType=e,r[u]="string"==typeof e?e:l,s[1]=r;for(var m=2;m<p;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},644:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>o,frontMatter:()=>p,metadata:()=>r,toc:()=>m});var n=t(87462),l=(t(67294),t(3905));const p={},s="Lab3-Page tables \u6df1\u5165\u89e3\u6790",r={unversionedId:"system/MIT6S081/Lab3-Page_tables",id:"system/MIT6S081/Lab3-Page_tables",title:"Lab3-Page tables \u6df1\u5165\u89e3\u6790",description:"\u5b9e\u9a8c\u6982\u89c8",source:"@site/docs/system/MIT6S081/Lab3-Page_tables.md",sourceDirName:"system/MIT6S081",slug:"/system/MIT6S081/Lab3-Page_tables",permalink:"/docs/system/MIT6S081/Lab3-Page_tables",draft:!1,editUrl:"https://github.com/kcxain/Kcx_Learning/tree/master/docs/system/MIT6S081/Lab3-Page_tables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lab2-System calls \u6df1\u5165\u89e3\u6790",permalink:"/docs/system/MIT6S081/Lab2-System_calls"},next:{title:"\u8f6f\u4ef6\u6784\u9020",permalink:"/docs/system/Software-Construction/"}},i={},m=[{value:"\u5b9e\u9a8c\u6982\u89c8",id:"\u5b9e\u9a8c\u6982\u89c8",level:2},{value:"\u865a\u62df\u5185\u5b58",id:"\u865a\u62df\u5185\u5b58",level:2},{value:"\u865a\u62df\u5730\u5740",id:"\u865a\u62df\u5730\u5740",level:3},{value:"PTE \u7ed3\u6784",id:"pte-\u7ed3\u6784",level:3},{value:"\u6e90\u7801\u5206\u6790",id:"\u6e90\u7801\u5206\u6790",level:2},{value:"<code>walk</code>\u51fd\u6570\u89e3\u6790",id:"walk\u51fd\u6570\u89e3\u6790",level:3},{value:"<code>mappages</code>\u51fd\u6570\u89e3\u6790",id:"mappages\u51fd\u6570\u89e3\u6790",level:3},{value:"Speed up system calls",id:"speed-up-system-calls",level:2},{value:"\u5206\u914d\u865a\u62df\u9875",id:"\u5206\u914d\u865a\u62df\u9875",level:3},{value:"\u4fee\u6539\u8fdb\u7a0b\u72b6\u6001\u7ed3\u6784\u4f53",id:"\u4fee\u6539\u8fdb\u7a0b\u72b6\u6001\u7ed3\u6784\u4f53",level:3},{value:"\u5206\u914d\u7269\u7406\u9875",id:"\u5206\u914d\u7269\u7406\u9875",level:3},{value:"\u6620\u5c04",id:"\u6620\u5c04",level:3},{value:"\u91ca\u653e\u9875",id:"\u91ca\u653e\u9875",level:3},{value:"Print a page table",id:"print-a-page-table",level:2},{value:"Detecting which pages have been accessed",id:"detecting-which-pages-have-been-accessed",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],c={toc:m},u="wrapper";function o(e){let{components:a,...p}=e;return(0,l.kt)(u,(0,n.Z)({},c,p,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"lab3-page-tables-\u6df1\u5165\u89e3\u6790"},"Lab3-Page tables \u6df1\u5165\u89e3\u6790"),(0,l.kt)("h2",{id:"\u5b9e\u9a8c\u6982\u89c8"},"\u5b9e\u9a8c\u6982\u89c8"),(0,l.kt)("p",null,"\u672c\u5b9e\u9a8c\u5747\u4e3a\u5173\u4e8e\u9875\u8868\u7684\u64cd\u4f5c\uff0c\u5206\u4e3a\u4e09\u90e8\u5206\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7528\u6237\u9875\u8868\u4e3a\u6bcf\u4e2a\u8fdb\u7a0b\u6620\u5c04\u4e00\u4e2a\u865a\u62df\u9875\u6765\u52a0\u901f\u67d0\u4e9b\u7cfb\u7edf\u8c03\u7528"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u51fd\u6570\uff0c\u6253\u5370\u6574\u4e2a 3 \u7ea7\u9875\u8868\u4e2d\u7684\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u7cfb\u7edf\u8c03\u7528\uff0c\u67e5\u660e\u54ea\u4e9b\u9875\u88ab\u8bfb\u5199\u8fc7")),(0,l.kt)("h2",{id:"\u865a\u62df\u5185\u5b58"},"\u865a\u62df\u5185\u5b58"),(0,l.kt)("p",null,"\u865a\u62df\u5185\u5b58\u662f\u4e00\u4e2a\u4f1f\u5927\u7684\u62bd\u8c61\uff0c\u5b83\u80fd\u5c06\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u9694\u79bb\u5f00\u3002\u5728\u5b9e\u9a8c\u5f00\u59cb\u524d\uff0c\u6211\u5148\u7b80\u8981\u603b\u7ed3\u4e00\u4e0b xv6 \u7684\u9875\u8868\u7cfb\u7edf\uff1a"),(0,l.kt)("h3",{id:"\u865a\u62df\u5730\u5740"},"\u865a\u62df\u5730\u5740"),(0,l.kt)("p",null,"\u865a\u62df\u5185\u5b58\u548c\u7269\u7406\u5185\u5b58\u90fd\u88ab\u5206\u4e3a\u5927\u5c0f\u76f8\u7b49\u7684\u9875\uff0c\u5b83\u4eec\u603b\u662f\u6309\u9875\u88ab\u8bbf\u95ee\u7684\u3002\u800c\u9875\u8868\u5c31\u662f\u5c06\u865a\u62df\u9875\u6620\u5c04\u5230\u7269\u7406\u9875\u7684\u6570\u636e\u7ed3\u6784\u3002xv6 \u91c7\u7528 3 \u7ea7\u9875\u8868\uff0c\u7ec4\u7ec7\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(73515).Z,width:"1415",height:"850"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u5730\u5740\u88ab\u5206\u4e3a\u4e24\u90e8\u5206\uff0c12 \u4f4d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"Offset"),"\u4e3a\u6700\u7ec8\u7269\u7406\u5730\u5740\u5bf9\u5e94\u7269\u7406\u9875\u4e2d\u7684\u9875\u9762\u504f\u79fb"),(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u8fd9\u662f 3 \u7ea7\u9875\u8868\u7ed3\u6784\uff0c\u4e0a\u9762\u7684 36 \u4f4d\u88ab\u5206\u4e3a 3 \u4e2a 9 \u4f4d\uff0c\u5206\u522b\u7528\u6765\u7d22\u5f15\u6bcf\u4e00\u7ea7\u9875\u8868\u4e2d\u7684\u9875\u8868\u6761\u76ee"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff0c\u7b2c 3 \u7ea7\u9875\u8868\u7684\u57fa\u5730\u5740\u7531\u5185\u6838\u7ef4\u62a4\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"satp"),"\u5bc4\u5b58\u5668\u7ed9\u51fa")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u5206\u6790\u9875\u8868\u6761\u76ee PTE \u7684\u7ed3\u6784"),(0,l.kt)("h3",{id:"pte-\u7ed3\u6784"},"PTE \u7ed3\u6784"),(0,l.kt)("p",null,"xv6 \u7684 PTE \u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(55071).Z,width:"1432",height:"462"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6700\u4f4e 10 \u4f4d\u662f\u4e00\u4e9b\u6807\u8bb0\u4f4d\uff0c\u6307\u660e\u662f\u5426\u6709\u6548\u3001\u8bfb\u5199\u6743\u9650\u3001\u6267\u884c\u6743\u9650\u3001\u662f\u5426\u53ea\u80fd\u5185\u6838\u8bbf\u95ee\u7b49"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4 44 \u4f4d\u4e3a PPN\uff0c\u7b2c 3 \u7ea7\u548c\u7b2c 2 \u7ea7\u7684 PPN \u6307\u5411\u4e0b\u4e00\u7ea7\u9875\u8868\uff0c\u6700\u540e\u4e00\u7ea7\u7684 PPN \u6307\u5411\u5bf9\u5e94\u7269\u7406\u5730\u5740\u7684\u7269\u7406\u9875"),(0,l.kt)("li",{parentName:"ul"},"\u6700\u9ad8 10 \u4f4d\u4e3a\u4fdd\u7559\u4f4d\uff0c\u7f6e\u96f6\u5373\u53ef")),(0,l.kt)("h2",{id:"\u6e90\u7801\u5206\u6790"},"\u6e90\u7801\u5206\u6790"),(0,l.kt)("p",null,"\u9875\u8868\u7684\u539f\u7406\u5e76\u4e0d\u590d\u6742\uff0c\u4f46\u662f\u5b9e\u73b0\u8d77\u6765\u5c31\u9700\u8981\u5f88\u591a\u6280\u5de7\u4e86\uff0c\u5728\u5b9e\u9a8c\u5f00\u59cb\u524d\uff0c\u6211\u5148\u5bf9\u5185\u5b58\u6620\u5c04\u7684\u90e8\u5206\u51fd\u6570\u8fdb\u884c\u5206\u6790\uff1a"),(0,l.kt)("h3",{id:"walk\u51fd\u6570\u89e3\u6790"},(0,l.kt)("inlineCode",{parentName:"h3"},"walk"),"\u51fd\u6570\u89e3\u6790"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"walk"),"\u51fd\u6570\u5199\u5f97\u5f88\u6f02\u4eae\uff0c\u5b83\u6a21\u62df\u4e86 MMU \u7684\u4f5c\u7528\uff1a\u6839\u636e\u4f20\u5165\u7684\u865a\u62df\u5730\u5740\u548c\u7b2c 3 \u7ea7\u9875\u8868\u7684\u57fa\u5730\u5740\uff08\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"satp"),"\u5bc4\u5b58\u5668\u7ed9\u51fa\uff09\uff0c\u8fd4\u56de\u5bf9\u5e94\u7b2c 1 \u7ea7\u9875\u8868 PTE \u7684\u5730\u5740"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u628a\u6bcf\u4e00\u7ea7\u9875\u8868\u770b\u4f5c\u4e00\u4e2a\u5927\u6570\u7ec4\uff0c\u6570\u7ec4\u7684\u5143\u7d20\u4e3a PTE\uff0c\u6bcf\u4e00\u7ea7\u9875\u8868\u6709 512 \u4e2a PTE"),(0,l.kt)("p",null,"\u7b2c 3 \u7ea7\u9875\u8868\u7684\u9996\u5730\u5740\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"satp"),"\u5bc4\u5b58\u5668\u7ed9\u51fa\uff0c\u5269\u4f59\u9875\u8868\u7684\u9996\u5730\u5740\u90fd\u7531\u4e0a\u4e00\u7ea7\u9875\u8868\u4e2d\u7684 PTE \u7ed9\u51fa"),(0,l.kt)("p",null,"\u800c PTE \u4f5c\u4e3a\u6bcf\u4e00\u7ea7\u9875\u8868\u7684\u5143\u7d20\uff0c\u53c8\u7531\u865a\u62df\u5730\u5740\u4e2d VPN \u5bf9\u5e94\u7684 9 \u4f4d\u9875\u8868\u504f\u79fb\u6765\u7d22\u5f15\uff08\u56e0\u4e3a ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mn",{parentName:"mrow"},"512"),(0,l.kt)("mo",{parentName:"mrow"},"="),(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mn",{parentName:"msup"},"2"),(0,l.kt)("mn",{parentName:"msup"},"9"))),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"512=2^9")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"512"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.kt)("span",{parentName:"span",className:"mrel"},"="),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord"},"2"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"9")))))))))))),"\uff09"),(0,l.kt)("p",null,"\u7531\u6b64\uff0c\u7ed9\u51fa\u4e00\u7cfb\u5217\u4fbf\u4e8e\u64cd\u4f5c\u7684\u5b8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// \u5f97\u5230\u5404\u6807\u8bb0\u4f4d:\n##define PTE_V (1L << 0) // valid\n##define PTE_R (1L << 1) // Readable\n##define PTE_W (1L << 2) // Writable\n##define PTE_X (1L << 3) // Executable\n##define PTE_U (1L << 4) // 1 -> user can access\n\n// \u53d8\u6362PA, \u4f7f\u5f97\u5176PPN\u4e0ePTE\u4e2d\u7684PPN\u5bf9\u5e94\n##define PA2PTE(pa) ((((uint64)pa) >> 12) << 10)\n\n// \u53d8\u6362PTE, \u4f7f\u5f97\u5176PPN\u4e0ePA\u4e2d\u7684PPN\u5bf9\u5e94\n##define PTE2PA(pte) (((pte) >> 10) << 12)\n\n// \u5f97\u5230PTE\u7684\u6700\u4f4e10\u4f4d(\u6807\u8bb0\u4f4d)\n##define PTE_FLAGS(pte) ((pte) & 0x3FF)\n\n// \u6307\u793a\u6bcf\u4e00\u7ea7\u9875\u8868\u7684\u9875\u8868\u504f\u79fb\u4e3a9\u4f4d\n##define PXMASK          0x1FF // 9 bits\n// \u6839\u636e\u9875\u8868\u7684\u7ea7\u6570(0, 1, 2)\uff0c\u53d6\u5bf9\u5e94VPN\u7684\u504f\u79fb\n##define PXSHIFT(level)  (PGSHIFT+(9*(level)))\n\n//\u5f97\u5230\u76f8\u5e94\u7ea7\u6570\u9875\u8868\u7684\u9875\u8868\u504f\u79fb\n##define PX(level, va) ((((uint64) (va)) >> PXSHIFT(level)) & PXMASK)\n")),(0,l.kt)("p",null," \u6709\u4e86\u8fd9\u4e9b\u5b8f\uff0c\u5c31\u80fd\u8ba9\u6211\u4eec\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"walk"),"\u51fd\u6570\u53d8\u7684\u975e\u5e38\u4f18\u7f8e\uff01\u4ee3\u7801\u53ca\u6ce8\u91ca\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// Return the address of the PTE in page table pagetable\n// that corresponds to virtual address va.  If alloc!=0,\n// create any required page-table pages.\n//\n// The risc-v Sv39 scheme has three levels of page-table\n// pages. A page-table page contains 512 64-bit PTEs.\n// A 64-bit virtual address is split into five fields:\n//   39..63 -- must be zero.\n//   30..38 -- 9 bits of level-2 index.\n//   21..29 -- 9 bits of level-1 index.\n//   12..20 -- 9 bits of level-0 index.\n//    0..11 -- 12 bits of byte offset within the page.\npte_t *\nwalk(pagetable_t pagetable, uint64 va, int alloc)\n{\n  if(va >= MAXVA)\n    panic("walk");\n    \n  for(int level = 2; level > 0; level--) { // \u4e09\u7ea7\u9875\u8868\u904d\u5386\n    // PX(level, va)\u6839\u636e\u5f53\u524d\u7ea7\u6570\u548c\u865a\u62df\u5730\u5740\u5f97\u5230\u9875\u8868\u504f\u79fb, \u8fdb\u800c\u5b9a\u4f4d\u5230PTE\n    pte_t *pte = &pagetable[PX(level, va)];\n      \n    // \u8be5PTE\u662f\u5426\u6709\u6548\n    if(*pte & PTE_V) {\n      // \u7531\u4e0a\u4e00\u7ea7\u7684PTE\u5f97\u5230\u4e0b\u4e00\u7ea7\u9875\u8868\u7684\u9996\u5730\u5740\n      pagetable = (pagetable_t)PTE2PA(*pte);\n    } else {\n      if(!alloc || (pagetable = (pde_t*)kalloc()) == 0)\n        return 0;\n      memset(pagetable, 0, PGSIZE);\n      *pte = PA2PTE(pagetable) | PTE_V;\n    }\n  }\n  // \u8fd4\u56de\u5bf9\u5e94\u7b2c\u4e00\u7ea7\u9875\u8868\u4e2dPTE\u7684\u5730\u5740\n  return &pagetable[PX(0, va)];\n}\n')),(0,l.kt)("h3",{id:"mappages\u51fd\u6570\u89e3\u6790"},(0,l.kt)("inlineCode",{parentName:"h3"},"mappages"),"\u51fd\u6570\u89e3\u6790"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mappages"),"\u4fee\u6539\u7b2c 1 \u7ea7\u9875\u8868\u4e2d\u7684 PTE\uff0c\u4ece\u800c\u5b8c\u6210\u4ece\u865a\u62df\u9875\u5230\u7269\u7406\u9875\u7684\u6620\u5c04\uff0c\u5b83\u63a5\u53d7 5 \u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int mappages(pagetable_t pagetable, uint64 va, uint64 size, uint64 pa, int perm);\n//pagetable: \u7b2c3\u7ea7\u9875\u8868\u7684\u5730\u5740\n//va: \u865a\u62df\u5757\u9996\u5730\u5740\n//size: \u865a\u62df\u5757\u7684\u5927\u5c0f\n//pa: \u7269\u7406\u5757\u7684\u9996\u5730\u5740\n//perm: PTE\u7684\u6807\u8bb0\u4f4d\n")),(0,l.kt)("p",null,"\u9996\u5148\u8bbe\u8ba1\u4e00\u4e2a\u5b8f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"##define PGROUNDDOWN(a) (((a)) & ~(PGSIZE-1))\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5b8f\u53ef\u4ee5\u628a\u865a\u62df\u5730\u5740\u7684\u4f4e 12 \u4f4d\u6e05\u7a7a\uff0c\u53ea\u4fdd\u7559 VPN \u7684\u90e8\u5206"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mappages"),"\u4ee3\u7801\u53ca\u6ce8\u91ca\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// Create PTEs for virtual addresses starting at va that refer to\n// physical addresses starting at pa. va and size might not\n// be page-aligned. Returns 0 on success, -1 if walk() couldn\'t\n// allocate a needed page-table page.\nint\nmappages(pagetable_t pagetable, uint64 va, uint64 size, uint64 pa, int perm)\n{\n  uint64 a, last;\n  pte_t *pte;\n\n  if(size == 0)\n    panic("mappages: size");\n  // \u865a\u62df\u5757\u4e2d\u5730\u5740\u6700\u5c0f\u7684\u9875\n  a = PGROUNDDOWN(va);\n  // \u865a\u62df\u5757\u4e2d\u5730\u5740\u6700\u5927\u7684\u9875\n  last = PGROUNDDOWN(va + size - 1);\n  \n  for(;;){\n    // \u8c03\u7528walk\u51fd\u6570\uff0c\u8fd4\u56de\u5f53\u524d\u865a\u62df\u9875\u5bf9\u5e94\u7684\u6700\u540e\u4e00\u7ea7\u9875\u8868\u7684PTE\u7684\u5730\u5740\n    if((pte = walk(pagetable, a, 1)) == 0)\n      return -1;\n    // \u7531\u4e8e\u8fd9\u4e2aPTE\u5e94\u8be5\u662f\u672a\u5206\u914d\u7684\uff0c\u4e5f\u5c31\u662f\u6709\u6548\u4f4d\u8981\u4e3a0\uff0c\u5982\u679c\u4e0d\u4e3a0\uff0c\u5219\u51fa\u9519\n    if(*pte & PTE_V)\n      panic("mappages: remap");\n    // \u6839\u636e\u8f93\u5165\u7684\u7269\u7406\u5730\u5740\u3001\u6807\u8bb0\u4f4d\u8bbe\u7f6ePTE,\u5e76\u628aPTE\u7684\u6709\u6548\u4f4d\u8bbe\u4e3a1\n    *pte = PA2PTE(pa) | perm | PTE_V;\n    // \u76f4\u5230\u4e3a\u865a\u62df\u9875\u7684\u6bcf\u4e00\u5757\u90fd\u6620\u5c04\u540e\u624d\u7ed3\u675f\n    if(a == last)\n      break;\n    // \u4e0b\u4e00\u9875\u865a\u62df\u5730\u5740\n    a += PGSIZE;\n    // \u4e0b\u4e00\u9875\u7269\u7406\u5730\u5740\n    pa += PGSIZE;\n  }\n  return 0;\n}\n')),(0,l.kt)("h2",{id:"speed-up-system-calls"},"Speed up system calls"),(0,l.kt)("p",null,"\u5f53\u7528\u6237\u6001\u7684\u8fdb\u7a0b\u6267\u884c\u67d0\u4e9b\u7cfb\u7edf\u8c03\u7528\u65f6\u4f1a\u6d89\u53ca\u5230\u4ece\u7528\u6237\u6001\u5230\u5185\u6838\u6001\u7684\u8f6c\u6362\u3002\u64cd\u4f5c\u7cfb\u7edf\u53ef\u4ee5\u901a\u8fc7\u5728\u7528\u6237\u6001\u548c\u5185\u6838\u6001\u4e4b\u95f4\u5171\u4eab\u67d0\u4e9b\u6570\u636e\u6765\u907f\u514d\u5728\u6267\u884c\u8fd9\u4e9b\u7cfb\u7edf\u8c03\u7528\u65f6\u8de8\u8d8a\u5185\u6838\uff0c\u4ece\u800c\u52a0\u901f\u7cfb\u7edf\u8c03\u7528"),(0,l.kt)("p",null,"\u672c\u90e8\u5206\u5c31\u662f\u8981\u52a0\u901f",(0,l.kt)("inlineCode",{parentName:"p"},"getpid"),"\u7684\u7cfb\u7edf\u8c03\u7528\uff0c\u601d\u8def\u662f\u4e3a\u6bcf\u4e2a\u8fdb\u7a0b\u90fd\u8bbe\u7f6e\u4e00\u4e2a\u865a\u62df\u9875\u5e76\u901a\u8fc7\u9875\u8868\u6620\u5c04\u5230\u7269\u7406\u9875\uff0c\u5e76\u5728\u7269\u7406\u9875\u4e2d\u5b58\u653e\u5f53\u524d\u8fdb\u7a0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"pid"),"\uff0c\u8fd9\u6837\u5728\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"getpid"),"\u65f6\u53ea\u9700\u8bfb\u8be5\u9875\u7684\u5185\u5bb9\u5373\u53ef"),(0,l.kt)("h3",{id:"\u5206\u914d\u865a\u62df\u9875"},"\u5206\u914d\u865a\u62df\u9875"),(0,l.kt)("p",null,"\u9996\u5148\u8981\u786e\u5b9a\u5b58\u653e",(0,l.kt)("inlineCode",{parentName:"p"},"pid"),"\u7684\u9875\u5728\u7528\u6237\u7a7a\u95f4\u7684\u4f4d\u7f6e\uff0c\u6bcf\u4e2a\u8fdb\u7a0b\u539f\u59cb\u7684\u7528\u6237\u7a7a\u95f4\u5982\u56fe\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(5646).Z,width:"1553",height:"912"})),(0,l.kt)("p",null,"\u6211\u4eec\u8bbe\u7f6e\u4e00\u4e2a\u65b0\u7684\u9875",(0,l.kt)("inlineCode",{parentName:"p"},"usyscall"),"\uff0c\u5b83\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"trapframe"),"\u7684\u4e0b\u9762\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(23952).Z,width:"1257",height:"741"})),(0,l.kt)("p",null,"\u8be5\u9875\u865a\u62df\u5730\u5740\uff0c\u4ee5\u53ca\u5b58\u653e\u7684\u7ed3\u6784\u4f53\u7684\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// User memory layout.\n// Address zero first:\n//   text\n//   original data and bss\n//   fixed-size stack\n//   expandable heap\n//   ...\n//   USYSCALL (shared with kernel)\n//   TRAPFRAME (p->trapframe, used by the trampoline)\n//   TRAMPOLINE (the same page as in the kernel)\n##define TRAPFRAME (TRAMPOLINE - PGSIZE)\n##define USYSCALL (TRAPFRAME - PGSIZE)\nstruct usyscall {\n  int pid;  // Process ID\n};\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u8fdb\u7a0b\u72b6\u6001\u7ed3\u6784\u4f53"},"\u4fee\u6539\u8fdb\u7a0b\u72b6\u6001\u7ed3\u6784\u4f53"),(0,l.kt)("p",null,"\u4e3a\u6bcf\u4e00\u4e2a\u8fdb\u7a0b\u90fd\u8bbe\u7f6e\u4e00\u4e2a\u865a\u62df\u9875\uff0c\u663e\u7136\u9700\u8981\u5728\u8868\u793a\u8fdb\u7a0b\u72b6\u6001\u7684\u7ed3\u6784\u4f53\u4e2d\u4fdd\u5b58\u8fd9\u4e2a\u865a\u62df\u9875\u7684\u5730\u5740\uff0c\u4fee\u6539\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// Per-process state\nstruct proc {\n  ...\n  struct trapframe *trapframe; // data page for trampoline.S\n  struct usyscall *usyscall;   // speed up the systerm call getpid()\n  ...\n};\n")),(0,l.kt)("h3",{id:"\u5206\u914d\u7269\u7406\u9875"},"\u5206\u914d\u7269\u7406\u9875"),(0,l.kt)("p",null,"\u6a21\u4eff",(0,l.kt)("inlineCode",{parentName:"p"},"trapframe"),"\u9875\u7684\u8bbe\u7f6e\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"proc.c"),"\u4e2d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"usyscall"),"\u5206\u914d\u7269\u7406\u9875\uff0c\u5e76\u4e14\u5c06\u5f53\u524d\u8fdb\u7a0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"pid"),"\u4fdd\u5b58\u5728\u5176\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// Per-process state\nstruct proc {\n  struct spinlock lock;\n\n  // p->lock must be held when using these:\n  enum procstate state;        // Process state\n  void *chan;                  // If non-zero, sleeping on chan\n  int killed;                  // If non-zero, have been killed\n  int xstate;                  // Exit status to be returned to parent's wait\n  int pid;                     // Process ID\n\n  // wait_lock must be held when using this:\n  struct proc *parent;         // Parent process\n\n  // these are private to the process, so p->lock need not be held.\n  uint64 kstack;               // Virtual address of kernel stack\n  uint64 sz;                   // Size of process memory (bytes)\n  pagetable_t pagetable;       // User page table\n  struct trapframe *trapframe; // data page for trampoline.S\n  struct usyscall *usyscall;   // speed up the systerm call getpid()\n  struct context context;      // swtch() here to run process\n  struct file *ofile[NOFILE];  // Open files\n  struct inode *cwd;           // Current directory\n  char name[16];               // Process name (debugging)\n};\n")),(0,l.kt)("h3",{id:"\u6620\u5c04"},"\u6620\u5c04"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8981\u628a\u7528\u6237\u7a7a\u95f4\u7684\u865a\u62df\u9875\u6620\u5c04\u5230\u5206\u914d\u7684\u7269\u7406\u9875\uff0c\u5229\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"mappages"),"\u51fd\u6570\u4fee\u6539\u9875\u8868\uff0c\u5b9e\u73b0\u6620\u5c04\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// Create a user page table for a given process,\n// with no user memory, but with trampoline pages.\npagetable_t\nproc_pagetable(struct proc *p)\n{\n  ...\n  // map the usyscall\n  // used in the user space\n  if(mappages(pagetable, USYSCALL, PGSIZE,\n              (uint64)(p->usyscall), PTE_R | PTE_U) < 0){\n    uvmunmap(pagetable, TRAMPOLINE, 1, 0);\n    uvmunmap(pagetable, TRAPFRAME, 1, 0);\n    uvmfree(pagetable, 0);\n    return 0;\n  }\n  return pagetable;\n}\n")),(0,l.kt)("h3",{id:"\u91ca\u653e\u9875"},"\u91ca\u653e\u9875"),(0,l.kt)("p",null,"\u8fdb\u7a0b\u7ed3\u675f\u540e\u91ca\u653e\u5bf9\u5e94\u7269\u7406\u9875\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// free a proc structure and the data hanging from it,\n// including user pages.\n// p->lock must be held.\nstatic void\nfreeproc(struct proc *p)\n{\n  if(p->trapframe)\n    kfree((void*)p->trapframe);\n  p->trapframe = 0;\n  if(p->usyscall)\n    kfree((void*)p->usyscall);\n  p->usyscall = 0;\n  if(p->pagetable)\n    proc_freepagetable(p->pagetable, p->sz);\n  p->pagetable = 0;\n  p->sz = 0;\n  p->pid = 0;\n  p->parent = 0;\n  p->name[0] = 0;\n  p->chan = 0;\n  p->killed = 0;\n  p->xstate = 0;\n  p->state = UNUSED;\n}\n")),(0,l.kt)("p",null,"\u91ca\u653e\u9875\u8868\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"// Free a process's page table, and free the\n// physical memory it refers to.\nvoid\nproc_freepagetable(pagetable_t pagetable, uint64 sz)\n{\n  uvmunmap(pagetable, TRAMPOLINE, 1, 0);\n  uvmunmap(pagetable, TRAPFRAME, 1, 0);\n  uvmunmap(pagetable, USYSCALL, 1, 0);\n  uvmfree(pagetable, sz);\n}\n")),(0,l.kt)("h2",{id:"print-a-page-table"},"Print a page table"),(0,l.kt)("p",null,"\u8fd9\u90e8\u5206\u4e0d\u96be\uff0c\u5c31\u662f\u8bbe\u8ba1\u4e00\u4e2a\u51fd\u6570\u80fd\u591f\u6253\u5370\u67d0\u4e2a\u8fdb\u7a0b\u5bf9\u5e94\u7684\u9875\u8868\u4e2d\u7684\u5185\u5bb9\uff0c\u6253\u5370\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"page table 0x0000000087f6e000\n ..0: pte 0x0000000021fda801 pa 0x0000000087f6a000\n .. ..0: pte 0x0000000021fda401 pa 0x0000000087f69000\n .. .. ..0: pte 0x0000000021fdac1f pa 0x0000000087f6b000\n .. .. ..1: pte 0x0000000021fda00f pa 0x0000000087f68000\n .. .. ..2: pte 0x0000000021fd9c1f pa 0x0000000087f67000\n ..255: pte 0x0000000021fdb401 pa 0x0000000087f6d000\n .. ..511: pte 0x0000000021fdb001 pa 0x0000000087f6c000\n .. .. ..509: pte 0x0000000021fdd813 pa 0x0000000087f76000\n .. .. ..510: pte 0x0000000021fddc07 pa 0x0000000087f77000\n .. .. ..511: pte 0x0000000020001c0b pa 0x0000000080007000\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u884c\u4e3a\u7b2c 3 \u7ea7\u9875\u8868\u5730\u5740")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u540e\u9762\u7684\u884c\u5448\u73b0\u6811\u72b6\u7ed3\u6784\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},".."),"\u5f00\u5934\u7684\u8868\u793a 3 \u7ea7\u9875\u8868\u6761\u76ee\uff0c\u540e\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"p"},".. .."),"\u5f00\u5934\u7684\u8868\u793a\u4e0a\u9762 3 \u7ea7\u9875\u8868\u6761\u76ee\u7d22\u5f15\u5230\u7684 2 \u7ea7\u9875\u8868\u4e2d\u7684",(0,l.kt)("strong",{parentName:"p"},"\u6709\u6548"),"\u7684\u6761\u76ee\uff0c\u4ee5\u6b64\u7c7b\u63a8"),(0,l.kt)("p",{parentName:"li"},"\u601d\u8def\uff1a\u8fd9\u4e2a\u95ee\u9898\u8bf4\u767d\u4e86\u5c31\u662f\u904d\u5386\u4e00\u4e2a\u4e09\u5c42\u6811\u72b6\u7ed3\u6784\uff0c\u663e\u7136\u5e94\u9009\u62e9\u6df1\u5ea6\u4f18\u5148\u904d\u5386"))),(0,l.kt)("p",null,"\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'void vmp(pagetable_t pagetable, int level)\n{\n   // \u904d\u5386\u8be5\u7ea7\u9875\u8868\u7684\u6240\u6709\u6761\u76ee\n   for(int i = 0; i < 512; i++){\n    pte_t pte = pagetable[i];\n    // \u5982\u679c\u8be5\u6761\u76ee\u6709\u6548\u5219\u6253\u5370\n    if(pte & PTE_V){\n      pagetable_t child = (pagetable_t)PTE2PA(pte);\n\n      if(level == 2) printf("..");\n      if(level == 1) printf(".. ..");\n      if(level == 0) printf(".. .. ..");\n      printf("%d: pte %p pa %p\\n", i, pte, child);\n        \n      // \u8be5PTE\u6307\u5411\u4e0b\u4e00\u7ea7\u9875\u8868\u5219\u7ee7\u7eed\u5411\u4e0b\u904d\u5386\n      if((pte & (PTE_R | PTE_W | PTE_X)) == 0)\n        vmp(child, level-1);\n    }\n  }\n}\nvoid vmprint(pagetable_t pagetable)\n{\n  printf("page table %p\\n", pagetable);\n  vmp(pagetable, 2);\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u5f53\u524d PTE \u662f\u5426\u5728\u7b2c 3\u3001\u7b2c 2 \u7ea7\u9875\u8868\u7684\u5224\u65ad\u6761\u4ef6\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u6307\u5411\u4e0b\u4e00\u7ea7\u9875\u8868\u7684 PTE \u6765\u8bf4\uff0c\u5b83\u7684\u6807\u8bb0\u4f4d\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"R"),"(\u53ef\u8bfb)\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"W"),"(\u53ef\u5199)\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"X"),"(\u53ef\u6267\u884c)\u5747\u4e3a 0")))),(0,l.kt)("p",null,"\u8fd9\u91cc\u6211\u8bbe\u7f6e\u4e86\u6253\u5370 xv6 \u542f\u52a8\u65f6\u7684\u7b2c 1 \u4e2a\u8fdb\u7a0b\u7684\u9875\u8868\uff0c\u53ef\u4ee5\u770b\u770b\u6548\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(81556).Z,width:"994",height:"559"})),(0,l.kt)("h2",{id:"detecting-which-pages-have-been-accessed"},"Detecting which pages have been accessed"),(0,l.kt)("p",null,"\u8fd9\u90e8\u5206\u662f\u5b9e\u73b0\u4e00\u4e2a\u7cfb\u7edf\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pgaccess()"),"\uff0c\u5b83\u80fd\u8868\u660e\u54ea\u4e9b\u9875\u9762\u88ab\u8bbf\u95ee\uff08\u8bfb\u6216\u5199\uff09\u8fc7\uff0c\u8fd9\u4e2a\u7cfb\u7edf\u8c03\u7528\u9700\u8981 3 \u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7528\u6237\u865a\u62df\u7a7a\u95f4\u7684\u8d77\u59cb\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u865a\u62df\u9875\u7684\u6570\u91cf"),(0,l.kt)("li",{parentName:"ul"},"\u5f85\u8bbe\u7f6e\u7684\u63a9\u7801")),(0,l.kt)("p",null,"\u8bf4\u767d\u4e86\uff0c\u8fd9\u4e2a\u7cfb\u7edf\u8c03\u7528\u5c31\u662f\u5b8c\u6210\u4e00\u4ef6\u4e8b\uff1a"),(0,l.kt)("p",null,"\u904d\u5386\u8f93\u5165\u53c2\u6570\u8868\u793a\u7684\u6240\u6709\u865a\u62df\u9875\u5728\u7b2c 1 \u7ea7\u9875\u8868\u4e2d\u7684 PTE\uff0c\u67e5\u770b PTE \u7684\u6807\u8bb0\u4f4d PTE_A\uff0c\u5982\u679c PTE_A \u4e3a 1\uff0c\u5219\u5c06\u63a9\u7801\u5bf9\u5e94\u7684\u4f4d\u7f6e 1\uff0c\u7136\u540e\u5c06\u8be5 PTE \u7684 PTE_A \u4f4d\u6e05\u7a7a"),(0,l.kt)("p",null,"\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"int\nsys_pgaccess(void)\n{\n  // lab pgtbl: your code here.\n  // \u5f97\u52303\u4e2a\u53c2\u6570\n  uint64 addr; // \u865a\u62df\u9875\u8d77\u59cb\u5730\u5740\n  int num;     // \u5f85\u68c0\u6d4b\u865a\u62df\u9875\u4e2a\u6570\n  uint64 mask; // \u5f85\u5199\u5165\u7528\u6237\u7a7a\u95f4\u7684buf\n    \n  // \u5f97\u52303\u4e2a\u53c2\u6570\n  if(argaddr(0, &addr) < 0)\n    return -1;\n  if(argint(1, &num) < 0)\n    return -1;\n  if(argaddr(2, &mask) < 0)\n    return -1;\n  // mask\u53ea\u670964\u4f4d\uff0c\u6240\u6709\u5f85\u68c0\u6d4b\u9875\u6700\u5927\u4e2a\u6570\u4e3a64\n  int limit = 64;\n  if(num > limit)\n    return -1;\n  pagetable_t pagetable = myproc()->pagetable;\n\n  uint64 bufmask = 0;\n  // \u904d\u5386\u6240\u6709\u9875\n  for(int i = 0; i < num; i++){\n    uint64 va = addr + i*PGSIZE;\n    pte_t *pte = walk(pagetable, va, 0); // \u5f97\u5230PTE\n    if(*pte & PTE_A){\n      bufmask |= (1 << i); // \u8bbe\u7f6ePTE\n      *pte &= ~PTE_A;      // \u6e05\u7a7aPTE_A\n    }\n  }\n  // \u5199\u56de\u7528\u6237\u7a7a\u95f4\n  copyout(pagetable, mask, (char *)&bufmask, sizeof(bufmask));\n  return 0;\n}\n")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,l.kt)("p",null,"\u6d4b\u8bd5\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{src:t(43237).Z,width:"1003",height:"564"})),(0,l.kt)("p",null,"\u6ee1\u5206\u901a\u8fc7\uff01"),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u521a\u521a\u7ed3\u675f ICS \u671f\u672b\u8003\u8bd5\uff0c\u9971\u53d7 Intel Core i7 \u56db\u7ea7\u9875\u8868\u6298\u78e8\u7684\u6211\u6765\u8bf4\uff0c\u7406\u89e3\u8fd9\u90e8\u5206\u5185\u5bb9\u8fd8\u662f\u76f8\u5f53\u8f7b\u677e\u7684"),(0,l.kt)("li",{parentName:"ul"},"xv6 \u5173\u4e8e\u5185\u5b58\u5206\u914d\u4e0e\u6620\u5c04\u7684\u4e00\u4e9b\u4ee3\u7801\u5199\u5f97\u771f\u7684\u592a\u6f02\u4eae\u4e86\uff01\u7b80\u6d01\u4f18\u96c5\u5374\u53c8\u903b\u8f91\u6e05\u6670\uff0c\u8fd9\u662f\u6211\u8be5\u5b66\u4e60\u7684\u5730\u65b9\uff01"),(0,l.kt)("li",{parentName:"ul"},"\u672c\u5b9e\u9a8c\u8017\u65f6 3 \u5929\uff0c\u7ea6 7 \u5c0f\u65f6")))}o.isMDXComponent=!0},55071:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-20220530160425963-3711b7e5335781c2890a3ece0c95cdc5.png"},5646:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-20220530224053610-c64b559200d5ef6091fbeea60cbd8f6e.png"},23952:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-20220530224631041-91f6970fbefb9ce0a54502d58a61f0c9.png"},81556:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-20220531124327164-fb2d8972416a71ab77d8fdb715b4c1d8.png"},73515:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-20220531153727389-bd8490344f3fa5a56f6cc86276e655d2.png"},43237:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-20220601085449276-6387cf15a17b1acda34fa43e47a40ceb.png"}}]);