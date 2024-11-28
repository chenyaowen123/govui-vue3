import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"政府组件库设计原则","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"guide/design.md","filePath":"guide/design.md"}');
const _sfc_main = { name: "guide/design.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="政府组件库设计原则" tabindex="-1">政府组件库设计原则 <a class="header-anchor" href="#政府组件库设计原则" aria-label="Permalink to &quot;政府组件库设计原则&quot;">​</a></h1><p>一个为政府机构量身定制的解决方案。以私有定制、轻量化、针对性强、可控性为核心，同时注重易用性、可访问性、可维护性和扩展性，确保满足政府工作的特殊需求。</p><h3 id="私有可定制" tabindex="-1">私有可定制 <a class="header-anchor" href="#私有可定制" aria-label="Permalink to &quot;私有可定制&quot;">​</a></h3><ul><li><strong>个性化定制：</strong> 组件库应支持高度的个性化定制，以满足不同政府部门的特定需求和品牌形象。</li><li><strong>数据安全：</strong> 确保所有组件在设计时考虑到数据的安全性和隐私保护，符合政府信息安全标准。</li></ul><h3 id="轻量化效率更高" tabindex="-1">轻量化效率更高 <a class="header-anchor" href="#轻量化效率更高" aria-label="Permalink to &quot;轻量化效率更高&quot;">​</a></h3><ul><li><strong>性能优化：</strong> 组件库应注重性能，确保快速加载和响应，以提高用户的操作效率。</li><li><strong>资源占用小：</strong> 组件应设计得尽可能轻量，减少对系统资源的占用，确保在资源受限的环境下也能良好运行。</li></ul><h3 id="针对性强" tabindex="-1">针对性强 <a class="header-anchor" href="#针对性强" aria-label="Permalink to &quot;针对性强&quot;">​</a></h3><ul><li><strong>功能专一：</strong> 组件库应提供专门针对政府工作流程和业务需求的功能，确保每个组件都能解决特定的问题。</li><li><strong>易于理解：</strong> 组件应直观易懂，减少用户的学习成本，使得非技术背景的用户也能快速上手。</li></ul><h3 id="可控" tabindex="-1">可控 <a class="header-anchor" href="#可控" aria-label="Permalink to &quot;可控&quot;">​</a></h3><ul><li><strong>操作可控：</strong> 用户应能够完全控制组件的行为，包括撤销、重做等操作，确保用户的操作自由。</li><li><strong>结果可预测：</strong> 组件的行为和结果应该是可预测的，避免出现不可预见的错误或副作用。</li></ul><h3 id="易用性" tabindex="-1">易用性 <a class="header-anchor" href="#易用性" aria-label="Permalink to &quot;易用性&quot;">​</a></h3><ul><li><strong>用户友好：</strong> 组件库应易于使用，界面设计应符合用户的操作习惯和心理模型。</li><li><strong>辅助功能：</strong> 提供辅助功能，如键盘导航、屏幕阅读器支持等，以满足不同用户的需求。</li></ul><h3 id="可维护性" tabindex="-1">可维护性 <a class="header-anchor" href="#可维护性" aria-label="Permalink to &quot;可维护性&quot;">​</a></h3><ul><li><strong>代码清晰：</strong> 组件库的代码应易于阅读和维护，方便开发者进行二次开发和扩展。</li><li><strong>文档齐全：</strong> 提供详尽的文档和示例，帮助开发者快速理解和使用组件库。</li></ul><h3 id="扩展性" tabindex="-1">扩展性 <a class="header-anchor" href="#扩展性" aria-label="Permalink to &quot;扩展性&quot;">​</a></h3><ul><li><strong>模块化设计：</strong> 组件库应采用模块化设计，方便根据需要添加或移除功能模块。</li><li><strong>API友好：</strong> 提供清晰的API文档，方便开发者进行集成和扩展。</li></ul><h3 id="版权开放" tabindex="-1">版权开放 <a class="header-anchor" href="#版权开放" aria-label="Permalink to &quot;版权开放&quot;">​</a></h3><ul><li><strong>开源许可：</strong> 组件库应采用开源许可，允许其他开发者自由地使用、修改和分发。</li><li><strong>社区参与：</strong> 鼓励社区参与，通过开放的版权政策促进知识共享和技术创新。</li></ul><p>通过这些设计原则，可以确保组件库不仅满足政府的特定需求，同时也提供了高效、安全、易用和可维护的用户体验，并且通过版权开放促进了更广泛的应用和创新。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/design.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const design = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  design as default
};
