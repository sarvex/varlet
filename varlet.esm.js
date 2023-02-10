import { reactive as Me, onMounted as Ye, onUnmounted as mr, ref as E, onActivated as Wo, onDeactivated as jo, createApp as Ud, getCurrentInstance as za, provide as Il, computed as Y, inject as Bl, nextTick as Ee, h as Nl, onBeforeUnmount as Ot, isVNode as Vt, watch as ie, onBeforeMount as Yd, defineComponent as x, createVNode as re, Teleport as La, Transition as De, withDirectives as Se, vShow as Ra, mergeProps as Ve, openBlock as h, createBlock as me, resolveDynamicComponent as Ua, normalizeClass as m, normalizeStyle as q, resolveComponent as le, resolveDirective as je, withCtx as ve, createElementVNode as A, renderSlot as W, toDisplayString as ne, createElementBlock as V, Fragment as Oe, renderList as Be, createCommentVNode as _, onUpdated as Go, createTextVNode as be, pushScopeId as ba, popScopeId as wa, withModifiers as Vn, normalizeProps as Dl, guardReactiveProps as Fd, vModelText as Hd, toRefs as Wd, withKeys as yi, toRaw as bi, TransitionGroup as jd, Comment as Gd } from "vue";
var Al = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, Vw = Me(Al);
const sn = Me(Al), Xe = (e) => typeof e == "string", eo = (e) => typeof e == "boolean", an = (e) => typeof e == "number", qo = (e) => Object.prototype.toString.call(e) === "[object Object]", qd = (e) => typeof e == "object" && e !== null, we = (e) => Array.isArray(e), Kd = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Xe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : eo(e) ? Number(e) : e, Mt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ko = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, Xo = () => typeof window < "u", wi = (e) => [...new Set(e)], Xd = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Zd = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var Ci = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Si = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Jd = (e) => {
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
      this.has(r) && Mt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, no = (e) => e, ki = (e) => Math.pow(e, 3), zl = (e) => e < 0.5 ? ki(e * 2) / 2 : 1 - ki((1 - e) * 2) / 2, Et = (e, n) => e ?? n, Ll = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, ca = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function $i(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qd(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        $i(o, a, t, i, l, "next", s);
      }
      function l(s) {
        $i(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function _d(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function Ti(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function It(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Zo(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function xd(e) {
  return ro.apply(this, arguments);
}
function ro() {
  return ro = Qd(function* (e) {
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
  }), ro.apply(this, arguments);
}
function qt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ca(e) {
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
function ev(e) {
  for (var n = [], r = e; r !== window; )
    r = Ca(r), n.push(r);
  return n;
}
function Rl(e, n) {
  if (Xe(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (qd(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Ul = (e) => Xe(e) && e.endsWith("rem"), nv = (e) => Xe(e) && e.endsWith("px") || an(e), rv = (e) => Xe(e) && e.endsWith("%"), Yl = (e) => Xe(e) && e.endsWith("vw"), Fl = (e) => Xe(e) && e.endsWith("vh"), av = (e) => Xe(e) && e.startsWith("calc("), tv = (e) => Xe(e) && e.startsWith("var("), Ne = (e) => {
  if (an(e))
    return e;
  if (nv(e))
    return +e.replace("px", "");
  if (Yl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Fl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Ul(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Xe(e) ? z(e) : 0;
}, ye = (e) => {
  if (e != null)
    return rv(e) || Yl(e) || Fl(e) || Ul(e) || av(e) || tv(e) ? e : Ne(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ye(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Pn(e) {
  var n = Ll();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function ov(e) {
  var n = Ll();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Bt(e) {
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
function iv() {
  return new Promise((e) => {
    Pn(e);
  });
}
function Ka(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = It(e), s = Zo(e);
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
function Hl(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Xd(a);
    return n[o] = t, n;
  }, {});
}
function lv() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var sv = ["collect", "clear"];
function Pi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Oi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Pi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Pi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function uv(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
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
function Ke(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function dv(e) {
  var n = Ud(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Ya(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => Nl(e, pt({}, n, r));
    }
  }, {
    unmount: t
  } = dv(a);
  return {
    unmountInstance: t
  };
}
function vv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Vt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function gn(e) {
  var n = Me([]), r = za(), a = () => {
    var l = vv(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    Mt(n, l);
  };
  Il(e, {
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
  if (!Wl(e))
    return {
      index: null
    };
  var n = Bl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = za();
  Ye(() => {
    Ee().then(() => r(o));
  }), mr(() => {
    Ee().then(() => a(o));
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
    Mt(n, o);
  }, t = (o) => {
    Il(e, pt({
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
  if (!Wl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Bl(e), {
    collect: r,
    clear: a
  } = n, t = uv(n, sv), o = (i) => {
    Ye(() => r(i)), Ot(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function Wl(e) {
  var n = za();
  return e in n.provides;
}
function bn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = Oi(function* (o, i, l) {
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
    var t = Oi(function* (o, i, l, s, u) {
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
function fv(e) {
  Ye(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), mr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Jo() {
  var e = E(!1);
  return Wo(() => {
    e.value = !1;
  }), jo(() => {
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
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ht.apply(this, arguments);
}
var {
  n: jl
} = ee("ripple"), Vi = 250;
function cv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function mv(e, n) {
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
function Gl(e) {
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
      } = mv(this, e), s = document.createElement("div");
      s.classList.add(jl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), cv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function ao() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + jl());
    if (r.length) {
      var a = r[r.length - 1], t = Vi - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Vi);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function ql() {
  var e = this._ripple;
  lv() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function pv(e, n) {
  var r, a, t;
  e._ripple = ht({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: ao.bind(e)
  }), e.addEventListener("touchstart", Gl, {
    passive: !0
  }), e.addEventListener("touchmove", ql, {
    passive: !0
  }), e.addEventListener("dragstart", ao, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function hv(e) {
  e.removeEventListener("touchstart", Gl), e.removeEventListener("touchmove", ql), e.removeEventListener("dragstart", ao), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function gv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = ht({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Kl = {
  mounted: pv,
  unmounted: hv,
  updated: gv,
  install(e) {
    e.directive("ripple", this);
  }
}, Mw = Kl;
const Ae = Kl;
function yv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var xa = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: yv
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
function Xl() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function rt(e) {
  sn.locks[e] = 1, Xl();
}
function at(e) {
  delete sn.locks[e], Xl();
}
function Nt(e, n) {
  var {
    uid: r
  } = za();
  n && ie(n, (a) => {
    a === !1 ? at(r) : a === !0 && e() === !0 && rt(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? rt(r) : at(r));
  }), Yd(() => {
    n && n() === !1 || e() === !0 && rt(r);
  }), mr(() => {
    n && n() === !1 || e() === !0 && at(r);
  }), Wo(() => {
    n && n() === !1 || e() === !0 && rt(r);
  }), jo(() => {
    n && n() === !1 || e() === !0 && at(r);
  });
}
function et(e, n) {
  var r = E(sn.zIndex);
  return ie(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function bv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Vt(e);
}
var {
  n: Bn,
  classes: Kt
} = ee("popup");
const mn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: xa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = et(() => e.show, 3), {
      disabled: o
    } = Jo(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      $(v), d && $(e["onUpdate:show"], !1);
    };
    Nt(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      $(d ? e.onOpen : e.onClose);
    }), fv(() => $(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: Kt(Bn("overlay"), d),
        style: to({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => re("div", Ve({
      class: Kt(Bn("content"), Bn("--" + e.position), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")]),
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
          class: Kt(Bn("$--box"), Bn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(De, {
          name: g || Bn("$-pop-" + w)
        }, {
          default: () => [f && s()]
        })]), [[Ra, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(La, {
          to: d,
          disabled: o.value
        }, bv(v = u()) ? v : {
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
var Ew = mn, Zl = {
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
function Mi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function wv(e) {
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
  n: Cv,
  classes: Sv
} = ee("icon");
function kv(e, n) {
  return h(), me(
    Ua(e.isURL(e.name) ? "img" : "i"),
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
var Jl = x({
  name: "VarIcon",
  props: Zl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = wv(function* (o, i) {
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
      n: Cv,
      classes: Sv,
      nextName: n,
      shrinking: r,
      isURL: Kd,
      toNumber: z,
      toSizeUnit: ye
    };
  }
});
Jl.render = kv;
const $e = Jl;
$e.install = function(e) {
  e.component($e.name, $e);
};
var Iw = $e;
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
var $v = oo({
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
}, Ke(xa, [
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
const Qo = {
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
}, Ql = {
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
function io() {
  return io = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, io.apply(this, arguments);
}
function _o() {
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
    e[o] = io({}, e[o], i), a(o);
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
  packs: _l,
  pack: He,
  add: xo,
  use: ei,
  merge: xl
} = _o();
xo("zh-CN", Qo);
ei("zh-CN");
var Bw = {
  zhCN: Qo,
  enUS: Ql,
  packs: _l,
  pack: He,
  add: xo,
  use: ei,
  merge: xl,
  useLocale: _o
};
const lo = {
  zhCN: Qo,
  enUS: Ql,
  packs: _l,
  pack: He,
  add: xo,
  use: ei,
  merge: xl,
  useLocale: _o
};
var {
  n: Tv,
  classes: Pv
} = ee("action-sheet"), Ov = ["onClick"];
function Vv(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = je("ripple");
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
      default: ve(() => [A(
        "div",
        Ve({
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
        )]), W(e.$slots, "actions", {}, () => [(h(!0), V(
          Oe,
          null,
          Be(e.actions, (o) => Se((h(), V(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: q({
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
            Ov
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
var es = x({
  name: "VarActionSheet",
  directives: {
    Ripple: Ae
  },
  components: {
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: $v,
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
    return ie(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Tv,
      classes: Pv,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: He,
      dt: Et,
      handleSelect: r
    };
  }
});
es.render = Vv;
const rr = es;
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
var Jn, ni = {};
function Mv(e) {
  return e === void 0 && (e = {}), so({}, ni, e);
}
function ma(e) {
  return Xo() ? new Promise((n) => {
    ma.close();
    var r = Me(Mv(e));
    r.teleport = "body", Jn = r;
    var {
      unmountInstance: a
    } = Ya(rr, r, {
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
function Ev(e) {
  ni = e;
}
function Iv() {
  ni = {};
}
function Bv() {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Ee().then(() => {
      e.show = !1;
    });
  }
}
ma.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
ma.install = function(e) {
  e.component(rr.name, rr);
};
Object.assign(ma, {
  setDefaultOptions: Ev,
  resetDefaultOptions: Iv,
  close: Bv
});
var Nw = rr;
function Nv(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Dv = {
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
    validator: Nv
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
  n: Av,
  classes: zv
} = ee("app-bar");
function Lv(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: q({
        background: e.color,
        color: e.textColor
      })
    },
    [A(
      "div",
      {
        class: m(e.n("left"))
      },
      [W(e.$slots, "left"), e.titlePosition === "left" ? (h(), V(
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
    ), e.titlePosition === "center" ? (h(), V(
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
      [e.titlePosition === "right" ? (h(), V(
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
    6
    /* CLASS, STYLE */
  );
}
var ns = x({
  name: "VarAppBar",
  props: Dv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ye(o), Go(o), {
      n: Av,
      classes: zv,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
ns.render = Lv;
const yr = ns;
yr.install = function(e) {
  e.component(yr.name, yr);
};
var Dw = yr;
function Rv(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Uv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Rv
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: Uv
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
  n: Yv,
  classes: Fv
} = ee("loading"), Hv = (e) => (ba(""), e = e(), wa(), e), Wv = /* @__PURE__ */ Hv(() => /* @__PURE__ */ A(
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
)), jv = [Wv];
function Gv(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [W(e.$slots, "default"), e.loading ? (h(), V(
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
    )) : _("v-if", !0), e.isShow ? (h(), V(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), V(
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
          jv,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (h(!0), V(
        Oe,
        null,
        Be(e.loadingTypeDict, (r, a) => (h(), V(
          Oe,
          {
            key: a
          },
          [e.type === a ? (h(), V(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), V(
              Oe,
              null,
              Be(r, (t) => (h(), V(
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
      )), e.$slots.description || e.description ? (h(), V(
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
var rs = x({
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
      n: Yv,
      classes: Fv,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
rs.render = Gv;
const $n = rs;
$n.install = function(e) {
  e.component($n.name, $n);
};
var Aw = $n;
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
function qv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Kv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Xv(e) {
  return ["button", "reset", "submit"].includes(e);
}
var Zv = {
  type: {
    type: String,
    default: "default",
    validator: qv
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Xv
  },
  size: {
    type: String,
    default: "normal",
    validator: Kv
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
  loadingColor: uo({}, Ke(xn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: Jv,
  classes: Qv
} = ee("button"), _v = ["type", "disabled"];
function xv(e, n) {
  var r = le("var-loading"), a = je("ripple");
  return Se((h(), V(
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
    _v
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var as = x({
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: Ae
  },
  props: Zv,
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
      n: Jv,
      classes: Qv,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
as.render = xv;
const xe = as;
xe.install = function(e) {
  e.component(xe.name, xe);
};
var zw = xe, ef = {
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
  n: nf,
  classes: rf
} = ee("back-top");
function af(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), me(
    La,
    {
      to: "body",
      disabled: e.disabled
    },
    [A(
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
var ts = x({
  name: "VarBackTop",
  components: {
    VarButton: xe,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: ef,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, o = (s) => {
      $(e.onClick, s);
      var u = Zo(t);
      Ka(t, {
        left: u,
        duration: e.duration,
        animation: zl
      });
    }, i = () => {
      n.value = It(t) >= Ne(e.visibilityHeight);
    }, l = Ko(i, 200);
    return Ye(() => {
      t = e.target ? Rl(e.target, "BackTop") : Ca(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Ot(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ye,
      n: nf,
      classes: rf,
      click: o
    };
  }
});
ts.render = af;
const br = ts;
br.install = function(e) {
  e.component(br.name, br);
};
var Lw = br;
function tf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function of(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var lf = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: tf
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
    validator: of
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: jn,
  classes: sf
} = ee("badge"), uf = {
  key: 1
};
function df(e, n) {
  var r = le("var-icon");
  return h(), V(
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
          )) : (h(), V(
            "span",
            uf,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[Ra, !e.hidden]])]),
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
var os = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: lf,
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
      classes: sf,
      values: t,
      contentClass: a
    };
  }
});
os.render = df;
const ar = os;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var Rw = ar, vf = {
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
}, is = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), ls = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function ff() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(is), {
    length: r
  } = gn(ls);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: cf,
  classes: mf
} = ee("bottom-navigation"), {
  n: Dt
} = ee("bottom-navigation-item"), Ei = Dt("--right-half-space"), Ii = Dt("--left-half-space"), Bi = Dt("--right-space"), pf = {
  type: "primary"
};
function hf(e, n) {
  var r = le("var-button");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: q("z-index:" + e.zIndex)
    },
    [W(e.$slots, "default"), e.$slots.fab ? (h(), me(
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
var ss = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: xe
  },
  props: vf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = Y(() => e.active), o = Y(() => e.activeColor), i = Y(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = ff(), v = () => {
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
      an(t.value) && (t.value < 0 ? $(e["onUpdate:active"], 0) : t.value > s.value - 1 && $(e["onUpdate:active"], s.value - 1));
    }, w = (M) => {
      t.value !== M && (e.onBeforeChange ? y(M) : T(M));
    }, y = (M) => {
      var I = $(e.onBeforeChange, M);
      I = we(I) ? I : [I], Promise.all(I).then((B) => {
        B.some((p) => !p) || T(M);
      });
    }, T = (M) => {
      $(e["onUpdate:active"], M), $(e.onChange, M);
    }, P = () => {
      var M = O();
      M.forEach((I) => {
        I.classList.remove(Ei, Ii, Bi);
      });
    }, b = (M) => {
      var I = O(), B = I.length, p = M % 2 === 0;
      I.forEach((S, L) => {
        C(p, S, L, B);
      });
    }, C = (M, I, B, p) => {
      var S = B === p - 1;
      if (!M && S) {
        I.classList.add(Bi);
        return;
      }
      var L = B === p / 2 - 1, Q = B === p / 2;
      L ? I.classList.add(Ei) : Q && I.classList.add(Ii);
    }, O = () => Array.from(a.value.querySelectorAll("." + Dt())), k = () => {
      $(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: w
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (M) => {
      l.value = vo({}, pf, M);
    }, {
      immediate: !0,
      deep: !0
    }), Ye(() => {
      r.fab && b(s.value);
    }), Go(() => {
      P(), r.fab && b(s.value);
    }), {
      n: cf,
      classes: mf,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
ss.render = hf;
const wr = ss;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var Uw = wr, gf = {
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
function yf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(is), {
    index: r
  } = yn(ls);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: bf,
  classes: wf
} = ee("bottom-navigation-item"), Cf = {
  type: "danger",
  dot: !0
};
function Sf(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = je("ripple");
  return Se((h(), V(
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
    )) : _("v-if", !0), W(e.$slots, "icon", {
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
    )) : _("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (h(), V(
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
      )), W(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
var us = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: gf,
  setup(e) {
    var n = Y(() => e.name), r = Y(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = yf(), {
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
    return i(d), ie(() => r.value, (c) => {
      a.value = c === !0 ? Cf : r.value;
    }, {
      immediate: !0
    }), {
      n: bf,
      classes: wf,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
us.render = Sf;
const Cr = us;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var Yw = Cr, kf = {
  separator: {
    type: String
  },
  onClick: U()
}, ds = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), vs = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function $f() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(ds), {
    length: r
  } = gn(vs);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Tf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ds), {
    index: r
  } = yn(vs);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Pf,
  classes: Of
} = ee("breadcrumb");
function Vf(e, n) {
  return h(), V(
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
var fs = x({
  name: "VarBreadcrumb",
  props: kf,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Tf(), t = Y(() => n.value === r.length.value - 1), o = Y(() => r.separator.value), i = (l) => {
      t.value || $(e.onClick, l);
    };
    return a(null), {
      n: Pf,
      classes: Of,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
fs.render = Vf;
const Sr = fs;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var Fw = Sr, Mf = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Ef
} = ee("breadcrumbs");
function If(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var cs = x({
  name: "VarBreadcrumbs",
  props: Mf,
  setup(e) {
    var n = Y(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = $f(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Ef
    };
  }
});
cs.render = If;
const kr = cs;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var Hw = kr;
function Bf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Nf = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Bf,
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
function Ni(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Di(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ni(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ni(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Df,
  classes: Af
} = ee("card"), zf = 500, Lf = ["src", "alt"];
function Rf(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = je("ripple");
  return Se((h(), V(
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
      [W(e.$slots, "image", {}, () => [e.src ? (h(), V(
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
        Lf
      )) : _("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("container"))
        },
        [W(e.$slots, "title", {}, () => [e.title ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), e.$slots.extra ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [W(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), V(
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
      ), e.showFloatingButtons ? (h(), V(
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
var ms = x({
  name: "VarCard",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarButton: xe
  },
  props: Nf,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), o = E("100%"), i = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = Y(() => e.layout === "row"), g = E(!1), w = E(!1), {
      zIndex: y
    } = et(() => e.floating, 1);
    Nt(() => e.floating, () => !c.value);
    var T = "auto", P = "auto", b = null, C = E(null), O = /* @__PURE__ */ function() {
      var I = Di(function* () {
        clearTimeout(C.value), clearTimeout(b), C.value = null, C.value = setTimeout(/* @__PURE__ */ Di(function* () {
          var {
            width: B,
            height: p,
            left: S,
            top: L
          } = n.value.getBoundingClientRect();
          a.value = ye(B), t.value = ye(p), o.value = a.value, i.value = t.value, l.value = ye(L), s.value = ye(S), u.value = "fixed", T = l.value, P = s.value, g.value = !0, yield Mn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", w.value = !0;
        }), e.ripple ? zf : 0);
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(b), clearTimeout(C.value), C.value = null, o.value = a.value, i.value = t.value, l.value = T, s.value = P, v.value = "0px", f.value = "0", g.value = !1, b = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", T = "auto", P = "auto", d.value = "hidden", u.value = void 0, w.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      $(e["onUpdate:floating"], !1);
    }, M = (I) => {
      $(e.onClick, I);
    };
    return ie(() => e.floating, (I) => {
      c.value || Ee(() => {
        I ? O() : k();
      });
    }, {
      immediate: !0
    }), {
      n: Df,
      classes: Af,
      toSizeUnit: ye,
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
      close: D,
      showFloatingButtons: g,
      floated: w,
      handleClick: M
    };
  }
});
ms.render = Rf;
const $r = ms;
$r.install = function(e) {
  e.component($r.name, $r);
};
var Ww = $r, Uf = {
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
  onClick: {
    type: U
  }
}, {
  n: Yf,
  classes: Ff
} = ee("cell");
function Hf(e, n) {
  var r = le("var-icon"), a = je("ripple");
  return Se((h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")], [e.onClick, e.n("--cursor")])),
      style: q(e.borderOffsetStyles),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [W(e.$slots, "icon", {}, () => [e.icon ? (h(), V(
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
      [W(e.$slots, "default", {}, () => [e.title ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("title"), e.titleClass))
        },
        ne(e.title),
        3
        /* TEXT, CLASS */
      )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), V(
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
    ), e.$slots.extra ? (h(), V(
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
var ps = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  directives: {
    Ripple: Ae
  },
  props: Uf,
  setup(e) {
    var n = Y(() => e.borderOffset == null ? {} : {
      "--cell-border-left": ye(e.borderOffset),
      "--cell-border-right": ye(e.borderOffset)
    }), r = (a) => {
      $(e.onClick, a);
    };
    return {
      n: Yf,
      classes: Ff,
      toSizeUnit: ye,
      borderOffsetStyles: n,
      handleClick: r
    };
  }
});
ps.render = Hf;
const tr = ps;
tr.install = function(e) {
  e.component(tr.name, tr);
};
var jw = tr, Wf = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: jf
} = ee("form-details"), Gf = {
  key: 0
}, qf = {
  key: 0
};
function Kf(e, n) {
  return h(), me(
    De,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (h(), V(
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
              default: ve(() => [e.errorMessage ? (h(), V(
                "div",
                Gf,
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
              default: ve(() => [e.extraMessage ? (h(), V(
                "div",
                qf,
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
var hs = x({
  name: "VarFormDetails",
  props: Wf,
  setup: () => ({
    n: jf
  })
});
hs.render = Kf;
const We = hs;
We.install = function(e) {
  e.component(We.name, We);
};
var Gw = We, Xf = {
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
}, gs = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), ys = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Zf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(gs), {
    length: r
  } = gn(ys);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Jf() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(gs), {
    index: r
  } = yn(ys);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function fo() {
  return fo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fo.apply(this, arguments);
}
var bs = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(bs), r = za(), a = e ? (t) => {
    e(fo({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function Qf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(bs);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: _f,
  classes: xf
} = ee("checkbox");
function ec(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = je("ripple");
  return h(), V(
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
      [Se((h(), V(
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
var ws = x({
  name: "VarCheckbox",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Xf,
  setup(e) {
    var n = E(!1), r = Y(() => n.value === e.checkedValue), a = Y(() => e.checkedValue), t = E(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = Jf(), {
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
          validateTrigger: D,
          rules: M,
          modelValue: I
        } = e;
        d(D, k, M, I);
      });
    }, g = (k) => {
      n.value = k;
      var {
        checkedValue: D,
        onChange: M
      } = e;
      $(e["onUpdate:modelValue"], n.value), $(M, n.value), c("onChange"), k === D ? o == null || o.onChecked(D) : o == null || o.onUnchecked(D);
    }, w = (k) => {
      var {
        disabled: D,
        readonly: M,
        checkedValue: I,
        uncheckedValue: B,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || D) && ($(p, k), !(l != null && l.readonly.value || M))) {
        t.value = !0;
        var S = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && S || g(r.value ? B : I);
      }
    }, y = (k) => {
      var {
        checkedValue: D,
        uncheckedValue: M
      } = e;
      n.value = k.includes(D) ? D : M;
    }, T = () => {
      t.value = !1;
    }, P = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, b = (k) => {
      var {
        checkedValue: D,
        uncheckedValue: M
      } = e, I = ![D, M].includes(k);
      I && (k = r.value ? M : D), g(k);
    }, C = () => v(e.rules, e.modelValue);
    ie(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var O = {
      checkedValue: a,
      checked: r,
      sync: y,
      validate: C,
      resetValidation: f,
      reset: P,
      resetWithAnimation: T
    };
    return $(i, O), $(s, O), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: o == null ? void 0 : o.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: _f,
      classes: xf,
      handleClick: w,
      toggle: b,
      reset: P,
      validate: C,
      resetValidation: f
    };
  }
});
ws.render = ec;
const or = ws;
or.install = function(e) {
  e.component(or.name, or);
};
var qw = or;
function nc(e) {
  return ["horizontal", "vertical"].includes(e);
}
var rc = {
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
    validator: nc
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
  n: ac,
  classes: tc
} = ee("checkbox-group");
function oc(e, n) {
  var r = le("var-form-details");
  return h(), V(
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
var Cs = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: rc,
  setup(e) {
    var n = Y(() => e.max), r = Y(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = Zf(), {
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = Y(() => l.value), f = (D) => {
      Ee(() => {
        var {
          validateTrigger: M,
          rules: I,
          modelValue: B
        } = e;
        s(M, D, I, B);
      });
    }, c = (D) => {
      $(e["onUpdate:modelValue"], D), $(e.onChange, D), f("onChange");
    }, g = (D) => {
      var {
        modelValue: M
      } = e;
      M.includes(D) || c([...M, D]);
    }, w = (D) => {
      var {
        modelValue: M
      } = e;
      M.includes(D) && c(M.filter((I) => I !== D));
    }, y = () => t.forEach((D) => {
      var {
        sync: M
      } = D;
      return M(e.modelValue);
    }), T = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, P = () => {
      var D = t.map((I) => {
        var {
          checkedValue: B
        } = I;
        return B.value;
      }), M = wi(D);
      return T(), $(e["onUpdate:modelValue"], M), M;
    }, b = () => {
      var D = t.filter((I) => {
        var {
          checked: B
        } = I;
        return !B.value;
      }).map((I) => {
        var {
          checkedValue: B
        } = I;
        return B.value;
      }), M = wi(D);
      return T(), $(e["onUpdate:modelValue"], M), M;
    }, C = () => {
      $(e["onUpdate:modelValue"], []), d();
    }, O = () => u(e.rules, e.modelValue);
    ie(() => e.modelValue, y, {
      deep: !0
    }), ie(() => a.value, y);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: g,
      onUnchecked: w,
      validate: O,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return o(k), $(i, k), {
      errorMessage: l,
      n: ac,
      classes: tc,
      checkAll: P,
      inverseAll: b,
      reset: C,
      validate: O,
      resetValidation: d
    };
  }
});
Cs.render = oc;
const Tr = Cs;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var Kw = Tr;
function ic(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function lc(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var sc = {
  type: {
    type: String,
    default: "default",
    validator: ic
  },
  size: {
    type: String,
    default: "normal",
    validator: lc
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ke(Zl, "name"),
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
  classes: uc
} = ee("chip");
function dc(e, n) {
  var r = le("var-icon");
  return h(), me(
    De,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [A(
        "span",
        Ve({
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
        ), W(e.$slots, "right"), e.closable ? (h(), V(
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
var Ss = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: sc,
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
      classes: uc,
      chipStyles: n,
      contentClass: r,
      handleClose: a
    };
  }
});
Ss.render = dc;
const ir = Ss;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var Xw = ir;
function vc(e) {
  return ["row", "column"].includes(e);
}
var fc = {
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
    validator: vc
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
}, ks = Symbol("ROW_BIND_COL_KEY"), $s = Symbol("ROW_COUNT_COL_KEY");
function cc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ks), {
    length: r
  } = gn($s);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function mc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ks), {
    index: r
  } = yn($s);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: tt,
  classes: pc
} = ee("col");
function hc(e, n) {
  return h(), V(
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
var Ts = x({
  name: "VarCol",
  props: fc,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = Y(() => z(e.span)), a = Y(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = mc(), i = {
      setPadding(u) {
        n.value = u;
      }
    }, l = (u, d) => {
      var v = [];
      if (d == null)
        return v;
      if (qo(d)) {
        var {
          offset: f,
          span: c
        } = d;
        Number(c) >= 0 && v.push(tt("--span-" + u + "-" + c)), f && v.push(tt("--offset-" + u + "-" + f));
      } else
        Number(d) >= 0 && v.push(tt("--span-" + u + "-" + d));
      return v;
    }, s = (u) => {
      $(e.onClick, u);
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), $(o, i), {
      n: tt,
      classes: pc,
      padding: n,
      toNumber: z,
      toSizeUnit: ye,
      getSize: l,
      span: r,
      offset: a,
      handleClick: s
    };
  }
});
Ts.render = hc;
const Pr = Ts;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var Zw = Pr, Ps = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Os = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function gc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ps), {
    length: r
  } = gn(Os);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var yc = {
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
  n: bc
} = ee("collapse");
function wc(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var Vs = x({
  name: "VarCollapse",
  props: yc,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = gc(), t = Y(() => e.modelValue), o = Y(() => e.offset), i = () => !e.accordion && !we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && we(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, g) => i() ? g ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((w) => w !== c) : null, s = (c, g) => {
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
    return a(f), ie(() => n.value, () => Ee().then(v)), ie(() => e.modelValue, () => Ee().then(v)), {
      n: bc
    };
  }
});
Vs.render = wc;
const Or = Vs;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var Jw = Or;
function Cc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ps), {
    index: r
  } = yn(Os);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Sc = {
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
  n: kc,
  classes: $c
} = ee("collapse-item");
function Tc(e, n) {
  var r = le("var-icon");
  return h(), V(
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
    ), [[Ra, e.show]])],
    2
    /* CLASS */
  );
}
var Ms = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Sc,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Cc(), t = !0, o = E(null), i = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = Y(() => e.name), f = (b, C) => {
      s.value === void 0 || b && we(s.value) || C === l.value || (l.value = C, c(!0));
    }, c = (b) => {
      e.disabled || b || d(e.name || n.value, !l.value);
    }, g = () => {
      o.value && (o.value.style.height = "", i.value = !0, Ee(() => {
        var {
          offsetHeight: b
        } = o.value;
        o.value.style.height = 0 + "px", Pn(() => {
          o.value.style.height = b + "px", t && Bt(() => {
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
    }, P = {
      index: n,
      name: v,
      init: f
    };
    return a(P), ie(l, (b) => {
      b ? g() : y();
    }), {
      n: kc,
      start: w,
      classes: $c,
      show: i,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: T
    };
  }
});
Ms.render = Tc;
const Vr = Ms;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var Qw = Vr, Pc = {
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
  n: Oc
} = ee("countdown"), co = 1e3, mo = 60 * co, po = 60 * mo, Ai = 24 * po;
function Vc(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default", Dl(Fd(e.timeData)), () => [be(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var Es = x({
  name: "VarCountdown",
  props: Pc,
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
        c.includes(b) ? c = c.replace(b, ca("" + w[C], 2, "0")) : w[C + 1] += w[C] * T[C];
      }), c.includes("S")) {
        var P = ca("" + w[w.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", P) : c.includes("SS") ? c = c.replace("SS", P.slice(0, 2)) : c = c.replace("S", P.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var g = Math.floor(c / Ai), w = Math.floor(c % Ai / po), y = Math.floor(c % po / mo), T = Math.floor(c % mo / co), P = Math.floor(c % co), b = {
        days: g,
        hours: w,
        minutes: y,
        seconds: T,
        milliseconds: P
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
      n.value = 0, r.value = !1, ov(t.value), u();
    };
    return ie(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: i,
      n: Oc,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Es.render = Vc;
const Mr = Es;
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var _w = Mr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var $a = 9e15, pr = 1e9, ho = "0123456789abcdef", gt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", yt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", go = {
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
  minE: -$a,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: $a,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Is, Dn, fe = !0, At = "[DecimalError] ", fr = At + "Invalid argument: ", Bs = At + "Precision limit exceeded", Ns = At + "crypto unavailable", Ds = "[object Decimal]", Ze = Math.floor, Ue = Math.pow, Mc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Ec = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Ic = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, As = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, Bc = 9007199254740991, Nc = gt.length - 1, yo = yt.length - 1, G = { toStringTag: Ds };
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Dc(a, Ys(a, r)), a.precision = e, a.rounding = n, ue(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
G.cubeRoot = G.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Ue(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ge(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Ue(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
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
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Lt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ea(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
G.hyperbolicSine = G.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ea(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Lt(5, e)), t = Ea(o, 2, t, t, !0);
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
    if (u.abs().eq(1) && v + 4 <= yo)
      return i = kn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= yo)
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
  if (fe = !1, l = v + c, i = er(u, l), a = n ? bt(d, l + 10) : er(e, l), s = Pe(i, a, l, 1), Xa(s.d, t = v, f))
    do
      if (l += 10, i = er(u, l), a = n ? bt(d, l + 10) : er(e, l), s = Pe(i, a, l, 1), !o) {
        +Ge(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (Xa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
G.minus = G.sub = function(e) {
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
  return u[0] ? (e.d = u, e.e = zt(u, r), fe ? ue(e, l, s) : e) : new g(s === 3 ? -0 : 0);
};
G.modulo = G.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
G.naturalExponential = G.exp = function() {
  return bo(this);
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
  return e.d = u, e.e = zt(u, a), fe ? ue(e, l, s) : e;
};
G.precision = G.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(fr + e);
  return r.d ? (n = zs(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
G.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
G.sine = G.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = zc(a, Ys(a, r)), a.precision = e, a.rounding = n, ue(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
G.squareRoot = G.sqrt = function() {
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
  return n ? ++r : o.shift(), e.d = o, e.e = zt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
G.toBinary = function(e, n) {
  return ri(this, 2, e, n);
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
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, g = c.d, w = c.constructor;
  if (!g)
    return new w(c);
  if (u = r = new w(1), a = s = new w(0), n = new w(a), o = n.e = zs(g) - c.e - 1, i = o % de, n.d[0] = Ue(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new w(e), !l.isInt() || l.lt(u))
      throw Error(fr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new w(Ge(g)), d = w.precision, w.precision = o = g.length * de * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Pe(u, a, o, 1).minus(c).abs().cmp(Pe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], w.precision = d, fe = !0, f;
};
G.toHexadecimal = G.toHex = function(e, n) {
  return ri(this, 16, e, n);
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
  return ri(this, 8, e, n);
};
G.toPower = G.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Ue(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Bc)
    return t = Ls(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Ue(+l, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + Ge(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = bo(e.times(er(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), Xa(t.d, a, o) && (n = a + 10, t = ue(bo(e.times(er(l, n + r)), n), n + 5, 1), +Ge(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, ue(t, a, o));
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
    throw Error(fr + e);
}
function Xa(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Ue(10, de - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Ue(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Ue(10, n - 3) - 1, i;
}
function dt(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += ho.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Dc(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Lt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ea(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, g, w, y, T, P, b, C, O, k, D, M, I, B, p, S, L = a.constructor, Q = a.s == t.s ? 1 : -1, F = a.d, R = t.d;
    if (!F || !F[0] || !R || !R[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (F ? R && F[0] == R[0] : !R) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          F && F[0] == 0 || !R ? Q * 0 : Q / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), p = R.length, I = F.length, T = new L(Q), P = T.d = [], v = 0; R[v] == (F[v] || 0); v++)
      ;
    if (R[v] > (F[v] || 0) && d--, o == null ? (k = o = L.precision, i = L.rounding) : l ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      P.push(1), g = !0;
    else {
      if (k = k / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], k++; (v < I || f) && k--; v++)
          D = f * s + (F[v] || 0), P[v] = D / R | 0, f = D % R | 0;
        g = f || v < I;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), F = e(F, f, s), p = R.length, I = F.length), M = p, b = F.slice(0, p), C = b.length; C < p; )
          b[C++] = 0;
        S = R.slice(), S.unshift(0), B = R[0], R[1] >= s / 2 && ++B;
        do
          f = 0, u = n(R, b, p, C), u < 0 ? (O = b[0], p != C && (O = O * s + (b[1] || 0)), f = O / B | 0, f > 1 ? (f >= s && (f = s - 1), w = e(R, f, s), y = w.length, C = b.length, u = n(w, b, y, C), u == 1 && (f--, r(w, p < y ? S : R, y, s))) : (f == 0 && (u = f = 1), w = R.slice()), y = w.length, y < C && w.unshift(0), r(b, w, C, s), u == -1 && (C = b.length, u = n(R, b, p, C), u < 1 && (f++, r(b, p < C ? S : R, C, s))), C = b.length) : u === 0 && (f++, b = [0]), P[v++] = f, u && b[0] ? b[C++] = F[M] || 0 : (b = [F[M]], C = 1);
        while ((M++ < I || b[0] !== void 0) && k--);
        g = b[0] !== void 0;
      }
      P[0] || P.shift();
    }
    if (c == 1)
      T.e = d, Is = g;
    else {
      for (v = 1, f = P[0]; f >= 10; f /= 10)
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
        o += de, i = n, d = v[f = 0], s = d / Ue(10, t - i - 1) % 10 | 0;
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
        o %= de, i = o - de + t, s = i < 0 ? 0 : d / Ue(10, t - i - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (i < 0 ? d : d % Ue(10, t - i - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (o > 0 ? i > 0 ? d / Ue(10, t - i) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ue(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (o == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Ue(10, de - o), v[f] = i > 0 ? (d / Ue(10, t - i) % Ue(10, i) | 0) * l : 0), u)
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
    return Us(e);
  var a, t = e.e, o = Ge(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Kn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Kn(-t - 1) + o, r && (a = r - i) > 0 && (o += Kn(a))) : t >= i ? (o += Kn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Kn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Kn(a))), o;
}
function zt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function bt(e, n, r) {
  if (n > Nc)
    throw fe = !0, r && (e.precision = r), Error(Bs);
  return ue(new e(gt), n, 1, !0);
}
function kn(e, n, r) {
  if (n > yo)
    throw Error(Bs);
  return ue(new e(yt), n, r, !0);
}
function zs(e) {
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
function Ls(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Li(o.d, i) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Li(n.d, i);
  }
  return fe = !0, o;
}
function zi(e) {
  return e.d[e.d.length - 1] & 1;
}
function Rs(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function bo(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, g = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = g) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Ue(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), Ge(l.d).slice(0, s) === Ge(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Xa(i.d, s - a, c, u))
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
  var r, a, t, o, i, l, s, u, d, v, f, c = 1, g = 10, w = e, y = w.d, T = w.constructor, P = T.rounding, b = T.precision;
  if (w.s < 0 || !y || !y[0] || !w.e && y[0] == 1 && y.length == 1)
    return new T(y && !y[0] ? -1 / 0 : w.s != 1 ? NaN : y ? 0 : w);
  if (n == null ? (fe = !1, d = b) : d = n, T.precision = d += g, r = Ge(y), a = r.charAt(0), Math.abs(o = w.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      w = w.times(e), r = Ge(w.d), a = r.charAt(0), c++;
    o = w.e, a > 1 ? (w = new T("0." + r), o++) : w = new T(a + "." + r.slice(1));
  } else
    return u = bt(T, d + 2, b).times(o + ""), w = er(new T(a + "." + r.slice(1)), d - g).plus(u), T.precision = b, n == null ? ue(w, b, P, fe = !0) : w;
  for (v = w, s = i = w = Pe(w.minus(1), w.plus(1), d, 1), f = ue(w.times(w), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new T(t), d, 1)), Ge(u.d).slice(0, d) === Ge(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(bt(T, d + 2, b).times(o + ""))), s = Pe(s, new T(c), d, 1), n == null)
        if (Xa(s.d, d - g, P, l))
          T.precision = d += g, u = i = w = Pe(v.minus(1), v.plus(1), d, 1), f = ue(w.times(w), d, 1), t = l = 1;
        else
          return ue(s, T.precision = b, P, fe = !0);
      else
        return T.precision = b, s;
    s = u, t += 2;
  }
}
function Us(e) {
  return String(e.s * e.s / 0);
}
function wo(e, n) {
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
function Ac(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), As.test(n))
      return wo(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Ec.test(n))
    r = 16, n = n.toLowerCase();
  else if (Mc.test(n))
    r = 2;
  else if (Ic.test(n))
    r = 8;
  else
    throw Error(fr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = Ls(a, new a(r), o, o * 2)), u = dt(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = zt(u, d), e.d = u, fe = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ue(2, s) : nr.pow(2, s))), fe = !0, e);
}
function zc(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ea(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Lt(5, r)), n = Ea(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Ea(e, n, r, a, t) {
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
function Lt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Ys(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = zi(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = zi(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function ri(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor, g = r !== void 0;
  if (g ? (tn(r, 1, pr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Us(e);
  else {
    for (d = En(e), i = d.indexOf("."), g ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - i, f.d = dt(En(f), 10, t), f.e = f.d.length), v = dt(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = g ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Is), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += ho.charAt(v[i]);
      if (g) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = dt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += ho.charAt(v[i]);
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
function Li(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Lc(e) {
  return new this(e).abs();
}
function Rc(e) {
  return new this(e).acos();
}
function Uc(e) {
  return new this(e).acosh();
}
function Yc(e, n) {
  return new this(e).plus(n);
}
function Fc(e) {
  return new this(e).asin();
}
function Hc(e) {
  return new this(e).asinh();
}
function Wc(e) {
  return new this(e).atan();
}
function jc(e) {
  return new this(e).atanh();
}
function Gc(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function qc(e) {
  return new this(e).cbrt();
}
function Kc(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function Xc(e, n, r) {
  return new this(e).clamp(n, r);
}
function Zc(e) {
  if (!e || typeof e != "object")
    throw Error(At + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    pr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -$a,
    0,
    "toExpPos",
    0,
    $a,
    "maxE",
    0,
    $a,
    "minE",
    -$a,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = go[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(fr + r + ": " + a);
  if (r = "crypto", t && (this[r] = go[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Ns);
      else
        this[r] = !1;
    else
      throw Error(fr + r + ": " + a);
  return this;
}
function Jc(e) {
  return new this(e).cos();
}
function Qc(e) {
  return new this(e).cosh();
}
function Fs(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Ri(o)) {
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
      return wo(u, o.toString());
    } else if (s !== "string")
      throw Error(fr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), As.test(o) ? wo(u, o) : Ac(u, o);
  }
  if (t.prototype = G, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Zc, t.clone = Fs, t.isDecimal = Ri, t.abs = Lc, t.acos = Rc, t.acosh = Uc, t.add = Yc, t.asin = Fc, t.asinh = Hc, t.atan = Wc, t.atanh = jc, t.atan2 = Gc, t.cbrt = qc, t.ceil = Kc, t.clamp = Xc, t.cos = Jc, t.cosh = Qc, t.div = _c, t.exp = xc, t.floor = em, t.hypot = nm, t.ln = rm, t.log = am, t.log10 = om, t.log2 = tm, t.max = im, t.min = lm, t.mod = sm, t.mul = um, t.pow = dm, t.random = vm, t.round = fm, t.sign = cm, t.sin = mm, t.sinh = pm, t.sqrt = hm, t.sub = gm, t.sum = ym, t.tan = bm, t.tanh = wm, t.trunc = Cm, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function _c(e, n) {
  return new this(e).div(n);
}
function xc(e) {
  return new this(e).exp();
}
function em(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function nm() {
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
function Ri(e) {
  return e instanceof nr || e && e.toStringTag === Ds || !1;
}
function rm(e) {
  return new this(e).ln();
}
function am(e, n) {
  return new this(e).log(n);
}
function tm(e) {
  return new this(e).log(2);
}
function om(e) {
  return new this(e).log(10);
}
function im() {
  return Rs(this, arguments, "lt");
}
function lm() {
  return Rs(this, arguments, "gt");
}
function sm(e, n) {
  return new this(e).mod(n);
}
function um(e, n) {
  return new this(e).mul(n);
}
function dm(e, n) {
  return new this(e).pow(n);
}
function vm(e) {
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
      throw Error(Ns);
  else
    for (; o < a; )
      l[o++] = Math.random() * 1e7 | 0;
  for (a = l[--o], e %= de, a && e && (t = Ue(10, de - e), l[o] = (a / t | 0) * t); l[o] === 0; o--)
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
function fm(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function cm(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function mm(e) {
  return new this(e).sin();
}
function pm(e) {
  return new this(e).sinh();
}
function hm(e) {
  return new this(e).sqrt();
}
function gm(e, n) {
  return new this(e).sub(n);
}
function ym() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function bm(e) {
  return new this(e).tan();
}
function wm(e) {
  return new this(e).tanh();
}
function Cm(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
G[Symbol.for("nodejs.util.inspect.custom")] = G.toString;
G[Symbol.toStringTag] = "Decimal";
var nr = G.constructor = Fs(go);
gt = new nr(gt);
yt = new nr(yt);
var Sm = {
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
  n: km,
  classes: $m
} = ee("counter"), Ui = 100, Yi = 600, Tm = ["inputmode", "readonly", "disabled"];
function Pm(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = je("ripple");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
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
        Tm
      ), [[Hd, e.inputValue]]), Se(re(
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
var Hs = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Ae
  },
  inheritAttrs: !1,
  props: Sm,
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
      Ee(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: K
        } = e;
        u(J, R, j, K);
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
    }, P = Y(() => {
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
      } = R.target, N = C(K);
      J ? $(j, z(N), F) : Q(N), w("onInputChange");
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
      if (!(c != null && c.value || f != null && f.value || R || J || j || !K) && !b.value) {
        var oe = new nr(z(H)).minus(new nr(z(X))).toString(), he = C(oe), pe = z(he);
        $(Z, pe), N ? $(ae, pe, F) : (Q(he), w("onDecrement"));
      }
    }, D = () => {
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
        var oe = new nr(z(H)).plus(new nr(z(X))).toString(), he = C(oe), pe = z(he);
        $(Z, pe), N ? $(ae, pe, F) : (Q(he), w("onIncrement"));
      }
    }, M = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (o = window.setTimeout(() => {
        L();
      }, Yi));
    }, I = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (t = window.setTimeout(() => {
        S();
      }, Yi));
    }, B = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, S = () => {
      r = window.setTimeout(() => {
        D(), S();
      }, Ui);
    }, L = () => {
      a = window.setTimeout(() => {
        k(), L();
      }, Ui);
    }, Q = (R) => {
      n.value = R;
      var J = z(R);
      $(e["onUpdate:modelValue"], J);
    }, F = (R) => {
      Q(C(String(R))), w("onLazyChange");
    };
    return $(i, T), ie(() => e.modelValue, (R) => {
      Q(C(String(R))), $(e.onChange, z(R));
    }), Q(C(String(e.modelValue))), {
      n: km,
      classes: $m,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: P,
      isMin: b,
      validate: g,
      reset: y,
      resetValidation: v,
      handleChange: O,
      decrement: k,
      increment: D,
      pressDecrement: M,
      pressIncrement: I,
      releaseDecrement: B,
      releaseIncrement: p,
      toSizeUnit: ye,
      toNumber: z
    };
  }
});
Hs.render = Pm;
const Er = Hs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var xw = Er, Ws = 60, js = Ws * 60, Gs = js * 24, Om = Gs * 7, Ia = 1e3, Xt = Ws * Ia, Fi = js * Ia, Vm = Gs * Ia, Mm = Om * Ia, ai = "millisecond", Ta = "second", Pa = "minute", Oa = "hour", Xn = "day", vt = "week", Sn = "month", qs = "quarter", Zn = "year", Va = "date", Em = "YYYY-MM-DDTHH:mm:ssZ", Hi = "Invalid Date", Im = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Bm = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Nm = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var Co = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Dm = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + Co(t, 2, "0") + ":" + Co(o, 2, "0");
}, Am = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, zm = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Lm = function(n) {
  var r = {
    M: Sn,
    y: Zn,
    w: vt,
    d: Xn,
    D: Va,
    h: Oa,
    m: Pa,
    s: Ta,
    ms: ai,
    Q: qs
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Rm = function(n) {
  return n === void 0;
};
const Um = {
  s: Co,
  z: Dm,
  m: Am,
  a: zm,
  p: Lm,
  u: Rm
};
var ja = "en", Ir = {};
Ir[ja] = Nm;
var ti = function(n) {
  return n instanceof Rt;
}, wt = function e(n, r, a) {
  var t;
  if (!n)
    return ja;
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
  return !a && t && (ja = t), t || !a && ja;
}, te = function(n, r) {
  if (ti(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Rt(a);
}, Ym = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = Um;
Te.l = wt;
Te.i = ti;
Te.w = Ym;
var Fm = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Im);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, Rt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = wt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Fm(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== Hi;
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
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function(T, P) {
      var b = Te.w(o.$u ? Date.UTC(o.$y, P, T) : new Date(o.$y, P, T), o);
      return i ? b : b.endOf(Xn);
    }, u = function(T, P) {
      var b = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return Te.w(o.toDate()[T].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? b : C).slice(P)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Zn:
        return i ? s(1, 0) : s(31, 11);
      case Sn:
        return i ? s(1, v) : s(0, v + 1);
      case vt: {
        var g = this.$locale().weekStart || 0, w = (d < g ? d + 7 : d) - g;
        return s(i ? f - w : f + (6 - w), v);
      }
      case Xn:
      case Va:
        return u(c + "Hours", 0);
      case Oa:
        return u(c + "Minutes", 1);
      case Pa:
        return u(c + "Seconds", 2);
      case Ta:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Xn] = l + "Date", o[Va] = l + "Date", o[Sn] = l + "Month", o[Zn] = l + "FullYear", o[Oa] = l + "Hours", o[Pa] = l + "Minutes", o[Ta] = l + "Seconds", o[ai] = l + "Milliseconds", o)[i], u = i === Xn ? this.$D + (t - this.$W) : t;
    if (i === Sn || i === Zn) {
      var d = this.clone().set(Va, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Va, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === vt)
      return s(7);
    var u = (i = {}, i[Pa] = Xt, i[Oa] = Fi, i[Ta] = Ia, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Hi;
    var i = a || Em, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, g = function(b, C, O, k) {
      return b && (b[C] || b(t, i)) || O[C].slice(0, k);
    }, w = function(b) {
      return Te.s(s % 12 || 12, b, "0");
    }, y = c || function(P, b, C) {
      var O = P < 12 ? "AM" : "PM";
      return C ? O.toLowerCase() : O;
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
    return i.replace(Bm, function(P, b) {
      return b || T[P] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * Xt, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Zn] = v / 12, i[Sn] = v, i[qs] = v / 3, i[vt] = (d - u) / Mm, i[Xn] = (d - u) / Vm, i[Oa] = d / Fi, i[Pa] = d / Xt, i[Ta] = d / Ia, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Sn).$D;
  }, n.$locale = function() {
    return Ir[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = wt(a, t, !0);
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
}(), Ks = Rt.prototype;
te.prototype = Ks;
[["$ms", ai], ["$s", Ta], ["$m", Pa], ["$H", Oa], ["$W", Xn], ["$M", Sn], ["$y", Zn], ["$D", Va]].forEach(function(e) {
  Ks[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, Rt, te), e.$i = !0), te;
};
te.locale = wt;
te.isDayjs = ti;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Ir[ja];
te.Ls = Ir;
te.p = {};
const Xs = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Zs = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Hm(e) {
  return ["date", "month"].includes(e);
}
var ft = [{
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
}], Wa = [{
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
}], Wm = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Hm
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
  n: jm
} = ee("picker-header");
function Gm(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return h(), V(
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
          default: ve(() => [(h(), V(
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
var Js = x({
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
      var f = (l = He.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return He.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), i = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return ie(() => e.date, () => {
      t.value = 0;
    }), {
      n: jm,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
Js.render = Gm;
const Qs = Js;
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
te.extend(Xs);
te.extend(Zs);
var {
  n: ot,
  classes: qm
} = ee("month-picker"), {
  n: it
} = ee("date-picker");
function Km(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return h(), V(
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
          default: ve(() => [(h(), V("ul", {
            key: e.panelKey
          }, [(h(!0), V(
            Oe,
            null,
            Be(e.MONTH_LIST, (t) => (h(), V("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, So({}, e.buttonProps(t.index)), {
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
var _s = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Qs
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
    }), u = Y(() => e.choose.chooseYear === e.preview.previewYear), d = Y(() => e.preview.previewYear === a), v = (P) => {
      var b, C;
      return (b = (C = He.value.datePickerMonthDict) == null ? void 0 : C[P].abbr) != null ? b : "";
    }, f = (P) => {
      var {
        preview: {
          previewYear: b
        },
        componentProps: {
          min: C,
          max: O
        }
      } = e, k = !0, D = !0, M = b + "-" + P;
      return O && (k = te(M).isSameOrBefore(te(O), "month")), C && (D = te(M).isSameOrAfter(te(C), "month")), k && D;
    }, c = (P) => {
      var {
        choose: {
          chooseMonths: b,
          chooseDays: C,
          chooseRangeMonth: O
        },
        componentProps: {
          type: k,
          range: D
        }
      } = e;
      if (D) {
        if (!O.length)
          return !1;
        var M = te(P).isSameOrBefore(te(O[1]), "month"), I = te(P).isSameOrAfter(te(O[0]), "month");
        return M && I;
      }
      return k === "month" ? b.includes(P) : C.some((B) => B.includes(P));
    }, g = (P) => {
      var {
        choose: {
          chooseMonth: b
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: O,
          color: k,
          multiple: D,
          range: M
        }
      } = e, I = C + "-" + P, B = () => M || D ? c(I) : (b == null ? void 0 : b.index) === P && u.value, p = () => f(P) ? O ? !O(I) : !1 : !0, S = p(), L = () => S ? !0 : M || D ? !c(I) : !u.value || (b == null ? void 0 : b.index) !== P, Q = () => d.value && t === P && e.componentProps.showCurrent ? (M || D || u.value) && S ? !0 : M || D ? !c(I) : u.value ? (b == null ? void 0 : b.index) !== t : !0 : !1, F = () => S ? "" : Q() ? k ?? "" : B() ? "" : it() + "-color-cover", R = F().startsWith(it());
      return {
        outline: Q(),
        text: L(),
        color: L() ? "" : k,
        textColor: R ? "" : F(),
        [it() + "-color-cover"]: R,
        class: qm(ot("button"), [S, ot("button--disabled")])
      };
    }, w = (P, b) => {
      var C = b.currentTarget;
      C.classList.contains(ot("button--disabled")) || r("choose-month", P);
    }, y = (P) => {
      o.value = P === "prev", i.value += P === "prev" ? -1 : 1, r("check-preview", "year", P);
    }, T = (P) => {
      l.value.checkDate(P);
    };
    return ie(() => e.preview.previewYear, (P) => {
      var {
        componentProps: {
          min: b,
          max: C
        }
      } = e;
      C && (s.right = !te("" + (z(P) + 1)).isSameOrBefore(te(C), "year")), b && (s.left = !te("" + (z(P) - 1)).isSameOrAfter(te(b), "year"));
    }, {
      immediate: !0
    }), {
      n: ot,
      nDate: it,
      pack: He,
      MONTH_LIST: ft,
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
_s.render = Km;
const Xm = _s;
var {
  n: Wi,
  classes: Zm
} = ee("year-picker"), Jm = ["onClick"];
function Qm(e, n) {
  return h(), V(
    "ul",
    {
      class: m(e.n())
    },
    [(h(!0), V(
      Oe,
      null,
      Be(e.yearList, (r) => (h(), V(
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
        Jm
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var xs = x({
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
    return Ye(() => {
      var o = document.querySelector("." + Wi("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Wi,
      classes: Zm,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
xs.render = Qm;
const _m = xs;
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
te.extend(Xs);
te.extend(Zs);
var {
  n: ka,
  classes: xm
} = ee("day-picker"), {
  n: lt
} = ee("date-picker");
function ep(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return h(), V(
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
          default: ve(() => [(h(), V("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(h(!0), V(
              Oe,
              null,
              Be(e.sortWeekList, (t) => (h(), V(
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
            [(h(!0), V(
              Oe,
              null,
              Be(e.days, (t, o) => (h(), V("li", {
                key: o
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, ko({}, e.buttonProps(t)), {
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
var eu = x({
  name: "DayPickerPanel",
  components: {
    VarButton: xe,
    PanelHeader: Qs
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
    }), v = Y(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = Y(() => {
      var M;
      return e.choose.chooseYear === e.preview.previewYear && ((M = e.choose.chooseMonth) == null ? void 0 : M.index) === e.preview.previewMonth.index;
    }), c = Y(() => {
      var M = Wa.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return M === -1 || M === 0 ? Wa : Wa.slice(M).concat(Wa.slice(0, M));
    }), g = (M) => {
      var I, B;
      return (I = (B = He.value.datePickerWeekDict) == null ? void 0 : B[M].abbr) != null ? I : "";
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
    }, P = (M) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: B
        },
        componentProps: {
          min: p,
          max: S
        }
      } = e, L = !0, Q = !0, F = I + "-" + B.index + "-" + M;
      return S && (L = te(F).isSameOrBefore(te(S), "day")), p && (Q = te(F).isSameOrAfter(te(p), "day")), L && Q;
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
          class: ka("button")
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
          range: F
        }
      } = e, R = B + "-" + p.index + "-" + M, J = () => F || Q ? b(R) : z(I) === M && f.value, j = () => P(M) ? S ? !S(R) : !1 : !0, K = j(), N = () => K ? !0 : F || Q ? !b(R) : !f.value || z(I) !== M, X = () => v.value && z(o) === M && e.componentProps.showCurrent ? (F || Q || f.value) && K ? !0 : F || Q ? !b(R) : f.value ? I !== o : !0 : !1, H = () => K ? "" : X() ? L ?? "" : J() ? "" : lt() + "-color-cover", Z = H().startsWith(lt());
      return {
        text: N(),
        outline: X(),
        textColor: Z ? "" : H(),
        [lt() + "-color-cover"]: Z,
        class: xm(ka("button"), ka("button--usable"), [K, ka("button--disabled")])
      };
    }, O = (M) => {
      l.value = M === "prev", s.value += M === "prev" ? -1 : 1, r("check-preview", "month", M);
    }, k = (M, I) => {
      var B = I.currentTarget;
      B.classList.contains(ka("button--disabled")) || r("choose-day", M);
    }, D = (M) => {
      u.value.checkDate(M);
    };
    return Ye(() => {
      y(), T();
    }), ie(() => e.preview, () => {
      y(), T();
    }), {
      n: ka,
      nDate: lt,
      days: i,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: w,
      getDayAbbr: g,
      checkDate: O,
      chooseDay: k,
      buttonProps: C
    };
  }
});
eu.render = ep;
const np = eu;
var {
  n: rp,
  classes: ap
} = ee("date-picker");
function tp(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return h(), V(
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
              var o, i, l;
              return [e.type === "month" ? (h(), V("div", {
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
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [be(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (h(), V("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
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
              )]) : W(e.$slots, "date", Dl(Ve({
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
var nu = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Xm,
    YearPickerPanel: _m,
    DayPickerPanel: np
  },
  props: Wm,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [i, l] = o.split("-"), s = ft.find((se) => se.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), g = E(), w = E(s), y = E(i), T = E(!1), P = E([]), b = E([]), C = E([]), O = E([]), k = E(null), D = E(null), M = Me({
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
      chooseMonths: P.value,
      chooseDays: b.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: O.value
    })), B = Y(() => ({
      previewMonth: w.value,
      previewYear: y.value
    })), p = Y(() => {
      var {
        multiple: se,
        range: ge
      } = e;
      if (ge)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var ce = "";
      if (f.value) {
        var Ce, ke;
        ce = (Ce = (ke = He.value.datePickerMonthDict) == null ? void 0 : ke[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + P.value.length + He.value.datePickerSelected : ce;
    }), S = Y(() => {
      var se, ge, ce, Ce, {
        multiple: ke,
        range: Le
      } = e;
      if (Le) {
        var Je = O.value.map((Gt) => te(Gt).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (ke)
        return "" + b.value.length + He.value.datePickerSelected;
      if (!c.value || !f.value || !g.value)
        return "";
      var fn = te(c.value + "-" + f.value.index + "-" + g.value).day(), Sa = Wa.find((Gt) => Gt.index === "" + fn), gi = (se = (ge = He.value.datePickerWeekDict) == null ? void 0 : ge[Sa.index].name) != null ? se : "", Ld = (ce = (Ce = He.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? ce : "", Rd = ca(g.value, 2, "0");
      return He.value.lang === "zh-CN" ? f.value.index + "-" + Rd + " " + gi.slice(0, 3) : gi.slice(0, 3) + ", " + Ld.slice(0, 3) + " " + g.value;
    }), L = Y(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Q = Y(() => !e.touchable || ["", "year"].includes(L.value)), F = Y(() => {
      var se, ge, ce, Ce, ke = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + g.value).day(), Le = g.value ? ca(g.value, 2, "0") : "";
      return {
        week: "" + ke,
        year: (ge = c.value) != null ? ge : "",
        month: (ce = (Ce = f.value) == null ? void 0 : Ce.index) != null ? ce : "",
        date: Le
      };
    }), R = Y(() => I.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), J = Y(() => c.value === y.value), j = Y(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === w.value.index;
    }), K = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Q.value) {
        var {
          clientX: ge,
          clientY: ce
        } = se.touches[0];
        n = ge, r = ce;
      }
    }, X = (se, ge) => se >= ge && se > 20 ? "x" : "y", H = (se) => {
      if (!Q.value) {
        var {
          clientX: ge,
          clientY: ce
        } = se.touches[0], Ce = ge - n, ke = ce - r;
        t = X(Math.abs(Ce), Math.abs(ke)), a = Ce > 0 ? "prev" : "next";
      }
    }, Z = () => {
      if (!(Q.value || t !== "x")) {
        var se = L.value === "month" ? k : D;
        Bt(() => {
          se.value.forwardRef(a), hi();
        });
      }
    }, ae = (se, ge) => {
      var ce = ge === "month" ? C : O;
      if (ce.value = v.value ? [se, se] : [ce.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(ce.value[0]).isAfter(ce.value[1]), ke = Ce ? [ce.value[1], ce.value[0]] : [...ce.value];
        $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
      }
    }, oe = (se, ge) => {
      var ce = ge === "month" ? P : b, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-DD", ke = ce.value.map((Je) => te(Je).format(Ce)), Le = ke.findIndex((Je) => Je === se);
      Le === -1 ? ke.push(se) : ke.splice(Le, 1), $(e["onUpdate:modelValue"], ke), $(e.onChange, ke);
    }, he = (se, ge) => !c.value || !f.value ? !1 : J.value ? se === "month" ? ge.index < f.value.index : j.value ? ge < z(g.value) : f.value.index > w.value.index : c.value > y.value, pe = (se) => {
      var {
        readonly: ge,
        range: ce,
        multiple: Ce,
        onChange: ke,
        "onUpdate:modelValue": Le
      } = e;
      if (!(se < 0 || ge)) {
        T.value = he("day", se);
        var Je = y.value + "-" + w.value.index + "-" + se, fn = te(Je).format("YYYY-MM-DD");
        ce ? ae(fn, "day") : Ce ? oe(fn, "day") : ($(Le, fn), $(ke, fn));
      }
    }, Fe = (se) => {
      var {
        type: ge,
        readonly: ce,
        range: Ce,
        multiple: ke,
        onChange: Le,
        onPreview: Je,
        "onUpdate:modelValue": fn
      } = e;
      if (T.value = he("month", se), ge === "month" && !ce) {
        var Sa = y.value + "-" + se.index;
        Ce ? ae(Sa, "month") : ke ? oe(Sa, "month") : ($(fn, Sa), $(Le, Sa));
      } else
        w.value = se, $(Je, z(y.value), z(w.value.index));
      d.value = !1;
    }, en = (se) => {
      y.value = "" + se, u.value = !1, d.value = !0, $(e.onPreview, z(y.value), z(w.value.index));
    }, on = (se, ge) => {
      var ce = ge === "prev" ? -1 : 1;
      if (se === "year")
        y.value = "" + (z(y.value) + ce);
      else {
        var Ce = z(w.value.index) + ce;
        Ce < 1 && (y.value = "" + (z(y.value) - 1), Ce = 12), Ce > 12 && (y.value = "" + (z(y.value) + 1), Ce = 1), w.value = ft.find((ke) => z(ke.index) === Ce);
      }
      $(e.onPreview, z(y.value), z(w.value.index));
    }, ze = () => (e.multiple || e.range) && !we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && we(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, vn = (se) => we(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Dd = (se, ge) => {
      var ce = ge === "month" ? C : O, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = se.map((fn) => te(fn).format(Ce)).slice(0, 2), Le = ce.value.some((fn) => vn(fn));
      if (!Le) {
        ce.value = ke;
        var Je = te(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Je && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Ad = (se, ge) => {
      var ce = ge === "month" ? P : b, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", ke = Array.from(new Set(se.map((Le) => te(Le).format(Ce))));
      ce.value = ke.filter((Le) => Le !== "Invalid Date");
    }, zd = (se) => {
      var ge = te(se).format("YYYY-MM-D");
      if (!vn(ge)) {
        var [ce, Ce, ke] = ge.split("-"), Le = ft.find((Je) => Je.index === Ce);
        f.value = Le, c.value = ce, g.value = ke, w.value = Le, y.value = ce;
      }
    }, hi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!ze() || vn(se) || !se))
        if (e.range) {
          if (!we(se))
            return;
          v.value = se.length !== 1, Dd(se, e.type);
        } else if (e.multiple) {
          if (!we(se))
            return;
          Ad(se, e.type);
        } else
          zd(se);
    }, {
      immediate: !0
    }), ie(L, hi), {
      n: rp,
      classes: ap,
      monthPanelEl: k,
      dayPanelEl: D,
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
      slotProps: F,
      formatRange: R,
      clickEl: K,
      handleTouchstart: N,
      handleTouchmove: H,
      handleTouchend: Z,
      getChooseDay: pe,
      getChooseMonth: Fe,
      getChooseYear: en,
      checkPreview: on
    };
  }
});
nu.render = tp;
const Br = nu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var eC = Br;
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
function op(e) {
  return ["left", "center", "right"].includes(e);
}
var ip = $o({
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
    validator: op
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
}, Ke(xa, [
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
var {
  n: lp,
  classes: sp
} = ee("dialog");
function up(e, n) {
  var r = le("var-button"), a = le("var-popup");
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
      default: ve(() => [A(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: To({
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
var ru = x({
  name: "VarDialog",
  components: {
    VarPopup: mn,
    VarButton: xe
  },
  inheritAttrs: !1,
  props: ip,
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
      n: lp,
      classes: sp,
      pack: He,
      dt: Et,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: ye
    };
  }
});
ru.render = up;
const lr = ru;
function Ct() {
  return Ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ct.apply(this, arguments);
}
var Qn, St = {};
function dp(e) {
  return e === void 0 && (e = {}), Xe(e) ? Ct({}, St, {
    message: e
  }) : Ct({}, St, e);
}
function pa(e) {
  return Xo() ? new Promise((n) => {
    pa.close();
    var r = dp(e), a = Me(r);
    a.teleport = "body", Qn = a;
    var {
      unmountInstance: t
    } = Ya(lr, a, {
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
function vp(e) {
  St = e;
}
function fp() {
  St = {};
}
function cp() {
  if (Qn != null) {
    var e = Qn;
    Qn = null, Ee().then(() => {
      e.show = !1;
    });
  }
}
Object.assign(pa, {
  setDefaultOptions: vp,
  resetDefaultOptions: fp,
  close: cp
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
pa.install = function(e) {
  e.component(lr.name, lr);
};
pa.Component = lr;
var nC = lr, mp = {
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
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ma.apply(this, arguments);
}
var {
  n: pp,
  classes: hp
} = ee("divider");
function gp(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: q(e.style)
    },
    [W(e.$slots, "default", {}, () => [e.description ? (h(), V(
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
var au = x({
  name: "VarDivider",
  props: mp,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Me({
      withText: !1
    }), t = Y(() => eo(e.inset) ? e.inset : !0), o = Y(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (eo(l) || l === 0)
        return Ma({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ma({}, d, {
        height: "calc(80% - " + ye(f) + ")"
      }) : Ma({}, d, {
        width: "calc(100% - " + ye(f) + ")",
        left: v > 0 ? ye(f) : ye(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ye(() => {
      i();
    }), Go(() => {
      i();
    }), Ma({
      n: pp,
      classes: hp
    }, Wd(a), {
      style: o,
      isInset: t
    });
  }
});
au.render = gp;
const Nr = au;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var rC = Nr;
function yp(e) {
  return ["start", "end"].includes(e);
}
var bp = {
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
    validator: yp
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function ji(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function wp(e) {
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
var {
  n: Cp
} = ee("form");
function Sp(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [W(e.$slots, "default")],
    2
    /* CLASS */
  );
}
var tu = x({
  name: "VarForm",
  props: bp,
  setup(e) {
    var n = Y(() => e.disabled), r = Y(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Qf(), o = (d, v) => {
      setTimeout(() => {
        var f = Ca(v), c = f === window ? 0 : Ti(f), g = Ti(v) - c - Ne(e.scrollToErrorOffsetY);
        Ka(f, {
          top: g,
          animation: no
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = wp(function* () {
        var v = yield Promise.all(a.map((y) => {
          var {
            validate: T
          } = y;
          return T();
        }));
        if (e.scrollToError) {
          var [, f] = Zd(v, (y) => y === !1, e.scrollToError), c = f > -1;
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
      n: Cp,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
tu.render = Sp;
const An = tu;
An.install = function(e) {
  e.component(An.name, An);
};
An.useValidation = bn;
An.useForm = wn;
var aC = An;
function Gi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ut(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Gi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Gi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
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
var kp = "background-image", $p = "lazy-loading", Tp = "lazy-error", qi = "lazy-attempt", Pp = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Oo = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ba = [], kt = [], ou = Jd(100), Re = {
  loading: Oo,
  error: Oo,
  attempt: 3,
  throttleWait: 300,
  events: Pp
}, oi = Ko(nt, Re.throttleWait);
function Yt(e, n) {
  e._lazy.arg === kp ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Op(e) {
  e._lazy.loading && Yt(e, e._lazy.loading), nt();
}
function Vp(e) {
  e._lazy.error && Yt(e, e._lazy.error), e._lazy.state = "error", li(e), nt();
}
function iu(e, n) {
  Yt(e, n), e._lazy.state = "success", li(e), nt();
}
function Mp(e) {
  var n;
  kt.includes(e) || (kt.push(e), (n = Re.events) == null || n.forEach((r) => {
    e.addEventListener(r, oi, {
      passive: !0
    });
  }));
}
function Ep() {
  kt.forEach((e) => {
    var n;
    (n = Re.events) == null || n.forEach((r) => {
      e.removeEventListener(r, oi);
    });
  }), kt.length = 0;
}
function Ip(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute($p)) != null ? r : Re.loading,
    error: (a = e.getAttribute(Tp)) != null ? a : Re.error,
    attempt: e.getAttribute(qi) ? Number(e.getAttribute(qi)) : Re.attempt
  };
  e._lazy = Po({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Yt(e, Oo), $(Re.filter, e._lazy);
}
function Bp(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ou.add(n), iu(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Vp(e) : lu(e);
  });
}
function lu(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ou.has(n)) {
      iu(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Op(e), Bp(e, n);
  }
}
function ii(e) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = Ut(function* (e) {
    (yield xd(e)) && lu(e);
  }), Vo.apply(this, arguments);
}
function nt() {
  Ba.forEach((e) => ii(e));
}
function Np(e) {
  return Mo.apply(this, arguments);
}
function Mo() {
  return Mo = Ut(function* (e) {
    !Ba.includes(e) && Ba.push(e), ev(e).forEach(Mp), yield ii(e);
  }), Mo.apply(this, arguments);
}
function li(e) {
  Mt(Ba, e), Ba.length === 0 && Ep();
}
function Dp(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function su(e, n) {
  return Eo.apply(this, arguments);
}
function Eo() {
  return Eo = Ut(function* (e, n) {
    Ip(e, n), yield Np(e);
  }), Eo.apply(this, arguments);
}
function Ap(e, n) {
  return Io.apply(this, arguments);
}
function Io() {
  return Io = Ut(function* (e, n) {
    if (!Dp(e, n)) {
      Ba.includes(e) && (yield ii(e));
      return;
    }
    yield su(e, n);
  }), Io.apply(this, arguments);
}
function zp(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: o,
    filter: i
  } = e;
  Re.events = n ?? Re.events, Re.loading = r ?? Re.loading, Re.error = a ?? Re.error, Re.attempt = t ?? Re.attempt, Re.throttleWait = o ?? Re.throttleWait, Re.filter = i;
}
var uu = {
  mounted: su,
  unmounted: li,
  updated: Ap,
  install(e, n) {
    zp(n), oi = Ko(nt, Re.throttleWait), e.directive("lazy", this);
  }
}, tC = uu;
const $t = uu;
function Lp(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Rp = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Lp,
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
  n: Up,
  classes: Yp
} = ee("image"), Fp = ["alt", "title", "lazy-error", "lazy-loading"], Hp = ["alt", "title", "src"];
function Wp(e, n) {
  var r = je("lazy"), a = je("ripple");
  return Se((h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: q({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Se((h(), V(
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
      Fp
    )), [[r, e.src]]) : (h(), V(
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
      Hp
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var du = x({
  name: "VarImage",
  directives: {
    Lazy: $t,
    Ripple: Ae
  },
  props: Rp,
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
      n: Up,
      classes: Yp,
      toSizeUnit: ye,
      handleLoad: n,
      handleError: r,
      handleClick: a
    };
  }
});
du.render = Wp;
const Dr = du;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var oC = Dr, vu = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), fu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function jp() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(vu), {
    length: r
  } = gn(fu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var cu = {
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
function Ki(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Gp(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ki(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ki(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var qp = 250, Kp = 20, {
  n: Xp,
  classes: Zp
} = ee("swipe"), Jp = ["onClick"];
function Qp(e, n) {
  return h(), V(
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
    }, () => [e.indicator && e.length ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), V(
        Oe,
        null,
        Be(e.length, (r, a) => (h(), V(
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
          Jp
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
var mu = x({
  name: "VarSwipe",
  props: cu,
  setup(e) {
    var n = E(null), r = E(0), a = Y(() => e.vertical), t = E(0), o = E(0), i = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = jp(), v = !1, f = -1, c, g, w, y, T, P = (N) => s.find((X) => {
      var {
        index: H
      } = X;
      return H.value === N;
    }), b = () => {
      e.loop && (o.value >= 0 && P(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && P(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (P(d.value - 1).setTranslate(0), P(0).setTranslate(0)));
    }, C = (N) => {
      var X = an(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
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
    }, D = (N) => {
      var X = o.value >= r.value, H = o.value <= -t.value, Z = 0, ae = -(t.value - r.value);
      i.value = !0, (X || H) && (i.value = !0, o.value = H ? Z : ae, P(0).setTranslate(0), P(d.value - 1).setTranslate(0)), Bt(() => {
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
          clientY: H
        } = N.touches[0];
        c = X, g = H, w = performance.now(), v = !0, B(), D(() => {
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
        } = N.touches[0], oe = Math.abs(Z - c), he = Math.abs(ae - g), pe = p(oe, he), Fe = H ? "vertical" : "horizontal";
        if (pe === Fe) {
          N.preventDefault();
          var en = y !== void 0 ? Z - y : 0, on = T !== void 0 ? ae - T : 0;
          y = Z, T = ae, o.value += H ? on : en, b();
        }
      }
    }, Q = () => {
      if (v) {
        var {
          vertical: N,
          onChange: X
        } = e, H = N ? T < g : y < c, Z = Math.abs(N ? g - T : c - y), ae = performance.now() - w <= qp && Z >= Kp, oe = ae ? C(H ? l.value + 1 : l.value - 1) : C();
        v = !1, i.value = !1, y = void 0, T = void 0, o.value = oe * -r.value;
        var he = l.value;
        l.value = O(oe), I(), he !== l.value && $(X, l.value);
      }
    }, F = () => {
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
        l.value = k(Z + 1), (N == null ? void 0 : N.event) !== !1 && $(H, l.value), D(() => {
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
        l.value = k(Z - 1), (N == null ? void 0 : N.event) !== !1 && $(H, l.value), D(() => {
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
    return u(K), ie(() => d.value, /* @__PURE__ */ Gp(function* () {
      yield Mn(), M(), F();
    })), Ye(() => {
      window.addEventListener("resize", F);
    }), mr(() => {
      window.removeEventListener("resize", F), B();
    }), {
      n: Xp,
      classes: Zp,
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
      to: j,
      resize: F,
      toNumber: z
    };
  }
});
mu.render = Qp;
const zn = mu;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var iC = zn;
function _p() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(vu), {
    index: r
  } = yn(fu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: xp
} = ee("swipe-item");
function eh(e, n) {
  return h(), V(
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
var pu = x({
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = _p(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: xp,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
pu.render = eh;
const Ln = pu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var lC = Ln;
function Bo() {
  return Bo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bo.apply(this, arguments);
}
var nh = Bo({
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
}, Ke(cu, ["loop", "indicator", "onChange"]), Ke(xa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Xi,
  classes: rh
} = ee("image-preview"), Zi = 12, Ji = 200, ah = 350, Qi = 200, th = ["src", "alt"];
function oh(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
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
          default: ve(() => [(h(!0), V(
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
                      src: i,
                      alt: i
                    },
                    null,
                    10,
                    th
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
            }, () => [e.indicator && e.images.length > 1 ? (h(), V(
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
      ), W(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), me(
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
var hu = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: zn,
    VarSwipeItem: Ln,
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: nh,
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
        clientY: F
      } = p;
      return Math.abs(Math.sqrt(Math.pow(Q - S, 2) + Math.pow(F - L, 2)));
    }, c = (B, p) => ({
      clientX: B.clientX,
      clientY: B.clientY,
      timestamp: Date.now(),
      target: p
    }), g = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, Qi);
    }, w = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, y = (B) => d ? f(d, B) <= Zi && B.timestamp - d.timestamp <= Ji && d.target === B.target : !1, T = (B) => !B || !u || !d ? !1 : f(u, d) <= Zi && Date.now() - d.timestamp < ah && (B === u.target || B.parentNode === u.target), P = (B) => {
      v = window.setTimeout(() => {
        T(B.target) && I(), u = null;
      }, Ji);
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
      } = B.querySelector("." + Xi("image"));
      return {
        width: p,
        height: S,
        imageRadio: Q / L,
        rootRadio: S / p,
        zoom: z(e.zoom)
      };
    }, O = (B) => {
      var {
        zoom: p,
        imageRadio: S,
        rootRadio: L,
        width: Q,
        height: F
      } = C(B);
      if (!S)
        return 0;
      var R = S > L ? F / S : Q;
      return Math.max(0, (p * R - Q) / 2) / p;
    }, k = (B) => {
      var {
        zoom: p,
        imageRadio: S,
        rootRadio: L,
        width: Q,
        height: F
      } = C(B);
      if (!S)
        return 0;
      var R = S > L ? F : Q * S;
      return Math.max(0, (p * R - F) / 2) / p;
    }, D = (B, p, S) => B + p >= S ? S : B + p <= -S ? -S : B + p, M = (B) => {
      if (d) {
        var p = B.currentTarget, {
          touches: S
        } = B, L = c(S[0], p);
        if (a.value > 1) {
          var Q = L.clientX - d.clientX, F = L.clientY - d.clientY, R = O(p), J = k(p);
          t.value = D(t.value, Q, R), o.value = D(o.value, F, J);
        }
        d = L;
      }
    }, I = () => {
      if (a.value > 1) {
        w(), setTimeout(() => $(e["onUpdate:show"], !1), Qi);
        return;
      }
      $(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: Xi,
      classes: rh,
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
      handleTouchend: P,
      close: I
    };
  }
});
hu.render = oh;
const sr = hu;
var _n;
function Hn(e) {
  if (Xo()) {
    Hn.close();
    var n = Xe(e) ? {
      images: [e]
    } : we(e) ? {
      images: e
    } : e, r = Me(n);
    r.teleport = "body", _n = r;
    var {
      unmountInstance: a
    } = Ya(sr, r, {
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
var sC = sr, ct = {
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
function _i(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        _i(o, a, t, i, l, "next", s);
      }
      function l(s) {
        _i(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: ih,
  classes: lh
} = ee("sticky");
function sh(e, n) {
  return h(), V(
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
var gu = x({
  name: "VarSticky",
  props: ct,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), o = E("0px"), i = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = Y(() => !e.disabled && e.cssMode), v = Y(() => !e.disabled && !e.cssMode && a.value), f = Y(() => Ne(e.offsetTop)), c, g = () => {
      var {
        cssMode: b,
        disabled: C
      } = e;
      if (!C) {
        var O = 0;
        if (c !== window) {
          var {
            top: k
          } = c.getBoundingClientRect();
          O = k;
        }
        var D = r.value, M = n.value, {
          top: I,
          left: B
        } = M.getBoundingClientRect(), p = I - O;
        return p <= f.value ? (b || (i.value = M.offsetWidth + "px", l.value = M.offsetHeight + "px", t.value = O + f.value + "px", o.value = B + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
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
      var b = xi(function* () {
        a.value = !1, yield iv(), g();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var b = xi(function* () {
        yield Mn(), c = Ca(n.value), c !== window && c.addEventListener("scroll", w), window.addEventListener("scroll", w), w();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), P = () => {
      c !== window && c.removeEventListener("scroll", w), window.removeEventListener("scroll", w);
    };
    return ie(() => e.disabled, y), Wo(T), jo(P), Ye(T), mr(P), {
      n: ih,
      classes: lh,
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
gu.render = sh;
const Rn = gu;
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var uC = Rn, yu = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), bu = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function uh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(yu), {
    length: r
  } = gn(bu);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function dh() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(yu), {
    index: r
  } = yn(bu);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var vh = {
  index: {
    type: [Number, String]
  }
}, {
  n: fh,
  classes: ch
} = ee("index-anchor");
function mh(e, n) {
  return h(), me(
    Ua(e.sticky ? e.n("$-sticky") : e.Transition),
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
        Ve({
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
var wu = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: vh,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = dh(), t = E(0), o = E(!1), i = Y(() => e.index), l = E(null), {
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
      n: fh,
      classes: ch,
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
wu.render = mh;
const Ar = wu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var dC = Ar, ph = {
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
function el(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zt(e) {
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
  n: hh,
  classes: gh
} = ee("index-bar"), yh = ["onClick"];
function bh(e, n) {
  return h(), V(
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
      [(h(!0), V(
        Oe,
        null,
        Be(e.anchorNameList, (r) => (h(), V(
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
          yh
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
var Cu = x({
  name: "VarIndexBar",
  props: ph,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = uh(), t = E(""), o = E(null), i = E(null), l = E([]), s = E(), u = Y(() => e.sticky), d = Y(() => e.cssMode), v = Y(() => Ne(e.stickyOffsetTop)), f = Y(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var g = (b, C) => {
      var O = qo(b) ? b.name.value : b;
      O === s.value || O === void 0 || (s.value = O, (C == null ? void 0 : C.event) !== !1 && $(e.onChange, O));
    }, w = () => {
      if (!("getBoundingClientRect" in o.value))
        return 0;
      var {
        top: b
      } = o.value.getBoundingClientRect(), {
        scrollTop: C
      } = o.value, {
        top: O
      } = i.value.getBoundingClientRect();
      return C - b + O;
    }, y = () => {
      var b = It(o.value), C = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, O = w();
      r.forEach((k, D) => {
        var M = k.ownTop.value, I = b - M + v.value - O, B = D === r.length - 1 ? C : r[D + 1].ownTop.value - k.ownTop.value;
        I >= 0 && I < B && t.value === "" && (D && !e.cssMode && r[D - 1].setDisabled(!0), k.setDisabled(!1), g(k));
      });
    }, T = /* @__PURE__ */ function() {
      var b = Zt(function* (C) {
        var {
          anchorName: O,
          manualCall: k = !1,
          options: D
        } = C;
        if (k && $(e.onClick, O), O !== s.value) {
          var M = r.find((S) => {
            var {
              name: L
            } = S;
            return O === L.value;
          });
          if (M) {
            var I = w(), B = M.ownTop.value - v.value + I, p = Zo(o.value);
            t.value = O, g(O, D), yield Ka(o.value, {
              left: p,
              top: B,
              animation: zl,
              duration: z(e.duration)
            }), Bt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return b.apply(this, arguments);
      };
    }(), P = (b, C) => {
      Pn(() => T({
        anchorName: b,
        options: C
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ Zt(function* () {
      yield Mn(), r.forEach((b) => {
        var {
          name: C,
          setOwnTop: O
        } = b;
        C.value && l.value.push(C.value), O();
      });
    })), Ye(/* @__PURE__ */ Zt(function* () {
      yield Mn(), o.value = Ca(i.value), o.value.addEventListener("scroll", y);
    })), Ot(() => {
      $(o.value.removeEventListener, "scroll", y);
    }), {
      n: hh,
      classes: gh,
      barEl: i,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: P,
      anchorClick: T
    };
  }
});
Cu.render = bh;
const zr = Cu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var vC = zr;
function wh(e) {
  return ["text", "password", "number"].includes(e);
}
var Ch = {
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
    validator: wh
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
  n: Jt,
  classes: Sh
} = ee("input"), kh = ["id", "disabled", "type", "value", "maxlength", "rows"], $h = ["id", "disabled", "type", "value", "maxlength"], Th = ["for"];
function Ph(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
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
        [e.type === "password" ? (h(), V(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
          /* CLASS */
        )) : _("v-if", !0), e.textarea ? (h(), V(
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
          kh
        )) : (h(), V(
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
          $h
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
          Th
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [W(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
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
    ), e.line ? (h(), V(
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
var Su = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Ch,
  setup(e) {
    var n = E("var-input-" + za().uid), r = E(null), a = E(!1), t = Y(() => {
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
      Ee(() => {
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
        return Jt("--placeholder-hidden");
      if (p && (!Nn(S) || a.value))
        return Jt("--placeholder-hint");
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
    }, P = (p) => {
      var {
        disabled: S,
        onClick: L
      } = e;
      i != null && i.disabled.value || S || ($(L, p), v("onClick"));
    }, b = (p) => e.modelModifiers.trim ? p.trim() : p, C = (p) => e.maxlength ? p.slice(0, z(e.maxlength)) : p, O = (p) => {
      var {
        disabled: S,
        readonly: L
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || S || L || p.stopPropagation();
    }, k = () => {
      $(e["onUpdate:modelValue"], ""), d();
    }, D = () => u(e.rules, e.modelValue), M = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, I = () => {
      r.value.blur();
    }, B = {
      reset: k,
      validate: D,
      resetValidation: d
    };
    return $(o, B), Ye(() => {
      e.autofocus && M();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      n: Jt,
      classes: Sh,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: g,
      handleInput: w,
      handleChange: y,
      handleClear: T,
      handleClick: P,
      handleTouchstart: O,
      validate: D,
      resetValidation: d,
      reset: k,
      focus: M,
      blur: I
    };
  }
});
Su.render = Ph;
const ur = Su;
ur.install = function(e) {
  e.component(ur.name, ur);
};
var fC = ur;
function Oh(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vh(e) {
  return ["always", "hover", "none"].includes(e);
}
var Mh = {
  type: {
    type: String,
    default: "default",
    validator: Oh
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
    validator: Vh
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
  n: Eh,
  classes: Ih
} = ee("link");
function Bh(e, n) {
  return h(), me(
    Ua(e.tag),
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
var ku = x({
  name: "VarLink",
  props: Mh,
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
      n: Eh,
      classes: Ih,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
ku.render = Bh;
const Lr = ku;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var cC = Lr, Nh = {
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
function nl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Dh(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        nl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        nl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Ah,
  classes: zh
} = ee("list");
function Lh(e, n) {
  var r = le("var-loading"), a = je("ripple");
  return h(), V(
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
    }, () => [Se((h(), V(
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
var $u = x({
  name: "VarList",
  directives: {
    Ripple: Ae
  },
  components: {
    VarLoading: $n
  },
  props: Nh,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      $(e["onUpdate:error"], !1), $(e["onUpdate:loading"], !0), $(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ne(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = Dh(function* () {
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
    return Ye(() => {
      a = Ca(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), mr(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: He,
      listEl: n,
      detectorEl: r,
      dt: Et,
      isNumber: an,
      load: t,
      check: i,
      n: Ah,
      classes: zh
    };
  }
});
$u.render = Lh;
const Rr = $u;
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var mC = Rr, Rh = {
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
  classes: Uh,
  n: rl
} = ee("loading-bar");
const Yh = x({
  name: "VarLoadingBar",
  props: Rh,
  setup(e) {
    return () => re("div", {
      class: Uh(rl(), [e.error, rl("--error")]),
      style: {
        zIndex: sn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ye(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ye(e.top)
      }
    }, null);
  }
});
var Tu, al, Pu = {}, Fh = {
  value: 0,
  opacity: 0,
  error: !1
}, qe = Me(Fh), Hh = (e) => {
  Object.assign(qe, e);
}, Wh = (e) => {
  Object.assign(qe, e), Pu = e;
}, jh = () => {
  Object.keys(Pu).forEach((e) => {
    qe[e] !== void 0 && (qe[e] = void 0);
  });
}, Ou = () => {
  Tu = window.setTimeout(() => {
    if (!(qe.value >= 95)) {
      var e = Math.random();
      qe.value < 70 && (e = Math.round(5 * Math.random())), qe.value += e, Ou();
    }
  }, 200);
}, Gh = () => {
  al || (al = !0, Ya(Yh, qe)), (!qe.error || qe.value === 100) && (qe.value = 0), setTimeout(() => {
    qe.opacity = 1;
  }, 200), Ou();
}, qh = () => {
  qe.value = 100, setTimeout(() => {
    qe.opacity = 0, setTimeout(() => {
      qe.error = !1;
    }, 250);
  }, 300), window.clearTimeout(Tu);
}, Kh = () => {
  qe.error = !0, Tt.start(), setTimeout(Tt.finish, 300);
}, Tt = {
  start: Gh,
  finish: qh,
  error: Kh,
  /** @deprecated Use setDefaultOptions to instead. */
  mergeConfig: Hh,
  setDefaultOptions: Wh,
  resetDefaultOptions: jh
}, pC = Tt;
const No = Tt;
function Xh(e) {
  return ["click", "hover"].includes(e);
}
function Zh(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Jh = {
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
    validator: Xh
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Zh
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
}, Qh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function mt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Qh[n];
  });
}
var Un = "top", cr = "bottom", ha = "right", dr = "left", Ft = "auto", Ht = [Un, cr, ha, dr], Wt = "start", Za = "end", _h = "clippingParents", Vu = "viewport", Fa = "popper", xh = "reference", tl = /* @__PURE__ */ Ht.reduce(function(e, n) {
  return e.concat([n + "-" + Wt, n + "-" + Za]);
}, []), Mu = /* @__PURE__ */ [].concat(Ht, [Ft]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Wt, n + "-" + Za]);
}, []), eg = "beforeRead", ng = "read", rg = "afterRead", ag = "beforeMain", tg = "main", og = "afterMain", ig = "beforeWrite", lg = "write", sg = "afterWrite", Do = [eg, ng, rg, ag, tg, og, ig, lg, sg];
function Yn(e) {
  return e.split("-")[0];
}
var ug = {
  start: "end",
  end: "start"
};
function ol(e) {
  return e.replace(/start|end/g, function(n) {
    return ug[n];
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
function ga(e) {
  var n = Cn(e).Element;
  return e instanceof n || e instanceof Element;
}
function pn(e) {
  var n = Cn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function si(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = Cn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function hr(e) {
  return ((ga(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Ga = Math.max, il = Math.min, Na = Math.round;
function Ao() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Eu() {
  return !/^((?!chrome|android).)*safari/i.test(Ao());
}
function Da(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && pn(e) && (t = e.offsetWidth > 0 && Na(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Na(a.height) / e.offsetHeight || 1);
  var i = ga(e) ? Cn(e) : window, l = i.visualViewport, s = !Eu() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function ui(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function di(e) {
  return Da(hr(e)).left + ui(e).scrollLeft;
}
function dg(e, n) {
  var r = Cn(e), a = hr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Eu();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + di(e),
    y: s
  };
}
function On(e) {
  return Cn(e).getComputedStyle(e);
}
function vg(e) {
  var n, r = hr(e), a = ui(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = Ga(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Ga(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + di(e), s = -a.scrollTop;
  return On(t || r).direction === "rtl" && (l += Ga(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function In(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function jt(e) {
  return In(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (si(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    hr(e)
  );
}
function vi(e) {
  var n = On(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Iu(e) {
  return ["html", "body", "#document"].indexOf(In(e)) >= 0 ? e.ownerDocument.body : pn(e) && vi(e) ? e : Iu(jt(e));
}
function qa(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Iu(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], vi(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(qa(jt(i)))
  );
}
function fg(e) {
  return ["table", "td", "th"].indexOf(In(e)) >= 0;
}
function ll(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  On(e).position === "fixed" ? null : e.offsetParent;
}
function cg(e) {
  var n = /firefox/i.test(Ao()), r = /Trident/i.test(Ao());
  if (r && pn(e)) {
    var a = On(e);
    if (a.position === "fixed")
      return null;
  }
  var t = jt(e);
  for (si(t) && (t = t.host); pn(t) && ["html", "body"].indexOf(In(t)) < 0; ) {
    var o = On(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function fi(e) {
  for (var n = Cn(e), r = ll(e); r && fg(r) && On(r).position === "static"; )
    r = ll(r);
  return r && (In(r) === "html" || In(r) === "body" && On(r).position === "static") ? n : r || cg(e) || n;
}
function mg(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && si(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function zo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function pg(e, n) {
  var r = Da(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function sl(e, n, r) {
  return n === Vu ? zo(dg(e, r)) : ga(n) ? pg(n, r) : zo(vg(hr(e)));
}
function hg(e) {
  var n = qa(jt(e)), r = ["absolute", "fixed"].indexOf(On(e).position) >= 0, a = r && pn(e) ? fi(e) : e;
  return ga(a) ? n.filter(function(t) {
    return ga(t) && mg(t, a) && In(t) !== "body";
  }) : [];
}
function gg(e, n, r, a) {
  var t = n === "clippingParents" ? hg(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = sl(e, u, a);
    return s.top = Ga(d.top, s.top), s.right = il(d.right, s.right), s.bottom = il(d.bottom, s.bottom), s.left = Ga(d.left, s.left), s;
  }, sl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ja(e) {
  return e.split("-")[1];
}
function yg(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Bu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Yn(a) : null, o = a ? Ja(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
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
    case ha:
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
  var u = t ? yg(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Wt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Za:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function bg() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function wg(e) {
  return Object.assign({}, bg(), e);
}
function Cg(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Nu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? _h : l, u = r.rootBoundary, d = u === void 0 ? Vu : u, v = r.elementContext, f = v === void 0 ? Fa : v, c = r.altBoundary, g = c === void 0 ? !1 : c, w = r.padding, y = w === void 0 ? 0 : w, T = wg(typeof y != "number" ? y : Cg(y, Ht)), P = f === Fa ? xh : Fa, b = e.rects.popper, C = e.elements[g ? P : f], O = gg(ga(C) ? C : C.contextElement || hr(e.elements.popper), s, d, i), k = Da(e.elements.reference), D = Bu({
    reference: k,
    element: b,
    strategy: "absolute",
    placement: t
  }), M = zo(Object.assign({}, b, D)), I = f === Fa ? M : k, B = {
    top: O.top - I.top + T.top,
    bottom: I.bottom - O.bottom + T.bottom,
    left: O.left - I.left + T.left,
    right: I.right - O.right + T.right
  }, p = e.modifiersData.offset;
  if (f === Fa && p) {
    var S = p[t];
    Object.keys(B).forEach(function(L) {
      var Q = [ha, cr].indexOf(L) >= 0 ? 1 : -1, F = [Un, cr].indexOf(L) >= 0 ? "y" : "x";
      B[L] += S[F] * Q;
    });
  }
  return B;
}
function Sg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Mu : s, d = Ja(a), v = d ? l ? tl : tl.filter(function(g) {
    return Ja(g) === d;
  }) : Ht, f = v.filter(function(g) {
    return u.indexOf(g) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(g, w) {
    return g[w] = Nu(e, {
      placement: w,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Yn(w)], g;
  }, {});
  return Object.keys(c).sort(function(g, w) {
    return c[g] - c[w];
  });
}
function kg(e) {
  if (Yn(e) === Ft)
    return [];
  var n = mt(e);
  return [ol(e), n, ol(n)];
}
function $g(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, g = c === void 0 ? !0 : c, w = r.allowedAutoPlacements, y = n.options.placement, T = Yn(y), P = T === y, b = s || (P || !g ? [mt(y)] : kg(y)), C = [y].concat(b).reduce(function(ae, oe) {
      return ae.concat(Yn(oe) === Ft ? Sg(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: g,
        allowedAutoPlacements: w
      }) : oe);
    }, []), O = n.rects.reference, k = n.rects.popper, D = /* @__PURE__ */ new Map(), M = !0, I = C[0], B = 0; B < C.length; B++) {
      var p = C[B], S = Yn(p), L = Ja(p) === Wt, Q = [Un, cr].indexOf(S) >= 0, F = Q ? "width" : "height", R = Nu(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Q ? L ? ha : dr : L ? cr : Un;
      O[F] > k[F] && (J = mt(J));
      var j = mt(J), K = [];
      if (o && K.push(R[S] <= 0), l && K.push(R[J] <= 0, R[j] <= 0), K.every(function(ae) {
        return ae;
      })) {
        I = p, M = !1;
        break;
      }
      D.set(p, K);
    }
    if (M)
      for (var N = g ? 3 : 1, X = function(oe) {
        var he = C.find(function(pe) {
          var Fe = D.get(pe);
          if (Fe)
            return Fe.slice(0, oe).every(function(en) {
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
const Tg = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $g,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Pg(e, n, r) {
  var a = Yn(e), t = [dr, Un].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [dr, ha].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Og(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Mu.reduce(function(d, v) {
    return d[v] = Pg(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const Vg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Og
};
function Mg(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Eg(e) {
  return e === Cn(e) || !pn(e) ? ui(e) : Mg(e);
}
function Ig(e) {
  var n = e.getBoundingClientRect(), r = Na(n.width) / e.offsetWidth || 1, a = Na(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Bg(e, n, r) {
  r === void 0 && (r = !1);
  var a = pn(n), t = pn(n) && Ig(n), o = hr(n), i = Da(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((In(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  vi(o)) && (l = Eg(n)), pn(n) ? (s = Da(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = di(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Ng(e) {
  var n = Da(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Dg(e) {
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
function Ag(e) {
  var n = Dg(e);
  return Do.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function zg(e) {
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
var gr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Lg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', ul = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Rg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), ul).filter(function(r, a, t) {
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
          Do.indexOf(n.phase) < 0 && console.error(qn(gr, n.name, '"phase"', "either " + Do.join(", "), '"' + String(n.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + ul.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(qn(Lg, String(n.name), a, a));
      });
    });
  });
}
function Ug(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Yg(e) {
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
var dl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Fg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", vl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function fl() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Hg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? vl : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, vl, o),
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
        var P = typeof T == "function" ? T(d.options) : T;
        w(), d.options = Object.assign({}, o, d.options, P), d.scrollParents = {
          reference: ga(l) ? qa(l) : l.contextElement ? qa(l.contextElement) : [],
          popper: qa(s)
        };
        var b = Ag(Yg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = b.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Ug([].concat(b, d.options.modifiers), function(p) {
            var S = p.name;
            return S;
          });
          if (Rg(C), Yn(d.options.placement) === Ft) {
            var O = d.orderedModifiers.find(function(p) {
              var S = p.name;
              return S === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = On(s), D = k.marginTop, M = k.marginRight, I = k.marginBottom, B = k.marginLeft;
          [D, M, I, B].some(function(p) {
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
          var T = d.elements, P = T.reference, b = T.popper;
          if (!fl(P, b)) {
            process.env.NODE_ENV !== "production" && console.error(dl);
            return;
          }
          d.rects = {
            reference: Bg(P, fi(b), d.options.strategy === "fixed"),
            popper: Ng(b)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var C = 0, O = 0; O < d.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Fg);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, O = -1;
              continue;
            }
            var k = d.orderedModifiers[O], D = k.fn, M = k.options, I = M === void 0 ? {} : M, B = k.name;
            typeof D == "function" && (d = D({
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
      update: zg(function() {
        return new Promise(function(y) {
          c.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        w(), f = !0;
      }
    };
    if (!fl(l, s))
      return process.env.NODE_ENV !== "production" && console.error(dl), c;
    c.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function g() {
      d.orderedModifiers.forEach(function(y) {
        var T = y.name, P = y.options, b = P === void 0 ? {} : P, C = y.effect;
        if (typeof C == "function") {
          var O = C({
            state: d,
            name: T,
            instance: c,
            options: b
          }), k = function() {
          };
          v.push(O || k);
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
var st = {
  passive: !0
};
function Wg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, st);
  }), l && s.addEventListener("resize", r.update, st), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, st);
    }), l && s.removeEventListener("resize", r.update, st);
  };
}
const jg = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Wg,
  data: {}
};
function Gg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Bu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const qg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Gg,
  data: {}
};
var Kg = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Xg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Na(n * t) / t || 0,
    y: Na(r * t) / t || 0
  };
}
function cl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, c = f === void 0 ? 0 : f, g = i.y, w = g === void 0 ? 0 : g, y = typeof d == "function" ? d({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  c = y.x, w = y.y;
  var T = i.hasOwnProperty("x"), P = i.hasOwnProperty("y"), b = dr, C = Un, O = window;
  if (u) {
    var k = fi(r), D = "clientHeight", M = "clientWidth";
    if (k === Cn(r) && (k = hr(r), On(k).position !== "static" && l === "absolute" && (D = "scrollHeight", M = "scrollWidth")), k = k, t === Un || (t === dr || t === ha) && o === Za) {
      C = cr;
      var I = v && k === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[D]
      );
      w -= I - a.height, w *= s ? 1 : -1;
    }
    if (t === dr || (t === Un || t === cr) && o === Za) {
      b = ha;
      var B = v && k === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[M]
      );
      c -= B - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && Kg), S = d === !0 ? Xg({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  if (c = S.x, w = S.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[C] = P ? "0" : "", L[b] = T ? "0" : "", L.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + w + "px)" : "translate3d(" + c + "px, " + w + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[C] = P ? w + "px" : "", n[b] = T ? c + "px" : "", n.transform = "", n));
}
function Zg(e) {
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
    variation: Ja(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, cl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, cl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Jg = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Zg,
  data: {}
};
function Qg(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !pn(o) || !In(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function _g(e) {
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
const xg = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Qg,
  effect: _g,
  requires: ["computeStyles"]
};
var ey = [jg, qg, Jg, xg], ny = /* @__PURE__ */ Hg({
  defaultModifiers: ey
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
function ml(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function pl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ml(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ml(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Du(e) {
  var n = E(null), r = E(null), a = E(!1), t = E({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = et(() => a.value, 1), i = null, l = !1, s = !1, u = !1, d = () => {
    var {
      width: k,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: Ne(k),
      height: Ne(D)
    };
  }, v = () => {
    e.trigger === "hover" && (u = !0, C());
  }, f = /* @__PURE__ */ function() {
    var k = pl(function* () {
      e.trigger === "hover" && (u = !1, yield Mn(), !s && O());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, g = /* @__PURE__ */ function() {
    var k = pl(function* () {
      e.trigger === "hover" && (s = !1, yield Mn(), !u && O());
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
  }, P = () => {
    var {
      placement: k,
      skidding: D,
      distance: M
    } = T(), I = [Pt({}, Tg, {
      enabled: a.value
    }), Pt({}, Vg, {
      options: {
        offset: [D, M]
      }
    })];
    return {
      placement: k,
      modifiers: I
    };
  }, b = () => {
    i.setOptions(P());
  }, C = () => {
    var {
      disabled: k
    } = e;
    k || (a.value = !0, $(e["onUpdate:show"], !0));
  }, O = () => {
    a.value = !1, $(e["onUpdate:show"], !1);
  };
  return ie(() => e.show, (k) => {
    a.value = k ?? !1;
  }, {
    immediate: !0
  }), ie(() => e.offsetX, b), ie(() => e.offsetY, b), ie(() => e.placement, b), ie(() => a.value, (k) => {
    k ? (b(), $(e.onOpen)) : $(e.onClose);
  }), ie(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", y) : document.removeEventListener("click", y);
  }), ie(() => e.disabled, O), Ye(() => {
    i = ny(n.value, r.value, P()), e.trigger === "click" && document.addEventListener("click", y);
  }), mr(() => {
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
    close: O
  };
}
var {
  n: ry,
  classes: ay
} = ee("menu");
function ty(e, n) {
  return h(), V(
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
    [W(e.$slots, "default"), (h(), me(
      La,
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
          ), [[Ra, e.show]])]),
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
  name: "VarMenu",
  props: Jh,
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
    } = Du(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: ye,
      n: ry,
      classes: ay,
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
Au.render = ty;
const Fn = Au;
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var hC = Fn, zu = Symbol("SELECT_BIND_OPTION_KEY"), Lu = Symbol("SELECT_COUNT_OPTION_KEY");
function oy() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(zu), {
    length: r
  } = gn(Lu);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function iy() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(zu), {
    index: r
  } = yn(Lu);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var ly = {
  label: {},
  value: {}
}, {
  n: sy,
  classes: uy
} = ee("option");
function dy(e, n) {
  var r = le("var-checkbox"), a = je("ripple");
  return Se((h(), V(
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
var Ru = x({
  name: "VarOption",
  directives: {
    Ripple: Ae
  },
  components: {
    VarCheckbox: or
  },
  props: ly,
  setup(e) {
    var n = E(!1), r = Y(() => n.value), a = Y(() => e.label), t = Y(() => e.value), {
      select: o,
      bindSelect: i
    } = iy(), {
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
    return ie([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), i(g), {
      n: sy,
      classes: uy,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Ru.render = dy;
const Ur = Ru;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var gC = Ur, vy = {
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
function fy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Vt(e);
}
var {
  n: hl
} = ee("overlay");
const Yr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: vy,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = et(() => e.show, 1), {
      disabled: o
    } = Jo(), i = () => {
      $(e.onClick), $(e["onUpdate:show"], !1);
    };
    Nt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: hl(),
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
        name: hl("--fade")
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
        return re(La, {
          to: u,
          disabled: o.value
        }, fy(d = s()) ? d : {
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
var yC = Yr, cy = {
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
  n: my,
  classes: py
} = ee("pagination"), hy = ["item-mode", "onClick"];
function gy(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), i = je("ripple");
  return h(), V(
    "ul",
    {
      class: m(e.n())
    },
    [Se((h(), V(
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
    }]]), e.simple ? (h(), V(
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
          onKeydown: n[3] || (n[3] = yi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
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
    )) : (h(!0), V(
      Oe,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => Se((h(), V(
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
        hy
      )), [[i, {
        disabled: e.disabled
      }]])),
      128
      /* KEYED_FRAGMENT */
    )), Se((h(), V(
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
    }]]), e.showSizeChanger ? (h(), V(
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
          menu: ve(() => [(h(!0), V(
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (h(), V(
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
          onKeydown: n[9] || (n[9] = yi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : _("v-if", !0), e.totalText ? (h(), V(
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
var Uu = x({
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: ur
  },
  directives: {
    Ripple: Ae
  },
  props: cy,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), o = E(!1), i = E(z(e.current) || 1), l = E(z(e.size) || 10), s = E([]), u = Y(() => Math.ceil(e.maxPagerCount / 2)), d = Y(() => Math.ceil(z(e.total) / z(l.value))), v = Y(() => {
      var C = l.value * (i.value - 1) + 1, O = Math.min(l.value * i.value, z(e.total));
      return [C, O];
    }), f = Y(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (C, O) => an(C) ? !1 : O === 1 ? t.value : o.value, g = (C, O) => an(C) ? "basic" : O === 1 ? "head" : "tail", w = (C, O) => {
      C === i.value || e.disabled || (an(C) ? i.value = C : C === "prev" ? i.value > 1 && (i.value -= 1) : C === "next" ? i.value < d.value && (i.value += 1) : C === "..." && (O === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, y = () => {
      e.disabled || (n.value = !0);
    }, T = (C) => {
      l.value = C, n.value = !1;
    }, P = (C) => {
      var O = /^[1-9][0-9]*$/;
      return O.test(C);
    }, b = (C, O, k) => {
      if (k.target.blur(), P(O)) {
        var D = z(O);
        D > d.value && (D = d.value, a.value = "" + D), D !== i.value && (i.value = D);
      }
      C === "quick" && (r.value = ""), C === "simple" && !P(O) && (a.value = "" + i.value);
    };
    return ie([() => e.current, () => e.size], (C) => {
      var [O, k] = C;
      i.value = z(O) || 1, l.value = z(k || 10);
    }), ie([i, l, d], (C, O) => {
      var [k, D, M] = C, [I, B] = O, p = [], {
        maxPagerCount: S,
        total: L,
        onChange: Q
      } = e, F = Math.ceil(z(L) / z(B)), R = M - (S - u.value) - 1;
      if (a.value = "" + k, M - 2 > S) {
        if (I === void 0 || M !== F)
          for (var J = 2; J < S + 2; J++)
            p.push(J);
        if (k <= S && k < R) {
          p = [];
          for (var j = 1; j < S + 1; j++)
            p.push(j + 1);
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
      s.value = p, I !== void 0 && M > 0 && $(Q, k, D), $(e["onUpdate:current"], k), $(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: my,
      classes: py,
      pack: He,
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
Uu.render = gy;
const Fr = Uu;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var bC = Fr, yy = {
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
  n: by,
  classes: wy
} = ee("paper");
function Cy(e, n) {
  var r = je("ripple");
  return Se((h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("$-elevation--" + e.elevation), [e.onClick, e.n("--cursor")], [e.round, e.n("--round")], [e.inline, e.n("$--inline-flex")])),
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
var Yu = x({
  name: "VarPaper",
  directives: {
    Ripple: Ae
  },
  props: yy,
  setup(e) {
    var n = (r) => {
      $(e.onClick, r);
    };
    return {
      n: by,
      classes: wy,
      toSizeUnit: ye,
      handleClick: n
    };
  }
});
Yu.render = Cy;
const Hr = Yu;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var wC = Hr;
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
var Sy = Lo({
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
}, Ke(xa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: ky,
  classes: $y
} = ee("picker"), gl = 300, Ty = 15, yl = 0, Py = ["onTouchstart", "onTouchmove", "onTouchend"], Oy = ["onTransitionend"];
function Vy(e, n) {
  var r = le("var-button");
  return h(), me(
    Ua(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ve(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [e.toolbar ? (h(), V(
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
          [(h(!0), V(
            Oe,
            null,
            Be(e.scrollColumns, (a) => (h(), V(
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
                [(h(!0), V(
                  Oe,
                  null,
                  Be(a.column.texts, (t) => (h(), V(
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
                Oy
              )],
              42,
              Py
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
var Fu = x({
  name: "VarPicker",
  components: {
    VarButton: xe,
    VarPopup: mn
  },
  inheritAttrs: !1,
  props: Sy,
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
      var F = t.value - d(p, S) * r.value;
      F === p.translate && (p.scrolling = !1, !Q && D(p)), p.translate = F, p.duration = L;
    }, g = (p, S, L) => {
      p.translate += Math.abs(S / L) / 3e-3 * (S < 0 ? -1 : 1);
    }, w = (p, S) => {
      S.touching = !0, S.scrolling = !1, S.duration = 0, S.translate = qt(S.scrollEl);
    }, y = (p, S) => {
      if (S.touching) {
        var {
          clientY: L
        } = p.touches[0], Q = S.prevY !== void 0 ? L - S.prevY : 0;
        S.prevY = L, S.translate += Q, u(S);
        var F = performance.now();
        F - S.momentumTime > gl && (S.momentumTime = F, S.momentumPrevY = S.translate);
      }
    }, T = (p, S) => {
      S.touching = !1, S.scrolling = !0, S.prevY = void 0;
      var L = S.translate - S.momentumPrevY, Q = performance.now() - S.momentumTime, F = Math.abs(L) >= Ty && Q <= gl;
      F && g(S, L, Q), S.index = v(S), c(S, S.index, F ? 1e3 : 200);
    }, P = (p) => {
      p.scrolling = !1, D(p);
    }, b = (p) => p.map((S, L) => {
      var Q, F = we(S) ? {
        texts: S
      } : S, R = {
        id: yl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Q = F.initialIndex) != null ? Q : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: F,
        scrollEl: null,
        scrolling: !1
      };
      return c(R, R.index, 0, !0), R;
    }), C = (p) => {
      var S = [];
      return O(S, p, 0, !0), S;
    }, O = function(p, S, L, Q) {
      if (Q === void 0 && (Q = !1), we(S) && S.length) {
        var F, R = Q && (F = e.cascadeInitialIndexes[p.length]) != null ? F : 0, J = {
          id: yl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: R,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: S.map((j) => j[e.textKey])
          },
          columns: S,
          scrollEl: null,
          scrolling: !1
        };
        p.push(J), c(J, J.index, 0, !0), O(p, J.columns[J.index].children, L + 1, Q);
      }
    }, k = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), O(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, D = (p) => {
      var {
        cascade: S,
        onChange: L
      } = e;
      S && k(p);
      var Q = n.value.some((j) => j.scrolling);
      if (!Q) {
        var {
          texts: F,
          indexes: R
        } = f(), J = R.every((j, K) => j === i[K]);
        J || (i = [...R], $(L, F, R));
      }
    }, M = () => {
      if (e.cascade) {
        var p = n.value.find((S) => S.scrolling);
        p && (p.translate = qt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, k(p));
      } else
        n.value.forEach((S) => {
          S.translate = qt(S.scrollEl), S.index = v(S), c(S, S.index, 0);
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
    return ie(() => e.columns, (p) => {
      n.value = e.cascade ? C(bi(p)) : b(bi(p));
      var {
        indexes: S
      } = f();
      i = [...S];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: ky,
      classes: $y,
      pack: He,
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
      handleTransitionend: P,
      confirm: I,
      cancel: B,
      dt: Et
    };
  }
});
Fu.render = Vy;
const vr = Fu;
var nn;
function ya(e) {
  return new Promise((n) => {
    ya.close();
    var r = we(e) ? {
      columns: e
    } : e, a = Me(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = Ya(vr, a, {
      onConfirm: (o, i) => {
        $(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onCancel: (o, i) => {
        $(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, nn === a && (nn = null);
      },
      onClose: () => {
        $(a.onClose), n({
          state: "close"
        }), nn === a && (nn = null);
      },
      onClosed: () => {
        $(a.onClosed), t(), nn === a && (nn = null);
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
ya.Component = vr;
ya.install = function(e) {
  e.component(vr.name, vr);
};
ya.close = () => {
  if (nn != null) {
    var e = nn;
    nn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
var CC = vr;
function My(e) {
  return ["linear", "circle"].includes(e);
}
var Ey = {
  mode: {
    type: String,
    default: "linear",
    validator: My
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
  n: Iy,
  classes: By
} = ee("progress"), Ny = ["viewBox"], Dy = ["cx", "cy", "r", "stroke-width"], Ay = ["cx", "cy", "r", "stroke-width"];
function zy(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (h(), V(
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
        [e.track ? (h(), V(
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
      ), e.label ? (h(), V(
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
    )) : _("v-if", !0), e.mode === "circle" ? (h(), V(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: q({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), V(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: q({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), V(
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
          Dy
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
          Ay
        )],
        14,
        Ny
      )), e.label ? (h(), V(
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
var Hu = x({
  name: "VarProgress",
  props: Ey,
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
      n: Iy,
      classes: By,
      toSizeUnit: ye,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
Hu.render = zy;
const Wr = Hu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var SC = Wr, Ly = {
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
function bl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ry(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        bl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        bl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: wl,
  classes: Uy
} = ee("pull-refresh"), Cl = 150;
function Yy(e, n) {
  var r = le("var-icon");
  return h(), V(
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
var Wu = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Ly,
  setup(e) {
    var n, r, a = E(0), t = E(null), o = E(null), i = E(0), l = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = 0, f = 0, c = E(!0), g = Y(() => u.value !== "loading" && u.value !== "success" && !e.disabled), w = Y(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: T.value ? e.successBgColor : e.bgColor,
      color: T.value ? e.successColor : e.color
    })), y = Y(() => Math.abs(2 * a.value)), T = Y(() => u.value === "success"), P = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, Cl);
    }), b = (I) => {
      var B = "classList" in n ? n : document.body;
      B.classList[I](wl() + "--lock");
    }, C = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, O = (I) => {
      if (g.value) {
        var B = It(n);
        if (!(B > 0)) {
          var p = B === 0, S = I.touches[0];
          f = S.clientY - v, p && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = I.touches[0].clientY), p && l.value > a.value && b("add");
          var L = (I.touches[0].clientY - i.value) / 2 + a.value;
          l.value = L >= y.value ? y.value : L, l.value >= y.value * 0.2 ? (c.value = !1, s.value = "refresh", r = P()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var I = Ry(function* () {
        g.value && (d.value = !0, l.value >= y.value * 0.2 ? (yield r, u.value = "loading", l.value = y.value * 0.3, $(e["onUpdate:modelValue"], !0), $(e.onRefresh), b("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, b("remove");
        }, z(e.animationDuration))));
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), D = () => {
      var {
        width: I
      } = o.value.getBoundingClientRect();
      l.value = -(I + I * 0.25), a.value = -(I + I * 0.25);
    }, M = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return ie(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, M();
      }, z(e.successDuration)));
    }), Ye(() => {
      var I;
      n = e.target ? Rl(e.target, "PullRefresh") : Ca(t.value), D(), (I = t.value) == null || I.addEventListener("touchmove", O, {
        passive: !1
      });
    }), Ot(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", O);
    }), {
      n: wl,
      classes: Uy,
      iconHasChanged: c,
      ICON_TRANSITION: Cl,
      refreshStatus: u,
      freshNode: t,
      controlNode: o,
      touchStart: C,
      touchMove: O,
      touchEnd: k,
      iconName: s,
      controlStyle: w,
      isSuccess: T
    };
  }
});
Wu.render = Yy;
const jr = Wu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var kC = jr, Fy = {
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
}, ju = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Gu = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Hy() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ju), {
    length: r
  } = gn(Gu);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Wy() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(ju), {
    index: r
  } = yn(Gu);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: jy,
  classes: Gy
} = ee("radio");
function qy(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = je("ripple");
  return h(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Se((h(), V(
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
var qu = x({
  name: "VarRadio",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  inheritAttrs: !1,
  props: Fy,
  setup(e) {
    var n = E(!1), r = Y(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = Wy(), {
      form: i,
      bindForm: l
    } = wn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = bn(), f = (C) => {
      Ee(() => {
        var {
          validateTrigger: O,
          rules: k,
          modelValue: D
        } = e;
        u(O, C, k, D);
      });
    }, c = (C) => {
      var {
        checkedValue: O,
        onChange: k
      } = e;
      t && n.value === O || (n.value = C, $(e["onUpdate:modelValue"], n.value), $(k, n.value), t == null || t.onToggle(O), f("onChange"));
    }, g = (C) => {
      var {
        disabled: O,
        readonly: k,
        uncheckedValue: D,
        checkedValue: M,
        onClick: I
      } = e;
      i != null && i.disabled.value || O || ($(I, C), !(i != null && i.readonly.value || k) && (a.value = !0, c(r.value ? D : M)));
    }, w = (C) => {
      var {
        checkedValue: O,
        uncheckedValue: k
      } = e;
      n.value = C === O ? O : k;
    }, y = () => {
      $(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), P = (C) => {
      var {
        uncheckedValue: O,
        checkedValue: k
      } = e, D = ![O, k].includes(C);
      D && (C = r.value ? O : k), c(C);
    };
    ie(() => e.modelValue, (C) => {
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
      n: jy,
      classes: Gy,
      handleClick: g,
      toggle: P,
      reset: y,
      validate: T,
      resetValidation: v
    };
  }
});
qu.render = qy;
const Gr = qu;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var $C = Gr;
function Ky(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Xy = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Ky
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
  n: Zy,
  classes: Jy
} = ee("radio-group");
function Qy(e, n) {
  var r = le("var-form-details");
  return h(), V(
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
var Ku = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: Xy,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Hy(), {
      bindForm: t
    } = wn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = bn(), u = Y(() => o.value), d = (y) => {
      Ee(() => {
        var {
          validateTrigger: T,
          rules: P,
          modelValue: b
        } = e;
        i(T, y, P, b);
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
    ie(() => e.modelValue, v), ie(() => n.value, v);
    var w = {
      onToggle: f,
      validate: c,
      reset: g,
      resetValidation: s,
      errorMessage: u
    };
    return $(t, w), a(w), {
      errorMessage: o,
      n: Zy,
      classes: Jy,
      reset: g,
      validate: c,
      resetValidation: s
    };
  }
});
Ku.render = Qy;
const qr = Ku;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var TC = qr, _y = {
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
  n: Ha
} = ee("rate"), xy = ["onClick"];
function e0(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = je("ripple");
  return h(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [(h(!0), V(
        Oe,
        null,
        Be(e.toNumber(e.count), (o) => Se((h(), V(
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
          xy
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
var Xu = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Ae
  },
  props: _y,
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
        gap: P
      } = e;
      return {
        color: u(y).color,
        marginRight: y !== z(T) ? ye(P) : 0
      };
    }, s = (y) => {
      var {
        name: T,
        color: P
      } = u(y);
      return {
        [Ha("content")]: !0,
        [Ha("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ha("--error")]: a.value,
        [Ha("--primary")]: T !== e.emptyIcon && !P
      };
    }, u = (y) => {
      var {
        modelValue: T,
        disabled: P,
        disabledColor: b,
        color: C,
        half: O,
        emptyColor: k,
        icon: D,
        halfIcon: M,
        emptyIcon: I
      } = e, B = C;
      return (P || n != null && n.disabled.value) && (B = b), y <= z(T) ? {
        color: B,
        name: D
      } : O && y <= z(T) + 0.5 ? {
        color: B,
        name: M
      } : {
        color: P || n != null && n.disabled.value ? b : k,
        name: I
      };
    }, d = (y, T) => {
      if (e.half) {
        var {
          offsetWidth: P
        } = T.target;
        T.offsetX <= Math.floor(P / 2) && (y -= 0.5);
      }
      $(e["onUpdate:modelValue"], y);
    }, v = () => o(e.rules, z(e.modelValue)), f = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (y, T) => {
      var {
        readonly: P,
        disabled: b,
        onChange: C
      } = e;
      P || b || n != null && n.disabled.value || n != null && n.readonly.value || (d(y, T), $(C, y), f());
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
      toSizeUnit: ye,
      toNumber: z,
      n: Ha
    };
  }
});
Xu.render = e0;
const Kr = Xu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var PC = Kr;
function n0(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var r0 = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: n0
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
}, a0 = (e) => (ba(""), e = e(), wa(), e), t0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, o0 = /* @__PURE__ */ a0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), i0 = [o0];
function l0(e, n) {
  return h(), V("svg", t0, i0);
}
var Zu = x({});
Zu.render = l0;
const s0 = Zu;
var u0 = (e) => (ba(""), e = e(), wa(), e), d0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, v0 = /* @__PURE__ */ u0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), f0 = [v0];
function c0(e, n) {
  return h(), V("svg", d0, f0);
}
var Ju = x({});
Ju.render = c0;
const m0 = Ju;
var p0 = (e) => (ba(""), e = e(), wa(), e), h0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, g0 = /* @__PURE__ */ p0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), y0 = [g0];
function b0(e, n) {
  return h(), V("svg", h0, y0);
}
var Qu = x({});
Qu.render = b0;
const w0 = Qu;
var {
  n: C0,
  classes: S0
} = ee("result");
function k0(e, n) {
  return h(), V(
    Oe,
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
var _u = x({
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
      n: C0,
      classes: S0,
      toNumber: z
    };
  }
});
_u.render = k0;
const $0 = _u;
var T0 = (e) => (ba(""), e = e(), wa(), e), P0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, O0 = /* @__PURE__ */ T0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), V0 = [O0];
function M0(e, n) {
  return h(), V("svg", P0, V0);
}
var xu = x({});
xu.render = M0;
const E0 = xu;
var I0 = (e) => (ba(""), e = e(), wa(), e), B0 = {
  viewBox: "-4 -4 32 32"
}, N0 = /* @__PURE__ */ I0(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), D0 = [N0];
function A0(e, n) {
  return h(), V("svg", B0, D0);
}
var ed = x({});
ed.render = A0;
const z0 = ed;
var {
  n: L0,
  classes: R0
} = ee("result");
function U0(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [W(e.$slots, "image", {}, () => [e.type ? (h(), V(
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
        [(h(), me(
          Ua(e.type),
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
    )) : _("v-if", !0)]), W(e.$slots, "title", {}, () => [e.title ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), W(e.$slots, "description", {}, () => [e.description ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), e.$slots.footer ? (h(), V(
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
var nd = x({
  name: "VarResult",
  components: {
    Info: s0,
    Success: $0,
    Warning: w0,
    Error: m0,
    Question: E0,
    Empty: z0
  },
  props: r0,
  setup(e) {
    var n = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: L0,
      classes: R0,
      toNumber: z,
      toPxNum: Ne,
      toSizeUnit: ye,
      circleSize: n,
      borderSize: r
    };
  }
});
nd.render = U0;
const Xr = nd;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var OC = Xr;
function Y0(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function F0(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var H0 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Y0
  },
  align: {
    type: String,
    default: "flex-start",
    validator: F0
  },
  onClick: U()
}, {
  n: W0,
  classes: j0
} = ee("row");
function G0(e, n) {
  return h(), V(
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
var rd = x({
  name: "VarRow",
  props: H0,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = cc(), t = Y(() => {
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
    return ie(() => a.value, o), ie(() => e.gutter, o), r(l), {
      n: W0,
      classes: j0,
      average: t,
      handleClick: i
    };
  }
});
rd.render = G0;
const Zr = rd;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var VC = Zr;
function q0(e) {
  return ["left", "right", "center"].includes(e);
}
var K0 = {
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
    validator: q0
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
  n: Qt,
  classes: X0
} = ee("select"), Z0 = {
  key: 1
};
function J0(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), o = le("var-form-details");
  return h(), V(
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
            "onUpdate:show": n[1] || (n[1] = (i) => e.isFocus = i),
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
                }, () => [e.multiple ? (h(), V(
                  Oe,
                  {
                    key: 0
                  },
                  [e.chip ? (h(), V(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(h(!0), V(
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
                  )) : (h(), V(
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
                )) : (h(), V(
                  "span",
                  Z0,
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
        [W(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
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
    ), e.line ? (h(), V(
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
var ad = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: ir,
    VarFormDetails: We
  },
  props: K0,
  setup(e) {
    var n = E(null), r = E(!1), a = Y(() => e.multiple), t = Y(() => e.focusColor), o = E(""), i = E([]), l = Y(() => Nn(e.modelValue)), s = E("0px"), u = E(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: g
    } = oy(), {
      errorMessage: w,
      validateWithTrigger: y,
      validate: T,
      // expose
      resetValidation: P
    } = bn(), b = E(null), C = () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H) {
        var ae = Z;
        i.value = ae.map(D);
      }
      !H && !Nn(Z) && (o.value = D(Z)), !H && Nn(Z) && (o.value = "");
    }, O = (H) => {
      Ee(() => {
        var {
          validateTrigger: Z,
          rules: ae,
          modelValue: oe
        } = e;
        y(Z, H, ae, oe);
      });
    }, k = (H) => {
      var {
        value: Z,
        label: ae
      } = H;
      return Z.value != null ? Z.value : ae.value;
    }, D = (H) => {
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
    }, M = () => {
      var {
        hint: H,
        modelValue: Z
      } = e;
      if (!H && !Nn(Z))
        return Qt("--placeholder-hidden");
      if (H && (!Nn(Z) || r.value))
        return Qt("--placeholder-hint");
    }, I = () => n.value && window.getComputedStyle(n.value).width || "0px", B = () => {
      var {
        disabled: H,
        readonly: Z,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || (s.value = I(), u.value = Ne(e.offsetY), r.value = !0, $(ae), O("onFocus"));
    }, p = () => {
      var {
        disabled: H,
        readonly: Z,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || H || Z || ($(ae), O("onBlur"));
    }, S = (H) => {
      var {
        disabled: Z,
        readonly: ae,
        multiple: oe,
        onChange: he
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe ? c.filter((Fe) => {
          var {
            selected: en
          } = Fe;
          return en.value;
        }).map(k) : k(H);
        $(e["onUpdate:modelValue"], pe), $(he, pe), O("onChange"), !oe && (r.value = !1);
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
        $(e["onUpdate:modelValue"], pe), $(he, pe), O("onClear");
      }
    }, Q = (H) => {
      var {
        disabled: Z,
        onClick: ae
      } = e;
      v != null && v.disabled.value || Z || ($(ae, H), O("onClick"));
    }, F = (H) => {
      var {
        disabled: Z,
        readonly: ae,
        modelValue: oe,
        onClose: he
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var pe = oe, Fe = c.find((on) => {
          var {
            label: ze
          } = on;
          return ze.value === H;
        }), en = pe.filter((on) => {
          var ze;
          return on !== ((ze = Fe.value.value) != null ? ze : Fe.label.value);
        });
        $(e["onUpdate:modelValue"], en), $(he, en), O("onClose");
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
      C();
    }, J = () => {
      s.value = I(), u.value = Ne(e.offsetY), r.value = !0;
    }, j = () => {
      r.value = !1;
    }, K = () => T(e.rules, e.modelValue), N = () => {
      $(e["onUpdate:modelValue"], e.multiple ? [] : void 0), P();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: H,
        modelValue: Z
      } = e;
      if (H && !we(Z))
        throw Error("The modelValue must be an array when multiple is true");
    }), ie(() => e.modelValue, R, {
      deep: !0
    }), ie(() => f.value, R);
    var X = {
      wrapWidth: Y(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: S,
      reset: N,
      validate: K,
      resetValidation: P
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
      n: Qt,
      classes: X0,
      computePlaceholderState: M,
      handleFocus: B,
      handleBlur: p,
      handleClear: L,
      handleClick: Q,
      handleClose: F,
      reset: N,
      validate: K,
      resetValidation: P,
      focus: J,
      blur: j
    };
  }
});
ad.render = J0;
const Jr = ad;
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var MC = Jr, Q0 = {
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
  n: _0,
  classes: x0
} = ee("skeleton");
function eb(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? _("v-if", !0) : (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [W(e.$slots, "default")],
      2
      /* CLASS */
    )), e.loading && !e.fullscreen ? (h(), V(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (h(), V(
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
      )) : _("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), V(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (h(), V(
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
        )) : _("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), V(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (h(), V(
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
          )) : _("v-if", !0), (h(!0), V(
            Oe,
            null,
            Be(e.toNumber(e.rows), (r, a) => (h(), V(
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
    )) : _("v-if", !0), e.loading && e.fullscreen ? (h(), V(
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
var td = x({
  name: "VarSkeleton",
  props: Q0,
  setup() {
    return {
      n: _0,
      classes: x0,
      toSizeUnit: ye,
      toNumber: z
    };
  }
});
td.render = eb;
const Qr = td;
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var EC = Qr;
function nb(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var rb = {
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
    validator: nb
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
  n: Sl,
  classes: ab
} = ee("slider"), tb = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function ob(e, n) {
  var r = le("var-form-details");
  return h(), V(
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
      ), (h(!0), V(
        Oe,
        null,
        Be(e.thumbList, (a) => (h(), V(
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
          tb
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
var od = x({
  name: "VarSlider",
  components: {
    VarFormDetails: We
  },
  props: rb,
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
    }), g = Y(() => z(e.max) - z(e.min)), w = Y(() => v.value / g.value * z(e.step)), y = Y(() => {
      var {
        modelValue: j,
        range: K
      } = e, N = [];
      return K && we(j) ? N = [{
        value: O(j[0]),
        enumValue: Ie.First,
        text: k(j[0])
      }, {
        value: O(j[1]),
        enumValue: Ie.Second,
        text: k(j[1])
      }] : an(j) && (N = [{
        value: O(j),
        enumValue: Ie.First,
        text: k(j)
      }]), N;
    }), T = Y(() => {
      var {
        activeColor: j,
        range: K,
        modelValue: N
      } = e, X = K && we(N) ? O(Math.min(N[0], N[1])) : 0, H = K && we(N) ? O(Math.max(N[0], N[1])) - X : O(N);
      return {
        width: H + "%",
        left: X + "%",
        background: j
      };
    }), P = Y(() => e.disabled || (r == null ? void 0 : r.disabled.value)), b = Y(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[j].active, O = (j) => {
      var {
        min: K,
        max: N
      } = e;
      return j < z(K) ? 0 : j > z(N) ? 100 : (j - z(K)) / g.value * 100;
    }, k = (j) => {
      if (!an(j))
        return 0;
      var K = j;
      K < Number(e.min) && (K = Number(e.min)), K > Number(e.max) && (K = Number(e.max));
      var N = parseInt("" + K, 10) === K;
      return N ? K : z(K.toPrecision(5));
    }, D = (j, K) => {
      var N = [], {
        step: X,
        range: H,
        modelValue: Z,
        onChange: ae,
        min: oe
      } = e, he = z(X), pe = Math.round(j / w.value), Fe = pe * he + z(oe), en = c[K].percentValue * he + z(oe);
      if (c[K].percentValue = pe, H && we(Z) && (N = K === Ie.First ? [Fe, Z[1]] : [Z[0], Fe]), en !== Fe) {
        var on = H ? N.map((ze) => k(ze)) : k(Fe);
        $(ae, on), $(e["onUpdate:modelValue"], on), u();
      }
    }, M = (j) => {
      if (!e.range)
        return Ie.First;
      var K = c[Ie.First].percentValue * w.value, N = c[Ie.Second].percentValue * w.value, X = Math.abs(j - K), H = Math.abs(j - N);
      return X <= H ? Ie.First : Ie.Second;
    }, I = (j, K) => {
      v.value || (v.value = d.value.offsetWidth), !(P.value || b.value) && ($(e.onStart), f.value = !0, c[K].startPosition = j.touches[0].clientX);
    }, B = (j, K) => {
      if (!(P.value || b.value || !f.value)) {
        var N = j.touches[0].clientX - c[K].startPosition + c[K].currentLeft;
        c[K].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), D(N, K);
      }
    }, p = (j) => {
      var {
        range: K,
        modelValue: N,
        onEnd: X,
        step: H,
        min: Z
      } = e;
      if (!(P.value || b.value)) {
        var ae = [];
        c[j].currentLeft = c[j].percentValue * w.value, c[j].active = !1;
        var oe = c[j].percentValue * z(H) + z(Z);
        K && we(N) && (ae = j === Ie.First ? [oe, N[1]] : [N[0], oe]), $(X, K ? ae : oe), f.value = !1;
      }
    }, S = (j) => {
      if (!(P.value || b.value) && !j.target.closest("." + Sl("thumb"))) {
        var K = j.clientX - _d(j.currentTarget), N = M(K);
        D(K, N), p(N);
      }
    }, L = () => {
      var j = z(e.step);
      return isNaN(j) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : j < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Q = () => {
      var {
        range: j,
        modelValue: K
      } = e;
      return j && !we(K) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && we(K) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && we(K) && K.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, F = function(j, K) {
      j === void 0 && (j = e.modelValue), K === void 0 && (K = z(e.step));
      var N = (X) => {
        var {
          min: H,
          max: Z
        } = e;
        return X < z(H) ? 0 : X > z(Z) ? g.value / K : (X - z(H)) / K;
      };
      e.range && we(j) ? (c[Ie.First].percentValue = N(j[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * w.value, c[Ie.Second].percentValue = N(j[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * w.value) : an(j) && (c[Ie.First].currentLeft = N(j) * w.value);
    }, R = () => {
      var j = e.range ? [0, 0] : 0;
      $(e["onUpdate:modelValue"], j), i();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: i
    };
    return $(n, J), ie([() => e.modelValue, () => e.step], (j) => {
      var [K, N] = j;
      !L() || !Q() || f.value || F(K, z(N));
    }), ie(v, () => F()), Ye(() => {
      !L() || !Q() || (v.value = d.value.offsetWidth);
    }), {
      n: Sl,
      classes: ab,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: P,
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
od.render = ob;
const _r = od;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var IC = _r;
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
function ib(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function lb(e) {
  return ci.includes(e);
}
var id = {
  type: {
    type: String,
    validator: lb
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: ib
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
  loadingColor: Ro({}, Ke(xn, "color"), {
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
  n: sb,
  classes: ub
} = ee("snackbar"), db = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function vb(e, n) {
  var r = le("var-icon"), a = le("var-loading");
  return Se((h(), V(
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
        )) : _("v-if", !0), W(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[Ra, e.show]]);
}
var ld = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: id,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = et(() => e.show, 1);
    Nt(() => e.show, () => e.lockScroll);
    var a = Y(() => e.type === "loading" || e.forbidClick), t = Y(() => e.type ? db[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && $(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return ie(() => e.show, (i) => {
      i ? ($(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), $(e.onClose));
    }), ie(() => e._update, () => {
      clearTimeout(n.value), o();
    }), Ye(() => {
      e.show && ($(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: ci,
      n: sb,
      classes: ub,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
ld.render = vb;
const sd = ld;
var {
  n: fb
} = ee("snackbar");
function cb(e, n) {
  var r = le("var-snackbar-core");
  return h(), me(
    La,
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
var ud = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: sd
  },
  props: id,
  setup() {
    var {
      disabled: e
    } = Jo();
    return {
      n: fb,
      disabled: e
    };
  }
});
ud.render = cb;
const xr = ud;
function Qa() {
  return Qa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Qa.apply(this, arguments);
}
function mb(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Vt(e);
}
var ci = ["loading", "success", "warning", "info", "error"], kl = 0, Uo = !1, dd, Aa = !1, vd = {
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
}, hn = Me([]), mi = vd, pb = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, hb = {
  setup() {
    return () => {
      var e = hn.map((n) => {
        var {
          id: r,
          reactiveSnackOptions: a,
          _update: t
        } = n, o = document.querySelector(".var-transition-group");
        a.forbidClick || a.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Aa && (a.position = "top");
        var i = Aa ? "relative" : "absolute", l = Qa({
          position: i
        }, Sb(a.position));
        return re(sd, Ve(a, {
          key: r,
          style: l,
          "data-id": r,
          _update: t,
          show: a.show,
          "onUpdate:show": (s) => a.show = s
        }), null);
      });
      return re(jd, Ve(pb, {
        style: {
          zIndex: sn.zIndex
        },
        onAfterEnter: gb,
        onAfterLeave: yb
      }), mb(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Wn = function(e) {
  var n = wb(e), r = Me(Qa({}, mi, n));
  r.show = !0, Uo || (Uo = !0, dd = Ya(hb).unmountInstance);
  var {
    length: a
  } = hn, t = {
    id: kl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Aa)
    bb(t);
  else {
    var o = "update-" + kl;
    Cb(r, o);
  }
  return {
    clear() {
      !Aa && hn.length ? hn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
ci.forEach((e) => {
  Wn[e] = (n) => (qo(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Wn(n));
});
Wn.install = function(e) {
  e.component(xr.name, xr);
};
Wn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Aa && (hn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Aa = e);
};
Wn.clear = function() {
  hn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Wn.setDefaultOptions = function(e) {
  mi = e;
};
Wn.resetDefaultOptions = function() {
  mi = vd;
};
Wn.Component = xr;
function gb(e) {
  var n = e.getAttribute("data-id"), r = hn.find((a) => a.id === z(n));
  r && $(r.reactiveSnackOptions.onOpened);
}
function yb(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = hn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, $(r.reactiveSnackOptions.onClosed));
  var a = hn.every((t) => t.animationEnd);
  a && ($(dd), hn = Me([]), Uo = !1);
}
function bb(e) {
  hn.push(e);
}
function wb(e) {
  return e === void 0 && (e = {}), Xe(e) ? {
    content: e
  } : e;
}
function Cb(e, n) {
  var [r] = hn;
  r.reactiveSnackOptions = Qa({}, r.reactiveSnackOptions, e), r._update = n;
}
function Sb(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
xr.install = function(e) {
  e.component(xr.name, xr);
};
var BC = xr;
const Yo = Wn;
var fd = (e) => ["mini", "small", "normal", "large"].includes(e), kb = (e) => fd(e) || we(e) || an(e) || Xe(e), $b = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), Tb = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: kb
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
    validator: $b
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function ln(e) {
  return "calc(" + e + " / 2)";
}
function Pb(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? o !== i ? l = ln(e) + " " + n + " " + ln(e) + " 0" : l = ln(e) + " 0" : t === "space-around" ? l = ln(e) + " " + ln(n) : t === "space-between" && (o === 0 ? l = ln(e) + " " + ln(n) + " " + ln(e) + " 0" : o === i ? l = ln(e) + " 0 " + ln(e) + " " + ln(n) : l = ln(e) + " " + ln(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: _t,
  classes: Ob
} = ee("space");
const ea = x({
  name: "VarSpace",
  props: Tb,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (o, i) => i ? ["var(--space-size-" + o + "-y)", "var(--space-size-" + o + "-x)"] : we(o) ? o.map(ye) : [ye(o), ye(o)], t = (o) => o === "start" || o === "end" ? "flex-" + o : o;
    return () => {
      var o, {
        inline: i,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (o = $(r.default)) != null ? o : [], c = fd(v), [g, w] = a(v, c), y = (b) => {
        var C = [];
        return b.forEach((O) => {
          if (O.type !== Gd) {
            if (O.type === Oe && we(O.children)) {
              O.children.forEach((k) => {
                C.push(k);
              });
              return;
            }
            C.push(O);
          }
        }), C;
      };
      f = y(f);
      var T = f.length - 1, P = f.map((b, C) => {
        var O = Pb(g, w, {
          direction: d,
          justify: l,
          index: C,
          lastIndex: T
        });
        return re("div", {
          style: {
            margin: O
          }
        }, [b]);
      });
      return re("div", {
        class: Ob(_t(), _t("$--box"), [i, _t("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + g + " / 2) 0" : void 0
        }
      }, [P]);
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var NC = ea, Vb = {
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
}, cd = Symbol("STEPS_BIND_STEP_KEY"), md = Symbol("STEPS_COUNT_STEP_KEY");
function Mb() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(cd), {
    length: r
  } = gn(md);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Eb() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(cd), {
    index: r
  } = yn(md);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Ib,
  classes: Bb
} = ee("step"), Nb = {
  key: 3
};
function Db(e, n) {
  var r = le("var-icon");
  return h(), V(
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
          )) : (h(), V(
            "span",
            Nb,
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
      ), e.isLastChild ? _("v-if", !0) : (h(), V(
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
var pd = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: Vb,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Eb(), {
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
    return o(g), ie(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var P = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + P + "px";
      }
    }), {
      n: Ib,
      classes: Bb,
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
pd.render = Db;
const na = pd;
na.install = function(e) {
  e.component(na.name, na);
};
var DC = na;
function Ab(e) {
  return ["horizontal", "vertical"].includes(e);
}
var zb = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Ab
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Lb
} = ee("steps");
function Rb(e, n) {
  return h(), V(
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
var hd = x({
  name: "VarSteps",
  props: zb,
  setup(e) {
    var n = Y(() => e.active), r = Y(() => e.activeColor), a = Y(() => e.inactiveColor), t = Y(() => e.direction), {
      length: o,
      bindStep: i
    } = Mb(), l = (u) => {
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
      n: Lb
    };
  }
});
hd.render = Rb;
const ra = hd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var AC = ra, Ub = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Yb
} = ee("style-provider"), Fb = x({
  name: "VarStyleProvider",
  props: Ub,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Nl(e.tag, {
      class: Yb(),
      style: Hl(e.styleVars)
    }, $(r.default));
  }
});
const aa = Fb;
var xt = [];
function _a(e) {
  xt.forEach((r) => document.documentElement.style.removeProperty(r)), xt.length = 0;
  var n = Hl(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), xt.push(a);
  });
}
_a.Component = aa;
aa.install = function(e) {
  e.component(aa.name, aa);
};
_a.install = function(e) {
  e.component(aa.name, aa);
};
var zC = aa, Hb = {
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
  n: Wb,
  classes: jb
} = ee("switch");
function Gb(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = je("ripple");
  return h(), V(
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
      ), Se((h(), V(
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
var gd = x({
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: We
  },
  directives: {
    Ripple: Ae
  },
  props: Hb,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = wn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = bn(), l = () => o(e.rules, e.modelValue), s = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = Y(() => {
      var {
        size: g,
        modelValue: w,
        color: y,
        closeColor: T,
        loadingColor: P,
        activeValue: b
      } = e;
      return {
        handle: {
          width: Qe(g),
          height: Qe(g),
          backgroundColor: w === b ? y : T,
          color: P
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
        loading: P,
        readonly: b,
        modelValue: C,
        activeValue: O,
        inactiveValue: k,
        "onUpdate:modelValue": D
      } = e;
      if ($(w, g), !(T || P || b || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var M = C === O ? k : O;
        $(y, M), $(D, M), s();
      }
    }, f = () => {
      $(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: i
    };
    return $(n, c), {
      n: Wb,
      classes: jb,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
gd.render = Gb;
const ta = gd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var LC = ta, qb = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, yd = Symbol("TABS_BIND_TAB_KEY"), bd = Symbol("TABS_COUNT_TAB_KEY");
function Kb() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(yd), {
    length: r
  } = gn(bd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Xb() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(yd), {
    index: r
  } = yn(bd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: ut,
  classes: Zb
} = ee("tab");
function Jb(e, n) {
  var r = je("ripple");
  return Se((h(), V(
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
var wd = x({
  name: "VarTab",
  directives: {
    Ripple: Ae
  },
  props: qb,
  setup(e) {
    var n = E(null), r = Y(() => e.name), a = Y(() => e.disabled), t = Y(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = Xb(), {
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
      return b ? ut("$-tab--disabled") : u.value === C || u.value === (o == null ? void 0 : o.value) ? ut("$-tab--active") : ut("$-tab--inactive");
    }, P = (b) => {
      var {
        disabled: C,
        name: O,
        onClick: k
      } = e;
      C || ($(k, O ?? o.value, b), s(w));
    };
    return ie(() => e.name, g), ie(() => e.disabled, g), {
      n: ut,
      classes: Zb,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: y,
      computeColorClass: T,
      handleClick: P
    };
  }
});
wd.render = Jb;
const oa = wd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var RC = oa, Cd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Sd = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function Qb() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Cd), {
    length: r
  } = gn(Sd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function _b() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Cd), {
    index: r
  } = yn(Sd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var xb = {
  name: {
    type: [String, Number]
  }
}, {
  n: e1,
  classes: n1
} = ee("tab-item");
function r1(e, n) {
  var r = le("var-swipe-item");
  return h(), me(
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
var kd = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: Ln
  },
  props: xb,
  setup(e) {
    var n = E(!1), r = E(!1), a = Y(() => e.name), {
      index: t,
      bindTabsItems: o
    } = _b(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: e1,
      classes: n1,
      current: n,
      initSlot: r
    };
  }
});
kd.render = r1;
const ia = kd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var UC = ia, a1 = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: t1,
  classes: o1
} = ee("table");
function i1(e, n) {
  return h(), V(
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
    ), e.$slots.footer ? (h(), V(
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
var $d = x({
  name: "VarTable",
  props: a1,
  setup() {
    return {
      toSizeUnit: ye,
      n: t1,
      classes: o1
    };
  }
});
$d.render = i1;
const la = $d;
la.install = function(e) {
  e.component(la.name, la);
};
var YC = la;
function $l(e) {
  return ["horizontal", "vertical"].includes(e);
}
var l1 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: $l
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: $l
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
  stickyCssMode: Ke(ct, "cssMode"),
  stickyZIndex: Ke(ct, "zIndex"),
  offsetTop: Ke(ct, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
  n: s1,
  classes: u1
} = ee("tabs");
function d1(e, n) {
  return h(), me(
    Ua(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [A(
        "div",
        Ve({
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
var Td = x({
  name: "VarTabs",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: l1,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), o = E(!1), i = E(null), l = Y(() => e.active), s = Y(() => e.activeColor), u = Y(() => e.inactiveColor), d = Y(() => e.disabledColor), v = Y(() => e.itemDirection), f = E(null), {
      tabList: c,
      bindTabList: g,
      length: w
    } = Kb(), y = (B) => {
      var p, S = (p = B.name.value) != null ? p : B.index.value, {
        active: L,
        onChange: Q,
        onClick: F
      } = e;
      $(e["onUpdate:active"], S), $(F, S), S !== L && $(Q, S);
    }, T = () => c.find((B) => {
      var {
        name: p
      } = B;
      return e.active === p.value;
    }), P = (B) => c.find((p) => {
      var {
        index: S
      } = p;
      return (B ?? e.active) === S.value;
    }), b = () => {
      if (w.value !== 0) {
        var {
          active: B
        } = e;
        if (an(B)) {
          var p = B > w.value - 1 ? w.value - 1 : 0;
          return $(e["onUpdate:active"], p), P(p);
        }
      }
    }, C = () => {
      o.value = c.length >= 5;
    }, O = (B) => {
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
          Ka(S, {
            left: Q,
            animation: no
          });
        } else {
          var F = L.offsetTop + L.offsetHeight / 2 - S.offsetHeight / 2;
          Ka(S, {
            top: F,
            animation: no
          });
        }
      }
    }, D = () => {
      var B = T() || P() || b();
      !B || B.disabled.value || (C(), O(B), k(B));
    }, M = /* @__PURE__ */ function() {
      var B = Pl(function* () {
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
      resize: D,
      onTabClick: y
    };
    return g(I), ie(() => w.value, /* @__PURE__ */ Pl(function* () {
      yield Mn(), D();
    })), ie(() => e.active, D), Ye(() => window.addEventListener("resize", D)), mr(() => window.removeEventListener("resize", D)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: De,
      toSizeUnit: ye,
      n: s1,
      classes: u1,
      resize: D,
      resizeSticky: M
    };
  }
});
Td.render = d1;
const sa = Td;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var FC = sa, v1 = {
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
function Ol(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function f1(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ol(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ol(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: c1
} = ee("tabs-items");
function m1(e, n) {
  var r = le("var-swipe");
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
      default: ve(() => [W(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
var Pd = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: zn
  },
  props: v1,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Qb(), o = (f) => r.find((c) => {
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
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ f1(function* () {
      yield Mn(), s(e.active);
    })), {
      swipe: n,
      n: c1,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Pd.render = m1;
const ua = Pd;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var HC = ua;
const p1 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, h1 = {
  "--badge-default-color": "#555"
}, g1 = {
  "--button-default-color": "#303030"
}, y1 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, b1 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, w1 = {
  "--checkbox-unchecked-color": "#fff"
}, C1 = {
  "--chip-default-color": "#555"
}, S1 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, k1 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, $1 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, T1 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, P1 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, O1 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, V1 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, M1 = {
  "--popup-content-background-color": "#1e1e1e"
}, E1 = {
  "--pull-refresh-background": "#303030"
}, I1 = {
  "--radio-unchecked-color": "#fff"
}, B1 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, N1 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, D1 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, A1 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, z1 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, L1 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, R1 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, U1 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, Y1 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, F1 = {
  "--tabs-background": "#1e1e1e"
}, H1 = {
  "--app-bar-color": "#272727"
}, W1 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, j1 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, G1 = {
  "--menu-background-color": "#272727"
}, q1 = {
  "--breadcrumb-inactive-color": "#aaa"
}, K1 = {
  "--paper-background": "#303030"
};
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
const X1 = Fo({
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
}, g1, b1, y1, U1, k1, D1, F1, L1, M1, $1, p1, C1, h1, Y1, S1, E1, z1, A1, O1, R1, P1, N1, I1, w1, T1, V1, H1, W1, j1, G1, B1, q1, K1);
var Z1 = {
  dark: X1
}, WC = null;
const Ho = Z1;
var cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], _e = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Vl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function J1(e) {
  return ["ampm", "24hr"].includes(e);
}
var Q1 = {
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
    validator: J1
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
}, Od = (e, n) => e === "24hr" || n === "am", pi = (e, n, r) => {
  var a = cn.findIndex((o) => z(o) === z(r)), t = Od(e, n) ? r : _e[a];
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
}, Vd = (e) => {
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
  } = pi(t, o, i), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: g,
      minute: w
    } = rn(l);
    f = g === v && a > w;
  }
  if (!l && s) {
    var {
      hour: y,
      minute: T
    } = rn(s);
    f = y === v && a < T;
  }
  if (l && s) {
    var {
      hour: P,
      minute: b
    } = rn(l), {
      hour: C,
      minute: O
    } = rn(s);
    f = C === v && a < O || P === v && a > b;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Md = (e) => {
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
  } = pi(t, o, i), c = !1, g = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: w,
      minute: y,
      second: T
    } = rn(s);
    c = w === f && y < l || y === l && a > T;
  }
  if (!s && u) {
    var {
      hour: P,
      minute: b,
      second: C
    } = rn(u);
    c = P === f && b > l || b === l && a > C;
  }
  if (s && u) {
    var {
      hour: O,
      minute: k,
      second: D
    } = rn(s), {
      hour: M,
      minute: I,
      second: B
    } = rn(u);
    c = O === f && k < l || M === f && I > l || O === f && k === l && a > D || M === f && I === l && a < B;
  }
  return (n = e.allowedTime) != null && n.seconds && (g = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || g;
}, {
  n: _1,
  classes: x1
} = ee("time-picker");
function ew(e, n) {
  return h(), V(
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
    ), (h(!0), V(
      Oe,
      null,
      Be(e.timeScales, (r, a) => (h(), V(
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
    )), e.format === "24hr" && e.type === "hour" ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), V(
        Oe,
        null,
        Be(e.hours24, (r, a) => (h(), V(
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
var Ed = x({
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
    }), s = Y(() => e.type === "hour" ? cn : Vl), u = (y, T) => {
      var P;
      y = (P = y) != null ? P : e.type === "minute" ? e.time.minute : e.time.second;
      var b = e.type === "minute" ? Vd : Md, C = {
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
      return s.value === Vl ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, T) => T ? l.value === y && e.isInner : l.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Od(e.format, e.ampm))
          return t.value.includes(y);
        var T = cn.findIndex((P) => P === y);
        return o.value.includes(T);
      }
      return u(y, !0);
    }, c = (y, T, P) => {
      var b = 2 * Math.PI / 12 * y - Math.PI / 2, C = 50 * (1 + Math.cos(b)), O = 50 * (1 + Math.sin(b)), k = () => v(y, P) ? f(T) ? {
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
        color: M
      } = k();
      return {
        left: C + "%",
        top: O + "%",
        backgroundColor: D,
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
        return ca(y[l.value], 2, "0");
      }
    };
    return ie([l, () => e.isInner], (y, T) => {
      var [P, b] = y, [C, O] = T, k = P === C && b === O;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var D = b ? _e[l.value] : w(), M = e.useSeconds ? ":" + e.time.second : "", I = D + ":" + e.time.minute + M;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), ie(() => e.rad, (y, T) => {
      if (!(e.type === "hour" || y === void 0 || T === void 0)) {
        var P = y / 6 >= 0 ? y / 6 : y / 6 + 60, b = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (P !== b) {
          var C, {
            hourStr: O
          } = pi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = te().minute(P).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            C = O + ":" + k + D;
          }
          if (e.type === "second") {
            var M = te().second(P).format("ss"), I = e.useSeconds ? ":" + M : "";
            C = O + ":" + e.time.minute + I;
          }
          r("update", C);
        }
      }
    }), ie([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [T, P, b] = y;
      if (t.value = [], T && !P) {
        var {
          hour: C
        } = rn(T), O = cn.filter((J) => z(J) > C), k = _e.filter((J) => z(J) > C);
        t.value = [...O, ...k];
      }
      if (!T && P) {
        var {
          hour: D
        } = rn(P), M = cn.filter((J) => z(J) < D), I = _e.filter((J) => z(J) < D);
        t.value = [...M, ...I];
      }
      if (T && P) {
        var {
          hour: B
        } = rn(T), {
          hour: p
        } = rn(P), S = cn.filter((J) => z(J) < p || z(J) > B), L = _e.filter((J) => z(J) < p || z(J) > B);
        t.value = [...S, ...L];
      }
      if (b != null && b.hours) {
        var {
          hours: Q
        } = b, F = cn.filter((J) => !Q(z(J))), R = _e.filter((J) => !Q(z(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...F, ...R])];
      }
      o.value = t.value.map((J) => _e.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: _1,
      classes: x1,
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
Ed.render = ew;
const nw = Ed;
var {
  n: rw,
  classes: aw
} = ee("time-picker"), tw = (e) => (ba(""), e = e(), wa(), e), ow = /* @__PURE__ */ tw(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), iw = {
  key: 0
};
function lw(e, n) {
  var r = le("clock");
  return h(), V(
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
        ), ow, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (h(), V("span", iw, ":")) : _("v-if", !0), e.useSeconds ? (h(), V(
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
      ), e.format === "ampm" ? (h(), V(
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
var Id = x({
  name: "VarTimePicker",
  components: {
    Clock: nw
  },
  props: Q1,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), o = E(!1), i = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), v = E(0), f = E("hour"), c = E("am"), g = E(!1), w = E(!1), y = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Me({
      x: 0,
      y: 0
    }), P = Me({
      x: [],
      y: []
    }), b = Y(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (N) => {
      $(e["onUpdate:modelValue"], N), $(e.onChange, N);
    }, O = (N) => N * 57.29577951308232, k = (N) => {
      l.value = !1, w.value = !1, f.value = N;
    }, D = (N) => {
      var {
        disableHour: X
      } = a.value, H = cn.findIndex((oe) => z(oe) === z(y.value.hour)), Z = N === "am" ? cn : _e, ae = [...Z.slice(H), ...Z.slice(0, H)];
      return ae.find((oe, he) => (o.value = he !== 0, !X.includes(oe)));
    }, M = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = D(N);
        if (X) {
          var H = e.useSeconds ? ":" + y.value.second : "", Z = ca(X, 2, "0") + ":" + y.value.minute + H;
          C(Z);
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
    }, S = () => {
      var {
        width: N,
        height: X
      } = a.value.getSize(), H = T.x - N / 2 - 8, Z = T.x + N / 2 + 8, ae = T.y - X / 2 - 8, oe = T.y + X / 2 + 8;
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
        g.value = Z.includes(pe), !g.value && (u.value = ae, l.value = !0);
      }
    }, Q = (N) => {
      var {
        disableHour: X
      } = a.value, H = Math.round(N / 6) * 6 + 90, Z = H / 6 >= 0 ? H / 6 : H / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      w.value = Vd(ae), !w.value && (d.value = H, s.value = !0);
    }, F = (N) => {
      var {
        disableHour: X
      } = a.value, H = Math.round(N / 6) * 6 + 90, Z = H / 6 >= 0 ? H / 6 : H / 6 + 60, ae = {
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
      Md(ae) || (v.value = H);
    }, R = () => {
      var {
        left: N,
        top: X,
        width: H,
        height: Z
      } = n.value.getBoundingClientRect();
      if (T.x = N + H / 2, T.y = X + Z / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: oe,
          rangeYMin: he,
          rangeYMax: pe
        } = S();
        P.x = [ae, oe], P.y = [he, pe];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: H
        } = N.touches[0], Z = X - T.x, ae = H - T.y, oe = Math.round(O(Math.atan2(ae, Z)));
        f.value === "hour" ? L(X, H, oe) : f.value === "minute" ? Q(oe) : F(oe);
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
        u.value = (ae === "12" ? 0 : z(ae)) * 30, d.value = z(he) * 6, v.value = z(pe) * 6, y.value = B(N), e.format !== "24hr" && (c.value = ca("" + X, 2, "0") === oe && _e.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && _e.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: rw,
      classes: aw,
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
      end: j,
      update: C,
      changePreventUpdate: K
    };
  }
});
Id.render = lw;
const da = Id;
da.install = function(e) {
  e.component(da.name, da);
};
var jC = da;
function sw(e) {
  return ["click", "hover"].includes(e);
}
function uw(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function dw(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var vw = {
  type: {
    type: String,
    default: "default",
    validator: dw
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
    validator: sw
  },
  placement: {
    type: String,
    default: "bottom",
    validator: uw
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
  n: fw,
  classes: cw
} = ee("tooltip");
function mw(e, n) {
  return h(), V(
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
    [W(e.$slots, "default"), (h(), me(
      La,
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
                  background: e.color
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
          ), [[Ra, e.show]])]),
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
var Bd = x({
  name: "VarTooltip",
  props: vw,
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
    } = Du(e);
    return {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      n: fw,
      classes: cw,
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
Bd.render = mw;
const va = Bd;
va.install = function(e) {
  e.component(va.name, va);
};
var GC = va, pw = {
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
function Ml(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function El(e) {
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
  n: hw,
  classes: gw
} = ee("uploader"), yw = 0, bw = ["onClick"], ww = ["onClick"], Cw = ["src", "alt"], Sw = ["multiple", "accept", "capture", "disabled"], kw = ["src"];
function $w(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), o = je("ripple");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(h(!0), V(
        Oe,
        null,
        Be(e.files, (i) => Se((h(), V(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [i.state === "loading", e.n("--loading")])),
            key: i.id,
            onClick: (l) => e.preview(i)
          },
          [A(
            "div",
            {
              class: m(e.n("file-name"))
            },
            ne(i.name || i.url),
            3
            /* TEXT, CLASS */
          ), e.removable ? (h(), V(
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
            ww
          )) : _("v-if", !0), i.cover ? (h(), V(
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
            Cw
          )) : _("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [i.state === "success", e.n("--success")], [i.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          bw
        )), [[o, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
        /* KEYED_FRAGMENT */
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Se((h(), V(
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
          Sw
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
          return [e.currentPreview && e.isHTMLSupportVideo((i = e.currentPreview) == null ? void 0 : i.url) ? (h(), V(
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
            kw
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
var Nd = x({
  name: "VarUploader",
  directives: {
    Ripple: Ae
  },
  components: {
    VarIcon: $e,
    VarPopup: mn,
    VarFormDetails: We
  },
  props: pw,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = Y(() => {
      var {
        maxlength: F,
        modelValue: {
          length: R
        }
      } = e;
      return an(F) ? R + " / " + F : "";
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
        modelValue: F,
        hideList: R
      } = e;
      return R ? [] : F;
    }), f = (F) => {
      var {
        disabled: R,
        readonly: J,
        previewed: j
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || R || J || !j)) {
        var {
          url: K
        } = F;
        if (Xe(K) && Ci(K)) {
          Hn(K);
          return;
        }
        Xe(K) && Si(K) && (a.value = F, r.value = !0);
      }
    }, c = (F) => ({
      id: yw++,
      url: "",
      cover: "",
      name: F.name,
      file: F
    }), g = (F) => {
      var R = F.target, {
        files: J
      } = R;
      return Array.from(J);
    }, w = (F) => new Promise((R) => {
      var J = new FileReader();
      J.onload = () => {
        var j = J.result;
        F.file.type.startsWith("image") && (F.cover = j), F.url = j, R(F);
      }, J.readAsDataURL(F.file);
    }), y = (F) => F.map(w), T = (F) => {
      var {
        onBeforeRead: R
      } = e;
      return F.map((J) => new Promise((j) => {
        R || j({
          valid: !0,
          varFile: J
        });
        var K = $(R, Me(J));
        K = we(K) ? K : [K], Promise.all(K).then((N) => {
          j({
            valid: !N.some((X) => !X),
            varFile: J
          });
        });
      }));
    }, P = /* @__PURE__ */ function() {
      var F = El(function* (R) {
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
          var ae = (ze) => ze.filter((vn) => vn.file.size > z(J) ? ($(N, Me(vn)), !1) : !0), oe = (ze) => {
            var vn = Math.min(ze.length, z(j) - K.length);
            return ze.slice(0, vn);
          }, he = g(R), pe = he.map(c);
          pe = J != null ? ae(pe) : pe, pe = j != null ? oe(pe) : pe;
          var Fe = yield Promise.all(y(pe)), en = yield Promise.all(T(Fe)), on = en.filter((ze) => {
            var {
              valid: vn
            } = ze;
            return vn;
          }).map((ze) => {
            var {
              varFile: vn
            } = ze;
            return vn;
          });
          $(e["onUpdate:modelValue"], [...K, ...on]), R.target.value = "", on.forEach((ze) => $(X, Me(ze)));
        }
      });
      return function(J) {
        return F.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var F = El(function* (R) {
        var {
          disabled: J,
          readonly: j,
          modelValue: K,
          onBeforeRemove: N,
          onRemove: X
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || J || j)) {
          if (N) {
            var H = $(N, Me(R));
            if (H = we(H) ? H : [H], (yield Promise.all(H)).some((ae) => !ae))
              return;
          }
          var Z = K.filter((ae) => ae !== R);
          $(X, Me(R)), B("onRemove"), $(e["onUpdate:modelValue"], Z);
        }
      });
      return function(J) {
        return F.apply(this, arguments);
      };
    }(), C = () => e.modelValue.filter((F) => F.state === "success"), O = () => e.modelValue.filter((F) => F.state === "error"), k = () => e.modelValue.filter((F) => F.state === "loading"), D = () => {
      n.value.click();
    }, M = () => {
      a.value = null, r.value = !1, Hn.close();
    }, I = {
      getSuccess: C,
      getError: O,
      getLoading: k
    }, B = (F) => {
      Ee(() => {
        var {
          validateTrigger: R,
          rules: J,
          modelValue: j
        } = e;
        s(R, F, J, j, I);
      });
    }, p = !1, S = () => u(e.rules, e.modelValue, I), L = () => {
      p = !0, $(e["onUpdate:modelValue"], []), d();
    }, Q = {
      validate: S,
      resetValidation: d,
      reset: L
    };
    return $(i, Q), ie(() => e.modelValue, () => {
      !p && B("onChange"), p = !1;
    }, {
      deep: !0
    }), {
      n: hw,
      classes: gw,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: Si,
      isHTMLSupportImage: Ci,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: f,
      handleChange: P,
      handleRemove: b,
      getSuccess: C,
      getError: O,
      getLoading: k,
      validate: S,
      resetValidation: d,
      reset: L,
      chooseFile: D,
      closePreview: M
    };
  }
});
Nd.render = $w;
const fa = Nd;
fa.install = function(e) {
  e.component(fa.name, fa);
};
var qC = fa;
const Tw = "2.7.5";
function Pw(e) {
  ma.install && e.use(ma), yr.install && e.use(yr), br.install && e.use(br), ar.install && e.use(ar), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), kr.install && e.use(kr), xe.install && e.use(xe), $r.install && e.use($r), tr.install && e.use(tr), or.install && e.use(or), Tr.install && e.use(Tr), ir.install && e.use(ir), Pr.install && e.use(Pr), Or.install && e.use(Or), Vr.install && e.use(Vr), sn.install && e.use(sn), Mr.install && e.use(Mr), Er.install && e.use(Er), Br.install && e.use(Br), pa.install && e.use(pa), Nr.install && e.use(Nr), An.install && e.use(An), We.install && e.use(We), $e.install && e.use($e), Dr.install && e.use(Dr), Hn.install && e.use(Hn), Ar.install && e.use(Ar), zr.install && e.use(zr), ur.install && e.use(ur), $t.install && e.use($t), Lr.install && e.use(Lr), Rr.install && e.use(Rr), $n.install && e.use($n), No.install && e.use(No), lo.install && e.use(lo), Fn.install && e.use(Fn), Ur.install && e.use(Ur), Yr.install && e.use(Yr), Fr.install && e.use(Fr), Hr.install && e.use(Hr), ya.install && e.use(ya), mn.install && e.use(mn), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Ae.install && e.use(Ae), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), _r.install && e.use(_r), Yo.install && e.use(Yo), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), Rn.install && e.use(Rn), _a.install && e.use(_a), zn.install && e.use(zn), Ln.install && e.use(Ln), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), Ho.install && e.use(Ho), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa);
}
const KC = {
  version: Tw,
  install: Pw,
  ActionSheet: ma,
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
  Dialog: pa,
  Divider: Nr,
  Form: An,
  FormDetails: We,
  Icon: $e,
  Image: Dr,
  ImagePreview: Hn,
  IndexAnchor: Ar,
  IndexBar: zr,
  Input: ur,
  Lazy: $t,
  Link: Lr,
  List: Rr,
  Loading: $n,
  LoadingBar: No,
  Locale: lo,
  Menu: Fn,
  Option: Ur,
  Overlay: Yr,
  Pagination: Fr,
  Paper: Hr,
  Picker: ya,
  Popup: mn,
  Progress: Wr,
  PullRefresh: jr,
  Radio: Gr,
  RadioGroup: qr,
  Rate: Kr,
  Result: Xr,
  Ripple: Ae,
  Row: Zr,
  Select: Jr,
  Skeleton: Qr,
  Slider: _r,
  Snackbar: Yo,
  Space: ea,
  Step: na,
  Steps: ra,
  Sticky: Rn,
  StyleProvider: _a,
  Swipe: zn,
  SwipeItem: Ln,
  Switch: ta,
  Tab: oa,
  TabItem: ia,
  Table: la,
  Tabs: sa,
  TabsItems: ua,
  Themes: Ho,
  TimePicker: da,
  Tooltip: va,
  Uploader: fa
};
export {
  ma as ActionSheet,
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
  pa as Dialog,
  Nr as Divider,
  An as Form,
  We as FormDetails,
  $e as Icon,
  Dr as Image,
  Hn as ImagePreview,
  Ar as IndexAnchor,
  zr as IndexBar,
  ur as Input,
  $t as Lazy,
  Lr as Link,
  Rr as List,
  $n as Loading,
  No as LoadingBar,
  lo as Locale,
  Fn as Menu,
  Ur as Option,
  Yr as Overlay,
  Oo as PIXEL,
  Fr as Pagination,
  Hr as Paper,
  ya as Picker,
  mn as Popup,
  Wr as Progress,
  jr as PullRefresh,
  Gr as Radio,
  qr as RadioGroup,
  Kr as Rate,
  Xr as Result,
  Ae as Ripple,
  Zr as Row,
  ci as SNACKBAR_TYPE,
  Jr as Select,
  Qr as Skeleton,
  _r as Slider,
  Yo as Snackbar,
  ea as Space,
  na as Step,
  ra as Steps,
  Rn as Sticky,
  _a as StyleProvider,
  zn as Swipe,
  Ln as SwipeItem,
  ta as Switch,
  oa as Tab,
  ia as TabItem,
  la as Table,
  sa as Tabs,
  ua as TabsItems,
  Ho as Themes,
  da as TimePicker,
  va as Tooltip,
  fa as Uploader,
  Nw as _ActionSheetComponent,
  Dw as _AppBarComponent,
  Lw as _BackTopComponent,
  Rw as _BadgeComponent,
  Uw as _BottomNavigationComponent,
  Yw as _BottomNavigationItemComponent,
  Fw as _BreadcrumbComponent,
  Hw as _BreadcrumbsComponent,
  zw as _ButtonComponent,
  Ww as _CardComponent,
  jw as _CellComponent,
  qw as _CheckboxComponent,
  Kw as _CheckboxGroupComponent,
  Xw as _ChipComponent,
  Zw as _ColComponent,
  Jw as _CollapseComponent,
  Qw as _CollapseItemComponent,
  Vw as _ContextComponent,
  _w as _CountdownComponent,
  xw as _CounterComponent,
  eC as _DatePickerComponent,
  nC as _DialogComponent,
  rC as _DividerComponent,
  aC as _FormComponent,
  Gw as _FormDetailsComponent,
  Iw as _IconComponent,
  oC as _ImageComponent,
  sC as _ImagePreviewComponent,
  dC as _IndexAnchorComponent,
  vC as _IndexBarComponent,
  fC as _InputComponent,
  tC as _LazyComponent,
  cC as _LinkComponent,
  mC as _ListComponent,
  pC as _LoadingBarComponent,
  Aw as _LoadingComponent,
  Bw as _LocaleComponent,
  hC as _MenuComponent,
  gC as _OptionComponent,
  yC as _OverlayComponent,
  bC as _PaginationComponent,
  wC as _PaperComponent,
  CC as _PickerComponent,
  Ew as _PopupComponent,
  SC as _ProgressComponent,
  kC as _PullRefreshComponent,
  $C as _RadioComponent,
  TC as _RadioGroupComponent,
  PC as _RateComponent,
  OC as _ResultComponent,
  Mw as _RippleComponent,
  VC as _RowComponent,
  MC as _SelectComponent,
  EC as _SkeletonComponent,
  IC as _SliderComponent,
  BC as _SnackbarComponent,
  NC as _SpaceComponent,
  DC as _StepComponent,
  AC as _StepsComponent,
  uC as _StickyComponent,
  zC as _StyleProviderComponent,
  iC as _SwipeComponent,
  lC as _SwipeItemComponent,
  LC as _SwitchComponent,
  RC as _TabComponent,
  UC as _TabItemComponent,
  YC as _TableComponent,
  FC as _TabsComponent,
  HC as _TabsItemsComponent,
  WC as _ThemesComponent,
  jC as _TimePickerComponent,
  GC as _TooltipComponent,
  qC as _UploaderComponent,
  $v as actionSheetProps,
  xo as add,
  Dv as appBarProps,
  ef as backTopProps,
  lf as badgeProps,
  gf as bottomNavigationItemProps,
  vf as bottomNavigationProps,
  kf as breadcrumbProps,
  Mf as breadcrumbsProps,
  Zv as buttonProps,
  Nf as cardProps,
  Uf as cellProps,
  rc as checkboxGroupProps,
  Xf as checkboxProps,
  sc as chipProps,
  fc as colProps,
  Sc as collapseItemProps,
  yc as collapseProps,
  Pc as countdownProps,
  Sm as counterProps,
  Wm as datePickerProps,
  KC as default,
  Re as defaultLazyOptions,
  ip as dialogProps,
  mp as dividerProps,
  Ql as enUS,
  Wf as formDetailsProps,
  bp as formProps,
  Zl as iconProps,
  ou as imageCache,
  nh as imagePreviewProps,
  Rp as imageProps,
  vh as indexAnchorProps,
  ph as indexBarProps,
  Ch as inputProps,
  Pw as install,
  Mh as linkProps,
  Nh as listProps,
  Rh as loadingBarProps,
  xn as loadingProps,
  Jh as menuProps,
  xl as merge,
  ly as optionProps,
  vy as overlayProps,
  He as pack,
  _l as packs,
  cy as paginationProps,
  yy as paperProps,
  Sy as pickerProps,
  xa as popupProps,
  Ey as progressProps,
  Ly as pullRefreshProps,
  Xy as radioGroupProps,
  Fy as radioProps,
  _y as rateProps,
  r0 as resultProps,
  H0 as rowProps,
  K0 as selectProps,
  Q0 as skeletonProps,
  rb as sliderProps,
  id as snackbarProps,
  Tb as spaceProps,
  Vb as stepProps,
  zb as stepsProps,
  ct as stickyProps,
  Ub as styleProviderProps,
  cu as swipeProps,
  Hb as switchProps,
  xb as tabItemProps,
  qb as tabProps,
  a1 as tableProps,
  v1 as tabsItemsProps,
  l1 as tabsProps,
  Q1 as timePickerProps,
  vw as tooltipProps,
  pw as uploaderProps,
  ei as use,
  _o as useLocale,
  Tw as version,
  Qo as zhCN
};
