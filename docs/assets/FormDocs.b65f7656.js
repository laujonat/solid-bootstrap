import{t as i,d as W,v as t,a as e}from"./vendor.e0c45427.js";import{A as s}from"./Alert.4bc015d7.js";import{B as u,R as d,C as n}from"./Layout.28284d34.js";import{C as l}from"./Card.2791c662.js";import{F as r,a as p}from"./Form.970c1f9a.js";import{I as h}from"./InputGroup.b4cc8f91.js";import"./index.58251ec3.js";import"./FormControl.9af013c2.js";import"./warning.94687c11.js";import"./InputGroupContext.a36f42f7.js";const C=i("<br>"),B=i("<option>Open this select menu</option>"),v=i('<option value="1">One</option>'),N=i('<option value="2">Two</option>'),w=i('<option value="3">Three</option>'),Z=i("<option>Large select</option>"),J=i("<option>Default select</option>"),Y=i("<option>Small select</option>"),K=i('<label for="floatingInputCustom">Email address</label>'),Q=i('<label for="floatingPasswordCustom">Password</label>'),X=i("<option>Choose...</option>"),ee=i("<option>...</option>"),D=i("<fieldset></fieldset>"),re=i('<option value="0">Choose...</option>'),le=i("<p>Help text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies\u2014such as screen readers\u2014will announce this help text when the user focuses or enters the control.</p>"),A=i("<option>Disabled select</option>"),te=i('<fieldset disabled=""></fieldset>'),ne=i('<p>By default, browsers will treat all native form controls (<code>&lt;input></code>, <code>&lt;select></code> and <code>&lt;button></code> elements) inside a <code>&lt;fieldset disabled></code> as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes <code>&lt;a ... class="btn btn-*"></code> elements, these will only be given a style of pointer-events: none. As noted in the section about disabled state for buttons (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn\u2019t fully supported in Internet Explorer 10, and won\u2019t prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.</p>'),oe=i("<p>While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don\u2019t fully support the disabled attribute on a <code>&lt;fieldset></code>. Use custom JavaScript to disable the fieldset in these browsers.</p>"),ie=i("<p>It's often beneficial to handle form validation via a library. In those cases, <code>isValid</code> and <code>isInvalid</code> props can be added to form controls to manually apply validation styles.</p>"),de=i('<div class="row gy-4"><div><h3>Forms</h3><p class="lead">The <code>&lt;FormControl></code> component renders a form control with Bootstrap styling. The <code>&lt;FormGroup></code> component wraps a form control with proper spacing, along with support for a label, help text, and validation state. To ensure accessibility, set controlId on <code>&lt;FormGroup></code>, and use <code>&lt;FormLabel></code> for the label.</p></div><div></div><div><h5>Form controls</h5></div><div><h5>Sizing</h5></div><div><h5>Readonly</h5></div><div><h5>Readonly plain text</h5></div><div><h5>File input</h5></div><div><h5>Color</h5></div><div><h5>Checkboxes and Radios</h5></div><div><h5>Customizing FormCheck rendering</h5></div><div><h5>Range</h5></div><div><h5>Select</h5></div><div><h5>Sizing</h5></div><div><h5>Floating labels</h5></div><div><h5>Layout</h5></div><div><h5>Help text</h5><p>Block-level help text in forms can be created using <code>&lt;Form.Text></code>. Inline help text can be flexibly implemented using any inline HTML element and utility classes like.text-muted.</p><p>Help text below inputs can be styled with <code>&lt;Form.Text></code>. This component includes display: block and adds some top margin for easy spacing from the inputs above.</p></div><div><h5>Disabled forms</h5></div><div><h5>Validation</h5></div><div><h5>Custom form components</h5></div></div>'),z=i('<div class="mb-3"></div>'),ye=()=>{const[j,U]=W(!1),q=g=>{g.currentTarget.checkValidity()===!1&&(g.preventDefault(),g.stopPropagation()),U(!0)};return(()=>{const g=de.cloneNode(!0),T=g.firstChild,E=T.nextSibling,k=E.nextSibling;k.firstChild;const S=k.nextSibling;S.firstChild;const I=S.nextSibling;I.firstChild;const L=I.nextSibling;L.firstChild;const G=L.nextSibling;G.firstChild;const F=G.nextSibling;F.firstChild;const y=F.nextSibling;y.firstChild;const $=y.nextSibling;$.firstChild;const _=$.nextSibling;_.firstChild;const H=_.nextSibling;H.firstChild;const P=H.nextSibling;P.firstChild;const m=P.nextSibling;m.firstChild;const a=m.nextSibling;a.firstChild;const x=a.nextSibling,V=x.firstChild,M=V.nextSibling,O=M.nextSibling,b=x.nextSibling;b.firstChild;const f=b.nextSibling;f.firstChild;const R=f.nextSibling;return R.firstChild,t(E,e(l,{body:!0,get children(){return e(r,{get children(){return[e(r.Group,{className:"mb-3",controlId:"formBasicEmail",get children(){return[e(r.Label,{children:"Email address"}),e(r.Control,{type:"email",placeholder:"Enter email"}),e(r.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}}),e(r.Group,{className:"mb-3",controlId:"formBasicPassword",get children(){return[e(r.Label,{children:"Password"}),e(r.Control,{type:"password",placeholder:"Password"})]}}),e(r.Group,{className:"mb-3",controlId:"formBasicCheckbox",get children(){return e(r.Check,{type:"checkbox",label:"Check me out"})}}),e(u,{variant:"primary",type:"submit",children:"Submit"})]}})}})),t(k,e(l,{body:!0,get children(){return e(r,{get children(){return[e(r.Group,{className:"mb-3",controlId:"exampleForm.ControlInput1",get children(){return[e(r.Label,{children:"Email address"}),e(r.Control,{type:"email",placeholder:"name@example.com"})]}}),e(r.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",get children(){return[e(r.Label,{children:"Example textarea"}),e(r.Control,{as:"textarea",rows:3})]}})]}})}}),null),t(S,e(l,{body:!0,get children(){return[e(r.Control,{size:"lg",type:"text",placeholder:"Large text"}),C.cloneNode(!0),e(r.Control,{type:"text",placeholder:"Normal text"}),C.cloneNode(!0),e(r.Control,{size:"sm",type:"text",placeholder:"Small text"})]}}),null),t(I,e(l,{body:!0,get children(){return e(r.Control,{type:"text",placeholder:"Readonly input here...",readOnly:!0})}}),null),t(L,e(l,{body:!0,get children(){return e(r,{get children(){return[e(r.Group,{as:d,className:"mb-3",controlId:"formPlaintextEmail",get children(){return[e(r.Label,{column:!0,sm:"2",children:"Email"}),e(n,{sm:"10",get children(){return e(r.Control,{plaintext:!0,readOnly:!0,value:"email@example.com"})}})]}}),e(r.Group,{as:d,className:"mb-3",controlId:"formPlaintextPassword",get children(){return[e(r.Label,{column:!0,sm:"2",children:"Password"}),e(n,{sm:"10",get children(){return e(r.Control,{type:"password",placeholder:"Password"})}})]}})]}})}}),null),t(G,e(l,{body:!0,get children(){return[e(r.Group,{controlId:"formFile",className:"mb-3",get children(){return[e(r.Label,{children:"Default file input example"}),e(r.Control,{type:"file"})]}}),e(r.Group,{controlId:"formFileMultiple",className:"mb-3",get children(){return[e(r.Label,{children:"Multiple files input example"}),e(r.Control,{type:"file",multiple:!0})]}}),e(r.Group,{controlId:"formFileDisabled",className:"mb-3",get children(){return[e(r.Label,{children:"Disabled file input example"}),e(r.Control,{type:"file",disabled:!0})]}}),e(r.Group,{controlId:"formFileSm",className:"mb-3",get children(){return[e(r.Label,{children:"Small file input example"}),e(r.Control,{type:"file",size:"sm"})]}}),e(r.Group,{controlId:"formFileLg",className:"mb-3",get children(){return[e(r.Label,{children:"Large file input example"}),e(r.Control,{type:"file",size:"lg"})]}})]}}),null),t(F,e(l,{body:!0,get children(){return[" ",e(r.Label,{htmlFor:"exampleColorInput",children:"Color picker"}),e(r.Control,{type:"color",id:"exampleColorInput",value:"#563d7c",title:"Choose your color"})]}}),null),t(y,e(l,{get children(){return[e(l.Header,{children:"Stacked"}),e(l.Body,{get children(){return e(r,{get children(){return["checkbox","radio"].map(o=>(()=>{const c=z.cloneNode(!0);return t(c,e(r.Check,{type:o,id:`default-${o}`,label:`default ${o}`}),null),t(c,e(r.Check,{disabled:!0,type:o,label:`disabled ${o}`,id:`disabled-default-${o}`}),null),c})())}})}})]}}),null),t(y,e(l,{get children(){return[e(l.Header,{children:"Inline"}),e(l.Body,{get children(){return e(r,{get children(){return["checkbox","radio"].map(o=>(()=>{const c=z.cloneNode(!0);return t(c,e(r.Check,{inline:!0,label:"1",name:"group1",type:o,id:`inline-${o}-1`}),null),t(c,e(r.Check,{inline:!0,label:"2",name:"group1",type:o,id:`inline-${o}-2`}),null),t(c,e(r.Check,{inline:!0,disabled:!0,label:"3 (disabled)",type:o,id:`inline-${o}-3`}),null),c})())}})}})]}}),null),t(y,e(l,{get children(){return[e(l.Header,{children:"Without labels"}),e(l.Body,{get children(){return[e(r.Check,{"aria-label":"option 1"}),e(r.Check,{type:"radio","aria-label":"radio 1"})]}})]}}),null),t($,e(l,{body:!0,get children(){return e(r,{get children(){return["checkbox","radio"].map(o=>(()=>{const c=z.cloneNode(!0);return t(c,e(r.Check,{type:o,id:`check-api-${o}`,get children(){return[e(r.Check.Input,{type:o,isValid:!0}),e(r.Check.Label,{children:`Custom api ${o}`}),e(r.Control.Feedback,{type:"valid",children:"You did it!"})]}})),c})())}})}}),null),t(_,e(l,{body:!0,get children(){return[e(r.Label,{children:"Range"}),e(r.Range,{})]}}),null),t(H,e(l,{body:!0,get children(){return e(r.Select,{"aria-label":"Default select example",get children(){return[B.cloneNode(!0),v.cloneNode(!0),N.cloneNode(!0),w.cloneNode(!0)]}})}}),null),t(P,e(l,{body:!0,get children(){return[e(r.Select,{size:"lg",get children(){return Z.cloneNode(!0)}}),C.cloneNode(!0),e(r.Select,{get children(){return J.cloneNode(!0)}}),C.cloneNode(!0),e(r.Select,{size:"sm",get children(){return Y.cloneNode(!0)}})," "]}}),null),t(m,e(l,{get children(){return[e(l.Header,{children:"Inputs"}),e(l.Body,{get children(){return[e(p,{controlId:"floatingInput",label:"Email address",className:"mb-3",get children(){return e(r.Control,{type:"email",placeholder:"name@example.com"})}}),e(p,{controlId:"floatingPassword",label:"Password",get children(){return e(r.Control,{type:"password",placeholder:"Password"})}})]}})]}}),null),t(m,e(l,{get children(){return[e(l.Header,{children:"Textareas"}),e(l.Body,{get children(){return[e(p,{controlId:"floatingTextarea",label:"Comments",className:"mb-3",get children(){return e(r.Control,{as:"textarea",placeholder:"Leave a comment here"})}}),e(p,{controlId:"floatingTextarea2",label:"Comments",get children(){return e(r.Control,{as:"textarea",placeholder:"Leave a comment here",style:{height:"100px"}})}})," "]}})]}}),null),t(m,e(l,{get children(){return[e(l.Header,{children:"Selects"}),e(l.Body,{get children(){return e(p,{controlId:"floatingSelect",label:"Works with selects",get children(){return e(r.Select,{"aria-label":"Floating label select example",get children(){return[B.cloneNode(!0),v.cloneNode(!0),N.cloneNode(!0),w.cloneNode(!0)]}})}})}})]}}),null),t(m,e(l,{get children(){return[e(l.Header,{children:"Layout"}),e(l.Body,{get children(){return e(d,{className:"g-2",get children(){return[e(n,{md:!0,get children(){return e(p,{controlId:"floatingInputGrid",label:"Email address",get children(){return e(r.Control,{type:"email",placeholder:"name@example.com"})}})}}),e(n,{md:!0,get children(){return e(p,{controlId:"floatingSelectGrid",label:"Works with selects",get children(){return e(r.Select,{"aria-label":"Floating label select example",get children(){return[B.cloneNode(!0),v.cloneNode(!0),N.cloneNode(!0),w.cloneNode(!0)]}})}})}})]}})}})]}}),null),t(m,e(l,{get children(){return[e(l.Header,{children:"Customizing rendering"}),e(l.Body,{get children(){return[e(r.Floating,{className:"mb-3",get children(){return[e(r.Control,{id:"floatingInputCustom",type:"email",placeholder:"name@example.com"}),K.cloneNode(!0)]}}),e(r.Floating,{get children(){return[e(r.Control,{id:"floatingPasswordCustom",type:"password",placeholder:"Password"}),Q.cloneNode(!0)]}})]}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"Form groups"}),e(l.Body,{get children(){return e(r,{get children(){return[e(r.Group,{className:"mb-3",controlId:"formGroupEmail",get children(){return[e(r.Label,{children:"Email address"}),e(r.Control,{type:"email",placeholder:"Enter email"})]}}),e(r.Group,{className:"mb-3",controlId:"formGroupPassword",get children(){return[e(r.Label,{children:"Password"}),e(r.Control,{type:"password",placeholder:"Password"})]}})]}})}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"Form grid"}),e(l.Body,{get children(){return e(r,{get children(){return e(d,{get children(){return[e(n,{get children(){return e(r.Control,{placeholder:"First name"})}}),e(n,{get children(){return e(r.Control,{placeholder:"Last name"})}})]}})}})}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"More complex layout"}),e(l.Body,{get children(){return e(r,{get children(){return[e(d,{className:"mb-3",get children(){return[e(r.Group,{as:n,controlId:"formGridEmail",get children(){return[e(r.Label,{children:"Email"}),e(r.Control,{type:"email",placeholder:"Enter email"})]}}),e(r.Group,{as:n,controlId:"formGridPassword",get children(){return[e(r.Label,{children:"Password"}),e(r.Control,{type:"password",placeholder:"Password"})]}})]}}),e(r.Group,{className:"mb-3",controlId:"formGridAddress1",get children(){return[e(r.Label,{children:"Address"}),e(r.Control,{placeholder:"1234 Main St"})]}}),e(r.Group,{className:"mb-3",controlId:"formGridAddress2",get children(){return[e(r.Label,{children:"Address 2"}),e(r.Control,{placeholder:"Apartment, studio, or floor"})]}}),e(d,{className:"mb-3",get children(){return[e(r.Group,{as:n,controlId:"formGridCity",get children(){return[e(r.Label,{children:"City"}),e(r.Control,{})]}}),e(r.Group,{as:n,controlId:"formGridState",get children(){return[e(r.Label,{children:"State"}),e(r.Select,{value:"Choose...",get children(){return[X.cloneNode(!0),ee.cloneNode(!0)]}})]}}),e(r.Group,{as:n,controlId:"formGridZip",get children(){return[e(r.Label,{children:"Zip"}),e(r.Control,{})]}})]}}),e(r.Group,{className:"mb-3",id:"formGridCheckbox",get children(){return e(r.Check,{type:"checkbox",label:"Check me out"})}}),e(u,{variant:"primary",type:"submit",children:"Submit"})]}})}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"Horizontal form"}),e(l.Body,{get children(){return e(r,{get children(){return[e(r.Group,{as:d,className:"mb-3",controlId:"formHorizontalEmail",get children(){return[e(r.Label,{column:!0,sm:2,children:"Email"}),e(n,{sm:10,get children(){return e(r.Control,{type:"email",placeholder:"Email"})}})]}}),e(r.Group,{as:d,className:"mb-3",controlId:"formHorizontalPassword",get children(){return[e(r.Label,{column:!0,sm:2,children:"Password"}),e(n,{sm:10,get children(){return e(r.Control,{type:"password",placeholder:"Password"})}})]}}),(()=>{const o=D.cloneNode(!0);return t(o,e(r.Group,{as:d,className:"mb-3",get children(){return[e(r.Label,{as:"legend",column:!0,sm:2,children:"Radios"}),e(n,{sm:10,get children(){return[e(r.Check,{type:"radio",label:"first radio",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),e(r.Check,{type:"radio",label:"second radio",name:"formHorizontalRadios",id:"formHorizontalRadios2"}),e(r.Check,{type:"radio",label:"third radio",name:"formHorizontalRadios",id:"formHorizontalRadios3"})]}})]}})),o})(),e(r.Group,{as:d,className:"mb-3",controlId:"formHorizontalCheck",get children(){return e(n,{sm:{span:10,offset:2},get children(){return e(r.Check,{label:"Remember me"})}})}}),e(r.Group,{as:d,className:"mb-3",get children(){return e(n,{sm:{span:10,offset:2},get children(){return e(u,{type:"submit",children:"Sign in"})}})}})]}})}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"Horizontal form label sizing"}),e(l.Body,{get children(){return[e(d,{get children(){return[e(r.Label,{column:"lg",lg:2,children:"Large Text"}),e(n,{get children(){return e(r.Control,{size:"lg",type:"text",placeholder:"Large text"})}})]}}),C.cloneNode(!0),e(d,{get children(){return[e(r.Label,{column:!0,lg:2,children:"Normal Text"}),e(n,{get children(){return e(r.Control,{type:"text",placeholder:"Normal text"})}})]}}),C.cloneNode(!0),e(d,{get children(){return[e(r.Label,{column:"sm",lg:2,children:"Small Text"}),e(n,{get children(){return e(r.Control,{size:"sm",type:"text",placeholder:"Small text"})}})]}})]}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"Column sizing"}),e(l.Body,{get children(){return e(r,{get children(){return e(d,{get children(){return[e(n,{xs:7,get children(){return e(r.Control,{placeholder:"City"})}}),e(n,{get children(){return e(r.Control,{placeholder:"State"})}}),e(n,{get children(){return e(r.Control,{placeholder:"Zip"})}})]}})}})}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"Auto-sizing"}),e(l.Body,{get children(){return e(r,{get children(){return e(d,{className:"align-items-center",get children(){return[e(n,{xs:"auto",get children(){return[e(r.Label,{htmlFor:"inlineFormInput",visuallyHidden:!0,children:"Name"}),e(r.Control,{className:"mb-2",id:"inlineFormInput",placeholder:"Jane Doe"})]}}),e(n,{xs:"auto",get children(){return[e(r.Label,{htmlFor:"inlineFormInputGroup",visuallyHidden:!0,children:"Username"}),e(h,{className:"mb-2",get children(){return[e(h.Text,{children:"@"}),e(r.Control,{id:"inlineFormInputGroup",placeholder:"Username"})]}})]}}),e(n,{xs:"auto",get children(){return e(r.Check,{type:"checkbox",id:"autoSizingCheck",className:"mb-2",label:"Remember me"})}}),e(n,{xs:"auto",get children(){return e(u,{type:"submit",className:"mb-2",children:"Submit"})}})]}})}})}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"Remixed with size-specific column classes"}),e(l.Body,{get children(){return e(r,{get children(){return e(d,{className:"align-items-center",get children(){return[e(n,{sm:3,className:"my-1",get children(){return[e(r.Label,{htmlFor:"inlineFormInputName",visuallyHidden:!0,children:"Name"}),e(r.Control,{id:"inlineFormInputName",placeholder:"Jane Doe"})]}}),e(n,{sm:3,className:"my-1",get children(){return[e(r.Label,{htmlFor:"inlineFormInputGroupUsername",visuallyHidden:!0,children:"Username"}),e(h,{get children(){return[e(h.Text,{children:"@"}),e(r.Control,{id:"inlineFormInputGroupUsername",placeholder:"Username"})]}})]}}),e(n,{xs:"auto",className:"my-1",get children(){return e(r.Check,{type:"checkbox",id:"autoSizingCheck2",label:"Remember me"})}}),e(n,{xs:"auto",className:"my-1",get children(){return e(u,{type:"submit",children:"Submit"})}})]}})}})}})]}}),null),t(a,e(l,{get children(){return[e(l.Header,{children:"And custom form controls are supported"}),e(l.Body,{get children(){return e(r,{get children(){return e(d,{className:"align-items-center",get children(){return[e(n,{xs:"auto",className:"my-1",get children(){return[e(r.Label,{className:"me-sm-2",htmlFor:"inlineFormCustomSelect",visuallyHidden:!0,children:"Preference"}),e(r.Select,{className:"me-sm-2",id:"inlineFormCustomSelect",get children(){return[re.cloneNode(!0),v.cloneNode(!0),N.cloneNode(!0),w.cloneNode(!0)]}})]}}),e(n,{xs:"auto",className:"my-1",get children(){return e(r.Check,{type:"checkbox",id:"customControlAutosizing",label:"Remember my preference"})}}),e(n,{xs:"auto",className:"my-1",get children(){return e(u,{type:"submit",children:"Submit"})}})]}})}})}})]}}),null),t(x,e(s,{variant:"warning",get children(){return[e(s.Heading,{children:"Associating help text with form controls"}),le.cloneNode(!0)]}}),O),t(x,e(l,{get children(){return e(l.Body,{get children(){return[e(r.Label,{htmlFor:"inputPassword5",children:"Password"}),e(r.Control,{type:"password",id:"inputPassword5","aria-describedby":"passwordHelpBlock"}),e(r.Text,{id:"passwordHelpBlock",muted:!0,children:"Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji."})]}})}}),null),t(b,e(l,{get children(){return e(l.Body,{get children(){return[e(r.Group,{className:"mb-3",get children(){return[e(r.Label,{children:"Disabled input"}),e(r.Control,{placeholder:"Disabled input",disabled:!0})]}}),e(r.Group,{className:"mb-3",get children(){return[e(r.Label,{children:"Disabled select menu"}),e(r.Select,{disabled:!0,get children(){return A.cloneNode(!0)}})]}}),e(r.Group,{className:"mb-3",get children(){return e(r.Check,{type:"checkbox",label:"Can't check this",disabled:!0})}})]}})}}),null),t(b,e(l,{get children(){return[e(l.Header,{children:"Disabled fieldset"}),e(l.Body,{get children(){return e(r,{get children(){return[(()=>{const o=D.cloneNode(!0);return t(o,e(r.Group,{className:"mb-3",get children(){return[e(r.Label,{htmlFor:"disabledTextInput",children:"Disabled input"}),e(r.Control,{id:"disabledTextInput",placeholder:"Disabled input"})]}}),null),t(o,e(r.Group,{className:"mb-3",get children(){return[e(r.Label,{htmlFor:"disabledSelect",children:"Disabled select menu"}),e(r.Select,{id:"disabledSelect",get children(){return A.cloneNode(!0)}})]}}),null),o})(),(()=>{const o=te.cloneNode(!0);return t(o,e(r.Group,{className:"mb-3",get children(){return e(r.Check,{type:"checkbox",id:"disabledFieldsetCheck",label:"Can't check this"})}}),null),t(o,e(u,{type:"submit",children:"Submit"}),null),o})()]}})}})]}}),null),t(b,e(s,{variant:"warning",get children(){return[e(s.Heading,{children:"Caveat with anchors"}),ne.cloneNode(!0)]}}),null),t(b,e(s,{variant:"danger",get children(){return[e(s.Heading,{children:"Cross-browser compatibility"}),oe.cloneNode(!0)]}}),null),t(f,e(l,{get children(){return[e(l.Header,{children:"Inline"}),e(l.Body,{get children(){return e(r,{noValidate:!0,get validated(){return j()},onSubmit:q,get children(){return[e(d,{className:"mb-3",get children(){return[e(r.Group,{as:n,md:"4",controlId:"validationCustom01",get children(){return[e(r.Label,{children:"First name"}),e(r.Control,{required:!0,type:"text",placeholder:"First name",value:"Mark"}),e(r.Control.Feedback,{children:"Looks good!"})]}}),e(r.Group,{as:n,md:"4",controlId:"validationCustom02",get children(){return[e(r.Label,{children:"Last name"}),e(r.Control,{required:!0,type:"text",placeholder:"Last name",value:"Otto"}),e(r.Control.Feedback,{children:"Looks good!"})]}}),e(r.Group,{as:n,md:"4",controlId:"validationCustomUsername",get children(){return[e(r.Label,{children:"Username"}),e(h,{hasValidation:!0,get children(){return[e(h.Text,{id:"inputGroupPrepend",children:"@"}),e(r.Control,{type:"text",placeholder:"Username","aria-describedby":"inputGroupPrepend",required:!0}),e(r.Control.Feedback,{type:"invalid",children:"Please choose a username."})]}})]}})]}}),e(d,{className:"mb-3",get children(){return[e(r.Group,{as:n,md:"6",controlId:"validationCustom03",get children(){return[e(r.Label,{children:"City"}),e(r.Control,{type:"text",placeholder:"City",required:!0}),e(r.Control.Feedback,{type:"invalid",children:"Please provide a valid city."})]}}),e(r.Group,{as:n,md:"3",controlId:"validationCustom04",get children(){return[e(r.Label,{children:"State"}),e(r.Control,{type:"text",placeholder:"State",required:!0}),e(r.Control.Feedback,{type:"invalid",children:"Please provide a valid state."})]}}),e(r.Group,{as:n,md:"3",controlId:"validationCustom05",get children(){return[e(r.Label,{children:"Zip"}),e(r.Control,{type:"text",placeholder:"Zip",required:!0}),e(r.Control.Feedback,{type:"invalid",children:"Please provide a valid zip."})]}})]}}),e(r.Group,{className:"mb-3",get children(){return e(r.Check,{required:!0,label:"Agree to terms and conditions",feedback:"You must agree before submitting.",feedbackType:"invalid"})}}),e(u,{type:"submit",children:"Submit form"})]}})}})]}}),null),t(f,e(s,{variant:"info",get children(){return[e(s.Heading,{children:"Form libraries and server-rendered styles"}),ie.cloneNode(!0)]}}),null),t(f,e(l,{get children(){return[e(l.Header,{children:"Input group validation"}),e(l.Body,{get children(){return e(h,{hasValidation:!0,get children(){return[e(h.Text,{children:"@"}),e(r.Control,{type:"text",required:!0,isInvalid:!0}),e(r.Control.Feedback,{type:"invalid",children:"Please choose a username."})]}})}})]}}),null),t(R,e(l,{get children(){return[e(l.Header,{children:"Switches"}),e(l.Body,{get children(){return e(r,{get children(){return[e(r.Check,{type:"switch",id:"custom-switch",label:"Check this switch"}),e(r.Check,{disabled:!0,type:"switch",label:"disabled switch",id:"disabled-custom-switch"})]}})}})]}}),null),g})()};export{ye as FormDocs,ye as default};
