(self.webpackChunkcs_notes=self.webpackChunkcs_notes||[]).push([[5939],{27484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",o="minute",s="hour",c="day",a="week",u="month",f="quarter",l="year",d="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},y=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:y,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+y(r,2,"0")+":"+y(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),o=n-i<0,s=e.clone().add(r+(o?-1:1),u);return+(-(r+(n-i)/(o?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:u,y:l,w:a,d:c,D:d,h:s,m:o,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",w={};w[b]=m;var $=function(t){return t instanceof _},x=function t(e,n,r){var i;if(!e)return b;if("string"==typeof e){var o=e.toLowerCase();w[o]&&(i=o),n&&(w[o]=n,i=o);var s=e.split("-");if(!i&&s.length>1)return t(s[0])}else{var c=e.name;w[c]=e,i=c}return!r&&i&&(b=i),i||!r&&b},S=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},M=v;M.l=x,M.i=$,M.w=function(t,e){return S(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function m(t){this.$L=x(t.locale,null,!0),this.parse(t)}var y=m.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(M.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,o=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,o)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return M},y.isValid=function(){return!(this.$d.toString()===h)},y.isSame=function(t,e){var n=S(t);return this.startOf(e)<=n&&n<=this.endOf(e)},y.isAfter=function(t,e){return S(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<S(t)},y.$g=function(t,e,n){return M.u(t)?this[e]:this.set(n,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var n=this,r=!!M.u(e)||e,f=M.p(t),h=function(t,e){var i=M.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(c)},p=function(t,e){return M.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,m=this.$M,y=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case l:return r?h(1,0):h(31,11);case u:return r?h(1,m):h(0,m+1);case a:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(r?y-w:y+(6-w),m);case c:case d:return p(v+"Hours",0);case s:return p(v+"Minutes",1);case o:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var n,a=M.p(t),f="set"+(this.$u?"UTC":""),h=(n={},n[c]=f+"Date",n[d]=f+"Date",n[u]=f+"Month",n[l]=f+"FullYear",n[s]=f+"Hours",n[o]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[a],p=a===c?this.$D+(e-this.$W):e;if(a===u||a===l){var g=this.clone().set(d,1);g.$d[h](p),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[M.p(t)]()},y.add=function(r,f){var d,h=this;r=Number(r);var p=M.p(f),g=function(t){var e=S(h);return M.w(e.date(e.date()+Math.round(t*r)),h)};if(p===u)return this.set(u,this.$M+r);if(p===l)return this.set(l,this.$y+r);if(p===c)return g(1);if(p===a)return g(7);var m=(d={},d[o]=e,d[s]=n,d[i]=t,d)[p]||1,y=this.$d.getTime()+r*m;return M.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),o=this.$H,s=this.$m,c=this.$M,a=n.weekdays,u=n.months,f=function(t,n,i,o){return t&&(t[n]||t(e,r))||i[n].slice(0,o)},l=function(t){return M.s(o%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:M.s(c+1,2,"0"),MMM:f(n.monthsShort,c,u,3),MMMM:f(u,c),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,a,2),ddd:f(n.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(o),HH:M.s(o,2,"0"),h:l(1),hh:l(2),a:d(o,s,!0),A:d(o,s,!1),m:String(s),mm:M.s(s,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:i};return r.replace(g,(function(t,e){return e||p[t]||i.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,d,h){var p,g=M.p(d),m=S(r),y=(m.utcOffset()-this.utcOffset())*e,v=this-m,b=M.m(this,m);return b=(p={},p[l]=b/12,p[u]=b,p[f]=b/3,p[a]=(v-y)/6048e5,p[c]=(v-y)/864e5,p[s]=v/n,p[o]=v/e,p[i]=v/t,p)[g]||v,h?b:M.a(b)},y.daysInMonth=function(){return this.endOf(u).$D},y.$locale=function(){return w[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=x(t,e,!0);return r&&(n.$L=r),n},y.clone=function(){return M.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},m}(),k=_.prototype;return S.prototype=k,[["$ms",r],["$s",i],["$m",o],["$H",s],["$W",c],["$M",u],["$y",l],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),S.extend=function(t,e){return t.$i||(t(e,_,S),t.$i=!0),S},S.locale=x,S.isDayjs=$,S.unix=function(t){return S(1e3*t)},S.en=w[b],S.Ls=w,S.p={},S}()},1954:(t,e,n)=>{"use strict";n.d(e,{JO:()=>It});var r=n(67294);const i=/^[a-z0-9]+(-[a-z0-9]+)*$/,o=(t,e,n,r="")=>{const i=t.split(":");if("@"===t.slice(0,1)){if(i.length<2||i.length>3)return null;r=i.shift().slice(1)}if(i.length>3||!i.length)return null;if(i.length>1){const t=i.pop(),n=i.pop(),o={provider:i.length>0?i[0]:r,prefix:n,name:t};return e&&!s(o)?null:o}const o=i[0],c=o.split("-");if(c.length>1){const t={provider:r,prefix:c.shift(),name:c.join("-")};return e&&!s(t)?null:t}if(n&&""===r){const t={provider:r,prefix:"",name:o};return e&&!s(t,n)?null:t}return null},s=(t,e)=>!!t&&!(""!==t.provider&&!t.provider.match(i)||!(e&&""===t.prefix||t.prefix.match(i))||!t.name.match(i)),c=Object.freeze({left:0,top:0,width:16,height:16}),a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),u=Object.freeze({...c,...a}),f=Object.freeze({...u,body:"",hidden:!1});function l(t,e){const n=function(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}(t,e);for(const r in f)r in a?r in t&&!(r in n)&&(n[r]=a[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function d(t,e,n){const r=t.icons,i=t.aliases||Object.create(null);let o={};function s(t){o=l(r[t]||i[t],o)}return s(e),n.forEach(s),l(t,o)}function h(t,e){const n=[];if("object"!=typeof t||"object"!=typeof t.icons)return n;t.not_found instanceof Array&&t.not_found.forEach((t=>{e(t,null),n.push(t)}));const r=function(t,e){const n=t.icons,r=t.aliases||Object.create(null),i=Object.create(null);return(e||Object.keys(n).concat(Object.keys(r))).forEach((function t(e){if(n[e])return i[e]=[];if(!(e in i)){i[e]=null;const n=r[e]&&r[e].parent,o=n&&t(n);o&&(i[e]=[n].concat(o))}return i[e]})),i}(t);for(const i in r){const o=r[i];o&&(e(i,d(t,i,o)),n.push(i))}return n}const p={provider:"",aliases:{},not_found:{},...c};function g(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function m(t){if("object"!=typeof t||null===t)return null;const e=t;if("string"!=typeof e.prefix||!t.icons||"object"!=typeof t.icons)return null;if(!g(t,p))return null;const n=e.icons;for(const o in n){const t=n[o];if(!o.match(i)||"string"!=typeof t.body||!g(t,f))return null}const r=e.aliases||Object.create(null);for(const o in r){const t=r[o],e=t.parent;if(!o.match(i)||"string"!=typeof e||!n[e]&&!r[e]||!g(t,f))return null}return e}const y=Object.create(null);function v(t,e){const n=y[t]||(y[t]=Object.create(null));return n[e]||(n[e]=function(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}(t,e))}function b(t,e){return m(e)?h(e,((e,n)=>{n?t.icons[e]=n:t.missing.add(e)})):[]}let w=!1;function $(t){return"boolean"==typeof t&&(w=t),w}function x(t){const e="string"==typeof t?o(t,!0,w):t;if(e){const t=v(e.provider,e.prefix),n=e.name;return t.icons[n]||(t.missing.has(n)?null:void 0)}}function S(t,e){if("object"!=typeof t)return!1;if("string"!=typeof e&&(e=t.provider||""),w&&!e&&!t.prefix){let e=!1;return m(t)&&(t.prefix="",h(t,((t,n)=>{n&&function(t,e){const n=o(t,!0,w);return!!n&&function(t,e,n){try{if("string"==typeof n.body)return t.icons[e]={...n},!0}catch(r){}return!1}(v(n.provider,n.prefix),n.name,e)}(t,n)&&(e=!0)}))),e}const n=t.prefix;if(!s({provider:e,prefix:n,name:"a"}))return!1;return!!b(v(e,n),t)}const M=Object.freeze({width:null,height:null}),_=Object.freeze({...M,...a}),k=/(-?[0-9.]*[0-9]+[0-9.]*)/g,O=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function j(t,e,n){if(1===e)return t;if(n=n||100,"number"==typeof t)return Math.ceil(t*e*n)/n;if("string"!=typeof t)return t;const r=t.split(k);if(null===r||!r.length)return t;const i=[];let o=r.shift(),s=O.test(o);for(;;){if(s){const t=parseFloat(o);isNaN(t)?i.push(o):i.push(Math.ceil(t*e*n)/n)}else i.push(o);if(o=r.shift(),void 0===o)return i.join("");s=!s}}const D=/\sid="(\S+)"/g,T="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);let C=0;function E(t,e=T){const n=[];let r;for(;r=D.exec(t);)n.push(r[1]);if(!n.length)return t;const i="suffix"+(16777216*Math.random()|Date.now()).toString(16);return n.forEach((n=>{const r="function"==typeof e?e(n):e+(C++).toString(),o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+r+i+"$3")})),t=t.replace(new RegExp(i,"g"),"")}const L=Object.create(null);function I(t,e){L[t]=e}function F(t){return L[t]||L[""]}function A(t){let e;if("string"==typeof t.resources)e=[t.resources];else if(e=t.resources,!(e instanceof Array&&e.length))return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:!0===t.random,index:t.index||0,dataAfterTimeout:!1!==t.dataAfterTimeout}}const N=Object.create(null),z=["https://api.simplesvg.com","https://api.unisvg.com"],H=[];for(;z.length>0;)1===z.length||Math.random()>.5?H.push(z.shift()):H.push(z.pop());function Y(t,e){const n=A(e);return null!==n&&(N[t]=n,!0)}function U(t){return N[t]}N[""]=A({resources:["https://api.iconify.design"].concat(H)});let R=(()=>{let t;try{if(t=fetch,"function"==typeof t)return t}catch(e){}})();const W={prepare:(t,e,n)=>{const r=[],i=function(t,e){const n=U(t);if(!n)return 0;let r;if(n.maxURL){let t=0;n.resources.forEach((e=>{const n=e;t=Math.max(t,n.length)}));const i=e+".json?icons=";r=n.maxURL-t-n.path.length-i.length}else r=0;return r}(t,e),o="icons";let s={type:o,provider:t,prefix:e,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=i&&a>0&&(r.push(s),s={type:o,provider:t,prefix:e,icons:[]},c=n.length),s.icons.push(n)})),r.push(s),r},send:(t,e,n)=>{if(!R)return void n("abort",424);let r=function(t){if("string"==typeof t){const e=U(t);if(e)return e.path}return"/"}(e.provider);switch(e.type){case"icons":{const t=e.prefix,n=e.icons.join(",");r+=t+".json?"+new URLSearchParams({icons:n}).toString();break}case"custom":{const t=e.uri;r+="/"===t.slice(0,1)?t.slice(1):t;break}default:return void n("abort",400)}let i=503;R(t+r).then((t=>{const e=t.status;if(200===e)return i=501,t.json();setTimeout((()=>{n(function(t){return 404===t}(e)?"abort":"next",e)}))})).then((t=>{"object"==typeof t&&null!==t?setTimeout((()=>{n("success",t)})):setTimeout((()=>{404===t?n("abort",t):n("next",i)}))})).catch((()=>{n("next",i)}))}};function P(t,e){t.forEach((t=>{const n=t.loaderCallbacks;n&&(t.loaderCallbacks=n.filter((t=>t.id!==e)))}))}let J=0;var q={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Q(t,e,n,r){const i=t.resources.length,o=t.random?Math.floor(Math.random()*i):t.index;let s;if(t.random){let e=t.resources.slice(0);for(s=[];e.length>1;){const t=Math.floor(Math.random()*e.length);s.push(e[t]),e=e.slice(0,t).concat(e.slice(t+1))}s=s.concat(e)}else s=t.resources.slice(o).concat(t.resources.slice(0,o));const c=Date.now();let a,u="pending",f=0,l=null,d=[],h=[];function p(){l&&(clearTimeout(l),l=null)}function g(){"pending"===u&&(u="aborted"),p(),d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function m(t,e){e&&(h=[]),"function"==typeof t&&h.push(t)}function y(){u="failed",h.forEach((t=>{t(void 0,a)}))}function v(){d.forEach((t=>{"pending"===t.status&&(t.status="aborted")})),d=[]}function b(){if("pending"!==u)return;p();const r=s.shift();if(void 0===r)return d.length?void(l=setTimeout((()=>{p(),"pending"===u&&(v(),y())}),t.timeout)):void y();const i={status:"pending",resource:r,callback:(e,n)=>{!function(e,n,r){const i="success"!==n;switch(d=d.filter((t=>t!==e)),u){case"pending":break;case"failed":if(i||!t.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=r,void y();if(i)return a=r,void(d.length||(s.length?b():y()));if(p(),v(),!t.random){const n=t.resources.indexOf(e.resource);-1!==n&&n!==t.index&&(t.index=n)}u="completed",h.forEach((t=>{t(r)}))}(i,e,n)}};d.push(i),f++,l=setTimeout(b,t.rotate),n(r,e,i.callback)}return"function"==typeof r&&h.push(r),setTimeout(b),function(){return{startTime:c,payload:e,status:u,queriesSent:f,queriesPending:d.length,subscribe:m,abort:g}}}function Z(t){const e={...q,...t};let n=[];function r(){n=n.filter((t=>"pending"===t().status))}return{query:function(t,i,o){const s=Q(e,t,i,((t,e)=>{r(),o&&o(t,e)}));return n.push(s),s},find:function(t){return n.find((e=>t(e)))||null},setIndex:t=>{e.index=t},getIndex:()=>e.index,cleanup:r}}function V(){}const B=Object.create(null);function X(t,e,n){let r,i;if("string"==typeof t){const e=F(t);if(!e)return n(void 0,424),V;i=e.send;const o=function(t){if(!B[t]){const e=U(t);if(!e)return;const n={config:e,redundancy:Z(e)};B[t]=n}return B[t]}(t);o&&(r=o.redundancy)}else{const e=A(t);if(e){r=Z(e);const n=F(t.resources?t.resources[0]:"");n&&(i=n.send)}}return r&&i?r.query(e,i,n)().abort:(n(void 0,424),V)}const G="iconify2",K="iconify",tt=K+"-count",et=K+"-version",nt=36e5,rt=168;function it(t,e){try{return t.getItem(e)}catch(n){}}function ot(t,e,n){try{return t.setItem(e,n),!0}catch(r){}}function st(t,e){try{t.removeItem(e)}catch(n){}}function ct(t,e){return ot(t,tt,e.toString())}function at(t){return parseInt(it(t,tt))||0}const ut={local:!0,session:!0},ft={local:new Set,session:new Set};let lt=!1;let dt="undefined"==typeof window?{}:window;function ht(t){const e=t+"Storage";try{if(dt&&dt[e]&&"number"==typeof dt[e].length)return dt[e]}catch(n){}ut[t]=!1}function pt(t,e){const n=ht(t);if(!n)return;const r=it(n,et);if(r!==G){if(r){const t=at(n);for(let e=0;e<t;e++)st(n,K+e.toString())}return ot(n,et,G),void ct(n,0)}const i=Math.floor(Date.now()/nt)-rt,o=t=>{const r=K+t.toString(),o=it(n,r);if("string"==typeof o){try{const n=JSON.parse(o);if("object"==typeof n&&"number"==typeof n.cached&&n.cached>i&&"string"==typeof n.provider&&"object"==typeof n.data&&"string"==typeof n.data.prefix&&e(n,t))return!0}catch(s){}st(n,r)}};let s=at(n);for(let c=s-1;c>=0;c--)o(c)||(c===s-1?(s--,ct(n,s)):ft[t].add(c))}function gt(){if(!lt){lt=!0;for(const t in ut)pt(t,(t=>{const e=t.data,n=v(t.provider,e.prefix);if(!b(n,e).length)return!1;const r=e.lastModified||-1;return n.lastModifiedCached=n.lastModifiedCached?Math.min(n.lastModifiedCached,r):r,!0}))}}function mt(t,e){function n(n){let r;if(!ut[n]||!(r=ht(n)))return;const i=ft[n];let o;if(i.size)i.delete(o=Array.from(i).shift());else if(o=at(r),!ct(r,o+1))return;const s={cached:Math.floor(Date.now()/nt),provider:t.provider,data:e};return ot(r,K+o.toString(),JSON.stringify(s))}lt||gt(),e.lastModified&&!function(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in ut)pt(r,(n=>{const r=n.data;return n.provider!==t.provider||r.prefix!==t.prefix||r.lastModified===e}));return!0}(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&delete(e=Object.assign({},e)).not_found,n("local")||n("session"))}function yt(){}function vt(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout((()=>{t.iconsLoaderFlag=!1,function(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout((()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,i=t.prefix;e.forEach((e=>{const o=e.icons,s=o.pending.length;o.pending=o.pending.filter((e=>{if(e.prefix!==i)return!0;const s=e.name;if(t.icons[s])o.loaded.push({provider:r,prefix:i,name:s});else{if(!t.missing.has(s))return n=!0,!0;o.missing.push({provider:r,prefix:i,name:s})}return!1})),o.pending.length!==s&&(n||P([t],e.id),e.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),e.abort))}))})))}(t)})))}const bt=(t,e)=>{const n=function(t,e=!0,n=!1){const r=[];return t.forEach((t=>{const i="string"==typeof t?o(t,e,n):t;i&&r.push(i)})),r}(t,!0,$()),r=function(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort(((t,e)=>t.provider!==e.provider?t.provider.localeCompare(e.provider):t.prefix!==e.prefix?t.prefix.localeCompare(e.prefix):t.name.localeCompare(e.name)));let r={provider:"",prefix:"",name:""};return t.forEach((t=>{if(r.name===t.name&&r.prefix===t.prefix&&r.provider===t.provider)return;r=t;const i=t.provider,o=t.prefix,s=t.name,c=n[i]||(n[i]=Object.create(null)),a=c[o]||(c[o]=v(i,o));let u;u=s in a.icons?e.loaded:""===o||a.missing.has(s)?e.missing:e.pending;const f={provider:i,prefix:o,name:s};u.push(f)})),e}(n);if(!r.pending.length){let t=!0;return e&&setTimeout((()=>{t&&e(r.loaded,r.missing,r.pending,yt)})),()=>{t=!1}}const i=Object.create(null),s=[];let c,a;return r.pending.forEach((t=>{const{provider:e,prefix:n}=t;if(n===a&&e===c)return;c=e,a=n,s.push(v(e,n));const r=i[e]||(i[e]=Object.create(null));r[n]||(r[n]=[])})),r.pending.forEach((t=>{const{provider:e,prefix:n,name:r}=t,o=v(e,n),s=o.pendingIcons||(o.pendingIcons=new Set);s.has(r)||(s.add(r),i[e][n].push(r))})),s.forEach((t=>{const{provider:e,prefix:n}=t;i[e][n].length&&function(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout((()=>{t.iconsQueueFlag=!1;const{provider:e,prefix:n}=t,r=t.iconsToLoad;let i;delete t.iconsToLoad,r&&(i=F(e))&&i.prepare(e,n,r).forEach((n=>{X(e,n,(e=>{if("object"!=typeof e)n.icons.forEach((e=>{t.missing.add(e)}));else try{const n=b(t,e);if(!n.length)return;const r=t.pendingIcons;r&&n.forEach((t=>{r.delete(t)})),mt(t,e)}catch(r){console.error(r)}vt(t)}))}))})))}(t,i[e][n])})),e?function(t,e,n){const r=J++,i=P.bind(null,n,r);if(!e.pending.length)return i;const o={id:r,icons:e,callback:t,abort:i};return n.forEach((t=>{(t.loaderCallbacks||(t.loaderCallbacks=[])).push(o)})),i}(e,r,s):yt};const wt=/[\s,]+/;function $t(t,e){e.split(wt).forEach((e=>{switch(e.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0}}))}function xt(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(t){for(;t<0;)t+=4;return t%4}if(""===n){const e=parseInt(t);return isNaN(e)?0:r(e)}if(n!==t){let e=0;switch(n){case"%":e=25;break;case"deg":e=90}if(e){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i/=e,i%1==0?r(i):0)}}return e}const St={..._,inline:!1},Mt={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},_t={display:"inline-block"},kt={backgroundColor:"currentColor"},Ot={backgroundColor:"transparent"},jt={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Dt={webkitMask:kt,mask:kt,background:Ot};for(const At in Dt){const t=Dt[At];for(const e in jt)t[At+e]=jt[e]}const Tt={...St,inline:!0};function Ct(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Et=(t,e,n,i)=>{const o=n?Tt:St,s=function(t,e){const n={...t};for(const r in e){const t=e[r],i=typeof t;r in M?(null===t||t&&("string"===i||"number"===i))&&(n[r]=t):i===typeof n[r]&&(n[r]="rotate"===r?t%4:t)}return n}(o,e),c=e.mode||"svg",a={},f=e.style||{},l={..."svg"===c?Mt:{},ref:i};for(let r in e){const t=e[r];if(void 0!==t)switch(r){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":s[r]=!0===t||"true"===t||1===t;break;case"flip":"string"==typeof t&&$t(s,t);break;case"color":a.color=t;break;case"rotate":"string"==typeof t?s[r]=xt(t):"number"==typeof t&&(s[r]=t);break;case"ariaHidden":case"aria-hidden":!0!==t&&"true"!==t&&delete l["aria-hidden"];break;default:void 0===o[r]&&(l[r]=t)}}const d=function(t,e){const n={...u,...t},r={..._,...e},i={left:n.left,top:n.top,width:n.width,height:n.height};let o=n.body;[n,r].forEach((t=>{const e=[],n=t.hFlip,r=t.vFlip;let s,c=t.rotate;switch(n?r?c+=2:(e.push("translate("+(i.width+i.left).toString()+" "+(0-i.top).toString()+")"),e.push("scale(-1 1)"),i.top=i.left=0):r&&(e.push("translate("+(0-i.left).toString()+" "+(i.height+i.top).toString()+")"),e.push("scale(1 -1)"),i.top=i.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=i.height/2+i.top,e.unshift("rotate(90 "+s.toString()+" "+s.toString()+")");break;case 2:e.unshift("rotate(180 "+(i.width/2+i.left).toString()+" "+(i.height/2+i.top).toString()+")");break;case 3:s=i.width/2+i.left,e.unshift("rotate(-90 "+s.toString()+" "+s.toString()+")")}c%2==1&&(i.left!==i.top&&(s=i.left,i.left=i.top,i.top=s),i.width!==i.height&&(s=i.width,i.width=i.height,i.height=s)),e.length&&(o='<g transform="'+e.join(" ")+'">'+o+"</g>")}));const s=r.width,c=r.height,a=i.width,f=i.height;let l,d;null===s?(d=null===c?"1em":"auto"===c?f:c,l=j(d,a/f)):(l="auto"===s?a:s,d=null===c?j(l,f/a):"auto"===c?f:c);const h={},p=(t,e)=>{(t=>"unset"===t||"undefined"===t||"none"===t)(e)||(h[t]=e.toString())};return p("width",l),p("height",d),h.viewBox=i.left.toString()+" "+i.top.toString()+" "+a.toString()+" "+f.toString(),{attributes:h,body:o}}(t,s),h=d.attributes;if(s.inline&&(a.verticalAlign="-0.125em"),"svg"===c){l.style={...a,...f},Object.assign(l,h);let t=0,n=e.id;return"string"==typeof n&&(n=n.replace(/-/g,"_")),l.dangerouslySetInnerHTML={__html:E(d.body,n?()=>n+"ID"+t++:"iconifyReact")},r.createElement("svg",l)}const{body:p,width:g,height:m}=t,y="mask"===c||"bg"!==c&&-1!==p.indexOf("currentColor"),v=function(t,e){let n=-1===t.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}(p,{...h,width:g+"",height:m+""});var b;return l.style={...a,"--svg":(b=v,'url("data:image/svg+xml,'+function(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(b)+'")'),width:Ct(h.width),height:Ct(h.height),..._t,...y?kt:Ot,...f},r.createElement("span",l)};if($(!0),I("",W),"undefined"!=typeof document&&"undefined"!=typeof window){gt();const t=window;if(void 0!==t.IconifyPreload){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";"object"==typeof e&&null!==e&&(e instanceof Array?e:[e]).forEach((t=>{try{("object"!=typeof t||null===t||t instanceof Array||"object"!=typeof t.icons||"string"!=typeof t.prefix||!S(t))&&console.error(n)}catch(e){console.error(n)}}))}if(void 0!==t.IconifyProviders){const e=t.IconifyProviders;if("object"==typeof e&&null!==e)for(let t in e){const n="IconifyProviders["+t+"] is invalid.";try{const r=e[t];if("object"!=typeof r||!r||void 0===r.resources)continue;Y(t,r)||console.error(n)}catch(Ft){console.error(n)}}}}class Lt extends r.Component{constructor(t){super(t),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(t){this.state.icon!==t&&this.setState({icon:t})}_checkIcon(t){const e=this.state,n=this.props.icon;if("object"==typeof n&&null!==n&&"string"==typeof n.body)return this._icon="",this._abortLoading(),void((t||null===e.icon)&&this._setData({data:n}));let r;if("string"!=typeof n||null===(r=o(n,!1,!0)))return this._abortLoading(),void this._setData(null);const i=x(r);if(i){if(this._icon!==n||null===e.icon){this._abortLoading(),this._icon=n;const t=["iconify"];""!==r.prefix&&t.push("iconify--"+r.prefix),""!==r.provider&&t.push("iconify--"+r.provider),this._setData({data:i,classes:t}),this.props.onLoad&&this.props.onLoad(n)}}else this._loading&&this._loading.name===n||(this._abortLoading(),this._icon="",this._setData(null),null!==i&&(this._loading={name:n,abort:bt([r],this._checkIcon.bind(this,!1))}))}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(t){t.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const t=this.props,e=this.state.icon;if(null===e)return t.children?t.children:r.createElement("span",{});let n=t;return e.classes&&(n={...t,className:("string"==typeof t.className?t.className+" ":"")+e.classes.join(" ")}),Et({...u,...e.data},n,t._inline,t._ref)}}const It=r.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!1};return r.createElement(Lt,n)}));r.forwardRef((function(t,e){const n={...t,_ref:e,_inline:!0};return r.createElement(Lt,n)}))}}]);