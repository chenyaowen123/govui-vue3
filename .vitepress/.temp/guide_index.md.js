import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"GovUI是什么？","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/index.md","filePath":"guide/index.md"}');
const _sfc_main = { name: "guide/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="govui是什么" tabindex="-1">GovUI是什么？ <a class="header-anchor" href="#govui是什么" aria-label="Permalink to &quot;GovUI是什么？&quot;">​</a></h1><p>GovUI 是一个专为政府门户网站和管理系统后台设计的 UI 组件库。它旨在提供一套现代化、易用且符合政府风格需求的组件，以加速开发流程并确保界面的一致性和专业性。</p><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><ul><li><strong>政府门户网站</strong></li></ul><p>GovUI 提供了一套符合政府形象和风格的组件，包括但不限于表单、表格、按钮、导航栏等，这些组件可以帮助开发者快速搭建出符合政府形象的门户网站。</p><ul><li><strong>政府管理系统后台</strong></li></ul><p>对于需要高度定制和功能丰富的政府管理系统后台，GovUI 提供了丰富的组件和灵活的配置选项，以满足不同政府部门的需求。</p><h2 id="技术特点" tabindex="-1">技术特点 <a class="header-anchor" href="#技术特点" aria-label="Permalink to &quot;技术特点&quot;">​</a></h2><ul><li><strong>基于 Vue 3</strong></li></ul><p>GovUI 是基于最新的 Vue 3 框架开发的，这意味着它能够利用 Vue 3 的 Composition API、响应式系统等先进特性，提供更加灵活和强大的开发体验。</p><ul><li><strong>按需加载</strong></li></ul><p>GovUI 支持按需加载，这意味着开发者可以根据项目需求加载所需的组件，从而减少最终打包文件的大小，加快页面加载速度。</p><ul><li><strong>整体安装</strong></li></ul><p>除了按需加载，GovUI 也支持整体安装，方便那些希望快速开始并使用全部组件库的开发者。</p><ul><li><strong>最先进的组件设计理念</strong></li></ul><p>GovUI 的设计理念是简洁、易用、高效。每个组件都经过精心设计，以确保它们不仅外观一致，而且易于集成和扩展。</p><h2 id="性能" tabindex="-1">性能 <a class="header-anchor" href="#性能" aria-label="Permalink to &quot;性能&quot;">​</a></h2><p>GovUI 在设计时就考虑到了性能，确保组件在加载和交互时都能提供流畅的用户体验。</p><ul><li><strong>快速响应</strong></li></ul><p>GovUI 的组件设计注重响应速度，无论是在数据加载还是在用户交互时，都能快速响应。</p><ul><li><strong>高效的数据绑定</strong></li></ul><p>利用 Vue 3 的响应式系统，GovUI 的组件能够高效地处理数据变化，减少不必要的渲染，提高性能。</p><ul><li><strong>优化的组件结构</strong></li></ul><p>GovUI 的组件结构经过优化，以确保在不同的设备和浏览器上都能保持良好的性能和兼容性。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
