import{n as l,ax as R,v as r,F as f,p as S,B as j,w as D,c as n,ay as F,S as H}from"./vendor.b0d12bc4.js";import{c as M,u as T,a as W,r as $,m as k}from"./store.b6be1707.js";const m=e=>{const[o,E]=l(),[h,w]=l(),[a,i]=l(!e.show),d=R({get ref(){return e.container}}),[b,x]=M({}),g=e.transition,s=r(()=>!!(e.show||e.transition&&!a()));f(()=>{x($(k({enabled:s(),placement:e.placement,enableEvents:s(),containerPadding:e.containerPadding||5,flip:e.flip,offset:e.offset,arrowElement:h(),popperConfig:e.popperConfig??{}})))});const t=T(e.target,o,b);f(()=>{e.show?a()&&i(!1):!e.transition&&!a()&&i(!0)});const C=(...c)=>{i(!0),e.onExited&&e.onExited(...c)};S(()=>{o()&&W(o,e.onHide,{get disabled(){return!e.rootClose||e.rootCloseDisabled||!e.show},get clickTrigger(){return e.rootCloseEvent}})});const y=r(()=>({...t()?.attributes.popper,style:t()?.styles.popper,ref:E})),v=r(()=>({...t()?.attributes.arrow,style:t()?.styles.arrow,ref:w})),O=r(()=>({popper:t(),placement:e.placement,show:!!e.show})),P=j(()=>e.children)(),u=()=>P(y,v,O);return(()=>{const c=D(()=>!!d(),!0);return n(H,{get when(){return c()&&s()},get children(){return n(F,{get mount(){return d()},get children(){return g?n(g,{appear:!0,get in(){return e.show},get onExit(){return e.onExit},get onExiting(){return e.onExiting},onExited:C,get onEnter(){return e.onEnter},get onEntering(){return e.onEntering},get onEntered(){return e.onEntered},get children(){return n(u,{})}}):n(u,{})}})}})})()};m.displayName="Overlay";var I=m;export{I as O};
