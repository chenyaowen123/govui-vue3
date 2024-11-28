import { openBlock as e, createBlock as d, Transition as s, mergeProps as i, toHandlers as n, withCtx as r, renderSlot as g } from "vue";
/* empty css                         */
import l from "../../_virtual/_plugin-vue_export-helper.js";
const p = /* @__PURE__ */ Object.assign({
  name: "GovCollapseTransition"
}, {
  __name: "collapse-transition",
  setup(m) {
    const a = (t) => {
      t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom;
    }, o = {
      beforeEnter(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.style.height && (t.dataset.elExistsHeight = t.style.height), t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0;
      },
      enter(t) {
        requestAnimationFrame(() => {
          t.dataset.oldOverflow = t.style.overflow, t.dataset.elExistsHeight ? t.style.maxHeight = t.dataset.elExistsHeight : t.scrollHeight !== 0 ? t.style.maxHeight = `${t.scrollHeight}px` : t.style.maxHeight = 0, t.style.paddingTop = t.dataset.oldPaddingTop, t.style.paddingBottom = t.dataset.oldPaddingBottom, t.style.overflow = "hidden";
        });
      },
      afterEnter(t) {
        t.style.maxHeight = "", t.style.overflow = t.dataset.oldOverflow;
      },
      enterCancelled(t) {
        a(t);
      },
      beforeLeave(t) {
        t.dataset || (t.dataset = {}), t.dataset.oldPaddingTop = t.style.paddingTop, t.dataset.oldPaddingBottom = t.style.paddingBottom, t.dataset.oldOverflow = t.style.overflow, t.style.maxHeight = `${t.scrollHeight}px`, t.style.overflow = "hidden";
      },
      leave(t) {
        t.scrollHeight !== 0 && (t.style.maxHeight = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0);
      },
      afterLeave(t) {
        a(t);
      },
      leaveCancelled(t) {
        a(t);
      }
    };
    return (t, f) => (e(), d(s, i({ name: "gov-collapse-transition" }, n(o)), {
      default: r(() => [
        g(t.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 16));
  }
}), v = /* @__PURE__ */ l(p, [["__scopeId", "data-v-44accc26"]]);
export {
  v as default
};
