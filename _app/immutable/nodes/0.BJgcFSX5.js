import{a as u,t as v}from"../chunks/COn6jqhv.js";import{V as d,W as h,T as g,X as b,Y as y,U as _,K as l,Z as m,_ as N,p as A,k as T,m as E,s as n,o as w,v as S}from"../chunks/BqskaPX9.js";import{b as i}from"../chunks/IOyw2bt-.js";function j(a,r,...t){var s=a,o=b,e;d(()=>{o!==(o=r())&&(e&&(y(e),e=null),e=g(()=>o(s,...t)))},h),_&&(s=l)}function p(a,r,t,s){var o=a.__attributes??(a.__attributes={});_&&(o[r]=a.getAttribute(r),a.nodeName==="LINK")||o[r]!==(o[r]=t)&&(t==null?a.removeAttribute(r):typeof t!="string"&&k(a).includes(r)?a[r]=t:a.setAttribute(r,t))}var f=new Map;function k(a){var r=f.get(a.nodeName);if(r)return r;f.set(a.nodeName,r=[]);for(var t,s=a,o=Element.prototype;o!==s;){t=N(s);for(var e in t)t[e].set&&r.push(e);s=m(s)}return r}const F=!0,R=Object.freeze(Object.defineProperty({__proto__:null,prerender:F},Symbol.toStringTag,{value:"Module"}));var K=v("<nav><a>home</a> <a>about</a></nav> <!>",1);function x(a,r){A(r,!0);var t=K(),s=T(t),o=w(s);p(o,"href",`${i??""}/`);var e=n(o,2);p(e,"href",`${i??""}/about`),S(s);var c=n(s,2);j(c,()=>r.children),u(a,t),E()}export{x as component,R as universal};