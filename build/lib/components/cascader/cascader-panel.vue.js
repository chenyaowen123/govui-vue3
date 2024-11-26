"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),p=require("./cascader-panel-list.vue.js"),m={class:"gov-cascader-panel"},f=Object.assign({name:"GovCascaderPanel"},{__name:"cascader-panel",props:{options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]}},emits:["change","update:modelValue","expand","select"],setup(d,{emit:v}){const i=d,s=v,a=e.ref([]),u=e.computed(()=>a.value.map(n=>n.value));e.watchEffect(()=>{let n=[],o=i.options,l=[...i.modelValue];for(;l.length>0;){const c=l.shift(),t=o.find(r=>r.value===c);if(t)if(n.push(t),t.children&&t.children.length)o=t.children;else break;else break}a.value=n});const h=(n,o)=>{var t;let l=[];for(let r=0;r<n;r++)a.value[r]!==void 0&&l.push(a.value[r]);l.push(o),a.value=l,s("change",u.value,l),s("update:modelValue",u.value);let c=l[l.length-1];(t=c==null?void 0:c.children)!=null&&t.length?s("expand",u.value,l):s("select",u.value,l)};return e.provide("govCascaderPanel",e.reactive({cascaderSelected:a,updateCascaderPanelValue:h})),(n,o)=>(e.openBlock(),e.createElementBlock("div",m,[e.createVNode(p.default,{level:0,options:d.options},null,8,["options"]),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(a.value,(l,c)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:l.value},[l.children&&l.children.length?(e.openBlock(),e.createBlock(p.default,{key:0,level:c+1,options:l.children},null,8,["level","options"])):e.createCommentVNode("",!0)],64))),128))]))}});exports.default=f;
