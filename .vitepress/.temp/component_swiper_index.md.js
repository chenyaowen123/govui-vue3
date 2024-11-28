import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
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
          createVNode(_component_gov_swiper, null, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-base.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const swiperBase = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, { navigation: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
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
          createVNode(_component_gov_swiper, { navigation: "" }, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-navigation.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const swiperNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, { pagination: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
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
          createVNode(_component_gov_swiper, { pagination: "" }, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-pagination.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const swiperPagination = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, {
          pagination: "",
          autoplay: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
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
          createVNode(_component_gov_swiper, {
            pagination: "",
            autoplay: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-autoplay.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const swiperAutoplay = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, {
          navigation: "",
          autoplay: "",
          loop: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
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
          createVNode(_component_gov_swiper, {
            navigation: "",
            autoplay: "",
            loop: ""
          }, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
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
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-loop.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const swiperLoop = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, {
          pagination: "",
          autoplay: "",
          loop: "",
          direction: "vertical"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
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
          createVNode(_component_gov_swiper, {
            pagination: "",
            autoplay: "",
            loop: "",
            direction: "vertical"
          }, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-vertical.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const swiperVertical = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, {
          navigation: "",
          "slides-per-view": 2
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 6`);
                  } else {
                    return [
                      createTextVNode("Slide 6")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 6")
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
          createVNode(_component_gov_swiper, {
            navigation: "",
            "slides-per-view": 2
          }, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 6")
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-slides-per-view.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const swiperSlidesPerView = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_demo_container = resolveComponent("demo-container");
  const _component_gov_swiper = resolveComponent("gov-swiper");
  const _component_gov_swiper_slide = resolveComponent("gov-swiper-slide");
  _push(ssrRenderComponent(_component_demo_container, mergeProps({ class: "gov-demo-swiper" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_gov_swiper, {
          navigation: "",
          "slides-per-view": 2,
          "space-between": "50"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 1`);
                  } else {
                    return [
                      createTextVNode("Slide 1")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 2`);
                  } else {
                    return [
                      createTextVNode("Slide 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 3`);
                  } else {
                    return [
                      createTextVNode("Slide 3")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 4`);
                  } else {
                    return [
                      createTextVNode("Slide 4")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 5`);
                  } else {
                    return [
                      createTextVNode("Slide 5")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_gov_swiper_slide, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Slide 6`);
                  } else {
                    return [
                      createTextVNode("Slide 6")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 1")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 2")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 3")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 4")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 5")
                  ]),
                  _: 1
                }),
                createVNode(_component_gov_swiper_slide, null, {
                  default: withCtx(() => [
                    createTextVNode("Slide 6")
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
          createVNode(_component_gov_swiper, {
            navigation: "",
            "slides-per-view": 2,
            "space-between": "50"
          }, {
            default: withCtx(() => [
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 1")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 2")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 3")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 4")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 5")
                ]),
                _: 1
              }),
              createVNode(_component_gov_swiper_slide, null, {
                default: withCtx(() => [
                  createTextVNode("Slide 6")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/swiper-space-between.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const swiperSpaceBetween = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __pageData = JSON.parse('{"title":"Swiper 轮播","description":"","frontmatter":{},"headers":[],"relativePath":"component/swiper/index.md","filePath":"component/datas/swiper/index.md"}');
const __default__ = { name: "component/swiper/index.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="swiper-轮播" tabindex="-1">Swiper 轮播 <a class="header-anchor" href="#swiper-轮播" aria-label="Permalink to &quot;Swiper 轮播&quot;">​</a></h1><p>基于 <code>swiper.js</code>实现，默认集成了 <code>autoplay/navigation/pagination</code> 模块。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>可以通过 <code>&lt;gov-swiper /&gt;</code> 和 <code>&lt;gov-swiper-slide /&gt;</code> 组件快速创建。</p>`);
      _push(ssrRenderComponent(swiperBase, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="左右切换-navigation" tabindex="-1">左右切换 navigation <a class="header-anchor" href="#左右切换-navigation" aria-label="Permalink to &quot;左右切换 navigation&quot;">​</a></h2><p>设置左右切换的交互按钮。</p>`);
      _push(ssrRenderComponent(swiperNavigation, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> navigation</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="导航分栏-pagination" tabindex="-1">导航分栏 pagination <a class="header-anchor" href="#导航分栏-pagination" aria-label="Permalink to &quot;导航分栏 pagination&quot;">​</a></h2><p>设置常见的底部分页。</p>`);
      _push(ssrRenderComponent(swiperPagination, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> pagination</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="自动播放-autoplay" tabindex="-1">自动播放 autoplay <a class="header-anchor" href="#自动播放-autoplay" aria-label="Permalink to &quot;自动播放 autoplay&quot;">​</a></h2><p>是否自动播放。</p>`);
      _push(ssrRenderComponent(swiperAutoplay, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> pagination</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> autoplay</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="是否循环-loop" tabindex="-1">是否循环 loop <a class="header-anchor" href="#是否循环-loop" aria-label="Permalink to &quot;是否循环 loop&quot;">​</a></h2><p>当展示到最后一页的时候，是否循环衔接。</p>`);
      _push(ssrRenderComponent(swiperLoop, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> navigation</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> autoplay</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> loop</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="垂直方向-direction" tabindex="-1">垂直方向 direction <a class="header-anchor" href="#垂直方向-direction" aria-label="Permalink to &quot;垂直方向 direction&quot;">​</a></h2><p>设置 <code>direction</code> 为 <code>vertical</code>，可改为垂直方向。</p>`);
      _push(ssrRenderComponent(swiperVertical, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> pagination</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> autoplay</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> loop</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> direction</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;vertical&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></details><h2 id="多列-slides-per-view" tabindex="-1">多列 slides-per-view <a class="header-anchor" href="#多列-slides-per-view" aria-label="Permalink to &quot;多列 slides-per-view&quot;">​</a></h2><p>设置 <code>slides-per-view</code> 可展示多列效果。</p>`);
      _push(ssrRenderComponent(swiperSlidesPerView, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> navigation</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">slides-per-view</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">2</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 6&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><h2 id="间距-space-between" tabindex="-1">间距 space-between <a class="header-anchor" href="#间距-space-between" aria-label="Permalink to &quot;间距 space-between&quot;">​</a></h2><p><code>space-between</code> 可设置两个页之间的间距。</p>`);
      _push(ssrRenderComponent(swiperSpaceBetween, null, null, _parent));
      _push(`<details class="details custom-block"><summary>查看代码</summary><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> class</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;gov-demo-swiper&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> navigation</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> :</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">slides-per-view</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">2</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> space-between</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;50&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 3&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 4&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 5&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">			&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 6&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">demo-container</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> lang</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;scss&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">@use &quot;./style.scss&quot;;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">style</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div></details><h2 id="swiper-attributes" tabindex="-1">Swiper Attributes <a class="header-anchor" href="#swiper-attributes" aria-label="Permalink to &quot;Swiper Attributes&quot;">​</a></h2><p>更多配置参考 <a href="https://swiperjs.com/vue#swiper-props" target="_blank">Swiper Vue.js Components</a></p><table><thead><tr><th width="110">属性</th><th width="110">类型</th><th width="80">默认值</th><th>说明</th></tr></thead><tbody><tr><td>tag</td><td>string</td><td>div</td><td>主容器的 HTML 标签。</td></tr><tr><td>wrapperTag</td><td>string</td><td>div</td><td>滑块包装器的 HTML 标签。</td></tr><tr><td>slidesPerView</td><td>Number</td><td>1</td><td>每次滑动显示的滑块数量。</td></tr><tr><td>spaceBetween</td><td>Number</td><td>0</td><td>滑块之间的间距。</td></tr><tr><td>centeredSlides</td><td>Boolean</td><td>false</td><td>是否将滑块居中对齐。</td></tr><tr><td>loop</td><td>Boolean</td><td>false</td><td>是否启用循环模式。</td></tr><tr><td>speed</td><td>Number</td><td>300</td><td>动画速度（毫秒）。</td></tr><tr><td>effect</td><td>String</td><td>slide</td><td>切换效果。可选择slide/fade/cube/coverflow</td></tr><tr><td>autoplay</td><td>Boolean/Object</td><td>false</td><td>是否启用自动播放，或传递一个对象来配置自动播放：<ul><li>delay: 自动切换的时间间隔（毫秒）</li><li>stopOnLastSlide: 是否在最后一个滑块时停止自动播放</li><li>disableOnInteraction: 用户交互后是否停止自动播放</li></ul></td></tr><tr><td>navigation</td><td>Boolean/Object</td><td>false</td><td>是否启用导航按钮，或传递一个对象来配置导航按钮：<ul><li>nextEl: 下一个按钮的元素选择器</li><li>prevEl: 上一个按钮的元素选择器</li><li>hideOnClick: 是否在点击后隐藏导航按钮</li></ul></td></tr><tr><td>pagination</td><td>Boolean/Object</td><td>false</td><td>是否启用分页器，或传递一个对象来配置分页器：<ul><li>el: 分页器的元素选择器</li><li>clickable: 分页器是否可点击</li><li>renderBullet: 自定义分页器渲染函数</li></ul></td></tr></tbody></table><h2 id="swiper-events" tabindex="-1">Swiper events <a class="header-anchor" href="#swiper-events" aria-label="Permalink to &quot;Swiper events&quot;">​</a></h2><p>更多配置参考 <a href="https://swiperjs.com/vue#swiper-events" target="_blank">Swiper Vue.js Components</a></p><table style="${ssrRenderStyle({ "width": "100%" })}"><thead><tr><th>事件名</th><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>@swiper</td><td>swiper</td><td>当 Swiper 初始化或更新时触发，返回 Swiper 实例。</td></tr><tr><td>@slideChange</td><td>currentIndex, previousIndex</td><td>当滑块变化时触发，返回当前滑块和前一个滑块的索引。</td></tr><tr><td>@reachEnd</td><td>-</td><td>当 Swiper 滑动到最后一个滑块时触发。</td></tr><tr><td>@reachStart</td><td>-</td><td>当 Swiper 滑动到第一个滑块时触发。</td></tr><tr><td>@autoplayStart</td><td>-</td><td>当自动播放开始时触发。</td></tr><tr><td>@autoplayStop</td><td>-</td><td>当自动播放停止时触发。</td></tr><tr><td>@navigationNext</td><td>-</td><td>当点击下一个按钮时触发。</td></tr><tr><td>@navigationPrev</td><td>-</td><td>当点击上一个按钮时触发。</td></tr><tr><td>@paginationClick</td><td>index</td><td>当点击分页器时触发，返回点击的分页器索引。</td></tr></tbody></table><h2 id="swiper-slots" tabindex="-1">Swiper slots <a class="header-anchor" href="#swiper-slots" aria-label="Permalink to &quot;Swiper slots&quot;">​</a></h2><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 1&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Slide 2&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> v-slot:container-start</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Container start&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> v-slot:container-end</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Container end&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> v-slot:wrapper-start</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Wrapper start&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> v-slot:wrapper-end</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Wrapper end&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">span</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">template</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><table><thead><tr><th>插槽名称</th><th>说明</th></tr></thead><tbody><tr><td>container-start</td><td>元素将被添加到 Swiper 容器的开始位置。</td></tr><tr><td>container-end</td><td>元素将被添加到 Swiper 容器的结束位置。</td></tr><tr><td>wrapper-start</td><td>元素将被添加到 Swiper 滑块包装器的开始位置。</td></tr><tr><td>wrapper-end</td><td>元素将被添加到 Swiper 滑块包装器的结束位置。</td></tr></tbody></table><h2 id="swiperslide-attributes" tabindex="-1">SwiperSlide Attributes <a class="header-anchor" href="#swiperslide-attributes" aria-label="Permalink to &quot;SwiperSlide Attributes&quot;">​</a></h2><p>更多配置参考 <a href="https://swiperjs.com/vue#swiperslide-props" target="_blank">Swiper Vue.js Components</a></p><table><thead><tr><th width="110">属性</th><th width="110">类型</th><th width="80">默认值</th><th>说明</th></tr></thead><tbody><tr><td>tag</td><td>string</td><td>div</td><td>滑块的 HTML 标签。</td></tr></tbody></table><h2 id="swiperslide-slot-props" tabindex="-1">SwiperSlide Slot Props <a class="header-anchor" href="#swiperslide-slot-props" aria-label="Permalink to &quot;SwiperSlide Slot Props&quot;">​</a></h2><p><code>&lt;SwiperSlide /&gt;</code> 的默认插槽参数，可用于做高亮效果。</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}"> v-slot</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;{ isActive }&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">    &lt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;Current slide is {{ isActive ? &#39;active&#39; : &#39;not active&#39; }}&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">div</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">  &lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper-slide</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&lt;/</span><span style="${ssrRenderStyle({ "--shiki-light": "#22863A", "--shiki-dark": "#85E89D" })}">gov-swiper</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">&gt;</span></span></code></pre></div><table><thead><tr><th>Slot Prop</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>isActive</td><td>Boolean</td><td>当前滑块是否处于活跃状态。可用于改变活跃状态下滑块的样式或内容。</td></tr><tr><td>isPrev</td><td>Boolean</td><td>当前滑块是否是前一个活跃滑块。可用于区分当前活跃滑块的前一个滑块。</td></tr><tr><td>isNext</td><td>Boolean</td><td>当前滑块是否是后一个活跃滑块。可用于区分当前活跃滑块的后一个滑块。</td></tr><tr><td>isVisible</td><td>Boolean</td><td>当前滑块是否可见。只有在启用了 <code>watchSlidesProgress</code> 参数时有效。</td></tr><tr><td>isDuplicate</td><td>Boolean</td><td>当前滑块是否是复制的滑块。在循环模式下，Swiper 会复制滑块以实现无缝循环。</td></tr></tbody></table></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("component/datas/swiper/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
