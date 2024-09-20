var Dt = {};
/**
* @vue/shared v3.5.3
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function un(e, t) {
  const n = new Set(e.split(","));
  return (r) => n.has(r);
}
const I = Dt.NODE_ENV !== "production" ? Object.freeze({}) : {}, fn = Dt.NODE_ENV !== "production" ? Object.freeze([]) : [], ce = () => {
}, pn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), C = Object.assign, dn = Object.prototype.hasOwnProperty, w = (e, t) => dn.call(e, t), b = Array.isArray, te = (e) => Pe(e) === "[object Map]", hn = (e) => Pe(e) === "[object Set]", O = (e) => typeof e == "function", A = (e) => typeof e == "string", pe = (e) => typeof e == "symbol", y = (e) => e !== null && typeof e == "object", gn = (e) => (y(e) || O(e)) && O(e.then) && O(e.catch), _n = Object.prototype.toString, Pe = (e) => _n.call(e), Vt = (e) => Pe(e).slice(8, -1), mn = (e) => Pe(e) === "[object Object]", et = (e) => A(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, En = bn((e) => e.charAt(0).toUpperCase() + e.slice(1)), X = (e, t) => !Object.is(e, t), wn = (e, t, n, r = !1) => {
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
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (A(e) || y(e))
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
  else if (y(e))
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
class vn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.nextEffect = void 0, this.cleanup = void 0, this.scheduler = void 0;
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || (this.flags |= 8, this.nextEffect = le, le = this);
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
        ot(t);
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
let It = 0, le;
function rt() {
  It++;
}
function st() {
  if (--It > 0)
    return;
  let e;
  for (; le; ) {
    let t = le;
    for (le = void 0; t; ) {
      const n = t.nextEffect;
      if (t.nextEffect = void 0, t.flags &= -9, t.flags & 1)
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
  let t, n = e.depsTail;
  for (let r = n; r; r = r.prevDep)
    r.version === -1 ? (r === n && (n = r.prevDep), ot(r), Dn(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0;
  e.deps = t, e.depsTail = n;
}
function Ye(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && yn(t.dep.computed) === !1 || t.dep.version !== t.version)
      return !0;
  return !!e._dirty;
}
function yn(e) {
  if (e.flags & 2)
    return !1;
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ye))
    return;
  e.globalVersion = ye;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && !Ye(e)) {
    e.flags &= -3;
    return;
  }
  const n = _, r = P;
  _ = e, P = !0;
  try {
    Rt(e);
    const s = e.fn(e._value);
    (t.version === 0 || X(s, e._value)) && (e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    _ = n, P = r, Ct(e), e.flags &= -3;
  }
}
function ot(e) {
  const { dep: t, prevSub: n, nextSub: r } = e;
  if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), t.subs === e && (t.subs = n), !t.subs && t.computed) {
    t.computed.flags &= -5;
    for (let s = t.computed.deps; s; s = s.nextDep)
      ot(s);
  }
}
function Dn(e) {
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
let ye = 0;
class Vn {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, E.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!_ || !P || _ === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== _)
      n = this.activeLink = {
        dep: this,
        sub: _,
        version: this.version,
        nextDep: void 0,
        prevDep: void 0,
        nextSub: void 0,
        prevSub: void 0,
        prevActiveLink: void 0
      }, _.deps ? (n.prevDep = _.depsTail, _.depsTail.nextDep = n, _.depsTail = n) : _.deps = _.depsTail = n, _.flags & 4 && Pt(n);
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
    this.version++, ye++, this.notify(t);
  }
  notify(t) {
    rt();
    try {
      if (E.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          E.NODE_ENV !== "production" && n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            C(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify();
    } finally {
      st();
    }
  }
}
function Pt(e) {
  const t = e.dep.computed;
  if (t && !e.dep.subs) {
    t.flags |= 20;
    for (let r = t.deps; r; r = r.nextDep)
      Pt(r);
  }
  const n = e.dep.subs;
  n !== e && (e.prevSub = n, n && (n.nextSub = e)), E.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
}
const Ge = /* @__PURE__ */ new WeakMap(), Q = Symbol(
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
    s || r.set(n, s = new Vn()), E.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function U(e, t, n, r, s, o) {
  const i = Ge.get(e);
  if (!i) {
    ye++;
    return;
  }
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else {
    const a = b(e), p = a && et(n);
    if (a && n === "length") {
      const f = Number(r);
      i.forEach((c, u) => {
        (u === "length" || u === ue || !pe(u) && u >= f) && l.push(c);
      });
    } else {
      const f = (c) => c && l.push(c);
      switch (n !== void 0 && f(i.get(n)), p && f(i.get(ue)), t) {
        case "add":
          a ? p && f(i.get("length")) : (f(i.get(Q)), te(e) && f(i.get(Qe)));
          break;
        case "delete":
          a || (f(i.get(Q)), te(e) && f(i.get(Qe)));
          break;
        case "set":
          te(e) && f(i.get(Q));
          break;
      }
    }
  }
  rt();
  for (const a of l)
    E.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: r,
      oldValue: s,
      oldTarget: o
    }) : a.trigger();
  st();
}
function k(e) {
  const t = g(e);
  return t === e ? t : (x(t, "iterate", ue), T(e) ? t : t.map(V));
}
function it(e) {
  return x(e = g(e), "iterate", ue), e;
}
const Tn = {
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
  const r = it(e), s = r[t]();
  return r !== e && !T(e) && (s._next = s.next, s.next = () => {
    const o = s._next();
    return o.value && (o.value = n(o.value)), o;
  }), s;
}
const In = Array.prototype;
function j(e, t, n, r, s, o) {
  const i = it(e), l = i !== e && !T(e), a = i[t];
  if (a !== In[t]) {
    const c = a.apply(e, o);
    return l ? V(c) : c;
  }
  let p = n;
  i !== e && (l ? p = function(c, u) {
    return n.call(this, V(c), u, e);
  } : n.length > 2 && (p = function(c, u) {
    return n.call(this, c, u, e);
  }));
  const f = a.call(i, p, r);
  return l && s ? s(f) : f;
}
function mt(e, t, n, r) {
  const s = it(e);
  let o = n;
  return s !== e && (T(e) ? n.length > 3 && (o = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : o = function(i, l, a) {
    return n.call(this, i, V(l), a, e);
  }), s[t](o, ...r);
}
function Le(e, t, n) {
  const r = g(e);
  x(r, "iterate", ue);
  const s = r[t](...n);
  return (s === -1 || s === !1) && De(n[0]) ? (n[0] = g(n[0]), r[t](...n)) : s;
}
function oe(e, t, n = []) {
  Ae(), rt();
  const r = g(e)[t].apply(e, n);
  return st(), Me(), r;
}
const Rn = /* @__PURE__ */ un("__proto__,__v_isRef,__isVue"), At = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pe)
);
function Cn(e) {
  pe(e) || (e = String(e));
  const t = g(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
class Mt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return r === (s ? o ? Kt : Wt : o ? Bn : Ht).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const i = b(t);
    if (!s) {
      let a;
      if (i && (a = Tn[n]))
        return a;
      if (n === "hasOwnProperty")
        return Cn;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      D(t) ? t : r
    );
    return (pe(n) ? At.has(n) : Rn(n)) || (s || x(t, "get", n), o) ? l : D(l) ? i && et(n) ? l : l.value : y(l) ? s ? Lt(l) : zt(l) : l;
  }
}
class $n extends Mt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (!this._isShallow) {
      const a = J(o);
      if (!T(r) && !J(r) && (o = g(o), r = g(r)), !b(t) && D(o) && !D(r))
        return a ? !1 : (o.value = r, !0);
    }
    const i = b(t) && et(n) ? Number(n) < t.length : w(t, n), l = Reflect.set(
      t,
      n,
      r,
      D(t) ? t : s
    );
    return t === g(s) && (i ? X(r, o) && U(t, "set", n, r, o) : U(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = w(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && U(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!pe(n) || !At.has(n)) && x(t, "has", n), r;
  }
  ownKeys(t) {
    return x(
      t,
      "iterate",
      b(t) ? "length" : Q
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
const Pn = /* @__PURE__ */ new $n(), An = /* @__PURE__ */ new Ft(), Mn = /* @__PURE__ */ new Ft(!0), ct = (e) => e, Fe = (e) => Reflect.getPrototypeOf(e);
function ge(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = g(e), o = g(t);
  n || (X(t, o) && x(s, "get", t), x(s, "get", o));
  const { has: i } = Fe(s), l = r ? ct : n ? ut : V;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, o))
    return l(e.get(o));
  e !== s && e.get(t);
}
function _e(e, t = !1) {
  const n = this.__v_raw, r = g(n), s = g(e);
  return t || (X(e, s) && x(r, "has", e), x(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function me(e, t = !1) {
  return e = e.__v_raw, !t && x(g(e), "iterate", Q), Reflect.get(e, "size", e);
}
function bt(e, t = !1) {
  !t && !T(e) && !J(e) && (e = g(e));
  const n = g(this);
  return Fe(n).has.call(n, e) || (n.add(e), U(n, "add", e, e)), this;
}
function Et(e, t, n = !1) {
  !n && !T(t) && !J(t) && (t = g(t));
  const r = g(this), { has: s, get: o } = Fe(r);
  let i = s.call(r, e);
  i ? E.NODE_ENV !== "production" && jt(r, s, e) : (e = g(e), i = s.call(r, e));
  const l = o.call(r, e);
  return r.set(e, t), i ? X(t, l) && U(r, "set", e, t, l) : U(r, "add", e, t), this;
}
function wt(e) {
  const t = g(this), { has: n, get: r } = Fe(t);
  let s = n.call(t, e);
  s ? E.NODE_ENV !== "production" && jt(t, n, e) : (e = g(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && U(t, "delete", e, void 0, o), i;
}
function Nt() {
  const e = g(this), t = e.size !== 0, n = E.NODE_ENV !== "production" ? te(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && U(e, "clear", void 0, void 0, n), r;
}
function be(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, l = g(i), a = t ? ct : e ? ut : V;
    return !e && x(l, "iterate", Q), i.forEach((p, f) => r.call(s, a(p), a(f), o));
  };
}
function Ee(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = g(s), i = te(o), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, p = s[e](...r), f = n ? ct : t ? ut : V;
    return !t && x(
      o,
      "iterate",
      a ? Qe : Q
    ), {
      // iterator protocol
      next() {
        const { value: c, done: u } = p.next();
        return u ? { value: c, done: u } : {
          value: l ? [f(c[0]), f(c[1])] : f(c),
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
        g(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Fn() {
  const e = {
    get(o) {
      return ge(this, o);
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
    get(o) {
      return ge(this, o, !1, !0);
    },
    get size() {
      return me(this);
    },
    has: _e,
    add(o) {
      return bt.call(this, o, !0);
    },
    set(o, i) {
      return Et.call(this, o, i, !0);
    },
    delete: wt,
    clear: Nt,
    forEach: be(!1, !0)
  }, n = {
    get(o) {
      return ge(this, o, !0);
    },
    get size() {
      return me(this, !0);
    },
    has(o) {
      return _e.call(this, o, !0);
    },
    add: K("add"),
    set: K("set"),
    delete: K("delete"),
    clear: K("clear"),
    forEach: be(!0, !1)
  }, r = {
    get(o) {
      return ge(this, o, !0, !0);
    },
    get size() {
      return me(this, !0);
    },
    has(o) {
      return _e.call(this, o, !0);
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
  ].forEach((o) => {
    e[o] = Ee(o, !1, !1), n[o] = Ee(o, !0, !1), t[o] = Ee(o, !1, !0), r[o] = Ee(
      o,
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
  jn,
  Hn,
  Wn,
  Kn
] = /* @__PURE__ */ Fn();
function lt(e, t) {
  const n = t ? e ? Kn : Wn : e ? Hn : jn;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    w(n, s) && s in r ? n : r,
    s,
    o
  );
}
const zn = {
  get: /* @__PURE__ */ lt(!1, !1)
}, Ln = {
  get: /* @__PURE__ */ lt(!0, !1)
}, Un = {
  get: /* @__PURE__ */ lt(!0, !0)
};
function jt(e, t, n) {
  const r = g(n);
  if (r !== n && t.call(e, r)) {
    const s = Vt(e);
    B(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Ht = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), Wt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap();
function Jn(e) {
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
function qn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jn(Vt(e));
}
function zt(e) {
  return J(e) ? e : at(
    e,
    !1,
    Pn,
    zn,
    Ht
  );
}
function Lt(e) {
  return at(
    e,
    !0,
    An,
    Ln,
    Wt
  );
}
function we(e) {
  return at(
    e,
    !0,
    Mn,
    Un,
    Kt
  );
}
function at(e, t, n, r, s) {
  if (!y(e))
    return E.NODE_ENV !== "production" && B(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = qn(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, l), l;
}
function ne(e) {
  return J(e) ? ne(e.__v_raw) : !!(e && e.__v_isReactive);
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
function g(e) {
  const t = e && e.__v_raw;
  return t ? g(t) : e;
}
function Yn(e) {
  return Object.isExtensible(e) && wn(e, "__v_skip", !0), e;
}
const V = (e) => y(e) ? zt(e) : e, ut = (e) => y(e) ? Lt(e) : e;
function D(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Gn(e) {
  return D(e) ? e.value : e;
}
const Qn = {
  get: (e, t, n) => t === "__v_raw" ? e : Gn(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return D(s) && !D(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Zn(e) {
  return ne(e) ? e : new Proxy(e, Qn);
}
const Ne = {}, Ve = /* @__PURE__ */ new WeakMap();
let G;
function Xn(e, t = !1, n = G) {
  if (n) {
    let r = Ve.get(n);
    r || Ve.set(n, r = []), r.push(e);
  } else E.NODE_ENV !== "production" && !t && B(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function kn(e, t, n = I) {
  const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: l, call: a } = n, p = (d) => {
    (n.onWarn || B)(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (d) => s ? d : T(d) || s === !1 || s === 0 ? L(d, 1) : L(d);
  let c, u, m, S, M = !1, de = !1;
  if (D(e) ? (u = () => e.value, M = T(e)) : ne(e) ? (u = () => f(e), M = !0) : b(e) ? (de = !0, M = e.some((d) => ne(d) || T(d)), u = () => e.map((d) => {
    if (D(d))
      return d.value;
    if (ne(d))
      return f(d);
    if (O(d))
      return a ? a(d, 2) : d();
    E.NODE_ENV !== "production" && p(d);
  })) : O(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
    if (m) {
      Ae();
      try {
        m();
      } finally {
        Me();
      }
    }
    const d = G;
    G = c;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      G = d;
    }
  } : (u = ce, E.NODE_ENV !== "production" && p(e)), t && s) {
    const d = u, F = s === !0 ? 1 / 0 : s;
    u = () => L(d(), F);
  }
  const q = () => {
    c.stop();
  };
  if (o)
    if (t) {
      const d = t;
      t = (...F) => {
        d(...F), q();
      };
    } else {
      const d = u;
      u = () => {
        d(), q();
      };
    }
  let Y = de ? new Array(e.length).fill(Ne) : Ne;
  const se = (d) => {
    if (!(!(c.flags & 1) || !c.dirty && !d))
      if (t) {
        const F = c.run();
        if (s || M || (de ? F.some((We, he) => X(We, Y[he])) : X(F, Y))) {
          m && m();
          const We = G;
          G = c;
          try {
            const he = [
              F,
              // pass undefined as the old value when it's changed for the first time
              Y === Ne ? void 0 : de && Y[0] === Ne ? [] : Y,
              S
            ];
            a ? a(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            ), Y = F;
          } finally {
            G = We;
          }
        }
      } else
        c.run();
  };
  return l && l(se), c = new vn(u), c.scheduler = i ? () => i(se, !1) : se, S = (d) => Xn(d, !1, c), m = c.onStop = () => {
    const d = Ve.get(c);
    if (d) {
      if (a)
        a(d, 4);
      else
        for (const F of d) F();
      Ve.delete(c);
    }
  }, E.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? r ? se(!0) : Y = c.run() : i ? i(se.bind(null, !0), !0) : c.run(), q.pause = c.pause.bind(c), q.resume = c.resume.bind(c), q.stop = q, q;
}
function L(e, t = 1 / 0, n) {
  if (t <= 0 || !y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, D(e))
    L(e.value, t, n);
  else if (b(e))
    for (let r = 0; r < e.length; r++)
      L(e[r], t, n);
  else if (hn(e) || te(e))
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
var h = {};
const Z = [];
function er(e) {
  Z.push(e);
}
function tr() {
  Z.pop();
}
let Ue = !1;
function N(e, ...t) {
  if (Ue) return;
  Ue = !0, Ae();
  const n = Z.length ? Z[Z.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = nr();
  if (r)
    je(
      r,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var i, l;
          return (l = (i = o.toString) == null ? void 0 : i.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${ln(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...rr(s)), console.warn(...o);
  }
  Me(), Ue = !1;
}
function nr() {
  let e = Z[Z.length - 1];
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
function rr(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...sr(n));
  }), t;
}
function sr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${ln(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...or(e.props), o] : [s + o];
}
function or(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...Ut(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Ut(e, t, n) {
  return A(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : D(t) ? (t = Ut(e, g(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = g(t), n ? t : [`${e}=`, t]);
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
    return s && gn(s) && s.catch((o) => {
      ft(o, t, n);
    }), s;
  }
  if (b(e)) {
    const s = [];
    for (let o = 0; o < e.length; o++)
      s.push(Jt(e[o], t, n, r));
    return s;
  } else h.NODE_ENV !== "production" && N(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function ft(e, t, n, r = !0) {
  const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || I;
  if (t) {
    let l = t.parent;
    const a = t.proxy, p = h.NODE_ENV !== "production" ? Bt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, a, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Ae(), je(o, null, 10, [
        e,
        a,
        p
      ]), Me();
      return;
    }
  }
  ir(e, n, s, r, i);
}
function ir(e, t, n, r = !0, s = !1) {
  if (h.NODE_ENV !== "production") {
    const o = Bt[t];
    if (n && er(n), N(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && tr(), r)
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
const re = [];
let z = null, ee = 0;
const qt = /* @__PURE__ */ Promise.resolve();
let pt = null;
const cr = 100;
function lr(e) {
  const t = pt || qt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ar(e) {
  let t = Te ? H + 1 : 0, n = R.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = R[r], o = fe(s);
    o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function dt(e) {
  if (!(e.flags & 1)) {
    const t = fe(e), n = R[R.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= fe(n) ? R.push(e) : R.splice(ar(t), 0, e), e.flags |= 1, Yt();
  }
}
function Yt() {
  !Te && !Ze && (Ze = !0, pt = qt.then(Qt));
}
function Gt(e) {
  b(e) ? re.push(...e) : z && e.id === -1 ? z.splice(ee + 1, 0, e) : e.flags & 1 || (re.push(e), e.flags |= 1), Yt();
}
function ur(e) {
  if (re.length) {
    const t = [...new Set(re)].sort(
      (n, r) => fe(n) - fe(r)
    );
    if (re.length = 0, z) {
      z.push(...t);
      return;
    }
    for (z = t, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ee = 0; ee < z.length; ee++) {
      const n = z[ee];
      h.NODE_ENV !== "production" && Zt(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    z = null, ee = 0;
  }
}
const fe = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qt(e) {
  Ze = !1, Te = !0, h.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = h.NODE_ENV !== "production" ? (n) => Zt(e, n) : ce;
  try {
    for (H = 0; H < R.length; H++) {
      const n = R[H];
      if (n && !(n.flags & 8)) {
        if (h.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), je(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags &= -2;
      }
    }
  } finally {
    for (; H < R.length; H++) {
      const n = R[H];
      n && (n.flags &= -2);
    }
    H = 0, R.length = 0, ur(e), Te = !1, pt = null, (R.length || re.length) && Qt(e);
  }
}
function Zt(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > cr) {
      const r = t.i, s = r && cn(r.type);
      return ft(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Be = /* @__PURE__ */ new Map();
h.NODE_ENV !== "production" && (Tt().__VUE_HMR_RUNTIME__ = {
  createRecord: Je(fr),
  rerender: Je(pr),
  reload: Je(dr)
});
const Ie = /* @__PURE__ */ new Map();
function fr(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: Re(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Re(e) {
  return an(e) ? e.__vccOpts : e;
}
function pr(e, t) {
  const n = Ie.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, Re(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function dr(e, t) {
  const n = Ie.get(e);
  if (!n) return;
  t = Re(t), St(n.initialDef, t);
  const r = [...n.instances];
  for (let s = 0; s < r.length; s++) {
    const o = r[s], i = Re(o.type);
    let l = Be.get(i);
    l || (i !== n.initialDef && St(i, t), Be.set(i, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? dt(() => {
      o.parent.update(), l.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(i);
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
let W = null, hr = null;
const gr = (e) => e.__isTeleport;
function Xt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Xt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
const _r = Symbol.for("v-ndc"), Xe = (e) => e ? qr(e) ? Yr(e) : Xe(e.parent) : null, ae = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ C(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => h.NODE_ENV !== "production" ? we(e.props) : e.props,
    $attrs: (e) => h.NODE_ENV !== "production" ? we(e.attrs) : e.attrs,
    $slots: (e) => h.NODE_ENV !== "production" ? we(e.slots) : e.slots,
    $refs: (e) => h.NODE_ENV !== "production" ? we(e.refs) : e.refs,
    $parent: (e) => Xe(e.parent),
    $root: (e) => Xe(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Er(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      dt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = lr.bind(e.proxy)),
    $watch: (e) => Ir.bind(e)
  })
), mr = (e) => e === "_" || e === "$", qe = (e, t) => e !== I && !e.__isScriptSetup && w(e, t), br = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: a } = e;
    if (h.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (qe(r, t))
          return i[t] = 1, r[t];
        if (s !== I && w(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && w(p, t)
        )
          return i[t] = 3, o[t];
        if (n !== I && w(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const f = ae[t];
    let c, u;
    if (f)
      return t === "$attrs" ? x(e.attrs, "get", "") : h.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== I && w(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      u = a.config.globalProperties, w(u, t)
    )
      return u[t];
    h.NODE_ENV !== "production" && W && (!A(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== I && mr(t[0]) && w(s, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === W && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return qe(s, t) ? (s[t] = n, !0) : h.NODE_ENV !== "production" && s.__isScriptSetup && w(s, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== I && w(r, t) ? (r[t] = n, !0) : w(e.props, t) ? (h.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (h.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (h.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== I && w(e, i) || qe(t, i) || (l = o[0]) && w(l, i) || w(r, i) || w(ae, i) || w(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : w(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
h.NODE_ENV !== "production" && (br.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ot(e) {
  return b(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Er(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let a;
  return l ? a = l : !s.length && !n && !r ? a = t : (a = {}, s.length && s.forEach(
    (p) => Ce(a, p, i, !0)
  ), Ce(a, t, i)), y(t) && o.set(t, a), a;
}
function Ce(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Ce(e, o, n, !0), s && s.forEach(
    (i) => Ce(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      h.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = wr[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const wr = {
  data: xt,
  props: yt,
  emits: yt,
  // objects
  methods: ie,
  computed: ie,
  // lifecycle
  beforeCreate: v,
  created: v,
  beforeMount: v,
  mounted: v,
  beforeUpdate: v,
  updated: v,
  beforeDestroy: v,
  beforeUnmount: v,
  destroyed: v,
  unmounted: v,
  activated: v,
  deactivated: v,
  errorCaptured: v,
  serverPrefetch: v,
  // assets
  components: ie,
  directives: ie,
  // watch
  watch: Sr,
  // provide / inject
  provide: xt,
  inject: Nr
};
function xt(e, t) {
  return t ? e ? function() {
    return C(
      O(e) ? e.call(this, this) : e,
      O(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Nr(e, t) {
  return ie(vt(e), vt(t));
}
function vt(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function v(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ie(e, t) {
  return e ? C(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function yt(e, t) {
  return e ? b(e) && b(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : C(
    /* @__PURE__ */ Object.create(null),
    Ot(e),
    Ot(t ?? {})
  ) : t;
}
function Sr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = C(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = v(e[r], t[r]);
  return n;
}
let Or = null;
function xr(e, t, n = !1) {
  const r = He || W;
  if (r || Or) {
    const s = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && O(t) ? t.call(r && r.proxy) : t;
    h.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else h.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const vr = {}, kt = (e) => Object.getPrototypeOf(e) === vr, yr = $r, Dr = Symbol.for("v-scx"), Vr = () => {
  {
    const e = xr(Dr);
    return e || h.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Tr(e, t, n = I) {
  const { immediate: r, deep: s, flush: o, once: i } = n;
  h.NODE_ENV !== "production" && !t && (r !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = C({}, n);
  h.NODE_ENV !== "production" && (l.onWarn = N);
  let a;
  if (on)
    if (o === "sync") {
      const u = Vr();
      a = u.__watcherHandles || (u.__watcherHandles = []);
    } else if (!t || r)
      l.once = !0;
    else
      return {
        stop: ce,
        resume: ce,
        pause: ce
      };
  const p = He;
  l.call = (u, m, S) => Jt(u, p, m, S);
  let f = !1;
  o === "post" ? l.scheduler = (u) => {
    yr(u, p && p.suspense);
  } : o !== "sync" && (f = !0, l.scheduler = (u, m) => {
    m ? u() : dt(u);
  }), l.augmentJob = (u) => {
    t && (u.flags |= 4), f && (u.flags |= 2, p && (u.id = p.uid, u.i = p));
  };
  const c = kn(e, t, l);
  return a && a.push(c), c;
}
function Ir(e, t, n) {
  const r = this.proxy, s = A(e) ? e.includes(".") ? Rr(r, e) : () => r[e] : e.bind(r, r);
  let o;
  O(t) ? o = t : (o = t.handler, n = t);
  const i = Jr(this), l = Tr(s, o.bind(r), n);
  return i(), l;
}
function Rr(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
const Cr = (e) => e.__isSuspense;
function $r(e, t) {
  t && t.pendingBranch ? b(e) ? t.effects.push(...e) : t.effects.push(e) : Gt(e);
}
const en = Symbol.for("v-fgt"), Pr = Symbol.for("v-txt"), Ar = Symbol.for("v-cmt"), Oe = [];
let $ = null;
function Mr(e = !1) {
  Oe.push($ = e ? null : []);
}
function Fr() {
  Oe.pop(), $ = Oe[Oe.length - 1] || null;
}
function jr(e) {
  return e.dynamicChildren = $ || fn, Fr(), $ && $.push(e), e;
}
function Hr(e, t, n, r, s, o) {
  return jr(
    nn(
      e,
      t,
      n,
      r,
      s,
      o,
      !0
    )
  );
}
function Wr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Kr = (...e) => rn(
  ...e
), tn = ({ key: e }) => e ?? null, xe = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? A(e) || D(e) || O(e) ? { i: W, r: e, k: t, f: !!n } : e : null);
function nn(e, t = null, n = null, r = 0, s = null, o = e === en ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && tn(t),
    ref: t && xe(t),
    scopeId: hr,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: W
  };
  return l ? (ht(a, n), o & 128 && e.normalize(a)) : n && (a.shapeFlag |= A(n) ? 8 : 16), h.NODE_ENV !== "production" && a.key !== a.key && N("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  $ && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && $.push(a), a;
}
const zr = h.NODE_ENV !== "production" ? Kr : rn;
function rn(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === _r) && (h.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = Ar), Wr(e)) {
    const l = $e(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ht(l, n), !o && $ && (l.shapeFlag & 6 ? $[$.indexOf(e)] = l : $.push(l)), l.patchFlag = -2, l;
  }
  if (an(e) && (e = e.__vccOpts), t) {
    t = Lr(t);
    let { class: l, style: a } = t;
    l && !A(l) && (t.class = nt(l)), y(a) && (De(a) && !b(a) && (a = C({}, a)), t.style = tt(a));
  }
  const i = A(e) ? 1 : Cr(e) ? 128 : gr(e) ? 64 : y(e) ? 4 : O(e) ? 2 : 0;
  return h.NODE_ENV !== "production" && i & 4 && De(e) && (e = g(e), N(
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
    i,
    o,
    !0
  );
}
function Lr(e) {
  return e ? De(e) || kt(e) ? C({}, e) : e : null;
}
function $e(e, t, n = !1, r = !1) {
  const { props: s, ref: o, patchFlag: i, children: l, transition: a } = e, p = t ? Br(s || {}, t) : s, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && tn(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? b(o) ? o.concat(xe(t)) : [o, xe(t)] : xe(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: h.NODE_ENV !== "production" && i === -1 && b(l) ? l.map(sn) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== en ? i === -1 ? 16 : i | 16 : i,
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
    f,
    a.clone(f)
  ), f;
}
function sn(e) {
  const t = $e(e);
  return b(e.children) && (t.children = e.children.map(sn)), t;
}
function Ur(e = " ", t = 0) {
  return zr(Pr, null, e, t);
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
  else O(t) ? (t = { default: t, _ctx: W }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ur(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Br(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = nt([t.class, r.class]));
      else if (s === "style")
        t.style = tt([t.style, r.style]);
      else if (pn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(b(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
  }
  return t;
}
let He = null, ke;
{
  const e = Tt(), t = (n, r) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
      s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
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
const Jr = (e) => {
  const t = He;
  return ke(e), e.scope.on(), () => {
    e.scope.off(), ke(t);
  };
};
function qr(e) {
  return e.vnode.shapeFlag & 4;
}
let on = !1;
function Yr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zn(Yn(e.exposed)), {
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
const Gr = /(?:^|[-_])(\w)/g, Qr = (e) => e.replace(Gr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
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
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? Qr(r) : n ? "App" : "Anonymous";
}
function an(e) {
  return O(e) && "__vccOpts" in e;
}
function Zr() {
  if (h.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(c) {
      return y(c) ? c.__isVue ? ["div", e, "VueInstance"] : D(c) ? [
        "div",
        {},
        ["span", e, f(c)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in c ? c._value : c),
        ">"
      ] : ne(c) ? [
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
          ...o(c.$)
        ];
    }
  };
  function o(c) {
    const u = [];
    c.type.props && c.props && u.push(i("props", g(c.props))), c.setupState !== I && u.push(i("setup", c.setupState)), c.data !== I && u.push(i("data", g(c.data)));
    const m = a(c, "computed");
    m && u.push(i("computed", m));
    const S = a(c, "inject");
    return S && u.push(i("injected", S)), u.push([
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
  function i(c, u) {
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
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : y(c) ? ["object", { object: u ? g(c) : c }] : ["span", n, String(c)];
  }
  function a(c, u) {
    const m = c.type;
    if (O(m))
      return;
    const S = {};
    for (const M in c.ctx)
      p(m, M, u) && (S[M] = c.ctx[M]);
    return S;
  }
  function p(c, u, m) {
    const S = c[m];
    if (b(S) && S.includes(u) || y(S) && u in S || c.extends && p(c.extends, u, m) || c.mixins && c.mixins.some((M) => p(M, u, m)))
      return !0;
  }
  function f(c) {
    return T(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
var Xr = {};
function kr() {
  Zr();
}
Xr.NODE_ENV !== "production" && kr();
const es = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, s] of t)
    n[r] = s;
  return n;
}, ve = window.jQuery, Se = (e) => e === void 0 ? e : ve.fn.bootstrapTable.utils.extend(!0, Array.isArray(e) ? [] : {}, e), ts = {
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
    this.$table = ve(this.$el), this.$table.on("all.bs.table", (e, t, n) => {
      let r = ve.fn.bootstrapTable.events[t];
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
      for (const t of ve.fn.bootstrapTable.methods)
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
function ns(e, t, n, r, s, o) {
  return Mr(), Hr("table");
}
const rs = /* @__PURE__ */ es(ts, [["render", ns]]);
export {
  rs as default
};
