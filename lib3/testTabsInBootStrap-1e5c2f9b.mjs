import { J as Sr, _ as Dr } from "./index-b2b0ebb3.mjs";
import { defineComponent as $r, ref as os, computed as Ir, onMounted as Nr, openBlock as Pr, createElementBlock as jr, createElementVNode as se } from "vue";
import { u as Mr, c as rs, b as as, a as ls } from "./tabs-f937399e.mjs";
var Fr = { exports: {} };
/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(B, Z) {
  (function(P, fe) {
    B.exports = fe();
  })(Sr, function() {
    const P = /* @__PURE__ */ new Map(), fe = { set(i, e, t) {
      P.has(i) || P.set(i, /* @__PURE__ */ new Map());
      const n = P.get(i);
      n.has(e) || n.size === 0 ? n.set(e, t) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
    }, get: (i, e) => P.has(i) && P.get(i).get(e) || null, remove(i, e) {
      if (!P.has(i))
        return;
      const t = P.get(i);
      t.delete(e), t.size === 0 && P.delete(i);
    } }, pe = "transitionend", Ke = (i) => (i && window.CSS && window.CSS.escape && (i = i.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)), i), ot = (i) => {
      i.dispatchEvent(new Event(pe));
    }, $ = (i) => !(!i || typeof i != "object") && (i.jquery !== void 0 && (i = i[0]), i.nodeType !== void 0), D = (i) => $(i) ? i.jquery ? i[0] : i : typeof i == "string" && i.length > 0 ? document.querySelector(Ke(i)) : null, I = (i) => {
      if (!$(i) || i.getClientRects().length === 0)
        return !1;
      const e = getComputedStyle(i).getPropertyValue("visibility") === "visible", t = i.closest("details:not([open])");
      if (!t)
        return e;
      if (t !== i) {
        const n = i.closest("summary");
        if (n && n.parentNode !== t || n === null)
          return !1;
      }
      return e;
    }, ee = (i) => !i || i.nodeType !== Node.ELEMENT_NODE || !!i.classList.contains("disabled") || (i.disabled !== void 0 ? i.disabled : i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false"), pi = (i) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof i.getRootNode == "function") {
        const e = i.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return i instanceof ShadowRoot ? i : i.parentNode ? pi(i.parentNode) : null;
    }, rt = () => {
    }, Xe = (i) => {
      i.offsetHeight;
    }, mi = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, kt = [], K = () => document.documentElement.dir === "rtl", X = (i) => {
      var e;
      e = () => {
        const t = mi();
        if (t) {
          const n = i.NAME, s = t.fn[n];
          t.fn[n] = i.jQueryInterface, t.fn[n].Constructor = i, t.fn[n].noConflict = () => (t.fn[n] = s, i.jQueryInterface);
        }
      }, document.readyState === "loading" ? (kt.length || document.addEventListener("DOMContentLoaded", () => {
        for (const t of kt)
          t();
      }), kt.push(e)) : e();
    }, W = (i, e = [], t = i) => typeof i == "function" ? i(...e) : t, gi = (i, e, t = !0) => {
      if (!t)
        return void W(i);
      const n = ((r) => {
        if (!r)
          return 0;
        let { transitionDuration: a, transitionDelay: c } = window.getComputedStyle(r);
        const u = Number.parseFloat(a), d = Number.parseFloat(c);
        return u || d ? (a = a.split(",")[0], c = c.split(",")[0], 1e3 * (Number.parseFloat(a) + Number.parseFloat(c))) : 0;
      })(e) + 5;
      let s = !1;
      const o = ({ target: r }) => {
        r === e && (s = !0, e.removeEventListener(pe, o), W(i));
      };
      e.addEventListener(pe, o), setTimeout(() => {
        s || ot(e);
      }, n);
    }, Lt = (i, e, t, n) => {
      const s = i.length;
      let o = i.indexOf(e);
      return o === -1 ? !t && n ? i[s - 1] : i[0] : (o += t ? 1 : -1, n && (o = (o + s) % s), i[Math.max(0, Math.min(o, s - 1))]);
    }, cs = /[^.]*(?=\..*)\.|.*/, hs = /\..*/, us = /::\d+$/, St = {};
    let _i = 1;
    const bi = { mouseenter: "mouseover", mouseleave: "mouseout" }, ds = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function vi(i, e) {
      return e && `${e}::${_i++}` || i.uidEvent || _i++;
    }
    function yi(i) {
      const e = vi(i);
      return i.uidEvent = e, St[e] = St[e] || {}, St[e];
    }
    function wi(i, e, t = null) {
      return Object.values(i).find((n) => n.callable === e && n.delegationSelector === t);
    }
    function Ei(i, e, t) {
      const n = typeof e == "string", s = n ? t : e || t;
      let o = Ti(i);
      return ds.has(o) || (o = i), [n, s, o];
    }
    function Ai(i, e, t, n, s) {
      if (typeof e != "string" || !i)
        return;
      let [o, r, a] = Ei(e, t, n);
      e in bi && (r = ((g) => function(m) {
        if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
          return g.call(this, m);
      })(r));
      const c = yi(i), u = c[a] || (c[a] = {}), d = wi(u, r, o ? t : null);
      if (d)
        return void (d.oneOff = d.oneOff && s);
      const h = vi(r, e.replace(cs, "")), b = o ? function(p, g, m) {
        return function _(C) {
          const k = p.querySelectorAll(g);
          for (let { target: y } = C; y && y !== this; y = y.parentNode)
            for (const E of k)
              if (E === y)
                return $t(C, { delegateTarget: y }), _.oneOff && l.off(p, C.type, g, m), m.apply(y, [C]);
        };
      }(i, t, r) : function(p, g) {
        return function m(_) {
          return $t(_, { delegateTarget: p }), m.oneOff && l.off(p, _.type, g), g.apply(p, [_]);
        };
      }(i, r);
      b.delegationSelector = o ? t : null, b.callable = r, b.oneOff = s, b.uidEvent = h, u[h] = b, i.addEventListener(a, b, o);
    }
    function Dt(i, e, t, n, s) {
      const o = wi(e[t], n, s);
      o && (i.removeEventListener(t, o, !!s), delete e[t][o.uidEvent]);
    }
    function fs(i, e, t, n) {
      const s = e[t] || {};
      for (const [o, r] of Object.entries(s))
        o.includes(n) && Dt(i, e, t, r.callable, r.delegationSelector);
    }
    function Ti(i) {
      return i = i.replace(hs, ""), bi[i] || i;
    }
    const l = { on(i, e, t, n) {
      Ai(i, e, t, n, !1);
    }, one(i, e, t, n) {
      Ai(i, e, t, n, !0);
    }, off(i, e, t, n) {
      if (typeof e != "string" || !i)
        return;
      const [s, o, r] = Ei(e, t, n), a = r !== e, c = yi(i), u = c[r] || {}, d = e.startsWith(".");
      if (o === void 0) {
        if (d)
          for (const h of Object.keys(c))
            fs(i, c, h, e.slice(1));
        for (const [h, b] of Object.entries(u)) {
          const p = h.replace(us, "");
          a && !e.includes(p) || Dt(i, c, r, b.callable, b.delegationSelector);
        }
      } else {
        if (!Object.keys(u).length)
          return;
        Dt(i, c, r, o, s ? t : null);
      }
    }, trigger(i, e, t) {
      if (typeof e != "string" || !i)
        return null;
      const n = mi();
      let s = null, o = !0, r = !0, a = !1;
      e !== Ti(e) && n && (s = n.Event(e, t), n(i).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      const c = $t(new Event(e, { bubbles: o, cancelable: !0 }), t);
      return a && c.preventDefault(), r && i.dispatchEvent(c), c.defaultPrevented && s && s.preventDefault(), c;
    } };
    function $t(i, e = {}) {
      for (const [t, n] of Object.entries(e))
        try {
          i[t] = n;
        } catch {
          Object.defineProperty(i, t, { configurable: !0, get: () => n });
        }
      return i;
    }
    function Ci(i) {
      if (i === "true")
        return !0;
      if (i === "false")
        return !1;
      if (i === Number(i).toString())
        return Number(i);
      if (i === "" || i === "null")
        return null;
      if (typeof i != "string")
        return i;
      try {
        return JSON.parse(decodeURIComponent(i));
      } catch {
        return i;
      }
    }
    function It(i) {
      return i.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
    }
    const ce = { setDataAttribute(i, e, t) {
      i.setAttribute(`data-bs-${It(e)}`, t);
    }, removeDataAttribute(i, e) {
      i.removeAttribute(`data-bs-${It(e)}`);
    }, getDataAttributes(i) {
      if (!i)
        return {};
      const e = {}, t = Object.keys(i.dataset).filter((n) => n.startsWith("bs") && !n.startsWith("bsConfig"));
      for (const n of t) {
        let s = n.replace(/^bs/, "");
        s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = Ci(i.dataset[n]);
      }
      return e;
    }, getDataAttribute: (i, e) => Ci(i.getAttribute(`data-bs-${It(e)}`)) };
    class Ue {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
      _getConfig(e) {
        return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
      }
      _configAfterMerge(e) {
        return e;
      }
      _mergeConfigObj(e, t) {
        const n = $(t) ? ce.getDataAttribute(t, "config") : {};
        return { ...this.constructor.Default, ...typeof n == "object" ? n : {}, ...$(t) ? ce.getDataAttributes(t) : {}, ...typeof e == "object" ? e : {} };
      }
      _typeCheckConfig(e, t = this.constructor.DefaultType) {
        for (const [s, o] of Object.entries(t)) {
          const r = e[s], a = $(r) ? "element" : (n = r) == null ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(o).test(a))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${o}".`);
        }
        var n;
      }
    }
    class te extends Ue {
      constructor(e, t) {
        super(), (e = D(e)) && (this._element = e, this._config = this._getConfig(t), fe.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        fe.remove(this._element, this.constructor.DATA_KEY), l.off(this._element, this.constructor.EVENT_KEY);
        for (const e of Object.getOwnPropertyNames(this))
          this[e] = null;
      }
      _queueCallback(e, t, n = !0) {
        gi(e, t, n);
      }
      _getConfig(e) {
        return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
      }
      static getInstance(e) {
        return fe.get(D(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
      }
      static get VERSION() {
        return "5.3.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(e) {
        return `${e}${this.EVENT_KEY}`;
      }
    }
    const Nt = (i) => {
      let e = i.getAttribute("data-bs-target");
      if (!e || e === "#") {
        let t = i.getAttribute("href");
        if (!t || !t.includes("#") && !t.startsWith("."))
          return null;
        t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`), e = t && t !== "#" ? t.trim() : null;
      }
      return e ? e.split(",").map((t) => Ke(t)).join(",") : null;
    }, f = { find: (i, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, i)), findOne: (i, e = document.documentElement) => Element.prototype.querySelector.call(e, i), children: (i, e) => [].concat(...i.children).filter((t) => t.matches(e)), parents(i, e) {
      const t = [];
      let n = i.parentNode.closest(e);
      for (; n; )
        t.push(n), n = n.parentNode.closest(e);
      return t;
    }, prev(i, e) {
      let t = i.previousElementSibling;
      for (; t; ) {
        if (t.matches(e))
          return [t];
        t = t.previousElementSibling;
      }
      return [];
    }, next(i, e) {
      let t = i.nextElementSibling;
      for (; t; ) {
        if (t.matches(e))
          return [t];
        t = t.nextElementSibling;
      }
      return [];
    }, focusableChildren(i) {
      const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t) => `${t}:not([tabindex^="-"])`).join(",");
      return this.find(e, i).filter((t) => !ee(t) && I(t));
    }, getSelectorFromElement(i) {
      const e = Nt(i);
      return e && f.findOne(e) ? e : null;
    }, getElementFromSelector(i) {
      const e = Nt(i);
      return e ? f.findOne(e) : null;
    }, getMultipleElementsFromSelector(i) {
      const e = Nt(i);
      return e ? f.find(e) : [];
    } }, at = (i, e = "hide") => {
      const t = `click.dismiss${i.EVENT_KEY}`, n = i.NAME;
      l.on(document, t, `[data-bs-dismiss="${n}"]`, function(s) {
        if (["A", "AREA"].includes(this.tagName) && s.preventDefault(), ee(this))
          return;
        const o = f.getElementFromSelector(this) || this.closest(`.${n}`);
        i.getOrCreateInstance(o)[e]();
      });
    }, Oi = ".bs.alert", ps = `close${Oi}`, ms = `closed${Oi}`;
    class Ye extends te {
      static get NAME() {
        return "alert";
      }
      close() {
        if (l.trigger(this._element, ps).defaultPrevented)
          return;
        this._element.classList.remove("show");
        const e = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }
      _destroyElement() {
        this._element.remove(), l.trigger(this._element, ms), this.dispose();
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Ye.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    at(Ye, "close"), X(Ye);
    const xi = '[data-bs-toggle="button"]';
    class Qe extends te {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Qe.getOrCreateInstance(this);
          e === "toggle" && t[e]();
        });
      }
    }
    l.on(document, "click.bs.button.data-api", xi, (i) => {
      i.preventDefault();
      const e = i.target.closest(xi);
      Qe.getOrCreateInstance(e).toggle();
    }), X(Qe);
    const Se = ".bs.swipe", gs = `touchstart${Se}`, _s = `touchmove${Se}`, bs = `touchend${Se}`, vs = `pointerdown${Se}`, ys = `pointerup${Se}`, ws = { endCallback: null, leftCallback: null, rightCallback: null }, Es = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class lt extends Ue {
      constructor(e, t) {
        super(), this._element = e, e && lt.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      static get Default() {
        return ws;
      }
      static get DefaultType() {
        return Es;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        l.off(this._element, Se);
      }
      _start(e) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX;
      }
      _end(e) {
        this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), W(this._config.endCallback);
      }
      _move(e) {
        this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const e = Math.abs(this._deltaX);
        if (e <= 40)
          return;
        const t = e / this._deltaX;
        this._deltaX = 0, t && W(t > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (l.on(this._element, vs, (e) => this._start(e)), l.on(this._element, ys, (e) => this._end(e)), this._element.classList.add("pointer-event")) : (l.on(this._element, gs, (e) => this._start(e)), l.on(this._element, _s, (e) => this._move(e)), l.on(this._element, bs, (e) => this._end(e)));
      }
      _eventIsPointerPenTouch(e) {
        return this._supportPointerEvents && (e.pointerType === "pen" || e.pointerType === "touch");
      }
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const me = ".bs.carousel", ki = ".data-api", Ge = "next", De = "prev", $e = "left", ct = "right", As = `slide${me}`, Pt = `slid${me}`, Ts = `keydown${me}`, Cs = `mouseenter${me}`, Os = `mouseleave${me}`, xs = `dragstart${me}`, ks = `load${me}${ki}`, Ls = `click${me}${ki}`, Li = "carousel", ht = "active", Si = ".active", Di = ".carousel-item", Ss = Si + Di, Ds = { ArrowLeft: ct, ArrowRight: $e }, $s = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, Is = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class Ie extends te {
      constructor(e, t) {
        super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = f.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Li && this.cycle();
      }
      static get Default() {
        return $s;
      }
      static get DefaultType() {
        return Is;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Ge);
      }
      nextWhenVisible() {
        !document.hidden && I(this._element) && this.next();
      }
      prev() {
        this._slide(De);
      }
      pause() {
        this._isSliding && ot(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        this._config.ride && (this._isSliding ? l.one(this._element, Pt, () => this.cycle()) : this.cycle());
      }
      to(e) {
        const t = this._getItems();
        if (e > t.length - 1 || e < 0)
          return;
        if (this._isSliding)
          return void l.one(this._element, Pt, () => this.to(e));
        const n = this._getItemIndex(this._getActive());
        if (n === e)
          return;
        const s = e > n ? Ge : De;
        this._slide(s, t[e]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(e) {
        return e.defaultInterval = e.interval, e;
      }
      _addEventListeners() {
        this._config.keyboard && l.on(this._element, Ts, (e) => this._keydown(e)), this._config.pause === "hover" && (l.on(this._element, Cs, () => this.pause()), l.on(this._element, Os, () => this._maybeEnableCycle())), this._config.touch && lt.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const t of f.find(".carousel-item img", this._element))
          l.on(t, xs, (n) => n.preventDefault());
        const e = { leftCallback: () => this._slide(this._directionToOrder($e)), rightCallback: () => this._slide(this._directionToOrder(ct)), endCallback: () => {
          this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
        } };
        this._swipeHelper = new lt(this._element, e);
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName))
          return;
        const t = Ds[e.key];
        t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
      }
      _getItemIndex(e) {
        return this._getItems().indexOf(e);
      }
      _setActiveIndicatorElement(e) {
        if (!this._indicatorsElement)
          return;
        const t = f.findOne(Si, this._indicatorsElement);
        t.classList.remove(ht), t.removeAttribute("aria-current");
        const n = f.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
        n && (n.classList.add(ht), n.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const e = this._activeElement || this._getActive();
        if (!e)
          return;
        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        this._config.interval = t || this._config.defaultInterval;
      }
      _slide(e, t = null) {
        if (this._isSliding)
          return;
        const n = this._getActive(), s = e === Ge, o = t || Lt(this._getItems(), n, s, this._config.wrap);
        if (o === n)
          return;
        const r = this._getItemIndex(o), a = (h) => l.trigger(this._element, h, { relatedTarget: o, direction: this._orderToDirection(e), from: this._getItemIndex(n), to: r });
        if (a(As).defaultPrevented || !n || !o)
          return;
        const c = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = o;
        const u = s ? "carousel-item-start" : "carousel-item-end", d = s ? "carousel-item-next" : "carousel-item-prev";
        o.classList.add(d), Xe(o), n.classList.add(u), o.classList.add(u), this._queueCallback(() => {
          o.classList.remove(u, d), o.classList.add(ht), n.classList.remove(ht, d, u), this._isSliding = !1, a(Pt);
        }, n, this._isAnimated()), c && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return f.findOne(Ss, this._element);
      }
      _getItems() {
        return f.find(Di, this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(e) {
        return K() ? e === $e ? De : Ge : e === $e ? Ge : De;
      }
      _orderToDirection(e) {
        return K() ? e === De ? $e : ct : e === De ? ct : $e;
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Ie.getOrCreateInstance(this, e);
          if (typeof e != "number") {
            if (typeof e == "string") {
              if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
                throw new TypeError(`No method named "${e}"`);
              t[e]();
            }
          } else
            t.to(e);
        });
      }
    }
    l.on(document, Ls, "[data-bs-slide], [data-bs-slide-to]", function(i) {
      const e = f.getElementFromSelector(this);
      if (!e || !e.classList.contains(Li))
        return;
      i.preventDefault();
      const t = Ie.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
      return n ? (t.to(n), void t._maybeEnableCycle()) : ce.getDataAttribute(this, "slide") === "next" ? (t.next(), void t._maybeEnableCycle()) : (t.prev(), void t._maybeEnableCycle());
    }), l.on(window, ks, () => {
      const i = f.find('[data-bs-ride="carousel"]');
      for (const e of i)
        Ie.getOrCreateInstance(e);
    }), X(Ie);
    const Je = ".bs.collapse", Ns = `show${Je}`, Ps = `shown${Je}`, js = `hide${Je}`, Ms = `hidden${Je}`, Fs = `click${Je}.data-api`, jt = "show", Ne = "collapse", ut = "collapsing", Hs = `:scope .${Ne} .${Ne}`, Mt = '[data-bs-toggle="collapse"]', Bs = { parent: null, toggle: !0 }, Ws = { parent: "(null|element)", toggle: "boolean" };
    class Pe extends te {
      constructor(e, t) {
        super(e, t), this._isTransitioning = !1, this._triggerArray = [];
        const n = f.find(Mt);
        for (const s of n) {
          const o = f.getSelectorFromElement(s), r = f.find(o).filter((a) => a === this._element);
          o !== null && r.length && this._triggerArray.push(s);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      static get Default() {
        return Bs;
      }
      static get DefaultType() {
        return Ws;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown())
          return;
        let e = [];
        if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((s) => s !== this._element).map((s) => Pe.getOrCreateInstance(s, { toggle: !1 }))), e.length && e[0]._isTransitioning || l.trigger(this._element, Ns).defaultPrevented)
          return;
        for (const s of e)
          s.hide();
        const t = this._getDimension();
        this._element.classList.remove(Ne), this._element.classList.add(ut), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
        this._queueCallback(() => {
          this._isTransitioning = !1, this._element.classList.remove(ut), this._element.classList.add(Ne, jt), this._element.style[t] = "", l.trigger(this._element, Ps);
        }, this._element, !0), this._element.style[t] = `${this._element[n]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || l.trigger(this._element, js).defaultPrevented)
          return;
        const e = this._getDimension();
        this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Xe(this._element), this._element.classList.add(ut), this._element.classList.remove(Ne, jt);
        for (const t of this._triggerArray) {
          const n = f.getElementFromSelector(t);
          n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1);
        }
        this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(() => {
          this._isTransitioning = !1, this._element.classList.remove(ut), this._element.classList.add(Ne), l.trigger(this._element, Ms);
        }, this._element, !0);
      }
      _isShown(e = this._element) {
        return e.classList.contains(jt);
      }
      _configAfterMerge(e) {
        return e.toggle = !!e.toggle, e.parent = D(e.parent), e;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const e = this._getFirstLevelChildren(Mt);
        for (const t of e) {
          const n = f.getElementFromSelector(t);
          n && this._addAriaAndCollapsedClass([t], this._isShown(n));
        }
      }
      _getFirstLevelChildren(e) {
        const t = f.find(Hs, this._config.parent);
        return f.find(e, this._config.parent).filter((n) => !t.includes(n));
      }
      _addAriaAndCollapsedClass(e, t) {
        if (e.length)
          for (const n of e)
            n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t);
      }
      static jQueryInterface(e) {
        const t = {};
        return typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1), this.each(function() {
          const n = Pe.getOrCreateInstance(this, t);
          if (typeof e == "string") {
            if (n[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            n[e]();
          }
        });
      }
    }
    l.on(document, Fs, Mt, function(i) {
      (i.target.tagName === "A" || i.delegateTarget && i.delegateTarget.tagName === "A") && i.preventDefault();
      for (const e of f.getMultipleElementsFromSelector(this))
        Pe.getOrCreateInstance(e, { toggle: !1 }).toggle();
    }), X(Pe);
    var j = "top", R = "bottom", z = "right", M = "left", dt = "auto", je = [j, R, z, M], ve = "start", Me = "end", $i = "clippingParents", Ft = "viewport", Fe = "popper", Ii = "reference", Ht = je.reduce(function(i, e) {
      return i.concat([e + "-" + ve, e + "-" + Me]);
    }, []), Bt = [].concat(je, [dt]).reduce(function(i, e) {
      return i.concat([e, e + "-" + ve, e + "-" + Me]);
    }, []), Ni = "beforeRead", Pi = "read", ji = "afterRead", Mi = "beforeMain", Fi = "main", Hi = "afterMain", Bi = "beforeWrite", Wi = "write", Ri = "afterWrite", zi = [Ni, Pi, ji, Mi, Fi, Hi, Bi, Wi, Ri];
    function oe(i) {
      return i ? (i.nodeName || "").toLowerCase() : null;
    }
    function q(i) {
      if (i == null)
        return window;
      if (i.toString() !== "[object Window]") {
        var e = i.ownerDocument;
        return e && e.defaultView || window;
      }
      return i;
    }
    function ye(i) {
      return i instanceof q(i).Element || i instanceof Element;
    }
    function U(i) {
      return i instanceof q(i).HTMLElement || i instanceof HTMLElement;
    }
    function Wt(i) {
      return typeof ShadowRoot < "u" && (i instanceof q(i).ShadowRoot || i instanceof ShadowRoot);
    }
    const Rt = { name: "applyStyles", enabled: !0, phase: "write", fn: function(i) {
      var e = i.state;
      Object.keys(e.elements).forEach(function(t) {
        var n = e.styles[t] || {}, s = e.attributes[t] || {}, o = e.elements[t];
        U(o) && oe(o) && (Object.assign(o.style, n), Object.keys(s).forEach(function(r) {
          var a = s[r];
          a === !1 ? o.removeAttribute(r) : o.setAttribute(r, a === !0 ? "" : a);
        }));
      });
    }, effect: function(i) {
      var e = i.state, t = { popper: { position: e.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
      return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
        Object.keys(e.elements).forEach(function(n) {
          var s = e.elements[n], o = e.attributes[n] || {}, r = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : t[n]).reduce(function(a, c) {
            return a[c] = "", a;
          }, {});
          U(s) && oe(s) && (Object.assign(s.style, r), Object.keys(o).forEach(function(a) {
            s.removeAttribute(a);
          }));
        });
      };
    }, requires: ["computeStyles"] };
    function re(i) {
      return i.split("-")[0];
    }
    var we = Math.max, ft = Math.min, He = Math.round;
    function zt() {
      var i = navigator.userAgentData;
      return i != null && i.brands && Array.isArray(i.brands) ? i.brands.map(function(e) {
        return e.brand + "/" + e.version;
      }).join(" ") : navigator.userAgent;
    }
    function qi() {
      return !/^((?!chrome|android).)*safari/i.test(zt());
    }
    function Be(i, e, t) {
      e === void 0 && (e = !1), t === void 0 && (t = !1);
      var n = i.getBoundingClientRect(), s = 1, o = 1;
      e && U(i) && (s = i.offsetWidth > 0 && He(n.width) / i.offsetWidth || 1, o = i.offsetHeight > 0 && He(n.height) / i.offsetHeight || 1);
      var r = (ye(i) ? q(i) : window).visualViewport, a = !qi() && t, c = (n.left + (a && r ? r.offsetLeft : 0)) / s, u = (n.top + (a && r ? r.offsetTop : 0)) / o, d = n.width / s, h = n.height / o;
      return { width: d, height: h, top: u, right: c + d, bottom: u + h, left: c, x: c, y: u };
    }
    function qt(i) {
      var e = Be(i), t = i.offsetWidth, n = i.offsetHeight;
      return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: i.offsetLeft, y: i.offsetTop, width: t, height: n };
    }
    function Vi(i, e) {
      var t = e.getRootNode && e.getRootNode();
      if (i.contains(e))
        return !0;
      if (t && Wt(t)) {
        var n = e;
        do {
          if (n && i.isSameNode(n))
            return !0;
          n = n.parentNode || n.host;
        } while (n);
      }
      return !1;
    }
    function he(i) {
      return q(i).getComputedStyle(i);
    }
    function Rs(i) {
      return ["table", "td", "th"].indexOf(oe(i)) >= 0;
    }
    function ge(i) {
      return ((ye(i) ? i.ownerDocument : i.document) || window.document).documentElement;
    }
    function pt(i) {
      return oe(i) === "html" ? i : i.assignedSlot || i.parentNode || (Wt(i) ? i.host : null) || ge(i);
    }
    function Ki(i) {
      return U(i) && he(i).position !== "fixed" ? i.offsetParent : null;
    }
    function Ze(i) {
      for (var e = q(i), t = Ki(i); t && Rs(t) && he(t).position === "static"; )
        t = Ki(t);
      return t && (oe(t) === "html" || oe(t) === "body" && he(t).position === "static") ? e : t || function(n) {
        var s = /firefox/i.test(zt());
        if (/Trident/i.test(zt()) && U(n) && he(n).position === "fixed")
          return null;
        var o = pt(n);
        for (Wt(o) && (o = o.host); U(o) && ["html", "body"].indexOf(oe(o)) < 0; ) {
          var r = he(o);
          if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || s && r.willChange === "filter" || s && r.filter && r.filter !== "none")
            return o;
          o = o.parentNode;
        }
        return null;
      }(i) || e;
    }
    function Vt(i) {
      return ["top", "bottom"].indexOf(i) >= 0 ? "x" : "y";
    }
    function et(i, e, t) {
      return we(i, ft(e, t));
    }
    function Xi(i) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, i);
    }
    function Ui(i, e) {
      return e.reduce(function(t, n) {
        return t[n] = i, t;
      }, {});
    }
    const Yi = { name: "arrow", enabled: !0, phase: "main", fn: function(i) {
      var e, t = i.state, n = i.name, s = i.options, o = t.elements.arrow, r = t.modifiersData.popperOffsets, a = re(t.placement), c = Vt(a), u = [M, z].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var d = function(O, T) {
          return Xi(typeof (O = typeof O == "function" ? O(Object.assign({}, T.rects, { placement: T.placement })) : O) != "number" ? O : Ui(O, je));
        }(s.padding, t), h = qt(o), b = c === "y" ? j : M, p = c === "y" ? R : z, g = t.rects.reference[u] + t.rects.reference[c] - r[c] - t.rects.popper[u], m = r[c] - t.rects.reference[c], _ = Ze(o), C = _ ? c === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, k = g / 2 - m / 2, y = d[b], E = C - h[u] - d[p], v = C / 2 - h[u] / 2 + k, w = et(y, v, E), A = c;
        t.modifiersData[n] = ((e = {})[A] = w, e.centerOffset = w - v, e);
      }
    }, effect: function(i) {
      var e = i.state, t = i.options.element, n = t === void 0 ? "[data-popper-arrow]" : t;
      n != null && (typeof n != "string" || (n = e.elements.popper.querySelector(n))) && Vi(e.elements.popper, n) && (e.elements.arrow = n);
    }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
    function We(i) {
      return i.split("-")[1];
    }
    var zs = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Qi(i) {
      var e, t = i.popper, n = i.popperRect, s = i.placement, o = i.variation, r = i.offsets, a = i.position, c = i.gpuAcceleration, u = i.adaptive, d = i.roundOffsets, h = i.isFixed, b = r.x, p = b === void 0 ? 0 : b, g = r.y, m = g === void 0 ? 0 : g, _ = typeof d == "function" ? d({ x: p, y: m }) : { x: p, y: m };
      p = _.x, m = _.y;
      var C = r.hasOwnProperty("x"), k = r.hasOwnProperty("y"), y = M, E = j, v = window;
      if (u) {
        var w = Ze(t), A = "clientHeight", O = "clientWidth";
        w === q(t) && he(w = ge(t)).position !== "static" && a === "absolute" && (A = "scrollHeight", O = "scrollWidth"), (s === j || (s === M || s === z) && o === Me) && (E = R, m -= (h && w === v && v.visualViewport ? v.visualViewport.height : w[A]) - n.height, m *= c ? 1 : -1), s !== M && (s !== j && s !== R || o !== Me) || (y = z, p -= (h && w === v && v.visualViewport ? v.visualViewport.width : w[O]) - n.width, p *= c ? 1 : -1);
      }
      var T, S = Object.assign({ position: a }, u && zs), V = d === !0 ? function(ne, F) {
        var Q = ne.x, G = ne.y, L = F.devicePixelRatio || 1;
        return { x: He(Q * L) / L || 0, y: He(G * L) / L || 0 };
      }({ x: p, y: m }, q(t)) : { x: p, y: m };
      return p = V.x, m = V.y, c ? Object.assign({}, S, ((T = {})[E] = k ? "0" : "", T[y] = C ? "0" : "", T.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", T)) : Object.assign({}, S, ((e = {})[E] = k ? m + "px" : "", e[y] = C ? p + "px" : "", e.transform = "", e));
    }
    const Kt = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(i) {
      var e = i.state, t = i.options, n = t.gpuAcceleration, s = n === void 0 || n, o = t.adaptive, r = o === void 0 || o, a = t.roundOffsets, c = a === void 0 || a, u = { placement: re(e.placement), variation: We(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s, isFixed: e.options.strategy === "fixed" };
      e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Qi(Object.assign({}, u, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: c })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Qi(Object.assign({}, u, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
    }, data: {} };
    var mt = { passive: !0 };
    const Xt = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
    }, effect: function(i) {
      var e = i.state, t = i.instance, n = i.options, s = n.scroll, o = s === void 0 || s, r = n.resize, a = r === void 0 || r, c = q(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && u.forEach(function(d) {
        d.addEventListener("scroll", t.update, mt);
      }), a && c.addEventListener("resize", t.update, mt), function() {
        o && u.forEach(function(d) {
          d.removeEventListener("scroll", t.update, mt);
        }), a && c.removeEventListener("resize", t.update, mt);
      };
    }, data: {} };
    var qs = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function gt(i) {
      return i.replace(/left|right|bottom|top/g, function(e) {
        return qs[e];
      });
    }
    var Vs = { start: "end", end: "start" };
    function Gi(i) {
      return i.replace(/start|end/g, function(e) {
        return Vs[e];
      });
    }
    function Ut(i) {
      var e = q(i);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Yt(i) {
      return Be(ge(i)).left + Ut(i).scrollLeft;
    }
    function Qt(i) {
      var e = he(i), t = e.overflow, n = e.overflowX, s = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(t + s + n);
    }
    function Ji(i) {
      return ["html", "body", "#document"].indexOf(oe(i)) >= 0 ? i.ownerDocument.body : U(i) && Qt(i) ? i : Ji(pt(i));
    }
    function tt(i, e) {
      var t;
      e === void 0 && (e = []);
      var n = Ji(i), s = n === ((t = i.ownerDocument) == null ? void 0 : t.body), o = q(n), r = s ? [o].concat(o.visualViewport || [], Qt(n) ? n : []) : n, a = e.concat(r);
      return s ? a : a.concat(tt(pt(r)));
    }
    function Gt(i) {
      return Object.assign({}, i, { left: i.x, top: i.y, right: i.x + i.width, bottom: i.y + i.height });
    }
    function Zi(i, e, t) {
      return e === Ft ? Gt(function(n, s) {
        var o = q(n), r = ge(n), a = o.visualViewport, c = r.clientWidth, u = r.clientHeight, d = 0, h = 0;
        if (a) {
          c = a.width, u = a.height;
          var b = qi();
          (b || !b && s === "fixed") && (d = a.offsetLeft, h = a.offsetTop);
        }
        return { width: c, height: u, x: d + Yt(n), y: h };
      }(i, t)) : ye(e) ? function(n, s) {
        var o = Be(n, !1, s === "fixed");
        return o.top = o.top + n.clientTop, o.left = o.left + n.clientLeft, o.bottom = o.top + n.clientHeight, o.right = o.left + n.clientWidth, o.width = n.clientWidth, o.height = n.clientHeight, o.x = o.left, o.y = o.top, o;
      }(e, t) : Gt(function(n) {
        var s, o = ge(n), r = Ut(n), a = (s = n.ownerDocument) == null ? void 0 : s.body, c = we(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), u = we(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), d = -r.scrollLeft + Yt(n), h = -r.scrollTop;
        return he(a || o).direction === "rtl" && (d += we(o.clientWidth, a ? a.clientWidth : 0) - c), { width: c, height: u, x: d, y: h };
      }(ge(i)));
    }
    function en(i) {
      var e, t = i.reference, n = i.element, s = i.placement, o = s ? re(s) : null, r = s ? We(s) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2;
      switch (o) {
        case j:
          e = { x: a, y: t.y - n.height };
          break;
        case R:
          e = { x: a, y: t.y + t.height };
          break;
        case z:
          e = { x: t.x + t.width, y: c };
          break;
        case M:
          e = { x: t.x - n.width, y: c };
          break;
        default:
          e = { x: t.x, y: t.y };
      }
      var u = o ? Vt(o) : null;
      if (u != null) {
        var d = u === "y" ? "height" : "width";
        switch (r) {
          case ve:
            e[u] = e[u] - (t[d] / 2 - n[d] / 2);
            break;
          case Me:
            e[u] = e[u] + (t[d] / 2 - n[d] / 2);
        }
      }
      return e;
    }
    function Re(i, e) {
      e === void 0 && (e = {});
      var t = e, n = t.placement, s = n === void 0 ? i.placement : n, o = t.strategy, r = o === void 0 ? i.strategy : o, a = t.boundary, c = a === void 0 ? $i : a, u = t.rootBoundary, d = u === void 0 ? Ft : u, h = t.elementContext, b = h === void 0 ? Fe : h, p = t.altBoundary, g = p !== void 0 && p, m = t.padding, _ = m === void 0 ? 0 : m, C = Xi(typeof _ != "number" ? _ : Ui(_, je)), k = b === Fe ? Ii : Fe, y = i.rects.popper, E = i.elements[g ? k : b], v = function(F, Q, G, L) {
        var ae = Q === "clippingParents" ? function(x) {
          var H = tt(pt(x)), J = ["absolute", "fixed"].indexOf(he(x).position) >= 0 && U(x) ? Ze(x) : x;
          return ye(J) ? H.filter(function(be) {
            return ye(be) && Vi(be, J) && oe(be) !== "body";
          }) : [];
        }(F) : [].concat(Q), le = [].concat(ae, [G]), Ve = le[0], N = le.reduce(function(x, H) {
          var J = Zi(F, H, L);
          return x.top = we(J.top, x.top), x.right = ft(J.right, x.right), x.bottom = ft(J.bottom, x.bottom), x.left = we(J.left, x.left), x;
        }, Zi(F, Ve, L));
        return N.width = N.right - N.left, N.height = N.bottom - N.top, N.x = N.left, N.y = N.top, N;
      }(ye(E) ? E : E.contextElement || ge(i.elements.popper), c, d, r), w = Be(i.elements.reference), A = en({ reference: w, element: y, strategy: "absolute", placement: s }), O = Gt(Object.assign({}, y, A)), T = b === Fe ? O : w, S = { top: v.top - T.top + C.top, bottom: T.bottom - v.bottom + C.bottom, left: v.left - T.left + C.left, right: T.right - v.right + C.right }, V = i.modifiersData.offset;
      if (b === Fe && V) {
        var ne = V[s];
        Object.keys(S).forEach(function(F) {
          var Q = [z, R].indexOf(F) >= 0 ? 1 : -1, G = [j, R].indexOf(F) >= 0 ? "y" : "x";
          S[F] += ne[G] * Q;
        });
      }
      return S;
    }
    function Ks(i, e) {
      e === void 0 && (e = {});
      var t = e, n = t.placement, s = t.boundary, o = t.rootBoundary, r = t.padding, a = t.flipVariations, c = t.allowedAutoPlacements, u = c === void 0 ? Bt : c, d = We(n), h = d ? a ? Ht : Ht.filter(function(g) {
        return We(g) === d;
      }) : je, b = h.filter(function(g) {
        return u.indexOf(g) >= 0;
      });
      b.length === 0 && (b = h);
      var p = b.reduce(function(g, m) {
        return g[m] = Re(i, { placement: m, boundary: s, rootBoundary: o, padding: r })[re(m)], g;
      }, {});
      return Object.keys(p).sort(function(g, m) {
        return p[g] - p[m];
      });
    }
    const tn = { name: "flip", enabled: !0, phase: "main", fn: function(i) {
      var e = i.state, t = i.options, n = i.name;
      if (!e.modifiersData[n]._skip) {
        for (var s = t.mainAxis, o = s === void 0 || s, r = t.altAxis, a = r === void 0 || r, c = t.fallbackPlacements, u = t.padding, d = t.boundary, h = t.rootBoundary, b = t.altBoundary, p = t.flipVariations, g = p === void 0 || p, m = t.allowedAutoPlacements, _ = e.options.placement, C = re(_), k = c || (C !== _ && g ? function(x) {
          if (re(x) === dt)
            return [];
          var H = gt(x);
          return [Gi(x), H, Gi(H)];
        }(_) : [gt(_)]), y = [_].concat(k).reduce(function(x, H) {
          return x.concat(re(H) === dt ? Ks(e, { placement: H, boundary: d, rootBoundary: h, padding: u, flipVariations: g, allowedAutoPlacements: m }) : H);
        }, []), E = e.rects.reference, v = e.rects.popper, w = /* @__PURE__ */ new Map(), A = !0, O = y[0], T = 0; T < y.length; T++) {
          var S = y[T], V = re(S), ne = We(S) === ve, F = [j, R].indexOf(V) >= 0, Q = F ? "width" : "height", G = Re(e, { placement: S, boundary: d, rootBoundary: h, altBoundary: b, padding: u }), L = F ? ne ? z : M : ne ? R : j;
          E[Q] > v[Q] && (L = gt(L));
          var ae = gt(L), le = [];
          if (o && le.push(G[V] <= 0), a && le.push(G[L] <= 0, G[ae] <= 0), le.every(function(x) {
            return x;
          })) {
            O = S, A = !1;
            break;
          }
          w.set(S, le);
        }
        if (A)
          for (var Ve = function(x) {
            var H = y.find(function(J) {
              var be = w.get(J);
              if (be)
                return be.slice(0, x).every(function(Ct) {
                  return Ct;
                });
            });
            if (H)
              return O = H, "break";
          }, N = g ? 3 : 1; N > 0 && Ve(N) !== "break"; N--)
            ;
        e.placement !== O && (e.modifiersData[n]._skip = !0, e.placement = O, e.reset = !0);
      }
    }, requiresIfExists: ["offset"], data: { _skip: !1 } };
    function nn(i, e, t) {
      return t === void 0 && (t = { x: 0, y: 0 }), { top: i.top - e.height - t.y, right: i.right - e.width + t.x, bottom: i.bottom - e.height + t.y, left: i.left - e.width - t.x };
    }
    function sn(i) {
      return [j, z, R, M].some(function(e) {
        return i[e] >= 0;
      });
    }
    const on = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(i) {
      var e = i.state, t = i.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = Re(e, { elementContext: "reference" }), a = Re(e, { altBoundary: !0 }), c = nn(r, n), u = nn(a, s, o), d = sn(c), h = sn(u);
      e.modifiersData[t] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": h });
    } }, rn = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(i) {
      var e = i.state, t = i.options, n = i.name, s = t.offset, o = s === void 0 ? [0, 0] : s, r = Bt.reduce(function(d, h) {
        return d[h] = function(b, p, g) {
          var m = re(b), _ = [M, j].indexOf(m) >= 0 ? -1 : 1, C = typeof g == "function" ? g(Object.assign({}, p, { placement: b })) : g, k = C[0], y = C[1];
          return k = k || 0, y = (y || 0) * _, [M, z].indexOf(m) >= 0 ? { x: y, y: k } : { x: k, y };
        }(h, e.rects, o), d;
      }, {}), a = r[e.placement], c = a.x, u = a.y;
      e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += u), e.modifiersData[n] = r;
    } }, Jt = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(i) {
      var e = i.state, t = i.name;
      e.modifiersData[t] = en({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
    }, data: {} }, an = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(i) {
      var e = i.state, t = i.options, n = i.name, s = t.mainAxis, o = s === void 0 || s, r = t.altAxis, a = r !== void 0 && r, c = t.boundary, u = t.rootBoundary, d = t.altBoundary, h = t.padding, b = t.tether, p = b === void 0 || b, g = t.tetherOffset, m = g === void 0 ? 0 : g, _ = Re(e, { boundary: c, rootBoundary: u, padding: h, altBoundary: d }), C = re(e.placement), k = We(e.placement), y = !k, E = Vt(C), v = E === "x" ? "y" : "x", w = e.modifiersData.popperOffsets, A = e.rects.reference, O = e.rects.popper, T = typeof m == "function" ? m(Object.assign({}, e.rects, { placement: e.placement })) : m, S = typeof T == "number" ? { mainAxis: T, altAxis: T } : Object.assign({ mainAxis: 0, altAxis: 0 }, T), V = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, ne = { x: 0, y: 0 };
      if (w) {
        if (o) {
          var F, Q = E === "y" ? j : M, G = E === "y" ? R : z, L = E === "y" ? "height" : "width", ae = w[E], le = ae + _[Q], Ve = ae - _[G], N = p ? -O[L] / 2 : 0, x = k === ve ? A[L] : O[L], H = k === ve ? -O[L] : -A[L], J = e.elements.arrow, be = p && J ? qt(J) : { width: 0, height: 0 }, Ct = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, Xn = Ct[Q], Un = Ct[G], Ot = et(0, A[L], be[L]), Er = y ? A[L] / 2 - N - Ot - Xn - S.mainAxis : x - Ot - Xn - S.mainAxis, Ar = y ? -A[L] / 2 + N + Ot + Un + S.mainAxis : H + Ot + Un + S.mainAxis, ui = e.elements.arrow && Ze(e.elements.arrow), Tr = ui ? E === "y" ? ui.clientTop || 0 : ui.clientLeft || 0 : 0, Yn = (F = V == null ? void 0 : V[E]) != null ? F : 0, Cr = ae + Ar - Yn, Qn = et(p ? ft(le, ae + Er - Yn - Tr) : le, ae, p ? we(Ve, Cr) : Ve);
          w[E] = Qn, ne[E] = Qn - ae;
        }
        if (a) {
          var Gn, Or = E === "x" ? j : M, xr = E === "x" ? R : z, Le = w[v], xt = v === "y" ? "height" : "width", Jn = Le + _[Or], Zn = Le - _[xr], di = [j, M].indexOf(C) !== -1, es = (Gn = V == null ? void 0 : V[v]) != null ? Gn : 0, ts = di ? Jn : Le - A[xt] - O[xt] - es + S.altAxis, is = di ? Le + A[xt] + O[xt] - es - S.altAxis : Zn, ns = p && di ? function(kr, Lr, fi) {
            var ss = et(kr, Lr, fi);
            return ss > fi ? fi : ss;
          }(ts, Le, is) : et(p ? ts : Jn, Le, p ? is : Zn);
          w[v] = ns, ne[v] = ns - Le;
        }
        e.modifiersData[n] = ne;
      }
    }, requiresIfExists: ["offset"] };
    function Xs(i, e, t) {
      t === void 0 && (t = !1);
      var n, s, o = U(e), r = U(e) && function(h) {
        var b = h.getBoundingClientRect(), p = He(b.width) / h.offsetWidth || 1, g = He(b.height) / h.offsetHeight || 1;
        return p !== 1 || g !== 1;
      }(e), a = ge(e), c = Be(i, r, t), u = { scrollLeft: 0, scrollTop: 0 }, d = { x: 0, y: 0 };
      return (o || !o && !t) && ((oe(e) !== "body" || Qt(a)) && (u = (n = e) !== q(n) && U(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : Ut(n)), U(e) ? ((d = Be(e, !0)).x += e.clientLeft, d.y += e.clientTop) : a && (d.x = Yt(a))), { x: c.left + u.scrollLeft - d.x, y: c.top + u.scrollTop - d.y, width: c.width, height: c.height };
    }
    function Us(i) {
      var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), n = [];
      function s(o) {
        t.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach(function(r) {
          if (!t.has(r)) {
            var a = e.get(r);
            a && s(a);
          }
        }), n.push(o);
      }
      return i.forEach(function(o) {
        e.set(o.name, o);
      }), i.forEach(function(o) {
        t.has(o.name) || s(o);
      }), n;
    }
    var ln = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function cn() {
      for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
        e[t] = arguments[t];
      return !e.some(function(n) {
        return !(n && typeof n.getBoundingClientRect == "function");
      });
    }
    function _t(i) {
      i === void 0 && (i = {});
      var e = i, t = e.defaultModifiers, n = t === void 0 ? [] : t, s = e.defaultOptions, o = s === void 0 ? ln : s;
      return function(r, a, c) {
        c === void 0 && (c = o);
        var u, d, h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ln, o), modifiersData: {}, elements: { reference: r, popper: a }, attributes: {}, styles: {} }, b = [], p = !1, g = { state: h, setOptions: function(_) {
          var C = typeof _ == "function" ? _(h.options) : _;
          m(), h.options = Object.assign({}, o, h.options, C), h.scrollParents = { reference: ye(r) ? tt(r) : r.contextElement ? tt(r.contextElement) : [], popper: tt(a) };
          var k, y, E = function(v) {
            var w = Us(v);
            return zi.reduce(function(A, O) {
              return A.concat(w.filter(function(T) {
                return T.phase === O;
              }));
            }, []);
          }((k = [].concat(n, h.options.modifiers), y = k.reduce(function(v, w) {
            var A = v[w.name];
            return v[w.name] = A ? Object.assign({}, A, w, { options: Object.assign({}, A.options, w.options), data: Object.assign({}, A.data, w.data) }) : w, v;
          }, {}), Object.keys(y).map(function(v) {
            return y[v];
          })));
          return h.orderedModifiers = E.filter(function(v) {
            return v.enabled;
          }), h.orderedModifiers.forEach(function(v) {
            var w = v.name, A = v.options, O = A === void 0 ? {} : A, T = v.effect;
            if (typeof T == "function") {
              var S = T({ state: h, name: w, instance: g, options: O });
              b.push(S || function() {
              });
            }
          }), g.update();
        }, forceUpdate: function() {
          if (!p) {
            var _ = h.elements, C = _.reference, k = _.popper;
            if (cn(C, k)) {
              h.rects = { reference: Xs(C, Ze(k), h.options.strategy === "fixed"), popper: qt(k) }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(T) {
                return h.modifiersData[T.name] = Object.assign({}, T.data);
              });
              for (var y = 0; y < h.orderedModifiers.length; y++)
                if (h.reset !== !0) {
                  var E = h.orderedModifiers[y], v = E.fn, w = E.options, A = w === void 0 ? {} : w, O = E.name;
                  typeof v == "function" && (h = v({ state: h, options: A, name: O, instance: g }) || h);
                } else
                  h.reset = !1, y = -1;
            }
          }
        }, update: (u = function() {
          return new Promise(function(_) {
            g.forceUpdate(), _(h);
          });
        }, function() {
          return d || (d = new Promise(function(_) {
            Promise.resolve().then(function() {
              d = void 0, _(u());
            });
          })), d;
        }), destroy: function() {
          m(), p = !0;
        } };
        if (!cn(r, a))
          return g;
        function m() {
          b.forEach(function(_) {
            return _();
          }), b = [];
        }
        return g.setOptions(c).then(function(_) {
          !p && c.onFirstUpdate && c.onFirstUpdate(_);
        }), g;
      };
    }
    var Ys = _t(), Qs = _t({ defaultModifiers: [Xt, Jt, Kt, Rt] }), Zt = _t({ defaultModifiers: [Xt, Jt, Kt, Rt, rn, tn, an, Yi, on] });
    const hn = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: Hi, afterRead: ji, afterWrite: Ri, applyStyles: Rt, arrow: Yi, auto: dt, basePlacements: je, beforeMain: Mi, beforeRead: Ni, beforeWrite: Bi, bottom: R, clippingParents: $i, computeStyles: Kt, createPopper: Zt, createPopperBase: Ys, createPopperLite: Qs, detectOverflow: Re, end: Me, eventListeners: Xt, flip: tn, hide: on, left: M, main: Fi, modifierPhases: zi, offset: rn, placements: Bt, popper: Fe, popperGenerator: _t, popperOffsets: Jt, preventOverflow: an, read: Pi, reference: Ii, right: z, start: ve, top: j, variationPlacements: Ht, viewport: Ft, write: Wi }, Symbol.toStringTag, { value: "Module" })), un = "dropdown", Ee = ".bs.dropdown", ei = ".data-api", Gs = "ArrowUp", dn = "ArrowDown", Js = `hide${Ee}`, Zs = `hidden${Ee}`, eo = `show${Ee}`, to = `shown${Ee}`, fn = `click${Ee}${ei}`, pn = `keydown${Ee}${ei}`, io = `keyup${Ee}${ei}`, ze = "show", Ae = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', no = `${Ae}.${ze}`, bt = ".dropdown-menu", so = K() ? "top-end" : "top-start", oo = K() ? "top-start" : "top-end", ro = K() ? "bottom-end" : "bottom-start", ao = K() ? "bottom-start" : "bottom-end", lo = K() ? "left-start" : "right-start", co = K() ? "right-start" : "left-start", ho = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, uo = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class ie extends te {
      constructor(e, t) {
        super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = f.next(this._element, bt)[0] || f.prev(this._element, bt)[0] || f.findOne(bt, this._parent), this._inNavbar = this._detectNavbar();
      }
      static get Default() {
        return ho;
      }
      static get DefaultType() {
        return uo;
      }
      static get NAME() {
        return un;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (ee(this._element) || this._isShown())
          return;
        const e = { relatedTarget: this._element };
        if (!l.trigger(this._element, eo, e).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
            for (const t of [].concat(...document.body.children))
              l.on(t, "mouseover", rt);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ze), this._element.classList.add(ze), l.trigger(this._element, to, e);
        }
      }
      hide() {
        if (ee(this._element) || !this._isShown())
          return;
        const e = { relatedTarget: this._element };
        this._completeHide(e);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
      _completeHide(e) {
        if (!l.trigger(this._element, Js, e).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const t of [].concat(...document.body.children))
              l.off(t, "mouseover", rt);
          this._popper && this._popper.destroy(), this._menu.classList.remove(ze), this._element.classList.remove(ze), this._element.setAttribute("aria-expanded", "false"), ce.removeDataAttribute(this._menu, "popper"), l.trigger(this._element, Zs, e);
        }
      }
      _getConfig(e) {
        if (typeof (e = super._getConfig(e)).reference == "object" && !$(e.reference) && typeof e.reference.getBoundingClientRect != "function")
          throw new TypeError(`${un.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return e;
      }
      _createPopper() {
        if (hn === void 0)
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let e = this._element;
        this._config.reference === "parent" ? e = this._parent : $(this._config.reference) ? e = D(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
        const t = this._getPopperConfig();
        this._popper = Zt(e, this._menu, t);
      }
      _isShown() {
        return this._menu.classList.contains(ze);
      }
      _getPlacement() {
        const e = this._parent;
        if (e.classList.contains("dropend"))
          return lo;
        if (e.classList.contains("dropstart"))
          return co;
        if (e.classList.contains("dropup-center"))
          return "top";
        if (e.classList.contains("dropdown-center"))
          return "bottom";
        const t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return e.classList.contains("dropup") ? t ? oo : so : t ? ao : ro;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string" ? e.split(",").map((t) => Number.parseInt(t, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
      }
      _getPopperConfig() {
        const e = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
        return (this._inNavbar || this._config.display === "static") && (ce.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...W(this._config.popperConfig, [e]) };
      }
      _selectMenuItem({ key: e, target: t }) {
        const n = f.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((s) => I(s));
        n.length && Lt(n, t, e === dn, !n.includes(t)).focus();
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = ie.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
      static clearMenus(e) {
        if (e.button === 2 || e.type === "keyup" && e.key !== "Tab")
          return;
        const t = f.find(no);
        for (const n of t) {
          const s = ie.getInstance(n);
          if (!s || s._config.autoClose === !1)
            continue;
          const o = e.composedPath(), r = o.includes(s._menu);
          if (o.includes(s._element) || s._config.autoClose === "inside" && !r || s._config.autoClose === "outside" && r || s._menu.contains(e.target) && (e.type === "keyup" && e.key === "Tab" || /input|select|option|textarea|form/i.test(e.target.tagName)))
            continue;
          const a = { relatedTarget: s._element };
          e.type === "click" && (a.clickEvent = e), s._completeHide(a);
        }
      }
      static dataApiKeydownHandler(e) {
        const t = /input|textarea/i.test(e.target.tagName), n = e.key === "Escape", s = [Gs, dn].includes(e.key);
        if (!s && !n || t && !n)
          return;
        e.preventDefault();
        const o = this.matches(Ae) ? this : f.prev(this, Ae)[0] || f.next(this, Ae)[0] || f.findOne(Ae, e.delegateTarget.parentNode), r = ie.getOrCreateInstance(o);
        if (s)
          return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
        r._isShown() && (e.stopPropagation(), r.hide(), o.focus());
      }
    }
    l.on(document, pn, Ae, ie.dataApiKeydownHandler), l.on(document, pn, bt, ie.dataApiKeydownHandler), l.on(document, fn, ie.clearMenus), l.on(document, io, ie.clearMenus), l.on(document, fn, Ae, function(i) {
      i.preventDefault(), ie.getOrCreateInstance(this).toggle();
    }), X(ie);
    const mn = "backdrop", gn = "show", _n = `mousedown.bs.${mn}`, fo = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, po = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class bn extends Ue {
      constructor(e) {
        super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
      }
      static get Default() {
        return fo;
      }
      static get DefaultType() {
        return po;
      }
      static get NAME() {
        return mn;
      }
      show(e) {
        if (!this._config.isVisible)
          return void W(e);
        this._append();
        const t = this._getElement();
        this._config.isAnimated && Xe(t), t.classList.add(gn), this._emulateAnimation(() => {
          W(e);
        });
      }
      hide(e) {
        this._config.isVisible ? (this._getElement().classList.remove(gn), this._emulateAnimation(() => {
          this.dispose(), W(e);
        })) : W(e);
      }
      dispose() {
        this._isAppended && (l.off(this._element, _n), this._element.remove(), this._isAppended = !1);
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
        }
        return this._element;
      }
      _configAfterMerge(e) {
        return e.rootElement = D(e.rootElement), e;
      }
      _append() {
        if (this._isAppended)
          return;
        const e = this._getElement();
        this._config.rootElement.append(e), l.on(e, _n, () => {
          W(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(e) {
        gi(e, this._getElement(), this._config.isAnimated);
      }
    }
    const vt = ".bs.focustrap", mo = `focusin${vt}`, go = `keydown.tab${vt}`, vn = "backward", _o = { autofocus: !0, trapElement: null }, bo = { autofocus: "boolean", trapElement: "element" };
    class yn extends Ue {
      constructor(e) {
        super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
      }
      static get Default() {
        return _o;
      }
      static get DefaultType() {
        return bo;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), l.off(document, vt), l.on(document, mo, (e) => this._handleFocusin(e)), l.on(document, go, (e) => this._handleKeydown(e)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, l.off(document, vt));
      }
      _handleFocusin(e) {
        const { trapElement: t } = this._config;
        if (e.target === document || e.target === t || t.contains(e.target))
          return;
        const n = f.focusableChildren(t);
        n.length === 0 ? t.focus() : this._lastTabNavDirection === vn ? n[n.length - 1].focus() : n[0].focus();
      }
      _handleKeydown(e) {
        e.key === "Tab" && (this._lastTabNavDirection = e.shiftKey ? vn : "forward");
      }
    }
    const wn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", En = ".sticky-top", yt = "padding-right", An = "margin-right";
    class ti {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, yt, (t) => t + e), this._setElementAttributes(wn, yt, (t) => t + e), this._setElementAttributes(En, An, (t) => t - e);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, yt), this._resetElementAttributes(wn, yt), this._resetElementAttributes(En, An);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
      _setElementAttributes(e, t, n) {
        const s = this.getWidth();
        this._applyManipulationCallback(e, (o) => {
          if (o !== this._element && window.innerWidth > o.clientWidth + s)
            return;
          this._saveInitialAttribute(o, t);
          const r = window.getComputedStyle(o).getPropertyValue(t);
          o.style.setProperty(t, `${n(Number.parseFloat(r))}px`);
        });
      }
      _saveInitialAttribute(e, t) {
        const n = e.style.getPropertyValue(t);
        n && ce.setDataAttribute(e, t, n);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (n) => {
          const s = ce.getDataAttribute(n, t);
          s !== null ? (ce.removeDataAttribute(n, t), n.style.setProperty(t, s)) : n.style.removeProperty(t);
        });
      }
      _applyManipulationCallback(e, t) {
        if ($(e))
          t(e);
        else
          for (const n of f.find(e, this._element))
            t(n);
      }
    }
    const Y = ".bs.modal", vo = `hide${Y}`, yo = `hidePrevented${Y}`, Tn = `hidden${Y}`, Cn = `show${Y}`, wo = `shown${Y}`, Eo = `resize${Y}`, Ao = `click.dismiss${Y}`, To = `mousedown.dismiss${Y}`, Co = `keydown.dismiss${Y}`, Oo = `click${Y}.data-api`, On = "modal-open", xn = "show", ii = "modal-static", xo = { backdrop: !0, focus: !0, keyboard: !0 }, ko = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class Te extends te {
      constructor(e, t) {
        super(e, t), this._dialog = f.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new ti(), this._addEventListeners();
      }
      static get Default() {
        return xo;
      }
      static get DefaultType() {
        return ko;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown || this._isTransitioning || l.trigger(this._element, Cn, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(On), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
      }
      hide() {
        this._isShown && !this._isTransitioning && (l.trigger(this._element, vo).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(xn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
      }
      dispose() {
        l.off(window, Y), l.off(this._dialog, Y), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new bn({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
      }
      _initializeFocusTrap() {
        return new yn({ trapElement: this._element });
      }
      _showElement(e) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const t = f.findOne(".modal-body", this._dialog);
        t && (t.scrollTop = 0), Xe(this._element), this._element.classList.add(xn), this._queueCallback(() => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, l.trigger(this._element, wo, { relatedTarget: e });
        }, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        l.on(this._element, Co, (e) => {
          e.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
        }), l.on(window, Eo, () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), l.on(this._element, To, (e) => {
          l.one(this._element, Ao, (t) => {
            this._element === e.target && this._element === t.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove(On), this._resetAdjustments(), this._scrollBar.reset(), l.trigger(this._element, Tn);
        });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (l.trigger(this._element, yo).defaultPrevented)
          return;
        const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY;
        t === "hidden" || this._element.classList.contains(ii) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(ii), this._queueCallback(() => {
          this._element.classList.remove(ii), this._queueCallback(() => {
            this._element.style.overflowY = t;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      _adjustDialog() {
        const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), n = t > 0;
        if (n && !e) {
          const s = K() ? "paddingLeft" : "paddingRight";
          this._element.style[s] = `${t}px`;
        }
        if (!n && e) {
          const s = K() ? "paddingRight" : "paddingLeft";
          this._element.style[s] = `${t}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      static jQueryInterface(e, t) {
        return this.each(function() {
          const n = Te.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (n[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }
    }
    l.on(document, Oo, '[data-bs-toggle="modal"]', function(i) {
      const e = f.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && i.preventDefault(), l.one(e, Cn, (n) => {
        n.defaultPrevented || l.one(e, Tn, () => {
          I(this) && this.focus();
        });
      });
      const t = f.findOne(".modal.show");
      t && Te.getInstance(t).hide(), Te.getOrCreateInstance(e).toggle(this);
    }), at(Te), X(Te);
    const ue = ".bs.offcanvas", kn = ".data-api", Lo = `load${ue}${kn}`, Ln = "show", Sn = "showing", Dn = "hiding", $n = ".offcanvas.show", So = `show${ue}`, Do = `shown${ue}`, $o = `hide${ue}`, In = `hidePrevented${ue}`, Nn = `hidden${ue}`, Io = `resize${ue}`, No = `click${ue}${kn}`, Po = `keydown.dismiss${ue}`, jo = { backdrop: !0, keyboard: !0, scroll: !1 }, Mo = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class de extends te {
      constructor(e, t) {
        super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      static get Default() {
        return jo;
      }
      static get DefaultType() {
        return Mo;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown || l.trigger(this._element, So, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new ti().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Sn), this._queueCallback(() => {
          this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Ln), this._element.classList.remove(Sn), l.trigger(this._element, Do, { relatedTarget: e });
        }, this._element, !0));
      }
      hide() {
        this._isShown && (l.trigger(this._element, $o).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Dn), this._backdrop.hide(), this._queueCallback(() => {
          this._element.classList.remove(Ln, Dn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new ti().reset(), l.trigger(this._element, Nn);
        }, this._element, !0)));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const e = !!this._config.backdrop;
        return new bn({ className: "offcanvas-backdrop", isVisible: e, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: e ? () => {
          this._config.backdrop !== "static" ? this.hide() : l.trigger(this._element, In);
        } : null });
      }
      _initializeFocusTrap() {
        return new yn({ trapElement: this._element });
      }
      _addEventListeners() {
        l.on(this._element, Po, (e) => {
          e.key === "Escape" && (this._config.keyboard ? this.hide() : l.trigger(this._element, In));
        });
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = de.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    l.on(document, No, '[data-bs-toggle="offcanvas"]', function(i) {
      const e = f.getElementFromSelector(this);
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), ee(this))
        return;
      l.one(e, Nn, () => {
        I(this) && this.focus();
      });
      const t = f.findOne($n);
      t && t !== e && de.getInstance(t).hide(), de.getOrCreateInstance(e).toggle(this);
    }), l.on(window, Lo, () => {
      for (const i of f.find($n))
        de.getOrCreateInstance(i).show();
    }), l.on(window, Io, () => {
      for (const i of f.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(i).position !== "fixed" && de.getOrCreateInstance(i).hide();
    }), at(de), X(de);
    const Pn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Fo = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Ho = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Bo = (i, e) => {
      const t = i.nodeName.toLowerCase();
      return e.includes(t) ? !Fo.has(t) || !!Ho.test(i.nodeValue) : e.filter((n) => n instanceof RegExp).some((n) => n.test(t));
    }, Wo = { allowList: Pn, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, Ro = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, zo = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class qo extends Ue {
      constructor(e) {
        super(), this._config = this._getConfig(e);
      }
      static get Default() {
        return Wo;
      }
      static get DefaultType() {
        return Ro;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content).map((e) => this._resolvePossibleFunction(e)).filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(e) {
        return this._checkContent(e), this._config.content = { ...this._config.content, ...e }, this;
      }
      toHtml() {
        const e = document.createElement("div");
        e.innerHTML = this._maybeSanitize(this._config.template);
        for (const [s, o] of Object.entries(this._config.content))
          this._setContent(e, o, s);
        const t = e.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
        return n && t.classList.add(...n.split(" ")), t;
      }
      _typeCheckConfig(e) {
        super._typeCheckConfig(e), this._checkContent(e.content);
      }
      _checkContent(e) {
        for (const [t, n] of Object.entries(e))
          super._typeCheckConfig({ selector: t, entry: n }, zo);
      }
      _setContent(e, t, n) {
        const s = f.findOne(n, e);
        s && ((t = this._resolvePossibleFunction(t)) ? $(t) ? this._putElementInTemplate(D(t), s) : this._config.html ? s.innerHTML = this._maybeSanitize(t) : s.textContent = t : s.remove());
      }
      _maybeSanitize(e) {
        return this._config.sanitize ? function(t, n, s) {
          if (!t.length)
            return t;
          if (s && typeof s == "function")
            return s(t);
          const o = new window.DOMParser().parseFromString(t, "text/html"), r = [].concat(...o.body.querySelectorAll("*"));
          for (const a of r) {
            const c = a.nodeName.toLowerCase();
            if (!Object.keys(n).includes(c)) {
              a.remove();
              continue;
            }
            const u = [].concat(...a.attributes), d = [].concat(n["*"] || [], n[c] || []);
            for (const h of u)
              Bo(h, d) || a.removeAttribute(h.nodeName);
          }
          return o.body.innerHTML;
        }(e, this._config.allowList, this._config.sanitizeFn) : e;
      }
      _resolvePossibleFunction(e) {
        return W(e, [this]);
      }
      _putElementInTemplate(e, t) {
        if (this._config.html)
          return t.innerHTML = "", void t.append(e);
        t.textContent = e.textContent;
      }
    }
    const Vo = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ni = "fade", wt = "show", jn = ".modal", Mn = "hide.bs.modal", it = "hover", si = "focus", Ko = { AUTO: "auto", TOP: "top", RIGHT: K() ? "left" : "right", BOTTOM: "bottom", LEFT: K() ? "right" : "left" }, Xo = { allowList: Pn, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 6], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, Uo = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
    class Ce extends te {
      constructor(e, t) {
        if (hn === void 0)
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      static get Default() {
        return Xo;
      }
      static get DefaultType() {
        return Uo;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout), l.off(this._element.closest(jn), Mn, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled)
          return;
        const e = l.trigger(this._element, this.constructor.eventName("show")), t = (pi(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (e.defaultPrevented || !t)
          return;
        this._disposePopper();
        const n = this._getTipElement();
        this._element.setAttribute("aria-describedby", n.getAttribute("id"));
        const { container: s } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(n), l.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(wt), "ontouchstart" in document.documentElement)
          for (const o of [].concat(...document.body.children))
            l.on(o, "mouseover", rt);
        this._queueCallback(() => {
          l.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
      hide() {
        if (this._isShown() && !l.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(wt), "ontouchstart" in document.documentElement)
            for (const e of [].concat(...document.body.children))
              l.off(e, "mouseover", rt);
          this._activeTrigger.click = !1, this._activeTrigger[si] = !1, this._activeTrigger[it] = !1, this._isHovered = null, this._queueCallback(() => {
            this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), l.trigger(this._element, this.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
      _createTipElement(e) {
        const t = this._getTemplateFactory(e).toHtml();
        if (!t)
          return null;
        t.classList.remove(ni, wt), t.classList.add(`bs-${this.constructor.NAME}-auto`);
        const n = ((s) => {
          do
            s += Math.floor(1e6 * Math.random());
          while (document.getElementById(s));
          return s;
        })(this.constructor.NAME).toString();
        return t.setAttribute("id", n), this._isAnimated() && t.classList.add(ni), t;
      }
      setContent(e) {
        this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(e) {
        return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new qo({ ...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
      _initializeOnDelegatedTarget(e) {
        return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
      }
      _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(ni);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(wt);
      }
      _createPopper(e) {
        const t = W(this._config.placement, [this, e, this._element]), n = Ko[t.toUpperCase()];
        return Zt(this._element, e, this._getPopperConfig(n));
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string" ? e.split(",").map((t) => Number.parseInt(t, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
      }
      _resolvePossibleFunction(e) {
        return W(e, [this._element]);
      }
      _getPopperConfig(e) {
        const t = { placement: e, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: (n) => {
          this._getTipElement().setAttribute("data-popper-placement", n.state.placement);
        } }] };
        return { ...t, ...W(this._config.popperConfig, [t]) };
      }
      _setListeners() {
        const e = this._config.trigger.split(" ");
        for (const t of e)
          if (t === "click")
            l.on(this._element, this.constructor.eventName("click"), this._config.selector, (n) => {
              this._initializeOnDelegatedTarget(n).toggle();
            });
          else if (t !== "manual") {
            const n = t === it ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), s = t === it ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            l.on(this._element, n, this._config.selector, (o) => {
              const r = this._initializeOnDelegatedTarget(o);
              r._activeTrigger[o.type === "focusin" ? si : it] = !0, r._enter();
            }), l.on(this._element, s, this._config.selector, (o) => {
              const r = this._initializeOnDelegatedTarget(o);
              r._activeTrigger[o.type === "focusout" ? si : it] = r._element.contains(o.relatedTarget), r._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, l.on(this._element.closest(jn), Mn, this._hideModalHandler);
      }
      _fixTitle() {
        const e = this._element.getAttribute("title");
        e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
          this._isHovered && this.show();
        }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
      }
      _setTimeout(e, t) {
        clearTimeout(this._timeout), this._timeout = setTimeout(e, t);
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(e) {
        const t = ce.getDataAttributes(this._element);
        for (const n of Object.keys(t))
          Vo.has(n) && delete t[n];
        return e = { ...t, ...typeof e == "object" && e ? e : {} }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
      }
      _configAfterMerge(e) {
        return e.container = e.container === !1 ? document.body : D(e.container), typeof e.delay == "number" && (e.delay = { show: e.delay, hide: e.delay }), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
      }
      _getDelegateConfig() {
        const e = {};
        for (const [t, n] of Object.entries(this._config))
          this.constructor.Default[t] !== n && (e[t] = n);
        return e.selector = !1, e.trigger = "manual", e;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Ce.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    X(Ce);
    const Yo = { ...Ce.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, Qo = { ...Ce.DefaultType, content: "(null|string|element|function)" };
    class Et extends Ce {
      static get Default() {
        return Yo;
      }
      static get DefaultType() {
        return Qo;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Et.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    X(Et);
    const oi = ".bs.scrollspy", Go = `activate${oi}`, Fn = `click${oi}`, Jo = `load${oi}.data-api`, qe = "active", ri = "[href]", Hn = ".nav-link", Zo = `${Hn}, .nav-item > ${Hn}, .list-group-item`, er = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] }, tr = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
    class nt extends te {
      constructor(e, t) {
        super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
      }
      static get Default() {
        return er;
      }
      static get DefaultType() {
        return tr;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const e of this._observableSections.values())
          this._observer.observe(e);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(e) {
        return e.target = D(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((t) => Number.parseFloat(t))), e;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (l.off(this._config.target, Fn), l.on(this._config.target, Fn, ri, (e) => {
          const t = this._observableSections.get(e.target.hash);
          if (t) {
            e.preventDefault();
            const n = this._rootElement || window, s = t.offsetTop - this._element.offsetTop;
            if (n.scrollTo)
              return void n.scrollTo({ top: s, behavior: "smooth" });
            n.scrollTop = s;
          }
        }));
      }
      _getNewObserver() {
        const e = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
        return new IntersectionObserver((t) => this._observerCallback(t), e);
      }
      _observerCallback(e) {
        const t = (r) => this._targetLinks.get(`#${r.target.id}`), n = (r) => {
          this._previousScrollData.visibleEntryTop = r.target.offsetTop, this._process(t(r));
        }, s = (this._rootElement || document.documentElement).scrollTop, o = s >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = s;
        for (const r of e) {
          if (!r.isIntersecting) {
            this._activeTarget = null, this._clearActiveClass(t(r));
            continue;
          }
          const a = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (o && a) {
            if (n(r), !s)
              return;
          } else
            o || a || n(r);
        }
      }
      _initializeTargetsAndObservables() {
        this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
        const e = f.find(ri, this._config.target);
        for (const t of e) {
          if (!t.hash || ee(t))
            continue;
          const n = f.findOne(decodeURI(t.hash), this._element);
          I(n) && (this._targetLinks.set(decodeURI(t.hash), t), this._observableSections.set(t.hash, n));
        }
      }
      _process(e) {
        this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(qe), this._activateParents(e), l.trigger(this._element, Go, { relatedTarget: e }));
      }
      _activateParents(e) {
        if (e.classList.contains("dropdown-item"))
          f.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(qe);
        else
          for (const t of f.parents(e, ".nav, .list-group"))
            for (const n of f.prev(t, Zo))
              n.classList.add(qe);
      }
      _clearActiveClass(e) {
        e.classList.remove(qe);
        const t = f.find(`${ri}.${qe}`, e);
        for (const n of t)
          n.classList.remove(qe);
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = nt.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(window, Jo, () => {
      for (const i of f.find('[data-bs-spy="scroll"]'))
        nt.getOrCreateInstance(i);
    }), X(nt);
    const Oe = ".bs.tab", ir = `hide${Oe}`, nr = `hidden${Oe}`, sr = `show${Oe}`, or = `shown${Oe}`, rr = `click${Oe}`, ar = `keydown${Oe}`, lr = `load${Oe}`, cr = "ArrowLeft", Bn = "ArrowRight", hr = "ArrowUp", Wn = "ArrowDown", ai = "Home", Rn = "End", xe = "active", zn = "fade", li = "show", qn = ".dropdown-toggle", ci = `:not(${qn})`, Vn = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', hi = `.nav-link${ci}, .list-group-item${ci}, [role="tab"]${ci}, ${Vn}`, ur = `.${xe}[data-bs-toggle="tab"], .${xe}[data-bs-toggle="pill"], .${xe}[data-bs-toggle="list"]`;
    class ke extends te {
      constructor(e) {
        super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), l.on(this._element, ar, (t) => this._keydown(t)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const e = this._element;
        if (this._elemIsActive(e))
          return;
        const t = this._getActiveElem(), n = t ? l.trigger(t, ir, { relatedTarget: e }) : null;
        l.trigger(e, sr, { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
      }
      _activate(e, t) {
        e && (e.classList.add(xe), this._activate(f.getElementFromSelector(e)), this._queueCallback(() => {
          e.getAttribute("role") === "tab" ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), l.trigger(e, or, { relatedTarget: t })) : e.classList.add(li);
        }, e, e.classList.contains(zn)));
      }
      _deactivate(e, t) {
        e && (e.classList.remove(xe), e.blur(), this._deactivate(f.getElementFromSelector(e)), this._queueCallback(() => {
          e.getAttribute("role") === "tab" ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), l.trigger(e, nr, { relatedTarget: t })) : e.classList.remove(li);
        }, e, e.classList.contains(zn)));
      }
      _keydown(e) {
        if (![cr, Bn, hr, Wn, ai, Rn].includes(e.key))
          return;
        e.stopPropagation(), e.preventDefault();
        const t = this._getChildren().filter((s) => !ee(s));
        let n;
        if ([ai, Rn].includes(e.key))
          n = t[e.key === ai ? 0 : t.length - 1];
        else {
          const s = [Bn, Wn].includes(e.key);
          n = Lt(t, e.target, s, !0);
        }
        n && (n.focus({ preventScroll: !0 }), ke.getOrCreateInstance(n).show());
      }
      _getChildren() {
        return f.find(hi, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((e) => this._elemIsActive(e)) || null;
      }
      _setInitialAttributes(e, t) {
        this._setAttributeIfNotExists(e, "role", "tablist");
        for (const n of t)
          this._setInitialAttributesOnChild(n);
      }
      _setInitialAttributesOnChild(e) {
        e = this._getInnerElement(e);
        const t = this._elemIsActive(e), n = this._getOuterElement(e);
        e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e);
      }
      _setInitialAttributesOnTargetPanel(e) {
        const t = f.getElementFromSelector(e);
        t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `${e.id}`));
      }
      _toggleDropDown(e, t) {
        const n = this._getOuterElement(e);
        if (!n.classList.contains("dropdown"))
          return;
        const s = (o, r) => {
          const a = f.findOne(o, n);
          a && a.classList.toggle(r, t);
        };
        s(qn, xe), s(".dropdown-menu", li), n.setAttribute("aria-expanded", t);
      }
      _setAttributeIfNotExists(e, t, n) {
        e.hasAttribute(t) || e.setAttribute(t, n);
      }
      _elemIsActive(e) {
        return e.classList.contains(xe);
      }
      _getInnerElement(e) {
        return e.matches(hi) ? e : f.findOne(hi, e);
      }
      _getOuterElement(e) {
        return e.closest(".nav-item, .list-group-item") || e;
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = ke.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(document, rr, Vn, function(i) {
      ["A", "AREA"].includes(this.tagName) && i.preventDefault(), ee(this) || ke.getOrCreateInstance(this).show();
    }), l.on(window, lr, () => {
      for (const i of f.find(ur))
        ke.getOrCreateInstance(i);
    }), X(ke);
    const _e = ".bs.toast", dr = `mouseover${_e}`, fr = `mouseout${_e}`, pr = `focusin${_e}`, mr = `focusout${_e}`, gr = `hide${_e}`, _r = `hidden${_e}`, br = `show${_e}`, vr = `shown${_e}`, Kn = "hide", At = "show", Tt = "showing", yr = { animation: "boolean", autohide: "boolean", delay: "number" }, wr = { animation: !0, autohide: !0, delay: 5e3 };
    class st extends te {
      constructor(e, t) {
        super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      static get Default() {
        return wr;
      }
      static get DefaultType() {
        return yr;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        l.trigger(this._element, br).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Kn), Xe(this._element), this._element.classList.add(At, Tt), this._queueCallback(() => {
          this._element.classList.remove(Tt), l.trigger(this._element, vr), this._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
      hide() {
        this.isShown() && (l.trigger(this._element, gr).defaultPrevented || (this._element.classList.add(Tt), this._queueCallback(() => {
          this._element.classList.add(Kn), this._element.classList.remove(Tt, At), l.trigger(this._element, _r);
        }, this._element, this._config.animation)));
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(At), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(At);
      }
      _maybeScheduleHide() {
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
          this.hide();
        }, this._config.delay)));
      }
      _onInteraction(e, t) {
        switch (e.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = t;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = t;
        }
        if (t)
          return void this._clearTimeout();
        const n = e.relatedTarget;
        this._element === n || this._element.contains(n) || this._maybeScheduleHide();
      }
      _setListeners() {
        l.on(this._element, dr, (e) => this._onInteraction(e, !0)), l.on(this._element, fr, (e) => this._onInteraction(e, !1)), l.on(this._element, pr, (e) => this._onInteraction(e, !0)), l.on(this._element, mr, (e) => this._onInteraction(e, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = st.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return at(st), X(st), { Alert: Ye, Button: Qe, Carousel: Ie, Collapse: Pe, Dropdown: ie, Modal: Te, Offcanvas: de, Popover: Et, ScrollSpy: nt, Tab: ke, Toast: st, Tooltip: Ce };
  });
})(Fr);
const Hr = $r({
  name: "testTabs",
  setup() {
    const B = Mr(), Z = {
      aaCom: ls,
      bbCom: as,
      ccCom: rs
    }, P = os(0), fe = Ir(() => {
      switch (B.myTabs[P.value]) {
        case "aaCom":
          return ls;
        case "bbCom":
          return as;
        case "ccCom":
          return rs;
      }
    });
    Nr(() => {
      console.log("components list:", Z);
      const $ = Object.keys(Z), D = Object.entries(Z);
      for (let I = 0; I < D.length; I++) {
        const ee = D[I];
        console.log(`arrEntries [${I}]:`, ee), console.log(`typeof objCom [${I}]:`, typeof ee);
      }
      console.log("arrEntries:", D), $.forEach((I) => {
        console.log(I);
      });
      for (let I = 0; I < 3; I++)
        console.log(`components [${I}]:`, Z.aaCom);
    });
    const pe = os(B.myTabs);
    function Ke($) {
      B.addTab($), pe.value = B.myTabs;
      let D = B.myTabs.indexOf($);
      D !== -1 && (P.value = D);
    }
    function ot($) {
      let D = B.myTabs.indexOf($);
      B.removeTab($), pe.value = B.myTabs, D > 0 ? P.value = D - 1 : P.value = 0;
    }
    return {
      addTab: Ke,
      removeTab: ot,
      tabsRef: pe,
      activeTab: P,
      currentTabComponent: fe,
      tabsStore: B
    };
  },
  computed: {
    tabs() {
      return this.tabsRef = this.tabsStore.myTabs, this.tabsRef;
    }
  },
  methods: {
    // addTab(componentName: any) {
    //   // 更新 Vuex store 中的 tabs 状态
    //   // this.$store.commit("addTab", componentName);
    //   store.commit("tabs/addTabs", componentName);
    //   this.tabsRef = store.state.tabs.myTabs;
    // },
    changeTab(B) {
      const Z = this.tabsStore.myTabs.indexOf(B);
      Z != -1 && (this.activeTab = Z);
    }
  }
}), Br = { class: "container" };
function Wr(B, Z, P, fe, pe, Ke) {
  return Pr(), jr("div", Br, Z[0] || (Z[0] = [
    se("ul", {
      class: "nav nav-tabs",
      role: "tablist"
    }, [
      se("li", { class: "nav-item" }, [
        se("a", {
          class: "nav-link active",
          "data-bs-toggle": "tab",
          href: "#Discuss1",
          role: "tab"
        }, "教师答疑")
      ]),
      se("li", { class: "nav-item" }, [
        se("a", {
          class: "nav-link",
          "data-bs-toggle": "tab",
          href: "#Discuss2",
          role: "tab"
        }, "综合讨论")
      ]),
      se("li", { class: "nav-item" }, [
        se("a", {
          class: "nav-link",
          "data-bs-toggle": "tab",
          href: "#Discuss3",
          role: "tab"
        }, "小组讨论")
      ])
    ], -1),
    se("div", { class: "tab-content" }, [
      se("div", {
        id: "Discuss1",
        class: "tab-pane fade show active"
      }, " aaaa "),
      se("div", {
        id: "Discuss2",
        class: "tab-pane fade"
      }, " bbbb "),
      se("div", {
        id: "Discuss3",
        class: "tab-pane fade"
      }, " cccc ")
    ], -1)
  ]));
}
const Vr = /* @__PURE__ */ Dr(Hr, [["render", Wr]]);
export {
  Vr as default
};
