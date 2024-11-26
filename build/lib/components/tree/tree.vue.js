"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),c=require("../icon/icon.vue.js"),k=require("../collapse/collapse-transition.vue.js"),h={class:"gov-tree"},p=["onClick"],x={class:"gov-tree__icon-box"},B={class:"gov-tree__slot-box"},s=Object.assign({name:"GovTree"},{__name:"tree",props:{data:Array,expandeds:Array,paddingLeft:{type:String,default:"20px"},foldIcon:{type:String,request:!0,default:"caret-right"},unfoldIcon:String,nodeIcon:{type:String,default:null}},emits:["update:expandeds","toggle","click"],setup(l,{emit:u}){const i=l,d=u,a=t=>i.expandeds.includes(t.id),f=t=>{if(t.children&&t.children.length){let o=[...i.expandeds];a(t)?o=o.filter(n=>n!==t.id):o.push(t.id),d("update:expandeds",o),d("toggle",o,t)}d("click",t)},m=t=>{d("update:expandeds",t)};return(t,o)=>(e.openBlock(),e.createElementBlock("div",h,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.data,n=>(e.openBlock(),e.createElementBlock("div",{key:n.id,class:"gov-tree__node"},[e.createElementVNode("div",{onClick:e.withModifiers(r=>f(n),["stop"]),class:e.normalizeClass(["gov-tree__label",[{"is-expanded":a(n),"is-animation":!l.unfoldIcon}]])},[e.createElementVNode("span",x,[n.children&&n.children.length?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[l.unfoldIcon?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[a(n)?(e.openBlock(),e.createBlock(c.default,{key:0,name:l.foldIcon,size:"14"},null,8,["name"])):(e.openBlock(),e.createBlock(c.default,{key:1,name:l.unfoldIcon,size:"14"},null,8,["name"]))],64)):(e.openBlock(),e.createBlock(c.default,{key:1,name:l.foldIcon,size:"14"},null,8,["name"]))],64)):l.nodeIcon?(e.openBlock(),e.createBlock(c.default,{key:1,name:l.nodeIcon,size:"14"},null,8,["name"])):e.createCommentVNode("",!0)]),e.createElementVNode("div",B,[e.renderSlot(t.$slots,"default",{node:n,isExpanded:a(n)},()=>[e.createTextVNode(e.toDisplayString(n.label),1)])])],10,p),e.createVNode(k.default,null,{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{class:"gov-tree__children",style:e.normalizeStyle({paddingLeft:l.paddingLeft})},[e.createVNode(s,{data:n.children,foldIcon:l.foldIcon,unfoldIcon:l.unfoldIcon,nodeIcon:l.nodeIcon,expandeds:l.expandeds,"onUpdate:expandeds":m},e.createSlots({_:2},[t.$slots.default?{name:"default",fn:e.withCtx(({node:r,isExpanded:g})=>[e.renderSlot(t.$slots,"default",{node:r,isExpanded:g})]),key:"0"}:void 0]),1032,["data","foldIcon","unfoldIcon","nodeIcon","expandeds"])],4),[[e.vShow,n.children&&n.children.length&&a(n)]])]),_:2},1024)]))),128))]))}});exports.default=s;
