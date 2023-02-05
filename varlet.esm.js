import { reactive as Me, onMounted as Ue, onUnmounted as cr, ref as E, onActivated as Fo, onDeactivated as Ho, createApp as Bd, getCurrentInstance as Aa, provide as Ol, computed as F, inject as Vl, nextTick as Ee, h as Ml, onBeforeUnmount as Pt, isVNode as Ot, watch as ie, onBeforeMount as Nd, defineComponent as x, createVNode as re, Teleport as za, Transition as De, withDirectives as ke, vShow as La, mergeProps as Ve, openBlock as y, createBlock as me, resolveDynamicComponent as Ra, normalizeClass as m, normalizeStyle as q, resolveComponent as le, resolveDirective as qe, withCtx as ve, createElementVNode as D, renderSlot as W, toDisplayString as ne, createElementBlock as M, Fragment as Oe, renderList as Be, createCommentVNode as _, onUpdated as Wo, createTextVNode as ge, pushScopeId as ya, popScopeId as ba, withModifiers as Vn, normalizeProps as El, guardReactiveProps as Dd, vModelText as Ad, toRefs as zd, withKeys as mi, toRaw as pi, TransitionGroup as Ld, Comment as Rd } from "vue";
var Il = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, uw = Me(Il);
const sn = Me(Il), Ke = (e) => typeof e == "string", xt = (e) => typeof e == "boolean", _e = (e) => typeof e == "number", jo = (e) => Object.prototype.toString.call(e) === "[object Object]", Ud = (e) => typeof e == "object" && e !== null, be = (e) => Array.isArray(e), Yd = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Ke(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : xt(e) ? Number(e) : e, Vt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Go = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, qo = () => typeof window < "u", hi = (e) => [...new Set(e)], Fd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Hd = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var gi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), yi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Wd = (e) => {
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
}, eo = (e) => e, bi = (e) => Math.pow(e, 3), Bl = (e) => e < 0.5 ? bi(e * 2) / 2 : 1 - bi((1 - e) * 2) / 2, Mt = (e, n) => e ?? n, Nl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, va = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function wi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jd(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        wi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        wi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Gd(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Ci(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Et(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ko(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function qd(e) {
  return no.apply(this, arguments);
}
function no() {
  return no = jd(function* (e) {
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
function Kd(e) {
  for (var n = [], r = e; r !== window; )
    r = wa(r), n.push(r);
  return n;
}
function Dl(e, n) {
  if (Ke(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Ud(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Al = (e) => Ke(e) && e.endsWith("rem"), Xd = (e) => Ke(e) && e.endsWith("px") || _e(e), Zd = (e) => Ke(e) && e.endsWith("%"), zl = (e) => Ke(e) && e.endsWith("vw"), Ll = (e) => Ke(e) && e.endsWith("vh"), Jd = (e) => Ke(e) && e.startsWith("calc("), Qd = (e) => Ke(e) && e.startsWith("var("), Ne = (e) => {
  if (_e(e))
    return e;
  if (Xd(e))
    return +e.replace("px", "");
  if (zl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Ll(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Al(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ke(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return Zd(e) || zl(e) || Ll(e) || Al(e) || Jd(e) || Qd(e) ? e : Ne(e) + "px";
}, Je = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Pn(e) {
  var n = Nl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function _d(e) {
  var n = Nl();
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
function xd() {
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
  } = n, i = Date.now(), l = Et(e), s = Ko(e);
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
function Rl(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Fd(a);
    return n[o] = t, n;
  }, {});
}
function ev() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var nv = ["collect", "clear"];
function Si(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ki(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Si(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Si(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function rv(e, n) {
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
function Ge(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function av(e) {
  var n = Bd(e), r = document.createElement("div");
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
      return () => Ml(e, mt({}, n, r));
    }
  }, {
    unmount: t
  } = av(a);
  return {
    unmountInstance: t
  };
}
function tv(e) {
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
    var l = tv(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    Vt(n, l);
  };
  Ol(e, {
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
  if (!Ul(e))
    return {
      index: null
    };
  var n = Vl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Aa();
  Ue(() => {
    Ee().then(() => r(o));
  }), cr(() => {
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
    Ol(e, mt({
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
  if (!Ul(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Vl(e), {
    collect: r,
    clear: a
  } = n, t = rv(n, nv), o = (i) => {
    Ue(() => r(i)), Pt(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function Ul(e) {
  var n = Aa();
  return e in n.provides;
}
function bn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = ki(function* (o, i, l) {
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
    var t = ki(function* (o, i, l, s, u) {
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
function ov(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), cr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Xo() {
  var e = E(!1);
  return Fo(() => {
    e.value = !1;
  }), Ho(() => {
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
function P(e) {
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
  n: Yl
} = ee("ripple"), $i = 250;
function iv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function lv(e, n) {
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
function Fl(e) {
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
      } = lv(this, e), s = document.createElement("div");
      s.classList.add(Yl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), iv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function ro() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Yl());
    if (r.length) {
      var a = r[r.length - 1], t = $i - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, $i);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Hl() {
  var e = this._ripple;
  ev() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function sv(e, n) {
  var r, a, t;
  e._ripple = pt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: ro.bind(e)
  }), e.addEventListener("touchstart", Fl, {
    passive: !0
  }), e.addEventListener("touchmove", Hl, {
    passive: !0
  }), e.addEventListener("dragstart", ro, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function uv(e) {
  e.removeEventListener("touchstart", Fl), e.removeEventListener("touchmove", Hl), e.removeEventListener("dragstart", ro), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function dv(e, n) {
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
var Wl = {
  mounted: sv,
  unmounted: uv,
  updated: dv,
  install(e) {
    e.directive("ripple", this);
  }
}, dw = Wl;
const We = Wl;
function vv(e) {
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
    validator: vv
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
function jl() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function nt(e) {
  sn.locks[e] = 1, jl();
}
function rt(e) {
  delete sn.locks[e], jl();
}
function Bt(e, n) {
  var {
    uid: r
  } = Aa();
  n && ie(n, (a) => {
    a === !1 ? rt(r) : a === !0 && e() === !0 && nt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? nt(r) : rt(r));
  }), Nd(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), cr(() => {
    n && n() === !1 || e() === !0 && rt(r);
  }), Fo(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), Ho(() => {
    n && n() === !1 || e() === !0 && rt(r);
  });
}
function xa(e, n) {
  var r = E(sn.zIndex);
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
function fv(e) {
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
    } = Xo(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      P(v), d && P(e["onUpdate:show"], !1);
    };
    Bt(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      P(d ? e.onOpen : e.onClose);
    }), ov(() => P(e.onRouteChange));
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
    }, a), [P(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: h,
        position: C
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
          name: h || Bn("$-pop-" + C)
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
        }, fv(v = u()) ? v : {
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
var vw = mn, Gl = {
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
function Ti(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cv(e) {
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
var {
  n: mv,
  classes: pv
} = ee("icon");
function hv(e, n) {
  return y(), me(
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
var ql = x({
  name: "VarIcon",
  props: Gl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = cv(function* (o, i) {
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
      n: mv,
      classes: pv,
      nextName: n,
      shrinking: r,
      isURL: Yd,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
ql.render = hv;
const $e = ql;
$e.install = function(e) {
  e.component($e.name, $e);
};
var fw = $e;
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
var gv = to({
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
}, Ge(_a, [
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
const Zo = {
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
}, Kl = {
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
function Jo() {
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
  packs: Xl,
  pack: Fe,
  add: Qo,
  use: _o,
  merge: Zl
} = Jo();
Qo("zh-CN", Zo);
_o("zh-CN");
var cw = {
  zhCN: Zo,
  enUS: Kl,
  packs: Xl,
  pack: Fe,
  add: Qo,
  use: _o,
  merge: Zl,
  useLocale: Jo
};
const io = {
  zhCN: Zo,
  enUS: Kl,
  packs: Xl,
  pack: Fe,
  add: Qo,
  use: _o,
  merge: Zl,
  useLocale: Jo
};
var {
  n: yv,
  classes: bv
} = ee("action-sheet"), wv = ["onClick"];
function Cv(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = qe("ripple");
  return y(), me(
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
        )]), W(e.$slots, "actions", {}, () => [(y(!0), M(
          Oe,
          null,
          Be(e.actions, (o) => ke((y(), M(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (y(), me(
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
            wv
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
var Jl = x({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: gv,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: o,
          onSelect: i
        } = e;
        P(i, t), o && P(e["onUpdate:show"], !1);
      }
    }, a = (t) => P(e["onUpdate:show"], t);
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: yv,
      classes: bv,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Fe,
      dt: Mt,
      handleSelect: r
    };
  }
});
Jl.render = Cv;
const nr = Jl;
var Zn;
function fa(e) {
  return qo() ? new Promise((n) => {
    fa.close();
    var r = Me(e);
    r.teleport = "body", Zn = r;
    var {
      unmountInstance: a
    } = Ua(nr, r, {
      onSelect: (t) => {
        P(r.onSelect, t), n(t);
      },
      onClose: () => {
        P(r.onClose), n("close");
      },
      onClosed: () => {
        P(r.onClosed), a(), Zn === r && (Zn = null);
      },
      onRouteChange: () => {
        a(), Zn === r && (Zn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
fa.Component = nr;
nr.install = function(e) {
  e.component(nr.name, nr);
};
fa.close = () => {
  if (Zn != null) {
    var e = Zn;
    Zn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
fa.install = function(e) {
  e.component(nr.name, nr);
};
var mw = nr;
function Sv(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var kv = {
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
    validator: Sv
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
  n: $v,
  classes: Tv
} = ee("app-bar");
function Pv(e, n) {
  return y(), M(
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
      [W(e.$slots, "left"), e.titlePosition === "left" ? (y(), M(
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
    ), e.titlePosition === "center" ? (y(), M(
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
      [e.titlePosition === "right" ? (y(), M(
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
var Ql = x({
  name: "VarAppBar",
  props: kv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(o), Wo(o), {
      n: $v,
      classes: Tv,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ql.render = Pv;
const gr = Ql;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var pw = gr;
function Ov(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Vv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var _n = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Ov
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: Vv
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
  n: Mv,
  classes: Ev
} = ee("loading"), Iv = (e) => (ya(""), e = e(), ba(), e), Bv = /* @__PURE__ */ Iv(() => /* @__PURE__ */ D(
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
)), Nv = [Bv];
function Dv(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (y(), M(
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
    )) : _("v-if", !0), e.isShow ? (y(), M(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (y(), M(
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
          Nv,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (y(!0), M(
        Oe,
        null,
        Be(e.loadingTypeDict, (r, a) => (y(), M(
          Oe,
          {
            key: a
          },
          [e.type === a ? (y(), M(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(y(!0), M(
              Oe,
              null,
              Be(r, (t) => (y(), M(
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
      )), e.$slots.description || e.description ? (y(), M(
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
var _l = x({
  name: "VarLoading",
  props: _n,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = F(() => P(r.default) ? e.loading : !0);
    return {
      n: Mv,
      classes: Ev,
      multiplySizeUnit: Je,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
_l.render = Dv;
const $n = _l;
$n.install = function(e) {
  e.component($n.name, $n);
};
var hw = $n;
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
function Av(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function zv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Lv(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Rv = {
  type: {
    type: String,
    default: "default",
    validator: Av
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Lv
  },
  size: {
    type: String,
    default: "normal",
    validator: zv
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
  loadingType: Ge(_n, "type"),
  loadingSize: Ge(_n, "size"),
  loadingColor: lo({}, Ge(_n, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: Uv,
  classes: Yv
} = ee("button"), Fv = ["type", "disabled"];
function Hv(e, n) {
  var r = le("var-loading"), a = qe("ripple");
  return ke((y(), M(
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
    [e.loading || e.pending ? (y(), me(
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
    Fv
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var xl = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: We
  },
  props: Rv,
  setup(e) {
    var n = E(!1), r = (o) => {
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
      !s || i || l || n.value || r(P(s, o));
    }, t = (o) => {
      var {
        loading: i,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || i || l || n.value || r(P(s, o));
    };
    return {
      n: Uv,
      classes: Yv,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
xl.render = Hv;
const xe = xl;
xe.install = function(e) {
  e.component(xe.name, xe);
};
var gw = xe, Wv = {
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
  n: jv,
  classes: Gv
} = ee("back-top");
function qv(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return y(), me(
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
var es = x({
  name: "VarBackTop",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Wv,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, o = (s) => {
      P(e.onClick, s);
      var u = Ko(t);
      qa(t, {
        left: u,
        duration: e.duration,
        animation: Bl
      });
    }, i = () => {
      n.value = Et(t) >= Ne(e.visibilityHeight);
    }, l = Go(i, 200);
    return Ue(() => {
      t = e.target ? Dl(e.target, "BackTop") : wa(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Pt(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: jv,
      classes: Gv,
      click: o
    };
  }
});
es.render = qv;
const yr = es;
yr.install = function(e) {
  e.component(yr.name, yr);
};
var yw = yr;
function Kv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Xv(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Zv = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: Kv
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
    validator: Xv
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Wn,
  classes: Jv
} = ee("badge"), Qv = {
  key: 1
};
function _v(e, n) {
  var r = le("var-icon");
  return y(), M(
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
          [e.icon && !e.dot ? (y(), me(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (y(), M(
            "span",
            Qv,
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
var ns = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Zv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = F(() => {
      var {
        type: i,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Wn("position") + " " + Wn("--" + l), v = s ? Wn("dot") : null, f = o(), c = u ? Wn("icon") : null;
      return [Wn("--" + i), d, v, f, c];
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
        return Wn("dot--right");
      if (l && i.includes("left"))
        return Wn("dot--left");
    };
    return {
      n: Wn,
      classes: Jv,
      values: t,
      contentClass: a
    };
  }
});
ns.render = _v;
const rr = ns;
rr.install = function(e) {
  e.component(rr.name, rr);
};
var bw = rr, xv = {
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
}, rs = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), as = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function ef() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(rs), {
    length: r
  } = gn(as);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: nf,
  classes: rf
} = ee("bottom-navigation"), {
  n: Nt
} = ee("bottom-navigation-item"), Pi = Nt("--right-half-space"), Oi = Nt("--left-half-space"), Vi = Nt("--right-space"), af = {
  type: "primary"
};
function tf(e, n) {
  var r = le("var-button");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (y(), me(
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
var ts = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: xe
  },
  props: xv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = F(() => e.active), o = F(() => e.activeColor), i = F(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = ef(), v = () => {
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
      _e(t.value) && (t.value < 0 ? P(e["onUpdate:active"], 0) : t.value > s.value - 1 && P(e["onUpdate:active"], s.value - 1));
    }, C = (V) => {
      t.value !== V && (e.onBeforeChange ? g(V) : $(V));
    }, g = (V) => {
      var I = P(e.onBeforeChange, V);
      I = be(I) ? I : [I], Promise.all(I).then((B) => {
        B.some((p) => !p) || $(V);
      });
    }, $ = (V) => {
      P(e["onUpdate:active"], V), P(e.onChange, V);
    }, T = () => {
      var V = O();
      V.forEach((I) => {
        I.classList.remove(Pi, Oi, Vi);
      });
    }, w = (V) => {
      var I = O(), B = I.length, p = V % 2 === 0;
      I.forEach((b, L) => {
        S(p, b, L, B);
      });
    }, S = (V, I, B, p) => {
      var b = B === p - 1;
      if (!V && b) {
        I.classList.add(Vi);
        return;
      }
      var L = B === p / 2 - 1, Q = B === p / 2;
      L ? I.classList.add(Pi) : Q && I.classList.add(Oi);
    }, O = () => Array.from(a.value.querySelectorAll("." + Nt())), k = () => {
      P(e.onFabClick);
    }, A = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: C
    };
    return d(A), ie(() => s.value, v), ie(() => e.fabProps, (V) => {
      l.value = so({}, af, V);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      r.fab && w(s.value);
    }), Wo(() => {
      T(), r.fab && w(s.value);
    }), {
      n: nf,
      classes: rf,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
ts.render = tf;
const br = ts;
br.install = function(e) {
  e.component(br.name, br);
};
var ww = br, of = {
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
function lf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(rs), {
    index: r
  } = yn(as);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: sf,
  classes: uf
} = ee("bottom-navigation-item"), df = {
  type: "danger",
  dot: !0
};
function vf(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = qe("ripple");
  return ke((y(), M(
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
    [e.icon && !e.$slots.icon ? (y(), me(
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
    }), e.badge ? (y(), me(
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
      [e.$slots.default ? _("v-if", !0) : (y(), M(
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
var os = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: rr,
    VarIcon: $e
  },
  directives: {
    Ripple: We
  },
  props: of,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = lf(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = o, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, h = (c = n.value) != null ? c : t.value;
      P(e.onClick, h), P(o.onToggle, h);
    };
    return i(d), ie(() => r.value, (c) => {
      a.value = c === !0 ? df : r.value;
    }, {
      immediate: !0
    }), {
      n: sf,
      classes: uf,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
os.render = vf;
const wr = os;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var Cw = wr, ff = {
  separator: {
    type: String
  },
  onClick: U()
}, is = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), ls = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function cf() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(is), {
    length: r
  } = gn(ls);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function mf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(is), {
    index: r
  } = yn(ls);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: pf,
  classes: hf
} = ee("breadcrumb");
function gf(e, n) {
  return y(), M(
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
var ss = x({
  name: "VarBreadcrumb",
  props: ff,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = mf(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), i = (l) => {
      t.value || P(e.onClick, l);
    };
    return a(null), {
      n: pf,
      classes: hf,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
ss.render = gf;
const Cr = ss;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var Sw = Cr, yf = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: bf
} = ee("breadcrumbs");
function wf(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var us = x({
  name: "VarBreadcrumbs",
  props: yf,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = cf(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: bf
    };
  }
});
us.render = wf;
const Sr = us;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var kw = Sr;
function Cf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Sf = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Cf,
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
function Mi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ei(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Mi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Mi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: kf,
  classes: $f
} = ee("card"), Tf = 500, Pf = ["src", "alt"];
function Of(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = qe("ripple");
  return ke((y(), M(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: q({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
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
      [W(e.$slots, "image", {}, () => [e.src ? (y(), M(
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
        Pf
      )) : _("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (y(), M(
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
      ), e.showFloatingButtons ? (y(), M(
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
var ds = x({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarButton: xe
  },
  props: Sf,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), o = E("100%"), i = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = F(() => e.layout === "row"), h = E(!1), C = E(!1), {
      zIndex: g
    } = xa(() => e.floating, 1);
    Bt(() => e.floating, () => !c.value);
    var $ = "auto", T = "auto", w = null, S = E(null), O = /* @__PURE__ */ function() {
      var V = Ei(function* () {
        clearTimeout(S.value), clearTimeout(w), S.value = null, S.value = setTimeout(/* @__PURE__ */ Ei(function* () {
          var {
            width: I,
            height: B,
            left: p,
            top: b
          } = n.value.getBoundingClientRect();
          a.value = we(I), t.value = we(B), o.value = a.value, i.value = t.value, l.value = we(b), s.value = we(p), u.value = "fixed", $ = l.value, T = s.value, h.value = !0, yield Mn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", C.value = !0;
        }), e.ripple ? Tf : 0);
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(w), clearTimeout(S.value), S.value = null, o.value = a.value, i.value = t.value, l.value = $, s.value = T, v.value = "0px", f.value = "0", h.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", T = "auto", d.value = "hidden", u.value = void 0, C.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      P(e["onUpdate:floating"], !1);
    };
    return ie(() => e.floating, (V) => {
      c.value || Ee(() => {
        V ? O() : k();
      });
    }, {
      immediate: !0
    }), {
      n: kf,
      classes: $f,
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
      zIndex: g,
      isRow: c,
      close: A,
      showFloatingButtons: h,
      floated: C
    };
  }
});
ds.render = Of;
const kr = ds;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var $w = kr, Vf = {
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
  n: Mf,
  classes: Ef
} = ee("cell");
function If(e, n) {
  var r = le("var-icon");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (y(), M(
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
      ), e.$slots.description || e.description ? (y(), M(
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
    ), e.$slots.extra ? (y(), M(
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
var vs = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  props: Vf,
  setup() {
    return {
      n: Mf,
      classes: Ef
    };
  }
});
vs.render = If;
const ar = vs;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var Tw = ar, Bf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Nf
} = ee("form-details"), Df = {
  key: 0
}, Af = {
  key: 0
};
function zf(e, n) {
  return y(), me(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (y(), M(
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
              default: ve(() => [e.errorMessage ? (y(), M(
                "div",
                Df,
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
              default: ve(() => [e.extraMessage ? (y(), M(
                "div",
                Af,
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
var fs = x({
  name: "VarFormDetails",
  props: Bf,
  setup: () => ({
    n: Nf
  })
});
fs.render = zf;
const He = fs;
He.install = function(e) {
  e.component(He.name, He);
};
var Pw = He, Lf = {
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
}, cs = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), ms = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Rf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(cs), {
    length: r
  } = gn(ms);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Uf() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(cs), {
    index: r
  } = yn(ms);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
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
var ps = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(ps), r = Aa(), a = e ? (t) => {
    e(uo({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function Yf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ps);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Ff,
  classes: Hf
} = ee("checkbox");
function Wf(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = qe("ripple");
  return y(), M(
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
      [ke((y(), M(
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
var hs = x({
  name: "VarCheckbox",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  props: Lf,
  setup(e) {
    var n = E(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = E(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = Uf(), {
      form: l,
      bindForm: s
    } = wn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = bn(), c = (k) => {
      Ee(() => {
        var {
          validateTrigger: A,
          rules: V,
          modelValue: I
        } = e;
        d(A, k, V, I);
      });
    }, h = (k) => {
      n.value = k;
      var {
        checkedValue: A,
        onChange: V
      } = e;
      P(e["onUpdate:modelValue"], n.value), P(V, n.value), c("onChange"), k === A ? o == null || o.onChecked(A) : o == null || o.onUnchecked(A);
    }, C = (k) => {
      var {
        disabled: A,
        readonly: V,
        checkedValue: I,
        uncheckedValue: B,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || A) && (P(p, k), !(l != null && l.readonly.value || V))) {
        t.value = !0;
        var b = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && b || h(r.value ? B : I);
      }
    }, g = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: V
      } = e;
      n.value = k.includes(A) ? A : V;
    }, $ = () => {
      t.value = !1;
    }, T = () => {
      P(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, w = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: V
      } = e, I = ![A, V].includes(k);
      I && (k = r.value ? V : A), h(k);
    }, S = () => v(e.rules, e.modelValue);
    ie(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var O = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: S,
      resetValidation: f,
      reset: T,
      resetWithAnimation: $
    };
    return P(i, O), P(s, O), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Ff,
      classes: Hf,
      handleClick: C,
      toggle: w,
      reset: T,
      validate: S,
      resetValidation: f
    };
  }
});
hs.render = Wf;
const tr = hs;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var Ow = tr;
function jf(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Gf = {
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
    validator: jf
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
  n: qf,
  classes: Kf
} = ee("checkbox-group");
function Xf(e, n) {
  var r = le("var-form-details");
  return y(), M(
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
var gs = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: Gf,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Rf(), {
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
      P(e["onUpdate:modelValue"], A), P(e.onChange, A), f("onChange");
    }, h = (A) => {
      var {
        modelValue: V
      } = e;
      V.includes(A) || c([...V, A]);
    }, C = (A) => {
      var {
        modelValue: V
      } = e;
      V.includes(A) && c(V.filter((I) => I !== A));
    }, g = () => t.forEach((A) => {
      var {
        sync: V
      } = A;
      return V(e.modelValue);
    }), $ = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, T = () => {
      var A = t.map((I) => {
        var {
          checkedValue: B
        } = I;
        return B.value;
      }), V = hi(A);
      return $(), P(e["onUpdate:modelValue"], V), V;
    }, w = () => {
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
      }), V = hi(A);
      return $(), P(e["onUpdate:modelValue"], V), V;
    }, S = () => {
      P(e["onUpdate:modelValue"], []), d();
    }, O = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, g, {
      deep: !0
    }), ie(() => a.value, g);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: C,
      validate: O,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return o(k), P(i, k), {
      errorMessage: l,
      n: qf,
      classes: Kf,
      checkAll: T,
      inverseAll: w,
      reset: S,
      validate: O,
      resetValidation: d
    };
  }
});
gs.render = Xf;
const $r = gs;
$r.install = function(e) {
  e.component($r.name, $r);
};
var Vw = $r;
function Zf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Jf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Qf = {
  type: {
    type: String,
    default: "default",
    validator: Zf
  },
  size: {
    type: String,
    default: "normal",
    validator: Jf
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ge(Gl, "name"),
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
  n: jn,
  classes: _f
} = ee("chip");
function xf(e, n) {
  var r = le("var-icon");
  return y(), me(
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
        ), W(e.$slots, "right"), e.closable ? (y(), M(
          "span",
          {
            key: 0,
            class: m(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.onClose && e.onClose(...arguments);
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
var ys = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Qf,
  setup(e) {
    var n = F(() => {
      var {
        plain: a,
        textColor: t,
        color: o
      } = e;
      return a ? {
        color: t || o,
        borderColor: o
      } : {
        color: t,
        background: o
      };
    }), r = F(() => {
      var {
        size: a,
        block: t,
        type: o,
        plain: i,
        round: l
      } = e, s = jn(t ? "$--flex" : "$--inline-flex"), u = i ? jn("plain") + " " + jn("plain-" + o) : jn("--" + o), d = l ? jn("--round") : null;
      return [jn("--" + a), s, u, d];
    });
    return {
      n: jn,
      classes: _f,
      chipStyles: n,
      contentClass: r
    };
  }
});
ys.render = xf;
const or = ys;
or.install = function(e) {
  e.component(or.name, or);
};
var Mw = or;
function ec(e) {
  return ["row", "column"].includes(e);
}
var nc = {
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
    validator: ec
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
}, bs = Symbol("ROW_BIND_COL_KEY"), ws = Symbol("ROW_COUNT_COL_KEY");
function rc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(bs), {
    length: r
  } = gn(ws);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function ac() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(bs), {
    index: r
  } = yn(ws);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: at,
  classes: tc
} = ee("col");
function oc(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: q({
        flexDirection: e.direction,
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Cs = x({
  name: "VarCol",
  props: nc,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = F(() => z(e.span)), a = F(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = ac(), i = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (jo(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(at("--span-" + s + "-" + f)), v && d.push(at("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(at("--span-" + s + "-" + u));
      return d;
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), P(o, i), {
      n: at,
      classes: tc,
      padding: n,
      toNumber: z,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Cs.render = oc;
const Tr = Cs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var Ew = Tr, Ss = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), ks = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function ic() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ss), {
    length: r
  } = gn(ks);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var lc = {
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
  n: sc
} = ee("collapse");
function uc(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var $s = x({
  name: "VarCollapse",
  props: lc,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = ic(), t = F(() => e.modelValue), o = F(() => e.offset), i = () => !e.accordion && !be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, h) => i() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((C) => C !== c) : null, s = (c, h) => {
      var C = l(c, h);
      P(e["onUpdate:modelValue"], C), P(e.onChange, C);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: C
          } = h;
          return e.modelValue === C.value;
        });
      var c = r.filter((h) => {
        var {
          name: C
        } = h;
        return C.value === void 0 ? !1 : e.modelValue.includes(C.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: h,
        name: C
      } = c;
      return C.value === void 0 ? e.modelValue === h.value : !1;
    }) : r.filter((c) => {
      var {
        index: h,
        name: C
      } = c;
      return C.value === void 0 ? e.modelValue.includes(h.value) : !1;
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
          var C = e.accordion ? c === h : c.includes(h);
          h.init(e.accordion, C);
        });
      }
    }, f = {
      active: t,
      offset: o,
      updateItem: s
    };
    return a(f), ie(() => n.value, () => Ee().then(v)), ie(() => e.modelValue, () => Ee().then(v)), {
      n: sc
    };
  }
});
$s.render = uc;
const Pr = $s;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var Iw = Pr;
function dc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ss), {
    index: r
  } = yn(ks);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var vc = {
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
  n: fc,
  classes: cc
} = ee("collapse-item");
function mc(e, n) {
  var r = le("var-icon");
  return y(), M(
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
var Ts = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: vc,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = dc(), t = !0, o = E(null), i = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (w, S) => {
      s.value === void 0 || w && be(s.value) || S === l.value || (l.value = S, c(!0));
    }, c = (w) => {
      e.disabled || w || d(e.name || n.value, !l.value);
    }, h = () => {
      o.value && (o.value.style.height = "", i.value = !0, Ee(() => {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = 0 + "px", Pn(() => {
          o.value.style.height = w + "px", t && It(() => {
            t && $();
          });
        });
      }));
    }, C = () => {
      t = !1;
    }, g = () => {
      if (o.value) {
        var {
          offsetHeight: w
        } = o.value;
        o.value.style.height = w + "px", Pn(() => {
          o.value.style.height = 0 + "px";
        });
      }
    }, $ = () => {
      l.value || (i.value = !1), o.value.style.height = "";
    }, T = {
      index: n,
      name: v,
      init: f
    };
    return a(T), ie(l, (w) => {
      w ? h() : g();
    }), {
      n: fc,
      start: C,
      classes: cc,
      show: i,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: $
    };
  }
});
Ts.render = mc;
const Or = Ts;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var Bw = Or, pc = {
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
  n: hc
} = ee("countdown"), vo = 1e3, fo = 60 * vo, co = 60 * fo, Ii = 24 * co;
function gc(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default", El(Dd(e.timeData)), () => [ge(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Ps = x({
  name: "VarCountdown",
  props: pc,
  setup(e) {
    var n = E(0), r = E(!1), a = E(""), t = E(0), o = E(0), i = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, h) => {
      var C = Object.values(h), g = ["DD", "HH", "mm", "ss"], $ = [24, 60, 60, 1e3];
      if (g.forEach((w, S) => {
        c.includes(w) ? c = c.replace(w, va("" + C[S], 2, "0")) : C[S + 1] += C[S] * $[S];
      }), c.includes("S")) {
        var T = va("" + C[C.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", T) : c.includes("SS") ? c = c.replace("SS", T.slice(0, 2)) : c = c.replace("S", T.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / Ii), C = Math.floor(c % Ii / co), g = Math.floor(c % co / fo), $ = Math.floor(c % fo / vo), T = Math.floor(c % vo), w = {
        days: h,
        hours: C,
        minutes: g,
        seconds: $,
        milliseconds: T
      };
      i.value = w, P(e.onChange, i.value), a.value = l(e.format, w);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: C
      } = e, g = performance.now();
      n.value || (n.value = g + z(c));
      var $ = n.value - g;
      if ($ < 0 && ($ = 0), o.value = $, s($), $ === 0) {
        P(h);
        return;
      }
      (C || r.value) && (t.value = Pn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, _d(t.value), u();
    };
    return ie(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: i,
      n: hc,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Ps.render = gc;
const Vr = Ps;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var Nw = Vr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ka = 9e15, mr = 1e9, mo = "0123456789abcdef", ht = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", gt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", po = {
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
}, Os, Dn, fe = !0, Dt = "[DecimalError] ", vr = Dt + "Invalid argument: ", Vs = Dt + "Precision limit exceeded", Ms = Dt + "crypto unavailable", Es = "[object Decimal]", Xe = Math.floor, Re = Math.pow, yc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, bc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, wc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Is = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, Cc = 9007199254740991, Sc = ht.length - 1, ho = gt.length - 1, G = { toStringTag: Es };
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
    throw Error(vr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = kc(a, zs(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
G.cubeRoot = G.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Re(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = je(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Re(r, 1 / 3), e = Xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
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
    if (e = n.length - 1, r = (e - Xe(this.e / de)) * de, e = n[e], e)
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
    if (u.abs().eq(1) && v + 4 <= ho)
      return i = kn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ho)
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
  return !!this.d && Xe(this.e / de) > this.d.length - 2;
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
  if (fe = !1, l = v + c, i = xn(u, l), a = n ? yt(d, l + 10) : xn(e, l), s = Pe(i, a, l, 1), Ka(s.d, t = v, f))
    do
      if (l += 10, i = xn(u, l), a = n ? yt(d, l + 10) : xn(e, l), s = Pe(i, a, l, 1), !o) {
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
  if (r = Xe(e.e / de), d = Xe(c.e / de), u = u.slice(), o = d - r, o) {
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
  return go(this);
};
G.naturalLogarithm = G.ln = function() {
  return xn(this);
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
  if (o = Xe(v.e / de), a = Xe(e.e / de), u = u.slice(), t = o - a, t) {
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
    throw Error(vr + e);
  return r.d ? (n = Bs(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
G.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
G.sine = G.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Tc(a, zs(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
G.squareRoot = G.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (fe = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = je(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Xe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
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
  for (r = Xe(d.e / de) + Xe(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
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
  return xo(this, 2, e, n);
};
G.toDecimalPlaces = G.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, mr), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
G.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, !0) : (an(e, 0, mr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = En(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
G.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = En(t) : (an(e, 0, mr), n === void 0 ? n = o.rounding : an(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = En(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
G.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, h = c.d, C = c.constructor;
  if (!h)
    return new C(c);
  if (u = r = new C(1), a = s = new C(0), n = new C(a), o = n.e = Bs(h) - c.e - 1, i = o % de, n.d[0] = Re(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new C(e), !l.isInt() || l.lt(u))
      throw Error(vr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new C(je(h)), d = C.precision, C.precision = o = h.length * de * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Pe(u, a, o, 1).minus(c).abs().cmp(Pe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], C.precision = d, fe = !0, f;
};
G.toHexadecimal = G.toHex = function(e, n) {
  return xo(this, 16, e, n);
};
G.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : an(n, 0, 8), !r.d)
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
  return xo(this, 8, e, n);
};
G.toPower = G.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Re(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Xe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Cc)
    return t = Ns(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Re(+l, u), n = r == 0 || !isFinite(r) ? Xe(u * (Math.log("0." + je(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = go(e.times(xn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), Ka(t.d, a, o) && (n = a + 10, t = ue(go(e.times(xn(l, n + r)), n), n + 5, 1), +je(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, ue(t, a, o));
};
G.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, mr), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = En(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
G.toSignificantDigits = G.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, mr), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
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
      a = e[n] + "", r = de - a.length, r && (o += qn(r)), o += a;
    i = e[n], a = i + "", r = de - a.length, r && (o += qn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function an(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(vr + e);
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
    for (t[0] += mo.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function kc(e, n) {
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
    var u, d, v, f, c, h, C, g, $, T, w, S, O, k, A, V, I, B, p, b, L = a.constructor, Q = a.s == t.s ? 1 : -1, Y = a.d, R = t.d;
    if (!Y || !Y[0] || !R || !R[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (Y ? R && Y[0] == R[0] : !R) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          Y && Y[0] == 0 || !R ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Xe(a.e / c) - Xe(t.e / c)), p = R.length, I = Y.length, $ = new L(Q), T = $.d = [], v = 0; R[v] == (Y[v] || 0); v++)
      ;
    if (R[v] > (Y[v] || 0) && d--, o == null ? (k = o = L.precision, i = L.rounding) : l ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      T.push(1), h = !0;
    else {
      if (k = k / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], k++; (v < I || f) && k--; v++)
          A = f * s + (Y[v] || 0), T[v] = A / R | 0, f = A % R | 0;
        h = f || v < I;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), Y = e(Y, f, s), p = R.length, I = Y.length), V = p, w = Y.slice(0, p), S = w.length; S < p; )
          w[S++] = 0;
        b = R.slice(), b.unshift(0), B = R[0], R[1] >= s / 2 && ++B;
        do
          f = 0, u = n(R, w, p, S), u < 0 ? (O = w[0], p != S && (O = O * s + (w[1] || 0)), f = O / B | 0, f > 1 ? (f >= s && (f = s - 1), C = e(R, f, s), g = C.length, S = w.length, u = n(C, w, g, S), u == 1 && (f--, r(C, p < g ? b : R, g, s))) : (f == 0 && (u = f = 1), C = R.slice()), g = C.length, g < S && C.unshift(0), r(w, C, S, s), u == -1 && (S = w.length, u = n(R, w, p, S), u < 1 && (f++, r(w, p < S ? b : R, S, s))), S = w.length) : u === 0 && (f++, w = [0]), T[v++] = f, u && w[0] ? w[S++] = Y[V] || 0 : (w = [Y[V]], S = 1);
        while ((V++ < I || w[0] !== void 0) && k--);
        h = w[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (c == 1)
      $.e = d, Os = h;
    else {
      for (v = 1, f = T[0]; f >= 10; f /= 10)
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
    return As(e);
  var a, t = e.e, o = je(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + qn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + qn(-t - 1) + o, r && (a = r - i) > 0 && (o += qn(a))) : t >= i ? (o += qn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + qn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += qn(a))), o;
}
function At(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function yt(e, n, r) {
  if (n > Sc)
    throw fe = !0, r && (e.precision = r), Error(Vs);
  return ue(new e(ht), n, 1, !0);
}
function kn(e, n, r) {
  if (n > ho)
    throw Error(Vs);
  return ue(new e(gt), n, r, !0);
}
function Bs(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function qn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Ns(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Ni(o.d, i) && (t = !0)), r = Xe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Ni(n.d, i);
  }
  return fe = !0, o;
}
function Bi(e) {
  return e.d[e.d.length - 1] & 1;
}
function Ds(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function go(e, n) {
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
function xn(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, c = 1, h = 10, C = e, g = C.d, $ = C.constructor, T = $.rounding, w = $.precision;
  if (C.s < 0 || !g || !g[0] || !C.e && g[0] == 1 && g.length == 1)
    return new $(g && !g[0] ? -1 / 0 : C.s != 1 ? NaN : g ? 0 : C);
  if (n == null ? (fe = !1, d = w) : d = n, $.precision = d += h, r = je(g), a = r.charAt(0), Math.abs(o = C.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      C = C.times(e), r = je(C.d), a = r.charAt(0), c++;
    o = C.e, a > 1 ? (C = new $("0." + r), o++) : C = new $(a + "." + r.slice(1));
  } else
    return u = yt($, d + 2, w).times(o + ""), C = xn(new $(a + "." + r.slice(1)), d - h).plus(u), $.precision = w, n == null ? ue(C, w, T, fe = !0) : C;
  for (v = C, s = i = C = Pe(C.minus(1), C.plus(1), d, 1), f = ue(C.times(C), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new $(t), d, 1)), je(u.d).slice(0, d) === je(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(yt($, d + 2, w).times(o + ""))), s = Pe(s, new $(c), d, 1), n == null)
        if (Ka(s.d, d - h, T, l))
          $.precision = d += h, u = i = C = Pe(v.minus(1), v.plus(1), d, 1), f = ue(C.times(C), d, 1), t = l = 1;
        else
          return ue(s, $.precision = w, T, fe = !0);
      else
        return $.precision = w, s;
    s = u, t += 2;
  }
}
function As(e) {
  return String(e.s * e.s / 0);
}
function yo(e, n) {
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
function $c(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Is.test(n))
      return yo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (bc.test(n))
    r = 16, n = n.toLowerCase();
  else if (yc.test(n))
    r = 2;
  else if (wc.test(n))
    r = 8;
  else
    throw Error(vr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = Ns(a, new a(r), o, o * 2)), u = ut(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = At(u, d), e.d = u, fe = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Re(2, s) : er.pow(2, s))), fe = !0, e);
}
function Tc(e, n) {
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
function zs(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = Bi(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = Bi(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function xo(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (an(r, 1, mr), a === void 0 ? a = c.rounding : an(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = As(e);
  else {
    for (d = En(e), i = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - i, f.d = ut(En(f), 10, t), f.e = f.d.length), v = ut(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Os), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += mo.charAt(v[i]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = ut(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += mo.charAt(v[i]);
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
function Ni(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Pc(e) {
  return new this(e).abs();
}
function Oc(e) {
  return new this(e).acos();
}
function Vc(e) {
  return new this(e).acosh();
}
function Mc(e, n) {
  return new this(e).plus(n);
}
function Ec(e) {
  return new this(e).asin();
}
function Ic(e) {
  return new this(e).asinh();
}
function Bc(e) {
  return new this(e).atan();
}
function Nc(e) {
  return new this(e).atanh();
}
function Dc(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function Ac(e) {
  return new this(e).cbrt();
}
function zc(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function Lc(e, n, r) {
  return new this(e).clamp(n, r);
}
function Rc(e) {
  if (!e || typeof e != "object")
    throw Error(Dt + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    mr,
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
    if (r = o[n], t && (this[r] = po[r]), (a = e[r]) !== void 0)
      if (Xe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(vr + r + ": " + a);
  if (r = "crypto", t && (this[r] = po[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Ms);
      else
        this[r] = !1;
    else
      throw Error(vr + r + ": " + a);
  return this;
}
function Uc(e) {
  return new this(e).cos();
}
function Yc(e) {
  return new this(e).cosh();
}
function Ls(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Di(o)) {
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
      return yo(u, o.toString());
    } else if (s !== "string")
      throw Error(vr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), Is.test(o) ? yo(u, o) : $c(u, o);
  }
  if (t.prototype = G, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Rc, t.clone = Ls, t.isDecimal = Di, t.abs = Pc, t.acos = Oc, t.acosh = Vc, t.add = Mc, t.asin = Ec, t.asinh = Ic, t.atan = Bc, t.atanh = Nc, t.atan2 = Dc, t.cbrt = Ac, t.ceil = zc, t.clamp = Lc, t.cos = Uc, t.cosh = Yc, t.div = Fc, t.exp = Hc, t.floor = Wc, t.hypot = jc, t.ln = Gc, t.log = qc, t.log10 = Xc, t.log2 = Kc, t.max = Zc, t.min = Jc, t.mod = Qc, t.mul = _c, t.pow = xc, t.random = em, t.round = nm, t.sign = rm, t.sin = am, t.sinh = tm, t.sqrt = om, t.sub = im, t.sum = lm, t.tan = sm, t.tanh = um, t.trunc = dm, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Fc(e, n) {
  return new this(e).div(n);
}
function Hc(e) {
  return new this(e).exp();
}
function Wc(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function jc() {
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
function Di(e) {
  return e instanceof er || e && e.toStringTag === Es || !1;
}
function Gc(e) {
  return new this(e).ln();
}
function qc(e, n) {
  return new this(e).log(n);
}
function Kc(e) {
  return new this(e).log(2);
}
function Xc(e) {
  return new this(e).log(10);
}
function Zc() {
  return Ds(this, arguments, "lt");
}
function Jc() {
  return Ds(this, arguments, "gt");
}
function Qc(e, n) {
  return new this(e).mod(n);
}
function _c(e, n) {
  return new this(e).mul(n);
}
function xc(e, n) {
  return new this(e).pow(n);
}
function em(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : an(e, 1, mr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Ms);
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
function nm(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function rm(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function am(e) {
  return new this(e).sin();
}
function tm(e) {
  return new this(e).sinh();
}
function om(e) {
  return new this(e).sqrt();
}
function im(e, n) {
  return new this(e).sub(n);
}
function lm() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function sm(e) {
  return new this(e).tan();
}
function um(e) {
  return new this(e).tanh();
}
function dm(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
G[Symbol.for("nodejs.util.inspect.custom")] = G.toString;
G[Symbol.toStringTag] = "Decimal";
var er = G.constructor = Ls(po);
ht = new er(ht);
gt = new er(gt);
var vm = {
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
  n: fm,
  classes: cm
} = ee("counter"), Ai = 100, zi = 600, mm = ["inputmode", "readonly", "disabled"];
function pm(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = qe("ripple");
  return y(), M(
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
        mm
      ), [[Ad, e.inputValue]]), ke(re(
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
var Rs = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: vm,
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
    } = l ?? {}, h = () => d(e.rules, e.modelValue), C = (R) => {
      Ee(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: K
        } = e;
        u(J, R, j, K);
      });
    }, g = () => {
      var {
        min: R
      } = e;
      P(e["onUpdate:modelValue"], R != null ? z(R) : 0), v();
    }, $ = {
      reset: g,
      validate: h,
      resetValidation: v
    }, T = F(() => {
      var {
        max: R,
        modelValue: J
      } = e;
      return R != null && z(J) >= z(R);
    }), w = F(() => {
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
    }, O = (R) => {
      var {
        lazyChange: J,
        onBeforeChange: j
      } = e, {
        value: K
      } = R.target, N = S(K);
      J ? P(j, z(N), Y) : Q(N), C("onInputChange");
    }, k = () => {
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
      if (!(c != null && c.value || f != null && f.value || R || J || j || !K) && !w.value) {
        var oe = new er(z(H)).minus(new er(z(X))).toString(), he = S(oe), pe = z(he);
        P(Z, pe), N ? P(ae, pe, Y) : (Q(he), C("onDecrement"));
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
      if (!(c != null && c.value || f != null && f.value || R || J || j || !K) && !T.value) {
        var oe = new er(z(H)).plus(new er(z(X))).toString(), he = S(oe), pe = z(he);
        P(Z, pe), N ? P(ae, pe, Y) : (Q(he), C("onIncrement"));
      }
    }, V = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (o = window.setTimeout(() => {
        L();
      }, zi));
    }, I = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (t = window.setTimeout(() => {
        b();
      }, zi));
    }, B = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, b = () => {
      r = window.setTimeout(() => {
        A(), b();
      }, Ai);
    }, L = () => {
      a = window.setTimeout(() => {
        k(), L();
      }, Ai);
    }, Q = (R) => {
      n.value = R;
      var J = z(R);
      P(e["onUpdate:modelValue"], J);
    }, Y = (R) => {
      Q(S(String(R))), C("onLazyChange");
    };
    return P(i, $), ie(() => e.modelValue, (R) => {
      Q(S(String(R))), P(e.onChange, z(R));
    }), Q(S(String(e.modelValue))), {
      n: fm,
      classes: cm,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: T,
      isMin: w,
      validate: h,
      reset: g,
      resetValidation: v,
      handleChange: O,
      decrement: k,
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
Rs.render = pm;
const Mr = Rs;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var Dw = Mr, Us = 60, Ys = Us * 60, Fs = Ys * 24, hm = Fs * 7, Ea = 1e3, Kt = Us * Ea, Li = Ys * Ea, gm = Fs * Ea, ym = hm * Ea, ei = "millisecond", $a = "second", Ta = "minute", Pa = "hour", Kn = "day", dt = "week", Sn = "month", Hs = "quarter", Xn = "year", Oa = "date", bm = "YYYY-MM-DDTHH:mm:ssZ", Ri = "Invalid Date", wm = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Cm = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Sm = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var bo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, km = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + bo(t, 2, "0") + ":" + bo(o, 2, "0");
}, $m = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, Tm = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Pm = function(n) {
  var r = {
    M: Sn,
    y: Xn,
    w: dt,
    d: Kn,
    D: Oa,
    h: Pa,
    m: Ta,
    s: $a,
    ms: ei,
    Q: Hs
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Om = function(n) {
  return n === void 0;
};
const Vm = {
  s: bo,
  z: km,
  m: $m,
  a: Tm,
  p: Pm,
  u: Om
};
var Wa = "en", Er = {};
Er[Wa] = Sm;
var ni = function(n) {
  return n instanceof Lt;
}, bt = function e(n, r, a) {
  var t;
  if (!n)
    return Wa;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Er[o] && (t = o), r && (Er[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Er[l] = n, t = l;
  }
  return !a && t && (Wa = t), t || !a && Wa;
}, te = function(n, r) {
  if (ni(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Lt(a);
}, Mm = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = Vm;
Te.l = bt;
Te.i = ni;
Te.w = Mm;
var Em = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(wm);
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
    this.$d = Em(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== Ri;
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function($, T) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, T, $) : new Date(o.$y, T, $), o);
      return i ? w : w.endOf(Kn);
    }, u = function($, T) {
      var w = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Te.w(o.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? w : S).slice(T)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Xn:
        return i ? s(1, 0) : s(31, 11);
      case Sn:
        return i ? s(1, v) : s(0, v + 1);
      case dt: {
        var h = this.$locale().weekStart || 0, C = (d < h ? d + 7 : d) - h;
        return s(i ? f - C : f + (6 - C), v);
      }
      case Kn:
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
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Kn] = l + "Date", o[Oa] = l + "Date", o[Sn] = l + "Month", o[Xn] = l + "FullYear", o[Pa] = l + "Hours", o[Ta] = l + "Minutes", o[$a] = l + "Seconds", o[ei] = l + "Milliseconds", o)[i], u = i === Kn ? this.$D + (t - this.$W) : t;
    if (i === Sn || i === Xn) {
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
    if (l === Xn)
      return this.set(Xn, this.$y + a);
    if (l === Kn)
      return s(1);
    if (l === dt)
      return s(7);
    var u = (i = {}, i[Ta] = Kt, i[Pa] = Li, i[$a] = Ea, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Ri;
    var i = a || bm, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, h = function(w, S, O, k) {
      return w && (w[S] || w(t, i)) || O[S].slice(0, k);
    }, C = function(w) {
      return Te.s(s % 12 || 12, w, "0");
    }, g = c || function(T, w, S) {
      var O = T < 12 ? "AM" : "PM";
      return S ? O.toLowerCase() : O;
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
      h: C(1),
      hh: C(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Te.s(u, 2, "0"),
      s: String(this.$s),
      ss: Te.s(this.$s, 2, "0"),
      SSS: Te.s(this.$ms, 3, "0"),
      Z: l
      // 'ZZ' logic below
    };
    return i.replace(Cm, function(T, w) {
      return w || $[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * Kt, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Xn] = v / 12, i[Sn] = v, i[Hs] = v / 3, i[dt] = (d - u) / ym, i[Kn] = (d - u) / gm, i[Pa] = d / Li, i[Ta] = d / Kt, i[$a] = d / Ea, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Er[this.$L];
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
}(), Ws = Lt.prototype;
te.prototype = Ws;
[["$ms", ei], ["$s", $a], ["$m", Ta], ["$H", Pa], ["$W", Kn], ["$M", Sn], ["$y", Xn], ["$D", Oa]].forEach(function(e) {
  Ws[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, Lt, te), e.$i = !0), te;
};
te.locale = bt;
te.isDayjs = ni;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Er[Wa];
te.Ls = Er;
te.p = {};
const js = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Gs = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Im(e) {
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
}], Bm = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Im
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
  n: Nm
} = ee("picker-header");
function Dm(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return y(), M(
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
          default: ve(() => [(y(), M(
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
var qs = x({
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
    } = n, a = E(!1), t = E(0), o = F(() => {
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
      n: Nm,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
qs.render = Dm;
const Ks = qs;
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
te.extend(js);
te.extend(Gs);
var {
  n: tt,
  classes: Am
} = ee("month-picker"), {
  n: ot
} = ee("date-picker");
function zm(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return y(), M(
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
          default: ve(() => [(y(), M("ul", {
            key: e.panelKey
          }, [(y(!0), M(
            Oe,
            null,
            Be(e.MONTH_LIST, (t) => (y(), M("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, wo({}, e.buttonProps(t.index)), {
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
var Xs = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Ks
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
    } = n, [a, t] = e.current.split("-"), o = E(!1), i = E(0), l = E(null), s = Me({
      left: !1,
      right: !1
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = (T) => {
      var w, S;
      return (w = (S = Fe.value.datePickerMonthDict) == null ? void 0 : S[T].abbr) != null ? w : "";
    }, f = (T) => {
      var {
        preview: {
          previewYear: w
        },
        componentProps: {
          min: S,
          max: O
        }
      } = e, k = !0, A = !0, V = w + "-" + T;
      return O && (k = te(V).isSameOrBefore(te(O), "month")), S && (A = te(V).isSameOrAfter(te(S), "month")), k && A;
    }, c = (T) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: S,
          chooseRangeMonth: O
        },
        componentProps: {
          type: k,
          range: A
        }
      } = e;
      if (A) {
        if (!O.length)
          return !1;
        var V = te(T).isSameOrBefore(te(O[1]), "month"), I = te(T).isSameOrAfter(te(O[0]), "month");
        return V && I;
      }
      return k === "month" ? w.includes(T) : S.some((B) => B.includes(T));
    }, h = (T) => {
      var {
        choose: {
          chooseMonth: w
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: O,
          color: k,
          multiple: A,
          range: V
        }
      } = e, I = S + "-" + T, B = () => V || A ? c(I) : (w == null ? void 0 : w.index) === T && u.value, p = () => f(T) ? O ? !O(I) : !1 : !0, b = p(), L = () => b ? !0 : V || A ? !c(I) : !u.value || (w == null ? void 0 : w.index) !== T, Q = () => d.value && t === T && e.componentProps.showCurrent ? (V || A || u.value) && b ? !0 : V || A ? !c(I) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, Y = () => b ? "" : Q() ? k ?? "" : B() ? "" : ot() + "-color-cover", R = Y().startsWith(ot());
      return {
        outline: Q(),
        text: L(),
        color: L() ? "" : k,
        textColor: R ? "" : Y(),
        [ot() + "-color-cover"]: R,
        class: Am(tt("button"), [b, tt("button--disabled")])
      };
    }, C = (T, w) => {
      var S = w.currentTarget;
      S.classList.contains(tt("button--disabled")) || r("choose-month", T);
    }, g = (T) => {
      o.value = T === "prev", i.value += T === "prev" ? -1 : 1, r("check-preview", "year", T);
    }, $ = (T) => {
      l.value.checkDate(T);
    };
    return ie(() => e.preview.previewYear, (T) => {
      var {
        componentProps: {
          min: w,
          max: S
        }
      } = e;
      S && (s.right = !te("" + (z(T) + 1)).isSameOrBefore(te(S), "year")), w && (s.left = !te("" + (z(T) - 1)).isSameOrAfter(te(w), "year"));
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
      chooseMonth: C,
      checkDate: g
    };
  }
});
Xs.render = zm;
const Lm = Xs;
var {
  n: Ui,
  classes: Rm
} = ee("year-picker"), Um = ["onClick"];
function Ym(e, n) {
  return y(), M(
    "ul",
    {
      class: m(e.n())
    },
    [(y(!0), M(
      Oe,
      null,
      Be(e.yearList, (r) => (y(), M(
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
        Um
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Zs = x({
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
      var o = document.querySelector("." + Ui("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Ui,
      classes: Rm,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
Zs.render = Ym;
const Fm = Zs;
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
te.extend(js);
te.extend(Gs);
var {
  n: Sa,
  classes: Hm
} = ee("day-picker"), {
  n: it
} = ee("date-picker");
function Wm(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return y(), M(
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
          default: ve(() => [(y(), M("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(y(!0), M(
              Oe,
              null,
              Be(e.sortWeekList, (t) => (y(), M(
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
            [(y(!0), M(
              Oe,
              null,
              Be(e.days, (t, o) => (y(), M("li", {
                key: o
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, Co({}, e.buttonProps(t)), {
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
var Js = x({
  name: "DayPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Ks
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
    } = n, [a, t, o] = e.current.split("-"), i = E([]), l = E(!1), s = E(0), u = E(null), d = Me({
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
    }, C = (V) => V > 0 ? V : "", g = () => {
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
    }, T = (V) => {
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
    }, w = (V) => {
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
      } = e, R = B + "-" + p.index + "-" + V, J = () => Y || Q ? w(R) : z(I) === V && f.value, j = () => T(V) ? b ? !b(R) : !1 : !0, K = j(), N = () => K ? !0 : Y || Q ? !w(R) : !f.value || z(I) !== V, X = () => v.value && z(o) === V && e.componentProps.showCurrent ? (Y || Q || f.value) && K ? !0 : Y || Q ? !w(R) : f.value ? I !== o : !0 : !1, H = () => K ? "" : X() ? L ?? "" : J() ? "" : it() + "-color-cover", Z = H().startsWith(it());
      return {
        text: N(),
        outline: X(),
        textColor: Z ? "" : H(),
        [it() + "-color-cover"]: Z,
        class: Hm(Sa("button"), Sa("button--usable"), [K, Sa("button--disabled")])
      };
    }, O = (V) => {
      l.value = V === "prev", s.value += V === "prev" ? -1 : 1, r("check-preview", "month", V);
    }, k = (V, I) => {
      var B = I.currentTarget;
      B.classList.contains(Sa("button--disabled")) || r("choose-day", V);
    }, A = (V) => {
      u.value.checkDate(V);
    };
    return Ue(() => {
      g(), $();
    }), ie(() => e.preview, () => {
      g(), $();
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
      filterDay: C,
      getDayAbbr: h,
      checkDate: O,
      chooseDay: k,
      buttonProps: S
    };
  }
});
Js.render = Wm;
const jm = Js;
var {
  n: Gm,
  classes: qm
} = ee("date-picker");
function Km(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return y(), M(
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
              return [e.type === "month" ? (y(), M("div", {
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
              )])])) : (y(), M("div", {
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
              )]) : W(e.$slots, "date", El(Ve({
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
          default: ve(() => [e.getPanelType === "year" ? (y(), me(
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
          )) : e.getPanelType === "month" ? (y(), me(
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
          )) : e.getPanelType === "date" ? (y(), me(
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
var Qs = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Lm,
    YearPickerPanel: Fm,
    DayPickerPanel: jm
  },
  props: Bm,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [i, l] = o.split("-"), s = vt.find((se) => se.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), h = E(), C = E(s), g = E(i), $ = E(!1), T = E([]), w = E([]), S = E([]), O = E([]), k = E(null), A = E(null), V = Me({
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
      chooseMonths: T.value,
      chooseDays: w.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: O.value
    })), B = F(() => ({
      previewMonth: C.value,
      previewYear: g.value
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
      return se ? "" + T.value.length + Fe.value.datePickerSelected : ce;
    }), b = F(() => {
      var se, ye, ce, Ce, {
        multiple: Se,
        range: ze
      } = e;
      if (ze) {
        var Ze = O.value.map((jt) => te(jt).format("YYYY-MM-DD"));
        return Ze.length ? Ze[0] + " ~ " + Ze[1] : "";
      }
      if (Se)
        return "" + w.value.length + Fe.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var fn = te(c.value + "-" + f.value.index + "-" + h.value).day(), Ca = Ha.find((jt) => jt.index === "" + fn), ci = (se = (ye = Fe.value.datePickerWeekDict) == null ? void 0 : ye[Ca.index].name) != null ? se : "", Ed = (ce = (Ce = Fe.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", Id = va(h.value, 2, "0");
      return Fe.value.lang === "zh-CN" ? f.value.index + "-" + Id + " " + ci.slice(0, 3) : ci.slice(0, 3) + ", " + Ed.slice(0, 3) + " " + h.value;
    }), L = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = F(() => !e.touchable || ["", "year"].includes(L.value)), Y = F(() => {
      var se, ye, ce, Ce, Se = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), ze = h.value ? va(h.value, 2, "0") : "";
      return {
        week: "" + Se,
        year: (ye = c.value) != null ? ye : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: ze
      };
    }), R = F(() => I.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), J = F(() => c.value === g.value), j = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === C.value.index;
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
        var se = L.value === "month" ? k : A;
        It(() => {
          se.value.forwardRef(a), fi();
        });
      }
    }, ae = (se, ye) => {
      var ce = ye === "month" ? S : O;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), Se = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        P(e["onUpdate:modelValue"], Se), P(e.onChange, Se);
      }
    }, oe = (se, ye) => {
      var ce = ye === "month" ? T : w, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-DD", Se = ce.value.map((Ze) => te(Ze).format(Ce)), ze = Se.findIndex((Ze) => Ze === se);
      ze === -1 ? Se.push(se) : Se.splice(ze, 1), P(e["onUpdate:modelValue"], Se), P(e.onChange, Se);
    }, he = (se, ye) => !c.value || !f.value ? !1 : J.value ? se === "month" ? ye.index < f.value.index : j.value ? ye < z(h.value) : f.value.index > C.value.index : c.value > g.value, pe = (se) => {
      var {
        readonly: ye,
        range: ce,
        multiple: Ce,
        onChange: Se,
        "onUpdate:modelValue": ze
      } = e;
      if (!(se < 0 || ye)) {
        $.value = he("day", se);
        var Ze = g.value + "-" + C.value.index + "-" + se, fn = te(Ze).format("YYYY-MM-DD");
        ce ? ae(fn, "day") : Ce ? oe(fn, "day") : (P(ze, fn), P(Se, fn));
      }
    }, Ye = (se) => {
      var {
        type: ye,
        readonly: ce,
        range: Ce,
        multiple: Se,
        onChange: ze,
        onPreview: Ze,
        "onUpdate:modelValue": fn
      } = e;
      if ($.value = he("month", se), ye === "month" && !ce) {
        var Ca = g.value + "-" + se.index;
        Ce ? ae(Ca, "month") : Se ? oe(Ca, "month") : (P(fn, Ca), P(ze, Ca));
      } else
        C.value = se, P(Ze, z(g.value), z(C.value.index));
      d.value = !1;
    }, en = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, P(e.onPreview, z(g.value), z(C.value.index));
    }, tn = (se, ye) => {
      var ce = ye === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (z(g.value) + ce);
      else {
        var Ce = z(C.value.index) + ce;
        Ce < 1 && (g.value = "" + (z(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (z(g.value) + 1), Ce = 1), C.value = vt.find((Se) => z(Se.index) === Ce);
      }
      P(e.onPreview, z(g.value), z(C.value.index));
    }, Ae = () => (e.multiple || e.range) && !be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, vn = (se) => be(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Od = (se, ye) => {
      var ce = ye === "month" ? S : O, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = se.map((fn) => te(fn).format(Ce)).slice(0, 2), ze = ce.value.some((fn) => vn(fn));
      if (!ze) {
        ce.value = Se;
        var Ze = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Ze && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Vd = (se, ye) => {
      var ce = ye === "month" ? T : w, Ce = ye === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = Array.from(new Set(se.map((ze) => te(ze).format(Ce))));
      ce.value = Se.filter((ze) => ze !== "Invalid Date");
    }, Md = (se) => {
      var ye = te(se).format("YYYY-MM-D");
      if (!vn(ye)) {
        var [ce, Ce, Se] = ye.split("-"), ze = vt.find((Ze) => Ze.index === Ce);
        f.value = ze, c.value = ce, h.value = Se, C.value = ze, g.value = ce;
      }
    }, fi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!Ae() || vn(se) || !se))
        if (e.range) {
          if (!be(se))
            return;
          v.value = se.length !== 1, Od(se, e.type);
        } else if (e.multiple) {
          if (!be(se))
            return;
          Vd(se, e.type);
        } else
          Md(se);
    }, {
      immediate: !0
    }), ie(L, fi), {
      n: Gm,
      classes: qm,
      monthPanelEl: k,
      dayPanelEl: A,
      reverse: $,
      currentDate: o,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: g,
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
      checkPreview: tn
    };
  }
});
Qs.render = Km;
const Ir = Qs;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var Aw = Ir;
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
function Xm(e) {
  return ["left", "center", "right"].includes(e);
}
var Zm = So({
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
    validator: Xm
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
}, Ge(_a, [
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
var {
  n: Jm,
  classes: Qm
} = ee("dialog");
function _m(e, n) {
  var r = le("var-button"), a = le("var-popup");
  return y(), me(
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
          style: ko({
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
          [e.cancelButton ? (y(), me(
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
          )) : _("v-if", !0), e.confirmButton ? (y(), me(
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
var _s = x({
  name: "VarDialog",
  components: {
    VarPopup: mn,
    VarButton: xe
  },
  inheritAttrs: !1,
  props: Zm,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => P(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (P(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        P(e["onUpdate:show"], !1);
      }
    }, o = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (P(s), l != null) {
        l("confirm", a);
        return;
      }
      P(e["onUpdate:show"], !1);
    }, i = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (P(s), l != null) {
        l("cancel", a);
        return;
      }
      P(e["onUpdate:show"], !1);
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
      n: Jm,
      classes: Qm,
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
_s.render = _m;
const ir = _s;
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
var Jn, Ct = {};
function xm(e) {
  return Ke(e) ? wt({}, Ct, {
    message: e
  }) : wt({}, Ct, e);
}
function ca(e) {
  return qo() ? new Promise((n) => {
    ca.close();
    var r = xm(e), a = Me(r);
    a.teleport = "body", Jn = a;
    var {
      unmountInstance: t
    } = Ua(ir, a, {
      onConfirm: () => {
        P(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        P(a.onCancel), n("cancel");
      },
      onClose: () => {
        P(a.onClose), n("close");
      },
      onClosed: () => {
        P(a.onClosed), t(), Jn === a && (Jn = null);
      },
      onRouteChange: () => {
        t(), Jn === a && (Jn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
function ep(e) {
  Ct = e;
}
function np() {
  Ct = {};
}
function rp() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Ee().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(ca, {
  setDefaultOptions: ep,
  resetDefaultOptions: np,
  close: rp
});
ir.install = function(e) {
  e.component(ir.name, ir);
};
ca.install = function(e) {
  e.component(ir.name, ir);
};
ca.Component = ir;
var zw = ir, ap = {
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
  n: tp,
  classes: op
} = ee("divider");
function ip(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (y(), M(
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
var xs = x({
  name: "VarDivider",
  props: ap,
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
    }), Wo(() => {
      i();
    }), Va({
      n: tp,
      classes: op
    }, zd(a), {
      style: o,
      isInset: t
    });
  }
});
xs.render = ip;
const Br = xs;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var Lw = Br;
function lp(e) {
  return ["start", "end"].includes(e);
}
var sp = {
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
    validator: lp
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Yi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function up(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Yi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Yi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: dp
} = ee("form");
function vp(e, n) {
  return y(), M(
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
  name: "VarForm",
  props: sp,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Yf(), o = (d, v) => {
      setTimeout(() => {
        var f = wa(v), c = f === window ? 0 : Ci(f), h = Ci(v) - c - Ne(e.scrollToErrorOffsetY);
        qa(f, {
          top: h,
          animation: eo
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = up(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: $
          } = g;
          return $();
        }));
        if (e.scrollToError) {
          var [, f] = Hd(v, (g) => g === !1, e.scrollToError), c = f > -1;
          if (c) {
            var h, C = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            o(f, C);
          }
          return !c;
        }
        return v.every((g) => g === !0);
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
      n: dp,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
eu.render = vp;
const An = eu;
An.install = function(e) {
  e.component(An.name, An);
};
An.useValidation = bn;
An.useForm = wn;
var Rw = An;
function Fi(e, n, r, a, t, o, i) {
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
        Fi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Fi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
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
var fp = "background-image", cp = "lazy-loading", mp = "lazy-error", Hi = "lazy-attempt", pp = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], To = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ia = [], St = [], nu = Wd(100), Le = {
  loading: To,
  error: To,
  attempt: 3,
  throttleWait: 300,
  events: pp
}, ri = Go(et, Le.throttleWait);
function Ut(e, n) {
  e._lazy.arg === fp ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function hp(e) {
  e._lazy.loading && Ut(e, e._lazy.loading), et();
}
function gp(e) {
  e._lazy.error && Ut(e, e._lazy.error), e._lazy.state = "error", ti(e), et();
}
function ru(e, n) {
  Ut(e, n), e._lazy.state = "success", ti(e), et();
}
function yp(e) {
  var n;
  St.includes(e) || (St.push(e), (n = Le.events) == null || n.forEach((r) => {
    e.addEventListener(r, ri, {
      passive: !0
    });
  }));
}
function bp() {
  St.forEach((e) => {
    var n;
    (n = Le.events) == null || n.forEach((r) => {
      e.removeEventListener(r, ri);
    });
  }), St.length = 0;
}
function wp(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(cp)) != null ? r : Le.loading,
    error: (a = e.getAttribute(mp)) != null ? a : Le.error,
    attempt: e.getAttribute(Hi) ? Number(e.getAttribute(Hi)) : Le.attempt
  };
  e._lazy = $o({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Ut(e, To), P(Le.filter, e._lazy);
}
function Cp(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, nu.add(n), ru(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? gp(e) : au(e);
  });
}
function au(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (nu.has(n)) {
      ru(e, n), e._lazy.attemptLock = !1;
      return;
    }
    hp(e), Cp(e, n);
  }
}
function ai(e) {
  return Po.apply(this, arguments);
}
function Po() {
  return Po = Rt(function* (e) {
    (yield qd(e)) && au(e);
  }), Po.apply(this, arguments);
}
function et() {
  Ia.forEach((e) => ai(e));
}
function Sp(e) {
  return Oo.apply(this, arguments);
}
function Oo() {
  return Oo = Rt(function* (e) {
    !Ia.includes(e) && Ia.push(e), Kd(e).forEach(yp), yield ai(e);
  }), Oo.apply(this, arguments);
}
function ti(e) {
  Vt(Ia, e), Ia.length === 0 && bp();
}
function kp(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function tu(e, n) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = Rt(function* (e, n) {
    wp(e, n), yield Sp(e);
  }), Vo.apply(this, arguments);
}
function $p(e, n) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = Rt(function* (e, n) {
    if (!kp(e, n)) {
      Ia.includes(e) && (yield ai(e));
      return;
    }
    yield tu(e, n);
  }), Mo.apply(this, arguments);
}
function Tp(e) {
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
var ou = {
  mounted: tu,
  unmounted: ti,
  updated: $p,
  install(e, n) {
    Tp(n), ri = Go(et, Le.throttleWait), e.directive("lazy", this);
  }
}, Uw = ou;
const kt = ou;
function Pp(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Op = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Pp,
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
  n: Vp,
  classes: Mp
} = ee("image"), Ep = ["alt", "title", "lazy-error", "lazy-loading"], Ip = ["alt", "title", "src"];
function Bp(e, n) {
  var r = qe("lazy"), a = qe("ripple");
  return ke((y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((y(), M(
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
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      Ep
    )), [[r, e.src]]) : (y(), M(
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
          return e.onClick && e.onClick(...arguments);
        })
      },
      null,
      46,
      Ip
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var iu = x({
  name: "VarImage",
  directives: {
    Lazy: kt,
    Ripple: We
  },
  props: Op,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: o,
        onLoad: i,
        onError: l
      } = e;
      o ? (t._lazy.state === "success" && P(i, a), t._lazy.state === "error" && P(l, a)) : P(i, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: o
      } = e;
      !t && P(o, a);
    };
    return {
      n: Vp,
      classes: Mp,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
iu.render = Bp;
const Nr = iu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var Yw = Nr, lu = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), su = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Np() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(lu), {
    length: r
  } = gn(su);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var uu = {
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
function Wi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Dp(e) {
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
var Ap = 250, zp = 20, {
  n: Lp,
  classes: Rp
} = ee("swipe"), Up = ["onClick"];
function Yp(e, n) {
  return y(), M(
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
    }, () => [e.indicator && e.length ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(y(!0), M(
        Oe,
        null,
        Be(e.length, (r, a) => (y(), M(
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
          Up
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
var du = x({
  name: "VarSwipe",
  props: uu,
  setup(e) {
    var n = E(null), r = E(0), a = F(() => e.vertical), t = E(0), o = E(0), i = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Np(), v = !1, f = -1, c, h, C, g, $, T = (N) => s.find((X) => {
      var {
        index: H
      } = X;
      return H.value === N;
    }), w = () => {
      e.loop && (o.value >= 0 && T(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && T(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (T(d.value - 1).setTranslate(0), T(0).setTranslate(0)));
    }, S = (N) => {
      var X = _e(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: H
      } = e;
      return X <= -1 ? H ? -1 : 0 : X >= d.value ? H ? d.value : d.value - 1 : X;
    }, O = (N) => {
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
      var X = o.value >= r.value, H = o.value <= -t.value, Z = 0, ae = -(t.value - r.value);
      i.value = !0, (X || H) && (i.value = !0, o.value = H ? Z : ae, T(0).setTranslate(0), T(d.value - 1).setTranslate(0)), It(() => {
        i.value = !1, P(N);
      });
    }, V = () => {
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
    }, b = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: X,
          clientY: H
        } = N.touches[0];
        c = X, h = H, C = performance.now(), v = !0, B(), A(() => {
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
          var en = g !== void 0 ? Z - g : 0, tn = $ !== void 0 ? ae - $ : 0;
          g = Z, $ = ae, o.value += H ? tn : en, w();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: X
        } = e, H = N ? $ < h : g < c, Z = Math.abs(N ? h - $ : c - g), ae = performance.now() - C <= Ap && Z >= zp, oe = ae ? S(H ? l.value + 1 : l.value - 1) : S();
        v = !1, i.value = !1, g = void 0, $ = void 0, o.value = oe * -r.value;
        var he = l.value;
        l.value = O(oe), I(), he !== l.value && P(X, l.value);
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
        l.value = k(Z + 1), (N == null ? void 0 : N.event) !== !1 && P(H, l.value), A(() => {
          if (Z === d.value - 1 && X) {
            T(0).setTranslate(t.value), o.value = d.value * -r.value;
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
        l.value = k(Z - 1), (N == null ? void 0 : N.event) !== !1 && P(H, l.value), A(() => {
          if (Z === 0 && X) {
            T(d.value - 1).setTranslate(-t.value), o.value = r.value;
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
    return u(K), ie(() => d.value, /* @__PURE__ */ Dp(function* () {
      yield Mn(), V(), Y();
    })), Ue(() => {
      window.addEventListener("resize", Y);
    }), cr(() => {
      window.removeEventListener("resize", Y), B();
    }), {
      n: Lp,
      classes: Rp,
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
du.render = Yp;
const zn = du;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var Fw = zn;
function Fp() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(lu), {
    index: r
  } = yn(su);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Hp
} = ee("swipe-item");
function Wp(e, n) {
  return y(), M(
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
var vu = x({
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Fp(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: Hp,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
vu.render = Wp;
const Ln = vu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var Hw = Ln;
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
var jp = Eo({
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
}, Ge(uu, ["loop", "indicator", "onChange"]), Ge(_a, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: ji,
  classes: Gp
} = ee("image-preview"), Gi = 12, qi = 200, qp = 350, Ki = 200, Kp = ["src", "alt"];
function Xp(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
  return y(), me(
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
          default: ve(() => [(y(!0), M(
            Oe,
            null,
            Be(e.images, (i) => (y(), me(
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
                    Kp
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
            }, () => [e.indicator && e.images.length > 1 ? (y(), M(
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
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (y(), me(
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
var fu = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: zn,
    VarSwipeItem: Ln,
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: jp,
  setup(e) {
    var n = E(!1), r = F(() => {
      var {
        images: B,
        current: p
      } = e, b = B.findIndex((L) => L === p);
      return b >= 0 ? b : 0;
    }), a = E(1), t = E(0), o = E(0), i = E(void 0), l = E(void 0), s = E(!0), u = null, d = null, v = null, f = (B, p) => {
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
      }, Ki);
    }, C = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, g = (B) => d ? f(d, B) <= Gi && B.timestamp - d.timestamp <= qi && d.target === B.target : !1, $ = (B) => !B || !u || !d ? !1 : f(u, d) <= Gi && Date.now() - d.timestamp < qp && (B === u.target || B.parentNode === u.target), T = (B) => {
      v = window.setTimeout(() => {
        $(B.target) && I(), u = null;
      }, qi);
    }, w = (B) => {
      v && window.clearTimeout(v);
      var {
        touches: p
      } = B, b = c(p[0], B.currentTarget);
      if (u = b, g(b)) {
        a.value > 1 ? C() : h();
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
      } = B.querySelector("." + ji("image"));
      return {
        width: p,
        height: b,
        imageRadio: Q / L,
        rootRadio: b / p,
        zoom: z(e.zoom)
      };
    }, O = (B) => {
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
    }, k = (B) => {
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
          var Q = L.clientX - d.clientX, Y = L.clientY - d.clientY, R = O(p), J = k(p);
          t.value = A(t.value, Q, R), o.value = A(o.value, Y, J);
        }
        d = L;
      }
    }, I = () => {
      if (a.value > 1) {
        C(), setTimeout(() => P(e["onUpdate:show"], !1), Ki);
        return;
      }
      P(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: ji,
      classes: Gp,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: o,
      canSwipe: s,
      transitionTimingFunction: i,
      transitionDuration: l,
      handleTouchstart: w,
      handleTouchmove: V,
      handleTouchend: T,
      close: I
    };
  }
});
fu.render = Xp;
const lr = fu;
var Qn;
function Hn(e) {
  if (qo()) {
    Hn.close();
    var n = Ke(e) ? {
      images: [e]
    } : be(e) ? {
      images: e
    } : e, r = Me(n);
    r.teleport = "body", Qn = r;
    var {
      unmountInstance: a
    } = Ua(lr, r, {
      onClose: () => P(r.onClose),
      onClosed: () => {
        P(r.onClosed), a(), Qn === r && (Qn = null);
      },
      onRouteChange: () => {
        a(), Qn === r && (Qn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Hn.close = () => {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
lr.install = function(e) {
  e.component(lr.name, lr);
};
Hn.install = function(e) {
  e.component(lr.name, lr);
};
Hn.Component = lr;
var Ww = lr, ft = {
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
function Xi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Xi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Xi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Zp,
  classes: Jp
} = ee("sticky");
function Qp(e, n) {
  return y(), M(
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
var cu = x({
  name: "VarSticky",
  props: ft,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), o = E("0px"), i = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => Ne(e.offsetTop)), c, h = () => {
      var {
        cssMode: w,
        disabled: S
      } = e;
      if (!S) {
        var O = 0;
        if (c !== window) {
          var {
            top: k
          } = c.getBoundingClientRect();
          O = k;
        }
        var A = r.value, V = n.value, {
          top: I,
          left: B
        } = V.getBoundingClientRect(), p = I - O;
        return p <= f.value ? (w || (i.value = V.offsetWidth + "px", l.value = V.offsetHeight + "px", t.value = O + f.value + "px", o.value = B + "px", s.value = A.offsetWidth + "px", u.value = A.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: p,
          isFixed: !1
        });
      }
    }, C = () => {
      var w = h();
      w && P(e.onScroll, w.offsetTop, w.isFixed);
    }, g = /* @__PURE__ */ function() {
      var w = Zi(function* () {
        a.value = !1, yield xd(), h();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var w = Zi(function* () {
        yield Mn(), c = wa(n.value), c !== window && c.addEventListener("scroll", C), window.addEventListener("scroll", C), C();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), T = () => {
      c !== window && c.removeEventListener("scroll", C), window.removeEventListener("scroll", C);
    };
    return ie(() => e.disabled, g), Fo($), Ho(T), Ue($), cr(T), {
      n: Zp,
      classes: Jp,
      resize: g,
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
cu.render = Qp;
const Rn = cu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var jw = Rn, mu = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), pu = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function _p() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(mu), {
    length: r
  } = gn(pu);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function xp() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(mu), {
    index: r
  } = yn(pu);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var eh = {
  index: {
    type: [Number, String]
  }
}, {
  n: nh,
  classes: rh
} = ee("index-anchor");
function ah(e, n) {
  return y(), me(
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
var hu = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: eh,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = xp(), t = E(0), o = E(!1), i = F(() => e.index), l = E(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      l.value && (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, h = (g) => {
      o.value = g;
    }, C = {
      index: n,
      name: i,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(C), {
      n: nh,
      classes: rh,
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
hu.render = ah;
const Dr = hu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var Gw = Dr, th = {
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
function Ji(e, n, r, a, t, o, i) {
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
        Ji(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ji(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: oh,
  classes: ih
} = ee("index-bar"), lh = ["onClick"];
function sh(e, n) {
  return y(), M(
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
      [(y(!0), M(
        Oe,
        null,
        Be(e.anchorNameList, (r) => (y(), M(
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
          lh
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
var gu = x({
  name: "VarIndexBar",
  props: th,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = _p(), t = E(""), o = E(null), i = E(null), l = E([]), s = E(), u = F(() => e.sticky), d = F(() => e.cssMode), v = F(() => Ne(e.stickyOffsetTop)), f = F(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = (w, S) => {
      var O = jo(w) ? w.name.value : w;
      O === s.value || O === void 0 || (s.value = O, (S == null ? void 0 : S.event) !== !1 && P(e.onChange, O));
    }, C = () => {
      if (!("getBoundingClientRect" in o.value))
        return 0;
      var {
        top: w
      } = o.value.getBoundingClientRect(), {
        scrollTop: S
      } = o.value, {
        top: O
      } = i.value.getBoundingClientRect();
      return S - w + O;
    }, g = () => {
      var w = Et(o.value), S = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, O = C();
      r.forEach((k, A) => {
        var V = k.ownTop.value, I = w - V + v.value - O, B = A === r.length - 1 ? S : r[A + 1].ownTop.value - k.ownTop.value;
        I >= 0 && I < B && t.value === "" && (A && !e.cssMode && r[A - 1].setDisabled(!0), k.setDisabled(!1), h(k));
      });
    }, $ = /* @__PURE__ */ function() {
      var w = Xt(function* (S) {
        var {
          anchorName: O,
          manualCall: k = !1,
          options: A
        } = S;
        if (k && P(e.onClick, O), O !== s.value) {
          var V = r.find((b) => {
            var {
              name: L
            } = b;
            return O === L.value;
          });
          if (V) {
            var I = C(), B = V.ownTop.value - v.value + I, p = Ko(o.value);
            t.value = O, h(O, A), yield qa(o.value, {
              left: p,
              top: B,
              animation: Bl,
              duration: z(e.duration)
            }), It(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return w.apply(this, arguments);
      };
    }(), T = (w, S) => {
      Pn(() => $({
        anchorName: w,
        options: S
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Xt(function* () {
      yield Mn(), r.forEach((w) => {
        var {
          name: S,
          setOwnTop: O
        } = w;
        S.value && l.value.push(S.value), O();
      });
    })), Ue(/* @__PURE__ */ Xt(function* () {
      yield Mn(), o.value = wa(i.value), o.value.addEventListener("scroll", g);
    })), Pt(() => {
      P(o.value.removeEventListener, "scroll", g);
    }), {
      n: oh,
      classes: ih,
      barEl: i,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: T,
      anchorClick: $
    };
  }
});
gu.render = sh;
const Ar = gu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var qw = Ar;
function uh(e) {
  return ["text", "password", "number"].includes(e);
}
var dh = {
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
    validator: uh
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
  classes: vh
} = ee("input"), fh = ["id", "disabled", "type", "value", "maxlength", "rows"], ch = ["id", "disabled", "type", "value", "maxlength"], mh = ["for"];
function ph(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
  return y(), M(
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
        [e.type === "password" ? (y(), M(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (y(), M(
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
          fh
        )) : (y(), M(
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
          ch
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
          mh
        )],
        2
        /* CLASS */
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (y(), me(
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
    ), e.line ? (y(), M(
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
var yu = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  props: dh,
  setup(e) {
    var n = E("var-input-" + Aa().uid), r = E(null), a = E(!1), t = F(() => {
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
      a.value = !0, P(e.onFocus, p), v("onFocus");
    }, h = (p) => {
      a.value = !1, P(e.onBlur, p), v("onBlur");
    }, C = (p) => {
      var b = p.target, {
        value: L
      } = b;
      L = S(w(L)), b.value = L, P(e["onUpdate:modelValue"], L), P(e.onInput, L, p), v("onInput");
    }, g = (p) => {
      var b = p.target, {
        value: L
      } = b;
      L = S(w(L)), b.value = L, P(e.onChange, L, p), v("onChange");
    }, $ = () => {
      var {
        disabled: p,
        readonly: b,
        clearable: L,
        onClear: Q
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || p || b || !L || (P(e["onUpdate:modelValue"], ""), P(Q, ""), v("onClear"));
    }, T = (p) => {
      var {
        disabled: b,
        onClick: L
      } = e;
      i != null && i.disabled.value || b || (P(L, p), v("onClick"));
    }, w = (p) => e.modelModifiers.trim ? p.trim() : p, S = (p) => e.maxlength ? p.slice(0, z(e.maxlength)) : p, O = (p) => {
      var {
        disabled: b,
        readonly: L
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || b || L || p.stopPropagation();
    }, k = () => {
      P(e["onUpdate:modelValue"], ""), d();
    }, A = () => u(e.rules, e.modelValue), V = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, I = () => {
      r.value.blur();
    }, B = {
      reset: k,
      validate: A,
      resetValidation: d
    };
    return P(o, B), Ue(() => {
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
      classes: vh,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: h,
      handleInput: C,
      handleChange: g,
      handleClear: $,
      handleClick: T,
      handleTouchstart: O,
      validate: A,
      resetValidation: d,
      reset: k,
      focus: V,
      blur: I
    };
  }
});
yu.render = ph;
const sr = yu;
sr.install = function(e) {
  e.component(sr.name, sr);
};
var Kw = sr;
function hh(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gh(e) {
  return ["always", "hover", "none"].includes(e);
}
var yh = {
  type: {
    type: String,
    default: "default",
    validator: hh
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
    validator: gh
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
  n: bh,
  classes: wh
} = ee("link");
function Ch(e, n) {
  return y(), me(
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
var bu = x({
  name: "VarLink",
  props: yh,
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
      o || P(i, t);
    };
    return {
      n: bh,
      classes: wh,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
bu.render = Ch;
const zr = bu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var Xw = zr, Sh = {
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
function Qi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function kh(e) {
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
  n: $h,
  classes: Th
} = ee("list");
function Ph(e, n) {
  var r = le("var-loading"), a = qe("ripple");
  return y(), M(
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
    }, () => [ke((y(), M(
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
var wu = x({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: $n
  },
  props: Sh,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      P(e["onUpdate:error"], !1), P(e["onUpdate:loading"], !0), P(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = kh(function* () {
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
    }), cr(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: Fe,
      listEl: n,
      detectorEl: r,
      dt: Mt,
      isNumber: _e,
      load: t,
      check: i,
      n: $h,
      classes: Th
    };
  }
});
wu.render = Ph;
const Lr = wu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var Zw = Lr, Oh = {
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
  classes: Vh,
  n: _i
} = ee("loading-bar");
const Mh = x({
  name: "VarLoadingBar",
  props: Oh,
  setup(e) {
    return () => re("div", {
      class: Vh(_i(), [e.error, _i("--error")]),
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
var Cu, xi, ln = Me({
  value: 0,
  opacity: 0,
  error: !1
}), Eh = (e) => {
  Object.assign(ln, e);
}, Su = () => {
  Cu = window.setTimeout(() => {
    if (!(ln.value >= 95)) {
      var e = Math.random();
      ln.value < 70 && (e = Math.round(5 * Math.random())), ln.value += e, Su();
    }
  }, 200);
}, Ih = () => {
  xi || (xi = !0, Ua(Mh, ln)), (!ln.error || ln.value === 100) && (ln.value = 0), setTimeout(() => {
    ln.opacity = 1;
  }, 200), Su();
}, Bh = () => {
  ln.value = 100, setTimeout(() => {
    ln.opacity = 0, setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, 300), window.clearTimeout(Cu);
}, Nh = () => {
  ln.error = !0, $t.start(), setTimeout($t.finish, 300);
}, $t = {
  start: Ih,
  finish: Bh,
  error: Nh,
  mergeConfig: Eh
}, Jw = $t;
const Io = $t;
function Dh(e) {
  return ["click", "hover"].includes(e);
}
function Ah(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var zh = {
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
    validator: Dh
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Ah
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
}, Lh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ct(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Lh[n];
  });
}
var Un = "top", fr = "bottom", ma = "right", ur = "left", Yt = "auto", Ft = [Un, fr, ma, ur], Ht = "start", Xa = "end", Rh = "clippingParents", ku = "viewport", Ya = "popper", Uh = "reference", el = /* @__PURE__ */ Ft.reduce(function(e, n) {
  return e.concat([n + "-" + Ht, n + "-" + Xa]);
}, []), $u = /* @__PURE__ */ [].concat(Ft, [Yt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ht, n + "-" + Xa]);
}, []), Yh = "beforeRead", Fh = "read", Hh = "afterRead", Wh = "beforeMain", jh = "main", Gh = "afterMain", qh = "beforeWrite", Kh = "write", Xh = "afterWrite", Bo = [Yh, Fh, Hh, Wh, jh, Gh, qh, Kh, Xh];
function Yn(e) {
  return e.split("-")[0];
}
var Zh = {
  start: "end",
  end: "start"
};
function nl(e) {
  return e.replace(/start|end/g, function(n) {
    return Zh[n];
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
function pa(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function pn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function oi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function pr(e) {
  return ((pa(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var ja = Math.max, rl = Math.min, Ba = Math.round;
function No() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Tu() {
  return !/^((?!chrome|android).)*safari/i.test(No());
}
function Na(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && pn(e) && (t = e.offsetWidth > 0 && Ba(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ba(a.height) / e.offsetHeight || 1);
  var i = pa(e) ? Cn(e) : window, l = i.visualViewport, s = !Tu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function ii(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function li(e) {
  return Na(pr(e)).left + ii(e).scrollLeft;
}
function Jh(e, n) {
  var r = Cn(e), a = pr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Tu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + li(e),
    y: s
  };
}
function On(e) {
  return Cn(e).getComputedStyle(e);
}
function Qh(e) {
  var n, r = pr(e), a = ii(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = ja(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = ja(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + li(e), s = -a.scrollTop;
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
    (oi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pr(e)
  );
}
function si(e) {
  var n = On(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Pu(e) {
  return ["html", "body", "#document"].indexOf(In(e)) >= 0 ? e.ownerDocument.body : pn(e) && si(e) ? e : Pu(Wt(e));
}
function Ga(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Pu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], si(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ga(Wt(i)))
  );
}
function _h(e) {
  return ["table", "td", "th"].indexOf(In(e)) >= 0;
}
function al(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  On(e).position === "fixed" ? null : e.offsetParent;
}
function xh(e) {
  var n = /firefox/i.test(No()), r = /Trident/i.test(No());
  if (r && pn(e)) {
    var a = On(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Wt(e);
  for (oi(t) && (t = t.host); pn(t) && ["html", "body"].indexOf(In(t)) < 0; ) {
    var o = On(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function ui(e) {
  for (var n = Cn(e), r = al(e); r && _h(r) && On(r).position === "static"; )
    r = al(r);
  return r && (In(r) === "html" || In(r) === "body" && On(r).position === "static") ? n : r || xh(e) || n;
}
function eg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && oi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Do(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ng(e, n) {
  var r = Na(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function tl(e, n, r) {
  return n === ku ? Do(Jh(e, r)) : pa(n) ? ng(n, r) : Do(Qh(pr(e)));
}
function rg(e) {
  var n = Ga(Wt(e)), r = ["absolute", "fixed"].indexOf(On(e).position) >= 0, a = r && pn(e) ? ui(e) : e;
  return pa(a) ? n.filter(function(t) {
    return pa(t) && eg(t, a) && In(t) !== "body";
  }) : [];
}
function ag(e, n, r, a) {
  var t = n === "clippingParents" ? rg(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = tl(e, u, a);
    return s.top = ja(d.top, s.top), s.right = rl(d.right, s.right), s.bottom = rl(d.bottom, s.bottom), s.left = ja(d.left, s.left), s;
  }, tl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Za(e) {
  return e.split("-")[1];
}
function tg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ou(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Yn(a) : null, o = a ? Za(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Un:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case fr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case ma:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case ur:
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
  var u = t ? tg(t) : null;
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
function og() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ig(e) {
  return Object.assign({}, og(), e);
}
function lg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Vu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Rh : l, u = r.rootBoundary, d = u === void 0 ? ku : u, v = r.elementContext, f = v === void 0 ? Ya : v, c = r.altBoundary, h = c === void 0 ? !1 : c, C = r.padding, g = C === void 0 ? 0 : C, $ = ig(typeof g != "number" ? g : lg(g, Ft)), T = f === Ya ? Uh : Ya, w = e.rects.popper, S = e.elements[h ? T : f], O = ag(pa(S) ? S : S.contextElement || pr(e.elements.popper), s, d, i), k = Na(e.elements.reference), A = Ou({
    reference: k,
    element: w,
    strategy: "absolute",
    placement: t
  }), V = Do(Object.assign({}, w, A)), I = f === Ya ? V : k, B = {
    top: O.top - I.top + $.top,
    bottom: I.bottom - O.bottom + $.bottom,
    left: O.left - I.left + $.left,
    right: I.right - O.right + $.right
  }, p = e.modifiersData.offset;
  if (f === Ya && p) {
    var b = p[t];
    Object.keys(B).forEach(function(L) {
      var Q = [ma, fr].indexOf(L) >= 0 ? 1 : -1, Y = [Un, fr].indexOf(L) >= 0 ? "y" : "x";
      B[L] += b[Y] * Q;
    });
  }
  return B;
}
function sg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? $u : s, d = Za(a), v = d ? l ? el : el.filter(function(h) {
    return Za(h) === d;
  }) : Ft, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, C) {
    return h[C] = Vu(e, {
      placement: C,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Yn(C)], h;
  }, {});
  return Object.keys(c).sort(function(h, C) {
    return c[h] - c[C];
  });
}
function ug(e) {
  if (Yn(e) === Yt)
    return [];
  var n = ct(e);
  return [nl(e), n, nl(n)];
}
function dg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, C = r.allowedAutoPlacements, g = n.options.placement, $ = Yn(g), T = $ === g, w = s || (T || !h ? [ct(g)] : ug(g)), S = [g].concat(w).reduce(function(ae, oe) {
      return ae.concat(Yn(oe) === Yt ? sg(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: C
      }) : oe);
    }, []), O = n.rects.reference, k = n.rects.popper, A = /* @__PURE__ */ new Map(), V = !0, I = S[0], B = 0; B < S.length; B++) {
      var p = S[B], b = Yn(p), L = Za(p) === Ht, Q = [Un, fr].indexOf(b) >= 0, Y = Q ? "width" : "height", R = Vu(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Q ? L ? ma : ur : L ? fr : Un;
      O[Y] > k[Y] && (J = ct(J));
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
const vg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: dg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function fg(e, n, r) {
  var a = Yn(e), t = [ur, Un].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [ur, ma].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function cg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = $u.reduce(function(d, v) {
    return d[v] = fg(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const mg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: cg
};
function pg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function hg(e) {
  return e === Cn(e) || !pn(e) ? ii(e) : pg(e);
}
function gg(e) {
  var n = e.getBoundingClientRect(), r = Ba(n.width) / e.offsetWidth || 1, a = Ba(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function yg(e, n, r) {
  r === void 0 && (r = !1);
  var a = pn(n), t = pn(n) && gg(n), o = pr(n), i = Na(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((In(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  si(o)) && (l = hg(n)), pn(n) ? (s = Na(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = li(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function bg(e) {
  var n = Na(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function wg(e) {
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
function Cg(e) {
  var n = wg(e);
  return Bo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Sg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Gn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var hr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', kg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', ol = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function $g(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), ol).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Gn(hr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Gn(hr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Bo.indexOf(n.phase) < 0 && console.error(Gn(hr, n.name, '"phase"', "either " + Bo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Gn(hr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Gn(hr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Gn(hr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Gn(hr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + ol.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Gn(kg, String(n.name), a, a));
      });
    });
  });
}
function Tg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Pg(e) {
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
var il = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Og = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ll = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function sl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Vg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? ll : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ll, o),
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
        var T = typeof $ == "function" ? $(d.options) : $;
        C(), d.options = Object.assign({}, o, d.options, T), d.scrollParents = {
          reference: pa(l) ? Ga(l) : l.contextElement ? Ga(l.contextElement) : [],
          popper: Ga(s)
        };
        var w = Cg(Pg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Tg([].concat(w, d.options.modifiers), function(p) {
            var b = p.name;
            return b;
          });
          if ($g(S), Yn(d.options.placement) === Yt) {
            var O = d.orderedModifiers.find(function(p) {
              var b = p.name;
              return b === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = On(s), A = k.marginTop, V = k.marginRight, I = k.marginBottom, B = k.marginLeft;
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
          var $ = d.elements, T = $.reference, w = $.popper;
          if (!sl(T, w)) {
            process.env.NODE_ENV !== "production" && console.error(il);
            return;
          }
          d.rects = {
            reference: yg(T, ui(w), d.options.strategy === "fixed"),
            popper: bg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var S = 0, O = 0; O < d.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Og);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, O = -1;
              continue;
            }
            var k = d.orderedModifiers[O], A = k.fn, V = k.options, I = V === void 0 ? {} : V, B = k.name;
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
      update: Sg(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        C(), f = !0;
      }
    };
    if (!sl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(il), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      d.orderedModifiers.forEach(function(g) {
        var $ = g.name, T = g.options, w = T === void 0 ? {} : T, S = g.effect;
        if (typeof S == "function") {
          var O = S({
            state: d,
            name: $,
            instance: c,
            options: w
          }), k = function() {
          };
          v.push(O || k);
        }
      });
    }
    function C() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return c;
  };
}
var lt = {
  passive: !0
};
function Mg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, lt);
  }), l && s.addEventListener("resize", r.update, lt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, lt);
    }), l && s.removeEventListener("resize", r.update, lt);
  };
}
const Eg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Mg,
  data: {}
};
function Ig(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Ou({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Bg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ig,
  data: {}
};
var Ng = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Dg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ba(n * t) / t || 0,
    y: Ba(r * t) / t || 0
  };
}
function ul(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, c = f === void 0 ? 0 : f, h = i.y, C = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: c,
    y: C
  }) : {
    x: c,
    y: C
  };
  c = g.x, C = g.y;
  var $ = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), w = ur, S = Un, O = window;
  if (u) {
    var k = ui(r), A = "clientHeight", V = "clientWidth";
    if (k === Cn(r) && (k = pr(r), On(k).position !== "static" && l === "absolute" && (A = "scrollHeight", V = "scrollWidth")), k = k, t === Un || (t === ur || t === ma) && o === Xa) {
      S = fr;
      var I = v && k === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[A]
      );
      C -= I - a.height, C *= s ? 1 : -1;
    }
    if (t === ur || (t === Un || t === fr) && o === Xa) {
      w = ma;
      var B = v && k === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[V]
      );
      c -= B - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && Ng), b = d === !0 ? Dg({
    x: c,
    y: C
  }) : {
    x: c,
    y: C
  };
  if (c = b.x, C = b.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[S] = T ? "0" : "", L[w] = $ ? "0" : "", L.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + C + "px)" : "translate3d(" + c + "px, " + C + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[S] = T ? C + "px" : "", n[w] = $ ? c + "px" : "", n.transform = "", n));
}
function Ag(e) {
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
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, ul(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, ul(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const zg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ag,
  data: {}
};
function Lg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !pn(o) || !In(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function Rg(e) {
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
const Ug = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Lg,
  effect: Rg,
  requires: ["computeStyles"]
};
var Yg = [Eg, Bg, zg, Ug], Fg = /* @__PURE__ */ Vg({
  defaultModifiers: Yg
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
function dl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vl(e) {
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
function Mu(e) {
  var n = E(null), r = E(null), a = E(!1), t = E({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = xa(() => a.value, 1), i = null, l = !1, s = !1, u = !1, d = () => {
    var {
      width: k,
      height: A
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(k),
      height: Ne(A)
    };
  }, v = () => {
    e.trigger === "hover" && (u = !0, S());
  }, f = /* @__PURE__ */ function() {
    var k = vl(function* () {
      e.trigger === "hover" && (u = !1, yield Mn(), !s && O());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, h = /* @__PURE__ */ function() {
    var k = vl(function* () {
      e.trigger === "hover" && (s = !1, yield Mn(), !u && O());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), C = () => {
    S(), l = !0;
  }, g = () => {
    if (l) {
      l = !1;
      return;
    }
    a.value = !1, P(e["onUpdate:show"], !1);
  }, $ = () => {
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
  }, T = () => {
    var {
      placement: k,
      skidding: A,
      distance: V
    } = $(), I = [Tt({}, vg, {
      enabled: a.value
    }), Tt({}, mg, {
      options: {
        offset: [A, V]
      }
    })];
    return {
      placement: k,
      modifiers: I
    };
  }, w = () => {
    i.setOptions(T());
  }, S = () => {
    var {
      disabled: k
    } = e;
    k || (a.value = !0, P(e["onUpdate:show"], !0));
  }, O = () => {
    a.value = !1, P(e["onUpdate:show"], !1);
  };
  return ie(() => e.show, (k) => {
    a.value = k ?? !1;
  }, {
    immediate: !0
  }), ie(() => e.offsetX, w), ie(() => e.offsetY, w), ie(() => e.placement, w), ie(() => a.value, (k) => {
    k ? (w(), P(e.onOpen)) : P(e.onClose);
  }), ie(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", g) : document.removeEventListener("click", g);
  }), ie(() => e.disabled, O), Ue(() => {
    i = Fg(n.value, r.value, T()), e.trigger === "click" && document.addEventListener("click", g);
  }), cr(() => {
    document.removeEventListener("click", g), i.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: o,
    host: n,
    hostSize: t,
    handleHostClick: C,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: c,
    handlePopoverMouseleave: h,
    resize: w,
    open: S,
    close: O
  };
}
var {
  n: Hg,
  classes: Wg
} = ee("menu");
function jg(e, n) {
  return y(), M(
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
    [W(e.$slots, "default"), (y(), me(
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
var Eu = x({
  name: "VarMenu",
  props: zh,
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
    } = Mu(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: we,
      n: Hg,
      classes: Wg,
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
Eu.render = jg;
const Fn = Eu;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var Qw = Fn, Iu = Symbol("SELECT_BIND_OPTION_KEY"), Bu = Symbol("SELECT_COUNT_OPTION_KEY");
function Gg() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Iu), {
    length: r
  } = gn(Bu);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function qg() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Iu), {
    index: r
  } = yn(Bu);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Kg = {
  label: {},
  value: {}
}, {
  n: Xg,
  classes: Zg
} = ee("option");
function Jg(e, n) {
  var r = le("var-checkbox"), a = qe("ripple");
  return ke((y(), M(
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
    ), e.multiple ? (y(), me(
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
var Nu = x({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: tr
  },
  props: Kg,
  setup(e) {
    var n = E(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: i
    } = qg(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = o, v = () => {
      n.value = !n.value, d(h);
    }, f = () => d(h), c = (C) => {
      n.value = C;
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
      n: Xg,
      classes: Zg,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Nu.render = Jg;
const Rr = Nu;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var _w = Rr, Qg = {
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
function _g(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ot(e);
}
var {
  n: fl
} = ee("overlay");
const Ur = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Qg,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = xa(() => e.show, 1), {
      disabled: o
    } = Xo(), i = () => {
      P(e.onClick), P(e["onUpdate:show"], !1);
    };
    Bt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: fl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [P(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(De, {
        name: fl("--fade")
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
        }, _g(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var xw = Ur, xg = {
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
  n: ey,
  classes: ny
} = ee("pagination"), ry = ["item-mode", "onClick"];
function ay(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), i = qe("ripple");
  return y(), M(
    "ul",
    {
      class: m(e.n())
    },
    [ke((y(), M(
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
    }]]), e.simple ? (y(), M(
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
          onKeydown: n[3] || (n[3] = mi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
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
    )) : (y(!0), M(
      Oe,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => ke((y(), M(
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
        ry
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), ke((y(), M(
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
    }]]), e.showSizeChanger ? (y(), M(
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
          menu: ve(() => [(y(!0), M(
            Oe,
            null,
            Be(e.sizeOption, (l, s) => ke((y(), me(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (y(), M(
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
          onKeydown: n[9] || (n[9] = mi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (y(), M(
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
var Du = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: ar,
    VarInput: sr
  },
  directives: {
    Ripple: We
  },
  props: xg,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), o = E(!1), i = E(z(e.current) || 1), l = E(z(e.size) || 10), s = E([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(z(e.total) / z(l.value))), v = F(() => {
      var S = l.value * (i.value - 1) + 1, O = Math.min(l.value * i.value, z(e.total));
      return [S, O];
    }), f = F(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (S, O) => _e(S) ? !1 : O === 1 ? t.value : o.value, h = (S, O) => _e(S) ? "basic" : O === 1 ? "head" : "tail", C = (S, O) => {
      S === i.value || e.disabled || (_e(S) ? i.value = S : S === "prev" ? i.value > 1 && (i.value -= 1) : S === "next" ? i.value < d.value && (i.value += 1) : S === "..." && (O === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, $ = (S) => {
      l.value = S, n.value = !1;
    }, T = (S) => {
      var O = /^[1-9][0-9]*$/;
      return O.test(S);
    }, w = (S, O, k) => {
      if (k.target.blur(), T(O)) {
        var A = z(O);
        A > d.value && (A = d.value, a.value = "" + A), A !== i.value && (i.value = A);
      }
      S === "quick" && (r.value = ""), S === "simple" && !T(O) && (a.value = "" + i.value);
    };
    return ie([() => e.current, () => e.size], (S) => {
      var [O, k] = S;
      i.value = z(O) || 1, l.value = z(k || 10);
    }), ie([i, l, d], (S, O) => {
      var [k, A, V] = S, [I, B] = O, p = [], {
        maxPagerCount: b,
        total: L,
        onChange: Q
      } = e, Y = Math.ceil(z(L) / z(B)), R = V - (b - u.value) - 1;
      if (a.value = "" + k, V - 2 > b) {
        if (I === void 0 || V !== Y)
          for (var J = 2; J < b + 2; J++)
            p.push(J);
        if (k <= b && k < R) {
          p = [];
          for (var j = 1; j < b + 1; j++)
            p.push(j + 1);
          t.value = !0, o.value = !1;
        }
        if (k > b && k < R) {
          p = [];
          for (var K = 1; K < b + 1; K++)
            p.push(k + K - u.value);
          t.value = k === 2 && b === 1, o.value = !1;
        }
        if (k >= R) {
          p = [];
          for (var N = 1; N < b + 1; N++)
            p.push(V - (b - N) - 1);
          t.value = !1, o.value = !0;
        }
        p = [1, "...", ...p, "...", V];
      } else
        for (var X = 1; X <= V; X++)
          p.push(X);
      s.value = p, I !== void 0 && V > 0 && P(Q, k, A), P(e["onUpdate:current"], k), P(e["onUpdate:size"], A);
    }, {
      immediate: !0
    }), {
      n: ey,
      classes: ny,
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
      clickItem: C,
      showMenu: g,
      clickSize: $,
      setPage: w,
      toNumber: z
    };
  }
});
Du.render = ay;
const Yr = Du;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var eC = Yr;
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
var ty = Ao({
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
}, Ge(_a, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: oy,
  classes: iy
} = ee("picker"), cl = 300, ly = 15, ml = 0, sy = ["onTouchstart", "onTouchmove", "onTouchend"], uy = ["onTransitionend"];
function dy(e, n) {
  var r = le("var-button");
  return y(), me(
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
        [D(
          "div",
          {
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
        ), D(
          "div",
          {
            class: m(e.n("columns")),
            style: q({
              height: e.columnHeight + "px"
            })
          },
          [(y(!0), M(
            Oe,
            null,
            Be(e.scrollColumns, (a) => (y(), M(
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
                [(y(!0), M(
                  Oe,
                  null,
                  Be(a.column.texts, (t) => (y(), M(
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
                uy
              )],
              42,
              sy
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
var Au = x({
  name: "VarPicker",
  components: {
    VarButton: xe,
    VarPopup: mn
  },
  inheritAttrs: !1,
  props: ty,
  setup(e) {
    var n = E([]), r = F(() => Ne(e.optionHeight)), a = F(() => Ne(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), o = F(() => a.value * r.value), i = [], l = (p, b) => {
      b.scrollEl = p;
    }, s = (p) => {
      P(e["onUpdate:show"], p);
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
    }, C = (p, b) => {
      b.touching = !0, b.scrolling = !1, b.duration = 0, b.translate = Gt(b.scrollEl);
    }, g = (p, b) => {
      if (b.touching) {
        var {
          clientY: L
        } = p.touches[0], Q = b.prevY !== void 0 ? L - b.prevY : 0;
        b.prevY = L, b.translate += Q, u(b);
        var Y = performance.now();
        Y - b.momentumTime > cl && (b.momentumTime = Y, b.momentumPrevY = b.translate);
      }
    }, $ = (p, b) => {
      b.touching = !1, b.scrolling = !0, b.prevY = void 0;
      var L = b.translate - b.momentumPrevY, Q = performance.now() - b.momentumTime, Y = Math.abs(L) >= ly && Q <= cl;
      Y && h(b, L, Q), b.index = v(b), c(b, b.index, Y ? 1e3 : 200);
    }, T = (p) => {
      p.scrolling = !1, A(p);
    }, w = (p) => p.map((b, L) => {
      var Q, Y = be(b) ? {
        texts: b
      } : b, R = {
        id: ml++,
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
      return O(b, p, 0, !0), b;
    }, O = function(p, b, L, Q) {
      if (Q === void 0 && (Q = !1), be(b) && b.length) {
        var Y, R = Q && (Y = e.cascadeInitialIndexes[p.length]) != null ? Y : 0, J = {
          id: ml++,
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
        p.push(J), c(J, J.index, 0, !0), O(p, J.columns[J.index].children, L + 1, Q);
      }
    }, k = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), O(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, A = (p) => {
      var {
        cascade: b,
        onChange: L
      } = e;
      b && k(p);
      var Q = n.value.some((j) => j.scrolling);
      if (!Q) {
        var {
          texts: Y,
          indexes: R
        } = f(), J = R.every((j, K) => j === i[K]);
        J || (i = [...R], P(L, Y, R));
      }
    }, V = () => {
      if (e.cascade) {
        var p = n.value.find((b) => b.scrolling);
        p && (p.translate = Gt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, k(p));
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
      i = [...b], P(e.onConfirm, p, b);
    }, B = () => {
      V();
      var {
        texts: p,
        indexes: b
      } = f();
      i = [...b], P(e.onCancel, p, b);
    };
    return ie(() => e.columns, (p) => {
      n.value = e.cascade ? S(pi(p)) : w(pi(p));
      var {
        indexes: b
      } = f();
      i = [...b];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: oy,
      classes: iy,
      pack: Fe,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: De,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: C,
      handleTouchmove: g,
      handleTouchend: $,
      handleTransitionend: T,
      confirm: I,
      cancel: B,
      dt: Mt
    };
  }
});
Au.render = dy;
const dr = Au;
var nn;
function ha(e) {
  return new Promise((n) => {
    ha.close();
    var r = be(e) ? {
      columns: e
    } : e, a = Me(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = Ua(dr, a, {
      onConfirm: (o, i) => {
        P(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onCancel: (o, i) => {
        P(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onClose: () => {
        P(a.onClose), n({
          state: "close"
        }), nn === a && (nn = null);
      },
      onClosed: () => {
        P(a.onClosed), t(), nn === a && (nn = null);
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
dr.install = function(e) {
  e.component(dr.name, dr);
};
ha.Component = dr;
ha.install = function(e) {
  e.component(dr.name, dr);
};
ha.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
var nC = dr;
function vy(e) {
  return ["linear", "circle"].includes(e);
}
var fy = {
  mode: {
    type: String,
    default: "linear",
    validator: vy
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
  n: cy,
  classes: my
} = ee("progress"), py = ["viewBox"], hy = ["cx", "cy", "r", "stroke-width"], gy = ["cx", "cy", "r", "stroke-width"];
function yy(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (y(), M(
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
        [e.track ? (y(), M(
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
      ), e.label ? (y(), M(
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
    )) : _("v-if", !0), e.mode === "circle" ? (y(), M(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(y(), M(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (y(), M(
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
          hy
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
          gy
        )],
        14,
        py
      )), e.label ? (y(), M(
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
var zu = x({
  name: "VarProgress",
  props: fy,
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
      n: cy,
      classes: my,
      toSizeUnit: we,
      multiplySizeUnit: Je,
      linearProps: n,
      circleProps: r
    };
  }
});
zu.render = yy;
const Fr = zu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var rC = Fr, by = {
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
function pl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function wy(e) {
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
  n: hl,
  classes: Cy
} = ee("pull-refresh"), gl = 150;
function Sy(e, n) {
  var r = le("var-icon");
  return y(), M(
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
var Lu = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: by,
  setup(e) {
    var n, r, a = E(0), t = E(null), o = E(null), i = E(0), l = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = 0, f = 0, c = E(!0), h = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), C = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: $.value ? e.successBgColor : e.bgColor,
      color: $.value ? e.successColor : e.color
    })), g = F(() => Math.abs(2 * a.value)), $ = F(() => u.value === "success"), T = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, gl);
    }), w = (I) => {
      var B = "classList" in n ? n : document.body;
      B.classList[I](hl() + "--lock");
    }, S = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, O = (I) => {
      if (h.value) {
        var B = Et(n);
        if (!(B > 0)) {
          var p = B === 0, b = I.touches[0];
          f = b.clientY - v, p && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = I.touches[0].clientY), p && l.value > a.value && w("add");
          var L = (I.touches[0].clientY - i.value) / 2 + a.value;
          l.value = L >= g.value ? g.value : L, l.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = T()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var I = wy(function* () {
        h.value && (d.value = !0, l.value >= g.value * 0.2 ? (yield r, u.value = "loading", l.value = g.value * 0.3, P(e["onUpdate:modelValue"], !0), P(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, w("remove");
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
      n = e.target ? Dl(e.target, "PullRefresh") : wa(t.value), A(), (I = t.value) == null || I.addEventListener("touchmove", O, {
        passive: !1
      });
    }), Pt(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", O);
    }), {
      n: hl,
      classes: Cy,
      iconHasChanged: c,
      ICON_TRANSITION: gl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: S,
      touchMove: O,
      touchEnd: k,
      iconName: s,
      controlStyle: C,
      isSuccess: $
    };
  }
});
Lu.render = Sy;
const Hr = Lu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var aC = Hr, ky = {
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
}, Ru = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Uu = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function $y() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ru), {
    length: r
  } = gn(Uu);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Ty() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Ru), {
    index: r
  } = yn(Uu);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Py,
  classes: Oy
} = ee("radio");
function Vy(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = qe("ripple");
  return y(), M(
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
      [ke((y(), M(
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
var Yu = x({
  name: "VarRadio",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: ky,
  setup(e) {
    var n = E(!1), r = F(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = Ty(), {
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
          validateTrigger: O,
          rules: k,
          modelValue: A
        } = e;
        u(O, S, k, A);
      });
    }, c = (S) => {
      var {
        checkedValue: O,
        onChange: k
      } = e;
      t && n.value === O || (n.value = S, P(e["onUpdate:modelValue"], n.value), P(k, n.value), t == null || t.onToggle(O), f("onChange"));
    }, h = (S) => {
      var {
        disabled: O,
        readonly: k,
        uncheckedValue: A,
        checkedValue: V,
        onClick: I
      } = e;
      i != null && i.disabled.value || O || (P(I, S), !(i != null && i.readonly.value || k) && (a.value = !0, c(r.value ? A : V)));
    }, C = (S) => {
      var {
        checkedValue: O,
        uncheckedValue: k
      } = e;
      n.value = S === O ? O : k;
    }, g = () => {
      P(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, $ = () => d(e.rules, e.modelValue), T = (S) => {
      var {
        uncheckedValue: O,
        checkedValue: k
      } = e, A = ![O, k].includes(S);
      A && (S = r.value ? O : k), c(S);
    };
    ie(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var w = {
      sync: C,
      validate: $,
      resetValidation: v,
      reset: g
    };
    return P(o, w), P(l, w), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: Py,
      classes: Oy,
      handleClick: h,
      toggle: T,
      reset: g,
      validate: $,
      resetValidation: v
    };
  }
});
Yu.render = Vy;
const Wr = Yu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var tC = Wr;
function My(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ey = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: My
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
  n: Iy,
  classes: By
} = ee("radio-group");
function Ny(e, n) {
  var r = le("var-form-details");
  return y(), M(
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
var Fu = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: Ey,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = $y(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = F(() => o.value), d = (g) => {
      Ee(() => {
        var {
          validateTrigger: $,
          rules: T,
          modelValue: w
        } = e;
        i($, g, T, w);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: $
      } = g;
      return $(e.modelValue);
    }), f = (g) => {
      P(e["onUpdate:modelValue"], g), P(e.onChange, g), d("onChange");
    }, c = () => l(e.rules, e.modelValue), h = () => {
      P(e["onUpdate:modelValue"], void 0), s();
    };
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var C = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return P(t, C), a(C), {
      errorMessage: o,
      n: Iy,
      classes: By,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
Fu.render = Ny;
const jr = Fu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var oC = jr, Dy = {
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
} = ee("rate"), Ay = ["onClick"];
function zy(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = qe("ripple");
  return y(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [(y(!0), M(
        Oe,
        null,
        Be(e.toNumber(e.count), (o) => ke((y(), M(
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
          Ay
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
var Hu = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  props: Dy,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = (g) => {
      var {
        count: $,
        gap: T
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== z($) ? we(T) : 0
      };
    }, s = (g) => {
      var {
        name: $,
        color: T
      } = u(g);
      return {
        [Fa("content")]: !0,
        [Fa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Fa("--error")]: a.value,
        [Fa("--primary")]: $ !== e.emptyIcon && !T
      };
    }, u = (g) => {
      var {
        modelValue: $,
        disabled: T,
        disabledColor: w,
        color: S,
        half: O,
        emptyColor: k,
        icon: A,
        halfIcon: V,
        emptyIcon: I
      } = e, B = S;
      return (T || n != null && n.disabled.value) && (B = w), g <= z($) ? {
        color: B,
        name: A
      } : O && g <= z($) + 0.5 ? {
        color: B,
        name: V
      } : {
        color: T || n != null && n.disabled.value ? w : k,
        name: I
      };
    }, d = (g, $) => {
      if (e.half) {
        var {
          offsetWidth: T
        } = $.target;
        $.offsetX <= Math.floor(T / 2) && (g -= 0.5);
      }
      P(e["onUpdate:modelValue"], g);
    }, v = () => o(e.rules, z(e.modelValue)), f = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, $) => {
      var {
        readonly: T,
        disabled: w,
        onChange: S
      } = e;
      T || w || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, $), P(S, g), f());
    }, h = () => {
      P(e["onUpdate:modelValue"], 0), i();
    }, C = {
      reset: h,
      validate: v,
      resetValidation: i
    };
    return P(r, C), {
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
Hu.render = zy;
const Gr = Hu;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var iC = Gr;
function Ly(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Ry = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Ly
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
}, Uy = (e) => (ya(""), e = e(), ba(), e), Yy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Fy = /* @__PURE__ */ Uy(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), Hy = [Fy];
function Wy(e, n) {
  return y(), M("svg", Yy, Hy);
}
var Wu = x({});
Wu.render = Wy;
const jy = Wu;
var Gy = (e) => (ya(""), e = e(), ba(), e), qy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Ky = /* @__PURE__ */ Gy(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), Xy = [Ky];
function Zy(e, n) {
  return y(), M("svg", qy, Xy);
}
var ju = x({});
ju.render = Zy;
const Jy = ju;
var Qy = (e) => (ya(""), e = e(), ba(), e), _y = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, xy = /* @__PURE__ */ Qy(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), e0 = [xy];
function n0(e, n) {
  return y(), M("svg", _y, e0);
}
var Gu = x({});
Gu.render = n0;
const r0 = Gu;
var {
  n: a0,
  classes: t0
} = ee("result");
function o0(e, n) {
  return y(), M(
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
var qu = x({
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
      n: a0,
      classes: t0,
      toNumber: z
    };
  }
});
qu.render = o0;
const i0 = qu;
var l0 = (e) => (ya(""), e = e(), ba(), e), s0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, u0 = /* @__PURE__ */ l0(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), d0 = [u0];
function v0(e, n) {
  return y(), M("svg", s0, d0);
}
var Ku = x({});
Ku.render = v0;
const f0 = Ku;
var c0 = (e) => (ya(""), e = e(), ba(), e), m0 = {
  viewBox: "-4 -4 32 32"
}, p0 = /* @__PURE__ */ c0(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), h0 = [p0];
function g0(e, n) {
  return y(), M("svg", m0, h0);
}
var Xu = x({});
Xu.render = g0;
const y0 = Xu;
var {
  n: b0,
  classes: w0
} = ee("result");
function C0(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (y(), M(
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
        [(y(), me(
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
    )) : _("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (y(), M(
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
var Zu = x({
  name: "VarResult",
  components: {
    Info: jy,
    Success: i0,
    Warning: r0,
    Error: Jy,
    Question: f0,
    Empty: y0
  },
  props: Ry,
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
      n: b0,
      classes: w0,
      toNumber: z,
      toPxNum: Ne,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
Zu.render = C0;
const qr = Zu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var lC = qr;
function S0(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function k0(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var $0 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: S0
  },
  align: {
    type: String,
    default: "flex-start",
    validator: k0
  },
  onClick: U()
}, {
  n: T0,
  classes: P0
} = ee("row");
function O0(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: q({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [W(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
var Ju = x({
  name: "VarRow",
  props: $0,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = rc(), t = F(() => {
      var l = Ne(e.gutter);
      return l / 2;
    }), o = () => {
      n.forEach((l) => {
        l.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, i = {
      computePadding: o
    };
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: T0,
      classes: P0,
      average: t
    };
  }
});
Ju.render = O0;
const Kr = Ju;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var sC = Kr;
function V0(e) {
  return ["left", "right", "center"].includes(e);
}
var M0 = {
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
    validator: V0
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
  classes: E0
} = ee("select"), I0 = {
  key: 1
};
function B0(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), o = le("var-form-details");
  return y(), M(
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
                }, () => [e.multiple ? (y(), M(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (y(), M(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(y(!0), M(
                      Oe,
                      null,
                      Be(e.labels, (i) => (y(), me(
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
                  )) : (y(), M(
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
                )) : (y(), M(
                  "span",
                  I0,
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
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (y(), me(
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
    ), e.line ? (y(), M(
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
var Qu = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: or,
    VarFormDetails: He
  },
  props: M0,
  setup(e) {
    var n = E(null), r = E(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = E(""), i = E([]), l = F(() => Nn(e.modelValue)), s = E("0px"), u = E(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: h
    } = Gg(), {
      errorMessage: C,
      validateWithTrigger: g,
      validate: $,
      // expose
      resetValidation: T
    } = bn(), w = E(null), S = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var ae = Z;
        i.value = ae.map(A);
      }
      !H && !Nn(Z) && (o.value = A(Z)), !H && Nn(Z) && (o.value = "");
    }, O = (H) => {
      Ee(() => {
        var {
          validateTrigger: Z,
          rules: ae,
          modelValue: oe
        } = e;
        g(Z, H, ae, oe);
      });
    }, k = (H) => {
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
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (s.value = I(), u.value = Ne(e.offsetY), r.value = !0, P(ae), O("onFocus"));
    }, p = () => {
      var {
        disabled: H,
        readonly: Z,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (P(ae), O("onBlur"));
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
        }).map(k) : k(H);
        P(e["onUpdate:modelValue"], pe), P(he, pe), O("onChange"), !oe && (r.value = !1);
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
        P(e["onUpdate:modelValue"], pe), P(he, pe), O("onClear");
      }
    }, Q = (H) => {
      var {
        disabled: Z,
        onClick: ae
      } = e;
      v != null && v.disabled.value || Z || (P(ae, H), O("onClick"));
    }, Y = (H) => {
      var {
        disabled: Z,
        readonly: ae,
        modelValue: oe,
        onClose: he
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe, Ye = c.find((tn) => {
          var {
            label: Ae
          } = tn;
          return Ae.value === H;
        }), en = pe.filter((tn) => {
          var Ae;
          return tn !== ((Ae = Ye.value.value) != null ? Ae : Ye.label.value);
        });
        P(e["onUpdate:modelValue"], en), P(he, en), O("onClose");
      }
    }, R = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var ae = Z;
        c.forEach((oe) => oe.sync(ae.includes(k(oe))));
      } else
        c.forEach((oe) => oe.sync(Z === k(oe)));
      S();
    }, J = () => {
      s.value = I(), u.value = Ne(e.offsetY), r.value = !0;
    }, j = () => {
      r.value = !1;
    }, K = () => $(e.rules, e.modelValue), N = () => {
      P(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
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
      resetValidation: T
    };
    return h(X), P(d, X), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: C,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: o,
      labels: i,
      isEmptyModelValue: l,
      menuEl: w,
      n: Jt,
      classes: E0,
      computePlaceholderState: V,
      handleFocus: B,
      handleBlur: p,
      handleClear: L,
      handleClick: Q,
      handleClose: Y,
      reset: N,
      validate: K,
      resetValidation: T,
      focus: J,
      blur: j
    };
  }
});
Qu.render = B0;
const Xr = Qu;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var uC = Xr, N0 = {
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
  n: D0,
  classes: A0
} = ee("skeleton");
function z0(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (y(), M(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (y(), M(
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (y(), M(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (y(), M(
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (y(), M(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (y(), M(
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
          )) : _("v-if", !0), (y(!0), M(
            Oe,
            null,
            Be(e.toNumber(e.rows), (r, a) => (y(), M(
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
    )) : _("v-if", !0), e.loading && e.fullscreen ? (y(), M(
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
var _u = x({
  name: "VarSkeleton",
  props: N0,
  setup() {
    return {
      n: D0,
      classes: A0,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
_u.render = z0;
const Zr = _u;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var dC = Zr;
function L0(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var R0 = {
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
    validator: L0
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
  n: yl,
  classes: U0
} = ee("slider"), Y0 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function F0(e, n) {
  var r = le("var-form-details");
  return y(), M(
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
      ), (y(!0), M(
        Oe,
        null,
        Be(e.thumbList, (a) => (y(), M(
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
          Y0
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
var xu = x({
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: R0,
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
    }), u = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), v = E(0), f = E(!1), c = Me({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), h = F(() => z(e.max) - z(e.min)), C = F(() => v.value / h.value * z(e.step)), g = F(() => {
      var {
        modelValue: j,
        range: K
      } = e, N = [];
      return K && be(j) ? N = [{
        value: O(j[0]),
        enumValue: Ie.First,
        text: k(j[0])
      }, {
        value: O(j[1]),
        enumValue: Ie.Second,
        text: k(j[1])
      }] : _e(j) && (N = [{
        value: O(j),
        enumValue: Ie.First,
        text: k(j)
      }]), N;
    }), $ = F(() => {
      var {
        activeColor: j,
        range: K,
        modelValue: N
      } = e, X = K && be(N) ? O(Math.min(N[0], N[1])) : 0, H = K && be(N) ? O(Math.max(N[0], N[1])) - X : O(N);
      return {
        width: H + "%",
        left: X + "%",
        background: j
      };
    }), T = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), w = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), S = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[j].active, O = (j) => {
      var {
        min: K,
        max: N
      } = e;
      return j < z(K) ? 0 : j > z(N) ? 100 : (j - z(K)) / h.value * 100;
    }, k = (j) => {
      if (!_e(j))
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
      } = e, he = z(X), pe = Math.round(j / C.value), Ye = pe * he + z(oe), en = c[K].percentValue * he + z(oe);
      if (c[K].percentValue = pe, H && be(Z) && (N = K === Ie.First ? [Ye, Z[1]] : [Z[0], Ye]), en !== Ye) {
        var tn = H ? N.map((Ae) => k(Ae)) : k(Ye);
        P(ae, tn), P(e["onUpdate:modelValue"], tn), u();
      }
    }, V = (j) => {
      if (!e.range)
        return Ie.First;
      var K = c[Ie.First].percentValue * C.value, N = c[Ie.Second].percentValue * C.value, X = Math.abs(j - K), H = Math.abs(j - N);
      return X <= H ? Ie.First : Ie.Second;
    }, I = (j, K) => {
      v.value || (v.value = d.value.offsetWidth), !(T.value || w.value) && (P(e.onStart), f.value = !0, c[K].startPosition = j.touches[0].clientX);
    }, B = (j, K) => {
      if (!(T.value || w.value || !f.value)) {
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
      if (!(T.value || w.value)) {
        var ae = [];
        c[j].currentLeft = c[j].percentValue * C.value, c[j].active = !1;
        var oe = c[j].percentValue * z(H) + z(Z);
        K && be(N) && (ae = j === Ie.First ? [oe, N[1]] : [N[0], oe]), P(X, K ? ae : oe), f.value = !1;
      }
    }, b = (j) => {
      if (!(T.value || w.value) && !j.target.closest("." + yl("thumb"))) {
        var K = j.clientX - Gd(j.currentTarget), N = V(K);
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
      e.range && be(j) ? (c[Ie.First].percentValue = N(j[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * C.value, c[Ie.Second].percentValue = N(j[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * C.value) : _e(j) && (c[Ie.First].currentLeft = N(j) * C.value);
    }, R = () => {
      var j = e.range ? [0, 0] : 0;
      P(e["onUpdate:modelValue"], j), i();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: i
    };
    return P(n, J), ie([() => e.modelValue, () => e.step], (j) => {
      var [K, N] = j;
      !L() || !Q() || f.value || Y(K, z(N));
    }), ie(v, () => Y()), Ue(() => {
      !L() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: yl,
      classes: U0,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: $,
      isDisabled: T,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: Je,
      toNumber: z,
      showLabel: S,
      start: I,
      move: B,
      end: p,
      click: b
    };
  }
});
xu.render = F0;
const Jr = xu;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var vC = Jr;
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
function H0(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function W0(e) {
  return di.includes(e);
}
var ed = {
  type: {
    type: String,
    validator: W0
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: H0
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
  loadingType: Ge(_n, "type"),
  loadingSize: Ge(_n, "size"),
  loadingRadius: Ge(_n, "radius"),
  loadingColor: zo({}, Ge(_n, "color"), {
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
  n: j0,
  classes: G0
} = ee("snackbar"), q0 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function K0(e, n) {
  var r = le("var-icon"), a = le("var-loading");
  return ke((y(), M(
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
        [e.iconName ? (y(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : _("v-if", !0), e.type === "loading" ? (y(), me(
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
var nd = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: ed,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = xa(() => e.show, 1);
    Bt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? q0[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && P(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (i) => {
      i ? (P(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), P(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), Ue(() => {
      e.show && (P(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: di,
      n: j0,
      classes: G0,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
nd.render = K0;
const rd = nd;
var {
  n: X0
} = ee("snackbar");
function Z0(e, n) {
  var r = le("var-snackbar-core");
  return y(), me(
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
var ad = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: rd
  },
  props: ed,
  setup() {
    var {
      disabled: e
    } = Xo();
    return {
      n: X0,
      disabled: e
    };
  }
});
ad.render = Z0;
const Qr = ad;
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
function J0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ot(e);
}
var di = ["loading", "success", "warning", "info", "error"], bl = 0, Lo = !1, td, Da = !1, hn = Me([]), Q0 = {
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
}, _0 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, x0 = {
  setup() {
    return () => {
      var e = hn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: o
        } = r, i = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? i.classList.add("var-pointer-auto") : i.classList.remove("var-pointer-auto"), Da && (t.position = "top");
        var l = Da ? "relative" : "absolute", s = Ja({
          position: l
        }, tb(t.position));
        return re(rd, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: o,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = sn.zIndex;
      return re(Ld, Ve(_0, {
        style: {
          zIndex: n
        },
        onAfterEnter: eb,
        onAfterLeave: nb
      }), J0(e) ? e : {
        default: () => [e]
      });
    };
  }
}, ga = function(e) {
  var n = Ke(e) || _e(e) ? {
    content: String(e)
  } : e, r = Me(Ja({}, Q0, n));
  r.show = !0, Lo || (Lo = !0, td = Ua(x0).unmountInstance);
  var {
    length: a
  } = hn, t = {
    id: bl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Da)
    rb(t);
  else {
    var o = "update-" + bl;
    ab(r, o);
  }
  return {
    clear() {
      !Da && hn.length ? hn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
di.forEach((e) => {
  ga[e] = (n) => (jo(n) ? n.type = e : n = {
    content: n,
    type: e
  }, ga(n));
});
ga.install = function(e) {
  e.component(Qr.name, Qr);
};
ga.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Da && (hn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Da = e);
};
ga.clear = function() {
  hn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
ga.Component = Qr;
function eb(e) {
  var n = e.getAttribute("data-id"), r = hn.find((a) => a.id === z(n));
  r && P(r.reactiveSnackOptions.onOpened);
}
function nb(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = hn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, P(r.reactiveSnackOptions.onClosed));
  var a = hn.every((t) => t.animationEnd);
  a && (P(td), hn = Me([]), Lo = !1);
}
function rb(e) {
  hn.push(e);
}
function ab(e, n) {
  var [r] = hn;
  r.reactiveSnackOptions = Ja({}, r.reactiveSnackOptions, e), r._update = n;
}
function tb(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var fC = Qr;
const Ro = ga;
var od = (e) => ["mini", "small", "normal", "large"].includes(e), ob = (e) => od(e) || be(e) || _e(e) || Ke(e), ib = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), lb = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: ob
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
    validator: ib
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function on(e) {
  return "calc(" + e + " / 2)";
}
function sb(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? o !== i ? l = on(e) + " " + n + " " + on(e) + " 0" : l = on(e) + " 0" : t === "space-around" ? l = on(e) + " " + on(n) : t === "space-between" && (o === 0 ? l = on(e) + " " + on(n) + " " + on(e) + " 0" : o === i ? l = on(e) + " 0 " + on(e) + " " + on(n) : l = on(e) + " " + on(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Qt,
  classes: ub
} = ee("space");
const _r = x({
  name: "VarSpace",
  props: lb,
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
      } = e, f = (o = P(r.default)) != null ? o : [], c = od(v), [h, C] = a(v, c), g = (w) => {
        var S = [];
        return w.forEach((O) => {
          if (O.type !== Rd) {
            if (O.type === Oe && be(O.children)) {
              O.children.forEach((k) => {
                S.push(k);
              });
              return;
            }
            S.push(O);
          }
        }), S;
      };
      f = g(f);
      var $ = f.length - 1, T = f.map((w, S) => {
        var O = sb(h, C, {
          direction: d,
          justify: l,
          index: S,
          lastIndex: $
        });
        return re("div", {
          style: {
            margin: O
          }
        }, [w]);
      });
      return re("div", {
        class: ub(Qt(), Qt("$--box"), [i, Qt("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + h + " / 2) 0" : void 0
        }
      }, [T]);
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var cC = _r, db = {
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
}, id = Symbol("STEPS_BIND_STEP_KEY"), ld = Symbol("STEPS_COUNT_STEP_KEY");
function vb() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(id), {
    length: r
  } = gn(ld);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function fb() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(id), {
    index: r
  } = yn(ld);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: cb,
  classes: mb
} = ee("step"), pb = {
  key: 3
};
function hb(e, n) {
  var r = le("var-icon");
  return y(), M(
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
          [e.isActive ? (y(), me(
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
          )) : e.isCurrent && e.currentIcon ? (y(), me(
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
          )) : e.inactiveIcon ? (y(), me(
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
          )) : (y(), M(
            "span",
            pb,
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
      ), e.isLastChild ? _("v-if", !0) : (y(), M(
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
var sd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: db,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = fb(), {
      active: i,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => i.value === a.value), c = F(() => a.value !== -1 && i.value > a.value), h = {
      index: a
    }, C = () => v(a.value), g = ($) => {
      d.value === "horizontal" && (e.value = $);
    };
    return o(h), ie(l, ($) => {
      if (r.value = $ - 1 === a.value, e.value) {
        var T = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + T + "px";
      }
    }), {
      n: cb,
      classes: mb,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: C,
      getRef: g
    };
  }
});
sd.render = hb;
const xr = sd;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var mC = xr;
function gb(e) {
  return ["horizontal", "vertical"].includes(e);
}
var yb = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: gb
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: bb
} = ee("steps");
function wb(e, n) {
  return y(), M(
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
var ud = x({
  name: "VarSteps",
  props: yb,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: i
    } = vb(), l = (u) => {
      P(e.onClickStep, u);
    }, s = {
      active: n,
      length: o,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return i(s), {
      n: bb
    };
  }
});
ud.render = wb;
const ea = ud;
ea.install = function(e) {
  e.component(ea.name, ea);
};
var pC = ea, Cb = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Sb
} = ee("style-provider"), kb = x({
  name: "VarStyleProvider",
  props: Cb,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Ml(e.tag, {
      class: Sb(),
      style: Rl(e.styleVars)
    }, P(r.default));
  }
});
const na = kb;
var _t = [];
function Qa(e) {
  _t.forEach((r) => document.documentElement.style.removeProperty(r)), _t.length = 0;
  var n = Rl(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), _t.push(a);
  });
}
Qa.Component = na;
na.install = function(e) {
  e.component(na.name, na);
};
Qa.install = function(e) {
  e.component(na.name, na);
};
var hC = na, $b = {
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
  n: Tb,
  classes: Pb
} = ee("switch");
function Ob(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = qe("ripple");
  return y(), M(
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
      ), ke((y(), M(
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
          [e.loading ? (y(), me(
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
var dd = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  props: $b,
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
        modelValue: C,
        color: g,
        closeColor: $,
        loadingColor: T,
        activeValue: w
      } = e;
      return {
        handle: {
          width: Je(h),
          height: Je(h),
          backgroundColor: C === w ? g : $,
          color: T
        },
        ripple: {
          left: C === w ? Je(h, 0.5) : "-" + Je(h, 0.5),
          color: C === w ? g : $ || "#999",
          width: Je(h, 2),
          height: Je(h, 2)
        },
        track: {
          height: Je(h, 0.72),
          width: Je(h, 1.9),
          borderRadius: Je(h, 2 / 3),
          filter: C === w || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: C === w ? g : $
        },
        switch: {
          height: Je(h, 1.2),
          width: Je(h, 2)
        }
      };
    }), d = F(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return Je(h, 0.4);
    }), v = (h) => {
      var {
        onClick: C,
        onChange: g,
        disabled: $,
        loading: T,
        readonly: w,
        modelValue: S,
        activeValue: O,
        inactiveValue: k,
        "onUpdate:modelValue": A
      } = e;
      if (P(C, h), !($ || T || w || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var V = S === O ? k : O;
        P(g, V), P(A, V), s();
      }
    }, f = () => {
      P(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: i
    };
    return P(n, c), {
      n: Tb,
      classes: Pb,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
dd.render = Ob;
const ra = dd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var gC = ra, Vb = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, vd = Symbol("TABS_BIND_TAB_KEY"), fd = Symbol("TABS_COUNT_TAB_KEY");
function Mb() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(vd), {
    length: r
  } = gn(fd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Eb() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(vd), {
    index: r
  } = yn(fd);
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
  classes: Ib
} = ee("tab");
function Bb(e, n) {
  var r = qe("ripple");
  return ke((y(), M(
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
var cd = x({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Vb,
  setup(e) {
    var n = E(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = Eb(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = i, C = {
      name: r,
      index: o,
      disabled: a,
      element: t
    };
    l(C);
    var g = () => {
      var {
        disabled: w,
        name: S
      } = e;
      return w ? f.value : u.value === S || u.value === (o == null ? void 0 : o.value) ? d.value : v.value;
    }, $ = () => {
      var {
        disabled: w,
        name: S
      } = e;
      return w ? st("$-tab--disabled") : u.value === S || u.value === (o == null ? void 0 : o.value) ? st("$-tab--active") : st("$-tab--inactive");
    }, T = (w) => {
      var {
        disabled: S,
        name: O,
        onClick: k
      } = e;
      S || (P(k, O ?? o.value, w), s(C));
    };
    return ie(() => e.name, h), ie(() => e.disabled, h), {
      n: st,
      classes: Ib,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: $,
      handleClick: T
    };
  }
});
cd.render = Bb;
const aa = cd;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var yC = aa, md = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), pd = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function Nb() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(md), {
    length: r
  } = gn(pd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Db() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(md), {
    index: r
  } = yn(pd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Ab = {
  name: {
    type: [String, Number]
  }
}, {
  n: zb,
  classes: Lb
} = ee("tab-item");
function Rb(e, n) {
  var r = le("var-swipe-item");
  return y(), me(
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
var hd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Ln
  },
  props: Ab,
  setup(e) {
    var n = E(!1), r = E(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Db(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: zb,
      classes: Lb,
      current: n,
      initSlot: r
    };
  }
});
hd.render = Rb;
const ta = hd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var bC = ta, Ub = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Yb,
  classes: Fb
} = ee("table");
function Hb(e, n) {
  return y(), M(
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
    ), e.$slots.footer ? (y(), M(
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
var gd = x({
  name: "VarTable",
  props: Ub,
  setup() {
    return {
      toSizeUnit: we,
      n: Yb,
      classes: Fb
    };
  }
});
gd.render = Hb;
const oa = gd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var wC = oa;
function wl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Wb = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: wl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: wl
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
  stickyCssMode: Ge(ft, "cssMode"),
  stickyZIndex: Ge(ft, "zIndex"),
  offsetTop: Ge(ft, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function Cl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Cl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Cl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: jb,
  classes: Gb
} = ee("tabs");
function qb(e, n) {
  return y(), me(
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
var yd = x({
  name: "VarTabs",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: Wb,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), o = E(!1), i = E(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = E(null), {
      tabList: c,
      bindTabList: h,
      length: C
    } = Mb(), g = (B) => {
      var p, b = (p = B.name.value) != null ? p : B.index.value, {
        active: L,
        onChange: Q,
        onClick: Y
      } = e;
      P(e["onUpdate:active"], b), P(Y, b), b !== L && P(Q, b);
    }, $ = () => c.find((B) => {
      var {
        name: p
      } = B;
      return e.active === p.value;
    }), T = (B) => c.find((p) => {
      var {
        index: b
      } = p;
      return (B ?? e.active) === b.value;
    }), w = () => {
      if (C.value !== 0) {
        var {
          active: B
        } = e;
        if (_e(B)) {
          var p = B > C.value - 1 ? C.value - 1 : 0;
          return P(e["onUpdate:active"], p), T(p);
        }
      }
    }, S = () => {
      o.value = c.length >= 5;
    }, O = (B) => {
      var {
        element: p
      } = B, b = p.value;
      e.layoutDirection === "horizontal" ? (n.value = (b == null ? void 0 : b.offsetWidth) + "px", a.value = (b == null ? void 0 : b.offsetLeft) + "px") : (r.value = (b == null ? void 0 : b.offsetHeight) + "px", t.value = (b == null ? void 0 : b.offsetTop) + "px");
    }, k = (B) => {
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
      var B = $() || T() || w();
      !B || B.disabled.value || (S(), O(B), k(B));
    }, V = /* @__PURE__ */ function() {
      var B = Sl(function* () {
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
      onTabClick: g
    };
    return h(I), ie(() => C.value, /* @__PURE__ */ Sl(function* () {
      yield Mn(), A();
    })), ie(() => e.active, A), Ue(() => window.addEventListener("resize", A)), cr(() => window.removeEventListener("resize", A)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: we,
      n: jb,
      classes: Gb,
      resize: A,
      resizeSticky: V
    };
  }
});
yd.render = qb;
const ia = yd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var CC = ia, Kb = {
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
function kl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xb(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        kl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        kl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Zb
} = ee("tabs-items");
function Jb(e, n) {
  var r = le("var-swipe");
  return y(), me(
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
var bd = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: zn
  },
  props: Kb,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Nb(), o = (f) => r.find((c) => {
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
      h && (r.forEach((C) => {
        var {
          setCurrent: g
        } = C;
        return g(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((g) => {
        var {
          index: $
        } = g;
        return $.value === f;
      }), C = (c = h.name.value) != null ? c : h.index.value;
      P(e["onUpdate:active"], C);
    }, d = () => n.value, v = {};
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ Xb(function* () {
      yield Mn(), s(e.active);
    })), {
      swipe: n,
      n: Zb,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
bd.render = Jb;
const la = bd;
la.install = function(e) {
  e.component(la.name, la);
};
var SC = la;
const Qb = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, _b = {
  "--badge-default-color": "#555"
}, xb = {
  "--button-default-color": "#303030"
}, e1 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, n1 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, r1 = {
  "--checkbox-unchecked-color": "#fff"
}, a1 = {
  "--chip-default-color": "#555"
}, t1 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, o1 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, i1 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, l1 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, s1 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, u1 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, d1 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, v1 = {
  "--popup-content-background-color": "#1e1e1e"
}, f1 = {
  "--pull-refresh-background": "#303030"
}, c1 = {
  "--radio-unchecked-color": "#fff"
}, m1 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, p1 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, h1 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, g1 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, y1 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, b1 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, w1 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, C1 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, S1 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, k1 = {
  "--tabs-background": "#1e1e1e"
}, $1 = {
  "--app-bar-color": "#272727"
}, T1 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, P1 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, O1 = {
  "--menu-background-color": "#272727"
}, V1 = {
  "--breadcrumb-inactive-color": "#aaa"
};
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
const M1 = Uo({
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
}, xb, n1, e1, C1, o1, h1, k1, b1, v1, i1, Qb, a1, _b, S1, t1, f1, y1, g1, u1, w1, s1, p1, c1, r1, l1, d1, $1, T1, P1, O1, m1, V1);
var E1 = {
  dark: M1
}, kC = null;
const Yo = E1;
var cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Qe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], $l = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function I1(e) {
  return ["ampm", "24hr"].includes(e);
}
var B1 = {
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
    validator: I1
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
}, wd = (e, n) => e === "24hr" || n === "am", vi = (e, n, r) => {
  var a = cn.findIndex((o) => z(o) === z(r)), t = wd(e, n) ? r : Qe[a];
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
}, Cd = (e) => {
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
  } = vi(t, o, i), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: h,
      minute: C
    } = rn(l);
    f = h === v && a > C;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: $
    } = rn(s);
    f = g === v && a < $;
  }
  if (l && s) {
    var {
      hour: T,
      minute: w
    } = rn(l), {
      hour: S,
      minute: O
    } = rn(s);
    f = S === v && a < O || T === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Sd = (e) => {
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
  } = vi(t, o, i), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: C,
      minute: g,
      second: $
    } = rn(s);
    c = C === f && g < l || g === l && a > $;
  }
  if (!s && u) {
    var {
      hour: T,
      minute: w,
      second: S
    } = rn(u);
    c = T === f && w > l || w === l && a > S;
  }
  if (s && u) {
    var {
      hour: O,
      minute: k,
      second: A
    } = rn(s), {
      hour: V,
      minute: I,
      second: B
    } = rn(u);
    c = O === f && k < l || V === f && I > l || O === f && k === l && a > A || V === f && I === l && a < B;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: N1,
  classes: D1
} = ee("time-picker");
function A1(e, n) {
  return y(), M(
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
    ), (y(!0), M(
      Oe,
      null,
      Be(e.timeScales, (r, a) => (y(), M(
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
    )), e.format === "24hr" && e.type === "hour" ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(y(!0), M(
        Oe,
        null,
        Be(e.hours24, (r, a) => (y(), M(
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
var kd = x({
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
    } = n, a = E(null), t = E([]), o = E([]), i = F(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = F(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = F(() => e.type === "hour" ? cn : $l), u = (g, $) => {
      var T;
      g = (T = g) != null ? T : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? Cd : Sd, S = {
        time: z(g),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return $ && e.type === "minute" && Reflect.deleteProperty(S, "minute"), w(S);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var g = e.isInner ? Qe[l.value] : s.value[l.value];
      return s.value === $l ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, $) => $ ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (wd(e.format, e.ampm))
          return t.value.includes(g);
        var $ = cn.findIndex((T) => T === g);
        return o.value.includes($);
      }
      return u(g, !0);
    }, c = (g, $, T) => {
      var w = 2 * Math.PI / 12 * g - Math.PI / 2, S = 50 * (1 + Math.cos(w)), O = 50 * (1 + Math.sin(w)), k = () => v(g, T) ? f($) ? {
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
      } = k();
      return {
        left: S + "%",
        top: O + "%",
        backgroundColor: A,
        color: V
      };
    }, h = () => {
      var {
        width: g,
        height: $
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: $
      };
    }, C = () => {
      if (l.value !== void 0) {
        var g = e.ampm === "am" ? cn : Qe;
        return va(g[l.value], 2, "0");
      }
    };
    return ie([l, () => e.isInner], (g, $) => {
      var [T, w] = g, [S, O] = $, k = T === S && w === O;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var A = w ? Qe[l.value] : C(), V = e.useSeconds ? ":" + e.time.second : "", I = A + ":" + e.time.minute + V;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), ie(() => e.rad, (g, $) => {
      if (!(e.type === "hour" || g === void 0 || $ === void 0)) {
        var T = g / 6 >= 0 ? g / 6 : g / 6 + 60, w = $ / 6 >= 0 ? $ / 6 : $ / 6 + 60;
        if (T !== w) {
          var S, {
            hourStr: O
          } = vi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = te().minute(T).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            S = O + ":" + k + A;
          }
          if (e.type === "second") {
            var V = te().second(T).format("ss"), I = e.useSeconds ? ":" + V : "";
            S = O + ":" + e.time.minute + I;
          }
          r("update", S);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [$, T, w] = g;
      if (t.value = [], $ && !T) {
        var {
          hour: S
        } = rn($), O = cn.filter((J) => z(J) > S), k = Qe.filter((J) => z(J) > S);
        t.value = [...O, ...k];
      }
      if (!$ && T) {
        var {
          hour: A
        } = rn(T), V = cn.filter((J) => z(J) < A), I = Qe.filter((J) => z(J) < A);
        t.value = [...V, ...I];
      }
      if ($ && T) {
        var {
          hour: B
        } = rn($), {
          hour: p
        } = rn(T), b = cn.filter((J) => z(J) < p || z(J) > B), L = Qe.filter((J) => z(J) < p || z(J) > B);
        t.value = [...b, ...L];
      }
      if (w != null && w.hours) {
        var {
          hours: Q
        } = w, Y = cn.filter((J) => !Q(z(J))), R = Qe.filter((J) => !Q(z(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...Y, ...R])];
      }
      o.value = t.value.map((J) => Qe.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: N1,
      classes: D1,
      hours24: Qe,
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
kd.render = A1;
const z1 = kd;
var {
  n: L1,
  classes: R1
} = ee("time-picker"), U1 = (e) => (ya(""), e = e(), ba(), e), Y1 = /* @__PURE__ */ U1(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), F1 = {
  key: 0
};
function H1(e, n) {
  var r = le("clock");
  return y(), M(
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
        ), Y1, D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (y(), M("span", F1, ":")) : _("v-if", !0), e.useSeconds ? (y(), M(
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
      ), e.format === "ampm" ? (y(), M(
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
            default: ve(() => [(y(), me(
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
var $d = x({
  name: "VarTimePicker",
  components: {
    Clock: z1
  },
  props: B1,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), o = E(!1), i = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), v = E(0), f = E("hour"), c = E("am"), h = E(!1), C = E(!1), g = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), $ = Me({
      x: 0,
      y: 0
    }), T = Me({
      x: [],
      y: []
    }), w = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (N) => {
      P(e["onUpdate:modelValue"], N), P(e.onChange, N);
    }, O = (N) => N * 57.29577951308232, k = (N) => {
      l.value = !1, C.value = !1, f.value = N;
    }, A = (N) => {
      var {
        disableHour: X
      } = a.value, H = cn.findIndex((oe) => z(oe) === z(g.value.hour)), Z = N === "am" ? cn : Qe, ae = [...Z.slice(H), ...Z.slice(0, H)];
      return ae.find((oe, he) => (o.value = he !== 0, !X.includes(oe)));
    }, V = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = A(N);
        if (X) {
          var H = e.useSeconds ? ":" + g.value.second : "", Z = va(X, 2, "0") + ":" + g.value.minute + H;
          S(Z);
        }
      }
    }, I = (N, X) => {
      var H = N >= T.x[0] && N <= T.x[1], Z = X >= T.y[0] && X <= T.y[1];
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
      var ae = Math.round(H / 30) * 30 + 90, oe = p(ae), he = t.value ? cn[oe] : Qe[oe];
      if (Z.includes(he) || (t.value = e.format === "24hr" ? I(N, X) : !1), t.value === i.value) {
        var pe = t.value || c.value === "pm" ? Qe[oe] : cn[oe];
        h.value = Z.includes(pe), !h.value && (u.value = ae, l.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: X
      } = a.value, H = Math.round(N / 6) * 6 + 90, Z = H / 6 >= 0 ? H / 6 : H / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      C.value = Cd(ae), !C.value && (d.value = H, s.value = !0);
    }, Y = (N) => {
      var {
        disableHour: X
      } = a.value, H = Math.round(N / 6) * 6 + 90, Z = H / 6 >= 0 ? H / 6 : H / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        minute: z(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      Sd(ae) || (v.value = H);
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
        T.x = [ae, oe], T.y = [he, pe];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: H
        } = N.touches[0], Z = X - $.x, ae = H - $.y, oe = Math.round(O(Math.atan2(ae, Z)));
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
        u.value = (ae === "12" ? 0 : z(ae)) * 30, d.value = z(he) * 6, v.value = z(pe) * 6, g.value = B(N), e.format !== "24hr" && (c.value = va("" + X, 2, "0") === oe && Qe.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && Qe.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: L1,
      classes: R1,
      getRad: w,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: J,
      checkPanel: k,
      checkAmpm: V,
      end: j,
      update: S,
      changePreventUpdate: K
    };
  }
});
$d.render = H1;
const sa = $d;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var $C = sa;
function W1(e) {
  return ["click", "hover"].includes(e);
}
function j1(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function G1(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var q1 = {
  type: {
    type: String,
    default: "default",
    validator: G1
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
    validator: W1
  },
  placement: {
    type: String,
    default: "bottom",
    validator: j1
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
  n: K1,
  classes: X1
} = ee("tooltip");
function Z1(e, n) {
  return y(), M(
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
    [W(e.$slots, "default"), (y(), me(
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
var Td = x({
  name: "VarTooltip",
  props: q1,
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
    } = Mu(e);
    return {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      n: K1,
      classes: X1,
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
Td.render = Z1;
const ua = Td;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var TC = ua, J1 = {
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
function Tl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Pl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Tl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Tl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Q1,
  classes: _1
} = ee("uploader"), x1 = 0, ew = ["onClick"], nw = ["onClick"], rw = ["src", "alt"], aw = ["multiple", "accept", "capture", "disabled"], tw = ["src"];
function ow(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), o = qe("ripple");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(y(!0), M(
        Oe,
        null,
        Be(e.files, (i) => ke((y(), M(
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
          ), e.removable ? (y(), M(
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
            nw
          )) : _("v-if", !0), i.cover ? (y(), M(
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
            rw
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
          ew
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((y(), M(
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
          aw
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
          return [e.currentPreview && e.isHTMLSupportVideo((i = e.currentPreview) == null ? void 0 : i.url) ? (y(), M(
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
            tw
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
var Pd = x({
  name: "VarUploader",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarPopup: mn,
    VarFormDetails: He
  },
  props: J1,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = F(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: R
        }
      } = e;
      return _e(Y) ? R + " / " + Y : "";
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
        if (Ke(K) && gi(K)) {
          Hn(K);
          return;
        }
        Ke(K) && yi(K) && (a.value = Y, r.value = !0);
      }
    }, c = (Y) => ({
      id: x1++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), h = (Y) => {
      var R = Y.target, {
        files: J
      } = R;
      return Array.from(J);
    }, C = (Y) => new Promise((R) => {
      var J = new FileReader();
      J.onload = () => {
        var j = J.result;
        Y.file.type.startsWith("image") && (Y.cover = j), Y.url = j, R(Y);
      }, J.readAsDataURL(Y.file);
    }), g = (Y) => Y.map(C), $ = (Y) => {
      var {
        onBeforeRead: R
      } = e;
      return Y.map((J) => new Promise((j) => {
        R || j({
          valid: !0,
          varFile: J
        });
        var K = P(R, Me(J));
        K = be(K) ? K : [K], Promise.all(K).then((N) => {
          j({
            valid: !N.some((X) => !X),
            varFile: J
          });
        });
      }));
    }, T = /* @__PURE__ */ function() {
      var Y = Pl(function* (R) {
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
          var ae = (Ae) => Ae.filter((vn) => vn.file.size > z(J) ? (P(N, Me(vn)), !1) : !0), oe = (Ae) => {
            var vn = Math.min(Ae.length, z(j) - K.length);
            return Ae.slice(0, vn);
          }, he = h(R), pe = he.map(c);
          pe = J != null ? ae(pe) : pe, pe = j != null ? oe(pe) : pe;
          var Ye = yield Promise.all(g(pe)), en = yield Promise.all($(Ye)), tn = en.filter((Ae) => {
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
          P(e["onUpdate:modelValue"], [...K, ...tn]), R.target.value = "", tn.forEach((Ae) => P(X, Me(Ae)));
        }
      });
      return function(J) {
        return Y.apply(this, arguments);
      };
    }(), w = /* @__PURE__ */ function() {
      var Y = Pl(function* (R) {
        var {
          disabled: J,
          readonly: j,
          modelValue: K,
          onBeforeRemove: N,
          onRemove: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || j)) {
          if (N) {
            var H = P(N, Me(R));
            if (H = be(H) ? H : [H], (yield Promise.all(H)).some((ae) => !ae))
              return;
          }
          var Z = K.filter((ae) => ae !== R);
          P(X, Me(R)), B("onRemove"), P(e["onUpdate:modelValue"], Z);
        }
      });
      return function(J) {
        return Y.apply(this, arguments);
      };
    }(), S = () => e.modelValue.filter((Y) => Y.state === "success"), O = () => e.modelValue.filter((Y) => Y.state === "error"), k = () => e.modelValue.filter((Y) => Y.state === "loading"), A = () => {
      n.value.click();
    }, V = () => {
      a.value = null, r.value = !1, Hn.close();
    }, I = {
      getSuccess: S,
      getError: O,
      getLoading: k
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
      p = !0, P(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: b,
      resetValidation: d,
      reset: L
    };
    return P(i, Q), ie(() => e.modelValue, () => {
      !p && B("onChange"), p = !1;
    }, {
      deep: !0
    }), {
      n: Q1,
      classes: _1,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: yi,
      isHTMLSupportImage: gi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: T,
      handleRemove: w,
      getSuccess: S,
      getError: O,
      getLoading: k,
      validate: b,
      resetValidation: d,
      reset: L,
      chooseFile: A,
      closePreview: V
    };
  }
});
Pd.render = ow;
const da = Pd;
da.install = function(e) {
  e.component(da.name, da);
};
var PC = da;
const iw = "2.7.3";
function lw(e) {
  fa.install && e.use(fa), gr.install && e.use(gr), yr.install && e.use(yr), rr.install && e.use(rr), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), xe.install && e.use(xe), kr.install && e.use(kr), ar.install && e.use(ar), tr.install && e.use(tr), $r.install && e.use($r), or.install && e.use(or), Tr.install && e.use(Tr), Pr.install && e.use(Pr), Or.install && e.use(Or), sn.install && e.use(sn), Vr.install && e.use(Vr), Mr.install && e.use(Mr), Ir.install && e.use(Ir), ca.install && e.use(ca), Br.install && e.use(Br), An.install && e.use(An), He.install && e.use(He), $e.install && e.use($e), Nr.install && e.use(Nr), Hn.install && e.use(Hn), Dr.install && e.use(Dr), Ar.install && e.use(Ar), sr.install && e.use(sr), kt.install && e.use(kt), zr.install && e.use(zr), Lr.install && e.use(Lr), $n.install && e.use($n), Io.install && e.use(Io), io.install && e.use(io), Fn.install && e.use(Fn), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), ha.install && e.use(ha), mn.install && e.use(mn), Fr.install && e.use(Fr), Hr.install && e.use(Hr), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), qr.install && e.use(qr), We.install && e.use(We), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Ro.install && e.use(Ro), _r.install && e.use(_r), xr.install && e.use(xr), ea.install && e.use(ea), Rn.install && e.use(Rn), Qa.install && e.use(Qa), zn.install && e.use(zn), Ln.install && e.use(Ln), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), Yo.install && e.use(Yo), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da);
}
const OC = {
  version: iw,
  install: lw,
  ActionSheet: fa,
  AppBar: gr,
  BackTop: yr,
  Badge: rr,
  BottomNavigation: br,
  BottomNavigationItem: wr,
  Breadcrumb: Cr,
  Breadcrumbs: Sr,
  Button: xe,
  Card: kr,
  Cell: ar,
  Checkbox: tr,
  CheckboxGroup: $r,
  Chip: or,
  Col: Tr,
  Collapse: Pr,
  CollapseItem: Or,
  Context: sn,
  Countdown: Vr,
  Counter: Mr,
  DatePicker: Ir,
  Dialog: ca,
  Divider: Br,
  Form: An,
  FormDetails: He,
  Icon: $e,
  Image: Nr,
  ImagePreview: Hn,
  IndexAnchor: Dr,
  IndexBar: Ar,
  Input: sr,
  Lazy: kt,
  Link: zr,
  List: Lr,
  Loading: $n,
  LoadingBar: Io,
  Locale: io,
  Menu: Fn,
  Option: Rr,
  Overlay: Ur,
  Pagination: Yr,
  Picker: ha,
  Popup: mn,
  Progress: Fr,
  PullRefresh: Hr,
  Radio: Wr,
  RadioGroup: jr,
  Rate: Gr,
  Result: qr,
  Ripple: We,
  Row: Kr,
  Select: Xr,
  Skeleton: Zr,
  Slider: Jr,
  Snackbar: Ro,
  Space: _r,
  Step: xr,
  Steps: ea,
  Sticky: Rn,
  StyleProvider: Qa,
  Swipe: zn,
  SwipeItem: Ln,
  Switch: ra,
  Tab: aa,
  TabItem: ta,
  Table: oa,
  Tabs: ia,
  TabsItems: la,
  Themes: Yo,
  TimePicker: sa,
  Tooltip: ua,
  Uploader: da
};
export {
  fa as ActionSheet,
  gr as AppBar,
  yr as BackTop,
  rr as Badge,
  br as BottomNavigation,
  wr as BottomNavigationItem,
  Cr as Breadcrumb,
  Sr as Breadcrumbs,
  xe as Button,
  kr as Card,
  ar as Cell,
  tr as Checkbox,
  $r as CheckboxGroup,
  or as Chip,
  Tr as Col,
  Pr as Collapse,
  Or as CollapseItem,
  sn as Context,
  Vr as Countdown,
  Mr as Counter,
  Ir as DatePicker,
  ca as Dialog,
  Br as Divider,
  An as Form,
  He as FormDetails,
  $e as Icon,
  Nr as Image,
  Hn as ImagePreview,
  Dr as IndexAnchor,
  Ar as IndexBar,
  sr as Input,
  kt as Lazy,
  zr as Link,
  Lr as List,
  $n as Loading,
  Io as LoadingBar,
  io as Locale,
  Fn as Menu,
  Rr as Option,
  Ur as Overlay,
  To as PIXEL,
  Yr as Pagination,
  ha as Picker,
  mn as Popup,
  Fr as Progress,
  Hr as PullRefresh,
  Wr as Radio,
  jr as RadioGroup,
  Gr as Rate,
  qr as Result,
  We as Ripple,
  Kr as Row,
  di as SNACKBAR_TYPE,
  Xr as Select,
  Zr as Skeleton,
  Jr as Slider,
  Ro as Snackbar,
  _r as Space,
  xr as Step,
  ea as Steps,
  Rn as Sticky,
  Qa as StyleProvider,
  zn as Swipe,
  Ln as SwipeItem,
  ra as Switch,
  aa as Tab,
  ta as TabItem,
  oa as Table,
  ia as Tabs,
  la as TabsItems,
  Yo as Themes,
  sa as TimePicker,
  ua as Tooltip,
  da as Uploader,
  mw as _ActionSheetComponent,
  pw as _AppBarComponent,
  yw as _BackTopComponent,
  bw as _BadgeComponent,
  ww as _BottomNavigationComponent,
  Cw as _BottomNavigationItemComponent,
  Sw as _BreadcrumbComponent,
  kw as _BreadcrumbsComponent,
  gw as _ButtonComponent,
  $w as _CardComponent,
  Tw as _CellComponent,
  Ow as _CheckboxComponent,
  Vw as _CheckboxGroupComponent,
  Mw as _ChipComponent,
  Ew as _ColComponent,
  Iw as _CollapseComponent,
  Bw as _CollapseItemComponent,
  uw as _ContextComponent,
  Nw as _CountdownComponent,
  Dw as _CounterComponent,
  Aw as _DatePickerComponent,
  zw as _DialogComponent,
  Lw as _DividerComponent,
  Rw as _FormComponent,
  Pw as _FormDetailsComponent,
  fw as _IconComponent,
  Yw as _ImageComponent,
  Ww as _ImagePreviewComponent,
  Gw as _IndexAnchorComponent,
  qw as _IndexBarComponent,
  Kw as _InputComponent,
  Uw as _LazyComponent,
  Xw as _LinkComponent,
  Zw as _ListComponent,
  Jw as _LoadingBarComponent,
  hw as _LoadingComponent,
  cw as _LocaleComponent,
  Qw as _MenuComponent,
  _w as _OptionComponent,
  xw as _OverlayComponent,
  eC as _PaginationComponent,
  nC as _PickerComponent,
  vw as _PopupComponent,
  rC as _ProgressComponent,
  aC as _PullRefreshComponent,
  tC as _RadioComponent,
  oC as _RadioGroupComponent,
  iC as _RateComponent,
  lC as _ResultComponent,
  dw as _RippleComponent,
  sC as _RowComponent,
  uC as _SelectComponent,
  dC as _SkeletonComponent,
  vC as _SliderComponent,
  fC as _SnackbarComponent,
  cC as _SpaceComponent,
  mC as _StepComponent,
  pC as _StepsComponent,
  jw as _StickyComponent,
  hC as _StyleProviderComponent,
  Fw as _SwipeComponent,
  Hw as _SwipeItemComponent,
  gC as _SwitchComponent,
  yC as _TabComponent,
  bC as _TabItemComponent,
  wC as _TableComponent,
  CC as _TabsComponent,
  SC as _TabsItemsComponent,
  kC as _ThemesComponent,
  $C as _TimePickerComponent,
  TC as _TooltipComponent,
  PC as _UploaderComponent,
  gv as actionSheetProps,
  Qo as add,
  kv as appBarProps,
  Wv as backTopProps,
  Zv as badgeProps,
  of as bottomNavigationItemProps,
  xv as bottomNavigationProps,
  ff as breadcrumbProps,
  yf as breadcrumbsProps,
  Rv as buttonProps,
  Sf as cardProps,
  Vf as cellProps,
  Gf as checkboxGroupProps,
  Lf as checkboxProps,
  Qf as chipProps,
  nc as colProps,
  vc as collapseItemProps,
  lc as collapseProps,
  pc as countdownProps,
  vm as counterProps,
  Bm as datePickerProps,
  OC as default,
  Le as defaultLazyOptions,
  Zm as dialogProps,
  ap as dividerProps,
  Kl as enUS,
  Bf as formDetailsProps,
  sp as formProps,
  Gl as iconProps,
  nu as imageCache,
  jp as imagePreviewProps,
  Op as imageProps,
  eh as indexAnchorProps,
  th as indexBarProps,
  dh as inputProps,
  lw as install,
  yh as linkProps,
  Sh as listProps,
  Oh as loadingBarProps,
  _n as loadingProps,
  zh as menuProps,
  Zl as merge,
  Kg as optionProps,
  Qg as overlayProps,
  Fe as pack,
  Xl as packs,
  xg as paginationProps,
  ty as pickerProps,
  _a as popupProps,
  fy as progressProps,
  by as pullRefreshProps,
  Ey as radioGroupProps,
  ky as radioProps,
  Dy as rateProps,
  Ry as resultProps,
  $0 as rowProps,
  M0 as selectProps,
  N0 as skeletonProps,
  R0 as sliderProps,
  ed as snackbarProps,
  lb as spaceProps,
  db as stepProps,
  yb as stepsProps,
  ft as stickyProps,
  Cb as styleProviderProps,
  uu as swipeProps,
  $b as switchProps,
  Ab as tabItemProps,
  Vb as tabProps,
  Ub as tableProps,
  Kb as tabsItemsProps,
  Wb as tabsProps,
  B1 as timePickerProps,
  q1 as tooltipProps,
  J1 as uploaderProps,
  _o as use,
  Jo as useLocale,
  iw as version,
  Zo as zhCN
};
