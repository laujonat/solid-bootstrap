import{s as l,m as o,u as d,aq as v,V as m,X as b,d as u,e as p,D as f,B as P,ar as g}from"./index.5ae66943.js";const $={},y=i=>{const[e,a]=l(o($,i),["as","bsPrefix","active","disabled","eventKey","class","className","variant","action"]),s=d(e.bsPrefix,"list-group-item"),[n,t]=v(o({get key(){return m(e.eventKey,a.href)},get active(){return e.active}},a)),r=b(()=>c=>{if(e.disabled){c.preventDefault(),c.stopPropagation();return}n.onClick(c)});return u(f,o({get component(){return e.as||(e.action?a.href?"a":"button":"div")}},a,n,()=>e.disabled&&a.tabIndex===void 0?{tabIndex:-1,["aria-disabled"]:!0}:{},{get onClick(){return r()},get class(){return p(e.class,e.className,s,t.isActive&&"active",e.disabled&&"disabled",e.variant&&`${s}-${e.variant}`,e.action&&`${s}-action`)}}))};var h=y;const x={as:"div"},K=i=>{const[e,a]=l(o(x,i),["as","activeKey","defaultActiveKey","bsPrefix","class","className","variant","horizontal","numbered","onSelect"]),[s,n]=P(()=>e.activeKey,()=>e.defaultActiveKey,e.onSelect),t=d(e.bsPrefix,"list-group");let r;return e.horizontal&&(r=e.horizontal===!0?"horizontal":`horizontal-${e.horizontal}`),u(g,o({get as(){return e.as}},a,{get activeKey(){return s()},onSelect:n,get class(){return p(e.class,e.className,t,e.variant&&`${t}-${e.variant}`,r&&`${t}-${r}`,e.numbered&&`${t}-numbered`)}}))};var N=Object.assign(K,{Item:h});export{N as L,h as a};
