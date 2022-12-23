import { reactive as Ie, ref as P, onMounted as Fe, onUnmounted as ar, onActivated as Ei, onDeactivated as Ii, getCurrentInstance as Ma, provide as vl, computed as W, inject as fl, nextTick as Pe, createApp as Gs, onBeforeUnmount as Ni, h as cl, isVNode as yt, watch as ae, onBeforeMount as qs, defineComponent as Q, createVNode as ee, Teleport as Ga, Transition as Le, withDirectives as ke, vShow as qa, mergeProps as Ve, openBlock as h, createBlock as me, resolveDynamicComponent as Ea, normalizeClass as m, normalizeStyle as K, resolveComponent as te, resolveDirective as Ge, withCtx as fe, createElementVNode as B, renderSlot as G, toDisplayString as _, createElementBlock as V, Fragment as Oe, renderList as Ne, createCommentVNode as J, onUpdated as Di, createTextVNode as he, pushScopeId as kr, popScopeId as $r, withModifiers as Dn, normalizeProps as ml, guardReactiveProps as Ks, vModelText as Xs, toRefs as Zs, withKeys as eo, toRaw as no, TransitionGroup as Js, Comment as Qs } from "vue";
var pl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ie(pl);
const on = Ie(pl), qe = (e) => typeof e == "string", Gt = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Bi = (e) => Object.prototype.toString.call(e) === "[object Object]", xs = (e) => typeof e == "object" && e !== null, Ce = (e) => Array.isArray(e), _s = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, jn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Gt(e) ? Number(e) : e, bt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ai = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, zi = () => typeof window < "u", ro = (e) => [...new Set(e)], eu = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
var ao = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), to = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), nu = (e) => {
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
      this.has(r) && bt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, io = (e) => e, oo = (e) => Math.pow(e, 3), hl = (e) => e < 0.5 ? oo(e * 2) / 2 : 1 - oo((1 - e) * 2) / 2, wt = (e, n) => e == null ? n : e, gl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, gr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function lo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ru(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        lo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        lo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function au(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function St(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Li(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function tu(e) {
  return qt.apply(this, arguments);
}
function qt() {
  return qt = ru(function* (e) {
    yield On();
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
  }), qt.apply(this, arguments);
}
function Lt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Ia(e) {
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
function iu(e) {
  for (var n = [], r = e; r !== window; )
    r = Ia(r), n.push(r);
  return n;
}
var yl = (e) => qe(e) && e.endsWith("rem"), ou = (e) => qe(e) && e.endsWith("px") || je(e), lu = (e) => qe(e) && e.endsWith("%"), bl = (e) => qe(e) && e.endsWith("vw"), wl = (e) => qe(e) && e.endsWith("vh"), su = (e) => qe(e) && e.startsWith("calc("), uu = (e) => qe(e) && e.startsWith("var("), ze = (e) => {
  if (je(e))
    return e;
  if (ou(e))
    return +e.replace("px", "");
  if (bl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (wl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (yl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? z(e) : 0;
}, ye = (e) => {
  if (e != null)
    return lu(e) || bl(e) || wl(e) || yl(e) || su(e) || uu(e) ? e : ze(e) + "px";
}, Ze = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ye(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Tn(e) {
  var n = gl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function du(e) {
  var n = gl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Ct(e) {
  Tn(() => {
    Tn(e);
  });
}
function On() {
  return new Promise((e) => {
    Tn(() => {
      Tn(e);
    });
  });
}
function st(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = St(e), s = Li(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - o) / t;
      if (v < 1) {
        var f = l + (r - l) * i(v), c = s + (a - s) * i(v);
        e.scrollTo(c, f), Tn(d);
      } else
        e.scrollTo(a, r), u();
    };
    Tn(d);
  });
}
function Sl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + eu(a);
    return n[i] = t, n;
  }, {});
}
function vu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var fu = ["collect", "clear"];
function so(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function uo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        so(i, a, t, o, l, "next", s);
      }
      function l(s) {
        so(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function cu(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function ut() {
  return ut = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ut.apply(this, arguments);
}
function _e(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function mu(e) {
  var n = Gs(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Na(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => cl(e, ut({}, n, r));
    }
  }, {
    unmount: t
  } = mu(a);
  return {
    unmountInstance: t
  };
}
function pu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      yt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function Cn(e) {
  var n = Ie([]), r = Ma(), a = () => {
    var l = pu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    bt(n, l);
  };
  vl(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = W(() => n.length);
  return {
    length: o
  };
}
function kn(e) {
  if (!Cl(e))
    return {
      index: null
    };
  var n = fl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Ma();
  Fe(() => {
    Pe().then(() => r(i));
  }), ar(() => {
    Pe().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function fn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    bt(n, i);
  }, t = (i) => {
    vl(e, ut({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function cn(e) {
  if (!Cl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = fl(e), {
    collect: r,
    clear: a
  } = n, t = cu(n, fu), i = (o) => {
    Fe(() => r(o)), Ni(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function Cl(e) {
  var n = Ma();
  return e in n.provides;
}
function mn() {
  var e = P(""), n = /* @__PURE__ */ function() {
    var t = uo(function* (i, o, l) {
      if (!Ce(i) || !i.length)
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
    var t = uo(function* (i, o, l, s, u) {
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
function hu(e) {
  Fe(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), ar(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Fi() {
  var e = P(!1);
  return Ei(() => {
    e.value = !1;
  }), Ii(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ne(e) {
  var n = "var", r = n + "-" + e, a = (i) => i ? i[0] === "$" ? i.replace("$", n) : i.startsWith("--") ? "" + r + i : r + "__" + i : r, t = function() {
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return o.map((s) => {
      if (Ce(s)) {
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
function N(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (e)
    return e(...r);
}
function dt() {
  return dt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, dt.apply(this, arguments);
}
var {
  n: kl
} = ne("ripple"), vo = 250;
function gu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function yu(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: i
  } = e, o = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2, l = o * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - o * 2) / 2, v = (i - o * 2) / 2, f = s - o, c = u - o;
  return {
    x: f,
    y: c,
    centerX: d,
    centerY: v,
    size: l
  };
}
function $l(e) {
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
      } = yu(this, e), s = document.createElement("div");
      s.classList.add(kl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), gu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Kt() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + kl());
    if (!!r.length) {
      var a = r[r.length - 1], t = vo - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, vo);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Tl() {
  var e = this._ripple;
  !vu() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function bu(e, n) {
  var r, a, t;
  e._ripple = dt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : on.touchmoveForbid,
    removeRipple: Kt.bind(e)
  }), e.addEventListener("touchstart", $l, {
    passive: !0
  }), e.addEventListener("touchmove", Tl, {
    passive: !0
  }), e.addEventListener("dragstart", Kt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function wu(e) {
  e.removeEventListener("touchstart", $l), e.removeEventListener("touchmove", Tl), e.removeEventListener("dragstart", Kt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Su(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : on.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = dt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Ue = {
  mounted: bu,
  unmounted: wu,
  updated: Su,
  install(e) {
    e.directive("ripple", this);
  }
};
function Cu(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Ka = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Cu
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
function Ol() {
  var e = Object.keys(on.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Ja(e) {
  on.locks[e] = 1, Ol();
}
function Qa(e) {
  delete on.locks[e], Ol();
}
function kt(e, n) {
  var {
    uid: r
  } = Ma();
  n && ae(n, (a) => {
    a === !1 ? Qa(r) : a === !0 && e() === !0 && Ja(r);
  }), ae(e, (a) => {
    n && n() === !1 || (a === !0 ? Ja(r) : Qa(r));
  }), qs(() => {
    n && n() === !1 || e() === !0 && Ja(r);
  }), ar(() => {
    n && n() === !1 || e() === !0 && Qa(r);
  }), Ei(() => {
    n && n() === !1 || e() === !0 && Ja(r);
  }), Ii(() => {
    n && n() === !1 || e() === !0 && Qa(r);
  });
}
function Xa(e, n) {
  var r = P(on.zIndex);
  return ae(e, (a) => {
    a && (on.zIndex += n, r.value = on.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function Xt() {
  return Xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Xt.apply(this, arguments);
}
function ku(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: Mn,
  classes: Ft
} = ne("popup");
const bn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Ka,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Xa(() => e.show, 3), {
      disabled: i
    } = Fi(), o = () => {
      var d, {
        closeOnClickOverlay: v,
        onClickOverlay: f
      } = e;
      f == null || f(), v && ((d = e["onUpdate:show"]) == null || d.call(e, !1));
    };
    kt(() => e.show, () => e.lockScroll), ae(() => e.show, (d) => {
      var {
        onOpen: v,
        onClose: f
      } = e;
      d ? v == null || v() : f == null || f();
    }), hu(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ee("div", {
        class: Ft(Mn("overlay"), d),
        style: Xt({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => ee("div", Ve({
      class: Ft(Mn("content"), Mn("--" + e.position), [e.defaultStyle, Mn("--content-background-color")], [e.defaultStyle, Mn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [r.default == null ? void 0 : r.default()]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: p,
        position: g
      } = e;
      return ee(Le, {
        name: Mn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(ee("div", {
          class: Ft(Mn("$--box"), Mn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), ee(Le, {
          name: p || Mn("$-pop-" + g)
        }, {
          default: () => [f && s()]
        })]), [[qa, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ee(Ga, {
          to: d,
          disabled: i.value
        }, ku(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
bn.install = function(e) {
  e.component(bn.name, bn);
};
var Vl = {
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
function fo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $u(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        fo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        fo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Tu,
  classes: Ou
} = ne("icon");
function Vu(e, n) {
  return h(), me(
    Ea(e.isURL(e.name) ? "img" : "i"),
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
const Te = Q({
  render: Vu,
  name: "VarIcon",
  props: Vl,
  setup(e) {
    var n = P(""), r = P(!1), a = /* @__PURE__ */ function() {
      var t = $u(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || z(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Pe(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, z(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return ae(() => e.name, a, {
      immediate: !0
    }), {
      n: Tu,
      classes: Ou,
      nextName: n,
      shrinking: r,
      isURL: _s,
      toNumber: z,
      toSizeUnit: ye
    };
  }
});
Te.install = function(e) {
  e.component(Te.name, Te);
};
function Zt() {
  return Zt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Zt.apply(this, arguments);
}
var Pu = Zt({
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
}, _e(Ka, [
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
const Pl = {
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
}, Mu = {
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
function Jt() {
  return Jt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Jt.apply(this, arguments);
}
function Ml() {
  var e = {}, n = P({}), r = (i, o) => {
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
    e[i] = Jt({}, e[i], o), a(i);
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
  packs: Eu,
  pack: Ye,
  add: El,
  use: Il,
  merge: Iu
} = Ml();
El("zh-CN", Pl);
Il("zh-CN");
const Qt = {
  zhCN: Pl,
  enUS: Mu,
  packs: Eu,
  pack: Ye,
  add: El,
  use: Il,
  merge: Iu,
  useLocale: Ml
};
var {
  n: Nu,
  classes: Du
} = ne("action-sheet"), Bu = ["onClick"];
function Au(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Ge("ripple");
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
      default: fe(() => [B(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [G(e.$slots, "title", {}, () => [B(
          "div",
          {
            class: m(e.n("title"))
          },
          _(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), G(e.$slots, "actions", {}, () => [(h(!0), V(
          Oe,
          null,
          Ne(e.actions, (i) => ke((h(), V(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (h(), me(
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
            )) : J("v-if", !0), B(
              "div",
              {
                class: m(e.n("action-name"))
              },
              _(i.name),
              3
            )],
            14,
            Bu
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
const lr = Q({
  render: Au,
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: bn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Pu,
  setup(e) {
    var n = P(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        N(o, t), i && N(e["onUpdate:show"], !1);
      }
    }, a = (t) => N(e["onUpdate:show"], t);
    return ae(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Nu,
      classes: Du,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: wt,
      handleSelect: r
    };
  }
});
var Yn;
function yr(e) {
  return zi() ? new Promise((n) => {
    yr.close();
    var r = Ie(e);
    r.teleport = "body", Yn = r;
    var {
      unmountInstance: a
    } = Na(lr, r, {
      onSelect: (t) => {
        r.onSelect == null || r.onSelect(t), n(t);
      },
      onClose: () => {
        r.onClose == null || r.onClose(), n("close");
      },
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Yn === r && (Yn = null);
      },
      onRouteChange: () => {
        a(), Yn === r && (Yn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
yr.Component = lr;
lr.install = function(e) {
  e.component(lr.name, lr);
};
yr.close = () => {
  if (Yn != null) {
    var e = Yn;
    Yn = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
yr.install = function(e) {
  e.component(lr.name, lr);
};
function zu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Lu = {
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
    validator: zu
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
  n: Fu,
  classes: Ru
} = ne("app-bar");
function Uu(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: K({
        background: e.color,
        color: e.textColor
      })
    },
    [B(
      "div",
      {
        class: m(e.n("left"))
      },
      [G(e.$slots, "left"), e.titlePosition === "left" ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingLeft: e.paddingLeft
          })
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.title),
          1
        )])],
        6
      )) : J("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [G(e.$slots, "default", {}, () => [he(
        _(e.title),
        1
      )])],
      2
    )) : J("v-if", !0), B(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: K({
            paddingRight: e.paddingRight
          })
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.title),
          1
        )])],
        6
      )) : J("v-if", !0), G(e.$slots, "right")],
      2
    )],
    6
  );
}
const Dr = Q({
  render: Uu,
  name: "VarAppBar",
  props: Lu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = P(), t = P(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Fe(i), Di(i), {
      n: Fu,
      classes: Ru,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
function Yu(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Wu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Gn = {
  type: {
    type: String,
    default: "circle",
    validator: Yu
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Wu
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
  n: Hu,
  classes: ju
} = ne("loading"), Gu = (e) => (kr(""), e = e(), $r(), e), qu = /* @__PURE__ */ Gu(() => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: "25 25 50 50"
  },
  [/* @__PURE__ */ B("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none"
  })],
  -1
)), Ku = [qu];
function Xu(e, n) {
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
      [G(e.$slots, "default"), e.loading ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.isShow ? (h(), V(
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
        [B(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Ku,
          6
        )],
        2
      )) : J("v-if", !0), (h(!0), V(
        Oe,
        null,
        Ne(e.loadingTypeDict, (r, a) => (h(), V(
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
              Ne(r, (t) => (h(), V(
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
          )) : J("v-if", !0)],
          64
        ))),
        128
      )), e.$slots.description || e.description ? (h(), V(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: K({
            color: e.color
          })
        },
        [G(e.$slots, "description", {}, () => [he(
          _(e.description),
          1
        )])],
        6
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0)],
    2
  );
}
const $n = Q({
  render: Xu,
  name: "VarLoading",
  props: Gn,
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
      n: Hu,
      classes: ju,
      multiplySizeUnit: Ze,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
$n.install = function(e) {
  e.component($n.name, $n);
};
function xt() {
  return xt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, xt.apply(this, arguments);
}
function Zu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ju(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Qu = {
  type: {
    type: String,
    default: "default",
    validator: Zu
  },
  size: {
    type: String,
    default: "normal",
    validator: Ju
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
  loadingType: _e(Gn, "type"),
  loadingSize: _e(Gn, "size"),
  loadingColor: xt({}, _e(Gn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: xu,
  classes: _u
} = ne("button"), ed = ["disabled"];
function nd(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return ke((h(), V(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
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
    )) : J("v-if", !0), B(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [G(e.$slots, "default")],
      2
    )],
    46,
    ed
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const nn = Q({
  render: nd,
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: Ue
  },
  props: Qu,
  setup(e) {
    var n = P(!1), r = (i) => {
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
      n: xu,
      classes: _u,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
nn.install = function(e) {
  e.component(nn.name, nn);
};
var rd = {
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
  n: ad,
  classes: td
} = ne("back-top");
function id(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), me(
    Ga,
    {
      to: "body",
      disabled: e.disabled
    },
    [B(
      "div",
      Ve({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Dn(function() {
          return e.click && e.click(...arguments);
        }, ["stop"]))
      }),
      [G(e.$slots, "default", {}, () => [ee(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: fe(() => [ee(r, {
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
const Br = Q({
  render: id,
  name: "VarBackTop",
  components: {
    VarButton: nn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: rd,
  setup(e) {
    var n = P(!1), r = P(null), a = P(!0), t, i = (u) => {
      N(e.onClick, u);
      var d = Li(t);
      st(t, {
        left: d,
        duration: e.duration,
        animation: hl
      });
    }, o = () => {
      n.value = St(t) >= ze(e.visibilityHeight);
    }, l = Ai(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (qe(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (xs(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Fe(() => {
      t = e.target ? s() : Ia(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Ni(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ye,
      n: ad,
      classes: td,
      click: i
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
function od(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ld(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var sd = {
  type: {
    type: String,
    default: "default",
    validator: od
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
    validator: ld
  },
  icon: {
    type: String
  }
}, {
  n: An,
  classes: ud
} = ne("badge"), dd = {
  key: 1
};
function vd(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [ee(
      Le,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: fe(() => [ke(B(
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
            dd,
            _(e.values),
            1
          ))],
          16
        ), [[qa, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), G(e.$slots, "default")],
    2
  );
}
const sr = Q({
  render: vd,
  name: "VarBadge",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: sd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = W(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && An("position") + " " + An("--" + l), v = s ? An("dot") : null, f = i(), c = u ? An("icon") : null;
      return [An("--" + o), d, v, f, c];
    }), t = W(() => {
      var {
        dot: o,
        value: l,
        maxValue: s
      } = e;
      return o ? "" : l !== void 0 && s !== void 0 && z(l) > s ? s + "+" : l;
    }), i = () => {
      var {
        position: o,
        dot: l
      } = e;
      if (l && o.includes("right"))
        return An("dot--right");
      if (l && o.includes("left"))
        return An("dot--left");
    };
    return {
      n: An,
      classes: ud,
      values: t,
      contentClass: a
    };
  }
});
sr.install = function(e) {
  e.component(sr.name, sr);
};
var fd = {
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
}, Nl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Dl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function cd() {
  var {
    childProviders: e,
    bindChildren: n
  } = fn(Nl), {
    length: r
  } = Cn(Dl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
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
var {
  n: md,
  classes: pd
} = ne("bottom-navigation"), {
  n: $t
} = ne("bottom-navigation-item"), co = $t("--right-half-space"), mo = $t("--left-half-space"), po = $t("--right-space"), hd = {
  type: "primary"
};
function gd(e, n) {
  var r = te("var-button");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [G(e.$slots, "default"), e.$slots.fab ? (h(), me(
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
        default: fe(() => [G(e.$slots, "fab")]),
        _: 3
      },
      16,
      ["class", "onClick"]
    )) : J("v-if", !0)],
    6
  );
}
const Ar = Q({
  render: gd,
  name: "VarBottomNavigation",
  components: {
    VarButton: nn
  },
  props: fd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = P(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = P({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = cd(), v = () => {
      s.value === 0 || f() || c() || p();
    }, f = () => u.find((k) => {
      var {
        name: A
      } = k;
      return t.value === A.value;
    }), c = () => u.find((k) => {
      var {
        index: A
      } = k;
      return t.value === A.value;
    }), p = () => {
      !je(t.value) || (t.value < 0 ? N(e["onUpdate:active"], 0) : t.value > s.value - 1 && N(e["onUpdate:active"], s.value - 1));
    }, g = (k) => {
      t.value !== k && (e.onBeforeChange ? y(k) : O(k));
    }, y = (k) => {
      Promise.resolve(N(e.onBeforeChange, k)).then((A) => A && O(k));
    }, O = (k) => {
      N(e["onUpdate:active"], k), N(e.onChange, k);
    }, T = () => {
      var k = M();
      k.forEach((A) => {
        A.classList.remove(co, mo, po);
      });
    }, S = (k) => {
      var A = M(), I = A.length, C = k % 2 === 0;
      A.forEach(($, L) => {
        b(C, $, L, I);
      });
    }, b = (k, A, I, C) => {
      var $ = I === C - 1;
      if (!k && $) {
        A.classList.add(po);
        return;
      }
      var L = I === C / 2 - 1, Y = I === C / 2;
      L ? A.classList.add(co) : Y && A.classList.add(mo);
    }, M = () => Array.from(a.value.querySelectorAll("." + $t())), w = () => {
      N(e.onFabClick);
    }, D = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: g
    };
    return d(D), ae(() => s.value, v), ae(() => e.fabProps, (k) => {
      l.value = _t({}, hd, k);
    }, {
      immediate: !0,
      deep: !0
    }), Fe(() => {
      !r.fab || S(s.value);
    }), Di(() => {
      T(), r.fab && S(s.value);
    }), {
      n: md,
      classes: pd,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: w,
      fabProps: l
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
var yd = {
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
function bd() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Nl), {
    index: r
  } = kn(Dl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: wd,
  classes: Sd
} = ne("bottom-navigation-item"), Cd = {
  type: "danger",
  dot: !0
};
function kd(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ge("ripple");
  return ke((h(), V(
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
    )) : J("v-if", !0), G(e.$slots, "icon", {
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
    )) : J("v-if", !0), B(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? J("v-if", !0) : (h(), V(
        Oe,
        {
          key: 0
        },
        [he(
          _(e.label),
          1
        )],
        2112
      )), G(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const zr = Q({
  render: kd,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: sr,
    VarIcon: Te
  },
  directives: {
    Ripple: Ue
  },
  props: yd,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = P({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = bd(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, p = (c = n.value) != null ? c : t.value;
      N(e.onClick, p), N(i.onToggle, p);
    };
    return o(d), ae(() => r.value, (c) => {
      a.value = c === !0 ? Cd : r.value;
    }, {
      immediate: !0
    }), {
      n: wd,
      classes: Sd,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
function $d(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Td = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: $d,
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
function ho(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function go(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ho(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ho(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Od,
  classes: Vd
} = ne("card"), Pd = 500, Md = ["src", "alt"];
function Ed(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ge("ripple");
  return ke((h(), V(
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
    [B(
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
      [G(e.$slots, "image", {}, () => [e.src ? (h(), V(
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
        Md
      )) : J("v-if", !0)]), B(
        "div",
        {
          class: m(e.n("container"))
        },
        [G(e.$slots, "title", {}, () => [e.title ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          _(e.title),
          3
        )) : J("v-if", !0)]), G(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          _(e.subtitle),
          3
        )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          _(e.description),
          3
        )) : J("v-if", !0)]), e.$slots.extra ? (h(), V(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [G(e.$slots, "extra")],
          2
        )) : J("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), V(
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
          [G(e.$slots, "floating-content")],
          6
        )) : J("v-if", !0)],
        2
      ), e.showFloatingButtons ? (h(), V(
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
        [G(e.$slots, "close-button", {}, () => [ee(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Dn(e.close, ["stop"])
          },
          {
            default: fe(() => [ee(
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
      )) : J("v-if", !0)],
      6
    ), B(
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
const Lr = Q({
  render: Ed,
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarButton: nn
  },
  props: Td,
  setup(e) {
    var n = P(null), r = P(null), a = P("auto"), t = P("auto"), i = P("100%"), o = P("100%"), l = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), v = P("0px"), f = P("0"), c = W(() => e.layout === "row"), p = P(!1), g = P(!1), {
      zIndex: y
    } = Xa(() => e.floating, 1);
    kt(() => e.floating, () => !c.value);
    var O = "auto", T = "auto", S = null, b = P(null), M = /* @__PURE__ */ function() {
      var k = go(function* () {
        clearTimeout(b.value), clearTimeout(S), b.value = null, b.value = setTimeout(/* @__PURE__ */ go(function* () {
          var {
            width: A,
            height: I,
            left: C,
            top: $
          } = n.value.getBoundingClientRect();
          a.value = ye(A), t.value = ye(I), i.value = a.value, o.value = t.value, l.value = ye($), s.value = ye(C), u.value = "fixed", O = l.value, T = s.value, p.value = !0, yield On(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? Pd : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), w = () => {
      clearTimeout(S), clearTimeout(b.value), b.value = null, i.value = a.value, o.value = t.value, l.value = O, s.value = T, v.value = "0px", f.value = "0", p.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", O = "auto", T = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      N(e["onUpdate:floating"], !1);
    };
    return ae(() => e.floating, (k) => {
      c.value || Pe(() => {
        k ? M() : w();
      });
    }, {
      immediate: !0
    }), {
      n: Od,
      classes: Vd,
      toSizeUnit: ye,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: b,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: y,
      isRow: c,
      close: D,
      showFloatingButtons: p,
      floated: g
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var Id = {
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
  n: Nd,
  classes: Dd
} = ne("cell");
function Bd(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [G(e.$slots, "icon", {}, () => [ee(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : J("v-if", !0), B(
      "div",
      {
        class: m(e.n("content"))
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [G(e.$slots, "description", {}, () => [he(
          _(e.description),
          1
        )])],
        2
      )) : J("v-if", !0)],
      2
    ), e.$slots.extra ? (h(), V(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [G(e.$slots, "extra")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const ur = Q({
  render: Bd,
  name: "VarCell",
  components: {
    VarIcon: Te
  },
  props: Id,
  setup() {
    return {
      n: Nd,
      classes: Dd
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
var Ad = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: zd
} = ne("form-details"), Ld = {
  key: 0
}, Fd = {
  key: 0
};
function Rd(e, n) {
  return h(), me(
    Le,
    {
      name: e.n()
    },
    {
      default: fe(() => [e.errorMessage || e.extraMessage ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [B(
          "div",
          {
            class: m(e.n("error-message"))
          },
          [ee(
            Le,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.errorMessage ? (h(), V(
                "div",
                Ld,
                _(e.errorMessage),
                1
              )) : J("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        ), B(
          "div",
          {
            class: m(e.n("extra-message"))
          },
          [ee(
            Le,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.extraMessage ? (h(), V(
                "div",
                Fd,
                _(e.extraMessage),
                1
              )) : J("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        )],
        2
      )) : J("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const He = Q({
  render: Rd,
  name: "VarFormDetails",
  props: Ad,
  setup: () => ({
    n: zd
  })
});
He.install = function(e) {
  e.component(He.name, He);
};
var Ud = {
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
}, Bl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Al = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Yd() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Bl), {
    length: r
  } = Cn(Al);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Wd() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(Bl), {
    index: r
  } = kn(Al);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var zl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function pn() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(zl), r = Ma(), a = e ? (t) => {
    e(ei({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function Hd() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(zl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: jd,
  classes: Gd
} = ne("checkbox");
function qd(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: m(e.n())
      },
      [ke((h(), V(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
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
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
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
      }]]), B(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
        2
      )],
      2
    ), ee(
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
const dr = Q({
  render: qd,
  name: "VarCheckbox",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: Ud,
  setup(e) {
    var n = P(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = P(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = Wd(), {
      form: l,
      bindForm: s
    } = pn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = mn(), c = (w) => {
      Pe(() => {
        var {
          validateTrigger: D,
          rules: k,
          modelValue: A
        } = e;
        d(D, w, k, A);
      });
    }, p = (w) => {
      n.value = w;
      var {
        checkedValue: D,
        onChange: k
      } = e;
      N(e["onUpdate:modelValue"], n.value), N(k, n.value), c("onChange"), w === D ? i == null || i.onChecked(D) : i == null || i.onUnchecked(D);
    }, g = (w) => {
      var {
        disabled: D,
        readonly: k,
        checkedValue: A,
        uncheckedValue: I,
        onClick: C
      } = e;
      if (!(l != null && l.disabled.value || D) && (N(C, w), !(l != null && l.readonly.value || k))) {
        t.value = !0;
        var $ = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && $ || p(r.value ? I : A);
      }
    }, y = (w) => {
      var {
        checkedValue: D,
        uncheckedValue: k
      } = e;
      n.value = w.includes(D) ? D : k;
    }, O = () => {
      t.value = !1;
    }, T = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, S = (w) => {
      var {
        checkedValue: D,
        uncheckedValue: k
      } = e, A = ![D, k].includes(w);
      A && (w = r.value ? k : D), p(w);
    }, b = () => v(e.rules, e.modelValue);
    ae(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var M = {
      checkedValue: a,
      checked: r,
      sync: y,
      validate: b,
      resetValidation: f,
      reset: T,
      resetWithAnimation: O
    };
    return N(o, M), N(s, M), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: jd,
      classes: Gd,
      handleClick: g,
      toggle: S,
      reset: T,
      validate: b,
      resetValidation: f
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
function Kd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Xd = {
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
    validator: Kd
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
  n: Zd,
  classes: Jd
} = ne("checkbox-group");
function Qd(e, n) {
  var r = te("var-form-details");
  return h(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
      2
    ), ee(
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
const Fr = Q({
  render: Qd,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: Xd,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = Yd(), {
      bindForm: o
    } = pn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = mn(), v = W(() => l.value), f = (D) => {
      Pe(() => {
        var {
          validateTrigger: k,
          rules: A,
          modelValue: I
        } = e;
        s(k, D, A, I);
      });
    }, c = (D) => {
      N(e["onUpdate:modelValue"], D), N(e.onChange, D), f("onChange");
    }, p = (D) => {
      var {
        modelValue: k
      } = e;
      k.includes(D) || c([...k, D]);
    }, g = (D) => {
      var {
        modelValue: k
      } = e;
      !k.includes(D) || c(k.filter((A) => A !== D));
    }, y = () => t.forEach((D) => {
      var {
        sync: k
      } = D;
      return k(e.modelValue);
    }), O = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, T = () => {
      var D = t.map((A) => {
        var {
          checkedValue: I
        } = A;
        return I.value;
      }), k = ro(D);
      return O(), N(e["onUpdate:modelValue"], k), k;
    }, S = () => {
      var D = t.filter((A) => {
        var {
          checked: I
        } = A;
        return !I.value;
      }).map((A) => {
        var {
          checkedValue: I
        } = A;
        return I.value;
      }), k = ro(D);
      return O(), N(e["onUpdate:modelValue"], k), k;
    }, b = () => {
      N(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    ae(() => e.modelValue, y, {
      deep: !0
    }), ae(() => a.value, y);
    var w = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: g,
      validate: M,
      resetValidation: d,
      reset: b,
      errorMessage: v
    };
    return i(w), N(o, w), {
      errorMessage: l,
      n: Zd,
      classes: Jd,
      checkAll: T,
      inverseAll: S,
      reset: b,
      validate: M,
      resetValidation: d
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
function xd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function _d(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ev = {
  type: {
    type: String,
    default: "default",
    validator: xd
  },
  size: {
    type: String,
    default: "normal",
    validator: _d
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: _e(Vl, "name"),
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
  n: zn,
  classes: nv
} = ne("chip");
function rv(e, n) {
  var r = te("var-icon");
  return h(), me(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: fe(() => [B(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [G(e.$slots, "left"), B(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [G(e.$slots, "default")],
          2
        ), G(e.$slots, "right"), e.closable ? (h(), V(
          "span",
          {
            key: 0,
            class: m(e.n("--close")),
            onClick: n[0] || (n[0] = function() {
              return e.onClose && e.onClose(...arguments);
            })
          },
          [ee(
            r,
            {
              name: "" + (e.iconName ? e.iconName : "close-circle")
            },
            null,
            8,
            ["name"]
          )],
          2
        )) : J("v-if", !0)],
        16
      )]),
      _: 3
    },
    8,
    ["name"]
  );
}
const vr = Q({
  render: rv,
  name: "VarChip",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: ev,
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
      } = e, s = zn(t ? "$--flex" : "$--inline-flex"), u = o ? zn("plain") + " " + zn("plain-" + i) : zn("--" + i), d = l ? zn("--round") : null;
      return [zn("--" + a), s, u, d];
    });
    return {
      n: zn,
      classes: nv,
      chipStyles: n,
      contentClass: r
    };
  }
});
vr.install = function(e) {
  e.component(vr.name, vr);
};
function av(e) {
  return ["row", "column"].includes(e);
}
var tv = {
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
    validator: av
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
}, Ll = Symbol("ROW_BIND_COL_KEY"), Fl = Symbol("ROW_COUNT_COL_KEY");
function iv() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Ll), {
    length: r
  } = Cn(Fl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function ov() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Ll), {
    index: r
  } = kn(Fl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: xa,
  classes: lv
} = ne("col");
function sv(e, n) {
  return h(), V(
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
    [G(e.$slots, "default")],
    6
  );
}
const Rr = Q({
  render: sv,
  name: "VarCol",
  props: tv,
  setup(e) {
    var n = P({
      left: 0,
      right: 0
    }), r = W(() => z(e.span)), a = W(() => z(e.offset)), {
      row: t,
      bindRow: i
    } = ov(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Bi(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(xa("--span-" + s + "-" + f)), v && d.push(xa("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(xa("--span-" + s + "-" + u));
      return d;
    };
    return ae([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), N(i, o), {
      n: xa,
      classes: lv,
      padding: n,
      toNumber: z,
      toSizeUnit: ye,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
var Rl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Ul = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function uv() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Rl), {
    length: r
  } = Cn(Ul);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var dv = {
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
  n: vv
} = ne("collapse");
function fv(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Ur = Q({
  render: fv,
  name: "VarCollapse",
  props: dv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = uv(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, p) => o() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((g) => g !== c) : null, s = (c, p) => {
      var g = l(c, p);
      N(e["onUpdate:modelValue"], g), N(e.onChange, g);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: g
          } = p;
          return e.modelValue === g.value;
        });
      var c = r.filter((p) => {
        var {
          name: g
        } = p;
        return g.value === void 0 ? !1 : e.modelValue.includes(g.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: p,
        name: g
      } = c;
      return g.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((c) => {
      var {
        index: p,
        name: g
      } = c;
      return g.value === void 0 ? e.modelValue.includes(p.value) : !1;
    }), v = () => {
      if (!!o()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var g = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, g);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), ae(() => n.value, () => Pe().then(v)), ae(() => e.modelValue, () => Pe().then(v)), {
      n: vv
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
function cv() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Rl), {
    index: r
  } = kn(Ul);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var mv = {
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
  n: pv,
  classes: hv
} = ne("collapse-item");
function gv(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [B(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [B(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [G(e.$slots, "title", {}, () => [he(
          _(e.title),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [G(e.$slots, "icon", {}, () => [ee(
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
    ), ke(B(
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
      [B(
        "div",
        {
          class: m(e.n("content-wrap"))
        },
        [G(e.$slots, "default")],
        2
      )],
      34
    ), [[qa, e.show]])],
    2
  );
}
const Yr = Q({
  render: gv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Te
  },
  props: mv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = cv(), t = !0, i = P(null), o = P(!1), l = P(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = W(() => e.name), f = (S, b) => {
      s.value === void 0 || S && Ce(s.value) || b === l.value || (l.value = b, c(!0));
    }, c = (S) => {
      e.disabled || S || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Pe(() => {
        var {
          offsetHeight: S
        } = i.value;
        i.value.style.height = 0 + "px", Tn(() => {
          i.value.style.height = S + "px", t && Ct(() => {
            t && O();
          });
        });
      }));
    }, g = () => {
      t = !1;
    }, y = () => {
      if (!!i.value) {
        var {
          offsetHeight: S
        } = i.value;
        i.value.style.height = S + "px", Tn(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, O = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, T = {
      index: n,
      name: v,
      init: f
    };
    return a(T), ae(l, (S) => {
      S ? p() : y();
    }), {
      n: pv,
      start: g,
      classes: hv,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: O
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
var yv = {
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
  n: bv
} = ne("countdown"), ni = 1e3, ri = 60 * ni, ai = 60 * ri, yo = 24 * ai;
function wv(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default", ml(Ks(e.timeData)), () => [he(
      _(e.showTime),
      1
    )])],
    2
  );
}
const Wr = Q({
  render: wv,
  name: "VarCountdown",
  props: yv,
  setup(e) {
    var n = P(0), r = P(!1), a = P(""), t = P(0), i = P(0), o = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, p) => {
      var g = Object.values(p), y = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (y.forEach((S, b) => {
        c.includes(S) ? c = c.replace(S, gr("" + g[b], 2, "0")) : g[b + 1] += g[b] * O[b];
      }), c.includes("S")) {
        var T = gr("" + g[g.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", T) : c.includes("SS") ? c = c.replace("SS", T.slice(0, 2)) : c = c.replace("S", T.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var p = Math.floor(c / yo), g = Math.floor(c % yo / ai), y = Math.floor(c % ai / ri), O = Math.floor(c % ri / ni), T = Math.floor(c % ni), S = {
        days: p,
        hours: g,
        minutes: y,
        seconds: O,
        milliseconds: T
      };
      o.value = S, N(e.onChange, o.value), a.value = l(e.format, S);
    }, u = () => {
      var {
        time: c,
        onEnd: p,
        autoStart: g
      } = e, y = Date.now();
      n.value || (n.value = y + z(c));
      var O = n.value - y;
      if (O < 0 && (O = 0), i.value = O, s(O), O === 0) {
        N(p);
        return;
      }
      (g || r.value) && (t.value = Tn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, du(t.value), u();
    };
    return ae(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: bv,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Vr = 9e15, tr = 1e9, ti = "0123456789abcdef", vt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ft = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ii = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Vr,
  maxE: Vr,
  crypto: !1
}, Yl, En, ve = !0, Tt = "[DecimalError] ", er = Tt + "Invalid argument: ", Wl = Tt + "Precision limit exceeded", Hl = Tt + "crypto unavailable", jl = "[object Decimal]", Ke = Math.floor, Ae = Math.pow, Sv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Cv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, kv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Gl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, wn = 1e7, ue = 7, $v = 9007199254740991, Tv = vt.length - 1, oi = ft.length - 1, q = { toStringTag: jl };
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
    throw Error(er + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
q.comparedTo = q.cmp = function(e) {
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
q.cosine = q.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Ov(a, Jl(a, r)), a.precision = e, a.rounding = n, se(En == 2 || En == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ve = !1, i = d.s * Ae(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = We(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = Ae(r, 1 / 3), e = Ke((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = $e(u.plus(d).times(l), u.plus(s), o + 2, 1), We(l.d).slice(0, o) === (r = We(a.d)).slice(0, o))
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
  return ve = !0, se(a, e, v.rounding, n);
};
q.decimalPlaces = q.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Ke(this.e / ue)) * ue, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
q.dividedBy = q.div = function(e) {
  return $e(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return se($e(n, new r(e), 0, 1, 1), r.precision, r.rounding);
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
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Vt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = ka(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return se(i, o.precision = r, o.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = ka(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Vt(5, e)), t = ka(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, se(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, $e(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? yn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? yn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = yn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
};
q.inverseHyperbolicCosine = q.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, ve = !1, r = r.times(r).minus(1).sqrt().plus(r), ve = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
q.inverseHyperbolicSine = q.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, ve = !1, r = r.times(r).plus(1).sqrt().plus(r), ve = !0, a.precision = e, a.rounding = n, r.ln());
};
q.inverseHyperbolicTangent = q.atanh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? se(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = $e(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = yn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= oi)
      return o = yn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= oi)
      return o = yn(d, v + 4, f).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / ue + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (ve = !1, n = Math.ceil(l / ue), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), ve = !0, se(o, d.precision = v, d.rounding = f, !0);
};
q.isFinite = function() {
  return !!this.d;
};
q.isInteger = q.isInt = function() {
  return !!this.d && Ke(this.e / ue) > this.d.length - 2;
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
  var n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, c = 5;
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
  if (ve = !1, l = v + c, o = qn(u, l), a = n ? ct(d, l + 10) : qn(e, l), s = $e(o, a, l, 1), Ra(s.d, t = v, f))
    do
      if (l += 10, o = qn(u, l), a = n ? ct(d, l + 10) : qn(e, l), s = $e(o, a, l, 1), !i) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = se(s, v + 1, 0));
        break;
      }
    while (Ra(s.d, t += 10, f));
  return ve = !0, se(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, p = c.constructor;
  if (e = new p(e), !c.d || !e.d)
    return !c.s || !e.s ? e = new p(NaN) : c.d ? e.s = -e.s : e = new p(e.d || c.s !== e.s ? c : NaN), e;
  if (c.s != e.s)
    return e.s = -e.s, c.plus(e);
  if (u = c.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(c);
    else
      return new p(s === 3 ? -0 : 0);
    return ve ? se(e, l, s) : e;
  }
  if (r = Ke(e.e / ue), d = Ke(c.e / ue), u = u.slice(), i = d - r, i) {
    for (v = i < 0, v ? (n = u, i = -i, o = f.length) : (n = f, r = d, o = u.length), a = Math.max(Math.ceil(l / ue), o) + 2, i > a && (i = a, n.length = 1), n.reverse(), a = i; a--; )
      n.push(0);
    n.reverse();
  } else {
    for (a = u.length, o = f.length, v = a < o, v && (o = a), a = 0; a < o; a++)
      if (u[a] != f[a]) {
        v = u[a] < f[a];
        break;
      }
    i = 0;
  }
  for (v && (n = u, u = f, f = n, e.s = -e.s), o = u.length, a = f.length - o; a > 0; --a)
    u[o++] = 0;
  for (a = f.length; a > i; ) {
    if (u[--a] < f[a]) {
      for (t = a; t && u[--t] === 0; )
        u[t] = wn - 1;
      --u[t], u[a] += wn;
    }
    u[a] -= f[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Ot(u, r), ve ? se(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? se(new a(r), a.precision, a.rounding) : (ve = !1, a.modulo == 9 ? (n = $e(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = $e(r, e, 0, a.modulo, 1), n = n.times(e), ve = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return li(this);
};
q.naturalLogarithm = q.ln = function() {
  return qn(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, se(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), ve ? se(e, l, s) : e;
  if (i = Ke(v.e / ue), a = Ke(e.e / ue), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / ue), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / wn | 0, u[t] %= wn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = Ot(u, a), ve ? se(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(er + e);
  return r.d ? (n = ql(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return se(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Pv(a, Jl(a, r)), a.precision = e, a.rounding = n, se(En > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (ve = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = We(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ke((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus($e(o, i, r + 2, 1)).times(0.5), We(i.d).slice(0, r) === (n = We(a.d)).slice(0, r))
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
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = $e(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, se(En == 2 || En == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Ke(d.e / ue) + Ke(e.e / ue), s = f.length, u = c.length, s < u && (i = f, f = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * f[t - a - 1] + n, i[t--] = l % wn | 0, n = l / wn | 0;
    i[t] = (i[t] + n) % wn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = Ot(i, r), ve ? se(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Ri(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (rn(e, 0, tr), n === void 0 ? n = a.rounding : rn(n, 0, 8), se(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Vn(a, !0) : (rn(e, 0, tr), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e + 1, n), r = Vn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = Vn(t) : (rn(e, 0, tr), n === void 0 ? n = i.rounding : rn(n, 0, 8), a = se(new i(t), e + t.e + 1, n), r = Vn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, p = c.d, g = c.constructor;
  if (!p)
    return new g(c);
  if (u = r = new g(1), a = s = new g(0), n = new g(a), i = n.e = ql(p) - c.e - 1, o = i % ue, n.d[0] = Ae(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new g(e), !l.isInt() || l.lt(u))
      throw Error(er + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (ve = !1, l = new g(We(p)), d = g.precision, g.precision = i = p.length * ue * 2; v = $e(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = $e(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = $e(u, a, i, 1).minus(c).abs().cmp($e(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], g.precision = d, ve = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Ri(this, 16, e, n);
};
q.toNearest = function(e, n) {
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
  return e.d[0] ? (ve = !1, r = $e(r, e, 0, n, 1).times(e), ve = !0, se(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return Ri(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Ae(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return se(l, a, i);
  if (n = Ke(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= $v)
    return t = Kl(s, l, r, a), e.s < 0 ? new s(1).div(t) : se(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = Ae(+l, u), n = r == 0 || !isFinite(r) ? Ke(u * (Math.log("0." + We(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (ve = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = li(e.times(qn(l, a + r)), a), t.d && (t = se(t, a + 5, 1), Ra(t.d, a, i) && (n = a + 10, t = se(li(e.times(qn(l, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = se(t, a + 1, 0)))), t.s = o, ve = !0, s.rounding = i, se(t, a, i));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Vn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (rn(e, 1, tr), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e, n), r = Vn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (rn(e, 1, tr), n === void 0 ? n = a.rounding : rn(n, 0, 8)), se(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = Vn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return se(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = Vn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function We(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = ue - a.length, r && (i += Fn(r)), i += a;
    o = e[n], a = o + "", r = ue - a.length, r && (i += Fn(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function rn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(er + e);
}
function Ra(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = Ae(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == Ae(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == Ae(10, n - 3) - 1, o;
}
function tt(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += ti.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Ov(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Vt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = ka(e, 1, n.times(t), new e(1));
  for (var i = r; i--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var $e = function() {
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
    var u, d, v, f, c, p, g, y, O, T, S, b, M, w, D, k, A, I, C, $, L = a.constructor, Y = a.s == t.s ? 1 : -1, j = a.d, F = t.d;
    if (!j || !j[0] || !F || !F[0])
      return new L(
        !a.s || !t.s || (j ? F && j[0] == F[0] : !F) ? NaN : j && j[0] == 0 || !F ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = wn, c = ue, d = Ke(a.e / c) - Ke(t.e / c)), C = F.length, A = j.length, O = new L(Y), T = O.d = [], v = 0; F[v] == (j[v] || 0); v++)
      ;
    if (F[v] > (j[v] || 0) && d--, i == null ? (w = i = L.precision, o = L.rounding) : l ? w = i + (a.e - t.e) + 1 : w = i, w < 0)
      T.push(1), p = !0;
    else {
      if (w = w / c + 2 | 0, v = 0, C == 1) {
        for (f = 0, F = F[0], w++; (v < A || f) && w--; v++)
          D = f * s + (j[v] || 0), T[v] = D / F | 0, f = D % F | 0;
        p = f || v < A;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), j = e(j, f, s), C = F.length, A = j.length), k = C, S = j.slice(0, C), b = S.length; b < C; )
          S[b++] = 0;
        $ = F.slice(), $.unshift(0), I = F[0], F[1] >= s / 2 && ++I;
        do
          f = 0, u = n(F, S, C, b), u < 0 ? (M = S[0], C != b && (M = M * s + (S[1] || 0)), f = M / I | 0, f > 1 ? (f >= s && (f = s - 1), g = e(F, f, s), y = g.length, b = S.length, u = n(g, S, y, b), u == 1 && (f--, r(g, C < y ? $ : F, y, s))) : (f == 0 && (u = f = 1), g = F.slice()), y = g.length, y < b && g.unshift(0), r(S, g, b, s), u == -1 && (b = S.length, u = n(F, S, C, b), u < 1 && (f++, r(S, C < b ? $ : F, b, s))), b = S.length) : u === 0 && (f++, S = [0]), T[v++] = f, u && S[0] ? S[b++] = j[k] || 0 : (S = [j[k]], b = 1);
        while ((k++ < A || S[0] !== void 0) && w--);
        p = S[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (c == 1)
      O.e = d, Yl = p;
    else {
      for (v = 1, f = T[0]; f >= 10; f /= 10)
        v++;
      O.e = v + d * c - 1, se(O, l ? i + O.e + 1 : i, o, p);
    }
    return O;
  };
}();
function se(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (i = n - t, i < 0)
        i += ue, o = n, d = v[f = 0], s = d / Ae(10, t - o - 1) % 10 | 0;
      else if (f = Math.ceil((i + 1) / ue), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, i %= ue, o = i - ue + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        i %= ue, o = i - ue + t, s = o < 0 ? 0 : d / Ae(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (o < 0 ? d : d % Ae(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / Ae(10, t - o) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Ae(10, (ue - n % ue) % ue), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (i == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Ae(10, ue - i), v[f] = o > 0 ? (d / Ae(10, t - o) % Ae(10, o) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (i = 1, o = v[0]; o >= 10; o /= 10)
              i++;
            for (o = v[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, v[0] == wn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != wn)
              break;
            v[f--] = 0, l = 1;
          }
      for (i = v.length; v[--i] === 0; )
        v.pop();
    }
  return ve && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function Vn(e, n, r) {
  if (!e.isFinite())
    return Zl(e);
  var a, t = e.e, i = We(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Fn(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Fn(-t - 1) + i, r && (a = r - o) > 0 && (i += Fn(a))) : t >= o ? (i += Fn(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Fn(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Fn(a))), i;
}
function Ot(e, n) {
  var r = e[0];
  for (n *= ue; r >= 10; r /= 10)
    n++;
  return n;
}
function ct(e, n, r) {
  if (n > Tv)
    throw ve = !0, r && (e.precision = r), Error(Wl);
  return se(new e(vt), n, 1, !0);
}
function yn(e, n, r) {
  if (n > oi)
    throw Error(Wl);
  return se(new e(ft), n, r, !0);
}
function ql(e) {
  var n = e.length - 1, r = n * ue + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Fn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Kl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / ue + 4);
  for (ve = !1; ; ) {
    if (r % 2 && (i = i.times(n), wo(i.d, o) && (t = !0)), r = Ke(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), wo(n.d, o);
  }
  return ve = !0, i;
}
function bo(e) {
  return e.d[e.d.length - 1] & 1;
}
function Xl(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function li(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ve = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Ae(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = se(i.times(e), s, 1), r = r.times(++d), l = o.plus($e(i, r, s, 1)), We(l.d).slice(0, s) === We(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = se(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Ra(o.d, s - a, c, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return se(o, f.precision = p, c, ve = !0);
      else
        return f.precision = p, o;
    }
    o = l;
  }
}
function qn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, p = 10, g = e, y = g.d, O = g.constructor, T = O.rounding, S = O.precision;
  if (g.s < 0 || !y || !y[0] || !g.e && y[0] == 1 && y.length == 1)
    return new O(y && !y[0] ? -1 / 0 : g.s != 1 ? NaN : y ? 0 : g);
  if (n == null ? (ve = !1, d = S) : d = n, O.precision = d += p, r = We(y), a = r.charAt(0), Math.abs(i = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = We(g.d), a = r.charAt(0), c++;
    i = g.e, a > 1 ? (g = new O("0." + r), i++) : g = new O(a + "." + r.slice(1));
  } else
    return u = ct(O, d + 2, S).times(i + ""), g = qn(new O(a + "." + r.slice(1)), d - p).plus(u), O.precision = S, n == null ? se(g, S, T, ve = !0) : g;
  for (v = g, s = o = g = $e(g.minus(1), g.plus(1), d, 1), f = se(g.times(g), d, 1), t = 3; ; ) {
    if (o = se(o.times(f), d, 1), u = s.plus($e(o, new O(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(ct(O, d + 2, S).times(i + ""))), s = $e(s, new O(c), d, 1), n == null)
        if (Ra(s.d, d - p, T, l))
          O.precision = d += p, u = o = g = $e(v.minus(1), v.plus(1), d, 1), f = se(g.times(g), d, 1), t = l = 1;
        else
          return se(s, O.precision = S, T, ve = !0);
      else
        return O.precision = S, s;
    s = u, t += 2;
  }
}
function Zl(e) {
  return String(e.s * e.s / 0);
}
function si(e, n) {
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
function Vv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Gl.test(n))
      return si(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Cv.test(n))
    r = 16, n = n.toLowerCase();
  else if (Sv.test(n))
    r = 2;
  else if (kv.test(n))
    r = 8;
  else
    throw Error(er + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Kl(a, new a(r), i, i * 2)), u = tt(n, r, wn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Ot(u, d), e.d = u, ve = !1, o && (e = $e(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Ae(2, s) : Kn.pow(2, s))), ve = !0, e);
}
function Pv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : ka(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Vt(5, r)), n = ka(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function ka(e, n, r, a, t) {
  var i, o, l, s, u = e.precision, d = Math.ceil(u / ue);
  for (ve = !1, s = r.times(r), l = new e(a); ; ) {
    if (o = $e(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(o) : a.minus(o), a = $e(o.times(s), new e(n++ * n++), u, 1), o = l.plus(a), o.d[d] !== void 0) {
      for (i = d; o.d[i] === l.d[i] && i--; )
        ;
      if (i == -1)
        break;
    }
    i = l, l = a, a = o, o = i;
  }
  return ve = !0, o.d.length = d + 1, o;
}
function Vt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Jl(e, n) {
  var r, a = n.s < 0, t = yn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return En = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    En = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return En = bo(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    En = bo(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ri(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor, p = r !== void 0;
  if (p ? (rn(r, 1, tr), a === void 0 ? a = c.rounding : rn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Zl(e);
  else {
    for (d = Vn(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = tt(Vn(f), 10, t), f.e = f.d.length), v = tt(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = $e(e, f, r, a, 0, t), v = e.d, i = e.e, u = Yl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += ti.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = tt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += ti.charAt(v[o]);
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
function wo(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Mv(e) {
  return new this(e).abs();
}
function Ev(e) {
  return new this(e).acos();
}
function Iv(e) {
  return new this(e).acosh();
}
function Nv(e, n) {
  return new this(e).plus(n);
}
function Dv(e) {
  return new this(e).asin();
}
function Bv(e) {
  return new this(e).asinh();
}
function Av(e) {
  return new this(e).atan();
}
function zv(e) {
  return new this(e).atanh();
}
function Lv(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = yn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? yn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = yn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan($e(e, n, i, 1)), n = yn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan($e(e, n, i, 1)), r;
}
function Fv(e) {
  return new this(e).cbrt();
}
function Rv(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function Uv(e, n, r) {
  return new this(e).clamp(n, r);
}
function Yv(e) {
  if (!e || typeof e != "object")
    throw Error(Tt + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    tr,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Vr,
    0,
    "toExpPos",
    0,
    Vr,
    "maxE",
    0,
    Vr,
    "minE",
    -Vr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = ii[r]), (a = e[r]) !== void 0)
      if (Ke(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(er + r + ": " + a);
  if (r = "crypto", t && (this[r] = ii[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Hl);
      else
        this[r] = !1;
    else
      throw Error(er + r + ": " + a);
  return this;
}
function Wv(e) {
  return new this(e).cos();
}
function Hv(e) {
  return new this(e).cosh();
}
function Ql(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, So(i)) {
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
      return si(u, i.toString());
    } else if (s !== "string")
      throw Error(er + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Gl.test(i) ? si(u, i) : Vv(u, i);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Yv, t.clone = Ql, t.isDecimal = So, t.abs = Mv, t.acos = Ev, t.acosh = Iv, t.add = Nv, t.asin = Dv, t.asinh = Bv, t.atan = Av, t.atanh = zv, t.atan2 = Lv, t.cbrt = Fv, t.ceil = Rv, t.clamp = Uv, t.cos = Wv, t.cosh = Hv, t.div = jv, t.exp = Gv, t.floor = qv, t.hypot = Kv, t.ln = Xv, t.log = Zv, t.log10 = Qv, t.log2 = Jv, t.max = xv, t.min = _v, t.mod = ef, t.mul = nf, t.pow = rf, t.random = af, t.round = tf, t.sign = of, t.sin = lf, t.sinh = sf, t.sqrt = uf, t.sub = df, t.sum = vf, t.tan = ff, t.tanh = cf, t.trunc = mf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function jv(e, n) {
  return new this(e).div(n);
}
function Gv(e) {
  return new this(e).exp();
}
function qv(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function Kv() {
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
function So(e) {
  return e instanceof Kn || e && e.toStringTag === jl || !1;
}
function Xv(e) {
  return new this(e).ln();
}
function Zv(e, n) {
  return new this(e).log(n);
}
function Jv(e) {
  return new this(e).log(2);
}
function Qv(e) {
  return new this(e).log(10);
}
function xv() {
  return Xl(this, arguments, "lt");
}
function _v() {
  return Xl(this, arguments, "gt");
}
function ef(e, n) {
  return new this(e).mod(n);
}
function nf(e, n) {
  return new this(e).mul(n);
}
function rf(e, n) {
  return new this(e).pow(n);
}
function af(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : rn(e, 1, tr), a = Math.ceil(e / ue), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(Hl);
  else
    for (; i < a; )
      l[i++] = Math.random() * 1e7 | 0;
  for (a = l[--i], e %= ue, a && e && (t = Ae(10, ue - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
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
function tf(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function of(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function lf(e) {
  return new this(e).sin();
}
function sf(e) {
  return new this(e).sinh();
}
function uf(e) {
  return new this(e).sqrt();
}
function df(e, n) {
  return new this(e).sub(n);
}
function vf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ve = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ve = !0, se(r, this.precision, this.rounding);
}
function ff(e) {
  return new this(e).tan();
}
function cf(e) {
  return new this(e).tanh();
}
function mf(e) {
  return se(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var Kn = q.constructor = Ql(ii);
vt = new Kn(vt);
ft = new Kn(ft);
var pf = {
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
  n: hf,
  classes: gf
} = ne("counter"), Co = 100, ko = 600, yf = ["inputmode", "readonly", "disabled"];
function bf(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      Ve({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [ke(ee(
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
      }]]), ke(B(
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
          "onUpdate:modelValue": n[0] || (n[0] = (i) => e.inputValue = i),
          onChange: n[1] || (n[1] = function() {
            return e.handleChange && e.handleChange(...arguments);
          })
        },
        null,
        46,
        yf
      ), [[Xs, e.inputValue]]), ke(ee(
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
    ), ee(
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
const Hr = Q({
  render: bf,
  name: "VarCounter",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: pf,
  setup(e) {
    var n = P(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = pn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = mn(), {
      readonly: f,
      disabled: c
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), g = (F) => {
      Pe(() => {
        var {
          validateTrigger: Z,
          rules: H,
          modelValue: X
        } = e;
        u(Z, F, H, X);
      });
    }, y = () => {
      var {
        min: F
      } = e;
      N(e["onUpdate:modelValue"], F != null ? z(F) : 0), v();
    }, O = {
      reset: y,
      validate: p,
      resetValidation: v
    }, T = W(() => {
      var {
        max: F,
        modelValue: Z
      } = e;
      return F != null && z(Z) >= z(F);
    }), S = W(() => {
      var {
        min: F,
        modelValue: Z
      } = e;
      return F != null && z(Z) <= z(F);
    }), b = (F) => {
      var {
        decimalLength: Z,
        max: H,
        min: X
      } = e, E = z(F);
      return H != null && E > z(H) && (E = z(H)), X != null && E < z(X) && (E = z(X)), F = String(E), Z != null && (F = E.toFixed(z(Z))), F;
    }, M = (F) => {
      var {
        lazyChange: Z,
        onBeforeChange: H
      } = e, {
        value: X
      } = F.target, E = b(X);
      Z ? N(H, z(E), j) : Y(E), g("onInputChange");
    }, w = () => {
      var {
        disabled: F,
        readonly: Z,
        disableDecrement: H,
        decrementButton: X,
        lazyChange: E,
        step: R,
        modelValue: U,
        onDecrement: x,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || F || Z || H || !X) && !S.value) {
        var le = new Kn(z(U)).minus(new Kn(z(R))).toString(), de = b(le), we = z(de);
        N(x, we), E ? N(ie, we, j) : (Y(de), g("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: F,
        readonly: Z,
        disableIncrement: H,
        incrementButton: X,
        lazyChange: E,
        step: R,
        modelValue: U,
        onIncrement: x,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || F || Z || H || !X) && !T.value) {
        var le = new Kn(z(U)).plus(new Kn(z(R))).toString(), de = b(le), we = z(de);
        N(x, we), E ? N(ie, we, j) : (Y(de), g("onIncrement"));
      }
    }, k = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (i = window.setTimeout(() => {
        L();
      }, ko));
    }, A = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (t = window.setTimeout(() => {
        $();
      }, ko));
    }, I = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, C = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, $ = () => {
      r = window.setTimeout(() => {
        D(), $();
      }, Co);
    }, L = () => {
      a = window.setTimeout(() => {
        w(), L();
      }, Co);
    }, Y = (F) => {
      n.value = F;
      var Z = z(F);
      N(e["onUpdate:modelValue"], Z);
    }, j = (F) => {
      Y(b(String(F))), g("onLazyChange");
    };
    return N(o, O), ae(() => e.modelValue, (F) => {
      Y(b(String(F))), N(e.onChange, z(F));
    }), Y(b(String(e.modelValue))), {
      n: hf,
      classes: gf,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: T,
      isMin: S,
      validate: p,
      reset: y,
      resetValidation: v,
      handleChange: M,
      decrement: w,
      increment: D,
      pressDecrement: k,
      pressIncrement: A,
      releaseDecrement: I,
      releaseIncrement: C,
      toSizeUnit: ye,
      toNumber: z
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var xl = 60, _l = xl * 60, es = _l * 24, wf = es * 7, $a = 1e3, Rt = xl * $a, $o = _l * $a, Sf = es * $a, Cf = wf * $a, Ui = "millisecond", Pr = "second", Mr = "minute", Er = "hour", Rn = "day", it = "week", gn = "month", ns = "quarter", Un = "year", Ir = "date", kf = "YYYY-MM-DDTHH:mm:ssZ", To = "Invalid Date", $f = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Tf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Of = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var ui = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Vf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + ui(t, 2, "0") + ":" + ui(i, 2, "0");
}, Pf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, gn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), gn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Mf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Ef = function(n) {
  var r = {
    M: gn,
    y: Un,
    w: it,
    d: Rn,
    D: Ir,
    h: Er,
    m: Mr,
    s: Pr,
    ms: Ui,
    Q: ns
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, If = function(n) {
  return n === void 0;
};
const Nf = {
  s: ui,
  z: Vf,
  m: Pf,
  a: Mf,
  p: Ef,
  u: If
};
var za = "en", fr = {};
fr[za] = Of;
var Yi = function(n) {
  return n instanceof Pt;
}, mt = function e(n, r, a) {
  var t;
  if (!n)
    return za;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    fr[i] && (t = i), r && (fr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    fr[l] = n, t = l;
  }
  return !a && t && (za = t), t || !a && za;
}, re = function(n, r) {
  if (Yi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Pt(a);
}, Df = function(n, r) {
  return re(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Se = Nf;
Se.l = mt;
Se.i = Yi;
Se.w = Df;
var Bf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Se.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match($f);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Pt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = mt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Bf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Se;
  }, n.isValid = function() {
    return this.$d.toString() !== To;
  }, n.isSame = function(a, t) {
    var i = re(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return re(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < re(a);
  }, n.$g = function(a, t, i) {
    return Se.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = Se.u(t) ? !0 : t, l = Se.p(a), s = function(O, T) {
      var S = Se.w(i.$u ? Date.UTC(i.$y, T, O) : new Date(i.$y, T, O), i);
      return o ? S : S.endOf(Rn);
    }, u = function(O, T) {
      var S = [0, 0, 0, 0], b = [23, 59, 59, 999];
      return Se.w(i.toDate()[O].apply(
        i.toDate("s"),
        (o ? S : b).slice(T)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Un:
        return o ? s(1, 0) : s(31, 11);
      case gn:
        return o ? s(1, v) : s(0, v + 1);
      case it: {
        var p = this.$locale().weekStart || 0, g = (d < p ? d + 7 : d) - p;
        return s(o ? f - g : f + (6 - g), v);
      }
      case Rn:
      case Ir:
        return u(c + "Hours", 0);
      case Er:
        return u(c + "Minutes", 1);
      case Mr:
        return u(c + "Seconds", 2);
      case Pr:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = Se.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Rn] = l + "Date", i[Ir] = l + "Date", i[gn] = l + "Month", i[Un] = l + "FullYear", i[Er] = l + "Hours", i[Mr] = l + "Minutes", i[Pr] = l + "Seconds", i[Ui] = l + "Milliseconds", i)[o], u = o === Rn ? this.$D + (t - this.$W) : t;
    if (o === gn || o === Un) {
      var d = this.clone().set(Ir, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Ir, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Se.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = Se.p(t), s = function(f) {
      var c = re(i);
      return Se.w(c.date(c.date() + Math.round(f * a)), i);
    };
    if (l === gn)
      return this.set(gn, this.$M + a);
    if (l === Un)
      return this.set(Un, this.$y + a);
    if (l === Rn)
      return s(1);
    if (l === it)
      return s(7);
    var u = (o = {}, o[Mr] = Rt, o[Er] = $o, o[Pr] = $a, o)[l] || 1, d = this.$d.getTime() + a * u;
    return Se.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || To;
    var o = a || kf, l = Se.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, p = function(S, b, M, w) {
      return S && (S[b] || S(t, o)) || M[b].slice(0, w);
    }, g = function(S) {
      return Se.s(s % 12 || 12, S, "0");
    }, y = c || function(T, S, b) {
      var M = T < 12 ? "AM" : "PM";
      return b ? M.toLowerCase() : M;
    }, O = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Se.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: Se.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, v, 2),
      ddd: p(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Se.s(s, 2, "0"),
      h: g(1),
      hh: g(2),
      a: y(s, u, !0),
      A: y(s, u, !1),
      m: String(u),
      mm: Se.s(u, 2, "0"),
      s: String(this.$s),
      ss: Se.s(this.$s, 2, "0"),
      SSS: Se.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(Tf, function(T, S) {
      return S || O[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = Se.p(t), s = re(a), u = (s.utcOffset() - this.utcOffset()) * Rt, d = this - s, v = Se.m(this, s);
    return v = (o = {}, o[Un] = v / 12, o[gn] = v, o[ns] = v / 3, o[it] = (d - u) / Cf, o[Rn] = (d - u) / Sf, o[Er] = d / $o, o[Mr] = d / Rt, o[Pr] = d / $a, o)[l] || d, i ? v : Se.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(gn).$D;
  }, n.$locale = function() {
    return fr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = mt(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return Se.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), rs = Pt.prototype;
re.prototype = rs;
[["$ms", Ui], ["$s", Pr], ["$m", Mr], ["$H", Er], ["$W", Rn], ["$M", gn], ["$y", Un], ["$D", Ir]].forEach(function(e) {
  rs[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
re.extend = function(e, n) {
  return e.$i || (e(n, Pt, re), e.$i = !0), re;
};
re.locale = mt;
re.isDayjs = Yi;
re.unix = function(e) {
  return re(e * 1e3);
};
re.en = fr[za];
re.Ls = fr;
re.p = {};
const as = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, ts = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Af(e) {
  return ["date", "month"].includes(e);
}
var ot = [{
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
}], Aa = [{
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
}], zf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Af
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
  n: Lf
} = ne("picker-header");
function Ff(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [ee(
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
        default: fe(() => [ee(r, {
          name: "chevron-left"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    ), B(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ee(
        Le,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), V(
            "div",
            {
              key: e.showDate
            },
            _(e.showDate),
            1
          ))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
    ), ee(
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
        default: fe(() => [ee(r, {
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
const is = Q({
  render: Ff,
  name: "PanelHeader",
  components: {
    VarButton: nn,
    VarIcon: Te
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
    } = n, a = P(!1), t = P(0), i = W(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (l = Ye.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return Ye.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return ae(() => e.date, () => {
      t.value = 0;
    }), {
      n: Lf,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
function di() {
  return di = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, di.apply(this, arguments);
}
re.extend(as);
re.extend(ts);
var {
  n: _a,
  classes: Rf
} = ne("month-picker"), {
  n: et
} = ne("date-picker");
function Uf(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [B(
      "div",
      {
        class: m(e.n("content"))
      },
      [ee(
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
      ), ee(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), V("ul", {
            key: e.panelKey
          }, [(h(!0), V(
            Oe,
            null,
            Ne(e.MONTH_LIST, (t) => (h(), V("li", {
              key: t.index
            }, [ee(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, di({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: fe(() => [he(
                  _(e.getMonthAbbr(t.index)),
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
const Yf = Q({
  render: Uf,
  name: "MonthPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: is
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
    } = n, [a, t] = e.current.split("-"), i = P(!1), o = P(0), l = P(null), s = Ie({
      left: !1,
      right: !1
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), v = (T) => {
      var S, b;
      return (S = (b = Ye.value.datePickerMonthDict) == null ? void 0 : b[T].abbr) != null ? S : "";
    }, f = (T) => {
      var {
        preview: {
          previewYear: S
        },
        componentProps: {
          min: b,
          max: M
        }
      } = e, w = !0, D = !0, k = S + "-" + T;
      return M && (w = re(k).isSameOrBefore(re(M), "month")), b && (D = re(k).isSameOrAfter(re(b), "month")), w && D;
    }, c = (T) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: b,
          chooseRangeMonth: M
        },
        componentProps: {
          type: w,
          range: D
        }
      } = e;
      if (D) {
        if (!M.length)
          return !1;
        var k = re(T).isSameOrBefore(re(M[1]), "month"), A = re(T).isSameOrAfter(re(M[0]), "month");
        return k && A;
      }
      return w === "month" ? S.includes(T) : b.some((I) => I.includes(T));
    }, p = (T) => {
      var {
        choose: {
          chooseMonth: S
        },
        preview: {
          previewYear: b
        },
        componentProps: {
          allowedDates: M,
          color: w,
          multiple: D,
          range: k
        }
      } = e, A = b + "-" + T, I = () => k || D ? c(A) : (S == null ? void 0 : S.index) === T && u.value, C = () => f(T) ? M ? !M(A) : !1 : !0, $ = C(), L = () => $ ? !0 : k || D ? !c(A) : !u.value || (S == null ? void 0 : S.index) !== T, Y = () => d.value && t === T && e.componentProps.showCurrent ? (k || D || u.value) && $ ? !0 : k || D ? !c(A) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, j = () => $ ? "" : Y() ? w != null ? w : "" : I() ? "" : et() + "-color-cover", F = j().startsWith(et());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : w,
        textColor: F ? "" : j(),
        [et() + "-color-cover"]: F,
        class: Rf(_a("button"), [$, _a("button--disabled")])
      };
    }, g = (T, S) => {
      var b = S.currentTarget;
      b.classList.contains(_a("button--disabled")) || r("choose-month", T);
    }, y = (T) => {
      i.value = T === "prev", o.value += T === "prev" ? -1 : 1, r("check-preview", "year", T);
    }, O = (T) => {
      l.value.checkDate(T);
    };
    return ae(() => e.preview.previewYear, (T) => {
      var {
        componentProps: {
          min: S,
          max: b
        }
      } = e;
      b && (s.right = !re("" + (z(T) + 1)).isSameOrBefore(re(b), "year")), S && (s.left = !re("" + (z(T) - 1)).isSameOrAfter(re(S), "year"));
    }, {
      immediate: !0
    }), {
      n: _a,
      nDate: et,
      pack: Ye,
      MONTH_LIST: ot,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: O,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: g,
      checkDate: y
    };
  }
});
var {
  n: Oo,
  classes: Wf
} = ne("year-picker"), Hf = ["onClick"];
function jf(e, n) {
  return h(), V(
    "ul",
    {
      class: m(e.n())
    },
    [(h(!0), V(
      Oe,
      null,
      Ne(e.yearList, (r) => (h(), V(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: K({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        _(r),
        15,
        Hf
      ))),
      128
    ))],
    2
  );
}
const Gf = Q({
  render: jf,
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
      var u = [z(o) + 100, z(o) - 100];
      if (l) {
        var d = re(l).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = re(s).format("YYYY-MM-D"), c = z(f.split("-")[0]);
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
      var i = document.querySelector("." + Oo("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: Oo,
      classes: Wf,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
function vi() {
  return vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vi.apply(this, arguments);
}
re.extend(as);
re.extend(ts);
var {
  n: Or,
  classes: qf
} = ne("day-picker"), {
  n: nt
} = ne("date-picker");
function Kf(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [B(
      "div",
      {
        class: m(e.n("content"))
      },
      [ee(
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
      ), ee(
        Le,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), V("div", {
            key: e.panelKey
          }, [B(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(h(!0), V(
              Oe,
              null,
              Ne(e.sortWeekList, (t) => (h(), V(
                "li",
                {
                  key: t.index
                },
                _(e.getDayAbbr(t.index)),
                1
              ))),
              128
            ))],
            2
          ), B(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(h(!0), V(
              Oe,
              null,
              Ne(e.days, (t, i) => (h(), V("li", {
                key: i
              }, [ee(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, vi({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: fe(() => [he(
                    _(e.filterDay(t)),
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
const Xf = Q({
  render: Kf,
  name: "DayPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: is
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
    } = n, [a, t, i] = e.current.split("-"), o = P([]), l = P(!1), s = P(0), u = P(null), d = Ie({
      left: !1,
      right: !1
    }), v = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = W(() => {
      var k;
      return e.choose.chooseYear === e.preview.previewYear && ((k = e.choose.chooseMonth) == null ? void 0 : k.index) === e.preview.previewMonth.index;
    }), c = W(() => {
      var k = Aa.findIndex((A) => A.index === e.componentProps.firstDayOfWeek);
      return k === -1 || k === 0 ? Aa : Aa.slice(k).concat(Aa.slice(0, k));
    }), p = (k) => {
      var A, I;
      return (A = (I = Ye.value.datePickerWeekDict) == null ? void 0 : I[k].abbr) != null ? A : "";
    }, g = (k) => k > 0 ? k : "", y = () => {
      var {
        preview: {
          previewMonth: k,
          previewYear: A
        }
      } = e, I = re(A + "-" + k.index).daysInMonth(), C = re(A + "-" + k.index + "-01").day(), $ = c.value.findIndex((L) => L.index === "" + C);
      o.value = [...Array($).fill(-1), ...Array.from(Array(I + 1).keys())].filter((L) => L);
    }, O = () => {
      var {
        preview: {
          previewYear: k,
          previewMonth: A
        },
        componentProps: {
          max: I,
          min: C
        }
      } = e;
      if (I) {
        var $ = k + "-" + (z(A.index) + 1);
        d.right = !re($).isSameOrBefore(re(I), "month");
      }
      if (C) {
        var L = k + "-" + (z(A.index) - 1);
        d.left = !re(L).isSameOrAfter(re(C), "month");
      }
    }, T = (k) => {
      var {
        preview: {
          previewYear: A,
          previewMonth: I
        },
        componentProps: {
          min: C,
          max: $
        }
      } = e, L = !0, Y = !0, j = A + "-" + I.index + "-" + k;
      return $ && (L = re(j).isSameOrBefore(re($), "day")), C && (Y = re(j).isSameOrAfter(re(C), "day")), L && Y;
    }, S = (k) => {
      var {
        choose: {
          chooseDays: A,
          chooseRangeDay: I
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!I.length)
          return !1;
        var $ = re(k).isSameOrBefore(re(I[1]), "day"), L = re(k).isSameOrAfter(re(I[0]), "day");
        return $ && L;
      }
      return A.includes(k);
    }, b = (k) => {
      if (k < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Or("button")
        };
      var {
        choose: {
          chooseDay: A
        },
        preview: {
          previewYear: I,
          previewMonth: C
        },
        componentProps: {
          allowedDates: $,
          color: L,
          multiple: Y,
          range: j
        }
      } = e, F = I + "-" + C.index + "-" + k, Z = () => j || Y ? S(F) : z(A) === k && f.value, H = () => T(k) ? $ ? !$(F) : !1 : !0, X = H(), E = () => X ? !0 : j || Y ? !S(F) : !f.value || z(A) !== k, R = () => v.value && z(i) === k && e.componentProps.showCurrent ? (j || Y || f.value) && X ? !0 : j || Y ? !S(F) : f.value ? A !== i : !0 : !1, U = () => X ? "" : R() ? L != null ? L : "" : Z() ? "" : nt() + "-color-cover", x = U().startsWith(nt());
      return {
        text: E(),
        outline: R(),
        textColor: x ? "" : U(),
        [nt() + "-color-cover"]: x,
        class: qf(Or("button"), Or("button--usable"), [X, Or("button--disabled")])
      };
    }, M = (k) => {
      l.value = k === "prev", s.value += k === "prev" ? -1 : 1, r("check-preview", "month", k);
    }, w = (k, A) => {
      var I = A.currentTarget;
      I.classList.contains(Or("button--disabled")) || r("choose-day", k);
    }, D = (k) => {
      u.value.checkDate(k);
    };
    return Fe(() => {
      y(), O();
    }), ae(() => e.preview, () => {
      y(), O();
    }), {
      n: Or,
      nDate: nt,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: g,
      getDayAbbr: p,
      checkDate: M,
      chooseDay: w,
      buttonProps: b
    };
  }
});
var {
  n: Zf,
  classes: Jf
} = ne("date-picker");
function Qf(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [B(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [G(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
          _(e.chooseYear),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [ee(
          Le,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: fe(() => {
              var i, o, l;
              return [e.type === "month" ? (h(), V("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                _(e.getMonthTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                _(e.getMonthTitle),
                1
              )]) : G(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [he(
                _(e.getMonthTitle),
                1
              )])])) : (h(), V("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                _(e.getDateTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                _(e.getDateTitle),
                1
              )]) : G(e.$slots, "date", ml(Ve({
                key: 2
              }, e.slotProps)), () => [he(
                _(e.getDateTitle),
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
    ), B(
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
      [ee(
        Le,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: fe(() => [e.getPanelType === "year" ? (h(), me(
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
          )) : J("v-if", !0)]),
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
const jr = Q({
  render: Qf,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Yf,
    YearPickerPanel: Gf,
    DayPickerPanel: Xf
  },
  props: zf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = re().format("YYYY-MM-D"), [o, l] = i.split("-"), s = ot.find((oe) => oe.index === l), u = P(!1), d = P(!1), v = P(!0), f = P(), c = P(), p = P(), g = P(s), y = P(o), O = P(!1), T = P([]), S = P([]), b = P([]), M = P([]), w = P(null), D = P(null), k = Ie({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), A = W(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: p.value,
      chooseMonths: T.value,
      chooseDays: S.value,
      chooseRangeMonth: b.value,
      chooseRangeDay: M.value
    })), I = W(() => ({
      previewMonth: g.value,
      previewYear: y.value
    })), C = W(() => {
      var {
        multiple: oe,
        range: pe
      } = e;
      if (pe)
        return b.value.length ? b.value[0] + " ~ " + b.value[1] : "";
      var ce = "";
      if (f.value) {
        var ge, be;
        ce = (ge = (be = Ye.value.datePickerMonthDict) == null ? void 0 : be[f.value.index].name) != null ? ge : "";
      }
      return oe ? "" + T.value.length + Ye.value.datePickerSelected : ce;
    }), $ = W(() => {
      var oe, pe, ce, ge, {
        multiple: be,
        range: De
      } = e;
      if (De) {
        var Xe = M.value.map((zt) => re(zt).format("YYYY-MM-DD"));
        return Xe.length ? Xe[0] + " ~ " + Xe[1] : "";
      }
      if (be)
        return "" + S.value.length + Ye.value.datePickerSelected;
      if (!c.value || !f.value || !p.value)
        return "";
      var sn = re(c.value + "-" + f.value.index + "-" + p.value).day(), Tr = Aa.find((zt) => zt.index === "" + sn), _i = (oe = (pe = Ye.value.datePickerWeekDict) == null ? void 0 : pe[Tr.index].name) != null ? oe : "", Hs = (ce = (ge = Ye.value.datePickerMonthDict) == null ? void 0 : ge[f.value.index].name) != null ? ce : "", js = gr(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + js + " " + _i.slice(0, 3) : _i.slice(0, 3) + ", " + Hs.slice(0, 3) + " " + p.value;
    }), L = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(L.value)), j = W(() => {
      var oe, pe, ce, ge, be = re(c.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + p.value).day(), De = p.value ? gr(p.value, 2, "0") : "";
      return {
        week: "" + be,
        year: (pe = c.value) != null ? pe : "",
        month: (ce = (ge = f.value) == null ? void 0 : ge.index) != null ? ce : "",
        date: De
      };
    }), F = W(() => A.value.chooseRangeDay.map((oe) => re(oe).format("YYYY-MM-DD"))), Z = W(() => c.value === y.value), H = W(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === g.value.index;
    }), X = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, E = (oe) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: ce
        } = oe.touches[0];
        n = pe, r = ce;
      }
    }, R = (oe, pe) => oe >= pe && oe > 20 ? "x" : "y", U = (oe) => {
      if (!Y.value) {
        var {
          clientX: pe,
          clientY: ce
        } = oe.touches[0], ge = pe - n, be = ce - r;
        t = R(Math.abs(ge), Math.abs(be)), a = ge > 0 ? "prev" : "next";
      }
    }, x = () => {
      if (!(Y.value || t !== "x")) {
        var oe = L.value === "month" ? w : D;
        Ct(() => {
          oe.value.forwardRef(a), xi();
        });
      }
    }, ie = (oe, pe) => {
      var ce = pe === "month" ? b : M;
      if (ce.value = v.value ? [oe, oe] : [ce.value[0], oe], v.value = !v.value, v.value) {
        var ge = re(ce.value[0]).isAfter(ce.value[1]), be = ge ? [ce.value[1], ce.value[0]] : [...ce.value];
        N(e["onUpdate:modelValue"], be), N(e.onChange, be);
      }
    }, le = (oe, pe) => {
      var ce = pe === "month" ? T : S, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", be = ce.value.map((Xe) => re(Xe).format(ge)), De = be.findIndex((Xe) => Xe === oe);
      De === -1 ? be.push(oe) : be.splice(De, 1), N(e["onUpdate:modelValue"], be), N(e.onChange, be);
    }, de = (oe, pe) => !c.value || !f.value ? !1 : Z.value ? oe === "month" ? pe.index < f.value.index : H.value ? pe < z(p.value) : f.value.index > g.value.index : c.value > y.value, we = (oe) => {
      var {
        readonly: pe,
        range: ce,
        multiple: ge,
        onChange: be,
        "onUpdate:modelValue": De
      } = e;
      if (!(oe < 0 || pe)) {
        O.value = de("day", oe);
        var Xe = y.value + "-" + g.value.index + "-" + oe, sn = re(Xe).format("YYYY-MM-DD");
        ce ? ie(sn, "day") : ge ? le(sn, "day") : (N(De, sn), N(be, sn));
      }
    }, Re = (oe) => {
      var {
        type: pe,
        readonly: ce,
        range: ge,
        multiple: be,
        onChange: De,
        onPreview: Xe,
        "onUpdate:modelValue": sn
      } = e;
      if (O.value = de("month", oe), pe === "month" && !ce) {
        var Tr = y.value + "-" + oe.index;
        ge ? ie(Tr, "month") : be ? le(Tr, "month") : (N(sn, Tr), N(De, Tr));
      } else
        g.value = oe, N(Xe, z(y.value), z(g.value.index));
      d.value = !1;
    }, Qe = (oe) => {
      y.value = "" + oe, u.value = !1, d.value = !0, N(e.onPreview, z(y.value), z(g.value.index));
    }, Me = (oe, pe) => {
      var ce = pe === "prev" ? -1 : 1;
      if (oe === "year")
        y.value = "" + (z(y.value) + ce);
      else {
        var ge = z(g.value.index) + ce;
        ge < 1 && (y.value = "" + (z(y.value) - 1), ge = 12), ge > 12 && (y.value = "" + (z(y.value) + 1), ge = 1), g.value = ot.find((be) => z(be.index) === ge);
      }
      N(e.onPreview, z(y.value), z(g.value.index));
    }, ln = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, At = (oe) => Ce(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Us = (oe, pe) => {
      var ce = pe === "month" ? b : M, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", be = oe.map((sn) => re(sn).format(ge)).slice(0, 2), De = ce.value.some((sn) => At(sn));
      if (!De) {
        ce.value = be;
        var Xe = re(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Xe && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Ys = (oe, pe) => {
      var ce = pe === "month" ? T : S, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", be = Array.from(new Set(oe.map((De) => re(De).format(ge))));
      ce.value = be.filter((De) => De !== "Invalid Date");
    }, Ws = (oe) => {
      var pe = re(oe).format("YYYY-MM-D");
      if (!At(pe)) {
        var [ce, ge, be] = pe.split("-"), De = ot.find((Xe) => Xe.index === ge);
        f.value = De, c.value = ce, p.value = be, g.value = De, y.value = ce;
      }
    }, xi = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ae(() => e.modelValue, (oe) => {
      if (!(!ln() || At(oe) || !oe))
        if (e.range) {
          if (!Ce(oe))
            return;
          v.value = oe.length !== 1, Us(oe, e.type);
        } else if (e.multiple) {
          if (!Ce(oe))
            return;
          Ys(oe, e.type);
        } else
          Ws(oe);
    }, {
      immediate: !0
    }), ae(L, xi), {
      n: Zf,
      classes: Jf,
      monthPanelEl: w,
      dayPanelEl: D,
      reverse: O,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: p,
      previewYear: y,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: $,
      getPanelType: L,
      getChoose: A,
      getPreview: I,
      componentProps: k,
      slotProps: j,
      formatRange: F,
      clickEl: X,
      handleTouchstart: E,
      handleTouchmove: U,
      handleTouchend: x,
      getChooseDay: we,
      getChooseMonth: Re,
      getChooseYear: Qe,
      checkPreview: Me
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
function fi() {
  return fi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, fi.apply(this, arguments);
}
function xf(e) {
  return ["left", "center", "right"].includes(e);
}
var _f = fi({
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
    validator: xf
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
}, _e(Ka, [
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
var {
  n: ec,
  classes: nc
} = ne("dialog");
function rc(e, n) {
  var r = te("var-button"), a = te("var-popup");
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
      default: fe(() => [B(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: ci({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [B(
          "div",
          {
            class: m(e.n("title"))
          },
          [G(e.$slots, "title", {}, () => [he(
            _(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), B(
          "div",
          {
            class: m(e.n("message")),
            style: K({
              textAlign: e.messageAlign
            })
          },
          [G(e.$slots, "default", {}, () => [he(
            _(e.message),
            1
          )])],
          6
        ), B(
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
              default: fe(() => [he(
                _(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : J("v-if", !0), e.confirmButton ? (h(), me(
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
              default: fe(() => [he(
                _(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : J("v-if", !0)],
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
const cr = Q({
  render: rc,
  name: "VarDialog",
  components: {
    VarPopup: bn,
    VarButton: nn
  },
  inheritAttrs: !1,
  props: _f,
  setup(e) {
    var n = P(!1), r = P(!1), a = () => N(e["onUpdate:show"], !1), t = () => {
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
    return ae(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), ae(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: ec,
      classes: nc,
      pack: Ye,
      dt: wt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: ye
    };
  }
});
var Wn;
function br(e) {
  return zi() ? new Promise((n) => {
    br.close();
    var r = qe(e) || je(e) ? {
      message: String(e)
    } : e, a = Ie(r);
    a.teleport = "body", Wn = a;
    var {
      unmountInstance: t
    } = Na(cr, a, {
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
        a.onClosed == null || a.onClosed(), t(), Wn === a && (Wn = null);
      },
      onRouteChange: () => {
        t(), Wn === a && (Wn = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
cr.install = function(e) {
  e.component(cr.name, cr);
};
br.install = function(e) {
  e.component(cr.name, cr);
};
br.close = () => {
  if (Wn != null) {
    var e = Wn;
    Wn = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
br.Component = cr;
var ac = {
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
function Nr() {
  return Nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Nr.apply(this, arguments);
}
var {
  n: tc,
  classes: ic
} = ne("divider");
function oc(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [G(e.$slots, "default", {}, () => [e.description ? (h(), V(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      _(e.description),
      3
    )) : J("v-if", !0)])],
    6
  );
}
const Gr = Q({
  render: oc,
  name: "VarDivider",
  props: ac,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ie({
      withText: !1
    }), t = W(() => Gt(e.inset) ? e.inset : !0), i = W(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Gt(l) || l === 0)
        return Nr({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Nr({}, d, {
        height: "calc(80% - " + ye(f) + ")"
      }) : Nr({}, d, {
        width: "calc(100% - " + ye(f) + ")",
        left: v > 0 ? ye(f) : ye(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Fe(() => {
      o();
    }), Di(() => {
      o();
    }), Nr({
      n: tc,
      classes: ic
    }, Zs(a), {
      style: i,
      isInset: t
    });
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
function lc(e) {
  return ["start", "end", "none"].includes(e);
}
var sc = {
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
    default: "none",
    validator: lc
  }
};
function Vo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function uc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Vo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Vo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: dc
} = ne("form");
function vc(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Xn = Q({
  render: vc,
  name: "VarForm",
  props: sc,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Hd(), i = /* @__PURE__ */ function() {
      var u = uc(function* () {
        var d = yield Promise.all(a.map((g) => {
          var {
            validate: y
          } = g;
          return y();
        })), v = d.findIndex((g) => g === !1);
        if (e.scrollToError !== "none" && v !== -1) {
          if (e.scrollToError === "start") {
            var f;
            (f = a[v].instance.proxy) == null || f.$el.scrollIntoView();
          }
          if (e.scrollToError === "end") {
            for (var c = d.length - 1; c >= 0; c--)
              if (d[c] === !1) {
                var p;
                (p = a[c].instance.proxy) == null || p.$el.scrollIntoView();
                break;
              }
          }
        }
        return v === -1;
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
      n: dc,
      validate: i,
      reset: o,
      resetValidation: l
    };
  }
});
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
Xn.useValidation = mn;
Xn.useForm = pn;
function Po(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Mt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Po(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Po(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
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
var fc = "background-image", cc = "lazy-loading", mc = "lazy-error", Mo = "lazy-attempt", pc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], pi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ta = [], pt = [], os = nu(100), Be = {
  loading: pi,
  error: pi,
  attempt: 3,
  throttleWait: 300,
  events: pc
}, Wi = Ai(Za, Be.throttleWait);
function Et(e, n) {
  e._lazy.arg === fc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function hc(e) {
  e._lazy.loading && Et(e, e._lazy.loading), Za();
}
function gc(e) {
  e._lazy.error && Et(e, e._lazy.error), e._lazy.state = "error", ji(e), Za();
}
function ls(e, n) {
  Et(e, n), e._lazy.state = "success", ji(e), Za();
}
function yc(e) {
  var n;
  pt.includes(e) || (pt.push(e), (n = Be.events) == null || n.forEach((r) => {
    e.addEventListener(r, Wi, {
      passive: !0
    });
  }));
}
function bc() {
  pt.forEach((e) => {
    var n;
    (n = Be.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Wi);
    });
  }), pt.length = 0;
}
function wc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(cc)) != null ? r : Be.loading,
    error: (a = e.getAttribute(mc)) != null ? a : Be.error,
    attempt: e.getAttribute(Mo) ? Number(e.getAttribute(Mo)) : Be.attempt
  };
  e._lazy = mi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Et(e, pi), N(Be.filter, e._lazy);
}
function Sc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, os.add(n), ls(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? gc(e) : ss(e);
  });
}
function ss(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (os.has(n)) {
      ls(e, n), e._lazy.attemptLock = !1;
      return;
    }
    hc(e), Sc(e, n);
  }
}
function Hi(e) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = Mt(function* (e) {
    (yield tu(e)) && ss(e);
  }), hi.apply(this, arguments);
}
function Za() {
  Ta.forEach((e) => Hi(e));
}
function Cc(e) {
  return gi.apply(this, arguments);
}
function gi() {
  return gi = Mt(function* (e) {
    !Ta.includes(e) && Ta.push(e), iu(e).forEach(yc), yield Hi(e);
  }), gi.apply(this, arguments);
}
function ji(e) {
  bt(Ta, e), Ta.length === 0 && bc();
}
function kc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function us(e, n) {
  return yi.apply(this, arguments);
}
function yi() {
  return yi = Mt(function* (e, n) {
    wc(e, n), yield Cc(e);
  }), yi.apply(this, arguments);
}
function $c(e, n) {
  return bi.apply(this, arguments);
}
function bi() {
  return bi = Mt(function* (e, n) {
    if (!kc(e, n)) {
      Ta.includes(e) && (yield Hi(e));
      return;
    }
    yield us(e, n);
  }), bi.apply(this, arguments);
}
function Tc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  Be.events = n != null ? n : Be.events, Be.loading = r != null ? r : Be.loading, Be.error = a != null ? a : Be.error, Be.attempt = t != null ? t : Be.attempt, Be.throttleWait = i != null ? i : Be.throttleWait, Be.filter = o;
}
var ht = {
  mounted: us,
  unmounted: ji,
  updated: $c,
  install(e, n) {
    Tc(n), Wi = Ai(Za, Be.throttleWait), e.directive("lazy", this);
  }
};
function Oc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Vc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Oc,
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
  n: Pc,
  classes: Mc
} = ne("image"), Ec = ["alt", "title", "lazy-error", "lazy-loading"], Ic = ["alt", "title", "src"];
function Nc(e, n) {
  var r = Ge("lazy"), a = Ge("ripple");
  return ke((h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((h(), V(
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
      Ec
    )), [[r, e.src]]) : (h(), V(
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
      Ic
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const qr = Q({
  render: Nc,
  name: "VarImage",
  directives: {
    Lazy: ht,
    Ripple: Ue
  },
  props: Vc,
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
      n: Pc,
      classes: Mc,
      toSizeUnit: ye,
      handleLoad: n,
      handleError: r
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
var ds = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), vs = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Dc() {
  var {
    childProviders: e,
    bindChildren: n
  } = fn(ds), {
    length: r
  } = Cn(vs);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var fs = {
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
function Eo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Eo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Eo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var Ac = 250, zc = 20, {
  n: Lc,
  classes: Fc
} = ne("swipe"), Rc = ["onClick"];
function Uc(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [B(
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
      [G(e.$slots, "default")],
      38
    ), G(e.$slots, "indicator", {
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
        Ne(e.length, (r, a) => (h(), V(
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
          Rc
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)])],
    2
  );
}
const Zn = Q({
  render: Uc,
  name: "VarSwipe",
  props: fs,
  setup(e) {
    var n = P(null), r = P(0), a = W(() => e.vertical), t = P(0), i = P(0), o = P(!1), l = P(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Dc(), v = !1, f = -1, c, p, g, y, O, T = (E) => s.find((R) => {
      var {
        index: U
      } = R;
      return U.value === E;
    }), S = () => {
      !e.loop || (i.value >= 0 && T(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && T(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (T(d.value - 1).setTranslate(0), T(0).setTranslate(0)));
    }, b = (E) => {
      var R = je(E) ? E : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: U
      } = e;
      return R <= -1 ? U ? -1 : 0 : R >= d.value ? U ? d.value : d.value - 1 : R;
    }, M = (E) => {
      var {
        loop: R
      } = e;
      return E === -1 ? R ? d.value - 1 : 0 : E === d.value ? R ? 0 : d.value - 1 : E;
    }, w = (E) => {
      var {
        loop: R
      } = e;
      return E < 0 ? R ? d.value - 1 : 0 : E > d.value - 1 ? R ? 0 : d.value - 1 : E;
    }, D = (E) => {
      var R = i.value >= r.value, U = i.value <= -t.value, x = 0, ie = -(t.value - r.value);
      o.value = !0, (R || U) && (o.value = !0, i.value = U ? x : ie, T(0).setTranslate(0), T(d.value - 1).setTranslate(0)), Ct(() => {
        o.value = !1, N(E);
      });
    }, k = () => {
      l.value = w(z(e.initialIndex));
    }, A = () => {
      var {
        autoplay: E
      } = e;
      !E || d.value <= 1 || (I(), f = window.setTimeout(() => {
        F(), A();
      }, z(E)));
    }, I = () => {
      f && clearTimeout(f);
    }, C = (E, R) => {
      if (E > R && E > 10)
        return "horizontal";
      if (R > E && R > 10)
        return "vertical";
    }, $ = (E) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: R,
          clientY: U
        } = E.touches[0];
        c = R, p = U, g = performance.now(), v = !0, I(), D(() => {
          o.value = !0;
        });
      }
    }, L = (E) => {
      var {
        touchable: R,
        vertical: U
      } = e;
      if (!(!v || !R)) {
        var {
          clientX: x,
          clientY: ie
        } = E.touches[0], le = Math.abs(x - c), de = Math.abs(ie - p), we = C(le, de), Re = U ? "vertical" : "horizontal";
        if (we === Re) {
          E.preventDefault();
          var Qe = y !== void 0 ? x - y : 0, Me = O !== void 0 ? ie - O : 0;
          y = x, O = ie, i.value += U ? Me : Qe, S();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: E,
          onChange: R
        } = e, U = E ? O < p : y < c, x = Math.abs(E ? p - O : c - y), ie = performance.now() - g <= Ac && x >= zc, le = ie ? b(U ? l.value + 1 : l.value - 1) : b();
        v = !1, o.value = !1, y = void 0, O = void 0, i.value = le * -r.value;
        var de = l.value;
        l.value = M(le), A(), de !== l.value && N(R, l.value);
      }
    }, j = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((E) => {
        E.setTranslate(0);
      }), A(), setTimeout(() => {
        o.value = !1;
      });
    }, F = () => {
      if (!(d.value <= 1)) {
        var {
          loop: E,
          onChange: R
        } = e, U = l.value;
        l.value = w(U + 1), N(R, l.value), D(() => {
          if (U === d.value - 1 && E) {
            T(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          U !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, Z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: E,
          onChange: R
        } = e, U = l.value;
        l.value = w(U - 1), N(R, l.value), D(() => {
          if (U === 0 && E) {
            T(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          U !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, H = (E) => {
      if (!(d.value <= 1 || E === l.value)) {
        E = E < 0 ? 0 : E, E = E >= d.value ? d.value : E;
        var R = E > l.value ? F : Z;
        Array.from({
          length: Math.abs(E - l.value)
        }).forEach(R);
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), ae(() => d.value, /* @__PURE__ */ Bc(function* () {
      yield On(), k(), j();
    })), Fe(() => {
      window.addEventListener("resize", j);
    }), ar(() => {
      window.removeEventListener("resize", j), I();
    }), {
      n: Lc,
      classes: Fc,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: $,
      handleTouchmove: L,
      handleTouchend: Y,
      next: F,
      prev: Z,
      to: H,
      resize: j,
      toNumber: z
    };
  }
});
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
function Yc() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(ds), {
    index: r
  } = kn(vs);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Wc
} = ne("swipe-item");
function Hc(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n()),
      style: K({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const Jn = Q({
  render: Hc,
  name: "VarSwipeItem",
  setup() {
    var e = P(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Yc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: Wc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
function wi() {
  return wi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, wi.apply(this, arguments);
}
var jc = wi({
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
}, _e(fs, ["loop", "indicator", "onChange"]), _e(Ka, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: Io,
  classes: Gc
} = ne("image-preview"), No = 12, Do = 200, qc = 350, Bo = 200, Kc = ["src", "alt"];
function Xc(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), i = te("var-popup");
  return h(), me(
    i,
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
      default: fe(() => [ee(
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
          default: fe(() => [(h(!0), V(
            Oe,
            null,
            Ne(e.images, (o) => (h(), me(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: fe(() => [B(
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
                  [B(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    Kc
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
          indicator: fe((o) => {
            var {
              index: l,
              length: s
            } = o;
            return [G(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (h(), V(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              _(l + 1) + " / " + _(s),
              3
            )) : J("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), G(e.$slots, "close-icon", {}, () => [e.closeable ? (h(), me(
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
      )) : J("v-if", !0)]), B(
        "div",
        {
          class: m(e.n("extra"))
        },
        [G(e.$slots, "extra")],
        2
      )]),
      _: 3
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const mr = Q({
  render: Xc,
  name: "VarImagePreview",
  components: {
    VarSwipe: Zn,
    VarSwipeItem: Jn,
    VarPopup: bn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: jc,
  setup(e) {
    var n = P(!1), r = W(() => {
      var {
        images: I,
        current: C
      } = e, $ = I.findIndex((L) => L === C);
      return $ >= 0 ? $ : 0;
    }), a = P(1), t = P(0), i = P(0), o = P(void 0), l = P(void 0), s = P(!0), u = null, d = null, v = null, f = (I, C) => {
      var {
        clientX: $,
        clientY: L
      } = I, {
        clientX: Y,
        clientY: j
      } = C;
      return Math.abs(Math.sqrt(Math.pow(Y - $, 2) + Math.pow(j - L, 2)));
    }, c = (I, C) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: C
    }), p = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, Bo);
    }, g = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, y = (I) => d ? f(d, I) <= No && I.timestamp - d.timestamp <= Do && d.target === I.target : !1, O = (I) => !I || !u || !d ? !1 : f(u, d) <= No && Date.now() - d.timestamp < qc && (I === u.target || I.parentNode === u.target), T = (I) => {
      v = window.setTimeout(() => {
        O(I.target) && A(), u = null;
      }, Do);
    }, S = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = I, $ = c(C[0], I.currentTarget);
      if (u = $, y($)) {
        a.value > 1 ? g() : p();
        return;
      }
      d = $;
    }, b = (I) => {
      var {
        offsetWidth: C,
        offsetHeight: $
      } = I, {
        naturalWidth: L,
        naturalHeight: Y
      } = I.querySelector("." + Io("image"));
      return {
        width: C,
        height: $,
        imageRadio: Y / L,
        rootRadio: $ / C,
        zoom: z(e.zoom)
      };
    }, M = (I) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: Y,
        height: j
      } = b(I);
      if (!$)
        return 0;
      var F = $ > L ? j / $ : Y;
      return Math.max(0, (C * F - Y) / 2) / C;
    }, w = (I) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: Y,
        height: j
      } = b(I);
      if (!$)
        return 0;
      var F = $ > L ? j : Y * $;
      return Math.max(0, (C * F - j) / 2) / C;
    }, D = (I, C, $) => I + C >= $ ? $ : I + C <= -$ ? -$ : I + C, k = (I) => {
      if (!!d) {
        var C = I.currentTarget, {
          touches: $
        } = I, L = c($[0], C);
        if (a.value > 1) {
          var Y = L.clientX - d.clientX, j = L.clientY - d.clientY, F = M(C), Z = w(C);
          t.value = D(t.value, Y, F), i.value = D(i.value, j, Z);
        }
        d = L;
      }
    }, A = () => {
      if (a.value > 1) {
        g(), setTimeout(() => N(e["onUpdate:show"], !1), Bo);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Io,
      classes: Gc,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: S,
      handleTouchmove: k,
      handleTouchend: T,
      close: A
    };
  }
});
var Hn;
function nr(e) {
  if (!!zi()) {
    nr.close();
    var n = qe(e) ? {
      images: [e]
    } : Ce(e) ? {
      images: e
    } : e, r = Ie(n);
    r.teleport = "body", Hn = r;
    var {
      unmountInstance: a
    } = Na(mr, r, {
      onClose: () => r.onClose == null ? void 0 : r.onClose(),
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Hn === r && (Hn = null);
      },
      onRouteChange: () => {
        a(), Hn === r && (Hn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
nr.close = () => {
  if (Hn != null) {
    var e = Hn;
    Hn = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
mr.install = function(e) {
  e.component(mr.name, mr);
};
nr.install = function(e) {
  e.component(mr.name, mr);
};
nr.Component = mr;
var cs = {
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
function Ao(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ao(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ao(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Jc,
  classes: Qc
} = ne("sticky");
function xc(e, n) {
  return h(), V(
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
    [B(
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
      [G(e.$slots, "default")],
      6
    )],
    6
  );
}
const Qn = Q({
  render: xc,
  name: "VarSticky",
  props: cs,
  setup(e) {
    var n = P(null), r = P(null), a = P(!1), t = P("0px"), i = P("0px"), o = P("auto"), l = P("auto"), s = P("auto"), u = P("auto"), d = W(() => !e.disabled && e.cssMode), v = W(() => !e.disabled && a.value), f = W(() => ze(e.offsetTop)), c, p = () => {
      var {
        onScroll: O,
        cssMode: T,
        disabled: S
      } = e;
      if (!S) {
        var b = 0;
        if (c !== window) {
          var {
            top: M
          } = c.getBoundingClientRect();
          b = M;
        }
        var w = r.value, D = n.value, {
          top: k,
          left: A
        } = D.getBoundingClientRect(), I = k - b;
        I <= f.value ? (T || (o.value = D.offsetWidth + "px", l.value = D.offsetHeight + "px", t.value = b + f.value + "px", i.value = A + "px", s.value = w.offsetWidth + "px", u.value = w.offsetHeight + "px", a.value = !0), N(O, f.value, !0)) : (a.value = !1, N(O, I, !1));
      }
    }, g = /* @__PURE__ */ function() {
      var O = Zc(function* () {
        yield On(), c = Ia(n.value), c !== window && c.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return O.apply(this, arguments);
      };
    }(), y = () => {
      c !== window && c.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return ae(() => e.disabled, p), Ei(g), Ii(y), Fe(g), ar(y), {
      n: Jc,
      classes: Qc,
      stickyEl: n,
      wrapperEl: r,
      isFixed: a,
      offsetTop: f,
      fixedTop: t,
      fixedLeft: i,
      fixedWidth: o,
      fixedHeight: l,
      fixedWrapperWidth: s,
      fixedWrapperHeight: u,
      enableCSSMode: d,
      enableFixedMode: v,
      toNumber: z
    };
  }
});
Qn.install = function(e) {
  e.component(Qn.name, Qn);
};
var ms = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), ps = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function _c() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(ms), {
    length: r
  } = Cn(ps);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function em() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(ms), {
    index: r
  } = kn(ps);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var nm = {
  index: {
    type: [Number, String]
  }
}, {
  n: rm,
  classes: am
} = ne("index-anchor");
function tm(e, n) {
  return h(), me(
    Ea(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: fe(() => [B(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [G(e.$slots, "default", {}, () => [he(
          _(e.name),
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
const Kr = Q({
  render: tm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: Qn
  },
  inheritAttrs: !1,
  props: nm,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = em(), t = P(0), i = P(!1), o = W(() => e.index), l = P(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (y) => {
      i.value = y;
    }, g = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(g), {
      n: rm,
      classes: am,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Le
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var im = {
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
function zo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        zo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        zo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: om,
  classes: lm
} = ne("index-bar"), sm = ["onClick"];
function um(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [G(e.$slots, "default"), B(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), V(
        Oe,
        null,
        Ne(e.anchorNameList, (r) => (h(), V(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: K({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          _(r),
          15,
          sm
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Xr = Q({
  render: um,
  name: "VarIndexBar",
  props: im,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = _c(), t = P(""), i = P(null), o = P(null), l = P([]), s = P(), u = W(() => e.sticky), d = W(() => e.cssMode), v = W(() => ze(e.stickyOffsetTop)), f = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var p = (T) => {
      var S = Bi(T) ? T.name.value : T;
      S === s.value || S === void 0 || (s.value = S, N(e.onChange, S));
    }, g = () => {
      var T = St(i.value), S = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: b
      } = o.value;
      r.forEach((M, w) => {
        var D = M.ownTop.value, k = T - D + v.value - b, A = w === r.length - 1 ? S : r[w + 1].ownTop.value - M.ownTop.value;
        k >= 0 && k < A && !t.value && (w && !e.cssMode && r[w - 1].setDisabled(!0), M.setDisabled(!1), p(M));
      });
    }, y = /* @__PURE__ */ function() {
      var T = Ut(function* (S, b) {
        var {
          offsetTop: M
        } = o.value;
        if (b && N(e.onClick, S), S !== s.value) {
          var w = r.find((A) => {
            var {
              name: I
            } = A;
            return S === I.value;
          });
          if (!!w) {
            var D = w.ownTop.value - v.value + M, k = Li(i.value);
            t.value = S, p(S), yield st(i.value, {
              left: k,
              top: D,
              animation: hl,
              duration: z(e.duration)
            }), Ct(() => {
              t.value = "";
            });
          }
        }
      });
      return function(b, M) {
        return T.apply(this, arguments);
      };
    }(), O = (T) => {
      Tn(() => y(T));
    };
    return ae(() => n.value, /* @__PURE__ */ Ut(function* () {
      yield On(), r.forEach((T) => {
        var {
          name: S,
          setOwnTop: b
        } = T;
        S.value && l.value.push(S.value), b();
      });
    })), Fe(/* @__PURE__ */ Ut(function* () {
      yield On(), i.value = Ia(o.value), i.value.addEventListener("scroll", g);
    })), Ni(() => {
      N(i.value.removeEventListener, "scroll", g);
    }), {
      n: om,
      classes: lm,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: O,
      anchorClick: y
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
function dm(e) {
  return ["text", "password", "number"].includes(e);
}
var vm = {
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
    validator: dm
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
  n: Yt,
  classes: fm
} = ne("input"), cm = ["id", "disabled", "type", "value", "maxlength", "rows"], mm = ["id", "disabled", "type", "value", "maxlength"], pm = ["for"];
function hm(e, n) {
  var r = te("var-icon"), a = te("var-form-details");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), B(
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
        )) : J("v-if", !0), e.textarea ? (h(), V(
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
          cm
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
          mm
        )), B(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: K({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          _(e.placeholder),
          15,
          pm
        )],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
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
        )) : J("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [B(
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
    )) : J("v-if", !0), ee(
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
  );
}
const pr = Q({
  render: hm,
  name: "VarInput",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: vm,
  setup(e) {
    var n = P("var-input-" + Ma().uid), r = P(null), a = P(!1), t = W(() => {
      var {
        maxlength: C,
        modelValue: $
      } = e;
      return C ? jn($) ? "0 / " + C : String($).length + "/" + C : "";
    }), {
      bindForm: i,
      form: o
    } = pn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = mn(), v = (C) => {
      Pe(() => {
        var {
          validateTrigger: $,
          rules: L,
          modelValue: Y
        } = e;
        s($, C, L, Y);
      });
    }, f = () => {
      var {
        hint: C,
        modelValue: $
      } = e;
      if (!C && !jn($))
        return Yt("--placeholder-hidden");
      if (C && (!jn($) || a.value))
        return Yt("--placeholder-hint");
    }, c = (C) => {
      a.value = !0, N(e.onFocus, C), v("onFocus");
    }, p = (C) => {
      a.value = !1, N(e.onBlur, C), v("onBlur");
    }, g = (C) => {
      var $ = C.target, {
        value: L
      } = $;
      L = b(S(L)), $.value = L, N(e["onUpdate:modelValue"], L), N(e.onInput, L, C), v("onInput");
    }, y = (C) => {
      var $ = C.target, {
        value: L
      } = $;
      L = b(S(L)), $.value = L, N(e.onChange, L, C), v("onChange");
    }, O = () => {
      var {
        disabled: C,
        readonly: $,
        clearable: L,
        onClear: Y
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || C || $ || !L || (N(e["onUpdate:modelValue"], ""), N(Y, ""), v("onClear"));
    }, T = (C) => {
      var {
        disabled: $,
        onClick: L
      } = e;
      o != null && o.disabled.value || $ || (N(L, C), v("onClick"));
    }, S = (C) => e.modelModifiers.trim ? C.trim() : C, b = (C) => e.maxlength ? C.slice(0, z(e.maxlength)) : C, M = (C) => {
      var {
        disabled: $,
        readonly: L
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || $ || L || C.stopPropagation();
    }, w = () => {
      N(e["onUpdate:modelValue"], ""), d();
    }, D = () => u(e.rules, e.modelValue), k = () => {
      var C;
      (C = r.value) == null || C.focus();
    }, A = () => {
      r.value.blur();
    }, I = {
      reset: w,
      validate: D,
      resetValidation: d
    };
    return N(i, I), Fe(() => {
      e.autofocus && k();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Yt,
      classes: fm,
      isEmpty: jn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: p,
      handleInput: g,
      handleChange: y,
      handleClear: O,
      handleClick: T,
      handleTouchstart: M,
      validate: D,
      resetValidation: d,
      reset: w,
      focus: k,
      blur: A
    };
  }
});
pr.install = function(e) {
  e.component(pr.name, pr);
};
function gm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ym(e) {
  return ["always", "hover", "none"].includes(e);
}
var bm = {
  type: {
    type: String,
    default: "default",
    validator: gm
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
    validator: ym
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
  onClick: {
    type: Function
  }
}, {
  n: wm,
  classes: Sm
} = ne("link");
function Cm(e, n) {
  return h(), me(
    Ea(e.tag),
    Ve(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: fe(() => [G(e.$slots, "default")]),
      _: 3
    },
    16,
    ["class", "style", "onClick"]
  );
}
const Zr = Q({
  render: Cm,
  name: "VarLink",
  props: bm,
  setup(e) {
    var n = W(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = W(() => {
      var {
        disabled: t,
        href: i,
        target: o,
        to: l,
        replace: s
      } = e;
      return t ? {} : i ? {
        href: i,
        target: o
      } : l ? {
        to: l,
        target: o,
        replace: s
      } : {};
    }), a = (t) => {
      var {
        disabled: i,
        onClick: o
      } = e;
      i || N(o, t);
    };
    return {
      n: wm,
      classes: Sm,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var km = {
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
function Lo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function $m(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Lo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Lo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Tm,
  classes: Om
} = ne("list");
function Vm(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [G(e.$slots, "default"), e.loading ? G(e.$slots, "loading", {
      key: 0
    }, () => [B(
      "div",
      {
        class: m(e.n("loading"))
      },
      [B(
        "div",
        {
          class: m(e.n("loading-text"))
        },
        _(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), ee(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : J("v-if", !0), e.finished ? G(e.$slots, "finished", {
      key: 1
    }, () => [B(
      "div",
      {
        class: m(e.n("finished"))
      },
      _(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : J("v-if", !0), e.error ? G(e.$slots, "error", {
      key: 2
    }, () => [ke((h(), V(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [he(
        _(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : J("v-if", !0), B(
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
const Jr = Q({
  render: Vm,
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: $n
  },
  props: km,
  setup(e) {
    var n = P(null), r = P(null), a, t = () => {
      N(e["onUpdate:error"], !1), N(e["onUpdate:loading"], !0), N(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - ze(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = $m(function* () {
        yield Pe();
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
      a = Ia(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), ar(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: wt,
      isNumber: je,
      load: t,
      check: o,
      n: Tm,
      classes: Om
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var Pm = {
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
  classes: Mm,
  n: Fo
} = ne("loading-bar");
const Em = Q({
  name: "VarLoadingBar",
  props: Pm,
  setup(e) {
    return () => ee("div", {
      class: Mm(Fo(), [e.error, Fo("--error")]),
      style: {
        zIndex: on.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: ye(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: ye(e.top)
      }
    }, null);
  }
});
var hs, Ro, tn = Ie({
  value: 0,
  opacity: 0,
  error: !1
}), Im = (e) => {
  Object.assign(tn, e);
}, gs = () => {
  hs = window.setTimeout(() => {
    if (!(tn.value >= 95)) {
      var e = Math.random();
      tn.value < 70 && (e = Math.round(5 * Math.random())), tn.value += e, gs();
    }
  }, 200);
}, Nm = () => {
  Ro || (Ro = !0, Na(Em, tn)), (!tn.error || tn.value === 100) && (tn.value = 0), setTimeout(() => {
    tn.opacity = 1;
  }, 200), gs();
}, Dm = () => {
  tn.value = 100, setTimeout(() => {
    tn.opacity = 0, setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, 300), window.clearTimeout(hs);
}, Bm = () => {
  tn.error = !0, Ua.start(), setTimeout(Ua.finish, 300);
}, Ua = {
  start: Nm,
  finish: Dm,
  error: Bm,
  mergeConfig: Im
}, Am = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function lt(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Am[n];
  });
}
var In = "top", rr = "bottom", wr = "right", xn = "left", It = "auto", Nt = [In, rr, wr, xn], Dt = "start", Ya = "end", zm = "clippingParents", ys = "viewport", Da = "popper", Lm = "reference", Uo = /* @__PURE__ */ Nt.reduce(function(e, n) {
  return e.concat([n + "-" + Dt, n + "-" + Ya]);
}, []), bs = /* @__PURE__ */ [].concat(Nt, [It]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Dt, n + "-" + Ya]);
}, []), Fm = "beforeRead", Rm = "read", Um = "afterRead", Ym = "beforeMain", Wm = "main", Hm = "afterMain", jm = "beforeWrite", Gm = "write", qm = "afterWrite", Si = [Fm, Rm, Um, Ym, Wm, Hm, jm, Gm, qm];
function Nn(e) {
  return e.split("-")[0];
}
var Km = {
  start: "end",
  end: "start"
};
function Yo(e) {
  return e.replace(/start|end/g, function(n) {
    return Km[n];
  });
}
function hn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Sr(e) {
  var n = hn(e).Element;
  return e instanceof n || e instanceof Element;
}
function dn(e) {
  var n = hn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Gi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = hn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function ir(e) {
  return ((Sr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var La = Math.max, Wo = Math.min, Oa = Math.round;
function Ci() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ws() {
  return !/^((?!chrome|android).)*safari/i.test(Ci());
}
function Va(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && dn(e) && (t = e.offsetWidth > 0 && Oa(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Oa(a.height) / e.offsetHeight || 1);
  var o = Sr(e) ? hn(e) : window, l = o.visualViewport, s = !ws() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
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
function qi(e) {
  var n = hn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Ki(e) {
  return Va(ir(e)).left + qi(e).scrollLeft;
}
function Xm(e, n) {
  var r = hn(e), a = ir(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = ws();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Ki(e),
    y: s
  };
}
function Sn(e) {
  return hn(e).getComputedStyle(e);
}
function Zm(e) {
  var n, r = ir(e), a = qi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = La(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = La(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Ki(e), s = -a.scrollTop;
  return Sn(t || r).direction === "rtl" && (l += La(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Pn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Bt(e) {
  return Pn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Gi(e) ? e.host : null) || ir(e);
}
function Xi(e) {
  var n = Sn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Ss(e) {
  return ["html", "body", "#document"].indexOf(Pn(e)) >= 0 ? e.ownerDocument.body : dn(e) && Xi(e) ? e : Ss(Bt(e));
}
function Fa(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Ss(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = hn(a), o = t ? [i].concat(i.visualViewport || [], Xi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Fa(Bt(o)));
}
function Jm(e) {
  return ["table", "td", "th"].indexOf(Pn(e)) >= 0;
}
function Ho(e) {
  return !dn(e) || Sn(e).position === "fixed" ? null : e.offsetParent;
}
function Qm(e) {
  var n = /firefox/i.test(Ci()), r = /Trident/i.test(Ci());
  if (r && dn(e)) {
    var a = Sn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Bt(e);
  for (Gi(t) && (t = t.host); dn(t) && ["html", "body"].indexOf(Pn(t)) < 0; ) {
    var i = Sn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Zi(e) {
  for (var n = hn(e), r = Ho(e); r && Jm(r) && Sn(r).position === "static"; )
    r = Ho(r);
  return r && (Pn(r) === "html" || Pn(r) === "body" && Sn(r).position === "static") ? n : r || Qm(e) || n;
}
function xm(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Gi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function ki(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function _m(e, n) {
  var r = Va(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function jo(e, n, r) {
  return n === ys ? ki(Xm(e, r)) : Sr(n) ? _m(n, r) : ki(Zm(ir(e)));
}
function ep(e) {
  var n = Fa(Bt(e)), r = ["absolute", "fixed"].indexOf(Sn(e).position) >= 0, a = r && dn(e) ? Zi(e) : e;
  return Sr(a) ? n.filter(function(t) {
    return Sr(t) && xm(t, a) && Pn(t) !== "body";
  }) : [];
}
function np(e, n, r, a) {
  var t = n === "clippingParents" ? ep(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = jo(e, u, a);
    return s.top = La(d.top, s.top), s.right = Wo(d.right, s.right), s.bottom = Wo(d.bottom, s.bottom), s.left = La(d.left, s.left), s;
  }, jo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Wa(e) {
  return e.split("-")[1];
}
function rp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Cs(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Nn(a) : null, i = a ? Wa(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case In:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case rr:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case wr:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case xn:
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
  var u = t ? rp(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Dt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ya:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ap() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function tp(e) {
  return Object.assign({}, ap(), e);
}
function ip(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function ks(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? zm : l, u = r.rootBoundary, d = u === void 0 ? ys : u, v = r.elementContext, f = v === void 0 ? Da : v, c = r.altBoundary, p = c === void 0 ? !1 : c, g = r.padding, y = g === void 0 ? 0 : g, O = tp(typeof y != "number" ? y : ip(y, Nt)), T = f === Da ? Lm : Da, S = e.rects.popper, b = e.elements[p ? T : f], M = np(Sr(b) ? b : b.contextElement || ir(e.elements.popper), s, d, o), w = Va(e.elements.reference), D = Cs({
    reference: w,
    element: S,
    strategy: "absolute",
    placement: t
  }), k = ki(Object.assign({}, S, D)), A = f === Da ? k : w, I = {
    top: M.top - A.top + O.top,
    bottom: A.bottom - M.bottom + O.bottom,
    left: M.left - A.left + O.left,
    right: A.right - M.right + O.right
  }, C = e.modifiersData.offset;
  if (f === Da && C) {
    var $ = C[t];
    Object.keys(I).forEach(function(L) {
      var Y = [wr, rr].indexOf(L) >= 0 ? 1 : -1, j = [In, rr].indexOf(L) >= 0 ? "y" : "x";
      I[L] += $[j] * Y;
    });
  }
  return I;
}
function op(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? bs : s, d = Wa(a), v = d ? l ? Uo : Uo.filter(function(p) {
    return Wa(p) === d;
  }) : Nt, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(p, g) {
    return p[g] = ks(e, {
      placement: g,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[Nn(g)], p;
  }, {});
  return Object.keys(c).sort(function(p, g) {
    return c[p] - c[g];
  });
}
function lp(e) {
  if (Nn(e) === It)
    return [];
  var n = lt(e);
  return [Yo(e), n, Yo(n)];
}
function sp(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, g = r.allowedAutoPlacements, y = n.options.placement, O = Nn(y), T = O === y, S = s || (T || !p ? [lt(y)] : lp(y)), b = [y].concat(S).reduce(function(ie, le) {
      return ie.concat(Nn(le) === It ? op(n, {
        placement: le,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: g
      }) : le);
    }, []), M = n.rects.reference, w = n.rects.popper, D = /* @__PURE__ */ new Map(), k = !0, A = b[0], I = 0; I < b.length; I++) {
      var C = b[I], $ = Nn(C), L = Wa(C) === Dt, Y = [In, rr].indexOf($) >= 0, j = Y ? "width" : "height", F = ks(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Z = Y ? L ? wr : xn : L ? rr : In;
      M[j] > w[j] && (Z = lt(Z));
      var H = lt(Z), X = [];
      if (i && X.push(F[$] <= 0), l && X.push(F[Z] <= 0, F[H] <= 0), X.every(function(ie) {
        return ie;
      })) {
        A = C, k = !1;
        break;
      }
      D.set(C, X);
    }
    if (k)
      for (var E = p ? 3 : 1, R = function(le) {
        var de = b.find(function(we) {
          var Re = D.get(we);
          if (Re)
            return Re.slice(0, le).every(function(Qe) {
              return Qe;
            });
        });
        if (de)
          return A = de, "break";
      }, U = E; U > 0; U--) {
        var x = R(U);
        if (x === "break")
          break;
      }
    n.placement !== A && (n.modifiersData[a]._skip = !0, n.placement = A, n.reset = !0);
  }
}
const up = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: sp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function dp(e, n, r) {
  var a = Nn(e), t = [xn, In].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [xn, wr].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function vp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = bs.reduce(function(d, v) {
    return d[v] = dp(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const fp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: vp
};
function cp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function mp(e) {
  return e === hn(e) || !dn(e) ? qi(e) : cp(e);
}
function pp(e) {
  var n = e.getBoundingClientRect(), r = Oa(n.width) / e.offsetWidth || 1, a = Oa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function hp(e, n, r) {
  r === void 0 && (r = !1);
  var a = dn(n), t = dn(n) && pp(n), i = ir(n), o = Va(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Pn(n) !== "body" || Xi(i)) && (l = mp(n)), dn(n) ? (s = Va(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Ki(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function gp(e) {
  var n = Va(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function yp(e) {
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
function bp(e) {
  var n = yp(e);
  return Si.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function wp(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Ln(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var or = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Sp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Go = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Cp(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Go).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Ln(or, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Ln(or, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Si.indexOf(n.phase) < 0 && console.error(Ln(or, n.name, '"phase"', "either " + Si.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Ln(or, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Ln(or, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Ln(or, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Ln(or, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Go.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Ln(Sp, String(n.name), a, a));
      });
    });
  });
}
function kp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function $p(e) {
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
var qo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Tp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Ko = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Xo() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Op(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Ko : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ko, i),
      modifiersData: {},
      elements: {
        reference: l,
        popper: s
      },
      attributes: {},
      styles: {}
    }, v = [], f = !1, c = {
      state: d,
      setOptions: function(O) {
        var T = typeof O == "function" ? O(d.options) : O;
        g(), d.options = Object.assign({}, i, d.options, T), d.scrollParents = {
          reference: Sr(l) ? Fa(l) : l.contextElement ? Fa(l.contextElement) : [],
          popper: Fa(s)
        };
        var S = bp($p([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var b = kp([].concat(S, d.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if (Cp(b), Nn(d.options.placement) === It) {
            var M = d.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var w = Sn(s), D = w.marginTop, k = w.marginRight, A = w.marginBottom, I = w.marginLeft;
          [D, k, A, I].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var O = d.elements, T = O.reference, S = O.popper;
          if (!Xo(T, S)) {
            process.env.NODE_ENV !== "production" && console.error(qo);
            return;
          }
          d.rects = {
            reference: hp(T, Zi(S), d.options.strategy === "fixed"),
            popper: gp(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var b = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (b += 1, b > 100)) {
              console.error(Tp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var w = d.orderedModifiers[M], D = w.fn, k = w.options, A = k === void 0 ? {} : k, I = w.name;
            typeof D == "function" && (d = D({
              state: d,
              options: A,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      update: wp(function() {
        return new Promise(function(y) {
          c.forceUpdate(), y(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!Xo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(qo), c;
    c.setOptions(u).then(function(y) {
      !f && u.onFirstUpdate && u.onFirstUpdate(y);
    });
    function p() {
      d.orderedModifiers.forEach(function(y) {
        var O = y.name, T = y.options, S = T === void 0 ? {} : T, b = y.effect;
        if (typeof b == "function") {
          var M = b({
            state: d,
            name: O,
            instance: c,
            options: S
          }), w = function() {
          };
          v.push(M || w);
        }
      });
    }
    function g() {
      v.forEach(function(y) {
        return y();
      }), v = [];
    }
    return c;
  };
}
var rt = {
  passive: !0
};
function Vp(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = hn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, rt);
  }), l && s.addEventListener("resize", r.update, rt), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, rt);
    }), l && s.removeEventListener("resize", r.update, rt);
  };
}
const Pp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Vp,
  data: {}
};
function Mp(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Cs({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Ep = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Mp,
  data: {}
};
var Ip = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Np(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Oa(n * t) / t || 0,
    y: Oa(r * t) / t || 0
  };
}
function Zo(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, p = o.y, g = p === void 0 ? 0 : p, y = typeof d == "function" ? d({
    x: c,
    y: g
  }) : {
    x: c,
    y: g
  };
  c = y.x, g = y.y;
  var O = o.hasOwnProperty("x"), T = o.hasOwnProperty("y"), S = xn, b = In, M = window;
  if (u) {
    var w = Zi(r), D = "clientHeight", k = "clientWidth";
    if (w === hn(r) && (w = ir(r), Sn(w).position !== "static" && l === "absolute" && (D = "scrollHeight", k = "scrollWidth")), w = w, t === In || (t === xn || t === wr) && i === Ya) {
      b = rr;
      var A = v && w === M && M.visualViewport ? M.visualViewport.height : w[D];
      g -= A - a.height, g *= s ? 1 : -1;
    }
    if (t === xn || (t === In || t === rr) && i === Ya) {
      S = wr;
      var I = v && w === M && M.visualViewport ? M.visualViewport.width : w[k];
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: l
  }, u && Ip), $ = d === !0 ? Np({
    x: c,
    y: g
  }) : {
    x: c,
    y: g
  };
  if (c = $.x, g = $.y, s) {
    var L;
    return Object.assign({}, C, (L = {}, L[b] = T ? "0" : "", L[S] = O ? "0" : "", L.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + g + "px)" : "translate3d(" + c + "px, " + g + "px, 0)", L));
  }
  return Object.assign({}, C, (n = {}, n[b] = T ? g + "px" : "", n[S] = O ? c + "px" : "", n.transform = "", n));
}
function Dp(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Sn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Nn(n.placement),
    variation: Wa(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Zo(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Zo(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Bp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Dp,
  data: {}
};
function Ap(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !dn(i) || !Pn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function zp(e) {
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
      !dn(t) || !Pn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Lp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ap,
  effect: zp,
  requires: ["computeStyles"]
};
var Fp = [Pp, Ep, Bp, Lp], Rp = /* @__PURE__ */ Op({
  defaultModifiers: Fp
});
function Up(e) {
  return ["click", "hover"].includes(e);
}
function Yp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Wp = {
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
    validator: Up
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Yp
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
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, gt.apply(this, arguments);
}
function Jo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Jo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Jo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Hp,
  classes: jp
} = ne("menu");
function Gp(e, n) {
  return h(), V(
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
    [G(e.$slots, "default"), (h(), me(
      Ga,
      {
        to: e.teleport
      },
      [ee(
        Le,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [ke(B(
            "div",
            {
              ref: "menu",
              style: K({
                zIndex: e.zIndex
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Dn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handleMenuMouseenter && e.handleMenuMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handleMenuMouseleave && e.handleMenuMouseleave(...arguments);
              })
            },
            [G(e.$slots, "menu")],
            38
          ), [[qa, e.show]])]),
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
const _n = Q({
  render: Gp,
  name: "VarMenu",
  props: Wp,
  setup(e) {
    var n = P(null), r = P(null), a = P(!1), {
      zIndex: t
    } = Xa(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: w,
        height: D
      } = window.getComputedStyle(n.value);
      u = {
        width: ze(w),
        height: ze(D)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, b());
    }, f = /* @__PURE__ */ function() {
      var w = Qo(function* () {
        e.trigger === "hover" && (s = !1, yield On(), !l && M());
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var w = Qo(function* () {
        e.trigger === "hover" && (l = !1, yield On(), !s && M());
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), g = () => {
      b(), o = !0;
    }, y = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, N(e["onUpdate:show"], !1);
    }, O = () => {
      d();
      var w = {
        x: ze(e.offsetX),
        y: ze(e.offsetY)
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
    }, T = () => {
      var {
        placement: w,
        skidding: D,
        distance: k
      } = O();
      return {
        placement: w,
        modifiers: [gt({}, up, {
          enabled: a.value
        }), gt({}, fp, {
          options: {
            offset: [D, k]
          }
        })]
      };
    }, S = () => {
      i.setOptions(T());
    }, b = () => {
      var {
        disabled: w
      } = e;
      w || (a.value = !0, N(e["onUpdate:show"], !0));
    }, M = () => {
      a.value = !1, N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (w) => {
      a.value = w != null ? w : !1;
    }, {
      immediate: !0
    }), ae(() => e.offsetX, S), ae(() => e.offsetY, S), ae(() => e.placement, S), ae(() => a.value, (w) => {
      w ? (S(), N(e.onOpen)) : N(e.onClose);
    }), ae(() => e.trigger, (w) => {
      w === "click" ? document.addEventListener("click", y) : document.removeEventListener("click", y);
    }), ae(() => e.disabled, M), Fe(() => {
      i = Rp(n.value, r.value, T()), e.trigger === "click" && document.addEventListener("click", y);
    }), ar(() => {
      document.removeEventListener("click", y), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: Hp,
      classes: jp,
      handleClick: g,
      handleMenuClose: y,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: c,
      handleMenuMouseleave: p,
      resize: S,
      open: b,
      close: M
    };
  }
});
_n.install = function(e) {
  e.component(_n.name, _n);
};
var $s = Symbol("SELECT_BIND_OPTION_KEY"), Ts = Symbol("SELECT_COUNT_OPTION_KEY");
function qp() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn($s), {
    length: r
  } = Cn(Ts);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Kp() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn($s), {
    index: r
  } = kn(Ts);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Xp = {
  label: {},
  value: {}
}, {
  n: Zp,
  classes: Jp
} = ne("option");
function Qp(e, n) {
  var r = te("var-checkbox"), a = Ge("ripple");
  return ke((h(), V(
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
    [B(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (h(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Dn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : J("v-if", !0), B(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [G(e.$slots, "default", {}, () => [he(
        _(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const Qr = Q({
  render: Qp,
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: dr
  },
  props: Xp,
  setup(e) {
    var n = P(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = Kp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), c = (g) => {
      n.value = g;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return ae([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: Zp,
      classes: Jp,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var xp = {
  show: {
    type: Boolean,
    default: !1
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  onClick: {
    type: Function
  },
  teleport: {
    type: String
  },
  "onUpdate:show": {
    type: Function
  }
};
function _p(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: xo
} = ne("overlay");
const xr = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: xp,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Xa(() => e.show, 1), {
      disabled: i
    } = Fi(), o = () => {
      N(e.onClick), N(e["onUpdate:show"], !1);
    };
    kt(() => e.show, () => e.lockScroll);
    var l = () => ee("div", Ve({
      class: xo(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: o
    }), [N(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return ee(Le, {
        name: xo("--fade")
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
        return ee(Ga, {
          to: u,
          disabled: i.value
        }, _p(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
var eh = {
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
  n: nh,
  classes: rh
} = ne("pagination"), ah = ["item-mode", "onClick"];
function th(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), i = te("var-menu"), o = Ge("ripple");
  return h(), V(
    "ul",
    {
      class: m(e.n())
    },
    [ke((h(), V(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [G(e.$slots, "prev", {}, () => [ee(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), V(
      "li",
      {
        key: 0,
        class: m(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        a,
        {
          modelValue: e.simpleValue,
          "onUpdate:modelValue": n[1] || (n[1] = (l) => e.simpleValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[2] || (n[2] = (l) => e.setPage("simple", e.simpleValue, l)),
          onKeydown: n[3] || (n[3] = eo((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), B("span", null, [he(
        " / " + _(e.pageCount) + " ",
        1
      ), B(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (h(!0), V(
      Oe,
      {
        key: 1
      },
      Ne(e.pageList, (l, s) => ke((h(), V(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [he(
          _(l),
          1
        )],
        10,
        ah
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), ke((h(), V(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [G(e.$slots, "next", {}, () => [ee(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), V(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [ee(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: fe(() => [(h(!0), V(
            Oe,
            null,
            Ne(e.sizeOption, (l, s) => ke((h(), me(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: fe(() => [he(
                  _(l) + _(e.pack.paginationItem) + " / " + _(e.pack.paginationPage),
                  1
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: fe(() => [B(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [B(
              "span",
              null,
              _(e.size) + _(e.pack.paginationItem) + " / " + _(e.pack.paginationPage),
              1
            ), ee(
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
    )) : J("v-if", !0), e.showQuickJumper && !e.simple ? (h(), V(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [he(
        _(e.pack.paginationJump) + " ",
        1
      ), ee(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = eo((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : J("v-if", !0), e.totalText ? (h(), V(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      _(e.totalText),
      3
    )) : J("v-if", !0)],
    2
  );
}
const _r = Q({
  render: th,
  name: "VarPagination",
  components: {
    VarMenu: _n,
    VarIcon: Te,
    VarCell: ur,
    VarInput: pr
  },
  directives: {
    Ripple: Ue
  },
  props: eh,
  setup(e) {
    var n = P(!1), r = P(""), a = P("1"), t = P(!1), i = P(!1), o = P(z(e.current) || 1), l = P(z(e.size) || 10), s = P([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(z(e.total) / z(l.value))), v = W(() => {
      var b = l.value * (o.value - 1) + 1, M = Math.min(l.value * o.value, z(e.total));
      return [b, M];
    }), f = W(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (b, M) => je(b) ? !1 : M === 1 ? t.value : i.value, p = (b, M) => je(b) ? "basic" : M === 1 ? "head" : "tail", g = (b, M) => {
      b === o.value || e.disabled || (je(b) ? o.value = b : b === "prev" ? o.value > 1 && (o.value -= 1) : b === "next" ? o.value < d.value && (o.value += 1) : b === "..." && (M === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, y = () => {
      e.disabled || (n.value = !0);
    }, O = (b) => {
      l.value = b, n.value = !1;
    }, T = (b) => {
      var M = /^[1-9][0-9]*$/;
      return M.test(b);
    }, S = (b, M, w) => {
      if (w.target.blur(), T(M)) {
        var D = z(M);
        D > d.value && (D = d.value, a.value = "" + D), D !== o.value && (o.value = D);
      }
      b === "quick" && (r.value = ""), b === "simple" && !T(M) && (a.value = "" + o.value);
    };
    return ae([() => e.current, () => e.size], (b) => {
      var [M, w] = b;
      o.value = z(M) || 1, l.value = z(w || 10);
    }), ae([o, l], (b, M) => {
      var w, D, [k, A] = b, [I, C] = M;
      if (k > d.value) {
        o.value = d.value;
        return;
      }
      var $ = [], {
        maxPagerCount: L,
        total: Y,
        onChange: j
      } = e, F = Math.ceil(z(Y) / z(C)), Z = d.value - (L - u.value) - 1;
      if (a.value = "" + k, d.value - 2 > L) {
        if (I === void 0 || d.value !== F)
          for (var H = 2; H < L + 2; H++)
            $.push(H);
        if (k <= L && k < Z) {
          $ = [];
          for (var X = 1; X < L + 1; X++)
            $.push(X + 1);
          t.value = !0, i.value = !1;
        }
        if (k > L && k < Z) {
          $ = [];
          for (var E = 1; E < L + 1; E++)
            $.push(k + E - u.value);
          t.value = k === 2 && L === 1, i.value = !1;
        }
        if (k >= Z) {
          $ = [];
          for (var R = 1; R < L + 1; R++)
            $.push(d.value - (L - R) - 1);
          t.value = !1, i.value = !0;
        }
        $ = [1, "...", ...$, "...", d.value];
      } else
        for (var U = 1; U <= d.value; U++)
          $.push(U);
      s.value = $, I !== void 0 && d.value > 0 && (j == null || j(k, A)), (w = e["onUpdate:current"]) == null || w.call(e, k), (D = e["onUpdate:size"]) == null || D.call(e, A);
    }, {
      immediate: !0
    }), {
      n: nh,
      classes: rh,
      pack: Ye,
      current: o,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: p,
      isHideEllipsis: c,
      clickItem: g,
      showMenu: y,
      clickSize: O,
      setPage: S,
      toNumber: z
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
function $i() {
  return $i = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, $i.apply(this, arguments);
}
var ih = $i({
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
}, _e(Ka, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: oh,
  classes: lh
} = ne("picker"), _o = 300, sh = 15, el = 0, uh = ["onTouchstart", "onTouchmove", "onTouchend"], dh = ["onTransitionend"];
function vh(e, n) {
  var r = te("var-button");
  return h(), me(
    Ea(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: fe(() => [B(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [B(
          "div",
          {
            class: m(e.n("toolbar"))
          },
          [G(e.$slots, "cancel", {}, () => [ee(
            r,
            {
              class: m(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: fe(() => [he(
                _(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), G(e.$slots, "title", {}, () => [B(
            "div",
            {
              class: m(e.n("title"))
            },
            _(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), G(e.$slots, "confirm", {}, () => [ee(
            r,
            {
              class: m(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: fe(() => [he(
                _(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
        ), B(
          "div",
          {
            class: m(e.n("columns")),
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), V(
            Oe,
            null,
            Ne(e.scrollColumns, (a) => (h(), V(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Dn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [B(
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
                [(h(!0), V(
                  Oe,
                  null,
                  Ne(a.column.texts, (t) => (h(), V(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: K({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [B(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      _(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                dh
              )],
              42,
              uh
            ))),
            128
          )), B(
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
          ), B(
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
const hr = Q({
  render: vh,
  name: "VarPicker",
  components: {
    VarButton: nn,
    VarPopup: bn
  },
  inheritAttrs: !1,
  props: ih,
  setup(e) {
    var n = P([]), r = W(() => ze(e.optionHeight)), a = W(() => ze(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = (C, $) => {
      $.scrollEl = C;
    }, s = (C) => {
      N(e["onUpdate:show"], C);
    }, u = (C) => {
      var $ = r.value + t.value, L = t.value - C.column.texts.length * r.value;
      C.translate >= $ && (C.translate = $), C.translate <= L && (C.translate = L);
    }, d = (C, $) => {
      var {
        length: L
      } = C.column.texts;
      return $ = $ >= L ? L - 1 : $, $ = $ <= 0 ? 0 : $, $;
    }, v = (C) => {
      var $ = Math.round((t.value - C.translate) / r.value);
      return d(C, $);
    }, f = () => {
      var C = n.value.map((L) => L.column.texts[L.index]), $ = n.value.map((L) => L.index);
      return {
        texts: C,
        indexes: $
      };
    }, c = function(C, $, L, Y) {
      Y === void 0 && (Y = !1);
      var j = t.value - d(C, $) * r.value;
      j === C.translate && (C.scrolling = !1, !Y && D(C)), C.translate = j, C.duration = L;
    }, p = (C, $, L) => {
      C.translate += Math.abs($ / L) / 3e-3 * ($ < 0 ? -1 : 1);
    }, g = (C, $) => {
      $.touching = !0, $.scrolling = !1, $.duration = 0, $.translate = Lt($.scrollEl);
    }, y = (C, $) => {
      if (!!$.touching) {
        var {
          clientY: L
        } = C.touches[0], Y = $.prevY !== void 0 ? L - $.prevY : 0;
        $.prevY = L, $.translate += Y, u($);
        var j = performance.now();
        j - $.momentumTime > _o && ($.momentumTime = j, $.momentumPrevY = $.translate);
      }
    }, O = (C, $) => {
      $.touching = !1, $.scrolling = !0, $.prevY = void 0;
      var L = $.translate - $.momentumPrevY, Y = performance.now() - $.momentumTime, j = Math.abs(L) >= sh && Y <= _o;
      j && p($, L, Y), $.index = v($), c($, $.index, j ? 1e3 : 200);
    }, T = (C) => {
      C.scrolling = !1, D(C);
    }, S = (C) => C.map(($, L) => {
      var Y, j = Ce($) ? {
        texts: $
      } : $, F = {
        id: el++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (Y = j.initialIndex) != null ? Y : 0,
        columnIndex: L,
        duration: 0,
        momentumTime: 0,
        column: j,
        scrollEl: null,
        scrolling: !1
      };
      return c(F, F.index, 0, !0), F;
    }), b = (C) => {
      var $ = [];
      return M($, C, 0, !0), $;
    }, M = function(C, $, L, Y) {
      if (Y === void 0 && (Y = !1), Ce($) && $.length) {
        var j, F = Y && (j = e.cascadeInitialIndexes[C.length]) != null ? j : 0, Z = {
          id: el++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: F,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: $.map((H) => H[e.textKey])
          },
          columns: $,
          scrollEl: null,
          scrolling: !1
        };
        C.push(Z), c(Z, Z.index, 0, !0), M(C, Z.columns[Z.index].children, L + 1, Y);
      }
    }, w = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), M(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, D = (C) => {
      var {
        cascade: $,
        onChange: L
      } = e;
      $ && w(C);
      var Y = n.value.some((H) => H.scrolling);
      if (!Y) {
        var {
          texts: j,
          indexes: F
        } = f(), Z = F.every((H, X) => H === o[X]);
        Z || (o = [...F], N(L, j, F));
      }
    }, k = () => {
      if (e.cascade) {
        var C = n.value.find(($) => $.scrolling);
        C && (C.translate = Lt(C.scrollEl), C.index = v(C), c(C, C.index, 0, !0), C.scrolling = !1, w(C));
      } else
        n.value.forEach(($) => {
          $.translate = Lt($.scrollEl), $.index = v($), c($, $.index, 0);
        });
    }, A = () => {
      k();
      var {
        texts: C,
        indexes: $
      } = f();
      o = [...$], N(e.onConfirm, C, $);
    }, I = () => {
      k();
      var {
        texts: C,
        indexes: $
      } = f();
      o = [...$], N(e.onCancel, C, $);
    };
    return ae(() => e.columns, (C) => {
      n.value = e.cascade ? b(no(C)) : S(no(C));
      var {
        indexes: $
      } = f();
      o = [...$];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: oh,
      classes: lh,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Le,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: g,
      handleTouchmove: y,
      handleTouchend: O,
      handleTransitionend: T,
      confirm: A,
      cancel: I,
      dt: wt
    };
  }
});
var xe;
function Cr(e) {
  return new Promise((n) => {
    Cr.close();
    var r = Ce(e) ? {
      columns: e
    } : e, a = Ie(r);
    a.dynamic = !0, a.teleport = "body", xe = a;
    var {
      unmountInstance: t
    } = Na(hr, a, {
      onConfirm: (i, o) => {
        a.onConfirm == null || a.onConfirm(i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, xe === a && (xe = null);
      },
      onCancel: (i, o) => {
        a.onCancel == null || a.onCancel(i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, xe === a && (xe = null);
      },
      onClose: () => {
        a.onClose == null || a.onClose(), n({
          state: "close"
        }), xe === a && (xe = null);
      },
      onClosed: () => {
        a.onClosed == null || a.onClosed(), t(), xe === a && (xe = null);
      },
      onRouteChange: () => {
        t(), xe === a && (xe = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  });
}
hr.install = function(e) {
  e.component(hr.name, hr);
};
Cr.Component = hr;
Cr.install = function(e) {
  e.component(hr.name, hr);
};
Cr.close = () => {
  if (xe != null) {
    var e = xe;
    xe = null, Pe().then(() => {
      e.show = !1;
    });
  }
};
function fh(e) {
  return ["linear", "circle"].includes(e);
}
var ch = {
  mode: {
    type: String,
    default: "linear",
    validator: fh
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
  n: mh,
  classes: ph
} = ne("progress"), hh = ["viewBox"], gh = ["cx", "cy", "r", "stroke-width"], yh = ["cx", "cy", "r", "stroke-width"];
function bh(e, n) {
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
      [B(
        "div",
        {
          class: m(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), V(
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
        )) : J("v-if", !0), B(
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
      ), e.label ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.linearProps.roundValue),
          1
        )])],
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.mode === "circle" ? (h(), V(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), V(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
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
            style: K({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          gh
        )) : J("v-if", !0), B(
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
          yh
        )],
        14,
        hh
      )), e.label ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.circleProps.roundValue),
          1
        )])],
        2
      )) : J("v-if", !0)],
      6
    )) : J("v-if", !0)],
    2
  );
}
const ea = Q({
  render: bh,
  name: "VarProgress",
  props: ch,
  setup(e) {
    var n = W(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = W(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + ze(a) + " " + ze(a), l = z(i) > 100 ? 100 : Math.round(z(i)), s = (ze(a) - ze(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: mh,
      classes: ph,
      toSizeUnit: ye,
      multiplySizeUnit: Ze,
      linearProps: n,
      circleProps: r
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var wh = {
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
function nl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Sh(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        nl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        nl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Ch,
  classes: kh
} = ne("pull-refresh"), rl = 150;
function $h(e, n) {
  var r = te("var-icon");
  return h(), V(
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
    [B(
      "div",
      {
        ref: "controlNode",
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: K(e.controlStyle)
      },
      [ee(
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
    ), G(e.$slots, "default")],
    34
  );
}
const na = Q({
  render: $h,
  name: "VarPullRefresh",
  components: {
    VarIcon: Te
  },
  props: wh,
  setup(e) {
    var n, r, a = P(0), t = P(null), i = P(null), o = P(0), l = P(-999), s = P("arrow-down"), u = P("default"), d = P(!1), v = P(!0), f = W(() => u.value !== "loading" && u.value !== "success" && !e.disabled), c = W(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: g.value ? e.successBgColor : e.bgColor,
      color: g.value ? e.successColor : e.color
    })), p = W(() => Math.abs(2 * a.value)), g = W(() => u.value === "success"), y = () => new Promise((w) => {
      window.setTimeout(() => {
        v.value = !0, w();
      }, rl);
    }), O = (w) => {
      !f.value || (u.value = "pulling", o.value = w.touches[0].clientY);
    }, T = (w) => {
      var D = St(n);
      if (!(D > 0 || !f.value)) {
        D === 0 && l.value > a.value && w.cancelable && w.preventDefault();
        var k = (w.touches[0].clientY - o.value) / 2 + a.value;
        l.value = k >= p.value ? p.value : k, l.value >= p.value * 0.2 ? (v.value = !1, s.value = "refresh", r = y()) : s.value = "arrow-down";
      }
    }, S = /* @__PURE__ */ function() {
      var w = Sh(function* () {
        if (!!f.value)
          if (d.value = !0, l.value >= p.value * 0.2) {
            var D;
            yield r, u.value = "loading", l.value = p.value * 0.3, (D = e["onUpdate:modelValue"]) == null || D.call(e, !0), e.onRefresh == null || e.onRefresh();
          } else
            u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
              d.value = !1;
            }, z(e.animationDuration));
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), b = () => {
      var {
        width: w
      } = i.value.getBoundingClientRect();
      l.value = -(w + w * 0.25), a.value = -(w + w * 0.25);
    }, M = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return ae(() => e.modelValue, (w) => {
      w === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, M();
      }, z(e.successDuration)));
    }), Fe(() => {
      n = Ia(t.value), b();
    }), {
      n: Ch,
      classes: kh,
      iconHasChanged: v,
      ICON_TRANSITION: rl,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: O,
      touchMove: T,
      touchEnd: S,
      iconName: s,
      controlStyle: c,
      isSuccess: g
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
var Th = {
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
}, Os = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Vs = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Oh() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Os), {
    length: r
  } = Cn(Vs);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Vh() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(Os), {
    index: r
  } = kn(Vs);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Ph,
  classes: Mh
} = ne("radio");
function Eh(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((h(), V(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: K({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [ee(
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
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ee(
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
      }]]), B(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
        2
      )],
      16
    ), ee(
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
const ra = Q({
  render: Eh,
  name: "VarRadio",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: Th,
  setup(e) {
    var n = P(!1), r = W(() => n.value === e.checkedValue), a = P(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Vh(), {
      form: o,
      bindForm: l
    } = pn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = mn(), f = (b) => {
      Pe(() => {
        var {
          validateTrigger: M,
          rules: w,
          modelValue: D
        } = e;
        u(M, b, w, D);
      });
    }, c = (b) => {
      var {
        checkedValue: M,
        onChange: w
      } = e;
      t && n.value === M || (n.value = b, N(e["onUpdate:modelValue"], n.value), N(w, n.value), t == null || t.onToggle(M), f("onChange"));
    }, p = (b) => {
      var {
        disabled: M,
        readonly: w,
        uncheckedValue: D,
        checkedValue: k,
        onClick: A
      } = e;
      o != null && o.disabled.value || M || (N(A, b), !(o != null && o.readonly.value || w) && (a.value = !0, c(r.value ? D : k)));
    }, g = (b) => {
      var {
        checkedValue: M,
        uncheckedValue: w
      } = e;
      n.value = b === M ? M : w;
    }, y = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, O = () => d(e.rules, e.modelValue), T = (b) => {
      var {
        uncheckedValue: M,
        checkedValue: w
      } = e, D = ![M, w].includes(b);
      D && (b = r.value ? M : w), c(b);
    };
    ae(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var S = {
      sync: g,
      validate: O,
      resetValidation: v,
      reset: y
    };
    return N(i, S), N(l, S), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Ph,
      classes: Mh,
      handleClick: p,
      toggle: T,
      reset: y,
      validate: O,
      resetValidation: v
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
function Ih(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Nh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Ih
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
  n: Dh,
  classes: Bh
} = ne("radio-group");
function Ah(e, n) {
  var r = te("var-form-details");
  return h(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
      2
    ), ee(
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
const aa = Q({
  render: Ah,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: Nh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Oh(), {
      bindForm: t
    } = pn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = mn(), u = W(() => i.value), d = (y) => {
      Pe(() => {
        var {
          validateTrigger: O,
          rules: T,
          modelValue: S
        } = e;
        o(O, y, T, S);
      });
    }, v = () => r.forEach((y) => {
      var {
        sync: O
      } = y;
      return O(e.modelValue);
    }), f = (y) => {
      N(e["onUpdate:modelValue"], y), N(e.onChange, y), d("onChange");
    }, c = () => l(e.rules, e.modelValue), p = () => {
      N(e["onUpdate:modelValue"], void 0), s();
    };
    ae(() => e.modelValue, v), ae(() => n.value, v);
    var g = {
      onToggle: f,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return N(t, g), a(g), {
      errorMessage: i,
      n: Dh,
      classes: Bh,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
var zh = {
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
  n: Ba
} = ne("rate"), Lh = ["onClick"];
function Fh(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.n())
      },
      [(h(!0), V(
        Oe,
        null,
        Ne(e.toNumber(e.count), (i) => ke((h(), V(
          "div",
          {
            key: i,
            style: K(e.getStyle(i)),
            class: m(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [ee(
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
          Lh
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
      ))],
      2
    ), ee(
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
const ta = Q({
  render: Fh,
  name: "VarRate",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: zh,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = mn(), l = (y) => {
      var {
        count: O,
        gap: T
      } = e;
      return {
        color: u(y).color,
        marginRight: y !== z(O) ? ye(T) : 0
      };
    }, s = (y) => {
      var {
        name: O,
        color: T
      } = u(y);
      return {
        [Ba("content")]: !0,
        [Ba("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ba("--error")]: a.value,
        [Ba("--primary")]: O !== e.emptyIcon && !T
      };
    }, u = (y) => {
      var {
        modelValue: O,
        disabled: T,
        disabledColor: S,
        color: b,
        half: M,
        emptyColor: w,
        icon: D,
        halfIcon: k,
        emptyIcon: A
      } = e, I = b;
      return (T || n != null && n.disabled.value) && (I = S), y <= z(O) ? {
        color: I,
        name: D
      } : M && y <= z(O) + 0.5 ? {
        color: I,
        name: k
      } : {
        color: T || n != null && n.disabled.value ? S : w,
        name: A
      };
    }, d = (y, O) => {
      if (e.half) {
        var {
          offsetWidth: T
        } = O.target;
        O.offsetX <= Math.floor(T / 2) && (y -= 0.5);
      }
      N(e["onUpdate:modelValue"], y);
    }, v = () => i(e.rules, z(e.modelValue)), f = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (y, O) => {
      var {
        readonly: T,
        disabled: S,
        onChange: b
      } = e;
      T || S || n != null && n.disabled.value || n != null && n.readonly.value || (d(y, O), N(b, y), f());
    }, p = () => {
      N(e["onUpdate:modelValue"], 0), o();
    }, g = {
      reset: p,
      validate: v,
      resetValidation: o
    };
    return N(r, g), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: p,
      validate: v,
      resetValidation: o,
      toSizeUnit: ye,
      toNumber: z,
      n: Ba
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
function Rh(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Uh = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Rh
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
}, Yh = (e) => (kr(""), e = e(), $r(), e), Wh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Hh = /* @__PURE__ */ Yh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), jh = [Hh];
function Gh(e, n) {
  return h(), V("svg", Wh, jh);
}
const qh = Q({
  render: Gh
});
var Kh = (e) => (kr(""), e = e(), $r(), e), Xh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Zh = /* @__PURE__ */ Kh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), Jh = [Zh];
function Qh(e, n) {
  return h(), V("svg", Xh, Jh);
}
const xh = Q({
  render: Qh
});
var _h = (e) => (kr(""), e = e(), $r(), e), eg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, ng = /* @__PURE__ */ _h(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), rg = [ng];
function ag(e, n) {
  return h(), V("svg", eg, rg);
}
const tg = Q({
  render: ag
});
var {
  n: ig,
  classes: og
} = ne("result");
function lg(e, n) {
  return h(), V(
    Oe,
    null,
    [B(
      "span",
      {
        class: m(e.n("success-cover-left"))
      },
      null,
      2
    ), B(
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
    ), B(
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
    ), B(
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
    ), B(
      "span",
      {
        class: m(e.n("success-line-fix"))
      },
      null,
      2
    ), B(
      "span",
      {
        class: m(e.n("success-cover-right")),
        style: K({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
    )],
    64
  );
}
const sg = Q({
  render: lg,
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
      n: ig,
      classes: og,
      toNumber: z
    };
  }
});
var ug = (e) => (kr(""), e = e(), $r(), e), dg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, vg = /* @__PURE__ */ ug(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), fg = [vg];
function cg(e, n) {
  return h(), V("svg", dg, fg);
}
const mg = Q({
  render: cg
});
var pg = (e) => (kr(""), e = e(), $r(), e), hg = {
  viewBox: "-4 -4 32 32"
}, gg = /* @__PURE__ */ pg(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), yg = [gg];
function bg(e, n) {
  return h(), V("svg", hg, yg);
}
const wg = Q({
  render: bg
});
var {
  n: Sg,
  classes: Cg
} = ne("result");
function kg(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [G(e.$slots, "image", {}, () => [e.type ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: K({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), me(
          Ea(e.type),
          {
            "border-size": e.borderSize,
            animation: e.animation
          },
          null,
          8,
          ["border-size", "animation"]
        ))],
        6
      )],
      2
    )) : J("v-if", !0)]), G(e.$slots, "title", {}, () => [e.title ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      _(e.title),
      3
    )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      _(e.description),
      3
    )) : J("v-if", !0)]), e.$slots.footer ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const ia = Q({
  render: kg,
  name: "VarResult",
  components: {
    Info: qh,
    Success: sg,
    Warning: tg,
    Error: xh,
    Question: mg,
    Empty: wg
  },
  props: Uh,
  setup(e) {
    var n = W(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = W(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? ye(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: Sg,
      classes: Cg,
      toNumber: z,
      toPxNum: ze,
      toSizeUnit: ye,
      circleSize: n,
      borderSize: r
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
function $g(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function Tg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var Og = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: $g
  },
  align: {
    type: String,
    default: "flex-start",
    validator: Tg
  },
  onClick: {
    type: Function
  }
}, {
  n: Vg,
  classes: Pg
} = ne("row");
function Mg(e, n) {
  return h(), V(
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
    [G(e.$slots, "default")],
    6
  );
}
const oa = Q({
  render: Mg,
  name: "VarRow",
  props: Og,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = iv(), t = W(() => {
      var l = ze(e.gutter);
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
    return ae(() => a.value, i), ae(() => e.gutter, i), r(o), {
      n: Vg,
      classes: Pg,
      average: t
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function Eg(e) {
  return ["left", "right", "center"].includes(e);
}
var Ig = {
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
    validator: Eg
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
  n: Wt,
  classes: Ng
} = ne("select"), Dg = {
  key: 0
}, Bg = {
  key: 1
};
function Ag(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-menu"), i = te("var-form-details");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [ee(
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
            menu: fe(() => [B(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [G(e.$slots, "default")],
              2
            )]),
            default: fe(() => [B(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (h(), V("div", Dg, [e.chip ? (h(), V(
                "div",
                {
                  key: 0,
                  class: m(e.n("chips"))
                },
                [(h(!0), V(
                  Oe,
                  null,
                  Ne(e.labels, (o) => (h(), me(
                    r,
                    {
                      class: m(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Dn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: fe(() => [he(
                        _(o),
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
              )) : (h(), V(
                "div",
                {
                  key: 1,
                  class: m(e.n("values"))
                },
                _(e.labels.join(e.separator)),
                3
              ))])) : (h(), V(
                "span",
                Bg,
                _(e.label),
                1
              )), G(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [ee(
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
            ), B(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: K({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              _(e.placeholder),
              7
            )]),
            _: 3
          },
          8,
          ["class", "offset-y", "disabled", "show", "onClose"]
        )],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
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
        )) : J("v-if", !0)])],
        2
      )],
      6
    ), e.line ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [B(
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
    )) : J("v-if", !0), ee(
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
const la = Q({
  render: Ag,
  name: "VarSelect",
  components: {
    VarIcon: Te,
    VarMenu: _n,
    VarChip: vr,
    VarFormDetails: He
  },
  props: Ig,
  setup(e) {
    var n = P(null), r = P(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = P(""), o = P([]), l = P("0px"), s = P(0), {
      bindForm: u,
      form: d
    } = pn(), {
      length: v,
      options: f,
      bindOptions: c
    } = qp(), {
      errorMessage: p,
      validateWithTrigger: g,
      validate: y,
      resetValidation: O
    } = mn(), T = P(null), S = () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R) {
        var x = U;
        o.value = x.map(w);
      }
      !R && !jn(U) && (i.value = w(U)), !R && jn(U) && (i.value = "");
    }, b = (R) => {
      Pe(() => {
        var {
          validateTrigger: U,
          rules: x,
          modelValue: ie
        } = e;
        g(U, R, x, ie);
      });
    }, M = (R) => {
      var {
        value: U,
        label: x
      } = R;
      return U.value != null ? U.value : x.value;
    }, w = (R) => {
      var U, x, ie = f.find((le) => {
        var {
          value: de
        } = le;
        return de.value === R;
      });
      return ie || (ie = f.find((le) => {
        var {
          label: de
        } = le;
        return de.value === R;
      })), (U = (x = ie) == null ? void 0 : x.label.value) != null ? U : "";
    }, D = () => {
      var {
        hint: R,
        modelValue: U
      } = e;
      if (!R && !jn(U))
        return Wt("--placeholder-hidden");
      if (R && (!jn(U) || r.value))
        return Wt("--placeholder-hint");
    }, k = () => n.value && window.getComputedStyle(n.value).width || "0px", A = () => {
      var {
        disabled: R,
        readonly: U,
        onFocus: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || R || U || (l.value = k(), s.value = ze(e.offsetY), r.value = !0, N(x), b("onFocus"));
    }, I = () => {
      var {
        disabled: R,
        readonly: U,
        onBlur: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || R || U || (N(x), b("onBlur"));
    }, C = (R) => {
      var {
        disabled: U,
        readonly: x,
        multiple: ie,
        onChange: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || x)) {
        var de = ie ? f.filter((we) => {
          var {
            selected: Re
          } = we;
          return Re.value;
        }).map(M) : M(R);
        N(e["onUpdate:modelValue"], de), N(le, de), b("onChange"), !ie && (r.value = !1);
      }
    }, $ = () => {
      var {
        disabled: R,
        readonly: U,
        multiple: x,
        clearable: ie,
        onClear: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || R || U || !ie)) {
        var de = x ? [] : void 0;
        N(e["onUpdate:modelValue"], de), N(le, de), b("onClear");
      }
    }, L = (R) => {
      var {
        disabled: U,
        onClick: x
      } = e;
      d != null && d.disabled.value || U || (N(x, R), b("onClick"));
    }, Y = (R) => {
      var {
        disabled: U,
        readonly: x,
        modelValue: ie,
        onClose: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || x)) {
        var de = ie, we = f.find((Qe) => {
          var {
            label: Me
          } = Qe;
          return Me.value === R;
        }), Re = de.filter((Qe) => {
          var Me;
          return Qe !== ((Me = we.value.value) != null ? Me : we.label.value);
        });
        N(e["onUpdate:modelValue"], Re), N(le, Re), b("onClose");
      }
    }, j = () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R) {
        var x = U;
        f.forEach((ie) => ie.sync(x.includes(M(ie))));
      } else
        f.forEach((ie) => ie.sync(U === M(ie)));
      S();
    }, F = () => {
      l.value = k(), s.value = ze(e.offsetY), r.value = !0;
    }, Z = () => {
      r.value = !1;
    }, H = () => y(e.rules, e.modelValue), X = () => {
      N(e["onUpdate:modelValue"], e.multiple ? [] : void 0), O();
    };
    ae(() => e.multiple, () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R && !Ce(U))
        throw Error("The modelValue must be an array when multiple is true");
    }), ae(() => e.modelValue, j, {
      deep: !0
    }), ae(() => v.value, j);
    var E = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: C,
      reset: X,
      validate: H,
      resetValidation: O
    };
    return c(E), N(u, E), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: T,
      n: Wt,
      classes: Ng,
      computePlaceholderState: D,
      handleFocus: A,
      handleBlur: I,
      handleClear: $,
      handleClick: L,
      handleClose: Y,
      reset: X,
      validate: H,
      resetValidation: O,
      focus: F,
      blur: Z
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var zg = {
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
  n: Lg,
  classes: Fg
} = ne("skeleton");
function Rg(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? J("v-if", !0) : (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [G(e.$slots, "default")],
      2
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
          style: K({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [B(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : J("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), V(
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
            style: K({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [B(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : J("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), V(
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
              style: K({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [B(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : J("v-if", !0), (h(!0), V(
            Oe,
            null,
            Ne(e.toNumber(e.rows), (r, a) => (h(), V(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: K({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [B(
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
        )) : J("v-if", !0)],
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.loading && e.fullscreen ? (h(), V(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: K({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [B(
        "div",
        {
          class: m(e.n("--animation"))
        },
        null,
        2
      )],
      6
    )) : J("v-if", !0)],
    2
  );
}
const sa = Q({
  render: Rg,
  name: "VarSkeleton",
  props: zg,
  setup() {
    return {
      n: Lg,
      classes: Fg,
      toSizeUnit: ye,
      toNumber: z
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
function Ug(e) {
  return ["always", "normal", "never"].includes(e);
}
var Yg = {
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
    validator: Ug
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
  n: al,
  classes: Wg
} = ne("slider"), Ee;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ee || (Ee = {}));
var Hg = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function jg(e, n) {
  var r = te("var-form-details");
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [B(
        "div",
        {
          class: m(e.n("track"))
        },
        [B(
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
        ), B(
          "div",
          {
            class: m(e.n("track-fill")),
            style: K(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (h(!0), V(
        Oe,
        null,
        Ne(e.thumbList, (a) => (h(), V(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: K({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Dn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Dn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [G(e.$slots, "button", {
            currentValue: a.text
          }, () => [B(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), B(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), B(
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
            [B(
              "span",
              null,
              _(a.text),
              1
            )],
            6
          )])],
          46,
          Hg
        ))),
        128
      ))],
      2
    ), ee(
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
const ua = Q({
  render: jg,
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: Yg,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = mn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = P(null), v = P(0), f = P(!1), c = Ie({
      [Ee.First]: s(),
      [Ee.Second]: s()
    }), p = W(() => z(e.max) - z(e.min)), g = W(() => v.value / p.value * z(e.step)), y = W(() => {
      var {
        modelValue: H,
        range: X
      } = e, E = [];
      return X && Ce(H) ? E = [{
        value: M(H[0]),
        enumValue: Ee.First,
        text: w(H[0])
      }, {
        value: M(H[1]),
        enumValue: Ee.Second,
        text: w(H[1])
      }] : je(H) && (E = [{
        value: M(H),
        enumValue: Ee.First,
        text: w(H)
      }]), E;
    }), O = W(() => {
      var {
        activeColor: H,
        range: X,
        modelValue: E
      } = e, R = X && Ce(E) ? M(Math.min(E[0], E[1])) : 0, U = X && Ce(E) ? M(Math.max(E[0], E[1])) - R : M(E);
      return {
        width: U + "%",
        left: R + "%",
        background: H
      };
    }), T = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), S = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), b = (H) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[H].active, M = (H) => {
      var {
        min: X,
        max: E
      } = e;
      return H < z(X) ? 0 : H > z(E) ? 100 : (H - z(X)) / p.value * 100;
    }, w = (H) => {
      if (!je(H))
        return 0;
      var X = H;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var E = parseInt("" + X, 10) === X;
      return E ? X : z(X.toPrecision(5));
    }, D = (H, X) => {
      var E = [], {
        step: R,
        range: U,
        modelValue: x,
        onChange: ie,
        min: le
      } = e, de = z(R), we = Math.round(H / g.value), Re = we * de + z(le), Qe = c[X].percentValue * de + z(le);
      if (c[X].percentValue = we, U && Ce(x) && (E = X === Ee.First ? [Re, x[1]] : [x[0], Re]), Qe !== Re) {
        var Me = U ? E.map((ln) => w(ln)) : w(Re);
        N(ie, Me), N(e["onUpdate:modelValue"], Me), u();
      }
    }, k = (H) => {
      if (!e.range)
        return Ee.First;
      var X = c[Ee.First].percentValue * g.value, E = c[Ee.Second].percentValue * g.value, R = Math.abs(H - X), U = Math.abs(H - E);
      return R <= U ? Ee.First : Ee.Second;
    }, A = (H, X) => {
      v.value || (v.value = d.value.offsetWidth), !(T.value || S.value) && (N(e.onStart), f.value = !0, c[X].startPosition = H.touches[0].clientX);
    }, I = (H, X) => {
      if (!(T.value || S.value || !f.value)) {
        var E = H.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, E <= 0 ? E = 0 : E >= v.value && (E = v.value), D(E, X);
      }
    }, C = (H) => {
      var {
        range: X,
        modelValue: E,
        onEnd: R,
        step: U,
        min: x
      } = e;
      if (!(T.value || S.value)) {
        var ie = [];
        c[H].currentLeft = c[H].percentValue * g.value, c[H].active = !1;
        var le = c[H].percentValue * z(U) + z(x);
        X && Ce(E) && (ie = H === Ee.First ? [le, E[1]] : [E[0], le]), N(R, X ? ie : le), f.value = !1;
      }
    }, $ = (H) => {
      if (!(T.value || S.value) && !H.target.closest("." + al("thumb"))) {
        var X = H.clientX - au(H.currentTarget), E = k(X);
        D(X, E), C(E);
      }
    }, L = () => {
      var H = z(e.step);
      return isNaN(H) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : H < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: H,
        modelValue: X
      } = e;
      return H && !Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !H && Ce(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : H && Ce(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, j = function(H, X) {
      H === void 0 && (H = e.modelValue), X === void 0 && (X = z(e.step));
      var E = (R) => {
        var {
          min: U,
          max: x
        } = e;
        return R < z(U) ? 0 : R > z(x) ? p.value / X : (R - z(U)) / X;
      };
      e.range && Ce(H) ? (c[Ee.First].percentValue = E(H[0]), c[Ee.First].currentLeft = c[Ee.First].percentValue * g.value, c[Ee.Second].percentValue = E(H[1]), c[Ee.Second].currentLeft = c[Ee.Second].percentValue * g.value) : je(H) && (c[Ee.First].currentLeft = E(H) * g.value);
    }, F = () => {
      var H = e.range ? [0, 0] : 0;
      N(e["onUpdate:modelValue"], H), o();
    }, Z = {
      reset: F,
      validate: l,
      resetValidation: o
    };
    return N(n, Z), ae([() => e.modelValue, () => e.step], (H) => {
      var [X, E] = H;
      !L() || !Y() || f.value || j(X, z(E));
    }), ae(v, () => j()), Fe(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: al,
      classes: Wg,
      Thumbs: Ee,
      sliderEl: d,
      getFillStyle: O,
      isDisabled: T,
      errorMessage: a,
      thumbsProps: c,
      thumbList: y,
      multiplySizeUnit: Ze,
      toNumber: z,
      showLabel: b,
      start: A,
      move: I,
      end: C,
      click: $
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
function Ti() {
  return Ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ti.apply(this, arguments);
}
function Gg(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function qg(e) {
  return Ji.includes(e);
}
var Ps = {
  type: {
    type: String,
    validator: qg
  },
  position: {
    type: String,
    default: "top",
    validator: Gg
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
  loadingType: _e(Gn, "type"),
  loadingSize: _e(Gn, "size"),
  loadingRadius: _e(Gn, "radius"),
  loadingColor: Ti({}, _e(Gn, "color"), {
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
  n: Kg,
  classes: Xg
} = ne("snackbar"), Zg = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Jg(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return ke((h(), V(
    "div",
    {
      class: m(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [B(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [G(e.$slots, "default", {}, () => [he(
          _(e.content),
          1
        )])],
        2
      ), B(
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
        )) : J("v-if", !0), e.type === "loading" ? (h(), me(
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
        )) : J("v-if", !0), G(e.$slots, "action")],
        2
      )],
      6
    )],
    6
  )), [[qa, e.show]]);
}
const Ms = Q({
  render: Jg,
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: Te
  },
  props: Ps,
  setup(e) {
    var n = P(null), {
      zIndex: r
    } = Xa(() => e.show, 1);
    kt(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? Zg[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        var o;
        e.type !== "loading" && ((o = e["onUpdate:show"]) == null || o.call(e, !1));
      }, e.duration);
    };
    return ae(() => e.show, (o) => {
      o ? (e.onOpen == null || e.onOpen(), i()) : o === !1 && (clearTimeout(n.value), e.onClose == null || e.onClose());
    }), ae(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Fe(() => {
      e.show && (e.onOpen == null || e.onOpen(), i());
    }), {
      SNACKBAR_TYPE: Ji,
      n: Kg,
      classes: Xg,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: Qg
} = ne("snackbar");
function xg(e, n) {
  var r = te("var-snackbar-core");
  return h(), me(
    Ga,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ee(
      Le,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: fe(() => [ee(
          r,
          Ve(e.$props, {
            class: e.n("transition")
          }),
          {
            action: fe(() => [G(e.$slots, "action")]),
            default: fe(() => [G(e.$slots, "default", {}, () => [he(
              _(e.content),
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
const da = Q({
  render: xg,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Ms
  },
  props: Ps,
  setup() {
    var {
      disabled: e
    } = Fi();
    return {
      n: Qg,
      disabled: e
    };
  }
});
function Ha() {
  return Ha = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ha.apply(this, arguments);
}
function _g(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var Ji = ["loading", "success", "warning", "info", "error"], tl = 0, Oi = !1, Vi, Pa = !1, vn = Ie([]), ey = {
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
}, ny = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ry = {
  setup() {
    return () => {
      var e = vn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Pa && (t.position = "top");
        var l = Pa ? "relative" : "absolute", s = Ha({
          position: l
        }, ly(t.position));
        return ee(Ms, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = on.zIndex;
      return ee(Js, Ve(ny, {
        style: {
          zIndex: n
        },
        onAfterEnter: ay,
        onAfterLeave: ty
      }), _g(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Bn = function(e) {
  var n = qe(e) || je(e) ? {
    content: String(e)
  } : e, r = Ie(Ha({}, ey, n));
  r.show = !0, Oi || (Oi = !0, Vi = Na(ry).unmountInstance);
  var {
    length: a
  } = vn, t = {
    id: tl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Pa)
    iy(t);
  else {
    var i = "update-" + tl;
    oy(r, i);
  }
  return {
    clear() {
      !Pa && vn.length ? vn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ji.forEach((e) => {
  Bn[e] = (n) => (Bi(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Bn(n));
});
Bn.install = function(e) {
  e.component(da.name, da);
};
Bn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Pa && (vn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Pa = e);
};
Bn.clear = function() {
  vn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Bn.Component = da;
function ay(e) {
  var n = e.getAttribute("data-id"), r = vn.find((a) => a.id === z(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function ty(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = vn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = vn.every((t) => t.animationEnd);
  a && (Vi == null || Vi(), vn = Ie([]), Oi = !1);
}
function iy(e) {
  vn.push(e);
}
function oy(e, n) {
  var [r] = vn;
  r.reactiveSnackOptions = Ha({}, r.reactiveSnackOptions, e), r._update = n;
}
function ly(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
da.install = function(e) {
  e.component(da.name, da);
};
var Es = (e) => ["mini", "small", "normal", "large"].includes(e), sy = (e) => Es(e) || Ce(e) || je(e) || qe(e), uy = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), dy = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: sy
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
    validator: uy
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function an(e) {
  return "calc(" + e + " / 2)";
}
function vy(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: i,
    lastIndex: o
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? i !== o ? l = an(e) + " " + n + " " + an(e) + " 0" : l = an(e) + " 0" : t === "space-around" ? l = an(e) + " " + an(n) : t === "space-between" && (i === 0 ? l = an(e) + " " + an(n) + " " + an(e) + " 0" : i === o ? l = an(e) + " 0 " + an(e) + " " + an(n) : l = an(e) + " " + an(n))), a === "column" && i !== o && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Ht,
  classes: fy
} = ne("space");
const va = Q({
  name: "VarSpace",
  props: dy,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? ["var(--space-size-" + i + "-y)", "var(--space-size-" + i + "-x)"] : Ce(i) ? i.map(ye) : [ye(i), ye(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (i = N(r.default)) != null ? i : [], c = Es(v), [p, g] = a(v, c), y = (S) => {
        var b = [];
        return S.forEach((M) => {
          if (M.type !== Qs) {
            if (M.type === Oe && Ce(M.children)) {
              M.children.forEach((w) => {
                b.push(w);
              });
              return;
            }
            b.push(M);
          }
        }), b;
      };
      f = y(f);
      var O = f.length - 1, T = f.map((S, b) => {
        var M = vy(p, g, {
          direction: d,
          justify: l,
          index: b,
          lastIndex: O
        });
        return ee("div", {
          style: {
            margin: M
          }
        }, [S]);
      });
      return ee("div", {
        class: fy(Ht(), Ht("$--box"), [o, Ht("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + p + " / 2) 0" : void 0
        }
      }, [T]);
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var cy = {
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
}, Is = Symbol("STEPS_BIND_STEP_KEY"), Ns = Symbol("STEPS_COUNT_STEP_KEY");
function my() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Is), {
    length: r
  } = Cn(Ns);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function py() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Is), {
    index: r
  } = kn(Ns);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: hy,
  classes: gy
} = ne("step"), yy = {
  key: 3
};
function by(e, n) {
  var r = te("var-icon");
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [B(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [B(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [B(
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
            yy,
            _(e.index + 1),
            1
          ))],
          6
        ), B(
          "div",
          {
            class: m(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [G(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? J("v-if", !0) : (h(), V(
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
const fa = Q({
  render: by,
  name: "VarStep",
  components: {
    VarIcon: Te
  },
  props: cy,
  setup() {
    var e = P(null), n = P(""), r = P(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = py(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, g = () => v(a.value), y = (O) => {
      d.value === "horizontal" && (e.value = O);
    };
    return i(p), ae(l, (O) => {
      if (r.value = O - 1 === a.value, e.value) {
        var T = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + T + "px";
      }
    }), {
      n: hy,
      classes: gy,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: g,
      getRef: y
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
function wy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Sy = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: wy
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
  n: Cy
} = ne("steps");
function ky(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const ca = Q({
  render: ky,
  name: "VarSteps",
  props: Sy,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = my(), l = (u) => {
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
      n: Cy
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
var {
  n: $y
} = ne("style-provider");
const ma = Q({
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
    return () => cl(e.tag, {
      class: $y(),
      style: Sl(e.styleVars)
    }, N(r.default));
  }
});
var jt = [];
function ja(e) {
  jt.forEach((r) => document.documentElement.style.removeProperty(r)), jt.length = 0;
  var n = Sl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), jt.push(a);
  });
}
ja.Component = ma;
ma.install = function(e) {
  e.component(ma.name, ma);
};
ja.install = function(e) {
  e.component(ma.name, ma);
};
var Ty = {
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
  n: Oy,
  classes: Vy
} = ne("switch");
function Py(e, n) {
  var r = te("var-loading"), a = te("var-form-details"), t = Ge("ripple");
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: K(e.styleComputed.switch)
      },
      [B(
        "div",
        {
          style: K(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), ke((h(), V(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [B(
          "div",
          {
            style: K(e.styleComputed.handle),
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
          )) : J("v-if", !0)],
          6
        )],
        6
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
    ), ee(
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
const pa = Q({
  render: Py,
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: Ty,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = mn(), l = () => i(e.rules, e.modelValue), s = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: p,
        modelValue: g,
        color: y,
        closeColor: O,
        loadingColor: T,
        activeValue: S
      } = e;
      return {
        handle: {
          width: Ze(p),
          height: Ze(p),
          backgroundColor: g === S ? y : O,
          color: T
        },
        ripple: {
          left: g === S ? Ze(p, 0.5) : "-" + Ze(p, 0.5),
          color: g === S ? y : O || "#999",
          width: Ze(p, 2),
          height: Ze(p, 2)
        },
        track: {
          height: Ze(p, 0.72),
          width: Ze(p, 1.9),
          borderRadius: Ze(p, 2 / 3),
          filter: g === S || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: g === S ? y : O
        },
        switch: {
          height: Ze(p, 1.2),
          width: Ze(p, 2)
        }
      };
    }), d = W(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Ze(p, 0.4);
    }), v = (p) => {
      var {
        onClick: g,
        onChange: y,
        disabled: O,
        loading: T,
        readonly: S,
        modelValue: b,
        activeValue: M,
        inactiveValue: w,
        "onUpdate:modelValue": D
      } = e;
      if (N(g, p), !(O || T || S || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var k = b === M ? w : M;
        N(y, k), N(D, k), s();
      }
    }, f = () => {
      N(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return N(n, c), {
      n: Oy,
      classes: Vy,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
pa.install = function(e) {
  e.component(pa.name, pa);
};
var My = {
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
}, Ds = Symbol("TABS_BIND_TAB_KEY"), Bs = Symbol("TABS_COUNT_TAB_KEY");
function Ey() {
  var {
    childProviders: e,
    bindChildren: n
  } = fn(Ds), {
    length: r
  } = Cn(Bs);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Iy() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Ds), {
    index: r
  } = kn(Bs);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: at,
  classes: Ny
} = ne("tab");
function Dy(e, n) {
  var r = Ge("ripple");
  return ke((h(), V(
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
    [G(e.$slots, "default")],
    6
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const ha = Q({
  render: Dy,
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: My,
  setup(e) {
    var n = P(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = Iy(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: p
    } = o, g = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(g);
    var y = () => {
      var {
        disabled: S,
        name: b
      } = e;
      return S ? f.value : u.value === b || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, O = () => {
      var {
        disabled: S,
        name: b
      } = e;
      return S ? at("$-tab--disabled") : u.value === b || u.value === (i == null ? void 0 : i.value) ? at("$-tab--active") : at("$-tab--inactive");
    }, T = (S) => {
      var {
        disabled: b,
        name: M,
        onClick: w
      } = e;
      b || (w == null || w(M != null ? M : i.value, S), s(g));
    };
    return ae(() => e.name, p), ae(() => e.disabled, p), {
      n: at,
      classes: Ny,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: y,
      computeColorClass: O,
      handleClick: T
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
var As = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), zs = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function By() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(As), {
    length: r
  } = Cn(zs);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Ay() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(As), {
    index: r
  } = kn(zs);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var zy = {
  name: {
    type: [String, Number]
  }
}, {
  n: Ly,
  classes: Fy
} = ne("tab-item");
function Ry(e, n) {
  var r = te("var-swipe-item");
  return h(), me(
    r,
    {
      class: m(e.classes(e.n(), [!e.current, e.n("--inactive")])),
      "var-tab-item-cover": ""
    },
    {
      default: fe(() => [e.initSlot ? G(e.$slots, "default", {
        key: 0
      }) : J("v-if", !0)]),
      _: 3
    },
    8,
    ["class"]
  );
}
const ga = Q({
  render: Ry,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Jn
  },
  props: zy,
  setup(e) {
    var n = P(!1), r = P(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = Ay(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: Ly,
      classes: Fy,
      current: n,
      initSlot: r
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var {
  n: Uy,
  classes: Yy
} = ne("table");
function Wy(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: m(e.n("main"))
      },
      [B(
        "table",
        {
          class: m(e.n("table")),
          style: K({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [G(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (h(), V(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const ya = Q({
  render: Wy,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: ye,
      n: Uy,
      classes: Yy
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
function il(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Hy = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: il
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: il
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
  offsetTop: _e(cs, "offsetTop"),
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
function ol(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ol(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ol(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Gy,
  classes: qy
} = ne("tabs");
function Ky(e, n) {
  return h(), me(
    Ea(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: fe(() => [B(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [B(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [G(e.$slots, "default"), B(
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
const ba = Q({
  render: Ky,
  name: "VarTabs",
  components: {
    VarSticky: Qn
  },
  inheritAttrs: !1,
  props: Hy,
  setup(e) {
    var n = P("0px"), r = P("0px"), a = P("0px"), t = P("0px"), i = P(!1), o = P(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), v = W(() => e.itemDirection), {
      tabList: f,
      bindTabList: c,
      length: p
    } = Ey(), g = (k) => {
      var A, I = (A = k.name.value) != null ? A : k.index.value, {
        active: C,
        onChange: $,
        onClick: L
      } = e;
      N(e["onUpdate:active"], I), N(L, I), I !== C && N($, I);
    }, y = () => f.find((k) => {
      var {
        name: A
      } = k;
      return e.active === A.value;
    }), O = (k) => f.find((A) => {
      var {
        index: I
      } = A;
      return (k != null ? k : e.active) === I.value;
    }), T = () => {
      if (p.value !== 0) {
        var {
          active: k
        } = e;
        if (je(k)) {
          var A = k > p.value - 1 ? p.value - 1 : 0;
          return N(e["onUpdate:active"], A), O(A);
        }
      }
    }, S = () => {
      i.value = f.length >= 5;
    }, b = (k) => {
      var {
        element: A
      } = k, I = A.value;
      e.layoutDirection === "horizontal" ? (n.value = (I == null ? void 0 : I.offsetWidth) + "px", a.value = (I == null ? void 0 : I.offsetLeft) + "px") : (r.value = (I == null ? void 0 : I.offsetHeight) + "px", t.value = (I == null ? void 0 : I.offsetTop) + "px");
    }, M = (k) => {
      var {
        element: A
      } = k;
      if (!!i.value) {
        var I = o.value, C = A.value;
        if (e.layoutDirection === "horizontal") {
          var $ = C.offsetLeft + C.offsetWidth / 2 - I.offsetWidth / 2;
          st(I, {
            left: $,
            animation: io
          });
        } else {
          var L = C.offsetTop + C.offsetHeight / 2 - I.offsetHeight / 2;
          st(I, {
            top: L,
            animation: io
          });
        }
      }
    }, w = () => {
      var k = y() || O() || T();
      !k || k.disabled.value || (S(), b(k), M(k));
    }, D = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: w,
      onTabClick: g
    };
    return c(D), ae(() => p.value, /* @__PURE__ */ jy(function* () {
      yield On(), w();
    })), ae(() => e.active, w), Fe(() => window.addEventListener("resize", w)), ar(() => window.removeEventListener("resize", w)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Le,
      toSizeUnit: ye,
      n: Gy,
      classes: qy,
      resize: w
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Xy = {
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
};
function ll(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Zy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ll(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ll(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Jy
} = ne("tabs-items");
function Qy(e, n) {
  var r = te("var-swipe");
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
      default: fe(() => [G(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const wa = Q({
  render: Qy,
  name: "VarTabsItems",
  components: {
    VarSwipe: Zn
  },
  props: Xy,
  setup(e) {
    var n = P(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = By(), i = (f) => r.find((c) => {
      var {
        name: p
      } = c;
      return f === p.value;
    }), o = (f) => r.find((c) => {
      var {
        index: p
      } = c;
      return f === p.value;
    }), l = (f) => i(f) || o(f), s = (f) => {
      var c, p = l(f);
      !p || (r.forEach((g) => {
        var {
          setCurrent: y
        } = g;
        return y(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (f) => {
      var c, p = r.find((y) => {
        var {
          index: O
        } = y;
        return O.value === f;
      }), g = (c = p.name.value) != null ? c : p.index.value;
      N(e["onUpdate:active"], g);
    }, d = () => n.value, v = {};
    return a(v), ae(() => e.active, s), ae(() => t.value, /* @__PURE__ */ Zy(function* () {
      yield On(), s(e.active);
    })), {
      swipe: n,
      n: Jy,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
const xy = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, _y = {
  "--badge-default-color": "#555"
}, e0 = {
  "--button-default-color": "#303030"
}, n0 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, r0 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, a0 = {
  "--checkbox-unchecked-color": "#fff"
}, t0 = {
  "--chip-default-color": "#555"
}, i0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, o0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, l0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, s0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, u0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, d0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, v0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, f0 = {
  "--popup-content-background-color": "#1e1e1e"
}, c0 = {
  "--pull-refresh-background": "#303030"
}, m0 = {
  "--radio-unchecked-color": "#fff"
}, p0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, h0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, g0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, y0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, b0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, w0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, S0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, C0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, k0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, $0 = {
  "--tabs-background": "#1e1e1e"
}, T0 = {
  "--app-bar-color": "#272727"
}, O0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, V0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, P0 = {
  "--menu-background-color": "#272727"
};
function Pi() {
  return Pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Pi.apply(this, arguments);
}
const M0 = Pi({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, e0, r0, n0, C0, o0, g0, $0, w0, f0, l0, xy, t0, _y, k0, i0, c0, b0, y0, d0, S0, u0, h0, m0, a0, s0, v0, T0, O0, V0, P0, p0);
var Mi = {
  dark: M0
}, un = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Je = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], sl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function E0(e) {
  return ["ampm", "24hr"].includes(e);
}
var I0 = {
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
    validator: E0
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
}, Ls = (e, n) => e === "24hr" || n === "am", Qi = (e, n, r) => {
  var a = un.findIndex((i) => z(i) === z(r)), t = Ls(e, n) ? r : Je[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, en = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
  };
}, Fs = (e) => {
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
    hourNum: v
  } = Qi(t, i, o), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: g
    } = en(l);
    f = p === v && a > g;
  }
  if (!l && s) {
    var {
      hour: y,
      minute: O
    } = en(s);
    f = y === v && a < O;
  }
  if (l && s) {
    var {
      hour: T,
      minute: S
    } = en(l), {
      hour: b,
      minute: M
    } = en(s);
    f = b === v && a < M || T === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Rs = (e) => {
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
    hourStr: v,
    hourNum: f
  } = Qi(t, i, o), c = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: y,
      second: O
    } = en(s);
    c = g === f && y < l || y === l && a > O;
  }
  if (!s && u) {
    var {
      hour: T,
      minute: S,
      second: b
    } = en(u);
    c = T === f && S > l || S === l && a > b;
  }
  if (s && u) {
    var {
      hour: M,
      minute: w,
      second: D
    } = en(s), {
      hour: k,
      minute: A,
      second: I
    } = en(u);
    c = M === f && w < l || k === f && A > l || M === f && w === l && a > D || k === f && A === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: N0,
  classes: D0
} = ne("time-picker");
function B0(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n("clock"))
    },
    [B(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
    ), (h(!0), V(
      Oe,
      null,
      Ne(e.timeScales, (r, a) => (h(), V(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: K(e.getStyle(a, r, !1))
        },
        _(r),
        7
      ))),
      128
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
        Ne(e.hours24, (r, a) => (h(), V(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: K(e.getStyle(a, r, !0))
          },
          _(r),
          7
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)],
    2
  );
}
const A0 = Q({
  render: B0,
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
    } = n, a = P(null), t = P([]), i = P([]), o = W(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = W(() => {
      if (e.rad !== void 0) {
        var y = e.rad / 30;
        return y >= 0 ? y : y + 12;
      }
    }), s = W(() => e.type === "hour" ? un : sl), u = (y, O) => {
      var T;
      y = (T = y) != null ? T : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? Fs : Rs, b = {
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
      return O && e.type === "minute" && Reflect.deleteProperty(b, "minute"), S(b);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var y = e.isInner ? Je[l.value] : s.value[l.value];
      return s.value === sl ? u() ? "#bdbdbd" : e.color : f(y) ? "#bdbdbd" : e.color;
    }, v = (y, O) => O ? l.value === y && e.isInner : l.value === y && (!e.isInner || e.type !== "hour"), f = (y) => {
      if (e.type === "hour") {
        if (Ls(e.format, e.ampm))
          return t.value.includes(y);
        var O = un.findIndex((T) => T === y);
        return i.value.includes(O);
      }
      return u(y, !0);
    }, c = (y, O, T) => {
      var S = 2 * Math.PI / 12 * y - Math.PI / 2, b = 50 * (1 + Math.cos(S)), M = 50 * (1 + Math.sin(S)), w = () => v(y, T) ? f(O) ? {
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
        color: k
      } = w();
      return {
        left: b + "%",
        top: M + "%",
        backgroundColor: D,
        color: k
      };
    }, p = () => {
      var {
        width: y,
        height: O
      } = a.value.getBoundingClientRect();
      return {
        width: y,
        height: O
      };
    }, g = () => {
      if (l.value !== void 0) {
        var y = e.ampm === "am" ? un : Je;
        return gr(y[l.value], 2, "0");
      }
    };
    return ae([l, () => e.isInner], (y, O) => {
      var [T, S] = y, [b, M] = O, w = T === b && S === M;
      if (!(w || e.type !== "hour" || l.value === void 0)) {
        var D = S ? Je[l.value] : g(), k = e.useSeconds ? ":" + e.time.second : "", A = D + ":" + e.time.minute + k;
        e.preventNextUpdate || r("update", A), r("change-prevent-update");
      }
    }), ae(() => e.rad, (y, O) => {
      if (!(e.type === "hour" || y === void 0 || O === void 0)) {
        var T = y / 6 >= 0 ? y / 6 : y / 6 + 60, S = O / 6 >= 0 ? O / 6 : O / 6 + 60;
        if (T !== S) {
          var b, {
            hourStr: M
          } = Qi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var w = re().minute(T).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            b = M + ":" + w + D;
          }
          if (e.type === "second") {
            var k = re().second(T).format("ss"), A = e.useSeconds ? ":" + k : "";
            b = M + ":" + e.time.minute + A;
          }
          r("update", b);
        }
      }
    }), ae([() => e.max, () => e.min, () => e.allowedTime], (y) => {
      var [O, T, S] = y;
      if (t.value = [], O && !T) {
        var {
          hour: b
        } = en(O), M = un.filter((Z) => z(Z) > b), w = Je.filter((Z) => z(Z) > b);
        t.value = [...M, ...w];
      }
      if (!O && T) {
        var {
          hour: D
        } = en(T), k = un.filter((Z) => z(Z) < D), A = Je.filter((Z) => z(Z) < D);
        t.value = [...k, ...A];
      }
      if (O && T) {
        var {
          hour: I
        } = en(O), {
          hour: C
        } = en(T), $ = un.filter((Z) => z(Z) < C || z(Z) > I), L = Je.filter((Z) => z(Z) < C || z(Z) > I);
        t.value = [...$, ...L];
      }
      if (S != null && S.hours) {
        var {
          hours: Y
        } = S, j = un.filter((Z) => !Y(z(Z))), F = Je.filter((Z) => !Y(z(Z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...j, ...F])];
      }
      i.value = t.value.map((Z) => Je.findIndex((H) => Z === H)).filter((Z) => Z >= 0);
    }, {
      immediate: !0
    }), {
      n: N0,
      classes: D0,
      hours24: Je,
      timeScales: s,
      inner: a,
      handStyle: o,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: c,
      activeItemIndex: l
    };
  }
});
var {
  n: z0,
  classes: L0
} = ne("time-picker"), F0 = (e) => (kr(""), e = e(), $r(), e), R0 = /* @__PURE__ */ F0(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
)), U0 = {
  key: 0
};
function Y0(e, n) {
  var r = te("clock");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [B(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [B(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          _(e.time.hour),
          3
        ), R0, B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          _(e.time.minute),
          3
        ), e.useSeconds ? (h(), V("span", U0, ":")) : J("v-if", !0), e.useSeconds ? (h(), V(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          _(e.time.second),
          3
        )) : J("v-if", !0)],
        2
      ), e.format === "ampm" ? (h(), V(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
        )],
        2
      )) : J("v-if", !0)],
      6
    ), B(
      "div",
      {
        class: m(e.n("body"))
      },
      [B(
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
        [ee(
          Le,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: fe(() => [(h(), me(
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
const Sa = Q({
  render: Y0,
  name: "VarTimePicker",
  components: {
    Clock: A0
  },
  props: I0,
  setup(e) {
    var n = P(null), r = P(null), a = P(null), t = P(!1), i = P(!1), o = P(!1), l = P(!1), s = P(!1), u = P(void 0), d = P(0), v = P(0), f = P("hour"), c = P("am"), p = P(!1), g = P(!1), y = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), O = Ie({
      x: 0,
      y: 0
    }), T = Ie({
      x: [],
      y: []
    }), S = W(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), b = (E) => {
      N(e["onUpdate:modelValue"], E), N(e.onChange, E);
    }, M = (E) => E * 57.29577951308232, w = (E) => {
      l.value = !1, g.value = !1, f.value = E;
    }, D = (E) => {
      var {
        disableHour: R
      } = a.value, U = un.findIndex((le) => z(le) === z(y.value.hour)), x = E === "am" ? un : Je, ie = [...x.slice(U), ...x.slice(0, U)];
      return ie.find((le, de) => (i.value = de !== 0, !R.includes(le)));
    }, k = (E) => {
      if (!e.readonly) {
        c.value = E;
        var R = D(E);
        if (!!R) {
          var U = e.useSeconds ? ":" + y.value.second : "", x = gr(R, 2, "0") + ":" + y.value.minute + U;
          b(x);
        }
      }
    }, A = (E, R) => {
      var U = E >= T.x[0] && E <= T.x[1], x = R >= T.y[0] && R <= T.y[1];
      return U && x;
    }, I = (E) => {
      var R = e.format === "24hr" ? "HH" : "hh", {
        hour: U,
        minute: x,
        second: ie
      } = en(E);
      return {
        hour: re().hour(U).format(R),
        minute: re().minute(x).format("mm"),
        second: re().second(ie).format("ss")
      };
    }, C = (E) => {
      var R = E / 30;
      return R >= 0 ? R : R + 12;
    }, $ = () => {
      var {
        width: E,
        height: R
      } = a.value.getSize(), U = O.x - E / 2 - 8, x = O.x + E / 2 + 8, ie = O.y - R / 2 - 8, le = O.y + R / 2 + 8;
      return {
        rangeXMin: U,
        rangeXMax: x,
        rangeYMin: ie,
        rangeYMax: le
      };
    }, L = (E, R, U) => {
      var {
        disableHour: x
      } = a.value;
      o.value = A(E, R);
      var ie = Math.round(U / 30) * 30 + 90, le = C(ie), de = t.value ? un[le] : Je[le];
      if (x.includes(de) || (t.value = e.format === "24hr" ? A(E, R) : !1), t.value === o.value) {
        var we = t.value || c.value === "pm" ? Je[le] : un[le];
        p.value = x.includes(we), !p.value && (u.value = ie, l.value = !0);
      }
    }, Y = (E) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(E / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      g.value = Fs(ie), !g.value && (d.value = U, s.value = !0);
    }, j = (E) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(E / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: y.value.hour,
        minute: z(y.value.minute),
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      Rs(ie) || (v.value = U);
    }, F = () => {
      var {
        left: E,
        top: R,
        width: U,
        height: x
      } = n.value.getBoundingClientRect();
      if (O.x = E + U / 2, O.y = R + x / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: le,
          rangeYMin: de,
          rangeYMax: we
        } = $();
        T.x = [ie, le], T.y = [de, we];
      }
    }, Z = (E) => {
      if (E.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: R,
          clientY: U
        } = E.touches[0], x = R - O.x, ie = U - O.y, le = Math.round(M(Math.atan2(ie, x)));
        f.value === "hour" ? L(R, U, le) : f.value === "minute" ? Y(le) : j(le);
      }
    }, H = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, X = () => {
      i.value = !1;
    };
    return ae(() => e.modelValue, (E) => {
      if (E) {
        var {
          hour: R,
          minute: U,
          second: x
        } = en(E), ie = re().hour(R).format("hh"), le = re().hour(R).format("HH"), de = re().minute(U).format("mm"), we = re().second(x).format("ss");
        u.value = (ie === "12" ? 0 : z(ie)) * 30, d.value = z(de) * 6, v.value = z(we) * 6, y.value = I(E), e.format !== "24hr" && (c.value = gr("" + R, 2, "0") === le && Je.includes(le) ? "pm" : "am"), t.value = e.format === "24hr" && Je.includes(le);
      }
    }, {
      immediate: !0
    }), {
      n: z0,
      classes: L0,
      getRad: S,
      time: y,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: Z,
      checkPanel: w,
      checkAmpm: k,
      end: H,
      update: b,
      changePreventUpdate: X
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var W0 = {
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
function ul(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        ul(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ul(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: H0,
  classes: j0
} = ne("uploader"), G0 = 0, q0 = ["onClick"], K0 = ["onClick"], X0 = ["src", "alt"], Z0 = ["multiple", "accept", "capture", "disabled"], J0 = ["src"];
function Q0(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = te("var-popup"), i = Ge("ripple");
  return h(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(h(!0), V(
        Oe,
        null,
        Ne(e.files, (o) => ke((h(), V(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [B(
            "div",
            {
              class: m(e.n("file-name"))
            },
            _(o.name || o.url),
            3
          ), e.removable ? (h(), V(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Dn((l) => e.handleRemove(o), ["stop"])
            },
            [ee(
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
            K0
          )) : J("v-if", !0), o.cover ? (h(), V(
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
            X0
          )) : J("v-if", !0), B(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          q0
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((h(), V(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [B(
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
          Z0
        ), G(e.$slots, "default", {}, () => [ee(
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
      }]]) : J("v-if", !0)],
      2
    ), ee(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), ee(
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
        default: fe(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (h(), V(
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
            J0
          )) : J("v-if", !0)];
        }),
        _: 1
      },
      8,
      ["class", "show"]
    )],
    2
  );
}
const Ca = Q({
  render: Q0,
  name: "VarUploader",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarPopup: bn,
    VarFormDetails: He
  },
  props: W0,
  setup(e) {
    var n = P(null), r = P(!1), a = P(null), t = W(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: j
        }
      } = e;
      return je(Y) ? j + " / " + Y : "";
    }), {
      form: i,
      bindForm: o
    } = pn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = mn(), v = W(() => {
      var {
        modelValue: Y,
        hideList: j
      } = e;
      return j ? [] : Y;
    }), f = () => {
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
        if (qe(H) && ao(H)) {
          nr(H);
          return;
        }
        qe(H) && to(H) && (a.value = Y, r.value = !0);
      }
    }, p = (Y) => ({
      id: G0++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), g = (Y) => {
      var j = Y.target, {
        files: F
      } = j;
      return Array.from(F);
    }, y = (Y) => new Promise((j) => {
      var F = new FileReader();
      F.onload = () => {
        var Z = F.result;
        Y.file.type.startsWith("image") && (Y.cover = Z), Y.url = Z, j(Y);
      }, F.readAsDataURL(Y.file);
    }), O = (Y) => Y.map(y), T = (Y) => {
      var {
        onBeforeRead: j
      } = e;
      return Y.map((F) => new Promise((Z) => {
        var H = j ? j(Ie(F)) : !0;
        Promise.resolve(H).then((X) => Z({
          valid: X,
          varFile: F
        }));
      }));
    }, S = /* @__PURE__ */ function() {
      var Y = dl(function* (j) {
        var {
          maxsize: F,
          maxlength: Z,
          modelValue: H,
          onOversize: X,
          onAfterRead: E,
          readonly: R,
          disabled: U
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || U || R)) {
          var x = (Me) => Me.filter((ln) => ln.file.size > z(F) ? (N(X, Ie(ln)), !1) : !0), ie = (Me) => {
            var ln = Math.min(Me.length, z(Z) - H.length);
            return Me.slice(0, ln);
          }, le = g(j), de = le.map(p);
          de = F != null ? x(de) : de, de = Z != null ? ie(de) : de;
          var we = yield Promise.all(O(de)), Re = yield Promise.all(T(we)), Qe = Re.filter((Me) => {
            var {
              valid: ln
            } = Me;
            return ln;
          }).map((Me) => {
            var {
              varFile: ln
            } = Me;
            return ln;
          });
          N(e["onUpdate:modelValue"], [...H, ...Qe]), j.target.value = "", Qe.forEach((Me) => N(E, Ie(Me)));
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var Y = dl(function* (j) {
        var {
          disabled: F,
          readonly: Z,
          modelValue: H,
          onBeforeRemove: X,
          onRemove: E
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || F || Z) && !(X && !(yield X(j)))) {
          var R = H.filter((U) => U !== j);
          N(E, j), A("onRemove"), N(e["onUpdate:modelValue"], R);
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), M = () => e.modelValue.filter((Y) => Y.state === "success"), w = () => e.modelValue.filter((Y) => Y.state === "error"), D = () => e.modelValue.filter((Y) => Y.state === "loading"), k = {
      getSuccess: M,
      getError: w,
      getLoading: D
    }, A = (Y) => {
      Pe(() => {
        var {
          validateTrigger: j,
          rules: F,
          modelValue: Z
        } = e;
        s(j, Y, F, Z, k);
      });
    }, I = !1, C = () => u(e.rules, e.modelValue, k), $ = () => {
      I = !0, N(e["onUpdate:modelValue"], []), d();
    }, L = {
      validate: C,
      resetValidation: d,
      reset: $
    };
    return N(o, L), ae(() => e.modelValue, () => {
      !I && A("onChange"), I = !1;
    }, {
      deep: !0
    }), {
      n: H0,
      classes: j0,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: to,
      isHTMLSupportImage: ao,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: f,
      handleChange: S,
      handleRemove: b,
      getSuccess: M,
      getError: w,
      getLoading: D,
      validate: C,
      resetValidation: d,
      reset: $
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
function x0(e) {
  yr.install && e.use(yr), Dr.install && e.use(Dr), Br.install && e.use(Br), sr.install && e.use(sr), Ar.install && e.use(Ar), zr.install && e.use(zr), nn.install && e.use(nn), Lr.install && e.use(Lr), ur.install && e.use(ur), dr.install && e.use(dr), Fr.install && e.use(Fr), vr.install && e.use(vr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), on.install && e.use(on), Wr.install && e.use(Wr), Hr.install && e.use(Hr), jr.install && e.use(jr), br.install && e.use(br), Gr.install && e.use(Gr), Xn.install && e.use(Xn), He.install && e.use(He), Te.install && e.use(Te), qr.install && e.use(qr), nr.install && e.use(nr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), pr.install && e.use(pr), ht.install && e.use(ht), Zr.install && e.use(Zr), Jr.install && e.use(Jr), $n.install && e.use($n), Ua.install && e.use(Ua), Qt.install && e.use(Qt), _n.install && e.use(_n), Qr.install && e.use(Qr), xr.install && e.use(xr), _r.install && e.use(_r), Cr.install && e.use(Cr), bn.install && e.use(bn), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), ia.install && e.use(ia), Ue.install && e.use(Ue), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), Bn.install && e.use(Bn), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), Qn.install && e.use(Qn), ja.install && e.use(ja), Zn.install && e.use(Zn), Jn.install && e.use(Jn), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Mi.install && e.use(Mi), Sa.install && e.use(Sa), Ca.install && e.use(Ca);
}
const eb = {
  install: x0,
  ActionSheet: yr,
  AppBar: Dr,
  BackTop: Br,
  Badge: sr,
  BottomNavigation: Ar,
  BottomNavigationItem: zr,
  Button: nn,
  Card: Lr,
  Cell: ur,
  Checkbox: dr,
  CheckboxGroup: Fr,
  Chip: vr,
  Col: Rr,
  Collapse: Ur,
  CollapseItem: Yr,
  Context: on,
  Countdown: Wr,
  Counter: Hr,
  DatePicker: jr,
  Dialog: br,
  Divider: Gr,
  Form: Xn,
  FormDetails: He,
  Icon: Te,
  Image: qr,
  ImagePreview: nr,
  IndexAnchor: Kr,
  IndexBar: Xr,
  Input: pr,
  Lazy: ht,
  Link: Zr,
  List: Jr,
  Loading: $n,
  LoadingBar: Ua,
  Locale: Qt,
  Menu: _n,
  Option: Qr,
  Overlay: xr,
  Pagination: _r,
  Picker: Cr,
  Popup: bn,
  Progress: ea,
  PullRefresh: na,
  Radio: ra,
  RadioGroup: aa,
  Rate: ta,
  Result: ia,
  Ripple: Ue,
  Row: oa,
  Select: la,
  Skeleton: sa,
  Slider: ua,
  Snackbar: Bn,
  Space: va,
  Step: fa,
  Steps: ca,
  Sticky: Qn,
  StyleProvider: ja,
  Swipe: Zn,
  SwipeItem: Jn,
  Switch: pa,
  Tab: ha,
  TabItem: ga,
  Table: ya,
  Tabs: ba,
  TabsItems: wa,
  Themes: Mi,
  TimePicker: Sa,
  Uploader: Ca
};
export {
  yr as ActionSheet,
  Dr as AppBar,
  Br as BackTop,
  sr as Badge,
  Ar as BottomNavigation,
  zr as BottomNavigationItem,
  nn as Button,
  Lr as Card,
  ur as Cell,
  dr as Checkbox,
  Fr as CheckboxGroup,
  vr as Chip,
  Rr as Col,
  Ur as Collapse,
  Yr as CollapseItem,
  on as Context,
  Wr as Countdown,
  Hr as Counter,
  jr as DatePicker,
  br as Dialog,
  Gr as Divider,
  Xn as Form,
  He as FormDetails,
  Te as Icon,
  qr as Image,
  nr as ImagePreview,
  Kr as IndexAnchor,
  Xr as IndexBar,
  pr as Input,
  ht as Lazy,
  Zr as Link,
  Jr as List,
  $n as Loading,
  Ua as LoadingBar,
  Qt as Locale,
  _n as Menu,
  Qr as Option,
  xr as Overlay,
  _r as Pagination,
  Cr as Picker,
  bn as Popup,
  ea as Progress,
  na as PullRefresh,
  ra as Radio,
  aa as RadioGroup,
  ta as Rate,
  ia as Result,
  Ue as Ripple,
  oa as Row,
  la as Select,
  sa as Skeleton,
  ua as Slider,
  Bn as Snackbar,
  va as Space,
  fa as Step,
  ca as Steps,
  Qn as Sticky,
  ja as StyleProvider,
  Zn as Swipe,
  Jn as SwipeItem,
  pa as Switch,
  ha as Tab,
  ga as TabItem,
  ya as Table,
  ba as Tabs,
  wa as TabsItems,
  Mi as Themes,
  Sa as TimePicker,
  Ca as Uploader,
  eb as default,
  x0 as install
};
