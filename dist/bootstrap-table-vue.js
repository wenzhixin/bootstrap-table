var Dt = {};
/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function un(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const I = Dt.NODE_ENV !== "production" ? Object.freeze({}) : {}, fn = Dt.NODE_ENV !== "production" ? Object.freeze([]) : [], le = () => {
}, pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), C = Object.assign, dn = Object.prototype.hasOwnProperty, w = (e, t) => dn.call(e, t), b = Array.isArray, ne = (e) => Pe(e) === "[object Map]", hn = (e) => Pe(e) === "[object Set]", O = (e) => typeof e == "function", A = (e) => typeof e == "string", pe = (e) => typeof e == "symbol", v = (e) => e !== null && typeof e == "object", gn = (e) => (v(e) || O(e)) && O(e.then) && O(e.catch), _n = Object.prototype.toString, Pe = (e) => _n.call(e), Vt = (e) => Pe(e).slice(8, -1), mn = (e) => Pe(e) === "[object Object]", et = (e) => A(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, En = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Z = (e, t) => !Object.is(e, t), wn = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
};
let gt;
const Tt = () => gt || (gt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function tt(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = A(r) ? xn(r) : tt(r);
      if (s)
        for (const i in s)
          t[i] = s[i];
    }
    return t;
  } else if (A(e) || v(e))
    return e;
}
const Nn = /;(?![^(]*\))/g, Sn = /:([^]+)/, On = /\/\*[^]*?\*\//g;
function xn(e) {
  const t = {};
  return e.replace(On, "").split(Nn).forEach((n) => {
    if (n) {
      const r = n.split(Sn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function nt(e) {
  let t = "";
  if (A(e))
    t = e;
  else if (b(e))
    for (let n = 0; n < e.length; n++) {
      const r = nt(e[n]);
      r && (t += r + " ");
    }
  else if (v(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
var E = {};
function B(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let _;
const Ke = /* @__PURE__ */ new WeakSet();
class yn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ke.has(this) && (Ke.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vn(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, _t(this), Rt(this);
    const t = _, n = P;
    _ = this, P = !0;
    try {
      return this.fn();
    } finally {
      E.NODE_ENV !== "production" && _ !== this && B(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ct(this), _ = t, P = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        it(t);
      this.deps = this.depsTail = void 0, _t(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ke.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ye(this) && this.run();
  }
  get dirty() {
    return Ye(this);
  }
}
let It = 0, te;
function vn(e) {
  e.flags |= 8, e.next = te, te = e;
}
function rt() {
  It++;
}
function st() {
  if (--It > 0)
    return;
  let e;
  for (; te; ) {
    let t = te, n;
    for (; t; )
      t.flags & 1 || (t.flags &= -9), t = t.next;
    for (t = te, te = void 0; t; ) {
      if (n = t.next, t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Rt(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ct(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === n && (n = s), it(r), Vn(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  e.deps = t, e.depsTail = n;
}
function Ye(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Dn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Dn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ve))
    return;
  e.globalVersion = ve;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Ye(e)) {
    e.flags &= -3;
    return;
  }
  const n = _, r = P;
  _ = e, P = !0;
  try {
    Rt(e);
    const s = e.fn(e._value);
    (t.version === 0 || Z(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    _ = n, P = r, Ct(e), e.flags &= -3;
  }
}
function it(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: s } = e;
  if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r), E.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), !n.subs && n.computed) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      it(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Vn(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let P = !0;
const $t = [];
function Ae() {
  $t.push(P), P = !1;
}
function Me() {
  const e = $t.pop();
  P = e === void 0 ? !0 : e;
}
function _t(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = _;
    _ = void 0;
    try {
      t();
    } finally {
      _ = n;
    }
  }
}
let ve = 0;
class Tn {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class In {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.target = void 0, this.map = void 0, this.key = void 0, this.sc = 0, E.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!_ || !P || _ === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _)
      n = this.activeLink = new Tn(_, this), _.deps ? (n.prevDep = _.depsTail, _.depsTail.nextDep = n, _.depsTail = n) : _.deps = _.depsTail = n, Pt(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = _.depsTail, n.nextDep = void 0, _.depsTail.nextDep = n, _.depsTail = n, _.deps === n && (_.deps = r);
    }
    return E.NODE_ENV !== "production" && _.onTrack && _.onTrack(
      C(
        {
          effect: _
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, ve++, this.notify(t);
  }
  notify(t) {
    rt();
    try {
      if (E.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            C(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      st();
    }
  }
}
function Pt(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Pt(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), E.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Ge = /* @__PURE__ */ new WeakMap(), G = Symbol(
  E.NODE_ENV !== "production" ? "Object iterate" : ""
), Qe = Symbol(
  E.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ue = Symbol(
  E.NODE_ENV !== "production" ? "Array iterate" : ""
);
function x(e, t, n) {
  if (P && _) {
    let r = Ge.get(e);
    r || Ge.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || (r.set(n, s = new In()), s.target = e, s.map = r, s.key = n), E.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function U(e, t, n, r, s, i) {
  const o = Ge.get(e);
  if (!o) {
    ve++;
    return;
  }
  const l = (a) => {
    a && (E.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: s,
      oldTarget: i
    }) : a.trigger());
  };
  if (rt(), t === "clear")
    o.forEach(l);
  else {
    const a = b(e), f = a && et(n);
    if (a && n === "length") {
      const g = Number(r);
      o.forEach((c, u) => {
        (u === "length" || u === ue || !pe(u) && u >= g) && l(c);
      });
    } else
      switch (n !== void 0 && l(o.get(n)), f && l(o.get(ue)), t) {
        case "add":
          a ? f && l(o.get("length")) : (l(o.get(G)), ne(e) && l(o.get(Qe)));
          break;
        case "delete":
          a || (l(o.get(G)), ne(e) && l(o.get(Qe)));
          break;
        case "set":
          ne(e) && l(o.get(G));
          break;
      }
  }
  st();
}
function k(e) {
  const t = d(e);
  return t === e ? t : (x(t, "iterate", ue), T(e) ? t : t.map(V));
}
function ot(e) {
  return x(e = d(e), "iterate", ue), e;
}
const Rn = {
  __proto__: null,
  [Symbol.iterator]() {
    return ze(this, Symbol.iterator, V);
  },
  concat(...e) {
    return k(this).concat(
      ...e.map((t) => b(t) ? k(t) : t)
    );
  },
  entries() {
    return ze(this, "entries", (e) => (e[1] = V(e[1]), e));
  },
  every(e, t) {
    return j(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return j(this, "filter", e, t, (n) => n.map(V), arguments);
  },
  find(e, t) {
    return j(this, "find", e, t, V, arguments);
  },
  findIndex(e, t) {
    return j(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return j(this, "findLast", e, t, V, arguments);
  },
  findLastIndex(e, t) {
    return j(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return j(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Le(this, "includes", e);
  },
  indexOf(...e) {
    return Le(this, "indexOf", e);
  },
  join(e) {
    return k(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Le(this, "lastIndexOf", e);
  },
  map(e, t) {
    return j(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return oe(this, "pop");
  },
  push(...e) {
    return oe(this, "push", e);
  },
  reduce(e, ...t) {
    return mt(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return mt(this, "reduceRight", e, t);
  },
  shift() {
    return oe(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return j(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return oe(this, "splice", e);
  },
  toReversed() {
    return k(this).toReversed();
  },
  toSorted(e) {
    return k(this).toSorted(e);
  },
  toSpliced(...e) {
    return k(this).toSpliced(...e);
  },
  unshift(...e) {
    return oe(this, "unshift", e);
  },
  values() {
    return ze(this, "values", V);
  }
};
function ze(e, t, n) {
  const r = ot(e), s = r[t]();
  return r !== e && !T(e) && (s._next = s.next, s.next = () => {
    const i = s._next();
    return i.value && (i.value = n(i.value)), i;
  }), s;
}
const Cn = Array.prototype;
function j(e, t, n, r, s, i) {
  const o = ot(e), l = o !== e && !T(e), a = o[t];
  if (a !== Cn[t]) {
    const c = a.apply(e, i);
    return l ? V(c) : c;
  }
  let f = n;
  o !== e && (l ? f = function(c, u) {
    return n.call(this, V(c), u, e);
  } : n.length > 2 && (f = function(c, u) {
    return n.call(this, c, u, e);
  }));
  const g = a.call(o, f, r);
  return l && s ? s(g) : g;
}
function mt(e, t, n, r) {
  const s = ot(e);
  let i = n;
  return s !== e && (T(e) ? n.length > 3 && (i = function(o, l, a) {
    return n.call(this, o, l, a, e);
  }) : i = function(o, l, a) {
    return n.call(this, o, V(l), a, e);
  }), s[t](i, ...r);
}
function Le(e, t, n) {
  const r = d(e);
  x(r, "iterate", ue);
  const s = r[t](...n);
  return (s === -1 || s === !1) && De(n[0]) ? (n[0] = d(n[0]), r[t](...n)) : s;
}
function oe(e, t, n = []) {
  Ae(), rt();
  const r = d(e)[t].apply(e, n);
  return st(), Me(), r;
}
const $n = /* @__PURE__ */ un("__proto__,__v_isRef,__isVue"), At = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pe)
);
function Pn(e) {
  pe(e) || (e = String(e));
  const t = d(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
class Mt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return r === (s ? i ? Kt : Wt : i ? qn : Ht).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const o = b(t);
    if (!s) {
      let a;
      if (o && (a = Rn[n]))
        return a;
      if (n === "hasOwnProperty")
        return Pn;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      D(t) ? t : r
    );
    return (pe(n) ? At.has(n) : $n(n)) || (s || x(t, "get", n), i) ? l : D(l) ? o && et(n) ? l : l.value : v(l) ? s ? Lt(l) : zt(l) : l;
  }
}
class An extends Mt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let i = t[n];
    if (!this._isShallow) {
      const a = J(i);
      if (!T(r) && !J(r) && (i = d(i), r = d(r)), !b(t) && D(i) && !D(r))
        return a ? !1 : (i.value = r, !0);
    }
    const o = b(t) && et(n) ? Number(n) < t.length : w(t, n), l = Reflect.set(
      t,
      n,
      r,
      D(t) ? t : s
    );
    return t === d(s) && (o ? Z(r, i) && U(t, "set", n, r, i) : U(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = w(t, n), s = t[n], i = Reflect.deleteProperty(t, n);
    return i && r && U(t, "delete", n, void 0, s), i;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!pe(n) || !At.has(n)) && x(t, "has", n), r;
  }
  ownKeys(t) {
    return x(
      t,
      "iterate",
      b(t) ? "length" : G
    ), Reflect.ownKeys(t);
  }
}
class Ft extends Mt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return E.NODE_ENV !== "production" && B(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return E.NODE_ENV !== "production" && B(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Mn = /* @__PURE__ */ new An(), Fn = /* @__PURE__ */ new Ft(), jn = /* @__PURE__ */ new Ft(!0), ct = (e) => e, Fe = (e) => Reflect.getPrototypeOf(e);
function ge(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = d(e), i = d(t);
  n || (Z(t, i) && x(s, "get", t), x(s, "get", i));
  const { has: o } = Fe(s), l = r ? ct : n ? ut : V;
  if (o.call(s, t))
    return l(e.get(t));
  if (o.call(s, i))
    return l(e.get(i));
  e !== s && e.get(t);
}
function _e(e, t = !1) {
  const n = this.__v_raw, r = d(n), s = d(e);
  return t || (Z(e, s) && x(r, "has", e), x(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function me(e, t = !1) {
  return e = e.__v_raw, !t && x(d(e), "iterate", G), Reflect.get(e, "size", e);
}
function bt(e, t = !1) {
  !t && !T(e) && !J(e) && (e = d(e));
  const n = d(this);
  return Fe(n).has.call(n, e) || (n.add(e), U(n, "add", e, e)), this;
}
function Et(e, t, n = !1) {
  !n && !T(t) && !J(t) && (t = d(t));
  const r = d(this), { has: s, get: i } = Fe(r);
  let o = s.call(r, e);
  o ? E.NODE_ENV !== "production" && jt(r, s, e) : (e = d(e), o = s.call(r, e));
  const l = i.call(r, e);
  return r.set(e, t), o ? Z(t, l) && U(r, "set", e, t, l) : U(r, "add", e, t), this;
}
function wt(e) {
  const t = d(this), { has: n, get: r } = Fe(t);
  let s = n.call(t, e);
  s ? E.NODE_ENV !== "production" && jt(t, n, e) : (e = d(e), s = n.call(t, e));
  const i = r ? r.call(t, e) : void 0, o = t.delete(e);
  return s && U(t, "delete", e, void 0, i), o;
}
function Nt() {
  const e = d(this), t = e.size !== 0, n = E.NODE_ENV !== "production" ? ne(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && U(e, "clear", void 0, void 0, n), r;
}
function be(e, t) {
  return function(r, s) {
    const i = this, o = i.__v_raw, l = d(o), a = t ? ct : e ? ut : V;
    return !e && x(l, "iterate", G), o.forEach((f, g) => r.call(s, a(f), a(g), i));
  };
}
function Ee(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, i = d(s), o = ne(i), l = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = s[e](...r), g = n ? ct : t ? ut : V;
    return !t && x(
      i,
      "iterate",
      a ? Qe : G
    ), {
      // iterator protocol
      next() {
        const { value: c, done: u } = f.next();
        return u ? { value: c, done: u } : {
          value: l ? [g(c[0]), g(c[1])] : g(c),
          done: u
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function K(e) {
  return function(...t) {
    if (E.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      B(
        `${En(e)} operation ${n}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hn() {
  const e = {
    get(i) {
      return ge(this, i);
    },
    get size() {
      return me(this);
    },
    has: _e,
    add: bt,
    set: Et,
    delete: wt,
    clear: Nt,
    forEach: be(!1, !1)
  }, t = {
    get(i) {
      return ge(this, i, !1, !0);
    },
    get size() {
      return me(this);
    },
    has: _e,
    add(i) {
      return bt.call(this, i, !0);
    },
    set(i, o) {
      return Et.call(this, i, o, !0);
    },
    delete: wt,
    clear: Nt,
    forEach: be(!1, !0)
  }, n = {
    get(i) {
      return ge(this, i, !0);
    },
    get size() {
      return me(this, !0);
    },
    has(i) {
      return _e.call(this, i, !0);
    },
    add: K("add"),
    set: K("set"),
    delete: K("delete"),
    clear: K("clear"),
    forEach: be(!0, !1)
  }, r = {
    get(i) {
      return ge(this, i, !0, !0);
    },
    get size() {
      return me(this, !0);
    },
    has(i) {
      return _e.call(this, i, !0);
    },
    add: K("add"),
    set: K("set"),
    delete: K("delete"),
    clear: K("clear"),
    forEach: be(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = Ee(i, !1, !1), n[i] = Ee(i, !0, !1), t[i] = Ee(i, !1, !0), r[i] = Ee(
      i,
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
  Wn,
  Kn,
  zn,
  Ln
] = /* @__PURE__ */ Hn();
function lt(e, t) {
  const n = t ? e ? Ln : zn : e ? Kn : Wn;
  return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    w(n, s) && s in r ? n : r,
    s,
    i
  );
}
const Un = {
  get: /* @__PURE__ */ lt(!1, !1)
}, Bn = {
  get: /* @__PURE__ */ lt(!0, !1)
}, Jn = {
  get: /* @__PURE__ */ lt(!0, !0)
};
function jt(e, t, n) {
  const r = d(n);
  if (r !== n && t.call(e, r)) {
    const s = Vt(e);
    B(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ht = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap();
function Yn(e) {
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
function Gn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Yn(Vt(e));
}
function zt(e) {
  return J(e) ? e : at(
    e,
    !1,
    Mn,
    Un,
    Ht
  );
}
function Lt(e) {
  return at(
    e,
    !0,
    Fn,
    Bn,
    Wt
  );
}
function we(e) {
  return at(
    e,
    !0,
    jn,
    Jn,
    Kt
  );
}
function at(e, t, n, r, s) {
  if (!v(e))
    return E.NODE_ENV !== "production" && B(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const o = Gn(e);
  if (o === 0)
    return e;
  const l = new Proxy(
    e,
    o === 2 ? r : n
  );
  return s.set(e, l), l;
}
function re(e) {
  return J(e) ? re(e.__v_raw) : !!(e && e.__v_isReactive);
}
function J(e) {
  return !!(e && e.__v_isReadonly);
}
function T(e) {
  return !!(e && e.__v_isShallow);
}
function De(e) {
  return e ? !!e.__v_raw : !1;
}
function d(e) {
  const t = e && e.__v_raw;
  return t ? d(t) : e;
}
function Qn(e) {
  return !w(e, "__v_skip") && Object.isExtensible(e) && wn(e, "__v_skip", !0), e;
}
const V = (e) => v(e) ? zt(e) : e, ut = (e) => v(e) ? Lt(e) : e;
function D(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Zn(e) {
  return D(e) ? e.value : e;
}
const Xn = {
  get: (e, t, n) => t === "__v_raw" ? e : Zn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return D(s) && !D(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function kn(e) {
  return re(e) ? e : new Proxy(e, Xn);
}
const Ne = {}, Ve = /* @__PURE__ */ new WeakMap();
let Y;
function er(e, t = !1, n = Y) {
  if (n) {
    let r = Ve.get(n);
    r || Ve.set(n, r = []), r.push(e);
  } else E.NODE_ENV !== "production" && !t && B(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function tr(e, t, n = I) {
  const { immediate: r, deep: s, once: i, scheduler: o, augmentJob: l, call: a } = n, f = (h) => {
    (n.onWarn || B)(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, g = (h) => s ? h : T(h) || s === !1 || s === 0 ? L(h, 1) : L(h);
  let c, u, m, S, M = !1, de = !1;
  if (D(e) ? (u = () => e.value, M = T(e)) : re(e) ? (u = () => g(e), M = !0) : b(e) ? (de = !0, M = e.some((h) => re(h) || T(h)), u = () => e.map((h) => {
    if (D(h))
      return h.value;
    if (re(h))
      return g(h);
    if (O(h))
      return a ? a(h, 2) : h();
    E.NODE_ENV !== "production" && f(h);
  })) : O(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
    if (m) {
      Ae();
      try {
        m();
      } finally {
        Me();
      }
    }
    const h = Y;
    Y = c;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      Y = h;
    }
  } : (u = le, E.NODE_ENV !== "production" && f(e)), t && s) {
    const h = u, F = s === !0 ? 1 / 0 : s;
    u = () => L(h(), F);
  }
  const X = () => {
    c.stop();
  };
  if (i && t) {
    const h = t;
    t = (...F) => {
      h(...F), X();
    };
  }
  let q = de ? new Array(e.length).fill(Ne) : Ne;
  const ie = (h) => {
    if (!(!(c.flags & 1) || !c.dirty && !h))
      if (t) {
        const F = c.run();
        if (s || M || (de ? F.some((We, he) => Z(We, q[he])) : Z(F, q))) {
          m && m();
          const We = Y;
          Y = c;
          try {
            const he = [
              F,
              // pass undefined as the old value when it's changed for the first time
              q === Ne ? void 0 : de && q[0] === Ne ? [] : q,
              S
            ];
            a ? a(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            ), q = F;
          } finally {
            Y = We;
          }
        }
      } else
        c.run();
  };
  return l && l(ie), c = new yn(u), c.scheduler = o ? () => o(ie, !1) : ie, S = (h) => er(h, !1, c), m = c.onStop = () => {
    const h = Ve.get(c);
    if (h) {
      if (a)
        a(h, 4);
      else
        for (const F of h) F();
      Ve.delete(c);
    }
  }, E.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? r ? ie(!0) : q = c.run() : o ? o(ie.bind(null, !0), !0) : c.run(), X.pause = c.pause.bind(c), X.resume = c.resume.bind(c), X.stop = X, X;
}
function L(e, t = 1 / 0, n) {
  if (t <= 0 || !v(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, D(e))
    L(e.value, t, n);
  else if (b(e))
    for (let r = 0; r < e.length; r++)
      L(e[r], t, n);
  else if (hn(e) || ne(e))
    e.forEach((r) => {
      L(r, t, n);
    });
  else if (mn(e)) {
    for (const r in e)
      L(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && L(e[r], t, n);
  }
  return e;
}
var p = {};
const Q = [];
function nr(e) {
  Q.push(e);
}
function rr() {
  Q.pop();
}
let Ue = !1;
function N(e, ...t) {
  if (Ue) return;
  Ue = !0, Ae();
  const n = Q.length ? Q[Q.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = sr();
  if (r)
    je(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, l;
          return (l = (o = i.toString) == null ? void 0 : o.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: i }) => `at <${ln(n, i.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    s.length && i.push(`
`, ...ir(s)), console.warn(...i);
  }
  Me(), Ue = !1;
}
function sr() {
  let e = Q[Q.length - 1];
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
function ir(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...or(n));
  }), t;
}
function or({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${ln(
    e.component,
    e.type,
    r
  )}`, i = ">" + n;
  return e.props ? [s, ...cr(e.props), i] : [s + i];
}
function cr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ut(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ut(e, t, n) {
  return A(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : D(t) ? (t = Ut(e, d(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = d(t), n ? t : [`${e}=`, t]);
}
const Bt = {
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
  15: "component update",
  16: "app unmount cleanup function"
};
function je(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (s) {
    ft(s, t, n);
  }
}
function Jt(e, t, n, r) {
  if (O(e)) {
    const s = je(e, t, n, r);
    return s && gn(s) && s.catch((i) => {
      ft(i, t, n);
    }), s;
  }
  if (b(e)) {
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Jt(e[i], t, n, r));
    return s;
  } else p.NODE_ENV !== "production" && N(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ft(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || I;
  if (t) {
    let l = t.parent;
    const a = t.proxy, f = p.NODE_ENV !== "production" ? Bt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const g = l.ec;
      if (g) {
        for (let c = 0; c < g.length; c++)
          if (g[c](e, a, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Ae(), je(i, null, 10, [
        e,
        a,
        f
      ]), Me();
      return;
    }
  }
  lr(e, n, s, r, o);
}
function lr(e, t, n, r = !0, s = !1) {
  if (p.NODE_ENV !== "production") {
    const i = Bt[t];
    if (n && nr(n), N(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && rr(), r)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
let Te = !1, Ze = !1;
const R = [];
let H = 0;
const se = [];
let z = null, ee = 0;
const qt = /* @__PURE__ */ Promise.resolve();
let pt = null;
const ar = 100;
function ur(e) {
  const t = pt || qt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fr(e) {
  let t = Te ? H + 1 : 0, n = R.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = R[r], i = fe(s);
    i < e || i === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function dt(e) {
  if (!(e.flags & 1)) {
    const t = fe(e), n = R[R.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fe(n) ? R.push(e) : R.splice(fr(t), 0, e), e.flags |= 1, Yt();
  }
}
function Yt() {
  !Te && !Ze && (Ze = !0, pt = qt.then(Qt));
}
function Gt(e) {
  b(e) ? se.push(...e) : z && e.id === -1 ? z.splice(ee + 1, 0, e) : e.flags & 1 || (se.push(e), e.flags |= 1), Yt();
}
function pr(e) {
  if (se.length) {
    const t = [...new Set(se)].sort(
      (n, r) => fe(n) - fe(r)
    );
    if (se.length = 0, z) {
      z.push(...t);
      return;
    }
    for (z = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ee = 0; ee < z.length; ee++) {
      const n = z[ee];
      p.NODE_ENV !== "production" && Zt(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    z = null, ee = 0;
  }
}
const fe = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qt(e) {
  Ze = !1, Te = !0, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => Zt(e, n) : le;
  try {
    for (H = 0; H < R.length; H++) {
      const n = R[H];
      if (n && !(n.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), je(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; H < R.length; H++) {
      const n = R[H];
      n && (n.flags &= -2);
    }
    H = 0, R.length = 0, pr(e), Te = !1, pt = null, (R.length || se.length) && Qt(e);
  }
}
function Zt(e, t) {
  const n = e.get(t) || 0;
  if (n > ar) {
    const r = t.i, s = r && cn(r.type);
    return ft(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Be = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (Tt().__VUE_HMR_RUNTIME__ = {
  createRecord: Je(dr),
  rerender: Je(hr),
  reload: Je(gr)
});
const Ie = /* @__PURE__ */ new Map();
function dr(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: Re(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Re(e) {
  return an(e) ? e.__vccOpts : e;
}
function hr(e, t) {
  const n = Ie.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Re(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function gr(e, t) {
  const n = Ie.get(e);
  if (!n) return;
  t = Re(t), St(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const i = r[s], o = Re(i.type);
    let l = Be.get(o);
    l || (o !== n.initialDef && St(o, t), Be.set(o, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? dt(() => {
      i.parent.update(), l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  Gt(() => {
    Be.clear();
  });
}
function St(e, t) {
  C(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Je(e) {
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
let W = null, _r = null;
const mr = (e) => e.__isTeleport;
function Xt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const br = Symbol.for("v-ndc"), Xe = (e) => e ? Gr(e) ? Qr(e) : Xe(e.parent) : null, ae = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ C(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? we(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? we(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? we(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? we(e.refs) : e.refs,
    $parent: (e) => Xe(e.parent),
    $root: (e) => Xe(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Nr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      dt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ur.bind(e.proxy)),
    $watch: (e) => Cr.bind(e)
  })
), Er = (e) => e === "_" || e === "$", qe = (e, t) => e !== I && !e.__isScriptSetup && w(e, t), wr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: l, appContext: a } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const m = o[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (qe(r, t))
          return o[t] = 1, r[t];
        if (s !== I && w(s, t))
          return o[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && w(f, t)
        )
          return o[t] = 3, i[t];
        if (n !== I && w(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const g = ae[t];
    let c, u;
    if (g)
      return t === "$attrs" ? x(e.attrs, "get", "") : p.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== I && w(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      u = a.config.globalProperties, w(u, t)
    )
      return u[t];
    p.NODE_ENV !== "production" && W && (!A(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== I && Er(t[0]) && w(s, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === W && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: i } = e;
    return qe(s, t) ? (s[t] = n, !0) : p.NODE_ENV !== "production" && s.__isScriptSetup && w(s, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== I && w(r, t) ? (r[t] = n, !0) : w(e.props, t) ? (p.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i }
  }, o) {
    let l;
    return !!n[o] || e !== I && w(e, o) || qe(t, o) || (l = i[0]) && w(l, o) || w(r, o) || w(ae, o) || w(s.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : w(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (wr.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ot(e) {
  return b(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Nr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(
    (f) => Ce(a, f, o, !0)
  ), Ce(a, t, o)), v(t) && i.set(t, a), a;
}
function Ce(e, t, n, r = !1) {
  const { mixins: s, extends: i } = t;
  i && Ce(e, i, n, !0), s && s.forEach(
    (o) => Ce(e, o, n, !0)
  );
  for (const o in t)
    if (r && o === "expose")
      p.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Sr[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Sr = {
  data: xt,
  props: vt,
  emits: vt,
  // objects
  methods: ce,
  computed: ce,
  // lifecycle
  beforeCreate: y,
  created: y,
  beforeMount: y,
  mounted: y,
  beforeUpdate: y,
  updated: y,
  beforeDestroy: y,
  beforeUnmount: y,
  destroyed: y,
  unmounted: y,
  activated: y,
  deactivated: y,
  errorCaptured: y,
  serverPrefetch: y,
  // assets
  components: ce,
  directives: ce,
  // watch
  watch: xr,
  // provide / inject
  provide: xt,
  inject: Or
};
function xt(e, t) {
  return t ? e ? function() {
    return C(
      O(e) ? e.call(this, this) : e,
      O(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Or(e, t) {
  return ce(yt(e), yt(t));
}
function yt(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function y(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ce(e, t) {
  return e ? C(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vt(e, t) {
  return e ? b(e) && b(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : C(
    /* @__PURE__ */ Object.create(null),
    Ot(e),
    Ot(t ?? {})
  ) : t;
}
function xr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = C(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = y(e[r], t[r]);
  return n;
}
let yr = null;
function vr(e, t, n = !1) {
  const r = He || W;
  if (r || yr) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && O(t) ? t.call(r && r.proxy) : t;
    p.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const Dr = {}, kt = (e) => Object.getPrototypeOf(e) === Dr, Vr = Ar, Tr = Symbol.for("v-scx"), Ir = () => {
  {
    const e = vr(Tr);
    return e || p.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Rr(e, t, n = I) {
  const { immediate: r, deep: s, flush: i, once: o } = n;
  p.NODE_ENV !== "production" && !t && (r !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = C({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = N);
  let a;
  if (on)
    if (i === "sync") {
      const u = Ir();
      a = u.__watcherHandles || (u.__watcherHandles = []);
    } else if (!t || r)
      l.once = !0;
    else {
      const u = () => {
      };
      return u.stop = le, u.resume = le, u.pause = le, u;
    }
  const f = He;
  l.call = (u, m, S) => Jt(u, f, m, S);
  let g = !1;
  i === "post" ? l.scheduler = (u) => {
    Vr(u, f && f.suspense);
  } : i !== "sync" && (g = !0, l.scheduler = (u, m) => {
    m ? u() : dt(u);
  }), l.augmentJob = (u) => {
    t && (u.flags |= 4), g && (u.flags |= 2, f && (u.id = f.uid, u.i = f));
  };
  const c = tr(e, t, l);
  return a && a.push(c), c;
}
function Cr(e, t, n) {
  const r = this.proxy, s = A(e) ? e.includes(".") ? $r(r, e) : () => r[e] : e.bind(r, r);
  let i;
  O(t) ? i = t : (i = t.handler, n = t);
  const o = Yr(this), l = Rr(s, i.bind(r), n);
  return o(), l;
}
function $r(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Pr = (e) => e.__isSuspense;
function Ar(e, t) {
  t && t.pendingBranch ? b(e) ? t.effects.push(...e) : t.effects.push(e) : Gt(e);
}
const en = Symbol.for("v-fgt"), Mr = Symbol.for("v-txt"), Fr = Symbol.for("v-cmt"), Oe = [];
let $ = null;
function jr(e = !1) {
  Oe.push($ = e ? null : []);
}
function Hr() {
  Oe.pop(), $ = Oe[Oe.length - 1] || null;
}
function Wr(e) {
  return e.dynamicChildren = $ || fn, Hr(), $ && $.push(e), e;
}
function Kr(e, t, n, r, s, i) {
  return Wr(
    nn(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
    )
  );
}
function zr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Lr = (...e) => rn(
  ...e
), tn = ({ key: e }) => e ?? null, xe = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? A(e) || D(e) || O(e) ? { i: W, r: e, k: t, f: !!n } : e : null);
function nn(e, t = null, n = null, r = 0, s = null, i = e === en ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tn(t),
    ref: t && xe(t),
    scopeId: _r,
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
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: W
  };
  return l ? (ht(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= A(n) ? 8 : 16), p.NODE_ENV !== "production" && a.key !== a.key && N("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !o && // has current parent block
  $ && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && $.push(a), a;
}
const Ur = p.NODE_ENV !== "production" ? Lr : rn;
function rn(e, t = null, n = null, r = 0, s = null, i = !1) {
  if ((!e || e === br) && (p.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = Fr), zr(e)) {
    const l = $e(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ht(l, n), !i && $ && (l.shapeFlag & 6 ? $[$.indexOf(e)] = l : $.push(l)), l.patchFlag = -2, l;
  }
  if (an(e) && (e = e.__vccOpts), t) {
    t = Br(t);
    let { class: l, style: a } = t;
    l && !A(l) && (t.class = nt(l)), v(a) && (De(a) && !b(a) && (a = C({}, a)), t.style = tt(a));
  }
  const o = A(e) ? 1 : Pr(e) ? 128 : mr(e) ? 64 : v(e) ? 4 : O(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && o & 4 && De(e) && (e = d(e), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), nn(
    e,
    t,
    n,
    r,
    s,
    o,
    i,
    !0
  );
}
function Br(e) {
  return e ? De(e) || kt(e) ? C({}, e) : e : null;
}
function $e(e, t, n = !1, r = !1) {
  const { props: s, ref: i, patchFlag: o, children: l, transition: a } = e, f = t ? qr(s || {}, t) : s, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && tn(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? b(i) ? i.concat(xe(t)) : [i, xe(t)] : xe(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && o === -1 && b(l) ? l.map(sn) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== en ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && $e(e.ssContent),
    ssFallback: e.ssFallback && $e(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && r && Xt(
    g,
    a.clone(g)
  ), g;
}
function sn(e) {
  const t = $e(e);
  return b(e.children) && (t.children = e.children.map(sn)), t;
}
function Jr(e = " ", t = 0) {
  return Ur(Mr, null, e, t);
}
function ht(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (b(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ht(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !kt(t) ? t._ctx = W : s === 3 && W && (W.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else O(t) ? (t = { default: t, _ctx: W }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Jr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function qr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = nt([t.class, r.class]));
      else if (s === "style")
        t.style = tt([t.style, r.style]);
      else if (pn(s)) {
        const i = t[s], o = r[s];
        o && i !== o && !(b(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let He = null, ke;
{
  const e = Tt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (i) => {
      s.length > 1 ? s.forEach((o) => o(i)) : s[0](i);
    };
  };
  ke = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => He = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => on = n
  );
}
const Yr = (e) => {
  const t = He;
  return ke(e), e.scope.on(), () => {
    e.scope.off(), ke(t);
  };
};
function Gr(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Qr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(kn(Qn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ae)
        return ae[n](e);
    },
    has(t, n) {
      return n in t || n in ae;
    }
  })) : e.proxy;
}
const Zr = /(?:^|[-_])(\w)/g, Xr = (e) => e.replace(Zr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function cn(e, t = !0) {
  return O(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ln(e, t, n = !1) {
  let r = cn(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Xr(r) : n ? "App" : "Anonymous";
}
function an(e) {
  return O(e) && "__vccOpts" in e;
}
function kr() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(c) {
      return v(c) ? c.__isVue ? ["div", e, "VueInstance"] : D(c) ? [
        "div",
        {},
        ["span", e, g(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in c ? c._value : c),
        ">"
      ] : re(c) ? [
        "div",
        {},
        ["span", e, T(c) ? "ShallowReactive" : "Reactive"],
        "<",
        l(c),
        `>${J(c) ? " (readonly)" : ""}`
      ] : J(c) ? [
        "div",
        {},
        ["span", e, T(c) ? "ShallowReadonly" : "Readonly"],
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
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const u = [];
    c.type.props && c.props && u.push(o("props", d(c.props))), c.setupState !== I && u.push(o("setup", c.setupState)), c.data !== I && u.push(o("data", d(c.data)));
    const m = a(c, "computed");
    m && u.push(o("computed", m));
    const S = a(c, "inject");
    return S && u.push(o("injected", S)), u.push([
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
    ]), u;
  }
  function o(c, u) {
    return u = C({}, u), Object.keys(u).length ? [
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
        ...Object.keys(u).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          l(u[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, u = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : v(c) ? ["object", { object: u ? d(c) : c }] : ["span", n, String(c)];
  }
  function a(c, u) {
    const m = c.type;
    if (O(m))
      return;
    const S = {};
    for (const M in c.ctx)
      f(m, M, u) && (S[M] = c.ctx[M]);
    return S;
  }
  function f(c, u, m) {
    const S = c[m];
    if (b(S) && S.includes(u) || v(S) && u in S || c.extends && f(c.extends, u, m) || c.mixins && c.mixins.some((M) => f(M, u, m)))
      return !0;
  }
  function g(c) {
    return T(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
var es = {};
function ts() {
  kr();
}
es.NODE_ENV !== "production" && ts();
const ns = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, ye = window.jQuery, Se = (e) => e === void 0 ? e : ye.fn.bootstrapTable.utils.extend(!0, Array.isArray(e) ? [] : {}, e), rs = {
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
    this.$table = ye(this.$el), this.$table.on("all.bs.table", (e, t, n) => {
      let r = ye.fn.bootstrapTable.events[t];
      r = r.replace(/([A-Z])/g, "-$1").toLowerCase(), this.$emit("on-all", ...n), this.$emit(r, ...n);
    }), this._initTable();
  },
  methods: {
    _initTable() {
      const e = {
        ...Se(this.options),
        columns: Se(this.columns),
        data: Se(this.data)
      };
      this._hasInit ? this.refreshOptions(e) : (this.$table.bootstrapTable(e), this._hasInit = !0);
    },
    ...(() => {
      const e = {};
      for (const t of ye.fn.bootstrapTable.methods)
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
        this.load(Se(this.data));
      },
      deep: !0
    }
  }
};
function ss(e, t, n, r, s, i) {
  return jr(), Kr("table");
}
const is = /* @__PURE__ */ ns(rs, [["render", ss]]);
export {
  is as default
};
