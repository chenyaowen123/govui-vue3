import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{"layout":"home","hero":{"name":"GovUI","text":"政府机构风格，由 Vite 和 Vue3 驱动的组件库","tagline":"优雅的搭建私有化定制系统，只需几分钟","actions":[{"theme":"brand","text":"什么是GovUI？","link":"/guide/index"},{"theme":"alt","text":"指南","link":"/guide/index"},{"theme":"alt","text":"组件","link":"/component/index"}]},"features":[{"icon":"🆕","title":"最新技术","details":"采用 Vue^3.0.0 + Vite^5.4.8 + Sass^1.79.4 开发"},{"icon":"🎉","title":"丰富的UI","details":"提供 60+ 基础UI，支持按需引入，打包体积小，功能全面。"},{"icon":"📄","title":"清晰的文档","details":"清晰的文档，拥有 300+ 组件示例在线查看。"},{"icon":"🛠️","title":"易拓展","details":"清晰的表单封装，对自定义组件之间的交互友好。"}]},"headers":[],"relativePath":"index.md","filePath":"index.md"}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
