import { reactive as Ne, ref as E, onMounted as Ue, onUnmounted as tr, onActivated as Ii, onDeactivated as Ni, getCurrentInstance as Ia, provide as fl, computed as W, inject as cl, nextTick as Ee, createApp as Ks, onBeforeUnmount as Di, h as ml, isVNode as bt, watch as te, onBeforeMount as Xs, defineComponent as _, createVNode as ne, Teleport as Ka, Transition as Re, withDirectives as $e, vShow as Xa, mergeProps as Pe, openBlock as y, createBlock as pe, resolveDynamicComponent as Na, normalizeClass as m, normalizeStyle as X, resolveComponent as ie, resolveDirective as qe, withCtx as ce, createElementVNode as B, renderSlot as q, toDisplayString as ee, createElementBlock as P, Fragment as Ve, renderList as De, createCommentVNode as Q, onUpdated as Bi, createTextVNode as ge, pushScopeId as $r, popScopeId as Tr, withModifiers as Bn, normalizeProps as pl, guardReactiveProps as Zs, vModelText as Js, toRefs as Qs, withKeys as no, toRaw as ro, TransitionGroup as xs, Comment as _s } from "vue";
var hl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(hl);
const ln = Ne(hl), Ke = (e) => typeof e == "string", qt = (e) => typeof e == "boolean", Ge = (e) => typeof e == "number", Ai = (e) => Object.prototype.toString.call(e) === "[object Object]", eu = (e) => typeof e == "object" && e !== null, ye = (e) => Array.isArray(e), nu = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Gn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Ke(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : qt(e) ? Number(e) : e, wt = (e, n) => {
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
}, Li = () => typeof window < "u", ao = (e) => [...new Set(e)], ru = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), au = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var to = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), io = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), tu = (e) => {
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
      this.has(r) && wt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Kt = (e) => e, oo = (e) => Math.pow(e, 3), gl = (e) => e < 0.5 ? oo(e * 2) / 2 : 1 - oo((1 - e) * 2) / 2, St = (e, n) => e == null ? n : e, yl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, yr = function(e, n, r) {
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
function iu(e) {
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
function ou(e) {
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
function Ct(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Ri(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function lu(e) {
  return Xt.apply(this, arguments);
}
function Xt() {
  return Xt = iu(function* (e) {
    yield Vn();
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
  }), Xt.apply(this, arguments);
}
function Rt(e) {
  var {
    transform: n
  } = window.getComputedStyle(e);
  return +n.slice(n.lastIndexOf(",") + 2, n.length - 1);
}
function Or(e) {
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
function su(e) {
  for (var n = [], r = e; r !== window; )
    r = Or(r), n.push(r);
  return n;
}
var bl = (e) => Ke(e) && e.endsWith("rem"), uu = (e) => Ke(e) && e.endsWith("px") || Ge(e), du = (e) => Ke(e) && e.endsWith("%"), wl = (e) => Ke(e) && e.endsWith("vw"), Sl = (e) => Ke(e) && e.endsWith("vh"), vu = (e) => Ke(e) && e.startsWith("calc("), fu = (e) => Ke(e) && e.startsWith("var("), Be = (e) => {
  if (Ge(e))
    return e;
  if (uu(e))
    return +e.replace("px", "");
  if (wl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Sl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (bl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ke(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return du(e) || wl(e) || Sl(e) || bl(e) || vu(e) || fu(e) ? e : Be(e) + "px";
}, Je = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function On(e) {
  var n = yl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function cu(e) {
  var n = yl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function kt(e) {
  On(() => {
    On(e);
  });
}
function Vn() {
  return new Promise((e) => {
    On(() => {
      On(e);
    });
  });
}
function Ya(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = Ct(e), s = Ri(e);
  return new Promise((u) => {
    var d = () => {
      var v = (Date.now() - o) / t;
      if (v < 1) {
        var f = l + (r - l) * i(v), c = s + (a - s) * i(v);
        e.scrollTo(c, f), On(d);
      } else
        e.scrollTo(a, r), u();
    };
    On(d);
  });
}
function Cl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + ru(a);
    return n[i] = t, n;
  }, {});
}
function mu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var pu = ["collect", "clear"];
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
function hu(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
  return r;
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
function en(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function gu(e) {
  var n = Ks(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Da(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => ml(e, dt({}, n, r));
    }
  }, {
    unmount: t
  } = gu(a);
  return {
    unmountInstance: t
  };
}
function yu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      bt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function kn(e) {
  var n = Ne([]), r = Ia(), a = () => {
    var l = yu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    wt(n, l);
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
function $n(e) {
  if (!kl(e))
    return {
      index: null
    };
  var n = cl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Ia();
  Ue(() => {
    Ee().then(() => r(i));
  }), tr(() => {
    Ee().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function cn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    wt(n, i);
  }, t = (i) => {
    fl(e, dt({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function mn(e) {
  if (!kl(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = cl(e), {
    collect: r,
    clear: a
  } = n, t = hu(n, pu), i = (o) => {
    Ue(() => r(o)), Di(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function kl(e) {
  var n = Ia();
  return e in n.provides;
}
function pn() {
  var e = E(""), n = /* @__PURE__ */ function() {
    var t = vo(function* (i, o, l) {
      if (!ye(i) || !i.length)
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
function bu(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), tr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Ui() {
  var e = E(!1);
  return Ii(() => {
    e.value = !1;
  }), Ni(() => {
    e.value = !0;
  }), {
    disabled: e
  };
}
function re(e) {
  var n = "var", r = n + "-" + e, a = (i) => i ? i[0] === "$" ? i.replace("$", n) : i.startsWith("--") ? "" + r + i : r + "__" + i : r, t = function() {
    for (var i = arguments.length, o = new Array(i), l = 0; l < i; l++)
      o[l] = arguments[l];
    return o.map((s) => {
      if (ye(s)) {
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
function V(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (ye(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function Y(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function vt() {
  return vt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, vt.apply(this, arguments);
}
var {
  n: $l
} = re("ripple"), fo = 250;
function wu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Su(e, n) {
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
      } = Su(this, e), s = document.createElement("div");
      s.classList.add($l()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), wu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function Zt() {
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
  !mu() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Cu(e, n) {
  var r, a, t;
  e._ripple = vt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : ln.touchmoveForbid,
    removeRipple: Zt.bind(e)
  }), e.addEventListener("touchstart", Tl, {
    passive: !0
  }), e.addEventListener("touchmove", Ol, {
    passive: !0
  }), e.addEventListener("dragstart", Zt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function ku(e) {
  e.removeEventListener("touchstart", Tl), e.removeEventListener("touchmove", Ol), e.removeEventListener("dragstart", Zt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function $u(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : ln.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = vt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Fe = {
  mounted: Cu,
  unmounted: ku,
  updated: $u,
  install(e) {
    e.directive("ripple", this);
  }
};
function Tu(e) {
  return ["top", "bottom", "right", "left", "center"].includes(e);
}
var Za = {
  show: {
    type: Boolean,
    default: !1
  },
  position: {
    type: String,
    default: "center",
    validator: Tu
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  onClickOverlay: Y(),
  "onUpdate:show": Y(),
  onRouteChange: Y()
};
function Vl() {
  var e = Object.keys(ln.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function xa(e) {
  ln.locks[e] = 1, Vl();
}
function _a(e) {
  delete ln.locks[e], Vl();
}
function $t(e, n) {
  var {
    uid: r
  } = Ia();
  n && te(n, (a) => {
    a === !1 ? _a(r) : a === !0 && e() === !0 && xa(r);
  }), te(e, (a) => {
    n && n() === !1 || (a === !0 ? xa(r) : _a(r));
  }), Xs(() => {
    n && n() === !1 || e() === !0 && xa(r);
  }), tr(() => {
    n && n() === !1 || e() === !0 && _a(r);
  }), Ii(() => {
    n && n() === !1 || e() === !0 && xa(r);
  }), Ni(() => {
    n && n() === !1 || e() === !0 && _a(r);
  });
}
function Ja(e, n) {
  var r = E(ln.zIndex);
  return te(e, (a) => {
    a && (ln.zIndex += n, r.value = ln.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
  };
}
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
function Ou(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var {
  n: Mn,
  classes: Ut
} = re("popup");
const wn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Za,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ja(() => e.show, 3), {
      disabled: i
    } = Ui(), o = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      V(v), d && V(e["onUpdate:show"], !1);
    };
    $t(() => e.show, () => e.lockScroll), te(() => e.show, (d) => {
      V(d ? e.onOpen : e.onClose);
    }), bu(() => V(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return ne("div", {
        class: Ut(Mn("overlay"), d),
        style: Jt({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => ne("div", Pe({
      class: Ut(Mn("content"), Mn("--" + e.position), [e.defaultStyle, Mn("--content-background-color")], [e.defaultStyle, Mn("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [V(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: p,
        position: w
      } = e;
      return ne(Re, {
        name: Mn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [$e(ne("div", {
          class: Ut(Mn("$--box"), Mn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), ne(Re, {
          name: p || Mn("$-pop-" + w)
        }, {
          default: () => [f && s()]
        })]), [[Xa, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return ne(Ka, {
          to: d,
          disabled: i.value
        }, Ou(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
wn.install = function(e) {
  e.component(wn.name, wn);
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
  onClick: Y()
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
function Vu(e) {
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
  n: Pu,
  classes: Eu
} = re("icon");
function Mu(e, n) {
  return y(), pe(
    Na(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
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
const Oe = _({
  render: Mu,
  name: "VarIcon",
  props: Pl,
  setup(e) {
    var n = E(""), r = E(!1), a = /* @__PURE__ */ function() {
      var t = Vu(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || z(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Ee(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, z(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return te(() => e.name, a, {
      immediate: !0
    }), {
      n: Pu,
      classes: Eu,
      nextName: n,
      shrinking: r,
      isURL: nu,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
Oe.install = function(e) {
  e.component(Oe.name, Oe);
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
var Iu = Qt({
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
  onSelect: Y(),
  "onUpdate:show": Y()
}, en(Za, [
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
}, Nu = {
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
function Ml() {
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
    e[i] = xt({}, e[i], o), a(i);
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
  packs: Du,
  pack: We,
  add: Il,
  use: Nl,
  merge: Bu
} = Ml();
Il("zh-CN", El);
Nl("zh-CN");
const _t = {
  zhCN: El,
  enUS: Nu,
  packs: Du,
  pack: We,
  add: Il,
  use: Nl,
  merge: Bu,
  useLocale: Ml
};
var {
  n: Au,
  classes: zu
} = re("action-sheet"), Lu = ["onClick"];
function Ru(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = qe("ripple");
  return y(), pe(
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
      default: ce(() => [B(
        "div",
        Pe({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [q(e.$slots, "title", {}, () => [B(
          "div",
          {
            class: m(e.n("title"))
          },
          ee(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), q(e.$slots, "actions", {}, () => [(y(!0), P(
          Ve,
          null,
          De(e.actions, (i) => $e((y(), P(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: X({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (y(), pe(
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
            )) : Q("v-if", !0), B(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ee(i.name),
              3
            )],
            14,
            Lu
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
const sr = _({
  render: Ru,
  name: "VarActionSheet",
  directives: {
    Ripple: Fe
  },
  components: {
    VarPopup: wn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Iu,
  setup(e) {
    var n = E(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        V(o, t), i && V(e["onUpdate:show"], !1);
      }
    }, a = (t) => V(e["onUpdate:show"], t);
    return te(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Au,
      classes: zu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: We,
      dt: St,
      handleSelect: r
    };
  }
});
var Wn;
function br(e) {
  return Li() ? new Promise((n) => {
    br.close();
    var r = Ne(e);
    r.teleport = "body", Wn = r;
    var {
      unmountInstance: a
    } = Da(sr, r, {
      onSelect: (t) => {
        V(r.onSelect, t), n(t);
      },
      onClose: () => {
        V(r.onClose), n("close");
      },
      onClosed: () => {
        V(r.onClosed), a(), Wn === r && (Wn = null);
      },
      onRouteChange: () => {
        a(), Wn === r && (Wn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }) : Promise.resolve();
}
br.Component = sr;
sr.install = function(e) {
  e.component(sr.name, sr);
};
br.close = () => {
  if (Wn != null) {
    var e = Wn;
    Wn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
br.install = function(e) {
  e.component(sr.name, sr);
};
function Uu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Yu = {
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
    validator: Uu
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
  classes: Wu
} = re("app-bar");
function Hu(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: X({
        background: e.color,
        color: e.textColor
      })
    },
    [B(
      "div",
      {
        class: m(e.n("left"))
      },
      [q(e.$slots, "left"), e.titlePosition === "left" ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: X({
            paddingLeft: e.paddingLeft
          })
        },
        [q(e.$slots, "default", {}, () => [ge(
          ee(e.title),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [q(e.$slots, "default", {}, () => [ge(
        ee(e.title),
        1
      )])],
      2
    )) : Q("v-if", !0), B(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: X({
            paddingRight: e.paddingRight
          })
        },
        [q(e.$slots, "default", {}, () => [ge(
          ee(e.title),
          1
        )])],
        6
      )) : Q("v-if", !0), q(e.$slots, "right")],
      2
    )],
    6
  );
}
const Ar = _({
  render: Hu,
  name: "VarAppBar",
  props: Yu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(), t = E(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(i), Bi(i), {
      n: Fu,
      classes: Wu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function ju(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function Gu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var qn = {
  type: {
    type: String,
    default: "circle",
    validator: ju
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: Gu
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
  n: qu,
  classes: Ku
} = re("loading"), Xu = (e) => ($r(""), e = e(), Tr(), e), Zu = /* @__PURE__ */ Xu(() => /* @__PURE__ */ B(
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
)), Ju = [Zu];
function Qu(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [q(e.$slots, "default"), e.loading ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.isShow ? (y(), P(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [B(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: X({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          Ju,
          6
        )],
        2
      )) : Q("v-if", !0), (y(!0), P(
        Ve,
        null,
        De(e.loadingTypeDict, (r, a) => (y(), P(
          Ve,
          {
            key: a
          },
          [e.type === a ? (y(), P(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(y(!0), P(
              Ve,
              null,
              De(r, (t) => (y(), P(
                "div",
                {
                  key: t + a,
                  style: X({
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
      )), e.$slots.description || e.description ? (y(), P(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: X({
            color: e.color
          })
        },
        [q(e.$slots, "description", {}, () => [ge(
          ee(e.description),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const Tn = _({
  render: Qu,
  name: "VarLoading",
  props: qn,
  setup(e, n) {
    var {
      slots: r
    } = n, a = {
      wave: 5,
      cube: 4,
      rect: 8,
      disappear: 3
    }, t = W(() => V(r.default) ? e.loading : !0);
    return {
      n: qu,
      classes: Ku,
      multiplySizeUnit: Je,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
Tn.install = function(e) {
  e.component(Tn.name, Tn);
};
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
function xu(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function _u(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ed = {
  type: {
    type: String,
    default: "default",
    validator: xu
  },
  size: {
    type: String,
    default: "normal",
    validator: _u
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
  loadingType: en(qn, "type"),
  loadingSize: en(qn, "size"),
  loadingColor: ei({}, en(qn, "color"), {
    default: "currentColor"
  }),
  onClick: Y(),
  onTouchstart: Y()
}, {
  n: nd,
  classes: rd
} = re("button"), ad = ["disabled"];
function td(e, n) {
  var r = ie("var-loading"), a = qe("ripple");
  return $e((y(), P(
    "button",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.n("--" + e.size), [e.block, e.n("$--flex") + " " + e.n("--block"), e.n("$--inline-flex")], [e.disabled, e.n("--disabled")], [e.text, e.n("--text-" + e.type) + " " + e.n("--text"), e.n("--" + e.type) + " " + e.n("$-elevation--2")], [e.text && e.disabled, e.n("--text-disabled")], [e.round, e.n("--round")], [e.outline, e.n("--outline")])),
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
    )) : Q("v-if", !0), B(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [q(e.$slots, "default")],
      2
    )],
    46,
    ad
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const rn = _({
  render: td,
  name: "VarButton",
  components: {
    VarLoading: Tn
  },
  directives: {
    Ripple: Fe
  },
  props: ed,
  setup(e) {
    var n = E(!1), r = (i) => {
      e.autoLoading && (n.value = !0, i = ye(i) ? i : [i], Promise.all(i).then(() => {
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
      !s || o || l || n.value || r(V(s, i));
    }, t = (i) => {
      var {
        loading: o,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || o || l || n.value || r(V(s, i));
    };
    return {
      n: nd,
      classes: rd,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
rn.install = function(e) {
  e.component(rn.name, rn);
};
var id = {
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
  onClick: Y()
}, {
  n: od,
  classes: ld
} = re("back-top");
function sd(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return y(), pe(
    Ka,
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
        onClick: n[0] || (n[0] = Bn(function() {
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
const zr = _({
  render: sd,
  name: "VarBackTop",
  components: {
    VarButton: rn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: id,
  setup(e) {
    var n = E(!1), r = E(null), a = E(!0), t, i = (u) => {
      V(e.onClick, u);
      var d = Ri(t);
      Ya(t, {
        left: d,
        duration: e.duration,
        animation: gl
      });
    }, o = () => {
      n.value = Ct(t) >= Be(e.visibilityHeight);
    }, l = zi(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (Ke(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (eu(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Ue(() => {
      t = e.target ? s() : Or(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Di(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: od,
      classes: ld,
      click: i
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
function ud(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function dd(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var vd = {
  type: {
    type: String,
    default: "default",
    validator: ud
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
    validator: dd
  },
  icon: {
    type: String
  }
}, {
  n: zn,
  classes: fd
} = re("badge"), cd = {
  key: 1
};
function md(e, n) {
  var r = ie("var-icon");
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [ne(
      Re,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ce(() => [$e(B(
          "span",
          Pe(e.$attrs, {
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
          )) : (y(), P(
            "span",
            cd,
            ee(e.values),
            1
          ))],
          16
        ), [[Xa, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), q(e.$slots, "default")],
    2
  );
}
const ur = _({
  render: md,
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: vd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = W(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && zn("position") + " " + zn("--" + l), v = s ? zn("dot") : null, f = i(), c = u ? zn("icon") : null;
      return [zn("--" + o), d, v, f, c];
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
        return zn("dot--right");
      if (l && o.includes("left"))
        return zn("dot--left");
    };
    return {
      n: zn,
      classes: fd,
      values: t,
      contentClass: a
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
var pd = {
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
  onChange: Y(),
  "onUpdate:active": Y(),
  onBeforeChange: Y(),
  onFabClick: Y(),
  fabProps: {
    type: Object
  }
}, Dl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Bl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function hd() {
  var {
    childProviders: e,
    bindChildren: n
  } = cn(Dl), {
    length: r
  } = kn(Bl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: gd,
  classes: yd
} = re("bottom-navigation"), {
  n: Tt
} = re("bottom-navigation-item"), mo = Tt("--right-half-space"), po = Tt("--left-half-space"), ho = Tt("--right-space"), bd = {
  type: "primary"
};
function wd(e, n) {
  var r = ie("var-button");
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: X("z-index:" + e.zIndex)
    },
    [q(e.$slots, "default"), e.$slots.fab ? (y(), pe(
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
        default: ce(() => [q(e.$slots, "fab")]),
        _: 3
      },
      16,
      ["class", "onClick"]
    )) : Q("v-if", !0)],
    6
  );
}
const Lr = _({
  render: wd,
  name: "VarBottomNavigation",
  components: {
    VarButton: rn
  },
  props: pd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = E(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = E({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = hd(), v = () => {
      s.value === 0 || f() || c() || p();
    }, f = () => u.find(($) => {
      var {
        name: D
      } = $;
      return t.value === D.value;
    }), c = () => u.find(($) => {
      var {
        index: D
      } = $;
      return t.value === D.value;
    }), p = () => {
      !Ge(t.value) || (t.value < 0 ? V(e["onUpdate:active"], 0) : t.value > s.value - 1 && V(e["onUpdate:active"], s.value - 1));
    }, w = ($) => {
      t.value !== $ && (e.onBeforeChange ? b($) : T($));
    }, b = ($) => {
      var D = V(e.onBeforeChange, $);
      D = ye(D) ? D : [D], Promise.all(D).then((I) => {
        I.some((g) => !g) || T($);
      });
    }, T = ($) => {
      V(e["onUpdate:active"], $), V(e.onChange, $);
    }, k = () => {
      var $ = M();
      $.forEach((D) => {
        D.classList.remove(mo, po, ho);
      });
    }, C = ($) => {
      var D = M(), I = D.length, g = $ % 2 === 0;
      D.forEach((O, R) => {
        S(g, O, R, I);
      });
    }, S = ($, D, I, g) => {
      var O = I === g - 1;
      if (!$ && O) {
        D.classList.add(ho);
        return;
      }
      var R = I === g / 2 - 1, F = I === g / 2;
      R ? D.classList.add(mo) : F && D.classList.add(po);
    }, M = () => Array.from(a.value.querySelectorAll("." + Tt())), h = () => {
      V(e.onFabClick);
    }, A = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: w
    };
    return d(A), te(() => s.value, v), te(() => e.fabProps, ($) => {
      l.value = ni({}, bd, $);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      !r.fab || C(s.value);
    }), Bi(() => {
      k(), r.fab && C(s.value);
    }), {
      n: gd,
      classes: yd,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: h,
      fabProps: l
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var Sd = {
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
  onClick: Y()
};
function Cd() {
  var {
    parentProvider: e,
    bindParent: n
  } = mn(Dl), {
    index: r
  } = $n(Bl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: kd,
  classes: $d
} = re("bottom-navigation-item"), Td = {
  type: "danger",
  dot: !0
};
function Od(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = qe("ripple");
  return $e((y(), P(
    "button",
    {
      class: m(e.classes(e.n(), [e.active === e.index || e.active === e.name, e.n("--active")])),
      style: X({
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
    )) : Q("v-if", !0), q(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (y(), pe(
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
    )) : Q("v-if", !0), B(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? Q("v-if", !0) : (y(), P(
        Ve,
        {
          key: 0
        },
        [ge(
          ee(e.label),
          1
        )],
        2112
      )), q(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Rr = _({
  render: Od,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ur,
    VarIcon: Oe
  },
  directives: {
    Ripple: Fe
  },
  props: Sd,
  setup(e) {
    var n = W(() => e.name), r = W(() => e.badge), a = E({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = Cd(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, p = (c = n.value) != null ? c : t.value;
      V(e.onClick, p), V(i.onToggle, p);
    };
    return o(d), te(() => r.value, (c) => {
      a.value = c === !0 ? Td : r.value;
    }, {
      immediate: !0
    }), {
      n: kd,
      classes: $d,
      index: t,
      active: l,
      badge: r,
      badgeProps: a,
      computeColorStyle: v,
      handleClick: f
    };
  }
});
Rr.install = function(e) {
  e.component(Rr.name, Rr);
};
function Vd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Pd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Vd,
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
  "onUpdate:floating": Y(),
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
  onClick: Y()
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
  n: Ed,
  classes: Md
} = re("card"), Id = 500, Nd = ["src", "alt"];
function Dd(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = qe("ripple");
  return $e((y(), P(
    "div",
    {
      ref: "card",
      class: m(e.classes(e.n(), [e.isRow, e.n("--layout-row")], [e.outline, e.n("--outline")], [e.elevation, e.n("$-elevation--" + e.elevation), e.n("$-elevation--1")])),
      style: X({
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
      [q(e.$slots, "image", {}, () => [e.src ? (y(), P(
        "img",
        {
          key: 0,
          class: m(e.n("image")),
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
        Nd
      )) : Q("v-if", !0)]), B(
        "div",
        {
          class: m(e.n("container"))
        },
        [q(e.$slots, "title", {}, () => [e.title ? (y(), P(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ee(e.title),
          3
        )) : Q("v-if", !0)]), q(e.$slots, "subtitle", {}, () => [e.subtitle ? (y(), P(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ee(e.subtitle),
          3
        )) : Q("v-if", !0)]), q(e.$slots, "description", {}, () => [e.description ? (y(), P(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ee(e.description),
          3
        )) : Q("v-if", !0)]), e.$slots.extra ? (y(), P(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [q(e.$slots, "extra")],
          2
        )) : Q("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (y(), P(
          "div",
          {
            key: 1,
            class: m(e.n("floating-content")),
            style: X({
              height: e.contentHeight,
              opacity: e.opacity,
              transition: "opacity " + e.floatingDuration * 2 + "ms"
            })
          },
          [q(e.$slots, "floating-content")],
          6
        )) : Q("v-if", !0)],
        2
      ), e.showFloatingButtons ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("floating-buttons"), e.n("$--box"))),
          style: X({
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
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Bn(e.close, ["stop"])
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
    ), B(
      "div",
      {
        class: m(e.n("holder")),
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
const Ur = _({
  render: Dd,
  name: "VarCard",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarButton: rn
  },
  props: Pd,
  setup(e) {
    var n = E(null), r = E(null), a = E("auto"), t = E("auto"), i = E("100%"), o = E("100%"), l = E("auto"), s = E("auto"), u = E(void 0), d = E("hidden"), v = E("0px"), f = E("0"), c = W(() => e.layout === "row"), p = E(!1), w = E(!1), {
      zIndex: b
    } = Ja(() => e.floating, 1);
    $t(() => e.floating, () => !c.value);
    var T = "auto", k = "auto", C = null, S = E(null), M = /* @__PURE__ */ function() {
      var $ = yo(function* () {
        clearTimeout(S.value), clearTimeout(C), S.value = null, S.value = setTimeout(/* @__PURE__ */ yo(function* () {
          var {
            width: D,
            height: I,
            left: g,
            top: O
          } = n.value.getBoundingClientRect();
          a.value = we(D), t.value = we(I), i.value = a.value, o.value = t.value, l.value = we(O), s.value = we(g), u.value = "fixed", T = l.value, k = s.value, p.value = !0, yield Vn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", w.value = !0;
        }), e.ripple ? Id : 0);
      });
      return function() {
        return $.apply(this, arguments);
      };
    }(), h = () => {
      clearTimeout(C), clearTimeout(S.value), S.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = k, v.value = "0px", f.value = "0", p.value = !1, C = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", k = "auto", d.value = "hidden", u.value = void 0, w.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      V(e["onUpdate:floating"], !1);
    };
    return te(() => e.floating, ($) => {
      c.value || Ee(() => {
        $ ? M() : h();
      });
    }, {
      immediate: !0
    }), {
      n: Ed,
      classes: Md,
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
      zIndex: b,
      isRow: c,
      close: A,
      showFloatingButtons: p,
      floated: w
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var Bd = {
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
  n: Ad,
  classes: zd
} = re("cell");
function Ld(e, n) {
  var r = ie("var-icon");
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("icon"), [e.iconClass, e.iconClass]))
      },
      [q(e.$slots, "icon", {}, () => [ne(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : Q("v-if", !0), B(
      "div",
      {
        class: m(e.n("content"))
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [q(e.$slots, "default", {}, () => [ge(
          ee(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [q(e.$slots, "description", {}, () => [ge(
          ee(e.description),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    ), e.$slots.extra ? (y(), P(
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
const dr = _({
  render: Ld,
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  props: Bd,
  setup() {
    return {
      n: Ad,
      classes: zd
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var Rd = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: Ud
} = re("form-details"), Yd = {
  key: 0
}, Fd = {
  key: 0
};
function Wd(e, n) {
  return y(), pe(
    Re,
    {
      name: e.n()
    },
    {
      default: ce(() => [e.errorMessage || e.extraMessage ? (y(), P(
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
          [ne(
            Re,
            {
              name: e.n("message")
            },
            {
              default: ce(() => [e.errorMessage ? (y(), P(
                "div",
                Yd,
                ee(e.errorMessage),
                1
              )) : Q("v-if", !0)]),
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
          [ne(
            Re,
            {
              name: e.n("message")
            },
            {
              default: ce(() => [e.extraMessage ? (y(), P(
                "div",
                Fd,
                ee(e.extraMessage),
                1
              )) : Q("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        )],
        2
      )) : Q("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const je = _({
  render: Wd,
  name: "VarFormDetails",
  props: Rd,
  setup: () => ({
    n: Ud
  })
});
je.install = function(e) {
  e.component(je.name, je);
};
var Hd = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Al = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), zl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function jd() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Al), {
    length: r
  } = kn(zl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function Gd() {
  var {
    bindParent: e,
    parentProvider: n
  } = mn(Al), {
    index: r
  } = $n(zl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var Ll = Symbol("FORM_BIND_FORM_ITEM_KEY");
function hn() {
  var {
    bindParent: e,
    parentProvider: n
  } = mn(Ll), r = Ia(), a = e ? (t) => {
    e(ri({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function qd() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Ll);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: Kd,
  classes: Xd
} = re("checkbox");
function Zd(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return y(), P(
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
      [$e((y(), P(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
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
      }]]), B(
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
const vr = _({
  render: Zd,
  name: "VarCheckbox",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  props: Hd,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = E(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = Gd(), {
      form: l,
      bindForm: s
    } = hn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = pn(), c = (h) => {
      Ee(() => {
        var {
          validateTrigger: A,
          rules: $,
          modelValue: D
        } = e;
        d(A, h, $, D);
      });
    }, p = (h) => {
      n.value = h;
      var {
        checkedValue: A,
        onChange: $
      } = e;
      V(e["onUpdate:modelValue"], n.value), V($, n.value), c("onChange"), h === A ? i == null || i.onChecked(A) : i == null || i.onUnchecked(A);
    }, w = (h) => {
      var {
        disabled: A,
        readonly: $,
        checkedValue: D,
        uncheckedValue: I,
        onClick: g
      } = e;
      if (!(l != null && l.disabled.value || A) && (V(g, h), !(l != null && l.readonly.value || $))) {
        t.value = !0;
        var O = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && O || p(r.value ? I : D);
      }
    }, b = (h) => {
      var {
        checkedValue: A,
        uncheckedValue: $
      } = e;
      n.value = h.includes(A) ? A : $;
    }, T = () => {
      t.value = !1;
    }, k = () => {
      V(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, C = (h) => {
      var {
        checkedValue: A,
        uncheckedValue: $
      } = e, D = ![A, $].includes(h);
      D && (h = r.value ? $ : A), p(h);
    }, S = () => v(e.rules, e.modelValue);
    te(() => e.modelValue, (h) => {
      n.value = h;
    }, {
      immediate: !0
    });
    var M = {
      checkedValue: a,
      checked: r,
      sync: b,
      validate: S,
      resetValidation: f,
      reset: k,
      resetWithAnimation: T
    };
    return V(o, M), V(s, M), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: Kd,
      classes: Xd,
      handleClick: w,
      toggle: C,
      reset: k,
      validate: S,
      resetValidation: f
    };
  }
});
vr.install = function(e) {
  e.component(vr.name, vr);
};
function Jd(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Qd = {
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
    validator: Jd
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: xd,
  classes: _d
} = re("checkbox-group");
function ev(e, n) {
  var r = ie("var-form-details");
  return y(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
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
const Yr = _({
  render: ev,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: Qd,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = jd(), {
      bindForm: o
    } = hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = pn(), v = W(() => l.value), f = (A) => {
      Ee(() => {
        var {
          validateTrigger: $,
          rules: D,
          modelValue: I
        } = e;
        s($, A, D, I);
      });
    }, c = (A) => {
      V(e["onUpdate:modelValue"], A), V(e.onChange, A), f("onChange");
    }, p = (A) => {
      var {
        modelValue: $
      } = e;
      $.includes(A) || c([...$, A]);
    }, w = (A) => {
      var {
        modelValue: $
      } = e;
      !$.includes(A) || c($.filter((D) => D !== A));
    }, b = () => t.forEach((A) => {
      var {
        sync: $
      } = A;
      return $(e.modelValue);
    }), T = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, k = () => {
      var A = t.map((D) => {
        var {
          checkedValue: I
        } = D;
        return I.value;
      }), $ = ao(A);
      return T(), V(e["onUpdate:modelValue"], $), $;
    }, C = () => {
      var A = t.filter((D) => {
        var {
          checked: I
        } = D;
        return !I.value;
      }).map((D) => {
        var {
          checkedValue: I
        } = D;
        return I.value;
      }), $ = ao(A);
      return T(), V(e["onUpdate:modelValue"], $), $;
    }, S = () => {
      V(e["onUpdate:modelValue"], []), d();
    }, M = () => u(e.rules, e.modelValue);
    te(() => e.modelValue, b, {
      deep: !0
    }), te(() => a.value, b);
    var h = {
      max: n,
      checkedCount: r,
      onChecked: p,
      onUnchecked: w,
      validate: M,
      resetValidation: d,
      reset: S,
      errorMessage: v
    };
    return i(h), V(o, h), {
      errorMessage: l,
      n: xd,
      classes: _d,
      checkAll: k,
      inverseAll: C,
      reset: S,
      validate: M,
      resetValidation: d
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
function nv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function rv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var av = {
  type: {
    type: String,
    default: "default",
    validator: nv
  },
  size: {
    type: String,
    default: "normal",
    validator: rv
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: en(Pl, "name"),
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
  onClose: Y()
}, {
  n: Ln,
  classes: tv
} = re("chip");
function iv(e, n) {
  var r = ie("var-icon");
  return y(), pe(
    Re,
    {
      name: e.n("$-fade")
    },
    {
      default: ce(() => [B(
        "span",
        Pe({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [q(e.$slots, "left"), B(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [q(e.$slots, "default")],
          2
        ), q(e.$slots, "right"), e.closable ? (y(), P(
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
    },
    8,
    ["name"]
  );
}
const fr = _({
  render: iv,
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: av,
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
      } = e, s = Ln(t ? "$--flex" : "$--inline-flex"), u = o ? Ln("plain") + " " + Ln("plain-" + i) : Ln("--" + i), d = l ? Ln("--round") : null;
      return [Ln("--" + a), s, u, d];
    });
    return {
      n: Ln,
      classes: tv,
      chipStyles: n,
      contentClass: r
    };
  }
});
fr.install = function(e) {
  e.component(fr.name, fr);
};
function ov(e) {
  return ["row", "column"].includes(e);
}
var lv = {
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
    validator: ov
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
  onClick: Y()
}, Rl = Symbol("ROW_BIND_COL_KEY"), Ul = Symbol("ROW_COUNT_COL_KEY");
function sv() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Rl), {
    length: r
  } = kn(Ul);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function uv() {
  var {
    parentProvider: e,
    bindParent: n
  } = mn(Rl), {
    index: r
  } = $n(Ul);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: et,
  classes: dv
} = re("col");
function vv(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.span >= 0, e.n("--span-" + e.span)], [e.offset, e.n("--offset-" + e.offset)], ...e.getSize("xs", e.xs), ...e.getSize("sm", e.sm), ...e.getSize("md", e.md), ...e.getSize("lg", e.lg), ...e.getSize("xl", e.xl))),
      style: X({
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
const Fr = _({
  render: vv,
  name: "VarCol",
  props: lv,
  setup(e) {
    var n = E({
      left: 0,
      right: 0
    }), r = W(() => z(e.span)), a = W(() => z(e.offset)), {
      row: t,
      bindRow: i
    } = uv(), o = {
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
        Number(f) >= 0 && d.push(et("--span-" + s + "-" + f)), v && d.push(et("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(et("--span-" + s + "-" + u));
      return d;
    };
    return te([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), V(i, o), {
      n: et,
      classes: dv,
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
var Yl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Fl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function fv() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Yl), {
    length: r
  } = kn(Fl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var cv = {
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
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: mv
} = re("collapse");
function pv(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Wr = _({
  render: pv,
  name: "VarCollapse",
  props: cv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = fv(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !ye(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && ye(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, p) => o() ? p ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((w) => w !== c) : null, s = (c, p) => {
      var w = l(c, p);
      V(e["onUpdate:modelValue"], w), V(e.onChange, w);
    }, u = () => {
      if (e.accordion)
        return r.find((p) => {
          var {
            name: w
          } = p;
          return e.modelValue === w.value;
        });
      var c = r.filter((p) => {
        var {
          name: w
        } = p;
        return w.value === void 0 ? !1 : e.modelValue.includes(w.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: p,
        name: w
      } = c;
      return w.value === void 0 ? e.modelValue === p.value : !1;
    }) : r.filter((c) => {
      var {
        index: p,
        name: w
      } = c;
      return w.value === void 0 ? e.modelValue.includes(p.value) : !1;
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
          var w = e.accordion ? c === p : c.includes(p);
          p.init(e.accordion, w);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), te(() => n.value, () => Ee().then(v)), te(() => e.modelValue, () => Ee().then(v)), {
      n: mv
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
function hv() {
  var {
    parentProvider: e,
    bindParent: n
  } = mn(Yl), {
    index: r
  } = $n(Fl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var gv = {
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
  n: yv,
  classes: bv
} = re("collapse-item");
function wv(e, n) {
  var r = ie("var-icon");
  return y(), P(
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
        [q(e.$slots, "title", {}, () => [ge(
          ee(e.title),
          1
        )])],
        2
      ), B(
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
    ), $e(B(
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
        [q(e.$slots, "default")],
        2
      )],
      34
    ), [[Xa, e.show]])],
    2
  );
}
const Hr = _({
  render: wv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: gv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = hv(), t = !0, i = E(null), o = E(!1), l = E(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = W(() => e.name), f = (C, S) => {
      s.value === void 0 || C && ye(s.value) || S === l.value || (l.value = S, c(!0));
    }, c = (C) => {
      e.disabled || C || d(e.name || n.value, !l.value);
    }, p = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Ee(() => {
        var {
          offsetHeight: C
        } = i.value;
        i.value.style.height = 0 + "px", On(() => {
          i.value.style.height = C + "px", t && kt(() => {
            t && T();
          });
        });
      }));
    }, w = () => {
      t = !1;
    }, b = () => {
      if (!!i.value) {
        var {
          offsetHeight: C
        } = i.value;
        i.value.style.height = C + "px", On(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, k = {
      index: n,
      name: v,
      init: f
    };
    return a(k), te(l, (C) => {
      C ? p() : b();
    }), {
      n: yv,
      start: w,
      classes: bv,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: T
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var Sv = {
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
  onEnd: Y(),
  onChange: Y()
}, {
  n: Cv
} = re("countdown"), ai = 1e3, ti = 60 * ai, ii = 60 * ti, bo = 24 * ii;
function kv(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default", pl(Zs(e.timeData)), () => [ge(
      ee(e.showTime),
      1
    )])],
    2
  );
}
const jr = _({
  render: kv,
  name: "VarCountdown",
  props: Sv,
  setup(e) {
    var n = E(0), r = E(!1), a = E(""), t = E(0), i = E(0), o = E({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, p) => {
      var w = Object.values(p), b = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (b.forEach((C, S) => {
        c.includes(C) ? c = c.replace(C, yr("" + w[S], 2, "0")) : w[S + 1] += w[S] * T[S];
      }), c.includes("S")) {
        var k = yr("" + w[w.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", k) : c.includes("SS") ? c = c.replace("SS", k.slice(0, 2)) : c = c.replace("S", k.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var p = Math.floor(c / bo), w = Math.floor(c % bo / ii), b = Math.floor(c % ii / ti), T = Math.floor(c % ti / ai), k = Math.floor(c % ai), C = {
        days: p,
        hours: w,
        minutes: b,
        seconds: T,
        milliseconds: k
      };
      o.value = C, V(e.onChange, o.value), a.value = l(e.format, C);
    }, u = () => {
      var {
        time: c,
        onEnd: p,
        autoStart: w
      } = e, b = Date.now();
      n.value || (n.value = b + z(c));
      var T = n.value - b;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        V(p);
        return;
      }
      (w || r.value) && (t.value = On(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, cu(t.value), u();
    };
    return te(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: Cv,
      start: d,
      pause: v,
      reset: f
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Er = 9e15, ir = 1e9, oi = "0123456789abcdef", ft = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ct = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", li = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Er,
  maxE: Er,
  crypto: !1
}, Wl, In, fe = !0, Ot = "[DecimalError] ", nr = Ot + "Invalid argument: ", Hl = Ot + "Precision limit exceeded", jl = Ot + "crypto unavailable", Gl = "[object Decimal]", Xe = Math.floor, Le = Math.pow, $v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Tv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Ov = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, ql = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Sn = 1e7, de = 7, Vv = 9007199254740991, Pv = ft.length - 1, si = ct.length - 1, K = { toStringTag: Gl };
K.absoluteValue = K.abs = function() {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), ue(e);
};
K.ceil = function() {
  return ue(new this.constructor(this), this.e + 1, 2);
};
K.clampedTo = K.clamp = function(e, n) {
  var r, a = this, t = a.constructor;
  if (e = new t(e), n = new t(n), !e.s || !n.s)
    return new t(NaN);
  if (e.gt(n))
    throw Error(nr + n);
  return r = a.cmp(e), r < 0 ? e : a.cmp(n) > 0 ? n : new t(a);
};
K.comparedTo = K.cmp = function(e) {
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
K.cosine = K.cos = function() {
  var e, n, r = this, a = r.constructor;
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Ev(a, Ql(a, r)), a.precision = e, a.rounding = n, ue(In == 2 || In == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, i = d.s * Le(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = He(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = Le(r, 1 / 3), e = Xe((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Te(u.plus(d).times(l), u.plus(s), o + 2, 1), He(l.d).slice(0, o) === (r = He(a.d)).slice(0, o))
      if (r = r.slice(o - 3, o + 1), r == "9999" || !t && r == "4999") {
        if (!t && (ue(l, e + 1, 0), l.times(l).times(l).eq(d))) {
          a = l;
          break;
        }
        o += 4, t = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (ue(a, e + 1, 1), n = !a.times(a).times(a).eq(d));
        break;
      }
  return fe = !0, ue(a, e, v.rounding, n);
};
K.decimalPlaces = K.dp = function() {
  var e, n = this.d, r = NaN;
  if (n) {
    if (e = n.length - 1, r = (e - Xe(this.e / de)) * de, e = n[e], e)
      for (; e % 10 == 0; e /= 10)
        r--;
    r < 0 && (r = 0);
  }
  return r;
};
K.dividedBy = K.div = function(e) {
  return Te(this, new this.constructor(e));
};
K.dividedToIntegerBy = K.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Te(n, new r(e), 0, 1, 1), r.precision, r.rounding);
};
K.equals = K.eq = function(e) {
  return this.cmp(e) === 0;
};
K.floor = function() {
  return ue(new this.constructor(this), this.e + 1, 3);
};
K.greaterThan = K.gt = function(e) {
  return this.cmp(e) > 0;
};
K.greaterThanOrEqualTo = K.gte = function(e) {
  var n = this.cmp(e);
  return n == 1 || n === 0;
};
K.hyperbolicCosine = K.cosh = function() {
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Pt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Ta(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return ue(i, o.precision = r, o.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = Ta(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Pt(5, e)), t = Ta(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, ue(t, n, r, !0);
};
K.hyperbolicTangent = K.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Te(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
K.inverseCosine = K.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? bn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? bn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = bn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
};
K.inverseHyperbolicCosine = K.acosh = function() {
  var e, n, r = this, a = r.constructor;
  return r.lte(1) ? new a(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, a.rounding = 1, fe = !1, r = r.times(r).minus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln()) : new a(r);
};
K.inverseHyperbolicSine = K.asinh = function() {
  var e, n, r = this, a = r.constructor;
  return !r.isFinite() || r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, a.rounding = 1, fe = !1, r = r.times(r).plus(1).sqrt().plus(r), fe = !0, a.precision = e, a.rounding = n, r.ln());
};
K.inverseHyperbolicTangent = K.atanh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = Te(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
K.inverseSine = K.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = bn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= si)
      return o = bn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= si)
      return o = bn(d, v + 4, f).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), fe = !0, ue(o, d.precision = v, d.rounding = f, !0);
};
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Xe(this.e / de) > this.d.length - 2;
};
K.isNaN = function() {
  return !this.s;
};
K.isNegative = K.isNeg = function() {
  return this.s < 0;
};
K.isPositive = K.isPos = function() {
  return this.s > 0;
};
K.isZero = function() {
  return !!this.d && this.d[0] === 0;
};
K.lessThan = K.lt = function(e) {
  return this.cmp(e) < 0;
};
K.lessThanOrEqualTo = K.lte = function(e) {
  return this.cmp(e) < 1;
};
K.logarithm = K.log = function(e) {
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
  if (fe = !1, l = v + c, o = Kn(u, l), a = n ? mt(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), Fa(s.d, t = v, f))
    do
      if (l += 10, o = Kn(u, l), a = n ? mt(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), !i) {
        +He(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (Fa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
K.minus = K.sub = function(e) {
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
    return fe ? ue(e, l, s) : e;
  }
  if (r = Xe(e.e / de), d = Xe(c.e / de), u = u.slice(), i = d - r, i) {
    for (v = i < 0, v ? (n = u, i = -i, o = f.length) : (n = f, r = d, o = u.length), a = Math.max(Math.ceil(l / de), o) + 2, i > a && (i = a, n.length = 1), n.reverse(), a = i; a--; )
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
        u[t] = Sn - 1;
      --u[t], u[a] += Sn;
    }
    u[a] -= f[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = Vt(u, r), fe ? ue(e, l, s) : e) : new p(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Te(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Te(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return ui(this);
};
K.naturalLogarithm = K.ln = function() {
  return Kn(this);
};
K.negated = K.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
K.plus = K.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, l, s) : e;
  if (i = Xe(v.e / de), a = Xe(e.e / de), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / de), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / Sn | 0, u[t] %= Sn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = Vt(u, a), fe ? ue(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(nr + e);
  return r.d ? (n = Kl(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Iv(a, Ql(a, r)), a.precision = e, a.rounding = n, ue(In > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (fe = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = He(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Xe((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus(Te(o, i, r + 2, 1)).times(0.5), He(i.d).slice(0, r) === (n = He(a.d)).slice(0, r))
      if (n = n.slice(r - 3, r + 1), n == "9999" || !t && n == "4999") {
        if (!t && (ue(i, s + 1, 0), i.times(i).eq(o))) {
          a = i;
          break;
        }
        r += 4, t = 1;
      } else {
        (!+n || !+n.slice(1) && n.charAt(0) == "5") && (ue(a, s + 1, 1), e = !a.times(a).eq(o));
        break;
      }
  return fe = !0, ue(a, s, d.rounding, e);
};
K.tangent = K.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Te(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(In == 2 || In == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.times = K.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Xe(d.e / de) + Xe(e.e / de), s = f.length, u = c.length, s < u && (i = f, f = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * f[t - a - 1] + n, i[t--] = l % Sn | 0, n = l / Sn | 0;
    i[t] = (i[t] + n) % Sn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = Vt(i, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return Yi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, ir), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Pn(a, !0) : (an(e, 0, ir), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = Pn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = Pn(t) : (an(e, 0, ir), n === void 0 ? n = i.rounding : an(n, 0, 8), a = ue(new i(t), e + t.e + 1, n), r = Pn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, p = c.d, w = c.constructor;
  if (!p)
    return new w(c);
  if (u = r = new w(1), a = s = new w(0), n = new w(a), i = n.e = Kl(p) - c.e - 1, o = i % de, n.d[0] = Le(10, o < 0 ? de + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new w(e), !l.isInt() || l.lt(u))
      throw Error(nr + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (fe = !1, l = new w(He(p)), d = w.precision, w.precision = i = p.length * de * 2; v = Te(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Te(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Te(u, a, i, 1).minus(c).abs().cmp(Te(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], w.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Yi(this, 16, e, n);
};
K.toNearest = function(e, n) {
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
  return e.d[0] ? (fe = !1, r = Te(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
K.toNumber = function() {
  return +this;
};
K.toOctal = function(e, n) {
  return Yi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Le(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return ue(l, a, i);
  if (n = Xe(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Vv)
    return t = Xl(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = Le(+l, u), n = r == 0 || !isFinite(r) ? Xe(u * (Math.log("0." + He(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = ui(e.times(Kn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), Fa(t.d, a, i) && (n = a + 10, t = ue(ui(e.times(Kn(l, n + r)), n), n + 5, 1), +He(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = o, fe = !0, s.rounding = i, ue(t, a, i));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Pn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, ir), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = Pn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, ir), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = Pn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = Pn(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function He(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (i += Un(r)), i += a;
    o = e[n], a = o + "", r = de - a.length, r && (i += Un(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function an(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(nr + e);
}
function Fa(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), i = Le(10, de - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == Le(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == Le(10, n - 3) - 1, o;
}
function ot(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += oi.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Ev(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Pt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Ta(e, 1, n.times(t), new e(1));
  for (var i = r; i--; ) {
    var o = n.times(n);
    n = o.times(o).minus(o).times(8).plus(1);
  }
  return e.precision -= r, n;
}
var Te = function() {
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
    var u, d, v, f, c, p, w, b, T, k, C, S, M, h, A, $, D, I, g, O, R = a.constructor, F = a.s == t.s ? 1 : -1, G = a.d, L = t.d;
    if (!G || !G[0] || !L || !L[0])
      return new R(
        !a.s || !t.s || (G ? L && G[0] == L[0] : !L) ? NaN : G && G[0] == 0 || !L ? F * 0 : F / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = Sn, c = de, d = Xe(a.e / c) - Xe(t.e / c)), g = L.length, D = G.length, T = new R(F), k = T.d = [], v = 0; L[v] == (G[v] || 0); v++)
      ;
    if (L[v] > (G[v] || 0) && d--, i == null ? (h = i = R.precision, o = R.rounding) : l ? h = i + (a.e - t.e) + 1 : h = i, h < 0)
      k.push(1), p = !0;
    else {
      if (h = h / c + 2 | 0, v = 0, g == 1) {
        for (f = 0, L = L[0], h++; (v < D || f) && h--; v++)
          A = f * s + (G[v] || 0), k[v] = A / L | 0, f = A % L | 0;
        p = f || v < D;
      } else {
        for (f = s / (L[0] + 1) | 0, f > 1 && (L = e(L, f, s), G = e(G, f, s), g = L.length, D = G.length), $ = g, C = G.slice(0, g), S = C.length; S < g; )
          C[S++] = 0;
        O = L.slice(), O.unshift(0), I = L[0], L[1] >= s / 2 && ++I;
        do
          f = 0, u = n(L, C, g, S), u < 0 ? (M = C[0], g != S && (M = M * s + (C[1] || 0)), f = M / I | 0, f > 1 ? (f >= s && (f = s - 1), w = e(L, f, s), b = w.length, S = C.length, u = n(w, C, b, S), u == 1 && (f--, r(w, g < b ? O : L, b, s))) : (f == 0 && (u = f = 1), w = L.slice()), b = w.length, b < S && w.unshift(0), r(C, w, S, s), u == -1 && (S = C.length, u = n(L, C, g, S), u < 1 && (f++, r(C, g < S ? O : L, S, s))), S = C.length) : u === 0 && (f++, C = [0]), k[v++] = f, u && C[0] ? C[S++] = G[$] || 0 : (C = [G[$]], S = 1);
        while (($++ < D || C[0] !== void 0) && h--);
        p = C[0] !== void 0;
      }
      k[0] || k.shift();
    }
    if (c == 1)
      T.e = d, Wl = p;
    else {
      for (v = 1, f = k[0]; f >= 10; f /= 10)
        v++;
      T.e = v + d * c - 1, ue(T, l ? i + T.e + 1 : i, o, p);
    }
    return T;
  };
}();
function ue(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor;
  e:
    if (n != null) {
      if (v = e.d, !v)
        return e;
      for (t = 1, l = v[0]; l >= 10; l /= 10)
        t++;
      if (i = n - t, i < 0)
        i += de, o = n, d = v[f = 0], s = d / Le(10, t - o - 1) % 10 | 0;
      else if (f = Math.ceil((i + 1) / de), l = v.length, f >= l)
        if (a) {
          for (; l++ <= f; )
            v.push(0);
          d = s = 0, t = 1, i %= de, o = i - de + 1;
        } else
          break e;
      else {
        for (d = l = v[f], t = 1; l >= 10; l /= 10)
          t++;
        i %= de, o = i - de + t, s = o < 0 ? 0 : d / Le(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (o < 0 ? d : d % Le(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / Le(10, t - o) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Le(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (i == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Le(10, de - i), v[f] = o > 0 ? (d / Le(10, t - o) % Le(10, o) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (i = 1, o = v[0]; o >= 10; o /= 10)
              i++;
            for (o = v[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, v[0] == Sn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != Sn)
              break;
            v[f--] = 0, l = 1;
          }
      for (i = v.length; v[--i] === 0; )
        v.pop();
    }
  return fe && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function Pn(e, n, r) {
  if (!e.isFinite())
    return Jl(e);
  var a, t = e.e, i = He(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Un(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Un(-t - 1) + i, r && (a = r - o) > 0 && (i += Un(a))) : t >= o ? (i += Un(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Un(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Un(a))), i;
}
function Vt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function mt(e, n, r) {
  if (n > Pv)
    throw fe = !0, r && (e.precision = r), Error(Hl);
  return ue(new e(ft), n, 1, !0);
}
function bn(e, n, r) {
  if (n > si)
    throw Error(Hl);
  return ue(new e(ct), n, r, !0);
}
function Kl(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Un(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function Xl(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (i = i.times(n), So(i.d, o) && (t = !0)), r = Xe(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), So(n.d, o);
  }
  return fe = !0, i;
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
function ui(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, p = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = p) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Le(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = ue(i.times(e), s, 1), r = r.times(++d), l = o.plus(Te(i, r, s, 1)), He(l.d).slice(0, s) === He(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = ue(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Fa(o.d, s - a, c, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return ue(o, f.precision = p, c, fe = !0);
      else
        return f.precision = p, o;
    }
    o = l;
  }
}
function Kn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, p = 10, w = e, b = w.d, T = w.constructor, k = T.rounding, C = T.precision;
  if (w.s < 0 || !b || !b[0] || !w.e && b[0] == 1 && b.length == 1)
    return new T(b && !b[0] ? -1 / 0 : w.s != 1 ? NaN : b ? 0 : w);
  if (n == null ? (fe = !1, d = C) : d = n, T.precision = d += p, r = He(b), a = r.charAt(0), Math.abs(i = w.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      w = w.times(e), r = He(w.d), a = r.charAt(0), c++;
    i = w.e, a > 1 ? (w = new T("0." + r), i++) : w = new T(a + "." + r.slice(1));
  } else
    return u = mt(T, d + 2, C).times(i + ""), w = Kn(new T(a + "." + r.slice(1)), d - p).plus(u), T.precision = C, n == null ? ue(w, C, k, fe = !0) : w;
  for (v = w, s = o = w = Te(w.minus(1), w.plus(1), d, 1), f = ue(w.times(w), d, 1), t = 3; ; ) {
    if (o = ue(o.times(f), d, 1), u = s.plus(Te(o, new T(t), d, 1)), He(u.d).slice(0, d) === He(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(mt(T, d + 2, C).times(i + ""))), s = Te(s, new T(c), d, 1), n == null)
        if (Fa(s.d, d - p, k, l))
          T.precision = d += p, u = o = w = Te(v.minus(1), v.plus(1), d, 1), f = ue(w.times(w), d, 1), t = l = 1;
        else
          return ue(s, T.precision = C, k, fe = !0);
      else
        return T.precision = C, s;
    s = u, t += 2;
  }
}
function Jl(e) {
  return String(e.s * e.s / 0);
}
function di(e, n) {
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
function Mv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), ql.test(n))
      return di(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Tv.test(n))
    r = 16, n = n.toLowerCase();
  else if ($v.test(n))
    r = 2;
  else if (Ov.test(n))
    r = 8;
  else
    throw Error(nr + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = Xl(a, new a(r), i, i * 2)), u = ot(n, r, Sn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Vt(u, d), e.d = u, fe = !1, o && (e = Te(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Le(2, s) : Xn.pow(2, s))), fe = !0, e);
}
function Iv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Ta(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Pt(5, r)), n = Ta(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function Ta(e, n, r, a, t) {
  var i, o, l, s, u = e.precision, d = Math.ceil(u / de);
  for (fe = !1, s = r.times(r), l = new e(a); ; ) {
    if (o = Te(l.times(s), new e(n++ * n++), u, 1), l = t ? a.plus(o) : a.minus(o), a = Te(o.times(s), new e(n++ * n++), u, 1), o = l.plus(a), o.d[d] !== void 0) {
      for (i = d; o.d[i] === l.d[i] && i--; )
        ;
      if (i == -1)
        break;
    }
    i = l, l = a, a = o, o = i;
  }
  return fe = !0, o.d.length = d + 1, o;
}
function Pt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function Ql(e, n) {
  var r, a = n.s < 0, t = bn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return In = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    In = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return In = wo(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    In = wo(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Yi(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor, p = r !== void 0;
  if (p ? (an(r, 1, ir), a === void 0 ? a = c.rounding : an(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = Jl(e);
  else {
    for (d = Pn(e), o = d.indexOf("."), p ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = ot(Pn(f), 10, t), f.e = f.d.length), v = ot(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = p ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = Te(e, f, r, a, 0, t), v = e.d, i = e.e, u = Wl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += oi.charAt(v[o]);
      if (p) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = ot(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += oi.charAt(v[o]);
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
function Nv(e) {
  return new this(e).abs();
}
function Dv(e) {
  return new this(e).acos();
}
function Bv(e) {
  return new this(e).acosh();
}
function Av(e, n) {
  return new this(e).plus(n);
}
function zv(e) {
  return new this(e).asin();
}
function Lv(e) {
  return new this(e).asinh();
}
function Rv(e) {
  return new this(e).atan();
}
function Uv(e) {
  return new this(e).atanh();
}
function Yv(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = bn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? bn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = bn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(Te(e, n, i, 1)), n = bn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Te(e, n, i, 1)), r;
}
function Fv(e) {
  return new this(e).cbrt();
}
function Wv(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function Hv(e, n, r) {
  return new this(e).clamp(n, r);
}
function jv(e) {
  if (!e || typeof e != "object")
    throw Error(Ot + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    ir,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Er,
    0,
    "toExpPos",
    0,
    Er,
    "maxE",
    0,
    Er,
    "minE",
    -Er,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = li[r]), (a = e[r]) !== void 0)
      if (Xe(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(nr + r + ": " + a);
  if (r = "crypto", t && (this[r] = li[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(jl);
      else
        this[r] = !1;
    else
      throw Error(nr + r + ": " + a);
  return this;
}
function Gv(e) {
  return new this(e).cos();
}
function qv(e) {
  return new this(e).cosh();
}
function xl(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, Co(i)) {
      u.s = i.s, fe ? !i.d || i.e > t.maxE ? (u.e = NaN, u.d = null) : i.e < t.minE ? (u.e = 0, u.d = [0]) : (u.e = i.e, u.d = i.d.slice()) : (u.e = i.e, u.d = i.d ? i.d.slice() : i.d);
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
        fe ? o > t.maxE ? (u.e = NaN, u.d = null) : o < t.minE ? (u.e = 0, u.d = [0]) : (u.e = o, u.d = [i]) : (u.e = o, u.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (u.s = NaN), u.e = NaN, u.d = null;
        return;
      }
      return di(u, i.toString());
    } else if (s !== "string")
      throw Error(nr + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), ql.test(i) ? di(u, i) : Mv(u, i);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = jv, t.clone = xl, t.isDecimal = Co, t.abs = Nv, t.acos = Dv, t.acosh = Bv, t.add = Av, t.asin = zv, t.asinh = Lv, t.atan = Rv, t.atanh = Uv, t.atan2 = Yv, t.cbrt = Fv, t.ceil = Wv, t.clamp = Hv, t.cos = Gv, t.cosh = qv, t.div = Kv, t.exp = Xv, t.floor = Zv, t.hypot = Jv, t.ln = Qv, t.log = xv, t.log10 = ef, t.log2 = _v, t.max = nf, t.min = rf, t.mod = af, t.mul = tf, t.pow = of, t.random = lf, t.round = sf, t.sign = uf, t.sin = df, t.sinh = vf, t.sqrt = ff, t.sub = cf, t.sum = mf, t.tan = pf, t.tanh = hf, t.trunc = gf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function Kv(e, n) {
  return new this(e).div(n);
}
function Xv(e) {
  return new this(e).exp();
}
function Zv(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function Jv() {
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
function Co(e) {
  return e instanceof Xn || e && e.toStringTag === Gl || !1;
}
function Qv(e) {
  return new this(e).ln();
}
function xv(e, n) {
  return new this(e).log(n);
}
function _v(e) {
  return new this(e).log(2);
}
function ef(e) {
  return new this(e).log(10);
}
function nf() {
  return Zl(this, arguments, "lt");
}
function rf() {
  return Zl(this, arguments, "gt");
}
function af(e, n) {
  return new this(e).mod(n);
}
function tf(e, n) {
  return new this(e).mul(n);
}
function of(e, n) {
  return new this(e).pow(n);
}
function lf(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : an(e, 1, ir), a = Math.ceil(e / de), this.crypto)
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
  for (a = l[--i], e %= de, a && e && (t = Le(10, de - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
    l.pop();
  if (i < 0)
    r = 0, l = [0];
  else {
    for (r = -1; l[0] === 0; r -= de)
      l.shift();
    for (a = 1, t = l[0]; t >= 10; t /= 10)
      a++;
    a < de && (r -= de - a);
  }
  return o.e = r, o.d = l, o;
}
function sf(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function uf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function df(e) {
  return new this(e).sin();
}
function vf(e) {
  return new this(e).sinh();
}
function ff(e) {
  return new this(e).sqrt();
}
function cf(e, n) {
  return new this(e).sub(n);
}
function mf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function pf(e) {
  return new this(e).tan();
}
function hf(e) {
  return new this(e).tanh();
}
function gf(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var Xn = K.constructor = xl(li);
ft = new Xn(ft);
ct = new Xn(ct);
var yf = {
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
  onBeforeChange: Y(),
  onChange: Y(),
  onIncrement: Y(),
  onDecrement: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: bf,
  classes: wf
} = re("counter"), ko = 100, $o = 600, Sf = ["inputmode", "readonly", "disabled"];
function Cf(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return y(), P(
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
      [$e(ne(
        r,
        {
          "var-counter-cover": "",
          name: "minus",
          class: m(e.classes(e.n("decrement-button"), [!e.decrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
      }]]), $e(B(
        "input",
        {
          class: m(e.classes(e.n("input"), [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
        Sf
      ), [[Js, e.inputValue]]), $e(ne(
        r,
        {
          "var-counter-cover": "",
          name: "plus",
          class: m(e.classes(e.n("increment-button"), [!e.incrementButton, e.n("--hidden")], [e.disabled || e.formDisabled, e.n("--not-allowed")])),
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
const Gr = _({
  render: Cf,
  name: "VarCounter",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  inheritAttrs: !1,
  props: yf,
  setup(e) {
    var n = E(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = pn(), {
      readonly: f,
      disabled: c
    } = l != null ? l : {}, p = () => d(e.rules, e.modelValue), w = (L) => {
      Ee(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: Z
        } = e;
        u(J, L, j, Z);
      });
    }, b = () => {
      var {
        min: L
      } = e;
      V(e["onUpdate:modelValue"], L != null ? z(L) : 0), v();
    }, T = {
      reset: b,
      validate: p,
      resetValidation: v
    }, k = W(() => {
      var {
        max: L,
        modelValue: J
      } = e;
      return L != null && z(J) >= z(L);
    }), C = W(() => {
      var {
        min: L,
        modelValue: J
      } = e;
      return L != null && z(J) <= z(L);
    }), S = (L) => {
      var {
        decimalLength: J,
        max: j,
        min: Z
      } = e, N = z(L);
      return j != null && N > z(j) && (N = z(j)), Z != null && N < z(Z) && (N = z(Z)), L = String(N), J != null && (L = N.toFixed(z(J))), L;
    }, M = (L) => {
      var {
        lazyChange: J,
        onBeforeChange: j
      } = e, {
        value: Z
      } = L.target, N = S(Z);
      J ? V(j, z(N), G) : F(N), w("onInputChange");
    }, h = () => {
      var {
        disabled: L,
        readonly: J,
        disableDecrement: j,
        decrementButton: Z,
        lazyChange: N,
        step: U,
        modelValue: H,
        onDecrement: x,
        onBeforeChange: oe
      } = e;
      if (!(c != null && c.value || f != null && f.value || L || J || j || !Z) && !C.value) {
        var se = new Xn(z(H)).minus(new Xn(z(U))).toString(), ve = S(se), Ce = z(ve);
        V(x, Ce), N ? V(oe, Ce, G) : (F(ve), w("onDecrement"));
      }
    }, A = () => {
      var {
        disabled: L,
        readonly: J,
        disableIncrement: j,
        incrementButton: Z,
        lazyChange: N,
        step: U,
        modelValue: H,
        onIncrement: x,
        onBeforeChange: oe
      } = e;
      if (!(c != null && c.value || f != null && f.value || L || J || j || !Z) && !k.value) {
        var se = new Xn(z(H)).plus(new Xn(z(U))).toString(), ve = S(se), Ce = z(ve);
        V(x, Ce), N ? V(oe, Ce, G) : (F(ve), w("onIncrement"));
      }
    }, $ = () => {
      var {
        press: L,
        lazyChange: J
      } = e;
      !L || J || (i = window.setTimeout(() => {
        R();
      }, $o));
    }, D = () => {
      var {
        press: L,
        lazyChange: J
      } = e;
      !L || J || (t = window.setTimeout(() => {
        O();
      }, $o));
    }, I = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, g = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, O = () => {
      r = window.setTimeout(() => {
        A(), O();
      }, ko);
    }, R = () => {
      a = window.setTimeout(() => {
        h(), R();
      }, ko);
    }, F = (L) => {
      n.value = L;
      var J = z(L);
      V(e["onUpdate:modelValue"], J);
    }, G = (L) => {
      F(S(String(L))), w("onLazyChange");
    };
    return V(o, T), te(() => e.modelValue, (L) => {
      F(S(String(L))), V(e.onChange, z(L));
    }), F(S(String(e.modelValue))), {
      n: bf,
      classes: wf,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: k,
      isMin: C,
      validate: p,
      reset: b,
      resetValidation: v,
      handleChange: M,
      decrement: h,
      increment: A,
      pressDecrement: $,
      pressIncrement: D,
      releaseDecrement: I,
      releaseIncrement: g,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var _l = 60, es = _l * 60, ns = es * 24, kf = ns * 7, Oa = 1e3, Yt = _l * Oa, To = es * Oa, $f = ns * Oa, Tf = kf * Oa, Fi = "millisecond", Mr = "second", Ir = "minute", Nr = "hour", Yn = "day", lt = "week", yn = "month", rs = "quarter", Fn = "year", Dr = "date", Of = "YYYY-MM-DDTHH:mm:ssZ", Oo = "Invalid Date", Vf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Pf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Ef = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var vi = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Mf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + vi(t, 2, "0") + ":" + vi(i, 2, "0");
}, If = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, yn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), yn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Nf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Df = function(n) {
  var r = {
    M: yn,
    y: Fn,
    w: lt,
    d: Yn,
    D: Dr,
    h: Nr,
    m: Ir,
    s: Mr,
    ms: Fi,
    Q: rs
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Bf = function(n) {
  return n === void 0;
};
const Af = {
  s: vi,
  z: Mf,
  m: If,
  a: Nf,
  p: Df,
  u: Bf
};
var La = "en", cr = {};
cr[La] = Ef;
var Wi = function(n) {
  return n instanceof Et;
}, pt = function e(n, r, a) {
  var t;
  if (!n)
    return La;
  if (typeof n == "string") {
    var i = n.toLowerCase();
    cr[i] && (t = i), r && (cr[i] = r, t = i);
    var o = n.split("-");
    if (!t && o.length > 1)
      return e(o[0]);
  } else {
    var l = n.name;
    cr[l] = n, t = l;
  }
  return !a && t && (La = t), t || !a && La;
}, ae = function(n, r) {
  if (Wi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Et(a);
}, zf = function(n, r) {
  return ae(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, ke = Af;
ke.l = pt;
ke.i = Wi;
ke.w = zf;
var Lf = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (ke.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Vf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Et = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = pt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = Lf(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return ke;
  }, n.isValid = function() {
    return this.$d.toString() !== Oo;
  }, n.isSame = function(a, t) {
    var i = ae(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ae(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ae(a);
  }, n.$g = function(a, t, i) {
    return ke.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = ke.u(t) ? !0 : t, l = ke.p(a), s = function(T, k) {
      var C = ke.w(i.$u ? Date.UTC(i.$y, k, T) : new Date(i.$y, k, T), i);
      return o ? C : C.endOf(Yn);
    }, u = function(T, k) {
      var C = [0, 0, 0, 0], S = [23, 59, 59, 999];
      return ke.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? C : S).slice(k)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Fn:
        return o ? s(1, 0) : s(31, 11);
      case yn:
        return o ? s(1, v) : s(0, v + 1);
      case lt: {
        var p = this.$locale().weekStart || 0, w = (d < p ? d + 7 : d) - p;
        return s(o ? f - w : f + (6 - w), v);
      }
      case Yn:
      case Dr:
        return u(c + "Hours", 0);
      case Nr:
        return u(c + "Minutes", 1);
      case Ir:
        return u(c + "Seconds", 2);
      case Mr:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = ke.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Yn] = l + "Date", i[Dr] = l + "Date", i[yn] = l + "Month", i[Fn] = l + "FullYear", i[Nr] = l + "Hours", i[Ir] = l + "Minutes", i[Mr] = l + "Seconds", i[Fi] = l + "Milliseconds", i)[o], u = o === Yn ? this.$D + (t - this.$W) : t;
    if (o === yn || o === Fn) {
      var d = this.clone().set(Dr, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Dr, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[ke.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = ke.p(t), s = function(f) {
      var c = ae(i);
      return ke.w(c.date(c.date() + Math.round(f * a)), i);
    };
    if (l === yn)
      return this.set(yn, this.$M + a);
    if (l === Fn)
      return this.set(Fn, this.$y + a);
    if (l === Yn)
      return s(1);
    if (l === lt)
      return s(7);
    var u = (o = {}, o[Ir] = Yt, o[Nr] = To, o[Mr] = Oa, o)[l] || 1, d = this.$d.getTime() + a * u;
    return ke.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || Oo;
    var o = a || Of, l = ke.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, p = function(C, S, M, h) {
      return C && (C[S] || C(t, o)) || M[S].slice(0, h);
    }, w = function(C) {
      return ke.s(s % 12 || 12, C, "0");
    }, b = c || function(k, C, S) {
      var M = k < 12 ? "AM" : "PM";
      return S ? M.toLowerCase() : M;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: ke.s(d + 1, 2, "0"),
      MMM: p(i.monthsShort, d, f, 3),
      MMMM: p(f, d),
      D: this.$D,
      DD: ke.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: p(i.weekdaysMin, this.$W, v, 2),
      ddd: p(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: ke.s(s, 2, "0"),
      h: w(1),
      hh: w(2),
      a: b(s, u, !0),
      A: b(s, u, !1),
      m: String(u),
      mm: ke.s(u, 2, "0"),
      s: String(this.$s),
      ss: ke.s(this.$s, 2, "0"),
      SSS: ke.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(Pf, function(k, C) {
      return C || T[k] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = ke.p(t), s = ae(a), u = (s.utcOffset() - this.utcOffset()) * Yt, d = this - s, v = ke.m(this, s);
    return v = (o = {}, o[Fn] = v / 12, o[yn] = v, o[rs] = v / 3, o[lt] = (d - u) / Tf, o[Yn] = (d - u) / $f, o[Nr] = d / To, o[Ir] = d / Yt, o[Mr] = d / Oa, o)[l] || d, i ? v : ke.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(yn).$D;
  }, n.$locale = function() {
    return cr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = pt(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return ke.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), as = Et.prototype;
ae.prototype = as;
[["$ms", Fi], ["$s", Mr], ["$m", Ir], ["$H", Nr], ["$W", Yn], ["$M", yn], ["$y", Fn], ["$D", Dr]].forEach(function(e) {
  as[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ae.extend = function(e, n) {
  return e.$i || (e(n, Et, ae), e.$i = !0), ae;
};
ae.locale = pt;
ae.isDayjs = Wi;
ae.unix = function(e) {
  return ae(e * 1e3);
};
ae.en = cr[La];
ae.Ls = cr;
ae.p = {};
const ts = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, is = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function Rf(e) {
  return ["date", "month"].includes(e);
}
var st = [{
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
}], za = [{
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
}], Uf = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: Rf
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
  onPreview: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Yf
} = re("picker-header");
function Ff(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return y(), P(
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
    ), B(
      "div",
      {
        class: m(e.n("value")),
        onClick: n[1] || (n[1] = (t) => e.$emit("check-panel"))
      },
      [ne(
        Re,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(y(), P(
            "div",
            {
              key: e.showDate
            },
            ee(e.showDate),
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
const os = _({
  render: Ff,
  name: "PanelHeader",
  components: {
    VarButton: rn,
    VarIcon: Oe
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
        previewYear: v
      } = s;
      if (u === "month")
        return z(v) + t.value;
      var f = (l = We.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return We.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return te(() => e.date, () => {
      t.value = 0;
    }), {
      n: Yf,
      reverse: a,
      showDate: i,
      checkDate: o
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
ae.extend(ts);
ae.extend(is);
var {
  n: nt,
  classes: Wf
} = re("month-picker"), {
  n: rt
} = re("date-picker");
function Hf(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return y(), P(
    "div",
    {
      class: m(e.n())
    },
    [B(
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
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(y(), P("ul", {
            key: e.panelKey
          }, [(y(!0), P(
            Ve,
            null,
            De(e.MONTH_LIST, (t) => (y(), P("li", {
              key: t.index
            }, [ne(
              a,
              Pe({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, fi({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: ce(() => [ge(
                  ee(e.getMonthAbbr(t.index)),
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
const jf = _({
  render: Hf,
  name: "MonthPickerPanel",
  components: {
    VarButton: rn,
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
    } = n, [a, t] = e.current.split("-"), i = E(!1), o = E(0), l = E(null), s = Ne({
      left: !1,
      right: !1
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), v = (k) => {
      var C, S;
      return (C = (S = We.value.datePickerMonthDict) == null ? void 0 : S[k].abbr) != null ? C : "";
    }, f = (k) => {
      var {
        preview: {
          previewYear: C
        },
        componentProps: {
          min: S,
          max: M
        }
      } = e, h = !0, A = !0, $ = C + "-" + k;
      return M && (h = ae($).isSameOrBefore(ae(M), "month")), S && (A = ae($).isSameOrAfter(ae(S), "month")), h && A;
    }, c = (k) => {
      var {
        choose: {
          chooseMonths: C,
          chooseDays: S,
          chooseRangeMonth: M
        },
        componentProps: {
          type: h,
          range: A
        }
      } = e;
      if (A) {
        if (!M.length)
          return !1;
        var $ = ae(k).isSameOrBefore(ae(M[1]), "month"), D = ae(k).isSameOrAfter(ae(M[0]), "month");
        return $ && D;
      }
      return h === "month" ? C.includes(k) : S.some((I) => I.includes(k));
    }, p = (k) => {
      var {
        choose: {
          chooseMonth: C
        },
        preview: {
          previewYear: S
        },
        componentProps: {
          allowedDates: M,
          color: h,
          multiple: A,
          range: $
        }
      } = e, D = S + "-" + k, I = () => $ || A ? c(D) : (C == null ? void 0 : C.index) === k && u.value, g = () => f(k) ? M ? !M(D) : !1 : !0, O = g(), R = () => O ? !0 : $ || A ? !c(D) : !u.value || (C == null ? void 0 : C.index) !== k, F = () => d.value && t === k && e.componentProps.showCurrent ? ($ || A || u.value) && O ? !0 : $ || A ? !c(D) : u.value ? (C == null ? void 0 : C.index) !== t : !0 : !1, G = () => O ? "" : F() ? h != null ? h : "" : I() ? "" : rt() + "-color-cover", L = G().startsWith(rt());
      return {
        outline: F(),
        text: R(),
        color: R() ? "" : h,
        textColor: L ? "" : G(),
        [rt() + "-color-cover"]: L,
        class: Wf(nt("button"), [O, nt("button--disabled")])
      };
    }, w = (k, C) => {
      var S = C.currentTarget;
      S.classList.contains(nt("button--disabled")) || r("choose-month", k);
    }, b = (k) => {
      i.value = k === "prev", o.value += k === "prev" ? -1 : 1, r("check-preview", "year", k);
    }, T = (k) => {
      l.value.checkDate(k);
    };
    return te(() => e.preview.previewYear, (k) => {
      var {
        componentProps: {
          min: C,
          max: S
        }
      } = e;
      S && (s.right = !ae("" + (z(k) + 1)).isSameOrBefore(ae(S), "year")), C && (s.left = !ae("" + (z(k) - 1)).isSameOrAfter(ae(C), "year"));
    }, {
      immediate: !0
    }), {
      n: nt,
      nDate: rt,
      pack: We,
      MONTH_LIST: st,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: p,
      getMonthAbbr: v,
      chooseMonth: w,
      checkDate: b
    };
  }
});
var {
  n: Vo,
  classes: Gf
} = re("year-picker"), qf = ["onClick"];
function Kf(e, n) {
  return y(), P(
    "ul",
    {
      class: m(e.n())
    },
    [(y(!0), P(
      Ve,
      null,
      De(e.yearList, (r) => (y(), P(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: X({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ee(r),
        15,
        qf
      ))),
      128
    ))],
    2
  );
}
const Xf = _({
  render: Kf,
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
        var d = ae(l).format("YYYY-MM-D"), v = z(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ae(s).format("YYYY-MM-D"), c = z(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var p = u[0]; p >= u[1]; p--)
        i.push(p);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Ue(() => {
      var i = document.querySelector("." + Vo("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: Vo,
      classes: Gf,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
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
ae.extend(ts);
ae.extend(is);
var {
  n: Pr,
  classes: Zf
} = re("day-picker"), {
  n: at
} = re("date-picker");
function Jf(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
  return y(), P(
    "div",
    {
      class: m(e.n())
    },
    [B(
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
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(y(), P("div", {
            key: e.panelKey
          }, [B(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(y(!0), P(
              Ve,
              null,
              De(e.sortWeekList, (t) => (y(), P(
                "li",
                {
                  key: t.index
                },
                ee(e.getDayAbbr(t.index)),
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
            [(y(!0), P(
              Ve,
              null,
              De(e.days, (t, i) => (y(), P("li", {
                key: i
              }, [ne(
                a,
                Pe({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, ci({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: ce(() => [ge(
                    ee(e.filterDay(t)),
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
const Qf = _({
  render: Jf,
  name: "DayPickerPanel",
  components: {
    VarButton: rn,
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
    } = n, [a, t, i] = e.current.split("-"), o = E([]), l = E(!1), s = E(0), u = E(null), d = Ne({
      left: !1,
      right: !1
    }), v = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = W(() => {
      var $;
      return e.choose.chooseYear === e.preview.previewYear && (($ = e.choose.chooseMonth) == null ? void 0 : $.index) === e.preview.previewMonth.index;
    }), c = W(() => {
      var $ = za.findIndex((D) => D.index === e.componentProps.firstDayOfWeek);
      return $ === -1 || $ === 0 ? za : za.slice($).concat(za.slice(0, $));
    }), p = ($) => {
      var D, I;
      return (D = (I = We.value.datePickerWeekDict) == null ? void 0 : I[$].abbr) != null ? D : "";
    }, w = ($) => $ > 0 ? $ : "", b = () => {
      var {
        preview: {
          previewMonth: $,
          previewYear: D
        }
      } = e, I = ae(D + "-" + $.index).daysInMonth(), g = ae(D + "-" + $.index + "-01").day(), O = c.value.findIndex((R) => R.index === "" + g);
      o.value = [...Array(O).fill(-1), ...Array.from(Array(I + 1).keys())].filter((R) => R);
    }, T = () => {
      var {
        preview: {
          previewYear: $,
          previewMonth: D
        },
        componentProps: {
          max: I,
          min: g
        }
      } = e;
      if (I) {
        var O = $ + "-" + (z(D.index) + 1);
        d.right = !ae(O).isSameOrBefore(ae(I), "month");
      }
      if (g) {
        var R = $ + "-" + (z(D.index) - 1);
        d.left = !ae(R).isSameOrAfter(ae(g), "month");
      }
    }, k = ($) => {
      var {
        preview: {
          previewYear: D,
          previewMonth: I
        },
        componentProps: {
          min: g,
          max: O
        }
      } = e, R = !0, F = !0, G = D + "-" + I.index + "-" + $;
      return O && (R = ae(G).isSameOrBefore(ae(O), "day")), g && (F = ae(G).isSameOrAfter(ae(g), "day")), R && F;
    }, C = ($) => {
      var {
        choose: {
          chooseDays: D,
          chooseRangeDay: I
        },
        componentProps: {
          range: g
        }
      } = e;
      if (g) {
        if (!I.length)
          return !1;
        var O = ae($).isSameOrBefore(ae(I[1]), "day"), R = ae($).isSameOrAfter(ae(I[0]), "day");
        return O && R;
      }
      return D.includes($);
    }, S = ($) => {
      if ($ < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Pr("button")
        };
      var {
        choose: {
          chooseDay: D
        },
        preview: {
          previewYear: I,
          previewMonth: g
        },
        componentProps: {
          allowedDates: O,
          color: R,
          multiple: F,
          range: G
        }
      } = e, L = I + "-" + g.index + "-" + $, J = () => G || F ? C(L) : z(D) === $ && f.value, j = () => k($) ? O ? !O(L) : !1 : !0, Z = j(), N = () => Z ? !0 : G || F ? !C(L) : !f.value || z(D) !== $, U = () => v.value && z(i) === $ && e.componentProps.showCurrent ? (G || F || f.value) && Z ? !0 : G || F ? !C(L) : f.value ? D !== i : !0 : !1, H = () => Z ? "" : U() ? R != null ? R : "" : J() ? "" : at() + "-color-cover", x = H().startsWith(at());
      return {
        text: N(),
        outline: U(),
        textColor: x ? "" : H(),
        [at() + "-color-cover"]: x,
        class: Zf(Pr("button"), Pr("button--usable"), [Z, Pr("button--disabled")])
      };
    }, M = ($) => {
      l.value = $ === "prev", s.value += $ === "prev" ? -1 : 1, r("check-preview", "month", $);
    }, h = ($, D) => {
      var I = D.currentTarget;
      I.classList.contains(Pr("button--disabled")) || r("choose-day", $);
    }, A = ($) => {
      u.value.checkDate($);
    };
    return Ue(() => {
      b(), T();
    }), te(() => e.preview, () => {
      b(), T();
    }), {
      n: Pr,
      nDate: at,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: w,
      getDayAbbr: p,
      checkDate: M,
      chooseDay: h,
      buttonProps: S
    };
  }
});
var {
  n: xf,
  classes: _f
} = re("date-picker");
function ec(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [B(
      "div",
      {
        class: m(e.n("title")),
        style: X({
          background: e.headerColor || e.color
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [q(e.$slots, "year", {
          year: e.chooseYear
        }, () => [ge(
          ee(e.chooseYear),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [ne(
          Re,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ce(() => {
              var i, o, l;
              return [e.type === "month" ? (y(), P("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [ge(
                ee(e.getMonthTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [ge(
                ee(e.getMonthTitle),
                1
              )]) : q(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [ge(
                ee(e.getMonthTitle),
                1
              )])])) : (y(), P("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [ge(
                ee(e.getDateTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [ge(
                ee(e.getDateTitle),
                1
              )]) : q(e.$slots, "date", pl(Pe({
                key: 2
              }, e.slotProps)), () => [ge(
                ee(e.getDateTitle),
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
      [ne(
        Re,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ce(() => [e.getPanelType === "year" ? (y(), pe(
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
const qr = _({
  render: ec,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: jf,
    YearPickerPanel: Xf,
    DayPickerPanel: Qf
  },
  props: Uf,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = ae().format("YYYY-MM-D"), [o, l] = i.split("-"), s = st.find((le) => le.index === l), u = E(!1), d = E(!1), v = E(!0), f = E(), c = E(), p = E(), w = E(s), b = E(o), T = E(!1), k = E([]), C = E([]), S = E([]), M = E([]), h = E(null), A = E(null), $ = Ne({
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
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: p.value,
      chooseMonths: k.value,
      chooseDays: C.value,
      chooseRangeMonth: S.value,
      chooseRangeDay: M.value
    })), I = W(() => ({
      previewMonth: w.value,
      previewYear: b.value
    })), g = W(() => {
      var {
        multiple: le,
        range: he
      } = e;
      if (he)
        return S.value.length ? S.value[0] + " ~ " + S.value[1] : "";
      var me = "";
      if (f.value) {
        var be, Se;
        me = (be = (Se = We.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? be : "";
      }
      return le ? "" + k.value.length + We.value.datePickerSelected : me;
    }), O = W(() => {
      var le, he, me, be, {
        multiple: Se,
        range: Ae
      } = e;
      if (Ae) {
        var Ze = M.value.map((Lt) => ae(Lt).format("YYYY-MM-DD"));
        return Ze.length ? Ze[0] + " ~ " + Ze[1] : "";
      }
      if (Se)
        return "" + C.value.length + We.value.datePickerSelected;
      if (!c.value || !f.value || !p.value)
        return "";
      var un = ae(c.value + "-" + f.value.index + "-" + p.value).day(), Vr = za.find((Lt) => Lt.index === "" + un), eo = (le = (he = We.value.datePickerWeekDict) == null ? void 0 : he[Vr.index].name) != null ? le : "", Gs = (me = (be = We.value.datePickerMonthDict) == null ? void 0 : be[f.value.index].name) != null ? me : "", qs = yr(p.value, 2, "0");
      return We.value.lang === "zh-CN" ? f.value.index + "-" + qs + " " + eo.slice(0, 3) : eo.slice(0, 3) + ", " + Gs.slice(0, 3) + " " + p.value;
    }), R = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), F = W(() => !e.touchable || ["", "year"].includes(R.value)), G = W(() => {
      var le, he, me, be, Se = ae(c.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + p.value).day(), Ae = p.value ? yr(p.value, 2, "0") : "";
      return {
        week: "" + Se,
        year: (he = c.value) != null ? he : "",
        month: (me = (be = f.value) == null ? void 0 : be.index) != null ? me : "",
        date: Ae
      };
    }), L = W(() => D.value.chooseRangeDay.map((le) => ae(le).format("YYYY-MM-DD"))), J = W(() => c.value === b.value), j = W(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === w.value.index;
    }), Z = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (le) => {
      if (!F.value) {
        var {
          clientX: he,
          clientY: me
        } = le.touches[0];
        n = he, r = me;
      }
    }, U = (le, he) => le >= he && le > 20 ? "x" : "y", H = (le) => {
      if (!F.value) {
        var {
          clientX: he,
          clientY: me
        } = le.touches[0], be = he - n, Se = me - r;
        t = U(Math.abs(be), Math.abs(Se)), a = be > 0 ? "prev" : "next";
      }
    }, x = () => {
      if (!(F.value || t !== "x")) {
        var le = R.value === "month" ? h : A;
        kt(() => {
          le.value.forwardRef(a), _i();
        });
      }
    }, oe = (le, he) => {
      var me = he === "month" ? S : M;
      if (me.value = v.value ? [le, le] : [me.value[0], le], v.value = !v.value, v.value) {
        var be = ae(me.value[0]).isAfter(me.value[1]), Se = be ? [me.value[1], me.value[0]] : [...me.value];
        V(e["onUpdate:modelValue"], Se), V(e.onChange, Se);
      }
    }, se = (le, he) => {
      var me = he === "month" ? k : C, be = he === "month" ? "YYYY-MM" : "YYYY-MM-DD", Se = me.value.map((Ze) => ae(Ze).format(be)), Ae = Se.findIndex((Ze) => Ze === le);
      Ae === -1 ? Se.push(le) : Se.splice(Ae, 1), V(e["onUpdate:modelValue"], Se), V(e.onChange, Se);
    }, ve = (le, he) => !c.value || !f.value ? !1 : J.value ? le === "month" ? he.index < f.value.index : j.value ? he < z(p.value) : f.value.index > w.value.index : c.value > b.value, Ce = (le) => {
      var {
        readonly: he,
        range: me,
        multiple: be,
        onChange: Se,
        "onUpdate:modelValue": Ae
      } = e;
      if (!(le < 0 || he)) {
        T.value = ve("day", le);
        var Ze = b.value + "-" + w.value.index + "-" + le, un = ae(Ze).format("YYYY-MM-DD");
        me ? oe(un, "day") : be ? se(un, "day") : (V(Ae, un), V(Se, un));
      }
    }, Ye = (le) => {
      var {
        type: he,
        readonly: me,
        range: be,
        multiple: Se,
        onChange: Ae,
        onPreview: Ze,
        "onUpdate:modelValue": un
      } = e;
      if (T.value = ve("month", le), he === "month" && !me) {
        var Vr = b.value + "-" + le.index;
        be ? oe(Vr, "month") : Se ? se(Vr, "month") : (V(un, Vr), V(Ae, Vr));
      } else
        w.value = le, V(Ze, z(b.value), z(w.value.index));
      d.value = !1;
    }, xe = (le) => {
      b.value = "" + le, u.value = !1, d.value = !0, V(e.onPreview, z(b.value), z(w.value.index));
    }, Me = (le, he) => {
      var me = he === "prev" ? -1 : 1;
      if (le === "year")
        b.value = "" + (z(b.value) + me);
      else {
        var be = z(w.value.index) + me;
        be < 1 && (b.value = "" + (z(b.value) - 1), be = 12), be > 12 && (b.value = "" + (z(b.value) + 1), be = 1), w.value = st.find((Se) => z(Se.index) === be);
      }
      V(e.onPreview, z(b.value), z(w.value.index));
    }, sn = () => (e.multiple || e.range) && !ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, zt = (le) => ye(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Ws = (le, he) => {
      var me = he === "month" ? S : M, be = he === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = le.map((un) => ae(un).format(be)).slice(0, 2), Ae = me.value.some((un) => zt(un));
      if (!Ae) {
        me.value = Se;
        var Ze = ae(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && Ze && (me.value = [me.value[1], me.value[0]]);
      }
    }, Hs = (le, he) => {
      var me = he === "month" ? k : C, be = he === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = Array.from(new Set(le.map((Ae) => ae(Ae).format(be))));
      me.value = Se.filter((Ae) => Ae !== "Invalid Date");
    }, js = (le) => {
      var he = ae(le).format("YYYY-MM-D");
      if (!zt(he)) {
        var [me, be, Se] = he.split("-"), Ae = st.find((Ze) => Ze.index === be);
        f.value = Ae, c.value = me, p.value = Se, w.value = Ae, b.value = me;
      }
    }, _i = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return te(() => e.modelValue, (le) => {
      if (!(!sn() || zt(le) || !le))
        if (e.range) {
          if (!ye(le))
            return;
          v.value = le.length !== 1, Ws(le, e.type);
        } else if (e.multiple) {
          if (!ye(le))
            return;
          Hs(le, e.type);
        } else
          js(le);
    }, {
      immediate: !0
    }), te(R, _i), {
      n: xf,
      classes: _f,
      monthPanelEl: h,
      dayPanelEl: A,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: p,
      previewYear: b,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: g,
      getDateTitle: O,
      getPanelType: R,
      getChoose: D,
      getPreview: I,
      componentProps: $,
      slotProps: G,
      formatRange: L,
      clickEl: Z,
      handleTouchstart: N,
      handleTouchmove: H,
      handleTouchend: x,
      getChooseDay: Ce,
      getChooseMonth: Ye,
      getChooseYear: xe,
      checkPreview: Me
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
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
function nc(e) {
  return ["left", "center", "right"].includes(e);
}
var rc = mi({
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
    validator: nc
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
  onBeforeClose: Y(),
  onConfirm: Y(),
  onCancel: Y(),
  "onUpdate:show": Y()
}, en(Za, [
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
var {
  n: ac,
  classes: tc
} = re("dialog");
function ic(e, n) {
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
      default: ce(() => [B(
        "div",
        Pe({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: pi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [B(
          "div",
          {
            class: m(e.n("title"))
          },
          [q(e.$slots, "title", {}, () => [ge(
            ee(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), B(
          "div",
          {
            class: m(e.n("message")),
            style: X({
              textAlign: e.messageAlign
            })
          },
          [q(e.$slots, "default", {}, () => [ge(
            ee(e.message),
            1
          )])],
          6
        ), B(
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
              default: ce(() => [ge(
                ee(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0), e.confirmButton ? (y(), pe(
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
              default: ce(() => [ge(
                ee(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
const mr = _({
  render: ic,
  name: "VarDialog",
  components: {
    VarPopup: wn,
    VarButton: rn
  },
  inheritAttrs: !1,
  props: rc,
  setup(e) {
    var n = E(!1), r = E(!1), a = () => V(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (V(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        V(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (V(s), l != null) {
        l("confirm", a);
        return;
      }
      V(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (V(s), l != null) {
        l("cancel", a);
        return;
      }
      V(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (l) => {
      n.value = l;
    }, {
      immediate: !0
    }), te(() => e.closeOnClickOverlay, (l) => {
      if (e.onBeforeClose != null) {
        r.value = !1;
        return;
      }
      r.value = l;
    }, {
      immediate: !0
    }), {
      n: ac,
      classes: tc,
      pack: We,
      dt: St,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: we
    };
  }
});
var Hn;
function wr(e) {
  return Li() ? new Promise((n) => {
    wr.close();
    var r = Ke(e) || Ge(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", Hn = a;
    var {
      unmountInstance: t
    } = Da(mr, a, {
      onConfirm: () => {
        V(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        V(a.onCancel), n("cancel");
      },
      onClose: () => {
        V(a.onClose), n("close");
      },
      onClosed: () => {
        V(a.onClosed), t(), Hn === a && (Hn = null);
      },
      onRouteChange: () => {
        t(), Hn === a && (Hn = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  }) : Promise.resolve();
}
mr.install = function(e) {
  e.component(mr.name, mr);
};
wr.install = function(e) {
  e.component(mr.name, mr);
};
wr.close = () => {
  if (Hn != null) {
    var e = Hn;
    Hn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
wr.Component = mr;
var oc = {
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
function Br() {
  return Br = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Br.apply(this, arguments);
}
var {
  n: lc,
  classes: sc
} = re("divider");
function uc(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: X(e.style)
    },
    [q(e.$slots, "default", {}, () => [e.description ? (y(), P(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      ee(e.description),
      3
    )) : Q("v-if", !0)])],
    6
  );
}
const Kr = _({
  render: uc,
  name: "VarDivider",
  props: oc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = W(() => qt(e.inset) ? e.inset : !0), i = W(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (qt(l) || l === 0)
        return Br({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Br({}, d, {
        height: "calc(80% - " + we(f) + ")"
      }) : Br({}, d, {
        width: "calc(100% - " + we(f) + ")",
        left: v > 0 ? we(f) : we(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ue(() => {
      o();
    }), Bi(() => {
      o();
    }), Br({
      n: lc,
      classes: sc
    }, Qs(a), {
      style: i,
      isInset: t
    });
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
function dc(e) {
  return ["start", "end"].includes(e);
}
var vc = {
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
    validator: dc
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
function fc(e) {
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
  n: cc
} = re("form");
function mc(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Zn = _({
  render: mc,
  name: "VarForm",
  props: vc,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = qd(), i = (d, v) => {
      d === -1 || !e.scrollToError || setTimeout(() => {
        var f = Or(v), c = f === window ? 0 : so(f), p = so(v) - c - Be(e.scrollToErrorOffsetY);
        Ya(f, {
          top: p,
          animation: Kt
        });
      }, 300);
    }, o = /* @__PURE__ */ function() {
      var d = fc(function* () {
        var v, f = yield Promise.all(a.map((b) => {
          var {
            validate: T
          } = b;
          return T();
        })), [c, p] = au(f, (b) => b === !1, e.scrollToError), w = (v = a[p].instance.proxy) == null ? void 0 : v.$el;
        return i(p, w), !!c;
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
      n: cc,
      validate: o,
      reset: l,
      resetValidation: s
    };
  }
});
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
Zn.useValidation = pn;
Zn.useForm = hn;
function Eo(e, n, r, a, t, i, o) {
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
        Eo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Eo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function hi() {
  return hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, hi.apply(this, arguments);
}
var pc = "background-image", hc = "lazy-loading", gc = "lazy-error", Mo = "lazy-attempt", yc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], gi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Va = [], ht = [], ls = tu(100), ze = {
  loading: gi,
  error: gi,
  attempt: 3,
  throttleWait: 300,
  events: yc
}, Hi = zi(Qa, ze.throttleWait);
function It(e, n) {
  e._lazy.arg === pc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function bc(e) {
  e._lazy.loading && It(e, e._lazy.loading), Qa();
}
function wc(e) {
  e._lazy.error && It(e, e._lazy.error), e._lazy.state = "error", Gi(e), Qa();
}
function ss(e, n) {
  It(e, n), e._lazy.state = "success", Gi(e), Qa();
}
function Sc(e) {
  var n;
  ht.includes(e) || (ht.push(e), (n = ze.events) == null || n.forEach((r) => {
    e.addEventListener(r, Hi, {
      passive: !0
    });
  }));
}
function Cc() {
  ht.forEach((e) => {
    var n;
    (n = ze.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Hi);
    });
  }), ht.length = 0;
}
function kc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(hc)) != null ? r : ze.loading,
    error: (a = e.getAttribute(gc)) != null ? a : ze.error,
    attempt: e.getAttribute(Mo) ? Number(e.getAttribute(Mo)) : ze.attempt
  };
  e._lazy = hi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), It(e, gi), V(ze.filter, e._lazy);
}
function $c(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ls.add(n), ss(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? wc(e) : us(e);
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
    bc(e), $c(e, n);
  }
}
function ji(e) {
  return yi.apply(this, arguments);
}
function yi() {
  return yi = Mt(function* (e) {
    (yield lu(e)) && us(e);
  }), yi.apply(this, arguments);
}
function Qa() {
  Va.forEach((e) => ji(e));
}
function Tc(e) {
  return bi.apply(this, arguments);
}
function bi() {
  return bi = Mt(function* (e) {
    !Va.includes(e) && Va.push(e), su(e).forEach(Sc), yield ji(e);
  }), bi.apply(this, arguments);
}
function Gi(e) {
  wt(Va, e), Va.length === 0 && Cc();
}
function Oc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ds(e, n) {
  return wi.apply(this, arguments);
}
function wi() {
  return wi = Mt(function* (e, n) {
    kc(e, n), yield Tc(e);
  }), wi.apply(this, arguments);
}
function Vc(e, n) {
  return Si.apply(this, arguments);
}
function Si() {
  return Si = Mt(function* (e, n) {
    if (!Oc(e, n)) {
      Va.includes(e) && (yield ji(e));
      return;
    }
    yield ds(e, n);
  }), Si.apply(this, arguments);
}
function Pc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  ze.events = n != null ? n : ze.events, ze.loading = r != null ? r : ze.loading, ze.error = a != null ? a : ze.error, ze.attempt = t != null ? t : ze.attempt, ze.throttleWait = i != null ? i : ze.throttleWait, ze.filter = o;
}
var gt = {
  mounted: ds,
  unmounted: Gi,
  updated: Vc,
  install(e, n) {
    Pc(n), Hi = zi(Qa, ze.throttleWait), e.directive("lazy", this);
  }
};
function Ec(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Mc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Ec,
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
  onClick: Y(),
  onLoad: Y(),
  onError: Y()
}, {
  n: Ic,
  classes: Nc
} = re("image"), Dc = ["alt", "title", "lazy-error", "lazy-loading"], Bc = ["alt", "title", "src"];
function Ac(e, n) {
  var r = qe("lazy"), a = qe("ripple");
  return $e((y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? $e((y(), P(
      "img",
      {
        key: 0,
        class: m(e.n("image")),
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
      Dc
    )), [[r, e.src]]) : (y(), P(
      "img",
      {
        key: 1,
        class: m(e.n("image")),
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
      Bc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Xr = _({
  render: Ac,
  name: "VarImage",
  directives: {
    Lazy: gt,
    Ripple: Fe
  },
  props: Mc,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && V(o, a), t._lazy.state === "error" && V(l, a)) : V(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && V(i, a);
    };
    return {
      n: Ic,
      classes: Nc,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
var vs = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), fs = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function zc() {
  var {
    childProviders: e,
    bindChildren: n
  } = cn(vs), {
    length: r
  } = kn(fs);
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
  onChange: Y()
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
function Lc(e) {
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
var Rc = 250, Uc = 20, {
  n: Yc,
  classes: Fc
} = re("swipe"), Wc = ["onClick"];
function Hc(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("track"), [e.vertical, e.n("--vertical")])),
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
      [q(e.$slots, "default")],
      38
    ), q(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(y(!0), P(
        Ve,
        null,
        De(e.length, (r, a) => (y(), P(
          "div",
          {
            class: m(e.classes(e.n("indicator"), [e.index === a, e.n("--indicator-active")], [e.vertical, e.n("--indicator-vertical")])),
            style: X({
              background: e.indicatorColor
            }),
            key: r,
            onClick: (t) => e.to(a)
          },
          null,
          14,
          Wc
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)])],
    2
  );
}
const Jn = _({
  render: Hc,
  name: "VarSwipe",
  props: cs,
  setup(e) {
    var n = E(null), r = E(0), a = W(() => e.vertical), t = E(0), i = E(0), o = E(!1), l = E(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = zc(), v = !1, f = -1, c, p, w, b, T, k = (N) => s.find((U) => {
      var {
        index: H
      } = U;
      return H.value === N;
    }), C = () => {
      !e.loop || (i.value >= 0 && k(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && k(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && (k(d.value - 1).setTranslate(0), k(0).setTranslate(0)));
    }, S = (N) => {
      var U = Ge(N) ? N : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: H
      } = e;
      return U <= -1 ? H ? -1 : 0 : U >= d.value ? H ? d.value : d.value - 1 : U;
    }, M = (N) => {
      var {
        loop: U
      } = e;
      return N === -1 ? U ? d.value - 1 : 0 : N === d.value ? U ? 0 : d.value - 1 : N;
    }, h = (N) => {
      var {
        loop: U
      } = e;
      return N < 0 ? U ? d.value - 1 : 0 : N > d.value - 1 ? U ? 0 : d.value - 1 : N;
    }, A = (N) => {
      var U = i.value >= r.value, H = i.value <= -t.value, x = 0, oe = -(t.value - r.value);
      o.value = !0, (U || H) && (o.value = !0, i.value = H ? x : oe, k(0).setTranslate(0), k(d.value - 1).setTranslate(0)), kt(() => {
        o.value = !1, V(N);
      });
    }, $ = () => {
      l.value = h(z(e.initialIndex));
    }, D = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (I(), f = window.setTimeout(() => {
        L(), D();
      }, z(N)));
    }, I = () => {
      f && clearTimeout(f);
    }, g = (N, U) => {
      if (N > U && N > 10)
        return "horizontal";
      if (U > N && U > 10)
        return "vertical";
    }, O = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: U,
          clientY: H
        } = N.touches[0];
        c = U, p = H, w = performance.now(), v = !0, I(), A(() => {
          o.value = !0;
        });
      }
    }, R = (N) => {
      var {
        touchable: U,
        vertical: H
      } = e;
      if (!(!v || !U)) {
        var {
          clientX: x,
          clientY: oe
        } = N.touches[0], se = Math.abs(x - c), ve = Math.abs(oe - p), Ce = g(se, ve), Ye = H ? "vertical" : "horizontal";
        if (Ce === Ye) {
          N.preventDefault();
          var xe = b !== void 0 ? x - b : 0, Me = T !== void 0 ? oe - T : 0;
          b = x, T = oe, i.value += H ? Me : xe, C();
        }
      }
    }, F = () => {
      if (!!v) {
        var {
          vertical: N,
          onChange: U
        } = e, H = N ? T < p : b < c, x = Math.abs(N ? p - T : c - b), oe = performance.now() - w <= Rc && x >= Uc, se = oe ? S(H ? l.value + 1 : l.value - 1) : S();
        v = !1, o.value = !1, b = void 0, T = void 0, i.value = se * -r.value;
        var ve = l.value;
        l.value = M(se), D(), ve !== l.value && V(U, l.value);
      }
    }, G = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), D(), setTimeout(() => {
        o.value = !1;
      });
    }, L = () => {
      if (!(d.value <= 1)) {
        var {
          loop: N,
          onChange: U
        } = e, H = l.value;
        l.value = h(H + 1), V(U, l.value), A(() => {
          if (H === d.value - 1 && N) {
            k(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          H !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, J = () => {
      if (!(d.value <= 1)) {
        var {
          loop: N,
          onChange: U
        } = e, H = l.value;
        l.value = h(H - 1), V(U, l.value), A(() => {
          if (H === 0 && N) {
            k(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          H !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, j = (N) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var U = N > l.value ? L : J;
        Array.from({
          length: Math.abs(N - l.value)
        }).forEach(U);
      }
    }, Z = {
      size: r,
      vertical: a
    };
    return u(Z), te(() => d.value, /* @__PURE__ */ Lc(function* () {
      yield Vn(), $(), G();
    })), Ue(() => {
      window.addEventListener("resize", G);
    }), tr(() => {
      window.removeEventListener("resize", G), I();
    }), {
      n: Yc,
      classes: Fc,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: O,
      handleTouchmove: R,
      handleTouchend: F,
      next: L,
      prev: J,
      to: j,
      resize: G,
      toNumber: z
    };
  }
});
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
function jc() {
  var {
    bindParent: e,
    parentProvider: n
  } = mn(vs), {
    index: r
  } = $n(fs);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: Gc
} = re("swipe-item");
function qc(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n()),
      style: X({
        width: e.vertical ? void 0 : e.size + "px",
        height: e.vertical ? e.size + "px" : void 0,
        transform: "translate" + (e.vertical ? "Y" : "X") + "(" + e.translate + "px)"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const Qn = _({
  render: qc,
  name: "VarSwipeItem",
  setup() {
    var e = E(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = jc(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: Gc,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Qn.install = function(e) {
  e.component(Qn.name, Qn);
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
var Kc = Ci({
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
  "onUpdate:show": Y()
}, en(cs, ["loop", "indicator", "onChange"]), en(Za, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: No,
  classes: Xc
} = re("image-preview"), Do = 12, Bo = 200, Zc = 350, Ao = 200, Jc = ["src", "alt"];
function Qc(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), i = ie("var-popup");
  return y(), pe(
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
      default: ce(() => [ne(
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
          default: ce(() => [(y(!0), P(
            Ve,
            null,
            De(e.images, (o) => (y(), pe(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ce(() => [B(
                  "div",
                  {
                    class: m(e.n("zoom-container")),
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
                  [B(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    Jc
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
            }, () => [e.indicator && e.images.length > 1 ? (y(), P(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              ee(l + 1) + " / " + ee(s),
              3
            )) : Q("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), q(e.$slots, "close-icon", {}, () => [e.closeable ? (y(), pe(
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
      )) : Q("v-if", !0)]), B(
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
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const pr = _({
  render: Qc,
  name: "VarImagePreview",
  components: {
    VarSwipe: Jn,
    VarSwipeItem: Qn,
    VarPopup: wn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Kc,
  setup(e) {
    var n = E(!1), r = W(() => {
      var {
        images: I,
        current: g
      } = e, O = I.findIndex((R) => R === g);
      return O >= 0 ? O : 0;
    }), a = E(1), t = E(0), i = E(0), o = E(void 0), l = E(void 0), s = E(!0), u = null, d = null, v = null, f = (I, g) => {
      var {
        clientX: O,
        clientY: R
      } = I, {
        clientX: F,
        clientY: G
      } = g;
      return Math.abs(Math.sqrt(Math.pow(F - O, 2) + Math.pow(G - R, 2)));
    }, c = (I, g) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: g
    }), p = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, Ao);
    }, w = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, b = (I) => d ? f(d, I) <= Do && I.timestamp - d.timestamp <= Bo && d.target === I.target : !1, T = (I) => !I || !u || !d ? !1 : f(u, d) <= Do && Date.now() - d.timestamp < Zc && (I === u.target || I.parentNode === u.target), k = (I) => {
      v = window.setTimeout(() => {
        T(I.target) && D(), u = null;
      }, Bo);
    }, C = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: g
      } = I, O = c(g[0], I.currentTarget);
      if (u = O, b(O)) {
        a.value > 1 ? w() : p();
        return;
      }
      d = O;
    }, S = (I) => {
      var {
        offsetWidth: g,
        offsetHeight: O
      } = I, {
        naturalWidth: R,
        naturalHeight: F
      } = I.querySelector("." + No("image"));
      return {
        width: g,
        height: O,
        imageRadio: F / R,
        rootRadio: O / g,
        zoom: z(e.zoom)
      };
    }, M = (I) => {
      var {
        zoom: g,
        imageRadio: O,
        rootRadio: R,
        width: F,
        height: G
      } = S(I);
      if (!O)
        return 0;
      var L = O > R ? G / O : F;
      return Math.max(0, (g * L - F) / 2) / g;
    }, h = (I) => {
      var {
        zoom: g,
        imageRadio: O,
        rootRadio: R,
        width: F,
        height: G
      } = S(I);
      if (!O)
        return 0;
      var L = O > R ? G : F * O;
      return Math.max(0, (g * L - G) / 2) / g;
    }, A = (I, g, O) => I + g >= O ? O : I + g <= -O ? -O : I + g, $ = (I) => {
      if (!!d) {
        var g = I.currentTarget, {
          touches: O
        } = I, R = c(O[0], g);
        if (a.value > 1) {
          var F = R.clientX - d.clientX, G = R.clientY - d.clientY, L = M(g), J = h(g);
          t.value = A(t.value, F, L), i.value = A(i.value, G, J);
        }
        d = R;
      }
    }, D = () => {
      if (a.value > 1) {
        w(), setTimeout(() => V(e["onUpdate:show"], !1), Ao);
        return;
      }
      V(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: No,
      classes: Xc,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: C,
      handleTouchmove: $,
      handleTouchend: k,
      close: D
    };
  }
});
var jn;
function rr(e) {
  if (!!Li()) {
    rr.close();
    var n = Ke(e) ? {
      images: [e]
    } : ye(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", jn = r;
    var {
      unmountInstance: a
    } = Da(pr, r, {
      onClose: () => V(r.onClose),
      onClosed: () => {
        V(r.onClosed), a(), jn === r && (jn = null);
      },
      onRouteChange: () => {
        a(), jn === r && (jn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
rr.close = () => {
  if (jn != null) {
    var e = jn;
    jn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
pr.install = function(e) {
  e.component(pr.name, pr);
};
rr.install = function(e) {
  e.component(pr.name, pr);
};
rr.Component = pr;
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
  onScroll: Y()
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
function xc(e) {
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
  n: _c,
  classes: em
} = re("sticky");
function nm(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.enableCSSMode, e.n("--css-mode")])),
      ref: "stickyEl",
      style: X({
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
        style: X({
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
const xn = _({
  render: nm,
  name: "VarSticky",
  props: ms,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), t = E("0px"), i = E("0px"), o = E("auto"), l = E("auto"), s = E("auto"), u = E("auto"), d = W(() => !e.disabled && e.cssMode), v = W(() => !e.disabled && a.value), f = W(() => Be(e.offsetTop)), c, p = () => {
      var {
        onScroll: T,
        cssMode: k,
        disabled: C
      } = e;
      if (!C) {
        var S = 0;
        if (c !== window) {
          var {
            top: M
          } = c.getBoundingClientRect();
          S = M;
        }
        var h = r.value, A = n.value, {
          top: $,
          left: D
        } = A.getBoundingClientRect(), I = $ - S;
        I <= f.value ? (k || (o.value = A.offsetWidth + "px", l.value = A.offsetHeight + "px", t.value = S + f.value + "px", i.value = D + "px", s.value = h.offsetWidth + "px", u.value = h.offsetHeight + "px", a.value = !0), V(T, f.value, !0)) : (a.value = !1, V(T, I, !1));
      }
    }, w = /* @__PURE__ */ function() {
      var T = xc(function* () {
        yield Vn(), c = Or(n.value), c !== window && c.addEventListener("scroll", p), window.addEventListener("scroll", p), p();
      });
      return function() {
        return T.apply(this, arguments);
      };
    }(), b = () => {
      c !== window && c.removeEventListener("scroll", p), window.removeEventListener("scroll", p);
    };
    return te(() => e.disabled, p), Ii(w), Ni(b), Ue(w), tr(b), {
      n: _c,
      classes: em,
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
xn.install = function(e) {
  e.component(xn.name, xn);
};
var ps = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), hs = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function rm() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(ps), {
    length: r
  } = kn(hs);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function am() {
  var {
    parentProvider: e,
    bindParent: n
  } = mn(ps), {
    index: r
  } = $n(hs);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var tm = {
  index: {
    type: [Number, String]
  }
}, {
  n: im,
  classes: om
} = re("index-anchor");
function lm(e, n) {
  return y(), pe(
    Na(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ce(() => [B(
        "div",
        Pe({
          class: e.n()
        }, e.$attrs),
        [q(e.$slots, "default", {}, () => [ge(
          ee(e.name),
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
const Zr = _({
  render: lm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: tm,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = am(), t = E(0), i = E(!1), o = W(() => e.index), l = E(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, p = (b) => {
      i.value = b;
    }, w = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: p
    };
    return a(w), {
      n: im,
      classes: om,
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
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
var sm = {
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
  onClick: Y(),
  onChange: Y()
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
function Ft(e) {
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
  n: um,
  classes: dm
} = re("index-bar"), vm = ["onClick"];
function fm(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [q(e.$slots, "default"), B(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: X({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(y(!0), P(
        Ve,
        null,
        De(e.anchorNameList, (r) => (y(), P(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: X({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          ee(r),
          15,
          vm
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const Jr = _({
  render: fm,
  name: "VarIndexBar",
  props: sm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = rm(), t = E(""), i = E(null), o = E(null), l = E([]), s = E(), u = W(() => e.sticky), d = W(() => e.cssMode), v = W(() => Be(e.stickyOffsetTop)), f = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var p = (k) => {
      var C = Ai(k) ? k.name.value : k;
      C === s.value || C === void 0 || (s.value = C, V(e.onChange, C));
    }, w = () => {
      var k = Ct(i.value), C = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: S
      } = o.value;
      r.forEach((M, h) => {
        var A = M.ownTop.value, $ = k - A + v.value - S, D = h === r.length - 1 ? C : r[h + 1].ownTop.value - M.ownTop.value;
        $ >= 0 && $ < D && !t.value && (h && !e.cssMode && r[h - 1].setDisabled(!0), M.setDisabled(!1), p(M));
      });
    }, b = /* @__PURE__ */ function() {
      var k = Ft(function* (C, S) {
        var {
          offsetTop: M
        } = o.value;
        if (S && V(e.onClick, C), C !== s.value) {
          var h = r.find((D) => {
            var {
              name: I
            } = D;
            return C === I.value;
          });
          if (!!h) {
            var A = h.ownTop.value - v.value + M, $ = Ri(i.value);
            t.value = C, p(C), yield Ya(i.value, {
              left: $,
              top: A,
              animation: gl,
              duration: z(e.duration)
            }), kt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(S, M) {
        return k.apply(this, arguments);
      };
    }(), T = (k) => {
      On(() => b(k));
    };
    return te(() => n.value, /* @__PURE__ */ Ft(function* () {
      yield Vn(), r.forEach((k) => {
        var {
          name: C,
          setOwnTop: S
        } = k;
        C.value && l.value.push(C.value), S();
      });
    })), Ue(/* @__PURE__ */ Ft(function* () {
      yield Vn(), i.value = Or(o.value), i.value.addEventListener("scroll", w);
    })), Di(() => {
      V(i.value.removeEventListener, "scroll", w);
    }), {
      n: um,
      classes: dm,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: T,
      anchorClick: b
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
function cm(e) {
  return ["text", "password", "number"].includes(e);
}
var mm = {
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
    validator: cm
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
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onInput: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Wt,
  classes: pm
} = re("input"), hm = ["id", "disabled", "type", "value", "maxlength", "rows"], gm = ["id", "disabled", "type", "value", "maxlength"], ym = ["for"];
function bm(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
  return y(), P(
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
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (y(), P(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
        )) : Q("v-if", !0), e.textarea ? (y(), P(
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
          hm
        )) : (y(), P(
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
          gm
        )), B(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: X({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ee(e.placeholder),
          15,
          ym
        )],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (y(), pe(
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
    ), e.line ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: X({
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
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
    )],
    2
  );
}
const hr = _({
  render: bm,
  name: "VarInput",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  props: mm,
  setup(e) {
    var n = E("var-input-" + Ia().uid), r = E(null), a = E(!1), t = W(() => {
      var {
        maxlength: g,
        modelValue: O
      } = e;
      return g ? Gn(O) ? "0 / " + g : String(O).length + "/" + g : "";
    }), {
      bindForm: i,
      form: o
    } = hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = pn(), v = (g) => {
      Ee(() => {
        var {
          validateTrigger: O,
          rules: R,
          modelValue: F
        } = e;
        s(O, g, R, F);
      });
    }, f = () => {
      var {
        hint: g,
        modelValue: O
      } = e;
      if (!g && !Gn(O))
        return Wt("--placeholder-hidden");
      if (g && (!Gn(O) || a.value))
        return Wt("--placeholder-hint");
    }, c = (g) => {
      a.value = !0, V(e.onFocus, g), v("onFocus");
    }, p = (g) => {
      a.value = !1, V(e.onBlur, g), v("onBlur");
    }, w = (g) => {
      var O = g.target, {
        value: R
      } = O;
      R = S(C(R)), O.value = R, V(e["onUpdate:modelValue"], R), V(e.onInput, R, g), v("onInput");
    }, b = (g) => {
      var O = g.target, {
        value: R
      } = O;
      R = S(C(R)), O.value = R, V(e.onChange, R, g), v("onChange");
    }, T = () => {
      var {
        disabled: g,
        readonly: O,
        clearable: R,
        onClear: F
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || g || O || !R || (V(e["onUpdate:modelValue"], ""), V(F, ""), v("onClear"));
    }, k = (g) => {
      var {
        disabled: O,
        onClick: R
      } = e;
      o != null && o.disabled.value || O || (V(R, g), v("onClick"));
    }, C = (g) => e.modelModifiers.trim ? g.trim() : g, S = (g) => e.maxlength ? g.slice(0, z(e.maxlength)) : g, M = (g) => {
      var {
        disabled: O,
        readonly: R
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || O || R || g.stopPropagation();
    }, h = () => {
      V(e["onUpdate:modelValue"], ""), d();
    }, A = () => u(e.rules, e.modelValue), $ = () => {
      var g;
      (g = r.value) == null || g.focus();
    }, D = () => {
      r.value.blur();
    }, I = {
      reset: h,
      validate: A,
      resetValidation: d
    };
    return V(i, I), Ue(() => {
      e.autofocus && $();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Wt,
      classes: pm,
      isEmpty: Gn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: p,
      handleInput: w,
      handleChange: b,
      handleClear: T,
      handleClick: k,
      handleTouchstart: M,
      validate: A,
      resetValidation: d,
      reset: h,
      focus: $,
      blur: D
    };
  }
});
hr.install = function(e) {
  e.component(hr.name, hr);
};
function wm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Sm(e) {
  return ["always", "hover", "none"].includes(e);
}
var Cm = {
  type: {
    type: String,
    default: "default",
    validator: wm
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
    validator: Sm
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
  onClick: Y()
}, {
  n: km,
  classes: $m
} = re("link");
function Tm(e, n) {
  return y(), pe(
    Na(e.tag),
    Pe(e.linkProps, {
      class: e.classes(e.n(), e.n("$--box"), e.n("$--inline-flex"), e.n("--" + e.type), [e.underline !== "none", e.n("--underline-" + e.underline)], [e.disabled, e.n("--disabled")]),
      style: {
        color: e.textColor,
        fontSize: e.toSizeUnit(e.textSize)
      },
      onClick: e.handleClick
    }),
    {
      default: ce(() => [q(e.$slots, "default")]),
      _: 3
    },
    16,
    ["class", "style", "onClick"]
  );
}
const Qr = _({
  render: Tm,
  name: "VarLink",
  props: Cm,
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
      i || V(o, t);
    };
    return {
      n: km,
      classes: $m,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var Om = {
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
  onLoad: Y(),
  "onUpdate:loading": Y(),
  "onUpdate:error": Y()
};
function Ro(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Vm(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ro(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ro(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Pm,
  classes: Em
} = re("list");
function Mm(e, n) {
  var r = ie("var-loading"), a = qe("ripple");
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [q(e.$slots, "default"), e.loading ? q(e.$slots, "loading", {
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
        ee(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), ne(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : Q("v-if", !0), e.finished ? q(e.$slots, "finished", {
      key: 1
    }, () => [B(
      "div",
      {
        class: m(e.n("finished"))
      },
      ee(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : Q("v-if", !0), e.error ? q(e.$slots, "error", {
      key: 2
    }, () => [$e((y(), P(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [ge(
        ee(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : Q("v-if", !0), B(
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
const xr = _({
  render: Mm,
  name: "VarList",
  directives: {
    Ripple: Fe
  },
  components: {
    VarLoading: Tn
  },
  props: Om,
  setup(e) {
    var n = E(null), r = E(null), a, t = () => {
      V(e["onUpdate:error"], !1), V(e["onUpdate:loading"], !0), V(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - Be(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Vm(function* () {
        yield Ee();
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
    return Ue(() => {
      a = Or(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), tr(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: We,
      listEl: n,
      detectorEl: r,
      dt: St,
      isNumber: Ge,
      load: t,
      check: o,
      n: Pm,
      classes: Em
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
var Im = {
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
  classes: Nm,
  n: Uo
} = re("loading-bar");
const Dm = _({
  name: "VarLoadingBar",
  props: Im,
  setup(e) {
    return () => ne("div", {
      class: Nm(Uo(), [e.error, Uo("--error")]),
      style: {
        zIndex: ln.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: we(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: we(e.top)
      }
    }, null);
  }
});
var gs, Yo, on = Ne({
  value: 0,
  opacity: 0,
  error: !1
}), Bm = (e) => {
  Object.assign(on, e);
}, ys = () => {
  gs = window.setTimeout(() => {
    if (!(on.value >= 95)) {
      var e = Math.random();
      on.value < 70 && (e = Math.round(5 * Math.random())), on.value += e, ys();
    }
  }, 200);
}, Am = () => {
  Yo || (Yo = !0, Da(Dm, on)), (!on.error || on.value === 100) && (on.value = 0), setTimeout(() => {
    on.opacity = 1;
  }, 200), ys();
}, zm = () => {
  on.value = 100, setTimeout(() => {
    on.opacity = 0, setTimeout(() => {
      on.error = !1;
    }, 250);
  }, 300), window.clearTimeout(gs);
}, Lm = () => {
  on.error = !0, Wa.start(), setTimeout(Wa.finish, 300);
}, Wa = {
  start: Am,
  finish: zm,
  error: Lm,
  mergeConfig: Bm
}, Rm = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ut(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return Rm[n];
  });
}
var Nn = "top", ar = "bottom", Sr = "right", _n = "left", Nt = "auto", Dt = [Nn, ar, Sr, _n], Bt = "start", Ha = "end", Um = "clippingParents", bs = "viewport", Ba = "popper", Ym = "reference", Fo = /* @__PURE__ */ Dt.reduce(function(e, n) {
  return e.concat([n + "-" + Bt, n + "-" + Ha]);
}, []), ws = /* @__PURE__ */ [].concat(Dt, [Nt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Bt, n + "-" + Ha]);
}, []), Fm = "beforeRead", Wm = "read", Hm = "afterRead", jm = "beforeMain", Gm = "main", qm = "afterMain", Km = "beforeWrite", Xm = "write", Zm = "afterWrite", ki = [Fm, Wm, Hm, jm, Gm, qm, Km, Xm, Zm];
function Dn(e) {
  return e.split("-")[0];
}
var Jm = {
  start: "end",
  end: "start"
};
function Wo(e) {
  return e.replace(/start|end/g, function(n) {
    return Jm[n];
  });
}
function gn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Cr(e) {
  var n = gn(e).Element;
  return e instanceof n || e instanceof Element;
}
function vn(e) {
  var n = gn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function qi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = gn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function or(e) {
  return ((Cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Ra = Math.max, Ho = Math.min, Pa = Math.round;
function $i() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Ss() {
  return !/^((?!chrome|android).)*safari/i.test($i());
}
function Ea(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && vn(e) && (t = e.offsetWidth > 0 && Pa(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Pa(a.height) / e.offsetHeight || 1);
  var o = Cr(e) ? gn(e) : window, l = o.visualViewport, s = !Ss() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
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
  var n = gn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Xi(e) {
  return Ea(or(e)).left + Ki(e).scrollLeft;
}
function Qm(e, n) {
  var r = gn(e), a = or(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
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
function Cn(e) {
  return gn(e).getComputedStyle(e);
}
function xm(e) {
  var n, r = or(e), a = Ki(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Ra(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Ra(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Xi(e), s = -a.scrollTop;
  return Cn(t || r).direction === "rtl" && (l += Ra(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function En(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function At(e) {
  return En(e) === "html" ? e : e.assignedSlot || e.parentNode || (qi(e) ? e.host : null) || or(e);
}
function Zi(e) {
  var n = Cn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Cs(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : vn(e) && Zi(e) ? e : Cs(At(e));
}
function Ua(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Cs(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = gn(a), o = t ? [i].concat(i.visualViewport || [], Zi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Ua(At(o)));
}
function _m(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function jo(e) {
  return !vn(e) || Cn(e).position === "fixed" ? null : e.offsetParent;
}
function ep(e) {
  var n = /firefox/i.test($i()), r = /Trident/i.test($i());
  if (r && vn(e)) {
    var a = Cn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = At(e);
  for (qi(t) && (t = t.host); vn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var i = Cn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function Ji(e) {
  for (var n = gn(e), r = jo(e); r && _m(r) && Cn(r).position === "static"; )
    r = jo(r);
  return r && (En(r) === "html" || En(r) === "body" && Cn(r).position === "static") ? n : r || ep(e) || n;
}
function np(e, n) {
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
function Ti(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function rp(e, n) {
  var r = Ea(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Go(e, n, r) {
  return n === bs ? Ti(Qm(e, r)) : Cr(n) ? rp(n, r) : Ti(xm(or(e)));
}
function ap(e) {
  var n = Ua(At(e)), r = ["absolute", "fixed"].indexOf(Cn(e).position) >= 0, a = r && vn(e) ? Ji(e) : e;
  return Cr(a) ? n.filter(function(t) {
    return Cr(t) && np(t, a) && En(t) !== "body";
  }) : [];
}
function tp(e, n, r, a) {
  var t = n === "clippingParents" ? ap(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Go(e, u, a);
    return s.top = Ra(d.top, s.top), s.right = Ho(d.right, s.right), s.bottom = Ho(d.bottom, s.bottom), s.left = Ra(d.left, s.left), s;
  }, Go(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function ja(e) {
  return e.split("-")[1];
}
function ip(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ks(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Dn(a) : null, i = a ? ja(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Nn:
      s = {
        x: o,
        y: n.y - r.height
      };
      break;
    case ar:
      s = {
        x: o,
        y: n.y + n.height
      };
      break;
    case Sr:
      s = {
        x: n.x + n.width,
        y: l
      };
      break;
    case _n:
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
  var u = t ? ip(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Bt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ha:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function op() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function lp(e) {
  return Object.assign({}, op(), e);
}
function sp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function $s(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? Um : l, u = r.rootBoundary, d = u === void 0 ? bs : u, v = r.elementContext, f = v === void 0 ? Ba : v, c = r.altBoundary, p = c === void 0 ? !1 : c, w = r.padding, b = w === void 0 ? 0 : w, T = lp(typeof b != "number" ? b : sp(b, Dt)), k = f === Ba ? Ym : Ba, C = e.rects.popper, S = e.elements[p ? k : f], M = tp(Cr(S) ? S : S.contextElement || or(e.elements.popper), s, d, o), h = Ea(e.elements.reference), A = ks({
    reference: h,
    element: C,
    strategy: "absolute",
    placement: t
  }), $ = Ti(Object.assign({}, C, A)), D = f === Ba ? $ : h, I = {
    top: M.top - D.top + T.top,
    bottom: D.bottom - M.bottom + T.bottom,
    left: M.left - D.left + T.left,
    right: D.right - M.right + T.right
  }, g = e.modifiersData.offset;
  if (f === Ba && g) {
    var O = g[t];
    Object.keys(I).forEach(function(R) {
      var F = [Sr, ar].indexOf(R) >= 0 ? 1 : -1, G = [Nn, ar].indexOf(R) >= 0 ? "y" : "x";
      I[R] += O[G] * F;
    });
  }
  return I;
}
function up(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? ws : s, d = ja(a), v = d ? l ? Fo : Fo.filter(function(p) {
    return ja(p) === d;
  }) : Dt, f = v.filter(function(p) {
    return u.indexOf(p) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(p, w) {
    return p[w] = $s(e, {
      placement: w,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[Dn(w)], p;
  }, {});
  return Object.keys(c).sort(function(p, w) {
    return c[p] - c[w];
  });
}
function dp(e) {
  if (Dn(e) === Nt)
    return [];
  var n = ut(e);
  return [Wo(e), n, Wo(n)];
}
function vp(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, p = c === void 0 ? !0 : c, w = r.allowedAutoPlacements, b = n.options.placement, T = Dn(b), k = T === b, C = s || (k || !p ? [ut(b)] : dp(b)), S = [b].concat(C).reduce(function(oe, se) {
      return oe.concat(Dn(se) === Nt ? up(n, {
        placement: se,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: p,
        allowedAutoPlacements: w
      }) : se);
    }, []), M = n.rects.reference, h = n.rects.popper, A = /* @__PURE__ */ new Map(), $ = !0, D = S[0], I = 0; I < S.length; I++) {
      var g = S[I], O = Dn(g), R = ja(g) === Bt, F = [Nn, ar].indexOf(O) >= 0, G = F ? "width" : "height", L = $s(n, {
        placement: g,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = F ? R ? Sr : _n : R ? ar : Nn;
      M[G] > h[G] && (J = ut(J));
      var j = ut(J), Z = [];
      if (i && Z.push(L[O] <= 0), l && Z.push(L[J] <= 0, L[j] <= 0), Z.every(function(oe) {
        return oe;
      })) {
        D = g, $ = !1;
        break;
      }
      A.set(g, Z);
    }
    if ($)
      for (var N = p ? 3 : 1, U = function(se) {
        var ve = S.find(function(Ce) {
          var Ye = A.get(Ce);
          if (Ye)
            return Ye.slice(0, se).every(function(xe) {
              return xe;
            });
        });
        if (ve)
          return D = ve, "break";
      }, H = N; H > 0; H--) {
        var x = U(H);
        if (x === "break")
          break;
      }
    n.placement !== D && (n.modifiersData[a]._skip = !0, n.placement = D, n.reset = !0);
  }
}
const fp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: vp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function cp(e, n, r) {
  var a = Dn(e), t = [_n, Nn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
    placement: e
  })) : r, o = i[0], l = i[1];
  return o = o || 0, l = (l || 0) * t, [_n, Sr].indexOf(a) >= 0 ? {
    x: l,
    y: o
  } : {
    x: o,
    y: l
  };
}
function mp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = ws.reduce(function(d, v) {
    return d[v] = cp(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const pp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: mp
};
function hp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function gp(e) {
  return e === gn(e) || !vn(e) ? Ki(e) : hp(e);
}
function yp(e) {
  var n = e.getBoundingClientRect(), r = Pa(n.width) / e.offsetWidth || 1, a = Pa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function bp(e, n, r) {
  r === void 0 && (r = !1);
  var a = vn(n), t = vn(n) && yp(n), i = or(n), o = Ea(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || Zi(i)) && (l = gp(n)), vn(n) ? (s = Ea(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Xi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function wp(e) {
  var n = Ea(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Sp(e) {
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
function Cp(e) {
  var n = Sp(e);
  return ki.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function kp(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Rn(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var lr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', $p = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', qo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Tp(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), qo).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Rn(lr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Rn(lr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          ki.indexOf(n.phase) < 0 && console.error(Rn(lr, n.name, '"phase"', "either " + ki.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Rn(lr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Rn(lr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Rn(lr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Rn(lr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
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
        }) == null && console.error(Rn($p, String(n.name), a, a));
      });
    });
  });
}
function Op(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Vp(e) {
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
var Ko = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Pp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", Xo = {
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
function Ep(e) {
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
      setOptions: function(T) {
        var k = typeof T == "function" ? T(d.options) : T;
        w(), d.options = Object.assign({}, i, d.options, k), d.scrollParents = {
          reference: Cr(l) ? Ua(l) : l.contextElement ? Ua(l.contextElement) : [],
          popper: Ua(s)
        };
        var C = Cp(Vp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = C.filter(function(g) {
          return g.enabled;
        }), process.env.NODE_ENV !== "production") {
          var S = Op([].concat(C, d.options.modifiers), function(g) {
            var O = g.name;
            return O;
          });
          if (Tp(S), Dn(d.options.placement) === Nt) {
            var M = d.orderedModifiers.find(function(g) {
              var O = g.name;
              return O === "flip";
            });
            M || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var h = Cn(s), A = h.marginTop, $ = h.marginRight, D = h.marginBottom, I = h.marginLeft;
          [A, $, D, I].some(function(g) {
            return parseFloat(g);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return p(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, k = T.reference, C = T.popper;
          if (!Zo(k, C)) {
            process.env.NODE_ENV !== "production" && console.error(Ko);
            return;
          }
          d.rects = {
            reference: bp(k, Ji(C), d.options.strategy === "fixed"),
            popper: wp(C)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(g) {
            return d.modifiersData[g.name] = Object.assign({}, g.data);
          });
          for (var S = 0, M = 0; M < d.orderedModifiers.length; M++) {
            if (process.env.NODE_ENV !== "production" && (S += 1, S > 100)) {
              console.error(Pp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, M = -1;
              continue;
            }
            var h = d.orderedModifiers[M], A = h.fn, $ = h.options, D = $ === void 0 ? {} : $, I = h.name;
            typeof A == "function" && (d = A({
              state: d,
              options: D,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      update: kp(function() {
        return new Promise(function(b) {
          c.forceUpdate(), b(d);
        });
      }),
      destroy: function() {
        w(), f = !0;
      }
    };
    if (!Zo(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Ko), c;
    c.setOptions(u).then(function(b) {
      !f && u.onFirstUpdate && u.onFirstUpdate(b);
    });
    function p() {
      d.orderedModifiers.forEach(function(b) {
        var T = b.name, k = b.options, C = k === void 0 ? {} : k, S = b.effect;
        if (typeof S == "function") {
          var M = S({
            state: d,
            name: T,
            instance: c,
            options: C
          }), h = function() {
          };
          v.push(M || h);
        }
      });
    }
    function w() {
      v.forEach(function(b) {
        return b();
      }), v = [];
    }
    return c;
  };
}
var tt = {
  passive: !0
};
function Mp(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = gn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, tt);
  }), l && s.addEventListener("resize", r.update, tt), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, tt);
    }), l && s.removeEventListener("resize", r.update, tt);
  };
}
const Ip = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Mp,
  data: {}
};
function Np(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = ks({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Dp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Np,
  data: {}
};
var Bp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ap(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Pa(n * t) / t || 0,
    y: Pa(r * t) / t || 0
  };
}
function Jo(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, p = o.y, w = p === void 0 ? 0 : p, b = typeof d == "function" ? d({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  c = b.x, w = b.y;
  var T = o.hasOwnProperty("x"), k = o.hasOwnProperty("y"), C = _n, S = Nn, M = window;
  if (u) {
    var h = Ji(r), A = "clientHeight", $ = "clientWidth";
    if (h === gn(r) && (h = or(r), Cn(h).position !== "static" && l === "absolute" && (A = "scrollHeight", $ = "scrollWidth")), h = h, t === Nn || (t === _n || t === Sr) && i === Ha) {
      S = ar;
      var D = v && h === M && M.visualViewport ? M.visualViewport.height : h[A];
      w -= D - a.height, w *= s ? 1 : -1;
    }
    if (t === _n || (t === Nn || t === ar) && i === Ha) {
      C = Sr;
      var I = v && h === M && M.visualViewport ? M.visualViewport.width : h[$];
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var g = Object.assign({
    position: l
  }, u && Bp), O = d === !0 ? Ap({
    x: c,
    y: w
  }) : {
    x: c,
    y: w
  };
  if (c = O.x, w = O.y, s) {
    var R;
    return Object.assign({}, g, (R = {}, R[S] = k ? "0" : "", R[C] = T ? "0" : "", R.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + w + "px)" : "translate3d(" + c + "px, " + w + "px, 0)", R));
  }
  return Object.assign({}, g, (n = {}, n[S] = k ? w + "px" : "", n[C] = T ? c + "px" : "", n.transform = "", n));
}
function zp(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Cn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: Dn(n.placement),
    variation: ja(n.placement),
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
const Lp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: zp,
  data: {}
};
function Rp(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !vn(i) || !En(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function Up(e) {
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
      !vn(t) || !En(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const Yp = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Rp,
  effect: Up,
  requires: ["computeStyles"]
};
var Fp = [Ip, Dp, Lp, Yp], Wp = /* @__PURE__ */ Ep({
  defaultModifiers: Fp
});
function Hp(e) {
  return ["click", "hover"].includes(e);
}
function jp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var Gp = {
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
    validator: Hp
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: jp
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y()
};
function yt() {
  return yt = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yt.apply(this, arguments);
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
  n: qp,
  classes: Kp
} = re("menu");
function Xp(e, n) {
  return y(), P(
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
    [q(e.$slots, "default"), (y(), pe(
      Ka,
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
          default: ce(() => [$e(B(
            "div",
            {
              ref: "menu",
              style: X({
                zIndex: e.zIndex
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Bn(() => {
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
          ), [[Xa, e.show]])]),
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
const er = _({
  render: Xp,
  name: "VarMenu",
  props: Gp,
  setup(e) {
    var n = E(null), r = E(null), a = E(!1), {
      zIndex: t
    } = Ja(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: h,
        height: A
      } = window.getComputedStyle(n.value);
      u = {
        width: Be(h),
        height: Be(A)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, S());
    }, f = /* @__PURE__ */ function() {
      var h = xo(function* () {
        e.trigger === "hover" && (s = !1, yield Vn(), !l && M());
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, p = /* @__PURE__ */ function() {
      var h = xo(function* () {
        e.trigger === "hover" && (l = !1, yield Vn(), !s && M());
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), w = () => {
      S(), o = !0;
    }, b = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, V(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var h = {
        x: Be(e.offsetX),
        y: Be(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: h.x,
            distance: h.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: h.x,
            distance: h.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: h.x,
            distance: h.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: h.x,
            distance: -h.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: h.x,
            distance: -h.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: h.x,
            distance: -h.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: h.y,
            distance: h.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: h.y,
            distance: -h.x - u.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: h.y,
            distance: -h.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: h.x,
            distance: -h.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: h.x,
            distance: h.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: h.y,
            distance: h.x
          };
      }
    }, k = () => {
      var {
        placement: h,
        skidding: A,
        distance: $
      } = T();
      return {
        placement: h,
        modifiers: [yt({}, fp, {
          enabled: a.value
        }), yt({}, pp, {
          options: {
            offset: [A, $]
          }
        })]
      };
    }, C = () => {
      i.setOptions(k());
    }, S = () => {
      var {
        disabled: h
      } = e;
      h || (a.value = !0, V(e["onUpdate:show"], !0));
    }, M = () => {
      a.value = !1, V(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (h) => {
      a.value = h != null ? h : !1;
    }, {
      immediate: !0
    }), te(() => e.offsetX, C), te(() => e.offsetY, C), te(() => e.placement, C), te(() => a.value, (h) => {
      h ? (C(), V(e.onOpen)) : V(e.onClose);
    }), te(() => e.trigger, (h) => {
      h === "click" ? document.addEventListener("click", b) : document.removeEventListener("click", b);
    }), te(() => e.disabled, M), Ue(() => {
      i = Wp(n.value, r.value, k()), e.trigger === "click" && document.addEventListener("click", b);
    }), tr(() => {
      document.removeEventListener("click", b), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: qp,
      classes: Kp,
      handleClick: w,
      handleMenuClose: b,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: c,
      handleMenuMouseleave: p,
      resize: C,
      open: S,
      close: M
    };
  }
});
er.install = function(e) {
  e.component(er.name, er);
};
var Ts = Symbol("SELECT_BIND_OPTION_KEY"), Os = Symbol("SELECT_COUNT_OPTION_KEY");
function Zp() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Ts), {
    length: r
  } = kn(Os);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function Jp() {
  var {
    bindParent: e,
    parentProvider: n
  } = mn(Ts), {
    index: r
  } = $n(Os);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var Qp = {
  label: {},
  value: {}
}, {
  n: xp,
  classes: _p
} = re("option");
function eh(e, n) {
  var r = ie("var-checkbox"), a = qe("ripple");
  return $e((y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.optionSelected, e.n("--selected-color")])),
      style: X({
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
        style: X({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (y(), pe(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Bn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : Q("v-if", !0), B(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [q(e.$slots, "default", {}, () => [ge(
        ee(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const _r = _({
  render: eh,
  name: "VarOption",
  directives: {
    Ripple: Fe
  },
  components: {
    VarCheckbox: vr
  },
  props: Qp,
  setup(e) {
    var n = E(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = Jp(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(p);
    }, f = () => d(p), c = (w) => {
      n.value = w;
    }, p = {
      label: a,
      value: t,
      selected: r,
      sync: c
    };
    return te([() => e.label, () => e.value], () => {
      if (e.label == null && e.value == null)
        throw Error(`Props label and value can't both be undefined
`);
    }, {
      immediate: !0
    }), o(p), {
      n: xp,
      classes: _p,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var nh = {
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
  onClick: Y(),
  "onUpdate:show": Y()
};
function rh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var {
  n: _o
} = re("overlay");
const ea = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: nh,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = Ja(() => e.show, 1), {
      disabled: i
    } = Ui(), o = () => {
      V(e.onClick), V(e["onUpdate:show"], !1);
    };
    $t(() => e.show, () => e.lockScroll);
    var l = () => ne("div", Pe({
      class: _o(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: o
    }), [V(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return ne(Re, {
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
        return ne(Ka, {
          to: u,
          disabled: i.value
        }, rh(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var ah = {
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
  onChange: Y(),
  "onUpdate:current": Y(),
  "onUpdate:size": Y()
}, {
  n: th,
  classes: ih
} = re("pagination"), oh = ["item-mode", "onClick"];
function lh(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), i = ie("var-menu"), o = qe("ripple");
  return y(), P(
    "ul",
    {
      class: m(e.n())
    },
    [$e((y(), P(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [q(e.$slots, "prev", {}, () => [ne(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (y(), P(
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
          onKeydown: n[3] || (n[3] = no((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), B("span", null, [ge(
        " / " + ee(e.pageCount) + " ",
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
    )) : (y(!0), P(
      Ve,
      {
        key: 1
      },
      De(e.pageList, (l, s) => $e((y(), P(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [ge(
          ee(l),
          1
        )],
        10,
        oh
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), $e((y(), P(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [q(e.$slots, "next", {}, () => [ne(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (y(), P(
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
          menu: ce(() => [(y(!0), P(
            Ve,
            null,
            De(e.sizeOption, (l, s) => $e((y(), pe(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ce(() => [ge(
                  ee(l) + ee(e.pack.paginationItem) + " / " + ee(e.pack.paginationPage),
                  1
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: ce(() => [B(
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
              ee(e.size) + ee(e.pack.paginationItem) + " / " + ee(e.pack.paginationPage),
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
    )) : Q("v-if", !0), e.showQuickJumper && !e.simple ? (y(), P(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [ge(
        ee(e.pack.paginationJump) + " ",
        1
      ), ne(
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
    )) : Q("v-if", !0), e.totalText ? (y(), P(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      ee(e.totalText),
      3
    )) : Q("v-if", !0)],
    2
  );
}
const na = _({
  render: lh,
  name: "VarPagination",
  components: {
    VarMenu: er,
    VarIcon: Oe,
    VarCell: dr,
    VarInput: hr
  },
  directives: {
    Ripple: Fe
  },
  props: ah,
  setup(e) {
    var n = E(!1), r = E(""), a = E("1"), t = E(!1), i = E(!1), o = E(z(e.current) || 1), l = E(z(e.size) || 10), s = E([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(z(e.total) / z(l.value))), v = W(() => {
      var S = l.value * (o.value - 1) + 1, M = Math.min(l.value * o.value, z(e.total));
      return [S, M];
    }), f = W(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (S, M) => Ge(S) ? !1 : M === 1 ? t.value : i.value, p = (S, M) => Ge(S) ? "basic" : M === 1 ? "head" : "tail", w = (S, M) => {
      S === o.value || e.disabled || (Ge(S) ? o.value = S : S === "prev" ? o.value > 1 && (o.value -= 1) : S === "next" ? o.value < d.value && (o.value += 1) : S === "..." && (M === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, b = () => {
      e.disabled || (n.value = !0);
    }, T = (S) => {
      l.value = S, n.value = !1;
    }, k = (S) => {
      var M = /^[1-9][0-9]*$/;
      return M.test(S);
    }, C = (S, M, h) => {
      if (h.target.blur(), k(M)) {
        var A = z(M);
        A > d.value && (A = d.value, a.value = "" + A), A !== o.value && (o.value = A);
      }
      S === "quick" && (r.value = ""), S === "simple" && !k(M) && (a.value = "" + o.value);
    };
    return te([() => e.current, () => e.size], (S) => {
      var [M, h] = S;
      o.value = z(M) || 1, l.value = z(h || 10);
    }), te([o, l], (S, M) => {
      var [h, A] = S, [$, D] = M;
      if (h > d.value) {
        o.value = d.value;
        return;
      }
      var I = [], {
        maxPagerCount: g,
        total: O,
        onChange: R
      } = e, F = Math.ceil(z(O) / z(D)), G = d.value - (g - u.value) - 1;
      if (a.value = "" + h, d.value - 2 > g) {
        if ($ === void 0 || d.value !== F)
          for (var L = 2; L < g + 2; L++)
            I.push(L);
        if (h <= g && h < G) {
          I = [];
          for (var J = 1; J < g + 1; J++)
            I.push(J + 1);
          t.value = !0, i.value = !1;
        }
        if (h > g && h < G) {
          I = [];
          for (var j = 1; j < g + 1; j++)
            I.push(h + j - u.value);
          t.value = h === 2 && g === 1, i.value = !1;
        }
        if (h >= G) {
          I = [];
          for (var Z = 1; Z < g + 1; Z++)
            I.push(d.value - (g - Z) - 1);
          t.value = !1, i.value = !0;
        }
        I = [1, "...", ...I, "...", d.value];
      } else
        for (var N = 1; N <= d.value; N++)
          I.push(N);
      s.value = I, $ !== void 0 && d.value > 0 && V(R, h, A), V(e["onUpdate:current"], h), V(e["onUpdate:size"], A);
    }, {
      immediate: !0
    }), {
      n: th,
      classes: ih,
      pack: We,
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
      clickItem: w,
      showMenu: b,
      clickSize: T,
      setPage: C,
      toNumber: z
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
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
var sh = Oi({
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
  textFormatter: {
    type: Function,
    default: (e) => e
  },
  onChange: Y(),
  onConfirm: Y(),
  onCancel: Y()
}, en(Za, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: uh,
  classes: dh
} = re("picker"), el = 300, vh = 15, nl = 0, fh = ["onTouchstart", "onTouchmove", "onTouchend"], ch = ["onTransitionend"];
function mh(e, n) {
  var r = ie("var-button");
  return y(), pe(
    Na(e.dynamic ? e.n("$-popup") : e.Transition),
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
      default: ce(() => [B(
        "div",
        Pe({
          class: e.n()
        }, e.$attrs),
        [B(
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
              default: ce(() => [ge(
                ee(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), q(e.$slots, "title", {}, () => [B(
            "div",
            {
              class: m(e.n("title"))
            },
            ee(e.dt(e.title, e.pack.pickerTitle)),
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
              default: ce(() => [ge(
                ee(e.dt(e.confirmButtonText, e.pack.pickerConfirmButtonText)),
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
            style: X({
              height: e.columnHeight + "px"
            })
          },
          [(y(!0), P(
            Ve,
            null,
            De(e.scrollColumns, (a) => (y(), P(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Bn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [B(
                "div",
                {
                  class: m(e.n("scroller")),
                  ref_for: !0,
                  ref: (t) => e.getScrollEl(t, a),
                  style: X({
                    transform: "translateY(" + a.translate + "px)",
                    transitionDuration: a.duration + "ms",
                    transitionProperty: a.duration ? "transform" : "none"
                  }),
                  onTransitionend: (t) => e.handleTransitionend(a)
                },
                [(y(!0), P(
                  Ve,
                  null,
                  De(a.column.texts, (t) => (y(), P(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: X({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [B(
                      "div",
                      {
                        class: m(e.n("text"))
                      },
                      ee(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                ch
              )],
              42,
              fh
            ))),
            128
          )), B(
            "div",
            {
              class: m(e.n("picked")),
              style: X({
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
const gr = _({
  render: mh,
  name: "VarPicker",
  components: {
    VarButton: rn,
    VarPopup: wn
  },
  inheritAttrs: !1,
  props: sh,
  setup(e) {
    var n = E([]), r = W(() => Be(e.optionHeight)), a = W(() => Be(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = (g, O) => {
      O.scrollEl = g;
    }, s = (g) => {
      V(e["onUpdate:show"], g);
    }, u = (g) => {
      var O = r.value + t.value, R = t.value - g.column.texts.length * r.value;
      g.translate >= O && (g.translate = O), g.translate <= R && (g.translate = R);
    }, d = (g, O) => {
      var {
        length: R
      } = g.column.texts;
      return O = O >= R ? R - 1 : O, O = O <= 0 ? 0 : O, O;
    }, v = (g) => {
      var O = Math.round((t.value - g.translate) / r.value);
      return d(g, O);
    }, f = () => {
      var g = n.value.map((R) => R.column.texts[R.index]), O = n.value.map((R) => R.index);
      return {
        texts: g,
        indexes: O
      };
    }, c = function(g, O, R, F) {
      F === void 0 && (F = !1);
      var G = t.value - d(g, O) * r.value;
      G === g.translate && (g.scrolling = !1, !F && A(g)), g.translate = G, g.duration = R;
    }, p = (g, O, R) => {
      g.translate += Math.abs(O / R) / 3e-3 * (O < 0 ? -1 : 1);
    }, w = (g, O) => {
      O.touching = !0, O.scrolling = !1, O.duration = 0, O.translate = Rt(O.scrollEl);
    }, b = (g, O) => {
      if (!!O.touching) {
        var {
          clientY: R
        } = g.touches[0], F = O.prevY !== void 0 ? R - O.prevY : 0;
        O.prevY = R, O.translate += F, u(O);
        var G = performance.now();
        G - O.momentumTime > el && (O.momentumTime = G, O.momentumPrevY = O.translate);
      }
    }, T = (g, O) => {
      O.touching = !1, O.scrolling = !0, O.prevY = void 0;
      var R = O.translate - O.momentumPrevY, F = performance.now() - O.momentumTime, G = Math.abs(R) >= vh && F <= el;
      G && p(O, R, F), O.index = v(O), c(O, O.index, G ? 1e3 : 200);
    }, k = (g) => {
      g.scrolling = !1, A(g);
    }, C = (g) => g.map((O, R) => {
      var F, G = ye(O) ? {
        texts: O
      } : O, L = {
        id: nl++,
        prevY: void 0,
        momentumPrevY: void 0,
        touching: !1,
        translate: t.value,
        index: (F = G.initialIndex) != null ? F : 0,
        columnIndex: R,
        duration: 0,
        momentumTime: 0,
        column: G,
        scrollEl: null,
        scrolling: !1
      };
      return c(L, L.index, 0, !0), L;
    }), S = (g) => {
      var O = [];
      return M(O, g, 0, !0), O;
    }, M = function(g, O, R, F) {
      if (F === void 0 && (F = !1), ye(O) && O.length) {
        var G, L = F && (G = e.cascadeInitialIndexes[g.length]) != null ? G : 0, J = {
          id: nl++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: L,
          columnIndex: R,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: O.map((j) => j[e.textKey])
          },
          columns: O,
          scrollEl: null,
          scrolling: !1
        };
        g.push(J), c(J, J.index, 0, !0), M(g, J.columns[J.index].children, R + 1, F);
      }
    }, h = (g) => {
      n.value.splice(n.value.indexOf(g) + 1), M(n.value, g.columns[g.index].children, g.columnIndex + 1);
    }, A = (g) => {
      var {
        cascade: O,
        onChange: R
      } = e;
      O && h(g);
      var F = n.value.some((j) => j.scrolling);
      if (!F) {
        var {
          texts: G,
          indexes: L
        } = f(), J = L.every((j, Z) => j === o[Z]);
        J || (o = [...L], V(R, G, L));
      }
    }, $ = () => {
      if (e.cascade) {
        var g = n.value.find((O) => O.scrolling);
        g && (g.translate = Rt(g.scrollEl), g.index = v(g), c(g, g.index, 0, !0), g.scrolling = !1, h(g));
      } else
        n.value.forEach((O) => {
          O.translate = Rt(O.scrollEl), O.index = v(O), c(O, O.index, 0);
        });
    }, D = () => {
      $();
      var {
        texts: g,
        indexes: O
      } = f();
      o = [...O], V(e.onConfirm, g, O);
    }, I = () => {
      $();
      var {
        texts: g,
        indexes: O
      } = f();
      o = [...O], V(e.onCancel, g, O);
    };
    return te(() => e.columns, (g) => {
      n.value = e.cascade ? S(ro(g)) : C(ro(g));
      var {
        indexes: O
      } = f();
      o = [...O];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: uh,
      classes: dh,
      pack: We,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Re,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: w,
      handleTouchmove: b,
      handleTouchend: T,
      handleTransitionend: k,
      confirm: D,
      cancel: I,
      dt: St
    };
  }
});
var _e;
function kr(e) {
  return new Promise((n) => {
    kr.close();
    var r = ye(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", _e = a;
    var {
      unmountInstance: t
    } = Da(gr, a, {
      onConfirm: (i, o) => {
        V(a.onConfirm, i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, _e === a && (_e = null);
      },
      onCancel: (i, o) => {
        V(a.onCancel, i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, _e === a && (_e = null);
      },
      onClose: () => {
        V(a.onClose), n({
          state: "close"
        }), _e === a && (_e = null);
      },
      onClosed: () => {
        V(a.onClosed), t(), _e === a && (_e = null);
      },
      onRouteChange: () => {
        t(), _e === a && (_e = null);
      },
      "onUpdate:show": (i) => {
        a.show = i;
      }
    });
    a.show = !0;
  });
}
gr.install = function(e) {
  e.component(gr.name, gr);
};
kr.Component = gr;
kr.install = function(e) {
  e.component(gr.name, gr);
};
kr.close = () => {
  if (_e != null) {
    var e = _e;
    _e = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
function ph(e) {
  return ["linear", "circle"].includes(e);
}
var hh = {
  mode: {
    type: String,
    default: "linear",
    validator: ph
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
  n: gh,
  classes: yh
} = re("progress"), bh = ["viewBox"], wh = ["cx", "cy", "r", "stroke-width"], Sh = ["cx", "cy", "r", "stroke-width"];
function Ch(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [B(
        "div",
        {
          class: m(e.n("linear-block")),
          style: X({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (y(), P(
          "div",
          {
            key: 0,
            class: m(e.n("linear-background")),
            style: X({
              background: e.trackColor
            })
          },
          null,
          6
        )) : Q("v-if", !0), B(
          "div",
          {
            class: m(e.classes(e.n("linear-certain"), [e.ripple, e.n("linear-ripple")])),
            style: X({
              background: e.color,
              width: e.linearProps.width
            })
          },
          null,
          6
        )],
        6
      ), e.label ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [ge(
          ee(e.linearProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.mode === "circle" ? (y(), P(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: X({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(y(), P(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: X({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (y(), P(
          "circle",
          {
            key: 0,
            class: m(e.n("circle-background")),
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
          wh
        )) : Q("v-if", !0), B(
          "circle",
          {
            class: m(e.n("circle-certain")),
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
          Sh
        )],
        14,
        bh
      )), e.label ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [ge(
          ee(e.circleProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      6
    )) : Q("v-if", !0)],
    2
  );
}
const ra = _({
  render: Ch,
  name: "VarProgress",
  props: hh,
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
      } = e, o = "0 0 " + Be(a) + " " + Be(a), l = z(i) > 100 ? 100 : Math.round(z(i)), s = (Be(a) - Be(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: gh,
      classes: yh,
      toSizeUnit: we,
      multiplySizeUnit: Je,
      linearProps: n,
      circleProps: r
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var kh = {
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
  onRefresh: Y(),
  "onUpdate:modelValue": Y()
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
function $h(e) {
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
  n: Th,
  classes: Oh
} = re("pull-refresh"), al = 150;
function Vh(e, n) {
  var r = ie("var-icon");
  return y(), P(
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
        style: X(e.controlStyle)
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
const aa = _({
  render: Vh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: kh,
  setup(e) {
    var n, r, a = E(0), t = E(null), i = E(null), o = E(0), l = E(-999), s = E("arrow-down"), u = E("default"), d = E(!1), v = E(!0), f = W(() => u.value !== "loading" && u.value !== "success" && !e.disabled), c = W(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: w.value ? e.successBgColor : e.bgColor,
      color: w.value ? e.successColor : e.color
    })), p = W(() => Math.abs(2 * a.value)), w = W(() => u.value === "success"), b = () => new Promise((h) => {
      window.setTimeout(() => {
        v.value = !0, h();
      }, al);
    }), T = (h) => {
      !f.value || (u.value = "pulling", o.value = h.touches[0].clientY);
    }, k = (h) => {
      var A = Ct(n);
      if (!(A > 0 || !f.value)) {
        A === 0 && l.value > a.value && h.cancelable && h.preventDefault();
        var $ = (h.touches[0].clientY - o.value) / 2 + a.value;
        l.value = $ >= p.value ? p.value : $, l.value >= p.value * 0.2 ? (v.value = !1, s.value = "refresh", r = b()) : s.value = "arrow-down";
      }
    }, C = /* @__PURE__ */ function() {
      var h = $h(function* () {
        !f.value || (d.value = !0, l.value >= p.value * 0.2 ? (yield r, u.value = "loading", l.value = p.value * 0.3, V(e["onUpdate:modelValue"], !0), V(e.onRefresh)) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1;
        }, z(e.animationDuration))));
      });
      return function() {
        return h.apply(this, arguments);
      };
    }(), S = () => {
      var {
        width: h
      } = i.value.getBoundingClientRect();
      l.value = -(h + h * 0.25), a.value = -(h + h * 0.25);
    }, M = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return te(() => e.modelValue, (h) => {
      h === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, M();
      }, z(e.successDuration)));
    }), Ue(() => {
      n = Or(t.value), S();
    }), {
      n: Th,
      classes: Oh,
      iconHasChanged: v,
      ICON_TRANSITION: al,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: T,
      touchMove: k,
      touchEnd: C,
      iconName: s,
      controlStyle: c,
      isSuccess: w
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
var Ph = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, Vs = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Ps = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Eh() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Vs), {
    length: r
  } = kn(Ps);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Mh() {
  var {
    bindParent: e,
    parentProvider: n
  } = mn(Vs), {
    index: r
  } = $n(Ps);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Ih,
  classes: Nh
} = re("radio");
function Dh(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return y(), P(
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
      [$e((y(), P(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
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
      }]]), B(
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
const ta = _({
  render: Dh,
  name: "VarRadio",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: Ph,
  setup(e) {
    var n = E(!1), r = W(() => n.value === e.checkedValue), a = E(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Mh(), {
      form: o,
      bindForm: l
    } = hn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = pn(), f = (S) => {
      Ee(() => {
        var {
          validateTrigger: M,
          rules: h,
          modelValue: A
        } = e;
        u(M, S, h, A);
      });
    }, c = (S) => {
      var {
        checkedValue: M,
        onChange: h
      } = e;
      t && n.value === M || (n.value = S, V(e["onUpdate:modelValue"], n.value), V(h, n.value), t == null || t.onToggle(M), f("onChange"));
    }, p = (S) => {
      var {
        disabled: M,
        readonly: h,
        uncheckedValue: A,
        checkedValue: $,
        onClick: D
      } = e;
      o != null && o.disabled.value || M || (V(D, S), !(o != null && o.readonly.value || h) && (a.value = !0, c(r.value ? A : $)));
    }, w = (S) => {
      var {
        checkedValue: M,
        uncheckedValue: h
      } = e;
      n.value = S === M ? M : h;
    }, b = () => {
      V(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), k = (S) => {
      var {
        uncheckedValue: M,
        checkedValue: h
      } = e, A = ![M, h].includes(S);
      A && (S = r.value ? M : h), c(S);
    };
    te(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var C = {
      sync: w,
      validate: T,
      resetValidation: v,
      reset: b
    };
    return V(i, C), V(l, C), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Ih,
      classes: Nh,
      handleClick: p,
      toggle: k,
      reset: b,
      validate: T,
      resetValidation: v
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
function Bh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Ah = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Bh
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: zh,
  classes: Lh
} = re("radio-group");
function Rh(e, n) {
  var r = ie("var-form-details");
  return y(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
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
const ia = _({
  render: Rh,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: Ah,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Eh(), {
      bindForm: t
    } = hn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = pn(), u = W(() => i.value), d = (b) => {
      Ee(() => {
        var {
          validateTrigger: T,
          rules: k,
          modelValue: C
        } = e;
        o(T, b, k, C);
      });
    }, v = () => r.forEach((b) => {
      var {
        sync: T
      } = b;
      return T(e.modelValue);
    }), f = (b) => {
      V(e["onUpdate:modelValue"], b), V(e.onChange, b), d("onChange");
    }, c = () => l(e.rules, e.modelValue), p = () => {
      V(e["onUpdate:modelValue"], void 0), s();
    };
    te(() => e.modelValue, v), te(() => n.value, v);
    var w = {
      onToggle: f,
      validate: c,
      reset: p,
      resetValidation: s,
      errorMessage: u
    };
    return V(t, w), a(w), {
      errorMessage: i,
      n: zh,
      classes: Lh,
      reset: p,
      validate: c,
      resetValidation: s
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Uh = {
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
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Aa
} = re("rate"), Yh = ["onClick"];
function Fh(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = qe("ripple");
  return y(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.n())
      },
      [(y(!0), P(
        Ve,
        null,
        De(e.toNumber(e.count), (i) => $e((y(), P(
          "div",
          {
            key: i,
            style: X(e.getStyle(i)),
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
              style: X({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          Yh
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
const oa = _({
  render: Fh,
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  props: Uh,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = pn(), l = (b) => {
      var {
        count: T,
        gap: k
      } = e;
      return {
        color: u(b).color,
        marginRight: b !== z(T) ? we(k) : 0
      };
    }, s = (b) => {
      var {
        name: T,
        color: k
      } = u(b);
      return {
        [Aa("content")]: !0,
        [Aa("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Aa("--error")]: a.value,
        [Aa("--primary")]: T !== e.emptyIcon && !k
      };
    }, u = (b) => {
      var {
        modelValue: T,
        disabled: k,
        disabledColor: C,
        color: S,
        half: M,
        emptyColor: h,
        icon: A,
        halfIcon: $,
        emptyIcon: D
      } = e, I = S;
      return (k || n != null && n.disabled.value) && (I = C), b <= z(T) ? {
        color: I,
        name: A
      } : M && b <= z(T) + 0.5 ? {
        color: I,
        name: $
      } : {
        color: k || n != null && n.disabled.value ? C : h,
        name: D
      };
    }, d = (b, T) => {
      if (e.half) {
        var {
          offsetWidth: k
        } = T.target;
        T.offsetX <= Math.floor(k / 2) && (b -= 0.5);
      }
      V(e["onUpdate:modelValue"], b);
    }, v = () => i(e.rules, z(e.modelValue)), f = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (b, T) => {
      var {
        readonly: k,
        disabled: C,
        onChange: S
      } = e;
      k || C || n != null && n.disabled.value || n != null && n.readonly.value || (d(b, T), V(S, b), f());
    }, p = () => {
      V(e["onUpdate:modelValue"], 0), o();
    }, w = {
      reset: p,
      validate: v,
      resetValidation: o
    };
    return V(r, w), {
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
      n: Aa
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function Wh(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var Hh = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: Wh
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
}, jh = (e) => ($r(""), e = e(), Tr(), e), Gh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, qh = /* @__PURE__ */ jh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), Kh = [qh];
function Xh(e, n) {
  return y(), P("svg", Gh, Kh);
}
const Zh = _({
  render: Xh
});
var Jh = (e) => ($r(""), e = e(), Tr(), e), Qh = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, xh = /* @__PURE__ */ Jh(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), _h = [xh];
function eg(e, n) {
  return y(), P("svg", Qh, _h);
}
const ng = _({
  render: eg
});
var rg = (e) => ($r(""), e = e(), Tr(), e), ag = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, tg = /* @__PURE__ */ rg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), ig = [tg];
function og(e, n) {
  return y(), P("svg", ag, ig);
}
const lg = _({
  render: og
});
var {
  n: sg,
  classes: ug
} = re("result");
function dg(e, n) {
  return y(), P(
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
        style: X({
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
        style: X({
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
        style: X({
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
const vg = _({
  render: dg,
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
      n: sg,
      classes: ug,
      toNumber: z
    };
  }
});
var fg = (e) => ($r(""), e = e(), Tr(), e), cg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, mg = /* @__PURE__ */ fg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), pg = [mg];
function hg(e, n) {
  return y(), P("svg", cg, pg);
}
const gg = _({
  render: hg
});
var yg = (e) => ($r(""), e = e(), Tr(), e), bg = {
  viewBox: "-4 -4 32 32"
}, wg = /* @__PURE__ */ yg(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), Sg = [wg];
function Cg(e, n) {
  return y(), P("svg", bg, Sg);
}
const kg = _({
  render: Cg
});
var {
  n: $g,
  classes: Tg
} = re("result");
function Og(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [q(e.$slots, "image", {}, () => [e.type ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: X({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(y(), pe(
          Na(e.type),
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
    )) : Q("v-if", !0)]), q(e.$slots, "title", {}, () => [e.title ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ee(e.title),
      3
    )) : Q("v-if", !0)]), q(e.$slots, "description", {}, () => [e.description ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ee(e.description),
      3
    )) : Q("v-if", !0)]), e.$slots.footer ? (y(), P(
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
const la = _({
  render: Og,
  name: "VarResult",
  components: {
    Info: Zh,
    Success: vg,
    Warning: lg,
    Error: ng,
    Question: gg,
    Empty: kg
  },
  props: Hh,
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
      n: $g,
      classes: Tg,
      toNumber: z,
      toPxNum: Be,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
function Vg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function Pg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var Eg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Vg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: Pg
  },
  onClick: Y()
}, {
  n: Mg,
  classes: Ig
} = re("row");
function Ng(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      style: X({
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
const sa = _({
  render: Ng,
  name: "VarRow",
  props: Eg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = sv(), t = W(() => {
      var l = Be(e.gutter);
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
    return te(() => a.value, i), te(() => e.gutter, i), r(o), {
      n: Mg,
      classes: Ig,
      average: t
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
function Dg(e) {
  return ["left", "right", "center"].includes(e);
}
var Bg = {
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
    validator: Dg
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: Y(),
  onBlur: Y(),
  onClick: Y(),
  onClear: Y(),
  onClose: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: Ht,
  classes: Ag
} = re("select"), zg = {
  key: 0
}, Lg = {
  key: 1
};
function Rg(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), i = ie("var-form-details");
  return y(), P(
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
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
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
            menu: ce(() => [B(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [q(e.$slots, "default")],
              2
            )]),
            default: ce(() => [B(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: X({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (y(), P("div", zg, [e.chip ? (y(), P(
                "div",
                {
                  key: 0,
                  class: m(e.n("chips"))
                },
                [(y(!0), P(
                  Ve,
                  null,
                  De(e.labels, (o) => (y(), pe(
                    r,
                    {
                      class: m(e.n("chip")),
                      "var-select-cover": "",
                      closable: "",
                      size: "small",
                      type: e.errorMessage ? "danger" : void 0,
                      key: o,
                      onClick: n[0] || (n[0] = Bn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: ce(() => [ge(
                        ee(o),
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
              )) : (y(), P(
                "div",
                {
                  key: 1,
                  class: m(e.n("values"))
                },
                ee(e.labels.join(e.separator)),
                3
              ))])) : (y(), P(
                "span",
                Lg,
                ee(e.label),
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
            ), B(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: X({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ee(e.placeholder),
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
        [q(e.$slots, "append-icon", {}, () => [e.clearable ? (y(), pe(
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
    ), e.line ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("dot"), [e.isFocus, e.n("--spread")], [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
          style: X({
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
const ua = _({
  render: Rg,
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: er,
    VarChip: fr,
    VarFormDetails: je
  },
  props: Bg,
  setup(e) {
    var n = E(null), r = E(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = E(""), o = E([]), l = E("0px"), s = E(0), {
      bindForm: u,
      form: d
    } = hn(), {
      length: v,
      options: f,
      bindOptions: c
    } = Zp(), {
      errorMessage: p,
      validateWithTrigger: w,
      validate: b,
      resetValidation: T
    } = pn(), k = E(null), C = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var x = H;
        o.value = x.map(h);
      }
      !U && !Gn(H) && (i.value = h(H)), !U && Gn(H) && (i.value = "");
    }, S = (U) => {
      Ee(() => {
        var {
          validateTrigger: H,
          rules: x,
          modelValue: oe
        } = e;
        w(H, U, x, oe);
      });
    }, M = (U) => {
      var {
        value: H,
        label: x
      } = U;
      return H.value != null ? H.value : x.value;
    }, h = (U) => {
      var H, x, oe = f.find((se) => {
        var {
          value: ve
        } = se;
        return ve.value === U;
      });
      return oe || (oe = f.find((se) => {
        var {
          label: ve
        } = se;
        return ve.value === U;
      })), (H = (x = oe) == null ? void 0 : x.label.value) != null ? H : "";
    }, A = () => {
      var {
        hint: U,
        modelValue: H
      } = e;
      if (!U && !Gn(H))
        return Ht("--placeholder-hidden");
      if (U && (!Gn(H) || r.value))
        return Ht("--placeholder-hint");
    }, $ = () => n.value && window.getComputedStyle(n.value).width || "0px", D = () => {
      var {
        disabled: U,
        readonly: H,
        onFocus: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (l.value = $(), s.value = Be(e.offsetY), r.value = !0, V(x), S("onFocus"));
    }, I = () => {
      var {
        disabled: U,
        readonly: H,
        onBlur: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (V(x), S("onBlur"));
    }, g = (U) => {
      var {
        disabled: H,
        readonly: x,
        multiple: oe,
        onChange: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || x)) {
        var ve = oe ? f.filter((Ce) => {
          var {
            selected: Ye
          } = Ce;
          return Ye.value;
        }).map(M) : M(U);
        V(e["onUpdate:modelValue"], ve), V(se, ve), S("onChange"), !oe && (r.value = !1);
      }
    }, O = () => {
      var {
        disabled: U,
        readonly: H,
        multiple: x,
        clearable: oe,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || H || !oe)) {
        var ve = x ? [] : void 0;
        V(e["onUpdate:modelValue"], ve), V(se, ve), S("onClear");
      }
    }, R = (U) => {
      var {
        disabled: H,
        onClick: x
      } = e;
      d != null && d.disabled.value || H || (V(x, U), S("onClick"));
    }, F = (U) => {
      var {
        disabled: H,
        readonly: x,
        modelValue: oe,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || x)) {
        var ve = oe, Ce = f.find((xe) => {
          var {
            label: Me
          } = xe;
          return Me.value === U;
        }), Ye = ve.filter((xe) => {
          var Me;
          return xe !== ((Me = Ce.value.value) != null ? Me : Ce.label.value);
        });
        V(e["onUpdate:modelValue"], Ye), V(se, Ye), S("onClose");
      }
    }, G = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var x = H;
        f.forEach((oe) => oe.sync(x.includes(M(oe))));
      } else
        f.forEach((oe) => oe.sync(H === M(oe)));
      C();
    }, L = () => {
      l.value = $(), s.value = Be(e.offsetY), r.value = !0;
    }, J = () => {
      r.value = !1;
    }, j = () => b(e.rules, e.modelValue), Z = () => {
      V(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
    };
    te(() => e.multiple, () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U && !ye(H))
        throw Error("The modelValue must be an array when multiple is true");
    }), te(() => e.modelValue, G, {
      deep: !0
    }), te(() => v.value, G);
    var N = {
      wrapWidth: W(() => l.value),
      multiple: a,
      focusColor: t,
      onSelect: g,
      reset: Z,
      validate: j,
      resetValidation: T
    };
    return c(N), V(u, N), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: p,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: k,
      n: Ht,
      classes: Ag,
      computePlaceholderState: A,
      handleFocus: D,
      handleBlur: I,
      handleClear: O,
      handleClick: R,
      handleClose: F,
      reset: Z,
      validate: j,
      resetValidation: T,
      focus: L,
      blur: J
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
var Ug = {
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
  n: Yg,
  classes: Fg
} = re("skeleton");
function Wg(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? Q("v-if", !0) : (y(), P(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [q(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (y(), P(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (y(), P(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: X({
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
      )) : Q("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (y(), P(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (y(), P(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: X({
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
        )) : Q("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (y(), P(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (y(), P(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: X({
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
          )) : Q("v-if", !0), (y(!0), P(
            Ve,
            null,
            De(e.toNumber(e.rows), (r, a) => (y(), P(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: X({
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
        )) : Q("v-if", !0)],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.loading && e.fullscreen ? (y(), P(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: X({
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
    )) : Q("v-if", !0)],
    2
  );
}
const da = _({
  render: Wg,
  name: "VarSkeleton",
  props: Ug,
  setup() {
    return {
      n: Yg,
      classes: Fg,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function Hg(e) {
  return ["always", "normal", "never"].includes(e);
}
var jg = {
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
    validator: Hg
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
  onChange: Y(),
  onStart: Y(),
  onEnd: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: tl,
  classes: Gg
} = re("slider"), Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var qg = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function Kg(e, n) {
  var r = ie("var-form-details");
  return y(), P(
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
            style: X({
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
            style: X(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (y(!0), P(
        Ve,
        null,
        De(e.thumbList, (a) => (y(), P(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: X({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Bn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Bn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [q(e.$slots, "button", {
            currentValue: a.text
          }, () => [B(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), B(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), B(
            "div",
            {
              class: m(e.classes(e.n("thumb-label"), [e.showLabel(a.enumValue), e.n("thumb-label--active")])),
              style: X({
                background: e.labelColor,
                color: e.labelTextColor,
                height: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2),
                width: e.thumbSize === void 0 ? e.thumbSize : e.multiplySizeUnit(e.thumbSize, 2)
              })
            },
            [B(
              "span",
              null,
              ee(a.text),
              1
            )],
            6
          )])],
          46,
          qg
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
const va = _({
  render: Kg,
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: jg,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = pn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = E(null), v = E(0), f = E(!1), c = Ne({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), p = W(() => z(e.max) - z(e.min)), w = W(() => v.value / p.value * z(e.step)), b = W(() => {
      var {
        modelValue: j,
        range: Z
      } = e, N = [];
      return Z && ye(j) ? N = [{
        value: M(j[0]),
        enumValue: Ie.First,
        text: h(j[0])
      }, {
        value: M(j[1]),
        enumValue: Ie.Second,
        text: h(j[1])
      }] : Ge(j) && (N = [{
        value: M(j),
        enumValue: Ie.First,
        text: h(j)
      }]), N;
    }), T = W(() => {
      var {
        activeColor: j,
        range: Z,
        modelValue: N
      } = e, U = Z && ye(N) ? M(Math.min(N[0], N[1])) : 0, H = Z && ye(N) ? M(Math.max(N[0], N[1])) - U : M(N);
      return {
        width: H + "%",
        left: U + "%",
        background: j
      };
    }), k = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), C = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), S = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[j].active, M = (j) => {
      var {
        min: Z,
        max: N
      } = e;
      return j < z(Z) ? 0 : j > z(N) ? 100 : (j - z(Z)) / p.value * 100;
    }, h = (j) => {
      if (!Ge(j))
        return 0;
      var Z = j;
      Z < Number(e.min) && (Z = Number(e.min)), Z > Number(e.max) && (Z = Number(e.max));
      var N = parseInt("" + Z, 10) === Z;
      return N ? Z : z(Z.toPrecision(5));
    }, A = (j, Z) => {
      var N = [], {
        step: U,
        range: H,
        modelValue: x,
        onChange: oe,
        min: se
      } = e, ve = z(U), Ce = Math.round(j / w.value), Ye = Ce * ve + z(se), xe = c[Z].percentValue * ve + z(se);
      if (c[Z].percentValue = Ce, H && ye(x) && (N = Z === Ie.First ? [Ye, x[1]] : [x[0], Ye]), xe !== Ye) {
        var Me = H ? N.map((sn) => h(sn)) : h(Ye);
        V(oe, Me), V(e["onUpdate:modelValue"], Me), u();
      }
    }, $ = (j) => {
      if (!e.range)
        return Ie.First;
      var Z = c[Ie.First].percentValue * w.value, N = c[Ie.Second].percentValue * w.value, U = Math.abs(j - Z), H = Math.abs(j - N);
      return U <= H ? Ie.First : Ie.Second;
    }, D = (j, Z) => {
      v.value || (v.value = d.value.offsetWidth), !(k.value || C.value) && (V(e.onStart), f.value = !0, c[Z].startPosition = j.touches[0].clientX);
    }, I = (j, Z) => {
      if (!(k.value || C.value || !f.value)) {
        var N = j.touches[0].clientX - c[Z].startPosition + c[Z].currentLeft;
        c[Z].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), A(N, Z);
      }
    }, g = (j) => {
      var {
        range: Z,
        modelValue: N,
        onEnd: U,
        step: H,
        min: x
      } = e;
      if (!(k.value || C.value)) {
        var oe = [];
        c[j].currentLeft = c[j].percentValue * w.value, c[j].active = !1;
        var se = c[j].percentValue * z(H) + z(x);
        Z && ye(N) && (oe = j === Ie.First ? [se, N[1]] : [N[0], se]), V(U, Z ? oe : se), f.value = !1;
      }
    }, O = (j) => {
      if (!(k.value || C.value) && !j.target.closest("." + tl("thumb"))) {
        var Z = j.clientX - ou(j.currentTarget), N = $(Z);
        A(Z, N), g(N);
      }
    }, R = () => {
      var j = z(e.step);
      return isNaN(j) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : j < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, F = () => {
      var {
        range: j,
        modelValue: Z
      } = e;
      return j && !ye(Z) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && ye(Z) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && ye(Z) && Z.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, G = function(j, Z) {
      j === void 0 && (j = e.modelValue), Z === void 0 && (Z = z(e.step));
      var N = (U) => {
        var {
          min: H,
          max: x
        } = e;
        return U < z(H) ? 0 : U > z(x) ? p.value / Z : (U - z(H)) / Z;
      };
      e.range && ye(j) ? (c[Ie.First].percentValue = N(j[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * w.value, c[Ie.Second].percentValue = N(j[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * w.value) : Ge(j) && (c[Ie.First].currentLeft = N(j) * w.value);
    }, L = () => {
      var j = e.range ? [0, 0] : 0;
      V(e["onUpdate:modelValue"], j), o();
    }, J = {
      reset: L,
      validate: l,
      resetValidation: o
    };
    return V(n, J), te([() => e.modelValue, () => e.step], (j) => {
      var [Z, N] = j;
      !R() || !F() || f.value || G(Z, z(N));
    }), te(v, () => G()), Ue(() => {
      !R() || !F() || (v.value = d.value.offsetWidth);
    }), {
      n: tl,
      classes: Gg,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: k,
      errorMessage: a,
      thumbsProps: c,
      thumbList: b,
      multiplySizeUnit: Je,
      toNumber: z,
      showLabel: S,
      start: D,
      move: I,
      end: g,
      click: O
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
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
function Xg(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function Zg(e) {
  return Qi.includes(e);
}
var Es = {
  type: {
    type: String,
    validator: Zg
  },
  position: {
    type: String,
    default: "top",
    validator: Xg
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
  loadingType: en(qn, "type"),
  loadingSize: en(qn, "size"),
  loadingRadius: en(qn, "radius"),
  loadingColor: Vi({}, en(qn, "color"), {
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
  onOpen: Y(),
  onOpened: Y(),
  onClose: Y(),
  onClosed: Y(),
  "onUpdate:show": Y(),
  _update: {
    type: String
  }
}, {
  n: Jg,
  classes: Qg
} = re("snackbar"), xg = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function _g(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return $e((y(), P(
    "div",
    {
      class: m(e.n()),
      style: X({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: X({
          zIndex: e.zIndex
        })
      },
      [B(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [q(e.$slots, "default", {}, () => [ge(
          ee(e.content),
          1
        )])],
        2
      ), B(
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
        )) : Q("v-if", !0), e.type === "loading" ? (y(), pe(
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
  )), [[Xa, e.show]]);
}
const Ms = _({
  render: _g,
  name: "VarSnackbarCore",
  components: {
    VarLoading: Tn,
    VarIcon: Oe
  },
  props: Es,
  setup(e) {
    var n = E(null), {
      zIndex: r
    } = Ja(() => e.show, 1);
    $t(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? xg[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && V(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return te(() => e.show, (o) => {
      o ? (V(e.onOpen), i()) : o === !1 && (clearTimeout(n.value), V(e.onClose));
    }), te(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Ue(() => {
      e.show && (V(e.onOpen), i());
    }), {
      SNACKBAR_TYPE: Qi,
      n: Jg,
      classes: Qg,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: e0
} = re("snackbar");
function n0(e, n) {
  var r = ie("var-snackbar-core");
  return y(), pe(
    Ka,
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
        default: ce(() => [ne(
          r,
          Pe(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ce(() => [q(e.$slots, "action")]),
            default: ce(() => [q(e.$slots, "default", {}, () => [ge(
              ee(e.content),
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
const fa = _({
  render: n0,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Ms
  },
  props: Es,
  setup() {
    var {
      disabled: e
    } = Ui();
    return {
      n: e0,
      disabled: e
    };
  }
});
function Ga() {
  return Ga = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ga.apply(this, arguments);
}
function r0(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !bt(e);
}
var Qi = ["loading", "success", "warning", "info", "error"], il = 0, Pi = !1, Is, Ma = !1, fn = Ne([]), a0 = {
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
}, t0 = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, i0 = {
  setup() {
    return () => {
      var e = fn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ma && (t.position = "top");
        var l = Ma ? "relative" : "absolute", s = Ga({
          position: l
        }, d0(t.position));
        return ne(Ms, Pe(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = ln.zIndex;
      return ne(xs, Pe(t0, {
        style: {
          zIndex: n
        },
        onAfterEnter: o0,
        onAfterLeave: l0
      }), r0(e) ? e : {
        default: () => [e]
      });
    };
  }
}, An = function(e) {
  var n = Ke(e) || Ge(e) ? {
    content: String(e)
  } : e, r = Ne(Ga({}, a0, n));
  r.show = !0, Pi || (Pi = !0, Is = Da(i0).unmountInstance);
  var {
    length: a
  } = fn, t = {
    id: il++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ma)
    s0(t);
  else {
    var i = "update-" + il;
    u0(r, i);
  }
  return {
    clear() {
      !Ma && fn.length ? fn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
Qi.forEach((e) => {
  An[e] = (n) => (Ai(n) ? n.type = e : n = {
    content: n,
    type: e
  }, An(n));
});
An.install = function(e) {
  e.component(fa.name, fa);
};
An.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ma && (fn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ma = e);
};
An.clear = function() {
  fn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
An.Component = fa;
function o0(e) {
  var n = e.getAttribute("data-id"), r = fn.find((a) => a.id === z(n));
  r && V(r.reactiveSnackOptions.onOpened);
}
function l0(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = fn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, V(r.reactiveSnackOptions.onClosed));
  var a = fn.every((t) => t.animationEnd);
  a && (V(Is), fn = Ne([]), Pi = !1);
}
function s0(e) {
  fn.push(e);
}
function u0(e, n) {
  var [r] = fn;
  r.reactiveSnackOptions = Ga({}, r.reactiveSnackOptions, e), r._update = n;
}
function d0(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
fa.install = function(e) {
  e.component(fa.name, fa);
};
var Ns = (e) => ["mini", "small", "normal", "large"].includes(e), v0 = (e) => Ns(e) || ye(e) || Ge(e) || Ke(e), f0 = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), c0 = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: v0
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
    validator: f0
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function tn(e) {
  return "calc(" + e + " / 2)";
}
function m0(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: i,
    lastIndex: o
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? i !== o ? l = tn(e) + " " + n + " " + tn(e) + " 0" : l = tn(e) + " 0" : t === "space-around" ? l = tn(e) + " " + tn(n) : t === "space-between" && (i === 0 ? l = tn(e) + " " + tn(n) + " " + tn(e) + " 0" : i === o ? l = tn(e) + " 0 " + tn(e) + " " + tn(n) : l = tn(e) + " " + tn(n))), a === "column" && i !== o && (l = "0 0 " + e + " 0"), l;
}
var {
  n: jt,
  classes: p0
} = re("space");
const ca = _({
  name: "VarSpace",
  props: c0,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? ["var(--space-size-" + i + "-y)", "var(--space-size-" + i + "-x)"] : ye(i) ? i.map(we) : [we(i), we(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (i = V(r.default)) != null ? i : [], c = Ns(v), [p, w] = a(v, c), b = (C) => {
        var S = [];
        return C.forEach((M) => {
          if (M.type !== _s) {
            if (M.type === Ve && ye(M.children)) {
              M.children.forEach((h) => {
                S.push(h);
              });
              return;
            }
            S.push(M);
          }
        }), S;
      };
      f = b(f);
      var T = f.length - 1, k = f.map((C, S) => {
        var M = m0(p, w, {
          direction: d,
          justify: l,
          index: S,
          lastIndex: T
        });
        return ne("div", {
          style: {
            margin: M
          }
        }, [C]);
      });
      return ne("div", {
        class: p0(jt(), jt("$--box"), [o, jt("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + p + " / 2) 0" : void 0
        }
      }, [k]);
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
var h0 = {
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
}, Ds = Symbol("STEPS_BIND_STEP_KEY"), Bs = Symbol("STEPS_COUNT_STEP_KEY");
function g0() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Ds), {
    length: r
  } = kn(Bs);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function y0() {
  var {
    parentProvider: e,
    bindParent: n
  } = mn(Ds), {
    index: r
  } = $n(Bs);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: b0,
  classes: w0
} = re("step"), S0 = {
  key: 3
};
function C0(e, n) {
  var r = ie("var-icon");
  return y(), P(
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
            style: X({
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
          )) : (y(), P(
            "span",
            S0,
            ee(e.index + 1),
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
          [q(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? Q("v-if", !0) : (y(), P(
        "div",
        {
          key: 0,
          class: m(e.n(e.direction + "-line")),
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
const ma = _({
  render: C0,
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: h0,
  setup() {
    var e = E(null), n = E(""), r = E(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = y0(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), p = {
      index: a
    }, w = () => v(a.value), b = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(p), te(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var k = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + k + "px";
      }
    }), {
      n: b0,
      classes: w0,
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
      getRef: b
    };
  }
});
ma.install = function(e) {
  e.component(ma.name, ma);
};
function k0(e) {
  return ["horizontal", "vertical"].includes(e);
}
var $0 = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: k0
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: Y()
}, {
  n: T0
} = re("steps");
function O0(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n()),
      style: X({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [q(e.$slots, "default")],
    6
  );
}
const pa = _({
  render: O0,
  name: "VarSteps",
  props: $0,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = g0(), l = (u) => {
      V(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: T0
    };
  }
});
pa.install = function(e) {
  e.component(pa.name, pa);
};
var {
  n: V0
} = re("style-provider");
const ha = _({
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
      class: V0(),
      style: Cl(e.styleVars)
    }, V(r.default));
  }
});
var Gt = [];
function qa(e) {
  Gt.forEach((r) => document.documentElement.style.removeProperty(r)), Gt.length = 0;
  var n = Cl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Gt.push(a);
  });
}
qa.Component = ha;
ha.install = function(e) {
  e.component(ha.name, ha);
};
qa.install = function(e) {
  e.component(ha.name, ha);
};
var P0 = {
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
  onClick: Y(),
  onChange: Y(),
  "onUpdate:modelValue": Y()
}, {
  n: E0,
  classes: M0
} = re("switch");
function I0(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = qe("ripple");
  return y(), P(
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
        style: X(e.styleComputed.switch)
      },
      [B(
        "div",
        {
          style: X(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), $e((y(), P(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple)
        },
        [B(
          "div",
          {
            style: X(e.styleComputed.handle),
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
const ga = _({
  render: I0,
  name: "VarSwitch",
  components: {
    VarLoading: Tn,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  props: P0,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = hn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = pn(), l = () => i(e.rules, e.modelValue), s = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: p,
        modelValue: w,
        color: b,
        closeColor: T,
        loadingColor: k,
        activeValue: C
      } = e;
      return {
        handle: {
          width: Je(p),
          height: Je(p),
          backgroundColor: w === C ? b : T,
          color: k
        },
        ripple: {
          left: w === C ? Je(p, 0.5) : "-" + Je(p, 0.5),
          color: w === C ? b : T || "#999",
          width: Je(p, 2),
          height: Je(p, 2)
        },
        track: {
          height: Je(p, 0.72),
          width: Je(p, 1.9),
          borderRadius: Je(p, 2 / 3),
          filter: w === C || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: w === C ? b : T
        },
        switch: {
          height: Je(p, 1.2),
          width: Je(p, 2)
        }
      };
    }), d = W(() => {
      var {
        size: p = "5.333vw"
      } = e;
      return Je(p, 0.4);
    }), v = (p) => {
      var {
        onClick: w,
        onChange: b,
        disabled: T,
        loading: k,
        readonly: C,
        modelValue: S,
        activeValue: M,
        inactiveValue: h,
        "onUpdate:modelValue": A
      } = e;
      if (V(w, p), !(T || k || C || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var $ = S === M ? h : M;
        V(b, $), V(A, $), s();
      }
    }, f = () => {
      V(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return V(n, c), {
      n: E0,
      classes: M0,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var N0 = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: Y()
}, As = Symbol("TABS_BIND_TAB_KEY"), zs = Symbol("TABS_COUNT_TAB_KEY");
function D0() {
  var {
    childProviders: e,
    bindChildren: n
  } = cn(As), {
    length: r
  } = kn(zs);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function B0() {
  var {
    parentProvider: e,
    bindParent: n
  } = mn(As), {
    index: r
  } = $n(zs);
  if (!e || !n || !r)
    throw Error("<var-tab/> must in <var-tabs/>");
  return {
    index: r,
    tabs: e,
    bindTabs: n
  };
}
var {
  n: it,
  classes: A0
} = re("tab");
function z0(e, n) {
  var r = qe("ripple");
  return $e((y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), e.computeColorClass(), e.n("--" + e.itemDirection))),
      ref: "tabEl",
      style: X({
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
const ya = _({
  render: z0,
  name: "VarTab",
  directives: {
    Ripple: Fe
  },
  props: N0,
  setup(e) {
    var n = E(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = B0(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: p
    } = o, w = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(w);
    var b = () => {
      var {
        disabled: C,
        name: S
      } = e;
      return C ? f.value : u.value === S || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: C,
        name: S
      } = e;
      return C ? it("$-tab--disabled") : u.value === S || u.value === (i == null ? void 0 : i.value) ? it("$-tab--active") : it("$-tab--inactive");
    }, k = (C) => {
      var {
        disabled: S,
        name: M,
        onClick: h
      } = e;
      S || (V(h, M != null ? M : i.value, C), s(w));
    };
    return te(() => e.name, p), te(() => e.disabled, p), {
      n: it,
      classes: A0,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: b,
      computeColorClass: T,
      handleClick: k
    };
  }
});
ya.install = function(e) {
  e.component(ya.name, ya);
};
var Ls = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Rs = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function L0() {
  var {
    bindChildren: e,
    childProviders: n
  } = cn(Ls), {
    length: r
  } = kn(Rs);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function R0() {
  var {
    parentProvider: e,
    bindParent: n
  } = mn(Ls), {
    index: r
  } = $n(Rs);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var U0 = {
  name: {
    type: [String, Number]
  }
}, {
  n: Y0,
  classes: F0
} = re("tab-item");
function W0(e, n) {
  var r = ie("var-swipe-item");
  return y(), pe(
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
const ba = _({
  render: W0,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Qn
  },
  props: U0,
  setup(e) {
    var n = E(!1), r = E(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = R0(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: Y0,
      classes: F0,
      current: n,
      initSlot: r
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
var {
  n: H0,
  classes: j0
} = re("table");
function G0(e, n) {
  return y(), P(
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
          style: X({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [q(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (y(), P(
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
const wa = _({
  render: G0,
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
      n: H0,
      classes: j0
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
function ol(e) {
  return ["horizontal", "vertical"].includes(e);
}
var q0 = {
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
  offsetTop: en(ms, "offsetTop"),
  onClick: Y(),
  onChange: Y(),
  "onUpdate:active": Y()
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
function K0(e) {
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
  n: X0,
  classes: Z0
} = re("tabs");
function J0(e, n) {
  return y(), pe(
    Na(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.offsetTop : null
    },
    {
      default: ce(() => [B(
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
          [q(e.$slots, "default"), B(
            "div",
            {
              class: m(e.classes(e.n("indicator"), e.n("--layout-" + e.layoutDirection + "-indicator"))),
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
const Sa = _({
  render: J0,
  name: "VarTabs",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: q0,
  setup(e) {
    var n = E("0px"), r = E("0px"), a = E("0px"), t = E("0px"), i = E(!1), o = E(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), v = W(() => e.itemDirection), {
      tabList: f,
      bindTabList: c,
      length: p
    } = D0(), w = ($) => {
      var D, I = (D = $.name.value) != null ? D : $.index.value, {
        active: g,
        onChange: O,
        onClick: R
      } = e;
      V(e["onUpdate:active"], I), V(R, I), I !== g && V(O, I);
    }, b = () => f.find(($) => {
      var {
        name: D
      } = $;
      return e.active === D.value;
    }), T = ($) => f.find((D) => {
      var {
        index: I
      } = D;
      return ($ != null ? $ : e.active) === I.value;
    }), k = () => {
      if (p.value !== 0) {
        var {
          active: $
        } = e;
        if (Ge($)) {
          var D = $ > p.value - 1 ? p.value - 1 : 0;
          return V(e["onUpdate:active"], D), T(D);
        }
      }
    }, C = () => {
      i.value = f.length >= 5;
    }, S = ($) => {
      var {
        element: D
      } = $, I = D.value;
      e.layoutDirection === "horizontal" ? (n.value = (I == null ? void 0 : I.offsetWidth) + "px", a.value = (I == null ? void 0 : I.offsetLeft) + "px") : (r.value = (I == null ? void 0 : I.offsetHeight) + "px", t.value = (I == null ? void 0 : I.offsetTop) + "px");
    }, M = ($) => {
      var {
        element: D
      } = $;
      if (!!i.value) {
        var I = o.value, g = D.value;
        if (e.layoutDirection === "horizontal") {
          var O = g.offsetLeft + g.offsetWidth / 2 - I.offsetWidth / 2;
          Ya(I, {
            left: O,
            animation: Kt
          });
        } else {
          var R = g.offsetTop + g.offsetHeight / 2 - I.offsetHeight / 2;
          Ya(I, {
            top: R,
            animation: Kt
          });
        }
      }
    }, h = () => {
      var $ = b() || T() || k();
      !$ || $.disabled.value || (C(), S($), M($));
    }, A = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: h,
      onTabClick: w
    };
    return c(A), te(() => p.value, /* @__PURE__ */ K0(function* () {
      yield Vn(), h();
    })), te(() => e.active, h), Ue(() => window.addEventListener("resize", h)), tr(() => window.removeEventListener("resize", h)), {
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Re,
      toSizeUnit: we,
      n: X0,
      classes: Z0,
      resize: h
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var Q0 = {
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
  "onUpdate:active": Y()
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
function x0(e) {
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
  n: _0
} = re("tabs-items");
function ey(e, n) {
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
      default: ce(() => [q(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const Ca = _({
  render: ey,
  name: "VarTabsItems",
  components: {
    VarSwipe: Jn
  },
  props: Q0,
  setup(e) {
    var n = E(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = L0(), i = (f) => r.find((c) => {
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
      !p || (r.forEach((w) => {
        var {
          setCurrent: b
        } = w;
        return b(!1);
      }), p.setCurrent(!0), (c = n.value) == null || c.to(p.index.value));
    }, u = (f) => {
      var c, p = r.find((b) => {
        var {
          index: T
        } = b;
        return T.value === f;
      }), w = (c = p.name.value) != null ? c : p.index.value;
      V(e["onUpdate:active"], w);
    }, d = () => n.value, v = {};
    return a(v), te(() => e.active, s), te(() => t.value, /* @__PURE__ */ x0(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: _0,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
const ny = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, ry = {
  "--badge-default-color": "#555"
}, ay = {
  "--button-default-color": "#303030"
}, ty = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, iy = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, oy = {
  "--checkbox-unchecked-color": "#fff"
}, ly = {
  "--chip-default-color": "#555"
}, sy = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, uy = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, dy = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, vy = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, fy = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, cy = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, my = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, py = {
  "--popup-content-background-color": "#1e1e1e"
}, hy = {
  "--pull-refresh-background": "#303030"
}, gy = {
  "--radio-unchecked-color": "#fff"
}, yy = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, by = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, wy = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, Sy = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, Cy = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, ky = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, $y = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, Ty = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, Oy = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, Vy = {
  "--tabs-background": "#1e1e1e"
}, Py = {
  "--app-bar-color": "#272727"
}, Ey = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, My = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, Iy = {
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
const Ny = Ei({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, ay, iy, ty, Ty, uy, wy, Vy, ky, py, dy, ny, ly, ry, Oy, sy, hy, Cy, Sy, cy, $y, fy, by, gy, oy, vy, my, Py, Ey, My, Iy, yy);
var Mi = {
  dark: Ny
}, dn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], Qe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ul = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function Dy(e) {
  return ["ampm", "24hr"].includes(e);
}
var By = {
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
    validator: Dy
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
  "onUpdate:modelValue": Y(),
  onChange: Y()
}, Us = (e, n) => e === "24hr" || n === "am", xi = (e, n, r) => {
  var a = dn.findIndex((i) => z(i) === z(r)), t = Us(e, n) ? r : Qe[a];
  return {
    hourStr: t,
    hourNum: z(t)
  };
}, nn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: z(n),
    minute: z(r),
    second: z(a)
  };
}, Ys = (e) => {
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
      minute: w
    } = nn(l);
    f = p === v && a > w;
  }
  if (!l && s) {
    var {
      hour: b,
      minute: T
    } = nn(s);
    f = b === v && a < T;
  }
  if (l && s) {
    var {
      hour: k,
      minute: C
    } = nn(l), {
      hour: S,
      minute: M
    } = nn(s);
    f = S === v && a < M || k === v && a > C;
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
  } = xi(t, i, o), c = !1, p = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: w,
      minute: b,
      second: T
    } = nn(s);
    c = w === f && b < l || b === l && a > T;
  }
  if (!s && u) {
    var {
      hour: k,
      minute: C,
      second: S
    } = nn(u);
    c = k === f && C > l || C === l && a > S;
  }
  if (s && u) {
    var {
      hour: M,
      minute: h,
      second: A
    } = nn(s), {
      hour: $,
      minute: D,
      second: I
    } = nn(u);
    c = M === f && h < l || $ === f && D > l || M === f && h === l && a > A || $ === f && D === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (p = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || p;
}, {
  n: Ay,
  classes: zy
} = re("time-picker");
function Ly(e, n) {
  return y(), P(
    "div",
    {
      class: m(e.n("clock"))
    },
    [B(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: X(e.handStyle)
      },
      null,
      6
    ), (y(!0), P(
      Ve,
      null,
      De(e.timeScales, (r, a) => (y(), P(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: X(e.getStyle(a, r, !1))
        },
        ee(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (y(), P(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(y(!0), P(
        Ve,
        null,
        De(e.hours24, (r, a) => (y(), P(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: X(e.getStyle(a, r, !0))
          },
          ee(r),
          7
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const Ry = _({
  render: Ly,
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
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = W(() => {
      if (e.rad !== void 0) {
        var b = e.rad / 30;
        return b >= 0 ? b : b + 12;
      }
    }), s = W(() => e.type === "hour" ? dn : ul), u = (b, T) => {
      var k;
      b = (k = b) != null ? k : e.type === "minute" ? e.time.minute : e.time.second;
      var C = e.type === "minute" ? Ys : Fs, S = {
        time: z(b),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: z(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(S, "minute"), C(S);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var b = e.isInner ? Qe[l.value] : s.value[l.value];
      return s.value === ul ? u() ? "#bdbdbd" : e.color : f(b) ? "#bdbdbd" : e.color;
    }, v = (b, T) => T ? l.value === b && e.isInner : l.value === b && (!e.isInner || e.type !== "hour"), f = (b) => {
      if (e.type === "hour") {
        if (Us(e.format, e.ampm))
          return t.value.includes(b);
        var T = dn.findIndex((k) => k === b);
        return i.value.includes(T);
      }
      return u(b, !0);
    }, c = (b, T, k) => {
      var C = 2 * Math.PI / 12 * b - Math.PI / 2, S = 50 * (1 + Math.cos(C)), M = 50 * (1 + Math.sin(C)), h = () => v(b, k) ? f(T) ? {
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
        color: $
      } = h();
      return {
        left: S + "%",
        top: M + "%",
        backgroundColor: A,
        color: $
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
    }, w = () => {
      if (l.value !== void 0) {
        var b = e.ampm === "am" ? dn : Qe;
        return yr(b[l.value], 2, "0");
      }
    };
    return te([l, () => e.isInner], (b, T) => {
      var [k, C] = b, [S, M] = T, h = k === S && C === M;
      if (!(h || e.type !== "hour" || l.value === void 0)) {
        var A = C ? Qe[l.value] : w(), $ = e.useSeconds ? ":" + e.time.second : "", D = A + ":" + e.time.minute + $;
        e.preventNextUpdate || r("update", D), r("change-prevent-update");
      }
    }), te(() => e.rad, (b, T) => {
      if (!(e.type === "hour" || b === void 0 || T === void 0)) {
        var k = b / 6 >= 0 ? b / 6 : b / 6 + 60, C = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if (k !== C) {
          var S, {
            hourStr: M
          } = xi(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var h = ae().minute(k).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            S = M + ":" + h + A;
          }
          if (e.type === "second") {
            var $ = ae().second(k).format("ss"), D = e.useSeconds ? ":" + $ : "";
            S = M + ":" + e.time.minute + D;
          }
          r("update", S);
        }
      }
    }), te([() => e.max, () => e.min, () => e.allowedTime], (b) => {
      var [T, k, C] = b;
      if (t.value = [], T && !k) {
        var {
          hour: S
        } = nn(T), M = dn.filter((J) => z(J) > S), h = Qe.filter((J) => z(J) > S);
        t.value = [...M, ...h];
      }
      if (!T && k) {
        var {
          hour: A
        } = nn(k), $ = dn.filter((J) => z(J) < A), D = Qe.filter((J) => z(J) < A);
        t.value = [...$, ...D];
      }
      if (T && k) {
        var {
          hour: I
        } = nn(T), {
          hour: g
        } = nn(k), O = dn.filter((J) => z(J) < g || z(J) > I), R = Qe.filter((J) => z(J) < g || z(J) > I);
        t.value = [...O, ...R];
      }
      if (C != null && C.hours) {
        var {
          hours: F
        } = C, G = dn.filter((J) => !F(z(J))), L = Qe.filter((J) => !F(z(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...L])];
      }
      i.value = t.value.map((J) => Qe.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: Ay,
      classes: zy,
      hours24: Qe,
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
  n: Uy,
  classes: Yy
} = re("time-picker"), Fy = (e) => ($r(""), e = e(), Tr(), e), Wy = /* @__PURE__ */ Fy(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
)), Hy = {
  key: 0
};
function jy(e, n) {
  var r = ie("clock");
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [B(
      "div",
      {
        class: m(e.n("title")),
        style: X({
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
          ee(e.time.hour),
          3
        ), Wy, B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ee(e.time.minute),
          3
        ), e.useSeconds ? (y(), P("span", Hy, ":")) : Q("v-if", !0), e.useSeconds ? (y(), P(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ee(e.time.second),
          3
        )) : Q("v-if", !0)],
        2
      ), e.format === "ampm" ? (y(), P(
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
      )) : Q("v-if", !0)],
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
        [ne(
          Re,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ce(() => [(y(), pe(
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
const ka = _({
  render: jy,
  name: "VarTimePicker",
  components: {
    Clock: Ry
  },
  props: By,
  setup(e) {
    var n = E(null), r = E(null), a = E(null), t = E(!1), i = E(!1), o = E(!1), l = E(!1), s = E(!1), u = E(void 0), d = E(0), v = E(0), f = E("hour"), c = E("am"), p = E(!1), w = E(!1), b = E({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), k = Ne({
      x: [],
      y: []
    }), C = W(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), S = (N) => {
      V(e["onUpdate:modelValue"], N), V(e.onChange, N);
    }, M = (N) => N * 57.29577951308232, h = (N) => {
      l.value = !1, w.value = !1, f.value = N;
    }, A = (N) => {
      var {
        disableHour: U
      } = a.value, H = dn.findIndex((se) => z(se) === z(b.value.hour)), x = N === "am" ? dn : Qe, oe = [...x.slice(H), ...x.slice(0, H)];
      return oe.find((se, ve) => (i.value = ve !== 0, !U.includes(se)));
    }, $ = (N) => {
      if (!e.readonly) {
        c.value = N;
        var U = A(N);
        if (!!U) {
          var H = e.useSeconds ? ":" + b.value.second : "", x = yr(U, 2, "0") + ":" + b.value.minute + H;
          S(x);
        }
      }
    }, D = (N, U) => {
      var H = N >= k.x[0] && N <= k.x[1], x = U >= k.y[0] && U <= k.y[1];
      return H && x;
    }, I = (N) => {
      var U = e.format === "24hr" ? "HH" : "hh", {
        hour: H,
        minute: x,
        second: oe
      } = nn(N);
      return {
        hour: ae().hour(H).format(U),
        minute: ae().minute(x).format("mm"),
        second: ae().second(oe).format("ss")
      };
    }, g = (N) => {
      var U = N / 30;
      return U >= 0 ? U : U + 12;
    }, O = () => {
      var {
        width: N,
        height: U
      } = a.value.getSize(), H = T.x - N / 2 - 8, x = T.x + N / 2 + 8, oe = T.y - U / 2 - 8, se = T.y + U / 2 + 8;
      return {
        rangeXMin: H,
        rangeXMax: x,
        rangeYMin: oe,
        rangeYMax: se
      };
    }, R = (N, U, H) => {
      var {
        disableHour: x
      } = a.value;
      o.value = D(N, U);
      var oe = Math.round(H / 30) * 30 + 90, se = g(oe), ve = t.value ? dn[se] : Qe[se];
      if (x.includes(ve) || (t.value = e.format === "24hr" ? D(N, U) : !1), t.value === o.value) {
        var Ce = t.value || c.value === "pm" ? Qe[se] : dn[se];
        p.value = x.includes(Ce), !p.value && (u.value = oe, l.value = !0);
      }
    }, F = (N) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(N / 6) * 6 + 90, x = H / 6 >= 0 ? H / 6 : H / 6 + 60, oe = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: b.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      w.value = Ys(oe), !w.value && (d.value = H, s.value = !0);
    }, G = (N) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(N / 6) * 6 + 90, x = H / 6 >= 0 ? H / 6 : H / 6 + 60, oe = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: b.value.hour,
        minute: z(b.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      Fs(oe) || (v.value = H);
    }, L = () => {
      var {
        left: N,
        top: U,
        width: H,
        height: x
      } = n.value.getBoundingClientRect();
      if (T.x = N + H / 2, T.y = U + x / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: oe,
          rangeXMax: se,
          rangeYMin: ve,
          rangeYMax: Ce
        } = O();
        k.x = [oe, se], k.y = [ve, Ce];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        L();
        var {
          clientX: U,
          clientY: H
        } = N.touches[0], x = U - T.x, oe = H - T.y, se = Math.round(M(Math.atan2(oe, x)));
        f.value === "hour" ? R(U, H, se) : f.value === "minute" ? F(se) : G(se);
      }
    }, j = () => {
      if (!e.readonly) {
        if (f.value === "hour" && l.value) {
          f.value = "minute";
          return;
        }
        f.value === "minute" && e.useSeconds && s.value && (f.value = "second");
      }
    }, Z = () => {
      i.value = !1;
    };
    return te(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: U,
          minute: H,
          second: x
        } = nn(N), oe = ae().hour(U).format("hh"), se = ae().hour(U).format("HH"), ve = ae().minute(H).format("mm"), Ce = ae().second(x).format("ss");
        u.value = (oe === "12" ? 0 : z(oe)) * 30, d.value = z(ve) * 6, v.value = z(Ce) * 6, b.value = I(N), e.format !== "24hr" && (c.value = yr("" + U, 2, "0") === se && Qe.includes(se) ? "pm" : "am"), t.value = e.format === "24hr" && Qe.includes(se);
      }
    }, {
      immediate: !0
    }), {
      n: Uy,
      classes: Yy,
      getRad: C,
      time: b,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: J,
      checkPanel: h,
      checkAmpm: $,
      end: j,
      update: S,
      changePreventUpdate: Z
    };
  }
});
ka.install = function(e) {
  e.component(ka.name, ka);
};
var Gy = {
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
  onBeforeRead: Y(),
  onAfterRead: Y(),
  onBeforeRemove: Y(),
  onRemove: Y(),
  onOversize: Y(),
  "onUpdate:modelValue": Y()
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
  n: qy,
  classes: Ky
} = re("uploader"), Xy = 0, Zy = ["onClick"], Jy = ["onClick"], Qy = ["src", "alt"], xy = ["multiple", "accept", "capture", "disabled"], _y = ["src"];
function eb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), i = qe("ripple");
  return y(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(y(!0), P(
        Ve,
        null,
        De(e.files, (o) => $e((y(), P(
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
            ee(o.name || o.url),
            3
          ), e.removable ? (y(), P(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Bn((l) => e.handleRemove(o), ["stop"])
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
            Jy
          )) : Q("v-if", !0), o.cover ? (y(), P(
            "img",
            {
              key: 1,
              class: m(e.n("file-cover")),
              style: X({
                objectFit: o.fit
              }),
              src: o.cover,
              alt: o.name
            },
            null,
            14,
            Qy
          )) : Q("v-if", !0), B(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          Zy
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? $e((y(), P(
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
          xy
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
        "extra-message": e.maxlengthText
      },
      null,
      8,
      ["error-message", "extra-message"]
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
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (y(), P(
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
            _y
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
const $a = _({
  render: eb,
  name: "VarUploader",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarPopup: wn,
    VarFormDetails: je
  },
  props: Gy,
  setup(e) {
    var n = E(null), r = E(!1), a = E(null), t = W(() => {
      var {
        maxlength: F,
        modelValue: {
          length: G
        }
      } = e;
      return Ge(F) ? G + " / " + F : "";
    }), {
      form: i,
      bindForm: o
    } = hn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = pn(), v = W(() => {
      var {
        modelValue: F,
        hideList: G
      } = e;
      return G ? [] : F;
    }), f = () => {
      n.value.click();
    }, c = (F) => {
      var {
        disabled: G,
        readonly: L,
        previewed: J
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || G || L || !J)) {
        var {
          url: j
        } = F;
        if (Ke(j) && to(j)) {
          rr(j);
          return;
        }
        Ke(j) && io(j) && (a.value = F, r.value = !0);
      }
    }, p = (F) => ({
      id: Xy++,
      url: "",
      cover: "",
      name: F.name,
      file: F
    }), w = (F) => {
      var G = F.target, {
        files: L
      } = G;
      return Array.from(L);
    }, b = (F) => new Promise((G) => {
      var L = new FileReader();
      L.onload = () => {
        var J = L.result;
        F.file.type.startsWith("image") && (F.cover = J), F.url = J, G(F);
      }, L.readAsDataURL(F.file);
    }), T = (F) => F.map(b), k = (F) => {
      var {
        onBeforeRead: G
      } = e;
      return F.map((L) => new Promise((J) => {
        G || J({
          valid: !0,
          varFile: L
        });
        var j = V(G, Ne(L));
        j = ye(j) ? j : [j], Promise.all(j).then((Z) => {
          J({
            valid: !Z.some((N) => !N),
            varFile: L
          });
        });
      }));
    }, C = /* @__PURE__ */ function() {
      var F = vl(function* (G) {
        var {
          maxsize: L,
          maxlength: J,
          modelValue: j,
          onOversize: Z,
          onAfterRead: N,
          readonly: U,
          disabled: H
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || H || U)) {
          var x = (Me) => Me.filter((sn) => sn.file.size > z(L) ? (V(Z, Ne(sn)), !1) : !0), oe = (Me) => {
            var sn = Math.min(Me.length, z(J) - j.length);
            return Me.slice(0, sn);
          }, se = w(G), ve = se.map(p);
          ve = L != null ? x(ve) : ve, ve = J != null ? oe(ve) : ve;
          var Ce = yield Promise.all(T(ve)), Ye = yield Promise.all(k(Ce)), xe = Ye.filter((Me) => {
            var {
              valid: sn
            } = Me;
            return sn;
          }).map((Me) => {
            var {
              varFile: sn
            } = Me;
            return sn;
          });
          V(e["onUpdate:modelValue"], [...j, ...xe]), G.target.value = "", xe.forEach((Me) => V(N, Ne(Me)));
        }
      });
      return function(L) {
        return F.apply(this, arguments);
      };
    }(), S = /* @__PURE__ */ function() {
      var F = vl(function* (G) {
        var {
          disabled: L,
          readonly: J,
          modelValue: j,
          onBeforeRemove: Z,
          onRemove: N
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || L || J)) {
          if (Z) {
            var U = V(Z);
            if (U = ye(U) ? U : [U], (yield Promise.all(U)).some((x) => !x))
              return;
          }
          var H = j.filter((x) => x !== G);
          V(N, G), D("onRemove"), V(e["onUpdate:modelValue"], H);
        }
      });
      return function(L) {
        return F.apply(this, arguments);
      };
    }(), M = () => e.modelValue.filter((F) => F.state === "success"), h = () => e.modelValue.filter((F) => F.state === "error"), A = () => e.modelValue.filter((F) => F.state === "loading"), $ = {
      getSuccess: M,
      getError: h,
      getLoading: A
    }, D = (F) => {
      Ee(() => {
        var {
          validateTrigger: G,
          rules: L,
          modelValue: J
        } = e;
        s(G, F, L, J, $);
      });
    }, I = !1, g = () => u(e.rules, e.modelValue, $), O = () => {
      I = !0, V(e["onUpdate:modelValue"], []), d();
    }, R = {
      validate: g,
      resetValidation: d,
      reset: O
    };
    return V(o, R), te(() => e.modelValue, () => {
      !I && D("onChange"), I = !1;
    }, {
      deep: !0
    }), {
      n: qy,
      classes: Ky,
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
      handleChange: C,
      handleRemove: S,
      getSuccess: M,
      getError: h,
      getLoading: A,
      validate: g,
      resetValidation: d,
      reset: O
    };
  }
});
$a.install = function(e) {
  e.component($a.name, $a);
};
function nb(e) {
  br.install && e.use(br), Ar.install && e.use(Ar), zr.install && e.use(zr), ur.install && e.use(ur), Lr.install && e.use(Lr), Rr.install && e.use(Rr), rn.install && e.use(rn), Ur.install && e.use(Ur), dr.install && e.use(dr), vr.install && e.use(vr), Yr.install && e.use(Yr), fr.install && e.use(fr), Fr.install && e.use(Fr), Wr.install && e.use(Wr), Hr.install && e.use(Hr), ln.install && e.use(ln), jr.install && e.use(jr), Gr.install && e.use(Gr), qr.install && e.use(qr), wr.install && e.use(wr), Kr.install && e.use(Kr), Zn.install && e.use(Zn), je.install && e.use(je), Oe.install && e.use(Oe), Xr.install && e.use(Xr), rr.install && e.use(rr), Zr.install && e.use(Zr), Jr.install && e.use(Jr), hr.install && e.use(hr), gt.install && e.use(gt), Qr.install && e.use(Qr), xr.install && e.use(xr), Tn.install && e.use(Tn), Wa.install && e.use(Wa), _t.install && e.use(_t), er.install && e.use(er), _r.install && e.use(_r), ea.install && e.use(ea), na.install && e.use(na), kr.install && e.use(kr), wn.install && e.use(wn), ra.install && e.use(ra), aa.install && e.use(aa), ta.install && e.use(ta), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), Fe.install && e.use(Fe), sa.install && e.use(sa), ua.install && e.use(ua), da.install && e.use(da), va.install && e.use(va), An.install && e.use(An), ca.install && e.use(ca), ma.install && e.use(ma), pa.install && e.use(pa), xn.install && e.use(xn), qa.install && e.use(qa), Jn.install && e.use(Jn), Qn.install && e.use(Qn), ga.install && e.use(ga), ya.install && e.use(ya), ba.install && e.use(ba), wa.install && e.use(wa), Sa.install && e.use(Sa), Ca.install && e.use(Ca), Mi.install && e.use(Mi), ka.install && e.use(ka), $a.install && e.use($a);
}
const ab = {
  install: nb,
  ActionSheet: br,
  AppBar: Ar,
  BackTop: zr,
  Badge: ur,
  BottomNavigation: Lr,
  BottomNavigationItem: Rr,
  Button: rn,
  Card: Ur,
  Cell: dr,
  Checkbox: vr,
  CheckboxGroup: Yr,
  Chip: fr,
  Col: Fr,
  Collapse: Wr,
  CollapseItem: Hr,
  Context: ln,
  Countdown: jr,
  Counter: Gr,
  DatePicker: qr,
  Dialog: wr,
  Divider: Kr,
  Form: Zn,
  FormDetails: je,
  Icon: Oe,
  Image: Xr,
  ImagePreview: rr,
  IndexAnchor: Zr,
  IndexBar: Jr,
  Input: hr,
  Lazy: gt,
  Link: Qr,
  List: xr,
  Loading: Tn,
  LoadingBar: Wa,
  Locale: _t,
  Menu: er,
  Option: _r,
  Overlay: ea,
  Pagination: na,
  Picker: kr,
  Popup: wn,
  Progress: ra,
  PullRefresh: aa,
  Radio: ta,
  RadioGroup: ia,
  Rate: oa,
  Result: la,
  Ripple: Fe,
  Row: sa,
  Select: ua,
  Skeleton: da,
  Slider: va,
  Snackbar: An,
  Space: ca,
  Step: ma,
  Steps: pa,
  Sticky: xn,
  StyleProvider: qa,
  Swipe: Jn,
  SwipeItem: Qn,
  Switch: ga,
  Tab: ya,
  TabItem: ba,
  Table: wa,
  Tabs: Sa,
  TabsItems: Ca,
  Themes: Mi,
  TimePicker: ka,
  Uploader: $a
};
export {
  br as ActionSheet,
  Ar as AppBar,
  zr as BackTop,
  ur as Badge,
  Lr as BottomNavigation,
  Rr as BottomNavigationItem,
  rn as Button,
  Ur as Card,
  dr as Cell,
  vr as Checkbox,
  Yr as CheckboxGroup,
  fr as Chip,
  Fr as Col,
  Wr as Collapse,
  Hr as CollapseItem,
  ln as Context,
  jr as Countdown,
  Gr as Counter,
  qr as DatePicker,
  wr as Dialog,
  Kr as Divider,
  Zn as Form,
  je as FormDetails,
  Oe as Icon,
  Xr as Image,
  rr as ImagePreview,
  Zr as IndexAnchor,
  Jr as IndexBar,
  hr as Input,
  gt as Lazy,
  Qr as Link,
  xr as List,
  Tn as Loading,
  Wa as LoadingBar,
  _t as Locale,
  er as Menu,
  _r as Option,
  ea as Overlay,
  na as Pagination,
  kr as Picker,
  wn as Popup,
  ra as Progress,
  aa as PullRefresh,
  ta as Radio,
  ia as RadioGroup,
  oa as Rate,
  la as Result,
  Fe as Ripple,
  sa as Row,
  ua as Select,
  da as Skeleton,
  va as Slider,
  An as Snackbar,
  ca as Space,
  ma as Step,
  pa as Steps,
  xn as Sticky,
  qa as StyleProvider,
  Jn as Swipe,
  Qn as SwipeItem,
  ga as Switch,
  ya as Tab,
  ba as TabItem,
  wa as Table,
  Sa as Tabs,
  Ca as TabsItems,
  Mi as Themes,
  ka as TimePicker,
  $a as Uploader,
  ab as default,
  nb as install
};
