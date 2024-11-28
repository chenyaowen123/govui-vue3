function F(c, l) {
  const o = (e = [], a) => {
    let t = !0, i = [];
    if (e.forEach((r) => {
      r.validate(null, (n, v) => {
        n === "error" && (t = !1, i = i.concat(v));
      });
    }), typeof a == "function")
      a(t, i);
    else
      return new Promise((r, n) => {
        t ? r() : n(i);
      });
  };
  return {
    validate: (e) => {
      if (!c.model) {
        console.warn("[GovUI]：表单验证需要 <gov-form> 组件绑定 model !");
        return;
      }
      return o(l.value, e);
    },
    validateFields: (e, a) => {
      e = [].concat(e);
      const t = l.value.filter(
        (i) => e.indexOf(i.prop) !== -1
      );
      if (!t.length) {
        console.warn(
          `[GovUI]：传递给 validateFields 的 modelProps 不匹配！传入值为：${e}`
        );
        return;
      }
      return o(t, a);
    },
    clearValidate: (e = []) => {
      let a = [];
      e.length ? typeof e == "string" ? a = l.value.filter((t) => e === t.prop) : a = l.value.filter(
        (t) => e.indexOf(t.prop) > -1
      ) : a = l.value, a.forEach((t) => {
        t.clearValidate();
      });
    },
    resetFields: () => {
      l.value.forEach((e) => {
        e.resetField();
      });
    }
  };
}
export {
  F as useValidation
};
