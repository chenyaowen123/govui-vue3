import { createVNode as f, render as s } from "vue";
import u from "./notification.vue.js";
let p = [];
function i(o, t) {
  return p.slice(0, t).filter((e) => {
    var n, l;
    return ((n = e == null ? void 0 : e.props) == null ? void 0 : n.position) === ((l = o == null ? void 0 : o.props) == null ? void 0 : l.position);
  }).reduce((e, n) => e + n.vnode.el.offsetHeight + 20, 20);
}
function d() {
  p.forEach((o, t) => {
    var r, e;
    if (o && o.vnode) {
      let n = (e = (r = o.vnode.props) == null ? void 0 : r.position) != null && e.startsWith("bottom") ? "bottom" : "top";
      o.vnode.el.style[n] = i(o, t) + "px";
    }
  });
}
function m(o) {
  const t = document.createElement("div"), r = f(u, {
    ...o,
    onBeforeOpen: () => {
      d();
    },
    onClosed: () => {
      p = p.filter((l) => l !== n), document.body.removeChild(e), s(null, t), d();
    }
  });
  s(r, t);
  const e = t.firstChild;
  document.body.appendChild(e);
  const n = r.component;
  return p.push(n), n;
}
function h(o) {
  return new Promise((t, r) => {
    typeof o == "string" && (o = { content: o });
    const e = m({
      position: "top-right",
      ...o,
      onOpen: () => {
        t();
      },
      onClose: () => {
        r();
      }
    });
    return { close: () => {
      var l, c;
      (c = (l = e == null ? void 0 : e.exposed) == null ? void 0 : l.close) == null || c.call(l), r();
    } };
  });
}
function a() {
  p.forEach((o) => {
    var t, r;
    (r = (t = o == null ? void 0 : o.exposed) == null ? void 0 : t.close) == null || r.call(t);
  }), p.length = 0;
}
h.closeAll = a;
export {
  a as closeAll,
  h as default
};
