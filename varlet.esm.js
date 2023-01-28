import { reactive as Me, ref as E, onMounted as Ue, onUnmounted as cr, onActivated as Yo, onDeactivated as Fo, getCurrentInstance as Aa, provide as Pl, computed as F, inject as Ol, nextTick as Ee, createApp as vu, onBeforeUnmount as $t, h as Vl, isVNode as Tt, watch as oe, onBeforeMount as fu, defineComponent as _, createVNode as re, Teleport as za, Transition as Ae, withDirectives as ke, vShow as La, mergeProps as Ve, openBlock as y, createBlock as pe, resolveDynamicComponent as Ra, normalizeClass as m, normalizeStyle as K, resolveComponent as ie, resolveDirective as Ze, withCtx as ve, createElementVNode as A, renderSlot as H, toDisplayString as ne, createElementBlock as M, Fragment as Oe, renderList as Ne, createCommentVNode as x, onUpdated as Ho, createTextVNode as he, pushScopeId as ya, popScopeId as ba, withModifiers as Vn, normalizeProps as Ml, guardReactiveProps as cu, vModelText as mu, toRefs as pu, withKeys as ci, toRaw as mi, TransitionGroup as hu, Comment as gu } from "vue";
var El = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, Lb = Me(El);
const un = Me(El), Je = (e) => typeof e == "string", xt = (e) => typeof e == "boolean", Xe = (e) => typeof e == "number", Wo = (e) => Object.prototype.toString.call(e) === "[object Object]", yu = (e) => typeof e == "object" && e !== null, be = (e) => Array.isArray(e), bu = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Je(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : xt(e) ? Number(e) : e, Pt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, jo = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, Go = () => typeof window < "u", pi = (e) => [...new Set(e)], wu = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Cu = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var hi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), gi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Su = (e) => {
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
      this.has(r) && Pt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, _t = (e) => e, yi = (e) => Math.pow(e, 3), Il = (e) => e < 0.5 ? yi(e * 2) / 2 : 1 - yi((1 - e) * 2) / 2, Ot = (e, n) => e ?? n, Bl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, va = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function bi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ku(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        bi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        bi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function $u(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function wi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Vt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function qo(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function Tu(e) {
  return eo.apply(this, arguments);
}
function eo() {
  return eo = ku(function* (e) {
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
  }), eo.apply(this, arguments);
}
function jt(e) {
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
function Pu(e) {
  for (var n = [], r = e; r !== window; )
    r = wa(r), n.push(r);
  return n;
}
function Nl(e, n) {
  if (Je(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (yu(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Dl = (e) => Je(e) && e.endsWith("rem"), Ou = (e) => Je(e) && e.endsWith("px") || Xe(e), Vu = (e) => Je(e) && e.endsWith("%"), Al = (e) => Je(e) && e.endsWith("vw"), zl = (e) => Je(e) && e.endsWith("vh"), Mu = (e) => Je(e) && e.startsWith("calc("), Eu = (e) => Je(e) && e.startsWith("var("), De = (e) => {
  if (Xe(e))
    return e;
  if (Ou(e))
    return +e.replace("px", "");
  if (Al(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (zl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Dl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Je(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return Vu(e) || Al(e) || zl(e) || Dl(e) || Mu(e) || Eu(e) ? e : De(e) + "px";
}, en = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Pn(e) {
  var n = Bl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Iu(e) {
  var n = Bl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Mt(e) {
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
function Bu() {
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
  } = n, i = Date.now(), l = Vt(e), s = qo(e);
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
function Ll(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + wu(a);
    return n[o] = t, n;
  }, {});
}
function Nu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var Du = ["collect", "clear"];
function Ci(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Si(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ci(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ci(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Au(e, n) {
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
function Ke(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function zu(e) {
  var n = vu(e), r = document.createElement("div");
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
      return () => Vl(e, mt({}, n, r));
    }
  }, {
    unmount: t
  } = zu(a);
  return {
    unmountInstance: t
  };
}
function Lu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Tt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function gn(e) {
  var n = Me([]), r = Aa(), a = () => {
    var l = Lu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    Pt(n, l);
  };
  Pl(e, {
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
  if (!Rl(e))
    return {
      index: null
    };
  var n = Ol(e), {
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
function dn(e) {
  var n = [], r = (o) => {
    n.push(o);
  }, a = (o) => {
    Pt(n, o);
  }, t = (o) => {
    Pl(e, mt({
      collect: r,
      clear: a
    }, o));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function vn(e) {
  if (!Rl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Ol(e), {
    collect: r,
    clear: a
  } = n, t = Au(n, Du), o = (i) => {
    Ue(() => r(i)), $t(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function Rl(e) {
  var n = Aa();
  return e in n.provides;
}
function bn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = Si(function* (o, i, l) {
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
    var t = Si(function* (o, i, l, s, u) {
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
function Ru(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), cr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Ko() {
  var e = E(!1);
  return Yo(() => {
    e.value = !1;
  }), Fo(() => {
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
  n: Ul
} = ee("ripple"), ki = 250;
function Uu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Yu(e, n) {
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
function Yl(e) {
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
      } = Yu(this, e), s = document.createElement("div");
      s.classList.add(Ul()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Uu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function no() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ul());
    if (r.length) {
      var a = r[r.length - 1], t = ki - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, ki);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Fl() {
  var e = this._ripple;
  Nu() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Fu(e, n) {
  var r, a, t;
  e._ripple = pt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : un.touchmoveForbid,
    removeRipple: no.bind(e)
  }), e.addEventListener("touchstart", Yl, {
    passive: !0
  }), e.addEventListener("touchmove", Fl, {
    passive: !0
  }), e.addEventListener("dragstart", no, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Hu(e) {
  e.removeEventListener("touchstart", Yl), e.removeEventListener("touchmove", Fl), e.removeEventListener("dragstart", no), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Wu(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : un.touchmoveForbid,
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
var Hl = {
  mounted: Fu,
  unmounted: Hu,
  updated: Wu,
  install(e) {
    e.directive("ripple", this);
  }
}, Rb = Hl;
const je = Hl;
function ju(e) {
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
    validator: ju
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
function Wl() {
  var e = Object.keys(un.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function nt(e) {
  un.locks[e] = 1, Wl();
}
function rt(e) {
  delete un.locks[e], Wl();
}
function Et(e, n) {
  var {
    uid: r
  } = Aa();
  n && oe(n, (a) => {
    a === !1 ? rt(r) : a === !0 && e() === !0 && nt(r);
  }), oe(e, (a) => {
    n && n() === !1 || (a === !0 ? nt(r) : rt(r));
  }), fu(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), cr(() => {
    n && n() === !1 || e() === !0 && rt(r);
  }), Yo(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), Fo(() => {
    n && n() === !1 || e() === !0 && rt(r);
  });
}
function _a(e, n) {
  var r = E(un.zIndex);
  return oe(e, (a) => {
    a && (un.zIndex += n, r.value = un.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function ro() {
  return ro = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ro.apply(this, arguments);
}
function Gu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Tt(e);
}
var {
  n: Bn,
  classes: Gt
} = ee("popup");
const mn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: xa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = _a(() => e.show, 3), {
      disabled: o
    } = Ko(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      P(v), d && P(e["onUpdate:show"], !1);
    };
    Et(() => e.show, () => e.lockScroll), oe(() => e.show, (d) => {
      P(d ? e.onOpen : e.onClose);
    }), Ru(() => P(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: Gt(Bn("overlay"), d),
        style: ro({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => re("div", Ve({
      class: Gt(Bn("content"), Bn("--" + e.position), [e.defaultStyle, Bn("--content-background-color")], [e.defaultStyle, Bn("$-elevation--3")]),
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
      return re(Ae, {
        name: Bn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(re("div", {
          class: Gt(Bn("$--box"), Bn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(Ae, {
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
        }, Gu(v = u()) ? v : {
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
var Ub = mn, jl = {
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
function $i(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qu(e) {
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
var {
  n: Ku,
  classes: Xu
} = ee("icon");
function Zu(e, n) {
  return y(), pe(
    Ra(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: K({
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
const $e = _({
  render: Zu,
  name: "VarIcon",
  props: jl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = qu(function* (o, i) {
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
    return oe(() => e.name, a, {
      immediate: !0
    }), {
      n: Ku,
      classes: Xu,
      nextName: n,
      shrinking: r,
      isURL: bu,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
$e.install = function(e) {
  e.component($e.name, $e);
};
var Yb = $e;
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
var Ju = ao({
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
const Xo = {
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
}, Gl = {
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
function Zo() {
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
    e[o] = to({}, e[o], i), a(o);
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
  packs: ql,
  pack: Fe,
  add: Jo,
  use: Qo,
  merge: Kl
} = Zo();
Jo("zh-CN", Xo);
Qo("zh-CN");
var Fb = {
  zhCN: Xo,
  enUS: Gl,
  packs: ql,
  pack: Fe,
  add: Jo,
  use: Qo,
  merge: Kl,
  useLocale: Zo
};
const oo = {
  zhCN: Xo,
  enUS: Gl,
  packs: ql,
  pack: Fe,
  add: Jo,
  use: Qo,
  merge: Kl,
  useLocale: Zo
};
var {
  n: Qu,
  classes: xu
} = ee("action-sheet"), _u = ["onClick"];
function ed(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = Ze("ripple");
  return y(), pe(
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
        [H(e.$slots, "title", {}, () => [A(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
          /* TEXT, CLASS */
        )]), H(e.$slots, "actions", {}, () => [(y(!0), M(
          Oe,
          null,
          Ne(e.actions, (o) => ke((y(), M(
            "div",
            {
              class: m(e.classes(e.n("action-item"), o.className, [o.disabled, e.n("--disabled")])),
              key: o.name,
              style: K({
                color: o.color
              }),
              onClick: (i) => e.handleSelect(o)
            },
            [o.icon ? (y(), pe(
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
            )) : x("v-if", !0), A(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(o.name),
              3
              /* TEXT, CLASS */
            )],
            14,
            _u
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
const er = _({
  render: ed,
  name: "VarActionSheet",
  directives: {
    Ripple: je
  },
  components: {
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Ju,
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
    return oe(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Qu,
      classes: xu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Fe,
      dt: Ot,
      handleSelect: r
    };
  }
});
var Xn;
function fa(e) {
  return Go() ? new Promise((n) => {
    fa.close();
    var r = Me(e);
    r.teleport = "body", Xn = r;
    var {
      unmountInstance: a
    } = Ua(er, r, {
      onSelect: (t) => {
        P(r.onSelect, t), n(t);
      },
      onClose: () => {
        P(r.onClose), n("close");
      },
      onClosed: () => {
        P(r.onClosed), a(), Xn === r && (Xn = null);
      },
      onRouteChange: () => {
        a(), Xn === r && (Xn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
fa.Component = er;
er.install = function(e) {
  e.component(er.name, er);
};
fa.close = () => {
  if (Xn != null) {
    var e = Xn;
    Xn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
fa.install = function(e) {
  e.component(er.name, er);
};
var Hb = er;
function nd(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var rd = {
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
    validator: nd
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
  n: ad,
  classes: td
} = ee("app-bar");
function od(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: K({
        background: e.color,
        color: e.textColor
      })
    },
    [A(
      "div",
      {
        class: m(e.n("left"))
      },
      [H(e.$slots, "left"), e.titlePosition === "left" ? (y(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingLeft: e.paddingLeft
          })
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.title),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    ), e.titlePosition === "center" ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [H(e.$slots, "default", {}, () => [he(
        ne(e.title),
        1
        /* TEXT */
      )])],
      2
      /* CLASS */
    )) : x("v-if", !0), A(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (y(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingRight: e.paddingRight
          })
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.title),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0), H(e.$slots, "right")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  );
}
const gr = _({
  render: od,
  name: "VarAppBar",
  props: rd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(o), Ho(o), {
      n: ad,
      classes: td,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
gr.install = function(e) {
  e.component(gr.name, gr);
};
var Wb = gr;
function id(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ld(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Qn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: id
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: ld
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
  n: sd,
  classes: ud
} = ee("loading"), dd = (e) => (ya(""), e = e(), ba(), e), vd = /* @__PURE__ */ dd(() => /* @__PURE__ */ A(
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
)), fd = [vd];
function cd(e, n) {
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
      [H(e.$slots, "default"), e.loading ? (y(), M(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.isShow ? (y(), M(
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
        [A(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          fd,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : x("v-if", !0), (y(!0), M(
        Oe,
        null,
        Ne(e.loadingTypeDict, (r, a) => (y(), M(
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
              Ne(r, (t) => (y(), M(
                "div",
                {
                  key: t + a,
                  style: K({
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
          )) : x("v-if", !0)],
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
          style: K({
            color: e.color
          })
        },
        [H(e.$slots, "description", {}, () => [he(
          ne(e.description),
          1
          /* TEXT */
        )])],
        6
        /* CLASS, STYLE */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const $n = _({
  render: cd,
  name: "VarLoading",
  props: Qn,
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
      n: sd,
      classes: ud,
      multiplySizeUnit: en,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
$n.install = function(e) {
  e.component($n.name, $n);
};
var jb = $n;
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
function md(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function pd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function hd(e) {
  return ["button", "reset", "submit"].includes(e);
}
var gd = {
  type: {
    type: String,
    default: "default",
    validator: md
  },
  nativeType: {
    type: String,
    default: "button",
    validator: hd
  },
  size: {
    type: String,
    default: "normal",
    validator: pd
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
  loadingType: Ke(Qn, "type"),
  loadingSize: Ke(Qn, "size"),
  loadingColor: io({}, Ke(Qn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: yd,
  classes: bd
} = ee("button"), wd = ["type", "disabled"];
function Cd(e, n) {
  var r = ie("var-loading"), a = Ze("ripple");
  return ke((y(), M(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: K({
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
    [e.loading || e.pending ? (y(), pe(
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
    )) : x("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    )],
    46,
    wd
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const rn = _({
  render: Cd,
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: je
  },
  props: gd,
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
      n: yd,
      classes: bd,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
rn.install = function(e) {
  e.component(rn.name, rn);
};
var Gb = rn, Sd = {
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
  n: kd,
  classes: $d
} = ee("back-top");
function Td(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return y(), pe(
    za,
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
      [H(e.$slots, "default", {}, () => [re(a, {
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
const yr = _({
  render: Td,
  name: "VarBackTop",
  components: {
    VarButton: rn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Sd,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, o = (s) => {
      P(e.onClick, s);
      var u = qo(t);
      qa(t, {
        left: u,
        duration: e.duration,
        animation: Il
      });
    }, i = () => {
      n.value = Vt(t) >= De(e.visibilityHeight);
    }, l = jo(i, 200);
    return Ue(() => {
      t = e.target ? Nl(e.target, "BackTop") : wa(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), $t(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: kd,
      classes: $d,
      click: o
    };
  }
});
yr.install = function(e) {
  e.component(yr.name, yr);
};
var qb = yr;
function Pd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Od(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Vd = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: Pd
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
    validator: Od
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Hn,
  classes: Md
} = ee("badge"), Ed = {
  key: 1
};
function Id(e, n) {
  var r = ie("var-icon");
  return y(), M(
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
        default: ve(() => [ke(A(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (y(), pe(
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
            Ed,
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
    ), H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
const nr = _({
  render: Id,
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Vd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = F(() => {
      var {
        type: i,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Hn("position") + " " + Hn("--" + l), v = s ? Hn("dot") : null, f = o(), c = u ? Hn("icon") : null;
      return [Hn("--" + i), d, v, f, c];
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
        return Hn("dot--right");
      if (l && i.includes("left"))
        return Hn("dot--left");
    };
    return {
      n: Hn,
      classes: Md,
      values: t,
      contentClass: a
    };
  }
});
nr.install = function(e) {
  e.component(nr.name, nr);
};
var Kb = nr, Bd = {
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
}, Xl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Zl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Nd() {
  var {
    childProviders: e,
    bindChildren: n
  } = dn(Xl), {
    length: r
  } = gn(Zl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
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
var {
  n: Dd,
  classes: Ad
} = ee("bottom-navigation"), {
  n: It
} = ee("bottom-navigation-item"), Ti = It("--right-half-space"), Pi = It("--left-half-space"), Oi = It("--right-space"), zd = {
  type: "primary"
};
function Ld(e, n) {
  var r = ie("var-button");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [H(e.$slots, "default"), e.$slots.fab ? (y(), pe(
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
        default: ve(() => [H(e.$slots, "fab")]),
        _: 3
        /* FORWARDED */
      },
      16,
      ["class", "onClick"]
    )) : x("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
const br = _({
  render: Ld,
  name: "VarBottomNavigation",
  components: {
    VarButton: rn
  },
  props: Bd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = F(() => e.active), o = F(() => e.activeColor), i = F(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Nd(), v = () => {
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
      Xe(t.value) && (t.value < 0 ? P(e["onUpdate:active"], 0) : t.value > s.value - 1 && P(e["onUpdate:active"], s.value - 1));
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
        I.classList.remove(Ti, Pi, Oi);
      });
    }, w = (V) => {
      var I = O(), B = I.length, p = V % 2 === 0;
      I.forEach((b, L) => {
        S(p, b, L, B);
      });
    }, S = (V, I, B, p) => {
      var b = B === p - 1;
      if (!V && b) {
        I.classList.add(Oi);
        return;
      }
      var L = B === p / 2 - 1, Y = B === p / 2;
      L ? I.classList.add(Ti) : Y && I.classList.add(Pi);
    }, O = () => Array.from(a.value.querySelectorAll("." + It())), k = () => {
      P(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: C
    };
    return d(D), oe(() => s.value, v), oe(() => e.fabProps, (V) => {
      l.value = lo({}, zd, V);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      r.fab && w(s.value);
    }), Ho(() => {
      T(), r.fab && w(s.value);
    }), {
      n: Dd,
      classes: Ad,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
br.install = function(e) {
  e.component(br.name, br);
};
var Xb = br, Rd = {
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
function Ud() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(Xl), {
    index: r
  } = yn(Zl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Yd,
  classes: Fd
} = ee("bottom-navigation-item"), Hd = {
  type: "danger",
  dot: !0
};
function Wd(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = Ze("ripple");
  return ke((y(), M(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [e.icon && !e.$slots.icon ? (y(), pe(
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
    )) : x("v-if", !0), H(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (y(), pe(
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
    )) : x("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (y(), M(
        Oe,
        {
          key: 0
        },
        [he(
          ne(e.label),
          1
          /* TEXT */
        )],
        2112
        /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
      )), H(e.$slots, "default")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  )), [[t]]);
}
const wr = _({
  render: Wd,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: nr,
    VarIcon: $e
  },
  directives: {
    Ripple: je
  },
  props: Rd,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = Ud(), {
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
    return i(d), oe(() => r.value, (c) => {
      a.value = c === !0 ? Hd : r.value;
    }, {
      immediate: !0
    }), {
      n: Yd,
      classes: Fd,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
wr.install = function(e) {
  e.component(wr.name, wr);
};
var Zb = wr, jd = {
  separator: {
    type: String
  },
  onClick: U()
}, Jl = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), Ql = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Gd() {
  var {
    childProviders: e,
    bindChildren: n
  } = dn(Jl), {
    length: r
  } = gn(Ql);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function qd() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(Jl), {
    index: r
  } = yn(Ql);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Kd,
  classes: Xd
} = ee("breadcrumb");
function Zd(e, n) {
  return y(), M(
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
      [H(e.$slots, "default")],
      2
      /* CLASS */
    ), e.isLast ? x("v-if", !0) : H(e.$slots, "separator", {
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
const Cr = _({
  render: Zd,
  name: "VarBreadcrumb",
  props: jd,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = qd(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), i = (l) => {
      t.value || P(e.onClick, l);
    };
    return a(null), {
      n: Kd,
      classes: Xd,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var Jb = Cr, Jd = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Qd
} = ee("breadcrumbs");
function xd(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
const Sr = _({
  render: xd,
  name: "VarBreadcrumbs",
  props: Jd,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Gd(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Qd
    };
  }
});
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var Qb = Sr;
function _d(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ev = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: _d,
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
function Vi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mi(e) {
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
  n: nv,
  classes: rv
} = ee("card"), av = 500, tv = ["src", "alt"];
function ov(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = Ze("ripple");
  return ke((y(), M(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [A(
      "div",
      {
        ref: "cardFloater",
        class: m(e.n("floater")),
        style: K({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [H(e.$slots, "image", {}, () => [e.src ? (y(), M(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
          style: K({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        tv
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("container"))
        },
        [H(e.$slots, "title", {}, () => [e.title ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), H(e.$slots, "subtitle", {}, () => [e.subtitle ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)]), e.$slots.extra ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [H(e.$slots, "extra")],
          2
          /* CLASS */
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (y(), M(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: K({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [H(e.$slots, "floating-content")],
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.showFloatingButtons ? (y(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: K({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [H(e.$slots, "close-button", {}, () => [re(
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
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    ), A(
      "div",
      {
        class: m(e.n("holder")),
        style: K({
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
const kr = _({
  render: ov,
  name: "VarCard",
  directives: {
    Ripple: je
  },
  components: {
    VarIcon: $e,
    VarButton: rn
  },
  props: ev,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), o = E("100%"), i = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = F(() => e.layout === "row"), h = E(!1), C = E(!1), {
      zIndex: g
    } = _a(() => e.floating, 1);
    Et(() => e.floating, () => !c.value);
    var $ = "auto", T = "auto", w = null, S = E(null), O = /* @__PURE__ */ function() {
      var V = Mi(function* () {
        clearTimeout(S.value), clearTimeout(w), S.value = null, S.value = setTimeout(/* @__PURE__ */ Mi(function* () {
          var {
            width: I,
            height: B,
            left: p,
            top: b
          } = n.value.getBoundingClientRect();
          a.value = we(I), t.value = we(B), o.value = a.value, i.value = t.value, l.value = we(b), s.value = we(p), u.value = "fixed", $ = l.value, T = s.value, h.value = !0, yield Mn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", C.value = !0;
        }), e.ripple ? av : 0);
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(w), clearTimeout(S.value), S.value = null, o.value = a.value, i.value = t.value, l.value = $, s.value = T, v.value = "0px", f.value = "0", h.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", o.value = "100%", i.value = "100%", l.value = "auto", s.value = "auto", $ = "auto", T = "auto", d.value = "hidden", u.value = void 0, C.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      P(e["onUpdate:floating"], !1);
    };
    return oe(() => e.floating, (V) => {
      c.value || Ee(() => {
        V ? O() : k();
      });
    }, {
      immediate: !0
    }), {
      n: nv,
      classes: rv,
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
      close: D,
      showFloatingButtons: h,
      floated: C
    };
  }
});
kr.install = function(e) {
  e.component(kr.name, kr);
};
var xb = kr, iv = {
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
  n: lv,
  classes: sv
} = ee("cell");
function uv(e, n) {
  var r = ie("var-icon");
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
      [H(e.$slots, "icon", {}, () => [re(
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
    )) : x("v-if", !0), A(
      "div",
      {
        class: m(e.n("content"))
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [H(e.$slots, "default", {}, () => [he(
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
        [H(e.$slots, "description", {}, () => [he(
          ne(e.description),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    ), e.$slots.extra ? (y(), M(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [H(e.$slots, "extra")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const rr = _({
  render: uv,
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  props: iv,
  setup() {
    return {
      n: lv,
      classes: sv
    };
  }
});
rr.install = function(e) {
  e.component(rr.name, rr);
};
var _b = rr, dv = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: vv
} = ee("form-details"), fv = {
  key: 0
}, cv = {
  key: 0
};
function mv(e, n) {
  return y(), pe(
    Ae,
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
              default: ve(() => [e.errorMessage ? (y(), M(
                "div",
                fv,
                ne(e.errorMessage),
                1
                /* TEXT */
              )) : x("v-if", !0)]),
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
              default: ve(() => [e.extraMessage ? (y(), M(
                "div",
                cv,
                ne(e.extraMessage),
                1
                /* TEXT */
              )) : x("v-if", !0)]),
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
      )) : x("v-if", !0)]),
      _: 1
      /* STABLE */
    },
    8,
    ["name"]
  );
}
const We = _({
  render: mv,
  name: "VarFormDetails",
  props: dv,
  setup: () => ({
    n: vv
  })
});
We.install = function(e) {
  e.component(We.name, We);
};
var e1 = We, pv = {
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
}, xl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), _l = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function hv() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(xl), {
    length: r
  } = gn(_l);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function gv() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(xl), {
    index: r
  } = yn(_l);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
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
var es = Symbol("FORM_BIND_FORM_ITEM_KEY");
function wn() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(es), r = Aa(), a = e ? (t) => {
    e(so({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function yv() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(es);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: bv,
  classes: wv
} = ee("checkbox");
function Cv(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ze("ripple");
  return y(), M(
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
      [ke((y(), M(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? H(e.$slots, "checked-icon", {
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
        )]) : H(e.$slots, "unchecked-icon", {
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
        [H(e.$slots, "default")],
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
const ar = _({
  render: Cv,
  name: "VarCheckbox",
  directives: {
    Ripple: je
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: pv,
  setup(e) {
    var n = E(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = E(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = gv(), {
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
          rules: V,
          modelValue: I
        } = e;
        d(D, k, V, I);
      });
    }, h = (k) => {
      n.value = k;
      var {
        checkedValue: D,
        onChange: V
      } = e;
      P(e["onUpdate:modelValue"], n.value), P(V, n.value), c("onChange"), k === D ? o == null || o.onChecked(D) : o == null || o.onUnchecked(D);
    }, C = (k) => {
      var {
        disabled: D,
        readonly: V,
        checkedValue: I,
        uncheckedValue: B,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || D) && (P(p, k), !(l != null && l.readonly.value || V))) {
        t.value = !0;
        var b = o ? o.checkedCount.value >= Number(o.max.value) : !1;
        !r.value && b || h(r.value ? B : I);
      }
    }, g = (k) => {
      var {
        checkedValue: D,
        uncheckedValue: V
      } = e;
      n.value = k.includes(D) ? D : V;
    }, $ = () => {
      t.value = !1;
    }, T = () => {
      P(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, w = (k) => {
      var {
        checkedValue: D,
        uncheckedValue: V
      } = e, I = ![D, V].includes(k);
      I && (k = r.value ? V : D), h(k);
    }, S = () => v(e.rules, e.modelValue);
    oe(() => e.modelValue, (k) => {
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
      n: bv,
      classes: wv,
      handleClick: C,
      toggle: w,
      reset: T,
      validate: S,
      resetValidation: f
    };
  }
});
ar.install = function(e) {
  e.component(ar.name, ar);
};
var n1 = ar;
function Sv(e) {
  return ["horizontal", "vertical"].includes(e);
}
var kv = {
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
    validator: Sv
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
  n: $v,
  classes: Tv
} = ee("checkbox-group");
function Pv(e, n) {
  var r = ie("var-form-details");
  return y(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [H(e.$slots, "default")],
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
const $r = _({
  render: Pv,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: kv,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = hv(), {
      bindForm: i
    } = wn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = bn(), v = F(() => l.value), f = (D) => {
      Ee(() => {
        var {
          validateTrigger: V,
          rules: I,
          modelValue: B
        } = e;
        s(V, D, I, B);
      });
    }, c = (D) => {
      P(e["onUpdate:modelValue"], D), P(e.onChange, D), f("onChange");
    }, h = (D) => {
      var {
        modelValue: V
      } = e;
      V.includes(D) || c([...V, D]);
    }, C = (D) => {
      var {
        modelValue: V
      } = e;
      V.includes(D) && c(V.filter((I) => I !== D));
    }, g = () => t.forEach((D) => {
      var {
        sync: V
      } = D;
      return V(e.modelValue);
    }), $ = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, T = () => {
      var D = t.map((I) => {
        var {
          checkedValue: B
        } = I;
        return B.value;
      }), V = pi(D);
      return $(), P(e["onUpdate:modelValue"], V), V;
    }, w = () => {
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
      }), V = pi(D);
      return $(), P(e["onUpdate:modelValue"], V), V;
    }, S = () => {
      P(e["onUpdate:modelValue"], []), d();
    }, O = () => u(e.rules, e.modelValue);
    oe(() => e.modelValue, g, {
      deep: !0
    }), oe(() => a.value, g);
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
      n: $v,
      classes: Tv,
      checkAll: T,
      inverseAll: w,
      reset: S,
      validate: O,
      resetValidation: d
    };
  }
});
$r.install = function(e) {
  e.component($r.name, $r);
};
var r1 = $r;
function Ov(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Vv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Mv = {
  type: {
    type: String,
    default: "default",
    validator: Ov
  },
  size: {
    type: String,
    default: "normal",
    validator: Vv
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ke(jl, "name"),
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
  n: Wn,
  classes: Ev
} = ee("chip");
function Iv(e, n) {
  var r = ie("var-icon");
  return y(), pe(
    Ae,
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
        [H(e.$slots, "left"), A(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [H(e.$slots, "default")],
          2
          /* CLASS */
        ), H(e.$slots, "right"), e.closable ? (y(), M(
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
        )) : x("v-if", !0)],
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
const tr = _({
  render: Iv,
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Mv,
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
      } = e, s = Wn(t ? "$--flex" : "$--inline-flex"), u = i ? Wn("plain") + " " + Wn("plain-" + o) : Wn("--" + o), d = l ? Wn("--round") : null;
      return [Wn("--" + a), s, u, d];
    });
    return {
      n: Wn,
      classes: Ev,
      chipStyles: n,
      contentClass: r
    };
  }
});
tr.install = function(e) {
  e.component(tr.name, tr);
};
var a1 = tr;
function Bv(e) {
  return ["row", "column"].includes(e);
}
var Nv = {
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
    validator: Bv
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
}, ns = Symbol("ROW_BIND_COL_KEY"), rs = Symbol("ROW_COUNT_COL_KEY");
function Dv() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(ns), {
    length: r
  } = gn(rs);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Av() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(ns), {
    index: r
  } = yn(rs);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: at,
  classes: zv
} = ee("col");
function Lv(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: K({
        flexDirection: e.direction,
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
const Tr = _({
  render: Lv,
  name: "VarCol",
  props: Nv,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = F(() => z(e.span)), a = F(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = Av(), i = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Wo(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(at("--span-" + s + "-" + f)), v && d.push(at("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(at("--span-" + s + "-" + u));
      return d;
    };
    return oe([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), P(o, i), {
      n: at,
      classes: zv,
      padding: n,
      toNumber: z,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var t1 = Tr, as = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), ts = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Rv() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(as), {
    length: r
  } = gn(ts);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Uv = {
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
  n: Yv
} = ee("collapse");
function Fv(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
const Pr = _({
  render: Fv,
  name: "VarCollapse",
  props: Uv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Rv(), t = F(() => e.modelValue), o = F(() => e.offset), i = () => !e.accordion && !be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, h) => i() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((C) => C !== c) : null, s = (c, h) => {
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
    return a(f), oe(() => n.value, () => Ee().then(v)), oe(() => e.modelValue, () => Ee().then(v)), {
      n: Yv
    };
  }
});
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var o1 = Pr;
function Hv() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(as), {
    index: r
  } = yn(ts);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Wv = {
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
  n: jv,
  classes: Gv
} = ee("collapse-item");
function qv(e, n) {
  var r = ie("var-icon");
  return y(), M(
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
        [H(e.$slots, "title", {}, () => [he(
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
        [H(e.$slots, "icon", {}, () => [re(
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
    ), ke(A(
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
        [H(e.$slots, "default")],
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
const Or = _({
  render: qv,
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Wv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Hv(), t = !0, o = E(null), i = E(!1), l = E(!1), {
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
          o.value.style.height = w + "px", t && Mt(() => {
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
    return a(T), oe(l, (w) => {
      w ? h() : g();
    }), {
      n: jv,
      start: C,
      classes: Gv,
      show: i,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: $
    };
  }
});
Or.install = function(e) {
  e.component(Or.name, Or);
};
var i1 = Or, Kv = {
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
  n: Xv
} = ee("countdown"), uo = 1e3, vo = 60 * uo, fo = 60 * vo, Ei = 24 * fo;
function Zv(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default", Ml(cu(e.timeData)), () => [he(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
const Vr = _({
  render: Zv,
  name: "VarCountdown",
  props: Kv,
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
      var h = Math.floor(c / Ei), C = Math.floor(c % Ei / fo), g = Math.floor(c % fo / vo), $ = Math.floor(c % vo / uo), T = Math.floor(c % uo), w = {
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
      } = e, g = Date.now();
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
      n.value = 0, r.value = !1, Iu(t.value), u();
    };
    return oe(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: i,
      n: Xv,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var l1 = Vr;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var ka = 9e15, mr = 1e9, co = "0123456789abcdef", ht = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", gt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", mo = {
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
}, os, Dn, fe = !0, Bt = "[DecimalError] ", dr = Bt + "Invalid argument: ", is = Bt + "Precision limit exceeded", ls = Bt + "crypto unavailable", ss = "[object Decimal]", Qe = Math.floor, Re = Math.pow, Jv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Qv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, xv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, us = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Tn = 1e7, de = 7, _v = 9007199254740991, ef = ht.length - 1, po = gt.length - 1, q = { toStringTag: ss };
q.absoluteValue = q.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), se(e);
};
q.ceil = function() {
  return se(new this.constructor(this), this.e + 1, 2);
};
q.clampedTo = q.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(dr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = nf(a, ms(a, r)), a.precision = e, a.rounding = n, se(Dn == 2 || Dn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Re(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = qe(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Re(r, 1 / 3), e = Qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Pe(u.plus(d).times(l), u.plus(s), i + 2, 1), qe(l.d).slice(0, i) === (r = qe(a.d)).slice(0, i))
      if (r = r.slice(i - 3, i + 1), r == "9999" || !t && r == "4999") {
        if (!t && (se(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        i += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (se(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, se(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Qe(this.e / de)) * de, e = n[e], e)
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
  return se(Pe(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
q.equals = q.eq = function(e) {
  return this.cmp(e) === 0;
};
q.floor = function() {
  return se(new this.constructor(this), this.e + 1, 3);
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
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Dt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Ma(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return se(o, i.precision = r, i.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Ma(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Dt(5, e)), t = Ma(o, 2, t, t, !0);
    for (var i, l = new o(5), s = new o(16), u = new o(20); e--; )
      i = t.times(t), t = t.times(l.plus(i.times(s.times(i).plus(u))));
  }
  return o.precision = n, o.rounding = r, se(t, n, r, !0);
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
  return t.isFinite() ? t.e >= 0 ? new o(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = o.precision, n = o.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? se(new o(t), e, n, !0) : (o.precision = r = a - t.e, t = Pe(t.plus(1), new o(1).minus(t), r + e, 1), o.precision = e + 4, o.rounding = 1, t = t.ln(), o.precision = e, o.rounding = n, t.times(0.5))) : new o(NaN);
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
    if (u.abs().eq(1) && v + 4 <= po)
      return i = kn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= po)
      return i = kn(d, v + 4, f).times(0.5), i.s = u.s, i;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), i = new d(u), t = u; e !== -1; )
    if (t = t.times(s), o = i.minus(t.div(a += 2)), t = t.times(s), i = o.plus(t.div(a += 2)), i.d[n] !== void 0)
      for (e = n; i.d[e] === o.d[e] && e--; )
        ;
  return r && (i = i.times(2 << r - 1)), fe = !0, se(i, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Qe(this.e / de) > this.d.length - 2;
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
  if (fe = !1, l = v + c, i = xn(u, l), a = n ? yt(d, l + 10) : xn(e, l), s = Pe(i, a, l, 1), Ka(s.d, t = v, f))
    do
      if (l += 10, i = xn(u, l), a = n ? yt(d, l + 10) : xn(e, l), s = Pe(i, a, l, 1), !o) {
        +qe(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = se(s, v + 1, 0));
        break;
      }
    while (Ka(s.d, t += 10, f));
  return fe = !0, se(s, v, f);
};
q.minus = q.sub = function(e) {
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
    return fe ? se(e, l, s) : e;
  }
  if (r = Qe(e.e / de), d = Qe(c.e / de), u = u.slice(), o = d - r, o) {
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
  return u[0] ? (e.d = u, e.e = Nt(u, r), fe ? se(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? se(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return ho(this);
};
q.naturalLogarithm = q.ln = function() {
  return xn(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, se(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? se(e, l, s) : e;
  if (o = Qe(v.e / de), a = Qe(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / de), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Tn | 0, u[t] %= Tn;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Nt(u, a), fe ? se(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(dr + e);
  return r.d ? (n = ds(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return se(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = af(a, ms(a, r)), a.precision = e, a.rounding = n, se(Dn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (fe = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = qe(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (o = a, a = o.plus(Pe(i, o, r + 2, 1)).times(0.5), qe(o.d).slice(0, r) === (n = qe(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (se(o, s + 1, 0), o.times(o).eq(i))) {
          a = o;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (se(a, s + 1, 1), e = !a.times(a).eq(i));
        break;
      }
  return fe = !0, se(a, s, d.rounding, e);
};
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, se(Dn == 2 || Dn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Qe(d.e / de) + Qe(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + c[a] * f[t - a - 1] + n, o[t--] = l % Tn | 0, n = l / Tn | 0;
    o[t] = (o[t] + n) % Tn | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Nt(o, r), fe ? se(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return xo(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (on(e, 0, mr), n === void 0 ? n = a.rounding : on(n, 0, 8), se(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, !0) : (on(e, 0, mr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = se(new t(a), e + 1, n), r = En(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = En(t) : (on(e, 0, mr), n === void 0 ? n = o.rounding : on(n, 0, 8), a = se(new o(t), e + t.e + 1, n), r = En(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, h = c.d, C = c.constructor;
  if (!h)
    return new C(c);
  if (u = r = new C(1), a = s = new C(0), n = new C(a), o = n.e = ds(h) - c.e - 1, i = o % de, n.d[0] = Re(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new C(e), !l.isInt() || l.lt(u))
      throw Error(dr + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new C(qe(h)), d = C.precision, C.precision = o = h.length * de * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Pe(u, a, o, 1).minus(c).abs().cmp(Pe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], C.precision = d, fe = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return xo(this, 16, e, n);
};
q.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : on(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (fe = !1, r = Pe(r, e, 0, n, 1).times(e), fe = !0, se(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return xo(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Re(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return se(l, a, o);
  if (n = Qe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= _v)
    return t = vs(s, l, r, a), e.s < 0 ? new s(1).div(t) : se(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Re(+l, u), n = r == 0 || !isFinite(r) ? Qe(u * (Math.log("0." + qe(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = ho(e.times(xn(l, a + r)), a), t.d && (t = se(t, a + 5, 1), Ka(t.d, a, o) && (n = a + 10, t = se(ho(e.times(xn(l, n + r)), n), n + 5, 1), +qe(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = se(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, se(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (on(e, 1, mr), n === void 0 ? n = t.rounding : on(n, 0, 8), a = se(new t(a), e, n), r = En(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (on(e, 1, mr), n === void 0 ? n = a.rounding : on(n, 0, 8)), se(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return se(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function qe(e) {
  var n, r, a, t = e.length - 1, o = "", i = e[0];
  if (t > 0) {
    for (o += i, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (o += Gn(r)), o += a;
    i = e[n], a = i + "", r = de - a.length, r && (o += Gn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function on(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(dr + e);
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
    for (t[0] += co.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function nf(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Dt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ma(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, h, C, g, $, T, w, S, O, k, D, V, I, B, p, b, L = a.constructor, Y = a.s == t.s ? 1 : -1, G = a.d, R = t.d;
    if (!G || !G[0] || !R || !R[0])
      return new L(
        // Return NaN if either NaN, or both Infinity or 0.
        !a.s || !t.s || (G ? R && G[0] == R[0] : !R) ? NaN : (
          // Return ±0 if x is 0 or y is ±Infinity, or return ±Infinity as y is 0.
          G && G[0] == 0 || !R ? Y * 0 : Y / 0
        )
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Tn, c = de, d = Qe(a.e / c) - Qe(t.e / c)), p = R.length, I = G.length, $ = new L(Y), T = $.d = [], v = 0; R[v] == (G[v] || 0); v++)
      ;
    if (R[v] > (G[v] || 0) && d--, o == null ? (k = o = L.precision, i = L.rounding) : l ? k = o + (a.e - t.e) + 1 : k = o, k < 0)
      T.push(1), h = !0;
    else {
      if (k = k / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], k++; (v < I || f) && k--; v++)
          D = f * s + (G[v] || 0), T[v] = D / R | 0, f = D % R | 0;
        h = f || v < I;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), G = e(G, f, s), p = R.length, I = G.length), V = p, w = G.slice(0, p), S = w.length; S < p; )
          w[S++] = 0;
        b = R.slice(), b.unshift(0), B = R[0], R[1] >= s / 2 && ++B;
        do
          f = 0, u = n(R, w, p, S), u < 0 ? (O = w[0], p != S && (O = O * s + (w[1] || 0)), f = O / B | 0, f > 1 ? (f >= s && (f = s - 1), C = e(R, f, s), g = C.length, S = w.length, u = n(C, w, g, S), u == 1 && (f--, r(C, p < g ? b : R, g, s))) : (f == 0 && (u = f = 1), C = R.slice()), g = C.length, g < S && C.unshift(0), r(w, C, S, s), u == -1 && (S = w.length, u = n(R, w, p, S), u < 1 && (f++, r(w, p < S ? b : R, S, s))), S = w.length) : u === 0 && (f++, w = [0]), T[v++] = f, u && w[0] ? w[S++] = G[V] || 0 : (w = [G[V]], S = 1);
        while ((V++ < I || w[0] !== void 0) && k--);
        h = w[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (c == 1)
      $.e = d, os = h;
    else {
      for (v = 1, f = T[0]; f >= 10; f /= 10)
        v++;
      $.e = v + d * c - 1, se($, l ? o + $.e + 1 : o, i, h);
    }
    return $;
  };
}();
function se(e, n, r, a) {
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
    return cs(e);
  var a, t = e.e, o = qe(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Gn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + Gn(-t - 1) + o, r && (a = r - i) > 0 && (o += Gn(a))) : t >= i ? (o += Gn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + Gn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += Gn(a))), o;
}
function Nt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function yt(e, n, r) {
  if (n > ef)
    throw fe = !0, r && (e.precision = r), Error(is);
  return se(new e(ht), n, 1, !0);
}
function kn(e, n, r) {
  if (n > po)
    throw Error(is);
  return se(new e(gt), n, r, !0);
}
function ds(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Gn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function vs(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Bi(o.d, i) && (t = !0)), r = Qe(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Bi(n.d, i);
  }
  return fe = !0, o;
}
function Ii(e) {
  return e.d[e.d.length - 1] & 1;
}
function fs(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ho(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Re(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = se(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), qe(l.d).slice(0, s) === qe(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = se(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && Ka(i.d, s - a, c, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return se(i, f.precision = h, c, fe = !0);
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
  if (n == null ? (fe = !1, d = w) : d = n, $.precision = d += h, r = qe(g), a = r.charAt(0), Math.abs(o = C.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      C = C.times(e), r = qe(C.d), a = r.charAt(0), c++;
    o = C.e, a > 1 ? (C = new $("0." + r), o++) : C = new $(a + "." + r.slice(1));
  } else
    return u = yt($, d + 2, w).times(o + ""), C = xn(new $(a + "." + r.slice(1)), d - h).plus(u), $.precision = w, n == null ? se(C, w, T, fe = !0) : C;
  for (v = C, s = i = C = Pe(C.minus(1), C.plus(1), d, 1), f = se(C.times(C), d, 1), t = 3; ; ) {
    if (i = se(i.times(f), d, 1), u = s.plus(Pe(i, new $(t), d, 1)), qe(u.d).slice(0, d) === qe(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(yt($, d + 2, w).times(o + ""))), s = Pe(s, new $(c), d, 1), n == null)
        if (Ka(s.d, d - h, T, l))
          $.precision = d += h, u = i = C = Pe(v.minus(1), v.plus(1), d, 1), f = se(C.times(C), d, 1), t = l = 1;
        else
          return se(s, $.precision = w, T, fe = !0);
      else
        return $.precision = w, s;
    s = u, t += 2;
  }
}
function cs(e) {
  return String(e.s * e.s / 0);
}
function go(e, n) {
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
function rf(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), us.test(n))
      return go(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Qv.test(n))
    r = 16, n = n.toLowerCase();
  else if (Jv.test(n))
    r = 2;
  else if (xv.test(n))
    r = 8;
  else
    throw Error(dr + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = vs(a, new a(r), o, o * 2)), u = ut(n, r, Tn), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Nt(u, d), e.d = u, fe = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Re(2, s) : _n.pow(2, s))), fe = !0, e);
}
function af(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ma(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Dt(5, r)), n = Ma(e, 2, n, n);
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
function Dt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function ms(e, n) {
  var r, a = n.s < 0, t = kn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Dn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Dn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Dn = Ii(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Dn = Ii(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function xo(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (on(r, 1, mr), a === void 0 ? a = c.rounding : on(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = cs(e);
  else {
    for (d = En(e), i = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - i, f.d = ut(En(f), 10, t), f.e = f.d.length), v = ut(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = os), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += co.charAt(v[i]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = ut(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += co.charAt(v[i]);
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
function Bi(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function tf(e) {
  return new this(e).abs();
}
function of(e) {
  return new this(e).acos();
}
function lf(e) {
  return new this(e).acosh();
}
function sf(e, n) {
  return new this(e).plus(n);
}
function uf(e) {
  return new this(e).asin();
}
function df(e) {
  return new this(e).asinh();
}
function vf(e) {
  return new this(e).atan();
}
function ff(e) {
  return new this(e).atanh();
}
function cf(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = kn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? kn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = kn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = kn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function mf(e) {
  return new this(e).cbrt();
}
function pf(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function hf(e, n, r) {
  return new this(e).clamp(n, r);
}
function gf(e) {
  if (!e || typeof e != "object")
    throw Error(Bt + "Object expected");
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
    if (r = o[n], t && (this[r] = mo[r]), (a = e[r]) !== void 0)
      if (Qe(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(dr + r + ": " + a);
  if (r = "crypto", t && (this[r] = mo[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(ls);
      else
        this[r] = !1;
    else
      throw Error(dr + r + ": " + a);
  return this;
}
function yf(e) {
  return new this(e).cos();
}
function bf(e) {
  return new this(e).cosh();
}
function ps(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Ni(o)) {
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
      return go(u, o.toString());
    } else if (s !== "string")
      throw Error(dr + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), us.test(o) ? go(u, o) : rf(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = gf, t.clone = ps, t.isDecimal = Ni, t.abs = tf, t.acos = of, t.acosh = lf, t.add = sf, t.asin = uf, t.asinh = df, t.atan = vf, t.atanh = ff, t.atan2 = cf, t.cbrt = mf, t.ceil = pf, t.clamp = hf, t.cos = yf, t.cosh = bf, t.div = wf, t.exp = Cf, t.floor = Sf, t.hypot = kf, t.ln = $f, t.log = Tf, t.log10 = Of, t.log2 = Pf, t.max = Vf, t.min = Mf, t.mod = Ef, t.mul = If, t.pow = Bf, t.random = Nf, t.round = Df, t.sign = Af, t.sin = zf, t.sinh = Lf, t.sqrt = Rf, t.sub = Uf, t.sum = Yf, t.tan = Ff, t.tanh = Hf, t.trunc = Wf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function wf(e, n) {
  return new this(e).div(n);
}
function Cf(e) {
  return new this(e).exp();
}
function Sf(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function kf() {
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
function Ni(e) {
  return e instanceof _n || e && e.toStringTag === ss || !1;
}
function $f(e) {
  return new this(e).ln();
}
function Tf(e, n) {
  return new this(e).log(n);
}
function Pf(e) {
  return new this(e).log(2);
}
function Of(e) {
  return new this(e).log(10);
}
function Vf() {
  return fs(this, arguments, "lt");
}
function Mf() {
  return fs(this, arguments, "gt");
}
function Ef(e, n) {
  return new this(e).mod(n);
}
function If(e, n) {
  return new this(e).mul(n);
}
function Bf(e, n) {
  return new this(e).pow(n);
}
function Nf(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : on(e, 1, mr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(ls);
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
function Df(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function Af(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function zf(e) {
  return new this(e).sin();
}
function Lf(e) {
  return new this(e).sinh();
}
function Rf(e) {
  return new this(e).sqrt();
}
function Uf(e, n) {
  return new this(e).sub(n);
}
function Yf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, se(r, this.precision, this.rounding);
}
function Ff(e) {
  return new this(e).tan();
}
function Hf(e) {
  return new this(e).tanh();
}
function Wf(e) {
  return se(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var _n = q.constructor = ps(mo);
ht = new _n(ht);
gt = new _n(gt);
var jf = {
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
  n: Gf,
  classes: qf
} = ee("counter"), Di = 100, Ai = 600, Kf = ["inputmode", "readonly", "disabled"];
function Xf(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ze("ripple");
  return y(), M(
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
      [ke(re(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
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
      }]]), ke(A(
        "input",
        {
          class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
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
        Kf
      ), [[mu, e.inputValue]]), ke(re(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: K({
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
const Mr = _({
  render: Xf,
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: je
  },
  inheritAttrs: !1,
  props: jf,
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
          validateTrigger: Q,
          rules: W,
          modelValue: J
        } = e;
        u(Q, R, W, J);
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
        modelValue: Q
      } = e;
      return R != null && z(Q) >= z(R);
    }), w = F(() => {
      var {
        min: R,
        modelValue: Q
      } = e;
      return R != null && z(Q) <= z(R);
    }), S = (R) => {
      var {
        decimalLength: Q,
        max: W,
        min: J
      } = e, N = z(R);
      return W != null && N > z(W) && (N = z(W)), J != null && N < z(J) && (N = z(J)), R = String(N), Q != null && (R = N.toFixed(z(Q))), R;
    }, O = (R) => {
      var {
        lazyChange: Q,
        onBeforeChange: W
      } = e, {
        value: J
      } = R.target, N = S(J);
      Q ? P(W, z(N), G) : Y(N), C("onInputChange");
    }, k = () => {
      var {
        disabled: R,
        readonly: Q,
        disableDecrement: W,
        decrementButton: J,
        lazyChange: N,
        step: X,
        modelValue: j,
        onDecrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || Q || W || !J) && !w.value) {
        var te = new _n(z(j)).minus(new _n(z(X))).toString(), ce = S(te), ye = z(ce);
        P(Z, ye), N ? P(ae, ye, G) : (Y(ce), C("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: R,
        readonly: Q,
        disableIncrement: W,
        incrementButton: J,
        lazyChange: N,
        step: X,
        modelValue: j,
        onIncrement: Z,
        onBeforeChange: ae
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || Q || W || !J) && !T.value) {
        var te = new _n(z(j)).plus(new _n(z(X))).toString(), ce = S(te), ye = z(ce);
        P(Z, ye), N ? P(ae, ye, G) : (Y(ce), C("onIncrement"));
      }
    }, V = () => {
      var {
        press: R,
        lazyChange: Q
      } = e;
      !R || Q || (o = window.setTimeout(() => {
        L();
      }, Ai));
    }, I = () => {
      var {
        press: R,
        lazyChange: Q
      } = e;
      !R || Q || (t = window.setTimeout(() => {
        b();
      }, Ai));
    }, B = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, b = () => {
      r = window.setTimeout(() => {
        D(), b();
      }, Di);
    }, L = () => {
      a = window.setTimeout(() => {
        k(), L();
      }, Di);
    }, Y = (R) => {
      n.value = R;
      var Q = z(R);
      P(e["onUpdate:modelValue"], Q);
    }, G = (R) => {
      Y(S(String(R))), C("onLazyChange");
    };
    return P(i, $), oe(() => e.modelValue, (R) => {
      Y(S(String(R))), P(e.onChange, z(R));
    }), Y(S(String(e.modelValue))), {
      n: Gf,
      classes: qf,
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
      increment: D,
      pressDecrement: V,
      pressIncrement: I,
      releaseDecrement: B,
      releaseIncrement: p,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
var s1 = Mr, hs = 60, gs = hs * 60, ys = gs * 24, Zf = ys * 7, Ea = 1e3, qt = hs * Ea, zi = gs * Ea, Jf = ys * Ea, Qf = Zf * Ea, _o = "millisecond", $a = "second", Ta = "minute", Pa = "hour", qn = "day", dt = "week", Sn = "month", bs = "quarter", Kn = "year", Oa = "date", xf = "YYYY-MM-DDTHH:mm:ssZ", Li = "Invalid Date", _f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ec = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const nc = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var yo = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, rc = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + yo(t, 2, "0") + ":" + yo(o, 2, "0");
}, ac = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Sn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Sn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, tc = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, oc = function(n) {
  var r = {
    M: Sn,
    y: Kn,
    w: dt,
    d: qn,
    D: Oa,
    h: Pa,
    m: Ta,
    s: $a,
    ms: _o,
    Q: bs
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, ic = function(n) {
  return n === void 0;
};
const lc = {
  s: yo,
  z: rc,
  m: ac,
  a: tc,
  p: oc,
  u: ic
};
var Wa = "en", Er = {};
Er[Wa] = nc;
var ei = function(n) {
  return n instanceof At;
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
}, He = function(n, r) {
  if (ei(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new At(a);
}, sc = function(n, r) {
  return He(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = lc;
Te.l = bt;
Te.i = ei;
Te.w = sc;
var uc = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(_f);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, At = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = bt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = uc(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== Li;
  }, n.isSame = function(a, t) {
    var o = He(a);
    return this.startOf(t) <= o && o <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return He(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < He(a);
  }, n.$g = function(a, t, o) {
    return Te.u(a) ? this[t] : this.set(o, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var o = this, i = Te.u(t) ? !0 : t, l = Te.p(a), s = function($, T) {
      var w = Te.w(o.$u ? Date.UTC(o.$y, T, $) : new Date(o.$y, T, $), o);
      return i ? w : w.endOf(qn);
    }, u = function($, T) {
      var w = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Te.w(o.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? w : S).slice(T)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Kn:
        return i ? s(1, 0) : s(31, 11);
      case Sn:
        return i ? s(1, v) : s(0, v + 1);
      case dt: {
        var h = this.$locale().weekStart || 0, C = (d < h ? d + 7 : d) - h;
        return s(i ? f - C : f + (6 - C), v);
      }
      case qn:
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
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[qn] = l + "Date", o[Oa] = l + "Date", o[Sn] = l + "Month", o[Kn] = l + "FullYear", o[Pa] = l + "Hours", o[Ta] = l + "Minutes", o[$a] = l + "Seconds", o[_o] = l + "Milliseconds", o)[i], u = i === qn ? this.$D + (t - this.$W) : t;
    if (i === Sn || i === Kn) {
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
      var c = He(o);
      return Te.w(c.date(c.date() + Math.round(f * a)), o);
    };
    if (l === Sn)
      return this.set(Sn, this.$M + a);
    if (l === Kn)
      return this.set(Kn, this.$y + a);
    if (l === qn)
      return s(1);
    if (l === dt)
      return s(7);
    var u = (i = {}, i[Ta] = qt, i[Pa] = zi, i[$a] = Ea, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || Li;
    var i = a || xf, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, h = function(w, S, O, k) {
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
    return i.replace(ec, function(T, w) {
      return w || $[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = He(a), u = (s.utcOffset() - this.utcOffset()) * qt, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[Kn] = v / 12, i[Sn] = v, i[bs] = v / 3, i[dt] = (d - u) / Qf, i[qn] = (d - u) / Jf, i[Pa] = d / zi, i[Ta] = d / qt, i[$a] = d / Ea, i)[l] || d, o ? v : Te.a(v);
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
}(), ws = At.prototype;
He.prototype = ws;
[["$ms", _o], ["$s", $a], ["$m", Ta], ["$H", Pa], ["$W", qn], ["$M", Sn], ["$y", Kn], ["$D", Oa]].forEach(function(e) {
  ws[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
He.extend = function(e, n) {
  return e.$i || (e(n, At, He), e.$i = !0), He;
};
He.locale = bt;
He.isDayjs = ei;
He.unix = function(e) {
  return He(e * 1e3);
};
He.en = Er[Wa];
He.Ls = Er;
He.p = {};
const ue = He, Cs = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Ss = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function dc(e) {
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
}], vc = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: dc
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
  n: fc
} = ee("picker-header");
function cc(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
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
const ks = _({
  render: cc,
  name: "PanelHeader",
  components: {
    VarButton: rn,
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
    return oe(() => e.date, () => {
      t.value = 0;
    }), {
      n: fc,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
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
ue.extend(Cs);
ue.extend(Ss);
var {
  n: tt,
  classes: mc
} = ee("month-picker"), {
  n: ot
} = ee("date-picker");
function pc(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return y(), M(
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
          default: ve(() => [(y(), M("ul", {
            key: e.panelKey
          }, [(y(!0), M(
            Oe,
            null,
            Ne(e.MONTH_LIST, (t) => (y(), M("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, bo({}, e.buttonProps(t.index)), {
                onClick: (o) => e.chooseMonth(t, o)
              }),
              {
                default: ve(() => [he(
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
const hc = _({
  render: pc,
  name: "MonthPickerPanel",
  components: {
    VarButton: rn,
    PanelHeader: ks
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
      } = e, k = !0, D = !0, V = w + "-" + T;
      return O && (k = ue(V).isSameOrBefore(ue(O), "month")), S && (D = ue(V).isSameOrAfter(ue(S), "month")), k && D;
    }, c = (T) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: S,
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
        var V = ue(T).isSameOrBefore(ue(O[1]), "month"), I = ue(T).isSameOrAfter(ue(O[0]), "month");
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
          multiple: D,
          range: V
        }
      } = e, I = S + "-" + T, B = () => V || D ? c(I) : (w == null ? void 0 : w.index) === T && u.value, p = () => f(T) ? O ? !O(I) : !1 : !0, b = p(), L = () => b ? !0 : V || D ? !c(I) : !u.value || (w == null ? void 0 : w.index) !== T, Y = () => d.value && t === T && e.componentProps.showCurrent ? (V || D || u.value) && b ? !0 : V || D ? !c(I) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, G = () => b ? "" : Y() ? k ?? "" : B() ? "" : ot() + "-color-cover", R = G().startsWith(ot());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : k,
        textColor: R ? "" : G(),
        [ot() + "-color-cover"]: R,
        class: mc(tt("button"), [b, tt("button--disabled")])
      };
    }, C = (T, w) => {
      var S = w.currentTarget;
      S.classList.contains(tt("button--disabled")) || r("choose-month", T);
    }, g = (T) => {
      o.value = T === "prev", i.value += T === "prev" ? -1 : 1, r("check-preview", "year", T);
    }, $ = (T) => {
      l.value.checkDate(T);
    };
    return oe(() => e.preview.previewYear, (T) => {
      var {
        componentProps: {
          min: w,
          max: S
        }
      } = e;
      S && (s.right = !ue("" + (z(T) + 1)).isSameOrBefore(ue(S), "year")), w && (s.left = !ue("" + (z(T) - 1)).isSameOrAfter(ue(w), "year"));
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
var {
  n: Ri,
  classes: gc
} = ee("year-picker"), yc = ["onClick"];
function bc(e, n) {
  return y(), M(
    "ul",
    {
      class: m(e.n())
    },
    [(y(!0), M(
      Oe,
      null,
      Ne(e.yearList, (r) => (y(), M(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: K({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        yc
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
const wc = _({
  render: bc,
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
        var d = ue(l).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ue(s).format("YYYY-MM-D"), c = z(f.split("-")[0]);
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
      var o = document.querySelector("." + Ri("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Ri,
      classes: gc,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
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
ue.extend(Cs);
ue.extend(Ss);
var {
  n: Sa,
  classes: Cc
} = ee("day-picker"), {
  n: it
} = ee("date-picker");
function Sc(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return y(), M(
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
          default: ve(() => [(y(), M("div", {
            key: e.panelKey
          }, [A(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(y(!0), M(
              Oe,
              null,
              Ne(e.sortWeekList, (t) => (y(), M(
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
            [(y(!0), M(
              Oe,
              null,
              Ne(e.days, (t, o) => (y(), M("li", {
                key: o
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, wo({}, e.buttonProps(t)), {
                  onClick: (i) => e.chooseDay(t, i)
                }),
                {
                  default: ve(() => [he(
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
const kc = _({
  render: Sc,
  name: "DayPickerPanel",
  components: {
    VarButton: rn,
    PanelHeader: ks
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
      } = e, B = ue(I + "-" + V.index).daysInMonth(), p = ue(I + "-" + V.index + "-01").day(), b = c.value.findIndex((L) => L.index === "" + p);
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
        d.right = !ue(b).isSameOrBefore(ue(B), "month");
      }
      if (p) {
        var L = V + "-" + (z(I.index) - 1);
        d.left = !ue(L).isSameOrAfter(ue(p), "month");
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
      } = e, L = !0, Y = !0, G = I + "-" + B.index + "-" + V;
      return b && (L = ue(G).isSameOrBefore(ue(b), "day")), p && (Y = ue(G).isSameOrAfter(ue(p), "day")), L && Y;
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
        var b = ue(V).isSameOrBefore(ue(B[1]), "day"), L = ue(V).isSameOrAfter(ue(B[0]), "day");
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
          multiple: Y,
          range: G
        }
      } = e, R = B + "-" + p.index + "-" + V, Q = () => G || Y ? w(R) : z(I) === V && f.value, W = () => T(V) ? b ? !b(R) : !1 : !0, J = W(), N = () => J ? !0 : G || Y ? !w(R) : !f.value || z(I) !== V, X = () => v.value && z(o) === V && e.componentProps.showCurrent ? (G || Y || f.value) && J ? !0 : G || Y ? !w(R) : f.value ? I !== o : !0 : !1, j = () => J ? "" : X() ? L ?? "" : Q() ? "" : it() + "-color-cover", Z = j().startsWith(it());
      return {
        text: N(),
        outline: X(),
        textColor: Z ? "" : j(),
        [it() + "-color-cover"]: Z,
        class: Cc(Sa("button"), Sa("button--usable"), [J, Sa("button--disabled")])
      };
    }, O = (V) => {
      l.value = V === "prev", s.value += V === "prev" ? -1 : 1, r("check-preview", "month", V);
    }, k = (V, I) => {
      var B = I.currentTarget;
      B.classList.contains(Sa("button--disabled")) || r("choose-day", V);
    }, D = (V) => {
      u.value.checkDate(V);
    };
    return Ue(() => {
      g(), $();
    }), oe(() => e.preview, () => {
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
      forwardRef: D,
      filterDay: C,
      getDayAbbr: h,
      checkDate: O,
      chooseDay: k,
      buttonProps: S
    };
  }
});
var {
  n: $c,
  classes: Tc
} = ee("date-picker");
function Pc(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (o) => e.clickEl("year"))
        },
        [H(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
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
              var o, i, l;
              return [e.type === "month" ? (y(), M("div", {
                key: "" + e.chooseYear + ((o = e.chooseMonth) == null ? void 0 : o.index)
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )]) : H(e.$slots, "month", {
                key: 2,
                month: (i = e.chooseMonth) == null ? void 0 : i.index,
                year: e.chooseYear
              }, () => [he(
                ne(e.getMonthTitle),
                1
                /* TEXT */
              )])])) : (y(), M("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                ne(e.getDateTitle),
                1
                /* TEXT */
              )]) : H(e.$slots, "date", Ml(Ve({
                key: 2
              }, e.slotProps)), () => [he(
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
          default: ve(() => [e.getPanelType === "year" ? (y(), pe(
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
          )) : e.getPanelType === "month" ? (y(), pe(
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
          )) : e.getPanelType === "date" ? (y(), pe(
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
          )) : x("v-if", !0)]),
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
const Ir = _({
  render: Pc,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: hc,
    YearPickerPanel: wc,
    DayPickerPanel: kc
  },
  props: vc,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = ue().format("YYYY-MM-D"), [i, l] = o.split("-"), s = vt.find((le) => le.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), h = E(), C = E(s), g = E(i), $ = E(!1), T = E([]), w = E([]), S = E([]), O = E([]), k = E(null), D = E(null), V = Me({
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
        multiple: le,
        range: ge
      } = e;
      if (ge)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var me = "";
      if (f.value) {
        var Ce, Se;
        me = (Ce = (Se = Fe.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? Ce : "";
      }
      return le ? "" + T.value.length + Fe.value.datePickerSelected : me;
    }), b = F(() => {
      var le, ge, me, Ce, {
        multiple: Se,
        range: ze
      } = e;
      if (ze) {
        var _e = O.value.map((Wt) => ue(Wt).format("YYYY-MM-DD"));
        return _e.length ? _e[0] + " ~ " + _e[1] : "";
      }
      if (Se)
        return "" + w.value.length + Fe.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var fn = ue(c.value + "-" + f.value.index + "-" + h.value).day(), Ca = Ha.find((Wt) => Wt.index === "" + fn), fi = (le = (ge = Fe.value.datePickerWeekDict) == null ? void 0 : ge[Ca.index].name) != null ? le : "", uu = (me = (Ce = Fe.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? me : "", du = va(h.value, 2, "0");
      return Fe.value.lang === "zh-CN" ? f.value.index + "-" + du + " " + fi.slice(0, 3) : fi.slice(0, 3) + ", " + uu.slice(0, 3) + " " + h.value;
    }), L = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = F(() => !e.touchable || ["", "year"].includes(L.value)), G = F(() => {
      var le, ge, me, Ce, Se = ue(c.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + h.value).day(), ze = h.value ? va(h.value, 2, "0") : "";
      return {
        week: "" + Se,
        year: (ge = c.value) != null ? ge : "",
        month: (me = (Ce = f.value) == null ? void 0 : Ce.index) != null ? me : "",
        date: ze
      };
    }), R = F(() => I.value.chooseRangeDay.map((le) => ue(le).format("YYYY-MM-DD"))), Q = F(() => c.value === g.value), W = F(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === C.value.index;
    }), J = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (le) => {
      if (!Y.value) {
        var {
          clientX: ge,
          clientY: me
        } = le.touches[0];
        n = ge, r = me;
      }
    }, X = (le, ge) => le >= ge && le > 20 ? "x" : "y", j = (le) => {
      if (!Y.value) {
        var {
          clientX: ge,
          clientY: me
        } = le.touches[0], Ce = ge - n, Se = me - r;
        t = X(Math.abs(Ce), Math.abs(Se)), a = Ce > 0 ? "prev" : "next";
      }
    }, Z = () => {
      if (!(Y.value || t !== "x")) {
        var le = L.value === "month" ? k : D;
        Mt(() => {
          le.value.forwardRef(a), vi();
        });
      }
    }, ae = (le, ge) => {
      var me = ge === "month" ? S : O;
      if (me.value = v.value ? [le, le] : [me.value[0], le], v.value = !v.value, v.value) {
        var Ce = ue(me.value[0]).isAfter(me.value[1]), Se = Ce ? [me.value[1], me.value[0]] : [...me.value];
        P(e["onUpdate:modelValue"], Se), P(e.onChange, Se);
      }
    }, te = (le, ge) => {
      var me = ge === "month" ? T : w, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-DD", Se = me.value.map((_e) => ue(_e).format(Ce)), ze = Se.findIndex((_e) => _e === le);
      ze === -1 ? Se.push(le) : Se.splice(ze, 1), P(e["onUpdate:modelValue"], Se), P(e.onChange, Se);
    }, ce = (le, ge) => !c.value || !f.value ? !1 : Q.value ? le === "month" ? ge.index < f.value.index : W.value ? ge < z(h.value) : f.value.index > C.value.index : c.value > g.value, ye = (le) => {
      var {
        readonly: ge,
        range: me,
        multiple: Ce,
        onChange: Se,
        "onUpdate:modelValue": ze
      } = e;
      if (!(le < 0 || ge)) {
        $.value = ce("day", le);
        var _e = g.value + "-" + C.value.index + "-" + le, fn = ue(_e).format("YYYY-MM-DD");
        me ? ae(fn, "day") : Ce ? te(fn, "day") : (P(ze, fn), P(Se, fn));
      }
    }, Ye = (le) => {
      var {
        type: ge,
        readonly: me,
        range: Ce,
        multiple: Se,
        onChange: ze,
        onPreview: _e,
        "onUpdate:modelValue": fn
      } = e;
      if ($.value = ce("month", le), ge === "month" && !me) {
        var Ca = g.value + "-" + le.index;
        Ce ? ae(Ca, "month") : Se ? te(Ca, "month") : (P(fn, Ca), P(ze, Ca));
      } else
        C.value = le, P(_e, z(g.value), z(C.value.index));
      d.value = !1;
    }, xe = (le) => {
      g.value = "" + le, u.value = !1, d.value = !0, P(e.onPreview, z(g.value), z(C.value.index));
    }, Be = (le, ge) => {
      var me = ge === "prev" ? -1 : 1;
      if (le === "year")
        g.value = "" + (z(g.value) + me);
      else {
        var Ce = z(C.value.index) + me;
        Ce < 1 && (g.value = "" + (z(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (z(g.value) + 1), Ce = 1), C.value = vt.find((Se) => z(Se.index) === Ce);
      }
      P(e.onPreview, z(g.value), z(C.value.index));
    }, Ge = () => (e.multiple || e.range) && !be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ht = (le) => be(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, iu = (le, ge) => {
      var me = ge === "month" ? S : O, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = le.map((fn) => ue(fn).format(Ce)).slice(0, 2), ze = me.value.some((fn) => Ht(fn));
      if (!ze) {
        me.value = Se;
        var _e = ue(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && _e && (me.value = [me.value[1], me.value[0]]);
      }
    }, lu = (le, ge) => {
      var me = ge === "month" ? T : w, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = Array.from(new Set(le.map((ze) => ue(ze).format(Ce))));
      me.value = Se.filter((ze) => ze !== "Invalid Date");
    }, su = (le) => {
      var ge = ue(le).format("YYYY-MM-D");
      if (!Ht(ge)) {
        var [me, Ce, Se] = ge.split("-"), ze = vt.find((_e) => _e.index === Ce);
        f.value = ze, c.value = me, h.value = Se, C.value = ze, g.value = me;
      }
    }, vi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return oe(() => e.modelValue, (le) => {
      if (!(!Ge() || Ht(le) || !le))
        if (e.range) {
          if (!be(le))
            return;
          v.value = le.length !== 1, iu(le, e.type);
        } else if (e.multiple) {
          if (!be(le))
            return;
          lu(le, e.type);
        } else
          su(le);
    }, {
      immediate: !0
    }), oe(L, vi), {
      n: $c,
      classes: Tc,
      monthPanelEl: k,
      dayPanelEl: D,
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
      slotProps: G,
      formatRange: R,
      clickEl: J,
      handleTouchstart: N,
      handleTouchmove: j,
      handleTouchend: Z,
      getChooseDay: ye,
      getChooseMonth: Ye,
      getChooseYear: xe,
      checkPreview: Be
    };
  }
});
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var u1 = Ir;
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
function Oc(e) {
  return ["left", "center", "right"].includes(e);
}
var Vc = Co({
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
    validator: Oc
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
var {
  n: Mc,
  classes: Ec
} = ee("dialog");
function Ic(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
  return y(), pe(
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
          style: So({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("title"))
          },
          [H(e.$slots, "title", {}, () => [he(
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
            style: K({
              textAlign: e.messageAlign
            })
          },
          [H(e.$slots, "default", {}, () => [he(
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
          [e.cancelButton ? (y(), pe(
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
              default: ve(() => [he(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (y(), pe(
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
              default: ve(() => [he(
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0)],
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
const or = _({
  render: Ic,
  name: "VarDialog",
  components: {
    VarPopup: mn,
    VarButton: rn
  },
  inheritAttrs: !1,
  props: Vc,
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
    return oe(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), oe(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: Mc,
      classes: Ec,
      pack: Fe,
      dt: Ot,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: we
    };
  }
});
var Zn;
function ca(e) {
  return Go() ? new Promise((n) => {
    ca.close();
    var r = Je(e) || Xe(e) ? {
      message: String(e)
    } : e, a = Me(r);
    a.teleport = "body", Zn = a;
    var {
      unmountInstance: t
    } = Ua(or, a, {
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
        P(a.onClosed), t(), Zn === a && (Zn = null);
      },
      onRouteChange: () => {
        t(), Zn === a && (Zn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
or.install = function(e) {
  e.component(or.name, or);
};
ca.install = function(e) {
  e.component(or.name, or);
};
ca.close = () => {
  if (Zn != null) {
    var e = Zn;
    Zn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
ca.Component = or;
var d1 = or, Bc = {
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
  n: Nc,
  classes: Dc
} = ee("divider");
function Ac(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [H(e.$slots, "default", {}, () => [e.description ? (y(), M(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
const Br = _({
  render: Ac,
  name: "VarDivider",
  props: Bc,
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
    }), Ho(() => {
      i();
    }), Va({
      n: Nc,
      classes: Dc
    }, pu(a), {
      style: o,
      isInset: t
    });
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
var v1 = Br;
function zc(e) {
  return ["start", "end"].includes(e);
}
var Lc = {
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
    validator: zc
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function Ui(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Rc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Ui(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Ui(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Uc
} = ee("form");
function Yc(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
    /* CLASS */
  );
}
const An = _({
  render: Yc,
  name: "VarForm",
  props: Lc,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = yv(), o = (d, v) => {
      setTimeout(() => {
        var f = wa(v), c = f === window ? 0 : wi(f), h = wi(v) - c - De(e.scrollToErrorOffsetY);
        qa(f, {
          top: h,
          animation: _t
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = Rc(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: $
          } = g;
          return $();
        }));
        if (e.scrollToError) {
          var [, f] = Cu(v, (g) => g === !1, e.scrollToError), c = f > -1;
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
      n: Uc,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
An.install = function(e) {
  e.component(An.name, An);
};
An.useValidation = bn;
An.useForm = wn;
var f1 = An;
function Yi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zt(e) {
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
var Fc = "background-image", Hc = "lazy-loading", Wc = "lazy-error", Fi = "lazy-attempt", jc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], $o = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ia = [], wt = [], $s = Su(100), Le = {
  loading: $o,
  error: $o,
  attempt: 3,
  throttleWait: 300,
  events: jc
}, ni = jo(et, Le.throttleWait);
function Lt(e, n) {
  e._lazy.arg === Fc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Gc(e) {
  e._lazy.loading && Lt(e, e._lazy.loading), et();
}
function qc(e) {
  e._lazy.error && Lt(e, e._lazy.error), e._lazy.state = "error", ai(e), et();
}
function Ts(e, n) {
  Lt(e, n), e._lazy.state = "success", ai(e), et();
}
function Kc(e) {
  var n;
  wt.includes(e) || (wt.push(e), (n = Le.events) == null || n.forEach((r) => {
    e.addEventListener(r, ni, {
      passive: !0
    });
  }));
}
function Xc() {
  wt.forEach((e) => {
    var n;
    (n = Le.events) == null || n.forEach((r) => {
      e.removeEventListener(r, ni);
    });
  }), wt.length = 0;
}
function Zc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Hc)) != null ? r : Le.loading,
    error: (a = e.getAttribute(Wc)) != null ? a : Le.error,
    attempt: e.getAttribute(Fi) ? Number(e.getAttribute(Fi)) : Le.attempt
  };
  e._lazy = ko({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Lt(e, $o), P(Le.filter, e._lazy);
}
function Jc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, $s.add(n), Ts(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? qc(e) : Ps(e);
  });
}
function Ps(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if ($s.has(n)) {
      Ts(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Gc(e), Jc(e, n);
  }
}
function ri(e) {
  return To.apply(this, arguments);
}
function To() {
  return To = zt(function* (e) {
    (yield Tu(e)) && Ps(e);
  }), To.apply(this, arguments);
}
function et() {
  Ia.forEach((e) => ri(e));
}
function Qc(e) {
  return Po.apply(this, arguments);
}
function Po() {
  return Po = zt(function* (e) {
    !Ia.includes(e) && Ia.push(e), Pu(e).forEach(Kc), yield ri(e);
  }), Po.apply(this, arguments);
}
function ai(e) {
  Pt(Ia, e), Ia.length === 0 && Xc();
}
function xc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Os(e, n) {
  return Oo.apply(this, arguments);
}
function Oo() {
  return Oo = zt(function* (e, n) {
    Zc(e, n), yield Qc(e);
  }), Oo.apply(this, arguments);
}
function _c(e, n) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return Vo = zt(function* (e, n) {
    if (!xc(e, n)) {
      Ia.includes(e) && (yield ri(e));
      return;
    }
    yield Os(e, n);
  }), Vo.apply(this, arguments);
}
function em(e) {
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
var Vs = {
  mounted: Os,
  unmounted: ai,
  updated: _c,
  install(e, n) {
    em(n), ni = jo(et, Le.throttleWait), e.directive("lazy", this);
  }
}, c1 = Vs;
const Ct = Vs;
function nm(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var rm = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: nm,
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
  n: am,
  classes: tm
} = ee("image"), om = ["alt", "title", "lazy-error", "lazy-loading"], im = ["alt", "title", "src"];
function lm(e, n) {
  var r = Ze("lazy"), a = Ze("ripple");
  return ke((y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
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
        style: K({
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
      om
    )), [[r, e.src]]) : (y(), M(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: K({
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
      im
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Nr = _({
  render: lm,
  name: "VarImage",
  directives: {
    Lazy: Ct,
    Ripple: je
  },
  props: rm,
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
      n: am,
      classes: tm,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var m1 = Nr, Ms = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Es = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function sm() {
  var {
    childProviders: e,
    bindChildren: n
  } = dn(Ms), {
    length: r
  } = gn(Es);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Is = {
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
function Hi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function um(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Hi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Hi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var dm = 250, vm = 20, {
  n: fm,
  classes: cm
} = ee("swipe"), mm = ["onClick"];
function pm(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: K({
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
      [H(e.$slots, "default")],
      38
      /* CLASS, STYLE, HYDRATE_EVENTS */
    ), H(e.$slots, "indicator", {
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
        Ne(e.length, (r, a) => (y(), M(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: K({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          mm
        ))),
        128
        /* KEYED_FRAGMENT */
      ))],
      2
      /* CLASS */
    )) : x("v-if", !0)])],
    2
    /* CLASS */
  );
}
const zn = _({
  render: pm,
  name: "VarSwipe",
  props: Is,
  setup(e) {
    var n = E(null), r = E(0), a = F(() => e.vertical), t = E(0), o = E(0), i = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = sm(), v = !1, f = -1, c, h, C, g, $, T = (N) => s.find((X) => {
      var {
        index: j
      } = X;
      return j.value === N;
    }), w = () => {
      e.loop && (o.value >= 0 && T(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && T(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (T(d.value - 1).setTranslate(0), T(0).setTranslate(0)));
    }, S = (N) => {
      var X = Xe(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
        loop: j
      } = e;
      return X <= -1 ? j ? -1 : 0 : X >= d.value ? j ? d.value : d.value - 1 : X;
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
      var X = o.value >= r.value, j = o.value <= -t.value, Z = 0, ae = -(t.value - r.value);
      i.value = !0, (X || j) && (i.value = !0, o.value = j ? Z : ae, T(0).setTranslate(0), T(d.value - 1).setTranslate(0)), Mt(() => {
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
          clientY: j
        } = N.touches[0];
        c = X, h = j, C = performance.now(), v = !0, B(), D(() => {
          i.value = !0;
        });
      }
    }, L = (N) => {
      var {
        touchable: X,
        vertical: j
      } = e;
      if (!(!v || !X)) {
        var {
          clientX: Z,
          clientY: ae
        } = N.touches[0], te = Math.abs(Z - c), ce = Math.abs(ae - h), ye = p(te, ce), Ye = j ? "vertical" : "horizontal";
        if (ye === Ye) {
          N.preventDefault();
          var xe = g !== void 0 ? Z - g : 0, Be = $ !== void 0 ? ae - $ : 0;
          g = Z, $ = ae, o.value += j ? Be : xe, w();
        }
      }
    }, Y = () => {
      if (v) {
        var {
          vertical: N,
          onChange: X
        } = e, j = N ? $ < h : g < c, Z = Math.abs(N ? h - $ : c - g), ae = performance.now() - C <= dm && Z >= vm, te = ae ? S(j ? l.value + 1 : l.value - 1) : S();
        v = !1, i.value = !1, g = void 0, $ = void 0, o.value = te * -r.value;
        var ce = l.value;
        l.value = O(te), I(), ce !== l.value && P(X, l.value);
      }
    }, G = () => {
      n.value && (i.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, o.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), I(), setTimeout(() => {
        i.value = !1;
      }));
    }, R = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: j
        } = e, Z = l.value;
        l.value = k(Z + 1), (N == null ? void 0 : N.event) !== !1 && P(j, l.value), D(() => {
          if (Z === d.value - 1 && X) {
            T(0).setTranslate(t.value), o.value = d.value * -r.value;
            return;
          }
          Z !== d.value - 1 && (o.value = l.value * -r.value);
        });
      }
    }, Q = (N) => {
      if (!(d.value <= 1)) {
        var {
          loop: X,
          onChange: j
        } = e, Z = l.value;
        l.value = k(Z - 1), (N == null ? void 0 : N.event) !== !1 && P(j, l.value), D(() => {
          if (Z === 0 && X) {
            T(d.value - 1).setTranslate(-t.value), o.value = r.value;
            return;
          }
          Z !== 0 && (o.value = l.value * -r.value);
        });
      }
    }, W = (N, X) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var j = N > l.value ? R : Q, Z = Math.abs(N - l.value);
        Array.from({
          length: Z
        }).forEach((ae, te) => {
          j({
            event: te === Z - 1 ? X == null ? void 0 : X.event : !1
          });
        });
      }
    }, J = {
      size: r,
      vertical: a
    };
    return u(J), oe(() => d.value, /* @__PURE__ */ um(function* () {
      yield Mn(), V(), G();
    })), Ue(() => {
      window.addEventListener("resize", G);
    }), cr(() => {
      window.removeEventListener("resize", G), B();
    }), {
      n: fm,
      classes: cm,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: o,
      lockDuration: i,
      handleTouchstart: b,
      handleTouchmove: L,
      handleTouchend: Y,
      next: R,
      prev: Q,
      to: W,
      resize: G,
      toNumber: z
    };
  }
});
zn.install = function(e) {
  e.component(zn.name, zn);
};
var p1 = zn;
function hm() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(Ms), {
    index: r
  } = yn(Es);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: gm
} = ee("swipe-item");
function ym(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
const Ln = _({
  render: ym,
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = hm(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: gm,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var h1 = Ln;
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
var bm = Mo({
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
}, Ke(Is, ["loop", "indicator", "onChange"]), Ke(xa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Wi,
  classes: wm
} = ee("image-preview"), ji = 12, Gi = 200, Cm = 350, qi = 200, Sm = ["src", "alt"];
function km(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), o = ie("var-popup");
  return y(), pe(
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
            Ne(e.images, (i) => (y(), pe(
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
                    style: K({
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
                    Sm
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
            return [H(e.$slots, "indicator", {
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
            )) : x("v-if", !0)])];
          }),
          _: 3
          /* FORWARDED */
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), H(e.$slots, "close-icon", {}, () => [e.closeable ? (y(), pe(
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
      )) : x("v-if", !0)]), A(
        "div",
        {
          class: m(e.n("extra"))
        },
        [H(e.$slots, "extra")],
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
const ir = _({
  render: km,
  name: "VarImagePreview",
  components: {
    VarSwipe: zn,
    VarSwipeItem: Ln,
    VarPopup: mn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: bm,
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
        clientX: Y,
        clientY: G
      } = p;
      return Math.abs(Math.sqrt(Math.pow(Y - b, 2) + Math.pow(G - L, 2)));
    }, c = (B, p) => ({
      clientX: B.clientX,
      clientY: B.clientY,
      timestamp: Date.now(),
      target: p
    }), h = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        i.value = "linear", l.value = "0s";
      }, qi);
    }, C = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, g = (B) => d ? f(d, B) <= ji && B.timestamp - d.timestamp <= Gi && d.target === B.target : !1, $ = (B) => !B || !u || !d ? !1 : f(u, d) <= ji && Date.now() - d.timestamp < Cm && (B === u.target || B.parentNode === u.target), T = (B) => {
      v = window.setTimeout(() => {
        $(B.target) && I(), u = null;
      }, Gi);
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
        naturalHeight: Y
      } = B.querySelector("." + Wi("image"));
      return {
        width: p,
        height: b,
        imageRadio: Y / L,
        rootRadio: b / p,
        zoom: z(e.zoom)
      };
    }, O = (B) => {
      var {
        zoom: p,
        imageRadio: b,
        rootRadio: L,
        width: Y,
        height: G
      } = S(B);
      if (!b)
        return 0;
      var R = b > L ? G / b : Y;
      return Math.max(0, (p * R - Y) / 2) / p;
    }, k = (B) => {
      var {
        zoom: p,
        imageRadio: b,
        rootRadio: L,
        width: Y,
        height: G
      } = S(B);
      if (!b)
        return 0;
      var R = b > L ? G : Y * b;
      return Math.max(0, (p * R - G) / 2) / p;
    }, D = (B, p, b) => B + p >= b ? b : B + p <= -b ? -b : B + p, V = (B) => {
      if (d) {
        var p = B.currentTarget, {
          touches: b
        } = B, L = c(b[0], p);
        if (a.value > 1) {
          var Y = L.clientX - d.clientX, G = L.clientY - d.clientY, R = O(p), Q = k(p);
          t.value = D(t.value, Y, R), o.value = D(o.value, G, Q);
        }
        d = L;
      }
    }, I = () => {
      if (a.value > 1) {
        C(), setTimeout(() => P(e["onUpdate:show"], !1), qi);
        return;
      }
      P(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: Wi,
      classes: wm,
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
var Jn;
function vr(e) {
  if (Go()) {
    vr.close();
    var n = Je(e) ? {
      images: [e]
    } : be(e) ? {
      images: e
    } : e, r = Me(n);
    r.teleport = "body", Jn = r;
    var {
      unmountInstance: a
    } = Ua(ir, r, {
      onClose: () => P(r.onClose),
      onClosed: () => {
        P(r.onClosed), a(), Jn === r && (Jn = null);
      },
      onRouteChange: () => {
        a(), Jn === r && (Jn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
vr.close = () => {
  if (Jn != null) {
    var e = Jn;
    Jn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
ir.install = function(e) {
  e.component(ir.name, ir);
};
vr.install = function(e) {
  e.component(ir.name, ir);
};
vr.Component = ir;
var g1 = ir, ft = {
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
function Ki(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Xi(e) {
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
var {
  n: $m,
  classes: Tm
} = ee("sticky");
function Pm(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: K({
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
        style: K({
          zIndex: e.toNumber(e.zIndex),
          position: e.enableFixedMode ? "fixed" : void 0,
          width: e.enableFixedMode ? e.fixedWrapperWidth : void 0,
          height: e.enableFixedMode ? e.fixedWrapperHeight : void 0,
          left: e.enableFixedMode ? e.fixedLeft : void 0,
          top: e.enableFixedMode ? e.fixedTop : void 0
        })
      },
      [H(e.$slots, "default")],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  );
}
const Rn = _({
  render: Pm,
  name: "VarSticky",
  props: ft,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), o = E("0px"), i = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => De(e.offsetTop)), c, h = () => {
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
        var D = r.value, V = n.value, {
          top: I,
          left: B
        } = V.getBoundingClientRect(), p = I - O;
        return p <= f.value ? (w || (i.value = V.offsetWidth + "px", l.value = V.offsetHeight + "px", t.value = O + f.value + "px", o.value = B + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
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
      var w = Xi(function* () {
        a.value = !1, yield Bu(), h();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var w = Xi(function* () {
        yield Mn(), c = wa(n.value), c !== window && c.addEventListener("scroll", C), window.addEventListener("scroll", C), C();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), T = () => {
      c !== window && c.removeEventListener("scroll", C), window.removeEventListener("scroll", C);
    };
    return oe(() => e.disabled, g), Yo($), Fo(T), Ue($), cr(T), {
      n: $m,
      classes: Tm,
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
Rn.install = function(e) {
  e.component(Rn.name, Rn);
};
var y1 = Rn, Bs = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), Ns = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Om() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Bs), {
    length: r
  } = gn(Ns);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Vm() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(Bs), {
    index: r
  } = yn(Ns);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Mm = {
  index: {
    type: [Number, String]
  }
}, {
  n: Em,
  classes: Im
} = ee("index-anchor");
function Bm(e, n) {
  return y(), pe(
    Ra(e.sticky ? e.n("$-sticky") : e.Transition),
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
        [H(e.$slots, "default", {}, () => [he(
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
const Dr = _({
  render: Bm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: Mm,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Vm(), t = E(0), o = E(!1), i = F(() => e.index), l = E(null), {
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
      n: Em,
      classes: Im,
      name: i,
      anchorEl: l,
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
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var b1 = Dr, Nm = {
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
function Zi(e, n, r, a, t, o, i) {
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
        Zi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Zi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Dm,
  classes: Am
} = ee("index-bar"), zm = ["onClick"];
function Lm(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [H(e.$slots, "default"), A(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(y(!0), M(
        Oe,
        null,
        Ne(e.anchorNameList, (r) => (y(), M(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: K({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick({
              anchorName: r,
              manualCall: !0
            })
          },
          ne(r),
          15,
          zm
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
const Ar = _({
  render: Lm,
  name: "VarIndexBar",
  props: Nm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Om(), t = E(""), o = E(null), i = E(null), l = E([]), s = E(), u = F(() => e.sticky), d = F(() => e.cssMode), v = F(() => De(e.stickyOffsetTop)), f = F(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = (w, S) => {
      var O = Wo(w) ? w.name.value : w;
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
      var w = Vt(o.value), S = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, O = C();
      r.forEach((k, D) => {
        var V = k.ownTop.value, I = w - V + v.value - O, B = D === r.length - 1 ? S : r[D + 1].ownTop.value - k.ownTop.value;
        I >= 0 && I < B && t.value === "" && (D && !e.cssMode && r[D - 1].setDisabled(!0), k.setDisabled(!1), h(k));
      });
    }, $ = /* @__PURE__ */ function() {
      var w = Kt(function* (S) {
        var {
          anchorName: O,
          manualCall: k = !1,
          options: D
        } = S;
        if (k && P(e.onClick, O), O !== s.value) {
          var V = r.find((b) => {
            var {
              name: L
            } = b;
            return O === L.value;
          });
          if (V) {
            var I = C(), B = V.ownTop.value - v.value + I, p = qo(o.value);
            t.value = O, h(O, D), yield qa(o.value, {
              left: p,
              top: B,
              animation: Il,
              duration: z(e.duration)
            }), Mt(() => {
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
    return oe(() => n.value, /* @__PURE__ */ Kt(function* () {
      yield Mn(), r.forEach((w) => {
        var {
          name: S,
          setOwnTop: O
        } = w;
        S.value && l.value.push(S.value), O();
      });
    })), Ue(/* @__PURE__ */ Kt(function* () {
      yield Mn(), o.value = wa(i.value), o.value.addEventListener("scroll", g);
    })), $t(() => {
      P(o.value.removeEventListener, "scroll", g);
    }), {
      n: Dm,
      classes: Am,
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
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var w1 = Ar;
function Rm(e) {
  return ["text", "password", "number"].includes(e);
}
var Um = {
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
    validator: Rm
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
  n: Xt,
  classes: Ym
} = ee("input"), Fm = ["id", "disabled", "type", "value", "maxlength", "rows"], Hm = ["id", "disabled", "type", "value", "maxlength"], Wm = ["for"];
function jm(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return y(), M(
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
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "prepend-icon")],
        2
        /* CLASS */
      ), A(
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
        )) : x("v-if", !0), e.textarea ? (y(), M(
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
            style: K({
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
          Fm
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
            style: K({
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
          Hm
        )), A(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: K({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          Wm
        )],
        2
        /* CLASS */
      ), A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (y(), pe(
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
        )) : x("v-if", !0)])],
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
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0), re(
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
const lr = _({
  render: jm,
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Um,
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
          modelValue: Y
        } = e;
        s(b, p, L, Y);
      });
    }, f = () => {
      var {
        hint: p,
        modelValue: b
      } = e;
      if (!p && !Nn(b))
        return Xt("--placeholder-hidden");
      if (p && (!Nn(b) || a.value))
        return Xt("--placeholder-hint");
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
        onClear: Y
      } = e;
      i != null && i.disabled.value || i != null && i.readonly.value || p || b || !L || (P(e["onUpdate:modelValue"], ""), P(Y, ""), v("onClear"));
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
    }, D = () => u(e.rules, e.modelValue), V = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, I = () => {
      r.value.blur();
    }, B = {
      reset: k,
      validate: D,
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
      n: Xt,
      classes: Ym,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: h,
      handleInput: C,
      handleChange: g,
      handleClear: $,
      handleClick: T,
      handleTouchstart: O,
      validate: D,
      resetValidation: d,
      reset: k,
      focus: V,
      blur: I
    };
  }
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
var C1 = lr;
function Gm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function qm(e) {
  return ["always", "hover", "none"].includes(e);
}
var Km = {
  type: {
    type: String,
    default: "default",
    validator: Gm
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
    validator: qm
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
  n: Xm,
  classes: Zm
} = ee("link");
function Jm(e, n) {
  return y(), pe(
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
      default: ve(() => [H(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    16,
    ["class", "style", "onClick"]
  );
}
const zr = _({
  render: Jm,
  name: "VarLink",
  props: Km,
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
      n: Xm,
      classes: Zm,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
var S1 = zr, Qm = {
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
function Ji(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xm(e) {
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
  n: _m,
  classes: ep
} = ee("list");
function np(e, n) {
  var r = ie("var-loading"), a = Ze("ripple");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [H(e.$slots, "default"), e.loading ? H(e.$slots, "loading", {
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
    )]) : x("v-if", !0), e.finished ? H(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : x("v-if", !0), e.error ? H(e.$slots, "error", {
      key: 2
    }, () => [ke((y(), M(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [he(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
        /* TEXT */
      )],
      2
      /* CLASS */
    )), [[a]])]) : x("v-if", !0), A(
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
const Lr = _({
  render: np,
  name: "VarList",
  directives: {
    Ripple: je
  },
  components: {
    VarLoading: $n
  },
  props: Qm,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      P(e["onUpdate:error"], !1), P(e["onUpdate:loading"], !0), P(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = xm(function* () {
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
      dt: Ot,
      isNumber: Xe,
      load: t,
      check: i,
      n: _m,
      classes: ep
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var k1 = Lr, rp = {
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
  classes: ap,
  n: Qi
} = ee("loading-bar");
const tp = _({
  name: "VarLoadingBar",
  props: rp,
  setup(e) {
    return () => re("div", {
      class: ap(Qi(), [e.error, Qi("--error")]),
      style: {
        zIndex: un.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
var Ds, xi, sn = Me({
  value: 0,
  opacity: 0,
  error: !1
}), op = (e) => {
  Object.assign(sn, e);
}, As = () => {
  Ds = window.setTimeout(() => {
    if (!(sn.value >= 95)) {
      var e = Math.random();
      sn.value < 70 && (e = Math.round(5 * Math.random())), sn.value += e, As();
    }
  }, 200);
}, ip = () => {
  xi || (xi = !0, Ua(tp, sn)), (!sn.error || sn.value === 100) && (sn.value = 0), setTimeout(() => {
    sn.opacity = 1;
  }, 200), As();
}, lp = () => {
  sn.value = 100, setTimeout(() => {
    sn.opacity = 0, setTimeout(() => {
      sn.error = !1;
    }, 250);
  }, 300), window.clearTimeout(Ds);
}, sp = () => {
  sn.error = !0, St.start(), setTimeout(St.finish, 300);
}, St = {
  start: ip,
  finish: lp,
  error: sp,
  mergeConfig: op
}, $1 = St;
const Eo = St;
function up(e) {
  return ["click", "hover"].includes(e);
}
function dp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var vp = {
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
    validator: up
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: dp
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
}, fp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ct(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return fp[n];
  });
}
var Un = "top", fr = "bottom", ma = "right", sr = "left", Rt = "auto", Ut = [Un, fr, ma, sr], Yt = "start", Xa = "end", cp = "clippingParents", zs = "viewport", Ya = "popper", mp = "reference", _i = /* @__PURE__ */ Ut.reduce(function(e, n) {
  return e.concat([n + "-" + Yt, n + "-" + Xa]);
}, []), Ls = /* @__PURE__ */ [].concat(Ut, [Rt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Yt, n + "-" + Xa]);
}, []), pp = "beforeRead", hp = "read", gp = "afterRead", yp = "beforeMain", bp = "main", wp = "afterMain", Cp = "beforeWrite", Sp = "write", kp = "afterWrite", Io = [pp, hp, gp, yp, bp, wp, Cp, Sp, kp];
function Yn(e) {
  return e.split("-")[0];
}
var $p = {
  start: "end",
  end: "start"
};
function el(e) {
  return e.replace(/start|end/g, function(n) {
    return $p[n];
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
function ti(e) {
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
var ja = Math.max, nl = Math.min, Ba = Math.round;
function Bo() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Rs() {
  return !/^((?!chrome|android).)*safari/i.test(Bo());
}
function Na(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && pn(e) && (t = e.offsetWidth > 0 && Ba(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ba(a.height) / e.offsetHeight || 1);
  var i = pa(e) ? Cn(e) : window, l = i.visualViewport, s = !Rs() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function oi(e) {
  var n = Cn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function ii(e) {
  return Na(pr(e)).left + oi(e).scrollLeft;
}
function Tp(e, n) {
  var r = Cn(e), a = pr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = Rs();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + ii(e),
    y: s
  };
}
function On(e) {
  return Cn(e).getComputedStyle(e);
}
function Pp(e) {
  var n, r = pr(e), a = oi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = ja(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = ja(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + ii(e), s = -a.scrollTop;
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
function Ft(e) {
  return In(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ti(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pr(e)
  );
}
function li(e) {
  var n = On(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Us(e) {
  return ["html", "body", "#document"].indexOf(In(e)) >= 0 ? e.ownerDocument.body : pn(e) && li(e) ? e : Us(Ft(e));
}
function Ga(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Us(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Cn(a), i = t ? [o].concat(o.visualViewport || [], li(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(Ga(Ft(i)))
  );
}
function Op(e) {
  return ["table", "td", "th"].indexOf(In(e)) >= 0;
}
function rl(e) {
  return !pn(e) || // https://github.com/popperjs/popper-core/issues/837
  On(e).position === "fixed" ? null : e.offsetParent;
}
function Vp(e) {
  var n = /firefox/i.test(Bo()), r = /Trident/i.test(Bo());
  if (r && pn(e)) {
    var a = On(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Ft(e);
  for (ti(t) && (t = t.host); pn(t) && ["html", "body"].indexOf(In(t)) < 0; ) {
    var o = On(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function si(e) {
  for (var n = Cn(e), r = rl(e); r && Op(r) && On(r).position === "static"; )
    r = rl(r);
  return r && (In(r) === "html" || In(r) === "body" && On(r).position === "static") ? n : r || Vp(e) || n;
}
function Mp(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && ti(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function No(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Ep(e, n) {
  var r = Na(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function al(e, n, r) {
  return n === zs ? No(Tp(e, r)) : pa(n) ? Ep(n, r) : No(Pp(pr(e)));
}
function Ip(e) {
  var n = Ga(Ft(e)), r = ["absolute", "fixed"].indexOf(On(e).position) >= 0, a = r && pn(e) ? si(e) : e;
  return pa(a) ? n.filter(function(t) {
    return pa(t) && Mp(t, a) && In(t) !== "body";
  }) : [];
}
function Bp(e, n, r, a) {
  var t = n === "clippingParents" ? Ip(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = al(e, u, a);
    return s.top = ja(d.top, s.top), s.right = nl(d.right, s.right), s.bottom = nl(d.bottom, s.bottom), s.left = ja(d.left, s.left), s;
  }, al(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Za(e) {
  return e.split("-")[1];
}
function Np(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ys(e) {
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
  var u = t ? Np(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Yt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Xa:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Dp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ap(e) {
  return Object.assign({}, Dp(), e);
}
function zp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Fs(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? cp : l, u = r.rootBoundary, d = u === void 0 ? zs : u, v = r.elementContext, f = v === void 0 ? Ya : v, c = r.altBoundary, h = c === void 0 ? !1 : c, C = r.padding, g = C === void 0 ? 0 : C, $ = Ap(typeof g != "number" ? g : zp(g, Ut)), T = f === Ya ? mp : Ya, w = e.rects.popper, S = e.elements[h ? T : f], O = Bp(pa(S) ? S : S.contextElement || pr(e.elements.popper), s, d, i), k = Na(e.elements.reference), D = Ys({
    reference: k,
    element: w,
    strategy: "absolute",
    placement: t
  }), V = No(Object.assign({}, w, D)), I = f === Ya ? V : k, B = {
    top: O.top - I.top + $.top,
    bottom: I.bottom - O.bottom + $.bottom,
    left: O.left - I.left + $.left,
    right: I.right - O.right + $.right
  }, p = e.modifiersData.offset;
  if (f === Ya && p) {
    var b = p[t];
    Object.keys(B).forEach(function(L) {
      var Y = [ma, fr].indexOf(L) >= 0 ? 1 : -1, G = [Un, fr].indexOf(L) >= 0 ? "y" : "x";
      B[L] += b[G] * Y;
    });
  }
  return B;
}
function Lp(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Ls : s, d = Za(a), v = d ? l ? _i : _i.filter(function(h) {
    return Za(h) === d;
  }) : Ut, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, C) {
    return h[C] = Fs(e, {
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
function Rp(e) {
  if (Yn(e) === Rt)
    return [];
  var n = ct(e);
  return [el(e), n, el(n)];
}
function Up(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, C = r.allowedAutoPlacements, g = n.options.placement, $ = Yn(g), T = $ === g, w = s || (T || !h ? [ct(g)] : Rp(g)), S = [g].concat(w).reduce(function(ae, te) {
      return ae.concat(Yn(te) === Rt ? Lp(n, {
        placement: te,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: C
      }) : te);
    }, []), O = n.rects.reference, k = n.rects.popper, D = /* @__PURE__ */ new Map(), V = !0, I = S[0], B = 0; B < S.length; B++) {
      var p = S[B], b = Yn(p), L = Za(p) === Yt, Y = [Un, fr].indexOf(b) >= 0, G = Y ? "width" : "height", R = Fs(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Q = Y ? L ? ma : sr : L ? fr : Un;
      O[G] > k[G] && (Q = ct(Q));
      var W = ct(Q), J = [];
      if (o && J.push(R[b] <= 0), l && J.push(R[Q] <= 0, R[W] <= 0), J.every(function(ae) {
        return ae;
      })) {
        I = p, V = !1;
        break;
      }
      D.set(p, J);
    }
    if (V)
      for (var N = h ? 3 : 1, X = function(te) {
        var ce = S.find(function(ye) {
          var Ye = D.get(ye);
          if (Ye)
            return Ye.slice(0, te).every(function(xe) {
              return xe;
            });
        });
        if (ce)
          return I = ce, "break";
      }, j = N; j > 0; j--) {
        var Z = X(j);
        if (Z === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[a]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const Yp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Up,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fp(e, n, r) {
  var a = Yn(e), t = [sr, Un].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [sr, ma].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function Hp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Ls.reduce(function(d, v) {
    return d[v] = Fp(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const Wp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Hp
};
function jp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Gp(e) {
  return e === Cn(e) || !pn(e) ? oi(e) : jp(e);
}
function qp(e) {
  var n = e.getBoundingClientRect(), r = Ba(n.width) / e.offsetWidth || 1, a = Ba(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Kp(e, n, r) {
  r === void 0 && (r = !1);
  var a = pn(n), t = pn(n) && qp(n), o = pr(n), i = Na(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((In(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  li(o)) && (l = Gp(n)), pn(n) ? (s = Na(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = ii(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function Xp(e) {
  var n = Na(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Zp(e) {
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
function Jp(e) {
  var n = Zp(e);
  return Io.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Qp(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function jn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var hr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', xp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', tl = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function _p(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), tl).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(jn(hr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(jn(hr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Io.indexOf(n.phase) < 0 && console.error(jn(hr, n.name, '"phase"', "either " + Io.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(jn(hr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(jn(hr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(jn(hr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(jn(hr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + tl.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(jn(xp, String(n.name), a, a));
      });
    });
  });
}
function eh(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function nh(e) {
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
var ol = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", rh = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", il = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ll() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function ah(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? il : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, il, o),
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
        var w = Jp(nh([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = eh([].concat(w, d.options.modifiers), function(p) {
            var b = p.name;
            return b;
          });
          if (_p(S), Yn(d.options.placement) === Rt) {
            var O = d.orderedModifiers.find(function(p) {
              var b = p.name;
              return b === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = On(s), D = k.marginTop, V = k.marginRight, I = k.marginBottom, B = k.marginLeft;
          [D, V, I, B].some(function(p) {
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
          if (!ll(T, w)) {
            process.env.NODE_ENV !== "production" && console.error(ol);
            return;
          }
          d.rects = {
            reference: Kp(T, si(w), d.options.strategy === "fixed"),
            popper: Xp(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var S = 0, O = 0; O < d.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(rh);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, O = -1;
              continue;
            }
            var k = d.orderedModifiers[O], D = k.fn, V = k.options, I = V === void 0 ? {} : V, B = k.name;
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
      update: Qp(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        C(), f = !0;
      }
    };
    if (!ll(l, s))
      return process.env.NODE_ENV !== "production" && console.error(ol), c;
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
function th(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = Cn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, lt);
  }), l && s.addEventListener("resize", r.update, lt), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, lt);
    }), l && s.removeEventListener("resize", r.update, lt);
  };
}
const oh = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: th,
  data: {}
};
function ih(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Ys({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const lh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ih,
  data: {}
};
var sh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function uh(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ba(n * t) / t || 0,
    y: Ba(r * t) / t || 0
  };
}
function sl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, c = f === void 0 ? 0 : f, h = i.y, C = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: c,
    y: C
  }) : {
    x: c,
    y: C
  };
  c = g.x, C = g.y;
  var $ = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), w = sr, S = Un, O = window;
  if (u) {
    var k = si(r), D = "clientHeight", V = "clientWidth";
    if (k === Cn(r) && (k = pr(r), On(k).position !== "static" && l === "absolute" && (D = "scrollHeight", V = "scrollWidth")), k = k, t === Un || (t === sr || t === ma) && o === Xa) {
      S = fr;
      var I = v && k === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[D]
      );
      C -= I - a.height, C *= s ? 1 : -1;
    }
    if (t === sr || (t === Un || t === fr) && o === Xa) {
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
  }, u && sh), b = d === !0 ? uh({
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
function dh(e) {
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
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, sl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, sl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const vh = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: dh,
  data: {}
};
function fh(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !pn(o) || !In(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
    }));
  });
}
function ch(e) {
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
const mh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: fh,
  effect: ch,
  requires: ["computeStyles"]
};
var ph = [oh, lh, vh, mh], hh = /* @__PURE__ */ ah({
  defaultModifiers: ph
});
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
function ul(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function dl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        ul(o, a, t, i, l, "next", s);
      }
      function l(s) {
        ul(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Hs(e) {
  var n = E(null), r = E(null), a = E(!1), t = E({
    width: 0,
    height: 0
  }), {
    zIndex: o
  } = _a(() => a.value, 1), i = null, l = !1, s = !1, u = !1, d = () => {
    var {
      width: k,
      height: D
    } = window.getComputedStyle(n.value);
    t.value = {
      width: De(k),
      height: De(D)
    };
  }, v = () => {
    e.trigger === "hover" && (u = !0, S());
  }, f = /* @__PURE__ */ function() {
    var k = dl(function* () {
      e.trigger === "hover" && (u = !1, yield Mn(), !s && O());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, h = /* @__PURE__ */ function() {
    var k = dl(function* () {
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
      x: De(e.offsetX),
      y: De(e.offsetY)
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
      skidding: D,
      distance: V
    } = $(), I = [kt({}, Yp, {
      enabled: a.value
    }), kt({}, Wp, {
      options: {
        offset: [D, V]
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
  return oe(() => e.show, (k) => {
    a.value = k ?? !1;
  }, {
    immediate: !0
  }), oe(() => e.offsetX, w), oe(() => e.offsetY, w), oe(() => e.placement, w), oe(() => a.value, (k) => {
    k ? (w(), P(e.onOpen)) : P(e.onClose);
  }), oe(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", g) : document.removeEventListener("click", g);
  }), oe(() => e.disabled, O), Ue(() => {
    i = hh(n.value, r.value, T()), e.trigger === "click" && document.addEventListener("click", g);
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
  n: gh,
  classes: yh
} = ee("menu");
function bh(e, n) {
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
    [H(e.$slots, "default"), (y(), pe(
      za,
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
          default: ve(() => [ke(A(
            "div",
            {
              ref: "popover",
              style: K({
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
            [H(e.$slots, "menu")],
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
const Fn = _({
  render: bh,
  name: "VarMenu",
  props: vp,
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
    } = Hs(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: we,
      n: gh,
      classes: yh,
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
Fn.install = function(e) {
  e.component(Fn.name, Fn);
};
var T1 = Fn, Ws = Symbol("SELECT_BIND_OPTION_KEY"), js = Symbol("SELECT_COUNT_OPTION_KEY");
function wh() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Ws), {
    length: r
  } = gn(js);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Ch() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(Ws), {
    index: r
  } = yn(js);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Sh = {
  label: {},
  value: {}
}, {
  n: kh,
  classes: $h
} = ee("option");
function Th(e, n) {
  var r = ie("var-checkbox"), a = Ze("ripple");
  return ke((y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: K({
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
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
      /* CLASS, STYLE */
    ), e.multiple ? (y(), pe(
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
    )) : x("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [H(e.$slots, "default", {}, () => [he(
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
const Rr = _({
  render: Th,
  name: "VarOption",
  directives: {
    Ripple: je
  },
  components: {
    VarCheckbox: ar
  },
  props: Sh,
  setup(e) {
    var n = E(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: i
    } = Ch(), {
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
    return oe([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), i(h), {
      n: kh,
      classes: $h,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var P1 = Rr, Ph = {
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
function Oh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Tt(e);
}
var {
  n: vl
} = ee("overlay");
const Ur = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Ph,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = _a(() => e.show, 1), {
      disabled: o
    } = Ko(), i = () => {
      P(e.onClick), P(e["onUpdate:show"], !1);
    };
    Et(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: vl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: i
    }), [P(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(Ae, {
        name: vl("--fade")
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
        }, Oh(d = s()) ? d : {
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
var O1 = Ur, Vh = {
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
  n: Mh,
  classes: Eh
} = ee("pagination"), Ih = ["item-mode", "onClick"];
function Bh(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), o = ie("var-menu"), i = Ze("ripple");
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
      [H(e.$slots, "prev", {}, () => [re(r, {
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
          onKeydown: n[3] || (n[3] = ci((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), A("span", null, [he(
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
    )) : (y(!0), M(
      Oe,
      {
        key: 1
      },
      Ne(e.pageList, (l, s) => ke((y(), M(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [he(
          ne(l),
          1
          /* TEXT */
        )],
        10,
        Ih
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
      [H(e.$slots, "next", {}, () => [re(r, {
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
            Ne(e.sizeOption, (l, s) => ke((y(), pe(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ve(() => [he(
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (y(), M(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [he(
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
          onKeydown: n[9] || (n[9] = ci((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
      /* CLASS */
    )) : x("v-if", !0), e.totalText ? (y(), M(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      ne(e.totalText),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const Yr = _({
  render: Bh,
  name: "VarPagination",
  components: {
    VarMenu: Fn,
    VarIcon: $e,
    VarCell: rr,
    VarInput: lr
  },
  directives: {
    Ripple: je
  },
  props: Vh,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), o = E(!1), i = E(z(e.current) || 1), l = E(z(e.size) || 10), s = E([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(z(e.total) / z(l.value))), v = F(() => {
      var S = l.value * (i.value - 1) + 1, O = Math.min(l.value * i.value, z(e.total));
      return [S, O];
    }), f = F(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (S, O) => Xe(S) ? !1 : O === 1 ? t.value : o.value, h = (S, O) => Xe(S) ? "basic" : O === 1 ? "head" : "tail", C = (S, O) => {
      S === i.value || e.disabled || (Xe(S) ? i.value = S : S === "prev" ? i.value > 1 && (i.value -= 1) : S === "next" ? i.value < d.value && (i.value += 1) : S === "..." && (O === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, $ = (S) => {
      l.value = S, n.value = !1;
    }, T = (S) => {
      var O = /^[1-9][0-9]*$/;
      return O.test(S);
    }, w = (S, O, k) => {
      if (k.target.blur(), T(O)) {
        var D = z(O);
        D > d.value && (D = d.value, a.value = "" + D), D !== i.value && (i.value = D);
      }
      S === "quick" && (r.value = ""), S === "simple" && !T(O) && (a.value = "" + i.value);
    };
    return oe([() => e.current, () => e.size], (S) => {
      var [O, k] = S;
      i.value = z(O) || 1, l.value = z(k || 10);
    }), oe([i, l, d], (S, O) => {
      var [k, D, V] = S, [I, B] = O, p = [], {
        maxPagerCount: b,
        total: L,
        onChange: Y
      } = e, G = Math.ceil(z(L) / z(B)), R = V - (b - u.value) - 1;
      if (a.value = "" + k, V - 2 > b) {
        if (I === void 0 || V !== G)
          for (var Q = 2; Q < b + 2; Q++)
            p.push(Q);
        if (k <= b && k < R) {
          p = [];
          for (var W = 1; W < b + 1; W++)
            p.push(W + 1);
          t.value = !0, o.value = !1;
        }
        if (k > b && k < R) {
          p = [];
          for (var J = 1; J < b + 1; J++)
            p.push(k + J - u.value);
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
      s.value = p, I !== void 0 && V > 0 && P(Y, k, D), P(e["onUpdate:current"], k), P(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Mh,
      classes: Eh,
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
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var V1 = Yr;
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
var Nh = Do({
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
  n: Dh,
  classes: Ah
} = ee("picker"), fl = 300, zh = 15, cl = 0, Lh = ["onTouchstart", "onTouchmove", "onTouchend"], Rh = ["onTransitionend"];
function Uh(e, n) {
  var r = ie("var-button");
  return y(), pe(
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
      default: ve(() => [A(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [A(
          "div",
          {
            class: m(e.n("toolbar"))
          },
          [H(e.$slots, "cancel", {}, () => [re(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ve(() => [he(
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
                /* TEXT */
              )]),
              _: 1
              /* STABLE */
            },
            8,
            ["class", "text-color", "onClick"]
          )]), H(e.$slots, "title", {}, () => [A(
            "div",
            {
              class: m(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
            /* TEXT, CLASS */
          )]), H(e.$slots, "confirm", {}, () => [re(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ve(() => [he(
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
        ), A(
          "div",
          {
            class: m(e.n("columns")),
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(y(!0), M(
            Oe,
            null,
            Ne(e.scrollColumns, (a) => (y(), M(
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
                  style: K({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(y(!0), M(
                  Oe,
                  null,
                  Ne(a.column.texts, (t) => (y(), M(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: K({
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
                Rh
              )],
              42,
              Lh
            ))),
            128
            /* KEYED_FRAGMENT */
          )), A(
            "div",
            {
              class: m(e.n("picked")),
              style: K({
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
              style: K({
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
const ur = _({
  render: Uh,
  name: "VarPicker",
  components: {
    VarButton: rn,
    VarPopup: mn
  },
  inheritAttrs: !1,
  props: Nh,
  setup(e) {
    var n = E([]), r = F(() => De(e.optionHeight)), a = F(() => De(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), o = F(() => a.value * r.value), i = [], l = (p, b) => {
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
    }, c = function(p, b, L, Y) {
      Y === void 0 && (Y = !1);
      var G = t.value - d(p, b) * r.value;
      G === p.translate && (p.scrolling = !1, !Y && D(p)), p.translate = G, p.duration = L;
    }, h = (p, b, L) => {
      p.translate += Math.abs(b / L) / 3e-3 * (b < 0 ? -1 : 1);
    }, C = (p, b) => {
      b.touching = !0, b.scrolling = !1, b.duration = 0, b.translate = jt(b.scrollEl);
    }, g = (p, b) => {
      if (b.touching) {
        var {
          clientY: L
        } = p.touches[0], Y = b.prevY !== void 0 ? L - b.prevY : 0;
        b.prevY = L, b.translate += Y, u(b);
        var G = performance.now();
        G - b.momentumTime > fl && (b.momentumTime = G, b.momentumPrevY = b.translate);
      }
    }, $ = (p, b) => {
      b.touching = !1, b.scrolling = !0, b.prevY = void 0;
      var L = b.translate - b.momentumPrevY, Y = performance.now() - b.momentumTime, G = Math.abs(L) >= zh && Y <= fl;
      G && h(b, L, Y), b.index = v(b), c(b, b.index, G ? 1e3 : 200);
    }, T = (p) => {
      p.scrolling = !1, D(p);
    }, w = (p) => p.map((b, L) => {
      var Y, G = be(b) ? {
        texts: b
      } : b, R = {
        id: cl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Y = G.initialIndex) != null ? Y : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: G,
        scrollEl: null,
        scrolling: !1
      };
      return c(R, R.index, 0, !0), R;
    }), S = (p) => {
      var b = [];
      return O(b, p, 0, !0), b;
    }, O = function(p, b, L, Y) {
      if (Y === void 0 && (Y = !1), be(b) && b.length) {
        var G, R = Y && (G = e.cascadeInitialIndexes[p.length]) != null ? G : 0, Q = {
          id: cl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: R,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: b.map((W) => W[e.textKey])
          },
          columns: b,
          scrollEl: null,
          scrolling: !1
        };
        p.push(Q), c(Q, Q.index, 0, !0), O(p, Q.columns[Q.index].children, L + 1, Y);
      }
    }, k = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), O(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, D = (p) => {
      var {
        cascade: b,
        onChange: L
      } = e;
      b && k(p);
      var Y = n.value.some((W) => W.scrolling);
      if (!Y) {
        var {
          texts: G,
          indexes: R
        } = f(), Q = R.every((W, J) => W === i[J]);
        Q || (i = [...R], P(L, G, R));
      }
    }, V = () => {
      if (e.cascade) {
        var p = n.value.find((b) => b.scrolling);
        p && (p.translate = jt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, k(p));
      } else
        n.value.forEach((b) => {
          b.translate = jt(b.scrollEl), b.index = v(b), c(b, b.index, 0);
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
    return oe(() => e.columns, (p) => {
      n.value = e.cascade ? S(mi(p)) : w(mi(p));
      var {
        indexes: b
      } = f();
      i = [...b];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Dh,
      classes: Ah,
      pack: Fe,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: o,
      center: t,
      Transition: Ae,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: C,
      handleTouchmove: g,
      handleTouchend: $,
      handleTransitionend: T,
      confirm: I,
      cancel: B,
      dt: Ot
    };
  }
});
var an;
function ha(e) {
  return new Promise((n) => {
    ha.close();
    var r = be(e) ? {
      columns: e
    } : e, a = Me(r);
    a.dynamic = !0, a.teleport = "body", an = a;
    var {
      unmountInstance: t
    } = Ua(ur, a, {
      onConfirm: (o, i) => {
        P(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, an === a && (an = null);
      },
      onCancel: (o, i) => {
        P(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, an === a && (an = null);
      },
      onClose: () => {
        P(a.onClose), n({
          state: "close"
        }), an === a && (an = null);
      },
      onClosed: () => {
        P(a.onClosed), t(), an === a && (an = null);
      },
      onRouteChange: () => {
        t(), an === a && (an = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  });
}
ur.install = function(e) {
  e.component(ur.name, ur);
};
ha.Component = ur;
ha.install = function(e) {
  e.component(ur.name, ur);
};
ha.close = () => {
  if (an != null) {
    var e = an;
    an = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
var M1 = ur;
function Yh(e) {
  return ["linear", "circle"].includes(e);
}
var Fh = {
  mode: {
    type: String,
    default: "linear",
    validator: Yh
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
  n: Hh,
  classes: Wh
} = ee("progress"), jh = ["viewBox"], Gh = ["cx", "cy", "r", "stroke-width"], qh = ["cx", "cy", "r", "stroke-width"];
function Kh(e, n) {
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
      [A(
        "div",
        {
          class: m(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: K({
              background: e.trackColor
            })
          },
          null,
          6
          /* CLASS, STYLE */
        )) : x("v-if", !0), A(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: K({
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
        [H(e.$slots, "default", {}, () => [he(
          ne(e.linearProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.mode === "circle" ? (y(), M(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(y(), M(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
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
            style: K({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          Gh
        )) : x("v-if", !0), A(
          "circle",
          {
            class: m(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: K({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          qh
        )],
        14,
        jh
      )), e.label ? (y(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.circleProps.roundValue),
          1
          /* TEXT */
        )])],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const Fr = _({
  render: Kh,
  name: "VarProgress",
  props: Fh,
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
      } = e, i = "0 0 " + De(a) + " " + De(a), l = z(o) > 100 ? 100 : Math.round(z(o)), s = (De(a) - De(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: i,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: Hh,
      classes: Wh,
      toSizeUnit: we,
      multiplySizeUnit: en,
      linearProps: n,
      circleProps: r
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var E1 = Fr, Xh = {
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
function ml(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zh(e) {
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
var {
  n: pl,
  classes: Jh
} = ee("pull-refresh"), hl = 150;
function Qh(e, n) {
  var r = ie("var-icon");
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
    [A(
      "div",
      {
        ref: "controlNode",
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
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
    ), H(e.$slots, "default")],
    34
    /* CLASS, HYDRATE_EVENTS */
  );
}
const Hr = _({
  render: Qh,
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Xh,
  setup(e) {
    var n, r, a = E(0), t = E(null), o = E(null), i = E(0), l = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = 0, f = 0, c = E(!0), h = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), C = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: $.value ? e.successBgColor : e.bgColor,
      color: $.value ? e.successColor : e.color
    })), g = F(() => Math.abs(2 * a.value)), $ = F(() => u.value === "success"), T = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, hl);
    }), w = (I) => {
      var B = "classList" in n ? n : document.body;
      B.classList[I](pl() + "--lock");
    }, S = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, O = (I) => {
      if (h.value) {
        var B = Vt(n);
        if (!(B > 0)) {
          var p = B === 0, b = I.touches[0];
          f = b.clientY - v, p && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = I.touches[0].clientY), p && l.value > a.value && w("add");
          var L = (I.touches[0].clientY - i.value) / 2 + a.value;
          l.value = L >= g.value ? g.value : L, l.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = T()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var I = Zh(function* () {
        h.value && (d.value = !0, l.value >= g.value * 0.2 ? (yield r, u.value = "loading", l.value = g.value * 0.3, P(e["onUpdate:modelValue"], !0), P(e.onRefresh), w("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, w("remove");
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
    }, V = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return oe(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, V();
      }, z(e.successDuration)));
    }), Ue(() => {
      var I;
      n = e.target ? Nl(e.target, "PullRefresh") : wa(t.value), D(), (I = t.value) == null || I.addEventListener("touchmove", O, {
        passive: !1
      });
    }), $t(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", O);
    }), {
      n: pl,
      classes: Jh,
      iconHasChanged: c,
      ICON_TRANSITION: hl,
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
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var I1 = Hr, xh = {
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
}, Gs = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), qs = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function _h() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Gs), {
    length: r
  } = gn(qs);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function eg() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(Gs), {
    index: r
  } = yn(qs);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: ng,
  classes: rg
} = ee("radio");
function ag(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ze("ripple");
  return y(), M(
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
      [ke((y(), M(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? H(e.$slots, "checked-icon", {
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
        )]) : H(e.$slots, "unchecked-icon", {
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
        [H(e.$slots, "default")],
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
const Wr = _({
  render: ag,
  name: "VarRadio",
  directives: {
    Ripple: je
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  inheritAttrs: !1,
  props: xh,
  setup(e) {
    var n = E(!1), r = F(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = eg(), {
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
          modelValue: D
        } = e;
        u(O, S, k, D);
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
        uncheckedValue: D,
        checkedValue: V,
        onClick: I
      } = e;
      i != null && i.disabled.value || O || (P(I, S), !(i != null && i.readonly.value || k) && (a.value = !0, c(r.value ? D : V)));
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
      } = e, D = ![O, k].includes(S);
      D && (S = r.value ? O : k), c(S);
    };
    oe(() => e.modelValue, (S) => {
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
      n: ng,
      classes: rg,
      handleClick: h,
      toggle: T,
      reset: g,
      validate: $,
      resetValidation: v
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var B1 = Wr;
function tg(e) {
  return ["horizontal", "vertical"].includes(e);
}
var og = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: tg
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
  n: ig,
  classes: lg
} = ee("radio-group");
function sg(e, n) {
  var r = ie("var-form-details");
  return y(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [H(e.$slots, "default")],
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
const jr = _({
  render: sg,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: og,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = _h(), {
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
    oe(() => e.modelValue, v), oe(() => n.value, v);
    var C = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return P(t, C), a(C), {
      errorMessage: o,
      n: ig,
      classes: lg,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var N1 = jr, ug = {
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
} = ee("rate"), dg = ["onClick"];
function vg(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ze("ripple");
  return y(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [A(
      "div",
      {
        class: m(e.n())
      },
      [(y(!0), M(
        Oe,
        null,
        Ne(e.toNumber(e.count), (o) => ke((y(), M(
          "div",
          {
            key: o,
            style: K(e.getStyle(o)),
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
              style: K({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          dg
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
const Gr = _({
  render: vg,
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: je
  },
  props: ug,
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
        icon: D,
        halfIcon: V,
        emptyIcon: I
      } = e, B = S;
      return (T || n != null && n.disabled.value) && (B = w), g <= z($) ? {
        color: B,
        name: D
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
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var D1 = Gr;
function fg(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var cg = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: fg
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
}, mg = (e) => (ya(""), e = e(), ba(), e), pg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, hg = /* @__PURE__ */ mg(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), gg = [hg];
function yg(e, n) {
  return y(), M("svg", pg, gg);
}
const bg = _({
  render: yg
});
var wg = (e) => (ya(""), e = e(), ba(), e), Cg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Sg = /* @__PURE__ */ wg(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), kg = [Sg];
function $g(e, n) {
  return y(), M("svg", Cg, kg);
}
const Tg = _({
  render: $g
});
var Pg = (e) => (ya(""), e = e(), ba(), e), Og = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Vg = /* @__PURE__ */ Pg(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), Mg = [Vg];
function Eg(e, n) {
  return y(), M("svg", Og, Mg);
}
const Ig = _({
  render: Eg
});
var {
  n: Bg,
  classes: Ng
} = ee("result");
function Dg(e, n) {
  return y(), M(
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
        style: K({
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
        style: K({
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
        style: K({
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
        style: K({
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
const Ag = _({
  render: Dg,
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
      n: Bg,
      classes: Ng,
      toNumber: z
    };
  }
});
var zg = (e) => (ya(""), e = e(), ba(), e), Lg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Rg = /* @__PURE__ */ zg(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), Ug = [Rg];
function Yg(e, n) {
  return y(), M("svg", Lg, Ug);
}
const Fg = _({
  render: Yg
});
var Hg = (e) => (ya(""), e = e(), ba(), e), Wg = {
  viewBox: "-4 -4 32 32"
}, jg = /* @__PURE__ */ Hg(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), Gg = [jg];
function qg(e, n) {
  return y(), M("svg", Wg, Gg);
}
const Kg = _({
  render: qg
});
var {
  n: Xg,
  classes: Zg
} = ee("result");
function Jg(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [H(e.$slots, "image", {}, () => [e.type ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: K({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(y(), pe(
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
    )) : x("v-if", !0)]), H(e.$slots, "title", {}, () => [e.title ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
      /* TEXT, CLASS */
    )) : x("v-if", !0)]), e.$slots.footer ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [H(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const qr = _({
  render: Jg,
  name: "VarResult",
  components: {
    Info: bg,
    Success: Ag,
    Warning: Ig,
    Error: Tg,
    Question: Fg,
    Empty: Kg
  },
  props: cg,
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
      n: Xg,
      classes: Zg,
      toNumber: z,
      toPxNum: De,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
var A1 = qr;
function Qg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function xg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var _g = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Qg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: xg
  },
  onClick: U()
}, {
  n: ey,
  classes: ny
} = ee("row");
function ry(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: K({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
const Kr = _({
  render: ry,
  name: "VarRow",
  props: _g,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Dv(), t = F(() => {
      var l = De(e.gutter);
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
    return oe(() => a.value, o), oe(() => e.gutter, o), r(i), {
      n: ey,
      classes: ny,
      average: t
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var z1 = Kr;
function ay(e) {
  return ["left", "right", "center"].includes(e);
}
var ty = {
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
    validator: ay
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
  n: Zt,
  classes: oy
} = ee("select"), iy = {
  key: 1
};
function ly(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), o = ie("var-form-details");
  return y(), M(
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
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "prepend-icon")],
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
              [H(e.$slots, "default")],
              2
              /* CLASS */
            )]),
            default: ve(() => [A(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [A(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : H(e.$slots, "selected", {
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
                      Ne(e.labels, (i) => (y(), pe(
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
                          default: ve(() => [he(
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
                  iy,
                  ne(e.label),
                  1
                  /* TEXT */
                ))])],
                2
                /* CLASS */
              ), H(e.$slots, "arrow-icon", {
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
                style: K({
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
        [H(e.$slots, "append-icon", {}, () => [e.clearable ? (y(), pe(
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
        )) : x("v-if", !0)])],
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
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [A(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
        /* CLASS, STYLE */
      )],
      6
      /* CLASS, STYLE */
    )) : x("v-if", !0), re(
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
const Xr = _({
  render: ly,
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Fn,
    VarChip: tr,
    VarFormDetails: We
  },
  props: ty,
  setup(e) {
    var n = E(null), r = E(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = E(""), i = E([]), l = F(() => Nn(e.modelValue)), s = E("0px"), u = E(0), {
      bindForm: d,
      form: v
    } = wn(), {
      length: f,
      options: c,
      bindOptions: h
    } = wh(), {
      errorMessage: C,
      validateWithTrigger: g,
      validate: $,
      // expose
      resetValidation: T
    } = bn(), w = E(null), S = () => {
      var {
        multiple: j,
        modelValue: Z
      } = e;
      if (j) {
        var ae = Z;
        i.value = ae.map(D);
      }
      !j && !Nn(Z) && (o.value = D(Z)), !j && Nn(Z) && (o.value = "");
    }, O = (j) => {
      Ee(() => {
        var {
          validateTrigger: Z,
          rules: ae,
          modelValue: te
        } = e;
        g(Z, j, ae, te);
      });
    }, k = (j) => {
      var {
        value: Z,
        label: ae
      } = j;
      return Z.value != null ? Z.value : ae.value;
    }, D = (j) => {
      var Z, ae, te = c.find((ce) => {
        var {
          value: ye
        } = ce;
        return ye.value === j;
      });
      return te || (te = c.find((ce) => {
        var {
          label: ye
        } = ce;
        return ye.value === j;
      })), (Z = (ae = te) == null ? void 0 : ae.label.value) != null ? Z : "";
    }, V = () => {
      var {
        hint: j,
        modelValue: Z
      } = e;
      if (!j && !Nn(Z))
        return Zt("--placeholder-hidden");
      if (j && (!Nn(Z) || r.value))
        return Zt("--placeholder-hint");
    }, I = () => n.value && window.getComputedStyle(n.value).width || "0px", B = () => {
      var {
        disabled: j,
        readonly: Z,
        onFocus: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || j || Z || (s.value = I(), u.value = De(e.offsetY), r.value = !0, P(ae), O("onFocus"));
    }, p = () => {
      var {
        disabled: j,
        readonly: Z,
        onBlur: ae
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || j || Z || (P(ae), O("onBlur"));
    }, b = (j) => {
      var {
        disabled: Z,
        readonly: ae,
        multiple: te,
        onChange: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var ye = te ? c.filter((Ye) => {
          var {
            selected: xe
          } = Ye;
          return xe.value;
        }).map(k) : k(j);
        P(e["onUpdate:modelValue"], ye), P(ce, ye), O("onChange"), !te && (r.value = !1);
      }
    }, L = () => {
      var {
        disabled: j,
        readonly: Z,
        multiple: ae,
        clearable: te,
        onClear: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || j || Z || !te)) {
        var ye = ae ? [] : void 0;
        P(e["onUpdate:modelValue"], ye), P(ce, ye), O("onClear");
      }
    }, Y = (j) => {
      var {
        disabled: Z,
        onClick: ae
      } = e;
      v != null && v.disabled.value || Z || (P(ae, j), O("onClick"));
    }, G = (j) => {
      var {
        disabled: Z,
        readonly: ae,
        modelValue: te,
        onClose: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var ye = te, Ye = c.find((Be) => {
          var {
            label: Ge
          } = Be;
          return Ge.value === j;
        }), xe = ye.filter((Be) => {
          var Ge;
          return Be !== ((Ge = Ye.value.value) != null ? Ge : Ye.label.value);
        });
        P(e["onUpdate:modelValue"], xe), P(ce, xe), O("onClose");
      }
    }, R = () => {
      var {
        multiple: j,
        modelValue: Z
      } = e;
      if (j) {
        var ae = Z;
        c.forEach((te) => te.sync(ae.includes(k(te))));
      } else
        c.forEach((te) => te.sync(Z === k(te)));
      S();
    }, Q = () => {
      s.value = I(), u.value = De(e.offsetY), r.value = !0;
    }, W = () => {
      r.value = !1;
    }, J = () => $(e.rules, e.modelValue), N = () => {
      P(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    oe(() => e.multiple, () => {
      var {
        multiple: j,
        modelValue: Z
      } = e;
      if (j && !be(Z))
        throw Error("The modelValue must be an array when multiple is true");
    }), oe(() => e.modelValue, R, {
      deep: !0
    }), oe(() => f.value, R);
    var X = {
      wrapWidth: F(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: b,
      reset: N,
      validate: J,
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
      n: Zt,
      classes: oy,
      computePlaceholderState: V,
      handleFocus: B,
      handleBlur: p,
      handleClear: L,
      handleClick: Y,
      handleClose: G,
      reset: N,
      validate: J,
      resetValidation: T,
      focus: Q,
      blur: W
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var L1 = Xr, sy = {
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
  n: uy,
  classes: dy
} = ee("skeleton");
function vy(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [H(e.$slots, "default")],
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
          style: K({
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (y(), M(
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
            style: K({
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (y(), M(
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
              style: K({
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
          )) : x("v-if", !0), (y(!0), M(
            Oe,
            null,
            Ne(e.toNumber(e.rows), (r, a) => (y(), M(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: K({
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
        )) : x("v-if", !0)],
        2
        /* CLASS */
      )) : x("v-if", !0)],
      2
      /* CLASS */
    )) : x("v-if", !0), e.loading && e.fullscreen ? (y(), M(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: K({
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
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const Zr = _({
  render: vy,
  name: "VarSkeleton",
  props: sy,
  setup() {
    return {
      n: uy,
      classes: dy,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var R1 = Zr;
function fy(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var cy = {
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
    validator: fy
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
  n: gl,
  classes: my
} = ee("slider"), py = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function hy(e, n) {
  var r = ie("var-form-details");
  return y(), M(
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
            style: K({
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
            style: K(e.getFillStyle)
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
        Ne(e.thumbList, (a) => (y(), M(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: K({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Vn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Vn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [H(e.$slots, "button", {
            currentValue: a.text
          }, () => [A(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: K({
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
              style: K({
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
              style: K({
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
          py
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
const Jr = _({
  render: hy,
  name: "VarSlider",
  components: {
    VarFormDetails: We
  },
  props: cy,
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
        modelValue: W,
        range: J
      } = e, N = [];
      return J && be(W) ? N = [{
        value: O(W[0]),
        enumValue: Ie.First,
        text: k(W[0])
      }, {
        value: O(W[1]),
        enumValue: Ie.Second,
        text: k(W[1])
      }] : Xe(W) && (N = [{
        value: O(W),
        enumValue: Ie.First,
        text: k(W)
      }]), N;
    }), $ = F(() => {
      var {
        activeColor: W,
        range: J,
        modelValue: N
      } = e, X = J && be(N) ? O(Math.min(N[0], N[1])) : 0, j = J && be(N) ? O(Math.max(N[0], N[1])) - X : O(N);
      return {
        width: j + "%",
        left: X + "%",
        background: W
      };
    }), T = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), w = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), S = (W) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[W].active, O = (W) => {
      var {
        min: J,
        max: N
      } = e;
      return W < z(J) ? 0 : W > z(N) ? 100 : (W - z(J)) / h.value * 100;
    }, k = (W) => {
      if (!Xe(W))
        return 0;
      var J = W;
      J < Number(e.min) && (J = Number(e.min)), J > Number(e.max) && (J = Number(e.max));
      var N = parseInt("" + J, 10) === J;
      return N ? J : z(J.toPrecision(5));
    }, D = (W, J) => {
      var N = [], {
        step: X,
        range: j,
        modelValue: Z,
        onChange: ae,
        min: te
      } = e, ce = z(X), ye = Math.round(W / C.value), Ye = ye * ce + z(te), xe = c[J].percentValue * ce + z(te);
      if (c[J].percentValue = ye, j && be(Z) && (N = J === Ie.First ? [Ye, Z[1]] : [Z[0], Ye]), xe !== Ye) {
        var Be = j ? N.map((Ge) => k(Ge)) : k(Ye);
        P(ae, Be), P(e["onUpdate:modelValue"], Be), u();
      }
    }, V = (W) => {
      if (!e.range)
        return Ie.First;
      var J = c[Ie.First].percentValue * C.value, N = c[Ie.Second].percentValue * C.value, X = Math.abs(W - J), j = Math.abs(W - N);
      return X <= j ? Ie.First : Ie.Second;
    }, I = (W, J) => {
      v.value || (v.value = d.value.offsetWidth), !(T.value || w.value) && (P(e.onStart), f.value = !0, c[J].startPosition = W.touches[0].clientX);
    }, B = (W, J) => {
      if (!(T.value || w.value || !f.value)) {
        var N = W.touches[0].clientX - c[J].startPosition + c[J].currentLeft;
        c[J].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), D(N, J);
      }
    }, p = (W) => {
      var {
        range: J,
        modelValue: N,
        onEnd: X,
        step: j,
        min: Z
      } = e;
      if (!(T.value || w.value)) {
        var ae = [];
        c[W].currentLeft = c[W].percentValue * C.value, c[W].active = !1;
        var te = c[W].percentValue * z(j) + z(Z);
        J && be(N) && (ae = W === Ie.First ? [te, N[1]] : [N[0], te]), P(X, J ? ae : te), f.value = !1;
      }
    }, b = (W) => {
      if (!(T.value || w.value) && !W.target.closest("." + gl("thumb"))) {
        var J = W.clientX - $u(W.currentTarget), N = V(J);
        D(J, N), p(N);
      }
    }, L = () => {
      var W = z(e.step);
      return isNaN(W) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : W < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: W,
        modelValue: J
      } = e;
      return W && !be(J) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !W && be(J) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : W && be(J) && J.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, G = function(W, J) {
      W === void 0 && (W = e.modelValue), J === void 0 && (J = z(e.step));
      var N = (X) => {
        var {
          min: j,
          max: Z
        } = e;
        return X < z(j) ? 0 : X > z(Z) ? h.value / J : (X - z(j)) / J;
      };
      e.range && be(W) ? (c[Ie.First].percentValue = N(W[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * C.value, c[Ie.Second].percentValue = N(W[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * C.value) : Xe(W) && (c[Ie.First].currentLeft = N(W) * C.value);
    }, R = () => {
      var W = e.range ? [0, 0] : 0;
      P(e["onUpdate:modelValue"], W), i();
    }, Q = {
      reset: R,
      validate: l,
      resetValidation: i
    };
    return P(n, Q), oe([() => e.modelValue, () => e.step], (W) => {
      var [J, N] = W;
      !L() || !Y() || f.value || G(J, z(N));
    }), oe(v, () => G()), Ue(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: gl,
      classes: my,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: $,
      isDisabled: T,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: en,
      toNumber: z,
      showLabel: S,
      start: I,
      move: B,
      end: p,
      click: b
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var U1 = Jr;
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
function gy(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function yy(e) {
  return ui.includes(e);
}
var Ks = {
  type: {
    type: String,
    validator: yy
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: gy
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
  loadingType: Ke(Qn, "type"),
  loadingSize: Ke(Qn, "size"),
  loadingRadius: Ke(Qn, "radius"),
  loadingColor: Ao({}, Ke(Qn, "color"), {
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
  n: by,
  classes: wy
} = ee("snackbar"), Cy = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Sy(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return ke((y(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [A(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [A(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [H(e.$slots, "default", {}, () => [he(
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
        [e.iconName ? (y(), pe(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (y(), pe(
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
        )) : x("v-if", !0), H(e.$slots, "action")],
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
const Xs = _({
  render: Sy,
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: $e
  },
  props: Ks,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = _a(() => e.show, 1);
    Et(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? Cy[e.type] : ""), o = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && P(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return oe(() => e.show, (i) => {
      i ? (P(e.onOpen), o()) : i === !1 && (clearTimeout(n.value), P(e.onClose));
    }), oe(() => e._update, () => {
      clearTimeout(n.value), o();
    }), Ue(() => {
      e.show && (P(e.onOpen), o());
    }), {
      SNACKBAR_TYPE: ui,
      n: by,
      classes: wy,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: ky
} = ee("snackbar");
function $y(e, n) {
  var r = ie("var-snackbar-core");
  return y(), pe(
    za,
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
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ve(() => [H(e.$slots, "action")]),
            default: ve(() => [H(e.$slots, "default", {}, () => [he(
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
const Qr = _({
  render: $y,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Xs
  },
  props: Ks,
  setup() {
    var {
      disabled: e
    } = Ko();
    return {
      n: ky,
      disabled: e
    };
  }
});
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
function Ty(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Tt(e);
}
var ui = ["loading", "success", "warning", "info", "error"], yl = 0, zo = !1, Zs, Da = !1, hn = Me([]), Py = {
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
}, Oy = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Vy = {
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
        }, Ny(t.position));
        return re(Xs, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: o,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = un.zIndex;
      return re(hu, Ve(Oy, {
        style: {
          zIndex: n
        },
        onAfterEnter: My,
        onAfterLeave: Ey
      }), Ty(e) ? e : {
        default: () => [e]
      });
    };
  }
}, ga = function(e) {
  var n = Je(e) || Xe(e) ? {
    content: String(e)
  } : e, r = Me(Ja({}, Py, n));
  r.show = !0, zo || (zo = !0, Zs = Ua(Vy).unmountInstance);
  var {
    length: a
  } = hn, t = {
    id: yl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Da)
    Iy(t);
  else {
    var o = "update-" + yl;
    By(r, o);
  }
  return {
    clear() {
      !Da && hn.length ? hn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
ui.forEach((e) => {
  ga[e] = (n) => (Wo(n) ? n.type = e : n = {
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
function My(e) {
  var n = e.getAttribute("data-id"), r = hn.find((a) => a.id === z(n));
  r && P(r.reactiveSnackOptions.onOpened);
}
function Ey(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = hn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, P(r.reactiveSnackOptions.onClosed));
  var a = hn.every((t) => t.animationEnd);
  a && (P(Zs), hn = Me([]), zo = !1);
}
function Iy(e) {
  hn.push(e);
}
function By(e, n) {
  var [r] = hn;
  r.reactiveSnackOptions = Ja({}, r.reactiveSnackOptions, e), r._update = n;
}
function Ny(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var Y1 = Qr;
const Lo = ga;
var Js = (e) => ["mini", "small", "normal", "large"].includes(e), Dy = (e) => Js(e) || be(e) || Xe(e) || Je(e), Ay = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), zy = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Dy
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
    validator: Ay
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function ln(e) {
  return "calc(" + e + " / 2)";
}
function Ly(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? o !== i ? l = ln(e) + " " + n + " " + ln(e) + " 0" : l = ln(e) + " 0" : t === "space-around" ? l = ln(e) + " " + ln(n) : t === "space-between" && (o === 0 ? l = ln(e) + " " + ln(n) + " " + ln(e) + " 0" : o === i ? l = ln(e) + " 0 " + ln(e) + " " + ln(n) : l = ln(e) + " " + ln(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Jt,
  classes: Ry
} = ee("space");
const xr = _({
  name: "VarSpace",
  props: zy,
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
      } = e, f = (o = P(r.default)) != null ? o : [], c = Js(v), [h, C] = a(v, c), g = (w) => {
        var S = [];
        return w.forEach((O) => {
          if (O.type !== gu) {
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
        var O = Ly(h, C, {
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
        class: Ry(Jt(), Jt("$--box"), [i, Jt("--inline")]),
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
xr.install = function(e) {
  e.component(xr.name, xr);
};
var F1 = xr, Uy = {
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
}, Qs = Symbol("STEPS_BIND_STEP_KEY"), xs = Symbol("STEPS_COUNT_STEP_KEY");
function Yy() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Qs), {
    length: r
  } = gn(xs);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Fy() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(Qs), {
    index: r
  } = yn(xs);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Hy,
  classes: Wy
} = ee("step"), jy = {
  key: 3
};
function Gy(e, n) {
  var r = ie("var-icon");
  return y(), M(
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
            style: K({
              backgroundColor: e.isActive || e.isCurrent ? e.activeColor : e.inactiveColor
            }),
            onClick: n[0] || (n[0] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [e.isActive ? (y(), pe(
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
          )) : e.isCurrent && e.currentIcon ? (y(), pe(
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
          )) : e.inactiveIcon ? (y(), pe(
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
            jy,
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
          [H(e.$slots, "default")],
          2
          /* CLASS */
        )],
        2
        /* CLASS */
      ), e.isLastChild ? x("v-if", !0) : (y(), M(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
          style: K({
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
const _r = _({
  render: Gy,
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: Uy,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = Fy(), {
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
    return o(h), oe(l, ($) => {
      if (r.value = $ - 1 === a.value, e.value) {
        var T = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + T + "px";
      }
    }), {
      n: Hy,
      classes: Wy,
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
_r.install = function(e) {
  e.component(_r.name, _r);
};
var H1 = _r;
function qy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ky = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: qy
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Xy
} = ee("steps");
function Zy(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  );
}
const ea = _({
  render: Zy,
  name: "VarSteps",
  props: Ky,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: i
    } = Yy(), l = (u) => {
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
      n: Xy
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var W1 = ea, Jy = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: Qy
} = ee("style-provider");
const na = _({
  name: "VarStyleProvider",
  props: Jy,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Vl(e.tag, {
      class: Qy(),
      style: Ll(e.styleVars)
    }, P(r.default));
  }
});
var Qt = [];
function Qa(e) {
  Qt.forEach((r) => document.documentElement.style.removeProperty(r)), Qt.length = 0;
  var n = Ll(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Qt.push(a);
  });
}
Qa.Component = na;
na.install = function(e) {
  e.component(na.name, na);
};
Qa.install = function(e) {
  e.component(na.name, na);
};
var j1 = na, xy = {
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
  n: _y,
  classes: e0
} = ee("switch");
function n0(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = Ze("ripple");
  return y(), M(
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
        style: K(e.styleComputed.switch)
      },
      [A(
        "div",
        {
          style: K(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
        /* CLASS, STYLE */
      ), ke((y(), M(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [A(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (y(), pe(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : x("v-if", !0)],
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
const ra = _({
  render: n0,
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: We
  },
  directives: {
    Ripple: je
  },
  props: xy,
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
          width: en(h),
          height: en(h),
          backgroundColor: C === w ? g : $,
          color: T
        },
        ripple: {
          left: C === w ? en(h, 0.5) : "-" + en(h, 0.5),
          color: C === w ? g : $ || "#999",
          width: en(h, 2),
          height: en(h, 2)
        },
        track: {
          height: en(h, 0.72),
          width: en(h, 1.9),
          borderRadius: en(h, 2 / 3),
          filter: C === w || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: C === w ? g : $
        },
        switch: {
          height: en(h, 1.2),
          width: en(h, 2)
        }
      };
    }), d = F(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return en(h, 0.4);
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
        "onUpdate:modelValue": D
      } = e;
      if (P(C, h), !($ || T || w || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var V = S === O ? k : O;
        P(g, V), P(D, V), s();
      }
    }, f = () => {
      P(e["onUpdate:modelValue"], e.inactiveValue), i();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: i
    };
    return P(n, c), {
      n: _y,
      classes: e0,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var G1 = ra, r0 = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, _s = Symbol("TABS_BIND_TAB_KEY"), eu = Symbol("TABS_COUNT_TAB_KEY");
function a0() {
  var {
    childProviders: e,
    bindChildren: n
  } = dn(_s), {
    length: r
  } = gn(eu);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function t0() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(_s), {
    index: r
  } = yn(eu);
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
  classes: o0
} = ee("tab");
function i0(e, n) {
  var r = Ze("ripple");
  return ke((y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [H(e.$slots, "default")],
    6
    /* CLASS, STYLE */
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const aa = _({
  render: i0,
  name: "VarTab",
  directives: {
    Ripple: je
  },
  props: r0,
  setup(e) {
    var n = E(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = t0(), {
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
    return oe(() => e.name, h), oe(() => e.disabled, h), {
      n: st,
      classes: o0,
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
aa.install = function(e) {
  e.component(aa.name, aa);
};
var q1 = aa, nu = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), ru = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function l0() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(nu), {
    length: r
  } = gn(ru);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function s0() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(nu), {
    index: r
  } = yn(ru);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var u0 = {
  name: {
    type: [String, Number]
  }
}, {
  n: d0,
  classes: v0
} = ee("tab-item");
function f0(e, n) {
  var r = ie("var-swipe-item");
  return y(), pe(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? H(e.$slots, "default", {
        key: 0
      }) : x("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
const ta = _({
  render: f0,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Ln
  },
  props: u0,
  setup(e) {
    var n = E(!1), r = E(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = s0(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: d0,
      classes: v0,
      current: n,
      initSlot: r
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var K1 = ta, c0 = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: m0,
  classes: p0
} = ee("table");
function h0(e, n) {
  return y(), M(
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
          style: K({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [H(e.$slots, "default")],
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
      [H(e.$slots, "footer")],
      2
      /* CLASS */
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const oa = _({
  render: h0,
  name: "VarTable",
  props: c0,
  setup() {
    return {
      toSizeUnit: we,
      n: m0,
      classes: p0
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var X1 = oa;
function bl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var g0 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: bl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: bl
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
  stickyCssMode: Ke(ft, "cssMode"),
  stickyZIndex: Ke(ft, "zIndex"),
  offsetTop: Ke(ft, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function wl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        wl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        wl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: y0,
  classes: b0
} = ee("tabs");
function w0(e, n) {
  return y(), pe(
    Ra(e.sticky ? e.n("$-sticky") : e.Transition),
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
          [H(e.$slots, "default"), A(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: K({
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
const ia = _({
  render: w0,
  name: "VarTabs",
  components: {
    VarSticky: Rn
  },
  inheritAttrs: !1,
  props: g0,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), o = E(!1), i = E(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = E(null), {
      tabList: c,
      bindTabList: h,
      length: C
    } = a0(), g = (B) => {
      var p, b = (p = B.name.value) != null ? p : B.index.value, {
        active: L,
        onChange: Y,
        onClick: G
      } = e;
      P(e["onUpdate:active"], b), P(G, b), b !== L && P(Y, b);
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
        if (Xe(B)) {
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
          var Y = L.offsetLeft + L.offsetWidth / 2 - b.offsetWidth / 2;
          qa(b, {
            left: Y,
            animation: _t
          });
        } else {
          var G = L.offsetTop + L.offsetHeight / 2 - b.offsetHeight / 2;
          qa(b, {
            top: G,
            animation: _t
          });
        }
      }
    }, D = () => {
      var B = $() || T() || w();
      !B || B.disabled.value || (S(), O(B), k(B));
    }, V = /* @__PURE__ */ function() {
      var B = Cl(function* () {
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
      onTabClick: g
    };
    return h(I), oe(() => C.value, /* @__PURE__ */ Cl(function* () {
      yield Mn(), D();
    })), oe(() => e.active, D), Ue(() => window.addEventListener("resize", D)), cr(() => window.removeEventListener("resize", D)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: Ae,
      toSizeUnit: we,
      n: y0,
      classes: b0,
      resize: D,
      resizeSticky: V
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Z1 = ia, C0 = {
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
function Sl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function S0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Sl(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Sl(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: k0
} = ee("tabs-items");
function $0(e, n) {
  var r = ie("var-swipe");
  return y(), pe(
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
      default: ve(() => [H(e.$slots, "default")]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const la = _({
  render: $0,
  name: "VarTabsItems",
  components: {
    VarSwipe: zn
  },
  props: C0,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = l0(), o = (f) => r.find((c) => {
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
    return a(v), oe(() => e.active, s), oe(() => t.value, /* @__PURE__ */ S0(function* () {
      yield Mn(), s(e.active);
    })), {
      swipe: n,
      n: k0,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var J1 = la;
const T0 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, P0 = {
  "--badge-default-color": "#555"
}, O0 = {
  "--button-default-color": "#303030"
}, V0 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, M0 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, E0 = {
  "--checkbox-unchecked-color": "#fff"
}, I0 = {
  "--chip-default-color": "#555"
}, B0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, N0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, D0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, A0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, z0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, L0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, R0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, U0 = {
  "--popup-content-background-color": "#1e1e1e"
}, Y0 = {
  "--pull-refresh-background": "#303030"
}, F0 = {
  "--radio-unchecked-color": "#fff"
}, H0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, W0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, j0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, G0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, q0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, K0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, X0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Z0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, J0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, Q0 = {
  "--tabs-background": "#1e1e1e"
}, x0 = {
  "--app-bar-color": "#272727"
}, _0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, eb = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, nb = {
  "--menu-background-color": "#272727"
}, rb = {
  "--breadcrumb-inactive-color": "#aaa"
};
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
const ab = Ro({
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
}, O0, M0, V0, Z0, N0, j0, Q0, K0, U0, D0, T0, I0, P0, J0, B0, Y0, q0, G0, L0, X0, z0, W0, F0, E0, A0, R0, x0, _0, eb, nb, H0, rb);
var tb = {
  dark: ab
}, Q1 = null;
const Uo = tb;
var cn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], nn = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], kl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function ob(e) {
  return ["ampm", "24hr"].includes(e);
}
var ib = {
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
    validator: ob
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
}, au = (e, n) => e === "24hr" || n === "am", di = (e, n, r) => {
  var a = cn.findIndex((o) => z(o) === z(r)), t = au(e, n) ? r : nn[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, tn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
  };
}, tu = (e) => {
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
  } = di(t, o, i), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: h,
      minute: C
    } = tn(l);
    f = h === v && a > C;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: $
    } = tn(s);
    f = g === v && a < $;
  }
  if (l && s) {
    var {
      hour: T,
      minute: w
    } = tn(l), {
      hour: S,
      minute: O
    } = tn(s);
    f = S === v && a < O || T === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, ou = (e) => {
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
  } = di(t, o, i), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: C,
      minute: g,
      second: $
    } = tn(s);
    c = C === f && g < l || g === l && a > $;
  }
  if (!s && u) {
    var {
      hour: T,
      minute: w,
      second: S
    } = tn(u);
    c = T === f && w > l || w === l && a > S;
  }
  if (s && u) {
    var {
      hour: O,
      minute: k,
      second: D
    } = tn(s), {
      hour: V,
      minute: I,
      second: B
    } = tn(u);
    c = O === f && k < l || V === f && I > l || O === f && k === l && a > D || V === f && I === l && a < B;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: lb,
  classes: sb
} = ee("time-picker");
function ub(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n("clock"))
    },
    [A(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
      /* CLASS, STYLE */
    ), (y(!0), M(
      Oe,
      null,
      Ne(e.timeScales, (r, a) => (y(), M(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: K(e.getStyle(a, r, !1))
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
        Ne(e.hours24, (r, a) => (y(), M(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: K(e.getStyle(a, r, !0))
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
    )) : x("v-if", !0)],
    2
    /* CLASS */
  );
}
const db = _({
  render: ub,
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
    }), s = F(() => e.type === "hour" ? cn : kl), u = (g, $) => {
      var T;
      g = (T = g) != null ? T : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? tu : ou, S = {
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
      var g = e.isInner ? nn[l.value] : s.value[l.value];
      return s.value === kl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, $) => $ ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (au(e.format, e.ampm))
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
        backgroundColor: D,
        color: V
      } = k();
      return {
        left: S + "%",
        top: O + "%",
        backgroundColor: D,
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
        var g = e.ampm === "am" ? cn : nn;
        return va(g[l.value], 2, "0");
      }
    };
    return oe([l, () => e.isInner], (g, $) => {
      var [T, w] = g, [S, O] = $, k = T === S && w === O;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var D = w ? nn[l.value] : C(), V = e.useSeconds ? ":" + e.time.second : "", I = D + ":" + e.time.minute + V;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), oe(() => e.rad, (g, $) => {
      if (!(e.type === "hour" || g === void 0 || $ === void 0)) {
        var T = g / 6 >= 0 ? g / 6 : g / 6 + 60, w = $ / 6 >= 0 ? $ / 6 : $ / 6 + 60;
        if (T !== w) {
          var S, {
            hourStr: O
          } = di(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = ue().minute(T).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            S = O + ":" + k + D;
          }
          if (e.type === "second") {
            var V = ue().second(T).format("ss"), I = e.useSeconds ? ":" + V : "";
            S = O + ":" + e.time.minute + I;
          }
          r("update", S);
        }
      }
    }), oe([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [$, T, w] = g;
      if (t.value = [], $ && !T) {
        var {
          hour: S
        } = tn($), O = cn.filter((Q) => z(Q) > S), k = nn.filter((Q) => z(Q) > S);
        t.value = [...O, ...k];
      }
      if (!$ && T) {
        var {
          hour: D
        } = tn(T), V = cn.filter((Q) => z(Q) < D), I = nn.filter((Q) => z(Q) < D);
        t.value = [...V, ...I];
      }
      if ($ && T) {
        var {
          hour: B
        } = tn($), {
          hour: p
        } = tn(T), b = cn.filter((Q) => z(Q) < p || z(Q) > B), L = nn.filter((Q) => z(Q) < p || z(Q) > B);
        t.value = [...b, ...L];
      }
      if (w != null && w.hours) {
        var {
          hours: Y
        } = w, G = cn.filter((Q) => !Y(z(Q))), R = nn.filter((Q) => !Y(z(Q)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...R])];
      }
      o.value = t.value.map((Q) => nn.findIndex((W) => Q === W)).filter((Q) => Q >= 0);
    }, {
      immediate: !0
    }), {
      n: lb,
      classes: sb,
      hours24: nn,
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
var {
  n: vb,
  classes: fb
} = ee("time-picker"), cb = (e) => (ya(""), e = e(), ba(), e), mb = /* @__PURE__ */ cb(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), pb = {
  key: 0
};
function hb(e, n) {
  var r = ie("clock");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [A(
      "div",
      {
        class: m(e.n("title")),
        style: K({
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
        ), mb, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (y(), M("span", pb, ":")) : x("v-if", !0), e.useSeconds ? (y(), M(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
          /* TEXT, CLASS */
        )) : x("v-if", !0)],
        2
        /* CLASS */
      ), e.format === "ampm" ? (y(), M(
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
      )) : x("v-if", !0)],
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
            default: ve(() => [(y(), pe(
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
const sa = _({
  render: hb,
  name: "VarTimePicker",
  components: {
    Clock: db
  },
  props: ib,
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
    }, D = (N) => {
      var {
        disableHour: X
      } = a.value, j = cn.findIndex((te) => z(te) === z(g.value.hour)), Z = N === "am" ? cn : nn, ae = [...Z.slice(j), ...Z.slice(0, j)];
      return ae.find((te, ce) => (o.value = ce !== 0, !X.includes(te)));
    }, V = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = D(N);
        if (X) {
          var j = e.useSeconds ? ":" + g.value.second : "", Z = va(X, 2, "0") + ":" + g.value.minute + j;
          S(Z);
        }
      }
    }, I = (N, X) => {
      var j = N >= T.x[0] && N <= T.x[1], Z = X >= T.y[0] && X <= T.y[1];
      return j && Z;
    }, B = (N) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: j,
        minute: Z,
        second: ae
      } = tn(N);
      return {
        hour: ue().hour(j).format(X),
        minute: ue().minute(Z).format("mm"),
        second: ue().second(ae).format("ss")
      };
    }, p = (N) => {
      var X = N / 30;
      return X >= 0 ? X : X + 12;
    }, b = () => {
      var {
        width: N,
        height: X
      } = a.value.getSize(), j = $.x - N / 2 - 8, Z = $.x + N / 2 + 8, ae = $.y - X / 2 - 8, te = $.y + X / 2 + 8;
      return {
        rangeXMin: j,
        rangeXMax: Z,
        rangeYMin: ae,
        rangeYMax: te
      };
    }, L = (N, X, j) => {
      var {
        disableHour: Z
      } = a.value;
      i.value = I(N, X);
      var ae = Math.round(j / 30) * 30 + 90, te = p(ae), ce = t.value ? cn[te] : nn[te];
      if (Z.includes(ce) || (t.value = e.format === "24hr" ? I(N, X) : !1), t.value === i.value) {
        var ye = t.value || c.value === "pm" ? nn[te] : cn[te];
        h.value = Z.includes(ye), !h.value && (u.value = ae, l.value = !0);
      }
    }, Y = (N) => {
      var {
        disableHour: X
      } = a.value, j = Math.round(N / 6) * 6 + 90, Z = j / 6 >= 0 ? j / 6 : j / 6 + 60, ae = {
        time: Z,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      C.value = tu(ae), !C.value && (d.value = j, s.value = !0);
    }, G = (N) => {
      var {
        disableHour: X
      } = a.value, j = Math.round(N / 6) * 6 + 90, Z = j / 6 >= 0 ? j / 6 : j / 6 + 60, ae = {
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
      ou(ae) || (v.value = j);
    }, R = () => {
      var {
        left: N,
        top: X,
        width: j,
        height: Z
      } = n.value.getBoundingClientRect();
      if ($.x = N + j / 2, $.y = X + Z / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ae,
          rangeXMax: te,
          rangeYMin: ce,
          rangeYMax: ye
        } = b();
        T.x = [ae, te], T.y = [ce, ye];
      }
    }, Q = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: j
        } = N.touches[0], Z = X - $.x, ae = j - $.y, te = Math.round(O(Math.atan2(ae, Z)));
        f.value === "hour" ? L(X, j, te) : f.value === "minute" ? Y(te) : G(te);
      }
    }, W = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, J = () => {
      o.value = !1;
    };
    return oe(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: X,
          minute: j,
          second: Z
        } = tn(N), ae = ue().hour(X).format("hh"), te = ue().hour(X).format("HH"), ce = ue().minute(j).format("mm"), ye = ue().second(Z).format("ss");
        u.value = (ae === "12" ? 0 : z(ae)) * 30, d.value = z(ce) * 6, v.value = z(ye) * 6, g.value = B(N), e.format !== "24hr" && (c.value = va("" + X, 2, "0") === te && nn.includes(te) ? "pm" : "am"), t.value = e.format === "24hr" && nn.includes(te);
      }
    }, {
      immediate: !0
    }), {
      n: vb,
      classes: fb,
      getRad: w,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: o,
      moveHand: Q,
      checkPanel: k,
      checkAmpm: V,
      end: W,
      update: S,
      changePreventUpdate: J
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var x1 = sa;
function gb(e) {
  return ["click", "hover"].includes(e);
}
function yb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function bb(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var wb = {
  type: {
    type: String,
    default: "default",
    validator: bb
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
    validator: gb
  },
  placement: {
    type: String,
    default: "bottom",
    validator: yb
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
  n: Cb,
  classes: Sb
} = ee("tooltip");
function kb(e, n) {
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
    [H(e.$slots, "default"), (y(), pe(
      za,
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
          default: ve(() => [ke(A(
            "div",
            {
              ref: "popover",
              class: m(e.n("tooltip")),
              style: K({
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
                style: K({
                  background: e.color
                }),
                class: m(e.classes(e.n("content-container"), e.n("--" + e.type)))
              },
              [H(e.$slots, "content", {}, () => [he(
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
const ua = _({
  render: kb,
  name: "VarTooltip",
  props: wb,
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
    } = Hs(e);
    return {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      n: Cb,
      classes: Sb,
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
ua.install = function(e) {
  e.component(ua.name, ua);
};
var _1 = ua, $b = {
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
  n: Tb,
  classes: Pb
} = ee("uploader"), Ob = 0, Vb = ["onClick"], Mb = ["onClick"], Eb = ["src", "alt"], Ib = ["multiple", "accept", "capture", "disabled"], Bb = ["src"];
function Nb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), o = Ze("ripple");
  return y(), M(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [A(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(y(!0), M(
        Oe,
        null,
        Ne(e.files, (i) => ke((y(), M(
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
            Mb
          )) : x("v-if", !0), i.cover ? (y(), M(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: K({
                objectFit: i.fit
              }),
              src: i.cover,
              alt: i.name
            },
            null,
            14,
            Eb
          )) : x("v-if", !0), A(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [i.state === "success", e.n("--success")], [i.state === "error", e.n("--error")]))
            },
            null,
            2
            /* CLASS */
          )],
          10,
          Vb
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
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [A(
          "input",
          {
            ref: "input",
            class: m(e.n("action-input")),
            type: "file",
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
          Ib
        ), H(e.$slots, "default", {}, () => [re(
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
      }]]) : x("v-if", !0)],
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
            Bb
          )) : x("v-if", !0)];
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
const da = _({
  render: Nb,
  name: "VarUploader",
  directives: {
    Ripple: je
  },
  components: {
    VarIcon: $e,
    VarPopup: mn,
    VarFormDetails: We
  },
  props: $b,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = F(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: G
        }
      } = e;
      return Xe(Y) ? G + " / " + Y : "";
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
        hideList: G
      } = e;
      return G ? [] : Y;
    }), f = () => {
      n.value.click();
    }, c = (Y) => {
      var {
        disabled: G,
        readonly: R,
        previewed: Q
      } = e;
      if (!(o != null && o.disabled.value || o != null && o.readonly.value || G || R || !Q)) {
        var {
          url: W
        } = Y;
        if (Je(W) && hi(W)) {
          vr(W);
          return;
        }
        Je(W) && gi(W) && (a.value = Y, r.value = !0);
      }
    }, h = (Y) => ({
      id: Ob++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), C = (Y) => {
      var G = Y.target, {
        files: R
      } = G;
      return Array.from(R);
    }, g = (Y) => new Promise((G) => {
      var R = new FileReader();
      R.onload = () => {
        var Q = R.result;
        Y.file.type.startsWith("image") && (Y.cover = Q), Y.url = Q, G(Y);
      }, R.readAsDataURL(Y.file);
    }), $ = (Y) => Y.map(g), T = (Y) => {
      var {
        onBeforeRead: G
      } = e;
      return Y.map((R) => new Promise((Q) => {
        G || Q({
          valid: !0,
          varFile: R
        });
        var W = P(G, Me(R));
        W = be(W) ? W : [W], Promise.all(W).then((J) => {
          Q({
            valid: !J.some((N) => !N),
            varFile: R
          });
        });
      }));
    }, w = /* @__PURE__ */ function() {
      var Y = Tl(function* (G) {
        var {
          maxsize: R,
          maxlength: Q,
          modelValue: W,
          onOversize: J,
          onAfterRead: N,
          readonly: X,
          disabled: j
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || j || X)) {
          var Z = (Be) => Be.filter((Ge) => Ge.file.size > z(R) ? (P(J, Me(Ge)), !1) : !0), ae = (Be) => {
            var Ge = Math.min(Be.length, z(Q) - W.length);
            return Be.slice(0, Ge);
          }, te = C(G), ce = te.map(h);
          ce = R != null ? Z(ce) : ce, ce = Q != null ? ae(ce) : ce;
          var ye = yield Promise.all($(ce)), Ye = yield Promise.all(T(ye)), xe = Ye.filter((Be) => {
            var {
              valid: Ge
            } = Be;
            return Ge;
          }).map((Be) => {
            var {
              varFile: Ge
            } = Be;
            return Ge;
          });
          P(e["onUpdate:modelValue"], [...W, ...xe]), G.target.value = "", xe.forEach((Be) => P(N, Me(Be)));
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var Y = Tl(function* (G) {
        var {
          disabled: R,
          readonly: Q,
          modelValue: W,
          onBeforeRemove: J,
          onRemove: N
        } = e;
        if (!(o != null && o.disabled.value || o != null && o.readonly.value || R || Q)) {
          if (J) {
            var X = P(J, Me(G));
            if (X = be(X) ? X : [X], (yield Promise.all(X)).some((Z) => !Z))
              return;
          }
          var j = W.filter((Z) => Z !== G);
          P(N, Me(G)), I("onRemove"), P(e["onUpdate:modelValue"], j);
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), O = () => e.modelValue.filter((Y) => Y.state === "success"), k = () => e.modelValue.filter((Y) => Y.state === "error"), D = () => e.modelValue.filter((Y) => Y.state === "loading"), V = {
      getSuccess: O,
      getError: k,
      getLoading: D
    }, I = (Y) => {
      Ee(() => {
        var {
          validateTrigger: G,
          rules: R,
          modelValue: Q
        } = e;
        s(G, Y, R, Q, V);
      });
    }, B = !1, p = () => u(e.rules, e.modelValue, V), b = () => {
      B = !0, P(e["onUpdate:modelValue"], []), d();
    }, L = {
      validate: p,
      resetValidation: d,
      reset: b
    };
    return P(i, L), oe(() => e.modelValue, () => {
      !B && I("onChange"), B = !1;
    }, {
      deep: !0
    }), {
      n: Tb,
      classes: Pb,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: gi,
      isHTMLSupportImage: hi,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      preview: c,
      triggerAction: f,
      handleChange: w,
      handleRemove: S,
      getSuccess: O,
      getError: k,
      getLoading: D,
      validate: p,
      resetValidation: d,
      reset: b
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
var ew = da;
const Db = "2.7.1";
function Ab(e) {
  fa.install && e.use(fa), gr.install && e.use(gr), yr.install && e.use(yr), nr.install && e.use(nr), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), Sr.install && e.use(Sr), rn.install && e.use(rn), kr.install && e.use(kr), rr.install && e.use(rr), ar.install && e.use(ar), $r.install && e.use($r), tr.install && e.use(tr), Tr.install && e.use(Tr), Pr.install && e.use(Pr), Or.install && e.use(Or), un.install && e.use(un), Vr.install && e.use(Vr), Mr.install && e.use(Mr), Ir.install && e.use(Ir), ca.install && e.use(ca), Br.install && e.use(Br), An.install && e.use(An), We.install && e.use(We), $e.install && e.use($e), Nr.install && e.use(Nr), vr.install && e.use(vr), Dr.install && e.use(Dr), Ar.install && e.use(Ar), lr.install && e.use(lr), Ct.install && e.use(Ct), zr.install && e.use(zr), Lr.install && e.use(Lr), $n.install && e.use($n), Eo.install && e.use(Eo), oo.install && e.use(oo), Fn.install && e.use(Fn), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), ha.install && e.use(ha), mn.install && e.use(mn), Fr.install && e.use(Fr), Hr.install && e.use(Hr), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), qr.install && e.use(qr), je.install && e.use(je), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Lo.install && e.use(Lo), xr.install && e.use(xr), _r.install && e.use(_r), ea.install && e.use(ea), Rn.install && e.use(Rn), Qa.install && e.use(Qa), zn.install && e.use(zn), Ln.install && e.use(Ln), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), la.install && e.use(la), Uo.install && e.use(Uo), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da);
}
const nw = {
  version: Db,
  install: Ab,
  ActionSheet: fa,
  AppBar: gr,
  BackTop: yr,
  Badge: nr,
  BottomNavigation: br,
  BottomNavigationItem: wr,
  Breadcrumb: Cr,
  Breadcrumbs: Sr,
  Button: rn,
  Card: kr,
  Cell: rr,
  Checkbox: ar,
  CheckboxGroup: $r,
  Chip: tr,
  Col: Tr,
  Collapse: Pr,
  CollapseItem: Or,
  Context: un,
  Countdown: Vr,
  Counter: Mr,
  DatePicker: Ir,
  Dialog: ca,
  Divider: Br,
  Form: An,
  FormDetails: We,
  Icon: $e,
  Image: Nr,
  ImagePreview: vr,
  IndexAnchor: Dr,
  IndexBar: Ar,
  Input: lr,
  Lazy: Ct,
  Link: zr,
  List: Lr,
  Loading: $n,
  LoadingBar: Eo,
  Locale: oo,
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
  Ripple: je,
  Row: Kr,
  Select: Xr,
  Skeleton: Zr,
  Slider: Jr,
  Snackbar: Lo,
  Space: xr,
  Step: _r,
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
  Themes: Uo,
  TimePicker: sa,
  Tooltip: ua,
  Uploader: da
};
export {
  fa as ActionSheet,
  gr as AppBar,
  yr as BackTop,
  nr as Badge,
  br as BottomNavigation,
  wr as BottomNavigationItem,
  Cr as Breadcrumb,
  Sr as Breadcrumbs,
  rn as Button,
  kr as Card,
  rr as Cell,
  ar as Checkbox,
  $r as CheckboxGroup,
  tr as Chip,
  Tr as Col,
  Pr as Collapse,
  Or as CollapseItem,
  un as Context,
  Vr as Countdown,
  Mr as Counter,
  Ir as DatePicker,
  ca as Dialog,
  Br as Divider,
  An as Form,
  We as FormDetails,
  $e as Icon,
  Nr as Image,
  vr as ImagePreview,
  Dr as IndexAnchor,
  Ar as IndexBar,
  lr as Input,
  Ct as Lazy,
  zr as Link,
  Lr as List,
  $n as Loading,
  Eo as LoadingBar,
  oo as Locale,
  Fn as Menu,
  Rr as Option,
  Ur as Overlay,
  $o as PIXEL,
  Yr as Pagination,
  ha as Picker,
  mn as Popup,
  Fr as Progress,
  Hr as PullRefresh,
  Wr as Radio,
  jr as RadioGroup,
  Gr as Rate,
  qr as Result,
  je as Ripple,
  Kr as Row,
  ui as SNACKBAR_TYPE,
  Xr as Select,
  Zr as Skeleton,
  Jr as Slider,
  Lo as Snackbar,
  xr as Space,
  _r as Step,
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
  Uo as Themes,
  sa as TimePicker,
  ua as Tooltip,
  da as Uploader,
  Hb as _ActionSheetComponent,
  Wb as _AppBarComponent,
  qb as _BackTopComponent,
  Kb as _BadgeComponent,
  Xb as _BottomNavigationComponent,
  Zb as _BottomNavigationItemComponent,
  Jb as _BreadcrumbComponent,
  Qb as _BreadcrumbsComponent,
  Gb as _ButtonComponent,
  xb as _CardComponent,
  _b as _CellComponent,
  n1 as _CheckboxComponent,
  r1 as _CheckboxGroupComponent,
  a1 as _ChipComponent,
  t1 as _ColComponent,
  o1 as _CollapseComponent,
  i1 as _CollapseItemComponent,
  Lb as _ContextComponent,
  l1 as _CountdownComponent,
  s1 as _CounterComponent,
  u1 as _DatePickerComponent,
  d1 as _DialogComponent,
  v1 as _DividerComponent,
  f1 as _FormComponent,
  e1 as _FormDetailsComponent,
  Yb as _IconComponent,
  m1 as _ImageComponent,
  g1 as _ImagePreviewComponent,
  b1 as _IndexAnchorComponent,
  w1 as _IndexBarComponent,
  C1 as _InputComponent,
  c1 as _LazyComponent,
  S1 as _LinkComponent,
  k1 as _ListComponent,
  $1 as _LoadingBarComponent,
  jb as _LoadingComponent,
  Fb as _LocaleComponent,
  T1 as _MenuComponent,
  P1 as _OptionComponent,
  O1 as _OverlayComponent,
  V1 as _PaginationComponent,
  M1 as _PickerComponent,
  Ub as _PopupComponent,
  E1 as _ProgressComponent,
  I1 as _PullRefreshComponent,
  B1 as _RadioComponent,
  N1 as _RadioGroupComponent,
  D1 as _RateComponent,
  A1 as _ResultComponent,
  Rb as _RippleComponent,
  z1 as _RowComponent,
  L1 as _SelectComponent,
  R1 as _SkeletonComponent,
  U1 as _SliderComponent,
  Y1 as _SnackbarComponent,
  F1 as _SpaceComponent,
  H1 as _StepComponent,
  W1 as _StepsComponent,
  y1 as _StickyComponent,
  j1 as _StyleProviderComponent,
  p1 as _SwipeComponent,
  h1 as _SwipeItemComponent,
  G1 as _SwitchComponent,
  q1 as _TabComponent,
  K1 as _TabItemComponent,
  X1 as _TableComponent,
  Z1 as _TabsComponent,
  J1 as _TabsItemsComponent,
  Q1 as _ThemesComponent,
  x1 as _TimePickerComponent,
  _1 as _TooltipComponent,
  ew as _UploaderComponent,
  Ju as actionSheetProps,
  Jo as add,
  rd as appBarProps,
  Sd as backTopProps,
  Vd as badgeProps,
  Rd as bottomNavigationItemProps,
  Bd as bottomNavigationProps,
  jd as breadcrumbProps,
  Jd as breadcrumbsProps,
  gd as buttonProps,
  ev as cardProps,
  iv as cellProps,
  kv as checkboxGroupProps,
  pv as checkboxProps,
  Mv as chipProps,
  Nv as colProps,
  Wv as collapseItemProps,
  Uv as collapseProps,
  Kv as countdownProps,
  jf as counterProps,
  vc as datePickerProps,
  nw as default,
  Le as defaultLazyOptions,
  Vc as dialogProps,
  Bc as dividerProps,
  Gl as enUS,
  dv as formDetailsProps,
  Lc as formProps,
  jl as iconProps,
  $s as imageCache,
  bm as imagePreviewProps,
  rm as imageProps,
  Mm as indexAnchorProps,
  Nm as indexBarProps,
  Um as inputProps,
  Ab as install,
  Km as linkProps,
  Qm as listProps,
  rp as loadingBarProps,
  Qn as loadingProps,
  vp as menuProps,
  Kl as merge,
  Sh as optionProps,
  Ph as overlayProps,
  Fe as pack,
  ql as packs,
  Vh as paginationProps,
  Nh as pickerProps,
  xa as popupProps,
  Fh as progressProps,
  Xh as pullRefreshProps,
  og as radioGroupProps,
  xh as radioProps,
  ug as rateProps,
  cg as resultProps,
  _g as rowProps,
  ty as selectProps,
  sy as skeletonProps,
  cy as sliderProps,
  Ks as snackbarProps,
  zy as spaceProps,
  Uy as stepProps,
  Ky as stepsProps,
  ft as stickyProps,
  Jy as styleProviderProps,
  Is as swipeProps,
  xy as switchProps,
  u0 as tabItemProps,
  r0 as tabProps,
  c0 as tableProps,
  C0 as tabsItemsProps,
  g0 as tabsProps,
  ib as timePickerProps,
  wb as tooltipProps,
  $b as uploaderProps,
  Qo as use,
  Zo as useLocale,
  Db as version,
  Xo as zhCN
};
