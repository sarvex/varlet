import { reactive as Ne, ref as M, onMounted as Le, onUnmounted as rr, onActivated as Vi, onDeactivated as Pi, getCurrentInstance as ja, provide as sl, computed as Y, inject as ul, nextTick as Ve, createApp as Hs, onBeforeUnmount as Ei, h as dl, isVNode as Mi, watch as ae, onBeforeMount as js, defineComponent as _, createVNode as ne, Teleport as ht, Transition as Re, withDirectives as ke, vShow as Ga, mergeProps as Pe, openBlock as h, createBlock as me, resolveDynamicComponent as Va, normalizeClass as c, normalizeStyle as X, resolveComponent as te, resolveDirective as Ge, withCtx as fe, createElementVNode as D, renderSlot as G, toDisplayString as x, createElementBlock as P, Fragment as Oe, renderList as De, createCommentVNode as J, onUpdated as Ii, createTextVNode as he, pushScopeId as Cr, popScopeId as kr, withModifiers as Nn, normalizeProps as vl, guardReactiveProps as Gs, vModelText as qs, toRefs as Xs, withKeys as xi, toRaw as _i, TransitionGroup as Ks, Comment as Zs } from "vue";
var fl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(fl);
const tn = Ne(fl), qe = (e) => typeof e == "string", Ht = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Ni = (e) => Object.prototype.toString.call(e) === "[object Object]", Js = (e) => typeof e == "object" && e !== null, Ce = (e) => Array.isArray(e), Qs = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Hn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Ht(e) ? Number(e) : e, gt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Di = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Bi = () => typeof window < "u", eo = (e) => [...new Set(e)], xs = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase();
var no = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), ro = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), _s = (e) => {
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
      this.has(r) && gt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, ao = (e) => e, to = (e) => Math.pow(e, 3), cl = (e) => e < 0.5 ? to(e * 2) / 2 : 1 - to((1 - e) * 2) / 2, yt = (e, n) => e == null ? n : e, ml = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, hr = function(e, n, r) {
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
function eu(e) {
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
function nu(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function bt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ai(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function ru(e) {
  return jt.apply(this, arguments);
}
function jt() {
  return jt = eu(function* (e) {
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
  }), jt.apply(this, arguments);
}
function At(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Pa(e) {
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
function au(e) {
  for (var n = [], r = e; r !== window; )
    r = Pa(r), n.push(r);
  return n;
}
var pl = (e) => qe(e) && e.endsWith("rem"), tu = (e) => qe(e) && e.endsWith("px") || je(e), iu = (e) => qe(e) && e.endsWith("%"), hl = (e) => qe(e) && e.endsWith("vw"), gl = (e) => qe(e) && e.endsWith("vh"), ou = (e) => qe(e) && e.startsWith("calc("), lu = (e) => qe(e) && e.startsWith("var("), Ie = (e) => {
  if (je(e))
    return e;
  if (tu(e))
    return +e.replace("px", "");
  if (hl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (gl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (pl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? z(e) : 0;
}, be = (e) => {
  if (e != null)
    return iu(e) || hl(e) || gl(e) || pl(e) || ou(e) || lu(e) ? e : Ie(e) + "px";
}, Ze = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = be(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function $n(e) {
  var n = ml();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function su(e) {
  var n = ml();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function wt(e) {
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
function ot(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = bt(e), s = Ai(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - o) / t;
      if (v < 1) {
        var f = l + (r - l) * i(v), m = s + (a - s) * i(v);
        e.scrollTo(m, f), $n(d);
      } else
        e.scrollTo(a, r), u();
    };
    $n(d);
  });
}
function yl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + xs(a);
    return n[i] = t, n;
  }, {});
}
function uu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var du = ["collect", "clear"];
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
function vu(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
}
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
function _e(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function fu(e) {
  var n = Hs(e), r = document.createElement("div");
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
      return () => dl(e, lt({}, n, r));
    }
  }, {
    unmount: t
  } = fu(a);
  return {
    unmountInstance: t
  };
}
function cu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Mi(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function Sn(e) {
  var n = Ne([]), r = ja(), a = () => {
    var l = cu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    gt(n, l);
  };
  sl(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = Y(() => n.length);
  return {
    length: o
  };
}
function Cn(e) {
  if (!bl(e))
    return {
      index: null
    };
  var n = ul(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = ja();
  Le(() => {
    Ve().then(() => r(i));
  }), rr(() => {
    Ve().then(() => a(i));
  });
  var o = Y(() => t.indexOf(i));
  return {
    index: o
  };
}
function vn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    gt(n, i);
  }, t = (i) => {
    sl(e, lt({
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
  if (!bl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = ul(e), {
    collect: r,
    clear: a
  } = n, t = vu(n, du), i = (o) => {
    Le(() => r(o)), Ei(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function bl(e) {
  var n = ja();
  return e in n.provides;
}
function cn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = lo(function* (i, o, l) {
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
function mu(e) {
  Le(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), rr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function wl() {
  var e = M(!1);
  return Vi(() => {
    e.value = !1;
  }), Pi(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function ee(e) {
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
var {
  n: Sl
} = ee("ripple"), so = 250;
function pu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function hu(e, n) {
  var {
    top: r,
    left: a
  } = e.getBoundingClientRect(), {
    clientWidth: t,
    clientHeight: i
  } = e, o = Math.sqrt(Math.pow(t, 2) + Math.pow(i, 2)) / 2, l = o * 2, s = n.touches[0].clientX - a, u = n.touches[0].clientY - r, d = (t - o * 2) / 2, v = (i - o * 2) / 2, f = s - o, m = u - o;
  return {
    x: f,
    y: m,
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
      } = hu(this, e), s = document.createElement("div");
      s.classList.add(Sl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), pu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Gt() {
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
  !uu() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function gu(e, n) {
  var r, a, t;
  e._ripple = st({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : tn.touchmoveForbid,
    removeRipple: Gt.bind(e)
  }), e.addEventListener("touchstart", Cl, {
    passive: !0
  }), e.addEventListener("touchmove", kl, {
    passive: !0
  }), e.addEventListener("dragstart", Gt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function yu(e) {
  e.removeEventListener("touchstart", Cl), e.removeEventListener("touchmove", kl), e.removeEventListener("dragstart", Gt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function bu(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : tn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = st({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Ue = {
  mounted: gu,
  unmounted: yu,
  updated: bu,
  install(e) {
    e.directive("ripple", this);
  }
};
function wu(e) {
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
    validator: wu
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
function Ka(e) {
  tn.locks[e] = 1, $l();
}
function Za(e) {
  delete tn.locks[e], $l();
}
function zi(e, n) {
  var {
    uid: r
  } = ja();
  n && ae(n, (a) => {
    a === !1 ? Za(r) : a === !0 && e() === !0 && Ka(r);
  }), ae(e, (a) => {
    n && n() === !1 || (a === !0 ? Ka(r) : Za(r));
  }), js(() => {
    n && n() === !1 || e() === !0 && Ka(r);
  }), rr(() => {
    n && n() === !1 || e() === !0 && Za(r);
  }), Vi(() => {
    n && n() === !1 || e() === !0 && Ka(r);
  }), Pi(() => {
    n && n() === !1 || e() === !0 && Za(r);
  });
}
function St(e, n) {
  var r = M(tn.zIndex);
  return ae(e, (a) => {
    a && (tn.zIndex += n, r.value = tn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
function qt() {
  return qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, qt.apply(this, arguments);
}
function Su(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Mi(e);
}
var {
  n: Pn,
  classes: zt
} = ee("popup");
const yn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: qa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = St(() => e.show, 3), {
      disabled: i
    } = wl(), o = () => {
      var d, {
        closeOnClickOverlay: v,
        onClickOverlay: f
      } = e;
      f == null || f(), v && ((d = e["onUpdate:show"]) == null || d.call(e, !1));
    };
    zi(() => e.show, () => e.lockScroll), ae(() => e.show, (d) => {
      var {
        onOpen: v,
        onClose: f
      } = e;
      d ? v == null || v() : f == null || f();
    }), mu(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ne("div", {
        class: zt(Pn("overlay"), d),
        style: qt({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => ne("div", Pe({
      class: zt(Pn("content"), Pn("--" + e.position), [e.defaultStyle, Pn("--content-background-color")], [e.defaultStyle, Pn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [r.default == null ? void 0 : r.default()]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: m,
        transition: p,
        position: b
      } = e;
      return ne(Re, {
        name: Pn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(ne("div", {
          class: zt(Pn("$--box"), Pn()),
          style: {
            zIndex: t.value - 2
          }
        }, [m && l(), ne(Re, {
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
        return ne(ht, {
          to: d,
          disabled: i.value
        }, Su(v = u()) ? v : {
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
function Cu(e) {
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
  n: ku,
  classes: $u
} = ee("icon");
function Tu(e, n) {
  return h(), me(
    Va(e.isURL(e.name) ? "img" : "i"),
    {
      class: c(e.classes(e.n(), e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
      style: X({
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
const Te = _({
  render: Tu,
  name: "VarIcon",
  props: Tl,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = Cu(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || z(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Ve(), setTimeout(() => {
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
      n: ku,
      classes: $u,
      nextName: n,
      shrinking: r,
      isURL: Qs,
      toNumber: z,
      toSizeUnit: be
    };
  }
});
Te.install = function(e) {
  e.component(Te.name, Te);
};
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
var Ou = Xt({
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
}, Vu = {
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
function Kt() {
  return Kt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
}
function Vl() {
  var e = {}, n = M({}), r = (i, o) => {
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
    e[i] = Kt({}, e[i], o), a(i);
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
  packs: Pu,
  pack: Ye,
  add: Pl,
  use: El,
  merge: Eu
} = Vl();
Pl("zh-CN", Ol);
El("zh-CN");
const Zt = {
  zhCN: Ol,
  enUS: Vu,
  packs: Pu,
  pack: Ye,
  add: Pl,
  use: El,
  merge: Eu,
  useLocale: Vl
};
var {
  n: Mu,
  classes: Iu
} = ee("action-sheet"), Nu = ["onClick"];
function Du(e, n) {
  var r = te("var-icon"), a = te("var-popup"), t = Ge("ripple");
  return h(), me(
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
      default: fe(() => [D(
        "div",
        Pe({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [G(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: c(e.n("title"))
          },
          x(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), G(e.$slots, "actions", {}, () => [(h(!0), P(
          Oe,
          null,
          De(e.actions, (i) => ke((h(), P(
            "div",
            {
              class: c(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: X({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (h(), me(
              r,
              {
                key: 0,
                class: c(e.n("action-icon")),
                "var-action-sheet-cover": "",
                name: i.icon,
                size: i.iconSize
              },
              null,
              8,
              ["class", "name", "size"]
            )) : J("v-if", !0), D(
              "div",
              {
                class: c(e.n("action-name"))
              },
              x(i.name),
              3
            )],
            14,
            Nu
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
const or = _({
  render: Du,
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: yn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Ou,
  setup(e) {
    var n = M(!1), r = (t) => {
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
      n: Mu,
      classes: Iu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: Ye,
      dt: yt,
      handleSelect: r
    };
  }
});
var Un;
function gr(e) {
  return Bi() ? new Promise((n) => {
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
    Un = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
gr.install = function(e) {
  e.component(or.name, or);
};
function Bu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Au = {
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
    validator: Bu
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
  n: zu,
  classes: Lu
} = ee("app-bar");
function Fu(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: X({
        background: e.color,
        color: e.textColor
      })
    },
    [D(
      "div",
      {
        class: c(e.n("left"))
      },
      [G(e.$slots, "left"), e.titlePosition === "left" ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title")),
          style: X({
            paddingLeft: e.paddingLeft
          })
        },
        [G(e.$slots, "default", {}, () => [he(
          x(e.title),
          1
        )])],
        6
      )) : J("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      [G(e.$slots, "default", {}, () => [he(
        x(e.title),
        1
      )])],
      2
    )) : J("v-if", !0), D(
      "div",
      {
        class: c(e.n("right"))
      },
      [e.titlePosition === "right" ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title")),
          style: X({
            paddingRight: e.paddingRight
          })
        },
        [G(e.$slots, "default", {}, () => [he(
          x(e.title),
          1
        )])],
        6
      )) : J("v-if", !0), G(e.$slots, "right")],
      2
    )],
    6
  );
}
const Nr = _({
  render: Fu,
  name: "VarAppBar",
  props: Au,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Le(i), Ii(i), {
      n: zu,
      classes: Lu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Nr.install = function(e) {
  e.component(Nr.name, Nr);
};
function Ru(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Uu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var jn = {
  type: {
    type: String,
    default: "circle",
    validator: Ru
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Uu
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
  n: Yu,
  classes: Wu
} = ee("loading"), Hu = (e) => (Cr(""), e = e(), kr(), e), ju = /* @__PURE__ */ Hu(() => /* @__PURE__ */ D(
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
)), Gu = [ju];
function qu(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.$slots.default ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [G(e.$slots, "default"), e.loading ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("content-mask"))
        },
        null,
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.isShow ? (h(), P(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("circle"))
        },
        [D(
          "span",
          {
            class: c(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: X({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Gu,
          6
        )],
        2
      )) : J("v-if", !0), (h(!0), P(
        Oe,
        null,
        De(e.loadingTypeDict, (r, a) => (h(), P(
          Oe,
          {
            key: a
          },
          [e.type === a ? (h(), P(
            "div",
            {
              key: 0,
              class: c(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(h(!0), P(
              Oe,
              null,
              De(r, (t) => (h(), P(
                "div",
                {
                  key: t + a,
                  style: X({
                    backgroundColor: e.color
                  }),
                  class: c(e.classes(e.n(a + "-item"), e.n(a + "-item--" + e.size)))
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
      )), e.$slots.description || e.description ? (h(), P(
        "div",
        {
          key: 1,
          class: c(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: X({
            color: e.color
          })
        },
        [G(e.$slots, "description", {}, () => [he(
          x(e.description),
          1
        )])],
        6
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0)],
    2
  );
}
const kn = _({
  render: qu,
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
    }, t = Y(() => N(r.default) ? e.loading : !0);
    return {
      n: Yu,
      classes: Wu,
      multiplySizeUnit: Ze,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
kn.install = function(e) {
  e.component(kn.name, kn);
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
function Xu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ku(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Zu = {
  type: {
    type: String,
    default: "default",
    validator: Xu
  },
  size: {
    type: String,
    default: "normal",
    validator: Ku
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
  loadingColor: Jt({}, _e(jn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: Ju,
  classes: Qu
} = ee("button"), xu = ["disabled"];
function _u(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return ke((h(), P(
    "button",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
      style: X({
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
        class: c(e.n("loading")),
        "var-button-cover": "",
        color: e.loadingColor,
        type: e.loadingType,
        size: e.loadingSize,
        radius: e.loadingRadius
      },
      null,
      8,
      ["class", "color", "type", "size", "radius"]
    )) : J("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [G(e.$slots, "default")],
      2
    )],
    46,
    xu
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const nn = _({
  render: _u,
  name: "VarButton",
  components: {
    VarLoading: kn
  },
  directives: {
    Ripple: Ue
  },
  props: Zu,
  setup(e) {
    var n = M(!1), r = (i) => {
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
      n: Ju,
      classes: Qu,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
nn.install = function(e) {
  e.component(nn.name, nn);
};
var ed = {
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
  n: nd,
  classes: rd
} = ee("back-top");
function ad(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), me(
    ht,
    {
      to: "body",
      disabled: e.disabled
    },
    [D(
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
      [G(e.$slots, "default", {}, () => [ne(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: fe(() => [ne(r, {
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
const Dr = _({
  render: ad,
  name: "VarBackTop",
  components: {
    VarButton: nn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: ed,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, i = (u) => {
      N(e.onClick, u);
      var d = Ai(t);
      ot(t, {
        left: d,
        duration: e.duration,
        animation: cl
      });
    }, o = () => {
      n.value = bt(t) >= Ie(e.visibilityHeight);
    }, l = Di(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (qe(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (Js(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Le(() => {
      t = e.target ? s() : Pa(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Ei(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: be,
      n: nd,
      classes: rd,
      click: i
    };
  }
});
Dr.install = function(e) {
  e.component(Dr.name, Dr);
};
function td(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function id(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var od = {
  type: {
    type: String,
    default: "default",
    validator: td
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
    validator: id
  },
  icon: {
    type: String
  }
}, {
  n: Bn,
  classes: ld
} = ee("badge"), sd = {
  key: 1
};
function ud(e, n) {
  var r = te("var-icon");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [ne(
      Re,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: fe(() => [ke(D(
          "span",
          Pe(e.$attrs, {
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
            sd,
            x(e.values),
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
const lr = _({
  render: ud,
  name: "VarBadge",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: od,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Y(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Bn("position") + " " + Bn("--" + l), v = s ? Bn("dot") : null, f = i(), m = u ? Bn("icon") : null;
      return [Bn("--" + o), d, v, f, m];
    }), t = Y(() => {
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
      classes: ld,
      values: t,
      contentClass: a
    };
  }
});
lr.install = function(e) {
  e.component(lr.name, lr);
};
var dd = {
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
}, Ml = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Il = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function vd() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(Ml), {
    length: r
  } = Sn(Il);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Qt.apply(this, arguments);
}
var {
  n: fd,
  classes: cd
} = ee("bottom-navigation"), {
  n: Ct
} = ee("bottom-navigation-item"), vo = Ct("--right-half-space"), fo = Ct("--left-half-space"), co = Ct("--right-space"), md = {
  type: "primary"
};
function pd(e, n) {
  var r = te("var-button");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: X("z-index:" + e.zIndex)
    },
    [G(e.$slots, "default"), e.$slots.fab ? (h(), me(
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
const Br = _({
  render: pd,
  name: "VarBottomNavigation",
  components: {
    VarButton: nn
  },
  props: dd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = Y(() => e.active), i = Y(() => e.activeColor), o = Y(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = vd(), v = () => {
      s.value === 0 || f() || m() || p();
    }, f = () => u.find((C) => {
      var {
        name: B
      } = C;
      return t.value === B.value;
    }), m = () => u.find((C) => {
      var {
        index: B
      } = C;
      return t.value === B.value;
    }), p = () => {
      !je(t.value) || (t.value < 0 ? N(e["onUpdate:active"], 0) : t.value > s.value - 1 && N(e["onUpdate:active"], s.value - 1));
    }, b = (C) => {
      t.value !== C && (e.onBeforeChange ? w(C) : T(C));
    }, w = (C) => {
      Promise.resolve(N(e.onBeforeChange, C)).then((B) => B && T(C));
    }, T = (C) => {
      N(e["onUpdate:active"], C), N(e.onChange, C);
    }, S = () => {
      var C = E();
      C.forEach((B) => {
        B.classList.remove(vo, fo, co);
      });
    }, g = (C) => {
      var B = E(), V = B.length, $ = C % 2 === 0;
      B.forEach((O, R) => {
        y($, O, R, V);
      });
    }, y = (C, B, V, $) => {
      var O = V === $ - 1;
      if (!C && O) {
        B.classList.add(co);
        return;
      }
      var R = V === $ / 2 - 1, W = V === $ / 2;
      R ? B.classList.add(vo) : W && B.classList.add(fo);
    }, E = () => Array.from(a.value.querySelectorAll("." + Ct())), k = () => {
      N(e.onFabClick);
    }, A = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: b
    };
    return d(A), ae(() => s.value, v), ae(() => e.fabProps, (C) => {
      l.value = Qt({}, md, C);
    }, {
      immediate: !0,
      deep: !0
    }), Le(() => {
      !r.fab || g(s.value);
    }), Ii(() => {
      S(), r.fab && g(s.value);
    }), {
      n: fd,
      classes: cd,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
var hd = {
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
function gd() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Ml), {
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
  n: yd,
  classes: bd
} = ee("bottom-navigation-item"), wd = {
  type: "danger",
  dot: !0
};
function Sd(e, n) {
  var r = te("var-icon"), a = te("var-badge"), t = Ge("ripple");
  return ke((h(), P(
    "button",
    {
      class: c(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: X({
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
        class: c(e.n("icon")),
        "var-bottom-navigation-item-cover": ""
      },
      null,
      8,
      ["name", "namespace", "class"]
    )) : J("v-if", !0), G(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (h(), me(
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
    )) : J("v-if", !0), D(
      "span",
      {
        class: c(e.n("label"))
      },
      [e.$slots.default ? J("v-if", !0) : (h(), P(
        Oe,
        {
          key: 0
        },
        [he(
          x(e.label),
          1
        )],
        2112
      )), G(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Ar = _({
  render: Sd,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: lr,
    VarIcon: Te
  },
  directives: {
    Ripple: Ue
  },
  props: hd,
  setup(e) {
    var n = Y(() => e.name), r = Y(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = gd(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var m, p = (m = n.value) != null ? m : t.value;
      N(e.onClick, p), N(i.onToggle, p);
    };
    return o(d), ae(() => r.value, (m) => {
      a.value = m === !0 ? wd : r.value;
    }, {
      immediate: !0
    }), {
      n: yd,
      classes: bd,
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
function Cd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var kd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Cd,
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
  n: $d,
  classes: Td
} = ee("card"), Od = 500, Vd = ["src", "alt"];
function Pd(e, n) {
  var r = te("var-icon"), a = te("var-button"), t = Ge("ripple");
  return ke((h(), P(
    "div",
    {
      ref: "card",
      class: c(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: X({
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
        class: c(e.n("floater")),
        style: X({
          width: e.floaterWidth,
          height: e.floaterHeight,
          top: e.floaterTop,
          left: e.floaterLeft,
          overflow: e.floaterOverflow,
          position: e.floaterPosition,
          transition: e.floated ? "background-color " + e.floatingDuration + "ms, color " + e.floatingDuration + "ms, width " + e.floatingDuration + "ms, height " + e.floatingDuration + "ms, top " + e.floatingDuration + "ms, left " + e.floatingDuration + "ms" : void 0
        })
      },
      [G(e.$slots, "image", {}, () => [e.src ? (h(), P(
        "img",
        {
          key: 0,
          class: c(e.n("image")),
          style: X({
            objectFit: e.fit,
            height: e.toSizeUnit(e.imageHeight),
            width: e.toSizeUnit(e.imageWidth)
          }),
          src: e.src,
          alt: e.alt
        },
        null,
        14,
        Vd
      )) : J("v-if", !0)]), D(
        "div",
        {
          class: c(e.n("container"))
        },
        [G(e.$slots, "title", {}, () => [e.title ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("title"))
          },
          x(e.title),
          3
        )) : J("v-if", !0)]), G(e.$slots, "subtitle", {}, () => [e.subtitle ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("subtitle"))
          },
          x(e.subtitle),
          3
        )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("description"))
          },
          x(e.description),
          3
        )) : J("v-if", !0)]), e.$slots.extra ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("footer"))
          },
          [G(e.$slots, "extra")],
          2
        )) : J("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (h(), P(
          "div",
          {
            key: 1,
            class: c(e.n("floating-content")),
            style: X({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [G(e.$slots, "floating-content")],
          6
        )) : J("v-if", !0)],
        2
      ), e.showFloatingButtons ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: X({
            zIndex: e.zIndex,
            opacity: e.opacity,
            transition: "opacity " + e.floatingDuration * 2 + "ms"
          })
        },
        [G(e.$slots, "close-button", {}, () => [ne(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: c(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Nn(e.close, ["stop"])
          },
          {
            default: fe(() => [ne(
              r,
              {
                "var-card-cover": "",
                name: "window-close",
                class: c(e.n("close-button-icon"))
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
    ), D(
      "div",
      {
        class: c(e.n("holder")),
        style: X({
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
const zr = _({
  render: Pd,
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarButton: nn
  },
  props: kd,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), i = M("100%"), o = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), m = Y(() => e.layout === "row"), p = M(!1), b = M(!1), {
      zIndex: w
    } = St(() => e.floating, 1);
    zi(() => e.floating, () => !m.value);
    var T = "auto", S = "auto", g = null, y = M(null), E = /* @__PURE__ */ function() {
      var C = po(function* () {
        clearTimeout(y.value), clearTimeout(g), y.value = null, y.value = setTimeout(/* @__PURE__ */ po(function* () {
          var {
            width: B,
            height: V,
            left: $,
            top: O
          } = n.value.getBoundingClientRect();
          a.value = be(B), t.value = be(V), i.value = a.value, o.value = t.value, l.value = be(O), s.value = be($), u.value = "fixed", T = l.value, S = s.value, p.value = !0, yield Tn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", b.value = !0;
        }), e.ripple ? Od : 0);
      });
      return function() {
        return C.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(g), clearTimeout(y.value), y.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = S, v.value = "0px", f.value = "0", p.value = !1, g = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", S = "auto", d.value = "hidden", u.value = void 0, b.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      N(e["onUpdate:floating"], !1);
    };
    return ae(() => e.floating, (C) => {
      m.value || Ve(() => {
        C ? E() : k();
      });
    }, {
      immediate: !0
    }), {
      n: $d,
      classes: Td,
      toSizeUnit: be,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: y,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: w,
      isRow: m,
      close: A,
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
  n: Md,
  classes: Id
} = ee("cell");
function Nd(e, n) {
  var r = te("var-icon");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [G(e.$slots, "icon", {}, () => [ne(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : J("v-if", !0), D(
      "div",
      {
        class: c(e.n("content"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          x(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [G(e.$slots, "description", {}, () => [he(
          x(e.description),
          1
        )])],
        2
      )) : J("v-if", !0)],
      2
    ), e.$slots.extra ? (h(), P(
      "div",
      {
        key: 1,
        class: c(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [G(e.$slots, "extra")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const sr = _({
  render: Nd,
  name: "VarCell",
  components: {
    VarIcon: Te
  },
  props: Ed,
  setup() {
    return {
      n: Md,
      classes: Id
    };
  }
});
sr.install = function(e) {
  e.component(sr.name, sr);
};
var Dd = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Bd
} = ee("form-details"), Ad = {
  key: 0
}, zd = {
  key: 0
};
function Ld(e, n) {
  return h(), me(
    Re,
    {
      name: e.n()
    },
    {
      default: fe(() => [e.errorMessage || e.extraMessage ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n())
        },
        [D(
          "div",
          {
            class: c(e.n("error-message"))
          },
          [ne(
            Re,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.errorMessage ? (h(), P(
                "div",
                Ad,
                x(e.errorMessage),
                1
              )) : J("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        ), D(
          "div",
          {
            class: c(e.n("extra-message"))
          },
          [ne(
            Re,
            {
              name: e.n("message")
            },
            {
              default: fe(() => [e.extraMessage ? (h(), P(
                "div",
                zd,
                x(e.extraMessage),
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
const He = _({
  render: Ld,
  name: "VarFormDetails",
  props: Dd,
  setup: () => ({
    n: Bd
  })
});
He.install = function(e) {
  e.component(He.name, He);
};
var Fd = {
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
function Rd() {
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
function Ud() {
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
function Yd() {
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
  n: Wd,
  classes: Hd
} = ee("checkbox");
function jd(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [ke((h(), P(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            name: "checkbox-marked",
            size: e.iconSize,
            "var-checkbox-cover": ""
          },
          null,
          8,
          ["class", "size"]
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
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
      }]]), D(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
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
const ur = _({
  render: jd,
  name: "VarCheckbox",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: Fd,
  setup(e) {
    var n = M(!1), r = Y(() => n.value === e.checkedValue), a = Y(() => e.checkedValue), t = M(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = Ud(), {
      form: l,
      bindForm: s
    } = mn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = cn(), m = (k) => {
      Ve(() => {
        var {
          validateTrigger: A,
          rules: C,
          modelValue: B
        } = e;
        d(A, k, C, B);
      });
    }, p = (k) => {
      n.value = k;
      var {
        checkedValue: A,
        onChange: C
      } = e;
      N(e["onUpdate:modelValue"], n.value), N(C, n.value), m("onChange"), k === A ? i == null || i.onChecked(A) : i == null || i.onUnchecked(A);
    }, b = (k) => {
      var {
        disabled: A,
        readonly: C,
        checkedValue: B,
        uncheckedValue: V,
        onClick: $
      } = e;
      if (!(l != null && l.disabled.value || A) && (N($, k), !(l != null && l.readonly.value || C))) {
        t.value = !0;
        var O = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && O || p(r.value ? V : B);
      }
    }, w = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: C
      } = e;
      n.value = k.includes(A) ? A : C;
    }, T = () => {
      t.value = !1;
    }, S = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, g = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: C
      } = e, B = ![A, C].includes(k);
      B && (k = r.value ? C : A), p(k);
    }, y = () => v(e.rules, e.modelValue);
    ae(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: r,
      sync: w,
      validate: y,
      resetValidation: f,
      reset: S,
      resetWithAnimation: T
    };
    return N(o, E), N(s, E), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Wd,
      classes: Hd,
      handleClick: b,
      toggle: g,
      reset: S,
      validate: y,
      resetValidation: f
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
function Gd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var qd = {
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
    validator: Gd
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
  classes: Kd
} = ee("checkbox-group");
function Zd(e, n) {
  var r = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
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
const Lr = _({
  render: Zd,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: qd,
  setup(e) {
    var n = Y(() => e.max), r = Y(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = Rd(), {
      bindForm: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = Y(() => l.value), f = (A) => {
      Ve(() => {
        var {
          validateTrigger: C,
          rules: B,
          modelValue: V
        } = e;
        s(C, A, B, V);
      });
    }, m = (A) => {
      N(e["onUpdate:modelValue"], A), N(e.onChange, A), f("onChange");
    }, p = (A) => {
      var {
        modelValue: C
      } = e;
      C.includes(A) || m([...C, A]);
    }, b = (A) => {
      var {
        modelValue: C
      } = e;
      !C.includes(A) || m(C.filter((B) => B !== A));
    }, w = () => t.forEach((A) => {
      var {
        sync: C
      } = A;
      return C(e.modelValue);
    }), T = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, S = () => {
      var A = t.map((B) => {
        var {
          checkedValue: V
        } = B;
        return V.value;
      }), C = eo(A);
      return T(), N(e["onUpdate:modelValue"], C), C;
    }, g = () => {
      var A = t.filter((B) => {
        var {
          checked: V
        } = B;
        return !V.value;
      }).map((B) => {
        var {
          checkedValue: V
        } = B;
        return V.value;
      }), C = eo(A);
      return T(), N(e["onUpdate:modelValue"], C), C;
    }, y = () => {
      N(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    ae(() => e.modelValue, w, {
      deep: !0
    }), ae(() => a.value, w);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: b,
      validate: E,
      resetValidation: d,
      reset: y,
      errorMessage: v
    };
    return i(k), N(o, k), {
      errorMessage: l,
      n: Xd,
      classes: Kd,
      checkAll: S,
      inverseAll: g,
      reset: y,
      validate: E,
      resetValidation: d
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
function Jd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Qd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var xd = {
  type: {
    type: String,
    default: "default",
    validator: Jd
  },
  size: {
    type: String,
    default: "normal",
    validator: Qd
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
  classes: _d
} = ee("chip");
function ev(e, n) {
  var r = te("var-icon");
  return h(), me(
    Re,
    {
      name: e.n("$-fade")
    },
    {
      default: fe(() => [D(
        "span",
        Pe({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [G(e.$slots, "left"), D(
          "span",
          {
            class: c(e.n("text-" + e.size))
          },
          [G(e.$slots, "default")],
          2
        ), G(e.$slots, "right"), e.closable ? (h(), P(
          "span",
          {
            key: 0,
            class: c(e.n("--close")),
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
        )) : J("v-if", !0)],
        16
      )]),
      _: 3
    },
    8,
    ["name"]
  );
}
const dr = _({
  render: ev,
  name: "VarChip",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: xd,
  setup(e) {
    var n = Y(() => {
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
    }), r = Y(() => {
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
      classes: _d,
      chipStyles: n,
      contentClass: r
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
function nv(e) {
  return ["row", "column"].includes(e);
}
var rv = {
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
    validator: nv
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
function av() {
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
function tv() {
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
  n: Ja,
  classes: iv
} = ee("col");
function ov(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: X({
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
const Fr = _({
  render: ov,
  name: "VarCol",
  props: rv,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = Y(() => z(e.span)), a = Y(() => z(e.offset)), {
      row: t,
      bindRow: i
    } = tv(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Ni(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(Ja("--span-" + s + "-" + f)), v && d.push(Ja("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(Ja("--span-" + s + "-" + u));
      return d;
    };
    return ae([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), N(i, o), {
      n: Ja,
      classes: iv,
      padding: n,
      toNumber: z,
      toSizeUnit: be,
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
function lv() {
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
var sv = {
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
  n: uv
} = ee("collapse");
function dv(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Rr = _({
  render: dv,
  name: "VarCollapse",
  props: sv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = lv(), t = Y(() => e.modelValue), i = Y(() => e.offset), o = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (m, p) => o() ? p ? e.accordion ? m : [...e.modelValue, m] : e.accordion ? null : e.modelValue.filter((b) => b !== m) : null, s = (m, p) => {
      var b = l(m, p);
      N(e["onUpdate:modelValue"], b), N(e.onChange, b);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: b
          } = p;
          return e.modelValue === b.value;
        });
      var m = r.filter((p) => {
        var {
          name: b
        } = p;
        return b.value === void 0 ? !1 : e.modelValue.includes(b.value);
      });
      return m.length ? m : void 0;
    }, d = () => e.accordion ? r.find((m) => {
      var {
        index: p,
        name: b
      } = m;
      return b.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((m) => {
      var {
        index: p,
        name: b
      } = m;
      return b.value === void 0 ? e.modelValue.includes(p.value) : !1;
    }), v = () => {
      if (!!o()) {
        var m = u() || d();
        if (e.accordion && !m || !e.accordion && !m.length) {
          r.forEach((p) => {
            p.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((p) => {
          var b = e.accordion ? m === p : m.includes(p);
          p.init(e.accordion, b);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), ae(() => n.value, () => Ve().then(v)), ae(() => e.modelValue, () => Ve().then(v)), {
      n: uv
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
function vv() {
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
var fv = {
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
  n: cv,
  classes: mv
} = ee("collapse-item");
function pv(e, n) {
  var r = te("var-icon");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [D(
      "div",
      {
        class: c(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: c(e.n("header-title"))
        },
        [G(e.$slots, "title", {}, () => [he(
          x(e.title),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: c(e.n("header-icon"))
        },
        [G(e.$slots, "icon", {}, () => [ne(
          r,
          {
            name: e.icon,
            transition: 250,
            class: c(e.classes(e.n("header-icon"), [e.isShow && e.icon === "chevron-down", e.n("header-open")], [e.disabled, e.n("header--disable")]))
          },
          null,
          8,
          ["name", "class"]
        )])],
        2
      )],
      2
    ), ke(D(
      "div",
      {
        class: c(e.n("content")),
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
          class: c(e.n("content-wrap"))
        },
        [G(e.$slots, "default")],
        2
      )],
      34
    ), [[Ga, e.show]])],
    2
  );
}
const Ur = _({
  render: pv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Te
  },
  props: fv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = vv(), t = !0, i = M(null), o = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = Y(() => e.name), f = (g, y) => {
      s.value === void 0 || g && Ce(s.value) || y === l.value || (l.value = y, m(!0));
    }, m = (g) => {
      e.disabled || g || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Ve(() => {
        var {
          offsetHeight: g
        } = i.value;
        i.value.style.height = 0 + "px", $n(() => {
          i.value.style.height = g + "px", t && wt(() => {
            t && T();
          });
        });
      }));
    }, b = () => {
      t = !1;
    }, w = () => {
      if (!!i.value) {
        var {
          offsetHeight: g
        } = i.value;
        i.value.style.height = g + "px", $n(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, S = {
      index: n,
      name: v,
      init: f
    };
    return a(S), ae(l, (g) => {
      g ? p() : w();
    }), {
      n: cv,
      start: b,
      classes: mv,
      show: o,
      isShow: l,
      offset: u,
      toggle: m,
      contentEl: i,
      transitionend: T
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var hv = {
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
  n: gv
} = ee("countdown"), xt = 1e3, _t = 60 * xt, ei = 60 * _t, ho = 24 * ei;
function yv(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default", vl(Gs(e.timeData)), () => [he(
      x(e.showTime),
      1
    )])],
    2
  );
}
const Yr = _({
  render: yv,
  name: "VarCountdown",
  props: hv,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), i = M(0), o = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (m, p) => {
      var b = Object.values(p), w = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (w.forEach((g, y) => {
        m.includes(g) ? m = m.replace(g, hr("" + b[y], 2, "0")) : b[y + 1] += b[y] * T[y];
      }), m.includes("S")) {
        var S = hr("" + b[b.length - 1], 3, "0");
        m.includes("SSS") ? m = m.replace("SSS", S) : m.includes("SS") ? m = m.replace("SS", S.slice(0, 2)) : m = m.replace("S", S.slice(0, 1));
      }
      return m;
    }, s = (m) => {
      var p = Math.floor(m / ho), b = Math.floor(m % ho / ei), w = Math.floor(m % ei / _t), T = Math.floor(m % _t / xt), S = Math.floor(m % xt), g = {
        days: p,
        hours: b,
        minutes: w,
        seconds: T,
        milliseconds: S
      };
      o.value = g, N(e.onChange, o.value), a.value = l(e.format, g);
    }, u = () => {
      var {
        time: m,
        onEnd: p,
        autoStart: b
      } = e, w = Date.now();
      n.value || (n.value = w + z(m));
      var T = n.value - w;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        N(p);
        return;
      }
      (b || r.value) && (t.value = $n(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, su(t.value), u();
    };
    return ae(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: gv,
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
var Or = 9e15, ar = 1e9, ni = "0123456789abcdef", ut = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", dt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", ri = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Or,
  maxE: Or,
  crypto: !1
}, Rl, En, ve = !0, kt = "[DecimalError] ", _n = kt + "Invalid argument: ", Ul = kt + "Precision limit exceeded", Yl = kt + "crypto unavailable", Wl = "[object Decimal]", Xe = Math.floor, ze = Math.pow, bv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, wv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Sv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, Hl = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, bn = 1e7, ue = 7, Cv = 9007199254740991, kv = ut.length - 1, ai = dt.length - 1, q = { toStringTag: Wl };
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = $v(a, Kl(a, r)), a.precision = e, a.rounding = n, se(En == 2 || En == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (ve = !1, i = d.s * ze(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = We(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = ze(r, 1 / 3), e = Xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
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
    if (e = n.length - 1, r = (e - Xe(this.e / ue)) * ue, e = n[e], e)
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
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Tt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Sa(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return se(i, o.precision = r, o.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = Sa(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Tt(5, e)), t = Sa(i, 2, t, t, !0);
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
    if (u.abs().eq(1) && v + 4 <= ai)
      return o = gn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ai)
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
  return !!this.d && Xe(this.e / ue) > this.d.length - 2;
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
  var n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding, m = 5;
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
  if (ve = !1, l = v + m, o = Gn(u, l), a = n ? vt(d, l + 10) : Gn(e, l), s = $e(o, a, l, 1), Fa(s.d, t = v, f))
    do
      if (l += 10, o = Gn(u, l), a = n ? vt(d, l + 10) : Gn(e, l), s = $e(o, a, l, 1), !i) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = se(s, v + 1, 0));
        break;
      }
    while (Fa(s.d, t += 10, f));
  return ve = !0, se(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, m = this, p = m.constructor;
  if (e = new p(e), !m.d || !e.d)
    return !m.s || !e.s ? e = new p(NaN) : m.d ? e.s = -e.s : e = new p(e.d || m.s !== e.s ? m : NaN), e;
  if (m.s != e.s)
    return e.s = -e.s, m.plus(e);
  if (u = m.d, f = e.d, l = p.precision, s = p.rounding, !u[0] || !f[0]) {
    if (f[0])
      e.s = -e.s;
    else if (u[0])
      e = new p(m);
    else
      return new p(s === 3 ? -0 : 0);
    return ve ? se(e, l, s) : e;
  }
  if (r = Xe(e.e / ue), d = Xe(m.e / ue), u = u.slice(), i = d - r, i) {
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
  return u[0] ? (e.d = u, e.e = $t(u, r), ve ? se(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? se(new a(r), a.precision, a.rounding) : (ve = !1, a.modulo == 9 ? (n = $e(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = $e(r, e, 0, a.modulo, 1), n = n.times(e), ve = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return ti(this);
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
  if (i = Xe(v.e / ue), a = Xe(e.e / ue), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / ue), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / bn | 0, u[t] %= bn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = $t(u, a), ve ? se(e, l, s) : e;
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
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Ov(a, Kl(a, r)), a.precision = e, a.rounding = n, se(En > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (ve = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = We(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Xe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
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
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, m = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !m || !m[0])
    return new v(!e.s || f && !f[0] && !m || m && !m[0] && !f ? NaN : !f || !m ? e.s / 0 : e.s * 0);
  for (r = Xe(d.e / ue) + Xe(e.e / ue), s = f.length, u = m.length, s < u && (i = f, f = m, m = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + m[a] * f[t - a - 1] + n, i[t--] = l % bn | 0, n = l / bn | 0;
    i[t] = (i[t] + n) % bn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = $t(i, r), ve ? se(e, v.precision, v.rounding) : e;
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
  var n, r, a, t, i, o, l, s, u, d, v, f, m = this, p = m.d, b = m.constructor;
  if (!p)
    return new b(m);
  if (u = r = new b(1), a = s = new b(0), n = new b(a), i = n.e = jl(p) - m.e - 1, o = i % ue, n.d[0] = ze(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new b(e), !l.isInt() || l.lt(u))
      throw Error(_n + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (ve = !1, l = new b(We(p)), d = b.precision, b.precision = i = p.length * ue * 2; v = $e(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = $e(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = m.s, f = $e(u, a, i, 1).minus(m).abs().cmp($e(s, r, i, 1).minus(m).abs()) < 1 ? [u, a] : [s, r], b.precision = d, ve = !0, f;
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
  if (n = Xe(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Cv)
    return t = Gl(s, l, r, a), e.s < 0 ? new s(1).div(t) : se(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? Xe(u * (Math.log("0." + We(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (ve = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = ti(e.times(Gn(l, a + r)), a), t.d && (t = se(t, a + 5, 1), Fa(t.d, a, i) && (n = a + 10, t = se(ti(e.times(Gn(l, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = se(t, a + 1, 0)))), t.s = o, ve = !0, s.rounding = i, se(t, a, i));
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
function Fa(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = ze(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function rt(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += ni.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function $v(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Tt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Sa(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, m, p, b, w, T, S, g, y, E, k, A, C, B, V, $, O, R = a.constructor, W = a.s == t.s ? 1 : -1, j = a.d, L = t.d;
    if (!j || !j[0] || !L || !L[0])
      return new R(
        !a.s || !t.s || (j ? L && j[0] == L[0] : !L) ? NaN : j && j[0] == 0 || !L ? W * 0 : W / 0
      );
    for (s ? (m = 1, d = a.e - t.e) : (s = bn, m = ue, d = Xe(a.e / m) - Xe(t.e / m)), $ = L.length, B = j.length, T = new R(W), S = T.d = [], v = 0; L[v] == (j[v] || 0); v++)
      ;
    if (L[v] > (j[v] || 0) && d--, i == null ? (k = i = R.precision, o = R.rounding) : l ? k = i + (a.e - t.e) + 1 : k = i, k < 0)
      S.push(1), p = !0;
    else {
      if (k = k / m + 2 | 0, v = 0, $ == 1) {
        for (f = 0, L = L[0], k++; (v < B || f) && k--; v++)
          A = f * s + (j[v] || 0), S[v] = A / L | 0, f = A % L | 0;
        p = f || v < B;
      } else {
        for (f = s / (L[0] + 1) | 0, f > 1 && (L = e(L, f, s), j = e(j, f, s), $ = L.length, B = j.length), C = $, g = j.slice(0, $), y = g.length; y < $; )
          g[y++] = 0;
        O = L.slice(), O.unshift(0), V = L[0], L[1] >= s / 2 && ++V;
        do
          f = 0, u = n(L, g, $, y), u < 0 ? (E = g[0], $ != y && (E = E * s + (g[1] || 0)), f = E / V | 0, f > 1 ? (f >= s && (f = s - 1), b = e(L, f, s), w = b.length, y = g.length, u = n(b, g, w, y), u == 1 && (f--, r(b, $ < w ? O : L, w, s))) : (f == 0 && (u = f = 1), b = L.slice()), w = b.length, w < y && b.unshift(0), r(g, b, y, s), u == -1 && (y = g.length, u = n(L, g, $, y), u < 1 && (f++, r(g, $ < y ? O : L, y, s))), y = g.length) : u === 0 && (f++, g = [0]), S[v++] = f, u && g[0] ? g[y++] = j[C] || 0 : (g = [j[C]], y = 1);
        while ((C++ < B || g[0] !== void 0) && k--);
        p = g[0] !== void 0;
      }
      S[0] || S.shift();
    }
    if (m == 1)
      T.e = d, Rl = p;
    else {
      for (v = 1, f = S[0]; f >= 10; f /= 10)
        v++;
      T.e = v + d * m - 1, se(T, l ? i + T.e + 1 : i, o, p);
    }
    return T;
  };
}();
function se(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, m = e.constructor;
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
  return ve && (e.e > m.maxE ? (e.d = null, e.e = NaN) : e.e < m.minE && (e.e = 0, e.d = [0])), e;
}
function On(e, n, r) {
  if (!e.isFinite())
    return Xl(e);
  var a, t = e.e, i = We(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Ln(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Ln(-t - 1) + i, r && (a = r - o) > 0 && (i += Ln(a))) : t >= o ? (i += Ln(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Ln(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Ln(a))), i;
}
function $t(e, n) {
  var r = e[0];
  for (n *= ue; r >= 10; r /= 10)
    n++;
  return n;
}
function vt(e, n, r) {
  if (n > kv)
    throw ve = !0, r && (e.precision = r), Error(Ul);
  return se(new e(ut), n, 1, !0);
}
function gn(e, n, r) {
  if (n > ai)
    throw Error(Ul);
  return se(new e(dt), n, r, !0);
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
    if (r % 2 && (i = i.times(n), yo(i.d, o) && (t = !0)), r = Xe(r / 2), r === 0) {
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
function ti(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, m = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (ve = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(ze(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = se(i.times(e), s, 1), r = r.times(++d), l = o.plus($e(i, r, s, 1)), We(l.d).slice(0, s) === We(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = se(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Fa(o.d, s - a, m, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return se(o, f.precision = p, m, ve = !0);
      else
        return f.precision = p, o;
    }
    o = l;
  }
}
function Gn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, m = 1, p = 10, b = e, w = b.d, T = b.constructor, S = T.rounding, g = T.precision;
  if (b.s < 0 || !w || !w[0] || !b.e && w[0] == 1 && w.length == 1)
    return new T(w && !w[0] ? -1 / 0 : b.s != 1 ? NaN : w ? 0 : b);
  if (n == null ? (ve = !1, d = g) : d = n, T.precision = d += p, r = We(w), a = r.charAt(0), Math.abs(i = b.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      b = b.times(e), r = We(b.d), a = r.charAt(0), m++;
    i = b.e, a > 1 ? (b = new T("0." + r), i++) : b = new T(a + "." + r.slice(1));
  } else
    return u = vt(T, d + 2, g).times(i + ""), b = Gn(new T(a + "." + r.slice(1)), d - p).plus(u), T.precision = g, n == null ? se(b, g, S, ve = !0) : b;
  for (v = b, s = o = b = $e(b.minus(1), b.plus(1), d, 1), f = se(b.times(b), d, 1), t = 3; ; ) {
    if (o = se(o.times(f), d, 1), u = s.plus($e(o, new T(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(vt(T, d + 2, g).times(i + ""))), s = $e(s, new T(m), d, 1), n == null)
        if (Fa(s.d, d - p, S, l))
          T.precision = d += p, u = o = b = $e(v.minus(1), v.plus(1), d, 1), f = se(b.times(b), d, 1), t = l = 1;
        else
          return se(s, T.precision = g, S, ve = !0);
      else
        return T.precision = g, s;
    s = u, t += 2;
  }
}
function Xl(e) {
  return String(e.s * e.s / 0);
}
function ii(e, n) {
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
function Tv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), Hl.test(n))
      return ii(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (wv.test(n))
    r = 16, n = n.toLowerCase();
  else if (bv.test(n))
    r = 2;
  else if (Sv.test(n))
    r = 8;
  else
    throw Error(_n + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Gl(a, new a(r), i, i * 2)), u = rt(n, r, bn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = $t(u, d), e.d = u, ve = !1, o && (e = $e(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : qn.pow(2, s))), ve = !0, e);
}
function Ov(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Sa(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Tt(5, r)), n = Sa(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function Sa(e, n, r, a, t) {
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
function Tt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Kl(e, n) {
  var r, a = n.s < 0, t = gn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return En = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    En = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return En = go(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    En = go(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Li(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, m = e.constructor, p = r !== void 0;
  if (p ? (rn(r, 1, ar), a === void 0 ? a = m.rounding : rn(a, 0, 8)) : (r = m.precision, a = m.rounding), !e.isFinite())
    d = Xl(e);
  else {
    for (d = On(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new m(1), f.e = d.length - o, f.d = rt(On(f), 10, t), f.e = f.d.length), v = rt(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new m(e), e.d = v, e.e = i, e = $e(e, f, r, a, 0, t), v = e.d, i = e.e, u = Rl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += ni.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = rt(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += ni.charAt(v[o]);
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
function Vv(e) {
  return new this(e).abs();
}
function Pv(e) {
  return new this(e).acos();
}
function Ev(e) {
  return new this(e).acosh();
}
function Mv(e, n) {
  return new this(e).plus(n);
}
function Iv(e) {
  return new this(e).asin();
}
function Nv(e) {
  return new this(e).asinh();
}
function Dv(e) {
  return new this(e).atan();
}
function Bv(e) {
  return new this(e).atanh();
}
function Av(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = gn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? gn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = gn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan($e(e, n, i, 1)), n = gn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan($e(e, n, i, 1)), r;
}
function zv(e) {
  return new this(e).cbrt();
}
function Lv(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function Fv(e, n, r) {
  return new this(e).clamp(n, r);
}
function Rv(e) {
  if (!e || typeof e != "object")
    throw Error(kt + "Object expected");
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
    if (r = i[n], t && (this[r] = ri[r]), (a = e[r]) !== void 0)
      if (Xe(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(_n + r + ": " + a);
  if (r = "crypto", t && (this[r] = ri[r]), (a = e[r]) !== void 0)
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
function Uv(e) {
  return new this(e).cos();
}
function Yv(e) {
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
      return ii(u, i.toString());
    } else if (s !== "string")
      throw Error(_n + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), Hl.test(i) ? ii(u, i) : Tv(u, i);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Rv, t.clone = Zl, t.isDecimal = bo, t.abs = Vv, t.acos = Pv, t.acosh = Ev, t.add = Mv, t.asin = Iv, t.asinh = Nv, t.atan = Dv, t.atanh = Bv, t.atan2 = Av, t.cbrt = zv, t.ceil = Lv, t.clamp = Fv, t.cos = Uv, t.cosh = Yv, t.div = Wv, t.exp = Hv, t.floor = jv, t.hypot = Gv, t.ln = qv, t.log = Xv, t.log10 = Zv, t.log2 = Kv, t.max = Jv, t.min = Qv, t.mod = xv, t.mul = _v, t.pow = ef, t.random = nf, t.round = rf, t.sign = af, t.sin = tf, t.sinh = of, t.sqrt = lf, t.sub = sf, t.sum = uf, t.tan = df, t.tanh = vf, t.trunc = ff, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Wv(e, n) {
  return new this(e).div(n);
}
function Hv(e) {
  return new this(e).exp();
}
function jv(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function Gv() {
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
function qv(e) {
  return new this(e).ln();
}
function Xv(e, n) {
  return new this(e).log(n);
}
function Kv(e) {
  return new this(e).log(2);
}
function Zv(e) {
  return new this(e).log(10);
}
function Jv() {
  return ql(this, arguments, "lt");
}
function Qv() {
  return ql(this, arguments, "gt");
}
function xv(e, n) {
  return new this(e).mod(n);
}
function _v(e, n) {
  return new this(e).mul(n);
}
function ef(e, n) {
  return new this(e).pow(n);
}
function nf(e) {
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
function rf(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function af(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function tf(e) {
  return new this(e).sin();
}
function of(e) {
  return new this(e).sinh();
}
function lf(e) {
  return new this(e).sqrt();
}
function sf(e, n) {
  return new this(e).sub(n);
}
function uf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ve = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ve = !0, se(r, this.precision, this.rounding);
}
function df(e) {
  return new this(e).tan();
}
function vf(e) {
  return new this(e).tanh();
}
function ff(e) {
  return se(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var qn = q.constructor = Zl(ri);
ut = new qn(ut);
dt = new qn(dt);
var cf = {
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
  n: mf,
  classes: pf
} = ee("counter"), wo = 100, So = 600, hf = ["inputmode", "readonly", "disabled"];
function gf(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Pe({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [ke(ne(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: c(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
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
          class: c(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
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
        hf
      ), [[qs, e.inputValue]]), ke(ne(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: c(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
          style: X({
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
const Wr = _({
  render: gf,
  name: "VarCounter",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: cf,
  setup(e) {
    var n = M(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = mn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = cn(), {
      readonly: f,
      disabled: m
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), b = (L) => {
      Ve(() => {
        var {
          validateTrigger: Z,
          rules: H,
          modelValue: K
        } = e;
        u(Z, L, H, K);
      });
    }, w = () => {
      var {
        min: L
      } = e;
      N(e["onUpdate:modelValue"], L != null ? z(L) : 0), v();
    }, T = {
      reset: w,
      validate: p,
      resetValidation: v
    }, S = Y(() => {
      var {
        max: L,
        modelValue: Z
      } = e;
      return L != null && z(Z) >= z(L);
    }), g = Y(() => {
      var {
        min: L,
        modelValue: Z
      } = e;
      return L != null && z(Z) <= z(L);
    }), y = (L) => {
      var {
        decimalLength: Z,
        max: H,
        min: K
      } = e, I = z(L);
      return H != null && I > z(H) && (I = z(H)), K != null && I < z(K) && (I = z(K)), L = String(I), Z != null && (L = I.toFixed(z(Z))), L;
    }, E = (L) => {
      var {
        lazyChange: Z,
        onBeforeChange: H
      } = e, {
        value: K
      } = L.target, I = y(K);
      Z ? N(H, z(I), j) : W(I), b("onInputChange");
    }, k = () => {
      var {
        disabled: L,
        readonly: Z,
        disableDecrement: H,
        decrementButton: K,
        lazyChange: I,
        step: F,
        modelValue: U,
        onDecrement: Q,
        onBeforeChange: ie
      } = e;
      if (!(m != null && m.value || f != null && f.value || L || Z || H || !K) && !g.value) {
        var le = new qn(z(U)).minus(new qn(z(F))).toString(), de = y(le), we = z(de);
        N(Q, we), I ? N(ie, we, j) : (W(de), b("onDecrement"));
      }
    }, A = () => {
      var {
        disabled: L,
        readonly: Z,
        disableIncrement: H,
        incrementButton: K,
        lazyChange: I,
        step: F,
        modelValue: U,
        onIncrement: Q,
        onBeforeChange: ie
      } = e;
      if (!(m != null && m.value || f != null && f.value || L || Z || H || !K) && !S.value) {
        var le = new qn(z(U)).plus(new qn(z(F))).toString(), de = y(le), we = z(de);
        N(Q, we), I ? N(ie, we, j) : (W(de), b("onIncrement"));
      }
    }, C = () => {
      var {
        press: L,
        lazyChange: Z
      } = e;
      !L || Z || (i = window.setTimeout(() => {
        R();
      }, So));
    }, B = () => {
      var {
        press: L,
        lazyChange: Z
      } = e;
      !L || Z || (t = window.setTimeout(() => {
        O();
      }, So));
    }, V = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, $ = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, O = () => {
      r = window.setTimeout(() => {
        A(), O();
      }, wo);
    }, R = () => {
      a = window.setTimeout(() => {
        k(), R();
      }, wo);
    }, W = (L) => {
      n.value = L;
      var Z = z(L);
      N(e["onUpdate:modelValue"], Z);
    }, j = (L) => {
      W(y(String(L))), b("onLazyChange");
    };
    return N(o, T), ae(() => e.modelValue, (L) => {
      W(y(String(L))), N(e.onChange, z(L));
    }), W(y(String(e.modelValue))), {
      n: mf,
      classes: pf,
      inputValue: n,
      errorMessage: s,
      formDisabled: m,
      formReadonly: f,
      isMax: S,
      isMin: g,
      validate: p,
      reset: w,
      resetValidation: v,
      handleChange: E,
      decrement: k,
      increment: A,
      pressDecrement: C,
      pressIncrement: B,
      releaseDecrement: V,
      releaseIncrement: $,
      toSizeUnit: be,
      toNumber: z
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var Jl = 60, Ql = Jl * 60, xl = Ql * 24, yf = xl * 7, Ca = 1e3, Lt = Jl * Ca, Co = Ql * Ca, bf = xl * Ca, wf = yf * Ca, Fi = "millisecond", Vr = "second", Pr = "minute", Er = "hour", Fn = "day", at = "week", hn = "month", _l = "quarter", Rn = "year", Mr = "date", Sf = "YYYY-MM-DDTHH:mm:ssZ", ko = "Invalid Date", Cf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, kf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const $f = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var oi = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Tf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + oi(t, 2, "0") + ":" + oi(i, 2, "0");
}, Of = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, hn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), hn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Vf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Pf = function(n) {
  var r = {
    M: hn,
    y: Rn,
    w: at,
    d: Fn,
    D: Mr,
    h: Er,
    m: Pr,
    s: Vr,
    ms: Fi,
    Q: _l
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Ef = function(n) {
  return n === void 0;
};
const Mf = {
  s: oi,
  z: Tf,
  m: Of,
  a: Vf,
  p: Pf,
  u: Ef
};
var Aa = "en", vr = {};
vr[Aa] = $f;
var Ri = function(n) {
  return n instanceof Ot;
}, ft = function e(n, r, a) {
  var t;
  if (!n)
    return Aa;
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
  return !a && t && (Aa = t), t || !a && Aa;
}, re = function(n, r) {
  if (Ri(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Ot(a);
}, If = function(n, r) {
  return re(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Se = Mf;
Se.l = ft;
Se.i = Ri;
Se.w = If;
var Nf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Se.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Cf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Ot = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = ft(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Nf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Se;
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
    return Se.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = Se.u(t) ? !0 : t, l = Se.p(a), s = function(T, S) {
      var g = Se.w(i.$u ? Date.UTC(i.$y, S, T) : new Date(i.$y, S, T), i);
      return o ? g : g.endOf(Fn);
    }, u = function(T, S) {
      var g = [0, 0, 0, 0], y = [23, 59, 59, 999];
      return Se.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? g : y).slice(S)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, m = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Rn:
        return o ? s(1, 0) : s(31, 11);
      case hn:
        return o ? s(1, v) : s(0, v + 1);
      case at: {
        var p = this.$locale().weekStart || 0, b = (d < p ? d + 7 : d) - p;
        return s(o ? f - b : f + (6 - b), v);
      }
      case Fn:
      case Mr:
        return u(m + "Hours", 0);
      case Er:
        return u(m + "Minutes", 1);
      case Pr:
        return u(m + "Seconds", 2);
      case Vr:
        return u(m + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = Se.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Fn] = l + "Date", i[Mr] = l + "Date", i[hn] = l + "Month", i[Rn] = l + "FullYear", i[Er] = l + "Hours", i[Pr] = l + "Minutes", i[Vr] = l + "Seconds", i[Fi] = l + "Milliseconds", i)[o], u = o === Fn ? this.$D + (t - this.$W) : t;
    if (o === hn || o === Rn) {
      var d = this.clone().set(Mr, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Mr, Math.min(this.$D, d.daysInMonth())).$d;
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
      var m = re(i);
      return Se.w(m.date(m.date() + Math.round(f * a)), i);
    };
    if (l === hn)
      return this.set(hn, this.$M + a);
    if (l === Rn)
      return this.set(Rn, this.$y + a);
    if (l === Fn)
      return s(1);
    if (l === at)
      return s(7);
    var u = (o = {}, o[Pr] = Lt, o[Er] = Co, o[Vr] = Ca, o)[l] || 1, d = this.$d.getTime() + a * u;
    return Se.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || ko;
    var o = a || Sf, l = Se.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, m = i.meridiem, p = function(g, y, E, k) {
      return g && (g[y] || g(t, o)) || E[y].slice(0, k);
    }, b = function(g) {
      return Se.s(s % 12 || 12, g, "0");
    }, w = m || function(S, g, y) {
      var E = S < 12 ? "AM" : "PM";
      return y ? E.toLowerCase() : E;
    }, T = {
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
      h: b(1),
      hh: b(2),
      a: w(s, u, !0),
      A: w(s, u, !1),
      m: String(u),
      mm: Se.s(u, 2, "0"),
      s: String(this.$s),
      ss: Se.s(this.$s, 2, "0"),
      SSS: Se.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(kf, function(S, g) {
      return g || T[S] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = Se.p(t), s = re(a), u = (s.utcOffset() - this.utcOffset()) * Lt, d = this - s, v = Se.m(this, s);
    return v = (o = {}, o[Rn] = v / 12, o[hn] = v, o[_l] = v / 3, o[at] = (d - u) / wf, o[Fn] = (d - u) / bf, o[Er] = d / Co, o[Pr] = d / Lt, o[Vr] = d / Ca, o)[l] || d, i ? v : Se.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(hn).$D;
  }, n.$locale = function() {
    return vr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = ft(a, t, !0);
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
}(), es = Ot.prototype;
re.prototype = es;
[["$ms", Fi], ["$s", Vr], ["$m", Pr], ["$H", Er], ["$W", Fn], ["$M", hn], ["$y", Rn], ["$D", Mr]].forEach(function(e) {
  es[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
re.extend = function(e, n) {
  return e.$i || (e(n, Ot, re), e.$i = !0), re;
};
re.locale = ft;
re.isDayjs = Ri;
re.unix = function(e) {
  return re(e * 1e3);
};
re.en = vr[Aa];
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
function Df(e) {
  return ["date", "month"].includes(e);
}
var tt = [{
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
}], Ba = [{
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
}], Bf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Df
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
  n: Af
} = ee("picker-header");
function zf(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), P(
    "div",
    {
      class: c(e.n())
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
        default: fe(() => [ne(r, {
          name: "chevron-left"
        })]),
        _: 1
      },
      8,
      ["disabled"]
    ), D(
      "div",
      {
        class: c(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ne(
        Re,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), P(
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
        default: fe(() => [ne(r, {
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
const as = _({
  render: zf,
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
    } = n, a = M(!1), t = M(0), i = Y(() => {
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
      n: Af,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
function li() {
  return li = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, li.apply(this, arguments);
}
re.extend(ns);
re.extend(rs);
var {
  n: Qa,
  classes: Lf
} = ee("month-picker"), {
  n: xa
} = ee("date-picker");
function Ff(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
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
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), P("ul", {
            key: e.panelKey
          }, [(h(!0), P(
            Oe,
            null,
            De(e.MONTH_LIST, (t) => (h(), P("li", {
              key: t.index
            }, [ne(
              a,
              Pe({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, li({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: fe(() => [he(
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
const Rf = _({
  render: Ff,
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
    } = n, [a, t] = e.current.split("-"), i = M(!1), o = M(0), l = M(null), s = Ne({
      left: !1,
      right: !1
    }), u = Y(() => e.choose.chooseYear === e.preview.previewYear), d = Y(() => e.preview.previewYear === a), v = (S) => {
      var g, y;
      return (g = (y = Ye.value.datePickerMonthDict) == null ? void 0 : y[S].abbr) != null ? g : "";
    }, f = (S) => {
      var {
        preview: {
          previewYear: g
        },
        componentProps: {
          min: y,
          max: E
        }
      } = e, k = !0, A = !0, C = g + "-" + S;
      return E && (k = re(C).isSameOrBefore(re(E), "month")), y && (A = re(C).isSameOrAfter(re(y), "month")), k && A;
    }, m = (S) => {
      var {
        choose: {
          chooseMonths: g,
          chooseDays: y,
          chooseRangeMonth: E
        },
        componentProps: {
          type: k,
          range: A
        }
      } = e;
      if (A) {
        if (!E.length)
          return !1;
        var C = re(S).isSameOrBefore(re(E[1]), "month"), B = re(S).isSameOrAfter(re(E[0]), "month");
        return C && B;
      }
      return k === "month" ? g.includes(S) : y.some((V) => V.includes(S));
    }, p = (S) => {
      var {
        choose: {
          chooseMonth: g
        },
        preview: {
          previewYear: y
        },
        componentProps: {
          allowedDates: E,
          color: k,
          multiple: A,
          range: C
        }
      } = e, B = y + "-" + S, V = () => C || A ? m(B) : (g == null ? void 0 : g.index) === S && u.value, $ = () => f(S) ? E ? !E(B) : !1 : !0, O = $(), R = () => O ? !0 : C || A ? !m(B) : !u.value || (g == null ? void 0 : g.index) !== S, W = () => d.value && t === S && e.componentProps.showCurrent ? (C || A || u.value) && O ? !0 : C || A ? !m(B) : u.value ? (g == null ? void 0 : g.index) !== t : !0 : !1, j = () => O ? "" : W() ? k != null ? k : "" : V() ? "" : xa() + "-color-cover", L = j().startsWith(xa());
      return {
        outline: W(),
        text: R(),
        color: R() ? "" : k,
        textColor: L ? "" : j(),
        [xa() + "-color-cover"]: L,
        class: Lf(Qa("button"), [O, Qa("button--disabled")])
      };
    }, b = (S, g) => {
      var y = g.currentTarget;
      y.classList.contains(Qa("button--disabled")) || r("choose-month", S);
    }, w = (S) => {
      i.value = S === "prev", o.value += S === "prev" ? -1 : 1, r("check-preview", "year", S);
    }, T = (S) => {
      l.value.checkDate(S);
    };
    return ae(() => e.preview.previewYear, (S) => {
      var {
        componentProps: {
          min: g,
          max: y
        }
      } = e;
      y && (s.right = !re("" + (z(S) + 1)).isSameOrBefore(re(y), "year")), g && (s.left = !re("" + (z(S) - 1)).isSameOrAfter(re(g), "year"));
    }, {
      immediate: !0
    }), {
      n: Qa,
      nDate: xa,
      pack: Ye,
      MONTH_LIST: tt,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: b,
      checkDate: w
    };
  }
});
var {
  n: $o,
  classes: Uf
} = ee("year-picker"), Yf = ["onClick"];
function Wf(e, n) {
  return h(), P(
    "ul",
    {
      class: c(e.n())
    },
    [(h(!0), P(
      Oe,
      null,
      De(e.yearList, (r) => (h(), P(
        "li",
        {
          key: r,
          class: c(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: X({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        x(r),
        15,
        Yf
      ))),
      128
    ))],
    2
  );
}
const Hf = _({
  render: Wf,
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
        var f = re(s).format("YYYY-MM-D"), m = z(f.split("-")[0]);
        if (m < u[0] && m > u[1] && (u = [u[0], m]), m >= u[0])
          return [m];
      }
      for (var p = u[0]; p >= u[1]; p--)
        i.push(p);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Le(() => {
      var i = document.querySelector("." + $o("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: $o,
      classes: Uf,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
function si() {
  return si = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, si.apply(this, arguments);
}
re.extend(ns);
re.extend(rs);
var {
  n: Tr,
  classes: jf
} = ee("day-picker"), {
  n: _a
} = ee("date-picker");
function Gf(e, n) {
  var r = te("panel-header"), a = te("var-button");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n("content"))
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
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: fe(() => [(h(), P("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: c(e.n("head"))
            },
            [(h(!0), P(
              Oe,
              null,
              De(e.sortWeekList, (t) => (h(), P(
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
          ), D(
            "ul",
            {
              class: c(e.n("body"))
            },
            [(h(!0), P(
              Oe,
              null,
              De(e.days, (t, i) => (h(), P("li", {
                key: i
              }, [ne(
                a,
                Pe({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, si({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: fe(() => [he(
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
const qf = _({
  render: Gf,
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
    } = n, [a, t, i] = e.current.split("-"), o = M([]), l = M(!1), s = M(0), u = M(null), d = Ne({
      left: !1,
      right: !1
    }), v = Y(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = Y(() => {
      var C;
      return e.choose.chooseYear === e.preview.previewYear && ((C = e.choose.chooseMonth) == null ? void 0 : C.index) === e.preview.previewMonth.index;
    }), m = Y(() => {
      var C = Ba.findIndex((B) => B.index === e.componentProps.firstDayOfWeek);
      return C === -1 || C === 0 ? Ba : Ba.slice(C).concat(Ba.slice(0, C));
    }), p = (C) => {
      var B, V;
      return (B = (V = Ye.value.datePickerWeekDict) == null ? void 0 : V[C].abbr) != null ? B : "";
    }, b = (C) => C > 0 ? C : "", w = () => {
      var {
        preview: {
          previewMonth: C,
          previewYear: B
        }
      } = e, V = re(B + "-" + C.index).daysInMonth(), $ = re(B + "-" + C.index + "-01").day(), O = m.value.findIndex((R) => R.index === "" + $);
      o.value = [...Array(O).fill(-1), ...Array.from(Array(V + 1).keys())].filter((R) => R);
    }, T = () => {
      var {
        preview: {
          previewYear: C,
          previewMonth: B
        },
        componentProps: {
          max: V,
          min: $
        }
      } = e;
      if (V) {
        var O = C + "-" + (z(B.index) + 1);
        d.right = !re(O).isSameOrBefore(re(V), "month");
      }
      if ($) {
        var R = C + "-" + (z(B.index) - 1);
        d.left = !re(R).isSameOrAfter(re($), "month");
      }
    }, S = (C) => {
      var {
        preview: {
          previewYear: B,
          previewMonth: V
        },
        componentProps: {
          min: $,
          max: O
        }
      } = e, R = !0, W = !0, j = B + "-" + V.index + "-" + C;
      return O && (R = re(j).isSameOrBefore(re(O), "day")), $ && (W = re(j).isSameOrAfter(re($), "day")), R && W;
    }, g = (C) => {
      var {
        choose: {
          chooseDays: B,
          chooseRangeDay: V
        },
        componentProps: {
          range: $
        }
      } = e;
      if ($) {
        if (!V.length)
          return !1;
        var O = re(C).isSameOrBefore(re(V[1]), "day"), R = re(C).isSameOrAfter(re(V[0]), "day");
        return O && R;
      }
      return B.includes(C);
    }, y = (C) => {
      if (C < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Tr("button")
        };
      var {
        choose: {
          chooseDay: B
        },
        preview: {
          previewYear: V,
          previewMonth: $
        },
        componentProps: {
          allowedDates: O,
          color: R,
          multiple: W,
          range: j
        }
      } = e, L = V + "-" + $.index + "-" + C, Z = () => j || W ? g(L) : z(B) === C && f.value, H = () => S(C) ? O ? !O(L) : !1 : !0, K = H(), I = () => K ? !0 : j || W ? !g(L) : !f.value || z(B) !== C, F = () => v.value && z(i) === C && e.componentProps.showCurrent ? (j || W || f.value) && K ? !0 : j || W ? !g(L) : f.value ? B !== i : !0 : !1, U = () => K ? "" : F() ? R != null ? R : "" : Z() ? "" : _a() + "-color-cover", Q = U().startsWith(_a());
      return {
        text: I(),
        outline: F(),
        textColor: Q ? "" : U(),
        [_a() + "-color-cover"]: Q,
        class: jf(Tr("button"), Tr("button--usable"), [K, Tr("button--disabled")])
      };
    }, E = (C) => {
      l.value = C === "prev", s.value += C === "prev" ? -1 : 1, r("check-preview", "month", C);
    }, k = (C, B) => {
      var V = B.currentTarget;
      V.classList.contains(Tr("button--disabled")) || r("choose-day", C);
    }, A = (C) => {
      u.value.checkDate(C);
    };
    return Le(() => {
      w(), T();
    }), ae(() => e.preview, () => {
      w(), T();
    }), {
      n: Tr,
      nDate: _a,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: m,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: b,
      getDayAbbr: p,
      checkDate: E,
      chooseDay: k,
      buttonProps: y
    };
  }
});
var {
  n: Xf,
  classes: Kf
} = ee("date-picker");
function Zf(e, n) {
  var r = te("year-picker-panel"), a = te("month-picker-panel"), t = te("day-picker-panel");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: X({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [G(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
          x(e.chooseYear),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [ne(
          Re,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: fe(() => {
              var i, o, l;
              return [e.type === "month" ? (h(), P("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                x(e.getMonthTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                x(e.getMonthTitle),
                1
              )]) : G(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [he(
                x(e.getMonthTitle),
                1
              )])])) : (h(), P("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? G(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                x(e.getDateTitle),
                1
              )]) : e.multiple ? G(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                x(e.getDateTitle),
                1
              )]) : G(e.$slots, "date", vl(Pe({
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
    ), D(
      "div",
      {
        class: c(e.n("body")),
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
        Re,
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
const Hr = _({
  render: Zf,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Rf,
    YearPickerPanel: Hf,
    DayPickerPanel: qf
  },
  props: Bf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = re().format("YYYY-MM-D"), [o, l] = i.split("-"), s = tt.find((oe) => oe.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), m = M(), p = M(), b = M(s), w = M(o), T = M(!1), S = M([]), g = M([]), y = M([]), E = M([]), k = M(null), A = M(null), C = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), B = Y(() => ({
      chooseMonth: f.value,
      chooseYear: m.value,
      chooseDay: p.value,
      chooseMonths: S.value,
      chooseDays: g.value,
      chooseRangeMonth: y.value,
      chooseRangeDay: E.value
    })), V = Y(() => ({
      previewMonth: b.value,
      previewYear: w.value
    })), $ = Y(() => {
      var {
        multiple: oe,
        range: pe
      } = e;
      if (pe)
        return y.value.length ? y.value[0] + " ~ " + y.value[1] : "";
      var ce = "";
      if (f.value) {
        var ge, ye;
        ce = (ge = (ye = Ye.value.datePickerMonthDict) == null ? void 0 : ye[f.value.index].name) != null ? ge : "";
      }
      return oe ? "" + S.value.length + Ye.value.datePickerSelected : ce;
    }), O = Y(() => {
      var oe, pe, ce, ge, {
        multiple: ye,
        range: Be
      } = e;
      if (Be) {
        var Ke = E.value.map((Bt) => re(Bt).format("YYYY-MM-DD"));
        return Ke.length ? Ke[0] + " ~ " + Ke[1] : "";
      }
      if (ye)
        return "" + g.value.length + Ye.value.datePickerSelected;
      if (!m.value || !f.value || !p.value)
        return "";
      var ln = re(m.value + "-" + f.value.index + "-" + p.value).day(), $r = Ba.find((Bt) => Bt.index === "" + ln), Qi = (oe = (pe = Ye.value.datePickerWeekDict) == null ? void 0 : pe[$r.index].name) != null ? oe : "", Ys = (ce = (ge = Ye.value.datePickerMonthDict) == null ? void 0 : ge[f.value.index].name) != null ? ce : "", Ws = hr(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + Ws + " " + Qi.slice(0, 3) : Qi.slice(0, 3) + ", " + Ys.slice(0, 3) + " " + p.value;
    }), R = Y(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), W = Y(() => !e.touchable || ["", "year"].includes(R.value)), j = Y(() => {
      var oe, pe, ce, ge, ye = re(m.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + p.value).day(), Be = p.value ? hr(p.value, 2, "0") : "";
      return {
        week: "" + ye,
        year: (pe = m.value) != null ? pe : "",
        month: (ce = (ge = f.value) == null ? void 0 : ge.index) != null ? ce : "",
        date: Be
      };
    }), L = Y(() => B.value.chooseRangeDay.map((oe) => re(oe).format("YYYY-MM-DD"))), Z = Y(() => m.value === w.value), H = Y(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === b.value.index;
    }), K = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, I = (oe) => {
      if (!W.value) {
        var {
          clientX: pe,
          clientY: ce
        } = oe.touches[0];
        n = pe, r = ce;
      }
    }, F = (oe, pe) => oe >= pe && oe > 20 ? "x" : "y", U = (oe) => {
      if (!W.value) {
        var {
          clientX: pe,
          clientY: ce
        } = oe.touches[0], ge = pe - n, ye = ce - r;
        t = F(Math.abs(ge), Math.abs(ye)), a = ge > 0 ? "prev" : "next";
      }
    }, Q = () => {
      if (!(W.value || t !== "x")) {
        var oe = R.value === "month" ? k : A;
        wt(() => {
          oe.value.forwardRef(a), Ji();
        });
      }
    }, ie = (oe, pe) => {
      var ce = pe === "month" ? y : E;
      if (ce.value = v.value ? [oe, oe] : [ce.value[0], oe], v.value = !v.value, v.value) {
        var ge = re(ce.value[0]).isAfter(ce.value[1]), ye = ge ? [ce.value[1], ce.value[0]] : [...ce.value];
        N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
      }
    }, le = (oe, pe) => {
      var ce = pe === "month" ? S : g, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", ye = ce.value.map((Ke) => re(Ke).format(ge)), Be = ye.findIndex((Ke) => Ke === oe);
      Be === -1 ? ye.push(oe) : ye.splice(Be, 1), N(e["onUpdate:modelValue"], ye), N(e.onChange, ye);
    }, de = (oe, pe) => !m.value || !f.value ? !1 : Z.value ? oe === "month" ? pe.index < f.value.index : H.value ? pe < z(p.value) : f.value.index > b.value.index : m.value > w.value, we = (oe) => {
      var {
        readonly: pe,
        range: ce,
        multiple: ge,
        onChange: ye,
        "onUpdate:modelValue": Be
      } = e;
      if (!(oe < 0 || pe)) {
        T.value = de("day", oe);
        var Ke = w.value + "-" + b.value.index + "-" + oe, ln = re(Ke).format("YYYY-MM-DD");
        ce ? ie(ln, "day") : ge ? le(ln, "day") : (N(Be, ln), N(ye, ln));
      }
    }, Fe = (oe) => {
      var {
        type: pe,
        readonly: ce,
        range: ge,
        multiple: ye,
        onChange: Be,
        onPreview: Ke,
        "onUpdate:modelValue": ln
      } = e;
      if (T.value = de("month", oe), pe === "month" && !ce) {
        var $r = w.value + "-" + oe.index;
        ge ? ie($r, "month") : ye ? le($r, "month") : (N(ln, $r), N(Be, $r));
      } else
        b.value = oe, N(Ke, z(w.value), z(b.value.index));
      d.value = !1;
    }, Qe = (oe) => {
      w.value = "" + oe, u.value = !1, d.value = !0, N(e.onPreview, z(w.value), z(b.value.index));
    }, Ee = (oe, pe) => {
      var ce = pe === "prev" ? -1 : 1;
      if (oe === "year")
        w.value = "" + (z(w.value) + ce);
      else {
        var ge = z(b.value.index) + ce;
        ge < 1 && (w.value = "" + (z(w.value) - 1), ge = 12), ge > 12 && (w.value = "" + (z(w.value) + 1), ge = 1), b.value = tt.find((ye) => z(ye.index) === ge);
      }
      N(e.onPreview, z(w.value), z(b.value.index));
    }, on = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Dt = (oe) => Ce(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Fs = (oe, pe) => {
      var ce = pe === "month" ? y : E, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = oe.map((ln) => re(ln).format(ge)).slice(0, 2), Be = ce.value.some((ln) => Dt(ln));
      if (!Be) {
        ce.value = ye;
        var Ke = re(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Ke && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Rs = (oe, pe) => {
      var ce = pe === "month" ? S : g, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", ye = Array.from(new Set(oe.map((Be) => re(Be).format(ge))));
      ce.value = ye.filter((Be) => Be !== "Invalid Date");
    }, Us = (oe) => {
      var pe = re(oe).format("YYYY-MM-D");
      if (!Dt(pe)) {
        var [ce, ge, ye] = pe.split("-"), Be = tt.find((Ke) => Ke.index === ge);
        f.value = Be, m.value = ce, p.value = ye, b.value = Be, w.value = ce;
      }
    }, Ji = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ae(() => e.modelValue, (oe) => {
      if (!(!on() || Dt(oe) || !oe))
        if (e.range) {
          if (!Ce(oe))
            return;
          v.value = oe.length !== 1, Fs(oe, e.type);
        } else if (e.multiple) {
          if (!Ce(oe))
            return;
          Rs(oe, e.type);
        } else
          Us(oe);
    }, {
      immediate: !0
    }), ae(R, Ji), {
      n: Xf,
      classes: Kf,
      monthPanelEl: k,
      dayPanelEl: A,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: m,
      chooseDay: p,
      previewYear: w,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: $,
      getDateTitle: O,
      getPanelType: R,
      getChoose: B,
      getPreview: V,
      componentProps: C,
      slotProps: j,
      formatRange: L,
      clickEl: K,
      handleTouchstart: I,
      handleTouchmove: U,
      handleTouchend: Q,
      getChooseDay: we,
      getChooseMonth: Fe,
      getChooseYear: Qe,
      checkPreview: Ee
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
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
function Jf(e) {
  return ["left", "center", "right"].includes(e);
}
var Qf = ui({
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
    validator: Jf
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
var {
  n: xf,
  classes: _f
} = ee("dialog");
function ec(e, n) {
  var r = te("var-button"), a = te("var-popup");
  return h(), me(
    a,
    {
      class: c(e.n("popup")),
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
      default: fe(() => [D(
        "div",
        Pe({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: di({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: c(e.n("title"))
          },
          [G(e.$slots, "title", {}, () => [he(
            x(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), D(
          "div",
          {
            class: c(e.n("message")),
            style: X({
              textAlign: e.messageAlign
            })
          },
          [G(e.$slots, "default", {}, () => [he(
            x(e.message),
            1
          )])],
          6
        ), D(
          "div",
          {
            class: c(e.n("actions"))
          },
          [e.cancelButton ? (h(), me(
            r,
            {
              key: 0,
              class: c(e.classes(e.n("button"), e.n("cancel-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              color: e.cancelButtonColor,
              onClick: e.cancel
            },
            {
              default: fe(() => [he(
                x(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
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
              class: c(e.classes(e.n("button"), e.n("confirm-button"))),
              "var-dialog-cover": "",
              text: "",
              "text-color": e.confirmButtonTextColor,
              color: e.confirmButtonColor,
              onClick: e.confirm
            },
            {
              default: fe(() => [he(
                x(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
const fr = _({
  render: ec,
  name: "VarDialog",
  components: {
    VarPopup: yn,
    VarButton: nn
  },
  inheritAttrs: !1,
  props: Qf,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => N(e["onUpdate:show"], !1), t = () => {
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
      n: xf,
      classes: _f,
      pack: Ye,
      dt: yt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: be
    };
  }
});
var Yn;
function yr(e) {
  return Bi() ? new Promise((n) => {
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
    Yn = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
yr.Component = fr;
var nc = {
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
  n: rc,
  classes: ac
} = ee("divider");
function tc(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: X(e.style)
    },
    [G(e.$slots, "default", {}, () => [e.description ? (h(), P(
      "span",
      {
        key: 0,
        class: c(e.n("text"))
      },
      x(e.description),
      3
    )) : J("v-if", !0)])],
    6
  );
}
const jr = _({
  render: tc,
  name: "VarDivider",
  props: nc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = Y(() => Ht(e.inset) ? e.inset : !0), i = Y(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Ht(l) || l === 0)
        return Ir({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Ir({}, d, {
        height: "calc(80% - " + be(f) + ")"
      }) : Ir({}, d, {
        width: "calc(100% - " + be(f) + ")",
        left: v > 0 ? be(f) : be(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Le(() => {
      o();
    }), Ii(() => {
      o();
    }), Ir({
      n: rc,
      classes: ac
    }, Xs(a), {
      style: i,
      isInset: t
    });
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
var ic = {
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
function oc(e) {
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
  n: lc
} = ee("form");
function sc(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Xn = _({
  render: sc,
  name: "VarForm",
  props: ic,
  setup(e) {
    var n = Y(() => e.disabled), r = Y(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Yd(), i = /* @__PURE__ */ function() {
      var u = oc(function* () {
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
      n: lc,
      validate: i,
      reset: o,
      resetValidation: l
    };
  }
});
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
Xn.useValidation = cn;
Xn.useForm = mn;
function Oo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vt(e) {
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
var uc = "background-image", dc = "lazy-loading", vc = "lazy-error", Vo = "lazy-attempt", fc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], fi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", ka = [], ct = [], ts = _s(100), Ae = {
  loading: fi,
  error: fi,
  attempt: 3,
  throttleWait: 300,
  events: fc
}, Ui = Di(Xa, Ae.throttleWait);
function Pt(e, n) {
  e._lazy.arg === uc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function cc(e) {
  e._lazy.loading && Pt(e, e._lazy.loading), Xa();
}
function mc(e) {
  e._lazy.error && Pt(e, e._lazy.error), e._lazy.state = "error", Wi(e), Xa();
}
function is(e, n) {
  Pt(e, n), e._lazy.state = "success", Wi(e), Xa();
}
function pc(e) {
  var n;
  ct.includes(e) || (ct.push(e), (n = Ae.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ui, {
      passive: !0
    });
  }));
}
function hc() {
  ct.forEach((e) => {
    var n;
    (n = Ae.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ui);
    });
  }), ct.length = 0;
}
function gc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(dc)) != null ? r : Ae.loading,
    error: (a = e.getAttribute(vc)) != null ? a : Ae.error,
    attempt: e.getAttribute(Vo) ? Number(e.getAttribute(Vo)) : Ae.attempt
  };
  e._lazy = vi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Pt(e, fi), N(Ae.filter, e._lazy);
}
function yc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ts.add(n), is(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? mc(e) : os(e);
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
    cc(e), yc(e, n);
  }
}
function Yi(e) {
  return ci.apply(this, arguments);
}
function ci() {
  return ci = Vt(function* (e) {
    (yield ru(e)) && os(e);
  }), ci.apply(this, arguments);
}
function Xa() {
  ka.forEach((e) => Yi(e));
}
function bc(e) {
  return mi.apply(this, arguments);
}
function mi() {
  return mi = Vt(function* (e) {
    !ka.includes(e) && ka.push(e), au(e).forEach(pc), yield Yi(e);
  }), mi.apply(this, arguments);
}
function Wi(e) {
  gt(ka, e), ka.length === 0 && hc();
}
function wc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ls(e, n) {
  return pi.apply(this, arguments);
}
function pi() {
  return pi = Vt(function* (e, n) {
    gc(e, n), yield bc(e);
  }), pi.apply(this, arguments);
}
function Sc(e, n) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = Vt(function* (e, n) {
    if (!wc(e, n)) {
      ka.includes(e) && (yield Yi(e));
      return;
    }
    yield ls(e, n);
  }), hi.apply(this, arguments);
}
function Cc(e) {
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
var mt = {
  mounted: ls,
  unmounted: Wi,
  updated: Sc,
  install(e, n) {
    Cc(n), Ui = Di(Xa, Ae.throttleWait), e.directive("lazy", this);
  }
};
function kc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var $c = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: kc,
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
  n: Tc,
  classes: Oc
} = ee("image"), Vc = ["alt", "title", "lazy-error", "lazy-loading"], Pc = ["alt", "title", "src"];
function Ec(e, n) {
  var r = Ge("lazy"), a = Ge("ripple");
  return ke((h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((h(), P(
      "img",
      {
        key: 0,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        "lazy-error": e.error,
        "lazy-loading": e.loading,
        style: X({
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
      Vc
    )), [[r, e.src]]) : (h(), P(
      "img",
      {
        key: 1,
        class: c(e.n("image")),
        alt: e.alt,
        title: e.title,
        style: X({
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
      Pc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Gr = _({
  render: Ec,
  name: "VarImage",
  directives: {
    Lazy: mt,
    Ripple: Ue
  },
  props: $c,
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
      n: Tc,
      classes: Oc,
      toSizeUnit: be,
      handleLoad: n,
      handleError: r
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var ss = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), us = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Mc() {
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
function Ic(e) {
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
var Nc = 250, Dc = 20, {
  n: Bc,
  classes: Ac
} = ee("swipe"), zc = ["onClick"];
function Lc(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n()),
      ref: "swipeEl"
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
        style: X({
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
    }, () => [e.indicator && e.length ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(h(!0), P(
        Oe,
        null,
        De(e.length, (r, a) => (h(), P(
          "div",
          {
            class: c(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: X({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          zc
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)])],
    2
  );
}
const Kn = _({
  render: Lc,
  name: "VarSwipe",
  props: ds,
  setup(e) {
    var n = M(null), r = M(0), a = Y(() => e.vertical), t = M(0), i = M(0), o = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Mc(), v = !1, f = -1, m, p, b, w, T, S = (I) => s.find((F) => {
      var {
        index: U
      } = F;
      return U.value === I;
    }), g = () => {
      !e.loop || (i.value >= 0 && S(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && S(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (S(d.value - 1).setTranslate(0), S(0).setTranslate(0)));
    }, y = (I) => {
      var F = je(I) ? I : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: U
      } = e;
      return F <= -1 ? U ? -1 : 0 : F >= d.value ? U ? d.value : d.value - 1 : F;
    }, E = (I) => {
      var {
        loop: F
      } = e;
      return I === -1 ? F ? d.value - 1 : 0 : I === d.value ? F ? 0 : d.value - 1 : I;
    }, k = (I) => {
      var {
        loop: F
      } = e;
      return I < 0 ? F ? d.value - 1 : 0 : I > d.value - 1 ? F ? 0 : d.value - 1 : I;
    }, A = (I) => {
      var F = i.value >= r.value, U = i.value <= -t.value, Q = 0, ie = -(t.value - r.value);
      o.value = !0, (F || U) && (o.value = !0, i.value = U ? Q : ie, S(0).setTranslate(0), S(d.value - 1).setTranslate(0)), wt(() => {
        o.value = !1, N(I);
      });
    }, C = () => {
      l.value = k(z(e.initialIndex));
    }, B = () => {
      var {
        autoplay: I
      } = e;
      !I || d.value <= 1 || (V(), f = window.setTimeout(() => {
        L(), B();
      }, z(I)));
    }, V = () => {
      f && clearTimeout(f);
    }, $ = (I, F) => {
      if (I > F && I > 10)
        return "horizontal";
      if (F > I && F > 10)
        return "vertical";
    }, O = (I) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: F,
          clientY: U
        } = I.touches[0];
        m = F, p = U, b = performance.now(), v = !0, V(), A(() => {
          o.value = !0;
        });
      }
    }, R = (I) => {
      var {
        touchable: F,
        vertical: U
      } = e;
      if (!(!v || !F)) {
        var {
          clientX: Q,
          clientY: ie
        } = I.touches[0], le = Math.abs(Q - m), de = Math.abs(ie - p), we = $(le, de), Fe = U ? "vertical" : "horizontal";
        if (we === Fe) {
          I.preventDefault();
          var Qe = w !== void 0 ? Q - w : 0, Ee = T !== void 0 ? ie - T : 0;
          w = Q, T = ie, i.value += U ? Ee : Qe, g();
        }
      }
    }, W = () => {
      if (!!v) {
        var {
          vertical: I,
          onChange: F
        } = e, U = I ? T < p : w < m, Q = Math.abs(I ? p - T : m - w), ie = performance.now() - b <= Nc && Q >= Dc, le = ie ? y(U ? l.value + 1 : l.value - 1) : y();
        v = !1, o.value = !1, w = void 0, T = void 0, i.value = le * -r.value;
        var de = l.value;
        l.value = E(le), B(), de !== l.value && N(F, l.value);
      }
    }, j = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((I) => {
        I.setTranslate(0);
      }), B(), setTimeout(() => {
        o.value = !1;
      });
    }, L = () => {
      if (!(d.value <= 1)) {
        var {
          loop: I,
          onChange: F
        } = e, U = l.value;
        l.value = k(U + 1), N(F, l.value), A(() => {
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
          onChange: F
        } = e, U = l.value;
        l.value = k(U - 1), N(F, l.value), A(() => {
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
        var F = I > l.value ? L : Z;
        Array.from({
          length: Math.abs(I - l.value)
        }).forEach(F);
      }
    }, K = {
      size: r,
      vertical: a
    };
    return u(K), ae(() => d.value, /* @__PURE__ */ Ic(function* () {
      yield Tn(), C(), j();
    })), Le(() => {
      window.addEventListener("resize", j);
    }), rr(() => {
      window.removeEventListener("resize", j), V();
    }), {
      n: Bc,
      classes: Ac,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: O,
      handleTouchmove: R,
      handleTouchend: W,
      next: L,
      prev: Z,
      to: H,
      resize: j,
      toNumber: z
    };
  }
});
Kn.install = function(e) {
  e.component(Kn.name, Kn);
};
function Fc() {
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
  n: Rc
} = ee("swipe-item");
function Uc(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n()),
      style: X({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const Zn = _({
  render: Uc,
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Fc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: Rc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Zn.install = function(e) {
  e.component(Zn.name, Zn);
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
var Yc = gi({
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
  n: Eo,
  classes: Wc
} = ee("image-preview"), Mo = 12, Io = 200, Hc = 350, No = 200, jc = ["src", "alt"];
function Gc(e, n) {
  var r = te("var-swipe-item"), a = te("var-swipe"), t = te("var-icon"), i = te("var-popup");
  return h(), me(
    i,
    {
      class: c(e.n("popup")),
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
      default: fe(() => [ne(
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
          default: fe(() => [(h(!0), P(
            Oe,
            null,
            De(e.images, (o) => (h(), me(
              r,
              {
                class: c(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: fe(() => [D(
                  "div",
                  {
                    class: c(e.n("zoom-container")),
                    style: X({
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
                      class: c(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    jc
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
            }, () => [e.indicator && e.images.length > 1 ? (h(), P(
              "div",
              {
                key: 0,
                class: c(e.n("indicators"))
              },
              x(l + 1) + " / " + x(s),
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
          class: c(e.n("close-icon")),
          name: "close-circle",
          "var-image-preview-cover": "",
          onClick: e.close
        },
        null,
        8,
        ["class", "onClick"]
      )) : J("v-if", !0)]), D(
        "div",
        {
          class: c(e.n("extra"))
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
const cr = _({
  render: Gc,
  name: "VarImagePreview",
  components: {
    VarSwipe: Kn,
    VarSwipeItem: Zn,
    VarPopup: yn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Yc,
  setup(e) {
    var n = M(!1), r = Y(() => {
      var {
        images: V,
        current: $
      } = e, O = V.findIndex((R) => R === $);
      return O >= 0 ? O : 0;
    }), a = M(1), t = M(0), i = M(0), o = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (V, $) => {
      var {
        clientX: O,
        clientY: R
      } = V, {
        clientX: W,
        clientY: j
      } = $;
      return Math.abs(Math.sqrt(Math.pow(W - O, 2) + Math.pow(j - R, 2)));
    }, m = (V, $) => ({
      clientX: V.clientX,
      clientY: V.clientY,
      timestamp: Date.now(),
      target: $
    }), p = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, No);
    }, b = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, w = (V) => d ? f(d, V) <= Mo && V.timestamp - d.timestamp <= Io && d.target === V.target : !1, T = (V) => !V || !u || !d ? !1 : f(u, d) <= Mo && Date.now() - d.timestamp < Hc && (V === u.target || V.parentNode === u.target), S = (V) => {
      v = window.setTimeout(() => {
        T(V.target) && B(), u = null;
      }, Io);
    }, g = (V) => {
      v && window.clearTimeout(v);
      var {
        touches: $
      } = V, O = m($[0], V.currentTarget);
      if (u = O, w(O)) {
        a.value > 1 ? b() : p();
        return;
      }
      d = O;
    }, y = (V) => {
      var {
        offsetWidth: $,
        offsetHeight: O
      } = V, {
        naturalWidth: R,
        naturalHeight: W
      } = V.querySelector("." + Eo("image"));
      return {
        width: $,
        height: O,
        imageRadio: W / R,
        rootRadio: O / $,
        zoom: z(e.zoom)
      };
    }, E = (V) => {
      var {
        zoom: $,
        imageRadio: O,
        rootRadio: R,
        width: W,
        height: j
      } = y(V);
      if (!O)
        return 0;
      var L = O > R ? j / O : W;
      return Math.max(0, ($ * L - W) / 2) / $;
    }, k = (V) => {
      var {
        zoom: $,
        imageRadio: O,
        rootRadio: R,
        width: W,
        height: j
      } = y(V);
      if (!O)
        return 0;
      var L = O > R ? j : W * O;
      return Math.max(0, ($ * L - j) / 2) / $;
    }, A = (V, $, O) => V + $ >= O ? O : V + $ <= -O ? -O : V + $, C = (V) => {
      if (!!d) {
        var $ = V.currentTarget, {
          touches: O
        } = V, R = m(O[0], $);
        if (a.value > 1) {
          var W = R.clientX - d.clientX, j = R.clientY - d.clientY, L = E($), Z = k($);
          t.value = A(t.value, W, L), i.value = A(i.value, j, Z);
        }
        d = R;
      }
    }, B = () => {
      if (a.value > 1) {
        b(), setTimeout(() => N(e["onUpdate:show"], !1), No);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (V) => {
      n.value = V;
    }, {
      immediate: !0
    }), {
      n: Eo,
      classes: Wc,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: g,
      handleTouchmove: C,
      handleTouchend: S,
      close: B
    };
  }
});
var Wn;
function er(e) {
  if (!!Bi()) {
    er.close();
    var n = qe(e) ? {
      images: [e]
    } : Ce(e) ? {
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
    Wn = null, Ve().then(() => {
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
function qc(e) {
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
  classes: Kc
} = ee("sticky");
function Zc(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: X({
        zIndex: e.toNumber(e.zIndex),
        top: e.enableCSSMode ? e.offsetTop + "px" : void 0,
        width: e.enableFixedMode ? e.fixedWidth : void 0,
        height: e.enableFixedMode ? e.fixedHeight : void 0
      })
    },
    [D(
      "div",
      {
        class: c(e.n("wrapper")),
        ref: "wrapperEl",
        style: X({
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
const Jn = _({
  render: Zc,
  name: "VarSticky",
  props: vs,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), i = M("0px"), o = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = Y(() => !e.disabled && e.cssMode), v = Y(() => !e.disabled && a.value), f = Y(() => Ie(e.offsetTop)), m, p = () => {
      var {
        onScroll: T,
        cssMode: S,
        disabled: g
      } = e;
      if (!g) {
        var y = 0;
        if (m !== window) {
          var {
            top: E
          } = m.getBoundingClientRect();
          y = E;
        }
        var k = r.value, A = n.value, {
          top: C,
          left: B
        } = A.getBoundingClientRect(), V = C - y;
        V <= f.value ? (S || (o.value = A.offsetWidth + "px", l.value = A.offsetHeight + "px", t.value = y + f.value + "px", i.value = B + "px", s.value = k.offsetWidth + "px", u.value = k.offsetHeight + "px", a.value = !0), N(T, f.value, !0)) : (a.value = !1, N(T, V, !1));
      }
    }, b = /* @__PURE__ */ function() {
      var T = qc(function* () {
        yield Tn(), m = Pa(n.value), m !== window && m.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), w = () => {
      m !== window && m.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return ae(() => e.disabled, p), Vi(b), Pi(w), Le(b), rr(w), {
      n: Xc,
      classes: Kc,
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
function Jc() {
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
function Qc() {
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
var xc = {
  index: {
    type: [Number, String]
  }
}, {
  n: _c,
  classes: em
} = ee("index-anchor");
function nm(e, n) {
  return h(), me(
    Va(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: fe(() => [D(
        "div",
        Pe({
          class: e.n()
        }, e.$attrs),
        [G(e.$slots, "default", {}, () => [he(
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
const qr = _({
  render: nm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: Jn
  },
  inheritAttrs: !1,
  props: xc,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Qc(), t = M(0), i = M(!1), o = Y(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, m = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (w) => {
      i.value = w;
    }, b = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: m,
      setDisabled: p
    };
    return a(b), {
      n: _c,
      classes: em,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Re
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
var rm = {
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
function Ft(e) {
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
  n: am,
  classes: tm
} = ee("index-bar"), im = ["onClick"];
function om(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n()),
      ref: "barEl"
    },
    [G(e.$slots, "default"), D(
      "ul",
      {
        class: c(e.n("anchor-list")),
        style: X({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(h(!0), P(
        Oe,
        null,
        De(e.anchorNameList, (r) => (h(), P(
          "li",
          {
            key: r,
            class: c(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: X({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          x(r),
          15,
          im
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Xr = _({
  render: om,
  name: "VarIndexBar",
  props: rm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Jc(), t = M(""), i = M(null), o = M(null), l = M([]), s = M(), u = Y(() => e.sticky), d = Y(() => e.cssMode), v = Y(() => Ie(e.stickyOffsetTop)), f = Y(() => e.zIndex), m = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(m);
    var p = (S) => {
      var g = Ni(S) ? S.name.value : S;
      g === s.value || g === void 0 || (s.value = g, N(e.onChange, g));
    }, b = () => {
      var S = bt(i.value), g = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: y
      } = o.value;
      r.forEach((E, k) => {
        var A = E.ownTop.value, C = S - A + v.value - y, B = k === r.length - 1 ? g : r[k + 1].ownTop.value - E.ownTop.value;
        C >= 0 && C < B && !t.value && (k && !e.cssMode && r[k - 1].setDisabled(!0), E.setDisabled(!1), p(E));
      });
    }, w = /* @__PURE__ */ function() {
      var S = Ft(function* (g, y) {
        var {
          offsetTop: E
        } = o.value;
        if (y && N(e.onClick, g), g !== s.value) {
          var k = r.find((B) => {
            var {
              name: V
            } = B;
            return g === V.value;
          });
          if (!!k) {
            var A = k.ownTop.value - v.value + E, C = Ai(i.value);
            t.value = g, p(g), yield ot(i.value, {
              left: C,
              top: A,
              animation: cl,
              duration: z(e.duration)
            }), wt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(y, E) {
        return S.apply(this, arguments);
      };
    }(), T = (S) => {
      $n(() => w(S));
    };
    return ae(() => n.value, /* @__PURE__ */ Ft(function* () {
      yield Tn(), r.forEach((S) => {
        var {
          name: g,
          setOwnTop: y
        } = S;
        g.value && l.value.push(g.value), y();
      });
    })), Le(/* @__PURE__ */ Ft(function* () {
      yield Tn(), i.value = Pa(o.value), i.value.addEventListener("scroll", b);
    })), Ei(() => {
      N(i.value.removeEventListener, "scroll", b);
    }), {
      n: am,
      classes: tm,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: T,
      anchorClick: w
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
function lm(e) {
  return ["text", "password", "number"].includes(e);
}
var sm = {
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
    validator: lm
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
  n: Rt,
  classes: um
} = ee("input"), dm = ["id", "disabled", "type", "value", "maxlength", "rows"], vm = ["id", "disabled", "type", "value", "maxlength"], fm = ["for"];
function cm(e, n) {
  var r = te("var-icon"), a = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (h(), P(
          "input",
          {
            key: 0,
            class: c(e.n("autocomplete"))
          },
          null,
          2
        )) : J("v-if", !0), e.textarea ? (h(), P(
          "textarea",
          {
            key: 1,
            class: c(e.classes(e.n("input"), e.n("--textarea"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            rows: e.rows,
            style: X({
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
          dm
        )) : (h(), P(
          "input",
          {
            key: 2,
            class: c(e.classes(e.n("input"), [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--caret-error")])),
            ref: "el",
            autocomplete: "new-password",
            id: e.id,
            disabled: e.formDisabled || e.disabled || e.formReadonly || e.readonly,
            type: e.type,
            value: e.modelValue,
            maxlength: e.maxlength,
            style: X({
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
          vm
        )), D(
          "label",
          {
            class: c(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: X({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          x(e.placeholder),
          15,
          fm
        )],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (h(), me(
          r,
          {
            key: 0,
            class: c(e.n("clear-icon")),
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
    ), e.line ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: X({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : J("v-if", !0), ne(
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
const mr = _({
  render: cm,
  name: "VarInput",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: sm,
  setup(e) {
    var n = M("var-input-" + ja().uid), r = M(null), a = M(!1), t = Y(() => {
      var {
        maxlength: V,
        modelValue: $
      } = e;
      return V ? Hn($) ? "0 / " + V : String($).length + "/" + V : "";
    }), {
      bindForm: i,
      form: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = (V) => {
      Ve(() => {
        var {
          validateTrigger: $,
          rules: O,
          modelValue: R
        } = e;
        s($, V, O, R);
      });
    }, f = () => {
      var {
        hint: V,
        modelValue: $
      } = e;
      if (!V && !Hn($))
        return Rt("--placeholder-hidden");
      if (V && (!Hn($) || a.value))
        return Rt("--placeholder-hint");
    }, m = (V) => {
      a.value = !0, N(e.onFocus, V), v("onFocus");
    }, p = (V) => {
      a.value = !1, N(e.onBlur, V), v("onBlur");
    }, b = (V) => {
      var {
        value: $
      } = V.target;
      $ = g($), N(e["onUpdate:modelValue"], $), N(e.onInput, $, V), v("onInput");
    }, w = (V) => {
      var {
        value: $
      } = V.target;
      N(e.onChange, g($), V), v("onChange");
    }, T = () => {
      var {
        disabled: V,
        readonly: $,
        clearable: O,
        onClear: R
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || V || $ || !O || (N(e["onUpdate:modelValue"], ""), N(R, ""), v("onClear"));
    }, S = (V) => {
      var {
        disabled: $,
        onClick: O
      } = e;
      o != null && o.disabled.value || $ || (N(O, V), v("onClick"));
    }, g = (V) => e.modelModifiers.trim ? V.trim() : V, y = (V) => {
      var {
        disabled: $,
        readonly: O
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || $ || O || V.stopPropagation();
    }, E = () => {
      N(e["onUpdate:modelValue"], ""), d();
    }, k = () => u(e.rules, e.modelValue), A = () => {
      var V;
      (V = r.value) == null || V.focus();
    }, C = () => {
      r.value.blur();
    }, B = {
      reset: E,
      validate: k,
      resetValidation: d
    };
    return N(i, B), Le(() => {
      e.autofocus && A();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Rt,
      classes: um,
      isEmpty: Hn,
      computePlaceholderState: f,
      handleFocus: m,
      handleBlur: p,
      handleInput: b,
      handleChange: w,
      handleClear: T,
      handleClick: S,
      handleTouchstart: y,
      validate: k,
      resetValidation: d,
      reset: E,
      focus: A,
      blur: C
    };
  }
});
mr.install = function(e) {
  e.component(mr.name, mr);
};
function mm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function pm(e) {
  return ["always", "hover", "none"].includes(e);
}
var hm = {
  type: {
    type: String,
    default: "default",
    validator: mm
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
    validator: pm
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
  n: gm,
  classes: ym
} = ee("link");
function bm(e, n) {
  return h(), me(
    Va(e.tag),
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
const Kr = _({
  render: bm,
  name: "VarLink",
  props: hm,
  setup(e) {
    var n = Y(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = Y(() => {
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
      n: gm,
      classes: ym,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: be
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var wm = {
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
function Sm(e) {
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
  n: Cm,
  classes: km
} = ee("list");
function $m(e, n) {
  var r = te("var-loading"), a = Ge("ripple");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [G(e.$slots, "default"), e.loading ? G(e.$slots, "loading", {
      key: 0
    }, () => [D(
      "div",
      {
        class: c(e.n("loading"))
      },
      [D(
        "div",
        {
          class: c(e.n("loading-text"))
        },
        x(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), ne(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : J("v-if", !0), e.finished ? G(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: c(e.n("finished"))
      },
      x(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : J("v-if", !0), e.error ? G(e.$slots, "error", {
      key: 2
    }, () => [ke((h(), P(
      "div",
      {
        class: c(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [he(
        x(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : J("v-if", !0), D(
      "div",
      {
        class: c(e.n("detector")),
        ref: "detectorEl"
      },
      null,
      2
    )],
    2
  );
}
const Zr = _({
  render: $m,
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: kn
  },
  props: wm,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      N(e["onUpdate:error"], !1), N(e["onUpdate:loading"], !0), N(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Ie(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Sm(function* () {
        yield Ve();
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
    return Le(() => {
      a = Pa(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), rr(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: Ye,
      listEl: n,
      detectorEl: r,
      dt: yt,
      isNumber: je,
      load: t,
      check: o,
      n: Cm,
      classes: km
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var Tm = {
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
  classes: Om,
  n: zo
} = ee("loading-bar");
const Vm = _({
  name: "VarLoadingBar",
  props: Tm,
  setup(e) {
    return () => ne("div", {
      class: Om(zo(), [e.error, zo("--error")]),
      style: {
        zIndex: tn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: be(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: be(e.top)
      }
    }, null);
  }
});
var ms, Lo, an = Ne({
  value: 0,
  opacity: 0,
  error: !1
}), Pm = (e) => {
  Object.assign(an, e);
}, ps = () => {
  ms = window.setTimeout(() => {
    if (!(an.value >= 95)) {
      var e = Math.random();
      an.value < 70 && (e = Math.round(5 * Math.random())), an.value += e, ps();
    }
  }, 200);
}, Em = () => {
  Lo || (Lo = !0, Ea(Vm, an)), (!an.error || an.value === 100) && (an.value = 0), setTimeout(() => {
    an.opacity = 1;
  }, 200), ps();
}, Mm = () => {
  an.value = 100, setTimeout(() => {
    an.opacity = 0, setTimeout(() => {
      an.error = !1;
    }, 250);
  }, 300), window.clearTimeout(ms);
}, Im = () => {
  an.error = !0, Ra.start(), setTimeout(Ra.finish, 300);
}, Ra = {
  start: Em,
  finish: Mm,
  error: Im,
  mergeConfig: Pm
}, Nm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function it(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Nm[n];
  });
}
var Mn = "top", nr = "bottom", br = "right", Qn = "left", Et = "auto", Mt = [Mn, nr, br, Qn], It = "start", Ua = "end", Dm = "clippingParents", hs = "viewport", Ma = "popper", Bm = "reference", Fo = /* @__PURE__ */ Mt.reduce(function(e, n) {
  return e.concat([n + "-" + It, n + "-" + Ua]);
}, []), gs = /* @__PURE__ */ [].concat(Mt, [Et]).reduce(function(e, n) {
  return e.concat([n, n + "-" + It, n + "-" + Ua]);
}, []), Am = "beforeRead", zm = "read", Lm = "afterRead", Fm = "beforeMain", Rm = "main", Um = "afterMain", Ym = "beforeWrite", Wm = "write", Hm = "afterWrite", yi = [Am, zm, Lm, Fm, Rm, Um, Ym, Wm, Hm];
function In(e) {
  return e.split("-")[0];
}
var jm = {
  start: "end",
  end: "start"
};
function Ro(e) {
  return e.replace(/start|end/g, function(n) {
    return jm[n];
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
var za = Math.max, Uo = Math.min, $a = Math.round;
function bi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function ys() {
  return !/^((?!chrome|android).)*safari/i.test(bi());
}
function Ta(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && un(e) && (t = e.offsetWidth > 0 && $a(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && $a(a.height) / e.offsetHeight || 1);
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
  return Ta(tr(e)).left + ji(e).scrollLeft;
}
function Gm(e, n) {
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
function qm(e) {
  var n, r = tr(e), a = ji(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = za(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = za(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Gi(e), s = -a.scrollTop;
  return wn(t || r).direction === "rtl" && (l += za(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Vn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Nt(e) {
  return Vn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Hi(e) ? e.host : null) || tr(e);
}
function qi(e) {
  var n = wn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function bs(e) {
  return ["html", "body", "#document"].indexOf(Vn(e)) >= 0 ? e.ownerDocument.body : un(e) && qi(e) ? e : bs(Nt(e));
}
function La(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = bs(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = pn(a), o = t ? [i].concat(i.visualViewport || [], qi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(La(Nt(o)));
}
function Xm(e) {
  return ["table", "td", "th"].indexOf(Vn(e)) >= 0;
}
function Yo(e) {
  return !un(e) || wn(e).position === "fixed" ? null : e.offsetParent;
}
function Km(e) {
  var n = /firefox/i.test(bi()), r = /Trident/i.test(bi());
  if (r && un(e)) {
    var a = wn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Nt(e);
  for (Hi(t) && (t = t.host); un(t) && ["html", "body"].indexOf(Vn(t)) < 0; ) {
    var i = wn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Xi(e) {
  for (var n = pn(e), r = Yo(e); r && Xm(r) && wn(r).position === "static"; )
    r = Yo(r);
  return r && (Vn(r) === "html" || Vn(r) === "body" && wn(r).position === "static") ? n : r || Km(e) || n;
}
function Zm(e, n) {
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
function wi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Jm(e, n) {
  var r = Ta(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Wo(e, n, r) {
  return n === hs ? wi(Gm(e, r)) : wr(n) ? Jm(n, r) : wi(qm(tr(e)));
}
function Qm(e) {
  var n = La(Nt(e)), r = ["absolute", "fixed"].indexOf(wn(e).position) >= 0, a = r && un(e) ? Xi(e) : e;
  return wr(a) ? n.filter(function(t) {
    return wr(t) && Zm(t, a) && Vn(t) !== "body";
  }) : [];
}
function xm(e, n, r, a) {
  var t = n === "clippingParents" ? Qm(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Wo(e, u, a);
    return s.top = za(d.top, s.top), s.right = Uo(d.right, s.right), s.bottom = Uo(d.bottom, s.bottom), s.left = za(d.left, s.left), s;
  }, Wo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ya(e) {
  return e.split("-")[1];
}
function _m(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ws(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? In(a) : null, i = a ? Ya(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Mn:
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
  var u = t ? _m(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case It:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ua:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ep() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function np(e) {
  return Object.assign({}, ep(), e);
}
function rp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Ss(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? Dm : l, u = r.rootBoundary, d = u === void 0 ? hs : u, v = r.elementContext, f = v === void 0 ? Ma : v, m = r.altBoundary, p = m === void 0 ? !1 : m, b = r.padding, w = b === void 0 ? 0 : b, T = np(typeof w != "number" ? w : rp(w, Mt)), S = f === Ma ? Bm : Ma, g = e.rects.popper, y = e.elements[p ? S : f], E = xm(wr(y) ? y : y.contextElement || tr(e.elements.popper), s, d, o), k = Ta(e.elements.reference), A = ws({
    reference: k,
    element: g,
    strategy: "absolute",
    placement: t
  }), C = wi(Object.assign({}, g, A)), B = f === Ma ? C : k, V = {
    top: E.top - B.top + T.top,
    bottom: B.bottom - E.bottom + T.bottom,
    left: E.left - B.left + T.left,
    right: B.right - E.right + T.right
  }, $ = e.modifiersData.offset;
  if (f === Ma && $) {
    var O = $[t];
    Object.keys(V).forEach(function(R) {
      var W = [br, nr].indexOf(R) >= 0 ? 1 : -1, j = [Mn, nr].indexOf(R) >= 0 ? "y" : "x";
      V[R] += O[j] * W;
    });
  }
  return V;
}
function ap(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? gs : s, d = Ya(a), v = d ? l ? Fo : Fo.filter(function(p) {
    return Ya(p) === d;
  }) : Mt, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var m = f.reduce(function(p, b) {
    return p[b] = Ss(e, {
      placement: b,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[In(b)], p;
  }, {});
  return Object.keys(m).sort(function(p, b) {
    return m[p] - m[b];
  });
}
function tp(e) {
  if (In(e) === Et)
    return [];
  var n = it(e);
  return [Ro(e), n, Ro(n)];
}
function ip(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, m = r.flipVariations, p = m === void 0 ? !0 : m, b = r.allowedAutoPlacements, w = n.options.placement, T = In(w), S = T === w, g = s || (S || !p ? [it(w)] : tp(w)), y = [w].concat(g).reduce(function(ie, le) {
      return ie.concat(In(le) === Et ? ap(n, {
        placement: le,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: b
      }) : le);
    }, []), E = n.rects.reference, k = n.rects.popper, A = /* @__PURE__ */ new Map(), C = !0, B = y[0], V = 0; V < y.length; V++) {
      var $ = y[V], O = In($), R = Ya($) === It, W = [Mn, nr].indexOf(O) >= 0, j = W ? "width" : "height", L = Ss(n, {
        placement: $,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Z = W ? R ? br : Qn : R ? nr : Mn;
      E[j] > k[j] && (Z = it(Z));
      var H = it(Z), K = [];
      if (i && K.push(L[O] <= 0), l && K.push(L[Z] <= 0, L[H] <= 0), K.every(function(ie) {
        return ie;
      })) {
        B = $, C = !1;
        break;
      }
      A.set($, K);
    }
    if (C)
      for (var I = p ? 3 : 1, F = function(le) {
        var de = y.find(function(we) {
          var Fe = A.get(we);
          if (Fe)
            return Fe.slice(0, le).every(function(Qe) {
              return Qe;
            });
        });
        if (de)
          return B = de, "break";
      }, U = I; U > 0; U--) {
        var Q = F(U);
        if (Q === "break")
          break;
      }
    n.placement !== B && (n.modifiersData[a]._skip = !0, n.placement = B, n.reset = !0);
  }
}
const op = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ip,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function lp(e, n, r) {
  var a = In(e), t = [Qn, Mn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
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
function sp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = gs.reduce(function(d, v) {
    return d[v] = lp(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const up = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: sp
};
function dp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function vp(e) {
  return e === pn(e) || !un(e) ? ji(e) : dp(e);
}
function fp(e) {
  var n = e.getBoundingClientRect(), r = $a(n.width) / e.offsetWidth || 1, a = $a(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function cp(e, n, r) {
  r === void 0 && (r = !1);
  var a = un(n), t = un(n) && fp(n), i = tr(n), o = Ta(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Vn(n) !== "body" || qi(i)) && (l = vp(n)), un(n) ? (s = Ta(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Gi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function mp(e) {
  var n = Ta(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function pp(e) {
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
function hp(e) {
  var n = pp(e);
  return yi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function gp(e) {
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
var ir = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', yp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Ho = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function bp(e) {
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
          yi.indexOf(n.phase) < 0 && console.error(zn(ir, n.name, '"phase"', "either " + yi.join(", "), '"' + String(n.phase) + '"'));
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
        }) == null && console.error(zn(yp, String(n.name), a, a));
      });
    });
  });
}
function wp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Sp(e) {
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
var jo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Cp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Go = {
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
function kp(e) {
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
    }, v = [], f = !1, m = {
      state: d,
      setOptions: function(T) {
        var S = typeof T == "function" ? T(d.options) : T;
        b(), d.options = Object.assign({}, i, d.options, S), d.scrollParents = {
          reference: wr(l) ? La(l) : l.contextElement ? La(l.contextElement) : [],
          popper: La(s)
        };
        var g = hp(Sp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = g.filter(function($) {
          return $.enabled;
        }), process.env.NODE_ENV !== "production") {
          var y = wp([].concat(g, d.options.modifiers), function($) {
            var O = $.name;
            return O;
          });
          if (bp(y), In(d.options.placement) === Et) {
            var E = d.orderedModifiers.find(function($) {
              var O = $.name;
              return O === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = wn(s), A = k.marginTop, C = k.marginRight, B = k.marginBottom, V = k.marginLeft;
          [A, C, B, V].some(function($) {
            return parseFloat($);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), m.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, S = T.reference, g = T.popper;
          if (!qo(S, g)) {
            process.env.NODE_ENV !== "production" && console.error(jo);
            return;
          }
          d.rects = {
            reference: cp(S, Xi(g), d.options.strategy === "fixed"),
            popper: mp(g)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function($) {
            return d.modifiersData[$.name] = Object.assign({}, $.data);
          });
          for (var y = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (y += 1, y > 100)) {
              console.error(Cp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var k = d.orderedModifiers[E], A = k.fn, C = k.options, B = C === void 0 ? {} : C, V = k.name;
            typeof A == "function" && (d = A({
              state: d,
              options: B,
              name: V,
              instance: m
            }) || d);
          }
        }
      },
      update: gp(function() {
        return new Promise(function(w) {
          m.forceUpdate(), w(d);
        });
      }),
      destroy: function() {
        b(), f = !0;
      }
    };
    if (!qo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(jo), m;
    m.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function p() {
      d.orderedModifiers.forEach(function(w) {
        var T = w.name, S = w.options, g = S === void 0 ? {} : S, y = w.effect;
        if (typeof y == "function") {
          var E = y({
            state: d,
            name: T,
            instance: m,
            options: g
          }), k = function() {
          };
          v.push(E || k);
        }
      });
    }
    function b() {
      v.forEach(function(w) {
        return w();
      }), v = [];
    }
    return m;
  };
}
var et = {
  passive: !0
};
function $p(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = pn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, et);
  }), l && s.addEventListener("resize", r.update, et), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, et);
    }), l && s.removeEventListener("resize", r.update, et);
  };
}
const Tp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $p,
  data: {}
};
function Op(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ws({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Vp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Op,
  data: {}
};
var Pp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ep(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: $a(n * t) / t || 0,
    y: $a(r * t) / t || 0
  };
}
function Xo(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, m = f === void 0 ? 0 : f, p = o.y, b = p === void 0 ? 0 : p, w = typeof d == "function" ? d({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = w.x, b = w.y;
  var T = o.hasOwnProperty("x"), S = o.hasOwnProperty("y"), g = Qn, y = Mn, E = window;
  if (u) {
    var k = Xi(r), A = "clientHeight", C = "clientWidth";
    if (k === pn(r) && (k = tr(r), wn(k).position !== "static" && l === "absolute" && (A = "scrollHeight", C = "scrollWidth")), k = k, t === Mn || (t === Qn || t === br) && i === Ua) {
      y = nr;
      var B = v && k === E && E.visualViewport ? E.visualViewport.height : k[A];
      b -= B - a.height, b *= s ? 1 : -1;
    }
    if (t === Qn || (t === Mn || t === nr) && i === Ua) {
      g = br;
      var V = v && k === E && E.visualViewport ? E.visualViewport.width : k[C];
      m -= V - a.width, m *= s ? 1 : -1;
    }
  }
  var $ = Object.assign({
    position: l
  }, u && Pp), O = d === !0 ? Ep({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  if (m = O.x, b = O.y, s) {
    var R;
    return Object.assign({}, $, (R = {}, R[y] = S ? "0" : "", R[g] = T ? "0" : "", R.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", R));
  }
  return Object.assign({}, $, (n = {}, n[y] = S ? b + "px" : "", n[g] = T ? m + "px" : "", n.transform = "", n));
}
function Mp(e) {
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
    variation: Ya(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Xo(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Xo(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const Ip = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Mp,
  data: {}
};
function Np(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !un(i) || !Vn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function Dp(e) {
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
const Bp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Np,
  effect: Dp,
  requires: ["computeStyles"]
};
var Ap = [Tp, Vp, Ip, Bp], zp = /* @__PURE__ */ kp({
  defaultModifiers: Ap
});
function Lp(e) {
  return ["click", "hover"].includes(e);
}
function Fp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Rp = {
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
    validator: Lp
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Fp
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
function Ko(e, n, r, a, t, i, o) {
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
        Ko(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ko(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Up,
  classes: Yp
} = ee("menu");
function Wp(e, n) {
  return h(), P(
    "div",
    {
      ref: "host",
      class: c(e.n()),
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
      ht,
      {
        to: e.teleport
      },
      [ne(
        Re,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: fe(() => [ke(D(
            "div",
            {
              ref: "menu",
              style: X({
                zIndex: e.zIndex
              }),
              class: c(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
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
const xn = _({
  render: Wp,
  name: "VarMenu",
  props: Rp,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), {
      zIndex: t
    } = St(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: k,
        height: A
      } = getComputedStyle(n.value);
      u = {
        width: Ie(k),
        height: Ie(A)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, y());
    }, f = /* @__PURE__ */ function() {
      var k = Zo(function* () {
        e.trigger === "hover" && (s = !1, yield Tn(), !l && E());
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), m = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var k = Zo(function* () {
        e.trigger === "hover" && (l = !1, yield Tn(), !s && E());
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), b = () => {
      y(), o = !0;
    }, w = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, N(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var k = {
        x: Ie(e.offsetX),
        y: Ie(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: k.x,
            distance: k.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: k.x,
            distance: k.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: k.x,
            distance: k.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: k.x,
            distance: -k.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: k.x,
            distance: -k.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: k.x,
            distance: -k.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: k.y,
            distance: k.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: k.y,
            distance: -k.x - u.width
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
    }, S = () => {
      var {
        placement: k,
        skidding: A,
        distance: C
      } = T();
      return {
        placement: k,
        modifiers: [pt({}, op, {
          enabled: a.value
        }), pt({}, up, {
          options: {
            offset: [A, C]
          }
        })]
      };
    }, g = () => {
      i.setOptions(S());
    }, y = () => {
      var {
        disabled: k
      } = e;
      k || (a.value = !0, N(e["onUpdate:show"], !0));
    }, E = () => {
      a.value = !1, N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (k) => {
      a.value = k != null ? k : !1;
    }, {
      immediate: !0
    }), ae(() => e.offsetX, g), ae(() => e.offsetY, g), ae(() => e.placement, g), ae(() => a.value, (k) => {
      k ? (g(), N(e.onOpen)) : N(e.onClose);
    }), ae(() => e.trigger, (k) => {
      k === "click" ? document.addEventListener("click", w) : document.removeEventListener("click", w);
    }), ae(() => e.disabled, E), Le(() => {
      i = zp(n.value, r.value, S()), e.trigger === "click" && document.addEventListener("click", w);
    }), rr(() => {
      document.removeEventListener("click", w), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: Up,
      classes: Yp,
      handleClick: b,
      handleMenuClose: w,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: m,
      handleMenuMouseleave: p,
      resize: g,
      open: y,
      close: E
    };
  }
});
xn.install = function(e) {
  e.component(xn.name, xn);
};
var Cs = Symbol("SELECT_BIND_OPTION_KEY"), ks = Symbol("SELECT_COUNT_OPTION_KEY");
function Hp() {
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
function jp() {
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
var Gp = {
  label: {},
  value: {}
}, {
  n: qp,
  classes: Xp
} = ee("option");
function Kp(e, n) {
  var r = te("var-checkbox"), a = Ge("ripple");
  return ke((h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: X({
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
        class: c(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: X({
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
        onClick: n[1] || (n[1] = Nn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : J("v-if", !0), D(
      "div",
      {
        class: c(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [G(e.$slots, "default", {}, () => [he(
        x(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const Jr = _({
  render: Kp,
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: ur
  },
  props: Gp,
  setup(e) {
    var n = M(!1), r = Y(() => n.value), a = Y(() => e.label), t = Y(() => e.value), {
      select: i,
      bindSelect: o
    } = jp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), m = (b) => {
      n.value = b;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: m
    };
    return ae([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: qp,
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
var Zp = {
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
  n: Jp,
  classes: Qp
} = ee("pagination"), xp = ["item-mode", "onClick"];
function _p(e, n) {
  var r = te("var-icon"), a = te("var-input"), t = te("var-cell"), i = te("var-menu"), o = Ge("ripple");
  return h(), P(
    "ul",
    {
      class: c(e.n())
    },
    [ke((h(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [G(e.$slots, "prev", {}, () => [ne(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (h(), P(
      "li",
      {
        key: 0,
        class: c(e.classes(e.n("simple"), [e.disabled, e.n("item--disabled")]))
      },
      [ne(
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
      ), D("span", null, [he(
        " / " + x(e.pageCount) + " ",
        1
      ), D(
        "div",
        {
          class: c(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (h(!0), P(
      Oe,
      {
        key: 1
      },
      De(e.pageList, (l, s) => ke((h(), P(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: c(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [he(
          x(l),
          1
        )],
        10,
        xp
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), ke((h(), P(
      "li",
      {
        class: c(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [G(e.$slots, "next", {}, () => [ne(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (h(), P(
      "li",
      {
        key: 2,
        class: c(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [ne(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: fe(() => [(h(!0), P(
            Oe,
            null,
            De(e.sizeOption, (l, s) => ke((h(), me(
              t,
              {
                class: c(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: fe(() => [he(
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
          default: fe(() => [D(
            "div",
            {
              class: c(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [D(
              "span",
              null,
              x(e.size) + x(e.pack.paginationItem) + " / " + x(e.pack.paginationPage),
              1
            ), ne(
              r,
              {
                class: c(e.n("size--open-icon")),
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
    )) : J("v-if", !0), e.showQuickJumper && !e.simple ? (h(), P(
      "li",
      {
        key: 3,
        class: c(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
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
          onKeydown: n[9] || (n[9] = xi((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : J("v-if", !0), e.totalText ? (h(), P(
      "li",
      {
        key: 4,
        class: c(e.n("total"))
      },
      x(e.totalText),
      3
    )) : J("v-if", !0)],
    2
  );
}
const Qr = _({
  render: _p,
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
  props: Zp,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), i = M(!1), o = M(z(e.current) || 1), l = M(z(e.size) || 10), s = M([]), u = Y(() => Math.ceil(e.maxPagerCount / 2)), d = Y(() => Math.ceil(z(e.total) / z(l.value))), v = Y(() => {
      var y = l.value * (o.value - 1) + 1, E = Math.min(l.value * o.value, z(e.total));
      return [y, E];
    }), f = Y(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), m = (y, E) => je(y) ? !1 : E === 1 ? t.value : i.value, p = (y, E) => je(y) ? "basic" : E === 1 ? "head" : "tail", b = (y, E) => {
      y === o.value || e.disabled || (je(y) ? o.value = y : y === "prev" ? o.value > 1 && (o.value -= 1) : y === "next" ? o.value < d.value && (o.value += 1) : y === "..." && (E === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, w = () => {
      e.disabled || (n.value = !0);
    }, T = (y) => {
      l.value = y, n.value = !1;
    }, S = (y) => {
      var E = /^[1-9][0-9]*$/;
      return E.test(y);
    }, g = (y, E, k) => {
      if (k.target.blur(), S(E)) {
        var A = z(E);
        A > d.value && (A = d.value, a.value = "" + A), A !== o.value && (o.value = A);
      }
      y === "quick" && (r.value = ""), y === "simple" && !S(E) && (a.value = "" + o.value);
    };
    return ae([() => e.current, () => e.size], (y) => {
      var [E, k] = y;
      o.value = z(E) || 1, l.value = z(k || 10);
    }), ae([o, l], (y, E) => {
      var k, A, [C, B] = y, [V, $] = E;
      if (C > d.value) {
        o.value = d.value;
        return;
      }
      var O = [], {
        maxPagerCount: R,
        total: W,
        onChange: j
      } = e, L = Math.ceil(z(W) / z($)), Z = d.value - (R - u.value) - 1;
      if (a.value = "" + C, d.value - 2 > R) {
        if (V === void 0 || d.value !== L)
          for (var H = 2; H < R + 2; H++)
            O.push(H);
        if (C <= R && C < Z) {
          O = [];
          for (var K = 1; K < R + 1; K++)
            O.push(K + 1);
          t.value = !0, i.value = !1;
        }
        if (C > R && C < Z) {
          O = [];
          for (var I = 1; I < R + 1; I++)
            O.push(C + I - u.value);
          t.value = C === 2 && R === 1, i.value = !1;
        }
        if (C >= Z) {
          O = [];
          for (var F = 1; F < R + 1; F++)
            O.push(d.value - (R - F) - 1);
          t.value = !1, i.value = !0;
        }
        O = [1, "...", ...O, "...", d.value];
      } else
        for (var U = 1; U <= d.value; U++)
          O.push(U);
      s.value = O, V !== void 0 && d.value > 0 && (j == null || j(C, B)), (k = e["onUpdate:current"]) == null || k.call(e, C), (A = e["onUpdate:size"]) == null || A.call(e, B);
    }, {
      immediate: !0
    }), {
      n: Jp,
      classes: Qp,
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
      isHideEllipsis: m,
      clickItem: b,
      showMenu: w,
      clickSize: T,
      setPage: g,
      toNumber: z
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
function Si() {
  return Si = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Si.apply(this, arguments);
}
var eh = Si({
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
  n: nh,
  classes: rh
} = ee("picker"), Jo = 300, ah = 15, Qo = 0, th = ["onTouchstart", "onTouchmove", "onTouchend"], ih = ["onTransitionend"];
function oh(e, n) {
  var r = te("var-button");
  return h(), me(
    Va(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: fe(() => [D(
        "div",
        Pe({
          class: e.n()
        }, e.$attrs),
        [D(
          "div",
          {
            class: c(e.n("toolbar"))
          },
          [G(e.$slots, "cancel", {}, () => [ne(
            r,
            {
              class: c(e.n("cancel-button")),
              "var-picker-cover": "",
              text: "",
              "text-color": e.cancelButtonTextColor,
              onClick: e.cancel
            },
            {
              default: fe(() => [he(
                x(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), G(e.$slots, "title", {}, () => [D(
            "div",
            {
              class: c(e.n("title"))
            },
            x(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), G(e.$slots, "confirm", {}, () => [ne(
            r,
            {
              class: c(e.n("confirm-button")),
              text: "",
              "var-picker-cover": "",
              "text-color": e.confirmButtonTextColor,
              onClick: e.confirm
            },
            {
              default: fe(() => [he(
                x(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )])],
          2
        ), D(
          "div",
          {
            class: c(e.n("columns")),
            style: X({
              height: e.columnHeight + "px"
            })
          },
          [(h(!0), P(
            Oe,
            null,
            De(e.scrollColumns, (a) => (h(), P(
              "div",
              {
                class: c(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Nn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [D(
                "div",
                {
                  class: c(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: X({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(h(!0), P(
                  Oe,
                  null,
                  De(a.column.texts, (t) => (h(), P(
                    "div",
                    {
                      class: c(e.n("option")),
                      style: X({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [D(
                      "div",
                      {
                        class: c(e.n("text"))
                      },
                      x(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                ih
              )],
              42,
              th
            ))),
            128
          )), D(
            "div",
            {
              class: c(e.n("picked")),
              style: X({
                top: e.center + "px",
                height: e.optionHeight + "px"
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: c(e.n("mask")),
              style: X({
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
const pr = _({
  render: oh,
  name: "VarPicker",
  components: {
    VarButton: nn,
    VarPopup: yn
  },
  inheritAttrs: !1,
  props: eh,
  setup(e) {
    var n = M([]), r = Y(() => Ie(e.optionHeight)), a = Y(() => Ie(e.optionCount)), t = Y(() => a.value * r.value / 2 - r.value / 2), i = Y(() => a.value * r.value), o = [], l = ($, O) => {
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
    }, v = ($) => {
      var O = Math.round((t.value - $.translate) / r.value);
      return d($, O);
    }, f = () => {
      var $ = n.value.map((R) => R.column.texts[R.index]), O = n.value.map((R) => R.index);
      return {
        texts: $,
        indexes: O
      };
    }, m = function($, O, R, W) {
      W === void 0 && (W = !1);
      var j = t.value - d($, O) * r.value;
      j === $.translate && ($.scrolling = !1, !W && A($)), $.translate = j, $.duration = R;
    }, p = ($, O, R) => {
      $.translate += Math.abs(O / R) / 3e-3 * (O < 0 ? -1 : 1);
    }, b = ($, O) => {
      O.touching = !0, O.scrolling = !1, O.duration = 0, O.translate = At(O.scrollEl);
    }, w = ($, O) => {
      if (!!O.touching) {
        var {
          clientY: R
        } = $.touches[0], W = O.prevY !== void 0 ? R - O.prevY : 0;
        O.prevY = R, O.translate += W, u(O);
        var j = performance.now();
        j - O.momentumTime > Jo && (O.momentumTime = j, O.momentumPrevY = O.translate);
      }
    }, T = ($, O) => {
      O.touching = !1, O.scrolling = !0, O.prevY = void 0;
      var R = O.translate - O.momentumPrevY, W = performance.now() - O.momentumTime, j = Math.abs(R) >= ah && W <= Jo;
      j && p(O, R, W), O.index = v(O), m(O, O.index, j ? 1e3 : 200);
    }, S = ($) => {
      $.scrolling = !1, A($);
    }, g = ($) => $.map((O, R) => {
      var W, j = Ce(O) ? {
        texts: O
      } : O, L = {
        id: Qo++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (W = j.initialIndex) != null ? W : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: j,
        scrollEl: null,
        scrolling: !1
      };
      return m(L, L.index, 0, !0), L;
    }), y = ($) => {
      var O = [];
      return E(O, $, 0, !0), O;
    }, E = function($, O, R, W) {
      if (W === void 0 && (W = !1), Ce(O) && O.length) {
        var j, L = W && (j = e.cascadeInitialIndexes[$.length]) != null ? j : 0, Z = {
          id: Qo++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: L,
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
        $.push(Z), m(Z, Z.index, 0, !0), E($, Z.columns[Z.index].children, R + 1, W);
      }
    }, k = ($) => {
      n.value.splice(n.value.indexOf($) + 1), E(n.value, $.columns[$.index].children, $.columnIndex + 1);
    }, A = ($) => {
      var {
        cascade: O,
        onChange: R
      } = e;
      O && k($);
      var W = n.value.some((H) => H.scrolling);
      if (!W) {
        var {
          texts: j,
          indexes: L
        } = f(), Z = L.every((H, K) => H === o[K]);
        Z || (o = [...L], N(R, j, L));
      }
    }, C = () => {
      if (e.cascade) {
        var $ = n.value.find((O) => O.scrolling);
        $ && ($.translate = At($.scrollEl), $.index = v($), m($, $.index, 0, !0), $.scrolling = !1, k($));
      } else
        n.value.forEach((O) => {
          O.translate = At(O.scrollEl), O.index = v(O), m(O, O.index, 0);
        });
    }, B = () => {
      C();
      var {
        texts: $,
        indexes: O
      } = f();
      o = [...O], N(e.onConfirm, $, O);
    }, V = () => {
      C();
      var {
        texts: $,
        indexes: O
      } = f();
      o = [...O], N(e.onCancel, $, O);
    };
    return ae(() => e.columns, ($) => {
      n.value = e.cascade ? y(_i($)) : g(_i($));
      var {
        indexes: O
      } = f();
      o = [...O];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: nh,
      classes: rh,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Re,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: b,
      handleTouchmove: w,
      handleTouchend: T,
      handleTransitionend: S,
      confirm: B,
      cancel: V,
      dt: yt
    };
  }
});
var xe;
function Sr(e) {
  return new Promise((n) => {
    Sr.close();
    var r = Ce(e) ? {
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
    xe = null, Ve().then(() => {
      e.show = !1;
    });
  }
};
function lh(e) {
  return ["linear", "circle"].includes(e);
}
var sh = {
  mode: {
    type: String,
    default: "linear",
    validator: lh
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
  n: uh,
  classes: dh
} = ee("progress"), vh = ["viewBox"], fh = ["cx", "cy", "r", "stroke-width"], ch = ["cx", "cy", "r", "stroke-width"];
function mh(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [e.mode === "linear" ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("linear"))
      },
      [D(
        "div",
        {
          class: c(e.n("linear-block")),
          style: X({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("linear-background")),
            style: X({
              background: e.trackColor
            })
          },
          null,
          6
        )) : J("v-if", !0), D(
          "div",
          {
            class: c(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: X({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
        )],
        6
      ), e.label ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          x(e.linearProps.roundValue),
          1
        )])],
        2
      )) : J("v-if", !0)],
      2
    )) : J("v-if", !0), e.mode === "circle" ? (h(), P(
      "div",
      {
        key: 1,
        class: c(e.n("circle")),
        style: X({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(h(), P(
        "svg",
        {
          class: c(e.n("circle-svg")),
          style: X({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (h(), P(
          "circle",
          {
            key: 0,
            class: c(e.n("circle-background")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: X({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          fh
        )) : J("v-if", !0), D(
          "circle",
          {
            class: c(e.n("circle-certain")),
            cx: e.multiplySizeUnit(e.size, 0.5),
            cy: e.multiplySizeUnit(e.size, 0.5),
            r: e.circleProps.radius,
            fill: "transparent",
            "stroke-width": e.toSizeUnit(e.lineWidth),
            style: X({
              strokeDasharray: e.circleProps.strokeDasharray,
              stroke: e.color
            })
          },
          null,
          14,
          ch
        )],
        14,
        vh
      )), e.label ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [G(e.$slots, "default", {}, () => [he(
          x(e.circleProps.roundValue),
          1
        )])],
        2
      )) : J("v-if", !0)],
      6
    )) : J("v-if", !0)],
    2
  );
}
const xr = _({
  render: mh,
  name: "VarProgress",
  props: sh,
  setup(e) {
    var n = Y(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = Y(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + Ie(a) + " " + Ie(a), l = z(i) > 100 ? 100 : Math.round(z(i)), s = (Ie(a) - Ie(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: uh,
      classes: dh,
      toSizeUnit: be,
      multiplySizeUnit: Ze,
      linearProps: n,
      circleProps: r
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
var ph = {
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
function xo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function hh(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        xo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        xo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: gh,
  classes: yh
} = ee("pull-refresh"), Ia = 100, Na = -50, _o = 150;
function bh(e, n) {
  var r = te("var-icon");
  return h(), P(
    "div",
    {
      ref: "freshNode",
      class: c(e.n()),
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
    [D(
      "div",
      {
        class: c(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: X(e.controlStyle)
      },
      [ne(
        r,
        {
          name: e.iconName,
          transition: e.ICON_TRANSITION,
          class: c(e.classes(e.n("icon"), [e.refreshStatus === "loading" && e.iconHasChanged, e.n("animation")])),
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
const _r = _({
  render: bh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Te
  },
  props: ph,
  setup(e) {
    var n, r, a = M(null), t = M(0), i = M(Na), o = M("arrow-down"), l = M("default"), s = M(!1), u = M(!0), d = Y(() => l.value !== "loading" && l.value !== "success" && !e.disabled), v = Y(() => ({
      transform: "translate3d(0px, " + i.value + "px, 0px) translate(-50%, 0)",
      transition: s.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: f.value ? e.successBgColor : e.bgColor,
      color: f.value ? e.successColor : e.color
    })), f = Y(() => l.value === "success"), m = () => new Promise((S) => {
      window.setTimeout(() => {
        u.value = !0, S();
      }, _o);
    }), p = (S) => {
      !d.value || (l.value = "pulling", t.value = S.touches[0].clientY);
    }, b = (S) => {
      var g = bt(n);
      if (!(g > 0 || !d.value)) {
        g === 0 && i.value > Na && S.cancelable && S.preventDefault();
        var y = (S.touches[0].clientY - t.value) / 2 + Na;
        i.value = y >= Ia ? Ia : y, i.value >= Ia * 0.2 ? (u.value = !1, o.value = "refresh", r = m()) : o.value = "arrow-down";
      }
    }, w = /* @__PURE__ */ function() {
      var S = hh(function* () {
        if (!!d.value)
          if (s.value = !0, i.value >= Ia * 0.2) {
            var g;
            yield r, l.value = "loading", i.value = Ia * 0.3, (g = e["onUpdate:modelValue"]) == null || g.call(e, !0), e.onRefresh == null || e.onRefresh();
          } else
            l.value = "loosing", o.value = "arrow-down", i.value = Na, setTimeout(() => {
              s.value = !1;
            }, z(e.animationDuration));
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), T = () => {
      setTimeout(() => {
        l.value = "default", o.value = "arrow-down", s.value = !1;
      }, z(e.animationDuration));
    };
    return ae(() => e.modelValue, (S) => {
      S === !1 && (s.value = !0, l.value = "success", o.value = "checkbox-marked-circle", setTimeout(() => {
        i.value = Na, T();
      }, z(e.successDuration)));
    }), Le(() => {
      n = Pa(a.value);
    }), {
      n: gh,
      classes: yh,
      iconHasChanged: u,
      ICON_TRANSITION: _o,
      refreshStatus: l,
      freshNode: a,
      touchStart: p,
      touchMove: b,
      touchEnd: w,
      iconName: o,
      controlStyle: v,
      isSuccess: f
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var wh = {
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
function Sh() {
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
function Ch() {
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
  n: kh,
  classes: $h
} = ee("radio");
function Th(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      Pe({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((h(), P(
        "div",
        {
          class: c(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? G(e.$slots, "checked-icon", {
          key: 0
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
            "var-radio-cover": "",
            name: "radio-marked",
            size: e.iconSize
          },
          null,
          8,
          ["class", "size"]
        )]) : G(e.$slots, "unchecked-icon", {
          key: 1
        }, () => [ne(
          r,
          {
            class: c(e.classes(e.n("icon"), [e.withAnimation, e.n("--with-animation")])),
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
      }]]), D(
        "div",
        {
          class: c(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [G(e.$slots, "default")],
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
const ea = _({
  render: Th,
  name: "VarRadio",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: wh,
  setup(e) {
    var n = M(!1), r = Y(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Ch(), {
      form: o,
      bindForm: l
    } = mn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = cn(), f = (y) => {
      Ve(() => {
        var {
          validateTrigger: E,
          rules: k,
          modelValue: A
        } = e;
        u(E, y, k, A);
      });
    }, m = (y) => {
      var {
        checkedValue: E,
        onChange: k
      } = e;
      t && n.value === E || (n.value = y, N(e["onUpdate:modelValue"], n.value), N(k, n.value), t == null || t.onToggle(E), f("onChange"));
    }, p = (y) => {
      var {
        disabled: E,
        readonly: k,
        uncheckedValue: A,
        checkedValue: C,
        onClick: B
      } = e;
      o != null && o.disabled.value || E || (N(B, y), !(o != null && o.readonly.value || k) && (a.value = !0, m(r.value ? A : C)));
    }, b = (y) => {
      var {
        checkedValue: E,
        uncheckedValue: k
      } = e;
      n.value = y === E ? E : k;
    }, w = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), S = (y) => {
      var {
        uncheckedValue: E,
        checkedValue: k
      } = e, A = ![E, k].includes(y);
      A && (y = r.value ? E : k), m(y);
    };
    ae(() => e.modelValue, (y) => {
      n.value = y;
    }, {
      immediate: !0
    });
    var g = {
      sync: b,
      validate: T,
      resetValidation: v,
      reset: w
    };
    return N(i, g), N(l, g), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: kh,
      classes: $h,
      handleClick: p,
      toggle: S,
      reset: w,
      validate: T,
      resetValidation: v
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
function Oh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Vh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Oh
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
  n: Ph,
  classes: Eh
} = ee("radio-group");
function Mh(e, n) {
  var r = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [G(e.$slots, "default")],
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
const na = _({
  render: Mh,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: Vh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Sh(), {
      bindForm: t
    } = mn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = cn(), u = Y(() => i.value), d = (w) => {
      Ve(() => {
        var {
          validateTrigger: T,
          rules: S,
          modelValue: g
        } = e;
        o(T, w, S, g);
      });
    }, v = () => r.forEach((w) => {
      var {
        sync: T
      } = w;
      return T(e.modelValue);
    }), f = (w) => {
      N(e["onUpdate:modelValue"], w), N(e.onChange, w), d("onChange");
    }, m = () => l(e.rules, e.modelValue), p = () => {
      N(e["onUpdate:modelValue"], void 0), s();
    };
    ae(() => e.modelValue, v), ae(() => n.value, v);
    var b = {
      onToggle: f,
      validate: m,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return N(t, b), a(b), {
      errorMessage: i,
      n: Ph,
      classes: Eh,
      reset: p,
      validate: m,
      resetValidation: s
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
var Ih = {
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
  n: Da
} = ee("rate"), Nh = ["onClick"];
function Dh(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = Ge("ripple");
  return h(), P(
    "div",
    {
      class: c(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: c(e.n())
      },
      [(h(!0), P(
        Oe,
        null,
        De(e.toNumber(e.count), (i) => ke((h(), P(
          "div",
          {
            key: i,
            style: X(e.getStyle(i)),
            class: c(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [ne(
            r,
            {
              class: c(e.n("content-icon")),
              "var-rate-cover": "",
              transition: 0,
              namespace: e.namespace,
              name: e.getCurrentState(i).name,
              style: X({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          Nh
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
const ra = _({
  render: Dh,
  name: "VarRate",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: Ih,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = (w) => {
      var {
        count: T,
        gap: S
      } = e;
      return {
        color: u(w).color,
        marginRight: w !== z(T) ? be(S) : 0
      };
    }, s = (w) => {
      var {
        name: T,
        color: S
      } = u(w);
      return {
        [Da("content")]: !0,
        [Da("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Da("--error")]: a.value,
        [Da("--primary")]: T !== e.emptyIcon && !S
      };
    }, u = (w) => {
      var {
        modelValue: T,
        disabled: S,
        disabledColor: g,
        color: y,
        half: E,
        emptyColor: k,
        icon: A,
        halfIcon: C,
        emptyIcon: B
      } = e, V = y;
      return (S || n != null && n.disabled.value) && (V = g), w <= z(T) ? {
        color: V,
        name: A
      } : E && w <= z(T) + 0.5 ? {
        color: V,
        name: C
      } : {
        color: S || n != null && n.disabled.value ? g : k,
        name: B
      };
    }, d = (w, T) => {
      if (e.half) {
        var {
          offsetWidth: S
        } = T.target;
        T.offsetX <= Math.floor(S / 2) && (w -= 0.5);
      }
      N(e["onUpdate:modelValue"], w);
    }, v = () => i(e.rules, z(e.modelValue)), f = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), m = (w, T) => {
      var {
        readonly: S,
        disabled: g,
        onChange: y
      } = e;
      S || g || n != null && n.disabled.value || n != null && n.readonly.value || (d(w, T), N(y, w), f());
    }, p = () => {
      N(e["onUpdate:modelValue"], 0), o();
    }, b = {
      reset: p,
      validate: v,
      resetValidation: o
    };
    return N(r, b), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: m,
      reset: p,
      validate: v,
      resetValidation: o,
      toSizeUnit: be,
      toNumber: z,
      n: Da
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
function Bh(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Ah = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Bh
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
}, zh = (e) => (Cr(""), e = e(), kr(), e), Lh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Fh = /* @__PURE__ */ zh(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), Rh = [Fh];
function Uh(e, n) {
  return h(), P("svg", Lh, Rh);
}
const Yh = _({
  render: Uh
});
var Wh = (e) => (Cr(""), e = e(), kr(), e), Hh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, jh = /* @__PURE__ */ Wh(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), Gh = [jh];
function qh(e, n) {
  return h(), P("svg", Hh, Gh);
}
const Xh = _({
  render: qh
});
var Kh = (e) => (Cr(""), e = e(), kr(), e), Zh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Jh = /* @__PURE__ */ Kh(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), Qh = [Jh];
function xh(e, n) {
  return h(), P("svg", Zh, Qh);
}
const _h = _({
  render: xh
});
var {
  n: eg,
  classes: ng
} = ee("result");
function rg(e, n) {
  return h(), P(
    Oe,
    null,
    [D(
      "span",
      {
        class: c(e.n("success-cover-left"))
      },
      null,
      2
    ), D(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-tip"))),
        style: X({
          animationDuration: e.animation ? "760ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
    ), D(
      "span",
      {
        class: c(e.classes(e.n("success-line"), e.n("success-line-long"))),
        style: X({
          animationDuration: e.animation ? "770ms" : "0ms",
          borderRadius: "calc(" + e.borderSize + " * 0.625)"
        })
      },
      null,
      6
    ), D(
      "span",
      {
        ref: "circle",
        class: c(e.n("success-circle")),
        style: X({
          left: "-" + e.borderSize,
          top: "-" + e.borderSize,
          borderWidth: e.borderSize
        })
      },
      null,
      6
    ), D(
      "span",
      {
        class: c(e.n("success-line-fix"))
      },
      null,
      2
    ), D(
      "span",
      {
        class: c(e.n("success-cover-right")),
        style: X({
          animationDuration: e.animation ? "4250ms" : "0ms"
        })
      },
      null,
      6
    )],
    64
  );
}
const ag = _({
  render: rg,
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
      n: eg,
      classes: ng,
      toNumber: z
    };
  }
});
var tg = (e) => (Cr(""), e = e(), kr(), e), ig = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, og = /* @__PURE__ */ tg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), lg = [og];
function sg(e, n) {
  return h(), P("svg", ig, lg);
}
const ug = _({
  render: sg
});
var dg = (e) => (Cr(""), e = e(), kr(), e), vg = {
  viewBox: "-4 -4 32 32"
}, fg = /* @__PURE__ */ dg(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), cg = [fg];
function mg(e, n) {
  return h(), P("svg", vg, cg);
}
const pg = _({
  render: mg
});
var {
  n: hg,
  classes: gg
} = ee("result");
function yg(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [G(e.$slots, "image", {}, () => [e.type ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("image"), e.n(e.type))),
          style: X({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(h(), me(
          Va(e.type),
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
    )) : J("v-if", !0)]), G(e.$slots, "title", {}, () => [e.title ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("title"))
      },
      x(e.title),
      3
    )) : J("v-if", !0)]), G(e.$slots, "description", {}, () => [e.description ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("description"))
      },
      x(e.description),
      3
    )) : J("v-if", !0)]), e.$slots.footer ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const aa = _({
  render: yg,
  name: "VarResult",
  components: {
    Info: Yh,
    Success: ag,
    Warning: _h,
    Error: Xh,
    Question: ug,
    Empty: pg
  },
  props: Ah,
  setup(e) {
    var n = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = Y(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? be(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: hg,
      classes: gg,
      toNumber: z,
      toPxNum: Ie,
      toSizeUnit: be,
      circleSize: n,
      borderSize: r
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
function bg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function wg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var Sg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: bg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: wg
  },
  onClick: {
    type: Function
  }
}, {
  n: Cg,
  classes: kg
} = ee("row");
function $g(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"))),
      style: X({
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
const ta = _({
  render: $g,
  name: "VarRow",
  props: Sg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = av(), t = Y(() => {
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
    return ae(() => a.value, i), ae(() => e.gutter, i), r(o), {
      n: Cg,
      classes: kg,
      average: t
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
function Tg(e) {
  return ["left", "right", "center"].includes(e);
}
var Og = {
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
    validator: Tg
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
  n: Ut,
  classes: Vg
} = ee("select"), Pg = {
  key: 0
}, Eg = {
  key: 1
};
function Mg(e, n) {
  var r = te("var-chip"), a = te("var-icon"), t = te("var-menu"), i = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "prepend-icon")],
        2
      ), D(
        "div",
        {
          class: c(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")])),
          ref: "wrapEl",
          onClick: n[2] || (n[2] = function() {
            return e.handleFocus && e.handleFocus(...arguments);
          })
        },
        [ne(
          t,
          {
            "var-select-cover": "",
            class: c(e.classes(e.n("menu"))),
            "offset-y": e.offsetY,
            disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled,
            "default-style": !1,
            show: e.isFocus,
            "onUpdate:show": n[1] || (n[1] = (o) => e.isFocus = o),
            onClose: e.handleBlur
          },
          {
            menu: fe(() => [D(
              "div",
              {
                ref: "menuEl",
                class: c(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [G(e.$slots, "default")],
              2
            )]),
            default: fe(() => [D(
              "div",
              {
                class: c(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: X({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (h(), P("div", Pg, [e.chip ? (h(), P(
                "div",
                {
                  key: 0,
                  class: c(e.n("chips"))
                },
                [(h(!0), P(
                  Oe,
                  null,
                  De(e.labels, (o) => (h(), me(
                    r,
                    {
                      class: c(e.n("chip")),
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
              )) : (h(), P(
                "div",
                {
                  key: 1,
                  class: c(e.n("values"))
                },
                x(e.labels.join(e.separator)),
                3
              ))])) : (h(), P(
                "span",
                Eg,
                x(e.label),
                1
              )), G(e.$slots, "arrow-icon", {
                focus: e.isFocus
              }, () => [ne(
                a,
                {
                  class: c(e.classes(e.n("arrow"), [e.isFocus, e.n("--arrow-rotate")])),
                  "var-select-cover": "",
                  name: "menu-down",
                  transition: 300
                },
                null,
                8,
                ["class"]
              )])],
              6
            ), D(
              "label",
              {
                class: c(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: X({
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
      ), D(
        "div",
        {
          class: c(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [G(e.$slots, "append-icon", {}, () => [e.clearable ? (h(), me(
          a,
          {
            key: 0,
            class: c(e.n("clear-icon")),
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
    ), e.line ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: c(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: X({
            background: e.errorMessage ? void 0 : e.focusColor
          })
        },
        null,
        6
      )],
      6
    )) : J("v-if", !0), ne(
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
const ia = _({
  render: Mg,
  name: "VarSelect",
  components: {
    VarIcon: Te,
    VarMenu: xn,
    VarChip: dr,
    VarFormDetails: He
  },
  props: Og,
  setup(e) {
    var n = M(null), r = M(!1), a = Y(() => e.multiple), t = Y(() => e.focusColor), i = M(""), o = M([]), l = M("0px"), s = M(0), {
      bindForm: u,
      form: d
    } = mn(), {
      length: v,
      options: f,
      bindOptions: m
    } = Hp(), {
      errorMessage: p,
      validateWithTrigger: b,
      validate: w,
      resetValidation: T
    } = cn(), S = M(null), g = () => {
      var {
        multiple: F,
        modelValue: U
      } = e;
      if (F) {
        var Q = U;
        o.value = Q.map(k);
      }
      !F && !Hn(U) && (i.value = k(U)), !F && Hn(U) && (i.value = "");
    }, y = (F) => {
      Ve(() => {
        var {
          validateTrigger: U,
          rules: Q,
          modelValue: ie
        } = e;
        b(U, F, Q, ie);
      });
    }, E = (F) => {
      var {
        value: U,
        label: Q
      } = F;
      return U.value != null ? U.value : Q.value;
    }, k = (F) => {
      var U, Q, ie = f.find((le) => {
        var {
          value: de
        } = le;
        return de.value === F;
      });
      return ie || (ie = f.find((le) => {
        var {
          label: de
        } = le;
        return de.value === F;
      })), (U = (Q = ie) == null ? void 0 : Q.label.value) != null ? U : "";
    }, A = () => {
      var {
        hint: F,
        modelValue: U
      } = e;
      if (!F && !Hn(U))
        return Ut("--placeholder-hidden");
      if (F && (!Hn(U) || r.value))
        return Ut("--placeholder-hint");
    }, C = () => n.value && window.getComputedStyle(n.value).width || "0px", B = () => {
      var {
        disabled: F,
        readonly: U,
        onFocus: Q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || F || U || (l.value = C(), s.value = Ie(e.offsetY), r.value = !0, N(Q), y("onFocus"));
    }, V = () => {
      var {
        disabled: F,
        readonly: U,
        onBlur: Q
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || F || U || (N(Q), y("onBlur"));
    }, $ = (F) => {
      var {
        disabled: U,
        readonly: Q,
        multiple: ie,
        onChange: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || Q)) {
        var de = ie ? f.filter((we) => {
          var {
            selected: Fe
          } = we;
          return Fe.value;
        }).map(E) : E(F);
        N(e["onUpdate:modelValue"], de), N(le, de), y("onChange"), !ie && (r.value = !1);
      }
    }, O = () => {
      var {
        disabled: F,
        readonly: U,
        multiple: Q,
        clearable: ie,
        onClear: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || F || U || !ie)) {
        var de = Q ? [] : void 0;
        N(e["onUpdate:modelValue"], de), N(le, de), y("onClear");
      }
    }, R = (F) => {
      var {
        disabled: U,
        onClick: Q
      } = e;
      d != null && d.disabled.value || U || (N(Q, F), y("onClick"));
    }, W = (F) => {
      var {
        disabled: U,
        readonly: Q,
        modelValue: ie,
        onClose: le
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || Q)) {
        var de = ie, we = f.find((Qe) => {
          var {
            label: Ee
          } = Qe;
          return Ee.value === F;
        }), Fe = de.filter((Qe) => {
          var Ee;
          return Qe !== ((Ee = we.value.value) != null ? Ee : we.label.value);
        });
        N(e["onUpdate:modelValue"], Fe), N(le, Fe), y("onClose");
      }
    }, j = () => {
      var {
        multiple: F,
        modelValue: U
      } = e;
      if (F) {
        var Q = U;
        f.forEach((ie) => ie.sync(Q.includes(E(ie))));
      } else
        f.forEach((ie) => ie.sync(U === E(ie)));
      g();
    }, L = () => {
      l.value = C(), s.value = Ie(e.offsetY), r.value = !0;
    }, Z = () => {
      r.value = !1;
    }, H = () => w(e.rules, e.modelValue), K = () => {
      N(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    ae(() => e.multiple, () => {
      var {
        multiple: F,
        modelValue: U
      } = e;
      if (F && !Ce(U))
        throw Error("The modelValue must be an array when multiple is true");
    }), ae(() => e.modelValue, j, {
      deep: !0
    }), ae(() => v.value, j);
    var I = {
      wrapWidth: Y(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: $,
      reset: K,
      validate: H,
      resetValidation: T
    };
    return m(I), N(u, I), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: S,
      n: Ut,
      classes: Vg,
      computePlaceholderState: A,
      handleFocus: B,
      handleBlur: V,
      handleClear: O,
      handleClick: R,
      handleClose: W,
      reset: K,
      validate: H,
      resetValidation: T,
      focus: L,
      blur: Z
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Ig = {
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
  n: Ng,
  classes: Dg
} = ee("skeleton");
function Bg(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? J("v-if", !0) : (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("data"))
      },
      [G(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (h(), P(
      "div",
      {
        key: 1,
        class: c(e.n("content"))
      },
      [e.card ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("card")),
          style: X({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [D(
          "div",
          {
            class: c(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : J("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (h(), P(
        "div",
        {
          key: 1,
          class: c(e.n("article"))
        },
        [e.avatar ? (h(), P(
          "div",
          {
            key: 0,
            class: c(e.n("avatar")),
            style: X({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [D(
            "div",
            {
              class: c(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : J("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (h(), P(
          "div",
          {
            key: 1,
            class: c(e.n("section"))
          },
          [e.title ? (h(), P(
            "div",
            {
              key: 0,
              class: c(e.n("title")),
              style: X({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [D(
              "div",
              {
                class: c(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : J("v-if", !0), (h(!0), P(
            Oe,
            null,
            De(e.toNumber(e.rows), (r, a) => (h(), P(
              "div",
              {
                class: c(e.n("row")),
                key: r,
                style: X({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [D(
                "div",
                {
                  class: c(e.n("--animation"))
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
    )) : J("v-if", !0), e.loading && e.fullscreen ? (h(), P(
      "div",
      {
        key: 2,
        class: c(e.n("fullscreen")),
        style: X({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [D(
        "div",
        {
          class: c(e.n("--animation"))
        },
        null,
        2
      )],
      6
    )) : J("v-if", !0)],
    2
  );
}
const oa = _({
  render: Bg,
  name: "VarSkeleton",
  props: Ig,
  setup() {
    return {
      n: Ng,
      classes: Dg,
      toSizeUnit: be,
      toNumber: z
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function Ag(e) {
  return ["always", "normal", "never"].includes(e);
}
var zg = {
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
    validator: Ag
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
  n: el,
  classes: Lg
} = ee("slider"), Me;
(function(e) {
  e.First = "1", e.Second = "2";
})(Me || (Me = {}));
var Fg = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Rg(e, n) {
  var r = te("var-form-details");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [D(
        "div",
        {
          class: c(e.n("track"))
        },
        [D(
          "div",
          {
            class: c(e.n("track-background")),
            style: X({
              background: e.trackColor,
              height: e.multiplySizeUnit(e.trackHeight)
            })
          },
          null,
          6
        ), D(
          "div",
          {
            class: c(e.n("track-fill")),
            style: X(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (h(!0), P(
        Oe,
        null,
        De(e.thumbList, (a) => (h(), P(
          "div",
          {
            class: c(e.n("thumb")),
            key: a.enumValue,
            style: X({
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
          }, () => [D(
            "div",
            {
              class: c(e.n("thumb-block")),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: c(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: c(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: X({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [D(
              "span",
              null,
              x(a.text),
              1
            )],
            6
          )])],
          46,
          Fg
        ))),
        128
      ))],
      2
    ), ne(
      r,
      {
        "error-message": e.errorMessage,
        class: c(e.n("form")),
        "var-slider-cover": ""
      },
      null,
      8,
      ["error-message", "class"]
    )],
    2
  );
}
const la = _({
  render: Rg,
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: zg,
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
    }), u = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = M(null), v = M(0), f = M(!1), m = Ne({
      [Me.First]: s(),
      [Me.Second]: s()
    }), p = Y(() => z(e.max) - z(e.min)), b = Y(() => v.value / p.value * z(e.step)), w = Y(() => {
      var {
        modelValue: H,
        range: K
      } = e, I = [];
      return K && Ce(H) ? I = [{
        value: E(H[0]),
        enumValue: Me.First,
        text: k(H[0])
      }, {
        value: E(H[1]),
        enumValue: Me.Second,
        text: k(H[1])
      }] : je(H) && (I = [{
        value: E(H),
        enumValue: Me.First,
        text: k(H)
      }]), I;
    }), T = Y(() => {
      var {
        activeColor: H,
        range: K,
        modelValue: I
      } = e, F = K && Ce(I) ? E(Math.min(I[0], I[1])) : 0, U = K && Ce(I) ? E(Math.max(I[0], I[1])) - F : E(I);
      return {
        width: U + "%",
        left: F + "%",
        background: H
      };
    }), S = Y(() => e.disabled || (r == null ? void 0 : r.disabled.value)), g = Y(() => e.readonly || (r == null ? void 0 : r.readonly.value)), y = (H) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : m[H].active, E = (H) => {
      var {
        min: K,
        max: I
      } = e;
      return H < z(K) ? 0 : H > z(I) ? 100 : (H - z(K)) / p.value * 100;
    }, k = (H) => {
      if (!je(H))
        return 0;
      var K = H;
      K < Number(e.min) && (K = Number(e.min)), K > Number(e.max) && (K = Number(e.max));
      var I = parseInt("" + K, 10) === K;
      return I ? K : z(K.toPrecision(5));
    }, A = (H, K) => {
      var I = [], {
        step: F,
        range: U,
        modelValue: Q,
        onChange: ie,
        min: le
      } = e, de = z(F), we = Math.round(H / b.value), Fe = we * de + z(le), Qe = m[K].percentValue * de + z(le);
      if (m[K].percentValue = we, U && Ce(Q) && (I = K === Me.First ? [Fe, Q[1]] : [Q[0], Fe]), Qe !== Fe) {
        var Ee = U ? I.map((on) => k(on)) : k(Fe);
        N(ie, Ee), N(e["onUpdate:modelValue"], Ee), u();
      }
    }, C = (H) => {
      if (!e.range)
        return Me.First;
      var K = m[Me.First].percentValue * b.value, I = m[Me.Second].percentValue * b.value, F = Math.abs(H - K), U = Math.abs(H - I);
      return F <= U ? Me.First : Me.Second;
    }, B = (H, K) => {
      v.value || (v.value = d.value.offsetWidth), !(S.value || g.value) && (N(e.onStart), f.value = !0, m[K].startPosition = H.touches[0].clientX);
    }, V = (H, K) => {
      if (!(S.value || g.value || !f.value)) {
        var I = H.touches[0].clientX - m[K].startPosition + m[K].currentLeft;
        m[K].active = !0, I <= 0 ? I = 0 : I >= v.value && (I = v.value), A(I, K);
      }
    }, $ = (H) => {
      var {
        range: K,
        modelValue: I,
        onEnd: F,
        step: U,
        min: Q
      } = e;
      if (!(S.value || g.value)) {
        var ie = [];
        m[H].currentLeft = m[H].percentValue * b.value, m[H].active = !1;
        var le = m[H].percentValue * z(U) + z(Q);
        K && Ce(I) && (ie = H === Me.First ? [le, I[1]] : [I[0], le]), N(F, K ? ie : le), f.value = !1;
      }
    }, O = (H) => {
      if (!(S.value || g.value) && !H.target.closest("." + el("thumb"))) {
        var K = H.clientX - nu(H.currentTarget), I = C(K);
        A(K, I), $(I);
      }
    }, R = () => {
      var H = z(e.step);
      return isNaN(H) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : H < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, W = () => {
      var {
        range: H,
        modelValue: K
      } = e;
      return H && !Ce(K) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !H && Ce(K) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : H && Ce(K) && K.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, j = function(H, K) {
      H === void 0 && (H = e.modelValue), K === void 0 && (K = z(e.step));
      var I = (F) => {
        var {
          min: U,
          max: Q
        } = e;
        return F < z(U) ? 0 : F > z(Q) ? p.value / K : (F - z(U)) / K;
      };
      e.range && Ce(H) ? (m[Me.First].percentValue = I(H[0]), m[Me.First].currentLeft = m[Me.First].percentValue * b.value, m[Me.Second].percentValue = I(H[1]), m[Me.Second].currentLeft = m[Me.Second].percentValue * b.value) : je(H) && (m[Me.First].currentLeft = I(H) * b.value);
    }, L = () => {
      var H = e.range ? [0, 0] : 0;
      N(e["onUpdate:modelValue"], H), o();
    }, Z = {
      reset: L,
      validate: l,
      resetValidation: o
    };
    return N(n, Z), ae([() => e.modelValue, () => e.step], (H) => {
      var [K, I] = H;
      !R() || !W() || f.value || j(K, z(I));
    }), ae(v, () => j()), Le(() => {
      !R() || !W() || (v.value = d.value.offsetWidth);
    }), {
      n: el,
      classes: Lg,
      Thumbs: Me,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: S,
      errorMessage: a,
      thumbsProps: m,
      thumbList: w,
      multiplySizeUnit: Ze,
      toNumber: z,
      showLabel: y,
      start: B,
      move: V,
      end: $,
      click: O
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
function Ci() {
  return Ci = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ci.apply(this, arguments);
}
function Ug(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Yg(e) {
  return Ki.includes(e);
}
var Os = {
  type: {
    type: String,
    validator: Yg
  },
  position: {
    type: String,
    default: "top",
    validator: Ug
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
  loadingColor: Ci({}, _e(jn, "color"), {
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
  n: Wg,
  classes: Hg
} = ee("snackbar"), jg = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function Gg(e, n) {
  var r = te("var-icon"), a = te("var-loading");
  return ke((h(), P(
    "div",
    {
      class: c(e.n()),
      style: X({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: X({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: c([e.n("content"), e.contentClass])
        },
        [G(e.$slots, "default", {}, () => [he(
          x(e.content),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: c(e.n("action"))
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
  )), [[Ga, e.show]]);
}
const Vs = _({
  render: Gg,
  name: "VarSnackbarCore",
  components: {
    VarLoading: kn,
    VarIcon: Te
  },
  props: Os,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = St(() => e.show, 1);
    zi(() => e.show, () => e.lockScroll);
    var a = Y(() => e.type === "loading" || e.forbidClick), t = Y(() => e.type ? jg[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        var o;
        e.type !== "loading" && ((o = e["onUpdate:show"]) == null || o.call(e, !1));
      }, e.duration);
    };
    return ae(() => e.show, (o) => {
      o ? (e.onOpen == null || e.onOpen(), i()) : o === !1 && (clearTimeout(n.value), e.onClose == null || e.onClose());
    }), ae(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Le(() => {
      e.show && (e.onOpen == null || e.onOpen(), i());
    }), {
      SNACKBAR_TYPE: Ki,
      n: Wg,
      classes: Hg,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: qg
} = ee("snackbar");
function Xg(e, n) {
  var r = te("var-snackbar-core");
  return h(), me(
    ht,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [ne(
      Re,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: fe(() => [ne(
          r,
          Pe(e.$props, {
            class: e.n("transition")
          }),
          {
            action: fe(() => [G(e.$slots, "action")]),
            default: fe(() => [G(e.$slots, "default", {}, () => [he(
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
const sa = _({
  render: Xg,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Vs
  },
  props: Os,
  setup() {
    var {
      disabled: e
    } = wl();
    return {
      n: qg,
      disabled: e
    };
  }
});
function Wa() {
  return Wa = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Wa.apply(this, arguments);
}
function Kg(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Mi(e);
}
var Ki = ["loading", "success", "warning", "info", "error"], nl = 0, ki = !1, $i, Oa = !1, dn = Ne([]), Zg = {
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
}, Jg = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Qg = {
  setup() {
    return () => {
      var e = dn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Oa && (t.position = "top");
        var l = Oa ? "relative" : "absolute", s = Wa({
          position: l
        }, ry(t.position));
        return ne(Vs, Pe(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = tn.zIndex;
      return ne(Ks, Pe(Jg, {
        style: {
          zIndex: n
        },
        onAfterEnter: xg,
        onAfterLeave: _g
      }), Kg(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Dn = function(e) {
  var n = qe(e) || je(e) ? {
    content: String(e)
  } : e, r = Ne(Wa({}, Zg, n));
  r.show = !0, ki || (ki = !0, $i = Ea(Qg).unmountInstance);
  var {
    length: a
  } = dn, t = {
    id: nl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Oa)
    ey(t);
  else {
    var i = "update-" + nl;
    ny(r, i);
  }
  return {
    clear() {
      !Oa && dn.length ? dn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Ki.forEach((e) => {
  Dn[e] = (n) => (Ni(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Dn(n));
});
Dn.install = function(e) {
  e.component(sa.name, sa);
};
Dn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Oa && (dn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Oa = e);
};
Dn.clear = function() {
  dn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Dn.Component = sa;
function xg(e) {
  var n = e.getAttribute("data-id"), r = dn.find((a) => a.id === z(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function _g(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = dn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = dn.every((t) => t.animationEnd);
  a && ($i == null || $i(), dn = Ne([]), ki = !1);
}
function ey(e) {
  dn.push(e);
}
function ny(e, n) {
  var [r] = dn;
  r.reactiveSnackOptions = Wa({}, r.reactiveSnackOptions, e), r._update = n;
}
function ry(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Ps = (e) => ["mini", "small", "normal", "large"].includes(e), ay = (e) => Ps(e) || Ce(e) || je(e) || qe(e), ty = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), iy = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: ay
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
    validator: ty
  },
  inline: {
    type: Boolean,
    default: !1
  }
}, {
  n: Yt,
  classes: oy
} = ee("space"), ly = {
  mini: [4, 4],
  small: [6, 6],
  normal: [8, 12],
  large: [12, 20]
};
const ua = _({
  name: "VarSpace",
  props: iy,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? ly[i] : Ce(i) ? i.map(Ie) : [Ie(i), Ie(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (i = N(r.default)) != null ? i : [], m = Ps(v), [p, b] = a(v, m), w = (g) => {
        var y = [];
        return g.forEach((E) => {
          if (E.type !== Zs) {
            if (E.type === Oe && Ce(E.children)) {
              E.children.forEach((k) => {
                y.push(k);
              });
              return;
            }
            y.push(E);
          }
        }), y;
      };
      f = w(f);
      var T = f.length - 1, S = f.map((g, y) => {
        var E = "0";
        return d === "row" && (l === "start" || l === "center" || l === "end" ? y !== T ? E = p / 2 + "px " + b + "px " + p / 2 + "px 0" : E = p / 2 + "px 0" : l === "space-around" ? E = p / 2 + "px " + b / 2 + "px" : l === "space-between" && (y === 0 ? E = p / 2 + "px " + b / 2 + "px " + p / 2 + "px 0" : y === T ? E = p / 2 + "px 0 " + p / 2 + "px " + b / 2 + "px" : E = p / 2 + "px " + b / 2 + "px")), d === "column" && y !== T && (E = "0 0 " + p + "px 0"), ne("div", {
          style: {
            margin: E
          }
        }, [g]);
      });
      return ne("div", {
        class: oy(Yt(), Yt("$--box"), [o, Yt("--inline")]),
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
ua.install = function(e) {
  e.component(ua.name, ua);
};
var sy = {
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
}, Es = Symbol("STEPS_BIND_STEP_KEY"), Ms = Symbol("STEPS_COUNT_STEP_KEY");
function uy() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Es), {
    length: r
  } = Sn(Ms);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function dy() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Es), {
    index: r
  } = Cn(Ms);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: vy,
  classes: fy
} = ee("step"), cy = {
  key: 3
};
function my(e, n) {
  var r = te("var-icon");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.n(e.direction))
      },
      [D(
        "div",
        {
          class: c(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-tag"), [e.isActive || e.isCurrent, e.n(e.direction + "-tag--active")])),
            style: X({
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
              class: c(e.n("icon")),
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
              class: c(e.n("icon")),
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
              class: c(e.n("icon")),
              "var-step-cover": "",
              name: e.inactiveIcon
            },
            null,
            8,
            ["class", "name"]
          )) : (h(), P(
            "span",
            cy,
            x(e.index + 1),
            1
          ))],
          6
        ), D(
          "div",
          {
            class: c(e.classes(e.n(e.direction + "-content"), [e.isActive || e.isCurrent, e.n(e.direction + "-content--active")])),
            onClick: n[1] || (n[1] = function() {
              return e.click && e.click(...arguments);
            })
          },
          [G(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? J("v-if", !0) : (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n(e.direction + "-line")),
          style: X({
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
const da = _({
  render: my,
  name: "VarStep",
  components: {
    VarIcon: Te
  },
  props: sy,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = dy(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = Y(() => o.value === a.value), m = Y(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, b = () => v(a.value), w = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(p), ae(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var S = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + S + "px";
      }
    }), {
      n: vy,
      classes: fy,
      main: e,
      index: a,
      isActive: m,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: b,
      getRef: w
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function py(e) {
  return ["horizontal", "vertical"].includes(e);
}
var hy = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: py
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
  n: gy
} = ee("steps");
function yy(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n()),
      style: X({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [G(e.$slots, "default")],
    6
  );
}
const va = _({
  render: yy,
  name: "VarSteps",
  props: hy,
  setup(e) {
    var n = Y(() => e.active), r = Y(() => e.activeColor), a = Y(() => e.inactiveColor), t = Y(() => e.direction), {
      length: i,
      bindStep: o
    } = uy(), l = (u) => {
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
      n: gy
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var {
  n: by
} = ee("style-provider");
const fa = _({
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
    return () => dl(e.tag, {
      class: by(),
      style: yl(e.styleVars)
    }, N(r.default));
  }
});
var Wt = [];
function Ha(e) {
  Wt.forEach((r) => document.documentElement.style.removeProperty(r)), Wt.length = 0;
  var n = yl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Wt.push(a);
  });
}
Ha.Component = fa;
fa.install = function(e) {
  e.component(fa.name, fa);
};
Ha.install = function(e) {
  e.component(fa.name, fa);
};
var wy = {
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
  n: Sy,
  classes: Cy
} = ee("switch");
function ky(e, n) {
  var r = te("var-loading"), a = te("var-form-details"), t = Ge("ripple");
  return h(), P(
    "div",
    {
      class: c(e.n())
    },
    [D(
      "div",
      {
        class: c(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: X(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: X(e.styleComputed.track),
          class: c(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), ke((h(), P(
        "div",
        {
          class: c(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: X(e.styleComputed.handle),
            class: c(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
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
const ca = _({
  render: ky,
  name: "VarSwitch",
  components: {
    VarLoading: kn,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: wy,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = mn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = cn(), l = () => i(e.rules, e.modelValue), s = () => Ve(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = Y(() => {
      var {
        size: p,
        modelValue: b,
        color: w,
        closeColor: T,
        loadingColor: S,
        activeValue: g
      } = e;
      return {
        handle: {
          width: Ze(p),
          height: Ze(p),
          backgroundColor: b === g ? w : T,
          color: S
        },
        ripple: {
          left: b === g ? Ze(p, 0.5) : "-" + Ze(p, 0.5),
          color: b === g ? w : T || "#999",
          width: Ze(p, 2),
          height: Ze(p, 2)
        },
        track: {
          height: Ze(p, 0.72),
          width: Ze(p, 1.9),
          borderRadius: Ze(p, 2 / 3),
          filter: b === g || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: b === g ? w : T
        },
        switch: {
          height: Ze(p, 1.2),
          width: Ze(p, 2)
        }
      };
    }), d = Y(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Ze(p, 0.4);
    }), v = (p) => {
      var {
        onClick: b,
        onChange: w,
        disabled: T,
        loading: S,
        readonly: g,
        modelValue: y,
        activeValue: E,
        inactiveValue: k,
        "onUpdate:modelValue": A
      } = e;
      if (N(b, p), !(T || S || g || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var C = y === E ? k : E;
        N(w, C), N(A, C), s();
      }
    }, f = () => {
      N(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, m = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return N(n, m), {
      n: Sy,
      classes: Cy,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
var $y = {
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
}, Is = Symbol("TABS_BIND_TAB_KEY"), Ns = Symbol("TABS_COUNT_TAB_KEY");
function Ty() {
  var {
    childProviders: e,
    bindChildren: n
  } = vn(Is), {
    length: r
  } = Sn(Ns);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Oy() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Is), {
    index: r
  } = Cn(Ns);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: nt,
  classes: Vy
} = ee("tab");
function Py(e, n) {
  var r = Ge("ripple");
  return ke((h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: X({
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
const ma = _({
  render: Py,
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: $y,
  setup(e) {
    var n = M(null), r = Y(() => e.name), a = Y(() => e.disabled), t = Y(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = Oy(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: m,
      resize: p
    } = o, b = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(b);
    var w = () => {
      var {
        disabled: g,
        name: y
      } = e;
      return g ? f.value : u.value === y || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: g,
        name: y
      } = e;
      return g ? nt("$-tab--disabled") : u.value === y || u.value === (i == null ? void 0 : i.value) ? nt("$-tab--active") : nt("$-tab--inactive");
    }, S = (g) => {
      var {
        disabled: y,
        name: E,
        onClick: k
      } = e;
      y || (k == null || k(E != null ? E : i.value, g), s(b));
    };
    return ae(() => e.name, p), ae(() => e.disabled, p), {
      n: nt,
      classes: Vy,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: m,
      computeColorStyle: w,
      computeColorClass: T,
      handleClick: S
    };
  }
});
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Ds = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Bs = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function Ey() {
  var {
    bindChildren: e,
    childProviders: n
  } = vn(Ds), {
    length: r
  } = Sn(Bs);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function My() {
  var {
    parentProvider: e,
    bindParent: n
  } = fn(Ds), {
    index: r
  } = Cn(Bs);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Iy = {
  name: {
    type: [String, Number]
  }
}, {
  n: Ny,
  classes: Dy
} = ee("tab-item");
function By(e, n) {
  var r = te("var-swipe-item");
  return h(), me(
    r,
    {
      class: c(e.classes(e.n(), [!e.current, e.n("--inactive")])),
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
const pa = _({
  render: By,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Zn
  },
  props: Iy,
  setup(e) {
    var n = M(!1), r = M(!1), a = Y(() => e.name), {
      index: t,
      bindTabsItems: i
    } = My(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: Ny,
      classes: Dy,
      current: n,
      initSlot: r
    };
  }
});
pa.install = function(e) {
  e.component(pa.name, pa);
};
var {
  n: Ay,
  classes: zy
} = ee("table");
function Ly(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("main"))
      },
      [D(
        "table",
        {
          class: c(e.n("table")),
          style: X({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [G(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("footer"))
      },
      [G(e.$slots, "footer")],
      2
    )) : J("v-if", !0)],
    2
  );
}
const ha = _({
  render: Ly,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: be,
      n: Ay,
      classes: zy
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
function rl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Fy = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: rl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: rl
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
function al(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        al(i, a, t, o, l, "next", s);
      }
      function l(s) {
        al(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Uy,
  classes: Yy
} = ee("tabs");
function Wy(e, n) {
  return h(), me(
    Va(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: fe(() => [D(
        "div",
        Pe({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [D(
          "div",
          {
            ref: "scrollerEl",
            class: c(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [G(e.$slots, "default"), D(
            "div",
            {
              class: c(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
              style: X({
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
const ga = _({
  render: Wy,
  name: "VarTabs",
  components: {
    VarSticky: Jn
  },
  inheritAttrs: !1,
  props: Fy,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), i = M(!1), o = M(null), l = Y(() => e.active), s = Y(() => e.activeColor), u = Y(() => e.inactiveColor), d = Y(() => e.disabledColor), v = Y(() => e.itemDirection), {
      tabList: f,
      bindTabList: m,
      length: p
    } = Ty(), b = (C) => {
      var B, V = (B = C.name.value) != null ? B : C.index.value, {
        active: $,
        onChange: O,
        onClick: R
      } = e;
      N(e["onUpdate:active"], V), N(R, V), V !== $ && N(O, V);
    }, w = () => f.find((C) => {
      var {
        name: B
      } = C;
      return e.active === B.value;
    }), T = (C) => f.find((B) => {
      var {
        index: V
      } = B;
      return (C != null ? C : e.active) === V.value;
    }), S = () => {
      if (p.value !== 0) {
        var {
          active: C
        } = e;
        if (je(C)) {
          var B = C > p.value - 1 ? p.value - 1 : 0;
          return N(e["onUpdate:active"], B), T(B);
        }
      }
    }, g = () => {
      i.value = f.length >= 5;
    }, y = (C) => {
      var {
        element: B
      } = C, V = B.value;
      e.layoutDirection === "horizontal" ? (n.value = (V == null ? void 0 : V.offsetWidth) + "px", a.value = (V == null ? void 0 : V.offsetLeft) + "px") : (r.value = (V == null ? void 0 : V.offsetHeight) + "px", t.value = (V == null ? void 0 : V.offsetTop) + "px");
    }, E = (C) => {
      var {
        element: B
      } = C;
      if (!!i.value) {
        var V = o.value, $ = B.value;
        if (e.layoutDirection === "horizontal") {
          var O = $.offsetLeft + $.offsetWidth / 2 - V.offsetWidth / 2;
          ot(V, {
            left: O,
            animation: ao
          });
        } else {
          var R = $.offsetTop + $.offsetHeight / 2 - V.offsetHeight / 2;
          ot(V, {
            top: R,
            animation: ao
          });
        }
      }
    }, k = () => {
      var C = w() || T() || S();
      !C || C.disabled.value || (g(), y(C), E(C));
    }, A = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: k,
      onTabClick: b
    };
    return m(A), ae(() => p.value, /* @__PURE__ */ Ry(function* () {
      yield Tn(), k();
    })), ae(() => e.active, k), Le(() => window.addEventListener("resize", k)), rr(() => window.removeEventListener("resize", k)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Re,
      toSizeUnit: be,
      n: Uy,
      classes: Yy,
      resize: k
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var Hy = {
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
function tl(e, n, r, a, t, i, o) {
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
  n: Gy
} = ee("tabs-items");
function qy(e, n) {
  var r = te("var-swipe");
  return h(), me(
    r,
    {
      class: c(e.n()),
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
const ya = _({
  render: qy,
  name: "VarTabsItems",
  components: {
    VarSwipe: Kn
  },
  props: Hy,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = Ey(), i = (f) => r.find((m) => {
      var {
        name: p
      } = m;
      return f === p.value;
    }), o = (f) => r.find((m) => {
      var {
        index: p
      } = m;
      return f === p.value;
    }), l = (f) => i(f) || o(f), s = (f) => {
      var m, p = l(f);
      !p || (r.forEach((b) => {
        var {
          setCurrent: w
        } = b;
        return w(!1);
      }), p.setCurrent(!0), (m = n.value) == null || m.to(p.index.value));
    }, u = (f) => {
      var m, p = r.find((w) => {
        var {
          index: T
        } = w;
        return T.value === f;
      }), b = (m = p.name.value) != null ? m : p.index.value;
      N(e["onUpdate:active"], b);
    }, d = () => n.value, v = {};
    return a(v), ae(() => e.active, s), ae(() => t.value, /* @__PURE__ */ jy(function* () {
      yield Tn(), s(e.active);
    })), {
      swipe: n,
      n: Gy,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
const Xy = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, Ky = {
  "--badge-default-color": "#555"
}, Zy = {
  "--button-default-color": "#303030"
}, Jy = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, Qy = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, xy = {
  "--checkbox-unchecked-color": "#fff"
}, _y = {
  "--chip-default-color": "#555"
}, e0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, n0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, r0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, a0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, t0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, i0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, o0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, l0 = {
  "--popup-content-background-color": "#1e1e1e"
}, s0 = {
  "--pull-refresh-background": "#303030"
}, u0 = {
  "--radio-unchecked-color": "#fff"
}, d0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, v0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, f0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, c0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, m0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, p0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, h0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, g0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, y0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, b0 = {
  "--tabs-background": "#1e1e1e"
}, w0 = {
  "--app-bar-color": "#272727"
}, S0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, C0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, k0 = {
  "--menu-background-color": "#272727"
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
const $0 = Ti({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, Zy, Qy, Jy, g0, n0, f0, b0, p0, l0, r0, Xy, _y, Ky, y0, e0, s0, m0, c0, i0, h0, t0, v0, u0, xy, a0, o0, w0, S0, C0, k0, d0);
var Oi = {
  dark: $0
}, sn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Je = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], il = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function T0(e) {
  return ["ampm", "24hr"].includes(e);
}
var O0 = {
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
    validator: T0
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
}, As = (e, n) => e === "24hr" || n === "am", Zi = (e, n, r) => {
  var a = sn.findIndex((i) => z(i) === z(r)), t = As(e, n) ? r : Je[a];
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
}, zs = (e) => {
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
  } = Zi(t, i, o), f = !1, m = !1;
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
      hour: w,
      minute: T
    } = en(s);
    f = w === v && a < T;
  }
  if (l && s) {
    var {
      hour: S,
      minute: g
    } = en(l), {
      hour: y,
      minute: E
    } = en(s);
    f = y === v && a < E || S === v && a > g;
  }
  return (n = e.allowedTime) != null && n.minutes && (m = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || m;
}, Ls = (e) => {
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
  } = Zi(t, i, o), m = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: b,
      minute: w,
      second: T
    } = en(s);
    m = b === f && w < l || w === l && a > T;
  }
  if (!s && u) {
    var {
      hour: S,
      minute: g,
      second: y
    } = en(u);
    m = S === f && g > l || g === l && a > y;
  }
  if (s && u) {
    var {
      hour: E,
      minute: k,
      second: A
    } = en(s), {
      hour: C,
      minute: B,
      second: V
    } = en(u);
    m = E === f && k < l || C === f && B > l || E === f && k === l && a > A || C === f && B === l && a < V;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), m || p;
}, {
  n: V0,
  classes: P0
} = ee("time-picker");
function E0(e, n) {
  return h(), P(
    "div",
    {
      class: c(e.n("clock"))
    },
    [D(
      "div",
      {
        class: c(e.n("clock-hand")),
        style: X(e.handStyle)
      },
      null,
      6
    ), (h(!0), P(
      Oe,
      null,
      De(e.timeScales, (r, a) => (h(), P(
        "div",
        {
          class: c(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: X(e.getStyle(a, r, !1))
        },
        x(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (h(), P(
      "div",
      {
        key: 0,
        class: c(e.n("clock-inner")),
        ref: "inner"
      },
      [(h(!0), P(
        Oe,
        null,
        De(e.hours24, (r, a) => (h(), P(
          "div",
          {
            class: c(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: X(e.getStyle(a, r, !0))
          },
          x(r),
          7
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)],
    2
  );
}
const M0 = _({
  render: E0,
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
    } = n, a = M(null), t = M([]), i = M([]), o = Y(() => ({
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = Y(() => {
      if (e.rad !== void 0) {
        var w = e.rad / 30;
        return w >= 0 ? w : w + 12;
      }
    }), s = Y(() => e.type === "hour" ? sn : il), u = (w, T) => {
      var S;
      w = (S = w) != null ? S : e.type === "minute" ? e.time.minute : e.time.second;
      var g = e.type === "minute" ? zs : Ls, y = {
        time: z(w),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(y, "minute"), g(y);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var w = e.isInner ? Je[l.value] : s.value[l.value];
      return s.value === il ? u() ? "#bdbdbd" : e.color : f(w) ? "#bdbdbd" : e.color;
    }, v = (w, T) => T ? l.value === w && e.isInner : l.value === w && (!e.isInner || e.type !== "hour"), f = (w) => {
      if (e.type === "hour") {
        if (As(e.format, e.ampm))
          return t.value.includes(w);
        var T = sn.findIndex((S) => S === w);
        return i.value.includes(T);
      }
      return u(w, !0);
    }, m = (w, T, S) => {
      var g = 2 * Math.PI / 12 * w - Math.PI / 2, y = 50 * (1 + Math.cos(g)), E = 50 * (1 + Math.sin(g)), k = () => v(w, S) ? f(T) ? {
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
        color: C
      } = k();
      return {
        left: y + "%",
        top: E + "%",
        backgroundColor: A,
        color: C
      };
    }, p = () => {
      var {
        width: w,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: w,
        height: T
      };
    }, b = () => {
      if (l.value !== void 0) {
        var w = e.ampm === "am" ? sn : Je;
        return hr(w[l.value], 2, "0");
      }
    };
    return ae([l, () => e.isInner], (w, T) => {
      var [S, g] = w, [y, E] = T, k = S === y && g === E;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var A = g ? Je[l.value] : b(), C = e.useSeconds ? ":" + e.time.second : "", B = A + ":" + e.time.minute + C;
        e.preventNextUpdate || r("update", B), r("change-prevent-update");
      }
    }), ae(() => e.rad, (w, T) => {
      if (!(e.type === "hour" || w === void 0 || T === void 0)) {
        var S = w / 6 >= 0 ? w / 6 : w / 6 + 60, g = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (S !== g) {
          var y, {
            hourStr: E
          } = Zi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = re().minute(S).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            y = E + ":" + k + A;
          }
          if (e.type === "second") {
            var C = re().second(S).format("ss"), B = e.useSeconds ? ":" + C : "";
            y = E + ":" + e.time.minute + B;
          }
          r("update", y);
        }
      }
    }), ae([() => e.max, () => e.min, () => e.allowedTime], (w) => {
      var [T, S, g] = w;
      if (t.value = [], T && !S) {
        var {
          hour: y
        } = en(T), E = sn.filter((Z) => z(Z) > y), k = Je.filter((Z) => z(Z) > y);
        t.value = [...E, ...k];
      }
      if (!T && S) {
        var {
          hour: A
        } = en(S), C = sn.filter((Z) => z(Z) < A), B = Je.filter((Z) => z(Z) < A);
        t.value = [...C, ...B];
      }
      if (T && S) {
        var {
          hour: V
        } = en(T), {
          hour: $
        } = en(S), O = sn.filter((Z) => z(Z) < $ || z(Z) > V), R = Je.filter((Z) => z(Z) < $ || z(Z) > V);
        t.value = [...O, ...R];
      }
      if (g != null && g.hours) {
        var {
          hours: W
        } = g, j = sn.filter((Z) => !W(z(Z))), L = Je.filter((Z) => !W(z(Z)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...j, ...L])];
      }
      i.value = t.value.map((Z) => Je.findIndex((H) => Z === H)).filter((Z) => Z >= 0);
    }, {
      immediate: !0
    }), {
      n: V0,
      classes: P0,
      hours24: Je,
      timeScales: s,
      inner: a,
      handStyle: o,
      disableHour: t,
      isActive: v,
      isDisable: f,
      getSize: p,
      getStyle: m,
      activeItemIndex: l
    };
  }
});
var {
  n: I0,
  classes: N0
} = ee("time-picker"), D0 = (e) => (Cr(""), e = e(), kr(), e), B0 = /* @__PURE__ */ D0(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
)), A0 = {
  key: 0
};
function z0(e, n) {
  var r = te("clock");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: c(e.n("title")),
        style: X({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: c(e.n("title-time"))
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          x(e.time.hour),
          3
        ), B0, D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          x(e.time.minute),
          3
        ), e.useSeconds ? (h(), P("span", A0, ":")) : J("v-if", !0), e.useSeconds ? (h(), P(
          "div",
          {
            key: 1,
            class: c(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          x(e.time.second),
          3
        )) : J("v-if", !0)],
        2
      ), e.format === "ampm" ? (h(), P(
        "div",
        {
          key: 0,
          class: c(e.n("title-ampm"))
        },
        [D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), D(
          "div",
          {
            class: c(e.classes(e.n("title-btn"), [e.ampm === "pm", e.n("title-btn--active")])),
            onClick: n[4] || (n[4] = (a) => e.checkAmpm("pm"))
          },
          "PM",
          2
        )],
        2
      )) : J("v-if", !0)],
      6
    ), D(
      "div",
      {
        class: c(e.n("body"))
      },
      [D(
        "div",
        {
          class: c(e.n("clock-container")),
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
          Re,
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
const ba = _({
  render: z0,
  name: "VarTimePicker",
  components: {
    Clock: M0
  },
  props: O0,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), i = M(!1), o = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), m = M("am"), p = M(!1), b = M(!1), w = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), S = Ne({
      x: [],
      y: []
    }), g = Y(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), y = (I) => {
      N(e["onUpdate:modelValue"], I), N(e.onChange, I);
    }, E = (I) => I * 57.29577951308232, k = (I) => {
      l.value = !1, b.value = !1, f.value = I;
    }, A = (I) => {
      var {
        disableHour: F
      } = a.value, U = sn.findIndex((le) => z(le) === z(w.value.hour)), Q = I === "am" ? sn : Je, ie = [...Q.slice(U), ...Q.slice(0, U)];
      return ie.find((le, de) => (i.value = de !== 0, !F.includes(le)));
    }, C = (I) => {
      if (!e.readonly) {
        m.value = I;
        var F = A(I);
        if (!!F) {
          var U = e.useSeconds ? ":" + w.value.second : "", Q = hr(F, 2, "0") + ":" + w.value.minute + U;
          y(Q);
        }
      }
    }, B = (I, F) => {
      var U = I >= S.x[0] && I <= S.x[1], Q = F >= S.y[0] && F <= S.y[1];
      return U && Q;
    }, V = (I) => {
      var F = e.format === "24hr" ? "HH" : "hh", {
        hour: U,
        minute: Q,
        second: ie
      } = en(I);
      return {
        hour: re().hour(U).format(F),
        minute: re().minute(Q).format("mm"),
        second: re().second(ie).format("ss")
      };
    }, $ = (I) => {
      var F = I / 30;
      return F >= 0 ? F : F + 12;
    }, O = () => {
      var {
        width: I,
        height: F
      } = a.value.getSize(), U = T.x - I / 2 - 8, Q = T.x + I / 2 + 8, ie = T.y - F / 2 - 8, le = T.y + F / 2 + 8;
      return {
        rangeXMin: U,
        rangeXMax: Q,
        rangeYMin: ie,
        rangeYMax: le
      };
    }, R = (I, F, U) => {
      var {
        disableHour: Q
      } = a.value;
      o.value = B(I, F);
      var ie = Math.round(U / 30) * 30 + 90, le = $(ie), de = t.value ? sn[le] : Je[le];
      if (Q.includes(de) || (t.value = e.format === "24hr" ? B(I, F) : !1), t.value === o.value) {
        var we = t.value || m.value === "pm" ? Je[le] : sn[le];
        p.value = Q.includes(we), !p.value && (u.value = ie, l.value = !0);
      }
    }, W = (I) => {
      var {
        disableHour: F
      } = a.value, U = Math.round(I / 6) * 6 + 90, Q = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: Q,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: F,
        allowedTime: e.allowedTime
      };
      b.value = zs(ie), !b.value && (d.value = U, s.value = !0);
    }, j = (I) => {
      var {
        disableHour: F
      } = a.value, U = Math.round(I / 6) * 6 + 90, Q = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: Q,
        format: e.format,
        ampm: m.value,
        hour: w.value.hour,
        minute: z(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: F,
        allowedTime: e.allowedTime
      };
      Ls(ie) || (v.value = U);
    }, L = () => {
      var {
        left: I,
        top: F,
        width: U,
        height: Q
      } = n.value.getBoundingClientRect();
      if (T.x = I + U / 2, T.y = F + Q / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: le,
          rangeYMin: de,
          rangeYMax: we
        } = O();
        S.x = [ie, le], S.y = [de, we];
      }
    }, Z = (I) => {
      if (I.preventDefault(), !e.readonly) {
        L();
        var {
          clientX: F,
          clientY: U
        } = I.touches[0], Q = F - T.x, ie = U - T.y, le = Math.round(E(Math.atan2(ie, Q)));
        f.value === "hour" ? R(F, U, le) : f.value === "minute" ? W(le) : j(le);
      }
    }, H = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, K = () => {
      i.value = !1;
    };
    return ae(() => e.modelValue, (I) => {
      if (I) {
        var {
          hour: F,
          minute: U,
          second: Q
        } = en(I), ie = re().hour(F).format("hh"), le = re().hour(F).format("HH"), de = re().minute(U).format("mm"), we = re().second(Q).format("ss");
        u.value = (ie === "12" ? 0 : z(ie)) * 30, d.value = z(de) * 6, v.value = z(we) * 6, w.value = V(I), e.format !== "24hr" && (m.value = hr("" + F, 2, "0") === le && Je.includes(le) ? "pm" : "am"), t.value = e.format === "24hr" && Je.includes(le);
      }
    }, {
      immediate: !0
    }), {
      n: I0,
      classes: N0,
      getRad: g,
      time: w,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: m,
      isPreventNextUpdate: i,
      moveHand: Z,
      checkPanel: k,
      checkAmpm: C,
      end: H,
      update: y,
      changePreventUpdate: K
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
var L0 = {
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
function ol(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ll(e) {
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
  n: F0,
  classes: R0
} = ee("uploader"), U0 = 0, Y0 = ["onClick"], W0 = ["onClick"], H0 = ["src", "alt"], j0 = ["multiple", "accept", "capture", "disabled"], G0 = ["src"];
function q0(e, n) {
  var r = te("var-icon"), a = te("var-form-details"), t = te("var-popup"), i = Ge("ripple");
  return h(), P(
    "div",
    {
      class: c(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: c(e.n("file-list"))
      },
      [(h(!0), P(
        Oe,
        null,
        De(e.files, (o) => ke((h(), P(
          "div",
          {
            class: c(e.classes(e.n("file"), e.n("$-elevation--2"), [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [D(
            "div",
            {
              class: c(e.n("file-name"))
            },
            x(o.name || o.url),
            3
          ), e.removable ? (h(), P(
            "div",
            {
              key: 0,
              class: c(e.n("file-close")),
              onClick: Nn((l) => e.handleRemove(o), ["stop"])
            },
            [ne(
              r,
              {
                class: c(e.n("file-close-icon")),
                "var-uploader-cover": "",
                name: "delete"
              },
              null,
              8,
              ["class"]
            )],
            10,
            W0
          )) : J("v-if", !0), o.cover ? (h(), P(
            "img",
            {
              key: 1,
              class: c(e.n("file-cover")),
              style: X({
                objectFit: o.fit
              }),
              src: o.cover,
              alt: o.name
            },
            null,
            14,
            H0
          )) : J("v-if", !0), D(
            "div",
            {
              class: c(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          Y0
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((h(), P(
        "div",
        {
          key: 0,
          class: c(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [D(
          "input",
          {
            ref: "input",
            class: c(e.n("action-input")),
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
          j0
        ), G(e.$slots, "default", {}, () => [ne(
          r,
          {
            class: c(e.n("action-icon")),
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
    ), ne(
      a,
      {
        "error-message": e.errorMessage,
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    ), ne(
      t,
      {
        class: c(e.n("preview")),
        "var-uploader-cover": "",
        position: "center",
        show: e.showPreview,
        "onUpdate:show": n[2] || (n[2] = (o) => e.showPreview = o),
        onClosed: n[3] || (n[3] = (o) => e.currentPreview = null)
      },
      {
        default: fe(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (h(), P(
            "video",
            {
              key: 0,
              class: c(e.n("preview-video")),
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
            G0
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
const wa = _({
  render: q0,
  name: "VarUploader",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarPopup: yn,
    VarFormDetails: He
  },
  props: L0,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = Y(() => {
      var {
        maxlength: W,
        modelValue: {
          length: j
        }
      } = e;
      return je(W) ? j + " / " + W : "";
    }), {
      form: i,
      bindForm: o
    } = mn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = cn(), v = Y(() => {
      var {
        modelValue: W,
        hideList: j
      } = e;
      return j ? [] : W;
    }), f = () => {
      n.value.click();
    }, m = (W) => {
      var {
        disabled: j,
        readonly: L,
        previewed: Z
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || j || L || !Z)) {
        var {
          url: H
        } = W;
        if (qe(H) && no(H)) {
          er(H);
          return;
        }
        qe(H) && ro(H) && (a.value = W, r.value = !0);
      }
    }, p = (W) => ({
      id: U0++,
      url: "",
      cover: "",
      name: W.name,
      file: W
    }), b = (W) => {
      var j = W.target, {
        files: L
      } = j;
      return Array.from(L);
    }, w = (W) => new Promise((j) => {
      var L = new FileReader();
      L.onload = () => {
        var Z = L.result;
        W.file.type.startsWith("image") && (W.cover = Z), W.url = Z, j(W);
      }, L.readAsDataURL(W.file);
    }), T = (W) => W.map(w), S = (W) => {
      var {
        onBeforeRead: j
      } = e;
      return W.map((L) => new Promise((Z) => {
        var H = j ? j(Ne(L)) : !0;
        Promise.resolve(H).then((K) => Z({
          valid: K,
          varFile: L
        }));
      }));
    }, g = /* @__PURE__ */ function() {
      var W = ll(function* (j) {
        var {
          maxsize: L,
          maxlength: Z,
          modelValue: H,
          onOversize: K,
          onAfterRead: I,
          readonly: F,
          disabled: U
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || U || F)) {
          var Q = (Ee) => Ee.filter((on) => on.file.size > z(L) ? (N(K, Ne(on)), !1) : !0), ie = (Ee) => {
            var on = Math.min(Ee.length, z(Z) - H.length);
            return Ee.slice(0, on);
          }, le = b(j), de = le.map(p);
          de = L != null ? Q(de) : de, de = Z != null ? ie(de) : de;
          var we = yield Promise.all(T(de)), Fe = yield Promise.all(S(we)), Qe = Fe.filter((Ee) => {
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
          N(e["onUpdate:modelValue"], [...H, ...Qe]), j.target.value = "", Qe.forEach((Ee) => N(I, Ne(Ee)));
        }
      });
      return function(L) {
        return W.apply(this, arguments);
      };
    }(), y = /* @__PURE__ */ function() {
      var W = ll(function* (j) {
        var {
          disabled: L,
          readonly: Z,
          modelValue: H,
          onBeforeRemove: K,
          onRemove: I
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || L || Z) && !(K && !(yield K(j)))) {
          var F = H.filter((U) => U !== j);
          N(I, j), B("onRemove"), N(e["onUpdate:modelValue"], F);
        }
      });
      return function(L) {
        return W.apply(this, arguments);
      };
    }(), E = () => e.modelValue.filter((W) => W.state === "success"), k = () => e.modelValue.filter((W) => W.state === "error"), A = () => e.modelValue.filter((W) => W.state === "loading"), C = {
      getSuccess: E,
      getError: k,
      getLoading: A
    }, B = (W) => {
      Ve(() => {
        var {
          validateTrigger: j,
          rules: L,
          modelValue: Z
        } = e;
        s(j, W, L, Z, C);
      });
    }, V = !1, $ = () => u(e.rules, e.modelValue, C), O = () => {
      V = !0, N(e["onUpdate:modelValue"], []), d();
    }, R = {
      validate: $,
      resetValidation: d,
      reset: O
    };
    return N(o, R), ae(() => e.modelValue, () => {
      !V && B("onChange"), V = !1;
    }, {
      deep: !0
    }), {
      n: F0,
      classes: R0,
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
      preview: m,
      triggerAction: f,
      handleChange: g,
      handleRemove: y,
      getSuccess: E,
      getError: k,
      getLoading: A,
      validate: $,
      resetValidation: d,
      reset: O
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
function X0(e) {
  gr.install && e.use(gr), Nr.install && e.use(Nr), Dr.install && e.use(Dr), lr.install && e.use(lr), Br.install && e.use(Br), Ar.install && e.use(Ar), nn.install && e.use(nn), zr.install && e.use(zr), sr.install && e.use(sr), ur.install && e.use(ur), Lr.install && e.use(Lr), dr.install && e.use(dr), Fr.install && e.use(Fr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), tn.install && e.use(tn), Yr.install && e.use(Yr), Wr.install && e.use(Wr), Hr.install && e.use(Hr), yr.install && e.use(yr), jr.install && e.use(jr), Xn.install && e.use(Xn), He.install && e.use(He), Te.install && e.use(Te), Gr.install && e.use(Gr), er.install && e.use(er), qr.install && e.use(qr), Xr.install && e.use(Xr), mr.install && e.use(mr), mt.install && e.use(mt), Kr.install && e.use(Kr), Zr.install && e.use(Zr), kn.install && e.use(kn), Ra.install && e.use(Ra), Zt.install && e.use(Zt), xn.install && e.use(xn), Jr.install && e.use(Jr), Qr.install && e.use(Qr), Sr.install && e.use(Sr), yn.install && e.use(yn), xr.install && e.use(xr), _r.install && e.use(_r), ea.install && e.use(ea), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), Ue.install && e.use(Ue), ta.install && e.use(ta), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), Dn.install && e.use(Dn), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), Jn.install && e.use(Jn), Ha.install && e.use(Ha), Kn.install && e.use(Kn), Zn.install && e.use(Zn), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), Oi.install && e.use(Oi), ba.install && e.use(ba), wa.install && e.use(wa);
}
const Z0 = {
  install: X0,
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
  Form: Xn,
  FormDetails: He,
  Icon: Te,
  Image: Gr,
  ImagePreview: er,
  IndexAnchor: qr,
  IndexBar: Xr,
  Input: mr,
  Lazy: mt,
  Link: Kr,
  List: Zr,
  Loading: kn,
  LoadingBar: Ra,
  Locale: Zt,
  Menu: xn,
  Option: Jr,
  Pagination: Qr,
  Picker: Sr,
  Popup: yn,
  Progress: xr,
  PullRefresh: _r,
  Radio: ea,
  RadioGroup: na,
  Rate: ra,
  Result: aa,
  Ripple: Ue,
  Row: ta,
  Select: ia,
  Skeleton: oa,
  Slider: la,
  Snackbar: Dn,
  Space: ua,
  Step: da,
  Steps: va,
  Sticky: Jn,
  StyleProvider: Ha,
  Swipe: Kn,
  SwipeItem: Zn,
  Switch: ca,
  Tab: ma,
  TabItem: pa,
  Table: ha,
  Tabs: ga,
  TabsItems: ya,
  Themes: Oi,
  TimePicker: ba,
  Uploader: wa
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
  Xn as Form,
  He as FormDetails,
  Te as Icon,
  Gr as Image,
  er as ImagePreview,
  qr as IndexAnchor,
  Xr as IndexBar,
  mr as Input,
  mt as Lazy,
  Kr as Link,
  Zr as List,
  kn as Loading,
  Ra as LoadingBar,
  Zt as Locale,
  xn as Menu,
  Jr as Option,
  Qr as Pagination,
  Sr as Picker,
  yn as Popup,
  xr as Progress,
  _r as PullRefresh,
  ea as Radio,
  na as RadioGroup,
  ra as Rate,
  aa as Result,
  Ue as Ripple,
  ta as Row,
  ia as Select,
  oa as Skeleton,
  la as Slider,
  Dn as Snackbar,
  ua as Space,
  da as Step,
  va as Steps,
  Jn as Sticky,
  Ha as StyleProvider,
  Kn as Swipe,
  Zn as SwipeItem,
  ca as Switch,
  ma as Tab,
  pa as TabItem,
  ha as Table,
  ga as Tabs,
  ya as TabsItems,
  Oi as Themes,
  ba as TimePicker,
  wa as Uploader,
  Z0 as default,
  X0 as install
};
