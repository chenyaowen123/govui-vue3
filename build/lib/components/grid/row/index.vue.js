"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),l=require("./useStyle.js"),n=Object.assign({name:"GovRow"},{__name:"index",props:{width:{type:[String,Number],default:"auto"},gutter:{type:[Number,Object,Array],default:0},align:{type:String,default:"flex-start",validator:e=>["flex-start","center","flex-end","stretch"].includes(e)},justify:{type:String,default:"start",validator:e=>["start","end","center","space-around","space-between","space-evenly"].includes(e)}},setup(e){const r=e,s=l.useStyle(r);return(a,u)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["gov-grid-row",{"gutter-row":e.gutter}]),style:t.normalizeStyle(t.unref(s))},[t.renderSlot(a.$slots,"default")],6))}});exports.default=n;
