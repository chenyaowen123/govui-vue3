import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
const _sfc_main$1 = {
  __name: "guoqi-base",
  __ssrInlineRender: true,
  setup(__props) {
    const width = ref(200);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_demo_container = resolveComponent("demo-container");
      const _component_gov_input_number = resolveComponent("gov-input-number");
      const _component_gov_guoqi = resolveComponent("gov-guoqi");
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
            _push2(ssrRenderComponent(_component_gov_guoqi, { width: width.value }, null, _parent2, _scopeId));
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
              createVNode(_component_gov_guoqi, { width: width.value }, null, 8, ["width"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/standard/guoqi/guoqi-base.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Guoqi 国旗","description":"","frontmatter":{},"headers":[],"relativePath":"component/guoqi/index.md","filePath":"component/standard/guoqi/index.md"}');
const __default__ = { name: "component/guoqi/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="guoqi-国旗" tabindex="-1">Guoqi 国旗 <a class="header-anchor" href="#guoqi-国旗" aria-label="Permalink to &quot;Guoqi 国旗&quot;">​</a></h1><p>快速引用一个符合标准的国旗图片，该组件有助于规范化、标准化。</p><h2 id="国旗法规范" tabindex="-1">国旗法规范 <a class="header-anchor" href="#国旗法规范" aria-label="Permalink to &quot;国旗法规范&quot;">​</a></h2><p>中华人民共和国国旗是中华人民共和国的象征和标志。每个公民和组织，都应当尊重和爱护国旗。</p><p>2020年10月17日，第十三届全国人民代表大会常务委员会第二十二次会议通过了关于修改《中华人民共和国国旗法》的决定，并于2021年1月1日起正式施行。</p><p>修改后的国旗法第九条规定，国家倡导公民和组织在适宜的场合使用国旗及其图案,表达爱国情感。公民和组织在网络中使用国旗图案,应当遵守相关网络管理规定,不得损害国旗尊严。网络使用的国旗图案标准版本在中国人大网和中国政府网上发布。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-guoqi</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> :width</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;width&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span>
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/standard/guoqi/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
