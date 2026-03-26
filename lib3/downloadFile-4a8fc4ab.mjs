import { defineComponent as r, openBlock as c, createElementBlock as p, createElementVNode as i } from "vue";
import { _ as s } from "./index-b2b0ebb3.mjs";
const u = r({
  name: "DownloadFile",
  setup() {
    function n() {
      const t = "http://localhost:8095/gameEdu/UploadFiles/PaperUploadFile/设计思维理念下的STEM课程设计...院REDlab STEM课程为例_吴昭20220107033454.pdf", l = "文件名.pdf";
      fetch(t).then((o) => o.blob()).then((o) => {
        const d = window.URL.createObjectURL(o), e = document.createElement("a");
        e.href = d, e.download = l, document.body.appendChild(e), e.click(), window.URL.revokeObjectURL(d);
      }).catch((o) => {
        console.error("下载出错", o);
      });
    }
    return {
      doDownload: n
    };
  }
});
function f(n, t, l, o, d, e) {
  return c(), p("div", null, [
    i("button", {
      onClick: t[0] || (t[0] = (...a) => n.doDownload && n.doDownload(...a))
    }, "下载文件")
  ]);
}
const E = /* @__PURE__ */ s(u, [["render", f]]);
export {
  E as default
};
