import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { ref, resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
const _sfc_main$3 = {
  __name: "qrcode-base",
  __ssrInlineRender: true,
  setup(__props) {
    const url = ref("https://www.baidu.com/");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_demo_container = resolveComponent("demo-container");
      const _component_gov_qrcode = resolveComponent("gov-qrcode");
      _push(ssrRenderComponent(_component_demo_container, _attrs, {
        console: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`url: ${ssrInterpolate(url.value)}`);
          } else {
            return [
              createTextVNode("url: " + toDisplayString(url.value), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_gov_qrcode, { value: url.value }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_gov_qrcode, { value: url.value }, null, 8, ["value"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/other/qrcode/qrcode-base.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "qrcode-size",
  __ssrInlineRender: true,
  setup(__props) {
    const url = ref("https://www.baidu.com/");
    const bordered = ref(true);
    const size = ref(100);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_demo_container = resolveComponent("demo-container");
      const _component_gov_input = resolveComponent("gov-input");
      const _component_gov_checkbox = resolveComponent("gov-checkbox");
      const _component_gov_input_number = resolveComponent("gov-input-number");
      const _component_gov_qrcode = resolveComponent("gov-qrcode");
      _push(ssrRenderComponent(_component_demo_container, _attrs, {
        console: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`url: ${ssrInterpolate(url.value)}<br${_scopeId}>size: ${ssrInterpolate(size.value)}`);
          } else {
            return [
              createTextVNode("url: " + toDisplayString(url.value), 1),
              createVNode("br"),
              createTextVNode("size: " + toDisplayString(size.value), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 生成字符：`);
            _push2(ssrRenderComponent(_component_gov_input, {
              modelValue: url.value,
              "onUpdate:modelValue": ($event) => url.value = $event
            }, null, _parent2, _scopeId));
            _push2(`    `);
            _push2(ssrRenderComponent(_component_gov_checkbox, {
              modelValue: bordered.value,
              "onUpdate:modelValue": ($event) => bordered.value = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`有边框`);
                } else {
                  return [
                    createTextVNode("有边框")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<br${_scopeId}><br${_scopeId}> 生成大小：`);
            _push2(ssrRenderComponent(_component_gov_input_number, {
              modelValue: size.value,
              "onUpdate:modelValue": ($event) => size.value = $event,
              step: 50,
              min: 100,
              max: 400,
              suffix: "px",
              controls: ""
            }, null, _parent2, _scopeId));
            _push2(`<hr${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gov_qrcode, {
              value: url.value,
              size: size.value,
              bordered: bordered.value
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" 生成字符："),
              createVNode(_component_gov_input, {
                modelValue: url.value,
                "onUpdate:modelValue": ($event) => url.value = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createTextVNode("    "),
              createVNode(_component_gov_checkbox, {
                modelValue: bordered.value,
                "onUpdate:modelValue": ($event) => bordered.value = $event
              }, {
                default: withCtx(() => [
                  createTextVNode("有边框")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("br"),
              createVNode("br"),
              createTextVNode(" 生成大小："),
              createVNode(_component_gov_input_number, {
                modelValue: size.value,
                "onUpdate:modelValue": ($event) => size.value = $event,
                step: 50,
                min: 100,
                max: 400,
                suffix: "px",
                controls: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode("hr"),
              createVNode(_component_gov_qrcode, {
                value: url.value,
                size: size.value,
                bordered: bordered.value
              }, null, 8, ["value", "size", "bordered"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/other/qrcode/qrcode-size.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "qrcode-color",
  __ssrInlineRender: true,
  setup(__props) {
    const url = ref("https://www.baidu.com/");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_demo_container = resolveComponent("demo-container");
      const _component_gov_qrcode = resolveComponent("gov-qrcode");
      _push(ssrRenderComponent(_component_demo_container, _attrs, {
        console: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`url: ${ssrInterpolate(url.value)}`);
          } else {
            return [
              createTextVNode("url: " + toDisplayString(url.value), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_gov_qrcode, {
              value: url.value,
              color: "#ff857b"
            }, null, _parent2, _scopeId));
            _push2(`   `);
            _push2(ssrRenderComponent(_component_gov_qrcode, {
              value: url.value,
              color: "#6ebe37"
            }, null, _parent2, _scopeId));
            _push2(`   `);
            _push2(ssrRenderComponent(_component_gov_qrcode, {
              value: url.value,
              color: "#008bf3"
            }, null, _parent2, _scopeId));
            _push2(`<hr${_scopeId}>`);
            _push2(ssrRenderComponent(_component_gov_qrcode, {
              value: url.value,
              color: "#ff857b",
              backgroundColor: "#f1f1f1",
              border: false
            }, null, _parent2, _scopeId));
            _push2(`   `);
            _push2(ssrRenderComponent(_component_gov_qrcode, {
              value: url.value,
              color: "#6ebe37",
              backgroundColor: "#f1f1f1",
              border: false
            }, null, _parent2, _scopeId));
            _push2(`   `);
            _push2(ssrRenderComponent(_component_gov_qrcode, {
              value: url.value,
              color: "#008bf3",
              backgroundColor: "#f1f1f1",
              border: false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_gov_qrcode, {
                value: url.value,
                color: "#ff857b"
              }, null, 8, ["value"]),
              createTextVNode("   "),
              createVNode(_component_gov_qrcode, {
                value: url.value,
                color: "#6ebe37"
              }, null, 8, ["value"]),
              createTextVNode("   "),
              createVNode(_component_gov_qrcode, {
                value: url.value,
                color: "#008bf3"
              }, null, 8, ["value"]),
              createVNode("hr"),
              createVNode(_component_gov_qrcode, {
                value: url.value,
                color: "#ff857b",
                backgroundColor: "#f1f1f1",
                border: false
              }, null, 8, ["value"]),
              createTextVNode("   "),
              createVNode(_component_gov_qrcode, {
                value: url.value,
                color: "#6ebe37",
                backgroundColor: "#f1f1f1",
                border: false
              }, null, 8, ["value"]),
              createTextVNode("   "),
              createVNode(_component_gov_qrcode, {
                value: url.value,
                color: "#008bf3",
                backgroundColor: "#f1f1f1",
                border: false
              }, null, 8, ["value"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/other/qrcode/qrcode-color.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Qrcode 二维码","description":"","frontmatter":{},"headers":[],"relativePath":"component/qrcode/index.md","filePath":"component/other/qrcode/index.md"}');
const __default__ = { name: "component/qrcode/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qrcode-二维码" tabindex="-1">Qrcode 二维码 <a class="header-anchor" href="#qrcode-二维码" aria-label="Permalink to &quot;Qrcode 二维码&quot;">​</a></h1><p>常用于链接/文字转换为二维码。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>设置 <code>value</code> 即可快速生成二维码。</p>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<h2 id="二维码控制" tabindex="-1">二维码控制 <a class="header-anchor" href="#二维码控制" aria-label="Permalink to &quot;二维码控制&quot;">​</a></h2><p>可以自由设置二维码尺寸和是否有边框，你也可以直接对组件使用样式。</p>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h2 id="自定义颜色" tabindex="-1">自定义颜色 <a class="header-anchor" href="#自定义颜色" aria-label="Permalink to &quot;自定义颜色&quot;">​</a></h2><p>自定义二维码颜色和背景色。</p>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/other/qrcode/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
