import { reactive as Me, ref as M, onMounted as Ue, onUnmounted as tr, onActivated as zi, onDeactivated as Li, getCurrentInstance as Da, provide as bl, computed as F, inject as wl, nextTick as Ee, createApp as au, onBeforeUnmount as kt, h as Sl, isVNode as $t, watch as oe, onBeforeMount as tu, defineComponent as _, createVNode as re, Teleport as Aa, Transition as Ae, withDirectives as ke, vShow as za, mergeProps as Ve, openBlock as b, createBlock as pe, resolveDynamicComponent as La, normalizeClass as m, normalizeStyle as K, resolveComponent as le, resolveDirective as Xe, withCtx as ve, createElementVNode as D, renderSlot as H, toDisplayString as ne, createElementBlock as V, Fragment as Pe, renderList as Be, createCommentVNode as x, onUpdated as Ri, createTextVNode as he, pushScopeId as $r, popScopeId as Tr, withModifiers as Pn, normalizeProps as Cl, guardReactiveProps as iu, vModelText as ou, toRefs as lu, withKeys as io, toRaw as oo, TransitionGroup as su, Comment as uu } from "vue";
var kl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Me(kl);
const sn = Me(kl), Ze = (e) => typeof e == "string", Qt = (e) => typeof e == "boolean", Ke = (e) => typeof e == "number", Ui = (e) => Object.prototype.toString.call(e) === "[object Object]", du = (e) => typeof e == "object" && e !== null, be = (e) => Array.isArray(e), vu = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Nn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, z = (e) => e == null ? 0 : Ze(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Qt(e) ? Number(e) : e, Tt = (e, n) => {
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
}, Fi = () => typeof window < "u", lo = (e) => [...new Set(e)], fu = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), cu = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var so = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), uo = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), mu = (e) => {
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
}, xt = (e) => e, vo = (e) => Math.pow(e, 3), $l = (e) => e < 0.5 ? vo(e * 2) / 2 : 1 - vo((1 - e) * 2) / 2, Ot = (e, n) => e == null ? n : e, Tl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, yr = function(e, n, r) {
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
function pu(e) {
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
function hu(e) {
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
function Pt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Hi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function gu(e) {
  return _t.apply(this, arguments);
}
function _t() {
  return _t = pu(function* (e) {
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
  }), _t.apply(this, arguments);
}
function Wt(e) {
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
function yu(e) {
  for (var n = [], r = e; r !== window; )
    r = Or(r), n.push(r);
  return n;
}
function Ol(e, n) {
  if (Ze(e)) {
    var r = document.querySelector(e);
    if (!r)
      throw Error("[Varlet] " + n + ": target element cannot found");
    return r;
  }
  if (du(e))
    return e;
  throw Error("[Varlet] " + n + ': type of prop "target" should be a selector or an element object');
}
var Pl = (e) => Ze(e) && e.endsWith("rem"), bu = (e) => Ze(e) && e.endsWith("px") || Ke(e), wu = (e) => Ze(e) && e.endsWith("%"), Vl = (e) => Ze(e) && e.endsWith("vw"), Ml = (e) => Ze(e) && e.endsWith("vh"), Su = (e) => Ze(e) && e.startsWith("calc("), Cu = (e) => Ze(e) && e.startsWith("var("), De = (e) => {
  if (Ke(e))
    return e;
  if (bu(e))
    return +e.replace("px", "");
  if (Vl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Ml(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if (Pl(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Ze(e) ? z(e) : 0;
}, we = (e) => {
  if (e != null)
    return wu(e) || Vl(e) || Ml(e) || Pl(e) || Su(e) || Cu(e) ? e : De(e) + "px";
}, _e = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function $n(e) {
  var n = Tl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function ku(e) {
  var n = Tl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Vt(e) {
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
function $u() {
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
  } = n, o = Date.now(), l = Pt(e), s = Hi(e);
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
function El(e) {
  return Object.entries(e != null ? e : {}).reduce((n, r) => {
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + fu(a);
    return n[i] = t, n;
  }, {});
}
function Tu() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var Ou = ["collect", "clear"];
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
function Pu(e, n) {
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
function Vu(e) {
  var n = au(e), r = document.createElement("div");
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
      return () => Sl(e, mt({}, n, r));
    }
  }, {
    unmount: t
  } = Vu(a);
  return {
    unmountInstance: t
  };
}
function Mu(e) {
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
function pn(e) {
  var n = Me([]), r = Da(), a = () => {
    var l = Mu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    Tt(n, l);
  };
  bl(e, {
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
  if (!Il(e))
    return {
      index: null
    };
  var n = wl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Da();
  Ue(() => {
    Ee().then(() => r(i));
  }), tr(() => {
    Ee().then(() => a(i));
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
    Tt(n, i);
  }, t = (i) => {
    bl(e, mt({
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
  if (!Il(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = wl(e), {
    collect: r,
    clear: a
  } = n, t = Pu(n, Ou), i = (o) => {
    Ue(() => r(o)), kt(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function Il(e) {
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
function Eu(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), tr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Wi() {
  var e = M(!1);
  return zi(() => {
    e.value = !1;
  }), Li(() => {
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
  n: Nl
} = ee("ripple"), ho = 250;
function Iu(e) {
  var {
    zIndex: n,
    position: r
  } = window.getComputedStyle(e);
  e.style.overflow = "hidden", e.style.overflowX = "hidden", e.style.overflowY = "hidden", r === "static" && (e.style.position = "relative"), n === "auto" && (e.style.zIndex = "1");
}
function Nu(e, n) {
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
function Bl(e) {
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
      } = Nu(this, e), s = document.createElement("div");
      s.classList.add(Nl()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Iu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function ei() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Nl());
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
function Dl() {
  var e = this._ripple;
  !Tu() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Bu(e, n) {
  var r, a, t;
  e._ripple = pt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : sn.touchmoveForbid,
    removeRipple: ei.bind(e)
  }), e.addEventListener("touchstart", Bl, {
    passive: !0
  }), e.addEventListener("touchmove", Dl, {
    passive: !0
  }), e.addEventListener("dragstart", ei, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Du(e) {
  e.removeEventListener("touchstart", Bl), e.removeEventListener("touchmove", Dl), e.removeEventListener("dragstart", ei), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Au(e, n) {
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
  mounted: Bu,
  unmounted: Du,
  updated: Au,
  install(e) {
    e.directive("ripple", this);
  }
};
function zu(e) {
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
    validator: zu
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
function Al() {
  var e = Object.keys(sn.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function nt(e) {
  sn.locks[e] = 1, Al();
}
function rt(e) {
  delete sn.locks[e], Al();
}
function Mt(e, n) {
  var {
    uid: r
  } = Da();
  n && oe(n, (a) => {
    a === !1 ? rt(r) : a === !0 && e() === !0 && nt(r);
  }), oe(e, (a) => {
    n && n() === !1 || (a === !0 ? nt(r) : rt(r));
  }), tu(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), tr(() => {
    n && n() === !1 || e() === !0 && rt(r);
  }), zi(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), Li(() => {
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
function Lu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: In,
  classes: jt
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
    Mt(() => e.show, () => e.lockScroll), oe(() => e.show, (d) => {
      O(d ? e.onOpen : e.onClose);
    }), Eu(() => O(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: jt(In("overlay"), d),
        style: ni({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => re("div", Ve({
      class: jt(In("content"), In("--" + e.position), [e.defaultStyle, In("--content-background-color")], [e.defaultStyle, In("$-elevation--3")]),
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
        position: S
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
          name: h || In("$-pop-" + S)
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
        }, Lu(v = u()) ? v : {
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
var zl = {
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
function Ru(e) {
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
  n: Uu,
  classes: Yu
} = ee("icon");
function Fu(e, n) {
  return b(), pe(
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
  render: Fu,
  name: "VarIcon",
  props: zl,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = Ru(function* (i, o) {
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
    return oe(() => e.name, a, {
      immediate: !0
    }), {
      n: Uu,
      classes: Yu,
      nextName: n,
      shrinking: r,
      isURL: vu,
      toNumber: z,
      toSizeUnit: we
    };
  }
});
Oe.install = function(e) {
  e.component(Oe.name, Oe);
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
var Hu = ri({
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
const Ll = {
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
}, Wu = {
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
function Rl() {
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
    e[i] = ai({}, e[i], o), a(i);
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
  packs: ju,
  pack: We,
  add: Ul,
  use: Yl,
  merge: Gu
} = Rl();
Ul("zh-CN", Ll);
Yl("zh-CN");
const ti = {
  zhCN: Ll,
  enUS: Wu,
  packs: ju,
  pack: We,
  add: Ul,
  use: Yl,
  merge: Gu,
  useLocale: Rl
};
var {
  n: qu,
  classes: Ku
} = ee("action-sheet"), Xu = ["onClick"];
function Zu(e, n) {
  var r = le("var-icon"), a = le("var-popup"), t = Xe("ripple");
  return b(), pe(
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [H(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), H(e.$slots, "actions", {}, () => [(b(!0), V(
          Pe,
          null,
          Be(e.actions, (i) => ke((b(), V(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: K({
                color: i.color
              }),
              onClick: (o) => e.handleSelect(i)
            },
            [i.icon ? (b(), pe(
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
            )) : x("v-if", !0), D(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(i.name),
              3
            )],
            14,
            Xu
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
  render: Zu,
  name: "VarActionSheet",
  directives: {
    Ripple: Fe
  },
  components: {
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Hu,
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
      n: qu,
      classes: Ku,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: We,
      dt: Ot,
      handleSelect: r
    };
  }
});
var Wn;
function br(e) {
  return Fi() ? new Promise((n) => {
    br.close();
    var r = Me(e);
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
    Wn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
br.install = function(e) {
  e.component(sr.name, sr);
};
function Ju(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Qu = {
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
    validator: Ju
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
  n: xu,
  classes: _u
} = ee("app-bar");
function ed(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: K({
        background: e.color,
        color: e.textColor
      })
    },
    [D(
      "div",
      {
        class: m(e.n("left"))
      },
      [H(e.$slots, "left"), e.titlePosition === "left" ? (b(), V(
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
    ), e.titlePosition === "center" ? (b(), V(
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
    )) : x("v-if", !0), D(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (b(), V(
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
  render: ed,
  name: "VarAppBar",
  props: Qu,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(i), Ri(i), {
      n: xu,
      classes: _u,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function nd(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function rd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var qn = {
  type: {
    type: String,
    default: "circle",
    validator: nd
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: rd
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
  n: ad,
  classes: td
} = ee("loading"), id = (e) => ($r(""), e = e(), Tr(), e), od = /* @__PURE__ */ id(() => /* @__PURE__ */ D(
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
)), ld = [od];
function sd(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [e.$slots.default ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("content"), [e.loading, e.n("content--active")]))
      },
      [H(e.$slots, "default"), e.loading ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : x("v-if", !0)],
      2
    )) : x("v-if", !0), e.isShow ? (b(), V(
      "div",
      {
        key: 1,
        class: m(e.classes(e.n("$--box"), e.n("body"), [e.$slots.default, e.n("inside")]))
      },
      [e.type === "circle" ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n("circle"))
        },
        [D(
          "span",
          {
            class: m(e.classes(e.n("circle-block"), e.n("circle-block--" + e.size))),
            style: K({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          ld,
          6
        )],
        2
      )) : x("v-if", !0), (b(!0), V(
        Pe,
        null,
        Be(e.loadingTypeDict, (r, a) => (b(), V(
          Pe,
          {
            key: a
          },
          [e.type === a ? (b(), V(
            "div",
            {
              key: 0,
              class: m(e.classes(e.n(a), e.n(a + "--" + e.size)))
            },
            [(b(!0), V(
              Pe,
              null,
              Be(r, (t) => (b(), V(
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
      )), e.$slots.description || e.description ? (b(), V(
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
  render: sd,
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
      n: ad,
      classes: td,
      multiplySizeUnit: _e,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
On.install = function(e) {
  e.component(On.name, On);
};
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
function ud(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function dd(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var vd = {
  type: {
    type: String,
    default: "default",
    validator: ud
  },
  size: {
    type: String,
    default: "normal",
    validator: dd
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
  loadingColor: ii({}, qe(qn, "color"), {
    default: "currentColor"
  }),
  onClick: U(),
  onTouchstart: U()
}, {
  n: fd,
  classes: cd
} = ee("button"), md = ["disabled"];
function pd(e, n) {
  var r = le("var-loading"), a = Xe("ripple");
  return ke((b(), V(
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
    [e.loading || e.pending ? (b(), pe(
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
    )) : x("v-if", !0), D(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [H(e.$slots, "default")],
      2
    )],
    46,
    md
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const an = _({
  render: pd,
  name: "VarButton",
  components: {
    VarLoading: On
  },
  directives: {
    Ripple: Fe
  },
  props: vd,
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
      n: fd,
      classes: cd,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
an.install = function(e) {
  e.component(an.name, an);
};
var hd = {
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
  n: gd,
  classes: yd
} = ee("back-top");
function bd(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return b(), pe(
    Aa,
    {
      to: "body",
      disabled: e.disabled
    },
    [D(
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
  render: bd,
  name: "VarBackTop",
  components: {
    VarButton: an,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: hd,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, i = (s) => {
      O(e.onClick, s);
      var u = Hi(t);
      Ga(t, {
        left: u,
        duration: e.duration,
        animation: $l
      });
    }, o = () => {
      n.value = Pt(t) >= De(e.visibilityHeight);
    }, l = Yi(o, 200);
    return Ue(() => {
      t = e.target ? Ol(e.target, "BackTop") : Or(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), kt(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: gd,
      classes: yd,
      click: i
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
function wd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Sd(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var Cd = {
  type: {
    type: String,
    default: "default",
    validator: wd
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
    validator: Sd
  },
  icon: {
    type: String
  }
}, {
  n: Ln,
  classes: kd
} = ee("badge"), $d = {
  key: 1
};
function Td(e, n) {
  var r = le("var-icon");
  return b(), V(
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
        default: ve(() => [ke(D(
          "span",
          Ve(e.$attrs, {
            class: e.classes(e.n("content"), ...e.contentClass),
            style: {
              background: e.color
            }
          }),
          [e.icon && !e.dot ? (b(), pe(
            r,
            {
              key: 0,
              name: e.icon,
              size: "10px"
            },
            null,
            8,
            ["name"]
          )) : (b(), V(
            "span",
            $d,
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
  render: Td,
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Cd,
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
      return o ? "" : l !== void 0 && s !== void 0 && z(l) > s ? s + "+" : l;
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
      classes: kd,
      values: t,
      contentClass: a
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
var Od = {
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
}, Fl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Hl = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function Pd() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Fl), {
    length: r
  } = pn(Hl);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
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
var {
  n: Vd,
  classes: Md
} = ee("bottom-navigation"), {
  n: Et
} = ee("bottom-navigation-item"), yo = Et("--right-half-space"), bo = Et("--left-half-space"), wo = Et("--right-space"), Ed = {
  type: "primary"
};
function Id(e, n) {
  var r = le("var-button");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: K("z-index:" + e.zIndex)
    },
    [H(e.$slots, "default"), e.$slots.fab ? (b(), pe(
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
  render: Id,
  name: "VarBottomNavigation",
  components: {
    VarButton: an
  },
  props: Od,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = F(() => e.active), i = F(() => e.activeColor), o = F(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = Pd(), v = () => {
      s.value === 0 || f() || c() || h();
    }, f = () => u.find((P) => {
      var {
        name: I
      } = P;
      return t.value === I.value;
    }), c = () => u.find((P) => {
      var {
        index: I
      } = P;
      return t.value === I.value;
    }), h = () => {
      !Ke(t.value) || (t.value < 0 ? O(e["onUpdate:active"], 0) : t.value > s.value - 1 && O(e["onUpdate:active"], s.value - 1));
    }, S = (P) => {
      t.value !== P && (e.onBeforeChange ? g(P) : T(P));
    }, g = (P) => {
      var I = O(e.onBeforeChange, P);
      I = be(I) ? I : [I], Promise.all(I).then((N) => {
        N.some((p) => !p) || T(P);
      });
    }, T = (P) => {
      O(e["onUpdate:active"], P), O(e.onChange, P);
    }, $ = () => {
      var P = E();
      P.forEach((I) => {
        I.classList.remove(yo, bo, wo);
      });
    }, y = (P) => {
      var I = E(), N = I.length, p = P % 2 === 0;
      I.forEach((w, L) => {
        C(p, w, L, N);
      });
    }, C = (P, I, N, p) => {
      var w = N === p - 1;
      if (!P && w) {
        I.classList.add(wo);
        return;
      }
      var L = N === p / 2 - 1, Y = N === p / 2;
      L ? I.classList.add(yo) : Y && I.classList.add(bo);
    }, E = () => Array.from(a.value.querySelectorAll("." + Et())), k = () => {
      O(e.onFabClick);
    }, A = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: S
    };
    return d(A), oe(() => s.value, v), oe(() => e.fabProps, (P) => {
      l.value = oi({}, Ed, P);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      !r.fab || y(s.value);
    }), Ri(() => {
      $(), r.fab && y(s.value);
    }), {
      n: Vd,
      classes: Md,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: k,
      fabProps: l
    };
  }
});
Lr.install = function(e) {
  e.component(Lr.name, Lr);
};
var Nd = {
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
function Bd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Fl), {
    index: r
  } = hn(Hl);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Dd,
  classes: Ad
} = ee("bottom-navigation-item"), zd = {
  type: "danger",
  dot: !0
};
function Ld(e, n) {
  var r = le("var-icon"), a = le("var-badge"), t = Xe("ripple");
  return ke((b(), V(
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
    [e.icon && !e.$slots.icon ? (b(), pe(
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
    }), e.badge ? (b(), pe(
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
    )) : x("v-if", !0), D(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? x("v-if", !0) : (b(), V(
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
  render: Ld,
  name: "VarBottomNavigationItem",
  components: {
    VarBadge: ur,
    VarIcon: Oe
  },
  directives: {
    Ripple: Fe
  },
  props: Nd,
  setup(e) {
    var n = F(() => e.name), r = F(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = Bd(), {
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
      a.value = c === !0 ? zd : r.value;
    }, {
      immediate: !0
    }), {
      n: Dd,
      classes: Ad,
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
var Rd = {
  separator: {
    type: String
  },
  onClick: U()
}, Wl = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), jl = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Ud() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Wl), {
    length: r
  } = pn(jl);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function Yd() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Wl), {
    index: r
  } = hn(jl);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Fd,
  classes: Hd
} = ee("breadcrumb");
function Wd(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [D(
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
      return [D(
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
  render: Wd,
  name: "VarBreadcrumb",
  props: Rd,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = Yd(), t = F(() => n.value === r.length.value - 1), i = F(() => r.separator.value), o = (l) => {
      t.value || O(e.onClick, l);
    };
    return a(null), {
      n: Fd,
      classes: Hd,
      isLast: t,
      parentSeparator: i,
      handleClick: o
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var jd = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Gd
} = ee("breadcrumbs");
function qd(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
  );
}
const Yr = _({
  render: qd,
  name: "VarBreadcrumbs",
  props: jd,
  setup(e) {
    var n = F(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Ud(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Gd
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
function Kd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Xd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Kd,
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
  n: Zd,
  classes: Jd
} = ee("card"), Qd = 500, xd = ["src", "alt"];
function _d(e, n) {
  var r = le("var-icon"), a = le("var-button"), t = Xe("ripple");
  return ke((b(), V(
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
    [D(
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
      [H(e.$slots, "image", {}, () => [e.src ? (b(), V(
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
        xd
      )) : x("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("container"))
        },
        [H(e.$slots, "title", {}, () => [e.title ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
        )) : x("v-if", !0)]), H(e.$slots, "subtitle", {}, () => [e.subtitle ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
        )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
        )) : x("v-if", !0)]), e.$slots.extra ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [H(e.$slots, "extra")],
          2
        )) : x("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (b(), V(
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
      ), e.showFloatingButtons ? (b(), V(
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
    ), D(
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
  render: _d,
  name: "VarCard",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarButton: an
  },
  props: Xd,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), i = M("100%"), o = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), c = F(() => e.layout === "row"), h = M(!1), S = M(!1), {
      zIndex: g
    } = _a(() => e.floating, 1);
    Mt(() => e.floating, () => !c.value);
    var T = "auto", $ = "auto", y = null, C = M(null), E = /* @__PURE__ */ function() {
      var P = Co(function* () {
        clearTimeout(C.value), clearTimeout(y), C.value = null, C.value = setTimeout(/* @__PURE__ */ Co(function* () {
          var {
            width: I,
            height: N,
            left: p,
            top: w
          } = n.value.getBoundingClientRect();
          a.value = we(I), t.value = we(N), i.value = a.value, o.value = t.value, l.value = we(w), s.value = we(p), u.value = "fixed", T = l.value, $ = s.value, h.value = !0, yield Vn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", S.value = !0;
        }), e.ripple ? Qd : 0);
      });
      return function() {
        return P.apply(this, arguments);
      };
    }(), k = () => {
      clearTimeout(y), clearTimeout(C.value), C.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = $, v.value = "0px", f.value = "0", h.value = !1, y = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", $ = "auto", d.value = "hidden", u.value = void 0, S.value = !1;
      }, e.floatingDuration);
    }, A = () => {
      O(e["onUpdate:floating"], !1);
    };
    return oe(() => e.floating, (P) => {
      c.value || Ee(() => {
        P ? E() : k();
      });
    }, {
      immediate: !0
    }), {
      n: Zd,
      classes: Jd,
      toSizeUnit: we,
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
      zIndex: g,
      isRow: c,
      close: A,
      showFloatingButtons: h,
      floated: S
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var ev = {
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
  n: nv,
  classes: rv
} = ee("cell");
function av(e, n) {
  var r = le("var-icon");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.border, e.n("--border")]))
    },
    [e.$slots.icon || e.icon ? (b(), V(
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
    )) : x("v-if", !0), D(
      "div",
      {
        class: m(e.n("content"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.title),
          1
        )])],
        2
      ), e.$slots.description || e.description ? (b(), V(
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
    ), e.$slots.extra ? (b(), V(
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
  render: av,
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  props: ev,
  setup() {
    return {
      n: nv,
      classes: rv
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var tv = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: iv
} = ee("form-details"), ov = {
  key: 0
}, lv = {
  key: 0
};
function sv(e, n) {
  return b(), pe(
    Ae,
    {
      name: e.n()
    },
    {
      default: ve(() => [e.errorMessage || e.extraMessage ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n())
        },
        [D(
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
              default: ve(() => [e.errorMessage ? (b(), V(
                "div",
                ov,
                ne(e.errorMessage),
                1
              )) : x("v-if", !0)]),
              _: 1
            },
            8,
            ["name"]
          )],
          2
        ), D(
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
              default: ve(() => [e.extraMessage ? (b(), V(
                "div",
                lv,
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
  render: sv,
  name: "VarFormDetails",
  props: tv,
  setup: () => ({
    n: iv
  })
});
Ge.install = function(e) {
  e.component(Ge.name, Ge);
};
var uv = {
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
}, Gl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), ql = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function dv() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Gl), {
    length: r
  } = pn(ql);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function vv() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Gl), {
    index: r
  } = hn(ql);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
  };
}
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
var Kl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function yn() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Kl), r = Da(), a = e ? (t) => {
    e(li({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function fv() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Kl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: cv,
  classes: mv
} = ee("checkbox");
function pv(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return b(), V(
    "div",
    {
      class: m(e.n("wrap")),
      onClick: n[0] || (n[0] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [ke((b(), V(
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
      }]]), D(
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
  render: pv,
  name: "VarCheckbox",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  props: uv,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = F(() => e.checkedValue), t = M(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = vv(), {
      form: l,
      bindForm: s
    } = yn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = gn(), c = (k) => {
      Ee(() => {
        var {
          validateTrigger: A,
          rules: P,
          modelValue: I
        } = e;
        d(A, k, P, I);
      });
    }, h = (k) => {
      n.value = k;
      var {
        checkedValue: A,
        onChange: P
      } = e;
      O(e["onUpdate:modelValue"], n.value), O(P, n.value), c("onChange"), k === A ? i == null || i.onChecked(A) : i == null || i.onUnchecked(A);
    }, S = (k) => {
      var {
        disabled: A,
        readonly: P,
        checkedValue: I,
        uncheckedValue: N,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || A) && (O(p, k), !(l != null && l.readonly.value || P))) {
        t.value = !0;
        var w = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && w || h(r.value ? N : I);
      }
    }, g = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: P
      } = e;
      n.value = k.includes(A) ? A : P;
    }, T = () => {
      t.value = !1;
    }, $ = () => {
      O(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, y = (k) => {
      var {
        checkedValue: A,
        uncheckedValue: P
      } = e, I = ![A, P].includes(k);
      I && (k = r.value ? P : A), h(k);
    }, C = () => v(e.rules, e.modelValue);
    oe(() => e.modelValue, (k) => {
      n.value = k;
    }, {
      immediate: !0
    });
    var E = {
      checkedValue: a,
      checked: r,
      sync: g,
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
      n: cv,
      classes: mv,
      handleClick: S,
      toggle: y,
      reset: $,
      validate: C,
      resetValidation: f
    };
  }
});
vr.install = function(e) {
  e.component(vr.name, vr);
};
function hv(e) {
  return ["horizontal", "vertical"].includes(e);
}
var gv = {
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
    validator: hv
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
  n: yv,
  classes: bv
} = ee("checkbox-group");
function wv(e, n) {
  var r = le("var-form-details");
  return b(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
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
  render: wv,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: Ge
  },
  props: gv,
  setup(e) {
    var n = F(() => e.max), r = F(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = dv(), {
      bindForm: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = F(() => l.value), f = (A) => {
      Ee(() => {
        var {
          validateTrigger: P,
          rules: I,
          modelValue: N
        } = e;
        s(P, A, I, N);
      });
    }, c = (A) => {
      O(e["onUpdate:modelValue"], A), O(e.onChange, A), f("onChange");
    }, h = (A) => {
      var {
        modelValue: P
      } = e;
      P.includes(A) || c([...P, A]);
    }, S = (A) => {
      var {
        modelValue: P
      } = e;
      !P.includes(A) || c(P.filter((I) => I !== A));
    }, g = () => t.forEach((A) => {
      var {
        sync: P
      } = A;
      return P(e.modelValue);
    }), T = () => {
      t.forEach((A) => A.resetWithAnimation());
    }, $ = () => {
      var A = t.map((I) => {
        var {
          checkedValue: N
        } = I;
        return N.value;
      }), P = lo(A);
      return T(), O(e["onUpdate:modelValue"], P), P;
    }, y = () => {
      var A = t.filter((I) => {
        var {
          checked: N
        } = I;
        return !N.value;
      }).map((I) => {
        var {
          checkedValue: N
        } = I;
        return N.value;
      }), P = lo(A);
      return T(), O(e["onUpdate:modelValue"], P), P;
    }, C = () => {
      O(e["onUpdate:modelValue"], []), d();
    }, E = () => u(e.rules, e.modelValue);
    oe(() => e.modelValue, g, {
      deep: !0
    }), oe(() => a.value, g);
    var k = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: S,
      validate: E,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return i(k), O(o, k), {
      errorMessage: l,
      n: yv,
      classes: bv,
      checkAll: $,
      inverseAll: y,
      reset: C,
      validate: E,
      resetValidation: d
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
function Sv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Cv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var kv = {
  type: {
    type: String,
    default: "default",
    validator: Sv
  },
  size: {
    type: String,
    default: "normal",
    validator: Cv
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: qe(zl, "name"),
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
  classes: $v
} = ee("chip");
function Tv(e, n) {
  var r = le("var-icon");
  return b(), pe(
    Ae,
    {
      name: e.n("$-fade")
    },
    {
      default: ve(() => [D(
        "span",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [H(e.$slots, "left"), D(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [H(e.$slots, "default")],
          2
        ), H(e.$slots, "right"), e.closable ? (b(), V(
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
  render: Tv,
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: kv,
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
      classes: $v,
      chipStyles: n,
      contentClass: r
    };
  }
});
fr.install = function(e) {
  e.component(fr.name, fr);
};
function Ov(e) {
  return ["row", "column"].includes(e);
}
var Pv = {
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
    validator: Ov
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
}, Xl = Symbol("ROW_BIND_COL_KEY"), Zl = Symbol("ROW_COUNT_COL_KEY");
function Vv() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Xl), {
    length: r
  } = pn(Zl);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Mv() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Xl), {
    index: r
  } = hn(Zl);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: at,
  classes: Ev
} = ee("col");
function Iv(e, n) {
  return b(), V(
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
  render: Iv,
  name: "VarCol",
  props: Pv,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = F(() => z(e.span)), a = F(() => z(e.offset)), {
      row: t,
      bindRow: i
    } = Mv(), o = {
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
      classes: Ev,
      padding: n,
      toNumber: z,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
var Jl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Ql = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Nv() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Jl), {
    length: r
  } = pn(Ql);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Bv = {
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
  n: Dv
} = ee("collapse");
function Av(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
  );
}
const jr = _({
  render: Av,
  name: "VarCollapse",
  props: Bv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Nv(), t = F(() => e.modelValue), i = F(() => e.offset), o = () => !e.accordion && !be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && be(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, h) => o() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((S) => S !== c) : null, s = (c, h) => {
      var S = l(c, h);
      O(e["onUpdate:modelValue"], S), O(e.onChange, S);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: S
          } = h;
          return e.modelValue === S.value;
        });
      var c = r.filter((h) => {
        var {
          name: S
        } = h;
        return S.value === void 0 ? !1 : e.modelValue.includes(S.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: h,
        name: S
      } = c;
      return S.value === void 0 ? e.modelValue === h.value : !1;
    }) : r.filter((c) => {
      var {
        index: h,
        name: S
      } = c;
      return S.value === void 0 ? e.modelValue.includes(h.value) : !1;
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
          var S = e.accordion ? c === h : c.includes(h);
          h.init(e.accordion, S);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), oe(() => n.value, () => Ee().then(v)), oe(() => e.modelValue, () => Ee().then(v)), {
      n: Dv
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
function zv() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Jl), {
    index: r
  } = hn(Ql);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Lv = {
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
  n: Rv,
  classes: Uv
} = ee("collapse-item");
function Yv(e, n) {
  var r = le("var-icon");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.offset && e.isShow, e.n("--active")], [e.disabled, e.n("--disable")]))
    },
    [D(
      "div",
      {
        class: m(e.n("header")),
        onClick: n[0] || (n[0] = (a) => e.toggle())
      },
      [D(
        "div",
        {
          class: m(e.n("header-title"))
        },
        [H(e.$slots, "title", {}, () => [he(
          ne(e.title),
          1
        )])],
        2
      ), D(
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
    ), ke(D(
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
      [D(
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
  render: Yv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: Lv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = zv(), t = !0, i = M(null), o = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = F(() => e.name), f = (y, C) => {
      s.value === void 0 || y && be(s.value) || C === l.value || (l.value = C, c(!0));
    }, c = (y) => {
      e.disabled || y || d(e.name || n.value, !l.value);
    }, h = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Ee(() => {
        var {
          offsetHeight: y
        } = i.value;
        i.value.style.height = 0 + "px", $n(() => {
          i.value.style.height = y + "px", t && Vt(() => {
            t && T();
          });
        });
      }));
    }, S = () => {
      t = !1;
    }, g = () => {
      if (!!i.value) {
        var {
          offsetHeight: y
        } = i.value;
        i.value.style.height = y + "px", $n(() => {
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
    return a($), oe(l, (y) => {
      y ? h() : g();
    }), {
      n: Rv,
      start: S,
      classes: Uv,
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
var Fv = {
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
  n: Hv
} = ee("countdown"), si = 1e3, ui = 60 * si, di = 60 * ui, ko = 24 * di;
function Wv(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default", Cl(iu(e.timeData)), () => [he(
      ne(e.showTime),
      1
    )])],
    2
  );
}
const qr = _({
  render: Wv,
  name: "VarCountdown",
  props: Fv,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), i = M(0), o = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, h) => {
      var S = Object.values(h), g = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (g.forEach((y, C) => {
        c.includes(y) ? c = c.replace(y, yr("" + S[C], 2, "0")) : S[C + 1] += S[C] * T[C];
      }), c.includes("S")) {
        var $ = yr("" + S[S.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", $) : c.includes("SS") ? c = c.replace("SS", $.slice(0, 2)) : c = c.replace("S", $.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / ko), S = Math.floor(c % ko / di), g = Math.floor(c % di / ui), T = Math.floor(c % ui / si), $ = Math.floor(c % si), y = {
        days: h,
        hours: S,
        minutes: g,
        seconds: T,
        milliseconds: $
      };
      o.value = y, O(e.onChange, o.value), a.value = l(e.format, y);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: S
      } = e, g = Date.now();
      n.value || (n.value = g + z(c));
      var T = n.value - g;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        O(h);
        return;
      }
      (S || r.value) && (t.value = $n(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || z(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, ku(t.value), u();
    };
    return oe(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: Hv,
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
var Mr = 9e15, ir = 1e9, vi = "0123456789abcdef", ht = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", gt = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", fi = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Mr,
  maxE: Mr,
  crypto: !1
}, xl, Bn, fe = !0, It = "[DecimalError] ", nr = It + "Invalid argument: ", _l = It + "Precision limit exceeded", es = It + "crypto unavailable", ns = "[object Decimal]", Je = Math.floor, Re = Math.pow, jv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Gv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, qv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, rs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, kn = 1e7, de = 7, Kv = 9007199254740991, Xv = ht.length - 1, ci = gt.length - 1, q = { toStringTag: ns };
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Zv(a, ls(a, r)), a.precision = e, a.rounding = n, ue(Bn == 2 || Bn == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
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
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / Bt(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Va(o, 1, i.times(n), new o(1), !0);
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
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / Bt(5, e)), t = Va(i, 2, t, t, !0);
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
    if (u.abs().eq(1) && v + 4 <= ci)
      return o = Sn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= ci)
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
  return u[0] ? (e.d = u, e.e = Nt(u, r), fe ? ue(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
q.modulo = q.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Te(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Te(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
q.naturalExponential = q.exp = function() {
  return mi(this);
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
  return e.d = u, e.e = Nt(u, a), fe ? ue(e, l, s) : e;
};
q.precision = q.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(nr + e);
  return r.d ? (n = as(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
q.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
q.sine = q.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Qv(a, ls(a, r)), a.precision = e, a.rounding = n, ue(Bn > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
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
  return n ? ++r : i.shift(), e.d = i, e.e = Nt(i, r), fe ? ue(e, v.precision, v.rounding) : e;
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
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, h = c.d, S = c.constructor;
  if (!h)
    return new S(c);
  if (u = r = new S(1), a = s = new S(0), n = new S(a), i = n.e = as(h) - c.e - 1, o = i % de, n.d[0] = Re(10, o < 0 ? de + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new S(e), !l.isInt() || l.lt(u))
      throw Error(nr + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (fe = !1, l = new S(je(h)), d = S.precision, S.precision = i = h.length * de * 2; v = Te(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Te(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Te(u, a, i, 1).minus(c).abs().cmp(Te(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], S.precision = d, fe = !0, f;
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
  if (n = Je(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Kv)
    return t = ts(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = Re(+l, u), n = r == 0 || !isFinite(r) ? Je(u * (Math.log("0." + je(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = mi(e.times(Kn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), qa(t.d, a, i) && (n = a + 10, t = ue(mi(e.times(Kn(l, n + r)), n), n + 5, 1), +je(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = o, fe = !0, s.rounding = i, ue(t, a, i));
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
    for (t[0] += vi.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Zv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / Bt(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Va(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, h, S, g, T, $, y, C, E, k, A, P, I, N, p, w, L = a.constructor, Y = a.s == t.s ? 1 : -1, G = a.d, R = t.d;
    if (!G || !G[0] || !R || !R[0])
      return new L(
        !a.s || !t.s || (G ? R && G[0] == R[0] : !R) ? NaN : G && G[0] == 0 || !R ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = kn, c = de, d = Je(a.e / c) - Je(t.e / c)), p = R.length, I = G.length, T = new L(Y), $ = T.d = [], v = 0; R[v] == (G[v] || 0); v++)
      ;
    if (R[v] > (G[v] || 0) && d--, i == null ? (k = i = L.precision, o = L.rounding) : l ? k = i + (a.e - t.e) + 1 : k = i, k < 0)
      $.push(1), h = !0;
    else {
      if (k = k / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], k++; (v < I || f) && k--; v++)
          A = f * s + (G[v] || 0), $[v] = A / R | 0, f = A % R | 0;
        h = f || v < I;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), G = e(G, f, s), p = R.length, I = G.length), P = p, y = G.slice(0, p), C = y.length; C < p; )
          y[C++] = 0;
        w = R.slice(), w.unshift(0), N = R[0], R[1] >= s / 2 && ++N;
        do
          f = 0, u = n(R, y, p, C), u < 0 ? (E = y[0], p != C && (E = E * s + (y[1] || 0)), f = E / N | 0, f > 1 ? (f >= s && (f = s - 1), S = e(R, f, s), g = S.length, C = y.length, u = n(S, y, g, C), u == 1 && (f--, r(S, p < g ? w : R, g, s))) : (f == 0 && (u = f = 1), S = R.slice()), g = S.length, g < C && S.unshift(0), r(y, S, C, s), u == -1 && (C = y.length, u = n(R, y, p, C), u < 1 && (f++, r(y, p < C ? w : R, C, s))), C = y.length) : u === 0 && (f++, y = [0]), $[v++] = f, u && y[0] ? y[C++] = G[P] || 0 : (y = [G[P]], C = 1);
        while ((P++ < I || y[0] !== void 0) && k--);
        h = y[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (c == 1)
      T.e = d, xl = h;
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
    return os(e);
  var a, t = e.e, i = je(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Yn(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Yn(-t - 1) + i, r && (a = r - o) > 0 && (i += Yn(a))) : t >= o ? (i += Yn(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Yn(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Yn(a))), i;
}
function Nt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function yt(e, n, r) {
  if (n > Xv)
    throw fe = !0, r && (e.precision = r), Error(_l);
  return ue(new e(ht), n, 1, !0);
}
function Sn(e, n, r) {
  if (n > ci)
    throw Error(_l);
  return ue(new e(gt), n, r, !0);
}
function as(e) {
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
function ts(e, n, r, a) {
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
function is(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function mi(e, n) {
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
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, h = 10, S = e, g = S.d, T = S.constructor, $ = T.rounding, y = T.precision;
  if (S.s < 0 || !g || !g[0] || !S.e && g[0] == 1 && g.length == 1)
    return new T(g && !g[0] ? -1 / 0 : S.s != 1 ? NaN : g ? 0 : S);
  if (n == null ? (fe = !1, d = y) : d = n, T.precision = d += h, r = je(g), a = r.charAt(0), Math.abs(i = S.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      S = S.times(e), r = je(S.d), a = r.charAt(0), c++;
    i = S.e, a > 1 ? (S = new T("0." + r), i++) : S = new T(a + "." + r.slice(1));
  } else
    return u = yt(T, d + 2, y).times(i + ""), S = Kn(new T(a + "." + r.slice(1)), d - h).plus(u), T.precision = y, n == null ? ue(S, y, $, fe = !0) : S;
  for (v = S, s = o = S = Te(S.minus(1), S.plus(1), d, 1), f = ue(S.times(S), d, 1), t = 3; ; ) {
    if (o = ue(o.times(f), d, 1), u = s.plus(Te(o, new T(t), d, 1)), je(u.d).slice(0, d) === je(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(yt(T, d + 2, y).times(i + ""))), s = Te(s, new T(c), d, 1), n == null)
        if (qa(s.d, d - h, $, l))
          T.precision = d += h, u = o = S = Te(v.minus(1), v.plus(1), d, 1), f = ue(S.times(S), d, 1), t = l = 1;
        else
          return ue(s, T.precision = y, $, fe = !0);
      else
        return T.precision = y, s;
    s = u, t += 2;
  }
}
function os(e) {
  return String(e.s * e.s / 0);
}
function pi(e, n) {
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
function Jv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), rs.test(n))
      return pi(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Gv.test(n))
    r = 16, n = n.toLowerCase();
  else if (jv.test(n))
    r = 2;
  else if (qv.test(n))
    r = 8;
  else
    throw Error(nr + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = ts(a, new a(r), i, i * 2)), u = ut(n, r, kn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Nt(u, d), e.d = u, fe = !1, o && (e = Te(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Re(2, s) : Xn.pow(2, s))), fe = !0, e);
}
function Qv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Va(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / Bt(5, r)), n = Va(e, 2, n, n);
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
function Bt(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function ls(e, n) {
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
    d = os(e);
  else {
    for (d = Mn(e), o = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = ut(Mn(f), 10, t), f.e = f.d.length), v = ut(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = Te(e, f, r, a, 0, t), v = e.d, i = e.e, u = xl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += vi.charAt(v[o]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = ut(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += vi.charAt(v[o]);
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
function xv(e) {
  return new this(e).abs();
}
function _v(e) {
  return new this(e).acos();
}
function ef(e) {
  return new this(e).acosh();
}
function nf(e, n) {
  return new this(e).plus(n);
}
function rf(e) {
  return new this(e).asin();
}
function af(e) {
  return new this(e).asinh();
}
function tf(e) {
  return new this(e).atan();
}
function of(e) {
  return new this(e).atanh();
}
function lf(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Sn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Sn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Sn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(Te(e, n, i, 1)), n = Sn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Te(e, n, i, 1)), r;
}
function sf(e) {
  return new this(e).cbrt();
}
function uf(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function df(e, n, r) {
  return new this(e).clamp(n, r);
}
function vf(e) {
  if (!e || typeof e != "object")
    throw Error(It + "Object expected");
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
    if (r = i[n], t && (this[r] = fi[r]), (a = e[r]) !== void 0)
      if (Je(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(nr + r + ": " + a);
  if (r = "crypto", t && (this[r] = fi[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(es);
      else
        this[r] = !1;
    else
      throw Error(nr + r + ": " + a);
  return this;
}
function ff(e) {
  return new this(e).cos();
}
function cf(e) {
  return new this(e).cosh();
}
function ss(e) {
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
      return pi(u, i.toString());
    } else if (s !== "string")
      throw Error(nr + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), rs.test(i) ? pi(u, i) : Jv(u, i);
  }
  if (t.prototype = q, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = vf, t.clone = ss, t.isDecimal = Oo, t.abs = xv, t.acos = _v, t.acosh = ef, t.add = nf, t.asin = rf, t.asinh = af, t.atan = tf, t.atanh = of, t.atan2 = lf, t.cbrt = sf, t.ceil = uf, t.clamp = df, t.cos = ff, t.cosh = cf, t.div = mf, t.exp = pf, t.floor = hf, t.hypot = gf, t.ln = yf, t.log = bf, t.log10 = Sf, t.log2 = wf, t.max = Cf, t.min = kf, t.mod = $f, t.mul = Tf, t.pow = Of, t.random = Pf, t.round = Vf, t.sign = Mf, t.sin = Ef, t.sinh = If, t.sqrt = Nf, t.sub = Bf, t.sum = Df, t.tan = Af, t.tanh = zf, t.trunc = Lf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function mf(e, n) {
  return new this(e).div(n);
}
function pf(e) {
  return new this(e).exp();
}
function hf(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function gf() {
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
  return e instanceof Xn || e && e.toStringTag === ns || !1;
}
function yf(e) {
  return new this(e).ln();
}
function bf(e, n) {
  return new this(e).log(n);
}
function wf(e) {
  return new this(e).log(2);
}
function Sf(e) {
  return new this(e).log(10);
}
function Cf() {
  return is(this, arguments, "lt");
}
function kf() {
  return is(this, arguments, "gt");
}
function $f(e, n) {
  return new this(e).mod(n);
}
function Tf(e, n) {
  return new this(e).mul(n);
}
function Of(e, n) {
  return new this(e).pow(n);
}
function Pf(e) {
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
      throw Error(es);
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
function Vf(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Mf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Ef(e) {
  return new this(e).sin();
}
function If(e) {
  return new this(e).sinh();
}
function Nf(e) {
  return new this(e).sqrt();
}
function Bf(e, n) {
  return new this(e).sub(n);
}
function Df() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function Af(e) {
  return new this(e).tan();
}
function zf(e) {
  return new this(e).tanh();
}
function Lf(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
q[Symbol.for("nodejs.util.inspect.custom")] = q.toString;
q[Symbol.toStringTag] = "Decimal";
var Xn = q.constructor = ss(fi);
ht = new Xn(ht);
gt = new Xn(gt);
var Rf = {
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
  n: Uf,
  classes: Yf
} = ee("counter"), Po = 100, Vo = 600, Ff = ["inputmode", "readonly", "disabled"];
function Hf(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
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
      }]]), ke(D(
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
        Ff
      ), [[ou, e.inputValue]]), ke(re(
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
  render: Hf,
  name: "VarCounter",
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  directives: {
    Ripple: Fe
  },
  inheritAttrs: !1,
  props: Rf,
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
    } = l != null ? l : {}, h = () => d(e.rules, e.modelValue), S = (R) => {
      Ee(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: Z
        } = e;
        u(J, R, j, Z);
      });
    }, g = () => {
      var {
        min: R
      } = e;
      O(e["onUpdate:modelValue"], R != null ? z(R) : 0), v();
    }, T = {
      reset: g,
      validate: h,
      resetValidation: v
    }, $ = F(() => {
      var {
        max: R,
        modelValue: J
      } = e;
      return R != null && z(J) >= z(R);
    }), y = F(() => {
      var {
        min: R,
        modelValue: J
      } = e;
      return R != null && z(J) <= z(R);
    }), C = (R) => {
      var {
        decimalLength: J,
        max: j,
        min: Z
      } = e, B = z(R);
      return j != null && B > z(j) && (B = z(j)), Z != null && B < z(Z) && (B = z(Z)), R = String(B), J != null && (R = B.toFixed(z(J))), R;
    }, E = (R) => {
      var {
        lazyChange: J,
        onBeforeChange: j
      } = e, {
        value: Z
      } = R.target, B = C(Z);
      J ? O(j, z(B), G) : Y(B), S("onInputChange");
    }, k = () => {
      var {
        disabled: R,
        readonly: J,
        disableDecrement: j,
        decrementButton: Z,
        lazyChange: B,
        step: X,
        modelValue: W,
        onDecrement: Q,
        onBeforeChange: te
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !Z) && !y.value) {
        var ie = new Xn(z(W)).minus(new Xn(z(X))).toString(), ce = C(ie), ye = z(ce);
        O(Q, ye), B ? O(te, ye, G) : (Y(ce), S("onDecrement"));
      }
    }, A = () => {
      var {
        disabled: R,
        readonly: J,
        disableIncrement: j,
        incrementButton: Z,
        lazyChange: B,
        step: X,
        modelValue: W,
        onIncrement: Q,
        onBeforeChange: te
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !Z) && !$.value) {
        var ie = new Xn(z(W)).plus(new Xn(z(X))).toString(), ce = C(ie), ye = z(ce);
        O(Q, ye), B ? O(te, ye, G) : (Y(ce), S("onIncrement"));
      }
    }, P = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (i = window.setTimeout(() => {
        L();
      }, Vo));
    }, I = () => {
      var {
        press: R,
        lazyChange: J
      } = e;
      !R || J || (t = window.setTimeout(() => {
        w();
      }, Vo));
    }, N = () => {
      a && clearTimeout(a), i && clearTimeout(i);
    }, p = () => {
      r && clearTimeout(r), t && clearTimeout(t);
    }, w = () => {
      r = window.setTimeout(() => {
        A(), w();
      }, Po);
    }, L = () => {
      a = window.setTimeout(() => {
        k(), L();
      }, Po);
    }, Y = (R) => {
      n.value = R;
      var J = z(R);
      O(e["onUpdate:modelValue"], J);
    }, G = (R) => {
      Y(C(String(R))), S("onLazyChange");
    };
    return O(o, T), oe(() => e.modelValue, (R) => {
      Y(C(String(R))), O(e.onChange, z(R));
    }), Y(C(String(e.modelValue))), {
      n: Uf,
      classes: Yf,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: $,
      isMin: y,
      validate: h,
      reset: g,
      resetValidation: v,
      handleChange: E,
      decrement: k,
      increment: A,
      pressDecrement: P,
      pressIncrement: I,
      releaseDecrement: N,
      releaseIncrement: p,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var us = 60, ds = us * 60, vs = ds * 24, Wf = vs * 7, Ma = 1e3, Gt = us * Ma, Mo = ds * Ma, jf = vs * Ma, Gf = Wf * Ma, Gi = "millisecond", Er = "second", Ir = "minute", Nr = "hour", Fn = "day", dt = "week", wn = "month", fs = "quarter", Hn = "year", Br = "date", qf = "YYYY-MM-DDTHH:mm:ssZ", Eo = "Invalid Date", Kf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, Xf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Zf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var hi = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, Jf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + hi(t, 2, "0") + ":" + hi(i, 2, "0");
}, Qf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, wn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), wn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, xf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, _f = function(n) {
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
    Q: fs
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, ec = function(n) {
  return n === void 0;
};
const nc = {
  s: hi,
  z: Jf,
  m: Qf,
  a: xf,
  p: _f,
  u: ec
};
var Ha = "en", cr = {};
cr[Ha] = Zf;
var qi = function(n) {
  return n instanceof Dt;
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
  return a.date = n, a.args = arguments, new Dt(a);
}, rc = function(n, r) {
  return ae(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, $e = nc;
$e.l = bt;
$e.i = qi;
$e.w = rc;
var ac = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if ($e.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Kf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Dt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = bt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = ac(a), this.$x = a.x || {}, this.init();
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
      var y = $e.w(i.$u ? Date.UTC(i.$y, $, T) : new Date(i.$y, $, T), i);
      return o ? y : y.endOf(Fn);
    }, u = function(T, $) {
      var y = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return $e.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? y : C).slice($)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Hn:
        return o ? s(1, 0) : s(31, 11);
      case wn:
        return o ? s(1, v) : s(0, v + 1);
      case dt: {
        var h = this.$locale().weekStart || 0, S = (d < h ? d + 7 : d) - h;
        return s(o ? f - S : f + (6 - S), v);
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
    var u = (o = {}, o[Ir] = Gt, o[Nr] = Mo, o[Er] = Ma, o)[l] || 1, d = this.$d.getTime() + a * u;
    return $e.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || Eo;
    var o = a || qf, l = $e.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, h = function(y, C, E, k) {
      return y && (y[C] || y(t, o)) || E[C].slice(0, k);
    }, S = function(y) {
      return $e.s(s % 12 || 12, y, "0");
    }, g = c || function($, y, C) {
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
      h: S(1),
      hh: S(2),
      a: g(s, u, !0),
      A: g(s, u, !1),
      m: String(u),
      mm: $e.s(u, 2, "0"),
      s: String(this.$s),
      ss: $e.s(this.$s, 2, "0"),
      SSS: $e.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(Xf, function($, y) {
      return y || T[$] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = $e.p(t), s = ae(a), u = (s.utcOffset() - this.utcOffset()) * Gt, d = this - s, v = $e.m(this, s);
    return v = (o = {}, o[Hn] = v / 12, o[wn] = v, o[fs] = v / 3, o[dt] = (d - u) / Gf, o[Fn] = (d - u) / jf, o[Nr] = d / Mo, o[Ir] = d / Gt, o[Er] = d / Ma, o)[l] || d, i ? v : $e.a(v);
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
}(), cs = Dt.prototype;
ae.prototype = cs;
[["$ms", Gi], ["$s", Er], ["$m", Ir], ["$H", Nr], ["$W", Fn], ["$M", wn], ["$y", Hn], ["$D", Br]].forEach(function(e) {
  cs[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ae.extend = function(e, n) {
  return e.$i || (e(n, Dt, ae), e.$i = !0), ae;
};
ae.locale = bt;
ae.isDayjs = qi;
ae.unix = function(e) {
  return ae(e * 1e3);
};
ae.en = cr[Ha];
ae.Ls = cr;
ae.p = {};
const ms = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, ps = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function tc(e) {
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
}], ic = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: tc
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
  n: oc
} = ee("picker-header");
function lc(e, n) {
  var r = le("var-icon"), a = le("var-button");
  return b(), V(
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
    ), D(
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
          default: ve(() => [(b(), V(
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
const hs = _({
  render: lc,
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
        return z(v) + t.value;
      var f = (l = We.value.datePickerMonthDict) == null ? void 0 : l[d.index].name;
      return We.value.lang === "zh-CN" ? v + " " + f : f + " " + v;
    }), o = (l) => {
      l === "prev" && e.disabled.left || l === "next" && e.disabled.right || (r("check-date", l), a.value = l === "prev", t.value += l === "prev" ? -1 : 1);
    };
    return oe(() => e.date, () => {
      t.value = 0;
    }), {
      n: oc,
      reverse: a,
      showDate: i,
      checkDate: o
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
ae.extend(ms);
ae.extend(ps);
var {
  n: tt,
  classes: sc
} = ee("month-picker"), {
  n: it
} = ee("date-picker");
function uc(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [D(
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
          default: ve(() => [(b(), V("ul", {
            key: e.panelKey
          }, [(b(!0), V(
            Pe,
            null,
            Be(e.MONTH_LIST, (t) => (b(), V("li", {
              key: t.index
            }, [re(
              a,
              Ve({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, gi({}, e.buttonProps(t.index)), {
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
const dc = _({
  render: uc,
  name: "MonthPickerPanel",
  components: {
    VarButton: an,
    PanelHeader: hs
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
    } = n, [a, t] = e.current.split("-"), i = M(!1), o = M(0), l = M(null), s = Me({
      left: !1,
      right: !1
    }), u = F(() => e.choose.chooseYear === e.preview.previewYear), d = F(() => e.preview.previewYear === a), v = ($) => {
      var y, C;
      return (y = (C = We.value.datePickerMonthDict) == null ? void 0 : C[$].abbr) != null ? y : "";
    }, f = ($) => {
      var {
        preview: {
          previewYear: y
        },
        componentProps: {
          min: C,
          max: E
        }
      } = e, k = !0, A = !0, P = y + "-" + $;
      return E && (k = ae(P).isSameOrBefore(ae(E), "month")), C && (A = ae(P).isSameOrAfter(ae(C), "month")), k && A;
    }, c = ($) => {
      var {
        choose: {
          chooseMonths: y,
          chooseDays: C,
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
        var P = ae($).isSameOrBefore(ae(E[1]), "month"), I = ae($).isSameOrAfter(ae(E[0]), "month");
        return P && I;
      }
      return k === "month" ? y.includes($) : C.some((N) => N.includes($));
    }, h = ($) => {
      var {
        choose: {
          chooseMonth: y
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: E,
          color: k,
          multiple: A,
          range: P
        }
      } = e, I = C + "-" + $, N = () => P || A ? c(I) : (y == null ? void 0 : y.index) === $ && u.value, p = () => f($) ? E ? !E(I) : !1 : !0, w = p(), L = () => w ? !0 : P || A ? !c(I) : !u.value || (y == null ? void 0 : y.index) !== $, Y = () => d.value && t === $ && e.componentProps.showCurrent ? (P || A || u.value) && w ? !0 : P || A ? !c(I) : u.value ? (y == null ? void 0 : y.index) !== t : !0 : !1, G = () => w ? "" : Y() ? k != null ? k : "" : N() ? "" : it() + "-color-cover", R = G().startsWith(it());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : k,
        textColor: R ? "" : G(),
        [it() + "-color-cover"]: R,
        class: sc(tt("button"), [w, tt("button--disabled")])
      };
    }, S = ($, y) => {
      var C = y.currentTarget;
      C.classList.contains(tt("button--disabled")) || r("choose-month", $);
    }, g = ($) => {
      i.value = $ === "prev", o.value += $ === "prev" ? -1 : 1, r("check-preview", "year", $);
    }, T = ($) => {
      l.value.checkDate($);
    };
    return oe(() => e.preview.previewYear, ($) => {
      var {
        componentProps: {
          min: y,
          max: C
        }
      } = e;
      C && (s.right = !ae("" + (z($) + 1)).isSameOrBefore(ae(C), "year")), y && (s.left = !ae("" + (z($) - 1)).isSameOrAfter(ae(y), "year"));
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
      chooseMonth: S,
      checkDate: g
    };
  }
});
var {
  n: Io,
  classes: vc
} = ee("year-picker"), fc = ["onClick"];
function cc(e, n) {
  return b(), V(
    "ul",
    {
      class: m(e.n())
    },
    [(b(!0), V(
      Pe,
      null,
      Be(e.yearList, (r) => (b(), V(
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
        fc
      ))),
      128
    ))],
    2
  );
}
const mc = _({
  render: cc,
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
      classes: vc,
      yearList: a,
      chooseYear: t,
      toNumber: z
    };
  }
});
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
ae.extend(ms);
ae.extend(ps);
var {
  n: Vr,
  classes: pc
} = ee("day-picker"), {
  n: ot
} = ee("date-picker");
function hc(e, n) {
  var r = le("panel-header"), a = le("var-button");
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [D(
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
          default: ve(() => [(b(), V("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(b(!0), V(
              Pe,
              null,
              Be(e.sortWeekList, (t) => (b(), V(
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
          ), D(
            "ul",
            {
              class: m(e.n("body"))
            },
            [(b(!0), V(
              Pe,
              null,
              Be(e.days, (t, i) => (b(), V("li", {
                key: i
              }, [re(
                a,
                Ve({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, yi({}, e.buttonProps(t)), {
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
const gc = _({
  render: hc,
  name: "DayPickerPanel",
  components: {
    VarButton: an,
    PanelHeader: hs
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
    } = n, [a, t, i] = e.current.split("-"), o = M([]), l = M(!1), s = M(0), u = M(null), d = Me({
      left: !1,
      right: !1
    }), v = F(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = F(() => {
      var P;
      return e.choose.chooseYear === e.preview.previewYear && ((P = e.choose.chooseMonth) == null ? void 0 : P.index) === e.preview.previewMonth.index;
    }), c = F(() => {
      var P = Fa.findIndex((I) => I.index === e.componentProps.firstDayOfWeek);
      return P === -1 || P === 0 ? Fa : Fa.slice(P).concat(Fa.slice(0, P));
    }), h = (P) => {
      var I, N;
      return (I = (N = We.value.datePickerWeekDict) == null ? void 0 : N[P].abbr) != null ? I : "";
    }, S = (P) => P > 0 ? P : "", g = () => {
      var {
        preview: {
          previewMonth: P,
          previewYear: I
        }
      } = e, N = ae(I + "-" + P.index).daysInMonth(), p = ae(I + "-" + P.index + "-01").day(), w = c.value.findIndex((L) => L.index === "" + p);
      o.value = [...Array(w).fill(-1), ...Array.from(Array(N + 1).keys())].filter((L) => L);
    }, T = () => {
      var {
        preview: {
          previewYear: P,
          previewMonth: I
        },
        componentProps: {
          max: N,
          min: p
        }
      } = e;
      if (N) {
        var w = P + "-" + (z(I.index) + 1);
        d.right = !ae(w).isSameOrBefore(ae(N), "month");
      }
      if (p) {
        var L = P + "-" + (z(I.index) - 1);
        d.left = !ae(L).isSameOrAfter(ae(p), "month");
      }
    }, $ = (P) => {
      var {
        preview: {
          previewYear: I,
          previewMonth: N
        },
        componentProps: {
          min: p,
          max: w
        }
      } = e, L = !0, Y = !0, G = I + "-" + N.index + "-" + P;
      return w && (L = ae(G).isSameOrBefore(ae(w), "day")), p && (Y = ae(G).isSameOrAfter(ae(p), "day")), L && Y;
    }, y = (P) => {
      var {
        choose: {
          chooseDays: I,
          chooseRangeDay: N
        },
        componentProps: {
          range: p
        }
      } = e;
      if (p) {
        if (!N.length)
          return !1;
        var w = ae(P).isSameOrBefore(ae(N[1]), "day"), L = ae(P).isSameOrAfter(ae(N[0]), "day");
        return w && L;
      }
      return I.includes(P);
    }, C = (P) => {
      if (P < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Vr("button")
        };
      var {
        choose: {
          chooseDay: I
        },
        preview: {
          previewYear: N,
          previewMonth: p
        },
        componentProps: {
          allowedDates: w,
          color: L,
          multiple: Y,
          range: G
        }
      } = e, R = N + "-" + p.index + "-" + P, J = () => G || Y ? y(R) : z(I) === P && f.value, j = () => $(P) ? w ? !w(R) : !1 : !0, Z = j(), B = () => Z ? !0 : G || Y ? !y(R) : !f.value || z(I) !== P, X = () => v.value && z(i) === P && e.componentProps.showCurrent ? (G || Y || f.value) && Z ? !0 : G || Y ? !y(R) : f.value ? I !== i : !0 : !1, W = () => Z ? "" : X() ? L != null ? L : "" : J() ? "" : ot() + "-color-cover", Q = W().startsWith(ot());
      return {
        text: B(),
        outline: X(),
        textColor: Q ? "" : W(),
        [ot() + "-color-cover"]: Q,
        class: pc(Vr("button"), Vr("button--usable"), [Z, Vr("button--disabled")])
      };
    }, E = (P) => {
      l.value = P === "prev", s.value += P === "prev" ? -1 : 1, r("check-preview", "month", P);
    }, k = (P, I) => {
      var N = I.currentTarget;
      N.classList.contains(Vr("button--disabled")) || r("choose-day", P);
    }, A = (P) => {
      u.value.checkDate(P);
    };
    return Ue(() => {
      g(), T();
    }), oe(() => e.preview, () => {
      g(), T();
    }), {
      n: Vr,
      nDate: ot,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: A,
      filterDay: S,
      getDayAbbr: h,
      checkDate: E,
      chooseDay: k,
      buttonProps: C
    };
  }
});
var {
  n: yc,
  classes: bc
} = ee("date-picker");
function wc(e, n) {
  var r = le("year-picker-panel"), a = le("month-picker-panel"), t = le("day-picker-panel");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [D(
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
      ), D(
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
              return [e.type === "month" ? (b(), V("div", {
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
              )])])) : (b(), V("div", {
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
              )]) : H(e.$slots, "date", Cl(Ve({
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
    ), D(
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
          default: ve(() => [e.getPanelType === "year" ? (b(), pe(
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
          )) : e.getPanelType === "month" ? (b(), pe(
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
          )) : e.getPanelType === "date" ? (b(), pe(
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
  render: wc,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: dc,
    YearPickerPanel: mc,
    DayPickerPanel: gc
  },
  props: ic,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = ae().format("YYYY-MM-D"), [o, l] = i.split("-"), s = vt.find((se) => se.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), c = M(), h = M(), S = M(s), g = M(o), T = M(!1), $ = M([]), y = M([]), C = M([]), E = M([]), k = M(null), A = M(null), P = Me({
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
      chooseMonths: $.value,
      chooseDays: y.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: E.value
    })), N = F(() => ({
      previewMonth: S.value,
      previewYear: g.value
    })), p = F(() => {
      var {
        multiple: se,
        range: ge
      } = e;
      if (ge)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var me = "";
      if (f.value) {
        var Se, Ce;
        me = (Se = (Ce = We.value.datePickerMonthDict) == null ? void 0 : Ce[f.value.index].name) != null ? Se : "";
      }
      return se ? "" + $.value.length + We.value.datePickerSelected : me;
    }), w = F(() => {
      var se, ge, me, Se, {
        multiple: Ce,
        range: ze
      } = e;
      if (ze) {
        var xe = E.value.map((Ht) => ae(Ht).format("YYYY-MM-DD"));
        return xe.length ? xe[0] + " ~ " + xe[1] : "";
      }
      if (Ce)
        return "" + y.value.length + We.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var vn = ae(c.value + "-" + f.value.index + "-" + h.value).day(), Pr = Fa.find((Ht) => Ht.index === "" + vn), to = (se = (ge = We.value.datePickerWeekDict) == null ? void 0 : ge[Pr.index].name) != null ? se : "", nu = (me = (Se = We.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? me : "", ru = yr(h.value, 2, "0");
      return We.value.lang === "zh-CN" ? f.value.index + "-" + ru + " " + to.slice(0, 3) : to.slice(0, 3) + ", " + nu.slice(0, 3) + " " + h.value;
    }), L = F(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = F(() => !e.touchable || ["", "year"].includes(L.value)), G = F(() => {
      var se, ge, me, Se, Ce = ae(c.value + "-" + ((se = f.value) == null ? void 0 : se.index) + "-" + h.value).day(), ze = h.value ? yr(h.value, 2, "0") : "";
      return {
        week: "" + Ce,
        year: (ge = c.value) != null ? ge : "",
        month: (me = (Se = f.value) == null ? void 0 : Se.index) != null ? me : "",
        date: ze
      };
    }), R = F(() => I.value.chooseRangeDay.map((se) => ae(se).format("YYYY-MM-DD"))), J = F(() => c.value === g.value), j = F(() => {
      var se;
      return ((se = f.value) == null ? void 0 : se.index) === S.value.index;
    }), Z = (se) => {
      se === "year" ? u.value = !0 : se === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, B = (se) => {
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
        } = se.touches[0], Se = ge - n, Ce = me - r;
        t = X(Math.abs(Se), Math.abs(Ce)), a = Se > 0 ? "prev" : "next";
      }
    }, Q = () => {
      if (!(Y.value || t !== "x")) {
        var se = L.value === "month" ? k : A;
        Vt(() => {
          se.value.forwardRef(a), ao();
        });
      }
    }, te = (se, ge) => {
      var me = ge === "month" ? C : E;
      if (me.value = v.value ? [se, se] : [me.value[0], se], v.value = !v.value, v.value) {
        var Se = ae(me.value[0]).isAfter(me.value[1]), Ce = Se ? [me.value[1], me.value[0]] : [...me.value];
        O(e["onUpdate:modelValue"], Ce), O(e.onChange, Ce);
      }
    }, ie = (se, ge) => {
      var me = ge === "month" ? $ : y, Se = ge === "month" ? "YYYY-MM" : "YYYY-MM-DD", Ce = me.value.map((xe) => ae(xe).format(Se)), ze = Ce.findIndex((xe) => xe === se);
      ze === -1 ? Ce.push(se) : Ce.splice(ze, 1), O(e["onUpdate:modelValue"], Ce), O(e.onChange, Ce);
    }, ce = (se, ge) => !c.value || !f.value ? !1 : J.value ? se === "month" ? ge.index < f.value.index : j.value ? ge < z(h.value) : f.value.index > S.value.index : c.value > g.value, ye = (se) => {
      var {
        readonly: ge,
        range: me,
        multiple: Se,
        onChange: Ce,
        "onUpdate:modelValue": ze
      } = e;
      if (!(se < 0 || ge)) {
        T.value = ce("day", se);
        var xe = g.value + "-" + S.value.index + "-" + se, vn = ae(xe).format("YYYY-MM-DD");
        me ? te(vn, "day") : Se ? ie(vn, "day") : (O(ze, vn), O(Ce, vn));
      }
    }, Ye = (se) => {
      var {
        type: ge,
        readonly: me,
        range: Se,
        multiple: Ce,
        onChange: ze,
        onPreview: xe,
        "onUpdate:modelValue": vn
      } = e;
      if (T.value = ce("month", se), ge === "month" && !me) {
        var Pr = g.value + "-" + se.index;
        Se ? te(Pr, "month") : Ce ? ie(Pr, "month") : (O(vn, Pr), O(ze, Pr));
      } else
        S.value = se, O(xe, z(g.value), z(S.value.index));
      d.value = !1;
    }, Qe = (se) => {
      g.value = "" + se, u.value = !1, d.value = !0, O(e.onPreview, z(g.value), z(S.value.index));
    }, Ne = (se, ge) => {
      var me = ge === "prev" ? -1 : 1;
      if (se === "year")
        g.value = "" + (z(g.value) + me);
      else {
        var Se = z(S.value.index) + me;
        Se < 1 && (g.value = "" + (z(g.value) - 1), Se = 12), Se > 12 && (g.value = "" + (z(g.value) + 1), Se = 1), S.value = vt.find((Ce) => z(Ce.index) === Se);
      }
      O(e.onPreview, z(g.value), z(S.value.index));
    }, He = () => (e.multiple || e.range) && !be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && be(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ft = (se) => be(se) ? !1 : se === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, xs = (se, ge) => {
      var me = ge === "month" ? C : E, Se = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Ce = se.map((vn) => ae(vn).format(Se)).slice(0, 2), ze = me.value.some((vn) => Ft(vn));
      if (!ze) {
        me.value = Ce;
        var xe = ae(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && xe && (me.value = [me.value[1], me.value[0]]);
      }
    }, _s = (se, ge) => {
      var me = ge === "month" ? $ : y, Se = ge === "month" ? "YYYY-MM" : "YYYY-MM-D", Ce = Array.from(new Set(se.map((ze) => ae(ze).format(Se))));
      me.value = Ce.filter((ze) => ze !== "Invalid Date");
    }, eu = (se) => {
      var ge = ae(se).format("YYYY-MM-D");
      if (!Ft(ge)) {
        var [me, Se, Ce] = ge.split("-"), ze = vt.find((xe) => xe.index === Se);
        f.value = ze, c.value = me, h.value = Ce, S.value = ze, g.value = me;
      }
    }, ao = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return oe(() => e.modelValue, (se) => {
      if (!(!He() || Ft(se) || !se))
        if (e.range) {
          if (!be(se))
            return;
          v.value = se.length !== 1, xs(se, e.type);
        } else if (e.multiple) {
          if (!be(se))
            return;
          _s(se, e.type);
        } else
          eu(se);
    }, {
      immediate: !0
    }), oe(L, ao), {
      n: yc,
      classes: bc,
      monthPanelEl: k,
      dayPanelEl: A,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: g,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: p,
      getDateTitle: w,
      getPanelType: L,
      getChoose: I,
      getPreview: N,
      componentProps: P,
      slotProps: G,
      formatRange: R,
      clickEl: Z,
      handleTouchstart: B,
      handleTouchmove: W,
      handleTouchend: Q,
      getChooseDay: ye,
      getChooseMonth: Ye,
      getChooseYear: Qe,
      checkPreview: Ne
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
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
function Sc(e) {
  return ["left", "center", "right"].includes(e);
}
var Cc = bi({
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
    validator: Sc
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
var {
  n: kc,
  classes: $c
} = ee("dialog");
function Tc(e, n) {
  var r = le("var-button"), a = le("var-popup");
  return b(), pe(
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: wi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: m(e.n("title"))
          },
          [H(e.$slots, "title", {}, () => [he(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), D(
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
        ), D(
          "div",
          {
            class: m(e.n("actions"))
          },
          [e.cancelButton ? (b(), pe(
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
          )) : x("v-if", !0), e.confirmButton ? (b(), pe(
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
  render: Tc,
  name: "VarDialog",
  components: {
    VarPopup: Cn,
    VarButton: an
  },
  inheritAttrs: !1,
  props: Cc,
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
      n: kc,
      classes: $c,
      pack: We,
      dt: Ot,
      popupShow: n,
      popupCloseOnClickOverlay: r,
      handleClickOverlay: t,
      confirm: i,
      cancel: o,
      toSizeUnit: we
    };
  }
});
var jn;
function wr(e) {
  return Fi() ? new Promise((n) => {
    wr.close();
    var r = Ze(e) || Ke(e) ? {
      message: String(e)
    } : e, a = Me(r);
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
    jn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
wr.Component = mr;
var Oc = {
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
  n: Pc,
  classes: Vc
} = ee("divider");
function Mc(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: K(e.style)
    },
    [H(e.$slots, "default", {}, () => [e.description ? (b(), V(
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
  render: Mc,
  name: "VarDivider",
  props: Oc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Me({
      withText: !1
    }), t = F(() => Qt(e.inset) ? e.inset : !0), i = F(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Qt(l) || l === 0)
        return Dr({}, d);
      var v = z(l), f = Math.abs(v) + (l + "").replace(v + "", "");
      return s ? Dr({}, d, {
        height: "calc(80% - " + we(f) + ")"
      }) : Dr({}, d, {
        width: "calc(100% - " + we(f) + ")",
        left: v > 0 ? we(f) : we(0)
      });
    }), o = () => {
      a.withText = Boolean(r.default) || Boolean(e.description);
    };
    return Ue(() => {
      o();
    }), Ri(() => {
      o();
    }), Dr({
      n: Pc,
      classes: Vc
    }, lu(a), {
      style: i,
      isInset: t
    });
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
function Ec(e) {
  return ["start", "end"].includes(e);
}
var Ic = {
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
    validator: Ec
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
function Nc(e) {
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
  n: Bc
} = ee("form");
function Dc(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [H(e.$slots, "default")],
    2
  );
}
const Zn = _({
  render: Dc,
  name: "VarForm",
  props: Ic,
  setup(e) {
    var n = F(() => e.disabled), r = F(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = fv(), i = (d, v) => {
      setTimeout(() => {
        var f = Or(v), c = f === window ? 0 : co(f), h = co(v) - c - De(e.scrollToErrorOffsetY);
        Ga(f, {
          top: h,
          animation: xt
        });
      }, 300);
    }, o = /* @__PURE__ */ function() {
      var d = Nc(function* () {
        var v = yield Promise.all(a.map((g) => {
          var {
            validate: T
          } = g;
          return T();
        }));
        if (e.scrollToError) {
          var [, f] = cu(v, (g) => g === !1, e.scrollToError), c = f > -1;
          if (c) {
            var h, S = (h = a[f].instance.proxy) == null ? void 0 : h.$el;
            i(f, S);
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
      n: Bc,
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
function At(e) {
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
var Ac = "background-image", zc = "lazy-loading", Lc = "lazy-error", Do = "lazy-attempt", Rc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], Ci = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ea = [], wt = [], gs = mu(100), Le = {
  loading: Ci,
  error: Ci,
  attempt: 3,
  throttleWait: 300,
  events: Rc
}, Ki = Yi(et, Le.throttleWait);
function zt(e, n) {
  e._lazy.arg === Ac ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Uc(e) {
  e._lazy.loading && zt(e, e._lazy.loading), et();
}
function Yc(e) {
  e._lazy.error && zt(e, e._lazy.error), e._lazy.state = "error", Zi(e), et();
}
function ys(e, n) {
  zt(e, n), e._lazy.state = "success", Zi(e), et();
}
function Fc(e) {
  var n;
  wt.includes(e) || (wt.push(e), (n = Le.events) == null || n.forEach((r) => {
    e.addEventListener(r, Ki, {
      passive: !0
    });
  }));
}
function Hc() {
  wt.forEach((e) => {
    var n;
    (n = Le.events) == null || n.forEach((r) => {
      e.removeEventListener(r, Ki);
    });
  }), wt.length = 0;
}
function Wc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(zc)) != null ? r : Le.loading,
    error: (a = e.getAttribute(Lc)) != null ? a : Le.error,
    attempt: e.getAttribute(Do) ? Number(e.getAttribute(Do)) : Le.attempt
  };
  e._lazy = Si({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), zt(e, Ci), O(Le.filter, e._lazy);
}
function jc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, gs.add(n), ys(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? Yc(e) : bs(e);
  });
}
function bs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (gs.has(n)) {
      ys(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Uc(e), jc(e, n);
  }
}
function Xi(e) {
  return ki.apply(this, arguments);
}
function ki() {
  return ki = At(function* (e) {
    (yield gu(e)) && bs(e);
  }), ki.apply(this, arguments);
}
function et() {
  Ea.forEach((e) => Xi(e));
}
function Gc(e) {
  return $i.apply(this, arguments);
}
function $i() {
  return $i = At(function* (e) {
    !Ea.includes(e) && Ea.push(e), yu(e).forEach(Fc), yield Xi(e);
  }), $i.apply(this, arguments);
}
function Zi(e) {
  Tt(Ea, e), Ea.length === 0 && Hc();
}
function qc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function ws(e, n) {
  return Ti.apply(this, arguments);
}
function Ti() {
  return Ti = At(function* (e, n) {
    Wc(e, n), yield Gc(e);
  }), Ti.apply(this, arguments);
}
function Kc(e, n) {
  return Oi.apply(this, arguments);
}
function Oi() {
  return Oi = At(function* (e, n) {
    if (!qc(e, n)) {
      Ea.includes(e) && (yield Xi(e));
      return;
    }
    yield ws(e, n);
  }), Oi.apply(this, arguments);
}
function Xc(e) {
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
  mounted: ws,
  unmounted: Zi,
  updated: Kc,
  install(e, n) {
    Xc(n), Ki = Yi(et, Le.throttleWait), e.directive("lazy", this);
  }
};
function Zc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var Jc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Zc,
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
  n: Qc,
  classes: xc
} = ee("image"), _c = ["alt", "title", "lazy-error", "lazy-loading"], em = ["alt", "title", "src"];
function nm(e, n) {
  var r = Xe("lazy"), a = Xe("ripple");
  return ke((b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: K({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? ke((b(), V(
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
      _c
    )), [[r, e.src]]) : (b(), V(
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
      em
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Jr = _({
  render: nm,
  name: "VarImage",
  directives: {
    Lazy: St,
    Ripple: Fe
  },
  props: Jc,
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
      n: Qc,
      classes: xc,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var Ss = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), Cs = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function rm() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Ss), {
    length: r
  } = pn(Cs);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var ks = {
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
function am(e) {
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
var tm = 250, im = 20, {
  n: om,
  classes: lm
} = ee("swipe"), sm = ["onClick"];
function um(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n()),
      ref: "swipeEl"
    },
    [D(
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
    }, () => [e.indicator && e.length ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(b(!0), V(
        Pe,
        null,
        Be(e.length, (r, a) => (b(), V(
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
          sm
        ))),
        128
      ))],
      2
    )) : x("v-if", !0)])],
    2
  );
}
const Jn = _({
  render: um,
  name: "VarSwipe",
  props: ks,
  setup(e) {
    var n = M(null), r = M(0), a = F(() => e.vertical), t = M(0), i = M(0), o = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = rm(), v = !1, f = -1, c, h, S, g, T, $ = (B) => s.find((X) => {
      var {
        index: W
      } = X;
      return W.value === B;
    }), y = () => {
      !e.loop || (i.value >= 0 && $(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && $(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && ($(d.value - 1).setTranslate(0), $(0).setTranslate(0)));
    }, C = (B) => {
      var X = Ke(B) ? B : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: W
      } = e;
      return X <= -1 ? W ? -1 : 0 : X >= d.value ? W ? d.value : d.value - 1 : X;
    }, E = (B) => {
      var {
        loop: X
      } = e;
      return B === -1 ? X ? d.value - 1 : 0 : B === d.value ? X ? 0 : d.value - 1 : B;
    }, k = (B) => {
      var {
        loop: X
      } = e;
      return B < 0 ? X ? d.value - 1 : 0 : B > d.value - 1 ? X ? 0 : d.value - 1 : B;
    }, A = (B) => {
      var X = i.value >= r.value, W = i.value <= -t.value, Q = 0, te = -(t.value - r.value);
      o.value = !0, (X || W) && (o.value = !0, i.value = W ? Q : te, $(0).setTranslate(0), $(d.value - 1).setTranslate(0)), Vt(() => {
        o.value = !1, O(B);
      });
    }, P = () => {
      l.value = k(z(e.initialIndex));
    }, I = () => {
      var {
        autoplay: B
      } = e;
      !B || d.value <= 1 || (N(), f = window.setTimeout(() => {
        R(), I();
      }, z(B)));
    }, N = () => {
      f && clearTimeout(f);
    }, p = (B, X) => {
      if (B > X && B > 10)
        return "horizontal";
      if (X > B && X > 10)
        return "vertical";
    }, w = (B) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: X,
          clientY: W
        } = B.touches[0];
        c = X, h = W, S = performance.now(), v = !0, N(), A(() => {
          o.value = !0;
        });
      }
    }, L = (B) => {
      var {
        touchable: X,
        vertical: W
      } = e;
      if (!(!v || !X)) {
        var {
          clientX: Q,
          clientY: te
        } = B.touches[0], ie = Math.abs(Q - c), ce = Math.abs(te - h), ye = p(ie, ce), Ye = W ? "vertical" : "horizontal";
        if (ye === Ye) {
          B.preventDefault();
          var Qe = g !== void 0 ? Q - g : 0, Ne = T !== void 0 ? te - T : 0;
          g = Q, T = te, i.value += W ? Ne : Qe, y();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: B,
          onChange: X
        } = e, W = B ? T < h : g < c, Q = Math.abs(B ? h - T : c - g), te = performance.now() - S <= tm && Q >= im, ie = te ? C(W ? l.value + 1 : l.value - 1) : C();
        v = !1, o.value = !1, g = void 0, T = void 0, i.value = ie * -r.value;
        var ce = l.value;
        l.value = E(ie), I(), ce !== l.value && O(X, l.value);
      }
    }, G = () => {
      o.value = !0, r.value = e.vertical ? n.value.offsetHeight : n.value.offsetWidth, t.value = r.value * d.value, i.value = l.value * -r.value, s.forEach((B) => {
        B.setTranslate(0);
      }), I(), setTimeout(() => {
        o.value = !1;
      });
    }, R = () => {
      if (!(d.value <= 1)) {
        var {
          loop: B,
          onChange: X
        } = e, W = l.value;
        l.value = k(W + 1), O(X, l.value), A(() => {
          if (W === d.value - 1 && B) {
            $(0).setTranslate(t.value), i.value = d.value * -r.value;
            return;
          }
          W !== d.value - 1 && (i.value = l.value * -r.value);
        });
      }
    }, J = () => {
      if (!(d.value <= 1)) {
        var {
          loop: B,
          onChange: X
        } = e, W = l.value;
        l.value = k(W - 1), O(X, l.value), A(() => {
          if (W === 0 && B) {
            $(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          W !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, j = (B) => {
      if (!(d.value <= 1 || B === l.value)) {
        B = B < 0 ? 0 : B, B = B >= d.value ? d.value : B;
        var X = B > l.value ? R : J;
        Array.from({
          length: Math.abs(B - l.value)
        }).forEach(X);
      }
    }, Z = {
      size: r,
      vertical: a
    };
    return u(Z), oe(() => d.value, /* @__PURE__ */ am(function* () {
      yield Vn(), P(), G();
    })), Ue(() => {
      window.addEventListener("resize", G);
    }), tr(() => {
      window.removeEventListener("resize", G), N();
    }), {
      n: om,
      classes: lm,
      length: d,
      index: l,
      swipeEl: n,
      trackSize: t,
      translate: i,
      lockDuration: o,
      handleTouchstart: w,
      handleTouchmove: L,
      handleTouchend: Y,
      next: R,
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
function dm() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Ss), {
    index: r
  } = hn(Cs);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: vm
} = ee("swipe-item");
function fm(e, n) {
  return b(), V(
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
  render: fm,
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = dm(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: vm,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Qn.install = function(e) {
  e.component(Qn.name, Qn);
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
var cm = Pi({
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
}, qe(ks, ["loop", "indicator", "onChange"]), qe(xa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: zo,
  classes: mm
} = ee("image-preview"), Lo = 12, Ro = 200, pm = 350, Uo = 200, hm = ["src", "alt"];
function gm(e, n) {
  var r = le("var-swipe-item"), a = le("var-swipe"), t = le("var-icon"), i = le("var-popup");
  return b(), pe(
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
          default: ve(() => [(b(!0), V(
            Pe,
            null,
            Be(e.images, (o) => (b(), pe(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ve(() => [D(
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
                  [D(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    hm
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
            }, () => [e.indicator && e.images.length > 1 ? (b(), V(
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
      ), H(e.$slots, "close-icon", {}, () => [e.closeable ? (b(), pe(
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
      )) : x("v-if", !0)]), D(
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
  render: gm,
  name: "VarImagePreview",
  components: {
    VarSwipe: Jn,
    VarSwipeItem: Qn,
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: cm,
  setup(e) {
    var n = M(!1), r = F(() => {
      var {
        images: N,
        current: p
      } = e, w = N.findIndex((L) => L === p);
      return w >= 0 ? w : 0;
    }), a = M(1), t = M(0), i = M(0), o = M(void 0), l = M(void 0), s = M(!0), u = null, d = null, v = null, f = (N, p) => {
      var {
        clientX: w,
        clientY: L
      } = N, {
        clientX: Y,
        clientY: G
      } = p;
      return Math.abs(Math.sqrt(Math.pow(Y - w, 2) + Math.pow(G - L, 2)));
    }, c = (N, p) => ({
      clientX: N.clientX,
      clientY: N.clientY,
      timestamp: Date.now(),
      target: p
    }), h = () => {
      a.value = z(e.zoom), s.value = !1, d = null, window.setTimeout(() => {
        o.value = "linear", l.value = "0s";
      }, Uo);
    }, S = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, g = (N) => d ? f(d, N) <= Lo && N.timestamp - d.timestamp <= Ro && d.target === N.target : !1, T = (N) => !N || !u || !d ? !1 : f(u, d) <= Lo && Date.now() - d.timestamp < pm && (N === u.target || N.parentNode === u.target), $ = (N) => {
      v = window.setTimeout(() => {
        T(N.target) && I(), u = null;
      }, Ro);
    }, y = (N) => {
      v && window.clearTimeout(v);
      var {
        touches: p
      } = N, w = c(p[0], N.currentTarget);
      if (u = w, g(w)) {
        a.value > 1 ? S() : h();
        return;
      }
      d = w;
    }, C = (N) => {
      var {
        offsetWidth: p,
        offsetHeight: w
      } = N, {
        naturalWidth: L,
        naturalHeight: Y
      } = N.querySelector("." + zo("image"));
      return {
        width: p,
        height: w,
        imageRadio: Y / L,
        rootRadio: w / p,
        zoom: z(e.zoom)
      };
    }, E = (N) => {
      var {
        zoom: p,
        imageRadio: w,
        rootRadio: L,
        width: Y,
        height: G
      } = C(N);
      if (!w)
        return 0;
      var R = w > L ? G / w : Y;
      return Math.max(0, (p * R - Y) / 2) / p;
    }, k = (N) => {
      var {
        zoom: p,
        imageRadio: w,
        rootRadio: L,
        width: Y,
        height: G
      } = C(N);
      if (!w)
        return 0;
      var R = w > L ? G : Y * w;
      return Math.max(0, (p * R - G) / 2) / p;
    }, A = (N, p, w) => N + p >= w ? w : N + p <= -w ? -w : N + p, P = (N) => {
      if (!!d) {
        var p = N.currentTarget, {
          touches: w
        } = N, L = c(w[0], p);
        if (a.value > 1) {
          var Y = L.clientX - d.clientX, G = L.clientY - d.clientY, R = E(p), J = k(p);
          t.value = A(t.value, Y, R), i.value = A(i.value, G, J);
        }
        d = L;
      }
    }, I = () => {
      if (a.value > 1) {
        S(), setTimeout(() => O(e["onUpdate:show"], !1), Uo);
        return;
      }
      O(e["onUpdate:show"], !1);
    };
    return oe(() => e.show, (N) => {
      n.value = N;
    }, {
      immediate: !0
    }), {
      n: zo,
      classes: mm,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: y,
      handleTouchmove: P,
      handleTouchend: $,
      close: I
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
    } : e, r = Me(n);
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
    Gn = null, Ee().then(() => {
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
  n: ym,
  classes: bm
} = ee("sticky");
function wm(e, n) {
  return b(), V(
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
    [D(
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
  render: wm,
  name: "VarSticky",
  props: ft,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), i = M("0px"), o = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = F(() => !e.disabled && e.cssMode), v = F(() => !e.disabled && !e.cssMode && a.value), f = F(() => De(e.offsetTop)), c, h = () => {
      var {
        cssMode: y,
        disabled: C
      } = e;
      if (!C) {
        var E = 0;
        if (c !== window) {
          var {
            top: k
          } = c.getBoundingClientRect();
          E = k;
        }
        var A = r.value, P = n.value, {
          top: I,
          left: N
        } = P.getBoundingClientRect(), p = I - E;
        return p <= f.value ? (y || (o.value = P.offsetWidth + "px", l.value = P.offsetHeight + "px", t.value = E + f.value + "px", i.value = N + "px", s.value = A.offsetWidth + "px", u.value = A.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: p,
          isFixed: !1
        });
      }
    }, S = () => {
      var y = h();
      y && O(e.onScroll, y.offsetTop, y.isFixed);
    }, g = /* @__PURE__ */ function() {
      var y = Fo(function* () {
        a.value = !1, yield $u(), h();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var y = Fo(function* () {
        yield Vn(), c = Or(n.value), c !== window && c.addEventListener("scroll", S), window.addEventListener("scroll", S), S();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), $ = () => {
      c !== window && c.removeEventListener("scroll", S), window.removeEventListener("scroll", S);
    };
    return oe(() => e.disabled, g), zi(T), Li($), Ue(T), tr($), {
      n: ym,
      classes: bm,
      resize: g,
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
var $s = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), Ts = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function Sm() {
  var {
    bindChildren: e,
    childProviders: n
  } = un($s), {
    length: r
  } = pn(Ts);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function Cm() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn($s), {
    index: r
  } = hn(Ts);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var km = {
  index: {
    type: [Number, String]
  }
}, {
  n: $m,
  classes: Tm
} = ee("index-anchor");
function Om(e, n) {
  return b(), pe(
    La(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ve(() => [D(
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
  render: Om,
  name: "VarIndexAnchor",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: km,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = Cm(), t = M(0), i = M(!1), o = F(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, h = (g) => {
      i.value = g;
    }, S = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(S), {
      n: $m,
      classes: Tm,
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
var Pm = {
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
function qt(e) {
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
  n: Vm,
  classes: Mm
} = ee("index-bar"), Em = ["onClick"];
function Im(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [H(e.$slots, "default"), D(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: K({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(b(!0), V(
        Pe,
        null,
        Be(e.anchorNameList, (r) => (b(), V(
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
          Em
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const xr = _({
  render: Im,
  name: "VarIndexBar",
  props: Pm,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = Sm(), t = M(""), i = M(null), o = M(null), l = M([]), s = M(), u = F(() => e.sticky), d = F(() => e.cssMode), v = F(() => De(e.stickyOffsetTop)), f = F(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = ($) => {
      var y = Ui($) ? $.name.value : $;
      y === s.value || y === void 0 || (s.value = y, O(e.onChange, y));
    }, S = () => {
      var $ = Pt(i.value), y = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: C
      } = o.value;
      r.forEach((E, k) => {
        var A = E.ownTop.value, P = $ - A + v.value - C, I = k === r.length - 1 ? y : r[k + 1].ownTop.value - E.ownTop.value;
        P >= 0 && P < I && !t.value && (k && !e.cssMode && r[k - 1].setDisabled(!0), E.setDisabled(!1), h(E));
      });
    }, g = /* @__PURE__ */ function() {
      var $ = qt(function* (y, C) {
        var {
          offsetTop: E
        } = o.value;
        if (C && O(e.onClick, y), y !== s.value) {
          var k = r.find((I) => {
            var {
              name: N
            } = I;
            return y === N.value;
          });
          if (!!k) {
            var A = k.ownTop.value - v.value + E, P = Hi(i.value);
            t.value = y, h(y), yield Ga(i.value, {
              left: P,
              top: A,
              animation: $l,
              duration: z(e.duration)
            }), Vt(() => {
              t.value = "";
            });
          }
        }
      });
      return function(C, E) {
        return $.apply(this, arguments);
      };
    }(), T = ($) => {
      $n(() => g($));
    };
    return oe(() => n.value, /* @__PURE__ */ qt(function* () {
      yield Vn(), r.forEach(($) => {
        var {
          name: y,
          setOwnTop: C
        } = $;
        y.value && l.value.push(y.value), C();
      });
    })), Ue(/* @__PURE__ */ qt(function* () {
      yield Vn(), i.value = Or(o.value), i.value.addEventListener("scroll", S);
    })), kt(() => {
      O(i.value.removeEventListener, "scroll", S);
    }), {
      n: Vm,
      classes: Mm,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: z,
      scrollTo: T,
      anchorClick: g
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function Nm(e) {
  return ["text", "password", "number"].includes(e);
}
var Bm = {
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
    validator: Nm
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
  classes: Dm
} = ee("input"), Am = ["id", "disabled", "type", "value", "maxlength", "rows"], zm = ["id", "disabled", "type", "value", "maxlength"], Lm = ["for"];
function Rm(e, n) {
  var r = le("var-icon"), a = le("var-form-details");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.disabled, e.n("--disabled")])),
      onClick: n[10] || (n[10] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "prepend-icon")],
        2
      ), D(
        "div",
        {
          class: m(e.classes(e.n("wrap"), [!e.hint, e.n("--non-hint")]))
        },
        [e.type === "password" ? (b(), V(
          "input",
          {
            key: 0,
            class: m(e.n("autocomplete"))
          },
          null,
          2
        )) : x("v-if", !0), e.textarea ? (b(), V(
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
          Am
        )) : (b(), V(
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
          zm
        )), D(
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
          Lm
        )],
        2
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (b(), pe(
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
    ), e.line ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
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
  render: Rm,
  name: "VarInput",
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  props: Bm,
  setup(e) {
    var n = M("var-input-" + Da().uid), r = M(null), a = M(!1), t = F(() => {
      var {
        maxlength: p,
        modelValue: w
      } = e;
      return p ? Nn(w) ? "0 / " + p : String(w).length + "/" + p : "";
    }), {
      bindForm: i,
      form: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = (p) => {
      Ee(() => {
        var {
          validateTrigger: w,
          rules: L,
          modelValue: Y
        } = e;
        s(w, p, L, Y);
      });
    }, f = () => {
      var {
        hint: p,
        modelValue: w
      } = e;
      if (!p && !Nn(w))
        return Kt("--placeholder-hidden");
      if (p && (!Nn(w) || a.value))
        return Kt("--placeholder-hint");
    }, c = (p) => {
      a.value = !0, O(e.onFocus, p), v("onFocus");
    }, h = (p) => {
      a.value = !1, O(e.onBlur, p), v("onBlur");
    }, S = (p) => {
      var w = p.target, {
        value: L
      } = w;
      L = C(y(L)), w.value = L, O(e["onUpdate:modelValue"], L), O(e.onInput, L, p), v("onInput");
    }, g = (p) => {
      var w = p.target, {
        value: L
      } = w;
      L = C(y(L)), w.value = L, O(e.onChange, L, p), v("onChange");
    }, T = () => {
      var {
        disabled: p,
        readonly: w,
        clearable: L,
        onClear: Y
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || p || w || !L || (O(e["onUpdate:modelValue"], ""), O(Y, ""), v("onClear"));
    }, $ = (p) => {
      var {
        disabled: w,
        onClick: L
      } = e;
      o != null && o.disabled.value || w || (O(L, p), v("onClick"));
    }, y = (p) => e.modelModifiers.trim ? p.trim() : p, C = (p) => e.maxlength ? p.slice(0, z(e.maxlength)) : p, E = (p) => {
      var {
        disabled: w,
        readonly: L
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || w || L || p.stopPropagation();
    }, k = () => {
      O(e["onUpdate:modelValue"], ""), d();
    }, A = () => u(e.rules, e.modelValue), P = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, I = () => {
      r.value.blur();
    }, N = {
      reset: k,
      validate: A,
      resetValidation: d
    };
    return O(i, N), Ue(() => {
      e.autofocus && P();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Kt,
      classes: Dm,
      isEmpty: Nn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: h,
      handleInput: S,
      handleChange: g,
      handleClear: T,
      handleClick: $,
      handleTouchstart: E,
      validate: A,
      resetValidation: d,
      reset: k,
      focus: P,
      blur: I
    };
  }
});
hr.install = function(e) {
  e.component(hr.name, hr);
};
function Um(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function Ym(e) {
  return ["always", "hover", "none"].includes(e);
}
var Fm = {
  type: {
    type: String,
    default: "default",
    validator: Um
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
    validator: Ym
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
  n: Hm,
  classes: Wm
} = ee("link");
function jm(e, n) {
  return b(), pe(
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
  render: jm,
  name: "VarLink",
  props: Fm,
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
      n: Hm,
      classes: Wm,
      tag: n,
      linkProps: r,
      handleClick: a,
      toSizeUnit: we
    };
  }
});
_r.install = function(e) {
  e.component(_r.name, _r);
};
var Gm = {
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
function qm(e) {
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
  n: Km,
  classes: Xm
} = ee("list");
function Zm(e, n) {
  var r = le("var-loading"), a = Xe("ripple");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [H(e.$slots, "default"), e.loading ? H(e.$slots, "loading", {
      key: 0
    }, () => [D(
      "div",
      {
        class: m(e.n("loading"))
      },
      [D(
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
    }, () => [D(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : x("v-if", !0), e.error ? H(e.$slots, "error", {
      key: 2
    }, () => [ke((b(), V(
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
    )), [[a]])]) : x("v-if", !0), D(
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
  render: Zm,
  name: "VarList",
  directives: {
    Ripple: Fe
  },
  components: {
    VarLoading: On
  },
  props: Gm,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      O(e["onUpdate:error"], !1), O(e["onUpdate:loading"], !0), O(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = qm(function* () {
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
      dt: Ot,
      isNumber: Ke,
      load: t,
      check: o,
      n: Km,
      classes: Xm
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var Jm = {
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
  classes: Qm,
  n: jo
} = ee("loading-bar");
const xm = _({
  name: "VarLoadingBar",
  props: Jm,
  setup(e) {
    return () => re("div", {
      class: Qm(jo(), [e.error, jo("--error")]),
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
var Os, Go, ln = Me({
  value: 0,
  opacity: 0,
  error: !1
}), _m = (e) => {
  Object.assign(ln, e);
}, Ps = () => {
  Os = window.setTimeout(() => {
    if (!(ln.value >= 95)) {
      var e = Math.random();
      ln.value < 70 && (e = Math.round(5 * Math.random())), ln.value += e, Ps();
    }
  }, 200);
}, ep = () => {
  Go || (Go = !0, Ra(xm, ln)), (!ln.error || ln.value === 100) && (ln.value = 0), setTimeout(() => {
    ln.opacity = 1;
  }, 200), Ps();
}, np = () => {
  ln.value = 100, setTimeout(() => {
    ln.opacity = 0, setTimeout(() => {
      ln.error = !1;
    }, 250);
  }, 300), window.clearTimeout(Os);
}, rp = () => {
  ln.error = !0, Ka.start(), setTimeout(Ka.finish, 300);
}, Ka = {
  start: ep,
  finish: np,
  error: rp,
  mergeConfig: _m
};
function ap(e) {
  return ["click", "hover"].includes(e);
}
function tp(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var ip = {
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
    validator: ap
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: tp
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
}, op = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ct(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return op[n];
  });
}
var Dn = "top", ar = "bottom", Sr = "right", _n = "left", Lt = "auto", Rt = [Dn, ar, Sr, _n], Ut = "start", Xa = "end", lp = "clippingParents", Vs = "viewport", Ua = "popper", sp = "reference", qo = /* @__PURE__ */ Rt.reduce(function(e, n) {
  return e.concat([n + "-" + Ut, n + "-" + Xa]);
}, []), Ms = /* @__PURE__ */ [].concat(Rt, [Lt]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Ut, n + "-" + Xa]);
}, []), up = "beforeRead", dp = "read", vp = "afterRead", fp = "beforeMain", cp = "main", mp = "afterMain", pp = "beforeWrite", hp = "write", gp = "afterWrite", Vi = [up, dp, vp, fp, cp, mp, pp, hp, gp];
function An(e) {
  return e.split("-")[0];
}
var yp = {
  start: "end",
  end: "start"
};
function Ko(e) {
  return e.replace(/start|end/g, function(n) {
    return yp[n];
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
function Mi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Es() {
  return !/^((?!chrome|android).)*safari/i.test(Mi());
}
function Na(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && cn(e) && (t = e.offsetWidth > 0 && Ia(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Ia(a.height) / e.offsetHeight || 1);
  var o = Cr(e) ? bn(e) : window, l = o.visualViewport, s = !Es() && r, u = (a.left + (s && l ? l.offsetLeft : 0)) / t, d = (a.top + (s && l ? l.offsetTop : 0)) / i, v = a.width / t, f = a.height / i;
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
function bp(e, n) {
  var r = bn(e), a = or(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = Es();
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
function wp(e) {
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
function Yt(e) {
  return En(e) === "html" ? e : e.assignedSlot || e.parentNode || (Ji(e) ? e.host : null) || or(e);
}
function _i(e) {
  var n = Tn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Is(e) {
  return ["html", "body", "#document"].indexOf(En(e)) >= 0 ? e.ownerDocument.body : cn(e) && _i(e) ? e : Is(Yt(e));
}
function ja(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Is(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bn(a), o = t ? [i].concat(i.visualViewport || [], _i(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(ja(Yt(o)));
}
function Sp(e) {
  return ["table", "td", "th"].indexOf(En(e)) >= 0;
}
function Zo(e) {
  return !cn(e) || Tn(e).position === "fixed" ? null : e.offsetParent;
}
function Cp(e) {
  var n = /firefox/i.test(Mi()), r = /Trident/i.test(Mi());
  if (r && cn(e)) {
    var a = Tn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Yt(e);
  for (Ji(t) && (t = t.host); cn(t) && ["html", "body"].indexOf(En(t)) < 0; ) {
    var i = Tn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function eo(e) {
  for (var n = bn(e), r = Zo(e); r && Sp(r) && Tn(r).position === "static"; )
    r = Zo(r);
  return r && (En(r) === "html" || En(r) === "body" && Tn(r).position === "static") ? n : r || Cp(e) || n;
}
function kp(e, n) {
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
function Ei(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function $p(e, n) {
  var r = Na(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Jo(e, n, r) {
  return n === Vs ? Ei(bp(e, r)) : Cr(n) ? $p(n, r) : Ei(wp(or(e)));
}
function Tp(e) {
  var n = ja(Yt(e)), r = ["absolute", "fixed"].indexOf(Tn(e).position) >= 0, a = r && cn(e) ? eo(e) : e;
  return Cr(a) ? n.filter(function(t) {
    return Cr(t) && kp(t, a) && En(t) !== "body";
  }) : [];
}
function Op(e, n, r, a) {
  var t = n === "clippingParents" ? Tp(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Jo(e, u, a);
    return s.top = Wa(d.top, s.top), s.right = Xo(d.right, s.right), s.bottom = Xo(d.bottom, s.bottom), s.left = Wa(d.left, s.left), s;
  }, Jo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Za(e) {
  return e.split("-")[1];
}
function Pp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ns(e) {
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
  var u = t ? Pp(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Ut:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Xa:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Vp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Mp(e) {
  return Object.assign({}, Vp(), e);
}
function Ep(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Bs(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? lp : l, u = r.rootBoundary, d = u === void 0 ? Vs : u, v = r.elementContext, f = v === void 0 ? Ua : v, c = r.altBoundary, h = c === void 0 ? !1 : c, S = r.padding, g = S === void 0 ? 0 : S, T = Mp(typeof g != "number" ? g : Ep(g, Rt)), $ = f === Ua ? sp : Ua, y = e.rects.popper, C = e.elements[h ? $ : f], E = Op(Cr(C) ? C : C.contextElement || or(e.elements.popper), s, d, o), k = Na(e.elements.reference), A = Ns({
    reference: k,
    element: y,
    strategy: "absolute",
    placement: t
  }), P = Ei(Object.assign({}, y, A)), I = f === Ua ? P : k, N = {
    top: E.top - I.top + T.top,
    bottom: I.bottom - E.bottom + T.bottom,
    left: E.left - I.left + T.left,
    right: I.right - E.right + T.right
  }, p = e.modifiersData.offset;
  if (f === Ua && p) {
    var w = p[t];
    Object.keys(N).forEach(function(L) {
      var Y = [Sr, ar].indexOf(L) >= 0 ? 1 : -1, G = [Dn, ar].indexOf(L) >= 0 ? "y" : "x";
      N[L] += w[G] * Y;
    });
  }
  return N;
}
function Ip(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Ms : s, d = Za(a), v = d ? l ? qo : qo.filter(function(h) {
    return Za(h) === d;
  }) : Rt, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, S) {
    return h[S] = Bs(e, {
      placement: S,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[An(S)], h;
  }, {});
  return Object.keys(c).sort(function(h, S) {
    return c[h] - c[S];
  });
}
function Np(e) {
  if (An(e) === Lt)
    return [];
  var n = ct(e);
  return [Ko(e), n, Ko(n)];
}
function Bp(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, S = r.allowedAutoPlacements, g = n.options.placement, T = An(g), $ = T === g, y = s || ($ || !h ? [ct(g)] : Np(g)), C = [g].concat(y).reduce(function(te, ie) {
      return te.concat(An(ie) === Lt ? Ip(n, {
        placement: ie,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: S
      }) : ie);
    }, []), E = n.rects.reference, k = n.rects.popper, A = /* @__PURE__ */ new Map(), P = !0, I = C[0], N = 0; N < C.length; N++) {
      var p = C[N], w = An(p), L = Za(p) === Ut, Y = [Dn, ar].indexOf(w) >= 0, G = Y ? "width" : "height", R = Bs(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Y ? L ? Sr : _n : L ? ar : Dn;
      E[G] > k[G] && (J = ct(J));
      var j = ct(J), Z = [];
      if (i && Z.push(R[w] <= 0), l && Z.push(R[J] <= 0, R[j] <= 0), Z.every(function(te) {
        return te;
      })) {
        I = p, P = !1;
        break;
      }
      A.set(p, Z);
    }
    if (P)
      for (var B = h ? 3 : 1, X = function(ie) {
        var ce = C.find(function(ye) {
          var Ye = A.get(ye);
          if (Ye)
            return Ye.slice(0, ie).every(function(Qe) {
              return Qe;
            });
        });
        if (ce)
          return I = ce, "break";
      }, W = B; W > 0; W--) {
        var Q = X(W);
        if (Q === "break")
          break;
      }
    n.placement !== I && (n.modifiersData[a]._skip = !0, n.placement = I, n.reset = !0);
  }
}
const Dp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Bp,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ap(e, n, r) {
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
function zp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = Ms.reduce(function(d, v) {
    return d[v] = Ap(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const Lp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: zp
};
function Rp(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Up(e) {
  return e === bn(e) || !cn(e) ? Qi(e) : Rp(e);
}
function Yp(e) {
  var n = e.getBoundingClientRect(), r = Ia(n.width) / e.offsetWidth || 1, a = Ia(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Fp(e, n, r) {
  r === void 0 && (r = !1);
  var a = cn(n), t = cn(n) && Yp(n), i = or(n), o = Na(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((En(n) !== "body" || _i(i)) && (l = Up(n)), cn(n) ? (s = Na(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = xi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function Hp(e) {
  var n = Na(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function Wp(e) {
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
function jp(e) {
  var n = Wp(e);
  return Vi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Gp(e) {
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
var lr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', qp = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Qo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Kp(e) {
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
          Vi.indexOf(n.phase) < 0 && console.error(Un(lr, n.name, '"phase"', "either " + Vi.join(", "), '"' + String(n.phase) + '"'));
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
        }) == null && console.error(Un(qp, String(n.name), a, a));
      });
    });
  });
}
function Xp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Zp(e) {
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
var xo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Jp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", _o = {
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
function Qp(e) {
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
        S(), d.options = Object.assign({}, i, d.options, $), d.scrollParents = {
          reference: Cr(l) ? ja(l) : l.contextElement ? ja(l.contextElement) : [],
          popper: ja(s)
        };
        var y = jp(Zp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = y.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Xp([].concat(y, d.options.modifiers), function(p) {
            var w = p.name;
            return w;
          });
          if (Kp(C), An(d.options.placement) === Lt) {
            var E = d.orderedModifiers.find(function(p) {
              var w = p.name;
              return w === "flip";
            });
            E || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var k = Tn(s), A = k.marginTop, P = k.marginRight, I = k.marginBottom, N = k.marginLeft;
          [A, P, I, N].some(function(p) {
            return parseFloat(p);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, $ = T.reference, y = T.popper;
          if (!el($, y)) {
            process.env.NODE_ENV !== "production" && console.error(xo);
            return;
          }
          d.rects = {
            reference: Fp($, eo(y), d.options.strategy === "fixed"),
            popper: Hp(y)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var C = 0, E = 0; E < d.orderedModifiers.length; E++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Jp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, E = -1;
              continue;
            }
            var k = d.orderedModifiers[E], A = k.fn, P = k.options, I = P === void 0 ? {} : P, N = k.name;
            typeof A == "function" && (d = A({
              state: d,
              options: I,
              name: N,
              instance: c
            }) || d);
          }
        }
      },
      update: Gp(function() {
        return new Promise(function(g) {
          c.forceUpdate(), g(d);
        });
      }),
      destroy: function() {
        S(), f = !0;
      }
    };
    if (!el(l, s))
      return process.env.NODE_ENV !== "production" && console.error(xo), c;
    c.setOptions(u).then(function(g) {
      !f && u.onFirstUpdate && u.onFirstUpdate(g);
    });
    function h() {
      d.orderedModifiers.forEach(function(g) {
        var T = g.name, $ = g.options, y = $ === void 0 ? {} : $, C = g.effect;
        if (typeof C == "function") {
          var E = C({
            state: d,
            name: T,
            instance: c,
            options: y
          }), k = function() {
          };
          v.push(E || k);
        }
      });
    }
    function S() {
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
function xp(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, lt);
  }), l && s.addEventListener("resize", r.update, lt), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, lt);
    }), l && s.removeEventListener("resize", r.update, lt);
  };
}
const _p = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xp,
  data: {}
};
function eh(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Ns({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const nh = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: eh,
  data: {}
};
var rh = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ah(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Ia(n * t) / t || 0,
    y: Ia(r * t) / t || 0
  };
}
function nl(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, h = o.y, S = h === void 0 ? 0 : h, g = typeof d == "function" ? d({
    x: c,
    y: S
  }) : {
    x: c,
    y: S
  };
  c = g.x, S = g.y;
  var T = o.hasOwnProperty("x"), $ = o.hasOwnProperty("y"), y = _n, C = Dn, E = window;
  if (u) {
    var k = eo(r), A = "clientHeight", P = "clientWidth";
    if (k === bn(r) && (k = or(r), Tn(k).position !== "static" && l === "absolute" && (A = "scrollHeight", P = "scrollWidth")), k = k, t === Dn || (t === _n || t === Sr) && i === Xa) {
      C = ar;
      var I = v && k === E && E.visualViewport ? E.visualViewport.height : k[A];
      S -= I - a.height, S *= s ? 1 : -1;
    }
    if (t === _n || (t === Dn || t === ar) && i === Xa) {
      y = Sr;
      var N = v && k === E && E.visualViewport ? E.visualViewport.width : k[P];
      c -= N - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && rh), w = d === !0 ? ah({
    x: c,
    y: S
  }) : {
    x: c,
    y: S
  };
  if (c = w.x, S = w.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[C] = $ ? "0" : "", L[y] = T ? "0" : "", L.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + S + "px)" : "translate3d(" + c + "px, " + S + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[C] = $ ? S + "px" : "", n[y] = T ? c + "px" : "", n.transform = "", n));
}
function th(e) {
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
const ih = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: th,
  data: {}
};
function oh(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !cn(i) || !En(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function lh(e) {
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
const sh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: oh,
  effect: lh,
  requires: ["computeStyles"]
};
var uh = [_p, nh, ih, sh], dh = /* @__PURE__ */ Qp({
  defaultModifiers: uh
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
function Ds(e) {
  var n = M(null), r = M(null), a = M(!1), t = M({
    width: 0,
    height: 0
  }), {
    zIndex: i
  } = _a(() => a.value, 1), o = null, l = !1, s = !1, u = !1, d = () => {
    var {
      width: k,
      height: A
    } = window.getComputedStyle(n.value);
    t.value = {
      width: De(k),
      height: De(A)
    };
  }, v = () => {
    e.trigger === "hover" && (u = !0, C());
  }, f = /* @__PURE__ */ function() {
    var k = al(function* () {
      e.trigger === "hover" && (u = !1, yield Vn(), !s && E());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), c = () => {
    e.trigger === "hover" && (s = !0);
  }, h = /* @__PURE__ */ function() {
    var k = al(function* () {
      e.trigger === "hover" && (s = !1, yield Vn(), !u && E());
    });
    return function() {
      return k.apply(this, arguments);
    };
  }(), S = () => {
    C(), l = !0;
  }, g = () => {
    if (l) {
      l = !1;
      return;
    }
    a.value = !1, O(e["onUpdate:show"], !1);
  }, T = () => {
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
  }, $ = () => {
    var {
      placement: k,
      skidding: A,
      distance: P
    } = T(), I = [Ct({}, Dp, {
      enabled: a.value
    }), Ct({}, Lp, {
      options: {
        offset: [A, P]
      }
    })];
    return {
      placement: k,
      modifiers: I
    };
  }, y = () => {
    o.setOptions($());
  }, C = () => {
    var {
      disabled: k
    } = e;
    k || (a.value = !0, O(e["onUpdate:show"], !0));
  }, E = () => {
    a.value = !1, O(e["onUpdate:show"], !1);
  };
  return oe(() => e.show, (k) => {
    a.value = k != null ? k : !1;
  }, {
    immediate: !0
  }), oe(() => e.offsetX, y), oe(() => e.offsetY, y), oe(() => e.placement, y), oe(() => a.value, (k) => {
    k ? (y(), O(e.onOpen)) : O(e.onClose);
  }), oe(() => e.trigger, (k) => {
    k === "click" ? document.addEventListener("click", g) : document.removeEventListener("click", g);
  }), oe(() => e.disabled, E), Ue(() => {
    o = dh(n.value, r.value, $()), e.trigger === "click" && document.addEventListener("click", g);
  }), tr(() => {
    document.removeEventListener("click", g), o.destroy();
  }), {
    show: a,
    popover: r,
    zIndex: i,
    host: n,
    hostSize: t,
    handleHostClick: S,
    handleHostMouseenter: v,
    handleHostMouseleave: f,
    handlePopoverClose: g,
    handlePopoverMouseenter: c,
    handlePopoverMouseleave: h,
    resize: y,
    open: C,
    close: E
  };
}
var {
  n: vh,
  classes: fh
} = ee("menu");
function ch(e, n) {
  return b(), V(
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
    [H(e.$slots, "default"), (b(), pe(
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
          default: ve(() => [ke(D(
            "div",
            {
              ref: "popover",
              style: K({
                zIndex: e.zIndex,
                width: e.sameWidth ? e.toSizeUnit(Math.ceil(e.hostSize.width)) : void 0
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
  render: ch,
  name: "VarMenu",
  props: ip,
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
    } = Ds(e);
    return {
      popover: n,
      host: r,
      hostSize: a,
      show: t,
      zIndex: i,
      toSizeUnit: we,
      n: vh,
      classes: fh,
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
var As = Symbol("SELECT_BIND_OPTION_KEY"), zs = Symbol("SELECT_COUNT_OPTION_KEY");
function mh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(As), {
    length: r
  } = pn(zs);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function ph() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(As), {
    index: r
  } = hn(zs);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var hh = {
  label: {},
  value: {}
}, {
  n: gh,
  classes: yh
} = ee("option");
function bh(e, n) {
  var r = le("var-checkbox"), a = Xe("ripple");
  return ke((b(), V(
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
    [D(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: K({
          background: e.optionSelected ? e.focusColor : void 0
        })
      },
      null,
      6
    ), e.multiple ? (b(), pe(
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
    )) : x("v-if", !0), D(
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
  render: bh,
  name: "VarOption",
  directives: {
    Ripple: Fe
  },
  components: {
    VarCheckbox: vr
  },
  props: hh,
  setup(e) {
    var n = M(!1), r = F(() => n.value), a = F(() => e.label), t = F(() => e.value), {
      select: i,
      bindSelect: o
    } = ph(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(h);
    }, f = () => d(h), c = (S) => {
      n.value = S;
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
      n: gh,
      classes: yh,
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
var wh = {
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
function Sh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var {
  n: tl
} = ee("overlay");
const ra = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: wh,
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
    Mt(() => e.show, () => e.lockScroll);
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
        }, Sh(d = s()) ? d : {
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
var Ch = {
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
  n: kh,
  classes: $h
} = ee("pagination"), Th = ["item-mode", "onClick"];
function Oh(e, n) {
  var r = le("var-icon"), a = le("var-input"), t = le("var-cell"), i = le("var-menu"), o = Xe("ripple");
  return b(), V(
    "ul",
    {
      class: m(e.n())
    },
    [ke((b(), V(
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
    }]]), e.simple ? (b(), V(
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
      ), D("span", null, [he(
        " / " + ne(e.pageCount) + " ",
        1
      ), D(
        "div",
        {
          class: m(e.n("simple-line"))
        },
        null,
        2
      )])],
      2
    )) : (b(!0), V(
      Pe,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => ke((b(), V(
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
        Th
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), ke((b(), V(
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
    }]]), e.showSizeChanger ? (b(), V(
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
          menu: ve(() => [(b(!0), V(
            Pe,
            null,
            Be(e.sizeOption, (l, s) => ke((b(), pe(
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
          default: ve(() => [D(
            "div",
            {
              class: m(e.classes(e.n("size--open"), [e.current <= 1 || e.disabled, e.n("size--open--disabled")])),
              onClick: n[5] || (n[5] = function() {
                return e.showMenu && e.showMenu(...arguments);
              })
            },
            [D(
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
    )) : x("v-if", !0), e.showQuickJumper && !e.simple ? (b(), V(
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
    )) : x("v-if", !0), e.totalText ? (b(), V(
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
  render: Oh,
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
  props: Ch,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), i = M(!1), o = M(z(e.current) || 1), l = M(z(e.size) || 10), s = M([]), u = F(() => Math.ceil(e.maxPagerCount / 2)), d = F(() => Math.ceil(z(e.total) / z(l.value))), v = F(() => {
      var C = l.value * (o.value - 1) + 1, E = Math.min(l.value * o.value, z(e.total));
      return [C, E];
    }), f = F(() => e.showTotal ? e.showTotal(z(e.total), v.value) : ""), c = (C, E) => Ke(C) ? !1 : E === 1 ? t.value : i.value, h = (C, E) => Ke(C) ? "basic" : E === 1 ? "head" : "tail", S = (C, E) => {
      C === o.value || e.disabled || (Ke(C) ? o.value = C : C === "prev" ? o.value > 1 && (o.value -= 1) : C === "next" ? o.value < d.value && (o.value += 1) : C === "..." && (E === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, g = () => {
      e.disabled || (n.value = !0);
    }, T = (C) => {
      l.value = C, n.value = !1;
    }, $ = (C) => {
      var E = /^[1-9][0-9]*$/;
      return E.test(C);
    }, y = (C, E, k) => {
      if (k.target.blur(), $(E)) {
        var A = z(E);
        A > d.value && (A = d.value, a.value = "" + A), A !== o.value && (o.value = A);
      }
      C === "quick" && (r.value = ""), C === "simple" && !$(E) && (a.value = "" + o.value);
    };
    return oe([() => e.current, () => e.size], (C) => {
      var [E, k] = C;
      o.value = z(E) || 1, l.value = z(k || 10);
    }), oe([o, l, d], (C, E) => {
      var [k, A, P] = C, [I, N] = E, p = [], {
        maxPagerCount: w,
        total: L,
        onChange: Y
      } = e, G = Math.ceil(z(L) / z(N)), R = P - (w - u.value) - 1;
      if (a.value = "" + k, P - 2 > w) {
        if (I === void 0 || P !== G)
          for (var J = 2; J < w + 2; J++)
            p.push(J);
        if (k <= w && k < R) {
          p = [];
          for (var j = 1; j < w + 1; j++)
            p.push(j + 1);
          t.value = !0, i.value = !1;
        }
        if (k > w && k < R) {
          p = [];
          for (var Z = 1; Z < w + 1; Z++)
            p.push(k + Z - u.value);
          t.value = k === 2 && w === 1, i.value = !1;
        }
        if (k >= R) {
          p = [];
          for (var B = 1; B < w + 1; B++)
            p.push(P - (w - B) - 1);
          t.value = !1, i.value = !0;
        }
        p = [1, "...", ...p, "...", P];
      } else
        for (var X = 1; X <= P; X++)
          p.push(X);
      s.value = p, I !== void 0 && P > 0 && O(Y, k, A), O(e["onUpdate:current"], k), O(e["onUpdate:size"], A);
    }, {
      immediate: !0
    }), {
      n: kh,
      classes: $h,
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
      clickItem: S,
      showMenu: g,
      clickSize: T,
      setPage: y,
      toNumber: z
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
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
var Ph = Ii({
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
  n: Vh,
  classes: Mh
} = ee("picker"), il = 300, Eh = 15, ol = 0, Ih = ["onTouchstart", "onTouchmove", "onTouchend"], Nh = ["onTransitionend"];
function Bh(e, n) {
  var r = le("var-button");
  return b(), pe(
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
      default: ve(() => [D(
        "div",
        Ve({
          class: e.n()
        }, e.$attrs),
        [D(
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
          )]), H(e.$slots, "title", {}, () => [D(
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
        ), D(
          "div",
          {
            class: m(e.n("columns")),
            style: K({
              height: e.columnHeight + "px"
            })
          },
          [(b(!0), V(
            Pe,
            null,
            Be(e.scrollColumns, (a) => (b(), V(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Pn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [D(
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
                [(b(!0), V(
                  Pe,
                  null,
                  Be(a.column.texts, (t) => (b(), V(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: K({
                        height: e.optionHeight + "px"
                      }),
                      key: t
                    },
                    [D(
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
                Nh
              )],
              42,
              Ih
            ))),
            128
          )), D(
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
          ), D(
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
  render: Bh,
  name: "VarPicker",
  components: {
    VarButton: an,
    VarPopup: Cn
  },
  inheritAttrs: !1,
  props: Ph,
  setup(e) {
    var n = M([]), r = F(() => De(e.optionHeight)), a = F(() => De(e.optionCount)), t = F(() => a.value * r.value / 2 - r.value / 2), i = F(() => a.value * r.value), o = [], l = (p, w) => {
      w.scrollEl = p;
    }, s = (p) => {
      O(e["onUpdate:show"], p);
    }, u = (p) => {
      var w = r.value + t.value, L = t.value - p.column.texts.length * r.value;
      p.translate >= w && (p.translate = w), p.translate <= L && (p.translate = L);
    }, d = (p, w) => {
      var {
        length: L
      } = p.column.texts;
      return w = w >= L ? L - 1 : w, w = w <= 0 ? 0 : w, w;
    }, v = (p) => {
      var w = Math.round((t.value - p.translate) / r.value);
      return d(p, w);
    }, f = () => {
      var p = n.value.map((L) => L.column.texts[L.index]), w = n.value.map((L) => L.index);
      return {
        texts: p,
        indexes: w
      };
    }, c = function(p, w, L, Y) {
      Y === void 0 && (Y = !1);
      var G = t.value - d(p, w) * r.value;
      G === p.translate && (p.scrolling = !1, !Y && A(p)), p.translate = G, p.duration = L;
    }, h = (p, w, L) => {
      p.translate += Math.abs(w / L) / 3e-3 * (w < 0 ? -1 : 1);
    }, S = (p, w) => {
      w.touching = !0, w.scrolling = !1, w.duration = 0, w.translate = Wt(w.scrollEl);
    }, g = (p, w) => {
      if (!!w.touching) {
        var {
          clientY: L
        } = p.touches[0], Y = w.prevY !== void 0 ? L - w.prevY : 0;
        w.prevY = L, w.translate += Y, u(w);
        var G = performance.now();
        G - w.momentumTime > il && (w.momentumTime = G, w.momentumPrevY = w.translate);
      }
    }, T = (p, w) => {
      w.touching = !1, w.scrolling = !0, w.prevY = void 0;
      var L = w.translate - w.momentumPrevY, Y = performance.now() - w.momentumTime, G = Math.abs(L) >= Eh && Y <= il;
      G && h(w, L, Y), w.index = v(w), c(w, w.index, G ? 1e3 : 200);
    }, $ = (p) => {
      p.scrolling = !1, A(p);
    }, y = (p) => p.map((w, L) => {
      var Y, G = be(w) ? {
        texts: w
      } : w, R = {
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
      var w = [];
      return E(w, p, 0, !0), w;
    }, E = function(p, w, L, Y) {
      if (Y === void 0 && (Y = !1), be(w) && w.length) {
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
            texts: w.map((j) => j[e.textKey])
          },
          columns: w,
          scrollEl: null,
          scrolling: !1
        };
        p.push(J), c(J, J.index, 0, !0), E(p, J.columns[J.index].children, L + 1, Y);
      }
    }, k = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), E(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, A = (p) => {
      var {
        cascade: w,
        onChange: L
      } = e;
      w && k(p);
      var Y = n.value.some((j) => j.scrolling);
      if (!Y) {
        var {
          texts: G,
          indexes: R
        } = f(), J = R.every((j, Z) => j === o[Z]);
        J || (o = [...R], O(L, G, R));
      }
    }, P = () => {
      if (e.cascade) {
        var p = n.value.find((w) => w.scrolling);
        p && (p.translate = Wt(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, k(p));
      } else
        n.value.forEach((w) => {
          w.translate = Wt(w.scrollEl), w.index = v(w), c(w, w.index, 0);
        });
    }, I = () => {
      P();
      var {
        texts: p,
        indexes: w
      } = f();
      o = [...w], O(e.onConfirm, p, w);
    }, N = () => {
      P();
      var {
        texts: p,
        indexes: w
      } = f();
      o = [...w], O(e.onCancel, p, w);
    };
    return oe(() => e.columns, (p) => {
      n.value = e.cascade ? C(oo(p)) : y(oo(p));
      var {
        indexes: w
      } = f();
      o = [...w];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: Vh,
      classes: Mh,
      pack: We,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Ae,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: S,
      handleTouchmove: g,
      handleTouchend: T,
      handleTransitionend: $,
      confirm: I,
      cancel: N,
      dt: Ot
    };
  }
});
var nn;
function kr(e) {
  return new Promise((n) => {
    kr.close();
    var r = be(e) ? {
      columns: e
    } : e, a = Me(r);
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
    nn = null, Ee().then(() => {
      e.show = !1;
    });
  }
};
function Dh(e) {
  return ["linear", "circle"].includes(e);
}
var Ah = {
  mode: {
    type: String,
    default: "linear",
    validator: Dh
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
  n: zh,
  classes: Lh
} = ee("progress"), Rh = ["viewBox"], Uh = ["cx", "cy", "r", "stroke-width"], Yh = ["cx", "cy", "r", "stroke-width"];
function Fh(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [e.mode === "linear" ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("linear"))
      },
      [D(
        "div",
        {
          class: m(e.n("linear-block")),
          style: K({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (b(), V(
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
        )) : x("v-if", !0), D(
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
      ), e.label ? (b(), V(
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
    )) : x("v-if", !0), e.mode === "circle" ? (b(), V(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: K({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(b(), V(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: K({
            transform: "rotate(" + (e.rotate - 90) + "deg)"
          }),
          viewBox: e.circleProps.viewBox
        },
        [e.track ? (b(), V(
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
          Uh
        )) : x("v-if", !0), D(
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
          Yh
        )],
        14,
        Rh
      )), e.label ? (b(), V(
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
  render: Fh,
  name: "VarProgress",
  props: Ah,
  setup(e) {
    var n = F(() => {
      var a = z(e.value), t = a > 100 ? 100 : a, i = a > 100 ? 100 : Math.round(a);
      return {
        width: t + "%",
        roundValue: i + "%"
      };
    }), r = F(() => {
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
      n: zh,
      classes: Lh,
      toSizeUnit: we,
      multiplySizeUnit: _e,
      linearProps: n,
      circleProps: r
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var Hh = {
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
  target: {
    type: [String, Object]
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
function Wh(e) {
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
  n: sl,
  classes: jh
} = ee("pull-refresh"), ul = 150;
function Gh(e, n) {
  var r = le("var-icon");
  return b(), V(
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
    [D(
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
  render: Gh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: Hh,
  setup(e) {
    var n, r, a = M(0), t = M(null), i = M(null), o = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = 0, f = 0, c = M(!0), h = F(() => u.value !== "loading" && u.value !== "success" && !e.disabled), S = F(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: T.value ? e.successBgColor : e.bgColor,
      color: T.value ? e.successColor : e.color
    })), g = F(() => Math.abs(2 * a.value)), T = F(() => u.value === "success"), $ = () => new Promise((I) => {
      window.setTimeout(() => {
        c.value = !0, I();
      }, ul);
    }), y = (I) => {
      var N = "classList" in n ? n : document.body;
      N.classList[I](sl() + "--lock");
    }, C = (I) => {
      v = I.touches[0].clientY, f = 0;
    }, E = (I) => {
      var N = Pt(n), p = N === 0, w = I.touches[0];
      if (f = w.clientY - v, p && f >= 0 && I.preventDefault(), !(N > 0 || !h.value)) {
        u.value !== "pulling" && (u.value = "pulling", o.value = I.touches[0].clientY), p && l.value > a.value && y("add");
        var L = (I.touches[0].clientY - o.value) / 2 + a.value;
        l.value = L >= g.value ? g.value : L, l.value >= g.value * 0.2 ? (c.value = !1, s.value = "refresh", r = $()) : s.value = "arrow-down";
      }
    }, k = /* @__PURE__ */ function() {
      var I = Wh(function* () {
        !h.value || (d.value = !0, l.value >= g.value * 0.2 ? (yield r, u.value = "loading", l.value = g.value * 0.3, O(e["onUpdate:modelValue"], !0), O(e.onRefresh), y("remove")) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1, y("remove");
        }, z(e.animationDuration))));
      });
      return function() {
        return I.apply(this, arguments);
      };
    }(), A = () => {
      var {
        width: I
      } = i.value.getBoundingClientRect();
      l.value = -(I + I * 0.25), a.value = -(I + I * 0.25);
    }, P = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, z(e.animationDuration));
    };
    return oe(() => e.modelValue, (I) => {
      I === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, P();
      }, z(e.successDuration)));
    }), Ue(() => {
      var I;
      n = e.target ? Ol(e.target, "PullRefresh") : Or(t.value), A(), (I = t.value) == null || I.addEventListener("touchmove", E, {
        passive: !1
      });
    }), kt(() => {
      var I;
      (I = t.value) == null || I.removeEventListener("touchmove", E);
    }), {
      n: sl,
      classes: jh,
      iconHasChanged: c,
      ICON_TRANSITION: ul,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: C,
      touchMove: E,
      touchEnd: k,
      iconName: s,
      controlStyle: S,
      isSuccess: T
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var qh = {
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
}, Ls = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Rs = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function Kh() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ls), {
    length: r
  } = pn(Rs);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Xh() {
  var {
    bindParent: e,
    parentProvider: n
  } = dn(Ls), {
    index: r
  } = hn(Rs);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: Zh,
  classes: Jh
} = ee("radio");
function Qh(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return b(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      Ve({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [ke((b(), V(
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
      }]]), D(
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
  render: Qh,
  name: "VarRadio",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  inheritAttrs: !1,
  props: qh,
  setup(e) {
    var n = M(!1), r = F(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Xh(), {
      form: o,
      bindForm: l
    } = yn(), {
      errorMessage: s,
      validateWithTrigger: u,
      validate: d,
      resetValidation: v
    } = gn(), f = (C) => {
      Ee(() => {
        var {
          validateTrigger: E,
          rules: k,
          modelValue: A
        } = e;
        u(E, C, k, A);
      });
    }, c = (C) => {
      var {
        checkedValue: E,
        onChange: k
      } = e;
      t && n.value === E || (n.value = C, O(e["onUpdate:modelValue"], n.value), O(k, n.value), t == null || t.onToggle(E), f("onChange"));
    }, h = (C) => {
      var {
        disabled: E,
        readonly: k,
        uncheckedValue: A,
        checkedValue: P,
        onClick: I
      } = e;
      o != null && o.disabled.value || E || (O(I, C), !(o != null && o.readonly.value || k) && (a.value = !0, c(r.value ? A : P)));
    }, S = (C) => {
      var {
        checkedValue: E,
        uncheckedValue: k
      } = e;
      n.value = C === E ? E : k;
    }, g = () => {
      O(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), $ = (C) => {
      var {
        uncheckedValue: E,
        checkedValue: k
      } = e, A = ![E, k].includes(C);
      A && (C = r.value ? E : k), c(C);
    };
    oe(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var y = {
      sync: S,
      validate: T,
      resetValidation: v,
      reset: g
    };
    return O(i, y), O(l, y), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Zh,
      classes: Jh,
      handleClick: h,
      toggle: $,
      reset: g,
      validate: T,
      resetValidation: v
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function xh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var _h = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: xh
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
  n: eg,
  classes: ng
} = ee("radio-group");
function rg(e, n) {
  var r = le("var-form-details");
  return b(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
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
  render: rg,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: Ge
  },
  props: _h,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = Kh(), {
      bindForm: t
    } = yn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = gn(), u = F(() => i.value), d = (g) => {
      Ee(() => {
        var {
          validateTrigger: T,
          rules: $,
          modelValue: y
        } = e;
        o(T, g, $, y);
      });
    }, v = () => r.forEach((g) => {
      var {
        sync: T
      } = g;
      return T(e.modelValue);
    }), f = (g) => {
      O(e["onUpdate:modelValue"], g), O(e.onChange, g), d("onChange");
    }, c = () => l(e.rules, e.modelValue), h = () => {
      O(e["onUpdate:modelValue"], void 0), s();
    };
    oe(() => e.modelValue, v), oe(() => n.value, v);
    var S = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return O(t, S), a(S), {
      errorMessage: i,
      n: eg,
      classes: ng,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var ag = {
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
} = ee("rate"), tg = ["onClick"];
function ig(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = Xe("ripple");
  return b(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      {
        class: m(e.n())
      },
      [(b(!0), V(
        Pe,
        null,
        Be(e.toNumber(e.count), (i) => ke((b(), V(
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
          tg
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
  render: ig,
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: Ge
  },
  directives: {
    Ripple: Fe
  },
  props: ag,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = (g) => {
      var {
        count: T,
        gap: $
      } = e;
      return {
        color: u(g).color,
        marginRight: g !== z(T) ? we($) : 0
      };
    }, s = (g) => {
      var {
        name: T,
        color: $
      } = u(g);
      return {
        [Ya("content")]: !0,
        [Ya("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [Ya("--error")]: a.value,
        [Ya("--primary")]: T !== e.emptyIcon && !$
      };
    }, u = (g) => {
      var {
        modelValue: T,
        disabled: $,
        disabledColor: y,
        color: C,
        half: E,
        emptyColor: k,
        icon: A,
        halfIcon: P,
        emptyIcon: I
      } = e, N = C;
      return ($ || n != null && n.disabled.value) && (N = y), g <= z(T) ? {
        color: N,
        name: A
      } : E && g <= z(T) + 0.5 ? {
        color: N,
        name: P
      } : {
        color: $ || n != null && n.disabled.value ? y : k,
        name: I
      };
    }, d = (g, T) => {
      if (e.half) {
        var {
          offsetWidth: $
        } = T.target;
        T.offsetX <= Math.floor($ / 2) && (g -= 0.5);
      }
      O(e["onUpdate:modelValue"], g);
    }, v = () => i(e.rules, z(e.modelValue)), f = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (g, T) => {
      var {
        readonly: $,
        disabled: y,
        onChange: C
      } = e;
      $ || y || n != null && n.disabled.value || n != null && n.readonly.value || (d(g, T), O(C, g), f());
    }, h = () => {
      O(e["onUpdate:modelValue"], 0), o();
    }, S = {
      reset: h,
      validate: v,
      resetValidation: o
    };
    return O(r, S), {
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
      toSizeUnit: we,
      toNumber: z,
      n: Ya
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
function og(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var lg = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: og
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
}, sg = (e) => ($r(""), e = e(), Tr(), e), ug = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, dg = /* @__PURE__ */ sg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), vg = [dg];
function fg(e, n) {
  return b(), V("svg", ug, vg);
}
const cg = _({
  render: fg
});
var mg = (e) => ($r(""), e = e(), Tr(), e), pg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, hg = /* @__PURE__ */ mg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), gg = [hg];
function yg(e, n) {
  return b(), V("svg", pg, gg);
}
const bg = _({
  render: yg
});
var wg = (e) => ($r(""), e = e(), Tr(), e), Sg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, Cg = /* @__PURE__ */ wg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), kg = [Cg];
function $g(e, n) {
  return b(), V("svg", Sg, kg);
}
const Tg = _({
  render: $g
});
var {
  n: Og,
  classes: Pg
} = ee("result");
function Vg(e, n) {
  return b(), V(
    Pe,
    null,
    [D(
      "span",
      {
        class: m(e.n("success-cover-left"))
      },
      null,
      2
    ), D(
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
    ), D(
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
    ), D(
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
    ), D(
      "span",
      {
        class: m(e.n("success-line-fix"))
      },
      null,
      2
    ), D(
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
const Mg = _({
  render: Vg,
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
      n: Og,
      classes: Pg,
      toNumber: z
    };
  }
});
var Eg = (e) => ($r(""), e = e(), Tr(), e), Ig = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Ng = /* @__PURE__ */ Eg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), Bg = [Ng];
function Dg(e, n) {
  return b(), V("svg", Ig, Bg);
}
const Ag = _({
  render: Dg
});
var zg = (e) => ($r(""), e = e(), Tr(), e), Lg = {
  viewBox: "-4 -4 32 32"
}, Rg = /* @__PURE__ */ zg(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), Ug = [Rg];
function Yg(e, n) {
  return b(), V("svg", Lg, Ug);
}
const Fg = _({
  render: Yg
});
var {
  n: Hg,
  classes: Wg
} = ee("result");
function jg(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [H(e.$slots, "image", {}, () => [e.type ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: K({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(b(), pe(
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
    )) : x("v-if", !0)]), H(e.$slots, "title", {}, () => [e.title ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
    )) : x("v-if", !0)]), H(e.$slots, "description", {}, () => [e.description ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
    )) : x("v-if", !0)]), e.$slots.footer ? (b(), V(
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
  render: jg,
  name: "VarResult",
  components: {
    Info: cg,
    Success: Mg,
    Warning: Tg,
    Error: bg,
    Question: Ag,
    Empty: Fg
  },
  props: lg,
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
      n: Hg,
      classes: Wg,
      toNumber: z,
      toPxNum: De,
      toSizeUnit: we,
      circleSize: n,
      borderSize: r
    };
  }
});
ua.install = function(e) {
  e.component(ua.name, ua);
};
function Gg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function qg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var Kg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Gg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: qg
  },
  onClick: U()
}, {
  n: Xg,
  classes: Zg
} = ee("row");
function Jg(e, n) {
  return b(), V(
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
  render: Jg,
  name: "VarRow",
  props: Kg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = Vv(), t = F(() => {
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
      n: Xg,
      classes: Zg,
      average: t
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function Qg(e) {
  return ["left", "right", "center"].includes(e);
}
var xg = {
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
    validator: Qg
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
  classes: _g
} = ee("select"), ey = {
  key: 1
};
function ny(e, n) {
  var r = le("var-chip"), a = le("var-icon"), t = le("var-menu"), i = le("var-form-details");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.formDisabled || e.disabled, e.n("--disabled")])),
      onClick: n[3] || (n[3] = function() {
        return e.handleClick && e.handleClick(...arguments);
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("controller"), [e.isFocus, e.n("--focus")], [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
        style: K({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "prepend-icon")],
        2
      ), D(
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
            menu: ve(() => [D(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [H(e.$slots, "default")],
              2
            )]),
            default: ve(() => [D(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: K({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [D(
                "div",
                {
                  class: m(e.n("label"))
                },
                [e.isEmptyModelValue ? x("v-if", !0) : H(e.$slots, "selected", {
                  key: 0
                }, () => [e.multiple ? (b(), V(
                  Pe,
                  {
                    key: 0
                  },
                  [e.chip ? (b(), V(
                    "div",
                    {
                      key: 0,
                      class: m(e.n("chips"))
                    },
                    [(b(!0), V(
                      Pe,
                      null,
                      Be(e.labels, (o) => (b(), pe(
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
                  )) : (b(), V(
                    "div",
                    {
                      key: 1,
                      class: m(e.n("values"))
                    },
                    ne(e.labels.join(e.separator)),
                    3
                  ))],
                  2112
                )) : (b(), V(
                  "span",
                  ey,
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
            ), D(
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
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [H(e.$slots, "append-icon", {}, () => [e.clearable ? (b(), pe(
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
    ), e.line ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: K({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
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
  render: ny,
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: er,
    VarChip: fr,
    VarFormDetails: Ge
  },
  props: xg,
  setup(e) {
    var n = M(null), r = M(!1), a = F(() => e.multiple), t = F(() => e.focusColor), i = M(""), o = M([]), l = F(() => Nn(e.modelValue)), s = M("0px"), u = M(0), {
      bindForm: d,
      form: v
    } = yn(), {
      length: f,
      options: c,
      bindOptions: h
    } = mh(), {
      errorMessage: S,
      validateWithTrigger: g,
      validate: T,
      resetValidation: $
    } = gn(), y = M(null), C = () => {
      var {
        multiple: W,
        modelValue: Q
      } = e;
      if (W) {
        var te = Q;
        o.value = te.map(A);
      }
      !W && !Nn(Q) && (i.value = A(Q)), !W && Nn(Q) && (i.value = "");
    }, E = (W) => {
      Ee(() => {
        var {
          validateTrigger: Q,
          rules: te,
          modelValue: ie
        } = e;
        g(Q, W, te, ie);
      });
    }, k = (W) => {
      var {
        value: Q,
        label: te
      } = W;
      return Q.value != null ? Q.value : te.value;
    }, A = (W) => {
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
    }, P = () => {
      var {
        hint: W,
        modelValue: Q
      } = e;
      if (!W && !Nn(Q))
        return Xt("--placeholder-hidden");
      if (W && (!Nn(Q) || r.value))
        return Xt("--placeholder-hint");
    }, I = () => n.value && window.getComputedStyle(n.value).width || "0px", N = () => {
      var {
        disabled: W,
        readonly: Q,
        onFocus: te
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Q || (s.value = I(), u.value = De(e.offsetY), r.value = !0, O(te), E("onFocus"));
    }, p = () => {
      var {
        disabled: W,
        readonly: Q,
        onBlur: te
      } = e;
      v != null && v.disabled.value || v != null && v.readonly.value || W || Q || (O(te), E("onBlur"));
    }, w = (W) => {
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
        }).map(k) : k(W);
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
        var ye = ie, Ye = c.find((Ne) => {
          var {
            label: He
          } = Ne;
          return He.value === W;
        }), Qe = ye.filter((Ne) => {
          var He;
          return Ne !== ((He = Ye.value.value) != null ? He : Ye.label.value);
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
        c.forEach((ie) => ie.sync(te.includes(k(ie))));
      } else
        c.forEach((ie) => ie.sync(Q === k(ie)));
      C();
    }, J = () => {
      s.value = I(), u.value = De(e.offsetY), r.value = !0;
    }, j = () => {
      r.value = !1;
    }, Z = () => T(e.rules, e.modelValue), B = () => {
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
      onSelect: w,
      reset: B,
      validate: Z,
      resetValidation: $
    };
    return h(X), O(d, X), {
      wrapEl: n,
      offsetY: u,
      isFocus: r,
      errorMessage: S,
      formDisabled: v == null ? void 0 : v.disabled,
      formReadonly: v == null ? void 0 : v.readonly,
      label: i,
      labels: o,
      isEmptyModelValue: l,
      menuEl: y,
      n: Xt,
      classes: _g,
      computePlaceholderState: P,
      handleFocus: N,
      handleBlur: p,
      handleClear: L,
      handleClick: Y,
      handleClose: G,
      reset: B,
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
var ry = {
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
  n: ay,
  classes: ty
} = ee("skeleton");
function iy(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? x("v-if", !0) : (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [H(e.$slots, "default")],
      2
    )), e.loading && !e.fullscreen ? (b(), V(
      "div",
      {
        key: 1,
        class: m(e.n("content"))
      },
      [e.card ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n("card")),
          style: K({
            height: e.toSizeUnit(e.cardHeight)
          })
        },
        [D(
          "div",
          {
            class: m(e.n("--animation"))
          },
          null,
          2
        )],
        6
      )) : x("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), V(
        "div",
        {
          key: 1,
          class: m(e.n("article"))
        },
        [e.avatar ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("avatar")),
            style: K({
              width: e.toSizeUnit(e.avatarSize),
              height: e.toSizeUnit(e.avatarSize)
            })
          },
          [D(
            "div",
            {
              class: m(e.n("--animation"))
            },
            null,
            2
          )],
          6
        )) : x("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (b(), V(
          "div",
          {
            key: 1,
            class: m(e.n("section"))
          },
          [e.title ? (b(), V(
            "div",
            {
              key: 0,
              class: m(e.n("title")),
              style: K({
                width: e.toSizeUnit(e.titleWidth)
              })
            },
            [D(
              "div",
              {
                class: m(e.n("--animation"))
              },
              null,
              2
            )],
            6
          )) : x("v-if", !0), (b(!0), V(
            Pe,
            null,
            Be(e.toNumber(e.rows), (r, a) => (b(), V(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: K({
                  width: e.toSizeUnit(e.rowsWidth[a])
                })
              },
              [D(
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
    )) : x("v-if", !0), e.loading && e.fullscreen ? (b(), V(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: K({
          zIndex: e.toNumber(e.fullscreenZIndex)
        })
      },
      [D(
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
  render: iy,
  name: "VarSkeleton",
  props: ry,
  setup() {
    return {
      n: ay,
      classes: ty,
      toSizeUnit: we,
      toNumber: z
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
function oy(e) {
  return ["always", "normal", "never"].includes(e);
}
var ly = {
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
    validator: oy
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
  n: dl,
  classes: sy
} = ee("slider"), Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var uy = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function dy(e, n) {
  var r = le("var-form-details");
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.isDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")])),
        ref: "sliderEl",
        onClick: n[0] || (n[0] = function() {
          return e.click && e.click(...arguments);
        })
      },
      [D(
        "div",
        {
          class: m(e.n("track"))
        },
        [D(
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
        ), D(
          "div",
          {
            class: m(e.n("track-fill")),
            style: K(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (b(!0), V(
        Pe,
        null,
        Be(e.thumbList, (a) => (b(), V(
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
          }, () => [D(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: K({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
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
            [D(
              "span",
              null,
              ne(a.text),
              1
            )],
            6
          )])],
          46,
          uy
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
  render: dy,
  name: "VarSlider",
  components: {
    VarFormDetails: Ge
  },
  props: ly,
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
    }), u = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), d = M(null), v = M(0), f = M(!1), c = Me({
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), h = F(() => z(e.max) - z(e.min)), S = F(() => v.value / h.value * z(e.step)), g = F(() => {
      var {
        modelValue: j,
        range: Z
      } = e, B = [];
      return Z && be(j) ? B = [{
        value: E(j[0]),
        enumValue: Ie.First,
        text: k(j[0])
      }, {
        value: E(j[1]),
        enumValue: Ie.Second,
        text: k(j[1])
      }] : Ke(j) && (B = [{
        value: E(j),
        enumValue: Ie.First,
        text: k(j)
      }]), B;
    }), T = F(() => {
      var {
        activeColor: j,
        range: Z,
        modelValue: B
      } = e, X = Z && be(B) ? E(Math.min(B[0], B[1])) : 0, W = Z && be(B) ? E(Math.max(B[0], B[1])) - X : E(B);
      return {
        width: W + "%",
        left: X + "%",
        background: j
      };
    }), $ = F(() => e.disabled || (r == null ? void 0 : r.disabled.value)), y = F(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[j].active, E = (j) => {
      var {
        min: Z,
        max: B
      } = e;
      return j < z(Z) ? 0 : j > z(B) ? 100 : (j - z(Z)) / h.value * 100;
    }, k = (j) => {
      if (!Ke(j))
        return 0;
      var Z = j;
      Z < Number(e.min) && (Z = Number(e.min)), Z > Number(e.max) && (Z = Number(e.max));
      var B = parseInt("" + Z, 10) === Z;
      return B ? Z : z(Z.toPrecision(5));
    }, A = (j, Z) => {
      var B = [], {
        step: X,
        range: W,
        modelValue: Q,
        onChange: te,
        min: ie
      } = e, ce = z(X), ye = Math.round(j / S.value), Ye = ye * ce + z(ie), Qe = c[Z].percentValue * ce + z(ie);
      if (c[Z].percentValue = ye, W && be(Q) && (B = Z === Ie.First ? [Ye, Q[1]] : [Q[0], Ye]), Qe !== Ye) {
        var Ne = W ? B.map((He) => k(He)) : k(Ye);
        O(te, Ne), O(e["onUpdate:modelValue"], Ne), u();
      }
    }, P = (j) => {
      if (!e.range)
        return Ie.First;
      var Z = c[Ie.First].percentValue * S.value, B = c[Ie.Second].percentValue * S.value, X = Math.abs(j - Z), W = Math.abs(j - B);
      return X <= W ? Ie.First : Ie.Second;
    }, I = (j, Z) => {
      v.value || (v.value = d.value.offsetWidth), !($.value || y.value) && (O(e.onStart), f.value = !0, c[Z].startPosition = j.touches[0].clientX);
    }, N = (j, Z) => {
      if (!($.value || y.value || !f.value)) {
        var B = j.touches[0].clientX - c[Z].startPosition + c[Z].currentLeft;
        c[Z].active = !0, B <= 0 ? B = 0 : B >= v.value && (B = v.value), A(B, Z);
      }
    }, p = (j) => {
      var {
        range: Z,
        modelValue: B,
        onEnd: X,
        step: W,
        min: Q
      } = e;
      if (!($.value || y.value)) {
        var te = [];
        c[j].currentLeft = c[j].percentValue * S.value, c[j].active = !1;
        var ie = c[j].percentValue * z(W) + z(Q);
        Z && be(B) && (te = j === Ie.First ? [ie, B[1]] : [B[0], ie]), O(X, Z ? te : ie), f.value = !1;
      }
    }, w = (j) => {
      if (!($.value || y.value) && !j.target.closest("." + dl("thumb"))) {
        var Z = j.clientX - hu(j.currentTarget), B = P(Z);
        A(Z, B), p(B);
      }
    }, L = () => {
      var j = z(e.step);
      return isNaN(j) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : j < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: j,
        modelValue: Z
      } = e;
      return j && !be(Z) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && be(Z) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && be(Z) && Z.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, G = function(j, Z) {
      j === void 0 && (j = e.modelValue), Z === void 0 && (Z = z(e.step));
      var B = (X) => {
        var {
          min: W,
          max: Q
        } = e;
        return X < z(W) ? 0 : X > z(Q) ? h.value / Z : (X - z(W)) / Z;
      };
      e.range && be(j) ? (c[Ie.First].percentValue = B(j[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * S.value, c[Ie.Second].percentValue = B(j[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * S.value) : Ke(j) && (c[Ie.First].currentLeft = B(j) * S.value);
    }, R = () => {
      var j = e.range ? [0, 0] : 0;
      O(e["onUpdate:modelValue"], j), o();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: o
    };
    return O(n, J), oe([() => e.modelValue, () => e.step], (j) => {
      var [Z, B] = j;
      !L() || !Y() || f.value || G(Z, z(B));
    }), oe(v, () => G()), Ue(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: dl,
      classes: sy,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: $,
      errorMessage: a,
      thumbsProps: c,
      thumbList: g,
      multiplySizeUnit: _e,
      toNumber: z,
      showLabel: C,
      start: I,
      move: N,
      end: p,
      click: w
    };
  }
});
ca.install = function(e) {
  e.component(ca.name, ca);
};
function Ni() {
  return Ni = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ni.apply(this, arguments);
}
function vy(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function fy(e) {
  return no.includes(e);
}
var Us = {
  type: {
    type: String,
    validator: fy
  },
  position: {
    type: String,
    default: "top",
    validator: vy
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
  loadingColor: Ni({}, qe(qn, "color"), {
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
  n: cy,
  classes: my
} = ee("snackbar"), py = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function hy(e, n) {
  var r = le("var-icon"), a = le("var-loading");
  return ke((b(), V(
    "div",
    {
      class: m(e.n()),
      style: K({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: K({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [H(e.$slots, "default", {}, () => [he(
          ne(e.content),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: m(e.n("action"))
        },
        [e.iconName ? (b(), pe(
          r,
          {
            key: 0,
            name: e.iconName
          },
          null,
          8,
          ["name"]
        )) : x("v-if", !0), e.type === "loading" ? (b(), pe(
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
const Ys = _({
  render: hy,
  name: "VarSnackbarCore",
  components: {
    VarLoading: On,
    VarIcon: Oe
  },
  props: Us,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = _a(() => e.show, 1);
    Mt(() => e.show, () => e.lockScroll);
    var a = F(() => e.type === "loading" || e.forbidClick), t = F(() => e.type ? py[e.type] : ""), i = () => {
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
      n: cy,
      classes: my,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: gy
} = ee("snackbar");
function yy(e, n) {
  var r = le("var-snackbar-core");
  return b(), pe(
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
  render: yy,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: Ys
  },
  props: Us,
  setup() {
    var {
      disabled: e
    } = Wi();
    return {
      n: gy,
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
function by(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !$t(e);
}
var no = ["loading", "success", "warning", "info", "error"], vl = 0, Bi = !1, Fs, Ba = !1, mn = Me([]), wy = {
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
}, Sy = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, Cy = {
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
        }, Py(t.position));
        return re(Ys, Ve(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = sn.zIndex;
      return re(su, Ve(Sy, {
        style: {
          zIndex: n
        },
        onAfterEnter: ky,
        onAfterLeave: $y
      }), by(e) ? e : {
        default: () => [e]
      });
    };
  }
}, zn = function(e) {
  var n = Ze(e) || Ke(e) ? {
    content: String(e)
  } : e, r = Me(Ja({}, wy, n));
  r.show = !0, Bi || (Bi = !0, Fs = Ra(Cy).unmountInstance);
  var {
    length: a
  } = mn, t = {
    id: vl++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Ba)
    Ty(t);
  else {
    var i = "update-" + vl;
    Oy(r, i);
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
function ky(e) {
  var n = e.getAttribute("data-id"), r = mn.find((a) => a.id === z(n));
  r && O(r.reactiveSnackOptions.onOpened);
}
function $y(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = mn.find((t) => t.id === z(n));
  r && (r.animationEnd = !0, O(r.reactiveSnackOptions.onClosed));
  var a = mn.every((t) => t.animationEnd);
  a && (O(Fs), mn = Me([]), Bi = !1);
}
function Ty(e) {
  mn.push(e);
}
function Oy(e, n) {
  var [r] = mn;
  r.reactiveSnackOptions = Ja({}, r.reactiveSnackOptions, e), r._update = n;
}
function Py(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Hs = (e) => ["mini", "small", "normal", "large"].includes(e), Vy = (e) => Hs(e) || be(e) || Ke(e) || Ze(e), My = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), Ey = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Vy
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
    validator: My
  },
  inline: {
    type: Boolean,
    default: !1
  }
};
function on(e) {
  return "calc(" + e + " / 2)";
}
function Iy(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: i,
    lastIndex: o
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? i !== o ? l = on(e) + " " + n + " " + on(e) + " 0" : l = on(e) + " 0" : t === "space-around" ? l = on(e) + " " + on(n) : t === "space-between" && (i === 0 ? l = on(e) + " " + on(n) + " " + on(e) + " 0" : i === o ? l = on(e) + " 0 " + on(e) + " " + on(n) : l = on(e) + " " + on(n))), a === "column" && i !== o && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Zt,
  classes: Ny
} = ee("space");
const pa = _({
  name: "VarSpace",
  props: Ey,
  setup(e, n) {
    var {
      slots: r
    } = n, a = (i, o) => o ? ["var(--space-size-" + i + "-y)", "var(--space-size-" + i + "-x)"] : be(i) ? i.map(we) : [we(i), we(i)], t = (i) => i === "start" || i === "end" ? "flex-" + i : i;
    return () => {
      var i, {
        inline: o,
        justify: l,
        align: s,
        wrap: u,
        direction: d,
        size: v
      } = e, f = (i = O(r.default)) != null ? i : [], c = Hs(v), [h, S] = a(v, c), g = (y) => {
        var C = [];
        return y.forEach((E) => {
          if (E.type !== uu) {
            if (E.type === Pe && be(E.children)) {
              E.children.forEach((k) => {
                C.push(k);
              });
              return;
            }
            C.push(E);
          }
        }), C;
      };
      f = g(f);
      var T = f.length - 1, $ = f.map((y, C) => {
        var E = Iy(h, S, {
          direction: d,
          justify: l,
          index: C,
          lastIndex: T
        });
        return re("div", {
          style: {
            margin: E
          }
        }, [y]);
      });
      return re("div", {
        class: Ny(Zt(), Zt("$--box"), [o, Zt("--inline")]),
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
var By = {
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
}, Ws = Symbol("STEPS_BIND_STEP_KEY"), js = Symbol("STEPS_COUNT_STEP_KEY");
function Dy() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ws), {
    length: r
  } = pn(js);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function Ay() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ws), {
    index: r
  } = hn(js);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: zy,
  classes: Ly
} = ee("step"), Ry = {
  key: 3
};
function Uy(e, n) {
  var r = le("var-icon");
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.n(e.direction))
      },
      [D(
        "div",
        {
          class: m(e.n(e.direction + "-main")),
          ref: e.getRef
        },
        [D(
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
          [e.isActive ? (b(), pe(
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
          )) : e.isCurrent && e.currentIcon ? (b(), pe(
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
          )) : e.inactiveIcon ? (b(), pe(
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
          )) : (b(), V(
            "span",
            Ry,
            ne(e.index + 1),
            1
          ))],
          6
        ), D(
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
      ), e.isLastChild ? x("v-if", !0) : (b(), V(
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
  render: Uy,
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: By,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = Ay(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = F(() => o.value === a.value), c = F(() => a.value !== -1 && o.value > a.value), h = {
      index: a
    }, S = () => v(a.value), g = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(h), oe(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var $ = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + $ + "px";
      }
    }), {
      n: zy,
      classes: Ly,
      main: e,
      index: a,
      isActive: c,
      isCurrent: f,
      direction: d,
      lineMargin: n,
      activeColor: s,
      inactiveColor: u,
      isLastChild: r,
      click: S,
      getRef: g
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
function Yy(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Fy = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Yy
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: U()
}, {
  n: Hy
} = ee("steps");
function Wy(e, n) {
  return b(), V(
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
  render: Wy,
  name: "VarSteps",
  props: Fy,
  setup(e) {
    var n = F(() => e.active), r = F(() => e.activeColor), a = F(() => e.inactiveColor), t = F(() => e.direction), {
      length: i,
      bindStep: o
    } = Dy(), l = (u) => {
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
      n: Hy
    };
  }
});
ga.install = function(e) {
  e.component(ga.name, ga);
};
var {
  n: jy
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
    return () => Sl(e.tag, {
      class: jy(),
      style: El(e.styleVars)
    }, O(r.default));
  }
});
var Jt = [];
function Qa(e) {
  Jt.forEach((r) => document.documentElement.style.removeProperty(r)), Jt.length = 0;
  var n = El(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Jt.push(a);
  });
}
Qa.Component = ya;
ya.install = function(e) {
  e.component(ya.name, ya);
};
Qa.install = function(e) {
  e.component(ya.name, ya);
};
var Gy = {
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
  n: qy,
  classes: Ky
} = ee("switch");
function Xy(e, n) {
  var r = le("var-loading"), a = le("var-form-details"), t = Xe("ripple");
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("block"), [e.disabled || e.formDisabled, e.n("--disabled")])),
        onClick: n[0] || (n[0] = function() {
          return e.switchActive && e.switchActive(...arguments);
        }),
        style: K(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: K(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), ke((b(), V(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: K(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: K(e.styleComputed.handle),
            class: m(e.classes(e.n("handle"), e.n("$-elevation--2"), [e.modelValue === e.activeValue, e.n("handle--active")], [e.errorMessage, e.n("handle--error")]))
          },
          [e.loading ? (b(), pe(
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
  render: Xy,
  name: "VarSwitch",
  components: {
    VarLoading: On,
    VarFormDetails: Ge
  },
  directives: {
    Ripple: Fe
  },
  props: Gy,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = () => i(e.rules, e.modelValue), s = () => Ee(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = F(() => {
      var {
        size: h,
        modelValue: S,
        color: g,
        closeColor: T,
        loadingColor: $,
        activeValue: y
      } = e;
      return {
        handle: {
          width: _e(h),
          height: _e(h),
          backgroundColor: S === y ? g : T,
          color: $
        },
        ripple: {
          left: S === y ? _e(h, 0.5) : "-" + _e(h, 0.5),
          color: S === y ? g : T || "#999",
          width: _e(h, 2),
          height: _e(h, 2)
        },
        track: {
          height: _e(h, 0.72),
          width: _e(h, 1.9),
          borderRadius: _e(h, 2 / 3),
          filter: S === y || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: S === y ? g : T
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
        onClick: S,
        onChange: g,
        disabled: T,
        loading: $,
        readonly: y,
        modelValue: C,
        activeValue: E,
        inactiveValue: k,
        "onUpdate:modelValue": A
      } = e;
      if (O(S, h), !(T || $ || y || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var P = C === E ? k : E;
        O(g, P), O(A, P), s();
      }
    }, f = () => {
      O(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return O(n, c), {
      n: qy,
      classes: Ky,
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
var Zy = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: U()
}, Gs = Symbol("TABS_BIND_TAB_KEY"), qs = Symbol("TABS_COUNT_TAB_KEY");
function Jy() {
  var {
    childProviders: e,
    bindChildren: n
  } = un(Gs), {
    length: r
  } = pn(qs);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Qy() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Gs), {
    index: r
  } = hn(qs);
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
  classes: xy
} = ee("tab");
function _y(e, n) {
  var r = Xe("ripple");
  return ke((b(), V(
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
  render: _y,
  name: "VarTab",
  directives: {
    Ripple: Fe
  },
  props: Zy,
  setup(e) {
    var n = M(null), r = F(() => e.name), a = F(() => e.disabled), t = F(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = Qy(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = o, S = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(S);
    var g = () => {
      var {
        disabled: y,
        name: C
      } = e;
      return y ? f.value : u.value === C || u.value === (i == null ? void 0 : i.value) ? d.value : v.value;
    }, T = () => {
      var {
        disabled: y,
        name: C
      } = e;
      return y ? st("$-tab--disabled") : u.value === C || u.value === (i == null ? void 0 : i.value) ? st("$-tab--active") : st("$-tab--inactive");
    }, $ = (y) => {
      var {
        disabled: C,
        name: E,
        onClick: k
      } = e;
      C || (O(k, E != null ? E : i.value, y), s(S));
    };
    return oe(() => e.name, h), oe(() => e.disabled, h), {
      n: st,
      classes: xy,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: g,
      computeColorClass: T,
      handleClick: $
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Ks = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), Xs = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function e0() {
  var {
    bindChildren: e,
    childProviders: n
  } = un(Ks), {
    length: r
  } = pn(Xs);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function n0() {
  var {
    parentProvider: e,
    bindParent: n
  } = dn(Ks), {
    index: r
  } = hn(Xs);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var r0 = {
  name: {
    type: [String, Number]
  }
}, {
  n: a0,
  classes: t0
} = ee("tab-item");
function i0(e, n) {
  var r = le("var-swipe-item");
  return b(), pe(
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
  render: i0,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Qn
  },
  props: r0,
  setup(e) {
    var n = M(!1), r = M(!1), a = F(() => e.name), {
      index: t,
      bindTabsItems: i
    } = n0(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: a0,
      classes: t0,
      current: n,
      initSlot: r
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var {
  n: o0,
  classes: l0
} = ee("table");
function s0(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$-elevation--1"), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("main"))
      },
      [D(
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
    ), e.$slots.footer ? (b(), V(
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
  render: s0,
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
      n: o0,
      classes: l0
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
function fl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var u0 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: fl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: fl
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
function cl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function ml(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        cl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        cl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: d0,
  classes: v0
} = ee("tabs");
function f0(e, n) {
  return b(), pe(
    La(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.sticky ? e.stickyCssMode : void 0,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ve(() => [D(
        "div",
        Ve({
          class: e.classes(e.n(), e.n("$--box"), e.n("--item-" + e.itemDirection), e.n("--layout-" + e.layoutDirection + "-padding"), [e.elevation, e.n("$-elevation--4")], [e.fixedBottom, e.n("--fixed-bottom")], [e.safeArea, e.n("--safe-area")]),
          style: {
            background: e.color
          }
        }, e.$attrs),
        [D(
          "div",
          {
            ref: "scrollerEl",
            class: m(e.classes(e.n("tab-wrap"), [e.scrollable, e.n("--layout-" + e.layoutDirection + "-scrollable")], e.n("--layout-" + e.layoutDirection)))
          },
          [H(e.$slots, "default"), D(
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
  render: f0,
  name: "VarTabs",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: u0,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), i = M(!1), o = M(null), l = F(() => e.active), s = F(() => e.activeColor), u = F(() => e.inactiveColor), d = F(() => e.disabledColor), v = F(() => e.itemDirection), f = M(null), {
      tabList: c,
      bindTabList: h,
      length: S
    } = Jy(), g = (N) => {
      var p, w = (p = N.name.value) != null ? p : N.index.value, {
        active: L,
        onChange: Y,
        onClick: G
      } = e;
      O(e["onUpdate:active"], w), O(G, w), w !== L && O(Y, w);
    }, T = () => c.find((N) => {
      var {
        name: p
      } = N;
      return e.active === p.value;
    }), $ = (N) => c.find((p) => {
      var {
        index: w
      } = p;
      return (N != null ? N : e.active) === w.value;
    }), y = () => {
      if (S.value !== 0) {
        var {
          active: N
        } = e;
        if (Ke(N)) {
          var p = N > S.value - 1 ? S.value - 1 : 0;
          return O(e["onUpdate:active"], p), $(p);
        }
      }
    }, C = () => {
      i.value = c.length >= 5;
    }, E = (N) => {
      var {
        element: p
      } = N, w = p.value;
      e.layoutDirection === "horizontal" ? (n.value = (w == null ? void 0 : w.offsetWidth) + "px", a.value = (w == null ? void 0 : w.offsetLeft) + "px") : (r.value = (w == null ? void 0 : w.offsetHeight) + "px", t.value = (w == null ? void 0 : w.offsetTop) + "px");
    }, k = (N) => {
      var {
        element: p
      } = N;
      if (!!i.value) {
        var w = o.value, L = p.value;
        if (e.layoutDirection === "horizontal") {
          var Y = L.offsetLeft + L.offsetWidth / 2 - w.offsetWidth / 2;
          Ga(w, {
            left: Y,
            animation: xt
          });
        } else {
          var G = L.offsetTop + L.offsetHeight / 2 - w.offsetHeight / 2;
          Ga(w, {
            top: G,
            animation: xt
          });
        }
      }
    }, A = () => {
      var N = T() || $() || y();
      !N || N.disabled.value || (C(), E(N), k(N));
    }, P = /* @__PURE__ */ function() {
      var N = ml(function* () {
        e.sticky && f.value && (yield f.value.resize());
      });
      return function() {
        return N.apply(this, arguments);
      };
    }(), I = {
      active: l,
      activeColor: s,
      inactiveColor: u,
      disabledColor: d,
      itemDirection: v,
      resize: A,
      onTabClick: g
    };
    return h(I), oe(() => S.value, /* @__PURE__ */ ml(function* () {
      yield Vn(), A();
    })), oe(() => e.active, A), Ue(() => window.addEventListener("resize", A)), tr(() => window.removeEventListener("resize", A)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Ae,
      toSizeUnit: we,
      n: d0,
      classes: v0,
      resize: A,
      resizeSticky: P
    };
  }
});
ka.install = function(e) {
  e.component(ka.name, ka);
};
var c0 = {
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
function pl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function m0(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        pl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        pl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: p0
} = ee("tabs-items");
function h0(e, n) {
  var r = le("var-swipe");
  return b(), pe(
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
  render: h0,
  name: "VarTabsItems",
  components: {
    VarSwipe: Jn
  },
  props: c0,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = e0(), i = (f) => r.find((c) => {
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
      !h || (r.forEach((S) => {
        var {
          setCurrent: g
        } = S;
        return g(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((g) => {
        var {
          index: T
        } = g;
        return T.value === f;
      }), S = (c = h.name.value) != null ? c : h.index.value;
      O(e["onUpdate:active"], S);
    }, d = () => n.value, v = {};
    return a(v), oe(() => e.active, s), oe(() => t.value, /* @__PURE__ */ m0(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: p0,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$a.install = function(e) {
  e.component($a.name, $a);
};
const g0 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, y0 = {
  "--badge-default-color": "#555"
}, b0 = {
  "--button-default-color": "#303030"
}, w0 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, S0 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, C0 = {
  "--checkbox-unchecked-color": "#fff"
}, k0 = {
  "--chip-default-color": "#555"
}, $0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, T0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, O0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, P0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, V0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, M0 = {
  "--pagination-list-bg-color": "#303030",
  "--pagination-hover-bg-color": "#25293a",
  "--pagination-list-active-bg-color": "#25293a",
  "--pagination-list-active-color": "#4a7afe",
  "--pagination-item-background": "#303030"
}, E0 = {
  "--picker-background": "#1e1e1e",
  "--picker-cancel-button-text-color": "#aaa",
  "--picker-picked-border": "1px solid rgba(255, 255, 255, 0.12)",
  "--picker-mask-background-image": "linear-gradient(180deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 12%, 0.9), hsla(0, 0%, 12%, 0.4))"
}, I0 = {
  "--popup-content-background-color": "#1e1e1e"
}, N0 = {
  "--pull-refresh-background": "#303030"
}, B0 = {
  "--radio-unchecked-color": "#fff"
}, D0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, A0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, z0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, L0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, R0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, U0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, Y0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, F0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, H0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, W0 = {
  "--tabs-background": "#1e1e1e"
}, j0 = {
  "--app-bar-color": "#272727"
}, G0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, q0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, K0 = {
  "--menu-background-color": "#272727"
}, X0 = {
  "--breadcrumb-inactive-color": "#aaa"
};
function Di() {
  return Di = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Di.apply(this, arguments);
}
const Z0 = Di({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, b0, S0, w0, F0, T0, z0, W0, U0, I0, O0, g0, k0, y0, H0, $0, N0, R0, L0, M0, Y0, V0, A0, B0, C0, P0, E0, j0, G0, q0, K0, D0, X0);
var Ai = {
  dark: Z0
}, fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], en = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], hl = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function J0(e) {
  return ["ampm", "24hr"].includes(e);
}
var Q0 = {
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
    validator: J0
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
}, Zs = (e, n) => e === "24hr" || n === "am", ro = (e, n, r) => {
  var a = fn.findIndex((i) => z(i) === z(r)), t = Zs(e, n) ? r : en[a];
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
}, Js = (e) => {
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
      minute: S
    } = rn(l);
    f = h === v && a > S;
  }
  if (!l && s) {
    var {
      hour: g,
      minute: T
    } = rn(s);
    f = g === v && a < T;
  }
  if (l && s) {
    var {
      hour: $,
      minute: y
    } = rn(l), {
      hour: C,
      minute: E
    } = rn(s);
    f = C === v && a < E || $ === v && a > y;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Qs = (e) => {
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
      hour: S,
      minute: g,
      second: T
    } = rn(s);
    c = S === f && g < l || g === l && a > T;
  }
  if (!s && u) {
    var {
      hour: $,
      minute: y,
      second: C
    } = rn(u);
    c = $ === f && y > l || y === l && a > C;
  }
  if (s && u) {
    var {
      hour: E,
      minute: k,
      second: A
    } = rn(s), {
      hour: P,
      minute: I,
      second: N
    } = rn(u);
    c = E === f && k < l || P === f && I > l || E === f && k === l && a > A || P === f && I === l && a < N;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: x0,
  classes: _0
} = ee("time-picker");
function eb(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n("clock"))
    },
    [D(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: K(e.handStyle)
      },
      null,
      6
    ), (b(!0), V(
      Pe,
      null,
      Be(e.timeScales, (r, a) => (b(), V(
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
    )), e.format === "24hr" && e.type === "hour" ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("clock-inner")),
        ref: "inner"
      },
      [(b(!0), V(
        Pe,
        null,
        Be(e.hours24, (r, a) => (b(), V(
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
const nb = _({
  render: eb,
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
      transform: "rotate(" + z(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = F(() => {
      if (e.rad !== void 0) {
        var g = e.rad / 30;
        return g >= 0 ? g : g + 12;
      }
    }), s = F(() => e.type === "hour" ? fn : hl), u = (g, T) => {
      var $;
      g = ($ = g) != null ? $ : e.type === "minute" ? e.time.minute : e.time.second;
      var y = e.type === "minute" ? Js : Qs, C = {
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
      return T && e.type === "minute" && Reflect.deleteProperty(C, "minute"), y(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var g = e.isInner ? en[l.value] : s.value[l.value];
      return s.value === hl ? u() ? "#bdbdbd" : e.color : f(g) ? "#bdbdbd" : e.color;
    }, v = (g, T) => T ? l.value === g && e.isInner : l.value === g && (!e.isInner || e.type !== "hour"), f = (g) => {
      if (e.type === "hour") {
        if (Zs(e.format, e.ampm))
          return t.value.includes(g);
        var T = fn.findIndex(($) => $ === g);
        return i.value.includes(T);
      }
      return u(g, !0);
    }, c = (g, T, $) => {
      var y = 2 * Math.PI / 12 * g - Math.PI / 2, C = 50 * (1 + Math.cos(y)), E = 50 * (1 + Math.sin(y)), k = () => v(g, $) ? f(T) ? {
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
        color: P
      } = k();
      return {
        left: C + "%",
        top: E + "%",
        backgroundColor: A,
        color: P
      };
    }, h = () => {
      var {
        width: g,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: g,
        height: T
      };
    }, S = () => {
      if (l.value !== void 0) {
        var g = e.ampm === "am" ? fn : en;
        return yr(g[l.value], 2, "0");
      }
    };
    return oe([l, () => e.isInner], (g, T) => {
      var [$, y] = g, [C, E] = T, k = $ === C && y === E;
      if (!(k || e.type !== "hour" || l.value === void 0)) {
        var A = y ? en[l.value] : S(), P = e.useSeconds ? ":" + e.time.second : "", I = A + ":" + e.time.minute + P;
        e.preventNextUpdate || r("update", I), r("change-prevent-update");
      }
    }), oe(() => e.rad, (g, T) => {
      if (!(e.type === "hour" || g === void 0 || T === void 0)) {
        var $ = g / 6 >= 0 ? g / 6 : g / 6 + 60, y = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if ($ !== y) {
          var C, {
            hourStr: E
          } = ro(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var k = ae().minute($).format("mm"), A = e.useSeconds ? ":" + e.time.second : "";
            C = E + ":" + k + A;
          }
          if (e.type === "second") {
            var P = ae().second($).format("ss"), I = e.useSeconds ? ":" + P : "";
            C = E + ":" + e.time.minute + I;
          }
          r("update", C);
        }
      }
    }), oe([() => e.max, () => e.min, () => e.allowedTime], (g) => {
      var [T, $, y] = g;
      if (t.value = [], T && !$) {
        var {
          hour: C
        } = rn(T), E = fn.filter((J) => z(J) > C), k = en.filter((J) => z(J) > C);
        t.value = [...E, ...k];
      }
      if (!T && $) {
        var {
          hour: A
        } = rn($), P = fn.filter((J) => z(J) < A), I = en.filter((J) => z(J) < A);
        t.value = [...P, ...I];
      }
      if (T && $) {
        var {
          hour: N
        } = rn(T), {
          hour: p
        } = rn($), w = fn.filter((J) => z(J) < p || z(J) > N), L = en.filter((J) => z(J) < p || z(J) > N);
        t.value = [...w, ...L];
      }
      if (y != null && y.hours) {
        var {
          hours: Y
        } = y, G = fn.filter((J) => !Y(z(J))), R = en.filter((J) => !Y(z(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...R])];
      }
      i.value = t.value.map((J) => en.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: x0,
      classes: _0,
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
  n: rb,
  classes: ab
} = ee("time-picker"), tb = (e) => ($r(""), e = e(), Tr(), e), ib = /* @__PURE__ */ tb(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
)), ob = {
  key: 0
};
function lb(e, n) {
  var r = le("clock");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")])),
      ref: "picker"
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: K({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: m(e.n("title-time"))
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "hour", e.n("title-btn--active")])),
            onClick: n[0] || (n[0] = (a) => e.checkPanel("hour"))
          },
          ne(e.time.hour),
          3
        ), ib, D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
        ), e.useSeconds ? (b(), V("span", ob, ":")) : x("v-if", !0), e.useSeconds ? (b(), V(
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
      ), e.format === "ampm" ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n("title-ampm"))
        },
        [D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.ampm === "am", e.n("title-btn--active")])),
            onClick: n[3] || (n[3] = (a) => e.checkAmpm("am"))
          },
          "AM",
          2
        ), D(
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
    ), D(
      "div",
      {
        class: m(e.n("body"))
      },
      [D(
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
            default: ve(() => [(b(), pe(
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
  render: lb,
  name: "VarTimePicker",
  components: {
    Clock: nb
  },
  props: Q0,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), i = M(!1), o = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), c = M("am"), h = M(!1), S = M(!1), g = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Me({
      x: 0,
      y: 0
    }), $ = Me({
      x: [],
      y: []
    }), y = F(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (B) => {
      O(e["onUpdate:modelValue"], B), O(e.onChange, B);
    }, E = (B) => B * 57.29577951308232, k = (B) => {
      l.value = !1, S.value = !1, f.value = B;
    }, A = (B) => {
      var {
        disableHour: X
      } = a.value, W = fn.findIndex((ie) => z(ie) === z(g.value.hour)), Q = B === "am" ? fn : en, te = [...Q.slice(W), ...Q.slice(0, W)];
      return te.find((ie, ce) => (i.value = ce !== 0, !X.includes(ie)));
    }, P = (B) => {
      if (!e.readonly) {
        c.value = B;
        var X = A(B);
        if (!!X) {
          var W = e.useSeconds ? ":" + g.value.second : "", Q = yr(X, 2, "0") + ":" + g.value.minute + W;
          C(Q);
        }
      }
    }, I = (B, X) => {
      var W = B >= $.x[0] && B <= $.x[1], Q = X >= $.y[0] && X <= $.y[1];
      return W && Q;
    }, N = (B) => {
      var X = e.format === "24hr" ? "HH" : "hh", {
        hour: W,
        minute: Q,
        second: te
      } = rn(B);
      return {
        hour: ae().hour(W).format(X),
        minute: ae().minute(Q).format("mm"),
        second: ae().second(te).format("ss")
      };
    }, p = (B) => {
      var X = B / 30;
      return X >= 0 ? X : X + 12;
    }, w = () => {
      var {
        width: B,
        height: X
      } = a.value.getSize(), W = T.x - B / 2 - 8, Q = T.x + B / 2 + 8, te = T.y - X / 2 - 8, ie = T.y + X / 2 + 8;
      return {
        rangeXMin: W,
        rangeXMax: Q,
        rangeYMin: te,
        rangeYMax: ie
      };
    }, L = (B, X, W) => {
      var {
        disableHour: Q
      } = a.value;
      o.value = I(B, X);
      var te = Math.round(W / 30) * 30 + 90, ie = p(te), ce = t.value ? fn[ie] : en[ie];
      if (Q.includes(ce) || (t.value = e.format === "24hr" ? I(B, X) : !1), t.value === o.value) {
        var ye = t.value || c.value === "pm" ? en[ie] : fn[ie];
        h.value = Q.includes(ye), !h.value && (u.value = te, l.value = !0);
      }
    }, Y = (B) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(B / 6) * 6 + 90, Q = W / 6 >= 0 ? W / 6 : W / 6 + 60, te = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      S.value = Js(te), !S.value && (d.value = W, s.value = !0);
    }, G = (B) => {
      var {
        disableHour: X
      } = a.value, W = Math.round(B / 6) * 6 + 90, Q = W / 6 >= 0 ? W / 6 : W / 6 + 60, te = {
        time: Q,
        format: e.format,
        ampm: c.value,
        hour: g.value.hour,
        minute: z(g.value.minute),
        max: e.max,
        min: e.min,
        disableHour: X,
        allowedTime: e.allowedTime
      };
      Qs(te) || (v.value = W);
    }, R = () => {
      var {
        left: B,
        top: X,
        width: W,
        height: Q
      } = n.value.getBoundingClientRect();
      if (T.x = B + W / 2, T.y = X + Q / 2, f.value === "hour" && e.format === "24hr") {
        var {
          rangeXMin: te,
          rangeXMax: ie,
          rangeYMin: ce,
          rangeYMax: ye
        } = w();
        $.x = [te, ie], $.y = [ce, ye];
      }
    }, J = (B) => {
      if (B.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: X,
          clientY: W
        } = B.touches[0], Q = X - T.x, te = W - T.y, ie = Math.round(E(Math.atan2(te, Q)));
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
    return oe(() => e.modelValue, (B) => {
      if (B) {
        var {
          hour: X,
          minute: W,
          second: Q
        } = rn(B), te = ae().hour(X).format("hh"), ie = ae().hour(X).format("HH"), ce = ae().minute(W).format("mm"), ye = ae().second(Q).format("ss");
        u.value = (te === "12" ? 0 : z(te)) * 30, d.value = z(ce) * 6, v.value = z(ye) * 6, g.value = N(B), e.format !== "24hr" && (c.value = yr("" + X, 2, "0") === ie && en.includes(ie) ? "pm" : "am"), t.value = e.format === "24hr" && en.includes(ie);
      }
    }, {
      immediate: !0
    }), {
      n: rb,
      classes: ab,
      getRad: y,
      time: g,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: J,
      checkPanel: k,
      checkAmpm: P,
      end: j,
      update: C,
      changePreventUpdate: Z
    };
  }
});
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
function sb(e) {
  return ["click", "hover"].includes(e);
}
function ub(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
}
function db(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
var vb = {
  type: {
    type: String,
    default: "default",
    validator: db
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
    validator: sb
  },
  placement: {
    type: String,
    default: "bottom",
    validator: ub
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
  n: fb,
  classes: cb
} = ee("tooltip");
function mb(e, n) {
  return b(), V(
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
    [H(e.$slots, "default"), (b(), pe(
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
          default: ve(() => [ke(D(
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
            [D(
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
  render: mb,
  name: "VarTooltip",
  props: vb,
  setup(e) {
    var {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      handleHostClick: i,
      handleHostMouseenter: o,
      handleHostMouseleave: l,
      handlePopoverMouseenter: s,
      handlePopoverMouseleave: u,
      handlePopoverClose: d,
      open: v,
      close: f,
      resize: c
    } = Ds(e);
    return {
      popover: n,
      host: r,
      show: a,
      zIndex: t,
      n: fb,
      classes: cb,
      handleHostClick: i,
      handlePopoverClose: d,
      handleHostMouseenter: o,
      handleHostMouseleave: l,
      handlePopoverMouseenter: s,
      handlePopoverMouseleave: u,
      resize: c,
      open: v,
      close: f
    };
  }
});
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
var pb = {
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
function gl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function yl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        gl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        gl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: hb,
  classes: gb
} = ee("uploader"), yb = 0, bb = ["onClick"], wb = ["onClick"], Sb = ["src", "alt"], Cb = ["multiple", "accept", "capture", "disabled"], kb = ["src"];
function $b(e, n) {
  var r = le("var-icon"), a = le("var-form-details"), t = le("var-popup"), i = Xe("ripple");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      {
        class: m(e.n("file-list"))
      },
      [(b(!0), V(
        Pe,
        null,
        Be(e.files, (o) => ke((b(), V(
          "div",
          {
            class: m(e.classes(e.n("file"), e.n("$-elevation--2"), [o.state === "loading", e.n("--loading")])),
            key: o.id,
            onClick: (l) => e.preview(o)
          },
          [D(
            "div",
            {
              class: m(e.n("file-name"))
            },
            ne(o.name || o.url),
            3
          ), e.removable ? (b(), V(
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
            wb
          )) : x("v-if", !0), o.cover ? (b(), V(
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
            Sb
          )) : x("v-if", !0), D(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          bb
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? ke((b(), V(
        "div",
        {
          key: 0,
          class: m(e.classes([!e.$slots.default, e.n("action") + " " + e.n("$-elevation--2")], [e.disabled || e.formDisabled, e.n("--disabled")])),
          onClick: n[1] || (n[1] = function() {
            return e.triggerAction && e.triggerAction(...arguments);
          })
        },
        [D(
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
          Cb
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
          return [e.currentPreview && e.isHTMLSupportVideo((o = e.currentPreview) == null ? void 0 : o.url) ? (b(), V(
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
            kb
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
  render: $b,
  name: "VarUploader",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarPopup: Cn,
    VarFormDetails: Ge
  },
  props: pb,
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
      id: yb++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), S = (Y) => {
      var G = Y.target, {
        files: R
      } = G;
      return Array.from(R);
    }, g = (Y) => new Promise((G) => {
      var R = new FileReader();
      R.onload = () => {
        var J = R.result;
        Y.file.type.startsWith("image") && (Y.cover = J), Y.url = J, G(Y);
      }, R.readAsDataURL(Y.file);
    }), T = (Y) => Y.map(g), $ = (Y) => {
      var {
        onBeforeRead: G
      } = e;
      return Y.map((R) => new Promise((J) => {
        G || J({
          valid: !0,
          varFile: R
        });
        var j = O(G, Me(R));
        j = be(j) ? j : [j], Promise.all(j).then((Z) => {
          J({
            valid: !Z.some((B) => !B),
            varFile: R
          });
        });
      }));
    }, y = /* @__PURE__ */ function() {
      var Y = yl(function* (G) {
        var {
          maxsize: R,
          maxlength: J,
          modelValue: j,
          onOversize: Z,
          onAfterRead: B,
          readonly: X,
          disabled: W
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || W || X)) {
          var Q = (Ne) => Ne.filter((He) => He.file.size > z(R) ? (O(Z, Me(He)), !1) : !0), te = (Ne) => {
            var He = Math.min(Ne.length, z(J) - j.length);
            return Ne.slice(0, He);
          }, ie = S(G), ce = ie.map(h);
          ce = R != null ? Q(ce) : ce, ce = J != null ? te(ce) : ce;
          var ye = yield Promise.all(T(ce)), Ye = yield Promise.all($(ye)), Qe = Ye.filter((Ne) => {
            var {
              valid: He
            } = Ne;
            return He;
          }).map((Ne) => {
            var {
              varFile: He
            } = Ne;
            return He;
          });
          O(e["onUpdate:modelValue"], [...j, ...Qe]), G.target.value = "", Qe.forEach((Ne) => O(B, Me(Ne)));
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var Y = yl(function* (G) {
        var {
          disabled: R,
          readonly: J,
          modelValue: j,
          onBeforeRemove: Z,
          onRemove: B
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || R || J)) {
          if (Z) {
            var X = O(Z, Me(G));
            if (X = be(X) ? X : [X], (yield Promise.all(X)).some((Q) => !Q))
              return;
          }
          var W = j.filter((Q) => Q !== G);
          O(B, Me(G)), I("onRemove"), O(e["onUpdate:modelValue"], W);
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), E = () => e.modelValue.filter((Y) => Y.state === "success"), k = () => e.modelValue.filter((Y) => Y.state === "error"), A = () => e.modelValue.filter((Y) => Y.state === "loading"), P = {
      getSuccess: E,
      getError: k,
      getLoading: A
    }, I = (Y) => {
      Ee(() => {
        var {
          validateTrigger: G,
          rules: R,
          modelValue: J
        } = e;
        s(G, Y, R, J, P);
      });
    }, N = !1, p = () => u(e.rules, e.modelValue, P), w = () => {
      N = !0, O(e["onUpdate:modelValue"], []), d();
    }, L = {
      validate: p,
      resetValidation: d,
      reset: w
    };
    return O(o, L), oe(() => e.modelValue, () => {
      !N && I("onChange"), N = !1;
    }, {
      deep: !0
    }), {
      n: hb,
      classes: gb,
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
      handleChange: y,
      handleRemove: C,
      getSuccess: E,
      getError: k,
      getLoading: A,
      validate: p,
      resetValidation: d,
      reset: w
    };
  }
});
Pa.install = function(e) {
  e.component(Pa.name, Pa);
};
function Tb(e) {
  br.install && e.use(br), Ar.install && e.use(Ar), zr.install && e.use(zr), ur.install && e.use(ur), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), an.install && e.use(an), Fr.install && e.use(Fr), dr.install && e.use(dr), vr.install && e.use(vr), Hr.install && e.use(Hr), fr.install && e.use(fr), Wr.install && e.use(Wr), jr.install && e.use(jr), Gr.install && e.use(Gr), sn.install && e.use(sn), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), wr.install && e.use(wr), Zr.install && e.use(Zr), Zn.install && e.use(Zn), Ge.install && e.use(Ge), Oe.install && e.use(Oe), Jr.install && e.use(Jr), rr.install && e.use(rr), Qr.install && e.use(Qr), xr.install && e.use(xr), hr.install && e.use(hr), St.install && e.use(St), _r.install && e.use(_r), ea.install && e.use(ea), On.install && e.use(On), Ka.install && e.use(Ka), ti.install && e.use(ti), er.install && e.use(er), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), kr.install && e.use(kr), Cn.install && e.use(Cn), ta.install && e.use(ta), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), Fe.install && e.use(Fe), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), zn.install && e.use(zn), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), xn.install && e.use(xn), Qa.install && e.use(Qa), Jn.install && e.use(Jn), Qn.install && e.use(Qn), ba.install && e.use(ba), wa.install && e.use(wa), Sa.install && e.use(Sa), Ca.install && e.use(Ca), ka.install && e.use(ka), $a.install && e.use($a), Ai.install && e.use(Ai), Ta.install && e.use(Ta), Oa.install && e.use(Oa), Pa.install && e.use(Pa);
}
const Pb = {
  install: Tb,
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
  Locale: ti,
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
  Themes: Ai,
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
  ti as Locale,
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
  Ai as Themes,
  Ta as TimePicker,
  Oa as Tooltip,
  Pa as Uploader,
  Pb as default,
  Tb as install
};
