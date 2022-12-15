import { reactive as Ne, ref as P, onMounted as Fe, onUnmounted as rr, onActivated as Mi, onDeactivated as Ei, getCurrentInstance as Ha, provide as ul, computed as W, inject as dl, nextTick as Me, createApp as js, onBeforeUnmount as Ii, h as vl, isVNode as gt, watch as ae, onBeforeMount as Gs, defineComponent as Q, createVNode as ee, Teleport as ja, Transition as Le, withDirectives as ke, vShow as Ga, mergeProps as Pe, openBlock as y, createBlock as me, resolveDynamicComponent as Pa, normalizeClass as m, normalizeStyle as K, resolveComponent as te, resolveDirective as Ge, withCtx as fe, createElementVNode as B, renderSlot as G, toDisplayString as _, createElementBlock as V, Fragment as Ve, renderList as De, createCommentVNode as J, onUpdated as Ni, createTextVNode as he, pushScopeId as Cr, popScopeId as kr, withModifiers as Nn, normalizeProps as fl, guardReactiveProps as qs, vModelText as Ks, toRefs as Xs, withKeys as xi, toRaw as _i, TransitionGroup as Zs, Comment as Js } from "vue";
var cl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(cl);
const tn = Ne(cl), qe = (e) => typeof e == "string", Gt = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Di = (e) => Object.prototype.toString.call(e) === "[object Object]", Qs = (e) => typeof e == "object" && e !== null, be = (e) => Array.isArray(e), xs = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Hn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Gt(e) ? Number(e) : e, yt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Bi = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, bt = () => typeof window < "u", eo = (e) => [...new Set(e)], _s = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
var no = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ro = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), eu = (e) => {
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
      this.has(r) && yt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, ao = (e) => e, to = (e) => Math.pow(e, 3), ml = (e) => e < 0.5 ? to(e * 2) / 2 : 1 - to((1 - e) * 2) / 2, wt = (e, n) => e == null ? n : e, pl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, hr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
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
function nu(e) {
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
function ru(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function St(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ai(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function au(e) {
  return qt.apply(this, arguments);
}
function qt() {
  return qt = nu(function* (e) {
    yield Tn();
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
function Ma(e) {
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
function tu(e) {
  for (var n = [], r = e; r !== window; )
    r = Ma(r), n.push(r);
  return n;
}
var hl = (e) => qe(e) && e.endsWith("rem"), iu = (e) => qe(e) && e.endsWith("px") || je(e), ou = (e) => qe(e) && e.endsWith("%"), gl = (e) => qe(e) && e.endsWith("vw"), yl = (e) => qe(e) && e.endsWith("vh"), lu = (e) => qe(e) && e.startsWith("calc("), su = (e) => qe(e) && e.startsWith("var("), Oe = (e) => {
  if (je(e))
    return e;
  if (iu(e))
    return +e.replace("px", "");
  if (gl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (yl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (hl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return ou(e) || gl(e) || yl(e) || hl(e) || lu(e) || su(e) ? e : Oe(e) + "px";
}, Ze = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function $n(e) {
  var n = pl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function uu(e) {
  var n = pl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Ct(e) {
  $n(() => {
    $n(e);
  });
}
function Tn() {
  return new Promise((e) => {
    $n(() => {
      $n(e);
    });
  });
}
function lt(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = St(e), s = Ai(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - o) / t;
      if (v < 1) {
        var f = l + (r - l) * i(v), c = s + (a - s) * i(v);
        e.scrollTo(c, f), $n(d);
      } else
        e.scrollTo(a, r), u();
    };
    $n(d);
  });
}
function bl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + _s(a);
    return n[i] = t, n;
  }, {});
}
function du() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var vu = ["collect", "clear"];
function oo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function lo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        oo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        oo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function fu(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
function st() {
  return st = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, st.apply(this, arguments);
}
function _e(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function cu(e) {
  var n = js(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Ea(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => vl(e, st({}, n, r));
    }
  }, {
    unmount: t
  } = cu(a);
  return {
    unmountInstance: t
  };
}
function mu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      gt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function Sn(e) {
  var n = Ne([]), r = Ha(), a = () => {
    var l = mu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    yt(n, l);
  };
  ul(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = W(() => n.length);
  return {
    length: o
  };
}
function Cn(e) {
  if (!wl(e))
    return {
      index: null
    };
  var n = dl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Ha();
  Fe(() => {
    Me().then(() => r(i));
  }), rr(() => {
    Me().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function vn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    yt(n, i);
  }, t = (i) => {
    ul(e, st({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function fn(e) {
  if (!wl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = dl(e), {
    collect: r,
    clear: a
  } = n, t = fu(n, vu), i = (o) => {
    Fe(() => r(o)), Ii(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function wl(e) {
  var n = Ha();
  return e in n.provides;
}
function cn() {
  var e = P(""), n = /* @__PURE__ */ function() {
    var t = lo(function* (i, o, l) {
      if (!be(i) || !i.length)
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
    var t = lo(function* (i, o, l, s, u) {
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
function pu(e) {
  Fe(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), rr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function zi() {
  var e = P(!1);
  return Mi(() => {
    e.value = !1;
  }), Ei(() => {
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
function D(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (e)
    return e(...r);
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
var {
  n: Sl
} = ne("ripple"), so = 250;
function hu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function gu(e, n) {
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
function Cl(e) {
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
      } = gu(this, e), s = document.createElement("div");
      s.classList.add(Sl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), hu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Kt() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Sl());
    if (!!r.length) {
      var a = r[r.length - 1], t = so - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, so);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function kl() {
  var e = this._ripple;
  !du() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function yu(e, n) {
  var r, a, t;
  e._ripple = ut({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : tn.touchmoveForbid,
    removeRipple: Kt.bind(e)
  }), e.addEventListener("touchstart", Cl, {
    passive: !0
  }), e.addEventListener("touchmove", kl, {
    passive: !0
  }), e.addEventListener("dragstart", Kt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function bu(e) {
  e.removeEventListener("touchstart", Cl), e.removeEventListener("touchmove", kl), e.removeEventListener("dragstart", Kt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function wu(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : tn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = ut({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Ue = {
  mounted: yu,
  unmounted: bu,
  updated: wu,
  install(e) {
    e.directive("ripple", this);
  }
};
function Su(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var qa = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Su
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
function $l() {
  var e = Object.keys(tn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Za(e) {
  tn.locks[e] = 1, $l();
}
function Ja(e) {
  delete tn.locks[e], $l();
}
function kt(e, n) {
  var {
    uid: r
  } = Ha();
  n && ae(n, (a) => {
    a === !1 ? Ja(r) : a === !0 && e() === !0 && Za(r);
  }), ae(e, (a) => {
    n && n() === !1 || (a === !0 ? Za(r) : Ja(r));
  }), Gs(() => {
    n && n() === !1 || e() === !0 && Za(r);
  }), rr(() => {
    n && n() === !1 || e() === !0 && Ja(r);
  }), Mi(() => {
    n && n() === !1 || e() === !0 && Za(r);
  }), Ei(() => {
    n && n() === !1 || e() === !0 && Ja(r);
  });
}
function Ka(e, n) {
  var r = P(tn.zIndex);
  return ae(e, (a) => {
    a && (tn.zIndex += n, r.value = tn.zIndex);
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
function Cu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !gt(e);
}
var {
  n: Pn,
  classes: Ft
} = ne("popup");
const yn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: qa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ka(() => e.show, 3), {
      disabled: i
    } = zi(), o = () => {
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
    }), pu(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ee("div", {
        class: Ft(Pn("overlay"), d),
        style: Xt({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => ee("div", Pe({
      class: Ft(Pn("content"), Pn("--" + e.position), [e.defaultStyle, Pn("--content-background-color")], [e.defaultStyle, Pn("$-elevation--3")]),
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
        position: b
      } = e;
      return ee(Le, {
        name: Pn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(ee("div", {
          class: Ft(Pn("$--box"), Pn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), ee(Le, {
          name: p || Pn("$-pop-" + b)
        }, {
          default: () => [f && s()]
        })]), [[Ga, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ee(ja, {
          to: d,
          disabled: i.value
        }, Cu(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
yn.install = function(e) {
  e.component(yn.name, yn);
};
var Tl = {
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
function uo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        uo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        uo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: $u,
  classes: Tu
} = ne("icon");
function Ou(e, n) {
  return y(), me(
    Pa(e.isURL(e.name) ? "img" : "i"),
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
  render: Ou,
  name: "VarIcon",
  props: Tl,
  setup(e) {
    var n = P(""), r = P(!1), a = /* @__PURE__ */ function() {
      var t = ku(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || z(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
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
      n: $u,
      classes: Tu,
      nextName: n,
      shrinking: r,
      isURL: xs,
      toNumber: z,
      toSizeUnit: we
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
var Vu = Zt({
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
}, _e(qa, [
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
const Ol = {
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
}, Pu = {
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
function Vl() {
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
  packs: Mu,
  pack: Ye,
  add: Pl,
  use: Ml,
  merge: Eu
} = Vl();
Pl("zh-CN", Ol);
Ml("zh-CN");
const Qt = {
  zhCN: Ol,
  enUS: Pu,
  packs: Mu,
  pack: Ye,
  add: Pl,
  use: Ml,
  merge: Eu,
  useLocale: Vl
};
var {
  n: Iu,
  classes: Nu
} = ne("action-sheet"), Du = ["onClick"];
function Bu(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Ge("ripple");
  return y(), me(
    a,
    Pe({
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
        Pe({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [G(e.$slots, "title", {}, () => [B(
          "div",
          {
            class: m(e.n("title"))
          },
          _(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), G(e.$slots, "actions", {}, () => [(y(!0), V(
          Ve,
          null,
          De(e.actions, (i) => ke((y(), V(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (y(), me(
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
            Du
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
const or = Q({
  render: Bu,
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: yn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Vu,
  setup(e) {
    var n = P(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        D(o, t), i && D(e["onUpdate:show"], !1);
      }
    }, a = (t) => D(e["onUpdate:show"], t);
    return ae(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Iu,
      classes: Nu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: wt,
      handleSelect: r
    };
  }
});
var Un;
function gr(e) {
  return bt() ? new Promise((n) => {
    gr.close();
    var r = Ne(e);
    r.teleport = "body", Un = r;
    var {
      unmountInstance: a
    } = Ea(or, r, {
      onSelect: (t) => {
        r.onSelect == null || r.onSelect(t), n(t);
      },
      onClose: () => {
        r.onClose == null || r.onClose(), n("close");
      },
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Un === r && (Un = null);
      },
      onRouteChange: () => {
        a(), Un === r && (Un = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
gr.Component = or;
or.install = function(e) {
  e.component(or.name, or);
};
gr.close = () => {
  if (Un != null) {
    var e = Un;
    Un = null, Me().then(() => {
      e.show = !1;
    });
  }
};
gr.install = function(e) {
  e.component(or.name, or);
};
function Au(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var zu = {
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
    validator: Au
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
  n: Lu,
  classes: Fu
} = ne("app-bar");
function Ru(e, n) {
  return y(), V(
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
      [G(e.$slots, "left"), e.titlePosition === "left" ? (y(), V(
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
    ), e.titlePosition === "center" ? (y(), V(
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
      [e.titlePosition === "right" ? (y(), V(
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
const Nr = Q({
  render: Ru,
  name: "VarAppBar",
  props: zu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = P(), t = P(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Fe(i), Ni(i), {
      n: Lu,
      classes: Fu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
function Uu(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Yu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var jn = {
  type: {
    type: String,
    default: "circle",
    validator: Uu
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Yu
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
  n: Wu,
  classes: Hu
} = ne("loading"), ju = (e) => (Cr(""), e = e(), kr(), e), Gu = /* @__PURE__ */ ju(() => /* @__PURE__ */ B(
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
)), qu = [Gu];
function Ku(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (y(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [G(e.$slots, "default"), e.loading ? (y(), V(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.isShow ? (y(), V(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (y(), V(
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
          qu,
          6
        )],
        2
      )) : J("v-if", !0), (y(!0), V(
        Ve,
        null,
        De(e.loadingTypeDict, (r, a) => (y(), V(
          Ve,
          {
            key: a
          },
          [e.type === a ? (y(), V(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(y(!0), V(
              Ve,
              null,
              De(r, (t) => (y(), V(
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
      )), e.$slots.description || e.description ? (y(), V(
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
const kn = Q({
  render: Ku,
  name: "VarLoading",
  props: jn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = W(() => D(r.default) ? e.loading : !0);
    return {
      n: Wu,
      classes: Hu,
      multiplySizeUnit: Ze,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
kn.install = function(e) {
  e.component(kn.name, kn);
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
function Xu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Zu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Ju = {
  type: {
    type: String,
    default: "default",
    validator: Xu
  },
  size: {
    type: String,
    default: "normal",
    validator: Zu
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
  loadingType: _e(jn, "type"),
  loadingSize: _e(jn, "size"),
  loadingColor: xt({}, _e(jn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: Qu,
  classes: xu
} = ne("button"), _u = ["disabled"];
function ed(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return ke((y(), V(
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
    )) : J("v-if", !0), B(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [G(e.$slots, "default")],
      2
    )],
    46,
    _u
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const nn = Q({
  render: ed,
  name: "VarButton",
  components: {
    VarLoading: kn
  },
  directives: {
    Ripple: Ue
  },
  props: Ju,
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
      n: Qu,
      classes: xu,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
nn.install = function(e) {
  e.component(nn.name, nn);
};
var nd = {
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
  n: rd,
  classes: ad
} = ne("back-top");
function td(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return y(), me(
    ja,
    {
      to: "body",
      disabled: e.disabled
    },
    [B(
      "div",
      Pe({
        class: e.classes(e.n(), [e.show, e.n("--active")]),
        ref: "backTopEl",
        style: {
          right: e.toSizeUnit(e.right),
          bottom: e.toSizeUnit(e.bottom)
        }
      }, e.$attrs, {
        onClick: n[0] || (n[0] = Nn(function() {
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
const Dr = Q({
  render: td,
  name: "VarBackTop",
  components: {
    VarButton: nn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: nd,
  setup(e) {
    var n = P(!1), r = P(null), a = P(!0), t, i = (u) => {
      D(e.onClick, u);
      var d = Ai(t);
      lt(t, {
        left: d,
        duration: e.duration,
        animation: ml
      });
    }, o = () => {
      n.value = St(t) >= Oe(e.visibilityHeight);
    }, l = Bi(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (qe(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (Qs(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Fe(() => {
      t = e.target ? s() : Ma(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Ii(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: rd,
      classes: ad,
      click: i
    };
  }
});
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
function id(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function od(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var ld = {
  type: {
    type: String,
    default: "default",
    validator: id
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
    validator: od
  },
  icon: {
    type: String
  }
}, {
  n: Bn,
  classes: sd
} = ne("badge"), ud = {
  key: 1
};
function dd(e, n) {
  var r = te("var-icon");
  return y(), V(
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
          Pe(e.$attrs, {
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
          )) : (y(), V(
            "span",
            ud,
            _(e.values),
            1
          ))],
          16
        ), [[Ga, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), G(e.$slots, "default")],
    2
  );
}
const lr = Q({
  render: dd,
  name: "VarBadge",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: ld,
  setup(e, n) {
    var {
      slots: r
    } = n, a = W(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Bn("position") + " " + Bn("--" + l), v = s ? Bn("dot") : null, f = i(), c = u ? Bn("icon") : null;
      return [Bn("--" + o), d, v, f, c];
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
        return Bn("dot--right");
      if (l && o.includes("left"))
        return Bn("dot--left");
    };
    return {
      n: Bn,
      classes: sd,
      values: t,
      contentClass: a
    };
  }
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
var vd = {
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
}, El = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Il = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function fd() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(El), {
    length: r
  } = Sn(Il);
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
  n: cd,
  classes: md
} = ne("bottom-navigation"), {
  n: $t
} = ne("bottom-navigation-item"), vo = $t("--right-half-space"), fo = $t("--left-half-space"), co = $t("--right-space"), pd = {
  type: "primary"
};
function hd(e, n) {
  var r = te("var-button");
  return y(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [G(e.$slots, "default"), e.$slots.fab ? (y(), me(
      r,
      Pe({
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
const Br = Q({
  render: hd,
  name: "VarBottomNavigation",
  components: {
    VarButton: nn
  },
  props: vd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = P(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = P({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = fd(), v = () => {
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
      !je(t.value) || (t.value < 0 ? D(e["onUpdate:active"], 0) : t.value > s.value - 1 && D(e["onUpdate:active"], s.value - 1));
    }, b = (k) => {
      t.value !== k && (e.onBeforeChange ? h(k) : T(k));
    }, h = (k) => {
      Promise.resolve(D(e.onBeforeChange, k)).then((A) => A && T(k));
    }, T = (k) => {
      D(e["onUpdate:active"], k), D(e.onChange, k);
    }, O = () => {
      var k = M();
      k.forEach((A) => {
        A.classList.remove(vo, fo, co);
      });
    }, w = (k) => {
      var A = M(), N = A.length, C = k % 2 === 0;
      A.forEach(($, L) => {
        S(C, $, L, N);
      });
    }, S = (k, A, N, C) => {
      var $ = N === C - 1;
      if (!k && $) {
        A.classList.add(co);
        return;
      }
      var L = N === C / 2 - 1, Y = N === C / 2;
      L ? A.classList.add(vo) : Y && A.classList.add(fo);
    }, M = () => Array.from(a.value.querySelectorAll("." + $t())), g = () => {
      D(e.onFabClick);
    }, E = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: b
    };
    return d(E), ae(() => s.value, v), ae(() => e.fabProps, (k) => {
      l.value = _t({}, pd, k);
    }, {
      immediate: !0,
      deep: !0
    }), Fe(() => {
      !r.fab || w(s.value);
    }), Ni(() => {
      O(), r.fab && w(s.value);
    }), {
      n: cd,
      classes: md,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: g,
      fabProps: l
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
var gd = {
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
function yd() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(El), {
    index: r
  } = Cn(Il);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: bd,
  classes: wd
} = ne("bottom-navigation-item"), Sd = {
  type: "danger",
  dot: !0
};
function Cd(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ge("ripple");
  return ke((y(), V(
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
    )) : J("v-if", !0), G(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (y(), me(
      a,
      Pe({
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
      [e.$slots.default ? J("v-if", !0) : (y(), V(
        Ve,
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
const Ar = Q({
  render: Cd,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: lr,
    VarIcon: Te
  },
  directives: {
    Ripple: Ue
  },
  props: gd,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = P({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = yd(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, p = (c = n.value) != null ? c : t.value;
      D(e.onClick, p), D(i.onToggle, p);
    };
    return o(d), ae(() => r.value, (c) => {
      a.value = c === !0 ? Sd : r.value;
    }, {
      immediate: !0
    }), {
      n: bd,
      classes: wd,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function kd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var $d = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: kd,
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
function mo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function po(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        mo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        mo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Td,
  classes: Od
} = ne("card"), Vd = 500, Pd = ["src", "alt"];
function Md(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ge("ripple");
  return ke((y(), V(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
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
      [G(e.$slots, "image", {}, () => [e.src ? (y(), V(
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
        Pd
      )) : J("v-if", !0)]), B(
        "div",
        {
          class: m(e.n("container"))
        },
        [G(e.$slots, "title", {}, () => [e.title ? (y(), V(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          _(e.title),
          3
        )) : J("v-if", !0)]), G(e.$slots, "subtitle", {}, () => [e.subtitle ? (y(), V(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          _(e.subtitle),
          3
        )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (y(), V(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          _(e.description),
          3
        )) : J("v-if", !0)]), e.$slots.extra ? (y(), V(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [G(e.$slots, "extra")],
          2
        )) : J("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (y(), V(
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
      ), e.showFloatingButtons ? (y(), V(
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
            onClick: Nn(e.close, ["stop"])
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
const zr = Q({
  render: Md,
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarButton: nn
  },
  props: $d,
  setup(e) {
    var n = P(null), r = P(null), a = P("auto"), t = P("auto"), i = P("100%"), o = P("100%"), l = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), v = P("0px"), f = P("0"), c = W(() => e.layout === "row"), p = P(!1), b = P(!1), {
      zIndex: h
    } = Ka(() => e.floating, 1);
    kt(() => e.floating, () => !c.value);
    var T = "auto", O = "auto", w = null, S = P(null), M = /* @__PURE__ */ function() {
      var k = po(function* () {
        clearTimeout(S.value), clearTimeout(w), S.value = null, S.value = setTimeout(/* @__PURE__ */ po(function* () {
          var {
            width: A,
            height: N,
            left: C,
            top: $
          } = n.value.getBoundingClientRect();
          a.value = we(A), t.value = we(N), i.value = a.value, o.value = t.value, l.value = we($), s.value = we(C), u.value = "fixed", T = l.value, O = s.value, p.value = !0, yield Tn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Vd : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), g = () => {
      clearTimeout(w), clearTimeout(S.value), S.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = O, v.value = "0px", f.value = "0", p.value = !1, w = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", O = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, E = () => {
      D(e["onUpdate:floating"], !1);
    };
    return ae(() => e.floating, (k) => {
      c.value || Me(() => {
        k ? M() : g();
      });
    }, {
      immediate: !0
    }), {
      n: Td,
      classes: Od,
      toSizeUnit: we,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: S,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: h,
      isRow: c,
      close: E,
      showFloatingButtons: p,
      floated: b
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
var Ed = {
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
  n: Id,
  classes: Nd
} = ne("cell");
function Dd(e, n) {
  var r = te("var-icon");
  return y(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (y(), V(
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
      ), e.$slots.description || e.description ? (y(), V(
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
    ), e.$slots.extra ? (y(), V(
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
const sr = Q({
  render: Dd,
  name: "VarCell",
  components: {
    VarIcon: Te
  },
  props: Ed,
  setup() {
    return {
      n: Id,
      classes: Nd
    };
  }
});
sr.install = function(e) {
  e.component(sr.name, sr);
};
var Bd = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Ad
} = ne("form-details"), zd = {
  key: 0
}, Ld = {
  key: 0
};
function Fd(e, n) {
  return y(), me(
    Le,
    {
      name: e.n()
    },
    {
      default: fe(() => [e.errorMessage || e.extraMessage ? (y(), V(
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
              default: fe(() => [e.errorMessage ? (y(), V(
                "div",
                zd,
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
              default: fe(() => [e.extraMessage ? (y(), V(
                "div",
                Ld,
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
  render: Fd,
  name: "VarFormDetails",
  props: Bd,
  setup: () => ({
    n: Ad
  })
});
He.install = function(e) {
  e.component(He.name, He);
};
var Rd = {
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
}, Nl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Dl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Ud() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Nl), {
    length: r
  } = Sn(Dl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Yd() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(Nl), {
    index: r
  } = Cn(Dl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
var Bl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function mn() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(Bl);
  return {
    bindForm: e,
    form: n
  };
}
function Wd() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Bl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Hd,
  classes: jd
} = ne("checkbox");
function Gd(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return y(), V(
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
      [ke((y(), V(
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
const ur = Q({
  render: Gd,
  name: "VarCheckbox",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: Rd,
  setup(e) {
    var n = P(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = P(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = Yd(), {
      form: l,
      bindForm: s
    } = mn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = cn(), c = (g) => {
      Me(() => {
        var {
          validateTrigger: E,
          rules: k,
          modelValue: A
        } = e;
        d(E, g, k, A);
      });
    }, p = (g) => {
      n.value = g;
      var {
        checkedValue: E,
        onChange: k
      } = e;
      D(e["onUpdate:modelValue"], n.value), D(k, n.value), c("onChange"), g === E ? i == null || i.onChecked(E) : i == null || i.onUnchecked(E);
    }, b = (g) => {
      var {
        disabled: E,
        readonly: k,
        checkedValue: A,
        uncheckedValue: N,
        onClick: C
      } = e;
      if (!(l != null && l.disabled.value || E) && (D(C, g), !(l != null && l.readonly.value || k))) {
        t.value = !0;
        var $ = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && $ || p(r.value ? N : A);
      }
    }, h = (g) => {
      var {
        checkedValue: E,
        uncheckedValue: k
      } = e;
      n.value = g.includes(E) ? E : k;
    }, T = () => {
      t.value = !1;
    }, O = () => {
      D(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, w = (g) => {
      var {
        checkedValue: E,
        uncheckedValue: k
      } = e, A = ![E, k].includes(g);
      A && (g = r.value ? k : E), p(g);
    }, S = () => v(e.rules, e.modelValue);
    ae(() => e.modelValue, (g) => {
      n.value = g;
    }, {
      immediate: !0
    });
    var M = {
      checkedValue: a,
      checked: r,
      sync: h,
      validate: S,
      resetValidation: f,
      reset: O,
      resetWithAnimation: T
    };
    return D(o, M), D(s, M), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Hd,
      classes: jd,
      handleClick: b,
      toggle: w,
      reset: O,
      validate: S,
      resetValidation: f
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
function qd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Kd = {
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
    validator: qd
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
  n: Xd,
  classes: Zd
} = ne("checkbox-group");
function Jd(e, n) {
  var r = te("var-form-details");
  return y(), V(
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
const Lr = Q({
  render: Jd,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: Kd,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = Ud(), {
      bindForm: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = W(() => l.value), f = (E) => {
      Me(() => {
        var {
          validateTrigger: k,
          rules: A,
          modelValue: N
        } = e;
        s(k, E, A, N);
      });
    }, c = (E) => {
      D(e["onUpdate:modelValue"], E), D(e.onChange, E), f("onChange");
    }, p = (E) => {
      var {
        modelValue: k
      } = e;
      k.includes(E) || c([...k, E]);
    }, b = (E) => {
      var {
        modelValue: k
      } = e;
      !k.includes(E) || c(k.filter((A) => A !== E));
    }, h = () => t.forEach((E) => {
      var {
        sync: k
      } = E;
      return k(e.modelValue);
    }), T = () => {
      t.forEach((E) => E.resetWithAnimation());
    }, O = () => {
      var E = t.map((A) => {
        var {
          checkedValue: N
        } = A;
        return N.value;
      }), k = eo(E);
      return T(), D(e["onUpdate:modelValue"], k), k;
    }, w = () => {
      var E = t.filter((A) => {
        var {
          checked: N
        } = A;
        return !N.value;
      }).map((A) => {
        var {
          checkedValue: N
        } = A;
        return N.value;
      }), k = eo(E);
      return T(), D(e["onUpdate:modelValue"], k), k;
    }, S = () => {
      D(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    ae(() => e.modelValue, h, {
      deep: !0
    }), ae(() => a.value, h);
    var g = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: b,
      validate: M,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return i(g), D(o, g), {
      errorMessage: l,
      n: Xd,
      classes: Zd,
      checkAll: O,
      inverseAll: w,
      reset: S,
      validate: M,
      resetValidation: d
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
function Qd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function xd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var _d = {
  type: {
    type: String,
    default: "default",
    validator: Qd
  },
  size: {
    type: String,
    default: "normal",
    validator: xd
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: _e(Tl, "name"),
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
  n: An,
  classes: ev
} = ne("chip");
function nv(e, n) {
  var r = te("var-icon");
  return y(), me(
    Le,
    {
      name: e.n("$-fade")
    },
    {
      default: fe(() => [B(
        "span",
        Pe({
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
        ), G(e.$slots, "right"), e.closable ? (y(), V(
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
const dr = Q({
  render: nv,
  name: "VarChip",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: _d,
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
      } = e, s = An(t ? "$--flex" : "$--inline-flex"), u = o ? An("plain") + " " + An("plain-" + i) : An("--" + i), d = l ? An("--round") : null;
      return [An("--" + a), s, u, d];
    });
    return {
      n: An,
      classes: ev,
      chipStyles: n,
      contentClass: r
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
function rv(e) {
  return ["row", "column"].includes(e);
}
var av = {
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
    validator: rv
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
}, Al = Symbol("ROW_BIND_COL_KEY"), zl = Symbol("ROW_COUNT_COL_KEY");
function tv() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Al), {
    length: r
  } = Sn(zl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function iv() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Al), {
    index: r
  } = Cn(zl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: Qa,
  classes: ov
} = ne("col");
function lv(e, n) {
  return y(), V(
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
const Fr = Q({
  render: lv,
  name: "VarCol",
  props: av,
  setup(e) {
    var n = P({
      left: 0,
      right: 0
    }), r = W(() => z(e.span)), a = W(() => z(e.offset)), {
      row: t,
      bindRow: i
    } = iv(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Di(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(Qa("--span-" + s + "-" + f)), v && d.push(Qa("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(Qa("--span-" + s + "-" + u));
      return d;
    };
    return ae([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), D(i, o), {
      n: Qa,
      classes: ov,
      padding: n,
      toNumber: z,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Ll = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Fl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function sv() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Ll), {
    length: r
  } = Sn(Fl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var uv = {
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
  n: dv
} = ne("collapse");
function vv(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Rr = Q({
  render: vv,
  name: "VarCollapse",
  props: uv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = sv(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, p) => o() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((b) => b !== c) : null, s = (c, p) => {
      var b = l(c, p);
      D(e["onUpdate:modelValue"], b), D(e.onChange, b);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: b
          } = p;
          return e.modelValue === b.value;
        });
      var c = r.filter((p) => {
        var {
          name: b
        } = p;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: p,
        name: b
      } = c;
      return b.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((c) => {
      var {
        index: p,
        name: b
      } = c;
      return b.value === void 0 ? e.modelValue.includes(p.value) : !1;
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
          var b = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, b);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), ae(() => n.value, () => Me().then(v)), ae(() => e.modelValue, () => Me().then(v)), {
      n: dv
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
function fv() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Ll), {
    index: r
  } = Cn(Fl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var cv = {
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
  n: mv,
  classes: pv
} = ne("collapse-item");
function hv(e, n) {
  var r = te("var-icon");
  return y(), V(
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
    ), [[Ga, e.show]])],
    2
  );
}
const Ur = Q({
  render: hv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Te
  },
  props: cv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = fv(), t = !0, i = P(null), o = P(!1), l = P(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = W(() => e.name), f = (w, S) => {
      s.value === void 0 || w && be(s.value) || S === l.value || (l.value = S, c(!0));
    }, c = (w) => {
      e.disabled || w || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Me(() => {
        var {
          offsetHeight: w
        } = i.value;
        i.value.style.height = 0 + "px", $n(() => {
          i.value.style.height = w + "px", t && Ct(() => {
            t && T();
          });
        });
      }));
    }, b = () => {
      t = !1;
    }, h = () => {
      if (!!i.value) {
        var {
          offsetHeight: w
        } = i.value;
        i.value.style.height = w + "px", $n(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, O = {
      index: n,
      name: v,
      init: f
    };
    return a(O), ae(l, (w) => {
      w ? p() : h();
    }), {
      n: mv,
      start: b,
      classes: pv,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: T
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var gv = {
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
  n: yv
} = ne("countdown"), ei = 1e3, ni = 60 * ei, ri = 60 * ni, ho = 24 * ri;
function bv(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default", fl(qs(e.timeData)), () => [he(
      _(e.showTime),
      1
    )])],
    2
  );
}
const Yr = Q({
  render: bv,
  name: "VarCountdown",
  props: gv,
  setup(e) {
    var n = P(0), r = P(!1), a = P(""), t = P(0), i = P(0), o = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, p) => {
      var b = Object.values(p), h = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (h.forEach((w, S) => {
        c.includes(w) ? c = c.replace(w, hr("" + b[S], 2, "0")) : b[S + 1] += b[S] * T[S];
      }), c.includes("S")) {
        var O = hr("" + b[b.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", O) : c.includes("SS") ? c = c.replace("SS", O.slice(0, 2)) : c = c.replace("S", O.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var p = Math.floor(c / ho), b = Math.floor(c % ho / ri), h = Math.floor(c % ri / ni), T = Math.floor(c % ni / ei), O = Math.floor(c % ei), w = {
        days: p,
        hours: b,
        minutes: h,
        seconds: T,
        milliseconds: O
      };
      o.value = w, D(e.onChange, o.value), a.value = l(e.format, w);
    }, u = () => {
      var {
        time: c,
        onEnd: p,
        autoStart: b
      } = e, h = Date.now();
      n.value || (n.value = h + z(c));
      var T = n.value - h;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        D(p);
        return;
      }
      (b || r.value) && (t.value = $n(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, uu(t.value), u();
    };
    return ae(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: yv,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Or = 9e15, ar = 1e9, ai = "0123456789abcdef", dt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", vt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ti = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Or,
  maxE: Or,
  crypto: !1
}, Rl, Mn, ve = !0, Tt = "[DecimalError] ", _n = Tt + "Invalid argument: ", Ul = Tt + "Precision limit exceeded", Yl = Tt + "crypto unavailable", Wl = "[object Decimal]", Ke = Math.floor, ze = Math.pow, wv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Sv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Cv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Hl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, bn = 1e7, ue = 7, kv = 9007199254740991, $v = dt.length - 1, ii = vt.length - 1, q = { toStringTag: Wl };
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
    throw Error(_n + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Tv(a, Xl(a, r)), a.precision = e, a.rounding = n, se(Mn == 2 || Mn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ve = !1, i = d.s * ze(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = We(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = ze(r, 1 / 3), e = Ke((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
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
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Vt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Ca(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return se(i, o.precision = r, o.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = Ca(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Vt(5, e)), t = Ca(i, 2, t, t, !0);
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
  return a !== -1 ? a === 0 ? n.isNeg() ? gn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? gn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = gn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
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
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = gn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= ii)
      return o = gn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ii)
      return o = gn(d, v + 4, f).times(0.5), o.s = u.s, o;
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
  if (ve = !1, l = v + c, o = Gn(u, l), a = n ? ft(d, l + 10) : Gn(e, l), s = $e(o, a, l, 1), La(s.d, t = v, f))
    do
      if (l += 10, o = Gn(u, l), a = n ? ft(d, l + 10) : Gn(e, l), s = $e(o, a, l, 1), !i) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = se(s, v + 1, 0));
        break;
      }
    while (La(s.d, t += 10, f));
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
        u[t] = bn - 1;
      --u[t], u[a] += bn;
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
  return oi(this);
};
q.naturalLogarithm = q.ln = function() {
  return Gn(this);
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
    n = (u[--t] = u[t] + d[t] + n) / bn | 0, u[t] %= bn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = Ot(u, a), ve ? se(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(_n + e);
  return r.d ? (n = jl(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return se(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Vv(a, Xl(a, r)), a.precision = e, a.rounding = n, se(Mn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
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
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = $e(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, se(Mn == 2 || Mn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Ke(d.e / ue) + Ke(e.e / ue), s = f.length, u = c.length, s < u && (i = f, f = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * f[t - a - 1] + n, i[t--] = l % bn | 0, n = l / bn | 0;
    i[t] = (i[t] + n) % bn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = Ot(i, r), ve ? se(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Li(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (rn(e, 0, ar), n === void 0 ? n = a.rounding : rn(n, 0, 8), se(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = On(a, !0) : (rn(e, 0, ar), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e + 1, n), r = On(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = On(t) : (rn(e, 0, ar), n === void 0 ? n = i.rounding : rn(n, 0, 8), a = se(new i(t), e + t.e + 1, n), r = On(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, p = c.d, b = c.constructor;
  if (!p)
    return new b(c);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), i = n.e = jl(p) - c.e - 1, o = i % ue, n.d[0] = ze(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new b(e), !l.isInt() || l.lt(u))
      throw Error(_n + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (ve = !1, l = new b(We(p)), d = b.precision, b.precision = i = p.length * ue * 2; v = $e(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = $e(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = $e(u, a, i, 1).minus(c).abs().cmp($e(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], b.precision = d, ve = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Li(this, 16, e, n);
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
  return Li(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(ze(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return se(l, a, i);
  if (n = Ke(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= kv)
    return t = Gl(s, l, r, a), e.s < 0 ? new s(1).div(t) : se(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? Ke(u * (Math.log("0." + We(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (ve = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = oi(e.times(Gn(l, a + r)), a), t.d && (t = se(t, a + 5, 1), La(t.d, a, i) && (n = a + 10, t = se(oi(e.times(Gn(l, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = se(t, a + 1, 0)))), t.s = o, ve = !0, s.rounding = i, se(t, a, i));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = On(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (rn(e, 1, ar), n === void 0 ? n = t.rounding : rn(n, 0, 8), a = se(new t(a), e, n), r = On(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (rn(e, 1, ar), n === void 0 ? n = a.rounding : rn(n, 0, 8)), se(new a(r), e, n);
};
q.toString = function() {
  var e = this, n = e.constructor, r = On(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
q.truncated = q.trunc = function() {
  return se(new this.constructor(this), this.e + 1, 1);
};
q.valueOf = q.toJSON = function() {
  var e = this, n = e.constructor, r = On(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function We(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = ue - a.length, r && (i += Ln(r)), i += a;
    o = e[n], a = o + "", r = ue - a.length, r && (i += Ln(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function rn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(_n + e);
}
function La(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = ze(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function at(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += ai.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Tv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Vt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ca(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, p, b, h, T, O, w, S, M, g, E, k, A, N, C, $, L = a.constructor, Y = a.s == t.s ? 1 : -1, j = a.d, F = t.d;
    if (!j || !j[0] || !F || !F[0])
      return new L(
        !a.s || !t.s || (j ? F && j[0] == F[0] : !F) ? NaN : j && j[0] == 0 || !F ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = bn, c = ue, d = Ke(a.e / c) - Ke(t.e / c)), C = F.length, A = j.length, T = new L(Y), O = T.d = [], v = 0; F[v] == (j[v] || 0); v++)
      ;
    if (F[v] > (j[v] || 0) && d--, i == null ? (g = i = L.precision, o = L.rounding) : l ? g = i + (a.e - t.e) + 1 : g = i, g < 0)
      O.push(1), p = !0;
    else {
      if (g = g / c + 2 | 0, v = 0, C == 1) {
        for (f = 0, F = F[0], g++; (v < A || f) && g--; v++)
          E = f * s + (j[v] || 0), O[v] = E / F | 0, f = E % F | 0;
        p = f || v < A;
      } else {
        for (f = s / (F[0] + 1) | 0, f > 1 && (F = e(F, f, s), j = e(j, f, s), C = F.length, A = j.length), k = C, w = j.slice(0, C), S = w.length; S < C; )
          w[S++] = 0;
        $ = F.slice(), $.unshift(0), N = F[0], F[1] >= s / 2 && ++N;
        do
          f = 0, u = n(F, w, C, S), u < 0 ? (M = w[0], C != S && (M = M * s + (w[1] || 0)), f = M / N | 0, f > 1 ? (f >= s && (f = s - 1), b = e(F, f, s), h = b.length, S = w.length, u = n(b, w, h, S), u == 1 && (f--, r(b, C < h ? $ : F, h, s))) : (f == 0 && (u = f = 1), b = F.slice()), h = b.length, h < S && b.unshift(0), r(w, b, S, s), u == -1 && (S = w.length, u = n(F, w, C, S), u < 1 && (f++, r(w, C < S ? $ : F, S, s))), S = w.length) : u === 0 && (f++, w = [0]), O[v++] = f, u && w[0] ? w[S++] = j[k] || 0 : (w = [j[k]], S = 1);
        while ((k++ < A || w[0] !== void 0) && g--);
        p = w[0] !== void 0;
      }
      O[0] || O.shift();
    }
    if (c == 1)
      T.e = d, Rl = p;
    else {
      for (v = 1, f = O[0]; f >= 10; f /= 10)
        v++;
      T.e = v + d * c - 1, se(T, l ? i + T.e + 1 : i, o, p);
    }
    return T;
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
        i += ue, o = n, d = v[f = 0], s = d / ze(10, t - o - 1) % 10 | 0;
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
        i %= ue, o = i - ue + t, s = o < 0 ? 0 : d / ze(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (o < 0 ? d : d % ze(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / ze(10, t - o) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = ze(10, (ue - n % ue) % ue), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (i == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = ze(10, ue - i), v[f] = o > 0 ? (d / ze(10, t - o) % ze(10, o) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (i = 1, o = v[0]; o >= 10; o /= 10)
              i++;
            for (o = v[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, v[0] == bn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != bn)
              break;
            v[f--] = 0, l = 1;
          }
      for (i = v.length; v[--i] === 0; )
        v.pop();
    }
  return ve && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function On(e, n, r) {
  if (!e.isFinite())
    return Kl(e);
  var a, t = e.e, i = We(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Ln(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Ln(-t - 1) + i, r && (a = r - o) > 0 && (i += Ln(a))) : t >= o ? (i += Ln(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Ln(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Ln(a))), i;
}
function Ot(e, n) {
  var r = e[0];
  for (n *= ue; r >= 10; r /= 10)
    n++;
  return n;
}
function ft(e, n, r) {
  if (n > $v)
    throw ve = !0, r && (e.precision = r), Error(Ul);
  return se(new e(dt), n, 1, !0);
}
function gn(e, n, r) {
  if (n > ii)
    throw Error(Ul);
  return se(new e(vt), n, r, !0);
}
function jl(e) {
  var n = e.length - 1, r = n * ue + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Ln(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Gl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / ue + 4);
  for (ve = !1; ; ) {
    if (r % 2 && (i = i.times(n), yo(i.d, o) && (t = !0)), r = Ke(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), yo(n.d, o);
  }
  return ve = !0, i;
}
function go(e) {
  return e.d[e.d.length - 1] & 1;
}
function ql(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function oi(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ve = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = se(i.times(e), s, 1), r = r.times(++d), l = o.plus($e(i, r, s, 1)), We(l.d).slice(0, s) === We(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = se(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && La(o.d, s - a, c, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return se(o, f.precision = p, c, ve = !0);
      else
        return f.precision = p, o;
    }
    o = l;
  }
}
function Gn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, p = 10, b = e, h = b.d, T = b.constructor, O = T.rounding, w = T.precision;
  if (b.s < 0 || !h || !h[0] || !b.e && h[0] == 1 && h.length == 1)
    return new T(h && !h[0] ? -1 / 0 : b.s != 1 ? NaN : h ? 0 : b);
  if (n == null ? (ve = !1, d = w) : d = n, T.precision = d += p, r = We(h), a = r.charAt(0), Math.abs(i = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = We(b.d), a = r.charAt(0), c++;
    i = b.e, a > 1 ? (b = new T("0." + r), i++) : b = new T(a + "." + r.slice(1));
  } else
    return u = ft(T, d + 2, w).times(i + ""), b = Gn(new T(a + "." + r.slice(1)), d - p).plus(u), T.precision = w, n == null ? se(b, w, O, ve = !0) : b;
  for (v = b, s = o = b = $e(b.minus(1), b.plus(1), d, 1), f = se(b.times(b), d, 1), t = 3; ; ) {
    if (o = se(o.times(f), d, 1), u = s.plus($e(o, new T(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(ft(T, d + 2, w).times(i + ""))), s = $e(s, new T(c), d, 1), n == null)
        if (La(s.d, d - p, O, l))
          T.precision = d += p, u = o = b = $e(v.minus(1), v.plus(1), d, 1), f = se(b.times(b), d, 1), t = l = 1;
        else
          return se(s, T.precision = w, O, ve = !0);
      else
        return T.precision = w, s;
    s = u, t += 2;
  }
}
function Kl(e) {
  return String(e.s * e.s / 0);
}
function li(e, n) {
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
function Ov(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Hl.test(n))
      return li(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Sv.test(n))
    r = 16, n = n.toLowerCase();
  else if (wv.test(n))
    r = 2;
  else if (Cv.test(n))
    r = 8;
  else
    throw Error(_n + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Gl(a, new a(r), i, i * 2)), u = at(n, r, bn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Ot(u, d), e.d = u, ve = !1, o && (e = $e(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : qn.pow(2, s))), ve = !0, e);
}
function Vv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ca(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Vt(5, r)), n = Ca(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function Ca(e, n, r, a, t) {
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
function Xl(e, n) {
  var r, a = n.s < 0, t = gn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return Mn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Mn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return Mn = go(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Mn = go(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Li(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor, p = r !== void 0;
  if (p ? (rn(r, 1, ar), a === void 0 ? a = c.rounding : rn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Kl(e);
  else {
    for (d = On(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = at(On(f), 10, t), f.e = f.d.length), v = at(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = $e(e, f, r, a, 0, t), v = e.d, i = e.e, u = Rl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += ai.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = at(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += ai.charAt(v[o]);
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
function yo(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Pv(e) {
  return new this(e).abs();
}
function Mv(e) {
  return new this(e).acos();
}
function Ev(e) {
  return new this(e).acosh();
}
function Iv(e, n) {
  return new this(e).plus(n);
}
function Nv(e) {
  return new this(e).asin();
}
function Dv(e) {
  return new this(e).asinh();
}
function Bv(e) {
  return new this(e).atan();
}
function Av(e) {
  return new this(e).atanh();
}
function zv(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = gn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? gn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = gn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan($e(e, n, i, 1)), n = gn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan($e(e, n, i, 1)), r;
}
function Lv(e) {
  return new this(e).cbrt();
}
function Fv(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function Rv(e, n, r) {
  return new this(e).clamp(n, r);
}
function Uv(e) {
  if (!e || typeof e != "object")
    throw Error(Tt + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    ar,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Or,
    0,
    "toExpPos",
    0,
    Or,
    "maxE",
    0,
    Or,
    "minE",
    -Or,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = ti[r]), (a = e[r]) !== void 0)
      if (Ke(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(_n + r + ": " + a);
  if (r = "crypto", t && (this[r] = ti[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Yl);
      else
        this[r] = !1;
    else
      throw Error(_n + r + ": " + a);
  return this;
}
function Yv(e) {
  return new this(e).cos();
}
function Wv(e) {
  return new this(e).cosh();
}
function Zl(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, bo(i)) {
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
      return li(u, i.toString());
    } else if (s !== "string")
      throw Error(_n + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Hl.test(i) ? li(u, i) : Ov(u, i);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Uv, t.clone = Zl, t.isDecimal = bo, t.abs = Pv, t.acos = Mv, t.acosh = Ev, t.add = Iv, t.asin = Nv, t.asinh = Dv, t.atan = Bv, t.atanh = Av, t.atan2 = zv, t.cbrt = Lv, t.ceil = Fv, t.clamp = Rv, t.cos = Yv, t.cosh = Wv, t.div = Hv, t.exp = jv, t.floor = Gv, t.hypot = qv, t.ln = Kv, t.log = Xv, t.log10 = Jv, t.log2 = Zv, t.max = Qv, t.min = xv, t.mod = _v, t.mul = ef, t.pow = nf, t.random = rf, t.round = af, t.sign = tf, t.sin = of, t.sinh = lf, t.sqrt = sf, t.sub = uf, t.sum = df, t.tan = vf, t.tanh = ff, t.trunc = cf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Hv(e, n) {
  return new this(e).div(n);
}
function jv(e) {
  return new this(e).exp();
}
function Gv(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function qv() {
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
function bo(e) {
  return e instanceof qn || e && e.toStringTag === Wl || !1;
}
function Kv(e) {
  return new this(e).ln();
}
function Xv(e, n) {
  return new this(e).log(n);
}
function Zv(e) {
  return new this(e).log(2);
}
function Jv(e) {
  return new this(e).log(10);
}
function Qv() {
  return ql(this, arguments, "lt");
}
function xv() {
  return ql(this, arguments, "gt");
}
function _v(e, n) {
  return new this(e).mod(n);
}
function ef(e, n) {
  return new this(e).mul(n);
}
function nf(e, n) {
  return new this(e).pow(n);
}
function rf(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : rn(e, 1, ar), a = Math.ceil(e / ue), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(Yl);
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
function af(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function tf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function of(e) {
  return new this(e).sin();
}
function lf(e) {
  return new this(e).sinh();
}
function sf(e) {
  return new this(e).sqrt();
}
function uf(e, n) {
  return new this(e).sub(n);
}
function df() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ve = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ve = !0, se(r, this.precision, this.rounding);
}
function vf(e) {
  return new this(e).tan();
}
function ff(e) {
  return new this(e).tanh();
}
function cf(e) {
  return se(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var qn = q.constructor = Zl(ti);
dt = new qn(dt);
vt = new qn(vt);
var mf = {
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
  n: pf,
  classes: hf
} = ne("counter"), wo = 100, So = 600, gf = ["inputmode", "readonly", "disabled"];
function yf(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return y(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      Pe({
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
        gf
      ), [[Ks, e.inputValue]]), ke(ee(
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
const Wr = Q({
  render: yf,
  name: "VarCounter",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: mf,
  setup(e) {
    var n = P(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = mn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = cn(), {
      readonly: f,
      disabled: c
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), b = (F) => {
      Me(() => {
        var {
          validateTrigger: Z,
          rules: H,
          modelValue: X
        } = e;
        u(Z, F, H, X);
      });
    }, h = () => {
      var {
        min: F
      } = e;
      D(e["onUpdate:modelValue"], F != null ? z(F) : 0), v();
    }, T = {
      reset: h,
      validate: p,
      resetValidation: v
    }, O = W(() => {
      var {
        max: F,
        modelValue: Z
      } = e;
      return F != null && z(Z) >= z(F);
    }), w = W(() => {
      var {
        min: F,
        modelValue: Z
      } = e;
      return F != null && z(Z) <= z(F);
    }), S = (F) => {
      var {
        decimalLength: Z,
        max: H,
        min: X
      } = e, I = z(F);
      return H != null && I > z(H) && (I = z(H)), X != null && I < z(X) && (I = z(X)), F = String(I), Z != null && (F = I.toFixed(z(Z))), F;
    }, M = (F) => {
      var {
        lazyChange: Z,
        onBeforeChange: H
      } = e, {
        value: X
      } = F.target, I = S(X);
      Z ? D(H, z(I), j) : Y(I), b("onInputChange");
    }, g = () => {
      var {
        disabled: F,
        readonly: Z,
        disableDecrement: H,
        decrementButton: X,
        lazyChange: I,
        step: R,
        modelValue: U,
        onDecrement: x,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || F || Z || H || !X) && !w.value) {
        var le = new qn(z(U)).minus(new qn(z(R))).toString(), de = S(le), Se = z(de);
        D(x, Se), I ? D(ie, Se, j) : (Y(de), b("onDecrement"));
      }
    }, E = () => {
      var {
        disabled: F,
        readonly: Z,
        disableIncrement: H,
        incrementButton: X,
        lazyChange: I,
        step: R,
        modelValue: U,
        onIncrement: x,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || F || Z || H || !X) && !O.value) {
        var le = new qn(z(U)).plus(new qn(z(R))).toString(), de = S(le), Se = z(de);
        D(x, Se), I ? D(ie, Se, j) : (Y(de), b("onIncrement"));
      }
    }, k = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (i = window.setTimeout(() => {
        L();
      }, So));
    }, A = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (t = window.setTimeout(() => {
        $();
      }, So));
    }, N = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, C = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, $ = () => {
      r = window.setTimeout(() => {
        E(), $();
      }, wo);
    }, L = () => {
      a = window.setTimeout(() => {
        g(), L();
      }, wo);
    }, Y = (F) => {
      n.value = F;
      var Z = z(F);
      D(e["onUpdate:modelValue"], Z);
    }, j = (F) => {
      Y(S(String(F))), b("onLazyChange");
    };
    return D(o, T), ae(() => e.modelValue, (F) => {
      Y(S(String(F))), D(e.onChange, z(F));
    }), Y(S(String(e.modelValue))), {
      n: pf,
      classes: hf,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: O,
      isMin: w,
      validate: p,
      reset: h,
      resetValidation: v,
      handleChange: M,
      decrement: g,
      increment: E,
      pressDecrement: k,
      pressIncrement: A,
      releaseDecrement: N,
      releaseIncrement: C,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var Jl = 60, Ql = Jl * 60, xl = Ql * 24, bf = xl * 7, ka = 1e3, Rt = Jl * ka, Co = Ql * ka, wf = xl * ka, Sf = bf * ka, Fi = "millisecond", Vr = "second", Pr = "minute", Mr = "hour", Fn = "day", tt = "week", hn = "month", _l = "quarter", Rn = "year", Er = "date", Cf = "YYYY-MM-DDTHH:mm:ssZ", ko = "Invalid Date", kf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, $f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Tf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var si = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Of = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + si(t, 2, "0") + ":" + si(i, 2, "0");
}, Vf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, hn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), hn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Pf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Mf = function(n) {
  var r = {
    M: hn,
    y: Rn,
    w: tt,
    d: Fn,
    D: Er,
    h: Mr,
    m: Pr,
    s: Vr,
    ms: Fi,
    Q: _l
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Ef = function(n) {
  return n === void 0;
};
const If = {
  s: si,
  z: Of,
  m: Vf,
  a: Pf,
  p: Mf,
  u: Ef
};
var Ba = "en", vr = {};
vr[Ba] = Tf;
var Ri = function(n) {
  return n instanceof Pt;
}, ct = function e(n, r, a) {
  var t;
  if (!n)
    return Ba;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    vr[i] && (t = i), r && (vr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    vr[l] = n, t = l;
  }
  return !a && t && (Ba = t), t || !a && Ba;
}, re = function(n, r) {
  if (Ri(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Pt(a);
}, Nf = function(n, r) {
  return re(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Ce = If;
Ce.l = ct;
Ce.i = Ri;
Ce.w = Nf;
var Df = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Ce.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(kf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Pt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = ct(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Df(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Ce;
  }, n.isValid = function() {
    return this.$d.toString() !== ko;
  }, n.isSame = function(a, t) {
    var i = re(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return re(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < re(a);
  }, n.$g = function(a, t, i) {
    return Ce.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = Ce.u(t) ? !0 : t, l = Ce.p(a), s = function(T, O) {
      var w = Ce.w(i.$u ? Date.UTC(i.$y, O, T) : new Date(i.$y, O, T), i);
      return o ? w : w.endOf(Fn);
    }, u = function(T, O) {
      var w = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return Ce.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? w : S).slice(O)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Rn:
        return o ? s(1, 0) : s(31, 11);
      case hn:
        return o ? s(1, v) : s(0, v + 1);
      case tt: {
        var p = this.$locale().weekStart || 0, b = (d < p ? d + 7 : d) - p;
        return s(o ? f - b : f + (6 - b), v);
      }
      case Fn:
      case Er:
        return u(c + "Hours", 0);
      case Mr:
        return u(c + "Minutes", 1);
      case Pr:
        return u(c + "Seconds", 2);
      case Vr:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = Ce.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Fn] = l + "Date", i[Er] = l + "Date", i[hn] = l + "Month", i[Rn] = l + "FullYear", i[Mr] = l + "Hours", i[Pr] = l + "Minutes", i[Vr] = l + "Seconds", i[Fi] = l + "Milliseconds", i)[o], u = o === Fn ? this.$D + (t - this.$W) : t;
    if (o === hn || o === Rn) {
      var d = this.clone().set(Er, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Er, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[Ce.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = Ce.p(t), s = function(f) {
      var c = re(i);
      return Ce.w(c.date(c.date() + Math.round(f * a)), i);
    };
    if (l === hn)
      return this.set(hn, this.$M + a);
    if (l === Rn)
      return this.set(Rn, this.$y + a);
    if (l === Fn)
      return s(1);
    if (l === tt)
      return s(7);
    var u = (o = {}, o[Pr] = Rt, o[Mr] = Co, o[Vr] = ka, o)[l] || 1, d = this.$d.getTime() + a * u;
    return Ce.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || ko;
    var o = a || Cf, l = Ce.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, p = function(w, S, M, g) {
      return w && (w[S] || w(t, o)) || M[S].slice(0, g);
    }, b = function(w) {
      return Ce.s(s % 12 || 12, w, "0");
    }, h = c || function(O, w, S) {
      var M = O < 12 ? "AM" : "PM";
      return S ? M.toLowerCase() : M;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: Ce.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: Ce.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, v, 2),
      ddd: p(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: Ce.s(s, 2, "0"),
      h: b(1),
      hh: b(2),
      a: h(s, u, !0),
      A: h(s, u, !1),
      m: String(u),
      mm: Ce.s(u, 2, "0"),
      s: String(this.$s),
      ss: Ce.s(this.$s, 2, "0"),
      SSS: Ce.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace($f, function(O, w) {
      return w || T[O] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = Ce.p(t), s = re(a), u = (s.utcOffset() - this.utcOffset()) * Rt, d = this - s, v = Ce.m(this, s);
    return v = (o = {}, o[Rn] = v / 12, o[hn] = v, o[_l] = v / 3, o[tt] = (d - u) / Sf, o[Fn] = (d - u) / wf, o[Mr] = d / Co, o[Pr] = d / Rt, o[Vr] = d / ka, o)[l] || d, i ? v : Ce.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(hn).$D;
  }, n.$locale = function() {
    return vr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = ct(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return Ce.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), es = Pt.prototype;
re.prototype = es;
[["$ms", Fi], ["$s", Vr], ["$m", Pr], ["$H", Mr], ["$W", Fn], ["$M", hn], ["$y", Rn], ["$D", Er]].forEach(function(e) {
  es[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
re.extend = function(e, n) {
  return e.$i || (e(n, Pt, re), e.$i = !0), re;
};
re.locale = ct;
re.isDayjs = Ri;
re.unix = function(e) {
  return re(e * 1e3);
};
re.en = vr[Ba];
re.Ls = vr;
re.p = {};
const ns = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, rs = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Bf(e) {
  return ["date", "month"].includes(e);
}
var it = [{
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
}], Da = [{
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
}], Af = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Bf
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
  n: zf
} = ne("picker-header");
function Lf(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return y(), V(
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
          default: fe(() => [(y(), V(
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
const as = Q({
  render: Lf,
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
      n: zf,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
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
re.extend(ns);
re.extend(rs);
var {
  n: xa,
  classes: Ff
} = ne("month-picker"), {
  n: _a
} = ne("date-picker");
function Rf(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return y(), V(
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
          default: fe(() => [(y(), V("ul", {
            key: e.panelKey
          }, [(y(!0), V(
            Ve,
            null,
            De(e.MONTH_LIST, (t) => (y(), V("li", {
              key: t.index
            }, [ee(
              a,
              Pe({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, ui({}, e.buttonProps(t.index)), {
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
const Uf = Q({
  render: Rf,
  name: "MonthPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: as
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
    } = n, [a, t] = e.current.split("-"), i = P(!1), o = P(0), l = P(null), s = Ne({
      left: !1,
      right: !1
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), v = (O) => {
      var w, S;
      return (w = (S = Ye.value.datePickerMonthDict) == null ? void 0 : S[O].abbr) != null ? w : "";
    }, f = (O) => {
      var {
        preview: {
          previewYear: w
        },
        componentProps: {
          min: S,
          max: M
        }
      } = e, g = !0, E = !0, k = w + "-" + O;
      return M && (g = re(k).isSameOrBefore(re(M), "month")), S && (E = re(k).isSameOrAfter(re(S), "month")), g && E;
    }, c = (O) => {
      var {
        choose: {
          chooseMonths: w,
          chooseDays: S,
          chooseRangeMonth: M
        },
        componentProps: {
          type: g,
          range: E
        }
      } = e;
      if (E) {
        if (!M.length)
          return !1;
        var k = re(O).isSameOrBefore(re(M[1]), "month"), A = re(O).isSameOrAfter(re(M[0]), "month");
        return k && A;
      }
      return g === "month" ? w.includes(O) : S.some((N) => N.includes(O));
    }, p = (O) => {
      var {
        choose: {
          chooseMonth: w
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: M,
          color: g,
          multiple: E,
          range: k
        }
      } = e, A = S + "-" + O, N = () => k || E ? c(A) : (w == null ? void 0 : w.index) === O && u.value, C = () => f(O) ? M ? !M(A) : !1 : !0, $ = C(), L = () => $ ? !0 : k || E ? !c(A) : !u.value || (w == null ? void 0 : w.index) !== O, Y = () => d.value && t === O && e.componentProps.showCurrent ? (k || E || u.value) && $ ? !0 : k || E ? !c(A) : u.value ? (w == null ? void 0 : w.index) !== t : !0 : !1, j = () => $ ? "" : Y() ? g != null ? g : "" : N() ? "" : _a() + "-color-cover", F = j().startsWith(_a());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : g,
        textColor: F ? "" : j(),
        [_a() + "-color-cover"]: F,
        class: Ff(xa("button"), [$, xa("button--disabled")])
      };
    }, b = (O, w) => {
      var S = w.currentTarget;
      S.classList.contains(xa("button--disabled")) || r("choose-month", O);
    }, h = (O) => {
      i.value = O === "prev", o.value += O === "prev" ? -1 : 1, r("check-preview", "year", O);
    }, T = (O) => {
      l.value.checkDate(O);
    };
    return ae(() => e.preview.previewYear, (O) => {
      var {
        componentProps: {
          min: w,
          max: S
        }
      } = e;
      S && (s.right = !re("" + (z(O) + 1)).isSameOrBefore(re(S), "year")), w && (s.left = !re("" + (z(O) - 1)).isSameOrAfter(re(w), "year"));
    }, {
      immediate: !0
    }), {
      n: xa,
      nDate: _a,
      pack: Ye,
      MONTH_LIST: it,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: h
    };
  }
});
var {
  n: $o,
  classes: Yf
} = ne("year-picker"), Wf = ["onClick"];
function Hf(e, n) {
  return y(), V(
    "ul",
    {
      class: m(e.n())
    },
    [(y(!0), V(
      Ve,
      null,
      De(e.yearList, (r) => (y(), V(
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
        Wf
      ))),
      128
    ))],
    2
  );
}
const jf = Q({
  render: Hf,
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
      var i = document.querySelector("." + $o("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: $o,
      classes: Yf,
      yearList: a,
      chooseYear: t,
      toNumber: z
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
re.extend(ns);
re.extend(rs);
var {
  n: Tr,
  classes: Gf
} = ne("day-picker"), {
  n: et
} = ne("date-picker");
function qf(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return y(), V(
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
          default: fe(() => [(y(), V("div", {
            key: e.panelKey
          }, [B(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(y(!0), V(
              Ve,
              null,
              De(e.sortWeekList, (t) => (y(), V(
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
            [(y(!0), V(
              Ve,
              null,
              De(e.days, (t, i) => (y(), V("li", {
                key: i
              }, [ee(
                a,
                Pe({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, di({}, e.buttonProps(t)), {
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
const Kf = Q({
  render: qf,
  name: "DayPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: as
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
    } = n, [a, t, i] = e.current.split("-"), o = P([]), l = P(!1), s = P(0), u = P(null), d = Ne({
      left: !1,
      right: !1
    }), v = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = W(() => {
      var k;
      return e.choose.chooseYear === e.preview.previewYear && ((k = e.choose.chooseMonth) == null ? void 0 : k.index) === e.preview.previewMonth.index;
    }), c = W(() => {
      var k = Da.findIndex((A) => A.index === e.componentProps.firstDayOfWeek);
      return k === -1 || k === 0 ? Da : Da.slice(k).concat(Da.slice(0, k));
    }), p = (k) => {
      var A, N;
      return (A = (N = Ye.value.datePickerWeekDict) == null ? void 0 : N[k].abbr) != null ? A : "";
    }, b = (k) => k > 0 ? k : "", h = () => {
      var {
        preview: {
          previewMonth: k,
          previewYear: A
        }
      } = e, N = re(A + "-" + k.index).daysInMonth(), C = re(A + "-" + k.index + "-01").day(), $ = c.value.findIndex((L) => L.index === "" + C);
      o.value = [...Array($).fill(-1), ...Array.from(Array(N + 1).keys())].filter((L) => L);
    }, T = () => {
      var {
        preview: {
          previewYear: k,
          previewMonth: A
        },
        componentProps: {
          max: N,
          min: C
        }
      } = e;
      if (N) {
        var $ = k + "-" + (z(A.index) + 1);
        d.right = !re($).isSameOrBefore(re(N), "month");
      }
      if (C) {
        var L = k + "-" + (z(A.index) - 1);
        d.left = !re(L).isSameOrAfter(re(C), "month");
      }
    }, O = (k) => {
      var {
        preview: {
          previewYear: A,
          previewMonth: N
        },
        componentProps: {
          min: C,
          max: $
        }
      } = e, L = !0, Y = !0, j = A + "-" + N.index + "-" + k;
      return $ && (L = re(j).isSameOrBefore(re($), "day")), C && (Y = re(j).isSameOrAfter(re(C), "day")), L && Y;
    }, w = (k) => {
      var {
        choose: {
          chooseDays: A,
          chooseRangeDay: N
        },
        componentProps: {
          range: C
        }
      } = e;
      if (C) {
        if (!N.length)
          return !1;
        var $ = re(k).isSameOrBefore(re(N[1]), "day"), L = re(k).isSameOrAfter(re(N[0]), "day");
        return $ && L;
      }
      return A.includes(k);
    }, S = (k) => {
      if (k < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Tr("button")
        };
      var {
        choose: {
          chooseDay: A
        },
        preview: {
          previewYear: N,
          previewMonth: C
        },
        componentProps: {
          allowedDates: $,
          color: L,
          multiple: Y,
          range: j
        }
      } = e, F = N + "-" + C.index + "-" + k, Z = () => j || Y ? w(F) : z(A) === k && f.value, H = () => O(k) ? $ ? !$(F) : !1 : !0, X = H(), I = () => X ? !0 : j || Y ? !w(F) : !f.value || z(A) !== k, R = () => v.value && z(i) === k && e.componentProps.showCurrent ? (j || Y || f.value) && X ? !0 : j || Y ? !w(F) : f.value ? A !== i : !0 : !1, U = () => X ? "" : R() ? L != null ? L : "" : Z() ? "" : et() + "-color-cover", x = U().startsWith(et());
      return {
        text: I(),
        outline: R(),
        textColor: x ? "" : U(),
        [et() + "-color-cover"]: x,
        class: Gf(Tr("button"), Tr("button--usable"), [X, Tr("button--disabled")])
      };
    }, M = (k) => {
      l.value = k === "prev", s.value += k === "prev" ? -1 : 1, r("check-preview", "month", k);
    }, g = (k, A) => {
      var N = A.currentTarget;
      N.classList.contains(Tr("button--disabled")) || r("choose-day", k);
    }, E = (k) => {
      u.value.checkDate(k);
    };
    return Fe(() => {
      h(), T();
    }), ae(() => e.preview, () => {
      h(), T();
    }), {
      n: Tr,
      nDate: et,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: E,
      filterDay: b,
      getDayAbbr: p,
      checkDate: M,
      chooseDay: g,
      buttonProps: S
    };
  }
});
var {
  n: Xf,
  classes: Zf
} = ne("date-picker");
function Jf(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return y(), V(
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
              return [e.type === "month" ? (y(), V("div", {
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
              )])])) : (y(), V("div", {
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
              )]) : G(e.$slots, "date", fl(Pe({
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
          default: fe(() => [e.getPanelType === "year" ? (y(), me(
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
const Hr = Q({
  render: Jf,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Uf,
    YearPickerPanel: jf,
    DayPickerPanel: Kf
  },
  props: Af,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = re().format("YYYY-MM-D"), [o, l] = i.split("-"), s = it.find((oe) => oe.index === l), u = P(!1), d = P(!1), v = P(!0), f = P(), c = P(), p = P(), b = P(s), h = P(o), T = P(!1), O = P([]), w = P([]), S = P([]), M = P([]), g = P(null), E = P(null), k = Ne({
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
      chooseMonths: O.value,
      chooseDays: w.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: M.value
    })), N = W(() => ({
      previewMonth: b.value,
      previewYear: h.value
    })), C = W(() => {
      var {
        multiple: oe,
        range: pe
      } = e;
      if (pe)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var ce = "";
      if (f.value) {
        var ge, ye;
        ce = (ge = (ye = Ye.value.datePickerMonthDict) == null ? void 0 : ye[f.value.index].name) != null ? ge : "";
      }
      return oe ? "" + O.value.length + Ye.value.datePickerSelected : ce;
    }), $ = W(() => {
      var oe, pe, ce, ge, {
        multiple: ye,
        range: Be
      } = e;
      if (Be) {
        var Xe = M.value.map((zt) => re(zt).format("YYYY-MM-DD"));
        return Xe.length ? Xe[0] + " ~ " + Xe[1] : "";
      }
      if (ye)
        return "" + w.value.length + Ye.value.datePickerSelected;
      if (!c.value || !f.value || !p.value)
        return "";
      var ln = re(c.value + "-" + f.value.index + "-" + p.value).day(), $r = Da.find((zt) => zt.index === "" + ln), Qi = (oe = (pe = Ye.value.datePickerWeekDict) == null ? void 0 : pe[$r.index].name) != null ? oe : "", Ws = (ce = (ge = Ye.value.datePickerMonthDict) == null ? void 0 : ge[f.value.index].name) != null ? ce : "", Hs = hr(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + Hs + " " + Qi.slice(0, 3) : Qi.slice(0, 3) + ", " + Ws.slice(0, 3) + " " + p.value;
    }), L = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(L.value)), j = W(() => {
      var oe, pe, ce, ge, ye = re(c.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + p.value).day(), Be = p.value ? hr(p.value, 2, "0") : "";
      return {
        week: "" + ye,
        year: (pe = c.value) != null ? pe : "",
        month: (ce = (ge = f.value) == null ? void 0 : ge.index) != null ? ce : "",
        date: Be
      };
    }), F = W(() => A.value.chooseRangeDay.map((oe) => re(oe).format("YYYY-MM-DD"))), Z = W(() => c.value === h.value), H = W(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === b.value.index;
    }), X = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, I = (oe) => {
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
        } = oe.touches[0], ge = pe - n, ye = ce - r;
        t = R(Math.abs(ge), Math.abs(ye)), a = ge > 0 ? "prev" : "next";
      }
    }, x = () => {
      if (!(Y.value || t !== "x")) {
        var oe = L.value === "month" ? g : E;
        Ct(() => {
          oe.value.forwardRef(a), Ji();
        });
      }
    }, ie = (oe, pe) => {
      var ce = pe === "month" ? S : M;
      if (ce.value = v.value ? [oe, oe] : [ce.value[0], oe], v.value = !v.value, v.value) {
        var ge = re(ce.value[0]).isAfter(ce.value[1]), ye = ge ? [ce.value[1], ce.value[0]] : [...ce.value];
        D(e["onUpdate:modelValue"], ye), D(e.onChange, ye);
      }
    }, le = (oe, pe) => {
      var ce = pe === "month" ? O : w, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", ye = ce.value.map((Xe) => re(Xe).format(ge)), Be = ye.findIndex((Xe) => Xe === oe);
      Be === -1 ? ye.push(oe) : ye.splice(Be, 1), D(e["onUpdate:modelValue"], ye), D(e.onChange, ye);
    }, de = (oe, pe) => !c.value || !f.value ? !1 : Z.value ? oe === "month" ? pe.index < f.value.index : H.value ? pe < z(p.value) : f.value.index > b.value.index : c.value > h.value, Se = (oe) => {
      var {
        readonly: pe,
        range: ce,
        multiple: ge,
        onChange: ye,
        "onUpdate:modelValue": Be
      } = e;
      if (!(oe < 0 || pe)) {
        T.value = de("day", oe);
        var Xe = h.value + "-" + b.value.index + "-" + oe, ln = re(Xe).format("YYYY-MM-DD");
        ce ? ie(ln, "day") : ge ? le(ln, "day") : (D(Be, ln), D(ye, ln));
      }
    }, Re = (oe) => {
      var {
        type: pe,
        readonly: ce,
        range: ge,
        multiple: ye,
        onChange: Be,
        onPreview: Xe,
        "onUpdate:modelValue": ln
      } = e;
      if (T.value = de("month", oe), pe === "month" && !ce) {
        var $r = h.value + "-" + oe.index;
        ge ? ie($r, "month") : ye ? le($r, "month") : (D(ln, $r), D(Be, $r));
      } else
        b.value = oe, D(Xe, z(h.value), z(b.value.index));
      d.value = !1;
    }, Qe = (oe) => {
      h.value = "" + oe, u.value = !1, d.value = !0, D(e.onPreview, z(h.value), z(b.value.index));
    }, Ee = (oe, pe) => {
      var ce = pe === "prev" ? -1 : 1;
      if (oe === "year")
        h.value = "" + (z(h.value) + ce);
      else {
        var ge = z(b.value.index) + ce;
        ge < 1 && (h.value = "" + (z(h.value) - 1), ge = 12), ge > 12 && (h.value = "" + (z(h.value) + 1), ge = 1), b.value = it.find((ye) => z(ye.index) === ge);
      }
      D(e.onPreview, z(h.value), z(b.value.index));
    }, on = () => (e.multiple || e.range) && !be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, At = (oe) => be(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Rs = (oe, pe) => {
      var ce = pe === "month" ? S : M, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = oe.map((ln) => re(ln).format(ge)).slice(0, 2), Be = ce.value.some((ln) => At(ln));
      if (!Be) {
        ce.value = ye;
        var Xe = re(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Xe && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Us = (oe, pe) => {
      var ce = pe === "month" ? O : w, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = Array.from(new Set(oe.map((Be) => re(Be).format(ge))));
      ce.value = ye.filter((Be) => Be !== "Invalid Date");
    }, Ys = (oe) => {
      var pe = re(oe).format("YYYY-MM-D");
      if (!At(pe)) {
        var [ce, ge, ye] = pe.split("-"), Be = it.find((Xe) => Xe.index === ge);
        f.value = Be, c.value = ce, p.value = ye, b.value = Be, h.value = ce;
      }
    }, Ji = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ae(() => e.modelValue, (oe) => {
      if (!(!on() || At(oe) || !oe))
        if (e.range) {
          if (!be(oe))
            return;
          v.value = oe.length !== 1, Rs(oe, e.type);
        } else if (e.multiple) {
          if (!be(oe))
            return;
          Us(oe, e.type);
        } else
          Ys(oe);
    }, {
      immediate: !0
    }), ae(L, Ji), {
      n: Xf,
      classes: Zf,
      monthPanelEl: g,
      dayPanelEl: E,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: p,
      previewYear: h,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: C,
      getDateTitle: $,
      getPanelType: L,
      getChoose: A,
      getPreview: N,
      componentProps: k,
      slotProps: j,
      formatRange: F,
      clickEl: X,
      handleTouchstart: I,
      handleTouchmove: U,
      handleTouchend: x,
      getChooseDay: Se,
      getChooseMonth: Re,
      getChooseYear: Qe,
      checkPreview: Ee
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
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
function Qf(e) {
  return ["left", "center", "right"].includes(e);
}
var xf = vi({
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
    validator: Qf
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
}, _e(qa, [
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
var {
  n: _f,
  classes: ec
} = ne("dialog");
function nc(e, n) {
  var r = te("var-button"), a = te("var-popup");
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
      default: fe(() => [B(
        "div",
        Pe({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: fi({
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
              default: fe(() => [he(
                _(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : J("v-if", !0), e.confirmButton ? (y(), me(
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
const fr = Q({
  render: nc,
  name: "VarDialog",
  components: {
    VarPopup: yn,
    VarButton: nn
  },
  inheritAttrs: !1,
  props: xf,
  setup(e) {
    var n = P(!1), r = P(!1), a = () => D(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (D(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        D(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (D(s), l != null) {
        l("confirm", a);
        return;
      }
      D(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (D(s), l != null) {
        l("cancel", a);
        return;
      }
      D(e["onUpdate:show"], !1);
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
      n: _f,
      classes: ec,
      pack: Ye,
      dt: wt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: we
    };
  }
});
var Yn;
function yr(e) {
  return bt() ? new Promise((n) => {
    yr.close();
    var r = qe(e) || je(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", Yn = a;
    var {
      unmountInstance: t
    } = Ea(fr, a, {
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
        a.onClosed == null || a.onClosed(), t(), Yn === a && (Yn = null);
      },
      onRouteChange: () => {
        t(), Yn === a && (Yn = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
fr.install = function(e) {
  e.component(fr.name, fr);
};
yr.install = function(e) {
  e.component(fr.name, fr);
};
yr.close = () => {
  if (Yn != null) {
    var e = Yn;
    Yn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
yr.Component = fr;
var rc = {
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
function Ir() {
  return Ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ir.apply(this, arguments);
}
var {
  n: ac,
  classes: tc
} = ne("divider");
function ic(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [G(e.$slots, "default", {}, () => [e.description ? (y(), V(
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
const jr = Q({
  render: ic,
  name: "VarDivider",
  props: rc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
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
        return Ir({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ir({}, d, {
        height: "calc(80% - " + we(f) + ")"
      }) : Ir({}, d, {
        width: "calc(100% - " + we(f) + ")",
        left: v > 0 ? we(f) : we(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Fe(() => {
      o();
    }), Ni(() => {
      o();
    }), Ir({
      n: ac,
      classes: tc
    }, Xs(a), {
      style: i,
      isInset: t
    });
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var oc = {
  disabled: {
    type: Boolean,
    default: !1
  },
  readonly: {
    type: Boolean,
    default: !1
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
function lc(e) {
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
  n: sc
} = ne("form");
function uc(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Kn = Q({
  render: uc,
  name: "VarForm",
  props: oc,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Wd(), i = /* @__PURE__ */ function() {
      var u = lc(function* () {
        var d = yield Promise.all(a.map((v) => {
          var {
            validate: f
          } = v;
          return f();
        }));
        return d.every((v) => v === !0);
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
      n: sc,
      validate: i,
      reset: o,
      resetValidation: l
    };
  }
});
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
Kn.useValidation = cn;
Kn.useForm = mn;
function Oo(e, n, r, a, t, i, o) {
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
        Oo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Oo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
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
var dc = "background-image", vc = "lazy-loading", fc = "lazy-error", Vo = "lazy-attempt", cc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], mi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", $a = [], mt = [], ts = eu(100), Ae = {
  loading: mi,
  error: mi,
  attempt: 3,
  throttleWait: 300,
  events: cc
}, Ui = Bi(Xa, Ae.throttleWait);
function Et(e, n) {
  e._lazy.arg === dc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function mc(e) {
  e._lazy.loading && Et(e, e._lazy.loading), Xa();
}
function pc(e) {
  e._lazy.error && Et(e, e._lazy.error), e._lazy.state = "error", Wi(e), Xa();
}
function is(e, n) {
  Et(e, n), e._lazy.state = "success", Wi(e), Xa();
}
function hc(e) {
  var n;
  mt.includes(e) || (mt.push(e), (n = Ae.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ui, {
      passive: !0
    });
  }));
}
function gc() {
  mt.forEach((e) => {
    var n;
    (n = Ae.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ui);
    });
  }), mt.length = 0;
}
function yc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(vc)) != null ? r : Ae.loading,
    error: (a = e.getAttribute(fc)) != null ? a : Ae.error,
    attempt: e.getAttribute(Vo) ? Number(e.getAttribute(Vo)) : Ae.attempt
  };
  e._lazy = ci({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Et(e, mi), D(Ae.filter, e._lazy);
}
function bc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ts.add(n), is(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? pc(e) : os(e);
  });
}
function os(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ts.has(n)) {
      is(e, n), e._lazy.attemptLock = !1;
      return;
    }
    mc(e), bc(e, n);
  }
}
function Yi(e) {
  return pi.apply(this, arguments);
}
function pi() {
  return pi = Mt(function* (e) {
    (yield au(e)) && os(e);
  }), pi.apply(this, arguments);
}
function Xa() {
  $a.forEach((e) => Yi(e));
}
function wc(e) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = Mt(function* (e) {
    !$a.includes(e) && $a.push(e), tu(e).forEach(hc), yield Yi(e);
  }), hi.apply(this, arguments);
}
function Wi(e) {
  yt($a, e), $a.length === 0 && gc();
}
function Sc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ls(e, n) {
  return gi.apply(this, arguments);
}
function gi() {
  return gi = Mt(function* (e, n) {
    yc(e, n), yield wc(e);
  }), gi.apply(this, arguments);
}
function Cc(e, n) {
  return yi.apply(this, arguments);
}
function yi() {
  return yi = Mt(function* (e, n) {
    if (!Sc(e, n)) {
      $a.includes(e) && (yield Yi(e));
      return;
    }
    yield ls(e, n);
  }), yi.apply(this, arguments);
}
function kc(e) {
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
var pt = {
  mounted: ls,
  unmounted: Wi,
  updated: Cc,
  install(e, n) {
    kc(n), Ui = Bi(Xa, Ae.throttleWait), e.directive("lazy", this);
  }
};
function $c(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Tc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: $c,
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
  n: Oc,
  classes: Vc
} = ne("image"), Pc = ["alt", "title", "lazy-error", "lazy-loading"], Mc = ["alt", "title", "src"];
function Ec(e, n) {
  var r = Ge("lazy"), a = Ge("ripple");
  return ke((y(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((y(), V(
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
      Pc
    )), [[r, e.src]]) : (y(), V(
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
      Mc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Gr = Q({
  render: Ec,
  name: "VarImage",
  directives: {
    Lazy: pt,
    Ripple: Ue
  },
  props: Tc,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && D(o, a), t._lazy.state === "error" && D(l, a)) : D(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && D(i, a);
    };
    return {
      n: Oc,
      classes: Vc,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var ss = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), us = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Ic() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(ss), {
    length: r
  } = Sn(us);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var ds = {
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
function Po(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Nc(e) {
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
var Dc = 250, Bc = 20, {
  n: Ac,
  classes: zc
} = ne("swipe"), Lc = ["onClick"];
function Fc(e, n) {
  return y(), V(
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
    }, () => [e.indicator && e.length ? (y(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(y(!0), V(
        Ve,
        null,
        De(e.length, (r, a) => (y(), V(
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
          Lc
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)])],
    2
  );
}
const Xn = Q({
  render: Fc,
  name: "VarSwipe",
  props: ds,
  setup(e) {
    var n = P(null), r = P(0), a = W(() => e.vertical), t = P(0), i = P(0), o = P(!1), l = P(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Ic(), v = !1, f = -1, c, p, b, h, T, O = (I) => s.find((R) => {
      var {
        index: U
      } = R;
      return U.value === I;
    }), w = () => {
      !e.loop || (i.value >= 0 && O(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && O(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (O(d.value - 1).setTranslate(0), O(0).setTranslate(0)));
    }, S = (I) => {
      var R = je(I) ? I : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: U
      } = e;
      return R <= -1 ? U ? -1 : 0 : R >= d.value ? U ? d.value : d.value - 1 : R;
    }, M = (I) => {
      var {
        loop: R
      } = e;
      return I === -1 ? R ? d.value - 1 : 0 : I === d.value ? R ? 0 : d.value - 1 : I;
    }, g = (I) => {
      var {
        loop: R
      } = e;
      return I < 0 ? R ? d.value - 1 : 0 : I > d.value - 1 ? R ? 0 : d.value - 1 : I;
    }, E = (I) => {
      var R = i.value >= r.value, U = i.value <= -t.value, x = 0, ie = -(t.value - r.value);
      o.value = !0, (R || U) && (o.value = !0, i.value = U ? x : ie, O(0).setTranslate(0), O(d.value - 1).setTranslate(0)), Ct(() => {
        o.value = !1, D(I);
      });
    }, k = () => {
      l.value = g(z(e.initialIndex));
    }, A = () => {
      var {
        autoplay: I
      } = e;
      !I || d.value <= 1 || (N(), f = window.setTimeout(() => {
        F(), A();
      }, z(I)));
    }, N = () => {
      f && clearTimeout(f);
    }, C = (I, R) => {
      if (I > R && I > 10)
        return "horizontal";
      if (R > I && R > 10)
        return "vertical";
    }, $ = (I) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: R,
          clientY: U
        } = I.touches[0];
        c = R, p = U, b = performance.now(), v = !0, N(), E(() => {
          o.value = !0;
        });
      }
    }, L = (I) => {
      var {
        touchable: R,
        vertical: U
      } = e;
      if (!(!v || !R)) {
        var {
          clientX: x,
          clientY: ie
        } = I.touches[0], le = Math.abs(x - c), de = Math.abs(ie - p), Se = C(le, de), Re = U ? "vertical" : "horizontal";
        if (Se === Re) {
          I.preventDefault();
          var Qe = h !== void 0 ? x - h : 0, Ee = T !== void 0 ? ie - T : 0;
          h = x, T = ie, i.value += U ? Ee : Qe, w();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: I,
          onChange: R
        } = e, U = I ? T < p : h < c, x = Math.abs(I ? p - T : c - h), ie = performance.now() - b <= Dc && x >= Bc, le = ie ? S(U ? l.value + 1 : l.value - 1) : S();
        v = !1, o.value = !1, h = void 0, T = void 0, i.value = le * -r.value;
        var de = l.value;
        l.value = M(le), A(), de !== l.value && D(R, l.value);
      }
    }, j = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((I) => {
        I.setTranslate(0);
      }), A(), setTimeout(() => {
        o.value = !1;
      });
    }, F = () => {
      if (!(d.value <= 1)) {
        var {
          loop: I,
          onChange: R
        } = e, U = l.value;
        l.value = g(U + 1), D(R, l.value), E(() => {
          if (U === d.value - 1 && I) {
            O(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          U !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, Z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: I,
          onChange: R
        } = e, U = l.value;
        l.value = g(U - 1), D(R, l.value), E(() => {
          if (U === 0 && I) {
            O(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          U !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, H = (I) => {
      if (!(d.value <= 1 || I === l.value)) {
        I = I < 0 ? 0 : I, I = I >= d.value ? d.value : I;
        var R = I > l.value ? F : Z;
        Array.from({
          length: Math.abs(I - l.value)
        }).forEach(R);
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), ae(() => d.value, /* @__PURE__ */ Nc(function* () {
      yield Tn(), k(), j();
    })), Fe(() => {
      window.addEventListener("resize", j);
    }), rr(() => {
      window.removeEventListener("resize", j), N();
    }), {
      n: Ac,
      classes: zc,
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
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
function Rc() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(ss), {
    index: r
  } = Cn(us);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Uc
} = ne("swipe-item");
function Yc(e, n) {
  return y(), V(
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
const Zn = Q({
  render: Yc,
  name: "VarSwipeItem",
  setup() {
    var e = P(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Rc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: Uc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
function bi() {
  return bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, bi.apply(this, arguments);
}
var Wc = bi({
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
}, _e(ds, ["loop", "indicator", "onChange"]), _e(qa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: Mo,
  classes: Hc
} = ne("image-preview"), Eo = 12, Io = 200, jc = 350, No = 200, Gc = ["src", "alt"];
function qc(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), i = te("var-popup");
  return y(), me(
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
        Pe({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: fe(() => [(y(!0), V(
            Ve,
            null,
            De(e.images, (o) => (y(), me(
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
                    Gc
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
            }, () => [e.indicator && e.images.length > 1 ? (y(), V(
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
      ), G(e.$slots, "close-icon", {}, () => [e.closeable ? (y(), me(
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
const cr = Q({
  render: qc,
  name: "VarImagePreview",
  components: {
    VarSwipe: Xn,
    VarSwipeItem: Zn,
    VarPopup: yn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Wc,
  setup(e) {
    var n = P(!1), r = W(() => {
      var {
        images: N,
        current: C
      } = e, $ = N.findIndex((L) => L === C);
      return $ >= 0 ? $ : 0;
    }), a = P(1), t = P(0), i = P(0), o = P(void 0), l = P(void 0), s = P(!0), u = null, d = null, v = null, f = (N, C) => {
      var {
        clientX: $,
        clientY: L
      } = N, {
        clientX: Y,
        clientY: j
      } = C;
      return Math.abs(Math.sqrt(Math.pow(Y - $, 2) + Math.pow(j - L, 2)));
    }, c = (N, C) => ({
      clientX: N.clientX,
      clientY: N.clientY,
      timestamp: Date.now(),
      target: C
    }), p = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, No);
    }, b = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, h = (N) => d ? f(d, N) <= Eo && N.timestamp - d.timestamp <= Io && d.target === N.target : !1, T = (N) => !N || !u || !d ? !1 : f(u, d) <= Eo && Date.now() - d.timestamp < jc && (N === u.target || N.parentNode === u.target), O = (N) => {
      v = window.setTimeout(() => {
        T(N.target) && A(), u = null;
      }, Io);
    }, w = (N) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = N, $ = c(C[0], N.currentTarget);
      if (u = $, h($)) {
        a.value > 1 ? b() : p();
        return;
      }
      d = $;
    }, S = (N) => {
      var {
        offsetWidth: C,
        offsetHeight: $
      } = N, {
        naturalWidth: L,
        naturalHeight: Y
      } = N.querySelector("." + Mo("image"));
      return {
        width: C,
        height: $,
        imageRadio: Y / L,
        rootRadio: $ / C,
        zoom: z(e.zoom)
      };
    }, M = (N) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: Y,
        height: j
      } = S(N);
      if (!$)
        return 0;
      var F = $ > L ? j / $ : Y;
      return Math.max(0, (C * F - Y) / 2) / C;
    }, g = (N) => {
      var {
        zoom: C,
        imageRadio: $,
        rootRadio: L,
        width: Y,
        height: j
      } = S(N);
      if (!$)
        return 0;
      var F = $ > L ? j : Y * $;
      return Math.max(0, (C * F - j) / 2) / C;
    }, E = (N, C, $) => N + C >= $ ? $ : N + C <= -$ ? -$ : N + C, k = (N) => {
      if (!!d) {
        var C = N.currentTarget, {
          touches: $
        } = N, L = c($[0], C);
        if (a.value > 1) {
          var Y = L.clientX - d.clientX, j = L.clientY - d.clientY, F = M(C), Z = g(C);
          t.value = E(t.value, Y, F), i.value = E(i.value, j, Z);
        }
        d = L;
      }
    }, A = () => {
      if (a.value > 1) {
        b(), setTimeout(() => D(e["onUpdate:show"], !1), No);
        return;
      }
      D(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (N) => {
      n.value = N;
    }, {
      immediate: !0
    }), {
      n: Mo,
      classes: Hc,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: w,
      handleTouchmove: k,
      handleTouchend: O,
      close: A
    };
  }
});
var Wn;
function er(e) {
  if (!!bt()) {
    er.close();
    var n = qe(e) ? {
      images: [e]
    } : be(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", Wn = r;
    var {
      unmountInstance: a
    } = Ea(cr, r, {
      onClose: () => r.onClose == null ? void 0 : r.onClose(),
      onClosed: () => {
        r.onClosed == null || r.onClosed(), a(), Wn === r && (Wn = null);
      },
      onRouteChange: () => {
        a(), Wn === r && (Wn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
er.close = () => {
  if (Wn != null) {
    var e = Wn;
    Wn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
cr.install = function(e) {
  e.component(cr.name, cr);
};
er.install = function(e) {
  e.component(cr.name, cr);
};
er.Component = cr;
var vs = {
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
function Do(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Kc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Do(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Do(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Xc,
  classes: Zc
} = ne("sticky");
function Jc(e, n) {
  return y(), V(
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
const Jn = Q({
  render: Jc,
  name: "VarSticky",
  props: vs,
  setup(e) {
    var n = P(null), r = P(null), a = P(!1), t = P("0px"), i = P("0px"), o = P("auto"), l = P("auto"), s = P("auto"), u = P("auto"), d = W(() => !e.disabled && e.cssMode), v = W(() => !e.disabled && a.value), f = W(() => Oe(e.offsetTop)), c, p = () => {
      var {
        onScroll: T,
        cssMode: O,
        disabled: w
      } = e;
      if (!w) {
        var S = 0;
        if (c !== window) {
          var {
            top: M
          } = c.getBoundingClientRect();
          S = M;
        }
        var g = r.value, E = n.value, {
          top: k,
          left: A
        } = E.getBoundingClientRect(), N = k - S;
        N <= f.value ? (O || (o.value = E.offsetWidth + "px", l.value = E.offsetHeight + "px", t.value = S + f.value + "px", i.value = A + "px", s.value = g.offsetWidth + "px", u.value = g.offsetHeight + "px", a.value = !0), D(T, f.value, !0)) : (a.value = !1, D(T, N, !1));
      }
    }, b = /* @__PURE__ */ function() {
      var T = Kc(function* () {
        yield Tn(), c = Ma(n.value), c !== window && c.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), h = () => {
      c !== window && c.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return ae(() => e.disabled, p), Mi(b), Ei(h), Fe(b), rr(h), {
      n: Xc,
      classes: Zc,
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
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
var fs = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), cs = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Qc() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(fs), {
    length: r
  } = Sn(cs);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function xc() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(fs), {
    index: r
  } = Cn(cs);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var _c = {
  index: {
    type: [Number, String]
  }
}, {
  n: em,
  classes: nm
} = ne("index-anchor");
function rm(e, n) {
  return y(), me(
    Pa(e.sticky ? e.n("$-sticky") : e.Transition),
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
        Pe({
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
const qr = Q({
  render: rm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: Jn
  },
  inheritAttrs: !1,
  props: _c,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = xc(), t = P(0), i = P(!1), o = W(() => e.index), l = P(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (h) => {
      i.value = h;
    }, b = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(b), {
      n: em,
      classes: nm,
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
qr.install = function(e) {
  e.component(qr.name, qr);
};
var am = {
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
function Bo(e, n, r, a, t, i, o) {
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
        Bo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Bo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: tm,
  classes: im
} = ne("index-bar"), om = ["onClick"];
function lm(e, n) {
  return y(), V(
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
      [(y(!0), V(
        Ve,
        null,
        De(e.anchorNameList, (r) => (y(), V(
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
          om
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Kr = Q({
  render: lm,
  name: "VarIndexBar",
  props: am,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Qc(), t = P(""), i = P(null), o = P(null), l = P([]), s = P(), u = W(() => e.sticky), d = W(() => e.cssMode), v = W(() => Oe(e.stickyOffsetTop)), f = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var p = (O) => {
      var w = Di(O) ? O.name.value : O;
      w === s.value || w === void 0 || (s.value = w, D(e.onChange, w));
    }, b = () => {
      var O = St(i.value), w = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: S
      } = o.value;
      r.forEach((M, g) => {
        var E = M.ownTop.value, k = O - E + v.value - S, A = g === r.length - 1 ? w : r[g + 1].ownTop.value - M.ownTop.value;
        k >= 0 && k < A && !t.value && (g && !e.cssMode && r[g - 1].setDisabled(!0), M.setDisabled(!1), p(M));
      });
    }, h = /* @__PURE__ */ function() {
      var O = Ut(function* (w, S) {
        var {
          offsetTop: M
        } = o.value;
        if (S && D(e.onClick, w), w !== s.value) {
          var g = r.find((A) => {
            var {
              name: N
            } = A;
            return w === N.value;
          });
          if (!!g) {
            var E = g.ownTop.value - v.value + M, k = Ai(i.value);
            t.value = w, p(w), yield lt(i.value, {
              left: k,
              top: E,
              animation: ml,
              duration: z(e.duration)
            }), Ct(() => {
              t.value = "";
            });
          }
        }
      });
      return function(S, M) {
        return O.apply(this, arguments);
      };
    }(), T = (O) => {
      $n(() => h(O));
    };
    return ae(() => n.value, /* @__PURE__ */ Ut(function* () {
      yield Tn(), r.forEach((O) => {
        var {
          name: w,
          setOwnTop: S
        } = O;
        w.value && l.value.push(w.value), S();
      });
    })), Fe(/* @__PURE__ */ Ut(function* () {
      yield Tn(), i.value = Ma(o.value), i.value.addEventListener("scroll", b);
    })), Ii(() => {
      D(i.value.removeEventListener, "scroll", b);
    }), {
      n: tm,
      classes: im,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: T,
      anchorClick: h
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
function sm(e) {
  return ["text", "password", "number"].includes(e);
}
var um = {
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
    validator: sm
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
  classes: dm
} = ne("input"), vm = ["id", "disabled", "type", "value", "maxlength", "rows"], fm = ["id", "disabled", "type", "value", "maxlength"], cm = ["for"];
function mm(e, n) {
  var r = te("var-icon"), a = te("var-form-details");
  return y(), V(
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
        [e.type === "password" ? (y(), V(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
        )) : J("v-if", !0), e.textarea ? (y(), V(
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
          vm
        )) : (y(), V(
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
          fm
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
          cm
        )],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (y(), me(
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
    ), e.line ? (y(), V(
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
const mr = Q({
  render: mm,
  name: "VarInput",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: um,
  setup(e) {
    var n = P("var-input-" + Ha().uid), r = P(null), a = P(!1), t = W(() => {
      var {
        maxlength: C,
        modelValue: $
      } = e;
      return C ? Hn($) ? "0 / " + C : String($).length + "/" + C : "";
    }), {
      bindForm: i,
      form: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = (C) => {
      Me(() => {
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
      if (!C && !Hn($))
        return Yt("--placeholder-hidden");
      if (C && (!Hn($) || a.value))
        return Yt("--placeholder-hint");
    }, c = (C) => {
      a.value = !0, D(e.onFocus, C), v("onFocus");
    }, p = (C) => {
      a.value = !1, D(e.onBlur, C), v("onBlur");
    }, b = (C) => {
      var $ = C.target, {
        value: L
      } = $;
      L = S(w(L)), $.value = L, D(e["onUpdate:modelValue"], L), D(e.onInput, L, C), v("onInput");
    }, h = (C) => {
      var $ = C.target, {
        value: L
      } = $;
      L = S(w(L)), $.value = L, D(e.onChange, L, C), v("onChange");
    }, T = () => {
      var {
        disabled: C,
        readonly: $,
        clearable: L,
        onClear: Y
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || C || $ || !L || (D(e["onUpdate:modelValue"], ""), D(Y, ""), v("onClear"));
    }, O = (C) => {
      var {
        disabled: $,
        onClick: L
      } = e;
      o != null && o.disabled.value || $ || (D(L, C), v("onClick"));
    }, w = (C) => e.modelModifiers.trim ? C.trim() : C, S = (C) => e.maxlength ? C.slice(0, z(e.maxlength)) : C, M = (C) => {
      var {
        disabled: $,
        readonly: L
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || $ || L || C.stopPropagation();
    }, g = () => {
      D(e["onUpdate:modelValue"], ""), d();
    }, E = () => u(e.rules, e.modelValue), k = () => {
      var C;
      (C = r.value) == null || C.focus();
    }, A = () => {
      r.value.blur();
    }, N = {
      reset: g,
      validate: E,
      resetValidation: d
    };
    return D(i, N), Fe(() => {
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
      classes: dm,
      isEmpty: Hn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: p,
      handleInput: b,
      handleChange: h,
      handleClear: T,
      handleClick: O,
      handleTouchstart: M,
      validate: E,
      resetValidation: d,
      reset: g,
      focus: k,
      blur: A
    };
  }
});
mr.install = function(e) {
  e.component(mr.name, mr);
};
function pm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function hm(e) {
  return ["always", "hover", "none"].includes(e);
}
var gm = {
  type: {
    type: String,
    default: "default",
    validator: pm
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
    validator: hm
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
  n: ym,
  classes: bm
} = ne("link");
function wm(e, n) {
  return y(), me(
    Pa(e.tag),
    Pe(e.linkProps, {
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
const Xr = Q({
  render: wm,
  name: "VarLink",
  props: gm,
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
      i || D(o, t);
    };
    return {
      n: ym,
      classes: bm,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var Sm = {
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
function Ao(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Cm(e) {
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
  n: km,
  classes: $m
} = ne("list");
function Tm(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return y(), V(
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
    }, () => [ke((y(), V(
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
const Zr = Q({
  render: Tm,
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: kn
  },
  props: Sm,
  setup(e) {
    var n = P(null), r = P(null), a, t = () => {
      D(e["onUpdate:error"], !1), D(e["onUpdate:loading"], !0), D(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Oe(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Cm(function* () {
        yield Me();
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
      a = Ma(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), rr(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: wt,
      isNumber: je,
      load: t,
      check: o,
      n: km,
      classes: $m
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var Om = {
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
  classes: Vm,
  n: zo
} = ne("loading-bar");
const Pm = Q({
  name: "VarLoadingBar",
  props: Om,
  setup(e) {
    return () => ee("div", {
      class: Vm(zo(), [e.error, zo("--error")]),
      style: {
        zIndex: tn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
var ms, Lo, an = Ne({
  value: 0,
  opacity: 0,
  error: !1
}), Mm = (e) => {
  Object.assign(an, e);
}, ps = () => {
  ms = window.setTimeout(() => {
    if (!(an.value >= 95)) {
      var e = Math.random();
      an.value < 70 && (e = Math.round(5 * Math.random())), an.value += e, ps();
    }
  }, 200);
}, Em = () => {
  Lo || (Lo = !0, Ea(Pm, an)), (!an.error || an.value === 100) && (an.value = 0), setTimeout(() => {
    an.opacity = 1;
  }, 200), ps();
}, Im = () => {
  an.value = 100, setTimeout(() => {
    an.opacity = 0, setTimeout(() => {
      an.error = !1;
    }, 250);
  }, 300), window.clearTimeout(ms);
}, Nm = () => {
  an.error = !0, Fa.start(), setTimeout(Fa.finish, 300);
}, Fa = {
  start: Em,
  finish: Im,
  error: Nm,
  mergeConfig: Mm
}, Dm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ot(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Dm[n];
  });
}
var En = "top", nr = "bottom", br = "right", Qn = "left", It = "auto", Nt = [En, nr, br, Qn], Dt = "start", Ra = "end", Bm = "clippingParents", hs = "viewport", Ia = "popper", Am = "reference", Fo = /* @__PURE__ */ Nt.reduce(function(e, n) {
  return e.concat([n + "-" + Dt, n + "-" + Ra]);
}, []), gs = /* @__PURE__ */ [].concat(Nt, [It]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Dt, n + "-" + Ra]);
}, []), zm = "beforeRead", Lm = "read", Fm = "afterRead", Rm = "beforeMain", Um = "main", Ym = "afterMain", Wm = "beforeWrite", Hm = "write", jm = "afterWrite", wi = [zm, Lm, Fm, Rm, Um, Ym, Wm, Hm, jm];
function In(e) {
  return e.split("-")[0];
}
var Gm = {
  start: "end",
  end: "start"
};
function Ro(e) {
  return e.replace(/start|end/g, function(n) {
    return Gm[n];
  });
}
function pn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function wr(e) {
  var n = pn(e).Element;
  return e instanceof n || e instanceof Element;
}
function un(e) {
  var n = pn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Hi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = pn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function tr(e) {
  return ((wr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Aa = Math.max, Uo = Math.min, Ta = Math.round;
function Si() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ys() {
  return !/^((?!chrome|android).)*safari/i.test(Si());
}
function Oa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && un(e) && (t = e.offsetWidth > 0 && Ta(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ta(a.height) / e.offsetHeight || 1);
  var o = wr(e) ? pn(e) : window, l = o.visualViewport, s = !ys() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
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
function ji(e) {
  var n = pn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Gi(e) {
  return Oa(tr(e)).left + ji(e).scrollLeft;
}
function qm(e, n) {
  var r = pn(e), a = tr(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = ys();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Gi(e),
    y: s
  };
}
function wn(e) {
  return pn(e).getComputedStyle(e);
}
function Km(e) {
  var n, r = tr(e), a = ji(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Aa(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Aa(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Gi(e), s = -a.scrollTop;
  return wn(t || r).direction === "rtl" && (l += Aa(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Vn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Bt(e) {
  return Vn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hi(e) ? e.host : null) || tr(e);
}
function qi(e) {
  var n = wn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function bs(e) {
  return ["html", "body", "#document"].indexOf(Vn(e)) >= 0 ? e.ownerDocument.body : un(e) && qi(e) ? e : bs(Bt(e));
}
function za(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = bs(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = pn(a), o = t ? [i].concat(i.visualViewport || [], qi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(za(Bt(o)));
}
function Xm(e) {
  return ["table", "td", "th"].indexOf(Vn(e)) >= 0;
}
function Yo(e) {
  return !un(e) || wn(e).position === "fixed" ? null : e.offsetParent;
}
function Zm(e) {
  var n = /firefox/i.test(Si()), r = /Trident/i.test(Si());
  if (r && un(e)) {
    var a = wn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Bt(e);
  for (Hi(t) && (t = t.host); un(t) && ["html", "body"].indexOf(Vn(t)) < 0; ) {
    var i = wn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ki(e) {
  for (var n = pn(e), r = Yo(e); r && Xm(r) && wn(r).position === "static"; )
    r = Yo(r);
  return r && (Vn(r) === "html" || Vn(r) === "body" && wn(r).position === "static") ? n : r || Zm(e) || n;
}
function Jm(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Hi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Ci(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Qm(e, n) {
  var r = Oa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Wo(e, n, r) {
  return n === hs ? Ci(qm(e, r)) : wr(n) ? Qm(n, r) : Ci(Km(tr(e)));
}
function xm(e) {
  var n = za(Bt(e)), r = ["absolute", "fixed"].indexOf(wn(e).position) >= 0, a = r && un(e) ? Ki(e) : e;
  return wr(a) ? n.filter(function(t) {
    return wr(t) && Jm(t, a) && Vn(t) !== "body";
  }) : [];
}
function _m(e, n, r, a) {
  var t = n === "clippingParents" ? xm(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Wo(e, u, a);
    return s.top = Aa(d.top, s.top), s.right = Uo(d.right, s.right), s.bottom = Uo(d.bottom, s.bottom), s.left = Aa(d.left, s.left), s;
  }, Wo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ua(e) {
  return e.split("-")[1];
}
function ep(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ws(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? In(a) : null, i = a ? Ua(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case En:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case nr:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case br:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case Qn:
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
  var u = t ? ep(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Dt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ra:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function np() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function rp(e) {
  return Object.assign({}, np(), e);
}
function ap(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Ss(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? Bm : l, u = r.rootBoundary, d = u === void 0 ? hs : u, v = r.elementContext, f = v === void 0 ? Ia : v, c = r.altBoundary, p = c === void 0 ? !1 : c, b = r.padding, h = b === void 0 ? 0 : b, T = rp(typeof h != "number" ? h : ap(h, Nt)), O = f === Ia ? Am : Ia, w = e.rects.popper, S = e.elements[p ? O : f], M = _m(wr(S) ? S : S.contextElement || tr(e.elements.popper), s, d, o), g = Oa(e.elements.reference), E = ws({
    reference: g,
    element: w,
    strategy: "absolute",
    placement: t
  }), k = Ci(Object.assign({}, w, E)), A = f === Ia ? k : g, N = {
    top: M.top - A.top + T.top,
    bottom: A.bottom - M.bottom + T.bottom,
    left: M.left - A.left + T.left,
    right: A.right - M.right + T.right
  }, C = e.modifiersData.offset;
  if (f === Ia && C) {
    var $ = C[t];
    Object.keys(N).forEach(function(L) {
      var Y = [br, nr].indexOf(L) >= 0 ? 1 : -1, j = [En, nr].indexOf(L) >= 0 ? "y" : "x";
      N[L] += $[j] * Y;
    });
  }
  return N;
}
function tp(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? gs : s, d = Ua(a), v = d ? l ? Fo : Fo.filter(function(p) {
    return Ua(p) === d;
  }) : Nt, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(p, b) {
    return p[b] = Ss(e, {
      placement: b,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[In(b)], p;
  }, {});
  return Object.keys(c).sort(function(p, b) {
    return c[p] - c[b];
  });
}
function ip(e) {
  if (In(e) === It)
    return [];
  var n = ot(e);
  return [Ro(e), n, Ro(n)];
}
function op(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, b = r.allowedAutoPlacements, h = n.options.placement, T = In(h), O = T === h, w = s || (O || !p ? [ot(h)] : ip(h)), S = [h].concat(w).reduce(function(ie, le) {
      return ie.concat(In(le) === It ? tp(n, {
        placement: le,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: b
      }) : le);
    }, []), M = n.rects.reference, g = n.rects.popper, E = /* @__PURE__ */ new Map(), k = !0, A = S[0], N = 0; N < S.length; N++) {
      var C = S[N], $ = In(C), L = Ua(C) === Dt, Y = [En, nr].indexOf($) >= 0, j = Y ? "width" : "height", F = Ss(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Z = Y ? L ? br : Qn : L ? nr : En;
      M[j] > g[j] && (Z = ot(Z));
      var H = ot(Z), X = [];
      if (i && X.push(F[$] <= 0), l && X.push(F[Z] <= 0, F[H] <= 0), X.every(function(ie) {
        return ie;
      })) {
        A = C, k = !1;
        break;
      }
      E.set(C, X);
    }
    if (k)
      for (var I = p ? 3 : 1, R = function(le) {
        var de = S.find(function(Se) {
          var Re = E.get(Se);
          if (Re)
            return Re.slice(0, le).every(function(Qe) {
              return Qe;
            });
        });
        if (de)
          return A = de, "break";
      }, U = I; U > 0; U--) {
        var x = R(U);
        if (x === "break")
          break;
      }
    n.placement !== A && (n.modifiersData[a]._skip = !0, n.placement = A, n.reset = !0);
  }
}
const lp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: op,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function sp(e, n, r) {
  var a = In(e), t = [Qn, En].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [Qn, br].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function up(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = gs.reduce(function(d, v) {
    return d[v] = sp(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const dp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: up
};
function vp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function fp(e) {
  return e === pn(e) || !un(e) ? ji(e) : vp(e);
}
function cp(e) {
  var n = e.getBoundingClientRect(), r = Ta(n.width) / e.offsetWidth || 1, a = Ta(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function mp(e, n, r) {
  r === void 0 && (r = !1);
  var a = un(n), t = un(n) && cp(n), i = tr(n), o = Oa(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Vn(n) !== "body" || qi(i)) && (l = fp(n)), un(n) ? (s = Oa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Gi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function pp(e) {
  var n = Oa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function hp(e) {
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
function gp(e) {
  var n = hp(e);
  return wi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function yp(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function zn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var ir = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', bp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ho = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function wp(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Ho).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(zn(ir, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(zn(ir, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          wi.indexOf(n.phase) < 0 && console.error(zn(ir, n.name, '"phase"', "either " + wi.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(zn(ir, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(zn(ir, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(zn(ir, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(zn(ir, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Ho.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(zn(bp, String(n.name), a, a));
      });
    });
  });
}
function Sp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Cp(e) {
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
var jo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", kp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Go = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function qo() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function $p(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Go : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Go, i),
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
        b(), d.options = Object.assign({}, i, d.options, O), d.scrollParents = {
          reference: wr(l) ? za(l) : l.contextElement ? za(l.contextElement) : [],
          popper: za(s)
        };
        var w = gp(Cp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = w.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Sp([].concat(w, d.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if (wp(S), In(d.options.placement) === It) {
            var M = d.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var g = wn(s), E = g.marginTop, k = g.marginRight, A = g.marginBottom, N = g.marginLeft;
          [E, k, A, N].some(function(C) {
            return parseFloat(C);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, O = T.reference, w = T.popper;
          if (!qo(O, w)) {
            process.env.NODE_ENV !== "production" && console.error(jo);
            return;
          }
          d.rects = {
            reference: mp(O, Ki(w), d.options.strategy === "fixed"),
            popper: pp(w)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var S = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(kp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var g = d.orderedModifiers[M], E = g.fn, k = g.options, A = k === void 0 ? {} : k, N = g.name;
            typeof E == "function" && (d = E({
              state: d,
              options: A,
              name: N,
              instance: c
            }) || d);
          }
        }
      },
      update: yp(function() {
        return new Promise(function(h) {
          c.forceUpdate(), h(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!qo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(jo), c;
    c.setOptions(u).then(function(h) {
      !f && u.onFirstUpdate && u.onFirstUpdate(h);
    });
    function p() {
      d.orderedModifiers.forEach(function(h) {
        var T = h.name, O = h.options, w = O === void 0 ? {} : O, S = h.effect;
        if (typeof S == "function") {
          var M = S({
            state: d,
            name: T,
            instance: c,
            options: w
          }), g = function() {
          };
          v.push(M || g);
        }
      });
    }
    function b() {
      v.forEach(function(h) {
        return h();
      }), v = [];
    }
    return c;
  };
}
var nt = {
  passive: !0
};
function Tp(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = pn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, nt);
  }), l && s.addEventListener("resize", r.update, nt), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, nt);
    }), l && s.removeEventListener("resize", r.update, nt);
  };
}
const Op = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Tp,
  data: {}
};
function Vp(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ws({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Pp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Vp,
  data: {}
};
var Mp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ep(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ta(n * t) / t || 0,
    y: Ta(r * t) / t || 0
  };
}
function Ko(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, p = o.y, b = p === void 0 ? 0 : p, h = typeof d == "function" ? d({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  c = h.x, b = h.y;
  var T = o.hasOwnProperty("x"), O = o.hasOwnProperty("y"), w = Qn, S = En, M = window;
  if (u) {
    var g = Ki(r), E = "clientHeight", k = "clientWidth";
    if (g === pn(r) && (g = tr(r), wn(g).position !== "static" && l === "absolute" && (E = "scrollHeight", k = "scrollWidth")), g = g, t === En || (t === Qn || t === br) && i === Ra) {
      S = nr;
      var A = v && g === M && M.visualViewport ? M.visualViewport.height : g[E];
      b -= A - a.height, b *= s ? 1 : -1;
    }
    if (t === Qn || (t === En || t === nr) && i === Ra) {
      w = br;
      var N = v && g === M && M.visualViewport ? M.visualViewport.width : g[k];
      c -= N - a.width, c *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: l
  }, u && Mp), $ = d === !0 ? Ep({
    x: c,
    y: b
  }) : {
    x: c,
    y: b
  };
  if (c = $.x, b = $.y, s) {
    var L;
    return Object.assign({}, C, (L = {}, L[S] = O ? "0" : "", L[w] = T ? "0" : "", L.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + b + "px)" : "translate3d(" + c + "px, " + b + "px, 0)", L));
  }
  return Object.assign({}, C, (n = {}, n[S] = O ? b + "px" : "", n[w] = T ? c + "px" : "", n.transform = "", n));
}
function Ip(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = wn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: In(n.placement),
    variation: Ua(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Ko(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Ko(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Np = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ip,
  data: {}
};
function Dp(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !un(i) || !Vn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function Bp(e) {
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
      !un(t) || !Vn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Ap = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Dp,
  effect: Bp,
  requires: ["computeStyles"]
};
var zp = [Op, Pp, Np, Ap], Lp = /* @__PURE__ */ $p({
  defaultModifiers: zp
});
function Fp(e) {
  return ["click", "hover"].includes(e);
}
function Rp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Up = {
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
    validator: Fp
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Rp
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
  n: Yp,
  classes: Wp
} = ne("menu");
function Hp(e, n) {
  return y(), V(
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
    [G(e.$slots, "default"), (y(), me(
      ja,
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
              onClick: n[0] || (n[0] = Nn(() => {
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
          ), [[Ga, e.show]])]),
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
const xn = Q({
  render: Hp,
  name: "VarMenu",
  props: Up,
  setup(e) {
    var n = P(null), r = P(null), a = P(!1), {
      zIndex: t
    } = Ka(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: g,
        height: E
      } = getComputedStyle(n.value);
      u = {
        width: Oe(g),
        height: Oe(E)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, S());
    }, f = /* @__PURE__ */ function() {
      var g = Zo(function* () {
        e.trigger === "hover" && (s = !1, yield Tn(), !l && M());
      });
      return function() {
        return g.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var g = Zo(function* () {
        e.trigger === "hover" && (l = !1, yield Tn(), !s && M());
      });
      return function() {
        return g.apply(this, arguments);
      };
    }(), b = () => {
      S(), o = !0;
    }, h = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, D(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var g = {
        x: Oe(e.offsetX),
        y: Oe(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: g.x,
            distance: g.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: g.x,
            distance: g.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: g.x,
            distance: g.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: g.x,
            distance: -g.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: g.x,
            distance: -g.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: g.x,
            distance: -g.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: g.y,
            distance: g.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: g.y,
            distance: -g.x - u.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: g.y,
            distance: -g.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: g.x,
            distance: -g.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: g.x,
            distance: g.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: g.y,
            distance: g.x
          };
      }
    }, O = () => {
      var {
        placement: g,
        skidding: E,
        distance: k
      } = T();
      return {
        placement: g,
        modifiers: [ht({}, lp, {
          enabled: a.value
        }), ht({}, dp, {
          options: {
            offset: [E, k]
          }
        })]
      };
    }, w = () => {
      i.setOptions(O());
    }, S = () => {
      var {
        disabled: g
      } = e;
      g || (a.value = !0, D(e["onUpdate:show"], !0));
    }, M = () => {
      a.value = !1, D(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (g) => {
      a.value = g != null ? g : !1;
    }, {
      immediate: !0
    }), ae(() => e.offsetX, w), ae(() => e.offsetY, w), ae(() => e.placement, w), ae(() => a.value, (g) => {
      g ? (w(), D(e.onOpen)) : D(e.onClose);
    }), ae(() => e.trigger, (g) => {
      g === "click" ? document.addEventListener("click", h) : document.removeEventListener("click", h);
    }), ae(() => e.disabled, M), Fe(() => {
      i = Lp(n.value, r.value, O()), e.trigger === "click" && document.addEventListener("click", h);
    }), rr(() => {
      document.removeEventListener("click", h), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: Yp,
      classes: Wp,
      handleClick: b,
      handleMenuClose: h,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: c,
      handleMenuMouseleave: p,
      resize: w,
      open: S,
      close: M
    };
  }
});
xn.install = function(e) {
  e.component(xn.name, xn);
};
var Cs = Symbol("SELECT_BIND_OPTION_KEY"), ks = Symbol("SELECT_COUNT_OPTION_KEY");
function jp() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Cs), {
    length: r
  } = Sn(ks);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Gp() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn(Cs), {
    index: r
  } = Cn(ks);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var qp = {
  label: {},
  value: {}
}, {
  n: Kp,
  classes: Xp
} = ne("option");
function Zp(e, n) {
  var r = te("var-checkbox"), a = Ge("ripple");
  return ke((y(), V(
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
    ), e.multiple ? (y(), me(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Nn(() => {
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
const Jr = Q({
  render: Zp,
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: ur
  },
  props: qp,
  setup(e) {
    var n = P(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = Gp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), c = (b) => {
      n.value = b;
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
      n: Kp,
      classes: Xp,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var Jp = {
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
function Qp(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !gt(e);
}
var {
  n: Jo
} = ne("overlay");
const Qr = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: Jp,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ka(() => e.show, 1), {
      disabled: i
    } = zi(), o = () => {
      D(e.onClick), D(e["onUpdate:show"], !1);
    };
    kt(() => e.show, () => e.lockScroll);
    var l = () => ee("div", Pe({
      class: Jo(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: o
    }), [D(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return ee(Le, {
        name: Jo("--fade")
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
        return ee(ja, {
          to: u,
          disabled: i.value
        }, Qp(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var xp = {
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
  n: _p,
  classes: eh
} = ne("pagination"), nh = ["item-mode", "onClick"];
function rh(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), i = te("var-menu"), o = Ge("ripple");
  return y(), V(
    "ul",
    {
      class: m(e.n())
    },
    [ke((y(), V(
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
    }]]), e.simple ? (y(), V(
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
          onKeydown: n[3] || (n[3] = xi((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
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
    )) : (y(!0), V(
      Ve,
      {
        key: 1
      },
      De(e.pageList, (l, s) => ke((y(), V(
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
        nh
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), ke((y(), V(
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
    }]]), e.showSizeChanger ? (y(), V(
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
          menu: fe(() => [(y(!0), V(
            Ve,
            null,
            De(e.sizeOption, (l, s) => ke((y(), me(
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
    )) : J("v-if", !0), e.showQuickJumper && !e.simple ? (y(), V(
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
          onKeydown: n[9] || (n[9] = xi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : J("v-if", !0), e.totalText ? (y(), V(
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
const xr = Q({
  render: rh,
  name: "VarPagination",
  components: {
    VarMenu: xn,
    VarIcon: Te,
    VarCell: sr,
    VarInput: mr
  },
  directives: {
    Ripple: Ue
  },
  props: xp,
  setup(e) {
    var n = P(!1), r = P(""), a = P("1"), t = P(!1), i = P(!1), o = P(z(e.current) || 1), l = P(z(e.size) || 10), s = P([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(z(e.total) / z(l.value))), v = W(() => {
      var S = l.value * (o.value - 1) + 1, M = Math.min(l.value * o.value, z(e.total));
      return [S, M];
    }), f = W(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (S, M) => je(S) ? !1 : M === 1 ? t.value : i.value, p = (S, M) => je(S) ? "basic" : M === 1 ? "head" : "tail", b = (S, M) => {
      S === o.value || e.disabled || (je(S) ? o.value = S : S === "prev" ? o.value > 1 && (o.value -= 1) : S === "next" ? o.value < d.value && (o.value += 1) : S === "..." && (M === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, h = () => {
      e.disabled || (n.value = !0);
    }, T = (S) => {
      l.value = S, n.value = !1;
    }, O = (S) => {
      var M = /^[1-9][0-9]*$/;
      return M.test(S);
    }, w = (S, M, g) => {
      if (g.target.blur(), O(M)) {
        var E = z(M);
        E > d.value && (E = d.value, a.value = "" + E), E !== o.value && (o.value = E);
      }
      S === "quick" && (r.value = ""), S === "simple" && !O(M) && (a.value = "" + o.value);
    };
    return ae([() => e.current, () => e.size], (S) => {
      var [M, g] = S;
      o.value = z(M) || 1, l.value = z(g || 10);
    }), ae([o, l], (S, M) => {
      var g, E, [k, A] = S, [N, C] = M;
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
        if (N === void 0 || d.value !== F)
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
          for (var I = 1; I < L + 1; I++)
            $.push(k + I - u.value);
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
      s.value = $, N !== void 0 && d.value > 0 && (j == null || j(k, A)), (g = e["onUpdate:current"]) == null || g.call(e, k), (E = e["onUpdate:size"]) == null || E.call(e, A);
    }, {
      immediate: !0
    }), {
      n: _p,
      classes: eh,
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
      clickItem: b,
      showMenu: h,
      clickSize: T,
      setPage: w,
      toNumber: z
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function ki() {
  return ki = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ki.apply(this, arguments);
}
var ah = ki({
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
}, _e(qa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: th,
  classes: ih
} = ne("picker"), Qo = 300, oh = 15, xo = 0, lh = ["onTouchstart", "onTouchmove", "onTouchend"], sh = ["onTransitionend"];
function uh(e, n) {
  var r = te("var-button");
  return y(), me(
    Pa(e.dynamic ? e.n("$-popup") : e.Transition),
    Pe(e.dynamic ? {
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
        Pe({
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
          [(y(!0), V(
            Ve,
            null,
            De(e.scrollColumns, (a) => (y(), V(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Nn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                [(y(!0), V(
                  Ve,
                  null,
                  De(a.column.texts, (t) => (y(), V(
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
                sh
              )],
              42,
              lh
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
const pr = Q({
  render: uh,
  name: "VarPicker",
  components: {
    VarButton: nn,
    VarPopup: yn
  },
  inheritAttrs: !1,
  props: ah,
  setup(e) {
    var n = P([]), r = W(() => Oe(e.optionHeight)), a = W(() => Oe(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = (C, $) => {
      $.scrollEl = C;
    }, s = (C) => {
      D(e["onUpdate:show"], C);
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
      j === C.translate && (C.scrolling = !1, !Y && E(C)), C.translate = j, C.duration = L;
    }, p = (C, $, L) => {
      C.translate += Math.abs($ / L) / 3e-3 * ($ < 0 ? -1 : 1);
    }, b = (C, $) => {
      $.touching = !0, $.scrolling = !1, $.duration = 0, $.translate = Lt($.scrollEl);
    }, h = (C, $) => {
      if (!!$.touching) {
        var {
          clientY: L
        } = C.touches[0], Y = $.prevY !== void 0 ? L - $.prevY : 0;
        $.prevY = L, $.translate += Y, u($);
        var j = performance.now();
        j - $.momentumTime > Qo && ($.momentumTime = j, $.momentumPrevY = $.translate);
      }
    }, T = (C, $) => {
      $.touching = !1, $.scrolling = !0, $.prevY = void 0;
      var L = $.translate - $.momentumPrevY, Y = performance.now() - $.momentumTime, j = Math.abs(L) >= oh && Y <= Qo;
      j && p($, L, Y), $.index = v($), c($, $.index, j ? 1e3 : 200);
    }, O = (C) => {
      C.scrolling = !1, E(C);
    }, w = (C) => C.map(($, L) => {
      var Y, j = be($) ? {
        texts: $
      } : $, F = {
        id: xo++,
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
    }), S = (C) => {
      var $ = [];
      return M($, C, 0, !0), $;
    }, M = function(C, $, L, Y) {
      if (Y === void 0 && (Y = !1), be($) && $.length) {
        var j, F = Y && (j = e.cascadeInitialIndexes[C.length]) != null ? j : 0, Z = {
          id: xo++,
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
    }, g = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), M(n.value, C.columns[C.index].children, C.columnIndex + 1);
    }, E = (C) => {
      var {
        cascade: $,
        onChange: L
      } = e;
      $ && g(C);
      var Y = n.value.some((H) => H.scrolling);
      if (!Y) {
        var {
          texts: j,
          indexes: F
        } = f(), Z = F.every((H, X) => H === o[X]);
        Z || (o = [...F], D(L, j, F));
      }
    }, k = () => {
      if (e.cascade) {
        var C = n.value.find(($) => $.scrolling);
        C && (C.translate = Lt(C.scrollEl), C.index = v(C), c(C, C.index, 0, !0), C.scrolling = !1, g(C));
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
      o = [...$], D(e.onConfirm, C, $);
    }, N = () => {
      k();
      var {
        texts: C,
        indexes: $
      } = f();
      o = [...$], D(e.onCancel, C, $);
    };
    return ae(() => e.columns, (C) => {
      n.value = e.cascade ? S(_i(C)) : w(_i(C));
      var {
        indexes: $
      } = f();
      o = [...$];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: th,
      classes: ih,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Le,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: b,
      handleTouchmove: h,
      handleTouchend: T,
      handleTransitionend: O,
      confirm: A,
      cancel: N,
      dt: wt
    };
  }
});
var xe;
function Sr(e) {
  return new Promise((n) => {
    Sr.close();
    var r = be(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", xe = a;
    var {
      unmountInstance: t
    } = Ea(pr, a, {
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
pr.install = function(e) {
  e.component(pr.name, pr);
};
Sr.Component = pr;
Sr.install = function(e) {
  e.component(pr.name, pr);
};
Sr.close = () => {
  if (xe != null) {
    var e = xe;
    xe = null, Me().then(() => {
      e.show = !1;
    });
  }
};
function dh(e) {
  return ["linear", "circle"].includes(e);
}
var vh = {
  mode: {
    type: String,
    default: "linear",
    validator: dh
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
  n: fh,
  classes: ch
} = ne("progress"), mh = ["viewBox"], ph = ["cx", "cy", "r", "stroke-width"], hh = ["cx", "cy", "r", "stroke-width"];
function gh(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (y(), V(
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
        [e.track ? (y(), V(
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
      ), e.label ? (y(), V(
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
    )) : J("v-if", !0), e.mode === "circle" ? (y(), V(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(y(), V(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (y(), V(
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
          ph
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
          hh
        )],
        14,
        mh
      )), e.label ? (y(), V(
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
const _r = Q({
  render: gh,
  name: "VarProgress",
  props: vh,
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
      } = e, o = "0 0 " + Oe(a) + " " + Oe(a), l = z(i) > 100 ? 100 : Math.round(z(i)), s = (Oe(a) - Oe(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: fh,
      classes: ch,
      toSizeUnit: we,
      multiplySizeUnit: Ze,
      linearProps: n,
      circleProps: r
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var yh = {
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
function _o(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function bh(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        _o(i, a, t, o, l, "next", s);
      }
      function l(s) {
        _o(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: wh,
  classes: Sh
} = ne("pull-refresh"), el = 150;
function Ch(e, n) {
  var r = te("var-icon");
  return y(), V(
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
const ea = Q({
  render: Ch,
  name: "VarPullRefresh",
  components: {
    VarIcon: Te
  },
  props: yh,
  setup(e) {
    var n, r, a = P(0), t = P(null), i = P(null), o = P(0), l = P(-999), s = P("arrow-down"), u = P("default"), d = P(!1), v = P(!0), f = W(() => u.value !== "loading" && u.value !== "success" && !e.disabled), c = W(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: b.value ? e.successBgColor : e.bgColor,
      color: b.value ? e.successColor : e.color
    })), p = W(() => Math.abs(2 * a.value)), b = W(() => u.value === "success"), h = () => new Promise((g) => {
      window.setTimeout(() => {
        v.value = !0, g();
      }, el);
    }), T = (g) => {
      !f.value || (u.value = "pulling", o.value = g.touches[0].clientY);
    }, O = (g) => {
      var E = St(n);
      if (!(E > 0 || !f.value)) {
        E === 0 && l.value > a.value && g.cancelable && g.preventDefault();
        var k = (g.touches[0].clientY - o.value) / 2 + a.value;
        l.value = k >= p.value ? p.value : k, l.value >= p.value * 0.2 ? (v.value = !1, s.value = "refresh", r = h()) : s.value = "arrow-down";
      }
    }, w = /* @__PURE__ */ function() {
      var g = bh(function* () {
        if (!!f.value)
          if (d.value = !0, l.value >= p.value * 0.2) {
            var E;
            yield r, u.value = "loading", l.value = p.value * 0.3, (E = e["onUpdate:modelValue"]) == null || E.call(e, !0), e.onRefresh == null || e.onRefresh();
          } else
            u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
              d.value = !1;
            }, z(e.animationDuration));
      });
      return function() {
        return g.apply(this, arguments);
      };
    }(), S = () => {
      var {
        width: g
      } = i.value.getBoundingClientRect();
      l.value = -(g + g * 0.25), a.value = -(g + g * 0.25);
    }, M = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return ae(() => e.modelValue, (g) => {
      g === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, M();
      }, z(e.successDuration)));
    }), Fe(() => {
      n = Ma(t.value), S();
    }), {
      n: wh,
      classes: Sh,
      iconHasChanged: v,
      ICON_TRANSITION: el,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: T,
      touchMove: O,
      touchEnd: w,
      iconName: s,
      controlStyle: c,
      isSuccess: b
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var kh = {
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
}, $s = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Ts = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function $h() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn($s), {
    length: r
  } = Sn(Ts);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Th() {
  var {
    bindParent: e,
    parentProvider: n
  } = fn($s), {
    index: r
  } = Cn(Ts);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Oh,
  classes: Vh
} = ne("radio");
function Ph(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return y(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      Pe({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((y(), V(
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
const na = Q({
  render: Ph,
  name: "VarRadio",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: kh,
  setup(e) {
    var n = P(!1), r = W(() => n.value === e.checkedValue), a = P(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Th(), {
      form: o,
      bindForm: l
    } = mn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = cn(), f = (S) => {
      Me(() => {
        var {
          validateTrigger: M,
          rules: g,
          modelValue: E
        } = e;
        u(M, S, g, E);
      });
    }, c = (S) => {
      var {
        checkedValue: M,
        onChange: g
      } = e;
      t && n.value === M || (n.value = S, D(e["onUpdate:modelValue"], n.value), D(g, n.value), t == null || t.onToggle(M), f("onChange"));
    }, p = (S) => {
      var {
        disabled: M,
        readonly: g,
        uncheckedValue: E,
        checkedValue: k,
        onClick: A
      } = e;
      o != null && o.disabled.value || M || (D(A, S), !(o != null && o.readonly.value || g) && (a.value = !0, c(r.value ? E : k)));
    }, b = (S) => {
      var {
        checkedValue: M,
        uncheckedValue: g
      } = e;
      n.value = S === M ? M : g;
    }, h = () => {
      D(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), O = (S) => {
      var {
        uncheckedValue: M,
        checkedValue: g
      } = e, E = ![M, g].includes(S);
      E && (S = r.value ? M : g), c(S);
    };
    ae(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var w = {
      sync: b,
      validate: T,
      resetValidation: v,
      reset: h
    };
    return D(i, w), D(l, w), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Oh,
      classes: Vh,
      handleClick: p,
      toggle: O,
      reset: h,
      validate: T,
      resetValidation: v
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
function Mh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Eh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Mh
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
  n: Ih,
  classes: Nh
} = ne("radio-group");
function Dh(e, n) {
  var r = te("var-form-details");
  return y(), V(
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
const ra = Q({
  render: Dh,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: Eh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = $h(), {
      bindForm: t
    } = mn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = cn(), u = W(() => i.value), d = (h) => {
      Me(() => {
        var {
          validateTrigger: T,
          rules: O,
          modelValue: w
        } = e;
        o(T, h, O, w);
      });
    }, v = () => r.forEach((h) => {
      var {
        sync: T
      } = h;
      return T(e.modelValue);
    }), f = (h) => {
      D(e["onUpdate:modelValue"], h), D(e.onChange, h), d("onChange");
    }, c = () => l(e.rules, e.modelValue), p = () => {
      D(e["onUpdate:modelValue"], void 0), s();
    };
    ae(() => e.modelValue, v), ae(() => n.value, v);
    var b = {
      onToggle: f,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return D(t, b), a(b), {
      errorMessage: i,
      n: Ih,
      classes: Nh,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var Bh = {
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
  n: Na
} = ne("rate"), Ah = ["onClick"];
function zh(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return y(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.n())
      },
      [(y(!0), V(
        Ve,
        null,
        De(e.toNumber(e.count), (i) => ke((y(), V(
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
          Ah
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
const aa = Q({
  render: zh,
  name: "VarRate",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: Bh,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = (h) => {
      var {
        count: T,
        gap: O
      } = e;
      return {
        color: u(h).color,
        marginRight: h !== z(T) ? we(O) : 0
      };
    }, s = (h) => {
      var {
        name: T,
        color: O
      } = u(h);
      return {
        [Na("content")]: !0,
        [Na("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Na("--error")]: a.value,
        [Na("--primary")]: T !== e.emptyIcon && !O
      };
    }, u = (h) => {
      var {
        modelValue: T,
        disabled: O,
        disabledColor: w,
        color: S,
        half: M,
        emptyColor: g,
        icon: E,
        halfIcon: k,
        emptyIcon: A
      } = e, N = S;
      return (O || n != null && n.disabled.value) && (N = w), h <= z(T) ? {
        color: N,
        name: E
      } : M && h <= z(T) + 0.5 ? {
        color: N,
        name: k
      } : {
        color: O || n != null && n.disabled.value ? w : g,
        name: A
      };
    }, d = (h, T) => {
      if (e.half) {
        var {
          offsetWidth: O
        } = T.target;
        T.offsetX <= Math.floor(O / 2) && (h -= 0.5);
      }
      D(e["onUpdate:modelValue"], h);
    }, v = () => i(e.rules, z(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (h, T) => {
      var {
        readonly: O,
        disabled: w,
        onChange: S
      } = e;
      O || w || n != null && n.disabled.value || n != null && n.readonly.value || (d(h, T), D(S, h), f());
    }, p = () => {
      D(e["onUpdate:modelValue"], 0), o();
    }, b = {
      reset: p,
      validate: v,
      resetValidation: o
    };
    return D(r, b), {
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
      toSizeUnit: we,
      toNumber: z,
      n: Na
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
function Lh(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Fh = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Lh
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
}, Rh = (e) => (Cr(""), e = e(), kr(), e), Uh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Yh = /* @__PURE__ */ Rh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), Wh = [Yh];
function Hh(e, n) {
  return y(), V("svg", Uh, Wh);
}
const jh = Q({
  render: Hh
});
var Gh = (e) => (Cr(""), e = e(), kr(), e), qh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Kh = /* @__PURE__ */ Gh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), Xh = [Kh];
function Zh(e, n) {
  return y(), V("svg", qh, Xh);
}
const Jh = Q({
  render: Zh
});
var Qh = (e) => (Cr(""), e = e(), kr(), e), xh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, _h = /* @__PURE__ */ Qh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), eg = [_h];
function ng(e, n) {
  return y(), V("svg", xh, eg);
}
const rg = Q({
  render: ng
});
var {
  n: ag,
  classes: tg
} = ne("result");
function ig(e, n) {
  return y(), V(
    Ve,
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
const og = Q({
  render: ig,
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
      n: ag,
      classes: tg,
      toNumber: z
    };
  }
});
var lg = (e) => (Cr(""), e = e(), kr(), e), sg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, ug = /* @__PURE__ */ lg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), dg = [ug];
function vg(e, n) {
  return y(), V("svg", sg, dg);
}
const fg = Q({
  render: vg
});
var cg = (e) => (Cr(""), e = e(), kr(), e), mg = {
  viewBox: "-4 -4 32 32"
}, pg = /* @__PURE__ */ cg(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), hg = [pg];
function gg(e, n) {
  return y(), V("svg", mg, hg);
}
const yg = Q({
  render: gg
});
var {
  n: bg,
  classes: wg
} = ne("result");
function Sg(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [G(e.$slots, "image", {}, () => [e.type ? (y(), V(
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
        [(y(), me(
          Pa(e.type),
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
    )) : J("v-if", !0)]), G(e.$slots, "title", {}, () => [e.title ? (y(), V(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      _(e.title),
      3
    )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (y(), V(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      _(e.description),
      3
    )) : J("v-if", !0)]), e.$slots.footer ? (y(), V(
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
const ta = Q({
  render: Sg,
  name: "VarResult",
  components: {
    Info: jh,
    Success: og,
    Warning: rg,
    Error: Jh,
    Question: fg,
    Empty: yg
  },
  props: Fh,
  setup(e) {
    var n = W(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = W(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? we(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: bg,
      classes: wg,
      toNumber: z,
      toPxNum: Oe,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
function Cg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function kg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var $g = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Cg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: kg
  },
  onClick: {
    type: Function
  }
}, {
  n: Tg,
  classes: Og
} = ne("row");
function Vg(e, n) {
  return y(), V(
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
const ia = Q({
  render: Vg,
  name: "VarRow",
  props: $g,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = tv(), t = W(() => {
      var l = Oe(e.gutter);
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
      n: Tg,
      classes: Og,
      average: t
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
function Pg(e) {
  return ["left", "right", "center"].includes(e);
}
var Mg = {
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
    validator: Pg
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
  classes: Eg
} = ne("select"), Ig = {
  key: 0
}, Ng = {
  key: 1
};
function Dg(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-menu"), i = te("var-form-details");
  return y(), V(
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
              [e.multiple ? (y(), V("div", Ig, [e.chip ? (y(), V(
                "div",
                {
                  key: 0,
                  class: m(e.n("chips"))
                },
                [(y(!0), V(
                  Ve,
                  null,
                  De(e.labels, (o) => (y(), me(
                    r,
                    {
                      class: m(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Nn(() => {
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
              )) : (y(), V(
                "div",
                {
                  key: 1,
                  class: m(e.n("values"))
                },
                _(e.labels.join(e.separator)),
                3
              ))])) : (y(), V(
                "span",
                Ng,
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
        [G(e.$slots, "append-icon", {}, () => [e.clearable ? (y(), me(
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
    ), e.line ? (y(), V(
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
const oa = Q({
  render: Dg,
  name: "VarSelect",
  components: {
    VarIcon: Te,
    VarMenu: xn,
    VarChip: dr,
    VarFormDetails: He
  },
  props: Mg,
  setup(e) {
    var n = P(null), r = P(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = P(""), o = P([]), l = P("0px"), s = P(0), {
      bindForm: u,
      form: d
    } = mn(), {
      length: v,
      options: f,
      bindOptions: c
    } = jp(), {
      errorMessage: p,
      validateWithTrigger: b,
      validate: h,
      resetValidation: T
    } = cn(), O = P(null), w = () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R) {
        var x = U;
        o.value = x.map(g);
      }
      !R && !Hn(U) && (i.value = g(U)), !R && Hn(U) && (i.value = "");
    }, S = (R) => {
      Me(() => {
        var {
          validateTrigger: U,
          rules: x,
          modelValue: ie
        } = e;
        b(U, R, x, ie);
      });
    }, M = (R) => {
      var {
        value: U,
        label: x
      } = R;
      return U.value != null ? U.value : x.value;
    }, g = (R) => {
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
    }, E = () => {
      var {
        hint: R,
        modelValue: U
      } = e;
      if (!R && !Hn(U))
        return Wt("--placeholder-hidden");
      if (R && (!Hn(U) || r.value))
        return Wt("--placeholder-hint");
    }, k = () => n.value && window.getComputedStyle(n.value).width || "0px", A = () => {
      var {
        disabled: R,
        readonly: U,
        onFocus: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || R || U || (l.value = k(), s.value = Oe(e.offsetY), r.value = !0, D(x), S("onFocus"));
    }, N = () => {
      var {
        disabled: R,
        readonly: U,
        onBlur: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || R || U || (D(x), S("onBlur"));
    }, C = (R) => {
      var {
        disabled: U,
        readonly: x,
        multiple: ie,
        onChange: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || x)) {
        var de = ie ? f.filter((Se) => {
          var {
            selected: Re
          } = Se;
          return Re.value;
        }).map(M) : M(R);
        D(e["onUpdate:modelValue"], de), D(le, de), S("onChange"), !ie && (r.value = !1);
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
        D(e["onUpdate:modelValue"], de), D(le, de), S("onClear");
      }
    }, L = (R) => {
      var {
        disabled: U,
        onClick: x
      } = e;
      d != null && d.disabled.value || U || (D(x, R), S("onClick"));
    }, Y = (R) => {
      var {
        disabled: U,
        readonly: x,
        modelValue: ie,
        onClose: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || x)) {
        var de = ie, Se = f.find((Qe) => {
          var {
            label: Ee
          } = Qe;
          return Ee.value === R;
        }), Re = de.filter((Qe) => {
          var Ee;
          return Qe !== ((Ee = Se.value.value) != null ? Ee : Se.label.value);
        });
        D(e["onUpdate:modelValue"], Re), D(le, Re), S("onClose");
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
      w();
    }, F = () => {
      l.value = k(), s.value = Oe(e.offsetY), r.value = !0;
    }, Z = () => {
      r.value = !1;
    }, H = () => h(e.rules, e.modelValue), X = () => {
      D(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    ae(() => e.multiple, () => {
      var {
        multiple: R,
        modelValue: U
      } = e;
      if (R && !be(U))
        throw Error("The modelValue must be an array when multiple is true");
    }), ae(() => e.modelValue, j, {
      deep: !0
    }), ae(() => v.value, j);
    var I = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: C,
      reset: X,
      validate: H,
      resetValidation: T
    };
    return c(I), D(u, I), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: O,
      n: Wt,
      classes: Eg,
      computePlaceholderState: E,
      handleFocus: A,
      handleBlur: N,
      handleClear: $,
      handleClick: L,
      handleClose: Y,
      reset: X,
      validate: H,
      resetValidation: T,
      focus: F,
      blur: Z
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
var Bg = {
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
  n: Ag,
  classes: zg
} = ne("skeleton");
function Lg(e, n) {
  return y(), V(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? J("v-if", !0) : (y(), V(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [G(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (y(), V(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (y(), V(
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
      )) : J("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (y(), V(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (y(), V(
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
        )) : J("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (y(), V(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (y(), V(
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
          )) : J("v-if", !0), (y(!0), V(
            Ve,
            null,
            De(e.toNumber(e.rows), (r, a) => (y(), V(
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
    )) : J("v-if", !0), e.loading && e.fullscreen ? (y(), V(
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
const la = Q({
  render: Lg,
  name: "VarSkeleton",
  props: Bg,
  setup() {
    return {
      n: Ag,
      classes: zg,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
function Fg(e) {
  return ["always", "normal", "never"].includes(e);
}
var Rg = {
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
    validator: Fg
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
  n: nl,
  classes: Ug
} = ne("slider"), Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var Yg = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Wg(e, n) {
  var r = te("var-form-details");
  return y(), V(
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
      ), (y(!0), V(
        Ve,
        null,
        De(e.thumbList, (a) => (y(), V(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: K({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Nn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Nn((t) => e.move(t, a.enumValue), ["stop"]),
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
          Yg
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
const sa = Q({
  render: Wg,
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: Rg,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = P(null), v = P(0), f = P(!1), c = Ne({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), p = W(() => z(e.max) - z(e.min)), b = W(() => v.value / p.value * z(e.step)), h = W(() => {
      var {
        modelValue: H,
        range: X
      } = e, I = [];
      return X && be(H) ? I = [{
        value: M(H[0]),
        enumValue: Ie.First,
        text: g(H[0])
      }, {
        value: M(H[1]),
        enumValue: Ie.Second,
        text: g(H[1])
      }] : je(H) && (I = [{
        value: M(H),
        enumValue: Ie.First,
        text: g(H)
      }]), I;
    }), T = W(() => {
      var {
        activeColor: H,
        range: X,
        modelValue: I
      } = e, R = X && be(I) ? M(Math.min(I[0], I[1])) : 0, U = X && be(I) ? M(Math.max(I[0], I[1])) - R : M(I);
      return {
        width: U + "%",
        left: R + "%",
        background: H
      };
    }), O = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), w = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), S = (H) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[H].active, M = (H) => {
      var {
        min: X,
        max: I
      } = e;
      return H < z(X) ? 0 : H > z(I) ? 100 : (H - z(X)) / p.value * 100;
    }, g = (H) => {
      if (!je(H))
        return 0;
      var X = H;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var I = parseInt("" + X, 10) === X;
      return I ? X : z(X.toPrecision(5));
    }, E = (H, X) => {
      var I = [], {
        step: R,
        range: U,
        modelValue: x,
        onChange: ie,
        min: le
      } = e, de = z(R), Se = Math.round(H / b.value), Re = Se * de + z(le), Qe = c[X].percentValue * de + z(le);
      if (c[X].percentValue = Se, U && be(x) && (I = X === Ie.First ? [Re, x[1]] : [x[0], Re]), Qe !== Re) {
        var Ee = U ? I.map((on) => g(on)) : g(Re);
        D(ie, Ee), D(e["onUpdate:modelValue"], Ee), u();
      }
    }, k = (H) => {
      if (!e.range)
        return Ie.First;
      var X = c[Ie.First].percentValue * b.value, I = c[Ie.Second].percentValue * b.value, R = Math.abs(H - X), U = Math.abs(H - I);
      return R <= U ? Ie.First : Ie.Second;
    }, A = (H, X) => {
      v.value || (v.value = d.value.offsetWidth), !(O.value || w.value) && (D(e.onStart), f.value = !0, c[X].startPosition = H.touches[0].clientX);
    }, N = (H, X) => {
      if (!(O.value || w.value || !f.value)) {
        var I = H.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, I <= 0 ? I = 0 : I >= v.value && (I = v.value), E(I, X);
      }
    }, C = (H) => {
      var {
        range: X,
        modelValue: I,
        onEnd: R,
        step: U,
        min: x
      } = e;
      if (!(O.value || w.value)) {
        var ie = [];
        c[H].currentLeft = c[H].percentValue * b.value, c[H].active = !1;
        var le = c[H].percentValue * z(U) + z(x);
        X && be(I) && (ie = H === Ie.First ? [le, I[1]] : [I[0], le]), D(R, X ? ie : le), f.value = !1;
      }
    }, $ = (H) => {
      if (!(O.value || w.value) && !H.target.closest("." + nl("thumb"))) {
        var X = H.clientX - ru(H.currentTarget), I = k(X);
        E(X, I), C(I);
      }
    }, L = () => {
      var H = z(e.step);
      return isNaN(H) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : H < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: H,
        modelValue: X
      } = e;
      return H && !be(X) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !H && be(X) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : H && be(X) && X.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, j = function(H, X) {
      H === void 0 && (H = e.modelValue), X === void 0 && (X = z(e.step));
      var I = (R) => {
        var {
          min: U,
          max: x
        } = e;
        return R < z(U) ? 0 : R > z(x) ? p.value / X : (R - z(U)) / X;
      };
      e.range && be(H) ? (c[Ie.First].percentValue = I(H[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * b.value, c[Ie.Second].percentValue = I(H[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * b.value) : je(H) && (c[Ie.First].currentLeft = I(H) * b.value);
    }, F = () => {
      var H = e.range ? [0, 0] : 0;
      D(e["onUpdate:modelValue"], H), o();
    }, Z = {
      reset: F,
      validate: l,
      resetValidation: o
    };
    return D(n, Z), ae([() => e.modelValue, () => e.step], (H) => {
      var [X, I] = H;
      !L() || !Y() || f.value || j(X, z(I));
    }), ae(v, () => j()), Fe(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: nl,
      classes: Ug,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: O,
      errorMessage: a,
      thumbsProps: c,
      thumbList: h,
      multiplySizeUnit: Ze,
      toNumber: z,
      showLabel: S,
      start: A,
      move: N,
      end: C,
      click: $
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
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
function Hg(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function jg(e) {
  return Xi.includes(e);
}
var Os = {
  type: {
    type: String,
    validator: jg
  },
  position: {
    type: String,
    default: "top",
    validator: Hg
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
  loadingType: _e(jn, "type"),
  loadingSize: _e(jn, "size"),
  loadingRadius: _e(jn, "radius"),
  loadingColor: $i({}, _e(jn, "color"), {
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
  n: Gg,
  classes: qg
} = ne("snackbar"), Kg = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Xg(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return ke((y(), V(
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
        [e.iconName ? (y(), me(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : J("v-if", !0), e.type === "loading" ? (y(), me(
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
  )), [[Ga, e.show]]);
}
const Vs = Q({
  render: Xg,
  name: "VarSnackbarCore",
  components: {
    VarLoading: kn,
    VarIcon: Te
  },
  props: Os,
  setup(e) {
    var n = P(null), {
      zIndex: r
    } = Ka(() => e.show, 1);
    kt(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? Kg[e.type] : ""), i = () => {
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
      SNACKBAR_TYPE: Xi,
      n: Gg,
      classes: qg,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: Zg
} = ne("snackbar");
function Jg(e, n) {
  var r = te("var-snackbar-core");
  return y(), me(
    ja,
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
          Pe(e.$props, {
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
const ua = Q({
  render: Jg,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Vs
  },
  props: Os,
  setup() {
    var {
      disabled: e
    } = zi();
    return {
      n: Zg,
      disabled: e
    };
  }
});
function Ya() {
  return Ya = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ya.apply(this, arguments);
}
function Qg(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !gt(e);
}
var Xi = ["loading", "success", "warning", "info", "error"], rl = 0, Ti = !1, Oi, Va = !1, dn = Ne([]), xg = {
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
}, _g = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ey = {
  setup() {
    return () => {
      var e = dn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Va && (t.position = "top");
        var l = Va ? "relative" : "absolute", s = Ya({
          position: l
        }, iy(t.position));
        return ee(Vs, Pe(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = tn.zIndex;
      return ee(Zs, Pe(_g, {
        style: {
          zIndex: n
        },
        onAfterEnter: ny,
        onAfterLeave: ry
      }), Qg(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Dn = function(e) {
  var n = qe(e) || je(e) ? {
    content: String(e)
  } : e, r = Ne(Ya({}, xg, n));
  r.show = !0, Ti || (Ti = !0, Oi = Ea(ey).unmountInstance);
  var {
    length: a
  } = dn, t = {
    id: rl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Va)
    ay(t);
  else {
    var i = "update-" + rl;
    ty(r, i);
  }
  return {
    clear() {
      !Va && dn.length ? dn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Xi.forEach((e) => {
  Dn[e] = (n) => (Di(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Dn(n));
});
Dn.install = function(e) {
  e.component(ua.name, ua);
};
Dn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Va && (dn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Va = e);
};
Dn.clear = function() {
  dn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Dn.Component = ua;
function ny(e) {
  var n = e.getAttribute("data-id"), r = dn.find((a) => a.id === z(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function ry(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = dn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = dn.every((t) => t.animationEnd);
  a && (Oi == null || Oi(), dn = Ne([]), Ti = !1);
}
function ay(e) {
  dn.push(e);
}
function ty(e, n) {
  var [r] = dn;
  r.reactiveSnackOptions = Ya({}, r.reactiveSnackOptions, e), r._update = n;
}
function iy(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ua.install = function(e) {
  e.component(ua.name, ua);
};
var Ps = (e) => ["mini", "small", "normal", "large"].includes(e), oy = (e) => Ps(e) || be(e) || je(e) || qe(e), ly = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), sy = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: oy
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
    validator: ly
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, Ms = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
}, uy = (e) => {
  Object.assign(Ms, e);
}, {
  n: Ht,
  classes: dy
} = ne("space");
const da = Q({
  name: "VarSpace",
  props: sy,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      mini: [0, 0],
      small: [0, 0],
      normal: [0, 0],
      large: [0, 0]
    }, t = () => {
      Object.entries(Ms).forEach((l) => {
        var [s, u] = l;
        a[s] = be(u) ? u.map(Oe) : [Oe(u), Oe(u)];
      });
    }, i = (l, s) => s ? a[l] : be(l) ? l.map(Oe) : [Oe(l), Oe(l)], o = (l) => l === "start" || l === "end" ? "flex-" + l : l;
    return bt() && t(), () => {
      var l, {
        inline: s,
        justify: u,
        align: d,
        wrap: v,
        direction: f,
        size: c
      } = e, p = (l = D(r.default)) != null ? l : [], b = Ps(c), [h, T] = i(c, b), O = (M) => {
        var g = [];
        return M.forEach((E) => {
          if (E.type !== Js) {
            if (E.type === Ve && be(E.children)) {
              E.children.forEach((k) => {
                g.push(k);
              });
              return;
            }
            g.push(E);
          }
        }), g;
      };
      p = O(p);
      var w = p.length - 1, S = p.map((M, g) => {
        var E = "0";
        return f === "row" && (u === "start" || u === "center" || u === "end" ? g !== w ? E = h / 2 + "px " + T + "px " + h / 2 + "px 0" : E = h / 2 + "px 0" : u === "space-around" ? E = h / 2 + "px " + T / 2 + "px" : u === "space-between" && (g === 0 ? E = h / 2 + "px " + T / 2 + "px " + h / 2 + "px 0" : g === w ? E = h / 2 + "px 0 " + h / 2 + "px " + T / 2 + "px" : E = h / 2 + "px " + T / 2 + "px")), f === "column" && g !== w && (E = "0 0 " + h + "px 0"), ee("div", {
          style: {
            margin: E
          }
        }, [M]);
      });
      return ee("div", {
        class: dy(Ht(), Ht("$--box"), [s, Ht("--inline")]),
        style: {
          flexDirection: f,
          justifyContent: o(u),
          alignItems: o(d),
          flexWrap: v ? "wrap" : "nowrap",
          margin: f === "row" ? "-" + h / 2 + "px 0" : void 0
        }
      }, [S]);
    };
  }
});
da.install = function(e, n) {
  uy(n), e.component(da.name, da);
};
var vy = {
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
}, Es = Symbol("STEPS_BIND_STEP_KEY"), Is = Symbol("STEPS_COUNT_STEP_KEY");
function fy() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Es), {
    length: r
  } = Sn(Is);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function cy() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Es), {
    index: r
  } = Cn(Is);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: my,
  classes: py
} = ne("step"), hy = {
  key: 3
};
function gy(e, n) {
  var r = te("var-icon");
  return y(), V(
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
          )) : (y(), V(
            "span",
            hy,
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
      ), e.isLastChild ? J("v-if", !0) : (y(), V(
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
const va = Q({
  render: gy,
  name: "VarStep",
  components: {
    VarIcon: Te
  },
  props: vy,
  setup() {
    var e = P(null), n = P(""), r = P(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = cy(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, b = () => v(a.value), h = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(p), ae(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var O = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + O + "px";
      }
    }), {
      n: my,
      classes: py,
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
      getRef: h
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
function yy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var by = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: yy
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
  n: wy
} = ne("steps");
function Sy(e, n) {
  return y(), V(
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
const fa = Q({
  render: Sy,
  name: "VarSteps",
  props: by,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = fy(), l = (u) => {
      D(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: wy
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
var {
  n: Cy
} = ne("style-provider");
const ca = Q({
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
    return () => vl(e.tag, {
      class: Cy(),
      style: bl(e.styleVars)
    }, D(r.default));
  }
});
var jt = [];
function Wa(e) {
  jt.forEach((r) => document.documentElement.style.removeProperty(r)), jt.length = 0;
  var n = bl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), jt.push(a);
  });
}
Wa.Component = ca;
ca.install = function(e) {
  e.component(ca.name, ca);
};
Wa.install = function(e) {
  e.component(ca.name, ca);
};
var ky = {
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
  n: $y,
  classes: Ty
} = ne("switch");
function Oy(e, n) {
  var r = te("var-loading"), a = te("var-form-details"), t = Ge("ripple");
  return y(), V(
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
      ), ke((y(), V(
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
const ma = Q({
  render: Oy,
  name: "VarSwitch",
  components: {
    VarLoading: kn,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: ky,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = () => i(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: p,
        modelValue: b,
        color: h,
        closeColor: T,
        loadingColor: O,
        activeValue: w
      } = e;
      return {
        handle: {
          width: Ze(p),
          height: Ze(p),
          backgroundColor: b === w ? h : T,
          color: O
        },
        ripple: {
          left: b === w ? Ze(p, 0.5) : "-" + Ze(p, 0.5),
          color: b === w ? h : T || "#999",
          width: Ze(p, 2),
          height: Ze(p, 2)
        },
        track: {
          height: Ze(p, 0.72),
          width: Ze(p, 1.9),
          borderRadius: Ze(p, 2 / 3),
          filter: b === w || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: b === w ? h : T
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
        onClick: b,
        onChange: h,
        disabled: T,
        loading: O,
        readonly: w,
        modelValue: S,
        activeValue: M,
        inactiveValue: g,
        "onUpdate:modelValue": E
      } = e;
      if (D(b, p), !(T || O || w || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var k = S === M ? g : M;
        D(h, k), D(E, k), s();
      }
    }, f = () => {
      D(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return D(n, c), {
      n: $y,
      classes: Ty,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Vy = {
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
}, Ns = Symbol("TABS_BIND_TAB_KEY"), Ds = Symbol("TABS_COUNT_TAB_KEY");
function Py() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(Ns), {
    length: r
  } = Sn(Ds);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function My() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Ns), {
    index: r
  } = Cn(Ds);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: rt,
  classes: Ey
} = ne("tab");
function Iy(e, n) {
  var r = Ge("ripple");
  return ke((y(), V(
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
const pa = Q({
  render: Iy,
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: Vy,
  setup(e) {
    var n = P(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = My(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: p
    } = o, b = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(b);
    var h = () => {
      var {
        disabled: w,
        name: S
      } = e;
      return w ? f.value : u.value === S || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: w,
        name: S
      } = e;
      return w ? rt("$-tab--disabled") : u.value === S || u.value === (i == null ? void 0 : i.value) ? rt("$-tab--active") : rt("$-tab--inactive");
    }, O = (w) => {
      var {
        disabled: S,
        name: M,
        onClick: g
      } = e;
      S || (g == null || g(M != null ? M : i.value, w), s(b));
    };
    return ae(() => e.name, p), ae(() => e.disabled, p), {
      n: rt,
      classes: Ey,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: h,
      computeColorClass: T,
      handleClick: O
    };
  }
});
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Bs = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), As = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function Ny() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Bs), {
    length: r
  } = Sn(As);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Dy() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Bs), {
    index: r
  } = Cn(As);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var By = {
  name: {
    type: [String, Number]
  }
}, {
  n: Ay,
  classes: zy
} = ne("tab-item");
function Ly(e, n) {
  var r = te("var-swipe-item");
  return y(), me(
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
const ha = Q({
  render: Ly,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Zn
  },
  props: By,
  setup(e) {
    var n = P(!1), r = P(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = Dy(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: Ay,
      classes: zy,
      current: n,
      initSlot: r
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
var {
  n: Fy,
  classes: Ry
} = ne("table");
function Uy(e, n) {
  return y(), V(
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
    ), e.$slots.footer ? (y(), V(
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
const ga = Q({
  render: Uy,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: we,
      n: Fy,
      classes: Ry
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
function al(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Yy = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: al
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: al
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
  offsetTop: _e(vs, "offsetTop"),
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
function tl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Wy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        tl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        tl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Hy,
  classes: jy
} = ne("tabs");
function Gy(e, n) {
  return y(), me(
    Pa(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: fe(() => [B(
        "div",
        Pe({
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
const ya = Q({
  render: Gy,
  name: "VarTabs",
  components: {
    VarSticky: Jn
  },
  inheritAttrs: !1,
  props: Yy,
  setup(e) {
    var n = P("0px"), r = P("0px"), a = P("0px"), t = P("0px"), i = P(!1), o = P(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), v = W(() => e.itemDirection), {
      tabList: f,
      bindTabList: c,
      length: p
    } = Py(), b = (k) => {
      var A, N = (A = k.name.value) != null ? A : k.index.value, {
        active: C,
        onChange: $,
        onClick: L
      } = e;
      D(e["onUpdate:active"], N), D(L, N), N !== C && D($, N);
    }, h = () => f.find((k) => {
      var {
        name: A
      } = k;
      return e.active === A.value;
    }), T = (k) => f.find((A) => {
      var {
        index: N
      } = A;
      return (k != null ? k : e.active) === N.value;
    }), O = () => {
      if (p.value !== 0) {
        var {
          active: k
        } = e;
        if (je(k)) {
          var A = k > p.value - 1 ? p.value - 1 : 0;
          return D(e["onUpdate:active"], A), T(A);
        }
      }
    }, w = () => {
      i.value = f.length >= 5;
    }, S = (k) => {
      var {
        element: A
      } = k, N = A.value;
      e.layoutDirection === "horizontal" ? (n.value = (N == null ? void 0 : N.offsetWidth) + "px", a.value = (N == null ? void 0 : N.offsetLeft) + "px") : (r.value = (N == null ? void 0 : N.offsetHeight) + "px", t.value = (N == null ? void 0 : N.offsetTop) + "px");
    }, M = (k) => {
      var {
        element: A
      } = k;
      if (!!i.value) {
        var N = o.value, C = A.value;
        if (e.layoutDirection === "horizontal") {
          var $ = C.offsetLeft + C.offsetWidth / 2 - N.offsetWidth / 2;
          lt(N, {
            left: $,
            animation: ao
          });
        } else {
          var L = C.offsetTop + C.offsetHeight / 2 - N.offsetHeight / 2;
          lt(N, {
            top: L,
            animation: ao
          });
        }
      }
    }, g = () => {
      var k = h() || T() || O();
      !k || k.disabled.value || (w(), S(k), M(k));
    }, E = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: g,
      onTabClick: b
    };
    return c(E), ae(() => p.value, /* @__PURE__ */ Wy(function* () {
      yield Tn(), g();
    })), ae(() => e.active, g), Fe(() => window.addEventListener("resize", g)), rr(() => window.removeEventListener("resize", g)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Le,
      toSizeUnit: we,
      n: Hy,
      classes: jy,
      resize: g
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
var qy = {
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
function il(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ky(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        il(i, a, t, o, l, "next", s);
      }
      function l(s) {
        il(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Xy
} = ne("tabs-items");
function Zy(e, n) {
  var r = te("var-swipe");
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
      default: fe(() => [G(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const ba = Q({
  render: Zy,
  name: "VarTabsItems",
  components: {
    VarSwipe: Xn
  },
  props: qy,
  setup(e) {
    var n = P(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Ny(), i = (f) => r.find((c) => {
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
      !p || (r.forEach((b) => {
        var {
          setCurrent: h
        } = b;
        return h(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (f) => {
      var c, p = r.find((h) => {
        var {
          index: T
        } = h;
        return T.value === f;
      }), b = (c = p.name.value) != null ? c : p.index.value;
      D(e["onUpdate:active"], b);
    }, d = () => n.value, v = {};
    return a(v), ae(() => e.active, s), ae(() => t.value, /* @__PURE__ */ Ky(function* () {
      yield Tn(), s(e.active);
    })), {
      swipe: n,
      n: Xy,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
const Jy = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Qy = {
  "--badge-default-color": "#555"
}, xy = {
  "--button-default-color": "#303030"
}, _y = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, e0 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, n0 = {
  "--checkbox-unchecked-color": "#fff"
}, r0 = {
  "--chip-default-color": "#555"
}, a0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, t0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, i0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, o0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, l0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, s0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, u0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, d0 = {
  "--popup-content-background-color": "#1e1e1e"
}, v0 = {
  "--pull-refresh-background": "#303030"
}, f0 = {
  "--radio-unchecked-color": "#fff"
}, c0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, m0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, p0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, h0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, g0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, y0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, b0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, w0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, S0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, C0 = {
  "--tabs-background": "#1e1e1e"
}, k0 = {
  "--app-bar-color": "#272727"
}, $0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, T0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, O0 = {
  "--menu-background-color": "#272727"
};
function Vi() {
  return Vi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Vi.apply(this, arguments);
}
const V0 = Vi({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, xy, e0, _y, w0, t0, p0, C0, y0, d0, i0, Jy, r0, Qy, S0, a0, v0, g0, h0, s0, b0, l0, m0, f0, n0, o0, u0, k0, $0, T0, O0, c0);
var Pi = {
  dark: V0
}, sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Je = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ol = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function P0(e) {
  return ["ampm", "24hr"].includes(e);
}
var M0 = {
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
    validator: P0
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
}, zs = (e, n) => e === "24hr" || n === "am", Zi = (e, n, r) => {
  var a = sn.findIndex((i) => z(i) === z(r)), t = zs(e, n) ? r : Je[a];
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
}, Ls = (e) => {
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
  } = Zi(t, i, o), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: b
    } = en(l);
    f = p === v && a > b;
  }
  if (!l && s) {
    var {
      hour: h,
      minute: T
    } = en(s);
    f = h === v && a < T;
  }
  if (l && s) {
    var {
      hour: O,
      minute: w
    } = en(l), {
      hour: S,
      minute: M
    } = en(s);
    f = S === v && a < M || O === v && a > w;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Fs = (e) => {
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
  } = Zi(t, i, o), c = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: h,
      second: T
    } = en(s);
    c = b === f && h < l || h === l && a > T;
  }
  if (!s && u) {
    var {
      hour: O,
      minute: w,
      second: S
    } = en(u);
    c = O === f && w > l || w === l && a > S;
  }
  if (s && u) {
    var {
      hour: M,
      minute: g,
      second: E
    } = en(s), {
      hour: k,
      minute: A,
      second: N
    } = en(u);
    c = M === f && g < l || k === f && A > l || M === f && g === l && a > E || k === f && A === l && a < N;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: E0,
  classes: I0
} = ne("time-picker");
function N0(e, n) {
  return y(), V(
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
    ), (y(!0), V(
      Ve,
      null,
      De(e.timeScales, (r, a) => (y(), V(
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
    )), e.format === "24hr" && e.type === "hour" ? (y(), V(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(y(!0), V(
        Ve,
        null,
        De(e.hours24, (r, a) => (y(), V(
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
const D0 = Q({
  render: N0,
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
        var h = e.rad / 30;
        return h >= 0 ? h : h + 12;
      }
    }), s = W(() => e.type === "hour" ? sn : ol), u = (h, T) => {
      var O;
      h = (O = h) != null ? O : e.type === "minute" ? e.time.minute : e.time.second;
      var w = e.type === "minute" ? Ls : Fs, S = {
        time: z(h),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(S, "minute"), w(S);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var h = e.isInner ? Je[l.value] : s.value[l.value];
      return s.value === ol ? u() ? "#bdbdbd" : e.color : f(h) ? "#bdbdbd" : e.color;
    }, v = (h, T) => T ? l.value === h && e.isInner : l.value === h && (!e.isInner || e.type !== "hour"), f = (h) => {
      if (e.type === "hour") {
        if (zs(e.format, e.ampm))
          return t.value.includes(h);
        var T = sn.findIndex((O) => O === h);
        return i.value.includes(T);
      }
      return u(h, !0);
    }, c = (h, T, O) => {
      var w = 2 * Math.PI / 12 * h - Math.PI / 2, S = 50 * (1 + Math.cos(w)), M = 50 * (1 + Math.sin(w)), g = () => v(h, O) ? f(T) ? {
        backgroundColor: "#bdbdbd",
        color: "#fff"
      } : {
        backgroundColor: e.color,
        color: void 0
      } : {
        backgroundColor: void 0,
        color: void 0
      }, {
        backgroundColor: E,
        color: k
      } = g();
      return {
        left: S + "%",
        top: M + "%",
        backgroundColor: E,
        color: k
      };
    }, p = () => {
      var {
        width: h,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: h,
        height: T
      };
    }, b = () => {
      if (l.value !== void 0) {
        var h = e.ampm === "am" ? sn : Je;
        return hr(h[l.value], 2, "0");
      }
    };
    return ae([l, () => e.isInner], (h, T) => {
      var [O, w] = h, [S, M] = T, g = O === S && w === M;
      if (!(g || e.type !== "hour" || l.value === void 0)) {
        var E = w ? Je[l.value] : b(), k = e.useSeconds ? ":" + e.time.second : "", A = E + ":" + e.time.minute + k;
        e.preventNextUpdate || r("update", A), r("change-prevent-update");
      }
    }), ae(() => e.rad, (h, T) => {
      if (!(e.type === "hour" || h === void 0 || T === void 0)) {
        var O = h / 6 >= 0 ? h / 6 : h / 6 + 60, w = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (O !== w) {
          var S, {
            hourStr: M
          } = Zi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var g = re().minute(O).format("mm"), E = e.useSeconds ? ":" + e.time.second : "";
            S = M + ":" + g + E;
          }
          if (e.type === "second") {
            var k = re().second(O).format("ss"), A = e.useSeconds ? ":" + k : "";
            S = M + ":" + e.time.minute + A;
          }
          r("update", S);
        }
      }
    }), ae([() => e.max, () => e.min, () => e.allowedTime], (h) => {
      var [T, O, w] = h;
      if (t.value = [], T && !O) {
        var {
          hour: S
        } = en(T), M = sn.filter((Z) => z(Z) > S), g = Je.filter((Z) => z(Z) > S);
        t.value = [...M, ...g];
      }
      if (!T && O) {
        var {
          hour: E
        } = en(O), k = sn.filter((Z) => z(Z) < E), A = Je.filter((Z) => z(Z) < E);
        t.value = [...k, ...A];
      }
      if (T && O) {
        var {
          hour: N
        } = en(T), {
          hour: C
        } = en(O), $ = sn.filter((Z) => z(Z) < C || z(Z) > N), L = Je.filter((Z) => z(Z) < C || z(Z) > N);
        t.value = [...$, ...L];
      }
      if (w != null && w.hours) {
        var {
          hours: Y
        } = w, j = sn.filter((Z) => !Y(z(Z))), F = Je.filter((Z) => !Y(z(Z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...j, ...F])];
      }
      i.value = t.value.map((Z) => Je.findIndex((H) => Z === H)).filter((Z) => Z >= 0);
    }, {
      immediate: !0
    }), {
      n: E0,
      classes: I0,
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
  n: B0,
  classes: A0
} = ne("time-picker"), z0 = (e) => (Cr(""), e = e(), kr(), e), L0 = /* @__PURE__ */ z0(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
)), F0 = {
  key: 0
};
function R0(e, n) {
  var r = te("clock");
  return y(), V(
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
        ), L0, B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          _(e.time.minute),
          3
        ), e.useSeconds ? (y(), V("span", F0, ":")) : J("v-if", !0), e.useSeconds ? (y(), V(
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
      ), e.format === "ampm" ? (y(), V(
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
            default: fe(() => [(y(), me(
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
const wa = Q({
  render: R0,
  name: "VarTimePicker",
  components: {
    Clock: D0
  },
  props: M0,
  setup(e) {
    var n = P(null), r = P(null), a = P(null), t = P(!1), i = P(!1), o = P(!1), l = P(!1), s = P(!1), u = P(void 0), d = P(0), v = P(0), f = P("hour"), c = P("am"), p = P(!1), b = P(!1), h = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), O = Ne({
      x: [],
      y: []
    }), w = W(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (I) => {
      D(e["onUpdate:modelValue"], I), D(e.onChange, I);
    }, M = (I) => I * 57.29577951308232, g = (I) => {
      l.value = !1, b.value = !1, f.value = I;
    }, E = (I) => {
      var {
        disableHour: R
      } = a.value, U = sn.findIndex((le) => z(le) === z(h.value.hour)), x = I === "am" ? sn : Je, ie = [...x.slice(U), ...x.slice(0, U)];
      return ie.find((le, de) => (i.value = de !== 0, !R.includes(le)));
    }, k = (I) => {
      if (!e.readonly) {
        c.value = I;
        var R = E(I);
        if (!!R) {
          var U = e.useSeconds ? ":" + h.value.second : "", x = hr(R, 2, "0") + ":" + h.value.minute + U;
          S(x);
        }
      }
    }, A = (I, R) => {
      var U = I >= O.x[0] && I <= O.x[1], x = R >= O.y[0] && R <= O.y[1];
      return U && x;
    }, N = (I) => {
      var R = e.format === "24hr" ? "HH" : "hh", {
        hour: U,
        minute: x,
        second: ie
      } = en(I);
      return {
        hour: re().hour(U).format(R),
        minute: re().minute(x).format("mm"),
        second: re().second(ie).format("ss")
      };
    }, C = (I) => {
      var R = I / 30;
      return R >= 0 ? R : R + 12;
    }, $ = () => {
      var {
        width: I,
        height: R
      } = a.value.getSize(), U = T.x - I / 2 - 8, x = T.x + I / 2 + 8, ie = T.y - R / 2 - 8, le = T.y + R / 2 + 8;
      return {
        rangeXMin: U,
        rangeXMax: x,
        rangeYMin: ie,
        rangeYMax: le
      };
    }, L = (I, R, U) => {
      var {
        disableHour: x
      } = a.value;
      o.value = A(I, R);
      var ie = Math.round(U / 30) * 30 + 90, le = C(ie), de = t.value ? sn[le] : Je[le];
      if (x.includes(de) || (t.value = e.format === "24hr" ? A(I, R) : !1), t.value === o.value) {
        var Se = t.value || c.value === "pm" ? Je[le] : sn[le];
        p.value = x.includes(Se), !p.value && (u.value = ie, l.value = !0);
      }
    }, Y = (I) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(I / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: h.value.hour,
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      b.value = Ls(ie), !b.value && (d.value = U, s.value = !0);
    }, j = (I) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(I / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: h.value.hour,
        minute: z(h.value.minute),
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      Fs(ie) || (v.value = U);
    }, F = () => {
      var {
        left: I,
        top: R,
        width: U,
        height: x
      } = n.value.getBoundingClientRect();
      if (T.x = I + U / 2, T.y = R + x / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: le,
          rangeYMin: de,
          rangeYMax: Se
        } = $();
        O.x = [ie, le], O.y = [de, Se];
      }
    }, Z = (I) => {
      if (I.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: R,
          clientY: U
        } = I.touches[0], x = R - T.x, ie = U - T.y, le = Math.round(M(Math.atan2(ie, x)));
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
    return ae(() => e.modelValue, (I) => {
      if (I) {
        var {
          hour: R,
          minute: U,
          second: x
        } = en(I), ie = re().hour(R).format("hh"), le = re().hour(R).format("HH"), de = re().minute(U).format("mm"), Se = re().second(x).format("ss");
        u.value = (ie === "12" ? 0 : z(ie)) * 30, d.value = z(de) * 6, v.value = z(Se) * 6, h.value = N(I), e.format !== "24hr" && (c.value = hr("" + R, 2, "0") === le && Je.includes(le) ? "pm" : "am"), t.value = e.format === "24hr" && Je.includes(le);
      }
    }, {
      immediate: !0
    }), {
      n: B0,
      classes: A0,
      getRad: w,
      time: h,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: Z,
      checkPanel: g,
      checkAmpm: k,
      end: H,
      update: S,
      changePreventUpdate: X
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var U0 = {
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
function ll(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function sl(e) {
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
  n: Y0,
  classes: W0
} = ne("uploader"), H0 = 0, j0 = ["onClick"], G0 = ["onClick"], q0 = ["src", "alt"], K0 = ["multiple", "accept", "capture", "disabled"], X0 = ["src"];
function Z0(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = te("var-popup"), i = Ge("ripple");
  return y(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(y(!0), V(
        Ve,
        null,
        De(e.files, (o) => ke((y(), V(
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
          ), e.removable ? (y(), V(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Nn((l) => e.handleRemove(o), ["stop"])
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
            G0
          )) : J("v-if", !0), o.cover ? (y(), V(
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
            q0
          )) : J("v-if", !0), B(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          j0
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((y(), V(
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
          K0
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
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (y(), V(
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
            X0
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
const Sa = Q({
  render: Z0,
  name: "VarUploader",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarPopup: yn,
    VarFormDetails: He
  },
  props: U0,
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
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = W(() => {
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
        if (qe(H) && no(H)) {
          er(H);
          return;
        }
        qe(H) && ro(H) && (a.value = Y, r.value = !0);
      }
    }, p = (Y) => ({
      id: H0++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), b = (Y) => {
      var j = Y.target, {
        files: F
      } = j;
      return Array.from(F);
    }, h = (Y) => new Promise((j) => {
      var F = new FileReader();
      F.onload = () => {
        var Z = F.result;
        Y.file.type.startsWith("image") && (Y.cover = Z), Y.url = Z, j(Y);
      }, F.readAsDataURL(Y.file);
    }), T = (Y) => Y.map(h), O = (Y) => {
      var {
        onBeforeRead: j
      } = e;
      return Y.map((F) => new Promise((Z) => {
        var H = j ? j(Ne(F)) : !0;
        Promise.resolve(H).then((X) => Z({
          valid: X,
          varFile: F
        }));
      }));
    }, w = /* @__PURE__ */ function() {
      var Y = sl(function* (j) {
        var {
          maxsize: F,
          maxlength: Z,
          modelValue: H,
          onOversize: X,
          onAfterRead: I,
          readonly: R,
          disabled: U
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || U || R)) {
          var x = (Ee) => Ee.filter((on) => on.file.size > z(F) ? (D(X, Ne(on)), !1) : !0), ie = (Ee) => {
            var on = Math.min(Ee.length, z(Z) - H.length);
            return Ee.slice(0, on);
          }, le = b(j), de = le.map(p);
          de = F != null ? x(de) : de, de = Z != null ? ie(de) : de;
          var Se = yield Promise.all(T(de)), Re = yield Promise.all(O(Se)), Qe = Re.filter((Ee) => {
            var {
              valid: on
            } = Ee;
            return on;
          }).map((Ee) => {
            var {
              varFile: on
            } = Ee;
            return on;
          });
          D(e["onUpdate:modelValue"], [...H, ...Qe]), j.target.value = "", Qe.forEach((Ee) => D(I, Ne(Ee)));
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var Y = sl(function* (j) {
        var {
          disabled: F,
          readonly: Z,
          modelValue: H,
          onBeforeRemove: X,
          onRemove: I
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || F || Z) && !(X && !(yield X(j)))) {
          var R = H.filter((U) => U !== j);
          D(I, j), A("onRemove"), D(e["onUpdate:modelValue"], R);
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), M = () => e.modelValue.filter((Y) => Y.state === "success"), g = () => e.modelValue.filter((Y) => Y.state === "error"), E = () => e.modelValue.filter((Y) => Y.state === "loading"), k = {
      getSuccess: M,
      getError: g,
      getLoading: E
    }, A = (Y) => {
      Me(() => {
        var {
          validateTrigger: j,
          rules: F,
          modelValue: Z
        } = e;
        s(j, Y, F, Z, k);
      });
    }, N = !1, C = () => u(e.rules, e.modelValue, k), $ = () => {
      N = !0, D(e["onUpdate:modelValue"], []), d();
    }, L = {
      validate: C,
      resetValidation: d,
      reset: $
    };
    return D(o, L), ae(() => e.modelValue, () => {
      !N && A("onChange"), N = !1;
    }, {
      deep: !0
    }), {
      n: Y0,
      classes: W0,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: ro,
      isHTMLSupportImage: no,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: f,
      handleChange: w,
      handleRemove: S,
      getSuccess: M,
      getError: g,
      getLoading: E,
      validate: C,
      resetValidation: d,
      reset: $
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
function J0(e) {
  gr.install && e.use(gr), Nr.install && e.use(Nr), Dr.install && e.use(Dr), lr.install && e.use(lr), Br.install && e.use(Br), Ar.install && e.use(Ar), nn.install && e.use(nn), zr.install && e.use(zr), sr.install && e.use(sr), ur.install && e.use(ur), Lr.install && e.use(Lr), dr.install && e.use(dr), Fr.install && e.use(Fr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), tn.install && e.use(tn), Yr.install && e.use(Yr), Wr.install && e.use(Wr), Hr.install && e.use(Hr), yr.install && e.use(yr), jr.install && e.use(jr), Kn.install && e.use(Kn), He.install && e.use(He), Te.install && e.use(Te), Gr.install && e.use(Gr), er.install && e.use(er), qr.install && e.use(qr), Kr.install && e.use(Kr), mr.install && e.use(mr), pt.install && e.use(pt), Xr.install && e.use(Xr), Zr.install && e.use(Zr), kn.install && e.use(kn), Fa.install && e.use(Fa), Qt.install && e.use(Qt), xn.install && e.use(xn), Jr.install && e.use(Jr), Qr.install && e.use(Qr), xr.install && e.use(xr), Sr.install && e.use(Sr), yn.install && e.use(yn), _r.install && e.use(_r), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), Ue.install && e.use(Ue), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), Dn.install && e.use(Dn), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), Jn.install && e.use(Jn), Wa.install && e.use(Wa), Xn.install && e.use(Xn), Zn.install && e.use(Zn), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), Pi.install && e.use(Pi), wa.install && e.use(wa), Sa.install && e.use(Sa);
}
const x0 = {
  install: J0,
  ActionSheet: gr,
  AppBar: Nr,
  BackTop: Dr,
  Badge: lr,
  BottomNavigation: Br,
  BottomNavigationItem: Ar,
  Button: nn,
  Card: zr,
  Cell: sr,
  Checkbox: ur,
  CheckboxGroup: Lr,
  Chip: dr,
  Col: Fr,
  Collapse: Rr,
  CollapseItem: Ur,
  Context: tn,
  Countdown: Yr,
  Counter: Wr,
  DatePicker: Hr,
  Dialog: yr,
  Divider: jr,
  Form: Kn,
  FormDetails: He,
  Icon: Te,
  Image: Gr,
  ImagePreview: er,
  IndexAnchor: qr,
  IndexBar: Kr,
  Input: mr,
  Lazy: pt,
  Link: Xr,
  List: Zr,
  Loading: kn,
  LoadingBar: Fa,
  Locale: Qt,
  Menu: xn,
  Option: Jr,
  Overlay: Qr,
  Pagination: xr,
  Picker: Sr,
  Popup: yn,
  Progress: _r,
  PullRefresh: ea,
  Radio: na,
  RadioGroup: ra,
  Rate: aa,
  Result: ta,
  Ripple: Ue,
  Row: ia,
  Select: oa,
  Skeleton: la,
  Slider: sa,
  Snackbar: Dn,
  Space: da,
  Step: va,
  Steps: fa,
  Sticky: Jn,
  StyleProvider: Wa,
  Swipe: Xn,
  SwipeItem: Zn,
  Switch: ma,
  Tab: pa,
  TabItem: ha,
  Table: ga,
  Tabs: ya,
  TabsItems: ba,
  Themes: Pi,
  TimePicker: wa,
  Uploader: Sa
};
export {
  gr as ActionSheet,
  Nr as AppBar,
  Dr as BackTop,
  lr as Badge,
  Br as BottomNavigation,
  Ar as BottomNavigationItem,
  nn as Button,
  zr as Card,
  sr as Cell,
  ur as Checkbox,
  Lr as CheckboxGroup,
  dr as Chip,
  Fr as Col,
  Rr as Collapse,
  Ur as CollapseItem,
  tn as Context,
  Yr as Countdown,
  Wr as Counter,
  Hr as DatePicker,
  yr as Dialog,
  jr as Divider,
  Kn as Form,
  He as FormDetails,
  Te as Icon,
  Gr as Image,
  er as ImagePreview,
  qr as IndexAnchor,
  Kr as IndexBar,
  mr as Input,
  pt as Lazy,
  Xr as Link,
  Zr as List,
  kn as Loading,
  Fa as LoadingBar,
  Qt as Locale,
  xn as Menu,
  Jr as Option,
  Qr as Overlay,
  xr as Pagination,
  Sr as Picker,
  yn as Popup,
  _r as Progress,
  ea as PullRefresh,
  na as Radio,
  ra as RadioGroup,
  aa as Rate,
  ta as Result,
  Ue as Ripple,
  ia as Row,
  oa as Select,
  la as Skeleton,
  sa as Slider,
  Dn as Snackbar,
  da as Space,
  va as Step,
  fa as Steps,
  Jn as Sticky,
  Wa as StyleProvider,
  Xn as Swipe,
  Zn as SwipeItem,
  ma as Switch,
  pa as Tab,
  ha as TabItem,
  ga as Table,
  ya as Tabs,
  ba as TabsItems,
  Pi as Themes,
  wa as TimePicker,
  Sa as Uploader,
  x0 as default,
  J0 as install
};
