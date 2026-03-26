// src/types/layui.d.ts
declare namespace Layui {
  interface Element {
    // 定义 Element 的属性和方法
  }

  interface Layer {
    // 定义 Layer 的属性和方法
  }

  interface Layui {
    element: Element;
    layer: Layer;
    use(modules: string[], callback: (...args: any[]) => void): void;
  }
}
