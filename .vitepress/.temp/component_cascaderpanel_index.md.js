import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { ref, resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, useSSRContext } from "vue";
const options = [
  {
    value: "community",
    label: "社区中心",
    children: [
      {
        value: "administration",
        label: "社区管理",
        children: [
          {
            value: "community_manager",
            label: "社区经理"
          },
          {
            value: "community_assistant",
            label: "社区助理"
          }
        ]
      },
      {
        value: "services",
        label: "社区服务",
        children: [
          {
            value: "security",
            label: "安保服务"
          },
          {
            value: "cleaning",
            label: "清洁服务"
          },
          {
            value: "maintenance",
            label: "维修服务"
          }
        ]
      },
      {
        value: "amenities",
        label: "社区设施",
        children: [
          {
            value: "parking",
            label: "停车场"
          },
          {
            value: "gym",
            label: "健身房"
          },
          {
            value: "swimming_pool",
            label: "游泳池"
          }
        ]
      }
    ]
  },
  {
    value: "residents",
    label: "居民区",
    children: [
      {
        value: "building_a",
        label: "A区"
      },
      {
        value: "building_b",
        label: "B区"
      },
      {
        value: "building_c",
        label: "C区"
      }
    ]
  },
  {
    value: "activities",
    label: "社区活动",
    children: [
      {
        value: "sports",
        label: "体育活动"
      },
      {
        value: "culture",
        label: "文化活动"
      },
      {
        value: "charity",
        label: "慈善活动"
      }
    ]
  },
  {
    value: "committees",
    label: "社区委员会",
    children: [
      {
        value: "environment",
        label: "环保委员会"
      },
      {
        value: "safety",
        label: "安全委员会"
      },
      {
        value: "events",
        label: "活动委员会"
      }
    ]
  },
  {
    value: "disabled",
    label: "不可用区域",
    disabled: true,
    children: [
      {
        value: "under-maintenance",
        label: "维护中"
      }
    ]
  }
];
const _sfc_main$1 = {
  __name: "cascader-panel",
  __ssrInlineRender: true,
  setup(__props) {
    const values = ref(["community", "administration", "community_manager"]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_demo_container = resolveComponent("demo-container");
      const _component_gov_cascader_panel = resolveComponent("gov-cascader-panel");
      _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-cascader" }, _attrs), {
        console: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(values.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(values.value), 1)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_gov_cascader_panel, {
              options: unref(options),
              style: { "height": "240px" },
              modelValue: values.value,
              "onUpdate:modelValue": ($event) => values.value = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_gov_cascader_panel, {
                options: unref(options),
                style: { "height": "240px" },
                modelValue: values.value,
                "onUpdate:modelValue": ($event) => values.value = $event
              }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/forms/cascaderpanel/cascader-panel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"CascaderPanel 级联面板","description":"","frontmatter":{},"headers":[],"relativePath":"component/cascaderpanel/index.md","filePath":"component/forms/cascaderpanel/index.md"}');
const __default__ = { name: "component/cascaderpanel/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cascaderpanel-级联面板" tabindex="-1">CascaderPanel 级联面板 <a class="header-anchor" href="#cascaderpanel-级联面板" aria-label="Permalink to &quot;CascaderPanel 级联面板&quot;">​</a></h1><p>用于多层级选择。</p><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><p>级联面板，比较级联选择器更加直观。</p>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-cascader-panel</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> v-model</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;values&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> :options</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;options&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;height: 240px&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> /&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt; {{ values }}&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> { ref } </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;vue&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">import</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> options </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">from</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;./data.js&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> values</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> ref</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">([</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;zujian&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;form&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;input-number&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">]);</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th width="90">属性名</th><th width="80">类型</th><th width="80">默认值</th><th>描述</th></tr></thead><tbody><tr><td>options</td><td>Array</td><td>[]</td><td>级联面板的选项数组，每个选项可以包含 value, label, children, disabled 等属性。需注意 value 唯一。</td></tr><tr><td>modelValue</td><td>Array</td><td>[]</td><td>绑定的值，选中节点 value 的集合，用于控制级联面板选中的项，需注意顺序对弈数据层级。</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th width="80">事件名</th><th width="150">参数</th><th>描述</th></tr></thead><tbody><tr><td>change</td><td>(Values, Objects)</td><td>当级联面板的选中项发生变化时触发，Values 参数返回选中的 value 列表， Objects 返回选中节点的数据。</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/forms/cascaderpanel/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
