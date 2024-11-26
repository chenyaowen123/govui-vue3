import { computed as i } from "vue";
import { useGap as n } from "./useGap.js";
function m(t) {
  const { xGap: e, yGap: u } = n(t), a = i(() => typeof t.width == "number" ? `${t.width}px` : t.width);
  return i(() => ({
    "--xGap": `${e.value / 2}px`,
    "--justify": t.justify,
    "--align": t.align,
    width: a.value,
    "margin-left": `-${e.value / 2}px`,
    "margin-right": `-${e.value / 2}px`,
    "row-gap": `${u.value}px`
  }));
}
export {
  m as useStyle
};
