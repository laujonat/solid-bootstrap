import{s as p,m as b,u as A,b as Se,d as N,e as y,D as j,f as Y,g as ye,h as _e,i as Ce,c as n,j as _,C as Te,t as L,k as c,n as k,o as P,p as Re,L as E,q as W,N as R,r as Oe}from"./index.5ae66943.js";const we={variant:"primary",active:!1,disabled:!1},Ae=e=>{const[r,a]=p(b(we,e),["as","bsPrefix","variant","size","active","class","className"]),t=A(r.bsPrefix,"btn"),[s,{tagName:o}]=Se({tagName:r.as,...a});return N(j,b({component:o},s,a,{get class(){return y(r.class,r.className,t,r.active&&"active",r.variant&&`${t}-${r.variant}`,r.size&&`${t}-${r.size}`,a.href&&a.disabled&&"disabled")}}))};var Ne=Ae;const je=["xxl","xl","lg","md","sm","xs"];function Le(e){const[r,a]=p(e,["as","bsPrefix","class","className"]),t=A(r.bsPrefix,"col"),s=Y(),o=[],i=[];s().forEach(u=>{const f=a[u];let x,C,T;typeof f=="object"&&f!=null?{span:x,offset:C,order:T}=f:x=f;const $=u!=="xs"?`-${u}`:"";x&&o.push(x===!0?`${t}${$}`:`${t}${$}-${x}`),T!=null&&i.push(`order${$}-${T}`),C!=null&&i.push(`offset${$}-${C}`)});const[v,l]=p(a,je);return[b(l,{get class(){return y(r.class,r.className,...o,...i)}}),{get as(){return r.as},get bsPrefix(){return t},get spans(){return o}}]}const ke=e=>{const[r,a]=Le(e),[t,s]=p(r,["class","className"]);return N(j,b({get component(){return a.as??"div"}},s,{get class(){return y(t.class,t.className,!a.spans.length&&a.bsPrefix)}}))};var B=ke;const Pe={as:"div"},Me=e=>{const[r,a]=p(b(Pe,e),["as","bsPrefix","class","className"]),t=A(r.bsPrefix,"row"),s=Y(),o=`${t}-cols`,i=[];return s().forEach(v=>{const l=a[v];delete a[v];let u;l!=null&&typeof l=="object"?{cols:u}=l:u=l;const f=v!=="xs"?`-${v}`:"";u!=null&&i.push(`${o}${f}-${u}`)}),N(j,b({get component(){return r.as}},a,{get class(){return y(r.class,r.className,t,...i)}}))};var Ue=Me,h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ee(e,r,a,t){var s=-1,o=e==null?0:e.length;for(t&&o&&(a=e[++s]);++s<o;)a=r(a,e[s],s,e);return a}var We=Ee;function Be(e){return function(r){return e?.[r]}}var ze=Be,Ie=ze,Ze={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},De=Ie(Ze),Fe=De,Ge=typeof h=="object"&&h&&h.Object===Object&&h,He=Ge,Ve=He,Je=typeof self=="object"&&self&&self.Object===Object&&self,qe=Ve||Je||Function("return this")(),Ye=qe,Ke=Ye,Qe=Ke.Symbol,M=Qe;function Xe(e,r){for(var a=-1,t=e==null?0:e.length,s=Array(t);++a<t;)s[a]=r(e[a],a,e);return s}var er=Xe,rr=Array.isArray,ar=rr,z=M,K=Object.prototype,tr=K.hasOwnProperty,sr=K.toString,m=z?z.toStringTag:void 0;function nr(e){var r=tr.call(e,m),a=e[m];try{e[m]=void 0;var t=!0}catch{}var s=sr.call(e);return t&&(r?e[m]=a:delete e[m]),s}var or=nr,ur=Object.prototype,cr=ur.toString;function ir(e){return cr.call(e)}var lr=ir,I=M,fr=or,dr=lr,br="[object Null]",gr="[object Undefined]",Z=I?I.toStringTag:void 0;function vr(e){return e==null?e===void 0?gr:br:Z&&Z in Object(e)?fr(e):dr(e)}var xr=vr;function mr(e){return e!=null&&typeof e=="object"}var pr=mr,$r=xr,hr=pr,Sr="[object Symbol]";function yr(e){return typeof e=="symbol"||hr(e)&&$r(e)==Sr}var _r=yr,D=M,Cr=er,Tr=ar,Rr=_r,Or=1/0,F=D?D.prototype:void 0,G=F?F.toString:void 0;function Q(e){if(typeof e=="string")return e;if(Tr(e))return Cr(e,Q)+"";if(Rr(e))return G?G.call(e):"";var r=e+"";return r=="0"&&1/e==-Or?"-0":r}var wr=Q,Ar=wr;function Nr(e){return e==null?"":Ar(e)}var U=Nr,jr=Fe,Lr=U,kr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Pr="\\u0300-\\u036f",Mr="\\ufe20-\\ufe2f",Ur="\\u20d0-\\u20ff",Er=Pr+Mr+Ur,Wr="["+Er+"]",Br=RegExp(Wr,"g");function zr(e){return e=Lr(e),e&&e.replace(kr,jr).replace(Br,"")}var Ir=zr,Zr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Dr(e){return e.match(Zr)||[]}var Fr=Dr,Gr=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Hr(e){return Gr.test(e)}var Vr=Hr,X="\\ud800-\\udfff",Jr="\\u0300-\\u036f",qr="\\ufe20-\\ufe2f",Yr="\\u20d0-\\u20ff",Kr=Jr+qr+Yr,ee="\\u2700-\\u27bf",re="a-z\\xdf-\\xf6\\xf8-\\xff",Qr="\\xac\\xb1\\xd7\\xf7",Xr="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ea="\\u2000-\\u206f",ra=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ae="A-Z\\xc0-\\xd6\\xd8-\\xde",aa="\\ufe0e\\ufe0f",te=Qr+Xr+ea+ra,se="['\u2019]",H="["+te+"]",ta="["+Kr+"]",ne="\\d+",sa="["+ee+"]",oe="["+re+"]",ue="[^"+X+te+ne+ee+re+ae+"]",na="\\ud83c[\\udffb-\\udfff]",oa="(?:"+ta+"|"+na+")",ua="[^"+X+"]",ce="(?:\\ud83c[\\udde6-\\uddff]){2}",ie="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+ae+"]",ca="\\u200d",V="(?:"+oe+"|"+ue+")",ia="(?:"+d+"|"+ue+")",J="(?:"+se+"(?:d|ll|m|re|s|t|ve))?",q="(?:"+se+"(?:D|LL|M|RE|S|T|VE))?",le=oa+"?",fe="["+aa+"]?",la="(?:"+ca+"(?:"+[ua,ce,ie].join("|")+")"+fe+le+")*",fa="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",da="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ba=fe+le+la,ga="(?:"+[sa,ce,ie].join("|")+")"+ba,va=RegExp([d+"?"+oe+"+"+J+"(?="+[H,d,"$"].join("|")+")",ia+"+"+q+"(?="+[H,d+V,"$"].join("|")+")",d+"?"+V+"+"+J,d+"+"+q,da,fa,ne,ga].join("|"),"g");function xa(e){return e.match(va)||[]}var ma=xa,pa=Fr,$a=Vr,ha=U,Sa=ma;function ya(e,r,a){return e=ha(e),r=a?void 0:r,r===void 0?$a(e)?Sa(e):pa(e):e.match(r)||[]}var _a=ya,Ca=We,Ta=Ir,Ra=_a,Oa="['\u2019]",wa=RegExp(Oa,"g");function Aa(e){return function(r){return Ca(Ra(Ta(r).replace(wa,"")),e,"")}}var Na=Aa;function ja(e,r,a){var t=-1,s=e.length;r<0&&(r=-r>s?0:s+r),a=a>s?s:a,a<0&&(a+=s),s=r>a?0:a-r>>>0,r>>>=0;for(var o=Array(s);++t<s;)o[t]=e[t+r];return o}var La=ja,ka=La;function Pa(e,r,a){var t=e.length;return a=a===void 0?t:a,!r&&a>=t?e:ka(e,r,a)}var Ma=Pa,Ua="\\ud800-\\udfff",Ea="\\u0300-\\u036f",Wa="\\ufe20-\\ufe2f",Ba="\\u20d0-\\u20ff",za=Ea+Wa+Ba,Ia="\\ufe0e\\ufe0f",Za="\\u200d",Da=RegExp("["+Za+Ua+za+Ia+"]");function Fa(e){return Da.test(e)}var de=Fa;function Ga(e){return e.split("")}var Ha=Ga,be="\\ud800-\\udfff",Va="\\u0300-\\u036f",Ja="\\ufe20-\\ufe2f",qa="\\u20d0-\\u20ff",Ya=Va+Ja+qa,Ka="\\ufe0e\\ufe0f",Qa="["+be+"]",O="["+Ya+"]",w="\\ud83c[\\udffb-\\udfff]",Xa="(?:"+O+"|"+w+")",ge="[^"+be+"]",ve="(?:\\ud83c[\\udde6-\\uddff]){2}",xe="[\\ud800-\\udbff][\\udc00-\\udfff]",et="\\u200d",me=Xa+"?",pe="["+Ka+"]?",rt="(?:"+et+"(?:"+[ge,ve,xe].join("|")+")"+pe+me+")*",at=pe+me+rt,tt="(?:"+[ge+O+"?",O,ve,xe,Qa].join("|")+")",st=RegExp(w+"(?="+w+")|"+tt+at,"g");function nt(e){return e.match(st)||[]}var ot=nt,ut=Ha,ct=de,it=ot;function lt(e){return ct(e)?it(e):ut(e)}var ft=lt,dt=Ma,bt=de,gt=ft,vt=U;function xt(e){return function(r){r=vt(r);var a=bt(r)?gt(r):void 0,t=a?a[0]:r.charAt(0),s=a?dt(a,1).join(""):r.slice(1);return t[e]()+s}}var mt=xt,pt=mt,$t=pt("toUpperCase"),ht=$t,St=Na,yt=ht,_t=St(function(e,r,a){return e+(a?" ":"")+yt(r)}),Ct=_t;const Tt="_MenuButton_1vavx_1",Rt="_SidePanel_1vavx_6",Ot="_OverflowWrapper_1vavx_26",wt="_TableOfContents_1vavx_33",At="_TocLink_1vavx_41",Nt="_active_1vavx_41",jt="_TocSubLink_1vavx_71";var g={MenuButton:Tt,SidePanel:Rt,OverflowWrapper:Ot,TableOfContents:wt,TocLink:At,active:Nt,TocSubLink:jt};const $e=L("<div></div>"),Lt=L("<nav></nav>"),kt=L('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30"><title>Menu</title><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path></svg>'),Pt="/solid-bootstrap/",Mt=["overview","form-controls","form-text","select","checks-radios","range","input-group","floating-labels","layout","validation"],Ut=["grid","stack"],Et=["accordion","alerts","badge","breadcrumb","buttons","button-group","cards","carousel","close-button","dropdowns","figures","images","list-group","modal","navs","navbar","offcanvas","pagination","placeholder","popovers","progress","spinners","table","tabs","toasts","tooltips"],Wt=["overview","button","dropdown","modal","navs and tabs","overlays"],Bt={"why-react-bootstrap":"Why React-Bootstrap",rtl:"RTL","restart-ui":"@restart/ui","server-side-rendering":"Server-side Rendering"},zt=e=>n(Ne,_(e,{get class(){return c(e.class,e.className,g.MenuButton,"p-0 d-md-none ms-auto")}})),It=e=>(()=>{const r=$e.cloneNode(!0);return k(r,e,!1,!1),P(()=>r.className=c(e.class,e.className,g.SidePanel,"d-flex flex-column")),r})(),Zt=e=>(()=>{const r=$e.cloneNode(!0);return k(r,e,!1,!1),P(()=>r.className=c(e.class,e.className,g.OverflowWrapper)),r})(),Dt=e=>(()=>{const r=Lt.cloneNode(!0);return k(r,e,!1,!1),P(()=>r.className=c(e.class,e.className,g.TableOfContents,"pt-2 pb-4")),r})(),he=e=>n(R.Link,_(e,{get class(){return c(e.class,e.className,g.TocLink)}})),Ft=e=>n(he,_(e,{get class(){return c(e.class,e.className,g.TocSubLink)}})),S=e=>{let r=Re(()=>e.location.pathname.startsWith(Pt+e.path.slice(1)));return[n(he,{get active(){return r()},as:E,get href(){return e.items?`${e.path}/${e.items[0]}/`:`${e.path}/`},get class(){return c("js-search-toc-item",r()&&"js-search-active")},get children(){return e.heading}}),W((()=>{const a=W(()=>!!(e.items&&r()),!0);return()=>a()&&n(R,{get activeKey(){return e.location.pathname},onSelect:()=>{},class:"d-block",get children(){return e.items.map(t=>n(R.Item,{get children(){return n(Ft,{as:E,get href(){return`${e.path}/${t}/`},get children(){return Bt[t]||Ct(t.toLowerCase())}})}}))}})})())]},Gt=e=>{const[r,a]=ye(!0),t=_e(),s=()=>{a(o=>!o)};return Ce(()=>{t?.pathname&&a(!0)}),n(It,_(e,{get children(){return[n(zt,{onClick:s,variant:"light",get children(){return kt.cloneNode(!0)}}),n(Te,{get in(){return!r()},get children(){return n(Zt,{get children(){return n(Dt,{role:"complementary",get children(){return[n(S,{heading:"Layout",location:t,items:Ut,path:"/layout"}),n(S,{heading:"Forms",location:t,items:Mt,path:"/forms"}),n(S,{heading:"Components",location:t,items:Et,path:"/components"}),n(S,{heading:"Core (headless)",location:t,items:Wt,path:"/core"})]}})}})}})]}}))},Ht="_nav_1gsvq_1",Vt="_main_1gsvq_8";var Jt={nav:Ht,main:Vt};const Yt=e=>n(Oe,{fluid:!0,get children(){return n(Ue,{class:"flex-xl-nowrap",get children(){return[n(B,{as:Gt,xs:12,md:3,xl:2}),n(B,{xs:12,md:9,xl:8,as:"main",id:"rb-docs-content",get class(){return Jt.main},get children(){return e.children}})]}})}});export{Ne as B,B as C,Yt as L,Ue as R,Le as u};
