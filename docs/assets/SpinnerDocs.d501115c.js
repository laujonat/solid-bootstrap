import{g as h,m as l,u,c as e,d as v,D as g,t as c,i as o}from"./vendor.b0d12bc4.js";import{C as n}from"./Card.b4a8d3c9.js";import{B as m}from"./Layout.eb1c4701.js";import{G as b}from"./GithubSource.ff774389.js";const f={as:"div"},y=s=>{const[a,d]=h(l(f,s),["as","bsPrefix","variant","animation","size","className"]),r=`${u(a.bsPrefix,"spinner")}-${a.animation}`;return e(g,l({get component(){return a.as}},d,{get className(){return v(a.className,r,a.size&&`${r}-${a.size}`,a.variant&&`text-${a.variant}`)}}))};var t=y;const w=c(`<div class="mt-5"><h2>API</h2><h3>Spinner</h3><code>import Spinner from 'solid-bootstrap/Spinner'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">animation <sup class="text-danger">required</sup></td><td class="font-monospace"><div><span><code>'border'</code><span> | </span><code>'grow'</code></span></div></td><td><code>true</code></td><td><div><p>Changes the animation style of the spinner.</p></div></td></tr><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">children </td><td class="font-monospace"><div>element</div></td><td></td><td><div><p>This component may be used to wrap child elements or components.</p></div></td></tr><tr><td class="font-monospace">role </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>An ARIA accessible role applied to the Menu component. This should generally be set to 'status'</p></div></td></tr><tr><td class="font-monospace">size </td><td class="font-monospace"><div><span><code>'sm'</code></span></div></td><td></td><td><div><p>Component size variations.</p></div></td></tr><tr><td class="font-monospace">variant </td><td class="font-monospace"><div><span><code>'primary'</code><span> | </span><code>'secondary'</code><span> | </span><code>'success'</code><span> | </span><code>'danger'</code><span> | </span><code>'warning'</code><span> | </span><code>'info'</code><span> | </span><code>'light'</code><span> | </span><code>'dark'</code></span></div></td><td></td><td><div><p>The visual color style of the spinner</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'spinner'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),S=()=>w.cloneNode(!0),p=c('<span class="visually-hidden">Loading...</span>'),$=c(`<div class="row gy-4"><div><h2>Spinners</h2><p class="lead">Spinners can be used to show the loading state in your projects.</p></div><div><p>To ensure the maximum accessibility for spinner components it is recommended you provide a relevant ARIA role property, and include screenreader-only readable text representation of the spinner's meaning inside the component using Bootstrap's visually-hidden class.</p></div></div>`),P=()=>(()=>{const s=$.cloneNode(!0),a=s.firstChild,d=a.firstChild,i=a.nextSibling,r=i.firstChild;return o(a,e(b,{name:"SpinnerDocs"}),d),o(i,e(n,{get children(){return[e(n.Header,{children:"Border Spinner"}),e(n.Body,{get children(){return e(t,{animation:"border",role:"status",get children(){return p.cloneNode(!0)}})}})]}}),r),o(i,e(n,{get children(){return[e(n.Header,{children:"Grow Spinner"}),e(n.Body,{get children(){return e(t,{animation:"grow",role:"status",get children(){return p.cloneNode(!0)}})}})]}}),r),o(i,e(n,{get children(){return[e(n.Header,{children:"Variants"}),e(n.Body,{get children(){return[e(t,{animation:"border",variant:"primary"}),e(t,{animation:"border",variant:"secondary"}),e(t,{animation:"border",variant:"success"}),e(t,{animation:"border",variant:"danger"}),e(t,{animation:"border",variant:"warning"}),e(t,{animation:"border",variant:"info"}),e(t,{animation:"border",variant:"light"}),e(t,{animation:"border",variant:"dark"}),e(t,{animation:"grow",variant:"primary"}),e(t,{animation:"grow",variant:"secondary"}),e(t,{animation:"grow",variant:"success"}),e(t,{animation:"grow",variant:"danger"}),e(t,{animation:"grow",variant:"warning"}),e(t,{animation:"grow",variant:"info"}),e(t,{animation:"grow",variant:"light"}),e(t,{animation:"grow",variant:"dark"})]}})]}}),r),o(i,e(n,{get children(){return[e(n.Header,{children:"Sizing"}),e(n.Body,{get children(){return[e(t,{animation:"border",size:"sm"}),e(t,{animation:"border"}),e(t,{animation:"grow",size:"sm"}),e(t,{animation:"grow"})]}})]}}),r),o(i,e(n,{get children(){return[e(n.Header,{children:"Buttons"}),e(n.Body,{get children(){return[" ",e(m,{variant:"primary",disabled:!0,get children(){return[e(t,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),p.cloneNode(!0)]}})," ",e(m,{variant:"primary",disabled:!0,get children(){return[e(t,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),"Loading..."]}})]}})]}}),r),o(s,e(S,{}),null),s})();export{P as SpinnerDocs,P as default};
