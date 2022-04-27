import{c as e,j as m,v as r,t as c}from"./index.5ae66943.js";import{M as p}from"./index.e525610a.js";import{E as s}from"./Example.7f10c31b.js";import{G as u}from"./GithubSource.8f1815a8.js";import{F as a}from"./Form.163a7763.js";import{A as g}from"./Alert.51742666.js";import"./Card.c15ac305.js";import"./FormControl.2238b9ae.js";import"./Layout.6bb79e31.js";const N=c('<p class="lead"></p>'),j=c('<div class="row gy-5 pt-3"></div>'),b=c(`<table class="bg-white mb-0 table table-striped table-bordered mb-5"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>ref </td><td><div></div></td><td></td><td><div><p>The FormCheck <code>ref</code> will be forwarded to the underlying input element, which means it will be a DOM node, when resolved.</p></div></td></tr>
<tr><td>as </td><td><div>'input' | elementType</div></td><td><code>'input'</code></td><td><div><p>The underlying HTML element to use when rendering the FormCheck.</p></div></td></tr>
<tr><td>disabled </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Disables the control.</p></div></td></tr>
<tr><td>feedback </td><td><div>node</div></td><td></td><td><div><p>A message to display when the input is in a validation state</p></div></td></tr>
<tr><td>feedbackTooltip </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Display feedback as a tooltip.</p></div></td></tr>
<tr><td>id </td><td><div>string</div></td><td></td><td><div><p>A HTML id attribute, necessary for proper form accessibility. An id is recommended for allowing label clicks to toggle the check control.</p><p>This is <strong>required</strong> when <code>type="switch"</code> due to how they are rendered.</p></div></td></tr>
<tr><td>inline </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Groups controls horizontally with other <code>FormCheck</code>s.</p></div></td></tr>
<tr><td>isInvalid </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Manually style the input as invalid</p></div></td></tr>
<tr><td>isValid </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Manually style the input as valid</p></div></td></tr>
<tr><td>label </td><td><div>node</div></td><td></td><td><div><p>Label for the control.</p></div></td></tr>
<tr><td>title </td><td><div>string</div></td><td><code>''</code></td><td><div><p><code>title</code> attribute for the underlying <code>FormCheckLabel</code>.</p></div></td></tr>
<tr><td>type </td><td><div><span><code>'radio'</code><span> | </span><code>'checkbox'</code><span> | </span><code>'switch'</code></span></div></td><td><code>'checkbox'</code></td><td><div><p>The type of checkable.</p></div></td></tr>
<tr><td>bsPrefix </td><td><div>string</div></td><td><code>'form-check'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr>
<tr><td>bsSwitchPrefix </td><td><div>string</div></td><td><code>'form-switch'</code></td><td><div><p>bsPrefix override for the base switch class.</p></div></td></tr></tbody></table>`),v=c(`<table class="bg-white mb-0 table table-striped table-bordered mb-5"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>as </td><td><div>'input' | elementType</div></td><td><code>'input'</code></td><td><div><p>The underlying HTML element to use when rendering the FormCheckInput.</p></div></td></tr>
<tr><td>id </td><td><div>string</div></td><td></td><td><div><p>A HTML id attribute, necessary for proper form accessibility.</p></div></td></tr>
<tr><td>isInvalid </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Manually style the input as invalid</p></div></td></tr>
<tr><td>isValid </td><td><div>boolean</div></td><td><code>false</code></td><td><div><p>Manually style the input as valid</p></div></td></tr>
<tr><td>type </td><td><div><span><code>'radio'</code><span> | </span><code>'checkbox'</code></span></div></td><td><code>'checkbox'</code></td><td><div><p>The type of checkable.</p></div></td></tr>
<tr><td>bsPrefix </td><td><div>string</div></td><td><code>'form-check-input'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table>`),y=c(`<table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>htmlFor </td><td><div>string</div></td><td></td><td><div><p>The HTML for attribute for associating the label with an input</p></div></td></tr>
<tr><td>bsPrefix </td><td><div>string</div></td><td><code>'form-check-label'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table>`);function M(i={}){const{wrapper:h}=Object.assign({},p(),i.components);return h?e(h,m(i,{get children(){return e(o,{})}})):o();function o(){const t=Object.assign({h1:"h1",p:"p",code:"code",div:"div",pre:"pre",span:"span",h2:"h2",h3:"h3"},p(),i.components);return s||d("Example",!1),s.Code||d("Example.Code",!0),s.Intro||d("Example.Intro",!0),s.Preview||d("Example.Preview",!0),a||d("Form",!1),a.Check||d("Form.Check",!0),[e(u,{name:"FormChecksDocs.mdx"}),`
`,e(t.h1,{children:"Checks and radios"}),`
`,(()=>{const l=N.cloneNode(!0);return r(l,e(t.p,{children:`Create consistent cross-browser and cross-device checkboxes and radios with
our completely rewritten checks component.`})),l})(),`
`,e(t.p,{get children(){return["For the non-textual checkbox and radio controls, ",e(t.code,{children:"FormCheck"})," provides a single component for both types that adds some additional styling and improved layout."]}}),`
`,(()=>{const l=j.cloneNode(!0);return r(l,e(s,{title:"Default (stacked)",get children(){return[e(s.Intro,{get children(){return e(t.p,{children:"By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with FormCheck."})}}),e(s.Preview,{get children(){return e(a,{get children(){return["checkbox","radio"].map(n=>e(t.div,{class:"mb-3",get children(){return[e(a.Check,{type:n,id:`default-${n}`,label:`default ${n}`}),e(a.Check,{disabled:!0,type:n,label:`disabled ${n}`,id:`disabled-default-${n}`})]}}))}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Form"}),`>
  {[`,e(t.span,{className:"hljs-string",children:"'checkbox'"}),", ",e(t.span,{className:"hljs-string",children:"'radio'"}),"].",e(t.span,{className:"hljs-title function_",children:"map"}),"(",e(t.span,{className:"hljs-function",get children(){return["(",e(t.span,{className:"hljs-params",children:"type"}),") =>"]}}),` (
    `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"div"})," ",e(t.span,{className:"hljs-attr",children:"class"}),"=",e(t.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"}),` 
        `,e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:"{type}"}),`
        `,e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"default-"}),"${",e(t.span,{className:"hljs-attr",children:"type"}),"}`}\n        ",e(t.span,{className:"hljs-attr",children:"label"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"default"})," ${",e(t.span,{className:"hljs-attr",children:"type"}),"}`}\n      />"]}}),`

      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"}),`
        `,e(t.span,{className:"hljs-attr",children:"disabled"}),`
        `,e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:"{type}"}),`
        `,e(t.span,{className:"hljs-attr",children:"label"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"disabled"})," ${",e(t.span,{className:"hljs-attr",children:"type"}),"}`}\n        ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"disabled-default-"}),"${",e(t.span,{className:"hljs-attr",children:"type"}),"}`}\n      />"]}}),`
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"div"}),">"]}})]}}),`
  ))}
</`,e(t.span,{className:"hljs-title class_",children:"Form"}),`>
`]}})}})}})]}}),null),r(l,e(s,{title:"Switches",get children(){return[e(s.Intro,{get children(){return e(t.p,{get children(){return["A switch has the markup of a custom checkbox but uses ",e(t.code,{children:'type="switch"'}),`
to render a toggle switch. Switches also support the same customizable
children as `,e(t.code,{children:"<FormCheck>"}),"."]}})}}),e(s.Preview,{get children(){return e(a,{get children(){return[e(a.Check,{type:"switch",id:"custom-switch",label:"Check this switch"}),e(a.Check,{disabled:!0,type:"switch",label:"disabled switch",id:"disabled-custom-switch"})]}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Form"}),`>
  `,e(t.span,{className:"xml",get children(){return e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"}),` 
    `,e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:'"switch"'}),`
    `,e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"custom-switch"'}),`
    `,e(t.span,{className:"hljs-attr",children:"label"}),"=",e(t.span,{className:"hljs-string",children:'"Check this switch"'}),`
  />`]}})}}),`
  `,e(t.span,{className:"xml",get children(){return e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"}),` 
    `,e(t.span,{className:"hljs-attr",children:"disabled"}),`
    `,e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:'"switch"'}),`
    `,e(t.span,{className:"hljs-attr",children:"label"}),"=",e(t.span,{className:"hljs-string",children:'"disabled switch"'}),`
    `,e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"disabled-custom-switch"'}),`
  />`]}})}}),`
</`,e(t.span,{className:"hljs-title class_",children:"Form"}),`>
`]}})}})}})]}}),null),r(l,e(g,{variant:"warning",get children(){return e(t.p,{get children(){return["You can also use the ",e(t.code,{children:"<Form.Switch>"})," alias which encapsulates the above, in a very small component wrapper."]}})}}),null),r(l,e(s,{title:"Inline",get children(){return[e(s.Intro,{get children(){return e(t.p,{get children(){return["Group checkboxes or radios on the same horizontal row by adding the ",e(t.code,{children:"inline"})," prop."]}})}}),e(s.Preview,{get children(){return e(a,{get children(){return["checkbox","radio"].map(n=>e(t.div,{class:"mb-3",get children(){return[e(a.Check,{inline:!0,label:"1",name:"group1",type:n,id:`inline-${n}-1`}),e(a.Check,{inline:!0,label:"2",name:"group1",type:n,id:`inline-${n}-2`}),e(a.Check,{inline:!0,disabled:!0,label:"3 (disabled)",type:n,id:`inline-${n}-3`})]}}))}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Form"}),`>
  {[`,e(t.span,{className:"hljs-string",children:"'checkbox'"}),", ",e(t.span,{className:"hljs-string",children:"'radio'"}),"].",e(t.span,{className:"hljs-title function_",children:"map"}),"(",e(t.span,{className:"hljs-function",get children(){return["(",e(t.span,{className:"hljs-params",children:"type"}),") =>"]}}),` (
    `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"div"})," ",e(t.span,{className:"hljs-attr",children:"class"}),"=",e(t.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"}),`
        `,e(t.span,{className:"hljs-attr",children:"inline"}),`
        `,e(t.span,{className:"hljs-attr",children:"label"}),"=",e(t.span,{className:"hljs-string",children:'"1"'}),`
        `,e(t.span,{className:"hljs-attr",children:"name"}),"=",e(t.span,{className:"hljs-string",children:'"group1"'}),`
        `,e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:"{type}"}),`
        `,e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"inline-"}),"${",e(t.span,{className:"hljs-attr",children:"type"}),"}",e(t.span,{className:"hljs-attr",children:"-1"}),"`}\n      />"]}}),`
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"}),`
        `,e(t.span,{className:"hljs-attr",children:"inline"}),`
        `,e(t.span,{className:"hljs-attr",children:"label"}),"=",e(t.span,{className:"hljs-string",children:'"2"'}),`
        `,e(t.span,{className:"hljs-attr",children:"name"}),"=",e(t.span,{className:"hljs-string",children:'"group1"'}),`
        `,e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:"{type}"}),`
        `,e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"inline-"}),"${",e(t.span,{className:"hljs-attr",children:"type"}),"}",e(t.span,{className:"hljs-attr",children:"-2"}),"`}\n      />"]}}),`
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"}),`
        `,e(t.span,{className:"hljs-attr",children:"inline"}),`
        `,e(t.span,{className:"hljs-attr",children:"disabled"}),`
        `,e(t.span,{className:"hljs-attr",children:"label"}),"=",e(t.span,{className:"hljs-string",children:'"3 (disabled)"'}),`
        `,e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:"{type}"}),`
        `,e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"inline-"}),"${",e(t.span,{className:"hljs-attr",children:"type"}),"}",e(t.span,{className:"hljs-attr",children:"-3"}),"`}\n      />"]}}),`
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"div"}),">"]}})]}}),`
  ))}
</`,e(t.span,{className:"hljs-title class_",children:"Form"}),`>
`]}})}})}})]}}),null),r(l,e(s,{title:"Without labels",get children(){return[e(s.Intro,{get children(){return e(t.p,{get children(){return["When you render a FormCheck without a label (no ",e(t.code,{children:"children"}),`)
some additional styling is applied to keep the inputs from collapsing.`]}})}}),e(s.Preview,{get children(){return[e(a.Check,{"aria-label":"option 1"}),e(a.Check,{type:"radio","aria-label":"radio 1"})]}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Form"}),".",e(t.span,{className:"hljs-property",children:"Check"})," aria-label=",e(t.span,{className:"hljs-string",children:'"option 1"'}),` />
`,e(t.span,{className:"xml",get children(){return e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"})," ",e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:'"radio"'})," ",e(t.span,{className:"hljs-attr",children:"aria-label"}),"=",e(t.span,{className:"hljs-string",children:'"radio 1"'})," />"]}})}}),`
`]}})}})}})]}}),null),r(l,e(s,{title:"Customizing FormCheck rendering",get children(){return[e(s.Intro,{get children(){return[e(t.p,{get children(){return["When you need tighter control, or want to customize how the ",e(t.code,{children:"FormCheck"}),` component
renders, it may better to use its constituent parts directly.`]}}),e(t.p,{get children(){return["By provided ",e(t.code,{children:"children"})," to the ",e(t.code,{children:"FormCheck"}),` you can forgo the default rendering and
handle it yourself. (You can still provide an `,e(t.code,{children:"id"})," to the ",e(t.code,{children:"FormCheck"}),` or
`,e(t.code,{children:"FormGroup"})," and have it propagate to the label and input)."]}})]}}),e(s.Preview,{get children(){return e(a,{get children(){return["checkbox","radio"].map(n=>e(t.div,{class:"mb-3",get children(){return e(a.Check,{type:n,id:`check-api-${n}`,get children(){return[e(a.Check.Input,{type:n,isValid:!0}),e(a.Check.Label,{children:`Custom api ${n}`}),e(a.Control.Feedback,{type:"valid",children:"You did it!"})]}})}}))}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Form"}),`>
  {[`,e(t.span,{className:"hljs-string",children:"'checkbox'"}),", ",e(t.span,{className:"hljs-string",children:"'radio'"}),"].",e(t.span,{className:"hljs-title function_",children:"map"}),"(",e(t.span,{className:"hljs-function",get children(){return["(",e(t.span,{className:"hljs-params",children:"type"}),") =>"]}}),` (
    `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"div"})," ",e(t.span,{className:"hljs-attr",children:"class"}),"=",e(t.span,{className:"hljs-string",children:'"mb-3"'}),">"]}}),`
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check"})," ",e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:"{type}"})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"check-api-"}),"${",e(t.span,{className:"hljs-attr",children:"type"}),"}`}>"]}}),`
        `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check.Input"})," ",e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:"{type}"})," ",e(t.span,{className:"hljs-attr",children:"isValid"})," />"]}}),`
        `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Check.Label"}),">"]}}),"{`Custom api ${type}`}",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Form.Check.Label"}),">"]}}),`
        `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Form.Control.Feedback"})," ",e(t.span,{className:"hljs-attr",children:"type"}),"=",e(t.span,{className:"hljs-string",children:'"valid"'}),">"]}}),"You did it!",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Form.Control.Feedback"}),">"]}}),`
      `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Form.Check"}),">"]}}),`
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"div"}),">"]}})]}}),`
  ))}
</`,e(t.span,{className:"hljs-title class_",children:"Form"}),`>
`]}})}})}})]}}),null),l})(),`
`,e(t.h2,{children:"Api"}),`
`,e(t.h3,{children:"Form.Check"}),`
`,e(t.p,{get children(){return e(t.code,{children:`import { Form } from "solid-bootstrap"'`})}}),`
`,b.cloneNode(!0),`
`,e(t.h3,{children:"FormCheck.Input"}),`
`,e(t.p,{get children(){return e(t.code,{children:`import { FormCheck } from "solid-bootstrap"'`})}}),`
`,v.cloneNode(!0),`
`,e(t.h3,{children:"FormCheck.Label"}),`
`,e(t.p,{get children(){return e(t.code,{children:`import { FormCheck } from "solid-bootstrap"'`})}}),`
`,y.cloneNode(!0)]}}function d(i,h){throw new Error("Expected "+(h?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{M as default};
