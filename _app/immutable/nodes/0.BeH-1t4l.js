import{a as u,t as d}from"../chunks/disclose-version.ClMNjd7P.js";import{F as v,G as h,B as g,I as b,J as y,D as c,r as l,K as N,L as m,C as A,M as E,E as T,N as w,O as n,P as F}from"../chunks/runtime.BHR_h63M.js";import{b as i}from"../chunks/paths.D_Z-TZls.js";function M(a,r,...t){var s=a,o=b,e;v(()=>{o!==(o=r())&&(e&&(y(e),e=null),e=g(()=>o(s,...t)))},h),c&&(s=l)}function p(a,r,t,s){var o=a.__attributes??(a.__attributes={});c&&(o[r]=a.getAttribute(r),a.nodeName==="LINK")||o[r]!==(o[r]=t)&&(t==null?a.removeAttribute(r):typeof t!="string"&&O(a).includes(r)?a[r]=t:a.setAttribute(r,t))}var f=new Map;function O(a){var r=f.get(a.nodeName);if(r)return r;f.set(a.nodeName,r=[]);for(var t,s=a,o=Element.prototype;o!==s;){t=m(s);for(var e in t)t[e].set&&r.push(e);s=N(s)}return r}const P=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:P},Symbol.toStringTag,{value:"Module"}));var S=d("<nav><a>home</a> <a>about</a></nav> <!>",1);function L(a,r){A(r,!0);var t=S(),s=E(t),o=w(s);p(o,"href",`${i??""}/`);var e=n(o,2);p(e,"href",`${i??""}/about`),F(s);var _=n(s,2);M(_,()=>r.children),u(a,t),T()}export{L as component,K as universal};
