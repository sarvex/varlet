import { reactive as Ne, ref as M, onMounted as Ue, onUnmounted as tr, onActivated as Ai, onDeactivated as zi, getCurrentInstance as Da, provide as yl, computed as F, inject as bl, nextTick as Me, createApp as nu, onBeforeUnmount as Li, h as wl, isVNode as kt, watch as oe, onBeforeMount as ru, defineComponent as _, createVNode as re, Teleport as Aa, Transition as Ae, withDirectives as ke, vShow as za, mergeProps as Ve, openBlock as g, createBlock as pe, resolveDynamicComponent as La, normalizeClass as m, normalizeStyle as K, resolveComponent as le, resolveDirective as Xe, withCtx as ve, createElementVNode as B, renderSlot as H, toDisplayString as ne, createElementBlock as P, Fragment as Pe, renderList as Be, createCommentVNode as x, onUpdated as Ri, createTextVNode as he, pushScopeId as $r, popScopeId as Tr, withModifiers as Pn, normalizeProps as Sl, guardReactiveProps as au, vModelText as tu, toRefs as iu, withKeys as io, toRaw as oo, TransitionGroup as ou, Comment as lu } from "vue";
var Cl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(Cl);
const sn = Ne(Cl), Ze = (e) => typeof e == "string", Jt = (e) => typeof e == "boolean", Ke = (e) => typeof e == "number", Ui = (e) => Object.prototype.toString.call(e) === "[object Object]", su = (e) => typeof e == "object" && e !== null, be = (e) => Array.isArray(e), uu = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, A = (e) => e == null ? 0 : Ze(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Jt(e) ? Number(e) : e, $t = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Yi = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Fi = () => typeof window < "u", lo = (e) => [...new Set(e)], du = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), vu = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var so = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), uo = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), fu = (e) => {
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
      this.has(r) && $t(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Qt = (e) => e, vo = (e) => Math.pow(e, 3), kl = (e) => e < 0.5 ? vo(e * 2) / 2 : 1 - vo((1 - e) * 2) / 2, Tt = (e, n) => e == null ? n : e, $l = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, yr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
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
function cu(e) {
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
function mu(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function co(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Ot(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Hi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function pu(e) {
  return xt.apply(this, arguments);
}
function xt() {
  return xt = cu(function* (e) {
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
  }), xt.apply(this, arguments);
}
function Ht(e) {
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
function hu(e) {
  for (var n = [], r = e; r !== window; )
    r = Or(r), n.push(r);
  return n;
}
var Tl = (e) => Ze(e) && e.endsWith("rem"), gu = (e) => Ze(e) && e.endsWith("px") || Ke(e), yu = (e) => Ze(e) && e.endsWith("%"), Ol = (e) => Ze(e) && e.endsWith("vw"), Pl = (e) => Ze(e) && e.endsWith("vh"), bu = (e) => Ze(e) && e.startsWith("calc("), wu = (e) => Ze(e) && e.startsWith("var("), De = (e) => {
  if (Ke(e))
    return e;
  if (gu(e))
    return +e.replace("px", "");
  if (Ol(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Pl(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Tl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ze(e) ? A(e) : 0;
}, Se = (e) => {
  if (e != null)
    return yu(e) || Ol(e) || Pl(e) || Tl(e) || bu(e) || wu(e) ? e : De(e) + "px";
}, _e = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = Se(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function $n(e) {
  var n = $l();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function Su(e) {
  var n = $l();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Pt(e) {
  $n(() => {
    $n(e);
  });
}
function Vn() {
  return new Promise((e) => {
    $n(() => {
      $n(e);
    });
  });
}
function Cu() {
  return new Promise((e) => {
    $n(e);
  });
}
function Ga(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = Ot(e), s = Hi(e);
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
function Vl(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + du(a);
    return n[i] = t, n;
  }, {});
}
function ku() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var $u = ["collect", "clear"];
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
function Tu(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
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
function qe(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function Ou(e) {
  var n = nu(e), r = document.createElement("div");
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
      return () => wl(e, mt({}, n, r));
    }
  }, {
    unmount: t
  } = Ou(a);
  return {
    unmountInstance: t
  };
}
function Pu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      kt(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function pn(e) {
  var n = Ne([]), r = Da(), a = () => {
    var l = Pu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    $t(n, l);
  };
  yl(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = F(() => n.length);
  return {
    length: o
  };
}
function hn(e) {
  if (!Ml(e))
    return {
      index: null
    };
  var n = bl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Da();
  Ue(() => {
    Me().then(() => r(i));
  }), tr(() => {
    Me().then(() => a(i));
  });
  var o = F(() => t.indexOf(i));
  return {
    index: o
  };
}
function un(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    $t(n, i);
  }, t = (i) => {
    yl(e, mt({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function dn(e) {
  if (!Ml(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = bl(e), {
    collect: r,
    clear: a
  } = n, t = Tu(n, $u), i = (o) => {
    Ue(() => r(o)), Li(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function Ml(e) {
  var n = Da();
  return e in n.provides;
}
function gn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = po(function* (i, o, l) {
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
    var t = po(function* (i, o, l, s, u) {
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
function Vu(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), tr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Wi() {
  var e = M(!1);
  return Ai(() => {
    e.value = !1;
  }), zi(() => {
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
function O(e) {
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
  n: El
} = ee("ripple"), ho = 250;
function Mu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Eu(e, n) {
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
function Il(e) {
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
      } = Eu(this, e), s = document.createElement("div");
      s.classList.add(El()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Mu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function _t() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + El());
    if (!!r.length) {
      var a = r[r.length - 1], t = ho - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, ho);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Nl() {
  var e = this._ripple;
  !ku() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Iu(e, n) {
  var r, a, t;
  e._ripple = pt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: _t.bind(e)
  }), e.addEventListener("touchstart", Il, {
    passive: !0
  }), e.addEventListener("touchmove", Nl, {
    passive: !0
  }), e.addEventListener("dragstart", _t, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Nu(e) {
  e.removeEventListener("touchstart", Il), e.removeEventListener("touchmove", Nl), e.removeEventListener("dragstart", _t), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Bu(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : sn.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = pt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Fe = {
  mounted: Iu,
  unmounted: Nu,
  updated: Bu,
  install(e) {
    e.directive("ripple", this);
  }
};
function Du(e) {
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
    validator: Du
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
  onRouteChange: U()
};
function Bl() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function nt(e) {
  sn.locks[e] = 1, Bl();
}
function rt(e) {
  delete sn.locks[e], Bl();
}
function Vt(e, n) {
  var {
    uid: r
  } = Da();
  n && oe(n, (a) => {
    a === !1 ? rt(r) : a === !0 && e() === !0 && nt(r);
  }), oe(e, (a) => {
    n && n() === !1 || (a === !0 ? nt(r) : rt(r));
  }), ru(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), tr(() => {
    n && n() === !1 || e() === !0 && rt(r);
  }), Ai(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), zi(() => {
    n && n() === !1 || e() === !0 && rt(r);
  });
}
function _a(e, n) {
  var r = M(sn.zIndex);
  return oe(e, (a) => {
    a && (sn.zIndex += n, r.value = sn.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
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
function Au(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: In,
  classes: Wt
} = ee("popup");
const Cn = _({
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
      disabled: i
    } = Wi(), o = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      O(v), d && O(e["onUpdate:show"], !1);
    };
    Vt(() => e.show, () => e.lockScroll), oe(() => e.show, (d) => {
      O(d ? e.onOpen : e.onClose);
    }), Vu(() => O(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: Wt(In("overlay"), d),
        style: ei({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => re("div", Ve({
      class: Wt(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")]),
      style: {
        zIndex: t.value
      }
    }, a), [O(r.default)]), u = () => {
      var {
        onOpened: d,
        onClosed: v,
        show: f,
        overlay: c,
        transition: h,
        position: y
      } = e;
      return re(Ae, {
        name: In("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [ke(re("div", {
          class: Wt(In("$--box"), In()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(Ae, {
          name: h || In("$-pop-" + y)
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
          disabled: i.value
        }, Au(v = u()) ? v : {
          default: () => [v]
        });
      }
      return u();
    };
  }
});
Cn.install = function(e) {
  e.component(Cn.name, Cn);
};
var Dl = {
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
function go(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function zu(e) {
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
  n: Lu,
  classes: Ru
} = ee("icon");
function Uu(e, n) {
  return g(), pe(
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
const Oe = _({
  render: Uu,
  name: "VarIcon",
  props: Dl,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = zu(function* (i, o) {
        var {
          transition: l
        } = e;
        if (o == null || A(l) === 0) {
          n.value = i;
          return;
        }
        r.value = !0, yield Me(), setTimeout(() => {
          o != null && (n.value = i), r.value = !1;
        }, A(l));
      });
      return function(o, l) {
        return t.apply(this, arguments);
      };
    }();
    return oe(() => e.name, a, {
      immediate: !0
    }), {
      n: Lu,
      classes: Ru,
      nextName: n,
      shrinking: r,
      isURL: uu,
      toNumber: A,
      toSizeUnit: Se
    };
  }
});
Oe.install = function(e) {
  e.component(Oe.name, Oe);
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
var Yu = ni({
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
}, qe(xa, [
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
const Al = {
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
}, Fu = {
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
function zl() {
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
    e[i] = ri({}, e[i], o), a(i);
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
  packs: Hu,
  pack: We,
  add: Ll,
  use: Rl,
  merge: Wu
} = zl();
Ll("zh-CN", Al);
Rl("zh-CN");
const ai = {
  zhCN: Al,
  enUS: Fu,
  packs: Hu,
  pack: We,
  add: Ll,
  use: Rl,
  merge: Wu,
  useLocale: zl
};
var {
  n: ju,
  classes: Gu
} = ee("action-sheet"), qu = ["onClick"];
function Ku(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Xe("ripple");
  return g(), pe(
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
      default: ve(() => [B(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [H(e.$slots, "title", {}, () => [B(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), H(e.$slots, "actions", {}, () => [(g(!0), P(
          Pe,
          null,
          Be(e.actions, (i) => ke((g(), P(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (g(), pe(
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
            )) : x("v-if", !0), B(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(i.name),
              3
            )],
            14,
            qu
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
  render: Ku,
  name: "VarActionSheet",
  directives: {
    Ripple: Fe
  },
  components: {
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Yu,
  setup(e) {
    var n = M(!1), r = (t) => {
      if (!t.disabled) {
        var {
          closeOnClickAction: i,
          onSelect: o
        } = e;
        O(o, t), i && O(e["onUpdate:show"], !1);
      }
    }, a = (t) => O(e["onUpdate:show"], t);
    return oe(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: ju,
      classes: Gu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: We,
      dt: Tt,
      handleSelect: r
    };
  }
});
var Wn;
function br(e) {
  return Fi() ? new Promise((n) => {
    br.close();
    var r = Ne(e);
    r.teleport = "body", Wn = r;
    var {
      unmountInstance: a
    } = Ra(sr, r, {
      onSelect: (t) => {
        O(r.onSelect, t), n(t);
      },
      onClose: () => {
        O(r.onClose), n("close");
      },
      onClosed: () => {
        O(r.onClosed), a(), Wn === r && (Wn = null);
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
    Wn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
br.install = function(e) {
  e.component(sr.name, sr);
};
function Xu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Zu = {
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
    validator: Xu
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
  n: Ju,
  classes: Qu
} = ee("app-bar");
function xu(e, n) {
  return g(), P(
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
      [H(e.$slots, "left"), e.titlePosition === "left" ? (g(), P(
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
        )])],
        6
      )) : x("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [H(e.$slots, "default", {}, () => [he(
        ne(e.title),
        1
      )])],
      2
    )) : x("v-if", !0), B(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (g(), P(
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
        )])],
        6
      )) : x("v-if", !0), H(e.$slots, "right")],
      2
    )],
    6
  );
}
const Ar = _({
  render: xu,
  name: "VarAppBar",
  props: Zu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(i), Ri(i), {
      n: Ju,
      classes: Qu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function _u(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function ed(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var qn = {
  type: {
    type: String,
    default: "circle",
    validator: _u
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: ed
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
  n: nd,
  classes: rd
} = ee("loading"), ad = (e) => ($r(""), e = e(), Tr(), e), td = /* @__PURE__ */ ad(() => /* @__PURE__ */ B(
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
)), id = [td];
function od(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [H(e.$slots, "default"), e.loading ? (g(), P(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : x("v-if", !0)],
      2
    )) : x("v-if", !0), e.isShow ? (g(), P(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (g(), P(
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
          id,
          6
        )],
        2
      )) : x("v-if", !0), (g(!0), P(
        Pe,
        null,
        Be(e.loadingTypeDict, (r, a) => (g(), P(
          Pe,
          {
            key: a
          },
          [e.type === a ? (g(), P(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(g(!0), P(
              Pe,
              null,
              Be(r, (t) => (g(), P(
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
          )) : x("v-if", !0)],
          64
        ))),
        128
      )), e.$slots.description || e.description ? (g(), P(
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
        )])],
        6
      )) : x("v-if", !0)],
      2
    )) : x("v-if", !0)],
    2
  );
}
const On = _({
  render: od,
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
    }, t = F(() => O(r.default) ? e.loading : !0);
    return {
      n: nd,
      classes: rd,
      multiplySizeUnit: _e,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
On.install = function(e) {
  e.component(On.name, On);
};
function ti() {
  return ti = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ti.apply(this, arguments);
}
function ld(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function sd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ud = {
  type: {
    type: String,
    default: "default",
    validator: ld
  },
  size: {
    type: String,
    default: "normal",
    validator: sd
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
  loadingType: qe(qn, "type"),
  loadingSize: qe(qn, "size"),
  loadingColor: ti({}, qe(qn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: dd,
  classes: vd
} = ee("button"), fd = ["disabled"];
function cd(e, n) {
  var r = le("var-loading"), a = Xe("ripple");
  return ke((g(), P(
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
    [e.loading || e.pending ? (g(), pe(
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
    )) : x("v-if", !0), B(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [H(e.$slots, "default")],
      2
    )],
    46,
    fd
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const an = _({
  render: cd,
  name: "VarButton",
  components: {
    VarLoading: On
  },
  directives: {
    Ripple: Fe
  },
  props: ud,
  setup(e) {
    var n = M(!1), r = (i) => {
      e.autoLoading && (n.value = !0, i = be(i) ? i : [i], Promise.all(i).then(() => {
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
      !s || o || l || n.value || r(O(s, i));
    }, t = (i) => {
      var {
        loading: o,
        disabled: l,
        onTouchstart: s
      } = e;
      !s || o || l || n.value || r(O(s, i));
    };
    return {
      n: dd,
      classes: vd,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
an.install = function(e) {
  e.component(an.name, an);
};
var md = {
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
  n: pd,
  classes: hd
} = ee("back-top");
function gd(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return g(), pe(
    Aa,
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
        onClick: n[0] || (n[0] = Pn(function() {
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
      })])],
      16
    )],
    8,
    ["disabled"]
  );
}
const zr = _({
  render: gd,
  name: "VarBackTop",
  components: {
    VarButton: an,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: md,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, i = (u) => {
      O(e.onClick, u);
      var d = Hi(t);
      Ga(t, {
        left: d,
        duration: e.duration,
        animation: kl
      });
    }, o = () => {
      n.value = Ot(t) >= De(e.visibilityHeight);
    }, l = Yi(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (Ze(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (su(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Ue(() => {
      t = e.target ? s() : Or(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), Li(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: Se,
      n: pd,
      classes: hd,
      click: i
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
function yd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function bd(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var wd = {
  type: {
    type: String,
    default: "default",
    validator: yd
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
    validator: bd
  },
  icon: {
    type: String
  }
}, {
  n: Ln,
  classes: Sd
} = ee("badge"), Cd = {
  key: 1
};
function kd(e, n) {
  var r = le("var-icon");
  return g(), P(
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
        default: ve(() => [ke(B(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (g(), pe(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (g(), P(
            "span",
            Cd,
            ne(e.values),
            1
          ))],
          16
        ), [[za, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), H(e.$slots, "default")],
    2
  );
}
const ur = _({
  render: kd,
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: wd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = F(() => {
      var {
        type: o,
        position: l,
        dot: s,
        icon: u
      } = e, d = r.default && Ln("position") + " " + Ln("--" + l), v = s ? Ln("dot") : null, f = i(), c = u ? Ln("icon") : null;
      return [Ln("--" + o), d, v, f, c];
    }), t = F(() => {
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
        return Ln("dot--right");
      if (l && o.includes("left"))
        return Ln("dot--left");
    };
    return {
      n: Ln,
      classes: Sd,
      values: t,
      contentClass: a
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
var $d = {
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
}, Ul = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Yl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Td() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Ul), {
    length: r
  } = pn(Yl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
function ii() {
  return ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, ii.apply(this, arguments);
}
var {
  n: Od,
  classes: Pd
} = ee("bottom-navigation"), {
  n: Mt
} = ee("bottom-navigation-item"), yo = Mt("--right-half-space"), bo = Mt("--left-half-space"), wo = Mt("--right-space"), Vd = {
  type: "primary"
};
function Md(e, n) {
  var r = le("var-button");
  return g(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [H(e.$slots, "default"), e.$slots.fab ? (g(), pe(
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
      },
      16,
      ["class", "onClick"]
    )) : x("v-if", !0)],
    6
  );
}
const Lr = _({
  render: Md,
  name: "VarBottomNavigation",
  components: {
    VarButton: an
  },
  props: $d,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = F(() => e.active), i = F(() => e.activeColor), o = F(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Td(), v = () => {
      s.value === 0 || f() || c() || h();
    }, f = () => u.find((V) => {
      var {
        name: z
      } = V;
      return t.value === z.value;
    }), c = () => u.find((V) => {
      var {
        index: z
      } = V;
      return t.value === z.value;
    }), h = () => {
      !Ke(t.value) || (t.value < 0 ? O(e["onUpdate:active"], 0) : t.value > s.value - 1 && O(e["onUpdate:active"], s.value - 1));
    }, y = (V) => {
      t.value !== V && (e.onBeforeChange ? S(V) : T(V));
    }, S = (V) => {
      var z = O(e.onBeforeChange, V);
      z = be(z) ? z : [z], Promise.all(z).then((I) => {
        I.some((p) => !p) || T(V);
      });
    }, T = (V) => {
      O(e["onUpdate:active"], V), O(e.onChange, V);
    }, $ = () => {
      var V = E();
      V.forEach((z) => {
        z.classList.remove(yo, bo, wo);
      });
    }, b = (V) => {
      var z = E(), I = z.length, p = V % 2 === 0;
      z.forEach((k, L) => {
        C(p, k, L, I);
      });
    }, C = (V, z, I, p) => {
      var k = I === p - 1;
      if (!V && k) {
        z.classList.add(wo);
        return;
      }
      var L = I === p / 2 - 1, Y = I === p / 2;
      L ? z.classList.add(yo) : Y && z.classList.add(bo);
    }, E = () => Array.from(a.value.querySelectorAll("." + Mt())), w = () => {
      O(e.onFabClick);
    }, D = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: y
    };
    return d(D), oe(() => s.value, v), oe(() => e.fabProps, (V) => {
      l.value = ii({}, Vd, V);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      !r.fab || b(s.value);
    }), Ri(() => {
      $(), r.fab && b(s.value);
    }), {
      n: Od,
      classes: Pd,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: w,
      fabProps: l
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var Ed = {
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
function Id() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ul), {
    index: r
  } = hn(Yl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Nd,
  classes: Bd
} = ee("bottom-navigation-item"), Dd = {
  type: "danger",
  dot: !0
};
function Ad(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = Xe("ripple");
  return ke((g(), P(
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
    [e.icon && !e.$slots.icon ? (g(), pe(
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
    }), e.badge ? (g(), pe(
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
    )) : x("v-if", !0), B(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (g(), P(
        Pe,
        {
          key: 0
        },
        [he(
          ne(e.label),
          1
        )],
        2112
      )), H(e.$slots, "default")],
      2
    )],
    6
  )), [[t]]);
}
const Rr = _({
  render: Ad,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ur,
    VarIcon: Oe
  },
  directives: {
    Ripple: Fe
  },
  props: Ed,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = Id(), {
      active: l,
      activeColor: s,
      inactiveColor: u
    } = i, d = {
      name: n,
      index: t
    }, v = () => l.value === n.value || l.value === t.value ? s.value : u.value, f = () => {
      var c, h = (c = n.value) != null ? c : t.value;
      O(e.onClick, h), O(i.onToggle, h);
    };
    return o(d), oe(() => r.value, (c) => {
      a.value = c === !0 ? Dd : r.value;
    }, {
      immediate: !0
    }), {
      n: Nd,
      classes: Bd,
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
var zd = {
  separator: {
    type: String
  },
  onClick: U()
}, Fl = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), Hl = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Ld() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Fl), {
    length: r
  } = pn(Hl);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Rd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Fl), {
    index: r
  } = hn(Hl);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Ud,
  classes: Yd
} = ee("breadcrumb");
function Fd(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n("content"), [!e.isLast, e.n("--active")])),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      },
      [H(e.$slots, "default")],
      2
    ), e.isLast ? x("v-if", !0) : H(e.$slots, "separator", {
      key: 0
    }, () => {
      var r;
      return [B(
        "div",
        {
          class: m(e.n("separator"))
        },
        ne((r = e.separator) != null ? r : e.parentSeparator),
        3
      )];
    })],
    2
  );
}
const Ur = _({
  render: Fd,
  name: "VarBreadcrumb",
  props: zd,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Rd(), t = F(() => n.value === r.length.value - 1), i = F(() => r.separator.value), o = (l) => {
      t.value || O(e.onClick, l);
    };
    return a(null), {
      n: Ud,
      classes: Yd,
      isLast: t,
      parentSeparator: i,
      handleClick: o
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var Hd = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Wd
} = ee("breadcrumbs");
function jd(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
  );
}
const Yr = _({
  render: jd,
  name: "VarBreadcrumbs",
  props: Hd,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Ld(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Wd
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
function Gd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var qd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Gd,
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
function So(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Co(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        So(i, a, t, o, l, "next", s);
      }
      function l(s) {
        So(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Kd,
  classes: Xd
} = ee("card"), Zd = 500, Jd = ["src", "alt"];
function Qd(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = Xe("ripple");
  return ke((g(), P(
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
      [H(e.$slots, "image", {}, () => [e.src ? (g(), P(
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
        Jd
      )) : x("v-if", !0)]), B(
        "div",
        {
          class: m(e.n("container"))
        },
        [H(e.$slots, "title", {}, () => [e.title ? (g(), P(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
        )) : x("v-if", !0)]), H(e.$slots, "subtitle", {}, () => [e.subtitle ? (g(), P(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
        )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (g(), P(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
        )) : x("v-if", !0)]), e.$slots.extra ? (g(), P(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [H(e.$slots, "extra")],
          2
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (g(), P(
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
        )) : x("v-if", !0)],
        2
      ), e.showFloatingButtons ? (g(), P(
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
            onClick: Pn(e.close, ["stop"])
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
          },
          8,
          ["class", "onClick"]
        )])],
        6
      )) : x("v-if", !0)],
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
const Fr = _({
  render: Qd,
  name: "VarCard",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarButton: an
  },
  props: qd,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), i = M("100%"), o = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), c = F(() => e.layout === "row"), h = M(!1), y = M(!1), {
      zIndex: S
    } = _a(() => e.floating, 1);
    Vt(() => e.floating, () => !c.value);
    var T = "auto", $ = "auto", b = null, C = M(null), E = /* @__PURE__ */ function() {
      var V = Co(function* () {
        clearTimeout(C.value), clearTimeout(b), C.value = null, C.value = setTimeout(/* @__PURE__ */ Co(function* () {
          var {
            width: z,
            height: I,
            left: p,
            top: k
          } = n.value.getBoundingClientRect();
          a.value = Se(z), t.value = Se(I), i.value = a.value, o.value = t.value, l.value = Se(k), s.value = Se(p), u.value = "fixed", T = l.value, $ = s.value, h.value = !0, yield Vn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", y.value = !0;
        }), e.ripple ? Zd : 0);
      });
      return function() {
        return V.apply(this, arguments);
      };
    }(), w = () => {
      clearTimeout(b), clearTimeout(C.value), C.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = $, v.value = "0px", f.value = "0", h.value = !1, b = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", $ = "auto", d.value = "hidden", u.value = void 0, y.value = !1;
      }, e.floatingDuration);
    }, D = () => {
      O(e["onUpdate:floating"], !1);
    };
    return oe(() => e.floating, (V) => {
      c.value || Me(() => {
        V ? E() : w();
      });
    }, {
      immediate: !0
    }), {
      n: Kd,
      classes: Xd,
      toSizeUnit: Se,
      card: n,
      cardFloater: r,
      holderWidth: a,
      holderHeight: t,
      floater: C,
      floaterWidth: i,
      floaterHeight: o,
      floaterTop: l,
      floaterLeft: s,
      floaterPosition: u,
      floaterOverflow: d,
      contentHeight: v,
      opacity: f,
      zIndex: S,
      isRow: c,
      close: D,
      showFloatingButtons: h,
      floated: y
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var xd = {
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
  n: _d,
  classes: ev
} = ee("cell");
function nv(e, n) {
  var r = le("var-icon");
  return g(), P(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (g(), P(
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
    )) : x("v-if", !0), B(
      "div",
      {
        class: m(e.n("content"))
      },
      [B(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (g(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("description"), [e.descriptionClass, e.descriptionClass]))
        },
        [H(e.$slots, "description", {}, () => [he(
          ne(e.description),
          1
        )])],
        2
      )) : x("v-if", !0)],
      2
    ), e.$slots.extra ? (g(), P(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("extra"), [e.extraClass, e.extraClass]))
      },
      [H(e.$slots, "extra")],
      2
    )) : x("v-if", !0)],
    2
  );
}
const dr = _({
  render: nv,
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  props: xd,
  setup() {
    return {
      n: _d,
      classes: ev
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var rv = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: av
} = ee("form-details"), tv = {
  key: 0
}, iv = {
  key: 0
};
function ov(e, n) {
  return g(), pe(
    Ae,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (g(), P(
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
          [re(
            Ae,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.errorMessage ? (g(), P(
                "div",
                tv,
                ne(e.errorMessage),
                1
              )) : x("v-if", !0)]),
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
          [re(
            Ae,
            {
              name: e.n("message")
            },
            {
              default: ve(() => [e.extraMessage ? (g(), P(
                "div",
                iv,
                ne(e.extraMessage),
                1
              )) : x("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        )],
        2
      )) : x("v-if", !0)]),
      _: 1
    },
    8,
    ["name"]
  );
}
const Ge = _({
  render: ov,
  name: "VarFormDetails",
  props: rv,
  setup: () => ({
    n: av
  })
});
Ge.install = function(e) {
  e.component(Ge.name, Ge);
};
var lv = {
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
}, Wl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), jl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function sv() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Wl), {
    length: r
  } = pn(jl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function uv() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Wl), {
    index: r
  } = hn(jl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
function oi() {
  return oi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, oi.apply(this, arguments);
}
var Gl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function yn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Gl), r = Da(), a = e ? (t) => {
    e(oi({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function dv() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Gl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: vv,
  classes: fv
} = ee("checkbox");
function cv(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return g(), P(
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
      [ke((g(), P(
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
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), B(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [H(e.$slots, "default")],
        2
      )],
      2
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
  );
}
const vr = _({
  render: cv,
  name: "VarCheckbox",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  props: lv,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = M(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = uv(), {
      form: l,
      bindForm: s
    } = yn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = gn(), c = (w) => {
      Me(() => {
        var {
          validateTrigger: D,
          rules: V,
          modelValue: z
        } = e;
        d(D, w, V, z);
      });
    }, h = (w) => {
      n.value = w;
      var {
        checkedValue: D,
        onChange: V
      } = e;
      O(e["onUpdate:modelValue"], n.value), O(V, n.value), c("onChange"), w === D ? i == null || i.onChecked(D) : i == null || i.onUnchecked(D);
    }, y = (w) => {
      var {
        disabled: D,
        readonly: V,
        checkedValue: z,
        uncheckedValue: I,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || D) && (O(p, w), !(l != null && l.readonly.value || V))) {
        t.value = !0;
        var k = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && k || h(r.value ? I : z);
      }
    }, S = (w) => {
      var {
        checkedValue: D,
        uncheckedValue: V
      } = e;
      n.value = w.includes(D) ? D : V;
    }, T = () => {
      t.value = !1;
    }, $ = () => {
      O(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, b = (w) => {
      var {
        checkedValue: D,
        uncheckedValue: V
      } = e, z = ![D, V].includes(w);
      z && (w = r.value ? V : D), h(w);
    }, C = () => v(e.rules, e.modelValue);
    oe(() => e.modelValue, (w) => {
      n.value = w;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: r,
      sync: S,
      validate: C,
      resetValidation: f,
      reset: $,
      resetWithAnimation: T
    };
    return O(o, E), O(s, E), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: vv,
      classes: fv,
      handleClick: y,
      toggle: b,
      reset: $,
      validate: C,
      resetValidation: f
    };
  }
});
vr.install = function(e) {
  e.component(vr.name, vr);
};
function mv(e) {
  return ["horizontal", "vertical"].includes(e);
}
var pv = {
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
    validator: mv
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
  n: hv,
  classes: gv
} = ee("checkbox-group");
function yv(e, n) {
  var r = le("var-form-details");
  return g(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [H(e.$slots, "default")],
      2
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
  );
}
const Hr = _({
  render: yv,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Ge
  },
  props: pv,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = sv(), {
      bindForm: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = F(() => l.value), f = (D) => {
      Me(() => {
        var {
          validateTrigger: V,
          rules: z,
          modelValue: I
        } = e;
        s(V, D, z, I);
      });
    }, c = (D) => {
      O(e["onUpdate:modelValue"], D), O(e.onChange, D), f("onChange");
    }, h = (D) => {
      var {
        modelValue: V
      } = e;
      V.includes(D) || c([...V, D]);
    }, y = (D) => {
      var {
        modelValue: V
      } = e;
      !V.includes(D) || c(V.filter((z) => z !== D));
    }, S = () => t.forEach((D) => {
      var {
        sync: V
      } = D;
      return V(e.modelValue);
    }), T = () => {
      t.forEach((D) => D.resetWithAnimation());
    }, $ = () => {
      var D = t.map((z) => {
        var {
          checkedValue: I
        } = z;
        return I.value;
      }), V = lo(D);
      return T(), O(e["onUpdate:modelValue"], V), V;
    }, b = () => {
      var D = t.filter((z) => {
        var {
          checked: I
        } = z;
        return !I.value;
      }).map((z) => {
        var {
          checkedValue: I
        } = z;
        return I.value;
      }), V = lo(D);
      return T(), O(e["onUpdate:modelValue"], V), V;
    }, C = () => {
      O(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    oe(() => e.modelValue, S, {
      deep: !0
    }), oe(() => a.value, S);
    var w = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: y,
      validate: E,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return i(w), O(o, w), {
      errorMessage: l,
      n: hv,
      classes: gv,
      checkAll: $,
      inverseAll: b,
      reset: C,
      validate: E,
      resetValidation: d
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
function bv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function wv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var Sv = {
  type: {
    type: String,
    default: "default",
    validator: bv
  },
  size: {
    type: String,
    default: "normal",
    validator: wv
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: qe(Dl, "name"),
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
  n: Rn,
  classes: Cv
} = ee("chip");
function kv(e, n) {
  var r = le("var-icon");
  return g(), pe(
    Ae,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [B(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [H(e.$slots, "left"), B(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [H(e.$slots, "default")],
          2
        ), H(e.$slots, "right"), e.closable ? (g(), P(
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
        )) : x("v-if", !0)],
        16
      )]),
      _: 3
    },
    8,
    ["name"]
  );
}
const fr = _({
  render: kv,
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Sv,
  setup(e) {
    var n = F(() => {
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
    }), r = F(() => {
      var {
        size: a,
        block: t,
        type: i,
        plain: o,
        round: l
      } = e, s = Rn(t ? "$--flex" : "$--inline-flex"), u = o ? Rn("plain") + " " + Rn("plain-" + i) : Rn("--" + i), d = l ? Rn("--round") : null;
      return [Rn("--" + a), s, u, d];
    });
    return {
      n: Rn,
      classes: Cv,
      chipStyles: n,
      contentClass: r
    };
  }
});
fr.install = function(e) {
  e.component(fr.name, fr);
};
function $v(e) {
  return ["row", "column"].includes(e);
}
var Tv = {
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
    validator: $v
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
}, ql = Symbol("ROW_BIND_COL_KEY"), Kl = Symbol("ROW_COUNT_COL_KEY");
function Ov() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(ql), {
    length: r
  } = pn(Kl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Pv() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(ql), {
    index: r
  } = hn(Kl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: at,
  classes: Vv
} = ee("col");
function Mv(e, n) {
  return g(), P(
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
  );
}
const Wr = _({
  render: Mv,
  name: "VarCol",
  props: Tv,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = F(() => A(e.span)), a = F(() => A(e.offset)), {
      row: t,
      bindRow: i
    } = Pv(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Ui(u)) {
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
    }), O(i, o), {
      n: at,
      classes: Vv,
      padding: n,
      toNumber: A,
      toSizeUnit: Se,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var Xl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Zl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Ev() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Xl), {
    length: r
  } = pn(Zl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Iv = {
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
  n: Nv
} = ee("collapse");
function Bv(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
  );
}
const jr = _({
  render: Bv,
  name: "VarCollapse",
  props: Iv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Ev(), t = F(() => e.modelValue), i = F(() => e.offset), o = () => !e.accordion && !be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, h) => o() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((y) => y !== c) : null, s = (c, h) => {
      var y = l(c, h);
      O(e["onUpdate:modelValue"], y), O(e.onChange, y);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: y
          } = h;
          return e.modelValue === y.value;
        });
      var c = r.filter((h) => {
        var {
          name: y
        } = h;
        return y.value === void 0 ? !1 : e.modelValue.includes(y.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: h,
        name: y
      } = c;
      return y.value === void 0 ? e.modelValue === h.value : !1;
    }) : r.filter((c) => {
      var {
        index: h,
        name: y
      } = c;
      return y.value === void 0 ? e.modelValue.includes(h.value) : !1;
    }), v = () => {
      if (!!o()) {
        var c = u() || d();
        if (e.accordion && !c || !e.accordion && !c.length) {
          r.forEach((h) => {
            h.init(e.accordion, !1);
          });
          return;
        }
        r.forEach((h) => {
          var y = e.accordion ? c === h : c.includes(h);
          h.init(e.accordion, y);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), oe(() => n.value, () => Me().then(v)), oe(() => e.modelValue, () => Me().then(v)), {
      n: Nv
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
function Dv() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Xl), {
    index: r
  } = hn(Zl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Av = {
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
  n: zv,
  classes: Lv
} = ee("collapse-item");
function Rv(e, n) {
  var r = le("var-icon");
  return g(), P(
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
        [H(e.$slots, "title", {}, () => [he(
          ne(e.title),
          1
        )])],
        2
      ), B(
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
        [H(e.$slots, "default")],
        2
      )],
      34
    ), [[za, e.show]])],
    2
  );
}
const Gr = _({
  render: Rv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: Av,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Dv(), t = !0, i = M(null), o = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (b, C) => {
      s.value === void 0 || b && be(s.value) || C === l.value || (l.value = C, c(!0));
    }, c = (b) => {
      e.disabled || b || d(e.name || n.value, !l.value);
    }, h = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Me(() => {
        var {
          offsetHeight: b
        } = i.value;
        i.value.style.height = 0 + "px", $n(() => {
          i.value.style.height = b + "px", t && Pt(() => {
            t && T();
          });
        });
      }));
    }, y = () => {
      t = !1;
    }, S = () => {
      if (!!i.value) {
        var {
          offsetHeight: b
        } = i.value;
        i.value.style.height = b + "px", $n(() => {
          i.value.style.height = 0 + "px";
        });
      }
    }, T = () => {
      l.value || (o.value = !1), i.value.style.height = "";
    }, $ = {
      index: n,
      name: v,
      init: f
    };
    return a($), oe(l, (b) => {
      b ? h() : S();
    }), {
      n: zv,
      start: y,
      classes: Lv,
      show: o,
      isShow: l,
      offset: u,
      toggle: c,
      contentEl: i,
      transitionend: T
    };
  }
});
Gr.install = function(e) {
  e.component(Gr.name, Gr);
};
var Uv = {
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
  n: Yv
} = ee("countdown"), li = 1e3, si = 60 * li, ui = 60 * si, ko = 24 * ui;
function Fv(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default", Sl(au(e.timeData)), () => [he(
      ne(e.showTime),
      1
    )])],
    2
  );
}
const qr = _({
  render: Fv,
  name: "VarCountdown",
  props: Uv,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), i = M(0), o = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, h) => {
      var y = Object.values(h), S = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (S.forEach((b, C) => {
        c.includes(b) ? c = c.replace(b, yr("" + y[C], 2, "0")) : y[C + 1] += y[C] * T[C];
      }), c.includes("S")) {
        var $ = yr("" + y[y.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", $) : c.includes("SS") ? c = c.replace("SS", $.slice(0, 2)) : c = c.replace("S", $.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / ko), y = Math.floor(c % ko / ui), S = Math.floor(c % ui / si), T = Math.floor(c % si / li), $ = Math.floor(c % li), b = {
        days: h,
        hours: y,
        minutes: S,
        seconds: T,
        milliseconds: $
      };
      o.value = b, O(e.onChange, o.value), a.value = l(e.format, b);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: y
      } = e, S = Date.now();
      n.value || (n.value = S + A(c));
      var T = n.value - S;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        O(h);
        return;
      }
      (y || r.value) && (t.value = $n(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || A(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, Su(t.value), u();
    };
    return oe(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: Yv,
      start: d,
      pause: v,
      reset: f
    };
  }
});
qr.install = function(e) {
  e.component(qr.name, qr);
};
/*!
 *  decimal.js v10.4.0
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */
var Mr = 9e15, ir = 1e9, di = "0123456789abcdef", ht = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", gt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", vi = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Mr,
  maxE: Mr,
  crypto: !1
}, Jl, Bn, fe = !0, Et = "[DecimalError] ", nr = Et + "Invalid argument: ", Ql = Et + "Precision limit exceeded", xl = Et + "crypto unavailable", _l = "[object Decimal]", Je = Math.floor, Re = Math.pow, Hv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Wv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, jv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, es = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, kn = 1e7, de = 7, Gv = 9007199254740991, qv = ht.length - 1, fi = gt.length - 1, q = { toStringTag: _l };
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
    throw Error(nr + n);
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Kv(a, is(a, r)), a.precision = e, a.rounding = n, ue(Bn == 2 || Bn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
q.cubeRoot = q.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, i = d.s * Re(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = je(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = Re(r, 1 / 3), e = Je((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
    if (l = a, s = l.times(l).times(l), u = s.plus(d), a = Te(u.plus(d).times(l), u.plus(s), o + 2, 1), je(l.d).slice(0, o) === (r = je(a.d)).slice(0, o))
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
  return Te(this, new this.constructor(e));
};
q.dividedToIntegerBy = q.divToInt = function(e) {
  var n = this, r = n.constructor;
  return ue(Te(n, new r(e), 0, 1, 1), r.precision, r.rounding);
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
  var e, n, r, a, t, i = this, o = i.constructor, l = new o(1);
  if (!i.isFinite())
    return new o(i.s ? 1 / 0 : NaN);
  if (i.isZero())
    return l;
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Nt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Va(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return ue(i, o.precision = r, o.rounding = a, !0);
};
q.hyperbolicSine = q.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = Va(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Nt(5, e)), t = Va(i, 2, t, t, !0);
    for (var o, l = new i(5), s = new i(16), u = new i(20); e--; )
      o = t.times(t), t = t.times(l.plus(o.times(s.times(o).plus(u))));
  }
  return i.precision = n, i.rounding = r, ue(t, n, r, !0);
};
q.hyperbolicTangent = q.tanh = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 7, a.rounding = 1, Te(r.sinh(), r.cosh(), a.precision = e, a.rounding = n)) : new a(r.s);
};
q.inverseCosine = q.acos = function() {
  var e, n = this, r = n.constructor, a = n.abs().cmp(1), t = r.precision, i = r.rounding;
  return a !== -1 ? a === 0 ? n.isNeg() ? Sn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? Sn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Sn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
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
  var e, n, r, a, t = this, i = t.constructor;
  return t.isFinite() ? t.e >= 0 ? new i(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN) : (e = i.precision, n = i.rounding, a = t.sd(), Math.max(a, e) < 2 * -t.e - 1 ? ue(new i(t), e, n, !0) : (i.precision = r = a - t.e, t = Te(t.plus(1), new i(1).minus(t), r + e, 1), i.precision = e + 4, i.rounding = 1, t = t.ln(), i.precision = e, i.rounding = n, t.times(0.5))) : new i(NaN);
};
q.inverseSine = q.asin = function() {
  var e, n, r, a, t = this, i = t.constructor;
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = Sn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
q.inverseTangent = q.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= fi)
      return o = Sn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= fi)
      return o = Sn(d, v + 4, f).times(0.5), o.s = u.s, o;
  }
  for (d.precision = l = v + 10, d.rounding = 1, r = Math.min(28, l / de + 2 | 0), e = r; e; --e)
    u = u.div(u.times(u).plus(1).sqrt().plus(1));
  for (fe = !1, n = Math.ceil(l / de), a = 1, s = u.times(u), o = new d(u), t = u; e !== -1; )
    if (t = t.times(s), i = o.minus(t.div(a += 2)), t = t.times(s), o = i.plus(t.div(a += 2)), o.d[n] !== void 0)
      for (e = n; o.d[e] === i.d[e] && e--; )
        ;
  return r && (o = o.times(2 << r - 1)), fe = !0, ue(o, d.precision = v, d.rounding = f, !0);
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
  if (fe = !1, l = v + c, o = Kn(u, l), a = n ? yt(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), qa(s.d, t = v, f))
    do
      if (l += 10, o = Kn(u, l), a = n ? yt(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), !i) {
        +je(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (qa(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
q.minus = q.sub = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, h = c.constructor;
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
  if (r = Je(e.e / de), d = Je(c.e / de), u = u.slice(), i = d - r, i) {
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
        u[t] = kn - 1;
      --u[t], u[a] += kn;
    }
    u[a] -= f[a];
  }
  for (; u[--o] === 0; )
    u.pop();
  for (; u[0] === 0; u.shift())
    --r;
  return u[0] ? (e.d = u, e.e = It(u, r), fe ? ue(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Te(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Te(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return ci(this);
};
q.naturalLogarithm = q.ln = function() {
  return Kn(this);
};
q.negated = q.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, ue(e);
};
q.plus = q.add = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v = this, f = v.constructor;
  if (e = new f(e), !v.d || !e.d)
    return !v.s || !e.s ? e = new f(NaN) : v.d || (e = new f(e.d || v.s === e.s ? v : NaN)), e;
  if (v.s != e.s)
    return e.s = -e.s, v.minus(e);
  if (u = v.d, d = e.d, l = f.precision, s = f.rounding, !u[0] || !d[0])
    return d[0] || (e = new f(v)), fe ? ue(e, l, s) : e;
  if (i = Je(v.e / de), a = Je(e.e / de), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / de), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / kn | 0, u[t] %= kn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = It(u, a), fe ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(nr + e);
  return r.d ? (n = ns(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Zv(a, is(a, r)), a.precision = e, a.rounding = n, ue(Bn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.squareRoot = q.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (fe = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = je(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Je((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
    if (i = a, a = i.plus(Te(o, i, r + 2, 1)).times(0.5), je(i.d).slice(0, r) === (n = je(a.d)).slice(0, r))
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
q.tangent = q.tan = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + 10, a.rounding = 1, r = r.sin(), r.s = 1, r = Te(r, new a(1).minus(r.times(r)).sqrt(), e + 10, 0), a.precision = e, a.rounding = n, ue(Bn == 2 || Bn == 4 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
q.times = q.mul = function(e) {
  var n, r, a, t, i, o, l, s, u, d = this, v = d.constructor, f = d.d, c = (e = new v(e)).d;
  if (e.s *= d.s, !f || !f[0] || !c || !c[0])
    return new v(!e.s || f && !f[0] && !c || c && !c[0] && !f ? NaN : !f || !c ? e.s / 0 : e.s * 0);
  for (r = Je(d.e / de) + Je(e.e / de), s = f.length, u = c.length, s < u && (i = f, f = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * f[t - a - 1] + n, i[t--] = l % kn | 0, n = l / kn | 0;
    i[t] = (i[t] + n) % kn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = It(i, r), fe ? ue(e, v.precision, v.rounding) : e;
};
q.toBinary = function(e, n) {
  return ji(this, 2, e, n);
};
q.toDecimalPlaces = q.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (tn(e, 0, ir), n === void 0 ? n = a.rounding : tn(n, 0, 8), ue(r, e + r.e + 1, n));
};
q.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, !0) : (tn(e, 0, ir), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e + 1, n), r = Mn(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = Mn(t) : (tn(e, 0, ir), n === void 0 ? n = i.rounding : tn(n, 0, 8), a = ue(new i(t), e + t.e + 1, n), r = Mn(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
q.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, h = c.d, y = c.constructor;
  if (!h)
    return new y(c);
  if (u = r = new y(1), a = s = new y(0), n = new y(a), i = n.e = ns(h) - c.e - 1, o = i % de, n.d[0] = Re(10, o < 0 ? de + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new y(e), !l.isInt() || l.lt(u))
      throw Error(nr + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (fe = !1, l = new y(je(h)), d = y.precision, y.precision = i = h.length * de * 2; v = Te(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Te(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Te(u, a, i, 1).minus(c).abs().cmp(Te(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], y.precision = d, fe = !0, f;
};
q.toHexadecimal = q.toHex = function(e, n) {
  return ji(this, 16, e, n);
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
  return e.d[0] ? (fe = !1, r = Te(r, e, 0, n, 1).times(e), fe = !0, ue(r)) : (e.s = r.s, r = e), r;
};
q.toNumber = function() {
  return +this;
};
q.toOctal = function(e, n) {
  return ji(this, 8, e, n);
};
q.toPower = q.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Re(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return ue(l, a, i);
  if (n = Je(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Gv)
    return t = rs(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = Re(+l, u), n = r == 0 || !isFinite(r) ? Je(u * (Math.log("0." + je(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = ci(e.times(Kn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), qa(t.d, a, i) && (n = a + 10, t = ue(ci(e.times(Kn(l, n + r)), n), n + 5, 1), +je(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = o, fe = !0, s.rounding = i, ue(t, a, i));
};
q.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = Mn(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (tn(e, 1, ir), n === void 0 ? n = t.rounding : tn(n, 0, 8), a = ue(new t(a), e, n), r = Mn(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
q.toSignificantDigits = q.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (tn(e, 1, ir), n === void 0 ? n = a.rounding : tn(n, 0, 8)), ue(new a(r), e, n);
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
function je(e) {
  var n, r, a, t = e.length - 1, i = "", o = e[0];
  if (t > 0) {
    for (i += o, n = 1; n < t; n++)
      a = e[n] + "", r = de - a.length, r && (i += Yn(r)), i += a;
    o = e[n], a = o + "", r = de - a.length, r && (i += Yn(r));
  } else if (o === 0)
    return "0";
  for (; o % 10 === 0; )
    o /= 10;
  return i + o;
}
function tn(e, n, r) {
  if (e !== ~~e || e < n || e > r)
    throw Error(nr + e);
}
function qa(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), i = Re(10, de - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == Re(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == Re(10, n - 3) - 1, o;
}
function ut(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += di.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Kv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Nt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Va(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, h, y, S, T, $, b, C, E, w, D, V, z, I, p, k, L = a.constructor, Y = a.s == t.s ? 1 : -1, G = a.d, R = t.d;
    if (!G || !G[0] || !R || !R[0])
      return new L(
        !a.s || !t.s || (G ? R && G[0] == R[0] : !R) ? NaN : G && G[0] == 0 || !R ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = kn, c = de, d = Je(a.e / c) - Je(t.e / c)), p = R.length, z = G.length, T = new L(Y), $ = T.d = [], v = 0; R[v] == (G[v] || 0); v++)
      ;
    if (R[v] > (G[v] || 0) && d--, i == null ? (w = i = L.precision, o = L.rounding) : l ? w = i + (a.e - t.e) + 1 : w = i, w < 0)
      $.push(1), h = !0;
    else {
      if (w = w / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], w++; (v < z || f) && w--; v++)
          D = f * s + (G[v] || 0), $[v] = D / R | 0, f = D % R | 0;
        h = f || v < z;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), G = e(G, f, s), p = R.length, z = G.length), V = p, b = G.slice(0, p), C = b.length; C < p; )
          b[C++] = 0;
        k = R.slice(), k.unshift(0), I = R[0], R[1] >= s / 2 && ++I;
        do
          f = 0, u = n(R, b, p, C), u < 0 ? (E = b[0], p != C && (E = E * s + (b[1] || 0)), f = E / I | 0, f > 1 ? (f >= s && (f = s - 1), y = e(R, f, s), S = y.length, C = b.length, u = n(y, b, S, C), u == 1 && (f--, r(y, p < S ? k : R, S, s))) : (f == 0 && (u = f = 1), y = R.slice()), S = y.length, S < C && y.unshift(0), r(b, y, C, s), u == -1 && (C = b.length, u = n(R, b, p, C), u < 1 && (f++, r(b, p < C ? k : R, C, s))), C = b.length) : u === 0 && (f++, b = [0]), $[v++] = f, u && b[0] ? b[C++] = G[V] || 0 : (b = [G[V]], C = 1);
        while ((V++ < z || b[0] !== void 0) && w--);
        h = b[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (c == 1)
      T.e = d, Jl = h;
    else {
      for (v = 1, f = $[0]; f >= 10; f /= 10)
        v++;
      T.e = v + d * c - 1, ue(T, l ? i + T.e + 1 : i, o, h);
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
        i += de, o = n, d = v[f = 0], s = d / Re(10, t - o - 1) % 10 | 0;
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
        i %= de, o = i - de + t, s = o < 0 ? 0 : d / Re(10, t - o - 1) % 10 | 0;
      }
      if (a = a || n < 0 || v[f + 1] !== void 0 || (o < 0 ? d : d % Re(10, t - o - 1)), u = r < 4 ? (s || a) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : s > 5 || s == 5 && (r == 4 || a || r == 6 && (i > 0 ? o > 0 ? d / Re(10, t - o) : 0 : v[f - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !v[0])
        return v.length = 0, u ? (n -= e.e + 1, v[0] = Re(10, (de - n % de) % de), e.e = -n || 0) : v[0] = e.e = 0, e;
      if (i == 0 ? (v.length = f, l = 1, f--) : (v.length = f + 1, l = Re(10, de - i), v[f] = o > 0 ? (d / Re(10, t - o) % Re(10, o) | 0) * l : 0), u)
        for (; ; )
          if (f == 0) {
            for (i = 1, o = v[0]; o >= 10; o /= 10)
              i++;
            for (o = v[0] += l, l = 1; o >= 10; o /= 10)
              l++;
            i != l && (e.e++, v[0] == kn && (v[0] = 1));
            break;
          } else {
            if (v[f] += l, v[f] != kn)
              break;
            v[f--] = 0, l = 1;
          }
      for (i = v.length; v[--i] === 0; )
        v.pop();
    }
  return fe && (e.e > c.maxE ? (e.d = null, e.e = NaN) : e.e < c.minE && (e.e = 0, e.d = [0])), e;
}
function Mn(e, n, r) {
  if (!e.isFinite())
    return ts(e);
  var a, t = e.e, i = je(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Yn(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Yn(-t - 1) + i, r && (a = r - o) > 0 && (i += Yn(a))) : t >= o ? (i += Yn(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Yn(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Yn(a))), i;
}
function It(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function yt(e, n, r) {
  if (n > qv)
    throw fe = !0, r && (e.precision = r), Error(Ql);
  return ue(new e(ht), n, 1, !0);
}
function Sn(e, n, r) {
  if (n > fi)
    throw Error(Ql);
  return ue(new e(gt), n, r, !0);
}
function ns(e) {
  var n = e.length - 1, r = n * de + 1;
  if (n = e[n], n) {
    for (; n % 10 == 0; n /= 10)
      r--;
    for (n = e[0]; n >= 10; n /= 10)
      r++;
  }
  return r;
}
function Yn(e) {
  for (var n = ""; e--; )
    n += "0";
  return n;
}
function rs(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (i = i.times(n), To(i.d, o) && (t = !0)), r = Je(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), To(n.d, o);
  }
  return fe = !0, i;
}
function $o(e) {
  return e.d[e.d.length - 1] & 1;
}
function as(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function ci(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Re(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = ue(i.times(e), s, 1), r = r.times(++d), l = o.plus(Te(i, r, s, 1)), je(l.d).slice(0, s) === je(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = ue(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && qa(o.d, s - a, c, u))
          f.precision = s += 10, r = i = l = new f(1), d = 0, u++;
        else
          return ue(o, f.precision = h, c, fe = !0);
      else
        return f.precision = h, o;
    }
    o = l;
  }
}
function Kn(e, n) {
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, h = 10, y = e, S = y.d, T = y.constructor, $ = T.rounding, b = T.precision;
  if (y.s < 0 || !S || !S[0] || !y.e && S[0] == 1 && S.length == 1)
    return new T(S && !S[0] ? -1 / 0 : y.s != 1 ? NaN : S ? 0 : y);
  if (n == null ? (fe = !1, d = b) : d = n, T.precision = d += h, r = je(S), a = r.charAt(0), Math.abs(i = y.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      y = y.times(e), r = je(y.d), a = r.charAt(0), c++;
    i = y.e, a > 1 ? (y = new T("0." + r), i++) : y = new T(a + "." + r.slice(1));
  } else
    return u = yt(T, d + 2, b).times(i + ""), y = Kn(new T(a + "." + r.slice(1)), d - h).plus(u), T.precision = b, n == null ? ue(y, b, $, fe = !0) : y;
  for (v = y, s = o = y = Te(y.minus(1), y.plus(1), d, 1), f = ue(y.times(y), d, 1), t = 3; ; ) {
    if (o = ue(o.times(f), d, 1), u = s.plus(Te(o, new T(t), d, 1)), je(u.d).slice(0, d) === je(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(yt(T, d + 2, b).times(i + ""))), s = Te(s, new T(c), d, 1), n == null)
        if (qa(s.d, d - h, $, l))
          T.precision = d += h, u = o = y = Te(v.minus(1), v.plus(1), d, 1), f = ue(y.times(y), d, 1), t = l = 1;
        else
          return ue(s, T.precision = b, $, fe = !0);
      else
        return T.precision = b, s;
    s = u, t += 2;
  }
}
function ts(e) {
  return String(e.s * e.s / 0);
}
function mi(e, n) {
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
function Xv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), es.test(n))
      return mi(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Wv.test(n))
    r = 16, n = n.toLowerCase();
  else if (Hv.test(n))
    r = 2;
  else if (jv.test(n))
    r = 8;
  else
    throw Error(nr + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = rs(a, new a(r), i, i * 2)), u = ut(n, r, kn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = It(u, d), e.d = u, fe = !1, o && (e = Te(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Re(2, s) : Xn.pow(2, s))), fe = !0, e);
}
function Zv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Va(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Nt(5, r)), n = Va(e, 2, n, n);
  for (var t, i = new e(5), o = new e(16), l = new e(20); r--; )
    t = n.times(n), n = n.times(i.plus(t.times(o.times(t).minus(l))));
  return n;
}
function Va(e, n, r, a, t) {
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
function Nt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function is(e, n) {
  var r, a = n.s < 0, t = Sn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return Bn = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    Bn = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return Bn = $o(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    Bn = $o(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function ji(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (tn(r, 1, ir), a === void 0 ? a = c.rounding : tn(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = ts(e);
  else {
    for (d = Mn(e), o = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = ut(Mn(f), 10, t), f.e = f.d.length), v = ut(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = Te(e, f, r, a, 0, t), v = e.d, i = e.e, u = Jl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += di.charAt(v[o]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = ut(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += di.charAt(v[o]);
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
function To(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Jv(e) {
  return new this(e).abs();
}
function Qv(e) {
  return new this(e).acos();
}
function xv(e) {
  return new this(e).acosh();
}
function _v(e, n) {
  return new this(e).plus(n);
}
function ef(e) {
  return new this(e).asin();
}
function nf(e) {
  return new this(e).asinh();
}
function rf(e) {
  return new this(e).atan();
}
function af(e) {
  return new this(e).atanh();
}
function tf(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Sn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Sn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Sn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(Te(e, n, i, 1)), n = Sn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Te(e, n, i, 1)), r;
}
function of(e) {
  return new this(e).cbrt();
}
function lf(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function sf(e, n, r) {
  return new this(e).clamp(n, r);
}
function uf(e) {
  if (!e || typeof e != "object")
    throw Error(Et + "Object expected");
  var n, r, a, t = e.defaults === !0, i = [
    "precision",
    1,
    ir,
    "rounding",
    0,
    8,
    "toExpNeg",
    -Mr,
    0,
    "toExpPos",
    0,
    Mr,
    "maxE",
    0,
    Mr,
    "minE",
    -Mr,
    0,
    "modulo",
    0,
    9
  ];
  for (n = 0; n < i.length; n += 3)
    if (r = i[n], t && (this[r] = vi[r]), (a = e[r]) !== void 0)
      if (Je(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(nr + r + ": " + a);
  if (r = "crypto", t && (this[r] = vi[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(xl);
      else
        this[r] = !1;
    else
      throw Error(nr + r + ": " + a);
  return this;
}
function df(e) {
  return new this(e).cos();
}
function vf(e) {
  return new this(e).cosh();
}
function os(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, Oo(i)) {
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
      return mi(u, i.toString());
    } else if (s !== "string")
      throw Error(nr + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), es.test(i) ? mi(u, i) : Xv(u, i);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = uf, t.clone = os, t.isDecimal = Oo, t.abs = Jv, t.acos = Qv, t.acosh = xv, t.add = _v, t.asin = ef, t.asinh = nf, t.atan = rf, t.atanh = af, t.atan2 = tf, t.cbrt = of, t.ceil = lf, t.clamp = sf, t.cos = df, t.cosh = vf, t.div = ff, t.exp = cf, t.floor = mf, t.hypot = pf, t.ln = hf, t.log = gf, t.log10 = bf, t.log2 = yf, t.max = wf, t.min = Sf, t.mod = Cf, t.mul = kf, t.pow = $f, t.random = Tf, t.round = Of, t.sign = Pf, t.sin = Vf, t.sinh = Mf, t.sqrt = Ef, t.sub = If, t.sum = Nf, t.tan = Bf, t.tanh = Df, t.trunc = Af, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function ff(e, n) {
  return new this(e).div(n);
}
function cf(e) {
  return new this(e).exp();
}
function mf(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function pf() {
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
function Oo(e) {
  return e instanceof Xn || e && e.toStringTag === _l || !1;
}
function hf(e) {
  return new this(e).ln();
}
function gf(e, n) {
  return new this(e).log(n);
}
function yf(e) {
  return new this(e).log(2);
}
function bf(e) {
  return new this(e).log(10);
}
function wf() {
  return as(this, arguments, "lt");
}
function Sf() {
  return as(this, arguments, "gt");
}
function Cf(e, n) {
  return new this(e).mod(n);
}
function kf(e, n) {
  return new this(e).mul(n);
}
function $f(e, n) {
  return new this(e).pow(n);
}
function Tf(e) {
  var n, r, a, t, i = 0, o = new this(1), l = [];
  if (e === void 0 ? e = this.precision : tn(e, 1, ir), a = Math.ceil(e / de), this.crypto)
    if (crypto.getRandomValues)
      for (n = crypto.getRandomValues(new Uint32Array(a)); i < a; )
        t = n[i], t >= 429e7 ? n[i] = crypto.getRandomValues(new Uint32Array(1))[0] : l[i++] = t % 1e7;
    else if (crypto.randomBytes) {
      for (n = crypto.randomBytes(a *= 4); i < a; )
        t = n[i] + (n[i + 1] << 8) + (n[i + 2] << 16) + ((n[i + 3] & 127) << 24), t >= 214e7 ? crypto.randomBytes(4).copy(n, i) : (l.push(t % 1e7), i += 4);
      i = a / 4;
    } else
      throw Error(xl);
  else
    for (; i < a; )
      l[i++] = Math.random() * 1e7 | 0;
  for (a = l[--i], e %= de, a && e && (t = Re(10, de - e), l[i] = (a / t | 0) * t); l[i] === 0; i--)
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
function Of(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Pf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Vf(e) {
  return new this(e).sin();
}
function Mf(e) {
  return new this(e).sinh();
}
function Ef(e) {
  return new this(e).sqrt();
}
function If(e, n) {
  return new this(e).sub(n);
}
function Nf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Bf(e) {
  return new this(e).tan();
}
function Df(e) {
  return new this(e).tanh();
}
function Af(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var Xn = q.constructor = os(vi);
ht = new Xn(ht);
gt = new Xn(gt);
var zf = {
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
  n: Lf,
  classes: Rf
} = ee("counter"), Po = 100, Vo = 600, Uf = ["inputmode", "readonly", "disabled"];
function Yf(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return g(), P(
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
        Uf
      ), [[tu, e.inputValue]]), ke(re(
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
  );
}
const Kr = _({
  render: Yf,
  name: "VarCounter",
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  directives: {
    Ripple: Fe
  },
  inheritAttrs: !1,
  props: zf,
  setup(e) {
    var n = M(""), r, a, t, i, {
      bindForm: o,
      form: l
    } = yn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = gn(), {
      readonly: f,
      disabled: c
    } = l != null ? l : {}, h = () => d(e.rules, e.modelValue), y = (R) => {
      Me(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: Z
        } = e;
        u(J, R, j, Z);
      });
    }, S = () => {
      var {
        min: R
      } = e;
      O(e["onUpdate:modelValue"], R != null ? A(R) : 0), v();
    }, T = {
      reset: S,
      validate: h,
      resetValidation: v
    }, $ = F(() => {
      var {
        max: R,
        modelValue: J
      } = e;
      return R != null && A(J) >= A(R);
    }), b = F(() => {
      var {
        min: R,
        modelValue: J
      } = e;
      return R != null && A(J) <= A(R);
    }), C = (R) => {
      var {
        decimalLength: J,
        max: j,
        min: Z
      } = e, N = A(R);
      return j != null && N > A(j) && (N = A(j)), Z != null && N < A(Z) && (N = A(Z)), R = String(N), J != null && (R = N.toFixed(A(J))), R;
    }, E = (R) => {
      var {
        lazyChange: J,
        onBeforeChange: j
      } = e, {
        value: Z
      } = R.target, N = C(Z);
      J ? O(j, A(N), G) : Y(N), y("onInputChange");
    }, w = () => {
      var {
        disabled: R,
        readonly: J,
        disableDecrement: j,
        decrementButton: Z,
        lazyChange: N,
        step: X,
        modelValue: W,
        onDecrement: Q,
        onBeforeChange: te
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !Z) && !b.value) {
        var ie = new Xn(A(W)).minus(new Xn(A(X))).toString(), ce = C(ie), ye = A(ce);
        O(Q, ye), N ? O(te, ye, G) : (Y(ce), y("onDecrement"));
      }
    }, D = () => {
      var {
        disabled: R,
        readonly: J,
        disableIncrement: j,
        incrementButton: Z,
        lazyChange: N,
        step: X,
        modelValue: W,
        onIncrement: Q,
        onBeforeChange: te
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !Z) && !$.value) {
        var ie = new Xn(A(W)).plus(new Xn(A(X))).toString(), ce = C(ie), ye = A(ce);
        O(Q, ye), N ? O(te, ye, G) : (Y(ce), y("onIncrement"));
      }
    }, V = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (i = window.setTimeout(() => {
        L();
      }, Vo));
    }, z = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (t = window.setTimeout(() => {
        k();
      }, Vo));
    }, I = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, k = () => {
      r = window.setTimeout(() => {
        D(), k();
      }, Po);
    }, L = () => {
      a = window.setTimeout(() => {
        w(), L();
      }, Po);
    }, Y = (R) => {
      n.value = R;
      var J = A(R);
      O(e["onUpdate:modelValue"], J);
    }, G = (R) => {
      Y(C(String(R))), y("onLazyChange");
    };
    return O(o, T), oe(() => e.modelValue, (R) => {
      Y(C(String(R))), O(e.onChange, A(R));
    }), Y(C(String(e.modelValue))), {
      n: Lf,
      classes: Rf,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: $,
      isMin: b,
      validate: h,
      reset: S,
      resetValidation: v,
      handleChange: E,
      decrement: w,
      increment: D,
      pressDecrement: V,
      pressIncrement: z,
      releaseDecrement: I,
      releaseIncrement: p,
      toSizeUnit: Se,
      toNumber: A
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var ls = 60, ss = ls * 60, us = ss * 24, Ff = us * 7, Ma = 1e3, jt = ls * Ma, Mo = ss * Ma, Hf = us * Ma, Wf = Ff * Ma, Gi = "millisecond", Er = "second", Ir = "minute", Nr = "hour", Fn = "day", dt = "week", wn = "month", ds = "quarter", Hn = "year", Br = "date", jf = "YYYY-MM-DDTHH:mm:ssZ", Eo = "Invalid Date", Gf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, qf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Kf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var pi = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Xf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + pi(t, 2, "0") + ":" + pi(i, 2, "0");
}, Zf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, wn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), wn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Jf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Qf = function(n) {
  var r = {
    M: wn,
    y: Hn,
    w: dt,
    d: Fn,
    D: Br,
    h: Nr,
    m: Ir,
    s: Er,
    ms: Gi,
    Q: ds
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, xf = function(n) {
  return n === void 0;
};
const _f = {
  s: pi,
  z: Xf,
  m: Zf,
  a: Jf,
  p: Qf,
  u: xf
};
var Ha = "en", cr = {};
cr[Ha] = Kf;
var qi = function(n) {
  return n instanceof Bt;
}, bt = function e(n, r, a) {
  var t;
  if (!n)
    return Ha;
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
  return !a && t && (Ha = t), t || !a && Ha;
}, ae = function(n, r) {
  if (qi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Bt(a);
}, ec = function(n, r) {
  return ae(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, $e = _f;
$e.l = bt;
$e.i = qi;
$e.w = ec;
var nc = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if ($e.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Gf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Bt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = bt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = nc(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return $e;
  }, n.isValid = function() {
    return this.$d.toString() !== Eo;
  }, n.isSame = function(a, t) {
    var i = ae(a);
    return this.startOf(t) <= i && i <= this.endOf(t);
  }, n.isAfter = function(a, t) {
    return ae(a) < this.startOf(t);
  }, n.isBefore = function(a, t) {
    return this.endOf(t) < ae(a);
  }, n.$g = function(a, t, i) {
    return $e.u(a) ? this[t] : this.set(i, a);
  }, n.unix = function() {
    return Math.floor(this.valueOf() / 1e3);
  }, n.valueOf = function() {
    return this.$d.getTime();
  }, n.startOf = function(a, t) {
    var i = this, o = $e.u(t) ? !0 : t, l = $e.p(a), s = function(T, $) {
      var b = $e.w(i.$u ? Date.UTC(i.$y, $, T) : new Date(i.$y, $, T), i);
      return o ? b : b.endOf(Fn);
    }, u = function(T, $) {
      var b = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return $e.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? b : C).slice($)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Hn:
        return o ? s(1, 0) : s(31, 11);
      case wn:
        return o ? s(1, v) : s(0, v + 1);
      case dt: {
        var h = this.$locale().weekStart || 0, y = (d < h ? d + 7 : d) - h;
        return s(o ? f - y : f + (6 - y), v);
      }
      case Fn:
      case Br:
        return u(c + "Hours", 0);
      case Nr:
        return u(c + "Minutes", 1);
      case Ir:
        return u(c + "Seconds", 2);
      case Er:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = $e.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Fn] = l + "Date", i[Br] = l + "Date", i[wn] = l + "Month", i[Hn] = l + "FullYear", i[Nr] = l + "Hours", i[Ir] = l + "Minutes", i[Er] = l + "Seconds", i[Gi] = l + "Milliseconds", i)[o], u = o === Fn ? this.$D + (t - this.$W) : t;
    if (o === wn || o === Hn) {
      var d = this.clone().set(Br, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Br, Math.min(this.$D, d.daysInMonth())).$d;
    } else
      s && this.$d[s](u);
    return this.init(), this;
  }, n.set = function(a, t) {
    return this.clone().$set(a, t);
  }, n.get = function(a) {
    return this[$e.p(a)]();
  }, n.add = function(a, t) {
    var i = this, o;
    a = Number(a);
    var l = $e.p(t), s = function(f) {
      var c = ae(i);
      return $e.w(c.date(c.date() + Math.round(f * a)), i);
    };
    if (l === wn)
      return this.set(wn, this.$M + a);
    if (l === Hn)
      return this.set(Hn, this.$y + a);
    if (l === Fn)
      return s(1);
    if (l === dt)
      return s(7);
    var u = (o = {}, o[Ir] = jt, o[Nr] = Mo, o[Er] = Ma, o)[l] || 1, d = this.$d.getTime() + a * u;
    return $e.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || Eo;
    var o = a || jf, l = $e.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, h = function(b, C, E, w) {
      return b && (b[C] || b(t, o)) || E[C].slice(0, w);
    }, y = function(b) {
      return $e.s(s % 12 || 12, b, "0");
    }, S = c || function($, b, C) {
      var E = $ < 12 ? "AM" : "PM";
      return C ? E.toLowerCase() : E;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: $e.s(d + 1, 2, "0"),
      MMM: h(i.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: $e.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(i.weekdaysMin, this.$W, v, 2),
      ddd: h(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: $e.s(s, 2, "0"),
      h: y(1),
      hh: y(2),
      a: S(s, u, !0),
      A: S(s, u, !1),
      m: String(u),
      mm: $e.s(u, 2, "0"),
      s: String(this.$s),
      ss: $e.s(this.$s, 2, "0"),
      SSS: $e.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(qf, function($, b) {
      return b || T[$] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = $e.p(t), s = ae(a), u = (s.utcOffset() - this.utcOffset()) * jt, d = this - s, v = $e.m(this, s);
    return v = (o = {}, o[Hn] = v / 12, o[wn] = v, o[ds] = v / 3, o[dt] = (d - u) / Wf, o[Fn] = (d - u) / Hf, o[Nr] = d / Mo, o[Ir] = d / jt, o[Er] = d / Ma, o)[l] || d, i ? v : $e.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(wn).$D;
  }, n.$locale = function() {
    return cr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = bt(a, t, !0);
    return o && (i.$L = o), i;
  }, n.clone = function() {
    return $e.w(this.$d, this);
  }, n.toDate = function() {
    return new Date(this.valueOf());
  }, n.toJSON = function() {
    return this.isValid() ? this.toISOString() : null;
  }, n.toISOString = function() {
    return this.$d.toISOString();
  }, n.toString = function() {
    return this.$d.toUTCString();
  }, e;
}(), vs = Bt.prototype;
ae.prototype = vs;
[["$ms", Gi], ["$s", Er], ["$m", Ir], ["$H", Nr], ["$W", Fn], ["$M", wn], ["$y", Hn], ["$D", Br]].forEach(function(e) {
  vs[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ae.extend = function(e, n) {
  return e.$i || (e(n, Bt, ae), e.$i = !0), ae;
};
ae.locale = bt;
ae.isDayjs = qi;
ae.unix = function(e) {
  return ae(e * 1e3);
};
ae.en = cr[Ha];
ae.Ls = cr;
ae.p = {};
const fs = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, cs = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function rc(e) {
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
}], ac = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: rc
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
  n: tc
} = ee("picker-header");
function ic(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return g(), P(
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
      },
      8,
      ["disabled"]
    ), B(
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
          default: ve(() => [(g(), P(
            "div",
            {
              key: e.showDate
            },
            ne(e.showDate),
            1
          ))]),
          _: 1
        },
        8,
        ["name"]
      )],
      2
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
      },
      8,
      ["disabled"]
    )],
    2
  );
}
const ms = _({
  render: ic,
  name: "PanelHeader",
  components: {
    VarButton: an,
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
    } = n, a = M(!1), t = M(0), i = F(() => {
      var l, {
        date: s,
        type: u
      } = e, {
        previewMonth: d,
        previewYear: v
      } = s;
      if (u === "month")
        return A(v) + t.value;
      var f = (l = We.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return We.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return oe(() => e.date, () => {
      t.value = 0;
    }), {
      n: tc,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
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
ae.extend(fs);
ae.extend(cs);
var {
  n: tt,
  classes: oc
} = ee("month-picker"), {
  n: it
} = ee("date-picker");
function lc(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [B(
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
          default: ve(() => [(g(), P("ul", {
            key: e.panelKey
          }, [(g(!0), P(
            Pe,
            null,
            Be(e.MONTH_LIST, (t) => (g(), P("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, hi({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: ve(() => [he(
                  ne(e.getMonthAbbr(t.index)),
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
const sc = _({
  render: lc,
  name: "MonthPickerPanel",
  components: {
    VarButton: an,
    PanelHeader: ms
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
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = ($) => {
      var b, C;
      return (b = (C = We.value.datePickerMonthDict) == null ? void 0 : C[$].abbr) != null ? b : "";
    }, f = ($) => {
      var {
        preview: {
          previewYear: b
        },
        componentProps: {
          min: C,
          max: E
        }
      } = e, w = !0, D = !0, V = b + "-" + $;
      return E && (w = ae(V).isSameOrBefore(ae(E), "month")), C && (D = ae(V).isSameOrAfter(ae(C), "month")), w && D;
    }, c = ($) => {
      var {
        choose: {
          chooseMonths: b,
          chooseDays: C,
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
        var V = ae($).isSameOrBefore(ae(E[1]), "month"), z = ae($).isSameOrAfter(ae(E[0]), "month");
        return V && z;
      }
      return w === "month" ? b.includes($) : C.some((I) => I.includes($));
    }, h = ($) => {
      var {
        choose: {
          chooseMonth: b
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: E,
          color: w,
          multiple: D,
          range: V
        }
      } = e, z = C + "-" + $, I = () => V || D ? c(z) : (b == null ? void 0 : b.index) === $ && u.value, p = () => f($) ? E ? !E(z) : !1 : !0, k = p(), L = () => k ? !0 : V || D ? !c(z) : !u.value || (b == null ? void 0 : b.index) !== $, Y = () => d.value && t === $ && e.componentProps.showCurrent ? (V || D || u.value) && k ? !0 : V || D ? !c(z) : u.value ? (b == null ? void 0 : b.index) !== t : !0 : !1, G = () => k ? "" : Y() ? w != null ? w : "" : I() ? "" : it() + "-color-cover", R = G().startsWith(it());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : w,
        textColor: R ? "" : G(),
        [it() + "-color-cover"]: R,
        class: oc(tt("button"), [k, tt("button--disabled")])
      };
    }, y = ($, b) => {
      var C = b.currentTarget;
      C.classList.contains(tt("button--disabled")) || r("choose-month", $);
    }, S = ($) => {
      i.value = $ === "prev", o.value += $ === "prev" ? -1 : 1, r("check-preview", "year", $);
    }, T = ($) => {
      l.value.checkDate($);
    };
    return oe(() => e.preview.previewYear, ($) => {
      var {
        componentProps: {
          min: b,
          max: C
        }
      } = e;
      C && (s.right = !ae("" + (A($) + 1)).isSameOrBefore(ae(C), "year")), b && (s.left = !ae("" + (A($) - 1)).isSameOrAfter(ae(b), "year"));
    }, {
      immediate: !0
    }), {
      n: tt,
      nDate: it,
      pack: We,
      MONTH_LIST: vt,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: y,
      checkDate: S
    };
  }
});
var {
  n: Io,
  classes: uc
} = ee("year-picker"), dc = ["onClick"];
function vc(e, n) {
  return g(), P(
    "ul",
    {
      class: m(e.n())
    },
    [(g(!0), P(
      Pe,
      null,
      Be(e.yearList, (r) => (g(), P(
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
        dc
      ))),
      128
    ))],
    2
  );
}
const fc = _({
  render: vc,
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
        var d = ae(l).format("YYYY-MM-D"), v = A(d.split("-")[0]);
        if (v < u[0] && v > u[1] && (u = [v, u[1]]), v <= u[1])
          return [v];
      }
      if (s) {
        var f = ae(s).format("YYYY-MM-D"), c = A(f.split("-")[0]);
        if (c < u[0] && c > u[1] && (u = [u[0], c]), c >= u[0])
          return [c];
      }
      for (var h = u[0]; h >= u[1]; h--)
        i.push(h);
      return i;
    }), t = (i) => {
      r("choose-year", i);
    };
    return Ue(() => {
      var i = document.querySelector("." + Io("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: Io,
      classes: uc,
      yearList: a,
      chooseYear: t,
      toNumber: A
    };
  }
});
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
ae.extend(fs);
ae.extend(cs);
var {
  n: Vr,
  classes: cc
} = ee("day-picker"), {
  n: ot
} = ee("date-picker");
function mc(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [B(
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
          default: ve(() => [(g(), P("div", {
            key: e.panelKey
          }, [B(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(g(!0), P(
              Pe,
              null,
              Be(e.sortWeekList, (t) => (g(), P(
                "li",
                {
                  key: t.index
                },
                ne(e.getDayAbbr(t.index)),
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
            [(g(!0), P(
              Pe,
              null,
              Be(e.days, (t, i) => (g(), P("li", {
                key: i
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, gi({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: ve(() => [he(
                    ne(e.filterDay(t)),
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
const pc = _({
  render: mc,
  name: "DayPickerPanel",
  components: {
    VarButton: an,
    PanelHeader: ms
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
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var V;
      return e.choose.chooseYear === e.preview.previewYear && ((V = e.choose.chooseMonth) == null ? void 0 : V.index) === e.preview.previewMonth.index;
    }), c = F(() => {
      var V = Fa.findIndex((z) => z.index === e.componentProps.firstDayOfWeek);
      return V === -1 || V === 0 ? Fa : Fa.slice(V).concat(Fa.slice(0, V));
    }), h = (V) => {
      var z, I;
      return (z = (I = We.value.datePickerWeekDict) == null ? void 0 : I[V].abbr) != null ? z : "";
    }, y = (V) => V > 0 ? V : "", S = () => {
      var {
        preview: {
          previewMonth: V,
          previewYear: z
        }
      } = e, I = ae(z + "-" + V.index).daysInMonth(), p = ae(z + "-" + V.index + "-01").day(), k = c.value.findIndex((L) => L.index === "" + p);
      o.value = [...Array(k).fill(-1), ...Array.from(Array(I + 1).keys())].filter((L) => L);
    }, T = () => {
      var {
        preview: {
          previewYear: V,
          previewMonth: z
        },
        componentProps: {
          max: I,
          min: p
        }
      } = e;
      if (I) {
        var k = V + "-" + (A(z.index) + 1);
        d.right = !ae(k).isSameOrBefore(ae(I), "month");
      }
      if (p) {
        var L = V + "-" + (A(z.index) - 1);
        d.left = !ae(L).isSameOrAfter(ae(p), "month");
      }
    }, $ = (V) => {
      var {
        preview: {
          previewYear: z,
          previewMonth: I
        },
        componentProps: {
          min: p,
          max: k
        }
      } = e, L = !0, Y = !0, G = z + "-" + I.index + "-" + V;
      return k && (L = ae(G).isSameOrBefore(ae(k), "day")), p && (Y = ae(G).isSameOrAfter(ae(p), "day")), L && Y;
    }, b = (V) => {
      var {
        choose: {
          chooseDays: z,
          chooseRangeDay: I
        },
        componentProps: {
          range: p
        }
      } = e;
      if (p) {
        if (!I.length)
          return !1;
        var k = ae(V).isSameOrBefore(ae(I[1]), "day"), L = ae(V).isSameOrAfter(ae(I[0]), "day");
        return k && L;
      }
      return z.includes(V);
    }, C = (V) => {
      if (V < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Vr("button")
        };
      var {
        choose: {
          chooseDay: z
        },
        preview: {
          previewYear: I,
          previewMonth: p
        },
        componentProps: {
          allowedDates: k,
          color: L,
          multiple: Y,
          range: G
        }
      } = e, R = I + "-" + p.index + "-" + V, J = () => G || Y ? b(R) : A(z) === V && f.value, j = () => $(V) ? k ? !k(R) : !1 : !0, Z = j(), N = () => Z ? !0 : G || Y ? !b(R) : !f.value || A(z) !== V, X = () => v.value && A(i) === V && e.componentProps.showCurrent ? (G || Y || f.value) && Z ? !0 : G || Y ? !b(R) : f.value ? z !== i : !0 : !1, W = () => Z ? "" : X() ? L != null ? L : "" : J() ? "" : ot() + "-color-cover", Q = W().startsWith(ot());
      return {
        text: N(),
        outline: X(),
        textColor: Q ? "" : W(),
        [ot() + "-color-cover"]: Q,
        class: cc(Vr("button"), Vr("button--usable"), [Z, Vr("button--disabled")])
      };
    }, E = (V) => {
      l.value = V === "prev", s.value += V === "prev" ? -1 : 1, r("check-preview", "month", V);
    }, w = (V, z) => {
      var I = z.currentTarget;
      I.classList.contains(Vr("button--disabled")) || r("choose-day", V);
    }, D = (V) => {
      u.value.checkDate(V);
    };
    return Ue(() => {
      S(), T();
    }), oe(() => e.preview, () => {
      S(), T();
    }), {
      n: Vr,
      nDate: ot,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: D,
      filterDay: y,
      getDayAbbr: h,
      checkDate: E,
      chooseDay: w,
      buttonProps: C
    };
  }
});
var {
  n: hc,
  classes: gc
} = ee("date-picker");
function yc(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return g(), P(
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
        [H(e.$slots, "year", {
          year: e.chooseYear
        }, () => [he(
          ne(e.chooseYear),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("title-date"), [!e.isYearPanel, e.n("title-date--active")], [e.range, e.n("title-date--range")])),
          onClick: n[1] || (n[1] = (i) => e.clickEl("date"))
        },
        [re(
          Ae,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ve(() => {
              var i, o, l;
              return [e.type === "month" ? (g(), P("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [he(
                ne(e.getMonthTitle),
                1
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [he(
                ne(e.getMonthTitle),
                1
              )]) : H(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [he(
                ne(e.getMonthTitle),
                1
              )])])) : (g(), P("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? H(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [he(
                ne(e.getDateTitle),
                1
              )]) : e.multiple ? H(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [he(
                ne(e.getDateTitle),
                1
              )]) : H(e.$slots, "date", Sl(Ve({
                key: 2
              }, e.slotProps)), () => [he(
                ne(e.getDateTitle),
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
      [re(
        Ae,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ve(() => [e.getPanelType === "year" ? (g(), pe(
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
          )) : e.getPanelType === "month" ? (g(), pe(
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
          )) : e.getPanelType === "date" ? (g(), pe(
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
        },
        8,
        ["name"]
      )],
      34
    )],
    2
  );
}
const Xr = _({
  render: yc,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: sc,
    YearPickerPanel: fc,
    DayPickerPanel: pc
  },
  props: ac,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = ae().format("YYYY-MM-D"), [o, l] = i.split("-"), s = vt.find((se) => se.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), c = M(), h = M(), y = M(s), S = M(o), T = M(!1), $ = M([]), b = M([]), C = M([]), E = M([]), w = M(null), D = M(null), V = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), z = F(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: h.value,
      chooseMonths: $.value,
      chooseDays: b.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: E.value
    })), I = F(() => ({
      previewMonth: y.value,
      previewYear: S.value
    })), p = F(() => {
      var {
        multiple: se,
        range: ge
      } = e;
      if (ge)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var me = "";
      if (f.value) {
        var we, Ce;
        me = (we = (Ce = We.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? we : "";
      }
      return se ? "" + $.value.length + We.value.datePickerSelected : me;
    }), k = F(() => {
      var se, ge, me, we, {
        multiple: Ce,
        range: ze
      } = e;
      if (ze) {
        var xe = E.value.map((Ft) => ae(Ft).format("YYYY-MM-DD"));
        return xe.length ? xe[0] + " ~ " + xe[1] : "";
      }
      if (Ce)
        return "" + b.value.length + We.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var vn = ae(c.value + "-" + f.value.index + "-" + h.value).day(), Pr = Fa.find((Ft) => Ft.index === "" + vn), to = (se = (ge = We.value.datePickerWeekDict) == null ? void 0 : ge[Pr.index].name) != null ? se : "", _s = (me = (we = We.value.datePickerMonthDict) == null ? void 0 : we[f.value.index].name) != null ? me : "", eu = yr(h.value, 2, "0");
      return We.value.lang === "zh-CN" ? f.value.index + "-" + eu + " " + to.slice(0, 3) : to.slice(0, 3) + ", " + _s.slice(0, 3) + " " + h.value;
    }), L = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = F(() => !e.touchable || ["", "year"].includes(L.value)), G = F(() => {
      var se, ge, me, we, Ce = ae(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), ze = h.value ? yr(h.value, 2, "0") : "";
      return {
        week: "" + Ce,
        year: (ge = c.value) != null ? ge : "",
        month: (me = (we = f.value) == null ? void 0 : we.index) != null ? me : "",
        date: ze
      };
    }), R = F(() => z.value.chooseRangeDay.map((se) => ae(se).format("YYYY-MM-DD"))), J = F(() => c.value === S.value), j = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === y.value.index;
    }), Z = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (se) => {
      if (!Y.value) {
        var {
          clientX: ge,
          clientY: me
        } = se.touches[0];
        n = ge, r = me;
      }
    }, X = (se, ge) => se >= ge && se > 20 ? "x" : "y", W = (se) => {
      if (!Y.value) {
        var {
          clientX: ge,
          clientY: me
        } = se.touches[0], we = ge - n, Ce = me - r;
        t = X(Math.abs(we), Math.abs(Ce)), a = we > 0 ? "prev" : "next";
      }
    }, Q = () => {
      if (!(Y.value || t !== "x")) {
        var se = L.value === "month" ? w : D;
        Pt(() => {
          se.value.forwardRef(a), ao();
        });
      }
    }, te = (se, ge) => {
      var me = ge === "month" ? C : E;
      if (me.value = v.value ? [se, se] : [me.value[0], se], v.value = !v.value, v.value) {
        var we = ae(me.value[0]).isAfter(me.value[1]), Ce = we ? [me.value[1], me.value[0]] : [...me.value];
        O(e["onUpdate:modelValue"], Ce), O(e.onChange, Ce);
      }
    }, ie = (se, ge) => {
      var me = ge === "month" ? $ : b, we = ge === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ce = me.value.map((xe) => ae(xe).format(we)), ze = Ce.findIndex((xe) => xe === se);
      ze === -1 ? Ce.push(se) : Ce.splice(ze, 1), O(e["onUpdate:modelValue"], Ce), O(e.onChange, Ce);
    }, ce = (se, ge) => !c.value || !f.value ? !1 : J.value ? se === "month" ? ge.index < f.value.index : j.value ? ge < A(h.value) : f.value.index > y.value.index : c.value > S.value, ye = (se) => {
      var {
        readonly: ge,
        range: me,
        multiple: we,
        onChange: Ce,
        "onUpdate:modelValue": ze
      } = e;
      if (!(se < 0 || ge)) {
        T.value = ce("day", se);
        var xe = S.value + "-" + y.value.index + "-" + se, vn = ae(xe).format("YYYY-MM-DD");
        me ? te(vn, "day") : we ? ie(vn, "day") : (O(ze, vn), O(Ce, vn));
      }
    }, Ye = (se) => {
      var {
        type: ge,
        readonly: me,
        range: we,
        multiple: Ce,
        onChange: ze,
        onPreview: xe,
        "onUpdate:modelValue": vn
      } = e;
      if (T.value = ce("month", se), ge === "month" && !me) {
        var Pr = S.value + "-" + se.index;
        we ? te(Pr, "month") : Ce ? ie(Pr, "month") : (O(vn, Pr), O(ze, Pr));
      } else
        y.value = se, O(xe, A(S.value), A(y.value.index));
      d.value = !1;
    }, Qe = (se) => {
      S.value = "" + se, u.value = !1, d.value = !0, O(e.onPreview, A(S.value), A(y.value.index));
    }, Ie = (se, ge) => {
      var me = ge === "prev" ? -1 : 1;
      if (se === "year")
        S.value = "" + (A(S.value) + me);
      else {
        var we = A(y.value.index) + me;
        we < 1 && (S.value = "" + (A(S.value) - 1), we = 12), we > 12 && (S.value = "" + (A(S.value) + 1), we = 1), y.value = vt.find((Ce) => A(Ce.index) === we);
      }
      O(e.onPreview, A(S.value), A(y.value.index));
    }, He = () => (e.multiple || e.range) && !be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Yt = (se) => be(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Js = (se, ge) => {
      var me = ge === "month" ? C : E, we = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Ce = se.map((vn) => ae(vn).format(we)).slice(0, 2), ze = me.value.some((vn) => Yt(vn));
      if (!ze) {
        me.value = Ce;
        var xe = ae(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && xe && (me.value = [me.value[1], me.value[0]]);
      }
    }, Qs = (se, ge) => {
      var me = ge === "month" ? $ : b, we = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Ce = Array.from(new Set(se.map((ze) => ae(ze).format(we))));
      me.value = Ce.filter((ze) => ze !== "Invalid Date");
    }, xs = (se) => {
      var ge = ae(se).format("YYYY-MM-D");
      if (!Yt(ge)) {
        var [me, we, Ce] = ge.split("-"), ze = vt.find((xe) => xe.index === we);
        f.value = ze, c.value = me, h.value = Ce, y.value = ze, S.value = me;
      }
    }, ao = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return oe(() => e.modelValue, (se) => {
      if (!(!He() || Yt(se) || !se))
        if (e.range) {
          if (!be(se))
            return;
          v.value = se.length !== 1, Js(se, e.type);
        } else if (e.multiple) {
          if (!be(se))
            return;
          Qs(se, e.type);
        } else
          xs(se);
    }, {
      immediate: !0
    }), oe(L, ao), {
      n: hc,
      classes: gc,
      monthPanelEl: w,
      dayPanelEl: D,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: S,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: p,
      getDateTitle: k,
      getPanelType: L,
      getChoose: z,
      getPreview: I,
      componentProps: V,
      slotProps: G,
      formatRange: R,
      clickEl: Z,
      handleTouchstart: N,
      handleTouchmove: W,
      handleTouchend: Q,
      getChooseDay: ye,
      getChooseMonth: Ye,
      getChooseYear: Qe,
      checkPreview: Ie
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
};
function yi() {
  return yi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, yi.apply(this, arguments);
}
function bc(e) {
  return ["left", "center", "right"].includes(e);
}
var wc = yi({
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
    validator: bc
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
}, qe(xa, [
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
var {
  n: Sc,
  classes: Cc
} = ee("dialog");
function kc(e, n) {
  var r = le("var-button"), a = le("var-popup");
  return g(), pe(
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
      default: ve(() => [B(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: bi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [B(
          "div",
          {
            class: m(e.n("title"))
          },
          [H(e.$slots, "title", {}, () => [he(
            ne(e.dt(e.title, e.pack.dialogTitle)),
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
          [H(e.$slots, "default", {}, () => [he(
            ne(e.message),
            1
          )])],
          6
        ), B(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (g(), pe(
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
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0), e.confirmButton ? (g(), pe(
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
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : x("v-if", !0)],
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
  render: kc,
  name: "VarDialog",
  components: {
    VarPopup: Cn,
    VarButton: an
  },
  inheritAttrs: !1,
  props: wc,
  setup(e) {
    var n = M(!1), r = M(!1), a = () => O(e["onUpdate:show"], !1), t = () => {
      var {
        closeOnClickOverlay: l,
        onClickOverlay: s,
        onBeforeClose: u
      } = e;
      if (O(s), !!l) {
        if (u != null) {
          u("close", a);
          return;
        }
        O(e["onUpdate:show"], !1);
      }
    }, i = () => {
      var {
        onBeforeClose: l,
        onConfirm: s
      } = e;
      if (O(s), l != null) {
        l("confirm", a);
        return;
      }
      O(e["onUpdate:show"], !1);
    }, o = () => {
      var {
        onBeforeClose: l,
        onCancel: s
      } = e;
      if (O(s), l != null) {
        l("cancel", a);
        return;
      }
      O(e["onUpdate:show"], !1);
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
      n: Sc,
      classes: Cc,
      pack: We,
      dt: Tt,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: Se
    };
  }
});
var jn;
function wr(e) {
  return Fi() ? new Promise((n) => {
    wr.close();
    var r = Ze(e) || Ke(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", jn = a;
    var {
      unmountInstance: t
    } = Ra(mr, a, {
      onConfirm: () => {
        O(a.onConfirm), n("confirm");
      },
      onCancel: () => {
        O(a.onCancel), n("cancel");
      },
      onClose: () => {
        O(a.onClose), n("close");
      },
      onClosed: () => {
        O(a.onClosed), t(), jn === a && (jn = null);
      },
      onRouteChange: () => {
        t(), jn === a && (jn = null);
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
  if (jn != null) {
    var e = jn;
    jn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
wr.Component = mr;
var $c = {
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
  n: Tc,
  classes: Oc
} = ee("divider");
function Pc(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [H(e.$slots, "default", {}, () => [e.description ? (g(), P(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      ne(e.description),
      3
    )) : x("v-if", !0)])],
    6
  );
}
const Zr = _({
  render: Pc,
  name: "VarDivider",
  props: $c,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = F(() => Jt(e.inset) ? e.inset : !0), i = F(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Jt(l) || l === 0)
        return Dr({}, d);
      var v = A(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Dr({}, d, {
        height: "calc(80% - " + Se(f) + ")"
      }) : Dr({}, d, {
        width: "calc(100% - " + Se(f) + ")",
        left: v > 0 ? Se(f) : Se(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ue(() => {
      o();
    }), Ri(() => {
      o();
    }), Dr({
      n: Tc,
      classes: Oc
    }, iu(a), {
      style: i,
      isInset: t
    });
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
function Vc(e) {
  return ["start", "end"].includes(e);
}
var Mc = {
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
    validator: Vc
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
  }
};
function No(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Ec(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        No(i, a, t, o, l, "next", s);
      }
      function l(s) {
        No(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Ic
} = ee("form");
function Nc(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
  );
}
const Zn = _({
  render: Nc,
  name: "VarForm",
  props: Mc,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = dv(), i = (d, v) => {
      d === -1 || !e.scrollToError || setTimeout(() => {
        var f = Or(v), c = f === window ? 0 : co(f), h = co(v) - c - De(e.scrollToErrorOffsetY);
        Ga(f, {
          top: h,
          animation: Qt
        });
      }, 300);
    }, o = /* @__PURE__ */ function() {
      var d = Ec(function* () {
        var v = yield Promise.all(a.map((T) => {
          var {
            validate: $
          } = T;
          return $();
        }));
        if (e.scrollToError) {
          var [f, c] = vu(v, (T) => T === !1, e.scrollToError), h = c > -1;
          if (h) {
            var y, S = (y = a[c].instance.proxy) == null ? void 0 : y.$el;
            i(c, S);
          }
          return !h;
        }
        return v.every((T) => T === !0);
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
      n: Ic,
      validate: o,
      reset: l,
      resetValidation: s
    };
  }
});
Zn.install = function(e) {
  e.component(Zn.name, Zn);
};
Zn.useValidation = gn;
Zn.useForm = yn;
function Bo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Dt(e) {
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
var Bc = "background-image", Dc = "lazy-loading", Ac = "lazy-error", Do = "lazy-attempt", zc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Si = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ea = [], wt = [], ps = fu(100), Le = {
  loading: Si,
  error: Si,
  attempt: 3,
  throttleWait: 300,
  events: zc
}, Ki = Yi(et, Le.throttleWait);
function At(e, n) {
  e._lazy.arg === Bc ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Lc(e) {
  e._lazy.loading && At(e, e._lazy.loading), et();
}
function Rc(e) {
  e._lazy.error && At(e, e._lazy.error), e._lazy.state = "error", Zi(e), et();
}
function hs(e, n) {
  At(e, n), e._lazy.state = "success", Zi(e), et();
}
function Uc(e) {
  var n;
  wt.includes(e) || (wt.push(e), (n = Le.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ki, {
      passive: !0
    });
  }));
}
function Yc() {
  wt.forEach((e) => {
    var n;
    (n = Le.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ki);
    });
  }), wt.length = 0;
}
function Fc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Dc)) != null ? r : Le.loading,
    error: (a = e.getAttribute(Ac)) != null ? a : Le.error,
    attempt: e.getAttribute(Do) ? Number(e.getAttribute(Do)) : Le.attempt
  };
  e._lazy = wi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), At(e, Si), O(Le.filter, e._lazy);
}
function Hc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ps.add(n), hs(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Rc(e) : gs(e);
  });
}
function gs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ps.has(n)) {
      hs(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Lc(e), Hc(e, n);
  }
}
function Xi(e) {
  return Ci.apply(this, arguments);
}
function Ci() {
  return Ci = Dt(function* (e) {
    (yield pu(e)) && gs(e);
  }), Ci.apply(this, arguments);
}
function et() {
  Ea.forEach((e) => Xi(e));
}
function Wc(e) {
  return ki.apply(this, arguments);
}
function ki() {
  return ki = Dt(function* (e) {
    !Ea.includes(e) && Ea.push(e), hu(e).forEach(Uc), yield Xi(e);
  }), ki.apply(this, arguments);
}
function Zi(e) {
  $t(Ea, e), Ea.length === 0 && Yc();
}
function jc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ys(e, n) {
  return $i.apply(this, arguments);
}
function $i() {
  return $i = Dt(function* (e, n) {
    Fc(e, n), yield Wc(e);
  }), $i.apply(this, arguments);
}
function Gc(e, n) {
  return Ti.apply(this, arguments);
}
function Ti() {
  return Ti = Dt(function* (e, n) {
    if (!jc(e, n)) {
      Ea.includes(e) && (yield Xi(e));
      return;
    }
    yield ys(e, n);
  }), Ti.apply(this, arguments);
}
function qc(e) {
  e === void 0 && (e = {});
  var {
    events: n,
    loading: r,
    error: a,
    attempt: t,
    throttleWait: i,
    filter: o
  } = e;
  Le.events = n != null ? n : Le.events, Le.loading = r != null ? r : Le.loading, Le.error = a != null ? a : Le.error, Le.attempt = t != null ? t : Le.attempt, Le.throttleWait = i != null ? i : Le.throttleWait, Le.filter = o;
}
var St = {
  mounted: ys,
  unmounted: Zi,
  updated: Gc,
  install(e, n) {
    qc(n), Ki = Yi(et, Le.throttleWait), e.directive("lazy", this);
  }
};
function Kc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Xc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Kc,
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
  n: Zc,
  classes: Jc
} = ee("image"), Qc = ["alt", "title", "lazy-error", "lazy-loading"], xc = ["alt", "title", "src"];
function _c(e, n) {
  var r = Xe("lazy"), a = Xe("ripple");
  return ke((g(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((g(), P(
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
      Qc
    )), [[r, e.src]]) : (g(), P(
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
      xc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Jr = _({
  render: _c,
  name: "VarImage",
  directives: {
    Lazy: St,
    Ripple: Fe
  },
  props: Xc,
  setup(e) {
    var n = (a) => {
      var t = a.currentTarget, {
        lazy: i,
        onLoad: o,
        onError: l
      } = e;
      i ? (t._lazy.state === "success" && O(o, a), t._lazy.state === "error" && O(l, a)) : O(o, a);
    }, r = (a) => {
      var {
        lazy: t,
        onError: i
      } = e;
      !t && O(i, a);
    };
    return {
      n: Zc,
      classes: Jc,
      toSizeUnit: Se,
      handleLoad: n,
      handleError: r
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var bs = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), ws = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function em() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(bs), {
    length: r
  } = pn(ws);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var Ss = {
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
function Ao(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function nm(e) {
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
var rm = 250, am = 20, {
  n: tm,
  classes: im
} = ee("swipe"), om = ["onClick"];
function lm(e, n) {
  return g(), P(
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
      [H(e.$slots, "default")],
      38
    ), H(e.$slots, "indicator", {
      index: e.index,
      length: e.length
    }, () => [e.indicator && e.length ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(g(!0), P(
        Pe,
        null,
        Be(e.length, (r, a) => (g(), P(
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
          om
        ))),
        128
      ))],
      2
    )) : x("v-if", !0)])],
    2
  );
}
const Jn = _({
  render: lm,
  name: "VarSwipe",
  props: Ss,
  setup(e) {
    var n = M(null), r = M(0), a = F(() => e.vertical), t = M(0), i = M(0), o = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = em(), v = !1, f = -1, c, h, y, S, T, $ = (N) => s.find((X) => {
      var {
        index: W
      } = X;
      return W.value === N;
    }), b = () => {
      !e.loop || (i.value >= 0 && $(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && $(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && ($(d.value - 1).setTranslate(0), $(0).setTranslate(0)));
    }, C = (N) => {
      var X = Ke(N) ? N : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: W
      } = e;
      return X <= -1 ? W ? -1 : 0 : X >= d.value ? W ? d.value : d.value - 1 : X;
    }, E = (N) => {
      var {
        loop: X
      } = e;
      return N === -1 ? X ? d.value - 1 : 0 : N === d.value ? X ? 0 : d.value - 1 : N;
    }, w = (N) => {
      var {
        loop: X
      } = e;
      return N < 0 ? X ? d.value - 1 : 0 : N > d.value - 1 ? X ? 0 : d.value - 1 : N;
    }, D = (N) => {
      var X = i.value >= r.value, W = i.value <= -t.value, Q = 0, te = -(t.value - r.value);
      o.value = !0, (X || W) && (o.value = !0, i.value = W ? Q : te, $(0).setTranslate(0), $(d.value - 1).setTranslate(0)), Pt(() => {
        o.value = !1, O(N);
      });
    }, V = () => {
      l.value = w(A(e.initialIndex));
    }, z = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (I(), f = window.setTimeout(() => {
        R(), z();
      }, A(N)));
    }, I = () => {
      f && clearTimeout(f);
    }, p = (N, X) => {
      if (N > X && N > 10)
        return "horizontal";
      if (X > N && X > 10)
        return "vertical";
    }, k = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: X,
          clientY: W
        } = N.touches[0];
        c = X, h = W, y = performance.now(), v = !0, I(), D(() => {
          o.value = !0;
        });
      }
    }, L = (N) => {
      var {
        touchable: X,
        vertical: W
      } = e;
      if (!(!v || !X)) {
        var {
          clientX: Q,
          clientY: te
        } = N.touches[0], ie = Math.abs(Q - c), ce = Math.abs(te - h), ye = p(ie, ce), Ye = W ? "vertical" : "horizontal";
        if (ye === Ye) {
          N.preventDefault();
          var Qe = S !== void 0 ? Q - S : 0, Ie = T !== void 0 ? te - T : 0;
          S = Q, T = te, i.value += W ? Ie : Qe, b();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: N,
          onChange: X
        } = e, W = N ? T < h : S < c, Q = Math.abs(N ? h - T : c - S), te = performance.now() - y <= rm && Q >= am, ie = te ? C(W ? l.value + 1 : l.value - 1) : C();
        v = !1, o.value = !1, S = void 0, T = void 0, i.value = ie * -r.value;
        var ce = l.value;
        l.value = E(ie), z(), ce !== l.value && O(X, l.value);
      }
    }, G = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((N) => {
        N.setTranslate(0);
      }), z(), setTimeout(() => {
        o.value = !1;
      });
    }, R = () => {
      if (!(d.value <= 1)) {
        var {
          loop: N,
          onChange: X
        } = e, W = l.value;
        l.value = w(W + 1), O(X, l.value), D(() => {
          if (W === d.value - 1 && N) {
            $(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          W !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, J = () => {
      if (!(d.value <= 1)) {
        var {
          loop: N,
          onChange: X
        } = e, W = l.value;
        l.value = w(W - 1), O(X, l.value), D(() => {
          if (W === 0 && N) {
            $(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          W !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, j = (N) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var X = N > l.value ? R : J;
        Array.from({
          length: Math.abs(N - l.value)
        }).forEach(X);
      }
    }, Z = {
      size: r,
      vertical: a
    };
    return u(Z), oe(() => d.value, /* @__PURE__ */ nm(function* () {
      yield Vn(), V(), G();
    })), Ue(() => {
      window.addEventListener("resize", G);
    }), tr(() => {
      window.removeEventListener("resize", G), I();
    }), {
      n: tm,
      classes: im,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: k,
      handleTouchmove: L,
      handleTouchend: Y,
      next: R,
      prev: J,
      to: j,
      resize: G,
      toNumber: A
    };
  }
});
Jn.install = function(e) {
  e.component(Jn.name, Jn);
};
function sm() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(bs), {
    index: r
  } = hn(ws);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: um
} = ee("swipe-item");
function dm(e, n) {
  return g(), P(
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
  );
}
const Qn = _({
  render: dm,
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = sm(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: um,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Qn.install = function(e) {
  e.component(Qn.name, Qn);
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
var vm = Oi({
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
}, qe(Ss, ["loop", "indicator", "onChange"]), qe(xa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: zo,
  classes: fm
} = ee("image-preview"), Lo = 12, Ro = 200, cm = 350, Uo = 200, mm = ["src", "alt"];
function pm(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), i = le("var-popup");
  return g(), pe(
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
          default: ve(() => [(g(!0), P(
            Pe,
            null,
            Be(e.images, (o) => (g(), pe(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ve(() => [B(
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
                    mm
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
          indicator: ve((o) => {
            var {
              index: l,
              length: s
            } = o;
            return [H(e.$slots, "indicator", {
              index: l,
              length: s
            }, () => [e.indicator && e.images.length > 1 ? (g(), P(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              ne(l + 1) + " / " + ne(s),
              3
            )) : x("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), H(e.$slots, "close-icon", {}, () => [e.closeable ? (g(), pe(
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
      )) : x("v-if", !0)]), B(
        "div",
        {
          class: m(e.n("extra"))
        },
        [H(e.$slots, "extra")],
        2
      )]),
      _: 3
    },
    8,
    ["class", "transition", "show", "lock-scroll", "teleport", "onOpen", "onClose", "onClosed", "onOpened", "onRouteChange"]
  );
}
const pr = _({
  render: pm,
  name: "VarImagePreview",
  components: {
    VarSwipe: Jn,
    VarSwipeItem: Qn,
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: vm,
  setup(e) {
    var n = M(!1), r = F(() => {
      var {
        images: I,
        current: p
      } = e, k = I.findIndex((L) => L === p);
      return k >= 0 ? k : 0;
    }), a = M(1), t = M(0), i = M(0), o = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (I, p) => {
      var {
        clientX: k,
        clientY: L
      } = I, {
        clientX: Y,
        clientY: G
      } = p;
      return Math.abs(Math.sqrt(Math.pow(Y - k, 2) + Math.pow(G - L, 2)));
    }, c = (I, p) => ({
      clientX: I.clientX,
      clientY: I.clientY,
      timestamp: Date.now(),
      target: p
    }), h = () => {
      a.value = A(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, Uo);
    }, y = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, S = (I) => d ? f(d, I) <= Lo && I.timestamp - d.timestamp <= Ro && d.target === I.target : !1, T = (I) => !I || !u || !d ? !1 : f(u, d) <= Lo && Date.now() - d.timestamp < cm && (I === u.target || I.parentNode === u.target), $ = (I) => {
      v = window.setTimeout(() => {
        T(I.target) && z(), u = null;
      }, Ro);
    }, b = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: p
      } = I, k = c(p[0], I.currentTarget);
      if (u = k, S(k)) {
        a.value > 1 ? y() : h();
        return;
      }
      d = k;
    }, C = (I) => {
      var {
        offsetWidth: p,
        offsetHeight: k
      } = I, {
        naturalWidth: L,
        naturalHeight: Y
      } = I.querySelector("." + zo("image"));
      return {
        width: p,
        height: k,
        imageRadio: Y / L,
        rootRadio: k / p,
        zoom: A(e.zoom)
      };
    }, E = (I) => {
      var {
        zoom: p,
        imageRadio: k,
        rootRadio: L,
        width: Y,
        height: G
      } = C(I);
      if (!k)
        return 0;
      var R = k > L ? G / k : Y;
      return Math.max(0, (p * R - Y) / 2) / p;
    }, w = (I) => {
      var {
        zoom: p,
        imageRadio: k,
        rootRadio: L,
        width: Y,
        height: G
      } = C(I);
      if (!k)
        return 0;
      var R = k > L ? G : Y * k;
      return Math.max(0, (p * R - G) / 2) / p;
    }, D = (I, p, k) => I + p >= k ? k : I + p <= -k ? -k : I + p, V = (I) => {
      if (!!d) {
        var p = I.currentTarget, {
          touches: k
        } = I, L = c(k[0], p);
        if (a.value > 1) {
          var Y = L.clientX - d.clientX, G = L.clientY - d.clientY, R = E(p), J = w(p);
          t.value = D(t.value, Y, R), i.value = D(i.value, G, J);
        }
        d = L;
      }
    }, z = () => {
      if (a.value > 1) {
        y(), setTimeout(() => O(e["onUpdate:show"], !1), Uo);
        return;
      }
      O(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: zo,
      classes: fm,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: b,
      handleTouchmove: V,
      handleTouchend: $,
      close: z
    };
  }
});
var Gn;
function rr(e) {
  if (!!Fi()) {
    rr.close();
    var n = Ze(e) ? {
      images: [e]
    } : be(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", Gn = r;
    var {
      unmountInstance: a
    } = Ra(pr, r, {
      onClose: () => O(r.onClose),
      onClosed: () => {
        O(r.onClosed), a(), Gn === r && (Gn = null);
      },
      onRouteChange: () => {
        a(), Gn === r && (Gn = null);
      },
      "onUpdate:show": (t) => {
        r.show = t;
      }
    });
    r.show = !0;
  }
}
rr.close = () => {
  if (Gn != null) {
    var e = Gn;
    Gn = null, Me().then(() => {
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
var ft = {
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
function Yo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Fo(e) {
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
  n: hm,
  classes: gm
} = ee("sticky");
function ym(e, n) {
  return g(), P(
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
      [H(e.$slots, "default")],
      6
    )],
    6
  );
}
const xn = _({
  render: ym,
  name: "VarSticky",
  props: ft,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), i = M("0px"), o = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => De(e.offsetTop)), c, h = () => {
      var {
        cssMode: b,
        disabled: C
      } = e;
      if (!C) {
        var E = 0;
        if (c !== window) {
          var {
            top: w
          } = c.getBoundingClientRect();
          E = w;
        }
        var D = r.value, V = n.value, {
          top: z,
          left: I
        } = V.getBoundingClientRect(), p = z - E;
        return p <= f.value ? (b || (o.value = V.offsetWidth + "px", l.value = V.offsetHeight + "px", t.value = E + f.value + "px", i.value = I + "px", s.value = D.offsetWidth + "px", u.value = D.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: p,
          isFixed: !1
        });
      }
    }, y = () => {
      var b = h();
      b && O(e.onScroll, b.offsetTop, b.isFixed);
    }, S = /* @__PURE__ */ function() {
      var b = Fo(function* () {
        a.value = !1, yield Cu(), h();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var b = Fo(function* () {
        yield Vn(), c = Or(n.value), c !== window && c.addEventListener("scroll", y), window.addEventListener("scroll", y), y();
      });
      return function() {
        return b.apply(this, arguments);
      };
    }(), $ = () => {
      c !== window && c.removeEventListener("scroll", y), window.removeEventListener("scroll", y);
    };
    return oe(() => e.disabled, S), Ai(T), zi($), Ue(T), tr($), {
      n: hm,
      classes: gm,
      resize: S,
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
      toNumber: A
    };
  }
});
xn.install = function(e) {
  e.component(xn.name, xn);
};
var Cs = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), ks = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function bm() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Cs), {
    length: r
  } = pn(ks);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function wm() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Cs), {
    index: r
  } = hn(ks);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var Sm = {
  index: {
    type: [Number, String]
  }
}, {
  n: Cm,
  classes: km
} = ee("index-anchor");
function $m(e, n) {
  return g(), pe(
    La(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [B(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [H(e.$slots, "default", {}, () => [he(
          ne(e.name),
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
const Qr = _({
  render: $m,
  name: "VarIndexAnchor",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: Sm,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = wm(), t = M(0), i = M(!1), o = F(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, h = (S) => {
      i.value = S;
    }, y = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(y), {
      n: Cm,
      classes: km,
      name: o,
      anchorEl: l,
      active: s,
      sticky: u,
      zIndex: f,
      disabled: i,
      cssMode: d,
      stickyOffsetTop: v,
      Transition: Ae
    };
  }
});
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var Tm = {
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
function Ho(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Gt(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Ho(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Ho(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Om,
  classes: Pm
} = ee("index-bar"), Vm = ["onClick"];
function Mm(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [H(e.$slots, "default"), B(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(g(!0), P(
        Pe,
        null,
        Be(e.anchorNameList, (r) => (g(), P(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: K({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          ne(r),
          15,
          Vm
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const xr = _({
  render: Mm,
  name: "VarIndexBar",
  props: Tm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = bm(), t = M(""), i = M(null), o = M(null), l = M([]), s = M(), u = F(() => e.sticky), d = F(() => e.cssMode), v = F(() => De(e.stickyOffsetTop)), f = F(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = ($) => {
      var b = Ui($) ? $.name.value : $;
      b === s.value || b === void 0 || (s.value = b, O(e.onChange, b));
    }, y = () => {
      var $ = Ot(i.value), b = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: C
      } = o.value;
      r.forEach((E, w) => {
        var D = E.ownTop.value, V = $ - D + v.value - C, z = w === r.length - 1 ? b : r[w + 1].ownTop.value - E.ownTop.value;
        V >= 0 && V < z && !t.value && (w && !e.cssMode && r[w - 1].setDisabled(!0), E.setDisabled(!1), h(E));
      });
    }, S = /* @__PURE__ */ function() {
      var $ = Gt(function* (b, C) {
        var {
          offsetTop: E
        } = o.value;
        if (C && O(e.onClick, b), b !== s.value) {
          var w = r.find((z) => {
            var {
              name: I
            } = z;
            return b === I.value;
          });
          if (!!w) {
            var D = w.ownTop.value - v.value + E, V = Hi(i.value);
            t.value = b, h(b), yield Ga(i.value, {
              left: V,
              top: D,
              animation: kl,
              duration: A(e.duration)
            }), Pt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(C, E) {
        return $.apply(this, arguments);
      };
    }(), T = ($) => {
      $n(() => S($));
    };
    return oe(() => n.value, /* @__PURE__ */ Gt(function* () {
      yield Vn(), r.forEach(($) => {
        var {
          name: b,
          setOwnTop: C
        } = $;
        b.value && l.value.push(b.value), C();
      });
    })), Ue(/* @__PURE__ */ Gt(function* () {
      yield Vn(), i.value = Or(o.value), i.value.addEventListener("scroll", y);
    })), Li(() => {
      O(i.value.removeEventListener, "scroll", y);
    }), {
      n: Om,
      classes: Pm,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: A,
      scrollTo: T,
      anchorClick: S
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function Em(e) {
  return ["text", "password", "number"].includes(e);
}
var Im = {
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
    validator: Em
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
  n: qt,
  classes: Nm
} = ee("input"), Bm = ["id", "disabled", "type", "value", "maxlength", "rows"], Dm = ["id", "disabled", "type", "value", "maxlength"], Am = ["for"];
function zm(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
  return g(), P(
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
        [H(e.$slots, "prepend-icon")],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (g(), P(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
        )) : x("v-if", !0), e.textarea ? (g(), P(
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
          Bm
        )) : (g(), P(
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
          Dm
        )), B(
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
          Am
        )],
        2
      ), B(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (g(), pe(
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
      )],
      6
    ), e.line ? (g(), P(
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
  );
}
const hr = _({
  render: zm,
  name: "VarInput",
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  props: Im,
  setup(e) {
    var n = M("var-input-" + Da().uid), r = M(null), a = M(!1), t = F(() => {
      var {
        maxlength: p,
        modelValue: k
      } = e;
      return p ? Nn(k) ? "0 / " + p : String(k).length + "/" + p : "";
    }), {
      bindForm: i,
      form: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = (p) => {
      Me(() => {
        var {
          validateTrigger: k,
          rules: L,
          modelValue: Y
        } = e;
        s(k, p, L, Y);
      });
    }, f = () => {
      var {
        hint: p,
        modelValue: k
      } = e;
      if (!p && !Nn(k))
        return qt("--placeholder-hidden");
      if (p && (!Nn(k) || a.value))
        return qt("--placeholder-hint");
    }, c = (p) => {
      a.value = !0, O(e.onFocus, p), v("onFocus");
    }, h = (p) => {
      a.value = !1, O(e.onBlur, p), v("onBlur");
    }, y = (p) => {
      var k = p.target, {
        value: L
      } = k;
      L = C(b(L)), k.value = L, O(e["onUpdate:modelValue"], L), O(e.onInput, L, p), v("onInput");
    }, S = (p) => {
      var k = p.target, {
        value: L
      } = k;
      L = C(b(L)), k.value = L, O(e.onChange, L, p), v("onChange");
    }, T = () => {
      var {
        disabled: p,
        readonly: k,
        clearable: L,
        onClear: Y
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || p || k || !L || (O(e["onUpdate:modelValue"], ""), O(Y, ""), v("onClear"));
    }, $ = (p) => {
      var {
        disabled: k,
        onClick: L
      } = e;
      o != null && o.disabled.value || k || (O(L, p), v("onClick"));
    }, b = (p) => e.modelModifiers.trim ? p.trim() : p, C = (p) => e.maxlength ? p.slice(0, A(e.maxlength)) : p, E = (p) => {
      var {
        disabled: k,
        readonly: L
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || k || L || p.stopPropagation();
    }, w = () => {
      O(e["onUpdate:modelValue"], ""), d();
    }, D = () => u(e.rules, e.modelValue), V = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, z = () => {
      r.value.blur();
    }, I = {
      reset: w,
      validate: D,
      resetValidation: d
    };
    return O(i, I), Ue(() => {
      e.autofocus && V();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: qt,
      classes: Nm,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: h,
      handleInput: y,
      handleChange: S,
      handleClear: T,
      handleClick: $,
      handleTouchstart: E,
      validate: D,
      resetValidation: d,
      reset: w,
      focus: V,
      blur: z
    };
  }
});
hr.install = function(e) {
  e.component(hr.name, hr);
};
function Lm(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Rm(e) {
  return ["always", "hover", "none"].includes(e);
}
var Um = {
  type: {
    type: String,
    default: "default",
    validator: Lm
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
    validator: Rm
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
  n: Ym,
  classes: Fm
} = ee("link");
function Hm(e, n) {
  return g(), pe(
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
    },
    16,
    ["class", "style", "onClick"]
  );
}
const _r = _({
  render: Hm,
  name: "VarLink",
  props: Um,
  setup(e) {
    var n = F(() => e.disabled ? "span" : e.href ? "a" : e.to ? "router-link" : "a"), r = F(() => {
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
      i || O(o, t);
    };
    return {
      n: Ym,
      classes: Fm,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: Se
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var Wm = {
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
function Wo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function jm(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Wo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Wo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: Gm,
  classes: qm
} = ee("list");
function Km(e, n) {
  var r = le("var-loading"), a = Xe("ripple");
  return g(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [H(e.$slots, "default"), e.loading ? H(e.$slots, "loading", {
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
        ne(e.dt(e.loadingText, e.pack.listLoadingText)),
        3
      ), re(r, {
        size: "mini",
        radius: 10
      })],
      2
    )]) : x("v-if", !0), e.finished ? H(e.$slots, "finished", {
      key: 1
    }, () => [B(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : x("v-if", !0), e.error ? H(e.$slots, "error", {
      key: 2
    }, () => [ke((g(), P(
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
      )],
      2
    )), [[a]])]) : x("v-if", !0), B(
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
const ea = _({
  render: Km,
  name: "VarList",
  directives: {
    Ripple: Fe
  },
  components: {
    VarLoading: On
  },
  props: Wm,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      O(e["onUpdate:error"], !1), O(e["onUpdate:loading"], !0), O(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = jm(function* () {
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
    return Ue(() => {
      a = Or(n.value), e.immediateCheck && o(), a.addEventListener("scroll", o);
    }), tr(() => {
      a.removeEventListener("scroll", o);
    }), {
      pack: We,
      listEl: n,
      detectorEl: r,
      dt: Tt,
      isNumber: Ke,
      load: t,
      check: o,
      n: Gm,
      classes: qm
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var Xm = {
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
  classes: Zm,
  n: jo
} = ee("loading-bar");
const Jm = _({
  name: "VarLoadingBar",
  props: Xm,
  setup(e) {
    return () => re("div", {
      class: Zm(jo(), [e.error, jo("--error")]),
      style: {
        zIndex: sn.zIndex + 10,
        width: e.value + "%",
        opacity: e.opacity,
        height: Se(e.height),
        backgroundColor: e.error ? e.errorColor : e.color,
        top: Se(e.top)
      }
    }, null);
  }
});
var $s, Go, ln = Ne({
  value: 0,
  opacity: 0,
  error: !1
}), Qm = (e) => {
  Object.assign(ln, e);
}, Ts = () => {
  $s = window.setTimeout(() => {
    if (!(ln.value >= 95)) {
      var e = Math.random();
      ln.value < 70 && (e = Math.round(5 * Math.random())), ln.value += e, Ts();
    }
  }, 200);
}, xm = () => {
  Go || (Go = !0, Ra(Jm, ln)), (!ln.error || ln.value === 100) && (ln.value = 0), setTimeout(() => {
    ln.opacity = 1;
  }, 200), Ts();
}, _m = () => {
  ln.value = 100, setTimeout(() => {
    ln.opacity = 0, setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, 300), window.clearTimeout($s);
}, ep = () => {
  ln.error = !0, Ka.start(), setTimeout(Ka.finish, 300);
}, Ka = {
  start: xm,
  finish: _m,
  error: ep,
  mergeConfig: Qm
};
function np(e) {
  return ["click", "hover"].includes(e);
}
function rp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var ap = {
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
    validator: np
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: rp
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U()
}, tp = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ct(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return tp[n];
  });
}
var Dn = "top", ar = "bottom", Sr = "right", _n = "left", zt = "auto", Lt = [Dn, ar, Sr, _n], Rt = "start", Xa = "end", ip = "clippingParents", Os = "viewport", Ua = "popper", op = "reference", qo = /* @__PURE__ */ Lt.reduce(function(e, n) {
  return e.concat([n + "-" + Rt, n + "-" + Xa]);
}, []), Ps = /* @__PURE__ */ [].concat(Lt, [zt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Rt, n + "-" + Xa]);
}, []), lp = "beforeRead", sp = "read", up = "afterRead", dp = "beforeMain", vp = "main", fp = "afterMain", cp = "beforeWrite", mp = "write", pp = "afterWrite", Pi = [lp, sp, up, dp, vp, fp, cp, mp, pp];
function An(e) {
  return e.split("-")[0];
}
var hp = {
  start: "end",
  end: "start"
};
function Ko(e) {
  return e.replace(/start|end/g, function(n) {
    return hp[n];
  });
}
function bn(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var n = e.ownerDocument;
    return n && n.defaultView || window;
  }
  return e;
}
function Cr(e) {
  var n = bn(e).Element;
  return e instanceof n || e instanceof Element;
}
function cn(e) {
  var n = bn(e).HTMLElement;
  return e instanceof n || e instanceof HTMLElement;
}
function Ji(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = bn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function or(e) {
  return ((Cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Wa = Math.max, Xo = Math.min, Ia = Math.round;
function Vi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Vs() {
  return !/^((?!chrome|android).)*safari/i.test(Vi());
}
function Na(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && cn(e) && (t = e.offsetWidth > 0 && Ia(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ia(a.height) / e.offsetHeight || 1);
  var o = Cr(e) ? bn(e) : window, l = o.visualViewport, s = !Vs() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
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
function Qi(e) {
  var n = bn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function xi(e) {
  return Na(or(e)).left + Qi(e).scrollLeft;
}
function gp(e, n) {
  var r = bn(e), a = or(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = Vs();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + xi(e),
    y: s
  };
}
function Tn(e) {
  return bn(e).getComputedStyle(e);
}
function yp(e) {
  var n, r = or(e), a = Qi(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Wa(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Wa(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + xi(e), s = -a.scrollTop;
  return Tn(t || r).direction === "rtl" && (l += Wa(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function En(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Ut(e) {
  return En(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ji(e) ? e.host : null) || or(e);
}
function _i(e) {
  var n = Tn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Ms(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : cn(e) && _i(e) ? e : Ms(Ut(e));
}
function ja(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Ms(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bn(a), o = t ? [i].concat(i.visualViewport || [], _i(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(ja(Ut(o)));
}
function bp(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function Zo(e) {
  return !cn(e) || Tn(e).position === "fixed" ? null : e.offsetParent;
}
function wp(e) {
  var n = /firefox/i.test(Vi()), r = /Trident/i.test(Vi());
  if (r && cn(e)) {
    var a = Tn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Ut(e);
  for (Ji(t) && (t = t.host); cn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var i = Tn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function eo(e) {
  for (var n = bn(e), r = Zo(e); r && bp(r) && Tn(r).position === "static"; )
    r = Zo(r);
  return r && (En(r) === "html" || En(r) === "body" && Tn(r).position === "static") ? n : r || wp(e) || n;
}
function Sp(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Ji(r)) {
    var a = n;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function Mi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Cp(e, n) {
  var r = Na(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Jo(e, n, r) {
  return n === Os ? Mi(gp(e, r)) : Cr(n) ? Cp(n, r) : Mi(yp(or(e)));
}
function kp(e) {
  var n = ja(Ut(e)), r = ["absolute", "fixed"].indexOf(Tn(e).position) >= 0, a = r && cn(e) ? eo(e) : e;
  return Cr(a) ? n.filter(function(t) {
    return Cr(t) && Sp(t, a) && En(t) !== "body";
  }) : [];
}
function $p(e, n, r, a) {
  var t = n === "clippingParents" ? kp(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Jo(e, u, a);
    return s.top = Wa(d.top, s.top), s.right = Xo(d.right, s.right), s.bottom = Xo(d.bottom, s.bottom), s.left = Wa(d.left, s.left), s;
  }, Jo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Za(e) {
  return e.split("-")[1];
}
function Tp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Es(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? An(a) : null, i = a ? Za(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
  switch (t) {
    case Dn:
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
  var u = t ? Tp(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Rt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Xa:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Op() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Pp(e) {
  return Object.assign({}, Op(), e);
}
function Vp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Is(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? ip : l, u = r.rootBoundary, d = u === void 0 ? Os : u, v = r.elementContext, f = v === void 0 ? Ua : v, c = r.altBoundary, h = c === void 0 ? !1 : c, y = r.padding, S = y === void 0 ? 0 : y, T = Pp(typeof S != "number" ? S : Vp(S, Lt)), $ = f === Ua ? op : Ua, b = e.rects.popper, C = e.elements[h ? $ : f], E = $p(Cr(C) ? C : C.contextElement || or(e.elements.popper), s, d, o), w = Na(e.elements.reference), D = Es({
    reference: w,
    element: b,
    strategy: "absolute",
    placement: t
  }), V = Mi(Object.assign({}, b, D)), z = f === Ua ? V : w, I = {
    top: E.top - z.top + T.top,
    bottom: z.bottom - E.bottom + T.bottom,
    left: E.left - z.left + T.left,
    right: z.right - E.right + T.right
  }, p = e.modifiersData.offset;
  if (f === Ua && p) {
    var k = p[t];
    Object.keys(I).forEach(function(L) {
      var Y = [Sr, ar].indexOf(L) >= 0 ? 1 : -1, G = [Dn, ar].indexOf(L) >= 0 ? "y" : "x";
      I[L] += k[G] * Y;
    });
  }
  return I;
}
function Mp(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Ps : s, d = Za(a), v = d ? l ? qo : qo.filter(function(h) {
    return Za(h) === d;
  }) : Lt, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, y) {
    return h[y] = Is(e, {
      placement: y,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[An(y)], h;
  }, {});
  return Object.keys(c).sort(function(h, y) {
    return c[h] - c[y];
  });
}
function Ep(e) {
  if (An(e) === zt)
    return [];
  var n = ct(e);
  return [Ko(e), n, Ko(n)];
}
function Ip(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, y = r.allowedAutoPlacements, S = n.options.placement, T = An(S), $ = T === S, b = s || ($ || !h ? [ct(S)] : Ep(S)), C = [S].concat(b).reduce(function(te, ie) {
      return te.concat(An(ie) === zt ? Mp(n, {
        placement: ie,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: y
      }) : ie);
    }, []), E = n.rects.reference, w = n.rects.popper, D = /* @__PURE__ */ new Map(), V = !0, z = C[0], I = 0; I < C.length; I++) {
      var p = C[I], k = An(p), L = Za(p) === Rt, Y = [Dn, ar].indexOf(k) >= 0, G = Y ? "width" : "height", R = Is(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Y ? L ? Sr : _n : L ? ar : Dn;
      E[G] > w[G] && (J = ct(J));
      var j = ct(J), Z = [];
      if (i && Z.push(R[k] <= 0), l && Z.push(R[J] <= 0, R[j] <= 0), Z.every(function(te) {
        return te;
      })) {
        z = p, V = !1;
        break;
      }
      D.set(p, Z);
    }
    if (V)
      for (var N = h ? 3 : 1, X = function(ie) {
        var ce = C.find(function(ye) {
          var Ye = D.get(ye);
          if (Ye)
            return Ye.slice(0, ie).every(function(Qe) {
              return Qe;
            });
        });
        if (ce)
          return z = ce, "break";
      }, W = N; W > 0; W--) {
        var Q = X(W);
        if (Q === "break")
          break;
      }
    n.placement !== z && (n.modifiersData[a]._skip = !0, n.placement = z, n.reset = !0);
  }
}
const Np = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ip,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Bp(e, n, r) {
  var a = An(e), t = [_n, Dn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
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
function Dp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = Ps.reduce(function(d, v) {
    return d[v] = Bp(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const Ap = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Dp
};
function zp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Lp(e) {
  return e === bn(e) || !cn(e) ? Qi(e) : zp(e);
}
function Rp(e) {
  var n = e.getBoundingClientRect(), r = Ia(n.width) / e.offsetWidth || 1, a = Ia(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Up(e, n, r) {
  r === void 0 && (r = !1);
  var a = cn(n), t = cn(n) && Rp(n), i = or(n), o = Na(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || _i(i)) && (l = Lp(n)), cn(n) ? (s = Na(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = xi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function Yp(e) {
  var n = Na(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Fp(e) {
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
function Hp(e) {
  var n = Fp(e);
  return Pi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Wp(e) {
  var n;
  return function() {
    return n || (n = new Promise(function(r) {
      Promise.resolve().then(function() {
        n = void 0, r(e());
      });
    })), n;
  };
}
function Un(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  return [].concat(r).reduce(function(t, i) {
    return t.replace(/%s/, i);
  }, e);
}
var lr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', jp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Qo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Gp(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Qo).filter(function(r, a, t) {
      return t.indexOf(r) === a;
    }).forEach(function(r) {
      switch (r) {
        case "name":
          typeof n.name != "string" && console.error(Un(lr, String(n.name), '"name"', '"string"', '"' + String(n.name) + '"'));
          break;
        case "enabled":
          typeof n.enabled != "boolean" && console.error(Un(lr, n.name, '"enabled"', '"boolean"', '"' + String(n.enabled) + '"'));
          break;
        case "phase":
          Pi.indexOf(n.phase) < 0 && console.error(Un(lr, n.name, '"phase"', "either " + Pi.join(", "), '"' + String(n.phase) + '"'));
          break;
        case "fn":
          typeof n.fn != "function" && console.error(Un(lr, n.name, '"fn"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "effect":
          n.effect != null && typeof n.effect != "function" && console.error(Un(lr, n.name, '"effect"', '"function"', '"' + String(n.fn) + '"'));
          break;
        case "requires":
          n.requires != null && !Array.isArray(n.requires) && console.error(Un(lr, n.name, '"requires"', '"array"', '"' + String(n.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(n.requiresIfExists) || console.error(Un(lr, n.name, '"requiresIfExists"', '"array"', '"' + String(n.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Qo.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Un(jp, String(n.name), a, a));
      });
    });
  });
}
function qp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Kp(e) {
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
var xo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Xp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", _o = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function el() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function Zp(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? _o : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _o, i),
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
        var $ = typeof T == "function" ? T(d.options) : T;
        y(), d.options = Object.assign({}, i, d.options, $), d.scrollParents = {
          reference: Cr(l) ? ja(l) : l.contextElement ? ja(l.contextElement) : [],
          popper: ja(s)
        };
        var b = Hp(Kp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = b.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = qp([].concat(b, d.options.modifiers), function(p) {
            var k = p.name;
            return k;
          });
          if (Gp(C), An(d.options.placement) === zt) {
            var E = d.orderedModifiers.find(function(p) {
              var k = p.name;
              return k === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var w = Tn(s), D = w.marginTop, V = w.marginRight, z = w.marginBottom, I = w.marginLeft;
          [D, V, z, I].some(function(p) {
            return parseFloat(p);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, $ = T.reference, b = T.popper;
          if (!el($, b)) {
            process.env.NODE_ENV !== "production" && console.error(xo);
            return;
          }
          d.rects = {
            reference: Up($, eo(b), d.options.strategy === "fixed"),
            popper: Yp(b)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var C = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Xp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var w = d.orderedModifiers[E], D = w.fn, V = w.options, z = V === void 0 ? {} : V, I = w.name;
            typeof D == "function" && (d = D({
              state: d,
              options: z,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      update: Wp(function() {
        return new Promise(function(S) {
          c.forceUpdate(), S(d);
        });
      }),
      destroy: function() {
        y(), f = !0;
      }
    };
    if (!el(l, s))
      return process.env.NODE_ENV !== "production" && console.error(xo), c;
    c.setOptions(u).then(function(S) {
      !f && u.onFirstUpdate && u.onFirstUpdate(S);
    });
    function h() {
      d.orderedModifiers.forEach(function(S) {
        var T = S.name, $ = S.options, b = $ === void 0 ? {} : $, C = S.effect;
        if (typeof C == "function") {
          var E = C({
            state: d,
            name: T,
            instance: c,
            options: b
          }), w = function() {
          };
          v.push(E || w);
        }
      });
    }
    function y() {
      v.forEach(function(S) {
        return S();
      }), v = [];
    }
    return c;
  };
}
var lt = {
  passive: !0
};
function Jp(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, lt);
  }), l && s.addEventListener("resize", r.update, lt), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, lt);
    }), l && s.removeEventListener("resize", r.update, lt);
  };
}
const Qp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Jp,
  data: {}
};
function xp(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Es({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const _p = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: xp,
  data: {}
};
var eh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function nh(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ia(n * t) / t || 0,
    y: Ia(r * t) / t || 0
  };
}
function nl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, h = o.y, y = h === void 0 ? 0 : h, S = typeof d == "function" ? d({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  c = S.x, y = S.y;
  var T = o.hasOwnProperty("x"), $ = o.hasOwnProperty("y"), b = _n, C = Dn, E = window;
  if (u) {
    var w = eo(r), D = "clientHeight", V = "clientWidth";
    if (w === bn(r) && (w = or(r), Tn(w).position !== "static" && l === "absolute" && (D = "scrollHeight", V = "scrollWidth")), w = w, t === Dn || (t === _n || t === Sr) && i === Xa) {
      C = ar;
      var z = v && w === E && E.visualViewport ? E.visualViewport.height : w[D];
      y -= z - a.height, y *= s ? 1 : -1;
    }
    if (t === _n || (t === Dn || t === ar) && i === Xa) {
      b = Sr;
      var I = v && w === E && E.visualViewport ? E.visualViewport.width : w[V];
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && eh), k = d === !0 ? nh({
    x: c,
    y
  }) : {
    x: c,
    y
  };
  if (c = k.x, y = k.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[C] = $ ? "0" : "", L[b] = T ? "0" : "", L.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + y + "px)" : "translate3d(" + c + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[C] = $ ? y + "px" : "", n[b] = T ? c + "px" : "", n.transform = "", n));
}
function rh(e) {
  var n = e.state, r = e.options, a = r.gpuAcceleration, t = a === void 0 ? !0 : a, i = r.adaptive, o = i === void 0 ? !0 : i, l = r.roundOffsets, s = l === void 0 ? !0 : l;
  if (process.env.NODE_ENV !== "production") {
    var u = Tn(n.elements.popper).transitionProperty || "";
    o && ["transform", "top", "right", "bottom", "left"].some(function(v) {
      return u.indexOf(v) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var d = {
    placement: An(n.placement),
    variation: Za(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, nl(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, nl(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const ah = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: rh,
  data: {}
};
function th(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !cn(i) || !En(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function ih(e) {
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
      !cn(t) || !En(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const oh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: th,
  effect: ih,
  requires: ["computeStyles"]
};
var lh = [Qp, _p, ah, oh], sh = /* @__PURE__ */ Zp({
  defaultModifiers: lh
});
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
function rl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function al(e) {
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
function Ns(e) {
  var n = M(null), r = M(null), a = M(!1), {
    zIndex: t
  } = _a(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
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
    e.trigger === "hover" && (s = !0, C());
  }, f = /* @__PURE__ */ function() {
    var w = al(function* () {
      e.trigger === "hover" && (s = !1, yield Vn(), !l && E());
    });
    return function() {
      return w.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (l = !0);
  }, h = /* @__PURE__ */ function() {
    var w = al(function* () {
      e.trigger === "hover" && (l = !1, yield Vn(), !s && E());
    });
    return function() {
      return w.apply(this, arguments);
    };
  }(), y = () => {
    C(), o = !0;
  }, S = () => {
    if (o) {
      o = !1;
      return;
    }
    a.value = !1, O(e["onUpdate:show"], !1);
  }, T = () => {
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
  }, $ = () => {
    var {
      placement: w,
      skidding: D,
      distance: V
    } = T(), z = [Ct({}, Np, {
      enabled: a.value
    }), Ct({}, Ap, {
      options: {
        offset: [D, V]
      }
    })];
    return {
      placement: w,
      modifiers: z
    };
  }, b = () => {
    i.setOptions($());
  }, C = () => {
    var {
      disabled: w
    } = e;
    w || (a.value = !0, O(e["onUpdate:show"], !0));
  }, E = () => {
    a.value = !1, O(e["onUpdate:show"], !1);
  };
  return oe(() => e.show, (w) => {
    a.value = w != null ? w : !1;
  }, {
    immediate: !0
  }), oe(() => e.offsetX, b), oe(() => e.offsetY, b), oe(() => e.placement, b), oe(() => a.value, (w) => {
    w ? (b(), O(e.onOpen)) : O(e.onClose);
  }), oe(() => e.trigger, (w) => {
    w === "click" ? document.addEventListener("click", S) : document.removeEventListener("click", S);
  }), oe(() => e.disabled, E), Ue(() => {
    i = sh(n.value, r.value, $()), e.trigger === "click" && document.addEventListener("click", S);
  }), tr(() => {
    document.removeEventListener("click", S), i.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: t,
    host: n,
    hostSize: u,
    handleHostClick: y,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: S,
    handlePopoverMouseenter: c,
    handlePopoverMouseleave: h,
    resize: b,
    open: C,
    close: E
  };
}
var {
  n: uh,
  classes: dh
} = ee("menu");
function vh(e, n) {
  return g(), P(
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
    [H(e.$slots, "default"), (g(), pe(
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
          default: ve(() => [ke(B(
            "div",
            {
              ref: "popover",
              style: K({
                zIndex: e.zIndex
              }),
              class: m(e.classes(e.n("menu"), [e.defaultStyle, e.n("--menu-background-color") + " " + e.n("$-elevation--3")])),
              onClick: n[0] || (n[0] = Pn(() => {
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
const er = _({
  render: vh,
  name: "VarMenu",
  props: ap,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: i,
      handleHostClick: o,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      open: f,
      close: c,
      resize: h
    } = Ns(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: i,
      n: uh,
      classes: dh,
      handleHostClick: o,
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
er.install = function(e) {
  e.component(er.name, er);
};
var Bs = Symbol("SELECT_BIND_OPTION_KEY"), Ds = Symbol("SELECT_COUNT_OPTION_KEY");
function fh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Bs), {
    length: r
  } = pn(Ds);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function ch() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Bs), {
    index: r
  } = hn(Ds);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var mh = {
  label: {},
  value: {}
}, {
  n: ph,
  classes: hh
} = ee("option");
function gh(e, n) {
  var r = le("var-checkbox"), a = Xe("ripple");
  return ke((g(), P(
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
    ), e.multiple ? (g(), pe(
      r,
      {
        key: 0,
        ref: "checkbox",
        "checked-color": e.focusColor,
        modelValue: e.optionSelected,
        "onUpdate:modelValue": n[0] || (n[0] = (t) => e.optionSelected = t),
        onClick: n[1] || (n[1] = Pn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : x("v-if", !0), B(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [H(e.$slots, "default", {}, () => [he(
        ne(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const na = _({
  render: gh,
  name: "VarOption",
  directives: {
    Ripple: Fe
  },
  components: {
    VarCheckbox: vr
  },
  props: mh,
  setup(e) {
    var n = M(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: i,
      bindSelect: o
    } = ch(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(h);
    }, f = () => d(h), c = (y) => {
      n.value = y;
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
    }), o(h), {
      n: ph,
      classes: hh,
      optionSelected: n,
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      handleClick: v,
      handleSelect: f
    };
  }
});
na.install = function(e) {
  e.component(na.name, na);
};
var yh = {
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
function bh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var {
  n: tl
} = ee("overlay");
const ra = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: yh,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = _a(() => e.show, 1), {
      disabled: i
    } = Wi(), o = () => {
      O(e.onClick), O(e["onUpdate:show"], !1);
    };
    Vt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ve({
      class: tl(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: o
    }), [O(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(Ae, {
        name: tl("--fade")
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
          disabled: i.value
        }, bh(d = s()) ? d : {
          default: () => [d]
        });
      }
      return s();
    };
  }
});
ra.install = function(e) {
  e.component(ra.name, ra);
};
var wh = {
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
  n: Sh,
  classes: Ch
} = ee("pagination"), kh = ["item-mode", "onClick"];
function $h(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), i = le("var-menu"), o = Xe("ripple");
  return g(), P(
    "ul",
    {
      class: m(e.n())
    },
    [ke((g(), P(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [H(e.$slots, "prev", {}, () => [re(r, {
        name: "chevron-left"
      })])],
      2
    )), [[o, {
      disabled: e.current <= 1 || e.disabled
    }]]), e.simple ? (g(), P(
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
          onKeydown: n[3] || (n[3] = io((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), B("span", null, [he(
        " / " + ne(e.pageCount) + " ",
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
    )) : (g(!0), P(
      Pe,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => ke((g(), P(
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
        )],
        10,
        kh
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), ke((g(), P(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [H(e.$slots, "next", {}, () => [re(r, {
        name: "chevron-right"
      })])],
      2
    )), [[o, {
      disabled: e.current >= e.pageCount || e.disabled
    }]]), e.showSizeChanger ? (g(), P(
      "li",
      {
        key: 2,
        class: m(e.classes(e.n("size"), [e.disabled, e.n("item--disabled")]))
      },
      [re(
        i,
        {
          show: e.menuVisible,
          "onUpdate:show": n[6] || (n[6] = (l) => e.menuVisible = l),
          "offset-x": -4
        },
        {
          menu: ve(() => [(g(!0), P(
            Pe,
            null,
            Be(e.sizeOption, (l, s) => ke((g(), pe(
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
                )]),
                _: 2
              },
              1032,
              ["class", "onClick"]
            )), [[o]])),
            128
          ))]),
          default: ve(() => [B(
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
              ne(e.size) + ne(e.pack.paginationItem) + " / " + ne(e.pack.paginationPage),
              1
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
          )]),
          _: 1
        },
        8,
        ["show"]
      )],
      2
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (g(), P(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [he(
        ne(e.pack.paginationJump) + " ",
        1
      ), re(
        a,
        {
          modelValue: e.inputValue,
          "onUpdate:modelValue": n[7] || (n[7] = (l) => e.inputValue = l),
          disabled: e.disabled,
          "var-pagination-cover": "",
          onBlur: n[8] || (n[8] = (l) => e.setPage("quick", e.inputValue, l)),
          onKeydown: n[9] || (n[9] = io((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : x("v-if", !0), e.totalText ? (g(), P(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      ne(e.totalText),
      3
    )) : x("v-if", !0)],
    2
  );
}
const aa = _({
  render: $h,
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
  props: wh,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), i = M(!1), o = M(A(e.current) || 1), l = M(A(e.size) || 10), s = M([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(A(e.total) / A(l.value))), v = F(() => {
      var C = l.value * (o.value - 1) + 1, E = Math.min(l.value * o.value, A(e.total));
      return [C, E];
    }), f = F(() => e.showTotal ? e.showTotal(A(e.total), v.value) : ""), c = (C, E) => Ke(C) ? !1 : E === 1 ? t.value : i.value, h = (C, E) => Ke(C) ? "basic" : E === 1 ? "head" : "tail", y = (C, E) => {
      C === o.value || e.disabled || (Ke(C) ? o.value = C : C === "prev" ? o.value > 1 && (o.value -= 1) : C === "next" ? o.value < d.value && (o.value += 1) : C === "..." && (E === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, S = () => {
      e.disabled || (n.value = !0);
    }, T = (C) => {
      l.value = C, n.value = !1;
    }, $ = (C) => {
      var E = /^[1-9][0-9]*$/;
      return E.test(C);
    }, b = (C, E, w) => {
      if (w.target.blur(), $(E)) {
        var D = A(E);
        D > d.value && (D = d.value, a.value = "" + D), D !== o.value && (o.value = D);
      }
      C === "quick" && (r.value = ""), C === "simple" && !$(E) && (a.value = "" + o.value);
    };
    return oe([() => e.current, () => e.size], (C) => {
      var [E, w] = C;
      o.value = A(E) || 1, l.value = A(w || 10);
    }), oe([o, l], (C, E) => {
      var [w, D] = C, [V, z] = E;
      if (w > d.value) {
        o.value = d.value;
        return;
      }
      var I = [], {
        maxPagerCount: p,
        total: k,
        onChange: L
      } = e, Y = Math.ceil(A(k) / A(z)), G = d.value - (p - u.value) - 1;
      if (a.value = "" + w, d.value - 2 > p) {
        if (V === void 0 || d.value !== Y)
          for (var R = 2; R < p + 2; R++)
            I.push(R);
        if (w <= p && w < G) {
          I = [];
          for (var J = 1; J < p + 1; J++)
            I.push(J + 1);
          t.value = !0, i.value = !1;
        }
        if (w > p && w < G) {
          I = [];
          for (var j = 1; j < p + 1; j++)
            I.push(w + j - u.value);
          t.value = w === 2 && p === 1, i.value = !1;
        }
        if (w >= G) {
          I = [];
          for (var Z = 1; Z < p + 1; Z++)
            I.push(d.value - (p - Z) - 1);
          t.value = !1, i.value = !0;
        }
        I = [1, "...", ...I, "...", d.value];
      } else
        for (var N = 1; N <= d.value; N++)
          I.push(N);
      s.value = I, V !== void 0 && d.value > 0 && O(L, w, D), O(e["onUpdate:current"], w), O(e["onUpdate:size"], D);
    }, {
      immediate: !0
    }), {
      n: Sh,
      classes: Ch,
      pack: We,
      current: o,
      menuVisible: n,
      size: l,
      pageCount: d,
      pageList: s,
      inputValue: r,
      simpleValue: a,
      totalText: f,
      getMode: h,
      isHideEllipsis: c,
      clickItem: y,
      showMenu: S,
      clickSize: T,
      setPage: b,
      toNumber: A
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
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
var Th = Ei({
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
  onChange: U(),
  onConfirm: U(),
  onCancel: U()
}, qe(xa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: Oh,
  classes: Ph
} = ee("picker"), il = 300, Vh = 15, ol = 0, Mh = ["onTouchstart", "onTouchmove", "onTouchend"], Eh = ["onTransitionend"];
function Ih(e, n) {
  var r = le("var-button");
  return g(), pe(
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
      default: ve(() => [B(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [B(
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
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), H(e.$slots, "title", {}, () => [B(
            "div",
            {
              class: m(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
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
          [(g(!0), P(
            Pe,
            null,
            Be(e.scrollColumns, (a) => (g(), P(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
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
                [(g(!0), P(
                  Pe,
                  null,
                  Be(a.column.texts, (t) => (g(), P(
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
                      ne(e.textFormatter(t, a.columnIndex)),
                      3
                    )],
                    6
                  ))),
                  128
                ))],
                46,
                Eh
              )],
              42,
              Mh
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
const gr = _({
  render: Ih,
  name: "VarPicker",
  components: {
    VarButton: an,
    VarPopup: Cn
  },
  inheritAttrs: !1,
  props: Th,
  setup(e) {
    var n = M([]), r = F(() => De(e.optionHeight)), a = F(() => De(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), i = F(() => a.value * r.value), o = [], l = (p, k) => {
      k.scrollEl = p;
    }, s = (p) => {
      O(e["onUpdate:show"], p);
    }, u = (p) => {
      var k = r.value + t.value, L = t.value - p.column.texts.length * r.value;
      p.translate >= k && (p.translate = k), p.translate <= L && (p.translate = L);
    }, d = (p, k) => {
      var {
        length: L
      } = p.column.texts;
      return k = k >= L ? L - 1 : k, k = k <= 0 ? 0 : k, k;
    }, v = (p) => {
      var k = Math.round((t.value - p.translate) / r.value);
      return d(p, k);
    }, f = () => {
      var p = n.value.map((L) => L.column.texts[L.index]), k = n.value.map((L) => L.index);
      return {
        texts: p,
        indexes: k
      };
    }, c = function(p, k, L, Y) {
      Y === void 0 && (Y = !1);
      var G = t.value - d(p, k) * r.value;
      G === p.translate && (p.scrolling = !1, !Y && D(p)), p.translate = G, p.duration = L;
    }, h = (p, k, L) => {
      p.translate += Math.abs(k / L) / 3e-3 * (k < 0 ? -1 : 1);
    }, y = (p, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = Ht(k.scrollEl);
    }, S = (p, k) => {
      if (!!k.touching) {
        var {
          clientY: L
        } = p.touches[0], Y = k.prevY !== void 0 ? L - k.prevY : 0;
        k.prevY = L, k.translate += Y, u(k);
        var G = performance.now();
        G - k.momentumTime > il && (k.momentumTime = G, k.momentumPrevY = k.translate);
      }
    }, T = (p, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var L = k.translate - k.momentumPrevY, Y = performance.now() - k.momentumTime, G = Math.abs(L) >= Vh && Y <= il;
      G && h(k, L, Y), k.index = v(k), c(k, k.index, G ? 1e3 : 200);
    }, $ = (p) => {
      p.scrolling = !1, D(p);
    }, b = (p) => p.map((k, L) => {
      var Y, G = be(k) ? {
        texts: k
      } : k, R = {
        id: ol++,
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
    }), C = (p) => {
      var k = [];
      return E(k, p, 0, !0), k;
    }, E = function(p, k, L, Y) {
      if (Y === void 0 && (Y = !1), be(k) && k.length) {
        var G, R = Y && (G = e.cascadeInitialIndexes[p.length]) != null ? G : 0, J = {
          id: ol++,
          prevY: void 0,
          momentumPrevY: void 0,
          touching: !1,
          translate: t.value,
          index: R,
          columnIndex: L,
          duration: 0,
          momentumTime: 0,
          column: {
            texts: k.map((j) => j[e.textKey])
          },
          columns: k,
          scrollEl: null,
          scrolling: !1
        };
        p.push(J), c(J, J.index, 0, !0), E(p, J.columns[J.index].children, L + 1, Y);
      }
    }, w = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), E(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, D = (p) => {
      var {
        cascade: k,
        onChange: L
      } = e;
      k && w(p);
      var Y = n.value.some((j) => j.scrolling);
      if (!Y) {
        var {
          texts: G,
          indexes: R
        } = f(), J = R.every((j, Z) => j === o[Z]);
        J || (o = [...R], O(L, G, R));
      }
    }, V = () => {
      if (e.cascade) {
        var p = n.value.find((k) => k.scrolling);
        p && (p.translate = Ht(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, w(p));
      } else
        n.value.forEach((k) => {
          k.translate = Ht(k.scrollEl), k.index = v(k), c(k, k.index, 0);
        });
    }, z = () => {
      V();
      var {
        texts: p,
        indexes: k
      } = f();
      o = [...k], O(e.onConfirm, p, k);
    }, I = () => {
      V();
      var {
        texts: p,
        indexes: k
      } = f();
      o = [...k], O(e.onCancel, p, k);
    };
    return oe(() => e.columns, (p) => {
      n.value = e.cascade ? C(oo(p)) : b(oo(p));
      var {
        indexes: k
      } = f();
      o = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Oh,
      classes: Ph,
      pack: We,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Ae,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: y,
      handleTouchmove: S,
      handleTouchend: T,
      handleTransitionend: $,
      confirm: z,
      cancel: I,
      dt: Tt
    };
  }
});
var nn;
function kr(e) {
  return new Promise((n) => {
    kr.close();
    var r = be(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", nn = a;
    var {
      unmountInstance: t
    } = Ra(gr, a, {
      onConfirm: (i, o) => {
        O(a.onConfirm, i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, nn === a && (nn = null);
      },
      onCancel: (i, o) => {
        O(a.onCancel, i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, nn === a && (nn = null);
      },
      onClose: () => {
        O(a.onClose), n({
          state: "close"
        }), nn === a && (nn = null);
      },
      onClosed: () => {
        O(a.onClosed), t(), nn === a && (nn = null);
      },
      onRouteChange: () => {
        t(), nn === a && (nn = null);
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
  if (nn != null) {
    var e = nn;
    nn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
function Nh(e) {
  return ["linear", "circle"].includes(e);
}
var Bh = {
  mode: {
    type: String,
    default: "linear",
    validator: Nh
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
  n: Dh,
  classes: Ah
} = ee("progress"), zh = ["viewBox"], Lh = ["cx", "cy", "r", "stroke-width"], Rh = ["cx", "cy", "r", "stroke-width"];
function Uh(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (g(), P(
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
        [e.track ? (g(), P(
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
        )) : x("v-if", !0), B(
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
      ), e.label ? (g(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.linearProps.roundValue),
          1
        )])],
        2
      )) : x("v-if", !0)],
      2
    )) : x("v-if", !0), e.mode === "circle" ? (g(), P(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(g(), P(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (g(), P(
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
          Lh
        )) : x("v-if", !0), B(
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
          Rh
        )],
        14,
        zh
      )), e.label ? (g(), P(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.circleProps.roundValue),
          1
        )])],
        2
      )) : x("v-if", !0)],
      6
    )) : x("v-if", !0)],
    2
  );
}
const ta = _({
  render: Uh,
  name: "VarProgress",
  props: Bh,
  setup(e) {
    var n = F(() => {
      var a = A(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = F(() => {
      var {
        size: a,
        lineWidth: t,
        value: i
      } = e, o = "0 0 " + De(a) + " " + De(a), l = A(i) > 100 ? 100 : Math.round(A(i)), s = (De(a) - De(t)) / 2, u = 2 * Math.PI * s, d = l / 100 * u + ", " + u;
      return {
        viewBox: o,
        radius: s,
        strokeDasharray: d,
        perimeter: u,
        roundValue: l + "%"
      };
    });
    return {
      n: Dh,
      classes: Ah,
      toSizeUnit: Se,
      multiplySizeUnit: _e,
      linearProps: n,
      circleProps: r
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var Yh = {
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
  onRefresh: U(),
  "onUpdate:modelValue": U()
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
function Fh(e) {
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
  n: Hh,
  classes: Wh
} = ee("pull-refresh"), sl = 150;
function jh(e, n) {
  var r = le("var-icon");
  return g(), P(
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
    ), H(e.$slots, "default")],
    34
  );
}
const ia = _({
  render: jh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: Yh,
  setup(e) {
    var n, r, a = M(0), t = M(null), i = M(null), o = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = M(!0), f = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), c = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: y.value ? e.successBgColor : e.bgColor,
      color: y.value ? e.successColor : e.color
    })), h = F(() => Math.abs(2 * a.value)), y = F(() => u.value === "success"), S = () => new Promise((w) => {
      window.setTimeout(() => {
        v.value = !0, w();
      }, sl);
    }), T = (w) => {
      !f.value || (u.value = "pulling", o.value = w.touches[0].clientY);
    }, $ = (w) => {
      var D = Ot(n);
      if (!(D > 0 || !f.value)) {
        D === 0 && l.value > a.value && w.cancelable && w.preventDefault();
        var V = (w.touches[0].clientY - o.value) / 2 + a.value;
        l.value = V >= h.value ? h.value : V, l.value >= h.value * 0.2 ? (v.value = !1, s.value = "refresh", r = S()) : s.value = "arrow-down";
      }
    }, b = /* @__PURE__ */ function() {
      var w = Fh(function* () {
        !f.value || (d.value = !0, l.value >= h.value * 0.2 ? (yield r, u.value = "loading", l.value = h.value * 0.3, O(e["onUpdate:modelValue"], !0), O(e.onRefresh)) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1;
        }, A(e.animationDuration))));
      });
      return function() {
        return w.apply(this, arguments);
      };
    }(), C = () => {
      var {
        width: w
      } = i.value.getBoundingClientRect();
      l.value = -(w + w * 0.25), a.value = -(w + w * 0.25);
    }, E = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, A(e.animationDuration));
    };
    return oe(() => e.modelValue, (w) => {
      w === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, E();
      }, A(e.successDuration)));
    }), Ue(() => {
      n = Or(t.value), C();
    }), {
      n: Hh,
      classes: Wh,
      iconHasChanged: v,
      ICON_TRANSITION: sl,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: T,
      touchMove: $,
      touchEnd: b,
      iconName: s,
      controlStyle: c,
      isSuccess: y
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Gh = {
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
}, As = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), zs = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function qh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(As), {
    length: r
  } = pn(zs);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Kh() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(As), {
    index: r
  } = hn(zs);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Xh,
  classes: Zh
} = ee("radio");
function Jh(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return g(), P(
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
      [ke((g(), P(
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
      )), [[t, {
        disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
      }]]), B(
        "div",
        {
          class: m(e.classes(e.n("text"), [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")]))
        },
        [H(e.$slots, "default")],
        2
      )],
      16
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
  );
}
const oa = _({
  render: Jh,
  name: "VarRadio",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  inheritAttrs: !1,
  props: Gh,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Kh(), {
      form: o,
      bindForm: l
    } = yn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = gn(), f = (C) => {
      Me(() => {
        var {
          validateTrigger: E,
          rules: w,
          modelValue: D
        } = e;
        u(E, C, w, D);
      });
    }, c = (C) => {
      var {
        checkedValue: E,
        onChange: w
      } = e;
      t && n.value === E || (n.value = C, O(e["onUpdate:modelValue"], n.value), O(w, n.value), t == null || t.onToggle(E), f("onChange"));
    }, h = (C) => {
      var {
        disabled: E,
        readonly: w,
        uncheckedValue: D,
        checkedValue: V,
        onClick: z
      } = e;
      o != null && o.disabled.value || E || (O(z, C), !(o != null && o.readonly.value || w) && (a.value = !0, c(r.value ? D : V)));
    }, y = (C) => {
      var {
        checkedValue: E,
        uncheckedValue: w
      } = e;
      n.value = C === E ? E : w;
    }, S = () => {
      O(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), $ = (C) => {
      var {
        uncheckedValue: E,
        checkedValue: w
      } = e, D = ![E, w].includes(C);
      D && (C = r.value ? E : w), c(C);
    };
    oe(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var b = {
      sync: y,
      validate: T,
      resetValidation: v,
      reset: S
    };
    return O(i, b), O(l, b), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Xh,
      classes: Zh,
      handleClick: h,
      toggle: $,
      reset: S,
      validate: T,
      resetValidation: v
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function Qh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var xh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Qh
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
  n: _h,
  classes: eg
} = ee("radio-group");
function ng(e, n) {
  var r = le("var-form-details");
  return g(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.classes(e.n(), e.n("--" + e.direction)))
      },
      [H(e.$slots, "default")],
      2
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
  );
}
const la = _({
  render: ng,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Ge
  },
  props: xh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = qh(), {
      bindForm: t
    } = yn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = gn(), u = F(() => i.value), d = (S) => {
      Me(() => {
        var {
          validateTrigger: T,
          rules: $,
          modelValue: b
        } = e;
        o(T, S, $, b);
      });
    }, v = () => r.forEach((S) => {
      var {
        sync: T
      } = S;
      return T(e.modelValue);
    }), f = (S) => {
      O(e["onUpdate:modelValue"], S), O(e.onChange, S), d("onChange");
    }, c = () => l(e.rules, e.modelValue), h = () => {
      O(e["onUpdate:modelValue"], void 0), s();
    };
    oe(() => e.modelValue, v), oe(() => n.value, v);
    var y = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return O(t, y), a(y), {
      errorMessage: i,
      n: _h,
      classes: eg,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var rg = {
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
} = ee("rate"), ag = ["onClick"];
function tg(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return g(), P(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [B(
      "div",
      {
        class: m(e.n())
      },
      [(g(!0), P(
        Pe,
        null,
        Be(e.toNumber(e.count), (i) => ke((g(), P(
          "div",
          {
            key: i,
            style: K(e.getStyle(i)),
            class: m(e.getClass(i)),
            onClick: (o) => e.handleClick(i, o)
          },
          [re(
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
          ag
        )), [[t, {
          disabled: e.formReadonly || e.readonly || e.formDisabled || e.disabled || !e.ripple
        }]])),
        128
      ))],
      2
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
  );
}
const sa = _({
  render: tg,
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  directives: {
    Ripple: Fe
  },
  props: rg,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = (S) => {
      var {
        count: T,
        gap: $
      } = e;
      return {
        color: u(S).color,
        marginRight: S !== A(T) ? Se($) : 0
      };
    }, s = (S) => {
      var {
        name: T,
        color: $
      } = u(S);
      return {
        [Ya("content")]: !0,
        [Ya("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ya("--error")]: a.value,
        [Ya("--primary")]: T !== e.emptyIcon && !$
      };
    }, u = (S) => {
      var {
        modelValue: T,
        disabled: $,
        disabledColor: b,
        color: C,
        half: E,
        emptyColor: w,
        icon: D,
        halfIcon: V,
        emptyIcon: z
      } = e, I = C;
      return ($ || n != null && n.disabled.value) && (I = b), S <= A(T) ? {
        color: I,
        name: D
      } : E && S <= A(T) + 0.5 ? {
        color: I,
        name: V
      } : {
        color: $ || n != null && n.disabled.value ? b : w,
        name: z
      };
    }, d = (S, T) => {
      if (e.half) {
        var {
          offsetWidth: $
        } = T.target;
        T.offsetX <= Math.floor($ / 2) && (S -= 0.5);
      }
      O(e["onUpdate:modelValue"], S);
    }, v = () => i(e.rules, A(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (S, T) => {
      var {
        readonly: $,
        disabled: b,
        onChange: C
      } = e;
      $ || b || n != null && n.disabled.value || n != null && n.readonly.value || (d(S, T), O(C, S), f());
    }, h = () => {
      O(e["onUpdate:modelValue"], 0), o();
    }, y = {
      reset: h,
      validate: v,
      resetValidation: o
    };
    return O(r, y), {
      errorMessage: a,
      formDisabled: n == null ? void 0 : n.disabled,
      formReadonly: n == null ? void 0 : n.readonly,
      getStyle: l,
      getClass: s,
      getCurrentState: u,
      handleClick: c,
      reset: h,
      validate: v,
      resetValidation: o,
      toSizeUnit: Se,
      toNumber: A,
      n: Ya
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
function ig(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var og = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: ig
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
}, lg = (e) => ($r(""), e = e(), Tr(), e), sg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, ug = /* @__PURE__ */ lg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), dg = [ug];
function vg(e, n) {
  return g(), P("svg", sg, dg);
}
const fg = _({
  render: vg
});
var cg = (e) => ($r(""), e = e(), Tr(), e), mg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, pg = /* @__PURE__ */ cg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), hg = [pg];
function gg(e, n) {
  return g(), P("svg", mg, hg);
}
const yg = _({
  render: gg
});
var bg = (e) => ($r(""), e = e(), Tr(), e), wg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Sg = /* @__PURE__ */ bg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), Cg = [Sg];
function kg(e, n) {
  return g(), P("svg", wg, Cg);
}
const $g = _({
  render: kg
});
var {
  n: Tg,
  classes: Og
} = ee("result");
function Pg(e, n) {
  return g(), P(
    Pe,
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
const Vg = _({
  render: Pg,
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
      n: Tg,
      classes: Og,
      toNumber: A
    };
  }
});
var Mg = (e) => ($r(""), e = e(), Tr(), e), Eg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Ig = /* @__PURE__ */ Mg(() => /* @__PURE__ */ B(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), Ng = [Ig];
function Bg(e, n) {
  return g(), P("svg", Eg, Ng);
}
const Dg = _({
  render: Bg
});
var Ag = (e) => ($r(""), e = e(), Tr(), e), zg = {
  viewBox: "-4 -4 32 32"
}, Lg = /* @__PURE__ */ Ag(() => /* @__PURE__ */ B(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), Rg = [Lg];
function Ug(e, n) {
  return g(), P("svg", zg, Rg);
}
const Yg = _({
  render: Ug
});
var {
  n: Fg,
  classes: Hg
} = ee("result");
function Wg(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [H(e.$slots, "image", {}, () => [e.type ? (g(), P(
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
        [(g(), pe(
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
      )],
      2
    )) : x("v-if", !0)]), H(e.$slots, "title", {}, () => [e.title ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
    )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
    )) : x("v-if", !0)]), e.$slots.footer ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [H(e.$slots, "footer")],
      2
    )) : x("v-if", !0)],
    2
  );
}
const ua = _({
  render: Wg,
  name: "VarResult",
  components: {
    Info: fg,
    Success: Vg,
    Warning: $g,
    Error: yg,
    Question: Dg,
    Empty: Yg
  },
  props: og,
  setup(e) {
    var n = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? Se(a) : "var(--result-image-size)") + " * 0.9)";
    }), r = F(() => {
      var {
        imageSize: a
      } = e;
      return "calc(" + (a ? Se(e.imageSize) : "var(--result-image-size)") + " * 0.05)";
    });
    return {
      n: Fg,
      classes: Hg,
      toNumber: A,
      toPxNum: De,
      toSizeUnit: Se,
      circleSize: n,
      borderSize: r
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
function jg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function Gg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var qg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: jg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: Gg
  },
  onClick: U()
}, {
  n: Kg,
  classes: Xg
} = ee("row");
function Zg(e, n) {
  return g(), P(
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
  );
}
const da = _({
  render: Zg,
  name: "VarRow",
  props: qg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Ov(), t = F(() => {
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
    return oe(() => a.value, i), oe(() => e.gutter, i), r(o), {
      n: Kg,
      classes: Xg,
      average: t
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function Jg(e) {
  return ["left", "right", "center"].includes(e);
}
var Qg = {
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
    validator: Jg
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
  n: Kt,
  classes: xg
} = ee("select"), _g = {
  key: 1
};
function ey(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), i = le("var-form-details");
  return g(), P(
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
        [H(e.$slots, "prepend-icon")],
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
        [re(
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
            menu: ve(() => [B(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [H(e.$slots, "default")],
              2
            )]),
            default: ve(() => [B(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [B(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : H(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (g(), P(
                  Pe,
                  {
                    key: 0
                  },
                  [e.chip ? (g(), P(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(g(!0), P(
                      Pe,
                      null,
                      Be(e.labels, (o) => (g(), pe(
                        r,
                        {
                          class: m(e.n("chip")),
                          "var-select-cover": "",
                          closable: "",
                          size: "small",
                          type: e.errorMessage ? "danger" : void 0,
                          key: o,
                          onClick: n[0] || (n[0] = Pn(() => {
                          }, ["stop"])),
                          onClose: () => e.handleClose(o)
                        },
                        {
                          default: ve(() => [he(
                            ne(o),
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
                  )) : (g(), P(
                    "div",
                    {
                      key: 1,
                      class: m(e.n("values"))
                    },
                    ne(e.labels.join(e.separator)),
                    3
                  ))],
                  2112
                )) : (g(), P(
                  "span",
                  _g,
                  ne(e.label),
                  1
                ))])],
                2
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
            ), B(
              "label",
              {
                class: m(e.classes(e.n("placeholder"), e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
                style: K({
                  color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
                })
              },
              ne(e.placeholder),
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
        [H(e.$slots, "append-icon", {}, () => [e.clearable ? (g(), pe(
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
      )],
      6
    ), e.line ? (g(), P(
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
    )) : x("v-if", !0), re(
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
const va = _({
  render: ey,
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: er,
    VarChip: fr,
    VarFormDetails: Ge
  },
  props: Qg,
  setup(e) {
    var n = M(null), r = M(!1), a = F(() => e.multiple), t = F(() => e.focusColor), i = M(""), o = M([]), l = F(() => Nn(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = yn(), {
      length: f,
      options: c,
      bindOptions: h
    } = fh(), {
      errorMessage: y,
      validateWithTrigger: S,
      validate: T,
      resetValidation: $
    } = gn(), b = M(null), C = () => {
      var {
        multiple: W,
        modelValue: Q
      } = e;
      if (W) {
        var te = Q;
        o.value = te.map(D);
      }
      !W && !Nn(Q) && (i.value = D(Q)), !W && Nn(Q) && (i.value = "");
    }, E = (W) => {
      Me(() => {
        var {
          validateTrigger: Q,
          rules: te,
          modelValue: ie
        } = e;
        S(Q, W, te, ie);
      });
    }, w = (W) => {
      var {
        value: Q,
        label: te
      } = W;
      return Q.value != null ? Q.value : te.value;
    }, D = (W) => {
      var Q, te, ie = c.find((ce) => {
        var {
          value: ye
        } = ce;
        return ye.value === W;
      });
      return ie || (ie = c.find((ce) => {
        var {
          label: ye
        } = ce;
        return ye.value === W;
      })), (Q = (te = ie) == null ? void 0 : te.label.value) != null ? Q : "";
    }, V = () => {
      var {
        hint: W,
        modelValue: Q
      } = e;
      if (!W && !Nn(Q))
        return Kt("--placeholder-hidden");
      if (W && (!Nn(Q) || r.value))
        return Kt("--placeholder-hint");
    }, z = () => n.value && window.getComputedStyle(n.value).width || "0px", I = () => {
      var {
        disabled: W,
        readonly: Q,
        onFocus: te
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Q || (s.value = z(), u.value = De(e.offsetY), r.value = !0, O(te), E("onFocus"));
    }, p = () => {
      var {
        disabled: W,
        readonly: Q,
        onBlur: te
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Q || (O(te), E("onBlur"));
    }, k = (W) => {
      var {
        disabled: Q,
        readonly: te,
        multiple: ie,
        onChange: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Q || te)) {
        var ye = ie ? c.filter((Ye) => {
          var {
            selected: Qe
          } = Ye;
          return Qe.value;
        }).map(w) : w(W);
        O(e["onUpdate:modelValue"], ye), O(ce, ye), E("onChange"), !ie && (r.value = !1);
      }
    }, L = () => {
      var {
        disabled: W,
        readonly: Q,
        multiple: te,
        clearable: ie,
        onClear: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || W || Q || !ie)) {
        var ye = te ? [] : void 0;
        O(e["onUpdate:modelValue"], ye), O(ce, ye), E("onClear");
      }
    }, Y = (W) => {
      var {
        disabled: Q,
        onClick: te
      } = e;
      v != null && v.disabled.value || Q || (O(te, W), E("onClick"));
    }, G = (W) => {
      var {
        disabled: Q,
        readonly: te,
        modelValue: ie,
        onClose: ce
      } = e;
      if (!(v != null && v.disabled.value || v != null && v.readonly.value || Q || te)) {
        var ye = ie, Ye = c.find((Ie) => {
          var {
            label: He
          } = Ie;
          return He.value === W;
        }), Qe = ye.filter((Ie) => {
          var He;
          return Ie !== ((He = Ye.value.value) != null ? He : Ye.label.value);
        });
        O(e["onUpdate:modelValue"], Qe), O(ce, Qe), E("onClose");
      }
    }, R = () => {
      var {
        multiple: W,
        modelValue: Q
      } = e;
      if (W) {
        var te = Q;
        c.forEach((ie) => ie.sync(te.includes(w(ie))));
      } else
        c.forEach((ie) => ie.sync(Q === w(ie)));
      C();
    }, J = () => {
      s.value = z(), u.value = De(e.offsetY), r.value = !0;
    }, j = () => {
      r.value = !1;
    }, Z = () => T(e.rules, e.modelValue), N = () => {
      O(e["onUpdate:modelValue"], e.multiple ? [] : void 0), $();
    };
    oe(() => e.multiple, () => {
      var {
        multiple: W,
        modelValue: Q
      } = e;
      if (W && !be(Q))
        throw Error("The modelValue must be an array when multiple is true");
    }), oe(() => e.modelValue, R, {
      deep: !0
    }), oe(() => f.value, R);
    var X = {
      wrapWidth: F(() => s.value),
      multiple: a,
      focusColor: t,
      onSelect: k,
      reset: N,
      validate: Z,
      resetValidation: $
    };
    return h(X), O(d, X), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: y,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: i,
      labels: o,
      isEmptyModelValue: l,
      menuEl: b,
      n: Kt,
      classes: xg,
      computePlaceholderState: V,
      handleFocus: I,
      handleBlur: p,
      handleClear: L,
      handleClick: Y,
      handleClose: G,
      reset: N,
      validate: Z,
      resetValidation: $,
      focus: J,
      blur: j
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var ny = {
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
  n: ry,
  classes: ay
} = ee("skeleton");
function ty(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (g(), P(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [H(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (g(), P(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (g(), P(
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
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (g(), P(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (g(), P(
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
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (g(), P(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (g(), P(
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
          )) : x("v-if", !0), (g(!0), P(
            Pe,
            null,
            Be(e.toNumber(e.rows), (r, a) => (g(), P(
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
        )) : x("v-if", !0)],
        2
      )) : x("v-if", !0)],
      2
    )) : x("v-if", !0), e.loading && e.fullscreen ? (g(), P(
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
    )) : x("v-if", !0)],
    2
  );
}
const fa = _({
  render: ty,
  name: "VarSkeleton",
  props: ny,
  setup() {
    return {
      n: ry,
      classes: ay,
      toSizeUnit: Se,
      toNumber: A
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
function iy(e) {
  return ["always", "normal", "never"].includes(e);
}
var oy = {
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
    validator: iy
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
  onChange: U(),
  onStart: U(),
  onEnd: U(),
  "onUpdate:modelValue": U()
}, {
  n: ul,
  classes: ly
} = ee("slider"), Ee;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ee || (Ee = {}));
var sy = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function uy(e, n) {
  var r = le("var-form-details");
  return g(), P(
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
      ), (g(!0), P(
        Pe,
        null,
        Be(e.thumbList, (a) => (g(), P(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: K({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Pn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Pn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [H(e.$slots, "button", {
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
              ne(a.text),
              1
            )],
            6
          )])],
          46,
          sy
        ))),
        128
      ))],
      2
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
  );
}
const ca = _({
  render: uy,
  name: "VarSlider",
  components: {
    VarFormDetails: Ge
  },
  props: oy,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = () => i(e.rules, e.modelValue), s = () => ({
      startPosition: 0,
      currentLeft: 0,
      active: !1,
      percentValue: 0
    }), u = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = M(null), v = M(0), f = M(!1), c = Ne({
      [Ee.First]: s(),
      [Ee.Second]: s()
    }), h = F(() => A(e.max) - A(e.min)), y = F(() => v.value / h.value * A(e.step)), S = F(() => {
      var {
        modelValue: j,
        range: Z
      } = e, N = [];
      return Z && be(j) ? N = [{
        value: E(j[0]),
        enumValue: Ee.First,
        text: w(j[0])
      }, {
        value: E(j[1]),
        enumValue: Ee.Second,
        text: w(j[1])
      }] : Ke(j) && (N = [{
        value: E(j),
        enumValue: Ee.First,
        text: w(j)
      }]), N;
    }), T = F(() => {
      var {
        activeColor: j,
        range: Z,
        modelValue: N
      } = e, X = Z && be(N) ? E(Math.min(N[0], N[1])) : 0, W = Z && be(N) ? E(Math.max(N[0], N[1])) - X : E(N);
      return {
        width: W + "%",
        left: X + "%",
        background: j
      };
    }), $ = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), b = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[j].active, E = (j) => {
      var {
        min: Z,
        max: N
      } = e;
      return j < A(Z) ? 0 : j > A(N) ? 100 : (j - A(Z)) / h.value * 100;
    }, w = (j) => {
      if (!Ke(j))
        return 0;
      var Z = j;
      Z < Number(e.min) && (Z = Number(e.min)), Z > Number(e.max) && (Z = Number(e.max));
      var N = parseInt("" + Z, 10) === Z;
      return N ? Z : A(Z.toPrecision(5));
    }, D = (j, Z) => {
      var N = [], {
        step: X,
        range: W,
        modelValue: Q,
        onChange: te,
        min: ie
      } = e, ce = A(X), ye = Math.round(j / y.value), Ye = ye * ce + A(ie), Qe = c[Z].percentValue * ce + A(ie);
      if (c[Z].percentValue = ye, W && be(Q) && (N = Z === Ee.First ? [Ye, Q[1]] : [Q[0], Ye]), Qe !== Ye) {
        var Ie = W ? N.map((He) => w(He)) : w(Ye);
        O(te, Ie), O(e["onUpdate:modelValue"], Ie), u();
      }
    }, V = (j) => {
      if (!e.range)
        return Ee.First;
      var Z = c[Ee.First].percentValue * y.value, N = c[Ee.Second].percentValue * y.value, X = Math.abs(j - Z), W = Math.abs(j - N);
      return X <= W ? Ee.First : Ee.Second;
    }, z = (j, Z) => {
      v.value || (v.value = d.value.offsetWidth), !($.value || b.value) && (O(e.onStart), f.value = !0, c[Z].startPosition = j.touches[0].clientX);
    }, I = (j, Z) => {
      if (!($.value || b.value || !f.value)) {
        var N = j.touches[0].clientX - c[Z].startPosition + c[Z].currentLeft;
        c[Z].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), D(N, Z);
      }
    }, p = (j) => {
      var {
        range: Z,
        modelValue: N,
        onEnd: X,
        step: W,
        min: Q
      } = e;
      if (!($.value || b.value)) {
        var te = [];
        c[j].currentLeft = c[j].percentValue * y.value, c[j].active = !1;
        var ie = c[j].percentValue * A(W) + A(Q);
        Z && be(N) && (te = j === Ee.First ? [ie, N[1]] : [N[0], ie]), O(X, Z ? te : ie), f.value = !1;
      }
    }, k = (j) => {
      if (!($.value || b.value) && !j.target.closest("." + ul("thumb"))) {
        var Z = j.clientX - mu(j.currentTarget), N = V(Z);
        D(Z, N), p(N);
      }
    }, L = () => {
      var j = A(e.step);
      return isNaN(j) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : j < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: j,
        modelValue: Z
      } = e;
      return j && !be(Z) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && be(Z) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && be(Z) && Z.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, G = function(j, Z) {
      j === void 0 && (j = e.modelValue), Z === void 0 && (Z = A(e.step));
      var N = (X) => {
        var {
          min: W,
          max: Q
        } = e;
        return X < A(W) ? 0 : X > A(Q) ? h.value / Z : (X - A(W)) / Z;
      };
      e.range && be(j) ? (c[Ee.First].percentValue = N(j[0]), c[Ee.First].currentLeft = c[Ee.First].percentValue * y.value, c[Ee.Second].percentValue = N(j[1]), c[Ee.Second].currentLeft = c[Ee.Second].percentValue * y.value) : Ke(j) && (c[Ee.First].currentLeft = N(j) * y.value);
    }, R = () => {
      var j = e.range ? [0, 0] : 0;
      O(e["onUpdate:modelValue"], j), o();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: o
    };
    return O(n, J), oe([() => e.modelValue, () => e.step], (j) => {
      var [Z, N] = j;
      !L() || !Y() || f.value || G(Z, A(N));
    }), oe(v, () => G()), Ue(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: ul,
      classes: ly,
      Thumbs: Ee,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: $,
      errorMessage: a,
      thumbsProps: c,
      thumbList: S,
      multiplySizeUnit: _e,
      toNumber: A,
      showLabel: C,
      start: z,
      move: I,
      end: p,
      click: k
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
function Ii() {
  return Ii = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ii.apply(this, arguments);
}
function dy(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function vy(e) {
  return no.includes(e);
}
var Ls = {
  type: {
    type: String,
    validator: vy
  },
  position: {
    type: String,
    default: "top",
    validator: dy
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
  loadingType: qe(qn, "type"),
  loadingSize: qe(qn, "size"),
  loadingRadius: qe(qn, "radius"),
  loadingColor: Ii({}, qe(qn, "color"), {
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
  onOpen: U(),
  onOpened: U(),
  onClose: U(),
  onClosed: U(),
  "onUpdate:show": U(),
  _update: {
    type: String
  }
}, {
  n: fy,
  classes: cy
} = ee("snackbar"), my = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function py(e, n) {
  var r = le("var-icon"), a = le("var-loading");
  return ke((g(), P(
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
        [H(e.$slots, "default", {}, () => [he(
          ne(e.content),
          1
        )])],
        2
      ), B(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (g(), pe(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (g(), pe(
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
      )],
      6
    )],
    6
  )), [[za, e.show]]);
}
const Rs = _({
  render: py,
  name: "VarSnackbarCore",
  components: {
    VarLoading: On,
    VarIcon: Oe
  },
  props: Ls,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = _a(() => e.show, 1);
    Vt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? my[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && O(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return oe(() => e.show, (o) => {
      o ? (O(e.onOpen), i()) : o === !1 && (clearTimeout(n.value), O(e.onClose));
    }), oe(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Ue(() => {
      e.show && (O(e.onOpen), i());
    }), {
      SNACKBAR_TYPE: no,
      n: fy,
      classes: cy,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: hy
} = ee("snackbar");
function gy(e, n) {
  var r = le("var-snackbar-core");
  return g(), pe(
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
const ma = _({
  render: gy,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Rs
  },
  props: Ls,
  setup() {
    var {
      disabled: e
    } = Wi();
    return {
      n: hy,
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
function yy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !kt(e);
}
var no = ["loading", "success", "warning", "info", "error"], dl = 0, Ni = !1, Us, Ba = !1, mn = Ne([]), by = {
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
}, wy = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Sy = {
  setup() {
    return () => {
      var e = mn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Ba && (t.position = "top");
        var l = Ba ? "relative" : "absolute", s = Ja({
          position: l
        }, Oy(t.position));
        return re(Rs, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = sn.zIndex;
      return re(ou, Ve(wy, {
        style: {
          zIndex: n
        },
        onAfterEnter: Cy,
        onAfterLeave: ky
      }), yy(e) ? e : {
        default: () => [e]
      });
    };
  }
}, zn = function(e) {
  var n = Ze(e) || Ke(e) ? {
    content: String(e)
  } : e, r = Ne(Ja({}, by, n));
  r.show = !0, Ni || (Ni = !0, Us = Ra(Sy).unmountInstance);
  var {
    length: a
  } = mn, t = {
    id: dl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ba)
    $y(t);
  else {
    var i = "update-" + dl;
    Ty(r, i);
  }
  return {
    clear() {
      !Ba && mn.length ? mn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
no.forEach((e) => {
  zn[e] = (n) => (Ui(n) ? n.type = e : n = {
    content: n,
    type: e
  }, zn(n));
});
zn.install = function(e) {
  e.component(ma.name, ma);
};
zn.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Ba && (mn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Ba = e);
};
zn.clear = function() {
  mn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
zn.Component = ma;
function Cy(e) {
  var n = e.getAttribute("data-id"), r = mn.find((a) => a.id === A(n));
  r && O(r.reactiveSnackOptions.onOpened);
}
function ky(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = mn.find((t) => t.id === A(n));
  r && (r.animationEnd = !0, O(r.reactiveSnackOptions.onClosed));
  var a = mn.every((t) => t.animationEnd);
  a && (O(Us), mn = Ne([]), Ni = !1);
}
function $y(e) {
  mn.push(e);
}
function Ty(e, n) {
  var [r] = mn;
  r.reactiveSnackOptions = Ja({}, r.reactiveSnackOptions, e), r._update = n;
}
function Oy(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Ys = (e) => ["mini", "small", "normal", "large"].includes(e), Py = (e) => Ys(e) || be(e) || Ke(e) || Ze(e), Vy = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), My = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Py
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
    validator: Vy
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function on(e) {
  return "calc(" + e + " / 2)";
}
function Ey(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: i,
    lastIndex: o
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? i !== o ? l = on(e) + " " + n + " " + on(e) + " 0" : l = on(e) + " 0" : t === "space-around" ? l = on(e) + " " + on(n) : t === "space-between" && (i === 0 ? l = on(e) + " " + on(n) + " " + on(e) + " 0" : i === o ? l = on(e) + " 0 " + on(e) + " " + on(n) : l = on(e) + " " + on(n))), a === "column" && i !== o && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Xt,
  classes: Iy
} = ee("space");
const pa = _({
  name: "VarSpace",
  props: My,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? ["var(--space-size-" + i + "-y)", "var(--space-size-" + i + "-x)"] : be(i) ? i.map(Se) : [Se(i), Se(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (i = O(r.default)) != null ? i : [], c = Ys(v), [h, y] = a(v, c), S = (b) => {
        var C = [];
        return b.forEach((E) => {
          if (E.type !== lu) {
            if (E.type === Pe && be(E.children)) {
              E.children.forEach((w) => {
                C.push(w);
              });
              return;
            }
            C.push(E);
          }
        }), C;
      };
      f = S(f);
      var T = f.length - 1, $ = f.map((b, C) => {
        var E = Ey(h, y, {
          direction: d,
          justify: l,
          index: C,
          lastIndex: T
        });
        return re("div", {
          style: {
            margin: E
          }
        }, [b]);
      });
      return re("div", {
        class: Iy(Xt(), Xt("$--box"), [o, Xt("--inline")]),
        style: {
          flexDirection: d,
          justifyContent: t(l),
          alignItems: t(s),
          flexWrap: u ? "wrap" : "nowrap",
          margin: d === "row" ? "calc(-1 * " + h + " / 2) 0" : void 0
        }
      }, [$]);
    };
  }
});
pa.install = function(e) {
  e.component(pa.name, pa);
};
var Ny = {
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
}, Fs = Symbol("STEPS_BIND_STEP_KEY"), Hs = Symbol("STEPS_COUNT_STEP_KEY");
function By() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Fs), {
    length: r
  } = pn(Hs);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Dy() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Fs), {
    index: r
  } = hn(Hs);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Ay,
  classes: zy
} = ee("step"), Ly = {
  key: 3
};
function Ry(e, n) {
  var r = le("var-icon");
  return g(), P(
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
          [e.isActive ? (g(), pe(
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
          )) : e.isCurrent && e.currentIcon ? (g(), pe(
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
          )) : e.inactiveIcon ? (g(), pe(
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
          )) : (g(), P(
            "span",
            Ly,
            ne(e.index + 1),
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
          [H(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? x("v-if", !0) : (g(), P(
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
const ha = _({
  render: Ry,
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: Ny,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = Dy(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => o.value === a.value), c = F(() => a.value !== -1 && o.value > a.value), h = {
      index: a
    }, y = () => v(a.value), S = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(h), oe(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var $ = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + $ + "px";
      }
    }), {
      n: Ay,
      classes: zy,
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
      getRef: S
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
function Uy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Yy = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Uy
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Fy
} = ee("steps");
function Hy(e, n) {
  return g(), P(
    "div",
    {
      class: m(e.n()),
      style: K({
        flexDirection: e.direction === "horizontal" ? "row" : "column"
      })
    },
    [H(e.$slots, "default")],
    6
  );
}
const ga = _({
  render: Hy,
  name: "VarSteps",
  props: Yy,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: i,
      bindStep: o
    } = By(), l = (u) => {
      O(e.onClickStep, u);
    }, s = {
      active: n,
      length: i,
      direction: t,
      activeColor: r,
      inactiveColor: a,
      clickStep: l
    };
    return o(s), {
      n: Fy
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var {
  n: Wy
} = ee("style-provider");
const ya = _({
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
    return () => wl(e.tag, {
      class: Wy(),
      style: Vl(e.styleVars)
    }, O(r.default));
  }
});
var Zt = [];
function Qa(e) {
  Zt.forEach((r) => document.documentElement.style.removeProperty(r)), Zt.length = 0;
  var n = Vl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Zt.push(a);
  });
}
Qa.Component = ya;
ya.install = function(e) {
  e.component(ya.name, ya);
};
Qa.install = function(e) {
  e.component(ya.name, ya);
};
var jy = {
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
  n: Gy,
  classes: qy
} = ee("switch");
function Ky(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = Xe("ripple");
  return g(), P(
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
      ), ke((g(), P(
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
          [e.loading ? (g(), pe(
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
        )],
        6
      )), [[t, {
        disabled: !e.ripple || e.disabled || e.loading || e.formDisabled
      }]])],
      6
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
  );
}
const ba = _({
  render: Ky,
  name: "VarSwitch",
  components: {
    VarLoading: On,
    VarFormDetails: Ge
  },
  directives: {
    Ripple: Fe
  },
  props: jy,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = () => i(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = F(() => {
      var {
        size: h,
        modelValue: y,
        color: S,
        closeColor: T,
        loadingColor: $,
        activeValue: b
      } = e;
      return {
        handle: {
          width: _e(h),
          height: _e(h),
          backgroundColor: y === b ? S : T,
          color: $
        },
        ripple: {
          left: y === b ? _e(h, 0.5) : "-" + _e(h, 0.5),
          color: y === b ? S : T || "#999",
          width: _e(h, 2),
          height: _e(h, 2)
        },
        track: {
          height: _e(h, 0.72),
          width: _e(h, 1.9),
          borderRadius: _e(h, 2 / 3),
          filter: y === b || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: y === b ? S : T
        },
        switch: {
          height: _e(h, 1.2),
          width: _e(h, 2)
        }
      };
    }), d = F(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return _e(h, 0.4);
    }), v = (h) => {
      var {
        onClick: y,
        onChange: S,
        disabled: T,
        loading: $,
        readonly: b,
        modelValue: C,
        activeValue: E,
        inactiveValue: w,
        "onUpdate:modelValue": D
      } = e;
      if (O(y, h), !(T || $ || b || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var V = C === E ? w : E;
        O(S, V), O(D, V), s();
      }
    }, f = () => {
      O(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return O(n, c), {
      n: Gy,
      classes: qy,
      switchActive: v,
      radius: d,
      styleComputed: u,
      errorMessage: a,
      formDisabled: r == null ? void 0 : r.disabled,
      formReadonly: r == null ? void 0 : r.readonly
    };
  }
});
ba.install = function(e) {
  e.component(ba.name, ba);
};
var Xy = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, Ws = Symbol("TABS_BIND_TAB_KEY"), js = Symbol("TABS_COUNT_TAB_KEY");
function Zy() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Ws), {
    length: r
  } = pn(js);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Jy() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ws), {
    index: r
  } = hn(js);
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
  classes: Qy
} = ee("tab");
function xy(e, n) {
  var r = Xe("ripple");
  return ke((g(), P(
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
  )), [[r, {
    disabled: e.disabled
  }]]);
}
const wa = _({
  render: xy,
  name: "VarTab",
  directives: {
    Ripple: Fe
  },
  props: Xy,
  setup(e) {
    var n = M(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = Jy(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = o, y = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(y);
    var S = () => {
      var {
        disabled: b,
        name: C
      } = e;
      return b ? f.value : u.value === C || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: b,
        name: C
      } = e;
      return b ? st("$-tab--disabled") : u.value === C || u.value === (i == null ? void 0 : i.value) ? st("$-tab--active") : st("$-tab--inactive");
    }, $ = (b) => {
      var {
        disabled: C,
        name: E,
        onClick: w
      } = e;
      C || (O(w, E != null ? E : i.value, b), s(y));
    };
    return oe(() => e.name, h), oe(() => e.disabled, h), {
      n: st,
      classes: Qy,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: S,
      computeColorClass: T,
      handleClick: $
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Gs = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), qs = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function _y() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Gs), {
    length: r
  } = pn(qs);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function e0() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Gs), {
    index: r
  } = hn(qs);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var n0 = {
  name: {
    type: [String, Number]
  }
}, {
  n: r0,
  classes: a0
} = ee("tab-item");
function t0(e, n) {
  var r = le("var-swipe-item");
  return g(), pe(
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
    },
    8,
    ["class"]
  );
}
const Sa = _({
  render: t0,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Qn
  },
  props: n0,
  setup(e) {
    var n = M(!1), r = M(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: i
    } = e0(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: r0,
      classes: a0,
      current: n,
      initSlot: r
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var {
  n: i0,
  classes: o0
} = ee("table");
function l0(e, n) {
  return g(), P(
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
        [H(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.n("footer"))
      },
      [H(e.$slots, "footer")],
      2
    )) : x("v-if", !0)],
    2
  );
}
const Ca = _({
  render: l0,
  name: "VarTable",
  props: {
    fullWidth: {
      type: [Number, String],
      default: "100%"
    }
  },
  setup() {
    return {
      toSizeUnit: Se,
      n: i0,
      classes: o0
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
function vl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var s0 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: vl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: vl
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
  stickyCssMode: qe(ft, "cssMode"),
  stickyZIndex: qe(ft, "zIndex"),
  offsetTop: qe(ft, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: U(),
  onChange: U(),
  "onUpdate:active": U()
};
function fl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function cl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        fl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        fl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: u0,
  classes: d0
} = ee("tabs");
function v0(e, n) {
  return g(), pe(
    La(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [B(
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
          [H(e.$slots, "default"), B(
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
    ["css-mode", "offset-top", "z-index"]
  );
}
const ka = _({
  render: v0,
  name: "VarTabs",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: s0,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), i = M(!1), o = M(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = M(null), {
      tabList: c,
      bindTabList: h,
      length: y
    } = Zy(), S = (I) => {
      var p, k = (p = I.name.value) != null ? p : I.index.value, {
        active: L,
        onChange: Y,
        onClick: G
      } = e;
      O(e["onUpdate:active"], k), O(G, k), k !== L && O(Y, k);
    }, T = () => c.find((I) => {
      var {
        name: p
      } = I;
      return e.active === p.value;
    }), $ = (I) => c.find((p) => {
      var {
        index: k
      } = p;
      return (I != null ? I : e.active) === k.value;
    }), b = () => {
      if (y.value !== 0) {
        var {
          active: I
        } = e;
        if (Ke(I)) {
          var p = I > y.value - 1 ? y.value - 1 : 0;
          return O(e["onUpdate:active"], p), $(p);
        }
      }
    }, C = () => {
      i.value = c.length >= 5;
    }, E = (I) => {
      var {
        element: p
      } = I, k = p.value;
      e.layoutDirection === "horizontal" ? (n.value = (k == null ? void 0 : k.offsetWidth) + "px", a.value = (k == null ? void 0 : k.offsetLeft) + "px") : (r.value = (k == null ? void 0 : k.offsetHeight) + "px", t.value = (k == null ? void 0 : k.offsetTop) + "px");
    }, w = (I) => {
      var {
        element: p
      } = I;
      if (!!i.value) {
        var k = o.value, L = p.value;
        if (e.layoutDirection === "horizontal") {
          var Y = L.offsetLeft + L.offsetWidth / 2 - k.offsetWidth / 2;
          Ga(k, {
            left: Y,
            animation: Qt
          });
        } else {
          var G = L.offsetTop + L.offsetHeight / 2 - k.offsetHeight / 2;
          Ga(k, {
            top: G,
            animation: Qt
          });
        }
      }
    }, D = () => {
      var I = T() || $() || b();
      !I || I.disabled.value || (C(), E(I), w(I));
    }, V = /* @__PURE__ */ function() {
      var I = cl(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), z = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: D,
      onTabClick: S
    };
    return h(z), oe(() => y.value, /* @__PURE__ */ cl(function* () {
      yield Vn(), D();
    })), oe(() => e.active, D), Ue(() => window.addEventListener("resize", D)), tr(() => window.removeEventListener("resize", D)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Ae,
      toSizeUnit: Se,
      n: u0,
      classes: d0,
      resize: D,
      resizeSticky: V
    };
  }
});
ka.install = function(e) {
  e.component(ka.name, ka);
};
var f0 = {
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
function ml(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function c0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        ml(i, a, t, o, l, "next", s);
      }
      function l(s) {
        ml(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: m0
} = ee("tabs-items");
function p0(e, n) {
  var r = le("var-swipe");
  return g(), pe(
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
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const $a = _({
  render: p0,
  name: "VarTabsItems",
  components: {
    VarSwipe: Jn
  },
  props: f0,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = _y(), i = (f) => r.find((c) => {
      var {
        name: h
      } = c;
      return f === h.value;
    }), o = (f) => r.find((c) => {
      var {
        index: h
      } = c;
      return f === h.value;
    }), l = (f) => i(f) || o(f), s = (f) => {
      var c, h = l(f);
      !h || (r.forEach((y) => {
        var {
          setCurrent: S
        } = y;
        return S(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((S) => {
        var {
          index: T
        } = S;
        return T.value === f;
      }), y = (c = h.name.value) != null ? c : h.index.value;
      O(e["onUpdate:active"], y);
    }, d = () => n.value, v = {};
    return a(v), oe(() => e.active, s), oe(() => t.value, /* @__PURE__ */ c0(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: m0,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$a.install = function(e) {
  e.component($a.name, $a);
};
const h0 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, g0 = {
  "--badge-default-color": "#555"
}, y0 = {
  "--button-default-color": "#303030"
}, b0 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, w0 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, S0 = {
  "--checkbox-unchecked-color": "#fff"
}, C0 = {
  "--chip-default-color": "#555"
}, k0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, $0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, T0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, O0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, P0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, V0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, M0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, E0 = {
  "--popup-content-background-color": "#1e1e1e"
}, I0 = {
  "--pull-refresh-background": "#303030"
}, N0 = {
  "--radio-unchecked-color": "#fff"
}, B0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, D0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, A0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, z0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, L0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, R0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, U0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, Y0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, F0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, H0 = {
  "--tabs-background": "#1e1e1e"
}, W0 = {
  "--app-bar-color": "#272727"
}, j0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, G0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, q0 = {
  "--menu-background-color": "#272727"
}, K0 = {
  "--breadcrumb-inactive-color": "#aaa"
};
function Bi() {
  return Bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Bi.apply(this, arguments);
}
const X0 = Bi({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, y0, w0, b0, Y0, $0, A0, H0, R0, E0, T0, h0, C0, g0, F0, k0, I0, L0, z0, V0, U0, P0, D0, N0, S0, O0, M0, W0, j0, G0, q0, B0, K0);
var Di = {
  dark: X0
}, fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], pl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function Z0(e) {
  return ["ampm", "24hr"].includes(e);
}
var J0 = {
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
    validator: Z0
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
}, Ks = (e, n) => e === "24hr" || n === "am", ro = (e, n, r) => {
  var a = fn.findIndex((i) => A(i) === A(r)), t = Ks(e, n) ? r : en[a];
  return {
    hourStr: t,
    hourNum: A(t)
  };
}, rn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: A(n),
    minute: A(r),
    second: A(a)
  };
}, Xs = (e) => {
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
  } = ro(t, i, o), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: h,
      minute: y
    } = rn(l);
    f = h === v && a > y;
  }
  if (!l && s) {
    var {
      hour: S,
      minute: T
    } = rn(s);
    f = S === v && a < T;
  }
  if (l && s) {
    var {
      hour: $,
      minute: b
    } = rn(l), {
      hour: C,
      minute: E
    } = rn(s);
    f = C === v && a < E || $ === v && a > b;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Zs = (e) => {
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
  } = ro(t, i, o), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: y,
      minute: S,
      second: T
    } = rn(s);
    c = y === f && S < l || S === l && a > T;
  }
  if (!s && u) {
    var {
      hour: $,
      minute: b,
      second: C
    } = rn(u);
    c = $ === f && b > l || b === l && a > C;
  }
  if (s && u) {
    var {
      hour: E,
      minute: w,
      second: D
    } = rn(s), {
      hour: V,
      minute: z,
      second: I
    } = rn(u);
    c = E === f && w < l || V === f && z > l || E === f && w === l && a > D || V === f && z === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: Q0,
  classes: x0
} = ee("time-picker");
function _0(e, n) {
  return g(), P(
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
    ), (g(!0), P(
      Pe,
      null,
      Be(e.timeScales, (r, a) => (g(), P(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: K(e.getStyle(a, r, !1))
        },
        ne(r),
        7
      ))),
      128
    )), e.format === "24hr" && e.type === "hour" ? (g(), P(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(g(!0), P(
        Pe,
        null,
        Be(e.hours24, (r, a) => (g(), P(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: K(e.getStyle(a, r, !0))
          },
          ne(r),
          7
        ))),
        128
      ))],
      2
    )) : x("v-if", !0)],
    2
  );
}
const eb = _({
  render: _0,
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
    } = n, a = M(null), t = M([]), i = M([]), o = F(() => ({
      transform: "rotate(" + A(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = F(() => {
      if (e.rad !== void 0) {
        var S = e.rad / 30;
        return S >= 0 ? S : S + 12;
      }
    }), s = F(() => e.type === "hour" ? fn : pl), u = (S, T) => {
      var $;
      S = ($ = S) != null ? $ : e.type === "minute" ? e.time.minute : e.time.second;
      var b = e.type === "minute" ? Xs : Zs, C = {
        time: A(S),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: A(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(C, "minute"), b(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var S = e.isInner ? en[l.value] : s.value[l.value];
      return s.value === pl ? u() ? "#bdbdbd" : e.color : f(S) ? "#bdbdbd" : e.color;
    }, v = (S, T) => T ? l.value === S && e.isInner : l.value === S && (!e.isInner || e.type !== "hour"), f = (S) => {
      if (e.type === "hour") {
        if (Ks(e.format, e.ampm))
          return t.value.includes(S);
        var T = fn.findIndex(($) => $ === S);
        return i.value.includes(T);
      }
      return u(S, !0);
    }, c = (S, T, $) => {
      var b = 2 * Math.PI / 12 * S - Math.PI / 2, C = 50 * (1 + Math.cos(b)), E = 50 * (1 + Math.sin(b)), w = () => v(S, $) ? f(T) ? {
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
      } = w();
      return {
        left: C + "%",
        top: E + "%",
        backgroundColor: D,
        color: V
      };
    }, h = () => {
      var {
        width: S,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: S,
        height: T
      };
    }, y = () => {
      if (l.value !== void 0) {
        var S = e.ampm === "am" ? fn : en;
        return yr(S[l.value], 2, "0");
      }
    };
    return oe([l, () => e.isInner], (S, T) => {
      var [$, b] = S, [C, E] = T, w = $ === C && b === E;
      if (!(w || e.type !== "hour" || l.value === void 0)) {
        var D = b ? en[l.value] : y(), V = e.useSeconds ? ":" + e.time.second : "", z = D + ":" + e.time.minute + V;
        e.preventNextUpdate || r("update", z), r("change-prevent-update");
      }
    }), oe(() => e.rad, (S, T) => {
      if (!(e.type === "hour" || S === void 0 || T === void 0)) {
        var $ = S / 6 >= 0 ? S / 6 : S / 6 + 60, b = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if ($ !== b) {
          var C, {
            hourStr: E
          } = ro(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var w = ae().minute($).format("mm"), D = e.useSeconds ? ":" + e.time.second : "";
            C = E + ":" + w + D;
          }
          if (e.type === "second") {
            var V = ae().second($).format("ss"), z = e.useSeconds ? ":" + V : "";
            C = E + ":" + e.time.minute + z;
          }
          r("update", C);
        }
      }
    }), oe([() => e.max, () => e.min, () => e.allowedTime], (S) => {
      var [T, $, b] = S;
      if (t.value = [], T && !$) {
        var {
          hour: C
        } = rn(T), E = fn.filter((J) => A(J) > C), w = en.filter((J) => A(J) > C);
        t.value = [...E, ...w];
      }
      if (!T && $) {
        var {
          hour: D
        } = rn($), V = fn.filter((J) => A(J) < D), z = en.filter((J) => A(J) < D);
        t.value = [...V, ...z];
      }
      if (T && $) {
        var {
          hour: I
        } = rn(T), {
          hour: p
        } = rn($), k = fn.filter((J) => A(J) < p || A(J) > I), L = en.filter((J) => A(J) < p || A(J) > I);
        t.value = [...k, ...L];
      }
      if (b != null && b.hours) {
        var {
          hours: Y
        } = b, G = fn.filter((J) => !Y(A(J))), R = en.filter((J) => !Y(A(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...R])];
      }
      i.value = t.value.map((J) => en.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: Q0,
      classes: x0,
      hours24: en,
      timeScales: s,
      inner: a,
      handStyle: o,
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
  n: nb,
  classes: rb
} = ee("time-picker"), ab = (e) => ($r(""), e = e(), Tr(), e), tb = /* @__PURE__ */ ab(() => /* @__PURE__ */ B(
  "span",
  null,
  ":",
  -1
)), ib = {
  key: 0
};
function ob(e, n) {
  var r = le("clock");
  return g(), P(
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
          ne(e.time.hour),
          3
        ), tb, B(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
        ), e.useSeconds ? (g(), P("span", ib, ":")) : x("v-if", !0), e.useSeconds ? (g(), P(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
        )) : x("v-if", !0)],
        2
      ), e.format === "ampm" ? (g(), P(
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
      )) : x("v-if", !0)],
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
        [re(
          Ae,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ve(() => [(g(), pe(
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
const Ta = _({
  render: ob,
  name: "VarTimePicker",
  components: {
    Clock: eb
  },
  props: J0,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), i = M(!1), o = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), c = M("am"), h = M(!1), y = M(!1), S = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), $ = Ne({
      x: [],
      y: []
    }), b = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (N) => {
      O(e["onUpdate:modelValue"], N), O(e.onChange, N);
    }, E = (N) => N * 57.29577951308232, w = (N) => {
      l.value = !1, y.value = !1, f.value = N;
    }, D = (N) => {
      var {
        disableHour: X
      } = a.value, W = fn.findIndex((ie) => A(ie) === A(S.value.hour)), Q = N === "am" ? fn : en, te = [...Q.slice(W), ...Q.slice(0, W)];
      return te.find((ie, ce) => (i.value = ce !== 0, !X.includes(ie)));
    }, V = (N) => {
      if (!e.readonly) {
        c.value = N;
        var X = D(N);
        if (!!X) {
          var W = e.useSeconds ? ":" + S.value.second : "", Q = yr(X, 2, "0") + ":" + S.value.minute + W;
          C(Q);
        }
      }
    }, z = (N, X) => {
      var W = N >= $.x[0] && N <= $.x[1], Q = X >= $.y[0] && X <= $.y[1];
      return W && Q;
    }, I = (N) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: Q,
        second: te
      } = rn(N);
      return {
        hour: ae().hour(W).format(X),
        minute: ae().minute(Q).format("mm"),
        second: ae().second(te).format("ss")
      };
    }, p = (N) => {
      var X = N / 30;
      return X >= 0 ? X : X + 12;
    }, k = () => {
      var {
        width: N,
        height: X
      } = a.value.getSize(), W = T.x - N / 2 - 8, Q = T.x + N / 2 + 8, te = T.y - X / 2 - 8, ie = T.y + X / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: Q,
        rangeYMin: te,
        rangeYMax: ie
      };
    }, L = (N, X, W) => {
      var {
        disableHour: Q
      } = a.value;
      o.value = z(N, X);
      var te = Math.round(W / 30) * 30 + 90, ie = p(te), ce = t.value ? fn[ie] : en[ie];
      if (Q.includes(ce) || (t.value = e.format === "24hr" ? z(N, X) : !1), t.value === o.value) {
        var ye = t.value || c.value === "pm" ? en[ie] : fn[ie];
        h.value = Q.includes(ye), !h.value && (u.value = te, l.value = !0);
      }
    }, Y = (N) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(N / 6) * 6 + 90, Q = W / 6 >= 0 ? W / 6 : W / 6 + 60, te = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: S.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      y.value = Xs(te), !y.value && (d.value = W, s.value = !0);
    }, G = (N) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(N / 6) * 6 + 90, Q = W / 6 >= 0 ? W / 6 : W / 6 + 60, te = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: S.value.hour,
        minute: A(S.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      Zs(te) || (v.value = W);
    }, R = () => {
      var {
        left: N,
        top: X,
        width: W,
        height: Q
      } = n.value.getBoundingClientRect();
      if (T.x = N + W / 2, T.y = X + Q / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: te,
          rangeXMax: ie,
          rangeYMin: ce,
          rangeYMax: ye
        } = k();
        $.x = [te, ie], $.y = [ce, ye];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: W
        } = N.touches[0], Q = X - T.x, te = W - T.y, ie = Math.round(E(Math.atan2(te, Q)));
        f.value === "hour" ? L(X, W, ie) : f.value === "minute" ? Y(ie) : G(ie);
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
    return oe(() => e.modelValue, (N) => {
      if (N) {
        var {
          hour: X,
          minute: W,
          second: Q
        } = rn(N), te = ae().hour(X).format("hh"), ie = ae().hour(X).format("HH"), ce = ae().minute(W).format("mm"), ye = ae().second(Q).format("ss");
        u.value = (te === "12" ? 0 : A(te)) * 30, d.value = A(ce) * 6, v.value = A(ye) * 6, S.value = I(N), e.format !== "24hr" && (c.value = yr("" + X, 2, "0") === ie && en.includes(ie) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(ie);
      }
    }, {
      immediate: !0
    }), {
      n: nb,
      classes: rb,
      getRad: b,
      time: S,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: J,
      checkPanel: w,
      checkAmpm: V,
      end: j,
      update: C,
      changePreventUpdate: Z
    };
  }
});
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
function lb(e) {
  return ["click", "hover"].includes(e);
}
function sb(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function ub(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var db = {
  type: {
    type: String,
    default: "default",
    validator: ub
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
    validator: lb
  },
  placement: {
    type: String,
    default: "bottom",
    validator: sb
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
  n: vb,
  classes: fb
} = ee("tooltip");
function cb(e, n) {
  return g(), P(
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
    [H(e.$slots, "default"), (g(), pe(
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
          default: ve(() => [ke(B(
            "div",
            {
              ref: "popover",
              class: m(e.n("tooltip")),
              style: K({
                zIndex: e.zIndex
              }),
              onClick: n[0] || (n[0] = Pn(() => {
              }, ["stop"])),
              onMouseenter: n[1] || (n[1] = function() {
                return e.handlePopoverMouseenter && e.handlePopoverMouseenter(...arguments);
              }),
              onMouseleave: n[2] || (n[2] = function() {
                return e.handlePopoverMouseleave && e.handlePopoverMouseleave(...arguments);
              })
            },
            [B(
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
              )])],
              6
            )],
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
const Oa = _({
  render: cb,
  name: "VarTooltip",
  props: db,
  setup(e) {
    var {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: i,
      handleHostClick: o,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      handlePopoverClose: v,
      open: f,
      close: c,
      resize: h
    } = Ns(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: i,
      n: vb,
      classes: fb,
      handleHostClick: o,
      handlePopoverClose: v,
      handleHostMouseenter: l,
      handleHostMouseleave: s,
      handlePopoverMouseenter: u,
      handlePopoverMouseleave: d,
      resize: h,
      open: f,
      close: c
    };
  }
});
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var mb = {
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
function hl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function gl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        hl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        hl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: pb,
  classes: hb
} = ee("uploader"), gb = 0, yb = ["onClick"], bb = ["onClick"], wb = ["src", "alt"], Sb = ["multiple", "accept", "capture", "disabled"], Cb = ["src"];
function kb(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), i = Xe("ripple");
  return g(), P(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [B(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(g(!0), P(
        Pe,
        null,
        Be(e.files, (o) => ke((g(), P(
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
            ne(o.name || o.url),
            3
          ), e.removable ? (g(), P(
            "div",
            {
              key: 0,
              class: m(e.n("file-close")),
              onClick: Pn((l) => e.handleRemove(o), ["stop"])
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
            bb
          )) : x("v-if", !0), o.cover ? (g(), P(
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
            wb
          )) : x("v-if", !0), B(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          yb
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((g(), P(
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
          Sb
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
      )), [[i, {
        disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple || e.$slots.default
      }]]) : x("v-if", !0)],
      2
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
        "onUpdate:show": n[2] || (n[2] = (o) => e.showPreview = o),
        onClosed: n[3] || (n[3] = (o) => e.currentPreview = null)
      },
      {
        default: ve(() => {
          var o, l;
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (g(), P(
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
            Cb
          )) : x("v-if", !0)];
        }),
        _: 1
      },
      8,
      ["class", "show"]
    )],
    2
  );
}
const Pa = _({
  render: kb,
  name: "VarUploader",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarPopup: Cn,
    VarFormDetails: Ge
  },
  props: mb,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = F(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: G
        }
      } = e;
      return Ke(Y) ? G + " / " + Y : "";
    }), {
      form: i,
      bindForm: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = F(() => {
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
        previewed: J
      } = e;
      if (!(i != null && i.disabled.value || i != null && i.readonly.value || G || R || !J)) {
        var {
          url: j
        } = Y;
        if (Ze(j) && so(j)) {
          rr(j);
          return;
        }
        Ze(j) && uo(j) && (a.value = Y, r.value = !0);
      }
    }, h = (Y) => ({
      id: gb++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), y = (Y) => {
      var G = Y.target, {
        files: R
      } = G;
      return Array.from(R);
    }, S = (Y) => new Promise((G) => {
      var R = new FileReader();
      R.onload = () => {
        var J = R.result;
        Y.file.type.startsWith("image") && (Y.cover = J), Y.url = J, G(Y);
      }, R.readAsDataURL(Y.file);
    }), T = (Y) => Y.map(S), $ = (Y) => {
      var {
        onBeforeRead: G
      } = e;
      return Y.map((R) => new Promise((J) => {
        G || J({
          valid: !0,
          varFile: R
        });
        var j = O(G, Ne(R));
        j = be(j) ? j : [j], Promise.all(j).then((Z) => {
          J({
            valid: !Z.some((N) => !N),
            varFile: R
          });
        });
      }));
    }, b = /* @__PURE__ */ function() {
      var Y = gl(function* (G) {
        var {
          maxsize: R,
          maxlength: J,
          modelValue: j,
          onOversize: Z,
          onAfterRead: N,
          readonly: X,
          disabled: W
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || W || X)) {
          var Q = (Ie) => Ie.filter((He) => He.file.size > A(R) ? (O(Z, Ne(He)), !1) : !0), te = (Ie) => {
            var He = Math.min(Ie.length, A(J) - j.length);
            return Ie.slice(0, He);
          }, ie = y(G), ce = ie.map(h);
          ce = R != null ? Q(ce) : ce, ce = J != null ? te(ce) : ce;
          var ye = yield Promise.all(T(ce)), Ye = yield Promise.all($(ye)), Qe = Ye.filter((Ie) => {
            var {
              valid: He
            } = Ie;
            return He;
          }).map((Ie) => {
            var {
              varFile: He
            } = Ie;
            return He;
          });
          O(e["onUpdate:modelValue"], [...j, ...Qe]), G.target.value = "", Qe.forEach((Ie) => O(N, Ne(Ie)));
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var Y = gl(function* (G) {
        var {
          disabled: R,
          readonly: J,
          modelValue: j,
          onBeforeRemove: Z,
          onRemove: N
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || R || J)) {
          if (Z) {
            var X = O(Z);
            if (X = be(X) ? X : [X], (yield Promise.all(X)).some((Q) => !Q))
              return;
          }
          var W = j.filter((Q) => Q !== G);
          O(N, G), z("onRemove"), O(e["onUpdate:modelValue"], W);
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), E = () => e.modelValue.filter((Y) => Y.state === "success"), w = () => e.modelValue.filter((Y) => Y.state === "error"), D = () => e.modelValue.filter((Y) => Y.state === "loading"), V = {
      getSuccess: E,
      getError: w,
      getLoading: D
    }, z = (Y) => {
      Me(() => {
        var {
          validateTrigger: G,
          rules: R,
          modelValue: J
        } = e;
        s(G, Y, R, J, V);
      });
    }, I = !1, p = () => u(e.rules, e.modelValue, V), k = () => {
      I = !0, O(e["onUpdate:modelValue"], []), d();
    }, L = {
      validate: p,
      resetValidation: d,
      reset: k
    };
    return O(o, L), oe(() => e.modelValue, () => {
      !I && z("onChange"), I = !1;
    }, {
      deep: !0
    }), {
      n: pb,
      classes: hb,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: uo,
      isHTMLSupportImage: so,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: f,
      handleChange: b,
      handleRemove: C,
      getSuccess: E,
      getError: w,
      getLoading: D,
      validate: p,
      resetValidation: d,
      reset: k
    };
  }
});
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
function $b(e) {
  br.install && e.use(br), Ar.install && e.use(Ar), zr.install && e.use(zr), ur.install && e.use(ur), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), an.install && e.use(an), Fr.install && e.use(Fr), dr.install && e.use(dr), vr.install && e.use(vr), Hr.install && e.use(Hr), fr.install && e.use(fr), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), sn.install && e.use(sn), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), wr.install && e.use(wr), Zr.install && e.use(Zr), Zn.install && e.use(Zn), Ge.install && e.use(Ge), Oe.install && e.use(Oe), Jr.install && e.use(Jr), rr.install && e.use(rr), Qr.install && e.use(Qr), xr.install && e.use(xr), hr.install && e.use(hr), St.install && e.use(St), _r.install && e.use(_r), ea.install && e.use(ea), On.install && e.use(On), Ka.install && e.use(Ka), ai.install && e.use(ai), er.install && e.use(er), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), kr.install && e.use(kr), Cn.install && e.use(Cn), ta.install && e.use(ta), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), Fe.install && e.use(Fe), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), zn.install && e.use(zn), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), xn.install && e.use(xn), Qa.install && e.use(Qa), Jn.install && e.use(Jn), Qn.install && e.use(Qn), ba.install && e.use(ba), wa.install && e.use(wa), Sa.install && e.use(Sa), Ca.install && e.use(Ca), ka.install && e.use(ka), $a.install && e.use($a), Di.install && e.use(Di), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Pa.install && e.use(Pa);
}
const Ob = {
  install: $b,
  ActionSheet: br,
  AppBar: Ar,
  BackTop: zr,
  Badge: ur,
  BottomNavigation: Lr,
  BottomNavigationItem: Rr,
  Breadcrumb: Ur,
  Breadcrumbs: Yr,
  Button: an,
  Card: Fr,
  Cell: dr,
  Checkbox: vr,
  CheckboxGroup: Hr,
  Chip: fr,
  Col: Wr,
  Collapse: jr,
  CollapseItem: Gr,
  Context: sn,
  Countdown: qr,
  Counter: Kr,
  DatePicker: Xr,
  Dialog: wr,
  Divider: Zr,
  Form: Zn,
  FormDetails: Ge,
  Icon: Oe,
  Image: Jr,
  ImagePreview: rr,
  IndexAnchor: Qr,
  IndexBar: xr,
  Input: hr,
  Lazy: St,
  Link: _r,
  List: ea,
  Loading: On,
  LoadingBar: Ka,
  Locale: ai,
  Menu: er,
  Option: na,
  Overlay: ra,
  Pagination: aa,
  Picker: kr,
  Popup: Cn,
  Progress: ta,
  PullRefresh: ia,
  Radio: oa,
  RadioGroup: la,
  Rate: sa,
  Result: ua,
  Ripple: Fe,
  Row: da,
  Select: va,
  Skeleton: fa,
  Slider: ca,
  Snackbar: zn,
  Space: pa,
  Step: ha,
  Steps: ga,
  Sticky: xn,
  StyleProvider: Qa,
  Swipe: Jn,
  SwipeItem: Qn,
  Switch: ba,
  Tab: wa,
  TabItem: Sa,
  Table: Ca,
  Tabs: ka,
  TabsItems: $a,
  Themes: Di,
  TimePicker: Ta,
  Tooltip: Oa,
  Uploader: Pa
};
export {
  br as ActionSheet,
  Ar as AppBar,
  zr as BackTop,
  ur as Badge,
  Lr as BottomNavigation,
  Rr as BottomNavigationItem,
  Ur as Breadcrumb,
  Yr as Breadcrumbs,
  an as Button,
  Fr as Card,
  dr as Cell,
  vr as Checkbox,
  Hr as CheckboxGroup,
  fr as Chip,
  Wr as Col,
  jr as Collapse,
  Gr as CollapseItem,
  sn as Context,
  qr as Countdown,
  Kr as Counter,
  Xr as DatePicker,
  wr as Dialog,
  Zr as Divider,
  Zn as Form,
  Ge as FormDetails,
  Oe as Icon,
  Jr as Image,
  rr as ImagePreview,
  Qr as IndexAnchor,
  xr as IndexBar,
  hr as Input,
  St as Lazy,
  _r as Link,
  ea as List,
  On as Loading,
  Ka as LoadingBar,
  ai as Locale,
  er as Menu,
  na as Option,
  ra as Overlay,
  aa as Pagination,
  kr as Picker,
  Cn as Popup,
  ta as Progress,
  ia as PullRefresh,
  oa as Radio,
  la as RadioGroup,
  sa as Rate,
  ua as Result,
  Fe as Ripple,
  da as Row,
  va as Select,
  fa as Skeleton,
  ca as Slider,
  zn as Snackbar,
  pa as Space,
  ha as Step,
  ga as Steps,
  xn as Sticky,
  Qa as StyleProvider,
  Jn as Swipe,
  Qn as SwipeItem,
  ba as Switch,
  wa as Tab,
  Sa as TabItem,
  Ca as Table,
  ka as Tabs,
  $a as TabsItems,
  Di as Themes,
  Ta as TimePicker,
  Oa as Tooltip,
  Pa as Uploader,
  Ob as default,
  $b as install
};
