import { reactive as Ne, ref as M, onMounted as Ue, onUnmounted as tr, onActivated as Di, onDeactivated as Ai, getCurrentInstance as Ba, provide as gl, computed as W, inject as yl, nextTick as Me, createApp as _s, onBeforeUnmount as zi, h as bl, isVNode as Ct, watch as te, onBeforeMount as eu, defineComponent as _, createVNode as re, Teleport as Za, Transition as Re, withDirectives as $e, vShow as Ja, mergeProps as Ee, openBlock as b, createBlock as pe, resolveDynamicComponent as Da, normalizeClass as m, normalizeStyle as X, resolveComponent as ie, resolveDirective as Ke, withCtx as ce, createElementVNode as D, renderSlot as q, toDisplayString as ne, createElementBlock as V, Fragment as Ve, renderList as Be, createCommentVNode as Q, onUpdated as Li, createTextVNode as ge, pushScopeId as $r, popScopeId as Tr, withModifiers as Dn, normalizeProps as wl, guardReactiveProps as nu, vModelText as ru, toRefs as au, withKeys as to, toRaw as io, TransitionGroup as tu, Comment as iu } from "vue";
var Sl = {
  locks: {},
  zIndex: 2e3,
  touchmoveForbid: !0
};
Ne(Sl);
const ln = Ne(Sl), Xe = (e) => typeof e == "string", Zt = (e) => typeof e == "boolean", qe = (e) => typeof e == "number", Ri = (e) => Object.prototype.toString.call(e) === "[object Object]", ou = (e) => typeof e == "object" && e !== null, ye = (e) => Array.isArray(e), lu = (e) => e ? /^(http)|(\.*\/)/.test(e) : !1, Gn = (e) => e == null || e === "" || Array.isArray(e) && !e.length, A = (e) => e == null ? 0 : Xe(e) ? (e = parseFloat(e), e = Number.isNaN(e) ? 0 : e, e) : Zt(e) ? Number(e) : e, kt = (e, n) => {
  if (e.length) {
    const r = e.indexOf(n);
    if (r > -1)
      return e.splice(r, 1);
  }
}, Ui = (e, n = 200) => {
  let r, a = 0;
  return function t(...i) {
    const o = Date.now(), l = o - a;
    a || (a = o), r && window.clearTimeout(r), l >= n ? (e.apply(this, i), a = o) : r = window.setTimeout(() => {
      t.apply(this, i);
    }, n - l);
  };
}, Yi = () => typeof window < "u", oo = (e) => [...new Set(e)], su = (e) => e.replace(/([A-Z])/g, " $1").trim().split(" ").join("-").toLowerCase(), uu = (e, n, r = "start") => {
  let a = r === "start" ? 0 : e.length - 1;
  for (; e.length > 0 && a >= 0 && a <= e.length - 1; ) {
    if (n(e[a], a, e))
      return [e[a], a];
    r === "start" ? a++ : a--;
  }
  return [null, -1];
};
var lo = (e) => e == null ? !1 : e.startsWith("data:image") || /\.(png|jpg|gif|jpeg|svg|webp)$/.test(e), so = (e) => e == null ? !1 : e.startsWith("data:video") || /\.(mp4|webm|ogg)$/.test(e), du = (e) => {
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
      this.has(r) && kt(this.cache, r);
    },
    clear() {
      this.cache.length = 0;
    }
  };
}, Jt = (e) => e, uo = (e) => Math.pow(e, 3), Cl = (e) => e < 0.5 ? uo(e * 2) / 2 : 1 - uo((1 - e) * 2) / 2, $t = (e, n) => e == null ? n : e, kl = () => typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : self, yr = function(e, n, r) {
  if (e === void 0 && (e = ""), r === void 0 && (r = ""), e.length >= n)
    return e;
  var a = n - e.length, t = Math.floor(a / r.length);
  return r.repeat(t) + r.slice(0, a % r.length) + e;
};
function vo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function vu(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        vo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        vo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
function fu(e) {
  var {
    left: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollLeft || document.documentElement.scrollLeft);
}
function fo(e) {
  var {
    top: n
  } = e.getBoundingClientRect();
  return n + (document.body.scrollTop || document.documentElement.scrollTop);
}
function Tt(e) {
  var n = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(n, 0);
}
function Fi(e) {
  var n = "scrollLeft" in e ? e.scrollLeft : e.pageXOffset;
  return Math.max(n, 0);
}
function cu(e) {
  return Qt.apply(this, arguments);
}
function Qt() {
  return Qt = vu(function* (e) {
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
  }), Qt.apply(this, arguments);
}
function Ft(e) {
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
function mu(e) {
  for (var n = [], r = e; r !== window; )
    r = Or(r), n.push(r);
  return n;
}
var $l = (e) => Xe(e) && e.endsWith("rem"), pu = (e) => Xe(e) && e.endsWith("px") || qe(e), hu = (e) => Xe(e) && e.endsWith("%"), Tl = (e) => Xe(e) && e.endsWith("vw"), Ol = (e) => Xe(e) && e.endsWith("vh"), gu = (e) => Xe(e) && e.startsWith("calc("), yu = (e) => Xe(e) && e.startsWith("var("), De = (e) => {
  if (qe(e))
    return e;
  if (pu(e))
    return +e.replace("px", "");
  if (Tl(e))
    return +e.replace("vw", "") * window.innerWidth / 100;
  if (Ol(e))
    return +e.replace("vh", "") * window.innerHeight / 100;
  if ($l(e)) {
    var n = +e.replace("rem", ""), r = window.getComputedStyle(document.documentElement).fontSize;
    return n * parseFloat(r);
  }
  return Xe(e) ? A(e) : 0;
}, we = (e) => {
  if (e != null)
    return hu(e) || Tl(e) || Ol(e) || $l(e) || gu(e) || yu(e) ? e : De(e) + "px";
}, Qe = function(e, n) {
  if (n === void 0 && (n = 1), e != null) {
    var r = we(e), a = r.match(/(vh|%|rem|px|vw)$/)[0];
    return "" + parseFloat(r) * n + a;
  }
};
function $n(e) {
  var n = kl();
  return n.requestAnimationFrame ? n.requestAnimationFrame(e) : n.setTimeout(e, 16);
}
function bu(e) {
  var n = kl();
  n.cancelAnimationFrame ? n.cancelAnimationFrame(e) : n.clearTimeout(e);
}
function Ot(e) {
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
function wu() {
  return new Promise((e) => {
    $n(e);
  });
}
function Wa(e, n) {
  var {
    top: r = 0,
    left: a = 0,
    duration: t = 300,
    animation: i
  } = n, o = Date.now(), l = Tt(e), s = Fi(e);
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
    var [a, t] = r, i = a.startsWith("--") ? a : "--" + su(a);
    return n[i] = t, n;
  }, {});
}
function Su() {
  var e = typeof window < "u";
  return e && "ontouchstart" in window;
}
var Cu = ["collect", "clear"];
function co(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function mo(e) {
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
function ku(e, n) {
  if (e == null)
    return {};
  var r = {}, a = Object.keys(e), t, i;
  for (i = 0; i < a.length; i++)
    t = a[i], !(n.indexOf(t) >= 0) && (r[t] = e[t]);
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
function Ge(e, n) {
  return Array.isArray(n) ? n.reduce((r, a) => (r[a] = e[a], r), {}) : e[n];
}
function $u(e) {
  var n = _s(e), r = document.createElement("div");
  return document.body.appendChild(r), {
    instance: n.mount(r),
    unmount() {
      n.unmount(), document.body.removeChild(r);
    }
  };
}
function Aa(e, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {});
  var a = {
    setup() {
      return () => bl(e, ct({}, n, r));
    }
  }, {
    unmount: t
  } = $u(a);
  return {
    unmountInstance: t
  };
}
function Tu(e) {
  var n = [], r = (a) => {
    if (a != null && a.component) {
      r(a == null ? void 0 : a.component.subTree);
      return;
    }
    Array.isArray(a == null ? void 0 : a.children) && a.children.forEach((t) => {
      Ct(t) && (n.push(t), r(t));
    });
  };
  return r(e), n;
}
function pn(e) {
  var n = Ne([]), r = Ba(), a = () => {
    var l = Tu(r.subTree);
    n.sort((s, u) => l.indexOf(s.vnode) - l.indexOf(u.vnode));
  }, t = (l) => {
    n.push(l), a();
  }, i = (l) => {
    kt(n, l);
  };
  gl(e, {
    collect: t,
    clear: i,
    instances: n
  });
  var o = W(() => n.length);
  return {
    length: o
  };
}
function hn(e) {
  if (!El(e))
    return {
      index: null
    };
  var n = yl(e), {
    collect: r,
    clear: a,
    instances: t
  } = n, i = Ba();
  Ue(() => {
    Me().then(() => r(i));
  }), tr(() => {
    Me().then(() => a(i));
  });
  var o = W(() => t.indexOf(i));
  return {
    index: o
  };
}
function sn(e) {
  var n = [], r = (i) => {
    n.push(i);
  }, a = (i) => {
    kt(n, i);
  }, t = (i) => {
    gl(e, ct({
      collect: r,
      clear: a
    }, i));
  };
  return {
    childProviders: n,
    bindChildren: t
  };
}
function un(e) {
  if (!El(e))
    return {
      parentProvider: null,
      bindParent: null
    };
  var n = yl(e), {
    collect: r,
    clear: a
  } = n, t = ku(n, Cu), i = (o) => {
    Ue(() => r(o)), zi(() => a(o));
  };
  return {
    parentProvider: t,
    bindParent: i
  };
}
function El(e) {
  var n = Ba();
  return e in n.provides;
}
function gn() {
  var e = M(""), n = /* @__PURE__ */ function() {
    var t = mo(function* (i, o, l) {
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
    var t = mo(function* (i, o, l, s, u) {
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
function Ou(e) {
  Ue(() => {
    window.addEventListener("hashchange", e), window.addEventListener("popstate", e);
  }), tr(() => {
    window.removeEventListener("hashchange", e), window.removeEventListener("popstate", e);
  });
}
function Wi() {
  var e = M(!1);
  return Di(() => {
    e.value = !1;
  }), Ai(() => {
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
function O(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
    r[a - 1] = arguments[a];
  if (ye(e))
    return e.map((t) => t(...r));
  if (e)
    return e(...r);
}
function F(e) {
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
  n: Ml
} = ee("ripple"), po = 250;
function Vu(e) {
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
function Pl(e) {
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
      s.classList.add(Ml()), s.style.opacity = "0", s.style.transform = "translate(" + a + "px, " + t + "px) scale3d(.3, .3, .3)", s.style.width = l + "px", s.style.height = l + "px", n.color && (s.style.backgroundColor = n.color), s.dataset.createdAt = String(performance.now()), Vu(this), this.appendChild(s), window.setTimeout(() => {
        s.style.transform = "translate(" + i + "px, " + o + "px) scale3d(1, 1, 1)", s.style.opacity = ".25";
      }, 20);
    };
    n.tasker = window.setTimeout(r, 60);
  }
}
function xt() {
  var e = this._ripple, n = () => {
    var r = this.querySelectorAll("." + Ml());
    if (!!r.length) {
      var a = r[r.length - 1], t = po - performance.now() + Number(a.dataset.createdAt);
      setTimeout(() => {
        a.style.opacity = "0", setTimeout(() => {
          var i;
          return (i = a.parentNode) == null ? void 0 : i.removeChild(a);
        }, po);
      }, t);
    }
  };
  e.tasker ? setTimeout(n, 60) : n();
}
function Il() {
  var e = this._ripple;
  !Su() || !e.touchmoveForbid || (e.tasker && window.clearTimeout(e.tasker), e.tasker = null);
}
function Mu(e, n) {
  var r, a, t;
  e._ripple = mt({
    tasker: null
  }, (r = n.value) != null ? r : {}, {
    touchmoveForbid: (a = (t = n.value) == null ? void 0 : t.touchmoveForbid) != null ? a : ln.touchmoveForbid,
    removeRipple: xt.bind(e)
  }), e.addEventListener("touchstart", Pl, {
    passive: !0
  }), e.addEventListener("touchmove", Il, {
    passive: !0
  }), e.addEventListener("dragstart", xt, {
    passive: !0
  }), document.addEventListener("touchend", e._ripple.removeRipple, {
    passive: !0
  }), document.addEventListener("touchcancel", e._ripple.removeRipple, {
    passive: !0
  });
}
function Pu(e) {
  e.removeEventListener("touchstart", Pl), e.removeEventListener("touchmove", Il), e.removeEventListener("dragstart", xt), document.removeEventListener("touchend", e._ripple.removeRipple), document.removeEventListener("touchcancel", e._ripple.removeRipple);
}
function Iu(e, n) {
  var r, a, t, i, o, l, s, u = {
    touchmoveForbid: (r = (a = n.value) == null ? void 0 : a.touchmoveForbid) != null ? r : ln.touchmoveForbid,
    color: (t = n.value) == null ? void 0 : t.color,
    disabled: (i = n.value) == null ? void 0 : i.disabled
  }, d = u.touchmoveForbid !== ((o = e._ripple) == null ? void 0 : o.touchmoveForbid) || u.color !== ((l = e._ripple) == null ? void 0 : l.color) || u.disabled !== ((s = e._ripple) == null ? void 0 : s.disabled);
  if (d) {
    var v, f;
    e._ripple = mt({
      tasker: u.disabled ? null : (v = e._ripple) == null ? void 0 : v.tasker,
      removeRipple: (f = e._ripple) == null ? void 0 : f.removeRipple
    }, u);
  }
}
var Fe = {
  mounted: Mu,
  unmounted: Pu,
  updated: Iu,
  install(e) {
    e.directive("ripple", this);
  }
};
function Nu(e) {
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
    validator: Nu
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  onClickOverlay: F(),
  "onUpdate:show": F(),
  onRouteChange: F()
};
function Nl() {
  var e = Object.keys(ln.locks).length;
  e <= 0 ? document.body.classList.remove("var--lock") : document.body.classList.add("var--lock");
}
function et(e) {
  ln.locks[e] = 1, Nl();
}
function nt(e) {
  delete ln.locks[e], Nl();
}
function Vt(e, n) {
  var {
    uid: r
  } = Ba();
  n && te(n, (a) => {
    a === !1 ? nt(r) : a === !0 && e() === !0 && et(r);
  }), te(e, (a) => {
    n && n() === !1 || (a === !0 ? et(r) : nt(r));
  }), eu(() => {
    n && n() === !1 || e() === !0 && et(r);
  }), tr(() => {
    n && n() === !1 || e() === !0 && nt(r);
  }), Di(() => {
    n && n() === !1 || e() === !0 && et(r);
  }), Ai(() => {
    n && n() === !1 || e() === !0 && nt(r);
  });
}
function xa(e, n) {
  var r = M(ln.zIndex);
  return te(e, (a) => {
    a && (ln.zIndex += n, r.value = ln.zIndex);
  }, {
    immediate: !0
  }), {
    zIndex: r
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
function Bu(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ct(e);
}
var {
  n: Pn,
  classes: Wt
} = ee("popup");
const Cn = _({
  name: "VarPopup",
  inheritAttrs: !1,
  props: Qa,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = xa(() => e.show, 3), {
      disabled: i
    } = Wi(), o = () => {
      var {
        closeOnClickOverlay: d,
        onClickOverlay: v
      } = e;
      O(v), d && O(e["onUpdate:show"], !1);
    };
    Vt(() => e.show, () => e.lockScroll), te(() => e.show, (d) => {
      O(d ? e.onOpen : e.onClose);
    }), Ou(() => O(e.onRouteChange));
    var l = () => {
      var {
        overlayClass: d = "",
        overlayStyle: v
      } = e;
      return re("div", {
        class: Wt(Pn("overlay"), d),
        style: _t({
          zIndex: t.value - 1
        }, v),
        onClick: o
      }, null);
    }, s = () => re("div", Ee({
      class: Wt(Pn("content"), Pn("--" + e.position), [e.defaultStyle, Pn("--content-background-color")], [e.defaultStyle, Pn("$-elevation--3")]),
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
        position: g
      } = e;
      return re(Re, {
        name: Pn("$-fade"),
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: () => [$e(re("div", {
          class: Wt(Pn("$--box"), Pn()),
          style: {
            zIndex: t.value - 2
          }
        }, [c && l(), re(Re, {
          name: h || Pn("$-pop-" + g)
        }, {
          default: () => [f && s()]
        })]), [[Ja, f]])]
      });
    };
    return () => {
      var {
        teleport: d
      } = e;
      if (d) {
        var v;
        return re(Za, {
          to: d,
          disabled: i.value
        }, Bu(v = u()) ? v : {
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
var Bl = {
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
  onClick: F()
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
function Du(e) {
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
  n: Au,
  classes: zu
} = ee("icon");
function Lu(e, n) {
  return b(), pe(
    Da(e.isURL(e.name) ? "img" : "i"),
    {
      class: m(e.classes(e.n(), [e.namespace !== e.n(), e.namespace], e.namespace + "--set", [e.isURL(e.name), e.n("image"), e.namespace + "-" + e.nextName], [e.shrinking, e.n("--shrinking")])),
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
  render: Lu,
  name: "VarIcon",
  props: Bl,
  setup(e) {
    var n = M(""), r = M(!1), a = /* @__PURE__ */ function() {
      var t = Du(function* (i, o) {
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
    return te(() => e.name, a, {
      immediate: !0
    }), {
      n: Au,
      classes: zu,
      nextName: n,
      shrinking: r,
      isURL: lu,
      toNumber: A,
      toSizeUnit: we
    };
  }
});
Oe.install = function(e) {
  e.component(Oe.name, Oe);
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
var Ru = ei({
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
  onSelect: F(),
  "onUpdate:show": F()
}, Ge(Qa, [
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
const Dl = {
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
}, Uu = {
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
function Al() {
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
    e[i] = ni({}, e[i], o), a(i);
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
  packs: Yu,
  pack: We,
  add: zl,
  use: Ll,
  merge: Fu
} = Al();
zl("zh-CN", Dl);
Ll("zh-CN");
const ri = {
  zhCN: Dl,
  enUS: Uu,
  packs: Yu,
  pack: We,
  add: zl,
  use: Ll,
  merge: Fu,
  useLocale: Al
};
var {
  n: Wu,
  classes: Hu
} = ee("action-sheet"), ju = ["onClick"];
function Gu(e, n) {
  var r = ie("var-icon"), a = ie("var-popup"), t = Ke("ripple");
  return b(), pe(
    a,
    Ee({
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
      default: ce(() => [D(
        "div",
        Ee({
          class: e.classes(e.n(), e.n("$--box"))
        }, e.$attrs),
        [q(e.$slots, "title", {}, () => [D(
          "div",
          {
            class: m(e.n("title"))
          },
          ne(e.dt(e.title, e.pack.actionSheetTitle)),
          3
        )]), q(e.$slots, "actions", {}, () => [(b(!0), V(
          Ve,
          null,
          Be(e.actions, (i) => $e((b(), V(
            "div",
            {
              class: m(e.classes(e.n("action-item"), i.className, [i.disabled, e.n("--disabled")])),
              key: i.name,
              style: X({
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
            )) : Q("v-if", !0), D(
              "div",
              {
                class: m(e.n("action-name"))
              },
              ne(i.name),
              3
            )],
            14,
            ju
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
  render: Gu,
  name: "VarActionSheet",
  directives: {
    Ripple: Fe
  },
  components: {
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: Ru,
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
    return te(() => e.show, (t) => {
      n.value = t;
    }, {
      immediate: !0
    }), {
      n: Wu,
      classes: Hu,
      handlePopupUpdateShow: a,
      popupShow: n,
      pack: We,
      dt: $t,
      handleSelect: r
    };
  }
});
var Wn;
function br(e) {
  return Yi() ? new Promise((n) => {
    br.close();
    var r = Ne(e);
    r.teleport = "body", Wn = r;
    var {
      unmountInstance: a
    } = Aa(sr, r, {
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
function qu(e) {
  var n = ["left", "center", "right"];
  return n.includes(e);
}
var Ku = {
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
    validator: qu
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
  n: Xu,
  classes: Zu
} = ee("app-bar");
function Ju(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.round, e.n("--round")], [e.elevation, e.n("$-elevation--3")])),
      style: X({
        background: e.color,
        color: e.textColor
      })
    },
    [D(
      "div",
      {
        class: m(e.n("left"))
      },
      [q(e.$slots, "left"), e.titlePosition === "left" ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: X({
            paddingLeft: e.paddingLeft
          })
        },
        [q(e.$slots, "default", {}, () => [ge(
          ne(e.title),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    ), e.titlePosition === "center" ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      [q(e.$slots, "default", {}, () => [ge(
        ne(e.title),
        1
      )])],
      2
    )) : Q("v-if", !0), D(
      "div",
      {
        class: m(e.n("right"))
      },
      [e.titlePosition === "right" ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n("title")),
          style: X({
            paddingRight: e.paddingRight
          })
        },
        [q(e.$slots, "default", {}, () => [ge(
          ne(e.title),
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
  render: Ju,
  name: "VarAppBar",
  props: Ku,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(), t = M(), i = () => {
      a.value = r.left ? 0 : void 0, t.value = r.right ? 0 : void 0;
    };
    return Ue(i), Li(i), {
      n: Xu,
      classes: Zu,
      paddingLeft: a,
      paddingRight: t
    };
  }
});
Ar.install = function(e) {
  e.component(Ar.name, Ar);
};
function Qu(e) {
  return ["circle", "wave", "cube", "rect", "disappear"].includes(e);
}
function xu(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var qn = {
  type: {
    type: String,
    default: "circle",
    validator: Qu
  },
  radius: {
    type: [String, Number]
  },
  size: {
    type: String,
    default: "normal",
    validator: xu
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
  n: _u,
  classes: ed
} = ee("loading"), nd = (e) => ($r(""), e = e(), Tr(), e), rd = /* @__PURE__ */ nd(() => /* @__PURE__ */ D(
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
)), ad = [rd];
function td(e, n) {
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
      [q(e.$slots, "default"), e.loading ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.n("content-mask"))
        },
        null,
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.isShow ? (b(), V(
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
            style: X({
              width: e.multiplySizeUnit(e.radius, 2),
              height: e.multiplySizeUnit(e.radius, 2),
              color: e.color
            })
          },
          ad,
          6
        )],
        2
      )) : Q("v-if", !0), (b(!0), V(
        Ve,
        null,
        Be(e.loadingTypeDict, (r, a) => (b(), V(
          Ve,
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
              Ve,
              null,
              Be(r, (t) => (b(), V(
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
      )), e.$slots.description || e.description ? (b(), V(
        "div",
        {
          key: 1,
          class: m(e.classes(e.n("description"), e.n("description--" + e.size))),
          style: X({
            color: e.color
          })
        },
        [q(e.$slots, "description", {}, () => [ge(
          ne(e.description),
          1
        )])],
        6
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const On = _({
  render: td,
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
    }, t = W(() => O(r.default) ? e.loading : !0);
    return {
      n: _u,
      classes: ed,
      multiplySizeUnit: Qe,
      loadingTypeDict: a,
      isShow: t
    };
  }
});
On.install = function(e) {
  e.component(On.name, On);
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
function id(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function od(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var ld = {
  type: {
    type: String,
    default: "default",
    validator: id
  },
  size: {
    type: String,
    default: "normal",
    validator: od
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
  loadingType: Ge(qn, "type"),
  loadingSize: Ge(qn, "size"),
  loadingColor: ai({}, Ge(qn, "color"), {
    default: "currentColor"
  }),
  onClick: F(),
  onTouchstart: F()
}, {
  n: sd,
  classes: ud
} = ee("button"), dd = ["disabled"];
function vd(e, n) {
  var r = ie("var-loading"), a = Ke("ripple");
  return $e((b(), V(
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
    )) : Q("v-if", !0), D(
      "div",
      {
        class: m(e.classes(e.n("content"), [e.loading || e.pending, e.n("--hidden")]))
      },
      [q(e.$slots, "default")],
      2
    )],
    46,
    dd
  )), [[a, {
    disabled: e.disabled || !e.ripple
  }]]);
}
const rn = _({
  render: vd,
  name: "VarButton",
  components: {
    VarLoading: On
  },
  directives: {
    Ripple: Fe
  },
  props: ld,
  setup(e) {
    var n = M(!1), r = (i) => {
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
      n: sd,
      classes: ud,
      pending: n,
      handleClick: a,
      handleTouchstart: t
    };
  }
});
rn.install = function(e) {
  e.component(rn.name, rn);
};
var fd = {
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
  onClick: F()
}, {
  n: cd,
  classes: md
} = ee("back-top");
function pd(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
  return b(), pe(
    Za,
    {
      to: "body",
      disabled: e.disabled
    },
    [D(
      "div",
      Ee({
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
      [q(e.$slots, "default", {}, () => [re(a, {
        type: "primary",
        round: "",
        "var-back-top-cover": ""
      }, {
        default: ce(() => [re(r, {
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
  render: pd,
  name: "VarBackTop",
  components: {
    VarButton: rn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: fd,
  setup(e) {
    var n = M(!1), r = M(null), a = M(!0), t, i = (u) => {
      O(e.onClick, u);
      var d = Fi(t);
      Wa(t, {
        left: d,
        duration: e.duration,
        animation: Cl
      });
    }, o = () => {
      n.value = Tt(t) >= De(e.visibilityHeight);
    }, l = Ui(o, 200), s = () => {
      var {
        target: u
      } = e;
      if (Xe(u)) {
        var d = document.querySelector(e.target);
        if (!d)
          throw Error("[Varlet] BackTop: target element cannot found");
        return d;
      }
      if (ou(u))
        return u;
      throw Error('[Varlet] BackTop: type of prop "target" should be a selector or an element object');
    };
    return Ue(() => {
      t = e.target ? s() : Or(r.value), t.addEventListener("scroll", l), a.value = !1;
    }), zi(() => {
      t.removeEventListener("scroll", l);
    }), {
      disabled: a,
      show: n,
      backTopEl: r,
      toSizeUnit: we,
      n: cd,
      classes: md,
      click: i
    };
  }
});
zr.install = function(e) {
  e.component(zr.name, zr);
};
function hd(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function gd(e) {
  return ["right-top", "right-bottom", "left-top", "left-bottom"].includes(e);
}
var yd = {
  type: {
    type: String,
    default: "default",
    validator: hd
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
    validator: gd
  },
  icon: {
    type: String
  }
}, {
  n: zn,
  classes: bd
} = ee("badge"), wd = {
  key: 1
};
function Sd(e, n) {
  var r = ie("var-icon");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [re(
      Re,
      {
        name: e.n("$-badge-fade")
      },
      {
        default: ce(() => [$e(D(
          "span",
          Ee(e.$attrs, {
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
            wd,
            ne(e.values),
            1
          ))],
          16
        ), [[Ja, !e.hidden]])]),
        _: 1
      },
      8,
      ["name"]
    ), q(e.$slots, "default")],
    2
  );
}
const ur = _({
  render: Sd,
  name: "VarBadge",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: yd,
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
      return o ? "" : l !== void 0 && s !== void 0 && A(l) > s ? s + "+" : l;
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
      classes: bd,
      values: t,
      contentClass: a
    };
  }
});
ur.install = function(e) {
  e.component(ur.name, ur);
};
var Cd = {
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
  onChange: F(),
  "onUpdate:active": F(),
  onBeforeChange: F(),
  onFabClick: F(),
  fabProps: {
    type: Object
  }
}, Rl = Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"), Ul = Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");
function kd() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(Rl), {
    length: r
  } = pn(Ul);
  return {
    length: r,
    bottomNavigationItems: e,
    bindBottomNavigationItem: n
  };
}
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
var {
  n: $d,
  classes: Td
} = ee("bottom-navigation"), {
  n: Et
} = ee("bottom-navigation-item"), go = Et("--right-half-space"), yo = Et("--left-half-space"), bo = Et("--right-space"), Od = {
  type: "primary"
};
function Vd(e, n) {
  var r = ie("var-button");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.fixed, e.n("--fixed")], [e.border, e.n("--border")], [e.safeArea, e.n("--safe-area")])),
      ref: "bottomNavigationDom",
      style: X("z-index:" + e.zIndex)
    },
    [q(e.$slots, "default"), e.$slots.fab ? (b(), pe(
      r,
      Ee({
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
  render: Vd,
  name: "VarBottomNavigation",
  components: {
    VarButton: rn
  },
  props: Cd,
  setup(e, n) {
    var {
      slots: r
    } = n, a = M(null), t = W(() => e.active), i = W(() => e.activeColor), o = W(() => e.inactiveColor), l = M({}), {
      length: s,
      bottomNavigationItems: u,
      bindBottomNavigationItem: d
    } = kd(), v = () => {
      s.value === 0 || f() || c() || h();
    }, f = () => u.find((E) => {
      var {
        name: z
      } = E;
      return t.value === z.value;
    }), c = () => u.find((E) => {
      var {
        index: z
      } = E;
      return t.value === z.value;
    }), h = () => {
      !qe(t.value) || (t.value < 0 ? O(e["onUpdate:active"], 0) : t.value > s.value - 1 && O(e["onUpdate:active"], s.value - 1));
    }, g = (E) => {
      t.value !== E && (e.onBeforeChange ? w(E) : T(E));
    }, w = (E) => {
      var z = O(e.onBeforeChange, E);
      z = ye(z) ? z : [z], Promise.all(z).then((I) => {
        I.some((p) => !p) || T(E);
      });
    }, T = (E) => {
      O(e["onUpdate:active"], E), O(e.onChange, E);
    }, $ = () => {
      var E = P();
      E.forEach((z) => {
        z.classList.remove(go, yo, bo);
      });
    }, y = (E) => {
      var z = P(), I = z.length, p = E % 2 === 0;
      z.forEach((k, L) => {
        C(p, k, L, I);
      });
    }, C = (E, z, I, p) => {
      var k = I === p - 1;
      if (!E && k) {
        z.classList.add(bo);
        return;
      }
      var L = I === p / 2 - 1, Y = I === p / 2;
      L ? z.classList.add(go) : Y && z.classList.add(yo);
    }, P = () => Array.from(a.value.querySelectorAll("." + Et())), S = () => {
      O(e.onFabClick);
    }, B = {
      active: t,
      activeColor: i,
      inactiveColor: o,
      onToggle: g
    };
    return d(B), te(() => s.value, v), te(() => e.fabProps, (E) => {
      l.value = ti({}, Od, E);
    }, {
      immediate: !0,
      deep: !0
    }), Ue(() => {
      !r.fab || y(s.value);
    }), Li(() => {
      $(), r.fab && y(s.value);
    }), {
      n: $d,
      classes: Td,
      length: s,
      bottomNavigationDom: a,
      handleFabClick: S,
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
  onClick: F()
};
function Md() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Rl), {
    index: r
  } = hn(Ul);
  if (!e || !n || !r)
    throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");
  return {
    index: r,
    bottomNavigation: e,
    bindBottomNavigation: n
  };
}
var {
  n: Pd,
  classes: Id
} = ee("bottom-navigation-item"), Nd = {
  type: "danger",
  dot: !0
};
function Bd(e, n) {
  var r = ie("var-icon"), a = ie("var-badge"), t = Ke("ripple");
  return $e((b(), V(
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
    )) : Q("v-if", !0), q(e.$slots, "icon", {
      active: e.active === e.index || e.active === e.name
    }), e.badge ? (b(), pe(
      a,
      Ee({
        key: 1
      }, e.badgeProps, {
        class: e.n("badge"),
        "var-bottom-navigation-item-cover": ""
      }),
      null,
      16,
      ["class"]
    )) : Q("v-if", !0), D(
      "span",
      {
        class: m(e.n("label"))
      },
      [e.$slots.default ? Q("v-if", !0) : (b(), V(
        Ve,
        {
          key: 0
        },
        [ge(
          ne(e.label),
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
  render: Bd,
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
    var n = W(() => e.name), r = W(() => e.badge), a = M({}), {
      index: t,
      bottomNavigation: i,
      bindBottomNavigation: o
    } = Md(), {
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
    return o(d), te(() => r.value, (c) => {
      a.value = c === !0 ? Nd : r.value;
    }, {
      immediate: !0
    }), {
      n: Pd,
      classes: Id,
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
var Dd = {
  separator: {
    type: String
  },
  onClick: F()
}, Yl = Symbol("BREADCRUMBS_BIND_BREADCRUMB_KEY"), Fl = Symbol("BREADCRUMBS_COUNT_BREADCRUMB_KEY");
function Ad() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(Yl), {
    length: r
  } = pn(Fl);
  return {
    length: r,
    breadcrumbList: e,
    bindBreadcrumbList: n
  };
}
function zd() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Yl), {
    index: r
  } = hn(Fl);
  if (!e || !n || !r)
    throw Error("<var-breadcrumb/> must in <var-breadcrumbs/>");
  return {
    index: r,
    breadcrumb: e,
    bindBreadcrumb: n
  };
}
var {
  n: Ld,
  classes: Rd
} = ee("breadcrumb");
function Ud(e, n) {
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
      [q(e.$slots, "default")],
      2
    ), e.isLast ? Q("v-if", !0) : q(e.$slots, "separator", {
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
  render: Ud,
  name: "VarBreadcrumb",
  props: Dd,
  setup(e) {
    var {
      index: n,
      breadcrumb: r,
      bindBreadcrumb: a
    } = zd(), t = W(() => n.value === r.length.value - 1), i = W(() => r.separator.value), o = (l) => {
      t.value || O(e.onClick, l);
    };
    return a(null), {
      n: Ld,
      classes: Rd,
      isLast: t,
      parentSeparator: i,
      handleClick: o
    };
  }
});
Ur.install = function(e) {
  e.component(Ur.name, Ur);
};
var Yd = {
  separator: {
    type: String,
    default: "/"
  }
}, {
  n: Fd
} = ee("breadcrumbs");
function Wd(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Yr = _({
  render: Wd,
  name: "VarBreadcrumbs",
  props: Yd,
  setup(e) {
    var n = W(() => e.separator), {
      bindBreadcrumbList: r,
      length: a
    } = Ad(), t = {
      length: a,
      separator: n
    };
    return r(t), {
      n: Fd
    };
  }
});
Yr.install = function(e) {
  e.component(Yr.name, Yr);
};
function Hd(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var jd = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Hd,
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
  onClick: F(),
  "onUpdate:floating": F()
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
function So(e) {
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
var {
  n: Gd,
  classes: qd
} = ee("card"), Kd = 500, Xd = ["src", "alt"];
function Zd(e, n) {
  var r = ie("var-icon"), a = ie("var-button"), t = Ke("ripple");
  return $e((b(), V(
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
    [D(
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
      [q(e.$slots, "image", {}, () => [e.src ? (b(), V(
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
        Xd
      )) : Q("v-if", !0)]), D(
        "div",
        {
          class: m(e.n("container"))
        },
        [q(e.$slots, "title", {}, () => [e.title ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("title"))
          },
          ne(e.title),
          3
        )) : Q("v-if", !0)]), q(e.$slots, "subtitle", {}, () => [e.subtitle ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("subtitle"))
          },
          ne(e.subtitle),
          3
        )) : Q("v-if", !0)]), q(e.$slots, "description", {}, () => [e.description ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("description"))
          },
          ne(e.description),
          3
        )) : Q("v-if", !0)]), e.$slots.extra ? (b(), V(
          "div",
          {
            key: 0,
            class: m(e.n("footer"))
          },
          [q(e.$slots, "extra")],
          2
        )) : Q("v-if", !0), e.$slots["floating-content"] && !e.isRow ? (b(), V(
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
      ), e.showFloatingButtons ? (b(), V(
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
        [q(e.$slots, "close-button", {}, () => [re(
          a,
          {
            "var-card-cover": "",
            round: "",
            class: m(e.classes(e.n("close-button"), e.n("$-elevation--6"))),
            onClick: Dn(e.close, ["stop"])
          },
          {
            default: ce(() => [re(
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
    ), D(
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
const Fr = _({
  render: Zd,
  name: "VarCard",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarButton: rn
  },
  props: jd,
  setup(e) {
    var n = M(null), r = M(null), a = M("auto"), t = M("auto"), i = M("100%"), o = M("100%"), l = M("auto"), s = M("auto"), u = M(void 0), d = M("hidden"), v = M("0px"), f = M("0"), c = W(() => e.layout === "row"), h = M(!1), g = M(!1), {
      zIndex: w
    } = xa(() => e.floating, 1);
    Vt(() => e.floating, () => !c.value);
    var T = "auto", $ = "auto", y = null, C = M(null), P = /* @__PURE__ */ function() {
      var E = So(function* () {
        clearTimeout(C.value), clearTimeout(y), C.value = null, C.value = setTimeout(/* @__PURE__ */ So(function* () {
          var {
            width: z,
            height: I,
            left: p,
            top: k
          } = n.value.getBoundingClientRect();
          a.value = we(z), t.value = we(I), i.value = a.value, o.value = t.value, l.value = we(k), s.value = we(p), u.value = "fixed", T = l.value, $ = s.value, h.value = !0, yield Vn(), l.value = "0", s.value = "0", i.value = "100vw", o.value = "100vh", v.value = "auto", f.value = "1", d.value = "auto", g.value = !0;
        }), e.ripple ? Kd : 0);
      });
      return function() {
        return E.apply(this, arguments);
      };
    }(), S = () => {
      clearTimeout(y), clearTimeout(C.value), C.value = null, i.value = a.value, o.value = t.value, l.value = T, s.value = $, v.value = "0px", f.value = "0", h.value = !1, y = setTimeout(() => {
        a.value = "auto", t.value = "auto", i.value = "100%", o.value = "100%", l.value = "auto", s.value = "auto", T = "auto", $ = "auto", d.value = "hidden", u.value = void 0, g.value = !1;
      }, e.floatingDuration);
    }, B = () => {
      O(e["onUpdate:floating"], !1);
    };
    return te(() => e.floating, (E) => {
      c.value || Me(() => {
        E ? P() : S();
      });
    }, {
      immediate: !0
    }), {
      n: Gd,
      classes: qd,
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
      zIndex: w,
      isRow: c,
      close: B,
      showFloatingButtons: h,
      floated: g
    };
  }
});
Fr.install = function(e) {
  e.component(Fr.name, Fr);
};
var Jd = {
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
  n: Qd,
  classes: xd
} = ee("cell");
function _d(e, n) {
  var r = ie("var-icon");
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
      [q(e.$slots, "icon", {}, () => [re(
        r,
        {
          name: e.icon
        },
        null,
        8,
        ["name"]
      )])],
      2
    )) : Q("v-if", !0), D(
      "div",
      {
        class: m(e.n("content"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("title"), [e.titleClass, e.titleClass]))
        },
        [q(e.$slots, "default", {}, () => [ge(
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
        [q(e.$slots, "description", {}, () => [ge(
          ne(e.description),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    ), e.$slots.extra ? (b(), V(
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
  render: _d,
  name: "VarCell",
  components: {
    VarIcon: Oe
  },
  props: Jd,
  setup() {
    return {
      n: Qd,
      classes: xd
    };
  }
});
dr.install = function(e) {
  e.component(dr.name, dr);
};
var ev = {
  errorMessage: {
    type: String,
    default: ""
  },
  extraMessage: {
    type: String,
    default: ""
  }
}, {
  n: nv
} = ee("form-details"), rv = {
  key: 0
}, av = {
  key: 0
};
function tv(e, n) {
  return b(), pe(
    Re,
    {
      name: e.n()
    },
    {
      default: ce(() => [e.errorMessage || e.extraMessage ? (b(), V(
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
            Re,
            {
              name: e.n("message")
            },
            {
              default: ce(() => [e.errorMessage ? (b(), V(
                "div",
                rv,
                ne(e.errorMessage),
                1
              )) : Q("v-if", !0)]),
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
            Re,
            {
              name: e.n("message")
            },
            {
              default: ce(() => [e.extraMessage ? (b(), V(
                "div",
                av,
                ne(e.extraMessage),
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
  render: tv,
  name: "VarFormDetails",
  props: ev,
  setup: () => ({
    n: nv
  })
});
je.install = function(e) {
  e.component(je.name, je);
};
var iv = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Wl = Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"), Hl = Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");
function ov() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Wl), {
    length: r
  } = pn(Hl);
  return {
    length: r,
    checkboxes: n,
    bindCheckboxes: e
  };
}
function lv() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(Wl), {
    index: r
  } = hn(Hl);
  return {
    index: r,
    checkboxGroup: n,
    bindCheckboxGroup: e
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
var jl = Symbol("FORM_BIND_FORM_ITEM_KEY");
function yn() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(jl), r = Ba(), a = e ? (t) => {
    e(ii({}, t, {
      instance: r
    }));
  } : null;
  return {
    bindForm: a,
    form: n
  };
}
function sv() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(jl);
  return {
    formItems: n,
    bindFormItems: e
  };
}
var {
  n: uv,
  classes: dv
} = ee("checkbox");
function vv(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ke("ripple");
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
      [$e((b(), V(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.checkboxGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
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
        )]) : q(e.$slots, "unchecked-icon", {
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
        [q(e.$slots, "default")],
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
  render: vv,
  name: "VarCheckbox",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  props: iv,
  setup(e) {
    var n = M(!1), r = W(() => n.value === e.checkedValue), a = W(() => e.checkedValue), t = M(!1), {
      checkboxGroup: i,
      bindCheckboxGroup: o
    } = lv(), {
      form: l,
      bindForm: s
    } = yn(), {
      errorMessage: u,
      validateWithTrigger: d,
      validate: v,
      resetValidation: f
    } = gn(), c = (S) => {
      Me(() => {
        var {
          validateTrigger: B,
          rules: E,
          modelValue: z
        } = e;
        d(B, S, E, z);
      });
    }, h = (S) => {
      n.value = S;
      var {
        checkedValue: B,
        onChange: E
      } = e;
      O(e["onUpdate:modelValue"], n.value), O(E, n.value), c("onChange"), S === B ? i == null || i.onChecked(B) : i == null || i.onUnchecked(B);
    }, g = (S) => {
      var {
        disabled: B,
        readonly: E,
        checkedValue: z,
        uncheckedValue: I,
        onClick: p
      } = e;
      if (!(l != null && l.disabled.value || B) && (O(p, S), !(l != null && l.readonly.value || E))) {
        t.value = !0;
        var k = i ? i.checkedCount.value >= Number(i.max.value) : !1;
        !r.value && k || h(r.value ? I : z);
      }
    }, w = (S) => {
      var {
        checkedValue: B,
        uncheckedValue: E
      } = e;
      n.value = S.includes(B) ? B : E;
    }, T = () => {
      t.value = !1;
    }, $ = () => {
      O(e["onUpdate:modelValue"], e.uncheckedValue), f();
    }, y = (S) => {
      var {
        checkedValue: B,
        uncheckedValue: E
      } = e, z = ![B, E].includes(S);
      z && (S = r.value ? E : B), h(S);
    }, C = () => v(e.rules, e.modelValue);
    te(() => e.modelValue, (S) => {
      n.value = S;
    }, {
      immediate: !0
    });
    var P = {
      checkedValue: a,
      checked: r,
      sync: w,
      validate: C,
      resetValidation: f,
      reset: $,
      resetWithAnimation: T
    };
    return O(o, P), O(s, P), {
      withAnimation: t,
      checked: r,
      errorMessage: u,
      checkboxGroupErrorMessage: i == null ? void 0 : i.errorMessage,
      formDisabled: l == null ? void 0 : l.disabled,
      formReadonly: l == null ? void 0 : l.readonly,
      n: uv,
      classes: dv,
      handleClick: g,
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
function fv(e) {
  return ["horizontal", "vertical"].includes(e);
}
var cv = {
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
    validator: fv
  },
  validateTrigger: {
    type: Array,
    default: ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: mv,
  classes: pv
} = ee("checkbox-group");
function hv(e, n) {
  var r = ie("var-form-details");
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
      [q(e.$slots, "default")],
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
const Wr = _({
  render: hv,
  name: "VarCheckboxGroup",
  components: {
    VarFormDetails: je
  },
  props: cv,
  setup(e) {
    var n = W(() => e.max), r = W(() => e.modelValue.length), {
      length: a,
      checkboxes: t,
      bindCheckboxes: i
    } = ov(), {
      bindForm: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = W(() => l.value), f = (B) => {
      Me(() => {
        var {
          validateTrigger: E,
          rules: z,
          modelValue: I
        } = e;
        s(E, B, z, I);
      });
    }, c = (B) => {
      O(e["onUpdate:modelValue"], B), O(e.onChange, B), f("onChange");
    }, h = (B) => {
      var {
        modelValue: E
      } = e;
      E.includes(B) || c([...E, B]);
    }, g = (B) => {
      var {
        modelValue: E
      } = e;
      !E.includes(B) || c(E.filter((z) => z !== B));
    }, w = () => t.forEach((B) => {
      var {
        sync: E
      } = B;
      return E(e.modelValue);
    }), T = () => {
      t.forEach((B) => B.resetWithAnimation());
    }, $ = () => {
      var B = t.map((z) => {
        var {
          checkedValue: I
        } = z;
        return I.value;
      }), E = oo(B);
      return T(), O(e["onUpdate:modelValue"], E), E;
    }, y = () => {
      var B = t.filter((z) => {
        var {
          checked: I
        } = z;
        return !I.value;
      }).map((z) => {
        var {
          checkedValue: I
        } = z;
        return I.value;
      }), E = oo(B);
      return T(), O(e["onUpdate:modelValue"], E), E;
    }, C = () => {
      O(e["onUpdate:modelValue"], []), d();
    }, P = () => u(e.rules, e.modelValue);
    te(() => e.modelValue, w, {
      deep: !0
    }), te(() => a.value, w);
    var S = {
      max: n,
      checkedCount: r,
      onChecked: h,
      onUnchecked: g,
      validate: P,
      resetValidation: d,
      reset: C,
      errorMessage: v
    };
    return i(S), O(o, S), {
      errorMessage: l,
      n: mv,
      classes: pv,
      checkAll: $,
      inverseAll: y,
      reset: C,
      validate: P,
      resetValidation: d
    };
  }
});
Wr.install = function(e) {
  e.component(Wr.name, Wr);
};
function gv(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function yv(e) {
  return ["normal", "mini", "small", "large"].includes(e);
}
var bv = {
  type: {
    type: String,
    default: "default",
    validator: gv
  },
  size: {
    type: String,
    default: "normal",
    validator: yv
  },
  color: {
    type: String
  },
  textColor: {
    type: String
  },
  iconName: Ge(Bl, "name"),
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
  onClose: F()
}, {
  n: Ln,
  classes: wv
} = ee("chip");
function Sv(e, n) {
  var r = ie("var-icon");
  return b(), pe(
    Re,
    {
      name: e.n("$-fade")
    },
    {
      default: ce(() => [D(
        "span",
        Ee({
          class: e.classes(e.n(), e.n("$--box"), ...e.contentClass),
          style: e.chipStyles
        }, e.$attrs),
        [q(e.$slots, "left"), D(
          "span",
          {
            class: m(e.n("text-" + e.size))
          },
          [q(e.$slots, "default")],
          2
        ), q(e.$slots, "right"), e.closable ? (b(), V(
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
  render: Sv,
  name: "VarChip",
  components: {
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: bv,
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
      classes: wv,
      chipStyles: n,
      contentClass: r
    };
  }
});
fr.install = function(e) {
  e.component(fr.name, fr);
};
function Cv(e) {
  return ["row", "column"].includes(e);
}
var kv = {
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
    validator: Cv
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
  onClick: F()
}, Gl = Symbol("ROW_BIND_COL_KEY"), ql = Symbol("ROW_COUNT_COL_KEY");
function $v() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Gl), {
    length: r
  } = pn(ql);
  return {
    length: r,
    cols: n,
    bindCols: e
  };
}
function Tv() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Gl), {
    index: r
  } = hn(ql);
  return (!e || !n || !r) && console.warn("col must in row"), {
    index: r,
    row: e,
    bindRow: n
  };
}
var {
  n: rt,
  classes: Ov
} = ee("col");
function Vv(e, n) {
  return b(), V(
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
const Hr = _({
  render: Vv,
  name: "VarCol",
  props: kv,
  setup(e) {
    var n = M({
      left: 0,
      right: 0
    }), r = W(() => A(e.span)), a = W(() => A(e.offset)), {
      row: t,
      bindRow: i
    } = Tv(), o = {
      setPadding(s) {
        n.value = s;
      }
    }, l = (s, u) => {
      var d = [];
      if (u == null)
        return d;
      if (Ri(u)) {
        var {
          offset: v,
          span: f
        } = u;
        Number(f) >= 0 && d.push(rt("--span-" + s + "-" + f)), v && d.push(rt("--offset-" + s + "-" + v));
      } else
        Number(u) >= 0 && d.push(rt("--span-" + s + "-" + u));
      return d;
    };
    return te([() => e.span, () => e.offset], () => {
      t == null || t.computePadding();
    }), O(i, o), {
      n: rt,
      classes: Ov,
      padding: n,
      toNumber: A,
      toSizeUnit: we,
      getSize: l,
      span: r,
      offset: a
    };
  }
});
Hr.install = function(e) {
  e.component(Hr.name, Hr);
};
var Kl = Symbol("COLLAPSE_BIND_COLLAPSE_ITEM_KEY"), Xl = Symbol("COLLAPSE_COUNT_COLLAPSE_ITEM_KEY");
function Ev() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Kl), {
    length: r
  } = pn(Xl);
  return {
    length: r,
    collapseItem: n,
    bindCollapseItem: e
  };
}
var Mv = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Pv
} = ee("collapse");
function Iv(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const jr = _({
  render: Iv,
  name: "VarCollapse",
  props: Mv,
  setup(e) {
    var {
      length: n,
      collapseItem: r,
      bindCollapseItem: a
    } = Ev(), t = W(() => e.modelValue), i = W(() => e.offset), o = () => !e.accordion && !ye(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be an Array'), !1) : e.accordion && ye(e.modelValue) ? (console.error('[Varlet] Collapse: type of prop "modelValue" should be a String or Number'), !1) : !0, l = (c, h) => o() ? h ? e.accordion ? c : [...e.modelValue, c] : e.accordion ? null : e.modelValue.filter((g) => g !== c) : null, s = (c, h) => {
      var g = l(c, h);
      O(e["onUpdate:modelValue"], g), O(e.onChange, g);
    }, u = () => {
      if (e.accordion)
        return r.find((h) => {
          var {
            name: g
          } = h;
          return e.modelValue === g.value;
        });
      var c = r.filter((h) => {
        var {
          name: g
        } = h;
        return g.value === void 0 ? !1 : e.modelValue.includes(g.value);
      });
      return c.length ? c : void 0;
    }, d = () => e.accordion ? r.find((c) => {
      var {
        index: h,
        name: g
      } = c;
      return g.value === void 0 ? e.modelValue === h.value : !1;
    }) : r.filter((c) => {
      var {
        index: h,
        name: g
      } = c;
      return g.value === void 0 ? e.modelValue.includes(h.value) : !1;
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
          var g = e.accordion ? c === h : c.includes(h);
          h.init(e.accordion, g);
        });
      }
    }, f = {
      active: t,
      offset: i,
      updateItem: s
    };
    return a(f), te(() => n.value, () => Me().then(v)), te(() => e.modelValue, () => Me().then(v)), {
      n: Pv
    };
  }
});
jr.install = function(e) {
  e.component(jr.name, jr);
};
function Nv() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Kl), {
    index: r
  } = hn(Xl);
  if (!e || !n || !r)
    throw Error("[Varlet] Collapse: <var-collapse-item/> must in <var-collapse>");
  return {
    index: r,
    collapse: e,
    bindCollapse: n
  };
}
var Bv = {
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
  n: Dv,
  classes: Av
} = ee("collapse-item");
function zv(e, n) {
  var r = ie("var-icon");
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
        [q(e.$slots, "title", {}, () => [ge(
          ne(e.title),
          1
        )])],
        2
      ), D(
        "div",
        {
          class: m(e.n("header-icon"))
        },
        [q(e.$slots, "icon", {}, () => [re(
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
    ), $e(D(
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
        [q(e.$slots, "default")],
        2
      )],
      34
    ), [[Ja, e.show]])],
    2
  );
}
const Gr = _({
  render: zv,
  name: "VarCollapseItem",
  components: {
    VarIcon: Oe
  },
  props: Bv,
  setup(e) {
    var {
      index: n,
      collapse: r,
      bindCollapse: a
    } = Nv(), t = !0, i = M(null), o = M(!1), l = M(!1), {
      active: s,
      offset: u,
      updateItem: d
    } = r, v = W(() => e.name), f = (y, C) => {
      s.value === void 0 || y && ye(s.value) || C === l.value || (l.value = C, c(!0));
    }, c = (y) => {
      e.disabled || y || d(e.name || n.value, !l.value);
    }, h = () => {
      !i.value || (i.value.style.height = "", o.value = !0, Me(() => {
        var {
          offsetHeight: y
        } = i.value;
        i.value.style.height = 0 + "px", $n(() => {
          i.value.style.height = y + "px", t && Ot(() => {
            t && T();
          });
        });
      }));
    }, g = () => {
      t = !1;
    }, w = () => {
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
    return a($), te(l, (y) => {
      y ? h() : w();
    }), {
      n: Dv,
      start: g,
      classes: Av,
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
var Lv = {
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
  onEnd: F(),
  onChange: F()
}, {
  n: Rv
} = ee("countdown"), oi = 1e3, li = 60 * oi, si = 60 * li, Co = 24 * si;
function Uv(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default", wl(nu(e.timeData)), () => [ge(
      ne(e.showTime),
      1
    )])],
    2
  );
}
const qr = _({
  render: Uv,
  name: "VarCountdown",
  props: Lv,
  setup(e) {
    var n = M(0), r = M(!1), a = M(""), t = M(0), i = M(0), o = M({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0
    }), l = (c, h) => {
      var g = Object.values(h), w = ["DD", "HH", "mm", "ss"], T = [24, 60, 60, 1e3];
      if (w.forEach((y, C) => {
        c.includes(y) ? c = c.replace(y, yr("" + g[C], 2, "0")) : g[C + 1] += g[C] * T[C];
      }), c.includes("S")) {
        var $ = yr("" + g[g.length - 1], 3, "0");
        c.includes("SSS") ? c = c.replace("SSS", $) : c.includes("SS") ? c = c.replace("SS", $.slice(0, 2)) : c = c.replace("S", $.slice(0, 1));
      }
      return c;
    }, s = (c) => {
      var h = Math.floor(c / Co), g = Math.floor(c % Co / si), w = Math.floor(c % si / li), T = Math.floor(c % li / oi), $ = Math.floor(c % oi), y = {
        days: h,
        hours: g,
        minutes: w,
        seconds: T,
        milliseconds: $
      };
      o.value = y, O(e.onChange, o.value), a.value = l(e.format, y);
    }, u = () => {
      var {
        time: c,
        onEnd: h,
        autoStart: g
      } = e, w = Date.now();
      n.value || (n.value = w + A(c));
      var T = n.value - w;
      if (T < 0 && (T = 0), i.value = T, s(T), T === 0) {
        O(h);
        return;
      }
      (g || r.value) && (t.value = $n(u));
    }, d = () => {
      r.value || (r.value = !0, n.value = Date.now() + (i.value || A(e.time)), u());
    }, v = () => {
      r.value = !1;
    }, f = () => {
      n.value = 0, r.value = !1, bu(t.value), u();
    };
    return te(() => e.time, () => f(), {
      immediate: !0
    }), {
      showTime: a,
      timeData: o,
      n: Rv,
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
var Mr = 9e15, ir = 1e9, ui = "0123456789abcdef", pt = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", ht = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", di = {
  precision: 20,
  rounding: 4,
  modulo: 1,
  toExpNeg: -7,
  toExpPos: 21,
  minE: -Mr,
  maxE: Mr,
  crypto: !1
}, Zl, In, fe = !0, Mt = "[DecimalError] ", nr = Mt + "Invalid argument: ", Jl = Mt + "Precision limit exceeded", Ql = Mt + "crypto unavailable", xl = "[object Decimal]", Ze = Math.floor, Le = Math.pow, Yv = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i, Fv = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i, Wv = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i, _l = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, kn = 1e7, de = 7, Hv = 9007199254740991, jv = pt.length - 1, vi = ht.length - 1, K = { toStringTag: xl };
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
  return r.d ? r.d[0] ? (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Gv(a, ts(a, r)), a.precision = e, a.rounding = n, ue(In == 2 || In == 3 ? r.neg() : r, e, n, !0)) : new a(1) : new a(NaN);
};
K.cubeRoot = K.cbrt = function() {
  var e, n, r, a, t, i, o, l, s, u, d = this, v = d.constructor;
  if (!d.isFinite() || d.isZero())
    return new v(d);
  for (fe = !1, i = d.s * Le(d.s * d, 1 / 3), !i || Math.abs(i) == 1 / 0 ? (r = He(d.d), e = d.e, (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"), i = Le(r, 1 / 3), e = Ze((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), i == 1 / 0 ? r = "5e" + e : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), a = new v(r), a.s = d.s) : a = new v(i.toString()), o = (e = v.precision) + 3; ; )
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
    if (e = n.length - 1, r = (e - Ze(this.e / de)) * de, e = n[e], e)
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
  r = o.precision, a = o.rounding, o.precision = r + Math.max(i.e, i.sd()) + 4, o.rounding = 1, t = i.d.length, t < 32 ? (e = Math.ceil(t / 3), n = (1 / It(4, e)).toString()) : (e = 16, n = "2.3283064365386962890625e-10"), i = Va(o, 1, i.times(n), new o(1), !0);
  for (var s, u = e, d = new o(8); u--; )
    s = i.times(i), i = l.minus(s.times(d.minus(s.times(d))));
  return ue(i, o.precision = r, o.rounding = a, !0);
};
K.hyperbolicSine = K.sinh = function() {
  var e, n, r, a, t = this, i = t.constructor;
  if (!t.isFinite() || t.isZero())
    return new i(t);
  if (n = i.precision, r = i.rounding, i.precision = n + Math.max(t.e, t.sd()) + 4, i.rounding = 1, a = t.d.length, a < 3)
    t = Va(i, 2, t, t, !0);
  else {
    e = 1.4 * Math.sqrt(a), e = e > 16 ? 16 : e | 0, t = t.times(1 / It(5, e)), t = Va(i, 2, t, t, !0);
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
  return a !== -1 ? a === 0 ? n.isNeg() ? Sn(r, t, i) : new r(0) : new r(NaN) : n.isZero() ? Sn(r, t + 4, i).times(0.5) : (r.precision = t + 6, r.rounding = 1, n = n.asin(), e = Sn(r, t + 4, i).times(0.5), r.precision = t, r.rounding = i, e.minus(n));
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
  return t.isZero() ? new i(t) : (n = t.abs().cmp(1), r = i.precision, a = i.rounding, n !== -1 ? n === 0 ? (e = Sn(i, r + 4, a).times(0.5), e.s = t.s, e) : new i(NaN) : (i.precision = r + 6, i.rounding = 1, t = t.div(new i(1).minus(t.times(t)).sqrt().plus(1)).atan(), i.precision = r, i.rounding = a, t.times(2)));
};
K.inverseTangent = K.atan = function() {
  var e, n, r, a, t, i, o, l, s, u = this, d = u.constructor, v = d.precision, f = d.rounding;
  if (u.isFinite()) {
    if (u.isZero())
      return new d(u);
    if (u.abs().eq(1) && v + 4 <= vi)
      return o = Sn(d, v + 4, f).times(0.25), o.s = u.s, o;
  } else {
    if (!u.s)
      return new d(NaN);
    if (v + 4 <= vi)
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
K.isFinite = function() {
  return !!this.d;
};
K.isInteger = K.isInt = function() {
  return !!this.d && Ze(this.e / de) > this.d.length - 2;
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
  if (fe = !1, l = v + c, o = Kn(u, l), a = n ? gt(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), Ha(s.d, t = v, f))
    do
      if (l += 10, o = Kn(u, l), a = n ? gt(d, l + 10) : Kn(e, l), s = Te(o, a, l, 1), !i) {
        +He(s.d).slice(t + 1, t + 15) + 1 == 1e14 && (s = ue(s, v + 1, 0));
        break;
      }
    while (Ha(s.d, t += 10, f));
  return fe = !0, ue(s, v, f);
};
K.minus = K.sub = function(e) {
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
  if (r = Ze(e.e / de), d = Ze(c.e / de), u = u.slice(), i = d - r, i) {
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
  return u[0] ? (e.d = u, e.e = Pt(u, r), fe ? ue(e, l, s) : e) : new h(s === 3 ? -0 : 0);
};
K.modulo = K.mod = function(e) {
  var n, r = this, a = r.constructor;
  return e = new a(e), !r.d || !e.s || e.d && !e.d[0] ? new a(NaN) : !e.d || r.d && !r.d[0] ? ue(new a(r), a.precision, a.rounding) : (fe = !1, a.modulo == 9 ? (n = Te(r, e.abs(), 0, 3, 1), n.s *= e.s) : n = Te(r, e, 0, a.modulo, 1), n = n.times(e), fe = !0, r.minus(n));
};
K.naturalExponential = K.exp = function() {
  return fi(this);
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
  if (i = Ze(v.e / de), a = Ze(e.e / de), u = u.slice(), t = i - a, t) {
    for (t < 0 ? (r = u, t = -t, o = d.length) : (r = d, a = i, o = u.length), i = Math.ceil(l / de), o = i > o ? i + 1 : o + 1, t > o && (t = o, r.length = 1), r.reverse(); t--; )
      r.push(0);
    r.reverse();
  }
  for (o = u.length, t = d.length, o - t < 0 && (t = o, r = d, d = u, u = r), n = 0; t; )
    n = (u[--t] = u[t] + d[t] + n) / kn | 0, u[t] %= kn;
  for (n && (u.unshift(n), ++a), o = u.length; u[--o] == 0; )
    u.pop();
  return e.d = u, e.e = Pt(u, a), fe ? ue(e, l, s) : e;
};
K.precision = K.sd = function(e) {
  var n, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
    throw Error(nr + e);
  return r.d ? (n = es(r.d), e && r.e + 1 > n && (n = r.e + 1)) : n = NaN, n;
};
K.round = function() {
  var e = this, n = e.constructor;
  return ue(new n(e), e.e + 1, n.rounding);
};
K.sine = K.sin = function() {
  var e, n, r = this, a = r.constructor;
  return r.isFinite() ? r.isZero() ? new a(r) : (e = a.precision, n = a.rounding, a.precision = e + Math.max(r.e, r.sd()) + de, a.rounding = 1, r = Kv(a, ts(a, r)), a.precision = e, a.rounding = n, ue(In > 2 ? r.neg() : r, e, n, !0)) : new a(NaN);
};
K.squareRoot = K.sqrt = function() {
  var e, n, r, a, t, i, o = this, l = o.d, s = o.e, u = o.s, d = o.constructor;
  if (u !== 1 || !l || !l[0])
    return new d(!u || u < 0 && (!l || l[0]) ? NaN : l ? o : 1 / 0);
  for (fe = !1, u = Math.sqrt(+o), u == 0 || u == 1 / 0 ? (n = He(l), (n.length + s) % 2 == 0 && (n += "0"), u = Math.sqrt(n), s = Ze((s + 1) / 2) - (s < 0 || s % 2), u == 1 / 0 ? n = "5e" + s : (n = u.toExponential(), n = n.slice(0, n.indexOf("e") + 1) + s), a = new d(n)) : a = new d(u.toString()), r = (s = d.precision) + 3; ; )
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
  for (r = Ze(d.e / de) + Ze(e.e / de), s = f.length, u = c.length, s < u && (i = f, f = c, c = i, o = s, s = u, u = o), i = [], o = s + u, a = o; a--; )
    i.push(0);
  for (a = u; --a >= 0; ) {
    for (n = 0, t = s + a; t > a; )
      l = i[t] + c[a] * f[t - a - 1] + n, i[t--] = l % kn | 0, n = l / kn | 0;
    i[t] = (i[t] + n) % kn | 0;
  }
  for (; !i[--o]; )
    i.pop();
  return n ? ++r : i.shift(), e.d = i, e.e = Pt(i, r), fe ? ue(e, v.precision, v.rounding) : e;
};
K.toBinary = function(e, n) {
  return Hi(this, 2, e, n);
};
K.toDecimalPlaces = K.toDP = function(e, n) {
  var r = this, a = r.constructor;
  return r = new a(r), e === void 0 ? r : (an(e, 0, ir), n === void 0 ? n = a.rounding : an(n, 0, 8), ue(r, e + r.e + 1, n));
};
K.toExponential = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, !0) : (an(e, 0, ir), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e + 1, n), r = En(a, !0, e + 1)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toFixed = function(e, n) {
  var r, a, t = this, i = t.constructor;
  return e === void 0 ? r = En(t) : (an(e, 0, ir), n === void 0 ? n = i.rounding : an(n, 0, 8), a = ue(new i(t), e + t.e + 1, n), r = En(a, !1, e + a.e + 1)), t.isNeg() && !t.isZero() ? "-" + r : r;
};
K.toFraction = function(e) {
  var n, r, a, t, i, o, l, s, u, d, v, f, c = this, h = c.d, g = c.constructor;
  if (!h)
    return new g(c);
  if (u = r = new g(1), a = s = new g(0), n = new g(a), i = n.e = es(h) - c.e - 1, o = i % de, n.d[0] = Le(10, o < 0 ? de + o : o), e == null)
    e = i > 0 ? n : u;
  else {
    if (l = new g(e), !l.isInt() || l.lt(u))
      throw Error(nr + l);
    e = l.gt(n) ? i > 0 ? n : u : l;
  }
  for (fe = !1, l = new g(He(h)), d = g.precision, g.precision = i = h.length * de * 2; v = Te(l, n, 0, 1, 1), t = r.plus(v.times(a)), t.cmp(e) != 1; )
    r = a, a = t, t = u, u = s.plus(v.times(t)), s = t, t = n, n = l.minus(v.times(t)), l = t;
  return t = Te(e.minus(r), a, 0, 1, 1), s = s.plus(t.times(u)), r = r.plus(t.times(a)), s.s = u.s = c.s, f = Te(u, a, i, 1).minus(c).abs().cmp(Te(s, r, i, 1).minus(c).abs()) < 1 ? [u, a] : [s, r], g.precision = d, fe = !0, f;
};
K.toHexadecimal = K.toHex = function(e, n) {
  return Hi(this, 16, e, n);
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
  return Hi(this, 8, e, n);
};
K.toPower = K.pow = function(e) {
  var n, r, a, t, i, o, l = this, s = l.constructor, u = +(e = new s(e));
  if (!l.d || !e.d || !l.d[0] || !e.d[0])
    return new s(Le(+l, u));
  if (l = new s(l), l.eq(1))
    return l;
  if (a = s.precision, i = s.rounding, e.eq(1))
    return ue(l, a, i);
  if (n = Ze(e.e / de), n >= e.d.length - 1 && (r = u < 0 ? -u : u) <= Hv)
    return t = ns(s, l, r, a), e.s < 0 ? new s(1).div(t) : ue(t, a, i);
  if (o = l.s, o < 0) {
    if (n < e.d.length - 1)
      return new s(NaN);
    if ((e.d[n] & 1) == 0 && (o = 1), l.e == 0 && l.d[0] == 1 && l.d.length == 1)
      return l.s = o, l;
  }
  return r = Le(+l, u), n = r == 0 || !isFinite(r) ? Ze(u * (Math.log("0." + He(l.d)) / Math.LN10 + l.e + 1)) : new s(r + "").e, n > s.maxE + 1 || n < s.minE - 1 ? new s(n > 0 ? o / 0 : 0) : (fe = !1, s.rounding = l.s = 1, r = Math.min(12, (n + "").length), t = fi(e.times(Kn(l, a + r)), a), t.d && (t = ue(t, a + 5, 1), Ha(t.d, a, i) && (n = a + 10, t = ue(fi(e.times(Kn(l, n + r)), n), n + 5, 1), +He(t.d).slice(a + 1, a + 15) + 1 == 1e14 && (t = ue(t, a + 1, 0)))), t.s = o, fe = !0, s.rounding = i, ue(t, a, i));
};
K.toPrecision = function(e, n) {
  var r, a = this, t = a.constructor;
  return e === void 0 ? r = En(a, a.e <= t.toExpNeg || a.e >= t.toExpPos) : (an(e, 1, ir), n === void 0 ? n = t.rounding : an(n, 0, 8), a = ue(new t(a), e, n), r = En(a, e <= a.e || a.e <= t.toExpNeg, e)), a.isNeg() && !a.isZero() ? "-" + r : r;
};
K.toSignificantDigits = K.toSD = function(e, n) {
  var r = this, a = r.constructor;
  return e === void 0 ? (e = a.precision, n = a.rounding) : (an(e, 1, ir), n === void 0 ? n = a.rounding : an(n, 0, 8)), ue(new a(r), e, n);
};
K.toString = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
K.truncated = K.trunc = function() {
  return ue(new this.constructor(this), this.e + 1, 1);
};
K.valueOf = K.toJSON = function() {
  var e = this, n = e.constructor, r = En(e, e.e <= n.toExpNeg || e.e >= n.toExpPos);
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
function Ha(e, n, r, a) {
  var t, i, o, l;
  for (i = e[0]; i >= 10; i /= 10)
    --n;
  return --n < 0 ? (n += de, t = 0) : (t = Math.ceil((n + 1) / de), n %= de), i = Le(10, de - n), l = e[t] % i | 0, a == null ? n < 3 ? (n == 0 ? l = l / 100 | 0 : n == 1 && (l = l / 10 | 0), o = r < 4 && l == 99999 || r > 3 && l == 49999 || l == 5e4 || l == 0) : o = (r < 4 && l + 1 == i || r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 100 | 0) == Le(10, n - 2) - 1 || (l == i / 2 || l == 0) && (e[t + 1] / i / 100 | 0) == 0 : n < 4 ? (n == 0 ? l = l / 1e3 | 0 : n == 1 ? l = l / 100 | 0 : n == 2 && (l = l / 10 | 0), o = (a || r < 4) && l == 9999 || !a && r > 3 && l == 4999) : o = ((a || r < 4) && l + 1 == i || !a && r > 3 && l + 1 == i / 2) && (e[t + 1] / i / 1e3 | 0) == Le(10, n - 3) - 1, o;
}
function st(e, n, r) {
  for (var a, t = [0], i, o = 0, l = e.length; o < l; ) {
    for (i = t.length; i--; )
      t[i] *= n;
    for (t[0] += ui.indexOf(e.charAt(o++)), a = 0; a < t.length; a++)
      t[a] > r - 1 && (t[a + 1] === void 0 && (t[a + 1] = 0), t[a + 1] += t[a] / r | 0, t[a] %= r);
  }
  return t.reverse();
}
function Gv(e, n) {
  var r, a, t;
  if (n.isZero())
    return n;
  a = n.d.length, a < 32 ? (r = Math.ceil(a / 3), t = (1 / It(4, r)).toString()) : (r = 16, t = "2.3283064365386962890625e-10"), e.precision += r, n = Va(e, 1, n.times(t), new e(1));
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
    var u, d, v, f, c, h, g, w, T, $, y, C, P, S, B, E, z, I, p, k, L = a.constructor, Y = a.s == t.s ? 1 : -1, G = a.d, R = t.d;
    if (!G || !G[0] || !R || !R[0])
      return new L(
        !a.s || !t.s || (G ? R && G[0] == R[0] : !R) ? NaN : G && G[0] == 0 || !R ? Y * 0 : Y / 0
      );
    for (s ? (c = 1, d = a.e - t.e) : (s = kn, c = de, d = Ze(a.e / c) - Ze(t.e / c)), p = R.length, z = G.length, T = new L(Y), $ = T.d = [], v = 0; R[v] == (G[v] || 0); v++)
      ;
    if (R[v] > (G[v] || 0) && d--, i == null ? (S = i = L.precision, o = L.rounding) : l ? S = i + (a.e - t.e) + 1 : S = i, S < 0)
      $.push(1), h = !0;
    else {
      if (S = S / c + 2 | 0, v = 0, p == 1) {
        for (f = 0, R = R[0], S++; (v < z || f) && S--; v++)
          B = f * s + (G[v] || 0), $[v] = B / R | 0, f = B % R | 0;
        h = f || v < z;
      } else {
        for (f = s / (R[0] + 1) | 0, f > 1 && (R = e(R, f, s), G = e(G, f, s), p = R.length, z = G.length), E = p, y = G.slice(0, p), C = y.length; C < p; )
          y[C++] = 0;
        k = R.slice(), k.unshift(0), I = R[0], R[1] >= s / 2 && ++I;
        do
          f = 0, u = n(R, y, p, C), u < 0 ? (P = y[0], p != C && (P = P * s + (y[1] || 0)), f = P / I | 0, f > 1 ? (f >= s && (f = s - 1), g = e(R, f, s), w = g.length, C = y.length, u = n(g, y, w, C), u == 1 && (f--, r(g, p < w ? k : R, w, s))) : (f == 0 && (u = f = 1), g = R.slice()), w = g.length, w < C && g.unshift(0), r(y, g, C, s), u == -1 && (C = y.length, u = n(R, y, p, C), u < 1 && (f++, r(y, p < C ? k : R, C, s))), C = y.length) : u === 0 && (f++, y = [0]), $[v++] = f, u && y[0] ? y[C++] = G[E] || 0 : (y = [G[E]], C = 1);
        while ((E++ < z || y[0] !== void 0) && S--);
        h = y[0] !== void 0;
      }
      $[0] || $.shift();
    }
    if (c == 1)
      T.e = d, Zl = h;
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
function En(e, n, r) {
  if (!e.isFinite())
    return as(e);
  var a, t = e.e, i = He(e.d), o = i.length;
  return n ? (r && (a = r - o) > 0 ? i = i.charAt(0) + "." + i.slice(1) + Un(a) : o > 1 && (i = i.charAt(0) + "." + i.slice(1)), i = i + (e.e < 0 ? "e" : "e+") + e.e) : t < 0 ? (i = "0." + Un(-t - 1) + i, r && (a = r - o) > 0 && (i += Un(a))) : t >= o ? (i += Un(t + 1 - o), r && (a = r - t - 1) > 0 && (i = i + "." + Un(a))) : ((a = t + 1) < o && (i = i.slice(0, a) + "." + i.slice(a)), r && (a = r - o) > 0 && (t + 1 === o && (i += "."), i += Un(a))), i;
}
function Pt(e, n) {
  var r = e[0];
  for (n *= de; r >= 10; r /= 10)
    n++;
  return n;
}
function gt(e, n, r) {
  if (n > jv)
    throw fe = !0, r && (e.precision = r), Error(Jl);
  return ue(new e(pt), n, 1, !0);
}
function Sn(e, n, r) {
  if (n > vi)
    throw Error(Jl);
  return ue(new e(ht), n, r, !0);
}
function es(e) {
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
function ns(e, n, r, a) {
  var t, i = new e(1), o = Math.ceil(a / de + 4);
  for (fe = !1; ; ) {
    if (r % 2 && (i = i.times(n), $o(i.d, o) && (t = !0)), r = Ze(r / 2), r === 0) {
      r = i.d.length - 1, t && i.d[r] === 0 && ++i.d[r];
      break;
    }
    n = n.times(n), $o(n.d, o);
  }
  return fe = !0, i;
}
function ko(e) {
  return e.d[e.d.length - 1] & 1;
}
function rs(e, n, r) {
  for (var a, t = new e(n[0]), i = 0; ++i < n.length; )
    if (a = new e(n[i]), a.s)
      t[r](a) && (t = a);
    else {
      t = a;
      break;
    }
  return t;
}
function fi(e, n) {
  var r, a, t, i, o, l, s, u = 0, d = 0, v = 0, f = e.constructor, c = f.rounding, h = f.precision;
  if (!e.d || !e.d[0] || e.e > 17)
    return new f(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0);
  for (n == null ? (fe = !1, s = h) : s = n, l = new f(0.03125); e.e > -2; )
    e = e.times(l), v += 5;
  for (a = Math.log(Le(2, v)) / Math.LN10 * 2 + 5 | 0, s += a, r = i = o = new f(1), f.precision = s; ; ) {
    if (i = ue(i.times(e), s, 1), r = r.times(++d), l = o.plus(Te(i, r, s, 1)), He(l.d).slice(0, s) === He(o.d).slice(0, s)) {
      for (t = v; t--; )
        o = ue(o.times(o), s, 1);
      if (n == null)
        if (u < 3 && Ha(o.d, s - a, c, u))
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
  var r, a, t, i, o, l, s, u, d, v, f, c = 1, h = 10, g = e, w = g.d, T = g.constructor, $ = T.rounding, y = T.precision;
  if (g.s < 0 || !w || !w[0] || !g.e && w[0] == 1 && w.length == 1)
    return new T(w && !w[0] ? -1 / 0 : g.s != 1 ? NaN : w ? 0 : g);
  if (n == null ? (fe = !1, d = y) : d = n, T.precision = d += h, r = He(w), a = r.charAt(0), Math.abs(i = g.e) < 15e14) {
    for (; a < 7 && a != 1 || a == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = He(g.d), a = r.charAt(0), c++;
    i = g.e, a > 1 ? (g = new T("0." + r), i++) : g = new T(a + "." + r.slice(1));
  } else
    return u = gt(T, d + 2, y).times(i + ""), g = Kn(new T(a + "." + r.slice(1)), d - h).plus(u), T.precision = y, n == null ? ue(g, y, $, fe = !0) : g;
  for (v = g, s = o = g = Te(g.minus(1), g.plus(1), d, 1), f = ue(g.times(g), d, 1), t = 3; ; ) {
    if (o = ue(o.times(f), d, 1), u = s.plus(Te(o, new T(t), d, 1)), He(u.d).slice(0, d) === He(s.d).slice(0, d))
      if (s = s.times(2), i !== 0 && (s = s.plus(gt(T, d + 2, y).times(i + ""))), s = Te(s, new T(c), d, 1), n == null)
        if (Ha(s.d, d - h, $, l))
          T.precision = d += h, u = o = g = Te(v.minus(1), v.plus(1), d, 1), f = ue(g.times(g), d, 1), t = l = 1;
        else
          return ue(s, T.precision = y, $, fe = !0);
      else
        return T.precision = y, s;
    s = u, t += 2;
  }
}
function as(e) {
  return String(e.s * e.s / 0);
}
function ci(e, n) {
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
function qv(e, n) {
  var r, a, t, i, o, l, s, u, d;
  if (n.indexOf("_") > -1) {
    if (n = n.replace(/(\d)_(?=\d)/g, "$1"), _l.test(n))
      return ci(e, n);
  } else if (n === "Infinity" || n === "NaN")
    return +n || (e.s = NaN), e.e = NaN, e.d = null, e;
  if (Fv.test(n))
    r = 16, n = n.toLowerCase();
  else if (Yv.test(n))
    r = 2;
  else if (Wv.test(n))
    r = 8;
  else
    throw Error(nr + n);
  for (i = n.search(/p/i), i > 0 ? (s = +n.slice(i + 1), n = n.substring(2, i)) : n = n.slice(2), i = n.indexOf("."), o = i >= 0, a = e.constructor, o && (n = n.replace(".", ""), l = n.length, i = l - i, t = ns(a, new a(r), i, i * 2)), u = st(n, r, kn), d = u.length - 1, i = d; u[i] === 0; --i)
    u.pop();
  return i < 0 ? new a(e.s * 0) : (e.e = Pt(u, d), e.d = u, fe = !1, o && (e = Te(e, t, l * 4)), s && (e = e.times(Math.abs(s) < 54 ? Le(2, s) : Xn.pow(2, s))), fe = !0, e);
}
function Kv(e, n) {
  var r, a = n.d.length;
  if (a < 3)
    return n.isZero() ? n : Va(e, 2, n, n);
  r = 1.4 * Math.sqrt(a), r = r > 16 ? 16 : r | 0, n = n.times(1 / It(5, r)), n = Va(e, 2, n, n);
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
function It(e, n) {
  for (var r = e; --n; )
    r *= e;
  return r;
}
function ts(e, n) {
  var r, a = n.s < 0, t = Sn(e, e.precision, 1), i = t.times(0.5);
  if (n = n.abs(), n.lte(i))
    return In = a ? 4 : 1, n;
  if (r = n.divToInt(t), r.isZero())
    In = a ? 3 : 2;
  else {
    if (n = n.minus(r.times(t)), n.lte(i))
      return In = ko(r) ? a ? 2 : 3 : a ? 4 : 1, n;
    In = ko(r) ? a ? 1 : 4 : a ? 3 : 2;
  }
  return n.minus(t).abs();
}
function Hi(e, n, r, a) {
  var t, i, o, l, s, u, d, v, f, c = e.constructor, h = r !== void 0;
  if (h ? (an(r, 1, ir), a === void 0 ? a = c.rounding : an(a, 0, 8)) : (r = c.precision, a = c.rounding), !e.isFinite())
    d = as(e);
  else {
    for (d = En(e), o = d.indexOf("."), h ? (t = 2, n == 16 ? r = r * 4 - 3 : n == 8 && (r = r * 3 - 2)) : t = n, o >= 0 && (d = d.replace(".", ""), f = new c(1), f.e = d.length - o, f.d = st(En(f), 10, t), f.e = f.d.length), v = st(d, 10, t), i = s = v.length; v[--s] == 0; )
      v.pop();
    if (!v[0])
      d = h ? "0p+0" : "0";
    else {
      if (o < 0 ? i-- : (e = new c(e), e.d = v, e.e = i, e = Te(e, f, r, a, 0, t), v = e.d, i = e.e, u = Zl), o = v[r], l = t / 2, u = u || v[r + 1] !== void 0, u = a < 4 ? (o !== void 0 || u) && (a === 0 || a === (e.s < 0 ? 3 : 2)) : o > l || o === l && (a === 4 || u || a === 6 && v[r - 1] & 1 || a === (e.s < 0 ? 8 : 7)), v.length = r, u)
        for (; ++v[--r] > t - 1; )
          v[r] = 0, r || (++i, v.unshift(1));
      for (s = v.length; !v[s - 1]; --s)
        ;
      for (o = 0, d = ""; o < s; o++)
        d += ui.charAt(v[o]);
      if (h) {
        if (s > 1)
          if (n == 16 || n == 8) {
            for (o = n == 16 ? 4 : 3, --s; s % o; s++)
              d += "0";
            for (v = st(d, t, n), s = v.length; !v[s - 1]; --s)
              ;
            for (o = 1, d = "1."; o < s; o++)
              d += ui.charAt(v[o]);
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
function $o(e, n) {
  if (e.length > n)
    return e.length = n, !0;
}
function Xv(e) {
  return new this(e).abs();
}
function Zv(e) {
  return new this(e).acos();
}
function Jv(e) {
  return new this(e).acosh();
}
function Qv(e, n) {
  return new this(e).plus(n);
}
function xv(e) {
  return new this(e).asin();
}
function _v(e) {
  return new this(e).asinh();
}
function ef(e) {
  return new this(e).atan();
}
function nf(e) {
  return new this(e).atanh();
}
function rf(e, n) {
  e = new this(e), n = new this(n);
  var r, a = this.precision, t = this.rounding, i = a + 4;
  return !e.s || !n.s ? r = new this(NaN) : !e.d && !n.d ? (r = Sn(this, i, 1).times(n.s > 0 ? 0.25 : 0.75), r.s = e.s) : !n.d || e.isZero() ? (r = n.s < 0 ? Sn(this, a, t) : new this(0), r.s = e.s) : !e.d || n.isZero() ? (r = Sn(this, i, 1).times(0.5), r.s = e.s) : n.s < 0 ? (this.precision = i, this.rounding = 1, r = this.atan(Te(e, n, i, 1)), n = Sn(this, i, 1), this.precision = a, this.rounding = t, r = e.s < 0 ? r.minus(n) : r.plus(n)) : r = this.atan(Te(e, n, i, 1)), r;
}
function af(e) {
  return new this(e).cbrt();
}
function tf(e) {
  return ue(e = new this(e), e.e + 1, 2);
}
function of(e, n, r) {
  return new this(e).clamp(n, r);
}
function lf(e) {
  if (!e || typeof e != "object")
    throw Error(Mt + "Object expected");
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
    if (r = i[n], t && (this[r] = di[r]), (a = e[r]) !== void 0)
      if (Ze(a) === a && a >= i[n + 1] && a <= i[n + 2])
        this[r] = a;
      else
        throw Error(nr + r + ": " + a);
  if (r = "crypto", t && (this[r] = di[r]), (a = e[r]) !== void 0)
    if (a === !0 || a === !1 || a === 0 || a === 1)
      if (a)
        if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
          this[r] = !0;
        else
          throw Error(Ql);
      else
        this[r] = !1;
    else
      throw Error(nr + r + ": " + a);
  return this;
}
function sf(e) {
  return new this(e).cos();
}
function uf(e) {
  return new this(e).cosh();
}
function is(e) {
  var n, r, a;
  function t(i) {
    var o, l, s, u = this;
    if (!(u instanceof t))
      return new t(i);
    if (u.constructor = t, To(i)) {
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
      return ci(u, i.toString());
    } else if (s !== "string")
      throw Error(nr + i);
    return (l = i.charCodeAt(0)) === 45 ? (i = i.slice(1), u.s = -1) : (l === 43 && (i = i.slice(1)), u.s = 1), _l.test(i) ? ci(u, i) : qv(u, i);
  }
  if (t.prototype = K, t.ROUND_UP = 0, t.ROUND_DOWN = 1, t.ROUND_CEIL = 2, t.ROUND_FLOOR = 3, t.ROUND_HALF_UP = 4, t.ROUND_HALF_DOWN = 5, t.ROUND_HALF_EVEN = 6, t.ROUND_HALF_CEIL = 7, t.ROUND_HALF_FLOOR = 8, t.EUCLID = 9, t.config = t.set = lf, t.clone = is, t.isDecimal = To, t.abs = Xv, t.acos = Zv, t.acosh = Jv, t.add = Qv, t.asin = xv, t.asinh = _v, t.atan = ef, t.atanh = nf, t.atan2 = rf, t.cbrt = af, t.ceil = tf, t.clamp = of, t.cos = sf, t.cosh = uf, t.div = df, t.exp = vf, t.floor = ff, t.hypot = cf, t.ln = mf, t.log = pf, t.log10 = gf, t.log2 = hf, t.max = yf, t.min = bf, t.mod = wf, t.mul = Sf, t.pow = Cf, t.random = kf, t.round = $f, t.sign = Tf, t.sin = Of, t.sinh = Vf, t.sqrt = Ef, t.sub = Mf, t.sum = Pf, t.tan = If, t.tanh = Nf, t.trunc = Bf, e === void 0 && (e = {}), e && e.defaults !== !0)
    for (a = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], n = 0; n < a.length; )
      e.hasOwnProperty(r = a[n++]) || (e[r] = this[r]);
  return t.config(e), t;
}
function df(e, n) {
  return new this(e).div(n);
}
function vf(e) {
  return new this(e).exp();
}
function ff(e) {
  return ue(e = new this(e), e.e + 1, 3);
}
function cf() {
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
function To(e) {
  return e instanceof Xn || e && e.toStringTag === xl || !1;
}
function mf(e) {
  return new this(e).ln();
}
function pf(e, n) {
  return new this(e).log(n);
}
function hf(e) {
  return new this(e).log(2);
}
function gf(e) {
  return new this(e).log(10);
}
function yf() {
  return rs(this, arguments, "lt");
}
function bf() {
  return rs(this, arguments, "gt");
}
function wf(e, n) {
  return new this(e).mod(n);
}
function Sf(e, n) {
  return new this(e).mul(n);
}
function Cf(e, n) {
  return new this(e).pow(n);
}
function kf(e) {
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
      throw Error(Ql);
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
function $f(e) {
  return ue(e = new this(e), e.e + 1, this.rounding);
}
function Tf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
function Of(e) {
  return new this(e).sin();
}
function Vf(e) {
  return new this(e).sinh();
}
function Ef(e) {
  return new this(e).sqrt();
}
function Mf(e, n) {
  return new this(e).sub(n);
}
function Pf() {
  var e = 0, n = arguments, r = new this(n[e]);
  for (fe = !1; r.s && ++e < n.length; )
    r = r.plus(n[e]);
  return fe = !0, ue(r, this.precision, this.rounding);
}
function If(e) {
  return new this(e).tan();
}
function Nf(e) {
  return new this(e).tanh();
}
function Bf(e) {
  return ue(e = new this(e), e.e + 1, 1);
}
K[Symbol.for("nodejs.util.inspect.custom")] = K.toString;
K[Symbol.toStringTag] = "Decimal";
var Xn = K.constructor = is(di);
pt = new Xn(pt);
ht = new Xn(ht);
var Df = {
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
  onBeforeChange: F(),
  onChange: F(),
  onIncrement: F(),
  onDecrement: F(),
  "onUpdate:modelValue": F()
}, {
  n: Af,
  classes: zf
} = ee("counter"), Oo = 100, Vo = 600, Lf = ["inputmode", "readonly", "disabled"];
function Rf(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ke("ripple");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [D(
      "div",
      Ee({
        class: e.classes(e.n("controller"), e.n("$-elevation--2"), [e.disabled || e.formDisabled, e.n("--disabled")], [e.errorMessage, e.n("--error")]),
        style: {
          background: e.color ? e.color : void 0
        }
      }, e.$attrs),
      [$e(re(
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
      }]]), $e(D(
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
        Lf
      ), [[ru, e.inputValue]]), $e(re(
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
  render: Rf,
  name: "VarCounter",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  inheritAttrs: !1,
  props: Df,
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
    } = l != null ? l : {}, h = () => d(e.rules, e.modelValue), g = (R) => {
      Me(() => {
        var {
          validateTrigger: J,
          rules: j,
          modelValue: Z
        } = e;
        u(J, R, j, Z);
      });
    }, w = () => {
      var {
        min: R
      } = e;
      O(e["onUpdate:modelValue"], R != null ? A(R) : 0), v();
    }, T = {
      reset: w,
      validate: h,
      resetValidation: v
    }, $ = W(() => {
      var {
        max: R,
        modelValue: J
      } = e;
      return R != null && A(J) >= A(R);
    }), y = W(() => {
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
    }, P = (R) => {
      var {
        lazyChange: J,
        onBeforeChange: j
      } = e, {
        value: Z
      } = R.target, N = C(Z);
      J ? O(j, A(N), G) : Y(N), g("onInputChange");
    }, S = () => {
      var {
        disabled: R,
        readonly: J,
        disableDecrement: j,
        decrementButton: Z,
        lazyChange: N,
        step: U,
        modelValue: H,
        onDecrement: x,
        onBeforeChange: oe
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !Z) && !y.value) {
        var se = new Xn(A(H)).minus(new Xn(A(U))).toString(), ve = C(se), Ce = A(ve);
        O(x, Ce), N ? O(oe, Ce, G) : (Y(ve), g("onDecrement"));
      }
    }, B = () => {
      var {
        disabled: R,
        readonly: J,
        disableIncrement: j,
        incrementButton: Z,
        lazyChange: N,
        step: U,
        modelValue: H,
        onIncrement: x,
        onBeforeChange: oe
      } = e;
      if (!(c != null && c.value || f != null && f.value || R || J || j || !Z) && !$.value) {
        var se = new Xn(A(H)).plus(new Xn(A(U))).toString(), ve = C(se), Ce = A(ve);
        O(x, Ce), N ? O(oe, Ce, G) : (Y(ve), g("onIncrement"));
      }
    }, E = () => {
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
        B(), k();
      }, Oo);
    }, L = () => {
      a = window.setTimeout(() => {
        S(), L();
      }, Oo);
    }, Y = (R) => {
      n.value = R;
      var J = A(R);
      O(e["onUpdate:modelValue"], J);
    }, G = (R) => {
      Y(C(String(R))), g("onLazyChange");
    };
    return O(o, T), te(() => e.modelValue, (R) => {
      Y(C(String(R))), O(e.onChange, A(R));
    }), Y(C(String(e.modelValue))), {
      n: Af,
      classes: zf,
      inputValue: n,
      errorMessage: s,
      formDisabled: c,
      formReadonly: f,
      isMax: $,
      isMin: y,
      validate: h,
      reset: w,
      resetValidation: v,
      handleChange: P,
      decrement: S,
      increment: B,
      pressDecrement: E,
      pressIncrement: z,
      releaseDecrement: I,
      releaseIncrement: p,
      toSizeUnit: we,
      toNumber: A
    };
  }
});
Kr.install = function(e) {
  e.component(Kr.name, Kr);
};
var os = 60, ls = os * 60, ss = ls * 24, Uf = ss * 7, Ea = 1e3, Ht = os * Ea, Eo = ls * Ea, Yf = ss * Ea, Ff = Uf * Ea, ji = "millisecond", Pr = "second", Ir = "minute", Nr = "hour", Yn = "day", ut = "week", wn = "month", us = "quarter", Fn = "year", Br = "date", Wf = "YYYY-MM-DDTHH:mm:ssZ", Mo = "Invalid Date", Hf = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, jf = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const Gf = {
  name: "en",
  weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
  months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
};
var mi = function(n, r, a) {
  var t = String(n);
  return !t || t.length >= r ? n : "" + Array(r + 1 - t.length).join(a) + n;
}, qf = function(n) {
  var r = -n.utcOffset(), a = Math.abs(r), t = Math.floor(a / 60), i = a % 60;
  return (r <= 0 ? "+" : "-") + mi(t, 2, "0") + ":" + mi(i, 2, "0");
}, Kf = function e(n, r) {
  if (n.date() < r.date())
    return -e(r, n);
  var a = (r.year() - n.year()) * 12 + (r.month() - n.month()), t = n.clone().add(a, wn), i = r - t < 0, o = n.clone().add(a + (i ? -1 : 1), wn);
  return +(-(a + (r - t) / (i ? t - o : o - t)) || 0);
}, Xf = function(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
}, Zf = function(n) {
  var r = {
    M: wn,
    y: Fn,
    w: ut,
    d: Yn,
    D: Br,
    h: Nr,
    m: Ir,
    s: Pr,
    ms: ji,
    Q: us
  };
  return r[n] || String(n || "").toLowerCase().replace(/s$/, "");
}, Jf = function(n) {
  return n === void 0;
};
const Qf = {
  s: mi,
  z: qf,
  m: Kf,
  a: Xf,
  p: Zf,
  u: Jf
};
var Ua = "en", cr = {};
cr[Ua] = Gf;
var Gi = function(n) {
  return n instanceof Nt;
}, yt = function e(n, r, a) {
  var t;
  if (!n)
    return Ua;
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
  return !a && t && (Ua = t), t || !a && Ua;
}, ae = function(n, r) {
  if (Gi(n))
    return n.clone();
  var a = typeof r == "object" ? r : {};
  return a.date = n, a.args = arguments, new Nt(a);
}, xf = function(n, r) {
  return ae(n, {
    locale: r.$L,
    utc: r.$u,
    x: r.$x,
    $offset: r.$offset
  });
}, ke = Qf;
ke.l = yt;
ke.i = Gi;
ke.w = xf;
var _f = function(n) {
  var r = n.date, a = n.utc;
  if (r === null)
    return new Date(NaN);
  if (ke.u(r))
    return new Date();
  if (r instanceof Date)
    return new Date(r);
  if (typeof r == "string" && !/Z$/i.test(r)) {
    var t = r.match(Hf);
    if (t) {
      var i = t[2] - 1 || 0, o = (t[7] || "0").substring(0, 3);
      return a ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, o);
    }
  }
  return new Date(r);
}, Nt = /* @__PURE__ */ function() {
  function e(r) {
    this.$L = yt(r.locale, null, !0), this.parse(r);
  }
  var n = e.prototype;
  return n.parse = function(a) {
    this.$d = _f(a), this.$x = a.x || {}, this.init();
  }, n.init = function() {
    var a = this.$d;
    this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
  }, n.$utils = function() {
    return ke;
  }, n.isValid = function() {
    return this.$d.toString() !== Mo;
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
    var i = this, o = ke.u(t) ? !0 : t, l = ke.p(a), s = function(T, $) {
      var y = ke.w(i.$u ? Date.UTC(i.$y, $, T) : new Date(i.$y, $, T), i);
      return o ? y : y.endOf(Yn);
    }, u = function(T, $) {
      var y = [0, 0, 0, 0], C = [23, 59, 59, 999];
      return ke.w(i.toDate()[T].apply(
        i.toDate("s"),
        (o ? y : C).slice($)
      ), i);
    }, d = this.$W, v = this.$M, f = this.$D, c = "set" + (this.$u ? "UTC" : "");
    switch (l) {
      case Fn:
        return o ? s(1, 0) : s(31, 11);
      case wn:
        return o ? s(1, v) : s(0, v + 1);
      case ut: {
        var h = this.$locale().weekStart || 0, g = (d < h ? d + 7 : d) - h;
        return s(o ? f - g : f + (6 - g), v);
      }
      case Yn:
      case Br:
        return u(c + "Hours", 0);
      case Nr:
        return u(c + "Minutes", 1);
      case Ir:
        return u(c + "Seconds", 2);
      case Pr:
        return u(c + "Milliseconds", 3);
      default:
        return this.clone();
    }
  }, n.endOf = function(a) {
    return this.startOf(a, !1);
  }, n.$set = function(a, t) {
    var i, o = ke.p(a), l = "set" + (this.$u ? "UTC" : ""), s = (i = {}, i[Yn] = l + "Date", i[Br] = l + "Date", i[wn] = l + "Month", i[Fn] = l + "FullYear", i[Nr] = l + "Hours", i[Ir] = l + "Minutes", i[Pr] = l + "Seconds", i[ji] = l + "Milliseconds", i)[o], u = o === Yn ? this.$D + (t - this.$W) : t;
    if (o === wn || o === Fn) {
      var d = this.clone().set(Br, 1);
      d.$d[s](u), d.init(), this.$d = d.set(Br, Math.min(this.$D, d.daysInMonth())).$d;
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
    if (l === wn)
      return this.set(wn, this.$M + a);
    if (l === Fn)
      return this.set(Fn, this.$y + a);
    if (l === Yn)
      return s(1);
    if (l === ut)
      return s(7);
    var u = (o = {}, o[Ir] = Ht, o[Nr] = Eo, o[Pr] = Ea, o)[l] || 1, d = this.$d.getTime() + a * u;
    return ke.w(d, this);
  }, n.subtract = function(a, t) {
    return this.add(a * -1, t);
  }, n.format = function(a) {
    var t = this, i = this.$locale();
    if (!this.isValid())
      return i.invalidDate || Mo;
    var o = a || Wf, l = ke.z(this), s = this.$H, u = this.$m, d = this.$M, v = i.weekdays, f = i.months, c = i.meridiem, h = function(y, C, P, S) {
      return y && (y[C] || y(t, o)) || P[C].slice(0, S);
    }, g = function(y) {
      return ke.s(s % 12 || 12, y, "0");
    }, w = c || function($, y, C) {
      var P = $ < 12 ? "AM" : "PM";
      return C ? P.toLowerCase() : P;
    }, T = {
      YY: String(this.$y).slice(-2),
      YYYY: this.$y,
      M: d + 1,
      MM: ke.s(d + 1, 2, "0"),
      MMM: h(i.monthsShort, d, f, 3),
      MMMM: h(f, d),
      D: this.$D,
      DD: ke.s(this.$D, 2, "0"),
      d: String(this.$W),
      dd: h(i.weekdaysMin, this.$W, v, 2),
      ddd: h(i.weekdaysShort, this.$W, v, 3),
      dddd: v[this.$W],
      H: String(s),
      HH: ke.s(s, 2, "0"),
      h: g(1),
      hh: g(2),
      a: w(s, u, !0),
      A: w(s, u, !1),
      m: String(u),
      mm: ke.s(u, 2, "0"),
      s: String(this.$s),
      ss: ke.s(this.$s, 2, "0"),
      SSS: ke.s(this.$ms, 3, "0"),
      Z: l
    };
    return o.replace(jf, function($, y) {
      return y || T[$] || l.replace(":", "");
    });
  }, n.utcOffset = function() {
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  }, n.diff = function(a, t, i) {
    var o, l = ke.p(t), s = ae(a), u = (s.utcOffset() - this.utcOffset()) * Ht, d = this - s, v = ke.m(this, s);
    return v = (o = {}, o[Fn] = v / 12, o[wn] = v, o[us] = v / 3, o[ut] = (d - u) / Ff, o[Yn] = (d - u) / Yf, o[Nr] = d / Eo, o[Ir] = d / Ht, o[Pr] = d / Ea, o)[l] || d, i ? v : ke.a(v);
  }, n.daysInMonth = function() {
    return this.endOf(wn).$D;
  }, n.$locale = function() {
    return cr[this.$L];
  }, n.locale = function(a, t) {
    if (!a)
      return this.$L;
    var i = this.clone(), o = yt(a, t, !0);
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
}(), ds = Nt.prototype;
ae.prototype = ds;
[["$ms", ji], ["$s", Pr], ["$m", Ir], ["$H", Nr], ["$W", Yn], ["$M", wn], ["$y", Fn], ["$D", Br]].forEach(function(e) {
  ds[e[1]] = function(n) {
    return this.$g(n, e[0], e[1]);
  };
});
ae.extend = function(e, n) {
  return e.$i || (e(n, Nt, ae), e.$i = !0), ae;
};
ae.locale = yt;
ae.isDayjs = Gi;
ae.unix = function(e) {
  return ae(e * 1e3);
};
ae.en = cr[Ua];
ae.Ls = cr;
ae.p = {};
const vs = function(e, n) {
  n.prototype.isSameOrBefore = function(r, a) {
    return this.isSame(r, a) || this.isBefore(r, a);
  };
}, fs = function(e, n) {
  n.prototype.isSameOrAfter = function(r, a) {
    return this.isSame(r, a) || this.isAfter(r, a);
  };
};
function ec(e) {
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
}], Ra = [{
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
}], nc = {
  modelValue: {
    type: [String, Array]
  },
  type: {
    type: String,
    default: "date",
    validator: ec
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
  onPreview: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: rc
} = ee("picker-header");
function ac(e, n) {
  var r = ie("var-icon"), a = ie("var-button");
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
        default: ce(() => [re(r, {
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
        Re,
        {
          name: "var-date-picker" + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(b(), V(
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
        default: ce(() => [re(r, {
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
const cs = _({
  render: ac,
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
    } = n, a = M(!1), t = M(0), i = W(() => {
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
    return te(() => e.date, () => {
      t.value = 0;
    }), {
      n: rc,
      reverse: a,
      showDate: i,
      checkDate: o
    };
  }
});
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
ae.extend(vs);
ae.extend(fs);
var {
  n: at,
  classes: tc
} = ee("month-picker"), {
  n: tt
} = ee("date-picker");
function ic(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
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
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(b(), V("ul", {
            key: e.panelKey
          }, [(b(!0), V(
            Ve,
            null,
            Be(e.MONTH_LIST, (t) => (b(), V("li", {
              key: t.index
            }, [re(
              a,
              Ee({
                type: "primary",
                "var-month-picker-cover": "",
                ripple: !1
              }, pi({}, e.buttonProps(t.index)), {
                onClick: (i) => e.chooseMonth(t, i)
              }),
              {
                default: ce(() => [ge(
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
const oc = _({
  render: ic,
  name: "MonthPickerPanel",
  components: {
    VarButton: rn,
    PanelHeader: cs
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
    }), u = W(() => e.choose.chooseYear === e.preview.previewYear), d = W(() => e.preview.previewYear === a), v = ($) => {
      var y, C;
      return (y = (C = We.value.datePickerMonthDict) == null ? void 0 : C[$].abbr) != null ? y : "";
    }, f = ($) => {
      var {
        preview: {
          previewYear: y
        },
        componentProps: {
          min: C,
          max: P
        }
      } = e, S = !0, B = !0, E = y + "-" + $;
      return P && (S = ae(E).isSameOrBefore(ae(P), "month")), C && (B = ae(E).isSameOrAfter(ae(C), "month")), S && B;
    }, c = ($) => {
      var {
        choose: {
          chooseMonths: y,
          chooseDays: C,
          chooseRangeMonth: P
        },
        componentProps: {
          type: S,
          range: B
        }
      } = e;
      if (B) {
        if (!P.length)
          return !1;
        var E = ae($).isSameOrBefore(ae(P[1]), "month"), z = ae($).isSameOrAfter(ae(P[0]), "month");
        return E && z;
      }
      return S === "month" ? y.includes($) : C.some((I) => I.includes($));
    }, h = ($) => {
      var {
        choose: {
          chooseMonth: y
        },
        preview: {
          previewYear: C
        },
        componentProps: {
          allowedDates: P,
          color: S,
          multiple: B,
          range: E
        }
      } = e, z = C + "-" + $, I = () => E || B ? c(z) : (y == null ? void 0 : y.index) === $ && u.value, p = () => f($) ? P ? !P(z) : !1 : !0, k = p(), L = () => k ? !0 : E || B ? !c(z) : !u.value || (y == null ? void 0 : y.index) !== $, Y = () => d.value && t === $ && e.componentProps.showCurrent ? (E || B || u.value) && k ? !0 : E || B ? !c(z) : u.value ? (y == null ? void 0 : y.index) !== t : !0 : !1, G = () => k ? "" : Y() ? S != null ? S : "" : I() ? "" : tt() + "-color-cover", R = G().startsWith(tt());
      return {
        outline: Y(),
        text: L(),
        color: L() ? "" : S,
        textColor: R ? "" : G(),
        [tt() + "-color-cover"]: R,
        class: tc(at("button"), [k, at("button--disabled")])
      };
    }, g = ($, y) => {
      var C = y.currentTarget;
      C.classList.contains(at("button--disabled")) || r("choose-month", $);
    }, w = ($) => {
      i.value = $ === "prev", o.value += $ === "prev" ? -1 : 1, r("check-preview", "year", $);
    }, T = ($) => {
      l.value.checkDate($);
    };
    return te(() => e.preview.previewYear, ($) => {
      var {
        componentProps: {
          min: y,
          max: C
        }
      } = e;
      C && (s.right = !ae("" + (A($) + 1)).isSameOrBefore(ae(C), "year")), y && (s.left = !ae("" + (A($) - 1)).isSameOrAfter(ae(y), "year"));
    }, {
      immediate: !0
    }), {
      n: at,
      nDate: tt,
      pack: We,
      MONTH_LIST: dt,
      headerEl: l,
      reverse: i,
      panelKey: o,
      panelBtnDisabled: s,
      forwardRef: T,
      buttonProps: h,
      getMonthAbbr: v,
      chooseMonth: g,
      checkDate: w
    };
  }
});
var {
  n: Po,
  classes: lc
} = ee("year-picker"), sc = ["onClick"];
function uc(e, n) {
  return b(), V(
    "ul",
    {
      class: m(e.n())
    },
    [(b(!0), V(
      Ve,
      null,
      Be(e.yearList, (r) => (b(), V(
        "li",
        {
          key: r,
          class: m(e.classes(e.n("item"), [r === e.toNumber(e.preview), e.n("item--active")])),
          style: X({
            color: r === e.toNumber(e.preview) ? e.componentProps.color : ""
          }),
          onClick: (a) => e.chooseYear(r)
        },
        ne(r),
        15,
        sc
      ))),
      128
    ))],
    2
  );
}
const dc = _({
  render: uc,
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
      var i = document.querySelector("." + Po("item--active"));
      i == null || i.scrollIntoView({
        block: "center"
      });
    }), {
      n: Po,
      classes: lc,
      yearList: a,
      chooseYear: t,
      toNumber: A
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
ae.extend(vs);
ae.extend(fs);
var {
  n: Er,
  classes: vc
} = ee("day-picker"), {
  n: it
} = ee("date-picker");
function fc(e, n) {
  var r = ie("panel-header"), a = ie("var-button");
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
        Re,
        {
          name: "" + e.nDate() + (e.reverse ? "-reverse" : "") + "-translatex"
        },
        {
          default: ce(() => [(b(), V("div", {
            key: e.panelKey
          }, [D(
            "ul",
            {
              class: m(e.n("head"))
            },
            [(b(!0), V(
              Ve,
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
              Ve,
              null,
              Be(e.days, (t, i) => (b(), V("li", {
                key: i
              }, [re(
                a,
                Ee({
                  type: "primary",
                  "var-day-picker-cover": "",
                  round: "",
                  ripple: !1
                }, hi({}, e.buttonProps(t)), {
                  onClick: (o) => e.chooseDay(t, o)
                }),
                {
                  default: ce(() => [ge(
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
const cc = _({
  render: fc,
  name: "DayPickerPanel",
  components: {
    VarButton: rn,
    PanelHeader: cs
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
    }), v = W(() => e.preview.previewYear === a && e.preview.previewMonth.index === t), f = W(() => {
      var E;
      return e.choose.chooseYear === e.preview.previewYear && ((E = e.choose.chooseMonth) == null ? void 0 : E.index) === e.preview.previewMonth.index;
    }), c = W(() => {
      var E = Ra.findIndex((z) => z.index === e.componentProps.firstDayOfWeek);
      return E === -1 || E === 0 ? Ra : Ra.slice(E).concat(Ra.slice(0, E));
    }), h = (E) => {
      var z, I;
      return (z = (I = We.value.datePickerWeekDict) == null ? void 0 : I[E].abbr) != null ? z : "";
    }, g = (E) => E > 0 ? E : "", w = () => {
      var {
        preview: {
          previewMonth: E,
          previewYear: z
        }
      } = e, I = ae(z + "-" + E.index).daysInMonth(), p = ae(z + "-" + E.index + "-01").day(), k = c.value.findIndex((L) => L.index === "" + p);
      o.value = [...Array(k).fill(-1), ...Array.from(Array(I + 1).keys())].filter((L) => L);
    }, T = () => {
      var {
        preview: {
          previewYear: E,
          previewMonth: z
        },
        componentProps: {
          max: I,
          min: p
        }
      } = e;
      if (I) {
        var k = E + "-" + (A(z.index) + 1);
        d.right = !ae(k).isSameOrBefore(ae(I), "month");
      }
      if (p) {
        var L = E + "-" + (A(z.index) - 1);
        d.left = !ae(L).isSameOrAfter(ae(p), "month");
      }
    }, $ = (E) => {
      var {
        preview: {
          previewYear: z,
          previewMonth: I
        },
        componentProps: {
          min: p,
          max: k
        }
      } = e, L = !0, Y = !0, G = z + "-" + I.index + "-" + E;
      return k && (L = ae(G).isSameOrBefore(ae(k), "day")), p && (Y = ae(G).isSameOrAfter(ae(p), "day")), L && Y;
    }, y = (E) => {
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
        var k = ae(E).isSameOrBefore(ae(I[1]), "day"), L = ae(E).isSameOrAfter(ae(I[0]), "day");
        return k && L;
      }
      return z.includes(E);
    }, C = (E) => {
      if (E < 0)
        return {
          text: !0,
          outline: !1,
          textColor: "",
          class: Er("button")
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
      } = e, R = I + "-" + p.index + "-" + E, J = () => G || Y ? y(R) : A(z) === E && f.value, j = () => $(E) ? k ? !k(R) : !1 : !0, Z = j(), N = () => Z ? !0 : G || Y ? !y(R) : !f.value || A(z) !== E, U = () => v.value && A(i) === E && e.componentProps.showCurrent ? (G || Y || f.value) && Z ? !0 : G || Y ? !y(R) : f.value ? z !== i : !0 : !1, H = () => Z ? "" : U() ? L != null ? L : "" : J() ? "" : it() + "-color-cover", x = H().startsWith(it());
      return {
        text: N(),
        outline: U(),
        textColor: x ? "" : H(),
        [it() + "-color-cover"]: x,
        class: vc(Er("button"), Er("button--usable"), [Z, Er("button--disabled")])
      };
    }, P = (E) => {
      l.value = E === "prev", s.value += E === "prev" ? -1 : 1, r("check-preview", "month", E);
    }, S = (E, z) => {
      var I = z.currentTarget;
      I.classList.contains(Er("button--disabled")) || r("choose-day", E);
    }, B = (E) => {
      u.value.checkDate(E);
    };
    return Ue(() => {
      w(), T();
    }), te(() => e.preview, () => {
      w(), T();
    }), {
      n: Er,
      nDate: it,
      days: o,
      reverse: l,
      headerEl: u,
      panelKey: s,
      sortWeekList: c,
      panelBtnDisabled: d,
      forwardRef: B,
      filterDay: g,
      getDayAbbr: h,
      checkDate: P,
      chooseDay: S,
      buttonProps: C
    };
  }
});
var {
  n: mc,
  classes: pc
} = ee("date-picker");
function hc(e, n) {
  var r = ie("year-picker-panel"), a = ie("month-picker-panel"), t = ie("day-picker-panel");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), [e.elevation, e.n("$-elevation--2")]))
    },
    [D(
      "div",
      {
        class: m(e.n("title")),
        style: X({
          background: e.headerColor || e.color
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("title-year"), [e.isYearPanel, e.n("title-year--active")])),
          onClick: n[0] || (n[0] = (i) => e.clickEl("year"))
        },
        [q(e.$slots, "year", {
          year: e.chooseYear
        }, () => [ge(
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
          Re,
          {
            name: e.multiple ? "" : "" + e.n() + (e.reverse ? "-reverse" : "") + "-translatey"
          },
          {
            default: ce(() => {
              var i, o, l;
              return [e.type === "month" ? (b(), V("div", {
                key: "" + e.chooseYear + ((i = e.chooseMonth) == null ? void 0 : i.index)
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.getChoose.chooseRangeMonth
              }, () => [ge(
                ne(e.getMonthTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseMonths
              }, () => [ge(
                ne(e.getMonthTitle),
                1
              )]) : q(e.$slots, "month", {
                key: 2,
                month: (o = e.chooseMonth) == null ? void 0 : o.index,
                year: e.chooseYear
              }, () => [ge(
                ne(e.getMonthTitle),
                1
              )])])) : (b(), V("div", {
                key: "" + e.chooseYear + ((l = e.chooseMonth) == null ? void 0 : l.index) + e.chooseDay
              }, [e.range ? q(e.$slots, "range", {
                key: 0,
                choose: e.formatRange
              }, () => [ge(
                ne(e.getDateTitle),
                1
              )]) : e.multiple ? q(e.$slots, "multiple", {
                key: 1,
                choose: e.getChoose.chooseDays
              }, () => [ge(
                ne(e.getDateTitle),
                1
              )]) : q(e.$slots, "date", wl(Ee({
                key: 2
              }, e.slotProps)), () => [ge(
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
        Re,
        {
          name: e.n() + "-panel-fade"
        },
        {
          default: ce(() => [e.getPanelType === "year" ? (b(), pe(
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
const Xr = _({
  render: hc,
  name: "VarDatePicker",
  components: {
    MonthPickerPanel: oc,
    YearPickerPanel: dc,
    DayPickerPanel: cc
  },
  props: nc,
  setup(e) {
    var n = 0, r = 0, a = "", t, i = ae().format("YYYY-MM-D"), [o, l] = i.split("-"), s = dt.find((le) => le.index === l), u = M(!1), d = M(!1), v = M(!0), f = M(), c = M(), h = M(), g = M(s), w = M(o), T = M(!1), $ = M([]), y = M([]), C = M([]), P = M([]), S = M(null), B = M(null), E = Ne({
      allowedDates: e.allowedDates,
      type: e.type,
      color: e.color,
      firstDayOfWeek: e.firstDayOfWeek,
      min: e.min,
      max: e.max,
      showCurrent: e.showCurrent,
      multiple: e.multiple,
      range: e.range
    }), z = W(() => ({
      chooseMonth: f.value,
      chooseYear: c.value,
      chooseDay: h.value,
      chooseMonths: $.value,
      chooseDays: y.value,
      chooseRangeMonth: C.value,
      chooseRangeDay: P.value
    })), I = W(() => ({
      previewMonth: g.value,
      previewYear: w.value
    })), p = W(() => {
      var {
        multiple: le,
        range: he
      } = e;
      if (he)
        return C.value.length ? C.value[0] + " ~ " + C.value[1] : "";
      var me = "";
      if (f.value) {
        var be, Se;
        me = (be = (Se = We.value.datePickerMonthDict) == null ? void 0 : Se[f.value.index].name) != null ? be : "";
      }
      return le ? "" + $.value.length + We.value.datePickerSelected : me;
    }), k = W(() => {
      var le, he, me, be, {
        multiple: Se,
        range: Ae
      } = e;
      if (Ae) {
        var Je = P.value.map((Yt) => ae(Yt).format("YYYY-MM-DD"));
        return Je.length ? Je[0] + " ~ " + Je[1] : "";
      }
      if (Se)
        return "" + y.value.length + We.value.datePickerSelected;
      if (!c.value || !f.value || !h.value)
        return "";
      var vn = ae(c.value + "-" + f.value.index + "-" + h.value).day(), Vr = Ra.find((Yt) => Yt.index === "" + vn), ao = (le = (he = We.value.datePickerWeekDict) == null ? void 0 : he[Vr.index].name) != null ? le : "", Qs = (me = (be = We.value.datePickerMonthDict) == null ? void 0 : be[f.value.index].name) != null ? me : "", xs = yr(h.value, 2, "0");
      return We.value.lang === "zh-CN" ? f.value.index + "-" + xs + " " + ao.slice(0, 3) : ao.slice(0, 3) + ", " + Qs.slice(0, 3) + " " + h.value;
    }), L = W(() => u.value ? "year" : e.type === "month" || d.value ? "month" : e.type === "date" ? "date" : ""), Y = W(() => !e.touchable || ["", "year"].includes(L.value)), G = W(() => {
      var le, he, me, be, Se = ae(c.value + "-" + ((le = f.value) == null ? void 0 : le.index) + "-" + h.value).day(), Ae = h.value ? yr(h.value, 2, "0") : "";
      return {
        week: "" + Se,
        year: (he = c.value) != null ? he : "",
        month: (me = (be = f.value) == null ? void 0 : be.index) != null ? me : "",
        date: Ae
      };
    }), R = W(() => z.value.chooseRangeDay.map((le) => ae(le).format("YYYY-MM-DD"))), J = W(() => c.value === w.value), j = W(() => {
      var le;
      return ((le = f.value) == null ? void 0 : le.index) === g.value.index;
    }), Z = (le) => {
      le === "year" ? u.value = !0 : le === "month" ? d.value = !0 : (u.value = !1, d.value = !1);
    }, N = (le) => {
      if (!Y.value) {
        var {
          clientX: he,
          clientY: me
        } = le.touches[0];
        n = he, r = me;
      }
    }, U = (le, he) => le >= he && le > 20 ? "x" : "y", H = (le) => {
      if (!Y.value) {
        var {
          clientX: he,
          clientY: me
        } = le.touches[0], be = he - n, Se = me - r;
        t = U(Math.abs(be), Math.abs(Se)), a = be > 0 ? "prev" : "next";
      }
    }, x = () => {
      if (!(Y.value || t !== "x")) {
        var le = L.value === "month" ? S : B;
        Ot(() => {
          le.value.forwardRef(a), ro();
        });
      }
    }, oe = (le, he) => {
      var me = he === "month" ? C : P;
      if (me.value = v.value ? [le, le] : [me.value[0], le], v.value = !v.value, v.value) {
        var be = ae(me.value[0]).isAfter(me.value[1]), Se = be ? [me.value[1], me.value[0]] : [...me.value];
        O(e["onUpdate:modelValue"], Se), O(e.onChange, Se);
      }
    }, se = (le, he) => {
      var me = he === "month" ? $ : y, be = he === "month" ? "YYYY-MM" : "YYYY-MM-DD", Se = me.value.map((Je) => ae(Je).format(be)), Ae = Se.findIndex((Je) => Je === le);
      Ae === -1 ? Se.push(le) : Se.splice(Ae, 1), O(e["onUpdate:modelValue"], Se), O(e.onChange, Se);
    }, ve = (le, he) => !c.value || !f.value ? !1 : J.value ? le === "month" ? he.index < f.value.index : j.value ? he < A(h.value) : f.value.index > g.value.index : c.value > w.value, Ce = (le) => {
      var {
        readonly: he,
        range: me,
        multiple: be,
        onChange: Se,
        "onUpdate:modelValue": Ae
      } = e;
      if (!(le < 0 || he)) {
        T.value = ve("day", le);
        var Je = w.value + "-" + g.value.index + "-" + le, vn = ae(Je).format("YYYY-MM-DD");
        me ? oe(vn, "day") : be ? se(vn, "day") : (O(Ae, vn), O(Se, vn));
      }
    }, Ye = (le) => {
      var {
        type: he,
        readonly: me,
        range: be,
        multiple: Se,
        onChange: Ae,
        onPreview: Je,
        "onUpdate:modelValue": vn
      } = e;
      if (T.value = ve("month", le), he === "month" && !me) {
        var Vr = w.value + "-" + le.index;
        be ? oe(Vr, "month") : Se ? se(Vr, "month") : (O(vn, Vr), O(Ae, Vr));
      } else
        g.value = le, O(Je, A(w.value), A(g.value.index));
      d.value = !1;
    }, _e = (le) => {
      w.value = "" + le, u.value = !1, d.value = !0, O(e.onPreview, A(w.value), A(g.value.index));
    }, Pe = (le, he) => {
      var me = he === "prev" ? -1 : 1;
      if (le === "year")
        w.value = "" + (A(w.value) + me);
      else {
        var be = A(g.value.index) + me;
        be < 1 && (w.value = "" + (A(w.value) - 1), be = 12), be > 12 && (w.value = "" + (A(w.value) + 1), be = 1), g.value = dt.find((Se) => A(Se.index) === be);
      }
      O(e.onPreview, A(w.value), A(g.value.index));
    }, dn = () => (e.multiple || e.range) && !ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be an Array'), !1) : !e.multiple && !e.range && ye(e.modelValue) ? (console.error('[Varlet] DatePicker: type of prop "modelValue" should be a String'), !1) : !0, Ut = (le) => ye(le) ? !1 : le === "Invalid Date" ? (console.error('[Varlet] DatePicker: "modelValue" is an Invalid Date'), !0) : !1, Xs = (le, he) => {
      var me = he === "month" ? C : P, be = he === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = le.map((vn) => ae(vn).format(be)).slice(0, 2), Ae = me.value.some((vn) => Ut(vn));
      if (!Ae) {
        me.value = Se;
        var Je = ae(me.value[0]).isAfter(me.value[1]);
        me.value.length === 2 && Je && (me.value = [me.value[1], me.value[0]]);
      }
    }, Zs = (le, he) => {
      var me = he === "month" ? $ : y, be = he === "month" ? "YYYY-MM" : "YYYY-MM-D", Se = Array.from(new Set(le.map((Ae) => ae(Ae).format(be))));
      me.value = Se.filter((Ae) => Ae !== "Invalid Date");
    }, Js = (le) => {
      var he = ae(le).format("YYYY-MM-D");
      if (!Ut(he)) {
        var [me, be, Se] = he.split("-"), Ae = dt.find((Je) => Je.index === be);
        f.value = Ae, c.value = me, h.value = Se, g.value = Ae, w.value = me;
      }
    }, ro = () => {
      r = 0, n = 0, a = "", t = void 0;
    };
    return te(() => e.modelValue, (le) => {
      if (!(!dn() || Ut(le) || !le))
        if (e.range) {
          if (!ye(le))
            return;
          v.value = le.length !== 1, Xs(le, e.type);
        } else if (e.multiple) {
          if (!ye(le))
            return;
          Zs(le, e.type);
        } else
          Js(le);
    }, {
      immediate: !0
    }), te(L, ro), {
      n: mc,
      classes: pc,
      monthPanelEl: S,
      dayPanelEl: B,
      reverse: T,
      currentDate: i,
      chooseMonth: f,
      chooseYear: c,
      chooseDay: h,
      previewYear: w,
      isYearPanel: u,
      isMonthPanel: d,
      getMonthTitle: p,
      getDateTitle: k,
      getPanelType: L,
      getChoose: z,
      getPreview: I,
      componentProps: E,
      slotProps: G,
      formatRange: R,
      clickEl: Z,
      handleTouchstart: N,
      handleTouchmove: H,
      handleTouchend: x,
      getChooseDay: Ce,
      getChooseMonth: Ye,
      getChooseYear: _e,
      checkPreview: Pe
    };
  }
});
Xr.install = function(e) {
  e.component(Xr.name, Xr);
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
function gc(e) {
  return ["left", "center", "right"].includes(e);
}
var yc = gi({
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
    validator: gc
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
  onBeforeClose: F(),
  onConfirm: F(),
  onCancel: F(),
  "onUpdate:show": F()
}, Ge(Qa, [
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
var {
  n: bc,
  classes: wc
} = ee("dialog");
function Sc(e, n) {
  var r = ie("var-button"), a = ie("var-popup");
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
      default: ce(() => [D(
        "div",
        Ee({
          class: e.classes(e.n("$--box"), e.n(), e.dialogClass),
          style: yi({
            width: e.toSizeUnit(e.width)
          }, e.dialogStyle)
        }, e.$attrs),
        [D(
          "div",
          {
            class: m(e.n("title"))
          },
          [q(e.$slots, "title", {}, () => [ge(
            ne(e.dt(e.title, e.pack.dialogTitle)),
            1
          )])],
          2
        ), D(
          "div",
          {
            class: m(e.n("message")),
            style: X({
              textAlign: e.messageAlign
            })
          },
          [q(e.$slots, "default", {}, () => [ge(
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
              default: ce(() => [ge(
                ne(e.dt(e.cancelButtonText, e.pack.dialogCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "color", "onClick"]
          )) : Q("v-if", !0), e.confirmButton ? (b(), pe(
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
                ne(e.dt(e.confirmButtonText, e.pack.dialogConfirmButtonText)),
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
  render: Sc,
  name: "VarDialog",
  components: {
    VarPopup: Cn,
    VarButton: rn
  },
  inheritAttrs: !1,
  props: yc,
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
      n: bc,
      classes: wc,
      pack: We,
      dt: $t,
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
  return Yi() ? new Promise((n) => {
    wr.close();
    var r = Xe(e) || qe(e) ? {
      message: String(e)
    } : e, a = Ne(r);
    a.teleport = "body", Hn = a;
    var {
      unmountInstance: t
    } = Aa(mr, a, {
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
        O(a.onClosed), t(), Hn === a && (Hn = null);
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
    Hn = null, Me().then(() => {
      e.show = !1;
    });
  }
};
wr.Component = mr;
var Cc = {
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
  n: kc,
  classes: $c
} = ee("divider");
function Tc(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [e.vertical, e.n("--vertical")], [e.withText, e.n("--with-text")], [e.isInset, e.n("--inset")], [e.dashed, e.n("--dashed")], [e.hairline, e.n("--hairline")])),
      style: X(e.style)
    },
    [q(e.$slots, "default", {}, () => [e.description ? (b(), V(
      "span",
      {
        key: 0,
        class: m(e.n("text"))
      },
      ne(e.description),
      3
    )) : Q("v-if", !0)])],
    6
  );
}
const Zr = _({
  render: Tc,
  name: "VarDivider",
  props: Cc,
  setup(e, n) {
    var {
      slots: r
    } = n, a = Ne({
      withText: !1
    }), t = W(() => Zt(e.inset) ? e.inset : !0), i = W(() => {
      var {
        inset: l,
        vertical: s,
        margin: u
      } = e, d = {
        margin: u
      };
      if (Zt(l) || l === 0)
        return Dr({}, d);
      var v = A(l), f = Math.abs(v) + (l + "").replace(v + "", "");
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
    }), Li(() => {
      o();
    }), Dr({
      n: kc,
      classes: $c
    }, au(a), {
      style: i,
      isInset: t
    });
  }
});
Zr.install = function(e) {
  e.component(Zr.name, Zr);
};
function Oc(e) {
  return ["start", "end"].includes(e);
}
var Vc = {
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
    validator: Oc
  },
  scrollToErrorOffsetY: {
    type: [String, Number],
    default: 0
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
function Ec(e) {
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
var {
  n: Mc
} = ee("form");
function Pc(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n())
    },
    [q(e.$slots, "default")],
    2
  );
}
const Zn = _({
  render: Pc,
  name: "VarForm",
  props: Vc,
  setup(e) {
    var n = W(() => e.disabled), r = W(() => e.readonly), {
      formItems: a,
      bindFormItems: t
    } = sv(), i = (d, v) => {
      d === -1 || !e.scrollToError || setTimeout(() => {
        var f = Or(v), c = f === window ? 0 : fo(f), h = fo(v) - c - De(e.scrollToErrorOffsetY);
        Wa(f, {
          top: h,
          animation: Jt
        });
      }, 300);
    }, o = /* @__PURE__ */ function() {
      var d = Ec(function* () {
        var v, f = yield Promise.all(a.map((w) => {
          var {
            validate: T
          } = w;
          return T();
        })), [c, h] = uu(f, (w) => w === !1, e.scrollToError), g = (v = a[h].instance.proxy) == null ? void 0 : v.$el;
        return i(h, g), !!c;
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
      n: Mc,
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
function No(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Bt(e) {
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
var Ic = "background-image", Nc = "lazy-loading", Bc = "lazy-error", Bo = "lazy-attempt", Dc = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"], wi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", Ma = [], bt = [], ms = du(100), ze = {
  loading: wi,
  error: wi,
  attempt: 3,
  throttleWait: 300,
  events: Dc
}, qi = Ui(_a, ze.throttleWait);
function Dt(e, n) {
  e._lazy.arg === Ic ? e.style.backgroundImage = "url(" + n + ")" : e.setAttribute("src", n);
}
function Ac(e) {
  e._lazy.loading && Dt(e, e._lazy.loading), _a();
}
function zc(e) {
  e._lazy.error && Dt(e, e._lazy.error), e._lazy.state = "error", Xi(e), _a();
}
function ps(e, n) {
  Dt(e, n), e._lazy.state = "success", Xi(e), _a();
}
function Lc(e) {
  var n;
  bt.includes(e) || (bt.push(e), (n = ze.events) == null || n.forEach((r) => {
    e.addEventListener(r, qi, {
      passive: !0
    });
  }));
}
function Rc() {
  bt.forEach((e) => {
    var n;
    (n = ze.events) == null || n.forEach((r) => {
      e.removeEventListener(r, qi);
    });
  }), bt.length = 0;
}
function Uc(e, n) {
  var r, a, t = {
    loading: (r = e.getAttribute(Nc)) != null ? r : ze.loading,
    error: (a = e.getAttribute(Bc)) != null ? a : ze.error,
    attempt: e.getAttribute(Bo) ? Number(e.getAttribute(Bo)) : ze.attempt
  };
  e._lazy = bi({
    src: n.value,
    arg: n.arg,
    currentAttempt: 0,
    state: "pending",
    attemptLock: !1
  }, t), Dt(e, wi), O(ze.filter, e._lazy);
}
function Yc(e, n) {
  var r = new Image();
  r.src = n, e._lazy.preloadImage = r, r.addEventListener("load", () => {
    e._lazy.attemptLock = !1, ms.add(n), ps(e, n);
  }), r.addEventListener("error", () => {
    e._lazy.attemptLock = !1, e._lazy.currentAttempt >= e._lazy.attempt ? zc(e) : hs(e);
  });
}
function hs(e) {
  if (!e._lazy.attemptLock) {
    e._lazy.attemptLock = !0, e._lazy.currentAttempt++;
    var {
      src: n
    } = e._lazy;
    if (ms.has(n)) {
      ps(e, n), e._lazy.attemptLock = !1;
      return;
    }
    Ac(e), Yc(e, n);
  }
}
function Ki(e) {
  return Si.apply(this, arguments);
}
function Si() {
  return Si = Bt(function* (e) {
    (yield cu(e)) && hs(e);
  }), Si.apply(this, arguments);
}
function _a() {
  Ma.forEach((e) => Ki(e));
}
function Fc(e) {
  return Ci.apply(this, arguments);
}
function Ci() {
  return Ci = Bt(function* (e) {
    !Ma.includes(e) && Ma.push(e), mu(e).forEach(Lc), yield Ki(e);
  }), Ci.apply(this, arguments);
}
function Xi(e) {
  kt(Ma, e), Ma.length === 0 && Rc();
}
function Wc(e, n) {
  var {
    src: r,
    arg: a
  } = e._lazy;
  return r !== n.value || a !== n.arg;
}
function gs(e, n) {
  return ki.apply(this, arguments);
}
function ki() {
  return ki = Bt(function* (e, n) {
    Uc(e, n), yield Fc(e);
  }), ki.apply(this, arguments);
}
function Hc(e, n) {
  return $i.apply(this, arguments);
}
function $i() {
  return $i = Bt(function* (e, n) {
    if (!Wc(e, n)) {
      Ma.includes(e) && (yield Ki(e));
      return;
    }
    yield gs(e, n);
  }), $i.apply(this, arguments);
}
function jc(e) {
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
var wt = {
  mounted: gs,
  unmounted: Xi,
  updated: Hc,
  install(e, n) {
    jc(n), qi = Ui(_a, ze.throttleWait), e.directive("lazy", this);
  }
};
function Gc(e) {
  return ["fill", "contain", "cover", "none", "scale-down"].includes(e);
}
var qc = {
  src: {
    type: String
  },
  fit: {
    type: String,
    validator: Gc,
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
  onClick: F(),
  onLoad: F(),
  onError: F()
}, {
  n: Kc,
  classes: Xc
} = ee("image"), Zc = ["alt", "title", "lazy-error", "lazy-loading"], Jc = ["alt", "title", "src"];
function Qc(e, n) {
  var r = Ke("lazy"), a = Ke("ripple");
  return $e((b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"), [!e.block, e.n("$--inline-block")])),
      style: X({
        width: e.toSizeUnit(e.width),
        height: e.toSizeUnit(e.height),
        "border-radius": e.toSizeUnit(e.radius)
      })
    },
    [e.lazy ? $e((b(), V(
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
      Zc
    )), [[r, e.src]]) : (b(), V(
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
      Jc
    ))],
    6
  )), [[a, {
    disabled: !e.ripple
  }]]);
}
const Jr = _({
  render: Qc,
  name: "VarImage",
  directives: {
    Lazy: wt,
    Ripple: Fe
  },
  props: qc,
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
      n: Kc,
      classes: Xc,
      toSizeUnit: we,
      handleLoad: n,
      handleError: r
    };
  }
});
Jr.install = function(e) {
  e.component(Jr.name, Jr);
};
var ys = Symbol("SWIPE_BIND_SWIPE_ITEM_KEY"), bs = Symbol("SWIPE_COUNT_SWIPE_ITEM_KEY");
function xc() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(ys), {
    length: r
  } = pn(bs);
  return {
    length: r,
    swipeItems: e,
    bindSwipeItems: n
  };
}
var ws = {
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
  onChange: F()
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
function _c(e) {
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
var em = 250, nm = 20, {
  n: rm,
  classes: am
} = ee("swipe"), tm = ["onClick"];
function im(e, n) {
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
    }, () => [e.indicator && e.length ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("indicators"), [e.vertical, e.n("--indicators-vertical")]))
      },
      [(b(!0), V(
        Ve,
        null,
        Be(e.length, (r, a) => (b(), V(
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
          tm
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)])],
    2
  );
}
const Jn = _({
  render: im,
  name: "VarSwipe",
  props: ws,
  setup(e) {
    var n = M(null), r = M(0), a = W(() => e.vertical), t = M(0), i = M(0), o = M(!1), l = M(0), {
      swipeItems: s,
      bindSwipeItems: u,
      length: d
    } = xc(), v = !1, f = -1, c, h, g, w, T, $ = (N) => s.find((U) => {
      var {
        index: H
      } = U;
      return H.value === N;
    }), y = () => {
      !e.loop || (i.value >= 0 && $(d.value - 1).setTranslate(-t.value), i.value <= -(t.value - r.value) && $(0).setTranslate(t.value), i.value > -(t.value - r.value) && i.value < 0 && ($(d.value - 1).setTranslate(0), $(0).setTranslate(0)));
    }, C = (N) => {
      var U = qe(N) ? N : Math.floor((i.value - r.value / 2) / -r.value), {
        loop: H
      } = e;
      return U <= -1 ? H ? -1 : 0 : U >= d.value ? H ? d.value : d.value - 1 : U;
    }, P = (N) => {
      var {
        loop: U
      } = e;
      return N === -1 ? U ? d.value - 1 : 0 : N === d.value ? U ? 0 : d.value - 1 : N;
    }, S = (N) => {
      var {
        loop: U
      } = e;
      return N < 0 ? U ? d.value - 1 : 0 : N > d.value - 1 ? U ? 0 : d.value - 1 : N;
    }, B = (N) => {
      var U = i.value >= r.value, H = i.value <= -t.value, x = 0, oe = -(t.value - r.value);
      o.value = !0, (U || H) && (o.value = !0, i.value = H ? x : oe, $(0).setTranslate(0), $(d.value - 1).setTranslate(0)), Ot(() => {
        o.value = !1, O(N);
      });
    }, E = () => {
      l.value = S(A(e.initialIndex));
    }, z = () => {
      var {
        autoplay: N
      } = e;
      !N || d.value <= 1 || (I(), f = window.setTimeout(() => {
        R(), z();
      }, A(N)));
    }, I = () => {
      f && clearTimeout(f);
    }, p = (N, U) => {
      if (N > U && N > 10)
        return "horizontal";
      if (U > N && U > 10)
        return "vertical";
    }, k = (N) => {
      if (!(d.value <= 1 || !e.touchable)) {
        var {
          clientX: U,
          clientY: H
        } = N.touches[0];
        c = U, h = H, g = performance.now(), v = !0, I(), B(() => {
          o.value = !0;
        });
      }
    }, L = (N) => {
      var {
        touchable: U,
        vertical: H
      } = e;
      if (!(!v || !U)) {
        var {
          clientX: x,
          clientY: oe
        } = N.touches[0], se = Math.abs(x - c), ve = Math.abs(oe - h), Ce = p(se, ve), Ye = H ? "vertical" : "horizontal";
        if (Ce === Ye) {
          N.preventDefault();
          var _e = w !== void 0 ? x - w : 0, Pe = T !== void 0 ? oe - T : 0;
          w = x, T = oe, i.value += H ? Pe : _e, y();
        }
      }
    }, Y = () => {
      if (!!v) {
        var {
          vertical: N,
          onChange: U
        } = e, H = N ? T < h : w < c, x = Math.abs(N ? h - T : c - w), oe = performance.now() - g <= em && x >= nm, se = oe ? C(H ? l.value + 1 : l.value - 1) : C();
        v = !1, o.value = !1, w = void 0, T = void 0, i.value = se * -r.value;
        var ve = l.value;
        l.value = P(se), z(), ve !== l.value && O(U, l.value);
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
          onChange: U
        } = e, H = l.value;
        l.value = S(H + 1), O(U, l.value), B(() => {
          if (H === d.value - 1 && N) {
            $(0).setTranslate(t.value), i.value = d.value * -r.value;
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
        l.value = S(H - 1), O(U, l.value), B(() => {
          if (H === 0 && N) {
            $(d.value - 1).setTranslate(-t.value), i.value = r.value;
            return;
          }
          H !== 0 && (i.value = l.value * -r.value);
        });
      }
    }, j = (N) => {
      if (!(d.value <= 1 || N === l.value)) {
        N = N < 0 ? 0 : N, N = N >= d.value ? d.value : N;
        var U = N > l.value ? R : J;
        Array.from({
          length: Math.abs(N - l.value)
        }).forEach(U);
      }
    }, Z = {
      size: r,
      vertical: a
    };
    return u(Z), te(() => d.value, /* @__PURE__ */ _c(function* () {
      yield Vn(), E(), G();
    })), Ue(() => {
      window.addEventListener("resize", G);
    }), tr(() => {
      window.removeEventListener("resize", G), I();
    }), {
      n: rm,
      classes: am,
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
function om() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(ys), {
    index: r
  } = hn(bs);
  if (!e || !n || !r)
    throw Error("<var-swipe-item/> must in <var-swipe/>");
  return {
    index: r,
    swipe: n,
    bindSwipe: e
  };
}
var {
  n: lm
} = ee("swipe-item");
function sm(e, n) {
  return b(), V(
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
  render: sm,
  name: "VarSwipeItem",
  setup() {
    var e = M(0), {
      swipe: n,
      bindSwipe: r,
      index: a
    } = om(), {
      size: t,
      vertical: i
    } = n, o = (s) => {
      e.value = s;
    }, l = {
      index: a,
      setTranslate: o
    };
    return r(l), {
      n: lm,
      size: t,
      vertical: i,
      translate: e
    };
  }
});
Qn.install = function(e) {
  e.component(Qn.name, Qn);
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
var um = Ti({
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
  "onUpdate:show": F()
}, Ge(ws, ["loop", "indicator", "onChange"]), Ge(Qa, [
  "lockScroll",
  "teleport",
  "onOpen",
  "onClose",
  "onOpened",
  "onClosed",
  "onRouteChange"
])), {
  n: Ao,
  classes: dm
} = ee("image-preview"), zo = 12, Lo = 200, vm = 350, Ro = 200, fm = ["src", "alt"];
function cm(e, n) {
  var r = ie("var-swipe-item"), a = ie("var-swipe"), t = ie("var-icon"), i = ie("var-popup");
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
      default: ce(() => [re(
        a,
        Ee({
          class: e.n("swipe"),
          "var-image-preview-cover": "",
          touchable: e.canSwipe,
          indicator: e.indicator && e.images.length > 1,
          "initial-index": e.initialIndex,
          loop: e.loop,
          onChange: e.onChange
        }, e.$attrs),
        {
          default: ce(() => [(b(!0), V(
            Ve,
            null,
            Be(e.images, (o) => (b(), pe(
              r,
              {
                class: m(e.n("swipe-item")),
                "var-image-preview-cover": "",
                key: o
              },
              {
                default: ce(() => [D(
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
                  [D(
                    "img",
                    {
                      class: m(e.n("image")),
                      src: o,
                      alt: o
                    },
                    null,
                    10,
                    fm
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
            }, () => [e.indicator && e.images.length > 1 ? (b(), V(
              "div",
              {
                key: 0,
                class: m(e.n("indicators"))
              },
              ne(l + 1) + " / " + ne(s),
              3
            )) : Q("v-if", !0)])];
          }),
          _: 3
        },
        16,
        ["class", "touchable", "indicator", "initial-index", "loop", "onChange"]
      ), q(e.$slots, "close-icon", {}, () => [e.closeable ? (b(), pe(
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
      )) : Q("v-if", !0)]), D(
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
  render: cm,
  name: "VarImagePreview",
  components: {
    VarSwipe: Jn,
    VarSwipeItem: Qn,
    VarPopup: Cn,
    VarIcon: Oe
  },
  inheritAttrs: !1,
  props: um,
  setup(e) {
    var n = M(!1), r = W(() => {
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
      }, Ro);
    }, g = () => {
      a.value = 1, t.value = 0, i.value = 0, s.value = !0, d = null, o.value = void 0, l.value = void 0;
    }, w = (I) => d ? f(d, I) <= zo && I.timestamp - d.timestamp <= Lo && d.target === I.target : !1, T = (I) => !I || !u || !d ? !1 : f(u, d) <= zo && Date.now() - d.timestamp < vm && (I === u.target || I.parentNode === u.target), $ = (I) => {
      v = window.setTimeout(() => {
        T(I.target) && z(), u = null;
      }, Lo);
    }, y = (I) => {
      v && window.clearTimeout(v);
      var {
        touches: p
      } = I, k = c(p[0], I.currentTarget);
      if (u = k, w(k)) {
        a.value > 1 ? g() : h();
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
      } = I.querySelector("." + Ao("image"));
      return {
        width: p,
        height: k,
        imageRadio: Y / L,
        rootRadio: k / p,
        zoom: A(e.zoom)
      };
    }, P = (I) => {
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
    }, S = (I) => {
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
    }, B = (I, p, k) => I + p >= k ? k : I + p <= -k ? -k : I + p, E = (I) => {
      if (!!d) {
        var p = I.currentTarget, {
          touches: k
        } = I, L = c(k[0], p);
        if (a.value > 1) {
          var Y = L.clientX - d.clientX, G = L.clientY - d.clientY, R = P(p), J = S(p);
          t.value = B(t.value, Y, R), i.value = B(i.value, G, J);
        }
        d = L;
      }
    }, z = () => {
      if (a.value > 1) {
        g(), setTimeout(() => O(e["onUpdate:show"], !1), Ro);
        return;
      }
      O(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (I) => {
      n.value = I;
    }, {
      immediate: !0
    }), {
      n: Ao,
      classes: dm,
      initialIndex: r,
      popupShow: n,
      scale: a,
      translateX: t,
      translateY: i,
      canSwipe: s,
      transitionTimingFunction: o,
      transitionDuration: l,
      handleTouchstart: y,
      handleTouchmove: E,
      handleTouchend: $,
      close: z
    };
  }
});
var jn;
function rr(e) {
  if (!!Yi()) {
    rr.close();
    var n = Xe(e) ? {
      images: [e]
    } : ye(e) ? {
      images: e
    } : e, r = Ne(n);
    r.teleport = "body", jn = r;
    var {
      unmountInstance: a
    } = Aa(pr, r, {
      onClose: () => O(r.onClose),
      onClosed: () => {
        O(r.onClosed), a(), jn === r && (jn = null);
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
    jn = null, Me().then(() => {
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
var vt = {
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
  onScroll: F()
};
function Uo(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function Yo(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        Uo(i, a, t, o, l, "next", s);
      }
      function l(s) {
        Uo(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: mm,
  classes: pm
} = ee("sticky");
function hm(e, n) {
  return b(), V(
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
    [D(
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
  render: hm,
  name: "VarSticky",
  props: vt,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), t = M("0px"), i = M("0px"), o = M("auto"), l = M("auto"), s = M("auto"), u = M("auto"), d = W(() => !e.disabled && e.cssMode), v = W(() => !e.disabled && !e.cssMode && a.value), f = W(() => De(e.offsetTop)), c, h = () => {
      var {
        cssMode: y,
        disabled: C
      } = e;
      if (!C) {
        var P = 0;
        if (c !== window) {
          var {
            top: S
          } = c.getBoundingClientRect();
          P = S;
        }
        var B = r.value, E = n.value, {
          top: z,
          left: I
        } = E.getBoundingClientRect(), p = z - P;
        return p <= f.value ? (y || (o.value = E.offsetWidth + "px", l.value = E.offsetHeight + "px", t.value = P + f.value + "px", i.value = I + "px", s.value = B.offsetWidth + "px", u.value = B.offsetHeight + "px", a.value = !0), {
          offsetTop: f.value,
          isFixed: !0
        }) : (a.value = !1, {
          offsetTop: p,
          isFixed: !1
        });
      }
    }, g = () => {
      var y = h();
      y && O(e.onScroll, y.offsetTop, y.isFixed);
    }, w = /* @__PURE__ */ function() {
      var y = Yo(function* () {
        a.value = !1, yield wu(), h();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), T = /* @__PURE__ */ function() {
      var y = Yo(function* () {
        yield Vn(), c = Or(n.value), c !== window && c.addEventListener("scroll", g), window.addEventListener("scroll", g), g();
      });
      return function() {
        return y.apply(this, arguments);
      };
    }(), $ = () => {
      c !== window && c.removeEventListener("scroll", g), window.removeEventListener("scroll", g);
    };
    return te(() => e.disabled, w), Di(T), Ai($), Ue(T), tr($), {
      n: mm,
      classes: pm,
      resize: w,
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
var Ss = Symbol("INDEX_BAR_BIND_INDEX_ANCHOR_KEY"), Cs = Symbol("INDEX_BAR_COUNT_INDEX_ANCHOR_KEY");
function gm() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Ss), {
    length: r
  } = pn(Cs);
  return {
    length: r,
    indexAnchors: n,
    bindIndexAnchors: e
  };
}
function ym() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Ss), {
    index: r
  } = hn(Cs);
  if (!e || !n)
    throw Error('[Varlet] IndexAnchor: You should use this component in "IndexBar"');
  return {
    index: r,
    indexBar: e,
    bindIndexBar: n
  };
}
var bm = {
  index: {
    type: [Number, String]
  }
}, {
  n: wm,
  classes: Sm
} = ee("index-anchor");
function Cm(e, n) {
  return b(), pe(
    Da(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      "offset-top": e.sticky ? e.stickyOffsetTop : null,
      "z-index": e.sticky ? e.zIndex : null,
      disabled: e.disabled && !e.cssMode,
      "css-mode": e.cssMode,
      ref: "anchorEl"
    },
    {
      default: ce(() => [D(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [q(e.$slots, "default", {}, () => [ge(
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
  render: Cm,
  name: "VarIndexAnchor",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: bm,
  setup(e) {
    var {
      index: n,
      indexBar: r,
      bindIndexBar: a
    } = ym(), t = M(0), i = M(!1), o = W(() => e.index), l = M(null), {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    } = r, c = () => {
      !l.value || (t.value = l.value.$el ? l.value.$el.offsetTop : l.value.offsetTop);
    }, h = (w) => {
      i.value = w;
    }, g = {
      index: n,
      name: o,
      ownTop: t,
      setOwnTop: c,
      setDisabled: h
    };
    return a(g), {
      n: wm,
      classes: Sm,
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
Qr.install = function(e) {
  e.component(Qr.name, Qr);
};
var km = {
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
  onClick: F(),
  onChange: F()
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
function jt(e) {
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
  n: $m,
  classes: Tm
} = ee("index-bar"), Om = ["onClick"];
function Vm(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n()),
      ref: "barEl"
    },
    [q(e.$slots, "default"), D(
      "ul",
      {
        class: m(e.n("anchor-list")),
        style: X({
          zIndex: e.toNumber(e.zIndex) + 2,
          display: e.hideList ? "none" : "block"
        })
      },
      [(b(!0), V(
        Ve,
        null,
        Be(e.anchorNameList, (r) => (b(), V(
          "li",
          {
            key: r,
            class: m(e.classes(e.n("anchor-item"), [e.active === r, e.n("anchor-item--active")])),
            style: X({
              color: e.active === r && e.highlightColor ? e.highlightColor : ""
            }),
            onClick: (a) => e.anchorClick(r, !0)
          },
          ne(r),
          15,
          Om
        ))),
        128
      ))],
      6
    )],
    2
  );
}
const xr = _({
  render: Vm,
  name: "VarIndexBar",
  props: km,
  setup(e) {
    var {
      length: n,
      indexAnchors: r,
      bindIndexAnchors: a
    } = gm(), t = M(""), i = M(null), o = M(null), l = M([]), s = M(), u = W(() => e.sticky), d = W(() => e.cssMode), v = W(() => De(e.stickyOffsetTop)), f = W(() => e.zIndex), c = {
      active: s,
      sticky: u,
      cssMode: d,
      stickyOffsetTop: v,
      zIndex: f
    };
    a(c);
    var h = ($) => {
      var y = Ri($) ? $.name.value : $;
      y === s.value || y === void 0 || (s.value = y, O(e.onChange, y));
    }, g = () => {
      var $ = Tt(i.value), y = i.value === window ? document.body.scrollHeight : i.value.scrollHeight, {
        offsetTop: C
      } = o.value;
      r.forEach((P, S) => {
        var B = P.ownTop.value, E = $ - B + v.value - C, z = S === r.length - 1 ? y : r[S + 1].ownTop.value - P.ownTop.value;
        E >= 0 && E < z && !t.value && (S && !e.cssMode && r[S - 1].setDisabled(!0), P.setDisabled(!1), h(P));
      });
    }, w = /* @__PURE__ */ function() {
      var $ = jt(function* (y, C) {
        var {
          offsetTop: P
        } = o.value;
        if (C && O(e.onClick, y), y !== s.value) {
          var S = r.find((z) => {
            var {
              name: I
            } = z;
            return y === I.value;
          });
          if (!!S) {
            var B = S.ownTop.value - v.value + P, E = Fi(i.value);
            t.value = y, h(y), yield Wa(i.value, {
              left: E,
              top: B,
              animation: Cl,
              duration: A(e.duration)
            }), Ot(() => {
              t.value = "";
            });
          }
        }
      });
      return function(C, P) {
        return $.apply(this, arguments);
      };
    }(), T = ($) => {
      $n(() => w($));
    };
    return te(() => n.value, /* @__PURE__ */ jt(function* () {
      yield Vn(), r.forEach(($) => {
        var {
          name: y,
          setOwnTop: C
        } = $;
        y.value && l.value.push(y.value), C();
      });
    })), Ue(/* @__PURE__ */ jt(function* () {
      yield Vn(), i.value = Or(o.value), i.value.addEventListener("scroll", g);
    })), zi(() => {
      O(i.value.removeEventListener, "scroll", g);
    }), {
      n: $m,
      classes: Tm,
      barEl: o,
      active: s,
      zIndex: f,
      anchorNameList: l,
      toNumber: A,
      scrollTo: T,
      anchorClick: w
    };
  }
});
xr.install = function(e) {
  e.component(xr.name, xr);
};
function Em(e) {
  return ["text", "password", "number"].includes(e);
}
var Mm = {
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
  onFocus: F(),
  onBlur: F(),
  onClick: F(),
  onClear: F(),
  onInput: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Gt,
  classes: Pm
} = ee("input"), Im = ["id", "disabled", "type", "value", "maxlength", "rows"], Nm = ["id", "disabled", "type", "value", "maxlength"], Bm = ["for"];
function Dm(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details");
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
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
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
        )) : Q("v-if", !0), e.textarea ? (b(), V(
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
          Im
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
          Nm
        )), D(
          "label",
          {
            class: m(e.classes(e.n("$--ellipsis"), [e.isFocus, e.n("--focus")], [e.formDisabled || e.disabled, e.n("--disabled")], [e.errorMessage, e.n("--error")], [e.textarea, e.n("textarea-placeholder"), e.n("placeholder")], e.computePlaceholderState(), [!e.hint, e.n("--placeholder-non-hint")])),
            style: X({
              color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
            }),
            for: e.id
          },
          ne(e.placeholder),
          15,
          Bm
        )],
        2
      ), D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "append-icon", {}, () => [e.clearable && !e.isEmpty(e.modelValue) ? (b(), pe(
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
    ), e.line ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
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
    )) : Q("v-if", !0), re(
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
  render: Dm,
  name: "VarInput",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  props: Mm,
  setup(e) {
    var n = M("var-input-" + Ba().uid), r = M(null), a = M(!1), t = W(() => {
      var {
        maxlength: p,
        modelValue: k
      } = e;
      return p ? Gn(k) ? "0 / " + p : String(k).length + "/" + p : "";
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
      if (!p && !Gn(k))
        return Gt("--placeholder-hidden");
      if (p && (!Gn(k) || a.value))
        return Gt("--placeholder-hint");
    }, c = (p) => {
      a.value = !0, O(e.onFocus, p), v("onFocus");
    }, h = (p) => {
      a.value = !1, O(e.onBlur, p), v("onBlur");
    }, g = (p) => {
      var k = p.target, {
        value: L
      } = k;
      L = C(y(L)), k.value = L, O(e["onUpdate:modelValue"], L), O(e.onInput, L, p), v("onInput");
    }, w = (p) => {
      var k = p.target, {
        value: L
      } = k;
      L = C(y(L)), k.value = L, O(e.onChange, L, p), v("onChange");
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
    }, y = (p) => e.modelModifiers.trim ? p.trim() : p, C = (p) => e.maxlength ? p.slice(0, A(e.maxlength)) : p, P = (p) => {
      var {
        disabled: k,
        readonly: L
      } = e;
      o != null && o.disabled.value || o != null && o.readonly.value || k || L || p.stopPropagation();
    }, S = () => {
      O(e["onUpdate:modelValue"], ""), d();
    }, B = () => u(e.rules, e.modelValue), E = () => {
      var p;
      (p = r.value) == null || p.focus();
    }, z = () => {
      r.value.blur();
    }, I = {
      reset: S,
      validate: B,
      resetValidation: d
    };
    return O(i, I), Ue(() => {
      e.autofocus && E();
    }), {
      el: r,
      id: n,
      isFocus: a,
      errorMessage: l,
      maxlengthText: t,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: Gt,
      classes: Pm,
      isEmpty: Gn,
      computePlaceholderState: f,
      handleFocus: c,
      handleBlur: h,
      handleInput: g,
      handleChange: w,
      handleClear: T,
      handleClick: $,
      handleTouchstart: P,
      validate: B,
      resetValidation: d,
      reset: S,
      focus: E,
      blur: z
    };
  }
});
hr.install = function(e) {
  e.component(hr.name, hr);
};
function Am(e) {
  return ["default", "primary", "info", "success", "warning", "danger"].includes(e);
}
function zm(e) {
  return ["always", "hover", "none"].includes(e);
}
var Lm = {
  type: {
    type: String,
    default: "default",
    validator: Am
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
    validator: zm
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
  onClick: F()
}, {
  n: Rm,
  classes: Um
} = ee("link");
function Ym(e, n) {
  return b(), pe(
    Da(e.tag),
    Ee(e.linkProps, {
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
const _r = _({
  render: Ym,
  name: "VarLink",
  props: Lm,
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
      i || O(o, t);
    };
    return {
      n: Rm,
      classes: Um,
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
var Fm = {
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
  onLoad: F(),
  "onUpdate:loading": F(),
  "onUpdate:error": F()
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
function Wm(e) {
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
  n: Hm,
  classes: jm
} = ee("list");
function Gm(e, n) {
  var r = ie("var-loading"), a = Ke("ripple");
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box"))),
      ref: "listEl"
    },
    [q(e.$slots, "default"), e.loading ? q(e.$slots, "loading", {
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
    )]) : Q("v-if", !0), e.finished ? q(e.$slots, "finished", {
      key: 1
    }, () => [D(
      "div",
      {
        class: m(e.n("finished"))
      },
      ne(e.dt(e.finishedText, e.pack.listFinishedText)),
      3
    )]) : Q("v-if", !0), e.error ? q(e.$slots, "error", {
      key: 2
    }, () => [$e((b(), V(
      "div",
      {
        class: m(e.n("error")),
        onClick: n[0] || (n[0] = function() {
          return e.load && e.load(...arguments);
        })
      },
      [ge(
        ne(e.dt(e.errorText, e.pack.listErrorText)),
        1
      )],
      2
    )), [[a]])]) : Q("v-if", !0), D(
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
  render: Gm,
  name: "VarList",
  directives: {
    Ripple: Fe
  },
  components: {
    VarLoading: On
  },
  props: Fm,
  setup(e) {
    var n = M(null), r = M(null), a, t = () => {
      O(e["onUpdate:error"], !1), O(e["onUpdate:loading"], !0), O(e.onLoad);
    }, i = () => {
      var l = a === window ? window.innerHeight : a.getBoundingClientRect().bottom, {
        bottom: s
      } = r.value.getBoundingClientRect();
      return Math.floor(s) - De(e.offset) <= l;
    }, o = /* @__PURE__ */ function() {
      var l = Wm(function* () {
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
      dt: $t,
      isNumber: qe,
      load: t,
      check: o,
      n: Hm,
      classes: jm
    };
  }
});
ea.install = function(e) {
  e.component(ea.name, ea);
};
var qm = {
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
  classes: Km,
  n: Ho
} = ee("loading-bar");
const Xm = _({
  name: "VarLoadingBar",
  props: qm,
  setup(e) {
    return () => re("div", {
      class: Km(Ho(), [e.error, Ho("--error")]),
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
var ks, jo, on = Ne({
  value: 0,
  opacity: 0,
  error: !1
}), Zm = (e) => {
  Object.assign(on, e);
}, $s = () => {
  ks = window.setTimeout(() => {
    if (!(on.value >= 95)) {
      var e = Math.random();
      on.value < 70 && (e = Math.round(5 * Math.random())), on.value += e, $s();
    }
  }, 200);
}, Jm = () => {
  jo || (jo = !0, Aa(Xm, on)), (!on.error || on.value === 100) && (on.value = 0), setTimeout(() => {
    on.opacity = 1;
  }, 200), $s();
}, Qm = () => {
  on.value = 100, setTimeout(() => {
    on.opacity = 0, setTimeout(() => {
      on.error = !1;
    }, 250);
  }, 300), window.clearTimeout(ks);
}, xm = () => {
  on.error = !0, ja.start(), setTimeout(ja.finish, 300);
}, ja = {
  start: Jm,
  finish: Qm,
  error: xm,
  mergeConfig: Zm
}, _m = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ft(e) {
  return e.replace(/left|right|bottom|top/g, function(n) {
    return _m[n];
  });
}
var Nn = "top", ar = "bottom", Sr = "right", _n = "left", At = "auto", zt = [Nn, ar, Sr, _n], Lt = "start", Ga = "end", ep = "clippingParents", Ts = "viewport", za = "popper", np = "reference", Go = /* @__PURE__ */ zt.reduce(function(e, n) {
  return e.concat([n + "-" + Lt, n + "-" + Ga]);
}, []), Os = /* @__PURE__ */ [].concat(zt, [At]).reduce(function(e, n) {
  return e.concat([n, n + "-" + Lt, n + "-" + Ga]);
}, []), rp = "beforeRead", ap = "read", tp = "afterRead", ip = "beforeMain", op = "main", lp = "afterMain", sp = "beforeWrite", up = "write", dp = "afterWrite", Oi = [rp, ap, tp, ip, op, lp, sp, up, dp];
function Bn(e) {
  return e.split("-")[0];
}
var vp = {
  start: "end",
  end: "start"
};
function qo(e) {
  return e.replace(/start|end/g, function(n) {
    return vp[n];
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
function Zi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var n = bn(e).ShadowRoot;
  return e instanceof n || e instanceof ShadowRoot;
}
function or(e) {
  return ((Cr(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
var Ya = Math.max, Ko = Math.min, Pa = Math.round;
function Vi() {
  var e = navigator.userAgentData;
  return e != null && e.brands ? e.brands.map(function(n) {
    return n.brand + "/" + n.version;
  }).join(" ") : navigator.userAgent;
}
function Vs() {
  return !/^((?!chrome|android).)*safari/i.test(Vi());
}
function Ia(e, n, r) {
  n === void 0 && (n = !1), r === void 0 && (r = !1);
  var a = e.getBoundingClientRect(), t = 1, i = 1;
  n && cn(e) && (t = e.offsetWidth > 0 && Pa(a.width) / e.offsetWidth || 1, i = e.offsetHeight > 0 && Pa(a.height) / e.offsetHeight || 1);
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
function Ji(e) {
  var n = bn(e), r = n.pageXOffset, a = n.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: a
  };
}
function Qi(e) {
  return Ia(or(e)).left + Ji(e).scrollLeft;
}
function fp(e, n) {
  var r = bn(e), a = or(e), t = r.visualViewport, i = a.clientWidth, o = a.clientHeight, l = 0, s = 0;
  if (t) {
    i = t.width, o = t.height;
    var u = Vs();
    (u || !u && n === "fixed") && (l = t.offsetLeft, s = t.offsetTop);
  }
  return {
    width: i,
    height: o,
    x: l + Qi(e),
    y: s
  };
}
function Tn(e) {
  return bn(e).getComputedStyle(e);
}
function cp(e) {
  var n, r = or(e), a = Ji(e), t = (n = e.ownerDocument) == null ? void 0 : n.body, i = Ya(r.scrollWidth, r.clientWidth, t ? t.scrollWidth : 0, t ? t.clientWidth : 0), o = Ya(r.scrollHeight, r.clientHeight, t ? t.scrollHeight : 0, t ? t.clientHeight : 0), l = -a.scrollLeft + Qi(e), s = -a.scrollTop;
  return Tn(t || r).direction === "rtl" && (l += Ya(r.clientWidth, t ? t.clientWidth : 0) - i), {
    width: i,
    height: o,
    x: l,
    y: s
  };
}
function Mn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Rt(e) {
  return Mn(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zi(e) ? e.host : null) || or(e);
}
function xi(e) {
  var n = Tn(e), r = n.overflow, a = n.overflowX, t = n.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + t + a);
}
function Es(e) {
  return ["html", "body", "#document"].indexOf(Mn(e)) >= 0 ? e.ownerDocument.body : cn(e) && xi(e) ? e : Es(Rt(e));
}
function Fa(e, n) {
  var r;
  n === void 0 && (n = []);
  var a = Es(e), t = a === ((r = e.ownerDocument) == null ? void 0 : r.body), i = bn(a), o = t ? [i].concat(i.visualViewport || [], xi(a) ? a : []) : a, l = n.concat(o);
  return t ? l : l.concat(Fa(Rt(o)));
}
function mp(e) {
  return ["table", "td", "th"].indexOf(Mn(e)) >= 0;
}
function Xo(e) {
  return !cn(e) || Tn(e).position === "fixed" ? null : e.offsetParent;
}
function pp(e) {
  var n = /firefox/i.test(Vi()), r = /Trident/i.test(Vi());
  if (r && cn(e)) {
    var a = Tn(e);
    if (a.position === "fixed")
      return null;
  }
  var t = Rt(e);
  for (Zi(t) && (t = t.host); cn(t) && ["html", "body"].indexOf(Mn(t)) < 0; ) {
    var i = Tn(t);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || n && i.willChange === "filter" || n && i.filter && i.filter !== "none")
      return t;
    t = t.parentNode;
  }
  return null;
}
function _i(e) {
  for (var n = bn(e), r = Xo(e); r && mp(r) && Tn(r).position === "static"; )
    r = Xo(r);
  return r && (Mn(r) === "html" || Mn(r) === "body" && Tn(r).position === "static") ? n : r || pp(e) || n;
}
function hp(e, n) {
  var r = n.getRootNode && n.getRootNode();
  if (e.contains(n))
    return !0;
  if (r && Zi(r)) {
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
function gp(e, n) {
  var r = Ia(e, !1, n === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function Zo(e, n, r) {
  return n === Ts ? Ei(fp(e, r)) : Cr(n) ? gp(n, r) : Ei(cp(or(e)));
}
function yp(e) {
  var n = Fa(Rt(e)), r = ["absolute", "fixed"].indexOf(Tn(e).position) >= 0, a = r && cn(e) ? _i(e) : e;
  return Cr(a) ? n.filter(function(t) {
    return Cr(t) && hp(t, a) && Mn(t) !== "body";
  }) : [];
}
function bp(e, n, r, a) {
  var t = n === "clippingParents" ? yp(e) : [].concat(n), i = [].concat(t, [r]), o = i[0], l = i.reduce(function(s, u) {
    var d = Zo(e, u, a);
    return s.top = Ya(d.top, s.top), s.right = Ko(d.right, s.right), s.bottom = Ko(d.bottom, s.bottom), s.left = Ya(d.left, s.left), s;
  }, Zo(e, o, a));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function qa(e) {
  return e.split("-")[1];
}
function wp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ms(e) {
  var n = e.reference, r = e.element, a = e.placement, t = a ? Bn(a) : null, i = a ? qa(a) : null, o = n.x + n.width / 2 - r.width / 2, l = n.y + n.height / 2 - r.height / 2, s;
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
  var u = t ? wp(t) : null;
  if (u != null) {
    var d = u === "y" ? "height" : "width";
    switch (i) {
      case Lt:
        s[u] = s[u] - (n[d] / 2 - r[d] / 2);
        break;
      case Ga:
        s[u] = s[u] + (n[d] / 2 - r[d] / 2);
        break;
    }
  }
  return s;
}
function Sp() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Cp(e) {
  return Object.assign({}, Sp(), e);
}
function kp(e, n) {
  return n.reduce(function(r, a) {
    return r[a] = e, r;
  }, {});
}
function Ps(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = a === void 0 ? e.placement : a, i = r.strategy, o = i === void 0 ? e.strategy : i, l = r.boundary, s = l === void 0 ? ep : l, u = r.rootBoundary, d = u === void 0 ? Ts : u, v = r.elementContext, f = v === void 0 ? za : v, c = r.altBoundary, h = c === void 0 ? !1 : c, g = r.padding, w = g === void 0 ? 0 : g, T = Cp(typeof w != "number" ? w : kp(w, zt)), $ = f === za ? np : za, y = e.rects.popper, C = e.elements[h ? $ : f], P = bp(Cr(C) ? C : C.contextElement || or(e.elements.popper), s, d, o), S = Ia(e.elements.reference), B = Ms({
    reference: S,
    element: y,
    strategy: "absolute",
    placement: t
  }), E = Ei(Object.assign({}, y, B)), z = f === za ? E : S, I = {
    top: P.top - z.top + T.top,
    bottom: z.bottom - P.bottom + T.bottom,
    left: P.left - z.left + T.left,
    right: z.right - P.right + T.right
  }, p = e.modifiersData.offset;
  if (f === za && p) {
    var k = p[t];
    Object.keys(I).forEach(function(L) {
      var Y = [Sr, ar].indexOf(L) >= 0 ? 1 : -1, G = [Nn, ar].indexOf(L) >= 0 ? "y" : "x";
      I[L] += k[G] * Y;
    });
  }
  return I;
}
function $p(e, n) {
  n === void 0 && (n = {});
  var r = n, a = r.placement, t = r.boundary, i = r.rootBoundary, o = r.padding, l = r.flipVariations, s = r.allowedAutoPlacements, u = s === void 0 ? Os : s, d = qa(a), v = d ? l ? Go : Go.filter(function(h) {
    return qa(h) === d;
  }) : zt, f = v.filter(function(h) {
    return u.indexOf(h) >= 0;
  });
  f.length === 0 && (f = v, process.env.NODE_ENV !== "production" && console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var c = f.reduce(function(h, g) {
    return h[g] = Ps(e, {
      placement: g,
      boundary: t,
      rootBoundary: i,
      padding: o
    })[Bn(g)], h;
  }, {});
  return Object.keys(c).sort(function(h, g) {
    return c[h] - c[g];
  });
}
function Tp(e) {
  if (Bn(e) === At)
    return [];
  var n = ft(e);
  return [qo(e), n, qo(n)];
}
function Op(e) {
  var n = e.state, r = e.options, a = e.name;
  if (!n.modifiersData[a]._skip) {
    for (var t = r.mainAxis, i = t === void 0 ? !0 : t, o = r.altAxis, l = o === void 0 ? !0 : o, s = r.fallbackPlacements, u = r.padding, d = r.boundary, v = r.rootBoundary, f = r.altBoundary, c = r.flipVariations, h = c === void 0 ? !0 : c, g = r.allowedAutoPlacements, w = n.options.placement, T = Bn(w), $ = T === w, y = s || ($ || !h ? [ft(w)] : Tp(w)), C = [w].concat(y).reduce(function(oe, se) {
      return oe.concat(Bn(se) === At ? $p(n, {
        placement: se,
        boundary: d,
        rootBoundary: v,
        padding: u,
        flipVariations: h,
        allowedAutoPlacements: g
      }) : se);
    }, []), P = n.rects.reference, S = n.rects.popper, B = /* @__PURE__ */ new Map(), E = !0, z = C[0], I = 0; I < C.length; I++) {
      var p = C[I], k = Bn(p), L = qa(p) === Lt, Y = [Nn, ar].indexOf(k) >= 0, G = Y ? "width" : "height", R = Ps(n, {
        placement: p,
        boundary: d,
        rootBoundary: v,
        altBoundary: f,
        padding: u
      }), J = Y ? L ? Sr : _n : L ? ar : Nn;
      P[G] > S[G] && (J = ft(J));
      var j = ft(J), Z = [];
      if (i && Z.push(R[k] <= 0), l && Z.push(R[J] <= 0, R[j] <= 0), Z.every(function(oe) {
        return oe;
      })) {
        z = p, E = !1;
        break;
      }
      B.set(p, Z);
    }
    if (E)
      for (var N = h ? 3 : 1, U = function(se) {
        var ve = C.find(function(Ce) {
          var Ye = B.get(Ce);
          if (Ye)
            return Ye.slice(0, se).every(function(_e) {
              return _e;
            });
        });
        if (ve)
          return z = ve, "break";
      }, H = N; H > 0; H--) {
        var x = U(H);
        if (x === "break")
          break;
      }
    n.placement !== z && (n.modifiersData[a]._skip = !0, n.placement = z, n.reset = !0);
  }
}
const Vp = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Op,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ep(e, n, r) {
  var a = Bn(e), t = [_n, Nn].indexOf(a) >= 0 ? -1 : 1, i = typeof r == "function" ? r(Object.assign({}, n, {
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
function Mp(e) {
  var n = e.state, r = e.options, a = e.name, t = r.offset, i = t === void 0 ? [0, 0] : t, o = Os.reduce(function(d, v) {
    return d[v] = Ep(v, n.rects, i), d;
  }, {}), l = o[n.placement], s = l.x, u = l.y;
  n.modifiersData.popperOffsets != null && (n.modifiersData.popperOffsets.x += s, n.modifiersData.popperOffsets.y += u), n.modifiersData[a] = o;
}
const Pp = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Mp
};
function Ip(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Np(e) {
  return e === bn(e) || !cn(e) ? Ji(e) : Ip(e);
}
function Bp(e) {
  var n = e.getBoundingClientRect(), r = Pa(n.width) / e.offsetWidth || 1, a = Pa(n.height) / e.offsetHeight || 1;
  return r !== 1 || a !== 1;
}
function Dp(e, n, r) {
  r === void 0 && (r = !1);
  var a = cn(n), t = cn(n) && Bp(n), i = or(n), o = Ia(e, t, r), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (a || !a && !r) && ((Mn(n) !== "body" || xi(i)) && (l = Np(n)), cn(n) ? (s = Ia(n, !0), s.x += n.clientLeft, s.y += n.clientTop) : i && (s.x = Qi(i))), {
    x: o.left + l.scrollLeft - s.x,
    y: o.top + l.scrollTop - s.y,
    width: o.width,
    height: o.height
  };
}
function Ap(e) {
  var n = Ia(e), r = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(n.width - r) <= 1 && (r = n.width), Math.abs(n.height - a) <= 1 && (a = n.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: a
  };
}
function zp(e) {
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
function Lp(e) {
  var n = zp(e);
  return Oi.reduce(function(r, a) {
    return r.concat(n.filter(function(t) {
      return t.phase === a;
    }));
  }, []);
}
function Rp(e) {
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
var lr = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s', Up = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available', Jo = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function Yp(e) {
  e.forEach(function(n) {
    [].concat(Object.keys(n), Jo).filter(function(r, a, t) {
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
          Oi.indexOf(n.phase) < 0 && console.error(Rn(lr, n.name, '"phase"', "either " + Oi.join(", "), '"' + String(n.phase) + '"'));
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
          console.error('PopperJS: an invalid property has been provided to the "' + n.name + '" modifier, valid properties are ' + Jo.map(function(a) {
            return '"' + a + '"';
          }).join(", ") + '; but "' + r + '" was provided.');
      }
      n.requires && n.requires.forEach(function(a) {
        e.find(function(t) {
          return t.name === a;
        }) == null && console.error(Rn(Up, String(n.name), a, a));
      });
    });
  });
}
function Fp(e, n) {
  var r = /* @__PURE__ */ new Set();
  return e.filter(function(a) {
    var t = n(a);
    if (!r.has(t))
      return r.add(t), !0;
  });
}
function Wp(e) {
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
var Qo = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.", Hp = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.", xo = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function _o() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  return !n.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function jp(e) {
  e === void 0 && (e = {});
  var n = e, r = n.defaultModifiers, a = r === void 0 ? [] : r, t = n.defaultOptions, i = t === void 0 ? xo : t;
  return function(l, s, u) {
    u === void 0 && (u = i);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, xo, i),
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
        g(), d.options = Object.assign({}, i, d.options, $), d.scrollParents = {
          reference: Cr(l) ? Fa(l) : l.contextElement ? Fa(l.contextElement) : [],
          popper: Fa(s)
        };
        var y = Lp(Wp([].concat(a, d.options.modifiers)));
        if (d.orderedModifiers = y.filter(function(p) {
          return p.enabled;
        }), process.env.NODE_ENV !== "production") {
          var C = Fp([].concat(y, d.options.modifiers), function(p) {
            var k = p.name;
            return k;
          });
          if (Yp(C), Bn(d.options.placement) === At) {
            var P = d.orderedModifiers.find(function(p) {
              var k = p.name;
              return k === "flip";
            });
            P || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
          }
          var S = Tn(s), B = S.marginTop, E = S.marginRight, z = S.marginBottom, I = S.marginLeft;
          [B, E, z, I].some(function(p) {
            return parseFloat(p);
          }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
        }
        return h(), c.update();
      },
      forceUpdate: function() {
        if (!f) {
          var T = d.elements, $ = T.reference, y = T.popper;
          if (!_o($, y)) {
            process.env.NODE_ENV !== "production" && console.error(Qo);
            return;
          }
          d.rects = {
            reference: Dp($, _i(y), d.options.strategy === "fixed"),
            popper: Ap(y)
          }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(p) {
            return d.modifiersData[p.name] = Object.assign({}, p.data);
          });
          for (var C = 0, P = 0; P < d.orderedModifiers.length; P++) {
            if (process.env.NODE_ENV !== "production" && (C += 1, C > 100)) {
              console.error(Hp);
              break;
            }
            if (d.reset === !0) {
              d.reset = !1, P = -1;
              continue;
            }
            var S = d.orderedModifiers[P], B = S.fn, E = S.options, z = E === void 0 ? {} : E, I = S.name;
            typeof B == "function" && (d = B({
              state: d,
              options: z,
              name: I,
              instance: c
            }) || d);
          }
        }
      },
      update: Rp(function() {
        return new Promise(function(w) {
          c.forceUpdate(), w(d);
        });
      }),
      destroy: function() {
        g(), f = !0;
      }
    };
    if (!_o(l, s))
      return process.env.NODE_ENV !== "production" && console.error(Qo), c;
    c.setOptions(u).then(function(w) {
      !f && u.onFirstUpdate && u.onFirstUpdate(w);
    });
    function h() {
      d.orderedModifiers.forEach(function(w) {
        var T = w.name, $ = w.options, y = $ === void 0 ? {} : $, C = w.effect;
        if (typeof C == "function") {
          var P = C({
            state: d,
            name: T,
            instance: c,
            options: y
          }), S = function() {
          };
          v.push(P || S);
        }
      });
    }
    function g() {
      v.forEach(function(w) {
        return w();
      }), v = [];
    }
    return c;
  };
}
var ot = {
  passive: !0
};
function Gp(e) {
  var n = e.state, r = e.instance, a = e.options, t = a.scroll, i = t === void 0 ? !0 : t, o = a.resize, l = o === void 0 ? !0 : o, s = bn(n.elements.popper), u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
  return i && u.forEach(function(d) {
    d.addEventListener("scroll", r.update, ot);
  }), l && s.addEventListener("resize", r.update, ot), function() {
    i && u.forEach(function(d) {
      d.removeEventListener("scroll", r.update, ot);
    }), l && s.removeEventListener("resize", r.update, ot);
  };
}
const qp = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Gp,
  data: {}
};
function Kp(e) {
  var n = e.state, r = e.name;
  n.modifiersData[r] = Ms({
    reference: n.rects.reference,
    element: n.rects.popper,
    strategy: "absolute",
    placement: n.placement
  });
}
const Xp = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Kp,
  data: {}
};
var Zp = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Jp(e) {
  var n = e.x, r = e.y, a = window, t = a.devicePixelRatio || 1;
  return {
    x: Pa(n * t) / t || 0,
    y: Pa(r * t) / t || 0
  };
}
function el(e) {
  var n, r = e.popper, a = e.popperRect, t = e.placement, i = e.variation, o = e.offsets, l = e.position, s = e.gpuAcceleration, u = e.adaptive, d = e.roundOffsets, v = e.isFixed, f = o.x, c = f === void 0 ? 0 : f, h = o.y, g = h === void 0 ? 0 : h, w = typeof d == "function" ? d({
    x: c,
    y: g
  }) : {
    x: c,
    y: g
  };
  c = w.x, g = w.y;
  var T = o.hasOwnProperty("x"), $ = o.hasOwnProperty("y"), y = _n, C = Nn, P = window;
  if (u) {
    var S = _i(r), B = "clientHeight", E = "clientWidth";
    if (S === bn(r) && (S = or(r), Tn(S).position !== "static" && l === "absolute" && (B = "scrollHeight", E = "scrollWidth")), S = S, t === Nn || (t === _n || t === Sr) && i === Ga) {
      C = ar;
      var z = v && S === P && P.visualViewport ? P.visualViewport.height : S[B];
      g -= z - a.height, g *= s ? 1 : -1;
    }
    if (t === _n || (t === Nn || t === ar) && i === Ga) {
      y = Sr;
      var I = v && S === P && P.visualViewport ? P.visualViewport.width : S[E];
      c -= I - a.width, c *= s ? 1 : -1;
    }
  }
  var p = Object.assign({
    position: l
  }, u && Zp), k = d === !0 ? Jp({
    x: c,
    y: g
  }) : {
    x: c,
    y: g
  };
  if (c = k.x, g = k.y, s) {
    var L;
    return Object.assign({}, p, (L = {}, L[C] = $ ? "0" : "", L[y] = T ? "0" : "", L.transform = (P.devicePixelRatio || 1) <= 1 ? "translate(" + c + "px, " + g + "px)" : "translate3d(" + c + "px, " + g + "px, 0)", L));
  }
  return Object.assign({}, p, (n = {}, n[C] = $ ? g + "px" : "", n[y] = T ? c + "px" : "", n.transform = "", n));
}
function Qp(e) {
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
    placement: Bn(n.placement),
    variation: qa(n.placement),
    popper: n.elements.popper,
    popperRect: n.rects.popper,
    gpuAcceleration: t,
    isFixed: n.options.strategy === "fixed"
  };
  n.modifiersData.popperOffsets != null && (n.styles.popper = Object.assign({}, n.styles.popper, el(Object.assign({}, d, {
    offsets: n.modifiersData.popperOffsets,
    position: n.options.strategy,
    adaptive: o,
    roundOffsets: s
  })))), n.modifiersData.arrow != null && (n.styles.arrow = Object.assign({}, n.styles.arrow, el(Object.assign({}, d, {
    offsets: n.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), n.attributes.popper = Object.assign({}, n.attributes.popper, {
    "data-popper-placement": n.placement
  });
}
const xp = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Qp,
  data: {}
};
function _p(e) {
  var n = e.state;
  Object.keys(n.elements).forEach(function(r) {
    var a = n.styles[r] || {}, t = n.attributes[r] || {}, i = n.elements[r];
    !cn(i) || !Mn(i) || (Object.assign(i.style, a), Object.keys(t).forEach(function(o) {
      var l = t[o];
      l === !1 ? i.removeAttribute(o) : i.setAttribute(o, l === !0 ? "" : l);
    }));
  });
}
function eh(e) {
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
      !cn(t) || !Mn(t) || (Object.assign(t.style, l), Object.keys(i).forEach(function(s) {
        t.removeAttribute(s);
      }));
    });
  };
}
const nh = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: _p,
  effect: eh,
  requires: ["computeStyles"]
};
var rh = [qp, Xp, xp, nh], ah = /* @__PURE__ */ jp({
  defaultModifiers: rh
});
function th(e) {
  return ["click", "hover"].includes(e);
}
function ih(e) {
  return ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end", "cover-top", "cover-top-start", "cover-top-end", "cover-bottom", "cover-bottom-start", "cover-bottom-end", "cover-left", "cover-right"].includes(e);
}
var oh = {
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
    validator: th
  },
  placement: {
    type: String,
    default: "cover-top-start",
    validator: ih
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F()
};
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
function nl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function rl(e) {
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
  n: lh,
  classes: sh
} = ee("menu");
function uh(e, n) {
  return b(), V(
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
    [q(e.$slots, "default"), (b(), pe(
      Za,
      {
        to: e.teleport
      },
      [re(
        Re,
        {
          name: e.n(),
          onAfterEnter: e.onOpened,
          onAfterLeave: e.onClosed
        },
        {
          default: ce(() => [$e(D(
            "div",
            {
              ref: "menu",
              style: X({
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
            [q(e.$slots, "menu")],
            38
          ), [[Ja, e.show]])]),
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
  render: uh,
  name: "VarMenu",
  props: oh,
  setup(e) {
    var n = M(null), r = M(null), a = M(!1), {
      zIndex: t
    } = xa(() => a.value, 1), i = null, o = !1, l = !1, s = !1, u = {
      width: 0,
      height: 0
    }, d = () => {
      var {
        width: S,
        height: B
      } = window.getComputedStyle(n.value);
      u = {
        width: De(S),
        height: De(B)
      };
    }, v = () => {
      e.trigger === "hover" && (s = !0, C());
    }, f = /* @__PURE__ */ function() {
      var S = rl(function* () {
        e.trigger === "hover" && (s = !1, yield Vn(), !l && P());
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), c = () => {
      e.trigger === "hover" && (l = !0);
    }, h = /* @__PURE__ */ function() {
      var S = rl(function* () {
        e.trigger === "hover" && (l = !1, yield Vn(), !s && P());
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), g = () => {
      C(), o = !0;
    }, w = () => {
      if (o) {
        o = !1;
        return;
      }
      a.value = !1, O(e["onUpdate:show"], !1);
    }, T = () => {
      d();
      var S = {
        x: De(e.offsetX),
        y: De(e.offsetY)
      };
      switch (e.placement) {
        case "cover-top":
          return {
            placement: "bottom",
            skidding: S.x,
            distance: S.y - u.height
          };
        case "cover-top-start":
          return {
            placement: "bottom-start",
            skidding: S.x,
            distance: S.y - u.height
          };
        case "cover-top-end":
          return {
            placement: "bottom-end",
            skidding: S.x,
            distance: S.y - u.height
          };
        case "cover-bottom":
          return {
            placement: "top",
            skidding: S.x,
            distance: -S.y - u.height
          };
        case "cover-bottom-start":
          return {
            placement: "top-start",
            skidding: S.x,
            distance: -S.y - u.height
          };
        case "cover-bottom-end":
          return {
            placement: "top-end",
            skidding: S.x,
            distance: -S.y - u.height
          };
        case "cover-left":
          return {
            placement: "right",
            skidding: S.y,
            distance: S.x - u.width
          };
        case "cover-right":
          return {
            placement: "left",
            skidding: S.y,
            distance: -S.x - u.width
          };
        case "left":
        case "left-start":
        case "left-end":
          return {
            placement: e.placement,
            skidding: S.y,
            distance: -S.x
          };
        case "top":
        case "top-start":
        case "top-end":
          return {
            placement: e.placement,
            skidding: S.x,
            distance: -S.y
          };
        case "bottom":
        case "bottom-start":
        case "bottom-end":
          return {
            placement: e.placement,
            skidding: S.x,
            distance: S.y
          };
        case "right":
        case "right-start":
        case "right-end":
          return {
            placement: e.placement,
            skidding: S.y,
            distance: S.x
          };
      }
    }, $ = () => {
      var {
        placement: S,
        skidding: B,
        distance: E
      } = T();
      return {
        placement: S,
        modifiers: [St({}, Vp, {
          enabled: a.value
        }), St({}, Pp, {
          options: {
            offset: [B, E]
          }
        })]
      };
    }, y = () => {
      i.setOptions($());
    }, C = () => {
      var {
        disabled: S
      } = e;
      S || (a.value = !0, O(e["onUpdate:show"], !0));
    }, P = () => {
      a.value = !1, O(e["onUpdate:show"], !1);
    };
    return te(() => e.show, (S) => {
      a.value = S != null ? S : !1;
    }, {
      immediate: !0
    }), te(() => e.offsetX, y), te(() => e.offsetY, y), te(() => e.placement, y), te(() => a.value, (S) => {
      S ? (y(), O(e.onOpen)) : O(e.onClose);
    }), te(() => e.trigger, (S) => {
      S === "click" ? document.addEventListener("click", w) : document.removeEventListener("click", w);
    }), te(() => e.disabled, P), Ue(() => {
      i = ah(n.value, r.value, $()), e.trigger === "click" && document.addEventListener("click", w);
    }), tr(() => {
      document.removeEventListener("click", w), i.destroy();
    }), {
      menu: r,
      host: n,
      hostSize: u,
      show: a,
      zIndex: t,
      n: lh,
      classes: sh,
      handleClick: g,
      handleMenuClose: w,
      handleMouseenter: v,
      handleMouseleave: f,
      handleMenuMouseenter: c,
      handleMenuMouseleave: h,
      resize: y,
      open: C,
      close: P
    };
  }
});
er.install = function(e) {
  e.component(er.name, er);
};
var Is = Symbol("SELECT_BIND_OPTION_KEY"), Ns = Symbol("SELECT_COUNT_OPTION_KEY");
function dh() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Is), {
    length: r
  } = pn(Ns);
  return {
    length: r,
    options: n,
    bindOptions: e
  };
}
function vh() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(Is), {
    index: r
  } = hn(Ns);
  if (!e || !n)
    throw Error("<var-option/> must in <var-select/>");
  return {
    index: r,
    select: n,
    bindSelect: e
  };
}
var fh = {
  label: {},
  value: {}
}, {
  n: ch,
  classes: mh
} = ee("option");
function ph(e, n) {
  var r = ie("var-checkbox"), a = Ke("ripple");
  return $e((b(), V(
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
    [D(
      "div",
      {
        class: m(e.classes(e.n("cover"), [e.optionSelected, e.n("--selected-background")])),
        style: X({
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
        onClick: n[1] || (n[1] = Dn(() => {
        }, ["stop"])),
        onChange: e.handleSelect
      },
      null,
      8,
      ["checked-color", "modelValue", "onChange"]
    )) : Q("v-if", !0), D(
      "div",
      {
        class: m(e.classes(e.n("text"), e.n("$--ellipsis")))
      },
      [q(e.$slots, "default", {}, () => [ge(
        ne(e.label),
        1
      )])],
      2
    )],
    6
  )), [[a]]);
}
const na = _({
  render: ph,
  name: "VarOption",
  directives: {
    Ripple: Fe
  },
  components: {
    VarCheckbox: vr
  },
  props: fh,
  setup(e) {
    var n = M(!1), r = W(() => n.value), a = W(() => e.label), t = W(() => e.value), {
      select: i,
      bindSelect: o
    } = vh(), {
      wrapWidth: l,
      multiple: s,
      focusColor: u,
      onSelect: d
    } = i, v = () => {
      n.value = !n.value, d(h);
    }, f = () => d(h), c = (g) => {
      n.value = g;
    }, h = {
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
    }), o(h), {
      n: ch,
      classes: mh,
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
var hh = {
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
  onClick: F(),
  "onUpdate:show": F()
};
function gh(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ct(e);
}
var {
  n: al
} = ee("overlay");
const ra = _({
  name: "VarOverlay",
  inheritAttrs: !1,
  props: hh,
  setup(e, n) {
    var {
      slots: r,
      attrs: a
    } = n, {
      zIndex: t
    } = xa(() => e.show, 1), {
      disabled: i
    } = Wi(), o = () => {
      O(e.onClick), O(e["onUpdate:show"], !1);
    };
    Vt(() => e.show, () => e.lockScroll);
    var l = () => re("div", Ee({
      class: al(),
      style: {
        zIndex: t.value - 1
      }
    }, a, {
      onClick: o
    }), [O(r.default)]), s = () => {
      var {
        show: u
      } = e;
      return re(Re, {
        name: al("--fade")
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
        return re(Za, {
          to: u,
          disabled: i.value
        }, gh(d = s()) ? d : {
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
var yh = {
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
  onChange: F(),
  "onUpdate:current": F(),
  "onUpdate:size": F()
}, {
  n: bh,
  classes: wh
} = ee("pagination"), Sh = ["item-mode", "onClick"];
function Ch(e, n) {
  var r = ie("var-icon"), a = ie("var-input"), t = ie("var-cell"), i = ie("var-menu"), o = Ke("ripple");
  return b(), V(
    "ul",
    {
      class: m(e.n())
    },
    [$e((b(), V(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("prev"), [e.current <= 1 || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[0] || (n[0] = (l) => e.clickItem("prev"))
      },
      [q(e.$slots, "prev", {}, () => [re(r, {
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
          onKeydown: n[3] || (n[3] = to((l) => e.setPage("simple", e.simpleValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      ), D("span", null, [ge(
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
      Ve,
      {
        key: 1
      },
      Be(e.pageList, (l, s) => $e((b(), V(
        "li",
        {
          key: e.toNumber(l) + s,
          "item-mode": e.getMode(l, s),
          class: m(e.classes(e.n("item"), e.n("$-elevation--2"), [l === e.current && !e.disabled, e.n("item--active")], [e.isHideEllipsis(l, s), e.n("item--hide")], [e.disabled, e.n("item--disabled")], [l === e.current && e.disabled, e.n("item--disabled--active")])),
          onClick: (u) => e.clickItem(l, s)
        },
        [ge(
          ne(l),
          1
        )],
        10,
        Sh
      )), [[o, {
        disabled: e.disabled
      }]])),
      128
    )), $e((b(), V(
      "li",
      {
        class: m(e.classes(e.n("item"), e.n("next"), [e.current >= e.pageCount || e.disabled, e.n("item--disabled")], [e.simple, e.n("item--simple"), e.n("$-elevation--2")])),
        onClick: n[4] || (n[4] = (l) => e.clickItem("next"))
      },
      [q(e.$slots, "next", {}, () => [re(r, {
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
          menu: ce(() => [(b(!0), V(
            Ve,
            null,
            Be(e.sizeOption, (l, s) => $e((b(), pe(
              t,
              {
                class: m(e.classes(e.n("list"), [e.size === l, e.n("list--active")])),
                key: s,
                onClick: (u) => e.clickSize(l)
              },
              {
                default: ce(() => [ge(
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
          default: ce(() => [D(
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
    )) : Q("v-if", !0), e.showQuickJumper && !e.simple ? (b(), V(
      "li",
      {
        key: 3,
        class: m(e.classes(e.n("quickly"), [e.disabled, "item--disabled"]))
      },
      [ge(
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
          onKeydown: n[9] || (n[9] = to((l) => e.setPage("quick", e.inputValue, l), ["enter"]))
        },
        null,
        8,
        ["modelValue", "disabled"]
      )],
      2
    )) : Q("v-if", !0), e.totalText ? (b(), V(
      "li",
      {
        key: 4,
        class: m(e.n("total"))
      },
      ne(e.totalText),
      3
    )) : Q("v-if", !0)],
    2
  );
}
const aa = _({
  render: Ch,
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
  props: yh,
  setup(e) {
    var n = M(!1), r = M(""), a = M("1"), t = M(!1), i = M(!1), o = M(A(e.current) || 1), l = M(A(e.size) || 10), s = M([]), u = W(() => Math.ceil(e.maxPagerCount / 2)), d = W(() => Math.ceil(A(e.total) / A(l.value))), v = W(() => {
      var C = l.value * (o.value - 1) + 1, P = Math.min(l.value * o.value, A(e.total));
      return [C, P];
    }), f = W(() => e.showTotal ? e.showTotal(A(e.total), v.value) : ""), c = (C, P) => qe(C) ? !1 : P === 1 ? t.value : i.value, h = (C, P) => qe(C) ? "basic" : P === 1 ? "head" : "tail", g = (C, P) => {
      C === o.value || e.disabled || (qe(C) ? o.value = C : C === "prev" ? o.value > 1 && (o.value -= 1) : C === "next" ? o.value < d.value && (o.value += 1) : C === "..." && (P === 1 ? o.value = Math.max(o.value - e.maxPagerCount, 1) : o.value = Math.min(o.value + e.maxPagerCount, d.value)));
    }, w = () => {
      e.disabled || (n.value = !0);
    }, T = (C) => {
      l.value = C, n.value = !1;
    }, $ = (C) => {
      var P = /^[1-9][0-9]*$/;
      return P.test(C);
    }, y = (C, P, S) => {
      if (S.target.blur(), $(P)) {
        var B = A(P);
        B > d.value && (B = d.value, a.value = "" + B), B !== o.value && (o.value = B);
      }
      C === "quick" && (r.value = ""), C === "simple" && !$(P) && (a.value = "" + o.value);
    };
    return te([() => e.current, () => e.size], (C) => {
      var [P, S] = C;
      o.value = A(P) || 1, l.value = A(S || 10);
    }), te([o, l], (C, P) => {
      var [S, B] = C, [E, z] = P;
      if (S > d.value) {
        o.value = d.value;
        return;
      }
      var I = [], {
        maxPagerCount: p,
        total: k,
        onChange: L
      } = e, Y = Math.ceil(A(k) / A(z)), G = d.value - (p - u.value) - 1;
      if (a.value = "" + S, d.value - 2 > p) {
        if (E === void 0 || d.value !== Y)
          for (var R = 2; R < p + 2; R++)
            I.push(R);
        if (S <= p && S < G) {
          I = [];
          for (var J = 1; J < p + 1; J++)
            I.push(J + 1);
          t.value = !0, i.value = !1;
        }
        if (S > p && S < G) {
          I = [];
          for (var j = 1; j < p + 1; j++)
            I.push(S + j - u.value);
          t.value = S === 2 && p === 1, i.value = !1;
        }
        if (S >= G) {
          I = [];
          for (var Z = 1; Z < p + 1; Z++)
            I.push(d.value - (p - Z) - 1);
          t.value = !1, i.value = !0;
        }
        I = [1, "...", ...I, "...", d.value];
      } else
        for (var N = 1; N <= d.value; N++)
          I.push(N);
      s.value = I, E !== void 0 && d.value > 0 && O(L, S, B), O(e["onUpdate:current"], S), O(e["onUpdate:size"], B);
    }, {
      immediate: !0
    }), {
      n: bh,
      classes: wh,
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
      clickItem: g,
      showMenu: w,
      clickSize: T,
      setPage: y,
      toNumber: A
    };
  }
});
aa.install = function(e) {
  e.component(aa.name, aa);
};
function Mi() {
  return Mi = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Mi.apply(this, arguments);
}
var kh = Mi({
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
  onChange: F(),
  onConfirm: F(),
  onCancel: F()
}, Ge(Qa, ["show", "onUpdate:show", "closeOnClickOverlay", "teleport", "onOpen", "onClose", "onOpened", "onClosed", "onClickOverlay", "onRouteChange"])), {
  n: $h,
  classes: Th
} = ee("picker"), tl = 300, Oh = 15, il = 0, Vh = ["onTouchstart", "onTouchmove", "onTouchend"], Eh = ["onTransitionend"];
function Mh(e, n) {
  var r = ie("var-button");
  return b(), pe(
    Da(e.dynamic ? e.n("$-popup") : e.Transition),
    Ee(e.dynamic ? {
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
      default: ce(() => [D(
        "div",
        Ee({
          class: e.n()
        }, e.$attrs),
        [D(
          "div",
          {
            class: m(e.n("toolbar"))
          },
          [q(e.$slots, "cancel", {}, () => [re(
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
                ne(e.dt(e.cancelButtonText, e.pack.pickerCancelButtonText)),
                1
              )]),
              _: 1
            },
            8,
            ["class", "text-color", "onClick"]
          )]), q(e.$slots, "title", {}, () => [D(
            "div",
            {
              class: m(e.n("title"))
            },
            ne(e.dt(e.title, e.pack.pickerTitle)),
            3
          )]), q(e.$slots, "confirm", {}, () => [re(
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
            style: X({
              height: e.columnHeight + "px"
            })
          },
          [(b(!0), V(
            Ve,
            null,
            Be(e.scrollColumns, (a) => (b(), V(
              "div",
              {
                class: m(e.n("column")),
                key: a.id,
                onTouchstart: (t) => e.handleTouchstart(t, a),
                onTouchmove: Dn((t) => e.handleTouchmove(t, a), ["prevent"]),
                onTouchend: (t) => e.handleTouchend(t, a)
              },
              [D(
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
                [(b(!0), V(
                  Ve,
                  null,
                  Be(a.column.texts, (t) => (b(), V(
                    "div",
                    {
                      class: m(e.n("option")),
                      style: X({
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
                Eh
              )],
              42,
              Vh
            ))),
            128
          )), D(
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
          ), D(
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
  render: Mh,
  name: "VarPicker",
  components: {
    VarButton: rn,
    VarPopup: Cn
  },
  inheritAttrs: !1,
  props: kh,
  setup(e) {
    var n = M([]), r = W(() => De(e.optionHeight)), a = W(() => De(e.optionCount)), t = W(() => a.value * r.value / 2 - r.value / 2), i = W(() => a.value * r.value), o = [], l = (p, k) => {
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
      G === p.translate && (p.scrolling = !1, !Y && B(p)), p.translate = G, p.duration = L;
    }, h = (p, k, L) => {
      p.translate += Math.abs(k / L) / 3e-3 * (k < 0 ? -1 : 1);
    }, g = (p, k) => {
      k.touching = !0, k.scrolling = !1, k.duration = 0, k.translate = Ft(k.scrollEl);
    }, w = (p, k) => {
      if (!!k.touching) {
        var {
          clientY: L
        } = p.touches[0], Y = k.prevY !== void 0 ? L - k.prevY : 0;
        k.prevY = L, k.translate += Y, u(k);
        var G = performance.now();
        G - k.momentumTime > tl && (k.momentumTime = G, k.momentumPrevY = k.translate);
      }
    }, T = (p, k) => {
      k.touching = !1, k.scrolling = !0, k.prevY = void 0;
      var L = k.translate - k.momentumPrevY, Y = performance.now() - k.momentumTime, G = Math.abs(L) >= Oh && Y <= tl;
      G && h(k, L, Y), k.index = v(k), c(k, k.index, G ? 1e3 : 200);
    }, $ = (p) => {
      p.scrolling = !1, B(p);
    }, y = (p) => p.map((k, L) => {
      var Y, G = ye(k) ? {
        texts: k
      } : k, R = {
        id: il++,
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
      return P(k, p, 0, !0), k;
    }, P = function(p, k, L, Y) {
      if (Y === void 0 && (Y = !1), ye(k) && k.length) {
        var G, R = Y && (G = e.cascadeInitialIndexes[p.length]) != null ? G : 0, J = {
          id: il++,
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
        p.push(J), c(J, J.index, 0, !0), P(p, J.columns[J.index].children, L + 1, Y);
      }
    }, S = (p) => {
      n.value.splice(n.value.indexOf(p) + 1), P(n.value, p.columns[p.index].children, p.columnIndex + 1);
    }, B = (p) => {
      var {
        cascade: k,
        onChange: L
      } = e;
      k && S(p);
      var Y = n.value.some((j) => j.scrolling);
      if (!Y) {
        var {
          texts: G,
          indexes: R
        } = f(), J = R.every((j, Z) => j === o[Z]);
        J || (o = [...R], O(L, G, R));
      }
    }, E = () => {
      if (e.cascade) {
        var p = n.value.find((k) => k.scrolling);
        p && (p.translate = Ft(p.scrollEl), p.index = v(p), c(p, p.index, 0, !0), p.scrolling = !1, S(p));
      } else
        n.value.forEach((k) => {
          k.translate = Ft(k.scrollEl), k.index = v(k), c(k, k.index, 0);
        });
    }, z = () => {
      E();
      var {
        texts: p,
        indexes: k
      } = f();
      o = [...k], O(e.onConfirm, p, k);
    }, I = () => {
      E();
      var {
        texts: p,
        indexes: k
      } = f();
      o = [...k], O(e.onCancel, p, k);
    };
    return te(() => e.columns, (p) => {
      n.value = e.cascade ? C(io(p)) : y(io(p));
      var {
        indexes: k
      } = f();
      o = [...k];
    }, {
      immediate: !0,
      deep: !0
    }), {
      n: $h,
      classes: Th,
      pack: We,
      optionHeight: r,
      optionCount: a,
      scrollColumns: n,
      columnHeight: i,
      center: t,
      Transition: Re,
      getScrollEl: l,
      handlePopupUpdateShow: s,
      handleTouchstart: g,
      handleTouchmove: w,
      handleTouchend: T,
      handleTransitionend: $,
      confirm: z,
      cancel: I,
      dt: $t
    };
  }
});
var en;
function kr(e) {
  return new Promise((n) => {
    kr.close();
    var r = ye(e) ? {
      columns: e
    } : e, a = Ne(r);
    a.dynamic = !0, a.teleport = "body", en = a;
    var {
      unmountInstance: t
    } = Aa(gr, a, {
      onConfirm: (i, o) => {
        O(a.onConfirm, i, o), n({
          state: "confirm",
          texts: i,
          indexes: o
        }), a.show = !1, en === a && (en = null);
      },
      onCancel: (i, o) => {
        O(a.onCancel, i, o), n({
          state: "cancel",
          texts: i,
          indexes: o
        }), a.show = !1, en === a && (en = null);
      },
      onClose: () => {
        O(a.onClose), n({
          state: "close"
        }), en === a && (en = null);
      },
      onClosed: () => {
        O(a.onClosed), t(), en === a && (en = null);
      },
      onRouteChange: () => {
        t(), en === a && (en = null);
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
  if (en != null) {
    var e = en;
    en = null, Me().then(() => {
      e.show = !1;
    });
  }
};
function Ph(e) {
  return ["linear", "circle"].includes(e);
}
var Ih = {
  mode: {
    type: String,
    default: "linear",
    validator: Ph
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
  n: Nh,
  classes: Bh
} = ee("progress"), Dh = ["viewBox"], Ah = ["cx", "cy", "r", "stroke-width"], zh = ["cx", "cy", "r", "stroke-width"];
function Lh(e, n) {
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
          style: X({
            height: e.toSizeUnit(e.lineWidth)
          })
        },
        [e.track ? (b(), V(
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
        )) : Q("v-if", !0), D(
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
      ), e.label ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("linear-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [ge(
          ne(e.linearProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.mode === "circle" ? (b(), V(
      "div",
      {
        key: 1,
        class: m(e.n("circle")),
        style: X({
          width: e.toSizeUnit(e.size),
          height: e.toSizeUnit(e.size)
        })
      },
      [(b(), V(
        "svg",
        {
          class: m(e.n("circle-svg")),
          style: X({
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
            style: X({
              strokeDasharray: e.circleProps.perimeter,
              stroke: e.trackColor
            })
          },
          null,
          14,
          Ah
        )) : Q("v-if", !0), D(
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
          zh
        )],
        14,
        Dh
      )), e.label ? (b(), V(
        "div",
        {
          key: 0,
          class: m(e.classes(e.n("circle-label"), [e.labelClass, e.labelClass]))
        },
        [q(e.$slots, "default", {}, () => [ge(
          ne(e.circleProps.roundValue),
          1
        )])],
        2
      )) : Q("v-if", !0)],
      6
    )) : Q("v-if", !0)],
    2
  );
}
const ta = _({
  render: Lh,
  name: "VarProgress",
  props: Ih,
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
      n: Nh,
      classes: Bh,
      toSizeUnit: we,
      multiplySizeUnit: Qe,
      linearProps: n,
      circleProps: r
    };
  }
});
ta.install = function(e) {
  e.component(ta.name, ta);
};
var Rh = {
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
  onRefresh: F(),
  "onUpdate:modelValue": F()
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
function Uh(e) {
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
  n: Yh,
  classes: Fh
} = ee("pull-refresh"), ll = 150;
function Wh(e, n) {
  var r = ie("var-icon");
  return b(), V(
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
    [D(
      "div",
      {
        ref: "controlNode",
        class: m(e.classes(e.n("control"), e.n("$-elevation--2"), [e.isSuccess, e.n("control-success")])),
        style: X(e.controlStyle)
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
    ), q(e.$slots, "default")],
    34
  );
}
const ia = _({
  render: Wh,
  name: "VarPullRefresh",
  components: {
    VarIcon: Oe
  },
  props: Rh,
  setup(e) {
    var n, r, a = M(0), t = M(null), i = M(null), o = M(0), l = M(-999), s = M("arrow-down"), u = M("default"), d = M(!1), v = M(!0), f = W(() => u.value !== "loading" && u.value !== "success" && !e.disabled), c = W(() => ({
      transform: "translate3d(0px, " + l.value + "px, 0px) translate(-50%, 0)",
      transition: d.value ? "transform " + e.animationDuration + "ms" : void 0,
      background: g.value ? e.successBgColor : e.bgColor,
      color: g.value ? e.successColor : e.color
    })), h = W(() => Math.abs(2 * a.value)), g = W(() => u.value === "success"), w = () => new Promise((S) => {
      window.setTimeout(() => {
        v.value = !0, S();
      }, ll);
    }), T = (S) => {
      !f.value || (u.value = "pulling", o.value = S.touches[0].clientY);
    }, $ = (S) => {
      var B = Tt(n);
      if (!(B > 0 || !f.value)) {
        B === 0 && l.value > a.value && S.cancelable && S.preventDefault();
        var E = (S.touches[0].clientY - o.value) / 2 + a.value;
        l.value = E >= h.value ? h.value : E, l.value >= h.value * 0.2 ? (v.value = !1, s.value = "refresh", r = w()) : s.value = "arrow-down";
      }
    }, y = /* @__PURE__ */ function() {
      var S = Uh(function* () {
        !f.value || (d.value = !0, l.value >= h.value * 0.2 ? (yield r, u.value = "loading", l.value = h.value * 0.3, O(e["onUpdate:modelValue"], !0), O(e.onRefresh)) : (u.value = "loosing", s.value = "arrow-down", l.value = a.value, setTimeout(() => {
          d.value = !1;
        }, A(e.animationDuration))));
      });
      return function() {
        return S.apply(this, arguments);
      };
    }(), C = () => {
      var {
        width: S
      } = i.value.getBoundingClientRect();
      l.value = -(S + S * 0.25), a.value = -(S + S * 0.25);
    }, P = () => {
      setTimeout(() => {
        u.value = "default", s.value = "arrow-down", d.value = !1;
      }, A(e.animationDuration));
    };
    return te(() => e.modelValue, (S) => {
      S === !1 && (d.value = !0, u.value = "success", s.value = "checkbox-marked-circle", setTimeout(() => {
        l.value = a.value, P();
      }, A(e.successDuration)));
    }), Ue(() => {
      n = Or(t.value), C();
    }), {
      n: Yh,
      classes: Fh,
      iconHasChanged: v,
      ICON_TRANSITION: ll,
      refreshStatus: u,
      freshNode: t,
      controlNode: i,
      touchStart: T,
      touchMove: $,
      touchEnd: y,
      iconName: s,
      controlStyle: c,
      isSuccess: g
    };
  }
});
ia.install = function(e) {
  e.component(ia.name, ia);
};
var Hh = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, Bs = Symbol("RADIO_GROUP_BIND_RADIO_KEY"), Ds = Symbol("RADIO_GROUP_COUNT_RADIO_KEY");
function jh() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Bs), {
    length: r
  } = pn(Ds);
  return {
    length: r,
    radios: n,
    bindRadios: e
  };
}
function Gh() {
  var {
    bindParent: e,
    parentProvider: n
  } = un(Bs), {
    index: r
  } = hn(Ds);
  return {
    index: r,
    radioGroup: n,
    bindRadioGroup: e
  };
}
var {
  n: qh,
  classes: Kh
} = ee("radio");
function Xh(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ke("ripple");
  return b(), V(
    "div",
    {
      class: m(e.n("wrap"))
    },
    [D(
      "div",
      Ee({
        class: e.n(),
        onClick: n[0] || (n[0] = function() {
          return e.handleClick && e.handleClick(...arguments);
        })
      }, e.$attrs),
      [$e((b(), V(
        "div",
        {
          class: m(e.classes(e.n("action"), [e.checked, e.n("--checked"), e.n("--unchecked")], [e.errorMessage || e.radioGroupErrorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
          style: X({
            color: e.checked ? e.checkedColor : e.uncheckedColor
          })
        },
        [e.checked ? q(e.$slots, "checked-icon", {
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
        )]) : q(e.$slots, "unchecked-icon", {
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
        [q(e.$slots, "default")],
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
  render: Xh,
  name: "VarRadio",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  inheritAttrs: !1,
  props: Hh,
  setup(e) {
    var n = M(!1), r = W(() => n.value === e.checkedValue), a = M(!1), {
      radioGroup: t,
      bindRadioGroup: i
    } = Gh(), {
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
          validateTrigger: P,
          rules: S,
          modelValue: B
        } = e;
        u(P, C, S, B);
      });
    }, c = (C) => {
      var {
        checkedValue: P,
        onChange: S
      } = e;
      t && n.value === P || (n.value = C, O(e["onUpdate:modelValue"], n.value), O(S, n.value), t == null || t.onToggle(P), f("onChange"));
    }, h = (C) => {
      var {
        disabled: P,
        readonly: S,
        uncheckedValue: B,
        checkedValue: E,
        onClick: z
      } = e;
      o != null && o.disabled.value || P || (O(z, C), !(o != null && o.readonly.value || S) && (a.value = !0, c(r.value ? B : E)));
    }, g = (C) => {
      var {
        checkedValue: P,
        uncheckedValue: S
      } = e;
      n.value = C === P ? P : S;
    }, w = () => {
      O(e["onUpdate:modelValue"], e.uncheckedValue), v();
    }, T = () => d(e.rules, e.modelValue), $ = (C) => {
      var {
        uncheckedValue: P,
        checkedValue: S
      } = e, B = ![P, S].includes(C);
      B && (C = r.value ? P : S), c(C);
    };
    te(() => e.modelValue, (C) => {
      n.value = C;
    }, {
      immediate: !0
    });
    var y = {
      sync: g,
      validate: T,
      resetValidation: v,
      reset: w
    };
    return O(i, y), O(l, y), {
      withAnimation: a,
      checked: r,
      errorMessage: s,
      radioGroupErrorMessage: t == null ? void 0 : t.errorMessage,
      formDisabled: o == null ? void 0 : o.disabled,
      formReadonly: o == null ? void 0 : o.readonly,
      n: qh,
      classes: Kh,
      handleClick: h,
      toggle: $,
      reset: w,
      validate: T,
      resetValidation: v
    };
  }
});
oa.install = function(e) {
  e.component(oa.name, oa);
};
function Zh(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Jh = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Zh
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange"]
  },
  rules: {
    type: Array
  },
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: Qh,
  classes: xh
} = ee("radio-group");
function _h(e, n) {
  var r = ie("var-form-details");
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
      [q(e.$slots, "default")],
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
  render: _h,
  name: "VarRadioGroup",
  components: {
    VarFormDetails: je
  },
  props: Jh,
  setup(e) {
    var {
      length: n,
      radios: r,
      bindRadios: a
    } = jh(), {
      bindForm: t
    } = yn(), {
      errorMessage: i,
      validateWithTrigger: o,
      validate: l,
      resetValidation: s
    } = gn(), u = W(() => i.value), d = (w) => {
      Me(() => {
        var {
          validateTrigger: T,
          rules: $,
          modelValue: y
        } = e;
        o(T, w, $, y);
      });
    }, v = () => r.forEach((w) => {
      var {
        sync: T
      } = w;
      return T(e.modelValue);
    }), f = (w) => {
      O(e["onUpdate:modelValue"], w), O(e.onChange, w), d("onChange");
    }, c = () => l(e.rules, e.modelValue), h = () => {
      O(e["onUpdate:modelValue"], void 0), s();
    };
    te(() => e.modelValue, v), te(() => n.value, v);
    var g = {
      onToggle: f,
      validate: c,
      reset: h,
      resetValidation: s,
      errorMessage: u
    };
    return O(t, g), a(g), {
      errorMessage: i,
      n: Qh,
      classes: xh,
      reset: h,
      validate: c,
      resetValidation: s
    };
  }
});
la.install = function(e) {
  e.component(la.name, la);
};
var eg = {
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
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: La
} = ee("rate"), ng = ["onClick"];
function rg(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = Ke("ripple");
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
        Ve,
        null,
        Be(e.toNumber(e.count), (i) => $e((b(), V(
          "div",
          {
            key: i,
            style: X(e.getStyle(i)),
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
              style: X({
                fontSize: e.toSizeUnit(e.size)
              })
            },
            null,
            8,
            ["class", "namespace", "name", "style"]
          )],
          14,
          ng
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
  render: rg,
  name: "VarRate",
  components: {
    VarIcon: Oe,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  props: eg,
  setup(e) {
    var {
      form: n,
      bindForm: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = (w) => {
      var {
        count: T,
        gap: $
      } = e;
      return {
        color: u(w).color,
        marginRight: w !== A(T) ? we($) : 0
      };
    }, s = (w) => {
      var {
        name: T,
        color: $
      } = u(w);
      return {
        [La("content")]: !0,
        [La("--disabled")]: (n == null ? void 0 : n.disabled.value) || e.disabled,
        [La("--error")]: a.value,
        [La("--primary")]: T !== e.emptyIcon && !$
      };
    }, u = (w) => {
      var {
        modelValue: T,
        disabled: $,
        disabledColor: y,
        color: C,
        half: P,
        emptyColor: S,
        icon: B,
        halfIcon: E,
        emptyIcon: z
      } = e, I = C;
      return ($ || n != null && n.disabled.value) && (I = y), w <= A(T) ? {
        color: I,
        name: B
      } : P && w <= A(T) + 0.5 ? {
        color: I,
        name: E
      } : {
        color: $ || n != null && n.disabled.value ? y : S,
        name: z
      };
    }, d = (w, T) => {
      if (e.half) {
        var {
          offsetWidth: $
        } = T.target;
        T.offsetX <= Math.floor($ / 2) && (w -= 0.5);
      }
      O(e["onUpdate:modelValue"], w);
    }, v = () => i(e.rules, A(e.modelValue)), f = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), c = (w, T) => {
      var {
        readonly: $,
        disabled: y,
        onChange: C
      } = e;
      $ || y || n != null && n.disabled.value || n != null && n.readonly.value || (d(w, T), O(C, w), f());
    }, h = () => {
      O(e["onUpdate:modelValue"], 0), o();
    }, g = {
      reset: h,
      validate: v,
      resetValidation: o
    };
    return O(r, g), {
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
      toNumber: A,
      n: La
    };
  }
});
sa.install = function(e) {
  e.component(sa.name, sa);
};
function ag(e) {
  return ["info", "success", "warning", "error", "question", "empty"].includes(e);
}
var tg = {
  imageSize: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "success",
    validator: ag
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
}, ig = (e) => ($r(""), e = e(), Tr(), e), og = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 3.6 20 20"
}, lg = /* @__PURE__ */ ig(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M11,9H13V7H11M11,20H13V11H11V20Z"
  },
  null,
  -1
)), sg = [lg];
function ug(e, n) {
  return b(), V("svg", og, sg);
}
const dg = _({
  render: ug
});
var vg = (e) => ($r(""), e = e(), Tr(), e), fg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "2 2 20 20"
}, cg = /* @__PURE__ */ vg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M19,3V5H19V19M17,8.4L13.4,12L17,15.6L15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4Z"
  },
  null,
  -1
)), mg = [cg];
function pg(e, n) {
  return b(), V("svg", fg, mg);
}
const hg = _({
  render: pg
});
var gg = (e) => ($r(""), e = e(), Tr(), e), yg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-6 -4 35 35"
}, bg = /* @__PURE__ */ gg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,21H14A2,2 0 0,1 12,23A2,2 0 0,1 10,21M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M17,11A5,5 0 0,0 12,6A5,5 0 0,0 7,11V18H17V11M19.75,3.19L18.33,4.61M1,11"
  },
  null,
  -1
)), wg = [bg];
function Sg(e, n) {
  return b(), V("svg", yg, wg);
}
const Cg = _({
  render: Sg
});
var {
  n: kg,
  classes: $g
} = ee("result");
function Tg(e, n) {
  return b(), V(
    Ve,
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
        class: m(e.classes(e.n("success-line"), e.n("success-line-long"))),
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
        class: m(e.n("success-circle")),
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
        class: m(e.n("success-line-fix"))
      },
      null,
      2
    ), D(
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
const Og = _({
  render: Tg,
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
      n: kg,
      classes: $g,
      toNumber: A
    };
  }
});
var Vg = (e) => ($r(""), e = e(), Tr(), e), Eg = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "-3 -3 30 30"
}, Mg = /* @__PURE__ */ Vg(() => /* @__PURE__ */ D(
  "path",
  {
    d: "M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.67,14.17C13,15 13,16 13,17H10C10,15.33 10,13.92 10.67,12.92C11.33,11.92 12.67,11.33 13.5,10.67C15.92,8.43 15.32,5.26 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"
  },
  null,
  -1
)), Pg = [Mg];
function Ig(e, n) {
  return b(), V("svg", Eg, Pg);
}
const Ng = _({
  render: Ig
});
var Bg = (e) => ($r(""), e = e(), Tr(), e), Dg = {
  viewBox: "-4 -4 32 32"
}, Ag = /* @__PURE__ */ Bg(() => /* @__PURE__ */ D(
  "path",
  {
    fill: "currentColor",
    d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"
  },
  null,
  -1
)), zg = [Ag];
function Lg(e, n) {
  return b(), V("svg", Dg, zg);
}
const Rg = _({
  render: Lg
});
var {
  n: Ug,
  classes: Yg
} = ee("result");
function Fg(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n(), e.n("$--box")))
    },
    [q(e.$slots, "image", {}, () => [e.type ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("image-container"))
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("image"), e.n(e.type))),
          style: X({
            width: e.circleSize,
            height: e.circleSize,
            borderWidth: e.borderSize
          })
        },
        [(b(), pe(
          Da(e.type),
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
    )) : Q("v-if", !0)]), q(e.$slots, "title", {}, () => [e.title ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("title"))
      },
      ne(e.title),
      3
    )) : Q("v-if", !0)]), q(e.$slots, "description", {}, () => [e.description ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("description"))
      },
      ne(e.description),
      3
    )) : Q("v-if", !0)]), e.$slots.footer ? (b(), V(
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
const ua = _({
  render: Fg,
  name: "VarResult",
  components: {
    Info: dg,
    Success: Og,
    Warning: Cg,
    Error: hg,
    Question: Ng,
    Empty: Rg
  },
  props: tg,
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
      n: Ug,
      classes: Yg,
      toNumber: A,
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
function Wg(e) {
  return ["flex-start", "flex-end", "center", "space-between", "space-around"].includes(e);
}
function Hg(e) {
  return ["flex-start", "center", "flex-end"].includes(e);
}
var jg = {
  gutter: {
    type: [String, Number],
    default: 0
  },
  justify: {
    type: String,
    default: "flex-start",
    validator: Wg
  },
  align: {
    type: String,
    default: "flex-start",
    validator: Hg
  },
  onClick: F()
}, {
  n: Gg,
  classes: qg
} = ee("row");
function Kg(e, n) {
  return b(), V(
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
const da = _({
  render: Kg,
  name: "VarRow",
  props: jg,
  setup(e) {
    var {
      cols: n,
      bindCols: r,
      length: a
    } = $v(), t = W(() => {
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
    return te(() => a.value, i), te(() => e.gutter, i), r(o), {
      n: Gg,
      classes: qg,
      average: t
    };
  }
});
da.install = function(e) {
  e.component(da.name, da);
};
function Xg(e) {
  return ["left", "right", "center"].includes(e);
}
var Zg = {
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
    validator: Xg
  },
  validateTrigger: {
    type: Array,
    default: () => ["onChange", "onClear", "onClose"]
  },
  rules: {
    type: Array
  },
  onFocus: F(),
  onBlur: F(),
  onClick: F(),
  onClear: F(),
  onClose: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: qt,
  classes: Jg
} = ee("select"), Qg = {
  key: 0
}, xg = {
  key: 1
};
function _g(e, n) {
  var r = ie("var-chip"), a = ie("var-icon"), t = ie("var-menu"), i = ie("var-form-details");
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
        style: X({
          color: e.errorMessage ? void 0 : e.isFocus ? e.focusColor : e.blurColor
        })
      },
      [D(
        "div",
        {
          class: m(e.classes(e.n("icon"), [!e.hint, e.n("--non-hint")]))
        },
        [q(e.$slots, "prepend-icon")],
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
            menu: ce(() => [D(
              "div",
              {
                ref: "menuEl",
                class: m(e.classes(e.n("scroller"), e.n("$-elevation--3")))
              },
              [q(e.$slots, "default")],
              2
            )]),
            default: ce(() => [D(
              "div",
              {
                class: m(e.classes(e.n("select"), [e.errorMessage, e.n("--error")], [e.formDisabled || e.disabled, e.n("--disabled")])),
                style: X({
                  textAlign: e.textAlign,
                  color: e.textColor
                })
              },
              [e.multiple ? (b(), V("div", Qg, [e.chip ? (b(), V(
                "div",
                {
                  key: 0,
                  class: m(e.n("chips"))
                },
                [(b(!0), V(
                  Ve,
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
                      onClick: n[0] || (n[0] = Dn(() => {
                      }, ["stop"])),
                      onClose: () => e.handleClose(o)
                    },
                    {
                      default: ce(() => [ge(
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
              ))])) : (b(), V(
                "span",
                xg,
                ne(e.label),
                1
              )), q(e.$slots, "arrow-icon", {
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
                style: X({
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
        [q(e.$slots, "append-icon", {}, () => [e.clearable ? (b(), pe(
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
    ), e.line ? (b(), V(
      "div",
      {
        key: 0,
        class: m(e.classes(e.n("line"), [e.formDisabled || e.disabled, e.n("--line-disabled")], [e.errorMessage, e.n("--line-error")])),
        style: X({
          background: e.errorMessage ? void 0 : e.blurColor
        })
      },
      [D(
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
    )) : Q("v-if", !0), re(
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
  render: _g,
  name: "VarSelect",
  components: {
    VarIcon: Oe,
    VarMenu: er,
    VarChip: fr,
    VarFormDetails: je
  },
  props: Zg,
  setup(e) {
    var n = M(null), r = M(!1), a = W(() => e.multiple), t = W(() => e.focusColor), i = M(""), o = M([]), l = M("0px"), s = M(0), {
      bindForm: u,
      form: d
    } = yn(), {
      length: v,
      options: f,
      bindOptions: c
    } = dh(), {
      errorMessage: h,
      validateWithTrigger: g,
      validate: w,
      resetValidation: T
    } = gn(), $ = M(null), y = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var x = H;
        o.value = x.map(S);
      }
      !U && !Gn(H) && (i.value = S(H)), !U && Gn(H) && (i.value = "");
    }, C = (U) => {
      Me(() => {
        var {
          validateTrigger: H,
          rules: x,
          modelValue: oe
        } = e;
        g(H, U, x, oe);
      });
    }, P = (U) => {
      var {
        value: H,
        label: x
      } = U;
      return H.value != null ? H.value : x.value;
    }, S = (U) => {
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
    }, B = () => {
      var {
        hint: U,
        modelValue: H
      } = e;
      if (!U && !Gn(H))
        return qt("--placeholder-hidden");
      if (U && (!Gn(H) || r.value))
        return qt("--placeholder-hint");
    }, E = () => n.value && window.getComputedStyle(n.value).width || "0px", z = () => {
      var {
        disabled: U,
        readonly: H,
        onFocus: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (l.value = E(), s.value = De(e.offsetY), r.value = !0, O(x), C("onFocus"));
    }, I = () => {
      var {
        disabled: U,
        readonly: H,
        onBlur: x
      } = e;
      d != null && d.disabled.value || d != null && d.readonly.value || U || H || (O(x), C("onBlur"));
    }, p = (U) => {
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
        }).map(P) : P(U);
        O(e["onUpdate:modelValue"], ve), O(se, ve), C("onChange"), !oe && (r.value = !1);
      }
    }, k = () => {
      var {
        disabled: U,
        readonly: H,
        multiple: x,
        clearable: oe,
        onClear: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || U || H || !oe)) {
        var ve = x ? [] : void 0;
        O(e["onUpdate:modelValue"], ve), O(se, ve), C("onClear");
      }
    }, L = (U) => {
      var {
        disabled: H,
        onClick: x
      } = e;
      d != null && d.disabled.value || H || (O(x, U), C("onClick"));
    }, Y = (U) => {
      var {
        disabled: H,
        readonly: x,
        modelValue: oe,
        onClose: se
      } = e;
      if (!(d != null && d.disabled.value || d != null && d.readonly.value || H || x)) {
        var ve = oe, Ce = f.find((_e) => {
          var {
            label: Pe
          } = _e;
          return Pe.value === U;
        }), Ye = ve.filter((_e) => {
          var Pe;
          return _e !== ((Pe = Ce.value.value) != null ? Pe : Ce.label.value);
        });
        O(e["onUpdate:modelValue"], Ye), O(se, Ye), C("onClose");
      }
    }, G = () => {
      var {
        multiple: U,
        modelValue: H
      } = e;
      if (U) {
        var x = H;
        f.forEach((oe) => oe.sync(x.includes(P(oe))));
      } else
        f.forEach((oe) => oe.sync(H === P(oe)));
      y();
    }, R = () => {
      l.value = E(), s.value = De(e.offsetY), r.value = !0;
    }, J = () => {
      r.value = !1;
    }, j = () => w(e.rules, e.modelValue), Z = () => {
      O(e["onUpdate:modelValue"], e.multiple ? [] : void 0), T();
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
      onSelect: p,
      reset: Z,
      validate: j,
      resetValidation: T
    };
    return c(N), O(u, N), {
      wrapEl: n,
      offsetY: s,
      isFocus: r,
      errorMessage: h,
      formDisabled: d == null ? void 0 : d.disabled,
      formReadonly: d == null ? void 0 : d.readonly,
      label: i,
      labels: o,
      menuEl: $,
      n: qt,
      classes: Jg,
      computePlaceholderState: B,
      handleFocus: z,
      handleBlur: I,
      handleClear: k,
      handleClick: L,
      handleClose: Y,
      reset: Z,
      validate: j,
      resetValidation: T,
      focus: R,
      blur: J
    };
  }
});
va.install = function(e) {
  e.component(va.name, va);
};
var ey = {
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
  n: ny,
  classes: ry
} = ee("skeleton");
function ay(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.classes(e.n("$--box"), e.n()))
    },
    [e.loading ? Q("v-if", !0) : (b(), V(
      "div",
      {
        key: 0,
        class: m(e.n("data"))
      },
      [q(e.$slots, "default")],
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
          style: X({
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
      )) : Q("v-if", !0), e.avatar || e.title || e.toNumber(e.rows) > 0 ? (b(), V(
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
            style: X({
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
        )) : Q("v-if", !0), e.title || e.toNumber(e.rows) > 0 ? (b(), V(
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
              style: X({
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
          )) : Q("v-if", !0), (b(!0), V(
            Ve,
            null,
            Be(e.toNumber(e.rows), (r, a) => (b(), V(
              "div",
              {
                class: m(e.n("row")),
                key: r,
                style: X({
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
        )) : Q("v-if", !0)],
        2
      )) : Q("v-if", !0)],
      2
    )) : Q("v-if", !0), e.loading && e.fullscreen ? (b(), V(
      "div",
      {
        key: 2,
        class: m(e.n("fullscreen")),
        style: X({
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
    )) : Q("v-if", !0)],
    2
  );
}
const fa = _({
  render: ay,
  name: "VarSkeleton",
  props: ey,
  setup() {
    return {
      n: ny,
      classes: ry,
      toSizeUnit: we,
      toNumber: A
    };
  }
});
fa.install = function(e) {
  e.component(fa.name, fa);
};
function ty(e) {
  return ["always", "normal", "never"].includes(e);
}
var iy = {
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
    validator: ty
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
  onChange: F(),
  onStart: F(),
  onEnd: F(),
  "onUpdate:modelValue": F()
}, {
  n: sl,
  classes: oy
} = ee("slider"), Ie;
(function(e) {
  e.First = "1", e.Second = "2";
})(Ie || (Ie = {}));
var ly = ["onTouchstart", "onTouchmove", "onTouchend", "onTouchcancel"];
function sy(e, n) {
  var r = ie("var-form-details");
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
            class: m(e.n("track-fill")),
            style: X(e.getFillStyle)
          },
          null,
          6
        )],
        2
      ), (b(!0), V(
        Ve,
        null,
        Be(e.thumbList, (a) => (b(), V(
          "div",
          {
            class: m(e.n("thumb")),
            key: a.enumValue,
            style: X({
              left: a.value + "%",
              zIndex: e.thumbsProps[a.enumValue].active ? 1 : void 0
            }),
            onTouchstart: Dn((t) => e.start(t, a.enumValue), ["stop"]),
            onTouchmove: Dn((t) => e.move(t, a.enumValue), ["stop"]),
            onTouchend: (t) => e.end(a.enumValue),
            onTouchcancel: (t) => e.end(a.enumValue)
          },
          [q(e.$slots, "button", {
            currentValue: a.text
          }, () => [D(
            "div",
            {
              class: m(e.n("thumb-block")),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
            "div",
            {
              class: m(e.classes(e.n("thumb-ripple"), [e.thumbsProps[a.enumValue].active, e.n("thumb-ripple--active")])),
              style: X({
                background: e.thumbColor
              })
            },
            null,
            6
          ), D(
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
            [D(
              "span",
              null,
              ne(a.text),
              1
            )],
            6
          )])],
          46,
          ly
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
  render: sy,
  name: "VarSlider",
  components: {
    VarFormDetails: je
  },
  props: iy,
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
      [Ie.First]: s(),
      [Ie.Second]: s()
    }), h = W(() => A(e.max) - A(e.min)), g = W(() => v.value / h.value * A(e.step)), w = W(() => {
      var {
        modelValue: j,
        range: Z
      } = e, N = [];
      return Z && ye(j) ? N = [{
        value: P(j[0]),
        enumValue: Ie.First,
        text: S(j[0])
      }, {
        value: P(j[1]),
        enumValue: Ie.Second,
        text: S(j[1])
      }] : qe(j) && (N = [{
        value: P(j),
        enumValue: Ie.First,
        text: S(j)
      }]), N;
    }), T = W(() => {
      var {
        activeColor: j,
        range: Z,
        modelValue: N
      } = e, U = Z && ye(N) ? P(Math.min(N[0], N[1])) : 0, H = Z && ye(N) ? P(Math.max(N[0], N[1])) - U : P(N);
      return {
        width: H + "%",
        left: U + "%",
        background: j
      };
    }), $ = W(() => e.disabled || (r == null ? void 0 : r.disabled.value)), y = W(() => e.readonly || (r == null ? void 0 : r.readonly.value)), C = (j) => e.labelVisible === "always" ? !0 : e.labelVisible === "never" ? !1 : c[j].active, P = (j) => {
      var {
        min: Z,
        max: N
      } = e;
      return j < A(Z) ? 0 : j > A(N) ? 100 : (j - A(Z)) / h.value * 100;
    }, S = (j) => {
      if (!qe(j))
        return 0;
      var Z = j;
      Z < Number(e.min) && (Z = Number(e.min)), Z > Number(e.max) && (Z = Number(e.max));
      var N = parseInt("" + Z, 10) === Z;
      return N ? Z : A(Z.toPrecision(5));
    }, B = (j, Z) => {
      var N = [], {
        step: U,
        range: H,
        modelValue: x,
        onChange: oe,
        min: se
      } = e, ve = A(U), Ce = Math.round(j / g.value), Ye = Ce * ve + A(se), _e = c[Z].percentValue * ve + A(se);
      if (c[Z].percentValue = Ce, H && ye(x) && (N = Z === Ie.First ? [Ye, x[1]] : [x[0], Ye]), _e !== Ye) {
        var Pe = H ? N.map((dn) => S(dn)) : S(Ye);
        O(oe, Pe), O(e["onUpdate:modelValue"], Pe), u();
      }
    }, E = (j) => {
      if (!e.range)
        return Ie.First;
      var Z = c[Ie.First].percentValue * g.value, N = c[Ie.Second].percentValue * g.value, U = Math.abs(j - Z), H = Math.abs(j - N);
      return U <= H ? Ie.First : Ie.Second;
    }, z = (j, Z) => {
      v.value || (v.value = d.value.offsetWidth), !($.value || y.value) && (O(e.onStart), f.value = !0, c[Z].startPosition = j.touches[0].clientX);
    }, I = (j, Z) => {
      if (!($.value || y.value || !f.value)) {
        var N = j.touches[0].clientX - c[Z].startPosition + c[Z].currentLeft;
        c[Z].active = !0, N <= 0 ? N = 0 : N >= v.value && (N = v.value), B(N, Z);
      }
    }, p = (j) => {
      var {
        range: Z,
        modelValue: N,
        onEnd: U,
        step: H,
        min: x
      } = e;
      if (!($.value || y.value)) {
        var oe = [];
        c[j].currentLeft = c[j].percentValue * g.value, c[j].active = !1;
        var se = c[j].percentValue * A(H) + A(x);
        Z && ye(N) && (oe = j === Ie.First ? [se, N[1]] : [N[0], se]), O(U, Z ? oe : se), f.value = !1;
      }
    }, k = (j) => {
      if (!($.value || y.value) && !j.target.closest("." + sl("thumb"))) {
        var Z = j.clientX - fu(j.currentTarget), N = E(Z);
        B(Z, N), p(N);
      }
    }, L = () => {
      var j = A(e.step);
      return isNaN(j) ? (console.warn('[Varlet] Slider: type of prop "step" should be Number'), !1) : j < 0 ? (console.warn('[Varlet] Slider: "step" should be > 0'), !1) : !0;
    }, Y = () => {
      var {
        range: j,
        modelValue: Z
      } = e;
      return j && !ye(Z) ? (console.error('[Varlet] Slider: "modelValue" should be an Array'), !1) : !j && ye(Z) ? (console.error('[Varlet] Slider: "modelValue" should be a Number'), !1) : j && ye(Z) && Z.length < 2 ? (console.error('[Varlet] Slider: "modelValue" should have two value'), !1) : !0;
    }, G = function(j, Z) {
      j === void 0 && (j = e.modelValue), Z === void 0 && (Z = A(e.step));
      var N = (U) => {
        var {
          min: H,
          max: x
        } = e;
        return U < A(H) ? 0 : U > A(x) ? h.value / Z : (U - A(H)) / Z;
      };
      e.range && ye(j) ? (c[Ie.First].percentValue = N(j[0]), c[Ie.First].currentLeft = c[Ie.First].percentValue * g.value, c[Ie.Second].percentValue = N(j[1]), c[Ie.Second].currentLeft = c[Ie.Second].percentValue * g.value) : qe(j) && (c[Ie.First].currentLeft = N(j) * g.value);
    }, R = () => {
      var j = e.range ? [0, 0] : 0;
      O(e["onUpdate:modelValue"], j), o();
    }, J = {
      reset: R,
      validate: l,
      resetValidation: o
    };
    return O(n, J), te([() => e.modelValue, () => e.step], (j) => {
      var [Z, N] = j;
      !L() || !Y() || f.value || G(Z, A(N));
    }), te(v, () => G()), Ue(() => {
      !L() || !Y() || (v.value = d.value.offsetWidth);
    }), {
      n: sl,
      classes: oy,
      Thumbs: Ie,
      sliderEl: d,
      getFillStyle: T,
      isDisabled: $,
      errorMessage: a,
      thumbsProps: c,
      thumbList: w,
      multiplySizeUnit: Qe,
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
function uy(e) {
  var n = ["top", "center", "bottom"];
  return n.includes(e);
}
function dy(e) {
  return eo.includes(e);
}
var As = {
  type: {
    type: String,
    validator: dy
  },
  position: {
    type: String,
    default: "top",
    validator: uy
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
  loadingType: Ge(qn, "type"),
  loadingSize: Ge(qn, "size"),
  loadingRadius: Ge(qn, "radius"),
  loadingColor: Pi({}, Ge(qn, "color"), {
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
  onOpen: F(),
  onOpened: F(),
  onClose: F(),
  onClosed: F(),
  "onUpdate:show": F(),
  _update: {
    type: String
  }
}, {
  n: vy,
  classes: fy
} = ee("snackbar"), cy = {
  success: "checkbox-marked-circle",
  warning: "warning",
  info: "information",
  error: "error",
  loading: ""
};
function my(e, n) {
  var r = ie("var-icon"), a = ie("var-loading");
  return $e((b(), V(
    "div",
    {
      class: m(e.n()),
      style: X({
        pointerEvents: e.isForbidClick ? "auto" : "none",
        zIndex: e.zIndex
      })
    },
    [D(
      "div",
      {
        class: m(e.classes(e.n("wrapper"), e.n("wrapper-" + e.position), e.n("$-elevation--4"), [e.vertical, e.n("vertical")], [e.type && e.SNACKBAR_TYPE.includes(e.type), e.n("wrapper-" + e.type)])),
        style: X({
          zIndex: e.zIndex
        })
      },
      [D(
        "div",
        {
          class: m([e.n("content"), e.contentClass])
        },
        [q(e.$slots, "default", {}, () => [ge(
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
        )) : Q("v-if", !0), e.type === "loading" ? (b(), pe(
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
  )), [[Ja, e.show]]);
}
const zs = _({
  render: my,
  name: "VarSnackbarCore",
  components: {
    VarLoading: On,
    VarIcon: Oe
  },
  props: As,
  setup(e) {
    var n = M(null), {
      zIndex: r
    } = xa(() => e.show, 1);
    Vt(() => e.show, () => e.lockScroll);
    var a = W(() => e.type === "loading" || e.forbidClick), t = W(() => e.type ? cy[e.type] : ""), i = () => {
      n.value = setTimeout(() => {
        e.type !== "loading" && O(e["onUpdate:show"], !1);
      }, e.duration);
    };
    return te(() => e.show, (o) => {
      o ? (O(e.onOpen), i()) : o === !1 && (clearTimeout(n.value), O(e.onClose));
    }), te(() => e._update, () => {
      clearTimeout(n.value), i();
    }), Ue(() => {
      e.show && (O(e.onOpen), i());
    }), {
      SNACKBAR_TYPE: eo,
      n: vy,
      classes: fy,
      zIndex: r,
      iconName: t,
      isForbidClick: a
    };
  }
});
var {
  n: py
} = ee("snackbar");
function hy(e, n) {
  var r = ie("var-snackbar-core");
  return b(), pe(
    Za,
    {
      to: e.teleport,
      disabled: e.disabled
    },
    [re(
      Re,
      {
        name: e.n() + "-fade",
        onAfterEnter: e.onOpened,
        onAfterLeave: e.onClosed
      },
      {
        default: ce(() => [re(
          r,
          Ee(e.$props, {
            class: e.n("transition")
          }),
          {
            action: ce(() => [q(e.$slots, "action")]),
            default: ce(() => [q(e.$slots, "default", {}, () => [ge(
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
  render: hy,
  name: "VarSnackbar",
  components: {
    VarSnackbarCore: zs
  },
  props: As,
  setup() {
    var {
      disabled: e
    } = Wi();
    return {
      n: py,
      disabled: e
    };
  }
});
function Ka() {
  return Ka = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, Ka.apply(this, arguments);
}
function gy(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ct(e);
}
var eo = ["loading", "success", "warning", "info", "error"], ul = 0, Ii = !1, Ls, Na = !1, mn = Ne([]), yy = {
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
}, by = {
  name: "var-snackbar-fade",
  tag: "div",
  class: "var-transition-group"
}, wy = {
  setup() {
    return () => {
      var e = mn.map((r) => {
        var {
          id: a,
          reactiveSnackOptions: t,
          _update: i
        } = r, o = document.querySelector(".var-transition-group");
        t.forbidClick || t.type === "loading" ? o.classList.add("var-pointer-auto") : o.classList.remove("var-pointer-auto"), Na && (t.position = "top");
        var l = Na ? "relative" : "absolute", s = Ka({
          position: l
        }, Ty(t.position));
        return re(zs, Ee(t, {
          key: a,
          style: s,
          "data-id": a,
          _update: i,
          show: t.show,
          "onUpdate:show": (u) => t.show = u
        }), null);
      }), n = ln.zIndex;
      return re(tu, Ee(by, {
        style: {
          zIndex: n
        },
        onAfterEnter: Sy,
        onAfterLeave: Cy
      }), gy(e) ? e : {
        default: () => [e]
      });
    };
  }
}, An = function(e) {
  var n = Xe(e) || qe(e) ? {
    content: String(e)
  } : e, r = Ne(Ka({}, yy, n));
  r.show = !0, Ii || (Ii = !0, Ls = Aa(wy).unmountInstance);
  var {
    length: a
  } = mn, t = {
    id: ul++,
    reactiveSnackOptions: r
  };
  if (a === 0 || Na)
    ky(t);
  else {
    var i = "update-" + ul;
    $y(r, i);
  }
  return {
    clear() {
      !Na && mn.length ? mn[0].reactiveSnackOptions.show = !1 : r.show = !1;
    }
  };
};
eo.forEach((e) => {
  An[e] = (n) => (Ri(n) ? n.type = e : n = {
    content: n,
    type: e
  }, An(n));
});
An.install = function(e) {
  e.component(ma.name, ma);
};
An.allowMultiple = function(e) {
  e === void 0 && (e = !1), e !== Na && (mn.forEach((n) => {
    n.reactiveSnackOptions.show = !1;
  }), Na = e);
};
An.clear = function() {
  mn.forEach((e) => {
    e.reactiveSnackOptions.show = !1;
  });
};
An.Component = ma;
function Sy(e) {
  var n = e.getAttribute("data-id"), r = mn.find((a) => a.id === A(n));
  r && O(r.reactiveSnackOptions.onOpened);
}
function Cy(e) {
  e.parentElement && e.parentElement.classList.remove("var-pointer-auto");
  var n = e.getAttribute("data-id"), r = mn.find((t) => t.id === A(n));
  r && (r.animationEnd = !0, O(r.reactiveSnackOptions.onClosed));
  var a = mn.every((t) => t.animationEnd);
  a && (O(Ls), mn = Ne([]), Ii = !1);
}
function ky(e) {
  mn.push(e);
}
function $y(e, n) {
  var [r] = mn;
  r.reactiveSnackOptions = Ka({}, r.reactiveSnackOptions, e), r._update = n;
}
function Ty(e) {
  return e === void 0 && (e = "top"), e === "bottom" ? {
    [e]: "5%"
  } : {
    top: e === "top" ? "5%" : "45%"
  };
}
ma.install = function(e) {
  e.component(ma.name, ma);
};
var Rs = (e) => ["mini", "small", "normal", "large"].includes(e), Oy = (e) => Rs(e) || ye(e) || qe(e) || Xe(e), Vy = (e) => ["start", "end", "center", "space-around", "space-between"].includes(e), Ey = {
  align: {
    type: String
  },
  size: {
    type: [String, Number, Array],
    default: "normal",
    validator: Oy
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
function tn(e) {
  return "calc(" + e + " / 2)";
}
function My(e, n, r) {
  var {
    direction: a,
    justify: t,
    index: i,
    lastIndex: o
  } = r, l = "0";
  return a === "row" && (t === "start" || t === "center" || t === "end" ? i !== o ? l = tn(e) + " " + n + " " + tn(e) + " 0" : l = tn(e) + " 0" : t === "space-around" ? l = tn(e) + " " + tn(n) : t === "space-between" && (i === 0 ? l = tn(e) + " " + tn(n) + " " + tn(e) + " 0" : i === o ? l = tn(e) + " 0 " + tn(e) + " " + tn(n) : l = tn(e) + " " + tn(n))), a === "column" && i !== o && (l = "0 0 " + e + " 0"), l;
}
var {
  n: Kt,
  classes: Py
} = ee("space");
const pa = _({
  name: "VarSpace",
  props: Ey,
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
      } = e, f = (i = O(r.default)) != null ? i : [], c = Rs(v), [h, g] = a(v, c), w = (y) => {
        var C = [];
        return y.forEach((P) => {
          if (P.type !== iu) {
            if (P.type === Ve && ye(P.children)) {
              P.children.forEach((S) => {
                C.push(S);
              });
              return;
            }
            C.push(P);
          }
        }), C;
      };
      f = w(f);
      var T = f.length - 1, $ = f.map((y, C) => {
        var P = My(h, g, {
          direction: d,
          justify: l,
          index: C,
          lastIndex: T
        });
        return re("div", {
          style: {
            margin: P
          }
        }, [y]);
      });
      return re("div", {
        class: Py(Kt(), Kt("$--box"), [o, Kt("--inline")]),
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
var Iy = {
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
}, Us = Symbol("STEPS_BIND_STEP_KEY"), Ys = Symbol("STEPS_COUNT_STEP_KEY");
function Ny() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Us), {
    length: r
  } = pn(Ys);
  return {
    length: r,
    step: n,
    bindStep: e
  };
}
function By() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Us), {
    index: r
  } = hn(Ys);
  if (!e || !n || !r)
    throw Error("[Varlet] Steps: <step/> must in <steps>");
  return {
    index: r,
    steps: e,
    bindSteps: n
  };
}
var {
  n: Dy,
  classes: Ay
} = ee("step"), zy = {
  key: 3
};
function Ly(e, n) {
  var r = ie("var-icon");
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
            style: X({
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
            zy,
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
          [q(e.$slots, "default")],
          2
        )],
        2
      ), e.isLastChild ? Q("v-if", !0) : (b(), V(
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
const ha = _({
  render: Ly,
  name: "VarStep",
  components: {
    VarIcon: Oe
  },
  props: Iy,
  setup() {
    var e = M(null), n = M(""), r = M(!1), {
      index: a,
      steps: t,
      bindSteps: i
    } = By(), {
      active: o,
      length: l,
      activeColor: s,
      inactiveColor: u,
      direction: d,
      clickStep: v
    } = t, f = W(() => o.value === a.value), c = W(() => a.value !== -1 && o.value > a.value), h = {
      index: a
    }, g = () => v(a.value), w = (T) => {
      d.value === "horizontal" && (e.value = T);
    };
    return i(h), te(l, (T) => {
      if (r.value = T - 1 === a.value, e.value) {
        var $ = e.value.offsetWidth / 2 - 14;
        n.value = "0 -" + $ + "px";
      }
    }), {
      n: Dy,
      classes: Ay,
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
      getRef: w
    };
  }
});
ha.install = function(e) {
  e.component(ha.name, ha);
};
function Ry(e) {
  return ["horizontal", "vertical"].includes(e);
}
var Uy = {
  active: {
    type: [String, Number],
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: Ry
  },
  activeColor: {
    type: String
  },
  inactiveColor: {
    type: String
  },
  onClickStep: F()
}, {
  n: Yy
} = ee("steps");
function Fy(e, n) {
  return b(), V(
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
const ga = _({
  render: Fy,
  name: "VarSteps",
  props: Uy,
  setup(e) {
    var n = W(() => e.active), r = W(() => e.activeColor), a = W(() => e.inactiveColor), t = W(() => e.direction), {
      length: i,
      bindStep: o
    } = Ny(), l = (u) => {
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
      n: Yy
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
    return () => bl(e.tag, {
      class: Wy(),
      style: Vl(e.styleVars)
    }, O(r.default));
  }
});
var Xt = [];
function Xa(e) {
  Xt.forEach((r) => document.documentElement.style.removeProperty(r)), Xt.length = 0;
  var n = Vl(e != null ? e : {});
  Object.entries(n).forEach((r) => {
    var [a, t] = r;
    document.documentElement.style.setProperty(a, t), Xt.push(a);
  });
}
Xa.Component = ya;
ya.install = function(e) {
  e.component(ya.name, ya);
};
Xa.install = function(e) {
  e.component(ya.name, ya);
};
var Hy = {
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
  onClick: F(),
  onChange: F(),
  "onUpdate:modelValue": F()
}, {
  n: jy,
  classes: Gy
} = ee("switch");
function qy(e, n) {
  var r = ie("var-loading"), a = ie("var-form-details"), t = Ke("ripple");
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
        style: X(e.styleComputed.switch)
      },
      [D(
        "div",
        {
          style: X(e.styleComputed.track),
          class: m(e.classes(e.n("track"), [e.modelValue === e.activeValue, e.n("track--active")], [e.errorMessage, e.n("track--error")]))
        },
        null,
        6
      ), $e((b(), V(
        "div",
        {
          class: m(e.classes(e.n("ripple"), [e.modelValue === e.activeValue, e.n("ripple--active")])),
          style: X(e.styleComputed.ripple)
        },
        [D(
          "div",
          {
            style: X(e.styleComputed.handle),
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
          )) : Q("v-if", !0)],
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
  render: qy,
  name: "VarSwitch",
  components: {
    VarLoading: On,
    VarFormDetails: je
  },
  directives: {
    Ripple: Fe
  },
  props: Hy,
  setup(e) {
    var {
      bindForm: n,
      form: r
    } = yn(), {
      errorMessage: a,
      validateWithTrigger: t,
      validate: i,
      resetValidation: o
    } = gn(), l = () => i(e.rules, e.modelValue), s = () => Me(() => t(["onChange"], "onChange", e.rules, e.modelValue)), u = W(() => {
      var {
        size: h,
        modelValue: g,
        color: w,
        closeColor: T,
        loadingColor: $,
        activeValue: y
      } = e;
      return {
        handle: {
          width: Qe(h),
          height: Qe(h),
          backgroundColor: g === y ? w : T,
          color: $
        },
        ripple: {
          left: g === y ? Qe(h, 0.5) : "-" + Qe(h, 0.5),
          color: g === y ? w : T || "#999",
          width: Qe(h, 2),
          height: Qe(h, 2)
        },
        track: {
          height: Qe(h, 0.72),
          width: Qe(h, 1.9),
          borderRadius: Qe(h, 2 / 3),
          filter: g === y || a != null && a.value ? void 0 : "brightness(.6)",
          backgroundColor: g === y ? w : T
        },
        switch: {
          height: Qe(h, 1.2),
          width: Qe(h, 2)
        }
      };
    }), d = W(() => {
      var {
        size: h = "5.333vw"
      } = e;
      return Qe(h, 0.4);
    }), v = (h) => {
      var {
        onClick: g,
        onChange: w,
        disabled: T,
        loading: $,
        readonly: y,
        modelValue: C,
        activeValue: P,
        inactiveValue: S,
        "onUpdate:modelValue": B
      } = e;
      if (O(g, h), !(T || $ || y || r != null && r.disabled.value || r != null && r.readonly.value)) {
        var E = C === P ? S : P;
        O(w, E), O(B, E), s();
      }
    }, f = () => {
      O(e["onUpdate:modelValue"], e.inactiveValue), o();
    }, c = {
      reset: f,
      validate: l,
      resetValidation: o
    };
    return O(n, c), {
      n: jy,
      classes: Gy,
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
var Ky = {
  name: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  onClick: F()
}, Fs = Symbol("TABS_BIND_TAB_KEY"), Ws = Symbol("TABS_COUNT_TAB_KEY");
function Xy() {
  var {
    childProviders: e,
    bindChildren: n
  } = sn(Fs), {
    length: r
  } = pn(Ws);
  return {
    length: r,
    tabList: e,
    bindTabList: n
  };
}
function Zy() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Fs), {
    index: r
  } = hn(Ws);
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
  classes: Jy
} = ee("tab");
function Qy(e, n) {
  var r = Ke("ripple");
  return $e((b(), V(
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
const wa = _({
  render: Qy,
  name: "VarTab",
  directives: {
    Ripple: Fe
  },
  props: Ky,
  setup(e) {
    var n = M(null), r = W(() => e.name), a = W(() => e.disabled), t = W(() => n.value), {
      index: i,
      tabs: o,
      bindTabs: l
    } = Zy(), {
      onTabClick: s,
      active: u,
      activeColor: d,
      inactiveColor: v,
      disabledColor: f,
      itemDirection: c,
      resize: h
    } = o, g = {
      name: r,
      index: i,
      disabled: a,
      element: t
    };
    l(g);
    var w = () => {
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
      return y ? lt("$-tab--disabled") : u.value === C || u.value === (i == null ? void 0 : i.value) ? lt("$-tab--active") : lt("$-tab--inactive");
    }, $ = (y) => {
      var {
        disabled: C,
        name: P,
        onClick: S
      } = e;
      C || (O(S, P != null ? P : i.value, y), s(g));
    };
    return te(() => e.name, h), te(() => e.disabled, h), {
      n: lt,
      classes: Jy,
      tabEl: n,
      active: u,
      activeColor: d,
      inactiveColor: v,
      itemDirection: c,
      computeColorStyle: w,
      computeColorClass: T,
      handleClick: $
    };
  }
});
wa.install = function(e) {
  e.component(wa.name, wa);
};
var Hs = Symbol("TABS_ITEMS_BIND_TAB_ITEM_KEY"), js = Symbol("TABS_ITEMS_COUNT_TAB_ITEM_KEY");
function xy() {
  var {
    bindChildren: e,
    childProviders: n
  } = sn(Hs), {
    length: r
  } = pn(js);
  return {
    length: r,
    tabItemList: n,
    bindTabItem: e
  };
}
function _y() {
  var {
    parentProvider: e,
    bindParent: n
  } = un(Hs), {
    index: r
  } = hn(js);
  if (!e || !n || !r)
    throw Error("<var-tab-item/> must in <var-tabs-items/>");
  return {
    index: r,
    tabsItems: e,
    bindTabsItems: n
  };
}
var e0 = {
  name: {
    type: [String, Number]
  }
}, {
  n: n0,
  classes: r0
} = ee("tab-item");
function a0(e, n) {
  var r = ie("var-swipe-item");
  return b(), pe(
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
const Sa = _({
  render: a0,
  name: "VarTabItem",
  components: {
    VarSwipeItem: Qn
  },
  props: e0,
  setup(e) {
    var n = M(!1), r = M(!1), a = W(() => e.name), {
      index: t,
      bindTabsItems: i
    } = _y(), o = (s) => {
      !r.value && s && (r.value = !0), n.value = s;
    }, l = {
      index: t,
      name: a,
      setCurrent: o
    };
    return i(l), {
      n: n0,
      classes: r0,
      current: n,
      initSlot: r
    };
  }
});
Sa.install = function(e) {
  e.component(Sa.name, Sa);
};
var {
  n: t0,
  classes: i0
} = ee("table");
function o0(e, n) {
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
          style: X({
            width: e.toSizeUnit(e.fullWidth)
          })
        },
        [q(e.$slots, "default")],
        6
      )],
      2
    ), e.$slots.footer ? (b(), V(
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
const Ca = _({
  render: o0,
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
      n: t0,
      classes: i0
    };
  }
});
Ca.install = function(e) {
  e.component(Ca.name, Ca);
};
function dl(e) {
  return ["horizontal", "vertical"].includes(e);
}
var l0 = {
  active: {
    type: [String, Number],
    default: 0
  },
  layoutDirection: {
    type: String,
    default: "horizontal",
    validator: dl
  },
  itemDirection: {
    type: String,
    default: "horizontal",
    validator: dl
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
  stickyCssMode: Ge(vt, "cssMode"),
  stickyZIndex: Ge(vt, "zIndex"),
  offsetTop: Ge(vt, "offsetTop"),
  safeArea: {
    type: Boolean,
    default: !1
  },
  onClick: F(),
  onChange: F(),
  "onUpdate:active": F()
};
function vl(e, n, r, a, t, i, o) {
  try {
    var l = e[i](o), s = l.value;
  } catch (u) {
    r(u);
    return;
  }
  l.done ? n(s) : Promise.resolve(s).then(a, t);
}
function fl(e) {
  return function() {
    var n = this, r = arguments;
    return new Promise(function(a, t) {
      var i = e.apply(n, r);
      function o(s) {
        vl(i, a, t, o, l, "next", s);
      }
      function l(s) {
        vl(i, a, t, o, l, "throw", s);
      }
      o(void 0);
    });
  };
}
var {
  n: s0,
  classes: u0
} = ee("tabs");
function d0(e, n) {
  return b(), pe(
    Da(e.sticky ? e.n("$-sticky") : e.Transition),
    {
      ref: e.sticky ? "stickyComponent" : void 0,
      "css-mode": e.stickyCssMode,
      "offset-top": e.sticky ? e.offsetTop : void 0,
      "z-index": e.sticky ? e.stickyZIndex : void 0
    },
    {
      default: ce(() => [D(
        "div",
        Ee({
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
          [q(e.$slots, "default"), D(
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
    ["css-mode", "offset-top", "z-index"]
  );
}
const ka = _({
  render: d0,
  name: "VarTabs",
  components: {
    VarSticky: xn
  },
  inheritAttrs: !1,
  props: l0,
  setup(e) {
    var n = M("0px"), r = M("0px"), a = M("0px"), t = M("0px"), i = M(!1), o = M(null), l = W(() => e.active), s = W(() => e.activeColor), u = W(() => e.inactiveColor), d = W(() => e.disabledColor), v = W(() => e.itemDirection), f = M(null), {
      tabList: c,
      bindTabList: h,
      length: g
    } = Xy(), w = (I) => {
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
    }), y = () => {
      if (g.value !== 0) {
        var {
          active: I
        } = e;
        if (qe(I)) {
          var p = I > g.value - 1 ? g.value - 1 : 0;
          return O(e["onUpdate:active"], p), $(p);
        }
      }
    }, C = () => {
      i.value = c.length >= 5;
    }, P = (I) => {
      var {
        element: p
      } = I, k = p.value;
      e.layoutDirection === "horizontal" ? (n.value = (k == null ? void 0 : k.offsetWidth) + "px", a.value = (k == null ? void 0 : k.offsetLeft) + "px") : (r.value = (k == null ? void 0 : k.offsetHeight) + "px", t.value = (k == null ? void 0 : k.offsetTop) + "px");
    }, S = (I) => {
      var {
        element: p
      } = I;
      if (!!i.value) {
        var k = o.value, L = p.value;
        if (e.layoutDirection === "horizontal") {
          var Y = L.offsetLeft + L.offsetWidth / 2 - k.offsetWidth / 2;
          Wa(k, {
            left: Y,
            animation: Jt
          });
        } else {
          var G = L.offsetTop + L.offsetHeight / 2 - k.offsetHeight / 2;
          Wa(k, {
            top: G,
            animation: Jt
          });
        }
      }
    }, B = () => {
      var I = T() || $() || y();
      !I || I.disabled.value || (C(), P(I), S(I));
    }, E = /* @__PURE__ */ function() {
      var I = fl(function* () {
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
      resize: B,
      onTabClick: w
    };
    return h(z), te(() => g.value, /* @__PURE__ */ fl(function* () {
      yield Vn(), yield B();
    })), te(() => e.active, B), Ue(() => window.addEventListener("resize", B)), tr(() => window.removeEventListener("resize", B)), {
      stickyComponent: f,
      indicatorWidth: n,
      indicatorHeight: r,
      indicatorX: a,
      indicatorY: t,
      scrollable: i,
      scrollerEl: o,
      Transition: Re,
      toSizeUnit: we,
      n: s0,
      classes: u0,
      resize: B,
      resizeSticky: E
    };
  }
});
ka.install = function(e) {
  e.component(ka.name, ka);
};
var v0 = {
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
  "onUpdate:active": F()
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
function f0(e) {
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
  n: c0
} = ee("tabs-items");
function m0(e, n) {
  var r = ie("var-swipe");
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
      default: ce(() => [q(e.$slots, "default")]),
      _: 3
    },
    8,
    ["class", "loop", "touchable", "onChange"]
  );
}
const $a = _({
  render: m0,
  name: "VarTabsItems",
  components: {
    VarSwipe: Jn
  },
  props: v0,
  setup(e) {
    var n = M(null), {
      tabItemList: r,
      bindTabItem: a,
      length: t
    } = xy(), i = (f) => r.find((c) => {
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
      !h || (r.forEach((g) => {
        var {
          setCurrent: w
        } = g;
        return w(!1);
      }), h.setCurrent(!0), (c = n.value) == null || c.to(h.index.value));
    }, u = (f) => {
      var c, h = r.find((w) => {
        var {
          index: T
        } = w;
        return T.value === f;
      }), g = (c = h.name.value) != null ? c : h.index.value;
      O(e["onUpdate:active"], g);
    }, d = () => n.value, v = {};
    return a(v), te(() => e.active, s), te(() => t.value, /* @__PURE__ */ f0(function* () {
      yield Vn(), s(e.active);
    })), {
      swipe: n,
      n: c0,
      handleSwipeChange: u,
      getSwipe: d
    };
  }
});
$a.install = function(e) {
  e.component($a.name, $a);
};
const p0 = {
  "--action-sheet-background": "#1e1e1e",
  "--action-sheet-title-color": "#aaa",
  "--action-sheet-action-item-color": "#fff"
}, h0 = {
  "--badge-default-color": "#555"
}, g0 = {
  "--button-default-color": "#303030"
}, y0 = {
  "--card-background": "#303030",
  "--card-title-color": "#ffffff",
  "--card-outline-color": "rgba(255, 255, 255, 0.2)",
  "--card-subtitle-color": "#aaaaaa",
  "--card-description-color": "#aaaaaa"
}, b0 = {
  "--cell-description-color": "#aaa",
  "--cell-border-color": "#545454"
}, w0 = {
  "--checkbox-unchecked-color": "#fff"
}, S0 = {
  "--chip-default-color": "#555"
}, C0 = {
  "--collapse-background": "#303030",
  "--collapse-text-color": "#fff",
  "--collapse-border-top": "thin solid rgba(255, 255, 255, 0.12)"
}, k0 = {
  "--date-picker-main-color": "#fff",
  "--date-picker-body-background-color": "#303030",
  "--day-picker-head-item-color": "#aaaaaa"
}, $0 = {
  "--dialog-background": "#1e1e1e",
  "--dialog-message-color": "#bbb"
}, T0 = {
  "--divider-color": "rgba(255, 255, 255, 0.2)",
  "--divider-text-color": "#aaa"
}, O0 = {
  "--input-input-text-color": "#fff",
  "--input-blur-color": "rgb(255, 255, 255, .7)"
}, V0 = {
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
}, M0 = {
  "--popup-content-background-color": "#1e1e1e"
}, P0 = {
  "--pull-refresh-background": "#303030"
}, I0 = {
  "--radio-unchecked-color": "#fff"
}, N0 = {
  "--result-background": "#303030",
  "--result-title-color": "#ffffff",
  "--result-description-color": "#aaaaaa",
  "--result-question-color": "#7f8e96",
  "--result-question-border-color": "rgba(151,194,216,0.3)",
  "--result-empty-color": "#adadad",
  "--result-empty-border-color": "rgba(232,229,229,0.3)"
}, B0 = {
  "--select-select-text-color": "#fff",
  "--select-blur-color": "rgb(255, 255, 255, .7)",
  "--select-scroller-background": "#303030"
}, D0 = {
  "--skeleton-card-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-animation-background": `linear-gradient(
        90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))
      `,
  "--skeleton-avatar-background-color": "hsla(0,0%,100%,.12)",
  "--skeleton-title-background-color": "hsla(0,0%,100%,.12)"
}, A0 = {
  "--step-content-color": "rgba(255, 255, 255, .38)",
  "--step-content-active-color": "#fff",
  "--step-line-background": "#fff"
}, z0 = {
  "--switch-track-background": "#727272",
  "--switch-handle-background": "#727272"
}, L0 = {
  "--tab-inactive-color": "rgba(255, 255, 255, .65)"
}, R0 = {
  "--table-background": "#303030",
  "--table-thead-th-text-color": "rgba(255, 255, 255, 0.6)",
  "--table-tbody-tr-hover-background": "#4c4b4b",
  "--table-thead-border-bottom": "thin solid rgba(255, 255, 255, 0.12)",
  "--table-tbody-tr-border-bottom": "thin solid rgba(255, 255, 255, 0.12)"
}, U0 = {
  "--time-picker-clock-container-background": "#545454",
  "--time-picker-body-background": "#303030",
  "--time-picker-clock-item-disable-color": "#aaaaaa"
}, Y0 = {
  "--uploader-action-background": "#303030",
  "--uploader-action-icon-color": "#fff",
  "--uploader-file-name-background": "#303030",
  "--uploader-file-name-color": "#aaa",
  "--uploader-file-cover-background": "#303030"
}, F0 = {
  "--tabs-background": "#1e1e1e"
}, W0 = {
  "--app-bar-color": "#272727"
}, H0 = {
  "--bottom-navigation-background-color": "#272727",
  "--bottom-navigation-border-color": "#444"
}, j0 = {
  "--bottom-navigation-item-active-background-color": "#272727"
}, G0 = {
  "--menu-background-color": "#272727"
}, q0 = {
  "--breadcrumb-inactive-color": "#aaa"
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
const K0 = Ni({
  "--color-body": "#1e1e1e",
  "--color-text": "#fff",
  "--color-primary": "#4a7afe",
  "--color-info": "#10afef",
  "--color-success": "#10c48f",
  "--color-warning": "#ff8800",
  "--color-danger": "#ef5350",
  "--color-disabled": "#404040",
  "--color-text-disabled": "#757575"
}, g0, b0, y0, U0, k0, D0, F0, L0, M0, $0, p0, S0, h0, Y0, C0, P0, z0, A0, V0, R0, O0, B0, I0, w0, T0, E0, W0, H0, j0, G0, N0, q0);
var Bi = {
  dark: K0
}, fn = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], xe = ["00", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"], ml = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
function X0(e) {
  return ["ampm", "24hr"].includes(e);
}
var Z0 = {
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
    validator: X0
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
  "onUpdate:modelValue": F(),
  onChange: F()
}, Gs = (e, n) => e === "24hr" || n === "am", no = (e, n, r) => {
  var a = fn.findIndex((i) => A(i) === A(r)), t = Gs(e, n) ? r : xe[a];
  return {
    hourStr: t,
    hourNum: A(t)
  };
}, nn = (e) => {
  var [n, r, a] = e.split(":");
  return {
    hour: A(n),
    minute: A(r),
    second: A(a)
  };
}, qs = (e) => {
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
  } = no(t, i, o), f = !1, c = !1;
  if (u.includes(d))
    return !0;
  if (l && !s) {
    var {
      hour: h,
      minute: g
    } = nn(l);
    f = h === v && a > g;
  }
  if (!l && s) {
    var {
      hour: w,
      minute: T
    } = nn(s);
    f = w === v && a < T;
  }
  if (l && s) {
    var {
      hour: $,
      minute: y
    } = nn(l), {
      hour: C,
      minute: P
    } = nn(s);
    f = C === v && a < P || $ === v && a > y;
  }
  return (n = e.allowedTime) != null && n.minutes && (c = (r = e.allowedTime) == null ? void 0 : r.minutes(a)), f || c;
}, Ks = (e) => {
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
  } = no(t, i, o), c = !1, h = !1;
  if (d.includes(v))
    return !0;
  if (s && !u) {
    var {
      hour: g,
      minute: w,
      second: T
    } = nn(s);
    c = g === f && w < l || w === l && a > T;
  }
  if (!s && u) {
    var {
      hour: $,
      minute: y,
      second: C
    } = nn(u);
    c = $ === f && y > l || y === l && a > C;
  }
  if (s && u) {
    var {
      hour: P,
      minute: S,
      second: B
    } = nn(s), {
      hour: E,
      minute: z,
      second: I
    } = nn(u);
    c = P === f && S < l || E === f && z > l || P === f && S === l && a > B || E === f && z === l && a < I;
  }
  return (n = e.allowedTime) != null && n.seconds && (h = (r = e.allowedTime) == null ? void 0 : r.seconds(a)), c || h;
}, {
  n: J0,
  classes: Q0
} = ee("time-picker");
function x0(e, n) {
  return b(), V(
    "div",
    {
      class: m(e.n("clock"))
    },
    [D(
      "div",
      {
        class: m(e.n("clock-hand")),
        style: X(e.handStyle)
      },
      null,
      6
    ), (b(!0), V(
      Ve,
      null,
      Be(e.timeScales, (r, a) => (b(), V(
        "div",
        {
          class: m(e.classes(e.n("clock-item"), [e.isActive(a, !1), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
          key: r,
          style: X(e.getStyle(a, r, !1))
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
        Ve,
        null,
        Be(e.hours24, (r, a) => (b(), V(
          "div",
          {
            class: m(e.classes(e.n("clock-item"), [e.isActive(a, !0), e.n("clock-item--active")], [e.isDisable(r), e.n("clock-item--disable")])),
            key: r,
            style: X(e.getStyle(a, r, !0))
          },
          ne(r),
          7
        ))),
        128
      ))],
      2
    )) : Q("v-if", !0)],
    2
  );
}
const _0 = _({
  render: x0,
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
    } = n, a = M(null), t = M([]), i = M([]), o = W(() => ({
      transform: "rotate(" + A(e.rad) + "deg)",
      height: e.isInner && e.type === "hour" ? "calc(50% - 40px)" : "calc(50% - 4px)",
      backgroundColor: d(),
      borderColor: d()
    })), l = W(() => {
      if (e.rad !== void 0) {
        var w = e.rad / 30;
        return w >= 0 ? w : w + 12;
      }
    }), s = W(() => e.type === "hour" ? fn : ml), u = (w, T) => {
      var $;
      w = ($ = w) != null ? $ : e.type === "minute" ? e.time.minute : e.time.second;
      var y = e.type === "minute" ? qs : Ks, C = {
        time: A(w),
        format: e.format,
        ampm: e.ampm,
        hour: e.time.hour,
        minute: A(e.time.minute),
        max: e.max,
        min: e.min,
        allowedTime: e.allowedTime,
        disableHour: t.value
      };
      return T && e.type === "minute" && Reflect.deleteProperty(C, "minute"), y(C);
    }, d = () => {
      if (l.value === void 0)
        return e.color;
      var w = e.isInner ? xe[l.value] : s.value[l.value];
      return s.value === ml ? u() ? "#bdbdbd" : e.color : f(w) ? "#bdbdbd" : e.color;
    }, v = (w, T) => T ? l.value === w && e.isInner : l.value === w && (!e.isInner || e.type !== "hour"), f = (w) => {
      if (e.type === "hour") {
        if (Gs(e.format, e.ampm))
          return t.value.includes(w);
        var T = fn.findIndex(($) => $ === w);
        return i.value.includes(T);
      }
      return u(w, !0);
    }, c = (w, T, $) => {
      var y = 2 * Math.PI / 12 * w - Math.PI / 2, C = 50 * (1 + Math.cos(y)), P = 50 * (1 + Math.sin(y)), S = () => v(w, $) ? f(T) ? {
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
        color: E
      } = S();
      return {
        left: C + "%",
        top: P + "%",
        backgroundColor: B,
        color: E
      };
    }, h = () => {
      var {
        width: w,
        height: T
      } = a.value.getBoundingClientRect();
      return {
        width: w,
        height: T
      };
    }, g = () => {
      if (l.value !== void 0) {
        var w = e.ampm === "am" ? fn : xe;
        return yr(w[l.value], 2, "0");
      }
    };
    return te([l, () => e.isInner], (w, T) => {
      var [$, y] = w, [C, P] = T, S = $ === C && y === P;
      if (!(S || e.type !== "hour" || l.value === void 0)) {
        var B = y ? xe[l.value] : g(), E = e.useSeconds ? ":" + e.time.second : "", z = B + ":" + e.time.minute + E;
        e.preventNextUpdate || r("update", z), r("change-prevent-update");
      }
    }), te(() => e.rad, (w, T) => {
      if (!(e.type === "hour" || w === void 0 || T === void 0)) {
        var $ = w / 6 >= 0 ? w / 6 : w / 6 + 60, y = T / 6 >= 0 ? T / 6 : T / 6 + 60;
        if ($ !== y) {
          var C, {
            hourStr: P
          } = no(e.format, e.ampm, e.time.hour);
          if (e.type === "minute") {
            var S = ae().minute($).format("mm"), B = e.useSeconds ? ":" + e.time.second : "";
            C = P + ":" + S + B;
          }
          if (e.type === "second") {
            var E = ae().second($).format("ss"), z = e.useSeconds ? ":" + E : "";
            C = P + ":" + e.time.minute + z;
          }
          r("update", C);
        }
      }
    }), te([() => e.max, () => e.min, () => e.allowedTime], (w) => {
      var [T, $, y] = w;
      if (t.value = [], T && !$) {
        var {
          hour: C
        } = nn(T), P = fn.filter((J) => A(J) > C), S = xe.filter((J) => A(J) > C);
        t.value = [...P, ...S];
      }
      if (!T && $) {
        var {
          hour: B
        } = nn($), E = fn.filter((J) => A(J) < B), z = xe.filter((J) => A(J) < B);
        t.value = [...E, ...z];
      }
      if (T && $) {
        var {
          hour: I
        } = nn(T), {
          hour: p
        } = nn($), k = fn.filter((J) => A(J) < p || A(J) > I), L = xe.filter((J) => A(J) < p || A(J) > I);
        t.value = [...k, ...L];
      }
      if (y != null && y.hours) {
        var {
          hours: Y
        } = y, G = fn.filter((J) => !Y(A(J))), R = xe.filter((J) => !Y(A(J)));
        t.value = [.../* @__PURE__ */ new Set([...t.value, ...G, ...R])];
      }
      i.value = t.value.map((J) => xe.findIndex((j) => J === j)).filter((J) => J >= 0);
    }, {
      immediate: !0
    }), {
      n: J0,
      classes: Q0,
      hours24: xe,
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
  n: eb,
  classes: nb
} = ee("time-picker"), rb = (e) => ($r(""), e = e(), Tr(), e), ab = /* @__PURE__ */ rb(() => /* @__PURE__ */ D(
  "span",
  null,
  ":",
  -1
)), tb = {
  key: 0
};
function ib(e, n) {
  var r = ie("clock");
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
        style: X({
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
        ), ab, D(
          "div",
          {
            class: m(e.classes(e.n("title-btn"), [e.type === "minute", e.n("title-btn--active")])),
            onClick: n[1] || (n[1] = (a) => e.checkPanel("minute"))
          },
          ne(e.time.minute),
          3
        ), e.useSeconds ? (b(), V("span", tb, ":")) : Q("v-if", !0), e.useSeconds ? (b(), V(
          "div",
          {
            key: 1,
            class: m(e.classes(e.n("title-btn"), [e.type === "second", e.n("title-btn--active")])),
            onClick: n[2] || (n[2] = (a) => e.checkPanel("second"))
          },
          ne(e.time.second),
          3
        )) : Q("v-if", !0)],
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
      )) : Q("v-if", !0)],
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
          Re,
          {
            name: e.n() + "-panel-fade"
          },
          {
            default: ce(() => [(b(), pe(
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
  render: ib,
  name: "VarTimePicker",
  components: {
    Clock: _0
  },
  props: Z0,
  setup(e) {
    var n = M(null), r = M(null), a = M(null), t = M(!1), i = M(!1), o = M(!1), l = M(!1), s = M(!1), u = M(void 0), d = M(0), v = M(0), f = M("hour"), c = M("am"), h = M(!1), g = M(!1), w = M({
      hour: "00",
      minute: "00",
      second: "00"
    }), T = Ne({
      x: 0,
      y: 0
    }), $ = Ne({
      x: [],
      y: []
    }), y = W(() => f.value === "hour" ? u.value : f.value === "minute" ? d.value : v.value), C = (N) => {
      O(e["onUpdate:modelValue"], N), O(e.onChange, N);
    }, P = (N) => N * 57.29577951308232, S = (N) => {
      l.value = !1, g.value = !1, f.value = N;
    }, B = (N) => {
      var {
        disableHour: U
      } = a.value, H = fn.findIndex((se) => A(se) === A(w.value.hour)), x = N === "am" ? fn : xe, oe = [...x.slice(H), ...x.slice(0, H)];
      return oe.find((se, ve) => (i.value = ve !== 0, !U.includes(se)));
    }, E = (N) => {
      if (!e.readonly) {
        c.value = N;
        var U = B(N);
        if (!!U) {
          var H = e.useSeconds ? ":" + w.value.second : "", x = yr(U, 2, "0") + ":" + w.value.minute + H;
          C(x);
        }
      }
    }, z = (N, U) => {
      var H = N >= $.x[0] && N <= $.x[1], x = U >= $.y[0] && U <= $.y[1];
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
    }, p = (N) => {
      var U = N / 30;
      return U >= 0 ? U : U + 12;
    }, k = () => {
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
    }, L = (N, U, H) => {
      var {
        disableHour: x
      } = a.value;
      o.value = z(N, U);
      var oe = Math.round(H / 30) * 30 + 90, se = p(oe), ve = t.value ? fn[se] : xe[se];
      if (x.includes(ve) || (t.value = e.format === "24hr" ? z(N, U) : !1), t.value === o.value) {
        var Ce = t.value || c.value === "pm" ? xe[se] : fn[se];
        h.value = x.includes(Ce), !h.value && (u.value = oe, l.value = !0);
      }
    }, Y = (N) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(N / 6) * 6 + 90, x = H / 6 >= 0 ? H / 6 : H / 6 + 60, oe = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: w.value.hour,
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      g.value = qs(oe), !g.value && (d.value = H, s.value = !0);
    }, G = (N) => {
      var {
        disableHour: U
      } = a.value, H = Math.round(N / 6) * 6 + 90, x = H / 6 >= 0 ? H / 6 : H / 6 + 60, oe = {
        time: x,
        format: e.format,
        ampm: c.value,
        hour: w.value.hour,
        minute: A(w.value.minute),
        max: e.max,
        min: e.min,
        disableHour: U,
        allowedTime: e.allowedTime
      };
      Ks(oe) || (v.value = H);
    }, R = () => {
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
        } = k();
        $.x = [oe, se], $.y = [ve, Ce];
      }
    }, J = (N) => {
      if (N.preventDefault(), !e.readonly) {
        R();
        var {
          clientX: U,
          clientY: H
        } = N.touches[0], x = U - T.x, oe = H - T.y, se = Math.round(P(Math.atan2(oe, x)));
        f.value === "hour" ? L(U, H, se) : f.value === "minute" ? Y(se) : G(se);
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
        u.value = (oe === "12" ? 0 : A(oe)) * 30, d.value = A(ve) * 6, v.value = A(Ce) * 6, w.value = I(N), e.format !== "24hr" && (c.value = yr("" + U, 2, "0") === se && xe.includes(se) ? "pm" : "am"), t.value = e.format === "24hr" && xe.includes(se);
      }
    }, {
      immediate: !0
    }), {
      n: eb,
      classes: nb,
      getRad: y,
      time: w,
      container: n,
      inner: a,
      picker: r,
      isInner: t,
      type: f,
      ampm: c,
      isPreventNextUpdate: i,
      moveHand: J,
      checkPanel: S,
      checkAmpm: E,
      end: j,
      update: C,
      changePreventUpdate: Z
    };
  }
});
Ta.install = function(e) {
  e.component(Ta.name, Ta);
};
var ob = {
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
  onBeforeRead: F(),
  onAfterRead: F(),
  onBeforeRemove: F(),
  onRemove: F(),
  onOversize: F(),
  "onUpdate:modelValue": F()
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
function hl(e) {
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
  n: lb,
  classes: sb
} = ee("uploader"), ub = 0, db = ["onClick"], vb = ["onClick"], fb = ["src", "alt"], cb = ["multiple", "accept", "capture", "disabled"], mb = ["src"];
function pb(e, n) {
  var r = ie("var-icon"), a = ie("var-form-details"), t = ie("var-popup"), i = Ke("ripple");
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
        Ve,
        null,
        Be(e.files, (o) => $e((b(), V(
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
              onClick: Dn((l) => e.handleRemove(o), ["stop"])
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
            vb
          )) : Q("v-if", !0), o.cover ? (b(), V(
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
            fb
          )) : Q("v-if", !0), D(
            "div",
            {
              class: m(e.classes(e.n("file-indicator"), [o.state === "success", e.n("--success")], [o.state === "error", e.n("--error")]))
            },
            null,
            2
          )],
          10,
          db
        )), [[i, {
          disabled: e.disabled || e.formDisabled || e.readonly || e.formReadonly || !e.ripple
        }]])),
        128
      )), !e.maxlength || e.modelValue.length < e.maxlength ? $e((b(), V(
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
          cb
        ), q(e.$slots, "default", {}, () => [re(
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
        default: ce(() => {
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
            mb
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
const Oa = _({
  render: pb,
  name: "VarUploader",
  directives: {
    Ripple: Fe
  },
  components: {
    VarIcon: Oe,
    VarPopup: Cn,
    VarFormDetails: je
  },
  props: ob,
  setup(e) {
    var n = M(null), r = M(!1), a = M(null), t = W(() => {
      var {
        maxlength: Y,
        modelValue: {
          length: G
        }
      } = e;
      return qe(Y) ? G + " / " + Y : "";
    }), {
      form: i,
      bindForm: o
    } = yn(), {
      errorMessage: l,
      validateWithTrigger: s,
      validate: u,
      resetValidation: d
    } = gn(), v = W(() => {
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
        if (Xe(j) && lo(j)) {
          rr(j);
          return;
        }
        Xe(j) && so(j) && (a.value = Y, r.value = !0);
      }
    }, h = (Y) => ({
      id: ub++,
      url: "",
      cover: "",
      name: Y.name,
      file: Y
    }), g = (Y) => {
      var G = Y.target, {
        files: R
      } = G;
      return Array.from(R);
    }, w = (Y) => new Promise((G) => {
      var R = new FileReader();
      R.onload = () => {
        var J = R.result;
        Y.file.type.startsWith("image") && (Y.cover = J), Y.url = J, G(Y);
      }, R.readAsDataURL(Y.file);
    }), T = (Y) => Y.map(w), $ = (Y) => {
      var {
        onBeforeRead: G
      } = e;
      return Y.map((R) => new Promise((J) => {
        G || J({
          valid: !0,
          varFile: R
        });
        var j = O(G, Ne(R));
        j = ye(j) ? j : [j], Promise.all(j).then((Z) => {
          J({
            valid: !Z.some((N) => !N),
            varFile: R
          });
        });
      }));
    }, y = /* @__PURE__ */ function() {
      var Y = hl(function* (G) {
        var {
          maxsize: R,
          maxlength: J,
          modelValue: j,
          onOversize: Z,
          onAfterRead: N,
          readonly: U,
          disabled: H
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || H || U)) {
          var x = (Pe) => Pe.filter((dn) => dn.file.size > A(R) ? (O(Z, Ne(dn)), !1) : !0), oe = (Pe) => {
            var dn = Math.min(Pe.length, A(J) - j.length);
            return Pe.slice(0, dn);
          }, se = g(G), ve = se.map(h);
          ve = R != null ? x(ve) : ve, ve = J != null ? oe(ve) : ve;
          var Ce = yield Promise.all(T(ve)), Ye = yield Promise.all($(Ce)), _e = Ye.filter((Pe) => {
            var {
              valid: dn
            } = Pe;
            return dn;
          }).map((Pe) => {
            var {
              varFile: dn
            } = Pe;
            return dn;
          });
          O(e["onUpdate:modelValue"], [...j, ..._e]), G.target.value = "", _e.forEach((Pe) => O(N, Ne(Pe)));
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), C = /* @__PURE__ */ function() {
      var Y = hl(function* (G) {
        var {
          disabled: R,
          readonly: J,
          modelValue: j,
          onBeforeRemove: Z,
          onRemove: N
        } = e;
        if (!(i != null && i.disabled.value || i != null && i.readonly.value || R || J)) {
          if (Z) {
            var U = O(Z);
            if (U = ye(U) ? U : [U], (yield Promise.all(U)).some((x) => !x))
              return;
          }
          var H = j.filter((x) => x !== G);
          O(N, G), z("onRemove"), O(e["onUpdate:modelValue"], H);
        }
      });
      return function(R) {
        return Y.apply(this, arguments);
      };
    }(), P = () => e.modelValue.filter((Y) => Y.state === "success"), S = () => e.modelValue.filter((Y) => Y.state === "error"), B = () => e.modelValue.filter((Y) => Y.state === "loading"), E = {
      getSuccess: P,
      getError: S,
      getLoading: B
    }, z = (Y) => {
      Me(() => {
        var {
          validateTrigger: G,
          rules: R,
          modelValue: J
        } = e;
        s(G, Y, R, J, E);
      });
    }, I = !1, p = () => u(e.rules, e.modelValue, E), k = () => {
      I = !0, O(e["onUpdate:modelValue"], []), d();
    }, L = {
      validate: p,
      resetValidation: d,
      reset: k
    };
    return O(o, L), te(() => e.modelValue, () => {
      !I && z("onChange"), I = !1;
    }, {
      deep: !0
    }), {
      n: lb,
      classes: sb,
      input: n,
      files: v,
      showPreview: r,
      currentPreview: a,
      errorMessage: l,
      maxlengthText: t,
      isHTMLSupportVideo: so,
      isHTMLSupportImage: lo,
      formDisabled: i == null ? void 0 : i.disabled,
      formReadonly: i == null ? void 0 : i.readonly,
      preview: c,
      triggerAction: f,
      handleChange: y,
      handleRemove: C,
      getSuccess: P,
      getError: S,
      getLoading: B,
      validate: p,
      resetValidation: d,
      reset: k
    };
  }
});
Oa.install = function(e) {
  e.component(Oa.name, Oa);
};
function hb(e) {
  br.install && e.use(br), Ar.install && e.use(Ar), zr.install && e.use(zr), ur.install && e.use(ur), Lr.install && e.use(Lr), Rr.install && e.use(Rr), Ur.install && e.use(Ur), Yr.install && e.use(Yr), rn.install && e.use(rn), Fr.install && e.use(Fr), dr.install && e.use(dr), vr.install && e.use(vr), Wr.install && e.use(Wr), fr.install && e.use(fr), Hr.install && e.use(Hr), jr.install && e.use(jr), Gr.install && e.use(Gr), ln.install && e.use(ln), qr.install && e.use(qr), Kr.install && e.use(Kr), Xr.install && e.use(Xr), wr.install && e.use(wr), Zr.install && e.use(Zr), Zn.install && e.use(Zn), je.install && e.use(je), Oe.install && e.use(Oe), Jr.install && e.use(Jr), rr.install && e.use(rr), Qr.install && e.use(Qr), xr.install && e.use(xr), hr.install && e.use(hr), wt.install && e.use(wt), _r.install && e.use(_r), ea.install && e.use(ea), On.install && e.use(On), ja.install && e.use(ja), ri.install && e.use(ri), er.install && e.use(er), na.install && e.use(na), ra.install && e.use(ra), aa.install && e.use(aa), kr.install && e.use(kr), Cn.install && e.use(Cn), ta.install && e.use(ta), ia.install && e.use(ia), oa.install && e.use(oa), la.install && e.use(la), sa.install && e.use(sa), ua.install && e.use(ua), Fe.install && e.use(Fe), da.install && e.use(da), va.install && e.use(va), fa.install && e.use(fa), ca.install && e.use(ca), An.install && e.use(An), pa.install && e.use(pa), ha.install && e.use(ha), ga.install && e.use(ga), xn.install && e.use(xn), Xa.install && e.use(Xa), Jn.install && e.use(Jn), Qn.install && e.use(Qn), ba.install && e.use(ba), wa.install && e.use(wa), Sa.install && e.use(Sa), Ca.install && e.use(Ca), ka.install && e.use(ka), $a.install && e.use($a), Bi.install && e.use(Bi), Ta.install && e.use(Ta), Oa.install && e.use(Oa);
}
const yb = {
  install: hb,
  ActionSheet: br,
  AppBar: Ar,
  BackTop: zr,
  Badge: ur,
  BottomNavigation: Lr,
  BottomNavigationItem: Rr,
  Breadcrumb: Ur,
  Breadcrumbs: Yr,
  Button: rn,
  Card: Fr,
  Cell: dr,
  Checkbox: vr,
  CheckboxGroup: Wr,
  Chip: fr,
  Col: Hr,
  Collapse: jr,
  CollapseItem: Gr,
  Context: ln,
  Countdown: qr,
  Counter: Kr,
  DatePicker: Xr,
  Dialog: wr,
  Divider: Zr,
  Form: Zn,
  FormDetails: je,
  Icon: Oe,
  Image: Jr,
  ImagePreview: rr,
  IndexAnchor: Qr,
  IndexBar: xr,
  Input: hr,
  Lazy: wt,
  Link: _r,
  List: ea,
  Loading: On,
  LoadingBar: ja,
  Locale: ri,
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
  Snackbar: An,
  Space: pa,
  Step: ha,
  Steps: ga,
  Sticky: xn,
  StyleProvider: Xa,
  Swipe: Jn,
  SwipeItem: Qn,
  Switch: ba,
  Tab: wa,
  TabItem: Sa,
  Table: Ca,
  Tabs: ka,
  TabsItems: $a,
  Themes: Bi,
  TimePicker: Ta,
  Uploader: Oa
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
  rn as Button,
  Fr as Card,
  dr as Cell,
  vr as Checkbox,
  Wr as CheckboxGroup,
  fr as Chip,
  Hr as Col,
  jr as Collapse,
  Gr as CollapseItem,
  ln as Context,
  qr as Countdown,
  Kr as Counter,
  Xr as DatePicker,
  wr as Dialog,
  Zr as Divider,
  Zn as Form,
  je as FormDetails,
  Oe as Icon,
  Jr as Image,
  rr as ImagePreview,
  Qr as IndexAnchor,
  xr as IndexBar,
  hr as Input,
  wt as Lazy,
  _r as Link,
  ea as List,
  On as Loading,
  ja as LoadingBar,
  ri as Locale,
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
  An as Snackbar,
  pa as Space,
  ha as Step,
  ga as Steps,
  xn as Sticky,
  Xa as StyleProvider,
  Jn as Swipe,
  Qn as SwipeItem,
  ba as Switch,
  wa as Tab,
  Sa as TabItem,
  Ca as Table,
  ka as Tabs,
  $a as TabsItems,
  Bi as Themes,
  Ta as TimePicker,
  Oa as Uploader,
  yb as default,
  hb as install
};
