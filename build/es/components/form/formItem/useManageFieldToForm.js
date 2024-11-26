import { watch as f, onBeforeUnmount as n } from "vue";
function c(i, e, d = {}) {
  f(
    () => i.prop,
    (p, t) => {
      t && (e == null || e.removeField({ prop: t })), p && (e == null || e.addField({ ...d, prop: p }));
    },
    {
      immediate: !0
    }
  ), n(() => {
    e == null || e.removeField({ prop: i.prop });
  });
}
export {
  c as useManageFieldToForm
};
