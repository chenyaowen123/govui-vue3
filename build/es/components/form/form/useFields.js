import { ref as d } from "vue";
function p() {
  const e = d([]);
  return { fields: e, addField: (o) => {
    e.value.push(o);
  }, removeField: (o) => {
    e.value = e.value.filter((r) => r.prop !== o.prop);
  } };
}
export {
  p as useFields
};
