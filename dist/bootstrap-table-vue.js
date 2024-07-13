var Et = {};
/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Zt(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const D = Et.NODE_ENV !== "production" ? Object.freeze({}) : {}, Xt = Et.NODE_ENV !== "production" ? Object.freeze([]) : [], ee = () => {
}, kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), T = Object.assign, en = Object.prototype.hasOwnProperty, E = (e, t) => en.call(e, t), g = Array.isArray, G = (e) => xe(e) === "[object Map]", tn = (e) => xe(e) === "[object Set]", N = (e) => typeof e == "function", $ = (e) => typeof e == "string", ce = (e) => typeof e == "symbol", S = (e) => e !== null && typeof e == "object", nn = (e) => (S(e) || N(e)) && N(e.then) && N(e.catch), rn = Object.prototype.toString, xe = (e) => rn.call(e), bt = (e) => xe(e).slice(8, -1), on = (e) => xe(e) === "[object Object]", We = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, sn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, cn = sn((e) => e.charAt(0).toUpperCase() + e.slice(1)), X = (e, t) => !Object.is(e, t), ln = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let rt;
const wt = () => rt || (rt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ue(e) {
  if (g(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = $(r) ? dn(r) : Ue(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if ($(e) || S(e))
    return e;
}
const an = /;(?![^(]*\))/g, un = /:([^]+)/, fn = /\/\*[^]*?\*\//g;
function dn(e) {
  const t = {};
  return e.replace(fn, "").split(an).forEach((n) => {
    if (n) {
      const r = n.split(un);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function Be(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (g(e))
    for (let n = 0; n < e.length; n++) {
      const r = Be(e[n]);
      r && (t += r + " ");
    }
  else if (S(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
var I = {};
function se(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pn;
function hn(e, t = pn) {
  t && t.active && t.effects.push(e);
}
let ne;
class _n {
  constructor(t, n, r, o) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, hn(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ie();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (gn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Re();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = W, n = ne;
    try {
      return W = !0, ne = this, this._runnings++, ot(this), this.fn();
    } finally {
      st(this), this._runnings--, ne = n, W = t;
    }
  }
  stop() {
    this.active && (ot(this), st(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function gn(e) {
  return e.value;
}
function ot(e) {
  e._trackId++, e._depsLength = 0;
}
function st(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Nt(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Nt(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let W = !0, Me = 0;
const Ot = [];
function Ie() {
  Ot.push(W), W = !1;
}
function Re() {
  const e = Ot.pop();
  W = e === void 0 ? !0 : e;
}
function qe() {
  Me++;
}
function Je() {
  for (Me--; !Me && Ae.length; )
    Ae.shift()();
}
function mn(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Nt(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, I.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, T({ effect: e }, n)));
  }
}
const Ae = [];
function En(e, t, n) {
  var r;
  qe();
  for (const o of e.keys()) {
    let s;
    o._dirtyLevel < t && (s ?? (s = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (s ?? (s = e.get(o) === o._trackId)) && (I.NODE_ENV !== "production" && ((r = o.onTrigger) == null || r.call(o, T({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && Ae.push(o.scheduler)));
  }
  Je();
}
const bn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Fe = /* @__PURE__ */ new WeakMap(), U = Symbol(I.NODE_ENV !== "production" ? "iterate" : ""), je = Symbol(I.NODE_ENV !== "production" ? "Map key iterate" : "");
function y(e, t, n) {
  if (W && ne) {
    let r = Fe.get(e);
    r || Fe.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = bn(() => r.delete(n))), mn(
      ne,
      o,
      I.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function j(e, t, n, r, o, s) {
  const i = Fe.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && g(e)) {
    const a = Number(r);
    i.forEach((f, _) => {
      (_ === "length" || !ce(_) && _ >= a) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        g(e) ? We(n) && l.push(i.get("length")) : (l.push(i.get(U)), G(e) && l.push(i.get(je)));
        break;
      case "delete":
        g(e) || (l.push(i.get(U)), G(e) && l.push(i.get(je)));
        break;
      case "set":
        G(e) && l.push(i.get(U));
        break;
    }
  qe();
  for (const a of l)
    a && En(
      a,
      4,
      I.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: r,
        oldValue: o,
        oldTarget: s
      } : void 0
    );
  Je();
}
const wn = /* @__PURE__ */ Zt("__proto__,__v_isRef,__isVue"), St = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ce)
), it = /* @__PURE__ */ Nn();
function Nn() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = p(this);
      for (let s = 0, i = this.length; s < i; s++)
        y(r, "get", s + "");
      const o = r[t](...n);
      return o === -1 || o === !1 ? r[t](...n.map(p)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ie(), qe();
      const r = p(this)[t].apply(this, n);
      return Je(), Re(), r;
    };
  }), e;
}
function On(e) {
  ce(e) || (e = String(e));
  const t = p(this);
  return y(t, "has", e), t.hasOwnProperty(e);
}
class yt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const o = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (o ? s ? Vt : Ct : s ? Mn : Rt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = g(t);
    if (!o) {
      if (i && E(it, n))
        return Reflect.get(it, n, r);
      if (n === "hasOwnProperty")
        return On;
    }
    const l = Reflect.get(t, n, r);
    return (ce(n) ? St.has(n) : wn(n)) || (o || y(t, "get", n), s) ? l : R(l) ? i && We(n) ? l : l.value : S(l) ? o ? Tt(l) : $t(l) : l;
  }
}
class Sn extends yt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = k(s);
      if (!Q(r) && !k(r) && (s = p(s), r = p(r)), !g(t) && R(s) && !R(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = g(t) && We(n) ? Number(n) < t.length : E(t, n), l = Reflect.set(t, n, r, o);
    return t === p(o) && (i ? X(r, s) && j(t, "set", n, r, s) : j(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = E(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && j(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ce(n) || !St.has(n)) && y(t, "has", n), r;
  }
  ownKeys(t) {
    return y(
      t,
      "iterate",
      g(t) ? "length" : U
    ), Reflect.ownKeys(t);
  }
}
class xt extends yt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return I.NODE_ENV !== "production" && se(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return I.NODE_ENV !== "production" && se(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const yn = /* @__PURE__ */ new Sn(), xn = /* @__PURE__ */ new xt(), In = /* @__PURE__ */ new xt(!0), Ge = (e) => e, Ce = (e) => Reflect.getPrototypeOf(e);
function ae(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = p(e), s = p(t);
  n || (X(t, s) && y(o, "get", t), y(o, "get", s));
  const { has: i } = Ce(o), l = r ? Ge : n ? Xe : Ze;
  if (i.call(o, t))
    return l(e.get(t));
  if (i.call(o, s))
    return l(e.get(s));
  e !== o && e.get(t);
}
function ue(e, t = !1) {
  const n = this.__v_raw, r = p(n), o = p(e);
  return t || (X(e, o) && y(r, "has", e), y(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function fe(e, t = !1) {
  return e = e.__v_raw, !t && y(p(e), "iterate", U), Reflect.get(e, "size", e);
}
function ct(e) {
  e = p(e);
  const t = p(this);
  return Ce(t).has.call(t, e) || (t.add(e), j(t, "add", e, e)), this;
}
function lt(e, t) {
  t = p(t);
  const n = p(this), { has: r, get: o } = Ce(n);
  let s = r.call(n, e);
  s ? I.NODE_ENV !== "production" && It(n, r, e) : (e = p(e), s = r.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), s ? X(t, i) && j(n, "set", e, t, i) : j(n, "add", e, t), this;
}
function at(e) {
  const t = p(this), { has: n, get: r } = Ce(t);
  let o = n.call(t, e);
  o ? I.NODE_ENV !== "production" && It(t, n, e) : (e = p(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && j(t, "delete", e, void 0, s), i;
}
function ut() {
  const e = p(this), t = e.size !== 0, n = I.NODE_ENV !== "production" ? G(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && j(e, "clear", void 0, void 0, n), r;
}
function de(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, l = p(i), a = t ? Ge : e ? Xe : Ze;
    return !e && y(l, "iterate", U), i.forEach((f, _) => r.call(o, a(f), a(_), s));
  };
}
function pe(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = p(o), i = G(s), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...r), _ = n ? Ge : t ? Xe : Ze;
    return !t && y(
      s,
      "iterate",
      a ? je : U
    ), {
      // iterator protocol
      next() {
        const { value: c, done: d } = f.next();
        return d ? { value: c, done: d } : {
          value: l ? [_(c[0]), _(c[1])] : _(c),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function M(e) {
  return function(...t) {
    if (I.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      se(
        `${cn(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Rn() {
  const e = {
    get(s) {
      return ae(this, s);
    },
    get size() {
      return fe(this);
    },
    has: ue,
    add: ct,
    set: lt,
    delete: at,
    clear: ut,
    forEach: de(!1, !1)
  }, t = {
    get(s) {
      return ae(this, s, !1, !0);
    },
    get size() {
      return fe(this);
    },
    has: ue,
    add: ct,
    set: lt,
    delete: at,
    clear: ut,
    forEach: de(!1, !0)
  }, n = {
    get(s) {
      return ae(this, s, !0);
    },
    get size() {
      return fe(this, !0);
    },
    has(s) {
      return ue.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: de(!0, !1)
  }, r = {
    get(s) {
      return ae(this, s, !0, !0);
    },
    get size() {
      return fe(this, !0);
    },
    has(s) {
      return ue.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: de(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = pe(s, !1, !1), n[s] = pe(s, !0, !1), t[s] = pe(s, !1, !0), r[s] = pe(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  Cn,
  Vn,
  $n,
  Tn
] = /* @__PURE__ */ Rn();
function Ye(e, t) {
  const n = t ? e ? Tn : $n : e ? Vn : Cn;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    E(n, o) && o in r ? n : r,
    o,
    s
  );
}
const vn = {
  get: /* @__PURE__ */ Ye(!1, !1)
}, Dn = {
  get: /* @__PURE__ */ Ye(!0, !1)
}, Pn = {
  get: /* @__PURE__ */ Ye(!0, !0)
};
function It(e, t, n) {
  const r = p(n);
  if (r !== n && t.call(e, r)) {
    const o = bt(e);
    se(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Rt = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap();
function An(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Fn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : An(bt(e));
}
function $t(e) {
  return k(e) ? e : Qe(
    e,
    !1,
    yn,
    vn,
    Rt
  );
}
function Tt(e) {
  return Qe(
    e,
    !0,
    xn,
    Dn,
    Ct
  );
}
function he(e) {
  return Qe(
    e,
    !0,
    In,
    Pn,
    Vt
  );
}
function Qe(e, t, n, r, o) {
  if (!S(e))
    return I.NODE_ENV !== "production" && se(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = Fn(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, l), l;
}
function Y(e) {
  return k(e) ? Y(e.__v_raw) : !!(e && e.__v_isReactive);
}
function k(e) {
  return !!(e && e.__v_isReadonly);
}
function Q(e) {
  return !!(e && e.__v_isShallow);
}
function Le(e) {
  return e ? !!e.__v_raw : !1;
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function jn(e) {
  return Object.isExtensible(e) && ln(e, "__v_skip", !0), e;
}
const Ze = (e) => S(e) ? $t(e) : e, Xe = (e) => S(e) ? Tt(e) : e;
function R(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ln(e) {
  return R(e) ? e.value : e;
}
const Hn = {
  get: (e, t, n) => Ln(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return R(o) && !R(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function zn(e) {
  return Y(e) ? e : new Proxy(e, Hn);
}
var u = {};
const B = [];
function Kn(e) {
  B.push(e);
}
function Wn() {
  B.pop();
}
function b(e, ...t) {
  Ie();
  const n = B.length ? B[B.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Un();
  if (r)
    q(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, l;
          return (l = (i = s.toString) == null ? void 0 : i.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${Gt(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...Bn(o)), console.warn(...s);
  }
  Re();
}
function Un() {
  let e = B[B.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Bn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...qn(n));
  }), t;
}
function qn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Gt(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Jn(e.props), s] : [o + s];
}
function Jn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...vt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function vt(e, t, n) {
  return $(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : R(t) ? (t = vt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Dt = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function q(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    ke(o, t, n);
  }
}
function me(e, t, n, r) {
  if (N(e)) {
    const o = q(e, t, n, r);
    return o && nn(o) && o.catch((s) => {
      ke(s, t, n);
    }), o;
  }
  if (g(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(me(e[s], t, n, r));
    return o;
  } else u.NODE_ENV !== "production" && b(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ke(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = u.NODE_ENV !== "production" ? Dt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let _ = 0; _ < f.length; _++)
          if (f[_](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      Ie(), q(
        a,
        null,
        10,
        [e, i, l]
      ), Re();
      return;
    }
  }
  Gn(e, n, o, r);
}
function Gn(e, t, n, r = !0) {
  if (u.NODE_ENV !== "production") {
    const o = Dt[t];
    if (n && Kn(n), b(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Wn(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ne = !1, He = !1;
const C = [];
let F = 0;
const Z = [];
let A = null, z = 0;
const Pt = /* @__PURE__ */ Promise.resolve();
let et = null;
const Yn = 100;
function Qn(e) {
  const t = et || Pt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zn(e) {
  let t = F + 1, n = C.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = C[r], s = ie(o);
    s < e || s === e && o.pre ? t = r + 1 : n = r;
  }
  return t;
}
function tt(e) {
  (!C.length || !C.includes(
    e,
    Ne && e.allowRecurse ? F + 1 : F
  )) && (e.id == null ? C.push(e) : C.splice(Zn(e.id), 0, e), Mt());
}
function Mt() {
  !Ne && !He && (He = !0, et = Pt.then(Ft));
}
function At(e) {
  g(e) ? Z.push(...e) : (!A || !A.includes(
    e,
    e.allowRecurse ? z + 1 : z
  )) && Z.push(e), Mt();
}
function Xn(e) {
  if (Z.length) {
    const t = [...new Set(Z)].sort(
      (n, r) => ie(n) - ie(r)
    );
    if (Z.length = 0, A) {
      A.push(...t);
      return;
    }
    for (A = t, u.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), z = 0; z < A.length; z++) {
      const n = A[z];
      u.NODE_ENV !== "production" && jt(e, n) || n.active !== !1 && n();
    }
    A = null, z = 0;
  }
}
const ie = (e) => e.id == null ? 1 / 0 : e.id, kn = (e, t) => {
  const n = ie(e) - ie(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function Ft(e) {
  He = !1, Ne = !0, u.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), C.sort(kn);
  const t = u.NODE_ENV !== "production" ? (n) => jt(e, n) : ee;
  try {
    for (F = 0; F < C.length; F++) {
      const n = C[F];
      if (n && n.active !== !1) {
        if (u.NODE_ENV !== "production" && t(n))
          continue;
        q(n, null, 14);
      }
    }
  } finally {
    F = 0, C.length = 0, Xn(e), Ne = !1, et = null, (C.length || Z.length) && Ft(e);
  }
}
function jt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Yn) {
      const r = t.ownerInstance, o = r && Jt(r.type);
      return ke(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const J = /* @__PURE__ */ new Set();
u.NODE_ENV !== "production" && (wt().__VUE_HMR_RUNTIME__ = {
  createRecord: De(er),
  rerender: De(tr),
  reload: De(nr)
});
const Oe = /* @__PURE__ */ new Map();
function er(e, t) {
  return Oe.has(e) ? !1 : (Oe.set(e, {
    initialDef: re(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function re(e) {
  return Yt(e) ? e.__vccOpts : e;
}
function tr(e, t) {
  const n = Oe.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, re(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function nr(e, t) {
  const n = Oe.get(e);
  if (!n) return;
  t = re(t), ft(n.initialDef, t);
  const r = [...n.instances];
  for (const o of r) {
    const s = re(o.type);
    J.has(s) || (s !== n.initialDef && ft(s, t), J.add(s)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (J.add(s), o.ceReload(t.styles), J.delete(s)) : o.parent ? (o.parent.effect.dirty = !0, tt(() => {
      o.parent.update(), J.delete(s);
    })) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  At(() => {
    for (const o of r)
      J.delete(
        re(o.type)
      );
  });
}
function ft(e, t) {
  T(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function De(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let P = null, rr = null;
const or = Symbol.for("v-ndc"), sr = (e) => e.__isSuspense;
function ir(e, t) {
  t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : At(e);
}
const ze = (e) => e ? Pr(e) ? Mr(e) : ze(e.parent) : null, oe = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ T(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => u.NODE_ENV !== "production" ? he(e.props) : e.props,
    $attrs: (e) => u.NODE_ENV !== "production" ? he(e.attrs) : e.attrs,
    $slots: (e) => u.NODE_ENV !== "production" ? he(e.slots) : e.slots,
    $refs: (e) => u.NODE_ENV !== "production" ? he(e.refs) : e.refs,
    $parent: (e) => ze(e.parent),
    $root: (e) => ze(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ar(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, tt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qn.bind(e.proxy)),
    $watch: (e) => Er.bind(e)
  })
), cr = (e) => e === "_" || e === "$", Pe = (e, t) => e !== D && !e.__isScriptSetup && E(e, t), lr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: l, appContext: a } = e;
    if (u.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Pe(r, t))
          return i[t] = 1, r[t];
        if (o !== D && E(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && E(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== D && E(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const _ = oe[t];
    let c, d;
    if (_)
      return t === "$attrs" ? y(e.attrs, "get", "") : u.NODE_ENV !== "production" && t === "$slots" && y(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== D && E(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, E(d, t)
    )
      return d[t];
    u.NODE_ENV !== "production" && P && (!$(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== D && cr(t[0]) && E(o, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === P && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Pe(o, t) ? (o[t] = n, !0) : u.NODE_ENV !== "production" && o.__isScriptSetup && E(o, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== D && E(r, t) ? (r[t] = n, !0) : E(e.props, t) ? (u.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (u.NODE_ENV !== "production" && b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (u.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s }
  }, i) {
    let l;
    return !!n[i] || e !== D && E(e, i) || Pe(t, i) || (l = s[0]) && E(l, i) || E(r, i) || E(oe, i) || E(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
u.NODE_ENV !== "production" && (lr.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function dt(e) {
  return g(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ar(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let a;
  return l ? a = l : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (f) => Se(a, f, i, !0)
  ), Se(a, t, i)), S(t) && s.set(t, a), a;
}
function Se(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Se(e, s, n, !0), o && o.forEach(
    (i) => Se(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      u.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ur[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const ur = {
  data: pt,
  props: _t,
  emits: _t,
  // objects
  methods: te,
  computed: te,
  // lifecycle
  beforeCreate: O,
  created: O,
  beforeMount: O,
  mounted: O,
  beforeUpdate: O,
  updated: O,
  beforeDestroy: O,
  beforeUnmount: O,
  destroyed: O,
  unmounted: O,
  activated: O,
  deactivated: O,
  errorCaptured: O,
  serverPrefetch: O,
  // assets
  components: te,
  directives: te,
  // watch
  watch: dr,
  // provide / inject
  provide: pt,
  inject: fr
};
function pt(e, t) {
  return t ? e ? function() {
    return T(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fr(e, t) {
  return te(ht(e), ht(t));
}
function ht(e) {
  if (g(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function O(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function te(e, t) {
  return e ? T(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _t(e, t) {
  return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : T(
    /* @__PURE__ */ Object.create(null),
    dt(e),
    dt(t ?? {})
  ) : t;
}
function dr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = T(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = O(e[r], t[r]);
  return n;
}
let gt = null;
function pr(e, t, n = !1) {
  const r = Ve || P;
  if (r || gt) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : gt._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(r && r.proxy) : t;
    u.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else u.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const hr = {}, Lt = (e) => Object.getPrototypeOf(e) === hr, mt = ir, _r = Symbol.for("v-scx"), gr = () => {
  {
    const e = pr(_r);
    return e || u.NODE_ENV !== "production" && b(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, _e = {};
function mr(e, t, {
  immediate: n,
  deep: r,
  flush: o,
  once: s,
  onTrack: i,
  onTrigger: l
} = D) {
  if (t && s) {
    const h = t;
    t = (...ve) => {
      h(...ve), Te();
    };
  }
  u.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && b(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), u.NODE_ENV !== "production" && !t && (n !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && b(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (h) => {
    b(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = Ve, _ = (h) => r === !0 ? h : (
    // for deep: false, only traverse root-level properties
    K(h, r === !1 ? 1 : void 0)
  );
  let c, d = !1, m = !1;
  if (R(e) ? (c = () => e.value, d = Q(e)) : Y(e) ? (c = () => _(e), d = !0) : g(e) ? (m = !0, d = e.some((h) => Y(h) || Q(h)), c = () => e.map((h) => {
    if (R(h))
      return h.value;
    if (Y(h))
      return _(h);
    if (N(h))
      return q(h, f, 2);
    u.NODE_ENV !== "production" && a(h);
  })) : N(e) ? t ? c = () => q(e, f, 2) : c = () => (w && w(), me(
    e,
    f,
    3,
    [v]
  )) : (c = ee, u.NODE_ENV !== "production" && a(e)), t && r) {
    const h = c;
    c = () => K(h());
  }
  let w, v = (h) => {
    w = x.onStop = () => {
      q(h, f, 4), w = x.onStop = void 0;
    };
  }, $e;
  if (qt)
    if (v = ee, t ? n && me(t, f, 3, [
      c(),
      m ? [] : void 0,
      v
    ]) : c(), o === "sync") {
      const h = gr();
      $e = h.__watcherHandles || (h.__watcherHandles = []);
    } else
      return ee;
  let L = m ? new Array(e.length).fill(_e) : _e;
  const H = () => {
    if (!(!x.active || !x.dirty))
      if (t) {
        const h = x.run();
        (r || d || (m ? h.some((ve, Qt) => X(ve, L[Qt])) : X(h, L))) && (w && w(), me(t, f, 3, [
          h,
          // pass undefined as the old value when it's changed for the first time
          L === _e ? void 0 : m && L[0] === _e ? [] : L,
          v
        ]), L = h);
      } else
        x.run();
  };
  H.allowRecurse = !!t;
  let le;
  o === "sync" ? le = H : o === "post" ? le = () => mt(H, f && f.suspense) : (H.pre = !0, f && (H.id = f.uid), le = () => tt(H));
  const x = new _n(c, ee, le), Te = () => {
    x.stop();
  };
  return u.NODE_ENV !== "production" && (x.onTrack = i, x.onTrigger = l), t ? n ? H() : L = x.run() : o === "post" ? mt(
    x.run.bind(x),
    f && f.suspense
  ) : x.run(), $e && $e.push(Te), Te;
}
function Er(e, t, n) {
  const r = this.proxy, o = $(e) ? e.includes(".") ? br(r, e) : () => r[e] : e.bind(r, r);
  let s;
  N(t) ? s = t : (s = t.handler, n = t);
  const i = Dr(this), l = mr(o, s.bind(r), n);
  return i(), l;
}
function br(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function K(e, t = 1 / 0, n) {
  if (t <= 0 || !S(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, R(e))
    K(e.value, t, n);
  else if (g(e))
    for (let r = 0; r < e.length; r++)
      K(e[r], t, n);
  else if (tn(e) || G(e))
    e.forEach((r) => {
      K(r, t, n);
    });
  else if (on(e)) {
    for (const r in e)
      K(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && K(e[r], t, n);
  }
  return e;
}
function Ht(e, t) {
  e.shapeFlag & 6 && e.component ? Ht(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const wr = (e) => e.__isTeleport, zt = Symbol.for("v-fgt"), Nr = Symbol.for("v-txt"), Or = Symbol.for("v-cmt"), Ee = [];
let V = null;
function Sr(e = !1) {
  Ee.push(V = e ? null : []);
}
function yr() {
  Ee.pop(), V = Ee[Ee.length - 1] || null;
}
function xr(e) {
  return e.dynamicChildren = V || Xt, yr(), V && V.push(e), e;
}
function Ir(e, t, n, r, o, s) {
  return xr(
    Wt(
      e,
      t,
      n,
      r,
      o,
      s,
      !0
    )
  );
}
function Rr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Cr = (...e) => Ut(
  ...e
), Kt = ({ key: e }) => e ?? null, be = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $(e) || R(e) || N(e) ? { i: P, r: e, k: t, f: !!n } : e : null);
function Wt(e, t = null, n = null, r = 0, o = null, s = e === zt ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kt(t),
    ref: t && be(t),
    scopeId: rr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: P
  };
  return l ? (nt(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= $(n) ? 8 : 16), u.NODE_ENV !== "production" && a.key !== a.key && b("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  V && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && V.push(a), a;
}
const Vr = u.NODE_ENV !== "production" ? Cr : Ut;
function Ut(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === or) && (u.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = Or), Rr(e)) {
    const l = ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && nt(l, n), !s && V && (l.shapeFlag & 6 ? V[V.indexOf(e)] = l : V.push(l)), l.patchFlag = -2, l;
  }
  if (Yt(e) && (e = e.__vccOpts), t) {
    t = $r(t);
    let { class: l, style: a } = t;
    l && !$(l) && (t.class = Be(l)), S(a) && (Le(a) && !g(a) && (a = T({}, a)), t.style = Ue(a));
  }
  const i = $(e) ? 1 : sr(e) ? 128 : wr(e) ? 64 : S(e) ? 4 : N(e) ? 2 : 0;
  return u.NODE_ENV !== "production" && i & 4 && Le(e) && (e = p(e), b(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Wt(
    e,
    t,
    n,
    r,
    o,
    i,
    s,
    !0
  );
}
function $r(e) {
  return e ? Le(e) || Lt(e) ? T({}, e) : e : null;
}
function ye(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e, f = t ? vr(o || {}, t) : o, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Kt(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? g(s) ? s.concat(be(t)) : [s, be(t)] : be(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u.NODE_ENV !== "production" && i === -1 && g(l) ? l.map(Bt) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== zt ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ye(e.ssContent),
    ssFallback: e.ssFallback && ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && Ht(
    _,
    a.clone(_)
  ), _;
}
function Bt(e) {
  const t = ye(e);
  return g(e.children) && (t.children = e.children.map(Bt)), t;
}
function Tr(e = " ", t = 0) {
  return Vr(Nr, null, e, t);
}
function nt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (g(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), nt(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Lt(t) ? t._ctx = P : o === 3 && P && (P.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else N(t) ? (t = { default: t, _ctx: P }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Tr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = Be([t.class, r.class]));
      else if (o === "style")
        t.style = Ue([t.style, r.style]);
      else if (kt(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(g(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
let Ve = null, Ke;
{
  const e = wt(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  Ke = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ve = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => qt = n
  );
}
const Dr = (e) => {
  const t = Ve;
  return Ke(e), e.scope.on(), () => {
    e.scope.off(), Ke(t);
  };
};
function Pr(e) {
  return e.vnode.shapeFlag & 4;
}
let qt = !1;
function Mr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(zn(jn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in oe)
        return oe[n](e);
    },
    has(t, n) {
      return n in t || n in oe;
    }
  })) : e.proxy;
}
const Ar = /(?:^|[-_])(\w)/g, Fr = (e) => e.replace(Ar, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Jt(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gt(e, t, n = !1) {
  let r = Jt(t);
  if (!r && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && e && e.parent) {
    const o = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    r = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return r ? Fr(r) : n ? "App" : "Anonymous";
}
function Yt(e) {
  return N(e) && "__vccOpts" in e;
}
function jr() {
  if (u.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    header(c) {
      return S(c) ? c.__isVue ? ["div", e, "VueInstance"] : R(c) ? [
        "div",
        {},
        ["span", e, _(c)],
        "<",
        l(c.value),
        ">"
      ] : Y(c) ? [
        "div",
        {},
        ["span", e, Q(c) ? "ShallowReactive" : "Reactive"],
        "<",
        l(c),
        `>${k(c) ? " (readonly)" : ""}`
      ] : k(c) ? [
        "div",
        {},
        ["span", e, Q(c) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(c),
        ">"
      ] : null : null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...s(c.$)
        ];
    }
  };
  function s(c) {
    const d = [];
    c.type.props && c.props && d.push(i("props", p(c.props))), c.setupState !== D && d.push(i("setup", c.setupState)), c.data !== D && d.push(i("data", p(c.data)));
    const m = a(c, "computed");
    m && d.push(i("computed", m));
    const w = a(c, "inject");
    return w && d.push(i("injected", w)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), d;
  }
  function i(c, d) {
    return d = T({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          l(d[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, d = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : S(c) ? ["object", { object: d ? p(c) : c }] : ["span", n, String(c)];
  }
  function a(c, d) {
    const m = c.type;
    if (N(m))
      return;
    const w = {};
    for (const v in c.ctx)
      f(m, v, d) && (w[v] = c.ctx[v]);
    return w;
  }
  function f(c, d, m) {
    const w = c[m];
    if (g(w) && w.includes(d) || S(w) && d in w || c.extends && f(c.extends, d, m) || c.mixins && c.mixins.some((v) => f(v, d, m)))
      return !0;
  }
  function _(c) {
    return Q(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
var Lr = {};
function Hr() {
  jr();
}
Lr.NODE_ENV !== "production" && Hr();
const zr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, we = window.jQuery, ge = (e) => e === void 0 ? e : we.fn.bootstrapTable.utils.extend(!0, Array.isArray(e) ? [] : {}, e), Kr = {
  name: "BootstrapTable",
  props: {
    columns: {
      type: Array,
      require: !0
    },
    data: {
      type: [Array, Object],
      default() {
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      optionsChangedIdx: 0
    };
  },
  mounted() {
    this.$table = we(this.$el), this.$table.on("all.bs.table", (e, t, n) => {
      let r = we.fn.bootstrapTable.events[t];
      r = r.replace(/([A-Z])/g, "-$1").toLowerCase(), this.$emit("on-all", ...n), this.$emit(r, ...n);
    }), this._initTable();
  },
  methods: {
    _initTable() {
      const e = {
        ...ge(this.options),
        columns: ge(this.columns),
        data: ge(this.data)
      };
      this._hasInit ? this.refreshOptions(e) : (this.$table.bootstrapTable(e), this._hasInit = !0);
    },
    ...(() => {
      const e = {};
      for (const t of we.fn.bootstrapTable.methods)
        e[t] = function(...n) {
          return this.$table.bootstrapTable(t, ...n);
        };
      return e;
    })()
  },
  watch: {
    options: {
      handler() {
        this.optionsChangedIdx++;
      },
      deep: !0
    },
    columns: {
      handler() {
        this.optionsChangedIdx++;
      },
      deep: !0
    },
    optionsChangedIdx() {
      this._initTable();
    },
    data: {
      handler() {
        this.load(ge(this.data));
      },
      deep: !0
    }
  }
};
function Wr(e, t, n, r, o, s) {
  return Sr(), Ir("table");
}
const Ur = /* @__PURE__ */ zr(Kr, [["render", Wr]]);
export {
  Ur as default
};
