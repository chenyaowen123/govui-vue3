"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),n={class:"gov-page-container__title-text"},a={key:0,class:"gov-page-container__title-actions"},r={key:0,class:"gov-page-container__before"},l={class:"gov-page-container__content"},s={class:"gov-page-container__content-wrap"},i=Object.assign({name:"GovPageContainer"},{__name:"page-container",props:{title:{type:String,default:""},titleUnderline:{type:Boolean,default:!0},border:{type:Boolean,default:!0},round:{type:Boolean,default:!0}},setup(o){return(t,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["gov-page-container",[{"is-border":o.border,"is-round":o.round}]])},[e.createElementVNode("div",{class:e.normalizeClass(["gov-page-container__title",{"gov-page-container__title--underline":o.titleUnderline}])},[e.createElementVNode("div",n,[e.renderSlot(t.$slots,"title",{},()=>[e.createTextVNode(e.toDisplayString(o.title),1)])]),t.$slots.actions?(e.openBlock(),e.createElementBlock("div",a,[e.renderSlot(t.$slots,"actions")])):e.createCommentVNode("",!0)],2),t.$slots.before?(e.openBlock(),e.createElementBlock("div",r,[e.renderSlot(t.$slots,"before")])):e.createCommentVNode("",!0),e.createElementVNode("div",l,[e.createElementVNode("div",s,[e.renderSlot(t.$slots,"default")])])],2))}});exports.default=i;
