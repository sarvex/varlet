import { reactive as Ve, onMounted as Ne, onUnmounted as Wn, ref as V, onActivated as Nt, onDeactivated as Dt, createApp as fv, getCurrentInstance as Ya, provide as Hl, computed as R, inject as jl, nextTick as Me, h as Wl, onBeforeUnmount as At, isVNode as zt, watch as le, onBeforeMount as cv, defineComponent as x, createVNode as re, Teleport as Fa, Transition as Ae, withDirectives as Se, vShow as Ha, mergeProps as Ee, openBlock as p, createBlock as me, resolveDynamicComponent as ja, normalizeClass as m, normalizeStyle as q, resolveComponent as ie, resolveDirective as Fe, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as ne, createElementBlock as T, Fragment as Pe, renderList as Ie, createCommentVNode as _, onUpdated as Lt, createTextVNode as be, pushScopeId as ka, popScopeId as $a, withModifiers as En, normalizeProps as ni, guardReactiveProps as Gl, vModelText as mv, toRefs as pv, isRef as hv, unref as uo, withKeys as Vi, toRaw as Mi, TransitionGroup as gv, Comment as yv } from "vue";
var ql = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, UC = Ve(ql);
const dn = Ve(ql), qe = (e) => typeof e == "string", vo = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", ri = (e) => Object.prototype.toString.call(e) === "[object Object]", bv = (e) => typeof e == "object" && e !== null, ai = (e) => typeof e == "function", we = (e) => Array.isArray(e), wv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : vo(e) ? Number(e) : e, Rt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, ti = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, tt = () => typeof window < "u", Bi = (e) => [...new Set(e)], Kl = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), Cv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Sv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Ii = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ni = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), kv = (e) => {
  var n = [];
  return {
    cache: n,
    has(r) {
      return this.cache.includes(r);
    },
    add(r) {
      this.has(r) || (this.cache.length === e && n.shift(), this.cache.push(r));
    },
    remove(r) {
      this.has(r) && Rt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, fo = (e) => e, Di = (e) => Math.pow(e, 3), Xl = (e) => e < 0.5 ? Di(e * 2) / 2 : 1 - Di((1 - e) * 2) / 2, Ut = (e, n) => e ?? n, Zl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ga = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Ai(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $v(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ai(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ai(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Tv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function zi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Yt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function oi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Ov(e) {
  return co.apply(this, arguments);
}
function co() {
  return co = $v(function* (e) {
    yield Vn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: l
    } = window, i = a <= o && t >= 0, s = n <= l && r >= 0;
    return i && s;
  }), co.apply(this, arguments);
}
function no(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ta(e) {
  for (var n = e; n && !(!n.parentNode || (n = n.parentNode, n === document.body || n === document.documentElement)); ) {
    var r = /(scroll|auto)/, {
      overflowY: a,
      overflow: t
    } = window.getComputedStyle(n);
    if (r.test(a) || r.test(t))
      return n;
  }
  return window;
}
function Pv(e) {
  for (var n = [], r = e; r !== window; )
    r = Ta(r), n.push(r);
  return n;
}
function Jl(e, n) {
  if (qe(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (bv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Ql = (e) => qe(e) && e.endsWith("rem"), Ev = (e) => qe(e) && e.endsWith("px") || xe(e), Vv = (e) => qe(e) && e.endsWith("%"), _l = (e) => qe(e) && e.endsWith("vw"), xl = (e) => qe(e) && e.endsWith("vh"), Mv = (e) => qe(e) && e.startsWith("calc("), Bv = (e) => qe(e) && e.startsWith("var("), De = (e) => {
  if (xe(e))
    return e;
  if (Ev(e))
    return +e.replace("px", "");
  if (_l(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (xl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Ql(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? L(e) : 0;
}, he = (e) => {
  if (e != null)
    return Vv(e) || _l(e) || xl(e) || Ql(e) || Mv(e) || Bv(e) ? e : De(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function On(e) {
  var n = Zl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Iv(e) {
  var n = Zl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Ft(e) {
  On(() => {
    On(e);
  });
}
function Vn() {
  return new Promise((e) => {
    On(() => {
      On(e);
    });
  });
}
function Nv() {
  return new Promise((e) => {
    On(e);
  });
}
function Qa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = Yt(e), s = oi(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - l) / t;
      if (v < 1) {
        var f = i + (r - i) * o(v), c = s + (a - s) * o(v);
        e.scrollTo(c, f), On(d);
      } else
        e.scrollTo(a, r), u();
    };
    On(d);
  });
}
function es(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Cv(a);
    return n[o] = t, n;
  }, {});
}
function Dv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function Ct(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
var Av = ["collect", "clear"];
function Li(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ri(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Li(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Li(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function zv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function St() {
  return St = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, St.apply(this, arguments);
}
function Xe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Lv(e) {
  var n = fv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Wa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => Wl(e, St({}, n, r));
    }
  }, {
    unmount: t
  } = Lv(a);
  return {
    unmountInstance: t
  };
}
function Rv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      zt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function vn(e) {
  var n = Ve([]), r = Ya(), a = () => {
    var i = Rv(r.subTree);
    n.sort((s, u) => i.indexOf(s.vnode) - i.indexOf(u.vnode));
  }, t = (i) => {
    n.push(i), a();
  }, o = (i) => {
    Rt(n, i);
  };
  Hl(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var l = R(() => n.length);
  return {
    length: l
  };
}
function fn(e) {
  if (!ns(e))
    return {
      index: null
    };
  var n = jl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Ya();
  Ne(() => {
    Me().then(() => r(o));
  }), Wn(() => {
    Me().then(() => a(o));
  });
  var l = R(() => t.indexOf(o));
  return {
    index: l
  };
}
function on(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Rt(n, o);
  }, t = (o) => {
    Hl(e, St({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function ln(e) {
  if (!ns(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = jl(e), {
    collect: r,
    clear: a
  } = n, t = zv(n, Av), o = (l) => {
    Ne(() => r(l)), At(() => a(l));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function ns(e) {
  var n = Ya();
  return e in n.provides;
}
function bn() {
  var e = V(""), n = /* @__PURE__ */ function() {
    var t = Ri(function* (o, l, i) {
      if (!we(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(l, i)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(l, i, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Ri(function* (o, l, i, s, u) {
      o.includes(l) && (yield n(i, s, u)) && (e.value = "");
    });
    return function(l, i, s, u, d) {
      return t.apply(this, arguments);
    };
  }();
  return {
    errorMessage: e,
    validate: n,
    resetValidation: r,
    validateWithTrigger: a
  };
}
function Uv(e) {
  Ne(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), Wn(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function ii() {
  var e = V(!1);
  return Nt(() => {
    e.value = !1;
  }), Dt(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, l = new Array(o), i = 0; i < o; i++)
      l[i] = arguments[i];
    return l.map((s) => {
      if (we(s)) {
        var [u, d, v = null] = s;
        return u ? d : v;
      }
      return s;
    });
  };
  return {
    n: a,
    classes: t
  };
}
function k(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (we(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function kt() {
  return kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, kt.apply(this, arguments);
}
var {
  n: rs
} = ee("ripple"), Ui = 250;
function Yv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Fv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, l = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, i = l * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - l * 2) / 2, v = (o - l * 2) / 2, f = s - l, c = u - l;
  return {
    x: f,
    y: c,
    centerX: d,
    centerY: v,
    size: i
  };
}
function as(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: l,
        size: i
      } = Fv(this, e), s = document.createElement("div");
      s.classList.add(rs()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Yv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function mo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + rs());
    if (r.length) {
      var a = r[r.length - 1], t = Ui - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Ui);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function ts() {
  var e = this._ripple;
  Dv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Hv(e, n) {
  var r, a, t;
  e._ripple = kt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : dn.touchmoveForbid,
    removeRipple: mo.bind(e)
  }), e.addEventListener("touchstart", as, {
    passive: !0
  }), e.addEventListener("touchmove", ts, {
    passive: !0
  }), e.addEventListener("dragstart", mo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function jv(e) {
  e.removeEventListener("touchstart", as), e.removeEventListener("touchmove", ts), e.removeEventListener("dragstart", mo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Wv(e, n) {
  var r, a, t, o, l, i, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : dn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((l = e._ripple) == null ? void 0 : l.touchmoveForbid) || u.color !== ((i = e._ripple) == null ? void 0 : i.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = kt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var os = {
  mounted: Hv,
  unmounted: jv,
  updated: Wv,
  install(e) {
    e.directive("ripple", this);
  }
}, YC = os;
const ze = os;
function Gv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var ot = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Gv
  },
  transition: {
    type: String
  },
  overlay: {
    type: Boolean,
    default: !0
  },
  overlayClass: {
    type: String
  },
  overlayStyle: {
    type: Object
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnClickOverlay: {
    type: Boolean,
    default: !0
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOverlay: Y(),
  "onUpdate:show": Y(),
  // internal for Dialog
  onRouteChange: Y()
};
function is() {
  var e = Object.keys(dn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function st(e) {
  dn.locks[e] = 1, is();
}
function ut(e) {
  delete dn.locks[e], is();
}
function Ht(e, n) {
  var {
    uid: r
  } = Ya();
  n && le(n, (a) => {
    a === !1 ? ut(r) : a === !0 && e() === !0 && st(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? st(r) : ut(r));
  }), cv(() => {
    n && n() === !1 || e() === !0 && st(r);
  }), Wn(() => {
    n && n() === !1 || e() === !0 && ut(r);
  }), Nt(() => {
    n && n() === !1 || e() === !0 && st(r);
  }), Dt(() => {
    n && n() === !1 || e() === !0 && ut(r);
  });
}
function it(e, n) {
  var r = V(dn.zIndex);
  return le(e, (a) => {
    a && (dn.zIndex += n, r.value = dn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function po() {
  return po = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, po.apply(this, arguments);
}
function qv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !zt(e);
}
var {
  n: In,
  classes: ro
} = ee("popup");
const hn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: ot,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = it(() => e.show, 3), {
      disabled: o
    } = ii(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      k(v), d && k(e["onUpdate:show"], !1);
    };
    Ht(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      k(d ? e.onOpen : e.onClose);
    }), Uv(() => k(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: ro(In("overlay"), d),
        style: po({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => re("div", Ee({
      class: ro(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [k(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: h,
        position: b
      } = e;
      return re(Ae, {
        name: In("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Se(re("div", {
          class: ro(In("$--box"), In()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && i(), re(Ae, {
          name: h || In("$-pop-" + b)
        }, {
          default: () => [f && s()]
        })]), [[Ha, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(Fa, {
          to: d,
          disabled: o.value
        }, qv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
hn.install = function(e) {
  e.component(hn.name, hn);
};
var FC = hn, ls = {
  name: {
    type: String
  },
  size: {
    type: [Number, String]
  },
  color: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  transition: {
    type: [Number, String],
    default: 0
  },
  onClick: Y()
};
function Yi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Kv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Yi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Yi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Xv,
  classes: Zv
} = ee("icon");
function Jv(e, n) {
  return p(), me(
    ja(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: q({
        color: e.color,
        transition: "transform " + e.toNumber(e.transition) + "ms",
        width: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        height: e.isURL(e.name) ? e.toSizeUnit(e.size) : null,
        fontSize: e.toSizeUnit(e.size)
      }),
      src: e.isURL(e.name) ? e.nextName : null,
      onClick: e.onClick
    },
    null,
    8,
    ["class", "style", "src", "onClick"]
  );
}
var ss = x({
  name: "VarIcon",
  props: ls,
  setup(e) {
    var n = V(""), r = V(!1), a = /* @__PURE__ */ function() {
      var t = Kv(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: Xv,
      classes: Zv,
      nextName: n,
      shrinking: r,
      isURL: wv,
      toNumber: L,
      toSizeUnit: he
    };
  }
});
ss.render = Jv;
const $e = ss;
$e.install = function(e) {
  e.component($e.name, $e);
};
var HC = $e;
function ho() {
  return ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ho.apply(this, arguments);
}
var Qv = ho({
  show: {
    type: Boolean,
    default: !1
  },
  actions: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  closeOnClickAction: {
    type: Boolean,
    default: !0
  },
  onSelect: Y(),
  "onUpdate:show": Y()
}, Xe(ot, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
const li = {
  // Dialog
  dialogTitle: "提示",
  dialogConfirmButtonText: "确认",
  dialogCancelButtonText: "取消",
  // ActionSheet
  actionSheetTitle: "请选择",
  // List
  listLoadingText: "加载中",
  listFinishedText: "没有更多了",
  listErrorText: "加载失败",
  // Picker
  pickerTitle: "请选择",
  pickerConfirmButtonText: "确认",
  pickerCancelButtonText: "取消",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "一月",
      abbr: "一月"
    },
    "02": {
      name: "二月",
      abbr: "二月"
    },
    "03": {
      name: "三月",
      abbr: "三月"
    },
    "04": {
      name: "四月",
      abbr: "四月"
    },
    "05": {
      name: "五月",
      abbr: "五月"
    },
    "06": {
      name: "六月",
      abbr: "六月"
    },
    "07": {
      name: "七月",
      abbr: "七月"
    },
    "08": {
      name: "八月",
      abbr: "八月"
    },
    "09": {
      name: "九月",
      abbr: "九月"
    },
    10: {
      name: "十月",
      abbr: "十月"
    },
    11: {
      name: "十一月",
      abbr: "十一月"
    },
    12: {
      name: "十二月",
      abbr: "十二月"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "星期日",
      abbr: "日"
    },
    1: {
      name: "星期一",
      abbr: "一"
    },
    2: {
      name: "星期二",
      abbr: "二"
    },
    3: {
      name: "星期三",
      abbr: "三"
    },
    4: {
      name: "星期四",
      abbr: "四"
    },
    5: {
      name: "星期五",
      abbr: "五"
    },
    6: {
      name: "星期六",
      abbr: "六"
    }
  },
  datePickerSelected: "个被选择",
  // pagination
  paginationItem: "条",
  paginationPage: "页",
  paginationJump: "前往"
}, us = {
  // Dialog
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  // ActionSheet
  actionSheetTitle: "Select One",
  // List
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  // Picker
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
  // date-picker
  datePickerMonthDict: {
    "01": {
      name: "January",
      abbr: "JAN"
    },
    "02": {
      name: "February",
      abbr: "FEB"
    },
    "03": {
      name: "March",
      abbr: "MAR"
    },
    "04": {
      name: "April",
      abbr: "APR"
    },
    "05": {
      name: "May",
      abbr: "MAY"
    },
    "06": {
      name: "June",
      abbr: "JUN"
    },
    "07": {
      name: "July",
      abbr: "JUL"
    },
    "08": {
      name: "August",
      abbr: "AUG"
    },
    "09": {
      name: "September",
      abbr: "SEP"
    },
    10: {
      name: "October",
      abbr: "OCT"
    },
    11: {
      name: "November",
      abbr: "NOV"
    },
    12: {
      name: "December",
      abbr: "DEC"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "Sunday",
      abbr: "S"
    },
    1: {
      name: "Monday",
      abbr: "M"
    },
    2: {
      name: "Tuesday",
      abbr: "T"
    },
    3: {
      name: "Wednesday",
      abbr: "W"
    },
    4: {
      name: "Thursday",
      abbr: "T"
    },
    5: {
      name: "Friday",
      abbr: "F"
    },
    6: {
      name: "Saturday",
      abbr: "S"
    }
  },
  datePickerSelected: " selected",
  // pagination
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function go() {
  return go = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, go.apply(this, arguments);
}
function si() {
  var e = {}, n = V({}), r = (o, l) => {
    l.lang = o, e[o] = l;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, l) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = go({}, e[o], l), a(o);
  };
  return {
    packs: e,
    pack: n,
    add: r,
    use: a,
    merge: t
  };
}
var {
  packs: ds,
  pack: je,
  add: ui,
  use: di,
  merge: vs
} = si();
ui("zh-CN", li);
di("zh-CN");
var jC = {
  zhCN: li,
  enUS: us,
  packs: ds,
  pack: je,
  add: ui,
  use: di,
  merge: vs,
  useLocale: si
};
const yo = {
  zhCN: li,
  enUS: us,
  packs: ds,
  pack: je,
  add: ui,
  use: di,
  merge: vs,
  useLocale: si
};
var {
  n: _v,
  classes: xv
} = ee("action-sheet"), ef = ["onClick"];
function nf(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = Fe("ripple");
  return p(), me(
    a,
    Ee({
      class: e.n("popup-radius"),
      position: "bottom",
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.popupShow
    }, {
      "onUpdate:show": e.handlePopupUpdateShow
    }, {
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    }),
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [W(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), W(e.$slots, "actions", {}, () => [(p(!0), T(
          Pe,
          null,
          Ie(e.actions, (o) => Se((p(), T(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
                color: o.color
              }),
              onClick: (l) => e.handleSelect(o)
            },
            [o.icon ? (p(), me(
              r,
              {
                key: 0,
                class: m(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: o.icon,
                size: o.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : _("v-if", !0), A(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            ef
          )), [[t, {
            disabled: o.disabled
          }]])),
          128
          /* KEYED_FRAGMENT */
        ))])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var fs = x({
  name: "VarActionSheet",
  directives: {
    Ripple: ze
  },
  components: {
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Qv,
  setup(e) {
    var n = V(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        k(l, t), o && k(e["onUpdate:show"], !1);
      }
    }, a = (t) => k(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: _v,
      classes: xv,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: je,
      dt: Ut,
      handleSelect: r
    };
  }
});
fs.render = nf;
const ar = fs;
function bo() {
  return bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, bo.apply(this, arguments);
}
var Qn, vi = {};
function rf(e) {
  return e === void 0 && (e = {}), bo({}, vi, e);
}
function ya(e) {
  return tt() ? new Promise((n) => {
    ya.close();
    var r = Ve(rf(e));
    r.teleport = "body", Qn = r;
    var {
      unmountInstance: a
    } = Wa(ar, r, {
      onSelect: (t) => {
        k(r.onSelect, t), n(t);
      },
      onClose: () => {
        k(r.onClose), n("close");
      },
      onClosed: () => {
        k(r.onClosed), a(), Qn === r && (Qn = null);
      },
      onRouteChange: () => {
        a(), Qn === r && (Qn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function af(e) {
  vi = e;
}
function tf() {
  vi = {};
}
function of() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
ya.Component = ar;
ar.install = function(e) {
  e.component(ar.name, ar);
};
ya.install = function(e) {
  e.component(ar.name, ar);
};
Object.assign(ya, {
  setDefaultOptions: af,
  resetDefaultOptions: tf,
  close: of
});
var WC = ar;
function lf(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var sf = {
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  title: {
    type: String
  },
  titlePosition: {
    type: String,
    default: "left",
    validator: lf
  },
  elevation: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  },
  image: {
    type: String
  },
  imageLinearGradient: {
    type: String
  }
}, {
  n: uf,
  classes: df
} = ee("app-bar");
function vf(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: q(e.rootStyles)
    },
    [A(
      "div",
      {
        class: m(e.n("toolbar"))
      },
      [A(
        "div",
        {
          class: m(e.n("left"))
        },
        [W(e.$slots, "left"), e.titlePosition === "left" ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: q({
              paddingLeft: e.paddingLeft
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title"))
        },
        [W(e.$slots, "default", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0), A(
        "div",
        {
          class: m(e.n("right"))
        },
        [e.titlePosition === "right" ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: q({
              paddingRight: e.paddingRight
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), W(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), W(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var cs = x({
  name: "VarAppBar",
  props: sf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = V(), t = V(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, l = R(() => {
      var {
        image: i,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (i != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + i + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return Ne(o), Lt(o), {
      n: uf,
      classes: df,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
cs.render = vf;
const br = cs;
br.install = function(e) {
  e.component(br.name, br);
};
var GC = br;
function Fi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Fi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Fi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function wo() {
  return wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wo.apply(this, arguments);
}
var ff = "background-image", cf = "lazy-loading", mf = "lazy-error", Hi = "lazy-attempt", pf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Co = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Da = [], $t = [], ms = kv(100), Ue = {
  loading: Co,
  error: Co,
  attempt: 3,
  throttleWait: 300,
  events: pf
}, fi = ti(lt, Ue.throttleWait);
function Wt(e, n) {
  e._lazy.arg === ff ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function hf(e) {
  e._lazy.loading && Wt(e, e._lazy.loading), lt();
}
function gf(e) {
  e._lazy.error && Wt(e, e._lazy.error), e._lazy.state = "error", mi(e), lt();
}
function ps(e, n) {
  Wt(e, n), e._lazy.state = "success", mi(e), lt();
}
function yf(e) {
  var n;
  $t.includes(e) || ($t.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, fi, {
      passive: !0
    });
  }));
}
function bf() {
  $t.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, fi);
    });
  }), $t.length = 0;
}
function wf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(cf)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(mf)) != null ? a : Ue.error,
    attempt: e.getAttribute(Hi) ? Number(e.getAttribute(Hi)) : Ue.attempt
  };
  e._lazy = wo({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Wt(e, Co), k(Ue.filter, e._lazy);
}
function Cf(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ms.add(n), ps(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? gf(e) : hs(e);
  });
}
function hs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ms.has(n)) {
      ps(e, n), e._lazy.attemptLock = !1;
      return;
    }
    hf(e), Cf(e, n);
  }
}
function ci(e) {
  return So.apply(this, arguments);
}
function So() {
  return So = jt(function* (e) {
    (yield Ov(e)) && hs(e);
  }), So.apply(this, arguments);
}
function lt() {
  Da.forEach((e) => ci(e));
}
function Sf(e) {
  return ko.apply(this, arguments);
}
function ko() {
  return ko = jt(function* (e) {
    !Da.includes(e) && Da.push(e), Pv(e).forEach(yf), yield ci(e);
  }), ko.apply(this, arguments);
}
function mi(e) {
  Rt(Da, e), Da.length === 0 && bf();
}
function kf(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function gs(e, n) {
  return $o.apply(this, arguments);
}
function $o() {
  return $o = jt(function* (e, n) {
    wf(e, n), yield Sf(e);
  }), $o.apply(this, arguments);
}
function $f(e, n) {
  return To.apply(this, arguments);
}
function To() {
  return To = jt(function* (e, n) {
    if (!kf(e, n)) {
      Da.includes(e) && (yield ci(e));
      return;
    }
    yield gs(e, n);
  }), To.apply(this, arguments);
}
function Tf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Ue.events = n ?? Ue.events, Ue.loading = r ?? Ue.loading, Ue.error = a ?? Ue.error, Ue.attempt = t ?? Ue.attempt, Ue.throttleWait = o ?? Ue.throttleWait, Ue.filter = l;
}
var ys = {
  mounted: gs,
  unmounted: mi,
  updated: $f,
  install(e, n) {
    Tf(n), fi = ti(lt, Ue.throttleWait), e.directive("lazy", this);
  }
}, qC = ys;
const _a = ys;
function Of(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var bs = (e) => ["mini", "small", "normal", "large"].includes(e);
function ws(e) {
  return bs(e) || xe(e) || qe(e);
}
var Pf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: ws,
    default: "normal"
  },
  color: {
    type: String
  },
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Of,
    default: "cover"
  },
  bordered: {
    type: Boolean,
    default: !1
  },
  borderColor: {
    type: String
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: Ef,
  classes: Vf
} = ee("avatar"), Mf = ["src", "lazy-loading", "lazy-error"], Bf = ["src"];
function If(e, n) {
  var r = Fe("lazy");
  return p(), T(
    "div",
    {
      ref: "avatarElement",
      class: m(e.classes(e.n(), e.n("$--box"), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: q({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (p(), T(
      Pe,
      {
        key: 0
      },
      [e.lazy ? Se((p(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          src: e.src,
          style: q({
            objectFit: e.fit
          }),
          "lazy-loading": e.loading,
          "lazy-error": e.error,
          onLoad: n[0] || (n[0] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          })
        },
        null,
        46,
        Mf
      )), [[r, e.src]]) : (p(), T(
        "img",
        {
          key: 1,
          class: m(e.n("image")),
          src: e.src,
          style: q({
            objectFit: e.fit
          }),
          onLoad: n[1] || (n[1] = function() {
            return e.handleLoad && e.handleLoad(...arguments);
          }),
          onError: n[2] || (n[2] = function() {
            return e.handleError && e.handleError(...arguments);
          })
        },
        null,
        46,
        Bf
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (p(), T(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: m(e.n("text")),
        style: q({
          transform: "scale(" + e.scale + ")"
        })
      },
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var Cs = x({
  name: "VarAvatar",
  directives: {
    Lazy: _a
  },
  props: Pf,
  setup(e) {
    var n = V(null), r = V(null), a = V(1), t = () => {
      if (!n.value || !r.value) {
        a.value = 1;
        return;
      }
      var s = n.value.offsetWidth, u = r.value.offsetWidth;
      s > u ? a.value = 1 : a.value = s / u;
    }, o = (s) => {
      var u = s.currentTarget, {
        lazy: d,
        onLoad: v,
        onError: f
      } = e;
      d ? (u._lazy.state === "success" && k(v, s), u._lazy.state === "error" && k(f, s)) : k(v, s);
    }, l = (s) => {
      k(e.onError, s);
    }, i = (s) => {
      k(e.onClick, s);
    };
    return Ne(t), Lt(t), {
      internalSizeValidator: bs,
      sizeValidator: ws,
      toSizeUnit: he,
      n: Ef,
      classes: Vf,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
Cs.render = If;
const wr = Cs;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var KC = wr, Nf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Df,
  classes: Af
} = ee("avatar-group");
function zf(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: q(e.rootStyles)
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ss = x({
  name: "VarAvatarGroup",
  props: Nf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: Df,
      classes: Af,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
Ss.render = zf;
const Cr = Ss;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var XC = Cr;
function Lf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Rf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var er = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Lf
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: Rf
  },
  // loading颜色
  color: {
    type: String
  },
  description: {
    type: String
  },
  loading: {
    type: Boolean,
    default: !1
  }
}, {
  n: Uf,
  classes: Yf
} = ee("loading"), Ff = (e) => (ka(""), e = e(), $a(), e), Hf = /* @__PURE__ */ Ff(() => /* @__PURE__ */ A(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ A("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), jf = [Hf];
function Wf(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.isShow ? (p(), T(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [A(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: q({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          jf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (p(!0), T(
        Pe,
        null,
        Ie(e.loadingTypeDict, (r, a) => (p(), T(
          Pe,
          {
            key: a
          },
          [e.type === a ? (p(), T(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(p(!0), T(
              Pe,
              null,
              Ie(r, (t) => (p(), T(
                "div",
                {
                  key: t + a,
                  style: q({
                    backgroundColor: e.color
                  }),
                  class: m(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
                },
                null,
                6
                /* CLASS, STYLE */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )) : _("v-if", !0)],
          64
          /* STABLE_FRAGMENT */
        ))),
        128
        /* KEYED_FRAGMENT */
      )), e.$slots.description || e.description ? (p(), T(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
            color: e.color
          })
        },
        [W(e.$slots, "description", {}, () => [be(
          ne(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var ks = x({
  name: "VarLoading",
  props: er,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => k(r.default) ? e.loading : !0);
    return {
      n: Uf,
      classes: Yf,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
ks.render = Wf;
const $n = ks;
$n.install = function(e) {
  e.component($n.name, $n);
};
var ZC = $n;
function Oo() {
  return Oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Oo.apply(this, arguments);
}
function Gf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function qf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Kf(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Xf = {
  type: {
    type: String,
    validator: Gf
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Kf
  },
  size: {
    type: String,
    validator: qf
  },
  loading: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !1
  },
  text: {
    type: Boolean,
    default: !1
  },
  outline: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  autoLoading: {
    type: Boolean,
    default: !1
  },
  loadingRadius: {
    type: [Number, String]
  },
  loadingType: Xe(er, "type"),
  loadingSize: Xe(er, "size"),
  loadingColor: Oo({}, Xe(er, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, $s = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"), Ts = Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");
function Zf() {
  var {
    bindChildren: e,
    childProviders: n
  } = on($s), {
    length: r
  } = vn(Ts);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function Jf() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln($s), {
    index: r
  } = fn(Ts);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: Qf,
  classes: _f
} = ee("button"), xf = ["type", "disabled"];
function ec(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return Se((p(), T(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.states.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.states.text, e.n("--text-" + e.states.type) + " " + e.n("--text"), e.n("--" + e.states.type) + " " + e.n("$-elevation--" + e.states.elevation)], [e.states.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.states.outline, e.n("--outline")])),
      style: q({
        color: e.states.textColor,
        background: e.states.color
      }),
      type: e.nativeType,
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (p(), me(
      r,
      {
        key: 0,
        class: m(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : _("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )],
    46,
    xf
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var Os = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: ze
  },
  props: Xf,
  setup(e) {
    var n = V(!1), {
      buttonGroup: r
    } = Jf(), a = R(() => {
      if (!r)
        return {
          elevation: 2,
          type: e.type != null ? e.type : "default",
          size: e.size != null ? e.size : "normal",
          color: e.color,
          text: e.text,
          textColor: e.textColor,
          outline: e.outline
        };
      var {
        type: i,
        size: s,
        color: u,
        textColor: d,
        mode: v
      } = r;
      return {
        elevation: 0,
        type: e.type != null ? e.type : i.value,
        size: e.size != null ? e.size : s.value,
        color: e.color != null ? e.color : u.value,
        textColor: e.textColor != null ? e.textColor : d.value,
        text: v.value !== "normal",
        outline: v.value === "outline"
      };
    }), t = (i) => {
      e.autoLoading && (n.value = !0, i = we(i) ? i : [i], Promise.all(i).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, o = (i) => {
      var {
        loading: s,
        disabled: u,
        onClick: d
      } = e;
      !d || s || u || n.value || t(k(d, i));
    }, l = (i) => {
      var {
        loading: s,
        disabled: u,
        onTouchstart: d
      } = e;
      !d || s || u || n.value || t(k(d, i));
    };
    return {
      n: Qf,
      classes: _f,
      pending: n,
      states: a,
      handleClick: o,
      handleTouchstart: l
    };
  }
});
Os.render = ec;
const en = Os;
en.install = function(e) {
  e.component(en.name, en);
};
var JC = en, nc = {
  visibilityHeight: {
    type: [Number, String],
    default: 200
  },
  duration: {
    type: Number,
    default: 300
  },
  right: {
    type: [Number, String]
  },
  bottom: {
    type: [Number, String]
  },
  target: {
    type: [String, Object]
  },
  onClick: Y()
}, {
  n: rc,
  classes: ac
} = ee("back-top");
function tc(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return p(), me(
    Fa,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
      "div",
      Ee({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = En(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [W(e.$slots, "default", {}, () => [re(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ve(() => [re(r, {
          name: "chevron-up"
        })]),
        _: 1
        /* STABLE */
      })])],
      16
      /* FULL_PROPS */
    )],
    8,
    ["disabled"]
  );
}
var Ps = x({
  name: "VarBackTop",
  components: {
    VarButton: en,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: nc,
  setup(e) {
    var n = V(!1), r = V(null), a = V(!0), t, o = (s) => {
      k(e.onClick, s);
      var u = oi(t);
      Qa(t, {
        left: u,
        duration: e.duration,
        animation: Xl
      });
    }, l = () => {
      n.value = Yt(t) >= De(e.visibilityHeight);
    }, i = ti(l, 200);
    return Ne(() => {
      t = e.target ? Jl(e.target, "BackTop") : Ta(r.value), t.addEventListener("scroll", i), a.value = !1;
    }), At(() => {
      t.removeEventListener("scroll", i);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: rc,
      classes: ac,
      click: o
    };
  }
});
Ps.render = tc;
const Sr = Ps;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var QC = Sr;
function oc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ic(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var lc = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: oc
  },
  // 是否隐藏徽标
  hidden: {
    type: Boolean,
    default: !1
  },
  // 是否是小圆点
  dot: {
    type: Boolean,
    default: !1
  },
  // 显示的值
  value: {
    type: [String, Number],
    default: 0
  },
  // 显示最大值
  maxValue: {
    type: [String, Number]
  },
  // 自定义徽标颜色
  color: {
    type: String
  },
  // 定位位置
  position: {
    type: String,
    default: "right-top",
    validator: ic
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Gn,
  classes: sc
} = ee("badge"), uc = {
  key: 1
};
function dc(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [re(
      Ae,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ve(() => [Se(A(
          "span",
          Ee(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (p(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (p(), T(
            "span",
            uc,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Ha, !e.hidden]])]),
        _: 1
        /* STABLE */
      },
      8,
      ["name"]
    ), W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Es = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: lc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = R(() => {
      var {
        type: l,
        position: i,
        dot: s,
        icon: u
      } = e, d = r.default && Gn("position") + " " + Gn("--" + i), v = s ? Gn("dot") : null, f = o(), c = u ? Gn("icon") : null;
      return [Gn("--" + l), d, v, f, c];
    }), t = R(() => {
      var {
        dot: l,
        value: i,
        maxValue: s
      } = e;
      return l ? "" : i !== void 0 && s !== void 0 && L(i) > s ? s + "+" : i;
    }), o = () => {
      var {
        position: l,
        dot: i
      } = e;
      if (i) {
        if (l.includes("right"))
          return Gn("dot--right");
        if (l.includes("left"))
          return Gn("dot--left");
      }
    };
    return {
      n: Gn,
      classes: sc,
      values: t,
      contentClass: a
    };
  }
});
Es.render = dc;
const tr = Es;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var _C = tr, vc = {
  active: {
    type: [Number, String],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: !1
  },
  border: {
    type: Boolean,
    default: !1
  },
  safeArea: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onChange: Y(),
  "onUpdate:active": Y(),
  onBeforeChange: Y(),
  onFabClick: Y(),
  fabProps: {
    type: Object
  }
}, Vs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Ms = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function fc() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Vs), {
    length: r
  } = vn(Ms);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function Po() {
  return Po = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Po.apply(this, arguments);
}
var {
  n: cc,
  classes: mc
} = ee("bottom-navigation"), {
  n: Gt
} = ee("bottom-navigation-item"), ji = Gt("--right-half-space"), Wi = Gt("--left-half-space"), Gi = Gt("--right-space"), pc = {
  type: "primary"
};
function hc(e, n) {
  var r = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (p(), me(
      r,
      Ee({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [W(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var Bs = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: en
  },
  props: vc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = V(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = V({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = fc(), v = () => {
      s.value === 0 || f() || c() || h();
    }, f = () => u.find((B) => {
      var {
        name: I
      } = B;
      return t.value === I.value;
    }), c = () => u.find((B) => {
      var {
        index: I
      } = B;
      return t.value === I.value;
    }), h = () => {
      xe(t.value) && (t.value < 0 ? k(e["onUpdate:active"], 0) : t.value > s.value - 1 && k(e["onUpdate:active"], s.value - 1));
    }, b = (B) => {
      t.value !== B && (e.onBeforeChange ? g(B) : O(B));
    }, g = (B) => {
      var I = k(e.onBeforeChange, B);
      I = we(I) ? I : [I], Promise.all(I).then((N) => {
        N.some((C) => !C) || O(B);
      });
    }, O = (B) => {
      k(e["onUpdate:active"], B), k(e.onChange, B);
    }, P = () => {
      var B = M();
      B.forEach((I) => {
        I.classList.remove(ji, Wi, Gi);
      });
    }, y = (B) => {
      var I = M(), N = I.length, C = B % 2 === 0;
      I.forEach((S, H) => {
        w(C, S, H, N);
      });
    }, w = (B, I, N, C) => {
      var S = N === C - 1;
      if (!B && S) {
        I.classList.add(Gi);
        return;
      }
      var H = N === C / 2 - 1, Q = N === C / 2;
      H ? I.classList.add(ji) : Q && I.classList.add(Wi);
    }, M = () => Array.from(a.value.querySelectorAll("." + Gt())), $ = () => {
      k(e.onFabClick);
    }, z = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: b
    };
    return d(z), le(() => s.value, v), le(() => e.fabProps, (B) => {
      i.value = Po({}, pc, B);
    }, {
      immediate: !0,
      deep: !0
    }), Ne(() => {
      r.fab && y(s.value);
    }), Lt(() => {
      P(), r.fab && y(s.value);
    }), {
      n: cc,
      classes: mc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: $,
      fabProps: i
    };
  }
});
Bs.render = hc;
const kr = Bs;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var xC = kr, gc = {
  name: {
    type: String
  },
  icon: {
    type: String
  },
  label: {
    type: String
  },
  namespace: {
    type: String,
    default: "var-icon"
  },
  badge: {
    type: [Boolean, Object],
    default: !1
  },
  onClick: Y()
};
function yc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Vs), {
    index: r
  } = fn(Ms);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: bc,
  classes: wc
} = ee("bottom-navigation-item"), Cc = {
  type: "danger",
  dot: !0
};
function Sc(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = Fe("ripple");
  return Se((p(), T(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (p(), me(
      r,
      {
        key: 0,
        name: e.icon,
        namespace: e.namespace,
        class: m(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : _("v-if", !0), W(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (p(), me(
      a,
      Ee({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : _("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (p(), T(
        Pe,
        {
          key: 0
        },
        [be(
          ne(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), W(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var Is = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: tr,
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: gc,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = V({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = yc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var c, h = (c = n.value) != null ? c : t.value;
      k(e.onClick, h), k(o.onToggle, h);
    };
    return l(d), le(() => r.value, (c) => {
      a.value = c === !0 ? Cc : r.value;
    }, {
      immediate: !0
    }), {
      n: bc,
      classes: wc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Is.render = Sc;
const $r = Is;
$r.install = function(e) {
  e.component($r.name, $r);
};
var eS = $r, kc = {
  separator: {
    type: String
  },
  onClick: Y()
}, Ns = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), Ds = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function $c() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Ns), {
    length: r
  } = vn(Ds);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Tc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Ns), {
    index: r
  } = fn(Ds);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Oc,
  classes: Pc
} = ee("breadcrumb");
function Ec(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : W(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [A(
        "div",
        {
          class: m(e.n("separator"))
        },
        ne((r = e.separator) != null ? r : e.parentSeparator),
        3
        /* TEXT, CLASS */
      )];
    })],
    2
    /* CLASS */
  );
}
var As = x({
  name: "VarBreadcrumb",
  props: kc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Tc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || k(e.onClick, i);
    };
    return a(null), {
      n: Oc,
      classes: Pc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
As.render = Ec;
const Tr = As;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var nS = Tr, Vc = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Mc
} = ee("breadcrumbs");
function Bc(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var zs = x({
  name: "VarBreadcrumbs",
  props: Vc,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = $c(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Mc
    };
  }
});
zs.render = Bc;
const Or = zs;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var rS = Or;
function Ic(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Nc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Dc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Ac = {
  type: {
    type: String,
    default: "default",
    validator: Ic
  },
  size: {
    type: String,
    default: "normal",
    validator: Nc
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  mode: {
    type: String,
    default: "normal",
    validator: Dc
  },
  elevation: {
    type: [Number, String],
    default: 2
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: zc,
  classes: Lc
} = ee("button-group");
function Rc(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.mode, "" + e.n("--mode-" + e.mode)], [e.vertical, e.n("--vertical"), e.n("--horizontal")], [e.mode === "normal", e.n("$-elevation--" + e.elevation)]))
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ls = x({
  name: "VarButtonGroup",
  props: Ac,
  setup(e) {
    var {
      bindButtons: n
    } = Zf(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: zc,
      classes: Lc
    };
  }
});
Ls.render = Rc;
const Pr = Ls;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var aS = Pr;
function Uc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Yc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Uc,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  outline: {
    type: Boolean,
    default: !1
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  floatingDuration: {
    type: Number,
    default: 250
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  subtitle: {
    type: String
  },
  description: {
    type: String
  },
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  "onUpdate:floating": Y()
};
function qi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ki(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        qi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        qi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Fc,
  classes: Hc
} = ee("card"), jc = 500, Wc = ["src", "alt"];
function Gc(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: q({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "cardFloater",
        class: m(e.n("floater")),
        style: q({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [W(e.$slots, "image", {}, () => [e.src ? (p(), T(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          style: q({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        Wc
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (p(), T(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: q({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [W(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: q({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [W(e.$slots, "close-button", {}, () => [re(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: En(e.close, ["stop"])
          },
          {
            default: ve(() => [re(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: m(e.n("close-button-icon"))
              },
              null,
              8,
              ["class"]
            )]),
            _: 1
            /* STABLE */
          },
          8,
          ["class", "onClick"]
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: m(e.n("holder")),
        style: q({
          width: e.holderWidth,
          height: e.holderHeight
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
var Rs = x({
  name: "VarCard",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarButton: en
  },
  props: Yc,
  setup(e) {
    var n = V(null), r = V(null), a = V("auto"), t = V("auto"), o = V("100%"), l = V("100%"), i = V("auto"), s = V("auto"), u = V(void 0), d = V("hidden"), v = V("0px"), f = V("0"), c = R(() => e.layout === "row"), h = V(!1), b = V(!1), {
      zIndex: g
    } = it(() => e.floating, 1);
    Ht(() => e.floating, () => !c.value);
    var O = "auto", P = "auto", y = null, w = V(null), M = /* @__PURE__ */ function() {
      var I = Ki(function* () {
        clearTimeout(w.value), clearTimeout(y), w.value = null, w.value = setTimeout(/* @__PURE__ */ Ki(function* () {
          var {
            width: N,
            height: C,
            left: S,
            top: H
          } = n.value.getBoundingClientRect();
          a.value = he(N), t.value = he(C), o.value = a.value, l.value = t.value, i.value = he(H), s.value = he(S), u.value = "fixed", O = i.value, P = s.value, h.value = !0, yield Vn(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? jc : 0);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), $ = () => {
      clearTimeout(y), clearTimeout(w.value), w.value = null, o.value = a.value, l.value = t.value, i.value = O, s.value = P, v.value = "0px", f.value = "0", h.value = !1, y = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", O = "auto", P = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, z = () => {
      k(e["onUpdate:floating"], !1);
    }, B = (I) => {
      k(e.onClick, I);
    };
    return le(() => e.floating, (I) => {
      c.value || Me(() => {
        I ? M() : $();
      });
    }, {
      immediate: !0
    }), {
      n: Fc,
      classes: Hc,
      toSizeUnit: he,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: w,
      floaterWidth: o,
      floaterHeight: l,
      floaterTop: i,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: g,
      isRow: c,
      close: z,
      showFloatingButtons: h,
      floated: b,
      handleClick: B
    };
  }
});
Rs.render = Gc;
const Er = Rs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var tS = Er, qc = {
  title: {
    type: [Number, String]
  },
  icon: {
    type: String
  },
  description: {
    type: String
  },
  border: {
    type: Boolean,
    default: !1
  },
  borderOffset: {
    type: [Number, String]
  },
  iconClass: {
    type: String
  },
  titleClass: {
    type: String
  },
  descriptionClass: {
    type: String
  },
  extraClass: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, {
  n: Kc,
  classes: Xc
} = ee("cell");
function Zc(e, n) {
  var r = ie("var-icon"), a = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), e.iconClass))
      },
      [re(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0)]), A(
      "div",
      {
        class: m(e.n("content"))
      },
      [W(e.$slots, "default", {}, () => [e.title ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), e.descriptionClass))
        },
        ne(e.description),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)])],
      2
      /* CLASS */
    ), e.$slots.extra ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("extra"), e.extraClass))
      },
      [W(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Us = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: ze
  },
  props: qc,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      k(e.onClick, a);
    };
    return {
      n: Kc,
      classes: Xc,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
Us.render = Zc;
const or = Us;
or.install = function(e) {
  e.component(or.name, or);
};
var oS = or, Jc = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Qc
} = ee("form-details"), _c = {
  key: 0
}, xc = {
  key: 0
};
function em(e, n) {
  return p(), me(
    Ae,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [A(
          "div",
          {
            class: m(e.n("error-message"))
          },
          [re(
            Ae,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), T(
                "div",
                _c,
                ne(e.errorMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: m(e.n("extra-message"))
          },
          [re(
            Ae,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), T(
                "div",
                xc,
                ne(e.extraMessage),
                1
                /* TEXT */
              )) : _("v-if", !0)]),
              _: 1
              /* STABLE */
            },
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
var Ys = x({
  name: "VarFormDetails",
  props: Jc,
  setup: () => ({
    n: Qc
  })
});
Ys.render = em;
const We = Ys;
We.install = function(e) {
  e.component(We.name, We);
};
var iS = We, nm = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Fs = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Hs = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function rm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Fs), {
    length: r
  } = vn(Hs);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function am() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Fs), {
    index: r
  } = fn(Hs);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Eo() {
  return Eo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Eo.apply(this, arguments);
}
var js = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(js), r = Ya(), a = e ? (t) => {
    e(Eo({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function tm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(js);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: om,
  classes: im
} = ee("checkbox");
function lm(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [Se((p(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-blank-outline",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Ws = x({
  name: "VarCheckbox",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: nm,
  setup(e) {
    var n = V(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = V(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = am(), {
      form: i,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), c = ($) => {
      Me(() => {
        var {
          validateTrigger: z,
          rules: B,
          modelValue: I
        } = e;
        d(z, $, B, I);
      });
    }, h = ($) => {
      n.value = $;
      var {
        checkedValue: z,
        onChange: B
      } = e;
      k(e["onUpdate:modelValue"], n.value), k(B, n.value), c("onChange"), $ === z ? o == null || o.onChecked(z) : o == null || o.onUnchecked(z);
    }, b = ($) => {
      var {
        disabled: z,
        readonly: B,
        checkedValue: I,
        uncheckedValue: N,
        onClick: C
      } = e;
      if (!(i != null && i.disabled.value || z) && (k(C, $), !(i != null && i.readonly.value || B))) {
        t.value = !0;
        var S = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && S || h(r.value ? N : I);
      }
    }, g = ($) => {
      var {
        checkedValue: z,
        uncheckedValue: B
      } = e;
      n.value = $.includes(z) ? z : B;
    }, O = () => {
      t.value = !1;
    }, P = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, y = ($) => {
      var {
        checkedValue: z,
        uncheckedValue: B
      } = e, I = ![z, B].includes($);
      I && ($ = r.value ? B : z), h($);
    }, w = () => v(e.rules, e.modelValue);
    le(() => e.modelValue, ($) => {
      n.value = $;
    }, {
      immediate: !0
    });
    var M = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: w,
      resetValidation: f,
      reset: P,
      resetWithAnimation: O
    };
    return k(l, M), k(s, M), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: om,
      classes: im,
      handleClick: b,
      toggle: y,
      reset: P,
      validate: w,
      resetValidation: f
    };
  }
});
Ws.render = lm;
const ir = Ws;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var lS = ir;
function sm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var um = {
  modelValue: {
    type: Array,
    default: () => []
  },
  max: {
    type: [String, Number]
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: sm
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: dm,
  classes: vm
} = ee("checkbox-group");
function fm(e, n) {
  var r = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), re(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Gs = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: um,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = rm(), {
      bindForm: l
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = R(() => i.value), f = (z) => {
      Me(() => {
        var {
          validateTrigger: B,
          rules: I,
          modelValue: N
        } = e;
        s(B, z, I, N);
      });
    }, c = (z) => {
      k(e["onUpdate:modelValue"], z), k(e.onChange, z), f("onChange");
    }, h = (z) => {
      var {
        modelValue: B
      } = e;
      B.includes(z) || c([...B, z]);
    }, b = (z) => {
      var {
        modelValue: B
      } = e;
      B.includes(z) && c(B.filter((I) => I !== z));
    }, g = () => t.forEach((z) => {
      var {
        sync: B
      } = z;
      return B(e.modelValue);
    }), O = () => {
      t.forEach((z) => z.resetWithAnimation());
    }, P = () => {
      var z = t.map((I) => {
        var {
          checkedValue: N
        } = I;
        return N.value;
      }), B = Bi(z);
      return O(), k(e["onUpdate:modelValue"], B), B;
    }, y = () => {
      var z = t.filter((I) => {
        var {
          checked: N
        } = I;
        return !N.value;
      }).map((I) => {
        var {
          checkedValue: N
        } = I;
        return N.value;
      }), B = Bi(z);
      return O(), k(e["onUpdate:modelValue"], B), B;
    }, w = () => {
      k(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, g, {
      deep: !0
    }), le(() => a.value, g);
    var $ = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: b,
      validate: M,
      resetValidation: d,
      reset: w,
      errorMessage: v
    };
    return o($), k(l, $), {
      errorMessage: i,
      n: dm,
      classes: vm,
      checkAll: P,
      inverseAll: y,
      reset: w,
      validate: M,
      resetValidation: d
    };
  }
});
Gs.render = fm;
const Vr = Gs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var sS = Vr;
function cm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function mm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var pm = {
  type: {
    type: String,
    default: "default",
    validator: cm
  },
  size: {
    type: String,
    default: "normal",
    validator: mm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Xe(ls, "name"),
  plain: {
    type: Boolean,
    default: !1
  },
  round: {
    type: Boolean,
    default: !0
  },
  block: {
    type: Boolean,
    default: !1
  },
  closable: {
    type: Boolean,
    default: !1
  },
  onClose: Y()
}, {
  n: qn,
  classes: hm
} = ee("chip");
function gm(e, n) {
  var r = ie("var-icon");
  return p(), me(
    Ae,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [W(e.$slots, "left"), A(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        ), W(e.$slots, "right"), e.closable ? (p(), T(
          "span",
          {
            key: 0,
            class: m(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.handleClose && e.handleClose(...arguments);
            })
          },
          [re(
            r,
            {
              name: "" + (e.iconName ? e.iconName : "close-circle")
            },
            null,
            8,
            ["name"]
          )],
          2
          /* CLASS */
        )) : _("v-if", !0)],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["name"]
  );
}
var qs = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: pm,
  setup(e) {
    var n = R(() => {
      var {
        plain: t,
        textColor: o,
        color: l
      } = e;
      return t ? {
        color: o || l,
        borderColor: l
      } : {
        color: o,
        background: l
      };
    }), r = R(() => {
      var {
        size: t,
        block: o,
        type: l,
        plain: i,
        round: s
      } = e, u = qn(o ? "$--flex" : "$--inline-flex"), d = i ? qn("plain") + " " + qn("plain-" + l) : qn("--" + l), v = s ? qn("--round") : null;
      return [qn("--" + t), u, d, v];
    }), a = (t) => {
      k(e.onClose, t);
    };
    return {
      n: qn,
      classes: hm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
qs.render = gm;
const lr = qs;
lr.install = function(e) {
  e.component(lr.name, lr);
};
var uS = lr;
function ym(e) {
  return ["row", "column"].includes(e);
}
function bm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function wm(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var Cm = {
  span: {
    type: [String, Number],
    default: 24
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "row",
    validator: ym
  },
  justify: {
    type: String,
    validator: bm
  },
  align: {
    type: String,
    validator: wm
  },
  xs: {
    type: [Object, Number, String]
  },
  sm: {
    type: [Object, Number, String]
  },
  md: {
    type: [Object, Number, String]
  },
  lg: {
    type: [Object, Number, String]
  },
  xl: {
    type: [Object, Number, String]
  },
  onClick: Y()
}, Ks = Symbol("ROW_BIND_COL_KEY"), Xs = Symbol("ROW_COUNT_COL_KEY");
function Sm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Ks), {
    length: r
  } = vn(Xs);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function km() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Ks), {
    index: r
  } = fn(Xs);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: dt,
  classes: $m
} = ee("col");
function Tm(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: q({
        flexDirection: e.direction,
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Zs = x({
  name: "VarCol",
  props: Cm,
  setup(e) {
    var n = V({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = km(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ri(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(dt("--span-" + u + "-" + c)), f && v.push(dt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(dt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      k(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), k(o, l), {
      n: dt,
      classes: $m,
      padding: n,
      toNumber: L,
      toSizeUnit: he,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: Ct
    };
  }
});
Zs.render = Tm;
const Mr = Zs;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var dS = Mr, Js = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Qs = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Om() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Js), {
    length: r
  } = vn(Qs);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Pm = {
  modelValue: {
    type: [Array, String, Number]
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: Boolean,
    default: !0
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Em
} = ee("collapse");
function Vm(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var _s = x({
  name: "VarCollapse",
  props: Pm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Om(), t = R(() => e.modelValue), o = R(() => e.offset), l = () => !e.accordion && !we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (c, h) => l() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((b) => b !== c) : null, s = (c, h) => {
      var b = i(c, h);
      k(e["onUpdate:modelValue"], b), k(e.onChange, b);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: b
          } = h;
          return e.modelValue === b.value;
        });
      var c = r.filter((h) => {
        var {
          name: b
        } = h;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: h,
        name: b
      } = c;
      return b.value === void 0 && e.modelValue === h.value;
    }) : r.filter((c) => {
      var {
        index: h,
        name: b
      } = c;
      return b.value === void 0 && e.modelValue.includes(h.value);
    }), v = () => {
      if (l()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((h) => {
          var b = e.accordion ? c === h : c.includes(h);
          h.init(e.accordion, b);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Me().then(v)), le(() => e.modelValue, () => Me().then(v)), {
      n: Em
    };
  }
});
_s.render = Vm;
const Br = _s;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var vS = Br;
function Mm() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Js), {
    index: r
  } = fn(Qs);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Bm = {
  name: {
    type: [String, Number]
  },
  title: {
    type: String
  },
  icon: {
    type: String,
    default: "chevron-down"
  },
  disabled: {
    type: Boolean,
    default: !1
  }
}, {
  n: Im,
  classes: Nm
} = ee("collapse-item");
function Dm(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [A(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [A(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [W(e.$slots, "title", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [W(e.$slots, "icon", {}, () => [re(
          r,
          {
            name: e.icon,
            transition: 250,
            class: m(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), Se(A(
      "div",
      {
        class: m(e.n("content")),
        ref: "contentEl",
        onTransitionend: n[1] || (n[1] = function() {
          return e.transitionend && e.transitionend(...arguments);
        }),
        onTransitionstart: n[2] || (n[2] = function() {
          return e.start && e.start(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Ha, e.show]])],
    2
    /* CLASS */
  );
}
var xs = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Bm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Mm(), t = !0, o = V(null), l = V(!1), i = V(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = R(() => e.name), f = (y, w) => {
      s.value === void 0 || y && we(s.value) || w === i.value || (i.value = w, c(!0));
    }, c = (y) => {
      e.disabled || y || d(e.name || n.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, Me(() => {
        var {
          offsetHeight: y
        } = o.value;
        o.value.style.height = 0 + "px", On(() => {
          o.value.style.height = y + "px", t && Ft(() => {
            t && O();
          });
        });
      }));
    }, b = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: y
        } = o.value;
        o.value.style.height = y + "px", On(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, O = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), le(i, (y) => {
      y ? h() : g();
    }), {
      n: Im,
      start: b,
      classes: Nm,
      show: l,
      isShow: i,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: O
    };
  }
});
xs.render = Dm;
const Ir = xs;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var fS = Ir, Am = {
  time: {
    type: [String, Number],
    default: 0
  },
  format: {
    type: String,
    default: "HH : mm : ss"
  },
  autoStart: {
    type: Boolean,
    default: !0
  },
  onEnd: Y(),
  onChange: Y()
}, {
  n: zm
} = ee("countdown"), Vo = 1e3, Mo = 60 * Vo, Bo = 60 * Mo, Xi = 24 * Bo;
function Lm(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default", ni(Gl(e.timeData)), () => [be(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var eu = x({
  name: "VarCountdown",
  props: Am,
  setup(e) {
    var n = V(0), r = V(!1), a = V(""), t = V(0), o = V(0), l = V({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), i = (c, h) => {
      var b = Object.values(h), g = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (g.forEach((y, w) => {
        c.includes(y) ? c = c.replace(y, ga("" + b[w], 2, "0")) : b[w + 1] += b[w] * O[w];
      }), c.includes("S")) {
        var P = ga("" + b[b.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", P) : c.includes("SS") ? c = c.replace("SS", P.slice(0, 2)) : c = c.replace("S", P.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / Xi), b = Math.floor(c % Xi / Bo), g = Math.floor(c % Bo / Mo), O = Math.floor(c % Mo / Vo), P = Math.floor(c % Vo), y = {
        days: h,
        hours: b,
        minutes: g,
        seconds: O,
        milliseconds: P
      };
      l.value = y, k(e.onChange, l.value), a.value = i(e.format, y);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: b
      } = e, g = performance.now();
      n.value || (n.value = g + L(c));
      var O = n.value - g;
      if (O < 0 && (O = 0), o.value = O, s(O), O === 0) {
        k(h);
        return;
      }
      (b || r.value) && (t.value = On(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || L(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, Iv(t.value), u();
    };
    return le(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: l,
      n: zm,
      start: d,
      pause: v,
      reset: f
    };
  }
});
eu.render = Lm;
const Nr = eu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var cS = Nr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ea = 9e15, hr = 1e9, Io = "0123456789abcdef", Tt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ot = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", No = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed at run-time using the `Decimal.config` method.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used when rounding to `precision`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The modulo mode used when calculating the modulus: a mod n.
  // The quotient (q = a / n) is calculated according to the corresponding rounding mode.
  // The remainder (r) is calculated as: r = a - n * q.
  //
  // UP         0 The remainder is positive if the dividend is negative, else is negative.
  // DOWN       1 The remainder has the same sign as the dividend (JavaScript %).
  // FLOOR      3 The remainder has the same sign as the divisor (Python %).
  // HALF_EVEN  6 The IEEE 754 remainder function.
  // EUCLID     9 Euclidian division. q = sign(n) * floor(a / abs(n)). Always positive.
  //
  // Truncated division (1), floored division (3), the IEEE 754 remainder (6), and Euclidian
  // division (9) are commonly used for the modulus operation. The other rounding modes can also
  // be used, but they may not give useful results.
  modulo: 1,
  // 0 to 9
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -EXP_LIMIT
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to EXP_LIMIT
  // The minimum exponent value, beneath which underflow to zero occurs.
  // JavaScript numbers: -324  (5e-324)
  minE: -Ea,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Ea,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, nu, Dn, fe = !0, qt = "[DecimalError] ", mr = qt + "Invalid argument: ", ru = qt + "Precision limit exceeded", au = qt + "crypto unavailable", tu = "[object Decimal]", Ze = Math.floor, Ye = Math.pow, Rm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Um = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Ym = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ou = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, Fm = 9007199254740991, Hm = Tt.length - 1, Do = Ot.length - 1, K = { toStringTag: tu };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
K.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(mr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
K.comparedTo = K.cmp = function(e) {
  var n, r, a, t, o = this, l = o.d, i = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!l || !i)
    return !s || !u ? NaN : s !== u ? s : l === i ? 0 : !l ^ s < 0 ? 1 : -1;
  if (!l[0] || !i[0])
    return l[0] ? s : i[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = l.length, t = i.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (l[n] !== i[n])
      return l[n] > i[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
K.cosine = K.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = jm(a, du(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ge(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Oe(u.plus(d).times(i), u.plus(s), l + 2, 1), Ge(i.d).slice(0, l) === (r = Ge(a.d)).slice(0, l))
      if (r = r.slice(l - 3, l + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(i, e + 1, 0), i.times(i).times(i).eq(d))) {
          a = i;
          break;
        }
        l += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, ue(a, e, v.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
K.dividedBy = K.div = function(e) {
  return Oe(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Oe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, r, a, t, o = this, l = o.constructor, i = new l(1);
  if (!o.isFinite())
    return new l(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return i;
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Xt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Aa(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Aa(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Xt(5, e)), t = Aa(o, 2, t, t, !0);
    for (var l, i = new o(5), s = new o(16), u = new o(20); e--; )
      l = t.times(t), t = t.times(i.plus(l.times(s.times(l).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Oe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? kn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? kn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = kn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Oe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = kn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= Do)
      return l = kn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= Do)
      return l = kn(d, v + 4, f).times(0.5), l.s = u.s, l;
  }
  for (d.precision = i = v + 10, d.rounding = 1, r = Math.min(28, i / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(i / de), a = 1, s = u.times(u), l = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = l.minus(t.div(a += 2)), t = t.times(s), l = o.plus(t.div(a += 2)), l.d[n] !== void 0)
      for (e = n; l.d[e] === o.d[e] && e--; )
        ;
  return r && (l = l.times(2 << r - 1)), fe = !0, ue(l, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
};
K.isNaN = function() {
  return !this.s;
};
K.isNegative = K.isNeg = function() {
  return this.s < 0;
};
K.isPositive = K.isPos = function() {
  return this.s > 0;
};
K.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
K.lessThan = K.lt = function(e) {
  return this.cmp(e) < 0;
};
K.lessThanOrEqualTo = K.lte = function(e) {
  return this.cmp(e) < 1;
};
K.logarithm = K.log = function(e) {
  var n, r, a, t, o, l, i, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, c = 5;
  if (e == null)
    e = new d(10), n = !0;
  else {
    if (e = new d(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
      return new d(NaN);
    n = e.eq(10);
  }
  if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
    return new d(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
  if (n)
    if (r.length > 1)
      o = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      o = t !== 1;
    }
  if (fe = !1, i = v + c, l = nr(u, i), a = n ? Pt(d, i + 10) : nr(e, i), s = Oe(l, a, i, 1), xa(s.d, t = v, f))
    do
      if (i += 10, l = nr(u, i), a = n ? Pt(d, i + 10) : nr(e, i), s = Oe(l, a, i, 1), !o) {
        +Ge(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (xa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
K.minus = K.sub = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, h = c.constructor;
  if (e = new h(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new h(NaN) : c.d ? e.s = -e.s : e = new h(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, i = h.precision, s = h.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new h(c);
    else
      return new h(s === 3 ? -0 : 0);
    return fe ? ue(e, i, s) : e;
  }
  if (r = Ze(e.e / de), d = Ze(c.e / de), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, l = f.length) : (n = f, r = d, l = u.length), a = Math.max(Math.ceil(i / de), l) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, l = f.length, v = a < l, v && (l = a), a = 0; a < l; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), l = u.length, a = f.length - l; a > 0; --a)
    u[l++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Tn - 1;
      --u[t], u[a] += Tn;
    }
    u[a] -= f[a];
  }
  for (; u[--l] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Kt(u, r), fe ? ue(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return Ao(this);
};
K.naturalLogarithm = K.ln = function() {
  return nr(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, i = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, i, s) : e;
  if (o = Ze(v.e / de), a = Ze(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / de), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Tn | 0, u[t] %= Tn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = Kt(u, a), fe ? ue(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(mr + e);
  return r.d ? (n = iu(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Gm(a, du(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (fe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = Ge(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Oe(l, o, r + 2, 1)).times(0.5), Ge(o.d).slice(0, r) === (n = Ge(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(l))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(l));
        break;
      }
  return fe = !0, ue(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Oe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, o, l, i, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Ze(d.e / de) + Ze(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + c[a] * f[t - a - 1] + n, o[t--] = i % Tn | 0, n = i / Tn | 0;
    o[t] = (o[t] + n) % Tn | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Kt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return pi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, !0) : (tn(e, 0, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = Mn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Mn(t) : (tn(e, 0, hr), n === void 0 ? n = o.rounding : tn(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Mn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, h = c.d, b = c.constructor;
  if (!h)
    return new b(c);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), o = n.e = iu(h) - c.e - 1, l = o % de, n.d[0] = Ye(10, l < 0 ? de + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new b(e), !i.isInt() || i.lt(u))
      throw Error(mr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (fe = !1, i = new b(Ge(h)), d = b.precision, b.precision = o = h.length * de * 2; v = Oe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Oe(u, a, o, 1).minus(c).abs().cmp(Oe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], b.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return pi(this, 16, e, n);
};
K.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : tn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (fe = !1, r = Oe(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return pi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ye(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Fm)
    return t = lu(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ye(+i, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + Ge(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (fe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Ao(e.times(nr(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), xa(t.d, a, o) && (n = a + 10, t = ue(Ao(e.times(nr(i, n + r)), n), n + 5, 1), +Ge(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, fe = !0, s.rounding = o, ue(t, a, o));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = Mn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ge(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Xn(r)), o += a;
    l = e[n], a = l + "", r = de - a.length, r && (o += Xn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function tn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(mr + e);
}
function xa(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, l;
}
function ht(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Io.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function jm(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Xt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Aa(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var l = n.times(n);
    n = l.times(l).minus(l).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Oe = function() {
  function e(a, t, o) {
    var l, i = 0, s = a.length;
    for (a = a.slice(); s--; )
      l = a[s] * t + i, a[s] = l % o | 0, i = l / o | 0;
    return i && a.unshift(i), a;
  }
  function n(a, t, o, l) {
    var i, s;
    if (o != l)
      s = o > l ? 1 : -1;
    else
      for (i = s = 0; i < o; i++)
        if (a[i] != t[i]) {
          s = a[i] > t[i] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, l) {
    for (var i = 0; o--; )
      a[o] -= i, i = a[o] < t[o] ? 1 : 0, a[o] = i * l + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, l, i, s) {
    var u, d, v, f, c, h, b, g, O, P, y, w, M, $, z, B, I, N, C, S, H = a.constructor, Q = a.s == t.s ? 1 : -1, j = a.d, E = t.d;
    if (!j || !j[0] || !E || !E[0])
      return new H(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (j ? E && j[0] == E[0] : !E) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          j && j[0] == 0 || !E ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), C = E.length, I = j.length, O = new H(Q), P = O.d = [], v = 0; E[v] == (j[v] || 0); v++)
      ;
    if (E[v] > (j[v] || 0) && d--, o == null ? ($ = o = H.precision, l = H.rounding) : i ? $ = o + (a.e - t.e) + 1 : $ = o, $ < 0)
      P.push(1), h = !0;
    else {
      if ($ = $ / c + 2 | 0, v = 0, C == 1) {
        for (f = 0, E = E[0], $++; (v < I || f) && $--; v++)
          z = f * s + (j[v] || 0), P[v] = z / E | 0, f = z % E | 0;
        h = f || v < I;
      } else {
        for (f = s / (E[0] + 1) | 0, f > 1 && (E = e(E, f, s), j = e(j, f, s), C = E.length, I = j.length), B = C, y = j.slice(0, C), w = y.length; w < C; )
          y[w++] = 0;
        S = E.slice(), S.unshift(0), N = E[0], E[1] >= s / 2 && ++N;
        do
          f = 0, u = n(E, y, C, w), u < 0 ? (M = y[0], C != w && (M = M * s + (y[1] || 0)), f = M / N | 0, f > 1 ? (f >= s && (f = s - 1), b = e(E, f, s), g = b.length, w = y.length, u = n(b, y, g, w), u == 1 && (f--, r(b, C < g ? S : E, g, s))) : (f == 0 && (u = f = 1), b = E.slice()), g = b.length, g < w && b.unshift(0), r(y, b, w, s), u == -1 && (w = y.length, u = n(E, y, C, w), u < 1 && (f++, r(y, C < w ? S : E, w, s))), w = y.length) : u === 0 && (f++, y = [0]), P[v++] = f, u && y[0] ? y[w++] = j[B] || 0 : (y = [j[B]], w = 1);
        while ((B++ < I || y[0] !== void 0) && $--);
        h = y[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (c == 1)
      O.e = d, nu = h;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      O.e = v + d * c - 1, ue(O, i ? o + O.e + 1 : o, l, h);
    }
    return O;
  };
}();
function ue(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, i = v[0]; i >= 10; i /= 10)
        t++;
      if (o = n - t, o < 0)
        o += de, l = n, d = v[f = 0], s = d / Ye(10, t - l - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / de), i = v.length, f >= i)
        if (a) {
          for (; i++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= de, l = o - de + 1;
        } else
          break e;
      else {
        for (d = i = v[f], t = 1; i >= 10; i /= 10)
          t++;
        o %= de, l = o - de + t, s = l < 0 ? 0 : d / Ye(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ye(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / Ye(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ye(10, de - o), v[f] = l > 0 ? (d / Ye(10, t - l) % Ye(10, l) | 0) * i : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, l = v[0]; l >= 10; l /= 10)
              o++;
            for (l = v[0] += i, i = 1; l >= 10; l /= 10)
              i++;
            o != i && (e.e++, v[0] == Tn && (v[0] = 1));
            break;
          } else {
            if (v[f] += i, v[f] != Tn)
              break;
            v[f--] = 0, i = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return fe && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function Mn(e, n, r) {
  if (!e.isFinite())
    return uu(e);
  var a, t = e.e, o = Ge(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Xn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Xn(-t - 1) + o, r && (a = r - l) > 0 && (o += Xn(a))) : t >= l ? (o += Xn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + Xn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += Xn(a))), o;
}
function Kt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Pt(e, n, r) {
  if (n > Hm)
    throw fe = !0, r && (e.precision = r), Error(ru);
  return ue(new e(Tt), n, 1, !0);
}
function kn(e, n, r) {
  if (n > Do)
    throw Error(ru);
  return ue(new e(Ot), n, r, !0);
}
function iu(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Xn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function lu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Ji(o.d, l) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Ji(n.d, l);
  }
  return fe = !0, o;
}
function Zi(e) {
  return e.d[e.d.length - 1] & 1;
}
function su(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Ao(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Oe(o, r, s, 1)), Ge(i.d).slice(0, s) === Ge(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && xa(l.d, s - a, c, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = h, c, fe = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function nr(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, c = 1, h = 10, b = e, g = b.d, O = b.constructor, P = O.rounding, y = O.precision;
  if (b.s < 0 || !g || !g[0] || !b.e && g[0] == 1 && g.length == 1)
    return new O(g && !g[0] ? -1 / 0 : b.s != 1 ? NaN : g ? 0 : b);
  if (n == null ? (fe = !1, d = y) : d = n, O.precision = d += h, r = Ge(g), a = r.charAt(0), Math.abs(o = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = Ge(b.d), a = r.charAt(0), c++;
    o = b.e, a > 1 ? (b = new O("0." + r), o++) : b = new O(a + "." + r.slice(1));
  } else
    return u = Pt(O, d + 2, y).times(o + ""), b = nr(new O(a + "." + r.slice(1)), d - h).plus(u), O.precision = y, n == null ? ue(b, y, P, fe = !0) : b;
  for (v = b, s = l = b = Oe(b.minus(1), b.plus(1), d, 1), f = ue(b.times(b), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Oe(l, new O(t), d, 1)), Ge(u.d).slice(0, d) === Ge(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Pt(O, d + 2, y).times(o + ""))), s = Oe(s, new O(c), d, 1), n == null)
        if (xa(s.d, d - h, P, i))
          O.precision = d += h, u = l = b = Oe(v.minus(1), v.plus(1), d, 1), f = ue(b.times(b), d, 1), t = i = 1;
        else
          return ue(s, O.precision = y, P, fe = !0);
      else
        return O.precision = y, s;
    s = u, t += 2;
  }
}
function uu(e) {
  return String(e.s * e.s / 0);
}
function zo(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % de, r < 0 && (a += de), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= de; a < t; )
        e.d.push(+n.slice(a, a += de));
      n = n.slice(a), a = de - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), fe && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function Wm(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), ou.test(n))
      return zo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Um.test(n))
    r = 16, n = n.toLowerCase();
  else if (Rm.test(n))
    r = 2;
  else if (Ym.test(n))
    r = 8;
  else
    throw Error(mr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = lu(a, new a(r), o, o * 2)), u = ht(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Kt(u, d), e.d = u, fe = !1, l && (e = Oe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : rr.pow(2, s))), fe = !0, e);
}
function Gm(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Aa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Xt(5, r)), n = Aa(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function Aa(e, n, r, a, t) {
  var o, l, i, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), i = new e(a); ; ) {
    if (l = Oe(i.times(s), new e(n++ * n++), u, 1), i = t ? a.plus(l) : a.minus(l), a = Oe(l.times(s), new e(n++ * n++), u, 1), l = i.plus(a), l.d[d] !== void 0) {
      for (o = d; l.d[o] === i.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = i, i = a, a = l, l = o;
  }
  return fe = !0, l.d.length = d + 1, l;
}
function Xt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function du(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = Zi(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = Zi(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function pi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (tn(r, 1, hr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = uu(e);
  else {
    for (d = Mn(e), l = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - l, f.d = ht(Mn(f), 10, t), f.e = f.d.length), v = ht(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = nu), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Io.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = ht(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Io.charAt(v[l]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (o < 0 ? "p" : "p+") + o;
      } else if (o < 0) {
        for (; ++o; )
          d = "0" + d;
        d = "0." + d;
      } else if (++o > s)
        for (o -= s; o--; )
          d += "0";
      else
        o < s && (d = d.slice(0, o) + "." + d.slice(o));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function Ji(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function qm(e) {
  return new this(e).abs();
}
function Km(e) {
  return new this(e).acos();
}
function Xm(e) {
  return new this(e).acosh();
}
function Zm(e, n) {
  return new this(e).plus(n);
}
function Jm(e) {
  return new this(e).asin();
}
function Qm(e) {
  return new this(e).asinh();
}
function _m(e) {
  return new this(e).atan();
}
function xm(e) {
  return new this(e).atanh();
}
function ep(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
}
function np(e) {
  return new this(e).cbrt();
}
function rp(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function ap(e, n, r) {
  return new this(e).clamp(n, r);
}
function tp(e) {
  if (!e || typeof e != "object")
    throw Error(qt + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    hr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Ea,
    0,
    "toExpPos",
    0,
    Ea,
    "maxE",
    0,
    Ea,
    "minE",
    -Ea,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = No[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(mr + r + ": " + a);
  if (r = "crypto", t && (this[r] = No[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(au);
      else
        this[r] = !1;
    else
      throw Error(mr + r + ": " + a);
  return this;
}
function op(e) {
  return new this(e).cos();
}
function ip(e) {
  return new this(e).cosh();
}
function vu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Qi(o)) {
      u.s = o.s, fe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (l = 0, i = o; i >= 10; i /= 10)
          l++;
        fe ? l > t.maxE ? (u.e = NaN, u.d = null) : l < t.minE ? (u.e = 0, u.d = [0]) : (u.e = l, u.d = [o]) : (u.e = l, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return zo(u, o.toString());
    } else if (s !== "string")
      throw Error(mr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), ou.test(o) ? zo(u, o) : Wm(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = tp, t.clone = vu, t.isDecimal = Qi, t.abs = qm, t.acos = Km, t.acosh = Xm, t.add = Zm, t.asin = Jm, t.asinh = Qm, t.atan = _m, t.atanh = xm, t.atan2 = ep, t.cbrt = np, t.ceil = rp, t.clamp = ap, t.cos = op, t.cosh = ip, t.div = lp, t.exp = sp, t.floor = up, t.hypot = dp, t.ln = vp, t.log = fp, t.log10 = mp, t.log2 = cp, t.max = pp, t.min = hp, t.mod = gp, t.mul = yp, t.pow = bp, t.random = wp, t.round = Cp, t.sign = Sp, t.sin = kp, t.sinh = $p, t.sqrt = Tp, t.sub = Op, t.sum = Pp, t.tan = Ep, t.tanh = Vp, t.trunc = Mp, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function lp(e, n) {
  return new this(e).div(n);
}
function sp(e) {
  return new this(e).exp();
}
function up(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function dp() {
  var e, n, r = new this(0);
  for (fe = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return fe = !0, new this(1 / 0);
      r = n;
    }
  return fe = !0, r.sqrt();
}
function Qi(e) {
  return e instanceof rr || e && e.toStringTag === tu || !1;
}
function vp(e) {
  return new this(e).ln();
}
function fp(e, n) {
  return new this(e).log(n);
}
function cp(e) {
  return new this(e).log(2);
}
function mp(e) {
  return new this(e).log(10);
}
function pp() {
  return su(this, arguments, "lt");
}
function hp() {
  return su(this, arguments, "gt");
}
function gp(e, n) {
  return new this(e).mod(n);
}
function yp(e, n) {
  return new this(e).mul(n);
}
function bp(e, n) {
  return new this(e).pow(n);
}
function wp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, hr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(au);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= de, a && e && (t = Ye(10, de - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
    i.pop();
  if (o < 0)
    r = 0, i = [0];
  else {
    for (r = -1; i[0] === 0; r -= de)
      i.shift();
    for (a = 1, t = i[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return l.e = r, l.d = i, l;
}
function Cp(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Sp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function kp(e) {
  return new this(e).sin();
}
function $p(e) {
  return new this(e).sinh();
}
function Tp(e) {
  return new this(e).sqrt();
}
function Op(e, n) {
  return new this(e).sub(n);
}
function Pp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Ep(e) {
  return new this(e).tan();
}
function Vp(e) {
  return new this(e).tanh();
}
function Mp(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var rr = K.constructor = vu(No);
Tt = new rr(Tt);
Ot = new rr(Ot);
var Bp = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: [String, Number]
  },
  max: {
    type: [String, Number]
  },
  step: {
    type: [String, Number],
    default: 1
  },
  color: {
    type: String
  },
  inputWidth: {
    type: [String, Number]
  },
  inputTextSize: {
    type: [String, Number]
  },
  buttonSize: {
    type: [String, Number]
  },
  decimalLength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disableIncrement: {
    type: Boolean,
    default: !1
  },
  disableDecrement: {
    type: Boolean,
    default: !1
  },
  disableInput: {
    type: Boolean,
    default: !1
  },
  lazyChange: {
    type: Boolean,
    default: !1
  },
  incrementButton: {
    type: Boolean,
    default: !0
  },
  decrementButton: {
    type: Boolean,
    default: !0
  },
  press: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInputChange", "onLazyChange", "onIncrement", "onDecrement"]
  },
  rules: {
    type: Array
  },
  onBeforeChange: Y(),
  onChange: Y(),
  onIncrement: Y(),
  onDecrement: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Ip,
  classes: Np
} = ee("counter"), _i = 100, xi = 600, Dp = ["inputmode", "readonly", "disabled"];
function Ap(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      Ee({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.decrement,
          onTouchstart: e.pressDecrement,
          onTouchend: e.releaseDecrement,
          onTouchcancel: e.releaseDecrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.formDisabled || e.readonly || e.formReadonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), Se(A(
        "input",
        {
          class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (o) => e.inputValue = o),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        Dp
      ), [[mv, e.inputValue]]), Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: q({
            width: e.toSizeUnit(e.buttonSize),
            height: e.toSizeUnit(e.buttonSize)
          }),
          onClick: e.increment,
          onTouchstart: e.pressIncrement,
          onTouchend: e.releaseIncrement,
          onTouchcancel: e.releaseIncrement
        },
        null,
        8,
        ["class", "style", "onClick", "onTouchstart", "onTouchend", "onTouchcancel"]
      ), [[t, {
        disabled: !e.ripple || e.disabled || e.readonly || e.formDisabled || e.formReadonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
      /* FULL_PROPS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var fu = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: ze
  },
  inheritAttrs: !1,
  props: Bp,
  setup(e) {
    var n = V(""), r, a, t, o, {
      bindForm: l,
      form: i
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), {
      readonly: f,
      disabled: c
    } = i ?? {}, h = () => d(e.rules, e.modelValue), b = (E) => {
      Me(() => {
        var {
          validateTrigger: F,
          rules: U,
          modelValue: X
        } = e;
        u(F, E, U, X);
      });
    }, g = () => {
      var {
        min: E
      } = e;
      k(e["onUpdate:modelValue"], E != null ? L(E) : 0), v();
    }, O = {
      reset: g,
      validate: h,
      resetValidation: v
    }, P = R(() => {
      var {
        max: E,
        modelValue: F
      } = e;
      return E != null && L(F) >= L(E);
    }), y = R(() => {
      var {
        min: E,
        modelValue: F
      } = e;
      return E != null && L(F) <= L(E);
    }), w = (E) => {
      var {
        decimalLength: F,
        max: U,
        min: X
      } = e, D = L(E);
      return U != null && D > L(U) && (D = L(U)), X != null && D < L(X) && (D = L(X)), E = String(D), F != null && (E = D.toFixed(L(F))), E;
    }, M = (E) => {
      var {
        lazyChange: F,
        onBeforeChange: U
      } = e, {
        value: X
      } = E.target, D = w(X);
      F ? k(U, L(D), j) : Q(D), b("onInputChange");
    }, $ = () => {
      var {
        disabled: E,
        readonly: F,
        disableDecrement: U,
        decrementButton: X,
        lazyChange: D,
        step: Z,
        modelValue: G,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || E || F || U || !X) && !y.value) {
        var oe = new rr(L(G)).minus(new rr(L(Z))).toString(), ge = w(oe), pe = L(ge);
        k(J, pe), D ? k(ae, pe, j) : (Q(ge), b("onDecrement"));
      }
    }, z = () => {
      var {
        disabled: E,
        readonly: F,
        disableIncrement: U,
        incrementButton: X,
        lazyChange: D,
        step: Z,
        modelValue: G,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || E || F || U || !X) && !P.value) {
        var oe = new rr(L(G)).plus(new rr(L(Z))).toString(), ge = w(oe), pe = L(ge);
        k(J, pe), D ? k(ae, pe, j) : (Q(ge), b("onIncrement"));
      }
    }, B = () => {
      var {
        press: E,
        lazyChange: F
      } = e;
      !E || F || (o = window.setTimeout(() => {
        H();
      }, xi));
    }, I = () => {
      var {
        press: E,
        lazyChange: F
      } = e;
      !E || F || (t = window.setTimeout(() => {
        S();
      }, xi));
    }, N = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, C = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, S = () => {
      r = window.setTimeout(() => {
        z(), S();
      }, _i);
    }, H = () => {
      a = window.setTimeout(() => {
        $(), H();
      }, _i);
    }, Q = (E) => {
      n.value = E;
      var F = L(E);
      k(e["onUpdate:modelValue"], F);
    }, j = (E) => {
      Q(w(String(E))), b("onLazyChange");
    };
    return k(l, O), le(() => e.modelValue, (E) => {
      Q(w(String(E))), k(e.onChange, L(E));
    }), Q(w(String(e.modelValue))), {
      n: Ip,
      classes: Np,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: P,
      isMin: y,
      validate: h,
      reset: g,
      resetValidation: v,
      handleChange: M,
      decrement: $,
      increment: z,
      pressDecrement: B,
      pressIncrement: I,
      releaseDecrement: N,
      releaseIncrement: C,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
fu.render = Ap;
const Dr = fu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var mS = Dr, cu = 60, mu = cu * 60, pu = mu * 24, zp = pu * 7, za = 1e3, ao = cu * za, el = mu * za, Lp = pu * za, Rp = zp * za, hi = "millisecond", Va = "second", Ma = "minute", Ba = "hour", Zn = "day", gt = "week", Sn = "month", hu = "quarter", Jn = "year", Ia = "date", Up = "YYYY-MM-DDTHH:mm:ssZ", nl = "Invalid Date", Yp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Fp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Hp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Lo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, jp = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Lo(t, 2, "0") + ":" + Lo(o, 2, "0");
}, Wp = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, Gp = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, qp = function(n) {
  var r = {
    M: Sn,
    y: Jn,
    w: gt,
    d: Zn,
    D: Ia,
    h: Ba,
    m: Ma,
    s: Va,
    ms: hi,
    Q: hu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Kp = function(n) {
  return n === void 0;
};
const Xp = {
  s: Lo,
  z: jp,
  m: Wp,
  a: Gp,
  p: qp,
  u: Kp
};
var Xa = "en", Ar = {};
Ar[Xa] = Hp;
var gi = function(n) {
  return n instanceof Zt;
}, Et = function e(n, r, a) {
  var t;
  if (!n)
    return Xa;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Ar[o] && (t = o), r && (Ar[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Ar[i] = n, t = i;
  }
  return !a && t && (Xa = t), t || !a && Xa;
}, te = function(n, r) {
  if (gi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Zt(a);
}, Zp = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = Xp;
Te.l = Et;
Te.i = gi;
Te.w = Zp;
var Jp = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Yp);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, Zt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Et(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Jp(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== nl;
  }, n.isSame = function(a, t) {
    var o = te(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return te(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < te(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, l = Te.u(t) ? !0 : t, i = Te.p(a), s = function(O, P) {
      var y = Te.w(o.$u ? Date.UTC(o.$y, P, O) : new Date(o.$y, P, O), o);
      return l ? y : y.endOf(Zn);
    }, u = function(O, P) {
      var y = [0, 0, 0, 0], w = [23, 59, 59, 999];
      return Te.w(o.toDate()[O].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? y : w).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case Jn:
        return l ? s(1, 0) : s(31, 11);
      case Sn:
        return l ? s(1, v) : s(0, v + 1);
      case gt: {
        var h = this.$locale().weekStart || 0, b = (d < h ? d + 7 : d) - h;
        return s(l ? f - b : f + (6 - b), v);
      }
      case Zn:
      case Ia:
        return u(c + "Hours", 0);
      case Ba:
        return u(c + "Minutes", 1);
      case Ma:
        return u(c + "Seconds", 2);
      case Va:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Te.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Zn] = i + "Date", o[Ia] = i + "Date", o[Sn] = i + "Month", o[Jn] = i + "FullYear", o[Ba] = i + "Hours", o[Ma] = i + "Minutes", o[Va] = i + "Seconds", o[hi] = i + "Milliseconds", o)[l], u = l === Zn ? this.$D + (t - this.$W) : t;
    if (l === Sn || l === Jn) {
      var d = this.clone().set(Ia, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ia, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Te.p(a)]();
  }, n.add = function(a, t) {
    var o = this, l;
    a = Number(a);
    var i = Te.p(t), s = function(f) {
      var c = te(o);
      return Te.w(c.date(c.date() + Math.round(f * a)), o);
    };
    if (i === Sn)
      return this.set(Sn, this.$M + a);
    if (i === Jn)
      return this.set(Jn, this.$y + a);
    if (i === Zn)
      return s(1);
    if (i === gt)
      return s(7);
    var u = (l = {}, l[Ma] = ao, l[Ba] = el, l[Va] = za, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || nl;
    var l = a || Up, i = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, h = function(y, w, M, $) {
      return y && (y[w] || y(t, l)) || M[w].slice(0, $);
    }, b = function(y) {
      return Te.s(s % 12 || 12, y, "0");
    }, g = c || function(P, y, w) {
      var M = P < 12 ? "AM" : "PM";
      return w ? M.toLowerCase() : M;
    }, O = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: h(o.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(o.weekdaysMin, this.$W, v, 2),
      ddd: h(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: i
      // 'ZZ' logic below
    };
    return l.replace(Fp, function(P, y) {
      return y || O[P] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * ao, d = this - s, v = Te.m(this, s);
    return v = (l = {}, l[Jn] = v / 12, l[Sn] = v, l[hu] = v / 3, l[gt] = (d - u) / Rp, l[Zn] = (d - u) / Lp, l[Ba] = d / el, l[Ma] = d / ao, l[Va] = d / za, l)[i] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Ar[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Et(a, t, !0);
    return l && (o.$L = l), o;
  }, n.clone = function() {
    return Te.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), gu = Zt.prototype;
te.prototype = gu;
[["$ms", hi], ["$s", Va], ["$m", Ma], ["$H", Ba], ["$W", Zn], ["$M", Sn], ["$y", Jn], ["$D", Ia]].forEach(function(e) {
  gu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, Zt, te), e.$i = !0), te;
};
te.locale = Et;
te.isDayjs = gi;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Ar[Xa];
te.Ls = Ar;
te.p = {};
const yu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, bu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Qp(e) {
  return ["date", "month"].includes(e);
}
var yt = [{
  index: "01"
}, {
  index: "02"
}, {
  index: "03"
}, {
  index: "04"
}, {
  index: "05"
}, {
  index: "06"
}, {
  index: "07"
}, {
  index: "08"
}, {
  index: "09"
}, {
  index: "10"
}, {
  index: "11"
}, {
  index: "12"
}], Ka = [{
  index: "0"
}, {
  index: "1"
}, {
  index: "2"
}, {
  index: "3"
}, {
  index: "4"
}, {
  index: "5"
}, {
  index: "6"
}], _p = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Qp
  },
  allowedDates: {
    type: Function
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  firstDayOfWeek: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  showCurrent: {
    type: Boolean,
    default: !0
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  range: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onPreview: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: xp
} = ee("picker-header");
function eh(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [re(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.left,
        onClick: n[0] || (n[0] = (t) => e.checkDate("prev"))
      },
      {
        default: ve(() => [re(r, {
          name: "chevron-left"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    ), A(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [re(
        Ae,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), T(
            "div",
            {
              key: e.showDate
            },
            ne(e.showDate),
            1
            /* TEXT */
          ))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    ), re(
      a,
      {
        round: "",
        text: "",
        style: {
          filter: "opacity(0.54)"
        },
        disabled: e.disabled.right,
        onClick: n[2] || (n[2] = (t) => e.checkDate("next"))
      },
      {
        default: ve(() => [re(r, {
          name: "chevron-right"
        })]),
        _: 1
        /* STABLE */
      },
      8,
      ["disabled"]
    )],
    2
    /* CLASS */
  );
}
var wu = x({
  name: "PanelHeader",
  components: {
    VarButton: en,
    VarIcon: $e
  },
  props: {
    date: {
      type: Object,
      required: !0
    },
    type: {
      type: String,
      default: "date"
    },
    disabled: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-panel", "check-date"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = V(!1), t = V(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = je.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return je.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: xp,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
wu.render = eh;
const Cu = wu;
function Ro() {
  return Ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ro.apply(this, arguments);
}
te.extend(yu);
te.extend(bu);
var {
  n: vt,
  classes: nh
} = ee("month-picker"), {
  n: ft
} = ee("date-picker");
function rh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [re(
        r,
        {
          ref: "headerEl",
          type: "month",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickYear,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), re(
        Ae,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), T("ul", {
            key: e.panelKey
          }, [(p(!0), T(
            Pe,
            null,
            Ie(e.MONTH_LIST, (t) => (p(), T("li", {
              key: t.index
            }, [re(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Ro({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [be(
                  ne(e.getMonthAbbr(t.index)),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1040,
              ["onClick"]
            )]))),
            128
            /* KEYED_FRAGMENT */
          ))]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var Su = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: Cu
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickYear: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-month"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t] = e.current.split("-"), o = V(!1), l = V(0), i = V(null), s = Ve({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (P) => {
      var y, w;
      return (y = (w = je.value.datePickerMonthDict) == null ? void 0 : w[P].abbr) != null ? y : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: y
        },
        componentProps: {
          min: w,
          max: M
        }
      } = e, $ = !0, z = !0, B = y + "-" + P;
      return M && ($ = te(B).isSameOrBefore(te(M), "month")), w && (z = te(B).isSameOrAfter(te(w), "month")), $ && z;
    }, c = (P) => {
      var {
        choose: {
          chooseMonths: y,
          chooseDays: w,
          chooseRangeMonth: M
        },
        componentProps: {
          type: $,
          range: z
        }
      } = e;
      if (z) {
        if (!M.length)
          return !1;
        var B = te(P).isSameOrBefore(te(M[1]), "month"), I = te(P).isSameOrAfter(te(M[0]), "month");
        return B && I;
      }
      return $ === "month" ? y.includes(P) : w.some((N) => N.includes(P));
    }, h = (P) => {
      var {
        choose: {
          chooseMonth: y
        },
        preview: {
          previewYear: w
        },
        componentProps: {
          allowedDates: M,
          color: $,
          multiple: z,
          range: B
        }
      } = e, I = w + "-" + P, N = () => B || z ? c(I) : (y == null ? void 0 : y.index) === P && u.value, C = () => f(P) ? M ? !M(I) : !1 : !0, S = C(), H = () => S ? !0 : B || z ? !c(I) : !u.value || (y == null ? void 0 : y.index) !== P, Q = () => d.value && t === P && e.componentProps.showCurrent ? (B || z || u.value) && S ? !0 : B || z ? !c(I) : u.value ? (y == null ? void 0 : y.index) !== t : !0 : !1, j = () => S ? "" : Q() ? $ ?? "" : N() ? "" : ft() + "-color-cover", E = j().startsWith(ft());
      return {
        outline: Q(),
        text: H(),
        color: H() ? "" : $,
        textColor: E ? "" : j(),
        [ft() + "-color-cover"]: E,
        class: nh(vt("button"), [S, vt("button--disabled")])
      };
    }, b = (P, y) => {
      var w = y.currentTarget;
      w.classList.contains(vt("button--disabled")) || r("choose-month", P);
    }, g = (P) => {
      o.value = P === "prev", l.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, O = (P) => {
      i.value.checkDate(P);
    };
    return le(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: y,
          max: w
        }
      } = e;
      w && (s.right = !te("" + (L(P) + 1)).isSameOrBefore(te(w), "year")), y && (s.left = !te("" + (L(P) - 1)).isSameOrAfter(te(y), "year"));
    }, {
      immediate: !0
    }), {
      n: vt,
      nDate: ft,
      pack: je,
      MONTH_LIST: yt,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: O,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: g
    };
  }
});
Su.render = rh;
const ah = Su;
var {
  n: rl,
  classes: th
} = ee("year-picker"), oh = ["onClick"];
function ih(e, n) {
  return p(), T(
    "ul",
    {
      class: m(e.n())
    },
    [(p(!0), T(
      Pe,
      null,
      Ie(e.yearList, (r) => (p(), T(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: q({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        oh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var ku = x({
  name: "YearPickerPanel",
  props: {
    preview: {
      type: String
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["choose-year"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = R(() => {
      var o = [], {
        preview: l,
        componentProps: {
          max: i,
          min: s
        }
      } = e;
      if (!l)
        return o;
      var u = [L(l) + 100, L(l) - 100];
      if (i) {
        var d = te(i).format("YYYY-MM-D"), v = L(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = te(s).format("YYYY-MM-D"), c = L(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return Ne(() => {
      var o = document.querySelector("." + rl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: rl,
      classes: th,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
ku.render = ih;
const lh = ku;
function Uo() {
  return Uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Uo.apply(this, arguments);
}
te.extend(yu);
te.extend(bu);
var {
  n: Pa,
  classes: sh
} = ee("day-picker"), {
  n: ct
} = ee("date-picker");
function uh(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n("content"))
      },
      [re(
        r,
        {
          ref: "headerEl",
          type: "day",
          date: e.preview,
          disabled: e.panelBtnDisabled,
          onCheckPanel: e.clickMonth,
          onCheckDate: e.checkDate
        },
        null,
        8,
        ["date", "disabled", "onCheckPanel", "onCheckDate"]
      ), re(
        Ae,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ve(() => [(p(), T("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(p(!0), T(
              Pe,
              null,
              Ie(e.sortWeekList, (t) => (p(), T(
                "li",
                {
                  key: t.index
                },
                ne(e.getDayAbbr(t.index)),
                1
                /* TEXT */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          ), A(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(p(!0), T(
              Pe,
              null,
              Ie(e.days, (t, o) => (p(), T("li", {
                key: o
              }, [re(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Uo({}, e.buttonProps(t)), {
                  onClick: (l) => e.chooseDay(t, l)
                }),
                {
                  default: ve(() => [be(
                    ne(e.filterDay(t)),
                    1
                    /* TEXT */
                  )]),
                  _: 2
                  /* DYNAMIC */
                },
                1040,
                ["onClick"]
              )]))),
              128
              /* KEYED_FRAGMENT */
            ))],
            2
            /* CLASS */
          )]))]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var $u = x({
  name: "DayPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: Cu
  },
  props: {
    choose: {
      type: Object,
      required: !0
    },
    preview: {
      type: Object,
      required: !0
    },
    current: {
      type: String,
      required: !0
    },
    clickMonth: {
      type: Function,
      required: !0
    },
    componentProps: {
      type: Object,
      required: !0
    }
  },
  emits: ["check-preview", "choose-day"],
  setup(e, n) {
    var {
      emit: r
    } = n, [a, t, o] = e.current.split("-"), l = V([]), i = V(!1), s = V(0), u = V(null), d = Ve({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var B;
      return e.choose.chooseYear === e.preview.previewYear && ((B = e.choose.chooseMonth) == null ? void 0 : B.index) === e.preview.previewMonth.index;
    }), c = R(() => {
      var B = Ka.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return B === -1 || B === 0 ? Ka : Ka.slice(B).concat(Ka.slice(0, B));
    }), h = (B) => {
      var I, N;
      return (I = (N = je.value.datePickerWeekDict) == null ? void 0 : N[B].abbr) != null ? I : "";
    }, b = (B) => B > 0 ? B : "", g = () => {
      var {
        preview: {
          previewMonth: B,
          previewYear: I
        }
      } = e, N = te(I + "-" + B.index).daysInMonth(), C = te(I + "-" + B.index + "-01").day(), S = c.value.findIndex((H) => H.index === "" + C);
      l.value = [...Array(S).fill(-1), ...Array.from(Array(N + 1).keys())].filter((H) => H);
    }, O = () => {
      var {
        preview: {
          previewYear: B,
          previewMonth: I
        },
        componentProps: {
          max: N,
          min: C
        }
      } = e;
      if (N) {
        var S = B + "-" + (L(I.index) + 1);
        d.right = !te(S).isSameOrBefore(te(N), "month");
      }
      if (C) {
        var H = B + "-" + (L(I.index) - 1);
        d.left = !te(H).isSameOrAfter(te(C), "month");
      }
    }, P = (B) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: N
        },
        componentProps: {
          min: C,
          max: S
        }
      } = e, H = !0, Q = !0, j = I + "-" + N.index + "-" + B;
      return S && (H = te(j).isSameOrBefore(te(S), "day")), C && (Q = te(j).isSameOrAfter(te(C), "day")), H && Q;
    }, y = (B) => {
      var {
        choose: {
          chooseDays: I,
          chooseRangeDay: N
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!N.length)
          return !1;
        var S = te(B).isSameOrBefore(te(N[1]), "day"), H = te(B).isSameOrAfter(te(N[0]), "day");
        return S && H;
      }
      return I.includes(B);
    }, w = (B) => {
      if (B < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Pa("button")
        };
      var {
        choose: {
          chooseDay: I
        },
        preview: {
          previewYear: N,
          previewMonth: C
        },
        componentProps: {
          allowedDates: S,
          color: H,
          multiple: Q,
          range: j
        }
      } = e, E = N + "-" + C.index + "-" + B, F = () => j || Q ? y(E) : L(I) === B && f.value, U = () => P(B) ? S ? !S(E) : !1 : !0, X = U(), D = () => X ? !0 : j || Q ? !y(E) : !f.value || L(I) !== B, Z = () => v.value && L(o) === B && e.componentProps.showCurrent ? (j || Q || f.value) && X ? !0 : j || Q ? !y(E) : f.value ? I !== o : !0 : !1, G = () => X ? "" : Z() ? H ?? "" : F() ? "" : ct() + "-color-cover", J = G().startsWith(ct());
      return {
        text: D(),
        outline: Z(),
        textColor: J ? "" : G(),
        [ct() + "-color-cover"]: J,
        class: sh(Pa("button"), Pa("button--usable"), [X, Pa("button--disabled")])
      };
    }, M = (B) => {
      i.value = B === "prev", s.value += B === "prev" ? -1 : 1, r("check-preview", "month", B);
    }, $ = (B, I) => {
      var N = I.currentTarget;
      N.classList.contains(Pa("button--disabled")) || r("choose-day", B);
    }, z = (B) => {
      u.value.checkDate(B);
    };
    return Ne(() => {
      g(), O();
    }), le(() => e.preview, () => {
      g(), O();
    }), {
      n: Pa,
      nDate: ct,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: z,
      filterDay: b,
      getDayAbbr: h,
      checkDate: M,
      chooseDay: $,
      buttonProps: w
    };
  }
});
$u.render = uh;
const dh = $u;
var {
  n: vh,
  classes: fh
} = ee("date-picker");
function ch(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [W(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          ne(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (o) => e.clickEl("date"))
        },
        [re(
          Ae,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var o, l, i;
              return [e.type === "month" ? (p(), T("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "month", {
                key: 2,
                month: (l = e.chooseMonth) == null ? void 0 : l.index,
                year: e.chooseYear
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (p(), T("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index) + e.chooseDay
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "date", ni(Ee({
                key: 2
              }, e.slotProps)), () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )])]))];
            }),
            _: 3
            /* FORWARDED */
          },
          8,
          ["name"]
        )],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: m(e.n("body")),
        onTouchstart: n[2] || (n[2] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[3] || (n[3] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[4] || (n[4] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [re(
        Ae,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (p(), me(
            r,
            {
              key: 0,
              "component-props": e.componentProps,
              preview: e.previewYear,
              onChooseYear: e.getChooseYear
            },
            null,
            8,
            ["component-props", "preview", "onChooseYear"]
          )) : e.getPanelType === "month" ? (p(), me(
            a,
            {
              key: 1,
              ref: "monthPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "click-year": () => e.clickEl("year"),
              "component-props": e.componentProps,
              onChooseMonth: e.getChooseMonth,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "click-year", "component-props", "onChooseMonth", "onCheckPreview"]
          )) : e.getPanelType === "date" ? (p(), me(
            t,
            {
              key: 2,
              ref: "dayPanelEl",
              current: e.currentDate,
              choose: e.getChoose,
              preview: e.getPreview,
              "component-props": e.componentProps,
              "click-month": () => e.clickEl("month"),
              onChooseDay: e.getChooseDay,
              onCheckPreview: e.checkPreview
            },
            null,
            8,
            ["current", "choose", "preview", "component-props", "click-month", "onChooseDay", "onCheckPreview"]
          )) : _("v-if", !0)]),
          _: 1
          /* STABLE */
        },
        8,
        ["name"]
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    )],
    2
    /* CLASS */
  );
}
var Tu = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: ah,
    YearPickerPanel: lh,
    DayPickerPanel: dh
  },
  props: _p,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [l, i] = o.split("-"), s = yt.find((se) => se.index === i), u = V(!1), d = V(!1), v = V(!0), f = V(), c = V(), h = V(), b = V(s), g = V(l), O = V(!1), P = V([]), y = V([]), w = V([]), M = V([]), $ = V(null), z = V(null), B = Ve({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), I = R(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: h.value,
      chooseMonths: P.value,
      chooseDays: y.value,
      chooseRangeMonth: w.value,
      chooseRangeDay: M.value
    })), N = R(() => ({
      previewMonth: b.value,
      previewYear: g.value
    })), C = R(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return w.value.length ? w.value[0] + " ~ " + w.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, ke;
        ce = (Ce = (ke = je.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + P.value.length + je.value.datePickerSelected : ce;
    }), S = R(() => {
      var se, ye, ce, Ce, {
        multiple: ke,
        range: Re
      } = e;
      if (Re) {
        var Je = M.value.map((eo) => te(eo).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (ke)
        return "" + y.value.length + je.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var mn = te(c.value + "-" + f.value.index + "-" + h.value).day(), Oa = Ka.find((eo) => eo.index === "" + mn), Ei = (se = (ye = je.value.datePickerWeekDict) == null ? void 0 : ye[Oa.index].name) != null ? se : "", dv = (ce = (Ce = je.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", vv = ga(h.value, 2, "0");
      return je.value.lang === "zh-CN" ? f.value.index + "-" + vv + " " + Ei.slice(0, 3) : Ei.slice(0, 3) + ", " + dv.slice(0, 3) + " " + h.value;
    }), H = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = R(() => !e.touchable || ["", "year"].includes(H.value)), j = R(() => {
      var se, ye, ce, Ce, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), Re = h.value ? ga(h.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = c.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: Re
      };
    }), E = R(() => I.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), F = R(() => c.value === g.value), U = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === b.value.index;
    }), X = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, D = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0];
        n = ye, r = ce;
      }
    }, Z = (se, ye) => se >= ye && se > 20 ? "x" : "y", G = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0], Ce = ye - n, ke = ce - r;
        t = Z(Math.abs(Ce), Math.abs(ke)), a = Ce > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(Q.value || t !== "x")) {
        var se = H.value === "month" ? $ : z;
        Ft(() => {
          se.value.forwardRef(a), Pi();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? w : M;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), ke = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? P : y, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = ce.value.map((Je) => te(Je).format(Ce)), Re = ke.findIndex((Je) => Je === se);
      Re === -1 ? ke.push(se) : ke.splice(Re, 1), k(e["onUpdate:modelValue"], ke), k(e.onChange, ke);
    }, ge = (se, ye) => !c.value || !f.value ? !1 : F.value ? se === "month" ? ye.index < f.value.index : U.value ? ye < L(h.value) : f.value.index > b.value.index : c.value > g.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        O.value = ge("day", se);
        var Je = g.value + "-" + b.value.index + "-" + se, mn = te(Je).format("YYYY-MM-DD");
        ce ? ae(mn, "day") : Ce ? oe(mn, "day") : (k(Re, mn), k(ke, mn));
      }
    }, He = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: ke,
        onChange: Re,
        onPreview: Je,
        "onUpdate:modelValue": mn
      } = e;
      if (O.value = ge("month", se), ye === "month" && !ce) {
        var Oa = g.value + "-" + se.index;
        Ce ? ae(Oa, "month") : ke ? oe(Oa, "month") : (k(mn, Oa), k(Re, Oa));
      } else
        b.value = se, k(Je, L(g.value), L(b.value.index));
      d.value = !1;
    }, nn = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, k(e.onPreview, L(g.value), L(b.value.index));
    }, sn = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + ce);
      else {
        var Ce = L(b.value.index) + ce;
        Ce < 1 && (g.value = "" + (L(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (L(g.value) + 1), Ce = 1), b.value = yt.find((ke) => L(ke.index) === Ce);
      }
      k(e.onPreview, L(g.value), L(b.value.index));
    }, Le = () => (e.multiple || e.range) && !we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, cn = (se) => we(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, lv = (se, ye) => {
      var ce = ye === "month" ? w : M, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => te(mn).format(Ce)).slice(0, 2), Re = ce.value.some((mn) => cn(mn));
      if (!Re) {
        ce.value = ke;
        var Je = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Je && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, sv = (se, ye) => {
      var ce = ye === "month" ? P : y, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Re) => te(Re).format(Ce))));
      ce.value = ke.filter((Re) => Re !== "Invalid Date");
    }, uv = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!cn(ye)) {
        var [ce, Ce, ke] = ye.split("-"), Re = yt.find((Je) => Je.index === Ce);
        f.value = Re, c.value = ce, h.value = ke, b.value = Re, g.value = ce;
      }
    }, Pi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Le() || cn(se) || !se))
        if (e.range) {
          if (!we(se))
            return;
          v.value = se.length !== 1, lv(se, e.type);
        } else if (e.multiple) {
          if (!we(se))
            return;
          sv(se, e.type);
        } else
          uv(se);
    }, {
      immediate: !0
    }), le(H, Pi), {
      n: vh,
      classes: fh,
      monthPanelEl: $,
      dayPanelEl: z,
      reverse: O,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: S,
      getPanelType: H,
      getChoose: I,
      getPreview: N,
      componentProps: B,
      slotProps: j,
      formatRange: E,
      clickEl: X,
      handleTouchstart: D,
      handleTouchmove: G,
      handleTouchend: J,
      getChooseDay: pe,
      getChooseMonth: He,
      getChooseYear: nn,
      checkPreview: sn
    };
  }
});
Tu.render = ch;
const zr = Tu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var pS = zr;
function Yo() {
  return Yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Yo.apply(this, arguments);
}
function mh(e) {
  return ["left", "center", "right"].includes(e);
}
var ph = Yo({
  show: {
    type: Boolean,
    default: !1
  },
  width: {
    type: [Number, String]
  },
  title: {
    type: String
  },
  message: {
    type: String
  },
  messageAlign: {
    type: String,
    default: "left",
    validator: mh
  },
  confirmButton: {
    type: Boolean,
    default: !0
  },
  cancelButton: {
    type: Boolean,
    default: !0
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  confirmButtonColor: {
    type: String
  },
  cancelButtonColor: {
    type: String
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  },
  onBeforeClose: Y(),
  onConfirm: Y(),
  onCancel: Y(),
  "onUpdate:show": Y()
}, Xe(ot, [
  "overlay",
  "overlayClass",
  "overlayStyle",
  "lockScroll",
  "closeOnClickOverlay",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onClickOverlay",
  // internal for function call closes the dialog
  "onRouteChange"
]));
function Fo() {
  return Fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Fo.apply(this, arguments);
}
var {
  n: hh,
  classes: gh
} = ee("dialog");
function yh(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return p(), me(
    a,
    {
      class: m(e.n("popup")),
      "var-dialog-cover": "",
      show: e.popupShow,
      overlay: e.overlay,
      "overlay-class": e.overlayClass,
      "overlay-style": e.overlayStyle,
      "lock-scroll": e.lockScroll,
      "close-on-click-overlay": e.popupCloseOnClickOverlay,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange,
      onClickOverlay: e.handleClickOverlay
    },
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Fo({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("title"))
          },
          [W(e.$slots, "title", {}, () => [be(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: m(e.n("message")),
            style: q({
              textAlign: e.messageAlign
            })
          },
          [W(e.$slots, "default", {}, () => [be(
            ne(e.message),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (p(), me(
            r,
            {
              key: 0,
              class: m(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0), e.confirmButton ? (p(), me(
            r,
            {
              key: 1,
              class: m(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0)],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
var Ou = x({
  name: "VarDialog",
  components: {
    VarPopup: hn,
    VarButton: en
  },
  inheritAttrs: !1,
  props: ph,
  setup(e) {
    var n = V(!1), r = V(!1), a = () => k(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (k(s), !!i) {
        if (u != null) {
          u("close", a);
          return;
        }
        k(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if (k(s), i != null) {
        i("confirm", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if (k(s), i != null) {
        i("cancel", a);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: hh,
      classes: gh,
      pack: je,
      dt: Ut,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: he
    };
  }
});
Ou.render = yh;
const sr = Ou;
function Vt() {
  return Vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Vt.apply(this, arguments);
}
var _n, Mt = {};
function bh(e) {
  return e === void 0 && (e = {}), qe(e) ? Vt({}, Mt, {
    message: e
  }) : Vt({}, Mt, e);
}
function ba(e) {
  return tt() ? new Promise((n) => {
    ba.close();
    var r = bh(e), a = Ve(r);
    a.teleport = "body", _n = a;
    var {
      unmountInstance: t
    } = Wa(sr, a, {
      onConfirm: () => {
        k(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        k(a.onCancel), n("cancel");
      },
      onClose: () => {
        k(a.onClose), n("close");
      },
      onClosed: () => {
        k(a.onClosed), t(), _n === a && (_n = null);
      },
      onRouteChange: () => {
        t(), _n === a && (_n = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function wh(e) {
  Mt = e;
}
function Ch() {
  Mt = {};
}
function Sh() {
  if (_n != null) {
    var e = _n;
    _n = null, Me().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ba, {
  setDefaultOptions: wh,
  resetDefaultOptions: Ch,
  close: Sh
});
sr.install = function(e) {
  e.component(sr.name, sr);
};
ba.install = function(e) {
  e.component(sr.name, sr);
};
ba.Component = sr;
var hS = sr, kh = {
  inset: {
    type: [Boolean, Number, String],
    default: !1
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  description: {
    type: String
  },
  margin: {
    type: String
  },
  dashed: {
    type: Boolean,
    default: !1
  },
  hairline: {
    type: Boolean,
    default: !1
  }
};
function Na() {
  return Na = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Na.apply(this, arguments);
}
var {
  n: $h,
  classes: Th
} = ee("divider");
function Oh(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (p(), T(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Pu = x({
  name: "VarDivider",
  props: kh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ve({
      withText: !1
    }), t = R(() => vo(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (vo(i) || i === 0)
        return Na({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Na({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Na({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ne(() => {
      l();
    }), Lt(() => {
      l();
    }), Na({
      n: $h,
      classes: Th
    }, pv(a), {
      style: o,
      isInset: t
    });
  }
});
Pu.render = Oh;
const Lr = Pu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var gS = Lr, Ph = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Ph[n];
  });
}
var An = "top", pr = "bottom", wa = "right", ur = "left", Jt = "auto", Qt = [An, pr, wa, ur], _t = "start", et = "end", Eh = "clippingParents", Eu = "viewport", Ga = "popper", Vh = "reference", al = /* @__PURE__ */ Qt.reduce(function(e, n) {
  return e.concat([n + "-" + _t, n + "-" + et]);
}, []), Vu = /* @__PURE__ */ [].concat(Qt, [Jt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + _t, n + "-" + et]);
}, []), Mh = "beforeRead", Bh = "read", Ih = "afterRead", Nh = "beforeMain", Dh = "main", Ah = "afterMain", zh = "beforeWrite", Lh = "write", Rh = "afterWrite", Ho = [Mh, Bh, Ih, Nh, Dh, Ah, zh, Lh, Rh];
function zn(e) {
  return e.split("-")[0];
}
var Uh = {
  start: "end",
  end: "start"
};
function tl(e) {
  return e.replace(/start|end/g, function(n) {
    return Uh[n];
  });
}
function Cn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Ca(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function gn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function yi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function gr(e) {
  return ((Ca(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Za = Math.max, ol = Math.min, La = Math.round;
function jo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Mu() {
  return !/^((?!chrome|android).)*safari/i.test(jo());
}
function Ra(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && gn(e) && (t = e.offsetWidth > 0 && La(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && La(a.height) / e.offsetHeight || 1);
  var l = Ca(e) ? Cn(e) : window, i = l.visualViewport, s = !Mu() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
  return {
    width: v,
    height: f,
    top: d,
    right: u + v,
    bottom: d + f,
    left: u,
    x: u,
    y: d
  };
}
function bi(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function wi(e) {
  return Ra(gr(e)).left + bi(e).scrollLeft;
}
function Yh(e, n) {
  var r = Cn(e), a = gr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = Mu();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + wi(e),
    y: s
  };
}
function Pn(e) {
  return Cn(e).getComputedStyle(e);
}
function Fh(e) {
  var n, r = gr(e), a = bi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = Za(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = Za(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + wi(e), s = -a.scrollTop;
  return Pn(t || r).direction === "rtl" && (i += Za(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function xt(e) {
  return Bn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (yi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gr(e)
  );
}
function Ci(e) {
  var n = Pn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Bu(e) {
  return ["html", "body", "#document"].indexOf(Bn(e)) >= 0 ? e.ownerDocument.body : gn(e) && Ci(e) ? e : Bu(xt(e));
}
function Ja(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Bu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), l = t ? [o].concat(o.visualViewport || [], Ci(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Ja(xt(l)))
  );
}
function Hh(e) {
  return ["table", "td", "th"].indexOf(Bn(e)) >= 0;
}
function il(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Pn(e).position === "fixed" ? null : e.offsetParent;
}
function jh(e) {
  var n = /firefox/i.test(jo()), r = /Trident/i.test(jo());
  if (r && gn(e)) {
    var a = Pn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = xt(e);
  for (yi(t) && (t = t.host); gn(t) && ["html", "body"].indexOf(Bn(t)) < 0; ) {
    var o = Pn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Si(e) {
  for (var n = Cn(e), r = il(e); r && Hh(r) && Pn(r).position === "static"; )
    r = il(r);
  return r && (Bn(r) === "html" || Bn(r) === "body" && Pn(r).position === "static") ? n : r || jh(e) || n;
}
function Wh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && yi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Wo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Gh(e, n) {
  var r = Ra(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ll(e, n, r) {
  return n === Eu ? Wo(Yh(e, r)) : Ca(n) ? Gh(n, r) : Wo(Fh(gr(e)));
}
function qh(e) {
  var n = Ja(xt(e)), r = ["absolute", "fixed"].indexOf(Pn(e).position) >= 0, a = r && gn(e) ? Si(e) : e;
  return Ca(a) ? n.filter(function(t) {
    return Ca(t) && Wh(t, a) && Bn(t) !== "body";
  }) : [];
}
function Kh(e, n, r, a) {
  var t = n === "clippingParents" ? qh(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = ll(e, u, a);
    return s.top = Za(d.top, s.top), s.right = ol(d.right, s.right), s.bottom = ol(d.bottom, s.bottom), s.left = Za(d.left, s.left), s;
  }, ll(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function nt(e) {
  return e.split("-")[1];
}
function Xh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Iu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? zn(a) : null, o = a ? nt(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case An:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case pr:
      s = {
        x: l,
        y: n.y + n.height
      };
      break;
    case wa:
      s = {
        x: n.x + n.width,
        y: i
      };
      break;
    case ur:
      s = {
        x: n.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? Xh(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case _t:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case et:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Zh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Jh(e) {
  return Object.assign({}, Zh(), e);
}
function Qh(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Nu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Eh : i, u = r.rootBoundary, d = u === void 0 ? Eu : u, v = r.elementContext, f = v === void 0 ? Ga : v, c = r.altBoundary, h = c === void 0 ? !1 : c, b = r.padding, g = b === void 0 ? 0 : b, O = Jh(typeof g != "number" ? g : Qh(g, Qt)), P = f === Ga ? Vh : Ga, y = e.rects.popper, w = e.elements[h ? P : f], M = Kh(Ca(w) ? w : w.contextElement || gr(e.elements.popper), s, d, l), $ = Ra(e.elements.reference), z = Iu({
    reference: $,
    element: y,
    strategy: "absolute",
    placement: t
  }), B = Wo(Object.assign({}, y, z)), I = f === Ga ? B : $, N = {
    top: M.top - I.top + O.top,
    bottom: I.bottom - M.bottom + O.bottom,
    left: M.left - I.left + O.left,
    right: I.right - M.right + O.right
  }, C = e.modifiersData.offset;
  if (f === Ga && C) {
    var S = C[t];
    Object.keys(N).forEach(function(H) {
      var Q = [wa, pr].indexOf(H) >= 0 ? 1 : -1, j = [An, pr].indexOf(H) >= 0 ? "y" : "x";
      N[H] += S[j] * Q;
    });
  }
  return N;
}
function _h(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Vu : s, d = nt(a), v = d ? i ? al : al.filter(function(h) {
    return nt(h) === d;
  }) : Qt, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, b) {
    return h[b] = Nu(e, {
      placement: b,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[zn(b)], h;
  }, {});
  return Object.keys(c).sort(function(h, b) {
    return c[h] - c[b];
  });
}
function xh(e) {
  if (zn(e) === Jt)
    return [];
  var n = bt(e);
  return [tl(e), n, tl(n)];
}
function eg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, b = r.allowedAutoPlacements, g = n.options.placement, O = zn(g), P = O === g, y = s || (P || !h ? [bt(g)] : xh(g)), w = [g].concat(y).reduce(function(ae, oe) {
      return ae.concat(zn(oe) === Jt ? _h(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: b
      }) : oe);
    }, []), M = n.rects.reference, $ = n.rects.popper, z = /* @__PURE__ */ new Map(), B = !0, I = w[0], N = 0; N < w.length; N++) {
      var C = w[N], S = zn(C), H = nt(C) === _t, Q = [An, pr].indexOf(S) >= 0, j = Q ? "width" : "height", E = Nu(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), F = Q ? H ? wa : ur : H ? pr : An;
      M[j] > $[j] && (F = bt(F));
      var U = bt(F), X = [];
      if (o && X.push(E[S] <= 0), i && X.push(E[F] <= 0, E[U] <= 0), X.every(function(ae) {
        return ae;
      })) {
        I = C, B = !1;
        break;
      }
      z.set(C, X);
    }
    if (B)
      for (var D = h ? 3 : 1, Z = function(oe) {
        var ge = w.find(function(pe) {
          var He = z.get(pe);
          if (He)
            return He.slice(0, oe).every(function(nn) {
              return nn;
            });
        });
        if (ge)
          return I = ge, "break";
      }, G = D; G > 0; G--) {
        var J = Z(G);
        if (J === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[a]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const ng = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: eg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rg(e, n, r) {
  var a = zn(e), t = [ur, An].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [ur, wa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function ag(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = Vu.reduce(function(d, v) {
    return d[v] = rg(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const tg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ag
};
function og(e, n, r, a = {}) {
  if (!tt())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const c = uo(f);
    c && (c.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const c = uo(f);
    c && (c.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  hv(e) && (d = le(() => e.value, (f, c) => {
    u(c), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return Ne(() => {
    s(e);
  }), Nt(() => {
    s(e);
  }), Wn(() => {
    u(e);
  }), Dt(() => {
    u(e);
  }), v;
}
function ig(e, n, r) {
  if (!tt())
    return;
  og(document, n, (t) => {
    const o = uo(e);
    o && !o.contains(t.target) && r(t);
  });
}
function lg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function sg(e) {
  return e === Cn(e) || !gn(e) ? bi(e) : lg(e);
}
function ug(e) {
  var n = e.getBoundingClientRect(), r = La(n.width) / e.offsetWidth || 1, a = La(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function dg(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && ug(n), o = gr(n), l = Ra(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Bn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ci(o)) && (i = sg(n)), gn(n) ? (s = Ra(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = wi(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function vg(e) {
  var n = Ra(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function fg(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function t(o) {
    r.add(o.name);
    var l = [].concat(o.requires || [], o.requiresIfExists || []);
    l.forEach(function(i) {
      if (!r.has(i)) {
        var s = n.get(i);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || t(o);
  }), a;
}
function cg(e) {
  var n = fg(e);
  return Ho.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function mg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Kn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var yr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', pg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', sl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function hg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), sl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Kn(yr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Kn(yr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Ho.indexOf(n.phase) < 0 && console.error(Kn(yr, n.name, '"phase"', "either " + Ho.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Kn(yr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Kn(yr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Kn(yr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Kn(yr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + sl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Kn(pg, String(n.name), a, a));
      });
    });
  });
}
function gg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function yg(e) {
  var n = e.reduce(function(r, a) {
    var t = r[a.name];
    return r[a.name] = t ? Object.assign({}, t, a, {
      options: Object.assign({}, t.options, a.options),
      data: Object.assign({}, t.data, a.data)
    }) : a, r;
  }, {});
  return Object.keys(n).map(function(r) {
    return n[r];
  });
}
var ul = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", bg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", dl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function vl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function wg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? dl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, dl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(O) {
        var P = typeof O == "function" ? O(d.options) : O;
        b(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: Ca(i) ? Ja(i) : i.contextElement ? Ja(i.contextElement) : [],
          popper: Ja(s)
        };
        var y = cg(yg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = y.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var w = gg([].concat(y, d.options.modifiers), function(C) {
            var S = C.name;
            return S;
          });
          if (hg(w), zn(d.options.placement) === Jt) {
            var M = d.orderedModifiers.find(function(C) {
              var S = C.name;
              return S === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var $ = Pn(s), z = $.marginTop, B = $.marginRight, I = $.marginBottom, N = $.marginLeft;
          [z, B, I, N].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var O = d.elements, P = O.reference, y = O.popper;
          if (!vl(P, y)) {
            process.env.NODE_ENV !== "production" && console.error(ul);
            return;
          }
          d.rects = {
            reference: dg(P, Si(y), d.options.strategy === "fixed"),
            popper: vg(y)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var w = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (w += 1, w > 100)) {
              console.error(bg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var $ = d.orderedModifiers[M], z = $.fn, B = $.options, I = B === void 0 ? {} : B, N = $.name;
            typeof z == "function" && (d = z({
              state: d,
              options: I,
              name: N,
              instance: c
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: mg(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!vl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(ul), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      d.orderedModifiers.forEach(function(g) {
        var O = g.name, P = g.options, y = P === void 0 ? {} : P, w = g.effect;
        if (typeof w == "function") {
          var M = w({
            state: d,
            name: O,
            instance: c,
            options: y
          }), $ = function() {
          };
          v.push(M || $);
        }
      });
    }
    function b() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return c;
  };
}
var mt = {
  passive: !0
};
function Cg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, mt);
  }), i && s.addEventListener("resize", r.update, mt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, mt);
    }), i && s.removeEventListener("resize", r.update, mt);
  };
}
const Sg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Cg,
  data: {}
};
function kg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Iu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const $g = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: kg,
  data: {}
};
var Tg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Og(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: La(n * t) / t || 0,
    y: La(r * t) / t || 0
  };
}
function fl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, c = f === void 0 ? 0 : f, h = l.y, b = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = g.x, b = g.y;
  var O = l.hasOwnProperty("x"), P = l.hasOwnProperty("y"), y = ur, w = An, M = window;
  if (u) {
    var $ = Si(r), z = "clientHeight", B = "clientWidth";
    if ($ === Cn(r) && ($ = gr(r), Pn($).position !== "static" && i === "absolute" && (z = "scrollHeight", B = "scrollWidth")), $ = $, t === An || (t === ur || t === wa) && o === et) {
      w = pr;
      var I = v && $ === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        $[z]
      );
      b -= I - a.height, b *= s ? 1 : -1;
    }
    if (t === ur || (t === An || t === pr) && o === et) {
      y = wa;
      var N = v && $ === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        $[B]
      );
      c -= N - a.width, c *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: i
  }, u && Tg), S = d === !0 ? Og({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = S.x, b = S.y, s) {
    var H;
    return Object.assign({}, C, (H = {}, H[w] = P ? "0" : "", H[y] = O ? "0" : "", H.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", H));
  }
  return Object.assign({}, C, (n = {}, n[w] = P ? b + "px" : "", n[y] = O ? c + "px" : "", n.transform = "", n));
}
function Pg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, l = o === void 0 ? !0 : o, i = r.roundOffsets, s = i === void 0 ? !0 : i;
  if (process.env.NODE_ENV !== "production") {
    var u = Pn(n.elements.popper).transitionProperty || "";
    l && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: zn(n.placement),
    variation: nt(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, fl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, fl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Eg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Pg,
  data: {}
};
function Vg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !gn(o) || !Bn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Mg(e) {
  var n = e.state, r = {
    popper: {
      position: n.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(n.elements.popper.style, r.popper), n.styles = r, n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow), function() {
    Object.keys(n.elements).forEach(function(a) {
      var t = n.elements[a], o = n.attributes[a] || {}, l = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), i = l.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !gn(t) || !Bn(t) || (Object.assign(t.style, i), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Bg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Vg,
  effect: Mg,
  requires: ["computeStyles"]
};
var Ig = [Sg, $g, Eg, Bg], Ng = /* @__PURE__ */ wg({
  defaultModifiers: Ig
});
function Bt() {
  return Bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bt.apply(this, arguments);
}
function cl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ml(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        cl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        cl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Du(e) {
  var n = V(null), r = V(null), a = V(!1), t = V({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = it(() => a.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: $,
      height: z
    } = window.getComputedStyle(n.value);
    t.value = {
      width: De($),
      height: De(z)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, w());
  }, v = /* @__PURE__ */ function() {
    var $ = ml(function* () {
      e.trigger === "hover" && (s = !1, yield Vn(), !i && M());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, c = /* @__PURE__ */ function() {
    var $ = ml(function* () {
      e.trigger === "hover" && (i = !1, yield Vn(), !s && M());
    });
    return function() {
      return $.apply(this, arguments);
    };
  }(), h = () => {
    w();
  }, b = () => {
    a.value = !1, k(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && b();
  }, O = () => {
    u();
    var $ = {
      x: De(e.offsetX),
      y: De(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: $.x,
          distance: $.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: $.x,
          distance: $.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: $.x,
          distance: $.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: $.x,
          distance: -$.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: $.x,
          distance: -$.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: $.x,
          distance: -$.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: $.y,
          distance: $.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: $.y,
          distance: -$.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: $.y,
          distance: -$.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: $.x,
          distance: -$.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: $.x,
          distance: $.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: $.y,
          distance: $.x
        };
    }
  }, P = () => {
    var {
      placement: $,
      skidding: z,
      distance: B
    } = O(), I = [Bt({}, ng, {
      enabled: a.value
    }), Bt({}, tg, {
      options: {
        offset: [z, B]
      }
    })];
    return {
      placement: $,
      modifiers: I
    };
  }, y = () => {
    l.setOptions(P());
  }, w = () => {
    var {
      disabled: $
    } = e;
    $ || (a.value = !0, k(e["onUpdate:show"], !0));
  }, M = () => {
    a.value = !1, k(e["onUpdate:show"], !1);
  };
  return ig(n, "click", g), le(() => e.show, ($) => {
    a.value = $ ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, y), le(() => e.offsetY, y), le(() => e.placement, y), le(() => a.value, ($) => {
    $ ? (y(), k(e.onOpen)) : k(e.onClose);
  }), le(() => e.disabled, M), Ne(() => {
    l = Ng(n.value, r.value, P());
  }), Wn(() => {
    l.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: t,
    handleHostClick: h,
    handleHostMouseenter: d,
    handleHostMouseleave: v,
    handlePopoverClose: b,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: c,
    resize: y,
    open: w,
    close: M
  };
}
function Dg(e) {
  return ["click", "hover"].includes(e);
}
function Ag(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function zg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Lg = {
  type: {
    type: String,
    default: "default",
    validator: zg
  },
  color: {
    type: String
  },
  content: {
    type: String
  },
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "hover",
    validator: Dg
  },
  placement: {
    type: String,
    default: "bottom",
    validator: Ag
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: Rg,
  classes: Ug
} = ee("tooltip");
function Yg(e, n) {
  return p(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [W(e.$slots, "default"), (p(), me(
      Fa,
      {
        to: e.teleport
      },
      [re(
        Ae,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(A(
            "div",
            {
              ref: "popover",
              class: m(e.n("tooltip")),
              style: q({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = En(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [A(
              "div",
              {
                style: q({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: m(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [W(e.$slots, "content", {}, () => [be(
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Ha, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var Au = x({
  name: "VarTooltip",
  props: Lg,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: h
    } = Du(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Rg,
      classes: Ug,
      handleHostClick: l,
      handlePopoverClose: v,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: h,
      open: f,
      close: c
    };
  }
});
Au.render = Yg;
const dr = Au;
dr.install = function(e) {
  e.component(dr.name, dr);
};
var yS = dr;
function Fg(e) {
  return ["click"].includes(e);
}
var Hg = {
  expandTrigger: {
    type: String,
    validator: Fg
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function Go() {
  return Go = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Go.apply(this, arguments);
}
var {
  n: jg,
  classes: Wg
} = ee("ellipsis"), Gg = {
  key: 0
};
function qg(e, n) {
  var r = ie("var-tooltip");
  return p(), me(
    r,
    ni(Gl(e.tooltip)),
    {
      content: ve(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), T(
          "span",
          Gg,
          ne(e.tooltip.content),
          1
          /* TEXT */
        )) : W(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [A(
        "span",
        {
          class: m(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: q(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [W(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var zu = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: dr
  },
  props: Hg,
  setup(e) {
    var n = V(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Go({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: jg,
      classes: Wg,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
zu.render = qg;
const Rr = zu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var bS = Rr;
function Kg(e) {
  return ["start", "end"].includes(e);
}
var Xg = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  scrollToError: {
    type: String,
    validator: Kg
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function pl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        pl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        pl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Jg
} = ee("form");
function Qg(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Lu = x({
  name: "VarForm",
  props: Xg,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = tm(), o = (d, v) => {
      setTimeout(() => {
        var f = Ta(v), c = f === window ? 0 : zi(f), h = zi(v) - c - De(e.scrollToErrorOffsetY);
        Qa(f, {
          top: h,
          animation: fo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Zg(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: O
          } = g;
          return O();
        }));
        if (e.scrollToError) {
          var [, f] = Sv(v, (g) => g === !1, e.scrollToError), c = f > -1;
          if (c) {
            var h, b = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(f, b);
          }
          return !c;
        }
        return v.every((g) => g === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), i = () => a.forEach((d) => {
      var {
        reset: v
      } = d;
      return v();
    }), s = () => a.forEach((d) => {
      var {
        resetValidation: v
      } = d;
      return v();
    }), u = {
      disabled: n,
      readonly: r
    };
    return t(u), {
      n: Jg,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Lu.render = Qg;
const Ln = Lu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
Ln.useValidation = bn;
Ln.useForm = wn;
var wS = Ln;
function Ru(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function _g(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[Kl(t)] = o, r;
  }, {}) : {};
}
function xg(e) {
  var {
    value: n
  } = e._hover, r = _g(e);
  Object.keys(n).forEach((a) => {
    var t = Kl(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function ki(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function ey(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e.style[n] = "";
  });
}
function Uu(e) {
  ey(e), ki(e, e._hover.rawStyle), e._hover.rawStyle = {};
}
function Yu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, ai(e)) {
    e(this._hover.hovering);
    return;
  }
  ki(this, e);
}
function Fu() {
  if (this._hover.hovering = !1, ai(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Uu(this);
}
function Hu(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Ru(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, xg(e), e.addEventListener("mouseenter", Yu), e.addEventListener("mouseleave", Fu));
}
function ju(e, n) {
  Ru(n.arg) || (Uu(e), e.removeEventListener("mouseenter", Yu), e.removeEventListener("mouseleave", Fu));
}
function ny(e, n) {
  ju(e, n);
}
function ry(e, n) {
  return !ai(n.value) && e._hover.hovering;
}
function ay(e, n) {
  Hu(e, n), ry(e, n) && ki(e, n.value);
}
var Wu = {
  mounted: Hu,
  unmounted: ju,
  beforeUpdate: ny,
  updated: ay,
  install(e) {
    e.directive("hover", this);
  }
}, CS = Wu;
const qo = Wu;
function ty(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var oy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: ty,
    default: "fill"
  },
  alt: {
    type: String
  },
  title: {
    type: String
  },
  width: {
    type: [String, Number]
  },
  height: {
    type: [String, Number]
  },
  radius: {
    type: [String, Number],
    default: 0
  },
  loading: {
    type: String
  },
  error: {
    type: String
  },
  lazy: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  block: {
    type: Boolean,
    default: !0
  },
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: iy,
  classes: ly
} = ee("image"), sy = ["alt", "title", "lazy-error", "lazy-loading"], uy = ["alt", "title", "src"];
function dy(e, n) {
  var r = Fe("lazy"), a = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Se((p(), T(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: q({
          objectFit: e.fit
        }),
        onLoad: n[0] || (n[0] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[1] || (n[1] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[2] || (n[2] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      sy
    )), [[r, e.src]]) : (p(), T(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: q({
          objectFit: e.fit
        }),
        src: e.src,
        onLoad: n[3] || (n[3] = function() {
          return e.handleLoad && e.handleLoad(...arguments);
        }),
        onError: n[4] || (n[4] = function() {
          return e.handleError && e.handleError(...arguments);
        }),
        onClick: n[5] || (n[5] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      null,
      46,
      uy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Gu = x({
  name: "VarImage",
  directives: {
    Lazy: _a,
    Ripple: ze
  },
  props: oy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && k(i, t), o._lazy.state === "error" && k(s, t)) : k(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && k(l, t);
    }, a = (t) => {
      k(e.onClick, t);
    };
    return {
      n: iy,
      classes: ly,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
Gu.render = dy;
const Ur = Gu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var SS = Ur, qu = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Ku = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function vy() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(qu), {
    length: r
  } = vn(Ku);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Xu = {
  loop: {
    type: Boolean,
    default: !0
  },
  autoplay: {
    type: [String, Number]
  },
  duration: {
    type: [String, Number],
    default: 300
  },
  initialIndex: {
    type: [String, Number],
    default: 0
  },
  indicator: {
    type: Boolean,
    default: !0
  },
  indicatorColor: {
    type: String
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  touchable: {
    type: Boolean,
    default: !0
  },
  onChange: Y()
};
function hl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function fy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        hl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        hl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var cy = 250, my = 20, {
  n: py,
  classes: hy
} = ee("swipe"), gy = ["onClick"];
function yy(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: q({
          width: e.vertical ? void 0 : e.trackSize + "px",
          height: e.vertical ? e.trackSize + "px" : void 0,
          transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)",
          transitionDuration: e.lockDuration ? "0ms" : e.toNumber(e.duration) + "ms"
        }),
        onTouchstart: n[0] || (n[0] = function() {
          return e.handleTouchstart && e.handleTouchstart(...arguments);
        }),
        onTouchmove: n[1] || (n[1] = function() {
          return e.handleTouchmove && e.handleTouchmove(...arguments);
        }),
        onTouchend: n[2] || (n[2] = function() {
          return e.handleTouchend && e.handleTouchend(...arguments);
        })
      },
      [W(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), W(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.length, (r, a) => (p(), T(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: q({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          gy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)])],
    2
    /* CLASS */
  );
}
var Zu = x({
  name: "VarSwipe",
  props: Xu,
  setup(e) {
    var n = V(null), r = V(0), a = R(() => e.vertical), t = V(0), o = V(0), l = V(!1), i = V(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = vy(), v = !1, f = -1, c, h, b, g, O, P = (D) => s.find((Z) => {
      var {
        index: G
      } = Z;
      return G.value === D;
    }), y = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, w = (D) => {
      var Z = xe(D) ? D : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: G
      } = e;
      return Z <= -1 ? G ? -1 : 0 : Z >= d.value ? G ? d.value : d.value - 1 : Z;
    }, M = (D) => {
      var {
        loop: Z
      } = e;
      return D === -1 ? Z ? d.value - 1 : 0 : D === d.value ? Z ? 0 : d.value - 1 : D;
    }, $ = (D) => {
      var {
        loop: Z
      } = e;
      return D < 0 ? Z ? d.value - 1 : 0 : D > d.value - 1 ? Z ? 0 : d.value - 1 : D;
    }, z = (D) => {
      var Z = o.value >= r.value, G = o.value <= -t.value, J = 0, ae = -(t.value - r.value);
      l.value = !0, (Z || G) && (l.value = !0, o.value = G ? J : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), Ft(() => {
        l.value = !1, k(D);
      });
    }, B = () => {
      i.value = $(L(e.initialIndex));
    }, I = () => {
      var {
        autoplay: D
      } = e;
      !D || d.value <= 1 || (N(), f = window.setTimeout(() => {
        E(), I();
      }, L(D)));
    }, N = () => {
      f && clearTimeout(f);
    }, C = (D, Z) => {
      if (D > Z && D > 10)
        return "horizontal";
      if (Z > D && Z > 10)
        return "vertical";
    }, S = (D) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: G
        } = D.touches[0];
        c = Z, h = G, b = performance.now(), v = !0, N(), z(() => {
          l.value = !0;
        });
      }
    }, H = (D) => {
      var {
        touchable: Z,
        vertical: G
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: J,
          clientY: ae
        } = D.touches[0], oe = Math.abs(J - c), ge = Math.abs(ae - h), pe = C(oe, ge), He = G ? "vertical" : "horizontal";
        if (pe === He) {
          D.preventDefault();
          var nn = g !== void 0 ? J - g : 0, sn = O !== void 0 ? ae - O : 0;
          g = J, O = ae, o.value += G ? sn : nn, y();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: D,
          onChange: Z
        } = e, G = D ? O < h : g < c, J = Math.abs(D ? h - O : c - g), ae = performance.now() - b <= cy && J >= my, oe = ae ? w(G ? i.value + 1 : i.value - 1) : w();
        v = !1, l.value = !1, g = void 0, O = void 0, o.value = oe * -r.value;
        var ge = i.value;
        i.value = M(oe), I(), ge !== i.value && k(Z, i.value);
      }
    }, j = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((D) => {
        D.setTranslate(0);
      }), I(), setTimeout(() => {
        l.value = !1;
      }));
    }, E = (D) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = $(J + 1), (D == null ? void 0 : D.event) !== !1 && k(G, i.value), z(() => {
          if (J === d.value - 1 && Z) {
            P(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          J !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, F = (D) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = $(J - 1), (D == null ? void 0 : D.event) !== !1 && k(G, i.value), z(() => {
          if (J === 0 && Z) {
            P(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          J !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, U = (D, Z) => {
      if (!(d.value <= 1 || D === i.value)) {
        D = D < 0 ? 0 : D, D = D >= d.value ? d.value : D;
        var G = D > i.value ? E : F, J = Math.abs(D - i.value);
        Array.from({
          length: J
        }).forEach((ae, oe) => {
          G({
            event: oe === J - 1 ? Z == null ? void 0 : Z.event : !1
          });
        });
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), le(() => d.value, /* @__PURE__ */ fy(function* () {
      yield Vn(), B(), j();
    })), Ne(() => {
      window.addEventListener("resize", j);
    }), Wn(() => {
      window.removeEventListener("resize", j), N();
    }), {
      n: py,
      classes: hy,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: S,
      handleTouchmove: H,
      handleTouchend: Q,
      next: E,
      prev: F,
      to: U,
      resize: j,
      toNumber: L
    };
  }
});
Zu.render = yy;
const Rn = Zu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var kS = Rn;
function by() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(qu), {
    index: r
  } = fn(Ku);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: wy
} = ee("swipe-item");
function Cy(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      style: q({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ju = x({
  name: "VarSwipeItem",
  setup() {
    var e = V(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = by(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: wy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Ju.render = Cy;
const Un = Ju;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var $S = Un;
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
var Sy = Ko({
  show: {
    type: Boolean,
    default: !1
  },
  images: {
    type: Array,
    default: () => []
  },
  current: {
    type: String
  },
  zoom: {
    type: [String, Number],
    default: 2
  },
  closeable: {
    type: Boolean,
    default: !1
  },
  "onUpdate:show": Y()
}, Xe(Xu, ["loop", "indicator", "onChange"]), Xe(ot, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: gl,
  classes: ky
} = ee("image-preview"), yl = 12, bl = 200, $y = 350, wl = 200, Ty = ["src", "alt"];
function Oy(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return p(), me(
    o,
    {
      class: m(e.n("popup")),
      "var-image-preview-cover": "",
      transition: e.n("$-fade"),
      show: e.popupShow,
      overlay: !1,
      "close-on-click-overlay": !1,
      "lock-scroll": e.lockScroll,
      teleport: e.teleport,
      onOpen: e.onOpen,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onOpened: e.onOpened,
      onRouteChange: e.onRouteChange
    },
    {
      default: ve(() => [re(
        a,
        Ee({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(p(!0), T(
            Pe,
            null,
            Ie(e.images, (l) => (p(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: l
              },
              {
                default: ve(() => [A(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
                    style: q({
                      transform: "scale(" + e.scale + ") translate(" + e.translateX + "px, " + e.translateY + "px)",
                      transitionTimingFunction: e.transitionTimingFunction,
                      transitionDuration: e.transitionDuration
                    }),
                    onTouchstart: n[0] || (n[0] = function() {
                      return e.handleTouchstart && e.handleTouchstart(...arguments);
                    }),
                    onTouchmove: n[1] || (n[1] = function() {
                      return e.handleTouchmove && e.handleTouchmove(...arguments);
                    }),
                    onTouchend: n[2] || (n[2] = function() {
                      return e.handleTouchend && e.handleTouchend(...arguments);
                    })
                  },
                  [A(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: l,
                      alt: l
                    },
                    null,
                    10,
                    Ty
                  )],
                  38
                  /* CLASS, STYLE, HYDRATE_EVENTS */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class"]
            ))),
            128
            /* KEYED_FRAGMENT */
          ))]),
          indicator: ve((l) => {
            var {
              index: i,
              length: s
            } = l;
            return [W(e.$slots, "indicator", {
              index: i,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (p(), T(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              ne(i + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (p(), me(
        t,
        {
          key: 0,
          class: m(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("extra"))
        },
        [W(e.$slots, "extra")],
        2
        /* CLASS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
var Qu = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: Rn,
    VarSwipeItem: Un,
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Sy,
  setup(e) {
    var n = V(!1), r = R(() => {
      var {
        images: N,
        current: C
      } = e, S = N.findIndex((H) => H === C);
      return S >= 0 ? S : 0;
    }), a = V(1), t = V(0), o = V(0), l = V(void 0), i = V(void 0), s = V(!0), u = null, d = null, v = null, f = (N, C) => {
      var {
        clientX: S,
        clientY: H
      } = N, {
        clientX: Q,
        clientY: j
      } = C;
      return Math.abs(Math.sqrt(Math.pow(Q - S, 2) + Math.pow(j - H, 2)));
    }, c = (N, C) => ({
      clientX: N.clientX,
      clientY: N.clientY,
      timestamp: Date.now(),
      target: C
    }), h = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, wl);
    }, b = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (N) => d ? f(d, N) <= yl && N.timestamp - d.timestamp <= bl && d.target === N.target : !1, O = (N) => !N || !u || !d ? !1 : f(u, d) <= yl && Date.now() - d.timestamp < $y && (N === u.target || N.parentNode === u.target), P = (N) => {
      v = window.setTimeout(() => {
        O(N.target) && I(), u = null;
      }, bl);
    }, y = (N) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = N, S = c(C[0], N.currentTarget);
      if (u = S, g(S)) {
        a.value > 1 ? b() : h();
        return;
      }
      d = S;
    }, w = (N) => {
      var {
        offsetWidth: C,
        offsetHeight: S
      } = N, {
        naturalWidth: H,
        naturalHeight: Q
      } = N.querySelector("." + gl("image"));
      return {
        width: C,
        height: S,
        imageRadio: Q / H,
        rootRadio: S / C,
        zoom: L(e.zoom)
      };
    }, M = (N) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: H,
        width: Q,
        height: j
      } = w(N);
      if (!S)
        return 0;
      var E = S > H ? j / S : Q;
      return Math.max(0, (C * E - Q) / 2) / C;
    }, $ = (N) => {
      var {
        zoom: C,
        imageRadio: S,
        rootRadio: H,
        width: Q,
        height: j
      } = w(N);
      if (!S)
        return 0;
      var E = S > H ? j : Q * S;
      return Math.max(0, (C * E - j) / 2) / C;
    }, z = (N, C, S) => N + C >= S ? S : N + C <= -S ? -S : N + C, B = (N) => {
      if (d) {
        var C = N.currentTarget, {
          touches: S
        } = N, H = c(S[0], C);
        if (a.value > 1) {
          var Q = H.clientX - d.clientX, j = H.clientY - d.clientY, E = M(C), F = $(C);
          t.value = z(t.value, Q, E), o.value = z(o.value, j, F);
        }
        d = H;
      }
    }, I = () => {
      if (a.value > 1) {
        b(), setTimeout(() => k(e["onUpdate:show"], !1), wl);
        return;
      }
      k(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (N) => {
      n.value = N;
    }, {
      immediate: !0
    }), {
      n: gl,
      classes: ky,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: y,
      handleTouchmove: B,
      handleTouchend: P,
      close: I
    };
  }
});
Qu.render = Oy;
const vr = Qu;
var xn;
function Hn(e) {
  if (tt()) {
    Hn.close();
    var n = qe(e) ? {
      images: [e]
    } : we(e) ? {
      images: e
    } : e, r = Ve(n);
    r.teleport = "body", xn = r;
    var {
      unmountInstance: a
    } = Wa(vr, r, {
      onClose: () => k(r.onClose),
      onClosed: () => {
        k(r.onClosed), a(), xn === r && (xn = null);
      },
      onRouteChange: () => {
        a(), xn === r && (xn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Hn.close = () => {
  if (xn != null) {
    var e = xn;
    xn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
vr.install = function(e) {
  e.component(vr.name, vr);
};
Hn.install = function(e) {
  e.component(vr.name, vr);
};
Hn.Component = vr;
var TS = vr, wt = {
  offsetTop: {
    type: [String, Number],
    default: 0
  },
  zIndex: {
    type: [String, Number],
    default: 10
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onScroll: Y()
};
function Cl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Cl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Cl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Py,
  classes: Ey
} = ee("sticky");
function Vy(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: q({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [A(
      "div",
      {
        class: m(e.n("wrapper")),
        ref: "wrapperEl",
        style: q({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [W(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var _u = x({
  name: "VarSticky",
  props: wt,
  setup(e) {
    var n = V(null), r = V(null), a = V(!1), t = V("0px"), o = V("0px"), l = V("auto"), i = V("auto"), s = V("auto"), u = V("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => De(e.offsetTop)), c, h = () => {
      var {
        cssMode: y,
        disabled: w
      } = e;
      if (!w) {
        var M = 0;
        if (c !== window) {
          var {
            top: $
          } = c.getBoundingClientRect();
          M = $;
        }
        var z = r.value, B = n.value, {
          top: I,
          left: N
        } = B.getBoundingClientRect(), C = I - M;
        return C <= f.value ? (y || (l.value = B.offsetWidth + "px", i.value = B.offsetHeight + "px", t.value = M + f.value + "px", o.value = N + "px", s.value = z.offsetWidth + "px", u.value = z.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: C,
          isFixed: !1
        });
      }
    }, b = () => {
      var y = h();
      y && k(e.onScroll, y.offsetTop, y.isFixed);
    }, g = /* @__PURE__ */ function() {
      var y = Sl(function* () {
        a.value = !1, yield Nv(), h();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), O = /* @__PURE__ */ function() {
      var y = Sl(function* () {
        yield Vn(), c = Ta(n.value), c !== window && c.addEventListener("scroll", b), window.addEventListener("scroll", b), b();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), P = () => {
      c !== window && c.removeEventListener("scroll", b), window.removeEventListener("scroll", b);
    };
    return le(() => e.disabled, g), Nt(O), Dt(P), Ne(O), Wn(P), {
      n: Py,
      classes: Ey,
      resize: g,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: l,
      fixedHeight: i,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: L
    };
  }
});
_u.render = Vy;
const Yn = _u;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var OS = Yn, xu = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), ed = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function My() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(xu), {
    length: r
  } = vn(ed);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function By() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(xu), {
    index: r
  } = fn(ed);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Iy = {
  index: {
    type: [Number, String]
  }
}, {
  n: Ny,
  classes: Dy
} = ee("index-anchor");
function Ay(e, n) {
  return p(), me(
    ja(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [W(e.$slots, "default", {}, () => [be(
          ne(e.name),
          1
          /* TEXT */
        )])],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
var nd = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Iy,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = By(), t = V(0), o = V(!1), l = R(() => e.index), i = V(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, h = (g) => {
      o.value = g;
    }, b = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(b), {
      n: Ny,
      classes: Dy,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Ae
    };
  }
});
nd.render = Ay;
const Yr = nd;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var PS = Yr, zy = {
  sticky: {
    type: Boolean,
    default: !0
  },
  stickyOffsetTop: {
    type: [String, Number],
    default: 0
  },
  cssMode: {
    type: Boolean,
    default: !1
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  zIndex: {
    type: [Number, String],
    default: 1
  },
  highlightColor: {
    type: String
  },
  duration: {
    type: [Number, String],
    default: 0
  },
  onClick: Y(),
  onChange: Y()
};
function kl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function to(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        kl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        kl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ly,
  classes: Ry
} = ee("index-bar"), Uy = ["onClick"];
function Yy(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [W(e.$slots, "default"), A(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.anchorNameList, (r) => (p(), T(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: q({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ne(r),
          15,
          Uy
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      6
      /* CLASS, STYLE */
    )],
    2
    /* CLASS */
  );
}
var rd = x({
  name: "VarIndexBar",
  props: zy,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = My(), t = V(""), o = V(null), l = V(null), i = V([]), s = V(), u = R(() => e.sticky), d = R(() => e.cssMode), v = R(() => De(e.stickyOffsetTop)), f = R(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = (y, w) => {
      var M = ri(y) ? y.name.value : y;
      M === s.value || M === void 0 || (s.value = M, (w == null ? void 0 : w.event) !== !1 && k(e.onChange, M));
    }, b = () => {
      if (!("getBoundingClientRect" in o.value))
        return 0;
      var {
        top: y
      } = o.value.getBoundingClientRect(), {
        scrollTop: w
      } = o.value, {
        top: M
      } = l.value.getBoundingClientRect();
      return w - y + M;
    }, g = () => {
      var y = Yt(o.value), w = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, M = b();
      r.forEach(($, z) => {
        var B = $.ownTop.value, I = y - B + v.value - M, N = z === r.length - 1 ? w : r[z + 1].ownTop.value - $.ownTop.value;
        I >= 0 && I < N && t.value === "" && (z && !e.cssMode && r[z - 1].setDisabled(!0), $.setDisabled(!1), h($));
      });
    }, O = /* @__PURE__ */ function() {
      var y = to(function* (w) {
        var {
          anchorName: M,
          manualCall: $ = !1,
          options: z
        } = w;
        if ($ && k(e.onClick, M), M !== s.value) {
          var B = r.find((S) => {
            var {
              name: H
            } = S;
            return M === H.value;
          });
          if (B) {
            var I = b(), N = B.ownTop.value - v.value + I, C = oi(o.value);
            t.value = M, h(M, z), yield Qa(o.value, {
              left: C,
              top: N,
              animation: Xl,
              duration: L(e.duration)
            }), Ft(() => {
              t.value = "";
            });
          }
        }
      });
      return function(M) {
        return y.apply(this, arguments);
      };
    }(), P = (y, w) => {
      On(() => O({
        anchorName: y,
        options: w
      }));
    };
    return le(() => n.value, /* @__PURE__ */ to(function* () {
      yield Vn(), r.forEach((y) => {
        var {
          name: w,
          setOwnTop: M
        } = y;
        w.value && i.value.push(w.value), M();
      });
    })), Ne(/* @__PURE__ */ to(function* () {
      yield Vn(), o.value = Ta(l.value), o.value.addEventListener("scroll", g);
    })), At(() => {
      k(o.value.removeEventListener, "scroll", g);
    }), {
      n: Ly,
      classes: Ry,
      barEl: l,
      active: s,
      zIndex: f,
      anchorNameList: i,
      toNumber: L,
      scrollTo: P,
      anchorClick: O
    };
  }
});
rd.render = Yy;
const Fr = rd;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var ES = Fr;
function Fy(e) {
  return ["text", "password", "number"].includes(e);
}
var Hy = {
  modelValue: {
    type: String
  },
  modelModifiers: {
    type: Object,
    default: () => ({})
  },
  type: {
    type: String,
    default: "text",
    validator: Fy
  },
  textarea: {
    type: Boolean,
    default: !1
  },
  rows: {
    type: [String, Number],
    default: 8
  },
  placeholder: {
    type: String
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  maxlength: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  resize: {
    type: Boolean,
    default: !1
  },
  autofocus: {
    type: Boolean,
    default: !1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onInput", "onClear"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onInput: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: oo,
  classes: jy
} = ee("input"), Wy = ["id", "disabled", "type", "value", "maxlength", "rows"], Gy = ["id", "disabled", "type", "value", "maxlength"], qy = ["for"];
function Ky(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[14] || (n[14] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (p(), T(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (p(), T(
          "textarea",
          {
            key: 1,
            class: m(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: q({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor,
              resize: e.resize ? "vertical" : "none"
            }),
            onFocus: n[0] || (n[0] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[1] || (n[1] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[2] || (n[2] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[3] || (n[3] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[4] || (n[4] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: n[5] || (n[5] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: n[6] || (n[6] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          `
        `,
          46,
          Wy
        )) : (p(), T(
          "input",
          {
            key: 2,
            class: m(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: q({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[7] || (n[7] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[8] || (n[8] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[9] || (n[9] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[10] || (n[10] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[11] || (n[11] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            }),
            onCompositionstart: n[12] || (n[12] = function() {
              return e.handleCompositionStart && e.handleCompositionStart(...arguments);
            }),
            onCompositionend: n[13] || (n[13] = function() {
              return e.handleCompositionEnd && e.handleCompositionEnd(...arguments);
            })
          },
          null,
          46,
          Gy
        )), A(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: q({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          qy
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (p(), me(
          r,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            "var-input-cover": "",
            name: "close-circle",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : _("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: q({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    2
    /* CLASS */
  );
}
var ad = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Hy,
  setup(e) {
    var n = V("var-input-" + Ya().uid), r = V(null), a = V(!1), t = R(() => e.type === "number" ? "text" : e.type), o = R(() => {
      var {
        maxlength: E,
        modelValue: F
      } = e;
      return E ? Nn(F) ? "0 / " + E : String(F).length + "/" + E : "";
    }), {
      bindForm: l,
      form: i
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (E) => {
      Me(() => {
        var {
          validateTrigger: F,
          rules: U,
          modelValue: X
        } = e;
        u(F, E, U, X);
      });
    }, c = () => {
      var {
        hint: E,
        modelValue: F
      } = e;
      if (!E && !Nn(F))
        return oo("--placeholder-hidden");
      if (E && (!Nn(F) || a.value))
        return oo("--placeholder-hint");
    }, h = (E) => {
      a.value = !0, k(e.onFocus, E), f("onFocus");
    }, b = (E) => {
      a.value = !1, k(e.onBlur, E), f("onBlur");
    }, g = (E) => {
      var F = E.target, {
        value: U
      } = F;
      return e.type === "number" && (U = z(U)), U = I(B(U)), F.value = U, U;
    }, O = (E) => {
      Object.assign(E.target, {
        composing: !0
      });
    }, P = (E) => {
      var F = E.target;
      F.composing && (F.composing = !1, F.dispatchEvent(new Event("input")));
    }, y = (E) => {
      var {
        composing: F
      } = E.target;
      if (!F) {
        var U = g(E);
        k(e["onUpdate:modelValue"], U), k(e.onInput, U, E), f("onInput");
      }
    }, w = (E) => {
      var F = g(E);
      k(e.onChange, F, E), f("onChange");
    }, M = () => {
      var {
        disabled: E,
        readonly: F,
        clearable: U,
        onClear: X
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || E || F || !U || (k(e["onUpdate:modelValue"], ""), k(X, ""), f("onClear"));
    }, $ = (E) => {
      var {
        disabled: F,
        onClick: U
      } = e;
      i != null && i.disabled.value || F || (k(U, E), f("onClick"));
    }, z = (E) => {
      var F = E.indexOf("-"), U = E.indexOf(".");
      return F > -1 && (E = F === 0 ? "-" + E.replace(/-/g, "") : E.replace(/-/g, "")), U > -1 && (E = E.slice(0, U + 1) + E.slice(U).replace(/\./g, "")), E.replace(/[^-0-9.]/g, "");
    }, B = (E) => e.modelModifiers.trim ? E.trim() : E, I = (E) => e.maxlength ? E.slice(0, L(e.maxlength)) : E, N = (E) => {
      var {
        disabled: F,
        readonly: U
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || F || U || E.stopPropagation();
    }, C = () => {
      k(e["onUpdate:modelValue"], ""), v();
    }, S = () => d(e.rules, e.modelValue), H = () => {
      var E;
      (E = r.value) == null || E.focus();
    }, Q = () => {
      r.value.blur();
    }, j = {
      reset: C,
      validate: S,
      resetValidation: v
    };
    return k(l, j), Ne(() => {
      e.autofocus && H();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: s,
      type: t,
      maxlengthText: o,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: oo,
      classes: jy,
      isEmpty: Nn,
      computePlaceholderState: c,
      handleFocus: h,
      handleBlur: b,
      handleInput: y,
      handleChange: w,
      handleClear: M,
      handleClick: $,
      handleTouchstart: N,
      handleCompositionStart: O,
      handleCompositionEnd: P,
      validate: S,
      resetValidation: v,
      reset: C,
      focus: H,
      blur: Q
    };
  }
});
ad.render = Ky;
const fr = ad;
fr.install = function(e) {
  e.component(fr.name, fr);
};
var VS = fr;
function Xy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Zy(e) {
  return ["always", "hover", "none"].includes(e);
}
var Jy = {
  type: {
    type: String,
    default: "default",
    validator: Xy
  },
  href: {
    type: String
  },
  target: {
    type: String
  },
  to: {
    type: [String, Object]
  },
  replace: {
    type: Boolean,
    default: !1
  },
  underline: {
    type: String,
    default: "always",
    validator: Zy
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  textSize: {
    type: [String, Number]
  },
  textColor: {
    type: String
  },
  onClick: Y()
}, {
  n: Qy,
  classes: _y
} = ee("link");
function xy(e, n) {
  return p(), me(
    ja(e.tag),
    Ee(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [W(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var td = x({
  name: "VarLink",
  props: Jy,
  setup(e) {
    var n = R(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = R(() => {
      var {
        disabled: t,
        href: o,
        target: l,
        to: i,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: l
      } : i ? {
        to: i,
        target: l,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: l
      } = e;
      o || k(l, t);
    };
    return {
      n: Qy,
      classes: _y,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
td.render = xy;
const Hr = td;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var MS = Hr, eb = {
  loading: {
    type: Boolean,
    default: !1
  },
  immediateCheck: {
    type: Boolean,
    default: !0
  },
  finished: {
    type: Boolean,
    default: !1
  },
  error: {
    type: Boolean,
    default: !1
  },
  offset: {
    type: [String, Number],
    default: 0
  },
  loadingText: {
    type: String
  },
  finishedText: {
    type: String
  },
  errorText: {
    type: String
  },
  onLoad: Y(),
  "onUpdate:loading": Y(),
  "onUpdate:error": Y()
};
function $l(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function nb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        $l(o, a, t, l, i, "next", s);
      }
      function i(s) {
        $l(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: rb,
  classes: ab
} = ee("list");
function tb(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [W(e.$slots, "default"), e.loading ? W(e.$slots, "loading", {
      key: 0
    }, () => [A(
      "div",
      {
        class: m(e.n("loading"))
      },
      [A(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
        /* TEXT, CLASS */
      ), re(r, {
        size: "mini",
        radius: 10
      })],
      2
      /* CLASS */
    )]) : _("v-if", !0), e.finished ? W(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? W(e.$slots, "error", {
      key: 2
    }, () => [Se((p(), T(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [be(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : _("v-if", !0), A(
      "div",
      {
        class: m(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var od = x({
  name: "VarList",
  directives: {
    Ripple: ze
  },
  components: {
    VarLoading: $n
  },
  props: eb,
  setup(e) {
    var n = V(null), r = V(null), a, t = () => {
      k(e["onUpdate:error"], !1), k(e["onUpdate:loading"], !0), k(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = nb(function* () {
        yield Me();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return i.apply(this, arguments);
      };
    }();
    return Ne(() => {
      a = Ta(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), Wn(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: je,
      listEl: n,
      detectorEl: r,
      dt: Ut,
      isNumber: xe,
      load: t,
      check: l,
      n: rb,
      classes: ab
    };
  }
});
od.render = tb;
const jr = od;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var BS = jr, ob = {
  value: {
    type: Number,
    default: 0
  },
  opacity: {
    type: Number,
    default: 0
  },
  error: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  errorColor: {
    type: String
  },
  height: {
    type: [Number, String]
  },
  top: {
    type: [Number, String]
  }
}, {
  classes: ib,
  n: Tl
} = ee("loading-bar");
const lb = x({
  name: "VarLoadingBar",
  props: ob,
  setup(e) {
    return () => re("div", {
      class: ib(Tl(), [e.error, Tl("--error")]),
      style: {
        zIndex: dn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: he(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: he(e.top)
      }
    }, null);
  }
});
var id, Ol, ld = {}, sb = {
  value: 0,
  opacity: 0,
  error: !1
}, Ke = Ve(sb), ub = (e) => {
  Object.assign(Ke, e);
}, db = (e) => {
  Object.assign(Ke, e), ld = e;
}, vb = () => {
  Object.keys(ld).forEach((e) => {
    Ke[e] !== void 0 && (Ke[e] = void 0);
  });
}, sd = () => {
  id = window.setTimeout(() => {
    if (!(Ke.value >= 95)) {
      var e = Math.random();
      Ke.value < 70 && (e = Math.round(5 * Math.random())), Ke.value += e, sd();
    }
  }, 200);
}, fb = () => {
  Ol || (Ol = !0, Wa(lb, Ke)), (!Ke.error || Ke.value === 100) && (Ke.value = 0), setTimeout(() => {
    Ke.opacity = 1;
  }, 200), sd();
}, cb = () => {
  Ke.value = 100, setTimeout(() => {
    Ke.opacity = 0, setTimeout(() => {
      Ke.error = !1;
    }, 250);
  }, 300), window.clearTimeout(id);
}, mb = () => {
  Ke.error = !0, It.start(), setTimeout(It.finish, 300);
}, It = {
  start: fb,
  finish: cb,
  error: mb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: ub,
  setDefaultOptions: db,
  resetDefaultOptions: vb
}, IS = It;
const Xo = It;
function pb(e) {
  return ["click", "hover"].includes(e);
}
function hb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var gb = {
  show: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  trigger: {
    type: String,
    default: "click",
    validator: pb
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: hb
  },
  offsetX: {
    type: [Number, String],
    default: 0
  },
  offsetY: {
    type: [Number, String],
    default: 0
  },
  teleport: {
    type: [String, Object],
    default: "body"
  },
  sameWidth: {
    type: Boolean,
    default: !1
  },
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
}, {
  n: yb,
  classes: bb
} = ee("menu");
function wb(e, n) {
  return p(), T(
    "div",
    {
      ref: "host",
      class: m(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleHostClick && e.handleHostClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleHostMouseenter && e.handleHostMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleHostMouseleave && e.handleHostMouseleave(...arguments);
      })
    },
    [W(e.$slots, "default"), (p(), me(
      Fa,
      {
        to: e.teleport
      },
      [re(
        Ae,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ve(() => [Se(A(
            "div",
            {
              ref: "popover",
              style: q({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = En(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [W(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Ha, e.show]])]),
          _: 3
          /* FORWARDED */
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var ud = x({
  name: "VarMenu",
  props: gb,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: h
    } = Du(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: he,
      n: yb,
      classes: bb,
      handleHostClick: l,
      handleHostMouseenter: i,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: h,
      open: f,
      close: c
    };
  }
});
ud.render = wb;
const Fn = ud;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var NS = Fn, dd = Symbol("SELECT_BIND_OPTION_KEY"), vd = Symbol("SELECT_COUNT_OPTION_KEY");
function Cb() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(dd), {
    length: r
  } = vn(vd);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Sb() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(dd), {
    index: r
  } = fn(vd);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var kb = {
  label: {},
  value: {}
}, {
  n: $b,
  classes: Tb
} = ee("option");
function Ob(e, n) {
  var r = ie("var-checkbox"), a = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: q({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: q({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (p(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = En(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : _("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [W(e.$slots, "default", {}, () => [be(
        ne(e.label),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[a]]);
}
var fd = x({
  name: "VarOption",
  directives: {
    Ripple: ze
  },
  components: {
    VarCheckbox: ir
  },
  props: kb,
  setup(e) {
    var n = V(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = Sb(), {
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(h);
    }, f = () => d(h), c = (b) => {
      n.value = b;
    }, h = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return le([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), l(h), {
      n: $b,
      classes: Tb,
      optionSelected: n,
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
fd.render = Ob;
const Wr = fd;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var DS = Wr, Pb = {
  show: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  teleport: {
    type: String
  },
  onClick: Y(),
  "onUpdate:show": Y()
};
function Eb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !zt(e);
}
var {
  n: Pl
} = ee("overlay");
const Gr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Pb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = it(() => e.show, 1), {
      disabled: o
    } = ii(), l = () => {
      k(e.onClick), k(e["onUpdate:show"], !1);
    };
    Ht(() => e.show, () => e.lockScroll);
    var i = () => re("div", Ee({
      class: Pl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [k(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(Ae, {
        name: Pl("--fade")
      }, {
        default: () => [u && i()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return re(Fa, {
          to: u,
          disabled: o.value
        }, Eb(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var AS = Gr, Vb = {
  current: {
    type: [Number, String]
  },
  size: {
    type: [Number, String],
    default: 10
  },
  total: {
    type: [Number, String],
    default: 0
  },
  maxPagerCount: {
    type: Number,
    default: 3
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  simple: {
    type: Boolean,
    default: !0
  },
  showSizeChanger: {
    type: Boolean,
    default: !0
  },
  showQuickJumper: {
    type: Boolean,
    default: !1
  },
  sizeOption: {
    type: Array,
    default: () => [10, 20, 50, 100]
  },
  showTotal: {
    type: Function
  },
  onChange: Y(),
  "onUpdate:current": Y(),
  "onUpdate:size": Y()
}, {
  n: Mb,
  classes: Bb
} = ee("pagination"), Ib = ["item-mode", "onClick"];
function Nb(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), l = Fe("ripple");
  return p(), T(
    "ul",
    {
      class: m(e.n())
    },
    [Se((p(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (i) => e.clickItem("prev"))
      },
      [W(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (p(), T(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (i) => e.simpleValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (i) => e.setPage("simple", e.simpleValue, i)),
          onKeydown: n[3] || (n[3] = Vi((i) => e.setPage("simple", e.simpleValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [be(
        " / " + ne(e.pageCount) + " ",
        1
        /* TEXT */
      ), A(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
        /* CLASS */
      )])],
      2
      /* CLASS */
    )) : (p(!0), T(
      Pe,
      {
        key: 1
      },
      Ie(e.pageList, (i, s) => Se((p(), T(
        "li",
        {
          key: e.toNumber(i) + s,
          "item-mode": e.getMode(i, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [i === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(i, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [i === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(i, s)
        },
        [be(
          ne(i),
          1
          /* TEXT */
        )],
        10,
        Ib
      )), [[l, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Se((p(), T(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (i) => e.clickItem("next"))
      },
      [W(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[l, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (p(), T(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (i) => e.menuVisible = i),
          "offset-x": -4
        },
        {
          menu: ve(() => [(p(!0), T(
            Pe,
            null,
            Ie(e.sizeOption, (i, s) => Se((p(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === i, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(i)
              },
              {
                default: ve(() => [be(
                  ne(i) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[l]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: ve(() => [A(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [A(
              "span",
              null,
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
              /* TEXT */
            ), re(
              r,
              {
                class: m(e.n("size--open-icon")),
                "var-pagination-cover": "",
                name: "menu-down"
              },
              null,
              8,
              ["class"]
            )],
            2
            /* CLASS */
          )]),
          _: 1
          /* STABLE */
        },
        8,
        ["show"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (p(), T(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [be(
        ne(e.pack.paginationJump) + " ",
        1
        /* TEXT */
      ), re(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (i) => e.inputValue = i),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (i) => e.setPage("quick", e.inputValue, i)),
          onKeydown: n[9] || (n[9] = Vi((i) => e.setPage("quick", e.inputValue, i), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (p(), T(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var cd = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: or,
    VarInput: fr
  },
  directives: {
    Ripple: ze
  },
  props: Vb,
  setup(e) {
    var n = V(!1), r = V(""), a = V("1"), t = V(!1), o = V(!1), l = V(L(e.current) || 1), i = V(L(e.size) || 10), s = V([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var w = i.value * (l.value - 1) + 1, M = Math.min(i.value * l.value, L(e.total));
      return [w, M];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), c = (w, M) => xe(w) ? !1 : M === 1 ? t.value : o.value, h = (w, M) => xe(w) ? "basic" : M === 1 ? "head" : "tail", b = (w, M) => {
      w === l.value || e.disabled || (xe(w) ? l.value = w : w === "prev" ? l.value > 1 && (l.value -= 1) : w === "next" ? l.value < d.value && (l.value += 1) : w === "..." && (M === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, O = (w) => {
      i.value = w, n.value = !1;
    }, P = (w) => {
      var M = /^[1-9][0-9]*$/;
      return M.test(w);
    }, y = (w, M, $) => {
      if ($.target.blur(), P(M)) {
        var z = L(M);
        z > d.value && (z = d.value, a.value = "" + z), z !== l.value && (l.value = z);
      }
      w === "quick" && (r.value = ""), w === "simple" && !P(M) && (a.value = "" + l.value);
    };
    return le([() => e.current, () => e.size], (w) => {
      var [M, $] = w;
      l.value = L(M) || 1, i.value = L($ || 10);
    }), le([l, i, d], (w, M) => {
      var [$, z, B] = w, [I, N] = M, C = [], {
        maxPagerCount: S,
        total: H,
        onChange: Q
      } = e, j = Math.ceil(L(H) / L(N)), E = B - (S - u.value) - 1;
      if (a.value = "" + $, B - 2 > S) {
        if (I === void 0 || B !== j)
          for (var F = 2; F < S + 2; F++)
            C.push(F);
        if ($ <= S && $ < E) {
          C = [];
          for (var U = 1; U < S + 1; U++)
            C.push(U + 1);
          t.value = !0, o.value = !1;
        }
        if ($ > S && $ < E) {
          C = [];
          for (var X = 1; X < S + 1; X++)
            C.push($ + X - u.value);
          t.value = $ === 2 && S === 1, o.value = !1;
        }
        if ($ >= E) {
          C = [];
          for (var D = 1; D < S + 1; D++)
            C.push(B - (S - D) - 1);
          t.value = !1, o.value = !0;
        }
        C = [1, "...", ...C, "...", B];
      } else
        for (var Z = 1; Z <= B; Z++)
          C.push(Z);
      s.value = C, I !== void 0 && B > 0 && k(Q, $, z), k(e["onUpdate:current"], $), k(e["onUpdate:size"], z);
    }, {
      immediate: !0
    }), {
      n: Mb,
      classes: Bb,
      pack: je,
      current: l,
      menuVisible: n,
      size: i,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: h,
      isHideEllipsis: c,
      clickItem: b,
      showMenu: g,
      clickSize: O,
      setPage: y,
      toNumber: L
    };
  }
});
cd.render = Nb;
const qr = cd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var zS = qr, Db = {
  elevation: {
    type: [Number, String]
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  radius: {
    type: [Number, String]
  },
  width: {
    type: [Number, String]
  },
  height: {
    type: [Number, String]
  },
  round: {
    type: Boolean,
    default: !1
  },
  inline: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, {
  n: Ab,
  classes: zb
} = ee("paper");
function Lb(e, n) {
  var r = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.elevation != null, e.n("$-elevation--" + e.elevation)], [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var md = x({
  name: "VarPaper",
  directives: {
    Ripple: ze
  },
  props: Db,
  setup(e) {
    var n = (r) => {
      k(e.onClick, r);
    };
    return {
      n: Ab,
      classes: zb,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
md.render = Lb;
const Kr = md;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var LS = Kr;
function Zo() {
  return Zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Zo.apply(this, arguments);
}
var Rb = Zo({
  columns: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  },
  textKey: {
    type: String,
    default: "text"
  },
  toolbar: {
    type: Boolean,
    default: !0
  },
  cascade: {
    type: Boolean,
    default: !1
  },
  cascadeInitialIndexes: {
    type: Array,
    default: () => []
  },
  optionHeight: {
    type: [Number, String],
    default: 44
  },
  optionCount: {
    type: [Number, String],
    default: 6
  },
  confirmButtonText: {
    type: String
  },
  cancelButtonText: {
    type: String
  },
  confirmButtonTextColor: {
    type: String
  },
  cancelButtonTextColor: {
    type: String
  },
  // dynamic internal
  dynamic: {
    type: Boolean,
    default: !1
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: Y(),
  onConfirm: Y(),
  onCancel: Y()
}, Xe(ot, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Ub,
  classes: Yb
} = ee("picker"), El = 300, Fb = 15, Vl = 0, Hb = ["onTouchstart", "onTouchmove", "onTouchend"], jb = ["onTransitionend"];
function Wb(e, n) {
  var r = ie("var-button");
  return p(), me(
    ja(e.dynamic ? e.n("$-popup") : e.Transition),
    Ee(e.dynamic ? {
      onOpen: e.onOpen,
      onOpened: e.onOpened,
      onClose: e.onClose,
      onClosed: e.onClosed,
      onClickOverlay: e.onClickOverlay,
      onRouteChange: e.onRouteChange,
      closeOnClickOverlay: e.closeOnClickOverlay,
      teleport: e.teleport,
      show: e.show,
      "onUpdate:show": e.handlePopupUpdateShow,
      position: "bottom",
      class: e.n("popup")
    } : null, {
      "var-picker-cover": ""
    }),
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("toolbar"))
          },
          [W(e.$slots, "cancel", {}, () => [re(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), W(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: m(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), W(e.$slots, "confirm", {}, () => [re(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [be(
                ne(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
          /* CLASS */
        )) : _("v-if", !0), A(
          "div",
          {
            class: m(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(p(!0), T(
            Pe,
            null,
            Ie(e.scrollColumns, (a) => (p(), T(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: En((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [A(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: q({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(p(!0), T(
                  Pe,
                  null,
                  Ie(a.column.texts, (t) => (p(), T(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: q({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [A(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      ne(e.textFormatter(t, a.columnIndex)),
                      3
                      /* TEXT, CLASS */
                    )],
                    6
                    /* CLASS, STYLE */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))],
                46,
                jb
              )],
              42,
              Hb
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
            "div",
            {
              class: m(e.n("picked")),
              style: q({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.n("mask")),
              style: q({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          6
          /* CLASS, STYLE */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    16
    /* FULL_PROPS */
  );
}
var pd = x({
  name: "VarPicker",
  components: {
    VarButton: en,
    VarPopup: hn
  },
  inheritAttrs: !1,
  props: Rb,
  setup(e) {
    var n = V([]), r = R(() => De(e.optionHeight)), a = R(() => De(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (C, S) => {
      S.scrollEl = C;
    }, s = (C) => {
      k(e["onUpdate:show"], C);
    }, u = (C) => {
      var S = r.value + t.value, H = t.value - C.column.texts.length * r.value;
      C.translate >= S && (C.translate = S), C.translate <= H && (C.translate = H);
    }, d = (C, S) => {
      var {
        length: H
      } = C.column.texts;
      return S = S >= H ? H - 1 : S, S = S <= 0 ? 0 : S, S;
    }, v = (C) => {
      var S = Math.round((t.value - C.translate) / r.value);
      return d(C, S);
    }, f = () => {
      var C = n.value.map((H) => H.column.texts[H.index]), S = n.value.map((H) => H.index);
      return {
        texts: C,
        indexes: S
      };
    }, c = function(C, S, H, Q) {
      Q === void 0 && (Q = !1);
      var j = t.value - d(C, S) * r.value;
      j === C.translate && (C.scrolling = !1, !Q && z(C)), C.translate = j, C.duration = H;
    }, h = (C, S, H) => {
      C.translate += Math.abs(S / H) / 3e-3 * (S < 0 ? -1 : 1);
    }, b = (C, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = no(S.scrollEl);
    }, g = (C, S) => {
      if (S.touching) {
        var {
          clientY: H
        } = C.touches[0], Q = S.prevY !== void 0 ? H - S.prevY : 0;
        S.prevY = H, S.translate += Q, u(S);
        var j = performance.now();
        j - S.momentumTime > El && (S.momentumTime = j, S.momentumPrevY = S.translate);
      }
    }, O = (C, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var H = S.translate - S.momentumPrevY, Q = performance.now() - S.momentumTime, j = Math.abs(H) >= Fb && Q <= El;
      j && h(S, H, Q), S.index = v(S), c(S, S.index, j ? 1e3 : 200);
    }, P = (C) => {
      C.scrolling = !1, z(C);
    }, y = (C) => C.map((S, H) => {
      var Q, j = we(S) ? {
        texts: S
      } : S, E = {
        id: Vl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = j.initialIndex) != null ? Q : 0,
        columnIndex: H,
        duration: 0,
        momentumTime: 0,
        column: j,
        scrollEl: null,
        scrolling: !1
      };
      return c(E, E.index, 0, !0), E;
    }), w = (C) => {
      var S = [];
      return M(S, C, 0, !0), S;
    }, M = function(C, S, H, Q) {
      if (Q === void 0 && (Q = !1), we(S) && S.length) {
        var j, E = Q && (j = e.cascadeInitialIndexes[C.length]) != null ? j : 0, F = {
          id: Vl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: E,
          columnIndex: H,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((U) => U[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        C.push(F), c(F, F.index, 0, !0), M(C, F.columns[F.index].children, H + 1, Q);
      }
    }, $ = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), M(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, z = (C) => {
      var {
        cascade: S,
        onChange: H
      } = e;
      S && $(C);
      var Q = n.value.some((U) => U.scrolling);
      if (!Q) {
        var {
          texts: j,
          indexes: E
        } = f(), F = E.every((U, X) => U === l[X]);
        F || (l = [...E], k(H, j, E));
      }
    }, B = () => {
      if (e.cascade) {
        var C = n.value.find((S) => S.scrolling);
        C && (C.translate = no(C.scrollEl), C.index = v(C), c(C, C.index, 0, !0), C.scrolling = !1, $(C));
      } else
        n.value.forEach((S) => {
          S.translate = no(S.scrollEl), S.index = v(S), c(S, S.index, 0);
        });
    }, I = () => {
      B();
      var {
        texts: C,
        indexes: S
      } = f();
      l = [...S], k(e.onConfirm, C, S);
    }, N = () => {
      B();
      var {
        texts: C,
        indexes: S
      } = f();
      l = [...S], k(e.onCancel, C, S);
    };
    return le(() => e.columns, (C) => {
      n.value = e.cascade ? w(Mi(C)) : y(Mi(C));
      var {
        indexes: S
      } = f();
      l = [...S];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Ub,
      classes: Yb,
      pack: je,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Ae,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: b,
      handleTouchmove: g,
      handleTouchend: O,
      handleTransitionend: P,
      confirm: I,
      cancel: N,
      dt: Ut
    };
  }
});
pd.render = Wb;
const cr = pd;
var rn;
function Sa(e) {
  return new Promise((n) => {
    Sa.close();
    var r = we(e) ? {
      columns: e
    } : e, a = Ve(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = Wa(cr, a, {
      onConfirm: (o, l) => {
        k(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, l) => {
        k(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onClose: () => {
        k(a.onClose), n({
          state: "close"
        }), rn === a && (rn = null);
      },
      onClosed: () => {
        k(a.onClosed), t(), rn === a && (rn = null);
      },
      onRouteChange: () => {
        t(), rn === a && (rn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
cr.install = function(e) {
  e.component(cr.name, cr);
};
Sa.Component = cr;
Sa.install = function(e) {
  e.component(cr.name, cr);
};
Sa.close = () => {
  if (rn != null) {
    var e = rn;
    rn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
var RS = cr;
function Gb(e) {
  return ["linear", "circle"].includes(e);
}
var qb = {
  mode: {
    type: String,
    default: "linear",
    validator: Gb
  },
  lineWidth: {
    type: [Number, String],
    default: 4
  },
  color: {
    type: String
  },
  trackColor: {
    type: String
  },
  ripple: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [Number, String],
    default: 0
  },
  label: {
    type: Boolean,
    default: !1
  },
  labelClass: {
    type: String
  },
  size: {
    type: [Number, String],
    default: 40
  },
  rotate: {
    type: Number,
    default: 0
  },
  track: {
    type: Boolean,
    default: !0
  }
}, {
  n: Kb,
  classes: Xb
} = ee("progress"), Zb = ["viewBox"], Jb = ["cx", "cy", "r", "stroke-width"], Qb = ["cx", "cy", "r", "stroke-width"];
function _b(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [A(
        "div",
        {
          class: m(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: q({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), A(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: q({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      ), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (p(), T(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(p(), T(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (p(), T(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: q({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          Jb
        )) : _("v-if", !0), A(
          "circle",
          {
            class: m(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: q({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          Qb
        )],
        14,
        Zb
      )), e.label ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [be(
          ne(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var hd = x({
  name: "VarProgress",
  props: qb,
  setup(e) {
    var n = R(() => {
      var a = L(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = R(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, l = "0 0 " + De(a) + " " + De(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (De(a) - De(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: Kb,
      classes: Xb,
      toSizeUnit: he,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
hd.render = _b;
const Xr = hd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var US = Xr, xb = {
  modelValue: {
    type: Boolean
  },
  // 是否禁用下拉刷新
  disabled: {
    type: Boolean,
    default: !1
  },
  // 动画时长
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  // 成功提示展示时长
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  // control 的背景颜色
  bgColor: {
    type: String
  },
  // 成功状态下 control 的背景颜色
  successBgColor: {
    type: String
  },
  // control 的颜色
  color: {
    type: String
  },
  // 成功状态下 control 的颜色
  successColor: {
    type: String
  },
  target: {
    type: [String, Object]
  },
  onRefresh: Y(),
  "onUpdate:modelValue": Y()
};
function Ml(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function e0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ml(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ml(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Bl,
  classes: n0
} = ee("pull-refresh"), Il = 150;
function r0(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      ref: "freshNode",
      class: m(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchend: n[1] || (n[1] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "controlNode",
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: q(e.controlStyle)
      },
      [re(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: m(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
          "var-pull-refresh-cover": ""
        },
        null,
        8,
        ["name", "transition", "class"]
      )],
      6
      /* CLASS, STYLE */
    ), W(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var gd = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: xb,
  setup(e) {
    var n, r, a = V(0), t = V(null), o = V(null), l = V(0), i = V(-999), s = V("arrow-down"), u = V("default"), d = V(!1), v = 0, f = 0, c = V(!0), h = R(() => u.value !== "loading" && u.value !== "success" && !e.disabled), b = R(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: O.value ? e.successBgColor : e.bgColor,
      color: O.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * a.value)), O = R(() => u.value === "success"), P = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, Il);
    }), y = (I) => {
      var N = "classList" in n ? n : document.body;
      N.classList[I](Bl() + "--lock");
    }, w = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, M = (I) => {
      if (h.value) {
        var N = Yt(n);
        if (!(N > 0)) {
          var C = N === 0, S = I.touches[0];
          f = S.clientY - v, C && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = I.touches[0].clientY), C && i.value > a.value && y("add");
          var H = (I.touches[0].clientY - l.value) / 2 + a.value;
          i.value = H >= g.value ? g.value : H, i.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, $ = /* @__PURE__ */ function() {
      var I = e0(function* () {
        h.value && (d.value = !0, i.value >= g.value * 0.2 ? (yield r, u.value = "loading", i.value = g.value * 0.3, k(e["onUpdate:modelValue"], !0), k(e.onRefresh), y("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
          d.value = !1, y("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), z = () => {
      var {
        width: I
      } = o.value.getBoundingClientRect();
      i.value = -(I + I * 0.25), a.value = -(I + I * 0.25);
    }, B = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return le(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, B();
      }, L(e.successDuration)));
    }), Ne(() => {
      var I;
      n = e.target ? Jl(e.target, "PullRefresh") : Ta(t.value), z(), (I = t.value) == null || I.addEventListener("touchmove", M, {
        passive: !1
      });
    }), At(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", M);
    }), {
      n: Bl,
      classes: n0,
      iconHasChanged: c,
      ICON_TRANSITION: Il,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: w,
      touchMove: M,
      touchEnd: $,
      iconName: s,
      controlStyle: b,
      isSuccess: O
    };
  }
});
gd.render = r0;
const Zr = gd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var YS = Zr, a0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  checkedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean, Object, Array],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  checkedColor: {
    type: String
  },
  uncheckedColor: {
    type: String
  },
  iconSize: {
    type: [String, Number]
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, yd = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), bd = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function t0() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(yd), {
    length: r
  } = vn(bd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function o0() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(yd), {
    index: r
  } = fn(bd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: i0,
  classes: l0
} = ee("radio");
function s0(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      Ee({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Se((p(), T(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: q({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? W(e.$slots, "checked-icon", {
          key: 0
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : W(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [re(
          r,
          {
            class: m(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-blank",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )])],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), A(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      16
      /* FULL_PROPS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var wd = x({
  name: "VarRadio",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  inheritAttrs: !1,
  props: a0,
  setup(e) {
    var n = V(!1), r = R(() => n.value === e.checkedValue), a = V(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = o0(), {
      form: l,
      bindForm: i
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (w) => {
      Me(() => {
        var {
          validateTrigger: M,
          rules: $,
          modelValue: z
        } = e;
        u(M, w, $, z);
      });
    }, c = (w) => {
      var {
        checkedValue: M,
        onChange: $
      } = e;
      t && n.value === M || (n.value = w, k(e["onUpdate:modelValue"], n.value), k($, n.value), t == null || t.onToggle(M), f("onChange"));
    }, h = (w) => {
      var {
        disabled: M,
        readonly: $,
        uncheckedValue: z,
        checkedValue: B,
        onClick: I
      } = e;
      l != null && l.disabled.value || M || (k(I, w), !(l != null && l.readonly.value || $) && (a.value = !0, c(r.value ? z : B)));
    }, b = (w) => {
      var {
        checkedValue: M,
        uncheckedValue: $
      } = e;
      n.value = w === M ? M : $;
    }, g = () => {
      k(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, O = () => d(e.rules, e.modelValue), P = (w) => {
      var {
        uncheckedValue: M,
        checkedValue: $
      } = e, z = ![M, $].includes(w);
      z && (w = r.value ? M : $), c(w);
    };
    le(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var y = {
      sync: b,
      validate: O,
      resetValidation: v,
      reset: g
    };
    return k(o, y), k(i, y), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: i0,
      classes: l0,
      handleClick: h,
      toggle: P,
      reset: g,
      validate: O,
      resetValidation: v
    };
  }
});
wd.render = s0;
const Jr = wd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var FS = Jr;
function u0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var d0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: u0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: v0,
  classes: f0
} = ee("radio-group");
function c0(e, n) {
  var r = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), re(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Cd = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: d0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = t0(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = bn(), u = R(() => o.value), d = (g) => {
      Me(() => {
        var {
          validateTrigger: O,
          rules: P,
          modelValue: y
        } = e;
        l(O, g, P, y);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: O
      } = g;
      return O(e.modelValue);
    }), f = (g) => {
      k(e["onUpdate:modelValue"], g), k(e.onChange, g), d("onChange");
    }, c = () => i(e.rules, e.modelValue), h = () => {
      k(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var b = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return k(t, b), a(b), {
      errorMessage: o,
      n: v0,
      classes: f0,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
Cd.render = c0;
const Qr = Cd;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var HS = Qr, m0 = {
  modelValue: {
    type: [String, Number],
    default: 0
  },
  count: {
    type: [String, Number],
    default: 5
  },
  color: {
    type: String
  },
  icon: {
    type: String,
    default: "star"
  },
  emptyColor: {
    type: String
  },
  emptyIcon: {
    type: String,
    default: "star-outline"
  },
  size: {
    type: [String, Number]
  },
  gap: {
    type: [String, Number]
  },
  namespace: {
    type: String
  },
  half: {
    type: Boolean,
    default: !1
  },
  halfIcon: {
    type: String,
    default: "star-half-full"
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  disabledColor: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: qa
} = ee("rate"), p0 = ["onClick"];
function h0(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.toNumber(e.count), (o) => Se((p(), T(
          "div",
          {
            key: o,
            style: q(e.getStyle(o)),
            class: m(e.getClass(o)),
            onClick: (l) => e.handleClick(o, l)
          },
          [re(
            r,
            {
              class: m(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(o).name,
              style: q({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          p0
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Sd = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: ze
  },
  props: m0,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = bn(), i = (g) => {
      var {
        count: O,
        gap: P
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== L(O) ? he(P) : 0
      };
    }, s = (g) => {
      var {
        name: O,
        color: P
      } = u(g);
      return {
        [qa("content")]: !0,
        [qa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [qa("--error")]: a.value,
        [qa("--primary")]: O !== e.emptyIcon && !P
      };
    }, u = (g) => {
      var {
        modelValue: O,
        disabled: P,
        disabledColor: y,
        color: w,
        half: M,
        emptyColor: $,
        icon: z,
        halfIcon: B,
        emptyIcon: I
      } = e, N = w;
      return (P || n != null && n.disabled.value) && (N = y), g <= L(O) ? {
        color: N,
        name: z
      } : M && g <= L(O) + 0.5 ? {
        color: N,
        name: B
      } : {
        color: P || n != null && n.disabled.value ? y : $,
        name: I
      };
    }, d = (g, O) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = O.target;
        O.offsetX <= Math.floor(P / 2) && (g -= 0.5);
      }
      k(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, L(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, O) => {
      var {
        readonly: P,
        disabled: y,
        onChange: w
      } = e;
      P || y || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, O), k(w, g), f());
    }, h = () => {
      k(e["onUpdate:modelValue"], 0), l();
    }, b = {
      reset: h,
      validate: v,
      resetValidation: l
    };
    return k(r, b), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: i,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: h,
      validate: v,
      resetValidation: l,
      toSizeUnit: he,
      toNumber: L,
      n: qa
    };
  }
});
Sd.render = h0;
const _r = Sd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var jS = _r;
function g0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var y0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: g0
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  animation: {
    type: Boolean,
    default: !0
  }
}, b0 = (e) => (ka(""), e = e(), $a(), e), w0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, C0 = /* @__PURE__ */ b0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), S0 = [C0];
function k0(e, n) {
  return p(), T("svg", w0, S0);
}
var kd = x({});
kd.render = k0;
const $0 = kd;
var T0 = (e) => (ka(""), e = e(), $a(), e), O0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, P0 = /* @__PURE__ */ T0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), E0 = [P0];
function V0(e, n) {
  return p(), T("svg", O0, E0);
}
var $d = x({});
$d.render = V0;
const M0 = $d;
var B0 = (e) => (ka(""), e = e(), $a(), e), I0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, N0 = /* @__PURE__ */ B0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), D0 = [N0];
function A0(e, n) {
  return p(), T("svg", I0, D0);
}
var Td = x({});
Td.render = A0;
const z0 = Td;
var {
  n: L0,
  classes: R0
} = ee("result");
function U0(e, n) {
  return p(), T(
    Pe,
    null,
    [A(
      "span",
      {
        class: m(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: q({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: q({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        ref: "circle",
        class: m(e.n("success-circle")),
        style: q({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), A(
      "span",
      {
        class: m(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), A(
      "span",
      {
        class: m(e.n("success-cover-right")),
        style: q({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    )],
    64
    /* STABLE_FRAGMENT */
  );
}
var Od = x({
  props: {
    animation: {
      type: Boolean
    },
    borderSize: {
      type: String
    }
  },
  setup() {
    return {
      n: L0,
      classes: R0,
      toNumber: L
    };
  }
});
Od.render = U0;
const Y0 = Od;
var F0 = (e) => (ka(""), e = e(), $a(), e), H0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, j0 = /* @__PURE__ */ F0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), W0 = [j0];
function G0(e, n) {
  return p(), T("svg", H0, W0);
}
var Pd = x({});
Pd.render = G0;
const q0 = Pd;
var K0 = (e) => (ka(""), e = e(), $a(), e), X0 = {
  viewBox: "-4 -4 32 32"
}, Z0 = /* @__PURE__ */ K0(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), J0 = [Z0];
function Q0(e, n) {
  return p(), T("svg", X0, J0);
}
var Ed = x({});
Ed.render = Q0;
const _0 = Ed;
var {
  n: x0,
  classes: e1
} = ee("result");
function n1(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(p(), me(
          ja(e.type),
          {
            "border-size": e.borderSize,
            animation: e.animation
          },
          null,
          8,
          ["border-size", "animation"]
        ))],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    )) : _("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Vd = x({
  name: "VarResult",
  components: {
    Info: $0,
    Success: Y0,
    Warning: z0,
    Error: M0,
    Question: q0,
    Empty: _0
  },
  props: y0,
  setup(e) {
    var n = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = R(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: x0,
      classes: e1,
      toNumber: L,
      toPxNum: De,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
Vd.render = n1;
const xr = Vd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var WS = xr;
function r1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function a1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var t1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: r1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: a1
  },
  onClick: Y()
}, {
  n: o1,
  classes: i1
} = ee("row");
function l1(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: q({
        justifyContent: e.padStartFlex(e.justify),
        alignItems: e.padStartFlex(e.align),
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Md = x({
  name: "VarRow",
  props: t1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Sm(), t = R(() => {
      var s = De(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      k(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(i), {
      n: o1,
      classes: i1,
      average: t,
      handleClick: l,
      padStartFlex: Ct
    };
  }
});
Md.render = l1;
const ea = Md;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var GS = ea;
function s1(e) {
  return ["left", "right", "center"].includes(e);
}
var u1 = {
  modelValue: {
    default: void 0
  },
  placeholder: {
    type: String
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  offsetY: {
    type: [String, Number],
    default: 0
  },
  chip: {
    type: Boolean,
    default: !1
  },
  line: {
    type: Boolean,
    default: !0
  },
  hint: {
    type: Boolean,
    default: !0
  },
  textColor: {
    type: String
  },
  focusColor: {
    type: String
  },
  blurColor: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  separator: {
    type: String,
    default: ","
  },
  textAlign: {
    type: String,
    default: "left",
    validator: s1
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onClose: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: io,
  classes: d1
} = ee("select"), v1 = {
  key: 1
};
function f1(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), o = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [re(
          t,
          {
            "var-select-cover": "",
            class: m(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (l) => e.isFocus = l),
            onClose: e.handleBlur
          },
          {
            menu: ve(() => [A(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [W(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [A(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: q({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? _("v-if", !0) : W(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (p(), T(
                  Pe,
                  {
                    key: 0
                  },
                  [e.chip ? (p(), T(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(p(!0), T(
                      Pe,
                      null,
                      Ie(e.labels, (l) => (p(), me(
                        r,
                        {
                          class: m(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: l,
                          onClick: n[0] || (n[0] = En(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(l)
                        },
                        {
                          default: ve(() => [be(
                            ne(l),
                            1
                            /* TEXT */
                          )]),
                          _: 2
                          /* DYNAMIC */
                        },
                        1032,
                        ["class", "type", "onClose"]
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))],
                    2
                    /* CLASS */
                  )) : (p(), T(
                    "div",
                    {
                      key: 1,
                      class: m(e.n("values"))
                    },
                    ne(e.labels.join(e.separator)),
                    3
                    /* TEXT, CLASS */
                  ))],
                  2112
                  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
                )) : (p(), T(
                  "span",
                  v1,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), W(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [re(
                a,
                {
                  class: m(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )])],
              6
              /* CLASS, STYLE */
            ), A(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: q({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ne(e.placeholder),
              7
              /* TEXT, CLASS, STYLE */
            )]),
            _: 3
            /* FORWARDED */
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (p(), me(
          a,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            name: "close-circle",
            size: "14px",
            onClick: e.handleClear
          },
          null,
          8,
          ["class", "onClick"]
        )) : _("v-if", !0)])],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    ), e.line ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: q({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0), re(
      o,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Bd = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: lr,
    VarFormDetails: We
  },
  props: u1,
  setup(e) {
    var n = V(null), r = V(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = V(""), l = V([]), i = R(() => Nn(e.modelValue)), s = V("0px"), u = V(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: h
    } = Cb(), {
      errorMessage: b,
      validateWithTrigger: g,
      validate: O,
      // expose
      resetValidation: P
    } = bn(), y = V(null), w = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        l.value = ae.map(z);
      }
      !G && !Nn(J) && (o.value = z(J)), !G && Nn(J) && (o.value = "");
    }, M = (G) => {
      Me(() => {
        var {
          validateTrigger: J,
          rules: ae,
          modelValue: oe
        } = e;
        g(J, G, ae, oe);
      });
    }, $ = (G) => {
      var {
        value: J,
        label: ae
      } = G;
      return J.value != null ? J.value : ae.value;
    }, z = (G) => {
      var J, ae, oe = c.find((ge) => {
        var {
          value: pe
        } = ge;
        return pe.value === G;
      });
      return oe || (oe = c.find((ge) => {
        var {
          label: pe
        } = ge;
        return pe.value === G;
      })), (J = (ae = oe) == null ? void 0 : ae.label.value) != null ? J : "";
    }, B = () => {
      var {
        hint: G,
        modelValue: J
      } = e;
      if (!G && !Nn(J))
        return io("--placeholder-hidden");
      if (G && (!Nn(J) || r.value))
        return io("--placeholder-hint");
    }, I = () => n.value && window.getComputedStyle(n.value).width || "0px", N = () => {
      var {
        disabled: G,
        readonly: J,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || (s.value = I(), u.value = De(e.offsetY), r.value = !0, k(ae), M("onFocus"));
    }, C = () => {
      var {
        disabled: G,
        readonly: J,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || (k(ae), M("onBlur"));
    }, S = (G) => {
      var {
        disabled: J,
        readonly: ae,
        multiple: oe,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe ? c.filter((He) => {
          var {
            selected: nn
          } = He;
          return nn.value;
        }).map($) : $(G);
        k(e["onUpdate:modelValue"], pe), k(ge, pe), M("onChange"), !oe && (r.value = !1);
      }
    }, H = () => {
      var {
        disabled: G,
        readonly: J,
        multiple: ae,
        clearable: oe,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || G || J || !oe)) {
        var pe = ae ? [] : void 0;
        k(e["onUpdate:modelValue"], pe), k(ge, pe), M("onClear");
      }
    }, Q = (G) => {
      var {
        disabled: J,
        onClick: ae
      } = e;
      v != null && v.disabled.value || J || (k(ae, G), M("onClick"));
    }, j = (G) => {
      var {
        disabled: J,
        readonly: ae,
        modelValue: oe,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe, He = c.find((sn) => {
          var {
            label: Le
          } = sn;
          return Le.value === G;
        }), nn = pe.filter((sn) => {
          var Le;
          return sn !== ((Le = He.value.value) != null ? Le : He.label.value);
        });
        k(e["onUpdate:modelValue"], nn), k(ge, nn), M("onClose");
      }
    }, E = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        c.forEach((oe) => oe.sync(ae.includes($(oe))));
      } else
        c.forEach((oe) => oe.sync(J === $(oe)));
      w();
    }, F = () => {
      s.value = I(), u.value = De(e.offsetY), r.value = !0;
    }, U = () => {
      r.value = !1;
    }, X = () => O(e.rules, e.modelValue), D = () => {
      k(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    le(() => e.multiple, () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G && !we(J))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, E, {
      deep: !0
    }), le(() => f.value, E);
    var Z = {
      wrapWidth: R(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: S,
      reset: D,
      validate: X,
      resetValidation: P
    };
    return h(Z), k(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: b,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: y,
      n: io,
      classes: d1,
      computePlaceholderState: B,
      handleFocus: N,
      handleBlur: C,
      handleClear: H,
      handleClick: Q,
      handleClose: j,
      reset: D,
      validate: X,
      resetValidation: P,
      focus: F,
      blur: U
    };
  }
});
Bd.render = f1;
const na = Bd;
na.install = function(e) {
  e.component(na.name, na);
};
var qS = na, c1 = {
  loading: {
    type: Boolean,
    default: !0
  },
  title: {
    type: Boolean,
    default: !1
  },
  card: {
    type: Boolean,
    default: !1
  },
  avatar: {
    type: Boolean,
    default: !1
  },
  fullscreen: {
    type: Boolean,
    default: !1
  },
  fullscreenZIndex: {
    type: [Number, String],
    default: 100
  },
  titleWidth: {
    type: [Number, String]
  },
  cardHeight: {
    type: [Number, String]
  },
  avatarSize: {
    type: [Number, String]
  },
  rows: {
    type: [Number, String],
    default: 3
  },
  rowsWidth: {
    type: Array,
    default: () => []
  }
}, {
  n: m1,
  classes: p1
} = ee("skeleton");
function h1(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (p(), T(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: q({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [A(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
          /* CLASS */
        )],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (p(), T(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (p(), T(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: q({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [A(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
            /* CLASS */
          )],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (p(), T(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (p(), T(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: q({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [A(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
              /* CLASS */
            )],
            6
            /* CLASS, STYLE */
          )) : _("v-if", !0), (p(!0), T(
            Pe,
            null,
            Ie(e.toNumber(e.rows), (r, a) => (p(), T(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: q({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("--animation"))
                },
                null,
                2
                /* CLASS */
              )],
              6
              /* CLASS, STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))],
          2
          /* CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.loading && e.fullscreen ? (p(), T(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: q({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [A(
        "div",
        {
          class: m(e.n("--animation"))
        },
        null,
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Id = x({
  name: "VarSkeleton",
  props: c1,
  setup() {
    return {
      n: m1,
      classes: p1,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
Id.render = h1;
const ra = Id;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var KS = ra;
function g1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Be;
(function(e) {
  e.First = "1", e.Second = "2";
})(Be || (Be = {}));
var y1 = {
  // 当前进度百分比
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  // 步长
  step: {
    type: [Number, String],
    default: 1
  },
  // 是否开启双滑块模式
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: g1
  },
  activeColor: {
    type: String
  },
  trackColor: {
    type: String
  },
  thumbColor: {
    type: String
  },
  labelColor: {
    type: String
  },
  labelTextColor: {
    type: String
  },
  trackHeight: {
    type: [String, Number]
  },
  max: {
    type: [String, Number],
    default: 100
  },
  min: {
    type: [String, Number],
    default: 0
  },
  thumbSize: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  // 是否只读
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  onStart: Y(),
  onEnd: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Nl,
  classes: b1
} = ee("slider"), w1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function C1(e, n) {
  var r = ie("var-form-details");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [A(
        "div",
        {
          class: m(e.n("track"))
        },
        [A(
          "div",
          {
            class: m(e.n("track-background")),
            style: q({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: m(e.n("track-fill")),
            style: q(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (p(!0), T(
        Pe,
        null,
        Ie(e.thumbList, (a) => (p(), T(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: q({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: En((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: En((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [W(e.$slots, "button", {
            currentValue: a.text
          }, () => [A(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: q({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: q({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), A(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: q({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [A(
              "span",
              null,
              ne(a.text),
              1
              /* TEXT */
            )],
            6
            /* CLASS, STYLE */
          )])],
          46,
          w1
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    ), re(
      r,
      {
        "error-message": e.errorMessage,
        class: m(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
    /* CLASS */
  );
}
var Nd = x({
  name: "VarSlider",
  components: {
    VarFormDetails: We
  },
  props: y1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = bn(), i = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = V(null), v = V(0), f = V(!1), c = Ve({
      [Be.First]: s(),
      [Be.Second]: s()
    }), h = R(() => L(e.max) - L(e.min)), b = R(() => v.value / h.value * L(e.step)), g = R(() => {
      var {
        modelValue: U,
        range: X
      } = e, D = [];
      return X && we(U) ? D = [{
        value: M(U[0]),
        enumValue: Be.First,
        text: $(U[0])
      }, {
        value: M(U[1]),
        enumValue: Be.Second,
        text: $(U[1])
      }] : xe(U) && (D = [{
        value: M(U),
        enumValue: Be.First,
        text: $(U)
      }]), D;
    }), O = R(() => {
      var {
        activeColor: U,
        range: X,
        modelValue: D
      } = e, Z = X && we(D) ? M(Math.min(D[0], D[1])) : 0, G = X && we(D) ? M(Math.max(D[0], D[1])) - Z : M(D);
      return {
        width: G + "%",
        left: Z + "%",
        background: U
      };
    }), P = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), y = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), w = (U) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[U].active, M = (U) => {
      var {
        min: X,
        max: D
      } = e;
      return U < L(X) ? 0 : U > L(D) ? 100 : (U - L(X)) / h.value * 100;
    }, $ = (U) => {
      if (!xe(U))
        return 0;
      var X = U;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var D = parseInt("" + X, 10) === X;
      return D ? X : L(X.toPrecision(5));
    }, z = (U, X) => {
      var D = [], {
        step: Z,
        range: G,
        modelValue: J,
        onChange: ae,
        min: oe
      } = e, ge = L(Z), pe = Math.round(U / b.value), He = pe * ge + L(oe), nn = c[X].percentValue * ge + L(oe);
      if (c[X].percentValue = pe, G && we(J) && (D = X === Be.First ? [He, J[1]] : [J[0], He]), nn !== He) {
        var sn = G ? D.map((Le) => $(Le)) : $(He);
        k(ae, sn), k(e["onUpdate:modelValue"], sn), u();
      }
    }, B = (U) => {
      if (!e.range)
        return Be.First;
      var X = c[Be.First].percentValue * b.value, D = c[Be.Second].percentValue * b.value, Z = Math.abs(U - X), G = Math.abs(U - D);
      return Z <= G ? Be.First : Be.Second;
    }, I = (U, X) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || y.value) && (k(e.onStart), f.value = !0, c[X].startPosition = U.touches[0].clientX);
    }, N = (U, X) => {
      if (!(P.value || y.value || !f.value)) {
        var D = U.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, D <= 0 ? D = 0 : D >= v.value && (D = v.value), z(D, X);
      }
    }, C = (U) => {
      var {
        range: X,
        modelValue: D,
        onEnd: Z,
        step: G,
        min: J
      } = e;
      if (!(P.value || y.value)) {
        var ae = [];
        c[U].currentLeft = c[U].percentValue * b.value, c[U].active = !1;
        var oe = c[U].percentValue * L(G) + L(J);
        X && we(D) && (ae = U === Be.First ? [oe, D[1]] : [D[0], oe]), k(Z, X ? ae : oe), f.value = !1;
      }
    }, S = (U) => {
      if (!(P.value || y.value) && !U.target.closest("." + Nl("thumb"))) {
        var X = U.clientX - Tv(U.currentTarget), D = B(X);
        z(X, D), C(D);
      }
    }, H = () => {
      var U = L(e.step);
      return isNaN(U) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : U < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: U,
        modelValue: X
      } = e;
      return U && !we(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !U && we(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : U && we(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, j = function(U, X) {
      U === void 0 && (U = e.modelValue), X === void 0 && (X = L(e.step));
      var D = (Z) => {
        var {
          min: G,
          max: J
        } = e;
        return Z < L(G) ? 0 : Z > L(J) ? h.value / X : (Z - L(G)) / X;
      };
      e.range && we(U) ? (c[Be.First].percentValue = D(U[0]), c[Be.First].currentLeft = c[Be.First].percentValue * b.value, c[Be.Second].percentValue = D(U[1]), c[Be.Second].currentLeft = c[Be.Second].percentValue * b.value) : xe(U) && (c[Be.First].currentLeft = D(U) * b.value);
    }, E = () => {
      var U = e.range ? [0, 0] : 0;
      k(e["onUpdate:modelValue"], U), l();
    }, F = {
      reset: E,
      validate: i,
      resetValidation: l
    };
    return k(n, F), le([() => e.modelValue, () => e.step], (U) => {
      var [X, D] = U;
      !H() || !Q() || f.value || j(X, L(D));
    }), le(v, () => j()), Ne(() => {
      !H() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: Nl,
      classes: b1,
      Thumbs: Be,
      sliderEl: d,
      getFillStyle: O,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: Qe,
      toNumber: L,
      showLabel: w,
      start: I,
      move: N,
      end: C,
      click: S
    };
  }
});
Nd.render = C1;
const aa = Nd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var XS = aa;
function Jo() {
  return Jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Jo.apply(this, arguments);
}
function S1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function k1(e) {
  return $i.includes(e);
}
var Dd = {
  type: {
    type: String,
    validator: k1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: S1
  },
  // content内容
  content: {
    type: String
  },
  // 为snackbar content添加自定义类名
  contentClass: {
    type: String
  },
  // snackbar 持续时间
  duration: {
    type: Number,
    default: 3e3
  },
  // 是否将消息条内容堆叠在操作（按钮）之上
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: Xe(er, "type"),
  loadingSize: Xe(er, "size"),
  loadingRadius: Xe(er, "radius"),
  loadingColor: Jo({}, Xe(er, "color"), {
    default: "currentColor"
  }),
  // 是否禁止滚动穿透
  lockScroll: {
    type: Boolean,
    default: !1
  },
  // 控制组件可见还是隐藏
  show: {
    type: Boolean,
    default: !1
  },
  // teleport
  teleport: {
    type: String,
    default: "body"
  },
  // 是否禁止点击背景
  forbidClick: {
    type: Boolean,
    default: !1
  },
  // 打开时的回调函数
  onOpen: Y(),
  // 打开动画结束时的回调
  onOpened: Y(),
  // 关闭时的回调函数
  onClose: Y(),
  // 关闭动画结束时的回调
  onClosed: Y(),
  "onUpdate:show": Y(),
  _update: {
    type: String
  }
}, {
  n: $1,
  classes: T1
} = ee("snackbar"), O1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function P1(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return Se((p(), T(
    "div",
    {
      class: m(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [W(e.$slots, "default", {}, () => [be(
          ne(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (p(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (p(), me(
          a,
          {
            key: 1,
            type: e.loadingType,
            size: e.loadingSize,
            color: e.loadingColor,
            radius: e.loadingRadius
          },
          null,
          8,
          ["type", "size", "color", "radius"]
        )) : _("v-if", !0), W(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Ha, e.show]]);
}
var Ad = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: Dd,
  setup(e) {
    var n = V(null), {
      zIndex: r
    } = it(() => e.show, 1);
    Ht(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? O1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && k(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (l) => {
      l ? (k(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), k(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), Ne(() => {
      e.show && (k(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: $i,
      n: $1,
      classes: T1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Ad.render = P1;
const zd = Ad;
var {
  n: E1
} = ee("snackbar");
function V1(e, n) {
  var r = ie("var-snackbar-core");
  return p(), me(
    Fa,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [re(
      Ae,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ve(() => [re(
          r,
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [W(e.$slots, "action")]),
            default: ve(() => [W(e.$slots, "default", {}, () => [be(
              ne(e.content),
              1
              /* TEXT */
            )])]),
            _: 3
            /* FORWARDED */
          },
          16,
          ["class"]
        )]),
        _: 3
        /* FORWARDED */
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
var Ld = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: zd
  },
  props: Dd,
  setup() {
    var {
      disabled: e
    } = ii();
    return {
      n: E1,
      disabled: e
    };
  }
});
Ld.render = V1;
const ta = Ld;
function rt() {
  return rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, rt.apply(this, arguments);
}
function M1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !zt(e);
}
var $i = ["loading", "success", "warning", "info", "error"], Dl = 0, Qo = !1, Rd, Ua = !1, Ud = {
  type: void 0,
  content: "",
  position: "top",
  duration: 3e3,
  vertical: !1,
  contentClass: void 0,
  loadingType: "circle",
  loadingSize: "normal",
  lockScroll: !1,
  teleport: "body",
  forbidClick: !1,
  onOpen: () => {
  },
  onOpened: () => {
  },
  onClose: () => {
  },
  onClosed: () => {
  }
}, yn = Ve([]), Ti = Ud, B1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, I1 = {
  setup() {
    return () => {
      var e = yn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ua && (a.position = "top");
        var l = Ua ? "relative" : "absolute", i = rt({
          position: l
        }, R1(a.position));
        return re(zd, Ee(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(gv, Ee(B1, {
        style: {
          zIndex: dn.zIndex
        },
        onAfterEnter: N1,
        onAfterLeave: D1
      }), M1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, jn = function(e) {
  var n = z1(e), r = Ve(rt({}, Ti, n));
  r.show = !0, Qo || (Qo = !0, Rd = Wa(I1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: Dl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ua)
    A1(t);
  else {
    var o = "update-" + Dl;
    L1(r, o);
  }
  return {
    clear() {
      !Ua && yn.length ? yn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
$i.forEach((e) => {
  jn[e] = (n) => (ri(n) ? n.type = e : n = {
    content: n,
    type: e
  }, jn(n));
});
jn.install = function(e) {
  e.component(ta.name, ta);
};
jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ua && (yn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ua = e);
};
jn.clear = function() {
  yn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
jn.setDefaultOptions = function(e) {
  Ti = e;
};
jn.resetDefaultOptions = function() {
  Ti = Ud;
};
jn.Component = ta;
function N1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === L(n));
  r && k(r.reactiveSnackOptions.onOpened);
}
function D1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, k(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && (k(Rd), yn = Ve([]), Qo = !1);
}
function A1(e) {
  yn.push(e);
}
function z1(e) {
  return e === void 0 && (e = {}), qe(e) ? {
    content: e
  } : e;
}
function L1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = rt({}, r.reactiveSnackOptions, e), r._update = n;
}
function R1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ta.install = function(e) {
  e.component(ta.name, ta);
};
var ZS = ta;
const _o = jn;
var Yd = (e) => ["mini", "small", "normal", "large"].includes(e), U1 = (e) => Yd(e) || we(e) || xe(e) || qe(e), Y1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), F1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), H1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: U1
  },
  wrap: {
    type: Boolean,
    default: !0
  },
  direction: {
    type: String,
    default: "row"
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Y1
  },
  align: {
    type: String,
    validator: F1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function un(e) {
  return "calc(" + e + " / 2)";
}
function j1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = un(e) + " " + n + " " + un(e) + " 0" : i = un(e) + " 0" : t === "space-around" ? i = un(e) + " " + un(n) : t === "space-between" && (o === 0 ? i = un(e) + " " + un(n) + " " + un(e) + " 0" : o === l ? i = un(e) + " 0 " + un(e) + " " + un(n) : i = un(e) + " " + un(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: lo,
  classes: W1
} = ee("space");
const oa = x({
  name: "VarSpace",
  props: H1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (t, o) => o ? ["var(--space-size-" + t + "-y)", "var(--space-size-" + t + "-x)"] : we(t) ? t.map(he) : [he(t), he(t)];
    return () => {
      var t, {
        inline: o,
        justify: l,
        align: i,
        wrap: s,
        direction: u,
        size: d
      } = e, v = (t = k(r.default)) != null ? t : [], f = Yd(d), [c, h] = a(d, f), b = (P) => {
        var y = [];
        return P.forEach((w) => {
          if (w.type !== yv) {
            if (w.type === Pe && we(w.children)) {
              w.children.forEach((M) => {
                y.push(M);
              });
              return;
            }
            y.push(w);
          }
        }), y;
      };
      v = b(v);
      var g = v.length - 1, O = v.map((P, y) => {
        var w = j1(c, h, {
          direction: u,
          justify: l,
          index: y,
          lastIndex: g
        });
        return re("div", {
          style: {
            margin: w
          }
        }, [P]);
      });
      return re("div", {
        class: W1(lo(), lo("$--box"), [o, lo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: Ct(l),
          alignItems: Ct(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + c + " / 2) 0" : void 0
        }
      }, [O]);
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var JS = oa, G1 = {
  activeIcon: {
    type: String,
    default: "check"
  },
  currentIcon: {
    type: String
  },
  inactiveIcon: {
    type: String
  }
}, Fd = Symbol("STEPS_BIND_STEP_KEY"), Hd = Symbol("STEPS_COUNT_STEP_KEY");
function q1() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Fd), {
    length: r
  } = vn(Hd);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function K1() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Fd), {
    index: r
  } = fn(Hd);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: X1,
  classes: Z1
} = ee("step"), J1 = {
  key: 3
};
function Q1(e, n) {
  var r = ie("var-icon");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [A(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: q({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (p(), me(
            r,
            {
              key: 0,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.activeIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.isCurrent && e.currentIcon ? (p(), me(
            r,
            {
              key: 1,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.currentIcon
            },
            null,
            8,
            ["class", "name"]
          )) : e.inactiveIcon ? (p(), me(
            r,
            {
              key: 2,
              class: m(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (p(), T(
            "span",
            J1,
            ne(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), A(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? _("v-if", !0) : (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
          style: q({
            margin: e.lineMargin
          })
        },
        null,
        6
        /* CLASS, STYLE */
      ))],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var jd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: G1,
  setup() {
    var e = V(null), n = V(""), r = V(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = K1(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), c = R(() => a.value !== -1 && l.value > a.value), h = {
      index: a
    }, b = () => v(a.value), g = (O) => {
      d.value === "horizontal" && (e.value = O);
    };
    return o(h), le(i, (O) => {
      if (r.value = O - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: X1,
      classes: Z1,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: b,
      getRef: g
    };
  }
});
jd.render = Q1;
const ia = jd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var QS = ia;
function _1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var x1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: _1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: ew
} = ee("steps");
function nw(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n()),
      style: q({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Wd = x({
  name: "VarSteps",
  props: x1,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = q1(), i = (u) => {
      k(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: ew
    };
  }
});
Wd.render = nw;
const la = Wd;
la.install = function(e) {
  e.component(la.name, la);
};
var _S = la, rw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: aw
} = ee("style-provider"), tw = x({
  name: "VarStyleProvider",
  props: rw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Wl(e.tag, {
      class: aw(),
      style: es(e.styleVars)
    }, k(r.default));
  }
});
const sa = tw;
var so = [];
function at(e) {
  so.forEach((r) => document.documentElement.style.removeProperty(r)), so.length = 0;
  var n = es(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), so.push(a);
  });
}
at.Component = sa;
sa.install = function(e) {
  e.component(sa.name, sa);
};
at.install = function(e) {
  e.component(sa.name, sa);
};
var xS = sa, ow = {
  modelValue: {
    default: !1
  },
  activeValue: {
    default: !0
  },
  inactiveValue: {
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  loading: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  loadingColor: {
    type: String
  },
  closeColor: {
    type: String
  },
  size: {
    type: [String, Number]
  },
  rules: {
    type: Array
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: iw,
  classes: lw
} = ee("switch");
function sw(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: q(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: q(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Se((p(), T(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (p(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : _("v-if", !0)],
          6
          /* CLASS, STYLE */
        )],
        6
        /* CLASS, STYLE */
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
      /* CLASS, STYLE */
    ), re(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
    /* CLASS */
  );
}
var Gd = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: We
  },
  directives: {
    Ripple: ze
  },
  props: ow,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = bn(), i = () => o(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = R(() => {
      var {
        size: h,
        modelValue: b,
        color: g,
        closeColor: O,
        loadingColor: P,
        activeValue: y
      } = e;
      return {
        handle: {
          width: Qe(h),
          height: Qe(h),
          backgroundColor: b === y ? g : O,
          color: P
        },
        ripple: {
          left: b === y ? Qe(h, 0.5) : "-" + Qe(h, 0.5),
          color: b === y ? g : O || "#999",
          width: Qe(h, 2),
          height: Qe(h, 2)
        },
        track: {
          height: Qe(h, 0.72),
          width: Qe(h, 1.9),
          borderRadius: Qe(h, 2 / 3),
          filter: b === y || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: b === y ? g : O
        },
        switch: {
          height: Qe(h, 1.2),
          width: Qe(h, 2)
        }
      };
    }), d = R(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return Qe(h, 0.4);
    }), v = (h) => {
      var {
        onClick: b,
        onChange: g,
        disabled: O,
        loading: P,
        readonly: y,
        modelValue: w,
        activeValue: M,
        inactiveValue: $,
        "onUpdate:modelValue": z
      } = e;
      if (k(b, h), !(O || P || y || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var B = w === M ? $ : M;
        k(g, B), k(z, B), s();
      }
    }, f = () => {
      k(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, c = {
      reset: f,
      validate: i,
      resetValidation: l
    };
    return k(n, c), {
      n: iw,
      classes: lw,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Gd.render = sw;
const ua = Gd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var ek = ua, uw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, qd = Symbol("TABS_BIND_TAB_KEY"), Kd = Symbol("TABS_COUNT_TAB_KEY");
function dw() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(qd), {
    length: r
  } = vn(Kd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function vw() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(qd), {
    index: r
  } = fn(Kd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: pt,
  classes: fw
} = ee("tab");
function cw(e, n) {
  var r = Fe("ripple");
  return Se((p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: q({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var Xd = x({
  name: "VarTab",
  directives: {
    Ripple: ze
  },
  props: uw,
  setup(e) {
    var n = V(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = vw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = l, b = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(b);
    var g = () => {
      var {
        disabled: y,
        name: w
      } = e;
      return y ? f.value : u.value === w || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, O = () => {
      var {
        disabled: y,
        name: w
      } = e;
      return y ? pt("$-tab--disabled") : u.value === w || u.value === (o == null ? void 0 : o.value) ? pt("$-tab--active") : pt("$-tab--inactive");
    }, P = (y) => {
      var {
        disabled: w,
        name: M,
        onClick: $
      } = e;
      w || (k($, M ?? o.value, y), s(b));
    };
    return le(() => e.name, h), le(() => e.disabled, h), {
      n: pt,
      classes: fw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: O,
      handleClick: P
    };
  }
});
Xd.render = cw;
const da = Xd;
da.install = function(e) {
  e.component(da.name, da);
};
var nk = da, Zd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Jd = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function mw() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Zd), {
    length: r
  } = vn(Jd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function pw() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Zd), {
    index: r
  } = fn(Jd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var hw = {
  name: {
    type: [String, Number]
  }
}, {
  n: gw,
  classes: yw
} = ee("tab-item");
function bw(e, n) {
  var r = ie("var-swipe-item");
  return p(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? W(e.$slots, "default", {
        key: 0
      }) : _("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var Qd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Un
  },
  props: hw,
  setup(e) {
    var n = V(!1), r = V(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = pw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: gw,
      classes: yw,
      current: n,
      initSlot: r
    };
  }
});
Qd.render = bw;
const va = Qd;
va.install = function(e) {
  e.component(va.name, va);
};
var rk = va, ww = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Cw,
  classes: Sw
} = ee("table");
function kw(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("main"))
      },
      [A(
        "table",
        {
          class: m(e.n("table")),
          style: q({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [W(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [W(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var _d = x({
  name: "VarTable",
  props: ww,
  setup() {
    return {
      toSizeUnit: he,
      n: Cw,
      classes: Sw
    };
  }
});
_d.render = kw;
const fa = _d;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var ak = fa;
function Al(e) {
  return ["horizontal", "vertical"].includes(e);
}
var $w = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Al
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Al
  },
  fixedBottom: {
    type: Boolean,
    default: !1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  disabledColor: {
    type: String
  },
  color: {
    type: String
  },
  indicatorColor: {
    type: String
  },
  indicatorSize: {
    type: [String, Number]
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  sticky: {
    type: Boolean,
    default: !1
  },
  stickyCssMode: Xe(wt, "cssMode"),
  stickyZIndex: Xe(wt, "zIndex"),
  offsetTop: Xe(wt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
};
function zl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ll(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        zl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        zl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Tw,
  classes: Ow
} = ee("tabs");
function Pw(e, n) {
  return p(), me(
    ja(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [A(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [W(e.$slots, "default"), A(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: q({
                width: e.layoutDirection === "horizontal" ? e.indicatorWidth : e.toSizeUnit(e.indicatorSize),
                height: e.layoutDirection === "horizontal" ? e.toSizeUnit(e.indicatorSize) : e.indicatorHeight,
                transform: e.layoutDirection === "horizontal" ? "translateX(" + e.indicatorX + ")" : "translateY(" + e.indicatorY + ")",
                background: e.indicatorColor || e.activeColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          )],
          2
          /* CLASS */
        )],
        16
        /* FULL_PROPS */
      )]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["css-mode", "offset-top", "z-index"]
  );
}
var xd = x({
  name: "VarTabs",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: $w,
  setup(e) {
    var n = V("0px"), r = V("0px"), a = V("0px"), t = V("0px"), o = V(!1), l = V(null), i = R(() => e.active), s = R(() => e.activeColor), u = R(() => e.inactiveColor), d = R(() => e.disabledColor), v = R(() => e.itemDirection), f = V(null), {
      tabList: c,
      bindTabList: h,
      length: b
    } = dw(), g = (N) => {
      var C, S = (C = N.name.value) != null ? C : N.index.value, {
        active: H,
        onChange: Q,
        onClick: j
      } = e;
      k(e["onUpdate:active"], S), k(j, S), S !== H && k(Q, S);
    }, O = () => c.find((N) => {
      var {
        name: C
      } = N;
      return e.active === C.value;
    }), P = (N) => c.find((C) => {
      var {
        index: S
      } = C;
      return (N ?? e.active) === S.value;
    }), y = () => {
      if (b.value !== 0) {
        var {
          active: N
        } = e;
        if (xe(N)) {
          var C = N > b.value - 1 ? b.value - 1 : 0;
          return k(e["onUpdate:active"], C), P(C);
        }
      }
    }, w = () => {
      o.value = c.length >= 5;
    }, M = (N) => {
      var {
        element: C
      } = N, S = C.value;
      S && (e.layoutDirection === "horizontal" ? (n.value = S.offsetWidth + "px", a.value = S.offsetLeft + "px") : (r.value = S.offsetHeight + "px", t.value = S.offsetTop + "px"));
    }, $ = (N) => {
      var {
        element: C
      } = N;
      if (o.value) {
        var S = l.value, H = C.value;
        if (e.layoutDirection === "horizontal") {
          var Q = H.offsetLeft + H.offsetWidth / 2 - S.offsetWidth / 2;
          Qa(S, {
            left: Q,
            animation: fo
          });
        } else {
          var j = H.offsetTop + H.offsetHeight / 2 - S.offsetHeight / 2;
          Qa(S, {
            top: j,
            animation: fo
          });
        }
      }
    }, z = () => {
      var N = O() || P() || y();
      !N || N.disabled.value || (w(), M(N), $(N));
    }, B = /* @__PURE__ */ function() {
      var N = Ll(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), I = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: z,
      onTabClick: g
    };
    return h(I), le(() => b.value, /* @__PURE__ */ Ll(function* () {
      yield Vn(), z();
    })), le(() => e.active, z), Ne(() => window.addEventListener("resize", z)), Wn(() => window.removeEventListener("resize", z)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: Ae,
      toSizeUnit: he,
      n: Tw,
      classes: Ow,
      resize: z,
      resizeSticky: B
    };
  }
});
xd.render = Pw;
const ca = xd;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var tk = ca, Ew = {
  active: {
    type: [String, Number],
    default: 0
  },
  canSwipe: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !1
  },
  "onUpdate:active": Y()
};
function Rl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vw(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Rl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Rl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Mw
} = ee("tabs-items");
function Bw(e, n) {
  var r = ie("var-swipe");
  return p(), me(
    r,
    {
      class: m(e.n()),
      ref: "swipe",
      loop: e.loop,
      touchable: e.canSwipe,
      indicator: !1,
      onChange: e.handleSwipeChange
    },
    {
      default: ve(() => [W(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var ev = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: Rn
  },
  props: Ew,
  setup(e) {
    var n = V(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = mw(), o = (f) => r.find((c) => {
      var {
        name: h
      } = c;
      return f === h.value;
    }), l = (f) => r.find((c) => {
      var {
        index: h
      } = c;
      return f === h.value;
    }), i = (f) => o(f) || l(f), s = (f) => {
      var c, h = i(f);
      h && (r.forEach((b) => {
        var {
          setCurrent: g
        } = b;
        return g(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((g) => {
        var {
          index: O
        } = g;
        return O.value === f;
      }), b = (c = h.name.value) != null ? c : h.index.value;
      k(e["onUpdate:active"], b);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ Vw(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: Mw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
ev.render = Bw;
const ma = ev;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var ok = ma;
const Iw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Nw = {
  "--badge-default-color": "#555"
}, Dw = {
  "--button-default-color": "#303030"
}, Aw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, zw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Lw = {
  "--checkbox-unchecked-color": "#fff"
}, Rw = {
  "--chip-default-color": "#555"
}, Uw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Yw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Fw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Hw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, jw = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Ww = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Gw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, qw = {
  "--popup-content-background-color": "#1e1e1e"
}, Kw = {
  "--pull-refresh-background": "#303030"
}, Xw = {
  "--radio-unchecked-color": "#fff"
}, Zw = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, Jw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, Qw = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, _w = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, xw = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, eC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, nC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, rC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, aC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, tC = {
  "--tabs-background": "#1e1e1e"
}, oC = {
  "--app-bar-color": "#272727"
}, iC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, lC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, sC = {
  "--menu-background-color": "#272727"
}, uC = {
  "--breadcrumb-inactive-color": "#aaa"
}, dC = {
  "--paper-background": "#303030"
}, vC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function xo() {
  return xo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xo.apply(this, arguments);
}
const fC = xo({
  // common
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, Dw, zw, Aw, rC, Yw, Qw, tC, eC, qw, Fw, Iw, Rw, Nw, aC, Uw, Kw, xw, _w, Ww, nC, jw, Jw, Xw, Lw, Hw, Gw, oC, iC, lC, sC, Zw, uC, dC, vC);
var cC = {
  dark: fC
}, ik = null;
const ei = cC;
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Ul = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function mC(e) {
  return ["ampm", "24hr"].includes(e);
}
var pC = {
  modelValue: {
    type: String
  },
  elevation: {
    type: Boolean,
    default: !1
  },
  color: {
    type: String
  },
  headerColor: {
    type: String
  },
  format: {
    type: String,
    default: "ampm",
    validator: mC
  },
  allowedTime: {
    type: Object
  },
  min: {
    type: String
  },
  max: {
    type: String
  },
  useSeconds: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  "onUpdate:modelValue": Y(),
  onChange: Y()
}, nv = (e, n) => e === "24hr" || n === "am", Oi = (e, n, r) => {
  var a = pn.findIndex((o) => L(o) === L(r)), t = nv(e, n) ? r : _e[a];
  return {
    hourStr: t,
    hourNum: L(t)
  };
}, an = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: L(n),
    minute: L(r),
    second: L(a)
  };
}, rv = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    max: i,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = Oi(t, o, l), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: h,
      minute: b
    } = an(i);
    f = h === v && a > b;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: O
    } = an(s);
    f = g === v && a < O;
  }
  if (i && s) {
    var {
      hour: P,
      minute: y
    } = an(i), {
      hour: w,
      minute: M
    } = an(s);
    f = w === v && a < M || P === v && a > y;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, av = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: l,
    minute: i,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = Oi(t, o, l), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: g,
      second: O
    } = an(s);
    c = b === f && g < i || g === i && a > O;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: y,
      second: w
    } = an(u);
    c = P === f && y > i || y === i && a > w;
  }
  if (s && u) {
    var {
      hour: M,
      minute: $,
      second: z
    } = an(s), {
      hour: B,
      minute: I,
      second: N
    } = an(u);
    c = M === f && $ < i || B === f && I > i || M === f && $ === i && a > z || B === f && I === i && a < N;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: hC,
  classes: gC
} = ee("time-picker");
function yC(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n("clock"))
    },
    [A(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (p(!0), T(
      Pe,
      null,
      Ie(e.timeScales, (r, a) => (p(), T(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: q(e.getStyle(a, r, !1))
        },
        ne(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (p(), T(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.hours24, (r, a) => (p(), T(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: q(e.getStyle(a, r, !0))
          },
          ne(r),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var tv = x({
  name: "Clock",
  props: {
    isInner: {
      type: Boolean,
      required: !0
    },
    rad: {
      type: Number
    },
    format: {
      type: String,
      default: "ampm"
    },
    allowedTime: {
      type: Object
    },
    time: {
      type: Object,
      required: !0
    },
    useSeconds: {
      type: Boolean,
      default: !1
    },
    preventNextUpdate: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "hour"
    },
    ampm: {
      type: String,
      default: "am"
    },
    color: {
      type: String
    },
    min: {
      type: String
    },
    max: {
      type: String
    }
  },
  emits: ["update", "change-prevent-update"],
  setup(e, n) {
    var {
      emit: r
    } = n, a = V(null), t = V([]), o = V([]), l = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? pn : Ul), u = (g, O) => {
      var P;
      g = (P = g) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var y = e.type === "minute" ? rv : av, w = {
        time: L(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: L(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return O && e.type === "minute" && Reflect.deleteProperty(w, "minute"), y(w);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? _e[i.value] : s.value[i.value];
      return s.value === Ul ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, O) => O ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (nv(e.format, e.ampm))
          return t.value.includes(g);
        var O = pn.findIndex((P) => P === g);
        return o.value.includes(O);
      }
      return u(g, !0);
    }, c = (g, O, P) => {
      var y = 2 * Math.PI / 12 * g - Math.PI / 2, w = 50 * (1 + Math.cos(y)), M = 50 * (1 + Math.sin(y)), $ = () => v(g, P) ? f(O) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: z,
        color: B
      } = $();
      return {
        left: w + "%",
        top: M + "%",
        backgroundColor: z,
        color: B
      };
    }, h = () => {
      var {
        width: g,
        height: O
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: O
      };
    }, b = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? pn : _e;
        return ga(g[i.value], 2, "0");
      }
    };
    return le([i, () => e.isInner], (g, O) => {
      var [P, y] = g, [w, M] = O, $ = P === w && y === M;
      if (!($ || e.type !== "hour" || i.value === void 0)) {
        var z = y ? _e[i.value] : b(), B = e.useSeconds ? ":" + e.time.second : "", I = z + ":" + e.time.minute + B;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), le(() => e.rad, (g, O) => {
      if (!(e.type === "hour" || g === void 0 || O === void 0)) {
        var P = g / 6 >= 0 ? g / 6 : g / 6 + 60, y = O / 6 >= 0 ? O / 6 : O / 6 + 60;
        if (P !== y) {
          var w, {
            hourStr: M
          } = Oi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var $ = te().minute(P).format("mm"), z = e.useSeconds ? ":" + e.time.second : "";
            w = M + ":" + $ + z;
          }
          if (e.type === "second") {
            var B = te().second(P).format("ss"), I = e.useSeconds ? ":" + B : "";
            w = M + ":" + e.time.minute + I;
          }
          r("update", w);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [O, P, y] = g;
      if (t.value = [], O && !P) {
        var {
          hour: w
        } = an(O), M = pn.filter((F) => L(F) > w), $ = _e.filter((F) => L(F) > w);
        t.value = [...M, ...$];
      }
      if (!O && P) {
        var {
          hour: z
        } = an(P), B = pn.filter((F) => L(F) < z), I = _e.filter((F) => L(F) < z);
        t.value = [...B, ...I];
      }
      if (O && P) {
        var {
          hour: N
        } = an(O), {
          hour: C
        } = an(P), S = pn.filter((F) => L(F) < C || L(F) > N), H = _e.filter((F) => L(F) < C || L(F) > N);
        t.value = [...S, ...H];
      }
      if (y != null && y.hours) {
        var {
          hours: Q
        } = y, j = pn.filter((F) => !Q(L(F))), E = _e.filter((F) => !Q(L(F)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...j, ...E])];
      }
      o.value = t.value.map((F) => _e.findIndex((U) => F === U)).filter((F) => F >= 0);
    }, {
      immediate: !0
    }), {
      n: hC,
      classes: gC,
      hours24: _e,
      timeScales: s,
      inner: a,
      handStyle: l,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: h,
      getStyle: c,
      activeItemIndex: i
    };
  }
});
tv.render = yC;
const bC = tv;
var {
  n: wC,
  classes: CC
} = ee("time-picker"), SC = (e) => (ka(""), e = e(), $a(), e), kC = /* @__PURE__ */ SC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), $C = {
  key: 0
};
function TC(e, n) {
  var r = ie("clock");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), kC, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), T("span", $C, ":")) : _("v-if", !0), e.useSeconds ? (p(), T(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (p(), T(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: m(e.n("body"))
      },
      [A(
        "div",
        {
          class: m(e.n("clock-container")),
          onTouchstart: n[5] || (n[5] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchmove: n[6] || (n[6] = function() {
            return e.moveHand && e.moveHand(...arguments);
          }),
          onTouchend: n[7] || (n[7] = function() {
            return e.end && e.end(...arguments);
          }),
          ref: "container"
        },
        [re(
          Ae,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(p(), me(
              r,
              {
                key: e.type,
                ref: "inner",
                type: e.type,
                ampm: e.ampm,
                color: e.color,
                "is-inner": e.isInner,
                format: e.format,
                "allowed-time": e.allowedTime,
                rad: e.getRad,
                time: e.time,
                "prevent-next-update": e.isPreventNextUpdate,
                "use-seconds": e.useSeconds,
                max: e.max,
                min: e.min,
                onUpdate: e.update,
                onChangePreventUpdate: e.changePreventUpdate
              },
              null,
              8,
              ["type", "ampm", "color", "is-inner", "format", "allowed-time", "rad", "time", "prevent-next-update", "use-seconds", "max", "min", "onUpdate", "onChangePreventUpdate"]
            ))]),
            _: 1
            /* STABLE */
          },
          8,
          ["name"]
        )],
        34
        /* CLASS, HYDRATE_EVENTS */
      )],
      2
      /* CLASS */
    )],
    2
    /* CLASS */
  );
}
var ov = x({
  name: "VarTimePicker",
  components: {
    Clock: bC
  },
  props: pC,
  setup(e) {
    var n = V(null), r = V(null), a = V(null), t = V(!1), o = V(!1), l = V(!1), i = V(!1), s = V(!1), u = V(void 0), d = V(0), v = V(0), f = V("hour"), c = V("am"), h = V(!1), b = V(!1), g = V({
      hour: "00",
      minute: "00",
      second: "00"
    }), O = Ve({
      x: 0,
      y: 0
    }), P = Ve({
      x: [],
      y: []
    }), y = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), w = (D) => {
      k(e["onUpdate:modelValue"], D), k(e.onChange, D);
    }, M = (D) => D * 57.29577951308232, $ = (D) => {
      i.value = !1, b.value = !1, f.value = D;
    }, z = (D) => {
      var {
        disableHour: Z
      } = a.value, G = pn.findIndex((oe) => L(oe) === L(g.value.hour)), J = D === "am" ? pn : _e, ae = [...J.slice(G), ...J.slice(0, G)];
      return ae.find((oe, ge) => (o.value = ge !== 0, !Z.includes(oe)));
    }, B = (D) => {
      if (!e.readonly) {
        c.value = D;
        var Z = z(D);
        if (Z) {
          var G = e.useSeconds ? ":" + g.value.second : "", J = ga(Z, 2, "0") + ":" + g.value.minute + G;
          w(J);
        }
      }
    }, I = (D, Z) => {
      var G = D >= P.x[0] && D <= P.x[1], J = Z >= P.y[0] && Z <= P.y[1];
      return G && J;
    }, N = (D) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: G,
        minute: J,
        second: ae
      } = an(D);
      return {
        hour: te().hour(G).format(Z),
        minute: te().minute(J).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, C = (D) => {
      var Z = D / 30;
      return Z >= 0 ? Z : Z + 12;
    }, S = () => {
      var {
        width: D,
        height: Z
      } = a.value.getSize(), G = O.x - D / 2 - 8, J = O.x + D / 2 + 8, ae = O.y - Z / 2 - 8, oe = O.y + Z / 2 + 8;
      return {
        rangeXMin: G,
        rangeXMax: J,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, H = (D, Z, G) => {
      var {
        disableHour: J
      } = a.value;
      l.value = I(D, Z);
      var ae = Math.round(G / 30) * 30 + 90, oe = C(ae), ge = t.value ? pn[oe] : _e[oe];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? I(D, Z) : !1), t.value === l.value) {
        var pe = t.value || c.value === "pm" ? _e[oe] : pn[oe];
        h.value = J.includes(pe), !h.value && (u.value = ae, i.value = !0);
      }
    }, Q = (D) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(D / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      b.value = rv(ae), !b.value && (d.value = G, s.value = !0);
    }, j = (D) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(D / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        minute: L(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      av(ae) || (v.value = G);
    }, E = () => {
      var {
        left: D,
        top: Z,
        width: G,
        height: J
      } = n.value.getBoundingClientRect();
      if (O.x = D + G / 2, O.y = Z + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: ge,
          rangeYMax: pe
        } = S();
        P.x = [ae, oe], P.y = [ge, pe];
      }
    }, F = (D) => {
      if (D.preventDefault(), !e.readonly) {
        E();
        var {
          clientX: Z,
          clientY: G
        } = D.touches[0], J = Z - O.x, ae = G - O.y, oe = Math.round(M(Math.atan2(ae, J)));
        f.value === "hour" ? H(Z, G, oe) : f.value === "minute" ? Q(oe) : j(oe);
      }
    }, U = () => {
      if (!e.readonly) {
        if (f.value === "hour" && i.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, X = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (D) => {
      if (D) {
        var {
          hour: Z,
          minute: G,
          second: J
        } = an(D), ae = te().hour(Z).format("hh"), oe = te().hour(Z).format("HH"), ge = te().minute(G).format("mm"), pe = te().second(J).format("ss");
        u.value = (ae === "12" ? 0 : L(ae)) * 30, d.value = L(ge) * 6, v.value = L(pe) * 6, g.value = N(D), e.format !== "24hr" && (c.value = ga("" + Z, 2, "0") === oe && _e.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: wC,
      classes: CC,
      getRad: y,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: F,
      checkPanel: $,
      checkAmpm: B,
      end: U,
      update: w,
      changePreventUpdate: X
    };
  }
});
ov.render = TC;
const pa = ov;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var lk = pa, OC = {
  modelValue: {
    type: Array,
    default: () => []
  },
  accept: {
    type: String,
    default: "image/*"
  },
  capture: {
    type: [String, Boolean],
    default: void 0
  },
  multiple: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  removable: {
    type: Boolean,
    default: !0
  },
  maxlength: {
    type: [Number, String]
  },
  maxsize: {
    type: [Number, String]
  },
  previewed: {
    type: Boolean,
    default: !0
  },
  ripple: {
    type: Boolean,
    default: !0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onRemove"]
  },
  rules: {
    type: Array
  },
  hideList: {
    type: Boolean,
    default: !1
  },
  onBeforeRead: Y(),
  onAfterRead: Y(),
  onBeforeRemove: Y(),
  onRemove: Y(),
  onOversize: Y(),
  "onUpdate:modelValue": Y()
};
function Yl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Fl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Yl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Yl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: PC,
  classes: EC
} = ee("uploader"), VC = 0, MC = ["onClick"], BC = ["onClick"], IC = ["src", "alt"], NC = ["multiple", "accept", "capture", "disabled"], DC = ["src"];
function AC(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), o = Fe("ripple");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(p(!0), T(
        Pe,
        null,
        Ie(e.files, (l) => Se((p(), T(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [l.state === "loading", e.n("--loading")])),
            key: l.id,
            onClick: (i) => e.preview(l)
          },
          [A(
            "div",
            {
              class: m(e.n("file-name"))
            },
            ne(l.name || l.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (p(), T(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: En((i) => e.handleRemove(l), ["stop"])
            },
            [re(
              r,
              {
                class: m(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            BC
          )) : _("v-if", !0), l.cover ? (p(), T(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: q({
                objectFit: l.fit
              }),
              src: l.cover,
              alt: l.name
            },
            null,
            14,
            IC
          )) : _("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [l.state === "success", e.n("--success")], [l.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          MC
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Se((p(), T(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [A(
          "input",
          {
            ref: "input",
            type: "file",
            class: m(e.n("action-input")),
            multiple: e.multiple,
            accept: e.accept,
            capture: e.capture,
            disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly,
            onChange: n[0] || (n[0] = function() {
              return e.handleChange && e.handleChange(...arguments);
            })
          },
          null,
          42,
          NC
        ), W(e.$slots, "default", {}, () => [re(
          r,
          {
            class: m(e.n("action-icon")),
            "var-uploader-cover": "",
            name: "plus"
          },
          null,
          8,
          ["class"]
        )])],
        2
        /* CLASS */
      )), [[o, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : _("v-if", !0)],
      2
      /* CLASS */
    ), re(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), re(
      t,
      {
        class: m(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (l) => e.showPreview = l),
        onClosed: n[3] || (n[3] = (l) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var l, i;
          return [e.currentPreview && e.isHTMLSupportVideo((l = e.currentPreview) == null ? void 0 : l.url) ? (p(), T(
            "video",
            {
              key: 0,
              class: m(e.n("preview-video")),
              playsinline: "true",
              "webkit-playsinline": "true",
              "x5-playsinline": "true",
              "x5-video-player-type": "h5",
              "x5-video-player-fullscreen": "false",
              controls: "",
              src: (i = e.currentPreview) == null ? void 0 : i.url
            },
            null,
            10,
            DC
          )) : _("v-if", !0)];
        }),
        _: 1
        /* STABLE */
      },
      8,
      ["class", "show"]
    )],
    2
    /* CLASS */
  );
}
var iv = x({
  name: "VarUploader",
  directives: {
    Ripple: ze
  },
  components: {
    VarIcon: $e,
    VarPopup: hn,
    VarFormDetails: We
  },
  props: OC,
  setup(e) {
    var n = V(null), r = V(!1), a = V(null), t = R(() => {
      var {
        maxlength: j,
        modelValue: {
          length: E
        }
      } = e;
      return xe(j) ? E + " / " + j : "";
    }), {
      form: o,
      bindForm: l
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = R(() => {
      var {
        modelValue: j,
        hideList: E
      } = e;
      return E ? [] : j;
    }), f = (j) => {
      var {
        disabled: E,
        readonly: F,
        previewed: U
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || E || F || !U)) {
        var {
          url: X
        } = j;
        if (qe(X) && Ii(X)) {
          Hn(X);
          return;
        }
        qe(X) && Ni(X) && (a.value = j, r.value = !0);
      }
    }, c = (j) => ({
      id: VC++,
      url: "",
      cover: "",
      name: j.name,
      file: j
    }), h = (j) => {
      var E = j.target, {
        files: F
      } = E;
      return Array.from(F);
    }, b = (j) => new Promise((E) => {
      var F = new FileReader();
      F.onload = () => {
        var U = F.result;
        j.file.type.startsWith("image") && (j.cover = U), j.url = U, E(j);
      }, F.readAsDataURL(j.file);
    }), g = (j) => j.map(b), O = (j) => {
      var {
        onBeforeRead: E
      } = e;
      return j.map((F) => new Promise((U) => {
        E || U({
          valid: !0,
          varFile: F
        });
        var X = k(E, Ve(F));
        X = we(X) ? X : [X], Promise.all(X).then((D) => {
          U({
            valid: !D.some((Z) => !Z),
            varFile: F
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var j = Fl(function* (E) {
        var {
          maxsize: F,
          maxlength: U,
          modelValue: X,
          onOversize: D,
          onAfterRead: Z,
          readonly: G,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          var ae = (Le) => Le.filter((cn) => cn.file.size > L(F) ? (k(D, Ve(cn)), !1) : !0), oe = (Le) => {
            var cn = Math.min(Le.length, L(U) - X.length);
            return Le.slice(0, cn);
          }, ge = h(E), pe = ge.map(c);
          pe = F != null ? ae(pe) : pe, pe = U != null ? oe(pe) : pe;
          var He = yield Promise.all(g(pe)), nn = yield Promise.all(O(He)), sn = nn.filter((Le) => {
            var {
              valid: cn
            } = Le;
            return cn;
          }).map((Le) => {
            var {
              varFile: cn
            } = Le;
            return cn;
          });
          k(e["onUpdate:modelValue"], [...X, ...sn]), E.target.value = "", sn.forEach((Le) => k(Z, Ve(Le)));
        }
      });
      return function(F) {
        return j.apply(this, arguments);
      };
    }(), y = /* @__PURE__ */ function() {
      var j = Fl(function* (E) {
        var {
          disabled: F,
          readonly: U,
          modelValue: X,
          onBeforeRemove: D,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || F || U)) {
          if (D) {
            var G = k(D, Ve(E));
            if (G = we(G) ? G : [G], (yield Promise.all(G)).some((ae) => !ae))
              return;
          }
          var J = X.filter((ae) => ae !== E);
          k(Z, Ve(E)), N("onRemove"), k(e["onUpdate:modelValue"], J);
        }
      });
      return function(F) {
        return j.apply(this, arguments);
      };
    }(), w = () => e.modelValue.filter((j) => j.state === "success"), M = () => e.modelValue.filter((j) => j.state === "error"), $ = () => e.modelValue.filter((j) => j.state === "loading"), z = () => {
      n.value.click();
    }, B = () => {
      a.value = null, r.value = !1, Hn.close();
    }, I = {
      getSuccess: w,
      getError: M,
      getLoading: $
    }, N = (j) => {
      Me(() => {
        var {
          validateTrigger: E,
          rules: F,
          modelValue: U
        } = e;
        s(E, j, F, U, I);
      });
    }, C = !1, S = () => u(e.rules, e.modelValue, I), H = () => {
      C = !0, k(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: S,
      resetValidation: d,
      reset: H
    };
    return k(l, Q), le(() => e.modelValue, () => {
      !C && N("onChange"), C = !1;
    }, {
      deep: !0
    }), {
      n: PC,
      classes: EC,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      isHTMLSupportVideo: Ni,
      isHTMLSupportImage: Ii,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: y,
      getSuccess: w,
      getError: M,
      getLoading: $,
      validate: S,
      resetValidation: d,
      reset: H,
      chooseFile: z,
      closePreview: B
    };
  }
});
iv.render = AC;
const ha = iv;
ha.install = function(e) {
  e.component(ha.name, ha);
};
var sk = ha;
const zC = "2.8.5";
function LC(e) {
  ya.install && e.use(ya), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), tr.install && e.use(tr), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Or.install && e.use(Or), en.install && e.use(en), Pr.install && e.use(Pr), Er.install && e.use(Er), or.install && e.use(or), ir.install && e.use(ir), Vr.install && e.use(Vr), lr.install && e.use(lr), Mr.install && e.use(Mr), Br.install && e.use(Br), Ir.install && e.use(Ir), dn.install && e.use(dn), Nr.install && e.use(Nr), Dr.install && e.use(Dr), zr.install && e.use(zr), ba.install && e.use(ba), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ln.install && e.use(Ln), We.install && e.use(We), qo.install && e.use(qo), $e.install && e.use($e), Ur.install && e.use(Ur), Hn.install && e.use(Hn), Yr.install && e.use(Yr), Fr.install && e.use(Fr), fr.install && e.use(fr), _a.install && e.use(_a), Hr.install && e.use(Hr), jr.install && e.use(jr), $n.install && e.use($n), Xo.install && e.use(Xo), yo.install && e.use(yo), Fn.install && e.use(Fn), Wr.install && e.use(Wr), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Sa.install && e.use(Sa), hn.install && e.use(hn), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), ze.install && e.use(ze), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), _o.install && e.use(_o), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), Yn.install && e.use(Yn), at.install && e.use(at), Rn.install && e.use(Rn), Un.install && e.use(Un), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), ei.install && e.use(ei), pa.install && e.use(pa), dr.install && e.use(dr), ha.install && e.use(ha);
}
const uk = {
  version: zC,
  install: LC,
  ActionSheet: ya,
  AppBar: br,
  Avatar: wr,
  AvatarGroup: Cr,
  BackTop: Sr,
  Badge: tr,
  BottomNavigation: kr,
  BottomNavigationItem: $r,
  Breadcrumb: Tr,
  Breadcrumbs: Or,
  Button: en,
  ButtonGroup: Pr,
  Card: Er,
  Cell: or,
  Checkbox: ir,
  CheckboxGroup: Vr,
  Chip: lr,
  Col: Mr,
  Collapse: Br,
  CollapseItem: Ir,
  Context: dn,
  Countdown: Nr,
  Counter: Dr,
  DatePicker: zr,
  Dialog: ba,
  Divider: Lr,
  Ellipsis: Rr,
  Form: Ln,
  FormDetails: We,
  Hover: qo,
  Icon: $e,
  Image: Ur,
  ImagePreview: Hn,
  IndexAnchor: Yr,
  IndexBar: Fr,
  Input: fr,
  Lazy: _a,
  Link: Hr,
  List: jr,
  Loading: $n,
  LoadingBar: Xo,
  Locale: yo,
  Menu: Fn,
  Option: Wr,
  Overlay: Gr,
  Pagination: qr,
  Paper: Kr,
  Picker: Sa,
  Popup: hn,
  Progress: Xr,
  PullRefresh: Zr,
  Radio: Jr,
  RadioGroup: Qr,
  Rate: _r,
  Result: xr,
  Ripple: ze,
  Row: ea,
  Select: na,
  Skeleton: ra,
  Slider: aa,
  Snackbar: _o,
  Space: oa,
  Step: ia,
  Steps: la,
  Sticky: Yn,
  StyleProvider: at,
  Swipe: Rn,
  SwipeItem: Un,
  Switch: ua,
  Tab: da,
  TabItem: va,
  Table: fa,
  Tabs: ca,
  TabsItems: ma,
  Themes: ei,
  TimePicker: pa,
  Tooltip: dr,
  Uploader: ha
};
export {
  ya as ActionSheet,
  br as AppBar,
  wr as Avatar,
  Cr as AvatarGroup,
  Sr as BackTop,
  tr as Badge,
  kr as BottomNavigation,
  $r as BottomNavigationItem,
  Tr as Breadcrumb,
  Or as Breadcrumbs,
  en as Button,
  Pr as ButtonGroup,
  Er as Card,
  or as Cell,
  ir as Checkbox,
  Vr as CheckboxGroup,
  lr as Chip,
  Mr as Col,
  Br as Collapse,
  Ir as CollapseItem,
  dn as Context,
  Nr as Countdown,
  Dr as Counter,
  zr as DatePicker,
  ba as Dialog,
  Lr as Divider,
  Rr as Ellipsis,
  Ln as Form,
  We as FormDetails,
  qo as Hover,
  $e as Icon,
  Ur as Image,
  Hn as ImagePreview,
  Yr as IndexAnchor,
  Fr as IndexBar,
  fr as Input,
  _a as Lazy,
  Hr as Link,
  jr as List,
  $n as Loading,
  Xo as LoadingBar,
  yo as Locale,
  Fn as Menu,
  Wr as Option,
  Gr as Overlay,
  Co as PIXEL,
  qr as Pagination,
  Kr as Paper,
  Sa as Picker,
  hn as Popup,
  Xr as Progress,
  Zr as PullRefresh,
  Jr as Radio,
  Qr as RadioGroup,
  _r as Rate,
  xr as Result,
  ze as Ripple,
  ea as Row,
  $i as SNACKBAR_TYPE,
  na as Select,
  ra as Skeleton,
  aa as Slider,
  _o as Snackbar,
  oa as Space,
  ia as Step,
  la as Steps,
  Yn as Sticky,
  at as StyleProvider,
  Rn as Swipe,
  Un as SwipeItem,
  ua as Switch,
  da as Tab,
  va as TabItem,
  fa as Table,
  ca as Tabs,
  ma as TabsItems,
  ei as Themes,
  pa as TimePicker,
  dr as Tooltip,
  ha as Uploader,
  WC as _ActionSheetComponent,
  GC as _AppBarComponent,
  KC as _AvatarComponent,
  XC as _AvatarGroupComponent,
  QC as _BackTopComponent,
  _C as _BadgeComponent,
  xC as _BottomNavigationComponent,
  eS as _BottomNavigationItemComponent,
  nS as _BreadcrumbComponent,
  rS as _BreadcrumbsComponent,
  JC as _ButtonComponent,
  aS as _ButtonGroupComponent,
  tS as _CardComponent,
  oS as _CellComponent,
  lS as _CheckboxComponent,
  sS as _CheckboxGroupComponent,
  uS as _ChipComponent,
  dS as _ColComponent,
  vS as _CollapseComponent,
  fS as _CollapseItemComponent,
  UC as _ContextComponent,
  cS as _CountdownComponent,
  mS as _CounterComponent,
  pS as _DatePickerComponent,
  hS as _DialogComponent,
  gS as _DividerComponent,
  bS as _EllipsisComponent,
  wS as _FormComponent,
  iS as _FormDetailsComponent,
  CS as _HoverComponent,
  HC as _IconComponent,
  SS as _ImageComponent,
  TS as _ImagePreviewComponent,
  PS as _IndexAnchorComponent,
  ES as _IndexBarComponent,
  VS as _InputComponent,
  qC as _LazyComponent,
  MS as _LinkComponent,
  BS as _ListComponent,
  IS as _LoadingBarComponent,
  ZC as _LoadingComponent,
  jC as _LocaleComponent,
  NS as _MenuComponent,
  DS as _OptionComponent,
  AS as _OverlayComponent,
  zS as _PaginationComponent,
  LS as _PaperComponent,
  RS as _PickerComponent,
  FC as _PopupComponent,
  US as _ProgressComponent,
  YS as _PullRefreshComponent,
  FS as _RadioComponent,
  HS as _RadioGroupComponent,
  jS as _RateComponent,
  WS as _ResultComponent,
  YC as _RippleComponent,
  GS as _RowComponent,
  qS as _SelectComponent,
  KS as _SkeletonComponent,
  XS as _SliderComponent,
  ZS as _SnackbarComponent,
  JS as _SpaceComponent,
  QS as _StepComponent,
  _S as _StepsComponent,
  OS as _StickyComponent,
  xS as _StyleProviderComponent,
  kS as _SwipeComponent,
  $S as _SwipeItemComponent,
  ek as _SwitchComponent,
  nk as _TabComponent,
  rk as _TabItemComponent,
  ak as _TableComponent,
  tk as _TabsComponent,
  ok as _TabsItemsComponent,
  ik as _ThemesComponent,
  lk as _TimePickerComponent,
  yS as _TooltipComponent,
  sk as _UploaderComponent,
  Qv as actionSheetProps,
  ui as add,
  sf as appBarProps,
  Nf as avatarGroupProps,
  Pf as avatarProps,
  nc as backTopProps,
  lc as badgeProps,
  gc as bottomNavigationItemProps,
  vc as bottomNavigationProps,
  kc as breadcrumbProps,
  Vc as breadcrumbsProps,
  Xf as buttonProps,
  Yc as cardProps,
  qc as cellProps,
  um as checkboxGroupProps,
  nm as checkboxProps,
  pm as chipProps,
  Cm as colProps,
  Bm as collapseItemProps,
  Pm as collapseProps,
  Am as countdownProps,
  Bp as counterProps,
  _p as datePickerProps,
  uk as default,
  Ue as defaultLazyOptions,
  ph as dialogProps,
  kh as dividerProps,
  us as enUS,
  Jc as formDetailsProps,
  Xg as formProps,
  ls as iconProps,
  ms as imageCache,
  Sy as imagePreviewProps,
  oy as imageProps,
  Iy as indexAnchorProps,
  zy as indexBarProps,
  Hy as inputProps,
  LC as install,
  Jy as linkProps,
  eb as listProps,
  ob as loadingBarProps,
  er as loadingProps,
  gb as menuProps,
  vs as merge,
  kb as optionProps,
  Pb as overlayProps,
  je as pack,
  ds as packs,
  Vb as paginationProps,
  Db as paperProps,
  Rb as pickerProps,
  ot as popupProps,
  qb as progressProps,
  xb as pullRefreshProps,
  d0 as radioGroupProps,
  a0 as radioProps,
  m0 as rateProps,
  y0 as resultProps,
  t1 as rowProps,
  u1 as selectProps,
  c1 as skeletonProps,
  y1 as sliderProps,
  Dd as snackbarProps,
  H1 as spaceProps,
  G1 as stepProps,
  x1 as stepsProps,
  wt as stickyProps,
  rw as styleProviderProps,
  Xu as swipeProps,
  ow as switchProps,
  hw as tabItemProps,
  uw as tabProps,
  ww as tableProps,
  Ew as tabsItemsProps,
  $w as tabsProps,
  pC as timePickerProps,
  Lg as tooltipProps,
  OC as uploaderProps,
  di as use,
  si as useLocale,
  zC as version,
  li as zhCN
};
