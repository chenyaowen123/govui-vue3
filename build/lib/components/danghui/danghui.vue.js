"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),o=require("./danghui-red.png.js"),u=require("./danghui-yellow.png.js"),i=Object.assign({name:"GovDanghui"},{__name:"danghui",props:{width:{type:[String,Number],default:1080},type:{type:String,default:"red",validator:t=>["red","yellow"].includes(t)}},setup(t){const n=t,r=e.computed(()=>({display:" inline-block",fontSize:0})),l=e.computed(()=>({width:Number(n.width)+"px",height:"auto",display:"block"}));return(a,c)=>(e.openBlock(),e.createElementBlock("div",{class:"gov-danghui",style:e.normalizeStyle(r.value)},[t.type==="red"?(e.openBlock(),e.createElementBlock("img",{key:0,src:o.default,style:e.normalizeStyle(l.value)},null,4)):(e.openBlock(),e.createElementBlock("img",{key:1,src:u.default,style:e.normalizeStyle(l.value)},null,4))],4))}});exports.default=i;
