import{u as h,m as o,a,D as E,e as C,s as g,b as T}from"./vendor.e0c45427.js";import{E as K,v as s,m as x,S as d,d as S,F as A,c as I,u as N}from"./index.58251ec3.js";import{u as $}from"./ssr.7123efb6.js";const b=t=>typeof t.children=="function"?t.children(K,{}):t.children;function f(t){const e=h(s);if(!e)return[t,{get eventKey(){return t.eventKey},get isActive(){return t.active},get mountOnEnter(){return t.mountOnEnter},get transition(){return t.transition},get unmountOnExit(){return t.unmountOnExit}}];const n=x(t.eventKey);return[o(t,{get id(){return e?.getControlledId(t.eventKey)},get"aria-labelledby"(){return e?.getControllerId(t.eventKey)}}),{get eventKey(){return t.eventKey},get isActive(){return t.active==null&&n!=null?x(e?.activeKey)===n:t.active},get transition(){return t.transition||e?.transition||b},get mountOnEnter(){return t.mountOnEnter!=null?t.mountOnEnter:e?.mountOnEnter},get unmountOnExit(){return t.unmountOnExit!=null?t.unmountOnExit:e?.unmountOnExit}}]}const j=t=>{const[e,n]=f(t);return n.transition,a(s.Provider,{value:null,get children(){return a(d.Provider,{value:null,get children(){return a(E,o({get component(){return t.as??"div"}},e,{role:"tabpanel",get hidden(){return!n.isActive},get["aria-hidden"](){return!n.isActive}}))}})}})},P=t=>{const[e,n]=S(()=>t.activeKey,()=>t.defaultActiveKey,t.onSelect),u=$(t.id),r=C(()=>t.generateChildId||((i,c)=>u?`${u}-${c}-${i}`:null)),l={get onSelect(){return n},get activeKey(){return e()},get transition(){return t.transition},get mountOnEnter(){return t.mountOnEnter||!1},get unmountOnExit(){return t.unmountOnExit||!1},get getControlledId(){return i=>r()(i,"pane")},get getControllerId(){return i=>r()(i,"tab")}};return a(s.Provider,{value:l,get children(){return a(d.Provider,{value:n||null,get children(){return t.children}})}})};P.Panel=j;function O(t){return typeof t=="boolean"?t?A:void 0:t}const D={},k=t=>{const[e,n]=g(o(D,t),["transition"]);return a(P,o(n,{get transition(){return O(e.transition)}}))};var B=I("tab-content");const F={},R=t=>{const[e,n]=g(o(F,t),["bsPrefix","transition"]),[u,r]=f(o(n,{get transition(){return O(e.transition)}})),[l,i]=g(u,["as","className","mountOnEnter","unmountOnExit"]),c=N(e.bsPrefix,"tab-pane"),y=r.transition||b;return a(s.Provider,{value:null,get children(){return a(d.Provider,{value:null,get children(){return a(y,{get in(){return r.isActive},get onEnter(){return r.onEnter},get onEntering(){return r.onEntering},get onEntered(){return r.onEntered},get onExit(){return r.onExit},get onExiting(){return r.onExiting},get onExited(){return r.onExited},get mountOnEnter(){return r.mountOnEnter},get unmountOnExit(){return r.unmountOnExit},get children(){return a(E,o({get component(){return l.as??"div"}},i,{ref(m){const v=n.ref;typeof v=="function"?v(m):n.ref=m},get className(){return T(l.className,c,r.isActive&&"active")}}))}})}})}})},L=t=>t;var q=Object.assign(L,{Container:k,Content:B,Pane:R});export{q as T,B as a,R as b,P as c,O as g};
