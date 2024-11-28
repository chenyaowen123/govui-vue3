const c = (t, e, i) => {
  let r = t;
  e.indexOf(":") !== -1 && (e = e.replace(/:/g, ".")), e = e.replace(/\[(\w+)\]/g, ".$1"), e = e.replace(/^\./, "");
  let o = e.split("."), l = 0;
  for (let f = o.length; l < f - 1 && !(!r && !i); ++l) {
    let n = o[l];
    if (n in r)
      r = r[n];
    else
      throw new Error("formItem[prop] 路径无效 !");
  }
  return {
    obj: r,
    key: o[l],
    value: r ? r[o[l]] : null
  };
};
export {
  c as getPropByPath
};
