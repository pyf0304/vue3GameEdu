import { V as lo, _ as wt, W as co } from "./index-72dceb29.mjs";
import { defineComponent as At, ref as be, toRefs as oi, openBlock as Et, createElementBlock as Tt, Fragment as ri, createElementVNode as H, computed as ho, onMounted as uo } from "vue";
var fo = { exports: {} };
/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(x, y) {
  (function(P, F) {
    x.exports = F();
  })(lo, function() {
    const P = "transitionend", F = (i) => {
      let e = i.getAttribute("data-bs-target");
      if (!e || e === "#") {
        let t = i.getAttribute("href");
        if (!t || !t.includes("#") && !t.startsWith("."))
          return null;
        t.includes("#") && !t.startsWith("#") && (t = `#${t.split("#")[1]}`), e = t && t !== "#" ? t.trim() : null;
      }
      return e;
    }, W = (i) => {
      const e = F(i);
      return e && document.querySelector(e) ? e : null;
    }, I = (i) => {
      const e = F(i);
      return e ? document.querySelector(e) : null;
    }, re = (i) => {
      i.dispatchEvent(new Event(P));
    }, S = (i) => !(!i || typeof i != "object") && (i.jquery !== void 0 && (i = i[0]), i.nodeType !== void 0), j = (i) => S(i) ? i.jquery ? i[0] : i : typeof i == "string" && i.length > 0 ? document.querySelector(i) : null, M = (i) => {
      if (!S(i) || i.getClientRects().length === 0)
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
    }, ie = (i) => !i || i.nodeType !== Node.ELEMENT_NODE || !!i.classList.contains("disabled") || (i.disabled !== void 0 ? i.disabled : i.hasAttribute("disabled") && i.getAttribute("disabled") !== "false"), ai = (i) => {
      if (!document.documentElement.attachShadow)
        return null;
      if (typeof i.getRootNode == "function") {
        const e = i.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return i instanceof ShadowRoot ? i : i.parentNode ? ai(i.parentNode) : null;
    }, Ge = () => {
    }, He = (i) => {
      i.offsetHeight;
    }, li = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Ct = [], U = () => document.documentElement.dir === "rtl", G = (i) => {
      var e;
      e = () => {
        const t = li();
        if (t) {
          const n = i.NAME, s = t.fn[n];
          t.fn[n] = i.jQueryInterface, t.fn[n].Constructor = i, t.fn[n].noConflict = () => (t.fn[n] = s, i.jQueryInterface);
        }
      }, document.readyState === "loading" ? (Ct.length || document.addEventListener("DOMContentLoaded", () => {
        for (const t of Ct)
          t();
      }), Ct.push(e)) : e();
    }, ue = (i) => {
      typeof i == "function" && i();
    }, ci = (i, e, t = !0) => {
      if (!t)
        return void ue(i);
      const n = ((r) => {
        if (!r)
          return 0;
        let { transitionDuration: a, transitionDelay: c } = window.getComputedStyle(r);
        const u = Number.parseFloat(a), d = Number.parseFloat(c);
        return u || d ? (a = a.split(",")[0], c = c.split(",")[0], 1e3 * (Number.parseFloat(a) + Number.parseFloat(c))) : 0;
      })(e) + 5;
      let s = !1;
      const o = ({ target: r }) => {
        r === e && (s = !0, e.removeEventListener(P, o), ue(i));
      };
      e.addEventListener(P, o), setTimeout(() => {
        s || re(e);
      }, n);
    }, xt = (i, e, t, n) => {
      const s = i.length;
      let o = i.indexOf(e);
      return o === -1 ? !t && n ? i[s - 1] : i[0] : (o += t ? 1 : -1, n && (o = (o + s) % s), i[Math.max(0, Math.min(o, s - 1))]);
    }, Qn = /[^.]*(?=\..*)\.|.*/, Un = /\..*/, Gn = /::\d+$/, Ot = {};
    let hi = 1;
    const ui = { mouseenter: "mouseover", mouseleave: "mouseout" }, Zn = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
    function di(i, e) {
      return e && `${e}::${hi++}` || i.uidEvent || hi++;
    }
    function fi(i) {
      const e = di(i);
      return i.uidEvent = e, Ot[e] = Ot[e] || {}, Ot[e];
    }
    function pi(i, e, t = null) {
      return Object.values(i).find((n) => n.callable === e && n.delegationSelector === t);
    }
    function mi(i, e, t) {
      const n = typeof e == "string", s = n ? t : e || t;
      let o = _i(i);
      return Zn.has(o) || (o = i), [n, s, o];
    }
    function gi(i, e, t, n, s) {
      if (typeof e != "string" || !i)
        return;
      let [o, r, a] = mi(e, t, n);
      e in ui && (r = ((m) => function(p) {
        if (!p.relatedTarget || p.relatedTarget !== p.delegateTarget && !p.delegateTarget.contains(p.relatedTarget))
          return m.call(this, p);
      })(r));
      const c = fi(i), u = c[a] || (c[a] = {}), d = pi(u, r, o ? t : null);
      if (d)
        return void (d.oneOff = d.oneOff && s);
      const h = di(r, e.replace(Qn, "")), b = o ? function(f, m, p) {
        return function g(O) {
          const D = f.querySelectorAll(m);
          for (let { target: w } = O; w && w !== this; w = w.parentNode)
            for (const E of D)
              if (E === w)
                return Lt(O, { delegateTarget: w }), g.oneOff && l.off(f, O.type, m, p), p.apply(w, [O]);
        };
      }(i, t, r) : function(f, m) {
        return function p(g) {
          return Lt(g, { delegateTarget: f }), p.oneOff && l.off(f, g.type, m), m.apply(f, [g]);
        };
      }(i, r);
      b.delegationSelector = o ? t : null, b.callable = r, b.oneOff = s, b.uidEvent = h, u[h] = b, i.addEventListener(a, b, o);
    }
    function kt(i, e, t, n, s) {
      const o = pi(e[t], n, s);
      o && (i.removeEventListener(t, o, !!s), delete e[t][o.uidEvent]);
    }
    function Jn(i, e, t, n) {
      const s = e[t] || {};
      for (const o of Object.keys(s))
        if (o.includes(n)) {
          const r = s[o];
          kt(i, e, t, r.callable, r.delegationSelector);
        }
    }
    function _i(i) {
      return i = i.replace(Un, ""), ui[i] || i;
    }
    const l = { on(i, e, t, n) {
      gi(i, e, t, n, !1);
    }, one(i, e, t, n) {
      gi(i, e, t, n, !0);
    }, off(i, e, t, n) {
      if (typeof e != "string" || !i)
        return;
      const [s, o, r] = mi(e, t, n), a = r !== e, c = fi(i), u = c[r] || {}, d = e.startsWith(".");
      if (o === void 0) {
        if (d)
          for (const h of Object.keys(c))
            Jn(i, c, h, e.slice(1));
        for (const h of Object.keys(u)) {
          const b = h.replace(Gn, "");
          if (!a || e.includes(b)) {
            const f = u[h];
            kt(i, c, r, f.callable, f.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(u).length)
          return;
        kt(i, c, r, o, s ? t : null);
      }
    }, trigger(i, e, t) {
      if (typeof e != "string" || !i)
        return null;
      const n = li();
      let s = null, o = !0, r = !0, a = !1;
      e !== _i(e) && n && (s = n.Event(e, t), n(i).trigger(s), o = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), a = s.isDefaultPrevented());
      let c = new Event(e, { bubbles: o, cancelable: !0 });
      return c = Lt(c, t), a && c.preventDefault(), r && i.dispatchEvent(c), c.defaultPrevented && s && s.preventDefault(), c;
    } };
    function Lt(i, e) {
      for (const [t, n] of Object.entries(e || {}))
        try {
          i[t] = n;
        } catch {
          Object.defineProperty(i, t, { configurable: !0, get: () => n });
        }
      return i;
    }
    const me = /* @__PURE__ */ new Map(), Dt = { set(i, e, t) {
      me.has(i) || me.set(i, /* @__PURE__ */ new Map());
      const n = me.get(i);
      n.has(e) || n.size === 0 ? n.set(e, t) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
    }, get: (i, e) => me.has(i) && me.get(i).get(e) || null, remove(i, e) {
      if (!me.has(i))
        return;
      const t = me.get(i);
      t.delete(e), t.size === 0 && me.delete(i);
    } };
    function bi(i) {
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
    function St(i) {
      return i.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
    }
    const de = { setDataAttribute(i, e, t) {
      i.setAttribute(`data-bs-${St(e)}`, t);
    }, removeDataAttribute(i, e) {
      i.removeAttribute(`data-bs-${St(e)}`);
    }, getDataAttributes(i) {
      if (!i)
        return {};
      const e = {}, t = Object.keys(i.dataset).filter((n) => n.startsWith("bs") && !n.startsWith("bsConfig"));
      for (const n of t) {
        let s = n.replace(/^bs/, "");
        s = s.charAt(0).toLowerCase() + s.slice(1, s.length), e[s] = bi(i.dataset[n]);
      }
      return e;
    }, getDataAttribute: (i, e) => bi(i.getAttribute(`data-bs-${St(e)}`)) };
    class Fe {
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
        const n = S(t) ? de.getDataAttribute(t, "config") : {};
        return { ...this.constructor.Default, ...typeof n == "object" ? n : {}, ...S(t) ? de.getDataAttributes(t) : {}, ...typeof e == "object" ? e : {} };
      }
      _typeCheckConfig(e, t = this.constructor.DefaultType) {
        for (const s of Object.keys(t)) {
          const o = t[s], r = e[s], a = S(r) ? "element" : (n = r) == null ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(o).test(a))
            throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${a}" but expected type "${o}".`);
        }
        var n;
      }
    }
    class ne extends Fe {
      constructor(e, t) {
        super(), (e = j(e)) && (this._element = e, this._config = this._getConfig(t), Dt.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        Dt.remove(this._element, this.constructor.DATA_KEY), l.off(this._element, this.constructor.EVENT_KEY);
        for (const e of Object.getOwnPropertyNames(this))
          this[e] = null;
      }
      _queueCallback(e, t, n = !0) {
        ci(e, t, n);
      }
      _getConfig(e) {
        return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
      }
      static getInstance(e) {
        return Dt.get(j(e), this.DATA_KEY);
      }
      static getOrCreateInstance(e, t = {}) {
        return this.getInstance(e) || new this(e, typeof t == "object" ? t : null);
      }
      static get VERSION() {
        return "5.2.3";
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
    const Ze = (i, e = "hide") => {
      const t = `click.dismiss${i.EVENT_KEY}`, n = i.NAME;
      l.on(document, t, `[data-bs-dismiss="${n}"]`, function(s) {
        if (["A", "AREA"].includes(this.tagName) && s.preventDefault(), ie(this))
          return;
        const o = I(this) || this.closest(`.${n}`);
        i.getOrCreateInstance(o)[e]();
      });
    };
    class We extends ne {
      static get NAME() {
        return "alert";
      }
      close() {
        if (l.trigger(this._element, "close.bs.alert").defaultPrevented)
          return;
        this._element.classList.remove("show");
        const e = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, e);
      }
      _destroyElement() {
        this._element.remove(), l.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = We.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    Ze(We, "close"), G(We);
    const vi = '[data-bs-toggle="button"]';
    class ze extends ne {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = ze.getOrCreateInstance(this);
          e === "toggle" && t[e]();
        });
      }
    }
    l.on(document, "click.bs.button.data-api", vi, (i) => {
      i.preventDefault();
      const e = i.target.closest(vi);
      ze.getOrCreateInstance(e).toggle();
    }), G(ze);
    const _ = { find: (i, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, i)), findOne: (i, e = document.documentElement) => Element.prototype.querySelector.call(e, i), children: (i, e) => [].concat(...i.children).filter((t) => t.matches(e)), parents(i, e) {
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
      return this.find(e, i).filter((t) => !ie(t) && M(t));
    } }, es = { endCallback: null, leftCallback: null, rightCallback: null }, ts = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
    class Je extends Fe {
      constructor(e, t) {
        super(), this._element = e, e && Je.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
      }
      static get Default() {
        return es;
      }
      static get DefaultType() {
        return ts;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        l.off(this._element, ".bs.swipe");
      }
      _start(e) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX;
      }
      _end(e) {
        this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), ue(this._config.endCallback);
      }
      _move(e) {
        this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const e = Math.abs(this._deltaX);
        if (e <= 40)
          return;
        const t = e / this._deltaX;
        this._deltaX = 0, t && ue(t > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents ? (l.on(this._element, "pointerdown.bs.swipe", (e) => this._start(e)), l.on(this._element, "pointerup.bs.swipe", (e) => this._end(e)), this._element.classList.add("pointer-event")) : (l.on(this._element, "touchstart.bs.swipe", (e) => this._start(e)), l.on(this._element, "touchmove.bs.swipe", (e) => this._move(e)), l.on(this._element, "touchend.bs.swipe", (e) => this._end(e)));
      }
      _eventIsPointerPenTouch(e) {
        return this._supportPointerEvents && (e.pointerType === "pen" || e.pointerType === "touch");
      }
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }
    const Re = "next", Oe = "prev", ke = "left", et = "right", It = "slid.bs.carousel", yi = "carousel", tt = "active", is = { ArrowLeft: et, ArrowRight: ke }, ns = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, ss = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
    class Le extends ne {
      constructor(e, t) {
        super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = _.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === yi && this.cycle();
      }
      static get Default() {
        return ns;
      }
      static get DefaultType() {
        return ss;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Re);
      }
      nextWhenVisible() {
        !document.hidden && M(this._element) && this.next();
      }
      prev() {
        this._slide(Oe);
      }
      pause() {
        this._isSliding && re(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
      }
      _maybeEnableCycle() {
        this._config.ride && (this._isSliding ? l.one(this._element, It, () => this.cycle()) : this.cycle());
      }
      to(e) {
        const t = this._getItems();
        if (e > t.length - 1 || e < 0)
          return;
        if (this._isSliding)
          return void l.one(this._element, It, () => this.to(e));
        const n = this._getItemIndex(this._getActive());
        if (n === e)
          return;
        const s = e > n ? Re : Oe;
        this._slide(s, t[e]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(e) {
        return e.defaultInterval = e.interval, e;
      }
      _addEventListeners() {
        this._config.keyboard && l.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)), this._config.pause === "hover" && (l.on(this._element, "mouseenter.bs.carousel", () => this.pause()), l.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && Je.isSupported() && this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const t of _.find(".carousel-item img", this._element))
          l.on(t, "dragstart.bs.carousel", (n) => n.preventDefault());
        const e = { leftCallback: () => this._slide(this._directionToOrder(ke)), rightCallback: () => this._slide(this._directionToOrder(et)), endCallback: () => {
          this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
        } };
        this._swipeHelper = new Je(this._element, e);
      }
      _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName))
          return;
        const t = is[e.key];
        t && (e.preventDefault(), this._slide(this._directionToOrder(t)));
      }
      _getItemIndex(e) {
        return this._getItems().indexOf(e);
      }
      _setActiveIndicatorElement(e) {
        if (!this._indicatorsElement)
          return;
        const t = _.findOne(".active", this._indicatorsElement);
        t.classList.remove(tt), t.removeAttribute("aria-current");
        const n = _.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
        n && (n.classList.add(tt), n.setAttribute("aria-current", "true"));
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
        const n = this._getActive(), s = e === Re, o = t || xt(this._getItems(), n, s, this._config.wrap);
        if (o === n)
          return;
        const r = this._getItemIndex(o), a = (h) => l.trigger(this._element, h, { relatedTarget: o, direction: this._orderToDirection(e), from: this._getItemIndex(n), to: r });
        if (a("slide.bs.carousel").defaultPrevented || !n || !o)
          return;
        const c = !!this._interval;
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = o;
        const u = s ? "carousel-item-start" : "carousel-item-end", d = s ? "carousel-item-next" : "carousel-item-prev";
        o.classList.add(d), He(o), n.classList.add(u), o.classList.add(u), this._queueCallback(() => {
          o.classList.remove(u, d), o.classList.add(tt), n.classList.remove(tt, d, u), this._isSliding = !1, a(It);
        }, n, this._isAnimated()), c && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return _.findOne(".active.carousel-item", this._element);
      }
      _getItems() {
        return _.find(".carousel-item", this._element);
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
      _directionToOrder(e) {
        return U() ? e === ke ? Oe : Re : e === ke ? Re : Oe;
      }
      _orderToDirection(e) {
        return U() ? e === Oe ? ke : et : e === Oe ? et : ke;
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Le.getOrCreateInstance(this, e);
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
    l.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(i) {
      const e = I(this);
      if (!e || !e.classList.contains(yi))
        return;
      i.preventDefault();
      const t = Le.getOrCreateInstance(e), n = this.getAttribute("data-bs-slide-to");
      return n ? (t.to(n), void t._maybeEnableCycle()) : de.getDataAttribute(this, "slide") === "next" ? (t.next(), void t._maybeEnableCycle()) : (t.prev(), void t._maybeEnableCycle());
    }), l.on(window, "load.bs.carousel.data-api", () => {
      const i = _.find('[data-bs-ride="carousel"]');
      for (const e of i)
        Le.getOrCreateInstance(e);
    }), G(Le);
    const Nt = "show", it = "collapse", nt = "collapsing", Pt = '[data-bs-toggle="collapse"]', os = { parent: null, toggle: !0 }, rs = { parent: "(null|element)", toggle: "boolean" };
    class De extends ne {
      constructor(e, t) {
        super(e, t), this._isTransitioning = !1, this._triggerArray = [];
        const n = _.find(Pt);
        for (const s of n) {
          const o = W(s), r = _.find(o).filter((a) => a === this._element);
          o !== null && r.length && this._triggerArray.push(s);
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
      }
      static get Default() {
        return os;
      }
      static get DefaultType() {
        return rs;
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
        if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((s) => s !== this._element).map((s) => De.getOrCreateInstance(s, { toggle: !1 }))), e.length && e[0]._isTransitioning || l.trigger(this._element, "show.bs.collapse").defaultPrevented)
          return;
        for (const s of e)
          s.hide();
        const t = this._getDimension();
        this._element.classList.remove(it), this._element.classList.add(nt), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const n = `scroll${t[0].toUpperCase() + t.slice(1)}`;
        this._queueCallback(() => {
          this._isTransitioning = !1, this._element.classList.remove(nt), this._element.classList.add(it, Nt), this._element.style[t] = "", l.trigger(this._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[t] = `${this._element[n]}px`;
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || l.trigger(this._element, "hide.bs.collapse").defaultPrevented)
          return;
        const e = this._getDimension();
        this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, He(this._element), this._element.classList.add(nt), this._element.classList.remove(it, Nt);
        for (const t of this._triggerArray) {
          const n = I(t);
          n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1);
        }
        this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(() => {
          this._isTransitioning = !1, this._element.classList.remove(nt), this._element.classList.add(it), l.trigger(this._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
      _isShown(e = this._element) {
        return e.classList.contains(Nt);
      }
      _configAfterMerge(e) {
        return e.toggle = !!e.toggle, e.parent = j(e.parent), e;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
      _initializeChildren() {
        if (!this._config.parent)
          return;
        const e = this._getFirstLevelChildren(Pt);
        for (const t of e) {
          const n = I(t);
          n && this._addAriaAndCollapsedClass([t], this._isShown(n));
        }
      }
      _getFirstLevelChildren(e) {
        const t = _.find(":scope .collapse .collapse", this._config.parent);
        return _.find(e, this._config.parent).filter((n) => !t.includes(n));
      }
      _addAriaAndCollapsedClass(e, t) {
        if (e.length)
          for (const n of e)
            n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t);
      }
      static jQueryInterface(e) {
        const t = {};
        return typeof e == "string" && /show|hide/.test(e) && (t.toggle = !1), this.each(function() {
          const n = De.getOrCreateInstance(this, t);
          if (typeof e == "string") {
            if (n[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            n[e]();
          }
        });
      }
    }
    l.on(document, "click.bs.collapse.data-api", Pt, function(i) {
      (i.target.tagName === "A" || i.delegateTarget && i.delegateTarget.tagName === "A") && i.preventDefault();
      const e = W(this), t = _.find(e);
      for (const n of t)
        De.getOrCreateInstance(n, { toggle: !1 }).toggle();
    }), G(De);
    var z = "top", X = "bottom", Y = "right", R = "left", st = "auto", Se = [z, X, Y, R], ve = "start", Ie = "end", wi = "clippingParents", jt = "viewport", Ne = "popper", Ai = "reference", Mt = Se.reduce(function(i, e) {
      return i.concat([e + "-" + ve, e + "-" + Ie]);
    }, []), $t = [].concat(Se, [st]).reduce(function(i, e) {
      return i.concat([e, e + "-" + ve, e + "-" + Ie]);
    }, []), Ei = "beforeRead", Ti = "read", Ci = "afterRead", xi = "beforeMain", Oi = "main", ki = "afterMain", Li = "beforeWrite", Di = "write", Si = "afterWrite", Ii = [Ei, Ti, Ci, xi, Oi, ki, Li, Di, Si];
    function ae(i) {
      return i ? (i.nodeName || "").toLowerCase() : null;
    }
    function Z(i) {
      if (i == null)
        return window;
      if (i.toString() !== "[object Window]") {
        var e = i.ownerDocument;
        return e && e.defaultView || window;
      }
      return i;
    }
    function ye(i) {
      return i instanceof Z(i).Element || i instanceof Element;
    }
    function J(i) {
      return i instanceof Z(i).HTMLElement || i instanceof HTMLElement;
    }
    function Bt(i) {
      return typeof ShadowRoot < "u" && (i instanceof Z(i).ShadowRoot || i instanceof ShadowRoot);
    }
    const Ht = { name: "applyStyles", enabled: !0, phase: "write", fn: function(i) {
      var e = i.state;
      Object.keys(e.elements).forEach(function(t) {
        var n = e.styles[t] || {}, s = e.attributes[t] || {}, o = e.elements[t];
        J(o) && ae(o) && (Object.assign(o.style, n), Object.keys(s).forEach(function(r) {
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
          J(s) && ae(s) && (Object.assign(s.style, r), Object.keys(o).forEach(function(a) {
            s.removeAttribute(a);
          }));
        });
      };
    }, requires: ["computeStyles"] };
    function le(i) {
      return i.split("-")[0];
    }
    var we = Math.max, ot = Math.min, Pe = Math.round;
    function Ft() {
      var i = navigator.userAgentData;
      return i != null && i.brands ? i.brands.map(function(e) {
        return e.brand + "/" + e.version;
      }).join(" ") : navigator.userAgent;
    }
    function Ni() {
      return !/^((?!chrome|android).)*safari/i.test(Ft());
    }
    function je(i, e, t) {
      e === void 0 && (e = !1), t === void 0 && (t = !1);
      var n = i.getBoundingClientRect(), s = 1, o = 1;
      e && J(i) && (s = i.offsetWidth > 0 && Pe(n.width) / i.offsetWidth || 1, o = i.offsetHeight > 0 && Pe(n.height) / i.offsetHeight || 1);
      var r = (ye(i) ? Z(i) : window).visualViewport, a = !Ni() && t, c = (n.left + (a && r ? r.offsetLeft : 0)) / s, u = (n.top + (a && r ? r.offsetTop : 0)) / o, d = n.width / s, h = n.height / o;
      return { width: d, height: h, top: u, right: c + d, bottom: u + h, left: c, x: c, y: u };
    }
    function Wt(i) {
      var e = je(i), t = i.offsetWidth, n = i.offsetHeight;
      return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: i.offsetLeft, y: i.offsetTop, width: t, height: n };
    }
    function Pi(i, e) {
      var t = e.getRootNode && e.getRootNode();
      if (i.contains(e))
        return !0;
      if (t && Bt(t)) {
        var n = e;
        do {
          if (n && i.isSameNode(n))
            return !0;
          n = n.parentNode || n.host;
        } while (n);
      }
      return !1;
    }
    function fe(i) {
      return Z(i).getComputedStyle(i);
    }
    function as(i) {
      return ["table", "td", "th"].indexOf(ae(i)) >= 0;
    }
    function ge(i) {
      return ((ye(i) ? i.ownerDocument : i.document) || window.document).documentElement;
    }
    function rt(i) {
      return ae(i) === "html" ? i : i.assignedSlot || i.parentNode || (Bt(i) ? i.host : null) || ge(i);
    }
    function ji(i) {
      return J(i) && fe(i).position !== "fixed" ? i.offsetParent : null;
    }
    function qe(i) {
      for (var e = Z(i), t = ji(i); t && as(t) && fe(t).position === "static"; )
        t = ji(t);
      return t && (ae(t) === "html" || ae(t) === "body" && fe(t).position === "static") ? e : t || function(n) {
        var s = /firefox/i.test(Ft());
        if (/Trident/i.test(Ft()) && J(n) && fe(n).position === "fixed")
          return null;
        var o = rt(n);
        for (Bt(o) && (o = o.host); J(o) && ["html", "body"].indexOf(ae(o)) < 0; ) {
          var r = fe(o);
          if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || s && r.willChange === "filter" || s && r.filter && r.filter !== "none")
            return o;
          o = o.parentNode;
        }
        return null;
      }(i) || e;
    }
    function zt(i) {
      return ["top", "bottom"].indexOf(i) >= 0 ? "x" : "y";
    }
    function Ve(i, e, t) {
      return we(i, ot(e, t));
    }
    function Mi(i) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, i);
    }
    function $i(i, e) {
      return e.reduce(function(t, n) {
        return t[n] = i, t;
      }, {});
    }
    const Bi = { name: "arrow", enabled: !0, phase: "main", fn: function(i) {
      var e, t = i.state, n = i.name, s = i.options, o = t.elements.arrow, r = t.modifiersData.popperOffsets, a = le(t.placement), c = zt(a), u = [R, Y].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var d = function(k, C) {
          return Mi(typeof (k = typeof k == "function" ? k(Object.assign({}, C.rects, { placement: C.placement })) : k) != "number" ? k : $i(k, Se));
        }(s.padding, t), h = Wt(o), b = c === "y" ? z : R, f = c === "y" ? X : Y, m = t.rects.reference[u] + t.rects.reference[c] - r[c] - t.rects.popper[u], p = r[c] - t.rects.reference[c], g = qe(o), O = g ? c === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, D = m / 2 - p / 2, w = d[b], E = O - h[u] - d[f], v = O / 2 - h[u] / 2 + D, A = Ve(w, v, E), T = c;
        t.modifiersData[n] = ((e = {})[T] = A, e.centerOffset = A - v, e);
      }
    }, effect: function(i) {
      var e = i.state, t = i.options.element, n = t === void 0 ? "[data-popper-arrow]" : t;
      n != null && (typeof n != "string" || (n = e.elements.popper.querySelector(n))) && Pi(e.elements.popper, n) && (e.elements.arrow = n);
    }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
    function Me(i) {
      return i.split("-")[1];
    }
    var ls = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Hi(i) {
      var e, t = i.popper, n = i.popperRect, s = i.placement, o = i.variation, r = i.offsets, a = i.position, c = i.gpuAcceleration, u = i.adaptive, d = i.roundOffsets, h = i.isFixed, b = r.x, f = b === void 0 ? 0 : b, m = r.y, p = m === void 0 ? 0 : m, g = typeof d == "function" ? d({ x: f, y: p }) : { x: f, y: p };
      f = g.x, p = g.y;
      var O = r.hasOwnProperty("x"), D = r.hasOwnProperty("y"), w = R, E = z, v = window;
      if (u) {
        var A = qe(t), T = "clientHeight", k = "clientWidth";
        A === Z(t) && fe(A = ge(t)).position !== "static" && a === "absolute" && (T = "scrollHeight", k = "scrollWidth"), (s === z || (s === R || s === Y) && o === Ie) && (E = X, p -= (h && A === v && v.visualViewport ? v.visualViewport.height : A[T]) - n.height, p *= c ? 1 : -1), s !== R && (s !== z && s !== X || o !== Ie) || (w = Y, f -= (h && A === v && v.visualViewport ? v.visualViewport.width : A[k]) - n.width, f *= c ? 1 : -1);
      }
      var C, N = Object.assign({ position: a }, u && ls), Q = d === !0 ? function(oe) {
        var q = oe.x, ee = oe.y, V = window.devicePixelRatio || 1;
        return { x: Pe(q * V) / V || 0, y: Pe(ee * V) / V || 0 };
      }({ x: f, y: p }) : { x: f, y: p };
      return f = Q.x, p = Q.y, c ? Object.assign({}, N, ((C = {})[E] = D ? "0" : "", C[w] = O ? "0" : "", C.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + p + "px)" : "translate3d(" + f + "px, " + p + "px, 0)", C)) : Object.assign({}, N, ((e = {})[E] = D ? p + "px" : "", e[w] = O ? f + "px" : "", e.transform = "", e));
    }
    const Rt = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(i) {
      var e = i.state, t = i.options, n = t.gpuAcceleration, s = n === void 0 || n, o = t.adaptive, r = o === void 0 || o, a = t.roundOffsets, c = a === void 0 || a, u = { placement: le(e.placement), variation: Me(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s, isFixed: e.options.strategy === "fixed" };
      e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Hi(Object.assign({}, u, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: c })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Hi(Object.assign({}, u, { offsets: e.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: c })))), e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-placement": e.placement });
    }, data: {} };
    var at = { passive: !0 };
    const qt = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
    }, effect: function(i) {
      var e = i.state, t = i.instance, n = i.options, s = n.scroll, o = s === void 0 || s, r = n.resize, a = r === void 0 || r, c = Z(e.elements.popper), u = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return o && u.forEach(function(d) {
        d.addEventListener("scroll", t.update, at);
      }), a && c.addEventListener("resize", t.update, at), function() {
        o && u.forEach(function(d) {
          d.removeEventListener("scroll", t.update, at);
        }), a && c.removeEventListener("resize", t.update, at);
      };
    }, data: {} };
    var cs = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function lt(i) {
      return i.replace(/left|right|bottom|top/g, function(e) {
        return cs[e];
      });
    }
    var hs = { start: "end", end: "start" };
    function Fi(i) {
      return i.replace(/start|end/g, function(e) {
        return hs[e];
      });
    }
    function Vt(i) {
      var e = Z(i);
      return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Kt(i) {
      return je(ge(i)).left + Vt(i).scrollLeft;
    }
    function Xt(i) {
      var e = fe(i), t = e.overflow, n = e.overflowX, s = e.overflowY;
      return /auto|scroll|overlay|hidden/.test(t + s + n);
    }
    function Wi(i) {
      return ["html", "body", "#document"].indexOf(ae(i)) >= 0 ? i.ownerDocument.body : J(i) && Xt(i) ? i : Wi(rt(i));
    }
    function Ke(i, e) {
      var t;
      e === void 0 && (e = []);
      var n = Wi(i), s = n === ((t = i.ownerDocument) == null ? void 0 : t.body), o = Z(n), r = s ? [o].concat(o.visualViewport || [], Xt(n) ? n : []) : n, a = e.concat(r);
      return s ? a : a.concat(Ke(rt(r)));
    }
    function Yt(i) {
      return Object.assign({}, i, { left: i.x, top: i.y, right: i.x + i.width, bottom: i.y + i.height });
    }
    function zi(i, e, t) {
      return e === jt ? Yt(function(n, s) {
        var o = Z(n), r = ge(n), a = o.visualViewport, c = r.clientWidth, u = r.clientHeight, d = 0, h = 0;
        if (a) {
          c = a.width, u = a.height;
          var b = Ni();
          (b || !b && s === "fixed") && (d = a.offsetLeft, h = a.offsetTop);
        }
        return { width: c, height: u, x: d + Kt(n), y: h };
      }(i, t)) : ye(e) ? function(n, s) {
        var o = je(n, !1, s === "fixed");
        return o.top = o.top + n.clientTop, o.left = o.left + n.clientLeft, o.bottom = o.top + n.clientHeight, o.right = o.left + n.clientWidth, o.width = n.clientWidth, o.height = n.clientHeight, o.x = o.left, o.y = o.top, o;
      }(e, t) : Yt(function(n) {
        var s, o = ge(n), r = Vt(n), a = (s = n.ownerDocument) == null ? void 0 : s.body, c = we(o.scrollWidth, o.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), u = we(o.scrollHeight, o.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), d = -r.scrollLeft + Kt(n), h = -r.scrollTop;
        return fe(a || o).direction === "rtl" && (d += we(o.clientWidth, a ? a.clientWidth : 0) - c), { width: c, height: u, x: d, y: h };
      }(ge(i)));
    }
    function Ri(i) {
      var e, t = i.reference, n = i.element, s = i.placement, o = s ? le(s) : null, r = s ? Me(s) : null, a = t.x + t.width / 2 - n.width / 2, c = t.y + t.height / 2 - n.height / 2;
      switch (o) {
        case z:
          e = { x: a, y: t.y - n.height };
          break;
        case X:
          e = { x: a, y: t.y + t.height };
          break;
        case Y:
          e = { x: t.x + t.width, y: c };
          break;
        case R:
          e = { x: t.x - n.width, y: c };
          break;
        default:
          e = { x: t.x, y: t.y };
      }
      var u = o ? zt(o) : null;
      if (u != null) {
        var d = u === "y" ? "height" : "width";
        switch (r) {
          case ve:
            e[u] = e[u] - (t[d] / 2 - n[d] / 2);
            break;
          case Ie:
            e[u] = e[u] + (t[d] / 2 - n[d] / 2);
        }
      }
      return e;
    }
    function $e(i, e) {
      e === void 0 && (e = {});
      var t = e, n = t.placement, s = n === void 0 ? i.placement : n, o = t.strategy, r = o === void 0 ? i.strategy : o, a = t.boundary, c = a === void 0 ? wi : a, u = t.rootBoundary, d = u === void 0 ? jt : u, h = t.elementContext, b = h === void 0 ? Ne : h, f = t.altBoundary, m = f !== void 0 && f, p = t.padding, g = p === void 0 ? 0 : p, O = Mi(typeof g != "number" ? g : $i(g, Se)), D = b === Ne ? Ai : Ne, w = i.rects.popper, E = i.elements[m ? D : b], v = function(q, ee, V, B) {
        var ce = ee === "clippingParents" ? function(L) {
          var K = Ke(rt(L)), te = ["absolute", "fixed"].indexOf(fe(L).position) >= 0 && J(L) ? qe(L) : L;
          return ye(te) ? K.filter(function(_e) {
            return ye(_e) && Pi(_e, te) && ae(_e) !== "body";
          }) : [];
        }(q) : [].concat(ee), he = [].concat(ce, [V]), Be = he[0], $ = he.reduce(function(L, K) {
          var te = zi(q, K, B);
          return L.top = we(te.top, L.top), L.right = ot(te.right, L.right), L.bottom = ot(te.bottom, L.bottom), L.left = we(te.left, L.left), L;
        }, zi(q, Be, B));
        return $.width = $.right - $.left, $.height = $.bottom - $.top, $.x = $.left, $.y = $.top, $;
      }(ye(E) ? E : E.contextElement || ge(i.elements.popper), c, d, r), A = je(i.elements.reference), T = Ri({ reference: A, element: w, strategy: "absolute", placement: s }), k = Yt(Object.assign({}, w, T)), C = b === Ne ? k : A, N = { top: v.top - C.top + O.top, bottom: C.bottom - v.bottom + O.bottom, left: v.left - C.left + O.left, right: C.right - v.right + O.right }, Q = i.modifiersData.offset;
      if (b === Ne && Q) {
        var oe = Q[s];
        Object.keys(N).forEach(function(q) {
          var ee = [Y, X].indexOf(q) >= 0 ? 1 : -1, V = [z, X].indexOf(q) >= 0 ? "y" : "x";
          N[q] += oe[V] * ee;
        });
      }
      return N;
    }
    function us(i, e) {
      e === void 0 && (e = {});
      var t = e, n = t.placement, s = t.boundary, o = t.rootBoundary, r = t.padding, a = t.flipVariations, c = t.allowedAutoPlacements, u = c === void 0 ? $t : c, d = Me(n), h = d ? a ? Mt : Mt.filter(function(m) {
        return Me(m) === d;
      }) : Se, b = h.filter(function(m) {
        return u.indexOf(m) >= 0;
      });
      b.length === 0 && (b = h);
      var f = b.reduce(function(m, p) {
        return m[p] = $e(i, { placement: p, boundary: s, rootBoundary: o, padding: r })[le(p)], m;
      }, {});
      return Object.keys(f).sort(function(m, p) {
        return f[m] - f[p];
      });
    }
    const qi = { name: "flip", enabled: !0, phase: "main", fn: function(i) {
      var e = i.state, t = i.options, n = i.name;
      if (!e.modifiersData[n]._skip) {
        for (var s = t.mainAxis, o = s === void 0 || s, r = t.altAxis, a = r === void 0 || r, c = t.fallbackPlacements, u = t.padding, d = t.boundary, h = t.rootBoundary, b = t.altBoundary, f = t.flipVariations, m = f === void 0 || f, p = t.allowedAutoPlacements, g = e.options.placement, O = le(g), D = c || (O !== g && m ? function(L) {
          if (le(L) === st)
            return [];
          var K = lt(L);
          return [Fi(L), K, Fi(K)];
        }(g) : [lt(g)]), w = [g].concat(D).reduce(function(L, K) {
          return L.concat(le(K) === st ? us(e, { placement: K, boundary: d, rootBoundary: h, padding: u, flipVariations: m, allowedAutoPlacements: p }) : K);
        }, []), E = e.rects.reference, v = e.rects.popper, A = /* @__PURE__ */ new Map(), T = !0, k = w[0], C = 0; C < w.length; C++) {
          var N = w[C], Q = le(N), oe = Me(N) === ve, q = [z, X].indexOf(Q) >= 0, ee = q ? "width" : "height", V = $e(e, { placement: N, boundary: d, rootBoundary: h, altBoundary: b, padding: u }), B = q ? oe ? Y : R : oe ? X : z;
          E[ee] > v[ee] && (B = lt(B));
          var ce = lt(B), he = [];
          if (o && he.push(V[Q] <= 0), a && he.push(V[B] <= 0, V[ce] <= 0), he.every(function(L) {
            return L;
          })) {
            k = N, T = !1;
            break;
          }
          A.set(N, he);
        }
        if (T)
          for (var Be = function(L) {
            var K = w.find(function(te) {
              var _e = A.get(te);
              if (_e)
                return _e.slice(0, L).every(function(bt) {
                  return bt;
                });
            });
            if (K)
              return k = K, "break";
          }, $ = m ? 3 : 1; $ > 0 && Be($) !== "break"; $--)
            ;
        e.placement !== k && (e.modifiersData[n]._skip = !0, e.placement = k, e.reset = !0);
      }
    }, requiresIfExists: ["offset"], data: { _skip: !1 } };
    function Vi(i, e, t) {
      return t === void 0 && (t = { x: 0, y: 0 }), { top: i.top - e.height - t.y, right: i.right - e.width + t.x, bottom: i.bottom - e.height + t.y, left: i.left - e.width - t.x };
    }
    function Ki(i) {
      return [z, Y, X, R].some(function(e) {
        return i[e] >= 0;
      });
    }
    const Xi = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(i) {
      var e = i.state, t = i.name, n = e.rects.reference, s = e.rects.popper, o = e.modifiersData.preventOverflow, r = $e(e, { elementContext: "reference" }), a = $e(e, { altBoundary: !0 }), c = Vi(r, n), u = Vi(a, s, o), d = Ki(c), h = Ki(u);
      e.modifiersData[t] = { referenceClippingOffsets: c, popperEscapeOffsets: u, isReferenceHidden: d, hasPopperEscaped: h }, e.attributes.popper = Object.assign({}, e.attributes.popper, { "data-popper-reference-hidden": d, "data-popper-escaped": h });
    } }, Yi = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(i) {
      var e = i.state, t = i.options, n = i.name, s = t.offset, o = s === void 0 ? [0, 0] : s, r = $t.reduce(function(d, h) {
        return d[h] = function(b, f, m) {
          var p = le(b), g = [R, z].indexOf(p) >= 0 ? -1 : 1, O = typeof m == "function" ? m(Object.assign({}, f, { placement: b })) : m, D = O[0], w = O[1];
          return D = D || 0, w = (w || 0) * g, [R, Y].indexOf(p) >= 0 ? { x: w, y: D } : { x: D, y: w };
        }(h, e.rects, o), d;
      }, {}), a = r[e.placement], c = a.x, u = a.y;
      e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += c, e.modifiersData.popperOffsets.y += u), e.modifiersData[n] = r;
    } }, Qt = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(i) {
      var e = i.state, t = i.name;
      e.modifiersData[t] = Ri({ reference: e.rects.reference, element: e.rects.popper, strategy: "absolute", placement: e.placement });
    }, data: {} }, Qi = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(i) {
      var e = i.state, t = i.options, n = i.name, s = t.mainAxis, o = s === void 0 || s, r = t.altAxis, a = r !== void 0 && r, c = t.boundary, u = t.rootBoundary, d = t.altBoundary, h = t.padding, b = t.tether, f = b === void 0 || b, m = t.tetherOffset, p = m === void 0 ? 0 : m, g = $e(e, { boundary: c, rootBoundary: u, padding: h, altBoundary: d }), O = le(e.placement), D = Me(e.placement), w = !D, E = zt(O), v = E === "x" ? "y" : "x", A = e.modifiersData.popperOffsets, T = e.rects.reference, k = e.rects.popper, C = typeof p == "function" ? p(Object.assign({}, e.rects, { placement: e.placement })) : p, N = typeof C == "number" ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C), Q = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, oe = { x: 0, y: 0 };
      if (A) {
        if (o) {
          var q, ee = E === "y" ? z : R, V = E === "y" ? X : Y, B = E === "y" ? "height" : "width", ce = A[E], he = ce + g[ee], Be = ce - g[V], $ = f ? -k[B] / 2 : 0, L = D === ve ? T[B] : k[B], K = D === ve ? -k[B] : -T[B], te = e.elements.arrow, _e = f && te ? Wt(te) : { width: 0, height: 0 }, bt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, Pn = bt[ee], jn = bt[V], vt = Ve(0, T[B], _e[B]), eo = w ? T[B] / 2 - $ - vt - Pn - N.mainAxis : L - vt - Pn - N.mainAxis, to = w ? -T[B] / 2 + $ + vt + jn + N.mainAxis : K + vt + jn + N.mainAxis, ii = e.elements.arrow && qe(e.elements.arrow), io = ii ? E === "y" ? ii.clientTop || 0 : ii.clientLeft || 0 : 0, Mn = (q = Q == null ? void 0 : Q[E]) != null ? q : 0, no = ce + to - Mn, $n = Ve(f ? ot(he, ce + eo - Mn - io) : he, ce, f ? we(Be, no) : Be);
          A[E] = $n, oe[E] = $n - ce;
        }
        if (a) {
          var Bn, so = E === "x" ? z : R, oo = E === "x" ? X : Y, xe = A[v], yt = v === "y" ? "height" : "width", Hn = xe + g[so], Fn = xe - g[oo], ni = [z, R].indexOf(O) !== -1, Wn = (Bn = Q == null ? void 0 : Q[v]) != null ? Bn : 0, zn = ni ? Hn : xe - T[yt] - k[yt] - Wn + N.altAxis, Rn = ni ? xe + T[yt] + k[yt] - Wn - N.altAxis : Fn, qn = f && ni ? function(ro, ao, si) {
            var Vn = Ve(ro, ao, si);
            return Vn > si ? si : Vn;
          }(zn, xe, Rn) : Ve(f ? zn : Hn, xe, f ? Rn : Fn);
          A[v] = qn, oe[v] = qn - xe;
        }
        e.modifiersData[n] = oe;
      }
    }, requiresIfExists: ["offset"] };
    function ds(i, e, t) {
      t === void 0 && (t = !1);
      var n, s, o = J(e), r = J(e) && function(h) {
        var b = h.getBoundingClientRect(), f = Pe(b.width) / h.offsetWidth || 1, m = Pe(b.height) / h.offsetHeight || 1;
        return f !== 1 || m !== 1;
      }(e), a = ge(e), c = je(i, r, t), u = { scrollLeft: 0, scrollTop: 0 }, d = { x: 0, y: 0 };
      return (o || !o && !t) && ((ae(e) !== "body" || Xt(a)) && (u = (n = e) !== Z(n) && J(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : Vt(n)), J(e) ? ((d = je(e, !0)).x += e.clientLeft, d.y += e.clientTop) : a && (d.x = Kt(a))), { x: c.left + u.scrollLeft - d.x, y: c.top + u.scrollTop - d.y, width: c.width, height: c.height };
    }
    function fs(i) {
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
    var Ui = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function Gi() {
      for (var i = arguments.length, e = new Array(i), t = 0; t < i; t++)
        e[t] = arguments[t];
      return !e.some(function(n) {
        return !(n && typeof n.getBoundingClientRect == "function");
      });
    }
    function ct(i) {
      i === void 0 && (i = {});
      var e = i, t = e.defaultModifiers, n = t === void 0 ? [] : t, s = e.defaultOptions, o = s === void 0 ? Ui : s;
      return function(r, a, c) {
        c === void 0 && (c = o);
        var u, d, h = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Ui, o), modifiersData: {}, elements: { reference: r, popper: a }, attributes: {}, styles: {} }, b = [], f = !1, m = { state: h, setOptions: function(g) {
          var O = typeof g == "function" ? g(h.options) : g;
          p(), h.options = Object.assign({}, o, h.options, O), h.scrollParents = { reference: ye(r) ? Ke(r) : r.contextElement ? Ke(r.contextElement) : [], popper: Ke(a) };
          var D, w, E = function(v) {
            var A = fs(v);
            return Ii.reduce(function(T, k) {
              return T.concat(A.filter(function(C) {
                return C.phase === k;
              }));
            }, []);
          }((D = [].concat(n, h.options.modifiers), w = D.reduce(function(v, A) {
            var T = v[A.name];
            return v[A.name] = T ? Object.assign({}, T, A, { options: Object.assign({}, T.options, A.options), data: Object.assign({}, T.data, A.data) }) : A, v;
          }, {}), Object.keys(w).map(function(v) {
            return w[v];
          })));
          return h.orderedModifiers = E.filter(function(v) {
            return v.enabled;
          }), h.orderedModifiers.forEach(function(v) {
            var A = v.name, T = v.options, k = T === void 0 ? {} : T, C = v.effect;
            if (typeof C == "function") {
              var N = C({ state: h, name: A, instance: m, options: k });
              b.push(N || function() {
              });
            }
          }), m.update();
        }, forceUpdate: function() {
          if (!f) {
            var g = h.elements, O = g.reference, D = g.popper;
            if (Gi(O, D)) {
              h.rects = { reference: ds(O, qe(D), h.options.strategy === "fixed"), popper: Wt(D) }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(C) {
                return h.modifiersData[C.name] = Object.assign({}, C.data);
              });
              for (var w = 0; w < h.orderedModifiers.length; w++)
                if (h.reset !== !0) {
                  var E = h.orderedModifiers[w], v = E.fn, A = E.options, T = A === void 0 ? {} : A, k = E.name;
                  typeof v == "function" && (h = v({ state: h, options: T, name: k, instance: m }) || h);
                } else
                  h.reset = !1, w = -1;
            }
          }
        }, update: (u = function() {
          return new Promise(function(g) {
            m.forceUpdate(), g(h);
          });
        }, function() {
          return d || (d = new Promise(function(g) {
            Promise.resolve().then(function() {
              d = void 0, g(u());
            });
          })), d;
        }), destroy: function() {
          p(), f = !0;
        } };
        if (!Gi(r, a))
          return m;
        function p() {
          b.forEach(function(g) {
            return g();
          }), b = [];
        }
        return m.setOptions(c).then(function(g) {
          !f && c.onFirstUpdate && c.onFirstUpdate(g);
        }), m;
      };
    }
    var ps = ct(), ms = ct({ defaultModifiers: [qt, Qt, Rt, Ht] }), Ut = ct({ defaultModifiers: [qt, Qt, Rt, Ht, Yi, qi, Qi, Bi, Xi] });
    const Zi = Object.freeze(Object.defineProperty({ __proto__: null, popperGenerator: ct, detectOverflow: $e, createPopperBase: ps, createPopper: Ut, createPopperLite: ms, top: z, bottom: X, right: Y, left: R, auto: st, basePlacements: Se, start: ve, end: Ie, clippingParents: wi, viewport: jt, popper: Ne, reference: Ai, variationPlacements: Mt, placements: $t, beforeRead: Ei, read: Ti, afterRead: Ci, beforeMain: xi, main: Oi, afterMain: ki, beforeWrite: Li, write: Di, afterWrite: Si, modifierPhases: Ii, applyStyles: Ht, arrow: Bi, computeStyles: Rt, eventListeners: qt, flip: qi, hide: Xi, offset: Yi, popperOffsets: Qt, preventOverflow: Qi }, Symbol.toStringTag, { value: "Module" })), Ji = "dropdown", gs = "ArrowUp", en = "ArrowDown", tn = "click.bs.dropdown.data-api", nn = "keydown.bs.dropdown.data-api", Xe = "show", Ae = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', _s = `${Ae}.show`, ht = ".dropdown-menu", bs = U() ? "top-end" : "top-start", vs = U() ? "top-start" : "top-end", ys = U() ? "bottom-end" : "bottom-start", ws = U() ? "bottom-start" : "bottom-end", As = U() ? "left-start" : "right-start", Es = U() ? "right-start" : "left-start", Ts = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Cs = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
    class se extends ne {
      constructor(e, t) {
        super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = _.next(this._element, ht)[0] || _.prev(this._element, ht)[0] || _.findOne(ht, this._parent), this._inNavbar = this._detectNavbar();
      }
      static get Default() {
        return Ts;
      }
      static get DefaultType() {
        return Cs;
      }
      static get NAME() {
        return Ji;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (ie(this._element) || this._isShown())
          return;
        const e = { relatedTarget: this._element };
        if (!l.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
            for (const t of [].concat(...document.body.children))
              l.on(t, "mouseover", Ge);
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Xe), this._element.classList.add(Xe), l.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
      hide() {
        if (ie(this._element) || !this._isShown())
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
        if (!l.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const t of [].concat(...document.body.children))
              l.off(t, "mouseover", Ge);
          this._popper && this._popper.destroy(), this._menu.classList.remove(Xe), this._element.classList.remove(Xe), this._element.setAttribute("aria-expanded", "false"), de.removeDataAttribute(this._menu, "popper"), l.trigger(this._element, "hidden.bs.dropdown", e);
        }
      }
      _getConfig(e) {
        if (typeof (e = super._getConfig(e)).reference == "object" && !S(e.reference) && typeof e.reference.getBoundingClientRect != "function")
          throw new TypeError(`${Ji.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return e;
      }
      _createPopper() {
        if (Zi === void 0)
          throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let e = this._element;
        this._config.reference === "parent" ? e = this._parent : S(this._config.reference) ? e = j(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
        const t = this._getPopperConfig();
        this._popper = Ut(e, this._menu, t);
      }
      _isShown() {
        return this._menu.classList.contains(Xe);
      }
      _getPlacement() {
        const e = this._parent;
        if (e.classList.contains("dropend"))
          return As;
        if (e.classList.contains("dropstart"))
          return Es;
        if (e.classList.contains("dropup-center"))
          return "top";
        if (e.classList.contains("dropdown-center"))
          return "bottom";
        const t = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return e.classList.contains("dropup") ? t ? vs : bs : t ? ws : ys;
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
        return (this._inNavbar || this._config.display === "static") && (de.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig };
      }
      _selectMenuItem({ key: e, target: t }) {
        const n = _.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((s) => M(s));
        n.length && xt(n, t, e === en, !n.includes(t)).focus();
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = se.getOrCreateInstance(this, e);
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
        const t = _.find(_s);
        for (const n of t) {
          const s = se.getInstance(n);
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
        const t = /input|textarea/i.test(e.target.tagName), n = e.key === "Escape", s = [gs, en].includes(e.key);
        if (!s && !n || t && !n)
          return;
        e.preventDefault();
        const o = this.matches(Ae) ? this : _.prev(this, Ae)[0] || _.next(this, Ae)[0] || _.findOne(Ae, e.delegateTarget.parentNode), r = se.getOrCreateInstance(o);
        if (s)
          return e.stopPropagation(), r.show(), void r._selectMenuItem(e);
        r._isShown() && (e.stopPropagation(), r.hide(), o.focus());
      }
    }
    l.on(document, nn, Ae, se.dataApiKeydownHandler), l.on(document, nn, ht, se.dataApiKeydownHandler), l.on(document, tn, se.clearMenus), l.on(document, "keyup.bs.dropdown.data-api", se.clearMenus), l.on(document, tn, Ae, function(i) {
      i.preventDefault(), se.getOrCreateInstance(this).toggle();
    }), G(se);
    const sn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", on = ".sticky-top", ut = "padding-right", rn = "margin-right";
    class Gt {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e);
      }
      hide() {
        const e = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, ut, (t) => t + e), this._setElementAttributes(sn, ut, (t) => t + e), this._setElementAttributes(on, rn, (t) => t - e);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ut), this._resetElementAttributes(sn, ut), this._resetElementAttributes(on, rn);
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
        n && de.setDataAttribute(e, t, n);
      }
      _resetElementAttributes(e, t) {
        this._applyManipulationCallback(e, (n) => {
          const s = de.getDataAttribute(n, t);
          s !== null ? (de.removeDataAttribute(n, t), n.style.setProperty(t, s)) : n.style.removeProperty(t);
        });
      }
      _applyManipulationCallback(e, t) {
        if (S(e))
          t(e);
        else
          for (const n of _.find(e, this._element))
            t(n);
      }
    }
    const an = "show", ln = "mousedown.bs.backdrop", xs = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, Os = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
    class cn extends Fe {
      constructor(e) {
        super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
      }
      static get Default() {
        return xs;
      }
      static get DefaultType() {
        return Os;
      }
      static get NAME() {
        return "backdrop";
      }
      show(e) {
        if (!this._config.isVisible)
          return void ue(e);
        this._append();
        const t = this._getElement();
        this._config.isAnimated && He(t), t.classList.add(an), this._emulateAnimation(() => {
          ue(e);
        });
      }
      hide(e) {
        this._config.isVisible ? (this._getElement().classList.remove(an), this._emulateAnimation(() => {
          this.dispose(), ue(e);
        })) : ue(e);
      }
      dispose() {
        this._isAppended && (l.off(this._element, ln), this._element.remove(), this._isAppended = !1);
      }
      _getElement() {
        if (!this._element) {
          const e = document.createElement("div");
          e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e;
        }
        return this._element;
      }
      _configAfterMerge(e) {
        return e.rootElement = j(e.rootElement), e;
      }
      _append() {
        if (this._isAppended)
          return;
        const e = this._getElement();
        this._config.rootElement.append(e), l.on(e, ln, () => {
          ue(this._config.clickCallback);
        }), this._isAppended = !0;
      }
      _emulateAnimation(e) {
        ci(e, this._getElement(), this._config.isAnimated);
      }
    }
    const hn = ".bs.focustrap", un = "backward", ks = { autofocus: !0, trapElement: null }, Ls = { autofocus: "boolean", trapElement: "element" };
    class dn extends Fe {
      constructor(e) {
        super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null;
      }
      static get Default() {
        return ks;
      }
      static get DefaultType() {
        return Ls;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), l.off(document, hn), l.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)), l.on(document, "keydown.tab.bs.focustrap", (e) => this._handleKeydown(e)), this._isActive = !0);
      }
      deactivate() {
        this._isActive && (this._isActive = !1, l.off(document, hn));
      }
      _handleFocusin(e) {
        const { trapElement: t } = this._config;
        if (e.target === document || e.target === t || t.contains(e.target))
          return;
        const n = _.focusableChildren(t);
        n.length === 0 ? t.focus() : this._lastTabNavDirection === un ? n[n.length - 1].focus() : n[0].focus();
      }
      _handleKeydown(e) {
        e.key === "Tab" && (this._lastTabNavDirection = e.shiftKey ? un : "forward");
      }
    }
    const fn = "hidden.bs.modal", pn = "show.bs.modal", mn = "modal-open", gn = "show", Zt = "modal-static", Ds = { backdrop: !0, focus: !0, keyboard: !0 }, Ss = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
    class Ee extends ne {
      constructor(e, t) {
        super(e, t), this._dialog = _.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Gt(), this._addEventListeners();
      }
      static get Default() {
        return Ds;
      }
      static get DefaultType() {
        return Ss;
      }
      static get NAME() {
        return "modal";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown || this._isTransitioning || l.trigger(this._element, pn, { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(mn), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)));
      }
      hide() {
        this._isShown && !this._isTransitioning && (l.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(gn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
      }
      dispose() {
        for (const e of [window, this._dialog])
          l.off(e, ".bs.modal");
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new cn({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
      }
      _initializeFocusTrap() {
        return new dn({ trapElement: this._element });
      }
      _showElement(e) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const t = _.findOne(".modal-body", this._dialog);
        t && (t.scrollTop = 0), He(this._element), this._element.classList.add(gn), this._queueCallback(() => {
          this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, l.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
        }, this._dialog, this._isAnimated());
      }
      _addEventListeners() {
        l.on(this._element, "keydown.dismiss.bs.modal", (e) => {
          if (e.key === "Escape")
            return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
        }), l.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }), l.on(this._element, "mousedown.dismiss.bs.modal", (e) => {
          l.one(this._element, "click.dismiss.bs.modal", (t) => {
            this._element === e.target && this._element === t.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
          });
        });
      }
      _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
          document.body.classList.remove(mn), this._resetAdjustments(), this._scrollBar.reset(), l.trigger(this._element, fn);
        });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (l.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
          return;
        const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._element.style.overflowY;
        t === "hidden" || this._element.classList.contains(Zt) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Zt), this._queueCallback(() => {
          this._element.classList.remove(Zt), this._queueCallback(() => {
            this._element.style.overflowY = t;
          }, this._dialog);
        }, this._dialog), this._element.focus());
      }
      _adjustDialog() {
        const e = this._element.scrollHeight > document.documentElement.clientHeight, t = this._scrollBar.getWidth(), n = t > 0;
        if (n && !e) {
          const s = U() ? "paddingLeft" : "paddingRight";
          this._element.style[s] = `${t}px`;
        }
        if (!n && e) {
          const s = U() ? "paddingRight" : "paddingLeft";
          this._element.style[s] = `${t}px`;
        }
      }
      _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
      static jQueryInterface(e, t) {
        return this.each(function() {
          const n = Ee.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (n[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            n[e](t);
          }
        });
      }
    }
    l.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(i) {
      const e = I(this);
      ["A", "AREA"].includes(this.tagName) && i.preventDefault(), l.one(e, pn, (n) => {
        n.defaultPrevented || l.one(e, fn, () => {
          M(this) && this.focus();
        });
      });
      const t = _.findOne(".modal.show");
      t && Ee.getInstance(t).hide(), Ee.getOrCreateInstance(e).toggle(this);
    }), Ze(Ee), G(Ee);
    const _n = "show", bn = "showing", vn = "hiding", yn = ".offcanvas.show", wn = "hidePrevented.bs.offcanvas", An = "hidden.bs.offcanvas", Is = { backdrop: !0, keyboard: !0, scroll: !1 }, Ns = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
    class pe extends ne {
      constructor(e, t) {
        super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
      }
      static get Default() {
        return Is;
      }
      static get DefaultType() {
        return Ns;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(e) {
        return this._isShown ? this.hide() : this.show(e);
      }
      show(e) {
        this._isShown || l.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Gt().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(bn), this._queueCallback(() => {
          this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(_n), this._element.classList.remove(bn), l.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: e });
        }, this._element, !0));
      }
      hide() {
        this._isShown && (l.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(vn), this._backdrop.hide(), this._queueCallback(() => {
          this._element.classList.remove(_n, vn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Gt().reset(), l.trigger(this._element, An);
        }, this._element, !0)));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const e = !!this._config.backdrop;
        return new cn({ className: "offcanvas-backdrop", isVisible: e, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: e ? () => {
          this._config.backdrop !== "static" ? this.hide() : l.trigger(this._element, wn);
        } : null });
      }
      _initializeFocusTrap() {
        return new dn({ trapElement: this._element });
      }
      _addEventListeners() {
        l.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
          e.key === "Escape" && (this._config.keyboard ? this.hide() : l.trigger(this._element, wn));
        });
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = pe.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    l.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(i) {
      const e = I(this);
      if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), ie(this))
        return;
      l.one(e, An, () => {
        M(this) && this.focus();
      });
      const t = _.findOne(yn);
      t && t !== e && pe.getInstance(t).hide(), pe.getOrCreateInstance(e).toggle(this);
    }), l.on(window, "load.bs.offcanvas.data-api", () => {
      for (const i of _.find(yn))
        pe.getOrCreateInstance(i).show();
    }), l.on(window, "resize.bs.offcanvas", () => {
      for (const i of _.find("[aria-modal][class*=show][class*=offcanvas-]"))
        getComputedStyle(i).position !== "fixed" && pe.getOrCreateInstance(i).hide();
    }), Ze(pe), G(pe);
    const Ps = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), js = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ms = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, $s = (i, e) => {
      const t = i.nodeName.toLowerCase();
      return e.includes(t) ? !Ps.has(t) || !!(js.test(i.nodeValue) || Ms.test(i.nodeValue)) : e.filter((n) => n instanceof RegExp).some((n) => n.test(t));
    }, En = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Bs = { allowList: En, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, Hs = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Fs = { entry: "(string|element|function|null)", selector: "(string|element)" };
    class Ws extends Fe {
      constructor(e) {
        super(), this._config = this._getConfig(e);
      }
      static get Default() {
        return Bs;
      }
      static get DefaultType() {
        return Hs;
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
          super._typeCheckConfig({ selector: t, entry: n }, Fs);
      }
      _setContent(e, t, n) {
        const s = _.findOne(n, e);
        s && ((t = this._resolvePossibleFunction(t)) ? S(t) ? this._putElementInTemplate(j(t), s) : this._config.html ? s.innerHTML = this._maybeSanitize(t) : s.textContent = t : s.remove());
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
              $s(h, d) || a.removeAttribute(h.nodeName);
          }
          return o.body.innerHTML;
        }(e, this._config.allowList, this._config.sanitizeFn) : e;
      }
      _resolvePossibleFunction(e) {
        return typeof e == "function" ? e(this) : e;
      }
      _putElementInTemplate(e, t) {
        if (this._config.html)
          return t.innerHTML = "", void t.append(e);
        t.textContent = e.textContent;
      }
    }
    const zs = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Jt = "fade", dt = "show", Tn = ".modal", Cn = "hide.bs.modal", ft = "hover", xn = "focus", Rs = { AUTO: "auto", TOP: "top", RIGHT: U() ? "left" : "right", BOTTOM: "bottom", LEFT: U() ? "right" : "left" }, qs = { allowList: En, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 0], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, Vs = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
    class Te extends ne {
      constructor(e, t) {
        if (Zi === void 0)
          throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
      }
      static get Default() {
        return qs;
      }
      static get DefaultType() {
        return Vs;
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
        clearTimeout(this._timeout), l.off(this._element.closest(Tn), Cn, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled)
          return;
        const e = l.trigger(this._element, this.constructor.eventName("show")), t = (ai(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (e.defaultPrevented || !t)
          return;
        this._disposePopper();
        const n = this._getTipElement();
        this._element.setAttribute("aria-describedby", n.getAttribute("id"));
        const { container: s } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(n), l.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(dt), "ontouchstart" in document.documentElement)
          for (const o of [].concat(...document.body.children))
            l.on(o, "mouseover", Ge);
        this._queueCallback(() => {
          l.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
      hide() {
        if (this._isShown() && !l.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(dt), "ontouchstart" in document.documentElement)
            for (const e of [].concat(...document.body.children))
              l.off(e, "mouseover", Ge);
          this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(() => {
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
        t.classList.remove(Jt, dt), t.classList.add(`bs-${this.constructor.NAME}-auto`);
        const n = ((s) => {
          do
            s += Math.floor(1e6 * Math.random());
          while (document.getElementById(s));
          return s;
        })(this.constructor.NAME).toString();
        return t.setAttribute("id", n), this._isAnimated() && t.classList.add(Jt), t;
      }
      setContent(e) {
        this._newContent = e, this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(e) {
        return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Ws({ ...this._config, content: e, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
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
        return this._config.animation || this.tip && this.tip.classList.contains(Jt);
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(dt);
      }
      _createPopper(e) {
        const t = typeof this._config.placement == "function" ? this._config.placement.call(this, e, this._element) : this._config.placement, n = Rs[t.toUpperCase()];
        return Ut(this._element, e, this._getPopperConfig(n));
      }
      _getOffset() {
        const { offset: e } = this._config;
        return typeof e == "string" ? e.split(",").map((t) => Number.parseInt(t, 10)) : typeof e == "function" ? (t) => e(t, this._element) : e;
      }
      _resolvePossibleFunction(e) {
        return typeof e == "function" ? e.call(this._element) : e;
      }
      _getPopperConfig(e) {
        const t = { placement: e, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: (n) => {
          this._getTipElement().setAttribute("data-popper-placement", n.state.placement);
        } }] };
        return { ...t, ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(t) : this._config.popperConfig };
      }
      _setListeners() {
        const e = this._config.trigger.split(" ");
        for (const t of e)
          if (t === "click")
            l.on(this._element, this.constructor.eventName("click"), this._config.selector, (n) => {
              this._initializeOnDelegatedTarget(n).toggle();
            });
          else if (t !== "manual") {
            const n = t === ft ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), s = t === ft ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            l.on(this._element, n, this._config.selector, (o) => {
              const r = this._initializeOnDelegatedTarget(o);
              r._activeTrigger[o.type === "focusin" ? xn : ft] = !0, r._enter();
            }), l.on(this._element, s, this._config.selector, (o) => {
              const r = this._initializeOnDelegatedTarget(o);
              r._activeTrigger[o.type === "focusout" ? xn : ft] = r._element.contains(o.relatedTarget), r._leave();
            });
          }
        this._hideModalHandler = () => {
          this._element && this.hide();
        }, l.on(this._element.closest(Tn), Cn, this._hideModalHandler);
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
        const t = de.getDataAttributes(this._element);
        for (const n of Object.keys(t))
          zs.has(n) && delete t[n];
        return e = { ...t, ...typeof e == "object" && e ? e : {} }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e;
      }
      _configAfterMerge(e) {
        return e.container = e.container === !1 ? document.body : j(e.container), typeof e.delay == "number" && (e.delay = { show: e.delay, hide: e.delay }), typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e;
      }
      _getDelegateConfig() {
        const e = {};
        for (const t in this._config)
          this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
        return e.selector = !1, e.trigger = "manual", e;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Te.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    G(Te);
    const Ks = { ...Te.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, Xs = { ...Te.DefaultType, content: "(null|string|element|function)" };
    class pt extends Te {
      static get Default() {
        return Ks;
      }
      static get DefaultType() {
        return Xs;
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
          const t = pt.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    G(pt);
    const On = "click.bs.scrollspy", Ye = "active", kn = "[href]", Ys = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] }, Qs = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
    class Qe extends ne {
      constructor(e, t) {
        super(e, t), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
      }
      static get Default() {
        return Ys;
      }
      static get DefaultType() {
        return Qs;
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
        return e.target = j(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, typeof e.threshold == "string" && (e.threshold = e.threshold.split(",").map((t) => Number.parseFloat(t))), e;
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll && (l.off(this._config.target, On), l.on(this._config.target, On, kn, (e) => {
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
        const e = _.find(kn, this._config.target);
        for (const t of e) {
          if (!t.hash || ie(t))
            continue;
          const n = _.findOne(t.hash, this._element);
          M(n) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, n));
        }
      }
      _process(e) {
        this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(Ye), this._activateParents(e), l.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: e }));
      }
      _activateParents(e) {
        if (e.classList.contains("dropdown-item"))
          _.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(Ye);
        else
          for (const t of _.parents(e, ".nav, .list-group"))
            for (const n of _.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item"))
              n.classList.add(Ye);
      }
      _clearActiveClass(e) {
        e.classList.remove(Ye);
        const t = _.find("[href].active", e);
        for (const n of t)
          n.classList.remove(Ye);
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Qe.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(window, "load.bs.scrollspy.data-api", () => {
      for (const i of _.find('[data-bs-spy="scroll"]'))
        Qe.getOrCreateInstance(i);
    }), G(Qe);
    const Us = "ArrowLeft", Ln = "ArrowRight", Gs = "ArrowUp", Dn = "ArrowDown", mt = "active", Sn = "fade", ei = "show", In = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ti = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${In}`;
    class Ce extends ne {
      constructor(e) {
        super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), l.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const e = this._element;
        if (this._elemIsActive(e))
          return;
        const t = this._getActiveElem(), n = t ? l.trigger(t, "hide.bs.tab", { relatedTarget: e }) : null;
        l.trigger(e, "show.bs.tab", { relatedTarget: t }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t));
      }
      _activate(e, t) {
        e && (e.classList.add(mt), this._activate(I(e)), this._queueCallback(() => {
          e.getAttribute("role") === "tab" ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), l.trigger(e, "shown.bs.tab", { relatedTarget: t })) : e.classList.add(ei);
        }, e, e.classList.contains(Sn)));
      }
      _deactivate(e, t) {
        e && (e.classList.remove(mt), e.blur(), this._deactivate(I(e)), this._queueCallback(() => {
          e.getAttribute("role") === "tab" ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), l.trigger(e, "hidden.bs.tab", { relatedTarget: t })) : e.classList.remove(ei);
        }, e, e.classList.contains(Sn)));
      }
      _keydown(e) {
        if (![Us, Ln, Gs, Dn].includes(e.key))
          return;
        e.stopPropagation(), e.preventDefault();
        const t = [Ln, Dn].includes(e.key), n = xt(this._getChildren().filter((s) => !ie(s)), e.target, t, !0);
        n && (n.focus({ preventScroll: !0 }), Ce.getOrCreateInstance(n).show());
      }
      _getChildren() {
        return _.find(ti, this._parent);
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
        const t = I(e);
        t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`));
      }
      _toggleDropDown(e, t) {
        const n = this._getOuterElement(e);
        if (!n.classList.contains("dropdown"))
          return;
        const s = (o, r) => {
          const a = _.findOne(o, n);
          a && a.classList.toggle(r, t);
        };
        s(".dropdown-toggle", mt), s(".dropdown-menu", ei), n.setAttribute("aria-expanded", t);
      }
      _setAttributeIfNotExists(e, t, n) {
        e.hasAttribute(t) || e.setAttribute(t, n);
      }
      _elemIsActive(e) {
        return e.classList.contains(mt);
      }
      _getInnerElement(e) {
        return e.matches(ti) ? e : _.findOne(ti, e);
      }
      _getOuterElement(e) {
        return e.closest(".nav-item, .list-group-item") || e;
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Ce.getOrCreateInstance(this);
          if (typeof e == "string") {
            if (t[e] === void 0 || e.startsWith("_") || e === "constructor")
              throw new TypeError(`No method named "${e}"`);
            t[e]();
          }
        });
      }
    }
    l.on(document, "click.bs.tab", In, function(i) {
      ["A", "AREA"].includes(this.tagName) && i.preventDefault(), ie(this) || Ce.getOrCreateInstance(this).show();
    }), l.on(window, "load.bs.tab", () => {
      for (const i of _.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'))
        Ce.getOrCreateInstance(i);
    }), G(Ce);
    const Nn = "hide", gt = "show", _t = "showing", Zs = { animation: "boolean", autohide: "boolean", delay: "number" }, Js = { animation: !0, autohide: !0, delay: 5e3 };
    class Ue extends ne {
      constructor(e, t) {
        super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
      }
      static get Default() {
        return Js;
      }
      static get DefaultType() {
        return Zs;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        l.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Nn), He(this._element), this._element.classList.add(gt, _t), this._queueCallback(() => {
          this._element.classList.remove(_t), l.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
      hide() {
        this.isShown() && (l.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(_t), this._queueCallback(() => {
          this._element.classList.add(Nn), this._element.classList.remove(_t, gt), l.trigger(this._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(gt), super.dispose();
      }
      isShown() {
        return this._element.classList.contains(gt);
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
        l.on(this._element, "mouseover.bs.toast", (e) => this._onInteraction(e, !0)), l.on(this._element, "mouseout.bs.toast", (e) => this._onInteraction(e, !1)), l.on(this._element, "focusin.bs.toast", (e) => this._onInteraction(e, !0)), l.on(this._element, "focusout.bs.toast", (e) => this._onInteraction(e, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
      static jQueryInterface(e) {
        return this.each(function() {
          const t = Ue.getOrCreateInstance(this, e);
          if (typeof e == "string") {
            if (t[e] === void 0)
              throw new TypeError(`No method named "${e}"`);
            t[e](this);
          }
        });
      }
    }
    return Ze(Ue), G(Ue), { Alert: We, Button: ze, Carousel: Le, Collapse: De, Dropdown: se, Modal: Ee, Offcanvas: pe, Popover: pt, ScrollSpy: Qe, Tab: Ce, Toast: Ue, Tooltip: Te };
  });
})(fo);
const po = At({
  name: "aa",
  props: { msg: String },
  setup(x) {
    const y = be(""), P = be("");
    let { msg: F } = oi(x);
    const W = (re, S) => {
      alert(`"命令:${re}, 关键字:${S}.`);
    };
    function I() {
      alert(y.value);
    }
    return {
      btn_Click: W,
      msg: F,
      prop1: y,
      prop2: P,
      GetPropValue: I
    };
  },
  methods: {}
});
function mo(x, y, P, F, W, I) {
  return Et(), Tt(ri, null, [
    y[0] || (y[0] = H("span", { class: "text-primary h4" }, "aa页面:", -1)),
    y[1] || (y[1] = H("span", null, "aa页面:", -1))
  ], 64);
}
const Kn = /* @__PURE__ */ wt(po, [["render", mo], ["__scopeId", "data-v-11e92cef"]]), go = At({
  name: "bb",
  props: { msg: String },
  setup(x) {
    const y = be(""), P = be("");
    let { msg: F } = oi(x);
    const W = (re, S) => {
      alert(`"命令:${re}, 关键字:${S}.`);
    };
    function I() {
      alert(y.value);
    }
    return {
      btn_Click: W,
      msg: F,
      prop1: y,
      prop2: P,
      GetPropValue: I
    };
  },
  methods: {}
});
function _o(x, y, P, F, W, I) {
  return Et(), Tt(ri, null, [
    y[0] || (y[0] = H("span", { class: "text-primary h4" }, "bb页面:", -1)),
    y[1] || (y[1] = H("span", null, "bb页面:", -1))
  ], 64);
}
const Xn = /* @__PURE__ */ wt(go, [["render", _o], ["__scopeId", "data-v-5e9907b5"]]), bo = At({
  name: "cc",
  props: { msg: String },
  setup(x) {
    const y = be(""), P = be("");
    let { msg: F } = oi(x);
    const W = (re, S) => {
      alert(`"命令:${re}, 关键字:${S}.`);
    };
    function I() {
      alert(y.value);
    }
    return {
      btn_Click: W,
      msg: F,
      prop1: y,
      prop2: P,
      GetPropValue: I
    };
  },
  methods: {}
});
function vo(x, y, P, F, W, I) {
  return Et(), Tt(ri, null, [
    y[0] || (y[0] = H("span", { class: "text-primary h4" }, "cc页面:", -1)),
    y[1] || (y[1] = H("span", null, "cc页面:", -1))
  ], 64);
}
const Yn = /* @__PURE__ */ wt(bo, [["render", vo], ["__scopeId", "data-v-252a33c2"]]), yo = co({
  id: "tabs",
  state() {
    return {
      myTabs: []
    };
  },
  actions: {
    addTab(x) {
      this.myTabs.indexOf(x) == -1 && this.myTabs.push(x);
    },
    removeTab(x) {
      let y = this.myTabs.indexOf(x);
      y !== -1 && this.myTabs.splice(y, 1);
    }
  }
}), wo = At({
  name: "testTabs",
  setup() {
    const x = yo(), y = {
      aaCom: Kn,
      bbCom: Xn,
      ccCom: Yn
    }, P = be(0), F = ho(() => {
      switch (x.myTabs[P.value]) {
        case "aaCom":
          return Kn;
        case "bbCom":
          return Xn;
        case "ccCom":
          return Yn;
      }
    });
    uo(() => {
      console.log("components list:", y);
      const S = Object.keys(y), j = Object.entries(y);
      for (let M = 0; M < j.length; M++) {
        const ie = j[M];
        console.log(`arrEntries [${M}]:`, ie), console.log(`typeof objCom [${M}]:`, typeof ie);
      }
      console.log("arrEntries:", j), S.forEach((M) => {
        console.log(M);
      });
      for (let M = 0; M < 3; M++)
        console.log(`components [${M}]:`, y.aaCom);
    });
    const W = be(x.myTabs);
    function I(S) {
      x.addTab(S), W.value = x.myTabs;
      let j = x.myTabs.indexOf(S);
      j !== -1 && (P.value = j);
    }
    function re(S) {
      let j = x.myTabs.indexOf(S);
      x.removeTab(S), W.value = x.myTabs, j > 0 ? P.value = j - 1 : P.value = 0;
    }
    return {
      addTab: I,
      removeTab: re,
      tabsRef: W,
      activeTab: P,
      currentTabComponent: F,
      tabsStore: x
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
    changeTab(x) {
      const y = this.tabsStore.myTabs.indexOf(x);
      y != -1 && (this.activeTab = y);
    }
  }
}), Ao = { class: "container" };
function Eo(x, y, P, F, W, I) {
  return Et(), Tt("div", Ao, y[0] || (y[0] = [
    H("ul", {
      class: "nav nav-tabs",
      role: "tablist"
    }, [
      H("li", { class: "nav-item" }, [
        H("a", {
          class: "nav-link active",
          "data-bs-toggle": "tab",
          href: "#Discuss1",
          role: "tab"
        }, "教师答疑")
      ]),
      H("li", { class: "nav-item" }, [
        H("a", {
          class: "nav-link",
          "data-bs-toggle": "tab",
          href: "#Discuss2",
          role: "tab"
        }, "综合讨论")
      ]),
      H("li", { class: "nav-item" }, [
        H("a", {
          class: "nav-link",
          "data-bs-toggle": "tab",
          href: "#Discuss3",
          role: "tab"
        }, "小组讨论")
      ])
    ], -1),
    H("div", { class: "tab-content" }, [
      H("div", {
        id: "Discuss1",
        class: "tab-pane fade show active"
      }, " aaaa "),
      H("div", {
        id: "Discuss2",
        class: "tab-pane fade"
      }, " bbbb "),
      H("div", {
        id: "Discuss3",
        class: "tab-pane fade"
      }, " cccc ")
    ], -1)
  ]));
}
const xo = /* @__PURE__ */ wt(wo, [["render", Eo]]);
export {
  xo as default
};
