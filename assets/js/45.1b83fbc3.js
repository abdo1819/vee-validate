(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{193:function(e,t,r){"use strict";r.r(t);var a={data:function(){return{email:"",password:""}},methods:{onSubmit:function(){this.$refs.form.setErrors({email:["This email is already taken"]})}}},n=(r(333),r(17)),s=Object(n.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(t){var a=t.handleSubmit;return[r("form",{on:{submit:function(t){return t.preventDefault(),a(e.onSubmit)}}},[r("ValidationProvider",{attrs:{vid:"email",name:"E-mail",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(a[0]))])]}}],null,!0)}),e._v(" "),r("ValidationProvider",{attrs:{vid:"password",name:"Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),r("span",[e._v(e._s(a[0]))])]}}],null,!0)}),e._v(" "),r("button",{attrs:{type:"submit"}},[e._v("Sign up")])],1)]}}])})},[],!1,null,"859c39b8",null);t.default=s.exports},246:function(e,t,r){},333:function(e,t,r){"use strict";var a=r(246);r.n(a).a}}]);