function l(n) {
  const e = n.parentElement;
  if (e == null)
    return !1;
  const s = e == null ? void 0 : e.parentElement;
  if (s == null)
    return !1;
  const a = s.getElementsByTagName("a");
  for (let t = 0; t < a.length; t++)
    a[t].classList.remove("active");
  return n.classList.add("active"), !0;
}
export {
  l as m
};
