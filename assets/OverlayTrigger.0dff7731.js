import{a0 as k,s as O,m as h,F as P,a1 as g,d as w,ak as M,B as R,P as $,aj as b}from"./index.5ae66943.js";import{O as F}from"./Overlay.973eb58b.js";const N=k();var j=N;const B={transition:P,rootClose:!1,show:!1,placement:"top",popperConfig:{}},H=r=>{const[t,p]=O(h(B,r),["children","transition","popperConfig","ref"]),a=t.transition===!0?P:t.transition||void 0,[s,o]=g(),[i,l]=g(),[u,n]=g(),c={get wrapperProps(){return s()?.()},get arrowProps(){return i()?.()},get metadata(){return u()?.()}};return w(j.Provider,{value:c,get children(){return w(F,h(p,{get popperConfig(){return t.popperConfig},transition:a,children:(f,d,v)=>(M(()=>{o(()=>f),l(()=>d),n(()=>v)}),t.children)}))}})};var z=H;function A(r){return r&&typeof r=="object"?r:{show:r,hide:r}}function C(r,t,p){const[a]=t,s=a.currentTarget,o=a.relatedTarget;(!o||o!==s)&&!b(s,o)&&r(...t)}const D={defaultShow:!1,trigger:["hover","focus"],popperConfig:{}};function I(r){const[t,p]=O(h(D,{flip:r.placement&&r.placement.indexOf("auto")!==-1},r),["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]);let[a,s]=g();const o=e=>{s(e),t.children.ref?.(e)};let i,l="";const[u,n]=R(()=>t.show,()=>t.defaultShow,t.onToggle),c=A(t.delay),f=()=>{if(window.clearTimeout(i),l="show",!c.show){n(!0);return}i=window.setTimeout(()=>{l==="show"&&n(!0)},c.show)},d=()=>{if(window.clearTimeout(i),l="hide",!c.hide){n(!1);return}i=window.setTimeout(()=>{l==="hide"&&n(!1)},c.hide)},v=(...e)=>{f()},T=(...e)=>{d()},y=(...e)=>{n(!u())},x=(...e)=>{C(f,e)},S=(...e)=>{C(d,e)},L=e=>{const m=t.trigger==null?[]:[].concat(t.trigger);m.indexOf("click")!==-1&&e.addEventListener("click",y),m.indexOf("focus")!==-1&&(e.addEventListener("focus",v),e.addEventListener("blur",T)),m.indexOf("hover")!==-1&&(e.addEventListener("mouseover",x),e.addEventListener("mouseout",S))},E=$(()=>t.children);return[w(()=>{let e=E();for(;typeof e=="function";)e=e();return o(e),L(e),e},{}),w(z,h(p,{get show(){return u()},onHide:d,get flip(){return t.flip},get placement(){return t.placement},get popperConfig(){return t.popperConfig},target:a,get children(){return t.overlay}}))]}export{j as O,I as a};
