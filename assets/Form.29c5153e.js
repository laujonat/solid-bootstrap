import{s as u,m as o,c as i,D as _,u as b,o as h,q as y,k as g,J as x,d as v,t as F,z as V,B as p,j as k,f as H,E as j,n as R,M as B,w as G}from"./index.7b72cfc3.js";import{F as $,a as L,b as O,c as D}from"./FormControl.652731c3.js";import{C as E}from"./Layout.de1acbea.js";const M={as:"div"},q=t=>{const[e,r]=u(o(M,t),["as","controlId"]),a={get controlId(){return e.controlId}};return i($.Provider,{value:a,get children(){return i(_,o({get component(){return e.as}},r))}})};var w=q;const A=F("<label></label>"),J={},W=t=>{const[e,r]=u(o(J,t),["bsPrefix","class","className","children","controlId","label"]),a=b(e.bsPrefix,"form-floating");return i(w,o({get class(){return v(e.class,e.className,a)},get controlId(){return e.controlId}},r,{get children(){return[h(()=>e.children),(()=>{const n=A.cloneNode(!0);return y(n,()=>e.label),g(()=>x(n,"for",e.controlId)),n})()]}}))};var K=W;const Q=V();var S=Q;const U=F("<label></label>"),X={},Y=t=>{const[e,r]=u(o(X,t),["bsPrefix","class","className","htmlFor"]),a=b(e.bsPrefix,"form-check-label"),n=p($);return p(S)?.setHasFormCheckLabel?.(!0),(()=>{const s=U.cloneNode(!0);return k(s,r,!1,!1),g(c=>{const d=e.htmlFor||n.controlId,f=v(e.class,e.className,a);return d!==c._v$&&x(s,"for",c._v$=d),f!==c._v$2&&(s.className=c._v$2=f),c},{_v$:void 0,_v$2:void 0}),s})()};var T=Y;const Z=F("<div></div>"),ee={as:"input",title:"",type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,feedbackTooltip:!1},se=t=>{const[e,r]=u(o(ee,t),["as","id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","class","className","style","title","type","label","children"]),a=b(e.bsPrefix,"form-check"),n=b(e.bsSwitchPrefix,"form-switch"),[l,s]=H(!1),c=p($),d={get controlId(){return e.id||c.controlId}},f=j(()=>e.children),N=R(()=>e.label!=null&&e.label!==!1&&!f()||l());return i($.Provider,{value:d,get children(){return i(S.Provider,{value:{setHasFormCheckLabel:s},get children(){const P=Z.cloneNode(!0);return y(P,()=>f()||[i(L,o(r,{get type(){return e.type==="switch"?"checkbox":e.type},get isValid(){return e.isValid},get isInvalid(){return e.isInvalid},get disabled(){return e.disabled},get as(){return e.as}})),h((()=>{const m=h(()=>!!N(),!0);return()=>m()&&i(T,{get title(){return e.title},get children(){return e.label}})})()),h((()=>{const m=h(()=>!!e.feedback,!0);return()=>m()&&i(O,{get type(){return e.feedbackType},get tooltip(){return e.feedbackTooltip},get children(){return e.feedback}})})())]),g(m=>{const z=e.style,I=v(e.class,e.className,N()&&a,e.inline&&`${a}-inline`,e.type==="switch"&&n);return m._v$=B(P,z,m._v$),I!==m._v$2&&(P.className=m._v$2=I),m},{_v$:void 0,_v$2:void 0}),P}})}})};var C=Object.assign(se,{Input:L,Label:T}),te=G("form-floating");const re={as:"label",column:!1,visuallyHidden:!1},le=t=>{const[e,r]=u(o(re,t),["as","bsPrefix","column","visuallyHidden","class","className","htmlFor"]),a=p($),n=b(e.bsPrefix,"form-label");let l="col-form-label";typeof e.column=="string"&&(l=`${l} ${l}-${e.column}`);const s=()=>v(e.class,e.className,n,e.visuallyHidden&&"visually-hidden",e.column&&l);return e.column?i(E,o({as:"label",get class(){return s()},get htmlFor(){return e.htmlFor||a.controlId}},r)):i(_,o({get component(){return e.as},get class(){return s()},get htmlFor(){return e.htmlFor||a.controlId}},r))};var ae=le;const oe=F('<input type="range">'),ne={as:"img"},ce=t=>{const[e,r]=u(o(ne,t),["bsPrefix","className","id"]),a=p($),n=b(e.bsPrefix,"form-range");return(()=>{const l=oe.cloneNode(!0);return k(l,r,!1,!1),g(s=>{const c=v(e.className,n),d=e.id||a.controlId;return c!==s._v$&&(l.className=s._v$=c),d!==s._v$2&&x(l,"id",s._v$2=d),s},{_v$:void 0,_v$2:void 0}),l})()};var ie=ce;const de=F("<select></select>"),me={isValid:!1,isInvalid:!1},ue=t=>{const[e,r]=u(o(me,t),["bsPrefix","size","htmlSize","class","className","isValid","isInvalid","id"]),a=p($),n=b(e.bsPrefix,"form-select");return(()=>{const l=de.cloneNode(!0);return k(l,r,!1,!1),g(s=>{const c=e.htmlSize,d=v(e.class,e.className,n,e.size&&`${n}-${e.size}`,e.isValid&&"is-valid",e.isInvalid&&"is-invalid"),f=e.id||a.controlId;return c!==s._v$&&x(l,"size",s._v$=c),d!==s._v$2&&(l.className=s._v$2=d),f!==s._v$3&&x(l,"id",s._v$3=f),s},{_v$:void 0,_v$2:void 0,_v$3:void 0}),l})()};var fe=ue;const be={as:"small"},ve=t=>{const[e,r]=u(o(be,t),["as","bsPrefix","class","className","muted"]),a=b(e.bsPrefix,"form-text");return i(_,o({get component(){return e.as}},r,{get class(){return v(e.class,e.className,a,e.muted&&"text-muted")}}))};var $e=ve;const pe=t=>i(C,o(t,{type:"switch"}));var he=Object.assign(pe,{Input:C.Input,Label:C.Label});const xe={as:"form"},ge=t=>{const[e,r]=u(o(xe,t),["as","class","className","validated"]);return i(_,o({get component(){return e.as}},r,{get class(){return v(e.class,e.className,e.validated&&"was-validated")}}))};var _e=Object.assign(ge,{Group:w,Control:D,Floating:te,Check:C,Switch:he,Label:ae,Text:$e,Range:ie,Select:fe,FloatingLabel:K});export{_e as F,K as a,te as b};
