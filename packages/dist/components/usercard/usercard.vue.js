import { computed as n, openBlock as i, createElementBlock as d, normalizeStyle as l, createElementVNode as t, renderSlot as u, toDisplayString as r, createVNode as s } from "vue";
import _ from "../qrcode/qrcode.vue.js";
import v from "../avatar/avatar.vue.js";
const g = { class: "gov-usercard__header" }, m = { class: "gov-usercard__header-title" }, h = { class: "gov-usercard__text" }, S = { class: "gov-usercard__text-name" }, b = { class: "gov-usercard__text-place" }, f = { class: "gov-usercard__text-job" }, x = { class: "gov-usercard__text-nums" }, k = { class: "gov-usercard__footer" }, N = /* @__PURE__ */ Object.assign({
  name: "GovUsercard"
}, {
  __name: "usercard",
  props: {
    title: String,
    // 顶部标题
    avatar: String,
    // 头像
    name: String,
    // 姓名
    nums: [Number, String],
    // 编号
    place: String,
    // 工作单位
    job: String,
    // 工作
    qrcode: String,
    // 二维码
    background: String,
    // 自定义背景图
    expiration: String
    // 有效期
  },
  setup(e) {
    const a = e, c = n(() => ({
      background: a.background
    }));
    return (o, j) => (i(), d("div", {
      class: "gov-usercard",
      style: l(c.value)
    }, [
      t("div", g, [
        u(o.$slots, "header", {}, () => [
          t("div", m, r(e.title), 1)
        ])
      ]),
      s(v, {
        class: "gov-usercard__avatar",
        src: e.avatar,
        icon: "user",
        size: 100
      }, null, 8, ["src"]),
      s(_, {
        value: e.qrcode,
        class: "gov-usercard__qrcode",
        border: !1,
        size: 60
      }, null, 8, ["value"]),
      t("div", h, [
        t("div", S, "姓名：" + r(e.name), 1),
        t("div", b, "单位：" + r(e.place), 1),
        t("div", f, "职务：" + r(e.job), 1),
        t("div", x, "编号：" + r(e.nums), 1)
      ]),
      t("div", k, [
        t("div", null, "有效期：" + r(e.expiration), 1)
      ])
    ], 4));
  }
});
export {
  N as default
};
