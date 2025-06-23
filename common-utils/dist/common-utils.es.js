function c(t = 0) {
  let e = t;
  const r = /* @__PURE__ */ new Set();
  function u() {
    r.forEach((n) => n(e));
  }
  return {
    increment() {
      e++, u();
    },
    decrement() {
      e--, u();
    },
    getCount() {
      return e;
    },
    subscribe(n) {
      return r.add(n), n(e), () => r.delete(n);
    }
  };
}
function o(t, e) {
  return t + e;
}
function i(t, e) {
  return t * e;
}
export {
  o as add,
  c as createCounter,
  i as multiply
};
//# sourceMappingURL=common-utils.es.js.map
