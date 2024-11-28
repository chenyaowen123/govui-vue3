import { computed as n, ref as o } from "vue";
import { useEventListener as s } from "../utils/index.js";
function r(e) {
  const f = n(() => [
    {
      width: 1600,
      value: e.xxl
    },
    {
      width: 1200,
      value: e.xl
    },
    {
      width: 992,
      value: e.lg
    },
    {
      width: 768,
      value: e.md
    },
    {
      width: 576,
      value: e.sm
    },
    {
      width: 0,
      value: e.xs
    }
  ]), i = o(window.innerWidth);
  function u() {
    i.value = window.innerWidth;
  }
  return s(window, "resize", u), n(() => {
    for (const t of f.value)
      if (t.value && i.value >= t.width)
        return typeof t.value == "object" ? {
          span: t.value.span || e.span,
          offset: t.value.offset || e.offset
        } : {
          span: t.value,
          offset: e.offset
        };
    return {
      span: e.span,
      offset: e.offset
    };
  });
}
export {
  r as useResponsive
};
