import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/assets/1.D7M4gxgD.png";
const _imports_1 = "/assets/2.DhihyS6O.png";
const _imports_2 = "/assets/3.DBc3jERB.png";
const _imports_3 = "/assets/4.CA1Gwq58.png";
const _imports_4 = "/assets/5.DF3r0z1P.png";
const _imports_5 = "/assets/6.DhH3hy4O.png";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-line-height" }, _attrs))} data-v-ad60dd9f><div class="font-line-height-left" data-v-ad60dd9f>GovUI</div><div class="font-line-height-font" data-v-ad60dd9f>font-size</div><div class="font-line-height-line" data-v-ad60dd9f>line-height</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/assets/fontLineHeight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const fontLineHeight = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ad60dd9f"]]);
const __pageData = JSON.parse('{"title":"Typography 字体","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/typography.md","filePath":"guide/typography.md"}');
const __default__ = { name: "guide/typography.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typography-字体" tabindex="-1">Typography 字体 <a class="header-anchor" href="#typography-字体" aria-label="Permalink to &quot;Typography 字体&quot;">​</a></h1><p>尽管宋体是政府文档的标准字体，考虑到我们的系统主要在电子屏幕上使用，我们选择了更适合屏幕显示的字体，对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。</p><h2 id="font-family-代码" tabindex="-1">Font-family 代码 <a class="header-anchor" href="#font-family-代码" aria-label="Permalink to &quot;Font-family 代码&quot;">​</a></h2><p>因为未涉及到打印和文件编辑，所以未将宋体作为默认字体。字体设计参考了ElementUI。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">font-family</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: &quot;Helvetica Neue&quot;,Helvetica,&quot;PingFang SC&quot;,&quot;Hiragino Sans GB&quot;,&quot;Microsoft YaHei&quot;,&quot;微软雅黑&quot;,Arial,</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">sans-serif</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span></code></pre></div><div class="demo-typography-imgs"><img${ssrRenderAttr("src", _imports_0)}><img${ssrRenderAttr("src", _imports_1)}><img${ssrRenderAttr("src", _imports_2)}><img${ssrRenderAttr("src", _imports_3)}><img${ssrRenderAttr("src", _imports_4)}><img${ssrRenderAttr("src", _imports_5)}></div><h2 id="字号" tabindex="-1">字号 <a class="header-anchor" href="#字号" aria-label="Permalink to &quot;字号&quot;">​</a></h2><table style="${ssrRenderStyle({ "width": "100%", "display": "table" })}"><thead><tr><th>层级</th><th>字体大小</th><th>举例</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "font-size": "12px" })}">辅助文字</td><td style="${ssrRenderStyle({ "font-size": "12px" })}">12px Extra Small</td><td style="${ssrRenderStyle({ "font-size": "12px" })}">用 GovUI 快速搭建页面</td></tr><tr><td style="${ssrRenderStyle({ "font-size": "13px" })}">正文（小）</td><td style="${ssrRenderStyle({ "font-size": "13px" })}">13px Small</td><td style="${ssrRenderStyle({ "font-size": "13px" })}">用 GovUI 快速搭建页面</td></tr><tr><td style="${ssrRenderStyle({ "font-size": "14px" })}">正文</td><td style="${ssrRenderStyle({ "font-size": "14px" })}">14px Base</td><td style="${ssrRenderStyle({ "font-size": "14px" })}">用 GovUI 快速搭建页面</td></tr><tr><td style="${ssrRenderStyle({ "font-size": "16px" })}">小标题</td><td style="${ssrRenderStyle({ "font-size": "16px" })}">16px Medium</td><td style="${ssrRenderStyle({ "font-size": "16px" })}">用 GovUI 快速搭建页面</td></tr><tr><td style="${ssrRenderStyle({ "font-size": "18px" })}">标题</td><td style="${ssrRenderStyle({ "font-size": "18px" })}">18px large</td><td style="${ssrRenderStyle({ "font-size": "18px" })}">用 GovUI 快速搭建页面</td></tr><tr><td style="${ssrRenderStyle({ "font-size": "20px" })}">主标题</td><td style="${ssrRenderStyle({ "font-size": "20px" })}">20px Extra large</td><td style="${ssrRenderStyle({ "font-size": "20px" })}">用 GovUI 快速搭建页面</td></tr></tbody></table><h2 id="行高" tabindex="-1">行高 <a class="header-anchor" href="#行高" aria-label="Permalink to &quot;行高&quot;">​</a></h2>`);
      _push(ssrRenderComponent(fontLineHeight, null, null, _parent));
      _push(`<table style="${ssrRenderStyle({ "width": "100%", "display": "table" })}"><thead><tr><th width="200">CSS行高</th><th>说明</th></tr></thead><tbody><tr><td>line-height:1em</td><td>无行高</td></tr><tr><td>line-height:1.3em</td><td>紧凑</td></tr><tr><td>line-height:1.5em</td><td>常规</td></tr><tr><td>line-height:1.7em</td><td>宽松</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/typography.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
