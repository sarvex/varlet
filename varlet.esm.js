import { reactive as Me, onMounted as Ue, onUnmounted as fr, ref as E, onActivated as Uo, onDeactivated as Yo, createApp as Ed, getCurrentInstance as Da, provide as Tl, computed as F, inject as Pl, nextTick as Ee, h as Ol, onBeforeUnmount as kt, isVNode as $t, watch as ie, onBeforeMount as Id, defineComponent as x, createVNode as re, Teleport as Aa, Transition as Ae, withDirectives as ke, vShow as za, mergeProps as Ve, openBlock as y, createBlock as pe, resolveDynamicComponent as La, normalizeClass as m, normalizeStyle as K, resolveComponent as le, resolveDirective as Xe, withCtx as ve, createElementVNode as A, renderSlot as H, toDisplayString as ne, createElementBlock as M, Fragment as Oe, renderList as Ne, createCommentVNode as _, onUpdated as Fo, createTextVNode as he, pushScopeId as ga, popScopeId as ya, withModifiers as On, normalizeProps as Vl, guardReactiveProps as Bd, vModelText as Nd, toRefs as Dd, withKeys as fi, toRaw as ci, TransitionGroup as Ad, Comment as zd } from "vue";
var Ml = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
}, aw = Me(Ml);
const sn = Me(Ml), Ze = (e) => typeof e == "string", Qt = (e) => typeof e == "boolean", Ke = (e) => typeof e == "number", Ho = (e) => Object.prototype.toString.call(e) === "[object Object]", Ld = (e) => typeof e == "object" && e !== null, be = (e) => Array.isArray(e), Rd = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Bn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Ze(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Qt(e) ? Number(e) : e, Tt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Wo = (e, n = 200) => {
  let r, a = 0;
  return function t(...o) {
    const i = Date.now(), l = i - a;
    a || (a = i), r && window.clearTimeout(r), l >= n ? (e.apply(this, o), a = i) : r = window.setTimeout(() => {
      t.apply(this, o);
    }, n - l);
  };
}, jo = () => typeof window < "u", mi = (e) => [...new Set(e)], Ud = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), Yd = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var pi = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), hi = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), Fd = (e) => {
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
      this.has(r) && Tt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, _t = (e) => e, gi = (e) => Math.pow(e, 3), El = (e) => e < 0.5 ? gi(e * 2) / 2 : 1 - gi((1 - e) * 2) / 2, Pt = (e, n) => e ?? n, Il = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, da = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function yi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Hd(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        yi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        yi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
function Wd(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function bi(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Ot(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Go(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function jd(e) {
  return xt.apply(this, arguments);
}
function xt() {
  return xt = Hd(function* (e) {
    yield Vn();
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
  }), xt.apply(this, arguments);
}
function Wt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function ba(e) {
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
function Gd(e) {
  for (var n = [], r = e; r !== window; )
    r = ba(r), n.push(r);
  return n;
}
function Bl(e, n) {
  if (Ze(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (Ld(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Nl = (e) => Ze(e) && e.endsWith("rem"), qd = (e) => Ze(e) && e.endsWith("px") || Ke(e), Kd = (e) => Ze(e) && e.endsWith("%"), Dl = (e) => Ze(e) && e.endsWith("vw"), Al = (e) => Ze(e) && e.endsWith("vh"), Xd = (e) => Ze(e) && e.startsWith("calc("), Zd = (e) => Ze(e) && e.startsWith("var("), De = (e) => {
  if (Ke(e))
    return e;
  if (qd(e))
    return +e.replace("px", "");
  if (Dl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Al(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Nl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ze(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return Kd(e) || Dl(e) || Al(e) || Nl(e) || Xd(e) || Zd(e) ? e : De(e) + "px";
}, xe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Tn(e) {
  var n = Il();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Jd(e) {
  var n = Il();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Vt(e) {
  Tn(() => {
    Tn(e);
  });
}
function Vn() {
  return new Promise((e) => {
    Tn(() => {
      Tn(e);
    });
  });
}
function Qd() {
  return new Promise((e) => {
    Tn(e);
  });
}
function Ga(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: o
  } = n, i = Date.now(), l = Ot(e), s = Go(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - i) / t;
      if (v < 1) {
        var f = l + (r - l) * o(v), c = s + (a - s) * o(v);
        e.scrollTo(c, f), Tn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Tn(d);
  });
}
function zl(e) {
  return Object.entries(e ?? {}).reduce((n, r) => {
    var [a, t] = r, o = a.startsWith("--") ? a : "--" + Ud(a);
    return n[o] = t, n;
  }, {});
}
function _d() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var xd = ["collect", "clear"];
function wi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ci(e) {
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
function ev(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, o;
  for (o = 0; o < a.length; o++)
    t = a[o], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function ct() {
  return ct = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ct.apply(this, arguments);
}
function qe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function nv(e) {
  var n = Ed(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Ra(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => Ol(e, ct({}, n, r));
    }
  }, {
    unmount: t
  } = nv(a);
  return {
    unmountInstance: t
  };
}
function rv(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      $t(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function hn(e) {
  var n = Me([]), r = Da(), a = () => {
    var l = rv(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, o = (l) => {
    Tt(n, l);
  };
  Tl(e, {
    collect: t,
    clear: o,
    instances: n
  });
  var i = F(() => n.length);
  return {
    length: i
  };
}
function gn(e) {
  if (!Ll(e))
    return {
      index: null
    };
  var n = Pl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, o = Da();
  Ue(() => {
    Ee().then(() => r(o));
  }), fr(() => {
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
    Tt(n, o);
  }, t = (o) => {
    Tl(e, ct({
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
  if (!Ll(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = Pl(e), {
    collect: r,
    clear: a
  } = n, t = ev(n, xd), o = (i) => {
    Ue(() => r(i)), kt(() => a(i));
  };
  return {
    parentProvider: t,
    bindParent: o
  };
}
function Ll(e) {
  var n = Da();
  return e in n.provides;
}
function yn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = Ci(function* (o, i, l) {
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
    var t = Ci(function* (o, i, l, s, u) {
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
function av(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), fr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function qo() {
  var e = E(!1);
  return Uo(() => {
    e.value = !1;
  }), Yo(() => {
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
var {
  n: Rl
} = ee("ripple"), Si = 250;
function tv(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function ov(e, n) {
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
function Ul(e) {
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
      } = ov(this, e), s = document.createElement("div");
      s.classList.add(Rl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), tv(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + o + "px, " + i + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function eo() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Rl());
    if (r.length) {
      var a = r[r.length - 1], t = Si - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var o;
          return (o = a.parentNode) == null ? void 0 : o.removeChild(a);
        }, Si);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Yl() {
  var e = this._ripple;
  _d() && e.touchmoveForbid && (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function iv(e, n) {
  var r, a, t;
  e._ripple = mt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: eo.bind(e)
  }), e.addEventListener("touchstart", Ul, {
    passive: !0
  }), e.addEventListener("touchmove", Yl, {
    passive: !0
  }), e.addEventListener("dragstart", eo, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function lv(e) {
  e.removeEventListener("touchstart", Ul), e.removeEventListener("touchmove", Yl), e.removeEventListener("dragstart", eo), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function sv(e, n) {
  var r, a, t, o, i, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (o = n.value) == null ? void 0 : o.disabled
  }, d = u.touchmoveForbid !== ((i = e._ripple) == null ? void 0 : i.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = mt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Fl = {
  mounted: iv,
  unmounted: lv,
  updated: sv,
  install(e) {
    e.directive("ripple", this);
  }
}, tw = Fl;
const We = Fl;
function uv(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Qa = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: uv
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
function Hl() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function et(e) {
  sn.locks[e] = 1, Hl();
}
function nt(e) {
  delete sn.locks[e], Hl();
}
function Mt(e, n) {
  var {
    uid: r
  } = Da();
  n && ie(n, (a) => {
    a === !1 ? nt(r) : a === !0 && e() === !0 && et(r);
  }), ie(e, (a) => {
    n && n() === !1 || (a === !0 ? et(r) : nt(r));
  }), Id(() => {
    n && n() === !1 || e() === !0 && et(r);
  }), fr(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), Uo(() => {
    n && n() === !1 || e() === !0 && et(r);
  }), Yo(() => {
    n && n() === !1 || e() === !0 && nt(r);
  });
}
function _a(e, n) {
  var r = E(sn.zIndex);
  return ie(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function no() {
  return no = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, no.apply(this, arguments);
}
function dv(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: In,
  classes: jt
} = ee("popup");
const cn = x({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Qa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = _a(() => e.show, 3), {
      disabled: o
    } = qo(), i = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      P(v), d && P(e["onUpdate:show"], !1);
    };
    Mt(() => e.show, () => e.lockScroll), ie(() => e.show, (d) => {
      P(d ? e.onOpen : e.onClose);
    }), av(() => P(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: jt(In("overlay"), d),
        style: no({
          zIndex: t.value - 1
        }, v),
        onClick: i
      }, null);
    }, s = () => re("div", Ve({
      class: jt(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")]),
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
        name: In("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(re("div", {
          class: jt(In("$--box"), In()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(Ae, {
          name: h || In("$-pop-" + C)
        }, {
          default: () => [f && s()]
        })]), [[za, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(Aa, {
          to: d,
          disabled: o.value
        }, dv(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
cn.install = function(e) {
  e.component(cn.name, cn);
};
var ow = cn, Wl = {
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
function ki(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vv(e) {
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
var {
  n: fv,
  classes: cv
} = ee("icon");
function mv(e, n) {
  return y(), pe(
    La(e.isURL(e.name) ? "img" : "i"),
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
var jl = x({
  name: "VarIcon",
  props: Wl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = vv(function* (o, i) {
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
      n: fv,
      classes: cv,
      nextName: n,
      shrinking: r,
      isURL: Rd,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
jl.render = mv;
const $e = jl;
$e.install = function(e) {
  e.component($e.name, $e);
};
var iw = $e;
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
var pv = ro({
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
}, qe(Qa, [
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
const Ko = {
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
function Xo() {
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
    e[o] = ao({}, e[o], i), a(o);
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
  add: Zo,
  use: Jo,
  merge: Kl
} = Xo();
Zo("zh-CN", Ko);
Jo("zh-CN");
var lw = {
  zhCN: Ko,
  enUS: Gl,
  packs: ql,
  pack: Fe,
  add: Zo,
  use: Jo,
  merge: Kl,
  useLocale: Xo
};
const to = {
  zhCN: Ko,
  enUS: Gl,
  packs: ql,
  pack: Fe,
  add: Zo,
  use: Jo,
  merge: Kl,
  useLocale: Xo
};
var {
  n: hv,
  classes: gv
} = ee("action-sheet"), yv = ["onClick"];
function bv(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Xe("ripple");
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
            yv
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
var Xl = x({
  name: "VarActionSheet",
  directives: {
    Ripple: We
  },
  components: {
    VarPopup: cn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: pv,
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
      n: hv,
      classes: gv,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Fe,
      dt: Pt,
      handleSelect: r
    };
  }
});
Xl.render = bv;
const xn = Xl;
var Kn;
function va(e) {
  return jo() ? new Promise((n) => {
    va.close();
    var r = Me(e);
    r.teleport = "body", Kn = r;
    var {
      unmountInstance: a
    } = Ra(xn, r, {
      onSelect: (t) => {
        P(r.onSelect, t), n(t);
      },
      onClose: () => {
        P(r.onClose), n("close");
      },
      onClosed: () => {
        P(r.onClosed), a(), Kn === r && (Kn = null);
      },
      onRouteChange: () => {
        a(), Kn === r && (Kn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
va.Component = xn;
xn.install = function(e) {
  e.component(xn.name, xn);
};
va.close = () => {
  if (Kn != null) {
    var e = Kn;
    Kn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
va.install = function(e) {
  e.component(xn.name, xn);
};
var sw = xn;
function wv(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Cv = {
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
    validator: wv
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
  n: Sv,
  classes: kv
} = ee("app-bar");
function $v(e, n) {
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
      )) : _("v-if", !0)],
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
    )) : _("v-if", !0), A(
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
      )) : _("v-if", !0), H(e.$slots, "right")],
      2
      /* CLASS */
    )],
    6
    /* CLASS, STYLE */
  );
}
var Zl = x({
  name: "VarAppBar",
  props: Cv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), o = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(o), Fo(o), {
      n: Sv,
      classes: kv,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Zl.render = $v;
const hr = Zl;
hr.install = function(e) {
  e.component(hr.name, hr);
};
var uw = hr;
function Tv(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Pv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Jn = {
  // loading类型
  type: {
    type: String,
    default: "circle",
    validator: Tv
  },
  radius: {
    type: [String, Number]
  },
  // loading尺寸
  size: {
    type: String,
    default: "normal",
    validator: Pv
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
  n: Ov,
  classes: Vv
} = ee("loading"), Mv = (e) => (ga(""), e = e(), ya(), e), Ev = /* @__PURE__ */ Mv(() => /* @__PURE__ */ A(
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
)), Iv = [Ev];
function Bv(e, n) {
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
          Iv,
          6
          /* CLASS, STYLE */
        )],
        2
        /* CLASS */
      )) : _("v-if", !0), (y(!0), M(
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
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Jl = x({
  name: "VarLoading",
  props: Jn,
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
      n: Ov,
      classes: Vv,
      multiplySizeUnit: xe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Jl.render = Bv;
const kn = Jl;
kn.install = function(e) {
  e.component(kn.name, kn);
};
var dw = kn;
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
function Nv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Dv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
function Av(e) {
  return ["button", "reset", "submit"].includes(e);
}
var zv = {
  type: {
    type: String,
    default: "default",
    validator: Nv
  },
  nativeType: {
    type: String,
    default: "button",
    validator: Av
  },
  size: {
    type: String,
    default: "normal",
    validator: Dv
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
  loadingType: qe(Jn, "type"),
  loadingSize: qe(Jn, "size"),
  loadingColor: oo({}, qe(Jn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: Lv,
  classes: Rv
} = ee("button"), Uv = ["type", "disabled"];
function Yv(e, n) {
  var r = le("var-loading"), a = Xe("ripple");
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
    )) : _("v-if", !0), A(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [H(e.$slots, "default")],
      2
      /* CLASS */
    )],
    46,
    Uv
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
var Ql = x({
  name: "VarButton",
  components: {
    VarLoading: kn
  },
  directives: {
    Ripple: We
  },
  props: zv,
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
      n: Lv,
      classes: Rv,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
Ql.render = Yv;
const nn = Ql;
nn.install = function(e) {
  e.component(nn.name, nn);
};
var vw = nn, Fv = {
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
  n: Hv,
  classes: Wv
} = ee("back-top");
function jv(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return y(), pe(
    Aa,
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
        onClick: n[0] || (n[0] = On(function() {
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
var _l = x({
  name: "VarBackTop",
  components: {
    VarButton: nn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Fv,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, o = (s) => {
      P(e.onClick, s);
      var u = Go(t);
      Ga(t, {
        left: u,
        duration: e.duration,
        animation: El
      });
    }, i = () => {
      n.value = Ot(t) >= De(e.visibilityHeight);
    }, l = Wo(i, 200);
    return Ue(() => {
      t = e.target ? Bl(e.target, "BackTop") : ba(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), kt(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: Hv,
      classes: Wv,
      click: o
    };
  }
});
_l.render = jv;
const gr = _l;
gr.install = function(e) {
  e.component(gr.name, gr);
};
var fw = gr;
function Gv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function qv(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Kv = {
  // 徽标类型
  type: {
    type: String,
    default: "default",
    validator: Gv
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
    validator: qv
  },
  // 图标
  icon: {
    type: String
  }
}, {
  n: Fn,
  classes: Xv
} = ee("badge"), Zv = {
  key: 1
};
function Jv(e, n) {
  var r = le("var-icon");
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
            Zv,
            ne(e.values),
            1
            /* TEXT */
          ))],
          16
          /* FULL_PROPS */
        ), [[za, !e.hidden]])]),
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
var xl = x({
  name: "VarBadge",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Kv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = F(() => {
      var {
        type: i,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Fn("position") + " " + Fn("--" + l), v = s ? Fn("dot") : null, f = o(), c = u ? Fn("icon") : null;
      return [Fn("--" + i), d, v, f, c];
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
        return Fn("dot--right");
      if (l && i.includes("left"))
        return Fn("dot--left");
    };
    return {
      n: Fn,
      classes: Xv,
      values: t,
      contentClass: a
    };
  }
});
xl.render = Jv;
const er = xl;
er.install = function(e) {
  e.component(er.name, er);
};
var cw = er, Qv = {
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
}, es = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), ns = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function _v() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(es), {
    length: r
  } = hn(ns);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
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
var {
  n: xv,
  classes: ef
} = ee("bottom-navigation"), {
  n: Et
} = ee("bottom-navigation-item"), $i = Et("--right-half-space"), Ti = Et("--left-half-space"), Pi = Et("--right-space"), nf = {
  type: "primary"
};
function rf(e, n) {
  var r = le("var-button");
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
    )) : _("v-if", !0)],
    6
    /* CLASS, STYLE */
  );
}
var rs = x({
  name: "VarBottomNavigation",
  components: {
    VarButton: nn
  },
  props: Qv,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = F(() => e.active), o = F(() => e.activeColor), i = F(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = _v(), v = () => {
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
      Ke(t.value) && (t.value < 0 ? P(e["onUpdate:active"], 0) : t.value > s.value - 1 && P(e["onUpdate:active"], s.value - 1));
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
        I.classList.remove($i, Ti, Pi);
      });
    }, w = (V) => {
      var I = O(), B = I.length, p = V % 2 === 0;
      I.forEach((b, L) => {
        S(p, b, L, B);
      });
    }, S = (V, I, B, p) => {
      var b = B === p - 1;
      if (!V && b) {
        I.classList.add(Pi);
        return;
      }
      var L = B === p / 2 - 1, Y = B === p / 2;
      L ? I.classList.add($i) : Y && I.classList.add(Ti);
    }, O = () => Array.from(a.value.querySelectorAll("." + Et())), k = () => {
      P(e.onFabClick);
    }, D = {
      active: t,
      activeColor: o,
      inactiveColor: i,
      onToggle: C
    };
    return d(D), ie(() => s.value, v), ie(() => e.fabProps, (V) => {
      l.value = io({}, nf, V);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      r.fab && w(s.value);
    }), Fo(() => {
      T(), r.fab && w(s.value);
    }), {
      n: xv,
      classes: ef,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
rs.render = rf;
const yr = rs;
yr.install = function(e) {
  e.component(yr.name, yr);
};
var mw = yr, af = {
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
function tf() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(es), {
    index: r
  } = gn(ns);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: of,
  classes: lf
} = ee("bottom-navigation-item"), sf = {
  type: "danger",
  dot: !0
};
function uf(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = Xe("ripple");
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
    )) : _("v-if", !0), H(e.$slots, "icon", {
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
    )) : _("v-if", !0), A(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? _("v-if", !0) : (y(), M(
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
var as = x({
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: er,
    VarIcon: $e
  },
  directives: {
    Ripple: We
  },
  props: af,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: o,
      bindBottomNavigation: i
    } = tf(), {
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
      a.value = c === !0 ? sf : r.value;
    }, {
      immediate: !0
    }), {
      n: of,
      classes: lf,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
as.render = uf;
const br = as;
br.install = function(e) {
  e.component(br.name, br);
};
var pw = br, df = {
  separator: {
    type: String
  },
  onClick: U()
}, ts = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), os = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function vf() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(ts), {
    length: r
  } = hn(os);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function ff() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ts), {
    index: r
  } = gn(os);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: cf,
  classes: mf
} = ee("breadcrumb");
function pf(e, n) {
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
    ), e.isLast ? _("v-if", !0) : H(e.$slots, "separator", {
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
var is = x({
  name: "VarBreadcrumb",
  props: df,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = ff(), t = F(() => n.value === r.length.value - 1), o = F(() => r.separator.value), i = (l) => {
      t.value || P(e.onClick, l);
    };
    return a(null), {
      n: cf,
      classes: mf,
      isLast: t,
      parentSeparator: o,
      handleClick: i
    };
  }
});
is.render = pf;
const wr = is;
wr.install = function(e) {
  e.component(wr.name, wr);
};
var hw = wr, hf = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: gf
} = ee("breadcrumbs");
function yf(e, n) {
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
var ls = x({
  name: "VarBreadcrumbs",
  props: hf,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = vf(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: gf
    };
  }
});
ls.render = yf;
const Cr = ls;
Cr.install = function(e) {
  e.component(Cr.name, Cr);
};
var gw = Cr;
function bf(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var wf = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: bf,
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
function Oi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vi(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var o = e.apply(n, r);
      function i(s) {
        Oi(o, a, t, i, l, "next", s);
      }
      function l(s) {
        Oi(o, a, t, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var {
  n: Cf,
  classes: Sf
} = ee("card"), kf = 500, $f = ["src", "alt"];
function Tf(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = Xe("ripple");
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
        $f
      )) : _("v-if", !0)]), A(
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
        )) : _("v-if", !0)]), H(e.$slots, "subtitle", {}, () => [e.subtitle ? (y(), M(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
          /* TEXT, CLASS */
        )) : _("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (y(), M(
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
          [H(e.$slots, "extra")],
          2
          /* CLASS */
        )) : _("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (y(), M(
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
        )) : _("v-if", !0)],
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
            onClick: On(e.close, ["stop"])
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
var ss = x({
  name: "VarCard",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarButton: nn
  },
  props: wf,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), o = E("100%"), i = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = F(() => e.layout === "row"), h = E(!1), C = E(!1), {
      zIndex: g
    } = _a(() => e.floating, 1);
    Mt(() => e.floating, () => !c.value);
    var $ = "auto", T = "auto", w = null, S = E(null), O = /* @__PURE__ */ function() {
      var V = Vi(function* () {
        clearTimeout(S.value), clearTimeout(w), S.value = null, S.value = setTimeout(/* @__PURE__ */ Vi(function* () {
          var {
            width: I,
            height: B,
            left: p,
            top: b
          } = n.value.getBoundingClientRect();
          a.value = we(I), t.value = we(B), o.value = a.value, i.value = t.value, l.value = we(b), s.value = we(p), u.value = "fixed", $ = l.value, T = s.value, h.value = !0, yield Vn(), l.value = "0", s.value = "0", o.value = "100vw", i.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", C.value = !0;
        }), e.ripple ? kf : 0);
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
    return ie(() => e.floating, (V) => {
      c.value || Ee(() => {
        V ? O() : k();
      });
    }, {
      immediate: !0
    }), {
      n: Cf,
      classes: Sf,
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
ss.render = Tf;
const Sr = ss;
Sr.install = function(e) {
  e.component(Sr.name, Sr);
};
var yw = Sr, Pf = {
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
  n: Of,
  classes: Vf
} = ee("cell");
function Mf(e, n) {
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
    )) : _("v-if", !0), A(
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
      )) : _("v-if", !0)],
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var us = x({
  name: "VarCell",
  components: {
    VarIcon: $e
  },
  props: Pf,
  setup() {
    return {
      n: Of,
      classes: Vf
    };
  }
});
us.render = Mf;
const nr = us;
nr.install = function(e) {
  e.component(nr.name, nr);
};
var bw = nr, Ef = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: If
} = ee("form-details"), Bf = {
  key: 0
}, Nf = {
  key: 0
};
function Df(e, n) {
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
                Bf,
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
              default: ve(() => [e.extraMessage ? (y(), M(
                "div",
                Nf,
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
var ds = x({
  name: "VarFormDetails",
  props: Ef,
  setup: () => ({
    n: If
  })
});
ds.render = Df;
const He = ds;
He.install = function(e) {
  e.component(He.name, He);
};
var ww = He, Af = {
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
}, vs = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), fs = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function zf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(vs), {
    length: r
  } = hn(fs);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Lf() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(vs), {
    index: r
  } = gn(fs);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
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
var cs = Symbol("FORM_BIND_FORM_ITEM_KEY");
function bn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(cs), r = Da(), a = e ? (t) => {
    e(lo({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function Rf() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(cs);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Uf,
  classes: Yf
} = ee("checkbox");
function Ff(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
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
var ms = x({
  name: "VarCheckbox",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  props: Af,
  setup(e) {
    var n = E(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = E(!1), {
      checkboxGroup: o,
      bindCheckboxGroup: i
    } = Lf(), {
      form: l,
      bindForm: s
    } = bn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      // expose
      resetValidation: f
    } = yn(), c = (k) => {
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
      n: Uf,
      classes: Yf,
      handleClick: C,
      toggle: w,
      reset: T,
      validate: S,
      resetValidation: f
    };
  }
});
ms.render = Ff;
const rr = ms;
rr.install = function(e) {
  e.component(rr.name, rr);
};
var Cw = rr;
function Hf(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Wf = {
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
    validator: Hf
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
  n: jf,
  classes: Gf
} = ee("checkbox-group");
function qf(e, n) {
  var r = le("var-form-details");
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
var ps = x({
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: Wf,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: o
    } = zf(), {
      bindForm: i
    } = bn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = yn(), v = F(() => l.value), f = (D) => {
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
      }), V = mi(D);
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
      }), V = mi(D);
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
      n: jf,
      classes: Gf,
      checkAll: T,
      inverseAll: w,
      reset: S,
      validate: O,
      resetValidation: d
    };
  }
});
ps.render = qf;
const kr = ps;
kr.install = function(e) {
  e.component(kr.name, kr);
};
var Sw = kr;
function Kf(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Xf(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Zf = {
  type: {
    type: String,
    default: "default",
    validator: Kf
  },
  size: {
    type: String,
    default: "normal",
    validator: Xf
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: qe(Wl, "name"),
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
  n: Hn,
  classes: Jf
} = ee("chip");
function Qf(e, n) {
  var r = le("var-icon");
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
var hs = x({
  name: "VarChip",
  components: {
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Zf,
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
      } = e, s = Hn(t ? "$--flex" : "$--inline-flex"), u = i ? Hn("plain") + " " + Hn("plain-" + o) : Hn("--" + o), d = l ? Hn("--round") : null;
      return [Hn("--" + a), s, u, d];
    });
    return {
      n: Hn,
      classes: Jf,
      chipStyles: n,
      contentClass: r
    };
  }
});
hs.render = Qf;
const ar = hs;
ar.install = function(e) {
  e.component(ar.name, ar);
};
var kw = ar;
function _f(e) {
  return ["row", "column"].includes(e);
}
var xf = {
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
    validator: _f
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
}, gs = Symbol("ROW_BIND_COL_KEY"), ys = Symbol("ROW_COUNT_COL_KEY");
function ec() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(gs), {
    length: r
  } = hn(ys);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function nc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(gs), {
    index: r
  } = gn(ys);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: rt,
  classes: rc
} = ee("col");
function ac(e, n) {
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
var bs = x({
  name: "VarCol",
  props: xf,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = F(() => z(e.span)), a = F(() => z(e.offset)), {
      row: t,
      bindRow: o
    } = nc(), i = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Ho(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(rt("--span-" + s + "-" + f)), v && d.push(rt("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(rt("--span-" + s + "-" + u));
      return d;
    };
    return ie([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), P(o, i), {
      n: rt,
      classes: rc,
      padding: n,
      toNumber: z,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
bs.render = ac;
const $r = bs;
$r.install = function(e) {
  e.component($r.name, $r);
};
var $w = $r, ws = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Cs = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function tc() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ws), {
    length: r
  } = hn(Cs);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var oc = {
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
  n: ic
} = ee("collapse");
function lc(e, n) {
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
var Ss = x({
  name: "VarCollapse",
  props: oc,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = tc(), t = F(() => e.modelValue), o = F(() => e.offset), i = () => !e.accordion && !be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, h) => i() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((C) => C !== c) : null, s = (c, h) => {
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
      n: ic
    };
  }
});
Ss.render = lc;
const Tr = Ss;
Tr.install = function(e) {
  e.component(Tr.name, Tr);
};
var Tw = Tr;
function sc() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ws), {
    index: r
  } = gn(Cs);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var uc = {
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
  n: dc,
  classes: vc
} = ee("collapse-item");
function fc(e, n) {
  var r = le("var-icon");
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
    ), [[za, e.show]])],
    2
    /* CLASS */
  );
}
var ks = x({
  name: "VarCollapseItem",
  components: {
    VarIcon: $e
  },
  props: uc,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = sc(), t = !0, o = E(null), i = E(!1), l = E(!1), {
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
        o.value.style.height = 0 + "px", Tn(() => {
          o.value.style.height = w + "px", t && Vt(() => {
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
        o.value.style.height = w + "px", Tn(() => {
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
      n: dc,
      start: C,
      classes: vc,
      show: i,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: o,
      transitionend: $
    };
  }
});
ks.render = fc;
const Pr = ks;
Pr.install = function(e) {
  e.component(Pr.name, Pr);
};
var Pw = Pr, cc = {
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
  n: mc
} = ee("countdown"), so = 1e3, uo = 60 * so, vo = 60 * uo, Mi = 24 * vo;
function pc(e, n) {
  return y(), M(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default", Vl(Bd(e.timeData)), () => [he(
      ne(e.showTime),
      1
      /* TEXT */
    )])],
    2
    /* CLASS */
  );
}
var $s = x({
  name: "VarCountdown",
  props: cc,
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
        c.includes(w) ? c = c.replace(w, da("" + C[S], 2, "0")) : C[S + 1] += C[S] * $[S];
      }), c.includes("S")) {
        var T = da("" + C[C.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", T) : c.includes("SS") ? c = c.replace("SS", T.slice(0, 2)) : c = c.replace("S", T.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / Mi), C = Math.floor(c % Mi / vo), g = Math.floor(c % vo / uo), $ = Math.floor(c % uo / so), T = Math.floor(c % so), w = {
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
      (C || r.value) && (t.value = Tn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (o.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, Jd(t.value), u();
    };
    return ie(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: i,
      n: mc,
      start: d,
      pause: v,
      reset: f
    };
  }
});
$s.render = pc;
const Or = $s;
Or.install = function(e) {
  e.component(Or.name, Or);
};
var Ow = Or;
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Sa = 9e15, cr = 1e9, fo = "0123456789abcdef", pt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ht = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", co = {
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
  minE: -Sa,
  // -1 to -EXP_LIMIT
  // The maximum exponent value, above which overflow to Infinity occurs.
  // JavaScript numbers: 308  (1.7976931348623157e+308)
  maxE: Sa,
  // 1 to EXP_LIMIT
  // Whether to use cryptographically-secure random number generation, if available.
  crypto: !1
  // true/false
}, Ts, Nn, fe = !0, It = "[DecimalError] ", ur = It + "Invalid argument: ", Ps = It + "Precision limit exceeded", Os = It + "crypto unavailable", Vs = "[object Decimal]", Je = Math.floor, Re = Math.pow, hc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, gc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, yc = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Ms = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, $n = 1e7, de = 7, bc = 9007199254740991, wc = pt.length - 1, mo = ht.length - 1, q = { toStringTag: Vs };
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
    throw Error(ur + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Cc(a, Ds(a, r)), a.precision = e, a.rounding = n, ue(Nn == 2 || Nn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, o, i, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, o = d.s * Re(d.s * d, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = Ge(d.d), e = d.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = Re(r, 1 / 3), e = Je((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(o.toString()), i = (e = v.precision) + 3; ; )
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
    if (e = n.length - 1, r = (e - Je(this.e / de)) * de, e = n[e], e)
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
  r = i.precision, a = i.rounding, i.precision = r + Math.max(o.e, o.sd()) + 4, i.rounding = 1, t = o.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Nt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), o = Va(i, 1, o.times(n), new i(1), !0);
  for (var s, u = e, d = new i(8); u--; )
    s = o.times(o), o = l.minus(s.times(d.minus(s.times(d))));
  return ue(o, i.precision = r, i.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, o = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new o(t);
  if (n = o.precision, r = o.rounding, o.precision = n + Math.max(t.e, t.sd()) + 4, o.rounding = 1, a = t.d.length, a < 3)
    t = Va(o, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Nt(5, e)), t = Va(o, 2, t, t, !0);
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
  return a !== -1 ? a === 0 ? n.isNeg() ? Sn(r, t, o) : new r(0) : new r(NaN) : n.isZero() ? Sn(r, t + 4, o).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Sn(r, t + 4, o).times(0.5), r.precision = t, r.rounding = o, e.minus(n));
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
  return t.isZero() ? new o(t) : (n = t.abs().cmp(1), r = o.precision, a = o.rounding, n !== -1 ? n === 0 ? (e = Sn(o, r + 4, a).times(0.5), e.s = t.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, t = t.div(new o(1).minus(t.times(t)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, o, i, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= mo)
      return i = Sn(d, v + 4, f).times(0.25), i.s = u.s, i;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= mo)
      return i = Sn(d, v + 4, f).times(0.5), i.s = u.s, i;
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
  return !!this.d && Je(this.e / de) > this.d.length - 2;
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
  if (fe = !1, l = v + c, i = Qn(u, l), a = n ? gt(d, l + 10) : Qn(e, l), s = Pe(i, a, l, 1), qa(s.d, t = v, f))
    do
      if (l += 10, i = Qn(u, l), a = n ? gt(d, l + 10) : Qn(e, l), s = Pe(i, a, l, 1), !o) {
        +Ge(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (qa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
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
    return fe ? ue(e, l, s) : e;
  }
  if (r = Je(e.e / de), d = Je(c.e / de), u = u.slice(), o = d - r, o) {
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
        u[t] = $n - 1;
      --u[t], u[a] += $n;
    }
    u[a] -= f[a];
  }
  for (; u[--i] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Bt(u, r), fe ? ue(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Pe(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Pe(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return po(this);
};
q.naturalLogarithm = q.ln = function() {
  return Qn(this);
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
  if (o = Je(v.e / de), a = Je(e.e / de), u = u.slice(), t = o - a, t) {
    for (t < 0 ? (r = u, t = -t, i = d.length) : (r = d, a = o, i = u.length), o = Math.ceil(l / de), i = o > i ? o + 1 : i + 1, t > i && (t = i, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (i = u.length, t = d.length, i - t < 0 && (t = i, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / $n | 0, u[t] %= $n;
  for (n && (u.unshift(n), ++a), i = u.length; u[--i] == 0; )
    u.pop();
  return e.d = u, e.e = Bt(u, a), fe ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(ur + e);
  return r.d ? (n = Es(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = kc(a, Ds(a, r)), a.precision = e, a.rounding = n, ue(Nn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, o, i = this, l = i.d, s = i.e, u = i.s, d = i.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? i : 1 / 0);
  for (fe = !1, u = Math.sqrt(+i), u == 0 || u == 1 / 0 ? (n = Ge(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Je((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
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
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Pe(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Nn == 2 || Nn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, o, i, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Je(d.e / de) + Je(e.e / de), s = f.length, u = c.length, s < u && (o = f, f = c, c = o, i = s, s = u, u = i), o = [], i = s + u, a = i; a--; )
    o.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = o[t] + c[a] * f[t - a - 1] + n, o[t--] = l % $n | 0, n = l / $n | 0;
    o[t] = (o[t] + n) % $n | 0;
  }
  for (; !o[--i]; )
    o.pop();
  return n ? ++r : o.shift(), e.d = o, e.e = Bt(o, r), fe ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Qo(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, cr), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, !0) : (tn(e, 0, cr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = Mn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, o = t.constructor;
  return e === void 0 ? r = Mn(t) : (tn(e, 0, cr), n === void 0 ? n = o.rounding : tn(n, 0, 8), a = ue(new o(t), e + t.e + 1, n), r = Mn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, o, i, l, s, u, d, v, f, c = this, h = c.d, C = c.constructor;
  if (!h)
    return new C(c);
  if (u = r = new C(1), a = s = new C(0), n = new C(a), o = n.e = Es(h) - c.e - 1, i = o % de, n.d[0] = Re(10, i < 0 ? de + i : i), e == null)
    e = o > 0 ? n : u;
  else {
    if (l = new C(e), !l.isInt() || l.lt(u))
      throw Error(ur + l);
    e = l.gt(n) ? o > 0 ? n : u : l;
  }
  for (fe = !1, l = new C(Ge(h)), d = C.precision, C.precision = o = h.length * de * 2; v = Pe(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Pe(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Pe(u, a, o, 1).minus(c).abs().cmp(Pe(s, r, o, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], C.precision = d, fe = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Qo(this, 16, e, n);
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
  return Qo(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, o, i, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Re(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, o = s.rounding, e.eq(1))
    return ue(l, a, o);
  if (n = Je(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= bc)
    return t = Is(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, o);
  if (i = l.s, i < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if (e.d[n] & 1 || (i = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = i, l;
  }
  return r = Re(+l, u), n = r == 0 || !isFinite(r) ? Je(u * (Math.log("0." + Ge(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? i / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = po(e.times(Qn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), qa(t.d, a, o) && (n = a + 10, t = ue(po(e.times(Qn(l, n + r)), n), n + 5, 1), +Ge(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = i, fe = !0, s.rounding = o, ue(t, a, o));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, cr), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = Mn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, cr), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
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
      a = e[n] + "", r = de - a.length, r && (o += jn(r)), o += a;
    i = e[n], a = i + "", r = de - a.length, r && (o += jn(r));
  } else if (i === 0)
    return "0";
  for (; i % 10 === 0; )
    i /= 10;
  return o + i;
}
function tn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(ur + e);
}
function qa(e, n, r, a) {
  var t, o, i, l;
  for (o = e[0]; o >= 10; o /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), o = Re(10, de - n), l = e[t] % o | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), i = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : i = (r < 4 && l + 1 == o || r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 100 | 0) == Re(10, n - 2) - 1 || (l == o / 2 || l == 0) && (e[t + 1] / o / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), i = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : i = ((a || r < 4) && l + 1 == o || !a && r > 3 && l + 1 == o / 2) && (e[t + 1] / o / 1e3 | 0) == Re(10, n - 3) - 1, i;
}
function st(e, n, r) {
  for (var a, t = [0], o, i = 0, l = e.length; i < l; ) {
    for (o = t.length; o--; )
      t[o] *= n;
    for (t[0] += fo.indexOf(e.charAt(i++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Cc(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Nt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Va(e, 1, n.times(t), new e(1));
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
    for (s ? (c = 1, d = a.e - t.e) : (s = $n, c = de, d = Je(a.e / c) - Je(t.e / c)), p = R.length, I = G.length, $ = new L(Y), T = $.d = [], v = 0; R[v] == (G[v] || 0); v++)
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
      $.e = d, Ts = h;
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
            o != l && (e.e++, v[0] == $n && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != $n)
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
    return Ns(e);
  var a, t = e.e, o = Ge(e.d), i = o.length;
  return n ? (r && (a = r - i) > 0 ? o = o.charAt(0) + "." + o.slice(1) + jn(a) : i > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (o = "0." + jn(-t - 1) + o, r && (a = r - i) > 0 && (o += jn(a))) : t >= i ? (o += jn(t + 1 - i), r && (a = r - t - 1) > 0 && (o = o + "." + jn(a))) : ((a = t + 1) < i && (o = o.slice(0, a) + "." + o.slice(a)), r && (a = r - i) > 0 && (t + 1 === i && (o += "."), o += jn(a))), o;
}
function Bt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function gt(e, n, r) {
  if (n > wc)
    throw fe = !0, r && (e.precision = r), Error(Ps);
  return ue(new e(pt), n, 1, !0);
}
function Sn(e, n, r) {
  if (n > mo)
    throw Error(Ps);
  return ue(new e(ht), n, r, !0);
}
function Es(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function jn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Is(e, n, r, a) {
  var t, o = new e(1), i = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (o = o.times(n), Ii(o.d, i) && (t = !0)), r = Je(r / 2), r === 0) {
      r = o.d.length - 1, t && o.d[r] === 0 && ++o.d[r];
      break;
    }
    n = n.times(n), Ii(n.d, i);
  }
  return fe = !0, o;
}
function Ei(e) {
  return e.d[e.d.length - 1] & 1;
}
function Bs(e, n, r) {
  for (var a, t = new e(n[0]), o = 0; ++o < n.length; )
    if (a = new e(n[o]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function po(e, n) {
  var r, a, t, o, i, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Re(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = o = i = new f(1), f.precision = s; ; ) {
    if (o = ue(o.times(e), s, 1), r = r.times(++d), l = i.plus(Pe(o, r, s, 1)), Ge(l.d).slice(0, s) === Ge(i.d).slice(0, s)) {
      for (t = v; t--; )
        i = ue(i.times(i), s, 1);
      if (n == null)
        if (u < 3 && qa(i.d, s - a, c, u))
          f.precision = s += 10, r = o = l = new f(1), d = 0, u++;
        else
          return ue(i, f.precision = h, c, fe = !0);
      else
        return f.precision = h, i;
    }
    i = l;
  }
}
function Qn(e, n) {
  var r, a, t, o, i, l, s, u, d, v, f, c = 1, h = 10, C = e, g = C.d, $ = C.constructor, T = $.rounding, w = $.precision;
  if (C.s < 0 || !g || !g[0] || !C.e && g[0] == 1 && g.length == 1)
    return new $(g && !g[0] ? -1 / 0 : C.s != 1 ? NaN : g ? 0 : C);
  if (n == null ? (fe = !1, d = w) : d = n, $.precision = d += h, r = Ge(g), a = r.charAt(0), Math.abs(o = C.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      C = C.times(e), r = Ge(C.d), a = r.charAt(0), c++;
    o = C.e, a > 1 ? (C = new $("0." + r), o++) : C = new $(a + "." + r.slice(1));
  } else
    return u = gt($, d + 2, w).times(o + ""), C = Qn(new $(a + "." + r.slice(1)), d - h).plus(u), $.precision = w, n == null ? ue(C, w, T, fe = !0) : C;
  for (v = C, s = i = C = Pe(C.minus(1), C.plus(1), d, 1), f = ue(C.times(C), d, 1), t = 3; ; ) {
    if (i = ue(i.times(f), d, 1), u = s.plus(Pe(i, new $(t), d, 1)), Ge(u.d).slice(0, d) === Ge(s.d).slice(0, d))
      if (s = s.times(2), o !== 0 && (s = s.plus(gt($, d + 2, w).times(o + ""))), s = Pe(s, new $(c), d, 1), n == null)
        if (qa(s.d, d - h, T, l))
          $.precision = d += h, u = i = C = Pe(v.minus(1), v.plus(1), d, 1), f = ue(C.times(C), d, 1), t = l = 1;
        else
          return ue(s, $.precision = w, T, fe = !0);
      else
        return $.precision = w, s;
    s = u, t += 2;
  }
}
function Ns(e) {
  return String(e.s * e.s / 0);
}
function ho(e, n) {
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
function Sc(e, n) {
  var r, a, t, o, i, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Ms.test(n))
      return ho(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (gc.test(n))
    r = 16, n = n.toLowerCase();
  else if (hc.test(n))
    r = 2;
  else if (yc.test(n))
    r = 8;
  else
    throw Error(ur + n);
  for (o = n.search(/p/i), o > 0 ? (s = +n.slice(o + 1), n = n.substring(2, o)) : n = n.slice(2), o = n.indexOf("."), i = o >= 0, a = e.constructor, i && (n = n.replace(".", ""), l = n.length, o = l - o, t = Is(a, new a(r), o, o * 2)), u = st(n, r, $n), d = u.length - 1, o = d; u[o] === 0; --o)
    u.pop();
  return o < 0 ? new a(e.s * 0) : (e.e = Bt(u, d), e.d = u, fe = !1, i && (e = Pe(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Re(2, s) : _n.pow(2, s))), fe = !0, e);
}
function kc(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Va(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Nt(5, r)), n = Va(e, 2, n, n);
  for (var t, o = new e(5), i = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(o.plus(t.times(i.times(t).minus(l))));
  return n;
}
function Va(e, n, r, a, t) {
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
function Nt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Ds(e, n) {
  var r, a = n.s < 0, t = Sn(e, e.precision, 1), o = t.times(0.5);
  if (n = n.abs(), n.lte(o))
    return Nn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Nn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(o))
      return Nn = Ei(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Nn = Ei(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Qo(e, n, r, a) {
  var t, o, i, l, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (tn(r, 1, cr), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Ns(e);
  else {
    for (d = Mn(e), i = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, i >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - i, f.d = st(Mn(f), 10, t), f.e = f.d.length), v = st(d, 10, t), o = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (i < 0 ? o-- : (e = new c(e), e.d = v, e.e = o, e = Pe(e, f, r, a, 0, t), v = e.d, o = e.e, u = Ts), i = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (i !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : i > l || i === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++o, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (i = 0, d = ""; i < s; i++)
        d += fo.charAt(v[i]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (i = n == 16 ? 4 : 3, --s; s % i; s++)
              d += "0";
            for (v = st(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (i = 1, d = "1."; i < s; i++)
              d += fo.charAt(v[i]);
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
function Ii(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function $c(e) {
  return new this(e).abs();
}
function Tc(e) {
  return new this(e).acos();
}
function Pc(e) {
  return new this(e).acosh();
}
function Oc(e, n) {
  return new this(e).plus(n);
}
function Vc(e) {
  return new this(e).asin();
}
function Mc(e) {
  return new this(e).asinh();
}
function Ec(e) {
  return new this(e).atan();
}
function Ic(e) {
  return new this(e).atanh();
}
function Bc(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, o = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Sn(this, o, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Sn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Sn(this, o, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(Pe(e, n, o, 1)), n = Sn(this, o, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Pe(e, n, o, 1)), r;
}
function Nc(e) {
  return new this(e).cbrt();
}
function Dc(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function Ac(e, n, r) {
  return new this(e).clamp(n, r);
}
function zc(e) {
  if (!e || typeof e != "object")
    throw Error(It + "Object expected");
  var n, r, a, t = e.defaults === !0, o = [
    "precision",
    1,
    cr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Sa,
    0,
    "toExpPos",
    0,
    Sa,
    "maxE",
    0,
    Sa,
    "minE",
    -Sa,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < o.length; n += 3)
    if (r = o[n], t && (this[r] = co[r]), (a = e[r]) !== void 0)
      if (Je(a) === a && a >= o[n + 1] && a <= o[n + 2])
        this[r] = a;
      else
        throw Error(ur + r + ": " + a);
  if (r = "crypto", t && (this[r] = co[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Os);
      else
        this[r] = !1;
    else
      throw Error(ur + r + ": " + a);
  return this;
}
function Lc(e) {
  return new this(e).cos();
}
function Rc(e) {
  return new this(e).cosh();
}
function As(e) {
  var n, r, a;
  function t(o) {
    var i, l, s, u = this;
    if (!(u instanceof t))
      return new t(o);
    if (u.constructor = t, Bi(o)) {
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
      return ho(u, o.toString());
    } else if (s !== "string")
      throw Error(ur + o);
    return (l = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (l === 43 && (o = o.slice(1)), u.s = 1), Ms.test(o) ? ho(u, o) : Sc(u, o);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = zc, t.clone = As, t.isDecimal = Bi, t.abs = $c, t.acos = Tc, t.acosh = Pc, t.add = Oc, t.asin = Vc, t.asinh = Mc, t.atan = Ec, t.atanh = Ic, t.atan2 = Bc, t.cbrt = Nc, t.ceil = Dc, t.clamp = Ac, t.cos = Lc, t.cosh = Rc, t.div = Uc, t.exp = Yc, t.floor = Fc, t.hypot = Hc, t.ln = Wc, t.log = jc, t.log10 = qc, t.log2 = Gc, t.max = Kc, t.min = Xc, t.mod = Zc, t.mul = Jc, t.pow = Qc, t.random = _c, t.round = xc, t.sign = em, t.sin = nm, t.sinh = rm, t.sqrt = am, t.sub = tm, t.sum = om, t.tan = im, t.tanh = lm, t.trunc = sm, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Uc(e, n) {
  return new this(e).div(n);
}
function Yc(e) {
  return new this(e).exp();
}
function Fc(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function Hc() {
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
function Bi(e) {
  return e instanceof _n || e && e.toStringTag === Vs || !1;
}
function Wc(e) {
  return new this(e).ln();
}
function jc(e, n) {
  return new this(e).log(n);
}
function Gc(e) {
  return new this(e).log(2);
}
function qc(e) {
  return new this(e).log(10);
}
function Kc() {
  return Bs(this, arguments, "lt");
}
function Xc() {
  return Bs(this, arguments, "gt");
}
function Zc(e, n) {
  return new this(e).mod(n);
}
function Jc(e, n) {
  return new this(e).mul(n);
}
function Qc(e, n) {
  return new this(e).pow(n);
}
function _c(e) {
  var n, r, a, t, o = 0, i = new this(1), l = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, cr), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); o < a; )
        t = n[o], t >= 429e7 ? n[o] = crypto.getRandomValues(new Uint32Array(1))[0] : l[o++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); o < a; )
        t = n[o] + (n[o + 1] << 8) + (n[o + 2] << 16) + ((n[o + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, o) : (l.push(t % 1e7), o += 4);
      o = a / 4;
    } else
      throw Error(Os);
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
function xc(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function em(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function nm(e) {
  return new this(e).sin();
}
function rm(e) {
  return new this(e).sinh();
}
function am(e) {
  return new this(e).sqrt();
}
function tm(e, n) {
  return new this(e).sub(n);
}
function om() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function im(e) {
  return new this(e).tan();
}
function lm(e) {
  return new this(e).tanh();
}
function sm(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var _n = q.constructor = As(co);
pt = new _n(pt);
ht = new _n(ht);
var um = {
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
  n: dm,
  classes: vm
} = ee("counter"), Ni = 100, Di = 600, fm = ["inputmode", "readonly", "disabled"];
function cm(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
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
        fm
      ), [[Nd, e.inputValue]]), ke(re(
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
var zs = x({
  name: "VarCounter",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  inheritAttrs: !1,
  props: um,
  setup(e) {
    var n = E(""), r, a, t, o, {
      bindForm: i,
      form: l
    } = bn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = yn(), {
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
        var oe = new _n(z(j)).minus(new _n(z(X))).toString(), ce = S(oe), ye = z(ce);
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
        var oe = new _n(z(j)).plus(new _n(z(X))).toString(), ce = S(oe), ye = z(ce);
        P(Z, ye), N ? P(ae, ye, G) : (Y(ce), C("onIncrement"));
      }
    }, V = () => {
      var {
        press: R,
        lazyChange: Q
      } = e;
      !R || Q || (o = window.setTimeout(() => {
        L();
      }, Di));
    }, I = () => {
      var {
        press: R,
        lazyChange: Q
      } = e;
      !R || Q || (t = window.setTimeout(() => {
        b();
      }, Di));
    }, B = () => {
      a && clearTimeout(a), o && clearTimeout(o);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, b = () => {
      r = window.setTimeout(() => {
        D(), b();
      }, Ni);
    }, L = () => {
      a = window.setTimeout(() => {
        k(), L();
      }, Ni);
    }, Y = (R) => {
      n.value = R;
      var Q = z(R);
      P(e["onUpdate:modelValue"], Q);
    }, G = (R) => {
      Y(S(String(R))), C("onLazyChange");
    };
    return P(i, $), ie(() => e.modelValue, (R) => {
      Y(S(String(R))), P(e.onChange, z(R));
    }), Y(S(String(e.modelValue))), {
      n: dm,
      classes: vm,
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
zs.render = cm;
const Vr = zs;
Vr.install = function(e) {
  e.component(Vr.name, Vr);
};
var Vw = Vr, Ls = 60, Rs = Ls * 60, Us = Rs * 24, mm = Us * 7, Ma = 1e3, Gt = Ls * Ma, Ai = Rs * Ma, pm = Us * Ma, hm = mm * Ma, _o = "millisecond", ka = "second", $a = "minute", Ta = "hour", Gn = "day", ut = "week", Cn = "month", Ys = "quarter", qn = "year", Pa = "date", gm = "YYYY-MM-DDTHH:mm:ssZ", zi = "Invalid Date", ym = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, bm = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const wm = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var go = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Cm = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), o = a % 60;
  return (r <= 0 ? "+" : "-") + go(t, 2, "0") + ":" + go(o, 2, "0");
}, Sm = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, Cn), o = r - t < 0, i = n.clone().add(a + (o ? -1 : 1), Cn);
  return +(-(a + (r - t) / (o ? t - i : i - t)) || 0);
}, km = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, $m = function(n) {
  var r = {
    M: Cn,
    y: qn,
    w: ut,
    d: Gn,
    D: Pa,
    h: Ta,
    m: $a,
    s: ka,
    ms: _o,
    Q: Ys
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Tm = function(n) {
  return n === void 0;
};
const Pm = {
  s: go,
  z: Cm,
  m: Sm,
  a: km,
  p: $m,
  u: Tm
};
var Ha = "en", Mr = {};
Mr[Ha] = wm;
var xo = function(n) {
  return n instanceof Dt;
}, yt = function e(n, r, a) {
  var t;
  if (!n)
    return Ha;
  if (typeof n == "string") {
    var o = n.toLowerCase();
    Mr[o] && (t = o), r && (Mr[o] = r, t = o);
    var i = n.split("-");
    if (!t && i.length > 1)
      return e(i[0]);
  } else {
    var l = n.name;
    Mr[l] = n, t = l;
  }
  return !a && t && (Ha = t), t || !a && Ha;
}, te = function(n, r) {
  if (xo(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Dt(a);
}, Om = function(n, r) {
  return te(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
    // todo: refactor; do not use this.$offset in you code
  });
}, Te = Pm;
Te.l = yt;
Te.i = xo;
Te.w = Om;
var Vm = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Te.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(ym);
    if (t) {
      var o = t[2] - 1 || 0, i = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i)) : new Date(t[1], o, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, i);
    }
  }
  return new Date(r);
}, Dt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = yt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Vm(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Te;
  }, n.isValid = function() {
    return this.$d.toString() !== zi;
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
      return i ? w : w.endOf(Gn);
    }, u = function($, T) {
      var w = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Te.w(o.toDate()[$].apply(
        // eslint-disable-line prefer-spread
        o.toDate("s"),
        (i ? w : S).slice(T)
      ), o);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case qn:
        return i ? s(1, 0) : s(31, 11);
      case Cn:
        return i ? s(1, v) : s(0, v + 1);
      case ut: {
        var h = this.$locale().weekStart || 0, C = (d < h ? d + 7 : d) - h;
        return s(i ? f - C : f + (6 - C), v);
      }
      case Gn:
      case Pa:
        return u(c + "Hours", 0);
      case Ta:
        return u(c + "Minutes", 1);
      case $a:
        return u(c + "Seconds", 2);
      case ka:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var o, i = Te.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (o = {}, o[Gn] = l + "Date", o[Pa] = l + "Date", o[Cn] = l + "Month", o[qn] = l + "FullYear", o[Ta] = l + "Hours", o[$a] = l + "Minutes", o[ka] = l + "Seconds", o[_o] = l + "Milliseconds", o)[i], u = i === Gn ? this.$D + (t - this.$W) : t;
    if (i === Cn || i === qn) {
      var d = this.clone().set(Pa, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Pa, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === Cn)
      return this.set(Cn, this.$M + a);
    if (l === qn)
      return this.set(qn, this.$y + a);
    if (l === Gn)
      return s(1);
    if (l === ut)
      return s(7);
    var u = (i = {}, i[$a] = Gt, i[Ta] = Ai, i[ka] = Ma, i)[l] || 1, d = this.$d.getTime() + a * u;
    return Te.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, o = this.$locale();
    if (!this.isValid())
      return o.invalidDate || zi;
    var i = a || gm, l = Te.z(this), s = this.$H, u = this.$m, d = this.$M, v = o.weekdays, f = o.months, c = o.meridiem, h = function(w, S, O, k) {
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
    return i.replace(bm, function(T, w) {
      return w || $[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, o) {
    var i, l = Te.p(t), s = te(a), u = (s.utcOffset() - this.utcOffset()) * Gt, d = this - s, v = Te.m(this, s);
    return v = (i = {}, i[qn] = v / 12, i[Cn] = v, i[Ys] = v / 3, i[ut] = (d - u) / hm, i[Gn] = (d - u) / pm, i[Ta] = d / Ai, i[$a] = d / Gt, i[ka] = d / Ma, i)[l] || d, o ? v : Te.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(Cn).$D;
  }, n.$locale = function() {
    return Mr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var o = this.clone(), i = yt(a, t, !0);
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
}(), Fs = Dt.prototype;
te.prototype = Fs;
[["$ms", _o], ["$s", ka], ["$m", $a], ["$H", Ta], ["$W", Gn], ["$M", Cn], ["$y", qn], ["$D", Pa]].forEach(function(e) {
  Fs[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
te.extend = function(e, n) {
  return e.$i || (e(n, Dt, te), e.$i = !0), te;
};
te.locale = yt;
te.isDayjs = xo;
te.unix = function(e) {
  return te(e * 1e3);
};
te.en = Mr[Ha];
te.Ls = Mr;
te.p = {};
const Hs = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, Ws = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Mm(e) {
  return ["date", "month"].includes(e);
}
var dt = [{
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
}], Fa = [{
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
}], Em = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Mm
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
  n: Im
} = ee("picker-header");
function Bm(e, n) {
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
var js = x({
  name: "PanelHeader",
  components: {
    VarButton: nn,
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
      n: Im,
      reverse: a,
      showDate: o,
      checkDate: i
    };
  }
});
js.render = Bm;
const Gs = js;
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
te.extend(Hs);
te.extend(Ws);
var {
  n: at,
  classes: Nm
} = ee("month-picker"), {
  n: tt
} = ee("date-picker");
function Dm(e, n) {
  var r = le("panel-header"), a = le("var-button");
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
              }, yo({}, e.buttonProps(t.index)), {
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
var qs = x({
  name: "MonthPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: Gs
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
      return O && (k = te(V).isSameOrBefore(te(O), "month")), S && (D = te(V).isSameOrAfter(te(S), "month")), k && D;
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
          multiple: D,
          range: V
        }
      } = e, I = S + "-" + T, B = () => V || D ? c(I) : (w == null ? void 0 : w.index) === T && u.value, p = () => f(T) ? O ? !O(I) : !1 : !0, b = p(), L = () => b ? !0 : V || D ? !c(I) : !u.value || (w == null ? void 0 : w.index) !== T, Y = () => d.value && t === T && e.componentProps.showCurrent ? (V || D || u.value) && b ? !0 : V || D ? !c(I) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, G = () => b ? "" : Y() ? k ?? "" : B() ? "" : tt() + "-color-cover", R = G().startsWith(tt());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : k,
        textColor: R ? "" : G(),
        [tt() + "-color-cover"]: R,
        class: Nm(at("button"), [b, at("button--disabled")])
      };
    }, C = (T, w) => {
      var S = w.currentTarget;
      S.classList.contains(at("button--disabled")) || r("choose-month", T);
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
      n: at,
      nDate: tt,
      pack: Fe,
      MONTH_LIST: dt,
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
qs.render = Dm;
const Am = qs;
var {
  n: Li,
  classes: zm
} = ee("year-picker"), Lm = ["onClick"];
function Rm(e, n) {
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
        Lm
      ))),
      128
      /* KEYED_FRAGMENT */
    ))],
    2
    /* CLASS */
  );
}
var Ks = x({
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
      var o = document.querySelector("." + Li("item--active"));
      o == null || o.scrollIntoView({
        block: "center"
      });
    }), {
      n: Li,
      classes: zm,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
Ks.render = Rm;
const Um = Ks;
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
te.extend(Hs);
te.extend(Ws);
var {
  n: Ca,
  classes: Ym
} = ee("day-picker"), {
  n: ot
} = ee("date-picker");
function Fm(e, n) {
  var r = le("panel-header"), a = le("var-button");
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
                }, bo({}, e.buttonProps(t)), {
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
var Xs = x({
  name: "DayPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: Gs
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
      var V = Fa.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return V === -1 || V === 0 ? Fa : Fa.slice(V).concat(Fa.slice(0, V));
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
      } = e, L = !0, Y = !0, G = I + "-" + B.index + "-" + V;
      return b && (L = te(G).isSameOrBefore(te(b), "day")), p && (Y = te(G).isSameOrAfter(te(p), "day")), L && Y;
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
          class: Ca("button")
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
      } = e, R = B + "-" + p.index + "-" + V, Q = () => G || Y ? w(R) : z(I) === V && f.value, W = () => T(V) ? b ? !b(R) : !1 : !0, J = W(), N = () => J ? !0 : G || Y ? !w(R) : !f.value || z(I) !== V, X = () => v.value && z(o) === V && e.componentProps.showCurrent ? (G || Y || f.value) && J ? !0 : G || Y ? !w(R) : f.value ? I !== o : !0 : !1, j = () => J ? "" : X() ? L ?? "" : Q() ? "" : ot() + "-color-cover", Z = j().startsWith(ot());
      return {
        text: N(),
        outline: X(),
        textColor: Z ? "" : j(),
        [ot() + "-color-cover"]: Z,
        class: Ym(Ca("button"), Ca("button--usable"), [J, Ca("button--disabled")])
      };
    }, O = (V) => {
      l.value = V === "prev", s.value += V === "prev" ? -1 : 1, r("check-preview", "month", V);
    }, k = (V, I) => {
      var B = I.currentTarget;
      B.classList.contains(Ca("button--disabled")) || r("choose-day", V);
    }, D = (V) => {
      u.value.checkDate(V);
    };
    return Ue(() => {
      g(), $();
    }), ie(() => e.preview, () => {
      g(), $();
    }), {
      n: Ca,
      nDate: ot,
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
Xs.render = Fm;
const Hm = Xs;
var {
  n: Wm,
  classes: jm
} = ee("date-picker");
function Gm(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
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
              )]) : H(e.$slots, "date", Vl(Ve({
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
var Zs = x({
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Am,
    YearPickerPanel: Um,
    DayPickerPanel: Hm
  },
  props: Em,
  setup(e) {
    var n = 0, r = 0, a = "", t, o = te().format("YYYY-MM-D"), [i, l] = o.split("-"), s = dt.find((se) => se.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), h = E(), C = E(s), g = E(i), $ = E(!1), T = E([]), w = E([]), S = E([]), O = E([]), k = E(null), D = E(null), V = Me({
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
        range: ge
      } = e;
      if (ge)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var me = "";
      if (f.value) {
        var Ce, Se;
        me = (Ce = (Se = Fe.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? Ce : "";
      }
      return se ? "" + T.value.length + Fe.value.datePickerSelected : me;
    }), b = F(() => {
      var se, ge, me, Ce, {
        multiple: Se,
        range: ze
      } = e;
      if (ze) {
        var _e = O.value.map((Ht) => te(Ht).format("YYYY-MM-DD"));
        return _e.length ? _e[0] + " ~ " + _e[1] : "";
      }
      if (Se)
        return "" + w.value.length + Fe.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var vn = te(c.value + "-" + f.value.index + "-" + h.value).day(), wa = Fa.find((Ht) => Ht.index === "" + vn), vi = (se = (ge = Fe.value.datePickerWeekDict) == null ? void 0 : ge[wa.index].name) != null ? se : "", Vd = (me = (Ce = Fe.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? me : "", Md = da(h.value, 2, "0");
      return Fe.value.lang === "zh-CN" ? f.value.index + "-" + Md + " " + vi.slice(0, 3) : vi.slice(0, 3) + ", " + Vd.slice(0, 3) + " " + h.value;
    }), L = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = F(() => !e.touchable || ["", "year"].includes(L.value)), G = F(() => {
      var se, ge, me, Ce, Se = te(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), ze = h.value ? da(h.value, 2, "0") : "";
      return {
        week: "" + Se,
        year: (ge = c.value) != null ? ge : "",
        month: (me = (Ce = f.value) == null ? void 0 : Ce.index) != null ? me : "",
        date: ze
      };
    }), R = F(() => I.value.chooseRangeDay.map((se) => te(se).format("YYYY-MM-DD"))), Q = F(() => c.value === g.value), W = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === C.value.index;
    }), J = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Y.value) {
        var {
          clientX: ge,
          clientY: me
        } = se.touches[0];
        n = ge, r = me;
      }
    }, X = (se, ge) => se >= ge && se > 20 ? "x" : "y", j = (se) => {
      if (!Y.value) {
        var {
          clientX: ge,
          clientY: me
        } = se.touches[0], Ce = ge - n, Se = me - r;
        t = X(Math.abs(Ce), Math.abs(Se)), a = Ce > 0 ? "prev" : "next";
      }
    }, Z = () => {
      if (!(Y.value || t !== "x")) {
        var se = L.value === "month" ? k : D;
        Vt(() => {
          se.value.forwardRef(a), di();
        });
      }
    }, ae = (se, ge) => {
      var me = ge === "month" ? S : O;
      if (me.value = v.value ? [se, se] : [me.value[0], se], v.value = !v.value, v.value) {
        var Ce = te(me.value[0]).isAfter(me.value[1]), Se = Ce ? [me.value[1], me.value[0]] : [...me.value];
        P(e["onUpdate:modelValue"], Se), P(e.onChange, Se);
      }
    }, oe = (se, ge) => {
      var me = ge === "month" ? T : w, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-DD", Se = me.value.map((_e) => te(_e).format(Ce)), ze = Se.findIndex((_e) => _e === se);
      ze === -1 ? Se.push(se) : Se.splice(ze, 1), P(e["onUpdate:modelValue"], Se), P(e.onChange, Se);
    }, ce = (se, ge) => !c.value || !f.value ? !1 : Q.value ? se === "month" ? ge.index < f.value.index : W.value ? ge < z(h.value) : f.value.index > C.value.index : c.value > g.value, ye = (se) => {
      var {
        readonly: ge,
        range: me,
        multiple: Ce,
        onChange: Se,
        "onUpdate:modelValue": ze
      } = e;
      if (!(se < 0 || ge)) {
        $.value = ce("day", se);
        var _e = g.value + "-" + C.value.index + "-" + se, vn = te(_e).format("YYYY-MM-DD");
        me ? ae(vn, "day") : Ce ? oe(vn, "day") : (P(ze, vn), P(Se, vn));
      }
    }, Ye = (se) => {
      var {
        type: ge,
        readonly: me,
        range: Ce,
        multiple: Se,
        onChange: ze,
        onPreview: _e,
        "onUpdate:modelValue": vn
      } = e;
      if ($.value = ce("month", se), ge === "month" && !me) {
        var wa = g.value + "-" + se.index;
        Ce ? ae(wa, "month") : Se ? oe(wa, "month") : (P(vn, wa), P(ze, wa));
      } else
        C.value = se, P(_e, z(g.value), z(C.value.index));
      d.value = !1;
    }, Qe = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, P(e.onPreview, z(g.value), z(C.value.index));
    }, Be = (se, ge) => {
      var me = ge === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (z(g.value) + me);
      else {
        var Ce = z(C.value.index) + me;
        Ce < 1 && (g.value = "" + (z(g.value) - 1), Ce = 12), Ce > 12 && (g.value = "" + (z(g.value) + 1), Ce = 1), C.value = dt.find((Se) => z(Se.index) === Ce);
      }
      P(e.onPreview, z(g.value), z(C.value.index));
    }, je = () => (e.multiple || e.range) && !be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ft = (se) => be(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Td = (se, ge) => {
      var me = ge === "month" ? S : O, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = se.map((vn) => te(vn).format(Ce)).slice(0, 2), ze = me.value.some((vn) => Ft(vn));
      if (!ze) {
        me.value = Se;
        var _e = te(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && _e && (me.value = [me.value[1], me.value[0]]);
      }
    }, Pd = (se, ge) => {
      var me = ge === "month" ? T : w, Ce = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = Array.from(new Set(se.map((ze) => te(ze).format(Ce))));
      me.value = Se.filter((ze) => ze !== "Invalid Date");
    }, Od = (se) => {
      var ge = te(se).format("YYYY-MM-D");
      if (!Ft(ge)) {
        var [me, Ce, Se] = ge.split("-"), ze = dt.find((_e) => _e.index === Ce);
        f.value = ze, c.value = me, h.value = Se, C.value = ze, g.value = me;
      }
    }, di = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ie(() => e.modelValue, (se) => {
      if (!(!je() || Ft(se) || !se))
        if (e.range) {
          if (!be(se))
            return;
          v.value = se.length !== 1, Td(se, e.type);
        } else if (e.multiple) {
          if (!be(se))
            return;
          Pd(se, e.type);
        } else
          Od(se);
    }, {
      immediate: !0
    }), ie(L, di), {
      n: Wm,
      classes: jm,
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
      getChooseYear: Qe,
      checkPreview: Be
    };
  }
});
Zs.render = Gm;
const Er = Zs;
Er.install = function(e) {
  e.component(Er.name, Er);
};
var Mw = Er;
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
function qm(e) {
  return ["left", "center", "right"].includes(e);
}
var Km = wo({
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
    validator: qm
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
}, qe(Qa, [
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
var {
  n: Xm,
  classes: Zm
} = ee("dialog");
function Jm(e, n) {
  var r = le("var-button"), a = le("var-popup");
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
          style: Co({
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
          )) : _("v-if", !0), e.confirmButton ? (y(), pe(
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
var Js = x({
  name: "VarDialog",
  components: {
    VarPopup: cn,
    VarButton: nn
  },
  inheritAttrs: !1,
  props: Km,
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
      n: Xm,
      classes: Zm,
      pack: Fe,
      dt: Pt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: o,
      cancel: i,
      toSizeUnit: we
    };
  }
});
Js.render = Jm;
const tr = Js;
var Xn;
function fa(e) {
  return jo() ? new Promise((n) => {
    fa.close();
    var r = Ze(e) || Ke(e) ? {
      message: String(e)
    } : e, a = Me(r);
    a.teleport = "body", Xn = a;
    var {
      unmountInstance: t
    } = Ra(tr, a, {
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
        P(a.onClosed), t(), Xn === a && (Xn = null);
      },
      onRouteChange: () => {
        t(), Xn === a && (Xn = null);
      },
      "onUpdate:show": (o) => {
        a.show = o;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
tr.install = function(e) {
  e.component(tr.name, tr);
};
fa.install = function(e) {
  e.component(tr.name, tr);
};
fa.close = () => {
  if (Xn != null) {
    var e = Xn;
    Xn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
fa.Component = tr;
var Ew = tr, Qm = {
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
function Oa() {
  return Oa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Oa.apply(this, arguments);
}
var {
  n: _m,
  classes: xm
} = ee("divider");
function ep(e, n) {
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
    )) : _("v-if", !0)])],
    6
    /* CLASS, STYLE */
  );
}
var Qs = x({
  name: "VarDivider",
  props: Qm,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Me({
      withText: !1
    }), t = F(() => Qt(e.inset) ? e.inset : !0), o = F(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Qt(l) || l === 0)
        return Oa({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Oa({}, d, {
        height: "calc(80% - " + we(f) + ")"
      }) : Oa({}, d, {
        width: "calc(100% - " + we(f) + ")",
        left: v > 0 ? we(f) : we(0)
      });
    }), i = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ue(() => {
      i();
    }), Fo(() => {
      i();
    }), Oa({
      n: _m,
      classes: xm
    }, Dd(a), {
      style: o,
      isInset: t
    });
  }
});
Qs.render = ep;
const Ir = Qs;
Ir.install = function(e) {
  e.component(Ir.name, Ir);
};
var Iw = Ir;
function np(e) {
  return ["start", "end"].includes(e);
}
var rp = {
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
    validator: np
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
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
function ap(e) {
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
  n: tp
} = ee("form");
function op(e, n) {
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
var _s = x({
  name: "VarForm",
  props: rp,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Rf(), o = (d, v) => {
      setTimeout(() => {
        var f = ba(v), c = f === window ? 0 : bi(f), h = bi(v) - c - De(e.scrollToErrorOffsetY);
        Ga(f, {
          top: h,
          animation: _t
        });
      }, 300);
    }, i = /* @__PURE__ */ function() {
      var d = ap(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: $
          } = g;
          return $();
        }));
        if (e.scrollToError) {
          var [, f] = Yd(v, (g) => g === !1, e.scrollToError), c = f > -1;
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
      n: tp,
      validate: i,
      reset: l,
      resetValidation: s
    };
  }
});
_s.render = op;
const Dn = _s;
Dn.install = function(e) {
  e.component(Dn.name, Dn);
};
Dn.useValidation = yn;
Dn.useForm = bn;
var Bw = Dn;
function Ui(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function At(e) {
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
var ip = "background-image", lp = "lazy-loading", sp = "lazy-error", Yi = "lazy-attempt", up = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], ko = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ea = [], bt = [], xs = Fd(100), Le = {
  loading: ko,
  error: ko,
  attempt: 3,
  throttleWait: 300,
  events: up
}, ei = Wo(xa, Le.throttleWait);
function zt(e, n) {
  e._lazy.arg === ip ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function dp(e) {
  e._lazy.loading && zt(e, e._lazy.loading), xa();
}
function vp(e) {
  e._lazy.error && zt(e, e._lazy.error), e._lazy.state = "error", ri(e), xa();
}
function eu(e, n) {
  zt(e, n), e._lazy.state = "success", ri(e), xa();
}
function fp(e) {
  var n;
  bt.includes(e) || (bt.push(e), (n = Le.events) == null || n.forEach((r) => {
    e.addEventListener(r, ei, {
      passive: !0
    });
  }));
}
function cp() {
  bt.forEach((e) => {
    var n;
    (n = Le.events) == null || n.forEach((r) => {
      e.removeEventListener(r, ei);
    });
  }), bt.length = 0;
}
function mp(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(lp)) != null ? r : Le.loading,
    error: (a = e.getAttribute(sp)) != null ? a : Le.error,
    attempt: e.getAttribute(Yi) ? Number(e.getAttribute(Yi)) : Le.attempt
  };
  e._lazy = So({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), zt(e, ko), P(Le.filter, e._lazy);
}
function pp(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, xs.add(n), eu(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? vp(e) : nu(e);
  });
}
function nu(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (xs.has(n)) {
      eu(e, n), e._lazy.attemptLock = !1;
      return;
    }
    dp(e), pp(e, n);
  }
}
function ni(e) {
  return $o.apply(this, arguments);
}
function $o() {
  return $o = At(function* (e) {
    (yield jd(e)) && nu(e);
  }), $o.apply(this, arguments);
}
function xa() {
  Ea.forEach((e) => ni(e));
}
function hp(e) {
  return To.apply(this, arguments);
}
function To() {
  return To = At(function* (e) {
    !Ea.includes(e) && Ea.push(e), Gd(e).forEach(fp), yield ni(e);
  }), To.apply(this, arguments);
}
function ri(e) {
  Tt(Ea, e), Ea.length === 0 && cp();
}
function gp(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ru(e, n) {
  return Po.apply(this, arguments);
}
function Po() {
  return Po = At(function* (e, n) {
    mp(e, n), yield hp(e);
  }), Po.apply(this, arguments);
}
function yp(e, n) {
  return Oo.apply(this, arguments);
}
function Oo() {
  return Oo = At(function* (e, n) {
    if (!gp(e, n)) {
      Ea.includes(e) && (yield ni(e));
      return;
    }
    yield ru(e, n);
  }), Oo.apply(this, arguments);
}
function bp(e) {
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
var au = {
  mounted: ru,
  unmounted: ri,
  updated: yp,
  install(e, n) {
    bp(n), ei = Wo(xa, Le.throttleWait), e.directive("lazy", this);
  }
}, Nw = au;
const wt = au;
function wp(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Cp = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: wp,
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
  n: Sp,
  classes: kp
} = ee("image"), $p = ["alt", "title", "lazy-error", "lazy-loading"], Tp = ["alt", "title", "src"];
function Pp(e, n) {
  var r = Xe("lazy"), a = Xe("ripple");
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
      $p
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
      Tp
    ))],
    6
    /* CLASS, STYLE */
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
var tu = x({
  name: "VarImage",
  directives: {
    Lazy: wt,
    Ripple: We
  },
  props: Cp,
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
      n: Sp,
      classes: kp,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
tu.render = Pp;
const Br = tu;
Br.install = function(e) {
  e.component(Br.name, Br);
};
var Dw = Br, ou = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), iu = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Op() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(ou), {
    length: r
  } = hn(iu);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var lu = {
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
function Fi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vp(e) {
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
var Mp = 250, Ep = 20, {
  n: Ip,
  classes: Bp
} = ee("swipe"), Np = ["onClick"];
function Dp(e, n) {
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
          Np
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
var su = x({
  name: "VarSwipe",
  props: lu,
  setup(e) {
    var n = E(null), r = E(0), a = F(() => e.vertical), t = E(0), o = E(0), i = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Op(), v = !1, f = -1, c, h, C, g, $, T = (N) => s.find((X) => {
      var {
        index: j
      } = X;
      return j.value === N;
    }), w = () => {
      e.loop && (o.value >= 0 && T(d.value - 1).setTranslate(-t.value), o.value <= -(t.value - r.value) && T(0).setTranslate(t.value), o.value > -(t.value - r.value) && o.value < 0 && (T(d.value - 1).setTranslate(0), T(0).setTranslate(0)));
    }, S = (N) => {
      var X = Ke(N) ? N : Math.floor((o.value - r.value / 2) / -r.value), {
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
      i.value = !0, (X || j) && (i.value = !0, o.value = j ? Z : ae, T(0).setTranslate(0), T(d.value - 1).setTranslate(0)), Vt(() => {
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
        } = N.touches[0], oe = Math.abs(Z - c), ce = Math.abs(ae - h), ye = p(oe, ce), Ye = j ? "vertical" : "horizontal";
        if (ye === Ye) {
          N.preventDefault();
          var Qe = g !== void 0 ? Z - g : 0, Be = $ !== void 0 ? ae - $ : 0;
          g = Z, $ = ae, o.value += j ? Be : Qe, w();
        }
      }
    }, Y = () => {
      if (v) {
        var {
          vertical: N,
          onChange: X
        } = e, j = N ? $ < h : g < c, Z = Math.abs(N ? h - $ : c - g), ae = performance.now() - C <= Mp && Z >= Ep, oe = ae ? S(j ? l.value + 1 : l.value - 1) : S();
        v = !1, i.value = !1, g = void 0, $ = void 0, o.value = oe * -r.value;
        var ce = l.value;
        l.value = O(oe), I(), ce !== l.value && P(X, l.value);
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
        }).forEach((ae, oe) => {
          j({
            event: oe === Z - 1 ? X == null ? void 0 : X.event : !1
          });
        });
      }
    }, J = {
      size: r,
      vertical: a
    };
    return u(J), ie(() => d.value, /* @__PURE__ */ Vp(function* () {
      yield Vn(), V(), G();
    })), Ue(() => {
      window.addEventListener("resize", G);
    }), fr(() => {
      window.removeEventListener("resize", G), B();
    }), {
      n: Ip,
      classes: Bp,
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
su.render = Dp;
const An = su;
An.install = function(e) {
  e.component(An.name, An);
};
var Aw = An;
function Ap() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(ou), {
    index: r
  } = gn(iu);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: zp
} = ee("swipe-item");
function Lp(e, n) {
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
var uu = x({
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Ap(), {
      size: t,
      vertical: o
    } = n, i = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: i
    };
    return r(l), {
      n: zp,
      size: t,
      vertical: o,
      translate: e
    };
  }
});
uu.render = Lp;
const zn = uu;
zn.install = function(e) {
  e.component(zn.name, zn);
};
var zw = zn;
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
var Rp = Vo({
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
}, qe(lu, ["loop", "indicator", "onChange"]), qe(Qa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  // internal for function call closes the dialog
  "onRouteChange"
])), {
  n: Hi,
  classes: Up
} = ee("image-preview"), Wi = 12, ji = 200, Yp = 350, Gi = 200, Fp = ["src", "alt"];
function Hp(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), o = le("var-popup");
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
                    Fp
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
            )) : _("v-if", !0)])];
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
      )) : _("v-if", !0)]), A(
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
var du = x({
  name: "VarImagePreview",
  components: {
    VarSwipe: An,
    VarSwipeItem: zn,
    VarPopup: cn,
    VarIcon: $e
  },
  inheritAttrs: !1,
  props: Rp,
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
      }, Gi);
    }, C = () => {
      a.value = 1, t.value = 0, o.value = 0, s.value = !0, d = null, i.value = void 0, l.value = void 0;
    }, g = (B) => d ? f(d, B) <= Wi && B.timestamp - d.timestamp <= ji && d.target === B.target : !1, $ = (B) => !B || !u || !d ? !1 : f(u, d) <= Wi && Date.now() - d.timestamp < Yp && (B === u.target || B.parentNode === u.target), T = (B) => {
      v = window.setTimeout(() => {
        $(B.target) && I(), u = null;
      }, ji);
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
      } = B.querySelector("." + Hi("image"));
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
        C(), setTimeout(() => P(e["onUpdate:show"], !1), Gi);
        return;
      }
      P(e["onUpdate:show"], !1);
    };
    return ie(() => e.show, (B) => {
      n.value = B;
    }, {
      immediate: !0
    }), {
      n: Hi,
      classes: Up,
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
du.render = Hp;
const or = du;
var Zn;
function dr(e) {
  if (jo()) {
    dr.close();
    var n = Ze(e) ? {
      images: [e]
    } : be(e) ? {
      images: e
    } : e, r = Me(n);
    r.teleport = "body", Zn = r;
    var {
      unmountInstance: a
    } = Ra(or, r, {
      onClose: () => P(r.onClose),
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
  }
}
dr.close = () => {
  if (Zn != null) {
    var e = Zn;
    Zn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
or.install = function(e) {
  e.component(or.name, or);
};
dr.install = function(e) {
  e.component(or.name, or);
};
dr.Component = or;
var Lw = or, vt = {
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
function qi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ki(e) {
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
var {
  n: Wp,
  classes: jp
} = ee("sticky");
function Gp(e, n) {
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
var vu = x({
  name: "VarSticky",
  props: vt,
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
      var w = Ki(function* () {
        a.value = !1, yield Qd(), h();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), $ = /* @__PURE__ */ function() {
      var w = Ki(function* () {
        yield Vn(), c = ba(n.value), c !== window && c.addEventListener("scroll", C), window.addEventListener("scroll", C), C();
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), T = () => {
      c !== window && c.removeEventListener("scroll", C), window.removeEventListener("scroll", C);
    };
    return ie(() => e.disabled, g), Uo($), Yo(T), Ue($), fr(T), {
      n: Wp,
      classes: jp,
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
vu.render = Gp;
const Ln = vu;
Ln.install = function(e) {
  e.component(Ln.name, Ln);
};
var Rw = Ln, fu = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), cu = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function qp() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(fu), {
    length: r
  } = hn(cu);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Kp() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(fu), {
    index: r
  } = gn(cu);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Xp = {
  index: {
    type: [Number, String]
  }
}, {
  n: Zp,
  classes: Jp
} = ee("index-anchor");
function Qp(e, n) {
  return y(), pe(
    La(e.sticky ? e.n("$-sticky") : e.Transition),
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
var mu = x({
  name: "VarIndexAnchor",
  components: {
    VarSticky: Ln
  },
  inheritAttrs: !1,
  props: Xp,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Kp(), t = E(0), o = E(!1), i = F(() => e.index), l = E(null), {
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
      n: Zp,
      classes: Jp,
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
mu.render = Qp;
const Nr = mu;
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
var Uw = Nr, _p = {
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
function Xi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qt(e) {
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
  n: xp,
  classes: eh
} = ee("index-bar"), nh = ["onClick"];
function rh(e, n) {
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
          nh
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
var pu = x({
  name: "VarIndexBar",
  props: _p,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = qp(), t = E(""), o = E(null), i = E(null), l = E([]), s = E(), u = F(() => e.sticky), d = F(() => e.cssMode), v = F(() => De(e.stickyOffsetTop)), f = F(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = (w, S) => {
      var O = Ho(w) ? w.name.value : w;
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
      var w = Ot(o.value), S = o.value === window ? document.body.scrollHeight : o.value.scrollHeight, O = C();
      r.forEach((k, D) => {
        var V = k.ownTop.value, I = w - V + v.value - O, B = D === r.length - 1 ? S : r[D + 1].ownTop.value - k.ownTop.value;
        I >= 0 && I < B && t.value === "" && (D && !e.cssMode && r[D - 1].setDisabled(!0), k.setDisabled(!1), h(k));
      });
    }, $ = /* @__PURE__ */ function() {
      var w = qt(function* (S) {
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
            var I = C(), B = V.ownTop.value - v.value + I, p = Go(o.value);
            t.value = O, h(O, D), yield Ga(o.value, {
              left: p,
              top: B,
              animation: El,
              duration: z(e.duration)
            }), Vt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(O) {
        return w.apply(this, arguments);
      };
    }(), T = (w, S) => {
      Tn(() => $({
        anchorName: w,
        options: S
      }));
    };
    return ie(() => n.value, /* @__PURE__ */ qt(function* () {
      yield Vn(), r.forEach((w) => {
        var {
          name: S,
          setOwnTop: O
        } = w;
        S.value && l.value.push(S.value), O();
      });
    })), Ue(/* @__PURE__ */ qt(function* () {
      yield Vn(), o.value = ba(i.value), o.value.addEventListener("scroll", g);
    })), kt(() => {
      P(o.value.removeEventListener, "scroll", g);
    }), {
      n: xp,
      classes: eh,
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
pu.render = rh;
const Dr = pu;
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
var Yw = Dr;
function ah(e) {
  return ["text", "password", "number"].includes(e);
}
var th = {
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
    validator: ah
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
  n: Kt,
  classes: oh
} = ee("input"), ih = ["id", "disabled", "type", "value", "maxlength", "rows"], lh = ["id", "disabled", "type", "value", "maxlength"], sh = ["for"];
function uh(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
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
          ih
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
          lh
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
          sh
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
var hu = x({
  name: "VarInput",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  props: th,
  setup(e) {
    var n = E("var-input-" + Da().uid), r = E(null), a = E(!1), t = F(() => {
      var {
        maxlength: p,
        modelValue: b
      } = e;
      return p ? Bn(b) ? "0 / " + p : String(b).length + "/" + p : "";
    }), {
      bindForm: o,
      form: i
    } = bn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = yn(), v = (p) => {
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
      if (!p && !Bn(b))
        return Kt("--placeholder-hidden");
      if (p && (!Bn(b) || a.value))
        return Kt("--placeholder-hint");
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
      n: Kt,
      classes: oh,
      isEmpty: Bn,
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
hu.render = uh;
const ir = hu;
ir.install = function(e) {
  e.component(ir.name, ir);
};
var Fw = ir;
function dh(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function vh(e) {
  return ["always", "hover", "none"].includes(e);
}
var fh = {
  type: {
    type: String,
    default: "default",
    validator: dh
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
    validator: vh
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
  n: ch,
  classes: mh
} = ee("link");
function ph(e, n) {
  return y(), pe(
    La(e.tag),
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
var gu = x({
  name: "VarLink",
  props: fh,
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
      n: ch,
      classes: mh,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
gu.render = ph;
const Ar = gu;
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var Hw = Ar, hh = {
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
function Zi(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function gh(e) {
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
  n: yh,
  classes: bh
} = ee("list");
function wh(e, n) {
  var r = le("var-loading"), a = Xe("ripple");
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
    )]) : _("v-if", !0), e.finished ? H(e.$slots, "finished", {
      key: 1
    }, () => [A(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
      /* TEXT, CLASS */
    )]) : _("v-if", !0), e.error ? H(e.$slots, "error", {
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
var yu = x({
  name: "VarList",
  directives: {
    Ripple: We
  },
  components: {
    VarLoading: kn
  },
  props: hh,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      P(e["onUpdate:error"], !1), P(e["onUpdate:loading"], !0), P(e.onLoad);
    }, o = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= l;
    }, i = /* @__PURE__ */ function() {
      var l = gh(function* () {
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
      a = ba(n.value), e.immediateCheck && i(), a.addEventListener("scroll", i);
    }), fr(() => {
      a.removeEventListener("scroll", i);
    }), {
      pack: Fe,
      listEl: n,
      detectorEl: r,
      dt: Pt,
      isNumber: Ke,
      load: t,
      check: i,
      n: yh,
      classes: bh
    };
  }
});
yu.render = wh;
const zr = yu;
zr.install = function(e) {
  e.component(zr.name, zr);
};
var Ww = zr, Ch = {
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
  classes: Sh,
  n: Ji
} = ee("loading-bar");
const kh = x({
  name: "VarLoadingBar",
  props: Ch,
  setup(e) {
    return () => re("div", {
      class: Sh(Ji(), [e.error, Ji("--error")]),
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
var bu, Qi, ln = Me({
  value: 0,
  opacity: 0,
  error: !1
}), $h = (e) => {
  Object.assign(ln, e);
}, wu = () => {
  bu = window.setTimeout(() => {
    if (!(ln.value >= 95)) {
      var e = Math.random();
      ln.value < 70 && (e = Math.round(5 * Math.random())), ln.value += e, wu();
    }
  }, 200);
}, Th = () => {
  Qi || (Qi = !0, Ra(kh, ln)), (!ln.error || ln.value === 100) && (ln.value = 0), setTimeout(() => {
    ln.opacity = 1;
  }, 200), wu();
}, Ph = () => {
  ln.value = 100, setTimeout(() => {
    ln.opacity = 0, setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, 300), window.clearTimeout(bu);
}, Oh = () => {
  ln.error = !0, Ct.start(), setTimeout(Ct.finish, 300);
}, Ct = {
  start: Th,
  finish: Ph,
  error: Oh,
  mergeConfig: $h
}, jw = Ct;
const Mo = Ct;
function Vh(e) {
  return ["click", "hover"].includes(e);
}
function Mh(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Eh = {
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
    validator: Vh
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Mh
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
}, Ih = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ft(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Ih[n];
  });
}
var Rn = "top", vr = "bottom", ca = "right", lr = "left", Lt = "auto", Rt = [Rn, vr, ca, lr], Ut = "start", Ka = "end", Bh = "clippingParents", Cu = "viewport", Ua = "popper", Nh = "reference", _i = /* @__PURE__ */ Rt.reduce(function(e, n) {
  return e.concat([n + "-" + Ut, n + "-" + Ka]);
}, []), Su = /* @__PURE__ */ [].concat(Rt, [Lt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ut, n + "-" + Ka]);
}, []), Dh = "beforeRead", Ah = "read", zh = "afterRead", Lh = "beforeMain", Rh = "main", Uh = "afterMain", Yh = "beforeWrite", Fh = "write", Hh = "afterWrite", Eo = [Dh, Ah, zh, Lh, Rh, Uh, Yh, Fh, Hh];
function Un(e) {
  return e.split("-")[0];
}
var Wh = {
  start: "end",
  end: "start"
};
function xi(e) {
  return e.replace(/start|end/g, function(n) {
    return Wh[n];
  });
}
function wn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function ma(e) {
  var n = wn(e).Element;
  return e instanceof n || e instanceof Element;
}
function mn(e) {
  var n = wn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function ai(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = wn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function mr(e) {
  return ((ma(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Wa = Math.max, el = Math.min, Ia = Math.round;
function Io() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ku() {
  return !/^((?!chrome|android).)*safari/i.test(Io());
}
function Ba(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, o = 1;
  n && mn(e) && (t = e.offsetWidth > 0 && Ia(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Ia(a.height) / e.offsetHeight || 1);
  var i = ma(e) ? wn(e) : window, l = i.visualViewport, s = !ku() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / o, v = a.width / t, f = a.height / o;
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
function ti(e) {
  var n = wn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function oi(e) {
  return Ba(mr(e)).left + ti(e).scrollLeft;
}
function jh(e, n) {
  var r = wn(e), a = mr(e), t = r.visualViewport, o = a.clientWidth, i = a.clientHeight, l = 0, s = 0;
  if (t) {
    o = t.width, i = t.height;
    var u = ku();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: l + oi(e),
    y: s
  };
}
function Pn(e) {
  return wn(e).getComputedStyle(e);
}
function Gh(e) {
  var n, r = mr(e), a = ti(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, o = Wa(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), i = Wa(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + oi(e), s = -a.scrollTop;
  return Pn(t || r).direction === "rtl" && (l += Wa(r.clientWidth, t ? t.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: l,
    y: s
  };
}
function En(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Yt(e) {
  return En(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (ai(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    mr(e)
  );
}
function ii(e) {
  var n = Pn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function $u(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : mn(e) && ii(e) ? e : $u(Yt(e));
}
function ja(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = $u(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), o = wn(a), i = t ? [o].concat(o.visualViewport || [], ii(a) ? a : []) : a, l = n.concat(i);
  return t ? l : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l.concat(ja(Yt(i)))
  );
}
function qh(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function nl(e) {
  return !mn(e) || // https://github.com/popperjs/popper-core/issues/837
  Pn(e).position === "fixed" ? null : e.offsetParent;
}
function Kh(e) {
  var n = /firefox/i.test(Io()), r = /Trident/i.test(Io());
  if (r && mn(e)) {
    var a = Pn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Yt(e);
  for (ai(t) && (t = t.host); mn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var o = Pn(t);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function li(e) {
  for (var n = wn(e), r = nl(e); r && qh(r) && Pn(r).position === "static"; )
    r = nl(r);
  return r && (En(r) === "html" || En(r) === "body" && Pn(r).position === "static") ? n : r || Kh(e) || n;
}
function Xh(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && ai(r)) {
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
function Zh(e, n) {
  var r = Ba(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function rl(e, n, r) {
  return n === Cu ? Bo(jh(e, r)) : ma(n) ? Zh(n, r) : Bo(Gh(mr(e)));
}
function Jh(e) {
  var n = ja(Yt(e)), r = ["absolute", "fixed"].indexOf(Pn(e).position) >= 0, a = r && mn(e) ? li(e) : e;
  return ma(a) ? n.filter(function(t) {
    return ma(t) && Xh(t, a) && En(t) !== "body";
  }) : [];
}
function Qh(e, n, r, a) {
  var t = n === "clippingParents" ? Jh(e) : [].concat(n), o = [].concat(t, [r]), i = o[0], l = o.reduce(function(s, u) {
    var d = rl(e, u, a);
    return s.top = Wa(d.top, s.top), s.right = el(d.right, s.right), s.bottom = el(d.bottom, s.bottom), s.left = Wa(d.left, s.left), s;
  }, rl(e, i, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Xa(e) {
  return e.split("-")[1];
}
function _h(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Tu(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Un(a) : null, o = a ? Xa(a) : null, i = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Rn:
      s = {
        x: i,
        y: n.y - r.height
      };
      break;
    case vr:
      s = {
        x: i,
        y: n.y + n.height
      };
      break;
    case ca:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case lr:
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
  var u = t ? _h(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (o) {
      case Ut:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ka:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function xh() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function eg(e) {
  return Object.assign({}, xh(), e);
}
function ng(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Pu(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, o = r.strategy, i = o === void 0 ? e.strategy : o, l = r.boundary, s = l === void 0 ? Bh : l, u = r.rootBoundary, d = u === void 0 ? Cu : u, v = r.elementContext, f = v === void 0 ? Ua : v, c = r.altBoundary, h = c === void 0 ? !1 : c, C = r.padding, g = C === void 0 ? 0 : C, $ = eg(typeof g != "number" ? g : ng(g, Rt)), T = f === Ua ? Nh : Ua, w = e.rects.popper, S = e.elements[h ? T : f], O = Qh(ma(S) ? S : S.contextElement || mr(e.elements.popper), s, d, i), k = Ba(e.elements.reference), D = Tu({
    reference: k,
    element: w,
    strategy: "absolute",
    placement: t
  }), V = Bo(Object.assign({}, w, D)), I = f === Ua ? V : k, B = {
    top: O.top - I.top + $.top,
    bottom: I.bottom - O.bottom + $.bottom,
    left: O.left - I.left + $.left,
    right: I.right - O.right + $.right
  }, p = e.modifiersData.offset;
  if (f === Ua && p) {
    var b = p[t];
    Object.keys(B).forEach(function(L) {
      var Y = [ca, vr].indexOf(L) >= 0 ? 1 : -1, G = [Rn, vr].indexOf(L) >= 0 ? "y" : "x";
      B[L] += b[G] * Y;
    });
  }
  return B;
}
function rg(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, o = r.rootBoundary, i = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Su : s, d = Xa(a), v = d ? l ? _i : _i.filter(function(h) {
    return Xa(h) === d;
  }) : Rt, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, C) {
    return h[C] = Pu(e, {
      placement: C,
      boundary: t,
      rootBoundary: o,
      padding: i
    })[Un(C)], h;
  }, {});
  return Object.keys(c).sort(function(h, C) {
    return c[h] - c[C];
  });
}
function ag(e) {
  if (Un(e) === Lt)
    return [];
  var n = ft(e);
  return [xi(e), n, xi(n)];
}
function tg(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, o = t === void 0 ? !0 : t, i = r.altAxis, l = i === void 0 ? !0 : i, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, C = r.allowedAutoPlacements, g = n.options.placement, $ = Un(g), T = $ === g, w = s || (T || !h ? [ft(g)] : ag(g)), S = [g].concat(w).reduce(function(ae, oe) {
      return ae.concat(Un(oe) === Lt ? rg(n, {
        placement: oe,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: C
      }) : oe);
    }, []), O = n.rects.reference, k = n.rects.popper, D = /* @__PURE__ */ new Map(), V = !0, I = S[0], B = 0; B < S.length; B++) {
      var p = S[B], b = Un(p), L = Xa(p) === Ut, Y = [Rn, vr].indexOf(b) >= 0, G = Y ? "width" : "height", R = Pu(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Q = Y ? L ? ca : lr : L ? vr : Rn;
      O[G] > k[G] && (Q = ft(Q));
      var W = ft(Q), J = [];
      if (o && J.push(R[b] <= 0), l && J.push(R[Q] <= 0, R[W] <= 0), J.every(function(ae) {
        return ae;
      })) {
        I = p, V = !1;
        break;
      }
      D.set(p, J);
    }
    if (V)
      for (var N = h ? 3 : 1, X = function(oe) {
        var ce = S.find(function(ye) {
          var Ye = D.get(ye);
          if (Ye)
            return Ye.slice(0, oe).every(function(Qe) {
              return Qe;
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
const og = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: tg,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ig(e, n, r) {
  var a = Un(e), t = [lr, Rn].indexOf(a) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, i = o[0], l = o[1];
  return i = i || 0, l = (l || 0) * t, [lr, ca].indexOf(a) >= 0 ? {
    x: l,
    y: i
  } : {
    x: i,
    y: l
  };
}
function lg(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, o = t === void 0 ? [0, 0] : t, i = Su.reduce(function(d, v) {
    return d[v] = ig(v, n.rects, o), d;
  }, {}), l = i[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = i;
}
const sg = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: lg
};
function ug(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function dg(e) {
  return e === wn(e) || !mn(e) ? ti(e) : ug(e);
}
function vg(e) {
  var n = e.getBoundingClientRect(), r = Ia(n.width) / e.offsetWidth || 1, a = Ia(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function fg(e, n, r) {
  r === void 0 && (r = !1);
  var a = mn(n), t = mn(n) && vg(n), o = mr(n), i = Ba(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  ii(o)) && (l = dg(n)), mn(n) ? (s = Ba(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : o && (s.x = oi(o))), {
    x: i.left + l.scrollLeft - s.x,
    y: i.top + l.scrollTop - s.y,
    width: i.width,
    height: i.height
  };
}
function cg(e) {
  var n = Ba(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function mg(e) {
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
function pg(e) {
  var n = mg(e);
  return Eo.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function hg(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Wn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, o) {
    return t.replace(/%s/, o);
  }, e);
}
var pr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', gg = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', al = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function yg(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), al).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Wn(pr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Wn(pr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Eo.indexOf(n.phase) < 0 && console.error(Wn(pr, n.name, '"phase"', "either " + Eo.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Wn(pr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Wn(pr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Wn(pr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Wn(pr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + al.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Wn(gg, String(n.name), a, a));
      });
    });
  });
}
function bg(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function wg(e) {
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
var tl = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Cg = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", ol = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function il() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Sg(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, o = t === void 0 ? ol : t;
  return function(l, s, u) {
    u === void 0 && (u = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ol, o),
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
          reference: ma(l) ? ja(l) : l.contextElement ? ja(l.contextElement) : [],
          popper: ja(s)
        };
        var w = pg(wg([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = bg([].concat(w, d.options.modifiers), function(p) {
            var b = p.name;
            return b;
          });
          if (yg(S), Un(d.options.placement) === Lt) {
            var O = d.orderedModifiers.find(function(p) {
              var b = p.name;
              return b === "flip";
            });
            O || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = Pn(s), D = k.marginTop, V = k.marginRight, I = k.marginBottom, B = k.marginLeft;
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
          if (!il(T, w)) {
            process.env.NODE_ENV !== "production" && console.error(tl);
            return;
          }
          d.rects = {
            reference: fg(T, li(w), d.options.strategy === "fixed"),
            popper: cg(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var S = 0, O = 0; O < d.orderedModifiers.length; O++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Cg);
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
      update: hg(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        C(), f = !0;
      }
    };
    if (!il(l, s))
      return process.env.NODE_ENV !== "production" && console.error(tl), c;
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
var it = {
  passive: !0
};
function kg(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, o = t === void 0 ? !0 : t, i = a.resize, l = i === void 0 ? !0 : i, s = wn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return o && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, it);
  }), l && s.addEventListener("resize", r.update, it), function() {
    o && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, it);
    }), l && s.removeEventListener("resize", r.update, it);
  };
}
const $g = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: kg,
  data: {}
};
function Tg(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Tu({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Pg = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Tg,
  data: {}
};
var Og = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Vg(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ia(n * t) / t || 0,
    y: Ia(r * t) / t || 0
  };
}
function ll(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, o = e.variation, i = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = i.x, c = f === void 0 ? 0 : f, h = i.y, C = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: c,
    y: C
  }) : {
    x: c,
    y: C
  };
  c = g.x, C = g.y;
  var $ = i.hasOwnProperty("x"), T = i.hasOwnProperty("y"), w = lr, S = Rn, O = window;
  if (u) {
    var k = li(r), D = "clientHeight", V = "clientWidth";
    if (k === wn(r) && (k = mr(r), Pn(k).position !== "static" && l === "absolute" && (D = "scrollHeight", V = "scrollWidth")), k = k, t === Rn || (t === lr || t === ca) && o === Ka) {
      S = vr;
      var I = v && k === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        k[D]
      );
      C -= I - a.height, C *= s ? 1 : -1;
    }
    if (t === lr || (t === Rn || t === vr) && o === Ka) {
      w = ca;
      var B = v && k === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        k[V]
      );
      c -= B - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && Og), b = d === !0 ? Vg({
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
function Mg(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, o = r.adaptive, i = o === void 0 ? !0 : o, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Pn(n.elements.popper).transitionProperty || "";
    i && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Un(n.placement),
    variation: Xa(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, ll(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: i,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, ll(Object.assign({}, d, {
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
  fn: Mg,
  data: {}
};
function Ig(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, o = n.elements[r];
    !mn(o) || !En(o) || (Object.assign(o.style, a), Object.keys(t).forEach(function(i) {
      var l = t[i];
      l === !1 ? o.removeAttribute(i) : o.setAttribute(i, l === !0 ? "" : l);
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
      var t = n.elements[a], o = n.attributes[a] || {}, i = Object.keys(n.styles.hasOwnProperty(a) ? n.styles[a] : r[a]), l = i.reduce(function(s, u) {
        return s[u] = "", s;
      }, {});
      !mn(t) || !En(t) || (Object.assign(t.style, l), Object.keys(o).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Ng = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ig,
  effect: Bg,
  requires: ["computeStyles"]
};
var Dg = [$g, Pg, Eg, Ng], Ag = /* @__PURE__ */ Sg({
  defaultModifiers: Dg
});
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
function sl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ul(e) {
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
function Ou(e) {
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
    var k = ul(function* () {
      e.trigger === "hover" && (u = !1, yield Vn(), !s && O());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, h = /* @__PURE__ */ function() {
    var k = ul(function* () {
      e.trigger === "hover" && (s = !1, yield Vn(), !u && O());
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
    } = $(), I = [St({}, og, {
      enabled: a.value
    }), St({}, sg, {
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
  return ie(() => e.show, (k) => {
    a.value = k ?? !1;
  }, {
    immediate: !0
  }), ie(() => e.offsetX, w), ie(() => e.offsetY, w), ie(() => e.placement, w), ie(() => a.value, (k) => {
    k ? (w(), P(e.onOpen)) : P(e.onClose);
  }), ie(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", g) : document.removeEventListener("click", g);
  }), ie(() => e.disabled, O), Ue(() => {
    i = Ag(n.value, r.value, T()), e.trigger === "click" && document.addEventListener("click", g);
  }), fr(() => {
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
  n: zg,
  classes: Lg
} = ee("menu");
function Rg(e, n) {
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
      Aa,
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
              onClick: n[0] || (n[0] = On(() => {
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
          ), [[za, e.show]])]),
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
var Vu = x({
  name: "VarMenu",
  props: Eh,
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
    } = Ou(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: o,
      toSizeUnit: we,
      n: zg,
      classes: Lg,
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
Vu.render = Rg;
const Yn = Vu;
Yn.install = function(e) {
  e.component(Yn.name, Yn);
};
var Gw = Yn, Mu = Symbol("SELECT_BIND_OPTION_KEY"), Eu = Symbol("SELECT_COUNT_OPTION_KEY");
function Ug() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Mu), {
    length: r
  } = hn(Eu);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Yg() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Mu), {
    index: r
  } = gn(Eu);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Fg = {
  label: {},
  value: {}
}, {
  n: Hg,
  classes: Wg
} = ee("option");
function jg(e, n) {
  var r = le("var-checkbox"), a = Xe("ripple");
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
        onClick: n[1] || (n[1] = On(() => {
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
var Iu = x({
  name: "VarOption",
  directives: {
    Ripple: We
  },
  components: {
    VarCheckbox: rr
  },
  props: Fg,
  setup(e) {
    var n = E(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: o,
      bindSelect: i
    } = Yg(), {
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
      n: Hg,
      classes: Wg,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Iu.render = jg;
const Lr = Iu;
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var qw = Lr, Gg = {
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
function qg(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: dl
} = ee("overlay");
const Rr = x({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Gg,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = _a(() => e.show, 1), {
      disabled: o
    } = qo(), i = () => {
      P(e.onClick), P(e["onUpdate:show"], !1);
    };
    Mt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: dl(),
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
        name: dl("--fade")
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
        return re(Aa, {
          to: u,
          disabled: o.value
        }, qg(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var Kw = Rr, Kg = {
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
  n: Xg,
  classes: Zg
} = ee("pagination"), Jg = ["item-mode", "onClick"];
function Qg(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), o = le("var-menu"), i = Xe("ripple");
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
          onKeydown: n[3] || (n[3] = fi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
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
        Jg
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
    )) : _("v-if", !0), e.showQuickJumper && !e.simple ? (y(), M(
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
          onKeydown: n[9] || (n[9] = fi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
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
var Bu = x({
  name: "VarPagination",
  components: {
    VarMenu: Yn,
    VarIcon: $e,
    VarCell: nr,
    VarInput: ir
  },
  directives: {
    Ripple: We
  },
  props: Kg,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), o = E(!1), i = E(z(e.current) || 1), l = E(z(e.size) || 10), s = E([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(z(e.total) / z(l.value))), v = F(() => {
      var S = l.value * (i.value - 1) + 1, O = Math.min(l.value * i.value, z(e.total));
      return [S, O];
    }), f = F(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (S, O) => Ke(S) ? !1 : O === 1 ? t.value : o.value, h = (S, O) => Ke(S) ? "basic" : O === 1 ? "head" : "tail", C = (S, O) => {
      S === i.value || e.disabled || (Ke(S) ? i.value = S : S === "prev" ? i.value > 1 && (i.value -= 1) : S === "next" ? i.value < d.value && (i.value += 1) : S === "..." && (O === 1 ? i.value = Math.max(i.value - e.maxPagerCount, 1) : i.value = Math.min(i.value + e.maxPagerCount, d.value)));
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
    return ie([() => e.current, () => e.size], (S) => {
      var [O, k] = S;
      i.value = z(O) || 1, l.value = z(k || 10);
    }), ie([i, l, d], (S, O) => {
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
      n: Xg,
      classes: Zg,
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
Bu.render = Qg;
const Ur = Bu;
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var Xw = Ur;
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
var _g = No({
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
}, qe(Qa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: xg,
  classes: ey
} = ee("picker"), vl = 300, ny = 15, fl = 0, ry = ["onTouchstart", "onTouchmove", "onTouchend"], ay = ["onTransitionend"];
function ty(e, n) {
  var r = le("var-button");
  return y(), pe(
    La(e.dynamic ? e.n("$-popup") : e.Transition),
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
                onTouchmove: On((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                ay
              )],
              42,
              ry
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
var Nu = x({
  name: "VarPicker",
  components: {
    VarButton: nn,
    VarPopup: cn
  },
  inheritAttrs: !1,
  props: _g,
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
      b.touching = !0, b.scrolling = !1, b.duration = 0, b.translate = Wt(b.scrollEl);
    }, g = (p, b) => {
      if (b.touching) {
        var {
          clientY: L
        } = p.touches[0], Y = b.prevY !== void 0 ? L - b.prevY : 0;
        b.prevY = L, b.translate += Y, u(b);
        var G = performance.now();
        G - b.momentumTime > vl && (b.momentumTime = G, b.momentumPrevY = b.translate);
      }
    }, $ = (p, b) => {
      b.touching = !1, b.scrolling = !0, b.prevY = void 0;
      var L = b.translate - b.momentumPrevY, Y = performance.now() - b.momentumTime, G = Math.abs(L) >= ny && Y <= vl;
      G && h(b, L, Y), b.index = v(b), c(b, b.index, G ? 1e3 : 200);
    }, T = (p) => {
      p.scrolling = !1, D(p);
    }, w = (p) => p.map((b, L) => {
      var Y, G = be(b) ? {
        texts: b
      } : b, R = {
        id: fl++,
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
          id: fl++,
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
        p && (p.translate = Wt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, k(p));
      } else
        n.value.forEach((b) => {
          b.translate = Wt(b.scrollEl), b.index = v(b), c(b, b.index, 0);
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
      n.value = e.cascade ? S(ci(p)) : w(ci(p));
      var {
        indexes: b
      } = f();
      i = [...b];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: xg,
      classes: ey,
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
      dt: Pt
    };
  }
});
Nu.render = ty;
const sr = Nu;
var rn;
function pa(e) {
  return new Promise((n) => {
    pa.close();
    var r = be(e) ? {
      columns: e
    } : e, a = Me(r);
    a.dynamic = !0, a.teleport = "body", rn = a;
    var {
      unmountInstance: t
    } = Ra(sr, a, {
      onConfirm: (o, i) => {
        P(a.onConfirm, o, i), n({
          state: "confirm",
          texts: o,
          indexes: i
        }), a.show = !1, rn === a && (rn = null);
      },
      onCancel: (o, i) => {
        P(a.onCancel, o, i), n({
          state: "cancel",
          texts: o,
          indexes: i
        }), a.show = !1, rn === a && (rn = null);
      },
      onClose: () => {
        P(a.onClose), n({
          state: "close"
        }), rn === a && (rn = null);
      },
      onClosed: () => {
        P(a.onClosed), t(), rn === a && (rn = null);
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
sr.install = function(e) {
  e.component(sr.name, sr);
};
pa.Component = sr;
pa.install = function(e) {
  e.component(sr.name, sr);
};
pa.close = () => {
  if (rn != null) {
    var e = rn;
    rn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
var Zw = sr;
function oy(e) {
  return ["linear", "circle"].includes(e);
}
var iy = {
  mode: {
    type: String,
    default: "linear",
    validator: oy
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
  n: ly,
  classes: sy
} = ee("progress"), uy = ["viewBox"], dy = ["cx", "cy", "r", "stroke-width"], vy = ["cx", "cy", "r", "stroke-width"];
function fy(e, n) {
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
        )) : _("v-if", !0), A(
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
      )) : _("v-if", !0)],
      2
      /* CLASS */
    )) : _("v-if", !0), e.mode === "circle" ? (y(), M(
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
          dy
        )) : _("v-if", !0), A(
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
          vy
        )],
        14,
        uy
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
      )) : _("v-if", !0)],
      6
      /* CLASS, STYLE */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Du = x({
  name: "VarProgress",
  props: iy,
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
      n: ly,
      classes: sy,
      toSizeUnit: we,
      multiplySizeUnit: xe,
      linearProps: n,
      circleProps: r
    };
  }
});
Du.render = fy;
const Yr = Du;
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var Jw = Yr, cy = {
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
function cl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function my(e) {
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
var {
  n: ml,
  classes: py
} = ee("pull-refresh"), pl = 150;
function hy(e, n) {
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
var Au = x({
  name: "VarPullRefresh",
  components: {
    VarIcon: $e
  },
  props: cy,
  setup(e) {
    var n, r, a = E(0), t = E(null), o = E(null), i = E(0), l = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = 0, f = 0, c = E(!0), h = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), C = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: $.value ? e.successBgColor : e.bgColor,
      color: $.value ? e.successColor : e.color
    })), g = F(() => Math.abs(2 * a.value)), $ = F(() => u.value === "success"), T = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, pl);
    }), w = (I) => {
      var B = "classList" in n ? n : document.body;
      B.classList[I](ml() + "--lock");
    }, S = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, O = (I) => {
      if (h.value) {
        var B = Ot(n);
        if (!(B > 0)) {
          var p = B === 0, b = I.touches[0];
          f = b.clientY - v, p && f >= 0 && I.preventDefault(), u.value !== "pulling" && (u.value = "pulling", i.value = I.touches[0].clientY), p && l.value > a.value && w("add");
          var L = (I.touches[0].clientY - i.value) / 2 + a.value;
          l.value = L >= g.value ? g.value : L, l.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = T()) : s.value = "arrow-down";
        }
      }
    }, k = /* @__PURE__ */ function() {
      var I = my(function* () {
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
    return ie(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, V();
      }, z(e.successDuration)));
    }), Ue(() => {
      var I;
      n = e.target ? Bl(e.target, "PullRefresh") : ba(t.value), D(), (I = t.value) == null || I.addEventListener("touchmove", O, {
        passive: !1
      });
    }), kt(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", O);
    }), {
      n: ml,
      classes: py,
      iconHasChanged: c,
      ICON_TRANSITION: pl,
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
Au.render = hy;
const Fr = Au;
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Qw = Fr, gy = {
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
}, zu = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Lu = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function yy() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(zu), {
    length: r
  } = hn(Lu);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function by() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(zu), {
    index: r
  } = gn(Lu);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: wy,
  classes: Cy
} = ee("radio");
function Sy(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
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
var Ru = x({
  name: "VarRadio",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: gy,
  setup(e) {
    var n = E(!1), r = F(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: o
    } = by(), {
      form: i,
      bindForm: l
    } = bn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      // expose
      resetValidation: v
    } = yn(), f = (S) => {
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
      n: wy,
      classes: Cy,
      handleClick: h,
      toggle: T,
      reset: g,
      validate: $,
      resetValidation: v
    };
  }
});
Ru.render = Sy;
const Hr = Ru;
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var _w = Hr;
function ky(e) {
  return ["horizontal", "vertical"].includes(e);
}
var $y = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: ky
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
  n: Ty,
  classes: Py
} = ee("radio-group");
function Oy(e, n) {
  var r = le("var-form-details");
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
var Uu = x({
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: $y,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = yy(), {
      bindForm: t
    } = bn(), {
      errorMessage: o,
      validateWithTrigger: i,
      validate: l,
      // expose
      resetValidation: s
    } = yn(), u = F(() => o.value), d = (g) => {
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
      n: Ty,
      classes: Py,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
Uu.render = Oy;
const Wr = Uu;
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var xw = Wr, Vy = {
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
  n: Ya
} = ee("rate"), My = ["onClick"];
function Ey(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
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
          My
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
var Yu = x({
  name: "VarRate",
  components: {
    VarIcon: $e,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  props: Vy,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = bn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = yn(), l = (g) => {
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
        [Ya("content")]: !0,
        [Ya("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ya("--error")]: a.value,
        [Ya("--primary")]: $ !== e.emptyIcon && !T
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
      n: Ya
    };
  }
});
Yu.render = Ey;
const jr = Yu;
jr.install = function(e) {
  e.component(jr.name, jr);
};
var eC = jr;
function Iy(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var By = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Iy
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
}, Ny = (e) => (ga(""), e = e(), ya(), e), Dy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Ay = /* @__PURE__ */ Ny(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
  /* HOISTED */
)), zy = [Ay];
function Ly(e, n) {
  return y(), M("svg", Dy, zy);
}
var Fu = x({});
Fu.render = Ly;
const Ry = Fu;
var Uy = (e) => (ga(""), e = e(), ya(), e), Yy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Fy = /* @__PURE__ */ Uy(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
  /* HOISTED */
)), Hy = [Fy];
function Wy(e, n) {
  return y(), M("svg", Yy, Hy);
}
var Hu = x({});
Hu.render = Wy;
const jy = Hu;
var Gy = (e) => (ga(""), e = e(), ya(), e), qy = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Ky = /* @__PURE__ */ Gy(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
  /* HOISTED */
)), Xy = [Ky];
function Zy(e, n) {
  return y(), M("svg", qy, Xy);
}
var Wu = x({});
Wu.render = Zy;
const Jy = Wu;
var {
  n: Qy,
  classes: _y
} = ee("result");
function xy(e, n) {
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
var ju = x({
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
      n: Qy,
      classes: _y,
      toNumber: z
    };
  }
});
ju.render = xy;
const e0 = ju;
var n0 = (e) => (ga(""), e = e(), ya(), e), r0 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, a0 = /* @__PURE__ */ n0(() => /* @__PURE__ */ A(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
  /* HOISTED */
)), t0 = [a0];
function o0(e, n) {
  return y(), M("svg", r0, t0);
}
var Gu = x({});
Gu.render = o0;
const i0 = Gu;
var l0 = (e) => (ga(""), e = e(), ya(), e), s0 = {
  viewBox: "-4 -4 32 32"
}, u0 = /* @__PURE__ */ l0(() => /* @__PURE__ */ A(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
  /* HOISTED */
)), d0 = [u0];
function v0(e, n) {
  return y(), M("svg", s0, d0);
}
var qu = x({});
qu.render = v0;
const f0 = qu;
var {
  n: c0,
  classes: m0
} = ee("result");
function p0(e, n) {
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
          La(e.type),
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
    )) : _("v-if", !0)]), H(e.$slots, "title", {}, () => [e.title ? (y(), M(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
      /* TEXT, CLASS */
    )) : _("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (y(), M(
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
      [H(e.$slots, "footer")],
      2
      /* CLASS */
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ku = x({
  name: "VarResult",
  components: {
    Info: Ry,
    Success: e0,
    Warning: Jy,
    Error: jy,
    Question: i0,
    Empty: f0
  },
  props: By,
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
      n: c0,
      classes: m0,
      toNumber: z,
      toPxNum: De,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
Ku.render = p0;
const Gr = Ku;
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var nC = Gr;
function h0(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function g0(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var y0 = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: h0
  },
  align: {
    type: String,
    default: "flex-start",
    validator: g0
  },
  onClick: U()
}, {
  n: b0,
  classes: w0
} = ee("row");
function C0(e, n) {
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
var Xu = x({
  name: "VarRow",
  props: y0,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = ec(), t = F(() => {
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
    return ie(() => a.value, o), ie(() => e.gutter, o), r(i), {
      n: b0,
      classes: w0,
      average: t
    };
  }
});
Xu.render = C0;
const qr = Xu;
qr.install = function(e) {
  e.component(qr.name, qr);
};
var rC = qr;
function S0(e) {
  return ["left", "right", "center"].includes(e);
}
var k0 = {
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
    validator: S0
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
  n: Xt,
  classes: $0
} = ee("select"), T0 = {
  key: 1
};
function P0(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), o = le("var-form-details");
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
                [e.isEmptyModelValue ? _("v-if", !0) : H(e.$slots, "selected", {
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
                          onClick: n[0] || (n[0] = On(() => {
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
                  T0,
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
var Zu = x({
  name: "VarSelect",
  components: {
    VarIcon: $e,
    VarMenu: Yn,
    VarChip: ar,
    VarFormDetails: He
  },
  props: k0,
  setup(e) {
    var n = E(null), r = E(!1), a = F(() => e.multiple), t = F(() => e.focusColor), o = E(""), i = E([]), l = F(() => Bn(e.modelValue)), s = E("0px"), u = E(0), {
      bindForm: d,
      form: v
    } = bn(), {
      length: f,
      options: c,
      bindOptions: h
    } = Ug(), {
      errorMessage: C,
      validateWithTrigger: g,
      validate: $,
      // expose
      resetValidation: T
    } = yn(), w = E(null), S = () => {
      var {
        multiple: j,
        modelValue: Z
      } = e;
      if (j) {
        var ae = Z;
        i.value = ae.map(D);
      }
      !j && !Bn(Z) && (o.value = D(Z)), !j && Bn(Z) && (o.value = "");
    }, O = (j) => {
      Ee(() => {
        var {
          validateTrigger: Z,
          rules: ae,
          modelValue: oe
        } = e;
        g(Z, j, ae, oe);
      });
    }, k = (j) => {
      var {
        value: Z,
        label: ae
      } = j;
      return Z.value != null ? Z.value : ae.value;
    }, D = (j) => {
      var Z, ae, oe = c.find((ce) => {
        var {
          value: ye
        } = ce;
        return ye.value === j;
      });
      return oe || (oe = c.find((ce) => {
        var {
          label: ye
        } = ce;
        return ye.value === j;
      })), (Z = (ae = oe) == null ? void 0 : ae.label.value) != null ? Z : "";
    }, V = () => {
      var {
        hint: j,
        modelValue: Z
      } = e;
      if (!j && !Bn(Z))
        return Xt("--placeholder-hidden");
      if (j && (!Bn(Z) || r.value))
        return Xt("--placeholder-hint");
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
        multiple: oe,
        onChange: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var ye = oe ? c.filter((Ye) => {
          var {
            selected: Qe
          } = Ye;
          return Qe.value;
        }).map(k) : k(j);
        P(e["onUpdate:modelValue"], ye), P(ce, ye), O("onChange"), !oe && (r.value = !1);
      }
    }, L = () => {
      var {
        disabled: j,
        readonly: Z,
        multiple: ae,
        clearable: oe,
        onClear: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || j || Z || !oe)) {
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
        modelValue: oe,
        onClose: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Z || ae)) {
        var ye = oe, Ye = c.find((Be) => {
          var {
            label: je
          } = Be;
          return je.value === j;
        }), Qe = ye.filter((Be) => {
          var je;
          return Be !== ((je = Ye.value.value) != null ? je : Ye.label.value);
        });
        P(e["onUpdate:modelValue"], Qe), P(ce, Qe), O("onClose");
      }
    }, R = () => {
      var {
        multiple: j,
        modelValue: Z
      } = e;
      if (j) {
        var ae = Z;
        c.forEach((oe) => oe.sync(ae.includes(k(oe))));
      } else
        c.forEach((oe) => oe.sync(Z === k(oe)));
      S();
    }, Q = () => {
      s.value = I(), u.value = De(e.offsetY), r.value = !0;
    }, W = () => {
      r.value = !1;
    }, J = () => $(e.rules, e.modelValue), N = () => {
      P(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    ie(() => e.multiple, () => {
      var {
        multiple: j,
        modelValue: Z
      } = e;
      if (j && !be(Z))
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
      n: Xt,
      classes: $0,
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
Zu.render = P0;
const Kr = Zu;
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var aC = Kr, O0 = {
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
  n: V0,
  classes: M0
} = ee("skeleton");
function E0(e, n) {
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
          )) : _("v-if", !0), (y(!0), M(
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Ju = x({
  name: "VarSkeleton",
  props: O0,
  setup() {
    return {
      n: V0,
      classes: M0,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Ju.render = E0;
const Xr = Ju;
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var tC = Xr;
function I0(e) {
  return ["always", "normal", "never"].includes(e);
}
var Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var B0 = {
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
    validator: I0
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
  n: hl,
  classes: N0
} = ee("slider"), D0 = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function A0(e, n) {
  var r = le("var-form-details");
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
            onTouchstart: On((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: On((t) => e.move(t, a.enumValue), ["stop"]),
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
          D0
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
var Qu = x({
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: B0,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = bn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = yn(), l = () => o(e.rules, e.modelValue), s = () => ({
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
      }] : Ke(W) && (N = [{
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
      if (!Ke(W))
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
        min: oe
      } = e, ce = z(X), ye = Math.round(W / C.value), Ye = ye * ce + z(oe), Qe = c[J].percentValue * ce + z(oe);
      if (c[J].percentValue = ye, j && be(Z) && (N = J === Ie.First ? [Ye, Z[1]] : [Z[0], Ye]), Qe !== Ye) {
        var Be = j ? N.map((je) => k(je)) : k(Ye);
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
        var oe = c[W].percentValue * z(j) + z(Z);
        J && be(N) && (ae = W === Ie.First ? [oe, N[1]] : [N[0], oe]), P(X, J ? ae : oe), f.value = !1;
      }
    }, b = (W) => {
      if (!(T.value || w.value) && !W.target.closest("." + hl("thumb"))) {
        var J = W.clientX - Wd(W.currentTarget), N = V(J);
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
      e.range && be(W) ? (c[Ie.First].percentValue = N(W[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * C.value, c[Ie.Second].percentValue = N(W[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * C.value) : Ke(W) && (c[Ie.First].currentLeft = N(W) * C.value);
    }, R = () => {
      var W = e.range ? [0, 0] : 0;
      P(e["onUpdate:modelValue"], W), i();
    }, Q = {
      reset: R,
      validate: l,
      resetValidation: i
    };
    return P(n, Q), ie([() => e.modelValue, () => e.step], (W) => {
      var [J, N] = W;
      !L() || !Y() || f.value || G(J, z(N));
    }), ie(v, () => G()), Ue(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: hl,
      classes: N0,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: $,
      isDisabled: T,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: xe,
      toNumber: z,
      showLabel: S,
      start: I,
      move: B,
      end: p,
      click: b
    };
  }
});
Qu.render = A0;
const Zr = Qu;
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var oC = Zr;
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
function z0(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function L0(e) {
  return si.includes(e);
}
var _u = {
  type: {
    type: String,
    validator: L0
  },
  // snackbar显示的位置
  position: {
    type: String,
    default: "top",
    validator: z0
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
  loadingType: qe(Jn, "type"),
  loadingSize: qe(Jn, "size"),
  loadingRadius: qe(Jn, "radius"),
  loadingColor: Do({}, qe(Jn, "color"), {
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
  n: R0,
  classes: U0
} = ee("snackbar"), Y0 = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function F0(e, n) {
  var r = le("var-icon"), a = le("var-loading");
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
        )) : _("v-if", !0), e.type === "loading" ? (y(), pe(
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
        )) : _("v-if", !0), H(e.$slots, "action")],
        2
        /* CLASS */
      )],
      6
      /* CLASS, STYLE */
    )],
    6
    /* CLASS, STYLE */
  )), [[za, e.show]]);
}
var xu = x({
  name: "VarSnackbarCore",
  components: {
    VarLoading: kn,
    VarIcon: $e
  },
  props: _u,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = _a(() => e.show, 1);
    Mt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? Y0[e.type] : ""), o = () => {
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
      SNACKBAR_TYPE: si,
      n: R0,
      classes: U0,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
xu.render = F0;
const ed = xu;
var {
  n: H0
} = ee("snackbar");
function W0(e, n) {
  var r = le("var-snackbar-core");
  return y(), pe(
    Aa,
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
var nd = x({
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: ed
  },
  props: _u,
  setup() {
    var {
      disabled: e
    } = qo();
    return {
      n: H0,
      disabled: e
    };
  }
});
nd.render = W0;
const Jr = nd;
function Za() {
  return Za = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Za.apply(this, arguments);
}
function j0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var si = ["loading", "success", "warning", "info", "error"], gl = 0, Ao = !1, rd, Na = !1, pn = Me([]), G0 = {
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
}, q0 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, K0 = {
  setup() {
    return () => {
      var e = pn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: o
        } = r, i = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? i.classList.add("var-pointer-auto") : i.classList.remove("var-pointer-auto"), Na && (t.position = "top");
        var l = Na ? "relative" : "absolute", s = Za({
          position: l
        }, _0(t.position));
        return re(ed, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: o,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = sn.zIndex;
      return re(Ad, Ve(q0, {
        style: {
          zIndex: n
        },
        onAfterEnter: X0,
        onAfterLeave: Z0
      }), j0(e) ? e : {
        default: () => [e]
      });
    };
  }
}, ha = function(e) {
  var n = Ze(e) || Ke(e) ? {
    content: String(e)
  } : e, r = Me(Za({}, G0, n));
  r.show = !0, Ao || (Ao = !0, rd = Ra(K0).unmountInstance);
  var {
    length: a
  } = pn, t = {
    id: gl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Na)
    J0(t);
  else {
    var o = "update-" + gl;
    Q0(r, o);
  }
  return {
    clear() {
      !Na && pn.length ? pn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
si.forEach((e) => {
  ha[e] = (n) => (Ho(n) ? n.type = e : n = {
    content: n,
    type: e
  }, ha(n));
});
ha.install = function(e) {
  e.component(Jr.name, Jr);
};
ha.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Na && (pn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Na = e);
};
ha.clear = function() {
  pn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
ha.Component = Jr;
function X0(e) {
  var n = e.getAttribute("data-id"), r = pn.find((a) => a.id === z(n));
  r && P(r.reactiveSnackOptions.onOpened);
}
function Z0(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = pn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, P(r.reactiveSnackOptions.onClosed));
  var a = pn.every((t) => t.animationEnd);
  a && (P(rd), pn = Me([]), Ao = !1);
}
function J0(e) {
  pn.push(e);
}
function Q0(e, n) {
  var [r] = pn;
  r.reactiveSnackOptions = Za({}, r.reactiveSnackOptions, e), r._update = n;
}
function _0(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var iC = Jr;
const zo = ha;
var ad = (e) => ["mini", "small", "normal", "large"].includes(e), x0 = (e) => ad(e) || be(e) || Ke(e) || Ze(e), eb = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), nb = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: x0
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
    validator: eb
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function on(e) {
  return "calc(" + e + " / 2)";
}
function rb(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: o,
    lastIndex: i
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? o !== i ? l = on(e) + " " + n + " " + on(e) + " 0" : l = on(e) + " 0" : t === "space-around" ? l = on(e) + " " + on(n) : t === "space-between" && (o === 0 ? l = on(e) + " " + on(n) + " " + on(e) + " 0" : o === i ? l = on(e) + " 0 " + on(e) + " " + on(n) : l = on(e) + " " + on(n))), a === "column" && o !== i && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Zt,
  classes: ab
} = ee("space");
const Qr = x({
  name: "VarSpace",
  props: nb,
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
      } = e, f = (o = P(r.default)) != null ? o : [], c = ad(v), [h, C] = a(v, c), g = (w) => {
        var S = [];
        return w.forEach((O) => {
          if (O.type !== zd) {
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
        var O = rb(h, C, {
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
        class: ab(Zt(), Zt("$--box"), [i, Zt("--inline")]),
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
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var lC = Qr, tb = {
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
}, td = Symbol("STEPS_BIND_STEP_KEY"), od = Symbol("STEPS_COUNT_STEP_KEY");
function ob() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(td), {
    length: r
  } = hn(od);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function ib() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(td), {
    index: r
  } = gn(od);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: lb,
  classes: sb
} = ee("step"), ub = {
  key: 3
};
function db(e, n) {
  var r = le("var-icon");
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
            ub,
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
      ), e.isLastChild ? _("v-if", !0) : (y(), M(
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
var id = x({
  name: "VarStep",
  components: {
    VarIcon: $e
  },
  props: tb,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: o
    } = ib(), {
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
      n: lb,
      classes: sb,
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
id.render = db;
const _r = id;
_r.install = function(e) {
  e.component(_r.name, _r);
};
var sC = _r;
function vb(e) {
  return ["horizontal", "vertical"].includes(e);
}
var fb = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: vb
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: cb
} = ee("steps");
function mb(e, n) {
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
var ld = x({
  name: "VarSteps",
  props: fb,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: o,
      bindStep: i
    } = ob(), l = (u) => {
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
      n: cb
    };
  }
});
ld.render = mb;
const xr = ld;
xr.install = function(e) {
  e.component(xr.name, xr);
};
var uC = xr, pb = {
  styleVars: {
    type: Object,
    default: () => ({})
  },
  tag: {
    type: String,
    default: "div"
  }
}, {
  n: hb
} = ee("style-provider"), gb = x({
  name: "VarStyleProvider",
  props: pb,
  setup(e, n) {
    var {
      slots: r
    } = n;
    return () => Ol(e.tag, {
      class: hb(),
      style: zl(e.styleVars)
    }, P(r.default));
  }
});
const ea = gb;
var Jt = [];
function Ja(e) {
  Jt.forEach((r) => document.documentElement.style.removeProperty(r)), Jt.length = 0;
  var n = zl(e ?? {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Jt.push(a);
  });
}
Ja.Component = ea;
ea.install = function(e) {
  e.component(ea.name, ea);
};
Ja.install = function(e) {
  e.component(ea.name, ea);
};
var dC = ea, yb = {
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
  n: bb,
  classes: wb
} = ee("switch");
function Cb(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = Xe("ripple");
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
var sd = x({
  name: "VarSwitch",
  components: {
    VarLoading: kn,
    VarFormDetails: He
  },
  directives: {
    Ripple: We
  },
  props: yb,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = bn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: o,
      resetValidation: i
    } = yn(), l = () => o(e.rules, e.modelValue), s = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = F(() => {
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
          width: xe(h),
          height: xe(h),
          backgroundColor: C === w ? g : $,
          color: T
        },
        ripple: {
          left: C === w ? xe(h, 0.5) : "-" + xe(h, 0.5),
          color: C === w ? g : $ || "#999",
          width: xe(h, 2),
          height: xe(h, 2)
        },
        track: {
          height: xe(h, 0.72),
          width: xe(h, 1.9),
          borderRadius: xe(h, 2 / 3),
          filter: C === w || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: C === w ? g : $
        },
        switch: {
          height: xe(h, 1.2),
          width: xe(h, 2)
        }
      };
    }), d = F(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return xe(h, 0.4);
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
      n: bb,
      classes: wb,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
sd.render = Cb;
const na = sd;
na.install = function(e) {
  e.component(na.name, na);
};
var vC = na, Sb = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, ud = Symbol("TABS_BIND_TAB_KEY"), dd = Symbol("TABS_COUNT_TAB_KEY");
function kb() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(ud), {
    length: r
  } = hn(dd);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function $b() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ud), {
    index: r
  } = gn(dd);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: lt,
  classes: Tb
} = ee("tab");
function Pb(e, n) {
  var r = Xe("ripple");
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
var vd = x({
  name: "VarTab",
  directives: {
    Ripple: We
  },
  props: Sb,
  setup(e) {
    var n = E(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: o,
      tabs: i,
      bindTabs: l
    } = $b(), {
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
      return w ? lt("$-tab--disabled") : u.value === S || u.value === (o == null ? void 0 : o.value) ? lt("$-tab--active") : lt("$-tab--inactive");
    }, T = (w) => {
      var {
        disabled: S,
        name: O,
        onClick: k
      } = e;
      S || (P(k, O ?? o.value, w), s(C));
    };
    return ie(() => e.name, h), ie(() => e.disabled, h), {
      n: lt,
      classes: Tb,
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
vd.render = Pb;
const ra = vd;
ra.install = function(e) {
  e.component(ra.name, ra);
};
var fC = ra, fd = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), cd = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function Ob() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(fd), {
    length: r
  } = hn(cd);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Vb() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(fd), {
    index: r
  } = gn(cd);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Mb = {
  name: {
    type: [String, Number]
  }
}, {
  n: Eb,
  classes: Ib
} = ee("tab-item");
function Bb(e, n) {
  var r = le("var-swipe-item");
  return y(), pe(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: ve(() => [e.initSlot ? H(e.$slots, "default", {
        key: 0
      }) : _("v-if", !0)]),
      _: 3
      /* FORWARDED */
    },
    8,
    ["class"]
  );
}
var md = x({
  name: "VarTabItem",
  components: {
    VarSwipeItem: zn
  },
  props: Mb,
  setup(e) {
    var n = E(!1), r = E(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: o
    } = Vb(), i = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: i
    };
    return o(l), {
      n: Eb,
      classes: Ib,
      current: n,
      initSlot: r
    };
  }
});
md.render = Bb;
const aa = md;
aa.install = function(e) {
  e.component(aa.name, aa);
};
var cC = aa, Nb = {
  fullWidth: {
    type: [Number, String],
    default: "100%"
  }
}, {
  n: Db,
  classes: Ab
} = ee("table");
function zb(e, n) {
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var pd = x({
  name: "VarTable",
  props: Nb,
  setup() {
    return {
      toSizeUnit: we,
      n: Db,
      classes: Ab
    };
  }
});
pd.render = zb;
const ta = pd;
ta.install = function(e) {
  e.component(ta.name, ta);
};
var mC = ta;
function yl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Lb = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: yl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: yl
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
  stickyCssMode: qe(vt, "cssMode"),
  stickyZIndex: qe(vt, "zIndex"),
  offsetTop: qe(vt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
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
function wl(e) {
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
  n: Rb,
  classes: Ub
} = ee("tabs");
function Yb(e, n) {
  return y(), pe(
    La(e.sticky ? e.n("$-sticky") : e.Transition),
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
var hd = x({
  name: "VarTabs",
  components: {
    VarSticky: Ln
  },
  inheritAttrs: !1,
  props: Lb,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), o = E(!1), i = E(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = E(null), {
      tabList: c,
      bindTabList: h,
      length: C
    } = kb(), g = (B) => {
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
        if (Ke(B)) {
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
          Ga(b, {
            left: Y,
            animation: _t
          });
        } else {
          var G = L.offsetTop + L.offsetHeight / 2 - b.offsetHeight / 2;
          Ga(b, {
            top: G,
            animation: _t
          });
        }
      }
    }, D = () => {
      var B = $() || T() || w();
      !B || B.disabled.value || (S(), O(B), k(B));
    }, V = /* @__PURE__ */ function() {
      var B = wl(function* () {
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
    return h(I), ie(() => C.value, /* @__PURE__ */ wl(function* () {
      yield Vn(), D();
    })), ie(() => e.active, D), Ue(() => window.addEventListener("resize", D)), fr(() => window.removeEventListener("resize", D)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: o,
      scrollerEl: i,
      Transition: Ae,
      toSizeUnit: we,
      n: Rb,
      classes: Ub,
      resize: D,
      resizeSticky: V
    };
  }
});
hd.render = Yb;
const oa = hd;
oa.install = function(e) {
  e.component(oa.name, oa);
};
var pC = oa, Fb = {
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
function Cl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Hb(e) {
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
  n: Wb
} = ee("tabs-items");
function jb(e, n) {
  var r = le("var-swipe");
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
var gd = x({
  name: "VarTabsItems",
  components: {
    VarSwipe: An
  },
  props: Fb,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Ob(), o = (f) => r.find((c) => {
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
    return a(v), ie(() => e.active, s), ie(() => t.value, /* @__PURE__ */ Hb(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: Wb,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
gd.render = jb;
const ia = gd;
ia.install = function(e) {
  e.component(ia.name, ia);
};
var hC = ia;
const Gb = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, qb = {
  "--badge-default-color": "#555"
}, Kb = {
  "--button-default-color": "#303030"
}, Xb = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Zb = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, Jb = {
  "--checkbox-unchecked-color": "#fff"
}, Qb = {
  "--chip-default-color": "#555"
}, _b = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, xb = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, e1 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, n1 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, r1 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, a1 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, t1 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, o1 = {
  "--popup-content-background-color": "#1e1e1e"
}, i1 = {
  "--pull-refresh-background": "#303030"
}, l1 = {
  "--radio-unchecked-color": "#fff"
}, s1 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, u1 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, d1 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, v1 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, f1 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, c1 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, m1 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-footer-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, p1 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, h1 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, g1 = {
  "--tabs-background": "#1e1e1e"
}, y1 = {
  "--app-bar-color": "#272727"
}, b1 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, w1 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, C1 = {
  "--menu-background-color": "#272727"
}, S1 = {
  "--breadcrumb-inactive-color": "#aaa"
};
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
const k1 = Lo({
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
}, Kb, Zb, Xb, p1, xb, d1, g1, c1, o1, e1, Gb, Qb, qb, h1, _b, i1, f1, v1, a1, m1, r1, u1, l1, Jb, n1, t1, y1, b1, w1, C1, s1, S1);
var $1 = {
  dark: k1
}, gC = null;
const Ro = $1;
var fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], Sl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function T1(e) {
  return ["ampm", "24hr"].includes(e);
}
var P1 = {
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
    validator: T1
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
}, yd = (e, n) => e === "24hr" || n === "am", ui = (e, n, r) => {
  var a = fn.findIndex((o) => z(o) === z(r)), t = yd(e, n) ? r : en[a];
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
}, bd = (e) => {
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
  } = ui(t, o, i), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: h,
      minute: C
    } = an(l);
    f = h === v && a > C;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: $
    } = an(s);
    f = g === v && a < $;
  }
  if (l && s) {
    var {
      hour: T,
      minute: w
    } = an(l), {
      hour: S,
      minute: O
    } = an(s);
    f = S === v && a < O || T === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, wd = (e) => {
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
  } = ui(t, o, i), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: C,
      minute: g,
      second: $
    } = an(s);
    c = C === f && g < l || g === l && a > $;
  }
  if (!s && u) {
    var {
      hour: T,
      minute: w,
      second: S
    } = an(u);
    c = T === f && w > l || w === l && a > S;
  }
  if (s && u) {
    var {
      hour: O,
      minute: k,
      second: D
    } = an(s), {
      hour: V,
      minute: I,
      second: B
    } = an(u);
    c = O === f && k < l || V === f && I > l || O === f && k === l && a > D || V === f && I === l && a < B;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: O1,
  classes: V1
} = ee("time-picker");
function M1(e, n) {
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
    )) : _("v-if", !0)],
    2
    /* CLASS */
  );
}
var Cd = x({
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
    }), s = F(() => e.type === "hour" ? fn : Sl), u = (g, $) => {
      var T;
      g = (T = g) != null ? T : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? bd : wd, S = {
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
      var g = e.isInner ? en[l.value] : s.value[l.value];
      return s.value === Sl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, $) => $ ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (yd(e.format, e.ampm))
          return t.value.includes(g);
        var $ = fn.findIndex((T) => T === g);
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
        var g = e.ampm === "am" ? fn : en;
        return da(g[l.value], 2, "0");
      }
    };
    return ie([l, () => e.isInner], (g, $) => {
      var [T, w] = g, [S, O] = $, k = T === S && w === O;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var D = w ? en[l.value] : C(), V = e.useSeconds ? ":" + e.time.second : "", I = D + ":" + e.time.minute + V;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), ie(() => e.rad, (g, $) => {
      if (!(e.type === "hour" || g === void 0 || $ === void 0)) {
        var T = g / 6 >= 0 ? g / 6 : g / 6 + 60, w = $ / 6 >= 0 ? $ / 6 : $ / 6 + 60;
        if (T !== w) {
          var S, {
            hourStr: O
          } = ui(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = te().minute(T).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            S = O + ":" + k + D;
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
        } = an($), O = fn.filter((Q) => z(Q) > S), k = en.filter((Q) => z(Q) > S);
        t.value = [...O, ...k];
      }
      if (!$ && T) {
        var {
          hour: D
        } = an(T), V = fn.filter((Q) => z(Q) < D), I = en.filter((Q) => z(Q) < D);
        t.value = [...V, ...I];
      }
      if ($ && T) {
        var {
          hour: B
        } = an($), {
          hour: p
        } = an(T), b = fn.filter((Q) => z(Q) < p || z(Q) > B), L = en.filter((Q) => z(Q) < p || z(Q) > B);
        t.value = [...b, ...L];
      }
      if (w != null && w.hours) {
        var {
          hours: Y
        } = w, G = fn.filter((Q) => !Y(z(Q))), R = en.filter((Q) => !Y(z(Q)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...R])];
      }
      o.value = t.value.map((Q) => en.findIndex((W) => Q === W)).filter((Q) => Q >= 0);
    }, {
      immediate: !0
    }), {
      n: O1,
      classes: V1,
      hours24: en,
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
Cd.render = M1;
const E1 = Cd;
var {
  n: I1,
  classes: B1
} = ee("time-picker"), N1 = (e) => (ga(""), e = e(), ya(), e), D1 = /* @__PURE__ */ N1(() => /* @__PURE__ */ A(
  "span",
  null,
  ":",
  -1
  /* HOISTED */
)), A1 = {
  key: 0
};
function z1(e, n) {
  var r = le("clock");
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
        ), D1, A(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
          /* TEXT, CLASS */
        ), e.useSeconds ? (y(), M("span", A1, ":")) : _("v-if", !0), e.useSeconds ? (y(), M(
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
var Sd = x({
  name: "VarTimePicker",
  components: {
    Clock: E1
  },
  props: P1,
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
      } = a.value, j = fn.findIndex((oe) => z(oe) === z(g.value.hour)), Z = N === "am" ? fn : en, ae = [...Z.slice(j), ...Z.slice(0, j)];
      return ae.find((oe, ce) => (o.value = ce !== 0, !X.includes(oe)));
    }, V = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = D(N);
        if (X) {
          var j = e.useSeconds ? ":" + g.value.second : "", Z = da(X, 2, "0") + ":" + g.value.minute + j;
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
      } = an(N);
      return {
        hour: te().hour(j).format(X),
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
      } = a.value.getSize(), j = $.x - N / 2 - 8, Z = $.x + N / 2 + 8, ae = $.y - X / 2 - 8, oe = $.y + X / 2 + 8;
      return {
        rangeXMin: j,
        rangeXMax: Z,
        rangeYMin: ae,
        rangeYMax: oe
      };
    }, L = (N, X, j) => {
      var {
        disableHour: Z
      } = a.value;
      i.value = I(N, X);
      var ae = Math.round(j / 30) * 30 + 90, oe = p(ae), ce = t.value ? fn[oe] : en[oe];
      if (Z.includes(ce) || (t.value = e.format === "24hr" ? I(N, X) : !1), t.value === i.value) {
        var ye = t.value || c.value === "pm" ? en[oe] : fn[oe];
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
      C.value = bd(ae), !C.value && (d.value = j, s.value = !0);
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
      wd(ae) || (v.value = j);
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
          rangeXMax: oe,
          rangeYMin: ce,
          rangeYMax: ye
        } = b();
        T.x = [ae, oe], T.y = [ce, ye];
      }
    }, Q = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: j
        } = N.touches[0], Z = X - $.x, ae = j - $.y, oe = Math.round(O(Math.atan2(ae, Z)));
        f.value === "hour" ? L(X, j, oe) : f.value === "minute" ? Y(oe) : G(oe);
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
    return ie(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: X,
          minute: j,
          second: Z
        } = an(N), ae = te().hour(X).format("hh"), oe = te().hour(X).format("HH"), ce = te().minute(j).format("mm"), ye = te().second(Z).format("ss");
        u.value = (ae === "12" ? 0 : z(ae)) * 30, d.value = z(ce) * 6, v.value = z(ye) * 6, g.value = B(N), e.format !== "24hr" && (c.value = da("" + X, 2, "0") === oe && en.includes(oe) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(oe);
      }
    }, {
      immediate: !0
    }), {
      n: I1,
      classes: B1,
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
Sd.render = z1;
const la = Sd;
la.install = function(e) {
  e.component(la.name, la);
};
var yC = la;
function L1(e) {
  return ["click", "hover"].includes(e);
}
function R1(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function U1(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var Y1 = {
  type: {
    type: String,
    default: "default",
    validator: U1
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
    validator: L1
  },
  placement: {
    type: String,
    default: "bottom",
    validator: R1
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
  n: F1,
  classes: H1
} = ee("tooltip");
function W1(e, n) {
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
      Aa,
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
              onClick: n[0] || (n[0] = On(() => {
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
          ), [[za, e.show]])]),
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
var kd = x({
  name: "VarTooltip",
  props: Y1,
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
    } = Ou(e);
    return {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      n: F1,
      classes: H1,
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
kd.render = W1;
const sa = kd;
sa.install = function(e) {
  e.component(sa.name, sa);
};
var bC = sa, j1 = {
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
function kl(e, n, r, a, t, o, i) {
  try {
    var l = e[o](i), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $l(e) {
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
  n: G1,
  classes: q1
} = ee("uploader"), K1 = 0, X1 = ["onClick"], Z1 = ["onClick"], J1 = ["src", "alt"], Q1 = ["multiple", "accept", "capture", "disabled"], _1 = ["src"];
function x1(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), o = Xe("ripple");
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
              onClick: On((l) => e.handleRemove(i), ["stop"])
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
            Z1
          )) : _("v-if", !0), i.cover ? (y(), M(
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
            J1
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
          X1
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
          Q1
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
            _1
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
var $d = x({
  name: "VarUploader",
  directives: {
    Ripple: We
  },
  components: {
    VarIcon: $e,
    VarPopup: cn,
    VarFormDetails: He
  },
  props: j1,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = F(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: G
        }
      } = e;
      return Ke(Y) ? G + " / " + Y : "";
    }), {
      form: o,
      bindForm: i
    } = bn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      // expose
      resetValidation: d
    } = yn(), v = F(() => {
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
        if (Ze(W) && pi(W)) {
          dr(W);
          return;
        }
        Ze(W) && hi(W) && (a.value = Y, r.value = !0);
      }
    }, h = (Y) => ({
      id: K1++,
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
      var Y = $l(function* (G) {
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
          var Z = (Be) => Be.filter((je) => je.file.size > z(R) ? (P(J, Me(je)), !1) : !0), ae = (Be) => {
            var je = Math.min(Be.length, z(Q) - W.length);
            return Be.slice(0, je);
          }, oe = C(G), ce = oe.map(h);
          ce = R != null ? Z(ce) : ce, ce = Q != null ? ae(ce) : ce;
          var ye = yield Promise.all($(ce)), Ye = yield Promise.all(T(ye)), Qe = Ye.filter((Be) => {
            var {
              valid: je
            } = Be;
            return je;
          }).map((Be) => {
            var {
              varFile: je
            } = Be;
            return je;
          });
          P(e["onUpdate:modelValue"], [...W, ...Qe]), G.target.value = "", Qe.forEach((Be) => P(N, Me(Be)));
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var Y = $l(function* (G) {
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
    return P(i, L), ie(() => e.modelValue, () => {
      !B && I("onChange"), B = !1;
    }, {
      deep: !0
    }), {
      n: G1,
      classes: q1,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: hi,
      isHTMLSupportImage: pi,
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
$d.render = x1;
const ua = $d;
ua.install = function(e) {
  e.component(ua.name, ua);
};
var wC = ua;
const ew = "2.7.3";
function nw(e) {
  va.install && e.use(va), hr.install && e.use(hr), gr.install && e.use(gr), er.install && e.use(er), yr.install && e.use(yr), br.install && e.use(br), wr.install && e.use(wr), Cr.install && e.use(Cr), nn.install && e.use(nn), Sr.install && e.use(Sr), nr.install && e.use(nr), rr.install && e.use(rr), kr.install && e.use(kr), ar.install && e.use(ar), $r.install && e.use($r), Tr.install && e.use(Tr), Pr.install && e.use(Pr), sn.install && e.use(sn), Or.install && e.use(Or), Vr.install && e.use(Vr), Er.install && e.use(Er), fa.install && e.use(fa), Ir.install && e.use(Ir), Dn.install && e.use(Dn), He.install && e.use(He), $e.install && e.use($e), Br.install && e.use(Br), dr.install && e.use(dr), Nr.install && e.use(Nr), Dr.install && e.use(Dr), ir.install && e.use(ir), wt.install && e.use(wt), Ar.install && e.use(Ar), zr.install && e.use(zr), kn.install && e.use(kn), Mo.install && e.use(Mo), to.install && e.use(to), Yn.install && e.use(Yn), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), pa.install && e.use(pa), cn.install && e.use(cn), Yr.install && e.use(Yr), Fr.install && e.use(Fr), Hr.install && e.use(Hr), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), We.install && e.use(We), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), zo.install && e.use(zo), Qr.install && e.use(Qr), _r.install && e.use(_r), xr.install && e.use(xr), Ln.install && e.use(Ln), Ja.install && e.use(Ja), An.install && e.use(An), zn.install && e.use(zn), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), oa.install && e.use(oa), ia.install && e.use(ia), Ro.install && e.use(Ro), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua);
}
const CC = {
  version: ew,
  install: nw,
  ActionSheet: va,
  AppBar: hr,
  BackTop: gr,
  Badge: er,
  BottomNavigation: yr,
  BottomNavigationItem: br,
  Breadcrumb: wr,
  Breadcrumbs: Cr,
  Button: nn,
  Card: Sr,
  Cell: nr,
  Checkbox: rr,
  CheckboxGroup: kr,
  Chip: ar,
  Col: $r,
  Collapse: Tr,
  CollapseItem: Pr,
  Context: sn,
  Countdown: Or,
  Counter: Vr,
  DatePicker: Er,
  Dialog: fa,
  Divider: Ir,
  Form: Dn,
  FormDetails: He,
  Icon: $e,
  Image: Br,
  ImagePreview: dr,
  IndexAnchor: Nr,
  IndexBar: Dr,
  Input: ir,
  Lazy: wt,
  Link: Ar,
  List: zr,
  Loading: kn,
  LoadingBar: Mo,
  Locale: to,
  Menu: Yn,
  Option: Lr,
  Overlay: Rr,
  Pagination: Ur,
  Picker: pa,
  Popup: cn,
  Progress: Yr,
  PullRefresh: Fr,
  Radio: Hr,
  RadioGroup: Wr,
  Rate: jr,
  Result: Gr,
  Ripple: We,
  Row: qr,
  Select: Kr,
  Skeleton: Xr,
  Slider: Zr,
  Snackbar: zo,
  Space: Qr,
  Step: _r,
  Steps: xr,
  Sticky: Ln,
  StyleProvider: Ja,
  Swipe: An,
  SwipeItem: zn,
  Switch: na,
  Tab: ra,
  TabItem: aa,
  Table: ta,
  Tabs: oa,
  TabsItems: ia,
  Themes: Ro,
  TimePicker: la,
  Tooltip: sa,
  Uploader: ua
};
export {
  va as ActionSheet,
  hr as AppBar,
  gr as BackTop,
  er as Badge,
  yr as BottomNavigation,
  br as BottomNavigationItem,
  wr as Breadcrumb,
  Cr as Breadcrumbs,
  nn as Button,
  Sr as Card,
  nr as Cell,
  rr as Checkbox,
  kr as CheckboxGroup,
  ar as Chip,
  $r as Col,
  Tr as Collapse,
  Pr as CollapseItem,
  sn as Context,
  Or as Countdown,
  Vr as Counter,
  Er as DatePicker,
  fa as Dialog,
  Ir as Divider,
  Dn as Form,
  He as FormDetails,
  $e as Icon,
  Br as Image,
  dr as ImagePreview,
  Nr as IndexAnchor,
  Dr as IndexBar,
  ir as Input,
  wt as Lazy,
  Ar as Link,
  zr as List,
  kn as Loading,
  Mo as LoadingBar,
  to as Locale,
  Yn as Menu,
  Lr as Option,
  Rr as Overlay,
  ko as PIXEL,
  Ur as Pagination,
  pa as Picker,
  cn as Popup,
  Yr as Progress,
  Fr as PullRefresh,
  Hr as Radio,
  Wr as RadioGroup,
  jr as Rate,
  Gr as Result,
  We as Ripple,
  qr as Row,
  si as SNACKBAR_TYPE,
  Kr as Select,
  Xr as Skeleton,
  Zr as Slider,
  zo as Snackbar,
  Qr as Space,
  _r as Step,
  xr as Steps,
  Ln as Sticky,
  Ja as StyleProvider,
  An as Swipe,
  zn as SwipeItem,
  na as Switch,
  ra as Tab,
  aa as TabItem,
  ta as Table,
  oa as Tabs,
  ia as TabsItems,
  Ro as Themes,
  la as TimePicker,
  sa as Tooltip,
  ua as Uploader,
  sw as _ActionSheetComponent,
  uw as _AppBarComponent,
  fw as _BackTopComponent,
  cw as _BadgeComponent,
  mw as _BottomNavigationComponent,
  pw as _BottomNavigationItemComponent,
  hw as _BreadcrumbComponent,
  gw as _BreadcrumbsComponent,
  vw as _ButtonComponent,
  yw as _CardComponent,
  bw as _CellComponent,
  Cw as _CheckboxComponent,
  Sw as _CheckboxGroupComponent,
  kw as _ChipComponent,
  $w as _ColComponent,
  Tw as _CollapseComponent,
  Pw as _CollapseItemComponent,
  aw as _ContextComponent,
  Ow as _CountdownComponent,
  Vw as _CounterComponent,
  Mw as _DatePickerComponent,
  Ew as _DialogComponent,
  Iw as _DividerComponent,
  Bw as _FormComponent,
  ww as _FormDetailsComponent,
  iw as _IconComponent,
  Dw as _ImageComponent,
  Lw as _ImagePreviewComponent,
  Uw as _IndexAnchorComponent,
  Yw as _IndexBarComponent,
  Fw as _InputComponent,
  Nw as _LazyComponent,
  Hw as _LinkComponent,
  Ww as _ListComponent,
  jw as _LoadingBarComponent,
  dw as _LoadingComponent,
  lw as _LocaleComponent,
  Gw as _MenuComponent,
  qw as _OptionComponent,
  Kw as _OverlayComponent,
  Xw as _PaginationComponent,
  Zw as _PickerComponent,
  ow as _PopupComponent,
  Jw as _ProgressComponent,
  Qw as _PullRefreshComponent,
  _w as _RadioComponent,
  xw as _RadioGroupComponent,
  eC as _RateComponent,
  nC as _ResultComponent,
  tw as _RippleComponent,
  rC as _RowComponent,
  aC as _SelectComponent,
  tC as _SkeletonComponent,
  oC as _SliderComponent,
  iC as _SnackbarComponent,
  lC as _SpaceComponent,
  sC as _StepComponent,
  uC as _StepsComponent,
  Rw as _StickyComponent,
  dC as _StyleProviderComponent,
  Aw as _SwipeComponent,
  zw as _SwipeItemComponent,
  vC as _SwitchComponent,
  fC as _TabComponent,
  cC as _TabItemComponent,
  mC as _TableComponent,
  pC as _TabsComponent,
  hC as _TabsItemsComponent,
  gC as _ThemesComponent,
  yC as _TimePickerComponent,
  bC as _TooltipComponent,
  wC as _UploaderComponent,
  pv as actionSheetProps,
  Zo as add,
  Cv as appBarProps,
  Fv as backTopProps,
  Kv as badgeProps,
  af as bottomNavigationItemProps,
  Qv as bottomNavigationProps,
  df as breadcrumbProps,
  hf as breadcrumbsProps,
  zv as buttonProps,
  wf as cardProps,
  Pf as cellProps,
  Wf as checkboxGroupProps,
  Af as checkboxProps,
  Zf as chipProps,
  xf as colProps,
  uc as collapseItemProps,
  oc as collapseProps,
  cc as countdownProps,
  um as counterProps,
  Em as datePickerProps,
  CC as default,
  Le as defaultLazyOptions,
  Km as dialogProps,
  Qm as dividerProps,
  Gl as enUS,
  Ef as formDetailsProps,
  rp as formProps,
  Wl as iconProps,
  xs as imageCache,
  Rp as imagePreviewProps,
  Cp as imageProps,
  Xp as indexAnchorProps,
  _p as indexBarProps,
  th as inputProps,
  nw as install,
  fh as linkProps,
  hh as listProps,
  Ch as loadingBarProps,
  Jn as loadingProps,
  Eh as menuProps,
  Kl as merge,
  Fg as optionProps,
  Gg as overlayProps,
  Fe as pack,
  ql as packs,
  Kg as paginationProps,
  _g as pickerProps,
  Qa as popupProps,
  iy as progressProps,
  cy as pullRefreshProps,
  $y as radioGroupProps,
  gy as radioProps,
  Vy as rateProps,
  By as resultProps,
  y0 as rowProps,
  k0 as selectProps,
  O0 as skeletonProps,
  B0 as sliderProps,
  _u as snackbarProps,
  nb as spaceProps,
  tb as stepProps,
  fb as stepsProps,
  vt as stickyProps,
  pb as styleProviderProps,
  lu as swipeProps,
  yb as switchProps,
  Mb as tabItemProps,
  Sb as tabProps,
  Nb as tableProps,
  Fb as tabsItemsProps,
  Lb as tabsProps,
  P1 as timePickerProps,
  Y1 as tooltipProps,
  j1 as uploaderProps,
  Jo as use,
  Xo as useLocale,
  ew as version,
  Ko as zhCN
};
