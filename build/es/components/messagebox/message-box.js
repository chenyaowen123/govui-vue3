import { createApp as l } from "vue";
import s from "./message-box.vue.js";
function a(e) {
  return new Promise((t, n) => {
    let o = null;
    const c = document.createElement("div");
    c.className = "gov-messagebox__app", document.body.appendChild(c), o = l(s, {
      ...e,
      cancelCallback: () => {
        n();
      },
      confirmCallback: () => {
        t();
      },
      closeCallback: () => {
        n();
      },
      closedCallback: () => {
        o && o.unmount && o.unmount(), document.body.removeChild(c);
      }
    }), o.mount(c);
  });
}
const b = {
  alert(e) {
    return a({
      ...typeof e == "string" ? { content: e } : e,
      showCancelButton: !1
    });
  },
  confirm(e) {
    return a(typeof e == "string" ? { content: e } : e);
  }
};
export {
  b as default
};
