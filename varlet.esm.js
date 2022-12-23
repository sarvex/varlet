import { reactive as Ie, ref as P, onMounted as Fe, onUnmounted as ar, onActivated as Ii, onDeactivated as Ni, getCurrentInstance as Ma, provide as fl, computed as W, inject as cl, nextTick as Pe, createApp as qs, onBeforeUnmount as Di, h as ml, isVNode as yt, watch as ae, onBeforeMount as Ks, defineComponent as Q, createVNode as ee, Teleport as qa, Transition as Le, withDirectives as ke, vShow as Ka, mergeProps as Ve, openBlock as h, createBlock as me, resolveDynamicComponent as Ia, normalizeClass as m, normalizeStyle as K, resolveComponent as te, resolveDirective as Ge, withCtx as fe, createElementVNode as B, renderSlot as G, toDisplayString as _, createElementBlock as V, Fragment as Oe, renderList as Ne, createCommentVNode as J, onUpdated as Bi, createTextVNode as he, pushScopeId as kr, popScopeId as $r, withModifiers as Dn, normalizeProps as pl, guardReactiveProps as Xs, vModelText as Zs, toRefs as Js, withKeys as no, toRaw as ro, TransitionGroup as Qs, Comment as xs } from "vue";
var hl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ie(hl);
const on = Ie(hl), qe = (e) => typeof e == "string", Gt = (e) => typeof e == "boolean", je = (e) => typeof e == "number", Ai = (e) => Object.prototype.toString.call(e) === "[object Object]", _s = (e) => typeof e == "object" && e !== null, Ce = (e) => Array.isArray(e), eu = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, jn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : qe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Gt(e) ? Number(e) : e, bt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, zi = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Li = () => typeof window < "u", ao = (e) => [...new Set(e)], nu = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), ru = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var to = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), io = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), au = (e) => {
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
}, qt = (e) => e, oo = (e) => Math.pow(e, 3), gl = (e) => e < 0.5 ? oo(e * 2) / 2 : 1 - oo((1 - e) * 2) / 2, wt = (e, n) => e == null ? n : e, yl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, gr = function(e, n, r) {
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
function tu(e) {
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
function iu(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function so(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function St(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Fi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function ou(e) {
  return Kt.apply(this, arguments);
}
function Kt() {
  return Kt = tu(function* (e) {
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
  }), Kt.apply(this, arguments);
}
function Lt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Tr(e) {
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
function lu(e) {
  for (var n = [], r = e; r !== window; )
    r = Tr(r), n.push(r);
  return n;
}
var bl = (e) => qe(e) && e.endsWith("rem"), su = (e) => qe(e) && e.endsWith("px") || je(e), uu = (e) => qe(e) && e.endsWith("%"), wl = (e) => qe(e) && e.endsWith("vw"), Sl = (e) => qe(e) && e.endsWith("vh"), du = (e) => qe(e) && e.startsWith("calc("), vu = (e) => qe(e) && e.startsWith("var("), De = (e) => {
  if (je(e))
    return e;
  if (su(e))
    return +e.replace("px", "");
  if (wl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Sl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (bl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return qe(e) ? z(e) : 0;
}, ye = (e) => {
  if (e != null)
    return uu(e) || wl(e) || Sl(e) || bl(e) || du(e) || vu(e) ? e : De(e) + "px";
}, Ze = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = ye(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function Tn(e) {
  var n = yl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function fu(e) {
  var n = yl();
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
function Ra(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = St(e), s = Fi(e);
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
function Cl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + nu(a);
    return n[i] = t, n;
  }, {});
}
function cu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var mu = ["collect", "clear"];
function uo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vo(e) {
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
function pu(e, n) {
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
function hu(e) {
  var n = qs(e), r = document.createElement("div");
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
      return () => ml(e, ut({}, n, r));
    }
  }, {
    unmount: t
  } = hu(a);
  return {
    unmountInstance: t
  };
}
function gu(e) {
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
    var l = gu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    bt(n, l);
  };
  fl(e, {
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
  if (!kl(e))
    return {
      index: null
    };
  var n = cl(e), {
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
    fl(e, ut({
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
  if (!kl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = cl(e), {
    collect: r,
    clear: a
  } = n, t = pu(n, mu), i = (o) => {
    Fe(() => r(o)), Di(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function kl(e) {
  var n = Ma();
  return e in n.provides;
}
function mn() {
  var e = P(""), n = /* @__PURE__ */ function() {
    var t = vo(function* (i, o, l) {
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
    var t = vo(function* (i, o, l, s, u) {
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
function yu(e) {
  Fe(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), ar(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Ri() {
  var e = P(!1);
  return Ii(() => {
    e.value = !1;
  }), Ni(() => {
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
  n: $l
} = ne("ripple"), fo = 250;
function bu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function wu(e, n) {
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
function Tl(e) {
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
      } = wu(this, e), s = document.createElement("div");
      s.classList.add($l()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), bu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Xt() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + $l());
    if (!!r.length) {
      var a = r[r.length - 1], t = fo - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, fo);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Ol() {
  var e = this._ripple;
  !cu() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Su(e, n) {
  var r, a, t;
  e._ripple = dt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : on.touchmoveForbid,
    removeRipple: Xt.bind(e)
  }), e.addEventListener("touchstart", Tl, {
    passive: !0
  }), e.addEventListener("touchmove", Ol, {
    passive: !0
  }), e.addEventListener("dragstart", Xt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Cu(e) {
  e.removeEventListener("touchstart", Tl), e.removeEventListener("touchmove", Ol), e.removeEventListener("dragstart", Xt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function ku(e, n) {
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
  mounted: Su,
  unmounted: Cu,
  updated: ku,
  install(e) {
    e.directive("ripple", this);
  }
};
function $u(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Xa = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: $u
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
function Vl() {
  var e = Object.keys(on.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function Qa(e) {
  on.locks[e] = 1, Vl();
}
function xa(e) {
  delete on.locks[e], Vl();
}
function kt(e, n) {
  var {
    uid: r
  } = Ma();
  n && ae(n, (a) => {
    a === !1 ? xa(r) : a === !0 && e() === !0 && Qa(r);
  }), ae(e, (a) => {
    n && n() === !1 || (a === !0 ? Qa(r) : xa(r));
  }), Ks(() => {
    n && n() === !1 || e() === !0 && Qa(r);
  }), ar(() => {
    n && n() === !1 || e() === !0 && xa(r);
  }), Ii(() => {
    n && n() === !1 || e() === !0 && Qa(r);
  }), Ni(() => {
    n && n() === !1 || e() === !0 && xa(r);
  });
}
function Za(e, n) {
  var r = P(on.zIndex);
  return ae(e, (a) => {
    a && (on.zIndex += n, r.value = on.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function Tu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: En,
  classes: Ft
} = ne("popup");
const bn = Q({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Xa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Za(() => e.show, 3), {
      disabled: i
    } = Ri(), o = () => {
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
    }), yu(() => e.onRouteChange == null ? void 0 : e.onRouteChange());
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ee("div", {
        class: Ft(En("overlay"), d),
        style: Zt({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => ee("div", Ve({
      class: Ft(En("content"), En("--" + e.position), [e.defaultStyle, En("--content-background-color")], [e.defaultStyle, En("$-elevation--3")]),
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
        position: y
      } = e;
      return ee(Le, {
        name: En("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(ee("div", {
          class: Ft(En("$--box"), En()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), ee(Le, {
          name: p || En("$-pop-" + y)
        }, {
          default: () => [f && s()]
        })]), [[Ka, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ee(qa, {
          to: d,
          disabled: i.value
        }, Tu(v = u()) ? v : {
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
var Pl = {
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
function co(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ou(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        co(i, a, t, o, l, "next", s);
      }
      function l(s) {
        co(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Vu,
  classes: Pu
} = ne("icon");
function Eu(e, n) {
  return h(), me(
    Ia(e.isURL(e.name) ? "img" : "i"),
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
  render: Eu,
  name: "VarIcon",
  props: Pl,
  setup(e) {
    var n = P(""), r = P(!1), a = /* @__PURE__ */ function() {
      var t = Ou(function* (i, o) {
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
      n: Vu,
      classes: Pu,
      nextName: n,
      shrinking: r,
      isURL: eu,
      toNumber: z,
      toSizeUnit: ye
    };
  }
});
Te.install = function(e) {
  e.component(Te.name, Te);
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
var Mu = Jt({
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
}, _e(Xa, [
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
const El = {
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
}, Iu = {
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
    e[i] = Qt({}, e[i], o), a(i);
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
  packs: Nu,
  pack: Ye,
  add: Il,
  use: Nl,
  merge: Du
} = Ml();
Il("zh-CN", El);
Nl("zh-CN");
const xt = {
  zhCN: El,
  enUS: Iu,
  packs: Nu,
  pack: Ye,
  add: Il,
  use: Nl,
  merge: Du,
  useLocale: Ml
};
var {
  n: Bu,
  classes: Au
} = ne("action-sheet"), zu = ["onClick"];
function Lu(e, n) {
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
            zu
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
  render: Lu,
  name: "VarActionSheet",
  directives: {
    Ripple: Ue
  },
  components: {
    VarPopup: bn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: Mu,
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
      n: Bu,
      classes: Au,
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
  return Li() ? new Promise((n) => {
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
function Fu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Ru = {
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
    validator: Fu
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
  n: Uu,
  classes: Yu
} = ne("app-bar");
function Wu(e, n) {
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
const Br = Q({
  render: Wu,
  name: "VarAppBar",
  props: Ru,
  setup(e, n) {
    var {
      slots: r
    } = n, a = P(), t = P(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Fe(i), Bi(i), {
      n: Uu,
      classes: Yu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Br.install = function(e) {
  e.component(Br.name, Br);
};
function Hu(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ju(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Gn = {
  type: {
    type: String,
    default: "circle",
    validator: Hu
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: ju
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
  n: Gu,
  classes: qu
} = ne("loading"), Ku = (e) => (kr(""), e = e(), $r(), e), Xu = /* @__PURE__ */ Ku(() => /* @__PURE__ */ B(
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
)), Zu = [Xu];
function Ju(e, n) {
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
          Zu,
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
  render: Ju,
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
      n: Gu,
      classes: qu,
      multiplySizeUnit: Ze,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
$n.install = function(e) {
  e.component($n.name, $n);
};
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
function Qu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function xu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var _u = {
  type: {
    type: String,
    default: "default",
    validator: Qu
  },
  size: {
    type: String,
    default: "normal",
    validator: xu
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
  loadingColor: _t({}, _e(Gn, "color"), {
    default: "currentColor"
  }),
  onClick: {
    type: Function
  },
  onTouchstart: {
    type: Function
  }
}, {
  n: ed,
  classes: nd
} = ne("button"), rd = ["disabled"];
function ad(e, n) {
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
    rd
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const nn = Q({
  render: ad,
  name: "VarButton",
  components: {
    VarLoading: $n
  },
  directives: {
    Ripple: Ue
  },
  props: _u,
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
      n: ed,
      classes: nd,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
nn.install = function(e) {
  e.component(nn.name, nn);
};
var td = {
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
  n: id,
  classes: od
} = ne("back-top");
function ld(e, n) {
  var r = te("var-icon"), a = te("var-button");
  return h(), me(
    qa,
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
const Ar = Q({
  render: ld,
  name: "VarBackTop",
  components: {
    VarButton: nn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: td,
  setup(e) {
    var n = P(!1), r = P(null), a = P(!0), t, i = (u) => {
      N(e.onClick, u);
      var d = Fi(t);
      Ra(t, {
        left: d,
        duration: e.duration,
        animation: gl
      });
    }, o = () => {
      n.value = St(t) >= De(e.visibilityHeight);
    }, l = zi(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (qe(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (_s(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Fe(() => {
      t = e.target ? s() : Tr(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Di(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: ye,
      n: id,
      classes: od,
      click: i
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function sd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function ud(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var dd = {
  type: {
    type: String,
    default: "default",
    validator: sd
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
    validator: ud
  },
  icon: {
    type: String
  }
}, {
  n: An,
  classes: vd
} = ne("badge"), fd = {
  key: 1
};
function cd(e, n) {
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
            fd,
            _(e.values),
            1
          ))],
          16
        ), [[Ka, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), G(e.$slots, "default")],
    2
  );
}
const sr = Q({
  render: cd,
  name: "VarBadge",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: dd,
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
      classes: vd,
      values: t,
      contentClass: a
    };
  }
});
sr.install = function(e) {
  e.component(sr.name, sr);
};
var md = {
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
}, Dl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Bl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function pd() {
  var {
    childProviders: e,
    bindChildren: n
  } = fn(Dl), {
    length: r
  } = Cn(Bl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: hd,
  classes: gd
} = ne("bottom-navigation"), {
  n: $t
} = ne("bottom-navigation-item"), mo = $t("--right-half-space"), po = $t("--left-half-space"), ho = $t("--right-space"), yd = {
  type: "primary"
};
function bd(e, n) {
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
const zr = Q({
  render: bd,
  name: "VarBottomNavigation",
  components: {
    VarButton: nn
  },
  props: md,
  setup(e, n) {
    var {
      slots: r
    } = n, a = P(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = P({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = pd(), v = () => {
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
    }, y = (k) => {
      t.value !== k && (e.onBeforeChange ? g(k) : O(k));
    }, g = (k) => {
      Promise.resolve(N(e.onBeforeChange, k)).then((A) => A && O(k));
    }, O = (k) => {
      N(e["onUpdate:active"], k), N(e.onChange, k);
    }, T = () => {
      var k = E();
      k.forEach((A) => {
        A.classList.remove(mo, po, ho);
      });
    }, S = (k) => {
      var A = E(), I = A.length, C = k % 2 === 0;
      A.forEach(($, L) => {
        b(C, $, L, I);
      });
    }, b = (k, A, I, C) => {
      var $ = I === C - 1;
      if (!k && $) {
        A.classList.add(ho);
        return;
      }
      var L = I === C / 2 - 1, Y = I === C / 2;
      L ? A.classList.add(mo) : Y && A.classList.add(po);
    }, E = () => Array.from(a.value.querySelectorAll("." + $t())), w = () => {
      N(e.onFabClick);
    }, D = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: y
    };
    return d(D), ae(() => s.value, v), ae(() => e.fabProps, (k) => {
      l.value = ei({}, yd, k);
    }, {
      immediate: !0,
      deep: !0
    }), Fe(() => {
      !r.fab || S(s.value);
    }), Bi(() => {
      T(), r.fab && S(s.value);
    }), {
      n: hd,
      classes: gd,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: w,
      fabProps: l
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
var wd = {
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
function Sd() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Dl), {
    index: r
  } = kn(Bl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Cd,
  classes: kd
} = ne("bottom-navigation-item"), $d = {
  type: "danger",
  dot: !0
};
function Td(e, n) {
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
const Lr = Q({
  render: Td,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: sr,
    VarIcon: Te
  },
  directives: {
    Ripple: Ue
  },
  props: wd,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = P({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = Sd(), {
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
      a.value = c === !0 ? $d : r.value;
    }, {
      immediate: !0
    }), {
      n: Cd,
      classes: kd,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
function Od(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Vd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Od,
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
function go(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yo(e) {
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
  n: Pd,
  classes: Ed
} = ne("card"), Md = 500, Id = ["src", "alt"];
function Nd(e, n) {
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
        Id
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
const Fr = Q({
  render: Nd,
  name: "VarCard",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarButton: nn
  },
  props: Vd,
  setup(e) {
    var n = P(null), r = P(null), a = P("auto"), t = P("auto"), i = P("100%"), o = P("100%"), l = P("auto"), s = P("auto"), u = P(void 0), d = P("hidden"), v = P("0px"), f = P("0"), c = W(() => e.layout === "row"), p = P(!1), y = P(!1), {
      zIndex: g
    } = Za(() => e.floating, 1);
    kt(() => e.floating, () => !c.value);
    var O = "auto", T = "auto", S = null, b = P(null), E = /* @__PURE__ */ function() {
      var k = yo(function* () {
        clearTimeout(b.value), clearTimeout(S), b.value = null, b.value = setTimeout(/* @__PURE__ */ yo(function* () {
          var {
            width: A,
            height: I,
            left: C,
            top: $
          } = n.value.getBoundingClientRect();
          a.value = ye(A), t.value = ye(I), i.value = a.value, o.value = t.value, l.value = ye($), s.value = ye(C), u.value = "fixed", O = l.value, T = s.value, p.value = !0, yield On(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? Md : 0);
      });
      return function() {
        return k.apply(this, arguments);
      };
    }(), w = () => {
      clearTimeout(S), clearTimeout(b.value), b.value = null, i.value = a.value, o.value = t.value, l.value = O, s.value = T, v.value = "0px", f.value = "0", p.value = !1, S = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", O = "auto", T = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      N(e["onUpdate:floating"], !1);
    };
    return ae(() => e.floating, (k) => {
      c.value || Pe(() => {
        k ? E() : w();
      });
    }, {
      immediate: !0
    }), {
      n: Pd,
      classes: Ed,
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
      zIndex: g,
      isRow: c,
      close: D,
      showFloatingButtons: p,
      floated: y
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Dd = {
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
  n: Bd,
  classes: Ad
} = ne("cell");
function zd(e, n) {
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
  render: zd,
  name: "VarCell",
  components: {
    VarIcon: Te
  },
  props: Dd,
  setup() {
    return {
      n: Bd,
      classes: Ad
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
var Ld = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Fd
} = ne("form-details"), Rd = {
  key: 0
}, Ud = {
  key: 0
};
function Yd(e, n) {
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
                Rd,
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
                Ud,
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
  render: Yd,
  name: "VarFormDetails",
  props: Ld,
  setup: () => ({
    n: Fd
  })
});
He.install = function(e) {
  e.component(He.name, He);
};
var Wd = {
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
}, Al = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), zl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function Hd() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Al), {
    length: r
  } = Cn(zl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function jd() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(Al), {
    index: r
  } = kn(zl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var Ll = Symbol("FORM_BIND_FORM_ITEM_KEY");
function pn() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(Ll), r = Ma(), a = e ? (t) => {
    e(ni({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function Gd() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Ll);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: qd,
  classes: Kd
} = ne("checkbox");
function Xd(e, n) {
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
  render: Xd,
  name: "VarCheckbox",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: Wd,
  setup(e) {
    var n = P(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = P(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = jd(), {
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
    }, y = (w) => {
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
    }, g = (w) => {
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
    var E = {
      checkedValue: a,
      checked: r,
      sync: g,
      validate: b,
      resetValidation: f,
      reset: T,
      resetWithAnimation: O
    };
    return N(o, E), N(s, E), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: qd,
      classes: Kd,
      handleClick: y,
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
function Zd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Jd = {
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
    validator: Zd
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
  n: Qd,
  classes: xd
} = ne("checkbox-group");
function _d(e, n) {
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
const Rr = Q({
  render: _d,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: He
  },
  props: Jd,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = Hd(), {
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
    }, y = (D) => {
      var {
        modelValue: k
      } = e;
      !k.includes(D) || c(k.filter((A) => A !== D));
    }, g = () => t.forEach((D) => {
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
      }), k = ao(D);
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
      }), k = ao(D);
      return O(), N(e["onUpdate:modelValue"], k), k;
    }, b = () => {
      N(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    ae(() => e.modelValue, g, {
      deep: !0
    }), ae(() => a.value, g);
    var w = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: y,
      validate: E,
      resetValidation: d,
      reset: b,
      errorMessage: v
    };
    return i(w), N(o, w), {
      errorMessage: l,
      n: Qd,
      classes: xd,
      checkAll: T,
      inverseAll: S,
      reset: b,
      validate: E,
      resetValidation: d
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
function ev(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function nv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var rv = {
  type: {
    type: String,
    default: "default",
    validator: ev
  },
  size: {
    type: String,
    default: "normal",
    validator: nv
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: _e(Pl, "name"),
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
  classes: av
} = ne("chip");
function tv(e, n) {
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
  render: tv,
  name: "VarChip",
  components: {
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: rv,
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
      classes: av,
      chipStyles: n,
      contentClass: r
    };
  }
});
vr.install = function(e) {
  e.component(vr.name, vr);
};
function iv(e) {
  return ["row", "column"].includes(e);
}
var ov = {
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
    validator: iv
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
}, Fl = Symbol("ROW_BIND_COL_KEY"), Rl = Symbol("ROW_COUNT_COL_KEY");
function lv() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Fl), {
    length: r
  } = Cn(Rl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function sv() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Fl), {
    index: r
  } = kn(Rl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: _a,
  classes: uv
} = ne("col");
function dv(e, n) {
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
const Ur = Q({
  render: dv,
  name: "VarCol",
  props: ov,
  setup(e) {
    var n = P({
      left: 0,
      right: 0
    }), r = W(() => z(e.span)), a = W(() => z(e.offset)), {
      row: t,
      bindRow: i
    } = sv(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Ai(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(_a("--span-" + s + "-" + f)), v && d.push(_a("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(_a("--span-" + s + "-" + u));
      return d;
    };
    return ae([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), N(i, o), {
      n: _a,
      classes: uv,
      padding: n,
      toNumber: z,
      toSizeUnit: ye,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var Ul = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Yl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function vv() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Ul), {
    length: r
  } = Cn(Yl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var fv = {
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
  n: cv
} = ne("collapse");
function mv(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default")],
    2
  );
}
const Yr = Q({
  render: mv,
  name: "VarCollapse",
  props: fv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = vv(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && Ce(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, p) => o() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((y) => y !== c) : null, s = (c, p) => {
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
          var y = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), ae(() => n.value, () => Pe().then(v)), ae(() => e.modelValue, () => Pe().then(v)), {
      n: cv
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
function pv() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Ul), {
    index: r
  } = kn(Yl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var hv = {
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
  n: gv,
  classes: yv
} = ne("collapse-item");
function bv(e, n) {
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
    ), [[Ka, e.show]])],
    2
  );
}
const Wr = Q({
  render: bv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Te
  },
  props: hv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = pv(), t = !0, i = P(null), o = P(!1), l = P(!1), {
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
    }, y = () => {
      t = !1;
    }, g = () => {
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
      S ? p() : g();
    }), {
      n: gv,
      start: y,
      classes: yv,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: O
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var wv = {
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
  n: Sv
} = ne("countdown"), ri = 1e3, ai = 60 * ri, ti = 60 * ai, bo = 24 * ti;
function Cv(e, n) {
  return h(), V(
    "div",
    {
      class: m(e.n())
    },
    [G(e.$slots, "default", pl(Xs(e.timeData)), () => [he(
      _(e.showTime),
      1
    )])],
    2
  );
}
const Hr = Q({
  render: Cv,
  name: "VarCountdown",
  props: wv,
  setup(e) {
    var n = P(0), r = P(!1), a = P(""), t = P(0), i = P(0), o = P({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, p) => {
      var y = Object.values(p), g = ["DD", "HH", "mm", "ss"], O = [24, 60, 60, 1e3];
      if (g.forEach((S, b) => {
        c.includes(S) ? c = c.replace(S, gr("" + y[b], 2, "0")) : y[b + 1] += y[b] * O[b];
      }), c.includes("S")) {
        var T = gr("" + y[y.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", T) : c.includes("SS") ? c = c.replace("SS", T.slice(0, 2)) : c = c.replace("S", T.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var p = Math.floor(c / bo), y = Math.floor(c % bo / ti), g = Math.floor(c % ti / ai), O = Math.floor(c % ai / ri), T = Math.floor(c % ri), S = {
        days: p,
        hours: y,
        minutes: g,
        seconds: O,
        milliseconds: T
      };
      o.value = S, N(e.onChange, o.value), a.value = l(e.format, S);
    }, u = () => {
      var {
        time: c,
        onEnd: p,
        autoStart: y
      } = e, g = Date.now();
      n.value || (n.value = g + z(c));
      var O = n.value - g;
      if (O < 0 && (O = 0), i.value = O, s(O), O === 0) {
        N(p);
        return;
      }
      (y || r.value) && (t.value = Tn(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, fu(t.value), u();
    };
    return ae(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: Sv,
      start: d,
      pause: v,
      reset: f
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Pr = 9e15, tr = 1e9, ii = "0123456789abcdef", vt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ft = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", oi = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Pr,
  maxE: Pr,
  crypto: !1
}, Wl, Mn, ve = !0, Tt = "[DecimalError] ", er = Tt + "Invalid argument: ", Hl = Tt + "Precision limit exceeded", jl = Tt + "crypto unavailable", Gl = "[object Decimal]", Ke = Math.floor, ze = Math.pow, kv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, $v = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Tv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ql = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, wn = 1e7, ue = 7, Ov = 9007199254740991, Vv = vt.length - 1, li = ft.length - 1, q = { toStringTag: Gl };
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Pv(a, Ql(a, r)), a.precision = e, a.rounding = n, se(Mn == 2 || Mn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
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
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Vt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = $a(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return se(i, o.precision = r, o.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = $a(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Vt(5, e)), t = $a(i, 2, t, t, !0);
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
    if (u.abs().eq(1) && v + 4 <= li)
      return o = yn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= li)
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
  if (ve = !1, l = v + c, o = qn(u, l), a = n ? ct(d, l + 10) : qn(e, l), s = $e(o, a, l, 1), Ua(s.d, t = v, f))
    do
      if (l += 10, o = qn(u, l), a = n ? ct(d, l + 10) : qn(e, l), s = $e(o, a, l, 1), !i) {
        +We(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = se(s, v + 1, 0));
        break;
      }
    while (Ua(s.d, t += 10, f));
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
  return si(this);
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
  return r.d ? (n = Kl(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return se(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + ue, a.rounding = 1, r = Mv(a, Ql(a, r)), a.precision = e, a.rounding = n, se(Mn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
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
      l = i[t] + c[a] * f[t - a - 1] + n, i[t--] = l % wn | 0, n = l / wn | 0;
    i[t] = (i[t] + n) % wn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = Ot(i, r), ve ? se(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return Ui(this, 2, e, n);
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
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, p = c.d, y = c.constructor;
  if (!p)
    return new y(c);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), i = n.e = Kl(p) - c.e - 1, o = i % ue, n.d[0] = ze(10, o < 0 ? ue + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(er + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (ve = !1, l = new y(We(p)), d = y.precision, y.precision = i = p.length * ue * 2; v = $e(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = $e(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = $e(u, a, i, 1).minus(c).abs().cmp($e(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], y.precision = d, ve = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return Ui(this, 16, e, n);
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
  return Ui(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(ze(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return se(l, a, i);
  if (n = Ke(e.e / ue), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Ov)
    return t = Xl(s, l, r, a), e.s < 0 ? new s(1).div(t) : se(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = ze(+l, u), n = r == 0 || !isFinite(r) ? Ke(u * (Math.log("0." + We(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (ve = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = si(e.times(qn(l, a + r)), a), t.d && (t = se(t, a + 5, 1), Ua(t.d, a, i) && (n = a + 10, t = se(si(e.times(qn(l, n + r)), n), n + 5, 1), +We(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = se(t, a + 1, 0)))), t.s = o, ve = !0, s.rounding = i, se(t, a, i));
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
function Ua(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += ue, t = 0) : (t = Math.ceil((n + 1) / ue), n %= ue), i = ze(10, ue - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == ze(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == ze(10, n - 3) - 1, o;
}
function it(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += ii.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Pv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Vt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = $a(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, p, y, g, O, T, S, b, E, w, D, k, A, I, C, $, L = a.constructor, Y = a.s == t.s ? 1 : -1, j = a.d, F = t.d;
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
          f = 0, u = n(F, S, C, b), u < 0 ? (E = S[0], C != b && (E = E * s + (S[1] || 0)), f = E / I | 0, f > 1 ? (f >= s && (f = s - 1), y = e(F, f, s), g = y.length, b = S.length, u = n(y, S, g, b), u == 1 && (f--, r(y, C < g ? $ : F, g, s))) : (f == 0 && (u = f = 1), y = F.slice()), g = y.length, g < b && y.unshift(0), r(S, y, b, s), u == -1 && (b = S.length, u = n(F, S, C, b), u < 1 && (f++, r(S, C < b ? $ : F, b, s))), b = S.length) : u === 0 && (f++, S = [0]), T[v++] = f, u && S[0] ? S[b++] = j[k] || 0 : (S = [j[k]], b = 1);
        while ((k++ < A || S[0] !== void 0) && w--);
        p = S[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (c == 1)
      O.e = d, Wl = p;
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
    return Jl(e);
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
  if (n > Vv)
    throw ve = !0, r && (e.precision = r), Error(Hl);
  return se(new e(vt), n, 1, !0);
}
function yn(e, n, r) {
  if (n > li)
    throw Error(Hl);
  return se(new e(ft), n, r, !0);
}
function Kl(e) {
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
function Xl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / ue + 4);
  for (ve = !1; ; ) {
    if (r % 2 && (i = i.times(n), So(i.d, o) && (t = !0)), r = Ke(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), So(n.d, o);
  }
  return ve = !0, i;
}
function wo(e) {
  return e.d[e.d.length - 1] & 1;
}
function Zl(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function si(e, n) {
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
        if (u < 3 && Ua(o.d, s - a, c, u))
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
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, p = 10, y = e, g = y.d, O = y.constructor, T = O.rounding, S = O.precision;
  if (y.s < 0 || !g || !g[0] || !y.e && g[0] == 1 && g.length == 1)
    return new O(g && !g[0] ? -1 / 0 : y.s != 1 ? NaN : g ? 0 : y);
  if (n == null ? (ve = !1, d = S) : d = n, O.precision = d += p, r = We(g), a = r.charAt(0), Math.abs(i = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = We(y.d), a = r.charAt(0), c++;
    i = y.e, a > 1 ? (y = new O("0." + r), i++) : y = new O(a + "." + r.slice(1));
  } else
    return u = ct(O, d + 2, S).times(i + ""), y = qn(new O(a + "." + r.slice(1)), d - p).plus(u), O.precision = S, n == null ? se(y, S, T, ve = !0) : y;
  for (v = y, s = o = y = $e(y.minus(1), y.plus(1), d, 1), f = se(y.times(y), d, 1), t = 3; ; ) {
    if (o = se(o.times(f), d, 1), u = s.plus($e(o, new O(t), d, 1)), We(u.d).slice(0, d) === We(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(ct(O, d + 2, S).times(i + ""))), s = $e(s, new O(c), d, 1), n == null)
        if (Ua(s.d, d - p, T, l))
          O.precision = d += p, u = o = y = $e(v.minus(1), v.plus(1), d, 1), f = se(y.times(y), d, 1), t = l = 1;
        else
          return se(s, O.precision = S, T, ve = !0);
      else
        return O.precision = S, s;
    s = u, t += 2;
  }
}
function Jl(e) {
  return String(e.s * e.s / 0);
}
function ui(e, n) {
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
function Ev(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), ql.test(n))
      return ui(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if ($v.test(n))
    r = 16, n = n.toLowerCase();
  else if (kv.test(n))
    r = 2;
  else if (Tv.test(n))
    r = 8;
  else
    throw Error(er + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Xl(a, new a(r), i, i * 2)), u = it(n, r, wn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Ot(u, d), e.d = u, ve = !1, o && (e = $e(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? ze(2, s) : Kn.pow(2, s))), ve = !0, e);
}
function Mv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : $a(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Vt(5, r)), n = $a(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function $a(e, n, r, a, t) {
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
function Ql(e, n) {
  var r, a = n.s < 0, t = yn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return Mn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Mn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return Mn = wo(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Mn = wo(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Ui(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor, p = r !== void 0;
  if (p ? (rn(r, 1, tr), a === void 0 ? a = c.rounding : rn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Jl(e);
  else {
    for (d = Vn(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = it(Vn(f), 10, t), f.e = f.d.length), v = it(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = $e(e, f, r, a, 0, t), v = e.d, i = e.e, u = Wl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += ii.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = it(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += ii.charAt(v[o]);
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
function So(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Iv(e) {
  return new this(e).abs();
}
function Nv(e) {
  return new this(e).acos();
}
function Dv(e) {
  return new this(e).acosh();
}
function Bv(e, n) {
  return new this(e).plus(n);
}
function Av(e) {
  return new this(e).asin();
}
function zv(e) {
  return new this(e).asinh();
}
function Lv(e) {
  return new this(e).atan();
}
function Fv(e) {
  return new this(e).atanh();
}
function Rv(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = yn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? yn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = yn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan($e(e, n, i, 1)), n = yn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan($e(e, n, i, 1)), r;
}
function Uv(e) {
  return new this(e).cbrt();
}
function Yv(e) {
  return se(e = new this(e), e.e + 1, 2);
}
function Wv(e, n, r) {
  return new this(e).clamp(n, r);
}
function Hv(e) {
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
    -Pr,
    0,
    "toExpPos",
    0,
    Pr,
    "maxE",
    0,
    Pr,
    "minE",
    -Pr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = oi[r]), (a = e[r]) !== void 0)
      if (Ke(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(er + r + ": " + a);
  if (r = "crypto", t && (this[r] = oi[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(jl);
      else
        this[r] = !1;
    else
      throw Error(er + r + ": " + a);
  return this;
}
function jv(e) {
  return new this(e).cos();
}
function Gv(e) {
  return new this(e).cosh();
}
function xl(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, Co(i)) {
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
      return ui(u, i.toString());
    } else if (s !== "string")
      throw Error(er + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), ql.test(i) ? ui(u, i) : Ev(u, i);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = Hv, t.clone = xl, t.isDecimal = Co, t.abs = Iv, t.acos = Nv, t.acosh = Dv, t.add = Bv, t.asin = Av, t.asinh = zv, t.atan = Lv, t.atanh = Fv, t.atan2 = Rv, t.cbrt = Uv, t.ceil = Yv, t.clamp = Wv, t.cos = jv, t.cosh = Gv, t.div = qv, t.exp = Kv, t.floor = Xv, t.hypot = Zv, t.ln = Jv, t.log = Qv, t.log10 = _v, t.log2 = xv, t.max = ef, t.min = nf, t.mod = rf, t.mul = af, t.pow = tf, t.random = of, t.round = lf, t.sign = sf, t.sin = uf, t.sinh = df, t.sqrt = vf, t.sub = ff, t.sum = cf, t.tan = mf, t.tanh = pf, t.trunc = hf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function qv(e, n) {
  return new this(e).div(n);
}
function Kv(e) {
  return new this(e).exp();
}
function Xv(e) {
  return se(e = new this(e), e.e + 1, 3);
}
function Zv() {
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
function Co(e) {
  return e instanceof Kn || e && e.toStringTag === Gl || !1;
}
function Jv(e) {
  return new this(e).ln();
}
function Qv(e, n) {
  return new this(e).log(n);
}
function xv(e) {
  return new this(e).log(2);
}
function _v(e) {
  return new this(e).log(10);
}
function ef() {
  return Zl(this, arguments, "lt");
}
function nf() {
  return Zl(this, arguments, "gt");
}
function rf(e, n) {
  return new this(e).mod(n);
}
function af(e, n) {
  return new this(e).mul(n);
}
function tf(e, n) {
  return new this(e).pow(n);
}
function of(e) {
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
      throw Error(jl);
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
function lf(e) {
  return se(e = new this(e), e.e + 1, this.rounding);
}
function sf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function uf(e) {
  return new this(e).sin();
}
function df(e) {
  return new this(e).sinh();
}
function vf(e) {
  return new this(e).sqrt();
}
function ff(e, n) {
  return new this(e).sub(n);
}
function cf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (ve = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return ve = !0, se(r, this.precision, this.rounding);
}
function mf(e) {
  return new this(e).tan();
}
function pf(e) {
  return new this(e).tanh();
}
function hf(e) {
  return se(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var Kn = q.constructor = xl(oi);
vt = new Kn(vt);
ft = new Kn(ft);
var gf = {
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
  n: yf,
  classes: bf
} = ne("counter"), ko = 100, $o = 600, wf = ["inputmode", "readonly", "disabled"];
function Sf(e, n) {
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
        wf
      ), [[Zs, e.inputValue]]), ke(ee(
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
const jr = Q({
  render: Sf,
  name: "VarCounter",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  inheritAttrs: !1,
  props: gf,
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
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), y = (F) => {
      Pe(() => {
        var {
          validateTrigger: Z,
          rules: H,
          modelValue: X
        } = e;
        u(Z, F, H, X);
      });
    }, g = () => {
      var {
        min: F
      } = e;
      N(e["onUpdate:modelValue"], F != null ? z(F) : 0), v();
    }, O = {
      reset: g,
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
      } = e, M = z(F);
      return H != null && M > z(H) && (M = z(H)), X != null && M < z(X) && (M = z(X)), F = String(M), Z != null && (F = M.toFixed(z(Z))), F;
    }, E = (F) => {
      var {
        lazyChange: Z,
        onBeforeChange: H
      } = e, {
        value: X
      } = F.target, M = b(X);
      Z ? N(H, z(M), j) : Y(M), y("onInputChange");
    }, w = () => {
      var {
        disabled: F,
        readonly: Z,
        disableDecrement: H,
        decrementButton: X,
        lazyChange: M,
        step: R,
        modelValue: U,
        onDecrement: x,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || F || Z || H || !X) && !S.value) {
        var le = new Kn(z(U)).minus(new Kn(z(R))).toString(), de = b(le), we = z(de);
        N(x, we), M ? N(ie, we, j) : (Y(de), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: F,
        readonly: Z,
        disableIncrement: H,
        incrementButton: X,
        lazyChange: M,
        step: R,
        modelValue: U,
        onIncrement: x,
        onBeforeChange: ie
      } = e;
      if (!(c != null && c.value || f != null && f.value || F || Z || H || !X) && !T.value) {
        var le = new Kn(z(U)).plus(new Kn(z(R))).toString(), de = b(le), we = z(de);
        N(x, we), M ? N(ie, we, j) : (Y(de), y("onIncrement"));
      }
    }, k = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (i = window.setTimeout(() => {
        L();
      }, $o));
    }, A = () => {
      var {
        press: F,
        lazyChange: Z
      } = e;
      !F || Z || (t = window.setTimeout(() => {
        $();
      }, $o));
    }, I = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, C = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, $ = () => {
      r = window.setTimeout(() => {
        D(), $();
      }, ko);
    }, L = () => {
      a = window.setTimeout(() => {
        w(), L();
      }, ko);
    }, Y = (F) => {
      n.value = F;
      var Z = z(F);
      N(e["onUpdate:modelValue"], Z);
    }, j = (F) => {
      Y(b(String(F))), y("onLazyChange");
    };
    return N(o, O), ae(() => e.modelValue, (F) => {
      Y(b(String(F))), N(e.onChange, z(F));
    }), Y(b(String(e.modelValue))), {
      n: yf,
      classes: bf,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: T,
      isMin: S,
      validate: p,
      reset: g,
      resetValidation: v,
      handleChange: E,
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
jr.install = function(e) {
  e.component(jr.name, jr);
};
var _l = 60, es = _l * 60, ns = es * 24, Cf = ns * 7, Ta = 1e3, Rt = _l * Ta, To = es * Ta, kf = ns * Ta, $f = Cf * Ta, Yi = "millisecond", Er = "second", Mr = "minute", Ir = "hour", Rn = "day", ot = "week", gn = "month", rs = "quarter", Un = "year", Nr = "date", Tf = "YYYY-MM-DDTHH:mm:ssZ", Oo = "Invalid Date", Of = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Vf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Pf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var di = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Ef = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + di(t, 2, "0") + ":" + di(i, 2, "0");
}, Mf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, gn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), gn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, If = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Nf = function(n) {
  var r = {
    M: gn,
    y: Un,
    w: ot,
    d: Rn,
    D: Nr,
    h: Ir,
    m: Mr,
    s: Er,
    ms: Yi,
    Q: rs
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Df = function(n) {
  return n === void 0;
};
const Bf = {
  s: di,
  z: Ef,
  m: Mf,
  a: If,
  p: Nf,
  u: Df
};
var za = "en", fr = {};
fr[za] = Pf;
var Wi = function(n) {
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
  if (Wi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Pt(a);
}, Af = function(n, r) {
  return re(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, Se = Bf;
Se.l = mt;
Se.i = Wi;
Se.w = Af;
var zf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (Se.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Of);
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
    this.$d = zf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return Se;
  }, n.isValid = function() {
    return this.$d.toString() !== Oo;
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
      case ot: {
        var p = this.$locale().weekStart || 0, y = (d < p ? d + 7 : d) - p;
        return s(o ? f - y : f + (6 - y), v);
      }
      case Rn:
      case Nr:
        return u(c + "Hours", 0);
      case Ir:
        return u(c + "Minutes", 1);
      case Mr:
        return u(c + "Seconds", 2);
      case Er:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = Se.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Rn] = l + "Date", i[Nr] = l + "Date", i[gn] = l + "Month", i[Un] = l + "FullYear", i[Ir] = l + "Hours", i[Mr] = l + "Minutes", i[Er] = l + "Seconds", i[Yi] = l + "Milliseconds", i)[o], u = o === Rn ? this.$D + (t - this.$W) : t;
    if (o === gn || o === Un) {
      var d = this.clone().set(Nr, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Nr, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === ot)
      return s(7);
    var u = (o = {}, o[Mr] = Rt, o[Ir] = To, o[Er] = Ta, o)[l] || 1, d = this.$d.getTime() + a * u;
    return Se.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || Oo;
    var o = a || Tf, l = Se.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, p = function(S, b, E, w) {
      return S && (S[b] || S(t, o)) || E[b].slice(0, w);
    }, y = function(S) {
      return Se.s(s % 12 || 12, S, "0");
    }, g = c || function(T, S, b) {
      var E = T < 12 ? "AM" : "PM";
      return b ? E.toLowerCase() : E;
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
      h: y(1),
      hh: y(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: Se.s(u, 2, "0"),
      s: String(this.$s),
      ss: Se.s(this.$s, 2, "0"),
      SSS: Se.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(Vf, function(T, S) {
      return S || O[T] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = Se.p(t), s = re(a), u = (s.utcOffset() - this.utcOffset()) * Rt, d = this - s, v = Se.m(this, s);
    return v = (o = {}, o[Un] = v / 12, o[gn] = v, o[rs] = v / 3, o[ot] = (d - u) / $f, o[Rn] = (d - u) / kf, o[Ir] = d / To, o[Mr] = d / Rt, o[Er] = d / Ta, o)[l] || d, i ? v : Se.a(v);
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
}(), as = Pt.prototype;
re.prototype = as;
[["$ms", Yi], ["$s", Er], ["$m", Mr], ["$H", Ir], ["$W", Rn], ["$M", gn], ["$y", Un], ["$D", Nr]].forEach(function(e) {
  as[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
re.extend = function(e, n) {
  return e.$i || (e(n, Pt, re), e.$i = !0), re;
};
re.locale = mt;
re.isDayjs = Wi;
re.unix = function(e) {
  return re(e * 1e3);
};
re.en = fr[za];
re.Ls = fr;
re.p = {};
const ts = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, is = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Lf(e) {
  return ["date", "month"].includes(e);
}
var lt = [{
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
}], Ff = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Lf
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
  n: Rf
} = ne("picker-header");
function Uf(e, n) {
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
const os = Q({
  render: Uf,
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
      n: Rf,
      reverse: a,
      showDate: i,
      checkDate: o
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
re.extend(ts);
re.extend(is);
var {
  n: et,
  classes: Yf
} = ne("month-picker"), {
  n: nt
} = ne("date-picker");
function Wf(e, n) {
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
              }, vi({}, e.buttonProps(t.index)), {
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
const Hf = Q({
  render: Wf,
  name: "MonthPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: os
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
          max: E
        }
      } = e, w = !0, D = !0, k = S + "-" + T;
      return E && (w = re(k).isSameOrBefore(re(E), "month")), b && (D = re(k).isSameOrAfter(re(b), "month")), w && D;
    }, c = (T) => {
      var {
        choose: {
          chooseMonths: S,
          chooseDays: b,
          chooseRangeMonth: E
        },
        componentProps: {
          type: w,
          range: D
        }
      } = e;
      if (D) {
        if (!E.length)
          return !1;
        var k = re(T).isSameOrBefore(re(E[1]), "month"), A = re(T).isSameOrAfter(re(E[0]), "month");
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
          allowedDates: E,
          color: w,
          multiple: D,
          range: k
        }
      } = e, A = b + "-" + T, I = () => k || D ? c(A) : (S == null ? void 0 : S.index) === T && u.value, C = () => f(T) ? E ? !E(A) : !1 : !0, $ = C(), L = () => $ ? !0 : k || D ? !c(A) : !u.value || (S == null ? void 0 : S.index) !== T, Y = () => d.value && t === T && e.componentProps.showCurrent ? (k || D || u.value) && $ ? !0 : k || D ? !c(A) : u.value ? (S == null ? void 0 : S.index) !== t : !0 : !1, j = () => $ ? "" : Y() ? w != null ? w : "" : I() ? "" : nt() + "-color-cover", F = j().startsWith(nt());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : w,
        textColor: F ? "" : j(),
        [nt() + "-color-cover"]: F,
        class: Yf(et("button"), [$, et("button--disabled")])
      };
    }, y = (T, S) => {
      var b = S.currentTarget;
      b.classList.contains(et("button--disabled")) || r("choose-month", T);
    }, g = (T) => {
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
      n: et,
      nDate: nt,
      pack: Ye,
      MONTH_LIST: lt,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: O,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: g
    };
  }
});
var {
  n: Vo,
  classes: jf
} = ne("year-picker"), Gf = ["onClick"];
function qf(e, n) {
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
        Gf
      ))),
      128
    ))],
    2
  );
}
const Kf = Q({
  render: qf,
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
      var i = document.querySelector("." + Vo("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: Vo,
      classes: jf,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
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
re.extend(ts);
re.extend(is);
var {
  n: Vr,
  classes: Xf
} = ne("day-picker"), {
  n: rt
} = ne("date-picker");
function Zf(e, n) {
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
                }, fi({}, e.buttonProps(t)), {
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
const Jf = Q({
  render: Zf,
  name: "DayPickerPanel",
  components: {
    VarButton: nn,
    PanelHeader: os
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
    }, y = (k) => k > 0 ? k : "", g = () => {
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
          class: Vr("button")
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
      } = e, F = I + "-" + C.index + "-" + k, Z = () => j || Y ? S(F) : z(A) === k && f.value, H = () => T(k) ? $ ? !$(F) : !1 : !0, X = H(), M = () => X ? !0 : j || Y ? !S(F) : !f.value || z(A) !== k, R = () => v.value && z(i) === k && e.componentProps.showCurrent ? (j || Y || f.value) && X ? !0 : j || Y ? !S(F) : f.value ? A !== i : !0 : !1, U = () => X ? "" : R() ? L != null ? L : "" : Z() ? "" : rt() + "-color-cover", x = U().startsWith(rt());
      return {
        text: M(),
        outline: R(),
        textColor: x ? "" : U(),
        [rt() + "-color-cover"]: x,
        class: Xf(Vr("button"), Vr("button--usable"), [X, Vr("button--disabled")])
      };
    }, E = (k) => {
      l.value = k === "prev", s.value += k === "prev" ? -1 : 1, r("check-preview", "month", k);
    }, w = (k, A) => {
      var I = A.currentTarget;
      I.classList.contains(Vr("button--disabled")) || r("choose-day", k);
    }, D = (k) => {
      u.value.checkDate(k);
    };
    return Fe(() => {
      g(), O();
    }), ae(() => e.preview, () => {
      g(), O();
    }), {
      n: Vr,
      nDate: rt,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: p,
      checkDate: E,
      chooseDay: w,
      buttonProps: b
    };
  }
});
var {
  n: Qf,
  classes: xf
} = ne("date-picker");
function _f(e, n) {
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
              )]) : G(e.$slots, "date", pl(Ve({
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
const Gr = Q({
  render: _f,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: Hf,
    YearPickerPanel: Kf,
    DayPickerPanel: Jf
  },
  props: Ff,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = re().format("YYYY-MM-D"), [o, l] = i.split("-"), s = lt.find((oe) => oe.index === l), u = P(!1), d = P(!1), v = P(!0), f = P(), c = P(), p = P(), y = P(s), g = P(o), O = P(!1), T = P([]), S = P([]), b = P([]), E = P([]), w = P(null), D = P(null), k = Ie({
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
      chooseRangeDay: E.value
    })), I = W(() => ({
      previewMonth: y.value,
      previewYear: g.value
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
        range: Be
      } = e;
      if (Be) {
        var Xe = E.value.map((zt) => re(zt).format("YYYY-MM-DD"));
        return Xe.length ? Xe[0] + " ~ " + Xe[1] : "";
      }
      if (be)
        return "" + S.value.length + Ye.value.datePickerSelected;
      if (!c.value || !f.value || !p.value)
        return "";
      var sn = re(c.value + "-" + f.value.index + "-" + p.value).day(), Or = Aa.find((zt) => zt.index === "" + sn), eo = (oe = (pe = Ye.value.datePickerWeekDict) == null ? void 0 : pe[Or.index].name) != null ? oe : "", js = (ce = (ge = Ye.value.datePickerMonthDict) == null ? void 0 : ge[f.value.index].name) != null ? ce : "", Gs = gr(p.value, 2, "0");
      return Ye.value.lang === "zh-CN" ? f.value.index + "-" + Gs + " " + eo.slice(0, 3) : eo.slice(0, 3) + ", " + js.slice(0, 3) + " " + p.value;
    }), L = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(L.value)), j = W(() => {
      var oe, pe, ce, ge, be = re(c.value + "-" + ((oe = f.value) == null ? void 0 : oe.index) + "-" + p.value).day(), Be = p.value ? gr(p.value, 2, "0") : "";
      return {
        week: "" + be,
        year: (pe = c.value) != null ? pe : "",
        month: (ce = (ge = f.value) == null ? void 0 : ge.index) != null ? ce : "",
        date: Be
      };
    }), F = W(() => A.value.chooseRangeDay.map((oe) => re(oe).format("YYYY-MM-DD"))), Z = W(() => c.value === g.value), H = W(() => {
      var oe;
      return ((oe = f.value) == null ? void 0 : oe.index) === y.value.index;
    }), X = (oe) => {
      oe === "year" ? u.value = !0 : oe === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, M = (oe) => {
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
          oe.value.forwardRef(a), _i();
        });
      }
    }, ie = (oe, pe) => {
      var ce = pe === "month" ? b : E;
      if (ce.value = v.value ? [oe, oe] : [ce.value[0], oe], v.value = !v.value, v.value) {
        var ge = re(ce.value[0]).isAfter(ce.value[1]), be = ge ? [ce.value[1], ce.value[0]] : [...ce.value];
        N(e["onUpdate:modelValue"], be), N(e.onChange, be);
      }
    }, le = (oe, pe) => {
      var ce = pe === "month" ? T : S, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-DD", be = ce.value.map((Xe) => re(Xe).format(ge)), Be = be.findIndex((Xe) => Xe === oe);
      Be === -1 ? be.push(oe) : be.splice(Be, 1), N(e["onUpdate:modelValue"], be), N(e.onChange, be);
    }, de = (oe, pe) => !c.value || !f.value ? !1 : Z.value ? oe === "month" ? pe.index < f.value.index : H.value ? pe < z(p.value) : f.value.index > y.value.index : c.value > g.value, we = (oe) => {
      var {
        readonly: pe,
        range: ce,
        multiple: ge,
        onChange: be,
        "onUpdate:modelValue": Be
      } = e;
      if (!(oe < 0 || pe)) {
        O.value = de("day", oe);
        var Xe = g.value + "-" + y.value.index + "-" + oe, sn = re(Xe).format("YYYY-MM-DD");
        ce ? ie(sn, "day") : ge ? le(sn, "day") : (N(Be, sn), N(be, sn));
      }
    }, Re = (oe) => {
      var {
        type: pe,
        readonly: ce,
        range: ge,
        multiple: be,
        onChange: Be,
        onPreview: Xe,
        "onUpdate:modelValue": sn
      } = e;
      if (O.value = de("month", oe), pe === "month" && !ce) {
        var Or = g.value + "-" + oe.index;
        ge ? ie(Or, "month") : be ? le(Or, "month") : (N(sn, Or), N(Be, Or));
      } else
        y.value = oe, N(Xe, z(g.value), z(y.value.index));
      d.value = !1;
    }, Qe = (oe) => {
      g.value = "" + oe, u.value = !1, d.value = !0, N(e.onPreview, z(g.value), z(y.value.index));
    }, Ee = (oe, pe) => {
      var ce = pe === "prev" ? -1 : 1;
      if (oe === "year")
        g.value = "" + (z(g.value) + ce);
      else {
        var ge = z(y.value.index) + ce;
        ge < 1 && (g.value = "" + (z(g.value) - 1), ge = 12), ge > 12 && (g.value = "" + (z(g.value) + 1), ge = 1), y.value = lt.find((be) => z(be.index) === ge);
      }
      N(e.onPreview, z(g.value), z(y.value.index));
    }, ln = () => (e.multiple || e.range) && !Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && Ce(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, At = (oe) => Ce(oe) ? !1 : oe === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ys = (oe, pe) => {
      var ce = pe === "month" ? b : E, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", be = oe.map((sn) => re(sn).format(ge)).slice(0, 2), Be = ce.value.some((sn) => At(sn));
      if (!Be) {
        ce.value = be;
        var Xe = re(ce.value[0]).isAfter(ce.value[1]);
        ce.value.length === 2 && Xe && (ce.value = [ce.value[1], ce.value[0]]);
      }
    }, Ws = (oe, pe) => {
      var ce = pe === "month" ? T : S, ge = pe === "month" ? "YYYY-MM" : "YYYY-MM-D", be = Array.from(new Set(oe.map((Be) => re(Be).format(ge))));
      ce.value = be.filter((Be) => Be !== "Invalid Date");
    }, Hs = (oe) => {
      var pe = re(oe).format("YYYY-MM-D");
      if (!At(pe)) {
        var [ce, ge, be] = pe.split("-"), Be = lt.find((Xe) => Xe.index === ge);
        f.value = Be, c.value = ce, p.value = be, y.value = Be, g.value = ce;
      }
    }, _i = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return ae(() => e.modelValue, (oe) => {
      if (!(!ln() || At(oe) || !oe))
        if (e.range) {
          if (!Ce(oe))
            return;
          v.value = oe.length !== 1, Ys(oe, e.type);
        } else if (e.multiple) {
          if (!Ce(oe))
            return;
          Ws(oe, e.type);
        } else
          Hs(oe);
    }, {
      immediate: !0
    }), ae(L, _i), {
      n: Qf,
      classes: xf,
      monthPanelEl: w,
      dayPanelEl: D,
      reverse: O,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: p,
      previewYear: g,
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
      handleTouchstart: M,
      handleTouchmove: U,
      handleTouchend: x,
      getChooseDay: we,
      getChooseMonth: Re,
      getChooseYear: Qe,
      checkPreview: Ee
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
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
function ec(e) {
  return ["left", "center", "right"].includes(e);
}
var nc = ci({
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
    validator: ec
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
}, _e(Xa, [
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
var {
  n: rc,
  classes: ac
} = ne("dialog");
function tc(e, n) {
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
          style: mi({
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
  render: tc,
  name: "VarDialog",
  components: {
    VarPopup: bn,
    VarButton: nn
  },
  inheritAttrs: !1,
  props: nc,
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
      n: rc,
      classes: ac,
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
  return Li() ? new Promise((n) => {
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
var ic = {
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
function Dr() {
  return Dr = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Dr.apply(this, arguments);
}
var {
  n: oc,
  classes: lc
} = ne("divider");
function sc(e, n) {
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
const qr = Q({
  render: sc,
  name: "VarDivider",
  props: ic,
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
        return Dr({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Dr({}, d, {
        height: "calc(80% - " + ye(f) + ")"
      }) : Dr({}, d, {
        width: "calc(100% - " + ye(f) + ")",
        left: v > 0 ? ye(f) : ye(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Fe(() => {
      o();
    }), Bi(() => {
      o();
    }), Dr({
      n: oc,
      classes: lc
    }, Js(a), {
      style: i,
      isInset: t
    });
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
function uc(e) {
  return ["start", "end"].includes(e);
}
var dc = {
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
    validator: uc
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
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
function vc(e) {
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
var {
  n: fc
} = ne("form");
function cc(e, n) {
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
  render: cc,
  name: "VarForm",
  props: dc,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = Gd(), i = (d, v) => {
      d !== -1 && v && setTimeout(() => {
        var f = Tr(v), c = f === window ? 0 : so(f), p = so(v) - c - De(e.scrollToErrorOffsetY);
        Ra(f, {
          top: p,
          animation: qt
        });
      }, 300);
    }, o = /* @__PURE__ */ function() {
      var d = vc(function* () {
        var v, f = yield Promise.all(a.map((g) => {
          var {
            validate: O
          } = g;
          return O();
        })), [c, p] = ru(f, (g) => g === !1, e.scrollToError), y = (v = a[p].instance.proxy) == null ? void 0 : v.$el;
        return i(p, y), !!c;
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
      n: fc,
      validate: o,
      reset: l,
      resetValidation: s
    };
  }
});
Xn.install = function(e) {
  e.component(Xn.name, Xn);
};
Xn.useValidation = mn;
Xn.useForm = pn;
function Eo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Et(e) {
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
function pi() {
  return pi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, pi.apply(this, arguments);
}
var mc = "background-image", pc = "lazy-loading", hc = "lazy-error", Mo = "lazy-attempt", gc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], hi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Oa = [], pt = [], ls = au(100), Ae = {
  loading: hi,
  error: hi,
  attempt: 3,
  throttleWait: 300,
  events: gc
}, Hi = zi(Ja, Ae.throttleWait);
function Mt(e, n) {
  e._lazy.arg === mc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function yc(e) {
  e._lazy.loading && Mt(e, e._lazy.loading), Ja();
}
function bc(e) {
  e._lazy.error && Mt(e, e._lazy.error), e._lazy.state = "error", Gi(e), Ja();
}
function ss(e, n) {
  Mt(e, n), e._lazy.state = "success", Gi(e), Ja();
}
function wc(e) {
  var n;
  pt.includes(e) || (pt.push(e), (n = Ae.events) == null || n.forEach((r) => {
    e.addEventListener(r, Hi, {
      passive: !0
    });
  }));
}
function Sc() {
  pt.forEach((e) => {
    var n;
    (n = Ae.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Hi);
    });
  }), pt.length = 0;
}
function Cc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(pc)) != null ? r : Ae.loading,
    error: (a = e.getAttribute(hc)) != null ? a : Ae.error,
    attempt: e.getAttribute(Mo) ? Number(e.getAttribute(Mo)) : Ae.attempt
  };
  e._lazy = pi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Mt(e, hi), N(Ae.filter, e._lazy);
}
function kc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ls.add(n), ss(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? bc(e) : us(e);
  });
}
function us(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ls.has(n)) {
      ss(e, n), e._lazy.attemptLock = !1;
      return;
    }
    yc(e), kc(e, n);
  }
}
function ji(e) {
  return gi.apply(this, arguments);
}
function gi() {
  return gi = Et(function* (e) {
    (yield ou(e)) && us(e);
  }), gi.apply(this, arguments);
}
function Ja() {
  Oa.forEach((e) => ji(e));
}
function $c(e) {
  return yi.apply(this, arguments);
}
function yi() {
  return yi = Et(function* (e) {
    !Oa.includes(e) && Oa.push(e), lu(e).forEach(wc), yield ji(e);
  }), yi.apply(this, arguments);
}
function Gi(e) {
  bt(Oa, e), Oa.length === 0 && Sc();
}
function Tc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ds(e, n) {
  return bi.apply(this, arguments);
}
function bi() {
  return bi = Et(function* (e, n) {
    Cc(e, n), yield $c(e);
  }), bi.apply(this, arguments);
}
function Oc(e, n) {
  return wi.apply(this, arguments);
}
function wi() {
  return wi = Et(function* (e, n) {
    if (!Tc(e, n)) {
      Oa.includes(e) && (yield ji(e));
      return;
    }
    yield ds(e, n);
  }), wi.apply(this, arguments);
}
function Vc(e) {
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
var ht = {
  mounted: ds,
  unmounted: Gi,
  updated: Oc,
  install(e, n) {
    Vc(n), Hi = zi(Ja, Ae.throttleWait), e.directive("lazy", this);
  }
};
function Pc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Ec = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Pc,
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
  n: Mc,
  classes: Ic
} = ne("image"), Nc = ["alt", "title", "lazy-error", "lazy-loading"], Dc = ["alt", "title", "src"];
function Bc(e, n) {
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
      Nc
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
      Dc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Kr = Q({
  render: Bc,
  name: "VarImage",
  directives: {
    Lazy: ht,
    Ripple: Ue
  },
  props: Ec,
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
      n: Mc,
      classes: Ic,
      toSizeUnit: ye,
      handleLoad: n,
      handleError: r
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var vs = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), fs = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function Ac() {
  var {
    childProviders: e,
    bindChildren: n
  } = fn(vs), {
    length: r
  } = Cn(fs);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var cs = {
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
function Io(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zc(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Io(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Io(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var Lc = 250, Fc = 20, {
  n: Rc,
  classes: Uc
} = ne("swipe"), Yc = ["onClick"];
function Wc(e, n) {
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
          Yc
        ))),
        128
      ))],
      2
    )) : J("v-if", !0)])],
    2
  );
}
const Zn = Q({
  render: Wc,
  name: "VarSwipe",
  props: cs,
  setup(e) {
    var n = P(null), r = P(0), a = W(() => e.vertical), t = P(0), i = P(0), o = P(!1), l = P(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = Ac(), v = !1, f = -1, c, p, y, g, O, T = (M) => s.find((R) => {
      var {
        index: U
      } = R;
      return U.value === M;
    }), S = () => {
      !e.loop || (i.value >= 0 && T(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && T(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (T(d.value - 1).setTranslate(0), T(0).setTranslate(0)));
    }, b = (M) => {
      var R = je(M) ? M : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: U
      } = e;
      return R <= -1 ? U ? -1 : 0 : R >= d.value ? U ? d.value : d.value - 1 : R;
    }, E = (M) => {
      var {
        loop: R
      } = e;
      return M === -1 ? R ? d.value - 1 : 0 : M === d.value ? R ? 0 : d.value - 1 : M;
    }, w = (M) => {
      var {
        loop: R
      } = e;
      return M < 0 ? R ? d.value - 1 : 0 : M > d.value - 1 ? R ? 0 : d.value - 1 : M;
    }, D = (M) => {
      var R = i.value >= r.value, U = i.value <= -t.value, x = 0, ie = -(t.value - r.value);
      o.value = !0, (R || U) && (o.value = !0, i.value = U ? x : ie, T(0).setTranslate(0), T(d.value - 1).setTranslate(0)), Ct(() => {
        o.value = !1, N(M);
      });
    }, k = () => {
      l.value = w(z(e.initialIndex));
    }, A = () => {
      var {
        autoplay: M
      } = e;
      !M || d.value <= 1 || (I(), f = window.setTimeout(() => {
        F(), A();
      }, z(M)));
    }, I = () => {
      f && clearTimeout(f);
    }, C = (M, R) => {
      if (M > R && M > 10)
        return "horizontal";
      if (R > M && R > 10)
        return "vertical";
    }, $ = (M) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: R,
          clientY: U
        } = M.touches[0];
        c = R, p = U, y = performance.now(), v = !0, I(), D(() => {
          o.value = !0;
        });
      }
    }, L = (M) => {
      var {
        touchable: R,
        vertical: U
      } = e;
      if (!(!v || !R)) {
        var {
          clientX: x,
          clientY: ie
        } = M.touches[0], le = Math.abs(x - c), de = Math.abs(ie - p), we = C(le, de), Re = U ? "vertical" : "horizontal";
        if (we === Re) {
          M.preventDefault();
          var Qe = g !== void 0 ? x - g : 0, Ee = O !== void 0 ? ie - O : 0;
          g = x, O = ie, i.value += U ? Ee : Qe, S();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: M,
          onChange: R
        } = e, U = M ? O < p : g < c, x = Math.abs(M ? p - O : c - g), ie = performance.now() - y <= Lc && x >= Fc, le = ie ? b(U ? l.value + 1 : l.value - 1) : b();
        v = !1, o.value = !1, g = void 0, O = void 0, i.value = le * -r.value;
        var de = l.value;
        l.value = E(le), A(), de !== l.value && N(R, l.value);
      }
    }, j = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((M) => {
        M.setTranslate(0);
      }), A(), setTimeout(() => {
        o.value = !1;
      });
    }, F = () => {
      if (!(d.value <= 1)) {
        var {
          loop: M,
          onChange: R
        } = e, U = l.value;
        l.value = w(U + 1), N(R, l.value), D(() => {
          if (U === d.value - 1 && M) {
            T(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          U !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, Z = () => {
      if (!(d.value <= 1)) {
        var {
          loop: M,
          onChange: R
        } = e, U = l.value;
        l.value = w(U - 1), N(R, l.value), D(() => {
          if (U === 0 && M) {
            T(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          U !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, H = (M) => {
      if (!(d.value <= 1 || M === l.value)) {
        M = M < 0 ? 0 : M, M = M >= d.value ? d.value : M;
        var R = M > l.value ? F : Z;
        Array.from({
          length: Math.abs(M - l.value)
        }).forEach(R);
      }
    }, X = {
      size: r,
      vertical: a
    };
    return u(X), ae(() => d.value, /* @__PURE__ */ zc(function* () {
      yield On(), k(), j();
    })), Fe(() => {
      window.addEventListener("resize", j);
    }), ar(() => {
      window.removeEventListener("resize", j), I();
    }), {
      n: Rc,
      classes: Uc,
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
function Hc() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(vs), {
    index: r
  } = kn(fs);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: jc
} = ne("swipe-item");
function Gc(e, n) {
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
  render: Gc,
  name: "VarSwipeItem",
  setup() {
    var e = P(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = Hc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: jc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Jn.install = function(e) {
  e.component(Jn.name, Jn);
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
var qc = Si({
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
}, _e(cs, ["loop", "indicator", "onChange"]), _e(Xa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: No,
  classes: Kc
} = ne("image-preview"), Do = 12, Bo = 200, Xc = 350, Ao = 200, Zc = ["src", "alt"];
function Jc(e, n) {
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
                    Zc
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
  render: Jc,
  name: "VarImagePreview",
  components: {
    VarSwipe: Zn,
    VarSwipeItem: Jn,
    VarPopup: bn,
    VarIcon: Te
  },
  inheritAttrs: !1,
  props: qc,
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
      }, Ao);
    }, y = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, g = (I) => d ? f(d, I) <= Do && I.timestamp - d.timestamp <= Bo && d.target === I.target : !1, O = (I) => !I || !u || !d ? !1 : f(u, d) <= Do && Date.now() - d.timestamp < Xc && (I === u.target || I.parentNode === u.target), T = (I) => {
      v = window.setTimeout(() => {
        O(I.target) && A(), u = null;
      }, Bo);
    }, S = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: C
      } = I, $ = c(C[0], I.currentTarget);
      if (u = $, g($)) {
        a.value > 1 ? y() : p();
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
      } = I.querySelector("." + No("image"));
      return {
        width: C,
        height: $,
        imageRadio: Y / L,
        rootRadio: $ / C,
        zoom: z(e.zoom)
      };
    }, E = (I) => {
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
          var Y = L.clientX - d.clientX, j = L.clientY - d.clientY, F = E(C), Z = w(C);
          t.value = D(t.value, Y, F), i.value = D(i.value, j, Z);
        }
        d = L;
      }
    }, A = () => {
      if (a.value > 1) {
        y(), setTimeout(() => N(e["onUpdate:show"], !1), Ao);
        return;
      }
      N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: No,
      classes: Kc,
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
  if (!!Li()) {
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
var ms = {
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
function zo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qc(e) {
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
  n: xc,
  classes: _c
} = ne("sticky");
function em(e, n) {
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
  render: em,
  name: "VarSticky",
  props: ms,
  setup(e) {
    var n = P(null), r = P(null), a = P(!1), t = P("0px"), i = P("0px"), o = P("auto"), l = P("auto"), s = P("auto"), u = P("auto"), d = W(() => !e.disabled && e.cssMode), v = W(() => !e.disabled && a.value), f = W(() => De(e.offsetTop)), c, p = () => {
      var {
        onScroll: O,
        cssMode: T,
        disabled: S
      } = e;
      if (!S) {
        var b = 0;
        if (c !== window) {
          var {
            top: E
          } = c.getBoundingClientRect();
          b = E;
        }
        var w = r.value, D = n.value, {
          top: k,
          left: A
        } = D.getBoundingClientRect(), I = k - b;
        I <= f.value ? (T || (o.value = D.offsetWidth + "px", l.value = D.offsetHeight + "px", t.value = b + f.value + "px", i.value = A + "px", s.value = w.offsetWidth + "px", u.value = w.offsetHeight + "px", a.value = !0), N(O, f.value, !0)) : (a.value = !1, N(O, I, !1));
      }
    }, y = /* @__PURE__ */ function() {
      var O = Qc(function* () {
        yield On(), c = Tr(n.value), c !== window && c.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return O.apply(this, arguments);
      };
    }(), g = () => {
      c !== window && c.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return ae(() => e.disabled, p), Ii(y), Ni(g), Fe(y), ar(g), {
      n: xc,
      classes: _c,
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
var ps = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), hs = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function nm() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(ps), {
    length: r
  } = Cn(hs);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function rm() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(ps), {
    index: r
  } = kn(hs);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var am = {
  index: {
    type: [Number, String]
  }
}, {
  n: tm,
  classes: im
} = ne("index-anchor");
function om(e, n) {
  return h(), me(
    Ia(e.sticky ? e.n("$-sticky") : e.Transition),
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
const Xr = Q({
  render: om,
  name: "VarIndexAnchor",
  components: {
    VarSticky: Qn
  },
  inheritAttrs: !1,
  props: am,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = rm(), t = P(0), i = P(!1), o = W(() => e.index), l = P(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (g) => {
      i.value = g;
    }, y = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(y), {
      n: tm,
      classes: im,
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
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var lm = {
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
function Lo(e, n, r, a, t, i, o) {
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
  n: sm,
  classes: um
} = ne("index-bar"), dm = ["onClick"];
function vm(e, n) {
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
          dm
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Zr = Q({
  render: vm,
  name: "VarIndexBar",
  props: lm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = nm(), t = P(""), i = P(null), o = P(null), l = P([]), s = P(), u = W(() => e.sticky), d = W(() => e.cssMode), v = W(() => De(e.stickyOffsetTop)), f = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var p = (T) => {
      var S = Ai(T) ? T.name.value : T;
      S === s.value || S === void 0 || (s.value = S, N(e.onChange, S));
    }, y = () => {
      var T = St(i.value), S = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: b
      } = o.value;
      r.forEach((E, w) => {
        var D = E.ownTop.value, k = T - D + v.value - b, A = w === r.length - 1 ? S : r[w + 1].ownTop.value - E.ownTop.value;
        k >= 0 && k < A && !t.value && (w && !e.cssMode && r[w - 1].setDisabled(!0), E.setDisabled(!1), p(E));
      });
    }, g = /* @__PURE__ */ function() {
      var T = Ut(function* (S, b) {
        var {
          offsetTop: E
        } = o.value;
        if (b && N(e.onClick, S), S !== s.value) {
          var w = r.find((A) => {
            var {
              name: I
            } = A;
            return S === I.value;
          });
          if (!!w) {
            var D = w.ownTop.value - v.value + E, k = Fi(i.value);
            t.value = S, p(S), yield Ra(i.value, {
              left: k,
              top: D,
              animation: gl,
              duration: z(e.duration)
            }), Ct(() => {
              t.value = "";
            });
          }
        }
      });
      return function(b, E) {
        return T.apply(this, arguments);
      };
    }(), O = (T) => {
      Tn(() => g(T));
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
      yield On(), i.value = Tr(o.value), i.value.addEventListener("scroll", y);
    })), Di(() => {
      N(i.value.removeEventListener, "scroll", y);
    }), {
      n: sm,
      classes: um,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: O,
      anchorClick: g
    };
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
function fm(e) {
  return ["text", "password", "number"].includes(e);
}
var cm = {
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
    validator: fm
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
  classes: mm
} = ne("input"), pm = ["id", "disabled", "type", "value", "maxlength", "rows"], hm = ["id", "disabled", "type", "value", "maxlength"], gm = ["for"];
function ym(e, n) {
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
          pm
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
          hm
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
          gm
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
  render: ym,
  name: "VarInput",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  props: cm,
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
    }, y = (C) => {
      var $ = C.target, {
        value: L
      } = $;
      L = b(S(L)), $.value = L, N(e["onUpdate:modelValue"], L), N(e.onInput, L, C), v("onInput");
    }, g = (C) => {
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
    }, S = (C) => e.modelModifiers.trim ? C.trim() : C, b = (C) => e.maxlength ? C.slice(0, z(e.maxlength)) : C, E = (C) => {
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
      classes: mm,
      isEmpty: jn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: p,
      handleInput: y,
      handleChange: g,
      handleClear: O,
      handleClick: T,
      handleTouchstart: E,
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
function bm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wm(e) {
  return ["always", "hover", "none"].includes(e);
}
var Sm = {
  type: {
    type: String,
    default: "default",
    validator: bm
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
    validator: wm
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
  n: Cm,
  classes: km
} = ne("link");
function $m(e, n) {
  return h(), me(
    Ia(e.tag),
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
const Jr = Q({
  render: $m,
  name: "VarLink",
  props: Sm,
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
      n: Cm,
      classes: km,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: ye
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var Tm = {
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
function Fo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Om(e) {
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
  n: Vm,
  classes: Pm
} = ne("list");
function Em(e, n) {
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
const Qr = Q({
  render: Em,
  name: "VarList",
  directives: {
    Ripple: Ue
  },
  components: {
    VarLoading: $n
  },
  props: Tm,
  setup(e) {
    var n = P(null), r = P(null), a, t = () => {
      N(e["onUpdate:error"], !1), N(e["onUpdate:loading"], !0), N(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Om(function* () {
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
      a = Tr(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
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
      n: Vm,
      classes: Pm
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var Mm = {
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
  classes: Im,
  n: Ro
} = ne("loading-bar");
const Nm = Q({
  name: "VarLoadingBar",
  props: Mm,
  setup(e) {
    return () => ee("div", {
      class: Im(Ro(), [e.error, Ro("--error")]),
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
var gs, Uo, tn = Ie({
  value: 0,
  opacity: 0,
  error: !1
}), Dm = (e) => {
  Object.assign(tn, e);
}, ys = () => {
  gs = window.setTimeout(() => {
    if (!(tn.value >= 95)) {
      var e = Math.random();
      tn.value < 70 && (e = Math.round(5 * Math.random())), tn.value += e, ys();
    }
  }, 200);
}, Bm = () => {
  Uo || (Uo = !0, Na(Nm, tn)), (!tn.error || tn.value === 100) && (tn.value = 0), setTimeout(() => {
    tn.opacity = 1;
  }, 200), ys();
}, Am = () => {
  tn.value = 100, setTimeout(() => {
    tn.opacity = 0, setTimeout(() => {
      tn.error = !1;
    }, 250);
  }, 300), window.clearTimeout(gs);
}, zm = () => {
  tn.error = !0, Ya.start(), setTimeout(Ya.finish, 300);
}, Ya = {
  start: Bm,
  finish: Am,
  error: zm,
  mergeConfig: Dm
}, Lm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function st(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Lm[n];
  });
}
var In = "top", rr = "bottom", wr = "right", xn = "left", It = "auto", Nt = [In, rr, wr, xn], Dt = "start", Wa = "end", Fm = "clippingParents", bs = "viewport", Da = "popper", Rm = "reference", Yo = /* @__PURE__ */ Nt.reduce(function(e, n) {
  return e.concat([n + "-" + Dt, n + "-" + Wa]);
}, []), ws = /* @__PURE__ */ [].concat(Nt, [It]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Dt, n + "-" + Wa]);
}, []), Um = "beforeRead", Ym = "read", Wm = "afterRead", Hm = "beforeMain", jm = "main", Gm = "afterMain", qm = "beforeWrite", Km = "write", Xm = "afterWrite", Ci = [Um, Ym, Wm, Hm, jm, Gm, qm, Km, Xm];
function Nn(e) {
  return e.split("-")[0];
}
var Zm = {
  start: "end",
  end: "start"
};
function Wo(e) {
  return e.replace(/start|end/g, function(n) {
    return Zm[n];
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
function qi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = hn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function ir(e) {
  return ((Sr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var La = Math.max, Ho = Math.min, Va = Math.round;
function ki() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Ss() {
  return !/^((?!chrome|android).)*safari/i.test(ki());
}
function Pa(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && dn(e) && (t = e.offsetWidth > 0 && Va(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Va(a.height) / e.offsetHeight || 1);
  var o = Sr(e) ? hn(e) : window, l = o.visualViewport, s = !Ss() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
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
function Ki(e) {
  var n = hn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Xi(e) {
  return Pa(ir(e)).left + Ki(e).scrollLeft;
}
function Jm(e, n) {
  var r = hn(e), a = ir(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = Ss();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Xi(e),
    y: s
  };
}
function Sn(e) {
  return hn(e).getComputedStyle(e);
}
function Qm(e) {
  var n, r = ir(e), a = Ki(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = La(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = La(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Xi(e), s = -a.scrollTop;
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
  return Pn(e) === "html" ? e : e.assignedSlot || e.parentNode || (qi(e) ? e.host : null) || ir(e);
}
function Zi(e) {
  var n = Sn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Cs(e) {
  return ["html", "body", "#document"].indexOf(Pn(e)) >= 0 ? e.ownerDocument.body : dn(e) && Zi(e) ? e : Cs(Bt(e));
}
function Fa(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Cs(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = hn(a), o = t ? [i].concat(i.visualViewport || [], Zi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Fa(Bt(o)));
}
function xm(e) {
  return ["table", "td", "th"].indexOf(Pn(e)) >= 0;
}
function jo(e) {
  return !dn(e) || Sn(e).position === "fixed" ? null : e.offsetParent;
}
function _m(e) {
  var n = /firefox/i.test(ki()), r = /Trident/i.test(ki());
  if (r && dn(e)) {
    var a = Sn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Bt(e);
  for (qi(t) && (t = t.host); dn(t) && ["html", "body"].indexOf(Pn(t)) < 0; ) {
    var i = Sn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ji(e) {
  for (var n = hn(e), r = jo(e); r && xm(r) && Sn(r).position === "static"; )
    r = jo(r);
  return r && (Pn(r) === "html" || Pn(r) === "body" && Sn(r).position === "static") ? n : r || _m(e) || n;
}
function ep(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && qi(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function $i(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function np(e, n) {
  var r = Pa(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Go(e, n, r) {
  return n === bs ? $i(Jm(e, r)) : Sr(n) ? np(n, r) : $i(Qm(ir(e)));
}
function rp(e) {
  var n = Fa(Bt(e)), r = ["absolute", "fixed"].indexOf(Sn(e).position) >= 0, a = r && dn(e) ? Ji(e) : e;
  return Sr(a) ? n.filter(function(t) {
    return Sr(t) && ep(t, a) && Pn(t) !== "body";
  }) : [];
}
function ap(e, n, r, a) {
  var t = n === "clippingParents" ? rp(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Go(e, u, a);
    return s.top = La(d.top, s.top), s.right = Ho(d.right, s.right), s.bottom = Ho(d.bottom, s.bottom), s.left = La(d.left, s.left), s;
  }, Go(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Ha(e) {
  return e.split("-")[1];
}
function tp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ks(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Nn(a) : null, i = a ? Ha(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
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
  var u = t ? tp(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Dt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Wa:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function ip() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function op(e) {
  return Object.assign({}, ip(), e);
}
function lp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function $s(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? Fm : l, u = r.rootBoundary, d = u === void 0 ? bs : u, v = r.elementContext, f = v === void 0 ? Da : v, c = r.altBoundary, p = c === void 0 ? !1 : c, y = r.padding, g = y === void 0 ? 0 : y, O = op(typeof g != "number" ? g : lp(g, Nt)), T = f === Da ? Rm : Da, S = e.rects.popper, b = e.elements[p ? T : f], E = ap(Sr(b) ? b : b.contextElement || ir(e.elements.popper), s, d, o), w = Pa(e.elements.reference), D = ks({
    reference: w,
    element: S,
    strategy: "absolute",
    placement: t
  }), k = $i(Object.assign({}, S, D)), A = f === Da ? k : w, I = {
    top: E.top - A.top + O.top,
    bottom: A.bottom - E.bottom + O.bottom,
    left: E.left - A.left + O.left,
    right: A.right - E.right + O.right
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
function sp(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? ws : s, d = Ha(a), v = d ? l ? Yo : Yo.filter(function(p) {
    return Ha(p) === d;
  }) : Nt, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(p, y) {
    return p[y] = $s(e, {
      placement: y,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[Nn(y)], p;
  }, {});
  return Object.keys(c).sort(function(p, y) {
    return c[p] - c[y];
  });
}
function up(e) {
  if (Nn(e) === It)
    return [];
  var n = st(e);
  return [Wo(e), n, Wo(n)];
}
function dp(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, y = r.allowedAutoPlacements, g = n.options.placement, O = Nn(g), T = O === g, S = s || (T || !p ? [st(g)] : up(g)), b = [g].concat(S).reduce(function(ie, le) {
      return ie.concat(Nn(le) === It ? sp(n, {
        placement: le,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: y
      }) : le);
    }, []), E = n.rects.reference, w = n.rects.popper, D = /* @__PURE__ */ new Map(), k = !0, A = b[0], I = 0; I < b.length; I++) {
      var C = b[I], $ = Nn(C), L = Ha(C) === Dt, Y = [In, rr].indexOf($) >= 0, j = Y ? "width" : "height", F = $s(n, {
        placement: C,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), Z = Y ? L ? wr : xn : L ? rr : In;
      E[j] > w[j] && (Z = st(Z));
      var H = st(Z), X = [];
      if (i && X.push(F[$] <= 0), l && X.push(F[Z] <= 0, F[H] <= 0), X.every(function(ie) {
        return ie;
      })) {
        A = C, k = !1;
        break;
      }
      D.set(C, X);
    }
    if (k)
      for (var M = p ? 3 : 1, R = function(le) {
        var de = b.find(function(we) {
          var Re = D.get(we);
          if (Re)
            return Re.slice(0, le).every(function(Qe) {
              return Qe;
            });
        });
        if (de)
          return A = de, "break";
      }, U = M; U > 0; U--) {
        var x = R(U);
        if (x === "break")
          break;
      }
    n.placement !== A && (n.modifiersData[a]._skip = !0, n.placement = A, n.reset = !0);
  }
}
const vp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: dp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function fp(e, n, r) {
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
function cp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = ws.reduce(function(d, v) {
    return d[v] = fp(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const mp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: cp
};
function pp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function hp(e) {
  return e === hn(e) || !dn(e) ? Ki(e) : pp(e);
}
function gp(e) {
  var n = e.getBoundingClientRect(), r = Va(n.width) / e.offsetWidth || 1, a = Va(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function yp(e, n, r) {
  r === void 0 && (r = !1);
  var a = dn(n), t = dn(n) && gp(n), i = ir(n), o = Pa(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Pn(n) !== "body" || Zi(i)) && (l = hp(n)), dn(n) ? (s = Pa(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Xi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function bp(e) {
  var n = Pa(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function wp(e) {
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
function Sp(e) {
  var n = wp(e);
  return Ci.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Cp(e) {
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
var or = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', kp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', qo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function $p(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), qo).filter(function(r, a, t) {
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
          Ci.indexOf(n.phase) < 0 && console.error(Ln(or, n.name, '"phase"', "either " + Ci.join(", "), '"' + String(n.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + qo.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Ln(kp, String(n.name), a, a));
      });
    });
  });
}
function Tp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Op(e) {
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
var Ko = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Vp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Xo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Zo() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Pp(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? Xo : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Xo, i),
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
        y(), d.options = Object.assign({}, i, d.options, T), d.scrollParents = {
          reference: Sr(l) ? Fa(l) : l.contextElement ? Fa(l.contextElement) : [],
          popper: Fa(s)
        };
        var S = Sp(Op([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), process.env.NODE_ENV !== "production") {
          var b = Tp([].concat(S, d.options.modifiers), function(C) {
            var $ = C.name;
            return $;
          });
          if ($p(b), Nn(d.options.placement) === It) {
            var E = d.orderedModifiers.find(function(C) {
              var $ = C.name;
              return $ === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
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
          if (!Zo(T, S)) {
            process.env.NODE_ENV !== "production" && console.error(Ko);
            return;
          }
          d.rects = {
            reference: yp(T, Ji(S), d.options.strategy === "fixed"),
            popper: bp(S)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(C) {
            return d.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var b = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (b += 1, b > 100)) {
              console.error(Vp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var w = d.orderedModifiers[E], D = w.fn, k = w.options, A = k === void 0 ? {} : k, I = w.name;
            typeof D == "function" && (d = D({
              state: d,
              options: A,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      update: Cp(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!Zo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Ko), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function p() {
      d.orderedModifiers.forEach(function(g) {
        var O = g.name, T = g.options, S = T === void 0 ? {} : T, b = g.effect;
        if (typeof b == "function") {
          var E = b({
            state: d,
            name: O,
            instance: c,
            options: S
          }), w = function() {
          };
          v.push(E || w);
        }
      });
    }
    function y() {
      v.forEach(function(g) {
        return g();
      }), v = [];
    }
    return c;
  };
}
var at = {
  passive: !0
};
function Ep(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = hn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, at);
  }), l && s.addEventListener("resize", r.update, at), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, at);
    }), l && s.removeEventListener("resize", r.update, at);
  };
}
const Mp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Ep,
  data: {}
};
function Ip(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ks({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Np = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Ip,
  data: {}
};
var Dp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Bp(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Va(n * t) / t || 0,
    y: Va(r * t) / t || 0
  };
}
function Jo(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, p = o.y, y = p === void 0 ? 0 : p, g = typeof d == "function" ? d({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = g.x, y = g.y;
  var O = o.hasOwnProperty("x"), T = o.hasOwnProperty("y"), S = xn, b = In, E = window;
  if (u) {
    var w = Ji(r), D = "clientHeight", k = "clientWidth";
    if (w === hn(r) && (w = ir(r), Sn(w).position !== "static" && l === "absolute" && (D = "scrollHeight", k = "scrollWidth")), w = w, t === In || (t === xn || t === wr) && i === Wa) {
      b = rr;
      var A = v && w === E && E.visualViewport ? E.visualViewport.height : w[D];
      y -= A - a.height, y *= s ? 1 : -1;
    }
    if (t === xn || (t === In || t === rr) && i === Wa) {
      S = wr;
      var I = v && w === E && E.visualViewport ? E.visualViewport.width : w[k];
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var C = Object.assign({
    position: l
  }, u && Dp), $ = d === !0 ? Bp({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = $.x, y = $.y, s) {
    var L;
    return Object.assign({}, C, (L = {}, L[b] = T ? "0" : "", L[S] = O ? "0" : "", L.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, C, (n = {}, n[b] = T ? y + "px" : "", n[S] = O ? c + "px" : "", n.transform = "", n));
}
function Ap(e) {
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
    variation: Ha(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, Jo(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, Jo(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const zp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Ap,
  data: {}
};
function Lp(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !dn(i) || !Pn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function Fp(e) {
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
const Rp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Lp,
  effect: Fp,
  requires: ["computeStyles"]
};
var Up = [Mp, Np, zp, Rp], Yp = /* @__PURE__ */ Pp({
  defaultModifiers: Up
});
function Wp(e) {
  return ["click", "hover"].includes(e);
}
function Hp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var jp = {
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
    validator: Wp
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: Hp
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
function Qo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function xo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Qo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Qo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Gp,
  classes: qp
} = ne("menu");
function Kp(e, n) {
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
      qa,
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
          ), [[Ka, e.show]])]),
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
  render: Kp,
  name: "VarMenu",
  props: jp,
  setup(e) {
    var n = P(null), r = P(null), a = P(!1), {
      zIndex: t
    } = Za(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: w,
        height: D
      } = window.getComputedStyle(n.value);
      u = {
        width: De(w),
        height: De(D)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, b());
    }, f = /* @__PURE__ */ function() {
      var w = xo(function* () {
        e.trigger === "hover" && (s = !1, yield On(), !l && E());
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var w = xo(function* () {
        e.trigger === "hover" && (l = !1, yield On(), !s && E());
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), y = () => {
      b(), o = !0;
    }, g = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, N(e["onUpdate:show"], !1);
    }, O = () => {
      d();
      var w = {
        x: De(e.offsetX),
        y: De(e.offsetY)
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
        modifiers: [gt({}, vp, {
          enabled: a.value
        }), gt({}, mp, {
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
    }, E = () => {
      a.value = !1, N(e["onUpdate:show"], !1);
    };
    return ae(() => e.show, (w) => {
      a.value = w != null ? w : !1;
    }, {
      immediate: !0
    }), ae(() => e.offsetX, S), ae(() => e.offsetY, S), ae(() => e.placement, S), ae(() => a.value, (w) => {
      w ? (S(), N(e.onOpen)) : N(e.onClose);
    }), ae(() => e.trigger, (w) => {
      w === "click" ? document.addEventListener("click", g) : document.removeEventListener("click", g);
    }), ae(() => e.disabled, E), Fe(() => {
      i = Yp(n.value, r.value, T()), e.trigger === "click" && document.addEventListener("click", g);
    }), ar(() => {
      document.removeEventListener("click", g), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: Gp,
      classes: qp,
      handleClick: y,
      handleMenuClose: g,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: c,
      handleMenuMouseleave: p,
      resize: S,
      open: b,
      close: E
    };
  }
});
_n.install = function(e) {
  e.component(_n.name, _n);
};
var Ts = Symbol("SELECT_BIND_OPTION_KEY"), Os = Symbol("SELECT_COUNT_OPTION_KEY");
function Xp() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Ts), {
    length: r
  } = Cn(Os);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Zp() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(Ts), {
    index: r
  } = kn(Os);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Jp = {
  label: {},
  value: {}
}, {
  n: Qp,
  classes: xp
} = ne("option");
function _p(e, n) {
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
const xr = Q({
  render: _p,
  name: "VarOption",
  directives: {
    Ripple: Ue
  },
  components: {
    VarCheckbox: dr
  },
  props: Jp,
  setup(e) {
    var n = P(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = Zp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), c = (y) => {
      n.value = y;
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
      n: Qp,
      classes: xp,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
var eh = {
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
function nh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var {
  n: _o
} = ne("overlay");
const _r = Q({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: eh,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Za(() => e.show, 1), {
      disabled: i
    } = Ri(), o = () => {
      N(e.onClick), N(e["onUpdate:show"], !1);
    };
    kt(() => e.show, () => e.lockScroll);
    var l = () => ee("div", Ve({
      class: _o(),
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
        name: _o("--fade")
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
        return ee(qa, {
          to: u,
          disabled: i.value
        }, nh(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var rh = {
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
  n: ah,
  classes: th
} = ne("pagination"), ih = ["item-mode", "onClick"];
function oh(e, n) {
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
          onKeydown: n[3] || (n[3] = no((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
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
        ih
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
          onKeydown: n[9] || (n[9] = no((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
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
const ea = Q({
  render: oh,
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
  props: rh,
  setup(e) {
    var n = P(!1), r = P(""), a = P("1"), t = P(!1), i = P(!1), o = P(z(e.current) || 1), l = P(z(e.size) || 10), s = P([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(z(e.total) / z(l.value))), v = W(() => {
      var b = l.value * (o.value - 1) + 1, E = Math.min(l.value * o.value, z(e.total));
      return [b, E];
    }), f = W(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (b, E) => je(b) ? !1 : E === 1 ? t.value : i.value, p = (b, E) => je(b) ? "basic" : E === 1 ? "head" : "tail", y = (b, E) => {
      b === o.value || e.disabled || (je(b) ? o.value = b : b === "prev" ? o.value > 1 && (o.value -= 1) : b === "next" ? o.value < d.value && (o.value += 1) : b === "..." && (E === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, O = (b) => {
      l.value = b, n.value = !1;
    }, T = (b) => {
      var E = /^[1-9][0-9]*$/;
      return E.test(b);
    }, S = (b, E, w) => {
      if (w.target.blur(), T(E)) {
        var D = z(E);
        D > d.value && (D = d.value, a.value = "" + D), D !== o.value && (o.value = D);
      }
      b === "quick" && (r.value = ""), b === "simple" && !T(E) && (a.value = "" + o.value);
    };
    return ae([() => e.current, () => e.size], (b) => {
      var [E, w] = b;
      o.value = z(E) || 1, l.value = z(w || 10);
    }), ae([o, l], (b, E) => {
      var w, D, [k, A] = b, [I, C] = E;
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
          for (var M = 1; M < L + 1; M++)
            $.push(k + M - u.value);
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
      n: ah,
      classes: th,
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
      clickItem: y,
      showMenu: g,
      clickSize: O,
      setPage: S,
      toNumber: z
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
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
var lh = Ti({
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
}, _e(Xa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: sh,
  classes: uh
} = ne("picker"), el = 300, dh = 15, nl = 0, vh = ["onTouchstart", "onTouchmove", "onTouchend"], fh = ["onTransitionend"];
function ch(e, n) {
  var r = te("var-button");
  return h(), me(
    Ia(e.dynamic ? e.n("$-popup") : e.Transition),
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
                fh
              )],
              42,
              vh
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
  render: ch,
  name: "VarPicker",
  components: {
    VarButton: nn,
    VarPopup: bn
  },
  inheritAttrs: !1,
  props: lh,
  setup(e) {
    var n = P([]), r = W(() => De(e.optionHeight)), a = W(() => De(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = (C, $) => {
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
    }, y = (C, $) => {
      $.touching = !0, $.scrolling = !1, $.duration = 0, $.translate = Lt($.scrollEl);
    }, g = (C, $) => {
      if (!!$.touching) {
        var {
          clientY: L
        } = C.touches[0], Y = $.prevY !== void 0 ? L - $.prevY : 0;
        $.prevY = L, $.translate += Y, u($);
        var j = performance.now();
        j - $.momentumTime > el && ($.momentumTime = j, $.momentumPrevY = $.translate);
      }
    }, O = (C, $) => {
      $.touching = !1, $.scrolling = !0, $.prevY = void 0;
      var L = $.translate - $.momentumPrevY, Y = performance.now() - $.momentumTime, j = Math.abs(L) >= dh && Y <= el;
      j && p($, L, Y), $.index = v($), c($, $.index, j ? 1e3 : 200);
    }, T = (C) => {
      C.scrolling = !1, D(C);
    }, S = (C) => C.map(($, L) => {
      var Y, j = Ce($) ? {
        texts: $
      } : $, F = {
        id: nl++,
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
      return E($, C, 0, !0), $;
    }, E = function(C, $, L, Y) {
      if (Y === void 0 && (Y = !1), Ce($) && $.length) {
        var j, F = Y && (j = e.cascadeInitialIndexes[C.length]) != null ? j : 0, Z = {
          id: nl++,
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
        C.push(Z), c(Z, Z.index, 0, !0), E(C, Z.columns[Z.index].children, L + 1, Y);
      }
    }, w = (C) => {
      n.value.splice(n.value.indexOf(C) + 1), E(n.value, C.columns[C.index].children, C.columnIndex + 1);
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
      n.value = e.cascade ? b(ro(C)) : S(ro(C));
      var {
        indexes: $
      } = f();
      o = [...$];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: sh,
      classes: uh,
      pack: Ye,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Le,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: g,
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
function mh(e) {
  return ["linear", "circle"].includes(e);
}
var ph = {
  mode: {
    type: String,
    default: "linear",
    validator: mh
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
  n: hh,
  classes: gh
} = ne("progress"), yh = ["viewBox"], bh = ["cx", "cy", "r", "stroke-width"], wh = ["cx", "cy", "r", "stroke-width"];
function Sh(e, n) {
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
          bh
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
          wh
        )],
        14,
        yh
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
const na = Q({
  render: Sh,
  name: "VarProgress",
  props: ph,
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
      } = e, o = "0 0 " + De(a) + " " + De(a), l = z(i) > 100 ? 100 : Math.round(z(i)), s = (De(a) - De(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: hh,
      classes: gh,
      toSizeUnit: ye,
      multiplySizeUnit: Ze,
      linearProps: n,
      circleProps: r
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
var Ch = {
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
function rl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        rl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        rl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: $h,
  classes: Th
} = ne("pull-refresh"), al = 150;
function Oh(e, n) {
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
const ra = Q({
  render: Oh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Te
  },
  props: Ch,
  setup(e) {
    var n, r, a = P(0), t = P(null), i = P(null), o = P(0), l = P(-999), s = P("arrow-down"), u = P("default"), d = P(!1), v = P(!0), f = W(() => u.value !== "loading" && u.value !== "success" && !e.disabled), c = W(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: y.value ? e.successBgColor : e.bgColor,
      color: y.value ? e.successColor : e.color
    })), p = W(() => Math.abs(2 * a.value)), y = W(() => u.value === "success"), g = () => new Promise((w) => {
      window.setTimeout(() => {
        v.value = !0, w();
      }, al);
    }), O = (w) => {
      !f.value || (u.value = "pulling", o.value = w.touches[0].clientY);
    }, T = (w) => {
      var D = St(n);
      if (!(D > 0 || !f.value)) {
        D === 0 && l.value > a.value && w.cancelable && w.preventDefault();
        var k = (w.touches[0].clientY - o.value) / 2 + a.value;
        l.value = k >= p.value ? p.value : k, l.value >= p.value * 0.2 ? (v.value = !1, s.value = "refresh", r = g()) : s.value = "arrow-down";
      }
    }, S = /* @__PURE__ */ function() {
      var w = kh(function* () {
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
    }, E = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return ae(() => e.modelValue, (w) => {
      w === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, E();
      }, z(e.successDuration)));
    }), Fe(() => {
      n = Tr(t.value), b();
    }), {
      n: $h,
      classes: Th,
      iconHasChanged: v,
      ICON_TRANSITION: al,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: O,
      touchMove: T,
      touchEnd: S,
      iconName: s,
      controlStyle: c,
      isSuccess: y
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var Vh = {
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
}, Vs = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Ps = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Ph() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Vs), {
    length: r
  } = Cn(Ps);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Eh() {
  var {
    bindParent: e,
    parentProvider: n
  } = cn(Vs), {
    index: r
  } = kn(Ps);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Mh,
  classes: Ih
} = ne("radio");
function Nh(e, n) {
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
const aa = Q({
  render: Nh,
  name: "VarRadio",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  inheritAttrs: !1,
  props: Vh,
  setup(e) {
    var n = P(!1), r = W(() => n.value === e.checkedValue), a = P(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Eh(), {
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
          validateTrigger: E,
          rules: w,
          modelValue: D
        } = e;
        u(E, b, w, D);
      });
    }, c = (b) => {
      var {
        checkedValue: E,
        onChange: w
      } = e;
      t && n.value === E || (n.value = b, N(e["onUpdate:modelValue"], n.value), N(w, n.value), t == null || t.onToggle(E), f("onChange"));
    }, p = (b) => {
      var {
        disabled: E,
        readonly: w,
        uncheckedValue: D,
        checkedValue: k,
        onClick: A
      } = e;
      o != null && o.disabled.value || E || (N(A, b), !(o != null && o.readonly.value || w) && (a.value = !0, c(r.value ? D : k)));
    }, y = (b) => {
      var {
        checkedValue: E,
        uncheckedValue: w
      } = e;
      n.value = b === E ? E : w;
    }, g = () => {
      N(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, O = () => d(e.rules, e.modelValue), T = (b) => {
      var {
        uncheckedValue: E,
        checkedValue: w
      } = e, D = ![E, w].includes(b);
      D && (b = r.value ? E : w), c(b);
    };
    ae(() => e.modelValue, (b) => {
      n.value = b;
    }, {
      immediate: !0
    });
    var S = {
      sync: y,
      validate: O,
      resetValidation: v,
      reset: g
    };
    return N(i, S), N(l, S), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Mh,
      classes: Ih,
      handleClick: p,
      toggle: T,
      reset: g,
      validate: O,
      resetValidation: v
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
function Dh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Bh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Dh
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
  n: Ah,
  classes: zh
} = ne("radio-group");
function Lh(e, n) {
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
const ta = Q({
  render: Lh,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: He
  },
  props: Bh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Ph(), {
      bindForm: t
    } = pn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = mn(), u = W(() => i.value), d = (g) => {
      Pe(() => {
        var {
          validateTrigger: O,
          rules: T,
          modelValue: S
        } = e;
        o(O, g, T, S);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: O
      } = g;
      return O(e.modelValue);
    }), f = (g) => {
      N(e["onUpdate:modelValue"], g), N(e.onChange, g), d("onChange");
    }, c = () => l(e.rules, e.modelValue), p = () => {
      N(e["onUpdate:modelValue"], void 0), s();
    };
    ae(() => e.modelValue, v), ae(() => n.value, v);
    var y = {
      onToggle: f,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return N(t, y), a(y), {
      errorMessage: i,
      n: Ah,
      classes: zh,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var Fh = {
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
} = ne("rate"), Rh = ["onClick"];
function Uh(e, n) {
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
          Rh
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
const ia = Q({
  render: Uh,
  name: "VarRate",
  components: {
    VarIcon: Te,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: Fh,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = pn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = mn(), l = (g) => {
      var {
        count: O,
        gap: T
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== z(O) ? ye(T) : 0
      };
    }, s = (g) => {
      var {
        name: O,
        color: T
      } = u(g);
      return {
        [Ba("content")]: !0,
        [Ba("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ba("--error")]: a.value,
        [Ba("--primary")]: O !== e.emptyIcon && !T
      };
    }, u = (g) => {
      var {
        modelValue: O,
        disabled: T,
        disabledColor: S,
        color: b,
        half: E,
        emptyColor: w,
        icon: D,
        halfIcon: k,
        emptyIcon: A
      } = e, I = b;
      return (T || n != null && n.disabled.value) && (I = S), g <= z(O) ? {
        color: I,
        name: D
      } : E && g <= z(O) + 0.5 ? {
        color: I,
        name: k
      } : {
        color: T || n != null && n.disabled.value ? S : w,
        name: A
      };
    }, d = (g, O) => {
      if (e.half) {
        var {
          offsetWidth: T
        } = O.target;
        O.offsetX <= Math.floor(T / 2) && (g -= 0.5);
      }
      N(e["onUpdate:modelValue"], g);
    }, v = () => i(e.rules, z(e.modelValue)), f = () => Pe(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, O) => {
      var {
        readonly: T,
        disabled: S,
        onChange: b
      } = e;
      T || S || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, O), N(b, g), f());
    }, p = () => {
      N(e["onUpdate:modelValue"], 0), o();
    }, y = {
      reset: p,
      validate: v,
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
      validate: v,
      resetValidation: o,
      toSizeUnit: ye,
      toNumber: z,
      n: Ba
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
function Yh(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Wh = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Yh
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
}, Hh = (e) => (kr(""), e = e(), $r(), e), jh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, Gh = /* @__PURE__ */ Hh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), qh = [Gh];
function Kh(e, n) {
  return h(), V("svg", jh, qh);
}
const Xh = Q({
  render: Kh
});
var Zh = (e) => (kr(""), e = e(), $r(), e), Jh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, Qh = /* @__PURE__ */ Zh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), xh = [Qh];
function _h(e, n) {
  return h(), V("svg", Jh, xh);
}
const eg = Q({
  render: _h
});
var ng = (e) => (kr(""), e = e(), $r(), e), rg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, ag = /* @__PURE__ */ ng(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), tg = [ag];
function ig(e, n) {
  return h(), V("svg", rg, tg);
}
const og = Q({
  render: ig
});
var {
  n: lg,
  classes: sg
} = ne("result");
function ug(e, n) {
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
const dg = Q({
  render: ug,
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
      n: lg,
      classes: sg,
      toNumber: z
    };
  }
});
var vg = (e) => (kr(""), e = e(), $r(), e), fg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, cg = /* @__PURE__ */ vg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), mg = [cg];
function pg(e, n) {
  return h(), V("svg", fg, mg);
}
const hg = Q({
  render: pg
});
var gg = (e) => (kr(""), e = e(), $r(), e), yg = {
  viewBox: "-4 -4 32 32"
}, bg = /* @__PURE__ */ gg(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), wg = [bg];
function Sg(e, n) {
  return h(), V("svg", yg, wg);
}
const Cg = Q({
  render: Sg
});
var {
  n: kg,
  classes: $g
} = ne("result");
function Tg(e, n) {
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
          Ia(e.type),
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
const oa = Q({
  render: Tg,
  name: "VarResult",
  components: {
    Info: Xh,
    Success: dg,
    Warning: og,
    Error: eg,
    Question: hg,
    Empty: Cg
  },
  props: Wh,
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
      n: kg,
      classes: $g,
      toNumber: z,
      toPxNum: De,
      toSizeUnit: ye,
      circleSize: n,
      borderSize: r
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function Og(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function Vg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var Pg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Og
  },
  align: {
    type: String,
    default: "flex-start",
    validator: Vg
  },
  onClick: {
    type: Function
  }
}, {
  n: Eg,
  classes: Mg
} = ne("row");
function Ig(e, n) {
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
const la = Q({
  render: Ig,
  name: "VarRow",
  props: Pg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = lv(), t = W(() => {
      var l = De(e.gutter);
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
      n: Eg,
      classes: Mg,
      average: t
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
function Ng(e) {
  return ["left", "right", "center"].includes(e);
}
var Dg = {
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
    validator: Ng
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
  classes: Bg
} = ne("select"), Ag = {
  key: 0
}, zg = {
  key: 1
};
function Lg(e, n) {
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
              [e.multiple ? (h(), V("div", Ag, [e.chip ? (h(), V(
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
                zg,
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
const sa = Q({
  render: Lg,
  name: "VarSelect",
  components: {
    VarIcon: Te,
    VarMenu: _n,
    VarChip: vr,
    VarFormDetails: He
  },
  props: Dg,
  setup(e) {
    var n = P(null), r = P(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = P(""), o = P([]), l = P("0px"), s = P(0), {
      bindForm: u,
      form: d
    } = pn(), {
      length: v,
      options: f,
      bindOptions: c
    } = Xp(), {
      errorMessage: p,
      validateWithTrigger: y,
      validate: g,
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
        y(U, R, x, ie);
      });
    }, E = (R) => {
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
      d != null && d.disabled.value || d != null && d.readonly.value || R || U || (l.value = k(), s.value = De(e.offsetY), r.value = !0, N(x), b("onFocus"));
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
        }).map(E) : E(R);
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
            label: Ee
          } = Qe;
          return Ee.value === R;
        }), Re = de.filter((Qe) => {
          var Ee;
          return Qe !== ((Ee = we.value.value) != null ? Ee : we.label.value);
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
        f.forEach((ie) => ie.sync(x.includes(E(ie))));
      } else
        f.forEach((ie) => ie.sync(U === E(ie)));
      S();
    }, F = () => {
      l.value = k(), s.value = De(e.offsetY), r.value = !0;
    }, Z = () => {
      r.value = !1;
    }, H = () => g(e.rules, e.modelValue), X = () => {
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
    var M = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: C,
      reset: X,
      validate: H,
      resetValidation: O
    };
    return c(M), N(u, M), {
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
      classes: Bg,
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
sa.install = function(e) {
  e.component(sa.name, sa);
};
var Fg = {
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
  n: Rg,
  classes: Ug
} = ne("skeleton");
function Yg(e, n) {
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
const ua = Q({
  render: Yg,
  name: "VarSkeleton",
  props: Fg,
  setup() {
    return {
      n: Rg,
      classes: Ug,
      toSizeUnit: ye,
      toNumber: z
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
function Wg(e) {
  return ["always", "normal", "never"].includes(e);
}
var Hg = {
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
    validator: Wg
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
  n: tl,
  classes: jg
} = ne("slider"), Me;
(function(e) {
  e.First = "1", e.Second = "2";
})(Me || (Me = {}));
var Gg = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function qg(e, n) {
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
          Gg
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
const da = Q({
  render: qg,
  name: "VarSlider",
  components: {
    VarFormDetails: He
  },
  props: Hg,
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
      [Me.First]: s(),
      [Me.Second]: s()
    }), p = W(() => z(e.max) - z(e.min)), y = W(() => v.value / p.value * z(e.step)), g = W(() => {
      var {
        modelValue: H,
        range: X
      } = e, M = [];
      return X && Ce(H) ? M = [{
        value: E(H[0]),
        enumValue: Me.First,
        text: w(H[0])
      }, {
        value: E(H[1]),
        enumValue: Me.Second,
        text: w(H[1])
      }] : je(H) && (M = [{
        value: E(H),
        enumValue: Me.First,
        text: w(H)
      }]), M;
    }), O = W(() => {
      var {
        activeColor: H,
        range: X,
        modelValue: M
      } = e, R = X && Ce(M) ? E(Math.min(M[0], M[1])) : 0, U = X && Ce(M) ? E(Math.max(M[0], M[1])) - R : E(M);
      return {
        width: U + "%",
        left: R + "%",
        background: H
      };
    }), T = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), S = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), b = (H) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[H].active, E = (H) => {
      var {
        min: X,
        max: M
      } = e;
      return H < z(X) ? 0 : H > z(M) ? 100 : (H - z(X)) / p.value * 100;
    }, w = (H) => {
      if (!je(H))
        return 0;
      var X = H;
      X < Number(e.min) && (X = Number(e.min)), X > Number(e.max) && (X = Number(e.max));
      var M = parseInt("" + X, 10) === X;
      return M ? X : z(X.toPrecision(5));
    }, D = (H, X) => {
      var M = [], {
        step: R,
        range: U,
        modelValue: x,
        onChange: ie,
        min: le
      } = e, de = z(R), we = Math.round(H / y.value), Re = we * de + z(le), Qe = c[X].percentValue * de + z(le);
      if (c[X].percentValue = we, U && Ce(x) && (M = X === Me.First ? [Re, x[1]] : [x[0], Re]), Qe !== Re) {
        var Ee = U ? M.map((ln) => w(ln)) : w(Re);
        N(ie, Ee), N(e["onUpdate:modelValue"], Ee), u();
      }
    }, k = (H) => {
      if (!e.range)
        return Me.First;
      var X = c[Me.First].percentValue * y.value, M = c[Me.Second].percentValue * y.value, R = Math.abs(H - X), U = Math.abs(H - M);
      return R <= U ? Me.First : Me.Second;
    }, A = (H, X) => {
      v.value || (v.value = d.value.offsetWidth), !(T.value || S.value) && (N(e.onStart), f.value = !0, c[X].startPosition = H.touches[0].clientX);
    }, I = (H, X) => {
      if (!(T.value || S.value || !f.value)) {
        var M = H.touches[0].clientX - c[X].startPosition + c[X].currentLeft;
        c[X].active = !0, M <= 0 ? M = 0 : M >= v.value && (M = v.value), D(M, X);
      }
    }, C = (H) => {
      var {
        range: X,
        modelValue: M,
        onEnd: R,
        step: U,
        min: x
      } = e;
      if (!(T.value || S.value)) {
        var ie = [];
        c[H].currentLeft = c[H].percentValue * y.value, c[H].active = !1;
        var le = c[H].percentValue * z(U) + z(x);
        X && Ce(M) && (ie = H === Me.First ? [le, M[1]] : [M[0], le]), N(R, X ? ie : le), f.value = !1;
      }
    }, $ = (H) => {
      if (!(T.value || S.value) && !H.target.closest("." + tl("thumb"))) {
        var X = H.clientX - iu(H.currentTarget), M = k(X);
        D(X, M), C(M);
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
      var M = (R) => {
        var {
          min: U,
          max: x
        } = e;
        return R < z(U) ? 0 : R > z(x) ? p.value / X : (R - z(U)) / X;
      };
      e.range && Ce(H) ? (c[Me.First].percentValue = M(H[0]), c[Me.First].currentLeft = c[Me.First].percentValue * y.value, c[Me.Second].percentValue = M(H[1]), c[Me.Second].currentLeft = c[Me.Second].percentValue * y.value) : je(H) && (c[Me.First].currentLeft = M(H) * y.value);
    }, F = () => {
      var H = e.range ? [0, 0] : 0;
      N(e["onUpdate:modelValue"], H), o();
    }, Z = {
      reset: F,
      validate: l,
      resetValidation: o
    };
    return N(n, Z), ae([() => e.modelValue, () => e.step], (H) => {
      var [X, M] = H;
      !L() || !Y() || f.value || j(X, z(M));
    }), ae(v, () => j()), Fe(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: tl,
      classes: jg,
      Thumbs: Me,
      sliderEl: d,
      getFillStyle: O,
      isDisabled: T,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
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
da.install = function(e) {
  e.component(da.name, da);
};
function Oi() {
  return Oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Oi.apply(this, arguments);
}
function Kg(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Xg(e) {
  return Qi.includes(e);
}
var Es = {
  type: {
    type: String,
    validator: Xg
  },
  position: {
    type: String,
    default: "top",
    validator: Kg
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
  loadingColor: Oi({}, _e(Gn, "color"), {
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
  n: Zg,
  classes: Jg
} = ne("snackbar"), Qg = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function xg(e, n) {
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
  )), [[Ka, e.show]]);
}
const Ms = Q({
  render: xg,
  name: "VarSnackbarCore",
  components: {
    VarLoading: $n,
    VarIcon: Te
  },
  props: Es,
  setup(e) {
    var n = P(null), {
      zIndex: r
    } = Za(() => e.show, 1);
    kt(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? Qg[e.type] : ""), i = () => {
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
      SNACKBAR_TYPE: Qi,
      n: Zg,
      classes: Jg,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: _g
} = ne("snackbar");
function ey(e, n) {
  var r = te("var-snackbar-core");
  return h(), me(
    qa,
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
const va = Q({
  render: ey,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Ms
  },
  props: Es,
  setup() {
    var {
      disabled: e
    } = Ri();
    return {
      n: _g,
      disabled: e
    };
  }
});
function ja() {
  return ja = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ja.apply(this, arguments);
}
function ny(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !yt(e);
}
var Qi = ["loading", "success", "warning", "info", "error"], il = 0, Vi = !1, Pi, Ea = !1, vn = Ie([]), ry = {
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
}, ay = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, ty = {
  setup() {
    return () => {
      var e = vn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ea && (t.position = "top");
        var l = Ea ? "relative" : "absolute", s = ja({
          position: l
        }, uy(t.position));
        return ee(Ms, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = on.zIndex;
      return ee(Qs, Ve(ay, {
        style: {
          zIndex: n
        },
        onAfterEnter: iy,
        onAfterLeave: oy
      }), ny(e) ? e : {
        default: () => [e]
      });
    };
  }
}, Bn = function(e) {
  var n = qe(e) || je(e) ? {
    content: String(e)
  } : e, r = Ie(ja({}, ry, n));
  r.show = !0, Vi || (Vi = !0, Pi = Na(ty).unmountInstance);
  var {
    length: a
  } = vn, t = {
    id: il++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ea)
    ly(t);
  else {
    var i = "update-" + il;
    sy(r, i);
  }
  return {
    clear() {
      !Ea && vn.length ? vn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Qi.forEach((e) => {
  Bn[e] = (n) => (Ai(n) ? n.type = e : n = {
    content: n,
    type: e
  }, Bn(n));
});
Bn.install = function(e) {
  e.component(va.name, va);
};
Bn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ea && (vn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ea = e);
};
Bn.clear = function() {
  vn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
Bn.Component = va;
function iy(e) {
  var n = e.getAttribute("data-id"), r = vn.find((a) => a.id === z(n));
  r && (r.reactiveSnackOptions.onOpened == null || r.reactiveSnackOptions.onOpened());
}
function oy(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = vn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, r.reactiveSnackOptions.onClosed == null || r.reactiveSnackOptions.onClosed());
  var a = vn.every((t) => t.animationEnd);
  a && (Pi == null || Pi(), vn = Ie([]), Vi = !1);
}
function ly(e) {
  vn.push(e);
}
function sy(e, n) {
  var [r] = vn;
  r.reactiveSnackOptions = ja({}, r.reactiveSnackOptions, e), r._update = n;
}
function uy(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
va.install = function(e) {
  e.component(va.name, va);
};
var Is = (e) => ["mini", "small", "normal", "large"].includes(e), dy = (e) => Is(e) || Ce(e) || je(e) || qe(e), vy = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), fy = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: dy
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
    validator: vy
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function an(e) {
  return "calc(" + e + " / 2)";
}
function cy(e, n, r) {
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
  classes: my
} = ne("space");
const fa = Q({
  name: "VarSpace",
  props: fy,
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
      } = e, f = (i = N(r.default)) != null ? i : [], c = Is(v), [p, y] = a(v, c), g = (S) => {
        var b = [];
        return S.forEach((E) => {
          if (E.type !== xs) {
            if (E.type === Oe && Ce(E.children)) {
              E.children.forEach((w) => {
                b.push(w);
              });
              return;
            }
            b.push(E);
          }
        }), b;
      };
      f = g(f);
      var O = f.length - 1, T = f.map((S, b) => {
        var E = cy(p, y, {
          direction: d,
          justify: l,
          index: b,
          lastIndex: O
        });
        return ee("div", {
          style: {
            margin: E
          }
        }, [S]);
      });
      return ee("div", {
        class: my(Ht(), Ht("$--box"), [o, Ht("--inline")]),
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
fa.install = function(e) {
  e.component(fa.name, fa);
};
var py = {
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
}, Ns = Symbol("STEPS_BIND_STEP_KEY"), Ds = Symbol("STEPS_COUNT_STEP_KEY");
function hy() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(Ns), {
    length: r
  } = Cn(Ds);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function gy() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Ns), {
    index: r
  } = kn(Ds);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: yy,
  classes: by
} = ne("step"), wy = {
  key: 3
};
function Sy(e, n) {
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
            wy,
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
const ca = Q({
  render: Sy,
  name: "VarStep",
  components: {
    VarIcon: Te
  },
  props: py,
  setup() {
    var e = P(null), n = P(""), r = P(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = gy(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, y = () => v(a.value), g = (O) => {
      d.value === "horizontal" && (e.value = O);
    };
    return i(p), ae(l, (O) => {
      if (r.value = O - 1 === a.value, e.value) {
        var T = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + T + "px";
      }
    }), {
      n: yy,
      classes: by,
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
      getRef: g
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
function Cy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var ky = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Cy
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
  n: $y
} = ne("steps");
function Ty(e, n) {
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
const ma = Q({
  render: Ty,
  name: "VarSteps",
  props: ky,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = hy(), l = (u) => {
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
      n: $y
    };
  }
});
ma.install = function(e) {
  e.component(ma.name, ma);
};
var {
  n: Oy
} = ne("style-provider");
const pa = Q({
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
    return () => ml(e.tag, {
      class: Oy(),
      style: Cl(e.styleVars)
    }, N(r.default));
  }
});
var jt = [];
function Ga(e) {
  jt.forEach((r) => document.documentElement.style.removeProperty(r)), jt.length = 0;
  var n = Cl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), jt.push(a);
  });
}
Ga.Component = pa;
pa.install = function(e) {
  e.component(pa.name, pa);
};
Ga.install = function(e) {
  e.component(pa.name, pa);
};
var Vy = {
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
  n: Py,
  classes: Ey
} = ne("switch");
function My(e, n) {
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
const ha = Q({
  render: My,
  name: "VarSwitch",
  components: {
    VarLoading: $n,
    VarFormDetails: He
  },
  directives: {
    Ripple: Ue
  },
  props: Vy,
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
        modelValue: y,
        color: g,
        closeColor: O,
        loadingColor: T,
        activeValue: S
      } = e;
      return {
        handle: {
          width: Ze(p),
          height: Ze(p),
          backgroundColor: y === S ? g : O,
          color: T
        },
        ripple: {
          left: y === S ? Ze(p, 0.5) : "-" + Ze(p, 0.5),
          color: y === S ? g : O || "#999",
          width: Ze(p, 2),
          height: Ze(p, 2)
        },
        track: {
          height: Ze(p, 0.72),
          width: Ze(p, 1.9),
          borderRadius: Ze(p, 2 / 3),
          filter: y === S || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === S ? g : O
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
        onClick: y,
        onChange: g,
        disabled: O,
        loading: T,
        readonly: S,
        modelValue: b,
        activeValue: E,
        inactiveValue: w,
        "onUpdate:modelValue": D
      } = e;
      if (N(y, p), !(O || T || S || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var k = b === E ? w : E;
        N(g, k), N(D, k), s();
      }
    }, f = () => {
      N(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return N(n, c), {
      n: Py,
      classes: Ey,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
var Iy = {
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
}, Bs = Symbol("TABS_BIND_TAB_KEY"), As = Symbol("TABS_COUNT_TAB_KEY");
function Ny() {
  var {
    childProviders: e,
    bindChildren: n
  } = fn(Bs), {
    length: r
  } = Cn(As);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Dy() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(Bs), {
    index: r
  } = kn(As);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: tt,
  classes: By
} = ne("tab");
function Ay(e, n) {
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
const ga = Q({
  render: Ay,
  name: "VarTab",
  directives: {
    Ripple: Ue
  },
  props: Iy,
  setup(e) {
    var n = P(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = Dy(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: p
    } = o, y = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(y);
    var g = () => {
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
      return S ? tt("$-tab--disabled") : u.value === b || u.value === (i == null ? void 0 : i.value) ? tt("$-tab--active") : tt("$-tab--inactive");
    }, T = (S) => {
      var {
        disabled: b,
        name: E,
        onClick: w
      } = e;
      b || (w == null || w(E != null ? E : i.value, S), s(y));
    };
    return ae(() => e.name, p), ae(() => e.disabled, p), {
      n: tt,
      classes: By,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: O,
      handleClick: T
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var zs = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Ls = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function zy() {
  var {
    bindChildren: e,
    childProviders: n
  } = fn(zs), {
    length: r
  } = Cn(Ls);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function Ly() {
  var {
    parentProvider: e,
    bindParent: n
  } = cn(zs), {
    index: r
  } = kn(Ls);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var Fy = {
  name: {
    type: [String, Number]
  }
}, {
  n: Ry,
  classes: Uy
} = ne("tab-item");
function Yy(e, n) {
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
const ya = Q({
  render: Yy,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Jn
  },
  props: Fy,
  setup(e) {
    var n = P(!1), r = P(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = Ly(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: Ry,
      classes: Uy,
      current: n,
      initSlot: r
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
var {
  n: Wy,
  classes: Hy
} = ne("table");
function jy(e, n) {
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
const ba = Q({
  render: jy,
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
      n: Wy,
      classes: Hy
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
function ol(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Gy = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: ol
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: ol
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
  offsetTop: _e(ms, "offsetTop"),
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
function ll(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function qy(e) {
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
  n: Ky,
  classes: Xy
} = ne("tabs");
function Zy(e, n) {
  return h(), me(
    Ia(e.sticky ? e.n("$-sticky") : e.Transition),
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
const wa = Q({
  render: Zy,
  name: "VarTabs",
  components: {
    VarSticky: Qn
  },
  inheritAttrs: !1,
  props: Gy,
  setup(e) {
    var n = P("0px"), r = P("0px"), a = P("0px"), t = P("0px"), i = P(!1), o = P(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), v = W(() => e.itemDirection), {
      tabList: f,
      bindTabList: c,
      length: p
    } = Ny(), y = (k) => {
      var A, I = (A = k.name.value) != null ? A : k.index.value, {
        active: C,
        onChange: $,
        onClick: L
      } = e;
      N(e["onUpdate:active"], I), N(L, I), I !== C && N($, I);
    }, g = () => f.find((k) => {
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
    }, E = (k) => {
      var {
        element: A
      } = k;
      if (!!i.value) {
        var I = o.value, C = A.value;
        if (e.layoutDirection === "horizontal") {
          var $ = C.offsetLeft + C.offsetWidth / 2 - I.offsetWidth / 2;
          Ra(I, {
            left: $,
            animation: qt
          });
        } else {
          var L = C.offsetTop + C.offsetHeight / 2 - I.offsetHeight / 2;
          Ra(I, {
            top: L,
            animation: qt
          });
        }
      }
    }, w = () => {
      var k = g() || O() || T();
      !k || k.disabled.value || (S(), b(k), E(k));
    }, D = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: w,
      onTabClick: y
    };
    return c(D), ae(() => p.value, /* @__PURE__ */ qy(function* () {
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
      n: Ky,
      classes: Xy,
      resize: w
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Jy = {
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
function sl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Qy(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        sl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        sl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: xy
} = ne("tabs-items");
function _y(e, n) {
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
const Sa = Q({
  render: _y,
  name: "VarTabsItems",
  components: {
    VarSwipe: Zn
  },
  props: Jy,
  setup(e) {
    var n = P(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = zy(), i = (f) => r.find((c) => {
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
      !p || (r.forEach((y) => {
        var {
          setCurrent: g
        } = y;
        return g(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (f) => {
      var c, p = r.find((g) => {
        var {
          index: O
        } = g;
        return O.value === f;
      }), y = (c = p.name.value) != null ? c : p.index.value;
      N(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), ae(() => e.active, s), ae(() => t.value, /* @__PURE__ */ Qy(function* () {
      yield On(), s(e.active);
    })), {
      swipe: n,
      n: xy,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
const e0 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, n0 = {
  "--badge-default-color": "#555"
}, r0 = {
  "--button-default-color": "#303030"
}, a0 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, t0 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, i0 = {
  "--checkbox-unchecked-color": "#fff"
}, o0 = {
  "--chip-default-color": "#555"
}, l0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, s0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, u0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, d0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, v0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, f0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, c0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, m0 = {
  "--popup-content-background-color": "#1e1e1e"
}, p0 = {
  "--pull-refresh-background": "#303030"
}, h0 = {
  "--radio-unchecked-color": "#fff"
}, g0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, y0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, b0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, w0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, S0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, C0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, k0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, $0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, T0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, O0 = {
  "--tabs-background": "#1e1e1e"
}, V0 = {
  "--app-bar-color": "#272727"
}, P0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, E0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, M0 = {
  "--menu-background-color": "#272727"
};
function Ei() {
  return Ei = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ei.apply(this, arguments);
}
const I0 = Ei({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, r0, t0, a0, $0, s0, b0, O0, C0, m0, u0, e0, o0, n0, T0, l0, p0, S0, w0, f0, k0, v0, y0, h0, i0, d0, c0, V0, P0, E0, M0, g0);
var Mi = {
  dark: I0
}, un = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Je = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ul = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function N0(e) {
  return ["ampm", "24hr"].includes(e);
}
var D0 = {
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
    validator: N0
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
}, Fs = (e, n) => e === "24hr" || n === "am", xi = (e, n, r) => {
  var a = un.findIndex((i) => z(i) === z(r)), t = Fs(e, n) ? r : Je[a];
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
}, Rs = (e) => {
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
  } = xi(t, i, o), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: p,
      minute: y
    } = en(l);
    f = p === v && a > y;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: O
    } = en(s);
    f = g === v && a < O;
  }
  if (l && s) {
    var {
      hour: T,
      minute: S
    } = en(l), {
      hour: b,
      minute: E
    } = en(s);
    f = b === v && a < E || T === v && a > S;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Us = (e) => {
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
  } = xi(t, i, o), c = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: g,
      second: O
    } = en(s);
    c = y === f && g < l || g === l && a > O;
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
      hour: E,
      minute: w,
      second: D
    } = en(s), {
      hour: k,
      minute: A,
      second: I
    } = en(u);
    c = E === f && w < l || k === f && A > l || E === f && w === l && a > D || k === f && A === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: B0,
  classes: A0
} = ne("time-picker");
function z0(e, n) {
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
const L0 = Q({
  render: z0,
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
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = W(() => e.type === "hour" ? un : ul), u = (g, O) => {
      var T;
      g = (T = g) != null ? T : e.type === "minute" ? e.time.minute : e.time.second;
      var S = e.type === "minute" ? Rs : Us, b = {
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
      return O && e.type === "minute" && Reflect.deleteProperty(b, "minute"), S(b);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var g = e.isInner ? Je[l.value] : s.value[l.value];
      return s.value === ul ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, O) => O ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (Fs(e.format, e.ampm))
          return t.value.includes(g);
        var O = un.findIndex((T) => T === g);
        return i.value.includes(O);
      }
      return u(g, !0);
    }, c = (g, O, T) => {
      var S = 2 * Math.PI / 12 * g - Math.PI / 2, b = 50 * (1 + Math.cos(S)), E = 50 * (1 + Math.sin(S)), w = () => v(g, T) ? f(O) ? {
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
        top: E + "%",
        backgroundColor: D,
        color: k
      };
    }, p = () => {
      var {
        width: g,
        height: O
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: O
      };
    }, y = () => {
      if (l.value !== void 0) {
        var g = e.ampm === "am" ? un : Je;
        return gr(g[l.value], 2, "0");
      }
    };
    return ae([l, () => e.isInner], (g, O) => {
      var [T, S] = g, [b, E] = O, w = T === b && S === E;
      if (!(w || e.type !== "hour" || l.value === void 0)) {
        var D = S ? Je[l.value] : y(), k = e.useSeconds ? ":" + e.time.second : "", A = D + ":" + e.time.minute + k;
        e.preventNextUpdate || r("update", A), r("change-prevent-update");
      }
    }), ae(() => e.rad, (g, O) => {
      if (!(e.type === "hour" || g === void 0 || O === void 0)) {
        var T = g / 6 >= 0 ? g / 6 : g / 6 + 60, S = O / 6 >= 0 ? O / 6 : O / 6 + 60;
        if (T !== S) {
          var b, {
            hourStr: E
          } = xi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var w = re().minute(T).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            b = E + ":" + w + D;
          }
          if (e.type === "second") {
            var k = re().second(T).format("ss"), A = e.useSeconds ? ":" + k : "";
            b = E + ":" + e.time.minute + A;
          }
          r("update", b);
        }
      }
    }), ae([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [O, T, S] = g;
      if (t.value = [], O && !T) {
        var {
          hour: b
        } = en(O), E = un.filter((Z) => z(Z) > b), w = Je.filter((Z) => z(Z) > b);
        t.value = [...E, ...w];
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
      n: B0,
      classes: A0,
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
  n: F0,
  classes: R0
} = ne("time-picker"), U0 = (e) => (kr(""), e = e(), $r(), e), Y0 = /* @__PURE__ */ U0(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
)), W0 = {
  key: 0
};
function H0(e, n) {
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
        ), Y0, B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          _(e.time.minute),
          3
        ), e.useSeconds ? (h(), V("span", W0, ":")) : J("v-if", !0), e.useSeconds ? (h(), V(
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
const Ca = Q({
  render: H0,
  name: "VarTimePicker",
  components: {
    Clock: L0
  },
  props: D0,
  setup(e) {
    var n = P(null), r = P(null), a = P(null), t = P(!1), i = P(!1), o = P(!1), l = P(!1), s = P(!1), u = P(void 0), d = P(0), v = P(0), f = P("hour"), c = P("am"), p = P(!1), y = P(!1), g = P({
      hour: "00",
      minute: "00",
      second: "00"
    }), O = Ie({
      x: 0,
      y: 0
    }), T = Ie({
      x: [],
      y: []
    }), S = W(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), b = (M) => {
      N(e["onUpdate:modelValue"], M), N(e.onChange, M);
    }, E = (M) => M * 57.29577951308232, w = (M) => {
      l.value = !1, y.value = !1, f.value = M;
    }, D = (M) => {
      var {
        disableHour: R
      } = a.value, U = un.findIndex((le) => z(le) === z(g.value.hour)), x = M === "am" ? un : Je, ie = [...x.slice(U), ...x.slice(0, U)];
      return ie.find((le, de) => (i.value = de !== 0, !R.includes(le)));
    }, k = (M) => {
      if (!e.readonly) {
        c.value = M;
        var R = D(M);
        if (!!R) {
          var U = e.useSeconds ? ":" + g.value.second : "", x = gr(R, 2, "0") + ":" + g.value.minute + U;
          b(x);
        }
      }
    }, A = (M, R) => {
      var U = M >= T.x[0] && M <= T.x[1], x = R >= T.y[0] && R <= T.y[1];
      return U && x;
    }, I = (M) => {
      var R = e.format === "24hr" ? "HH" : "hh", {
        hour: U,
        minute: x,
        second: ie
      } = en(M);
      return {
        hour: re().hour(U).format(R),
        minute: re().minute(x).format("mm"),
        second: re().second(ie).format("ss")
      };
    }, C = (M) => {
      var R = M / 30;
      return R >= 0 ? R : R + 12;
    }, $ = () => {
      var {
        width: M,
        height: R
      } = a.value.getSize(), U = O.x - M / 2 - 8, x = O.x + M / 2 + 8, ie = O.y - R / 2 - 8, le = O.y + R / 2 + 8;
      return {
        rangeXMin: U,
        rangeXMax: x,
        rangeYMin: ie,
        rangeYMax: le
      };
    }, L = (M, R, U) => {
      var {
        disableHour: x
      } = a.value;
      o.value = A(M, R);
      var ie = Math.round(U / 30) * 30 + 90, le = C(ie), de = t.value ? un[le] : Je[le];
      if (x.includes(de) || (t.value = e.format === "24hr" ? A(M, R) : !1), t.value === o.value) {
        var we = t.value || c.value === "pm" ? Je[le] : un[le];
        p.value = x.includes(we), !p.value && (u.value = ie, l.value = !0);
      }
    }, Y = (M) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(M / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      y.value = Rs(ie), !y.value && (d.value = U, s.value = !0);
    }, j = (M) => {
      var {
        disableHour: R
      } = a.value, U = Math.round(M / 6) * 6 + 90, x = U / 6 >= 0 ? U / 6 : U / 6 + 60, ie = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        minute: z(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: R,
        allowedTime: e.allowedTime
      };
      Us(ie) || (v.value = U);
    }, F = () => {
      var {
        left: M,
        top: R,
        width: U,
        height: x
      } = n.value.getBoundingClientRect();
      if (O.x = M + U / 2, O.y = R + x / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: ie,
          rangeXMax: le,
          rangeYMin: de,
          rangeYMax: we
        } = $();
        T.x = [ie, le], T.y = [de, we];
      }
    }, Z = (M) => {
      if (M.preventDefault(), !e.readonly) {
        F();
        var {
          clientX: R,
          clientY: U
        } = M.touches[0], x = R - O.x, ie = U - O.y, le = Math.round(E(Math.atan2(ie, x)));
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
    return ae(() => e.modelValue, (M) => {
      if (M) {
        var {
          hour: R,
          minute: U,
          second: x
        } = en(M), ie = re().hour(R).format("hh"), le = re().hour(R).format("HH"), de = re().minute(U).format("mm"), we = re().second(x).format("ss");
        u.value = (ie === "12" ? 0 : z(ie)) * 30, d.value = z(de) * 6, v.value = z(we) * 6, g.value = I(M), e.format !== "24hr" && (c.value = gr("" + R, 2, "0") === le && Je.includes(le) ? "pm" : "am"), t.value = e.format === "24hr" && Je.includes(le);
      }
    }, {
      immediate: !0
    }), {
      n: F0,
      classes: R0,
      getRad: S,
      time: g,
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
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
var j0 = {
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
function dl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
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
      var i = e.apply(n, r);
      function o(s) {
        dl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        dl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: G0,
  classes: q0
} = ne("uploader"), K0 = 0, X0 = ["onClick"], Z0 = ["onClick"], J0 = ["src", "alt"], Q0 = ["multiple", "accept", "capture", "disabled"], x0 = ["src"];
function _0(e, n) {
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
            Z0
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
            J0
          )) : J("v-if", !0), B(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          X0
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
          Q0
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
            x0
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
const ka = Q({
  render: _0,
  name: "VarUploader",
  directives: {
    Ripple: Ue
  },
  components: {
    VarIcon: Te,
    VarPopup: bn,
    VarFormDetails: He
  },
  props: j0,
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
        if (qe(H) && to(H)) {
          nr(H);
          return;
        }
        qe(H) && io(H) && (a.value = Y, r.value = !0);
      }
    }, p = (Y) => ({
      id: K0++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), y = (Y) => {
      var j = Y.target, {
        files: F
      } = j;
      return Array.from(F);
    }, g = (Y) => new Promise((j) => {
      var F = new FileReader();
      F.onload = () => {
        var Z = F.result;
        Y.file.type.startsWith("image") && (Y.cover = Z), Y.url = Z, j(Y);
      }, F.readAsDataURL(Y.file);
    }), O = (Y) => Y.map(g), T = (Y) => {
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
      var Y = vl(function* (j) {
        var {
          maxsize: F,
          maxlength: Z,
          modelValue: H,
          onOversize: X,
          onAfterRead: M,
          readonly: R,
          disabled: U
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || U || R)) {
          var x = (Ee) => Ee.filter((ln) => ln.file.size > z(F) ? (N(X, Ie(ln)), !1) : !0), ie = (Ee) => {
            var ln = Math.min(Ee.length, z(Z) - H.length);
            return Ee.slice(0, ln);
          }, le = y(j), de = le.map(p);
          de = F != null ? x(de) : de, de = Z != null ? ie(de) : de;
          var we = yield Promise.all(O(de)), Re = yield Promise.all(T(we)), Qe = Re.filter((Ee) => {
            var {
              valid: ln
            } = Ee;
            return ln;
          }).map((Ee) => {
            var {
              varFile: ln
            } = Ee;
            return ln;
          });
          N(e["onUpdate:modelValue"], [...H, ...Qe]), j.target.value = "", Qe.forEach((Ee) => N(M, Ie(Ee)));
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), b = /* @__PURE__ */ function() {
      var Y = vl(function* (j) {
        var {
          disabled: F,
          readonly: Z,
          modelValue: H,
          onBeforeRemove: X,
          onRemove: M
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || F || Z) && !(X && !(yield X(j)))) {
          var R = H.filter((U) => U !== j);
          N(M, j), A("onRemove"), N(e["onUpdate:modelValue"], R);
        }
      });
      return function(F) {
        return Y.apply(this, arguments);
      };
    }(), E = () => e.modelValue.filter((Y) => Y.state === "success"), w = () => e.modelValue.filter((Y) => Y.state === "error"), D = () => e.modelValue.filter((Y) => Y.state === "loading"), k = {
      getSuccess: E,
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
      n: G0,
      classes: q0,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: io,
      isHTMLSupportImage: to,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: f,
      handleChange: S,
      handleRemove: b,
      getSuccess: E,
      getError: w,
      getLoading: D,
      validate: C,
      resetValidation: d,
      reset: $
    };
  }
});
ka.install = function(e) {
  e.component(ka.name, ka);
};
function eb(e) {
  yr.install && e.use(yr), Br.install && e.use(Br), Ar.install && e.use(Ar), sr.install && e.use(sr), zr.install && e.use(zr), Lr.install && e.use(Lr), nn.install && e.use(nn), Fr.install && e.use(Fr), ur.install && e.use(ur), dr.install && e.use(dr), Rr.install && e.use(Rr), vr.install && e.use(vr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), Wr.install && e.use(Wr), on.install && e.use(on), Hr.install && e.use(Hr), jr.install && e.use(jr), Gr.install && e.use(Gr), br.install && e.use(br), qr.install && e.use(qr), Xn.install && e.use(Xn), He.install && e.use(He), Te.install && e.use(Te), Kr.install && e.use(Kr), nr.install && e.use(nr), Xr.install && e.use(Xr), Zr.install && e.use(Zr), pr.install && e.use(pr), ht.install && e.use(ht), Jr.install && e.use(Jr), Qr.install && e.use(Qr), $n.install && e.use($n), Ya.install && e.use(Ya), xt.install && e.use(xt), _n.install && e.use(_n), xr.install && e.use(xr), _r.install && e.use(_r), ea.install && e.use(ea), Cr.install && e.use(Cr), bn.install && e.use(bn), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), ia.install && e.use(ia), oa.install && e.use(oa), Ue.install && e.use(Ue), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), Bn.install && e.use(Bn), fa.install && e.use(fa), ca.install && e.use(ca), ma.install && e.use(ma), Qn.install && e.use(Qn), Ga.install && e.use(Ga), Zn.install && e.use(Zn), Jn.install && e.use(Jn), ha.install && e.use(ha), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Sa.install && e.use(Sa), Mi.install && e.use(Mi), Ca.install && e.use(Ca), ka.install && e.use(ka);
}
const rb = {
  install: eb,
  ActionSheet: yr,
  AppBar: Br,
  BackTop: Ar,
  Badge: sr,
  BottomNavigation: zr,
  BottomNavigationItem: Lr,
  Button: nn,
  Card: Fr,
  Cell: ur,
  Checkbox: dr,
  CheckboxGroup: Rr,
  Chip: vr,
  Col: Ur,
  Collapse: Yr,
  CollapseItem: Wr,
  Context: on,
  Countdown: Hr,
  Counter: jr,
  DatePicker: Gr,
  Dialog: br,
  Divider: qr,
  Form: Xn,
  FormDetails: He,
  Icon: Te,
  Image: Kr,
  ImagePreview: nr,
  IndexAnchor: Xr,
  IndexBar: Zr,
  Input: pr,
  Lazy: ht,
  Link: Jr,
  List: Qr,
  Loading: $n,
  LoadingBar: Ya,
  Locale: xt,
  Menu: _n,
  Option: xr,
  Overlay: _r,
  Pagination: ea,
  Picker: Cr,
  Popup: bn,
  Progress: na,
  PullRefresh: ra,
  Radio: aa,
  RadioGroup: ta,
  Rate: ia,
  Result: oa,
  Ripple: Ue,
  Row: la,
  Select: sa,
  Skeleton: ua,
  Slider: da,
  Snackbar: Bn,
  Space: fa,
  Step: ca,
  Steps: ma,
  Sticky: Qn,
  StyleProvider: Ga,
  Swipe: Zn,
  SwipeItem: Jn,
  Switch: ha,
  Tab: ga,
  TabItem: ya,
  Table: ba,
  Tabs: wa,
  TabsItems: Sa,
  Themes: Mi,
  TimePicker: Ca,
  Uploader: ka
};
export {
  yr as ActionSheet,
  Br as AppBar,
  Ar as BackTop,
  sr as Badge,
  zr as BottomNavigation,
  Lr as BottomNavigationItem,
  nn as Button,
  Fr as Card,
  ur as Cell,
  dr as Checkbox,
  Rr as CheckboxGroup,
  vr as Chip,
  Ur as Col,
  Yr as Collapse,
  Wr as CollapseItem,
  on as Context,
  Hr as Countdown,
  jr as Counter,
  Gr as DatePicker,
  br as Dialog,
  qr as Divider,
  Xn as Form,
  He as FormDetails,
  Te as Icon,
  Kr as Image,
  nr as ImagePreview,
  Xr as IndexAnchor,
  Zr as IndexBar,
  pr as Input,
  ht as Lazy,
  Jr as Link,
  Qr as List,
  $n as Loading,
  Ya as LoadingBar,
  xt as Locale,
  _n as Menu,
  xr as Option,
  _r as Overlay,
  ea as Pagination,
  Cr as Picker,
  bn as Popup,
  na as Progress,
  ra as PullRefresh,
  aa as Radio,
  ta as RadioGroup,
  ia as Rate,
  oa as Result,
  Ue as Ripple,
  la as Row,
  sa as Select,
  ua as Skeleton,
  da as Slider,
  Bn as Snackbar,
  fa as Space,
  ca as Step,
  ma as Steps,
  Qn as Sticky,
  Ga as StyleProvider,
  Zn as Swipe,
  Jn as SwipeItem,
  ha as Switch,
  ga as Tab,
  ya as TabItem,
  ba as Table,
  wa as Tabs,
  Sa as TabsItems,
  Mi as Themes,
  Ca as TimePicker,
  ka as Uploader,
  rb as default,
  eb as install
};
