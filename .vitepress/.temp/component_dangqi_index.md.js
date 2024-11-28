import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
const _sfc_main$1 = {
  __name: "dangqi-base",
  __ssrInlineRender: true,
  setup(__props) {
    const width = ref(200);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_demo_container = resolveComponent("demo-container");
      const _component_gov_input_number = resolveComponent("gov-input-number");
      const _component_gov_dangqi = resolveComponent("gov-dangqi");
      _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-avatar" }, _attrs), {
        console: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 宽度:${ssrInterpolate(width.value)}px `);
          } else {
            return [
              createTextVNode(" 宽度:" + toDisplayString(width.value) + "px ", 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_gov_input_number, {
              modelValue: width.value,
              "onUpdate:modelValue": ($event) => width.value = $event,
              step: 50,
              min: 100,
              max: 600,
              suffix: "px",
              controls: ""
            }, null, _parent2, _scopeId));
            _push2(`<hr${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gov_dangqi, { width: width.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_gov_input_number, {
                modelValue: width.value,
                "onUpdate:modelValue": ($event) => width.value = $event,
                step: 50,
                min: 100,
                max: 600,
                suffix: "px",
                controls: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("hr"),
              createVNode(_component_gov_dangqi, { width: width.value }, null, 8, ["width"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/standard/dangqi/dangqi-base.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Dangqi 党旗","description":"","frontmatter":{},"headers":[],"relativePath":"component/dangqi/index.md","filePath":"component/standard/dangqi/index.md"}');
const __default__ = { name: "component/dangqi/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dangqi-党旗" tabindex="-1">Dangqi 党旗 <a class="header-anchor" href="#dangqi-党旗" aria-label="Permalink to &quot;Dangqi 党旗&quot;">​</a></h1><p>快速引用一个符合标准的党旗图片，该组件有助于规范化、标准化。</p><h2 id="图案颜色" tabindex="-1">图案颜色 <a class="header-anchor" href="#图案颜色" aria-label="Permalink to &quot;图案颜色&quot;">​</a></h2><p>党徽图案一般使用金黄色或者红色。</p><p>黄色 R=255 G=255 B=0</p><p>红色 R=238 G=28 B=37</p><p>在特定场合需要使用非通用尺度党旗的，应当按照通用尺度成比例适当放大或者缩小。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-dangqi</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> :width</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;width&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;vue&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> width</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">200</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th width="150">类型</th><th width="100">默认值</th><th>描述</th></tr></thead><tbody><tr><td>width</td><td>Number / String</td><td>1080</td><td>团宽度，单位 px。</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/standard/dangqi/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
