"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("vue"),l=require("./useResponsive.js"),f=Object.assign({name:"GovCol"},{__name:"index",props:{span:{type:Number,default:void 0,validator:e=>e===void 0||e>=0&&e<=24},offset:{type:Number,default:0,validator:e=>e>=0&&e<=24},flex:{type:[String,Number],default:void 0},order:{type:Number,default:0},xs:{type:[Number,Object],default:void 0},sm:{type:[Number,Object],default:void 0},md:{type:[Number,Object],default:void 0},lg:{type:[Number,Object],default:void 0},xl:{type:[Number,Object],default:void 0},xxl:{type:[Number,Object],default:void 0}},setup(e){const r=e,u=t.computed(()=>typeof r.flex=="number"?`${r.flex} ${r.flex} auto`:r.flex),n=l.useResponsive(r);return(d,o)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(`gov-grid-col gov-grid-col-${t.unref(n).span} gov-grid-offset-${t.unref(n).offset}`),style:t.normalizeStyle([{"padding-left":"var(--xGap)","padding-right":"var(--xGap)"},`flex: ${u.value}; order: ${r.order};`])},[t.renderSlot(d.$slots,"default")],6))}});exports.default=f;
