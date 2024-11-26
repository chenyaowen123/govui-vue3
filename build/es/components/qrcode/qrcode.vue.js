import { computed as t, openBlock as l, createElementBlock as a, normalizeClass as c, normalizeStyle as d, createElementVNode as s } from "vue";
import { useQRCode as n } from "../../node_modules/@vueuse/integrations/useQRCode.js";
const i = ["src"], v = /* @__PURE__ */ Object.assign({
  name: "GovQrcode"
}, {
  __name: "qrcode",
  props: {
    value: {
      type: String,
      default: ""
      // 生成的值
    },
    size: {
      type: Number,
      default: 160
    },
    color: {
      type: String,
      default: "#000"
      // 生成颜色，必须是16进制
    },
    backgroundColor: {
      type: String,
      default: "#FFF"
      // 背景色
    },
    border: {
      type: Boolean,
      default: !0
      // 是否有边框
    },
    scale: {
      type: Number,
      default: 8
      // 比例因子
    },
    errorLevel: {
      type: String,
      default: "H",
      validator: (r) => ["L", "M", "Q", "H"].includes(r)
      // 识错级别
    }
  },
  setup(r) {
    const e = r, o = t(() => n(e.value, {
      errorCorrectionLevel: e.errorLevel,
      type: "image/png",
      quality: 1,
      margin: 3,
      scale: e.scale,
      color: {
        dark: e.color,
        light: e.backgroundColor
      }
    }));
    return (u, p) => (l(), a("div", {
      class: c(["gov-qrcode", { "gov-qrcode--border": e.border }]),
      style: d(`width: ${e.size}px; height: ${e.size}px;`)
    }, [
      s("img", {
        src: o.value.value,
        class: "gov-qrcode__image",
        alt: "QRCode"
      }, null, 8, i)
    ], 6));
  }
});
export {
  v as default
};
