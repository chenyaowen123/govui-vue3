import { ref as l, onMounted as a } from "vue";
function f(e, i, u) {
  const n = l();
  a(() => {
    n.value = i.modelValue;
  }), e == null || e.$on("reset", () => {
    i.triggerForm && u(n.value);
  });
}
export {
  f as useReset
};
