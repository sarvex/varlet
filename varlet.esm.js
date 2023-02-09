import { reactive as Me, onMounted as Ue, onUnmounted as mr, ref as M, onActivated as Ho, onDeactivated as Wo, createApp as Ld, getCurrentInstance as Aa, provide as El, computed as F, inject as Il, nextTick as Ee, h as Bl, onBeforeUnmount as Pt, isVNode as Ot, watch as ie, onBeforeMount as Rd, defineComponent as x, createVNode as re, Teleport as za, Transition as De, withDirectives as ke, vShow as La, mergeProps as Ve, openBlock as g, createBlock as me, resolveDynamicComponent as Ra, normalizeClass as m, normalizeStyle as q, resolveComponent as le, resolveDirective as Ke, withCtx as ve, createElementVNode as D, renderSlot as W, toDisplayString as ne, createElementBlock as O, Fragment as Oe, renderList as Be, createCommentVNode as _, onUpdated as jo, createTextVNode as ge, pushScopeId as ya, popScopeId as ba, withModifiers as Vn, normalizeProps as Nl, guardReactiveProps as Ud, vModelText as Yd, toRefs as Fd, withKeys as gi, toRaw as yi, TransitionGroup as Hd, Comment as Wd } from "vue";
var Dl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, Cw = Me(Dl);
const sn = Me(Dl), Xe = (e) => typeof e == "string", xt = (e) => typeof e == "boolean", an = (e) => typeof e == "number", Go = (e) => Object.prototype.toString.call(e) === "[object Object]", jd = (e) => typeof e == "object" && e !== null, be = (e) => Array.isArray(e), Gd = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Xe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : xt(e) ? Number(e) : e, Vt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, qo = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, Ko = () => typeof window < "u", bi = (e) => [...new Set(e)], qd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Kd = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var wi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Ci = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Xd = (e) => {
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
      this.has(r) && Vt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, eo = (e) => e, Si = (e) => Math.pow(e, 3), Al = (e) => e < 0.5 ? Si(e * 2) / 2 : 1 - Si((1 - e) * 2) / 2, Mt = (e, n) => e ?? n, zl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, fa = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function ki(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zd(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ki(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ki(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Jd(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function $i(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Et(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Xo(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Qd(e) {
  return no.apply(this, arguments);
}
function no() {
  return no = Zd(function* (e) {
    yield Mn();
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
  }), no.apply(this, arguments);
}
function Gt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function wa(e) {
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
function _d(e) {
  for (var n = [], r = e; r !== window; )
    r = wa(r), n.push(r);
  return n;
}
function Ll(e, n) {
  if (Xe(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (jd(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Rl = (e) => Xe(e) && e.endsWith("rem"), xd = (e) => Xe(e) && e.endsWith("px") || an(e), ev = (e) => Xe(e) && e.endsWith("%"), Ul = (e) => Xe(e) && e.endsWith("vw"), Yl = (e) => Xe(e) && e.endsWith("vh"), nv = (e) => Xe(e) && e.startsWith("calc("), rv = (e) => Xe(e) && e.startsWith("var("), Ne = (e) => {
  if (an(e))
    return e;
  if (xd(e))
    return +e.replace("px", "");
  if (Ul(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Yl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Rl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Xe(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return ev(e) || Ul(e) || Yl(e) || Rl(e) || nv(e) || rv(e) ? e : Ne(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Pn(e) {
  var n = zl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function av(e) {
  var n = zl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function It(e) {
  Pn(() => {
    Pn(e);
  });
}
function Mn() {
  return new Promise((e) => {
    Pn(() => {
      Pn(e);
    });
  });
}
function tv() {
  return new Promise((e) => {
    Pn(e);
  });
}
function qa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = Et(e), s = Xo(e);
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
function Fl(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + qd(a);
    return n[o] = t, n;
  }, {});
}
function ov() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var iv = ["collect", "clear"];
function Ti(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Pi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ti(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ti(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function lv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function mt() {
  return mt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mt.apply(this, arguments);
}
function qe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function sv(e) {
  var n = Ld(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Ua(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => Bl(e, mt({}, n, r));
    }
  }, {
    unmount: t
  } = sv(a);
  return {
    unmountInstance: t
  };
}
function uv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Ot(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function gn(e) {
  var n = Me([]), r = Aa(), a = () => {
    var l = uv(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    Vt(n, l);
  };
  El(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var i = F(() => n.length);
  return {
    length: i
  };
}
function yn(e) {
  if (!Hl(e))
    return {
      index: null
    };
  var n = Il(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Aa();
  Ue(() => {
    Ee().then(() => r(o));
  }), mr(() => {
    Ee().then(() => a(o));
  });
  var i = F(() => t.indexOf(o));
  return {
    index: i
  };
}
function un(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Vt(n, o);
  }, t = (o) => {
    El(e, mt({
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
  if (!Hl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Il(e), {
    collect: r,
    clear: a
  } = n, t = lv(n, iv), o = (i) => {
    Ue(() => r(i)), Pt(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function Hl(e) {
  var n = Aa();
  return e in n.provides;
}
function bn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = Pi(function* (o, i, l) {
      if (!be(o) || !o.length)
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
    var t = Pi(function* (o, i, l, s, u) {
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
function dv(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), mr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Zo() {
  var e = M(!1);
  return Ho(() => {
    e.value = !1;
  }), Wo(() => {
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
      if (be(s)) {
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
function T(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (be(e))
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
function pt() {
  return pt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pt.apply(this, arguments);
}
var {
  n: Wl
} = ee("ripple"), Oi = 250;
function vv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function fv(e, n) {
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
function jl(e) {
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
      } = fv(this, e), s = document.createElement("div");
      s.classList.add(Wl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), vv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function ro() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Wl());
    if (r.length) {
      var a = r[r.length - 1], t = Oi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Oi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Gl() {
  var e = this._ripple;
  ov() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function cv(e, n) {
  var r, a, t;
  e._ripple = pt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: ro.bind(e)
  }), e.addEventListener("touchstart", jl, {
    passive: !0
  }), e.addEventListener("touchmove", Gl, {
    passive: !0
  }), e.addEventListener("dragstart", ro, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function mv(e) {
  e.removeEventListener("touchstart", jl), e.removeEventListener("touchmove", Gl), e.removeEventListener("dragstart", ro), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function pv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = pt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var ql = {
  mounted: cv,
  unmounted: mv,
  updated: pv,
  install(e) {
    e.directive("ripple", this);
  }
}, Sw = ql;
const We = ql;
function hv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var _a = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: hv
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
function Kl() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function nt(e) {
  sn.locks[e] = 1, Kl();
}
function rt(e) {
  delete sn.locks[e], Kl();
}
function Bt(e, n) {
  var {
    uid: r
  } = Aa();
  n && ie(n, (a) => {
    a === !1 ? rt(r) : a === !0 && e() === !0 && nt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? nt(r) : rt(r));
  }), Rd(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), mr(() => {
    n && n() === !1 || e() === !0 && rt(r);
  }), Ho(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), Wo(() => {
    n && n() === !1 || e() === !0 && rt(r);
  });
}
function xa(e, n) {
  var r = M(sn.zIndex);
  return ie(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function ao() {
  return ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ao.apply(this, arguments);
}
function gv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ot(e);
}
var {
  n: Bn,
  classes: qt
} = ee("popup");
const mn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: _a,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = xa(() => e.show, 3), {
      disabled: o
    } = Zo(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      T(v), d && T(e["onUpdate:show"], !1);
    };
    Bt(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      T(d ? e.onOpen : e.onClose);
    }), dv(() => T(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: qt(Bn("overlay"), d),
        style: ao({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => re("div", Ve({
      class: qt(Bn("content"), Bn("--" + e.position), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [T(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: h,
        position: y
      } = e;
      return re(De, {
        name: Bn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(re("div", {
          class: qt(Bn("$--box"), Bn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(De, {
          name: h || Bn("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[La, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(za, {
          to: d,
          disabled: o.value
        }, gv(v = u()) ? v : {
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
var kw = mn, Xl = {
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
function Vi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yv(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Vi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Vi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: bv,
  classes: wv
} = ee("icon");
function Cv(e, n) {
  return g(), me(
    Ra(e.isURL(e.name) ? "img" : "i"),
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
var Zl = x({
  name: "VarIcon",
  props: Xl,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = yv(function* (o, i) {
        var {
          transition: l
        } = e;
        if (i == null || z(l) === 0) {
          n.value = o;
          return;
        }
        r.value = !0, yield Ee(), setTimeout(() => {
          i != null && (n.value = o), r.value = !1;
        }, z(l));
      });
      return function(i, l) {
        return t.apply(this, arguments);
      };
    }();
    return ie(() => e.name, a, {
      immediate: !0
    }), {
      n: bv,
      classes: wv,
      nextName: n,
      shrinking: r,
      isURL: Gd,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
Zl.render = Cv;
const $e = Zl;
$e.install = function(e) {
  e.component($e.name, $e);
};
var $w = $e;
function to() {
  return to = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, to.apply(this, arguments);
}
var Sv = to({
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
}, qe(_a, [
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
const Jo = {
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
}, Jl = {
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
function oo() {
  return oo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, oo.apply(this, arguments);
}
function Qo() {
  var e = {}, n = M({}), r = (o, i) => {
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
    e[o] = oo({}, e[o], i), a(o);
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
  packs: Ql,
  pack: Fe,
  add: _o,
  use: xo,
  merge: _l
} = Qo();
_o("zh-CN", Jo);
xo("zh-CN");
var Tw = {
  zhCN: Jo,
  enUS: Jl,
  packs: Ql,
  pack: Fe,
  add: _o,
  use: xo,
  merge: _l,
  useLocale: Qo
};
const io = {
  zhCN: Jo,
  enUS: Jl,
  packs: Ql,
  pack: Fe,
  add: _o,
  use: xo,
  merge: _l,
  useLocale: Qo
};
var {
  n: kv,
  classes: $v
} = ee("action-sheet"), Tv = ["onClick"];
function Pv(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Ke("ripple");
  return g(), me(
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
        [W(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), W(e.$slots, "actions", {}, () => [(g(!0), O(
          Oe,
          null,
          Be(e.actions, (o) => ke((g(), O(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (g(), me(
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
            Tv
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
var xl = x({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Sv,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        T(i, t), o && T(e["onUpdate:show"], !1);
      }
    }, a = (t) => T(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: kv,
      classes: $v,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Fe,
      dt: Mt,
      handleSelect: r
    };
  }
});
xl.render = Pv;
const rr = xl;
function lo() {
  return lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, lo.apply(this, arguments);
}
var Jn, ei = {};
function Ov(e) {
  return e === void 0 && (e = {}), lo({}, ei, e);
}
function ca(e) {
  return Ko() ? new Promise((n) => {
    ca.close();
    var r = Me(Ov(e));
    r.teleport = "body", Jn = r;
    var {
      unmountInstance: a
    } = Ua(rr, r, {
      onSelect: (t) => {
        T(r.onSelect, t), n(t);
      },
      onClose: () => {
        T(r.onClose), n("close");
      },
      onClosed: () => {
        T(r.onClosed), a(), Jn === r && (Jn = null);
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
function Vv(e) {
  ei = e;
}
function Mv() {
  ei = {};
}
function Ev() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Ee().then(() => {
      e.show = !1;
    });
  }
}
ca.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
ca.install = function(e) {
  e.component(rr.name, rr);
};
Object.assign(ca, {
  setDefaultOptions: Vv,
  resetDefaultOptions: Mv,
  close: Ev
});
var Pw = rr;
function Iv(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Bv = {
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
    validator: Iv
  },
  elevation: {
    type: Boolean,
    default: !0
  },
  round: {
    type: Boolean,
    default: !1
  }
}, {
  n: Nv,
  classes: Dv
} = ee("app-bar");
function Av(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: q({
        background: e.color,
        color: e.textColor
      })
    },
    [D(
      "div",
      {
        class: m(e.n("left"))
      },
      [W(e.$slots, "left"), e.titlePosition === "left" ? (g(), O(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: q({
            paddingLeft: e.paddingLeft
          })
        },
        [W(e.$slots, "default", {}, () => [ge(
          ne(e.title),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    ), e.titlePosition === "center" ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [W(e.$slots, "default", {}, () => [ge(
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
      [e.titlePosition === "right" ? (g(), O(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: q({
            paddingRight: e.paddingRight
          })
        },
        [W(e.$slots, "default", {}, () => [ge(
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
    6
    /* CLASS, STYLE */
  );
}
var es = x({
  name: "VarAppBar",
  props: Bv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(o), jo(o), {
      n: Nv,
      classes: Dv,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
es.render = Av;
const yr = es;
yr.install = function(e) {
  e.component(yr.name, yr);
};
var Ow = yr;
function zv(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Lv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: zv
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: Lv
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
  n: Rv,
  classes: Uv
} = ee("loading"), Yv = (e) => (ya(""), e = e(), ba(), e), Fv = /* @__PURE__ */ Yv(() => /* @__PURE__ */ D(
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
)), Hv = [Fv];
function Wv(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (g(), O(
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
    )) : _("v-if", !0), e.isShow ? (g(), O(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (g(), O(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [D(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: q({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Hv,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (g(!0), O(
        Oe,
        null,
        Be(e.loadingTypeDict, (r, a) => (g(), O(
          Oe,
          {
            key: a
          },
          [e.type === a ? (g(), O(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(g(!0), O(
              Oe,
              null,
              Be(r, (t) => (g(), O(
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
      )), e.$slots.description || e.description ? (g(), O(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: q({
            color: e.color
          })
        },
        [W(e.$slots, "description", {}, () => [ge(
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
var ns = x({
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
    }, t = F(() => T(r.default) ? e.loading : !0);
    return {
      n: Rv,
      classes: Uv,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
ns.render = Wv;
const $n = ns;
$n.install = function(e) {
  e.component($n.name, $n);
};
var Vw = $n;
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
function jv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Gv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function qv(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Kv = {
  type: {
    type: String,
    default: "default",
    validator: jv
  },
  nativeType: {
    type: String,
    default: "button",
    validator: qv
  },
  size: {
    type: String,
    default: "normal",
    validator: Gv
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
  loadingType: qe(xn, "type"),
  loadingSize: qe(xn, "size"),
  loadingColor: so({}, qe(xn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: Xv,
  classes: Zv
} = ee("button"), Jv = ["type", "disabled"];
function Qv(e, n) {
  var r = le("var-loading"), a = Ke("ripple");
  return ke((g(), O(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: q({
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
    [e.loading || e.pending ? (g(), me(
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
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )],
    46,
    Jv
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var rs = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: We
  },
  props: Kv,
  setup(e) {
    var n = M(!1), r = (o) => {
      e.autoLoading && (n.value = !0, o = be(o) ? o : [o], Promise.all(o).then(() => {
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
      !s || i || l || n.value || r(T(s, o));
    }, t = (o) => {
      var {
        loading: i,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || i || l || n.value || r(T(s, o));
    };
    return {
      n: Xv,
      classes: Zv,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
rs.render = Qv;
const xe = rs;
xe.install = function(e) {
  e.component(xe.name, xe);
};
var Mw = xe, _v = {
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
  n: xv,
  classes: ef
} = ee("back-top");
function nf(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return g(), me(
    za,
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
var as = x({
  name: "VarBackTop",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: _v,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, o = (s) => {
      T(e.onClick, s);
      var u = Xo(t);
      qa(t, {
        left: u,
        duration: e.duration,
        animation: Al
      });
    }, i = () => {
      n.value = Et(t) >= Ne(e.visibilityHeight);
    }, l = qo(i, 200);
    return Ue(() => {
      t = e.target ? Ll(e.target, "BackTop") : wa(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Pt(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: xv,
      classes: ef,
      click: o
    };
  }
});
as.render = nf;
const br = as;
br.install = function(e) {
  e.component(br.name, br);
};
var Ew = br;
function rf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function af(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var tf = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: rf
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
    validator: af
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: jn,
  classes: of
} = ee("badge"), lf = {
  key: 1
};
function sf(e, n) {
  var r = le("var-icon");
  return g(), O(
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
        default: ve(() => [ke(D(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (g(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (g(), O(
            "span",
            lf,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[La, !e.hidden]])]),
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
var ts = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: tf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = F(() => {
      var {
        type: i,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && jn("position") + " " + jn("--" + l), v = s ? jn("dot") : null, f = o(), c = u ? jn("icon") : null;
      return [jn("--" + i), d, v, f, c];
    }), t = F(() => {
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
      if (l && i.includes("right"))
        return jn("dot--right");
      if (l && i.includes("left"))
        return jn("dot--left");
    };
    return {
      n: jn,
      classes: of,
      values: t,
      contentClass: a
    };
  }
});
ts.render = sf;
const ar = ts;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var Iw = ar, uf = {
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
}, os = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), is = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function df() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(os), {
    length: r
  } = gn(is);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
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
var {
  n: vf,
  classes: ff
} = ee("bottom-navigation"), {
  n: Nt
} = ee("bottom-navigation-item"), Mi = Nt("--right-half-space"), Ei = Nt("--left-half-space"), Ii = Nt("--right-space"), cf = {
  type: "primary"
};
function mf(e, n) {
  var r = le("var-button");
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (g(), me(
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
var ls = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: xe
  },
  props: uf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = F(() => e.active), o = F(() => e.activeColor), i = F(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = df(), v = () => {
      s.value === 0 || f() || c() || h();
    }, f = () => u.find((V) => {
      var {
        name: I
      } = V;
      return t.value === I.value;
    }), c = () => u.find((V) => {
      var {
        index: I
      } = V;
      return t.value === I.value;
    }), h = () => {
      an(t.value) && (t.value < 0 ? T(e["onUpdate:active"], 0) : t.value > s.value - 1 && T(e["onUpdate:active"], s.value - 1));
    }, y = (V) => {
      t.value !== V && (e.onBeforeChange ? C(V) : $(V));
    }, C = (V) => {
      var I = T(e.onBeforeChange, V);
      I = be(I) ? I : [I], Promise.all(I).then((B) => {
        B.some((p) => !p) || $(V);
      });
    }, $ = (V) => {
      T(e["onUpdate:active"], V), T(e.onChange, V);
    }, P = () => {
      var V = w();
      V.forEach((I) => {
        I.classList.remove(Mi, Ei, Ii);
      });
    }, k = (V) => {
      var I = w(), B = I.length, p = V % 2 === 0;
      I.forEach((b, L) => {
        S(p, b, L, B);
      });
    }, S = (V, I, B, p) => {
      var b = B === p - 1;
      if (!V && b) {
        I.classList.add(Ii);
        return;
      }
      var L = B === p / 2 - 1, Q = B === p / 2;
      L ? I.classList.add(Mi) : Q && I.classList.add(Ei);
    }, w = () => Array.from(a.value.querySelectorAll("." + Nt())), E = () => {
      T(e.onFabClick);
    }, A = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: y
    };
    return d(A), ie(() => s.value, v), ie(() => e.fabProps, (V) => {
      l.value = uo({}, cf, V);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      r.fab && k(s.value);
    }), jo(() => {
      P(), r.fab && k(s.value);
    }), {
      n: vf,
      classes: ff,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: E,
      fabProps: l
    };
  }
});
ls.render = mf;
const wr = ls;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var Bw = wr, pf = {
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
function hf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(os), {
    index: r
  } = yn(is);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: gf,
  classes: yf
} = ee("bottom-navigation-item"), bf = {
  type: "danger",
  dot: !0
};
function wf(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = Ke("ripple");
  return ke((g(), O(
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
    [e.icon && !e.$slots.icon ? (g(), me(
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
    }), e.badge ? (g(), me(
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
      [e.$slots.default ? _("v-if", !0) : (g(), O(
        Oe,
        {
          key: 0
        },
        [ge(
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
var ss = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: We
  },
  props: pf,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = hf(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, h = (c = n.value) != null ? c : t.value;
      T(e.onClick, h), T(o.onToggle, h);
    };
    return i(d), ie(() => r.value, (c) => {
      a.value = c === !0 ? bf : r.value;
    }, {
      immediate: !0
    }), {
      n: gf,
      classes: yf,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
ss.render = wf;
const Cr = ss;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var Nw = Cr, Cf = {
  separator: {
    type: String
  },
  onClick: U()
}, us = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), ds = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Sf() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(us), {
    length: r
  } = gn(ds);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function kf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(us), {
    index: r
  } = yn(ds);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: $f,
  classes: Tf
} = ee("breadcrumb");
function Pf(e, n) {
  return g(), O(
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
      [W(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? _("v-if", !0) : W(e.$slots, "separator", {
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
var vs = x({
  name: "VarBreadcrumb",
  props: Cf,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = kf(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), i = (l) => {
      t.value || T(e.onClick, l);
    };
    return a(null), {
      n: $f,
      classes: Tf,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
vs.render = Pf;
const Sr = vs;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var Dw = Sr, Of = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Vf
} = ee("breadcrumbs");
function Mf(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var fs = x({
  name: "VarBreadcrumbs",
  props: Of,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Sf(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Vf
    };
  }
});
fs.render = Mf;
const kr = fs;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var Aw = kr;
function Ef(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var If = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ef,
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
function Bi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ni(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Bi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Bi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Bf,
  classes: Nf
} = ee("card"), Df = 500, Af = ["src", "alt"];
function zf(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = Ke("ripple");
  return ke((g(), O(
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
    [D(
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
      [W(e.$slots, "image", {}, () => [e.src ? (g(), O(
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
        Af
      )) : _("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (g(), O(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (g(), O(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (g(), O(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (g(), O(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (g(), O(
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
      ), e.showFloatingButtons ? (g(), O(
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
    ), D(
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
var cs = x({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarButton: xe
  },
  props: If,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), o = M("100%"), i = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), c = F(() => e.layout === "row"), h = M(!1), y = M(!1), {
      zIndex: C
    } = xa(() => e.floating, 1);
    Bt(() => e.floating, () => !c.value);
    var $ = "auto", P = "auto", k = null, S = M(null), w = /* @__PURE__ */ function() {
      var I = Ni(function* () {
        clearTimeout(S.value), clearTimeout(k), S.value = null, S.value = setTimeout(/* @__PURE__ */ Ni(function* () {
          var {
            width: B,
            height: p,
            left: b,
            top: L
          } = n.value.getBoundingClientRect();
          a.value = we(B), t.value = we(p), o.value = a.value, i.value = t.value, l.value = we(L), s.value = we(b), u.value = "fixed", $ = l.value, P = s.value, h.value = !0, yield Mn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? Df : 0);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), E = () => {
      clearTimeout(k), clearTimeout(S.value), S.value = null, o.value = a.value, i.value = t.value, l.value = $, s.value = P, v.value = "0px", f.value = "0", h.value = !1, k = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", P = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      T(e["onUpdate:floating"], !1);
    }, V = (I) => {
      T(e.onClick, I);
    };
    return ie(() => e.floating, (I) => {
      c.value || Ee(() => {
        I ? w() : E();
      });
    }, {
      immediate: !0
    }), {
      n: Bf,
      classes: Nf,
      toSizeUnit: we,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: S,
      floaterWidth: o,
      floaterHeight: i,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: C,
      isRow: c,
      close: A,
      showFloatingButtons: h,
      floated: y,
      handleClick: V
    };
  }
});
cs.render = zf;
const $r = cs;
$r.install = function(e) {
  e.component($r.name, $r);
};
var zw = $r, Lf = {
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
  }
}, {
  n: Rf,
  classes: Uf
} = ee("cell");
function Yf(e, n) {
  var r = le("var-icon");
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [W(e.$slots, "icon", {}, () => [re(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
      /* CLASS */
    )) : _("v-if", !0), D(
      "div",
      {
        class: m(e.n("content"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [W(e.$slots, "default", {}, () => [ge(
          ne(e.title),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      ), e.$slots.description || e.description ? (g(), O(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [W(e.$slots, "description", {}, () => [ge(
          ne(e.description),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    ), e.$slots.extra ? (g(), O(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [W(e.$slots, "extra")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var ms = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  props: Lf,
  setup() {
    return {
      n: Rf,
      classes: Uf
    };
  }
});
ms.render = Yf;
const tr = ms;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var Lw = tr, Ff = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Hf
} = ee("form-details"), Wf = {
  key: 0
}, jf = {
  key: 0
};
function Gf(e, n) {
  return g(), me(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (g(), O(
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
              default: ve(() => [e.errorMessage ? (g(), O(
                "div",
                Wf,
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
              default: ve(() => [e.extraMessage ? (g(), O(
                "div",
                jf,
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
var ps = x({
  name: "VarFormDetails",
  props: Ff,
  setup: () => ({
    n: Hf
  })
});
ps.render = Gf;
const He = ps;
He.install = function(e) {
  e.component(He.name, He);
};
var Rw = He, qf = {
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
}, hs = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), gs = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Kf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(hs), {
    length: r
  } = gn(gs);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Xf() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(hs), {
    index: r
  } = yn(gs);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var ys = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(ys), r = Aa(), a = e ? (t) => {
    e(vo({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function Zf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ys);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Jf,
  classes: Qf
} = ee("checkbox");
function _f(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ke("ripple");
  return g(), O(
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
      [ke((g(), O(
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
      }]]), D(
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
var bs = x({
  name: "VarCheckbox",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  props: qf,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = M(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = Xf(), {
      form: l,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), c = (E) => {
      Ee(() => {
        var {
          validateTrigger: A,
          rules: V,
          modelValue: I
        } = e;
        d(A, E, V, I);
      });
    }, h = (E) => {
      n.value = E;
      var {
        checkedValue: A,
        onChange: V
      } = e;
      T(e["onUpdate:modelValue"], n.value), T(V, n.value), c("onChange"), E === A ? o == null || o.onChecked(A) : o == null || o.onUnchecked(A);
    }, y = (E) => {
      var {
        disabled: A,
        readonly: V,
        checkedValue: I,
        uncheckedValue: B,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || A) && (T(p, E), !(l != null && l.readonly.value || V))) {
        t.value = !0;
        var b = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && b || h(r.value ? B : I);
      }
    }, C = (E) => {
      var {
        checkedValue: A,
        uncheckedValue: V
      } = e;
      n.value = E.includes(A) ? A : V;
    }, $ = () => {
      t.value = !1;
    }, P = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, k = (E) => {
      var {
        checkedValue: A,
        uncheckedValue: V
      } = e, I = ![A, V].includes(E);
      I && (E = r.value ? V : A), h(E);
    }, S = () => v(e.rules, e.modelValue);
    ie(() => e.modelValue, (E) => {
      n.value = E;
    }, {
      immediate: !0
    });
    var w = {
      checkedValue: a,
      checked: r,
      sync: C,
      validate: S,
      resetValidation: f,
      reset: P,
      resetWithAnimation: $
    };
    return T(i, w), T(s, w), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Jf,
      classes: Qf,
      handleClick: y,
      toggle: k,
      reset: P,
      validate: S,
      resetValidation: f
    };
  }
});
bs.render = _f;
const or = bs;
or.install = function(e) {
  e.component(or.name, or);
};
var Uw = or;
function xf(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ec = {
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
    validator: xf
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
  n: nc,
  classes: rc
} = ee("checkbox-group");
function ac(e, n) {
  var r = le("var-form-details");
  return g(), O(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
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
var ws = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: ec,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Kf(), {
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = F(() => l.value), f = (A) => {
      Ee(() => {
        var {
          validateTrigger: V,
          rules: I,
          modelValue: B
        } = e;
        s(V, A, I, B);
      });
    }, c = (A) => {
      T(e["onUpdate:modelValue"], A), T(e.onChange, A), f("onChange");
    }, h = (A) => {
      var {
        modelValue: V
      } = e;
      V.includes(A) || c([...V, A]);
    }, y = (A) => {
      var {
        modelValue: V
      } = e;
      V.includes(A) && c(V.filter((I) => I !== A));
    }, C = () => t.forEach((A) => {
      var {
        sync: V
      } = A;
      return V(e.modelValue);
    }), $ = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, P = () => {
      var A = t.map((I) => {
        var {
          checkedValue: B
        } = I;
        return B.value;
      }), V = bi(A);
      return $(), T(e["onUpdate:modelValue"], V), V;
    }, k = () => {
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
      }), V = bi(A);
      return $(), T(e["onUpdate:modelValue"], V), V;
    }, S = () => {
      T(e["onUpdate:modelValue"], []), d();
    }, w = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, C, {
      deep: !0
    }), ie(() => a.value, C);
    var E = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: y,
      validate: w,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(E), T(i, E), {
      errorMessage: l,
      n: nc,
      classes: rc,
      checkAll: P,
      inverseAll: k,
      reset: S,
      validate: w,
      resetValidation: d
    };
  }
});
ws.render = ac;
const Tr = ws;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var Yw = Tr;
function tc(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function oc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ic = {
  type: {
    type: String,
    default: "default",
    validator: tc
  },
  size: {
    type: String,
    default: "normal",
    validator: oc
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: qe(Xl, "name"),
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
  classes: lc
} = ee("chip");
function sc(e, n) {
  var r = le("var-icon");
  return g(), me(
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
        [W(e.$slots, "left"), D(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [W(e.$slots, "default")],
          2
          /* CLASS */
        ), W(e.$slots, "right"), e.closable ? (g(), O(
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
var Cs = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: ic,
  setup(e) {
    var n = F(() => {
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
    }), r = F(() => {
      var {
        size: t,
        block: o,
        type: i,
        plain: l,
        round: s
      } = e, u = Gn(o ? "$--flex" : "$--inline-flex"), d = l ? Gn("plain") + " " + Gn("plain-" + i) : Gn("--" + i), v = s ? Gn("--round") : null;
      return [Gn("--" + t), u, d, v];
    }), a = (t) => {
      T(e.onClose, t);
    };
    return {
      n: Gn,
      classes: lc,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Cs.render = sc;
const ir = Cs;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var Fw = ir;
function uc(e) {
  return ["row", "column"].includes(e);
}
var dc = {
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
    validator: uc
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
}, Ss = Symbol("ROW_BIND_COL_KEY"), ks = Symbol("ROW_COUNT_COL_KEY");
function vc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ss), {
    length: r
  } = gn(ks);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function fc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ss), {
    index: r
  } = yn(ks);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: at,
  classes: cc
} = ee("col");
function mc(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: q({
        flexDirection: e.direction,
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
var $s = x({
  name: "VarCol",
  props: dc,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = F(() => z(e.span)), a = F(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = fc(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (Go(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(at("--span-" + u + "-" + c)), f && v.push(at("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(at("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      T(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), T(o, i), {
      n: at,
      classes: cc,
      padding: n,
      toNumber: z,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s
    };
  }
});
$s.render = mc;
const Pr = $s;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var Hw = Pr, Ts = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Ps = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function pc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ts), {
    length: r
  } = gn(Ps);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var hc = {
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
  n: gc
} = ee("collapse");
function yc(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Os = x({
  name: "VarCollapse",
  props: hc,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = pc(), t = F(() => e.modelValue), o = F(() => e.offset), i = () => !e.accordion && !be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, h) => i() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((y) => y !== c) : null, s = (c, h) => {
      var y = l(c, h);
      T(e["onUpdate:modelValue"], y), T(e.onChange, y);
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
      return y.value === void 0 ? e.modelValue === h.value : !1;
    }) : r.filter((c) => {
      var {
        index: h,
        name: y
      } = c;
      return y.value === void 0 ? e.modelValue.includes(h.value) : !1;
    }), v = () => {
      if (i()) {
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
    return a(f), ie(() => n.value, () => Ee().then(v)), ie(() => e.modelValue, () => Ee().then(v)), {
      n: gc
    };
  }
});
Os.render = yc;
const Or = Os;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var Ww = Or;
function bc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ts), {
    index: r
  } = yn(Ps);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var wc = {
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
  n: Cc,
  classes: Sc
} = ee("collapse-item");
function kc(e, n) {
  var r = le("var-icon");
  return g(), O(
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
        [W(e.$slots, "title", {}, () => [ge(
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
    ), ke(D(
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
        [W(e.$slots, "default")],
        2
        /* CLASS */
      )],
      34
      /* CLASS, HYDRATE_EVENTS */
    ), [[La, e.show]])],
    2
    /* CLASS */
  );
}
var Vs = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: wc,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = bc(), t = !0, o = M(null), i = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (k, S) => {
      s.value === void 0 || k && be(s.value) || S === l.value || (l.value = S, c(!0));
    }, c = (k) => {
      e.disabled || k || d(e.name || n.value, !l.value);
    }, h = () => {
      o.value && (o.value.style.height = "", i.value = !0, Ee(() => {
        var {
          offsetHeight: k
        } = o.value;
        o.value.style.height = 0 + "px", Pn(() => {
          o.value.style.height = k + "px", t && It(() => {
            t && $();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, C = () => {
      if (o.value) {
        var {
          offsetHeight: k
        } = o.value;
        o.value.style.height = k + "px", Pn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, $ = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), ie(l, (k) => {
      k ? h() : C();
    }), {
      n: Cc,
      start: y,
      classes: Sc,
      show: i,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: $
    };
  }
});
Vs.render = kc;
const Vr = Vs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var jw = Vr, $c = {
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
  n: Tc
} = ee("countdown"), fo = 1e3, co = 60 * fo, mo = 60 * co, Di = 24 * mo;
function Pc(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default", Nl(Ud(e.timeData)), () => [ge(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ms = x({
  name: "VarCountdown",
  props: $c,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), o = M(0), i = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, h) => {
      var y = Object.values(h), C = ["DD", "HH", "mm", "ss"], $ = [24, 60, 60, 1e3];
      if (C.forEach((k, S) => {
        c.includes(k) ? c = c.replace(k, fa("" + y[S], 2, "0")) : y[S + 1] += y[S] * $[S];
      }), c.includes("S")) {
        var P = fa("" + y[y.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", P) : c.includes("SS") ? c = c.replace("SS", P.slice(0, 2)) : c = c.replace("S", P.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / Di), y = Math.floor(c % Di / mo), C = Math.floor(c % mo / co), $ = Math.floor(c % co / fo), P = Math.floor(c % fo), k = {
        days: h,
        hours: y,
        minutes: C,
        seconds: $,
        milliseconds: P
      };
      i.value = k, T(e.onChange, i.value), a.value = l(e.format, k);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: y
      } = e, C = performance.now();
      n.value || (n.value = C + z(c));
      var $ = n.value - C;
      if ($ < 0 && ($ = 0), o.value = $, s($), $ === 0) {
        T(h);
        return;
      }
      (y || r.value) && (t.value = Pn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, av(t.value), u();
    };
    return ie(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: i,
      n: Tc,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Ms.render = Pc;
const Mr = Ms;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var Gw = Mr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ka = 9e15, pr = 1e9, po = "0123456789abcdef", ht = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", gt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ho = {
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
  minE: -ka,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: ka,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Es, Dn, fe = !0, Dt = "[DecimalError] ", fr = Dt + "Invalid argument: ", Is = Dt + "Precision limit exceeded", Bs = Dt + "crypto unavailable", Ns = "[object Decimal]", Ze = Math.floor, Re = Math.pow, Oc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Vc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Mc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ds = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, Ec = 9007199254740991, Ic = ht.length - 1, go = gt.length - 1, G = { toStringTag: Ns };
G.absoluteValue = G.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
G.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
G.clampedTo = G.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(fr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
G.comparedTo = G.cmp = function(e) {
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
G.cosine = G.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Bc(a, Us(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
G.cubeRoot = G.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Re(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = je(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Re(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Pe(u.plus(d).times(l), u.plus(s), i + 2, 1), je(l.d).slice(0, i) === (r = je(a.d)).slice(0, i))
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
G.decimalPlaces = G.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
G.dividedBy = G.div = function(e) {
  return Pe(this, new this.constructor(e));
};
G.dividedToIntegerBy = G.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Pe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
G.equals = G.eq = function(e) {
  return this.cmp(e) === 0;
};
G.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
G.greaterThan = G.gt = function(e) {
  return this.cmp(e) > 0;
};
G.greaterThanOrEqualTo = G.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
G.hyperbolicCosine = G.cosh = function() {
  var e, n, r, a, t, o = this, i = o.constructor, l = new i(1);
  if (!o.isFinite())
    return new i(o.s ? 1 / 0 : NaN);
  if (o.isZero())
    return l;
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / zt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ma(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
G.hyperbolicSine = G.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ma(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / zt(5, e)), t = Ma(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, ue(t, n, r, !0);
};
G.hyperbolicTangent = G.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Pe(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
G.inverseCosine = G.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, o = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? kn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? kn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = kn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
};
G.inverseHyperbolicCosine = G.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
G.inverseHyperbolicSine = G.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
G.inverseHyperbolicTangent = G.atanh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
};
G.inverseSine = G.asin = function() {
  var e, n, r, a, t = this, o = t.constructor;
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = kn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
G.inverseTangent = G.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= go)
      return i = kn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= go)
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
G.isFinite = function() {
  return !!this.d;
};
G.isInteger = G.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
};
G.isNaN = function() {
  return !this.s;
};
G.isNegative = G.isNeg = function() {
  return this.s < 0;
};
G.isPositive = G.isPos = function() {
  return this.s > 0;
};
G.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
G.lessThan = G.lt = function(e) {
  return this.cmp(e) < 0;
};
G.lessThanOrEqualTo = G.lte = function(e) {
  return this.cmp(e) < 1;
};
G.logarithm = G.log = function(e) {
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
  if (fe = !1, l = v + c, i = er(u, l), a = n ? yt(d, l + 10) : er(e, l), s = Pe(i, a, l, 1), Ka(s.d, t = v, f))
    do
      if (l += 10, i = er(u, l), a = n ? yt(d, l + 10) : er(e, l), s = Pe(i, a, l, 1), !o) {
        +je(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (Ka(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
G.minus = G.sub = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, h = c.constructor;
  if (e = new h(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new h(NaN) : c.d ? e.s = -e.s : e = new h(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, l = h.precision, s = h.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new h(c);
    else
      return new h(s === 3 ? -0 : 0);
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
  return u[0] ? (e.d = u, e.e = At(u, r), fe ? ue(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
G.modulo = G.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
G.naturalExponential = G.exp = function() {
  return yo(this);
};
G.naturalLogarithm = G.ln = function() {
  return er(this);
};
G.negated = G.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
G.plus = G.add = function(e) {
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
  return e.d = u, e.e = At(u, a), fe ? ue(e, l, s) : e;
};
G.precision = G.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(fr + e);
  return r.d ? (n = As(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
G.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
G.sine = G.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Dc(a, Us(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
G.squareRoot = G.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (fe = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = je(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(i, o, r + 2, 1)).times(0.5), je(o.d).slice(0, r) === (n = je(a.d)).slice(0, r))
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
G.tangent = G.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
G.times = G.mul = function(e) {
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
  return n ? ++r : o.shift(), e.d = o, e.e = At(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
G.toBinary = function(e, n) {
  return ni(this, 2, e, n);
};
G.toDecimalPlaces = G.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, pr), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
G.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, !0) : (tn(e, 0, pr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = En(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
G.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = En(t) : (tn(e, 0, pr), n === void 0 ? n = o.rounding : tn(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = En(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
G.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, h = c.d, y = c.constructor;
  if (!h)
    return new y(c);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), o = n.e = As(h) - c.e - 1, i = o % de, n.d[0] = Re(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(fr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new y(je(h)), d = y.precision, y.precision = o = h.length * de * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Pe(u, a, o, 1).minus(c).abs().cmp(Pe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], y.precision = d, fe = !0, f;
};
G.toHexadecimal = G.toHex = function(e, n) {
  return ni(this, 16, e, n);
};
G.toNearest = function(e, n) {
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
G.toNumber = function() {
  return +this;
};
G.toOctal = function(e, n) {
  return ni(this, 8, e, n);
};
G.toPower = G.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Re(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Ec)
    return t = zs(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Re(+l, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + je(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = yo(e.times(er(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), Ka(t.d, a, o) && (n = a + 10, t = ue(yo(e.times(er(l, n + r)), n), n + 5, 1), +je(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, ue(t, a, o));
};
G.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, pr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = En(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
G.toSignificantDigits = G.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, pr), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
};
G.toString = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
G.truncated = G.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
G.valueOf = G.toJSON = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function je(e) {
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
    throw Error(fr + e);
}
function Ka(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Re(10, de - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Re(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Re(10, n - 3) - 1, i;
}
function ut(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += po.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Bc(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / zt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ma(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, h, y, C, $, P, k, S, w, E, A, V, I, B, p, b, L = a.constructor, Q = a.s == t.s ? 1 : -1, Y = a.d, R = t.d;
    if (!Y || !Y[0] || !R || !R[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (Y ? R && Y[0] == R[0] : !R) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Y && Y[0] == 0 || !R ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), p = R.length, I = Y.length, $ = new L(Q), P = $.d = [], v = 0; R[v] == (Y[v] || 0); v++)
      ;
    if (R[v] > (Y[v] || 0) && d--, o == null ? (E = o = L.precision, i = L.rounding) : l ? E = o + (a.e - t.e) + 1 : E = o, E < 0)
      P.push(1), h = !0;
    else {
      if (E = E / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], E++; (v < I || f) && E--; v++)
          A = f * s + (Y[v] || 0), P[v] = A / R | 0, f = A % R | 0;
        h = f || v < I;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), Y = e(Y, f, s), p = R.length, I = Y.length), V = p, k = Y.slice(0, p), S = k.length; S < p; )
          k[S++] = 0;
        b = R.slice(), b.unshift(0), B = R[0], R[1] >= s / 2 && ++B;
        do
          f = 0, u = n(R, k, p, S), u < 0 ? (w = k[0], p != S && (w = w * s + (k[1] || 0)), f = w / B | 0, f > 1 ? (f >= s && (f = s - 1), y = e(R, f, s), C = y.length, S = k.length, u = n(y, k, C, S), u == 1 && (f--, r(y, p < C ? b : R, C, s))) : (f == 0 && (u = f = 1), y = R.slice()), C = y.length, C < S && y.unshift(0), r(k, y, S, s), u == -1 && (S = k.length, u = n(R, k, p, S), u < 1 && (f++, r(k, p < S ? b : R, S, s))), S = k.length) : u === 0 && (f++, k = [0]), P[v++] = f, u && k[0] ? k[S++] = Y[V] || 0 : (k = [Y[V]], S = 1);
        while ((V++ < I || k[0] !== void 0) && E--);
        h = k[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (c == 1)
      $.e = d, Es = h;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
        v++;
      $.e = v + d * c - 1, ue($, l ? o + $.e + 1 : o, i, h);
    }
    return $;
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
        o += de, i = n, d = v[f = 0], s = d / Re(10, t - i - 1) % 10 | 0;
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
        o %= de, i = o - de + t, s = i < 0 ? 0 : d / Re(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % Re(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / Re(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Re(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Re(10, de - o), v[f] = i > 0 ? (d / Re(10, t - i) % Re(10, i) | 0) * l : 0), u)
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
function En(e, n, r) {
  if (!e.isFinite())
    return Rs(e);
  var a, t = e.e, o = je(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Kn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Kn(-t - 1) + o, r && (a = r - i) > 0 && (o += Kn(a))) : t >= i ? (o += Kn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Kn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Kn(a))), o;
}
function At(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function yt(e, n, r) {
  if (n > Ic)
    throw fe = !0, r && (e.precision = r), Error(Is);
  return ue(new e(ht), n, 1, !0);
}
function kn(e, n, r) {
  if (n > go)
    throw Error(Is);
  return ue(new e(gt), n, r, !0);
}
function As(e) {
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
function zs(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), zi(o.d, i) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), zi(n.d, i);
  }
  return fe = !0, o;
}
function Ai(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ls(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function yo(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Re(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), je(l.d).slice(0, s) === je(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Ka(i.d, s - a, c, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = h, c, fe = !0);
      else
        return f.precision = h, i;
    }
    i = l;
  }
}
function er(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, c = 1, h = 10, y = e, C = y.d, $ = y.constructor, P = $.rounding, k = $.precision;
  if (y.s < 0 || !C || !C[0] || !y.e && C[0] == 1 && C.length == 1)
    return new $(C && !C[0] ? -1 / 0 : y.s != 1 ? NaN : C ? 0 : y);
  if (n == null ? (fe = !1, d = k) : d = n, $.precision = d += h, r = je(C), a = r.charAt(0), Math.abs(o = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = je(y.d), a = r.charAt(0), c++;
    o = y.e, a > 1 ? (y = new $("0." + r), o++) : y = new $(a + "." + r.slice(1));
  } else
    return u = yt($, d + 2, k).times(o + ""), y = er(new $(a + "." + r.slice(1)), d - h).plus(u), $.precision = k, n == null ? ue(y, k, P, fe = !0) : y;
  for (v = y, s = i = y = Pe(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new $(t), d, 1)), je(u.d).slice(0, d) === je(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(yt($, d + 2, k).times(o + ""))), s = Pe(s, new $(c), d, 1), n == null)
        if (Ka(s.d, d - h, P, l))
          $.precision = d += h, u = i = y = Pe(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = l = 1;
        else
          return ue(s, $.precision = k, P, fe = !0);
      else
        return $.precision = k, s;
    s = u, t += 2;
  }
}
function Rs(e) {
  return String(e.s * e.s / 0);
}
function bo(e, n) {
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
function Nc(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Ds.test(n))
      return bo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Vc.test(n))
    r = 16, n = n.toLowerCase();
  else if (Oc.test(n))
    r = 2;
  else if (Mc.test(n))
    r = 8;
  else
    throw Error(fr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = zs(a, new a(r), o, o * 2)), u = ut(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = At(u, d), e.d = u, fe = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Re(2, s) : nr.pow(2, s))), fe = !0, e);
}
function Dc(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ma(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / zt(5, r)), n = Ma(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Ma(e, n, r, a, t) {
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
function zt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Us(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = Ai(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = Ai(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function ni(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (tn(r, 1, pr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Rs(e);
  else {
    for (d = En(e), i = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - i, f.d = ut(En(f), 10, t), f.e = f.d.length), v = ut(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Es), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += po.charAt(v[i]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = ut(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += po.charAt(v[i]);
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
function zi(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Ac(e) {
  return new this(e).abs();
}
function zc(e) {
  return new this(e).acos();
}
function Lc(e) {
  return new this(e).acosh();
}
function Rc(e, n) {
  return new this(e).plus(n);
}
function Uc(e) {
  return new this(e).asin();
}
function Yc(e) {
  return new this(e).asinh();
}
function Fc(e) {
  return new this(e).atan();
}
function Hc(e) {
  return new this(e).atanh();
}
function Wc(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function jc(e) {
  return new this(e).cbrt();
}
function Gc(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function qc(e, n, r) {
  return new this(e).clamp(n, r);
}
function Kc(e) {
  if (!e || typeof e != "object")
    throw Error(Dt + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    pr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -ka,
    0,
    "toExpPos",
    0,
    ka,
    "maxE",
    0,
    ka,
    "minE",
    -ka,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = ho[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(fr + r + ": " + a);
  if (r = "crypto", t && (this[r] = ho[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Bs);
      else
        this[r] = !1;
    else
      throw Error(fr + r + ": " + a);
  return this;
}
function Xc(e) {
  return new this(e).cos();
}
function Zc(e) {
  return new this(e).cosh();
}
function Ys(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Li(o)) {
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
      return bo(u, o.toString());
    } else if (s !== "string")
      throw Error(fr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), Ds.test(o) ? bo(u, o) : Nc(u, o);
  }
  if (t.prototype = G, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Kc, t.clone = Ys, t.isDecimal = Li, t.abs = Ac, t.acos = zc, t.acosh = Lc, t.add = Rc, t.asin = Uc, t.asinh = Yc, t.atan = Fc, t.atanh = Hc, t.atan2 = Wc, t.cbrt = jc, t.ceil = Gc, t.clamp = qc, t.cos = Xc, t.cosh = Zc, t.div = Jc, t.exp = Qc, t.floor = _c, t.hypot = xc, t.ln = em, t.log = nm, t.log10 = am, t.log2 = rm, t.max = tm, t.min = om, t.mod = im, t.mul = lm, t.pow = sm, t.random = um, t.round = dm, t.sign = vm, t.sin = fm, t.sinh = cm, t.sqrt = mm, t.sub = pm, t.sum = hm, t.tan = gm, t.tanh = ym, t.trunc = bm, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Jc(e, n) {
  return new this(e).div(n);
}
function Qc(e) {
  return new this(e).exp();
}
function _c(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function xc() {
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
function Li(e) {
  return e instanceof nr || e && e.toStringTag === Ns || !1;
}
function em(e) {
  return new this(e).ln();
}
function nm(e, n) {
  return new this(e).log(n);
}
function rm(e) {
  return new this(e).log(2);
}
function am(e) {
  return new this(e).log(10);
}
function tm() {
  return Ls(this, arguments, "lt");
}
function om() {
  return Ls(this, arguments, "gt");
}
function im(e, n) {
  return new this(e).mod(n);
}
function lm(e, n) {
  return new this(e).mul(n);
}
function sm(e, n) {
  return new this(e).pow(n);
}
function um(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, pr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Bs);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= de, a && e && (t = Re(10, de - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
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
function dm(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function vm(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function fm(e) {
  return new this(e).sin();
}
function cm(e) {
  return new this(e).sinh();
}
function mm(e) {
  return new this(e).sqrt();
}
function pm(e, n) {
  return new this(e).sub(n);
}
function hm() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function gm(e) {
  return new this(e).tan();
}
function ym(e) {
  return new this(e).tanh();
}
function bm(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
G[Symbol.for("nodejs.util.inspect.custom")] = G.toString;
G[Symbol.toStringTag] = "Decimal";
var nr = G.constructor = Ys(ho);
ht = new nr(ht);
gt = new nr(gt);
var wm = {
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
  n: Cm,
  classes: Sm
} = ee("counter"), Ri = 100, Ui = 600, km = ["inputmode", "readonly", "disabled"];
function $m(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ke("ripple");
  return g(), O(
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
      [ke(re(
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
      }]]), ke(D(
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
        km
      ), [[Yd, e.inputValue]]), ke(re(
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
var Fs = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: wm,
  setup(e) {
    var n = M(""), r, a, t, o, {
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
    } = l ?? {}, h = () => d(e.rules, e.modelValue), y = (R) => {
      Ee(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: K
        } = e;
        u(J, R, j, K);
      });
    }, C = () => {
      var {
        min: R
      } = e;
      T(e["onUpdate:modelValue"], R != null ? z(R) : 0), v();
    }, $ = {
      reset: C,
      validate: h,
      resetValidation: v
    }, P = F(() => {
      var {
        max: R,
        modelValue: J
      } = e;
      return R != null && z(J) >= z(R);
    }), k = F(() => {
      var {
        min: R,
        modelValue: J
      } = e;
      return R != null && z(J) <= z(R);
    }), S = (R) => {
      var {
        decimalLength: J,
        max: j,
        min: K
      } = e, N = z(R);
      return j != null && N > z(j) && (N = z(j)), K != null && N < z(K) && (N = z(K)), R = String(N), J != null && (R = N.toFixed(z(J))), R;
    }, w = (R) => {
      var {
        lazyChange: J,
        onBeforeChange: j
      } = e, {
        value: K
      } = R.target, N = S(K);
      J ? T(j, z(N), Y) : Q(N), y("onInputChange");
    }, E = () => {
      var {
        disabled: R,
        readonly: J,
        disableDecrement: j,
        decrementButton: K,
        lazyChange: N,
        step: X,
        modelValue: H,
        onDecrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !K) && !k.value) {
        var oe = new nr(z(H)).minus(new nr(z(X))).toString(), he = S(oe), pe = z(he);
        T(Z, pe), N ? T(ae, pe, Y) : (Q(he), y("onDecrement"));
      }
    }, A = () => {
      var {
        disabled: R,
        readonly: J,
        disableIncrement: j,
        incrementButton: K,
        lazyChange: N,
        step: X,
        modelValue: H,
        onIncrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !K) && !P.value) {
        var oe = new nr(z(H)).plus(new nr(z(X))).toString(), he = S(oe), pe = z(he);
        T(Z, pe), N ? T(ae, pe, Y) : (Q(he), y("onIncrement"));
      }
    }, V = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (o = window.setTimeout(() => {
        L();
      }, Ui));
    }, I = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (t = window.setTimeout(() => {
        b();
      }, Ui));
    }, B = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, b = () => {
      r = window.setTimeout(() => {
        A(), b();
      }, Ri);
    }, L = () => {
      a = window.setTimeout(() => {
        E(), L();
      }, Ri);
    }, Q = (R) => {
      n.value = R;
      var J = z(R);
      T(e["onUpdate:modelValue"], J);
    }, Y = (R) => {
      Q(S(String(R))), y("onLazyChange");
    };
    return T(i, $), ie(() => e.modelValue, (R) => {
      Q(S(String(R))), T(e.onChange, z(R));
    }), Q(S(String(e.modelValue))), {
      n: Cm,
      classes: Sm,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: P,
      isMin: k,
      validate: h,
      reset: C,
      resetValidation: v,
      handleChange: w,
      decrement: E,
      increment: A,
      pressDecrement: V,
      pressIncrement: I,
      releaseDecrement: B,
      releaseIncrement: p,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Fs.render = $m;
const Er = Fs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var qw = Er, Hs = 60, Ws = Hs * 60, js = Ws * 24, Tm = js * 7, Ea = 1e3, Kt = Hs * Ea, Yi = Ws * Ea, Pm = js * Ea, Om = Tm * Ea, ri = "millisecond", $a = "second", Ta = "minute", Pa = "hour", Xn = "day", dt = "week", Sn = "month", Gs = "quarter", Zn = "year", Oa = "date", Vm = "YYYY-MM-DDTHH:mm:ssZ", Fi = "Invalid Date", Mm = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Em = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Im = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var wo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Bm = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + wo(t, 2, "0") + ":" + wo(o, 2, "0");
}, Nm = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, Dm = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Am = function(n) {
  var r = {
    M: Sn,
    y: Zn,
    w: dt,
    d: Xn,
    D: Oa,
    h: Pa,
    m: Ta,
    s: $a,
    ms: ri,
    Q: Gs
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, zm = function(n) {
  return n === void 0;
};
const Lm = {
  s: wo,
  z: Bm,
  m: Nm,
  a: Dm,
  p: Am,
  u: zm
};
var Wa = "en", Ir = {};
Ir[Wa] = Im;
var ai = function(n) {
  return n instanceof Lt;
}, bt = function e(n, r, a) {
  var t;
  if (!n)
    return Wa;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Ir[o] && (t = o), r && (Ir[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Ir[l] = n, t = l;
  }
  return !a && t && (Wa = t), t || !a && Wa;
}, te = function(n, r) {
  if (ai(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Lt(a);
}, Rm = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = Lm;
Te.l = bt;
Te.i = ai;
Te.w = Rm;
var Um = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Mm);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, Lt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = bt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Um(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== Fi;
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function($, P) {
      var k = Te.w(o.$u ? Date.UTC(o.$y, P, $) : new Date(o.$y, P, $), o);
      return i ? k : k.endOf(Xn);
    }, u = function($, P) {
      var k = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Te.w(o.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? k : S).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Zn:
        return i ? s(1, 0) : s(31, 11);
      case Sn:
        return i ? s(1, v) : s(0, v + 1);
      case dt: {
        var h = this.$locale().weekStart || 0, y = (d < h ? d + 7 : d) - h;
        return s(i ? f - y : f + (6 - y), v);
      }
      case Xn:
      case Oa:
        return u(c + "Hours", 0);
      case Pa:
        return u(c + "Minutes", 1);
      case Ta:
        return u(c + "Seconds", 2);
      case $a:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = l + "Date", o[Oa] = l + "Date", o[Sn] = l + "Month", o[Zn] = l + "FullYear", o[Pa] = l + "Hours", o[Ta] = l + "Minutes", o[$a] = l + "Seconds", o[ri] = l + "Milliseconds", o)[i], u = i === Xn ? this.$D + (t - this.$W) : t;
    if (i === Sn || i === Zn) {
      var d = this.clone().set(Oa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Oa, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === dt)
      return s(7);
    var u = (i = {}, i[Ta] = Kt, i[Pa] = Yi, i[$a] = Ea, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Fi;
    var i = a || Vm, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, h = function(k, S, w, E) {
      return k && (k[S] || k(t, i)) || w[S].slice(0, E);
    }, y = function(k) {
      return Te.s(s % 12 || 12, k, "0");
    }, C = c || function(P, k, S) {
      var w = P < 12 ? "AM" : "PM";
      return S ? w.toLowerCase() : w;
    }, $ = {
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
      a: C(s, u, !0),
      A: C(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(Em, function(P, k) {
      return k || $[P] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * Kt, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Zn] = v / 12, i[Sn] = v, i[Gs] = v / 3, i[dt] = (d - u) / Om, i[Xn] = (d - u) / Pm, i[Pa] = d / Yi, i[Ta] = d / Kt, i[$a] = d / Ea, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Ir[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = bt(a, t, !0);
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
}(), qs = Lt.prototype;
te.prototype = qs;
[["$ms", ri], ["$s", $a], ["$m", Ta], ["$H", Pa], ["$W", Xn], ["$M", Sn], ["$y", Zn], ["$D", Oa]].forEach(function(e) {
  qs[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, Lt, te), e.$i = !0), te;
};
te.locale = bt;
te.isDayjs = ai;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Ir[Wa];
te.Ls = Ir;
te.p = {};
const Ks = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Xs = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Ym(e) {
  return ["date", "month"].includes(e);
}
var vt = [{
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
}], Ha = [{
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
}], Fm = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Ym
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
  n: Hm
} = ee("picker-header");
function Wm(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return g(), O(
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
          default: ve(() => [(g(), O(
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
var Zs = x({
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
    } = n, a = M(!1), t = M(0), o = F(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (l = Fe.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Fe.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: Hm,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
Zs.render = Wm;
const Js = Zs;
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
te.extend(Ks);
te.extend(Xs);
var {
  n: tt,
  classes: jm
} = ee("month-picker"), {
  n: ot
} = ee("date-picker");
function Gm(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return g(), O(
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
          default: ve(() => [(g(), O("ul", {
            key: e.panelKey
          }, [(g(!0), O(
            Oe,
            null,
            Be(e.MONTH_LIST, (t) => (g(), O("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, Co({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [ge(
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
var Qs = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Js
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
    } = n, [a, t] = e.current.split("-"), o = M(!1), i = M(0), l = M(null), s = Me({
      left: !1,
      right: !1
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = (P) => {
      var k, S;
      return (k = (S = Fe.value.datePickerMonthDict) == null ? void 0 : S[P].abbr) != null ? k : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: k
        },
        componentProps: {
          min: S,
          max: w
        }
      } = e, E = !0, A = !0, V = k + "-" + P;
      return w && (E = te(V).isSameOrBefore(te(w), "month")), S && (A = te(V).isSameOrAfter(te(S), "month")), E && A;
    }, c = (P) => {
      var {
        choose: {
          chooseMonths: k,
          chooseDays: S,
          chooseRangeMonth: w
        },
        componentProps: {
          type: E,
          range: A
        }
      } = e;
      if (A) {
        if (!w.length)
          return !1;
        var V = te(P).isSameOrBefore(te(w[1]), "month"), I = te(P).isSameOrAfter(te(w[0]), "month");
        return V && I;
      }
      return E === "month" ? k.includes(P) : S.some((B) => B.includes(P));
    }, h = (P) => {
      var {
        choose: {
          chooseMonth: k
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: w,
          color: E,
          multiple: A,
          range: V
        }
      } = e, I = S + "-" + P, B = () => V || A ? c(I) : (k == null ? void 0 : k.index) === P && u.value, p = () => f(P) ? w ? !w(I) : !1 : !0, b = p(), L = () => b ? !0 : V || A ? !c(I) : !u.value || (k == null ? void 0 : k.index) !== P, Q = () => d.value && t === P && e.componentProps.showCurrent ? (V || A || u.value) && b ? !0 : V || A ? !c(I) : u.value ? (k == null ? void 0 : k.index) !== t : !0 : !1, Y = () => b ? "" : Q() ? E ?? "" : B() ? "" : ot() + "-color-cover", R = Y().startsWith(ot());
      return {
        outline: Q(),
        text: L(),
        color: L() ? "" : E,
        textColor: R ? "" : Y(),
        [ot() + "-color-cover"]: R,
        class: jm(tt("button"), [b, tt("button--disabled")])
      };
    }, y = (P, k) => {
      var S = k.currentTarget;
      S.classList.contains(tt("button--disabled")) || r("choose-month", P);
    }, C = (P) => {
      o.value = P === "prev", i.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, $ = (P) => {
      l.value.checkDate(P);
    };
    return ie(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: k,
          max: S
        }
      } = e;
      S && (s.right = !te("" + (z(P) + 1)).isSameOrBefore(te(S), "year")), k && (s.left = !te("" + (z(P) - 1)).isSameOrAfter(te(k), "year"));
    }, {
      immediate: !0
    }), {
      n: tt,
      nDate: ot,
      pack: Fe,
      MONTH_LIST: vt,
      headerEl: l,
      reverse: o,
      panelKey: i,
      panelBtnDisabled: s,
      forwardRef: $,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: C
    };
  }
});
Qs.render = Gm;
const qm = Qs;
var {
  n: Hi,
  classes: Km
} = ee("year-picker"), Xm = ["onClick"];
function Zm(e, n) {
  return g(), O(
    "ul",
    {
      class: m(e.n())
    },
    [(g(!0), O(
      Oe,
      null,
      Be(e.yearList, (r) => (g(), O(
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
        Xm
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var _s = x({
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
    } = n, a = F(() => {
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
      for (var h = u[0]; h >= u[1]; h--)
        o.push(h);
      return o;
    }), t = (o) => {
      r("choose-year", o);
    };
    return Ue(() => {
      var o = document.querySelector("." + Hi("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Hi,
      classes: Km,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
_s.render = Zm;
const Jm = _s;
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
te.extend(Ks);
te.extend(Xs);
var {
  n: Sa,
  classes: Qm
} = ee("day-picker"), {
  n: it
} = ee("date-picker");
function _m(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return g(), O(
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
          default: ve(() => [(g(), O("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(g(!0), O(
              Oe,
              null,
              Be(e.sortWeekList, (t) => (g(), O(
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
            [(g(!0), O(
              Oe,
              null,
              Be(e.days, (t, o) => (g(), O("li", {
                key: o
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, So({}, e.buttonProps(t)), {
                  onClick: (i) => e.chooseDay(t, i)
                }),
                {
                  default: ve(() => [ge(
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
var xs = x({
  name: "DayPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Js
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
    } = n, [a, t, o] = e.current.split("-"), i = M([]), l = M(!1), s = M(0), u = M(null), d = Me({
      left: !1,
      right: !1
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var V;
      return e.choose.chooseYear === e.preview.previewYear && ((V = e.choose.chooseMonth) == null ? void 0 : V.index) === e.preview.previewMonth.index;
    }), c = F(() => {
      var V = Ha.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return V === -1 || V === 0 ? Ha : Ha.slice(V).concat(Ha.slice(0, V));
    }), h = (V) => {
      var I, B;
      return (I = (B = Fe.value.datePickerWeekDict) == null ? void 0 : B[V].abbr) != null ? I : "";
    }, y = (V) => V > 0 ? V : "", C = () => {
      var {
        preview: {
          previewMonth: V,
          previewYear: I
        }
      } = e, B = te(I + "-" + V.index).daysInMonth(), p = te(I + "-" + V.index + "-01").day(), b = c.value.findIndex((L) => L.index === "" + p);
      i.value = [...Array(b).fill(-1), ...Array.from(Array(B + 1).keys())].filter((L) => L);
    }, $ = () => {
      var {
        preview: {
          previewYear: V,
          previewMonth: I
        },
        componentProps: {
          max: B,
          min: p
        }
      } = e;
      if (B) {
        var b = V + "-" + (z(I.index) + 1);
        d.right = !te(b).isSameOrBefore(te(B), "month");
      }
      if (p) {
        var L = V + "-" + (z(I.index) - 1);
        d.left = !te(L).isSameOrAfter(te(p), "month");
      }
    }, P = (V) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: B
        },
        componentProps: {
          min: p,
          max: b
        }
      } = e, L = !0, Q = !0, Y = I + "-" + B.index + "-" + V;
      return b && (L = te(Y).isSameOrBefore(te(b), "day")), p && (Q = te(Y).isSameOrAfter(te(p), "day")), L && Q;
    }, k = (V) => {
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
        var b = te(V).isSameOrBefore(te(B[1]), "day"), L = te(V).isSameOrAfter(te(B[0]), "day");
        return b && L;
      }
      return I.includes(V);
    }, S = (V) => {
      if (V < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Sa("button")
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
          allowedDates: b,
          color: L,
          multiple: Q,
          range: Y
        }
      } = e, R = B + "-" + p.index + "-" + V, J = () => Y || Q ? k(R) : z(I) === V && f.value, j = () => P(V) ? b ? !b(R) : !1 : !0, K = j(), N = () => K ? !0 : Y || Q ? !k(R) : !f.value || z(I) !== V, X = () => v.value && z(o) === V && e.componentProps.showCurrent ? (Y || Q || f.value) && K ? !0 : Y || Q ? !k(R) : f.value ? I !== o : !0 : !1, H = () => K ? "" : X() ? L ?? "" : J() ? "" : it() + "-color-cover", Z = H().startsWith(it());
      return {
        text: N(),
        outline: X(),
        textColor: Z ? "" : H(),
        [it() + "-color-cover"]: Z,
        class: Qm(Sa("button"), Sa("button--usable"), [K, Sa("button--disabled")])
      };
    }, w = (V) => {
      l.value = V === "prev", s.value += V === "prev" ? -1 : 1, r("check-preview", "month", V);
    }, E = (V, I) => {
      var B = I.currentTarget;
      B.classList.contains(Sa("button--disabled")) || r("choose-day", V);
    }, A = (V) => {
      u.value.checkDate(V);
    };
    return Ue(() => {
      C(), $();
    }), ie(() => e.preview, () => {
      C(), $();
    }), {
      n: Sa,
      nDate: it,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: y,
      getDayAbbr: h,
      checkDate: w,
      chooseDay: E,
      buttonProps: S
    };
  }
});
xs.render = _m;
const xm = xs;
var {
  n: ep,
  classes: np
} = ee("date-picker");
function rp(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: q({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [W(e.$slots, "year", {
          year: e.chooseYear
        }, () => [ge(
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
              return [e.type === "month" ? (g(), O("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [ge(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [ge(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [ge(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (g(), O("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? W(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [ge(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? W(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [ge(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : W(e.$slots, "date", Nl(Ve({
                key: 2
              }, e.slotProps)), () => [ge(
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
          default: ve(() => [e.getPanelType === "year" ? (g(), me(
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
          )) : e.getPanelType === "month" ? (g(), me(
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
          )) : e.getPanelType === "date" ? (g(), me(
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
var eu = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: qm,
    YearPickerPanel: Jm,
    DayPickerPanel: xm
  },
  props: Fm,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [i, l] = o.split("-"), s = vt.find((se) => se.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), c = M(), h = M(), y = M(s), C = M(i), $ = M(!1), P = M([]), k = M([]), S = M([]), w = M([]), E = M(null), A = M(null), V = Me({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), I = F(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: h.value,
      chooseMonths: P.value,
      chooseDays: k.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: w.value
    })), B = F(() => ({
      previewMonth: y.value,
      previewYear: C.value
    })), p = F(() => {
      var {
        multiple: se,
        range: ye
      } = e;
      if (ye)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, Se;
        ce = (Ce = (Se = Fe.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + P.value.length + Fe.value.datePickerSelected : ce;
    }), b = F(() => {
      var se, ye, ce, Ce, {
        multiple: Se,
        range: ze
      } = e;
      if (ze) {
        var Je = w.value.map((jt) => te(jt).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (Se)
        return "" + k.value.length + Fe.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var fn = te(c.value + "-" + f.value.index + "-" + h.value).day(), Ca = Ha.find((jt) => jt.index === "" + fn), hi = (se = (ye = Fe.value.datePickerWeekDict) == null ? void 0 : ye[Ca.index].name) != null ? se : "", Ad = (ce = (Ce = Fe.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", zd = fa(h.value, 2, "0");
      return Fe.value.lang === "zh-CN" ? f.value.index + "-" + zd + " " + hi.slice(0, 3) : hi.slice(0, 3) + ", " + Ad.slice(0, 3) + " " + h.value;
    }), L = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = F(() => !e.touchable || ["", "year"].includes(L.value)), Y = F(() => {
      var se, ye, ce, Ce, Se = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), ze = h.value ? fa(h.value, 2, "0") : "";
      return {
        week: "" + Se,
        year: (ye = c.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: ze
      };
    }), R = F(() => I.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), J = F(() => c.value === C.value), j = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
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
    }, X = (se, ye) => se >= ye && se > 20 ? "x" : "y", H = (se) => {
      if (!Q.value) {
        var {
          clientX: ye,
          clientY: ce
        } = se.touches[0], Ce = ye - n, Se = ce - r;
        t = X(Math.abs(Ce), Math.abs(Se)), a = Ce > 0 ? "prev" : "next";
      }
    }, Z = () => {
      if (!(Q.value || t !== "x")) {
        var se = L.value === "month" ? E : A;
        It(() => {
          se.value.forwardRef(a), pi();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? S : w;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), Se = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        T(e["onUpdate:modelValue"], Se), T(e.onChange, Se);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? P : k, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", Se = ce.value.map((Je) => te(Je).format(Ce)), ze = Se.findIndex((Je) => Je === se);
      ze === -1 ? Se.push(se) : Se.splice(ze, 1), T(e["onUpdate:modelValue"], Se), T(e.onChange, Se);
    }, he = (se, ye) => !c.value || !f.value ? !1 : J.value ? se === "month" ? ye.index < f.value.index : j.value ? ye < z(h.value) : f.value.index > y.value.index : c.value > C.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: Se,
        "onUpdate:modelValue": ze
      } = e;
      if (!(se < 0 || ye)) {
        $.value = he("day", se);
        var Je = C.value + "-" + y.value.index + "-" + se, fn = te(Je).format("YYYY-MM-DD");
        ce ? ae(fn, "day") : Ce ? oe(fn, "day") : (T(ze, fn), T(Se, fn));
      }
    }, Ye = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: Se,
        onChange: ze,
        onPreview: Je,
        "onUpdate:modelValue": fn
      } = e;
      if ($.value = he("month", se), ye === "month" && !ce) {
        var Ca = C.value + "-" + se.index;
        Ce ? ae(Ca, "month") : Se ? oe(Ca, "month") : (T(fn, Ca), T(ze, Ca));
      } else
        y.value = se, T(Je, z(C.value), z(y.value.index));
      d.value = !1;
    }, en = (se) => {
      C.value = "" + se, u.value = !1, d.value = !0, T(e.onPreview, z(C.value), z(y.value.index));
    }, on = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        C.value = "" + (z(C.value) + ce);
      else {
        var Ce = z(y.value.index) + ce;
        Ce < 1 && (C.value = "" + (z(C.value) - 1), Ce = 12), Ce > 12 && (C.value = "" + (z(C.value) + 1), Ce = 1), y.value = vt.find((Se) => z(Se.index) === Ce);
      }
      T(e.onPreview, z(C.value), z(y.value.index));
    }, Ae = () => (e.multiple || e.range) && !be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, vn = (se) => be(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Bd = (se, ye) => {
      var ce = ye === "month" ? S : w, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = se.map((fn) => te(fn).format(Ce)).slice(0, 2), ze = ce.value.some((fn) => vn(fn));
      if (!ze) {
        ce.value = Se;
        var Je = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Je && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Nd = (se, ye) => {
      var ce = ye === "month" ? P : k, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = Array.from(new Set(se.map((ze) => te(ze).format(Ce))));
      ce.value = Se.filter((ze) => ze !== "Invalid Date");
    }, Dd = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!vn(ye)) {
        var [ce, Ce, Se] = ye.split("-"), ze = vt.find((Je) => Je.index === Ce);
        f.value = ze, c.value = ce, h.value = Se, y.value = ze, C.value = ce;
      }
    }, pi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!Ae() || vn(se) || !se))
        if (e.range) {
          if (!be(se))
            return;
          v.value = se.length !== 1, Bd(se, e.type);
        } else if (e.multiple) {
          if (!be(se))
            return;
          Nd(se, e.type);
        } else
          Dd(se);
    }, {
      immediate: !0
    }), ie(L, pi), {
      n: ep,
      classes: np,
      monthPanelEl: E,
      dayPanelEl: A,
      reverse: $,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: C,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: p,
      getDateTitle: b,
      getPanelType: L,
      getChoose: I,
      getPreview: B,
      componentProps: V,
      slotProps: Y,
      formatRange: R,
      clickEl: K,
      handleTouchstart: N,
      handleTouchmove: H,
      handleTouchend: Z,
      getChooseDay: pe,
      getChooseMonth: Ye,
      getChooseYear: en,
      checkPreview: on
    };
  }
});
eu.render = rp;
const Br = eu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var Kw = Br;
function ko() {
  return ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ko.apply(this, arguments);
}
function ap(e) {
  return ["left", "center", "right"].includes(e);
}
var tp = ko({
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
    validator: ap
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
}, qe(_a, [
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
function $o() {
  return $o = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, $o.apply(this, arguments);
}
var {
  n: op,
  classes: ip
} = ee("dialog");
function lp(e, n) {
  var r = le("var-button"), a = le("var-popup");
  return g(), me(
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
          style: $o({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: m(e.n("title"))
          },
          [W(e.$slots, "title", {}, () => [ge(
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
            style: q({
              textAlign: e.messageAlign
            })
          },
          [W(e.$slots, "default", {}, () => [ge(
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
          [e.cancelButton ? (g(), me(
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
              default: ve(() => [ge(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : _("v-if", !0), e.confirmButton ? (g(), me(
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
              default: ve(() => [ge(
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
var nu = x({
  name: "VarDialog",
  components: {
    VarPopup: mn,
    VarButton: xe
  },
  inheritAttrs: !1,
  props: tp,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => T(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (T(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        T(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (T(s), l != null) {
        l("confirm", a);
        return;
      }
      T(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (T(s), l != null) {
        l("cancel", a);
        return;
      }
      T(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), ie(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: op,
      classes: ip,
      pack: Fe,
      dt: Mt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: we
    };
  }
});
nu.render = lp;
const lr = nu;
function wt() {
  return wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wt.apply(this, arguments);
}
var Qn, Ct = {};
function sp(e) {
  return e === void 0 && (e = {}), Xe(e) ? wt({}, Ct, {
    message: e
  }) : wt({}, Ct, e);
}
function ma(e) {
  return Ko() ? new Promise((n) => {
    ma.close();
    var r = sp(e), a = Me(r);
    a.teleport = "body", Qn = a;
    var {
      unmountInstance: t
    } = Ua(lr, a, {
      onConfirm: () => {
        T(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        T(a.onCancel), n("cancel");
      },
      onClose: () => {
        T(a.onClose), n("close");
      },
      onClosed: () => {
        T(a.onClosed), t(), Qn === a && (Qn = null);
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
function up(e) {
  Ct = e;
}
function dp() {
  Ct = {};
}
function vp() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Ee().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ma, {
  setDefaultOptions: up,
  resetDefaultOptions: dp,
  close: vp
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
ma.install = function(e) {
  e.component(lr.name, lr);
};
ma.Component = lr;
var Xw = lr, fp = {
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
function Va() {
  return Va = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Va.apply(this, arguments);
}
var {
  n: cp,
  classes: mp
} = ee("divider");
function pp(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (g(), O(
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
var ru = x({
  name: "VarDivider",
  props: fp,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Me({
      withText: !1
    }), t = F(() => xt(e.inset) ? e.inset : !0), o = F(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (xt(l) || l === 0)
        return Va({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Va({}, d, {
        height: "calc(80% - " + we(f) + ")"
      }) : Va({}, d, {
        width: "calc(100% - " + we(f) + ")",
        left: v > 0 ? we(f) : we(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ue(() => {
      i();
    }), jo(() => {
      i();
    }), Va({
      n: cp,
      classes: mp
    }, Fd(a), {
      style: o,
      isInset: t
    });
  }
});
ru.render = pp;
const Nr = ru;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var Zw = Nr;
function hp(e) {
  return ["start", "end"].includes(e);
}
var gp = {
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
    validator: hp
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Wi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yp(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Wi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Wi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: bp
} = ee("form");
function wp(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var au = x({
  name: "VarForm",
  props: gp,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Zf(), o = (d, v) => {
      setTimeout(() => {
        var f = wa(v), c = f === window ? 0 : $i(f), h = $i(v) - c - Ne(e.scrollToErrorOffsetY);
        qa(f, {
          top: h,
          animation: eo
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = yp(function* () {
        var v = yield Promise.all(a.map((C) => {
          var {
            validate: $
          } = C;
          return $();
        }));
        if (e.scrollToError) {
          var [, f] = Kd(v, (C) => C === !1, e.scrollToError), c = f > -1;
          if (c) {
            var h, y = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(f, y);
          }
          return !c;
        }
        return v.every((C) => C === !0);
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
      n: bp,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
au.render = wp;
const An = au;
An.install = function(e) {
  e.component(An.name, An);
};
An.useValidation = bn;
An.useForm = wn;
var Jw = An;
function ji(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ji(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ji(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function To() {
  return To = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, To.apply(this, arguments);
}
var Cp = "background-image", Sp = "lazy-loading", kp = "lazy-error", Gi = "lazy-attempt", $p = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Po = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ia = [], St = [], tu = Xd(100), Le = {
  loading: Po,
  error: Po,
  attempt: 3,
  throttleWait: 300,
  events: $p
}, ti = qo(et, Le.throttleWait);
function Ut(e, n) {
  e._lazy.arg === Cp ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Tp(e) {
  e._lazy.loading && Ut(e, e._lazy.loading), et();
}
function Pp(e) {
  e._lazy.error && Ut(e, e._lazy.error), e._lazy.state = "error", ii(e), et();
}
function ou(e, n) {
  Ut(e, n), e._lazy.state = "success", ii(e), et();
}
function Op(e) {
  var n;
  St.includes(e) || (St.push(e), (n = Le.events) == null || n.forEach((r) => {
    e.addEventListener(r, ti, {
      passive: !0
    });
  }));
}
function Vp() {
  St.forEach((e) => {
    var n;
    (n = Le.events) == null || n.forEach((r) => {
      e.removeEventListener(r, ti);
    });
  }), St.length = 0;
}
function Mp(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Sp)) != null ? r : Le.loading,
    error: (a = e.getAttribute(kp)) != null ? a : Le.error,
    attempt: e.getAttribute(Gi) ? Number(e.getAttribute(Gi)) : Le.attempt
  };
  e._lazy = To({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Ut(e, Po), T(Le.filter, e._lazy);
}
function Ep(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, tu.add(n), ou(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Pp(e) : iu(e);
  });
}
function iu(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (tu.has(n)) {
      ou(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Tp(e), Ep(e, n);
  }
}
function oi(e) {
  return Oo.apply(this, arguments);
}
function Oo() {
  return Oo = Rt(function* (e) {
    (yield Qd(e)) && iu(e);
  }), Oo.apply(this, arguments);
}
function et() {
  Ia.forEach((e) => oi(e));
}
function Ip(e) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = Rt(function* (e) {
    !Ia.includes(e) && Ia.push(e), _d(e).forEach(Op), yield oi(e);
  }), Vo.apply(this, arguments);
}
function ii(e) {
  Vt(Ia, e), Ia.length === 0 && Vp();
}
function Bp(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function lu(e, n) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = Rt(function* (e, n) {
    Mp(e, n), yield Ip(e);
  }), Mo.apply(this, arguments);
}
function Np(e, n) {
  return Eo.apply(this, arguments);
}
function Eo() {
  return Eo = Rt(function* (e, n) {
    if (!Bp(e, n)) {
      Ia.includes(e) && (yield oi(e));
      return;
    }
    yield lu(e, n);
  }), Eo.apply(this, arguments);
}
function Dp(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: i
  } = e;
  Le.events = n ?? Le.events, Le.loading = r ?? Le.loading, Le.error = a ?? Le.error, Le.attempt = t ?? Le.attempt, Le.throttleWait = o ?? Le.throttleWait, Le.filter = i;
}
var su = {
  mounted: lu,
  unmounted: ii,
  updated: Np,
  install(e, n) {
    Dp(n), ti = qo(et, Le.throttleWait), e.directive("lazy", this);
  }
}, Qw = su;
const kt = su;
function Ap(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var zp = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ap,
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
  n: Lp,
  classes: Rp
} = ee("image"), Up = ["alt", "title", "lazy-error", "lazy-loading"], Yp = ["alt", "title", "src"];
function Fp(e, n) {
  var r = Ke("lazy"), a = Ke("ripple");
  return ke((g(), O(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((g(), O(
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
      Up
    )), [[r, e.src]]) : (g(), O(
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
      Yp
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var uu = x({
  name: "VarImage",
  directives: {
    Lazy: kt,
    Ripple: We
  },
  props: zp,
  setup(e) {
    var n = (t) => {
      var o = t.currentTarget, {
        lazy: i,
        onLoad: l,
        onError: s
      } = e;
      i ? (o._lazy.state === "success" && T(l, t), o._lazy.state === "error" && T(s, t)) : T(l, t);
    }, r = (t) => {
      var {
        lazy: o,
        onError: i
      } = e;
      !o && T(i, t);
    }, a = (t) => {
      T(e.onClick, t);
    };
    return {
      n: Lp,
      classes: Rp,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
uu.render = Fp;
const Dr = uu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var _w = Dr, du = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), vu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Hp() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(du), {
    length: r
  } = gn(vu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var fu = {
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
function qi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Wp(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        qi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        qi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var jp = 250, Gp = 20, {
  n: qp,
  classes: Kp
} = ee("swipe"), Xp = ["onClick"];
function Zp(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [D(
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
    }, () => [e.indicator && e.length ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(g(!0), O(
        Oe,
        null,
        Be(e.length, (r, a) => (g(), O(
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
          Xp
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
var cu = x({
  name: "VarSwipe",
  props: fu,
  setup(e) {
    var n = M(null), r = M(0), a = F(() => e.vertical), t = M(0), o = M(0), i = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Hp(), v = !1, f = -1, c, h, y, C, $, P = (N) => s.find((X) => {
      var {
        index: H
      } = X;
      return H.value === N;
    }), k = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, S = (N) => {
      var X = an(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: H
      } = e;
      return X <= -1 ? H ? -1 : 0 : X >= d.value ? H ? d.value : d.value - 1 : X;
    }, w = (N) => {
      var {
        loop: X
      } = e;
      return N === -1 ? X ? d.value - 1 : 0 : N === d.value ? X ? 0 : d.value - 1 : N;
    }, E = (N) => {
      var {
        loop: X
      } = e;
      return N < 0 ? X ? d.value - 1 : 0 : N > d.value - 1 ? X ? 0 : d.value - 1 : N;
    }, A = (N) => {
      var X = o.value >= r.value, H = o.value <= -t.value, Z = 0, ae = -(t.value - r.value);
      i.value = !0, (X || H) && (i.value = !0, o.value = H ? Z : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), It(() => {
        i.value = !1, T(N);
      });
    }, V = () => {
      l.value = E(z(e.initialIndex));
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
    }, b = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: X,
          clientY: H
        } = N.touches[0];
        c = X, h = H, y = performance.now(), v = !0, B(), A(() => {
          i.value = !0;
        });
      }
    }, L = (N) => {
      var {
        touchable: X,
        vertical: H
      } = e;
      if (!(!v || !X)) {
        var {
          clientX: Z,
          clientY: ae
        } = N.touches[0], oe = Math.abs(Z - c), he = Math.abs(ae - h), pe = p(oe, he), Ye = H ? "vertical" : "horizontal";
        if (pe === Ye) {
          N.preventDefault();
          var en = C !== void 0 ? Z - C : 0, on = $ !== void 0 ? ae - $ : 0;
          C = Z, $ = ae, o.value += H ? on : en, k();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: X
        } = e, H = N ? $ < h : C < c, Z = Math.abs(N ? h - $ : c - C), ae = performance.now() - y <= jp && Z >= Gp, oe = ae ? S(H ? l.value + 1 : l.value - 1) : S();
        v = !1, i.value = !1, C = void 0, $ = void 0, o.value = oe * -r.value;
        var he = l.value;
        l.value = w(oe), I(), he !== l.value && T(X, l.value);
      }
    }, Y = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), I(), setTimeout(() => {
        i.value = !1;
      }));
    }, R = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: H
        } = e, Z = l.value;
        l.value = E(Z + 1), (N == null ? void 0 : N.event) !== !1 && T(H, l.value), A(() => {
          if (Z === d.value - 1 && X) {
            P(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          Z !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, J = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: H
        } = e, Z = l.value;
        l.value = E(Z - 1), (N == null ? void 0 : N.event) !== !1 && T(H, l.value), A(() => {
          if (Z === 0 && X) {
            P(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          Z !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, j = (N, X) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var H = N > l.value ? R : J, Z = Math.abs(N - l.value);
        Array.from({
          length: Z
        }).forEach((ae, oe) => {
          H({
            event: oe === Z - 1 ? X == null ? void 0 : X.event : !1
          });
        });
      }
    }, K = {
      size: r,
      vertical: a
    };
    return u(K), ie(() => d.value, /* @__PURE__ */ Wp(function* () {
      yield Mn(), V(), Y();
    })), Ue(() => {
      window.addEventListener("resize", Y);
    }), mr(() => {
      window.removeEventListener("resize", Y), B();
    }), {
      n: qp,
      classes: Kp,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: b,
      handleTouchmove: L,
      handleTouchend: Q,
      next: R,
      prev: J,
      to: j,
      resize: Y,
      toNumber: z
    };
  }
});
cu.render = Zp;
const zn = cu;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var xw = zn;
function Jp() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(du), {
    index: r
  } = yn(vu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Qp
} = ee("swipe-item");
function _p(e, n) {
  return g(), O(
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
var mu = x({
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Jp(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: Qp,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
mu.render = _p;
const Ln = mu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var eC = Ln;
function Io() {
  return Io = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Io.apply(this, arguments);
}
var xp = Io({
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
}, qe(fu, ["loop", "indicator", "onChange"]), qe(_a, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Ki,
  classes: eh
} = ee("image-preview"), Xi = 12, Zi = 200, nh = 350, Ji = 200, rh = ["src", "alt"];
function ah(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
  return g(), me(
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
          default: ve(() => [(g(!0), O(
            Oe,
            null,
            Be(e.images, (i) => (g(), me(
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
                  [D(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    rh
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
            return [W(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (g(), O(
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
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), me(
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
var pu = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: zn,
    VarSwipeItem: Ln,
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: xp,
  setup(e) {
    var n = M(!1), r = F(() => {
      var {
        images: B,
        current: p
      } = e, b = B.findIndex((L) => L === p);
      return b >= 0 ? b : 0;
    }), a = M(1), t = M(0), o = M(0), i = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (B, p) => {
      var {
        clientX: b,
        clientY: L
      } = B, {
        clientX: Q,
        clientY: Y
      } = p;
      return Math.abs(Math.sqrt(Math.pow(Q - b, 2) + Math.pow(Y - L, 2)));
    }, c = (B, p) => ({
      clientX: B.clientX,
      clientY: B.clientY,
      timestamp: Date.now(),
      target: p
    }), h = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Ji);
    }, y = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, C = (B) => d ? f(d, B) <= Xi && B.timestamp - d.timestamp <= Zi && d.target === B.target : !1, $ = (B) => !B || !u || !d ? !1 : f(u, d) <= Xi && Date.now() - d.timestamp < nh && (B === u.target || B.parentNode === u.target), P = (B) => {
      v = window.setTimeout(() => {
        $(B.target) && I(), u = null;
      }, Zi);
    }, k = (B) => {
      v && window.clearTimeout(v);
      var {
        touches: p
      } = B, b = c(p[0], B.currentTarget);
      if (u = b, C(b)) {
        a.value > 1 ? y() : h();
        return;
      }
      d = b;
    }, S = (B) => {
      var {
        offsetWidth: p,
        offsetHeight: b
      } = B, {
        naturalWidth: L,
        naturalHeight: Q
      } = B.querySelector("." + Ki("image"));
      return {
        width: p,
        height: b,
        imageRadio: Q / L,
        rootRadio: b / p,
        zoom: z(e.zoom)
      };
    }, w = (B) => {
      var {
        zoom: p,
        imageRadio: b,
        rootRadio: L,
        width: Q,
        height: Y
      } = S(B);
      if (!b)
        return 0;
      var R = b > L ? Y / b : Q;
      return Math.max(0, (p * R - Q) / 2) / p;
    }, E = (B) => {
      var {
        zoom: p,
        imageRadio: b,
        rootRadio: L,
        width: Q,
        height: Y
      } = S(B);
      if (!b)
        return 0;
      var R = b > L ? Y : Q * b;
      return Math.max(0, (p * R - Y) / 2) / p;
    }, A = (B, p, b) => B + p >= b ? b : B + p <= -b ? -b : B + p, V = (B) => {
      if (d) {
        var p = B.currentTarget, {
          touches: b
        } = B, L = c(b[0], p);
        if (a.value > 1) {
          var Q = L.clientX - d.clientX, Y = L.clientY - d.clientY, R = w(p), J = E(p);
          t.value = A(t.value, Q, R), o.value = A(o.value, Y, J);
        }
        d = L;
      }
    }, I = () => {
      if (a.value > 1) {
        y(), setTimeout(() => T(e["onUpdate:show"], !1), Ji);
        return;
      }
      T(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: Ki,
      classes: eh,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: k,
      handleTouchmove: V,
      handleTouchend: P,
      close: I
    };
  }
});
pu.render = ah;
const sr = pu;
var _n;
function Hn(e) {
  if (Ko()) {
    Hn.close();
    var n = Xe(e) ? {
      images: [e]
    } : be(e) ? {
      images: e
    } : e, r = Me(n);
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = Ua(sr, r, {
      onClose: () => T(r.onClose),
      onClosed: () => {
        T(r.onClosed), a(), _n === r && (_n = null);
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
    _n = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
sr.install = function(e) {
  e.component(sr.name, sr);
};
Hn.install = function(e) {
  e.component(sr.name, sr);
};
Hn.Component = sr;
var nC = sr, ft = {
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
function Qi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function _i(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Qi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Qi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: th,
  classes: oh
} = ee("sticky");
function ih(e, n) {
  return g(), O(
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
    [D(
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
var hu = x({
  name: "VarSticky",
  props: ft,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), o = M("0px"), i = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => Ne(e.offsetTop)), c, h = () => {
      var {
        cssMode: k,
        disabled: S
      } = e;
      if (!S) {
        var w = 0;
        if (c !== window) {
          var {
            top: E
          } = c.getBoundingClientRect();
          w = E;
        }
        var A = r.value, V = n.value, {
          top: I,
          left: B
        } = V.getBoundingClientRect(), p = I - w;
        return p <= f.value ? (k || (i.value = V.offsetWidth + "px", l.value = V.offsetHeight + "px", t.value = w + f.value + "px", o.value = B + "px", s.value = A.offsetWidth + "px", u.value = A.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: p,
          isFixed: !1
        });
      }
    }, y = () => {
      var k = h();
      k && T(e.onScroll, k.offsetTop, k.isFixed);
    }, C = /* @__PURE__ */ function() {
      var k = _i(function* () {
        a.value = !1, yield tv(), h();
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var k = _i(function* () {
        yield Mn(), c = wa(n.value), c !== window && c.addEventListener("scroll", y), window.addEventListener("scroll", y), y();
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), P = () => {
      c !== window && c.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
    return ie(() => e.disabled, C), Ho($), Wo(P), Ue($), mr(P), {
      n: th,
      classes: oh,
      resize: C,
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
hu.render = ih;
const Rn = hu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var rC = Rn, gu = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), yu = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function lh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(gu), {
    length: r
  } = gn(yu);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function sh() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(gu), {
    index: r
  } = yn(yu);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var uh = {
  index: {
    type: [Number, String]
  }
}, {
  n: dh,
  classes: vh
} = ee("index-anchor");
function fh(e, n) {
  return g(), me(
    Ra(e.sticky ? e.n("$-sticky") : e.Transition),
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
        [W(e.$slots, "default", {}, () => [ge(
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
var bu = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: uh,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = sh(), t = M(0), o = M(!1), i = F(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, h = (C) => {
      o.value = C;
    }, y = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(y), {
      n: dh,
      classes: vh,
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
bu.render = fh;
const Ar = bu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var aC = Ar, ch = {
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
function xi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        xi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        xi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: mh,
  classes: ph
} = ee("index-bar"), hh = ["onClick"];
function gh(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [W(e.$slots, "default"), D(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: q({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(g(!0), O(
        Oe,
        null,
        Be(e.anchorNameList, (r) => (g(), O(
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
          hh
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
var wu = x({
  name: "VarIndexBar",
  props: ch,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = lh(), t = M(""), o = M(null), i = M(null), l = M([]), s = M(), u = F(() => e.sticky), d = F(() => e.cssMode), v = F(() => Ne(e.stickyOffsetTop)), f = F(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = (k, S) => {
      var w = Go(k) ? k.name.value : k;
      w === s.value || w === void 0 || (s.value = w, (S == null ? void 0 : S.event) !== !1 && T(e.onChange, w));
    }, y = () => {
      if (!("getBoundingClientRect" in o.value))
        return 0;
      var {
        top: k
      } = o.value.getBoundingClientRect(), {
        scrollTop: S
      } = o.value, {
        top: w
      } = i.value.getBoundingClientRect();
      return S - k + w;
    }, C = () => {
      var k = Et(o.value), S = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, w = y();
      r.forEach((E, A) => {
        var V = E.ownTop.value, I = k - V + v.value - w, B = A === r.length - 1 ? S : r[A + 1].ownTop.value - E.ownTop.value;
        I >= 0 && I < B && t.value === "" && (A && !e.cssMode && r[A - 1].setDisabled(!0), E.setDisabled(!1), h(E));
      });
    }, $ = /* @__PURE__ */ function() {
      var k = Xt(function* (S) {
        var {
          anchorName: w,
          manualCall: E = !1,
          options: A
        } = S;
        if (E && T(e.onClick, w), w !== s.value) {
          var V = r.find((b) => {
            var {
              name: L
            } = b;
            return w === L.value;
          });
          if (V) {
            var I = y(), B = V.ownTop.value - v.value + I, p = Xo(o.value);
            t.value = w, h(w, A), yield qa(o.value, {
              left: p,
              top: B,
              animation: Al,
              duration: z(e.duration)
            }), It(() => {
              t.value = "";
            });
          }
        }
      });
      return function(w) {
        return k.apply(this, arguments);
      };
    }(), P = (k, S) => {
      Pn(() => $({
        anchorName: k,
        options: S
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Xt(function* () {
      yield Mn(), r.forEach((k) => {
        var {
          name: S,
          setOwnTop: w
        } = k;
        S.value && l.value.push(S.value), w();
      });
    })), Ue(/* @__PURE__ */ Xt(function* () {
      yield Mn(), o.value = wa(i.value), o.value.addEventListener("scroll", C);
    })), Pt(() => {
      T(o.value.removeEventListener, "scroll", C);
    }), {
      n: mh,
      classes: ph,
      barEl: i,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: P,
      anchorClick: $
    };
  }
});
wu.render = gh;
const zr = wu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var tC = zr;
function yh(e) {
  return ["text", "password", "number"].includes(e);
}
var bh = {
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
    validator: yh
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
  n: Zt,
  classes: wh
} = ee("input"), Ch = ["id", "disabled", "type", "value", "maxlength", "rows"], Sh = ["id", "disabled", "type", "value", "maxlength"], kh = ["for"];
function $h(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
  return g(), O(
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
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (g(), O(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (g(), O(
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
            })
          },
          `
        `,
          46,
          Ch
        )) : (g(), O(
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
          Sh
        )), D(
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
          kh
        )],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (g(), me(
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
    ), e.line ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
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
var Cu = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  props: bh,
  setup(e) {
    var n = M("var-input-" + Aa().uid), r = M(null), a = M(!1), t = F(() => {
      var {
        maxlength: p,
        modelValue: b
      } = e;
      return p ? Nn(b) ? "0 / " + p : String(b).length + "/" + p : "";
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
      Ee(() => {
        var {
          validateTrigger: b,
          rules: L,
          modelValue: Q
        } = e;
        s(b, p, L, Q);
      });
    }, f = () => {
      var {
        hint: p,
        modelValue: b
      } = e;
      if (!p && !Nn(b))
        return Zt("--placeholder-hidden");
      if (p && (!Nn(b) || a.value))
        return Zt("--placeholder-hint");
    }, c = (p) => {
      a.value = !0, T(e.onFocus, p), v("onFocus");
    }, h = (p) => {
      a.value = !1, T(e.onBlur, p), v("onBlur");
    }, y = (p) => {
      var b = p.target, {
        value: L
      } = b;
      L = S(k(L)), b.value = L, T(e["onUpdate:modelValue"], L), T(e.onInput, L, p), v("onInput");
    }, C = (p) => {
      var b = p.target, {
        value: L
      } = b;
      L = S(k(L)), b.value = L, T(e.onChange, L, p), v("onChange");
    }, $ = () => {
      var {
        disabled: p,
        readonly: b,
        clearable: L,
        onClear: Q
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || p || b || !L || (T(e["onUpdate:modelValue"], ""), T(Q, ""), v("onClear"));
    }, P = (p) => {
      var {
        disabled: b,
        onClick: L
      } = e;
      i != null && i.disabled.value || b || (T(L, p), v("onClick"));
    }, k = (p) => e.modelModifiers.trim ? p.trim() : p, S = (p) => e.maxlength ? p.slice(0, z(e.maxlength)) : p, w = (p) => {
      var {
        disabled: b,
        readonly: L
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || b || L || p.stopPropagation();
    }, E = () => {
      T(e["onUpdate:modelValue"], ""), d();
    }, A = () => u(e.rules, e.modelValue), V = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, I = () => {
      r.value.blur();
    }, B = {
      reset: E,
      validate: A,
      resetValidation: d
    };
    return T(o, B), Ue(() => {
      e.autofocus && V();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: Zt,
      classes: wh,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: h,
      handleInput: y,
      handleChange: C,
      handleClear: $,
      handleClick: P,
      handleTouchstart: w,
      validate: A,
      resetValidation: d,
      reset: E,
      focus: V,
      blur: I
    };
  }
});
Cu.render = $h;
const ur = Cu;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var oC = ur;
function Th(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ph(e) {
  return ["always", "hover", "none"].includes(e);
}
var Oh = {
  type: {
    type: String,
    default: "default",
    validator: Th
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
    validator: Ph
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
  n: Vh,
  classes: Mh
} = ee("link");
function Eh(e, n) {
  return g(), me(
    Ra(e.tag),
    Ve(e.linkProps, {
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
var Su = x({
  name: "VarLink",
  props: Oh,
  setup(e) {
    var n = F(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = F(() => {
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
      o || T(i, t);
    };
    return {
      n: Vh,
      classes: Mh,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
Su.render = Eh;
const Lr = Su;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var iC = Lr, Ih = {
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
function el(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bh(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        el(o, a, t, i, l, "next", s);
      }
      function l(s) {
        el(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Nh,
  classes: Dh
} = ee("list");
function Ah(e, n) {
  var r = le("var-loading"), a = Ke("ripple");
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [W(e.$slots, "default"), e.loading ? W(e.$slots, "loading", {
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
    )]) : _("v-if", !0), e.finished ? W(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? W(e.$slots, "error", {
      key: 2
    }, () => [ke((g(), O(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [ge(
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
var ku = x({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: $n
  },
  props: Ih,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      T(e["onUpdate:error"], !1), T(e["onUpdate:loading"], !0), T(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = Bh(function* () {
        yield Ee();
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
    return Ue(() => {
      a = wa(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), mr(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: Fe,
      listEl: n,
      detectorEl: r,
      dt: Mt,
      isNumber: an,
      load: t,
      check: i,
      n: Nh,
      classes: Dh
    };
  }
});
ku.render = Ah;
const Rr = ku;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var lC = Rr, zh = {
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
  classes: Lh,
  n: nl
} = ee("loading-bar");
const Rh = x({
  name: "VarLoadingBar",
  props: zh,
  setup(e) {
    return () => re("div", {
      class: Lh(nl(), [e.error, nl("--error")]),
      style: {
        zIndex: sn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
var $u, rl, Tu = {}, Uh = {
  value: 0,
  opacity: 0,
  error: !1
}, Ge = Me(Uh), Yh = (e) => {
  Object.assign(Ge, e);
}, Fh = (e) => {
  Object.assign(Ge, e), Tu = e;
}, Hh = () => {
  Object.keys(Tu).forEach((e) => {
    Ge[e] !== void 0 && (Ge[e] = void 0);
  });
}, Pu = () => {
  $u = window.setTimeout(() => {
    if (!(Ge.value >= 95)) {
      var e = Math.random();
      Ge.value < 70 && (e = Math.round(5 * Math.random())), Ge.value += e, Pu();
    }
  }, 200);
}, Wh = () => {
  rl || (rl = !0, Ua(Rh, Ge)), (!Ge.error || Ge.value === 100) && (Ge.value = 0), setTimeout(() => {
    Ge.opacity = 1;
  }, 200), Pu();
}, jh = () => {
  Ge.value = 100, setTimeout(() => {
    Ge.opacity = 0, setTimeout(() => {
      Ge.error = !1;
    }, 250);
  }, 300), window.clearTimeout($u);
}, Gh = () => {
  Ge.error = !0, $t.start(), setTimeout($t.finish, 300);
}, $t = {
  start: Wh,
  finish: jh,
  error: Gh,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Yh,
  setDefaultOptions: Fh,
  resetDefaultOptions: Hh
}, sC = $t;
const Bo = $t;
function qh(e) {
  return ["click", "hover"].includes(e);
}
function Kh(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Xh = {
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
    validator: qh
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Kh
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
}, Zh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ct(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Zh[n];
  });
}
var Un = "top", cr = "bottom", pa = "right", dr = "left", Yt = "auto", Ft = [Un, cr, pa, dr], Ht = "start", Xa = "end", Jh = "clippingParents", Ou = "viewport", Ya = "popper", Qh = "reference", al = /* @__PURE__ */ Ft.reduce(function(e, n) {
  return e.concat([n + "-" + Ht, n + "-" + Xa]);
}, []), Vu = /* @__PURE__ */ [].concat(Ft, [Yt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ht, n + "-" + Xa]);
}, []), _h = "beforeRead", xh = "read", eg = "afterRead", ng = "beforeMain", rg = "main", ag = "afterMain", tg = "beforeWrite", og = "write", ig = "afterWrite", No = [_h, xh, eg, ng, rg, ag, tg, og, ig];
function Yn(e) {
  return e.split("-")[0];
}
var lg = {
  start: "end",
  end: "start"
};
function tl(e) {
  return e.replace(/start|end/g, function(n) {
    return lg[n];
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
function ha(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function pn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function li(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function hr(e) {
  return ((ha(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var ja = Math.max, ol = Math.min, Ba = Math.round;
function Do() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Mu() {
  return !/^((?!chrome|android).)*safari/i.test(Do());
}
function Na(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && pn(e) && (t = e.offsetWidth > 0 && Ba(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ba(a.height) / e.offsetHeight || 1);
  var i = ha(e) ? Cn(e) : window, l = i.visualViewport, s = !Mu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function si(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function ui(e) {
  return Na(hr(e)).left + si(e).scrollLeft;
}
function sg(e, n) {
  var r = Cn(e), a = hr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Mu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + ui(e),
    y: s
  };
}
function On(e) {
  return Cn(e).getComputedStyle(e);
}
function ug(e) {
  var n, r = hr(e), a = si(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = ja(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = ja(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + ui(e), s = -a.scrollTop;
  return On(t || r).direction === "rtl" && (l += ja(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function In(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Wt(e) {
  return In(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (li(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    hr(e)
  );
}
function di(e) {
  var n = On(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Eu(e) {
  return ["html", "body", "#document"].indexOf(In(e)) >= 0 ? e.ownerDocument.body : pn(e) && di(e) ? e : Eu(Wt(e));
}
function Ga(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Eu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], di(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ga(Wt(i)))
  );
}
function dg(e) {
  return ["table", "td", "th"].indexOf(In(e)) >= 0;
}
function il(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  On(e).position === "fixed" ? null : e.offsetParent;
}
function vg(e) {
  var n = /firefox/i.test(Do()), r = /Trident/i.test(Do());
  if (r && pn(e)) {
    var a = On(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Wt(e);
  for (li(t) && (t = t.host); pn(t) && ["html", "body"].indexOf(In(t)) < 0; ) {
    var o = On(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function vi(e) {
  for (var n = Cn(e), r = il(e); r && dg(r) && On(r).position === "static"; )
    r = il(r);
  return r && (In(r) === "html" || In(r) === "body" && On(r).position === "static") ? n : r || vg(e) || n;
}
function fg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && li(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Ao(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function cg(e, n) {
  var r = Na(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function ll(e, n, r) {
  return n === Ou ? Ao(sg(e, r)) : ha(n) ? cg(n, r) : Ao(ug(hr(e)));
}
function mg(e) {
  var n = Ga(Wt(e)), r = ["absolute", "fixed"].indexOf(On(e).position) >= 0, a = r && pn(e) ? vi(e) : e;
  return ha(a) ? n.filter(function(t) {
    return ha(t) && fg(t, a) && In(t) !== "body";
  }) : [];
}
function pg(e, n, r, a) {
  var t = n === "clippingParents" ? mg(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = ll(e, u, a);
    return s.top = ja(d.top, s.top), s.right = ol(d.right, s.right), s.bottom = ol(d.bottom, s.bottom), s.left = ja(d.left, s.left), s;
  }, ll(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Za(e) {
  return e.split("-")[1];
}
function hg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Iu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Yn(a) : null, o = a ? Za(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Un:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case cr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case pa:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case dr:
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
  var u = t ? hg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Ht:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Xa:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function gg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function yg(e) {
  return Object.assign({}, gg(), e);
}
function bg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Bu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Jh : l, u = r.rootBoundary, d = u === void 0 ? Ou : u, v = r.elementContext, f = v === void 0 ? Ya : v, c = r.altBoundary, h = c === void 0 ? !1 : c, y = r.padding, C = y === void 0 ? 0 : y, $ = yg(typeof C != "number" ? C : bg(C, Ft)), P = f === Ya ? Qh : Ya, k = e.rects.popper, S = e.elements[h ? P : f], w = pg(ha(S) ? S : S.contextElement || hr(e.elements.popper), s, d, i), E = Na(e.elements.reference), A = Iu({
    reference: E,
    element: k,
    strategy: "absolute",
    placement: t
  }), V = Ao(Object.assign({}, k, A)), I = f === Ya ? V : E, B = {
    top: w.top - I.top + $.top,
    bottom: I.bottom - w.bottom + $.bottom,
    left: w.left - I.left + $.left,
    right: I.right - w.right + $.right
  }, p = e.modifiersData.offset;
  if (f === Ya && p) {
    var b = p[t];
    Object.keys(B).forEach(function(L) {
      var Q = [pa, cr].indexOf(L) >= 0 ? 1 : -1, Y = [Un, cr].indexOf(L) >= 0 ? "y" : "x";
      B[L] += b[Y] * Q;
    });
  }
  return B;
}
function wg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Vu : s, d = Za(a), v = d ? l ? al : al.filter(function(h) {
    return Za(h) === d;
  }) : Ft, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, y) {
    return h[y] = Bu(e, {
      placement: y,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Yn(y)], h;
  }, {});
  return Object.keys(c).sort(function(h, y) {
    return c[h] - c[y];
  });
}
function Cg(e) {
  if (Yn(e) === Yt)
    return [];
  var n = ct(e);
  return [tl(e), n, tl(n)];
}
function Sg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, y = r.allowedAutoPlacements, C = n.options.placement, $ = Yn(C), P = $ === C, k = s || (P || !h ? [ct(C)] : Cg(C)), S = [C].concat(k).reduce(function(ae, oe) {
      return ae.concat(Yn(oe) === Yt ? wg(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : oe);
    }, []), w = n.rects.reference, E = n.rects.popper, A = /* @__PURE__ */ new Map(), V = !0, I = S[0], B = 0; B < S.length; B++) {
      var p = S[B], b = Yn(p), L = Za(p) === Ht, Q = [Un, cr].indexOf(b) >= 0, Y = Q ? "width" : "height", R = Bu(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Q ? L ? pa : dr : L ? cr : Un;
      w[Y] > E[Y] && (J = ct(J));
      var j = ct(J), K = [];
      if (o && K.push(R[b] <= 0), l && K.push(R[J] <= 0, R[j] <= 0), K.every(function(ae) {
        return ae;
      })) {
        I = p, V = !1;
        break;
      }
      A.set(p, K);
    }
    if (V)
      for (var N = h ? 3 : 1, X = function(oe) {
        var he = S.find(function(pe) {
          var Ye = A.get(pe);
          if (Ye)
            return Ye.slice(0, oe).every(function(en) {
              return en;
            });
        });
        if (he)
          return I = he, "break";
      }, H = N; H > 0; H--) {
        var Z = X(H);
        if (Z === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[a]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const kg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Sg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function $g(e, n, r) {
  var a = Yn(e), t = [dr, Un].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [dr, pa].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Tg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Vu.reduce(function(d, v) {
    return d[v] = $g(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const Pg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tg
};
function Og(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Vg(e) {
  return e === Cn(e) || !pn(e) ? si(e) : Og(e);
}
function Mg(e) {
  var n = e.getBoundingClientRect(), r = Ba(n.width) / e.offsetWidth || 1, a = Ba(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Eg(e, n, r) {
  r === void 0 && (r = !1);
  var a = pn(n), t = pn(n) && Mg(n), o = hr(n), i = Na(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((In(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  di(o)) && (l = Vg(n)), pn(n) ? (s = Na(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = ui(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Ig(e) {
  var n = Na(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Bg(e) {
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
function Ng(e) {
  var n = Bg(e);
  return No.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Dg(e) {
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
var gr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Ag = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', sl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function zg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), sl).filter(function(r, a, t) {
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
          No.indexOf(n.phase) < 0 && console.error(qn(gr, n.name, '"phase"', "either " + No.join(", "), '"' + String(n.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + sl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(qn(Ag, String(n.name), a, a));
      });
    });
  });
}
function Lg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Rg(e) {
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
var ul = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Ug = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", dl = {
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
function Yg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? dl : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, dl, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function($) {
        var P = typeof $ == "function" ? $(d.options) : $;
        y(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: ha(l) ? Ga(l) : l.contextElement ? Ga(l.contextElement) : [],
          popper: Ga(s)
        };
        var k = Ng(Rg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = k.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Lg([].concat(k, d.options.modifiers), function(p) {
            var b = p.name;
            return b;
          });
          if (zg(S), Yn(d.options.placement) === Yt) {
            var w = d.orderedModifiers.find(function(p) {
              var b = p.name;
              return b === "flip";
            });
            w || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var E = On(s), A = E.marginTop, V = E.marginRight, I = E.marginBottom, B = E.marginLeft;
          [A, V, I, B].some(function(p) {
            return parseFloat(p);
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
          var $ = d.elements, P = $.reference, k = $.popper;
          if (!vl(P, k)) {
            process.env.NODE_ENV !== "production" && console.error(ul);
            return;
          }
          d.rects = {
            reference: Eg(P, vi(k), d.options.strategy === "fixed"),
            popper: Ig(k)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var S = 0, w = 0; w < d.orderedModifiers.length; w++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Ug);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, w = -1;
              continue;
            }
            var E = d.orderedModifiers[w], A = E.fn, V = E.options, I = V === void 0 ? {} : V, B = E.name;
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
      update: Dg(function() {
        return new Promise(function(C) {
          c.forceUpdate(), C(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!vl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(ul), c;
    c.setOptions(u).then(function(C) {
      !f && u.onFirstUpdate && u.onFirstUpdate(C);
    });
    function h() {
      d.orderedModifiers.forEach(function(C) {
        var $ = C.name, P = C.options, k = P === void 0 ? {} : P, S = C.effect;
        if (typeof S == "function") {
          var w = S({
            state: d,
            name: $,
            instance: c,
            options: k
          }), E = function() {
          };
          v.push(w || E);
        }
      });
    }
    function y() {
      v.forEach(function(C) {
        return C();
      }), v = [];
    }
    return c;
  };
}
var lt = {
  passive: !0
};
function Fg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, lt);
  }), l && s.addEventListener("resize", r.update, lt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, lt);
    }), l && s.removeEventListener("resize", r.update, lt);
  };
}
const Hg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Fg,
  data: {}
};
function Wg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Iu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const jg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Wg,
  data: {}
};
var Gg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ba(n * t) / t || 0,
    y: Ba(r * t) / t || 0
  };
}
function fl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, c = f === void 0 ? 0 : f, h = i.y, y = h === void 0 ? 0 : h, C = typeof d == "function" ? d({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = C.x, y = C.y;
  var $ = i.hasOwnProperty("x"), P = i.hasOwnProperty("y"), k = dr, S = Un, w = window;
  if (u) {
    var E = vi(r), A = "clientHeight", V = "clientWidth";
    if (E === Cn(r) && (E = hr(r), On(E).position !== "static" && l === "absolute" && (A = "scrollHeight", V = "scrollWidth")), E = E, t === Un || (t === dr || t === pa) && o === Xa) {
      S = cr;
      var I = v && E === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[A]
      );
      y -= I - a.height, y *= s ? 1 : -1;
    }
    if (t === dr || (t === Un || t === cr) && o === Xa) {
      k = pa;
      var B = v && E === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[V]
      );
      c -= B - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && Gg), b = d === !0 ? qg({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = b.x, y = b.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[S] = P ? "0" : "", L[k] = $ ? "0" : "", L.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[S] = P ? y + "px" : "", n[k] = $ ? c + "px" : "", n.transform = "", n));
}
function Kg(e) {
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
    placement: Yn(n.placement),
    variation: Za(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, fl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
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
const Xg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Kg,
  data: {}
};
function Zg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !pn(o) || !In(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Jg(e) {
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
const Qg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Zg,
  effect: Jg,
  requires: ["computeStyles"]
};
var _g = [Hg, jg, Xg, Qg], xg = /* @__PURE__ */ Yg({
  defaultModifiers: _g
});
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
function cl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ml(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        cl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        cl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Nu(e) {
  var n = M(null), r = M(null), a = M(!1), t = M({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = xa(() => a.value, 1), i = null, l = !1, s = !1, u = () => {
    var {
      width: w,
      height: E
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(w),
      height: Ne(E)
    };
  }, d = () => {
    e.trigger === "hover" && (s = !0, k());
  }, v = /* @__PURE__ */ function() {
    var w = ml(function* () {
      e.trigger === "hover" && (s = !1, yield Mn(), !l && S());
    });
    return function() {
      return w.apply(this, arguments);
    };
  }(), f = () => {
    e.trigger === "hover" && (l = !0);
  }, c = /* @__PURE__ */ function() {
    var w = ml(function* () {
      e.trigger === "hover" && (l = !1, yield Mn(), !s && S());
    });
    return function() {
      return w.apply(this, arguments);
    };
  }(), h = () => {
    k();
  }, y = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  }, C = () => {
    u();
    var w = {
      x: Ne(e.offsetX),
      y: Ne(e.offsetY)
    };
    switch (e.placement) {
      case "cover-top":
        return {
          placement: "bottom",
          skidding: w.x,
          distance: w.y - t.value.height
        };
      case "cover-top-start":
        return {
          placement: "bottom-start",
          skidding: w.x,
          distance: w.y - t.value.height
        };
      case "cover-top-end":
        return {
          placement: "bottom-end",
          skidding: w.x,
          distance: w.y - t.value.height
        };
      case "cover-bottom":
        return {
          placement: "top",
          skidding: w.x,
          distance: -w.y - t.value.height
        };
      case "cover-bottom-start":
        return {
          placement: "top-start",
          skidding: w.x,
          distance: -w.y - t.value.height
        };
      case "cover-bottom-end":
        return {
          placement: "top-end",
          skidding: w.x,
          distance: -w.y - t.value.height
        };
      case "cover-left":
        return {
          placement: "right",
          skidding: w.y,
          distance: w.x - t.value.width
        };
      case "cover-right":
        return {
          placement: "left",
          skidding: w.y,
          distance: -w.x - t.value.width
        };
      case "left":
      case "left-start":
      case "left-end":
        return {
          placement: e.placement,
          skidding: w.y,
          distance: -w.x
        };
      case "top":
      case "top-start":
      case "top-end":
        return {
          placement: e.placement,
          skidding: w.x,
          distance: -w.y
        };
      case "bottom":
      case "bottom-start":
      case "bottom-end":
        return {
          placement: e.placement,
          skidding: w.x,
          distance: w.y
        };
      case "right":
      case "right-start":
      case "right-end":
        return {
          placement: e.placement,
          skidding: w.y,
          distance: w.x
        };
    }
  }, $ = () => {
    var {
      placement: w,
      skidding: E,
      distance: A
    } = C(), V = [Tt({}, kg, {
      enabled: a.value
    }), Tt({}, Pg, {
      options: {
        offset: [E, A]
      }
    })];
    return {
      placement: w,
      modifiers: V
    };
  }, P = () => {
    i.setOptions($());
  }, k = () => {
    var {
      disabled: w
    } = e;
    w || (a.value = !0, T(e["onUpdate:show"], !0));
  }, S = () => {
    a.value = !1, T(e["onUpdate:show"], !1);
  };
  return ie(() => e.show, (w) => {
    a.value = w ?? !1;
  }, {
    immediate: !0
  }), ie(() => e.offsetX, P), ie(() => e.offsetY, P), ie(() => e.placement, P), ie(() => a.value, (w) => {
    w ? (P(), T(e.onOpen)) : T(e.onClose);
  }), ie(() => e.trigger, (w) => {
    w === "click" ? document.addEventListener("click", y, {
      capture: !0
    }) : document.removeEventListener("click", y);
  }), ie(() => e.disabled, S), Ue(() => {
    i = xg(n.value, r.value, $()), e.trigger === "click" && document.addEventListener("click", y, {
      capture: !0
    });
  }), mr(() => {
    document.removeEventListener("click", y), i.destroy();
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
    resize: P,
    open: k,
    close: S
  };
}
var {
  n: ey,
  classes: ny
} = ee("menu");
function ry(e, n) {
  return g(), O(
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
    [W(e.$slots, "default"), (g(), me(
      za,
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
          default: ve(() => [ke(D(
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
          ), [[La, e.show]])]),
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
var Du = x({
  name: "VarMenu",
  props: Xh,
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
      resize: h
    } = Nu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: we,
      n: ey,
      classes: ny,
      handleHostClick: i,
      handleHostMouseenter: l,
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
Du.render = ry;
const Fn = Du;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var uC = Fn, Au = Symbol("SELECT_BIND_OPTION_KEY"), zu = Symbol("SELECT_COUNT_OPTION_KEY");
function ay() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Au), {
    length: r
  } = gn(zu);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function ty() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Au), {
    index: r
  } = yn(zu);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var oy = {
  label: {},
  value: {}
}, {
  n: iy,
  classes: ly
} = ee("option");
function sy(e, n) {
  var r = le("var-checkbox"), a = Ke("ripple");
  return ke((g(), O(
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
    [D(
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
    ), e.multiple ? (g(), me(
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
      [W(e.$slots, "default", {}, () => [ge(
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
var Lu = x({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: or
  },
  props: oy,
  setup(e) {
    var n = M(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: i
    } = ty(), {
      wrapWidth: l,
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
    }), i(h), {
      n: iy,
      classes: ly,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Lu.render = sy;
const Ur = Lu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var dC = Ur, uy = {
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
function dy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ot(e);
}
var {
  n: pl
} = ee("overlay");
const Yr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: uy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = xa(() => e.show, 1), {
      disabled: o
    } = Zo(), i = () => {
      T(e.onClick), T(e["onUpdate:show"], !1);
    };
    Bt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: pl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [T(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(De, {
        name: pl("--fade")
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
        return re(za, {
          to: u,
          disabled: o.value
        }, dy(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var vC = Yr, vy = {
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
  n: fy,
  classes: cy
} = ee("pagination"), my = ["item-mode", "onClick"];
function py(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), i = Ke("ripple");
  return g(), O(
    "ul",
    {
      class: m(e.n())
    },
    [ke((g(), O(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [W(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (g(), O(
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
          onKeydown: n[3] || (n[3] = gi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), D("span", null, [ge(
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
    )) : (g(!0), O(
      Oe,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => ke((g(), O(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [ge(
          ne(l),
          1
          /* TEXT */
        )],
        10,
        my
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((g(), O(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [W(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
      /* CLASS */
    )), [[i, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (g(), O(
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
          menu: ve(() => [(g(!0), O(
            Oe,
            null,
            Be(e.sizeOption, (l, s) => ke((g(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ve(() => [ge(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (g(), O(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [ge(
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
          onKeydown: n[9] || (n[9] = gi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (g(), O(
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
var Ru = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: ur
  },
  directives: {
    Ripple: We
  },
  props: vy,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), o = M(!1), i = M(z(e.current) || 1), l = M(z(e.size) || 10), s = M([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(z(e.total) / z(l.value))), v = F(() => {
      var S = l.value * (i.value - 1) + 1, w = Math.min(l.value * i.value, z(e.total));
      return [S, w];
    }), f = F(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (S, w) => an(S) ? !1 : w === 1 ? t.value : o.value, h = (S, w) => an(S) ? "basic" : w === 1 ? "head" : "tail", y = (S, w) => {
      S === i.value || e.disabled || (an(S) ? i.value = S : S === "prev" ? i.value > 1 && (i.value -= 1) : S === "next" ? i.value < d.value && (i.value += 1) : S === "..." && (w === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, C = () => {
      e.disabled || (n.value = !0);
    }, $ = (S) => {
      l.value = S, n.value = !1;
    }, P = (S) => {
      var w = /^[1-9][0-9]*$/;
      return w.test(S);
    }, k = (S, w, E) => {
      if (E.target.blur(), P(w)) {
        var A = z(w);
        A > d.value && (A = d.value, a.value = "" + A), A !== i.value && (i.value = A);
      }
      S === "quick" && (r.value = ""), S === "simple" && !P(w) && (a.value = "" + i.value);
    };
    return ie([() => e.current, () => e.size], (S) => {
      var [w, E] = S;
      i.value = z(w) || 1, l.value = z(E || 10);
    }), ie([i, l, d], (S, w) => {
      var [E, A, V] = S, [I, B] = w, p = [], {
        maxPagerCount: b,
        total: L,
        onChange: Q
      } = e, Y = Math.ceil(z(L) / z(B)), R = V - (b - u.value) - 1;
      if (a.value = "" + E, V - 2 > b) {
        if (I === void 0 || V !== Y)
          for (var J = 2; J < b + 2; J++)
            p.push(J);
        if (E <= b && E < R) {
          p = [];
          for (var j = 1; j < b + 1; j++)
            p.push(j + 1);
          t.value = !0, o.value = !1;
        }
        if (E > b && E < R) {
          p = [];
          for (var K = 1; K < b + 1; K++)
            p.push(E + K - u.value);
          t.value = E === 2 && b === 1, o.value = !1;
        }
        if (E >= R) {
          p = [];
          for (var N = 1; N < b + 1; N++)
            p.push(V - (b - N) - 1);
          t.value = !1, o.value = !0;
        }
        p = [1, "...", ...p, "...", V];
      } else
        for (var X = 1; X <= V; X++)
          p.push(X);
      s.value = p, I !== void 0 && V > 0 && T(Q, E, A), T(e["onUpdate:current"], E), T(e["onUpdate:size"], A);
    }, {
      immediate: !0
    }), {
      n: fy,
      classes: cy,
      pack: Fe,
      current: i,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: h,
      isHideEllipsis: c,
      clickItem: y,
      showMenu: C,
      clickSize: $,
      setPage: k,
      toNumber: z
    };
  }
});
Ru.render = py;
const Fr = Ru;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var fC = Fr;
function zo() {
  return zo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, zo.apply(this, arguments);
}
var hy = zo({
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
}, qe(_a, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: gy,
  classes: yy
} = ee("picker"), hl = 300, by = 15, gl = 0, wy = ["onTouchstart", "onTouchmove", "onTouchend"], Cy = ["onTransitionend"];
function Sy(e, n) {
  var r = le("var-button");
  return g(), me(
    Ra(e.dynamic ? e.n("$-popup") : e.Transition),
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
        [e.toolbar ? (g(), O(
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
              default: ve(() => [ge(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), W(e.$slots, "title", {}, () => [D(
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
              default: ve(() => [ge(
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
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(g(!0), O(
            Oe,
            null,
            Be(e.scrollColumns, (a) => (g(), O(
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
                  style: q({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(g(!0), O(
                  Oe,
                  null,
                  Be(a.column.texts, (t) => (g(), O(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: q({
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
                Cy
              )],
              42,
              wy
            ))),
            128
            /* KEYED_FRAGMENT */
          )), D(
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
          ), D(
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
var Uu = x({
  name: "VarPicker",
  components: {
    VarButton: xe,
    VarPopup: mn
  },
  inheritAttrs: !1,
  props: hy,
  setup(e) {
    var n = M([]), r = F(() => Ne(e.optionHeight)), a = F(() => Ne(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), o = F(() => a.value * r.value), i = [], l = (p, b) => {
      b.scrollEl = p;
    }, s = (p) => {
      T(e["onUpdate:show"], p);
    }, u = (p) => {
      var b = r.value + t.value, L = t.value - p.column.texts.length * r.value;
      p.translate >= b && (p.translate = b), p.translate <= L && (p.translate = L);
    }, d = (p, b) => {
      var {
        length: L
      } = p.column.texts;
      return b = b >= L ? L - 1 : b, b = b <= 0 ? 0 : b, b;
    }, v = (p) => {
      var b = Math.round((t.value - p.translate) / r.value);
      return d(p, b);
    }, f = () => {
      var p = n.value.map((L) => L.column.texts[L.index]), b = n.value.map((L) => L.index);
      return {
        texts: p,
        indexes: b
      };
    }, c = function(p, b, L, Q) {
      Q === void 0 && (Q = !1);
      var Y = t.value - d(p, b) * r.value;
      Y === p.translate && (p.scrolling = !1, !Q && A(p)), p.translate = Y, p.duration = L;
    }, h = (p, b, L) => {
      p.translate += Math.abs(b / L) / 3e-3 * (b < 0 ? -1 : 1);
    }, y = (p, b) => {
      b.touching = !0, b.scrolling = !1, b.duration = 0, b.translate = Gt(b.scrollEl);
    }, C = (p, b) => {
      if (b.touching) {
        var {
          clientY: L
        } = p.touches[0], Q = b.prevY !== void 0 ? L - b.prevY : 0;
        b.prevY = L, b.translate += Q, u(b);
        var Y = performance.now();
        Y - b.momentumTime > hl && (b.momentumTime = Y, b.momentumPrevY = b.translate);
      }
    }, $ = (p, b) => {
      b.touching = !1, b.scrolling = !0, b.prevY = void 0;
      var L = b.translate - b.momentumPrevY, Q = performance.now() - b.momentumTime, Y = Math.abs(L) >= by && Q <= hl;
      Y && h(b, L, Q), b.index = v(b), c(b, b.index, Y ? 1e3 : 200);
    }, P = (p) => {
      p.scrolling = !1, A(p);
    }, k = (p) => p.map((b, L) => {
      var Q, Y = be(b) ? {
        texts: b
      } : b, R = {
        id: gl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = Y.initialIndex) != null ? Q : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: Y,
        scrollEl: null,
        scrolling: !1
      };
      return c(R, R.index, 0, !0), R;
    }), S = (p) => {
      var b = [];
      return w(b, p, 0, !0), b;
    }, w = function(p, b, L, Q) {
      if (Q === void 0 && (Q = !1), be(b) && b.length) {
        var Y, R = Q && (Y = e.cascadeInitialIndexes[p.length]) != null ? Y : 0, J = {
          id: gl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: R,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: b.map((j) => j[e.textKey])
          },
          columns: b,
          scrollEl: null,
          scrolling: !1
        };
        p.push(J), c(J, J.index, 0, !0), w(p, J.columns[J.index].children, L + 1, Q);
      }
    }, E = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), w(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, A = (p) => {
      var {
        cascade: b,
        onChange: L
      } = e;
      b && E(p);
      var Q = n.value.some((j) => j.scrolling);
      if (!Q) {
        var {
          texts: Y,
          indexes: R
        } = f(), J = R.every((j, K) => j === i[K]);
        J || (i = [...R], T(L, Y, R));
      }
    }, V = () => {
      if (e.cascade) {
        var p = n.value.find((b) => b.scrolling);
        p && (p.translate = Gt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, E(p));
      } else
        n.value.forEach((b) => {
          b.translate = Gt(b.scrollEl), b.index = v(b), c(b, b.index, 0);
        });
    }, I = () => {
      V();
      var {
        texts: p,
        indexes: b
      } = f();
      i = [...b], T(e.onConfirm, p, b);
    }, B = () => {
      V();
      var {
        texts: p,
        indexes: b
      } = f();
      i = [...b], T(e.onCancel, p, b);
    };
    return ie(() => e.columns, (p) => {
      n.value = e.cascade ? S(yi(p)) : k(yi(p));
      var {
        indexes: b
      } = f();
      i = [...b];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: gy,
      classes: yy,
      pack: Fe,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: C,
      handleTouchend: $,
      handleTransitionend: P,
      confirm: I,
      cancel: B,
      dt: Mt
    };
  }
});
Uu.render = Sy;
const vr = Uu;
var nn;
function ga(e) {
  return new Promise((n) => {
    ga.close();
    var r = be(e) ? {
      columns: e
    } : e, a = Me(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = Ua(vr, a, {
      onConfirm: (o, i) => {
        T(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onCancel: (o, i) => {
        T(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onClose: () => {
        T(a.onClose), n({
          state: "close"
        }), nn === a && (nn = null);
      },
      onClosed: () => {
        T(a.onClosed), t(), nn === a && (nn = null);
      },
      onRouteChange: () => {
        t(), nn === a && (nn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
vr.install = function(e) {
  e.component(vr.name, vr);
};
ga.Component = vr;
ga.install = function(e) {
  e.component(vr.name, vr);
};
ga.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
var cC = vr;
function ky(e) {
  return ["linear", "circle"].includes(e);
}
var $y = {
  mode: {
    type: String,
    default: "linear",
    validator: ky
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
  n: Ty,
  classes: Py
} = ee("progress"), Oy = ["viewBox"], Vy = ["cx", "cy", "r", "stroke-width"], My = ["cx", "cy", "r", "stroke-width"];
function Ey(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [D(
        "div",
        {
          class: m(e.n("linear-block")),
          style: q({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (g(), O(
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
        )) : _("v-if", !0), D(
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
      ), e.label ? (g(), O(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [ge(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (g(), O(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(g(), O(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (g(), O(
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
          Vy
        )) : _("v-if", !0), D(
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
          My
        )],
        14,
        Oy
      )), e.label ? (g(), O(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [W(e.$slots, "default", {}, () => [ge(
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
var Yu = x({
  name: "VarProgress",
  props: $y,
  setup(e) {
    var n = F(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, o = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: o + "%"
      };
    }), r = F(() => {
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
      n: Ty,
      classes: Py,
      toSizeUnit: we,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
Yu.render = Ey;
const Hr = Yu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var mC = Hr, Iy = {
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
function yl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function By(e) {
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
  n: bl,
  classes: Ny
} = ee("pull-refresh"), wl = 150;
function Dy(e, n) {
  var r = le("var-icon");
  return g(), O(
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
var Fu = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Iy,
  setup(e) {
    var n, r, a = M(0), t = M(null), o = M(null), i = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = 0, f = 0, c = M(!0), h = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), y = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: $.value ? e.successBgColor : e.bgColor,
      color: $.value ? e.successColor : e.color
    })), C = F(() => Math.abs(2 * a.value)), $ = F(() => u.value === "success"), P = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, wl);
    }), k = (I) => {
      var B = "classList" in n ? n : document.body;
      B.classList[I](bl() + "--lock");
    }, S = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, w = (I) => {
      if (h.value) {
        var B = Et(n);
        if (!(B > 0)) {
          var p = B === 0, b = I.touches[0];
          f = b.clientY - v, p && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = I.touches[0].clientY), p && l.value > a.value && k("add");
          var L = (I.touches[0].clientY - i.value) / 2 + a.value;
          l.value = L >= C.value ? C.value : L, l.value >= C.value * 0.2 ? (c.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, E = /* @__PURE__ */ function() {
      var I = By(function* () {
        h.value && (d.value = !0, l.value >= C.value * 0.2 ? (yield r, u.value = "loading", l.value = C.value * 0.3, T(e["onUpdate:modelValue"], !0), T(e.onRefresh), k("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, k("remove");
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
    }, V = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return ie(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, V();
      }, z(e.successDuration)));
    }), Ue(() => {
      var I;
      n = e.target ? Ll(e.target, "PullRefresh") : wa(t.value), A(), (I = t.value) == null || I.addEventListener("touchmove", w, {
        passive: !1
      });
    }), Pt(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", w);
    }), {
      n: bl,
      classes: Ny,
      iconHasChanged: c,
      ICON_TRANSITION: wl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: S,
      touchMove: w,
      touchEnd: E,
      iconName: s,
      controlStyle: y,
      isSuccess: $
    };
  }
});
Fu.render = Dy;
const Wr = Fu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var pC = Wr, Ay = {
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
}, Hu = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Wu = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function zy() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Hu), {
    length: r
  } = gn(Wu);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Ly() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Hu), {
    index: r
  } = yn(Wu);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Ry,
  classes: Uy
} = ee("radio");
function Yy(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ke("ripple");
  return g(), O(
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
      [ke((g(), O(
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
      }]]), D(
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
var ju = x({
  name: "VarRadio",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: Ay,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = Ly(), {
      form: i,
      bindForm: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (S) => {
      Ee(() => {
        var {
          validateTrigger: w,
          rules: E,
          modelValue: A
        } = e;
        u(w, S, E, A);
      });
    }, c = (S) => {
      var {
        checkedValue: w,
        onChange: E
      } = e;
      t && n.value === w || (n.value = S, T(e["onUpdate:modelValue"], n.value), T(E, n.value), t == null || t.onToggle(w), f("onChange"));
    }, h = (S) => {
      var {
        disabled: w,
        readonly: E,
        uncheckedValue: A,
        checkedValue: V,
        onClick: I
      } = e;
      i != null && i.disabled.value || w || (T(I, S), !(i != null && i.readonly.value || E) && (a.value = !0, c(r.value ? A : V)));
    }, y = (S) => {
      var {
        checkedValue: w,
        uncheckedValue: E
      } = e;
      n.value = S === w ? w : E;
    }, C = () => {
      T(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, $ = () => d(e.rules, e.modelValue), P = (S) => {
      var {
        uncheckedValue: w,
        checkedValue: E
      } = e, A = ![w, E].includes(S);
      A && (S = r.value ? w : E), c(S);
    };
    ie(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var k = {
      sync: y,
      validate: $,
      resetValidation: v,
      reset: C
    };
    return T(o, k), T(l, k), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: Ry,
      classes: Uy,
      handleClick: h,
      toggle: P,
      reset: C,
      validate: $,
      resetValidation: v
    };
  }
});
ju.render = Yy;
const jr = ju;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var hC = jr;
function Fy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Hy = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Fy
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
  n: Wy,
  classes: jy
} = ee("radio-group");
function Gy(e, n) {
  var r = le("var-form-details");
  return g(), O(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
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
var Gu = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: Hy,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = zy(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = F(() => o.value), d = (C) => {
      Ee(() => {
        var {
          validateTrigger: $,
          rules: P,
          modelValue: k
        } = e;
        i($, C, P, k);
      });
    }, v = () => r.forEach((C) => {
      var {
        sync: $
      } = C;
      return $(e.modelValue);
    }), f = (C) => {
      T(e["onUpdate:modelValue"], C), T(e.onChange, C), d("onChange");
    }, c = () => l(e.rules, e.modelValue), h = () => {
      T(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var y = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return T(t, y), a(y), {
      errorMessage: o,
      n: Wy,
      classes: jy,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
Gu.render = Gy;
const Gr = Gu;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var gC = Gr, qy = {
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
  n: Fa
} = ee("rate"), Ky = ["onClick"];
function Xy(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Ke("ripple");
  return g(), O(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [(g(!0), O(
        Oe,
        null,
        Be(e.toNumber(e.count), (o) => ke((g(), O(
          "div",
          {
            key: o,
            style: q(e.getStyle(o)),
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
              style: q({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          Ky
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
var qu = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  props: qy,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = (C) => {
      var {
        count: $,
        gap: P
      } = e;
      return {
        color: u(C).color,
        marginRight: C !== z($) ? we(P) : 0
      };
    }, s = (C) => {
      var {
        name: $,
        color: P
      } = u(C);
      return {
        [Fa("content")]: !0,
        [Fa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Fa("--error")]: a.value,
        [Fa("--primary")]: $ !== e.emptyIcon && !P
      };
    }, u = (C) => {
      var {
        modelValue: $,
        disabled: P,
        disabledColor: k,
        color: S,
        half: w,
        emptyColor: E,
        icon: A,
        halfIcon: V,
        emptyIcon: I
      } = e, B = S;
      return (P || n != null && n.disabled.value) && (B = k), C <= z($) ? {
        color: B,
        name: A
      } : w && C <= z($) + 0.5 ? {
        color: B,
        name: V
      } : {
        color: P || n != null && n.disabled.value ? k : E,
        name: I
      };
    }, d = (C, $) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = $.target;
        $.offsetX <= Math.floor(P / 2) && (C -= 0.5);
      }
      T(e["onUpdate:modelValue"], C);
    }, v = () => o(e.rules, z(e.modelValue)), f = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (C, $) => {
      var {
        readonly: P,
        disabled: k,
        onChange: S
      } = e;
      P || k || n != null && n.disabled.value || n != null && n.readonly.value || (d(C, $), T(S, C), f());
    }, h = () => {
      T(e["onUpdate:modelValue"], 0), i();
    }, y = {
      reset: h,
      validate: v,
      resetValidation: i
    };
    return T(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: h,
      validate: v,
      resetValidation: i,
      toSizeUnit: we,
      toNumber: z,
      n: Fa
    };
  }
});
qu.render = Xy;
const qr = qu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var yC = qr;
function Zy(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Jy = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Zy
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
}, Qy = (e) => (ya(""), e = e(), ba(), e), _y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, xy = /* @__PURE__ */ Qy(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), e0 = [xy];
function n0(e, n) {
  return g(), O("svg", _y, e0);
}
var Ku = x({});
Ku.render = n0;
const r0 = Ku;
var a0 = (e) => (ya(""), e = e(), ba(), e), t0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, o0 = /* @__PURE__ */ a0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), i0 = [o0];
function l0(e, n) {
  return g(), O("svg", t0, i0);
}
var Xu = x({});
Xu.render = l0;
const s0 = Xu;
var u0 = (e) => (ya(""), e = e(), ba(), e), d0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, v0 = /* @__PURE__ */ u0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), f0 = [v0];
function c0(e, n) {
  return g(), O("svg", d0, f0);
}
var Zu = x({});
Zu.render = c0;
const m0 = Zu;
var {
  n: p0,
  classes: h0
} = ee("result");
function g0(e, n) {
  return g(), O(
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
        style: q({
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
        style: q({
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
        style: q({
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
var Ju = x({
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
      n: p0,
      classes: h0,
      toNumber: z
    };
  }
});
Ju.render = g0;
const y0 = Ju;
var b0 = (e) => (ya(""), e = e(), ba(), e), w0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, C0 = /* @__PURE__ */ b0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), S0 = [C0];
function k0(e, n) {
  return g(), O("svg", w0, S0);
}
var Qu = x({});
Qu.render = k0;
const $0 = Qu;
var T0 = (e) => (ya(""), e = e(), ba(), e), P0 = {
  viewBox: "-4 -4 32 32"
}, O0 = /* @__PURE__ */ T0(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), V0 = [O0];
function M0(e, n) {
  return g(), O("svg", P0, V0);
}
var _u = x({});
_u.render = M0;
const E0 = _u;
var {
  n: I0,
  classes: B0
} = ee("result");
function N0(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: q({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(g(), me(
          Ra(e.type),
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
    )) : _("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (g(), O(
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
var xu = x({
  name: "VarResult",
  components: {
    Info: r0,
    Success: y0,
    Warning: m0,
    Error: s0,
    Question: $0,
    Empty: E0
  },
  props: Jy,
  setup(e) {
    var n = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: I0,
      classes: B0,
      toNumber: z,
      toPxNum: Ne,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
xu.render = N0;
const Kr = xu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var bC = Kr;
function D0(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function A0(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var z0 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: D0
  },
  align: {
    type: String,
    default: "flex-start",
    validator: A0
  },
  onClick: U()
}, {
  n: L0,
  classes: R0
} = ee("row");
function U0(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: q({
        justifyContent: e.justify,
        alignItems: e.align,
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
var ed = x({
  name: "VarRow",
  props: z0,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = vc(), t = F(() => {
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
      T(e.onClick, s);
    }, l = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), r(l), {
      n: L0,
      classes: R0,
      average: t,
      handleClick: i
    };
  }
});
ed.render = U0;
const Xr = ed;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var wC = Xr;
function Y0(e) {
  return ["left", "right", "center"].includes(e);
}
var F0 = {
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
    validator: Y0
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
  n: Jt,
  classes: H0
} = ee("select"), W0 = {
  key: 1
};
function j0(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), o = le("var-form-details");
  return g(), O(
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
        style: q({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "prepend-icon")],
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
              [W(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [D(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: q({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [D(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? _("v-if", !0) : W(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (g(), O(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (g(), O(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(g(!0), O(
                      Oe,
                      null,
                      Be(e.labels, (i) => (g(), me(
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
                          default: ve(() => [ge(
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
                  )) : (g(), O(
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
                )) : (g(), O(
                  "span",
                  W0,
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
            ), D(
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
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (g(), me(
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
    ), e.line ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: q({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
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
var nd = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: ir,
    VarFormDetails: He
  },
  props: F0,
  setup(e) {
    var n = M(null), r = M(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = M(""), i = M([]), l = F(() => Nn(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: h
    } = ay(), {
      errorMessage: y,
      validateWithTrigger: C,
      validate: $,
      // expose
      resetValidation: P
    } = bn(), k = M(null), S = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var ae = Z;
        i.value = ae.map(A);
      }
      !H && !Nn(Z) && (o.value = A(Z)), !H && Nn(Z) && (o.value = "");
    }, w = (H) => {
      Ee(() => {
        var {
          validateTrigger: Z,
          rules: ae,
          modelValue: oe
        } = e;
        C(Z, H, ae, oe);
      });
    }, E = (H) => {
      var {
        value: Z,
        label: ae
      } = H;
      return Z.value != null ? Z.value : ae.value;
    }, A = (H) => {
      var Z, ae, oe = c.find((he) => {
        var {
          value: pe
        } = he;
        return pe.value === H;
      });
      return oe || (oe = c.find((he) => {
        var {
          label: pe
        } = he;
        return pe.value === H;
      })), (Z = (ae = oe) == null ? void 0 : ae.label.value) != null ? Z : "";
    }, V = () => {
      var {
        hint: H,
        modelValue: Z
      } = e;
      if (!H && !Nn(Z))
        return Jt("--placeholder-hidden");
      if (H && (!Nn(Z) || r.value))
        return Jt("--placeholder-hint");
    }, I = () => n.value && window.getComputedStyle(n.value).width || "0px", B = () => {
      var {
        disabled: H,
        readonly: Z,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (s.value = I(), u.value = Ne(e.offsetY), r.value = !0, T(ae), w("onFocus"));
    }, p = () => {
      var {
        disabled: H,
        readonly: Z,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (T(ae), w("onBlur"));
    }, b = (H) => {
      var {
        disabled: Z,
        readonly: ae,
        multiple: oe,
        onChange: he
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe ? c.filter((Ye) => {
          var {
            selected: en
          } = Ye;
          return en.value;
        }).map(E) : E(H);
        T(e["onUpdate:modelValue"], pe), T(he, pe), w("onChange"), !oe && (r.value = !1);
      }
    }, L = () => {
      var {
        disabled: H,
        readonly: Z,
        multiple: ae,
        clearable: oe,
        onClear: he
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || H || Z || !oe)) {
        var pe = ae ? [] : void 0;
        T(e["onUpdate:modelValue"], pe), T(he, pe), w("onClear");
      }
    }, Q = (H) => {
      var {
        disabled: Z,
        onClick: ae
      } = e;
      v != null && v.disabled.value || Z || (T(ae, H), w("onClick"));
    }, Y = (H) => {
      var {
        disabled: Z,
        readonly: ae,
        modelValue: oe,
        onClose: he
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe, Ye = c.find((on) => {
          var {
            label: Ae
          } = on;
          return Ae.value === H;
        }), en = pe.filter((on) => {
          var Ae;
          return on !== ((Ae = Ye.value.value) != null ? Ae : Ye.label.value);
        });
        T(e["onUpdate:modelValue"], en), T(he, en), w("onClose");
      }
    }, R = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var ae = Z;
        c.forEach((oe) => oe.sync(ae.includes(E(oe))));
      } else
        c.forEach((oe) => oe.sync(Z === E(oe)));
      S();
    }, J = () => {
      s.value = I(), u.value = Ne(e.offsetY), r.value = !0;
    }, j = () => {
      r.value = !1;
    }, K = () => $(e.rules, e.modelValue), N = () => {
      T(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H && !be(Z))
        throw Error("The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, R, {
      deep: !0
    }), ie(() => f.value, R);
    var X = {
      wrapWidth: F(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: b,
      reset: N,
      validate: K,
      resetValidation: P
    };
    return h(X), T(d, X), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: k,
      n: Jt,
      classes: H0,
      computePlaceholderState: V,
      handleFocus: B,
      handleBlur: p,
      handleClear: L,
      handleClick: Q,
      handleClose: Y,
      reset: N,
      validate: K,
      resetValidation: P,
      focus: J,
      blur: j
    };
  }
});
nd.render = j0;
const Zr = nd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var CC = Zr, G0 = {
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
  n: q0,
  classes: K0
} = ee("skeleton");
function X0(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (g(), O(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (g(), O(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (g(), O(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: q({
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), O(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (g(), O(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: q({
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), O(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (g(), O(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: q({
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
          )) : _("v-if", !0), (g(!0), O(
            Oe,
            null,
            Be(e.toNumber(e.rows), (r, a) => (g(), O(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: q({
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
    )) : _("v-if", !0), e.loading && e.fullscreen ? (g(), O(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: q({
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
var rd = x({
  name: "VarSkeleton",
  props: G0,
  setup() {
    return {
      n: q0,
      classes: K0,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
rd.render = X0;
const Jr = rd;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var SC = Jr;
function Z0(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var J0 = {
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
    validator: Z0
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
  n: Cl,
  classes: Q0
} = ee("slider"), _0 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function x0(e, n) {
  var r = le("var-form-details");
  return g(), O(
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
            style: q({
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
            style: q(e.getFillStyle)
          },
          null,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      ), (g(!0), O(
        Oe,
        null,
        Be(e.thumbList, (a) => (g(), O(
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
          }, () => [D(
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
          ), D(
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
          ), D(
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
          _0
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
var ad = x({
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: J0,
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
    }), u = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = M(null), v = M(0), f = M(!1), c = Me({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), h = F(() => z(e.max) - z(e.min)), y = F(() => v.value / h.value * z(e.step)), C = F(() => {
      var {
        modelValue: j,
        range: K
      } = e, N = [];
      return K && be(j) ? N = [{
        value: w(j[0]),
        enumValue: Ie.First,
        text: E(j[0])
      }, {
        value: w(j[1]),
        enumValue: Ie.Second,
        text: E(j[1])
      }] : an(j) && (N = [{
        value: w(j),
        enumValue: Ie.First,
        text: E(j)
      }]), N;
    }), $ = F(() => {
      var {
        activeColor: j,
        range: K,
        modelValue: N
      } = e, X = K && be(N) ? w(Math.min(N[0], N[1])) : 0, H = K && be(N) ? w(Math.max(N[0], N[1])) - X : w(N);
      return {
        width: H + "%",
        left: X + "%",
        background: j
      };
    }), P = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), k = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), S = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[j].active, w = (j) => {
      var {
        min: K,
        max: N
      } = e;
      return j < z(K) ? 0 : j > z(N) ? 100 : (j - z(K)) / h.value * 100;
    }, E = (j) => {
      if (!an(j))
        return 0;
      var K = j;
      K < Number(e.min) && (K = Number(e.min)), K > Number(e.max) && (K = Number(e.max));
      var N = parseInt("" + K, 10) === K;
      return N ? K : z(K.toPrecision(5));
    }, A = (j, K) => {
      var N = [], {
        step: X,
        range: H,
        modelValue: Z,
        onChange: ae,
        min: oe
      } = e, he = z(X), pe = Math.round(j / y.value), Ye = pe * he + z(oe), en = c[K].percentValue * he + z(oe);
      if (c[K].percentValue = pe, H && be(Z) && (N = K === Ie.First ? [Ye, Z[1]] : [Z[0], Ye]), en !== Ye) {
        var on = H ? N.map((Ae) => E(Ae)) : E(Ye);
        T(ae, on), T(e["onUpdate:modelValue"], on), u();
      }
    }, V = (j) => {
      if (!e.range)
        return Ie.First;
      var K = c[Ie.First].percentValue * y.value, N = c[Ie.Second].percentValue * y.value, X = Math.abs(j - K), H = Math.abs(j - N);
      return X <= H ? Ie.First : Ie.Second;
    }, I = (j, K) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || k.value) && (T(e.onStart), f.value = !0, c[K].startPosition = j.touches[0].clientX);
    }, B = (j, K) => {
      if (!(P.value || k.value || !f.value)) {
        var N = j.touches[0].clientX - c[K].startPosition + c[K].currentLeft;
        c[K].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), A(N, K);
      }
    }, p = (j) => {
      var {
        range: K,
        modelValue: N,
        onEnd: X,
        step: H,
        min: Z
      } = e;
      if (!(P.value || k.value)) {
        var ae = [];
        c[j].currentLeft = c[j].percentValue * y.value, c[j].active = !1;
        var oe = c[j].percentValue * z(H) + z(Z);
        K && be(N) && (ae = j === Ie.First ? [oe, N[1]] : [N[0], oe]), T(X, K ? ae : oe), f.value = !1;
      }
    }, b = (j) => {
      if (!(P.value || k.value) && !j.target.closest("." + Cl("thumb"))) {
        var K = j.clientX - Jd(j.currentTarget), N = V(K);
        A(K, N), p(N);
      }
    }, L = () => {
      var j = z(e.step);
      return isNaN(j) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : j < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: j,
        modelValue: K
      } = e;
      return j && !be(K) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && be(K) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && be(K) && K.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, Y = function(j, K) {
      j === void 0 && (j = e.modelValue), K === void 0 && (K = z(e.step));
      var N = (X) => {
        var {
          min: H,
          max: Z
        } = e;
        return X < z(H) ? 0 : X > z(Z) ? h.value / K : (X - z(H)) / K;
      };
      e.range && be(j) ? (c[Ie.First].percentValue = N(j[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * y.value, c[Ie.Second].percentValue = N(j[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * y.value) : an(j) && (c[Ie.First].currentLeft = N(j) * y.value);
    }, R = () => {
      var j = e.range ? [0, 0] : 0;
      T(e["onUpdate:modelValue"], j), i();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: i
    };
    return T(n, J), ie([() => e.modelValue, () => e.step], (j) => {
      var [K, N] = j;
      !L() || !Q() || f.value || Y(K, z(N));
    }), ie(v, () => Y()), Ue(() => {
      !L() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: Cl,
      classes: Q0,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: $,
      isDisabled: P,
      errorMessage: a,
      thumbsProps: c,
      thumbList: C,
      multiplySizeUnit: Qe,
      toNumber: z,
      showLabel: S,
      start: I,
      move: B,
      end: p,
      click: b
    };
  }
});
ad.render = x0;
const Qr = ad;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var kC = Qr;
function Lo() {
  return Lo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lo.apply(this, arguments);
}
function eb(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function nb(e) {
  return fi.includes(e);
}
var td = {
  type: {
    type: String,
    validator: nb
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: eb
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
  loadingType: qe(xn, "type"),
  loadingSize: qe(xn, "size"),
  loadingRadius: qe(xn, "radius"),
  loadingColor: Lo({}, qe(xn, "color"), {
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
  n: rb,
  classes: ab
} = ee("snackbar"), tb = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function ob(e, n) {
  var r = le("var-icon"), a = le("var-loading");
  return ke((g(), O(
    "div",
    {
      class: m(e.n()),
      style: q({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: q({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [W(e.$slots, "default", {}, () => [ge(
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
        [e.iconName ? (g(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (g(), me(
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
  )), [[La, e.show]]);
}
var od = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: td,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = xa(() => e.show, 1);
    Bt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? tb[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && T(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (i) => {
      i ? (T(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), T(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), Ue(() => {
      e.show && (T(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: fi,
      n: rb,
      classes: ab,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
od.render = ob;
const id = od;
var {
  n: ib
} = ee("snackbar");
function lb(e, n) {
  var r = le("var-snackbar-core");
  return g(), me(
    za,
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
            action: ve(() => [W(e.$slots, "action")]),
            default: ve(() => [W(e.$slots, "default", {}, () => [ge(
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
var ld = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: id
  },
  props: td,
  setup() {
    var {
      disabled: e
    } = Zo();
    return {
      n: ib,
      disabled: e
    };
  }
});
ld.render = lb;
const _r = ld;
function Ja() {
  return Ja = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ja.apply(this, arguments);
}
function sb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ot(e);
}
var fi = ["loading", "success", "warning", "info", "error"], Sl = 0, Ro = !1, sd, Da = !1, ud = {
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
}, hn = Me([]), ci = ud, ub = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, db = {
  setup() {
    return () => {
      var e = hn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Da && (a.position = "top");
        var i = Da ? "relative" : "absolute", l = Ja({
          position: i
        }, hb(a.position));
        return re(id, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(Hd, Ve(ub, {
        style: {
          zIndex: sn.zIndex
        },
        onAfterEnter: vb,
        onAfterLeave: fb
      }), sb(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Wn = function(e) {
  var n = mb(e), r = Me(Ja({}, ci, n));
  r.show = !0, Ro || (Ro = !0, sd = Ua(db).unmountInstance);
  var {
    length: a
  } = hn, t = {
    id: Sl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Da)
    cb(t);
  else {
    var o = "update-" + Sl;
    pb(r, o);
  }
  return {
    clear() {
      !Da && hn.length ? hn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
fi.forEach((e) => {
  Wn[e] = (n) => (Go(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Wn(n));
});
Wn.install = function(e) {
  e.component(_r.name, _r);
};
Wn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Da && (hn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Da = e);
};
Wn.clear = function() {
  hn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Wn.setDefaultOptions = function(e) {
  ci = e;
};
Wn.resetDefaultOptions = function() {
  ci = ud;
};
Wn.Component = _r;
function vb(e) {
  var n = e.getAttribute("data-id"), r = hn.find((a) => a.id === z(n));
  r && T(r.reactiveSnackOptions.onOpened);
}
function fb(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = hn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, T(r.reactiveSnackOptions.onClosed));
  var a = hn.every((t) => t.animationEnd);
  a && (T(sd), hn = Me([]), Ro = !1);
}
function cb(e) {
  hn.push(e);
}
function mb(e) {
  return e === void 0 && (e = {}), Xe(e) ? {
    content: e
  } : e;
}
function pb(e, n) {
  var [r] = hn;
  r.reactiveSnackOptions = Ja({}, r.reactiveSnackOptions, e), r._update = n;
}
function hb(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
_r.install = function(e) {
  e.component(_r.name, _r);
};
var $C = _r;
const Uo = Wn;
var dd = (e) => ["mini", "small", "normal", "large"].includes(e), gb = (e) => dd(e) || be(e) || an(e) || Xe(e), yb = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), bb = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: gb
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
    validator: yb
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function ln(e) {
  return "calc(" + e + " / 2)";
}
function wb(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? o !== i ? l = ln(e) + " " + n + " " + ln(e) + " 0" : l = ln(e) + " 0" : t === "space-around" ? l = ln(e) + " " + ln(n) : t === "space-between" && (o === 0 ? l = ln(e) + " " + ln(n) + " " + ln(e) + " 0" : o === i ? l = ln(e) + " 0 " + ln(e) + " " + ln(n) : l = ln(e) + " " + ln(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Qt,
  classes: Cb
} = ee("space");
const xr = x({
  name: "VarSpace",
  props: bb,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (o, i) => i ? ["var(--space-size-" + o + "-y)", "var(--space-size-" + o + "-x)"] : be(o) ? o.map(we) : [we(o), we(o)], t = (o) => o === "start" || o === "end" ? "flex-" + o : o;
    return () => {
      var o, {
        inline: i,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (o = T(r.default)) != null ? o : [], c = dd(v), [h, y] = a(v, c), C = (k) => {
        var S = [];
        return k.forEach((w) => {
          if (w.type !== Wd) {
            if (w.type === Oe && be(w.children)) {
              w.children.forEach((E) => {
                S.push(E);
              });
              return;
            }
            S.push(w);
          }
        }), S;
      };
      f = C(f);
      var $ = f.length - 1, P = f.map((k, S) => {
        var w = wb(h, y, {
          direction: d,
          justify: l,
          index: S,
          lastIndex: $
        });
        return re("div", {
          style: {
            margin: w
          }
        }, [k]);
      });
      return re("div", {
        class: Cb(Qt(), Qt("$--box"), [i, Qt("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + h + " / 2) 0" : void 0
        }
      }, [P]);
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
var TC = xr, Sb = {
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
}, vd = Symbol("STEPS_BIND_STEP_KEY"), fd = Symbol("STEPS_COUNT_STEP_KEY");
function kb() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(vd), {
    length: r
  } = gn(fd);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function $b() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(vd), {
    index: r
  } = yn(fd);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Tb,
  classes: Pb
} = ee("step"), Ob = {
  key: 3
};
function Vb(e, n) {
  var r = le("var-icon");
  return g(), O(
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
            style: q({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (g(), me(
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
          )) : e.isCurrent && e.currentIcon ? (g(), me(
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
          )) : e.inactiveIcon ? (g(), me(
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
          )) : (g(), O(
            "span",
            Ob,
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
          [W(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? _("v-if", !0) : (g(), O(
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
var cd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: Sb,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = $b(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => i.value === a.value), c = F(() => a.value !== -1 && i.value > a.value), h = {
      index: a
    }, y = () => v(a.value), C = ($) => {
      d.value === "horizontal" && (e.value = $);
    };
    return o(h), ie(l, ($) => {
      if (r.value = $ - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: Tb,
      classes: Pb,
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
      getRef: C
    };
  }
});
cd.render = Vb;
const ea = cd;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var PC = ea;
function Mb(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Eb = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Mb
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Ib
} = ee("steps");
function Bb(e, n) {
  return g(), O(
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
var md = x({
  name: "VarSteps",
  props: Eb,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: i
    } = kb(), l = (u) => {
      T(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: Ib
    };
  }
});
md.render = Bb;
const na = md;
na.install = function(e) {
  e.component(na.name, na);
};
var OC = na, Nb = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Db
} = ee("style-provider"), Ab = x({
  name: "VarStyleProvider",
  props: Nb,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Bl(e.tag, {
      class: Db(),
      style: Fl(e.styleVars)
    }, T(r.default));
  }
});
const ra = Ab;
var _t = [];
function Qa(e) {
  _t.forEach((r) => document.documentElement.style.removeProperty(r)), _t.length = 0;
  var n = Fl(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), _t.push(a);
  });
}
Qa.Component = ra;
ra.install = function(e) {
  e.component(ra.name, ra);
};
Qa.install = function(e) {
  e.component(ra.name, ra);
};
var VC = ra, zb = {
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
  n: Lb,
  classes: Rb
} = ee("switch");
function Ub(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = Ke("ripple");
  return g(), O(
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
        style: q(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: q(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((g(), O(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: q(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: q(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (g(), me(
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
var pd = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  props: zb,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = () => o(e.rules, e.modelValue), s = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = F(() => {
      var {
        size: h,
        modelValue: y,
        color: C,
        closeColor: $,
        loadingColor: P,
        activeValue: k
      } = e;
      return {
        handle: {
          width: Qe(h),
          height: Qe(h),
          backgroundColor: y === k ? C : $,
          color: P
        },
        ripple: {
          left: y === k ? Qe(h, 0.5) : "-" + Qe(h, 0.5),
          color: y === k ? C : $ || "#999",
          width: Qe(h, 2),
          height: Qe(h, 2)
        },
        track: {
          height: Qe(h, 0.72),
          width: Qe(h, 1.9),
          borderRadius: Qe(h, 2 / 3),
          filter: y === k || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === k ? C : $
        },
        switch: {
          height: Qe(h, 1.2),
          width: Qe(h, 2)
        }
      };
    }), d = F(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return Qe(h, 0.4);
    }), v = (h) => {
      var {
        onClick: y,
        onChange: C,
        disabled: $,
        loading: P,
        readonly: k,
        modelValue: S,
        activeValue: w,
        inactiveValue: E,
        "onUpdate:modelValue": A
      } = e;
      if (T(y, h), !($ || P || k || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var V = S === w ? E : w;
        T(C, V), T(A, V), s();
      }
    }, f = () => {
      T(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: i
    };
    return T(n, c), {
      n: Lb,
      classes: Rb,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
pd.render = Ub;
const aa = pd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var MC = aa, Yb = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, hd = Symbol("TABS_BIND_TAB_KEY"), gd = Symbol("TABS_COUNT_TAB_KEY");
function Fb() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(hd), {
    length: r
  } = gn(gd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Hb() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(hd), {
    index: r
  } = yn(gd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: st,
  classes: Wb
} = ee("tab");
function jb(e, n) {
  var r = Ke("ripple");
  return ke((g(), O(
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
var yd = x({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Yb,
  setup(e) {
    var n = M(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = Hb(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = i, y = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(y);
    var C = () => {
      var {
        disabled: k,
        name: S
      } = e;
      return k ? f.value : u.value === S || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, $ = () => {
      var {
        disabled: k,
        name: S
      } = e;
      return k ? st("$-tab--disabled") : u.value === S || u.value === (o == null ? void 0 : o.value) ? st("$-tab--active") : st("$-tab--inactive");
    }, P = (k) => {
      var {
        disabled: S,
        name: w,
        onClick: E
      } = e;
      S || (T(E, w ?? o.value, k), s(y));
    };
    return ie(() => e.name, h), ie(() => e.disabled, h), {
      n: st,
      classes: Wb,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: C,
      computeColorClass: $,
      handleClick: P
    };
  }
});
yd.render = jb;
const ta = yd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var EC = ta, bd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), wd = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function Gb() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(bd), {
    length: r
  } = gn(wd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function qb() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(bd), {
    index: r
  } = yn(wd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Kb = {
  name: {
    type: [String, Number]
  }
}, {
  n: Xb,
  classes: Zb
} = ee("tab-item");
function Jb(e, n) {
  var r = le("var-swipe-item");
  return g(), me(
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
var Cd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Ln
  },
  props: Kb,
  setup(e) {
    var n = M(!1), r = M(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = qb(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: Xb,
      classes: Zb,
      current: n,
      initSlot: r
    };
  }
});
Cd.render = Jb;
const oa = Cd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var IC = oa, Qb = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: _b,
  classes: xb
} = ee("table");
function e1(e, n) {
  return g(), O(
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
    ), e.$slots.footer ? (g(), O(
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
var Sd = x({
  name: "VarTable",
  props: Qb,
  setup() {
    return {
      toSizeUnit: we,
      n: _b,
      classes: xb
    };
  }
});
Sd.render = e1;
const ia = Sd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var BC = ia;
function kl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var n1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: kl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: kl
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
  stickyCssMode: qe(ft, "cssMode"),
  stickyZIndex: qe(ft, "zIndex"),
  offsetTop: qe(ft, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
function Tl(e) {
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
  n: r1,
  classes: a1
} = ee("tabs");
function t1(e, n) {
  return g(), me(
    Ra(e.sticky ? e.n("$-sticky") : e.Transition),
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
          [W(e.$slots, "default"), D(
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
var kd = x({
  name: "VarTabs",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: n1,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), o = M(!1), i = M(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = M(null), {
      tabList: c,
      bindTabList: h,
      length: y
    } = Fb(), C = (B) => {
      var p, b = (p = B.name.value) != null ? p : B.index.value, {
        active: L,
        onChange: Q,
        onClick: Y
      } = e;
      T(e["onUpdate:active"], b), T(Y, b), b !== L && T(Q, b);
    }, $ = () => c.find((B) => {
      var {
        name: p
      } = B;
      return e.active === p.value;
    }), P = (B) => c.find((p) => {
      var {
        index: b
      } = p;
      return (B ?? e.active) === b.value;
    }), k = () => {
      if (y.value !== 0) {
        var {
          active: B
        } = e;
        if (an(B)) {
          var p = B > y.value - 1 ? y.value - 1 : 0;
          return T(e["onUpdate:active"], p), P(p);
        }
      }
    }, S = () => {
      o.value = c.length >= 5;
    }, w = (B) => {
      var {
        element: p
      } = B, b = p.value;
      e.layoutDirection === "horizontal" ? (n.value = (b == null ? void 0 : b.offsetWidth) + "px", a.value = (b == null ? void 0 : b.offsetLeft) + "px") : (r.value = (b == null ? void 0 : b.offsetHeight) + "px", t.value = (b == null ? void 0 : b.offsetTop) + "px");
    }, E = (B) => {
      var {
        element: p
      } = B;
      if (o.value) {
        var b = i.value, L = p.value;
        if (e.layoutDirection === "horizontal") {
          var Q = L.offsetLeft + L.offsetWidth / 2 - b.offsetWidth / 2;
          qa(b, {
            left: Q,
            animation: eo
          });
        } else {
          var Y = L.offsetTop + L.offsetHeight / 2 - b.offsetHeight / 2;
          qa(b, {
            top: Y,
            animation: eo
          });
        }
      }
    }, A = () => {
      var B = $() || P() || k();
      !B || B.disabled.value || (S(), w(B), E(B));
    }, V = /* @__PURE__ */ function() {
      var B = Tl(function* () {
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
      onTabClick: C
    };
    return h(I), ie(() => y.value, /* @__PURE__ */ Tl(function* () {
      yield Mn(), A();
    })), ie(() => e.active, A), Ue(() => window.addEventListener("resize", A)), mr(() => window.removeEventListener("resize", A)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: we,
      n: r1,
      classes: a1,
      resize: A,
      resizeSticky: V
    };
  }
});
kd.render = t1;
const la = kd;
la.install = function(e) {
  e.component(la.name, la);
};
var NC = la, o1 = {
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
function Pl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function i1(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Pl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Pl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: l1
} = ee("tabs-items");
function s1(e, n) {
  var r = le("var-swipe");
  return g(), me(
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
var $d = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: zn
  },
  props: o1,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Gb(), o = (f) => r.find((c) => {
      var {
        name: h
      } = c;
      return f === h.value;
    }), i = (f) => r.find((c) => {
      var {
        index: h
      } = c;
      return f === h.value;
    }), l = (f) => o(f) || i(f), s = (f) => {
      var c, h = l(f);
      h && (r.forEach((y) => {
        var {
          setCurrent: C
        } = y;
        return C(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((C) => {
        var {
          index: $
        } = C;
        return $.value === f;
      }), y = (c = h.name.value) != null ? c : h.index.value;
      T(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ i1(function* () {
      yield Mn(), s(e.active);
    })), {
      swipe: n,
      n: l1,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$d.render = s1;
const sa = $d;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var DC = sa;
const u1 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, d1 = {
  "--badge-default-color": "#555"
}, v1 = {
  "--button-default-color": "#303030"
}, f1 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, c1 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, m1 = {
  "--checkbox-unchecked-color": "#fff"
}, p1 = {
  "--chip-default-color": "#555"
}, h1 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, g1 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, y1 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, b1 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, w1 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, C1 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, S1 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, k1 = {
  "--popup-content-background-color": "#1e1e1e"
}, $1 = {
  "--pull-refresh-background": "#303030"
}, T1 = {
  "--radio-unchecked-color": "#fff"
}, P1 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, O1 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, V1 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, M1 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, E1 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, I1 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, B1 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, N1 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, D1 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, A1 = {
  "--tabs-background": "#1e1e1e"
}, z1 = {
  "--app-bar-color": "#272727"
}, L1 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, R1 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, U1 = {
  "--menu-background-color": "#272727"
}, Y1 = {
  "--breadcrumb-inactive-color": "#aaa"
};
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
const F1 = Yo({
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
}, v1, c1, f1, N1, g1, V1, A1, I1, k1, y1, u1, p1, d1, D1, h1, $1, E1, M1, C1, B1, w1, O1, T1, m1, b1, S1, z1, L1, R1, U1, P1, Y1);
var H1 = {
  dark: F1
}, AC = null;
const Fo = H1;
var cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Ol = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function W1(e) {
  return ["ampm", "24hr"].includes(e);
}
var j1 = {
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
    validator: W1
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
}, Td = (e, n) => e === "24hr" || n === "am", mi = (e, n, r) => {
  var a = cn.findIndex((o) => z(o) === z(r)), t = Td(e, n) ? r : _e[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, rn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
  };
}, Pd = (e) => {
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
  } = mi(t, o, i), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: h,
      minute: y
    } = rn(l);
    f = h === v && a > y;
  }
  if (!l && s) {
    var {
      hour: C,
      minute: $
    } = rn(s);
    f = C === v && a < $;
  }
  if (l && s) {
    var {
      hour: P,
      minute: k
    } = rn(l), {
      hour: S,
      minute: w
    } = rn(s);
    f = S === v && a < w || P === v && a > k;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Od = (e) => {
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
  } = mi(t, o, i), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: C,
      second: $
    } = rn(s);
    c = y === f && C < l || C === l && a > $;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: k,
      second: S
    } = rn(u);
    c = P === f && k > l || k === l && a > S;
  }
  if (s && u) {
    var {
      hour: w,
      minute: E,
      second: A
    } = rn(s), {
      hour: V,
      minute: I,
      second: B
    } = rn(u);
    c = w === f && E < l || V === f && I > l || w === f && E === l && a > A || V === f && I === l && a < B;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: G1,
  classes: q1
} = ee("time-picker");
function K1(e, n) {
  return g(), O(
    "div",
    {
      class: m(e.n("clock"))
    },
    [D(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: q(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (g(!0), O(
      Oe,
      null,
      Be(e.timeScales, (r, a) => (g(), O(
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
    )), e.format === "24hr" && e.type === "hour" ? (g(), O(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(g(!0), O(
        Oe,
        null,
        Be(e.hours24, (r, a) => (g(), O(
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
var Vd = x({
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
    } = n, a = M(null), t = M([]), o = M([]), i = F(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = F(() => {
      if (e.rad !== void 0) {
        var C = e.rad / 30;
        return C >= 0 ? C : C + 12;
      }
    }), s = F(() => e.type === "hour" ? cn : Ol), u = (C, $) => {
      var P;
      C = (P = C) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var k = e.type === "minute" ? Pd : Od, S = {
        time: z(C),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return $ && e.type === "minute" && Reflect.deleteProperty(S, "minute"), k(S);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var C = e.isInner ? _e[l.value] : s.value[l.value];
      return s.value === Ol ? u() ? "#bdbdbd" : e.color : f(C) ? "#bdbdbd" : e.color;
    }, v = (C, $) => $ ? l.value === C && e.isInner : l.value === C && (!e.isInner || e.type !== "hour"), f = (C) => {
      if (e.type === "hour") {
        if (Td(e.format, e.ampm))
          return t.value.includes(C);
        var $ = cn.findIndex((P) => P === C);
        return o.value.includes($);
      }
      return u(C, !0);
    }, c = (C, $, P) => {
      var k = 2 * Math.PI / 12 * C - Math.PI / 2, S = 50 * (1 + Math.cos(k)), w = 50 * (1 + Math.sin(k)), E = () => v(C, P) ? f($) ? {
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
        color: V
      } = E();
      return {
        left: S + "%",
        top: w + "%",
        backgroundColor: A,
        color: V
      };
    }, h = () => {
      var {
        width: C,
        height: $
      } = a.value.getBoundingClientRect();
      return {
        width: C,
        height: $
      };
    }, y = () => {
      if (l.value !== void 0) {
        var C = e.ampm === "am" ? cn : _e;
        return fa(C[l.value], 2, "0");
      }
    };
    return ie([l, () => e.isInner], (C, $) => {
      var [P, k] = C, [S, w] = $, E = P === S && k === w;
      if (!(E || e.type !== "hour" || l.value === void 0)) {
        var A = k ? _e[l.value] : y(), V = e.useSeconds ? ":" + e.time.second : "", I = A + ":" + e.time.minute + V;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), ie(() => e.rad, (C, $) => {
      if (!(e.type === "hour" || C === void 0 || $ === void 0)) {
        var P = C / 6 >= 0 ? C / 6 : C / 6 + 60, k = $ / 6 >= 0 ? $ / 6 : $ / 6 + 60;
        if (P !== k) {
          var S, {
            hourStr: w
          } = mi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var E = te().minute(P).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            S = w + ":" + E + A;
          }
          if (e.type === "second") {
            var V = te().second(P).format("ss"), I = e.useSeconds ? ":" + V : "";
            S = w + ":" + e.time.minute + I;
          }
          r("update", S);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (C) => {
      var [$, P, k] = C;
      if (t.value = [], $ && !P) {
        var {
          hour: S
        } = rn($), w = cn.filter((J) => z(J) > S), E = _e.filter((J) => z(J) > S);
        t.value = [...w, ...E];
      }
      if (!$ && P) {
        var {
          hour: A
        } = rn(P), V = cn.filter((J) => z(J) < A), I = _e.filter((J) => z(J) < A);
        t.value = [...V, ...I];
      }
      if ($ && P) {
        var {
          hour: B
        } = rn($), {
          hour: p
        } = rn(P), b = cn.filter((J) => z(J) < p || z(J) > B), L = _e.filter((J) => z(J) < p || z(J) > B);
        t.value = [...b, ...L];
      }
      if (k != null && k.hours) {
        var {
          hours: Q
        } = k, Y = cn.filter((J) => !Q(z(J))), R = _e.filter((J) => !Q(z(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...Y, ...R])];
      }
      o.value = t.value.map((J) => _e.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: G1,
      classes: q1,
      hours24: _e,
      timeScales: s,
      inner: a,
      handStyle: i,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: h,
      getStyle: c,
      activeItemIndex: l
    };
  }
});
Vd.render = K1;
const X1 = Vd;
var {
  n: Z1,
  classes: J1
} = ee("time-picker"), Q1 = (e) => (ya(""), e = e(), ba(), e), _1 = /* @__PURE__ */ Q1(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), x1 = {
  key: 0
};
function ew(e, n) {
  var r = le("clock");
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: q({
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
        ), _1, D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (g(), O("span", x1, ":")) : _("v-if", !0), e.useSeconds ? (g(), O(
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
      ), e.format === "ampm" ? (g(), O(
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
            default: ve(() => [(g(), me(
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
var Md = x({
  name: "VarTimePicker",
  components: {
    Clock: X1
  },
  props: j1,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), o = M(!1), i = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), c = M("am"), h = M(!1), y = M(!1), C = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = Me({
      x: 0,
      y: 0
    }), P = Me({
      x: [],
      y: []
    }), k = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (N) => {
      T(e["onUpdate:modelValue"], N), T(e.onChange, N);
    }, w = (N) => N * 57.29577951308232, E = (N) => {
      l.value = !1, y.value = !1, f.value = N;
    }, A = (N) => {
      var {
        disableHour: X
      } = a.value, H = cn.findIndex((oe) => z(oe) === z(C.value.hour)), Z = N === "am" ? cn : _e, ae = [...Z.slice(H), ...Z.slice(0, H)];
      return ae.find((oe, he) => (o.value = he !== 0, !X.includes(oe)));
    }, V = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = A(N);
        if (X) {
          var H = e.useSeconds ? ":" + C.value.second : "", Z = fa(X, 2, "0") + ":" + C.value.minute + H;
          S(Z);
        }
      }
    }, I = (N, X) => {
      var H = N >= P.x[0] && N <= P.x[1], Z = X >= P.y[0] && X <= P.y[1];
      return H && Z;
    }, B = (N) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: H,
        minute: Z,
        second: ae
      } = rn(N);
      return {
        hour: te().hour(H).format(X),
        minute: te().minute(Z).format("mm"),
        second: te().second(ae).format("ss")
      };
    }, p = (N) => {
      var X = N / 30;
      return X >= 0 ? X : X + 12;
    }, b = () => {
      var {
        width: N,
        height: X
      } = a.value.getSize(), H = $.x - N / 2 - 8, Z = $.x + N / 2 + 8, ae = $.y - X / 2 - 8, oe = $.y + X / 2 + 8;
      return {
        rangeXMin: H,
        rangeXMax: Z,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, L = (N, X, H) => {
      var {
        disableHour: Z
      } = a.value;
      i.value = I(N, X);
      var ae = Math.round(H / 30) * 30 + 90, oe = p(ae), he = t.value ? cn[oe] : _e[oe];
      if (Z.includes(he) || (t.value = e.format === "24hr" ? I(N, X) : !1), t.value === i.value) {
        var pe = t.value || c.value === "pm" ? _e[oe] : cn[oe];
        h.value = Z.includes(pe), !h.value && (u.value = ae, l.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: X
      } = a.value, H = Math.round(N / 6) * 6 + 90, Z = H / 6 >= 0 ? H / 6 : H / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: C.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      y.value = Pd(ae), !y.value && (d.value = H, s.value = !0);
    }, Y = (N) => {
      var {
        disableHour: X
      } = a.value, H = Math.round(N / 6) * 6 + 90, Z = H / 6 >= 0 ? H / 6 : H / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: C.value.hour,
        minute: z(C.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      Od(ae) || (v.value = H);
    }, R = () => {
      var {
        left: N,
        top: X,
        width: H,
        height: Z
      } = n.value.getBoundingClientRect();
      if ($.x = N + H / 2, $.y = X + Z / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: he,
          rangeYMax: pe
        } = b();
        P.x = [ae, oe], P.y = [he, pe];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: H
        } = N.touches[0], Z = X - $.x, ae = H - $.y, oe = Math.round(w(Math.atan2(ae, Z)));
        f.value === "hour" ? L(X, H, oe) : f.value === "minute" ? Q(oe) : Y(oe);
      }
    }, j = () => {
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
    return ie(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: X,
          minute: H,
          second: Z
        } = rn(N), ae = te().hour(X).format("hh"), oe = te().hour(X).format("HH"), he = te().minute(H).format("mm"), pe = te().second(Z).format("ss");
        u.value = (ae === "12" ? 0 : z(ae)) * 30, d.value = z(he) * 6, v.value = z(pe) * 6, C.value = B(N), e.format !== "24hr" && (c.value = fa("" + X, 2, "0") === oe && _e.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: Z1,
      classes: J1,
      getRad: k,
      time: C,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: J,
      checkPanel: E,
      checkAmpm: V,
      end: j,
      update: S,
      changePreventUpdate: K
    };
  }
});
Md.render = ew;
const ua = Md;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var zC = ua;
function nw(e) {
  return ["click", "hover"].includes(e);
}
function rw(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function aw(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var tw = {
  type: {
    type: String,
    default: "default",
    validator: aw
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
    validator: nw
  },
  placement: {
    type: String,
    default: "bottom",
    validator: rw
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, {
  n: ow,
  classes: iw
} = ee("tooltip");
function lw(e, n) {
  return g(), O(
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
    [W(e.$slots, "default"), (g(), me(
      za,
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
          default: ve(() => [ke(D(
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
            [D(
              "div",
              {
                style: q({
                  background: e.color
                }),
                class: m(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [W(e.$slots, "content", {}, () => [ge(
                ne(e.content),
                1
                /* TEXT */
              )])],
              6
              /* CLASS, STYLE */
            )],
            38
            /* CLASS, STYLE, HYDRATE_EVENTS */
          ), [[La, e.show]])]),
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
var Ed = x({
  name: "VarTooltip",
  props: tw,
  setup(e) {
    var {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      handleHostClick: o,
      handleHostMouseenter: i,
      handleHostMouseleave: l,
      handlePopoverMouseenter: s,
      handlePopoverMouseleave: u,
      handlePopoverClose: d,
      // expose
      open: v,
      // expose
      close: f,
      // expose
      resize: c
    } = Nu(e);
    return {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      n: ow,
      classes: iw,
      handleHostClick: o,
      handlePopoverClose: d,
      handleHostMouseenter: i,
      handleHostMouseleave: l,
      handlePopoverMouseenter: s,
      handlePopoverMouseleave: u,
      resize: c,
      open: v,
      close: f
    };
  }
});
Ed.render = lw;
const da = Ed;
da.install = function(e) {
  e.component(da.name, da);
};
var LC = da, sw = {
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
function Vl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ml(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Vl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Vl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: uw,
  classes: dw
} = ee("uploader"), vw = 0, fw = ["onClick"], cw = ["onClick"], mw = ["src", "alt"], pw = ["multiple", "accept", "capture", "disabled"], hw = ["src"];
function gw(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), o = Ke("ripple");
  return g(), O(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(g(!0), O(
        Oe,
        null,
        Be(e.files, (i) => ke((g(), O(
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
          ), e.removable ? (g(), O(
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
            cw
          )) : _("v-if", !0), i.cover ? (g(), O(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: q({
                objectFit: i.fit
              }),
              src: i.cover,
              alt: i.name
            },
            null,
            14,
            mw
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
          fw
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((g(), O(
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
          pw
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
        "onUpdate:show": n[2] || (n[2] = (i) => e.showPreview = i),
        onClosed: n[3] || (n[3] = (i) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var i, l;
          return [e.currentPreview && e.isHTMLSupportVideo((i = e.currentPreview) == null ? void 0 : i.url) ? (g(), O(
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
            hw
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
var Id = x({
  name: "VarUploader",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarPopup: mn,
    VarFormDetails: He
  },
  props: sw,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = F(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: R
        }
      } = e;
      return an(Y) ? R + " / " + Y : "";
    }), {
      form: o,
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = F(() => {
      var {
        modelValue: Y,
        hideList: R
      } = e;
      return R ? [] : Y;
    }), f = (Y) => {
      var {
        disabled: R,
        readonly: J,
        previewed: j
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || R || J || !j)) {
        var {
          url: K
        } = Y;
        if (Xe(K) && wi(K)) {
          Hn(K);
          return;
        }
        Xe(K) && Ci(K) && (a.value = Y, r.value = !0);
      }
    }, c = (Y) => ({
      id: vw++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), h = (Y) => {
      var R = Y.target, {
        files: J
      } = R;
      return Array.from(J);
    }, y = (Y) => new Promise((R) => {
      var J = new FileReader();
      J.onload = () => {
        var j = J.result;
        Y.file.type.startsWith("image") && (Y.cover = j), Y.url = j, R(Y);
      }, J.readAsDataURL(Y.file);
    }), C = (Y) => Y.map(y), $ = (Y) => {
      var {
        onBeforeRead: R
      } = e;
      return Y.map((J) => new Promise((j) => {
        R || j({
          valid: !0,
          varFile: J
        });
        var K = T(R, Me(J));
        K = be(K) ? K : [K], Promise.all(K).then((N) => {
          j({
            valid: !N.some((X) => !X),
            varFile: J
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var Y = Ml(function* (R) {
        var {
          maxsize: J,
          maxlength: j,
          modelValue: K,
          onOversize: N,
          onAfterRead: X,
          readonly: H,
          disabled: Z
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || Z || H)) {
          var ae = (Ae) => Ae.filter((vn) => vn.file.size > z(J) ? (T(N, Me(vn)), !1) : !0), oe = (Ae) => {
            var vn = Math.min(Ae.length, z(j) - K.length);
            return Ae.slice(0, vn);
          }, he = h(R), pe = he.map(c);
          pe = J != null ? ae(pe) : pe, pe = j != null ? oe(pe) : pe;
          var Ye = yield Promise.all(C(pe)), en = yield Promise.all($(Ye)), on = en.filter((Ae) => {
            var {
              valid: vn
            } = Ae;
            return vn;
          }).map((Ae) => {
            var {
              varFile: vn
            } = Ae;
            return vn;
          });
          T(e["onUpdate:modelValue"], [...K, ...on]), R.target.value = "", on.forEach((Ae) => T(X, Me(Ae)));
        }
      });
      return function(J) {
        return Y.apply(this, arguments);
      };
    }(), k = /* @__PURE__ */ function() {
      var Y = Ml(function* (R) {
        var {
          disabled: J,
          readonly: j,
          modelValue: K,
          onBeforeRemove: N,
          onRemove: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || j)) {
          if (N) {
            var H = T(N, Me(R));
            if (H = be(H) ? H : [H], (yield Promise.all(H)).some((ae) => !ae))
              return;
          }
          var Z = K.filter((ae) => ae !== R);
          T(X, Me(R)), B("onRemove"), T(e["onUpdate:modelValue"], Z);
        }
      });
      return function(J) {
        return Y.apply(this, arguments);
      };
    }(), S = () => e.modelValue.filter((Y) => Y.state === "success"), w = () => e.modelValue.filter((Y) => Y.state === "error"), E = () => e.modelValue.filter((Y) => Y.state === "loading"), A = () => {
      n.value.click();
    }, V = () => {
      a.value = null, r.value = !1, Hn.close();
    }, I = {
      getSuccess: S,
      getError: w,
      getLoading: E
    }, B = (Y) => {
      Ee(() => {
        var {
          validateTrigger: R,
          rules: J,
          modelValue: j
        } = e;
        s(R, Y, J, j, I);
      });
    }, p = !1, b = () => u(e.rules, e.modelValue, I), L = () => {
      p = !0, T(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: b,
      resetValidation: d,
      reset: L
    };
    return T(i, Q), ie(() => e.modelValue, () => {
      !p && B("onChange"), p = !1;
    }, {
      deep: !0
    }), {
      n: uw,
      classes: dw,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: Ci,
      isHTMLSupportImage: wi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: k,
      getSuccess: S,
      getError: w,
      getLoading: E,
      validate: b,
      resetValidation: d,
      reset: L,
      chooseFile: A,
      closePreview: V
    };
  }
});
Id.render = gw;
const va = Id;
va.install = function(e) {
  e.component(va.name, va);
};
var RC = va;
const yw = "2.7.4";
function bw(e) {
  ca.install && e.use(ca), yr.install && e.use(yr), br.install && e.use(br), ar.install && e.use(ar), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), kr.install && e.use(kr), xe.install && e.use(xe), $r.install && e.use($r), tr.install && e.use(tr), or.install && e.use(or), Tr.install && e.use(Tr), ir.install && e.use(ir), Pr.install && e.use(Pr), Or.install && e.use(Or), Vr.install && e.use(Vr), sn.install && e.use(sn), Mr.install && e.use(Mr), Er.install && e.use(Er), Br.install && e.use(Br), ma.install && e.use(ma), Nr.install && e.use(Nr), An.install && e.use(An), He.install && e.use(He), $e.install && e.use($e), Dr.install && e.use(Dr), Hn.install && e.use(Hn), Ar.install && e.use(Ar), zr.install && e.use(zr), ur.install && e.use(ur), kt.install && e.use(kt), Lr.install && e.use(Lr), Rr.install && e.use(Rr), $n.install && e.use($n), Bo.install && e.use(Bo), io.install && e.use(io), Fn.install && e.use(Fn), Ur.install && e.use(Ur), Yr.install && e.use(Yr), Fr.install && e.use(Fr), ga.install && e.use(ga), mn.install && e.use(mn), Hr.install && e.use(Hr), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), We.install && e.use(We), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), Uo.install && e.use(Uo), xr.install && e.use(xr), ea.install && e.use(ea), na.install && e.use(na), Rn.install && e.use(Rn), Qa.install && e.use(Qa), zn.install && e.use(zn), Ln.install && e.use(Ln), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), Fo.install && e.use(Fo), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va);
}
const UC = {
  version: yw,
  install: bw,
  ActionSheet: ca,
  AppBar: yr,
  BackTop: br,
  Badge: ar,
  BottomNavigation: wr,
  BottomNavigationItem: Cr,
  Breadcrumb: Sr,
  Breadcrumbs: kr,
  Button: xe,
  Card: $r,
  Cell: tr,
  Checkbox: or,
  CheckboxGroup: Tr,
  Chip: ir,
  Col: Pr,
  Collapse: Or,
  CollapseItem: Vr,
  Context: sn,
  Countdown: Mr,
  Counter: Er,
  DatePicker: Br,
  Dialog: ma,
  Divider: Nr,
  Form: An,
  FormDetails: He,
  Icon: $e,
  Image: Dr,
  ImagePreview: Hn,
  IndexAnchor: Ar,
  IndexBar: zr,
  Input: ur,
  Lazy: kt,
  Link: Lr,
  List: Rr,
  Loading: $n,
  LoadingBar: Bo,
  Locale: io,
  Menu: Fn,
  Option: Ur,
  Overlay: Yr,
  Pagination: Fr,
  Picker: ga,
  Popup: mn,
  Progress: Hr,
  PullRefresh: Wr,
  Radio: jr,
  RadioGroup: Gr,
  Rate: qr,
  Result: Kr,
  Ripple: We,
  Row: Xr,
  Select: Zr,
  Skeleton: Jr,
  Slider: Qr,
  Snackbar: Uo,
  Space: xr,
  Step: ea,
  Steps: na,
  Sticky: Rn,
  StyleProvider: Qa,
  Swipe: zn,
  SwipeItem: Ln,
  Switch: aa,
  Tab: ta,
  TabItem: oa,
  Table: ia,
  Tabs: la,
  TabsItems: sa,
  Themes: Fo,
  TimePicker: ua,
  Tooltip: da,
  Uploader: va
};
export {
  ca as ActionSheet,
  yr as AppBar,
  br as BackTop,
  ar as Badge,
  wr as BottomNavigation,
  Cr as BottomNavigationItem,
  Sr as Breadcrumb,
  kr as Breadcrumbs,
  xe as Button,
  $r as Card,
  tr as Cell,
  or as Checkbox,
  Tr as CheckboxGroup,
  ir as Chip,
  Pr as Col,
  Or as Collapse,
  Vr as CollapseItem,
  sn as Context,
  Mr as Countdown,
  Er as Counter,
  Br as DatePicker,
  ma as Dialog,
  Nr as Divider,
  An as Form,
  He as FormDetails,
  $e as Icon,
  Dr as Image,
  Hn as ImagePreview,
  Ar as IndexAnchor,
  zr as IndexBar,
  ur as Input,
  kt as Lazy,
  Lr as Link,
  Rr as List,
  $n as Loading,
  Bo as LoadingBar,
  io as Locale,
  Fn as Menu,
  Ur as Option,
  Yr as Overlay,
  Po as PIXEL,
  Fr as Pagination,
  ga as Picker,
  mn as Popup,
  Hr as Progress,
  Wr as PullRefresh,
  jr as Radio,
  Gr as RadioGroup,
  qr as Rate,
  Kr as Result,
  We as Ripple,
  Xr as Row,
  fi as SNACKBAR_TYPE,
  Zr as Select,
  Jr as Skeleton,
  Qr as Slider,
  Uo as Snackbar,
  xr as Space,
  ea as Step,
  na as Steps,
  Rn as Sticky,
  Qa as StyleProvider,
  zn as Swipe,
  Ln as SwipeItem,
  aa as Switch,
  ta as Tab,
  oa as TabItem,
  ia as Table,
  la as Tabs,
  sa as TabsItems,
  Fo as Themes,
  ua as TimePicker,
  da as Tooltip,
  va as Uploader,
  Pw as _ActionSheetComponent,
  Ow as _AppBarComponent,
  Ew as _BackTopComponent,
  Iw as _BadgeComponent,
  Bw as _BottomNavigationComponent,
  Nw as _BottomNavigationItemComponent,
  Dw as _BreadcrumbComponent,
  Aw as _BreadcrumbsComponent,
  Mw as _ButtonComponent,
  zw as _CardComponent,
  Lw as _CellComponent,
  Uw as _CheckboxComponent,
  Yw as _CheckboxGroupComponent,
  Fw as _ChipComponent,
  Hw as _ColComponent,
  Ww as _CollapseComponent,
  jw as _CollapseItemComponent,
  Cw as _ContextComponent,
  Gw as _CountdownComponent,
  qw as _CounterComponent,
  Kw as _DatePickerComponent,
  Xw as _DialogComponent,
  Zw as _DividerComponent,
  Jw as _FormComponent,
  Rw as _FormDetailsComponent,
  $w as _IconComponent,
  _w as _ImageComponent,
  nC as _ImagePreviewComponent,
  aC as _IndexAnchorComponent,
  tC as _IndexBarComponent,
  oC as _InputComponent,
  Qw as _LazyComponent,
  iC as _LinkComponent,
  lC as _ListComponent,
  sC as _LoadingBarComponent,
  Vw as _LoadingComponent,
  Tw as _LocaleComponent,
  uC as _MenuComponent,
  dC as _OptionComponent,
  vC as _OverlayComponent,
  fC as _PaginationComponent,
  cC as _PickerComponent,
  kw as _PopupComponent,
  mC as _ProgressComponent,
  pC as _PullRefreshComponent,
  hC as _RadioComponent,
  gC as _RadioGroupComponent,
  yC as _RateComponent,
  bC as _ResultComponent,
  Sw as _RippleComponent,
  wC as _RowComponent,
  CC as _SelectComponent,
  SC as _SkeletonComponent,
  kC as _SliderComponent,
  $C as _SnackbarComponent,
  TC as _SpaceComponent,
  PC as _StepComponent,
  OC as _StepsComponent,
  rC as _StickyComponent,
  VC as _StyleProviderComponent,
  xw as _SwipeComponent,
  eC as _SwipeItemComponent,
  MC as _SwitchComponent,
  EC as _TabComponent,
  IC as _TabItemComponent,
  BC as _TableComponent,
  NC as _TabsComponent,
  DC as _TabsItemsComponent,
  AC as _ThemesComponent,
  zC as _TimePickerComponent,
  LC as _TooltipComponent,
  RC as _UploaderComponent,
  Sv as actionSheetProps,
  _o as add,
  Bv as appBarProps,
  _v as backTopProps,
  tf as badgeProps,
  pf as bottomNavigationItemProps,
  uf as bottomNavigationProps,
  Cf as breadcrumbProps,
  Of as breadcrumbsProps,
  Kv as buttonProps,
  If as cardProps,
  Lf as cellProps,
  ec as checkboxGroupProps,
  qf as checkboxProps,
  ic as chipProps,
  dc as colProps,
  wc as collapseItemProps,
  hc as collapseProps,
  $c as countdownProps,
  wm as counterProps,
  Fm as datePickerProps,
  UC as default,
  Le as defaultLazyOptions,
  tp as dialogProps,
  fp as dividerProps,
  Jl as enUS,
  Ff as formDetailsProps,
  gp as formProps,
  Xl as iconProps,
  tu as imageCache,
  xp as imagePreviewProps,
  zp as imageProps,
  uh as indexAnchorProps,
  ch as indexBarProps,
  bh as inputProps,
  bw as install,
  Oh as linkProps,
  Ih as listProps,
  zh as loadingBarProps,
  xn as loadingProps,
  Xh as menuProps,
  _l as merge,
  oy as optionProps,
  uy as overlayProps,
  Fe as pack,
  Ql as packs,
  vy as paginationProps,
  hy as pickerProps,
  _a as popupProps,
  $y as progressProps,
  Iy as pullRefreshProps,
  Hy as radioGroupProps,
  Ay as radioProps,
  qy as rateProps,
  Jy as resultProps,
  z0 as rowProps,
  F0 as selectProps,
  G0 as skeletonProps,
  J0 as sliderProps,
  td as snackbarProps,
  bb as spaceProps,
  Sb as stepProps,
  Eb as stepsProps,
  ft as stickyProps,
  Nb as styleProviderProps,
  fu as swipeProps,
  zb as switchProps,
  Kb as tabItemProps,
  Yb as tabProps,
  Qb as tableProps,
  o1 as tabsItemsProps,
  n1 as tabsProps,
  j1 as timePickerProps,
  tw as tooltipProps,
  sw as uploaderProps,
  xo as use,
  Qo as useLocale,
  yw as version,
  Jo as zhCN
};
