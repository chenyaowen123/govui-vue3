import { ssrRenderComponent, ssrRenderAttr, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_backtop = resolveComponent("gov-backtop");
  _push(ssrRenderComponent(_component_demo_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_backtop, null, null, _parent2, _scopeId));
        _push2(` 翻动网页到底部，右下角出现一个返回顶部的按钮。 `);
      } else {
        return [
          createVNode(_component_gov_backtop),
          createTextVNode(" 翻动网页到底部，右下角出现一个返回顶部的按钮。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/navigation/backtop/backtop-base.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const backtopBase = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAACUCAYAAADs6BskAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4ODdBRDkzNEUzNjMxMUU0QjRDM0FDNUM4MDQzNzQ2RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4ODdBRDkzNUUzNjMxMUU0QjRDM0FDNUM4MDQzNzQ2RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4N0FEOTMyRTM2MzExRTRCNEMzQUM1QzgwNDM3NDZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg4N0FEOTMzRTM2MzExRTRCNEMzQUM1QzgwNDM3NDZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4uJDQAAAB/1JREFUeNrsnGuIVVUU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";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_backtop = resolveComponent("gov-backtop");
  _push(ssrRenderComponent(_component_demo_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_backtop, { bottom: "100" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="gov-demo-backtop__custom"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="返回顶部"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "gov-demo-backtop__custom" }, [
                  createVNode("img", {
                    src: _imports_0,
                    alt: "返回顶部"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(` 翻动网页到底部，右下角出现一个自定义返回顶部。 `);
      } else {
        return [
          createVNode(_component_gov_backtop, { bottom: "100" }, {
            default: withCtx(() => [
              createVNode("div", { class: "gov-demo-backtop__custom" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: "返回顶部"
                })
              ])
            ]),
            _: 1
          }),
          createTextVNode(" 翻动网页到底部，右下角出现一个自定义返回顶部。 ")
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/navigation/backtop/backtop-custom.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const backtopCustom = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __pageData = JSON.parse('{"title":"Backtop 返回顶部","description":"","frontmatter":{},"headers":[],"relativePath":"component/backtop/index.md","filePath":"component/navigation/backtop/index.md"}');
const __default__ = { name: "component/backtop/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backtop-返回顶部" tabindex="-1">Backtop 返回顶部 <a class="header-anchor" href="#backtop-返回顶部" aria-label="Permalink to &quot;Backtop 返回顶部&quot;">​</a></h1><p>任意容器返回顶部。常见于项目需要返回顶部时。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><ul><li>当指定 <code>target</code> 时，组件会对其滚动事件做监听，值可以是 id 或者 class。</li><li>不指定 <code>target</code> 时，组件默认会从<strong>组件调用位置</strong>开始向上查找到最近的滚动元素。</li><li>组件默认会渲染在 body 下，可以设置 <code>popperAppendToBody</code> 关闭或者打开。</li></ul>`);
      _push(ssrRenderComponent(backtopBase, null, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-backtop</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><h2 id="自定义显示" tabindex="-1">自定义显示 <a class="header-anchor" href="#自定义显示" aria-label="Permalink to &quot;自定义显示&quot;">​</a></h2><p>通过默认插槽可以自定义一个返回顶部。</p>`);
      _push(ssrRenderComponent(backtopCustom, null, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-backtop</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> bottom</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;100&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-backtop__custom&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">img</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> src</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;./top.png&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> alt</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;返回顶部&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-backtop</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><h2 id="更多拓展" tabindex="-1">更多拓展 <a class="header-anchor" href="#更多拓展" aria-label="Permalink to &quot;更多拓展&quot;">​</a></h2><p>如果你有更多自定义，例如你需要一个咨询按钮和返回并排，你也可以在咨询按钮标签上设置 <code>@click.stop</code> 来阻止冒泡，仅把 <code>Backtop</code> 当做一个容器。</p><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th width="150">类型</th><th width="100">默认值</th><th>描述</th></tr></thead><tbody><tr><td>visibilityHeight</td><td>Number</td><td>200</td><td>滚动时触发显示回到顶部按钮的高度，单位 px。</td></tr><tr><td>target</td><td>String</td><td>&quot;&quot;</td><td>指定滚动的目标元素，可以是 CSS 选择器或元素 ID。如不设置，则默认从组件调用位置开始，向上查找第一个滚动元素。</td></tr><tr><td>right</td><td>Number / String</td><td>40</td><td>回到顶部按钮距离页面右侧的距离，支持数字和字符串（如 40 , &#39;40px&#39;）。</td></tr><tr><td>bottom</td><td>Number / String</td><td>40</td><td>回到顶部按钮距离页面底部的距离，支持数字和字符串（如 40 , &#39;40px&#39;）。</td></tr><tr><td>zIndex</td><td>Number</td><td>2000</td><td>回到顶部按钮的 z-index 层级。</td></tr><tr><td>appendToBody</td><td>Boolean</td><td>true</td><td>是否将组件挂载到 body 上。</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件名</th><th>说明</th></tr></thead><tbody><tr><td>backtop</td><td>点击返回顶部事件。</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>插槽</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义返回顶部的内容显示。</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/navigation/backtop/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
