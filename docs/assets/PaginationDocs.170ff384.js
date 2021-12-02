import{t as l,g as b,m as h,i as o,c as t,w as u,M as N,D as y,b as f,d as g,P as I,u as x,s as w,J as C}from"./vendor.b0d12bc4.js";import{C as p}from"./Card.b4a8d3c9.js";import{G as D}from"./GithubSource.ff774389.js";const z=l("<li></li>"),$=l('<span class="visually-hidden"></span>'),L=l('<span aria-hidden="true"></span>'),S={active:!1,disabled:!1,activeLabel:"(current)"},P=c=>{const[e,i]=b(h(S,c),["active","disabled","className","style","activeLabel","children","ref"]);return(()=>{const s=z.cloneNode(!0),r=e.ref;return typeof r=="function"?r(s):e.ref=s,o(s,t(y,h({get component(){return e.active||e.disabled?"span":N},className:"page-link",get disabled(){return e.disabled}},i,{get children(){return[u(()=>e.children),u((()=>{const n=u(()=>!!(e.active&&e.activeLabel),!0);return()=>n()&&(()=>{const d=$.cloneNode(!0);return o(d,()=>e.activeLabel),d})()})())]}}))),f(n=>{const d=e.style,m=g(e.className,"page-item",{active:e.active,disabled:e.disabled});return n._v$=I(s,d,n._v$),m!==n._v$2&&(s.className=n._v$2=m),n},{_v$:void 0,_v$2:void 0}),s})()};var A=P;function v(c,e,i=c){function s({children:r,...n}){return t(P,h(n,{get children(){return[(()=>{const d=L.cloneNode(!0);return o(d,r||e),d})(),(()=>{const d=$.cloneNode(!0);return o(d,i),d})()]}}))}return s.displayName=c,s}const B=v("First","\xAB"),E=v("Prev","\u2039","Previous"),k=v("Ellipsis","\u2026","More"),j=v("Next","\u203A"),F=v("Last","\xBB"),G=l("<ul></ul>"),M={},T=c=>{const[e,i]=b(h(M,c),["bsPrefix","className","size"]),s=x(e.bsPrefix,"pagination");return(()=>{const r=G.cloneNode(!0);return w(r,i,!1,!1),f(()=>r.className=g(e.className,s,e.size&&`${s}-${e.size}`)),r})()};var a=Object.assign(T,{First:B,Prev:E,Ellipsis:k,Item:A,Next:j,Last:F});const H=l(`<div class="mt-5"><h2>API</h2><h3>Pagination</h3><code>import Pagination from 'solid-bootstrap/Pagination'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">size </td><td class="font-monospace"><div><span><code>'sm'</code><span> | </span><code>'lg'</code></span></div></td><td></td><td><div><p>Set's the size of all PageItems.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'pagination'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>PageItem</h3><code>import PageItem from 'solid-bootstrap/PageItem'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">active </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Styles PageItem as active, and renders a <code>&lt;span&gt;</code> instead of an <code>&lt;a&gt;</code>.</p></div></td></tr><tr><td class="font-monospace">activeLabel </td><td class="font-monospace"><div>string</div></td><td><code>'(current)'</code></td><td><div><p>An accessible label indicating the active state..</p></div></td></tr><tr><td class="font-monospace">disabled </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Disables the PageItem</p></div></td></tr><tr><td class="font-monospace">href </td><td class="font-monospace"><div>string</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">onClick </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback function for when this component is clicked</p></div></td></tr></tbody></table></div></div>`),J=()=>H.cloneNode(!0),O=l("<div><br><br></div>"),R=l('<div class="row gy-4"><div><h2>Pagination</h2><p class="lead">A set of presentational components for building pagination UI.</p></div><div></div></div>'),Q=()=>{let c=2;const e=()=>t(C,{each:new Array(5),children:(i,s)=>t(a.Item,{get active(){return s()+1===c},get children(){return s()+1}})});return(()=>{const i=R.cloneNode(!0),s=i.firstChild,r=s.firstChild,n=s.nextSibling;return o(s,t(D,{name:"PaginationDocs"}),r),o(n,t(p,{get children(){return[t(p.Header,{children:"Examples"}),t(p.Body,{get children(){const d=O.cloneNode(!0),m=d.firstChild,_=m.nextSibling;return o(d,t(a,{children:e}),m),o(d,t(a,{size:"lg",children:e}),_),o(d,t(a,{size:"sm",children:e}),null),d}})]}}),null),o(n,t(p,{get children(){return[t(p.Header,{children:"More options"}),t(p.Body,{get children(){return t(a,{get children(){return[t(a.First,{}),t(a.Prev,{}),t(a.Item,{children:1}),t(a.Ellipsis,{}),t(a.Item,{children:10}),t(a.Item,{children:11}),t(a.Item,{active:!0,children:12}),t(a.Item,{children:13}),t(a.Item,{disabled:!0,children:14}),t(a.Ellipsis,{}),t(a.Item,{children:20}),t(a.Next,{}),t(a.Last,{})]}})}})]}}),null),o(i,t(J,{}),null),i})()};export{Q as PaginationDocs,Q as default};
