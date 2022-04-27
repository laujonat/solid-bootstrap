import{aP as w,g as j,v as c,c as s,aa as o,n as g,aF as u,t as i,o as y,j as k}from"./index.5ae66943.js";import{M as p}from"./index.e525610a.js";import{E as t}from"./Example.7f10c31b.js";import"./Card.c15ac305.js";const _=i('<div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h4 id="modal-1-label">Alert!</h4></div><div class="modal-body"><p>Some important content!</p></div><div class="modal-footer"></div></div></div>'),$=i("<div></div>"),v=i('<div class="modal-backdrop show"></div>'),M=i('<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 id="modal-label">Text in a modal</h4></div><div class="modal-body"><p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p></div></div></div>'),x=i('<div><button class="btn btn-primary">Open modal</button><div class="pt-3">Click to get the full Modal experience!</div></div>'),C=i("<p></p>"),S=()=>{const[l,n]=j(!1);return(()=>{const r=$.cloneNode(!0);return c(r,s(o,{class:"btn btn-primary",onClick:()=>n(!0),children:"Open Modal"}),null),c(r,s(u,{get show(){return l()},"aria-labelledby":"modal-1-label",onHide:()=>n(!1),renderBackdrop:a=>(()=>{const e=v.cloneNode(!0);return g(e,a,!1,!1),e})(),class:"modal d-block pe-none",get children(){const a=_.cloneNode(!0),e=a.firstChild,h=e.firstChild,d=h.nextSibling,b=d.nextSibling;return c(b,s(o,{onClick:()=>n(!1),class:"btn btn-secondary float-right",children:"Close"})),a}}),null),r})()};let N=(l,n)=>l+Math.floor(Math.random()*(n-l));const E=()=>(()=>{const l=M.cloneNode(!0),n=l.firstChild,r=n.firstChild,a=r.nextSibling;return a.firstChild,c(a,s(f,{}),null),y(e=>{const h=`${N(5,20)}%`,d=`${N(20,60)}%`;return h!==e._v$&&l.style.setProperty("margin-top",e._v$=h),d!==e._v$2&&l.style.setProperty("margin-left",e._v$2=d),e},{_v$:void 0,_v$2:void 0}),l})(),f=()=>{const[l,n]=j(!1);return[(()=>{const r=x.cloneNode(!0),a=r.firstChild;return a.$$click=()=>n(!0),r})(),C.cloneNode(!0),s(u,{class:"modal d-block pe-none",get show(){return l()},onHide:()=>n(!1),renderBackdrop:r=>(()=>{const a=v.cloneNode(!0);return a.style.setProperty("z-index","1055"),g(a,r,!1,!1),a})(),"aria-labelledby":"modal-label",get children(){return s(E,{})}})]};w(["click"]);const P=i('<p class="lead"></p>'),B=i('<div class="row gy-5 pt-3"><div></div></div>');function I(l={}){const{wrapper:n}=Object.assign({},p(),l.components);return n?s(n,k(l,{get children(){return s(r,{})}})):r();function r(){const a=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",span:"span"},p(),l.components);return t||m("Example",!1),t.Code||m("Example.Code",!0),t.Intro||m("Example.Intro",!0),t.Preview||m("Example.Preview",!0),[s(a.h1,{children:"Modals (core)"}),`
`,(()=>{const e=P.cloneNode(!0);return c(e,s(a.p,{get children(){return["Love them or hate them, ",s(a.code,{children:"<Modal />"}),` provides a solid foundation for creating dialogs,
lightboxes, or whatever else. The `,s(a.code,{children:"Modal"})," component renders its ",s(a.code,{children:"children"}),` node in front
of a backdrop component.`]}})),e})(),`
`,(()=>{const e=B.cloneNode(!0),h=e.firstChild;return c(h,s(a.p,{get children(){return["The ",s(a.code,{children:"Modal"})," offers a few helpful features over using just a ",s(a.code,{children:"<Portal/>"}),` component and
some styles:`]}}),null),c(h,s(a.ul,{get children(){return[`
`,s(a.li,{children:"Manages dialog stacking when one-at-a-time just isn't enough."}),`
`,s(a.li,{children:"Creates a backdrop for disabling interaction below the modal."}),`
`,s(a.li,{children:`Properly manages focus; moving to the modal content, and keeping it there until
the modal is closed.`}),`
`,s(a.li,{children:"Disables scrolling of the page content while open."}),`
`,s(a.li,{children:"Ensuring modal content is accessible with the appropriate ARIA."}),`
`,s(a.li,{get children(){return["Allows easily-pluggable animations via a ",s(a.code,{children:"<Transition/>"})," component."]}}),`
`]}}),null),c(e,s(t,{title:"Example",get children(){return[s(t.Intro,{}),s(t.Preview,{get children(){return s(S,{})}}),s(t.Code,{get children(){return s(a.pre,{get children(){return s(a.code,{className:"hljs language-jsx",get children(){return[s(a.span,{className:"hljs-keyword",children:"import"})," {createSignal} ",s(a.span,{className:"hljs-keyword",children:"from"})," ",s(a.span,{className:"hljs-string",children:'"solid-js"'}),`;
`,s(a.span,{className:"hljs-keyword",children:"import"})," {",s(a.span,{className:"hljs-title class_",children:"Button"}),", ",s(a.span,{className:"hljs-title class_",children:"Modal"}),"} ",s(a.span,{className:"hljs-keyword",children:"from"})," ",s(a.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;


`,s(a.span,{className:"hljs-keyword",children:"const"})," ",s(a.span,{className:"hljs-title function_",children:"ModalExample1"})," = (",s(a.span,{className:"hljs-params"}),`) => {
  `,s(a.span,{className:"hljs-keyword",children:"const"})," [show, setShow] = ",s(a.span,{className:"hljs-title function_",children:"createSignal"}),"(",s(a.span,{className:"hljs-literal",children:"false"}),`);
  `,s(a.span,{className:"hljs-keyword",children:"return"}),` (
    `,s(a.span,{className:"xml",get children(){return[s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
      {/* Using Bootstrap CSS here - but you can use whatever you like */}
      `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"Button"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"btn btn-primary"'})," ",s(a.span,{className:"hljs-attr",children:"onClick"}),"=",s(a.span,{className:"hljs-string",children:"{()"})," =>"]}}),` setShow(true)}>
        Open Modal
      `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"Button"}),">"]}}),`

      `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"Modal"}),`
        `,s(a.span,{className:"hljs-attr",children:"show"}),"=",s(a.span,{className:"hljs-string",children:"{show()}"}),`
        `,s(a.span,{className:"hljs-attr",children:"aria-labelledby"}),"=",s(a.span,{className:"hljs-string",children:'"modal-1-label"'}),`
        `,s(a.span,{className:"hljs-attr",children:"onHide"}),"=",s(a.span,{className:"hljs-string",children:"{()"})," =>"]}}),` setShow(false)}
        renderBackdrop={(props: any) => `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-backdrop show"'})," {",s(a.span,{className:"hljs-attr",children:"...props"}),"} />"]}}),`}
        class="modal d-block pe-none"
      >
        `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-dialog modal-dialog-centered"'}),">"]}}),`
          `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-content"'}),">"]}}),`
            `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-header"'}),">"]}}),`
              `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"h4"})," ",s(a.span,{className:"hljs-attr",children:"id"}),"=",s(a.span,{className:"hljs-string",children:'"modal-1-label"'}),">"]}}),"Alert!",s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"h4"}),">"]}}),`
            `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
            `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-body"'}),">"]}}),`
              `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"p"}),">"]}}),"Some important content!",s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"p"}),">"]}}),`
            `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
            `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-footer"'}),">"]}}),`
              `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"Button"})," ",s(a.span,{className:"hljs-attr",children:"onClick"}),"=",s(a.span,{className:"hljs-string",children:"{()"})," =>"]}}),` setShow(false)} class="btn btn-secondary float-right">
                Close
              `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"Button"}),">"]}}),`
            `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
          `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
        `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
      `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"Modal"}),">"]}}),`
    `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}})]}}),`
  );
}
`]}})}})}})]}}),null),c(e,s(t,{title:"Modal stacking",get children(){return[s(t.Intro,{get children(){return s(a.p,{children:"Modal supports stacking (if you really need it) out of the box"})}}),s(t.Preview,{get children(){return s(f,{})}}),s(t.Code,{get children(){return s(a.pre,{get children(){return s(a.code,{className:"hljs language-jsx",get children(){return[s(a.span,{className:"hljs-keyword",children:"import"})," {createSignal} ",s(a.span,{className:"hljs-keyword",children:"from"})," ",s(a.span,{className:"hljs-string",children:'"solid-js"'}),`;
`,s(a.span,{className:"hljs-keyword",children:"import"})," {",s(a.span,{className:"hljs-title class_",children:"Button"}),", ",s(a.span,{className:"hljs-title class_",children:"Modal"}),"} ",s(a.span,{className:"hljs-keyword",children:"from"})," ",s(a.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;


`,s(a.span,{className:"hljs-keyword",children:"let"})," ",s(a.span,{className:"hljs-title function_",children:"rand"})," = (",s(a.span,{className:"hljs-params",children:"min: number, max: number"}),") => min + ",s(a.span,{className:"hljs-title class_",children:"Math"}),".",s(a.span,{className:"hljs-title function_",children:"floor"}),"(",s(a.span,{className:"hljs-title class_",children:"Math"}),".",s(a.span,{className:"hljs-title function_",children:"random"}),`() * (max - min));

`,s(a.span,{className:"hljs-keyword",children:"const"})," ",s(a.span,{className:"hljs-title function_",children:"RandomlyPositionedModal"})," = (",s(a.span,{className:"hljs-params"}),`) => {
  `,s(a.span,{className:"hljs-keyword",children:"return"}),` (
    `,s(a.span,{className:"xml",get children(){return[s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"}),`
      `,s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-dialog"'}),`
      `,s(a.span,{className:"hljs-attr",children:"style"}),"=",s(a.span,{className:"hljs-string",children:"{{"}),`
        "`,s(a.span,{className:"hljs-attr",children:"margin-top"}),'"',s(a.span,{className:"hljs-attr",children:":"})," `${",s(a.span,{className:"hljs-attr",children:"rand"}),"(",s(a.span,{className:"hljs-attr",children:"5"}),", ",s(a.span,{className:"hljs-attr",children:"20"}),')}%`,\n        "',s(a.span,{className:"hljs-attr",children:"margin-left"}),'"',s(a.span,{className:"hljs-attr",children:":"})," `${",s(a.span,{className:"hljs-attr",children:"rand"}),"(",s(a.span,{className:"hljs-attr",children:"20"}),", ",s(a.span,{className:"hljs-attr",children:"60"}),`)}%\`,
      }}
    >`]}}),`
      `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-content"'}),">"]}}),`
        `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-header"'}),">"]}}),`
          `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"h4"})," ",s(a.span,{className:"hljs-attr",children:"id"}),"=",s(a.span,{className:"hljs-string",children:'"modal-label"'}),">"]}}),"Text in a modal",s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"h4"}),">"]}}),`
        `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
        `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-body"'}),">"]}}),`
          `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"p"}),">"]}}),"Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"p"}),">"]}}),`
          `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"ModalExample2"})," />"]}}),`
        `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
      `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
    `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}})]}}),`
  );
};

`,s(a.span,{className:"hljs-keyword",children:"export"})," ",s(a.span,{className:"hljs-keyword",children:"const"})," ",s(a.span,{className:"hljs-title function_",children:"ModalExample2"})," = (",s(a.span,{className:"hljs-params"}),`) => {
  `,s(a.span,{className:"hljs-keyword",children:"const"})," [show, setShow] = ",s(a.span,{className:"hljs-title function_",children:"createSignal"}),"(",s(a.span,{className:"hljs-literal",children:"false"}),`);
  `,s(a.span,{className:"hljs-keyword",children:"return"}),` (
    `,s(a.span,{className:"xml",get children(){return[s(a.span,{className:"hljs-tag",children:"<>"}),`
      `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
        `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"button"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"btn btn-primary"'})," ",s(a.span,{className:"hljs-attr",children:"onClick"}),"=",s(a.span,{className:"hljs-string",children:"{()"})," =>"]}}),` setShow(true)}>
          Open modal
        `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"button"}),">"]}}),`
        `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"pt-3"'}),">"]}}),"Click to get the full Modal experience!",s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
      `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"div"}),">"]}}),`
      `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"p"}),">"]}}),s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"p"}),">"]}}),`

      `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"Modal"}),`
        `,s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal d-block pe-none"'}),`
        `,s(a.span,{className:"hljs-attr",children:"show"}),"=",s(a.span,{className:"hljs-string",children:"{show()}"}),`
        `,s(a.span,{className:"hljs-attr",children:"onHide"}),"=",s(a.span,{className:"hljs-string",children:"{()"})," =>"]}}),` setShow(false)}
        renderBackdrop={(props: any) => (
          `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"div"})," ",s(a.span,{className:"hljs-attr",children:"class"}),"=",s(a.span,{className:"hljs-string",children:'"modal-backdrop show"'})," ",s(a.span,{className:"hljs-attr",children:"style"}),"=",s(a.span,{className:"hljs-string",children:"{{"}),'"',s(a.span,{className:"hljs-attr",children:"z-index"}),'"',s(a.span,{className:"hljs-attr",children:":"})," ",s(a.span,{className:"hljs-attr",children:"1055"}),"}} {",s(a.span,{className:"hljs-attr",children:"...props"}),"} />"]}}),`
        )}
        aria-labelledby="modal-label"
      >
        `,s(a.span,{className:"hljs-tag",get children(){return["<",s(a.span,{className:"hljs-name",children:"RandomlyPositionedModal"})," />"]}}),`
      `,s(a.span,{className:"hljs-tag",get children(){return["</",s(a.span,{className:"hljs-name",children:"Modal"}),">"]}}),`
    `,s(a.span,{className:"hljs-tag",children:"</>"})]}}),`
  );
};
`]}})}})}})]}}),null),e})()]}}function m(l,n){throw new Error("Expected "+(n?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{I as default};
