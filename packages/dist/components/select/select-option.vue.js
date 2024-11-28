import { inject as i, computed as o, watchEffect as p, openBlock as r, createElementBlock as c, normalizeClass as f, renderSlot as m, createTextVNode as b, toDisplayString as x } from "vue";
const y = /* @__PURE__ */ Object.assign({
  name: "GovSelectOption"
}, {
  __name: "select-option",
  props: {
    value: {
      type: [String, Number],
      default: void 0
      // 绑定在输入框的值
    },
    label: {
      type: [String, Number],
      default: void 0
      // 绑定在输入框的值
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(l) {
    const a = l, e = i("govSelect", null), s = o(() => (e == null ? void 0 : e.modelValue) === a.value);
    p(() => {
      const t = e == null ? void 0 : e.modelValue;
      t == a.value ? e == null || e.updateInputText(a.label) : !t && t !== 0 && (e == null || e.updateInputText(void 0));
    });
    const u = () => {
      const { disabled: t, value: n, label: d } = a;
      t || (e == null || e.updateInputText(d), e == null || e.updateValue({ value: n, label: d }));
    };
    return (t, n) => (r(), c("div", {
      class: f(["gov-select-option", [{ "is-disabled": l.disabled }, { "is-selected": s.value }]]),
      onClick: u
    }, [
      m(t.$slots, "default", {}, () => [
        b(x(l.label), 1)
      ])
    ], 2));
  }
});
export {
  y as default
};
