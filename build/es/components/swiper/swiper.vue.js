import { openBlock as s, createBlock as p, unref as a, mergeProps as i, withCtx as o, renderSlot as t } from "vue";
import { Swiper as n } from "../../node_modules/swiper/swiper-vue.js";
import m from "../../node_modules/swiper/modules/navigation.js";
import l from "../../node_modules/swiper/modules/pagination.js";
import f from "../../node_modules/swiper/modules/scrollbar.js";
import c from "../../node_modules/swiper/modules/autoplay.js";
/* empty css                                   */
/* empty css                                               */
/* empty css                                               */
/* empty css                                              */
import "../../node_modules/swiper/modules/autoplay.css.js";
const P = /* @__PURE__ */ Object.assign({
  name: "GovSwiper"
}, {
  __name: "swiper",
  setup(d) {
    const e = [m, l, f, c];
    return (r, u) => (s(), p(a(n), i(r.$attrs, {
      modules: e,
      class: "gov-swiper",
      style: { "--swiper-theme-color": "#fff" }
    }), {
      "container-start": o(() => [
        t(r.$slots, "container-start")
      ]),
      "container-end": o(() => [
        t(r.$slots, "container-end")
      ]),
      "wrapper-start": o(() => [
        t(r.$slots, "wrapper-start")
      ]),
      "wrapper-end": o(() => [
        t(r.$slots, "wrapper-end")
      ]),
      default: o(() => [
        t(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  P as default
};
