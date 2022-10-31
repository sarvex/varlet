import { reactive as De, ref as E, onMounted as Fe, onUnmounted as xn, onActivated as bi, onDeactivated as wi, getCurrentInstance as Aa, provide as Jo, computed as W, inject as Qo, nextTick as Oe, createApp as Is, onBeforeUnmount as Si, h as xo, isVNode as Ci, watch as re, onBeforeMount as Ns, defineComponent as te, createVNode as ne, Teleport as st, Transition as je, withDirectives as Ce, vShow as za, mergeProps as Me, openBlock as C, createBlock as me, resolveDynamicComponent as ut, normalizeClass as m, normalizeStyle as K, resolveComponent as ae, resolveDirective as Ge, withCtx as ce, createElementVNode as z, renderSlot as q, toDisplayString as x, createElementBlock as M, Fragment as Te, renderList as Ne, createCommentVNode as Q, onUpdated as ki, createTextVNode as he, pushScopeId as _o, popScopeId as el, withModifiers as Vn, normalizeProps as nl, guardReactiveProps as Ds, vModelText as Bs, toRefs as As, withKeys as ji, toRaw as Gi, TransitionGroup as zs, Comment as Fs } from "vue";
var rl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
De(rl);
const ln = De(rl), nn = (e) => typeof e == "string", At = (e) => typeof e == "boolean", He = (e) => typeof e == "number", $i = (e) => Object.prototype.toString.call(e) === "[object Object]", Ls = (e) => typeof e == "object" && e !== null, Se = (e) => Array.isArray(e), Rs = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Un = (e) => e == null || e === "" || Array.isArray(e) && !e.length, A = (e) => e == null ? 0 : nn(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : At(e) ? Number(e) : e, dt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ti = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Oi = () => typeof window < "u", qi = (e) => [...new Set(e)], Us = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
var Ki = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), Xi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Ys = (e) => {
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
      this.has(r) && dt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Zi = (e) => e, Ji = (e) => Math.pow(e, 3), al = (e) => e < 0.5 ? Ji(e * 2) / 2 : 1 - Ji((1 - e) * 2) / 2, vt = (e, n) => e == null ? n : e, tl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, fr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function Qi(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ws(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Qi(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Qi(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function Hs(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function ft(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Pi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function js(e) {
  return zt.apply(this, arguments);
}
function zt() {
  return zt = Ws(function* (e) {
    yield Mn();
    var {
      top: n,
      bottom: r,
      left: a,
      right: t
    } = e.getBoundingClientRect(), {
      innerWidth: i,
      innerHeight: o
    } = window, l = a <= i && t >= 0, s = n <= o && r >= 0;
    return l && s;
  }), zt.apply(this, arguments);
}
function Et(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Sa(e) {
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
function Gs(e) {
  for (var n = [], r = e; r !== window; )
    r = Sa(r), n.push(r);
  return n;
}
var il = (e) => nn(e) && e.endsWith("rem"), qs = (e) => nn(e) && e.endsWith("px") || He(e), Ks = (e) => nn(e) && e.endsWith("%"), ol = (e) => nn(e) && e.endsWith("vw"), ll = (e) => nn(e) && e.endsWith("vh"), Ie = (e) => {
  if (He(e))
    return e;
  if (qs(e))
    return +e.replace("px", "");
  if (ol(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (ll(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (il(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return nn(e) ? A(e) : 0;
}, Ve = (e) => {
  if (e != null)
    return Ks(e) || ol(e) || ll(e) || il(e) ? e : Ie(e) + "px";
}, Xe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = Ve(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function kn(e) {
  var n = tl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Xs(e) {
  var n = tl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function ct(e) {
  kn(() => {
    kn(e);
  });
}
function Mn() {
  return new Promise((e) => {
    kn(() => {
      kn(e);
    });
  });
}
function xa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = ft(e), s = Pi(e);
  return new Promise((u) => {
    var d = () => {
      var f = (Date.now() - o) / t;
      if (f < 1) {
        var v = l + (r - l) * i(f), c = s + (a - s) * i(f);
        e.scrollTo(c, v), kn(d);
      } else
        e.scrollTo(a, r), u();
    };
    kn(d);
  });
}
function sl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + Us(a);
    return n[i] = t, n;
  }, {});
}
function Zs() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var Js = ["collect", "clear"];
function xi(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        xi(i, a, t, o, l, "next", s);
      }
      function l(s) {
        xi(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function Qs(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function _a() {
  return _a = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _a.apply(this, arguments);
}
function xe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function xs(e) {
  var n = Is(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Fa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => xo(e, _a({}, n, r));
    }
  }, {
    unmount: t
  } = xs(a);
  return {
    unmountInstance: t
  };
}
function _s(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Ci(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function yn(e) {
  var n = De([]), r = Aa(), a = () => {
    var l = _s(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    dt(n, l);
  };
  Jo(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = W(() => n.length);
  return {
    length: o
  };
}
function bn(e) {
  if (!ul(e))
    return {
      index: null
    };
  var n = Qo(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Aa();
  Fe(() => {
    Oe().then(() => r(i));
  }), xn(() => {
    Oe().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function dn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    dt(n, i);
  }, t = (i) => {
    Jo(e, _a({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function vn(e) {
  if (!ul(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Qo(e), {
    collect: r,
    clear: a
  } = n, t = Qs(n, Js), i = (o) => {
    Fe(() => r(o)), Si(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function ul(e) {
  var n = Aa();
  return e in n.provides;
}
function wn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = _i(function* (i, o, l) {
      if (!Se(i) || !i.length)
        return !0;
      var s = yield Promise.all(i.map((u) => u(o, l)));
      return !s.some((u) => u !== !0 ? (e.value = String(u), !0) : !1);
    });
    return function(o, l, s) {
      return t.apply(this, arguments);
    };
  }(), r = () => {
    e.value = "";
  }, a = /* @__PURE__ */ function() {
    var t = _i(function* (i, o, l, s, u) {
      i.includes(o) && (yield n(l, s, u)) && (e.value = "");
    });
    return function(o, l, s, u, d) {
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
function eu(e) {
  Fe(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), xn(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function dl() {
  var e = E(!1);
  return bi(() => {
    e.value = !1;
  }), wi(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
  var n = "var-" + e, r = (t) => t ? t.startsWith("--") ? "" + n + t : n + "__" + t : n, a = function() {
    for (var t = arguments.length, i = new Array(t), o = 0; o < t; o++)
      i[o] = arguments[o];
    return i.map((l) => {
      if (Se(l)) {
        var [s, u, d = null] = l;
        return s ? u : d;
      }
      return l;
    });
  };
  return {
    n: r,
    classes: a
  };
}
function N(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (e)
    return e(...r);
}
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
var {
  n: vl
} = ee("ripple"), eo = 250;
function nu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function ru(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: i
  } = e, o = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2, l = o * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - o * 2) / 2, f = (i - o * 2) / 2, v = s - o, c = u - o;
  return {
    x: v,
    y: c,
    centerX: d,
    centerY: f,
    size: l
  };
}
function fl(e) {
  var n = this._ripple;
  if (n.removeRipple(), !(n.disabled || n.tasker)) {
    var r = () => {
      n.tasker = null;
      var {
        x: a,
        y: t,
        centerX: i,
        centerY: o,
        size: l
      } = ru(this, e), s = document.createElement("div");
      s.classList.add(vl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), nu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Ft() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + vl());
    if (!!r.length) {
      var a = r[r.length - 1], t = eo - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, eo);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function cl() {
  var e = this._ripple;
  !Zs() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function au(e, n) {
  var r, a, t;
  e._ripple = et({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : ln.touchmoveForbid,
    removeRipple: Ft.bind(e)
  }), e.addEventListener("touchstart", fl, {
    passive: !0
  }), e.addEventListener("touchmove", cl, {
    passive: !0
  }), e.addEventListener("dragstart", Ft, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function tu(e) {
  e.removeEventListener("touchstart", fl), e.removeEventListener("touchmove", cl), e.removeEventListener("dragstart", Ft), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function iu(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : ln.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var f, v;
    e._ripple = et({
      tasker: u.disabled ? null : (f = e._ripple) == null ? void 0 : f.tasker,
      removeRipple: (v = e._ripple) == null ? void 0 : v.removeRipple
    }, u);
  }
}
var Re = {
  mounted: au,
  unmounted: tu,
  updated: iu,
  install(e) {
    e.directive("ripple", this);
  }
};
function ou(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var La = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: ou
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
  teleport: {
    type: String
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  onClickOverlay: {
    type: Function
  },
  onRouteChange: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function ml() {
  var e = Object.keys(ln.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ua(e) {
  ln.locks[e] = 1, ml();
}
function Ya(e) {
  delete ln.locks[e], ml();
}
function Ei(e, n) {
  var {
    uid: r
  } = Aa();
  n && re(n, (a) => {
    a === !1 ? Ya(r) : a === !0 && e() === !0 && Ua(r);
  }), re(e, (a) => {
    n && n() === !1 || (a === !0 ? Ua(r) : Ya(r));
  }), Ns(() => {
    n && n() === !1 || e() === !0 && Ua(r);
  }), xn(() => {
    n && n() === !1 || e() === !0 && Ya(r);
  }), bi(() => {
    n && n() === !1 || e() === !0 && Ua(r);
  }), wi(() => {
    n && n() === !1 || e() === !0 && Ya(r);
  });
}
function mt(e, n) {
  var r = E(ln.zIndex);
  return re(e, (a) => {
    a && (ln.zIndex += n, r.value = ln.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
function lu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ci(e);
}
var {
  n: Wa,
  classes: Vt
} = ee("popup");
const pn = te({
  name: "VarPopup",
  inheritAttrs: !1,
  props: La,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = mt(() => e.show, 3), {
      disabled: i
    } = dl(), o = () => {
      var d, {
        closeOnClickOverlay: f,
        onClickOverlay: v
      } = e;
      v == null || v(), f && ((d = e["onUpdate:show"]) == null || d.call(e, !1));
    };
    Ei(() => e.show, () => e.lockScroll), re(() => e.show, (d) => {
      var {
        onOpen: f,
        onClose: v
      } = e;
      d ? f == null || f() : v == null || v();
    }), eu(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: f
      } = e;
      return ne("div", {
        class: Vt(Wa("overlay"), d),
        style: Lt({
          zIndex: t.value - 1
        }, f),
        onClick: o
      }, null);
    }, s = () => ne("div", Me({
      class: Vt(Wa("content"), "var-elevation--3", Wa("--" + e.position)),
      style: {
        zIndex: t.value
      }
    }, a), [r.default == null ? void 0 : r.default()]), u = () => {
      var {
        onOpened: d,
        onClosed: f,
        show: v,
        overlay: c,
        transition: p,
        position: y
      } = e;
      return ne(je, {
        name: "var-fade",
        onAfterEnter: d,
        onAfterLeave: f
      }, {
        default: () => [Ce(ne("div", {
          class: Vt("var--box", Wa()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), ne(je, {
          name: p || "var-pop-" + y
        }, {
          default: () => [v && s()]
        })]), [[za, v]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var f;
        return ne(st, {
          to: d,
          disabled: i.value
        }, lu(f = u()) ? f : {
          default: () => [f]
        });
      }
      return u();
    };
  }
});
pn.install = function(e) {
  e.component(pn.name, pn);
};
var pl = {
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
  onClick: {
    type: Function
  }
};
function no(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function su(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        no(i, a, t, o, l, "next", s);
      }
      function l(s) {
        no(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: uu,
  classes: du
} = ee("icon");
function vu(e, n) {
  return C(), me(
    ut(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
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
const $e = te({
  render: vu,
  name: "VarIcon",
  props: pl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = su(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || A(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Oe(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, A(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return re(() => e.name, a, {
      immediate: !0
    }), {
      n: uu,
      classes: du,
      nextName: n,
      shrinking: r,
      isURL: Rs,
      toNumber: A,
      toSizeUnit: Ve
    };
  }
});
$e.install = function(e) {
  e.component($e.name, $e);
};
function Rt() {
  return Rt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Rt.apply(this, arguments);
}
var fu = Rt({
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
  onSelect: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
}, xe(La, [
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
  "onRouteChange"
]));
const hl = {
  dialogTitle: "\u63D0\u793A",
  dialogConfirmButtonText: "\u786E\u8BA4",
  dialogCancelButtonText: "\u53D6\u6D88",
  actionSheetTitle: "\u8BF7\u9009\u62E9",
  listLoadingText: "\u52A0\u8F7D\u4E2D",
  listFinishedText: "\u6CA1\u6709\u66F4\u591A\u4E86",
  listErrorText: "\u52A0\u8F7D\u5931\u8D25",
  pickerTitle: "\u8BF7\u9009\u62E9",
  pickerConfirmButtonText: "\u786E\u8BA4",
  pickerCancelButtonText: "\u53D6\u6D88",
  datePickerMonthDict: {
    "01": {
      name: "\u4E00\u6708",
      abbr: "\u4E00\u6708"
    },
    "02": {
      name: "\u4E8C\u6708",
      abbr: "\u4E8C\u6708"
    },
    "03": {
      name: "\u4E09\u6708",
      abbr: "\u4E09\u6708"
    },
    "04": {
      name: "\u56DB\u6708",
      abbr: "\u56DB\u6708"
    },
    "05": {
      name: "\u4E94\u6708",
      abbr: "\u4E94\u6708"
    },
    "06": {
      name: "\u516D\u6708",
      abbr: "\u516D\u6708"
    },
    "07": {
      name: "\u4E03\u6708",
      abbr: "\u4E03\u6708"
    },
    "08": {
      name: "\u516B\u6708",
      abbr: "\u516B\u6708"
    },
    "09": {
      name: "\u4E5D\u6708",
      abbr: "\u4E5D\u6708"
    },
    10: {
      name: "\u5341\u6708",
      abbr: "\u5341\u6708"
    },
    11: {
      name: "\u5341\u4E00\u6708",
      abbr: "\u5341\u4E00\u6708"
    },
    12: {
      name: "\u5341\u4E8C\u6708",
      abbr: "\u5341\u4E8C\u6708"
    }
  },
  datePickerWeekDict: {
    0: {
      name: "\u661F\u671F\u65E5",
      abbr: "\u65E5"
    },
    1: {
      name: "\u661F\u671F\u4E00",
      abbr: "\u4E00"
    },
    2: {
      name: "\u661F\u671F\u4E8C",
      abbr: "\u4E8C"
    },
    3: {
      name: "\u661F\u671F\u4E09",
      abbr: "\u4E09"
    },
    4: {
      name: "\u661F\u671F\u56DB",
      abbr: "\u56DB"
    },
    5: {
      name: "\u661F\u671F\u4E94",
      abbr: "\u4E94"
    },
    6: {
      name: "\u661F\u671F\u516D",
      abbr: "\u516D"
    }
  },
  datePickerSelected: "\u4E2A\u88AB\u9009\u62E9",
  paginationItem: "\u6761",
  paginationPage: "\u9875",
  paginationJump: "\u524D\u5F80"
}, cu = {
  dialogTitle: "Hint",
  dialogConfirmButtonText: "Confirm",
  dialogCancelButtonText: "Cancel",
  actionSheetTitle: "Select One",
  listLoadingText: "Loading",
  listFinishedText: "No more",
  listErrorText: "Load fail",
  pickerTitle: "Pick it",
  pickerConfirmButtonText: "Confirm",
  pickerCancelButtonText: "Cancel",
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
  paginationItem: "",
  paginationPage: "page",
  paginationJump: "Go to"
};
function Ut() {
  return Ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ut.apply(this, arguments);
}
function gl() {
  var e = {}, n = E({}), r = (i, o) => {
    o.lang = i, e[i] = o;
  }, a = (i) => {
    if (!e[i])
      return console.warn("The " + i + " does not exist. You can mount a language package using the add method"), {};
    n.value = e[i];
  }, t = (i, o) => {
    if (!e[i]) {
      console.warn("The " + i + " does not exist. You can mount a language package using the add method");
      return;
    }
    e[i] = Ut({}, e[i], o), a(i);
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
  packs: mu,
  pack: Ue,
  add: yl,
  use: bl,
  merge: pu
} = gl();
yl("zh-CN", hl);
bl("zh-CN");
const Yt = {
  zhCN: hl,
  enUS: cu,
  packs: mu,
  pack: Ue,
  add: yl,
  use: bl,
  merge: pu,
  useLocale: gl
};
var {
  n: hu,
  classes: gu
} = ee("action-sheet"), yu = ["onClick"];
function bu(e, n) {
  var r = ae("var-icon"), a = ae("var-popup"), t = Ge("ripple");
  return C(), me(
    a,
    Me({
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
      default: ce(() => [z(
        "div",
        Me({
          class: e.classes(e.n(), "var--box")
        }, e.$attrs),
        [q(e.$slots, "title", {}, () => [z(
          "div",
          {
            class: m(e.n("title"))
          },
          x(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), q(e.$slots, "actions", {}, () => [(C(!0), M(
          Te,
          null,
          Ne(e.actions, (i) => Ce((C(), M(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (C(), me(
              r,
              {
                key: 0,
                class: m(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: i.icon,
                size: i.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : Q("v-if", !0), z(
              "div",
              {
                class: m(e.n("action-name"))
              },
              x(i.name),
              3
            )],
            14,
            yu
          )), [[t, {
            disabled: i.disabled
          }]])),
          128
        ))])],
        16
      )]),
      _: 3
    },
    16,
    ["class", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "show", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const rr = te({
  render: bu,
  name: "VarActionSheet",
  directives: {
    Ripple: Re
  },
  components: {
    VarPopup: pn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: fu,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        N(o, t), i && N(e["onUpdate:show"], !1);
      }
    }, a = (t) => N(e["onUpdate:show"], t);
    return re(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: hu,
      classes: gu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ue,
      dt: vt,
      handleSelect: r
    };
  }
});
var Fn;
function cr(e) {
  return Oi() ? new Promise((n) => {
    cr.close();
    var r = De(e);
    r.teleport = "body", Fn = r;
    var {
      unmountInstance: a
    } = Fa(rr, r, {
      onSelect: (t) => {
        r.onSelect == null || r.onSelect(t), n(t);
      },
      onClose: () => {
        r.onClose == null || r.onClose(), n("close");
      },
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Fn === r && (Fn = null);
      },
      onRouteChange: () => {
        a(), Fn === r && (Fn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
cr.Component = rr;
rr.install = function(e) {
  e.component(rr.name, rr);
};
cr.close = () => {
  if (Fn != null) {
    var e = Fn;
    Fn = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
cr.install = function(e) {
  e.component(rr.name, rr);
};
function wu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Su = {
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
    validator: wu
  },
  elevation: {
    type: Boolean,
    default: !0
  }
}, {
  n: Cu,
  classes: ku
} = ee("app-bar");
function $u(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--3"])),
      style: K({
        background: e.color,
        color: e.textColor
      })
    },
    [z(
      "div",
      {
        class: m(e.n("left"))
      },
      [q(e.$slots, "left"), e.titlePosition === "left" ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingLeft: e.paddingLeft
          })
        },
        [q(e.$slots, "default", {}, () => [he(
          x(e.title),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [q(e.$slots, "default", {}, () => [he(
        x(e.title),
        1
      )])],
      2
    )) : Q("v-if", !0), z(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingRight: e.paddingRight
          })
        },
        [q(e.$slots, "default", {}, () => [he(
          x(e.title),
          1
        )])],
        6
      )) : Q("v-if", !0), q(e.$slots, "right")],
      2
    )],
    6
  );
}
const Pr = te({
  render: $u,
  name: "VarAppBar",
  props: Su,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Fe(i), ki(i), {
      n: Cu,
      classes: ku,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
function Tu(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Ou(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Yn = {
  type: {
    type: String,
    default: "circle",
    validator: Tu
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Ou
  },
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
  n: Pu,
  classes: Eu
} = ee("loading"), Vu = (e) => (_o(""), e = e(), el(), e), Mu = /* @__PURE__ */ Vu(() => /* @__PURE__ */ z(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ z("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
)), Iu = [Mu];
function Nu(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [q(e.$slots, "default"), e.loading ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.isShow ? (C(), M(
      "div",
      {
        key: 1,
        class: m(e.classes("var--box", e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [z(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Iu,
          6
        )],
        2
      )) : Q("v-if", !0), (C(!0), M(
        Te,
        null,
        Ne(e.loadingTypeDict, (r, a) => (C(), M(
          Te,
          {
            key: a
          },
          [e.type === a ? (C(), M(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(C(!0), M(
              Te,
              null,
              Ne(r, (t) => (C(), M(
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
              ))),
              128
            ))],
            2
          )) : Q("v-if", !0)],
          64
        ))),
        128
      )), e.$slots.description || e.description ? (C(), M(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
            color: e.color
          })
        },
        [q(e.$slots, "description", {}, () => [he(
          x(e.description),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const Cn = te({
  render: Nu,
  name: "VarLoading",
  props: Yn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = W(() => N(r.default) ? e.loading : !0);
    return {
      n: Pu,
      classes: Eu,
      multiplySizeUnit: Xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
function Wt() {
  return Wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wt.apply(this, arguments);
}
function Du(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Bu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Au = {
  type: {
    type: String,
    default: "default",
    validator: Du
  },
  size: {
    type: String,
    default: "normal",
    validator: Bu
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
    type: [Number, String],
    default: 12
  },
  loadingType: xe(Yn, "type"),
  loadingSize: xe(Yn, "size"),
  loadingColor: Wt({}, xe(Yn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: zu,
  classes: Fu
} = ee("button"), Lu = ["disabled"];
function Ru(e, n) {
  var r = ae("var-loading"), a = Ge("ripple");
  return Ce((C(), M(
    "button",
    {
      class: m(e.classes(e.n(), "var--box", e.n("--" + e.size), [e.block, "var--flex " + e.n("--block"), "var--inline-flex"], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " var-elevation--2"], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: K({
        color: e.textColor,
        background: e.color
      }),
      disabled: e.disabled,
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onTouchstart: n[1] || (n[1] = function() {
        return e.handleTouchstart && e.handleTouchstart(...arguments);
      })
    },
    [e.loading || e.pending ? (C(), me(
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
    )) : Q("v-if", !0), z(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [q(e.$slots, "default")],
      2
    )],
    46,
    Lu
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const en = te({
  render: Ru,
  name: "VarButton",
  components: {
    VarLoading: Cn
  },
  directives: {
    Ripple: Re
  },
  props: Au,
  setup(e) {
    var n = E(!1), r = (i) => {
      e.autoLoading && (n.value = !0, Promise.resolve(i).then(() => {
        n.value = !1;
      }).catch(() => {
        n.value = !1;
      }));
    }, a = (i) => {
      var {
        loading: o,
        disabled: l,
        onClick: s
      } = e;
      !s || o || l || n.value || r(s(i));
    }, t = (i) => {
      var {
        loading: o,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || o || l || n.value || r(s(i));
    };
    return {
      n: zu,
      classes: Fu,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
en.install = function(e) {
  e.component(en.name, en);
};
var Uu = {
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
  onClick: {
    type: Function
  }
}, {
  n: Yu,
  classes: Wu
} = ee("back-top");
function Hu(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return C(), me(
    st,
    {
      to: "body",
      disabled: e.disabled
    },
    [z(
      "div",
      Me({
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
      [q(e.$slots, "default", {}, () => [ne(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ce(() => [ne(r, {
          name: "chevron-up"
        })]),
        _: 1
      })])],
      16
    )],
    8,
    ["disabled"]
  );
}
const Er = te({
  render: Hu,
  name: "VarBackTop",
  components: {
    VarButton: en,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Uu,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, i = (u) => {
      N(e.onClick, u);
      var d = Pi(t);
      xa(t, {
        left: d,
        duration: e.duration,
        animation: al
      });
    }, o = () => {
      n.value = ft(t) >= Ie(e.visibilityHeight);
    }, l = Ti(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (nn(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (Ls(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Fe(() => {
      t = e.target ? s() : Sa(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Si(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: Ve,
      n: Yu,
      classes: Wu,
      click: i
    };
  }
});
Er.install = function(e) {
  e.component(Er.name, Er);
};
function ju(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Gu(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var qu = {
  type: {
    type: String,
    default: "default",
    validator: ju
  },
  hidden: {
    type: Boolean,
    default: !1
  },
  dot: {
    type: Boolean,
    default: !1
  },
  value: {
    type: [String, Number],
    default: 0
  },
  maxValue: {
    type: [String, Number]
  },
  color: {
    type: String
  },
  position: {
    type: String,
    default: "right-top",
    validator: Gu
  },
  icon: {
    type: String
  }
}, {
  n: Nn,
  classes: Ku
} = ee("badge"), Xu = {
  key: 1
};
function Zu(e, n) {
  var r = ae("var-icon");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [ne(je, {
      name: "var-badge-fade"
    }, {
      default: ce(() => [Ce(z(
        "span",
        Me(e.$attrs, {
          class: e.classes(e.n("content"), ...e.contentClass),
          style: {
            background: e.color
          }
        }),
        [e.icon && !e.dot ? (C(), me(
          r,
          {
            key: 0,
            name: e.icon,
            size: "10px"
          },
          null,
          8,
          ["name"]
        )) : (C(), M(
          "span",
          Xu,
          x(e.values),
          1
        ))],
        16
      ), [[za, !e.hidden]])]),
      _: 1
    }), q(e.$slots, "default")],
    2
  );
}
const ar = te({
  render: Zu,
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: qu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = W(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Nn("position") + " " + Nn("--" + l), f = s ? Nn("dot") : null, v = i(), c = u ? Nn("icon") : null;
      return [Nn("--" + o), d, f, v, c];
    }), t = W(() => {
      var {
        dot: o,
        value: l,
        maxValue: s
      } = e;
      return o ? "" : l !== void 0 && s !== void 0 && A(l) > s ? s + "+" : l;
    }), i = () => {
      var {
        position: o,
        dot: l
      } = e;
      if (l && o.includes("right"))
        return Nn("dot--right");
      if (l && o.includes("left"))
        return Nn("dot--left");
    };
    return {
      n: Nn,
      classes: Ku,
      values: t,
      contentClass: a
    };
  }
});
ar.install = function(e) {
  e.component(ar.name, ar);
};
var Ju = {
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
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  },
  onBeforeChange: {
    type: Function
  },
  onFabClick: {
    type: Function
  },
  fabProps: {
    type: Object
  }
}, wl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Sl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Qu() {
  var {
    childProviders: e,
    bindChildren: n
  } = dn(wl), {
    length: r
  } = yn(Sl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function Ht() {
  return Ht = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ht.apply(this, arguments);
}
var {
  n: xu,
  classes: _u
} = ee("bottom-navigation"), {
  n: pt
} = ee("bottom-navigation-item"), ro = pt("--right-half-space"), ao = pt("--left-half-space"), to = pt("--right-space"), ed = {
  type: "primary"
};
function nd(e, n) {
  var r = ae("var-button");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [q(e.$slots, "default"), e.$slots.fab ? (C(), me(
      r,
      Me({
        key: 0,
        class: e.classes(e.n("fab"), [e.length % 2, e.n("--fab-right"), e.n("--fab-center")]),
        "var-bottom-navigation__fab": "",
        onClick: e.handleFabClick
      }, e.fabProps, {
        round: ""
      }),
      {
        default: ce(() => [q(e.$slots, "fab")]),
        _: 3
      },
      16,
      ["class", "onClick"]
    )) : Q("v-if", !0)],
    6
  );
}
const Vr = te({
  render: nd,
  name: "VarBottomNavigation",
  components: {
    VarButton: en
  },
  props: Ju,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Qu(), f = () => {
      s.value === 0 || v() || c() || p();
    }, v = () => u.find((k) => {
      var {
        name: D
      } = k;
      return t.value === D.value;
    }), c = () => u.find((k) => {
      var {
        index: D
      } = k;
      return t.value === D.value;
    }), p = () => {
      !He(t.value) || (t.value < 0 ? N(e["onUpdate:active"], 0) : t.value > s.value - 1 && N(e["onUpdate:active"], s.value - 1));
    }, y = (k) => {
      t.value !== k && (e.onBeforeChange ? b(k) : T(k));
    }, b = (k) => {
      Promise.resolve(N(e.onBeforeChange, k)).then((D) => D && T(k));
    }, T = (k) => {
      N(e["onUpdate:active"], k), N(e.onChange, k);
    }, S = () => {
      var k = V();
      k.forEach((D) => {
        D.classList.remove(ro, ao, to);
      });
    }, h = (k) => {
      var D = V(), P = D.length, $ = k % 2 === 0;
      D.forEach((O, R) => {
        g($, O, R, P);
      });
    }, g = (k, D, P, $) => {
      var O = P === $ - 1;
      if (!k && O) {
        D.classList.add(to);
        return;
      }
      var R = P === $ / 2 - 1, Y = P === $ / 2;
      R ? D.classList.add(ro) : Y && D.classList.add(ao);
    }, V = () => Array.from(a.value.querySelectorAll("." + pt())), w = () => {
      N(e.onFabClick);
    }, B = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: y
    };
    return d(B), re(() => s.value, f), re(() => e.fabProps, (k) => {
      l.value = Ht({}, ed, k);
    }, {
      immediate: !0,
      deep: !0
    }), Fe(() => {
      !r.fab || h(s.value);
    }), ki(() => {
      S(), r.fab && h(s.value);
    }), {
      n: xu,
      classes: _u,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: w,
      fabProps: l
    };
  }
});
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var rd = {
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
  onClick: {
    type: Function
  }
};
function ad() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(wl), {
    index: r
  } = bn(Sl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: td,
  classes: id
} = ee("bottom-navigation-item"), od = {
  type: "danger",
  dot: !0
};
function ld(e, n) {
  var r = ae("var-icon"), a = ae("var-badge"), t = Ge("ripple");
  return Ce((C(), M(
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
    [e.icon && !e.$slots.icon ? (C(), me(
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
    )) : Q("v-if", !0), q(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (C(), me(
      a,
      Me({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : Q("v-if", !0), z(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? Q("v-if", !0) : (C(), M(
        Te,
        {
          key: 0
        },
        [he(
          x(e.label),
          1
        )],
        2112
      )), q(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Mr = te({
  render: ld,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ar,
    VarIcon: $e
  },
  directives: {
    Ripple: Re
  },
  props: rd,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = ad(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, f = () => l.value === n.value || l.value === t.value ? s.value : u.value, v = () => {
      var c, p = (c = n.value) != null ? c : t.value;
      N(e.onClick, p), N(i.onToggle, p);
    };
    return o(d), re(() => r.value, (c) => {
      a.value = c === !0 ? od : r.value;
    }, {
      immediate: !0
    }), {
      n: td,
      classes: id,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: f,
      handleClick: v
    };
  }
});
Mr.install = function(e) {
  e.component(Mr.name, Mr);
};
function sd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var ud = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: sd,
    default: "cover"
  },
  imageHeight: {
    type: [String, Number]
  },
  imageWidth: {
    type: [String, Number]
  },
  layout: {
    type: String,
    default: "column"
  },
  floating: {
    type: Boolean,
    default: !1
  },
  "onUpdate:floating": {
    type: Function
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
  onClick: {
    type: Function
  }
};
function io(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function oo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        io(i, a, t, o, l, "next", s);
      }
      function l(s) {
        io(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: dd,
  classes: vd
} = ee("card"), fd = 500, cd = ["src", "alt"];
function md(e, n) {
  var r = ae("var-icon"), a = ae("var-button"), t = Ge("ripple");
  return Ce((C(), M(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.elevation, "var-elevation--" + e.elevation, "var-elevation--1"])),
      style: K({
        zIndex: e.floated ? e.zIndex : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [z(
      "div",
      {
        ref: "cardFloater",
        class: m(e.classes(e.n("floater"))),
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
      [q(e.$slots, "image", {}, () => [e.src ? (C(), M(
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
        cd
      )) : Q("v-if", !0)]), z(
        "div",
        {
          class: m(e.n("container"))
        },
        [q(e.$slots, "title", {}, () => [e.title ? (C(), M(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          x(e.title),
          3
        )) : Q("v-if", !0)]), q(e.$slots, "subtitle", {}, () => [e.subtitle ? (C(), M(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          x(e.subtitle),
          3
        )) : Q("v-if", !0)]), q(e.$slots, "description", {}, () => [e.description ? (C(), M(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          x(e.description),
          3
        )) : Q("v-if", !0)]), e.$slots.extra ? (C(), M(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [q(e.$slots, "extra")],
          2
        )) : Q("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (C(), M(
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
          [q(e.$slots, "floating-content")],
          6
        )) : Q("v-if", !0)],
        2
      ), e.showFloatingButtons ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), "var--box")),
          style: K({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [q(e.$slots, "close-button", {}, () => [ne(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), "var-elevation--6")),
            onClick: Vn(e.close, ["stop"])
          },
          {
            default: ce(() => [ne(
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
          },
          8,
          ["class", "onClick"]
        )])],
        6
      )) : Q("v-if", !0)],
      6
    ), z(
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
    )],
    6
  )), [[t, {
    disabled: !e.ripple || e.floater
  }]]);
}
const Ir = te({
  render: md,
  name: "VarCard",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarButton: en
  },
  props: ud,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), i = E("100%"), o = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), f = E("0px"), v = E("0"), c = W(() => e.layout === "row"), p = E(!1), y = E(!1), {
      zIndex: b
    } = mt(() => e.floating, 1);
    Ei(() => e.floating, () => !c.value);
    var T = "auto", S = "auto", h = null, g = E(null), V = /* @__PURE__ */ function() {
      var k = oo(function* () {
        clearTimeout(g.value), clearTimeout(h), g.value = null, g.value = setTimeout(/* @__PURE__ */ oo(function* () {
          var {
            width: D,
            height: P,
            left: $,
            top: O
          } = n.value.getBoundingClientRect();
          a.value = Ve(D), t.value = Ve(P), i.value = a.value, o.value = t.value, l.value = Ve(O), s.value = Ve($), u.value = "fixed", T = l.value, S = s.value, p.value = !0, yield Mn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", f.value = "auto", v.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? fd : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), w = () => {
      clearTimeout(h), clearTimeout(g.value), g.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = S, f.value = "0px", v.value = "0", p.value = !1, h = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", S = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, B = () => {
      N(e["onUpdate:floating"], !1);
    };
    return re(() => e.floating, (k) => {
      c.value || Oe(() => {
        k ? V() : w();
      });
    }, {
      immediate: !0
    }), {
      n: dd,
      classes: vd,
      toSizeUnit: Ve,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: g,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: f,
      opacity: v,
      zIndex: b,
      isRow: c,
      close: B,
      showFloatingButtons: p,
      floated: y
    };
  }
});
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var pd = {
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
  n: hd,
  classes: gd
} = ee("cell");
function yd(e, n) {
  var r = ae("var-icon");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [q(e.$slots, "icon", {}, () => [ne(
        r,
        {
          class: "var--flex",
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : Q("v-if", !0), z(
      "div",
      {
        class: m(e.n("content"))
      },
      [z(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [q(e.$slots, "default", {}, () => [he(
          x(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [q(e.$slots, "description", {}, () => [he(
          x(e.description),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    ), e.$slots.extra ? (C(), M(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [q(e.$slots, "extra")],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const tr = te({
  render: yd,
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  props: pd,
  setup() {
    return {
      n: hd,
      classes: gd
    };
  }
});
tr.install = function(e) {
  e.component(tr.name, tr);
};
var bd = {
  errorMessage: {
    type: String,
    default: ""
  },
  maxlengthText: {
    type: String,
    default: ""
  }
}, {
  n: wd
} = ee("form-details");
function Sd(e, n) {
  return C(), me(
    je,
    {
      name: e.n()
    },
    {
      default: ce(() => [e.errorMessage || e.maxlengthText ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [z(
          "div",
          {
            class: m(e.n("message"))
          },
          x(e.errorMessage),
          3
        ), z(
          "div",
          {
            class: m(e.n("length"))
          },
          x(e.maxlengthText),
          3
        )],
        2
      )) : Q("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const We = te({
  render: Sd,
  name: "VarFormDetails",
  props: bd,
  setup: () => ({
    n: wd
  })
});
We.install = function(e) {
  e.component(We.name, We);
};
var Cd = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, Cl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), kl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function kd() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Cl), {
    length: r
  } = yn(kl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function $d() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(Cl), {
    index: r
  } = bn(kl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var $l = Symbol("FORM_BIND_FORM_ITEM_KEY");
function Sn() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn($l);
  return {
    bindForm: e,
    form: n
  };
}
function Td() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn($l);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Od,
  classes: Pd
} = ee("checkbox");
function Ed(e, n) {
  var r = ae("var-icon"), a = ae("var-form-details"), t = Ge("ripple");
  return C(), M(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: m(e.n())
      },
      [Ce((C(), M(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
          key: 0
        }, () => [ne(
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
        )]) : q(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ne(
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
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), z(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [q(e.$slots, "default")],
        2
      )],
      2
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const ir = te({
  render: Ed,
  name: "VarCheckbox",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Cd,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = E(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = $d(), {
      form: l,
      bindForm: s
    } = Sn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: f,
      resetValidation: v
    } = wn(), c = (w) => {
      Oe(() => {
        var {
          validateTrigger: B,
          rules: k,
          modelValue: D
        } = e;
        d(B, w, k, D);
      });
    }, p = (w) => {
      n.value = w;
      var {
        checkedValue: B,
        onChange: k
      } = e;
      N(e["onUpdate:modelValue"], n.value), N(k, n.value), c("onChange"), w === B ? i == null || i.onChecked(B) : i == null || i.onUnchecked(B);
    }, y = (w) => {
      var {
        disabled: B,
        readonly: k,
        checkedValue: D,
        uncheckedValue: P,
        onClick: $
      } = e;
      if (!(l != null && l.disabled.value || B) && (N($, w), !(l != null && l.readonly.value || k))) {
        t.value = !0;
        var O = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && O || p(r.value ? P : D);
      }
    }, b = (w) => {
      var {
        checkedValue: B,
        uncheckedValue: k
      } = e;
      n.value = w.includes(B) ? B : k;
    }, T = () => {
      t.value = !1;
    }, S = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, h = (w) => {
      var {
        checkedValue: B,
        uncheckedValue: k
      } = e, D = ![B, k].includes(w);
      D && (w = r.value ? k : B), p(w);
    }, g = () => f(e.rules, e.modelValue);
    re(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var V = {
      checkedValue: a,
      checked: r,
      sync: b,
      validate: g,
      resetValidation: v,
      reset: S,
      resetWithAnimation: T
    };
    return N(o, V), N(s, V), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Od,
      classes: Pd,
      handleClick: y,
      toggle: h,
      reset: S,
      validate: g,
      resetValidation: v
    };
  }
});
ir.install = function(e) {
  e.component(ir.name, ir);
};
function Vd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Md = {
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
    validator: Vd
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Id,
  classes: Nd
} = ee("checkbox-group");
function Dd(e, n) {
  var r = ae("var-form-details");
  return C(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [q(e.$slots, "default")],
      2
    ), ne(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Nr = te({
  render: Dd,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: We
  },
  props: Md,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = kd(), {
      bindForm: o
    } = Sn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = wn(), f = W(() => l.value), v = (B) => {
      Oe(() => {
        var {
          validateTrigger: k,
          rules: D,
          modelValue: P
        } = e;
        s(k, B, D, P);
      });
    }, c = (B) => {
      N(e["onUpdate:modelValue"], B), N(e.onChange, B), v("onChange");
    }, p = (B) => {
      var {
        modelValue: k
      } = e;
      k.includes(B) || c([...k, B]);
    }, y = (B) => {
      var {
        modelValue: k
      } = e;
      !k.includes(B) || c(k.filter((D) => D !== B));
    }, b = () => t.forEach((B) => {
      var {
        sync: k
      } = B;
      return k(e.modelValue);
    }), T = () => {
      t.forEach((B) => B.resetWithAnimation());
    }, S = () => {
      var B = t.map((D) => {
        var {
          checkedValue: P
        } = D;
        return P.value;
      }), k = qi(B);
      return T(), N(e["onUpdate:modelValue"], k), k;
    }, h = () => {
      var B = t.filter((D) => {
        var {
          checked: P
        } = D;
        return !P.value;
      }).map((D) => {
        var {
          checkedValue: P
        } = D;
        return P.value;
      }), k = qi(B);
      return T(), N(e["onUpdate:modelValue"], k), k;
    }, g = () => {
      N(e["onUpdate:modelValue"], []), d();
    }, V = () => u(e.rules, e.modelValue);
    re(() => e.modelValue, b, {
      deep: !0
    }), re(() => a.value, b);
    var w = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: V,
      resetValidation: d,
      reset: g,
      errorMessage: f
    };
    return i(w), N(o, w), {
      errorMessage: l,
      n: Id,
      classes: Nd,
      checkAll: S,
      inverseAll: h,
      reset: g,
      validate: V,
      resetValidation: d
    };
  }
});
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
function Bd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ad(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var zd = {
  type: {
    type: String,
    default: "default",
    validator: Bd
  },
  size: {
    type: String,
    default: "normal",
    validator: Ad
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: xe(pl, "name"),
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
  onClose: {
    type: Function
  }
}, {
  n: br,
  classes: Fd
} = ee("chip");
function Ld(e, n) {
  var r = ae("var-icon");
  return C(), me(je, {
    name: "var-fade"
  }, {
    default: ce(() => [z(
      "span",
      Me({
        class: e.classes(e.n(), "var--box", ...e.contentClass),
        style: e.chipStyles
      }, e.$attrs),
      [q(e.$slots, "left"), z(
        "span",
        {
          class: m(e.n("text-" + e.size))
        },
        [q(e.$slots, "default")],
        2
      ), q(e.$slots, "right"), e.closable ? (C(), M(
        "span",
        {
          key: 0,
          class: m(e.n("--close")),
          onClick: n[0] || (n[0] = function() {
            return e.onClose && e.onClose(...arguments);
          })
        },
        [ne(
          r,
          {
            name: "" + (e.iconName ? e.iconName : "close-circle")
          },
          null,
          8,
          ["name"]
        )],
        2
      )) : Q("v-if", !0)],
      16
    )]),
    _: 3
  });
}
const or = te({
  render: Ld,
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: zd,
  setup(e) {
    var n = W(() => {
      var {
        plain: a,
        textColor: t,
        color: i
      } = e;
      return a ? {
        color: t || i,
        borderColor: i
      } : {
        color: t,
        background: i
      };
    }), r = W(() => {
      var {
        size: a,
        block: t,
        type: i,
        plain: o,
        round: l
      } = e, s = t ? "var--flex" : "var--inline-flex", u = o ? br("plain") + " " + br("plain-" + i) : br("--" + i), d = l ? br("--round") : null;
      return [br("--" + a), s, u, d];
    });
    return {
      n: br,
      classes: Fd,
      chipStyles: n,
      contentClass: r
    };
  }
});
or.install = function(e) {
  e.component(or.name, or);
};
function Rd(e) {
  return ["row", "column"].includes(e);
}
var Ud = {
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
    validator: Rd
  },
  onClick: {
    type: Function
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
  }
}, Tl = Symbol("ROW_BIND_COL_KEY"), Ol = Symbol("ROW_COUNT_COL_KEY");
function Yd() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Tl), {
    length: r
  } = yn(Ol);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Wd() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(Tl), {
    index: r
  } = bn(Ol);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Ha,
  classes: Hd
} = ee("col");
function jd(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: K({
        flexDirection: e.direction,
        paddingLeft: e.toSizeUnit(e.padding.left),
        paddingRight: e.toSizeUnit(e.padding.right)
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Dr = te({
  render: jd,
  name: "VarCol",
  props: Ud,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = W(() => A(e.span)), a = W(() => A(e.offset)), {
      row: t,
      bindRow: i
    } = Wd(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if ($i(u)) {
        var {
          offset: f,
          span: v
        } = u;
        Number(v) >= 0 && d.push(Ha("--span-" + s + "-" + v)), f && d.push(Ha("--offset-" + s + "-" + f));
      } else
        Number(u) >= 0 && d.push(Ha("--span-" + s + "-" + u));
      return d;
    };
    return re([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), N(i, o), {
      n: Ha,
      classes: Hd,
      padding: n,
      toNumber: A,
      toSizeUnit: Ve,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var Pl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), El = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Gd() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Pl), {
    length: r
  } = yn(El);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var qd = {
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
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Kd
} = ee("collapse");
function Xd(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Br = te({
  render: Xd,
  name: "VarCollapse",
  props: qd,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Gd(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Se(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, p) => o() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((y) => y !== c) : null, s = (c, p) => {
      var y = l(c, p);
      N(e["onUpdate:modelValue"], y), N(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: y
          } = p;
          return e.modelValue === y.value;
        });
      var c = r.filter((p) => {
        var {
          name: y
        } = p;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: p,
        name: y
      } = c;
      return y.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((c) => {
      var {
        index: p,
        name: y
      } = c;
      return y.value === void 0 ? e.modelValue.includes(p.value) : !1;
    }), f = () => {
      if (!!o()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var y = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, y);
        });
      }
    }, v = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(v), re(() => n.value, () => Oe().then(f)), re(() => e.modelValue, () => Oe().then(f)), {
      n: Kd
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
function Zd() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(Pl), {
    index: r
  } = bn(El);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Jd = {
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
  n: Qd,
  classes: xd
} = ee("collapse-item");
function _d(e, n) {
  var r = ae("var-icon");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [z(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [z(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [q(e.$slots, "title", {}, () => [he(
          x(e.title),
          1
        )])],
        2
      ), z(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [q(e.$slots, "icon", {}, () => [ne(
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
      )],
      2
    ), Ce(z(
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
      [z(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [q(e.$slots, "default")],
        2
      )],
      34
    ), [[za, e.show]])],
    2
  );
}
const Ar = te({
  render: _d,
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: Jd,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Zd(), t = !0, i = E(null), o = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, f = W(() => e.name), v = (h, g) => {
      s.value === void 0 || h && Se(s.value) || g === l.value || (l.value = g, c(!0));
    }, c = (h) => {
      e.disabled || h || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Oe(() => {
        var {
          offsetHeight: h
        } = i.value;
        i.value.style.height = 0 + "px", kn(() => {
          i.value.style.height = h + "px", t && ct(() => {
            t && T();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, b = () => {
      if (!!i.value) {
        var {
          offsetHeight: h
        } = i.value;
        i.value.style.height = h + "px", kn(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, S = {
      index: n,
      name: f,
      init: v
    };
    return a(S), re(l, (h) => {
      h ? p() : b();
    }), {
      n: Qd,
      start: y,
      classes: xd,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: T
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var ev = {
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
  onEnd: {
    type: Function
  },
  onChange: {
    type: Function
  }
}, {
  n: nv
} = ee("countdown"), jt = 1e3, Gt = 60 * jt, qt = 60 * Gt, lo = 24 * qt;
function rv(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default", nl(Ds(e.timeData)), () => [he(
      x(e.showTime),
      1
    )])],
    2
  );
}
const zr = te({
  render: rv,
  name: "VarCountdown",
  props: ev,
  setup(e) {
    var n = E(0), r = E(!1), a = E(""), t = E(0), i = E(0), o = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, p) => {
      var y = Object.values(p), b = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (b.forEach((h, g) => {
        c.includes(h) ? c = c.replace(h, fr("" + y[g], 2, "0")) : y[g + 1] += y[g] * T[g];
      }), c.includes("S")) {
        var S = fr("" + y[y.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", S) : c.includes("SS") ? c = c.replace("SS", S.slice(0, 2)) : c = c.replace("S", S.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var p = Math.floor(c / lo), y = Math.floor(c % lo / qt), b = Math.floor(c % qt / Gt), T = Math.floor(c % Gt / jt), S = Math.floor(c % jt), h = {
        days: p,
        hours: y,
        minutes: b,
        seconds: T,
        milliseconds: S
      };
      o.value = h, N(e.onChange, o.value), a.value = l(e.format, h);
    }, u = () => {
      var {
        time: c,
        onEnd: p,
        autoStart: y
      } = e, b = Date.now();
      n.value || (n.value = b + A(c));
      var T = n.value - b;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        N(p);
        return;
      }
      (y || r.value) && (t.value = kn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || A(e.time)), u());
    }, f = () => {
      r.value = !1;
    }, v = () => {
      n.value = 0, r.value = !1, Xs(t.value), u();
    };
    return re(() => e.time, () => v(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: nv,
      start: d,
      pause: f,
      reset: v
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Sr = 9e15, _n = 1e9, Kt = "0123456789abcdef", nt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", rt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", Xt = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Sr,
  maxE: Sr,
  crypto: !1
}, Vl, On, ve = !0, ht = "[DecimalError] ", Zn = ht + "Invalid argument: ", Ml = ht + "Precision limit exceeded", Il = ht + "crypto unavailable", Nl = "[object Decimal]", qe = Math.floor, ze = Math.pow, av = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, tv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, iv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Dl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, hn = 1e7, ue = 7, ov = 9007199254740991, lv = nt.length - 1, Zt = rt.length - 1, G = { toStringTag: Nl };
G.absoluteValue = G.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), se(e);
};
G.ceil = function() {
  return se(new this.constructor(this), this.e + 1, 2);
};
G.clampedTo = G.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(Zn + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
G.comparedTo = G.cmp = function(e) {
  var n, r, a, t, i = this, o = i.d, l = (e = new i.constructor(e)).d, s = i.s, u = e.s;
  if (!o || !l)
    return !s || !u ? NaN : s !== u ? s : o === l ? 0 : !o ^ s < 0 ? 1 : -1;
  if (!o[0] || !l[0])
    return o[0] ? s : l[0] ? -u : 0;
  if (s !== u)
    return s;
  if (i.e !== e.e)
    return i.e > e.e ^ s < 0 ? 1 : -1;
  for (a = o.length, t = l.length, n = 0, r = a < t ? a : t; n < r; ++n)
    if (o[n] !== l[n])
      return o[n] > l[n] ^ s < 0 ? 1 : -1;
  return a === t ? 0 : a > t ^ s < 0 ? 1 : -1;
};
G.cosine = G.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = sv(a, Ll(a, r)), a.precision = e, a.rounding = n, se(On == 2 || On == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
G.cubeRoot = G.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, f = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new f(d);
  for (ve = !1, i = d.s * ze(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = Ye(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = ze(r, 1 / 3), e = qe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new f(r), a.s = d.s) : a = new f(i.toString()), o = (e = f.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = ke(u.plus(d).times(l), u.plus(s), o + 2, 1), Ye(l.d).slice(0, o) === (r = Ye(a.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !t && r == "4999") {
        if (!t && (se(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (se(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return ve = !0, se(a, e, f.rounding, n);
};
G.decimalPlaces = G.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - qe(this.e / ue)) * ue, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
G.dividedBy = G.div = function(e) {
  return ke(this, new this.constructor(e));
};
G.dividedToIntegerBy = G.divToInt = function(e) {
  var n = this, r = n.constructor;
  return se(ke(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
G.equals = G.eq = function(e) {
  return this.cmp(e) === 0;
};
G.floor = function() {
  return se(new this.constructor(this), this.e + 1, 3);
};
G.greaterThan = G.gt = function(e) {
  return this.cmp(e) > 0;
};
G.greaterThanOrEqualTo = G.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
G.hyperbolicCosine = G.cosh = function() {
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / yt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = pa(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return se(i, o.precision = r, o.rounding = a, !0);
};
G.hyperbolicSine = G.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = pa(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / yt(5, e)), t = pa(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, se(t, n, r, !0);
};
G.hyperbolicTangent = G.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, ke(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
G.inverseCosine = G.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? mn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? mn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = mn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
};
G.inverseHyperbolicCosine = G.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ve = !1, r = r.times(r).minus(1).sqrt().plus(r), ve = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
G.inverseHyperbolicSine = G.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ve = !1, r = r.times(r).plus(1).sqrt().plus(r), ve = !0, a.precision = e, a.rounding = n, r.ln());
};
G.inverseHyperbolicTangent = G.atanh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? se(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = ke(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
G.inverseSine = G.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = mn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
G.inverseTangent = G.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, f = d.precision, v = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && f + 4 <= Zt)
      return o = mn(d, f + 4, v).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (f + 4 <= Zt)
      return o = mn(d, f + 4, v).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = f + 10, d.rounding = 1, r = Math.min(28, l / ue + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ve = !1, n = Math.ceil(l / ue), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), ve = !0, se(o, d.precision = f, d.rounding = v, !0);
};
G.isFinite = function() {
  return !!this.d;
};
G.isInteger = G.isInt = function() {
  return !!this.d && qe(this.e / ue) > this.d.length - 2;
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
  var n, r, a, t, i, o, l, s, u = this, d = u.constructor, f = d.precision, v = d.rounding, c = 5;
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
      i = !0;
    else {
      for (t = r[0]; t % 10 === 0; )
        t /= 10;
      i = t !== 1;
    }
  if (ve = !1, l = f + c, o = Wn(u, l), a = n ? at(d, l + 10) : Wn(e, l), s = ke(o, a, l, 1), Ma(s.d, t = f, v))
    do
      if (l += 10, o = Wn(u, l), a = n ? at(d, l + 10) : Wn(e, l), s = ke(o, a, l, 1), !i) {
        +Ye(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = se(s, f + 1, 0));
        break;
      }
    while (Ma(s.d, t += 10, v));
  return ve = !0, se(s, f, v);
};
G.minus = G.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, f, v, c = this, p = c.constructor;
  if (e = new p(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new p(NaN) : c.d ? e.s = -e.s : e = new p(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, v = e.d, l = p.precision, s = p.rounding, !u[0] || !v[0]) {
    if (v[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(c);
    else
      return new p(s === 3 ? -0 : 0);
    return ve ? se(e, l, s) : e;
  }
  if (r = qe(e.e / ue), d = qe(c.e / ue), u = u.slice(), i = d - r, i) {
    for (f = i < 0, f ? (n = u, i = -i, o = v.length) : (n = v, r = d, o = u.length), a = Math.max(Math.ceil(l / ue), o) + 2, i > a && (i = a, n.length = 1), n.reverse(), a = i; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, o = v.length, f = a < o, f && (o = a), a = 0; a < o; a++)
      if (u[a] != v[a]) {
        f = u[a] < v[a];
        break;
      }
    i = 0;
  }
  for (f && (n = u, u = v, v = n, e.s = -e.s), o = u.length, a = v.length - o; a > 0; --a)
    u[o++] = 0;
  for (a = v.length; a > i; ) {
    if (u[--a] < v[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = hn - 1;
      --u[t], u[a] += hn;
    }
    u[a] -= v[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = gt(u, r), ve ? se(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
G.modulo = G.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? se(new a(r), a.precision, a.rounding) : (ve = !1, a.modulo == 9 ? (n = ke(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = ke(r, e, 0, a.modulo, 1), n = n.times(e), ve = !0, r.minus(n));
};
G.naturalExponential = G.exp = function() {
  return Jt(this);
};
G.naturalLogarithm = G.ln = function() {
  return Wn(this);
};
G.negated = G.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, se(e);
};
G.plus = G.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, f = this, v = f.constructor;
  if (e = new v(e), !f.d || !e.d)
    return !f.s || !e.s ? e = new v(NaN) : f.d || (e = new v(e.d || f.s === e.s ? f : NaN)), e;
  if (f.s != e.s)
    return e.s = -e.s, f.minus(e);
  if (u = f.d, d = e.d, l = v.precision, s = v.rounding, !u[0] || !d[0])
    return d[0] || (e = new v(f)), ve ? se(e, l, s) : e;
  if (i = qe(f.e / ue), a = qe(e.e / ue), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / ue), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / hn | 0, u[t] %= hn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = gt(u, a), ve ? se(e, l, s) : e;
};
G.precision = G.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(Zn + e);
  return r.d ? (n = Bl(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
G.round = function() {
  var e = this, n = e.constructor;
  return se(new n(e), e.e + 1, n.rounding);
};
G.sine = G.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = dv(a, Ll(a, r)), a.precision = e, a.rounding = n, se(On > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
G.squareRoot = G.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (ve = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = Ye(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = qe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus(ke(o, i, r + 2, 1)).times(0.5), Ye(i.d).slice(0, r) === (n = Ye(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (se(i, s + 1, 0), i.times(i).eq(o))) {
          a = i;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (se(a, s + 1, 1), e = !a.times(a).eq(o));
        break;
      }
  return ve = !0, se(a, s, d.rounding, e);
};
G.tangent = G.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = ke(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, se(On == 2 || On == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
G.times = G.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, f = d.constructor, v = d.d, c = (e = new f(e)).d;
  if (e.s *= d.s, !v || !v[0] || !c || !c[0])
    return new f(!e.s || v && !v[0] && !c || c && !c[0] && !v ? NaN : !v || !c ? e.s / 0 : e.s * 0);
  for (r = qe(d.e / ue) + qe(e.e / ue), s = v.length, u = c.length, s < u && (i = v, v = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * v[t - a - 1] + n, i[t--] = l % hn | 0, n = l / hn | 0;
    i[t] = (i[t] + n) % hn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = gt(i, r), ve ? se(e, f.precision, f.rounding) : e;
};
G.toBinary = function(e, n) {
  return Vi(this, 2, e, n);
};
G.toDecimalPlaces = G.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (rn(e, 0, _n), n === void 0 ? n = a.rounding : rn(n, 0, 8), se(r, e + r.e + 1, n));
};
G.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = $n(a, !0) : (rn(e, 0, _n), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e + 1, n), r = $n(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
G.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = $n(t) : (rn(e, 0, _n), n === void 0 ? n = i.rounding : rn(n, 0, 8), a = se(new i(t), e + t.e + 1, n), r = $n(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
G.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, f, v, c = this, p = c.d, y = c.constructor;
  if (!p)
    return new y(c);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), i = n.e = Bl(p) - c.e - 1, o = i % ue, n.d[0] = ze(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(Zn + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (ve = !1, l = new y(Ye(p)), d = y.precision, y.precision = i = p.length * ue * 2; f = ke(l, n, 0, 1, 1), t = r.plus(f.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(f.times(t)), s = t, t = n, n = l.minus(f.times(t)), l = t;
  return t = ke(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, v = ke(u, a, i, 1).minus(c).abs().cmp(ke(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], y.precision = d, ve = !0, v;
};
G.toHexadecimal = G.toHex = function(e, n) {
  return Vi(this, 16, e, n);
};
G.toNearest = function(e, n) {
  var r = this, a = r.constructor;
  if (r = new a(r), e == null) {
    if (!r.d)
      return r;
    e = new a(1), n = a.rounding;
  } else {
    if (e = new a(e), n === void 0 ? n = a.rounding : rn(n, 0, 8), !r.d)
      return e.s ? r : e;
    if (!e.d)
      return e.s && (e.s = r.s), e;
  }
  return e.d[0] ? (ve = !1, r = ke(r, e, 0, n, 1).times(e), ve = !0, se(r)) : (e.s = r.s, r = e), r;
};
G.toNumber = function() {
  return +this;
};
G.toOctal = function(e, n) {
  return Vi(this, 8, e, n);
};
G.toPower = G.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(ze(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return se(l, a, i);
  if (n = qe(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= ov)
    return t = Al(s, l, r, a), e.s < 0 ? new s(1).div(t) : se(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? qe(u * (Math.log("0." + Ye(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (ve = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = Jt(e.times(Wn(l, a + r)), a), t.d && (t = se(t, a + 5, 1), Ma(t.d, a, i) && (n = a + 10, t = se(Jt(e.times(Wn(l, n + r)), n), n + 5, 1), +Ye(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = se(t, a + 1, 0)))), t.s = o, ve = !0, s.rounding = i, se(t, a, i));
};
G.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = $n(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (rn(e, 1, _n), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e, n), r = $n(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
G.toSignificantDigits = G.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (rn(e, 1, _n), n === void 0 ? n = a.rounding : rn(n, 0, 8)), se(new a(r), e, n);
};
G.toString = function() {
  var e = this, n = e.constructor, r = $n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
G.truncated = G.trunc = function() {
  return se(new this.constructor(this), this.e + 1, 1);
};
G.valueOf = G.toJSON = function() {
  var e = this, n = e.constructor, r = $n(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function Ye(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = ue - a.length, r && (i += Bn(r)), i += a;
    o = e[n], a = o + "", r = ue - a.length, r && (i += Bn(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function rn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(Zn + e);
}
function Ma(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = ze(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function Xa(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += Kt.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function sv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / yt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = pa(e, 1, n.times(t), new e(1));
  for (var i = r; i--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var ke = function() {
  function e(a, t, i) {
    var o, l = 0, s = a.length;
    for (a = a.slice(); s--; )
      o = a[s] * t + l, a[s] = o % i | 0, l = o / i | 0;
    return l && a.unshift(l), a;
  }
  function n(a, t, i, o) {
    var l, s;
    if (i != o)
      s = i > o ? 1 : -1;
    else
      for (l = s = 0; l < i; l++)
        if (a[l] != t[l]) {
          s = a[l] > t[l] ? 1 : -1;
          break;
        }
    return s;
  }
  function r(a, t, i, o) {
    for (var l = 0; i--; )
      a[i] -= l, l = a[i] < t[i] ? 1 : 0, a[i] = l * o + a[i] - t[i];
    for (; !a[0] && a.length > 1; )
      a.shift();
  }
  return function(a, t, i, o, l, s) {
    var u, d, f, v, c, p, y, b, T, S, h, g, V, w, B, k, D, P, $, O, R = a.constructor, Y = a.s == t.s ? 1 : -1, j = a.d, F = t.d;
    if (!j || !j[0] || !F || !F[0])
      return new R(
        !a.s || !t.s || (j ? F && j[0] == F[0] : !F) ? NaN : j && j[0] == 0 || !F ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = hn, c = ue, d = qe(a.e / c) - qe(t.e / c)), $ = F.length, D = j.length, T = new R(Y), S = T.d = [], f = 0; F[f] == (j[f] || 0); f++)
      ;
    if (F[f] > (j[f] || 0) && d--, i == null ? (w = i = R.precision, o = R.rounding) : l ? w = i + (a.e - t.e) + 1 : w = i, w < 0)
      S.push(1), p = !0;
    else {
      if (w = w / c + 2 | 0, f = 0, $ == 1) {
        for (v = 0, F = F[0], w++; (f < D || v) && w--; f++)
          B = v * s + (j[f] || 0), S[f] = B / F | 0, v = B % F | 0;
        p = v || f < D;
      } else {
        for (v = s / (F[0] + 1) | 0, v > 1 && (F = e(F, v, s), j = e(j, v, s), $ = F.length, D = j.length), k = $, h = j.slice(0, $), g = h.length; g < $; )
          h[g++] = 0;
        O = F.slice(), O.unshift(0), P = F[0], F[1] >= s / 2 && ++P;
        do
          v = 0, u = n(F, h, $, g), u < 0 ? (V = h[0], $ != g && (V = V * s + (h[1] || 0)), v = V / P | 0, v > 1 ? (v >= s && (v = s - 1), y = e(F, v, s), b = y.length, g = h.length, u = n(y, h, b, g), u == 1 && (v--, r(y, $ < b ? O : F, b, s))) : (v == 0 && (u = v = 1), y = F.slice()), b = y.length, b < g && y.unshift(0), r(h, y, g, s), u == -1 && (g = h.length, u = n(F, h, $, g), u < 1 && (v++, r(h, $ < g ? O : F, g, s))), g = h.length) : u === 0 && (v++, h = [0]), S[f++] = v, u && h[0] ? h[g++] = j[k] || 0 : (h = [j[k]], g = 1);
        while ((k++ < D || h[0] !== void 0) && w--);
        p = h[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (c == 1)
      T.e = d, Vl = p;
    else {
      for (f = 1, v = S[0]; v >= 10; v /= 10)
        f++;
      T.e = f + d * c - 1, se(T, l ? i + T.e + 1 : i, o, p);
    }
    return T;
  };
}();
function se(e, n, r, a) {
  var t, i, o, l, s, u, d, f, v, c = e.constructor;
  e:
    if (n != null) {
      if (f = e.d, !f)
        return e;
      for (t = 1, l = f[0]; l >= 10; l /= 10)
        t++;
      if (i = n - t, i < 0)
        i += ue, o = n, d = f[v = 0], s = d / ze(10, t - o - 1) % 10 | 0;
      else if (v = Math.ceil((i + 1) / ue), l = f.length, v >= l)
        if (a) {
          for (; l++ <= v; )
            f.push(0);
          d = s = 0, t = 1, i %= ue, o = i - ue + 1;
        } else
          break e;
      else {
        for (d = l = f[v], t = 1; l >= 10; l /= 10)
          t++;
        i %= ue, o = i - ue + t, s = o < 0 ? 0 : d / ze(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || f[v + 1] !== void 0 || (o < 0 ? d : d % ze(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / ze(10, t - o) : 0 : f[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !f[0])
        return f.length = 0, u ? (n -= e.e + 1, f[0] = ze(10, (ue - n % ue) % ue), e.e = -n || 0) : f[0] = e.e = 0, e;
      if (i == 0 ? (f.length = v, l = 1, v--) : (f.length = v + 1, l = ze(10, ue - i), f[v] = o > 0 ? (d / ze(10, t - o) % ze(10, o) | 0) * l : 0), u)
        for (; ; )
          if (v == 0) {
            for (i = 1, o = f[0]; o >= 10; o /= 10)
              i++;
            for (o = f[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, f[0] == hn && (f[0] = 1));
            break;
          } else {
            if (f[v] += l, f[v] != hn)
              break;
            f[v--] = 0, l = 1;
          }
      for (i = f.length; f[--i] === 0; )
        f.pop();
    }
  return ve && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function $n(e, n, r) {
  if (!e.isFinite())
    return Fl(e);
  var a, t = e.e, i = Ye(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Bn(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Bn(-t - 1) + i, r && (a = r - o) > 0 && (i += Bn(a))) : t >= o ? (i += Bn(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Bn(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Bn(a))), i;
}
function gt(e, n) {
  var r = e[0];
  for (n *= ue; r >= 10; r /= 10)
    n++;
  return n;
}
function at(e, n, r) {
  if (n > lv)
    throw ve = !0, r && (e.precision = r), Error(Ml);
  return se(new e(nt), n, 1, !0);
}
function mn(e, n, r) {
  if (n > Zt)
    throw Error(Ml);
  return se(new e(rt), n, r, !0);
}
function Bl(e) {
  var n = e.length - 1, r = n * ue + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Bn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Al(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / ue + 4);
  for (ve = !1; ; ) {
    if (r % 2 && (i = i.times(n), uo(i.d, o) && (t = !0)), r = qe(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), uo(n.d, o);
  }
  return ve = !0, i;
}
function so(e) {
  return e.d[e.d.length - 1] & 1;
}
function zl(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function Jt(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, f = 0, v = e.constructor, c = v.rounding, p = v.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ve = !1, s = p) : s = n, l = new v(0.03125); e.e > -2; )
    e = e.times(l), f += 5;
  for (a = Math.log(ze(2, f)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new v(1), v.precision = s; ; ) {
    if (i = se(i.times(e), s, 1), r = r.times(++d), l = o.plus(ke(i, r, s, 1)), Ye(l.d).slice(0, s) === Ye(o.d).slice(0, s)) {
      for (t = f; t--; )
        o = se(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Ma(o.d, s - a, c, u))
          v.precision = s += 10, r = i = l = new v(1), d = 0, u++;
        else
          return se(o, v.precision = p, c, ve = !0);
      else
        return v.precision = p, o;
    }
    o = l;
  }
}
function Wn(e, n) {
  var r, a, t, i, o, l, s, u, d, f, v, c = 1, p = 10, y = e, b = y.d, T = y.constructor, S = T.rounding, h = T.precision;
  if (y.s < 0 || !b || !b[0] || !y.e && b[0] == 1 && b.length == 1)
    return new T(b && !b[0] ? -1 / 0 : y.s != 1 ? NaN : b ? 0 : y);
  if (n == null ? (ve = !1, d = h) : d = n, T.precision = d += p, r = Ye(b), a = r.charAt(0), Math.abs(i = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = Ye(y.d), a = r.charAt(0), c++;
    i = y.e, a > 1 ? (y = new T("0." + r), i++) : y = new T(a + "." + r.slice(1));
  } else
    return u = at(T, d + 2, h).times(i + ""), y = Wn(new T(a + "." + r.slice(1)), d - p).plus(u), T.precision = h, n == null ? se(y, h, S, ve = !0) : y;
  for (f = y, s = o = y = ke(y.minus(1), y.plus(1), d, 1), v = se(y.times(y), d, 1), t = 3; ; ) {
    if (o = se(o.times(v), d, 1), u = s.plus(ke(o, new T(t), d, 1)), Ye(u.d).slice(0, d) === Ye(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(at(T, d + 2, h).times(i + ""))), s = ke(s, new T(c), d, 1), n == null)
        if (Ma(s.d, d - p, S, l))
          T.precision = d += p, u = o = y = ke(f.minus(1), f.plus(1), d, 1), v = se(y.times(y), d, 1), t = l = 1;
        else
          return se(s, T.precision = h, S, ve = !0);
      else
        return T.precision = h, s;
    s = u, t += 2;
  }
}
function Fl(e) {
  return String(e.s * e.s / 0);
}
function Qt(e, n) {
  var r, a, t;
  for ((r = n.indexOf(".")) > -1 && (n = n.replace(".", "")), (a = n.search(/e/i)) > 0 ? (r < 0 && (r = a), r += +n.slice(a + 1), n = n.substring(0, a)) : r < 0 && (r = n.length), a = 0; n.charCodeAt(a) === 48; a++)
    ;
  for (t = n.length; n.charCodeAt(t - 1) === 48; --t)
    ;
  if (n = n.slice(a, t), n) {
    if (t -= a, e.e = r = r - a - 1, e.d = [], a = (r + 1) % ue, r < 0 && (a += ue), a < t) {
      for (a && e.d.push(+n.slice(0, a)), t -= ue; a < t; )
        e.d.push(+n.slice(a, a += ue));
      n = n.slice(a), a = ue - n.length;
    } else
      a -= t;
    for (; a--; )
      n += "0";
    e.d.push(+n), ve && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else
    e.e = 0, e.d = [0];
  return e;
}
function uv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Dl.test(n))
      return Qt(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (tv.test(n))
    r = 16, n = n.toLowerCase();
  else if (av.test(n))
    r = 2;
  else if (iv.test(n))
    r = 8;
  else
    throw Error(Zn + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Al(a, new a(r), i, i * 2)), u = Xa(n, r, hn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = gt(u, d), e.d = u, ve = !1, o && (e = ke(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : Hn.pow(2, s))), ve = !0, e);
}
function dv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : pa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / yt(5, r)), n = pa(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function pa(e, n, r, a, t) {
  var i, o, l, s, u = e.precision, d = Math.ceil(u / ue);
  for (ve = !1, s = r.times(r), l = new e(a); ; ) {
    if (o = ke(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(o) : a.minus(o), a = ke(o.times(s), new e(n++ * n++), u, 1), o = l.plus(a), o.d[d] !== void 0) {
      for (i = d; o.d[i] === l.d[i] && i--; )
        ;
      if (i == -1)
        break;
    }
    i = l, l = a, a = o, o = i;
  }
  return ve = !0, o.d.length = d + 1, o;
}
function yt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Ll(e, n) {
  var r, a = n.s < 0, t = mn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return On = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    On = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return On = so(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    On = so(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Vi(e, n, r, a) {
  var t, i, o, l, s, u, d, f, v, c = e.constructor, p = r !== void 0;
  if (p ? (rn(r, 1, _n), a === void 0 ? a = c.rounding : rn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Fl(e);
  else {
    for (d = $n(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), v = new c(1), v.e = d.length - o, v.d = Xa($n(v), 10, t), v.e = v.d.length), f = Xa(d, 10, t), i = s = f.length; f[--s] == 0; )
      f.pop();
    if (!f[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = f, e.e = i, e = ke(e, v, r, a, 0, t), f = e.d, i = e.e, u = Vl), o = f[r], l = t / 2, u = u || f[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && f[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), f.length = r, u)
        for (; ++f[--r] > t - 1; )
          f[r] = 0, r || (++i, f.unshift(1));
      for (s = f.length; !f[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += Kt.charAt(f[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (f = Xa(d, t, n), s = f.length; !f[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += Kt.charAt(f[o]);
          } else
            d = d.charAt(0) + "." + d.slice(1);
        d = d + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i; )
          d = "0" + d;
        d = "0." + d;
      } else if (++i > s)
        for (i -= s; i--; )
          d += "0";
      else
        i < s && (d = d.slice(0, i) + "." + d.slice(i));
    }
    d = (n == 16 ? "0x" : n == 2 ? "0b" : n == 8 ? "0o" : "") + d;
  }
  return e.s < 0 ? "-" + d : d;
}
function uo(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function vv(e) {
  return new this(e).abs();
}
function fv(e) {
  return new this(e).acos();
}
function cv(e) {
  return new this(e).acosh();
}
function mv(e, n) {
  return new this(e).plus(n);
}
function pv(e) {
  return new this(e).asin();
}
function hv(e) {
  return new this(e).asinh();
}
function gv(e) {
  return new this(e).atan();
}
function yv(e) {
  return new this(e).atanh();
}
function bv(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = mn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? mn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = mn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(ke(e, n, i, 1)), n = mn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(ke(e, n, i, 1)), r;
}
function wv(e) {
  return new this(e).cbrt();
}
function Sv(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function Cv(e, n, r) {
  return new this(e).clamp(n, r);
}
function kv(e) {
  if (!e || typeof e != "object")
    throw Error(ht + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    _n,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Sr,
    0,
    "toExpPos",
    0,
    Sr,
    "maxE",
    0,
    Sr,
    "minE",
    -Sr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = Xt[r]), (a = e[r]) !== void 0)
      if (qe(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(Zn + r + ": " + a);
  if (r = "crypto", t && (this[r] = Xt[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Il);
      else
        this[r] = !1;
    else
      throw Error(Zn + r + ": " + a);
  return this;
}
function $v(e) {
  return new this(e).cos();
}
function Tv(e) {
  return new this(e).cosh();
}
function Rl(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, vo(i)) {
      u.s = i.s, ve ? !i.d || i.e > t.maxE ? (u.e = NaN, u.d = null) : i.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i.e, u.d = i.d.slice()) : (u.e = i.e, u.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (s = typeof i, s === "number") {
      if (i === 0) {
        u.s = 1 / i < 0 ? -1 : 1, u.e = 0, u.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, u.s = -1) : u.s = 1, i === ~~i && i < 1e7) {
        for (o = 0, l = i; l >= 10; l /= 10)
          o++;
        ve ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [i]) : (u.e = o, u.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return Qt(u, i.toString());
    } else if (s !== "string")
      throw Error(Zn + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Dl.test(i) ? Qt(u, i) : uv(u, i);
  }
  if (t.prototype = G, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = kv, t.clone = Rl, t.isDecimal = vo, t.abs = vv, t.acos = fv, t.acosh = cv, t.add = mv, t.asin = pv, t.asinh = hv, t.atan = gv, t.atanh = yv, t.atan2 = bv, t.cbrt = wv, t.ceil = Sv, t.clamp = Cv, t.cos = $v, t.cosh = Tv, t.div = Ov, t.exp = Pv, t.floor = Ev, t.hypot = Vv, t.ln = Mv, t.log = Iv, t.log10 = Dv, t.log2 = Nv, t.max = Bv, t.min = Av, t.mod = zv, t.mul = Fv, t.pow = Lv, t.random = Rv, t.round = Uv, t.sign = Yv, t.sin = Wv, t.sinh = Hv, t.sqrt = jv, t.sub = Gv, t.sum = qv, t.tan = Kv, t.tanh = Xv, t.trunc = Zv, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Ov(e, n) {
  return new this(e).div(n);
}
function Pv(e) {
  return new this(e).exp();
}
function Ev(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function Vv() {
  var e, n, r = new this(0);
  for (ve = !1, e = 0; e < arguments.length; )
    if (n = new this(arguments[e++]), n.d)
      r.d && (r = r.plus(n.times(n)));
    else {
      if (n.s)
        return ve = !0, new this(1 / 0);
      r = n;
    }
  return ve = !0, r.sqrt();
}
function vo(e) {
  return e instanceof Hn || e && e.toStringTag === Nl || !1;
}
function Mv(e) {
  return new this(e).ln();
}
function Iv(e, n) {
  return new this(e).log(n);
}
function Nv(e) {
  return new this(e).log(2);
}
function Dv(e) {
  return new this(e).log(10);
}
function Bv() {
  return zl(this, arguments, "lt");
}
function Av() {
  return zl(this, arguments, "gt");
}
function zv(e, n) {
  return new this(e).mod(n);
}
function Fv(e, n) {
  return new this(e).mul(n);
}
function Lv(e, n) {
  return new this(e).pow(n);
}
function Rv(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : rn(e, 1, _n), a = Math.ceil(e / ue), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(Il);
  else
    for (; i < a; )
      l[i++] = Math.random() * 1e7 | 0;
  for (a = l[--i], e %= ue, a && e && (t = ze(10, ue - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
    l.pop();
  if (i < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= ue)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < ue && (r -= ue - a);
  }
  return o.e = r, o.d = l, o;
}
function Uv(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function Yv(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Wv(e) {
  return new this(e).sin();
}
function Hv(e) {
  return new this(e).sinh();
}
function jv(e) {
  return new this(e).sqrt();
}
function Gv(e, n) {
  return new this(e).sub(n);
}
function qv() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ve = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ve = !0, se(r, this.precision, this.rounding);
}
function Kv(e) {
  return new this(e).tan();
}
function Xv(e) {
  return new this(e).tanh();
}
function Zv(e) {
  return se(e = new this(e), e.e + 1, 1);
}
G[Symbol.for("nodejs.util.inspect.custom")] = G.toString;
G[Symbol.toStringTag] = "Decimal";
var Hn = G.constructor = Rl(Xt);
nt = new Hn(nt);
rt = new Hn(rt);
var Jv = {
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
  onBeforeChange: {
    type: Function
  },
  onChange: {
    type: Function
  },
  onIncrement: {
    type: Function
  },
  onDecrement: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Qv,
  classes: xv
} = ee("counter"), fo = 100, co = 600, _v = ["inputmode", "readonly", "disabled"];
function ef(e, n) {
  var r = ae("var-icon"), a = ae("var-form-details"), t = Ge("ripple");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [z(
      "div",
      Me({
        class: e.classes(e.n("controller"), "var-elevation--2", [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [Ce(ne(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")])),
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
        disabled: !e.ripple || e.disabled || e.readonly || e.disableDecrement || !e.decrementButton || e.isMin
      }]]), Ce(z(
        "input",
        {
          class: m(e.n("input")),
          style: K({
            width: e.toSizeUnit(e.inputWidth),
            fontSize: e.toSizeUnit(e.inputTextSize)
          }),
          inputmode: e.toNumber(e.decimalLength) === 0 ? "numeric" : "decimal",
          readonly: e.readonly || e.formReadonly,
          disabled: e.disabled || e.formDisabled || e.disableInput,
          "onUpdate:modelValue": n[0] || (n[0] = (i) => e.inputValue = i),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        _v
      ), [[Bs, e.inputValue]]), Ce(ne(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")])),
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
        disabled: !e.ripple || e.disabled || e.readonly || e.disableIncrement || !e.incrementButton || e.isMax
      }]])],
      16
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Fr = te({
  render: ef,
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Re
  },
  inheritAttrs: !1,
  props: Jv,
  setup(e) {
    var n = E(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = Sn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: f
    } = wn(), {
      readonly: v,
      disabled: c
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), y = (F) => {
      Oe(() => {
        var {
          validateTrigger: Z,
          rules: H,
          modelValue: X
        } = e;
        u(Z, F, H, X);
      });
    }, b = () => {
      var {
        min: F
      } = e;
      N(e["onUpdate:modelValue"], F != null ? A(F) : 0), f();
    }, T = {
      reset: b,
      validate: p,
      resetValidation: f
    }, S = W(() => {
      var {
        max: F,
        modelValue: Z
      } = e;
      return F != null && A(Z) >= A(F);
    }), h = W(() => {
      var {
        min: F,
        modelValue: Z
      } = e;
      return F != null && A(Z) <= A(F);
    }), g = (F) => {
      var {
        decimalLength: Z,
        max: H,
        min: X
      } = e, I = A(F);
      return H != null && I > A(H) && (I = A(H)), X != null && I < A(X) && (I = A(X)), F = String(I), Z != null && (F = I.toFixed(A(Z))), F;
    }, V = (F) => {
      var {
        lazyChange: Z,
        onBeforeChange: H
      } = e, {
        value: X
      } = F.target, I = g(X);
      Z ? N(H, A(I), j) : Y(I), y("onInputChange");
    }, w = () => {
      var {
        disabled: F,
        readonly: Z,
        disableDecrement: H,
        decrementButton: X,
        lazyChange: I,
        step: L,
        modelValue: U,
        onDecrement: J,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || v != null && v.value || F || Z || H || !X) && !h.value) {
        var le = new Hn(A(U)).minus(new Hn(A(L))).toString(), de = g(le), be = A(de);
        N(J, be), I ? N(ie, be, j) : (Y(de), y("onDecrement"));
      }
    }, B = () => {
      var {
        disabled: F,
        readonly: Z,
        disableIncrement: H,
        incrementButton: X,
        lazyChange: I,
        step: L,
        modelValue: U,
        onIncrement: J,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || v != null && v.value || F || Z || H || !X) && !S.value) {
        var le = new Hn(A(U)).plus(new Hn(A(L))).toString(), de = g(le), be = A(de);
        N(J, be), I ? N(ie, be, j) : (Y(de), y("onIncrement"));
      }
    }, k = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (i = window.setTimeout(() => {
        R();
      }, co));
    }, D = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (t = window.setTimeout(() => {
        O();
      }, co));
    }, P = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, $ = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, O = () => {
      r = window.setTimeout(() => {
        B(), O();
      }, fo);
    }, R = () => {
      a = window.setTimeout(() => {
        w(), R();
      }, fo);
    }, Y = (F) => {
      n.value = F;
      var Z = A(F);
      N(e["onUpdate:modelValue"], Z);
    }, j = (F) => {
      Y(g(String(F))), y("onLazyChange");
    };
    return N(o, T), re(() => e.modelValue, (F) => {
      Y(g(String(F))), N(e.onChange, A(F));
    }), Y(g(String(e.modelValue))), {
      n: Qv,
      classes: xv,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: v,
      isMax: S,
      isMin: h,
      validate: p,
      reset: b,
      resetValidation: f,
      handleChange: V,
      decrement: w,
      increment: B,
      pressDecrement: k,
      pressIncrement: D,
      releaseDecrement: P,
      releaseIncrement: $,
      toSizeUnit: Ve,
      toNumber: A
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Ul = 60, Yl = Ul * 60, Wl = Yl * 24, nf = Wl * 7, ha = 1e3, Mt = Ul * ha, mo = Yl * ha, rf = Wl * ha, af = nf * ha, Mi = "millisecond", Cr = "second", kr = "minute", $r = "hour", An = "day", Za = "week", cn = "month", Hl = "quarter", zn = "year", Tr = "date", tf = "YYYY-MM-DDTHH:mm:ssZ", po = "Invalid Date", of = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, lf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const sf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var xt = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, uf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + xt(t, 2, "0") + ":" + xt(i, 2, "0");
}, df = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, cn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), cn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, vf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, ff = function(n) {
  var r = {
    M: cn,
    y: zn,
    w: Za,
    d: An,
    D: Tr,
    h: $r,
    m: kr,
    s: Cr,
    ms: Mi,
    Q: Hl
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, cf = function(n) {
  return n === void 0;
};
const mf = {
  s: xt,
  z: uf,
  m: df,
  a: vf,
  p: ff,
  u: cf
};
var Pa = "en", lr = {};
lr[Pa] = sf;
var Ii = function(n) {
  return n instanceof bt;
}, tt = function e(n, r, a) {
  var t;
  if (!n)
    return Pa;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    lr[i] && (t = i), r && (lr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    lr[l] = n, t = l;
  }
  return !a && t && (Pa = t), t || !a && Pa;
}, _ = function(n, r) {
  if (Ii(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new bt(a);
}, pf = function(n, r) {
  return _(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, we = mf;
we.l = tt;
we.i = Ii;
we.w = pf;
var hf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (we.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(of);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, bt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = tt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = hf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return we;
  }, n.isValid = function() {
    return this.$d.toString() !== po;
  }, n.isSame = function(a, t) {
    var i = _(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return _(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < _(a);
  }, n.$g = function(a, t, i) {
    return we.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = we.u(t) ? !0 : t, l = we.p(a), s = function(T, S) {
      var h = we.w(i.$u ? Date.UTC(i.$y, S, T) : new Date(i.$y, S, T), i);
      return o ? h : h.endOf(An);
    }, u = function(T, S) {
      var h = [0, 0, 0, 0], g = [23, 59, 59, 999];
      return we.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? h : g).slice(S)
      ), i);
    }, d = this.$W, f = this.$M, v = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case zn:
        return o ? s(1, 0) : s(31, 11);
      case cn:
        return o ? s(1, f) : s(0, f + 1);
      case Za: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(o ? v - y : v + (6 - y), f);
      }
      case An:
      case Tr:
        return u(c + "Hours", 0);
      case $r:
        return u(c + "Minutes", 1);
      case kr:
        return u(c + "Seconds", 2);
      case Cr:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = we.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[An] = l + "Date", i[Tr] = l + "Date", i[cn] = l + "Month", i[zn] = l + "FullYear", i[$r] = l + "Hours", i[kr] = l + "Minutes", i[Cr] = l + "Seconds", i[Mi] = l + "Milliseconds", i)[o], u = o === An ? this.$D + (t - this.$W) : t;
    if (o === cn || o === zn) {
      var d = this.clone().set(Tr, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Tr, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[we.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = we.p(t), s = function(v) {
      var c = _(i);
      return we.w(c.date(c.date() + Math.round(v * a)), i);
    };
    if (l === cn)
      return this.set(cn, this.$M + a);
    if (l === zn)
      return this.set(zn, this.$y + a);
    if (l === An)
      return s(1);
    if (l === Za)
      return s(7);
    var u = (o = {}, o[kr] = Mt, o[$r] = mo, o[Cr] = ha, o)[l] || 1, d = this.$d.getTime() + a * u;
    return we.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || po;
    var o = a || tf, l = we.z(this), s = this.$H, u = this.$m, d = this.$M, f = i.weekdays, v = i.months, c = i.meridiem, p = function(h, g, V, w) {
      return h && (h[g] || h(t, o)) || V[g].slice(0, w);
    }, y = function(h) {
      return we.s(s % 12 || 12, h, "0");
    }, b = c || function(S, h, g) {
      var V = S < 12 ? "AM" : "PM";
      return g ? V.toLowerCase() : V;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: we.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, v, 3),
      MMMM: p(v, d),
      D: this.$D,
      DD: we.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, f, 2),
      ddd: p(i.weekdaysShort, this.$W, f, 3),
      dddd: f[this.$W],
      H: String(s),
      HH: we.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: we.s(u, 2, "0"),
      s: String(this.$s),
      ss: we.s(this.$s, 2, "0"),
      SSS: we.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(lf, function(S, h) {
      return h || T[S] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = we.p(t), s = _(a), u = (s.utcOffset() - this.utcOffset()) * Mt, d = this - s, f = we.m(this, s);
    return f = (o = {}, o[zn] = f / 12, o[cn] = f, o[Hl] = f / 3, o[Za] = (d - u) / af, o[An] = (d - u) / rf, o[$r] = d / mo, o[kr] = d / Mt, o[Cr] = d / ha, o)[l] || d, i ? f : we.a(f);
  }, n.daysInMonth = function() {
    return this.endOf(cn).$D;
  }, n.$locale = function() {
    return lr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = tt(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return we.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), jl = bt.prototype;
_.prototype = jl;
[["$ms", Mi], ["$s", Cr], ["$m", kr], ["$H", $r], ["$W", An], ["$M", cn], ["$y", zn], ["$D", Tr]].forEach(function(e) {
  jl[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
_.extend = function(e, n) {
  return e.$i || (e(n, bt, _), e.$i = !0), _;
};
_.locale = tt;
_.isDayjs = Ii;
_.unix = function(e) {
  return _(e * 1e3);
};
_.en = lr[Pa];
_.Ls = lr;
_.p = {};
const Gl = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, ql = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function gf(e) {
  return ["date", "month"].includes(e);
}
var Ja = [{
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
}], Oa = [{
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
}], yf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: gf
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
  onPreview: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: bf
} = ee("picker-header");
function wf(e, n) {
  var r = ae("var-icon"), a = ae("var-button");
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [ne(
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
        default: ce(() => [ne(r, {
          name: "chevron-left"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    ), z(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ne(
        je,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(C(), M(
            "div",
            {
              key: e.showDate
            },
            x(e.showDate),
            1
          ))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    ), ne(
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
        default: ce(() => [ne(r, {
          name: "chevron-right"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    )],
    2
  );
}
const Kl = te({
  render: wf,
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
    } = n, a = E(!1), t = E(0), i = W(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: f
      } = s;
      if (u === "month")
        return A(f) + t.value;
      var v = (l = Ue.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Ue.value.lang === "zh-CN" ? f + " " + v : v + " " + f;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return re(() => e.date, () => {
      t.value = 0;
    }), {
      n: bf,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
function _t() {
  return _t = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, _t.apply(this, arguments);
}
_.extend(Gl);
_.extend(ql);
var {
  n: ja,
  classes: Sf
} = ee("month-picker"), {
  n: Ga
} = ee("date-picker");
function Cf(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [z(
      "div",
      {
        class: m(e.n("content"))
      },
      [ne(
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
      ), ne(
        je,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(C(), M("ul", {
            key: e.panelKey
          }, [(C(!0), M(
            Te,
            null,
            Ne(e.MONTH_LIST, (t) => (C(), M("li", {
              key: t.index
            }, [ne(
              a,
              Me({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, _t({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: ce(() => [he(
                  x(e.getMonthAbbr(t.index)),
                  1
                )]),
                _: 2
              },
              1040,
              ["onClick"]
            )]))),
            128
          ))]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const kf = te({
  render: Cf,
  name: "MonthPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: Kl
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
    } = n, [a, t] = e.current.split("-"), i = E(!1), o = E(0), l = E(null), s = De({
      left: !1,
      right: !1
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), f = (S) => {
      var h, g;
      return (h = (g = Ue.value.datePickerMonthDict) == null ? void 0 : g[S].abbr) != null ? h : "";
    }, v = (S) => {
      var {
        preview: {
          previewYear: h
        },
        componentProps: {
          min: g,
          max: V
        }
      } = e, w = !0, B = !0, k = h + "-" + S;
      return V && (w = _(k).isSameOrBefore(_(V), "month")), g && (B = _(k).isSameOrAfter(_(g), "month")), w && B;
    }, c = (S) => {
      var {
        choose: {
          chooseMonths: h,
          chooseDays: g,
          chooseRangeMonth: V
        },
        componentProps: {
          type: w,
          range: B
        }
      } = e;
      if (B) {
        if (!V.length)
          return !1;
        var k = _(S).isSameOrBefore(_(V[1]), "month"), D = _(S).isSameOrAfter(_(V[0]), "month");
        return k && D;
      }
      return w === "month" ? h.includes(S) : g.some((P) => P.includes(S));
    }, p = (S) => {
      var {
        choose: {
          chooseMonth: h
        },
        preview: {
          previewYear: g
        },
        componentProps: {
          allowedDates: V,
          color: w,
          multiple: B,
          range: k
        }
      } = e, D = g + "-" + S, P = () => k || B ? c(D) : (h == null ? void 0 : h.index) === S && u.value, $ = () => v(S) ? V ? !V(D) : !1 : !0, O = $(), R = () => O ? !0 : k || B ? !c(D) : !u.value || (h == null ? void 0 : h.index) !== S, Y = () => d.value && t === S && e.componentProps.showCurrent ? (k || B || u.value) && O ? !0 : k || B ? !c(D) : u.value ? (h == null ? void 0 : h.index) !== t : !0 : !1, j = () => O ? "" : Y() ? w != null ? w : "" : P() ? "" : Ga() + "-color-cover", F = j().startsWith(Ga());
      return {
        outline: Y(),
        text: R(),
        color: R() ? "" : w,
        textColor: F ? "" : j(),
        [Ga() + "-color-cover"]: F,
        class: Sf(ja("button"), [O, ja("button--disabled")])
      };
    }, y = (S, h) => {
      var g = h.currentTarget;
      g.classList.contains(ja("button--disabled")) || r("choose-month", S);
    }, b = (S) => {
      i.value = S === "prev", o.value += S === "prev" ? -1 : 1, r("check-preview", "year", S);
    }, T = (S) => {
      l.value.checkDate(S);
    };
    return re(() => e.preview.previewYear, (S) => {
      var {
        componentProps: {
          min: h,
          max: g
        }
      } = e;
      g && (s.right = !_("" + (A(S) + 1)).isSameOrBefore(_(g), "year")), h && (s.left = !_("" + (A(S) - 1)).isSameOrAfter(_(h), "year"));
    }, {
      immediate: !0
    }), {
      n: ja,
      nDate: Ga,
      pack: Ue,
      MONTH_LIST: Ja,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: p,
      getMonthAbbr: f,
      chooseMonth: y,
      checkDate: b
    };
  }
});
var {
  n: ho,
  classes: $f
} = ee("year-picker"), Tf = ["onClick"];
function Of(e, n) {
  return C(), M(
    "ul",
    {
      class: m(e.n())
    },
    [(C(!0), M(
      Te,
      null,
      Ne(e.yearList, (r) => (C(), M(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: K({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        x(r),
        15,
        Tf
      ))),
      128
    ))],
    2
  );
}
const Pf = te({
  render: Of,
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
    } = n, a = W(() => {
      var i = [], {
        preview: o,
        componentProps: {
          max: l,
          min: s
        }
      } = e;
      if (!o)
        return i;
      var u = [A(o) + 100, A(o) - 100];
      if (l) {
        var d = _(l).format("YYYY-MM-D"), f = A(d.split("-")[0]);
        if (f < u[0] && f > u[1] && (u = [f, u[1]]), f <= u[1])
          return [f];
      }
      if (s) {
        var v = _(s).format("YYYY-MM-D"), c = A(v.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var p = u[0]; p >= u[1]; p--)
        i.push(p);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Fe(() => {
      var i = document.querySelector("." + ho("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: ho,
      classes: $f,
      yearList: a,
      chooseYear: t,
      toNumber: A
    };
  }
});
function ei() {
  return ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ei.apply(this, arguments);
}
_.extend(Gl);
_.extend(ql);
var {
  n: wr,
  classes: Ef
} = ee("day-picker"), {
  n: qa
} = ee("date-picker");
function Vf(e, n) {
  var r = ae("panel-header"), a = ae("var-button");
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [z(
      "div",
      {
        class: m(e.n("content"))
      },
      [ne(
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
      ), ne(
        je,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(C(), M("div", {
            key: e.panelKey
          }, [z(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(C(!0), M(
              Te,
              null,
              Ne(e.sortWeekList, (t) => (C(), M(
                "li",
                {
                  key: t.index
                },
                x(e.getDayAbbr(t.index)),
                1
              ))),
              128
            ))],
            2
          ), z(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(C(!0), M(
              Te,
              null,
              Ne(e.days, (t, i) => (C(), M("li", {
                key: i
              }, [ne(
                a,
                Me({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, ei({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: ce(() => [he(
                    x(e.filterDay(t)),
                    1
                  )]),
                  _: 2
                },
                1040,
                ["onClick"]
              )]))),
              128
            ))],
            2
          )]))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    )],
    2
  );
}
const Mf = te({
  render: Vf,
  name: "DayPickerPanel",
  components: {
    VarButton: en,
    PanelHeader: Kl
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
    } = n, [a, t, i] = e.current.split("-"), o = E([]), l = E(!1), s = E(0), u = E(null), d = De({
      left: !1,
      right: !1
    }), f = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), v = W(() => {
      var k;
      return e.choose.chooseYear === e.preview.previewYear && ((k = e.choose.chooseMonth) == null ? void 0 : k.index) === e.preview.previewMonth.index;
    }), c = W(() => {
      var k = Oa.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return k === -1 || k === 0 ? Oa : Oa.slice(k).concat(Oa.slice(0, k));
    }), p = (k) => {
      var D, P;
      return (D = (P = Ue.value.datePickerWeekDict) == null ? void 0 : P[k].abbr) != null ? D : "";
    }, y = (k) => k > 0 ? k : "", b = () => {
      var {
        preview: {
          previewMonth: k,
          previewYear: D
        }
      } = e, P = _(D + "-" + k.index).daysInMonth(), $ = _(D + "-" + k.index + "-01").day(), O = c.value.findIndex((R) => R.index === "" + $);
      o.value = [...Array(O).fill(-1), ...Array.from(Array(P + 1).keys())].filter((R) => R);
    }, T = () => {
      var {
        preview: {
          previewYear: k,
          previewMonth: D
        },
        componentProps: {
          max: P,
          min: $
        }
      } = e;
      if (P) {
        var O = k + "-" + (A(D.index) + 1);
        d.right = !_(O).isSameOrBefore(_(P), "month");
      }
      if ($) {
        var R = k + "-" + (A(D.index) - 1);
        d.left = !_(R).isSameOrAfter(_($), "month");
      }
    }, S = (k) => {
      var {
        preview: {
          previewYear: D,
          previewMonth: P
        },
        componentProps: {
          min: $,
          max: O
        }
      } = e, R = !0, Y = !0, j = D + "-" + P.index + "-" + k;
      return O && (R = _(j).isSameOrBefore(_(O), "day")), $ && (Y = _(j).isSameOrAfter(_($), "day")), R && Y;
    }, h = (k) => {
      var {
        choose: {
          chooseDays: D,
          chooseRangeDay: P
        },
        componentProps: {
          range: $
        }
      } = e;
      if ($) {
        if (!P.length)
          return !1;
        var O = _(k).isSameOrBefore(_(P[1]), "day"), R = _(k).isSameOrAfter(_(P[0]), "day");
        return O && R;
      }
      return D.includes(k);
    }, g = (k) => {
      if (k < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: wr("button")
        };
      var {
        choose: {
          chooseDay: D
        },
        preview: {
          previewYear: P,
          previewMonth: $
        },
        componentProps: {
          allowedDates: O,
          color: R,
          multiple: Y,
          range: j
        }
      } = e, F = P + "-" + $.index + "-" + k, Z = () => j || Y ? h(F) : A(D) === k && v.value, H = () => S(k) ? O ? !O(F) : !1 : !0, X = H(), I = () => X ? !0 : j || Y ? !h(F) : !v.value || A(D) !== k, L = () => f.value && A(i) === k && e.componentProps.showCurrent ? (j || Y || v.value) && X ? !0 : j || Y ? !h(F) : v.value ? D !== i : !0 : !1, U = () => X ? "" : L() ? R != null ? R : "" : Z() ? "" : qa() + "-color-cover", J = U().startsWith(qa());
      return {
        text: I(),
        outline: L(),
        textColor: J ? "" : U(),
        [qa() + "-color-cover"]: J,
        class: Ef(wr("button"), wr("button--usable"), [X, wr("button--disabled")])
      };
    }, V = (k) => {
      l.value = k === "prev", s.value += k === "prev" ? -1 : 1, r("check-preview", "month", k);
    }, w = (k, D) => {
      var P = D.currentTarget;
      P.classList.contains(wr("button--disabled")) || r("choose-day", k);
    }, B = (k) => {
      u.value.checkDate(k);
    };
    return Fe(() => {
      b(), T();
    }), re(() => e.preview, () => {
      b(), T();
    }), {
      n: wr,
      nDate: qa,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: B,
      filterDay: y,
      getDayAbbr: p,
      checkDate: V,
      chooseDay: w,
      buttonProps: g
    };
  }
});
var {
  n: If,
  classes: Nf
} = ee("date-picker");
function Df(e, n) {
  var r = ae("year-picker-panel"), a = ae("month-picker-panel"), t = ae("day-picker-panel");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--2"]))
    },
    [z(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [q(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
          x(e.chooseYear),
          1
        )])],
        2
      ), z(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [ne(
          je,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ce(() => {
              var i, o, l;
              return [e.type === "month" ? (C(), M("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                x(e.getMonthTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                x(e.getMonthTitle),
                1
              )]) : q(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [he(
                x(e.getMonthTitle),
                1
              )])])) : (C(), M("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                x(e.getDateTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                x(e.getDateTitle),
                1
              )]) : q(e.$slots, "date", nl(Me({
                key: 2
              }, e.slotProps)), () => [he(
                x(e.getDateTitle),
                1
              )])]))];
            }),
            _: 3
          },
          8,
          ["name"]
        )],
        2
      )],
      6
    ), z(
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
      [ne(
        je,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ce(() => [e.getPanelType === "year" ? (C(), me(
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
          )) : e.getPanelType === "month" ? (C(), me(
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
          )) : e.getPanelType === "date" ? (C(), me(
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
          )) : Q("v-if", !0)]),
          _: 1
        },
        8,
        ["name"]
      )],
      34
    )],
    2
  );
}
const Lr = te({
  render: Df,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: kf,
    YearPickerPanel: Pf,
    DayPickerPanel: Mf
  },
  props: yf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = _().format("YYYY-MM-D"), [o, l] = i.split("-"), s = Ja.find((oe) => oe.index === l), u = E(!1), d = E(!1), f = E(!0), v = E(), c = E(), p = E(), y = E(s), b = E(o), T = E(!1), S = E([]), h = E([]), g = E([]), V = E([]), w = E(null), B = E(null), k = De({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), D = W(() => ({
      chooseMonth: v.value,
      chooseYear: c.value,
      chooseDay: p.value,
      chooseMonths: S.value,
      chooseDays: h.value,
      chooseRangeMonth: g.value,
      chooseRangeDay: V.value
    })), P = W(() => ({
      previewMonth: y.value,
      previewYear: b.value
    })), $ = W(() => {
      var {
        multiple: oe,
        range: pe
      } = e;
      if (pe)
        return g.value.length ? g.value[0] + " ~ " + g.value[1] : "";
      var fe = "";
      if (v.value) {
        var ge, ye;
        fe = (ge = (ye = Ue.value.datePickerMonthDict) == null ? void 0 : ye[v.value.index].name) != null ? ge : "";
      }
      return oe ? "" + S.value.length + Ue.value.datePickerSelected : fe;
    }), O = W(() => {
      var oe, pe, fe, ge, {
        multiple: ye,
        range: Be
      } = e;
      if (Be) {
        var Ke = V.value.map((Pt) => _(Pt).format("YYYY-MM-DD"));
        return Ke.length ? Ke[0] + " ~ " + Ke[1] : "";
      }
      if (ye)
        return "" + h.value.length + Ue.value.datePickerSelected;
      if (!c.value || !v.value || !p.value)
        return "";
      var tn = _(c.value + "-" + v.value.index + "-" + p.value).day(), yr = Oa.find((Pt) => Pt.index === "" + tn), Hi = (oe = (pe = Ue.value.datePickerWeekDict) == null ? void 0 : pe[yr.index].name) != null ? oe : "", Vs = (fe = (ge = Ue.value.datePickerMonthDict) == null ? void 0 : ge[v.value.index].name) != null ? fe : "", Ms = fr(p.value, 2, "0");
      return Ue.value.lang === "zh-CN" ? v.value.index + "-" + Ms + " " + Hi.slice(0, 3) : Hi.slice(0, 3) + ", " + Vs.slice(0, 3) + " " + p.value;
    }), R = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(R.value)), j = W(() => {
      var oe, pe, fe, ge, ye = _(c.value + "-" + ((oe = v.value) == null ? void 0 : oe.index) + "-" + p.value).day(), Be = p.value ? fr(p.value, 2, "0") : "";
      return {
        week: "" + ye,
        year: (pe = c.value) != null ? pe : "",
        month: (fe = (ge = v.value) == null ? void 0 : ge.index) != null ? fe : "",
        date: Be
      };
    }), F = W(() => D.value.chooseRangeDay.map((oe) => _(oe).format("YYYY-MM-DD"))), Z = W(() => c.value === b.value), H = W(() => {
      var oe;
      return ((oe = v.value) == null ? void 0 : oe.index) === y.value.index;
    }), X = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, I = (oe) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: fe
        } = oe.touches[0];
        n = pe, r = fe;
      }
    }, L = (oe, pe) => oe >= pe && oe > 20 ? "x" : "y", U = (oe) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: fe
        } = oe.touches[0], ge = pe - n, ye = fe - r;
        t = L(Math.abs(ge), Math.abs(ye)), a = ge > 0 ? "prev" : "next";
      }
    }, J = () => {
      if (!(Y.value || t !== "x")) {
        var oe = R.value === "month" ? w : B;
        ct(() => {
          oe.value.forwardRef(a), Wi();
        });
      }
    }, ie = (oe, pe) => {
      var fe = pe === "month" ? g : V;
      if (fe.value = f.value ? [oe, oe] : [fe.value[0], oe], f.value = !f.value, f.value) {
        var ge = _(fe.value[0]).isAfter(fe.value[1]), ye = ge ? [fe.value[1], fe.value[0]] : [...fe.value];
        N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
      }
    }, le = (oe, pe) => {
      var fe = pe === "month" ? S : h, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", ye = fe.value.map((Ke) => _(Ke).format(ge)), Be = ye.findIndex((Ke) => Ke === oe);
      Be === -1 ? ye.push(oe) : ye.splice(Be, 1), N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
    }, de = (oe, pe) => !c.value || !v.value ? !1 : Z.value ? oe === "month" ? pe.index < v.value.index : H.value ? pe < A(p.value) : v.value.index > y.value.index : c.value > b.value, be = (oe) => {
      var {
        readonly: pe,
        range: fe,
        multiple: ge,
        onChange: ye,
        "onUpdate:modelValue": Be
      } = e;
      if (!(oe < 0 || pe)) {
        T.value = de("day", oe);
        var Ke = b.value + "-" + y.value.index + "-" + oe, tn = _(Ke).format("YYYY-MM-DD");
        fe ? ie(tn, "day") : ge ? le(tn, "day") : (N(Be, tn), N(ye, tn));
      }
    }, Le = (oe) => {
      var {
        type: pe,
        readonly: fe,
        range: ge,
        multiple: ye,
        onChange: Be,
        onPreview: Ke,
        "onUpdate:modelValue": tn
      } = e;
      if (T.value = de("month", oe), pe === "month" && !fe) {
        var yr = b.value + "-" + oe.index;
        ge ? ie(yr, "month") : ye ? le(yr, "month") : (N(tn, yr), N(Be, yr));
      } else
        y.value = oe, N(Ke, A(b.value), A(y.value.index));
      d.value = !1;
    }, Je = (oe) => {
      b.value = "" + oe, u.value = !1, d.value = !0, N(e.onPreview, A(b.value), A(y.value.index));
    }, Pe = (oe, pe) => {
      var fe = pe === "prev" ? -1 : 1;
      if (oe === "year")
        b.value = "" + (A(b.value) + fe);
      else {
        var ge = A(y.value.index) + fe;
        ge < 1 && (b.value = "" + (A(b.value) - 1), ge = 12), ge > 12 && (b.value = "" + (A(b.value) + 1), ge = 1), y.value = Ja.find((ye) => A(ye.index) === ge);
      }
      N(e.onPreview, A(b.value), A(y.value.index));
    }, an = () => (e.multiple || e.range) && !Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Se(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ot = (oe) => Se(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Os = (oe, pe) => {
      var fe = pe === "month" ? g : V, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = oe.map((tn) => _(tn).format(ge)).slice(0, 2), Be = fe.value.some((tn) => Ot(tn));
      if (!Be) {
        fe.value = ye;
        var Ke = _(fe.value[0]).isAfter(fe.value[1]);
        fe.value.length === 2 && Ke && (fe.value = [fe.value[1], fe.value[0]]);
      }
    }, Ps = (oe, pe) => {
      var fe = pe === "month" ? S : h, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = Array.from(new Set(oe.map((Be) => _(Be).format(ge))));
      fe.value = ye.filter((Be) => Be !== "Invalid Date");
    }, Es = (oe) => {
      var pe = _(oe).format("YYYY-MM-D");
      if (!Ot(pe)) {
        var [fe, ge, ye] = pe.split("-"), Be = Ja.find((Ke) => Ke.index === ge);
        v.value = Be, c.value = fe, p.value = ye, y.value = Be, b.value = fe;
      }
    }, Wi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return re(() => e.modelValue, (oe) => {
      if (!(!an() || Ot(oe) || !oe))
        if (e.range) {
          if (!Se(oe))
            return;
          f.value = oe.length !== 1, Os(oe, e.type);
        } else if (e.multiple) {
          if (!Se(oe))
            return;
          Ps(oe, e.type);
        } else
          Es(oe);
    }, {
      immediate: !0
    }), re(R, Wi), {
      n: If,
      classes: Nf,
      monthPanelEl: w,
      dayPanelEl: B,
      reverse: T,
      currentDate: i,
      chooseMonth: v,
      chooseYear: c,
      chooseDay: p,
      previewYear: b,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: $,
      getDateTitle: O,
      getPanelType: R,
      getChoose: D,
      getPreview: P,
      componentProps: k,
      slotProps: j,
      formatRange: F,
      clickEl: X,
      handleTouchstart: I,
      handleTouchmove: U,
      handleTouchend: J,
      getChooseDay: be,
      getChooseMonth: Le,
      getChooseYear: Je,
      checkPreview: Pe
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
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
function Bf(e) {
  return ["left", "center", "right"].includes(e);
}
var Af = ni({
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
    validator: Bf
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
  onBeforeClose: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  },
  dialogClass: {
    type: String
  },
  dialogStyle: {
    type: Object
  }
}, xe(La, [
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
  "onRouteChange"
]));
function ri() {
  return ri = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ri.apply(this, arguments);
}
var {
  n: zf,
  classes: Ff
} = ee("dialog");
function Lf(e, n) {
  var r = ae("var-button"), a = ae("var-popup");
  return C(), me(
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
      default: ce(() => [z(
        "div",
        Me({
          class: e.classes("var--box", e.n(), e.dialogClass),
          style: ri({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [z(
          "div",
          {
            class: m(e.n("title"))
          },
          [q(e.$slots, "title", {}, () => [he(
            x(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), z(
          "div",
          {
            class: m(e.n("message")),
            style: K({
              textAlign: e.messageAlign
            })
          },
          [q(e.$slots, "default", {}, () => [he(
            x(e.message),
            1
          )])],
          6
        ), z(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (C(), me(
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
              default: ce(() => [he(
                x(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0), e.confirmButton ? (C(), me(
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
              default: ce(() => [he(
                x(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0)],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["class", "show", "overlay", "overlay-class", "overlay-style", "lock-scroll", "close-on-click-overlay", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange", "onClickOverlay"]
  );
}
const sr = te({
  render: Lf,
  name: "VarDialog",
  components: {
    VarPopup: pn,
    VarButton: en
  },
  inheritAttrs: !1,
  props: Af,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => N(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (N(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        N(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (N(s), l != null) {
        l("confirm", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (N(s), l != null) {
        l("cancel", a);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return re(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), re(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: zf,
      classes: Ff,
      pack: Ue,
      dt: vt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: Ve
    };
  }
});
var Ln;
function mr(e) {
  return Oi() ? new Promise((n) => {
    mr.close();
    var r = nn(e) || He(e) ? {
      message: String(e)
    } : e, a = De(r);
    a.teleport = "body", Ln = a;
    var {
      unmountInstance: t
    } = Fa(sr, a, {
      onConfirm: () => {
        a.onConfirm == null || a.onConfirm(), n("confirm");
      },
      onCancel: () => {
        a.onCancel == null || a.onCancel(), n("cancel");
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n("close");
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), Ln === a && (Ln = null);
      },
      onRouteChange: () => {
        t(), Ln === a && (Ln = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
sr.install = function(e) {
  e.component(sr.name, sr);
};
mr.install = function(e) {
  e.component(sr.name, sr);
};
mr.close = () => {
  if (Ln != null) {
    var e = Ln;
    Ln = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
mr.Component = sr;
var Rf = {
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
function Or() {
  return Or = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Or.apply(this, arguments);
}
var {
  n: Uf,
  classes: Yf
} = ee("divider");
function Wf(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [q(e.$slots, "default", {}, () => [e.description ? (C(), M(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      x(e.description),
      3
    )) : Q("v-if", !0)])],
    6
  );
}
const Rr = te({
  render: Wf,
  name: "VarDivider",
  props: Rf,
  setup(e, n) {
    var {
      slots: r
    } = n, a = De({
      withText: !1
    }), t = W(() => At(e.inset) ? e.inset : !0), i = W(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (At(l) || l === 0)
        return Or({}, d);
      var f = A(l), v = Math.abs(f) + (l + "").replace(f + "", "");
      return s ? Or({}, d, {
        height: "calc(80% - " + Ve(v) + ")"
      }) : Or({}, d, {
        width: "calc(100% - " + Ve(v) + ")",
        left: f > 0 ? Ve(v) : Ve(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Fe(() => {
      o();
    }), ki(() => {
      o();
    }), Or({
      n: Uf,
      classes: Yf
    }, As(a), {
      style: i,
      isInset: t
    });
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var Hf = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
  }
};
function go(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jf(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        go(i, a, t, o, l, "next", s);
      }
      function l(s) {
        go(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Gf
} = ee("form");
function qf(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Ur = te({
  render: qf,
  name: "VarForm",
  props: Hf,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Td(), i = /* @__PURE__ */ function() {
      var u = jf(function* () {
        var d = yield Promise.all(a.map((f) => {
          var {
            validate: v
          } = f;
          return v();
        }));
        return d.every((f) => f === !0);
      });
      return function() {
        return u.apply(this, arguments);
      };
    }(), o = () => a.forEach((u) => {
      var {
        reset: d
      } = u;
      return d();
    }), l = () => a.forEach((u) => {
      var {
        resetValidation: d
      } = u;
      return d();
    }), s = {
      disabled: n,
      readonly: r
    };
    return t(s), {
      n: Gf,
      validate: i,
      reset: o,
      resetValidation: l
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
function yo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function wt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        yo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        yo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ai.apply(this, arguments);
}
var Kf = "background-image", Xf = "lazy-loading", Zf = "lazy-error", bo = "lazy-attempt", Jf = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ti = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ga = [], it = [], Xl = Ys(100), Ae = {
  loading: ti,
  error: ti,
  attempt: 3,
  throttleWait: 300,
  events: Jf
}, Ni = Ti(Ra, Ae.throttleWait);
function St(e, n) {
  e._lazy.arg === Kf ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Qf(e) {
  e._lazy.loading && St(e, e._lazy.loading), Ra();
}
function xf(e) {
  e._lazy.error && St(e, e._lazy.error), e._lazy.state = "error", Bi(e), Ra();
}
function Zl(e, n) {
  St(e, n), e._lazy.state = "success", Bi(e), Ra();
}
function _f(e) {
  var n;
  it.includes(e) || (it.push(e), (n = Ae.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ni, {
      passive: !0
    });
  }));
}
function ec() {
  it.forEach((e) => {
    var n;
    (n = Ae.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ni);
    });
  }), it.length = 0;
}
function nc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Xf)) != null ? r : Ae.loading,
    error: (a = e.getAttribute(Zf)) != null ? a : Ae.error,
    attempt: e.getAttribute(bo) ? Number(e.getAttribute(bo)) : Ae.attempt
  };
  e._lazy = ai({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), St(e, ti), N(Ae.filter, e._lazy);
}
function rc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, Xl.add(n), Zl(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? xf(e) : Jl(e);
  });
}
function Jl(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (Xl.has(n)) {
      Zl(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Qf(e), rc(e, n);
  }
}
function Di(e) {
  return ii.apply(this, arguments);
}
function ii() {
  return ii = wt(function* (e) {
    (yield js(e)) && Jl(e);
  }), ii.apply(this, arguments);
}
function Ra() {
  ga.forEach((e) => Di(e));
}
function ac(e) {
  return oi.apply(this, arguments);
}
function oi() {
  return oi = wt(function* (e) {
    !ga.includes(e) && ga.push(e), Gs(e).forEach(_f), yield Di(e);
  }), oi.apply(this, arguments);
}
function Bi(e) {
  dt(ga, e), ga.length === 0 && ec();
}
function tc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function Ql(e, n) {
  return li.apply(this, arguments);
}
function li() {
  return li = wt(function* (e, n) {
    nc(e, n), yield ac(e);
  }), li.apply(this, arguments);
}
function ic(e, n) {
  return si.apply(this, arguments);
}
function si() {
  return si = wt(function* (e, n) {
    if (!tc(e, n)) {
      ga.includes(e) && (yield Di(e));
      return;
    }
    yield Ql(e, n);
  }), si.apply(this, arguments);
}
function oc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  Ae.events = n != null ? n : Ae.events, Ae.loading = r != null ? r : Ae.loading, Ae.error = a != null ? a : Ae.error, Ae.attempt = t != null ? t : Ae.attempt, Ae.throttleWait = i != null ? i : Ae.throttleWait, Ae.filter = o;
}
var ot = {
  mounted: Ql,
  unmounted: Bi,
  updated: ic,
  install(e, n) {
    oc(n), Ni = Ti(Ra, Ae.throttleWait), e.directive("lazy", this);
  }
};
function lc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var sc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: lc,
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
  onClick: {
    type: Function
  },
  onLoad: {
    type: Function
  },
  onError: {
    type: Function
  }
}, {
  n: uc,
  classes: dc
} = ee("image"), vc = ["alt", "title", "lazy-error", "lazy-loading"], fc = ["alt", "title", "src"];
function cc(e, n) {
  var r = Ge("lazy"), a = Ge("ripple");
  return Ce((C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [!e.block, "var--inline-block"])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? Ce((C(), M(
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
      vc
    )), [[r, e.src]]) : (C(), M(
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
      fc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Yr = te({
  render: cc,
  name: "VarImage",
  directives: {
    Lazy: ot,
    Ripple: Re
  },
  props: sc,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && N(o, a), t._lazy.state === "error" && N(l, a)) : N(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && N(i, a);
    };
    return {
      n: uc,
      classes: dc,
      toSizeUnit: Ve,
      handleLoad: n,
      handleError: r
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var xl = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), _l = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function mc() {
  var {
    childProviders: e,
    bindChildren: n
  } = dn(xl), {
    length: r
  } = yn(_l);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var es = {
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
  onChange: {
    type: Function
  }
};
function wo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function pc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        wo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        wo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var hc = 250, gc = 20, {
  n: yc,
  classes: bc
} = ee("swipe"), wc = ["onClick"];
function Sc(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [z(
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
      [q(e.$slots, "default")],
      38
    ), q(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(C(!0), M(
        Te,
        null,
        Ne(e.length, (r, a) => (C(), M(
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
          wc
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)])],
    2
  );
}
const jn = te({
  render: Sc,
  name: "VarSwipe",
  props: es,
  setup(e) {
    var n = E(null), r = E(0), a = W(() => e.vertical), t = E(0), i = E(0), o = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = mc(), f = !1, v = -1, c, p, y, b, T, S = (I) => s.find((L) => {
      var {
        index: U
      } = L;
      return U.value === I;
    }), h = () => {
      !e.loop || (i.value >= 0 && S(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && S(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, g = (I) => {
      var L = He(I) ? I : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: U
      } = e;
      return L <= -1 ? U ? -1 : 0 : L >= d.value ? U ? d.value : d.value - 1 : L;
    }, V = (I) => {
      var {
        loop: L
      } = e;
      return I === -1 ? L ? d.value - 1 : 0 : I === d.value ? L ? 0 : d.value - 1 : I;
    }, w = (I) => {
      var {
        loop: L
      } = e;
      return I < 0 ? L ? d.value - 1 : 0 : I > d.value - 1 ? L ? 0 : d.value - 1 : I;
    }, B = (I) => {
      var L = i.value >= r.value, U = i.value <= -t.value, J = 0, ie = -(t.value - r.value);
      o.value = !0, (L || U) && (o.value = !0, i.value = U ? J : ie, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), ct(() => {
        o.value = !1, N(I);
      });
    }, k = () => {
      l.value = w(A(e.initialIndex));
    }, D = () => {
      var {
        autoplay: I
      } = e;
      !I || d.value <= 1 || (P(), v = window.setTimeout(() => {
        F(), D();
      }, A(I)));
    }, P = () => {
      v && clearTimeout(v);
    }, $ = (I, L) => {
      if (I > L && I > 10)
        return "horizontal";
      if (L > I && L > 10)
        return "vertical";
    }, O = (I) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: L,
          clientY: U
        } = I.touches[0];
        c = L, p = U, y = performance.now(), f = !0, P(), B(() => {
          o.value = !0;
        });
      }
    }, R = (I) => {
      var {
        touchable: L,
        vertical: U
      } = e;
      if (!(!f || !L)) {
        var {
          clientX: J,
          clientY: ie
        } = I.touches[0], le = Math.abs(J - c), de = Math.abs(ie - p), be = $(le, de), Le = U ? "vertical" : "horizontal";
        if (be === Le) {
          I.preventDefault();
          var Je = b !== void 0 ? J - b : 0, Pe = T !== void 0 ? ie - T : 0;
          b = J, T = ie, i.value += U ? Pe : Je, h();
        }
      }
    }, Y = () => {
      if (!!f) {
        var {
          vertical: I,
          onChange: L
        } = e, U = I ? T < p : b < c, J = Math.abs(I ? p - T : c - b), ie = performance.now() - y <= hc && J >= gc, le = ie ? g(U ? l.value + 1 : l.value - 1) : g();
        f = !1, o.value = !1, b = void 0, T = void 0, i.value = le * -r.value;
        var de = l.value;
        l.value = V(le), D(), de !== l.value && N(L, l.value);
      }
    }, j = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((I) => {
        I.setTranslate(0);
      }), D(), setTimeout(() => {
        o.value = !1;
      });
    }, F = () => {
      if (!(d.value <= 1)) {
        var {
          loop: I,
          onChange: L
        } = e, U = l.value;
        l.value = w(U + 1), N(L, l.value), B(() => {
          if (U === d.value - 1 && I) {
            S(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          U !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, Z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: I,
          onChange: L
        } = e, U = l.value;
        l.value = w(U - 1), N(L, l.value), B(() => {
          if (U === 0 && I) {
            S(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          U !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, H = (I) => {
      if (!(d.value <= 1 || I === l.value)) {
        I = I < 0 ? 0 : I, I = I >= d.value ? d.value : I;
        var L = I > l.value ? F : Z;
        Array.from({
          length: Math.abs(I - l.value)
        }).forEach(L);
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), re(() => d.value, /* @__PURE__ */ pc(function* () {
      yield Mn(), k(), j();
    })), Fe(() => {
      window.addEventListener("resize", j);
    }), xn(() => {
      window.removeEventListener("resize", j), P();
    }), {
      n: yc,
      classes: bc,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: O,
      handleTouchmove: R,
      handleTouchend: Y,
      next: F,
      prev: Z,
      to: H,
      resize: j,
      toNumber: A
    };
  }
});
jn.install = function(e) {
  e.component(jn.name, jn);
};
function Cc() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(xl), {
    index: r
  } = bn(_l);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: kc
} = ee("swipe-item");
function $c(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Gn = te({
  render: $c,
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Cc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: kc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Gn.install = function(e) {
  e.component(Gn.name, Gn);
};
function ui() {
  return ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ui.apply(this, arguments);
}
var Tc = ui({
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
  "onUpdate:show": {
    type: Function
  }
}, xe(es, ["loop", "indicator", "onChange"]), xe(La, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: Oc,
  classes: Pc
} = ee("image-preview"), So = 12, Co = 200, Ec = 350, ko = 200, Vc = ["src", "alt"];
function Mc(e, n) {
  var r = ae("var-swipe-item"), a = ae("var-swipe"), t = ae("var-icon"), i = ae("var-popup");
  return C(), me(
    i,
    {
      class: m(e.n("popup")),
      "var-image-preview-cover": "",
      transition: "var-fade",
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
      default: ce(() => [ne(
        a,
        Me({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ce(() => [(C(!0), M(
            Te,
            null,
            Ne(e.images, (o) => (C(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ce(() => [z(
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
                  [z(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    Vc
                  )],
                  38
                )]),
                _: 2
              },
              1032,
              ["class"]
            ))),
            128
          ))]),
          indicator: ce((o) => {
            var {
              index: l,
              length: s
            } = o;
            return [q(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (C(), M(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              x(l + 1) + " / " + x(s),
              3
            )) : Q("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), q(e.$slots, "close-icon", {}, () => [e.closeable ? (C(), me(
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
      )) : Q("v-if", !0)]), z(
        "div",
        {
          class: m(e.n("extra"))
        },
        [q(e.$slots, "extra")],
        2
      )]),
      _: 3
    },
    8,
    ["class", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const ur = te({
  render: Mc,
  name: "VarImagePreview",
  components: {
    VarSwipe: jn,
    VarSwipeItem: Gn,
    VarPopup: pn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Tc,
  setup(e) {
    var n = E(!1), r = W(() => {
      var {
        images: P,
        current: $
      } = e, O = P.findIndex((R) => R === $);
      return O >= 0 ? O : 0;
    }), a = E(1), t = E(0), i = E(0), o = E(void 0), l = E(void 0), s = E(!0), u = null, d = null, f = null, v = (P, $) => {
      var {
        clientX: O,
        clientY: R
      } = P, {
        clientX: Y,
        clientY: j
      } = $;
      return Math.abs(Math.sqrt(Math.pow(Y - O, 2) + Math.pow(j - R, 2)));
    }, c = (P, $) => ({
      clientX: P.clientX,
      clientY: P.clientY,
      timestamp: Date.now(),
      target: $
    }), p = () => {
      a.value = A(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, ko);
    }, y = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, b = (P) => d ? v(d, P) <= So && P.timestamp - d.timestamp <= Co && d.target === P.target : !1, T = (P) => !P || !u || !d ? !1 : v(u, d) <= So && Date.now() - d.timestamp < Ec && (P === u.target || P.parentNode === u.target), S = (P) => {
      f = window.setTimeout(() => {
        T(P.target) && D(), u = null;
      }, Co);
    }, h = (P) => {
      f && window.clearTimeout(f);
      var {
        touches: $
      } = P, O = c($[0], P.currentTarget);
      if (u = O, b(O)) {
        a.value > 1 ? y() : p();
        return;
      }
      d = O;
    }, g = (P) => {
      var {
        offsetWidth: $,
        offsetHeight: O
      } = P, {
        naturalWidth: R,
        naturalHeight: Y
      } = P.querySelector(".var-image-preview__image");
      return {
        width: $,
        height: O,
        imageRadio: Y / R,
        rootRadio: O / $,
        zoom: A(e.zoom)
      };
    }, V = (P) => {
      var {
        zoom: $,
        imageRadio: O,
        rootRadio: R,
        width: Y,
        height: j
      } = g(P);
      if (!O)
        return 0;
      var F = O > R ? j / O : Y;
      return Math.max(0, ($ * F - Y) / 2) / $;
    }, w = (P) => {
      var {
        zoom: $,
        imageRadio: O,
        rootRadio: R,
        width: Y,
        height: j
      } = g(P);
      if (!O)
        return 0;
      var F = O > R ? j : Y * O;
      return Math.max(0, ($ * F - j) / 2) / $;
    }, B = (P, $, O) => P + $ >= O ? O : P + $ <= -O ? -O : P + $, k = (P) => {
      if (!!d) {
        var $ = P.currentTarget, {
          touches: O
        } = P, R = c(O[0], $);
        if (a.value > 1) {
          var Y = R.clientX - d.clientX, j = R.clientY - d.clientY, F = V($), Z = w($);
          t.value = B(t.value, Y, F), i.value = B(i.value, j, Z);
        }
        d = R;
      }
    }, D = () => {
      if (a.value > 1) {
        y(), setTimeout(() => N(e["onUpdate:show"], !1), ko);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return re(() => e.show, (P) => {
      n.value = P;
    }, {
      immediate: !0
    }), {
      n: Oc,
      classes: Pc,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: h,
      handleTouchmove: k,
      handleTouchend: S,
      close: D
    };
  }
});
var Rn;
function Jn(e) {
  if (!!Oi()) {
    Jn.close();
    var n = nn(e) ? {
      images: [e]
    } : Se(e) ? {
      images: e
    } : e, r = De(n);
    r.teleport = "body", Rn = r;
    var {
      unmountInstance: a
    } = Fa(ur, r, {
      onClose: () => r.onClose == null ? void 0 : r.onClose(),
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Rn === r && (Rn = null);
      },
      onRouteChange: () => {
        a(), Rn === r && (Rn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
Jn.close = () => {
  if (Rn != null) {
    var e = Rn;
    Rn = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
ur.install = function(e) {
  e.component(ur.name, ur);
};
Jn.install = function(e) {
  e.component(ur.name, ur);
};
Jn.Component = ur;
var ns = {
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
  onScroll: {
    type: Function
  }
};
function $o(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ic(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        $o(i, a, t, o, l, "next", s);
      }
      function l(s) {
        $o(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Nc,
  classes: Dc
} = ee("sticky");
function Bc(e, n) {
  return C(), M(
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
    [z(
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
      [q(e.$slots, "default")],
      6
    )],
    6
  );
}
const qn = te({
  render: Bc,
  name: "VarSticky",
  props: ns,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), i = E("0px"), o = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = W(() => !e.disabled && e.cssMode), f = W(() => !e.disabled && a.value), v = W(() => Ie(e.offsetTop)), c, p = () => {
      var {
        onScroll: T,
        cssMode: S,
        disabled: h
      } = e;
      if (!h) {
        var g = 0;
        if (c !== window) {
          var {
            top: V
          } = c.getBoundingClientRect();
          g = V;
        }
        var w = r.value, B = n.value, {
          top: k,
          left: D
        } = B.getBoundingClientRect(), P = k - g;
        P <= v.value ? (S || (o.value = B.offsetWidth + "px", l.value = B.offsetHeight + "px", t.value = g + v.value + "px", i.value = D + "px", s.value = w.offsetWidth + "px", u.value = w.offsetHeight + "px", a.value = !0), N(T, v.value, !0)) : (a.value = !1, N(T, P, !1));
      }
    }, y = /* @__PURE__ */ function() {
      var T = Ic(function* () {
        yield Mn(), c = Sa(n.value), c !== window && c.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), b = () => {
      c !== window && c.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return re(() => e.disabled, p), bi(y), wi(b), Fe(y), xn(b), {
      n: Nc,
      classes: Dc,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: v,
      fixedTop: t,
      fixedLeft: i,
      fixedWidth: o,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: f,
      toNumber: A
    };
  }
});
qn.install = function(e) {
  e.component(qn.name, qn);
};
var rs = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), as = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Ac() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(rs), {
    length: r
  } = yn(as);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function zc() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(rs), {
    index: r
  } = bn(as);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Fc = {
  index: {
    type: [Number, String]
  }
}, {
  n: Lc,
  classes: Rc
} = ee("index-anchor");
function Uc(e, n) {
  return C(), me(
    ut(e.sticky ? "var-sticky" : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ce(() => [z(
        "div",
        Me({
          class: e.n()
        }, e.$attrs),
        [q(e.$slots, "default", {}, () => [he(
          x(e.name),
          1
        )])],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top", "z-index", "disabled", "css-mode"]
  );
}
const Wr = te({
  render: Uc,
  name: "VarIndexAnchor",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Fc,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = zc(), t = E(0), i = E(!1), o = W(() => e.index), l = E(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: f,
      zIndex: v
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (b) => {
      i.value = b;
    }, y = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(y), {
      n: Lc,
      classes: Rc,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: v,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: f,
      Transition: je
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var Yc = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  }
};
function To(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function It(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        To(i, a, t, o, l, "next", s);
      }
      function l(s) {
        To(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Wc,
  classes: Hc
} = ee("index-bar"), jc = ["onClick"];
function Gc(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [q(e.$slots, "default"), z(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(C(!0), M(
        Te,
        null,
        Ne(e.anchorNameList, (r) => (C(), M(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: K({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          x(r),
          15,
          jc
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Hr = te({
  render: Gc,
  name: "VarIndexBar",
  props: Yc,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Ac(), t = E(""), i = E(null), o = E(null), l = E([]), s = E(), u = W(() => e.sticky), d = W(() => e.cssMode), f = W(() => Ie(e.stickyOffsetTop)), v = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: f,
      zIndex: v
    };
    a(c);
    var p = (S) => {
      var h = $i(S) ? S.name.value : S;
      h === s.value || h === void 0 || (s.value = h, N(e.onChange, h));
    }, y = () => {
      var S = ft(i.value), h = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: g
      } = o.value;
      r.forEach((V, w) => {
        var B = V.ownTop.value, k = S - B + f.value - g, D = w === r.length - 1 ? h : r[w + 1].ownTop.value - V.ownTop.value;
        k >= 0 && k < D && !t.value && (w && !e.cssMode && r[w - 1].setDisabled(!0), V.setDisabled(!1), p(V));
      });
    }, b = /* @__PURE__ */ function() {
      var S = It(function* (h, g) {
        var {
          offsetTop: V
        } = o.value;
        if (g && N(e.onClick, h), h !== s.value) {
          var w = r.find((D) => {
            var {
              name: P
            } = D;
            return h === P.value;
          });
          if (!!w) {
            var B = w.ownTop.value - f.value + V, k = Pi(i.value);
            t.value = h, p(h), yield xa(i.value, {
              left: k,
              top: B,
              animation: al,
              duration: A(e.duration)
            }), ct(() => {
              t.value = "";
            });
          }
        }
      });
      return function(g, V) {
        return S.apply(this, arguments);
      };
    }(), T = (S) => {
      kn(() => b(S));
    };
    return re(() => n.value, /* @__PURE__ */ It(function* () {
      yield Mn(), r.forEach((S) => {
        var {
          name: h,
          setOwnTop: g
        } = S;
        h.value && l.value.push(h.value), g();
      });
    })), Fe(/* @__PURE__ */ It(function* () {
      yield Mn(), i.value = Sa(o.value), i.value.addEventListener("scroll", y);
    })), Si(() => {
      N(i.value.removeEventListener, "scroll", y);
    }), {
      n: Wc,
      classes: Hc,
      barEl: o,
      active: s,
      zIndex: v,
      anchorNameList: l,
      toNumber: A,
      scrollTo: T,
      anchorClick: b
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
function qc(e) {
  return ["text", "password", "number"].includes(e);
}
var Kc = {
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
    validator: qc
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
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onInput: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Nt,
  classes: Xc
} = ee("input"), Zc = ["id", "disabled", "type", "value", "maxlength", "rows"], Jc = ["id", "disabled", "type", "value", "maxlength"], Qc = ["for"];
function xc(e, n) {
  var r = ae("var-icon"), a = ae("var-form-details");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
        2
      ), z(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (C(), M(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
        )) : Q("v-if", !0), e.textarea ? (C(), M(
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
          Zc
        )) : (C(), M(
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
          Jc
        )), z(
          "label",
          {
            class: m(e.classes("var--ellipsis", [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: K({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          x(e.placeholder),
          15,
          Qc
        )],
        2
      ), z(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (C(), me(
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
        )) : Q("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Q("v-if", !0), ne(
      a,
      {
        "error-message": e.errorMessage,
        "maxlength-text": e.maxlengthText
      },
      null,
      8,
      ["error-message", "maxlength-text"]
    )],
    2
  );
}
const dr = te({
  render: xc,
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  props: Kc,
  setup(e) {
    var n = E("var-input-" + Aa().uid), r = E(null), a = E(!1), t = W(() => {
      var {
        maxlength: P,
        modelValue: $
      } = e;
      return P ? Un($) ? "0 / " + P : String($).length + "/" + P : "";
    }), {
      bindForm: i,
      form: o
    } = Sn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = wn(), f = (P) => {
      Oe(() => {
        var {
          validateTrigger: $,
          rules: O,
          modelValue: R
        } = e;
        s($, P, O, R);
      });
    }, v = () => {
      var {
        hint: P,
        modelValue: $
      } = e;
      if (!P && !Un($))
        return Nt("--placeholder-hidden");
      if (P && (!Un($) || a.value))
        return Nt("--placeholder-hint");
    }, c = (P) => {
      a.value = !0, N(e.onFocus, P), f("onFocus");
    }, p = (P) => {
      a.value = !1, N(e.onBlur, P), f("onBlur");
    }, y = (P) => {
      var {
        value: $
      } = P.target;
      $ = h($), N(e["onUpdate:modelValue"], $), N(e.onInput, $, P), f("onInput");
    }, b = (P) => {
      var {
        value: $
      } = P.target;
      N(e.onChange, h($), P), f("onChange");
    }, T = () => {
      var {
        disabled: P,
        readonly: $,
        clearable: O,
        onClear: R
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || P || $ || !O || (N(e["onUpdate:modelValue"], ""), N(R, ""), f("onClear"));
    }, S = (P) => {
      var {
        disabled: $,
        onClick: O
      } = e;
      o != null && o.disabled.value || $ || (N(O, P), f("onClick"));
    }, h = (P) => e.modelModifiers.trim ? P.trim() : P, g = (P) => {
      var {
        disabled: $,
        readonly: O
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || $ || O || P.stopPropagation();
    }, V = () => {
      N(e["onUpdate:modelValue"], ""), d();
    }, w = () => u(e.rules, e.modelValue), B = () => {
      var P;
      (P = r.value) == null || P.focus();
    }, k = () => {
      r.value.blur();
    }, D = {
      reset: V,
      validate: w,
      resetValidation: d
    };
    return N(i, D), Fe(() => {
      e.autofocus && B();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Nt,
      classes: Xc,
      isEmpty: Un,
      computePlaceholderState: v,
      handleFocus: c,
      handleBlur: p,
      handleInput: y,
      handleChange: b,
      handleClear: T,
      handleClick: S,
      handleTouchstart: g,
      validate: w,
      resetValidation: d,
      reset: V,
      focus: B,
      blur: k
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var _c = {
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
  onLoad: {
    type: Function
  },
  "onUpdate:loading": {
    type: Function
  },
  "onUpdate:error": {
    type: Function
  }
};
function Oo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function em(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Oo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Oo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: nm,
  classes: rm
} = ee("list");
function am(e, n) {
  var r = ae("var-loading"), a = Ge("ripple");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box")),
      ref: "listEl"
    },
    [q(e.$slots, "default"), e.loading ? q(e.$slots, "loading", {
      key: 0
    }, () => [z(
      "div",
      {
        class: m(e.n("loading"))
      },
      [z(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        x(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), ne(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : Q("v-if", !0), e.finished ? q(e.$slots, "finished", {
      key: 1
    }, () => [z(
      "div",
      {
        class: m(e.n("finished"))
      },
      x(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : Q("v-if", !0), e.error ? q(e.$slots, "error", {
      key: 2
    }, () => [Ce((C(), M(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [he(
        x(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : Q("v-if", !0), z(
      "div",
      {
        class: m(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
    )],
    2
  );
}
const jr = te({
  render: am,
  name: "VarList",
  directives: {
    Ripple: Re
  },
  components: {
    VarLoading: Cn
  },
  props: _c,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      N(e["onUpdate:error"], !1), N(e["onUpdate:loading"], !0), N(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ie(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = em(function* () {
        yield Oe();
        var {
          loading: s,
          finished: u,
          error: d
        } = e;
        !s && !u && !d && i() && t();
      });
      return function() {
        return l.apply(this, arguments);
      };
    }();
    return Fe(() => {
      a = Sa(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), xn(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: Ue,
      listEl: n,
      detectorEl: r,
      dt: vt,
      isNumber: He,
      load: t,
      check: o,
      n: nm,
      classes: rm
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var tm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Qa(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return tm[n];
  });
}
var Pn = "top", Qn = "bottom", pr = "right", Kn = "left", Ct = "auto", kt = [Pn, Qn, pr, Kn], $t = "start", Ia = "end", im = "clippingParents", ts = "viewport", Ca = "popper", om = "reference", Po = /* @__PURE__ */ kt.reduce(function(e, n) {
  return e.concat([n + "-" + $t, n + "-" + Ia]);
}, []), is = /* @__PURE__ */ [].concat(kt, [Ct]).reduce(function(e, n) {
  return e.concat([n, n + "-" + $t, n + "-" + Ia]);
}, []), lm = "beforeRead", sm = "read", um = "afterRead", dm = "beforeMain", vm = "main", fm = "afterMain", cm = "beforeWrite", mm = "write", pm = "afterWrite", di = [lm, sm, um, dm, vm, fm, cm, mm, pm];
function En(e) {
  return e.split("-")[0];
}
var hm = {
  start: "end",
  end: "start"
};
function Eo(e) {
  return e.replace(/start|end/g, function(n) {
    return hm[n];
  });
}
function fn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function hr(e) {
  var n = fn(e).Element;
  return e instanceof n || e instanceof Element;
}
function sn(e) {
  var n = fn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ai(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = fn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function er(e) {
  return ((hr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Ea = Math.max, Vo = Math.min, ya = Math.round;
function vi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function os() {
  return !/^((?!chrome|android).)*safari/i.test(vi());
}
function ba(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && sn(e) && (t = e.offsetWidth > 0 && ya(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && ya(a.height) / e.offsetHeight || 1);
  var o = hr(e) ? fn(e) : window, l = o.visualViewport, s = !os() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, f = a.width / t, v = a.height / i;
  return {
    width: f,
    height: v,
    top: d,
    right: u + f,
    bottom: d + v,
    left: u,
    x: u,
    y: d
  };
}
function zi(e) {
  var n = fn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Fi(e) {
  return ba(er(e)).left + zi(e).scrollLeft;
}
function gm(e, n) {
  var r = fn(e), a = er(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = os();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Fi(e),
    y: s
  };
}
function gn(e) {
  return fn(e).getComputedStyle(e);
}
function ym(e) {
  var n, r = er(e), a = zi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Ea(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Ea(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Fi(e), s = -a.scrollTop;
  return gn(t || r).direction === "rtl" && (l += Ea(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Tn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Tt(e) {
  return Tn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ai(e) ? e.host : null) || er(e);
}
function Li(e) {
  var n = gn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function ls(e) {
  return ["html", "body", "#document"].indexOf(Tn(e)) >= 0 ? e.ownerDocument.body : sn(e) && Li(e) ? e : ls(Tt(e));
}
function Va(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = ls(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = fn(a), o = t ? [i].concat(i.visualViewport || [], Li(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Va(Tt(o)));
}
function bm(e) {
  return ["table", "td", "th"].indexOf(Tn(e)) >= 0;
}
function Mo(e) {
  return !sn(e) || gn(e).position === "fixed" ? null : e.offsetParent;
}
function wm(e) {
  var n = /firefox/i.test(vi()), r = /Trident/i.test(vi());
  if (r && sn(e)) {
    var a = gn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Tt(e);
  for (Ai(t) && (t = t.host); sn(t) && ["html", "body"].indexOf(Tn(t)) < 0; ) {
    var i = gn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ri(e) {
  for (var n = fn(e), r = Mo(e); r && bm(r) && gn(r).position === "static"; )
    r = Mo(r);
  return r && (Tn(r) === "html" || Tn(r) === "body" && gn(r).position === "static") ? n : r || wm(e) || n;
}
function Sm(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Ai(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function fi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Cm(e, n) {
  var r = ba(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Io(e, n, r) {
  return n === ts ? fi(gm(e, r)) : hr(n) ? Cm(n, r) : fi(ym(er(e)));
}
function km(e) {
  var n = Va(Tt(e)), r = ["absolute", "fixed"].indexOf(gn(e).position) >= 0, a = r && sn(e) ? Ri(e) : e;
  return hr(a) ? n.filter(function(t) {
    return hr(t) && Sm(t, a) && Tn(t) !== "body";
  }) : [];
}
function $m(e, n, r, a) {
  var t = n === "clippingParents" ? km(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Io(e, u, a);
    return s.top = Ea(d.top, s.top), s.right = Vo(d.right, s.right), s.bottom = Vo(d.bottom, s.bottom), s.left = Ea(d.left, s.left), s;
  }, Io(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Na(e) {
  return e.split("-")[1];
}
function Tm(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ss(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? En(a) : null, i = a ? Na(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Pn:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case Qn:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case pr:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Kn:
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
  var u = t ? Tm(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case $t:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ia:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Om() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Pm(e) {
  return Object.assign({}, Om(), e);
}
function Em(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function us(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? im : l, u = r.rootBoundary, d = u === void 0 ? ts : u, f = r.elementContext, v = f === void 0 ? Ca : f, c = r.altBoundary, p = c === void 0 ? !1 : c, y = r.padding, b = y === void 0 ? 0 : y, T = Pm(typeof b != "number" ? b : Em(b, kt)), S = v === Ca ? om : Ca, h = e.rects.popper, g = e.elements[p ? S : v], V = $m(hr(g) ? g : g.contextElement || er(e.elements.popper), s, d, o), w = ba(e.elements.reference), B = ss({
    reference: w,
    element: h,
    strategy: "absolute",
    placement: t
  }), k = fi(Object.assign({}, h, B)), D = v === Ca ? k : w, P = {
    top: V.top - D.top + T.top,
    bottom: D.bottom - V.bottom + T.bottom,
    left: V.left - D.left + T.left,
    right: D.right - V.right + T.right
  }, $ = e.modifiersData.offset;
  if (v === Ca && $) {
    var O = $[t];
    Object.keys(P).forEach(function(R) {
      var Y = [pr, Qn].indexOf(R) >= 0 ? 1 : -1, j = [Pn, Qn].indexOf(R) >= 0 ? "y" : "x";
      P[R] += O[j] * Y;
    });
  }
  return P;
}
function Vm(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? is : s, d = Na(a), f = d ? l ? Po : Po.filter(function(p) {
    return Na(p) === d;
  }) : kt, v = f.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  v.length === 0 && (v = f, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = v.reduce(function(p, y) {
    return p[y] = us(e, {
      placement: y,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[En(y)], p;
  }, {});
  return Object.keys(c).sort(function(p, y) {
    return c[p] - c[y];
  });
}
function Mm(e) {
  if (En(e) === Ct)
    return [];
  var n = Qa(e);
  return [Eo(e), n, Eo(n)];
}
function Im(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, f = r.rootBoundary, v = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, y = r.allowedAutoPlacements, b = n.options.placement, T = En(b), S = T === b, h = s || (S || !p ? [Qa(b)] : Mm(b)), g = [b].concat(h).reduce(function(ie, le) {
      return ie.concat(En(le) === Ct ? Vm(n, {
        placement: le,
        boundary: d,
        rootBoundary: f,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : le);
    }, []), V = n.rects.reference, w = n.rects.popper, B = /* @__PURE__ */ new Map(), k = !0, D = g[0], P = 0; P < g.length; P++) {
      var $ = g[P], O = En($), R = Na($) === $t, Y = [Pn, Qn].indexOf(O) >= 0, j = Y ? "width" : "height", F = us(n, {
        placement: $,
        boundary: d,
        rootBoundary: f,
        altBoundary: v,
        padding: u
      }), Z = Y ? R ? pr : Kn : R ? Qn : Pn;
      V[j] > w[j] && (Z = Qa(Z));
      var H = Qa(Z), X = [];
      if (i && X.push(F[O] <= 0), l && X.push(F[Z] <= 0, F[H] <= 0), X.every(function(ie) {
        return ie;
      })) {
        D = $, k = !1;
        break;
      }
      B.set($, X);
    }
    if (k)
      for (var I = p ? 3 : 1, L = function(le) {
        var de = g.find(function(be) {
          var Le = B.get(be);
          if (Le)
            return Le.slice(0, le).every(function(Je) {
              return Je;
            });
        });
        if (de)
          return D = de, "break";
      }, U = I; U > 0; U--) {
        var J = L(U);
        if (J === "break")
          break;
      }
    n.placement !== D && (n.modifiersData[a]._skip = !0, n.placement = D, n.reset = !0);
  }
}
const Nm = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Im,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Dm(e, n, r) {
  var a = En(e), t = [Kn, Pn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [Kn, pr].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function Bm(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = is.reduce(function(d, f) {
    return d[f] = Dm(f, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const Am = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Bm
};
function zm(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fm(e) {
  return e === fn(e) || !sn(e) ? zi(e) : zm(e);
}
function Lm(e) {
  var n = e.getBoundingClientRect(), r = ya(n.width) / e.offsetWidth || 1, a = ya(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Rm(e, n, r) {
  r === void 0 && (r = !1);
  var a = sn(n), t = sn(n) && Lm(n), i = er(n), o = ba(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Tn(n) !== "body" || Li(i)) && (l = Fm(n)), sn(n) ? (s = ba(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Fi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function Um(e) {
  var n = ba(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Ym(e) {
  var n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(i) {
    n.set(i.name, i);
  });
  function t(i) {
    r.add(i.name);
    var o = [].concat(i.requires || [], i.requiresIfExists || []);
    o.forEach(function(l) {
      if (!r.has(l)) {
        var s = n.get(l);
        s && t(s);
      }
    }), a.push(i);
  }
  return e.forEach(function(i) {
    r.has(i.name) || t(i);
  }), a;
}
function Wm(e) {
  var n = Ym(e);
  return di.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Hm(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Dn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var nr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', jm = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', No = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Gm(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), No).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Dn(nr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Dn(nr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          di.indexOf(n.phase) < 0 && console.error(Dn(nr, n.name, '"phase"', "either " + di.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Dn(nr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Dn(nr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Dn(nr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Dn(nr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + No.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Dn(jm, String(n.name), a, a));
      });
    });
  });
}
function qm(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Km(e) {
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
var Do = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Xm = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Bo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ao() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Zm(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Bo : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Bo, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, f = [], v = !1, c = {
      state: d,
      setOptions: function(T) {
        var S = typeof T == "function" ? T(d.options) : T;
        y(), d.options = Object.assign({}, i, d.options, S), d.scrollParents = {
          reference: hr(l) ? Va(l) : l.contextElement ? Va(l.contextElement) : [],
          popper: Va(s)
        };
        var h = Wm(Km([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = h.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var g = qm([].concat(h, d.options.modifiers), function($) {
            var O = $.name;
            return O;
          });
          if (Gm(g), En(d.options.placement) === Ct) {
            var V = d.orderedModifiers.find(function($) {
              var O = $.name;
              return O === "flip";
            });
            V || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var w = gn(s), B = w.marginTop, k = w.marginRight, D = w.marginBottom, P = w.marginLeft;
          [B, k, D, P].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      forceUpdate: function() {
        if (!v) {
          var T = d.elements, S = T.reference, h = T.popper;
          if (!Ao(S, h)) {
            process.env.NODE_ENV !== "production" && console.error(Do);
            return;
          }
          d.rects = {
            reference: Rm(S, Ri(h), d.options.strategy === "fixed"),
            popper: Um(h)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function($) {
            return d.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var g = 0, V = 0; V < d.orderedModifiers.length; V++) {
            if (process.env.NODE_ENV !== "production" && (g += 1, g > 100)) {
              console.error(Xm);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, V = -1;
              continue;
            }
            var w = d.orderedModifiers[V], B = w.fn, k = w.options, D = k === void 0 ? {} : k, P = w.name;
            typeof B == "function" && (d = B({
              state: d,
              options: D,
              name: P,
              instance: c
            }) || d);
          }
        }
      },
      update: Hm(function() {
        return new Promise(function(b) {
          c.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        y(), v = !0;
      }
    };
    if (!Ao(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Do), c;
    c.setOptions(u).then(function(b) {
      !v && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function p() {
      d.orderedModifiers.forEach(function(b) {
        var T = b.name, S = b.options, h = S === void 0 ? {} : S, g = b.effect;
        if (typeof g == "function") {
          var V = g({
            state: d,
            name: T,
            instance: c,
            options: h
          }), w = function() {
          };
          f.push(V || w);
        }
      });
    }
    function y() {
      f.forEach(function(b) {
        return b();
      }), f = [];
    }
    return c;
  };
}
var Ka = {
  passive: !0
};
function Jm(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = fn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, Ka);
  }), l && s.addEventListener("resize", r.update, Ka), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, Ka);
    }), l && s.removeEventListener("resize", r.update, Ka);
  };
}
const Qm = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jm,
  data: {}
};
function xm(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ss({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const _m = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xm,
  data: {}
};
var ep = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function np(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: ya(n * t) / t || 0,
    y: ya(r * t) / t || 0
  };
}
function zo(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, f = e.isFixed, v = o.x, c = v === void 0 ? 0 : v, p = o.y, y = p === void 0 ? 0 : p, b = typeof d == "function" ? d({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = b.x, y = b.y;
  var T = o.hasOwnProperty("x"), S = o.hasOwnProperty("y"), h = Kn, g = Pn, V = window;
  if (u) {
    var w = Ri(r), B = "clientHeight", k = "clientWidth";
    if (w === fn(r) && (w = er(r), gn(w).position !== "static" && l === "absolute" && (B = "scrollHeight", k = "scrollWidth")), w = w, t === Pn || (t === Kn || t === pr) && i === Ia) {
      g = Qn;
      var D = f && w === V && V.visualViewport ? V.visualViewport.height : w[B];
      y -= D - a.height, y *= s ? 1 : -1;
    }
    if (t === Kn || (t === Pn || t === Qn) && i === Ia) {
      h = pr;
      var P = f && w === V && V.visualViewport ? V.visualViewport.width : w[k];
      c -= P - a.width, c *= s ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, u && ep), O = d === !0 ? np({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = O.x, y = O.y, s) {
    var R;
    return Object.assign({}, $, (R = {}, R[g] = S ? "0" : "", R[h] = T ? "0" : "", R.transform = (V.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", R));
  }
  return Object.assign({}, $, (n = {}, n[g] = S ? y + "px" : "", n[h] = T ? c + "px" : "", n.transform = "", n));
}
function rp(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = gn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(f) {
      return u.indexOf(f) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: En(n.placement),
    variation: Na(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, zo(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, zo(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const ap = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: rp,
  data: {}
};
function tp(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !sn(i) || !Tn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function ip(e) {
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
      var t = n.elements[a], i = n.attributes[a] || {}, o = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = o.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !sn(t) || !Tn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const op = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: tp,
  effect: ip,
  requires: ["computeStyles"]
};
var lp = [Qm, _m, ap, op], sp = /* @__PURE__ */ Zm({
  defaultModifiers: lp
});
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
  defaultStyle: {
    type: Boolean,
    default: !0
  },
  onOpen: {
    type: Function
  },
  onOpened: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onClosed: {
    type: Function
  },
  "onUpdate:show": {
    type: Function
  }
};
function lt() {
  return lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, lt.apply(this, arguments);
}
function Fo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Lo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Fo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Fo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: fp,
  classes: cp
} = ee("menu");
function mp(e, n) {
  return C(), M(
    "div",
    {
      ref: "host",
      class: m(e.n()),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      }),
      onMouseenter: n[4] || (n[4] = function() {
        return e.handleMouseenter && e.handleMouseenter(...arguments);
      }),
      onMouseleave: n[5] || (n[5] = function() {
        return e.handleMouseleave && e.handleMouseleave(...arguments);
      })
    },
    [q(e.$slots, "default"), (C(), me(
      st,
      {
        to: e.teleport
      },
      [ne(
        je,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ce(() => [Ce(z(
            "div",
            {
              ref: "menu",
              style: K({
                zIndex: e.zIndex
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " var-elevation--3"])),
              onClick: n[0] || (n[0] = Vn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handleMenuMouseenter && e.handleMenuMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handleMenuMouseleave && e.handleMenuMouseleave(...arguments);
              })
            },
            [q(e.$slots, "menu")],
            38
          ), [[za, e.show]])]),
          _: 3
        },
        8,
        ["name", "onAfterEnter", "onAfterLeave"]
      )],
      8,
      ["to"]
    ))],
    34
  );
}
const Xn = te({
  render: mp,
  name: "VarMenu",
  props: vp,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), {
      zIndex: t
    } = mt(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: w,
        height: B
      } = getComputedStyle(n.value);
      u = {
        width: Ie(w),
        height: Ie(B)
      };
    }, f = () => {
      e.trigger === "hover" && (s = !0, g());
    }, v = /* @__PURE__ */ function() {
      var w = Lo(function* () {
        e.trigger === "hover" && (s = !1, yield Mn(), !l && V());
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var w = Lo(function* () {
        e.trigger === "hover" && (l = !1, yield Mn(), !s && V());
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), y = () => {
      g(), o = !0;
    }, b = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, N(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var w = {
        x: Ie(e.offsetX),
        y: Ie(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: w.x,
            distance: w.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: w.x,
            distance: w.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: w.x,
            distance: w.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: w.x,
            distance: -w.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: w.x,
            distance: -w.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: w.x,
            distance: -w.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: w.y,
            distance: w.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: w.y,
            distance: -w.x - u.width
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
    }, S = () => {
      var {
        placement: w,
        skidding: B,
        distance: k
      } = T();
      return {
        placement: w,
        modifiers: [lt({}, Nm, {
          enabled: a.value
        }), lt({}, Am, {
          options: {
            offset: [B, k]
          }
        })]
      };
    }, h = () => {
      i.setOptions(S());
    }, g = () => {
      var {
        disabled: w
      } = e;
      w || (a.value = !0, N(e["onUpdate:show"], !0));
    }, V = () => {
      a.value = !1, N(e["onUpdate:show"], !1);
    };
    return re(() => e.show, (w) => {
      a.value = w != null ? w : !1;
    }, {
      immediate: !0
    }), re(() => e.offsetX, h), re(() => e.offsetY, h), re(() => e.placement, h), re(() => a.value, (w) => {
      w ? (h(), N(e.onOpen)) : N(e.onClose);
    }), re(() => e.trigger, (w) => {
      w === "click" ? document.addEventListener("click", b) : document.removeEventListener("click", b);
    }), re(() => e.disabled, V), Fe(() => {
      i = sp(n.value, r.value, S()), e.trigger === "click" && document.addEventListener("click", b);
    }), xn(() => {
      document.removeEventListener("click", b), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: fp,
      classes: cp,
      handleClick: y,
      handleMenuClose: b,
      handleMouseenter: f,
      handleMouseleave: v,
      handleMenuMouseenter: c,
      handleMenuMouseleave: p,
      resize: h,
      open: g,
      close: V
    };
  }
});
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
var ds = Symbol("SELECT_BIND_OPTION_KEY"), vs = Symbol("SELECT_COUNT_OPTION_KEY");
function pp() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(ds), {
    length: r
  } = yn(vs);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function hp() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(ds), {
    index: r
  } = bn(vs);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var gp = {
  label: {},
  value: {}
}, {
  n: yp,
  classes: bp
} = ee("option");
function wp(e, n) {
  var r = ae("var-checkbox"), a = Ge("ripple");
  return Ce((C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.optionSelected, e.n("--selected-color")])),
      style: K({
        width: e.wrapWidth,
        color: e.optionSelected ? e.focusColor : void 0
      }),
      onClick: n[2] || (n[2] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (C(), me(
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
    )) : Q("v-if", !0), z(
      "div",
      {
        class: m(e.classes(e.n("text"), "var--ellipsis"))
      },
      [q(e.$slots, "default", {}, () => [he(
        x(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const Gr = te({
  render: wp,
  name: "VarOption",
  directives: {
    Ripple: Re
  },
  components: {
    VarCheckbox: ir
  },
  props: gp,
  setup(e) {
    var n = E(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = hp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, f = () => {
      n.value = !n.value, d(p);
    }, v = () => d(p), c = (y) => {
      n.value = y;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return re([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: yp,
      classes: bp,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: f,
      handleSelect: v
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var Sp = {
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
  onChange: {
    type: Function
  },
  "onUpdate:current": {
    type: Function
  },
  "onUpdate:size": {
    type: Function
  }
}, {
  n: Cp,
  classes: kp
} = ee("pagination"), $p = ["item-mode", "onClick"];
function Tp(e, n) {
  var r = ae("var-icon"), a = ae("var-input"), t = ae("var-cell"), i = ae("var-menu"), o = Ge("ripple");
  return C(), M(
    "ul",
    {
      class: m(e.n())
    },
    [Ce((C(), M(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), "var-elevation--2"])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [q(e.$slots, "prev", {}, () => [ne(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (C(), M(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [ne(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = ji((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), z("span", null, [he(
        " / " + x(e.pageCount) + " ",
        1
      ), z(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (C(!0), M(
      Te,
      {
        key: 1
      },
      Ne(e.pageList, (l, s) => Ce((C(), M(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), "var-elevation--2", [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [he(
          x(l),
          1
        )],
        10,
        $p
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), Ce((C(), M(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), "var-elevation--2"])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [q(e.$slots, "next", {}, () => [ne(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (C(), M(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [ne(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ce(() => [(C(!0), M(
            Te,
            null,
            Ne(e.sizeOption, (l, s) => Ce((C(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ce(() => [he(
                  x(l) + x(e.pack.paginationItem) + " / " + x(e.pack.paginationPage),
                  1
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: ce(() => [z(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [z(
              "span",
              null,
              x(e.size) + x(e.pack.paginationItem) + " / " + x(e.pack.paginationPage),
              1
            ), ne(
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
          )]),
          _: 1
        },
        8,
        ["show"]
      )],
      2
    )) : Q("v-if", !0), e.showQuickJumper && !e.simple ? (C(), M(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [he(
        x(e.pack.paginationJump) + " ",
        1
      ), ne(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = ji((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : Q("v-if", !0), e.totalText ? (C(), M(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      x(e.totalText),
      3
    )) : Q("v-if", !0)],
    2
  );
}
const qr = te({
  render: Tp,
  name: "VarPagination",
  components: {
    VarMenu: Xn,
    VarIcon: $e,
    VarCell: tr,
    VarInput: dr
  },
  directives: {
    Ripple: Re
  },
  props: Sp,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), i = E(!1), o = E(A(e.current) || 1), l = E(A(e.size) || 10), s = E([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(A(e.total) / A(l.value))), f = W(() => {
      var g = l.value * (o.value - 1) + 1, V = Math.min(l.value * o.value, A(e.total));
      return [g, V];
    }), v = W(() => e.showTotal ? e.showTotal(A(e.total), f.value) : ""), c = (g, V) => He(g) ? !1 : V === 1 ? t.value : i.value, p = (g, V) => He(g) ? "basic" : V === 1 ? "head" : "tail", y = (g, V) => {
      g === o.value || e.disabled || (He(g) ? o.value = g : g === "prev" ? o.value > 1 && (o.value -= 1) : g === "next" ? o.value < d.value && (o.value += 1) : g === "..." && (V === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, b = () => {
      e.disabled || (n.value = !0);
    }, T = (g) => {
      l.value = g, n.value = !1;
    }, S = (g) => {
      var V = /^[1-9][0-9]*$/;
      return V.test(g);
    }, h = (g, V, w) => {
      if (w.target.blur(), S(V)) {
        var B = A(V);
        B > d.value && (B = d.value, a.value = "" + B), B !== o.value && (o.value = B);
      }
      g === "quick" && (r.value = ""), g === "simple" && !S(V) && (a.value = "" + o.value);
    };
    return re([() => e.current, () => e.size], (g) => {
      var [V, w] = g;
      o.value = A(V) || 1, l.value = A(w || 10);
    }), re([o, l], (g, V) => {
      var w, B, [k, D] = g, [P, $] = V;
      if (k > d.value) {
        o.value = d.value;
        return;
      }
      var O = [], {
        maxPagerCount: R,
        total: Y,
        onChange: j
      } = e, F = Math.ceil(A(Y) / A($)), Z = d.value - (R - u.value) - 1;
      if (a.value = "" + k, d.value - 2 > R) {
        if (P === void 0 || d.value !== F)
          for (var H = 2; H < R + 2; H++)
            O.push(H);
        if (k <= R && k < Z) {
          O = [];
          for (var X = 1; X < R + 1; X++)
            O.push(X + 1);
          t.value = !0, i.value = !1;
        }
        if (k > R && k < Z) {
          O = [];
          for (var I = 1; I < R + 1; I++)
            O.push(k + I - u.value);
          t.value = k === 2 && R === 1, i.value = !1;
        }
        if (k >= Z) {
          O = [];
          for (var L = 1; L < R + 1; L++)
            O.push(d.value - (R - L) - 1);
          t.value = !1, i.value = !0;
        }
        O = [1, "...", ...O, "...", d.value];
      } else
        for (var U = 1; U <= d.value; U++)
          O.push(U);
      s.value = O, P !== void 0 && d.value > 0 && (j == null || j(k, D)), (w = e["onUpdate:current"]) == null || w.call(e, k), (B = e["onUpdate:size"]) == null || B.call(e, D);
    }, {
      immediate: !0
    }), {
      n: Cp,
      classes: kp,
      pack: Ue,
      current: o,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: v,
      getMode: p,
      isHideEllipsis: c,
      clickItem: y,
      showMenu: b,
      clickSize: T,
      setPage: h,
      toNumber: A
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
function ci() {
  return ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ci.apply(this, arguments);
}
var Op = ci({
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
  dynamic: {
    type: Boolean,
    default: !1
  },
  onChange: {
    type: Function
  },
  onConfirm: {
    type: Function
  },
  onCancel: {
    type: Function
  },
  textFormatter: {
    type: Function,
    default: (e) => e
  }
}, xe(La, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Pp,
  classes: Ep
} = ee("picker"), Ro = 300, Vp = 15, Uo = 0, Mp = ["onTouchstart", "onTouchmove", "onTouchend"], Ip = ["onTransitionend"];
function Np(e, n) {
  var r = ae("var-button");
  return C(), me(
    ut(e.dynamic ? "var-popup" : e.Transition),
    Me(e.dynamic ? {
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
      default: ce(() => [z(
        "div",
        Me({
          class: e.n()
        }, e.$attrs),
        [z(
          "div",
          {
            class: m(e.n("toolbar"))
          },
          [q(e.$slots, "cancel", {}, () => [ne(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: ce(() => [he(
                x(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), q(e.$slots, "title", {}, () => [z(
            "div",
            {
              class: m(e.n("title"))
            },
            x(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), q(e.$slots, "confirm", {}, () => [ne(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: ce(() => [he(
                x(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
        ), z(
          "div",
          {
            class: m(e.n("columns")),
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(C(!0), M(
            Te,
            null,
            Ne(e.scrollColumns, (a) => (C(), M(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Vn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [z(
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
                [(C(!0), M(
                  Te,
                  null,
                  Ne(a.column.texts, (t) => (C(), M(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: K({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [z(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      x(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                Ip
              )],
              42,
              Mp
            ))),
            128
          )), z(
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
          ), z(
            "div",
            {
              class: m(e.n("mask")),
              style: K({
                backgroundSize: "100% " + (e.columnHeight - e.optionHeight) / 2 + "px"
              })
            },
            null,
            6
          )],
          6
        )],
        16
      )]),
      _: 3
    },
    16
  );
}
const vr = te({
  render: Np,
  name: "VarPicker",
  components: {
    VarButton: en,
    VarPopup: pn
  },
  inheritAttrs: !1,
  props: Op,
  setup(e) {
    var n = E([]), r = W(() => Ie(e.optionHeight)), a = W(() => Ie(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = ($, O) => {
      O.scrollEl = $;
    }, s = ($) => {
      N(e["onUpdate:show"], $);
    }, u = ($) => {
      var O = r.value + t.value, R = t.value - $.column.texts.length * r.value;
      $.translate >= O && ($.translate = O), $.translate <= R && ($.translate = R);
    }, d = ($, O) => {
      var {
        length: R
      } = $.column.texts;
      return O = O >= R ? R - 1 : O, O = O <= 0 ? 0 : O, O;
    }, f = ($) => {
      var O = Math.round((t.value - $.translate) / r.value);
      return d($, O);
    }, v = () => {
      var $ = n.value.map((R) => R.column.texts[R.index]), O = n.value.map((R) => R.index);
      return {
        texts: $,
        indexes: O
      };
    }, c = function($, O, R, Y) {
      Y === void 0 && (Y = !1);
      var j = t.value - d($, O) * r.value;
      j === $.translate && ($.scrolling = !1, !Y && B($)), $.translate = j, $.duration = R;
    }, p = ($, O, R) => {
      $.translate += Math.abs(O / R) / 3e-3 * (O < 0 ? -1 : 1);
    }, y = ($, O) => {
      O.touching = !0, O.scrolling = !1, O.duration = 0, O.translate = Et(O.scrollEl);
    }, b = ($, O) => {
      if (!!O.touching) {
        var {
          clientY: R
        } = $.touches[0], Y = O.prevY !== void 0 ? R - O.prevY : 0;
        O.prevY = R, O.translate += Y, u(O);
        var j = performance.now();
        j - O.momentumTime > Ro && (O.momentumTime = j, O.momentumPrevY = O.translate);
      }
    }, T = ($, O) => {
      O.touching = !1, O.scrolling = !0, O.prevY = void 0;
      var R = O.translate - O.momentumPrevY, Y = performance.now() - O.momentumTime, j = Math.abs(R) >= Vp && Y <= Ro;
      j && p(O, R, Y), O.index = f(O), c(O, O.index, j ? 1e3 : 200);
    }, S = ($) => {
      $.scrolling = !1, B($);
    }, h = ($) => $.map((O, R) => {
      var Y, j = Se(O) ? {
        texts: O
      } : O, F = {
        id: Uo++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Y = j.initialIndex) != null ? Y : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: j,
        scrollEl: null,
        scrolling: !1
      };
      return c(F, F.index, 0, !0), F;
    }), g = ($) => {
      var O = [];
      return V(O, $, 0, !0), O;
    }, V = function($, O, R, Y) {
      if (Y === void 0 && (Y = !1), Se(O) && O.length) {
        var j, F = Y && (j = e.cascadeInitialIndexes[$.length]) != null ? j : 0, Z = {
          id: Uo++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: F,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: O.map((H) => H[e.textKey])
          },
          columns: O,
          scrollEl: null,
          scrolling: !1
        };
        $.push(Z), c(Z, Z.index, 0, !0), V($, Z.columns[Z.index].children, R + 1, Y);
      }
    }, w = ($) => {
      n.value.splice(n.value.indexOf($) + 1), V(n.value, $.columns[$.index].children, $.columnIndex + 1);
    }, B = ($) => {
      var {
        cascade: O,
        onChange: R
      } = e;
      O && w($);
      var Y = n.value.some((H) => H.scrolling);
      if (!Y) {
        var {
          texts: j,
          indexes: F
        } = v(), Z = F.every((H, X) => H === o[X]);
        Z || (o = [...F], N(R, j, F));
      }
    }, k = () => {
      if (e.cascade) {
        var $ = n.value.find((O) => O.scrolling);
        $ && ($.translate = Et($.scrollEl), $.index = f($), c($, $.index, 0, !0), $.scrolling = !1, w($));
      } else
        n.value.forEach((O) => {
          O.translate = Et(O.scrollEl), O.index = f(O), c(O, O.index, 0);
        });
    }, D = () => {
      k();
      var {
        texts: $,
        indexes: O
      } = v();
      o = [...O], N(e.onConfirm, $, O);
    }, P = () => {
      k();
      var {
        texts: $,
        indexes: O
      } = v();
      o = [...O], N(e.onCancel, $, O);
    };
    return re(() => e.columns, ($) => {
      n.value = e.cascade ? g(Gi($)) : h(Gi($));
      var {
        indexes: O
      } = v();
      o = [...O];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Pp,
      classes: Ep,
      pack: Ue,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: je,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: b,
      handleTouchend: T,
      handleTransitionend: S,
      confirm: D,
      cancel: P,
      dt: vt
    };
  }
});
var Qe;
function gr(e) {
  return new Promise((n) => {
    gr.close();
    var r = Se(e) ? {
      columns: e
    } : e, a = De(r);
    a.dynamic = !0, a.teleport = "body", Qe = a;
    var {
      unmountInstance: t
    } = Fa(vr, a, {
      onConfirm: (i, o) => {
        a.onConfirm == null || a.onConfirm(i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, Qe === a && (Qe = null);
      },
      onCancel: (i, o) => {
        a.onCancel == null || a.onCancel(i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, Qe === a && (Qe = null);
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n({
          state: "close"
        }), Qe === a && (Qe = null);
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), Qe === a && (Qe = null);
      },
      onRouteChange: () => {
        t(), Qe === a && (Qe = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  });
}
vr.install = function(e) {
  e.component(vr.name, vr);
};
gr.Component = vr;
gr.install = function(e) {
  e.component(vr.name, vr);
};
gr.close = () => {
  if (Qe != null) {
    var e = Qe;
    Qe = null, Oe().then(() => {
      e.show = !1;
    });
  }
};
function Dp(e) {
  return ["linear", "circle"].includes(e);
}
var Bp = {
  mode: {
    type: String,
    default: "linear",
    validator: Dp
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
  n: Ap,
  classes: zp
} = ee("progress"), Fp = ["viewBox"], Lp = ["cx", "cy", "r", "stroke-width"], Rp = ["cx", "cy", "r", "stroke-width"];
function Up(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [z(
        "div",
        {
          class: m(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (C(), M(
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
        )) : Q("v-if", !0), z(
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
        )],
        6
      ), e.label ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [he(
          x(e.linearProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.mode === "circle" ? (C(), M(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(C(), M(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (C(), M(
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
          Lp
        )) : Q("v-if", !0), z(
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
          Rp
        )],
        14,
        Fp
      )), e.label ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [he(
          x(e.circleProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      6
    )) : Q("v-if", !0)],
    2
  );
}
const Kr = te({
  render: Up,
  name: "VarProgress",
  props: Bp,
  setup(e) {
    var n = W(() => {
      var a = A(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = W(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + Ie(a) + " " + Ie(a), l = A(i) > 100 ? 100 : Math.round(A(i)), s = (Ie(a) - Ie(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: Ap,
      classes: zp,
      toSizeUnit: Ve,
      multiplySizeUnit: Xe,
      linearProps: n,
      circleProps: r
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var Yp = {
  modelValue: {
    type: Boolean
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  animationDuration: {
    type: [Number, String],
    default: 300
  },
  successDuration: {
    type: [Number, String],
    default: 2e3
  },
  bgColor: {
    type: String
  },
  successBgColor: {
    type: String
  },
  color: {
    type: String
  },
  successColor: {
    type: String
  },
  onRefresh: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function Yo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        Yo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Yo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Hp,
  classes: jp
} = ee("pull-refresh"), ka = 100, $a = -50, Wo = 150;
function Gp(e, n) {
  var r = ae("var-icon");
  return C(), M(
    "div",
    {
      ref: "freshNode",
      class: m(e.n()),
      onTouchstart: n[0] || (n[0] = function() {
        return e.touchStart && e.touchStart(...arguments);
      }),
      onTouchmove: n[1] || (n[1] = function() {
        return e.touchMove && e.touchMove(...arguments);
      }),
      onTouchend: n[2] || (n[2] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      }),
      onTouchcancel: n[3] || (n[3] = function() {
        return e.touchEnd && e.touchEnd(...arguments);
      })
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n("control"), "var-elevation--2", [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
      },
      [ne(
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
    ), q(e.$slots, "default")],
    34
  );
}
const Xr = te({
  render: Gp,
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: Yp,
  setup(e) {
    var n, r, a = E(null), t = E(0), i = E($a), o = E("arrow-down"), l = E("default"), s = E(!1), u = E(!0), d = W(() => l.value !== "loading" && l.value !== "success" && !e.disabled), f = W(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: v.value ? e.successBgColor : e.bgColor,
      color: v.value ? e.successColor : e.color
    })), v = W(() => l.value === "success"), c = () => new Promise((S) => {
      window.setTimeout(() => {
        u.value = !0, S();
      }, Wo);
    }), p = (S) => {
      !d.value || (l.value = "pulling", t.value = S.touches[0].clientY);
    }, y = (S) => {
      var h = ft(n);
      if (!(h > 0 || !d.value)) {
        h === 0 && i.value > $a && S.cancelable && S.preventDefault();
        var g = (S.touches[0].clientY - t.value) / 2 + $a;
        i.value = g >= ka ? ka : g, i.value >= ka * 0.2 ? (u.value = !1, o.value = "refresh", r = c()) : o.value = "arrow-down";
      }
    }, b = /* @__PURE__ */ function() {
      var S = Wp(function* () {
        if (!!d.value)
          if (s.value = !0, i.value >= ka * 0.2) {
            var h;
            yield r, l.value = "loading", i.value = ka * 0.3, (h = e["onUpdate:modelValue"]) == null || h.call(e, !0), e.onRefresh == null || e.onRefresh();
          } else
            l.value = "loosing", o.value = "arrow-down", i.value = $a, setTimeout(() => {
              s.value = !1;
            }, A(e.animationDuration));
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), T = () => {
      setTimeout(() => {
        l.value = "default", o.value = "arrow-down", s.value = !1;
      }, A(e.animationDuration));
    };
    return re(() => e.modelValue, (S) => {
      S === !1 && (s.value = !0, l.value = "success", o.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = $a, T();
      }, A(e.successDuration)));
    }), Fe(() => {
      n = Sa(a.value);
    }), {
      n: Hp,
      classes: jp,
      iconHasChanged: u,
      ICON_TRANSITION: Wo,
      refreshStatus: l,
      freshNode: a,
      touchStart: p,
      touchMove: y,
      touchEnd: b,
      iconName: o,
      controlStyle: f,
      isSuccess: v
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var qp = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, fs = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), cs = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Kp() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(fs), {
    length: r
  } = yn(cs);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Xp() {
  var {
    bindParent: e,
    parentProvider: n
  } = vn(fs), {
    index: r
  } = bn(cs);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Zp,
  classes: Jp
} = ee("radio");
function Qp(e, n) {
  var r = ae("var-icon"), a = ae("var-form-details"), t = Ge("ripple");
  return C(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [z(
      "div",
      Me({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [Ce((C(), M(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
          key: 0
        }, () => [ne(
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
        )]) : q(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ne(
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
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), z(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [q(e.$slots, "default")],
        2
      )],
      16
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Zr = te({
  render: Qp,
  name: "VarRadio",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  inheritAttrs: !1,
  props: qp,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Xp(), {
      form: o,
      bindForm: l
    } = Sn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: f
    } = wn(), v = (g) => {
      Oe(() => {
        var {
          validateTrigger: V,
          rules: w,
          modelValue: B
        } = e;
        u(V, g, w, B);
      });
    }, c = (g) => {
      var {
        checkedValue: V,
        onChange: w
      } = e;
      t && n.value === V || (n.value = g, N(e["onUpdate:modelValue"], n.value), N(w, n.value), t == null || t.onToggle(V), v("onChange"));
    }, p = (g) => {
      var {
        disabled: V,
        readonly: w,
        uncheckedValue: B,
        checkedValue: k,
        onClick: D
      } = e;
      o != null && o.disabled.value || V || (N(D, g), !(o != null && o.readonly.value || w) && (a.value = !0, c(r.value ? B : k)));
    }, y = (g) => {
      var {
        checkedValue: V,
        uncheckedValue: w
      } = e;
      n.value = g === V ? V : w;
    }, b = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, T = () => d(e.rules, e.modelValue), S = (g) => {
      var {
        uncheckedValue: V,
        checkedValue: w
      } = e, B = ![V, w].includes(g);
      B && (g = r.value ? V : w), c(g);
    };
    re(() => e.modelValue, (g) => {
      n.value = g;
    }, {
      immediate: !0
    });
    var h = {
      sync: y,
      validate: T,
      resetValidation: f,
      reset: b
    };
    return N(i, h), N(l, h), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Zp,
      classes: Jp,
      handleClick: p,
      toggle: S,
      reset: b,
      validate: T,
      resetValidation: f
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
function xp(e) {
  return ["horizontal", "vertical"].includes(e);
}
var _p = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: xp
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: eh,
  classes: nh
} = ee("radio-group");
function rh(e, n) {
  var r = ae("var-form-details");
  return C(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [q(e.$slots, "default")],
      2
    ), ne(
      r,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Jr = te({
  render: rh,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: We
  },
  props: _p,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Kp(), {
      bindForm: t
    } = Sn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = wn(), u = W(() => i.value), d = (b) => {
      Oe(() => {
        var {
          validateTrigger: T,
          rules: S,
          modelValue: h
        } = e;
        o(T, b, S, h);
      });
    }, f = () => r.forEach((b) => {
      var {
        sync: T
      } = b;
      return T(e.modelValue);
    }), v = (b) => {
      N(e["onUpdate:modelValue"], b), N(e.onChange, b), d("onChange");
    }, c = () => l(e.rules, e.modelValue), p = () => {
      N(e["onUpdate:modelValue"], void 0), s();
    };
    re(() => e.modelValue, f), re(() => n.value, f);
    var y = {
      onToggle: v,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return N(t, y), a(y), {
      errorMessage: i,
      n: eh,
      classes: nh,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var ah = {
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
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Ta
} = ee("rate"), th = ["onClick"];
function ih(e, n) {
  var r = ae("var-icon"), a = ae("var-form-details"), t = Ge("ripple");
  return C(), M(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [z(
      "div",
      {
        class: m(e.n())
      },
      [(C(!0), M(
        Te,
        null,
        Ne(e.toNumber(e.count), (i) => Ce((C(), M(
          "div",
          {
            key: i,
            style: K(e.getStyle(i)),
            class: m(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [ne(
            r,
            {
              class: m(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: K({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          th
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
      ))],
      2
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const Qr = te({
  render: ih,
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: We
  },
  directives: {
    Ripple: Re
  },
  props: ah,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = Sn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = wn(), l = (b) => {
      var {
        count: T,
        gap: S
      } = e;
      return {
        color: u(b).color,
        marginRight: b !== A(T) ? Ve(S) : 0
      };
    }, s = (b) => {
      var {
        name: T,
        color: S
      } = u(b);
      return {
        [Ta("content")]: !0,
        [Ta("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ta("--error")]: a.value,
        [Ta("--primary")]: T !== e.emptyIcon && !S
      };
    }, u = (b) => {
      var {
        modelValue: T,
        disabled: S,
        disabledColor: h,
        color: g,
        half: V,
        emptyColor: w,
        icon: B,
        halfIcon: k,
        emptyIcon: D
      } = e, P = g;
      return (S || n != null && n.disabled.value) && (P = h), b <= A(T) ? {
        color: P,
        name: B
      } : V && b <= A(T) + 0.5 ? {
        color: P,
        name: k
      } : {
        color: S || n != null && n.disabled.value ? h : w,
        name: D
      };
    }, d = (b, T) => {
      if (e.half) {
        var {
          offsetWidth: S
        } = T.target;
        T.offsetX <= Math.floor(S / 2) && (b -= 0.5);
      }
      N(e["onUpdate:modelValue"], b);
    }, f = () => i(e.rules, A(e.modelValue)), v = () => Oe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (b, T) => {
      var {
        readonly: S,
        disabled: h,
        onChange: g
      } = e;
      S || h || n != null && n.disabled.value || n != null && n.readonly.value || (d(b, T), N(g, b), v());
    }, p = () => {
      N(e["onUpdate:modelValue"], 0), o();
    }, y = {
      reset: p,
      validate: f,
      resetValidation: o
    };
    return N(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: p,
      validate: f,
      resetValidation: o,
      toSizeUnit: Ve,
      toNumber: A,
      n: Ta
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
function oh(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function lh(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var sh = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: oh
  },
  align: {
    type: String,
    default: "flex-start",
    validator: lh
  },
  onClick: {
    type: Function
  }
}, {
  n: uh,
  classes: dh
} = ee("row");
function vh(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box")),
      style: K({
        justifyContent: e.justify,
        alignItems: e.align,
        margin: e.average ? "0 -" + e.average + "px" : void 0
      }),
      onClick: n[0] || (n[0] = function() {
        return e.onClick && e.onClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const xr = te({
  render: vh,
  name: "VarRow",
  props: sh,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Yd(), t = W(() => {
      var l = Ie(e.gutter);
      return l / 2;
    }), i = () => {
      n.forEach((l) => {
        l.setPadding({
          left: t.value,
          right: t.value
        });
      });
    }, o = {
      computePadding: i
    };
    return re(() => a.value, i), re(() => e.gutter, i), r(o), {
      n: uh,
      classes: dh,
      average: t
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function fh(e) {
  return ["left", "right", "center"].includes(e);
}
var ch = {
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
    validator: fh
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: {
    type: Function
  },
  onBlur: {
    type: Function
  },
  onClick: {
    type: Function
  },
  onClear: {
    type: Function
  },
  onClose: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: Dt,
  classes: mh
} = ee("select"), ph = {
  key: 0
}, hh = {
  key: 1
};
function gh(e, n) {
  var r = ae("var-chip"), a = ae("var-icon"), t = ae("var-menu"), i = ae("var-form-details");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
        2
      ), z(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [ne(
          t,
          {
            "var-select-cover": "",
            class: m(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (o) => e.isFocus = o),
            onClose: e.handleBlur
          },
          {
            menu: ce(() => [z(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), "var-elevation--3"))
              },
              [q(e.$slots, "default")],
              2
            )]),
            default: ce(() => [z(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (C(), M("div", ph, [e.chip ? (C(), M(
                "div",
                {
                  key: 0,
                  class: m(e.n("chips"))
                },
                [(C(!0), M(
                  Te,
                  null,
                  Ne(e.labels, (o) => (C(), me(
                    r,
                    {
                      class: m(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Vn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: ce(() => [he(
                        x(o),
                        1
                      )]),
                      _: 2
                    },
                    1032,
                    ["class", "type", "onClose"]
                  ))),
                  128
                ))],
                2
              )) : (C(), M(
                "div",
                {
                  key: 1,
                  class: m(e.n("values"))
                },
                x(e.labels.join(e.separator)),
                3
              ))])) : (C(), M(
                "span",
                hh,
                x(e.label),
                1
              )), q(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [ne(
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
            ), z(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), "var--ellipsis", [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: K({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              x(e.placeholder),
              7
            )]),
            _: 3
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
      ), z(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable ? (C(), me(
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
        )) : Q("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [z(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: K({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : Q("v-if", !0), ne(
      i,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const _r = te({
  render: gh,
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Xn,
    VarChip: or,
    VarFormDetails: We
  },
  props: ch,
  setup(e) {
    var n = E(null), r = E(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = E(""), o = E([]), l = E("0px"), s = E(0), {
      bindForm: u,
      form: d
    } = Sn(), {
      length: f,
      options: v,
      bindOptions: c
    } = pp(), {
      errorMessage: p,
      validateWithTrigger: y,
      validate: b,
      resetValidation: T
    } = wn(), S = E(null), h = () => {
      var {
        multiple: L,
        modelValue: U
      } = e;
      if (L) {
        var J = U;
        o.value = J.map(w);
      }
      !L && !Un(U) && (i.value = w(U)), !L && Un(U) && (i.value = "");
    }, g = (L) => {
      Oe(() => {
        var {
          validateTrigger: U,
          rules: J,
          modelValue: ie
        } = e;
        y(U, L, J, ie);
      });
    }, V = (L) => {
      var {
        value: U,
        label: J
      } = L;
      return U.value != null ? U.value : J.value;
    }, w = (L) => {
      var U, J, ie = v.find((le) => {
        var {
          value: de
        } = le;
        return de.value === L;
      });
      return ie || (ie = v.find((le) => {
        var {
          label: de
        } = le;
        return de.value === L;
      })), (U = (J = ie) == null ? void 0 : J.label.value) != null ? U : "";
    }, B = () => {
      var {
        hint: L,
        modelValue: U
      } = e;
      if (!L && !Un(U))
        return Dt("--placeholder-hidden");
      if (L && (!Un(U) || r.value))
        return Dt("--placeholder-hint");
    }, k = () => n.value && window.getComputedStyle(n.value).width || "0px", D = () => {
      var {
        disabled: L,
        readonly: U,
        onFocus: J
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || L || U || (l.value = k(), s.value = Ie(e.offsetY), r.value = !0, N(J), g("onFocus"));
    }, P = () => {
      var {
        disabled: L,
        readonly: U,
        onBlur: J
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || L || U || (N(J), g("onBlur"));
    }, $ = (L) => {
      var {
        disabled: U,
        readonly: J,
        multiple: ie,
        onChange: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || J)) {
        var de = ie ? v.filter((be) => {
          var {
            selected: Le
          } = be;
          return Le.value;
        }).map(V) : V(L);
        N(e["onUpdate:modelValue"], de), N(le, de), g("onChange"), !ie && (r.value = !1);
      }
    }, O = () => {
      var {
        disabled: L,
        readonly: U,
        multiple: J,
        clearable: ie,
        onClear: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || L || U || !ie)) {
        var de = J ? [] : void 0;
        N(e["onUpdate:modelValue"], de), N(le, de), g("onClear");
      }
    }, R = (L) => {
      var {
        disabled: U,
        onClick: J
      } = e;
      d != null && d.disabled.value || U || (N(J, L), g("onClick"));
    }, Y = (L) => {
      var {
        disabled: U,
        readonly: J,
        modelValue: ie,
        onClose: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || J)) {
        var de = ie, be = v.find((Je) => {
          var {
            label: Pe
          } = Je;
          return Pe.value === L;
        }), Le = de.filter((Je) => {
          var Pe;
          return Je !== ((Pe = be.value.value) != null ? Pe : be.label.value);
        });
        N(e["onUpdate:modelValue"], Le), N(le, Le), g("onClose");
      }
    }, j = () => {
      var {
        multiple: L,
        modelValue: U
      } = e;
      if (L) {
        var J = U;
        v.forEach((ie) => ie.sync(J.includes(V(ie))));
      } else
        v.forEach((ie) => ie.sync(U === V(ie)));
      h();
    }, F = () => {
      l.value = k(), s.value = Ie(e.offsetY), r.value = !0;
    }, Z = () => {
      r.value = !1;
    }, H = () => b(e.rules, e.modelValue), X = () => {
      N(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    re(() => e.multiple, () => {
      var {
        multiple: L,
        modelValue: U
      } = e;
      if (L && !Se(U))
        throw Error("The modelValue must be an array when multiple is true");
    }), re(() => e.modelValue, j, {
      deep: !0
    }), re(() => f.value, j);
    var I = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: $,
      reset: X,
      validate: H,
      resetValidation: T
    };
    return c(I), N(u, I), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: S,
      n: Dt,
      classes: mh,
      computePlaceholderState: B,
      handleFocus: D,
      handleBlur: P,
      handleClear: O,
      handleClick: R,
      handleClose: Y,
      reset: X,
      validate: H,
      resetValidation: T,
      focus: F,
      blur: Z
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var yh = {
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
  n: bh,
  classes: wh
} = ee("skeleton");
function Sh(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.classes("var--box", e.n()))
    },
    [e.loading ? Q("v-if", !0) : (C(), M(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [q(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (C(), M(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: K({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [z(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : Q("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (C(), M(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (C(), M(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: K({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [z(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : Q("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (C(), M(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (C(), M(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: K({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [z(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : Q("v-if", !0), (C(!0), M(
            Te,
            null,
            Ne(e.toNumber(e.rows), (r, a) => (C(), M(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: K({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [z(
                "div",
                {
                  class: m(e.n("--animation"))
                },
                null,
                2
              )],
              6
            ))),
            128
          ))],
          2
        )) : Q("v-if", !0)],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.loading && e.fullscreen ? (C(), M(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: K({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [z(
        "div",
        {
          class: m(e.n("--animation"))
        },
        null,
        2
      )],
      6
    )) : Q("v-if", !0)],
    2
  );
}
const ea = te({
  render: Sh,
  name: "VarSkeleton",
  props: yh,
  setup() {
    return {
      n: bh,
      classes: wh,
      toSizeUnit: Ve,
      toNumber: A
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
function Ch(e) {
  return ["always", "normal", "never"].includes(e);
}
var kh = {
  modelValue: {
    type: [Number, Array],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 1
  },
  range: {
    type: Boolean,
    default: !1
  },
  labelVisible: {
    type: String,
    default: "normal",
    validator: Ch
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
  readonly: {
    type: Boolean,
    default: !1
  },
  rules: {
    type: Array
  },
  onChange: {
    type: Function
  },
  onStart: {
    type: Function
  },
  onEnd: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: $h,
  classes: Th
} = ee("slider"), Ee;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ee || (Ee = {}));
var Oh = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Ph(e, n) {
  var r = ae("var-form-details");
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [z(
        "div",
        {
          class: m(e.n("track"))
        },
        [z(
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
        ), z(
          "div",
          {
            class: m(e.n("track-fill")),
            style: K(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (C(!0), M(
        Te,
        null,
        Ne(e.thumbList, (a) => (C(), M(
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
          [q(e.$slots, "button", {
            currentValue: a.text
          }, () => [z(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), z(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), z(
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
            [z(
              "span",
              null,
              x(a.text),
              1
            )],
            6
          )])],
          46,
          Oh
        ))),
        128
      ))],
      2
    ), ne(
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
  );
}
const na = te({
  render: Ph,
  name: "VarSlider",
  components: {
    VarFormDetails: We
  },
  props: kh,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Sn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = wn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Oe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), f = E(0), v = E(!1), c = De({
      [Ee.First]: s(),
      [Ee.Second]: s()
    }), p = W(() => A(e.max) - A(e.min)), y = W(() => f.value / p.value * A(e.step)), b = W(() => {
      var {
        modelValue: H,
        range: X
      } = e, I = [];
      return X && Se(H) ? I = [{
        value: V(H[0]),
        enumValue: Ee.First,
        text: w(H[0])
      }, {
        value: V(H[1]),
        enumValue: Ee.Second,
        text: w(H[1])
      }] : He(H) && (I = [{
        value: V(H),
        enumValue: Ee.First,
        text: w(H)
      }]), I;
    }), T = W(() => {
      var {
        activeColor: H,
        range: X,
        modelValue: I
      } = e, L = X && Se(I) ? V(Math.min(I[0], I[1])) : 0, U = X && Se(I) ? V(Math.max(I[0], I[1])) - L : V(I);
      return {
        width: U + "%",
        left: L + "%",
        background: H
      };
    }), S = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), h = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), g = (H) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[H].active, V = (H) => {
      var {
        min: X,
        max: I
      } = e;
      return H < A(X) ? 0 : H > A(I) ? 100 : (H - A(X)) / p.value * 100;
    }, w = (H) => {
      if (!He(H))
        return 0;
      var X = H;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var I = parseInt("" + X, 10) === X;
      return I ? X : A(X.toPrecision(5));
    }, B = (H, X) => {
      var I = [], {
        step: L,
        range: U,
        modelValue: J,
        onChange: ie,
        min: le
      } = e, de = A(L), be = Math.round(H / y.value), Le = be * de + A(le), Je = c[X].percentValue * de + A(le);
      if (c[X].percentValue = be, U && Se(J) && (I = X === Ee.First ? [Le, J[1]] : [J[0], Le]), Je !== Le) {
        var Pe = U ? I.map((an) => w(an)) : w(Le);
        N(ie, Pe), N(e["onUpdate:modelValue"], Pe), u();
      }
    }, k = (H) => {
      if (!e.range)
        return Ee.First;
      var X = c[Ee.First].percentValue * y.value, I = c[Ee.Second].percentValue * y.value, L = Math.abs(H - X), U = Math.abs(H - I);
      return L <= U ? Ee.First : Ee.Second;
    }, D = (H, X) => {
      f.value || (f.value = d.value.offsetWidth), !(S.value || h.value) && (N(e.onStart), v.value = !0, c[X].startPosition = H.touches[0].clientX);
    }, P = (H, X) => {
      if (!(S.value || h.value || !v.value)) {
        var I = H.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, I <= 0 ? I = 0 : I >= f.value && (I = f.value), B(I, X);
      }
    }, $ = (H) => {
      var {
        range: X,
        modelValue: I,
        onEnd: L,
        step: U,
        min: J
      } = e;
      if (!(S.value || h.value)) {
        var ie = [];
        c[H].currentLeft = c[H].percentValue * y.value, c[H].active = !1;
        var le = c[H].percentValue * A(U) + A(J);
        X && Se(I) && (ie = H === Ee.First ? [le, I[1]] : [I[0], le]), N(L, X ? ie : le), v.value = !1;
      }
    }, O = (H) => {
      if (!(S.value || h.value) && !H.target.closest(".var-slider__thumb")) {
        var X = H.clientX - Hs(H.currentTarget), I = k(X);
        B(X, I), $(I);
      }
    }, R = () => {
      var H = A(e.step);
      return isNaN(H) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : H < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: H,
        modelValue: X
      } = e;
      return H && !Se(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !H && Se(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : H && Se(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, j = function(H, X) {
      H === void 0 && (H = e.modelValue), X === void 0 && (X = A(e.step));
      var I = (L) => {
        var {
          min: U,
          max: J
        } = e;
        return L < A(U) ? 0 : L > A(J) ? p.value / X : (L - A(U)) / X;
      };
      e.range && Se(H) ? (c[Ee.First].percentValue = I(H[0]), c[Ee.First].currentLeft = c[Ee.First].percentValue * y.value, c[Ee.Second].percentValue = I(H[1]), c[Ee.Second].currentLeft = c[Ee.Second].percentValue * y.value) : He(H) && (c[Ee.First].currentLeft = I(H) * y.value);
    }, F = () => {
      var H = e.range ? [0, 0] : 0;
      N(e["onUpdate:modelValue"], H), o();
    }, Z = {
      reset: F,
      validate: l,
      resetValidation: o
    };
    return N(n, Z), re([() => e.modelValue, () => e.step], (H) => {
      var [X, I] = H;
      !R() || !Y() || v.value || j(X, A(I));
    }), re(f, () => j()), Fe(() => {
      !R() || !Y() || (f.value = d.value.offsetWidth);
    }), {
      n: $h,
      classes: Th,
      Thumbs: Ee,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: S,
      errorMessage: a,
      thumbsProps: c,
      thumbList: b,
      multiplySizeUnit: Xe,
      toNumber: A,
      showLabel: g,
      start: D,
      move: P,
      end: $,
      click: O
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
function mi() {
  return mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, mi.apply(this, arguments);
}
function Eh(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Vh(e) {
  return Ui.includes(e);
}
var ms = {
  type: {
    type: String,
    validator: Vh
  },
  position: {
    type: String,
    default: "top",
    validator: Eh
  },
  content: {
    type: String
  },
  contentClass: {
    type: String
  },
  duration: {
    type: Number,
    default: 3e3
  },
  vertical: {
    type: Boolean,
    default: !1
  },
  loadingType: xe(Yn, "type"),
  loadingSize: xe(Yn, "size"),
  loadingRadius: xe(Yn, "radius"),
  loadingColor: mi({}, xe(Yn, "color"), {
    default: "currentColor"
  }),
  lockScroll: {
    type: Boolean,
    default: !1
  },
  show: {
    type: Boolean,
    default: !1
  },
  teleport: {
    type: String,
    default: "body"
  },
  forbidClick: {
    type: Boolean,
    default: !1
  },
  onOpen: {
    type: Function,
    default: () => {
    }
  },
  onOpened: {
    type: Function,
    default: () => {
    }
  },
  onClose: {
    type: Function,
    default: () => {
    }
  },
  onClosed: {
    type: Function,
    default: () => {
    }
  },
  "onUpdate:show": {
    type: Function
  },
  _update: {
    type: String
  }
}, {
  n: Mh,
  classes: Ih
} = ee("snackbar"), Nh = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Dh(e, n) {
  var r = ae("var-icon"), a = ae("var-loading");
  return Ce((C(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), "var-elevation--4", [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [z(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [q(e.$slots, "default", {}, () => [he(
          x(e.content),
          1
        )])],
        2
      ), z(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (C(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : Q("v-if", !0), e.type === "loading" ? (C(), me(
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
        )) : Q("v-if", !0), q(e.$slots, "action")],
        2
      )],
      6
    )],
    6
  )), [[za, e.show]]);
}
const ps = te({
  render: Dh,
  name: "VarSnackbarCore",
  components: {
    VarLoading: Cn,
    VarIcon: $e
  },
  props: ms,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = mt(() => e.show, 1);
    Ei(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? Nh[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        var o;
        e.type !== "loading" && ((o = e["onUpdate:show"]) == null || o.call(e, !1));
      }, e.duration);
    };
    return re(() => e.show, (o) => {
      o ? (e.onOpen == null || e.onOpen(), i()) : o === !1 && (clearTimeout(n.value), e.onClose == null || e.onClose());
    }), re(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Fe(() => {
      e.show && (e.onOpen == null || e.onOpen(), i());
    }), {
      SNACKBAR_TYPE: Ui,
      n: Mh,
      classes: Ih,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: Bh
} = ee("snackbar");
function Ah(e, n) {
  var r = ae("var-snackbar-core");
  return C(), me(
    st,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ne(
      je,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ce(() => [ne(
          r,
          Me(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ce(() => [q(e.$slots, "action")]),
            default: ce(() => [q(e.$slots, "default", {}, () => [he(
              x(e.content),
              1
            )])]),
            _: 3
          },
          16,
          ["class"]
        )]),
        _: 3
      },
      8,
      ["name", "onAfterEnter", "onAfterLeave"]
    )],
    8,
    ["to", "disabled"]
  );
}
const ra = te({
  render: Ah,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: ps
  },
  props: ms,
  setup() {
    var {
      disabled: e
    } = dl();
    return {
      n: Bh,
      disabled: e
    };
  }
});
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
function zh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ci(e);
}
var Ui = ["loading", "success", "warning", "info", "error"], Ho = 0, pi = !1, hi, wa = !1, un = De([]), Fh = {
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
}, Lh = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Rh = {
  setup() {
    return () => {
      var e = un.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), wa && (t.position = "top");
        var l = wa ? "relative" : "absolute", s = Da({
          position: l
        }, jh(t.position));
        return ne(ps, Me(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = ln.zIndex;
      return ne(zs, Me(Lh, {
        style: {
          zIndex: n
        },
        onAfterEnter: Uh,
        onAfterLeave: Yh
      }), zh(e) ? e : {
        default: () => [e]
      });
    };
  }
}, In = function(e) {
  var n = nn(e) || He(e) ? {
    content: String(e)
  } : e, r = De(Da({}, Fh, n));
  r.show = !0, pi || (pi = !0, hi = Fa(Rh).unmountInstance);
  var {
    length: a
  } = un, t = {
    id: Ho++,
    reactiveSnackOptions: r
  };
  if (a === 0 || wa)
    Wh(t);
  else {
    var i = "update-" + Ho;
    Hh(r, i);
  }
  return {
    clear() {
      !wa && un.length ? un[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ui.forEach((e) => {
  In[e] = (n) => ($i(n) ? n.type = e : n = {
    content: n,
    type: e
  }, In(n));
});
In.install = function(e) {
  e.component(ra.name, ra);
};
In.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== wa && (un.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), wa = e);
};
In.clear = function() {
  un.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
In.Component = ra;
function Uh(e) {
  var n = e.getAttribute("data-id"), r = un.find((a) => a.id === A(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function Yh(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = un.find((t) => t.id === A(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = un.every((t) => t.animationEnd);
  a && (hi == null || hi(), un = De([]), pi = !1);
}
function Wh(e) {
  un.push(e);
}
function Hh(e, n) {
  var [r] = un;
  r.reactiveSnackOptions = Da({}, r.reactiveSnackOptions, e), r._update = n;
}
function jh(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ra.install = function(e) {
  e.component(ra.name, ra);
};
var hs = (e) => ["mini", "small", "normal", "large"].includes(e), Gh = (e) => hs(e) || Se(e) || He(e) || nn(e), qh = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), Kh = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Gh
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
    validator: qh
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, {
  n: jo,
  classes: Xh
} = ee("space"), Zh = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
};
const aa = te({
  name: "VarSpace",
  props: Kh,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? Zh[i] : Se(i) ? i.map(Ie) : [Ie(i), Ie(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: f
      } = e, v = (i = N(r.default)) != null ? i : [], c = hs(f), [p, y] = a(f, c), b = (h) => {
        var g = [];
        return h.forEach((V) => {
          if (V.type !== Fs) {
            if (V.type === Te && Se(V.children)) {
              V.children.forEach((w) => {
                g.push(w);
              });
              return;
            }
            g.push(V);
          }
        }), g;
      };
      v = b(v);
      var T = v.length - 1, S = v.map((h, g) => {
        var V = d === "row" ? void 0 : "100%", w = "0";
        return d === "row" && (l === "start" || l === "center" || l === "end" ? g !== T ? w = p / 2 + "px " + y + "px " + p / 2 + "px 0" : w = p / 2 + "px 0" : l === "space-around" ? w = p / 2 + "px " + y / 2 + "px" : l === "space-between" && (g === 0 ? w = p / 2 + "px " + y / 2 + "px " + p / 2 + "px 0" : g === T ? w = p / 2 + "px 0 " + p / 2 + "px " + y / 2 + "px" : w = p / 2 + "px " + y / 2 + "px")), d === "column" && g !== T && (w = "0 0 " + p + "px 0"), ne("div", {
          style: {
            margin: w,
            width: V
          }
        }, [h]);
      });
      return ne("div", {
        class: Xh(jo(), "var--box", [o, jo("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "-" + p / 2 + "px 0" : void 0
        }
      }, [S]);
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
var Jh = {
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
}, gs = Symbol("STEPS_BIND_STEP_KEY"), ys = Symbol("STEPS_COUNT_STEP_KEY");
function Qh() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(gs), {
    length: r
  } = yn(ys);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function xh() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(gs), {
    index: r
  } = bn(ys);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: _h,
  classes: eg
} = ee("step"), ng = {
  key: 3
};
function rg(e, n) {
  var r = ae("var-icon");
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [z(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [z(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [z(
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
          [e.isActive ? (C(), me(
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
          )) : e.isCurrent && e.currentIcon ? (C(), me(
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
          )) : e.inactiveIcon ? (C(), me(
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
          )) : (C(), M(
            "span",
            ng,
            x(e.index + 1),
            1
          ))],
          6
        ), z(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [q(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? Q("v-if", !0) : (C(), M(
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
      ))],
      2
    )],
    2
  );
}
const ta = te({
  render: rg,
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: Jh,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = xh(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: f
    } = t, v = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, y = () => f(a.value), b = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(p), re(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var S = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + S + "px";
      }
    }), {
      n: _h,
      classes: eg,
      main: e,
      index: a,
      isActive: c,
      isCurrent: v,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: y,
      getRef: b
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
function ag(e) {
  return ["horizontal", "vertical"].includes(e);
}
var tg = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: ag
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: {
    type: Function
  }
}, {
  n: ig
} = ee("steps");
function og(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const ia = te({
  render: og,
  name: "VarSteps",
  props: tg,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = Qh(), l = (u) => {
      N(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: ig
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var {
  n: lg
} = ee("style-provider");
const oa = te({
  name: "VarStyleProvider",
  props: {
    styleVars: {
      type: Object,
      default: () => ({})
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => xo(e.tag, {
      class: lg(),
      style: sl(e.styleVars)
    }, N(r.default));
  }
});
var Bt = [];
function Ba(e) {
  Bt.forEach((r) => document.documentElement.style.removeProperty(r)), Bt.length = 0;
  var n = sl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Bt.push(a);
  });
}
Ba.Component = oa;
oa.install = function(e) {
  e.component(oa.name, oa);
};
Ba.install = function(e) {
  e.component(oa.name, oa);
};
var sg = {
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
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
}, {
  n: ug,
  classes: dg
} = ee("switch");
function vg(e, n) {
  var r = ae("var-loading"), a = ae("var-form-details"), t = Ge("ripple");
  return C(), M(
    "div",
    {
      class: m(e.n())
    },
    [z(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disable")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: K(e.styleComputed.switch)
      },
      [z(
        "div",
        {
          style: K(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), Ce((C(), M(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [z(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), "var-elevation--2", [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (C(), me(
            r,
            {
              key: 0,
              radius: e.radius,
              color: "currentColor"
            },
            null,
            8,
            ["radius"]
          )) : Q("v-if", !0)],
          6
        )],
        6
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
    ), ne(
      a,
      {
        "error-message": e.errorMessage
      },
      null,
      8,
      ["error-message"]
    )],
    2
  );
}
const la = te({
  render: vg,
  name: "VarSwitch",
  components: {
    VarLoading: Cn,
    VarFormDetails: We
  },
  directives: {
    Ripple: Re
  },
  props: sg,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = Sn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = wn(), l = () => i(e.rules, e.modelValue), s = () => Oe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: p,
        modelValue: y,
        color: b,
        closeColor: T,
        loadingColor: S,
        activeValue: h
      } = e;
      return {
        handle: {
          width: Xe(p),
          height: Xe(p),
          backgroundColor: y === h ? b : T,
          color: S
        },
        ripple: {
          left: y === h ? Xe(p, 0.5) : "-" + Xe(p, 0.5),
          color: y === h ? b : T || "#999",
          width: Xe(p, 2),
          height: Xe(p, 2)
        },
        track: {
          height: Xe(p, 0.72),
          width: Xe(p, 1.9),
          borderRadius: Xe(p, 2 / 3),
          filter: y === h || a != null && a.value ? "opacity(.6)" : "brightness(.6)",
          backgroundColor: y === h ? b : T
        },
        switch: {
          height: Xe(p, 1.2),
          width: Xe(p, 2)
        }
      };
    }), d = W(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Xe(p, 0.4);
    }), f = (p) => {
      var {
        onClick: y,
        onChange: b,
        disabled: T,
        loading: S,
        readonly: h,
        modelValue: g,
        activeValue: V,
        inactiveValue: w,
        "onUpdate:modelValue": B
      } = e;
      if (N(y, p), !(T || S || h || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var k = g === V ? w : V;
        N(b, k), N(B, k), s();
      }
    }, v = () => {
      N(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: v,
      validate: l,
      resetValidation: o
    };
    return N(n, c), {
      n: ug,
      classes: dg,
      switchActive: f,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var fg = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: {
    type: Function
  }
}, bs = Symbol("TABS_BIND_TAB_KEY"), ws = Symbol("TABS_COUNT_TAB_KEY");
function cg() {
  var {
    childProviders: e,
    bindChildren: n
  } = dn(bs), {
    length: r
  } = yn(ws);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function mg() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(bs), {
    index: r
  } = bn(ws);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: pg,
  classes: hg
} = ee("tab");
function gg(e, n) {
  var r = Ge("ripple");
  return Ce((C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box", e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: K({
        color: e.computeColorStyle()
      }),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [q(e.$slots, "default")],
    6
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const sa = te({
  render: gg,
  name: "VarTab",
  directives: {
    Ripple: Re
  },
  props: fg,
  setup(e) {
    var n = E(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = mg(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: f,
      disabledColor: v,
      itemDirection: c,
      resize: p
    } = o, y = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(y);
    var b = () => {
      var {
        disabled: h,
        name: g
      } = e;
      return h ? v.value : u.value === g || u.value === (i == null ? void 0 : i.value) ? d.value : f.value;
    }, T = () => {
      var {
        disabled: h,
        name: g
      } = e;
      return h ? "var-tab--disabled" : u.value === g || u.value === (i == null ? void 0 : i.value) ? "var-tab--active" : "var-tab--inactive";
    }, S = (h) => {
      var {
        disabled: g,
        name: V,
        onClick: w
      } = e;
      g || (w == null || w(V != null ? V : i.value, h), s(y));
    };
    return re(() => e.name, p), re(() => e.disabled, p), {
      n: pg,
      classes: hg,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: f,
      itemDirection: c,
      computeColorStyle: b,
      computeColorClass: T,
      handleClick: S
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Ss = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Cs = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function yg() {
  var {
    bindChildren: e,
    childProviders: n
  } = dn(Ss), {
    length: r
  } = yn(Cs);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function bg() {
  var {
    parentProvider: e,
    bindParent: n
  } = vn(Ss), {
    index: r
  } = bn(Cs);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var wg = {
  name: {
    type: [String, Number]
  }
}, {
  n: Sg,
  classes: Cg
} = ee("tab-item");
function kg(e, n) {
  var r = ae("var-swipe-item");
  return C(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ce(() => [e.initSlot ? q(e.$slots, "default", {
        key: 0
      }) : Q("v-if", !0)]),
      _: 3
    },
    8,
    ["class"]
  );
}
const ua = te({
  render: kg,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Gn
  },
  props: wg,
  setup(e) {
    var n = E(!1), r = E(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = bg(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: Sg,
      classes: Cg,
      current: n,
      initSlot: r
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
var {
  n: $g,
  classes: Tg
} = ee("table");
function Og(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var-elevation--1 var--box"))
    },
    [z(
      "div",
      {
        class: m(e.n("main"))
      },
      [z(
        "table",
        {
          class: m(e.n("table")),
          style: K({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [q(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [q(e.$slots, "footer")],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const da = te({
  render: Og,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: Ve,
      n: $g,
      classes: Tg
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function Go(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Pg = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: Go
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: Go
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
  safeArea: {
    type: Boolean,
    default: !1
  },
  offsetTop: xe(ns, "offsetTop"),
  onClick: {
    type: Function
  },
  onChange: {
    type: Function
  },
  "onUpdate:active": {
    type: Function
  }
};
function qo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        qo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        qo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Vg,
  classes: Mg
} = ee("tabs");
function Ig(e, n) {
  return C(), me(
    ut(e.sticky ? "var-sticky" : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: ce(() => [z(
        "div",
        Me({
          class: e.classes(e.n(), "var--box", e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, "var-elevation--4"], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [z(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [q(e.$slots, "default"), z(
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
          )],
          2
        )],
        16
      )]),
      _: 3
    },
    8,
    ["offset-top"]
  );
}
const va = te({
  render: Ig,
  name: "VarTabs",
  components: {
    VarSticky: qn
  },
  inheritAttrs: !1,
  props: Pg,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), i = E(!1), o = E(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), f = W(() => e.itemDirection), {
      tabList: v,
      bindTabList: c,
      length: p
    } = cg(), y = (k) => {
      var D, P = (D = k.name.value) != null ? D : k.index.value, {
        active: $,
        onChange: O,
        onClick: R
      } = e;
      N(e["onUpdate:active"], P), N(R, P), P !== $ && N(O, P);
    }, b = () => v.find((k) => {
      var {
        name: D
      } = k;
      return e.active === D.value;
    }), T = (k) => v.find((D) => {
      var {
        index: P
      } = D;
      return (k != null ? k : e.active) === P.value;
    }), S = () => {
      if (p.value !== 0) {
        var {
          active: k
        } = e;
        if (He(k)) {
          var D = k > p.value - 1 ? p.value - 1 : 0;
          return N(e["onUpdate:active"], D), T(D);
        }
      }
    }, h = () => {
      i.value = v.length >= 5;
    }, g = (k) => {
      var {
        element: D
      } = k, P = D.value;
      e.layoutDirection === "horizontal" ? (n.value = (P == null ? void 0 : P.offsetWidth) + "px", a.value = (P == null ? void 0 : P.offsetLeft) + "px") : (r.value = (P == null ? void 0 : P.offsetHeight) + "px", t.value = (P == null ? void 0 : P.offsetTop) + "px");
    }, V = (k) => {
      var {
        element: D
      } = k;
      if (!!i.value) {
        var P = o.value, $ = D.value;
        if (e.layoutDirection === "horizontal") {
          var O = $.offsetLeft + $.offsetWidth / 2 - P.offsetWidth / 2;
          xa(P, {
            left: O,
            animation: Zi
          });
        } else {
          var R = $.offsetTop + $.offsetHeight / 2 - P.offsetHeight / 2;
          xa(P, {
            top: R,
            animation: Zi
          });
        }
      }
    }, w = () => {
      var k = b() || T() || S();
      !k || k.disabled.value || (h(), g(k), V(k));
    }, B = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: f,
      resize: w,
      onTabClick: y
    };
    return c(B), re(() => p.value, /* @__PURE__ */ Eg(function* () {
      yield Mn(), w();
    })), re(() => e.active, w), Fe(() => window.addEventListener("resize", w)), xn(() => window.removeEventListener("resize", w)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: je,
      toSizeUnit: Ve,
      n: Vg,
      classes: Mg,
      resize: w
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var Ng = {
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
  "onUpdate:active": {
    type: Function
  }
}, {
  n: Dg
} = ee("tabs-items");
function Bg(e, n) {
  var r = ae("var-swipe");
  return C(), me(
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
      default: ce(() => [q(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const fa = te({
  render: Bg,
  name: "VarTabsItems",
  components: {
    VarSwipe: jn
  },
  props: Ng,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = yg(), i = (v) => r.find((c) => {
      var {
        name: p
      } = c;
      return v === p.value;
    }), o = (v) => r.find((c) => {
      var {
        index: p
      } = c;
      return v === p.value;
    }), l = (v) => i(v) || o(v), s = (v) => {
      var c, p = l(v);
      !p || (r.forEach((y) => {
        var {
          setCurrent: b
        } = y;
        return b(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (v) => {
      var c, p = r.find((b) => {
        var {
          index: T
        } = b;
        return T.value === v;
      }), y = (c = p.name.value) != null ? c : p.index.value;
      N(e["onUpdate:active"], y);
    }, d = () => n.value, f = {};
    return a(f), re(() => e.active, s), re(() => t.value, () => s(e.active)), {
      swipe: n,
      n: Dg,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
const Ag = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, zg = {
  "--badge-default-color": "#555"
}, Fg = {
  "--button-default-color": "#303030"
}, Lg = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Rg = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Ug = {
  "--checkbox-unchecked-color": "#fff"
}, Yg = {
  "--chip-default-color": "#555"
}, Wg = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, Hg = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, jg = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, Gg = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, qg = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, Kg = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, Xg = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, Zg = {
  "--popup-content-background-color": "#1e1e1e"
}, Jg = {
  "--pull-refresh-background": "#303030"
}, Qg = {
  "--radio-unchecked-color": "#fff"
}, xg = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, _g = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, ey = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, ny = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, ry = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, ay = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, ty = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, iy = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, oy = {
  "--tabs-background": "#1e1e1e"
}, ly = {
  "--app-bar-color": "#272727"
}, sy = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, uy = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, dy = {
  "--menu-background-color": "#272727"
};
function gi() {
  return gi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, gi.apply(this, arguments);
}
const vy = gi({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, Fg, Rg, Lg, ty, Hg, _g, oy, ry, Zg, jg, Ag, Yg, zg, iy, Wg, Jg, ny, ey, Kg, ay, qg, xg, Qg, Ug, Gg, Xg, ly, sy, uy, dy);
var yi = {
  dark: vy
}, on = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Ze = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Ko = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function fy(e) {
  return ["ampm", "24hr"].includes(e);
}
var cy = {
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
    validator: fy
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
  "onUpdate:modelValue": {
    type: Function
  },
  onChange: {
    type: Function
  }
}, ks = (e, n) => e === "24hr" || n === "am", Yi = (e, n, r) => {
  var a = on.findIndex((i) => A(i) === A(r)), t = ks(e, n) ? r : Ze[a];
  return {
    hourStr: t,
    hourNum: A(t)
  };
}, _e = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: A(n),
    minute: A(r),
    second: A(a)
  };
}, $s = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    max: l,
    min: s,
    disableHour: u
  } = e, {
    hourStr: d,
    hourNum: f
  } = Yi(t, i, o), v = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: y
    } = _e(l);
    v = p === f && a > y;
  }
  if (!l && s) {
    var {
      hour: b,
      minute: T
    } = _e(s);
    v = b === f && a < T;
  }
  if (l && s) {
    var {
      hour: S,
      minute: h
    } = _e(l), {
      hour: g,
      minute: V
    } = _e(s);
    v = g === f && a < V || S === f && a > h;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), v || c;
}, Ts = (e) => {
  var n, r, {
    time: a,
    format: t,
    ampm: i,
    hour: o,
    minute: l,
    max: s,
    min: u,
    disableHour: d
  } = e, {
    hourStr: f,
    hourNum: v
  } = Yi(t, i, o), c = !1, p = !1;
  if (d.includes(f))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: b,
      second: T
    } = _e(s);
    c = y === v && b < l || b === l && a > T;
  }
  if (!s && u) {
    var {
      hour: S,
      minute: h,
      second: g
    } = _e(u);
    c = S === v && h > l || h === l && a > g;
  }
  if (s && u) {
    var {
      hour: V,
      minute: w,
      second: B
    } = _e(s), {
      hour: k,
      minute: D,
      second: P
    } = _e(u);
    c = V === v && w < l || k === v && D > l || V === v && w === l && a > B || k === v && D === l && a < P;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: my,
  classes: py
} = ee("time-picker");
function hy(e, n) {
  return C(), M(
    "div",
    {
      class: m(e.n("clock"))
    },
    [z(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
    ), (C(!0), M(
      Te,
      null,
      Ne(e.timeScales, (r, a) => (C(), M(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: K(e.getStyle(a, r, !1))
        },
        x(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (C(), M(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(C(!0), M(
        Te,
        null,
        Ne(e.hours24, (r, a) => (C(), M(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: K(e.getStyle(a, r, !0))
          },
          x(r),
          7
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const gy = te({
  render: hy,
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
    } = n, a = E(null), t = E([]), i = E([]), o = W(() => ({
      transform: "rotate(" + A(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = W(() => {
      if (e.rad !== void 0) {
        var b = e.rad / 30;
        return b >= 0 ? b : b + 12;
      }
    }), s = W(() => e.type === "hour" ? on : Ko), u = (b, T) => {
      var S;
      b = (S = b) != null ? S : e.type === "minute" ? e.time.minute : e.time.second;
      var h = e.type === "minute" ? $s : Ts, g = {
        time: A(b),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: A(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(g, "minute"), h(g);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var b = e.isInner ? Ze[l.value] : s.value[l.value];
      return s.value === Ko ? u() ? "#bdbdbd" : e.color : v(b) ? "#bdbdbd" : e.color;
    }, f = (b, T) => T ? l.value === b && e.isInner : l.value === b && (!e.isInner || e.type !== "hour"), v = (b) => {
      if (e.type === "hour") {
        if (ks(e.format, e.ampm))
          return t.value.includes(b);
        var T = on.findIndex((S) => S === b);
        return i.value.includes(T);
      }
      return u(b, !0);
    }, c = (b, T, S) => {
      var h = 2 * Math.PI / 12 * b - Math.PI / 2, g = 50 * (1 + Math.cos(h)), V = 50 * (1 + Math.sin(h)), w = () => f(b, S) ? v(T) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: B,
        color: k
      } = w();
      return {
        left: g + "%",
        top: V + "%",
        backgroundColor: B,
        color: k
      };
    }, p = () => {
      var {
        width: b,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: b,
        height: T
      };
    }, y = () => {
      if (l.value !== void 0) {
        var b = e.ampm === "am" ? on : Ze;
        return fr(b[l.value], 2, "0");
      }
    };
    return re([l, () => e.isInner], (b, T) => {
      var [S, h] = b, [g, V] = T, w = S === g && h === V;
      if (!(w || e.type !== "hour" || l.value === void 0)) {
        var B = h ? Ze[l.value] : y(), k = e.useSeconds ? ":" + e.time.second : "", D = B + ":" + e.time.minute + k;
        e.preventNextUpdate || r("update", D), r("change-prevent-update");
      }
    }), re(() => e.rad, (b, T) => {
      if (!(e.type === "hour" || b === void 0 || T === void 0)) {
        var S = b / 6 >= 0 ? b / 6 : b / 6 + 60, h = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (S !== h) {
          var g, {
            hourStr: V
          } = Yi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var w = _().minute(S).format("mm"), B = e.useSeconds ? ":" + e.time.second : "";
            g = V + ":" + w + B;
          }
          if (e.type === "second") {
            var k = _().second(S).format("ss"), D = e.useSeconds ? ":" + k : "";
            g = V + ":" + e.time.minute + D;
          }
          r("update", g);
        }
      }
    }), re([() => e.max, () => e.min, () => e.allowedTime], (b) => {
      var [T, S, h] = b;
      if (t.value = [], T && !S) {
        var {
          hour: g
        } = _e(T), V = on.filter((Z) => A(Z) > g), w = Ze.filter((Z) => A(Z) > g);
        t.value = [...V, ...w];
      }
      if (!T && S) {
        var {
          hour: B
        } = _e(S), k = on.filter((Z) => A(Z) < B), D = Ze.filter((Z) => A(Z) < B);
        t.value = [...k, ...D];
      }
      if (T && S) {
        var {
          hour: P
        } = _e(T), {
          hour: $
        } = _e(S), O = on.filter((Z) => A(Z) < $ || A(Z) > P), R = Ze.filter((Z) => A(Z) < $ || A(Z) > P);
        t.value = [...O, ...R];
      }
      if (h != null && h.hours) {
        var {
          hours: Y
        } = h, j = on.filter((Z) => !Y(A(Z))), F = Ze.filter((Z) => !Y(A(Z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...j, ...F])];
      }
      i.value = t.value.map((Z) => Ze.findIndex((H) => Z === H)).filter((Z) => Z >= 0);
    }, {
      immediate: !0
    }), {
      n: my,
      classes: py,
      hours24: Ze,
      timeScales: s,
      inner: a,
      handStyle: o,
      disableHour: t,
      isActive: f,
      isDisable: v,
      getSize: p,
      getStyle: c,
      activeItemIndex: l
    };
  }
});
var {
  n: yy,
  classes: by
} = ee("time-picker"), wy = (e) => (_o(""), e = e(), el(), e), Sy = /* @__PURE__ */ wy(() => /* @__PURE__ */ z(
  "span",
  null,
  ":",
  -1
)), Cy = {
  key: 0
};
function ky(e, n) {
  var r = ae("clock");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, "var-elevation--2"])),
      ref: "picker"
    },
    [z(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [z(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [z(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          x(e.time.hour),
          3
        ), Sy, z(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          x(e.time.minute),
          3
        ), e.useSeconds ? (C(), M("span", Cy, ":")) : Q("v-if", !0), e.useSeconds ? (C(), M(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          x(e.time.second),
          3
        )) : Q("v-if", !0)],
        2
      ), e.format === "ampm" ? (C(), M(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [z(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), z(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
        )],
        2
      )) : Q("v-if", !0)],
      6
    ), z(
      "div",
      {
        class: m(e.n("body"))
      },
      [z(
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
        [ne(
          je,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ce(() => [(C(), me(
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
          },
          8,
          ["name"]
        )],
        34
      )],
      2
    )],
    2
  );
}
const ca = te({
  render: ky,
  name: "VarTimePicker",
  components: {
    Clock: gy
  },
  props: cy,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), i = E(!1), o = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), f = E(0), v = E("hour"), c = E("am"), p = E(!1), y = E(!1), b = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = De({
      x: 0,
      y: 0
    }), S = De({
      x: [],
      y: []
    }), h = W(() => v.value === "hour" ? u.value : v.value === "minute" ? d.value : f.value), g = (I) => {
      N(e["onUpdate:modelValue"], I), N(e.onChange, I);
    }, V = (I) => I * 57.29577951308232, w = (I) => {
      l.value = !1, y.value = !1, v.value = I;
    }, B = (I) => {
      var {
        disableHour: L
      } = a.value, U = on.findIndex((le) => A(le) === A(b.value.hour)), J = I === "am" ? on : Ze, ie = [...J.slice(U), ...J.slice(0, U)];
      return ie.find((le, de) => (i.value = de !== 0, !L.includes(le)));
    }, k = (I) => {
      if (!e.readonly) {
        c.value = I;
        var L = B(I);
        if (!!L) {
          var U = e.useSeconds ? ":" + b.value.second : "", J = fr(L, 2, "0") + ":" + b.value.minute + U;
          g(J);
        }
      }
    }, D = (I, L) => {
      var U = I >= S.x[0] && I <= S.x[1], J = L >= S.y[0] && L <= S.y[1];
      return U && J;
    }, P = (I) => {
      var L = e.format === "24hr" ? "HH" : "hh", {
        hour: U,
        minute: J,
        second: ie
      } = _e(I);
      return {
        hour: _().hour(U).format(L),
        minute: _().minute(J).format("mm"),
        second: _().second(ie).format("ss")
      };
    }, $ = (I) => {
      var L = I / 30;
      return L >= 0 ? L : L + 12;
    }, O = () => {
      var {
        width: I,
        height: L
      } = a.value.getSize(), U = T.x - I / 2 - 8, J = T.x + I / 2 + 8, ie = T.y - L / 2 - 8, le = T.y + L / 2 + 8;
      return {
        rangeXMin: U,
        rangeXMax: J,
        rangeYMin: ie,
        rangeYMax: le
      };
    }, R = (I, L, U) => {
      var {
        disableHour: J
      } = a.value;
      o.value = D(I, L);
      var ie = Math.round(U / 30) * 30 + 90, le = $(ie), de = t.value ? on[le] : Ze[le];
      if (J.includes(de) || (t.value = e.format === "24hr" ? D(I, L) : !1), t.value === o.value) {
        var be = t.value || c.value === "pm" ? Ze[le] : on[le];
        p.value = J.includes(be), !p.value && (u.value = ie, l.value = !0);
      }
    }, Y = (I) => {
      var {
        disableHour: L
      } = a.value, U = Math.round(I / 6) * 6 + 90, J = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: L,
        allowedTime: e.allowedTime
      };
      y.value = $s(ie), !y.value && (d.value = U, s.value = !0);
    }, j = (I) => {
      var {
        disableHour: L
      } = a.value, U = Math.round(I / 6) * 6 + 90, J = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: J,
        format: e.format,
        ampm: c.value,
        hour: b.value.hour,
        minute: A(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: L,
        allowedTime: e.allowedTime
      };
      Ts(ie) || (f.value = U);
    }, F = () => {
      var {
        left: I,
        top: L,
        width: U,
        height: J
      } = n.value.getBoundingClientRect();
      if (T.x = I + U / 2, T.y = L + J / 2, v.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: le,
          rangeYMin: de,
          rangeYMax: be
        } = O();
        S.x = [ie, le], S.y = [de, be];
      }
    }, Z = (I) => {
      if (I.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: L,
          clientY: U
        } = I.touches[0], J = L - T.x, ie = U - T.y, le = Math.round(V(Math.atan2(ie, J)));
        v.value === "hour" ? R(L, U, le) : v.value === "minute" ? Y(le) : j(le);
      }
    }, H = () => {
      if (!e.readonly) {
        if (v.value === "hour" && l.value) {
          v.value = "minute";
          return;
        }
        v.value === "minute" && e.useSeconds && s.value && (v.value = "second");
      }
    }, X = () => {
      i.value = !1;
    };
    return re(() => e.modelValue, (I) => {
      if (I) {
        var {
          hour: L,
          minute: U,
          second: J
        } = _e(I), ie = _().hour(L).format("hh"), le = _().hour(L).format("HH"), de = _().minute(U).format("mm"), be = _().second(J).format("ss");
        u.value = (ie === "12" ? 0 : A(ie)) * 30, d.value = A(de) * 6, f.value = A(be) * 6, b.value = P(I), e.format !== "24hr" && (c.value = fr("" + L, 2, "0") === le && Ze.includes(le) ? "pm" : "am"), t.value = e.format === "24hr" && Ze.includes(le);
      }
    }, {
      immediate: !0
    }), {
      n: yy,
      classes: by,
      getRad: h,
      time: b,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: v,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: Z,
      checkPanel: w,
      checkAmpm: k,
      end: H,
      update: g,
      changePreventUpdate: X
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
var $y = {
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
  onBeforeRead: {
    type: Function
  },
  onAfterRead: {
    type: Function
  },
  onBeforeRemove: {
    type: Function
  },
  onRemove: {
    type: Function
  },
  onOversize: {
    type: Function
  },
  "onUpdate:modelValue": {
    type: Function
  }
};
function Xo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Xo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Xo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Ty,
  classes: Oy
} = ee("uploader"), Py = 0, Ey = ["onClick"], Vy = ["onClick"], My = ["src", "alt"], Iy = ["multiple", "accept", "capture", "disabled"], Ny = ["src"];
function Dy(e, n) {
  var r = ae("var-icon"), a = ae("var-form-details"), t = ae("var-popup"), i = Ge("ripple");
  return C(), M(
    "div",
    {
      class: m(e.classes(e.n(), "var--box"))
    },
    [z(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(C(!0), M(
        Te,
        null,
        Ne(e.files, (o) => Ce((C(), M(
          "div",
          {
            class: m(e.classes(e.n("file"), "var-elevation--2", [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [z(
            "div",
            {
              class: m(e.n("file-name"))
            },
            x(o.name || o.url),
            3
          ), e.removable ? (C(), M(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Vn((l) => e.handleRemove(o), ["stop"])
            },
            [ne(
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
            Vy
          )) : Q("v-if", !0), o.cover ? (C(), M(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: K({
                objectFit: o.fit
              }),
              src: o.cover,
              alt: o.name
            },
            null,
            14,
            My
          )) : Q("v-if", !0), z(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          Ey
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? Ce((C(), M(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " var-elevation--2"], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [z(
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
          Iy
        ), q(e.$slots, "default", {}, () => [ne(
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
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : Q("v-if", !0)],
      2
    ), ne(
      a,
      {
        "error-message": e.errorMessage,
        "maxlength-text": e.maxlengthText
      },
      null,
      8,
      ["error-message", "maxlength-text"]
    ), ne(
      t,
      {
        class: m(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (o) => e.showPreview = o),
        onClosed: n[3] || (n[3] = (o) => e.currentPreview = null)
      },
      {
        default: ce(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (C(), M(
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
            Ny
          )) : Q("v-if", !0)];
        }),
        _: 1
      },
      8,
      ["class", "show"]
    )],
    2
  );
}
const ma = te({
  render: Dy,
  name: "VarUploader",
  directives: {
    Ripple: Re
  },
  components: {
    VarIcon: $e,
    VarPopup: pn,
    VarFormDetails: We
  },
  props: $y,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = W(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: j
        }
      } = e;
      return He(Y) ? j + " / " + Y : "";
    }), {
      form: i,
      bindForm: o
    } = Sn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = wn(), f = W(() => {
      var {
        modelValue: Y,
        hideList: j
      } = e;
      return j ? [] : Y;
    }), v = () => {
      n.value.click();
    }, c = (Y) => {
      var {
        disabled: j,
        readonly: F,
        previewed: Z
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || j || F || !Z)) {
        var {
          url: H
        } = Y;
        if (nn(H) && Ki(H)) {
          Jn(H);
          return;
        }
        nn(H) && Xi(H) && (a.value = Y, r.value = !0);
      }
    }, p = (Y) => ({
      id: Py++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), y = (Y) => {
      var j = Y.target, {
        files: F
      } = j;
      return Array.from(F);
    }, b = (Y) => new Promise((j) => {
      var F = new FileReader();
      F.onload = () => {
        var Z = F.result;
        Y.file.type.startsWith("image") && (Y.cover = Z), Y.url = Z, j(Y);
      }, F.readAsDataURL(Y.file);
    }), T = (Y) => Y.map(b), S = (Y) => {
      var {
        onBeforeRead: j
      } = e;
      return Y.map((F) => new Promise((Z) => {
        var H = j ? j(De(F)) : !0;
        Promise.resolve(H).then((X) => Z({
          valid: X,
          varFile: F
        }));
      }));
    }, h = /* @__PURE__ */ function() {
      var Y = Zo(function* (j) {
        var {
          maxsize: F,
          maxlength: Z,
          modelValue: H,
          onOversize: X,
          onAfterRead: I,
          readonly: L,
          disabled: U
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || U || L)) {
          var J = (Pe) => Pe.filter((an) => an.file.size > A(F) ? (N(X, De(an)), !1) : !0), ie = (Pe) => {
            var an = Math.min(Pe.length, A(Z) - H.length);
            return Pe.slice(0, an);
          }, le = y(j), de = le.map(p);
          de = F != null ? J(de) : de, de = Z != null ? ie(de) : de;
          var be = yield Promise.all(T(de)), Le = yield Promise.all(S(be)), Je = Le.filter((Pe) => {
            var {
              valid: an
            } = Pe;
            return an;
          }).map((Pe) => {
            var {
              varFile: an
            } = Pe;
            return an;
          });
          N(e["onUpdate:modelValue"], [...H, ...Je]), j.target.value = "", Je.forEach((Pe) => N(I, De(Pe)));
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), g = /* @__PURE__ */ function() {
      var Y = Zo(function* (j) {
        var {
          disabled: F,
          readonly: Z,
          modelValue: H,
          onBeforeRemove: X,
          onRemove: I
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || F || Z) && !(X && !(yield X(j)))) {
          var L = H.filter((U) => U !== j);
          N(I, j), D("onRemove"), N(e["onUpdate:modelValue"], L);
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), V = () => e.modelValue.filter((Y) => Y.state === "success"), w = () => e.modelValue.filter((Y) => Y.state === "error"), B = () => e.modelValue.filter((Y) => Y.state === "loading"), k = {
      getSuccess: V,
      getError: w,
      getLoading: B
    }, D = (Y) => {
      Oe(() => {
        var {
          validateTrigger: j,
          rules: F,
          modelValue: Z
        } = e;
        s(j, Y, F, Z, k);
      });
    }, P = !1, $ = () => u(e.rules, e.modelValue, k), O = () => {
      P = !0, N(e["onUpdate:modelValue"], []), d();
    }, R = {
      validate: $,
      resetValidation: d,
      reset: O
    };
    return N(o, R), re(() => e.modelValue, () => {
      !P && D("onChange"), P = !1;
    }, {
      deep: !0
    }), {
      n: Ty,
      classes: Oy,
      input: n,
      files: f,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: Xi,
      isHTMLSupportImage: Ki,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: v,
      handleChange: h,
      handleRemove: g,
      getSuccess: V,
      getError: w,
      getLoading: B,
      validate: $,
      resetValidation: d,
      reset: O
    };
  }
});
ma.install = function(e) {
  e.component(ma.name, ma);
};
function By(e) {
  cr.install && e.use(cr), Pr.install && e.use(Pr), Er.install && e.use(Er), ar.install && e.use(ar), Vr.install && e.use(Vr), Mr.install && e.use(Mr), en.install && e.use(en), Ir.install && e.use(Ir), tr.install && e.use(tr), ir.install && e.use(ir), Nr.install && e.use(Nr), or.install && e.use(or), Dr.install && e.use(Dr), Br.install && e.use(Br), Ar.install && e.use(Ar), ln.install && e.use(ln), zr.install && e.use(zr), Fr.install && e.use(Fr), Lr.install && e.use(Lr), mr.install && e.use(mr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), We.install && e.use(We), $e.install && e.use($e), Yr.install && e.use(Yr), Jn.install && e.use(Jn), Wr.install && e.use(Wr), Hr.install && e.use(Hr), dr.install && e.use(dr), ot.install && e.use(ot), jr.install && e.use(jr), Cn.install && e.use(Cn), Yt.install && e.use(Yt), Xn.install && e.use(Xn), Gr.install && e.use(Gr), qr.install && e.use(qr), gr.install && e.use(gr), pn.install && e.use(pn), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), Qr.install && e.use(Qr), Re.install && e.use(Re), xr.install && e.use(xr), _r.install && e.use(_r), ea.install && e.use(ea), na.install && e.use(na), In.install && e.use(In), aa.install && e.use(aa), ta.install && e.use(ta), ia.install && e.use(ia), qn.install && e.use(qn), Ba.install && e.use(Ba), jn.install && e.use(jn), Gn.install && e.use(Gn), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), yi.install && e.use(yi), ca.install && e.use(ca), ma.install && e.use(ma);
}
const zy = {
  install: By,
  ActionSheet: cr,
  AppBar: Pr,
  BackTop: Er,
  Badge: ar,
  BottomNavigation: Vr,
  BottomNavigationItem: Mr,
  Button: en,
  Card: Ir,
  Cell: tr,
  Checkbox: ir,
  CheckboxGroup: Nr,
  Chip: or,
  Col: Dr,
  Collapse: Br,
  CollapseItem: Ar,
  Context: ln,
  Countdown: zr,
  Counter: Fr,
  DatePicker: Lr,
  Dialog: mr,
  Divider: Rr,
  Form: Ur,
  FormDetails: We,
  Icon: $e,
  Image: Yr,
  ImagePreview: Jn,
  IndexAnchor: Wr,
  IndexBar: Hr,
  Input: dr,
  Lazy: ot,
  List: jr,
  Loading: Cn,
  Locale: Yt,
  Menu: Xn,
  Option: Gr,
  Pagination: qr,
  Picker: gr,
  Popup: pn,
  Progress: Kr,
  PullRefresh: Xr,
  Radio: Zr,
  RadioGroup: Jr,
  Rate: Qr,
  Ripple: Re,
  Row: xr,
  Select: _r,
  Skeleton: ea,
  Slider: na,
  Snackbar: In,
  Space: aa,
  Step: ta,
  Steps: ia,
  Sticky: qn,
  StyleProvider: Ba,
  Swipe: jn,
  SwipeItem: Gn,
  Switch: la,
  Tab: sa,
  TabItem: ua,
  Table: da,
  Tabs: va,
  TabsItems: fa,
  Themes: yi,
  TimePicker: ca,
  Uploader: ma
};
export {
  cr as ActionSheet,
  Pr as AppBar,
  Er as BackTop,
  ar as Badge,
  Vr as BottomNavigation,
  Mr as BottomNavigationItem,
  en as Button,
  Ir as Card,
  tr as Cell,
  ir as Checkbox,
  Nr as CheckboxGroup,
  or as Chip,
  Dr as Col,
  Br as Collapse,
  Ar as CollapseItem,
  ln as Context,
  zr as Countdown,
  Fr as Counter,
  Lr as DatePicker,
  mr as Dialog,
  Rr as Divider,
  Ur as Form,
  We as FormDetails,
  $e as Icon,
  Yr as Image,
  Jn as ImagePreview,
  Wr as IndexAnchor,
  Hr as IndexBar,
  dr as Input,
  ot as Lazy,
  jr as List,
  Cn as Loading,
  Yt as Locale,
  Xn as Menu,
  Gr as Option,
  qr as Pagination,
  gr as Picker,
  pn as Popup,
  Kr as Progress,
  Xr as PullRefresh,
  Zr as Radio,
  Jr as RadioGroup,
  Qr as Rate,
  Re as Ripple,
  xr as Row,
  _r as Select,
  ea as Skeleton,
  na as Slider,
  In as Snackbar,
  aa as Space,
  ta as Step,
  ia as Steps,
  qn as Sticky,
  Ba as StyleProvider,
  jn as Swipe,
  Gn as SwipeItem,
  la as Switch,
  sa as Tab,
  ua as TabItem,
  da as Table,
  va as Tabs,
  fa as TabsItems,
  yi as Themes,
  ca as TimePicker,
  ma as Uploader,
  zy as default,
  By as install
};
