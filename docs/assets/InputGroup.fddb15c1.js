import{a3 as c,c as e,m as s,g as u,u as m,D as l,d}from"./vendor.c4e83590.js";import{a as n}from"./FormControl.661b9e20.js";import{I as x}from"./InputGroupContext.c4707dfb.js";const r=c("input-group-text",{Component:"span"}),h=o=>e(r,{get children(){return e(n,s({type:"checkbox"},o))}}),f=o=>e(r,{get children(){return e(n,s({type:"radio"},o))}}),g={as:"div"},I=o=>{const[t,p]=u(s(g,o),["as","bsPrefix","size","hasValidation","className"]),a=m(t.bsPrefix,"input-group"),i={};return e(x.Provider,{value:i,get children(){return e(l,s({get component(){return t.as}},p,{get className(){return d(t.className,a,t.size&&`${a}-${t.size}`,t.hasValidation&&"has-validation")}}))}})};var G=Object.assign(I,{Text:r,Radio:f,Checkbox:h});export{G as I};
