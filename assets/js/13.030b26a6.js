(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{365:function(t,e,a){"use strict";a.r(e);var s=a(17),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"validation-observer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validation-observer","aria-hidden":"true"}},[t._v("#")]),t._v(" Validation Observer")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("ValidationObserver")]),t._v(" is a component that wraps your forms and provides aggregated validation state for all the fields nested under it using "),a("a",{attrs:{href:"https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots",target:"_blank",rel:"noopener noreferrer"}},[t._v("scoped slots"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("For more information on how to use the "),a("code",[t._v("ValidationObserver")]),t._v(", see "),a("router-link",{attrs:{to:"/guide/forms.html"}},[t._v("Forms Guide")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"scoped-slot-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scoped-slot-props","aria-hidden":"true"}},[t._v("#")]),t._v(" Scoped Slot Props")]),t._v(" "),a("p",[t._v("These are the properties available on the slot scope accessible with "),a("code",[t._v("v-slot")]),t._v(":")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("dirty")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if at least one field is dirty.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pristine")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if all fields are pristine (not dirty).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("valid")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if all fields are valid.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("invalid")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if at least one field is invalid.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("pending")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if at least one field's validation is in progress.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("touched")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if at least one field has been touched (blurred).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("untouched")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if all fields haven't been touched (blurred).")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("passed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if all fields are valid as a result of user interaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("failed")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("True if any field is invalid as a result of user interaction")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("errors")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("{ [x: string]: string[] }")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("An object containing reference to each field errors, each field is keyed by its "),a("code",[t._v("vid")]),t._v(" prop.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("validate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("() => Promise<boolean>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A method that triggers validation for all providers. Mutates child providers state unless "),a("code",[t._v("silent")]),t._v(" is true.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("handleSubmit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("(cb: Function) => Promise<void>")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calls validation like "),a("code",[t._v("validate")]),t._v(" and mutates provider's state, accepts a callback to be run only if the validation is successful.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("reset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("() => void")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("A method that resets validation state for all providers.")])])])]),t._v(" "),a("h2",{attrs:{id:"rendering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rendering","aria-hidden":"true"}},[t._v("#")]),t._v(" Rendering")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/api/validation-provider.html#rendering"}},[t._v("Like providers")]),t._v(", observers render a "),a("code",[t._v("span")]),t._v(" by default. You can customize the rendered tag using the "),a("code",[t._v("tag")]),t._v(" prop, for example a "),a("code",[t._v("form")]),t._v(" tag might be more useful.")],1),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Render a form --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ValidationObserver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tag")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Fields --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ValidationObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"forcing-renderless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forcing-renderless","aria-hidden":"true"}},[t._v("#")]),t._v(" Forcing Renderless")]),t._v(" "),a("p",[t._v("Sometimes it is unsuitable for a Observer component in principle to render anything extra, because of limitations in the Vue rendering output, you cannot have multiple root nodes which limits the design choice to move away from renderless at the moment, in Vue 3.x it this may change with fragments.")]),t._v(" "),a("p",[t._v("A "),a("code",[t._v("slim")]),t._v(" prop can be used to force the component to be renderless, by default it is set to "),a("code",[t._v("false")]),t._v(". The highlighted lines are the only rendered elements in the final output:")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Only the form inside the observer will be rendered --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ValidationObserver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Fields --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ValidationObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("Note that "),a("strong",[t._v("only the first child")]),t._v(" will be rendered when "),a("code",[t._v("slim")]),t._v(" is used, any other nodes will be dropped as you cannot have multiple root nodes in a renderless component. Be mindful of that when using the "),a("code",[t._v("slim")]),t._v(" prop.")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Only form is rendered. --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ValidationObserver")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slim")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ValidationObserver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Prop")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tag")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("span")])]),t._v(" "),a("td",[t._v("The default tag to "),a("a",{attrs:{href:"#rendering"}},[t._v("render")]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("slim")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, it will make the observer "),a("a",{attrs:{href:"#renderless"}},[t._v("renderless")]),t._v(", only rendering the HTML inside its slot.")])]),t._v(" "),a("tr",[a("td",[t._v("disabled")]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, the observer will be ignored when "),a("code",[t._v("validate")]),t._v(" is called by a parent observer.")])]),t._v(" "),a("tr",[a("td",[t._v("vid")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("random string")]),t._v(" "),a("td",[t._v("if provided it will be used as the observer's id when being registered as a child of a parent observer.")])])])]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("p",[t._v("Those are the only methods meant for public usage, other methods that may exist on the ValidationObserver are strictly internal.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Args")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Return Value")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("validate")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("{ silent: boolean }")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Promise<boolean>")])]),t._v(" "),a("td",[t._v("Validates all the child providers/observers and mutates their state unless "),a("code",[t._v("silent")]),t._v(" is true.")])]),t._v(" "),a("tr",[a("td",[t._v("reset")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("void")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("void")])]),t._v(" "),a("td",[t._v("Resets validation state for all child providers/observers.")])])])]),t._v(" "),a("h2",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("The validation observer does not emit any events at this time.")])])},[],!1,null,null,null);e.default=n.exports}}]);