import{x as b,y as d,A as C,s as g,m as i,B as v,u as w,F as u,d as r,S as x,E as A,G as c,z as P,H as $,I as N,e as S,J as k}from"./index.5ae66943.js";const L=k('<div role="alert"></div>'),B=b("h4"),H=d("alert-heading",{Component:B}),y=d("alert-link",{Component:C}),E={variant:"primary",defaultShow:!0,transition:u,closeLabel:"Close alert"},_=m=>{const[e,n]=g(i(E,m),["bsPrefix","children","defaultShow","show","closeLabel","closeVariant","class","className","children","variant","onClose","dismissible","transition"]),[h,l]=v(()=>e.show,()=>e.defaultShow,e.onClose),t=w(e.bsPrefix,"alert"),f=s=>{l&&l(!1,s)},a=e.transition===!0?u:e.transition,o=()=>(()=>{const s=L.cloneNode(!0);return A(s,a?{}:n,!1,!0),c(s,(()=>{const p=P(()=>!!e.dismissible,!0);return()=>p()&&r($,{onClick:f,get["aria-label"](){return e.closeLabel},get variant(){return e.closeVariant}})})(),null),c(s,()=>e.children,null),N(()=>s.className=S(e.class,e.className,t,e.variant&&`${t}-${e.variant}`,e.dismissible&&`${t}-dismissible`)),s})();return r(x,{when:!!a,get fallback(){return e.show?o:null},get children(){return r(a,i({unmountOnExit:!0},n,{ref(s){undefined=s},get in(){return h()},children:o}))}})};var O=Object.assign(_,{Link:y,Heading:H});export{O as A};
