import { reactive as Me, onMounted as zt, nextTick as Ve, onActivated as Lt, isRef as mv, watch as ie, onBeforeUnmount as Rt, onDeactivated as ka, unref as fo, ref as M, createApp as pv, getCurrentInstance as Fa, provide as Wl, computed as R, inject as Gl, onUnmounted as Ha, h as ql, isVNode as Ut, onBeforeMount as hv, defineComponent as x, createVNode as re, Teleport as ja, Transition as De, withDirectives as Se, vShow as Wa, mergeProps as Ee, openBlock as p, createBlock as me, resolveDynamicComponent as Ga, normalizeClass as m, normalizeStyle as q, resolveComponent as le, resolveDirective as Ye, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as ne, createElementBlock as T, Fragment as Pe, renderList as Ie, createCommentVNode as _, onUpdated as Yt, createTextVNode as be, pushScopeId as $a, popScopeId as Ta, withModifiers as Vn, normalizeProps as ai, guardReactiveProps as Kl, vModelText as gv, toRefs as yv, withKeys as Bi, toRaw as Ii, TransitionGroup as bv, Comment as wv } from "vue";
var Xl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, YC = Me(Xl);
const dn = Me(Xl), Ge = (e) => typeof e == "string", co = (e) => typeof e == "boolean", _e = (e) => typeof e == "number", ti = (e) => Object.prototype.toString.call(e) === "[object Object]", Cv = (e) => typeof e == "object" && e !== null, oi = (e) => typeof e == "function", we = (e) => Array.isArray(e), Sv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, L = (e) => e == null ? 0 : Ge(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : co(e) ? Number(e) : e, Ft = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, ii = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const l = Date.now(), i = l - a;
    a || (a = l), r && window.clearTimeout(r), i >= n ? (e.apply(this, o), a = l) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - i);
  };
}, it = () => typeof window < "u", Ni = (e) => [...new Set(e)], Zl = (e) => e.replace(/-(\w)/g, (n, r) => r.toUpperCase()), kv = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), $v = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Di = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ai = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Tv = (e) => {
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
      this.has(r) && Ft(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, mo = (e) => e, zi = (e) => Math.pow(e, 3), Jl = (e) => e < 0.5 ? zi(e * 2) / 2 : 1 - zi((1 - e) * 2) / 2, Ht = (e, n) => e ?? n, Ql = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ha = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Li(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ov(e) {
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
function Pv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Ri(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function jt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function li(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Vv(e) {
  return po.apply(this, arguments);
}
function po() {
  return po = Ov(function* (e) {
    yield En();
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
  }), po.apply(this, arguments);
}
function to(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Oa(e) {
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
function Ev(e) {
  for (var n = [], r = e; r !== window; )
    r = Oa(r), n.push(r);
  return n;
}
function _l(e, n) {
  if (Ge(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Cv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var xl = (e) => Ge(e) && e.endsWith("rem"), Mv = (e) => Ge(e) && e.endsWith("px") || _e(e), Bv = (e) => Ge(e) && e.endsWith("%"), es = (e) => Ge(e) && e.endsWith("vw"), ns = (e) => Ge(e) && e.endsWith("vh"), Iv = (e) => Ge(e) && e.startsWith("calc("), Nv = (e) => Ge(e) && e.startsWith("var("), Ne = (e) => {
  if (_e(e))
    return e;
  if (Mv(e))
    return +e.replace("px", "");
  if (es(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ns(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (xl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ge(e) ? L(e) : 0;
}, he = (e) => {
  if (e != null)
    return Bv(e) || es(e) || ns(e) || xl(e) || Iv(e) || Nv(e) ? e : Ne(e) + "px";
}, Je = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function On(e) {
  var n = Ql();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Dv(e) {
  var n = Ql();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Wt(e) {
  On(() => {
    On(e);
  });
}
function En() {
  return new Promise((e) => {
    On(() => {
      On(e);
    });
  });
}
function Av() {
  return new Promise((e) => {
    On(e);
  });
}
function xa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, l = Date.now(), i = jt(e), s = li(e);
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
function rs(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + kv(a);
    return n[o] = t, n;
  }, {});
}
function zv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
function $t(e) {
  return e === "start" || e === "end" ? "flex-" + e : e;
}
function en(e) {
  let n = !1;
  zt(() => {
    e(), Ve(() => {
      n = !0;
    });
  }), Lt(() => {
    n && e();
  });
}
function ga(e, n, r, a = {}) {
  if (!it())
    return;
  const { passive: t = !1, capture: o = !1 } = a;
  let l = !1, i = !1;
  const s = (f) => {
    if (l || i)
      return;
    const c = fo(f);
    c && (c.addEventListener(n, r, {
      passive: t,
      capture: o
    }), l = !0);
  }, u = (f) => {
    if (!l || i)
      return;
    const c = fo(f);
    c && (c.removeEventListener(n, r, {
      capture: o
    }), l = !1);
  };
  let d;
  mv(e) && (d = ie(() => e.value, (f, c) => {
    u(c), s(f);
  }));
  const v = () => {
    d == null || d(), u(e), i = !0;
  };
  return en(() => {
    s(e);
  }), Rt(() => {
    u(e);
  }), ka(() => {
    u(e);
  }), v;
}
function Lv(e, n, r) {
  if (!it())
    return;
  ga(document, n, (t) => {
    const o = fo(e);
    o && !o.contains(t.target) && r(t);
  });
}
var Rv = ["collect", "clear"];
function Ui(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ui(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ui(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function Uv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function Tt() {
  return Tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Tt.apply(this, arguments);
}
function Ke(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Yv(e) {
  var n = pv(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function qa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => ql(e, Tt({}, n, r));
    }
  }, {
    unmount: t
  } = Yv(a);
  return {
    unmountInstance: t
  };
}
function Fv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Ut(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function vn(e) {
  var n = Me([]), r = Fa(), a = () => {
    var i = Fv(r.subTree);
    n.sort((s, u) => i.indexOf(s.vnode) - i.indexOf(u.vnode));
  }, t = (i) => {
    n.push(i), a();
  }, o = (i) => {
    Ft(n, i);
  };
  Wl(e, {
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
  if (!as(e))
    return {
      index: null
    };
  var n = Gl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Fa();
  zt(() => {
    Ve().then(() => r(o));
  }), Ha(() => {
    Ve().then(() => a(o));
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
    Ft(n, o);
  }, t = (o) => {
    Wl(e, Tt({
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
  if (!as(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Gl(e), {
    collect: r,
    clear: a
  } = n, t = Uv(n, Rv), o = (l) => {
    zt(() => r(l)), Rt(() => a(l));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function as(e) {
  var n = Fa();
  return e in n.provides;
}
function bn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = Yi(function* (o, l, i) {
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
    var t = Yi(function* (o, l, i, s, u) {
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
function Hv(e) {
  ga(window, "hashchange", e), ga(window, "popstate", e);
}
function si() {
  var e = M(!1);
  return Lt(() => {
    e.value = !1;
  }), ka(() => {
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
function $(e) {
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
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ot.apply(this, arguments);
}
var {
  n: ts
} = ee("ripple"), Fi = 250;
function jv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Wv(e, n) {
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
function os(e) {
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
      } = Wv(this, e), s = document.createElement("div");
      s.classList.add(ts()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = i + "px", s.style.height = i + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), jv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + l + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function ho() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + ts());
    if (r.length) {
      var a = r[r.length - 1], t = Fi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Fi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function is() {
  var e = this._ripple;
  zv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Gv(e, n) {
  var r, a, t;
  e._ripple = Ot({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : dn.touchmoveForbid,
    removeRipple: ho.bind(e)
  }), e.addEventListener("touchstart", os, {
    passive: !0
  }), e.addEventListener("touchmove", is, {
    passive: !0
  }), e.addEventListener("dragstart", ho, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function qv(e) {
  e.removeEventListener("touchstart", os), e.removeEventListener("touchmove", is), e.removeEventListener("dragstart", ho), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Kv(e, n) {
  var r, a, t, o, l, i, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : dn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((l = e._ripple) == null ? void 0 : l.touchmoveForbid) || u.color !== ((i = e._ripple) == null ? void 0 : i.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = Ot({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ls = {
  mounted: Gv,
  unmounted: qv,
  updated: Kv,
  install(e) {
    e.directive("ripple", this);
  }
}, FC = ls;
const Ae = ls;
function Xv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var lt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Xv
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
function ss() {
  var e = Object.keys(dn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function dt(e) {
  dn.locks[e] = 1, ss();
}
function vt(e) {
  delete dn.locks[e], ss();
}
function Gt(e, n) {
  var {
    uid: r
  } = Fa();
  n && ie(n, (a) => {
    a === !1 ? vt(r) : a === !0 && e() === !0 && dt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? dt(r) : vt(r));
  }), hv(() => {
    n && n() === !1 || e() === !0 && dt(r);
  }), Ha(() => {
    n && n() === !1 || e() === !0 && vt(r);
  }), Lt(() => {
    n && n() === !1 || e() === !0 && dt(r);
  }), ka(() => {
    n && n() === !1 || e() === !0 && vt(r);
  });
}
function st(e, n) {
  var r = M(dn.zIndex);
  return ie(e, (a) => {
    a && (dn.zIndex += n, r.value = dn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function Zv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ut(e);
}
var {
  n: In,
  classes: oo
} = ee("popup");
const hn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: lt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = st(() => e.show, 3), {
      disabled: o
    } = si(), l = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    Gt(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), Hv(() => $(e.onRouteChange));
    var i = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: oo(In("overlay"), d),
        style: go({
          zIndex: t.value - 1
        }, v),
        onClick: l
      }, null);
    }, s = () => re("div", Ee({
      class: oo(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [$(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: h,
        position: y
      } = e;
      return re(De, {
        name: In("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Se(re("div", {
          class: oo(In("$--box"), In()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && i(), re(De, {
          name: h || In("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[Wa, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(ja, {
          to: d,
          disabled: o.value
        }, Zv(v = u()) ? v : {
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
var HC = hn, us = {
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
function Hi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Hi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Hi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Qv,
  classes: _v
} = ee("icon");
function xv(e, n) {
  return p(), me(
    Ga(e.isURL(e.name) ? "img" : "i"),
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
var ds = x({
  name: "VarIcon",
  props: us,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = Jv(function* (o, l) {
        var {
          transition: i
        } = e;
        if (l == null || L(i) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ve(), setTimeout(() => {
          l != null && (n.value = o), r.value = !1;
        }, L(i));
      });
      return function(l, i) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: Qv,
      classes: _v,
      nextName: n,
      shrinking: r,
      isURL: Sv,
      toNumber: L,
      toSizeUnit: he
    };
  }
});
ds.render = xv;
const $e = ds;
$e.install = function(e) {
  e.component($e.name, $e);
};
var jC = $e;
function yo() {
  return yo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yo.apply(this, arguments);
}
var ef = yo({
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
}, Ke(lt, [
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
const ui = {
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
}, vs = {
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
function di() {
  var e = {}, n = M({}), r = (o, l) => {
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
    e[o] = bo({}, e[o], l), a(o);
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
  packs: fs,
  pack: He,
  add: vi,
  use: fi,
  merge: cs
} = di();
vi("zh-CN", ui);
fi("zh-CN");
var WC = {
  zhCN: ui,
  enUS: vs,
  packs: fs,
  pack: He,
  add: vi,
  use: fi,
  merge: cs,
  useLocale: di
};
const wo = {
  zhCN: ui,
  enUS: vs,
  packs: fs,
  pack: He,
  add: vi,
  use: fi,
  merge: cs,
  useLocale: di
};
var {
  n: nf,
  classes: rf
} = ee("action-sheet"), af = ["onClick"];
function tf(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Ye("ripple");
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
            af
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
var ms = x({
  name: "VarActionSheet",
  directives: {
    Ripple: Ae
  },
  components: {
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: ef,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: l
        } = e;
        $(l, t), o && $(e["onUpdate:show"], !1);
      }
    }, a = (t) => $(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: nf,
      classes: rf,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: He,
      dt: Ht,
      handleSelect: r
    };
  }
});
ms.render = tf;
const rr = ms;
function Co() {
  return Co = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Co.apply(this, arguments);
}
var Jn, ci = {};
function of(e) {
  return e === void 0 && (e = {}), Co({}, ci, e);
}
function ya(e) {
  return it() ? new Promise((n) => {
    ya.close();
    var r = Me(of(e));
    r.teleport = "body", Jn = r;
    var {
      unmountInstance: a
    } = qa(rr, r, {
      onSelect: (t) => {
        $(r.onSelect, t), n(t);
      },
      onClose: () => {
        $(r.onClose), n("close");
      },
      onClosed: () => {
        $(r.onClosed), a(), Jn === r && (Jn = null);
      },
      onRouteChange: () => {
        a(), Jn === r && (Jn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
function lf(e) {
  ci = e;
}
function sf() {
  ci = {};
}
function uf() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
ya.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
ya.install = function(e) {
  e.component(rr.name, rr);
};
Object.assign(ya, {
  setDefaultOptions: lf,
  resetDefaultOptions: sf,
  close: uf
});
var GC = rr;
function df(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var vf = {
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
    validator: df
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
  n: ff,
  classes: cf
} = ee("app-bar");
function mf(e, n) {
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
var ps = x({
  name: "VarAppBar",
  props: vf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
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
    return en(o), Yt(o), {
      n: ff,
      classes: cf,
      rootStyles: l,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
ps.render = mf;
const yr = ps;
yr.install = function(e) {
  e.component(yr.name, yr);
};
var qC = yr;
function ji(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        ji(o, a, t, l, i, "next", s);
      }
      function i(s) {
        ji(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
function So() {
  return So = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, So.apply(this, arguments);
}
var pf = "background-image", hf = "lazy-loading", gf = "lazy-error", Wi = "lazy-attempt", yf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ko = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Aa = [], Pt = [], hs = Tv(100), Re = {
  loading: ko,
  error: ko,
  attempt: 3,
  throttleWait: 300,
  events: yf
}, mi = ii(ut, Re.throttleWait);
function Kt(e, n) {
  e._lazy.arg === pf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function bf(e) {
  e._lazy.loading && Kt(e, e._lazy.loading), ut();
}
function wf(e) {
  e._lazy.error && Kt(e, e._lazy.error), e._lazy.state = "error", hi(e), ut();
}
function gs(e, n) {
  Kt(e, n), e._lazy.state = "success", hi(e), ut();
}
function Cf(e) {
  var n;
  Pt.includes(e) || (Pt.push(e), (n = Re.events) == null || n.forEach((r) => {
    e.addEventListener(r, mi, {
      passive: !0
    });
  }));
}
function Sf() {
  Pt.forEach((e) => {
    var n;
    (n = Re.events) == null || n.forEach((r) => {
      e.removeEventListener(r, mi);
    });
  }), Pt.length = 0;
}
function kf(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(hf)) != null ? r : Re.loading,
    error: (a = e.getAttribute(gf)) != null ? a : Re.error,
    attempt: e.getAttribute(Wi) ? Number(e.getAttribute(Wi)) : Re.attempt
  };
  e._lazy = So({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Kt(e, ko), $(Re.filter, e._lazy);
}
function $f(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, hs.add(n), gs(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? wf(e) : ys(e);
  });
}
function ys(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (hs.has(n)) {
      gs(e, n), e._lazy.attemptLock = !1;
      return;
    }
    bf(e), $f(e, n);
  }
}
function pi(e) {
  return $o.apply(this, arguments);
}
function $o() {
  return $o = qt(function* (e) {
    (yield Vv(e)) && ys(e);
  }), $o.apply(this, arguments);
}
function ut() {
  Aa.forEach((e) => pi(e));
}
function Tf(e) {
  return To.apply(this, arguments);
}
function To() {
  return To = qt(function* (e) {
    !Aa.includes(e) && Aa.push(e), Ev(e).forEach(Cf), yield pi(e);
  }), To.apply(this, arguments);
}
function hi(e) {
  Ft(Aa, e), Aa.length === 0 && Sf();
}
function Of(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function bs(e, n) {
  return Oo.apply(this, arguments);
}
function Oo() {
  return Oo = qt(function* (e, n) {
    kf(e, n), yield Tf(e);
  }), Oo.apply(this, arguments);
}
function Pf(e, n) {
  return Po.apply(this, arguments);
}
function Po() {
  return Po = qt(function* (e, n) {
    if (!Of(e, n)) {
      Aa.includes(e) && (yield pi(e));
      return;
    }
    yield bs(e, n);
  }), Po.apply(this, arguments);
}
function Vf(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: l
  } = e;
  Re.events = n ?? Re.events, Re.loading = r ?? Re.loading, Re.error = a ?? Re.error, Re.attempt = t ?? Re.attempt, Re.throttleWait = o ?? Re.throttleWait, Re.filter = l;
}
var ws = {
  mounted: bs,
  unmounted: hi,
  updated: Pf,
  install(e, n) {
    Vf(n), mi = ii(ut, Re.throttleWait), e.directive("lazy", this);
  }
}, KC = ws;
const et = ws;
function Ef(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Cs = (e) => ["mini", "small", "normal", "large"].includes(e);
function Ss(e) {
  return Cs(e) || _e(e) || Ge(e);
}
var Mf = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: Ss,
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
    validator: Ef,
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
  n: Bf,
  classes: If
} = ee("avatar"), Nf = ["src", "lazy-loading", "lazy-error"], Df = ["src"];
function Af(e, n) {
  var r = Ye("lazy");
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
        Nf
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
        Df
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
var ks = x({
  name: "VarAvatar",
  directives: {
    Lazy: et
  },
  props: Mf,
  setup(e) {
    var n = M(null), r = M(null), a = M(1), t = () => {
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
      d ? (u._lazy.state === "success" && $(v, s), u._lazy.state === "error" && $(f, s)) : $(v, s);
    }, l = (s) => {
      $(e.onError, s);
    }, i = (s) => {
      $(e.onClick, s);
    };
    return en(t), Yt(t), {
      internalSizeValidator: Cs,
      sizeValidator: Ss,
      toSizeUnit: he,
      n: Bf,
      classes: If,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: l,
      handleClick: i
    };
  }
});
ks.render = Af;
const br = ks;
br.install = function(e) {
  e.component(br.name, br);
};
var XC = br, zf = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: Lf,
  classes: Rf
} = ee("avatar-group");
function Uf(e, n) {
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
var $s = x({
  name: "VarAvatarGroup",
  props: zf,
  setup(e) {
    var n = R(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: Lf,
      classes: Rf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
$s.render = Uf;
const wr = $s;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var ZC = wr;
function Yf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Ff(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Yf
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: Ff
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
  n: Hf,
  classes: jf
} = ee("loading"), Wf = (e) => ($a(""), e = e(), Ta(), e), Gf = /* @__PURE__ */ Wf(() => /* @__PURE__ */ A(
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
)), qf = [Gf];
function Kf(e, n) {
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
          qf,
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
var Ts = x({
  name: "VarLoading",
  props: xn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = R(() => $(r.default) ? e.loading : !0);
    return {
      n: Hf,
      classes: jf,
      multiplySizeUnit: Je,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Ts.render = Kf;
const $n = Ts;
$n.install = function(e) {
  e.component($n.name, $n);
};
var JC = $n;
function Vo() {
  return Vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Vo.apply(this, arguments);
}
function Xf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Zf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Jf(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Qf = {
  type: {
    type: String,
    validator: Xf
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Jf
  },
  size: {
    type: String,
    validator: Zf
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
  loadingType: Ke(xn, "type"),
  loadingSize: Ke(xn, "size"),
  loadingColor: Vo({}, Ke(xn, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, Os = Symbol("BUTTON_GROUP_BIND_BUTTON_KEY"), Ps = Symbol("BUTTON_GROUP_COUNT_BUTTON_KEY");
function _f() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Os), {
    length: r
  } = vn(Ps);
  return {
    length: r,
    buttons: n,
    bindButtons: e
  };
}
function xf() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Os), {
    index: r
  } = fn(Ps);
  return {
    index: r,
    buttonGroup: n,
    bindButtonGroup: e
  };
}
var {
  n: ec,
  classes: nc
} = ee("button"), rc = ["type", "disabled"];
function ac(e, n) {
  var r = le("var-loading"), a = Ye("ripple");
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
    rc
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var Vs = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: Ae
  },
  props: Qf,
  setup(e) {
    var n = M(!1), {
      buttonGroup: r
    } = xf(), a = R(() => {
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
      !d || s || u || n.value || t($(d, i));
    }, l = (i) => {
      var {
        loading: s,
        disabled: u,
        onTouchstart: d
      } = e;
      !d || s || u || n.value || t($(d, i));
    };
    return {
      n: ec,
      classes: nc,
      pending: n,
      states: a,
      handleClick: o,
      handleTouchstart: l
    };
  }
});
Vs.render = ac;
const xe = Vs;
xe.install = function(e) {
  e.component(xe.name, xe);
};
var QC = xe, tc = {
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
  n: oc,
  classes: ic
} = ee("back-top");
function lc(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return p(), me(
    ja,
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
        onClick: n[0] || (n[0] = Vn(function() {
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
var Es = x({
  name: "VarBackTop",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: tc,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (v) => {
      $(e.onClick, v);
      var f = li(t);
      xa(t, {
        left: f,
        duration: e.duration,
        animation: Jl
      });
    }, l = () => {
      n.value = jt(t) >= Ne(e.visibilityHeight);
    }, i = ii(l, 200), s = () => {
      t = e.target ? _l(e.target, "BackTop") : Oa(r.value);
    }, u = () => {
      t.addEventListener("scroll", i), a.value = !1;
    }, d = () => {
      t.removeEventListener("scroll", i);
    };
    return ie(() => e.target, () => {
      d(), s(), u();
    }), en(() => {
      s(), u();
    }), Rt(d), ka(d), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: oc,
      classes: ic,
      click: o
    };
  }
});
Es.render = lc;
const Cr = Es;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var _C = Cr;
function sc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function uc(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var dc = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: sc
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
    validator: uc
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Wn,
  classes: vc
} = ee("badge"), fc = {
  key: 1
};
function cc(e, n) {
  var r = le("var-icon");
  return p(), T(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [re(
      De,
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
            fc,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Wa, !e.hidden]])]),
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
var Ms = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: dc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = R(() => {
      var {
        type: l,
        position: i,
        dot: s,
        icon: u
      } = e, d = r.default && Wn("position") + " " + Wn("--" + i), v = s ? Wn("dot") : null, f = o(), c = u ? Wn("icon") : null;
      return [Wn("--" + l), d, v, f, c];
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
          return Wn("dot--right");
        if (l.includes("left"))
          return Wn("dot--left");
      }
    };
    return {
      n: Wn,
      classes: vc,
      values: t,
      contentClass: a
    };
  }
});
Ms.render = cc;
const ar = Ms;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var xC = ar, mc = {
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
}, Bs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Is = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function pc() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Bs), {
    length: r
  } = vn(Is);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: hc,
  classes: gc
} = ee("bottom-navigation"), {
  n: Xt
} = ee("bottom-navigation-item"), Gi = Xt("--right-half-space"), qi = Xt("--left-half-space"), Ki = Xt("--right-space"), yc = {
  type: "primary"
};
function bc(e, n) {
  var r = le("var-button");
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
var Ns = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: xe
  },
  props: mc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = R(() => e.active), o = R(() => e.activeColor), l = R(() => e.inactiveColor), i = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = pc(), v = () => {
      s.value === 0 || f() || c() || h();
    }, f = () => u.find((O) => {
      var {
        name: z
      } = O;
      return t.value === z.value;
    }), c = () => u.find((O) => {
      var {
        index: z
      } = O;
      return t.value === z.value;
    }), h = () => {
      _e(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, y = (O) => {
      t.value !== O && (e.onBeforeChange ? g(O) : P(O));
    }, g = (O) => {
      var z = $(e.onBeforeChange, O);
      z = we(z) ? z : [z], Promise.all(z).then((B) => {
        B.some((b) => !b) || P(O);
      });
    }, P = (O) => {
      $(e["onUpdate:active"], O), $(e.onChange, O);
    }, V = () => {
      var O = I();
      O.forEach((z) => {
        z.classList.remove(Gi, qi, Ki);
      });
    }, w = (O) => {
      var z = I(), B = z.length, b = O % 2 === 0;
      z.forEach((k, j) => {
        C(b, k, j, B);
      });
    }, C = (O, z, B, b) => {
      var k = B === b - 1;
      if (!O && k) {
        z.classList.add(Ki);
        return;
      }
      var j = B === b / 2 - 1, Q = B === b / 2;
      j ? z.classList.add(Gi) : Q && z.classList.add(qi);
    }, I = () => Array.from(a.value.querySelectorAll("." + Xt())), S = () => {
      $(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: l,
      onToggle: y
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (O) => {
      i.value = Eo({}, yc, O);
    }, {
      immediate: !0,
      deep: !0
    }), en(() => {
      r.fab && w(s.value);
    }), Yt(() => {
      V(), r.fab && w(s.value);
    }), {
      n: hc,
      classes: gc,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: S,
      fabProps: i
    };
  }
});
Ns.render = bc;
const Sr = Ns;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var eS = Sr, wc = {
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
function Cc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Bs), {
    index: r
  } = fn(Is);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Sc,
  classes: kc
} = ee("bottom-navigation-item"), $c = {
  type: "danger",
  dot: !0
};
function Tc(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = Ye("ripple");
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
var Ds = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: wc,
  setup(e) {
    var n = R(() => e.name), r = R(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: l
    } = Cc(), {
      active: i,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => i.value === n.value || i.value === t.value ? s.value : u.value, f = () => {
      var c, h = (c = n.value) != null ? c : t.value;
      $(e.onClick, h), $(o.onToggle, h);
    };
    return l(d), ie(() => r.value, (c) => {
      a.value = c === !0 ? $c : r.value;
    }, {
      immediate: !0
    }), {
      n: Sc,
      classes: kc,
      index: t,
      active: i,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Ds.render = Tc;
const kr = Ds;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var nS = kr, Oc = {
  separator: {
    type: String
  },
  onClick: Y()
}, As = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), zs = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Pc() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(As), {
    length: r
  } = vn(zs);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Vc() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(As), {
    index: r
  } = fn(zs);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Ec,
  classes: Mc
} = ee("breadcrumb");
function Bc(e, n) {
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
var Ls = x({
  name: "VarBreadcrumb",
  props: Oc,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Vc(), t = R(() => n.value === r.length.value - 1), o = R(() => r.separator.value), l = (i) => {
      t.value || $(e.onClick, i);
    };
    return a(null), {
      n: Ec,
      classes: Mc,
      isLast: t,
      parentSeparator: o,
      handleClick: l
    };
  }
});
Ls.render = Bc;
const $r = Ls;
$r.install = function(e) {
  e.component($r.name, $r);
};
var rS = $r, Ic = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Nc
} = ee("breadcrumbs");
function Dc(e, n) {
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
var Rs = x({
  name: "VarBreadcrumbs",
  props: Ic,
  setup(e) {
    var n = R(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Pc(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Nc
    };
  }
});
Rs.render = Dc;
const Tr = Rs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var aS = Tr;
function Ac(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function zc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Lc(e) {
  return ["normal", "text", "outline"].includes(e);
}
var Rc = {
  type: {
    type: String,
    default: "default",
    validator: Ac
  },
  size: {
    type: String,
    default: "normal",
    validator: zc
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
    validator: Lc
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
  n: Uc,
  classes: Yc
} = ee("button-group");
function Fc(e, n) {
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
var Us = x({
  name: "VarButtonGroup",
  props: Rc,
  setup(e) {
    var {
      bindButtons: n
    } = _f(), r = {
      elevation: R(() => e.elevation),
      type: R(() => e.type),
      size: R(() => e.size),
      color: R(() => e.color),
      textColor: R(() => e.textColor),
      mode: R(() => e.mode)
    };
    return n(r), {
      n: Uc,
      classes: Yc
    };
  }
});
Us.render = Fc;
const Or = Us;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var tS = Or;
function Hc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var jc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Hc,
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
function Xi(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Xi(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Xi(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Wc,
  classes: Gc
} = ee("card"), qc = 500, Kc = ["src", "alt"];
function Xc(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = Ye("ripple");
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
        Kc
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
            onClick: Vn(e.close, ["stop"])
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
var Ys = x({
  name: "VarCard",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarButton: xe
  },
  props: jc,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), l = M("100%"), i = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), c = R(() => e.layout === "row"), h = M(!1), y = M(!1), {
      zIndex: g
    } = st(() => e.floating, 1);
    Gt(() => e.floating, () => !c.value);
    var P = "auto", V = "auto", w = null, C = M(null), I = /* @__PURE__ */ function() {
      var z = Zi(function* () {
        clearTimeout(C.value), clearTimeout(w), C.value = null, C.value = setTimeout(/* @__PURE__ */ Zi(function* () {
          var {
            width: B,
            height: b,
            left: k,
            top: j
          } = n.value.getBoundingClientRect();
          a.value = he(B), t.value = he(b), o.value = a.value, l.value = t.value, i.value = he(j), s.value = he(k), u.value = "fixed", P = i.value, V = s.value, h.value = !0, yield En(), i.value = "0", s.value = "0", o.value = "100vw", l.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? qc : 0);
      });
      return function() {
        return z.apply(this, arguments);
      };
    }(), S = () => {
      clearTimeout(w), clearTimeout(C.value), C.value = null, o.value = a.value, l.value = t.value, i.value = P, s.value = V, v.value = "0px", f.value = "0", h.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", l.value = "100%", i.value = "auto", s.value = "auto", P = "auto", V = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      $(e["onUpdate:floating"], !1);
    }, O = (z) => {
      $(e.onClick, z);
    };
    return ie(() => e.floating, (z) => {
      c.value || Ve(() => {
        z ? I() : S();
      });
    }, {
      immediate: !0
    }), {
      n: Wc,
      classes: Gc,
      toSizeUnit: he,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: C,
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
      close: D,
      showFloatingButtons: h,
      floated: y,
      handleClick: O
    };
  }
});
Ys.render = Xc;
const Pr = Ys;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var oS = Pr, Zc = {
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
  n: Jc,
  classes: Qc
} = ee("cell");
function _c(e, n) {
  var r = le("var-icon"), a = Ye("ripple");
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
var Fs = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: Zc,
  setup(e) {
    var n = R(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: Jc,
      classes: Qc,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
Fs.render = _c;
const tr = Fs;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var iS = tr, xc = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: em
} = ee("form-details"), nm = {
  key: 0
}, rm = {
  key: 0
};
function am(e, n) {
  return p(), me(
    De,
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
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (p(), T(
                "div",
                nm,
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
            De,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (p(), T(
                "div",
                rm,
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
var Hs = x({
  name: "VarFormDetails",
  props: xc,
  setup: () => ({
    n: em
  })
});
Hs.render = am;
const je = Hs;
je.install = function(e) {
  e.component(je.name, je);
};
var lS = je, tm = {
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
}, js = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Ws = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function om() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(js), {
    length: r
  } = vn(Ws);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function im() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(js), {
    index: r
  } = fn(Ws);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function Mo() {
  return Mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mo.apply(this, arguments);
}
var Gs = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Gs), r = Fa(), a = e ? (t) => {
    e(Mo({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function lm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Gs);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: sm,
  classes: um
} = ee("checkbox");
function dm(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ye("ripple");
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
var qs = x({
  name: "VarCheckbox",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: tm,
  setup(e) {
    var n = M(!1), r = R(() => n.value === e.checkedValue), a = R(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: l
    } = im(), {
      form: i,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), c = (S) => {
      Ve(() => {
        var {
          validateTrigger: D,
          rules: O,
          modelValue: z
        } = e;
        d(D, S, O, z);
      });
    }, h = (S) => {
      n.value = S;
      var {
        checkedValue: D,
        onChange: O
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(O, n.value), c("onChange"), S === D ? o == null || o.onChecked(D) : o == null || o.onUnchecked(D);
    }, y = (S) => {
      var {
        disabled: D,
        readonly: O,
        checkedValue: z,
        uncheckedValue: B,
        onClick: b
      } = e;
      if (!(i != null && i.disabled.value || D) && ($(b, S), !(i != null && i.readonly.value || O))) {
        t.value = !0;
        var k = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && k || h(r.value ? B : z);
      }
    }, g = (S) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e;
      n.value = S.includes(D) ? D : O;
    }, P = () => {
      t.value = !1;
    }, V = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, w = (S) => {
      var {
        checkedValue: D,
        uncheckedValue: O
      } = e, z = ![D, O].includes(S);
      z && (S = r.value ? O : D), h(S);
    }, C = () => v(e.rules, e.modelValue);
    ie(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var I = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: C,
      resetValidation: f,
      reset: V,
      resetWithAnimation: P
    };
    return $(l, I), $(s, I), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: sm,
      classes: um,
      handleClick: y,
      toggle: w,
      reset: V,
      validate: C,
      resetValidation: f
    };
  }
});
qs.render = dm;
const or = qs;
or.install = function(e) {
  e.component(or.name, or);
};
var sS = or;
function vm(e) {
  return ["horizontal", "vertical"].includes(e);
}
var fm = {
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
    validator: vm
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
  n: cm,
  classes: mm
} = ee("checkbox-group");
function pm(e, n) {
  var r = le("var-form-details");
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
var Ks = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: fm,
  setup(e) {
    var n = R(() => e.max), r = R(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = om(), {
      bindForm: l
    } = wn(), {
      errorMessage: i,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = R(() => i.value), f = (D) => {
      Ve(() => {
        var {
          validateTrigger: O,
          rules: z,
          modelValue: B
        } = e;
        s(O, D, z, B);
      });
    }, c = (D) => {
      $(e["onUpdate:modelValue"], D), $(e.onChange, D), f("onChange");
    }, h = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) || c([...O, D]);
    }, y = (D) => {
      var {
        modelValue: O
      } = e;
      O.includes(D) && c(O.filter((z) => z !== D));
    }, g = () => t.forEach((D) => {
      var {
        sync: O
      } = D;
      return O(e.modelValue);
    }), P = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, V = () => {
      var D = t.map((z) => {
        var {
          checkedValue: B
        } = z;
        return B.value;
      }), O = Ni(D);
      return P(), $(e["onUpdate:modelValue"], O), O;
    }, w = () => {
      var D = t.filter((z) => {
        var {
          checked: B
        } = z;
        return !B.value;
      }).map((z) => {
        var {
          checkedValue: B
        } = z;
        return B.value;
      }), O = Ni(D);
      return P(), $(e["onUpdate:modelValue"], O), O;
    }, C = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, I = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, g, {
      deep: !0
    }), ie(() => a.value, g);
    var S = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: y,
      validate: I,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return o(S), $(l, S), {
      errorMessage: i,
      n: cm,
      classes: mm,
      checkAll: V,
      inverseAll: w,
      reset: C,
      validate: I,
      resetValidation: d
    };
  }
});
Ks.render = pm;
const Vr = Ks;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var uS = Vr;
function hm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gm(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ym = {
  type: {
    type: String,
    default: "default",
    validator: hm
  },
  size: {
    type: String,
    default: "normal",
    validator: gm
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ke(us, "name"),
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
  n: Gn,
  classes: bm
} = ee("chip");
function wm(e, n) {
  var r = le("var-icon");
  return p(), me(
    De,
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
var Xs = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: ym,
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
      } = e, u = Gn(o ? "$--flex" : "$--inline-flex"), d = i ? Gn("plain") + " " + Gn("plain-" + l) : Gn("--" + l), v = s ? Gn("--round") : null;
      return [Gn("--" + t), u, d, v];
    }), a = (t) => {
      $(e.onClose, t);
    };
    return {
      n: Gn,
      classes: bm,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Xs.render = wm;
const ir = Xs;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var dS = ir;
function Cm(e) {
  return ["row", "column"].includes(e);
}
function Sm(e) {
  return ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e);
}
function km(e) {
  return ["stretch", "center", "start", "end", "baseline", "initial", "inherit", "flex-start", "flex-end"].includes(e);
}
var $m = {
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
    validator: Cm
  },
  justify: {
    type: String,
    validator: Sm
  },
  align: {
    type: String,
    validator: km
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
}, Zs = Symbol("ROW_BIND_COL_KEY"), Js = Symbol("ROW_COUNT_COL_KEY");
function Tm() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Zs), {
    length: r
  } = vn(Js);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Om() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Zs), {
    index: r
  } = fn(Js);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: ft,
  classes: Pm
} = ee("col");
function Vm(e, n) {
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
var Qs = x({
  name: "VarCol",
  props: $m,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = R(() => L(e.span)), a = R(() => L(e.offset)), {
      row: t,
      bindRow: o
    } = Om(), l = {
      setPadding(u) {
        n.value = u;
      }
    }, i = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (ti(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(ft("--span-" + u + "-" + c)), f && v.push(ft("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(ft("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, l), {
      n: ft,
      classes: Pm,
      padding: n,
      toNumber: L,
      toSizeUnit: he,
      getSize: i,
      span: r,
      offset: a,
      handleClick: s,
      padStartFlex: $t
    };
  }
});
Qs.render = Vm;
const Er = Qs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var vS = Er, _s = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), xs = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Em() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(_s), {
    length: r
  } = vn(xs);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Mm = {
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
  n: Bm
} = ee("collapse");
function Im(e, n) {
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
var eu = x({
  name: "VarCollapse",
  props: Mm,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Em(), t = R(() => e.modelValue), o = R(() => e.offset), l = () => !e.accordion && !we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, i = (c, h) => l() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((y) => y !== c) : null, s = (c, h) => {
      var y = i(c, h);
      $(e["onUpdate:modelValue"], y), $(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: y
          } = h;
          return e.modelValue === y.value;
        });
      var c = r.filter((h) => {
        var {
          name: y
        } = h;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: h,
        name: y
      } = c;
      return y.value === void 0 && e.modelValue === h.value;
    }) : r.filter((c) => {
      var {
        index: h,
        name: y
      } = c;
      return y.value === void 0 && e.modelValue.includes(h.value);
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
          var y = e.accordion ? c === h : c.includes(h);
          h.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), ie(() => n.value, () => Ve().then(v)), ie(() => e.modelValue, () => Ve().then(v)), {
      n: Bm
    };
  }
});
eu.render = Im;
const Mr = eu;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var fS = Mr;
function Nm() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(_s), {
    index: r
  } = fn(xs);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Dm = {
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
  n: Am,
  classes: zm
} = ee("collapse-item");
function Lm(e, n) {
  var r = le("var-icon");
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
    ), [[Wa, e.show]])],
    2
    /* CLASS */
  );
}
var nu = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Dm,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Nm(), t = !0, o = M(null), l = M(!1), i = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = R(() => e.name), f = (w, C) => {
      s.value === void 0 || w && we(s.value) || C === i.value || (i.value = C, c(!0));
    }, c = (w) => {
      e.disabled || w || d(e.name || n.value, !i.value);
    }, h = () => {
      o.value && (o.value.style.height = "", l.value = !0, Ve(() => {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = 0 + "px", On(() => {
          o.value.style.height = w + "px", t && Wt(() => {
            t && P();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = w + "px", On(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, P = () => {
      i.value || (l.value = !1), o.value.style.height = "";
    }, V = {
      index: n,
      name: v,
      init: f
    };
    return a(V), ie(i, (w) => {
      w ? h() : g();
    }), {
      n: Am,
      start: y,
      classes: zm,
      show: l,
      isShow: i,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: P
    };
  }
});
nu.render = Lm;
const Br = nu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var cS = Br, Rm = {
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
  n: Um
} = ee("countdown"), Bo = 1e3, Io = 60 * Bo, No = 60 * Io, Ji = 24 * No;
function Ym(e, n) {
  return p(), T(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default", ai(Kl(e.timeData)), () => [be(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var ru = x({
  name: "VarCountdown",
  props: Rm,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), o = M(0), l = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), i = (c, h) => {
      var y = Object.values(h), g = ["DD", "HH", "mm", "ss"], P = [24, 60, 60, 1e3];
      if (g.forEach((w, C) => {
        c.includes(w) ? c = c.replace(w, ha("" + y[C], 2, "0")) : y[C + 1] += y[C] * P[C];
      }), c.includes("S")) {
        var V = ha("" + y[y.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", V) : c.includes("SS") ? c = c.replace("SS", V.slice(0, 2)) : c = c.replace("S", V.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / Ji), y = Math.floor(c % Ji / No), g = Math.floor(c % No / Io), P = Math.floor(c % Io / Bo), V = Math.floor(c % Bo), w = {
        days: h,
        hours: y,
        minutes: g,
        seconds: P,
        milliseconds: V
      };
      l.value = w, $(e.onChange, l.value), a.value = i(e.format, w);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: y
      } = e, g = performance.now();
      n.value || (n.value = g + L(c));
      var P = n.value - g;
      if (P < 0 && (P = 0), o.value = P, s(P), P === 0) {
        $(h);
        return;
      }
      (y || r.value) && (t.value = On(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || L(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, Dv(t.value), u();
    };
    return ie(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: l,
      n: Um,
      start: d,
      pause: v,
      reset: f
    };
  }
});
ru.render = Ym;
const Ir = ru;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var mS = Ir;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Ea = 9e15, pr = 1e9, Do = "0123456789abcdef", Vt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Et = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Ao = {
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
}, au, Dn, fe = !0, Zt = "[DecimalError] ", cr = Zt + "Invalid argument: ", tu = Zt + "Precision limit exceeded", ou = Zt + "crypto unavailable", iu = "[object Decimal]", Xe = Math.floor, Ue = Math.pow, Fm = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Hm = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, jm = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, lu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, Wm = 9007199254740991, Gm = Vt.length - 1, zo = Et.length - 1, K = { toStringTag: iu };
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
    throw Error(cr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = qm(a, fu(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, o, l, i, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ue(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = We(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ue(r, 1 / 3), e = Xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), l = (e = v.precision) + 3; ; )
    if (i = a, s = i.times(i).times(i), u = s.plus(d), a = Oe(u.plus(d).times(i), u.plus(s), l + 2, 1), We(i.d).slice(0, l) === (r = We(a.d)).slice(0, l))
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
    if (e = n.length - 1, r = (e - Xe(this.e / de)) * de, e = n[e], e)
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
  r = l.precision, a = l.rounding, l.precision = r + Math.max(o.e, o.sd()) + 4, l.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Qt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = za(l, 1, o.times(n), new l(1), !0);
  for (var s, u = e, d = new l(8); u--; )
    s = o.times(o), o = i.minus(s.times(d.minus(s.times(d))));
  return ue(o, l.precision = r, l.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = za(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Qt(5, e)), t = za(o, 2, t, t, !0);
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
    if (u.abs().eq(1) && v + 4 <= zo)
      return l = kn(d, v + 4, f).times(0.25), l.s = u.s, l;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= zo)
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
  return !!this.d && Xe(this.e / de) > this.d.length - 2;
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
  if (fe = !1, i = v + c, l = er(u, i), a = n ? Mt(d, i + 10) : er(e, i), s = Oe(l, a, i, 1), nt(s.d, t = v, f))
    do
      if (i += 10, l = er(u, i), a = n ? Mt(d, i + 10) : er(e, i), s = Oe(l, a, i, 1), !o) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (nt(s.d, t += 10, f));
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
  if (r = Xe(e.e / de), d = Xe(c.e / de), u = u.slice(), o = d - r, o) {
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
  return u[0] ? (e.d = u, e.e = Jt(u, r), fe ? ue(e, i, s) : e) : new h(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Oe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Oe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return Lo(this);
};
K.naturalLogarithm = K.ln = function() {
  return er(this);
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
  if (o = Xe(v.e / de), a = Xe(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, l = d.length) : (r = d, a = o, l = u.length), o = Math.ceil(i / de), l = o > l ? o + 1 : l + 1, t > l && (t = l, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (l = u.length, t = d.length, l - t < 0 && (t = l, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Tn | 0, u[t] %= Tn;
  for (n && (u.unshift(n), ++a), l = u.length; u[--l] == 0; )
    u.pop();
  return e.d = u, e.e = Jt(u, a), fe ? ue(e, i, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(cr + e);
  return r.d ? (n = su(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Xm(a, fu(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, o, l = this, i = l.d, s = l.e, u = l.s, d = l.constructor;
  if (u !== 1 || !i || !i[0])
    return new d(!u || u < 0 && (!i || i[0]) ? NaN : i ? l : 1 / 0);
  for (fe = !1, u = Math.sqrt(+l), u == 0 || u == 1 / 0 ? (n = We(i), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Xe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Oe(l, o, r + 2, 1)).times(0.5), We(o.d).slice(0, r) === (n = We(a.d)).slice(0, r))
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
  for (r = Xe(d.e / de) + Xe(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, l = s, s = u, u = l), o = [], l = s + u, a = l; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      i = o[t] + c[a] * f[t - a - 1] + n, o[t--] = i % Tn | 0, n = i / Tn | 0;
    o[t] = (o[t] + n) % Tn | 0;
  }
  for (; !o[--l]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Jt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return gi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, pr), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, !0) : (tn(e, 0, pr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = Mn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Mn(t) : (tn(e, 0, pr), n === void 0 ? n = o.rounding : tn(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Mn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, o, l, i, s, u, d, v, f, c = this, h = c.d, y = c.constructor;
  if (!h)
    return new y(c);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = su(h) - c.e - 1, l = o % de, n.d[0] = Ue(10, l < 0 ? de + l : l), e == null)
    e = o > 0 ? n : u;
  else {
    if (i = new y(e), !i.isInt() || i.lt(u))
      throw Error(cr + i);
    e = i.gt(n) ? o > 0 ? n : u : i;
  }
  for (fe = !1, i = new y(We(h)), d = y.precision, y.precision = o = h.length * de * 2; v = Oe(i, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = i.minus(v.times(t)), i = t;
  return t = Oe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Oe(u, a, o, 1).minus(c).abs().cmp(Oe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], y.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return gi(this, 16, e, n);
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
  return gi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, o, l, i = this, s = i.constructor, u = +(e = new s(e));
  if (!i.d || !e.d || !i.d[0] || !e.d[0])
    return new s(Ue(+i, u));
  if (i = new s(i), i.eq(1))
    return i;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(i, a, o);
  if (n = Xe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Wm)
    return t = uu(s, i, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (l = i.s, l < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (l = 1), i.e == 0 && i.d[0] == 1 && i.d.length == 1)
      return i.s = l, i;
  }
  return r = Ue(+i, u), n = r == 0 || !isFinite(r) ? Xe(u * (Math.log("0." + We(i.d)) / Math.LN10 + i.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? l / 0 : 0) : (fe = !1, s.rounding = i.s = 1, r = Math.min(12, (n + "").length), t = Lo(e.times(er(i, a + r)), a), t.d && (t = ue(t, a + 5, 1), nt(t.d, a, o) && (n = a + 10, t = ue(Lo(e.times(er(i, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = l, fe = !0, s.rounding = o, ue(t, a, o));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, pr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = Mn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, pr), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
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
function We(e) {
  var n, r, a, t = e.length - 1, o = "", l = e[0];
  if (t > 0) {
    for (o += l, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Kn(r)), o += a;
    l = e[n], a = l + "", r = de - a.length, r && (o += Kn(r));
  } else if (l === 0)
    return "0";
  for (; l % 10 === 0; )
    l /= 10;
  return o + l;
}
function tn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(cr + e);
}
function nt(e, n, r, a) {
  var t, o, l, i;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ue(10, de - n), i = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? i = i / 100 | 0 : n == 1 && (i = i / 10 | 0), l = r < 4 && i == 99999 || r > 3 && i == 49999 || i == 5e4 || i == 0) : l = (r < 4 && i + 1 == o || r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ue(10, n - 2) - 1 || (i == o / 2 || i == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? i = i / 1e3 | 0 : n == 1 ? i = i / 100 | 0 : n == 2 && (i = i / 10 | 0), l = (a || r < 4) && i == 9999 || !a && r > 3 && i == 4999) : l = ((a || r < 4) && i + 1 == o || !a && r > 3 && i + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ue(10, n - 3) - 1, l;
}
function bt(e, n, r) {
  for (var a, t = [0], o, l = 0, i = e.length; l < i; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += Do.indexOf(e.charAt(l++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function qm(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Qt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = za(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, h, y, g, P, V, w, C, I, S, D, O, z, B, b, k, j = a.constructor, Q = a.s == t.s ? 1 : -1, F = a.d, E = t.d;
    if (!F || !F[0] || !E || !E[0])
      return new j(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (F ? E && F[0] == E[0] : !E) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          F && F[0] == 0 || !E ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Xe(a.e / c) - Xe(t.e / c)), b = E.length, z = F.length, P = new j(Q), V = P.d = [], v = 0; E[v] == (F[v] || 0); v++)
      ;
    if (E[v] > (F[v] || 0) && d--, o == null ? (S = o = j.precision, l = j.rounding) : i ? S = o + (a.e - t.e) + 1 : S = o, S < 0)
      V.push(1), h = !0;
    else {
      if (S = S / c + 2 | 0, v = 0, b == 1) {
        for (f = 0, E = E[0], S++; (v < z || f) && S--; v++)
          D = f * s + (F[v] || 0), V[v] = D / E | 0, f = D % E | 0;
        h = f || v < z;
      } else {
        for (f = s / (E[0] + 1) | 0, f > 1 && (E = e(E, f, s), F = e(F, f, s), b = E.length, z = F.length), O = b, w = F.slice(0, b), C = w.length; C < b; )
          w[C++] = 0;
        k = E.slice(), k.unshift(0), B = E[0], E[1] >= s / 2 && ++B;
        do
          f = 0, u = n(E, w, b, C), u < 0 ? (I = w[0], b != C && (I = I * s + (w[1] || 0)), f = I / B | 0, f > 1 ? (f >= s && (f = s - 1), y = e(E, f, s), g = y.length, C = w.length, u = n(y, w, g, C), u == 1 && (f--, r(y, b < g ? k : E, g, s))) : (f == 0 && (u = f = 1), y = E.slice()), g = y.length, g < C && y.unshift(0), r(w, y, C, s), u == -1 && (C = w.length, u = n(E, w, b, C), u < 1 && (f++, r(w, b < C ? k : E, C, s))), C = w.length) : u === 0 && (f++, w = [0]), V[v++] = f, u && w[0] ? w[C++] = F[O] || 0 : (w = [F[O]], C = 1);
        while ((O++ < z || w[0] !== void 0) && S--);
        h = w[0] !== void 0;
      }
      V[0] || V.shift();
    }
    if (c == 1)
      P.e = d, au = h;
    else {
      for (v = 1, f = V[0]; f >= 10; f /= 10)
        v++;
      P.e = v + d * c - 1, ue(P, i ? o + P.e + 1 : o, l, h);
    }
    return P;
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
        o += de, l = n, d = v[f = 0], s = d / Ue(10, t - l - 1) % 10 | 0;
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
        o %= de, l = o - de + t, s = l < 0 ? 0 : d / Ue(10, t - l - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (l < 0 ? d : d % Ue(10, t - l - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? l > 0 ? d / Ue(10, t - l) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ue(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, i = 1, f--) : (v.length = f + 1, i = Ue(10, de - o), v[f] = l > 0 ? (d / Ue(10, t - l) % Ue(10, l) | 0) * i : 0), u)
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
    return vu(e);
  var a, t = e.e, o = We(e.d), l = o.length;
  return n ? (r && (a = r - l) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Kn(a) : l > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Kn(-t - 1) + o, r && (a = r - l) > 0 && (o += Kn(a))) : t >= l ? (o += Kn(t + 1 - l), r && (a = r - t - 1) > 0 && (o = o + "." + Kn(a))) : ((a = t + 1) < l && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - l) > 0 && (t + 1 === l && (o += "."), o += Kn(a))), o;
}
function Jt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function Mt(e, n, r) {
  if (n > Gm)
    throw fe = !0, r && (e.precision = r), Error(tu);
  return ue(new e(Vt), n, 1, !0);
}
function kn(e, n, r) {
  if (n > zo)
    throw Error(tu);
  return ue(new e(Et), n, r, !0);
}
function su(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Kn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function uu(e, n, r, a) {
  var t, o = new e(1), l = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), _i(o.d, l) && (t = !0)), r = Xe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), _i(n.d, l);
  }
  return fe = !0, o;
}
function Qi(e) {
  return e.d[e.d.length - 1] & 1;
}
function du(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Lo(e, n) {
  var r, a, t, o, l, i, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, i = new f(0.03125); e.e > -2; )
    e = e.times(i), v += 5;
  for (a = Math.log(Ue(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = l = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), i = l.plus(Oe(o, r, s, 1)), We(i.d).slice(0, s) === We(l.d).slice(0, s)) {
      for (t = v; t--; )
        l = ue(l.times(l), s, 1);
      if (n == null)
        if (u < 3 && nt(l.d, s - a, c, u))
          f.precision = s += 10, r = o = i = new f(1), d = 0, u++;
        else
          return ue(l, f.precision = h, c, fe = !0);
      else
        return f.precision = h, l;
    }
    l = i;
  }
}
function er(e, n) {
  var r, a, t, o, l, i, s, u, d, v, f, c = 1, h = 10, y = e, g = y.d, P = y.constructor, V = P.rounding, w = P.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new P(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (fe = !1, d = w) : d = n, P.precision = d += h, r = We(g), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = We(y.d), a = r.charAt(0), c++;
    o = y.e, a > 1 ? (y = new P("0." + r), o++) : y = new P(a + "." + r.slice(1));
  } else
    return u = Mt(P, d + 2, w).times(o + ""), y = er(new P(a + "." + r.slice(1)), d - h).plus(u), P.precision = w, n == null ? ue(y, w, V, fe = !0) : y;
  for (v = y, s = l = y = Oe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (l = ue(l.times(f), d, 1), u = s.plus(Oe(l, new P(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(Mt(P, d + 2, w).times(o + ""))), s = Oe(s, new P(c), d, 1), n == null)
        if (nt(s.d, d - h, V, i))
          P.precision = d += h, u = l = y = Oe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = i = 1;
        else
          return ue(s, P.precision = w, V, fe = !0);
      else
        return P.precision = w, s;
    s = u, t += 2;
  }
}
function vu(e) {
  return String(e.s * e.s / 0);
}
function Ro(e, n) {
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
function Km(e, n) {
  var r, a, t, o, l, i, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), lu.test(n))
      return Ro(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Hm.test(n))
    r = 16, n = n.toLowerCase();
  else if (Fm.test(n))
    r = 2;
  else if (jm.test(n))
    r = 8;
  else
    throw Error(cr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), l = o >= 0, a = e.constructor, l && (n = n.replace(".", ""), i = n.length, o = i - o, t = uu(a, new a(r), o, o * 2)), u = bt(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Jt(u, d), e.d = u, fe = !1, l && (e = Oe(e, t, i * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ue(2, s) : nr.pow(2, s))), fe = !0, e);
}
function Xm(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : za(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Qt(5, r)), n = za(e, 2, n, n);
  for (var t, o = new e(5), l = new e(16), i = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(l.times(t).minus(i))));
  return n;
}
function za(e, n, r, a, t) {
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
function Qt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function fu(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = Qi(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = Qi(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function gi(e, n, r, a) {
  var t, o, l, i, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (tn(r, 1, pr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = vu(e);
  else {
    for (d = Mn(e), l = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, l >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - l, f.d = bt(Mn(f), 10, t), f.e = f.d.length), v = bt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (l < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Oe(e, f, r, a, 0, t), v = e.d, o = e.e, u = au), l = v[r], i = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (l !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : l > i || l === i && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (l = 0, d = ""; l < s; l++)
        d += Do.charAt(v[l]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (l = n == 16 ? 4 : 3, --s; s % l; s++)
              d += "0";
            for (v = bt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (l = 1, d = "1."; l < s; l++)
              d += Do.charAt(v[l]);
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
function _i(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Zm(e) {
  return new this(e).abs();
}
function Jm(e) {
  return new this(e).acos();
}
function Qm(e) {
  return new this(e).acosh();
}
function _m(e, n) {
  return new this(e).plus(n);
}
function xm(e) {
  return new this(e).asin();
}
function ep(e) {
  return new this(e).asinh();
}
function np(e) {
  return new this(e).atan();
}
function rp(e) {
  return new this(e).atanh();
}
function ap(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Oe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Oe(e, n, o, 1)), r;
}
function tp(e) {
  return new this(e).cbrt();
}
function op(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function ip(e, n, r) {
  return new this(e).clamp(n, r);
}
function lp(e) {
  if (!e || typeof e != "object")
    throw Error(Zt + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    pr,
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
    if (r = o[n], t && (this[r] = Ao[r]), (a = e[r]) !== void 0)
      if (Xe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(cr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Ao[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(ou);
      else
        this[r] = !1;
    else
      throw Error(cr + r + ": " + a);
  return this;
}
function sp(e) {
  return new this(e).cos();
}
function up(e) {
  return new this(e).cosh();
}
function cu(e) {
  var n, r, a;
  function t(o) {
    var l, i, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, xi(o)) {
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
      return Ro(u, o.toString());
    } else if (s !== "string")
      throw Error(cr + o);
    return (i = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (i === 43 && (o = o.slice(1)), u.s = 1), lu.test(o) ? Ro(u, o) : Km(u, o);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = lp, t.clone = cu, t.isDecimal = xi, t.abs = Zm, t.acos = Jm, t.acosh = Qm, t.add = _m, t.asin = xm, t.asinh = ep, t.atan = np, t.atanh = rp, t.atan2 = ap, t.cbrt = tp, t.ceil = op, t.clamp = ip, t.cos = sp, t.cosh = up, t.div = dp, t.exp = vp, t.floor = fp, t.hypot = cp, t.ln = mp, t.log = pp, t.log10 = gp, t.log2 = hp, t.max = yp, t.min = bp, t.mod = wp, t.mul = Cp, t.pow = Sp, t.random = kp, t.round = $p, t.sign = Tp, t.sin = Op, t.sinh = Pp, t.sqrt = Vp, t.sub = Ep, t.sum = Mp, t.tan = Bp, t.tanh = Ip, t.trunc = Np, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function dp(e, n) {
  return new this(e).div(n);
}
function vp(e) {
  return new this(e).exp();
}
function fp(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function cp() {
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
function xi(e) {
  return e instanceof nr || e && e.toStringTag === iu || !1;
}
function mp(e) {
  return new this(e).ln();
}
function pp(e, n) {
  return new this(e).log(n);
}
function hp(e) {
  return new this(e).log(2);
}
function gp(e) {
  return new this(e).log(10);
}
function yp() {
  return du(this, arguments, "lt");
}
function bp() {
  return du(this, arguments, "gt");
}
function wp(e, n) {
  return new this(e).mod(n);
}
function Cp(e, n) {
  return new this(e).mul(n);
}
function Sp(e, n) {
  return new this(e).pow(n);
}
function kp(e) {
  var n, r, a, t, o = 0, l = new this(1), i = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, pr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : i[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (i.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(ou);
  else
    for (; o < a; )
      i[o++] = Math.random() * 1e7 | 0;
  for (a = i[--o], e %= de, a && e && (t = Ue(10, de - e), i[o] = (a / t | 0) * t); i[o] === 0; o--)
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
function $p(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Tp(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Op(e) {
  return new this(e).sin();
}
function Pp(e) {
  return new this(e).sinh();
}
function Vp(e) {
  return new this(e).sqrt();
}
function Ep(e, n) {
  return new this(e).sub(n);
}
function Mp() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Bp(e) {
  return new this(e).tan();
}
function Ip(e) {
  return new this(e).tanh();
}
function Np(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var nr = K.constructor = cu(Ao);
Vt = new nr(Vt);
Et = new nr(Et);
var Dp = {
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
  n: Ap,
  classes: zp
} = ee("counter"), el = 100, nl = 600, Lp = ["inputmode", "readonly", "disabled"];
function Rp(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ye("ripple");
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
        Lp
      ), [[gv, e.inputValue]]), Se(re(
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
var mu = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  inheritAttrs: !1,
  props: Dp,
  setup(e) {
    var n = M(""), r, a, t, o, {
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
    } = i ?? {}, h = () => d(e.rules, e.modelValue), y = (E) => {
      Ve(() => {
        var {
          validateTrigger: H,
          rules: U,
          modelValue: X
        } = e;
        u(H, E, U, X);
      });
    }, g = () => {
      var {
        min: E
      } = e;
      $(e["onUpdate:modelValue"], E != null ? L(E) : 0), v();
    }, P = {
      reset: g,
      validate: h,
      resetValidation: v
    }, V = R(() => {
      var {
        max: E,
        modelValue: H
      } = e;
      return E != null && L(H) >= L(E);
    }), w = R(() => {
      var {
        min: E,
        modelValue: H
      } = e;
      return E != null && L(H) <= L(E);
    }), C = (E) => {
      var {
        decimalLength: H,
        max: U,
        min: X
      } = e, N = L(E);
      return U != null && N > L(U) && (N = L(U)), X != null && N < L(X) && (N = L(X)), E = String(N), H != null && (E = N.toFixed(L(H))), E;
    }, I = (E) => {
      var {
        lazyChange: H,
        onBeforeChange: U
      } = e, {
        value: X
      } = E.target, N = C(X);
      H ? $(U, L(N), F) : Q(N), y("onInputChange");
    }, S = () => {
      var {
        disabled: E,
        readonly: H,
        disableDecrement: U,
        decrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onDecrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || E || H || U || !X) && !w.value) {
        var oe = new nr(L(G)).minus(new nr(L(Z))).toString(), ge = C(oe), pe = L(ge);
        $(J, pe), N ? $(ae, pe, F) : (Q(ge), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: E,
        readonly: H,
        disableIncrement: U,
        incrementButton: X,
        lazyChange: N,
        step: Z,
        modelValue: G,
        onIncrement: J,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || E || H || U || !X) && !V.value) {
        var oe = new nr(L(G)).plus(new nr(L(Z))).toString(), ge = C(oe), pe = L(ge);
        $(J, pe), N ? $(ae, pe, F) : (Q(ge), y("onIncrement"));
      }
    }, O = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (o = window.setTimeout(() => {
        j();
      }, nl));
    }, z = () => {
      var {
        press: E,
        lazyChange: H
      } = e;
      !E || H || (t = window.setTimeout(() => {
        k();
      }, nl));
    }, B = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, b = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, k = () => {
      r = window.setTimeout(() => {
        D(), k();
      }, el);
    }, j = () => {
      a = window.setTimeout(() => {
        S(), j();
      }, el);
    }, Q = (E) => {
      n.value = E;
      var H = L(E);
      $(e["onUpdate:modelValue"], H);
    }, F = (E) => {
      Q(C(String(E))), y("onLazyChange");
    };
    return $(l, P), ie(() => e.modelValue, (E) => {
      Q(C(String(E))), $(e.onChange, L(E));
    }), Q(C(String(e.modelValue))), {
      n: Ap,
      classes: zp,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: V,
      isMin: w,
      validate: h,
      reset: g,
      resetValidation: v,
      handleChange: I,
      decrement: S,
      increment: D,
      pressDecrement: O,
      pressIncrement: z,
      releaseDecrement: B,
      releaseIncrement: b,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
mu.render = Rp;
const Nr = mu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var pS = Nr, pu = 60, hu = pu * 60, gu = hu * 24, Up = gu * 7, La = 1e3, io = pu * La, rl = hu * La, Yp = gu * La, Fp = Up * La, yi = "millisecond", Ma = "second", Ba = "minute", Ia = "hour", Xn = "day", wt = "week", Sn = "month", yu = "quarter", Zn = "year", Na = "date", Hp = "YYYY-MM-DDTHH:mm:ssZ", al = "Invalid Date", jp = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Wp = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Gp = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Uo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, qp = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Uo(t, 2, "0") + ":" + Uo(o, 2, "0");
}, Kp = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, l = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - l : l - t)) || 0);
}, Xp = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Zp = function(n) {
  var r = {
    M: Sn,
    y: Zn,
    w: wt,
    d: Xn,
    D: Na,
    h: Ia,
    m: Ba,
    s: Ma,
    ms: yi,
    Q: yu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Jp = function(n) {
  return n === void 0;
};
const Qp = {
  s: Uo,
  z: qp,
  m: Kp,
  a: Xp,
  p: Zp,
  u: Jp
};
var Ja = "en", Dr = {};
Dr[Ja] = Gp;
var bi = function(n) {
  return n instanceof _t;
}, Bt = function e(n, r, a) {
  var t;
  if (!n)
    return Ja;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Dr[o] && (t = o), r && (Dr[o] = r, t = o);
    var l = n.split("-");
    if (!t && l.length > 1)
      return e(l[0]);
  } else {
    var i = n.name;
    Dr[i] = n, t = i;
  }
  return !a && t && (Ja = t), t || !a && Ja;
}, te = function(n, r) {
  if (bi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new _t(a);
}, _p = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = Qp;
Te.l = Bt;
Te.i = bi;
Te.w = _p;
var xp = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(jp);
    if (t) {
      var o = t[2] - 1 || 0, l = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, l);
    }
  }
  return new Date(r);
}, _t = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = Bt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = xp(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== al;
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
    var o = this, l = Te.u(t) ? !0 : t, i = Te.p(a), s = function(P, V) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, V, P) : new Date(o.$y, V, P), o);
      return l ? w : w.endOf(Xn);
    }, u = function(P, V) {
      var w = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Te.w(o.toDate()[P].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (l ? w : C).slice(V)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (i) {
      case Zn:
        return l ? s(1, 0) : s(31, 11);
      case Sn:
        return l ? s(1, v) : s(0, v + 1);
      case wt: {
        var h = this.$locale().weekStart || 0, y = (d < h ? d + 7 : d) - h;
        return s(l ? f - y : f + (6 - y), v);
      }
      case Xn:
      case Na:
        return u(c + "Hours", 0);
      case Ia:
        return u(c + "Minutes", 1);
      case Ba:
        return u(c + "Seconds", 2);
      case Ma:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, l = Te.p(a), i = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = i + "Date", o[Na] = i + "Date", o[Sn] = i + "Month", o[Zn] = i + "FullYear", o[Ia] = i + "Hours", o[Ba] = i + "Minutes", o[Ma] = i + "Seconds", o[yi] = i + "Milliseconds", o)[l], u = l === Xn ? this.$D + (t - this.$W) : t;
    if (l === Sn || l === Zn) {
      var d = this.clone().set(Na, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Na, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (i === Zn)
      return this.set(Zn, this.$y + a);
    if (i === Xn)
      return s(1);
    if (i === wt)
      return s(7);
    var u = (l = {}, l[Ba] = io, l[Ia] = rl, l[Ma] = La, l)[i] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || al;
    var l = a || Hp, i = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, h = function(w, C, I, S) {
      return w && (w[C] || w(t, l)) || I[C].slice(0, S);
    }, y = function(w) {
      return Te.s(s % 12 || 12, w, "0");
    }, g = c || function(V, w, C) {
      var I = V < 12 ? "AM" : "PM";
      return C ? I.toLowerCase() : I;
    }, P = {
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
      h: y(1),
      hh: y(2),
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
    return l.replace(Wp, function(V, w) {
      return w || P[V] || i.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var l, i = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * io, d = this - s, v = Te.m(this, s);
    return v = (l = {}, l[Zn] = v / 12, l[Sn] = v, l[yu] = v / 3, l[wt] = (d - u) / Fp, l[Xn] = (d - u) / Yp, l[Ia] = d / rl, l[Ba] = d / io, l[Ma] = d / La, l)[i] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Dr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), l = Bt(a, t, !0);
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
}(), bu = _t.prototype;
te.prototype = bu;
[["$ms", yi], ["$s", Ma], ["$m", Ba], ["$H", Ia], ["$W", Xn], ["$M", Sn], ["$y", Zn], ["$D", Na]].forEach(function(e) {
  bu[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, _t, te), e.$i = !0), te;
};
te.locale = Bt;
te.isDayjs = bi;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Dr[Ja];
te.Ls = Dr;
te.p = {};
const wu = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Cu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function eh(e) {
  return ["date", "month"].includes(e);
}
var Ct = [{
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
}], Za = [{
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
}], nh = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: eh
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
  n: rh
} = ee("picker-header");
function ah(e, n) {
  var r = le("var-icon"), a = le("var-button");
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
        De,
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
var Su = x({
  name: "PanelHeader",
  components: {
    VarButton: xe,
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
    } = n, a = M(!1), t = M(0), o = R(() => {
      var i, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return L(v) + t.value;
      var f = (i = He.value.datePickerMonthDict) == null ? void 0 : i[d.index].name;
      return He.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), l = (i) => {
      i === "prev" && e.disabled.left || i === "next" && e.disabled.right || (r("check-date", i), a.value = i === "prev", t.value += i === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: rh,
      reverse: a,
      showDate: o,
      checkDate: l
    };
  }
});
Su.render = ah;
const ku = Su;
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
te.extend(wu);
te.extend(Cu);
var {
  n: ct,
  classes: th
} = ee("month-picker"), {
  n: mt
} = ee("date-picker");
function oh(e, n) {
  var r = le("panel-header"), a = le("var-button");
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
        De,
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
              }, Yo({}, e.buttonProps(t.index)), {
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
var $u = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: ku
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), l = M(0), i = M(null), s = Me({
      left: !1,
      right: !1
    }), u = R(() => e.choose.chooseYear === e.preview.previewYear), d = R(() => e.preview.previewYear === a), v = (V) => {
      var w, C;
      return (w = (C = He.value.datePickerMonthDict) == null ? void 0 : C[V].abbr) != null ? w : "";
    }, f = (V) => {
      var {
        preview: {
          previewYear: w
        },
        componentProps: {
          min: C,
          max: I
        }
      } = e, S = !0, D = !0, O = w + "-" + V;
      return I && (S = te(O).isSameOrBefore(te(I), "month")), C && (D = te(O).isSameOrAfter(te(C), "month")), S && D;
    }, c = (V) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: C,
          chooseRangeMonth: I
        },
        componentProps: {
          type: S,
          range: D
        }
      } = e;
      if (D) {
        if (!I.length)
          return !1;
        var O = te(V).isSameOrBefore(te(I[1]), "month"), z = te(V).isSameOrAfter(te(I[0]), "month");
        return O && z;
      }
      return S === "month" ? w.includes(V) : C.some((B) => B.includes(V));
    }, h = (V) => {
      var {
        choose: {
          chooseMonth: w
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: I,
          color: S,
          multiple: D,
          range: O
        }
      } = e, z = C + "-" + V, B = () => O || D ? c(z) : (w == null ? void 0 : w.index) === V && u.value, b = () => f(V) ? I ? !I(z) : !1 : !0, k = b(), j = () => k ? !0 : O || D ? !c(z) : !u.value || (w == null ? void 0 : w.index) !== V, Q = () => d.value && t === V && e.componentProps.showCurrent ? (O || D || u.value) && k ? !0 : O || D ? !c(z) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, F = () => k ? "" : Q() ? S ?? "" : B() ? "" : mt() + "-color-cover", E = F().startsWith(mt());
      return {
        outline: Q(),
        text: j(),
        color: j() ? "" : S,
        textColor: E ? "" : F(),
        [mt() + "-color-cover"]: E,
        class: th(ct("button"), [k, ct("button--disabled")])
      };
    }, y = (V, w) => {
      var C = w.currentTarget;
      C.classList.contains(ct("button--disabled")) || r("choose-month", V);
    }, g = (V) => {
      o.value = V === "prev", l.value += V === "prev" ? -1 : 1, r("check-preview", "year", V);
    }, P = (V) => {
      i.value.checkDate(V);
    };
    return ie(() => e.preview.previewYear, (V) => {
      var {
        componentProps: {
          min: w,
          max: C
        }
      } = e;
      C && (s.right = !te("" + (L(V) + 1)).isSameOrBefore(te(C), "year")), w && (s.left = !te("" + (L(V) - 1)).isSameOrAfter(te(w), "year"));
    }, {
      immediate: !0
    }), {
      n: ct,
      nDate: mt,
      pack: He,
      MONTH_LIST: Ct,
      headerEl: i,
      reverse: o,
      panelKey: l,
      panelBtnDisabled: s,
      forwardRef: P,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: g
    };
  }
});
$u.render = oh;
const ih = $u;
var {
  n: tl,
  classes: lh
} = ee("year-picker"), sh = ["onClick"];
function uh(e, n) {
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
        sh
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Tu = x({
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
    return en(() => {
      var o = document.querySelector("." + tl("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: tl,
      classes: lh,
      yearList: a,
      chooseYear: t,
      toNumber: L
    };
  }
});
Tu.render = uh;
const dh = Tu;
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
te.extend(wu);
te.extend(Cu);
var {
  n: Va,
  classes: vh
} = ee("day-picker"), {
  n: pt
} = ee("date-picker");
function fh(e, n) {
  var r = le("panel-header"), a = le("var-button");
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
        De,
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
                }, Fo({}, e.buttonProps(t)), {
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
var Ou = x({
  name: "DayPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: ku
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
    } = n, [a, t, o] = e.current.split("-"), l = M([]), i = M(!1), s = M(0), u = M(null), d = Me({
      left: !1,
      right: !1
    }), v = R(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = R(() => {
      var O;
      return e.choose.chooseYear === e.preview.previewYear && ((O = e.choose.chooseMonth) == null ? void 0 : O.index) === e.preview.previewMonth.index;
    }), c = R(() => {
      var O = Za.findIndex((z) => z.index === e.componentProps.firstDayOfWeek);
      return O === -1 || O === 0 ? Za : Za.slice(O).concat(Za.slice(0, O));
    }), h = (O) => {
      var z, B;
      return (z = (B = He.value.datePickerWeekDict) == null ? void 0 : B[O].abbr) != null ? z : "";
    }, y = (O) => O > 0 ? O : "", g = () => {
      var {
        preview: {
          previewMonth: O,
          previewYear: z
        }
      } = e, B = te(z + "-" + O.index).daysInMonth(), b = te(z + "-" + O.index + "-01").day(), k = c.value.findIndex((j) => j.index === "" + b);
      l.value = [...Array(k).fill(-1), ...Array.from(Array(B + 1).keys())].filter((j) => j);
    }, P = () => {
      var {
        preview: {
          previewYear: O,
          previewMonth: z
        },
        componentProps: {
          max: B,
          min: b
        }
      } = e;
      if (B) {
        var k = O + "-" + (L(z.index) + 1);
        d.right = !te(k).isSameOrBefore(te(B), "month");
      }
      if (b) {
        var j = O + "-" + (L(z.index) - 1);
        d.left = !te(j).isSameOrAfter(te(b), "month");
      }
    }, V = (O) => {
      var {
        preview: {
          previewYear: z,
          previewMonth: B
        },
        componentProps: {
          min: b,
          max: k
        }
      } = e, j = !0, Q = !0, F = z + "-" + B.index + "-" + O;
      return k && (j = te(F).isSameOrBefore(te(k), "day")), b && (Q = te(F).isSameOrAfter(te(b), "day")), j && Q;
    }, w = (O) => {
      var {
        choose: {
          chooseDays: z,
          chooseRangeDay: B
        },
        componentProps: {
          range: b
        }
      } = e;
      if (b) {
        if (!B.length)
          return !1;
        var k = te(O).isSameOrBefore(te(B[1]), "day"), j = te(O).isSameOrAfter(te(B[0]), "day");
        return k && j;
      }
      return z.includes(O);
    }, C = (O) => {
      if (O < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Va("button")
        };
      var {
        choose: {
          chooseDay: z
        },
        preview: {
          previewYear: B,
          previewMonth: b
        },
        componentProps: {
          allowedDates: k,
          color: j,
          multiple: Q,
          range: F
        }
      } = e, E = B + "-" + b.index + "-" + O, H = () => F || Q ? w(E) : L(z) === O && f.value, U = () => V(O) ? k ? !k(E) : !1 : !0, X = U(), N = () => X ? !0 : F || Q ? !w(E) : !f.value || L(z) !== O, Z = () => v.value && L(o) === O && e.componentProps.showCurrent ? (F || Q || f.value) && X ? !0 : F || Q ? !w(E) : f.value ? z !== o : !0 : !1, G = () => X ? "" : Z() ? j ?? "" : H() ? "" : pt() + "-color-cover", J = G().startsWith(pt());
      return {
        text: N(),
        outline: Z(),
        textColor: J ? "" : G(),
        [pt() + "-color-cover"]: J,
        class: vh(Va("button"), Va("button--usable"), [X, Va("button--disabled")])
      };
    }, I = (O) => {
      i.value = O === "prev", s.value += O === "prev" ? -1 : 1, r("check-preview", "month", O);
    }, S = (O, z) => {
      var B = z.currentTarget;
      B.classList.contains(Va("button--disabled")) || r("choose-day", O);
    }, D = (O) => {
      u.value.checkDate(O);
    };
    return en(() => {
      g(), P();
    }), ie(() => e.preview, () => {
      g(), P();
    }), {
      n: Va,
      nDate: pt,
      days: l,
      reverse: i,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: h,
      checkDate: I,
      chooseDay: S,
      buttonProps: C
    };
  }
});
Ou.render = fh;
const ch = Ou;
var {
  n: mh,
  classes: ph
} = ee("date-picker");
function hh(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
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
          De,
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
              )]) : W(e.$slots, "date", ai(Ee({
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
        De,
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
var Pu = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: ih,
    YearPickerPanel: dh,
    DayPickerPanel: ch
  },
  props: nh,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [l, i] = o.split("-"), s = Ct.find((se) => se.index === i), u = M(!1), d = M(!1), v = M(!0), f = M(), c = M(), h = M(), y = M(s), g = M(l), P = M(!1), V = M([]), w = M([]), C = M([]), I = M([]), S = M(null), D = M(null), O = Me({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), z = R(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: h.value,
      chooseMonths: V.value,
      chooseDays: w.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: I.value
    })), B = R(() => ({
      previewMonth: y.value,
      previewYear: g.value
    })), b = R(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, ke;
        ce = (Ce = (ke = He.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + V.value.length + He.value.datePickerSelected : ce;
    }), k = R(() => {
      var se, ye, ce, Ce, {
        multiple: ke,
        range: Le
      } = e;
      if (Le) {
        var Ze = I.value.map((ao) => te(ao).format("YYYY-MM-DD"));
        return Ze.length ? Ze[0] + " ~ " + Ze[1] : "";
      }
      if (ke)
        return "" + w.value.length + He.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var mn = te(c.value + "-" + f.value.index + "-" + h.value).day(), Pa = Za.find((ao) => ao.index === "" + mn), Mi = (se = (ye = He.value.datePickerWeekDict) == null ? void 0 : ye[Pa.index].name) != null ? se : "", fv = (ce = (Ce = He.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", cv = ha(h.value, 2, "0");
      return He.value.lang === "zh-CN" ? f.value.index + "-" + cv + " " + Mi.slice(0, 3) : Mi.slice(0, 3) + ", " + fv.slice(0, 3) + " " + h.value;
    }), j = R(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = R(() => !e.touchable || ["", "year"].includes(j.value)), F = R(() => {
      var se, ye, ce, Ce, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), Le = h.value ? ha(h.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = c.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: Le
      };
    }), E = R(() => z.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), H = R(() => c.value === g.value), U = R(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), X = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
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
        var se = j.value === "month" ? S : D;
        Wt(() => {
          se.value.forwardRef(a), Ei();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? C : I;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), ke = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? V : w, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = ce.value.map((Ze) => te(Ze).format(Ce)), Le = ke.findIndex((Ze) => Ze === se);
      Le === -1 ? ke.push(se) : ke.splice(Le, 1), $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
    }, ge = (se, ye) => !c.value || !f.value ? !1 : H.value ? se === "month" ? ye.index < f.value.index : U.value ? ye < L(h.value) : f.value.index > y.value.index : c.value > g.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": Le
      } = e;
      if (!(se < 0 || ye)) {
        P.value = ge("day", se);
        var Ze = g.value + "-" + y.value.index + "-" + se, mn = te(Ze).format("YYYY-MM-DD");
        ce ? ae(mn, "day") : Ce ? oe(mn, "day") : ($(Le, mn), $(ke, mn));
      }
    }, Fe = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: ke,
        onChange: Le,
        onPreview: Ze,
        "onUpdate:modelValue": mn
      } = e;
      if (P.value = ge("month", se), ye === "month" && !ce) {
        var Pa = g.value + "-" + se.index;
        Ce ? ae(Pa, "month") : ke ? oe(Pa, "month") : ($(mn, Pa), $(Le, Pa));
      } else
        y.value = se, $(Ze, L(g.value), L(y.value.index));
      d.value = !1;
    }, nn = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, $(e.onPreview, L(g.value), L(y.value.index));
    }, sn = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (L(g.value) + ce);
      else {
        var Ce = L(y.value.index) + ce;
        Ce < 1 && (g.value = "" + (L(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (L(g.value) + 1), Ce = 1), y.value = Ct.find((ke) => L(ke.index) === Ce);
      }
      $(e.onPreview, L(g.value), L(y.value.index));
    }, ze = () => (e.multiple || e.range) && !we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, cn = (se) => we(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, uv = (se, ye) => {
      var ce = ye === "month" ? C : I, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((mn) => te(mn).format(Ce)).slice(0, 2), Le = ce.value.some((mn) => cn(mn));
      if (!Le) {
        ce.value = ke;
        var Ze = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Ze && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, dv = (se, ye) => {
      var ce = ye === "month" ? V : w, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Le) => te(Le).format(Ce))));
      ce.value = ke.filter((Le) => Le !== "Invalid Date");
    }, vv = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!cn(ye)) {
        var [ce, Ce, ke] = ye.split("-"), Le = Ct.find((Ze) => Ze.index === Ce);
        f.value = Le, c.value = ce, h.value = ke, y.value = Le, g.value = ce;
      }
    }, Ei = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!ze() || cn(se) || !se))
        if (e.range) {
          if (!we(se))
            return;
          v.value = se.length !== 1, uv(se, e.type);
        } else if (e.multiple) {
          if (!we(se))
            return;
          dv(se, e.type);
        } else
          vv(se);
    }, {
      immediate: !0
    }), ie(j, Ei), {
      n: mh,
      classes: ph,
      monthPanelEl: S,
      dayPanelEl: D,
      reverse: P,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: b,
      getDateTitle: k,
      getPanelType: j,
      getChoose: z,
      getPreview: B,
      componentProps: O,
      slotProps: F,
      formatRange: E,
      clickEl: X,
      handleTouchstart: N,
      handleTouchmove: G,
      handleTouchend: J,
      getChooseDay: pe,
      getChooseMonth: Fe,
      getChooseYear: nn,
      checkPreview: sn
    };
  }
});
Pu.render = hh;
const Ar = Pu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var hS = Ar;
function Ho() {
  return Ho = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ho.apply(this, arguments);
}
function gh(e) {
  return ["left", "center", "right"].includes(e);
}
var yh = Ho({
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
    validator: gh
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
}, Ke(lt, [
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
function jo() {
  return jo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, jo.apply(this, arguments);
}
var {
  n: bh,
  classes: wh
} = ee("dialog");
function Ch(e, n) {
  var r = le("var-button"), a = le("var-popup");
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
          style: jo({
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
var Vu = x({
  name: "VarDialog",
  components: {
    VarPopup: hn,
    VarButton: xe
  },
  inheritAttrs: !1,
  props: yh,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => $(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: i,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if ($(s), !!i) {
        if (u != null) {
          u("close", a);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: i,
        onConfirm: s
      } = e;
      if ($(s), i != null) {
        i("confirm", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    }, l = () => {
      var {
        onBeforeClose: i,
        onCancel: s
      } = e;
      if ($(s), i != null) {
        i("cancel", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (i) => {
      n.value = i;
    }, {
      immediate: !0
    }), ie(() => e.closeOnClickOverlay, (i) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = i;
    }, {
      immediate: !0
    }), {
      n: bh,
      classes: wh,
      pack: He,
      dt: Ht,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: l,
      toSizeUnit: he
    };
  }
});
Vu.render = Ch;
const lr = Vu;
function It() {
  return It = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, It.apply(this, arguments);
}
var Qn, Nt = {};
function Sh(e) {
  return e === void 0 && (e = {}), Ge(e) ? It({}, Nt, {
    message: e
  }) : It({}, Nt, e);
}
function ba(e) {
  return it() ? new Promise((n) => {
    ba.close();
    var r = Sh(e), a = Me(r);
    a.teleport = "body", Qn = a;
    var {
      unmountInstance: t
    } = qa(lr, a, {
      onConfirm: () => {
        $(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        $(a.onCancel), n("cancel");
      },
      onClose: () => {
        $(a.onClose), n("close");
      },
      onClosed: () => {
        $(a.onClosed), t(), Qn === a && (Qn = null);
      },
      onRouteChange: () => {
        t(), Qn === a && (Qn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function kh(e) {
  Nt = e;
}
function $h() {
  Nt = {};
}
function Th() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Ve().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ba, {
  setDefaultOptions: kh,
  resetDefaultOptions: $h,
  close: Th
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
ba.install = function(e) {
  e.component(lr.name, lr);
};
ba.Component = lr;
var gS = lr, Oh = {
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
function Da() {
  return Da = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Da.apply(this, arguments);
}
var {
  n: Ph,
  classes: Vh
} = ee("divider");
function Eh(e, n) {
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
var Eu = x({
  name: "VarDivider",
  props: Oh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Me({
      withText: !1
    }), t = R(() => co(e.inset) ? e.inset : !0), o = R(() => {
      var {
        inset: i,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (co(i) || i === 0)
        return Da({}, d);
      var v = L(i), f = Math.abs(v) + (i + "").replace(v + "", "");
      return s ? Da({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Da({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), l = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return en(() => {
      l();
    }), Yt(() => {
      l();
    }), Da({
      n: Ph,
      classes: Vh
    }, yv(a), {
      style: o,
      isInset: t
    });
  }
});
Eu.render = Eh;
const zr = Eu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var yS = zr, Mh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function St(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Mh[n];
  });
}
var An = "top", mr = "bottom", wa = "right", sr = "left", xt = "auto", eo = [An, mr, wa, sr], no = "start", rt = "end", Bh = "clippingParents", Mu = "viewport", Ka = "popper", Ih = "reference", ol = /* @__PURE__ */ eo.reduce(function(e, n) {
  return e.concat([n + "-" + no, n + "-" + rt]);
}, []), Bu = /* @__PURE__ */ [].concat(eo, [xt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + no, n + "-" + rt]);
}, []), Nh = "beforeRead", Dh = "read", Ah = "afterRead", zh = "beforeMain", Lh = "main", Rh = "afterMain", Uh = "beforeWrite", Yh = "write", Fh = "afterWrite", Wo = [Nh, Dh, Ah, zh, Lh, Rh, Uh, Yh, Fh];
function zn(e) {
  return e.split("-")[0];
}
var Hh = {
  start: "end",
  end: "start"
};
function il(e) {
  return e.replace(/start|end/g, function(n) {
    return Hh[n];
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
function wi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function hr(e) {
  return ((Ca(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Qa = Math.max, ll = Math.min, Ra = Math.round;
function Go() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Iu() {
  return !/^((?!chrome|android).)*safari/i.test(Go());
}
function Ua(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && gn(e) && (t = e.offsetWidth > 0 && Ra(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ra(a.height) / e.offsetHeight || 1);
  var l = Ca(e) ? Cn(e) : window, i = l.visualViewport, s = !Iu() && r, u = (a.left + (s && i ? i.offsetLeft : 0)) / t, d = (a.top + (s && i ? i.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function Ci(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Si(e) {
  return Ua(hr(e)).left + Ci(e).scrollLeft;
}
function jh(e, n) {
  var r = Cn(e), a = hr(e), t = r.visualViewport, o = a.clientWidth, l = a.clientHeight, i = 0, s = 0;
  if (t) {
    o = t.width, l = t.height;
    var u = Iu();
    (u || !u && n === "fixed") && (i = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: l,
    x: i + Si(e),
    y: s
  };
}
function Pn(e) {
  return Cn(e).getComputedStyle(e);
}
function Wh(e) {
  var n, r = hr(e), a = Ci(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = Qa(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), l = Qa(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), i = -a.scrollLeft + Si(e), s = -a.scrollTop;
  return Pn(t || r).direction === "rtl" && (i += Qa(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: l,
    x: i,
    y: s
  };
}
function Bn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ro(e) {
  return Bn(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (wi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    hr(e)
  );
}
function ki(e) {
  var n = Pn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Nu(e) {
  return ["html", "body", "#document"].indexOf(Bn(e)) >= 0 ? e.ownerDocument.body : gn(e) && ki(e) ? e : Nu(ro(e));
}
function _a(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Nu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), l = t ? [o].concat(o.visualViewport || [], ki(a) ? a : []) : a, i = n.concat(l);
  return t ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(_a(ro(l)))
  );
}
function Gh(e) {
  return ["table", "td", "th"].indexOf(Bn(e)) >= 0;
}
function sl(e) {
  return !gn(e) || // https://github.com/popperjs/popper-core/issues/837
  Pn(e).position === "fixed" ? null : e.offsetParent;
}
function qh(e) {
  var n = /firefox/i.test(Go()), r = /Trident/i.test(Go());
  if (r && gn(e)) {
    var a = Pn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = ro(e);
  for (wi(t) && (t = t.host); gn(t) && ["html", "body"].indexOf(Bn(t)) < 0; ) {
    var o = Pn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function $i(e) {
  for (var n = Cn(e), r = sl(e); r && Gh(r) && Pn(r).position === "static"; )
    r = sl(r);
  return r && (Bn(r) === "html" || Bn(r) === "body" && Pn(r).position === "static") ? n : r || qh(e) || n;
}
function Kh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && wi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function qo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Xh(e, n) {
  var r = Ua(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ul(e, n, r) {
  return n === Mu ? qo(jh(e, r)) : Ca(n) ? Xh(n, r) : qo(Wh(hr(e)));
}
function Zh(e) {
  var n = _a(ro(e)), r = ["absolute", "fixed"].indexOf(Pn(e).position) >= 0, a = r && gn(e) ? $i(e) : e;
  return Ca(a) ? n.filter(function(t) {
    return Ca(t) && Kh(t, a) && Bn(t) !== "body";
  }) : [];
}
function Jh(e, n, r, a) {
  var t = n === "clippingParents" ? Zh(e) : [].concat(n), o = [].concat(t, [r]), l = o[0], i = o.reduce(function(s, u) {
    var d = ul(e, u, a);
    return s.top = Qa(d.top, s.top), s.right = ll(d.right, s.right), s.bottom = ll(d.bottom, s.bottom), s.left = Qa(d.left, s.left), s;
  }, ul(e, l, a));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function at(e) {
  return e.split("-")[1];
}
function Qh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Du(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? zn(a) : null, o = a ? at(a) : null, l = n.x + n.width / 2 - r.width / 2, i = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case An:
      s = {
        x: l,
        y: n.y - r.height
      };
      break;
    case mr:
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
    case sr:
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
  var u = t ? Qh(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case no:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case rt:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function _h() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function xh(e) {
  return Object.assign({}, _h(), e);
}
function eg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Au(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, l = o === void 0 ? e.strategy : o, i = r.boundary, s = i === void 0 ? Bh : i, u = r.rootBoundary, d = u === void 0 ? Mu : u, v = r.elementContext, f = v === void 0 ? Ka : v, c = r.altBoundary, h = c === void 0 ? !1 : c, y = r.padding, g = y === void 0 ? 0 : y, P = xh(typeof g != "number" ? g : eg(g, eo)), V = f === Ka ? Ih : Ka, w = e.rects.popper, C = e.elements[h ? V : f], I = Jh(Ca(C) ? C : C.contextElement || hr(e.elements.popper), s, d, l), S = Ua(e.elements.reference), D = Du({
    reference: S,
    element: w,
    strategy: "absolute",
    placement: t
  }), O = qo(Object.assign({}, w, D)), z = f === Ka ? O : S, B = {
    top: I.top - z.top + P.top,
    bottom: z.bottom - I.bottom + P.bottom,
    left: I.left - z.left + P.left,
    right: z.right - I.right + P.right
  }, b = e.modifiersData.offset;
  if (f === Ka && b) {
    var k = b[t];
    Object.keys(B).forEach(function(j) {
      var Q = [wa, mr].indexOf(j) >= 0 ? 1 : -1, F = [An, mr].indexOf(j) >= 0 ? "y" : "x";
      B[j] += k[F] * Q;
    });
  }
  return B;
}
function ng(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, l = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Bu : s, d = at(a), v = d ? i ? ol : ol.filter(function(h) {
    return at(h) === d;
  }) : eo, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, y) {
    return h[y] = Au(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: l
    })[zn(y)], h;
  }, {});
  return Object.keys(c).sort(function(h, y) {
    return c[h] - c[y];
  });
}
function rg(e) {
  if (zn(e) === xt)
    return [];
  var n = St(e);
  return [il(e), n, il(n)];
}
function ag(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, l = r.altAxis, i = l === void 0 ? !0 : l, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, y = r.allowedAutoPlacements, g = n.options.placement, P = zn(g), V = P === g, w = s || (V || !h ? [St(g)] : rg(g)), C = [g].concat(w).reduce(function(ae, oe) {
      return ae.concat(zn(oe) === xt ? ng(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : oe);
    }, []), I = n.rects.reference, S = n.rects.popper, D = /* @__PURE__ */ new Map(), O = !0, z = C[0], B = 0; B < C.length; B++) {
      var b = C[B], k = zn(b), j = at(b) === no, Q = [An, mr].indexOf(k) >= 0, F = Q ? "width" : "height", E = Au(n, {
        placement: b,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), H = Q ? j ? wa : sr : j ? mr : An;
      I[F] > S[F] && (H = St(H));
      var U = St(H), X = [];
      if (o && X.push(E[k] <= 0), i && X.push(E[H] <= 0, E[U] <= 0), X.every(function(ae) {
        return ae;
      })) {
        z = b, O = !1;
        break;
      }
      D.set(b, X);
    }
    if (O)
      for (var N = h ? 3 : 1, Z = function(oe) {
        var ge = C.find(function(pe) {
          var Fe = D.get(pe);
          if (Fe)
            return Fe.slice(0, oe).every(function(nn) {
              return nn;
            });
        });
        if (ge)
          return z = ge, "break";
      }, G = N; G > 0; G--) {
        var J = Z(G);
        if (J === "break")
          break;
      }
    n.placement !== z && (n.modifiersData[a]._skip = !0, n.placement = z, n.reset = !0);
  }
}
const tg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ag,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function og(e, n, r) {
  var a = zn(e), t = [sr, An].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, l = o[0], i = o[1];
  return l = l || 0, i = (i || 0) * t, [sr, wa].indexOf(a) >= 0 ? {
    x: i,
    y: l
  } : {
    x: l,
    y: i
  };
}
function ig(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, l = Bu.reduce(function(d, v) {
    return d[v] = og(v, n.rects, o), d;
  }, {}), i = l[n.placement], s = i.x, u = i.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = l;
}
const lg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ig
};
function sg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function ug(e) {
  return e === Cn(e) || !gn(e) ? Ci(e) : sg(e);
}
function dg(e) {
  var n = e.getBoundingClientRect(), r = Ra(n.width) / e.offsetWidth || 1, a = Ra(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function vg(e, n, r) {
  r === void 0 && (r = !1);
  var a = gn(n), t = gn(n) && dg(n), o = hr(n), l = Ua(e, t, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Bn(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ki(o)) && (i = ug(n)), gn(n) ? (s = Ua(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = Si(o))), {
    x: l.left + i.scrollLeft - s.x,
    y: l.top + i.scrollTop - s.y,
    width: l.width,
    height: l.height
  };
}
function fg(e) {
  var n = Ua(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function cg(e) {
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
function mg(e) {
  var n = cg(e);
  return Wo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function pg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function qn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var gr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', hg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', dl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function gg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), dl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(qn(gr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(qn(gr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Wo.indexOf(n.phase) < 0 && console.error(qn(gr, n.name, '"phase"', "either " + Wo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(qn(gr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(qn(gr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(qn(gr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(qn(gr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + dl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(qn(hg, String(n.name), a, a));
      });
    });
  });
}
function yg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function bg(e) {
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
var vl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", wg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", fl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function cl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Cg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? fl : t;
  return function(i, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, fl, o),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(P) {
        var V = typeof P == "function" ? P(d.options) : P;
        y(), d.options = Object.assign({}, o, d.options, V), d.scrollParents = {
          reference: Ca(i) ? _a(i) : i.contextElement ? _a(i.contextElement) : [],
          popper: _a(s)
        };
        var w = mg(bg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(b) {
          return b.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = yg([].concat(w, d.options.modifiers), function(b) {
            var k = b.name;
            return k;
          });
          if (gg(C), zn(d.options.placement) === xt) {
            var I = d.orderedModifiers.find(function(b) {
              var k = b.name;
              return k === "flip";
            });
            I || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = Pn(s), D = S.marginTop, O = S.marginRight, z = S.marginBottom, B = S.marginLeft;
          [D, O, z, B].some(function(b) {
            return parseFloat(b);
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
          var P = d.elements, V = P.reference, w = P.popper;
          if (!cl(V, w)) {
            process.env.NODE_ENV !== "production" && console.error(vl);
            return;
          }
          d.rects = {
            reference: vg(V, $i(w), d.options.strategy === "fixed"),
            popper: fg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(b) {
            return d.modifiersData[b.name] = Object.assign({}, b.data);
          });
          for (var C = 0, I = 0; I < d.orderedModifiers.length; I++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(wg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, I = -1;
              continue;
            }
            var S = d.orderedModifiers[I], D = S.fn, O = S.options, z = O === void 0 ? {} : O, B = S.name;
            typeof D == "function" && (d = D({
              state: d,
              options: z,
              name: B,
              instance: c
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: pg(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!cl(i, s))
      return process.env.NODE_ENV !== "production" && console.error(vl), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      d.orderedModifiers.forEach(function(g) {
        var P = g.name, V = g.options, w = V === void 0 ? {} : V, C = g.effect;
        if (typeof C == "function") {
          var I = C({
            state: d,
            name: P,
            instance: c,
            options: w
          }), S = function() {
          };
          v.push(I || S);
        }
      });
    }
    function y() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return c;
  };
}
var ht = {
  passive: !0
};
function Sg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, l = a.resize, i = l === void 0 ? !0 : l, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, ht);
  }), i && s.addEventListener("resize", r.update, ht), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, ht);
    }), i && s.removeEventListener("resize", r.update, ht);
  };
}
const kg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Sg,
  data: {}
};
function $g(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Du({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Tg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $g,
  data: {}
};
var Og = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Pg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ra(n * t) / t || 0,
    y: Ra(r * t) / t || 0
  };
}
function ml(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, l = e.offsets, i = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = l.x, c = f === void 0 ? 0 : f, h = l.y, y = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = g.x, y = g.y;
  var P = l.hasOwnProperty("x"), V = l.hasOwnProperty("y"), w = sr, C = An, I = window;
  if (u) {
    var S = $i(r), D = "clientHeight", O = "clientWidth";
    if (S === Cn(r) && (S = hr(r), Pn(S).position !== "static" && i === "absolute" && (D = "scrollHeight", O = "scrollWidth")), S = S, t === An || (t === sr || t === wa) && o === rt) {
      C = mr;
      var z = v && S === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[D]
      );
      y -= z - a.height, y *= s ? 1 : -1;
    }
    if (t === sr || (t === An || t === mr) && o === rt) {
      w = wa;
      var B = v && S === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[O]
      );
      c -= B - a.width, c *= s ? 1 : -1;
    }
  }
  var b = Object.assign({
    position: i
  }, u && Og), k = d === !0 ? Pg({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = k.x, y = k.y, s) {
    var j;
    return Object.assign({}, b, (j = {}, j[C] = V ? "0" : "", j[w] = P ? "0" : "", j.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", j));
  }
  return Object.assign({}, b, (n = {}, n[C] = V ? y + "px" : "", n[w] = P ? c + "px" : "", n.transform = "", n));
}
function Vg(e) {
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
    variation: at(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, ml(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: l,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, ml(Object.assign({}, d, {
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
  fn: Vg,
  data: {}
};
function Mg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !gn(o) || !Bn(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(l) {
      var i = t[l];
      i === !1 ? o.removeAttribute(l) : o.setAttribute(l, i === !0 ? "" : i);
    }));
  });
}
function Bg(e) {
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
const Ig = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Mg,
  effect: Bg,
  requires: ["computeStyles"]
};
var Ng = [kg, Tg, Eg, Ig], Dg = /* @__PURE__ */ Cg({
  defaultModifiers: Ng
});
function Dt() {
  return Dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Dt.apply(this, arguments);
}
function pl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hl(e) {
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
function zu(e) {
  var n = M(null), r = M(null), a = M(!1), t = M({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = st(() => a.value, 1), l = null, i = !1, s = !1, u = () => {
    var {
      width: S,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(S),
      height: Ne(D)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, C());
  }, v = /* @__PURE__ */ function() {
    var S = hl(function* () {
      e.trigger === "hover" && (s = !1, yield En(), !i && I());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (i = !0);
  }, c = /* @__PURE__ */ function() {
    var S = hl(function* () {
      e.trigger === "hover" && (i = !1, yield En(), !s && I());
    });
    return function() {
      return S.apply(this, arguments);
    };
  }(), h = () => {
    C();
  }, y = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  }, g = () => {
    e.trigger === "click" && y();
  }, P = () => {
    u();
    var S = {
      x: Ne(e.offsetX),
      y: Ne(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: S.x,
          distance: S.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: S.x,
          distance: -S.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: S.y,
          distance: S.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: S.y,
          distance: -S.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: S.y,
          distance: -S.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: S.x,
          distance: -S.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: S.x,
          distance: S.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: S.y,
          distance: S.x
        };
    }
  }, V = () => {
    var {
      placement: S,
      skidding: D,
      distance: O
    } = P(), z = [Dt({}, tg, {
      enabled: a.value
    }), Dt({}, lg, {
      options: {
        offset: [D, O]
      }
    })];
    return {
      placement: S,
      modifiers: z
    };
  }, w = () => {
    l.setOptions(V());
  }, C = () => {
    var {
      disabled: S
    } = e;
    S || (a.value = !0, $(e["onUpdate:show"], !0));
  }, I = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  };
  return Lv(n, "click", g), ie(() => e.show, (S) => {
    a.value = S ?? !1;
  }, {
    immediate: !0
  }), ie(() => e.offsetX, w), ie(() => e.offsetY, w), ie(() => e.placement, w), ie(() => a.value, (S) => {
    S ? (w(), $(e.onOpen)) : $(e.onClose);
  }), ie(() => e.disabled, I), zt(() => {
    l = Dg(n.value, r.value, V());
  }), Ha(() => {
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
    handlePopoverClose: y,
    handlePopoverMouseenter: f,
    handlePopoverMouseleave: c,
    resize: w,
    open: C,
    close: I
  };
}
function Ag(e) {
  return ["click", "hover"].includes(e);
}
function zg(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Lg(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Rg = {
  type: {
    type: String,
    default: "default",
    validator: Lg
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
    validator: Ag
  },
  placement: {
    type: String,
    default: "bottom",
    validator: zg
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
  n: Ug,
  classes: Yg
} = ee("tooltip");
function Fg(e, n) {
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
      ja,
      {
        to: e.teleport
      },
      [re(
        De,
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
              onClick: n[0] || (n[0] = Vn(() => {
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
          ), [[Wa, e.show]])]),
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
var Lu = x({
  name: "VarTooltip",
  props: Rg,
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
    } = zu(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Ug,
      classes: Yg,
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
Lu.render = Fg;
const ur = Lu;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var bS = ur;
function Hg(e) {
  return ["click"].includes(e);
}
var jg = {
  expandTrigger: {
    type: String,
    validator: Hg
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
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
var {
  n: Wg,
  classes: Gg
} = ee("ellipsis"), qg = {
  key: 0
};
function Kg(e, n) {
  var r = le("var-tooltip");
  return p(), me(
    r,
    ai(Kl(e.tooltip)),
    {
      content: ve(() => [W(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (p(), T(
          "span",
          qg,
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
var Ru = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: ur
  },
  props: jg,
  setup(e) {
    var n = M(!1), r = R(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = R(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : Ko({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: Wg,
      classes: Gg,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Ru.render = Kg;
const Lr = Ru;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var wS = Lr;
function Xg(e) {
  return ["start", "end"].includes(e);
}
var Zg = {
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
    validator: Xg
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function gl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Jg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        gl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        gl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Qg
} = ee("form");
function _g(e, n) {
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
var Uu = x({
  name: "VarForm",
  props: Zg,
  setup(e) {
    var n = R(() => e.disabled), r = R(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = lm(), o = (d, v) => {
      setTimeout(() => {
        var f = Oa(v), c = f === window ? 0 : Ri(f), h = Ri(v) - c - Ne(e.scrollToErrorOffsetY);
        xa(f, {
          top: h,
          animation: mo
        });
      }, 300);
    }, l = /* @__PURE__ */ function() {
      var d = Jg(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: P
          } = g;
          return P();
        }));
        if (e.scrollToError) {
          var [, f] = $v(v, (g) => g === !1, e.scrollToError), c = f > -1;
          if (c) {
            var h, y = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(f, y);
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
      n: Qg,
      validate: l,
      reset: i,
      resetValidation: s
    };
  }
});
Uu.render = _g;
const Ln = Uu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
Ln.useValidation = bn;
Ln.useForm = wn;
var CS = Ln;
function Yu(e) {
  if (!e)
    return !1;
  var n = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return !!(e === "desktop" && n || e === "mobile" && !n);
}
function xg(e) {
  var n = e.getAttribute("style");
  return n ? n.split(";").filter(Boolean).reduce((r, a) => {
    var [t, o] = a.split(":").map((l) => l.trim());
    return r[Zl(t)] = o, r;
  }, {}) : {};
}
function ey(e) {
  var {
    value: n
  } = e._hover, r = xg(e);
  Object.keys(n).forEach((a) => {
    var t = Zl(a), o = n[t];
    o != null && r[t] && (e._hover.rawStyle[t] = r[t]);
  });
}
function Ti(e, n) {
  Object.keys(n).forEach((r) => {
    var a = n[r];
    a != null && (e.style[r] = a);
  });
}
function ny(e) {
  Object.keys(e._hover.value).forEach((n) => {
    e.style[n] = "";
  });
}
function Fu(e) {
  ny(e), Ti(e, e._hover.rawStyle), e._hover.rawStyle = {};
}
function Hu() {
  var {
    value: e
  } = this._hover;
  if (this._hover.hovering = !0, oi(e)) {
    e(this._hover.hovering);
    return;
  }
  Ti(this, e);
}
function ju() {
  if (this._hover.hovering = !1, oi(this._hover.value)) {
    this._hover.value(this._hover.hovering);
    return;
  }
  Fu(this);
}
function Wu(e, n) {
  var r, a, {
    arg: t,
    value: o
  } = n;
  Yu(t) || (e._hover = {
    value: o,
    hovering: (r = (a = e._hover) == null ? void 0 : a.hovering) != null ? r : !1,
    rawStyle: {}
  }, ey(e), e.addEventListener("mouseenter", Hu), e.addEventListener("mouseleave", ju));
}
function Gu(e, n) {
  Yu(n.arg) || (Fu(e), e.removeEventListener("mouseenter", Hu), e.removeEventListener("mouseleave", ju));
}
function ry(e, n) {
  Gu(e, n);
}
function ay(e, n) {
  return !oi(n.value) && e._hover.hovering;
}
function ty(e, n) {
  Wu(e, n), ay(e, n) && Ti(e, n.value);
}
var qu = {
  mounted: Wu,
  unmounted: Gu,
  beforeUpdate: ry,
  updated: ty,
  install(e) {
    e.directive("hover", this);
  }
}, SS = qu;
const Xo = qu;
function oy(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var iy = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: oy,
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
  n: ly,
  classes: sy
} = ee("image"), uy = ["alt", "title", "lazy-error", "lazy-loading"], dy = ["alt", "title", "src"];
function vy(e, n) {
  var r = Ye("lazy"), a = Ye("ripple");
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
      uy
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
      dy
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Ku = x({
  name: "VarImage",
  directives: {
    Lazy: et,
    Ripple: Ae
  },
  props: iy,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: l,
        onLoad: i,
        onError: s
      } = e;
      l ? (o._lazy.state === "success" && $(i, t), o._lazy.state === "error" && $(s, t)) : $(i, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: l
      } = e;
      !o && $(l, t);
    }, a = (t) => {
      $(e.onClick, t);
    };
    return {
      n: ly,
      classes: sy,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
Ku.render = vy;
const Rr = Ku;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var kS = Rr, Xu = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Zu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function fy() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Xu), {
    length: r
  } = vn(Zu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Ju = {
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
function yl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        yl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        yl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var my = 250, py = 20, {
  n: hy,
  classes: gy
} = ee("swipe"), yy = ["onClick"];
function by(e, n) {
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
          yy
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
var Qu = x({
  name: "VarSwipe",
  props: Ju,
  setup(e) {
    var n = M(null), r = M(0), a = R(() => e.vertical), t = M(0), o = M(0), l = M(!1), i = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = fy(), v = !1, f = -1, c, h, y, g, P, V = (N) => s.find((Z) => {
      var {
        index: G
      } = Z;
      return G.value === N;
    }), w = () => {
      e.loop && (o.value >= 0 && V(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && V(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (V(d.value - 1).setTranslate(0), V(0).setTranslate(0)));
    }, C = (N) => {
      var Z = _e(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: G
      } = e;
      return Z <= -1 ? G ? -1 : 0 : Z >= d.value ? G ? d.value : d.value - 1 : Z;
    }, I = (N) => {
      var {
        loop: Z
      } = e;
      return N === -1 ? Z ? d.value - 1 : 0 : N === d.value ? Z ? 0 : d.value - 1 : N;
    }, S = (N) => {
      var {
        loop: Z
      } = e;
      return N < 0 ? Z ? d.value - 1 : 0 : N > d.value - 1 ? Z ? 0 : d.value - 1 : N;
    }, D = (N) => {
      var Z = o.value >= r.value, G = o.value <= -t.value, J = 0, ae = -(t.value - r.value);
      l.value = !0, (Z || G) && (l.value = !0, o.value = G ? J : ae, V(0).setTranslate(0), V(d.value - 1).setTranslate(0)), Wt(() => {
        l.value = !1, $(N);
      });
    }, O = () => {
      i.value = S(L(e.initialIndex));
    }, z = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (B(), f = window.setTimeout(() => {
        E(), z();
      }, L(N)));
    }, B = () => {
      f && clearTimeout(f);
    }, b = (N, Z) => {
      if (N > Z && N > 10)
        return "horizontal";
      if (Z > N && Z > 10)
        return "vertical";
    }, k = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: Z,
          clientY: G
        } = N.touches[0];
        c = Z, h = G, y = performance.now(), v = !0, B(), D(() => {
          l.value = !0;
        });
      }
    }, j = (N) => {
      var {
        touchable: Z,
        vertical: G
      } = e;
      if (!(!v || !Z)) {
        var {
          clientX: J,
          clientY: ae
        } = N.touches[0], oe = Math.abs(J - c), ge = Math.abs(ae - h), pe = b(oe, ge), Fe = G ? "vertical" : "horizontal";
        if (pe === Fe) {
          N.preventDefault();
          var nn = g !== void 0 ? J - g : 0, sn = P !== void 0 ? ae - P : 0;
          g = J, P = ae, o.value += G ? sn : nn, w();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: Z
        } = e, G = N ? P < h : g < c, J = Math.abs(N ? h - P : c - g), ae = performance.now() - y <= my && J >= py, oe = ae ? C(G ? i.value + 1 : i.value - 1) : C();
        v = !1, l.value = !1, g = void 0, P = void 0, o.value = oe * -r.value;
        var ge = i.value;
        i.value = I(oe), z(), ge !== i.value && $(Z, i.value);
      }
    }, F = () => {
      n.value && (l.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = i.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), z(), setTimeout(() => {
        l.value = !1;
      }));
    }, E = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = S(J + 1), (N == null ? void 0 : N.event) !== !1 && $(G, i.value), D(() => {
          if (J === d.value - 1 && Z) {
            V(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          J !== d.value - 1 && (o.value = i.value * -r.value);
        });
      }
    }, H = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: Z,
          onChange: G
        } = e, J = i.value;
        i.value = S(J - 1), (N == null ? void 0 : N.event) !== !1 && $(G, i.value), D(() => {
          if (J === 0 && Z) {
            V(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          J !== 0 && (o.value = i.value * -r.value);
        });
      }
    }, U = (N, Z) => {
      if (!(d.value <= 1 || N === i.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var G = N > i.value ? E : H, J = Math.abs(N - i.value);
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
    return u(X), ie(() => d.value, /* @__PURE__ */ cy(function* () {
      yield En(), O(), F();
    })), Lt(F), ka(B), Ha(B), ga(window, "resize", F), {
      n: hy,
      classes: gy,
      length: d,
      index: i,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: l,
      handleTouchstart: k,
      handleTouchmove: j,
      handleTouchend: Q,
      next: E,
      prev: H,
      to: U,
      resize: F,
      toNumber: L
    };
  }
});
Qu.render = by;
const Rn = Qu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var $S = Rn;
function wy() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(Xu), {
    index: r
  } = fn(Zu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Cy
} = ee("swipe-item");
function Sy(e, n) {
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
var _u = x({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = wy(), {
      size: t,
      vertical: o
    } = n, l = (s) => {
      e.value = s;
    }, i = {
      index: a,
      setTranslate: l
    };
    return r(i), {
      n: Cy,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
_u.render = Sy;
const Un = _u;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var TS = Un;
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
var ky = Zo({
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
}, Ke(Ju, ["loop", "indicator", "onChange"]), Ke(lt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: bl,
  classes: $y
} = ee("image-preview"), wl = 12, Cl = 200, Ty = 350, Sl = 200, Oy = ["src", "alt"];
function Py(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
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
                    Oy
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
var xu = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: Rn,
    VarSwipeItem: Un,
    VarPopup: hn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: ky,
  setup(e) {
    var n = M(!1), r = R(() => {
      var {
        images: B,
        current: b
      } = e, k = B.findIndex((j) => j === b);
      return k >= 0 ? k : 0;
    }), a = M(1), t = M(0), o = M(0), l = M(void 0), i = M(void 0), s = M(!0), u = null, d = null, v = null, f = (B, b) => {
      var {
        clientX: k,
        clientY: j
      } = B, {
        clientX: Q,
        clientY: F
      } = b;
      return Math.abs(Math.sqrt(Math.pow(Q - k, 2) + Math.pow(F - j, 2)));
    }, c = (B, b) => ({
      clientX: B.clientX,
      clientY: B.clientY,
      timestamp: Date.now(),
      target: b
    }), h = () => {
      a.value = L(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        l.value = "linear", i.value = "0s";
      }, Sl);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, l.value = void 0, i.value = void 0;
    }, g = (B) => d ? f(d, B) <= wl && B.timestamp - d.timestamp <= Cl && d.target === B.target : !1, P = (B) => !B || !u || !d ? !1 : f(u, d) <= wl && Date.now() - d.timestamp < Ty && (B === u.target || B.parentNode === u.target), V = (B) => {
      v = window.setTimeout(() => {
        P(B.target) && z(), u = null;
      }, Cl);
    }, w = (B) => {
      v && window.clearTimeout(v);
      var {
        touches: b
      } = B, k = c(b[0], B.currentTarget);
      if (u = k, g(k)) {
        a.value > 1 ? y() : h();
        return;
      }
      d = k;
    }, C = (B) => {
      var {
        offsetWidth: b,
        offsetHeight: k
      } = B, {
        naturalWidth: j,
        naturalHeight: Q
      } = B.querySelector("." + bl("image"));
      return {
        width: b,
        height: k,
        imageRadio: Q / j,
        rootRadio: k / b,
        zoom: L(e.zoom)
      };
    }, I = (B) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: j,
        width: Q,
        height: F
      } = C(B);
      if (!k)
        return 0;
      var E = k > j ? F / k : Q;
      return Math.max(0, (b * E - Q) / 2) / b;
    }, S = (B) => {
      var {
        zoom: b,
        imageRadio: k,
        rootRadio: j,
        width: Q,
        height: F
      } = C(B);
      if (!k)
        return 0;
      var E = k > j ? F : Q * k;
      return Math.max(0, (b * E - F) / 2) / b;
    }, D = (B, b, k) => B + b >= k ? k : B + b <= -k ? -k : B + b, O = (B) => {
      if (d) {
        var b = B.currentTarget, {
          touches: k
        } = B, j = c(k[0], b);
        if (a.value > 1) {
          var Q = j.clientX - d.clientX, F = j.clientY - d.clientY, E = I(b), H = S(b);
          t.value = D(t.value, Q, E), o.value = D(o.value, F, H);
        }
        d = j;
      }
    }, z = () => {
      if (a.value > 1) {
        y(), setTimeout(() => $(e["onUpdate:show"], !1), Sl);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: bl,
      classes: $y,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: l,
      transitionDuration: i,
      handleTouchstart: w,
      handleTouchmove: O,
      handleTouchend: V,
      close: z
    };
  }
});
xu.render = Py;
const dr = xu;
var _n;
function Hn(e) {
  if (it()) {
    Hn.close();
    var n = Ge(e) ? {
      images: [e]
    } : we(e) ? {
      images: e
    } : e, r = Me(n);
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = qa(dr, r, {
      onClose: () => $(r.onClose),
      onClosed: () => {
        $(r.onClosed), a(), _n === r && (_n = null);
      },
      onRouteChange: () => {
        a(), _n === r && (_n = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Hn.close = () => {
  if (_n != null) {
    var e = _n;
    _n = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
dr.install = function(e) {
  e.component(dr.name, dr);
};
Hn.install = function(e) {
  e.component(dr.name, dr);
};
Hn.Component = dr;
var OS = dr, kt = {
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
function kl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $l(e) {
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
  n: Vy,
  classes: Ey
} = ee("sticky");
function My(e, n) {
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
var ed = x({
  name: "VarSticky",
  props: kt,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), l = M("auto"), i = M("auto"), s = M("auto"), u = M("auto"), d = R(() => !e.disabled && e.cssMode), v = R(() => !e.disabled && !e.cssMode && a.value), f = R(() => Ne(e.offsetTop)), c, h = () => {
      var {
        cssMode: w,
        disabled: C
      } = e;
      if (!C) {
        var I = 0;
        if (c !== window) {
          var {
            top: S
          } = c.getBoundingClientRect();
          I = S;
        }
        var D = r.value, O = n.value, {
          top: z,
          left: B
        } = O.getBoundingClientRect(), b = z - I;
        return b <= f.value ? (w || (l.value = O.offsetWidth + "px", i.value = O.offsetHeight + "px", t.value = I + f.value + "px", o.value = B + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: b,
          isFixed: !1
        });
      }
    }, y = () => {
      if (c) {
        var w = h();
        w && $(e.onScroll, w.offsetTop, w.isFixed);
      }
    }, g = /* @__PURE__ */ function() {
      var w = $l(function* () {
        a.value = !1, yield Av(), h();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), P = /* @__PURE__ */ function() {
      var w = $l(function* () {
        yield En(), c = Oa(n.value), c !== window && c.addEventListener("scroll", y), y();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), V = () => {
      c !== window && c.removeEventListener("scroll", y);
    };
    return ie(() => e.disabled, g), en(P), Ha(V), ka(V), ga(window, "scroll", y), {
      n: Vy,
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
ed.render = My;
const Yn = ed;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var PS = Yn, nd = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), rd = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function By() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(nd), {
    length: r
  } = vn(rd);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Iy() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(nd), {
    index: r
  } = fn(rd);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Ny = {
  index: {
    type: [Number, String]
  }
}, {
  n: Dy,
  classes: Ay
} = ee("index-anchor");
function zy(e, n) {
  return p(), me(
    Ga(e.sticky ? e.n("$-sticky") : e.Transition),
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
var ad = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Ny,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Iy(), t = M(0), o = M(!1), l = R(() => e.index), i = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      i.value && (t.value = i.value.$el ? i.value.$el.offsetTop : i.value.offsetTop);
    }, h = (g) => {
      o.value = g;
    }, y = {
      index: n,
      name: l,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(y), {
      n: Dy,
      classes: Ay,
      name: l,
      anchorEl: i,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: o,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: De
    };
  }
});
ad.render = zy;
const Ur = ad;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var VS = Ur, Ly = {
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
function Tl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function gt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Tl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Tl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Ry,
  classes: Uy
} = ee("index-bar"), Yy = ["onClick"];
function Fy(e, n) {
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
          Yy
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
var td = x({
  name: "VarIndexBar",
  props: Ly,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = By(), t = M(""), o = M(null), l = M([]), i = M(), s = R(() => e.sticky), u = R(() => e.cssMode), d = R(() => Ne(e.stickyOffsetTop)), v = R(() => e.zIndex), f = null, c = {
      active: i,
      sticky: s,
      cssMode: u,
      stickyOffsetTop: d,
      zIndex: v
    };
    a(c);
    var h = (S, D) => {
      var O = ti(S) ? S.name.value : S;
      O === i.value || O === void 0 || (i.value = O, (D == null ? void 0 : D.event) !== !1 && $(e.onChange, O));
    }, y = () => {
      if (!("getBoundingClientRect" in f))
        return 0;
      var {
        top: S
      } = f.getBoundingClientRect(), {
        scrollTop: D
      } = f, {
        top: O
      } = o.value.getBoundingClientRect();
      return D - S + O;
    }, g = () => {
      var S = jt(f), D = f === window ? document.body.scrollHeight : f.scrollHeight, O = y();
      r.forEach((z, B) => {
        var b = z.ownTop.value, k = S - b + d.value - O, j = B === r.length - 1 ? D : r[B + 1].ownTop.value - z.ownTop.value;
        k >= 0 && k < j && t.value === "" && (B && !e.cssMode && r[B - 1].setDisabled(!0), z.setDisabled(!1), h(z));
      });
    }, P = /* @__PURE__ */ function() {
      var S = gt(function* (D) {
        var {
          anchorName: O,
          manualCall: z = !1,
          options: B
        } = D;
        if (z && $(e.onClick, O), O !== i.value) {
          var b = r.find((F) => {
            var {
              name: E
            } = F;
            return O === E.value;
          });
          if (b) {
            var k = y(), j = b.ownTop.value - d.value + k, Q = li(f);
            t.value = O, h(O, B), yield xa(f, {
              left: Q,
              top: j,
              animation: Jl,
              duration: L(e.duration)
            }), Wt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return S.apply(this, arguments);
      };
    }(), V = /* @__PURE__ */ function() {
      var S = gt(function* () {
        yield En(), f = Oa(o.value);
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), w = () => {
      f.addEventListener("scroll", g);
    }, C = () => {
      f.removeEventListener("scroll", g);
    }, I = (S, D) => {
      On(() => P({
        anchorName: S,
        options: D
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ gt(function* () {
      yield En(), r.forEach((S) => {
        var {
          name: D,
          setOwnTop: O
        } = S;
        D.value && l.value.push(D.value), O();
      });
    })), en(/* @__PURE__ */ gt(function* () {
      yield V(), w();
    })), Rt(C), ka(C), {
      n: Ry,
      classes: Uy,
      barEl: o,
      active: i,
      zIndex: v,
      anchorNameList: l,
      toNumber: L,
      scrollTo: I,
      anchorClick: P
    };
  }
});
td.render = Fy;
const Yr = td;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var ES = Yr;
function Hy(e) {
  return ["text", "password", "number"].includes(e);
}
var jy = {
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
    validator: Hy
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
  n: lo,
  classes: Wy
} = ee("input"), Gy = ["id", "disabled", "type", "value", "maxlength", "rows"], qy = ["id", "disabled", "type", "value", "maxlength"], Ky = ["for"];
function Xy(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
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
          Gy
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
          qy
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
          Ky
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
var od = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: jy,
  setup(e) {
    var n = M("var-input-" + Fa().uid), r = M(null), a = M(!1), t = R(() => e.type === "number" ? "text" : e.type), o = R(() => {
      var {
        maxlength: E,
        modelValue: H
      } = e;
      return E ? Nn(H) ? "0 / " + E : String(H).length + "/" + E : "";
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
      Ve(() => {
        var {
          validateTrigger: H,
          rules: U,
          modelValue: X
        } = e;
        u(H, E, U, X);
      });
    }, c = () => {
      var {
        hint: E,
        modelValue: H
      } = e;
      if (!E && !Nn(H))
        return lo("--placeholder-hidden");
      if (E && (!Nn(H) || a.value))
        return lo("--placeholder-hint");
    }, h = (E) => {
      a.value = !0, $(e.onFocus, E), f("onFocus");
    }, y = (E) => {
      a.value = !1, $(e.onBlur, E), f("onBlur");
    }, g = (E) => {
      var H = E.target, {
        value: U
      } = H;
      return e.type === "number" && (U = D(U)), U = z(O(U)), H.value = U, U;
    }, P = (E) => {
      Object.assign(E.target, {
        composing: !0
      });
    }, V = (E) => {
      var H = E.target;
      H.composing && (H.composing = !1, H.dispatchEvent(new Event("input")));
    }, w = (E) => {
      var {
        composing: H
      } = E.target;
      if (!H) {
        var U = g(E);
        $(e["onUpdate:modelValue"], U), $(e.onInput, U, E), f("onInput");
      }
    }, C = (E) => {
      var H = g(E);
      $(e.onChange, H, E), f("onChange");
    }, I = () => {
      var {
        disabled: E,
        readonly: H,
        clearable: U,
        onClear: X
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || E || H || !U || ($(e["onUpdate:modelValue"], ""), $(X, ""), f("onClear"));
    }, S = (E) => {
      var {
        disabled: H,
        onClick: U
      } = e;
      i != null && i.disabled.value || H || ($(U, E), f("onClick"));
    }, D = (E) => {
      var H = E.indexOf("-"), U = E.indexOf(".");
      return H > -1 && (E = H === 0 ? "-" + E.replace(/-/g, "") : E.replace(/-/g, "")), U > -1 && (E = E.slice(0, U + 1) + E.slice(U).replace(/\./g, "")), E.replace(/[^-0-9.]/g, "");
    }, O = (E) => e.modelModifiers.trim ? E.trim() : E, z = (E) => e.maxlength ? E.slice(0, L(e.maxlength)) : E, B = (E) => {
      var {
        disabled: H,
        readonly: U
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || H || U || E.stopPropagation();
    }, b = () => {
      $(e["onUpdate:modelValue"], ""), v();
    }, k = () => d(e.rules, e.modelValue), j = () => {
      var E;
      (E = r.value) == null || E.focus();
    }, Q = () => {
      r.value.blur();
    }, F = {
      reset: b,
      validate: k,
      resetValidation: v
    };
    return $(l, F), en(() => {
      e.autofocus && j();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: s,
      type: t,
      maxlengthText: o,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: lo,
      classes: Wy,
      isEmpty: Nn,
      computePlaceholderState: c,
      handleFocus: h,
      handleBlur: y,
      handleInput: w,
      handleChange: C,
      handleClear: I,
      handleClick: S,
      handleTouchstart: B,
      handleCompositionStart: P,
      handleCompositionEnd: V,
      validate: k,
      resetValidation: v,
      reset: b,
      focus: j,
      blur: Q
    };
  }
});
od.render = Xy;
const vr = od;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var MS = vr;
function Zy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Jy(e) {
  return ["always", "hover", "none"].includes(e);
}
var Qy = {
  type: {
    type: String,
    default: "default",
    validator: Zy
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
    validator: Jy
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
  n: _y,
  classes: xy
} = ee("link");
function eb(e, n) {
  return p(), me(
    Ga(e.tag),
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
var id = x({
  name: "VarLink",
  props: Qy,
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
      o || $(l, t);
    };
    return {
      n: _y,
      classes: xy,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
id.render = eb;
const Fr = id;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var BS = Fr, nb = {
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
function Ol(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function rb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Ol(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Ol(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: ab,
  classes: tb
} = ee("list");
function ob(e, n) {
  var r = le("var-loading"), a = Ye("ripple");
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
var ld = x({
  name: "VarList",
  directives: {
    Ripple: Ae
  },
  components: {
    VarLoading: $n
  },
  props: nb,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var i = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= i;
    }, l = /* @__PURE__ */ function() {
      var i = rb(function* () {
        yield Ve();
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
    return en(() => {
      a = Oa(n.value), e.immediateCheck && l(), a.addEventListener("scroll", l);
    }), Ha(() => {
      a.removeEventListener("scroll", l);
    }), {
      pack: He,
      listEl: n,
      detectorEl: r,
      dt: Ht,
      isNumber: _e,
      load: t,
      check: l,
      n: ab,
      classes: tb
    };
  }
});
ld.render = ob;
const Hr = ld;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var IS = Hr, ib = {
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
  classes: lb,
  n: Pl
} = ee("loading-bar");
const sb = x({
  name: "VarLoadingBar",
  props: ib,
  setup(e) {
    return () => re("div", {
      class: lb(Pl(), [e.error, Pl("--error")]),
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
var sd, Vl, ud = {}, ub = {
  value: 0,
  opacity: 0,
  error: !1
}, qe = Me(ub), db = (e) => {
  Object.assign(qe, e);
}, vb = (e) => {
  Object.assign(qe, e), ud = e;
}, fb = () => {
  Object.keys(ud).forEach((e) => {
    qe[e] !== void 0 && (qe[e] = void 0);
  });
}, dd = () => {
  sd = window.setTimeout(() => {
    if (!(qe.value >= 95)) {
      var e = Math.random();
      qe.value < 70 && (e = Math.round(5 * Math.random())), qe.value += e, dd();
    }
  }, 200);
}, cb = () => {
  Vl || (Vl = !0, qa(sb, qe)), (!qe.error || qe.value === 100) && (qe.value = 0), setTimeout(() => {
    qe.opacity = 1;
  }, 200), dd();
}, mb = () => {
  qe.value = 100, setTimeout(() => {
    qe.opacity = 0, setTimeout(() => {
      qe.error = !1;
    }, 250);
  }, 300), window.clearTimeout(sd);
}, pb = () => {
  qe.error = !0, At.start(), setTimeout(At.finish, 300);
}, At = {
  start: cb,
  finish: mb,
  error: pb,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: db,
  setDefaultOptions: vb,
  resetDefaultOptions: fb
}, NS = At;
const Jo = At;
function hb(e) {
  return ["click", "hover"].includes(e);
}
function gb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var yb = {
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
    validator: hb
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: gb
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
  n: bb,
  classes: wb
} = ee("menu");
function Cb(e, n) {
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
      ja,
      {
        to: e.teleport
      },
      [re(
        De,
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
              onClick: n[0] || (n[0] = Vn(() => {
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
          ), [[Wa, e.show]])]),
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
var vd = x({
  name: "VarMenu",
  props: yb,
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
    } = zu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: he,
      n: bb,
      classes: wb,
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
vd.render = Cb;
const Fn = vd;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var DS = Fn, fd = Symbol("SELECT_BIND_OPTION_KEY"), cd = Symbol("SELECT_COUNT_OPTION_KEY");
function Sb() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(fd), {
    length: r
  } = vn(cd);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function kb() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(fd), {
    index: r
  } = fn(cd);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var $b = {
  label: {},
  value: {}
}, {
  n: Tb,
  classes: Ob
} = ee("option");
function Pb(e, n) {
  var r = le("var-checkbox"), a = Ye("ripple");
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
        onClick: n[1] || (n[1] = Vn(() => {
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
var md = x({
  name: "VarOption",
  directives: {
    Ripple: Ae
  },
  components: {
    VarCheckbox: or
  },
  props: $b,
  setup(e) {
    var n = M(!1), r = R(() => n.value), a = R(() => e.label), t = R(() => e.value), {
      select: o,
      bindSelect: l
    } = kb(), {
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(h);
    }, f = () => d(h), c = (y) => {
      n.value = y;
    }, h = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return ie([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), l(h), {
      n: Tb,
      classes: Ob,
      optionSelected: n,
      wrapWidth: i,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
md.render = Pb;
const jr = md;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var AS = jr, Vb = {
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
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ut(e);
}
var {
  n: El
} = ee("overlay");
const Wr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Vb,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = st(() => e.show, 1), {
      disabled: o
    } = si(), l = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    Gt(() => e.show, () => e.lockScroll);
    var i = () => re("div", Ee({
      class: El(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: l
    }), [$(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(De, {
        name: El("--fade")
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
        return re(ja, {
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
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var zS = Wr, Mb = {
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
  n: Bb,
  classes: Ib
} = ee("pagination"), Nb = ["item-mode", "onClick"];
function Db(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), l = Ye("ripple");
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
          onKeydown: n[3] || (n[3] = Bi((i) => e.setPage("simple", e.simpleValue, i), ["enter"]))
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
        Nb
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
          onKeydown: n[9] || (n[9] = Bi((i) => e.setPage("quick", e.inputValue, i), ["enter"]))
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
var pd = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: vr
  },
  directives: {
    Ripple: Ae
  },
  props: Mb,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), l = M(L(e.current) || 1), i = M(L(e.size) || 10), s = M([]), u = R(() => Math.ceil(e.maxPagerCount / 2)), d = R(() => Math.ceil(L(e.total) / L(i.value))), v = R(() => {
      var C = i.value * (l.value - 1) + 1, I = Math.min(i.value * l.value, L(e.total));
      return [C, I];
    }), f = R(() => e.showTotal ? e.showTotal(L(e.total), v.value) : ""), c = (C, I) => _e(C) ? !1 : I === 1 ? t.value : o.value, h = (C, I) => _e(C) ? "basic" : I === 1 ? "head" : "tail", y = (C, I) => {
      C === l.value || e.disabled || (_e(C) ? l.value = C : C === "prev" ? l.value > 1 && (l.value -= 1) : C === "next" ? l.value < d.value && (l.value += 1) : C === "..." && (I === 1 ? l.value = Math.max(l.value - e.maxPagerCount, 1) : l.value = Math.min(l.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, P = (C) => {
      i.value = C, n.value = !1;
    }, V = (C) => {
      var I = /^[1-9][0-9]*$/;
      return I.test(C);
    }, w = (C, I, S) => {
      if (S.target.blur(), V(I)) {
        var D = L(I);
        D > d.value && (D = d.value, a.value = "" + D), D !== l.value && (l.value = D);
      }
      C === "quick" && (r.value = ""), C === "simple" && !V(I) && (a.value = "" + l.value);
    };
    return ie([() => e.current, () => e.size], (C) => {
      var [I, S] = C;
      l.value = L(I) || 1, i.value = L(S || 10);
    }), ie([l, i, d], (C, I) => {
      var [S, D, O] = C, [z, B] = I, b = [], {
        maxPagerCount: k,
        total: j,
        onChange: Q
      } = e, F = Math.ceil(L(j) / L(B)), E = O - (k - u.value) - 1;
      if (a.value = "" + S, O - 2 > k) {
        if (z === void 0 || O !== F)
          for (var H = 2; H < k + 2; H++)
            b.push(H);
        if (S <= k && S < E) {
          b = [];
          for (var U = 1; U < k + 1; U++)
            b.push(U + 1);
          t.value = !0, o.value = !1;
        }
        if (S > k && S < E) {
          b = [];
          for (var X = 1; X < k + 1; X++)
            b.push(S + X - u.value);
          t.value = S === 2 && k === 1, o.value = !1;
        }
        if (S >= E) {
          b = [];
          for (var N = 1; N < k + 1; N++)
            b.push(O - (k - N) - 1);
          t.value = !1, o.value = !0;
        }
        b = [1, "...", ...b, "...", O];
      } else
        for (var Z = 1; Z <= O; Z++)
          b.push(Z);
      s.value = b, z !== void 0 && O > 0 && $(Q, S, D), $(e["onUpdate:current"], S), $(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Bb,
      classes: Ib,
      pack: He,
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
      clickItem: y,
      showMenu: g,
      clickSize: P,
      setPage: w,
      toNumber: L
    };
  }
});
pd.render = Db;
const Gr = pd;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var LS = Gr, Ab = {
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
  n: zb,
  classes: Lb
} = ee("paper");
function Rb(e, n) {
  var r = Ye("ripple");
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
var hd = x({
  name: "VarPaper",
  directives: {
    Ripple: Ae
  },
  props: Ab,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: zb,
      classes: Lb,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
hd.render = Rb;
const qr = hd;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var RS = qr;
function Qo() {
  return Qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Qo.apply(this, arguments);
}
var Ub = Qo({
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
}, Ke(lt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Yb,
  classes: Fb
} = ee("picker"), Ml = 300, Hb = 15, Bl = 0, jb = ["onTouchstart", "onTouchmove", "onTouchend"], Wb = ["onTransitionend"];
function Gb(e, n) {
  var r = le("var-button");
  return p(), me(
    Ga(e.dynamic ? e.n("$-popup") : e.Transition),
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
                onTouchmove: Vn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                Wb
              )],
              42,
              jb
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
var gd = x({
  name: "VarPicker",
  components: {
    VarButton: xe,
    VarPopup: hn
  },
  inheritAttrs: !1,
  props: Ub,
  setup(e) {
    var n = M([]), r = R(() => Ne(e.optionHeight)), a = R(() => Ne(e.optionCount)), t = R(() => a.value * r.value / 2 - r.value / 2), o = R(() => a.value * r.value), l = [], i = (b, k) => {
      k.scrollEl = b;
    }, s = (b) => {
      $(e["onUpdate:show"], b);
    }, u = (b) => {
      var k = r.value + t.value, j = t.value - b.column.texts.length * r.value;
      b.translate >= k && (b.translate = k), b.translate <= j && (b.translate = j);
    }, d = (b, k) => {
      var {
        length: j
      } = b.column.texts;
      return k = k >= j ? j - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (b) => {
      var k = Math.round((t.value - b.translate) / r.value);
      return d(b, k);
    }, f = () => {
      var b = n.value.map((j) => j.column.texts[j.index]), k = n.value.map((j) => j.index);
      return {
        texts: b,
        indexes: k
      };
    }, c = function(b, k, j, Q) {
      Q === void 0 && (Q = !1);
      var F = t.value - d(b, k) * r.value;
      F === b.translate && (b.scrolling = !1, !Q && D(b)), b.translate = F, b.duration = j;
    }, h = (b, k, j) => {
      b.translate += Math.abs(k / j) / 3e-3 * (k < 0 ? -1 : 1);
    }, y = (b, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = to(k.scrollEl);
    }, g = (b, k) => {
      if (k.touching) {
        var {
          clientY: j
        } = b.touches[0], Q = k.prevY !== void 0 ? j - k.prevY : 0;
        k.prevY = j, k.translate += Q, u(k);
        var F = performance.now();
        F - k.momentumTime > Ml && (k.momentumTime = F, k.momentumPrevY = k.translate);
      }
    }, P = (b, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var j = k.translate - k.momentumPrevY, Q = performance.now() - k.momentumTime, F = Math.abs(j) >= Hb && Q <= Ml;
      F && h(k, j, Q), k.index = v(k), c(k, k.index, F ? 1e3 : 200);
    }, V = (b) => {
      b.scrolling = !1, D(b);
    }, w = (b) => b.map((k, j) => {
      var Q, F = we(k) ? {
        texts: k
      } : k, E = {
        id: Bl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = F.initialIndex) != null ? Q : 0,
        columnIndex: j,
        duration: 0,
        momentumTime: 0,
        column: F,
        scrollEl: null,
        scrolling: !1
      };
      return c(E, E.index, 0, !0), E;
    }), C = (b) => {
      var k = [];
      return I(k, b, 0, !0), k;
    }, I = function(b, k, j, Q) {
      if (Q === void 0 && (Q = !1), we(k) && k.length) {
        var F, E = Q && (F = e.cascadeInitialIndexes[b.length]) != null ? F : 0, H = {
          id: Bl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: E,
          columnIndex: j,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((U) => U[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        b.push(H), c(H, H.index, 0, !0), I(b, H.columns[H.index].children, j + 1, Q);
      }
    }, S = (b) => {
      n.value.splice(n.value.indexOf(b) + 1), I(n.value, b.columns[b.index].children, b.columnIndex + 1);
    }, D = (b) => {
      var {
        cascade: k,
        onChange: j
      } = e;
      k && S(b);
      var Q = n.value.some((U) => U.scrolling);
      if (!Q) {
        var {
          texts: F,
          indexes: E
        } = f(), H = E.every((U, X) => U === l[X]);
        H || (l = [...E], $(j, F, E));
      }
    }, O = () => {
      if (e.cascade) {
        var b = n.value.find((k) => k.scrolling);
        b && (b.translate = to(b.scrollEl), b.index = v(b), c(b, b.index, 0, !0), b.scrolling = !1, S(b));
      } else
        n.value.forEach((k) => {
          k.translate = to(k.scrollEl), k.index = v(k), c(k, k.index, 0);
        });
    }, z = () => {
      O();
      var {
        texts: b,
        indexes: k
      } = f();
      l = [...k], $(e.onConfirm, b, k);
    }, B = () => {
      O();
      var {
        texts: b,
        indexes: k
      } = f();
      l = [...k], $(e.onCancel, b, k);
    };
    return ie(() => e.columns, (b) => {
      n.value = e.cascade ? C(Ii(b)) : w(Ii(b));
      var {
        indexes: k
      } = f();
      l = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Yb,
      classes: Fb,
      pack: He,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: i,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: g,
      handleTouchend: P,
      handleTransitionend: V,
      confirm: z,
      cancel: B,
      dt: Ht
    };
  }
});
gd.render = Gb;
const fr = gd;
var rn;
function Sa(e) {
  return new Promise((n) => {
    Sa.close();
    var r = we(e) ? {
      columns: e
    } : e, a = Me(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = qa(fr, a, {
      onConfirm: (o, l) => {
        $(a.onConfirm, o, l), n({
          state: "confirm",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, l) => {
        $(a.onCancel, o, l), n({
          state: "cancel",
          texts: o,
          indexes: l
        }), a.show = !1, rn === a && (rn = null);
      },
      onClose: () => {
        $(a.onClose), n({
          state: "close"
        }), rn === a && (rn = null);
      },
      onClosed: () => {
        $(a.onClosed), t(), rn === a && (rn = null);
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
fr.install = function(e) {
  e.component(fr.name, fr);
};
Sa.Component = fr;
Sa.install = function(e) {
  e.component(fr.name, fr);
};
Sa.close = () => {
  if (rn != null) {
    var e = rn;
    rn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
var US = fr;
function qb(e) {
  return ["linear", "circle"].includes(e);
}
var Kb = {
  mode: {
    type: String,
    default: "linear",
    validator: qb
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
  n: Xb,
  classes: Zb
} = ee("progress"), Jb = ["viewBox"], Qb = ["cx", "cy", "r", "stroke-width"], _b = ["cx", "cy", "r", "stroke-width"];
function xb(e, n) {
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
          Qb
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
          _b
        )],
        14,
        Jb
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
var yd = x({
  name: "VarProgress",
  props: Kb,
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
      } = e, l = "0 0 " + Ne(a) + " " + Ne(a), i = L(o) > 100 ? 100 : Math.round(L(o)), s = (Ne(a) - Ne(t)) / 2, u = 2 * Math.PI * s, d = i / 100 * u + ", " + u;
      return {
        viewBox: l,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: i + "%"
      };
    });
    return {
      n: Xb,
      classes: Zb,
      toSizeUnit: he,
      multiplySizeUnit: Je,
      linearProps: n,
      circleProps: r
    };
  }
});
yd.render = xb;
const Kr = yd;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var YS = Kr, e0 = {
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
function Il(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function n0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Il(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Il(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: Nl,
  classes: r0
} = ee("pull-refresh"), Dl = 150;
function a0(e, n) {
  var r = le("var-icon");
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
var bd = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: e0,
  setup(e) {
    var n, r, a = M(0), t = M(null), o = M(null), l = M(0), i = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = 0, f = 0, c = M(!0), h = R(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = R(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: P.value ? e.successBgColor : e.bgColor,
      color: P.value ? e.successColor : e.color
    })), g = R(() => Math.abs(2 * a.value)), P = R(() => u.value === "success"), V = () => new Promise((B) => {
      window.setTimeout(() => {
        c.value = !0, B();
      }, Dl);
    }), w = (B) => {
      var b = "classList" in n ? n : document.body;
      b.classList[B](Nl() + "--lock");
    }, C = (B) => {
      v = B.touches[0].clientY, f = 0;
    }, I = (B) => {
      if (h.value) {
        var b = jt(n);
        if (!(b > 0)) {
          var k = b === 0, j = B.touches[0];
          f = j.clientY - v, k && f >= 0 && B.preventDefault(), u.value !== "pulling" && (u.value = "pulling", l.value = B.touches[0].clientY), k && i.value > a.value && w("add");
          var Q = (B.touches[0].clientY - l.value) / 2 + a.value;
          i.value = Q >= g.value ? g.value : Q, i.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = V()) : s.value = "arrow-down";
        }
      }
    }, S = /* @__PURE__ */ function() {
      var B = n0(function* () {
        h.value && (d.value = !0, i.value >= g.value * 0.2 ? (yield r, u.value = "loading", i.value = g.value * 0.3, $(e["onUpdate:modelValue"], !0), $(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", i.value = a.value, setTimeout(() => {
          d.value = !1, w("remove");
        }, L(e.animationDuration))));
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), D = () => {
      var {
        width: B
      } = o.value.getBoundingClientRect();
      i.value = -(B + B * 0.25), a.value = -(B + B * 0.25);
    }, O = () => {
      n = e.target ? _l(e.target, "PullRefresh") : Oa(t.value);
    }, z = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, L(e.animationDuration));
    };
    return ie(() => e.modelValue, (B) => {
      B === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = a.value, z();
      }, L(e.successDuration)));
    }), en(() => {
      O(), D();
    }), ga(t, "touchmove", I), {
      n: Nl,
      classes: r0,
      iconHasChanged: c,
      ICON_TRANSITION: Dl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: C,
      touchMove: I,
      touchEnd: S,
      iconName: s,
      controlStyle: y,
      isSuccess: P
    };
  }
});
bd.render = a0;
const Xr = bd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var FS = Xr, t0 = {
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
}, wd = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Cd = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function o0() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(wd), {
    length: r
  } = vn(Cd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function i0() {
  var {
    bindParent: e,
    parentProvider: n
  } = ln(wd), {
    index: r
  } = fn(Cd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: l0,
  classes: s0
} = ee("radio");
function u0(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ye("ripple");
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
var Sd = x({
  name: "VarRadio",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: t0,
  setup(e) {
    var n = M(!1), r = R(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = i0(), {
      form: l,
      bindForm: i
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (C) => {
      Ve(() => {
        var {
          validateTrigger: I,
          rules: S,
          modelValue: D
        } = e;
        u(I, C, S, D);
      });
    }, c = (C) => {
      var {
        checkedValue: I,
        onChange: S
      } = e;
      t && n.value === I || (n.value = C, $(e["onUpdate:modelValue"], n.value), $(S, n.value), t == null || t.onToggle(I), f("onChange"));
    }, h = (C) => {
      var {
        disabled: I,
        readonly: S,
        uncheckedValue: D,
        checkedValue: O,
        onClick: z
      } = e;
      l != null && l.disabled.value || I || ($(z, C), !(l != null && l.readonly.value || S) && (a.value = !0, c(r.value ? D : O)));
    }, y = (C) => {
      var {
        checkedValue: I,
        uncheckedValue: S
      } = e;
      n.value = C === I ? I : S;
    }, g = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, P = () => d(e.rules, e.modelValue), V = (C) => {
      var {
        uncheckedValue: I,
        checkedValue: S
      } = e, D = ![I, S].includes(C);
      D && (C = r.value ? I : S), c(C);
    };
    ie(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var w = {
      sync: y,
      validate: P,
      resetValidation: v,
      reset: g
    };
    return $(o, w), $(i, w), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: l0,
      classes: s0,
      handleClick: h,
      toggle: V,
      reset: g,
      validate: P,
      resetValidation: v
    };
  }
});
Sd.render = u0;
const Zr = Sd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var HS = Zr;
function d0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var v0 = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: d0
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
  n: f0,
  classes: c0
} = ee("radio-group");
function m0(e, n) {
  var r = le("var-form-details");
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
var kd = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: v0,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = o0(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: l,
      validate: i,
      // expose
      resetValidation: s
    } = bn(), u = R(() => o.value), d = (g) => {
      Ve(() => {
        var {
          validateTrigger: P,
          rules: V,
          modelValue: w
        } = e;
        l(P, g, V, w);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: P
      } = g;
      return P(e.modelValue);
    }), f = (g) => {
      $(e["onUpdate:modelValue"], g), $(e.onChange, g), d("onChange");
    }, c = () => i(e.rules, e.modelValue), h = () => {
      $(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var y = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, y), a(y), {
      errorMessage: o,
      n: f0,
      classes: c0,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
kd.render = m0;
const Jr = kd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var jS = Jr, p0 = {
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
  n: Xa
} = ee("rate"), h0 = ["onClick"];
function g0(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ye("ripple");
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
          h0
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
var $d = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  props: p0,
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
        count: P,
        gap: V
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== L(P) ? he(V) : 0
      };
    }, s = (g) => {
      var {
        name: P,
        color: V
      } = u(g);
      return {
        [Xa("content")]: !0,
        [Xa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Xa("--error")]: a.value,
        [Xa("--primary")]: P !== e.emptyIcon && !V
      };
    }, u = (g) => {
      var {
        modelValue: P,
        disabled: V,
        disabledColor: w,
        color: C,
        half: I,
        emptyColor: S,
        icon: D,
        halfIcon: O,
        emptyIcon: z
      } = e, B = C;
      return (V || n != null && n.disabled.value) && (B = w), g <= L(P) ? {
        color: B,
        name: D
      } : I && g <= L(P) + 0.5 ? {
        color: B,
        name: O
      } : {
        color: V || n != null && n.disabled.value ? w : S,
        name: z
      };
    }, d = (g, P) => {
      if (e.half) {
        var {
          offsetWidth: V
        } = P.target;
        P.offsetX <= Math.floor(V / 2) && (g -= 0.5);
      }
      $(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, L(e.modelValue)), f = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, P) => {
      var {
        readonly: V,
        disabled: w,
        onChange: C
      } = e;
      V || w || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, P), $(C, g), f());
    }, h = () => {
      $(e["onUpdate:modelValue"], 0), l();
    }, y = {
      reset: h,
      validate: v,
      resetValidation: l
    };
    return $(r, y), {
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
      n: Xa
    };
  }
});
$d.render = g0;
const Qr = $d;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var WS = Qr;
function y0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var b0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: y0
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
}, w0 = (e) => ($a(""), e = e(), Ta(), e), C0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, S0 = /* @__PURE__ */ w0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), k0 = [S0];
function $0(e, n) {
  return p(), T("svg", C0, k0);
}
var Td = x({});
Td.render = $0;
const T0 = Td;
var O0 = (e) => ($a(""), e = e(), Ta(), e), P0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, V0 = /* @__PURE__ */ O0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), E0 = [V0];
function M0(e, n) {
  return p(), T("svg", P0, E0);
}
var Od = x({});
Od.render = M0;
const B0 = Od;
var I0 = (e) => ($a(""), e = e(), Ta(), e), N0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, D0 = /* @__PURE__ */ I0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), A0 = [D0];
function z0(e, n) {
  return p(), T("svg", N0, A0);
}
var Pd = x({});
Pd.render = z0;
const L0 = Pd;
var {
  n: R0,
  classes: U0
} = ee("result");
function Y0(e, n) {
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
var Vd = x({
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
      n: R0,
      classes: U0,
      toNumber: L
    };
  }
});
Vd.render = Y0;
const F0 = Vd;
var H0 = (e) => ($a(""), e = e(), Ta(), e), j0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, W0 = /* @__PURE__ */ H0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), G0 = [W0];
function q0(e, n) {
  return p(), T("svg", j0, G0);
}
var Ed = x({});
Ed.render = q0;
const K0 = Ed;
var X0 = (e) => ($a(""), e = e(), Ta(), e), Z0 = {
  viewBox: "-4 -4 32 32"
}, J0 = /* @__PURE__ */ X0(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), Q0 = [J0];
function _0(e, n) {
  return p(), T("svg", Z0, Q0);
}
var Md = x({});
Md.render = _0;
const x0 = Md;
var {
  n: e1,
  classes: n1
} = ee("result");
function r1(e, n) {
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
          Ga(e.type),
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
var Bd = x({
  name: "VarResult",
  components: {
    Info: T0,
    Success: F0,
    Warning: L0,
    Error: B0,
    Question: K0,
    Empty: x0
  },
  props: b0,
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
      n: e1,
      classes: n1,
      toNumber: L,
      toPxNum: Ne,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
Bd.render = r1;
const _r = Bd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var GS = _r;
function a1(e) {
  return ["flex-start", "flex-end", "start", "end", "center", "space-between", "space-around"].includes(e);
}
function t1(e) {
  return ["flex-start", "center", "flex-end", "start", "end"].includes(e);
}
var o1 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: a1
  },
  align: {
    type: String,
    default: "flex-start",
    validator: t1
  },
  onClick: Y()
}, {
  n: i1,
  classes: l1
} = ee("row");
function s1(e, n) {
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
var Id = x({
  name: "VarRow",
  props: o1,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Tm(), t = R(() => {
      var s = Ne(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, l = (s) => {
      $(e.onClick, s);
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: i1,
      classes: l1,
      average: t,
      handleClick: l,
      padStartFlex: $t
    };
  }
});
Id.render = s1;
const xr = Id;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var qS = xr;
function u1(e) {
  return ["left", "right", "center"].includes(e);
}
var d1 = {
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
    validator: u1
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
  n: so,
  classes: v1
} = ee("select"), f1 = {
  key: 1
};
function c1(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), o = le("var-form-details");
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
                          onClick: n[0] || (n[0] = Vn(() => {
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
                  f1,
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
var Nd = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: ir,
    VarFormDetails: je
  },
  props: d1,
  setup(e) {
    var n = M(null), r = M(!1), a = R(() => e.multiple), t = R(() => e.focusColor), o = M(""), l = M([]), i = R(() => Nn(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: h
    } = Sb(), {
      errorMessage: y,
      validateWithTrigger: g,
      validate: P,
      // expose
      resetValidation: V
    } = bn(), w = M(null), C = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        l.value = ae.map(D);
      }
      !G && !Nn(J) && (o.value = D(J)), !G && Nn(J) && (o.value = "");
    }, I = (G) => {
      Ve(() => {
        var {
          validateTrigger: J,
          rules: ae,
          modelValue: oe
        } = e;
        g(J, G, ae, oe);
      });
    }, S = (G) => {
      var {
        value: J,
        label: ae
      } = G;
      return J.value != null ? J.value : ae.value;
    }, D = (G) => {
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
    }, O = () => {
      var {
        hint: G,
        modelValue: J
      } = e;
      if (!G && !Nn(J))
        return so("--placeholder-hidden");
      if (G && (!Nn(J) || r.value))
        return so("--placeholder-hint");
    }, z = () => n.value && window.getComputedStyle(n.value).width || "0px", B = () => {
      var {
        disabled: G,
        readonly: J,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || (s.value = z(), u.value = Ne(e.offsetY), r.value = !0, $(ae), I("onFocus"));
    }, b = () => {
      var {
        disabled: G,
        readonly: J,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || G || J || ($(ae), I("onBlur"));
    }, k = (G) => {
      var {
        disabled: J,
        readonly: ae,
        multiple: oe,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe ? c.filter((Fe) => {
          var {
            selected: nn
          } = Fe;
          return nn.value;
        }).map(S) : S(G);
        $(e["onUpdate:modelValue"], pe), $(ge, pe), I("onChange"), !oe && (r.value = !1);
      }
    }, j = () => {
      var {
        disabled: G,
        readonly: J,
        multiple: ae,
        clearable: oe,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || G || J || !oe)) {
        var pe = ae ? [] : void 0;
        $(e["onUpdate:modelValue"], pe), $(ge, pe), I("onClear");
      }
    }, Q = (G) => {
      var {
        disabled: J,
        onClick: ae
      } = e;
      v != null && v.disabled.value || J || ($(ae, G), I("onClick"));
    }, F = (G) => {
      var {
        disabled: J,
        readonly: ae,
        modelValue: oe,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || J || ae)) {
        var pe = oe, Fe = c.find((sn) => {
          var {
            label: ze
          } = sn;
          return ze.value === G;
        }), nn = pe.filter((sn) => {
          var ze;
          return sn !== ((ze = Fe.value.value) != null ? ze : Fe.label.value);
        });
        $(e["onUpdate:modelValue"], nn), $(ge, nn), I("onClose");
      }
    }, E = () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G) {
        var ae = J;
        c.forEach((oe) => oe.sync(ae.includes(S(oe))));
      } else
        c.forEach((oe) => oe.sync(J === S(oe)));
      C();
    }, H = () => {
      s.value = z(), u.value = Ne(e.offsetY), r.value = !0;
    }, U = () => {
      r.value = !1;
    }, X = () => P(e.rules, e.modelValue), N = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), V();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: G,
        modelValue: J
      } = e;
      if (G && !we(J))
        throw Error("The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, E, {
      deep: !0
    }), ie(() => f.value, E);
    var Z = {
      wrapWidth: R(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: k,
      reset: N,
      validate: X,
      resetValidation: V
    };
    return h(Z), $(d, Z), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: l,
      isEmptyModelValue: i,
      menuEl: w,
      n: so,
      classes: v1,
      computePlaceholderState: O,
      handleFocus: B,
      handleBlur: b,
      handleClear: j,
      handleClick: Q,
      handleClose: F,
      reset: N,
      validate: X,
      resetValidation: V,
      focus: H,
      blur: U
    };
  }
});
Nd.render = c1;
const ea = Nd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var KS = ea, m1 = {
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
  n: p1,
  classes: h1
} = ee("skeleton");
function g1(e, n) {
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
var Dd = x({
  name: "VarSkeleton",
  props: m1,
  setup() {
    return {
      n: p1,
      classes: h1,
      toSizeUnit: he,
      toNumber: L
    };
  }
});
Dd.render = g1;
const na = Dd;
na.install = function(e) {
  e.component(na.name, na);
};
var XS = na;
function y1(e) {
  return ["always", "normal", "never"].includes(e);
}
var Be;
(function(e) {
  e.First = "1", e.Second = "2";
})(Be || (Be = {}));
var b1 = {
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
    validator: y1
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
  n: Al,
  classes: w1
} = ee("slider"), C1 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function S1(e, n) {
  var r = le("var-form-details");
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
            onTouchstart: Vn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Vn((t) => e.move(t, a.enumValue), ["stop"]),
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
          C1
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
var Ad = x({
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: b1,
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
    }), u = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = M(null), v = M(0), f = M(!1), c = Me({
      [Be.First]: s(),
      [Be.Second]: s()
    }), h = R(() => L(e.max) - L(e.min)), y = R(() => v.value / h.value * L(e.step)), g = R(() => {
      var {
        modelValue: U,
        range: X
      } = e, N = [];
      return X && we(U) ? N = [{
        value: I(U[0]),
        enumValue: Be.First,
        text: S(U[0])
      }, {
        value: I(U[1]),
        enumValue: Be.Second,
        text: S(U[1])
      }] : _e(U) && (N = [{
        value: I(U),
        enumValue: Be.First,
        text: S(U)
      }]), N;
    }), P = R(() => {
      var {
        activeColor: U,
        range: X,
        modelValue: N
      } = e, Z = X && we(N) ? I(Math.min(N[0], N[1])) : 0, G = X && we(N) ? I(Math.max(N[0], N[1])) - Z : I(N);
      return {
        width: G + "%",
        left: Z + "%",
        background: U
      };
    }), V = R(() => e.disabled || (r == null ? void 0 : r.disabled.value)), w = R(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (U) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[U].active, I = (U) => {
      var {
        min: X,
        max: N
      } = e;
      return U < L(X) ? 0 : U > L(N) ? 100 : (U - L(X)) / h.value * 100;
    }, S = (U) => {
      if (!_e(U))
        return 0;
      var X = U;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var N = parseInt("" + X, 10) === X;
      return N ? X : L(X.toPrecision(5));
    }, D = (U, X) => {
      var N = [], {
        step: Z,
        range: G,
        modelValue: J,
        onChange: ae,
        min: oe
      } = e, ge = L(Z), pe = Math.round(U / y.value), Fe = pe * ge + L(oe), nn = c[X].percentValue * ge + L(oe);
      if (c[X].percentValue = pe, G && we(J) && (N = X === Be.First ? [Fe, J[1]] : [J[0], Fe]), nn !== Fe) {
        var sn = G ? N.map((ze) => S(ze)) : S(Fe);
        $(ae, sn), $(e["onUpdate:modelValue"], sn), u();
      }
    }, O = (U) => {
      if (!e.range)
        return Be.First;
      var X = c[Be.First].percentValue * y.value, N = c[Be.Second].percentValue * y.value, Z = Math.abs(U - X), G = Math.abs(U - N);
      return Z <= G ? Be.First : Be.Second;
    }, z = (U, X) => {
      v.value || (v.value = d.value.offsetWidth), !(V.value || w.value) && ($(e.onStart), f.value = !0, c[X].startPosition = U.touches[0].clientX);
    }, B = (U, X) => {
      if (!(V.value || w.value || !f.value)) {
        var N = U.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), D(N, X);
      }
    }, b = (U) => {
      var {
        range: X,
        modelValue: N,
        onEnd: Z,
        step: G,
        min: J
      } = e;
      if (!(V.value || w.value)) {
        var ae = [];
        c[U].currentLeft = c[U].percentValue * y.value, c[U].active = !1;
        var oe = c[U].percentValue * L(G) + L(J);
        X && we(N) && (ae = U === Be.First ? [oe, N[1]] : [N[0], oe]), $(Z, X ? ae : oe), f.value = !1;
      }
    }, k = (U) => {
      if (!(V.value || w.value) && !U.target.closest("." + Al("thumb"))) {
        var X = U.clientX - Pv(U.currentTarget), N = O(X);
        D(X, N), b(N);
      }
    }, j = () => {
      var U = L(e.step);
      return isNaN(U) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : U < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: U,
        modelValue: X
      } = e;
      return U && !we(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !U && we(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : U && we(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, F = function(U, X) {
      U === void 0 && (U = e.modelValue), X === void 0 && (X = L(e.step));
      var N = (Z) => {
        var {
          min: G,
          max: J
        } = e;
        return Z < L(G) ? 0 : Z > L(J) ? h.value / X : (Z - L(G)) / X;
      };
      e.range && we(U) ? (c[Be.First].percentValue = N(U[0]), c[Be.First].currentLeft = c[Be.First].percentValue * y.value, c[Be.Second].percentValue = N(U[1]), c[Be.Second].currentLeft = c[Be.Second].percentValue * y.value) : _e(U) && (c[Be.First].currentLeft = N(U) * y.value);
    }, E = () => {
      var U = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], U), l();
    }, H = {
      reset: E,
      validate: i,
      resetValidation: l
    };
    return $(n, H), ie([() => e.modelValue, () => e.step], (U) => {
      var [X, N] = U;
      !j() || !Q() || f.value || F(X, L(N));
    }), ie(v, () => F()), en(() => {
      !j() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: Al,
      classes: w1,
      Thumbs: Be,
      sliderEl: d,
      getFillStyle: P,
      isDisabled: V,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: Je,
      toNumber: L,
      showLabel: C,
      start: z,
      move: B,
      end: b,
      click: k
    };
  }
});
Ad.render = S1;
const ra = Ad;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var ZS = ra;
function _o() {
  return _o = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _o.apply(this, arguments);
}
function k1(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function $1(e) {
  return Oi.includes(e);
}
var zd = {
  type: {
    type: String,
    validator: $1
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: k1
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
  loadingType: Ke(xn, "type"),
  loadingSize: Ke(xn, "size"),
  loadingRadius: Ke(xn, "radius"),
  loadingColor: _o({}, Ke(xn, "color"), {
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
  n: T1,
  classes: O1
} = ee("snackbar"), P1 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function V1(e, n) {
  var r = le("var-icon"), a = le("var-loading");
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
  )), [[Wa, e.show]]);
}
var Ld = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: zd,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = st(() => e.show, 1);
    Gt(() => e.show, () => e.lockScroll);
    var a = R(() => e.type === "loading" || e.forbidClick), t = R(() => e.type ? P1[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (l) => {
      l ? ($(e.onOpen), o()) : l === !1 && (clearTimeout(n.value), $(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), en(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: Oi,
      n: T1,
      classes: O1,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
Ld.render = V1;
const Rd = Ld;
var {
  n: E1
} = ee("snackbar");
function M1(e, n) {
  var r = le("var-snackbar-core");
  return p(), me(
    ja,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [re(
      De,
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
var Ud = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Rd
  },
  props: zd,
  setup() {
    var {
      disabled: e
    } = si();
    return {
      n: E1,
      disabled: e
    };
  }
});
Ud.render = M1;
const aa = Ud;
function tt() {
  return tt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, tt.apply(this, arguments);
}
function B1(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ut(e);
}
var Oi = ["loading", "success", "warning", "info", "error"], zl = 0, xo = !1, Yd, Ya = !1, Fd = {
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
}, yn = Me([]), Pi = Fd, I1 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, N1 = {
  setup() {
    return () => {
      var e = yn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ya && (a.position = "top");
        var l = Ya ? "relative" : "absolute", i = tt({
          position: l
        }, U1(a.position));
        return re(Rd, Ee(a, {
          key: r,
          style: i,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(bv, Ee(I1, {
        style: {
          zIndex: dn.zIndex
        },
        onAfterEnter: D1,
        onAfterLeave: A1
      }), B1(e) ? e : {
        default: () => [e]
      });
    };
  }
}, jn = function(e) {
  var n = L1(e), r = Me(tt({}, Pi, n));
  r.show = !0, xo || (xo = !0, Yd = qa(N1).unmountInstance);
  var {
    length: a
  } = yn, t = {
    id: zl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ya)
    z1(t);
  else {
    var o = "update-" + zl;
    R1(r, o);
  }
  return {
    clear() {
      !Ya && yn.length ? yn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Oi.forEach((e) => {
  jn[e] = (n) => (ti(n) ? n.type = e : n = {
    content: n,
    type: e
  }, jn(n));
});
jn.install = function(e) {
  e.component(aa.name, aa);
};
jn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ya && (yn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ya = e);
};
jn.clear = function() {
  yn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
jn.setDefaultOptions = function(e) {
  Pi = e;
};
jn.resetDefaultOptions = function() {
  Pi = Fd;
};
jn.Component = aa;
function D1(e) {
  var n = e.getAttribute("data-id"), r = yn.find((a) => a.id === L(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function A1(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = yn.find((t) => t.id === L(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = yn.every((t) => t.animationEnd);
  a && ($(Yd), yn = Me([]), xo = !1);
}
function z1(e) {
  yn.push(e);
}
function L1(e) {
  return e === void 0 && (e = {}), Ge(e) ? {
    content: e
  } : e;
}
function R1(e, n) {
  var [r] = yn;
  r.reactiveSnackOptions = tt({}, r.reactiveSnackOptions, e), r._update = n;
}
function U1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
aa.install = function(e) {
  e.component(aa.name, aa);
};
var JS = aa;
const ei = jn;
var Hd = (e) => ["mini", "small", "normal", "large"].includes(e), Y1 = (e) => Hd(e) || we(e) || _e(e) || Ge(e), F1 = (e) => ["start", "end", "center", "space-around", "space-between", "flex-start", "flex-end"].includes(e), H1 = (e) => ["stretch", "center", "start", "end", "baseline", "flex-start", "flex-end"].includes(e), j1 = {
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Y1
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
    validator: F1
  },
  align: {
    type: String,
    validator: H1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function un(e) {
  return "calc(" + e + " / 2)";
}
function W1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: l
  } = r, i = "0";
  return a === "row" && (["flex-start", "center", "flex-end", "start", "end"].includes(t) ? o !== l ? i = un(e) + " " + n + " " + un(e) + " 0" : i = un(e) + " 0" : t === "space-around" ? i = un(e) + " " + un(n) : t === "space-between" && (o === 0 ? i = un(e) + " " + un(n) + " " + un(e) + " 0" : o === l ? i = un(e) + " 0 " + un(e) + " " + un(n) : i = un(e) + " " + un(n))), a === "column" && o !== l && (i = "0 0 " + e + " 0"), i;
}
var {
  n: uo,
  classes: G1
} = ee("space");
const ta = x({
  name: "VarSpace",
  props: j1,
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
      } = e, v = (t = $(r.default)) != null ? t : [], f = Hd(d), [c, h] = a(d, f), y = (V) => {
        var w = [];
        return V.forEach((C) => {
          if (C.type !== wv) {
            if (C.type === Pe && we(C.children)) {
              C.children.forEach((I) => {
                w.push(I);
              });
              return;
            }
            w.push(C);
          }
        }), w;
      };
      v = y(v);
      var g = v.length - 1, P = v.map((V, w) => {
        var C = W1(c, h, {
          direction: u,
          justify: l,
          index: w,
          lastIndex: g
        });
        return re("div", {
          style: {
            margin: C
          }
        }, [V]);
      });
      return re("div", {
        class: G1(uo(), uo("$--box"), [o, uo("--inline")]),
        style: {
          flexDirection: u,
          justifyContent: $t(l),
          alignItems: $t(i),
          flexWrap: s ? "wrap" : "nowrap",
          margin: u === "row" ? "calc(-1 * " + c + " / 2) 0" : void 0
        }
      }, [P]);
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var QS = ta, q1 = {
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
}, jd = Symbol("STEPS_BIND_STEP_KEY"), Wd = Symbol("STEPS_COUNT_STEP_KEY");
function K1() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(jd), {
    length: r
  } = vn(Wd);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function X1() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(jd), {
    index: r
  } = fn(Wd);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Z1,
  classes: J1
} = ee("step"), Q1 = {
  key: 3
};
function _1(e, n) {
  var r = le("var-icon");
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
            Q1,
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
var Gd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: q1,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = X1(), {
      active: l,
      length: i,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = R(() => l.value === a.value), c = R(() => a.value !== -1 && l.value > a.value), h = {
      index: a
    }, y = () => v(a.value), g = (P) => {
      d.value === "horizontal" && (e.value = P);
    };
    return o(h), ie(i, (P) => {
      if (r.value = P - 1 === a.value, e.value) {
        var V = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + V + "px";
      }
    }), {
      n: Z1,
      classes: J1,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: y,
      getRef: g
    };
  }
});
Gd.render = _1;
const oa = Gd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var _S = oa;
function x1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ew = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: x1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: nw
} = ee("steps");
function rw(e, n) {
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
var qd = x({
  name: "VarSteps",
  props: ew,
  setup(e) {
    var n = R(() => e.active), r = R(() => e.activeColor), a = R(() => e.inactiveColor), t = R(() => e.direction), {
      length: o,
      bindStep: l
    } = K1(), i = (u) => {
      $(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: i
    };
    return l(s), {
      n: nw
    };
  }
});
qd.render = rw;
const ia = qd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var xS = ia, aw = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: tw
} = ee("style-provider"), ow = x({
  name: "VarStyleProvider",
  props: aw,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => ql(e.tag, {
      class: tw(),
      style: rs(e.styleVars)
    }, $(r.default));
  }
});
const la = ow;
var vo = [];
function ot(e) {
  vo.forEach((r) => document.documentElement.style.removeProperty(r)), vo.length = 0;
  var n = rs(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), vo.push(a);
  });
}
ot.Component = la;
la.install = function(e) {
  e.component(la.name, la);
};
ot.install = function(e) {
  e.component(la.name, la);
};
var ek = la, iw = {
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
  n: lw,
  classes: sw
} = ee("switch");
function uw(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = Ye("ripple");
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
var Kd = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  props: iw,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: l
    } = bn(), i = () => o(e.rules, e.modelValue), s = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = R(() => {
      var {
        size: h,
        modelValue: y,
        color: g,
        closeColor: P,
        loadingColor: V,
        activeValue: w
      } = e;
      return {
        handle: {
          width: Je(h),
          height: Je(h),
          backgroundColor: y === w ? g : P,
          color: V
        },
        ripple: {
          left: y === w ? Je(h, 0.5) : "-" + Je(h, 0.5),
          color: y === w ? g : P || "#999",
          width: Je(h, 2),
          height: Je(h, 2)
        },
        track: {
          height: Je(h, 0.72),
          width: Je(h, 1.9),
          borderRadius: Je(h, 2 / 3),
          filter: y === w || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === w ? g : P
        },
        switch: {
          height: Je(h, 1.2),
          width: Je(h, 2)
        }
      };
    }), d = R(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return Je(h, 0.4);
    }), v = (h) => {
      var {
        onClick: y,
        onChange: g,
        disabled: P,
        loading: V,
        readonly: w,
        modelValue: C,
        activeValue: I,
        inactiveValue: S,
        "onUpdate:modelValue": D
      } = e;
      if ($(y, h), !(P || V || w || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var O = C === I ? S : I;
        $(g, O), $(D, O), s();
      }
    }, f = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), l();
    }, c = {
      reset: f,
      validate: i,
      resetValidation: l
    };
    return $(n, c), {
      n: lw,
      classes: sw,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Kd.render = uw;
const sa = Kd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var nk = sa, dw = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, Xd = Symbol("TABS_BIND_TAB_KEY"), Zd = Symbol("TABS_COUNT_TAB_KEY");
function vw() {
  var {
    childProviders: e,
    bindChildren: n
  } = on(Xd), {
    length: r
  } = vn(Zd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function fw() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Xd), {
    index: r
  } = fn(Zd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: yt,
  classes: cw
} = ee("tab");
function mw(e, n) {
  var r = Ye("ripple");
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
var Jd = x({
  name: "VarTab",
  directives: {
    Ripple: Ae
  },
  props: dw,
  setup(e) {
    var n = M(null), r = R(() => e.name), a = R(() => e.disabled), t = R(() => n.value), {
      index: o,
      tabs: l,
      bindTabs: i
    } = fw(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = l, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    i(y);
    var g = () => {
      var {
        disabled: w,
        name: C
      } = e;
      return w ? f.value : u.value === C || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, P = () => {
      var {
        disabled: w,
        name: C
      } = e;
      return w ? yt("$-tab--disabled") : u.value === C || u.value === (o == null ? void 0 : o.value) ? yt("$-tab--active") : yt("$-tab--inactive");
    }, V = (w) => {
      var {
        disabled: C,
        name: I,
        onClick: S
      } = e;
      C || ($(S, I ?? o.value, w), s(y));
    };
    return ie(() => e.name, h), ie(() => e.disabled, h), {
      n: yt,
      classes: cw,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: P,
      handleClick: V
    };
  }
});
Jd.render = mw;
const ua = Jd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var rk = ua, Qd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), _d = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function pw() {
  var {
    bindChildren: e,
    childProviders: n
  } = on(Qd), {
    length: r
  } = vn(_d);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function hw() {
  var {
    parentProvider: e,
    bindParent: n
  } = ln(Qd), {
    index: r
  } = fn(_d);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var gw = {
  name: {
    type: [String, Number]
  }
}, {
  n: yw,
  classes: bw
} = ee("tab-item");
function ww(e, n) {
  var r = le("var-swipe-item");
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
var xd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Un
  },
  props: gw,
  setup(e) {
    var n = M(!1), r = M(!1), a = R(() => e.name), {
      index: t,
      bindTabsItems: o
    } = hw(), l = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, i = {
      index: t,
      name: a,
      setCurrent: l
    };
    return o(i), {
      n: yw,
      classes: bw,
      current: n,
      initSlot: r
    };
  }
});
xd.render = ww;
const da = xd;
da.install = function(e) {
  e.component(da.name, da);
};
var ak = da, Cw = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Sw,
  classes: kw
} = ee("table");
function $w(e, n) {
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
var ev = x({
  name: "VarTable",
  props: Cw,
  setup() {
    return {
      toSizeUnit: he,
      n: Sw,
      classes: kw
    };
  }
});
ev.render = $w;
const va = ev;
va.install = function(e) {
  e.component(va.name, va);
};
var tk = va;
function Ll(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Tw = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Ll
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Ll
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
  stickyCssMode: Ke(kt, "cssMode"),
  stickyZIndex: Ke(kt, "zIndex"),
  offsetTop: Ke(kt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: Y(),
  onChange: Y(),
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
function Ul(e) {
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
  n: Ow,
  classes: Pw
} = ee("tabs");
function Vw(e, n) {
  return p(), me(
    Ga(e.sticky ? e.n("$-sticky") : e.Transition),
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
var nv = x({
  name: "VarTabs",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Tw,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), l = M(null), i = R(() => e.active), s = R(() => e.activeColor), u = R(() => e.inactiveColor), d = R(() => e.disabledColor), v = R(() => e.itemDirection), f = M(null), {
      tabList: c,
      bindTabList: h,
      length: y
    } = vw(), g = (B) => {
      var b, k = (b = B.name.value) != null ? b : B.index.value, {
        active: j,
        onChange: Q,
        onClick: F
      } = e;
      $(e["onUpdate:active"], k), $(F, k), k !== j && $(Q, k);
    }, P = () => c.find((B) => {
      var {
        name: b
      } = B;
      return e.active === b.value;
    }), V = (B) => c.find((b) => {
      var {
        index: k
      } = b;
      return (B ?? e.active) === k.value;
    }), w = () => {
      if (y.value !== 0) {
        var {
          active: B
        } = e;
        if (_e(B)) {
          var b = B > y.value - 1 ? y.value - 1 : 0;
          return $(e["onUpdate:active"], b), V(b);
        }
      }
    }, C = () => {
      o.value = c.length >= 5;
    }, I = (B) => {
      var {
        element: b
      } = B, k = b.value;
      k && (e.layoutDirection === "horizontal" ? (n.value = k.offsetWidth + "px", a.value = k.offsetLeft + "px") : (r.value = k.offsetHeight + "px", t.value = k.offsetTop + "px"));
    }, S = (B) => {
      var {
        element: b
      } = B;
      if (o.value) {
        var k = l.value, j = b.value;
        if (e.layoutDirection === "horizontal") {
          var Q = j.offsetLeft + j.offsetWidth / 2 - k.offsetWidth / 2;
          xa(k, {
            left: Q,
            animation: mo
          });
        } else {
          var F = j.offsetTop + j.offsetHeight / 2 - k.offsetHeight / 2;
          xa(k, {
            top: F,
            animation: mo
          });
        }
      }
    }, D = () => {
      var B = P() || V() || w();
      !B || B.disabled.value || (C(), I(B), S(B));
    }, O = /* @__PURE__ */ function() {
      var B = Ul(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), z = {
      active: i,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: D,
      onTabClick: g
    };
    return h(z), ie(() => y.value, /* @__PURE__ */ Ul(function* () {
      yield En(), D();
    })), ie(() => e.active, D), ga(window, "resize", D), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: l,
      Transition: De,
      toSizeUnit: he,
      n: Ow,
      classes: Pw,
      resize: D,
      resizeSticky: O
    };
  }
});
nv.render = Vw;
const fa = nv;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var ok = fa, Ew = {
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
function Yl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mw(e) {
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
  n: Bw
} = ee("tabs-items");
function Iw(e, n) {
  var r = le("var-swipe");
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
var rv = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: Rn
  },
  props: Ew,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = pw(), o = (f) => r.find((c) => {
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
      h && (r.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((g) => {
        var {
          index: P
        } = g;
        return P.value === f;
      }), y = (c = h.name.value) != null ? c : h.index.value;
      $(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ Mw(function* () {
      yield En(), s(e.active);
    })), {
      swipe: n,
      n: Bw,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
rv.render = Iw;
const ca = rv;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var ik = ca;
const Nw = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Dw = {
  "--badge-default-color": "#555"
}, Aw = {
  "--button-default-color": "#303030"
}, zw = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Lw = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Rw = {
  "--checkbox-unchecked-color": "#fff"
}, Uw = {
  "--chip-default-color": "#555"
}, Yw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Fw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, Hw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, jw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, Ww = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Gw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, qw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, Kw = {
  "--popup-content-background-color": "#1e1e1e"
}, Xw = {
  "--pull-refresh-background": "#303030"
}, Zw = {
  "--radio-unchecked-color": "#fff"
}, Jw = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, Qw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, _w = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, xw = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, eC = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, nC = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, rC = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, aC = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, tC = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, oC = {
  "--tabs-background": "#1e1e1e"
}, iC = {
  "--app-bar-color": "#272727"
}, lC = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, sC = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, uC = {
  "--menu-background-color": "#272727"
}, dC = {
  "--breadcrumb-inactive-color": "#aaa"
}, vC = {
  "--paper-background": "#303030"
}, fC = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function ni() {
  return ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ni.apply(this, arguments);
}
const cC = ni({
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
}, Aw, Lw, zw, aC, Fw, _w, oC, nC, Kw, Hw, Nw, Uw, Dw, tC, Yw, Xw, eC, xw, Gw, rC, Ww, Qw, Zw, Rw, jw, qw, iC, lC, sC, uC, Jw, dC, vC, fC);
var mC = {
  dark: cC
}, lk = null;
const ri = mC;
var pn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Qe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Fl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function pC(e) {
  return ["ampm", "24hr"].includes(e);
}
var hC = {
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
    validator: pC
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
}, av = (e, n) => e === "24hr" || n === "am", Vi = (e, n, r) => {
  var a = pn.findIndex((o) => L(o) === L(r)), t = av(e, n) ? r : Qe[a];
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
}, tv = (e) => {
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
  } = Vi(t, o, l), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (i && !s) {
    var {
      hour: h,
      minute: y
    } = an(i);
    f = h === v && a > y;
  }
  if (!i && s) {
    var {
      hour: g,
      minute: P
    } = an(s);
    f = g === v && a < P;
  }
  if (i && s) {
    var {
      hour: V,
      minute: w
    } = an(i), {
      hour: C,
      minute: I
    } = an(s);
    f = C === v && a < I || V === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, ov = (e) => {
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
  } = Vi(t, o, l), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: g,
      second: P
    } = an(s);
    c = y === f && g < i || g === i && a > P;
  }
  if (!s && u) {
    var {
      hour: V,
      minute: w,
      second: C
    } = an(u);
    c = V === f && w > i || w === i && a > C;
  }
  if (s && u) {
    var {
      hour: I,
      minute: S,
      second: D
    } = an(s), {
      hour: O,
      minute: z,
      second: B
    } = an(u);
    c = I === f && S < i || O === f && z > i || I === f && S === i && a > D || O === f && z === i && a < B;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: gC,
  classes: yC
} = ee("time-picker");
function bC(e, n) {
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
var iv = x({
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
    } = n, a = M(null), t = M([]), o = M([]), l = R(() => ({
      transform: "rotate(" + L(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), i = R(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = R(() => e.type === "hour" ? pn : Fl), u = (g, P) => {
      var V;
      g = (V = g) != null ? V : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? tv : ov, C = {
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
      return P && e.type === "minute" && Reflect.deleteProperty(C, "minute"), w(C);
    }, d = () => {
      if (i.value === void 0)
        return e.color;
      var g = e.isInner ? Qe[i.value] : s.value[i.value];
      return s.value === Fl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, P) => P ? i.value === g && e.isInner : i.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (av(e.format, e.ampm))
          return t.value.includes(g);
        var P = pn.findIndex((V) => V === g);
        return o.value.includes(P);
      }
      return u(g, !0);
    }, c = (g, P, V) => {
      var w = 2 * Math.PI / 12 * g - Math.PI / 2, C = 50 * (1 + Math.cos(w)), I = 50 * (1 + Math.sin(w)), S = () => v(g, V) ? f(P) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: D,
        color: O
      } = S();
      return {
        left: C + "%",
        top: I + "%",
        backgroundColor: D,
        color: O
      };
    }, h = () => {
      var {
        width: g,
        height: P
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: P
      };
    }, y = () => {
      if (i.value !== void 0) {
        var g = e.ampm === "am" ? pn : Qe;
        return ha(g[i.value], 2, "0");
      }
    };
    return ie([i, () => e.isInner], (g, P) => {
      var [V, w] = g, [C, I] = P, S = V === C && w === I;
      if (!(S || e.type !== "hour" || i.value === void 0)) {
        var D = w ? Qe[i.value] : y(), O = e.useSeconds ? ":" + e.time.second : "", z = D + ":" + e.time.minute + O;
        e.preventNextUpdate || r("update", z), r("change-prevent-update");
      }
    }), ie(() => e.rad, (g, P) => {
      if (!(e.type === "hour" || g === void 0 || P === void 0)) {
        var V = g / 6 >= 0 ? g / 6 : g / 6 + 60, w = P / 6 >= 0 ? P / 6 : P / 6 + 60;
        if (V !== w) {
          var C, {
            hourStr: I
          } = Vi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var S = te().minute(V).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            C = I + ":" + S + D;
          }
          if (e.type === "second") {
            var O = te().second(V).format("ss"), z = e.useSeconds ? ":" + O : "";
            C = I + ":" + e.time.minute + z;
          }
          r("update", C);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [P, V, w] = g;
      if (t.value = [], P && !V) {
        var {
          hour: C
        } = an(P), I = pn.filter((H) => L(H) > C), S = Qe.filter((H) => L(H) > C);
        t.value = [...I, ...S];
      }
      if (!P && V) {
        var {
          hour: D
        } = an(V), O = pn.filter((H) => L(H) < D), z = Qe.filter((H) => L(H) < D);
        t.value = [...O, ...z];
      }
      if (P && V) {
        var {
          hour: B
        } = an(P), {
          hour: b
        } = an(V), k = pn.filter((H) => L(H) < b || L(H) > B), j = Qe.filter((H) => L(H) < b || L(H) > B);
        t.value = [...k, ...j];
      }
      if (w != null && w.hours) {
        var {
          hours: Q
        } = w, F = pn.filter((H) => !Q(L(H))), E = Qe.filter((H) => !Q(L(H)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...F, ...E])];
      }
      o.value = t.value.map((H) => Qe.findIndex((U) => H === U)).filter((H) => H >= 0);
    }, {
      immediate: !0
    }), {
      n: gC,
      classes: yC,
      hours24: Qe,
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
iv.render = bC;
const wC = iv;
var {
  n: CC,
  classes: SC
} = ee("time-picker"), kC = (e) => ($a(""), e = e(), Ta(), e), $C = /* @__PURE__ */ kC(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), TC = {
  key: 0
};
function OC(e, n) {
  var r = le("clock");
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
        ), $C, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (p(), T("span", TC, ":")) : _("v-if", !0), e.useSeconds ? (p(), T(
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
          De,
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
var lv = x({
  name: "VarTimePicker",
  components: {
    Clock: wC
  },
  props: hC,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), l = M(!1), i = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), c = M("am"), h = M(!1), y = M(!1), g = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), P = Me({
      x: 0,
      y: 0
    }), V = Me({
      x: [],
      y: []
    }), w = R(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (N) => {
      $(e["onUpdate:modelValue"], N), $(e.onChange, N);
    }, I = (N) => N * 57.29577951308232, S = (N) => {
      i.value = !1, y.value = !1, f.value = N;
    }, D = (N) => {
      var {
        disableHour: Z
      } = a.value, G = pn.findIndex((oe) => L(oe) === L(g.value.hour)), J = N === "am" ? pn : Qe, ae = [...J.slice(G), ...J.slice(0, G)];
      return ae.find((oe, ge) => (o.value = ge !== 0, !Z.includes(oe)));
    }, O = (N) => {
      if (!e.readonly) {
        c.value = N;
        var Z = D(N);
        if (Z) {
          var G = e.useSeconds ? ":" + g.value.second : "", J = ha(Z, 2, "0") + ":" + g.value.minute + G;
          C(J);
        }
      }
    }, z = (N, Z) => {
      var G = N >= V.x[0] && N <= V.x[1], J = Z >= V.y[0] && Z <= V.y[1];
      return G && J;
    }, B = (N) => {
      var Z = e.format === "24hr" ? "HH" : "hh", {
        hour: G,
        minute: J,
        second: ae
      } = an(N);
      return {
        hour: te().hour(G).format(Z),
        minute: te().minute(J).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, b = (N) => {
      var Z = N / 30;
      return Z >= 0 ? Z : Z + 12;
    }, k = () => {
      var {
        width: N,
        height: Z
      } = a.value.getSize(), G = P.x - N / 2 - 8, J = P.x + N / 2 + 8, ae = P.y - Z / 2 - 8, oe = P.y + Z / 2 + 8;
      return {
        rangeXMin: G,
        rangeXMax: J,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, j = (N, Z, G) => {
      var {
        disableHour: J
      } = a.value;
      l.value = z(N, Z);
      var ae = Math.round(G / 30) * 30 + 90, oe = b(ae), ge = t.value ? pn[oe] : Qe[oe];
      if (J.includes(ge) || (t.value = e.format === "24hr" ? z(N, Z) : !1), t.value === l.value) {
        var pe = t.value || c.value === "pm" ? Qe[oe] : pn[oe];
        h.value = J.includes(pe), !h.value && (u.value = ae, i.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: Z,
        allowedTime: e.allowedTime
      };
      y.value = tv(ae), !y.value && (d.value = G, s.value = !0);
    }, F = (N) => {
      var {
        disableHour: Z
      } = a.value, G = Math.round(N / 6) * 6 + 90, J = G / 6 >= 0 ? G / 6 : G / 6 + 60, ae = {
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
      ov(ae) || (v.value = G);
    }, E = () => {
      var {
        left: N,
        top: Z,
        width: G,
        height: J
      } = n.value.getBoundingClientRect();
      if (P.x = N + G / 2, P.y = Z + J / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: ge,
          rangeYMax: pe
        } = k();
        V.x = [ae, oe], V.y = [ge, pe];
      }
    }, H = (N) => {
      if (N.preventDefault(), !e.readonly) {
        E();
        var {
          clientX: Z,
          clientY: G
        } = N.touches[0], J = Z - P.x, ae = G - P.y, oe = Math.round(I(Math.atan2(ae, J)));
        f.value === "hour" ? j(Z, G, oe) : f.value === "minute" ? Q(oe) : F(oe);
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
    return ie(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: Z,
          minute: G,
          second: J
        } = an(N), ae = te().hour(Z).format("hh"), oe = te().hour(Z).format("HH"), ge = te().minute(G).format("mm"), pe = te().second(J).format("ss");
        u.value = (ae === "12" ? 0 : L(ae)) * 30, d.value = L(ge) * 6, v.value = L(pe) * 6, g.value = B(N), e.format !== "24hr" && (c.value = ha("" + Z, 2, "0") === oe && Qe.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && Qe.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: CC,
      classes: SC,
      getRad: w,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: H,
      checkPanel: S,
      checkAmpm: O,
      end: U,
      update: C,
      changePreventUpdate: X
    };
  }
});
lv.render = OC;
const ma = lv;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var sk = ma, PC = {
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
function Hl(e, n, r, a, t, o, l) {
  try {
    var i = e[o](l), s = i.value;
  } catch (u) {
    r(u);
    return;
  }
  i.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function l(s) {
        Hl(o, a, t, l, i, "next", s);
      }
      function i(s) {
        Hl(o, a, t, l, i, "throw", s);
      }
      l(void 0);
    });
  };
}
var {
  n: VC,
  classes: EC
} = ee("uploader"), MC = 0, BC = ["onClick"], IC = ["onClick"], NC = ["src", "alt"], DC = ["multiple", "accept", "capture", "disabled"], AC = ["src"];
function zC(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), o = Ye("ripple");
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
              onClick: Vn((i) => e.handleRemove(l), ["stop"])
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
            IC
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
            NC
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
          BC
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
          DC
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
            AC
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
var sv = x({
  name: "VarUploader",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarPopup: hn,
    VarFormDetails: je
  },
  props: PC,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = R(() => {
      var {
        maxlength: F,
        modelValue: {
          length: E
        }
      } = e;
      return _e(F) ? E + " / " + F : "";
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
        modelValue: F,
        hideList: E
      } = e;
      return E ? [] : F;
    }), f = (F) => {
      var {
        disabled: E,
        readonly: H,
        previewed: U
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || E || H || !U)) {
        var {
          url: X
        } = F;
        if (Ge(X) && Di(X)) {
          Hn(X);
          return;
        }
        Ge(X) && Ai(X) && (a.value = F, r.value = !0);
      }
    }, c = (F) => ({
      id: MC++,
      url: "",
      cover: "",
      name: F.name,
      file: F
    }), h = (F) => {
      var E = F.target, {
        files: H
      } = E;
      return Array.from(H);
    }, y = (F) => new Promise((E) => {
      var H = new FileReader();
      H.onload = () => {
        var U = H.result;
        F.file.type.startsWith("image") && (F.cover = U), F.url = U, E(F);
      }, H.readAsDataURL(F.file);
    }), g = (F) => F.map(y), P = (F) => {
      var {
        onBeforeRead: E
      } = e;
      return F.map((H) => new Promise((U) => {
        E || U({
          valid: !0,
          varFile: H
        });
        var X = $(E, Me(H));
        X = we(X) ? X : [X], Promise.all(X).then((N) => {
          U({
            valid: !N.some((Z) => !Z),
            varFile: H
          });
        });
      }));
    }, V = /* @__PURE__ */ function() {
      var F = jl(function* (E) {
        var {
          maxsize: H,
          maxlength: U,
          modelValue: X,
          onOversize: N,
          onAfterRead: Z,
          readonly: G,
          disabled: J
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          var ae = (ze) => ze.filter((cn) => cn.file.size > L(H) ? ($(N, Me(cn)), !1) : !0), oe = (ze) => {
            var cn = Math.min(ze.length, L(U) - X.length);
            return ze.slice(0, cn);
          }, ge = h(E), pe = ge.map(c);
          pe = H != null ? ae(pe) : pe, pe = U != null ? oe(pe) : pe;
          var Fe = yield Promise.all(g(pe)), nn = yield Promise.all(P(Fe)), sn = nn.filter((ze) => {
            var {
              valid: cn
            } = ze;
            return cn;
          }).map((ze) => {
            var {
              varFile: cn
            } = ze;
            return cn;
          });
          $(e["onUpdate:modelValue"], [...X, ...sn]), E.target.value = "", sn.forEach((ze) => $(Z, Me(ze)));
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var F = jl(function* (E) {
        var {
          disabled: H,
          readonly: U,
          modelValue: X,
          onBeforeRemove: N,
          onRemove: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || H || U)) {
          if (N) {
            var G = $(N, Me(E));
            if (G = we(G) ? G : [G], (yield Promise.all(G)).some((ae) => !ae))
              return;
          }
          var J = X.filter((ae) => ae !== E);
          $(Z, Me(E)), B("onRemove"), $(e["onUpdate:modelValue"], J);
        }
      });
      return function(H) {
        return F.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((F) => F.state === "success"), I = () => e.modelValue.filter((F) => F.state === "error"), S = () => e.modelValue.filter((F) => F.state === "loading"), D = () => {
      n.value.click();
    }, O = () => {
      a.value = null, r.value = !1, Hn.close();
    }, z = {
      getSuccess: C,
      getError: I,
      getLoading: S
    }, B = (F) => {
      Ve(() => {
        var {
          validateTrigger: E,
          rules: H,
          modelValue: U
        } = e;
        s(E, F, H, U, z);
      });
    }, b = !1, k = () => u(e.rules, e.modelValue, z), j = () => {
      b = !0, $(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: k,
      resetValidation: d,
      reset: j
    };
    return $(l, Q), ie(() => e.modelValue, () => {
      !b && B("onChange"), b = !1;
    }, {
      deep: !0
    }), {
      n: VC,
      classes: EC,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: i,
      maxlengthText: t,
      isHTMLSupportVideo: Ai,
      isHTMLSupportImage: Di,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: V,
      handleRemove: w,
      getSuccess: C,
      getError: I,
      getLoading: S,
      validate: k,
      resetValidation: d,
      reset: j,
      chooseFile: D,
      closePreview: O
    };
  }
});
sv.render = zC;
const pa = sv;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var uk = pa;
const LC = "2.8.5";
function RC(e) {
  ya.install && e.use(ya), yr.install && e.use(yr), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), ar.install && e.use(ar), Sr.install && e.use(Sr), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), xe.install && e.use(xe), Or.install && e.use(Or), Pr.install && e.use(Pr), tr.install && e.use(tr), or.install && e.use(or), Vr.install && e.use(Vr), ir.install && e.use(ir), Er.install && e.use(Er), Mr.install && e.use(Mr), Br.install && e.use(Br), dn.install && e.use(dn), Ir.install && e.use(Ir), Nr.install && e.use(Nr), Ar.install && e.use(Ar), ba.install && e.use(ba), zr.install && e.use(zr), Lr.install && e.use(Lr), Ln.install && e.use(Ln), je.install && e.use(je), Xo.install && e.use(Xo), $e.install && e.use($e), Rr.install && e.use(Rr), Hn.install && e.use(Hn), Ur.install && e.use(Ur), Yr.install && e.use(Yr), vr.install && e.use(vr), et.install && e.use(et), Fr.install && e.use(Fr), Hr.install && e.use(Hr), $n.install && e.use($n), Jo.install && e.use(Jo), wo.install && e.use(wo), Fn.install && e.use(Fn), jr.install && e.use(jr), Wr.install && e.use(Wr), Gr.install && e.use(Gr), qr.install && e.use(qr), Sa.install && e.use(Sa), hn.install && e.use(hn), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), Ae.install && e.use(Ae), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), ei.install && e.use(ei), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), Yn.install && e.use(Yn), ot.install && e.use(ot), Rn.install && e.use(Rn), Un.install && e.use(Un), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), ri.install && e.use(ri), ma.install && e.use(ma), ur.install && e.use(ur), pa.install && e.use(pa);
}
const dk = {
  version: LC,
  install: RC,
  ActionSheet: ya,
  AppBar: yr,
  Avatar: br,
  AvatarGroup: wr,
  BackTop: Cr,
  Badge: ar,
  BottomNavigation: Sr,
  BottomNavigationItem: kr,
  Breadcrumb: $r,
  Breadcrumbs: Tr,
  Button: xe,
  ButtonGroup: Or,
  Card: Pr,
  Cell: tr,
  Checkbox: or,
  CheckboxGroup: Vr,
  Chip: ir,
  Col: Er,
  Collapse: Mr,
  CollapseItem: Br,
  Context: dn,
  Countdown: Ir,
  Counter: Nr,
  DatePicker: Ar,
  Dialog: ba,
  Divider: zr,
  Ellipsis: Lr,
  Form: Ln,
  FormDetails: je,
  Hover: Xo,
  Icon: $e,
  Image: Rr,
  ImagePreview: Hn,
  IndexAnchor: Ur,
  IndexBar: Yr,
  Input: vr,
  Lazy: et,
  Link: Fr,
  List: Hr,
  Loading: $n,
  LoadingBar: Jo,
  Locale: wo,
  Menu: Fn,
  Option: jr,
  Overlay: Wr,
  Pagination: Gr,
  Paper: qr,
  Picker: Sa,
  Popup: hn,
  Progress: Kr,
  PullRefresh: Xr,
  Radio: Zr,
  RadioGroup: Jr,
  Rate: Qr,
  Result: _r,
  Ripple: Ae,
  Row: xr,
  Select: ea,
  Skeleton: na,
  Slider: ra,
  Snackbar: ei,
  Space: ta,
  Step: oa,
  Steps: ia,
  Sticky: Yn,
  StyleProvider: ot,
  Swipe: Rn,
  SwipeItem: Un,
  Switch: sa,
  Tab: ua,
  TabItem: da,
  Table: va,
  Tabs: fa,
  TabsItems: ca,
  Themes: ri,
  TimePicker: ma,
  Tooltip: ur,
  Uploader: pa
};
export {
  ya as ActionSheet,
  yr as AppBar,
  br as Avatar,
  wr as AvatarGroup,
  Cr as BackTop,
  ar as Badge,
  Sr as BottomNavigation,
  kr as BottomNavigationItem,
  $r as Breadcrumb,
  Tr as Breadcrumbs,
  xe as Button,
  Or as ButtonGroup,
  Pr as Card,
  tr as Cell,
  or as Checkbox,
  Vr as CheckboxGroup,
  ir as Chip,
  Er as Col,
  Mr as Collapse,
  Br as CollapseItem,
  dn as Context,
  Ir as Countdown,
  Nr as Counter,
  Ar as DatePicker,
  ba as Dialog,
  zr as Divider,
  Lr as Ellipsis,
  Ln as Form,
  je as FormDetails,
  Xo as Hover,
  $e as Icon,
  Rr as Image,
  Hn as ImagePreview,
  Ur as IndexAnchor,
  Yr as IndexBar,
  vr as Input,
  et as Lazy,
  Fr as Link,
  Hr as List,
  $n as Loading,
  Jo as LoadingBar,
  wo as Locale,
  Fn as Menu,
  jr as Option,
  Wr as Overlay,
  ko as PIXEL,
  Gr as Pagination,
  qr as Paper,
  Sa as Picker,
  hn as Popup,
  Kr as Progress,
  Xr as PullRefresh,
  Zr as Radio,
  Jr as RadioGroup,
  Qr as Rate,
  _r as Result,
  Ae as Ripple,
  xr as Row,
  Oi as SNACKBAR_TYPE,
  ea as Select,
  na as Skeleton,
  ra as Slider,
  ei as Snackbar,
  ta as Space,
  oa as Step,
  ia as Steps,
  Yn as Sticky,
  ot as StyleProvider,
  Rn as Swipe,
  Un as SwipeItem,
  sa as Switch,
  ua as Tab,
  da as TabItem,
  va as Table,
  fa as Tabs,
  ca as TabsItems,
  ri as Themes,
  ma as TimePicker,
  ur as Tooltip,
  pa as Uploader,
  GC as _ActionSheetComponent,
  qC as _AppBarComponent,
  XC as _AvatarComponent,
  ZC as _AvatarGroupComponent,
  _C as _BackTopComponent,
  xC as _BadgeComponent,
  eS as _BottomNavigationComponent,
  nS as _BottomNavigationItemComponent,
  rS as _BreadcrumbComponent,
  aS as _BreadcrumbsComponent,
  QC as _ButtonComponent,
  tS as _ButtonGroupComponent,
  oS as _CardComponent,
  iS as _CellComponent,
  sS as _CheckboxComponent,
  uS as _CheckboxGroupComponent,
  dS as _ChipComponent,
  vS as _ColComponent,
  fS as _CollapseComponent,
  cS as _CollapseItemComponent,
  YC as _ContextComponent,
  mS as _CountdownComponent,
  pS as _CounterComponent,
  hS as _DatePickerComponent,
  gS as _DialogComponent,
  yS as _DividerComponent,
  wS as _EllipsisComponent,
  CS as _FormComponent,
  lS as _FormDetailsComponent,
  SS as _HoverComponent,
  jC as _IconComponent,
  kS as _ImageComponent,
  OS as _ImagePreviewComponent,
  VS as _IndexAnchorComponent,
  ES as _IndexBarComponent,
  MS as _InputComponent,
  KC as _LazyComponent,
  BS as _LinkComponent,
  IS as _ListComponent,
  NS as _LoadingBarComponent,
  JC as _LoadingComponent,
  WC as _LocaleComponent,
  DS as _MenuComponent,
  AS as _OptionComponent,
  zS as _OverlayComponent,
  LS as _PaginationComponent,
  RS as _PaperComponent,
  US as _PickerComponent,
  HC as _PopupComponent,
  YS as _ProgressComponent,
  FS as _PullRefreshComponent,
  HS as _RadioComponent,
  jS as _RadioGroupComponent,
  WS as _RateComponent,
  GS as _ResultComponent,
  FC as _RippleComponent,
  qS as _RowComponent,
  KS as _SelectComponent,
  XS as _SkeletonComponent,
  ZS as _SliderComponent,
  JS as _SnackbarComponent,
  QS as _SpaceComponent,
  _S as _StepComponent,
  xS as _StepsComponent,
  PS as _StickyComponent,
  ek as _StyleProviderComponent,
  $S as _SwipeComponent,
  TS as _SwipeItemComponent,
  nk as _SwitchComponent,
  rk as _TabComponent,
  ak as _TabItemComponent,
  tk as _TableComponent,
  ok as _TabsComponent,
  ik as _TabsItemsComponent,
  lk as _ThemesComponent,
  sk as _TimePickerComponent,
  bS as _TooltipComponent,
  uk as _UploaderComponent,
  ef as actionSheetProps,
  vi as add,
  vf as appBarProps,
  zf as avatarGroupProps,
  Mf as avatarProps,
  tc as backTopProps,
  dc as badgeProps,
  wc as bottomNavigationItemProps,
  mc as bottomNavigationProps,
  Oc as breadcrumbProps,
  Ic as breadcrumbsProps,
  Qf as buttonProps,
  jc as cardProps,
  Zc as cellProps,
  fm as checkboxGroupProps,
  tm as checkboxProps,
  ym as chipProps,
  $m as colProps,
  Dm as collapseItemProps,
  Mm as collapseProps,
  Rm as countdownProps,
  Dp as counterProps,
  nh as datePickerProps,
  dk as default,
  Re as defaultLazyOptions,
  yh as dialogProps,
  Oh as dividerProps,
  vs as enUS,
  xc as formDetailsProps,
  Zg as formProps,
  us as iconProps,
  hs as imageCache,
  ky as imagePreviewProps,
  iy as imageProps,
  Ny as indexAnchorProps,
  Ly as indexBarProps,
  jy as inputProps,
  RC as install,
  Qy as linkProps,
  nb as listProps,
  ib as loadingBarProps,
  xn as loadingProps,
  yb as menuProps,
  cs as merge,
  $b as optionProps,
  Vb as overlayProps,
  He as pack,
  fs as packs,
  Mb as paginationProps,
  Ab as paperProps,
  Ub as pickerProps,
  lt as popupProps,
  Kb as progressProps,
  e0 as pullRefreshProps,
  v0 as radioGroupProps,
  t0 as radioProps,
  p0 as rateProps,
  b0 as resultProps,
  o1 as rowProps,
  d1 as selectProps,
  m1 as skeletonProps,
  b1 as sliderProps,
  zd as snackbarProps,
  j1 as spaceProps,
  q1 as stepProps,
  ew as stepsProps,
  kt as stickyProps,
  aw as styleProviderProps,
  Ju as swipeProps,
  iw as switchProps,
  gw as tabItemProps,
  dw as tabProps,
  Cw as tableProps,
  Ew as tabsItemsProps,
  Tw as tabsProps,
  hC as timePickerProps,
  Rg as tooltipProps,
  PC as uploaderProps,
  fi as use,
  di as useLocale,
  LC as version,
  ui as zhCN
};
