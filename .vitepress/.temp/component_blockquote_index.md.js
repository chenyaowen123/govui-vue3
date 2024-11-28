import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { resolveComponent, withCtx, createTextVNode, toDisplayString, createVNode, useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const content = `轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。`;
const _sfc_main$4 = {
  __name: "blockquote-base",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_demo_container = resolveComponent("demo-container");
      const _component_gov_blockquote = resolveComponent("gov-blockquote");
      _push(ssrRenderComponent(_component_demo_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_gov_blockquote, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(content)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(content))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_gov_blockquote, { type: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(content)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(content))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_gov_blockquote, { type: "success" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(content)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(content))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_gov_blockquote, { type: "info" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(content)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(content))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_gov_blockquote, { type: "warning" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(content)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(content))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_gov_blockquote, { type: "danger" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(content)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(content))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_gov_blockquote, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(content))
                ]),
                _: 1
              }),
              createVNode(_component_gov_blockquote, { type: "primary" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(content))
                ]),
                _: 1
              }),
              createVNode(_component_gov_blockquote, { type: "success" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(content))
                ]),
                _: 1
              }),
              createVNode(_component_gov_blockquote, { type: "info" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(content))
                ]),
                _: 1
              }),
              createVNode(_component_gov_blockquote, { type: "warning" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(content))
                ]),
                _: 1
              }),
              createVNode(_component_gov_blockquote, { type: "danger" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(content))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/base/blockquote/blockquote-base.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_blockquote = resolveComponent("gov-blockquote");
  _push(ssrRenderComponent(_component_demo_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_blockquote, { type: "primary" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 `);
              _push3(ssrRenderComponent(_component_gov_blockquote, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 `);
                  } else {
                    return [
                      createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 "),
                createVNode(_component_gov_blockquote, null, {
                  default: withCtx(() => [
                    createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 ")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_gov_blockquote, { type: "primary" }, {
            default: withCtx(() => [
              createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 "),
              createVNode(_component_gov_blockquote, null, {
                default: withCtx(() => [
                  createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 ")
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/base/blockquote/blockquote-qiantao.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const blockquoteQiantao = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_blockquote = resolveComponent("gov-blockquote");
  _push(ssrRenderComponent(_component_demo_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_blockquote, {
          fontSize: "12px",
          borderColor: "blue"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 `);
            } else {
              return [
                createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_gov_blockquote, {
            fontSize: "12px",
            borderColor: "blue"
          }, {
            default: withCtx(() => [
              createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/base/blockquote/blockquote-fontsize.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const blockquoteFontsize = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_blockquote = resolveComponent("gov-blockquote");
  _push(ssrRenderComponent(_component_demo_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_blockquote, {
          reverse: "",
          type: "primary"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 `);
            } else {
              return [
                createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_gov_blockquote, {
            reverse: "",
            type: "primary"
          }, {
            default: withCtx(() => [
              createTextVNode(" 轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。 那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。 ")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/base/blockquote/blockquote-reverse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const blockquoteReverse = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __pageData = JSON.parse('{"title":"Blockquote 引用","description":"","frontmatter":{},"headers":[],"relativePath":"component/blockquote/index.md","filePath":"component/base/blockquote/index.md"}');
const __default__ = { name: "component/blockquote/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blockquote-引用" tabindex="-1">Blockquote 引用 <a class="header-anchor" href="#blockquote-引用" aria-label="Permalink to &quot;Blockquote 引用&quot;">​</a></h1><p>一段引用。</p><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>设置 <code>type</code> 不同类型的引用。</p>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt; {{ content }} &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;{{ content }} &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;success&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;{{ content }} &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;info&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;{{ content }} &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;warning&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;{{ content }} &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;danger&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;{{ content }} &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> setup</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">const</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> content</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> =</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> \`轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。\`</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">script</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><h2 id="嵌套使用" tabindex="-1">嵌套使用 <a class="header-anchor" href="#嵌套使用" aria-label="Permalink to &quot;嵌套使用&quot;">​</a></h2><p>可以互相嵌套使用。</p>`);
      _push(ssrRenderComponent(blockquoteQiantao, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">				轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">				那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></details><h2 id="自定义" tabindex="-1">自定义 <a class="header-anchor" href="#自定义" aria-label="Permalink to &quot;自定义&quot;">​</a></h2><p>字体大小默认继承，可设置 <code>fontSize</code> 修改字体大小； 根据<code>borderColor</code> 设置边框颜色。</p>`);
      _push(ssrRenderComponent(blockquoteFontsize, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> fontSize</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;12px&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> borderColor</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;blue&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details><h2 id="翻转" tabindex="-1">翻转 <a class="header-anchor" href="#翻转" aria-label="Permalink to &quot;翻转&quot;">​</a></h2><p><code>reverse</code> 设置是否翻转，默认不翻转。</p>`);
      _push(ssrRenderComponent(blockquoteReverse, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> reverse</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> type</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;primary&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			轻轻的我走了,正如我轻轻的来; 我轻轻的招手,作别西天的云彩。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			那河畔的金柳,是夕阳中的新娘; 波光里的艳影,在我的心头荡漾。</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-blockquote</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></details><h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>块引用的类型</td><td>String</td><td>&quot;default&quot;, &quot;primary&quot;, &quot;success&quot;, &quot;info&quot;, &quot;warning&quot;, &quot;danger&quot;</td><td>&quot;default&quot;</td></tr><tr><td>fontSize</td><td>字体大小</td><td>String</td><td>—</td><td>—</td></tr><tr><td>borderColor</td><td>边框颜色</td><td>String</td><td>—</td><td>—</td></tr><tr><td>reverse</td><td>是否翻转显示</td><td>Boolean</td><td>true, false</td><td>false</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>用于放置块引用的内容，可以放置任何自定义的内容，例如文本、图片或其他 HTML 结构。</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/base/blockquote/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
