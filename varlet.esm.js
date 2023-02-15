import { reactive as Ee, onMounted as ze, onUnmounted as pr, ref as E, onActivated as Xo, onDeactivated as Zo, createApp as Zd, getCurrentInstance as Ua, provide as zl, computed as Y, inject as Ll, nextTick as Me, h as Rl, onBeforeUnmount as Mt, isVNode as It, watch as le, onBeforeMount as Jd, defineComponent as x, createVNode as re, Teleport as Ya, Transition as De, withDirectives as Se, vShow as Fa, mergeProps as Ve, openBlock as h, createBlock as me, resolveDynamicComponent as Ha, normalizeClass as m, normalizeStyle as j, resolveComponent as ie, resolveDirective as Fe, withCtx as ve, createElementVNode as D, renderSlot as F, toDisplayString as ne, createElementBlock as P, Fragment as Oe, renderList as Be, createCommentVNode as _, onUpdated as Bt, createTextVNode as be, pushScopeId as Sa, popScopeId as ka, withModifiers as Vn, normalizeProps as Jo, guardReactiveProps as Ul, vModelText as Qd, toRefs as _d, withKeys as ki, toRaw as $i, TransitionGroup as xd, Comment as ev } from "vue";
var Yl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, eC = Ee(Yl);
const sn = Ee(Yl), qe = (e) => typeof e == "string", to = (e) => typeof e == "boolean", xe = (e) => typeof e == "number", Qo = (e) => Object.prototype.toString.call(e) === "[object Object]", nv = (e) => typeof e == "object" && e !== null, we = (e) => Array.isArray(e), rv = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : to(e) ? Number(e) : e, Nt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, _o = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, xo = () => typeof window < "u", Ti = (e) => [...new Set(e)], av = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), tv = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Pi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Oi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), ov = (e) => {
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
      this.has(r) && Nt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, oo = (e) => e, Vi = (e) => Math.pow(e, 3), Fl = (e) => e < 0.5 ? Vi(e * 2) / 2 : 1 - Vi((1 - e) * 2) / 2, Dt = (e, n) => e ?? n, Hl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ha = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Ei(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function iv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ei(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ei(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function lv(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Mi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function At(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function ei(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function sv(e) {
  return io.apply(this, arguments);
}
function io() {
  return io = iv(function* (e) {
    yield En();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: o,
      innerHeight: i
    } = window, l = a <= o && t >= 0, s = n <= i && r >= 0;
    return l && s;
  }), io.apply(this, arguments);
}
function Jt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function $a(e) {
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
function uv(e) {
  for (var n = [], r = e; r !== window; )
    r = $a(r), n.push(r);
  return n;
}
function Wl(e, n) {
  if (qe(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (nv(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var jl = (e) => qe(e) && e.endsWith("rem"), dv = (e) => qe(e) && e.endsWith("px") || xe(e), vv = (e) => qe(e) && e.endsWith("%"), Gl = (e) => qe(e) && e.endsWith("vw"), ql = (e) => qe(e) && e.endsWith("vh"), fv = (e) => qe(e) && e.startsWith("calc("), cv = (e) => qe(e) && e.startsWith("var("), Ne = (e) => {
  if (xe(e))
    return e;
  if (dv(e))
    return +e.replace("px", "");
  if (Gl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ql(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (jl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? z(e) : 0;
}, he = (e) => {
  if (e != null)
    return vv(e) || Gl(e) || ql(e) || jl(e) || fv(e) || cv(e) ? e : Ne(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = he(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Pn(e) {
  var n = Hl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function mv(e) {
  var n = Hl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function zt(e) {
  Pn(() => {
    Pn(e);
  });
}
function En() {
  return new Promise((e) => {
    Pn(() => {
      Pn(e);
    });
  });
}
function pv() {
  return new Promise((e) => {
    Pn(e);
  });
}
function Ja(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = At(e), s = ei(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), c = s + (a - s) * o(v);
        e.scrollTo(c, f), Pn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Pn(d);
  });
}
function Kl(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + av(a);
    return n[o] = t, n;
  }, {});
}
function hv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var gv = ["collect", "clear"];
function Ii(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ii(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ii(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function yv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yt.apply(this, arguments);
}
function Xe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function bv(e) {
  var n = Zd(e), r = document.createElement("div");
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
      return () => Rl(e, yt({}, n, r));
    }
  }, {
    unmount: t
  } = bv(a);
  return {
    unmountInstance: t
  };
}
function wv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      It(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function gn(e) {
  var n = Ee([]), r = Ua(), a = () => {
    var l = wv(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    Nt(n, l);
  };
  zl(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var i = Y(() => n.length);
  return {
    length: i
  };
}
function yn(e) {
  if (!Xl(e))
    return {
      index: null
    };
  var n = Ll(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Ua();
  ze(() => {
    Me().then(() => r(o));
  }), pr(() => {
    Me().then(() => a(o));
  });
  var i = Y(() => t.indexOf(o));
  return {
    index: i
  };
}
function un(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Nt(n, o);
  }, t = (o) => {
    zl(e, yt({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function dn(e) {
  if (!Xl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Ll(e), {
    collect: r,
    clear: a
  } = n, t = yv(n, gv), o = (i) => {
    ze(() => r(i)), Mt(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function Xl(e) {
  var n = Ua();
  return e in n.provides;
}
function bn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = Bi(function* (o, i, l) {
      if (!we(o) || !o.length)
        return !0;
      var s = yield Promise.all(o.map((u) => u(i, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(i, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = Bi(function* (o, i, l, s, u) {
      o.includes(i) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(i, l, s, u, d) {
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
function Cv(e) {
  ze(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), pr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function ni() {
  var e = E(!1);
  return Xo(() => {
    e.value = !1;
  }), Zo(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var", r = n + "-" + e, a = (o) => o ? o[0] === "$" ? o.replace("$", n) : o.startsWith("--") ? "" + r + o : r + "__" + o : r, t = function() {
    for (var o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return i.map((s) => {
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
function U(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function bt() {
  return bt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, bt.apply(this, arguments);
}
var {
  n: Zl
} = ee("ripple"), Ni = 250;
function Sv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function kv(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: o
  } = e, i = Math.sqrt(Math.pow(t, 2) + Math.pow(o, 2)) / 2, l = i * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - i * 2) / 2, v = (o - i * 2) / 2, f = s - i, c = u - i;
  return {
    x: f,
    y: c,
    centerX: d,
    centerY: v,
    size: l
  };
}
function Jl(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: o,
        centerY: i,
        size: l
      } = kv(this, e), s = document.createElement("div");
      s.classList.add(Zl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Sv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 30);
  }
}
function lo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Zl());
    if (r.length) {
      var a = r[r.length - 1], t = Ni - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Ni);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 30) : n();
}
function Ql() {
  var e = this._ripple;
  hv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function $v(e, n) {
  var r, a, t;
  e._ripple = bt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: lo.bind(e)
  }), e.addEventListener("touchstart", Jl, {
    passive: !0
  }), e.addEventListener("touchmove", Ql, {
    passive: !0
  }), e.addEventListener("dragstart", lo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Tv(e) {
  e.removeEventListener("touchstart", Jl), e.removeEventListener("touchmove", Ql), e.removeEventListener("dragstart", lo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Pv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = bt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var _l = {
  mounted: $v,
  unmounted: Tv,
  updated: Pv,
  install(e) {
    e.directive("ripple", this);
  }
}, nC = _l;
const Ae = _l;
function Ov(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var rt = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Ov
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  onClickOverlay: U(),
  "onUpdate:show": U(),
  // internal for Dialog
  onRouteChange: U()
};
function xl() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function ot(e) {
  sn.locks[e] = 1, xl();
}
function it(e) {
  delete sn.locks[e], xl();
}
function Lt(e, n) {
  var {
    uid: r
  } = Ua();
  n && le(n, (a) => {
    a === !1 ? it(r) : a === !0 && e() === !0 && ot(r);
  }), le(e, (a) => {
    n && n() === !1 || (a === !0 ? ot(r) : it(r));
  }), Jd(() => {
    n && n() === !1 || e() === !0 && ot(r);
  }), pr(() => {
    n && n() === !1 || e() === !0 && it(r);
  }), Xo(() => {
    n && n() === !1 || e() === !0 && ot(r);
  }), Zo(() => {
    n && n() === !1 || e() === !0 && it(r);
  });
}
function at(e, n) {
  var r = E(sn.zIndex);
  return le(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function so() {
  return so = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, so.apply(this, arguments);
}
function Vv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !It(e);
}
var {
  n: Bn,
  classes: Qt
} = ee("popup");
const mn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: rt,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = at(() => e.show, 3), {
      disabled: o
    } = ni(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    Lt(() => e.show, () => e.lockScroll), le(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), Cv(() => $(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: Qt(Bn("overlay"), d),
        style: so({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => re("div", Ve({
      class: Qt(Bn("content"), Bn("--" + e.position), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [$(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: g,
        position: w
      } = e;
      return re(De, {
        name: Bn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [Se(re("div", {
          class: Qt(Bn("$--box"), Bn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(De, {
          name: g || Bn("$-pop-" + w)
        }, {
          default: () => [f && s()]
        })]), [[Fa, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(Ya, {
          to: d,
          disabled: o.value
        }, Vv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
mn.install = function(e) {
  e.component(mn.name, mn);
};
var rC = mn, es = {
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
  onClick: U()
};
function Di(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ev(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Di(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Di(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Mv,
  classes: Iv
} = ee("icon");
function Bv(e, n) {
  return h(), me(
    Ha(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: j({
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
var ns = x({
  name: "VarIcon",
  props: es,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = Ev(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || z(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
          i != null && (n.value = o), r.value = !1;
        }, z(l));
      });
      return function(i, l) {
        return t.apply(this, arguments);
      };
    }();
    return le(() => e.name, a, {
      immediate: !0
    }), {
      n: Mv,
      classes: Iv,
      nextName: n,
      shrinking: r,
      isURL: rv,
      toNumber: z,
      toSizeUnit: he
    };
  }
});
ns.render = Bv;
const $e = ns;
$e.install = function(e) {
  e.component($e.name, $e);
};
var aC = $e;
function uo() {
  return uo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, uo.apply(this, arguments);
}
var Nv = uo({
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
  onSelect: U(),
  "onUpdate:show": U()
}, Xe(rt, [
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
const ri = {
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
}, rs = {
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
function vo() {
  return vo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vo.apply(this, arguments);
}
function ai() {
  var e = {}, n = E({}), r = (o, i) => {
    i.lang = o, e[o] = i;
  }, a = (o) => {
    if (!e[o])
      return console.warn("The " + o + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[o];
  }, t = (o, i) => {
    if (!e[o]) {
      console.warn("The " + o + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[o] = vo({}, e[o], i), a(o);
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
  packs: as,
  pack: We,
  add: ti,
  use: oi,
  merge: ts
} = ai();
ti("zh-CN", ri);
oi("zh-CN");
var tC = {
  zhCN: ri,
  enUS: rs,
  packs: as,
  pack: We,
  add: ti,
  use: oi,
  merge: ts,
  useLocale: ai
};
const fo = {
  zhCN: ri,
  enUS: rs,
  packs: as,
  pack: We,
  add: ti,
  use: oi,
  merge: ts,
  useLocale: ai
};
var {
  n: Dv,
  classes: Av
} = ee("action-sheet"), zv = ["onClick"];
function Lv(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = Fe("ripple");
  return h(), me(
    a,
    Ve({
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [F(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), F(e.$slots, "actions", {}, () => [(h(!0), P(
          Oe,
          null,
          Be(e.actions, (o) => Se((h(), P(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: j({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (h(), me(
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
            )) : _("v-if", !0), D(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            zv
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
var os = x({
  name: "VarActionSheet",
  directives: {
    Ripple: Ae
  },
  components: {
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Nv,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        $(i, t), o && $(e["onUpdate:show"], !1);
      }
    }, a = (t) => $(e["onUpdate:show"], t);
    return le(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Dv,
      classes: Av,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: We,
      dt: Dt,
      handleSelect: r
    };
  }
});
os.render = Lv;
const rr = os;
function co() {
  return co = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, co.apply(this, arguments);
}
var Jn, ii = {};
function Rv(e) {
  return e === void 0 && (e = {}), co({}, ii, e);
}
function ga(e) {
  return xo() ? new Promise((n) => {
    ga.close();
    var r = Ee(Rv(e));
    r.teleport = "body", Jn = r;
    var {
      unmountInstance: a
    } = Wa(rr, r, {
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
function Uv(e) {
  ii = e;
}
function Yv() {
  ii = {};
}
function Fv() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
ga.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
ga.install = function(e) {
  e.component(rr.name, rr);
};
Object.assign(ga, {
  setDefaultOptions: Uv,
  resetDefaultOptions: Yv,
  close: Fv
});
var oC = rr;
function Hv(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Wv = {
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
    validator: Hv
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
  n: jv,
  classes: Gv
} = ee("app-bar");
function qv(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: j(e.rootStyles)
    },
    [D(
      "div",
      {
        class: m(e.n("toolbar"))
      },
      [D(
        "div",
        {
          class: m(e.n("left"))
        },
        [F(e.$slots, "left"), e.titlePosition === "left" ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: j({
              paddingLeft: e.paddingLeft
            })
          },
          [F(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.titlePosition === "center" ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.n("title"))
        },
        [F(e.$slots, "default", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0), D(
        "div",
        {
          class: m(e.n("right"))
        },
        [e.titlePosition === "right" ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("title")),
            style: j({
              paddingRight: e.paddingRight
            })
          },
          [F(e.$slots, "default", {}, () => [be(
            ne(e.title),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), F(e.$slots, "right")],
        2
        /* CLASS */
      )],
      2
      /* CLASS */
    ), F(e.$slots, "content")],
    6
    /* CLASS, STYLE */
  );
}
var is = x({
  name: "VarAppBar",
  props: Wv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    }, i = Y(() => {
      var {
        image: l,
        color: s,
        textColor: u,
        imageLinearGradient: d
      } = e;
      if (l != null) {
        var v = d ? "linear-gradient(" + d + "), " : "";
        return {
          "background-image": v + "url(" + l + ")",
          "background-position": "center center",
          "background-size": "cover"
        };
      }
      return {
        background: s,
        color: u
      };
    });
    return ze(o), Bt(o), {
      n: jv,
      classes: Gv,
      rootStyles: i,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
is.render = qv;
const br = is;
br.install = function(e) {
  e.component(br.name, br);
};
var iC = br;
function Kv(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ls = (e) => ["mini", "small", "normal", "large"].includes(e);
function ss(e) {
  return ls(e) || xe(e) || qe(e);
}
var Xv = {
  round: {
    type: Boolean,
    default: !0
  },
  size: {
    type: [String, Number],
    validator: ss,
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
    validator: Kv,
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: Zv,
  classes: Jv
} = ee("avatar"), Qv = ["src", "lazy-loading", "lazy-error"], _v = ["src"];
function xv(e, n) {
  var r = Fe("lazy");
  return h(), P(
    "div",
    {
      ref: "avatarElement",
      class: m(e.classes(e.n(), [e.internalSizeValidator(e.size), e.n("--" + e.size)], [e.round, e.n("--round")], [e.bordered, e.n("--bordered")])),
      style: j({
        width: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        height: e.internalSizeValidator(e.size) ? void 0 : e.toSizeUnit(e.size),
        borderColor: e.borderColor,
        backgroundColor: e.color
      }),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.src ? (h(), P(
      Oe,
      {
        key: 0
      },
      [e.lazy ? Se((h(), P(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          src: e.src,
          style: j({
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
        Qv
      )), [[r, e.src]]) : (h(), P(
        "img",
        {
          key: 1,
          class: m(e.n("image")),
          src: e.src,
          style: j({
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
        _v
      ))],
      2112
      /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
    )) : (h(), P(
      "div",
      {
        key: 1,
        ref: "textElement",
        class: m(e.n("text")),
        style: j({
          scale: e.scale
        })
      },
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    ))],
    6
    /* CLASS, STYLE */
  );
}
var us = x({
  name: "VarAvatar",
  components: {},
  props: Xv,
  setup(e) {
    var n = E(null), r = E(null), a = E(1), t = () => {
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
    }, i = (s) => {
      $(e.onError, s);
    }, l = (s) => {
      $(e.onClick, s);
    };
    return ze(t), Bt(t), {
      internalSizeValidator: ls,
      sizeValidator: ss,
      toSizeUnit: he,
      n: Zv,
      classes: Jv,
      avatarElement: n,
      textElement: r,
      scale: a,
      handleLoad: o,
      handleError: i,
      handleClick: l
    };
  }
});
us.render = xv;
const wr = us;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var lC = wr, ef = {
  offset: {
    type: [Number, String]
  },
  vertical: {
    type: Boolean,
    default: !1
  }
}, {
  n: nf,
  classes: rf
} = ee("avatar-group");
function af(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.vertical, e.n("--column"), e.n("--row")])),
      style: j(e.rootStyles)
    },
    [F(e.$slots, "default"), F(e.$slots, "rest")],
    6
    /* CLASS, STYLE */
  );
}
var ds = x({
  name: "VarAvatarGroup",
  components: {},
  props: ef,
  setup(e) {
    var n = Y(() => e.offset == null ? {} : {
      "--avatar-group-offset": he(e.offset)
    });
    return {
      n: nf,
      classes: rf,
      toSizeUnit: he,
      rootStyles: n
    };
  }
});
ds.render = af;
const Cr = ds;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var sC = Cr;
function tf(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function of(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: tf
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: of
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
  n: lf,
  classes: sf
} = ee("loading"), uf = (e) => (Sa(""), e = e(), ka(), e), df = /* @__PURE__ */ uf(() => /* @__PURE__ */ D(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ D("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
  /* HOISTED */
)), vf = [df];
function ff(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [F(e.$slots, "default"), e.loading ? (h(), P(
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
    )) : _("v-if", !0), e.isShow ? (h(), P(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [D(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: j({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          vf,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (h(!0), P(
        Oe,
        null,
        Be(e.loadingTypeDict, (r, a) => (h(), P(
          Oe,
          {
            key: a
          },
          [e.type === a ? (h(), P(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), P(
              Oe,
              null,
              Be(r, (t) => (h(), P(
                "div",
                {
                  key: t + a,
                  style: j({
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
      )), e.$slots.description || e.description ? (h(), P(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: j({
            color: e.color
          })
        },
        [F(e.$slots, "description", {}, () => [be(
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
var vs = x({
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
    }, t = Y(() => $(r.default) ? e.loading : !0);
    return {
      n: lf,
      classes: sf,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
vs.render = ff;
const $n = vs;
$n.install = function(e) {
  e.component($n.name, $n);
};
var uC = $n;
function mo() {
  return mo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mo.apply(this, arguments);
}
function cf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function mf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function pf(e) {
  return ["button", "reset", "submit"].includes(e);
}
var hf = {
  type: {
    type: String,
    default: "default",
    validator: cf
  },
  nativeType: {
    type: String,
    default: "button",
    validator: pf
  },
  size: {
    type: String,
    default: "normal",
    validator: mf
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
  loadingType: Xe(xn, "type"),
  loadingSize: Xe(xn, "size"),
  loadingColor: mo({}, Xe(xn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: gf,
  classes: yf
} = ee("button"), bf = ["type", "disabled"];
function wf(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return Se((h(), P(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: j({
        color: e.textColor,
        background: e.color
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
    [e.loading || e.pending ? (h(), me(
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
    )) : _("v-if", !0), D(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )],
    46,
    bf
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var fs = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: Ae
  },
  props: hf,
  setup(e) {
    var n = E(!1), r = (o) => {
      e.autoLoading && (n.value = !0, o = we(o) ? o : [o], Promise.all(o).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, a = (o) => {
      var {
        loading: i,
        disabled: l,
        onClick: s
      } = e;
      !s || i || l || n.value || r($(s, o));
    }, t = (o) => {
      var {
        loading: i,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || i || l || n.value || r($(s, o));
    };
    return {
      n: gf,
      classes: yf,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
fs.render = wf;
const en = fs;
en.install = function(e) {
  e.component(en.name, en);
};
var dC = en, Cf = {
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
  onClick: U()
}, {
  n: Sf,
  classes: kf
} = ee("back-top");
function $f(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), me(
    Ya,
    {
      to: "body",
      disabled: e.disabled
    },
    [D(
      "div",
      Ve({
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
      [F(e.$slots, "default", {}, () => [re(a, {
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
var cs = x({
  name: "VarBackTop",
  components: {
    VarButton: en,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Cf,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, o = (s) => {
      $(e.onClick, s);
      var u = ei(t);
      Ja(t, {
        left: u,
        duration: e.duration,
        animation: Fl
      });
    }, i = () => {
      n.value = At(t) >= Ne(e.visibilityHeight);
    }, l = _o(i, 200);
    return ze(() => {
      t = e.target ? Wl(e.target, "BackTop") : $a(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Mt(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: he,
      n: Sf,
      classes: kf,
      click: o
    };
  }
});
cs.render = $f;
const Sr = cs;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var vC = Sr;
function Tf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Pf(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Of = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: Tf
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
    validator: Pf
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: jn,
  classes: Vf
} = ee("badge"), Ef = {
  key: 1
};
function Mf(e, n) {
  var r = ie("var-icon");
  return h(), P(
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
        default: ve(() => [Se(D(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (h(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (h(), P(
            "span",
            Ef,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Fa, !e.hidden]])]),
        _: 1
        /* STABLE */
      },
      8,
      ["name"]
    ), F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var ms = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Of,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Y(() => {
      var {
        type: i,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && jn("position") + " " + jn("--" + l), v = s ? jn("dot") : null, f = o(), c = u ? jn("icon") : null;
      return [jn("--" + i), d, v, f, c];
    }), t = Y(() => {
      var {
        dot: i,
        value: l,
        maxValue: s
      } = e;
      return i ? "" : l !== void 0 && s !== void 0 && z(l) > s ? s + "+" : l;
    }), o = () => {
      var {
        position: i,
        dot: l
      } = e;
      if (l) {
        if (i.includes("right"))
          return jn("dot--right");
        if (i.includes("left"))
          return jn("dot--left");
      }
    };
    return {
      n: jn,
      classes: Vf,
      values: t,
      contentClass: a
    };
  }
});
ms.render = Mf;
const ar = ms;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var fC = ar, If = {
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
  onChange: U(),
  "onUpdate:active": U(),
  onBeforeChange: U(),
  onFabClick: U(),
  fabProps: {
    type: Object
  }
}, ps = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), hs = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Bf() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(ps), {
    length: r
  } = gn(hs);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: Nf,
  classes: Df
} = ee("bottom-navigation"), {
  n: Rt
} = ee("bottom-navigation-item"), Ai = Rt("--right-half-space"), zi = Rt("--left-half-space"), Li = Rt("--right-space"), Af = {
  type: "primary"
};
function zf(e, n) {
  var r = ie("var-button");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: j("z-index:" + e.zIndex)
    },
    [F(e.$slots, "default"), e.$slots.fab ? (h(), me(
      r,
      Ve({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ve(() => [F(e.$slots, "fab")]),
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
var gs = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: en
  },
  props: If,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = Y(() => e.active), o = Y(() => e.activeColor), i = Y(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Bf(), v = () => {
      s.value === 0 || f() || c() || g();
    }, f = () => u.find((M) => {
      var {
        name: I
      } = M;
      return t.value === I.value;
    }), c = () => u.find((M) => {
      var {
        index: I
      } = M;
      return t.value === I.value;
    }), g = () => {
      xe(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, w = (M) => {
      t.value !== M && (e.onBeforeChange ? y(M) : T(M));
    }, y = (M) => {
      var I = $(e.onBeforeChange, M);
      I = we(I) ? I : [I], Promise.all(I).then((B) => {
        B.some((p) => !p) || T(M);
      });
    }, T = (M) => {
      $(e["onUpdate:active"], M), $(e.onChange, M);
    }, O = () => {
      var M = V();
      M.forEach((I) => {
        I.classList.remove(Ai, zi, Li);
      });
    }, b = (M) => {
      var I = V(), B = I.length, p = M % 2 === 0;
      I.forEach((S, L) => {
        C(p, S, L, B);
      });
    }, C = (M, I, B, p) => {
      var S = B === p - 1;
      if (!M && S) {
        I.classList.add(Li);
        return;
      }
      var L = B === p / 2 - 1, Q = B === p / 2;
      L ? I.classList.add(Ai) : Q && I.classList.add(zi);
    }, V = () => Array.from(a.value.querySelectorAll("." + Rt())), k = () => {
      $(e.onFabClick);
    }, A = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: w
    };
    return d(A), le(() => s.value, v), le(() => e.fabProps, (M) => {
      l.value = po({}, Af, M);
    }, {
      immediate: !0,
      deep: !0
    }), ze(() => {
      r.fab && b(s.value);
    }), Bt(() => {
      O(), r.fab && b(s.value);
    }), {
      n: Nf,
      classes: Df,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
gs.render = zf;
const kr = gs;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var cC = kr, Lf = {
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
  onClick: U()
};
function Rf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ps), {
    index: r
  } = yn(hs);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Uf,
  classes: Yf
} = ee("bottom-navigation-item"), Ff = {
  type: "danger",
  dot: !0
};
function Hf(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = Fe("ripple");
  return Se((h(), P(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: j({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (h(), me(
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
    )) : _("v-if", !0), F(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), me(
      a,
      Ve({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : _("v-if", !0), D(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (h(), P(
        Oe,
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
      )), F(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var ys = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: Lf,
  setup(e) {
    var n = Y(() => e.name), r = Y(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = Rf(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, g = (c = n.value) != null ? c : t.value;
      $(e.onClick, g), $(o.onToggle, g);
    };
    return i(d), le(() => r.value, (c) => {
      a.value = c === !0 ? Ff : r.value;
    }, {
      immediate: !0
    }), {
      n: Uf,
      classes: Yf,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
ys.render = Hf;
const $r = ys;
$r.install = function(e) {
  e.component($r.name, $r);
};
var mC = $r, Wf = {
  separator: {
    type: String
  },
  onClick: U()
}, bs = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), ws = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function jf() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(bs), {
    length: r
  } = gn(ws);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Gf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(bs), {
    index: r
  } = yn(ws);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: qf,
  classes: Kf
} = ee("breadcrumb");
function Xf(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : F(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [D(
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
var Cs = x({
  name: "VarBreadcrumb",
  props: Wf,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Gf(), t = Y(() => n.value === r.length.value - 1), o = Y(() => r.separator.value), i = (l) => {
      t.value || $(e.onClick, l);
    };
    return a(null), {
      n: qf,
      classes: Kf,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
Cs.render = Xf;
const Tr = Cs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var pC = Tr, Zf = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Jf
} = ee("breadcrumbs");
function Qf(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ss = x({
  name: "VarBreadcrumbs",
  props: Zf,
  setup(e) {
    var n = Y(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = jf(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Jf
    };
  }
});
Ss.render = Qf;
const Pr = Ss;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var hC = Pr;
function _f(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var xf = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: _f,
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
  onClick: U(),
  "onUpdate:floating": U()
};
function Ri(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ui(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ri(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ri(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: ec,
  classes: nc
} = ee("card"), rc = 500, ac = ["src", "alt"];
function tc(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = Fe("ripple");
  return Se((h(), P(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: j({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        ref: "cardFloater",
        class: m(e.n("floater")),
        style: j({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [F(e.$slots, "image", {}, () => [e.src ? (h(), P(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          style: j({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        ac
      )) : _("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("container"))
        },
        [F(e.$slots, "title", {}, () => [e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), F(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [F(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), P(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: j({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [F(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: j({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [F(e.$slots, "close-button", {}, () => [re(
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
    ), D(
      "div",
      {
        class: m(e.n("holder")),
        style: j({
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
var ks = x({
  name: "VarCard",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarButton: en
  },
  props: xf,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), o = E("100%"), i = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = Y(() => e.layout === "row"), g = E(!1), w = E(!1), {
      zIndex: y
    } = at(() => e.floating, 1);
    Lt(() => e.floating, () => !c.value);
    var T = "auto", O = "auto", b = null, C = E(null), V = /* @__PURE__ */ function() {
      var I = Ui(function* () {
        clearTimeout(C.value), clearTimeout(b), C.value = null, C.value = setTimeout(/* @__PURE__ */ Ui(function* () {
          var {
            width: B,
            height: p,
            left: S,
            top: L
          } = n.value.getBoundingClientRect();
          a.value = he(B), t.value = he(p), o.value = a.value, i.value = t.value, l.value = he(L), s.value = he(S), u.value = "fixed", T = l.value, O = s.value, g.value = !0, yield En(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", w.value = !0;
        }), e.ripple ? rc : 0);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(b), clearTimeout(C.value), C.value = null, o.value = a.value, i.value = t.value, l.value = T, s.value = O, v.value = "0px", f.value = "0", g.value = !1, b = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", T = "auto", O = "auto", d.value = "hidden", u.value = void 0, w.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      $(e["onUpdate:floating"], !1);
    }, M = (I) => {
      $(e.onClick, I);
    };
    return le(() => e.floating, (I) => {
      c.value || Me(() => {
        I ? V() : k();
      });
    }, {
      immediate: !0
    }), {
      n: ec,
      classes: nc,
      toSizeUnit: he,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: C,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: y,
      isRow: c,
      close: A,
      showFloatingButtons: g,
      floated: w,
      handleClick: M
    };
  }
});
ks.render = tc;
const Or = ks;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var gC = Or, oc = {
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
  onClick: U
}, {
  n: ic,
  classes: lc
} = ee("cell");
function sc(e, n) {
  var r = ie("var-icon"), a = Fe("ripple");
  return Se((h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: j(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "icon", {}, () => [e.icon ? (h(), P(
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
    )) : _("v-if", !0)]), D(
      "div",
      {
        class: m(e.n("content"))
      },
      [F(e.$slots, "default", {}, () => [e.title ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (h(), P(
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
    ), e.$slots.extra ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("extra"), e.extraClass))
      },
      [F(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var $s = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: oc,
  setup(e) {
    var n = Y(() => e.borderOffset == null ? {} : {
      "--cell-border-left": he(e.borderOffset),
      "--cell-border-right": he(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: ic,
      classes: lc,
      toSizeUnit: he,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
$s.render = sc;
const tr = $s;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var yC = tr, uc = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: dc
} = ee("form-details"), vc = {
  key: 0
}, fc = {
  key: 0
};
function cc(e, n) {
  return h(), me(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [D(
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
              default: ve(() => [e.errorMessage ? (h(), P(
                "div",
                vc,
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
        ), D(
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
              default: ve(() => [e.extraMessage ? (h(), P(
                "div",
                fc,
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
var Ts = x({
  name: "VarFormDetails",
  props: uc,
  setup: () => ({
    n: dc
  })
});
Ts.render = cc;
const je = Ts;
je.install = function(e) {
  e.component(je.name, je);
};
var bC = je, mc = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, Ps = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Os = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function pc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ps), {
    length: r
  } = gn(Os);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function hc() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Ps), {
    index: r
  } = yn(Os);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var Vs = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Vs), r = Ua(), a = e ? (t) => {
    e(ho({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function gc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Vs);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: yc,
  classes: bc
} = ee("checkbox");
function wc(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), P(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [Se((h(), P(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: j({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
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
        )]) : F(e.$slots, "unchecked-icon", {
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
      }]]), D(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
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
var Es = x({
  name: "VarCheckbox",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: mc,
  setup(e) {
    var n = E(!1), r = Y(() => n.value === e.checkedValue), a = Y(() => e.checkedValue), t = E(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = hc(), {
      form: l,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), c = (k) => {
      Me(() => {
        var {
          validateTrigger: A,
          rules: M,
          modelValue: I
        } = e;
        d(A, k, M, I);
      });
    }, g = (k) => {
      n.value = k;
      var {
        checkedValue: A,
        onChange: M
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(M, n.value), c("onChange"), k === A ? o == null || o.onChecked(A) : o == null || o.onUnchecked(A);
    }, w = (k) => {
      var {
        disabled: A,
        readonly: M,
        checkedValue: I,
        uncheckedValue: B,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || A) && ($(p, k), !(l != null && l.readonly.value || M))) {
        t.value = !0;
        var S = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && S || g(r.value ? B : I);
      }
    }, y = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: M
      } = e;
      n.value = k.includes(A) ? A : M;
    }, T = () => {
      t.value = !1;
    }, O = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, b = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: M
      } = e, I = ![A, M].includes(k);
      I && (k = r.value ? M : A), g(k);
    }, C = () => v(e.rules, e.modelValue);
    le(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var V = {
      checkedValue: a,
      checked: r,
      sync: y,
      validate: C,
      resetValidation: f,
      reset: O,
      resetWithAnimation: T
    };
    return $(i, V), $(s, V), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: yc,
      classes: bc,
      handleClick: w,
      toggle: b,
      reset: O,
      validate: C,
      resetValidation: f
    };
  }
});
Es.render = wc;
const or = Es;
or.install = function(e) {
  e.component(or.name, or);
};
var wC = or;
function Cc(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Sc = {
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
    validator: Cc
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: kc,
  classes: $c
} = ee("checkbox-group");
function Tc(e, n) {
  var r = ie("var-form-details");
  return h(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
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
var Ms = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: Sc,
  setup(e) {
    var n = Y(() => e.max), r = Y(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = pc(), {
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = Y(() => l.value), f = (A) => {
      Me(() => {
        var {
          validateTrigger: M,
          rules: I,
          modelValue: B
        } = e;
        s(M, A, I, B);
      });
    }, c = (A) => {
      $(e["onUpdate:modelValue"], A), $(e.onChange, A), f("onChange");
    }, g = (A) => {
      var {
        modelValue: M
      } = e;
      M.includes(A) || c([...M, A]);
    }, w = (A) => {
      var {
        modelValue: M
      } = e;
      M.includes(A) && c(M.filter((I) => I !== A));
    }, y = () => t.forEach((A) => {
      var {
        sync: M
      } = A;
      return M(e.modelValue);
    }), T = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, O = () => {
      var A = t.map((I) => {
        var {
          checkedValue: B
        } = I;
        return B.value;
      }), M = Ti(A);
      return T(), $(e["onUpdate:modelValue"], M), M;
    }, b = () => {
      var A = t.filter((I) => {
        var {
          checked: B
        } = I;
        return !B.value;
      }).map((I) => {
        var {
          checkedValue: B
        } = I;
        return B.value;
      }), M = Ti(A);
      return T(), $(e["onUpdate:modelValue"], M), M;
    }, C = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, V = () => u(e.rules, e.modelValue);
    le(() => e.modelValue, y, {
      deep: !0
    }), le(() => a.value, y);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: w,
      validate: V,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return o(k), $(i, k), {
      errorMessage: l,
      n: kc,
      classes: $c,
      checkAll: O,
      inverseAll: b,
      reset: C,
      validate: V,
      resetValidation: d
    };
  }
});
Ms.render = Tc;
const Vr = Ms;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var CC = Vr;
function Pc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Oc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Vc = {
  type: {
    type: String,
    default: "default",
    validator: Pc
  },
  size: {
    type: String,
    default: "normal",
    validator: Oc
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Xe(es, "name"),
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
  onClose: U()
}, {
  n: Gn,
  classes: Ec
} = ee("chip");
function Mc(e, n) {
  var r = ie("var-icon");
  return h(), me(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [D(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [F(e.$slots, "left"), D(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        ), F(e.$slots, "right"), e.closable ? (h(), P(
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
var Is = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Vc,
  setup(e) {
    var n = Y(() => {
      var {
        plain: t,
        textColor: o,
        color: i
      } = e;
      return t ? {
        color: o || i,
        borderColor: i
      } : {
        color: o,
        background: i
      };
    }), r = Y(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = Gn(o ? "$--flex" : "$--inline-flex"), d = l ? Gn("plain") + " " + Gn("plain-" + i) : Gn("--" + i), v = s ? Gn("--round") : null;
      return [Gn("--" + t), u, d, v];
    }), a = (t) => {
      $(e.onClose, t);
    };
    return {
      n: Gn,
      classes: Ec,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Is.render = Mc;
const ir = Is;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var SC = ir;
function Ic(e) {
  return ["row", "column"].includes(e);
}
var Bc = {
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
    validator: Ic
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
  onClick: U()
}, Bs = Symbol("ROW_BIND_COL_KEY"), Ns = Symbol("ROW_COUNT_COL_KEY");
function Nc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Bs), {
    length: r
  } = gn(Ns);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Dc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Bs), {
    index: r
  } = yn(Ns);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: lt,
  classes: Ac
} = ee("col");
function zc(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: j({
        flexDirection: e.direction,
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ds = x({
  name: "VarCol",
  props: Bc,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = Y(() => z(e.span)), a = Y(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = Dc(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Qo(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(lt("--span-" + u + "-" + c)), f && v.push(lt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(lt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return le([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, i), {
      n: lt,
      classes: Ac,
      padding: n,
      toNumber: z,
      toSizeUnit: he,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s
    };
  }
});
Ds.render = zc;
const Er = Ds;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var kC = Er, As = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), zs = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Lc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(As), {
    length: r
  } = gn(zs);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Rc = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Uc
} = ee("collapse");
function Yc(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Ls = x({
  name: "VarCollapse",
  props: Rc,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Lc(), t = Y(() => e.modelValue), o = Y(() => e.offset), i = () => !e.accordion && !we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, g) => i() ? g ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((w) => w !== c) : null, s = (c, g) => {
      var w = l(c, g);
      $(e["onUpdate:modelValue"], w), $(e.onChange, w);
    }, u = () => {
      if (e.accordion)
        return r.find((g) => {
          var {
            name: w
          } = g;
          return e.modelValue === w.value;
        });
      var c = r.filter((g) => {
        var {
          name: w
        } = g;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: g,
        name: w
      } = c;
      return w.value === void 0 && e.modelValue === g.value;
    }) : r.filter((c) => {
      var {
        index: g,
        name: w
      } = c;
      return w.value === void 0 && e.modelValue.includes(g.value);
    }), v = () => {
      if (i()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((g) => {
            g.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((g) => {
          var w = e.accordion ? c === g : c.includes(g);
          g.init(e.accordion, w);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), le(() => n.value, () => Me().then(v)), le(() => e.modelValue, () => Me().then(v)), {
      n: Uc
    };
  }
});
Ls.render = Yc;
const Mr = Ls;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var $C = Mr;
function Fc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(As), {
    index: r
  } = yn(zs);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Hc = {
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
  n: Wc,
  classes: jc
} = ee("collapse-item");
function Gc(e, n) {
  var r = ie("var-icon");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [D(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [F(e.$slots, "title", {}, () => [be(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [F(e.$slots, "icon", {}, () => [re(
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
    ), Se(D(
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
      [D(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [F(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[Fa, e.show]])],
    2
    /* CLASS */
  );
}
var Rs = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Hc,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Fc(), t = !0, o = E(null), i = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = Y(() => e.name), f = (b, C) => {
      s.value === void 0 || b && we(s.value) || C === l.value || (l.value = C, c(!0));
    }, c = (b) => {
      e.disabled || b || d(e.name || n.value, !l.value);
    }, g = () => {
      o.value && (o.value.style.height = "", i.value = !0, Me(() => {
        var {
          offsetHeight: b
        } = o.value;
        o.value.style.height = 0 + "px", Pn(() => {
          o.value.style.height = b + "px", t && zt(() => {
            t && T();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, y = () => {
      if (o.value) {
        var {
          offsetHeight: b
        } = o.value;
        o.value.style.height = b + "px", Pn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, O = {
      index: n,
      name: v,
      init: f
    };
    return a(O), le(l, (b) => {
      b ? g() : y();
    }), {
      n: Wc,
      start: w,
      classes: jc,
      show: i,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: T
    };
  }
});
Rs.render = Gc;
const Ir = Rs;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var TC = Ir, qc = {
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
  onEnd: U(),
  onChange: U()
}, {
  n: Kc
} = ee("countdown"), go = 1e3, yo = 60 * go, bo = 60 * yo, Yi = 24 * bo;
function Xc(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default", Jo(Ul(e.timeData)), () => [be(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Us = x({
  name: "VarCountdown",
  props: qc,
  setup(e) {
    var n = E(0), r = E(!1), a = E(""), t = E(0), o = E(0), i = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, g) => {
      var w = Object.values(g), y = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (y.forEach((b, C) => {
        c.includes(b) ? c = c.replace(b, ha("" + w[C], 2, "0")) : w[C + 1] += w[C] * T[C];
      }), c.includes("S")) {
        var O = ha("" + w[w.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", O) : c.includes("SS") ? c = c.replace("SS", O.slice(0, 2)) : c = c.replace("S", O.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var g = Math.floor(c / Yi), w = Math.floor(c % Yi / bo), y = Math.floor(c % bo / yo), T = Math.floor(c % yo / go), O = Math.floor(c % go), b = {
        days: g,
        hours: w,
        minutes: y,
        seconds: T,
        milliseconds: O
      };
      i.value = b, $(e.onChange, i.value), a.value = l(e.format, b);
    }, u = () => {
      var {
        time: c,
        onEnd: g,
        autoStart: w
      } = e, y = performance.now();
      n.value || (n.value = y + z(c));
      var T = n.value - y;
      if (T < 0 && (T = 0), o.value = T, s(T), T === 0) {
        $(g);
        return;
      }
      (w || r.value) && (t.value = Pn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, mv(t.value), u();
    };
    return le(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: i,
      n: Kc,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Us.render = Xc;
const Br = Us;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var PC = Br;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Oa = 9e15, hr = 1e9, wo = "0123456789abcdef", wt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", Ct = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Co = {
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
  minE: -Oa,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Oa,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Ys, Dn, fe = !0, Ut = "[DecimalError] ", cr = Ut + "Invalid argument: ", Fs = Ut + "Precision limit exceeded", Hs = Ut + "crypto unavailable", Ws = "[object Decimal]", Ze = Math.floor, Ye = Math.pow, Zc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Jc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Qc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, js = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, _c = 9007199254740991, xc = wt.length - 1, So = Ct.length - 1, q = { toStringTag: Ws };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
q.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(cr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
  var n, r, a, t, o = this, i = o.d, l = (e = new o.constructor(e)).d, s = o.s, u = e.s;
  if (!i || !l)
    return !s || !u ? NaN : s !== u ? s : i === l ? 0 : !i ^ s < 0 ? 1 : -1;
  if (!i[0] || !l[0])
    return i[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (o.e !== e.e)
    return o.e > e.e ^ s < 0 ? 1 : -1;
  for (a = i.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (i[n] !== l[n])
      return i[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = em(a, Zs(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ye(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ge(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ye(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Pe(u.plus(d).times(l), u.plus(s), i + 2, 1), Ge(l.d).slice(0, i) === (r = Ge(a.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, ue(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return Pe(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Pe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
q.greaterThan = q.gt = function(e) {
  return this.cmp(e) > 0;
};
q.greaterThanOrEqualTo = q.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
q.hyperbolicCosine = q.cosh = function() {
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Ft(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Na(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Na(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Ft(5, e)), t = Na(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Pe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? kn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? kn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = kn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = kn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= So)
      return i = kn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= So)
      return i = kn(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), fe = !0, ue(i, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
};
q.isNaN = function() {
  return !this.s;
};
q.isNegative = q.isNeg = function() {
  return this.s < 0;
};
q.isPositive = q.isPos = function() {
  return this.s > 0;
};
q.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
q.lessThan = q.lt = function(e) {
  return this.cmp(e) < 0;
};
q.lessThanOrEqualTo = q.lte = function(e) {
  return this.cmp(e) < 1;
};
q.logarithm = q.log = function(e) {
  var n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, c = 5;
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
  if (fe = !1, l = v + c, i = er(u, l), a = n ? St(d, l + 10) : er(e, l), s = Pe(i, a, l, 1), Qa(s.d, t = v, f))
    do
      if (l += 10, i = er(u, l), a = n ? St(d, l + 10) : er(e, l), s = Pe(i, a, l, 1), !o) {
        +Ge(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (Qa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, g = c.constructor;
  if (e = new g(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new g(NaN) : c.d ? e.s = -e.s : e = new g(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, l = g.precision, s = g.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new g(c);
    else
      return new g(s === 3 ? -0 : 0);
    return fe ? ue(e, l, s) : e;
  }
  if (r = Ze(e.e / de), d = Ze(c.e / de), u = u.slice(), o = d - r, o) {
    for (v = o < 0, v ? (n = u, o = -o, i = f.length) : (n = f, r = d, i = u.length), a = Math.max(Math.ceil(l / de), i) + 2, o > a && (o = a, n.length = 1), n.reverse(), a = o; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, i = f.length, v = a < i, v && (i = a), a = 0; a < i; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    o = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), i = u.length, a = f.length - i; a > 0; --a)
    u[i++] = 0;
  for (a = f.length; a > o; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = Tn - 1;
      --u[t], u[a] += Tn;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Yt(u, r), fe ? ue(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return ko(this);
};
q.naturalLogarithm = q.ln = function() {
  return er(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, l, s) : e;
  if (o = Ze(v.e / de), a = Ze(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / de), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Tn | 0, u[t] %= Tn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Yt(u, a), fe ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(cr + e);
  return r.d ? (n = Gs(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = rm(a, Zs(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (fe = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Ge(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(i, o, r + 2, 1)).times(0.5), Ge(o.d).slice(0, r) === (n = Ge(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(o, s + 1, 0), o.times(o).eq(i))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(i));
        break;
      }
  return fe = !0, ue(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Ze(d.e / de) + Ze(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + c[a] * f[t - a - 1] + n, o[t--] = l % Tn | 0, n = l / Tn | 0;
    o[t] = (o[t] + n) % Tn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Yt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return li(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, !0) : (tn(e, 0, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = Mn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Mn(t) : (tn(e, 0, hr), n === void 0 ? n = o.rounding : tn(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Mn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, g = c.d, w = c.constructor;
  if (!g)
    return new w(c);
  if (u = r = new w(1), a = s = new w(0), n = new w(a), o = n.e = Gs(g) - c.e - 1, i = o % de, n.d[0] = Ye(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new w(e), !l.isInt() || l.lt(u))
      throw Error(cr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new w(Ge(g)), d = w.precision, w.precision = o = g.length * de * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Pe(u, a, o, 1).minus(c).abs().cmp(Pe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], w.precision = d, fe = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return li(this, 16, e, n);
};
q.toNearest = function(e, n) {
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
  return e.d[0] ? (fe = !1, r = Pe(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return li(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Ye(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= _c)
    return t = qs(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Ye(+l, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + Ge(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = ko(e.times(er(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), Qa(t.d, a, o) && (n = a + 10, t = ue(ko(e.times(er(l, n + r)), n), n + 5, 1), +Ge(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, hr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = Mn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, hr), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = Mn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ge(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Kn(r)), o += a;
    i = e[n], a = i + "", r = de - a.length, r && (o += Kn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function tn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(cr + e);
}
function Qa(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ye(10, de - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ye(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ye(10, n - 3) - 1, i;
}
function ct(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += wo.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function em(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Ft(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Na(e, 1, n.times(t), new e(1));
  for (var o = r; o--; ) {
    var i = n.times(n);
    n = i.times(i).minus(i).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Pe = function() {
  function e(a, t, o) {
    var i, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      i = a[s] * t + l, a[s] = i % o | 0, l = i / o | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, o, i) {
    var l, s;
    if (o != i)
      s = o > i ? 1 : -1;
    else
      for (l = s = 0; l < o; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, o, i) {
    for (var l = 0; o--; )
      a[o] -= l, l = a[o] < t[o] ? 1 : 0, a[o] = l * i + a[o] - t[o];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, o, i, l, s) {
    var u, d, v, f, c, g, w, y, T, O, b, C, V, k, A, M, I, B, p, S, L = a.constructor, Q = a.s == t.s ? 1 : -1, H = a.d, R = t.d;
    if (!H || !H[0] || !R || !R[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (H ? R && H[0] == R[0] : !R) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          H && H[0] == 0 || !R ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), p = R.length, I = H.length, T = new L(Q), O = T.d = [], v = 0; R[v] == (H[v] || 0); v++)
      ;
    if (R[v] > (H[v] || 0) && d--, o == null ? (k = o = L.precision, i = L.rounding) : l ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      O.push(1), g = !0;
    else {
      if (k = k / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], k++; (v < I || f) && k--; v++)
          A = f * s + (H[v] || 0), O[v] = A / R | 0, f = A % R | 0;
        g = f || v < I;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), H = e(H, f, s), p = R.length, I = H.length), M = p, b = H.slice(0, p), C = b.length; C < p; )
          b[C++] = 0;
        S = R.slice(), S.unshift(0), B = R[0], R[1] >= s / 2 && ++B;
        do
          f = 0, u = n(R, b, p, C), u < 0 ? (V = b[0], p != C && (V = V * s + (b[1] || 0)), f = V / B | 0, f > 1 ? (f >= s && (f = s - 1), w = e(R, f, s), y = w.length, C = b.length, u = n(w, b, y, C), u == 1 && (f--, r(w, p < y ? S : R, y, s))) : (f == 0 && (u = f = 1), w = R.slice()), y = w.length, y < C && w.unshift(0), r(b, w, C, s), u == -1 && (C = b.length, u = n(R, b, p, C), u < 1 && (f++, r(b, p < C ? S : R, C, s))), C = b.length) : u === 0 && (f++, b = [0]), O[v++] = f, u && b[0] ? b[C++] = H[M] || 0 : (b = [H[M]], C = 1);
        while ((M++ < I || b[0] !== void 0) && k--);
        g = b[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (c == 1)
      T.e = d, Ys = g;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      T.e = v + d * c - 1, ue(T, l ? o + T.e + 1 : o, i, g);
    }
    return T;
  };
}();
function ue(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (o = n - t, o < 0)
        o += de, i = n, d = v[f = 0], s = d / Ye(10, t - i - 1) % 10 | 0;
      else if (f = Math.ceil((o + 1) / de), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, o %= de, i = o - de + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        o %= de, i = o - de + t, s = i < 0 ? 0 : d / Ye(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % Ye(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / Ye(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ye(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Ye(10, de - o), v[f] = i > 0 ? (d / Ye(10, t - i) % Ye(10, i) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (o = 1, i = v[0]; i >= 10; i /= 10)
              o++;
            for (i = v[0] += l, l = 1; i >= 10; i /= 10)
              l++;
            o != l && (e.e++, v[0] == Tn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Tn)
              break;
            v[f--] = 0, l = 1;
          }
      for (o = v.length; v[--o] === 0; )
        v.pop();
    }
  return fe && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function Mn(e, n, r) {
  if (!e.isFinite())
    return Xs(e);
  var a, t = e.e, o = Ge(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Kn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Kn(-t - 1) + o, r && (a = r - i) > 0 && (o += Kn(a))) : t >= i ? (o += Kn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Kn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Kn(a))), o;
}
function Yt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function St(e, n, r) {
  if (n > xc)
    throw fe = !0, r && (e.precision = r), Error(Fs);
  return ue(new e(wt), n, 1, !0);
}
function kn(e, n, r) {
  if (n > So)
    throw Error(Fs);
  return ue(new e(Ct), n, r, !0);
}
function Gs(e) {
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
function qs(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Hi(o.d, i) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Hi(n.d, i);
  }
  return fe = !0, o;
}
function Fi(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ks(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ko(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Ye(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), Ge(l.d).slice(0, s) === Ge(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Qa(i.d, s - a, c, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = g, c, fe = !0);
      else
        return f.precision = g, i;
    }
    i = l;
  }
}
function er(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, c = 1, g = 10, w = e, y = w.d, T = w.constructor, O = T.rounding, b = T.precision;
  if (w.s < 0 || !y || !y[0] || !w.e && y[0] == 1 && y.length == 1)
    return new T(y && !y[0] ? -1 / 0 : w.s != 1 ? NaN : y ? 0 : w);
  if (n == null ? (fe = !1, d = b) : d = n, T.precision = d += g, r = Ge(y), a = r.charAt(0), Math.abs(o = w.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      w = w.times(e), r = Ge(w.d), a = r.charAt(0), c++;
    o = w.e, a > 1 ? (w = new T("0." + r), o++) : w = new T(a + "." + r.slice(1));
  } else
    return u = St(T, d + 2, b).times(o + ""), w = er(new T(a + "." + r.slice(1)), d - g).plus(u), T.precision = b, n == null ? ue(w, b, O, fe = !0) : w;
  for (v = w, s = i = w = Pe(w.minus(1), w.plus(1), d, 1), f = ue(w.times(w), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new T(t), d, 1)), Ge(u.d).slice(0, d) === Ge(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(St(T, d + 2, b).times(o + ""))), s = Pe(s, new T(c), d, 1), n == null)
        if (Qa(s.d, d - g, O, l))
          T.precision = d += g, u = i = w = Pe(v.minus(1), v.plus(1), d, 1), f = ue(w.times(w), d, 1), t = l = 1;
        else
          return ue(s, T.precision = b, O, fe = !0);
      else
        return T.precision = b, s;
    s = u, t += 2;
  }
}
function Xs(e) {
  return String(e.s * e.s / 0);
}
function $o(e, n) {
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
function nm(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), js.test(n))
      return $o(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Jc.test(n))
    r = 16, n = n.toLowerCase();
  else if (Zc.test(n))
    r = 2;
  else if (Qc.test(n))
    r = 8;
  else
    throw Error(cr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = qs(a, new a(r), o, o * 2)), u = ct(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Yt(u, d), e.d = u, fe = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ye(2, s) : nr.pow(2, s))), fe = !0, e);
}
function rm(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Na(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Ft(5, r)), n = Na(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Na(e, n, r, a, t) {
  var o, i, l, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), l = new e(a); ; ) {
    if (i = Pe(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(i) : a.minus(i), a = Pe(i.times(s), new e(n++ * n++), u, 1), i = l.plus(a), i.d[d] !== void 0) {
      for (o = d; i.d[o] === l.d[o] && o--; )
        ;
      if (o == -1)
        break;
    }
    o = l, l = a, a = i, i = o;
  }
  return fe = !0, i.d.length = d + 1, i;
}
function Ft(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Zs(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = Fi(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = Fi(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function li(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor, g = r !== void 0;
  if (g ? (tn(r, 1, hr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Xs(e);
  else {
    for (d = Mn(e), i = d.indexOf("."), g ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - i, f.d = ct(Mn(f), 10, t), f.e = f.d.length), v = ct(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Ys), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += wo.charAt(v[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = ct(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += wo.charAt(v[i]);
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
function Hi(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function am(e) {
  return new this(e).abs();
}
function tm(e) {
  return new this(e).acos();
}
function om(e) {
  return new this(e).acosh();
}
function im(e, n) {
  return new this(e).plus(n);
}
function lm(e) {
  return new this(e).asin();
}
function sm(e) {
  return new this(e).asinh();
}
function um(e) {
  return new this(e).atan();
}
function dm(e) {
  return new this(e).atanh();
}
function vm(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function fm(e) {
  return new this(e).cbrt();
}
function cm(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function mm(e, n, r) {
  return new this(e).clamp(n, r);
}
function pm(e) {
  if (!e || typeof e != "object")
    throw Error(Ut + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    hr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Oa,
    0,
    "toExpPos",
    0,
    Oa,
    "maxE",
    0,
    Oa,
    "minE",
    -Oa,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = Co[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(cr + r + ": " + a);
  if (r = "crypto", t && (this[r] = Co[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Hs);
      else
        this[r] = !1;
    else
      throw Error(cr + r + ": " + a);
  return this;
}
function hm(e) {
  return new this(e).cos();
}
function gm(e) {
  return new this(e).cosh();
}
function Js(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Wi(o)) {
      u.s = o.s, fe ? !o.d || o.e > t.maxE ? (u.e = NaN, u.d = null) : o.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
      return;
    }
    if (s = typeof o, s === "number") {
      if (o === 0) {
        u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
        for (i = 0, l = o; l >= 10; l /= 10)
          i++;
        fe ? i > t.maxE ? (u.e = NaN, u.d = null) : i < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i, u.d = [o]) : (u.e = i, u.d = [o]);
        return;
      } else if (o * 0 !== 0) {
        o || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return $o(u, o.toString());
    } else if (s !== "string")
      throw Error(cr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), js.test(o) ? $o(u, o) : nm(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = pm, t.clone = Js, t.isDecimal = Wi, t.abs = am, t.acos = tm, t.acosh = om, t.add = im, t.asin = lm, t.asinh = sm, t.atan = um, t.atanh = dm, t.atan2 = vm, t.cbrt = fm, t.ceil = cm, t.clamp = mm, t.cos = hm, t.cosh = gm, t.div = ym, t.exp = bm, t.floor = wm, t.hypot = Cm, t.ln = Sm, t.log = km, t.log10 = Tm, t.log2 = $m, t.max = Pm, t.min = Om, t.mod = Vm, t.mul = Em, t.pow = Mm, t.random = Im, t.round = Bm, t.sign = Nm, t.sin = Dm, t.sinh = Am, t.sqrt = zm, t.sub = Lm, t.sum = Rm, t.tan = Um, t.tanh = Ym, t.trunc = Fm, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function ym(e, n) {
  return new this(e).div(n);
}
function bm(e) {
  return new this(e).exp();
}
function wm(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function Cm() {
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
function Wi(e) {
  return e instanceof nr || e && e.toStringTag === Ws || !1;
}
function Sm(e) {
  return new this(e).ln();
}
function km(e, n) {
  return new this(e).log(n);
}
function $m(e) {
  return new this(e).log(2);
}
function Tm(e) {
  return new this(e).log(10);
}
function Pm() {
  return Ks(this, arguments, "lt");
}
function Om() {
  return Ks(this, arguments, "gt");
}
function Vm(e, n) {
  return new this(e).mod(n);
}
function Em(e, n) {
  return new this(e).mul(n);
}
function Mm(e, n) {
  return new this(e).pow(n);
}
function Im(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, hr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Hs);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= de, a && e && (t = Ye(10, de - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
    l.pop();
  if (o < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= de)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return i.e = r, i.d = l, i;
}
function Bm(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Nm(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Dm(e) {
  return new this(e).sin();
}
function Am(e) {
  return new this(e).sinh();
}
function zm(e) {
  return new this(e).sqrt();
}
function Lm(e, n) {
  return new this(e).sub(n);
}
function Rm() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Um(e) {
  return new this(e).tan();
}
function Ym(e) {
  return new this(e).tanh();
}
function Fm(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var nr = q.constructor = Js(Co);
wt = new nr(wt);
Ct = new nr(Ct);
var Hm = {
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
  onBeforeChange: U(),
  onChange: U(),
  onIncrement: U(),
  onDecrement: U(),
  "onUpdate:modelValue": U()
}, {
  n: Wm,
  classes: jm
} = ee("counter"), ji = 100, Gi = 600, Gm = ["inputmode", "readonly", "disabled"];
function qm(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Ve({
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
          style: j({
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
      }]]), Se(D(
        "input",
        {
          class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: j({
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
        Gm
      ), [[Qd, e.inputValue]]), Se(re(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: j({
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
var Qs = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  inheritAttrs: !1,
  props: Hm,
  setup(e) {
    var n = E(""), r, a, t, o, {
      bindForm: i,
      form: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), {
      readonly: f,
      disabled: c
    } = l ?? {}, g = () => d(e.rules, e.modelValue), w = (R) => {
      Me(() => {
        var {
          validateTrigger: J,
          rules: G,
          modelValue: K
        } = e;
        u(J, R, G, K);
      });
    }, y = () => {
      var {
        min: R
      } = e;
      $(e["onUpdate:modelValue"], R != null ? z(R) : 0), v();
    }, T = {
      reset: y,
      validate: g,
      resetValidation: v
    }, O = Y(() => {
      var {
        max: R,
        modelValue: J
      } = e;
      return R != null && z(J) >= z(R);
    }), b = Y(() => {
      var {
        min: R,
        modelValue: J
      } = e;
      return R != null && z(J) <= z(R);
    }), C = (R) => {
      var {
        decimalLength: J,
        max: G,
        min: K
      } = e, N = z(R);
      return G != null && N > z(G) && (N = z(G)), K != null && N < z(K) && (N = z(K)), R = String(N), J != null && (R = N.toFixed(z(J))), R;
    }, V = (R) => {
      var {
        lazyChange: J,
        onBeforeChange: G
      } = e, {
        value: K
      } = R.target, N = C(K);
      J ? $(G, z(N), H) : Q(N), w("onInputChange");
    }, k = () => {
      var {
        disabled: R,
        readonly: J,
        disableDecrement: G,
        decrementButton: K,
        lazyChange: N,
        step: X,
        modelValue: W,
        onDecrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || G || !K) && !b.value) {
        var oe = new nr(z(W)).minus(new nr(z(X))).toString(), ge = C(oe), pe = z(ge);
        $(Z, pe), N ? $(ae, pe, H) : (Q(ge), w("onDecrement"));
      }
    }, A = () => {
      var {
        disabled: R,
        readonly: J,
        disableIncrement: G,
        incrementButton: K,
        lazyChange: N,
        step: X,
        modelValue: W,
        onIncrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || G || !K) && !O.value) {
        var oe = new nr(z(W)).plus(new nr(z(X))).toString(), ge = C(oe), pe = z(ge);
        $(Z, pe), N ? $(ae, pe, H) : (Q(ge), w("onIncrement"));
      }
    }, M = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (o = window.setTimeout(() => {
        L();
      }, Gi));
    }, I = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (t = window.setTimeout(() => {
        S();
      }, Gi));
    }, B = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, S = () => {
      r = window.setTimeout(() => {
        A(), S();
      }, ji);
    }, L = () => {
      a = window.setTimeout(() => {
        k(), L();
      }, ji);
    }, Q = (R) => {
      n.value = R;
      var J = z(R);
      $(e["onUpdate:modelValue"], J);
    }, H = (R) => {
      Q(C(String(R))), w("onLazyChange");
    };
    return $(i, T), le(() => e.modelValue, (R) => {
      Q(C(String(R))), $(e.onChange, z(R));
    }), Q(C(String(e.modelValue))), {
      n: Wm,
      classes: jm,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: O,
      isMin: b,
      validate: g,
      reset: y,
      resetValidation: v,
      handleChange: V,
      decrement: k,
      increment: A,
      pressDecrement: M,
      pressIncrement: I,
      releaseDecrement: B,
      releaseIncrement: p,
      toSizeUnit: he,
      toNumber: z
    };
  }
});
Qs.render = qm;
const Nr = Qs;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var OC = Nr, _s = 60, xs = _s * 60, eu = xs * 24, Km = eu * 7, Da = 1e3, _t = _s * Da, qi = xs * Da, Xm = eu * Da, Zm = Km * Da, si = "millisecond", Va = "second", Ea = "minute", Ma = "hour", Xn = "day", mt = "week", Sn = "month", nu = "quarter", Zn = "year", Ia = "date", Jm = "YYYY-MM-DDTHH:mm:ssZ", Ki = "Invalid Date", Qm = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _m = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const xm = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var To = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, ep = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + To(t, 2, "0") + ":" + To(o, 2, "0");
}, np = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, rp = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ap = function(n) {
  var r = {
    M: Sn,
    y: Zn,
    w: mt,
    d: Xn,
    D: Ia,
    h: Ma,
    m: Ea,
    s: Va,
    ms: si,
    Q: nu
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, tp = function(n) {
  return n === void 0;
};
const op = {
  s: To,
  z: ep,
  m: np,
  a: rp,
  p: ap,
  u: tp
};
var Ka = "en", Dr = {};
Dr[Ka] = xm;
var ui = function(n) {
  return n instanceof Ht;
}, kt = function e(n, r, a) {
  var t;
  if (!n)
    return Ka;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Dr[o] && (t = o), r && (Dr[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Dr[l] = n, t = l;
  }
  return !a && t && (Ka = t), t || !a && Ka;
}, te = function(n, r) {
  if (ui(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Ht(a);
}, ip = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = op;
Te.l = kt;
Te.i = ui;
Te.w = ip;
var lp = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Qm);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, Ht = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = kt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = lp(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== Ki;
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function(T, O) {
      var b = Te.w(o.$u ? Date.UTC(o.$y, O, T) : new Date(o.$y, O, T), o);
      return i ? b : b.endOf(Xn);
    }, u = function(T, O) {
      var b = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Te.w(o.toDate()[T].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? b : C).slice(O)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Zn:
        return i ? s(1, 0) : s(31, 11);
      case Sn:
        return i ? s(1, v) : s(0, v + 1);
      case mt: {
        var g = this.$locale().weekStart || 0, w = (d < g ? d + 7 : d) - g;
        return s(i ? f - w : f + (6 - w), v);
      }
      case Xn:
      case Ia:
        return u(c + "Hours", 0);
      case Ma:
        return u(c + "Minutes", 1);
      case Ea:
        return u(c + "Seconds", 2);
      case Va:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = l + "Date", o[Ia] = l + "Date", o[Sn] = l + "Month", o[Zn] = l + "FullYear", o[Ma] = l + "Hours", o[Ea] = l + "Minutes", o[Va] = l + "Seconds", o[si] = l + "Milliseconds", o)[i], u = i === Xn ? this.$D + (t - this.$W) : t;
    if (i === Sn || i === Zn) {
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
    var o = this, i;
    a = Number(a);
    var l = Te.p(t), s = function(f) {
      var c = te(o);
      return Te.w(c.date(c.date() + Math.round(f * a)), o);
    };
    if (l === Sn)
      return this.set(Sn, this.$M + a);
    if (l === Zn)
      return this.set(Zn, this.$y + a);
    if (l === Xn)
      return s(1);
    if (l === mt)
      return s(7);
    var u = (i = {}, i[Ea] = _t, i[Ma] = qi, i[Va] = Da, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Ki;
    var i = a || Jm, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, g = function(b, C, V, k) {
      return b && (b[C] || b(t, i)) || V[C].slice(0, k);
    }, w = function(b) {
      return Te.s(s % 12 || 12, b, "0");
    }, y = c || function(O, b, C) {
      var V = O < 12 ? "AM" : "PM";
      return C ? V.toLowerCase() : V;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Te.s(d + 1, 2, "0"),
      MMM: g(o.monthsShort, d, f, 3),
      MMMM: g(f, d),
      D: this.$D,
      DD: Te.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: g(o.weekdaysMin, this.$W, v, 2),
      ddd: g(o.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Te.s(s, 2, "0"),
      h: w(1),
      hh: w(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(_m, function(O, b) {
      return b || T[O] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * _t, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Zn] = v / 12, i[Sn] = v, i[nu] = v / 3, i[mt] = (d - u) / Zm, i[Xn] = (d - u) / Xm, i[Ma] = d / qi, i[Ea] = d / _t, i[Va] = d / Da, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Dr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = kt(a, t, !0);
    return i && (o.$L = i), o;
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
}(), ru = Ht.prototype;
te.prototype = ru;
[["$ms", si], ["$s", Va], ["$m", Ea], ["$H", Ma], ["$W", Xn], ["$M", Sn], ["$y", Zn], ["$D", Ia]].forEach(function(e) {
  ru[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, Ht, te), e.$i = !0), te;
};
te.locale = kt;
te.isDayjs = ui;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Dr[Ka];
te.Ls = Dr;
te.p = {};
const au = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, tu = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function sp(e) {
  return ["date", "month"].includes(e);
}
var pt = [{
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
}], qa = [{
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
}], up = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: sp
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
  onPreview: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: dp
} = ee("picker-header");
function vp(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return h(), P(
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
    ), D(
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
          default: ve(() => [(h(), P(
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
var ou = x({
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
    } = n, a = E(!1), t = E(0), o = Y(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (l = We.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return We.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return le(() => e.date, () => {
      t.value = 0;
    }), {
      n: dp,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
ou.render = vp;
const iu = ou;
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
te.extend(au);
te.extend(tu);
var {
  n: st,
  classes: fp
} = ee("month-picker"), {
  n: ut
} = ee("date-picker");
function cp(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [D(
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
          default: ve(() => [(h(), P("ul", {
            key: e.panelKey
          }, [(h(!0), P(
            Oe,
            null,
            Be(e.MONTH_LIST, (t) => (h(), P("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Po({}, e.buttonProps(t.index)), {
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
var lu = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: iu
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
    } = n, [a, t] = e.current.split("-"), o = E(!1), i = E(0), l = E(null), s = Ee({
      left: !1,
      right: !1
    }), u = Y(() => e.choose.chooseYear === e.preview.previewYear), d = Y(() => e.preview.previewYear === a), v = (O) => {
      var b, C;
      return (b = (C = We.value.datePickerMonthDict) == null ? void 0 : C[O].abbr) != null ? b : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: b
        },
        componentProps: {
          min: C,
          max: V
        }
      } = e, k = !0, A = !0, M = b + "-" + O;
      return V && (k = te(M).isSameOrBefore(te(V), "month")), C && (A = te(M).isSameOrAfter(te(C), "month")), k && A;
    }, c = (O) => {
      var {
        choose: {
          chooseMonths: b,
          chooseDays: C,
          chooseRangeMonth: V
        },
        componentProps: {
          type: k,
          range: A
        }
      } = e;
      if (A) {
        if (!V.length)
          return !1;
        var M = te(O).isSameOrBefore(te(V[1]), "month"), I = te(O).isSameOrAfter(te(V[0]), "month");
        return M && I;
      }
      return k === "month" ? b.includes(O) : C.some((B) => B.includes(O));
    }, g = (O) => {
      var {
        choose: {
          chooseMonth: b
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: V,
          color: k,
          multiple: A,
          range: M
        }
      } = e, I = C + "-" + O, B = () => M || A ? c(I) : (b == null ? void 0 : b.index) === O && u.value, p = () => f(O) ? V ? !V(I) : !1 : !0, S = p(), L = () => S ? !0 : M || A ? !c(I) : !u.value || (b == null ? void 0 : b.index) !== O, Q = () => d.value && t === O && e.componentProps.showCurrent ? (M || A || u.value) && S ? !0 : M || A ? !c(I) : u.value ? (b == null ? void 0 : b.index) !== t : !0 : !1, H = () => S ? "" : Q() ? k ?? "" : B() ? "" : ut() + "-color-cover", R = H().startsWith(ut());
      return {
        outline: Q(),
        text: L(),
        color: L() ? "" : k,
        textColor: R ? "" : H(),
        [ut() + "-color-cover"]: R,
        class: fp(st("button"), [S, st("button--disabled")])
      };
    }, w = (O, b) => {
      var C = b.currentTarget;
      C.classList.contains(st("button--disabled")) || r("choose-month", O);
    }, y = (O) => {
      o.value = O === "prev", i.value += O === "prev" ? -1 : 1, r("check-preview", "year", O);
    }, T = (O) => {
      l.value.checkDate(O);
    };
    return le(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: b,
          max: C
        }
      } = e;
      C && (s.right = !te("" + (z(O) + 1)).isSameOrBefore(te(C), "year")), b && (s.left = !te("" + (z(O) - 1)).isSameOrAfter(te(b), "year"));
    }, {
      immediate: !0
    }), {
      n: st,
      nDate: ut,
      pack: We,
      MONTH_LIST: pt,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: g,
      getMonthAbbr: v,
      chooseMonth: w,
      checkDate: y
    };
  }
});
lu.render = cp;
const mp = lu;
var {
  n: Xi,
  classes: pp
} = ee("year-picker"), hp = ["onClick"];
function gp(e, n) {
  return h(), P(
    "ul",
    {
      class: m(e.n())
    },
    [(h(!0), P(
      Oe,
      null,
      Be(e.yearList, (r) => (h(), P(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: j({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        hp
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var su = x({
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
    } = n, a = Y(() => {
      var o = [], {
        preview: i,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!i)
        return o;
      var u = [z(i) + 100, z(i) - 100];
      if (l) {
        var d = te(l).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = te(s).format("YYYY-MM-D"), c = z(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var g = u[0]; g >= u[1]; g--)
        o.push(g);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return ze(() => {
      var o = document.querySelector("." + Xi("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Xi,
      classes: pp,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
su.render = gp;
const yp = su;
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
te.extend(au);
te.extend(tu);
var {
  n: Pa,
  classes: bp
} = ee("day-picker"), {
  n: dt
} = ee("date-picker");
function wp(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [D(
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
          default: ve(() => [(h(), P("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(h(!0), P(
              Oe,
              null,
              Be(e.sortWeekList, (t) => (h(), P(
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
          ), D(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(h(!0), P(
              Oe,
              null,
              Be(e.days, (t, o) => (h(), P("li", {
                key: o
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Oo({}, e.buttonProps(t)), {
                  onClick: (i) => e.chooseDay(t, i)
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
var uu = x({
  name: "DayPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: iu
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
    } = n, [a, t, o] = e.current.split("-"), i = E([]), l = E(!1), s = E(0), u = E(null), d = Ee({
      left: !1,
      right: !1
    }), v = Y(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = Y(() => {
      var M;
      return e.choose.chooseYear === e.preview.previewYear && ((M = e.choose.chooseMonth) == null ? void 0 : M.index) === e.preview.previewMonth.index;
    }), c = Y(() => {
      var M = qa.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return M === -1 || M === 0 ? qa : qa.slice(M).concat(qa.slice(0, M));
    }), g = (M) => {
      var I, B;
      return (I = (B = We.value.datePickerWeekDict) == null ? void 0 : B[M].abbr) != null ? I : "";
    }, w = (M) => M > 0 ? M : "", y = () => {
      var {
        preview: {
          previewMonth: M,
          previewYear: I
        }
      } = e, B = te(I + "-" + M.index).daysInMonth(), p = te(I + "-" + M.index + "-01").day(), S = c.value.findIndex((L) => L.index === "" + p);
      i.value = [...Array(S).fill(-1), ...Array.from(Array(B + 1).keys())].filter((L) => L);
    }, T = () => {
      var {
        preview: {
          previewYear: M,
          previewMonth: I
        },
        componentProps: {
          max: B,
          min: p
        }
      } = e;
      if (B) {
        var S = M + "-" + (z(I.index) + 1);
        d.right = !te(S).isSameOrBefore(te(B), "month");
      }
      if (p) {
        var L = M + "-" + (z(I.index) - 1);
        d.left = !te(L).isSameOrAfter(te(p), "month");
      }
    }, O = (M) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: B
        },
        componentProps: {
          min: p,
          max: S
        }
      } = e, L = !0, Q = !0, H = I + "-" + B.index + "-" + M;
      return S && (L = te(H).isSameOrBefore(te(S), "day")), p && (Q = te(H).isSameOrAfter(te(p), "day")), L && Q;
    }, b = (M) => {
      var {
        choose: {
          chooseDays: I,
          chooseRangeDay: B
        },
        componentProps: {
          range: p
        }
      } = e;
      if (p) {
        if (!B.length)
          return !1;
        var S = te(M).isSameOrBefore(te(B[1]), "day"), L = te(M).isSameOrAfter(te(B[0]), "day");
        return S && L;
      }
      return I.includes(M);
    }, C = (M) => {
      if (M < 0)
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
          previewYear: B,
          previewMonth: p
        },
        componentProps: {
          allowedDates: S,
          color: L,
          multiple: Q,
          range: H
        }
      } = e, R = B + "-" + p.index + "-" + M, J = () => H || Q ? b(R) : z(I) === M && f.value, G = () => O(M) ? S ? !S(R) : !1 : !0, K = G(), N = () => K ? !0 : H || Q ? !b(R) : !f.value || z(I) !== M, X = () => v.value && z(o) === M && e.componentProps.showCurrent ? (H || Q || f.value) && K ? !0 : H || Q ? !b(R) : f.value ? I !== o : !0 : !1, W = () => K ? "" : X() ? L ?? "" : J() ? "" : dt() + "-color-cover", Z = W().startsWith(dt());
      return {
        text: N(),
        outline: X(),
        textColor: Z ? "" : W(),
        [dt() + "-color-cover"]: Z,
        class: bp(Pa("button"), Pa("button--usable"), [K, Pa("button--disabled")])
      };
    }, V = (M) => {
      l.value = M === "prev", s.value += M === "prev" ? -1 : 1, r("check-preview", "month", M);
    }, k = (M, I) => {
      var B = I.currentTarget;
      B.classList.contains(Pa("button--disabled")) || r("choose-day", M);
    }, A = (M) => {
      u.value.checkDate(M);
    };
    return ze(() => {
      y(), T();
    }), le(() => e.preview, () => {
      y(), T();
    }), {
      n: Pa,
      nDate: dt,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: w,
      getDayAbbr: g,
      checkDate: V,
      chooseDay: k,
      buttonProps: C
    };
  }
});
uu.render = wp;
const Cp = uu;
var {
  n: Sp,
  classes: kp
} = ee("date-picker");
function $p(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: j({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [F(e.$slots, "year", {
          year: e.chooseYear
        }, () => [be(
          ne(e.chooseYear),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
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
              var o, i, l;
              return [e.type === "month" ? (h(), P("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), P("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? F(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? F(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [be(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : F(e.$slots, "date", Jo(Ve({
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
    ), D(
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
          default: ve(() => [e.getPanelType === "year" ? (h(), me(
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
          )) : e.getPanelType === "month" ? (h(), me(
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
          )) : e.getPanelType === "date" ? (h(), me(
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
var du = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: mp,
    YearPickerPanel: yp,
    DayPickerPanel: Cp
  },
  props: up,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [i, l] = o.split("-"), s = pt.find((se) => se.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), g = E(), w = E(s), y = E(i), T = E(!1), O = E([]), b = E([]), C = E([]), V = E([]), k = E(null), A = E(null), M = Ee({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), I = Y(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: g.value,
      chooseMonths: O.value,
      chooseDays: b.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: V.value
    })), B = Y(() => ({
      previewMonth: w.value,
      previewYear: y.value
    })), p = Y(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, ke;
        ce = (Ce = (ke = We.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + O.value.length + We.value.datePickerSelected : ce;
    }), S = Y(() => {
      var se, ye, ce, Ce, {
        multiple: ke,
        range: Re
      } = e;
      if (Re) {
        var Je = V.value.map((Zt) => te(Zt).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (ke)
        return "" + b.value.length + We.value.datePickerSelected;
      if (!c.value || !f.value || !g.value)
        return "";
      var fn = te(c.value + "-" + f.value.index + "-" + g.value).day(), Ta = qa.find((Zt) => Zt.index === "" + fn), Si = (se = (ye = We.value.datePickerWeekDict) == null ? void 0 : ye[Ta.index].name) != null ? se : "", Kd = (ce = (Ce = We.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", Xd = ha(g.value, 2, "0");
      return We.value.lang === "zh-CN" ? f.value.index + "-" + Xd + " " + Si.slice(0, 3) : Si.slice(0, 3) + ", " + Kd.slice(0, 3) + " " + g.value;
    }), L = Y(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = Y(() => !e.touchable || ["", "year"].includes(L.value)), H = Y(() => {
      var se, ye, ce, Ce, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + g.value).day(), Re = g.value ? ha(g.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ye = c.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: Re
      };
    }), R = Y(() => I.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), J = Y(() => c.value === y.value), G = Y(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === w.value.index;
    }), K = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0];
        n = ye, r = ce;
      }
    }, X = (se, ye) => se >= ye && se > 20 ? "x" : "y", W = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0], Ce = ye - n, ke = ce - r;
        t = X(Math.abs(Ce), Math.abs(ke)), a = Ce > 0 ? "prev" : "next";
      }
    }, Z = () => {
      if (!(Q.value || t !== "x")) {
        var se = L.value === "month" ? k : A;
        zt(() => {
          se.value.forwardRef(a), Ci();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? C : V;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), ke = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? O : b, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = ce.value.map((Je) => te(Je).format(Ce)), Re = ke.findIndex((Je) => Je === se);
      Re === -1 ? ke.push(se) : ke.splice(Re, 1), $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
    }, ge = (se, ye) => !c.value || !f.value ? !1 : J.value ? se === "month" ? ye.index < f.value.index : G.value ? ye < z(g.value) : f.value.index > w.value.index : c.value > y.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": Re
      } = e;
      if (!(se < 0 || ye)) {
        T.value = ge("day", se);
        var Je = y.value + "-" + w.value.index + "-" + se, fn = te(Je).format("YYYY-MM-DD");
        ce ? ae(fn, "day") : Ce ? oe(fn, "day") : ($(Re, fn), $(ke, fn));
      }
    }, He = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: ke,
        onChange: Re,
        onPreview: Je,
        "onUpdate:modelValue": fn
      } = e;
      if (T.value = ge("month", se), ye === "month" && !ce) {
        var Ta = y.value + "-" + se.index;
        Ce ? ae(Ta, "month") : ke ? oe(Ta, "month") : ($(fn, Ta), $(Re, Ta));
      } else
        w.value = se, $(Je, z(y.value), z(w.value.index));
      d.value = !1;
    }, nn = (se) => {
      y.value = "" + se, u.value = !1, d.value = !0, $(e.onPreview, z(y.value), z(w.value.index));
    }, on = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        y.value = "" + (z(y.value) + ce);
      else {
        var Ce = z(w.value.index) + ce;
        Ce < 1 && (y.value = "" + (z(y.value) - 1), Ce = 12), Ce > 12 && (y.value = "" + (z(y.value) + 1), Ce = 1), w.value = pt.find((ke) => z(ke.index) === Ce);
      }
      $(e.onPreview, z(y.value), z(w.value.index));
    }, Le = () => (e.multiple || e.range) && !we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, vn = (se) => we(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, jd = (se, ye) => {
      var ce = ye === "month" ? C : V, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((fn) => te(fn).format(Ce)).slice(0, 2), Re = ce.value.some((fn) => vn(fn));
      if (!Re) {
        ce.value = ke;
        var Je = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Je && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Gd = (se, ye) => {
      var ce = ye === "month" ? O : b, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Re) => te(Re).format(Ce))));
      ce.value = ke.filter((Re) => Re !== "Invalid Date");
    }, qd = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!vn(ye)) {
        var [ce, Ce, ke] = ye.split("-"), Re = pt.find((Je) => Je.index === Ce);
        f.value = Re, c.value = ce, g.value = ke, w.value = Re, y.value = ce;
      }
    }, Ci = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return le(() => e.modelValue, (se) => {
      if (!(!Le() || vn(se) || !se))
        if (e.range) {
          if (!we(se))
            return;
          v.value = se.length !== 1, jd(se, e.type);
        } else if (e.multiple) {
          if (!we(se))
            return;
          Gd(se, e.type);
        } else
          qd(se);
    }, {
      immediate: !0
    }), le(L, Ci), {
      n: Sp,
      classes: kp,
      monthPanelEl: k,
      dayPanelEl: A,
      reverse: T,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: g,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: p,
      getDateTitle: S,
      getPanelType: L,
      getChoose: I,
      getPreview: B,
      componentProps: M,
      slotProps: H,
      formatRange: R,
      clickEl: K,
      handleTouchstart: N,
      handleTouchmove: W,
      handleTouchend: Z,
      getChooseDay: pe,
      getChooseMonth: He,
      getChooseYear: nn,
      checkPreview: on
    };
  }
});
du.render = $p;
const Ar = du;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var VC = Ar;
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
function Tp(e) {
  return ["left", "center", "right"].includes(e);
}
var Pp = Vo({
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
    validator: Tp
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
  onBeforeClose: U(),
  onConfirm: U(),
  onCancel: U(),
  "onUpdate:show": U()
}, Xe(rt, [
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
  n: Op,
  classes: Vp
} = ee("dialog");
function Ep(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return h(), me(
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: Eo({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: m(e.n("title"))
          },
          [F(e.$slots, "title", {}, () => [be(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
            /* TEXT */
          )])],
          2
          /* CLASS */
        ), D(
          "div",
          {
            class: m(e.n("message")),
            style: j({
              textAlign: e.messageAlign
            })
          },
          [F(e.$slots, "default", {}, () => [be(
            ne(e.message),
            1
            /* TEXT */
          )])],
          6
          /* CLASS, STYLE */
        ), D(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (h(), me(
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
          )) : _("v-if", !0), e.confirmButton ? (h(), me(
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
var vu = x({
  name: "VarDialog",
  components: {
    VarPopup: mn,
    VarButton: en
  },
  inheritAttrs: !1,
  props: Pp,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => $(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if ($(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        $(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if ($(s), l != null) {
        l("confirm", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if ($(s), l != null) {
        l("cancel", a);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), le(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: Op,
      classes: Vp,
      pack: We,
      dt: Dt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: he
    };
  }
});
vu.render = Ep;
const lr = vu;
function $t() {
  return $t = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, $t.apply(this, arguments);
}
var Qn, Tt = {};
function Mp(e) {
  return e === void 0 && (e = {}), qe(e) ? $t({}, Tt, {
    message: e
  }) : $t({}, Tt, e);
}
function ya(e) {
  return xo() ? new Promise((n) => {
    ya.close();
    var r = Mp(e), a = Ee(r);
    a.teleport = "body", Qn = a;
    var {
      unmountInstance: t
    } = Wa(lr, a, {
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
function Ip(e) {
  Tt = e;
}
function Bp() {
  Tt = {};
}
function Np() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Me().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ya, {
  setDefaultOptions: Ip,
  resetDefaultOptions: Bp,
  close: Np
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
ya.install = function(e) {
  e.component(lr.name, lr);
};
ya.Component = lr;
var EC = lr, Dp = {
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
function Ba() {
  return Ba = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ba.apply(this, arguments);
}
var {
  n: Ap,
  classes: zp
} = ee("divider");
function Lp(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: j(e.style)
    },
    [F(e.$slots, "default", {}, () => [e.description ? (h(), P(
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
var fu = x({
  name: "VarDivider",
  props: Dp,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ee({
      withText: !1
    }), t = Y(() => to(e.inset) ? e.inset : !0), o = Y(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (to(l) || l === 0)
        return Ba({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ba({}, d, {
        height: "calc(80% - " + he(f) + ")"
      }) : Ba({}, d, {
        width: "calc(100% - " + he(f) + ")",
        left: v > 0 ? he(f) : he(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return ze(() => {
      i();
    }), Bt(() => {
      i();
    }), Ba({
      n: Ap,
      classes: zp
    }, _d(a), {
      style: o,
      isInset: t
    });
  }
});
fu.render = Lp;
const zr = fu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var MC = zr, Rp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ht(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Rp[n];
  });
}
var An = "top", mr = "bottom", ba = "right", sr = "left", Wt = "auto", jt = [An, mr, ba, sr], Gt = "start", _a = "end", Up = "clippingParents", cu = "viewport", ja = "popper", Yp = "reference", Zi = /* @__PURE__ */ jt.reduce(function(e, n) {
  return e.concat([n + "-" + Gt, n + "-" + _a]);
}, []), mu = /* @__PURE__ */ [].concat(jt, [Wt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Gt, n + "-" + _a]);
}, []), Fp = "beforeRead", Hp = "read", Wp = "afterRead", jp = "beforeMain", Gp = "main", qp = "afterMain", Kp = "beforeWrite", Xp = "write", Zp = "afterWrite", Mo = [Fp, Hp, Wp, jp, Gp, qp, Kp, Xp, Zp];
function zn(e) {
  return e.split("-")[0];
}
var Jp = {
  start: "end",
  end: "start"
};
function Ji(e) {
  return e.replace(/start|end/g, function(n) {
    return Jp[n];
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
function wa(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function pn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function di(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function gr(e) {
  return ((wa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Xa = Math.max, Qi = Math.min, Aa = Math.round;
function Io() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function pu() {
  return !/^((?!chrome|android).)*safari/i.test(Io());
}
function za(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && pn(e) && (t = e.offsetWidth > 0 && Aa(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Aa(a.height) / e.offsetHeight || 1);
  var i = wa(e) ? Cn(e) : window, l = i.visualViewport, s = !pu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function vi(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function fi(e) {
  return za(gr(e)).left + vi(e).scrollLeft;
}
function Qp(e, n) {
  var r = Cn(e), a = gr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = pu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + fi(e),
    y: s
  };
}
function On(e) {
  return Cn(e).getComputedStyle(e);
}
function _p(e) {
  var n, r = gr(e), a = vi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = Xa(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Xa(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + fi(e), s = -a.scrollTop;
  return On(t || r).direction === "rtl" && (l += Xa(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function In(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function qt(e) {
  return In(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (di(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    gr(e)
  );
}
function ci(e) {
  var n = On(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function hu(e) {
  return ["html", "body", "#document"].indexOf(In(e)) >= 0 ? e.ownerDocument.body : pn(e) && ci(e) ? e : hu(qt(e));
}
function Za(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = hu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], ci(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Za(qt(i)))
  );
}
function xp(e) {
  return ["table", "td", "th"].indexOf(In(e)) >= 0;
}
function _i(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  On(e).position === "fixed" ? null : e.offsetParent;
}
function eh(e) {
  var n = /firefox/i.test(Io()), r = /Trident/i.test(Io());
  if (r && pn(e)) {
    var a = On(e);
    if (a.position === "fixed")
      return null;
  }
  var t = qt(e);
  for (di(t) && (t = t.host); pn(t) && ["html", "body"].indexOf(In(t)) < 0; ) {
    var o = On(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function mi(e) {
  for (var n = Cn(e), r = _i(e); r && xp(r) && On(r).position === "static"; )
    r = _i(r);
  return r && (In(r) === "html" || In(r) === "body" && On(r).position === "static") ? n : r || eh(e) || n;
}
function nh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && di(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Bo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rh(e, n) {
  var r = za(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function xi(e, n, r) {
  return n === cu ? Bo(Qp(e, r)) : wa(n) ? rh(n, r) : Bo(_p(gr(e)));
}
function ah(e) {
  var n = Za(qt(e)), r = ["absolute", "fixed"].indexOf(On(e).position) >= 0, a = r && pn(e) ? mi(e) : e;
  return wa(a) ? n.filter(function(t) {
    return wa(t) && nh(t, a) && In(t) !== "body";
  }) : [];
}
function th(e, n, r, a) {
  var t = n === "clippingParents" ? ah(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = xi(e, u, a);
    return s.top = Xa(d.top, s.top), s.right = Qi(d.right, s.right), s.bottom = Qi(d.bottom, s.bottom), s.left = Xa(d.left, s.left), s;
  }, xi(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function xa(e) {
  return e.split("-")[1];
}
function oh(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function gu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? zn(a) : null, o = a ? xa(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case An:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case mr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case ba:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case sr:
      s = {
        x: n.x - r.width,
        y: l
      };
      break;
    default:
      s = {
        x: n.x,
        y: n.y
      };
  }
  var u = t ? oh(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Gt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case _a:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ih() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function lh(e) {
  return Object.assign({}, ih(), e);
}
function sh(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function yu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Up : l, u = r.rootBoundary, d = u === void 0 ? cu : u, v = r.elementContext, f = v === void 0 ? ja : v, c = r.altBoundary, g = c === void 0 ? !1 : c, w = r.padding, y = w === void 0 ? 0 : w, T = lh(typeof y != "number" ? y : sh(y, jt)), O = f === ja ? Yp : ja, b = e.rects.popper, C = e.elements[g ? O : f], V = th(wa(C) ? C : C.contextElement || gr(e.elements.popper), s, d, i), k = za(e.elements.reference), A = gu({
    reference: k,
    element: b,
    strategy: "absolute",
    placement: t
  }), M = Bo(Object.assign({}, b, A)), I = f === ja ? M : k, B = {
    top: V.top - I.top + T.top,
    bottom: I.bottom - V.bottom + T.bottom,
    left: V.left - I.left + T.left,
    right: I.right - V.right + T.right
  }, p = e.modifiersData.offset;
  if (f === ja && p) {
    var S = p[t];
    Object.keys(B).forEach(function(L) {
      var Q = [ba, mr].indexOf(L) >= 0 ? 1 : -1, H = [An, mr].indexOf(L) >= 0 ? "y" : "x";
      B[L] += S[H] * Q;
    });
  }
  return B;
}
function uh(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? mu : s, d = xa(a), v = d ? l ? Zi : Zi.filter(function(g) {
    return xa(g) === d;
  }) : jt, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(g, w) {
    return g[w] = yu(e, {
      placement: w,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[zn(w)], g;
  }, {});
  return Object.keys(c).sort(function(g, w) {
    return c[g] - c[w];
  });
}
function dh(e) {
  if (zn(e) === Wt)
    return [];
  var n = ht(e);
  return [Ji(e), n, Ji(n)];
}
function vh(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, g = c === void 0 ? !0 : c, w = r.allowedAutoPlacements, y = n.options.placement, T = zn(y), O = T === y, b = s || (O || !g ? [ht(y)] : dh(y)), C = [y].concat(b).reduce(function(ae, oe) {
      return ae.concat(zn(oe) === Wt ? uh(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: w
      }) : oe);
    }, []), V = n.rects.reference, k = n.rects.popper, A = /* @__PURE__ */ new Map(), M = !0, I = C[0], B = 0; B < C.length; B++) {
      var p = C[B], S = zn(p), L = xa(p) === Gt, Q = [An, mr].indexOf(S) >= 0, H = Q ? "width" : "height", R = yu(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Q ? L ? ba : sr : L ? mr : An;
      V[H] > k[H] && (J = ht(J));
      var G = ht(J), K = [];
      if (o && K.push(R[S] <= 0), l && K.push(R[J] <= 0, R[G] <= 0), K.every(function(ae) {
        return ae;
      })) {
        I = p, M = !1;
        break;
      }
      A.set(p, K);
    }
    if (M)
      for (var N = g ? 3 : 1, X = function(oe) {
        var ge = C.find(function(pe) {
          var He = A.get(pe);
          if (He)
            return He.slice(0, oe).every(function(nn) {
              return nn;
            });
        });
        if (ge)
          return I = ge, "break";
      }, W = N; W > 0; W--) {
        var Z = X(W);
        if (Z === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[a]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const fh = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vh,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ch(e, n, r) {
  var a = zn(e), t = [sr, An].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [sr, ba].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function mh(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = mu.reduce(function(d, v) {
    return d[v] = ch(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const ph = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mh
};
function hh(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function gh(e) {
  return e === Cn(e) || !pn(e) ? vi(e) : hh(e);
}
function yh(e) {
  var n = e.getBoundingClientRect(), r = Aa(n.width) / e.offsetWidth || 1, a = Aa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function bh(e, n, r) {
  r === void 0 && (r = !1);
  var a = pn(n), t = pn(n) && yh(n), o = gr(n), i = za(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((In(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ci(o)) && (l = gh(n)), pn(n) ? (s = za(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = fi(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function wh(e) {
  var n = za(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Ch(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    n.set(o.name, o);
  });
  function t(o) {
    r.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    r.has(o.name) || t(o);
  }), a;
}
function Sh(e) {
  var n = Ch(e);
  return Mo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function kh(e) {
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
var yr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $h = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', el = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Th(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), el).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(qn(yr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(qn(yr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Mo.indexOf(n.phase) < 0 && console.error(qn(yr, n.name, '"phase"', "either " + Mo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(qn(yr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(qn(yr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(qn(yr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(qn(yr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + el.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(qn($h, String(n.name), a, a));
      });
    });
  });
}
function Ph(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Oh(e) {
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
var nl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Vh = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", rl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function al() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Eh(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? rl : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, rl, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(T) {
        var O = typeof T == "function" ? T(d.options) : T;
        w(), d.options = Object.assign({}, o, d.options, O), d.scrollParents = {
          reference: wa(l) ? Za(l) : l.contextElement ? Za(l.contextElement) : [],
          popper: Za(s)
        };
        var b = Sh(Oh([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = b.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Ph([].concat(b, d.options.modifiers), function(p) {
            var S = p.name;
            return S;
          });
          if (Th(C), zn(d.options.placement) === Wt) {
            var V = d.orderedModifiers.find(function(p) {
              var S = p.name;
              return S === "flip";
            });
            V || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = On(s), A = k.marginTop, M = k.marginRight, I = k.marginBottom, B = k.marginLeft;
          [A, M, I, B].some(function(p) {
            return parseFloat(p);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return g(), c.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, O = T.reference, b = T.popper;
          if (!al(O, b)) {
            process.env.NODE_ENV !== "production" && console.error(nl);
            return;
          }
          d.rects = {
            reference: bh(O, mi(b), d.options.strategy === "fixed"),
            popper: wh(b)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var C = 0, V = 0; V < d.orderedModifiers.length; V++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Vh);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, V = -1;
              continue;
            }
            var k = d.orderedModifiers[V], A = k.fn, M = k.options, I = M === void 0 ? {} : M, B = k.name;
            typeof A == "function" && (d = A({
              state: d,
              options: I,
              name: B,
              instance: c
            }) || d);
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: kh(function() {
        return new Promise(function(y) {
          c.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        w(), f = !0;
      }
    };
    if (!al(l, s))
      return process.env.NODE_ENV !== "production" && console.error(nl), c;
    c.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var T = y.name, O = y.options, b = O === void 0 ? {} : O, C = y.effect;
        if (typeof C == "function") {
          var V = C({
            state: d,
            name: T,
            instance: c,
            options: b
          }), k = function() {
          };
          v.push(V || k);
        }
      });
    }
    function w() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return c;
  };
}
var vt = {
  passive: !0
};
function Mh(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, vt);
  }), l && s.addEventListener("resize", r.update, vt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, vt);
    }), l && s.removeEventListener("resize", r.update, vt);
  };
}
const Ih = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Mh,
  data: {}
};
function Bh(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = gu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Nh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Bh,
  data: {}
};
var Dh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ah(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Aa(n * t) / t || 0,
    y: Aa(r * t) / t || 0
  };
}
function tl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, c = f === void 0 ? 0 : f, g = i.y, w = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  c = y.x, w = y.y;
  var T = i.hasOwnProperty("x"), O = i.hasOwnProperty("y"), b = sr, C = An, V = window;
  if (u) {
    var k = mi(r), A = "clientHeight", M = "clientWidth";
    if (k === Cn(r) && (k = gr(r), On(k).position !== "static" && l === "absolute" && (A = "scrollHeight", M = "scrollWidth")), k = k, t === An || (t === sr || t === ba) && o === _a) {
      C = mr;
      var I = v && k === V && V.visualViewport ? V.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[A]
      );
      w -= I - a.height, w *= s ? 1 : -1;
    }
    if (t === sr || (t === An || t === mr) && o === _a) {
      b = ba;
      var B = v && k === V && V.visualViewport ? V.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[M]
      );
      c -= B - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && Dh), S = d === !0 ? Ah({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  if (c = S.x, w = S.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[C] = O ? "0" : "", L[b] = T ? "0" : "", L.transform = (V.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + w + "px)" : "translate3d(" + c + "px, " + w + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[C] = O ? w + "px" : "", n[b] = T ? c + "px" : "", n.transform = "", n));
}
function zh(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = On(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: zn(n.placement),
    variation: xa(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, tl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, tl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Lh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zh,
  data: {}
};
function Rh(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !pn(o) || !In(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Uh(e) {
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
      var t = n.elements[a], o = n.attributes[a] || {}, i = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !pn(t) || !In(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Yh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Rh,
  effect: Uh,
  requires: ["computeStyles"]
};
var Fh = [Ih, Nh, Lh, Yh], Hh = /* @__PURE__ */ Eh({
  defaultModifiers: Fh
});
function Pt() {
  return Pt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Pt.apply(this, arguments);
}
function ol(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function il(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ol(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ol(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function bu(e) {
  var n = E(null), r = E(null), a = E(!1), t = E({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = at(() => a.value, 1), i = null, l = !1, s = !1, u = !1, d = () => {
    var {
      width: k,
      height: A
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(k),
      height: Ne(A)
    };
  }, v = () => {
    e.trigger === "hover" && (u = !0, C());
  }, f = /* @__PURE__ */ function() {
    var k = il(function* () {
      e.trigger === "hover" && (u = !1, yield En(), !s && V());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, g = /* @__PURE__ */ function() {
    var k = il(function* () {
      e.trigger === "hover" && (s = !1, yield En(), !u && V());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), w = () => {
    C(), l = !0;
  }, y = () => {
    if (l) {
      l = !1;
      return;
    }
    a.value = !1, $(e["onUpdate:show"], !1);
  }, T = () => {
    d();
    var k = {
      x: Ne(e.offsetX),
      y: Ne(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: k.x,
          distance: k.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: k.x,
          distance: -k.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: k.y,
          distance: k.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: k.y,
          distance: -k.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: -k.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: -k.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: k.x,
          distance: k.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: k.y,
          distance: k.x
        };
    }
  }, O = () => {
    var {
      placement: k,
      skidding: A,
      distance: M
    } = T(), I = [Pt({}, fh, {
      enabled: a.value
    }), Pt({}, ph, {
      options: {
        offset: [A, M]
      }
    })];
    return {
      placement: k,
      modifiers: I
    };
  }, b = () => {
    i.setOptions(O());
  }, C = () => {
    var {
      disabled: k
    } = e;
    k || (a.value = !0, $(e["onUpdate:show"], !0));
  }, V = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  };
  return le(() => e.show, (k) => {
    a.value = k ?? !1;
  }, {
    immediate: !0
  }), le(() => e.offsetX, b), le(() => e.offsetY, b), le(() => e.placement, b), le(() => a.value, (k) => {
    k ? (b(), $(e.onOpen)) : $(e.onClose);
  }), le(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", y) : document.removeEventListener("click", y);
  }), le(() => e.disabled, V), ze(() => {
    i = Hh(n.value, r.value, O()), e.trigger === "click" && document.addEventListener("click", y);
  }), pr(() => {
    document.removeEventListener("click", y), i.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: t,
    handleHostClick: w,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: y,
    handlePopoverMouseenter: c,
    handlePopoverMouseleave: g,
    resize: b,
    open: C,
    close: V
  };
}
function Wh(e) {
  return ["click", "hover"].includes(e);
}
function jh(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function Gh(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var qh = {
  type: {
    type: String,
    default: "default",
    validator: Gh
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
    validator: Wh
  },
  placement: {
    type: String,
    default: "bottom",
    validator: jh
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Kh,
  classes: Xh
} = ee("tooltip");
function Zh(e, n) {
  return h(), P(
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
    [F(e.$slots, "default"), (h(), me(
      Ya,
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
          default: ve(() => [Se(D(
            "div",
            {
              ref: "popover",
              class: m(e.n("tooltip")),
              style: j({
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
            [D(
              "div",
              {
                style: j({
                  background: e.color,
                  width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
                }),
                class: m(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [F(e.$slots, "content", {}, () => [be(
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Fa, e.show]])]),
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
var wu = x({
  name: "VarTooltip",
  props: qh,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: g
    } = bu(e);
    return {
      toSizeUnit: he,
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      n: Kh,
      classes: Xh,
      handleHostClick: i,
      handlePopoverClose: v,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: g,
      open: f,
      close: c
    };
  }
});
wu.render = Zh;
const ur = wu;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var IC = ur;
function Jh(e) {
  return ["click"].includes(e);
}
var Qh = {
  expandTrigger: {
    type: String,
    validator: Jh
  },
  lineClamp: {
    type: [Number, String]
  },
  tooltip: {
    type: [Object, Boolean],
    default: !0
  }
};
function No() {
  return No = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, No.apply(this, arguments);
}
var {
  n: _h,
  classes: xh
} = ee("ellipsis"), eg = {
  key: 0
};
function ng(e, n) {
  var r = ie("var-tooltip");
  return h(), me(
    r,
    Jo(Ul(e.tooltip)),
    {
      content: ve(() => [F(e.$slots, "tooltip-content", {}, () => {
        var a;
        return [(a = e.tooltip) != null && a.content ? (h(), P(
          "span",
          eg,
          ne(e.tooltip.content),
          1
          /* TEXT */
        )) : F(e.$slots, "default", {
          key: 1
        })];
      })]),
      default: ve(() => [D(
        "span",
        {
          class: m(e.classes(e.n(), [e.lineClamp, e.n("--clamp"), e.n("--line")], [e.expandTrigger, e.n("--cursor")], [e.expanding, e.n("--expand")])),
          style: j(e.rootStyles),
          onClick: n[0] || (n[0] = function() {
            return e.handleClick && e.handleClick(...arguments);
          })
        },
        [F(e.$slots, "default")],
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
var Cu = x({
  name: "VarEllipsis",
  components: {
    VarTooltip: ur
  },
  props: Qh,
  setup(e) {
    var n = E(!1), r = Y(() => e.lineClamp ? {
      "-webkit-line-clamp": e.lineClamp
    } : {}), a = Y(() => e.tooltip === !1 ? {
      disabled: !0
    } : e.tooltip === !0 ? {
      sameWidth: !0
    } : No({
      sameWidth: !0
    }, e.tooltip)), t = () => {
      e.expandTrigger && (n.value = !n.value);
    };
    return {
      n: _h,
      classes: xh,
      tooltip: a,
      expanding: n,
      rootStyles: r,
      handleClick: t
    };
  }
});
Cu.render = ng;
const Lr = Cu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var BC = Lr;
function rg(e) {
  return ["start", "end"].includes(e);
}
var ag = {
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
    validator: rg
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function ll(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function tg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ll(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ll(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: og
} = ee("form");
function ig(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [F(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Su = x({
  name: "VarForm",
  props: ag,
  setup(e) {
    var n = Y(() => e.disabled), r = Y(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = gc(), o = (d, v) => {
      setTimeout(() => {
        var f = $a(v), c = f === window ? 0 : Mi(f), g = Mi(v) - c - Ne(e.scrollToErrorOffsetY);
        Ja(f, {
          top: g,
          animation: oo
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = tg(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: T
          } = y;
          return T();
        }));
        if (e.scrollToError) {
          var [, f] = tv(v, (y) => y === !1, e.scrollToError), c = f > -1;
          if (c) {
            var g, w = (g = a[f].instance.proxy) == null ? void 0 : g.$el;
            o(f, w);
          }
          return !c;
        }
        return v.every((y) => y === !0);
      });
      return function() {
        return d.apply(this, arguments);
      };
    }(), l = () => a.forEach((d) => {
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
      n: og,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
Su.render = ig;
const Ln = Su;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
Ln.useValidation = bn;
Ln.useForm = wn;
var NC = Ln;
function sl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Kt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        sl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        sl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Do() {
  return Do = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Do.apply(this, arguments);
}
var lg = "background-image", sg = "lazy-loading", ug = "lazy-error", ul = "lazy-attempt", dg = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ao = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", La = [], Ot = [], ku = ov(100), Ue = {
  loading: Ao,
  error: Ao,
  attempt: 3,
  throttleWait: 300,
  events: dg
}, pi = _o(tt, Ue.throttleWait);
function Xt(e, n) {
  e._lazy.arg === lg ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function vg(e) {
  e._lazy.loading && Xt(e, e._lazy.loading), tt();
}
function fg(e) {
  e._lazy.error && Xt(e, e._lazy.error), e._lazy.state = "error", gi(e), tt();
}
function $u(e, n) {
  Xt(e, n), e._lazy.state = "success", gi(e), tt();
}
function cg(e) {
  var n;
  Ot.includes(e) || (Ot.push(e), (n = Ue.events) == null || n.forEach((r) => {
    e.addEventListener(r, pi, {
      passive: !0
    });
  }));
}
function mg() {
  Ot.forEach((e) => {
    var n;
    (n = Ue.events) == null || n.forEach((r) => {
      e.removeEventListener(r, pi);
    });
  }), Ot.length = 0;
}
function pg(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(sg)) != null ? r : Ue.loading,
    error: (a = e.getAttribute(ug)) != null ? a : Ue.error,
    attempt: e.getAttribute(ul) ? Number(e.getAttribute(ul)) : Ue.attempt
  };
  e._lazy = Do({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Xt(e, Ao), $(Ue.filter, e._lazy);
}
function hg(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ku.add(n), $u(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? fg(e) : Tu(e);
  });
}
function Tu(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ku.has(n)) {
      $u(e, n), e._lazy.attemptLock = !1;
      return;
    }
    vg(e), hg(e, n);
  }
}
function hi(e) {
  return zo.apply(this, arguments);
}
function zo() {
  return zo = Kt(function* (e) {
    (yield sv(e)) && Tu(e);
  }), zo.apply(this, arguments);
}
function tt() {
  La.forEach((e) => hi(e));
}
function gg(e) {
  return Lo.apply(this, arguments);
}
function Lo() {
  return Lo = Kt(function* (e) {
    !La.includes(e) && La.push(e), uv(e).forEach(cg), yield hi(e);
  }), Lo.apply(this, arguments);
}
function gi(e) {
  Nt(La, e), La.length === 0 && mg();
}
function yg(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Pu(e, n) {
  return Ro.apply(this, arguments);
}
function Ro() {
  return Ro = Kt(function* (e, n) {
    pg(e, n), yield gg(e);
  }), Ro.apply(this, arguments);
}
function bg(e, n) {
  return Uo.apply(this, arguments);
}
function Uo() {
  return Uo = Kt(function* (e, n) {
    if (!yg(e, n)) {
      La.includes(e) && (yield hi(e));
      return;
    }
    yield Pu(e, n);
  }), Uo.apply(this, arguments);
}
function wg(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: i
  } = e;
  Ue.events = n ?? Ue.events, Ue.loading = r ?? Ue.loading, Ue.error = a ?? Ue.error, Ue.attempt = t ?? Ue.attempt, Ue.throttleWait = o ?? Ue.throttleWait, Ue.filter = i;
}
var Ou = {
  mounted: Pu,
  unmounted: gi,
  updated: bg,
  install(e, n) {
    wg(n), pi = _o(tt, Ue.throttleWait), e.directive("lazy", this);
  }
}, DC = Ou;
const Vt = Ou;
function Cg(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Sg = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Cg,
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
  onClick: U(),
  onLoad: U(),
  onError: U()
}, {
  n: kg,
  classes: $g
} = ee("image"), Tg = ["alt", "title", "lazy-error", "lazy-loading"], Pg = ["alt", "title", "src"];
function Og(e, n) {
  var r = Fe("lazy"), a = Fe("ripple");
  return Se((h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: j({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Se((h(), P(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: j({
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
      Tg
    )), [[r, e.src]]) : (h(), P(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: j({
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
      Pg
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var Vu = x({
  name: "VarImage",
  directives: {
    Lazy: Vt,
    Ripple: Ae
  },
  props: Sg,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: i,
        onLoad: l,
        onError: s
      } = e;
      i ? (o._lazy.state === "success" && $(l, t), o._lazy.state === "error" && $(s, t)) : $(l, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: i
      } = e;
      !o && $(i, t);
    }, a = (t) => {
      $(e.onClick, t);
    };
    return {
      n: kg,
      classes: $g,
      toSizeUnit: he,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
Vu.render = Og;
const Rr = Vu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var AC = Rr, Eu = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Mu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Vg() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Eu), {
    length: r
  } = gn(Mu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Iu = {
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
  onChange: U()
};
function dl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Eg(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        dl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        dl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var Mg = 250, Ig = 20, {
  n: Bg,
  classes: Ng
} = ee("swipe"), Dg = ["onClick"];
function Ag(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: j({
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
      [F(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), F(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), P(
        Oe,
        null,
        Be(e.length, (r, a) => (h(), P(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: j({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Dg
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
var Bu = x({
  name: "VarSwipe",
  props: Iu,
  setup(e) {
    var n = E(null), r = E(0), a = Y(() => e.vertical), t = E(0), o = E(0), i = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Vg(), v = !1, f = -1, c, g, w, y, T, O = (N) => s.find((X) => {
      var {
        index: W
      } = X;
      return W.value === N;
    }), b = () => {
      e.loop && (o.value >= 0 && O(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && O(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (O(d.value - 1).setTranslate(0), O(0).setTranslate(0)));
    }, C = (N) => {
      var X = xe(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: W
      } = e;
      return X <= -1 ? W ? -1 : 0 : X >= d.value ? W ? d.value : d.value - 1 : X;
    }, V = (N) => {
      var {
        loop: X
      } = e;
      return N === -1 ? X ? d.value - 1 : 0 : N === d.value ? X ? 0 : d.value - 1 : N;
    }, k = (N) => {
      var {
        loop: X
      } = e;
      return N < 0 ? X ? d.value - 1 : 0 : N > d.value - 1 ? X ? 0 : d.value - 1 : N;
    }, A = (N) => {
      var X = o.value >= r.value, W = o.value <= -t.value, Z = 0, ae = -(t.value - r.value);
      i.value = !0, (X || W) && (i.value = !0, o.value = W ? Z : ae, O(0).setTranslate(0), O(d.value - 1).setTranslate(0)), zt(() => {
        i.value = !1, $(N);
      });
    }, M = () => {
      l.value = k(z(e.initialIndex));
    }, I = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (B(), f = window.setTimeout(() => {
        R(), I();
      }, z(N)));
    }, B = () => {
      f && clearTimeout(f);
    }, p = (N, X) => {
      if (N > X && N > 10)
        return "horizontal";
      if (X > N && X > 10)
        return "vertical";
    }, S = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: X,
          clientY: W
        } = N.touches[0];
        c = X, g = W, w = performance.now(), v = !0, B(), A(() => {
          i.value = !0;
        });
      }
    }, L = (N) => {
      var {
        touchable: X,
        vertical: W
      } = e;
      if (!(!v || !X)) {
        var {
          clientX: Z,
          clientY: ae
        } = N.touches[0], oe = Math.abs(Z - c), ge = Math.abs(ae - g), pe = p(oe, ge), He = W ? "vertical" : "horizontal";
        if (pe === He) {
          N.preventDefault();
          var nn = y !== void 0 ? Z - y : 0, on = T !== void 0 ? ae - T : 0;
          y = Z, T = ae, o.value += W ? on : nn, b();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: X
        } = e, W = N ? T < g : y < c, Z = Math.abs(N ? g - T : c - y), ae = performance.now() - w <= Mg && Z >= Ig, oe = ae ? C(W ? l.value + 1 : l.value - 1) : C();
        v = !1, i.value = !1, y = void 0, T = void 0, o.value = oe * -r.value;
        var ge = l.value;
        l.value = V(oe), I(), ge !== l.value && $(X, l.value);
      }
    }, H = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), I(), setTimeout(() => {
        i.value = !1;
      }));
    }, R = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: W
        } = e, Z = l.value;
        l.value = k(Z + 1), (N == null ? void 0 : N.event) !== !1 && $(W, l.value), A(() => {
          if (Z === d.value - 1 && X) {
            O(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          Z !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, J = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: W
        } = e, Z = l.value;
        l.value = k(Z - 1), (N == null ? void 0 : N.event) !== !1 && $(W, l.value), A(() => {
          if (Z === 0 && X) {
            O(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          Z !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, G = (N, X) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var W = N > l.value ? R : J, Z = Math.abs(N - l.value);
        Array.from({
          length: Z
        }).forEach((ae, oe) => {
          W({
            event: oe === Z - 1 ? X == null ? void 0 : X.event : !1
          });
        });
      }
    }, K = {
      size: r,
      vertical: a
    };
    return u(K), le(() => d.value, /* @__PURE__ */ Eg(function* () {
      yield En(), M(), H();
    })), ze(() => {
      window.addEventListener("resize", H);
    }), pr(() => {
      window.removeEventListener("resize", H), B();
    }), {
      n: Bg,
      classes: Ng,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: S,
      handleTouchmove: L,
      handleTouchend: Q,
      next: R,
      prev: J,
      to: G,
      resize: H,
      toNumber: z
    };
  }
});
Bu.render = Ag;
const Rn = Bu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var zC = Rn;
function zg() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Eu), {
    index: r
  } = yn(Mu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Lg
} = ee("swipe-item");
function Rg(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n()),
      style: j({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Nu = x({
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = zg(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: Lg,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Nu.render = Rg;
const Un = Nu;
Un.install = function(e) {
  e.component(Un.name, Un);
};
var LC = Un;
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
var Ug = Yo({
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
  "onUpdate:show": U()
}, Xe(Iu, ["loop", "indicator", "onChange"]), Xe(rt, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: vl,
  classes: Yg
} = ee("image-preview"), fl = 12, cl = 200, Fg = 350, ml = 200, Hg = ["src", "alt"];
function Wg(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return h(), me(
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
        Ve({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ve(() => [(h(!0), P(
            Oe,
            null,
            Be(e.images, (i) => (h(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: i
              },
              {
                default: ve(() => [D(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
                    style: j({
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
                  [D(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    Hg
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
          indicator: ve((i) => {
            var {
              index: l,
              length: s
            } = i;
            return [F(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), P(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              ne(l + 1) + " / " + ne(s),
              3
              /* TEXT, CLASS */
            )) : _("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), F(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), me(
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
      )) : _("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("extra"))
        },
        [F(e.$slots, "extra")],
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
var Du = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: Rn,
    VarSwipeItem: Un,
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ug,
  setup(e) {
    var n = E(!1), r = Y(() => {
      var {
        images: B,
        current: p
      } = e, S = B.findIndex((L) => L === p);
      return S >= 0 ? S : 0;
    }), a = E(1), t = E(0), o = E(0), i = E(void 0), l = E(void 0), s = E(!0), u = null, d = null, v = null, f = (B, p) => {
      var {
        clientX: S,
        clientY: L
      } = B, {
        clientX: Q,
        clientY: H
      } = p;
      return Math.abs(Math.sqrt(Math.pow(Q - S, 2) + Math.pow(H - L, 2)));
    }, c = (B, p) => ({
      clientX: B.clientX,
      clientY: B.clientY,
      timestamp: Date.now(),
      target: p
    }), g = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, ml);
    }, w = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, y = (B) => d ? f(d, B) <= fl && B.timestamp - d.timestamp <= cl && d.target === B.target : !1, T = (B) => !B || !u || !d ? !1 : f(u, d) <= fl && Date.now() - d.timestamp < Fg && (B === u.target || B.parentNode === u.target), O = (B) => {
      v = window.setTimeout(() => {
        T(B.target) && I(), u = null;
      }, cl);
    }, b = (B) => {
      v && window.clearTimeout(v);
      var {
        touches: p
      } = B, S = c(p[0], B.currentTarget);
      if (u = S, y(S)) {
        a.value > 1 ? w() : g();
        return;
      }
      d = S;
    }, C = (B) => {
      var {
        offsetWidth: p,
        offsetHeight: S
      } = B, {
        naturalWidth: L,
        naturalHeight: Q
      } = B.querySelector("." + vl("image"));
      return {
        width: p,
        height: S,
        imageRadio: Q / L,
        rootRadio: S / p,
        zoom: z(e.zoom)
      };
    }, V = (B) => {
      var {
        zoom: p,
        imageRadio: S,
        rootRadio: L,
        width: Q,
        height: H
      } = C(B);
      if (!S)
        return 0;
      var R = S > L ? H / S : Q;
      return Math.max(0, (p * R - Q) / 2) / p;
    }, k = (B) => {
      var {
        zoom: p,
        imageRadio: S,
        rootRadio: L,
        width: Q,
        height: H
      } = C(B);
      if (!S)
        return 0;
      var R = S > L ? H : Q * S;
      return Math.max(0, (p * R - H) / 2) / p;
    }, A = (B, p, S) => B + p >= S ? S : B + p <= -S ? -S : B + p, M = (B) => {
      if (d) {
        var p = B.currentTarget, {
          touches: S
        } = B, L = c(S[0], p);
        if (a.value > 1) {
          var Q = L.clientX - d.clientX, H = L.clientY - d.clientY, R = V(p), J = k(p);
          t.value = A(t.value, Q, R), o.value = A(o.value, H, J);
        }
        d = L;
      }
    }, I = () => {
      if (a.value > 1) {
        w(), setTimeout(() => $(e["onUpdate:show"], !1), ml);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return le(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: vl,
      classes: Yg,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: b,
      handleTouchmove: M,
      handleTouchend: O,
      close: I
    };
  }
});
Du.render = Wg;
const dr = Du;
var _n;
function Hn(e) {
  if (xo()) {
    Hn.close();
    var n = qe(e) ? {
      images: [e]
    } : we(e) ? {
      images: e
    } : e, r = Ee(n);
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = Wa(dr, r, {
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
    _n = null, Me().then(() => {
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
var RC = dr, gt = {
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
  onScroll: U()
};
function pl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        pl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        pl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: jg,
  classes: Gg
} = ee("sticky");
function qg(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: j({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [D(
      "div",
      {
        class: m(e.n("wrapper")),
        ref: "wrapperEl",
        style: j({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [F(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
var Au = x({
  name: "VarSticky",
  props: gt,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), o = E("0px"), i = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = Y(() => !e.disabled && e.cssMode), v = Y(() => !e.disabled && !e.cssMode && a.value), f = Y(() => Ne(e.offsetTop)), c, g = () => {
      var {
        cssMode: b,
        disabled: C
      } = e;
      if (!C) {
        var V = 0;
        if (c !== window) {
          var {
            top: k
          } = c.getBoundingClientRect();
          V = k;
        }
        var A = r.value, M = n.value, {
          top: I,
          left: B
        } = M.getBoundingClientRect(), p = I - V;
        return p <= f.value ? (b || (i.value = M.offsetWidth + "px", l.value = M.offsetHeight + "px", t.value = V + f.value + "px", o.value = B + "px", s.value = A.offsetWidth + "px", u.value = A.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: p,
          isFixed: !1
        });
      }
    }, w = () => {
      var b = g();
      b && $(e.onScroll, b.offsetTop, b.isFixed);
    }, y = /* @__PURE__ */ function() {
      var b = hl(function* () {
        a.value = !1, yield pv(), g();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var b = hl(function* () {
        yield En(), c = $a(n.value), c !== window && c.addEventListener("scroll", w), window.addEventListener("scroll", w), w();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), O = () => {
      c !== window && c.removeEventListener("scroll", w), window.removeEventListener("scroll", w);
    };
    return le(() => e.disabled, y), Xo(T), Zo(O), ze(T), pr(O), {
      n: jg,
      classes: Gg,
      resize: y,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: o,
      fixedWidth: i,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: z
    };
  }
});
Au.render = qg;
const Yn = Au;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var UC = Yn, zu = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), Lu = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Kg() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(zu), {
    length: r
  } = gn(Lu);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Xg() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(zu), {
    index: r
  } = yn(Lu);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Zg = {
  index: {
    type: [Number, String]
  }
}, {
  n: Jg,
  classes: Qg
} = ee("index-anchor");
function _g(e, n) {
  return h(), me(
    Ha(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [D(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [F(e.$slots, "default", {}, () => [be(
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
var Ru = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Zg,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Xg(), t = E(0), o = E(!1), i = Y(() => e.index), l = E(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, g = (y) => {
      o.value = y;
    }, w = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: c,
      setDisabled: g
    };
    return a(w), {
      n: Jg,
      classes: Qg,
      name: i,
      anchorEl: l,
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
Ru.render = _g;
const Ur = Ru;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var YC = Ur, xg = {
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
  onClick: U(),
  onChange: U()
};
function gl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        gl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        gl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: ey,
  classes: ny
} = ee("index-bar"), ry = ["onClick"];
function ay(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [F(e.$slots, "default"), D(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: j({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), P(
        Oe,
        null,
        Be(e.anchorNameList, (r) => (h(), P(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: j({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ne(r),
          15,
          ry
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
var Uu = x({
  name: "VarIndexBar",
  props: xg,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Kg(), t = E(""), o = E(null), i = E(null), l = E([]), s = E(), u = Y(() => e.sticky), d = Y(() => e.cssMode), v = Y(() => Ne(e.stickyOffsetTop)), f = Y(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var g = (b, C) => {
      var V = Qo(b) ? b.name.value : b;
      V === s.value || V === void 0 || (s.value = V, (C == null ? void 0 : C.event) !== !1 && $(e.onChange, V));
    }, w = () => {
      if (!("getBoundingClientRect" in o.value))
        return 0;
      var {
        top: b
      } = o.value.getBoundingClientRect(), {
        scrollTop: C
      } = o.value, {
        top: V
      } = i.value.getBoundingClientRect();
      return C - b + V;
    }, y = () => {
      var b = At(o.value), C = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, V = w();
      r.forEach((k, A) => {
        var M = k.ownTop.value, I = b - M + v.value - V, B = A === r.length - 1 ? C : r[A + 1].ownTop.value - k.ownTop.value;
        I >= 0 && I < B && t.value === "" && (A && !e.cssMode && r[A - 1].setDisabled(!0), k.setDisabled(!1), g(k));
      });
    }, T = /* @__PURE__ */ function() {
      var b = xt(function* (C) {
        var {
          anchorName: V,
          manualCall: k = !1,
          options: A
        } = C;
        if (k && $(e.onClick, V), V !== s.value) {
          var M = r.find((S) => {
            var {
              name: L
            } = S;
            return V === L.value;
          });
          if (M) {
            var I = w(), B = M.ownTop.value - v.value + I, p = ei(o.value);
            t.value = V, g(V, A), yield Ja(o.value, {
              left: p,
              top: B,
              animation: Fl,
              duration: z(e.duration)
            }), zt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(V) {
        return b.apply(this, arguments);
      };
    }(), O = (b, C) => {
      Pn(() => T({
        anchorName: b,
        options: C
      }));
    };
    return le(() => n.value, /* @__PURE__ */ xt(function* () {
      yield En(), r.forEach((b) => {
        var {
          name: C,
          setOwnTop: V
        } = b;
        C.value && l.value.push(C.value), V();
      });
    })), ze(/* @__PURE__ */ xt(function* () {
      yield En(), o.value = $a(i.value), o.value.addEventListener("scroll", y);
    })), Mt(() => {
      $(o.value.removeEventListener, "scroll", y);
    }), {
      n: ey,
      classes: ny,
      barEl: i,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: O,
      anchorClick: T
    };
  }
});
Uu.render = ay;
const Yr = Uu;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var FC = Yr;
function ty(e) {
  return ["text", "password", "number"].includes(e);
}
var oy = {
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
    validator: ty
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
  onFocus: U(),
  onBlur: U(),
  onClick: U(),
  onClear: U(),
  onInput: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: eo,
  classes: iy
} = ee("input"), ly = ["id", "disabled", "type", "value", "maxlength", "rows"], sy = ["id", "disabled", "type", "value", "maxlength"], uy = ["for"];
function dy(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: j({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), P(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (h(), P(
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
            style: j({
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
            })
          },
          `
        `,
          46,
          ly
        )) : (h(), P(
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
            style: j({
              color: e.textColor,
              caretColor: e.errorMessage ? void 0 : e.focusColor
            }),
            onFocus: n[5] || (n[5] = function() {
              return e.handleFocus && e.handleFocus(...arguments);
            }),
            onBlur: n[6] || (n[6] = function() {
              return e.handleBlur && e.handleBlur(...arguments);
            }),
            onInput: n[7] || (n[7] = function() {
              return e.handleInput && e.handleInput(...arguments);
            }),
            onChange: n[8] || (n[8] = function() {
              return e.handleChange && e.handleChange(...arguments);
            }),
            onTouchstart: n[9] || (n[9] = function() {
              return e.handleTouchstart && e.handleTouchstart(...arguments);
            })
          },
          null,
          46,
          sy
        )), D(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: j({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          uy
        )],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
          r,
          {
            key: 0,
            class: m(e.n("clear-icon")),
            "var-input-cover": "",
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
    ), e.line ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: j({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: j({
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
var Yu = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  props: oy,
  setup(e) {
    var n = E("var-input-" + Ua().uid), r = E(null), a = E(!1), t = Y(() => {
      var {
        maxlength: p,
        modelValue: S
      } = e;
      return p ? Nn(S) ? "0 / " + p : String(S).length + "/" + p : "";
    }), {
      bindForm: o,
      form: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = (p) => {
      Me(() => {
        var {
          validateTrigger: S,
          rules: L,
          modelValue: Q
        } = e;
        s(S, p, L, Q);
      });
    }, f = () => {
      var {
        hint: p,
        modelValue: S
      } = e;
      if (!p && !Nn(S))
        return eo("--placeholder-hidden");
      if (p && (!Nn(S) || a.value))
        return eo("--placeholder-hint");
    }, c = (p) => {
      a.value = !0, $(e.onFocus, p), v("onFocus");
    }, g = (p) => {
      a.value = !1, $(e.onBlur, p), v("onBlur");
    }, w = (p) => {
      var S = p.target, {
        value: L
      } = S;
      L = C(b(L)), S.value = L, $(e["onUpdate:modelValue"], L), $(e.onInput, L, p), v("onInput");
    }, y = (p) => {
      var S = p.target, {
        value: L
      } = S;
      L = C(b(L)), S.value = L, $(e.onChange, L, p), v("onChange");
    }, T = () => {
      var {
        disabled: p,
        readonly: S,
        clearable: L,
        onClear: Q
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || p || S || !L || ($(e["onUpdate:modelValue"], ""), $(Q, ""), v("onClear"));
    }, O = (p) => {
      var {
        disabled: S,
        onClick: L
      } = e;
      i != null && i.disabled.value || S || ($(L, p), v("onClick"));
    }, b = (p) => e.modelModifiers.trim ? p.trim() : p, C = (p) => e.maxlength ? p.slice(0, z(e.maxlength)) : p, V = (p) => {
      var {
        disabled: S,
        readonly: L
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || S || L || p.stopPropagation();
    }, k = () => {
      $(e["onUpdate:modelValue"], ""), d();
    }, A = () => u(e.rules, e.modelValue), M = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, I = () => {
      r.value.blur();
    }, B = {
      reset: k,
      validate: A,
      resetValidation: d
    };
    return $(o, B), ze(() => {
      e.autofocus && M();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: eo,
      classes: iy,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: g,
      handleInput: w,
      handleChange: y,
      handleClear: T,
      handleClick: O,
      handleTouchstart: V,
      validate: A,
      resetValidation: d,
      reset: k,
      focus: M,
      blur: I
    };
  }
});
Yu.render = dy;
const vr = Yu;
vr.install = function(e) {
  e.component(vr.name, vr);
};
var HC = vr;
function vy(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function fy(e) {
  return ["always", "hover", "none"].includes(e);
}
var cy = {
  type: {
    type: String,
    default: "default",
    validator: vy
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
    validator: fy
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
  onClick: U()
}, {
  n: my,
  classes: py
} = ee("link");
function hy(e, n) {
  return h(), me(
    Ha(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ve(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
var Fu = x({
  name: "VarLink",
  props: cy,
  setup(e) {
    var n = Y(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = Y(() => {
      var {
        disabled: t,
        href: o,
        target: i,
        to: l,
        replace: s
      } = e;
      return t ? {} : o ? {
        href: o,
        target: i
      } : l ? {
        to: l,
        target: i,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: o,
        onClick: i
      } = e;
      o || $(i, t);
    };
    return {
      n: my,
      classes: py,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: he
    };
  }
});
Fu.render = hy;
const Fr = Fu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var WC = Fr, gy = {
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
  onLoad: U(),
  "onUpdate:loading": U(),
  "onUpdate:error": U()
};
function yl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        yl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        yl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: by,
  classes: wy
} = ee("list");
function Cy(e, n) {
  var r = ie("var-loading"), a = Fe("ripple");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [F(e.$slots, "default"), e.loading ? F(e.$slots, "loading", {
      key: 0
    }, () => [D(
      "div",
      {
        class: m(e.n("loading"))
      },
      [D(
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
    )]) : _("v-if", !0), e.finished ? F(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? F(e.$slots, "error", {
      key: 2
    }, () => [Se((h(), P(
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
    )), [[a]])]) : _("v-if", !0), D(
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
var Hu = x({
  name: "VarList",
  directives: {
    Ripple: Ae
  },
  components: {
    VarLoading: $n
  },
  props: gy,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = yy(function* () {
        yield Me();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && o() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return ze(() => {
      a = $a(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), pr(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: We,
      listEl: n,
      detectorEl: r,
      dt: Dt,
      isNumber: xe,
      load: t,
      check: i,
      n: by,
      classes: wy
    };
  }
});
Hu.render = Cy;
const Hr = Hu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var jC = Hr, Sy = {
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
  classes: ky,
  n: bl
} = ee("loading-bar");
const $y = x({
  name: "VarLoadingBar",
  props: Sy,
  setup(e) {
    return () => re("div", {
      class: ky(bl(), [e.error, bl("--error")]),
      style: {
        zIndex: sn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: he(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: he(e.top)
      }
    }, null);
  }
});
var Wu, wl, ju = {}, Ty = {
  value: 0,
  opacity: 0,
  error: !1
}, Ke = Ee(Ty), Py = (e) => {
  Object.assign(Ke, e);
}, Oy = (e) => {
  Object.assign(Ke, e), ju = e;
}, Vy = () => {
  Object.keys(ju).forEach((e) => {
    Ke[e] !== void 0 && (Ke[e] = void 0);
  });
}, Gu = () => {
  Wu = window.setTimeout(() => {
    if (!(Ke.value >= 95)) {
      var e = Math.random();
      Ke.value < 70 && (e = Math.round(5 * Math.random())), Ke.value += e, Gu();
    }
  }, 200);
}, Ey = () => {
  wl || (wl = !0, Wa($y, Ke)), (!Ke.error || Ke.value === 100) && (Ke.value = 0), setTimeout(() => {
    Ke.opacity = 1;
  }, 200), Gu();
}, My = () => {
  Ke.value = 100, setTimeout(() => {
    Ke.opacity = 0, setTimeout(() => {
      Ke.error = !1;
    }, 250);
  }, 300), window.clearTimeout(Wu);
}, Iy = () => {
  Ke.error = !0, Et.start(), setTimeout(Et.finish, 300);
}, Et = {
  start: Ey,
  finish: My,
  error: Iy,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Py,
  setDefaultOptions: Oy,
  resetDefaultOptions: Vy
}, GC = Et;
const Fo = Et;
function By(e) {
  return ["click", "hover"].includes(e);
}
function Ny(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Dy = {
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
    validator: By
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Ny
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: Ay,
  classes: zy
} = ee("menu");
function Ly(e, n) {
  return h(), P(
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
    [F(e.$slots, "default"), (h(), me(
      Ya,
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
          default: ve(() => [Se(D(
            "div",
            {
              ref: "popover",
              style: j({
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
            [F(e.$slots, "menu")],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[Fa, e.show]])]),
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
var qu = x({
  name: "VarMenu",
  props: Dy,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      // expose
      open: f,
      // expose
      close: c,
      // expose
      resize: g
    } = bu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: he,
      n: Ay,
      classes: zy,
      handleHostClick: i,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      resize: g,
      open: f,
      close: c
    };
  }
});
qu.render = Ly;
const Fn = qu;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var qC = Fn, Ku = Symbol("SELECT_BIND_OPTION_KEY"), Xu = Symbol("SELECT_COUNT_OPTION_KEY");
function Ry() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ku), {
    length: r
  } = gn(Xu);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Uy() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Ku), {
    index: r
  } = yn(Xu);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Yy = {
  label: {},
  value: {}
}, {
  n: Fy,
  classes: Hy
} = ee("option");
function Wy(e, n) {
  var r = ie("var-checkbox"), a = Fe("ripple");
  return Se((h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: j({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: j({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (h(), me(
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
    )) : _("v-if", !0), D(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [F(e.$slots, "default", {}, () => [be(
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
var Zu = x({
  name: "VarOption",
  directives: {
    Ripple: Ae
  },
  components: {
    VarCheckbox: or
  },
  props: Yy,
  setup(e) {
    var n = E(!1), r = Y(() => n.value), a = Y(() => e.label), t = Y(() => e.value), {
      select: o,
      bindSelect: i
    } = Uy(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(g);
    }, f = () => d(g), c = (w) => {
      n.value = w;
    }, g = {
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
    }), i(g), {
      n: Fy,
      classes: Hy,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Zu.render = Wy;
const Wr = Zu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var KC = Wr, jy = {
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
  onClick: U(),
  "onUpdate:show": U()
};
function Gy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !It(e);
}
var {
  n: Cl
} = ee("overlay");
const jr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: jy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = at(() => e.show, 1), {
      disabled: o
    } = ni(), i = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    Lt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: Cl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [$(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(De, {
        name: Cl("--fade")
      }, {
        default: () => [u && l()]
      });
    };
    return () => {
      var {
        teleport: u
      } = e;
      if (u) {
        var d;
        return re(Ya, {
          to: u,
          disabled: o.value
        }, Gy(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var XC = jr, qy = {
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
  onChange: U(),
  "onUpdate:current": U(),
  "onUpdate:size": U()
}, {
  n: Ky,
  classes: Xy
} = ee("pagination"), Zy = ["item-mode", "onClick"];
function Jy(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), i = Fe("ripple");
  return h(), P(
    "ul",
    {
      class: m(e.n())
    },
    [Se((h(), P(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [F(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), P(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = ki((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), D("span", null, [be(
        " / " + ne(e.pageCount) + " ",
        1
        /* TEXT */
      ), D(
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
    )) : (h(!0), P(
      Oe,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => Se((h(), P(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [be(
          ne(l),
          1
          /* TEXT */
        )],
        10,
        Zy
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Se((h(), P(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [F(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), P(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        o,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ve(() => [(h(!0), P(
            Oe,
            null,
            Be(e.sizeOption, (l, s) => Se((h(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ve(() => [be(
                  ne(l) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
                  1
                  /* TEXT */
                )]),
                _: 2
                /* DYNAMIC */
              },
              1032,
              ["class", "onClick"]
            )), [[i]])),
            128
            /* KEYED_FRAGMENT */
          ))]),
          default: ve(() => [D(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [D(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (h(), P(
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
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = ki((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (h(), P(
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
var Ju = x({
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
  props: qy,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), o = E(!1), i = E(z(e.current) || 1), l = E(z(e.size) || 10), s = E([]), u = Y(() => Math.ceil(e.maxPagerCount / 2)), d = Y(() => Math.ceil(z(e.total) / z(l.value))), v = Y(() => {
      var C = l.value * (i.value - 1) + 1, V = Math.min(l.value * i.value, z(e.total));
      return [C, V];
    }), f = Y(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (C, V) => xe(C) ? !1 : V === 1 ? t.value : o.value, g = (C, V) => xe(C) ? "basic" : V === 1 ? "head" : "tail", w = (C, V) => {
      C === i.value || e.disabled || (xe(C) ? i.value = C : C === "prev" ? i.value > 1 && (i.value -= 1) : C === "next" ? i.value < d.value && (i.value += 1) : C === "..." && (V === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, y = () => {
      e.disabled || (n.value = !0);
    }, T = (C) => {
      l.value = C, n.value = !1;
    }, O = (C) => {
      var V = /^[1-9][0-9]*$/;
      return V.test(C);
    }, b = (C, V, k) => {
      if (k.target.blur(), O(V)) {
        var A = z(V);
        A > d.value && (A = d.value, a.value = "" + A), A !== i.value && (i.value = A);
      }
      C === "quick" && (r.value = ""), C === "simple" && !O(V) && (a.value = "" + i.value);
    };
    return le([() => e.current, () => e.size], (C) => {
      var [V, k] = C;
      i.value = z(V) || 1, l.value = z(k || 10);
    }), le([i, l, d], (C, V) => {
      var [k, A, M] = C, [I, B] = V, p = [], {
        maxPagerCount: S,
        total: L,
        onChange: Q
      } = e, H = Math.ceil(z(L) / z(B)), R = M - (S - u.value) - 1;
      if (a.value = "" + k, M - 2 > S) {
        if (I === void 0 || M !== H)
          for (var J = 2; J < S + 2; J++)
            p.push(J);
        if (k <= S && k < R) {
          p = [];
          for (var G = 1; G < S + 1; G++)
            p.push(G + 1);
          t.value = !0, o.value = !1;
        }
        if (k > S && k < R) {
          p = [];
          for (var K = 1; K < S + 1; K++)
            p.push(k + K - u.value);
          t.value = k === 2 && S === 1, o.value = !1;
        }
        if (k >= R) {
          p = [];
          for (var N = 1; N < S + 1; N++)
            p.push(M - (S - N) - 1);
          t.value = !1, o.value = !0;
        }
        p = [1, "...", ...p, "...", M];
      } else
        for (var X = 1; X <= M; X++)
          p.push(X);
      s.value = p, I !== void 0 && M > 0 && $(Q, k, A), $(e["onUpdate:current"], k), $(e["onUpdate:size"], A);
    }, {
      immediate: !0
    }), {
      n: Ky,
      classes: Xy,
      pack: We,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: g,
      isHideEllipsis: c,
      clickItem: w,
      showMenu: y,
      clickSize: T,
      setPage: b,
      toNumber: z
    };
  }
});
Ju.render = Jy;
const Gr = Ju;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var ZC = Gr, Qy = {
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
  onClick: U()
}, {
  n: _y,
  classes: xy
} = ee("paper");
function eb(e, n) {
  var r = Fe("ripple");
  return Se((h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("$-elevation--" + e.elevation), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
      style: j({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: !e.ripple
  }]]);
}
var Qu = x({
  name: "VarPaper",
  directives: {
    Ripple: Ae
  },
  props: Qy,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: _y,
      classes: xy,
      toSizeUnit: he,
      handleClick: n
    };
  }
});
Qu.render = eb;
const qr = Qu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var JC = qr;
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
var nb = Ho({
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
  onChange: U(),
  onConfirm: U(),
  onCancel: U()
}, Xe(rt, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: rb,
  classes: ab
} = ee("picker"), Sl = 300, tb = 15, kl = 0, ob = ["onTouchstart", "onTouchmove", "onTouchend"], ib = ["onTransitionend"];
function lb(e, n) {
  var r = ie("var-button");
  return h(), me(
    Ha(e.dynamic ? e.n("$-popup") : e.Transition),
    Ve(e.dynamic ? {
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("toolbar"))
          },
          [F(e.$slots, "cancel", {}, () => [re(
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
          )]), F(e.$slots, "title", {}, () => [D(
            "div",
            {
              class: m(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), F(e.$slots, "confirm", {}, () => [re(
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
        )) : _("v-if", !0), D(
          "div",
          {
            class: m(e.n("columns")),
            style: j({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), P(
            Oe,
            null,
            Be(e.scrollColumns, (a) => (h(), P(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Vn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [D(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: j({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), P(
                  Oe,
                  null,
                  Be(a.column.texts, (t) => (h(), P(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: j({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [D(
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
                ib
              )],
              42,
              ob
            ))),
            128
            /* KEYED_FRAGMENT */
          )), D(
            "div",
            {
              class: m(e.n("picked")),
              style: j({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), D(
            "div",
            {
              class: m(e.n("mask")),
              style: j({
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
var _u = x({
  name: "VarPicker",
  components: {
    VarButton: en,
    VarPopup: mn
  },
  inheritAttrs: !1,
  props: nb,
  setup(e) {
    var n = E([]), r = Y(() => Ne(e.optionHeight)), a = Y(() => Ne(e.optionCount)), t = Y(() => a.value * r.value / 2 - r.value / 2), o = Y(() => a.value * r.value), i = [], l = (p, S) => {
      S.scrollEl = p;
    }, s = (p) => {
      $(e["onUpdate:show"], p);
    }, u = (p) => {
      var S = r.value + t.value, L = t.value - p.column.texts.length * r.value;
      p.translate >= S && (p.translate = S), p.translate <= L && (p.translate = L);
    }, d = (p, S) => {
      var {
        length: L
      } = p.column.texts;
      return S = S >= L ? L - 1 : S, S = S <= 0 ? 0 : S, S;
    }, v = (p) => {
      var S = Math.round((t.value - p.translate) / r.value);
      return d(p, S);
    }, f = () => {
      var p = n.value.map((L) => L.column.texts[L.index]), S = n.value.map((L) => L.index);
      return {
        texts: p,
        indexes: S
      };
    }, c = function(p, S, L, Q) {
      Q === void 0 && (Q = !1);
      var H = t.value - d(p, S) * r.value;
      H === p.translate && (p.scrolling = !1, !Q && A(p)), p.translate = H, p.duration = L;
    }, g = (p, S, L) => {
      p.translate += Math.abs(S / L) / 3e-3 * (S < 0 ? -1 : 1);
    }, w = (p, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = Jt(S.scrollEl);
    }, y = (p, S) => {
      if (S.touching) {
        var {
          clientY: L
        } = p.touches[0], Q = S.prevY !== void 0 ? L - S.prevY : 0;
        S.prevY = L, S.translate += Q, u(S);
        var H = performance.now();
        H - S.momentumTime > Sl && (S.momentumTime = H, S.momentumPrevY = S.translate);
      }
    }, T = (p, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var L = S.translate - S.momentumPrevY, Q = performance.now() - S.momentumTime, H = Math.abs(L) >= tb && Q <= Sl;
      H && g(S, L, Q), S.index = v(S), c(S, S.index, H ? 1e3 : 200);
    }, O = (p) => {
      p.scrolling = !1, A(p);
    }, b = (p) => p.map((S, L) => {
      var Q, H = we(S) ? {
        texts: S
      } : S, R = {
        id: kl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = H.initialIndex) != null ? Q : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: H,
        scrollEl: null,
        scrolling: !1
      };
      return c(R, R.index, 0, !0), R;
    }), C = (p) => {
      var S = [];
      return V(S, p, 0, !0), S;
    }, V = function(p, S, L, Q) {
      if (Q === void 0 && (Q = !1), we(S) && S.length) {
        var H, R = Q && (H = e.cascadeInitialIndexes[p.length]) != null ? H : 0, J = {
          id: kl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: R,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((G) => G[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        p.push(J), c(J, J.index, 0, !0), V(p, J.columns[J.index].children, L + 1, Q);
      }
    }, k = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), V(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, A = (p) => {
      var {
        cascade: S,
        onChange: L
      } = e;
      S && k(p);
      var Q = n.value.some((G) => G.scrolling);
      if (!Q) {
        var {
          texts: H,
          indexes: R
        } = f(), J = R.every((G, K) => G === i[K]);
        J || (i = [...R], $(L, H, R));
      }
    }, M = () => {
      if (e.cascade) {
        var p = n.value.find((S) => S.scrolling);
        p && (p.translate = Jt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, k(p));
      } else
        n.value.forEach((S) => {
          S.translate = Jt(S.scrollEl), S.index = v(S), c(S, S.index, 0);
        });
    }, I = () => {
      M();
      var {
        texts: p,
        indexes: S
      } = f();
      i = [...S], $(e.onConfirm, p, S);
    }, B = () => {
      M();
      var {
        texts: p,
        indexes: S
      } = f();
      i = [...S], $(e.onCancel, p, S);
    };
    return le(() => e.columns, (p) => {
      n.value = e.cascade ? C($i(p)) : b($i(p));
      var {
        indexes: S
      } = f();
      i = [...S];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: rb,
      classes: ab,
      pack: We,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: w,
      handleTouchmove: y,
      handleTouchend: T,
      handleTransitionend: O,
      confirm: I,
      cancel: B,
      dt: Dt
    };
  }
});
_u.render = lb;
const fr = _u;
var rn;
function Ca(e) {
  return new Promise((n) => {
    Ca.close();
    var r = we(e) ? {
      columns: e
    } : e, a = Ee(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = Wa(fr, a, {
      onConfirm: (o, i) => {
        $(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, i) => {
        $(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
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
Ca.Component = fr;
Ca.install = function(e) {
  e.component(fr.name, fr);
};
Ca.close = () => {
  if (rn != null) {
    var e = rn;
    rn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
var QC = fr;
function sb(e) {
  return ["linear", "circle"].includes(e);
}
var ub = {
  mode: {
    type: String,
    default: "linear",
    validator: sb
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
  n: db,
  classes: vb
} = ee("progress"), fb = ["viewBox"], cb = ["cx", "cy", "r", "stroke-width"], mb = ["cx", "cy", "r", "stroke-width"];
function pb(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [D(
        "div",
        {
          class: m(e.n("linear-block")),
          style: j({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: j({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : _("v-if", !0), D(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: j({
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
      ), e.label ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [be(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (h(), P(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: j({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), P(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: j({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), P(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: j({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          cb
        )) : _("v-if", !0), D(
          "circle",
          {
            class: m(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: j({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          mb
        )],
        14,
        fb
      )), e.label ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [F(e.$slots, "default", {}, () => [be(
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
var xu = x({
  name: "VarProgress",
  props: ub,
  setup(e) {
    var n = Y(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = Y(() => {
      var {
        size: a,
        lineWidth: t,
        value: o
      } = e, i = "0 0 " + Ne(a) + " " + Ne(a), l = z(o) > 100 ? 100 : Math.round(z(o)), s = (Ne(a) - Ne(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: i,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: db,
      classes: vb,
      toSizeUnit: he,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
xu.render = pb;
const Kr = xu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var _C = Kr, hb = {
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
  onRefresh: U(),
  "onUpdate:modelValue": U()
};
function $l(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function gb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        $l(o, a, t, i, l, "next", s);
      }
      function l(s) {
        $l(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Tl,
  classes: yb
} = ee("pull-refresh"), Pl = 150;
function bb(e, n) {
  var r = ie("var-icon");
  return h(), P(
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
    [D(
      "div",
      {
        ref: "controlNode",
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: j(e.controlStyle)
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
    ), F(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
var ed = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: hb,
  setup(e) {
    var n, r, a = E(0), t = E(null), o = E(null), i = E(0), l = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = 0, f = 0, c = E(!0), g = Y(() => u.value !== "loading" && u.value !== "success" && !e.disabled), w = Y(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: T.value ? e.successBgColor : e.bgColor,
      color: T.value ? e.successColor : e.color
    })), y = Y(() => Math.abs(2 * a.value)), T = Y(() => u.value === "success"), O = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, Pl);
    }), b = (I) => {
      var B = "classList" in n ? n : document.body;
      B.classList[I](Tl() + "--lock");
    }, C = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, V = (I) => {
      if (g.value) {
        var B = At(n);
        if (!(B > 0)) {
          var p = B === 0, S = I.touches[0];
          f = S.clientY - v, p && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = I.touches[0].clientY), p && l.value > a.value && b("add");
          var L = (I.touches[0].clientY - i.value) / 2 + a.value;
          l.value = L >= y.value ? y.value : L, l.value >= y.value * 0.2 ? (c.value = !1, s.value = "refresh", r = O()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var I = gb(function* () {
        g.value && (d.value = !0, l.value >= y.value * 0.2 ? (yield r, u.value = "loading", l.value = y.value * 0.3, $(e["onUpdate:modelValue"], !0), $(e.onRefresh), b("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, b("remove");
        }, z(e.animationDuration))));
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), A = () => {
      var {
        width: I
      } = o.value.getBoundingClientRect();
      l.value = -(I + I * 0.25), a.value = -(I + I * 0.25);
    }, M = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return le(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, M();
      }, z(e.successDuration)));
    }), ze(() => {
      var I;
      n = e.target ? Wl(e.target, "PullRefresh") : $a(t.value), A(), (I = t.value) == null || I.addEventListener("touchmove", V, {
        passive: !1
      });
    }), Mt(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", V);
    }), {
      n: Tl,
      classes: yb,
      iconHasChanged: c,
      ICON_TRANSITION: Pl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: C,
      touchMove: V,
      touchEnd: k,
      iconName: s,
      controlStyle: w,
      isSuccess: T
    };
  }
});
ed.render = bb;
const Xr = ed;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var xC = Xr, wb = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, nd = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), rd = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Cb() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(nd), {
    length: r
  } = gn(rd);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Sb() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(nd), {
    index: r
  } = yn(rd);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: kb,
  classes: $b
} = ee("radio");
function Tb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Se((h(), P(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: j({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? F(e.$slots, "checked-icon", {
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
        )]) : F(e.$slots, "unchecked-icon", {
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
      }]]), D(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [F(e.$slots, "default")],
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
var ad = x({
  name: "VarRadio",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: wb,
  setup(e) {
    var n = E(!1), r = Y(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = Sb(), {
      form: i,
      bindForm: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (C) => {
      Me(() => {
        var {
          validateTrigger: V,
          rules: k,
          modelValue: A
        } = e;
        u(V, C, k, A);
      });
    }, c = (C) => {
      var {
        checkedValue: V,
        onChange: k
      } = e;
      t && n.value === V || (n.value = C, $(e["onUpdate:modelValue"], n.value), $(k, n.value), t == null || t.onToggle(V), f("onChange"));
    }, g = (C) => {
      var {
        disabled: V,
        readonly: k,
        uncheckedValue: A,
        checkedValue: M,
        onClick: I
      } = e;
      i != null && i.disabled.value || V || ($(I, C), !(i != null && i.readonly.value || k) && (a.value = !0, c(r.value ? A : M)));
    }, w = (C) => {
      var {
        checkedValue: V,
        uncheckedValue: k
      } = e;
      n.value = C === V ? V : k;
    }, y = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), O = (C) => {
      var {
        uncheckedValue: V,
        checkedValue: k
      } = e, A = ![V, k].includes(C);
      A && (C = r.value ? V : k), c(C);
    };
    le(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var b = {
      sync: w,
      validate: T,
      resetValidation: v,
      reset: y
    };
    return $(o, b), $(l, b), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: kb,
      classes: $b,
      handleClick: g,
      toggle: O,
      reset: y,
      validate: T,
      resetValidation: v
    };
  }
});
ad.render = Tb;
const Zr = ad;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var eS = Zr;
function Pb(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ob = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Pb
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Vb,
  classes: Eb
} = ee("radio-group");
function Mb(e, n) {
  var r = ie("var-form-details");
  return h(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [F(e.$slots, "default")],
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
var td = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: Ob,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Cb(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = Y(() => o.value), d = (y) => {
      Me(() => {
        var {
          validateTrigger: T,
          rules: O,
          modelValue: b
        } = e;
        i(T, y, O, b);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: T
      } = y;
      return T(e.modelValue);
    }), f = (y) => {
      $(e["onUpdate:modelValue"], y), $(e.onChange, y), d("onChange");
    }, c = () => l(e.rules, e.modelValue), g = () => {
      $(e["onUpdate:modelValue"], void 0), s();
    };
    le(() => e.modelValue, v), le(() => n.value, v);
    var w = {
      onToggle: f,
      validate: c,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, w), a(w), {
      errorMessage: o,
      n: Vb,
      classes: Eb,
      reset: g,
      validate: c,
      resetValidation: s
    };
  }
});
td.render = Mb;
const Jr = td;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var nS = Jr, Ib = {
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
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: Ga
} = ee("rate"), Bb = ["onClick"];
function Nb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [(h(!0), P(
        Oe,
        null,
        Be(e.toNumber(e.count), (o) => Se((h(), P(
          "div",
          {
            key: o,
            style: j(e.getStyle(o)),
            class: m(e.getClass(o)),
            onClick: (i) => e.handleClick(o, i)
          },
          [re(
            r,
            {
              class: m(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(o).name,
              style: j({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          Bb
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
var od = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  props: Ib,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = (y) => {
      var {
        count: T,
        gap: O
      } = e;
      return {
        color: u(y).color,
        marginRight: y !== z(T) ? he(O) : 0
      };
    }, s = (y) => {
      var {
        name: T,
        color: O
      } = u(y);
      return {
        [Ga("content")]: !0,
        [Ga("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ga("--error")]: a.value,
        [Ga("--primary")]: T !== e.emptyIcon && !O
      };
    }, u = (y) => {
      var {
        modelValue: T,
        disabled: O,
        disabledColor: b,
        color: C,
        half: V,
        emptyColor: k,
        icon: A,
        halfIcon: M,
        emptyIcon: I
      } = e, B = C;
      return (O || n != null && n.disabled.value) && (B = b), y <= z(T) ? {
        color: B,
        name: A
      } : V && y <= z(T) + 0.5 ? {
        color: B,
        name: M
      } : {
        color: O || n != null && n.disabled.value ? b : k,
        name: I
      };
    }, d = (y, T) => {
      if (e.half) {
        var {
          offsetWidth: O
        } = T.target;
        T.offsetX <= Math.floor(O / 2) && (y -= 0.5);
      }
      $(e["onUpdate:modelValue"], y);
    }, v = () => o(e.rules, z(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (y, T) => {
      var {
        readonly: O,
        disabled: b,
        onChange: C
      } = e;
      O || b || n != null && n.disabled.value || n != null && n.readonly.value || (d(y, T), $(C, y), f());
    }, g = () => {
      $(e["onUpdate:modelValue"], 0), i();
    }, w = {
      reset: g,
      validate: v,
      resetValidation: i
    };
    return $(r, w), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: g,
      validate: v,
      resetValidation: i,
      toSizeUnit: he,
      toNumber: z,
      n: Ga
    };
  }
});
od.render = Nb;
const Qr = od;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var rS = Qr;
function Db(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Ab = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Db
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
}, zb = (e) => (Sa(""), e = e(), ka(), e), Lb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Rb = /* @__PURE__ */ zb(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), Ub = [Rb];
function Yb(e, n) {
  return h(), P("svg", Lb, Ub);
}
var id = x({});
id.render = Yb;
const Fb = id;
var Hb = (e) => (Sa(""), e = e(), ka(), e), Wb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, jb = /* @__PURE__ */ Hb(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), Gb = [jb];
function qb(e, n) {
  return h(), P("svg", Wb, Gb);
}
var ld = x({});
ld.render = qb;
const Kb = ld;
var Xb = (e) => (Sa(""), e = e(), ka(), e), Zb = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Jb = /* @__PURE__ */ Xb(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), Qb = [Jb];
function _b(e, n) {
  return h(), P("svg", Zb, Qb);
}
var sd = x({});
sd.render = _b;
const xb = sd;
var {
  n: e0,
  classes: n0
} = ee("result");
function r0(e, n) {
  return h(), P(
    Oe,
    null,
    [D(
      "span",
      {
        class: m(e.n("success-cover-left"))
      },
      null,
      2
      /* CLASS */
    ), D(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: j({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), D(
      "span",
      {
        class: m(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: j({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), D(
      "span",
      {
        ref: "circle",
        class: m(e.n("success-circle")),
        style: j({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), D(
      "span",
      {
        class: m(e.n("success-line-fix"))
      },
      null,
      2
      /* CLASS */
    ), D(
      "span",
      {
        class: m(e.n("success-cover-right")),
        style: j({
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
var ud = x({
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
      n: e0,
      classes: n0,
      toNumber: z
    };
  }
});
ud.render = r0;
const a0 = ud;
var t0 = (e) => (Sa(""), e = e(), ka(), e), o0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, i0 = /* @__PURE__ */ t0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), l0 = [i0];
function s0(e, n) {
  return h(), P("svg", o0, l0);
}
var dd = x({});
dd.render = s0;
const u0 = dd;
var d0 = (e) => (Sa(""), e = e(), ka(), e), v0 = {
  viewBox: "-4 -4 32 32"
}, f0 = /* @__PURE__ */ d0(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), c0 = [f0];
function m0(e, n) {
  return h(), P("svg", v0, c0);
}
var vd = x({});
vd.render = m0;
const p0 = vd;
var {
  n: h0,
  classes: g0
} = ee("result");
function y0(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [F(e.$slots, "image", {}, () => [e.type ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: j({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), me(
          Ha(e.type),
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
    )) : _("v-if", !0)]), F(e.$slots, "title", {}, () => [e.title ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), F(e.$slots, "description", {}, () => [e.description ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var fd = x({
  name: "VarResult",
  components: {
    Info: Fb,
    Success: a0,
    Warning: xb,
    Error: Kb,
    Question: u0,
    Empty: p0
  },
  props: Ab,
  setup(e) {
    var n = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? he(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: h0,
      classes: g0,
      toNumber: z,
      toPxNum: Ne,
      toSizeUnit: he,
      circleSize: n,
      borderSize: r
    };
  }
});
fd.render = y0;
const _r = fd;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var aS = _r;
function b0(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function w0(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var C0 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: b0
  },
  align: {
    type: String,
    default: "flex-start",
    validator: w0
  },
  onClick: U()
}, {
  n: S0,
  classes: k0
} = ee("row");
function $0(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: j({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var cd = x({
  name: "VarRow",
  props: C0,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Nc(), t = Y(() => {
      var s = Ne(e.gutter);
      return s / 2;
    }), o = () => {
      n.forEach((s) => {
        s.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, i = (s) => {
      $(e.onClick, s);
    }, l = {
      computePadding: o
    };
    return le(() => a.value, o), le(() => e.gutter, o), r(l), {
      n: S0,
      classes: k0,
      average: t,
      handleClick: i
    };
  }
});
cd.render = $0;
const xr = cd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var tS = xr;
function T0(e) {
  return ["left", "right", "center"].includes(e);
}
var P0 = {
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
    validator: T0
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: U(),
  onBlur: U(),
  onClick: U(),
  onClear: U(),
  onClose: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: no,
  classes: O0
} = ee("select"), V0 = {
  key: 1
};
function E0(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), o = ie("var-form-details");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: j({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), D(
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
            "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
            onClose: e.handleBlur
          },
          {
            menu: ve(() => [D(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [F(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [D(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: j({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [D(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? _("v-if", !0) : F(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (h(), P(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), P(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(h(!0), P(
                      Oe,
                      null,
                      Be(e.labels, (i) => (h(), me(
                        r,
                        {
                          class: m(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: i,
                          onClick: n[0] || (n[0] = Vn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(i)
                        },
                        {
                          default: ve(() => [be(
                            ne(i),
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
                  )) : (h(), P(
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
                )) : (h(), P(
                  "span",
                  V0,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), F(e.$slots, "arrow-icon", {
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
            ), D(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: j({
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
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [F(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
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
    ), e.line ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: j({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: j({
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
var md = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: ir,
    VarFormDetails: je
  },
  props: P0,
  setup(e) {
    var n = E(null), r = E(!1), a = Y(() => e.multiple), t = Y(() => e.focusColor), o = E(""), i = E([]), l = Y(() => Nn(e.modelValue)), s = E("0px"), u = E(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: g
    } = Ry(), {
      errorMessage: w,
      validateWithTrigger: y,
      validate: T,
      // expose
      resetValidation: O
    } = bn(), b = E(null), C = () => {
      var {
        multiple: W,
        modelValue: Z
      } = e;
      if (W) {
        var ae = Z;
        i.value = ae.map(A);
      }
      !W && !Nn(Z) && (o.value = A(Z)), !W && Nn(Z) && (o.value = "");
    }, V = (W) => {
      Me(() => {
        var {
          validateTrigger: Z,
          rules: ae,
          modelValue: oe
        } = e;
        y(Z, W, ae, oe);
      });
    }, k = (W) => {
      var {
        value: Z,
        label: ae
      } = W;
      return Z.value != null ? Z.value : ae.value;
    }, A = (W) => {
      var Z, ae, oe = c.find((ge) => {
        var {
          value: pe
        } = ge;
        return pe.value === W;
      });
      return oe || (oe = c.find((ge) => {
        var {
          label: pe
        } = ge;
        return pe.value === W;
      })), (Z = (ae = oe) == null ? void 0 : ae.label.value) != null ? Z : "";
    }, M = () => {
      var {
        hint: W,
        modelValue: Z
      } = e;
      if (!W && !Nn(Z))
        return no("--placeholder-hidden");
      if (W && (!Nn(Z) || r.value))
        return no("--placeholder-hint");
    }, I = () => n.value && window.getComputedStyle(n.value).width || "0px", B = () => {
      var {
        disabled: W,
        readonly: Z,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Z || (s.value = I(), u.value = Ne(e.offsetY), r.value = !0, $(ae), V("onFocus"));
    }, p = () => {
      var {
        disabled: W,
        readonly: Z,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Z || ($(ae), V("onBlur"));
    }, S = (W) => {
      var {
        disabled: Z,
        readonly: ae,
        multiple: oe,
        onChange: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe ? c.filter((He) => {
          var {
            selected: nn
          } = He;
          return nn.value;
        }).map(k) : k(W);
        $(e["onUpdate:modelValue"], pe), $(ge, pe), V("onChange"), !oe && (r.value = !1);
      }
    }, L = () => {
      var {
        disabled: W,
        readonly: Z,
        multiple: ae,
        clearable: oe,
        onClear: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || W || Z || !oe)) {
        var pe = ae ? [] : void 0;
        $(e["onUpdate:modelValue"], pe), $(ge, pe), V("onClear");
      }
    }, Q = (W) => {
      var {
        disabled: Z,
        onClick: ae
      } = e;
      v != null && v.disabled.value || Z || ($(ae, W), V("onClick"));
    }, H = (W) => {
      var {
        disabled: Z,
        readonly: ae,
        modelValue: oe,
        onClose: ge
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe, He = c.find((on) => {
          var {
            label: Le
          } = on;
          return Le.value === W;
        }), nn = pe.filter((on) => {
          var Le;
          return on !== ((Le = He.value.value) != null ? Le : He.label.value);
        });
        $(e["onUpdate:modelValue"], nn), $(ge, nn), V("onClose");
      }
    }, R = () => {
      var {
        multiple: W,
        modelValue: Z
      } = e;
      if (W) {
        var ae = Z;
        c.forEach((oe) => oe.sync(ae.includes(k(oe))));
      } else
        c.forEach((oe) => oe.sync(Z === k(oe)));
      C();
    }, J = () => {
      s.value = I(), u.value = Ne(e.offsetY), r.value = !0;
    }, G = () => {
      r.value = !1;
    }, K = () => T(e.rules, e.modelValue), N = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    le(() => e.multiple, () => {
      var {
        multiple: W,
        modelValue: Z
      } = e;
      if (W && !we(Z))
        throw Error("The modelValue must be an array when multiple is true");
    }), le(() => e.modelValue, R, {
      deep: !0
    }), le(() => f.value, R);
    var X = {
      wrapWidth: Y(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: S,
      reset: N,
      validate: K,
      resetValidation: O
    };
    return g(X), $(d, X), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: w,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: b,
      n: no,
      classes: O0,
      computePlaceholderState: M,
      handleFocus: B,
      handleBlur: p,
      handleClear: L,
      handleClick: Q,
      handleClose: H,
      reset: N,
      validate: K,
      resetValidation: O,
      focus: J,
      blur: G
    };
  }
});
md.render = E0;
const ea = md;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var oS = ea, M0 = {
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
  n: I0,
  classes: B0
} = ee("skeleton");
function N0(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [F(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), P(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: j({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [D(
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), P(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (h(), P(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: j({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [D(
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), P(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (h(), P(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: j({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [D(
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
          )) : _("v-if", !0), (h(!0), P(
            Oe,
            null,
            Be(e.toNumber(e.rows), (r, a) => (h(), P(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: j({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [D(
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
    )) : _("v-if", !0), e.loading && e.fullscreen ? (h(), P(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: j({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [D(
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
var pd = x({
  name: "VarSkeleton",
  props: M0,
  setup() {
    return {
      n: I0,
      classes: B0,
      toSizeUnit: he,
      toNumber: z
    };
  }
});
pd.render = N0;
const na = pd;
na.install = function(e) {
  e.component(na.name, na);
};
var iS = na;
function D0(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var A0 = {
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
    validator: D0
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
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  n: Ol,
  classes: z0
} = ee("slider"), L0 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function R0(e, n) {
  var r = ie("var-form-details");
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [D(
        "div",
        {
          class: m(e.n("track"))
        },
        [D(
          "div",
          {
            class: m(e.n("track-background")),
            style: j({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
          /* CLASS, STYLE */
        ), D(
          "div",
          {
            class: m(e.n("track-fill")),
            style: j(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (h(!0), P(
        Oe,
        null,
        Be(e.thumbList, (a) => (h(), P(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: j({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Vn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Vn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [F(e.$slots, "button", {
            currentValue: a.text
          }, () => [D(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: j({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), D(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: j({
                background: e.thumbColor
              })
            },
            null,
            6
            /* CLASS, STYLE */
          ), D(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: j({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [D(
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
          L0
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
var hd = x({
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: A0,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = () => o(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), v = E(0), f = E(!1), c = Ee({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), g = Y(() => z(e.max) - z(e.min)), w = Y(() => v.value / g.value * z(e.step)), y = Y(() => {
      var {
        modelValue: G,
        range: K
      } = e, N = [];
      return K && we(G) ? N = [{
        value: V(G[0]),
        enumValue: Ie.First,
        text: k(G[0])
      }, {
        value: V(G[1]),
        enumValue: Ie.Second,
        text: k(G[1])
      }] : xe(G) && (N = [{
        value: V(G),
        enumValue: Ie.First,
        text: k(G)
      }]), N;
    }), T = Y(() => {
      var {
        activeColor: G,
        range: K,
        modelValue: N
      } = e, X = K && we(N) ? V(Math.min(N[0], N[1])) : 0, W = K && we(N) ? V(Math.max(N[0], N[1])) - X : V(N);
      return {
        width: W + "%",
        left: X + "%",
        background: G
      };
    }), O = Y(() => e.disabled || (r == null ? void 0 : r.disabled.value)), b = Y(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (G) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[G].active, V = (G) => {
      var {
        min: K,
        max: N
      } = e;
      return G < z(K) ? 0 : G > z(N) ? 100 : (G - z(K)) / g.value * 100;
    }, k = (G) => {
      if (!xe(G))
        return 0;
      var K = G;
      K < Number(e.min) && (K = Number(e.min)), K > Number(e.max) && (K = Number(e.max));
      var N = parseInt("" + K, 10) === K;
      return N ? K : z(K.toPrecision(5));
    }, A = (G, K) => {
      var N = [], {
        step: X,
        range: W,
        modelValue: Z,
        onChange: ae,
        min: oe
      } = e, ge = z(X), pe = Math.round(G / w.value), He = pe * ge + z(oe), nn = c[K].percentValue * ge + z(oe);
      if (c[K].percentValue = pe, W && we(Z) && (N = K === Ie.First ? [He, Z[1]] : [Z[0], He]), nn !== He) {
        var on = W ? N.map((Le) => k(Le)) : k(He);
        $(ae, on), $(e["onUpdate:modelValue"], on), u();
      }
    }, M = (G) => {
      if (!e.range)
        return Ie.First;
      var K = c[Ie.First].percentValue * w.value, N = c[Ie.Second].percentValue * w.value, X = Math.abs(G - K), W = Math.abs(G - N);
      return X <= W ? Ie.First : Ie.Second;
    }, I = (G, K) => {
      v.value || (v.value = d.value.offsetWidth), !(O.value || b.value) && ($(e.onStart), f.value = !0, c[K].startPosition = G.touches[0].clientX);
    }, B = (G, K) => {
      if (!(O.value || b.value || !f.value)) {
        var N = G.touches[0].clientX - c[K].startPosition + c[K].currentLeft;
        c[K].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), A(N, K);
      }
    }, p = (G) => {
      var {
        range: K,
        modelValue: N,
        onEnd: X,
        step: W,
        min: Z
      } = e;
      if (!(O.value || b.value)) {
        var ae = [];
        c[G].currentLeft = c[G].percentValue * w.value, c[G].active = !1;
        var oe = c[G].percentValue * z(W) + z(Z);
        K && we(N) && (ae = G === Ie.First ? [oe, N[1]] : [N[0], oe]), $(X, K ? ae : oe), f.value = !1;
      }
    }, S = (G) => {
      if (!(O.value || b.value) && !G.target.closest("." + Ol("thumb"))) {
        var K = G.clientX - lv(G.currentTarget), N = M(K);
        A(K, N), p(N);
      }
    }, L = () => {
      var G = z(e.step);
      return isNaN(G) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : G < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: G,
        modelValue: K
      } = e;
      return G && !we(K) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !G && we(K) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : G && we(K) && K.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, H = function(G, K) {
      G === void 0 && (G = e.modelValue), K === void 0 && (K = z(e.step));
      var N = (X) => {
        var {
          min: W,
          max: Z
        } = e;
        return X < z(W) ? 0 : X > z(Z) ? g.value / K : (X - z(W)) / K;
      };
      e.range && we(G) ? (c[Ie.First].percentValue = N(G[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * w.value, c[Ie.Second].percentValue = N(G[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * w.value) : xe(G) && (c[Ie.First].currentLeft = N(G) * w.value);
    }, R = () => {
      var G = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], G), i();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: i
    };
    return $(n, J), le([() => e.modelValue, () => e.step], (G) => {
      var [K, N] = G;
      !L() || !Q() || f.value || H(K, z(N));
    }), le(v, () => H()), ze(() => {
      !L() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: Ol,
      classes: z0,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: O,
      errorMessage: a,
      thumbsProps: c,
      thumbList: y,
      multiplySizeUnit: Qe,
      toNumber: z,
      showLabel: C,
      start: I,
      move: B,
      end: p,
      click: S
    };
  }
});
hd.render = R0;
const ra = hd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var lS = ra;
function Wo() {
  return Wo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wo.apply(this, arguments);
}
function U0(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Y0(e) {
  return yi.includes(e);
}
var gd = {
  type: {
    type: String,
    validator: Y0
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: U0
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
  loadingType: Xe(xn, "type"),
  loadingSize: Xe(xn, "size"),
  loadingRadius: Xe(xn, "radius"),
  loadingColor: Wo({}, Xe(xn, "color"), {
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
  onOpen: U(),
  // 打开动画结束时的回调
  onOpened: U(),
  // 关闭时的回调函数
  onClose: U(),
  // 关闭动画结束时的回调
  onClosed: U(),
  "onUpdate:show": U(),
  _update: {
    type: String
  }
}, {
  n: F0,
  classes: H0
} = ee("snackbar"), W0 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function j0(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return Se((h(), P(
    "div",
    {
      class: m(e.n()),
      style: j({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: j({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [F(e.$slots, "default", {}, () => [be(
          ne(e.content),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (h(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (h(), me(
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
        )) : _("v-if", !0), F(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Fa, e.show]]);
}
var yd = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: gd,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = at(() => e.show, 1);
    Lt(() => e.show, () => e.lockScroll);
    var a = Y(() => e.type === "loading" || e.forbidClick), t = Y(() => e.type ? W0[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return le(() => e.show, (i) => {
      i ? ($(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), $(e.onClose));
    }), le(() => e._update, () => {
      clearTimeout(n.value), o();
    }), ze(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: yi,
      n: F0,
      classes: H0,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
yd.render = j0;
const bd = yd;
var {
  n: G0
} = ee("snackbar");
function q0(e, n) {
  var r = ie("var-snackbar-core");
  return h(), me(
    Ya,
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
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [F(e.$slots, "action")]),
            default: ve(() => [F(e.$slots, "default", {}, () => [be(
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
var wd = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: bd
  },
  props: gd,
  setup() {
    var {
      disabled: e
    } = ni();
    return {
      n: G0,
      disabled: e
    };
  }
});
wd.render = q0;
const aa = wd;
function et() {
  return et = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, et.apply(this, arguments);
}
function K0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !It(e);
}
var yi = ["loading", "success", "warning", "info", "error"], Vl = 0, jo = !1, Cd, Ra = !1, Sd = {
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
}, hn = Ee([]), bi = Sd, X0 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Z0 = {
  setup() {
    return () => {
      var e = hn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ra && (a.position = "top");
        var i = Ra ? "relative" : "absolute", l = et({
          position: i
        }, n1(a.position));
        return re(bd, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(xd, Ve(X0, {
        style: {
          zIndex: sn.zIndex
        },
        onAfterEnter: J0,
        onAfterLeave: Q0
      }), K0(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Wn = function(e) {
  var n = x0(e), r = Ee(et({}, bi, n));
  r.show = !0, jo || (jo = !0, Cd = Wa(Z0).unmountInstance);
  var {
    length: a
  } = hn, t = {
    id: Vl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ra)
    _0(t);
  else {
    var o = "update-" + Vl;
    e1(r, o);
  }
  return {
    clear() {
      !Ra && hn.length ? hn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
yi.forEach((e) => {
  Wn[e] = (n) => (Qo(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Wn(n));
});
Wn.install = function(e) {
  e.component(aa.name, aa);
};
Wn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ra && (hn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ra = e);
};
Wn.clear = function() {
  hn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Wn.setDefaultOptions = function(e) {
  bi = e;
};
Wn.resetDefaultOptions = function() {
  bi = Sd;
};
Wn.Component = aa;
function J0(e) {
  var n = e.getAttribute("data-id"), r = hn.find((a) => a.id === z(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function Q0(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = hn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = hn.every((t) => t.animationEnd);
  a && ($(Cd), hn = Ee([]), jo = !1);
}
function _0(e) {
  hn.push(e);
}
function x0(e) {
  return e === void 0 && (e = {}), qe(e) ? {
    content: e
  } : e;
}
function e1(e, n) {
  var [r] = hn;
  r.reactiveSnackOptions = et({}, r.reactiveSnackOptions, e), r._update = n;
}
function n1(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
aa.install = function(e) {
  e.component(aa.name, aa);
};
var sS = aa;
const Go = Wn;
var kd = (e) => ["mini", "small", "normal", "large"].includes(e), r1 = (e) => kd(e) || we(e) || xe(e) || qe(e), a1 = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), t1 = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: r1
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
    default: "start",
    validator: a1
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function ln(e) {
  return "calc(" + e + " / 2)";
}
function o1(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? o !== i ? l = ln(e) + " " + n + " " + ln(e) + " 0" : l = ln(e) + " 0" : t === "space-around" ? l = ln(e) + " " + ln(n) : t === "space-between" && (o === 0 ? l = ln(e) + " " + ln(n) + " " + ln(e) + " 0" : o === i ? l = ln(e) + " 0 " + ln(e) + " " + ln(n) : l = ln(e) + " " + ln(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: ro,
  classes: i1
} = ee("space");
const ta = x({
  name: "VarSpace",
  props: t1,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (o, i) => i ? ["var(--space-size-" + o + "-y)", "var(--space-size-" + o + "-x)"] : we(o) ? o.map(he) : [he(o), he(o)], t = (o) => o === "start" || o === "end" ? "flex-" + o : o;
    return () => {
      var o, {
        inline: i,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (o = $(r.default)) != null ? o : [], c = kd(v), [g, w] = a(v, c), y = (b) => {
        var C = [];
        return b.forEach((V) => {
          if (V.type !== ev) {
            if (V.type === Oe && we(V.children)) {
              V.children.forEach((k) => {
                C.push(k);
              });
              return;
            }
            C.push(V);
          }
        }), C;
      };
      f = y(f);
      var T = f.length - 1, O = f.map((b, C) => {
        var V = o1(g, w, {
          direction: d,
          justify: l,
          index: C,
          lastIndex: T
        });
        return re("div", {
          style: {
            margin: V
          }
        }, [b]);
      });
      return re("div", {
        class: i1(ro(), ro("$--box"), [i, ro("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + g + " / 2) 0" : void 0
        }
      }, [O]);
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var uS = ta, l1 = {
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
}, $d = Symbol("STEPS_BIND_STEP_KEY"), Td = Symbol("STEPS_COUNT_STEP_KEY");
function s1() {
  var {
    bindChildren: e,
    childProviders: n
  } = un($d), {
    length: r
  } = gn(Td);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function u1() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn($d), {
    index: r
  } = yn(Td);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: d1,
  classes: v1
} = ee("step"), f1 = {
  key: 3
};
function c1(e, n) {
  var r = ie("var-icon");
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [D(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: j({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (h(), me(
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
          )) : e.isCurrent && e.currentIcon ? (h(), me(
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
          )) : e.inactiveIcon ? (h(), me(
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
          )) : (h(), P(
            "span",
            f1,
            ne(e.index + 1),
            1
            /* TEXT */
          ))],
          6
          /* CLASS, STYLE */
        ), D(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [F(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? _("v-if", !0) : (h(), P(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
          style: j({
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
var Pd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: l1,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = u1(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = Y(() => i.value === a.value), c = Y(() => a.value !== -1 && i.value > a.value), g = {
      index: a
    }, w = () => v(a.value), y = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return o(g), le(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var O = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + O + "px";
      }
    }), {
      n: d1,
      classes: v1,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: w,
      getRef: y
    };
  }
});
Pd.render = c1;
const oa = Pd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var dS = oa;
function m1(e) {
  return ["horizontal", "vertical"].includes(e);
}
var p1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: m1
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: h1
} = ee("steps");
function g1(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n()),
      style: j({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Od = x({
  name: "VarSteps",
  props: p1,
  setup(e) {
    var n = Y(() => e.active), r = Y(() => e.activeColor), a = Y(() => e.inactiveColor), t = Y(() => e.direction), {
      length: o,
      bindStep: i
    } = s1(), l = (u) => {
      $(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: h1
    };
  }
});
Od.render = g1;
const ia = Od;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var vS = ia, y1 = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: b1
} = ee("style-provider"), w1 = x({
  name: "VarStyleProvider",
  props: y1,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Rl(e.tag, {
      class: b1(),
      style: Kl(e.styleVars)
    }, $(r.default));
  }
});
const la = w1;
var ao = [];
function nt(e) {
  ao.forEach((r) => document.documentElement.style.removeProperty(r)), ao.length = 0;
  var n = Kl(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), ao.push(a);
  });
}
nt.Component = la;
la.install = function(e) {
  e.component(la.name, la);
};
nt.install = function(e) {
  e.component(la.name, la);
};
var fS = la, C1 = {
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
  onClick: U(),
  onChange: U(),
  "onUpdate:modelValue": U()
}, {
  n: S1,
  classes: k1
} = ee("switch");
function $1(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = Fe("ripple");
  return h(), P(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: j(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: j(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), Se((h(), P(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: j(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: j(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (h(), me(
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
var Vd = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: je
  },
  directives: {
    Ripple: Ae
  },
  props: C1,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = () => o(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = Y(() => {
      var {
        size: g,
        modelValue: w,
        color: y,
        closeColor: T,
        loadingColor: O,
        activeValue: b
      } = e;
      return {
        handle: {
          width: Qe(g),
          height: Qe(g),
          backgroundColor: w === b ? y : T,
          color: O
        },
        ripple: {
          left: w === b ? Qe(g, 0.5) : "-" + Qe(g, 0.5),
          color: w === b ? y : T || "#999",
          width: Qe(g, 2),
          height: Qe(g, 2)
        },
        track: {
          height: Qe(g, 0.72),
          width: Qe(g, 1.9),
          borderRadius: Qe(g, 2 / 3),
          filter: w === b || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: w === b ? y : T
        },
        switch: {
          height: Qe(g, 1.2),
          width: Qe(g, 2)
        }
      };
    }), d = Y(() => {
      var {
        size: g = "5.333vw"
      } = e;
      return Qe(g, 0.4);
    }), v = (g) => {
      var {
        onClick: w,
        onChange: y,
        disabled: T,
        loading: O,
        readonly: b,
        modelValue: C,
        activeValue: V,
        inactiveValue: k,
        "onUpdate:modelValue": A
      } = e;
      if ($(w, g), !(T || O || b || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var M = C === V ? k : V;
        $(y, M), $(A, M), s();
      }
    }, f = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: i
    };
    return $(n, c), {
      n: S1,
      classes: k1,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
Vd.render = $1;
const sa = Vd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var cS = sa, T1 = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, Ed = Symbol("TABS_BIND_TAB_KEY"), Md = Symbol("TABS_COUNT_TAB_KEY");
function P1() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Ed), {
    length: r
  } = gn(Md);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function O1() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ed), {
    index: r
  } = yn(Md);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: ft,
  classes: V1
} = ee("tab");
function E1(e, n) {
  var r = Fe("ripple");
  return Se((h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: j({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [F(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
var Id = x({
  name: "VarTab",
  directives: {
    Ripple: Ae
  },
  props: T1,
  setup(e) {
    var n = E(null), r = Y(() => e.name), a = Y(() => e.disabled), t = Y(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = O1(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: g
    } = i, w = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(w);
    var y = () => {
      var {
        disabled: b,
        name: C
      } = e;
      return b ? f.value : u.value === C || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: b,
        name: C
      } = e;
      return b ? ft("$-tab--disabled") : u.value === C || u.value === (o == null ? void 0 : o.value) ? ft("$-tab--active") : ft("$-tab--inactive");
    }, O = (b) => {
      var {
        disabled: C,
        name: V,
        onClick: k
      } = e;
      C || ($(k, V ?? o.value, b), s(w));
    };
    return le(() => e.name, g), le(() => e.disabled, g), {
      n: ft,
      classes: V1,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: y,
      computeColorClass: T,
      handleClick: O
    };
  }
});
Id.render = E1;
const ua = Id;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var mS = ua, Bd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Nd = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function M1() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Bd), {
    length: r
  } = gn(Nd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function I1() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Bd), {
    index: r
  } = yn(Nd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var B1 = {
  name: {
    type: [String, Number]
  }
}, {
  n: N1,
  classes: D1
} = ee("tab-item");
function A1(e, n) {
  var r = ie("var-swipe-item");
  return h(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? F(e.$slots, "default", {
        key: 0
      }) : _("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var Dd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Un
  },
  props: B1,
  setup(e) {
    var n = E(!1), r = E(!1), a = Y(() => e.name), {
      index: t,
      bindTabsItems: o
    } = I1(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: N1,
      classes: D1,
      current: n,
      initSlot: r
    };
  }
});
Dd.render = A1;
const da = Dd;
da.install = function(e) {
  e.component(da.name, da);
};
var pS = da, z1 = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: L1,
  classes: R1
} = ee("table");
function U1(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("main"))
      },
      [D(
        "table",
        {
          class: m(e.n("table")),
          style: j({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [F(e.$slots, "default")],
        6
        /* CLASS, STYLE */
      )],
      2
      /* CLASS */
    ), e.$slots.footer ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [F(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ad = x({
  name: "VarTable",
  props: z1,
  setup() {
    return {
      toSizeUnit: he,
      n: L1,
      classes: R1
    };
  }
});
Ad.render = U1;
const va = Ad;
va.install = function(e) {
  e.component(va.name, va);
};
var hS = va;
function El(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Y1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: El
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: El
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
  stickyCssMode: Xe(gt, "cssMode"),
  stickyZIndex: Xe(gt, "zIndex"),
  offsetTop: Xe(gt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function Ml(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Il(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ml(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ml(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: F1,
  classes: H1
} = ee("tabs");
function W1(e, n) {
  return h(), me(
    Ha(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [D(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [F(e.$slots, "default"), D(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: j({
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
var zd = x({
  name: "VarTabs",
  components: {
    VarSticky: Yn
  },
  inheritAttrs: !1,
  props: Y1,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), o = E(!1), i = E(null), l = Y(() => e.active), s = Y(() => e.activeColor), u = Y(() => e.inactiveColor), d = Y(() => e.disabledColor), v = Y(() => e.itemDirection), f = E(null), {
      tabList: c,
      bindTabList: g,
      length: w
    } = P1(), y = (B) => {
      var p, S = (p = B.name.value) != null ? p : B.index.value, {
        active: L,
        onChange: Q,
        onClick: H
      } = e;
      $(e["onUpdate:active"], S), $(H, S), S !== L && $(Q, S);
    }, T = () => c.find((B) => {
      var {
        name: p
      } = B;
      return e.active === p.value;
    }), O = (B) => c.find((p) => {
      var {
        index: S
      } = p;
      return (B ?? e.active) === S.value;
    }), b = () => {
      if (w.value !== 0) {
        var {
          active: B
        } = e;
        if (xe(B)) {
          var p = B > w.value - 1 ? w.value - 1 : 0;
          return $(e["onUpdate:active"], p), O(p);
        }
      }
    }, C = () => {
      o.value = c.length >= 5;
    }, V = (B) => {
      var {
        element: p
      } = B, S = p.value;
      S && (e.layoutDirection === "horizontal" ? (n.value = S.offsetWidth + "px", a.value = S.offsetLeft + "px") : (r.value = S.offsetHeight + "px", t.value = S.offsetTop + "px"));
    }, k = (B) => {
      var {
        element: p
      } = B;
      if (o.value) {
        var S = i.value, L = p.value;
        if (e.layoutDirection === "horizontal") {
          var Q = L.offsetLeft + L.offsetWidth / 2 - S.offsetWidth / 2;
          Ja(S, {
            left: Q,
            animation: oo
          });
        } else {
          var H = L.offsetTop + L.offsetHeight / 2 - S.offsetHeight / 2;
          Ja(S, {
            top: H,
            animation: oo
          });
        }
      }
    }, A = () => {
      var B = T() || O() || b();
      !B || B.disabled.value || (C(), V(B), k(B));
    }, M = /* @__PURE__ */ function() {
      var B = Il(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return B.apply(this, arguments);
      };
    }(), I = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: A,
      onTabClick: y
    };
    return g(I), le(() => w.value, /* @__PURE__ */ Il(function* () {
      yield En(), A();
    })), le(() => e.active, A), ze(() => window.addEventListener("resize", A)), pr(() => window.removeEventListener("resize", A)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: he,
      n: F1,
      classes: H1,
      resize: A,
      resizeSticky: M
    };
  }
});
zd.render = W1;
const fa = zd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var gS = fa, j1 = {
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
  "onUpdate:active": U()
};
function Bl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function G1(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Bl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Bl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: q1
} = ee("tabs-items");
function K1(e, n) {
  var r = ie("var-swipe");
  return h(), me(
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
      default: ve(() => [F(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var Ld = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: Rn
  },
  props: j1,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = M1(), o = (f) => r.find((c) => {
      var {
        name: g
      } = c;
      return f === g.value;
    }), i = (f) => r.find((c) => {
      var {
        index: g
      } = c;
      return f === g.value;
    }), l = (f) => o(f) || i(f), s = (f) => {
      var c, g = l(f);
      g && (r.forEach((w) => {
        var {
          setCurrent: y
        } = w;
        return y(!1);
      }), g.setCurrent(!0), (c = n.value) == null || c.to(g.index.value));
    }, u = (f) => {
      var c, g = r.find((y) => {
        var {
          index: T
        } = y;
        return T.value === f;
      }), w = (c = g.name.value) != null ? c : g.index.value;
      $(e["onUpdate:active"], w);
    }, d = () => n.value, v = {};
    return a(v), le(() => e.active, s), le(() => t.value, /* @__PURE__ */ G1(function* () {
      yield En(), s(e.active);
    })), {
      swipe: n,
      n: q1,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Ld.render = K1;
const ca = Ld;
ca.install = function(e) {
  e.component(ca.name, ca);
};
var yS = ca;
const X1 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Z1 = {
  "--badge-default-color": "#555"
}, J1 = {
  "--button-default-color": "#303030"
}, Q1 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, _1 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, x1 = {
  "--checkbox-unchecked-color": "#fff"
}, ew = {
  "--chip-default-color": "#555"
}, nw = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, rw = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, aw = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, tw = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, ow = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, iw = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, lw = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, sw = {
  "--popup-content-background-color": "#1e1e1e"
}, uw = {
  "--pull-refresh-background": "#303030"
}, dw = {
  "--radio-unchecked-color": "#fff"
}, vw = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, fw = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, cw = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, mw = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, pw = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, hw = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, gw = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, yw = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, bw = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, ww = {
  "--tabs-background": "#1e1e1e"
}, Cw = {
  "--app-bar-color": "#272727"
}, Sw = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, kw = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, $w = {
  "--menu-background-color": "#272727"
}, Tw = {
  "--breadcrumb-inactive-color": "#aaa"
}, Pw = {
  "--avatar-background-color": "#303030",
  "--avatar-border": "2px solid #1e1e1e"
};
function qo() {
  return qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qo.apply(this, arguments);
}
const Ow = qo({
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
}, J1, _1, Q1, yw, rw, cw, ww, hw, sw, aw, X1, ew, Z1, bw, nw, uw, pw, mw, iw, gw, ow, fw, dw, x1, tw, lw, Cw, Sw, kw, $w, vw, Tw, Pw);
var Vw = {
  dark: Ow
}, bS = null;
const Ko = Vw;
var cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Nl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function Ew(e) {
  return ["ampm", "24hr"].includes(e);
}
var Mw = {
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
    validator: Ew
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
  "onUpdate:modelValue": U(),
  onChange: U()
}, Rd = (e, n) => e === "24hr" || n === "am", wi = (e, n, r) => {
  var a = cn.findIndex((o) => z(o) === z(r)), t = Rd(e, n) ? r : _e[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, an = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
  };
}, Ud = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: v
  } = wi(t, o, i), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: g,
      minute: w
    } = an(l);
    f = g === v && a > w;
  }
  if (!l && s) {
    var {
      hour: y,
      minute: T
    } = an(s);
    f = y === v && a < T;
  }
  if (l && s) {
    var {
      hour: O,
      minute: b
    } = an(l), {
      hour: C,
      minute: V
    } = an(s);
    f = C === v && a < V || O === v && a > b;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Yd = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: o,
    hour: i,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: v,
    hourNum: f
  } = wi(t, o, i), c = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: w,
      minute: y,
      second: T
    } = an(s);
    c = w === f && y < l || y === l && a > T;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: b,
      second: C
    } = an(u);
    c = O === f && b > l || b === l && a > C;
  }
  if (s && u) {
    var {
      hour: V,
      minute: k,
      second: A
    } = an(s), {
      hour: M,
      minute: I,
      second: B
    } = an(u);
    c = V === f && k < l || M === f && I > l || V === f && k === l && a > A || M === f && I === l && a < B;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || g;
}, {
  n: Iw,
  classes: Bw
} = ee("time-picker");
function Nw(e, n) {
  return h(), P(
    "div",
    {
      class: m(e.n("clock"))
    },
    [D(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: j(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (h(!0), P(
      Oe,
      null,
      Be(e.timeScales, (r, a) => (h(), P(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: j(e.getStyle(a, r, !1))
        },
        ne(r),
        7
        /* TEXT, CLASS, STYLE */
      ))),
      128
      /* KEYED_FRAGMENT */
    )), e.format === "24hr" && e.type === "hour" ? (h(), P(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), P(
        Oe,
        null,
        Be(e.hours24, (r, a) => (h(), P(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: j(e.getStyle(a, r, !0))
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
var Fd = x({
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
    } = n, a = E(null), t = E([]), o = E([]), i = Y(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = Y(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = Y(() => e.type === "hour" ? cn : Nl), u = (y, T) => {
      var O;
      y = (O = y) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var b = e.type === "minute" ? Ud : Yd, C = {
        time: z(y),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(C, "minute"), b(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var y = e.isInner ? _e[l.value] : s.value[l.value];
      return s.value === Nl ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, T) => T ? l.value === y && e.isInner : l.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Rd(e.format, e.ampm))
          return t.value.includes(y);
        var T = cn.findIndex((O) => O === y);
        return o.value.includes(T);
      }
      return u(y, !0);
    }, c = (y, T, O) => {
      var b = 2 * Math.PI / 12 * y - Math.PI / 2, C = 50 * (1 + Math.cos(b)), V = 50 * (1 + Math.sin(b)), k = () => v(y, O) ? f(T) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: A,
        color: M
      } = k();
      return {
        left: C + "%",
        top: V + "%",
        backgroundColor: A,
        color: M
      };
    }, g = () => {
      var {
        width: y,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: T
      };
    }, w = () => {
      if (l.value !== void 0) {
        var y = e.ampm === "am" ? cn : _e;
        return ha(y[l.value], 2, "0");
      }
    };
    return le([l, () => e.isInner], (y, T) => {
      var [O, b] = y, [C, V] = T, k = O === C && b === V;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var A = b ? _e[l.value] : w(), M = e.useSeconds ? ":" + e.time.second : "", I = A + ":" + e.time.minute + M;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), le(() => e.rad, (y, T) => {
      if (!(e.type === "hour" || y === void 0 || T === void 0)) {
        var O = y / 6 >= 0 ? y / 6 : y / 6 + 60, b = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (O !== b) {
          var C, {
            hourStr: V
          } = wi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = te().minute(O).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            C = V + ":" + k + A;
          }
          if (e.type === "second") {
            var M = te().second(O).format("ss"), I = e.useSeconds ? ":" + M : "";
            C = V + ":" + e.time.minute + I;
          }
          r("update", C);
        }
      }
    }), le([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [T, O, b] = y;
      if (t.value = [], T && !O) {
        var {
          hour: C
        } = an(T), V = cn.filter((J) => z(J) > C), k = _e.filter((J) => z(J) > C);
        t.value = [...V, ...k];
      }
      if (!T && O) {
        var {
          hour: A
        } = an(O), M = cn.filter((J) => z(J) < A), I = _e.filter((J) => z(J) < A);
        t.value = [...M, ...I];
      }
      if (T && O) {
        var {
          hour: B
        } = an(T), {
          hour: p
        } = an(O), S = cn.filter((J) => z(J) < p || z(J) > B), L = _e.filter((J) => z(J) < p || z(J) > B);
        t.value = [...S, ...L];
      }
      if (b != null && b.hours) {
        var {
          hours: Q
        } = b, H = cn.filter((J) => !Q(z(J))), R = _e.filter((J) => !Q(z(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...H, ...R])];
      }
      o.value = t.value.map((J) => _e.findIndex((G) => J === G)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: Iw,
      classes: Bw,
      hours24: _e,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: g,
      getStyle: c,
      activeItemIndex: l
    };
  }
});
Fd.render = Nw;
const Dw = Fd;
var {
  n: Aw,
  classes: zw
} = ee("time-picker"), Lw = (e) => (Sa(""), e = e(), ka(), e), Rw = /* @__PURE__ */ Lw(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), Uw = {
  key: 0
};
function Yw(e, n) {
  var r = ie("clock");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: j({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
          /* TEXT, CLASS */
        ), Rw, D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), P("span", Uw, ":")) : _("v-if", !0), e.useSeconds ? (h(), P(
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
      ), e.format === "ampm" ? (h(), P(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
          /* CLASS */
        ), D(
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
    ), D(
      "div",
      {
        class: m(e.n("body"))
      },
      [D(
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
            default: ve(() => [(h(), me(
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
var Hd = x({
  name: "VarTimePicker",
  components: {
    Clock: Dw
  },
  props: Mw,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), o = E(!1), i = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), v = E(0), f = E("hour"), c = E("am"), g = E(!1), w = E(!1), y = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ee({
      x: 0,
      y: 0
    }), O = Ee({
      x: [],
      y: []
    }), b = Y(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (N) => {
      $(e["onUpdate:modelValue"], N), $(e.onChange, N);
    }, V = (N) => N * 57.29577951308232, k = (N) => {
      l.value = !1, w.value = !1, f.value = N;
    }, A = (N) => {
      var {
        disableHour: X
      } = a.value, W = cn.findIndex((oe) => z(oe) === z(y.value.hour)), Z = N === "am" ? cn : _e, ae = [...Z.slice(W), ...Z.slice(0, W)];
      return ae.find((oe, ge) => (o.value = ge !== 0, !X.includes(oe)));
    }, M = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = A(N);
        if (X) {
          var W = e.useSeconds ? ":" + y.value.second : "", Z = ha(X, 2, "0") + ":" + y.value.minute + W;
          C(Z);
        }
      }
    }, I = (N, X) => {
      var W = N >= O.x[0] && N <= O.x[1], Z = X >= O.y[0] && X <= O.y[1];
      return W && Z;
    }, B = (N) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: Z,
        second: ae
      } = an(N);
      return {
        hour: te().hour(W).format(X),
        minute: te().minute(Z).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, p = (N) => {
      var X = N / 30;
      return X >= 0 ? X : X + 12;
    }, S = () => {
      var {
        width: N,
        height: X
      } = a.value.getSize(), W = T.x - N / 2 - 8, Z = T.x + N / 2 + 8, ae = T.y - X / 2 - 8, oe = T.y + X / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: Z,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, L = (N, X, W) => {
      var {
        disableHour: Z
      } = a.value;
      i.value = I(N, X);
      var ae = Math.round(W / 30) * 30 + 90, oe = p(ae), ge = t.value ? cn[oe] : _e[oe];
      if (Z.includes(ge) || (t.value = e.format === "24hr" ? I(N, X) : !1), t.value === i.value) {
        var pe = t.value || c.value === "pm" ? _e[oe] : cn[oe];
        g.value = Z.includes(pe), !g.value && (u.value = ae, l.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(N / 6) * 6 + 90, Z = W / 6 >= 0 ? W / 6 : W / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      w.value = Ud(ae), !w.value && (d.value = W, s.value = !0);
    }, H = (N) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(N / 6) * 6 + 90, Z = W / 6 >= 0 ? W / 6 : W / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        minute: z(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      Yd(ae) || (v.value = W);
    }, R = () => {
      var {
        left: N,
        top: X,
        width: W,
        height: Z
      } = n.value.getBoundingClientRect();
      if (T.x = N + W / 2, T.y = X + Z / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: ge,
          rangeYMax: pe
        } = S();
        O.x = [ae, oe], O.y = [ge, pe];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: W
        } = N.touches[0], Z = X - T.x, ae = W - T.y, oe = Math.round(V(Math.atan2(ae, Z)));
        f.value === "hour" ? L(X, W, oe) : f.value === "minute" ? Q(oe) : H(oe);
      }
    }, G = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, K = () => {
      o.value = !1;
    };
    return le(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: X,
          minute: W,
          second: Z
        } = an(N), ae = te().hour(X).format("hh"), oe = te().hour(X).format("HH"), ge = te().minute(W).format("mm"), pe = te().second(Z).format("ss");
        u.value = (ae === "12" ? 0 : z(ae)) * 30, d.value = z(ge) * 6, v.value = z(pe) * 6, y.value = B(N), e.format !== "24hr" && (c.value = ha("" + X, 2, "0") === oe && _e.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: Aw,
      classes: zw,
      getRad: b,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: J,
      checkPanel: k,
      checkAmpm: M,
      end: G,
      update: C,
      changePreventUpdate: K
    };
  }
});
Hd.render = Yw;
const ma = Hd;
ma.install = function(e) {
  e.component(ma.name, ma);
};
var wS = ma, Fw = {
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
  onBeforeRead: U(),
  onAfterRead: U(),
  onBeforeRemove: U(),
  onRemove: U(),
  onOversize: U(),
  "onUpdate:modelValue": U()
};
function Dl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Al(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Dl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Dl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Hw,
  classes: Ww
} = ee("uploader"), jw = 0, Gw = ["onClick"], qw = ["onClick"], Kw = ["src", "alt"], Xw = ["multiple", "accept", "capture", "disabled"], Zw = ["src"];
function Jw(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), o = Fe("ripple");
  return h(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(h(!0), P(
        Oe,
        null,
        Be(e.files, (i) => Se((h(), P(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [i.state === "loading", e.n("--loading")])),
            key: i.id,
            onClick: (l) => e.preview(i)
          },
          [D(
            "div",
            {
              class: m(e.n("file-name"))
            },
            ne(i.name || i.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), P(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Vn((l) => e.handleRemove(i), ["stop"])
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
            qw
          )) : _("v-if", !0), i.cover ? (h(), P(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: j({
                objectFit: i.fit
              }),
              src: i.cover,
              alt: i.name
            },
            null,
            14,
            Kw
          )) : _("v-if", !0), D(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [i.state === "success", e.n("--success")], [i.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          Gw
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Se((h(), P(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.chooseFile && e.chooseFile(...arguments);
          })
        },
        [D(
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
          Xw
        ), F(e.$slots, "default", {}, () => [re(
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
        "onUpdate:show": n[2] || (n[2] = (i) => e.showPreview = i),
        onClosed: n[3] || (n[3] = (i) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var i, l;
          return [e.currentPreview && e.isHTMLSupportVideo((i = e.currentPreview) == null ? void 0 : i.url) ? (h(), P(
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
              src: (l = e.currentPreview) == null ? void 0 : l.url
            },
            null,
            10,
            Zw
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
var Wd = x({
  name: "VarUploader",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarPopup: mn,
    VarFormDetails: je
  },
  props: Fw,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = Y(() => {
      var {
        maxlength: H,
        modelValue: {
          length: R
        }
      } = e;
      return xe(H) ? R + " / " + H : "";
    }), {
      form: o,
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = Y(() => {
      var {
        modelValue: H,
        hideList: R
      } = e;
      return R ? [] : H;
    }), f = (H) => {
      var {
        disabled: R,
        readonly: J,
        previewed: G
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || R || J || !G)) {
        var {
          url: K
        } = H;
        if (qe(K) && Pi(K)) {
          Hn(K);
          return;
        }
        qe(K) && Oi(K) && (a.value = H, r.value = !0);
      }
    }, c = (H) => ({
      id: jw++,
      url: "",
      cover: "",
      name: H.name,
      file: H
    }), g = (H) => {
      var R = H.target, {
        files: J
      } = R;
      return Array.from(J);
    }, w = (H) => new Promise((R) => {
      var J = new FileReader();
      J.onload = () => {
        var G = J.result;
        H.file.type.startsWith("image") && (H.cover = G), H.url = G, R(H);
      }, J.readAsDataURL(H.file);
    }), y = (H) => H.map(w), T = (H) => {
      var {
        onBeforeRead: R
      } = e;
      return H.map((J) => new Promise((G) => {
        R || G({
          valid: !0,
          varFile: J
        });
        var K = $(R, Ee(J));
        K = we(K) ? K : [K], Promise.all(K).then((N) => {
          G({
            valid: !N.some((X) => !X),
            varFile: J
          });
        });
      }));
    }, O = /* @__PURE__ */ function() {
      var H = Al(function* (R) {
        var {
          maxsize: J,
          maxlength: G,
          modelValue: K,
          onOversize: N,
          onAfterRead: X,
          readonly: W,
          disabled: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || Z || W)) {
          var ae = (Le) => Le.filter((vn) => vn.file.size > z(J) ? ($(N, Ee(vn)), !1) : !0), oe = (Le) => {
            var vn = Math.min(Le.length, z(G) - K.length);
            return Le.slice(0, vn);
          }, ge = g(R), pe = ge.map(c);
          pe = J != null ? ae(pe) : pe, pe = G != null ? oe(pe) : pe;
          var He = yield Promise.all(y(pe)), nn = yield Promise.all(T(He)), on = nn.filter((Le) => {
            var {
              valid: vn
            } = Le;
            return vn;
          }).map((Le) => {
            var {
              varFile: vn
            } = Le;
            return vn;
          });
          $(e["onUpdate:modelValue"], [...K, ...on]), R.target.value = "", on.forEach((Le) => $(X, Ee(Le)));
        }
      });
      return function(J) {
        return H.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var H = Al(function* (R) {
        var {
          disabled: J,
          readonly: G,
          modelValue: K,
          onBeforeRemove: N,
          onRemove: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || G)) {
          if (N) {
            var W = $(N, Ee(R));
            if (W = we(W) ? W : [W], (yield Promise.all(W)).some((ae) => !ae))
              return;
          }
          var Z = K.filter((ae) => ae !== R);
          $(X, Ee(R)), B("onRemove"), $(e["onUpdate:modelValue"], Z);
        }
      });
      return function(J) {
        return H.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((H) => H.state === "success"), V = () => e.modelValue.filter((H) => H.state === "error"), k = () => e.modelValue.filter((H) => H.state === "loading"), A = () => {
      n.value.click();
    }, M = () => {
      a.value = null, r.value = !1, Hn.close();
    }, I = {
      getSuccess: C,
      getError: V,
      getLoading: k
    }, B = (H) => {
      Me(() => {
        var {
          validateTrigger: R,
          rules: J,
          modelValue: G
        } = e;
        s(R, H, J, G, I);
      });
    }, p = !1, S = () => u(e.rules, e.modelValue, I), L = () => {
      p = !0, $(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: S,
      resetValidation: d,
      reset: L
    };
    return $(i, Q), le(() => e.modelValue, () => {
      !p && B("onChange"), p = !1;
    }, {
      deep: !0
    }), {
      n: Hw,
      classes: Ww,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: Oi,
      isHTMLSupportImage: Pi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: O,
      handleRemove: b,
      getSuccess: C,
      getError: V,
      getLoading: k,
      validate: S,
      resetValidation: d,
      reset: L,
      chooseFile: A,
      closePreview: M
    };
  }
});
Wd.render = Jw;
const pa = Wd;
pa.install = function(e) {
  e.component(pa.name, pa);
};
var CS = pa;
const Qw = "2.7.5";
function _w(e) {
  ga.install && e.use(ga), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), ar.install && e.use(ar), kr.install && e.use(kr), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), en.install && e.use(en), Or.install && e.use(Or), tr.install && e.use(tr), or.install && e.use(or), Vr.install && e.use(Vr), ir.install && e.use(ir), Er.install && e.use(Er), Mr.install && e.use(Mr), Ir.install && e.use(Ir), sn.install && e.use(sn), Br.install && e.use(Br), Nr.install && e.use(Nr), Ar.install && e.use(Ar), ya.install && e.use(ya), zr.install && e.use(zr), Lr.install && e.use(Lr), Ln.install && e.use(Ln), je.install && e.use(je), $e.install && e.use($e), Rr.install && e.use(Rr), Hn.install && e.use(Hn), Ur.install && e.use(Ur), Yr.install && e.use(Yr), vr.install && e.use(vr), Vt.install && e.use(Vt), Fr.install && e.use(Fr), Hr.install && e.use(Hr), $n.install && e.use($n), Fo.install && e.use(Fo), fo.install && e.use(fo), Fn.install && e.use(Fn), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), qr.install && e.use(qr), Ca.install && e.use(Ca), mn.install && e.use(mn), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), Ae.install && e.use(Ae), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), Go.install && e.use(Go), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), Yn.install && e.use(Yn), nt.install && e.use(nt), Rn.install && e.use(Rn), Un.install && e.use(Un), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), Ko.install && e.use(Ko), ma.install && e.use(ma), ur.install && e.use(ur), pa.install && e.use(pa);
}
const SS = {
  version: Qw,
  install: _w,
  ActionSheet: ga,
  AppBar: br,
  Avatar: wr,
  AvatarGroup: Cr,
  BackTop: Sr,
  Badge: ar,
  BottomNavigation: kr,
  BottomNavigationItem: $r,
  Breadcrumb: Tr,
  Breadcrumbs: Pr,
  Button: en,
  Card: Or,
  Cell: tr,
  Checkbox: or,
  CheckboxGroup: Vr,
  Chip: ir,
  Col: Er,
  Collapse: Mr,
  CollapseItem: Ir,
  Context: sn,
  Countdown: Br,
  Counter: Nr,
  DatePicker: Ar,
  Dialog: ya,
  Divider: zr,
  Ellipsis: Lr,
  Form: Ln,
  FormDetails: je,
  Icon: $e,
  Image: Rr,
  ImagePreview: Hn,
  IndexAnchor: Ur,
  IndexBar: Yr,
  Input: vr,
  Lazy: Vt,
  Link: Fr,
  List: Hr,
  Loading: $n,
  LoadingBar: Fo,
  Locale: fo,
  Menu: Fn,
  Option: Wr,
  Overlay: jr,
  Pagination: Gr,
  Paper: qr,
  Picker: Ca,
  Popup: mn,
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
  Snackbar: Go,
  Space: ta,
  Step: oa,
  Steps: ia,
  Sticky: Yn,
  StyleProvider: nt,
  Swipe: Rn,
  SwipeItem: Un,
  Switch: sa,
  Tab: ua,
  TabItem: da,
  Table: va,
  Tabs: fa,
  TabsItems: ca,
  Themes: Ko,
  TimePicker: ma,
  Tooltip: ur,
  Uploader: pa
};
export {
  ga as ActionSheet,
  br as AppBar,
  wr as Avatar,
  Cr as AvatarGroup,
  Sr as BackTop,
  ar as Badge,
  kr as BottomNavigation,
  $r as BottomNavigationItem,
  Tr as Breadcrumb,
  Pr as Breadcrumbs,
  en as Button,
  Or as Card,
  tr as Cell,
  or as Checkbox,
  Vr as CheckboxGroup,
  ir as Chip,
  Er as Col,
  Mr as Collapse,
  Ir as CollapseItem,
  sn as Context,
  Br as Countdown,
  Nr as Counter,
  Ar as DatePicker,
  ya as Dialog,
  zr as Divider,
  Lr as Ellipsis,
  Ln as Form,
  je as FormDetails,
  $e as Icon,
  Rr as Image,
  Hn as ImagePreview,
  Ur as IndexAnchor,
  Yr as IndexBar,
  vr as Input,
  Vt as Lazy,
  Fr as Link,
  Hr as List,
  $n as Loading,
  Fo as LoadingBar,
  fo as Locale,
  Fn as Menu,
  Wr as Option,
  jr as Overlay,
  Ao as PIXEL,
  Gr as Pagination,
  qr as Paper,
  Ca as Picker,
  mn as Popup,
  Kr as Progress,
  Xr as PullRefresh,
  Zr as Radio,
  Jr as RadioGroup,
  Qr as Rate,
  _r as Result,
  Ae as Ripple,
  xr as Row,
  yi as SNACKBAR_TYPE,
  ea as Select,
  na as Skeleton,
  ra as Slider,
  Go as Snackbar,
  ta as Space,
  oa as Step,
  ia as Steps,
  Yn as Sticky,
  nt as StyleProvider,
  Rn as Swipe,
  Un as SwipeItem,
  sa as Switch,
  ua as Tab,
  da as TabItem,
  va as Table,
  fa as Tabs,
  ca as TabsItems,
  Ko as Themes,
  ma as TimePicker,
  ur as Tooltip,
  pa as Uploader,
  oC as _ActionSheetComponent,
  iC as _AppBarComponent,
  lC as _AvatarComponent,
  sC as _AvatarGroupComponent,
  vC as _BackTopComponent,
  fC as _BadgeComponent,
  cC as _BottomNavigationComponent,
  mC as _BottomNavigationItemComponent,
  pC as _BreadcrumbComponent,
  hC as _BreadcrumbsComponent,
  dC as _ButtonComponent,
  gC as _CardComponent,
  yC as _CellComponent,
  wC as _CheckboxComponent,
  CC as _CheckboxGroupComponent,
  SC as _ChipComponent,
  kC as _ColComponent,
  $C as _CollapseComponent,
  TC as _CollapseItemComponent,
  eC as _ContextComponent,
  PC as _CountdownComponent,
  OC as _CounterComponent,
  VC as _DatePickerComponent,
  EC as _DialogComponent,
  MC as _DividerComponent,
  BC as _EllipsisComponent,
  NC as _FormComponent,
  bC as _FormDetailsComponent,
  aC as _IconComponent,
  AC as _ImageComponent,
  RC as _ImagePreviewComponent,
  YC as _IndexAnchorComponent,
  FC as _IndexBarComponent,
  HC as _InputComponent,
  DC as _LazyComponent,
  WC as _LinkComponent,
  jC as _ListComponent,
  GC as _LoadingBarComponent,
  uC as _LoadingComponent,
  tC as _LocaleComponent,
  qC as _MenuComponent,
  KC as _OptionComponent,
  XC as _OverlayComponent,
  ZC as _PaginationComponent,
  JC as _PaperComponent,
  QC as _PickerComponent,
  rC as _PopupComponent,
  _C as _ProgressComponent,
  xC as _PullRefreshComponent,
  eS as _RadioComponent,
  nS as _RadioGroupComponent,
  rS as _RateComponent,
  aS as _ResultComponent,
  nC as _RippleComponent,
  tS as _RowComponent,
  oS as _SelectComponent,
  iS as _SkeletonComponent,
  lS as _SliderComponent,
  sS as _SnackbarComponent,
  uS as _SpaceComponent,
  dS as _StepComponent,
  vS as _StepsComponent,
  UC as _StickyComponent,
  fS as _StyleProviderComponent,
  zC as _SwipeComponent,
  LC as _SwipeItemComponent,
  cS as _SwitchComponent,
  mS as _TabComponent,
  pS as _TabItemComponent,
  hS as _TableComponent,
  gS as _TabsComponent,
  yS as _TabsItemsComponent,
  bS as _ThemesComponent,
  wS as _TimePickerComponent,
  IC as _TooltipComponent,
  CS as _UploaderComponent,
  Nv as actionSheetProps,
  ti as add,
  Wv as appBarProps,
  ef as avatarGroupProps,
  Xv as avatarProps,
  Cf as backTopProps,
  Of as badgeProps,
  Lf as bottomNavigationItemProps,
  If as bottomNavigationProps,
  Wf as breadcrumbProps,
  Zf as breadcrumbsProps,
  hf as buttonProps,
  xf as cardProps,
  oc as cellProps,
  Sc as checkboxGroupProps,
  mc as checkboxProps,
  Vc as chipProps,
  Bc as colProps,
  Hc as collapseItemProps,
  Rc as collapseProps,
  qc as countdownProps,
  Hm as counterProps,
  up as datePickerProps,
  SS as default,
  Ue as defaultLazyOptions,
  Pp as dialogProps,
  Dp as dividerProps,
  rs as enUS,
  uc as formDetailsProps,
  ag as formProps,
  es as iconProps,
  ku as imageCache,
  Ug as imagePreviewProps,
  Sg as imageProps,
  Zg as indexAnchorProps,
  xg as indexBarProps,
  oy as inputProps,
  _w as install,
  cy as linkProps,
  gy as listProps,
  Sy as loadingBarProps,
  xn as loadingProps,
  Dy as menuProps,
  ts as merge,
  Yy as optionProps,
  jy as overlayProps,
  We as pack,
  as as packs,
  qy as paginationProps,
  Qy as paperProps,
  nb as pickerProps,
  rt as popupProps,
  ub as progressProps,
  hb as pullRefreshProps,
  Ob as radioGroupProps,
  wb as radioProps,
  Ib as rateProps,
  Ab as resultProps,
  C0 as rowProps,
  P0 as selectProps,
  M0 as skeletonProps,
  A0 as sliderProps,
  gd as snackbarProps,
  t1 as spaceProps,
  l1 as stepProps,
  p1 as stepsProps,
  gt as stickyProps,
  y1 as styleProviderProps,
  Iu as swipeProps,
  C1 as switchProps,
  B1 as tabItemProps,
  T1 as tabProps,
  z1 as tableProps,
  j1 as tabsItemsProps,
  Y1 as tabsProps,
  Mw as timePickerProps,
  qh as tooltipProps,
  Fw as uploaderProps,
  oi as use,
  ai as useLocale,
  Qw as version,
  ri as zhCN
};
