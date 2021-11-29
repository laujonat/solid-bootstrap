import{t as m,s as g,m as N,u as H,i as h,v as d,y as B,w as $,b,X as C,G as p,a as e,c as S,d as k,l as I}from"./vendor.e0c45427.js";import{C as t}from"./Card.2791c662.js";import{u as x}from"./index.58251ec3.js";const j=m('<div role="progressbar"></div>'),D=m('<span class="visually-hidden"></span>'),R=m("<div></div>"),_=S(),P=1e3,A={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1};function E(i,r,o){const l=(i-r)/(o-r)*100;return Math.round(l*P)/P}function y(i){const[r,o]=g(i,["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"]),l=x(r.bsPrefix,"progress");return(()=>{const s=j.cloneNode(!0);return h(s,o,!1,!0),d(s,(()=>{const n=B(()=>!!r.visuallyHidden,!0);return()=>n()?(()=>{const c=D.cloneNode(!0);return d(c,()=>r.label),c})():r.label})()),$(n=>{const c=b(r.className,`${l}-bar`,{[`bg-${r.variant}`]:r.variant,[`${l}-bar-animated`]:r.animated,[`${l}-bar-striped`]:r.animated||r.striped}),u={width:`${E(r.now,r.min,r.max)}%`,...r.style},v=r.now,f=r.min,w=r.max;return c!==n._v$&&(s.className=n._v$=c),n._v$2=C(s,u,n._v$2),v!==n._v$3&&p(s,"aria-valuenow",n._v$3=v),f!==n._v$4&&p(s,"aria-valuemin",n._v$4=f),w!==n._v$5&&p(s,"aria-valuemax",n._v$5=w),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),s})()}const a=i=>{const[r,o]=g(N(A,i),["children","className","bsPrefix"]),l=x(r.bsPrefix,"progress"),s=H(_);let n=o,c={};if(!s?.isStacked){const[u,v]=g(o,["min","now","max","label","visuallyHidden","striped","animated","variant"]);n=u,c=v}return s?.isStacked?y(n):e(_.Provider,{value:{isStacked:!0},get children(){const u=R.cloneNode(!0);return h(u,c,!1,!0),d(u,()=>r.children??y(n)),$(()=>u.className=b(r.className,l)),u}})},O=m('<div class="row gy-4"><div><h3>Progress bars </h3><p class="lead">Provide up-to-date feedback on the progress of a workflow or action with simple yet flexible progress bars.</p></div><div></div></div>'),V=()=>{const[i,r]=k(5),o=window.setInterval(()=>{r(i()<100?i()+5:0)},1e3);return I(()=>window.clearInterval(o)),(()=>{const l=O.cloneNode(!0),s=l.firstChild,n=s.nextSibling;return d(n,e(t,{get children(){return[e(t.Header,{children:"Default"}),e(t.Body,{get children(){return e(a,{now:60})}})]}}),null),d(n,e(t,{get children(){return[e(t.Header,{children:"With label"}),e(t.Body,{get children(){return e(a,{now:60,label:`${60}%`})}})]}}),null),d(n,e(t,{get children(){return[e(t.Header,{children:"Screenreader only label"}),e(t.Body,{get children(){return e(a,{now:60,label:`${60}%`,visuallyHidden:!0})}})]}}),null),d(n,e(t,{get children(){return[e(t.Header,{children:"Contextual alternatives"}),e(t.Body,{get children(){return[e(a,{variant:"success",now:40}),e(a,{variant:"info",now:20}),e(a,{variant:"warning",now:60}),e(a,{variant:"danger",now:80})]}})]}}),null),d(n,e(t,{get children(){return[e(t.Header,{children:"Striped"}),e(t.Body,{get children(){return[e(a,{striped:!0,variant:"success",now:40}),e(a,{striped:!0,variant:"info",now:20}),e(a,{striped:!0,variant:"warning",now:60}),e(a,{striped:!0,variant:"danger",now:80})]}})]}}),null),d(n,e(t,{get children(){return[e(t.Header,{children:"Animated"}),e(t.Body,{get children(){return e(a,{animated:!0,get now(){return i()},get label(){return`${i()}%`}})}})]}}),null),d(n,e(t,{get children(){return[e(t.Header,{children:"Stacked"}),e(t.Body,{get children(){return e(a,{get children(){return[e(a,{striped:!0,variant:"success",now:35}),e(a,{variant:"warning",now:20}),e(a,{striped:!0,variant:"danger",now:10})]}})}})]}}),null),l})()};export{V as ProgressBarDocs,V as default};
