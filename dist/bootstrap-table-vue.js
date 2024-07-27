var bt = {};
/**
* @vue/shared v3.4.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Xt(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const P = bt.NODE_ENV !== "production" ? Object.freeze({}) : {}, kt = bt.NODE_ENV !== "production" ? Object.freeze([]) : [], k = () => {
}, en = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), T = Object.assign, tn = Object.prototype.hasOwnProperty, E = (e, t) => tn.call(e, t), g = Array.isArray, Y = (e) => ye(e) === "[object Map]", nn = (e) => ye(e) === "[object Set]", N = (e) => typeof e == "function", $ = (e) => typeof e == "string", se = (e) => typeof e == "symbol", S = (e) => e !== null && typeof e == "object", rn = (e) => (S(e) || N(e)) && N(e.then) && N(e.catch), on = Object.prototype.toString, ye = (e) => on.call(e), wt = (e) => ye(e).slice(8, -1), sn = (e) => ye(e) === "[object Object]", Ue = (e) => $(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ln = cn((e) => e.charAt(0).toUpperCase() + e.slice(1)), X = (e, t) => !Object.is(e, t), an = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let ot;
const Nt = () => ot || (ot = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Be(e) {
  if (g(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = $(r) ? pn(r) : Be(r);
      if (o)
        for (const s in o)
          t[s] = o[s];
    }
    return t;
  } else if ($(e) || S(e))
    return e;
}
const un = /;(?![^(]*\))/g, fn = /:([^]+)/, dn = /\/\*[^]*?\*\//g;
function pn(e) {
  const t = {};
  return e.replace(dn, "").split(un).forEach((n) => {
    if (n) {
      const r = n.split(fn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function qe(e) {
  let t = "";
  if ($(e))
    t = e;
  else if (g(e))
    for (let n = 0; n < e.length; n++) {
      const r = qe(e[n]);
      r && (t += r + " ");
    }
  else if (S(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
var I = {};
function re(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let hn;
function _n(e, t = hn) {
  t && t.active && t.effects.push(e);
}
let te;
class gn {
  constructor(t, n, r, o) {
    this.fn = t, this.trigger = n, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, _n(this, o);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (mn(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ie();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = B, n = te;
    try {
      return B = !0, te = this, this._runnings++, st(this), this.fn();
    } finally {
      it(this), this._runnings--, te = n, B = t;
    }
  }
  stop() {
    this.active && (st(this), it(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function mn(e) {
  return e.value;
}
function st(e) {
  e._trackId++, e._depsLength = 0;
}
function it(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Ot(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Ot(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let B = !0, Ae = 0;
const St = [];
function xe() {
  St.push(B), B = !1;
}
function Ie() {
  const e = St.pop();
  B = e === void 0 ? !0 : e;
}
function Je() {
  Ae++;
}
function Ge() {
  for (Ae--; !Ae && Fe.length; )
    Fe.shift()();
}
function En(e, t, n) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const o = e.deps[e._depsLength];
    o !== t ? (o && Ot(o, e), e.deps[e._depsLength++] = t) : e._depsLength++, I.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, T({ effect: e }, n)));
  }
}
const Fe = [];
function bn(e, t, n) {
  var r;
  Je();
  for (const o of e.keys()) {
    let s;
    o._dirtyLevel < t && (s ?? (s = e.get(o) === o._trackId)) && (o._shouldSchedule || (o._shouldSchedule = o._dirtyLevel === 0), o._dirtyLevel = t), o._shouldSchedule && (s ?? (s = e.get(o) === o._trackId)) && (I.NODE_ENV !== "production" && ((r = o.onTrigger) == null || r.call(o, T({ effect: o }, n))), o.trigger(), (!o._runnings || o.allowRecurse) && o._dirtyLevel !== 2 && (o._shouldSchedule = !1, o.scheduler && Fe.push(o.scheduler)));
  }
  Ge();
}
const wn = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, je = /* @__PURE__ */ new WeakMap(), q = Symbol(I.NODE_ENV !== "production" ? "iterate" : ""), Le = Symbol(I.NODE_ENV !== "production" ? "Map key iterate" : "");
function y(e, t, n) {
  if (B && te) {
    let r = je.get(e);
    r || je.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = wn(() => r.delete(n))), En(
      te,
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
  const i = je.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && g(e)) {
    const a = Number(r);
    i.forEach((f, _) => {
      (_ === "length" || !se(_) && _ >= a) && c.push(f);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        g(e) ? Ue(n) && c.push(i.get("length")) : (c.push(i.get(q)), Y(e) && c.push(i.get(Le)));
        break;
      case "delete":
        g(e) || (c.push(i.get(q)), Y(e) && c.push(i.get(Le)));
        break;
      case "set":
        Y(e) && c.push(i.get(q));
        break;
    }
  Je();
  for (const a of c)
    a && bn(
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
  Ge();
}
const Nn = /* @__PURE__ */ Xt("__proto__,__v_isRef,__isVue"), yt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(se)
), ct = /* @__PURE__ */ On();
function On() {
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
      xe(), Je();
      const r = p(this)[t].apply(this, n);
      return Ge(), Ie(), r;
    };
  }), e;
}
function Sn(e) {
  se(e) || (e = String(e));
  const t = p(this);
  return y(t, "has", e), t.hasOwnProperty(e);
}
class xt {
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
      return r === (o ? s ? $t : Vt : s ? An : Ct).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = g(t);
    if (!o) {
      if (i && E(ct, n))
        return Reflect.get(ct, n, r);
      if (n === "hasOwnProperty")
        return Sn;
    }
    const c = Reflect.get(t, n, r);
    return (se(n) ? yt.has(n) : Nn(n)) || (o || y(t, "get", n), s) ? c : R(c) ? i && Ue(n) ? c : c.value : S(c) ? o ? Dt(c) : Tt(c) : c;
  }
}
class yn extends xt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let s = t[n];
    if (!this._isShallow) {
      const a = H(s);
      if (!L(r) && !H(r) && (s = p(s), r = p(r)), !g(t) && R(s) && !R(r))
        return a ? !1 : (s.value = r, !0);
    }
    const i = g(t) && Ue(n) ? Number(n) < t.length : E(t, n), c = Reflect.set(t, n, r, o);
    return t === p(o) && (i ? X(r, s) && j(t, "set", n, r, s) : j(t, "add", n, r)), c;
  }
  deleteProperty(t, n) {
    const r = E(t, n), o = t[n], s = Reflect.deleteProperty(t, n);
    return s && r && j(t, "delete", n, void 0, o), s;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!se(n) || !yt.has(n)) && y(t, "has", n), r;
  }
  ownKeys(t) {
    return y(
      t,
      "iterate",
      g(t) ? "length" : q
    ), Reflect.ownKeys(t);
  }
}
class It extends xt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return I.NODE_ENV !== "production" && re(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return I.NODE_ENV !== "production" && re(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xn = /* @__PURE__ */ new yn(), In = /* @__PURE__ */ new It(), Rn = /* @__PURE__ */ new It(!0), Ye = (e) => e, Re = (e) => Reflect.getPrototypeOf(e);
function ce(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const o = p(e), s = p(t);
  n || (X(t, s) && y(o, "get", t), y(o, "get", s));
  const { has: i } = Re(o), c = r ? Ye : n ? ke : Xe;
  if (i.call(o, t))
    return c(e.get(t));
  if (i.call(o, s))
    return c(e.get(s));
  e !== o && e.get(t);
}
function le(e, t = !1) {
  const n = this.__v_raw, r = p(n), o = p(e);
  return t || (X(e, o) && y(r, "has", e), y(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function ae(e, t = !1) {
  return e = e.__v_raw, !t && y(p(e), "iterate", q), Reflect.get(e, "size", e);
}
function lt(e, t = !1) {
  !t && !L(e) && !H(e) && (e = p(e));
  const n = p(this);
  return Re(n).has.call(n, e) || (n.add(e), j(n, "add", e, e)), this;
}
function at(e, t, n = !1) {
  !n && !L(t) && !H(t) && (t = p(t));
  const r = p(this), { has: o, get: s } = Re(r);
  let i = o.call(r, e);
  i ? I.NODE_ENV !== "production" && Rt(r, o, e) : (e = p(e), i = o.call(r, e));
  const c = s.call(r, e);
  return r.set(e, t), i ? X(t, c) && j(r, "set", e, t, c) : j(r, "add", e, t), this;
}
function ut(e) {
  const t = p(this), { has: n, get: r } = Re(t);
  let o = n.call(t, e);
  o ? I.NODE_ENV !== "production" && Rt(t, n, e) : (e = p(e), o = n.call(t, e));
  const s = r ? r.call(t, e) : void 0, i = t.delete(e);
  return o && j(t, "delete", e, void 0, s), i;
}
function ft() {
  const e = p(this), t = e.size !== 0, n = I.NODE_ENV !== "production" ? Y(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && j(e, "clear", void 0, void 0, n), r;
}
function ue(e, t) {
  return function(r, o) {
    const s = this, i = s.__v_raw, c = p(i), a = t ? Ye : e ? ke : Xe;
    return !e && y(c, "iterate", q), i.forEach((f, _) => r.call(o, a(f), a(_), s));
  };
}
function fe(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, s = p(o), i = Y(s), c = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, f = o[e](...r), _ = n ? Ye : t ? ke : Xe;
    return !t && y(
      s,
      "iterate",
      a ? Le : q
    ), {
      // iterator protocol
      next() {
        const { value: l, done: d } = f.next();
        return d ? { value: l, done: d } : {
          value: c ? [_(l[0]), _(l[1])] : _(l),
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
      re(
        `${ln(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Cn() {
  const e = {
    get(s) {
      return ce(this, s);
    },
    get size() {
      return ae(this);
    },
    has: le,
    add: lt,
    set: at,
    delete: ut,
    clear: ft,
    forEach: ue(!1, !1)
  }, t = {
    get(s) {
      return ce(this, s, !1, !0);
    },
    get size() {
      return ae(this);
    },
    has: le,
    add(s) {
      return lt.call(this, s, !0);
    },
    set(s, i) {
      return at.call(this, s, i, !0);
    },
    delete: ut,
    clear: ft,
    forEach: ue(!1, !0)
  }, n = {
    get(s) {
      return ce(this, s, !0);
    },
    get size() {
      return ae(this, !0);
    },
    has(s) {
      return le.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: ue(!0, !1)
  }, r = {
    get(s) {
      return ce(this, s, !0, !0);
    },
    get size() {
      return ae(this, !0);
    },
    has(s) {
      return le.call(this, s, !0);
    },
    add: M("add"),
    set: M("set"),
    delete: M("delete"),
    clear: M("clear"),
    forEach: ue(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = fe(s, !1, !1), n[s] = fe(s, !0, !1), t[s] = fe(s, !1, !0), r[s] = fe(
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
  Vn,
  $n,
  Tn,
  Dn
] = /* @__PURE__ */ Cn();
function Qe(e, t) {
  const n = t ? e ? Dn : Tn : e ? $n : Vn;
  return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    E(n, o) && o in r ? n : r,
    o,
    s
  );
}
const Pn = {
  get: /* @__PURE__ */ Qe(!1, !1)
}, vn = {
  get: /* @__PURE__ */ Qe(!0, !1)
}, Mn = {
  get: /* @__PURE__ */ Qe(!0, !0)
};
function Rt(e, t, n) {
  const r = p(n);
  if (r !== n && t.call(e, r)) {
    const o = wt(e);
    re(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ct = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap();
function Fn(e) {
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
function jn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fn(wt(e));
}
function Tt(e) {
  return H(e) ? e : Ze(
    e,
    !1,
    xn,
    Pn,
    Ct
  );
}
function Dt(e) {
  return Ze(
    e,
    !0,
    In,
    vn,
    Vt
  );
}
function de(e) {
  return Ze(
    e,
    !0,
    Rn,
    Mn,
    $t
  );
}
function Ze(e, t, n, r, o) {
  if (!S(e))
    return I.NODE_ENV !== "production" && re(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = o.get(e);
  if (s)
    return s;
  const i = jn(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? r : n
  );
  return o.set(e, c), c;
}
function Q(e) {
  return H(e) ? Q(e.__v_raw) : !!(e && e.__v_isReactive);
}
function H(e) {
  return !!(e && e.__v_isReadonly);
}
function L(e) {
  return !!(e && e.__v_isShallow);
}
function He(e) {
  return e ? !!e.__v_raw : !1;
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Ln(e) {
  return Object.isExtensible(e) && an(e, "__v_skip", !0), e;
}
const Xe = (e) => S(e) ? Tt(e) : e, ke = (e) => S(e) ? Dt(e) : e;
function R(e) {
  return !!(e && e.__v_isRef === !0);
}
function Hn(e) {
  return R(e) ? e.value : e;
}
const zn = {
  get: (e, t, n) => Hn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return R(o) && !R(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Kn(e) {
  return Q(e) ? e : new Proxy(e, zn);
}
var u = {};
const J = [];
function Wn(e) {
  J.push(e);
}
function Un() {
  J.pop();
}
let De = !1;
function b(e, ...t) {
  if (De) return;
  De = !0, xe();
  const n = J.length ? J[J.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = Bn();
  if (r)
    G(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var i, c;
          return (c = (i = s.toString) == null ? void 0 : i.call(s)) != null ? c : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: s }) => `at <${Yt(n, s.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    o.length && s.push(`
`, ...qn(o)), console.warn(...s);
  }
  Ie(), De = !1;
}
function Bn() {
  let e = J[J.length - 1];
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
function qn(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Jn(n));
  }), t;
}
function Jn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, o = ` at <${Yt(
    e.component,
    e.type,
    r
  )}`, s = ">" + n;
  return e.props ? [o, ...Gn(e.props), s] : [o + s];
}
function Gn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Pt(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Pt(e, t, n) {
  return $(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : R(t) ? (t = Pt(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const vt = {
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
  14: "scheduler flush",
  15: "component update"
};
function G(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    et(o, t, n);
  }
}
function _e(e, t, n, r) {
  if (N(e)) {
    const o = G(e, t, n, r);
    return o && rn(o) && o.catch((s) => {
      et(s, t, n);
    }), o;
  }
  if (g(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++)
      o.push(_e(e[s], t, n, r));
    return o;
  } else u.NODE_ENV !== "production" && b(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function et(e, t, n, r = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, c = u.NODE_ENV !== "production" ? vt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const f = s.ec;
      if (f) {
        for (let _ = 0; _ < f.length; _++)
          if (f[_](e, i, c) === !1)
            return;
      }
      s = s.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      xe(), G(
        a,
        null,
        10,
        [e, i, c]
      ), Ie();
      return;
    }
  }
  Yn(e, n, o, r);
}
function Yn(e, t, n, r = !0) {
  if (u.NODE_ENV !== "production") {
    const o = vt[t];
    if (n && Wn(n), b(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Un(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let be = !1, ze = !1;
const C = [];
let F = 0;
const Z = [];
let A = null, W = 0;
const Mt = /* @__PURE__ */ Promise.resolve();
let tt = null;
const Qn = 100;
function Zn(e) {
  const t = tt || Mt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xn(e) {
  let t = F + 1, n = C.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = C[r], s = oe(o);
    s < e || s === e && o.pre ? t = r + 1 : n = r;
  }
  return t;
}
function nt(e) {
  (!C.length || !C.includes(
    e,
    be && e.allowRecurse ? F + 1 : F
  )) && (e.id == null ? C.push(e) : C.splice(Xn(e.id), 0, e), At());
}
function At() {
  !be && !ze && (ze = !0, tt = Mt.then(jt));
}
function Ft(e) {
  g(e) ? Z.push(...e) : (!A || !A.includes(
    e,
    e.allowRecurse ? W + 1 : W
  )) && Z.push(e), At();
}
function kn(e) {
  if (Z.length) {
    const t = [...new Set(Z)].sort(
      (n, r) => oe(n) - oe(r)
    );
    if (Z.length = 0, A) {
      A.push(...t);
      return;
    }
    for (A = t, u.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), W = 0; W < A.length; W++) {
      const n = A[W];
      u.NODE_ENV !== "production" && Lt(e, n) || n.active !== !1 && n();
    }
    A = null, W = 0;
  }
}
const oe = (e) => e.id == null ? 1 / 0 : e.id, er = (e, t) => {
  const n = oe(e) - oe(t);
  if (n === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return n;
};
function jt(e) {
  ze = !1, be = !0, u.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), C.sort(er);
  const t = u.NODE_ENV !== "production" ? (n) => Lt(e, n) : k;
  try {
    for (F = 0; F < C.length; F++) {
      const n = C[F];
      if (n && n.active !== !1) {
        if (u.NODE_ENV !== "production" && t(n))
          continue;
        G(
          n,
          n.i,
          n.i ? 15 : 14
        );
      }
    }
  } finally {
    F = 0, C.length = 0, kn(e), be = !1, tt = null, (C.length || Z.length) && jt(e);
  }
}
function Lt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Qn) {
      const r = t.i, o = r && Gt(r.type);
      return et(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Pe = /* @__PURE__ */ new Map();
u.NODE_ENV !== "production" && (Nt().__VUE_HMR_RUNTIME__ = {
  createRecord: ve(tr),
  rerender: ve(nr),
  reload: ve(rr)
});
const we = /* @__PURE__ */ new Map();
function tr(e, t) {
  return we.has(e) ? !1 : (we.set(e, {
    initialDef: Ne(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ne(e) {
  return Qt(e) ? e.__vccOpts : e;
}
function nr(e, t) {
  const n = we.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Ne(r.type).render = t), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function rr(e, t) {
  const n = we.get(e);
  if (!n) return;
  t = Ne(t), dt(n.initialDef, t);
  const r = [...n.instances];
  for (let o = 0; o < r.length; o++) {
    const s = r[o], i = Ne(s.type);
    let c = Pe.get(i);
    c || (i !== n.initialDef && dt(i, t), Pe.set(i, c = /* @__PURE__ */ new Set())), c.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (c.add(s), s.ceReload(t.styles), c.delete(s)) : s.parent ? (s.parent.effect.dirty = !0, nt(() => {
      s.parent.update(), c.delete(s);
    })) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Ft(() => {
    Pe.clear();
  });
}
function dt(e, t) {
  T(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ve(e) {
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
let v = null, or = null;
function Ht(e, t) {
  e.shapeFlag & 6 && e.component ? Ht(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const sr = Symbol.for("v-ndc"), Ke = (e) => e ? Mr(e) ? Ar(e) : Ke(e.parent) : null, ne = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ T(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => u.NODE_ENV !== "production" ? de(e.props) : e.props,
    $attrs: (e) => u.NODE_ENV !== "production" ? de(e.attrs) : e.attrs,
    $slots: (e) => u.NODE_ENV !== "production" ? de(e.slots) : e.slots,
    $refs: (e) => u.NODE_ENV !== "production" ? de(e.refs) : e.refs,
    $parent: (e) => Ke(e.parent),
    $root: (e) => Ke(e.root),
    $emit: (e) => e.emit,
    $options: (e) => lr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, nt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => Er.bind(e)
  })
), ir = (e) => e === "_" || e === "$", Me = (e, t) => e !== P && !e.__isScriptSetup && E(e, t), cr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: c, appContext: a } = e;
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
        if (Me(r, t))
          return i[t] = 1, r[t];
        if (o !== P && E(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && E(f, t)
        )
          return i[t] = 3, s[t];
        if (n !== P && E(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const _ = ne[t];
    let l, d;
    if (_)
      return t === "$attrs" ? y(e.attrs, "get", "") : u.NODE_ENV !== "production" && t === "$slots" && y(e, "get", t), _(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== P && E(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, E(d, t)
    )
      return d[t];
    u.NODE_ENV !== "production" && v && (!$(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== P && ir(t[0]) && E(o, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === v && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: s } = e;
    return Me(o, t) ? (o[t] = n, !0) : u.NODE_ENV !== "production" && o.__isScriptSetup && E(o, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== P && E(r, t) ? (r[t] = n, !0) : E(e.props, t) ? (u.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (u.NODE_ENV !== "production" && b(
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
    let c;
    return !!n[i] || e !== P && E(e, i) || Me(t, i) || (c = s[0]) && E(c, i) || E(r, i) || E(ne, i) || E(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : E(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
u.NODE_ENV !== "production" && (cr.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function pt(e) {
  return g(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function lr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = s.get(t);
  let a;
  return c ? a = c : !o.length && !n && !r ? a = t : (a = {}, o.length && o.forEach(
    (f) => Oe(a, f, i, !0)
  ), Oe(a, t, i)), S(t) && s.set(t, a), a;
}
function Oe(e, t, n, r = !1) {
  const { mixins: o, extends: s } = t;
  s && Oe(e, s, n, !0), o && o.forEach(
    (i) => Oe(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      u.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = ar[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const ar = {
  data: ht,
  props: gt,
  emits: gt,
  // objects
  methods: ee,
  computed: ee,
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
  components: ee,
  directives: ee,
  // watch
  watch: fr,
  // provide / inject
  provide: ht,
  inject: ur
};
function ht(e, t) {
  return t ? e ? function() {
    return T(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ur(e, t) {
  return ee(_t(e), _t(t));
}
function _t(e) {
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
function ee(e, t) {
  return e ? T(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gt(e, t) {
  return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : T(
    /* @__PURE__ */ Object.create(null),
    pt(e),
    pt(t ?? {})
  ) : t;
}
function fr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = T(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = O(e[r], t[r]);
  return n;
}
let mt = null;
function dr(e, t, n = !1) {
  const r = Ce || v;
  if (r || mt) {
    const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : mt._context.provides;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(r && r.proxy) : t;
    u.NODE_ENV !== "production" && b(`injection "${String(e)}" not found.`);
  } else u.NODE_ENV !== "production" && b("inject() can only be used inside setup() or functional components.");
}
const pr = {}, zt = (e) => Object.getPrototypeOf(e) === pr, hr = (e) => e.__isTeleport, Et = Nr, _r = Symbol.for("v-scx"), gr = () => {
  {
    const e = dr(_r);
    return e || u.NODE_ENV !== "production" && b(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, pe = {};
function mr(e, t, {
  immediate: n,
  deep: r,
  flush: o,
  once: s,
  onTrack: i,
  onTrigger: c
} = P) {
  if (t && s) {
    const h = t;
    t = (...Te) => {
      h(...Te), $e();
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
  }, f = Ce, _ = (h) => r === !0 ? h : (
    // for deep: false, only traverse root-level properties
    U(h, r === !1 ? 1 : void 0)
  );
  let l, d = !1, m = !1;
  if (R(e) ? (l = () => e.value, d = L(e)) : Q(e) ? (l = () => _(e), d = !0) : g(e) ? (m = !0, d = e.some((h) => Q(h) || L(h)), l = () => e.map((h) => {
    if (R(h))
      return h.value;
    if (Q(h))
      return _(h);
    if (N(h))
      return G(h, f, 2);
    u.NODE_ENV !== "production" && a(h);
  })) : N(e) ? t ? l = () => G(e, f, 2) : l = () => (w && w(), _e(
    e,
    f,
    3,
    [D]
  )) : (l = k, u.NODE_ENV !== "production" && a(e)), t && r) {
    const h = l;
    l = () => U(h());
  }
  let w, D = (h) => {
    w = x.onStop = () => {
      G(h, f, 4), w = x.onStop = void 0;
    };
  }, Ve;
  if (Jt)
    if (D = k, t ? n && _e(t, f, 3, [
      l(),
      m ? [] : void 0,
      D
    ]) : l(), o === "sync") {
      const h = gr();
      Ve = h.__watcherHandles || (h.__watcherHandles = []);
    } else
      return k;
  let z = m ? new Array(e.length).fill(pe) : pe;
  const K = () => {
    if (!(!x.active || !x.dirty))
      if (t) {
        const h = x.run();
        (r || d || (m ? h.some((Te, Zt) => X(Te, z[Zt])) : X(h, z))) && (w && w(), _e(t, f, 3, [
          h,
          // pass undefined as the old value when it's changed for the first time
          z === pe ? void 0 : m && z[0] === pe ? [] : z,
          D
        ]), z = h);
      } else
        x.run();
  };
  K.allowRecurse = !!t;
  let ie;
  o === "sync" ? ie = K : o === "post" ? ie = () => Et(K, f && f.suspense) : (K.pre = !0, f && (K.id = f.uid), ie = () => nt(K));
  const x = new gn(l, k, ie), $e = () => {
    x.stop();
  };
  return u.NODE_ENV !== "production" && (x.onTrack = i, x.onTrigger = c), t ? n ? K() : z = x.run() : o === "post" ? Et(
    x.run.bind(x),
    f && f.suspense
  ) : x.run(), Ve && Ve.push($e), $e;
}
function Er(e, t, n) {
  const r = this.proxy, o = $(e) ? e.includes(".") ? br(r, e) : () => r[e] : e.bind(r, r);
  let s;
  N(t) ? s = t : (s = t.handler, n = t);
  const i = vr(this), c = mr(o, s.bind(r), n);
  return i(), c;
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
function U(e, t = 1 / 0, n) {
  if (t <= 0 || !S(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, R(e))
    U(e.value, t, n);
  else if (g(e))
    for (let r = 0; r < e.length; r++)
      U(e[r], t, n);
  else if (nn(e) || Y(e))
    e.forEach((r) => {
      U(r, t, n);
    });
  else if (sn(e)) {
    for (const r in e)
      U(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && U(e[r], t, n);
  }
  return e;
}
const wr = (e) => e.__isSuspense;
function Nr(e, t) {
  t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Ft(e);
}
const Kt = Symbol.for("v-fgt"), Or = Symbol.for("v-txt"), Sr = Symbol.for("v-cmt"), ge = [];
let V = null;
function yr(e = !1) {
  ge.push(V = e ? null : []);
}
function xr() {
  ge.pop(), V = ge[ge.length - 1] || null;
}
function Ir(e) {
  return e.dynamicChildren = V || kt, xr(), V && V.push(e), e;
}
function Rr(e, t, n, r, o, s) {
  return Ir(
    Ut(
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
function Cr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Vr = (...e) => Bt(
  ...e
), Wt = ({ key: e }) => e ?? null, me = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $(e) || R(e) || N(e) ? { i: v, r: e, k: t, f: !!n } : e : null);
function Ut(e, t = null, n = null, r = 0, o = null, s = e === Kt ? 0 : 1, i = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Wt(t),
    ref: t && me(t),
    scopeId: or,
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: v
  };
  return c ? (rt(a, n), s & 128 && e.normalize(a)) : n && (a.shapeFlag |= $(n) ? 8 : 16), u.NODE_ENV !== "production" && a.key !== a.key && b("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  V && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && V.push(a), a;
}
const $r = u.NODE_ENV !== "production" ? Vr : Bt;
function Bt(e, t = null, n = null, r = 0, o = null, s = !1) {
  if ((!e || e === sr) && (u.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = Sr), Cr(e)) {
    const c = Se(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && rt(c, n), !s && V && (c.shapeFlag & 6 ? V[V.indexOf(e)] = c : V.push(c)), c.patchFlag = -2, c;
  }
  if (Qt(e) && (e = e.__vccOpts), t) {
    t = Tr(t);
    let { class: c, style: a } = t;
    c && !$(c) && (t.class = qe(c)), S(a) && (He(a) && !g(a) && (a = T({}, a)), t.style = Be(a));
  }
  const i = $(e) ? 1 : wr(e) ? 128 : hr(e) ? 64 : S(e) ? 4 : N(e) ? 2 : 0;
  return u.NODE_ENV !== "production" && i & 4 && He(e) && (e = p(e), b(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Ut(
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
function Tr(e) {
  return e ? He(e) || zt(e) ? T({}, e) : e : null;
}
function Se(e, t, n = !1, r = !1) {
  const { props: o, ref: s, patchFlag: i, children: c, transition: a } = e, f = t ? Pr(o || {}, t) : o, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Wt(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? g(s) ? s.concat(me(t)) : [s, me(t)] : me(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u.NODE_ENV !== "production" && i === -1 && g(c) ? c.map(qt) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Kt ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Se(e.ssContent),
    ssFallback: e.ssFallback && Se(e.ssFallback),
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
function qt(e) {
  const t = Se(e);
  return g(e.children) && (t.children = e.children.map(qt)), t;
}
function Dr(e = " ", t = 0) {
  return $r(Or, null, e, t);
}
function rt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (g(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), rt(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !zt(t) ? t._ctx = v : o === 3 && v && (v.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else N(t) ? (t = { default: t, _ctx: v }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Dr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = qe([t.class, r.class]));
      else if (o === "style")
        t.style = Be([t.style, r.style]);
      else if (en(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(g(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
let Ce = null, We;
{
  const e = Nt(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
      o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
    };
  };
  We = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ce = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Jt = n
  );
}
const vr = (e) => {
  const t = Ce;
  return We(e), e.scope.on(), () => {
    e.scope.off(), We(t);
  };
};
function Mr(e) {
  return e.vnode.shapeFlag & 4;
}
let Jt = !1;
function Ar(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Kn(Ln(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ne)
        return ne[n](e);
    },
    has(t, n) {
      return n in t || n in ne;
    }
  })) : e.proxy;
}
const Fr = /(?:^|[-_])(\w)/g, jr = (e) => e.replace(Fr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Gt(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Yt(e, t, n = !1) {
  let r = Gt(t);
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
  return r ? jr(r) : n ? "App" : "Anonymous";
}
function Qt(e) {
  return N(e) && "__vccOpts" in e;
}
function Lr() {
  if (u.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(l) {
      return S(l) ? l.__isVue ? ["div", e, "VueInstance"] : R(l) ? [
        "div",
        {},
        ["span", e, _(l)],
        "<",
        c(l.value),
        ">"
      ] : Q(l) ? [
        "div",
        {},
        ["span", e, L(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${H(l) ? " (readonly)" : ""}`
      ] : H(l) ? [
        "div",
        {},
        ["span", e, L(l) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(l),
        ">"
      ] : null : null;
    },
    hasBody(l) {
      return l && l.__isVue;
    },
    body(l) {
      if (l && l.__isVue)
        return [
          "div",
          {},
          ...s(l.$)
        ];
    }
  };
  function s(l) {
    const d = [];
    l.type.props && l.props && d.push(i("props", p(l.props))), l.setupState !== P && d.push(i("setup", l.setupState)), l.data !== P && d.push(i("data", p(l.data)));
    const m = a(l, "computed");
    m && d.push(i("computed", m));
    const w = a(l, "inject");
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
      ["object", { object: l }]
    ]), d;
  }
  function i(l, d) {
    return d = T({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        l
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
          c(d[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, d = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", r, l] : S(l) ? ["object", { object: d ? p(l) : l }] : ["span", n, String(l)];
  }
  function a(l, d) {
    const m = l.type;
    if (N(m))
      return;
    const w = {};
    for (const D in l.ctx)
      f(m, D, d) && (w[D] = l.ctx[D]);
    return w;
  }
  function f(l, d, m) {
    const w = l[m];
    if (g(w) && w.includes(d) || S(w) && d in w || l.extends && f(l.extends, d, m) || l.mixins && l.mixins.some((D) => f(D, d, m)))
      return !0;
  }
  function _(l) {
    return L(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
var Hr = {};
function zr() {
  Lr();
}
Hr.NODE_ENV !== "production" && zr();
const Kr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Ee = window.jQuery, he = (e) => e === void 0 ? e : Ee.fn.bootstrapTable.utils.extend(!0, Array.isArray(e) ? [] : {}, e), Wr = {
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
    this.$table = Ee(this.$el), this.$table.on("all.bs.table", (e, t, n) => {
      let r = Ee.fn.bootstrapTable.events[t];
      r = r.replace(/([A-Z])/g, "-$1").toLowerCase(), this.$emit("on-all", ...n), this.$emit(r, ...n);
    }), this._initTable();
  },
  methods: {
    _initTable() {
      const e = {
        ...he(this.options),
        columns: he(this.columns),
        data: he(this.data)
      };
      this._hasInit ? this.refreshOptions(e) : (this.$table.bootstrapTable(e), this._hasInit = !0);
    },
    ...(() => {
      const e = {};
      for (const t of Ee.fn.bootstrapTable.methods)
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
        this.load(he(this.data));
      },
      deep: !0
    }
  }
};
function Ur(e, t, n, r, o, s) {
  return yr(), Rr("table");
}
const Br = /* @__PURE__ */ Kr(Wr, [["render", Ur]]);
export {
  Br as default
};
