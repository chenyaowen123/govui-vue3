import { createVNode as u, render as d } from "vue";
import p from "./message.vue.js";
let t = [];
function m(e) {
  return t.slice(0, e).reduce((o, n) => o + n.vnode.el.offsetHeight + 20, 20);
}
function f() {
  t.forEach((e, o) => {
    e && e.vnode && (e.vnode.el.style.top = m(o) + "px");
  });
}
function a(e) {
  const o = document.createElement("div"), n = u(p, {
    ...e,
    onBeforeOpen: () => {
      f();
    },
    onClosed: () => {
      t = t.filter((l) => l !== r), document.body.removeChild(c), d(null, o), f();
    }
  });
  d(n, o);
  const c = o.firstChild;
  document.body.appendChild(c);
  const r = n.component;
  return t.push(r), r;
}
function i(e) {
  return new Promise((o, n) => {
    typeof e == "string" && (e = { message: e });
    const c = a({
      ...e,
      onOpen: () => {
        o();
      },
      onClose: () => {
        n();
      }
    });
    return { close: () => {
      var l, s;
      (s = (l = c == null ? void 0 : c.exposed) == null ? void 0 : l.close) == null || s.call(l), n();
    } };
  });
}
function h() {
  t.forEach((e) => {
    var o, n;
    (n = (o = e == null ? void 0 : e.exposed) == null ? void 0 : o.close) == null || n.call(o);
  }), t.length = 0;
}
i.closeAll = h;
export {
  h as closeAll,
  i as default
};
