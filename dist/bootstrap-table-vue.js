var wt = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const $ = wt.NODE_ENV !== "production" ? Object.freeze({}) : {}, en = wt.NODE_ENV !== "production" ? Object.freeze([]) : [], ie = () => {
}, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), R = Object.assign, nn = Object.prototype.hasOwnProperty, N = (e, t) => nn.call(e, t), b = Array.isArray, k = (e) => Ce(e) === "[object Map]", rn = (e) => Ce(e) === "[object Set]", O = (e) => typeof e == "function", F = (e) => typeof e == "string", pe = (e) => typeof e == "symbol", y = (e) => e !== null && typeof e == "object", sn = (e) => (y(e) || O(e)) && O(e.then) && O(e.catch), on = Object.prototype.toString, Ce = (e) => on.call(e), Nt = (e) => Ce(e).slice(8, -1), cn = (e) => Ce(e) === "[object Object]", ke = (e) => F(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ln = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, an = ln((e) => e.charAt(0).toUpperCase() + e.slice(1)), q = (e, t) => !Object.is(e, t), un = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
};
let ft;
const Ie = () => ft || (ft = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function et(e) {
  if (b(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = F(s) ? hn(s) : et(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (F(e) || y(e))
    return e;
}
const fn = /;(?![^(]*\))/g, pn = /:([^]+)/, dn = /\/\*[^]*?\*\//g;
function hn(e) {
  const t = {};
  return e.replace(dn, "").split(fn).forEach((n) => {
    if (n) {
      const s = n.split(pn);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function tt(e) {
  let t = "";
  if (F(e))
    t = e;
  else if (b(e))
    for (let n = 0; n < e.length; n++) {
      const s = tt(e[n]);
      s && (t += s + " ");
    }
  else if (y(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
var E = {};
function z(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let m;
const je = /* @__PURE__ */ new WeakSet();
class gn {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0;
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, je.has(this) && (je.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _n(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, pt(this), Ot(this);
    const t = m, n = A;
    m = this, A = !0;
    try {
      return this.fn();
    } finally {
      E.NODE_ENV !== "production" && m !== this && z(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), xt(this), m = t, A = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        st(t);
      this.deps = this.depsTail = void 0, pt(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? je.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Be(this) && this.run();
  }
  get dirty() {
    return Be(this);
  }
}
let St = 0, oe, ce;
function _n(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ce, ce = e;
    return;
  }
  e.next = oe, oe = e;
}
function nt() {
  St++;
}
function rt() {
  if (--St > 0)
    return;
  if (ce) {
    let t = ce;
    for (ce = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; oe; ) {
    let t = oe;
    for (oe = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ot(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function xt(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), st(s), bn(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Be(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (mn(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function mn(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Oe))
    return;
  e.globalVersion = Oe;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Be(e)) {
    e.flags &= -3;
    return;
  }
  const n = m, s = A;
  m = e, A = !0;
  try {
    Ot(e);
    const r = e.fn(e._value);
    (t.version === 0 || q(r, e._value)) && (e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    m = n, A = s, xt(e), e.flags &= -3;
  }
}
function st(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), E.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = r), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      st(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function bn(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let A = !0;
const vt = [];
function $e() {
  vt.push(A), A = !1;
}
function Pe() {
  const e = vt.pop();
  A = e === void 0 ? !0 : e;
}
function pt(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = m;
    m = void 0;
    try {
      t();
    } finally {
      m = n;
    }
  }
}
let Oe = 0;
class En {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wn {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, E.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!m || !A || m === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== m)
      n = this.activeLink = new En(m, this), m.deps ? (n.prevDep = m.depsTail, m.depsTail.nextDep = n, m.depsTail = n) : m.deps = m.depsTail = n, yt(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = m.depsTail, n.nextDep = void 0, m.depsTail.nextDep = n, m.depsTail = n, m.deps === n && (m.deps = s);
    }
    return E.NODE_ENV !== "production" && m.onTrack && m.onTrack(
      R(
        {
          effect: m
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Oe++, this.notify(t);
  }
  notify(t) {
    nt();
    try {
      if (E.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            R(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      rt();
    }
  }
}
function yt(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        yt(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), E.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Je = /* @__PURE__ */ new WeakMap(), Y = Symbol(
  E.NODE_ENV !== "production" ? "Object iterate" : ""
), qe = Symbol(
  E.NODE_ENV !== "production" ? "Map keys iterate" : ""
), ae = Symbol(
  E.NODE_ENV !== "production" ? "Array iterate" : ""
);
function x(e, t, n) {
  if (A && m) {
    let s = Je.get(e);
    s || Je.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new wn()), r.map = s, r.key = n), E.NODE_ENV !== "production" ? r.track({
      target: e,
      type: t,
      key: n
    }) : r.track();
  }
}
function K(e, t, n, s, r, i) {
  const o = Je.get(e);
  if (!o) {
    Oe++;
    return;
  }
  const c = (a) => {
    a && (E.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: r,
      oldTarget: i
    }) : a.trigger());
  };
  if (nt(), t === "clear")
    o.forEach(c);
  else {
    const a = b(e), f = a && ke(n);
    if (a && n === "length") {
      const d = Number(s);
      o.forEach((l, u) => {
        (u === "length" || u === ae || !pe(u) && u >= d) && c(l);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && c(o.get(n)), f && c(o.get(ae)), t) {
        case "add":
          a ? f && c(o.get("length")) : (c(o.get(Y)), k(e) && c(o.get(qe)));
          break;
        case "delete":
          a || (c(o.get(Y)), k(e) && c(o.get(qe)));
          break;
        case "set":
          k(e) && c(o.get(Y));
          break;
      }
  }
  rt();
}
function Z(e) {
  const t = h(e);
  return t === e ? t : (x(t, "iterate", ae), V(e) ? t : t.map(T));
}
function it(e) {
  return x(e = h(e), "iterate", ae), e;
}
const Nn = {
  __proto__: null,
  [Symbol.iterator]() {
    return He(this, Symbol.iterator, T);
  },
  concat(...e) {
    return Z(this).concat(
      ...e.map((t) => b(t) ? Z(t) : t)
    );
  },
  entries() {
    return He(this, "entries", (e) => (e[1] = T(e[1]), e));
  },
  every(e, t) {
    return j(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return j(this, "filter", e, t, (n) => n.map(T), arguments);
  },
  find(e, t) {
    return j(this, "find", e, t, T, arguments);
  },
  findIndex(e, t) {
    return j(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return j(this, "findLast", e, t, T, arguments);
  },
  findLastIndex(e, t) {
    return j(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return j(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return We(this, "includes", e);
  },
  indexOf(...e) {
    return We(this, "indexOf", e);
  },
  join(e) {
    return Z(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return We(this, "lastIndexOf", e);
  },
  map(e, t) {
    return j(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return re(this, "pop");
  },
  push(...e) {
    return re(this, "push", e);
  },
  reduce(e, ...t) {
    return dt(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return dt(this, "reduceRight", e, t);
  },
  shift() {
    return re(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return j(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return re(this, "splice", e);
  },
  toReversed() {
    return Z(this).toReversed();
  },
  toSorted(e) {
    return Z(this).toSorted(e);
  },
  toSpliced(...e) {
    return Z(this).toSpliced(...e);
  },
  unshift(...e) {
    return re(this, "unshift", e);
  },
  values() {
    return He(this, "values", T);
  }
};
function He(e, t, n) {
  const s = it(e), r = s[t]();
  return s !== e && !V(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.value && (i.value = n(i.value)), i;
  }), r;
}
const Sn = Array.prototype;
function j(e, t, n, s, r, i) {
  const o = it(e), c = o !== e && !V(e), a = o[t];
  if (a !== Sn[t]) {
    const l = a.apply(e, i);
    return c ? T(l) : l;
  }
  let f = n;
  o !== e && (c ? f = function(l, u) {
    return n.call(this, T(l), u, e);
  } : n.length > 2 && (f = function(l, u) {
    return n.call(this, l, u, e);
  }));
  const d = a.call(o, f, s);
  return c && r ? r(d) : d;
}
function dt(e, t, n, s) {
  const r = it(e);
  let i = n;
  return r !== e && (V(e) ? n.length > 3 && (i = function(o, c, a) {
    return n.call(this, o, c, a, e);
  }) : i = function(o, c, a) {
    return n.call(this, o, T(c), a, e);
  }), r[t](i, ...s);
}
function We(e, t, n) {
  const s = h(e);
  x(s, "iterate", ae);
  const r = s[t](...n);
  return (r === -1 || r === !1) && xe(n[0]) ? (n[0] = h(n[0]), s[t](...n)) : r;
}
function re(e, t, n = []) {
  $e(), nt();
  const s = h(e)[t].apply(e, n);
  return rt(), Pe(), s;
}
const On = /* @__PURE__ */ kt("__proto__,__v_isRef,__isVue"), Dt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pe)
);
function xn(e) {
  pe(e) || (e = String(e));
  const t = h(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
class Tt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? It : Ct : i ? Pn : Rt).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = b(t);
    if (!r) {
      let a;
      if (o && (a = Nn[n]))
        return a;
      if (n === "hasOwnProperty")
        return xn;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      D(t) ? t : s
    );
    return (pe(n) ? Dt.has(n) : On(n)) || (r || x(t, "get", n), i) ? c : D(c) ? o && ke(n) ? c : c.value : y(c) ? r ? Pt(c) : $t(c) : c;
  }
}
class vn extends Tt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    if (!this._isShallow) {
      const a = U(i);
      if (!V(s) && !U(s) && (i = h(i), s = h(s)), !b(t) && D(i) && !D(s))
        return a ? !1 : (i.value = s, !0);
    }
    const o = b(t) && ke(n) ? Number(n) < t.length : N(t, n), c = Reflect.set(
      t,
      n,
      s,
      D(t) ? t : r
    );
    return t === h(r) && (o ? q(s, i) && K(t, "set", n, s, i) : K(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = N(t, n), r = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && K(t, "delete", n, void 0, r), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!pe(n) || !Dt.has(n)) && x(t, "has", n), s;
  }
  ownKeys(t) {
    return x(
      t,
      "iterate",
      b(t) ? "length" : Y
    ), Reflect.ownKeys(t);
  }
}
class Vt extends Tt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return E.NODE_ENV !== "production" && z(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return E.NODE_ENV !== "production" && z(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const yn = /* @__PURE__ */ new vn(), Dn = /* @__PURE__ */ new Vt(), Tn = /* @__PURE__ */ new Vt(!0), Ye = (e) => e, ge = (e) => Reflect.getPrototypeOf(e);
function Vn(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = h(r), o = k(i), c = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, f = r[e](...s), d = n ? Ye : t ? Ge : T;
    return !t && x(
      i,
      "iterate",
      a ? qe : Y
    ), {
      // iterator protocol
      next() {
        const { value: l, done: u } = f.next();
        return u ? { value: l, done: u } : {
          value: c ? [d(l[0]), d(l[1])] : d(l),
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
function _e(e) {
  return function(...t) {
    if (E.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      z(
        `${an(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Rn(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = h(i), c = h(r);
      e || (q(r, c) && x(o, "get", r), x(o, "get", c));
      const { has: a } = ge(o), f = t ? Ye : e ? Ge : T;
      if (a.call(o, r))
        return f(i.get(r));
      if (a.call(o, c))
        return f(i.get(c));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && x(h(r), "iterate", Y), Reflect.get(r, "size", r);
    },
    has(r) {
      const i = this.__v_raw, o = h(i), c = h(r);
      return e || (q(r, c) && x(o, "has", r), x(o, "has", c)), r === c ? i.has(r) : i.has(r) || i.has(c);
    },
    forEach(r, i) {
      const o = this, c = o.__v_raw, a = h(c), f = t ? Ye : e ? Ge : T;
      return !e && x(a, "iterate", Y), c.forEach((d, l) => r.call(i, f(d), f(l), o));
    }
  };
  return R(
    n,
    e ? {
      add: _e("add"),
      set: _e("set"),
      delete: _e("delete"),
      clear: _e("clear")
    } : {
      add(r) {
        !t && !V(r) && !U(r) && (r = h(r));
        const i = h(this);
        return ge(i).has.call(i, r) || (i.add(r), K(i, "add", r, r)), this;
      },
      set(r, i) {
        !t && !V(i) && !U(i) && (i = h(i));
        const o = h(this), { has: c, get: a } = ge(o);
        let f = c.call(o, r);
        f ? E.NODE_ENV !== "production" && ht(o, c, r) : (r = h(r), f = c.call(o, r));
        const d = a.call(o, r);
        return o.set(r, i), f ? q(i, d) && K(o, "set", r, i, d) : K(o, "add", r, i), this;
      },
      delete(r) {
        const i = h(this), { has: o, get: c } = ge(i);
        let a = o.call(i, r);
        a ? E.NODE_ENV !== "production" && ht(i, o, r) : (r = h(r), a = o.call(i, r));
        const f = c ? c.call(i, r) : void 0, d = i.delete(r);
        return a && K(i, "delete", r, void 0, f), d;
      },
      clear() {
        const r = h(this), i = r.size !== 0, o = E.NODE_ENV !== "production" ? k(r) ? new Map(r) : new Set(r) : void 0, c = r.clear();
        return i && K(
          r,
          "clear",
          void 0,
          void 0,
          o
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = Vn(r, e, t);
  }), n;
}
function ot(e, t) {
  const n = Rn(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    N(n, r) && r in s ? n : s,
    r,
    i
  );
}
const Cn = {
  get: /* @__PURE__ */ ot(!1, !1)
}, In = {
  get: /* @__PURE__ */ ot(!0, !1)
}, $n = {
  get: /* @__PURE__ */ ot(!0, !0)
};
function ht(e, t, n) {
  const s = h(n);
  if (s !== n && t.call(e, s)) {
    const r = Nt(e);
    z(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Rt = /* @__PURE__ */ new WeakMap(), Pn = /* @__PURE__ */ new WeakMap(), Ct = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap();
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
function Mn(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : An(Nt(e));
}
function $t(e) {
  return U(e) ? e : ct(
    e,
    !1,
    yn,
    Cn,
    Rt
  );
}
function Pt(e) {
  return ct(
    e,
    !0,
    Dn,
    In,
    Ct
  );
}
function me(e) {
  return ct(
    e,
    !0,
    Tn,
    $n,
    It
  );
}
function ct(e, t, n, s, r) {
  if (!y(e))
    return E.NODE_ENV !== "production" && z(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = r.get(e);
  if (i)
    return i;
  const o = Mn(e);
  if (o === 0)
    return e;
  const c = new Proxy(
    e,
    o === 2 ? s : n
  );
  return r.set(e, c), c;
}
function ee(e) {
  return U(e) ? ee(e.__v_raw) : !!(e && e.__v_isReactive);
}
function U(e) {
  return !!(e && e.__v_isReadonly);
}
function V(e) {
  return !!(e && e.__v_isShallow);
}
function xe(e) {
  return e ? !!e.__v_raw : !1;
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function Fn(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && un(e, "__v_skip", !0), e;
}
const T = (e) => y(e) ? $t(e) : e, Ge = (e) => y(e) ? Pt(e) : e;
function D(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function jn(e) {
  return D(e) ? e.value : e;
}
const Hn = {
  get: (e, t, n) => t === "__v_raw" ? e : jn(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return D(r) && !D(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Wn(e) {
  return ee(e) ? e : new Proxy(e, Hn);
}
const be = {}, ve = /* @__PURE__ */ new WeakMap();
let J;
function Kn(e, t = !1, n = J) {
  if (n) {
    let s = ve.get(n);
    s || ve.set(n, s = []), s.push(e);
  } else E.NODE_ENV !== "production" && !t && z(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Ln(e, t, n = $) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: c, call: a } = n, f = (g) => {
    (n.onWarn || z)(
      "Invalid watch source: ",
      g,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (g) => r ? g : V(g) || r === !1 || r === 0 ? L(g, 1) : L(g);
  let l, u, p, w, C = !1, de = !1;
  if (D(e) ? (u = () => e.value, C = V(e)) : ee(e) ? (u = () => d(e), C = !0) : b(e) ? (de = !0, C = e.some((g) => ee(g) || V(g)), u = () => e.map((g) => {
    if (D(g))
      return g.value;
    if (ee(g))
      return d(g);
    if (O(g))
      return a ? a(g, 2) : g();
    E.NODE_ENV !== "production" && f(g);
  })) : O(e) ? t ? u = a ? () => a(e, 2) : e : u = () => {
    if (p) {
      $e();
      try {
        p();
      } finally {
        Pe();
      }
    }
    const g = J;
    J = l;
    try {
      return a ? a(e, 3, [w]) : e(w);
    } finally {
      J = g;
    }
  } : (u = ie, E.NODE_ENV !== "production" && f(e)), t && r) {
    const g = u, M = r === !0 ? 1 / 0 : r;
    u = () => L(g(), M);
  }
  const Q = () => {
    l.stop();
  };
  if (i && t) {
    const g = t;
    t = (...M) => {
      g(...M), Q();
    };
  }
  let B = de ? new Array(e.length).fill(be) : be;
  const ne = (g) => {
    if (!(!(l.flags & 1) || !l.dirty && !g))
      if (t) {
        const M = l.run();
        if (r || C || (de ? M.some((Fe, he) => q(Fe, B[he])) : q(M, B))) {
          p && p();
          const Fe = J;
          J = l;
          try {
            const he = [
              M,
              // pass undefined as the old value when it's changed for the first time
              B === be ? void 0 : de && B[0] === be ? [] : B,
              w
            ];
            a ? a(t, 3, he) : (
              // @ts-expect-error
              t(...he)
            ), B = M;
          } finally {
            J = Fe;
          }
        }
      } else
        l.run();
  };
  return c && c(ne), l = new gn(u), l.scheduler = o ? () => o(ne, !1) : ne, w = (g) => Kn(g, !1, l), p = l.onStop = () => {
    const g = ve.get(l);
    if (g) {
      if (a)
        a(g, 4);
      else
        for (const M of g) M();
      ve.delete(l);
    }
  }, E.NODE_ENV !== "production" && (l.onTrack = n.onTrack, l.onTrigger = n.onTrigger), t ? s ? ne(!0) : B = l.run() : o ? o(ne.bind(null, !0), !0) : l.run(), Q.pause = l.pause.bind(l), Q.resume = l.resume.bind(l), Q.stop = Q, Q;
}
function L(e, t = 1 / 0, n) {
  if (t <= 0 || !y(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, D(e))
    L(e.value, t, n);
  else if (b(e))
    for (let s = 0; s < e.length; s++)
      L(e[s], t, n);
  else if (rn(e) || k(e))
    e.forEach((s) => {
      L(s, t, n);
    });
  else if (cn(e)) {
    for (const s in e)
      L(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && L(e[s], t, n);
  }
  return e;
}
var _ = {};
const G = [];
function zn(e) {
  G.push(e);
}
function Un() {
  G.pop();
}
let Ke = !1;
function S(e, ...t) {
  if (Ke) return;
  Ke = !0, $e();
  const n = G.length ? G[G.length - 1].component : null, s = n && n.appContext.config.warnHandler, r = Bn();
  if (s)
    Ae(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var o, c;
          return (c = (o = i.toString) == null ? void 0 : o.call(i)) != null ? c : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: i }) => `at <${Zt(n, i.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    r.length && i.push(`
`, ...Jn(r)), console.warn(...i);
  }
  Pe(), Ke = !1;
}
function Bn() {
  let e = G[G.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Jn(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...qn(n));
  }), t;
}
function qn({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, r = ` at <${Zt(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [r, ...Yn(e.props), i] : [r + i];
}
function Yn(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...At(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function At(e, t, n) {
  return F(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : D(t) ? (t = At(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const Mt = {
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
function Ae(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    lt(r, t, n);
  }
}
function Ft(e, t, n, s) {
  if (O(e)) {
    const r = Ae(e, t, n, s);
    return r && sn(r) && r.catch((i) => {
      lt(i, t, n);
    }), r;
  }
  if (b(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Ft(e[i], t, n, s));
    return r;
  } else _.NODE_ENV !== "production" && S(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function lt(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || $;
  if (t) {
    let c = t.parent;
    const a = t.proxy, f = _.NODE_ENV !== "production" ? Mt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const d = c.ec;
      if (d) {
        for (let l = 0; l < d.length; l++)
          if (d[l](e, a, f) === !1)
            return;
      }
      c = c.parent;
    }
    if (i) {
      $e(), Ae(i, null, 10, [
        e,
        a,
        f
      ]), Pe();
      return;
    }
  }
  Gn(e, n, r, s, o);
}
function Gn(e, t, n, s = !0, r = !1) {
  if (_.NODE_ENV !== "production") {
    const i = Mt[t];
    if (n && zn(n), S(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Un(), s)
      throw e;
    console.error(e);
  } else {
    if (r)
      throw e;
    console.error(e);
  }
}
const I = [];
let H = -1;
const te = [];
let W = null, X = 0;
const jt = /* @__PURE__ */ Promise.resolve();
let ye = null;
const Qn = 100;
function Zn(e) {
  const t = ye || jt;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xn(e) {
  let t = H + 1, n = I.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = I[s], i = ue(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function at(e) {
  if (!(e.flags & 1)) {
    const t = ue(e), n = I[I.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ue(n) ? I.push(e) : I.splice(Xn(t), 0, e), e.flags |= 1, Ht();
  }
}
function Ht() {
  ye || (ye = jt.then(Kt));
}
function Wt(e) {
  b(e) ? te.push(...e) : W && e.id === -1 ? W.splice(X + 1, 0, e) : e.flags & 1 || (te.push(e), e.flags |= 1), Ht();
}
function kn(e) {
  if (te.length) {
    const t = [...new Set(te)].sort(
      (n, s) => ue(n) - ue(s)
    );
    if (te.length = 0, W) {
      W.push(...t);
      return;
    }
    for (W = t, _.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), X = 0; X < W.length; X++) {
      const n = W[X];
      _.NODE_ENV !== "production" && Lt(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    W = null, X = 0;
  }
}
const ue = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Kt(e) {
  _.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = _.NODE_ENV !== "production" ? (n) => Lt(e, n) : ie;
  try {
    for (H = 0; H < I.length; H++) {
      const n = I[H];
      if (n && !(n.flags & 8)) {
        if (_.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ae(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; H < I.length; H++) {
      const n = I[H];
      n && (n.flags &= -2);
    }
    H = -1, I.length = 0, kn(e), ye = null, (I.length || te.length) && Kt(e);
  }
}
function Lt(e, t) {
  const n = e.get(t) || 0;
  if (n > Qn) {
    const s = t.i, r = s && Qt(s.type);
    return lt(
      `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const Le = /* @__PURE__ */ new Map();
_.NODE_ENV !== "production" && (Ie().__VUE_HMR_RUNTIME__ = {
  createRecord: ze(er),
  rerender: ze(tr),
  reload: ze(nr)
});
const De = /* @__PURE__ */ new Map();
function er(e, t) {
  return De.has(e) ? !1 : (De.set(e, {
    initialDef: Te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Te(e) {
  return Xt(e) ? e.__vccOpts : e;
}
function tr(e, t) {
  const n = De.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Te(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function nr(e, t) {
  const n = De.get(e);
  if (!n) return;
  t = Te(t), gt(n.initialDef, t);
  const s = [...n.instances];
  for (let r = 0; r < s.length; r++) {
    const i = s[r], o = Te(i.type);
    let c = Le.get(o);
    c || (o !== n.initialDef && gt(o, t), Le.set(o, c = /* @__PURE__ */ new Set())), c.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (c.add(i), i.ceReload(t.styles), c.delete(i)) : i.parent ? at(() => {
      i.parent.update(), c.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(o);
  }
  Wt(() => {
    Le.clear();
  });
}
function gt(e, t) {
  R(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ze(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let fe = null, rr = null;
const sr = (e) => e.__isTeleport;
function zt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, zt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
Ie().requestIdleCallback;
Ie().cancelIdleCallback;
const ir = Symbol.for("v-ndc"), Qe = (e) => e ? Ar(e) ? Mr(e) : Qe(e.parent) : null, le = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ R(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => _.NODE_ENV !== "production" ? me(e.props) : e.props,
    $attrs: (e) => _.NODE_ENV !== "production" ? me(e.attrs) : e.attrs,
    $slots: (e) => _.NODE_ENV !== "production" ? me(e.slots) : e.slots,
    $refs: (e) => _.NODE_ENV !== "production" ? me(e.refs) : e.refs,
    $parent: (e) => Qe(e.parent),
    $root: (e) => Qe(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => cr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      at(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zn.bind(e.proxy)),
    $watch: (e) => br.bind(e)
  })
), Ue = (e, t) => e !== $ && !e.__isScriptSetup && N(e, t), or = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: c, appContext: a } = e;
    if (_.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (Ue(s, t))
          return o[t] = 1, s[t];
        if (r !== $ && N(r, t))
          return o[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && N(f, t)
        )
          return o[t] = 3, i[t];
        if (n !== $ && N(n, t))
          return o[t] = 4, n[t];
        o[t] = 0;
      }
    }
    const d = le[t];
    let l, u;
    if (d)
      return t === "$attrs" ? x(e.attrs, "get", "") : _.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (l = c.__cssModules) && (l = l[t])
    )
      return l;
    if (n !== $ && N(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      u = a.config.globalProperties, N(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return Ue(r, t) ? (r[t] = n, !0) : _.NODE_ENV !== "production" && r.__isScriptSetup && N(r, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== $ && N(s, t) ? (s[t] = n, !0) : N(e.props, t) ? (_.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (_.NODE_ENV !== "production" && S(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (_.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, propsOptions: i }
  }, o) {
    let c;
    return !!n[o] || e !== $ && N(e, o) || Ue(t, o) || (c = i[0]) && N(c, o) || N(s, o) || N(le, o) || N(r.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
_.NODE_ENV !== "production" && (or.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function _t(e) {
  return b(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function cr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, c = i.get(t);
  let a;
  return c ? a = c : !r.length && !n && !s ? a = t : (a = {}, r.length && r.forEach(
    (f) => Ve(a, f, o, !0)
  ), Ve(a, t, o)), y(t) && i.set(t, a), a;
}
function Ve(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && Ve(e, i, n, !0), r && r.forEach(
    (o) => Ve(e, o, n, !0)
  );
  for (const o in t)
    if (s && o === "expose")
      _.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = lr[o] || n && n[o];
      e[o] = c ? c(e[o], t[o]) : t[o];
    }
  return e;
}
const lr = {
  data: mt,
  props: Et,
  emits: Et,
  // objects
  methods: se,
  computed: se,
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
  components: se,
  directives: se,
  // watch
  watch: ur,
  // provide / inject
  provide: mt,
  inject: ar
};
function mt(e, t) {
  return t ? e ? function() {
    return R(
      O(e) ? e.call(this, this) : e,
      O(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ar(e, t) {
  return se(bt(e), bt(t));
}
function bt(e) {
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
function se(e, t) {
  return e ? R(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Et(e, t) {
  return e ? b(e) && b(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : R(
    /* @__PURE__ */ Object.create(null),
    _t(e),
    _t(t ?? {})
  ) : t;
}
function ur(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = R(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = v(e[s], t[s]);
  return n;
}
let fr = null;
function pr(e, t, n = !1) {
  const s = Me || fe;
  if (s || fr) {
    const r = s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && O(t) ? t.call(s && s.proxy) : t;
    _.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else _.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const dr = {}, Ut = (e) => Object.getPrototypeOf(e) === dr, hr = Nr, gr = Symbol.for("v-scx"), _r = () => {
  {
    const e = pr(gr);
    return e || _.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function mr(e, t, n = $) {
  const { immediate: s, deep: r, flush: i, once: o } = n;
  _.NODE_ENV !== "production" && !t && (s !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = R({}, n);
  _.NODE_ENV !== "production" && (c.onWarn = S);
  const a = t && s || !t && i !== "post";
  let f;
  if (Xe) {
    if (i === "sync") {
      const p = _r();
      f = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {
      };
      return p.stop = ie, p.resume = ie, p.pause = ie, p;
    }
  }
  const d = Me;
  c.call = (p, w, C) => Ft(p, d, w, C);
  let l = !1;
  i === "post" ? c.scheduler = (p) => {
    hr(p, d && d.suspense);
  } : i !== "sync" && (l = !0, c.scheduler = (p, w) => {
    w ? p() : at(p);
  }), c.augmentJob = (p) => {
    t && (p.flags |= 4), l && (p.flags |= 2, d && (p.id = d.uid, p.i = d));
  };
  const u = Ln(e, t, c);
  return Xe && (f ? f.push(u) : a && u()), u;
}
function br(e, t, n) {
  const s = this.proxy, r = F(e) ? e.includes(".") ? Er(s, e) : () => s[e] : e.bind(s, s);
  let i;
  O(t) ? i = t : (i = t.handler, n = t);
  const o = Pr(this), c = mr(r, i.bind(s), n);
  return o(), c;
}
function Er(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const wr = (e) => e.__isSuspense;
function Nr(e, t) {
  t && t.pendingBranch ? b(e) ? t.effects.push(...e) : t.effects.push(e) : Wt(e);
}
const Bt = Symbol.for("v-fgt"), Sr = Symbol.for("v-txt"), Or = Symbol.for("v-cmt"), we = [];
let P = null;
function xr(e = !1) {
  we.push(P = e ? null : []);
}
function vr() {
  we.pop(), P = we[we.length - 1] || null;
}
function yr(e) {
  return e.dynamicChildren = P || en, vr(), P && P.push(e), e;
}
function Dr(e, t, n, s, r, i) {
  return yr(
    qt(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function Tr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Vr = (...e) => Yt(
  ...e
), Jt = ({ key: e }) => e ?? null, Ne = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? F(e) || D(e) || O(e) ? { i: fe, r: e, k: t, f: !!n } : e : null);
function qt(e, t = null, n = null, s = 0, r = null, i = e === Bt ? 0 : 1, o = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jt(t),
    ref: t && Ne(t),
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
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return c ? (ut(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= F(n) ? 8 : 16), _.NODE_ENV !== "production" && a.key !== a.key && S("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !o && // has current parent block
  P && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && P.push(a), a;
}
const Rr = _.NODE_ENV !== "production" ? Vr : Yt;
function Yt(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === ir) && (_.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Or), Tr(e)) {
    const c = Re(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ut(c, n), !i && P && (c.shapeFlag & 6 ? P[P.indexOf(e)] = c : P.push(c)), c.patchFlag = -2, c;
  }
  if (Xt(e) && (e = e.__vccOpts), t) {
    t = Cr(t);
    let { class: c, style: a } = t;
    c && !F(c) && (t.class = tt(c)), y(a) && (xe(a) && !b(a) && (a = R({}, a)), t.style = et(a));
  }
  const o = F(e) ? 1 : wr(e) ? 128 : sr(e) ? 64 : y(e) ? 4 : O(e) ? 2 : 0;
  return _.NODE_ENV !== "production" && o & 4 && xe(e) && (e = h(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), qt(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function Cr(e) {
  return e ? xe(e) || Ut(e) ? R({}, e) : e : null;
}
function Re(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: c, transition: a } = e, f = t ? $r(r || {}, t) : r, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && Jt(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? b(i) ? i.concat(Ne(t)) : [i, Ne(t)] : Ne(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: _.NODE_ENV !== "production" && o === -1 && b(c) ? c.map(Gt) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Bt ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Re(e.ssContent),
    ssFallback: e.ssFallback && Re(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && zt(
    d,
    a.clone(d)
  ), d;
}
function Gt(e) {
  const t = Re(e);
  return b(e.children) && (t.children = e.children.map(Gt)), t;
}
function Ir(e = " ", t = 0) {
  return Rr(Sr, null, e, t);
}
function ut(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (b(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), ut(e, r()), r._c && (r._d = !0));
      return;
    } else
      n = 32, !t._ && !Ut(t) && (t._ctx = fe);
  else O(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Ir(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $r(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = tt([t.class, s.class]));
      else if (r === "style")
        t.style = et([t.style, s.style]);
      else if (tn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(b(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
let Me = null, Ze;
{
  const e = Ie(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  Ze = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Me = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Xe = n
  );
}
const Pr = (e) => {
  const t = Me;
  return Ze(e), e.scope.on(), () => {
    e.scope.off(), Ze(t);
  };
};
function Ar(e) {
  return e.vnode.shapeFlag & 4;
}
let Xe = !1;
function Mr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Wn(Fn(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in le)
        return le[n](e);
    },
    has(t, n) {
      return n in t || n in le;
    }
  })) : e.proxy;
}
const Fr = /(?:^|[-_])(\w)/g, jr = (e) => e.replace(Fr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Qt(e, t = !0) {
  return O(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zt(e, t, n = !1) {
  let s = Qt(t);
  if (!s && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (s = r[1]);
  }
  if (!s && e && e.parent) {
    const r = (i) => {
      for (const o in i)
        if (i[o] === t)
          return o;
    };
    s = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return s ? jr(s) : n ? "App" : "Anonymous";
}
function Xt(e) {
  return O(e) && "__vccOpts" in e;
}
function Hr() {
  if (_.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, r = {
    __vue_custom_formatter: !0,
    header(l) {
      return y(l) ? l.__isVue ? ["div", e, "VueInstance"] : D(l) ? [
        "div",
        {},
        ["span", e, d(l)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in l ? l._value : l),
        ">"
      ] : ee(l) ? [
        "div",
        {},
        ["span", e, V(l) ? "ShallowReactive" : "Reactive"],
        "<",
        c(l),
        `>${U(l) ? " (readonly)" : ""}`
      ] : U(l) ? [
        "div",
        {},
        ["span", e, V(l) ? "ShallowReadonly" : "Readonly"],
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
          ...i(l.$)
        ];
    }
  };
  function i(l) {
    const u = [];
    l.type.props && l.props && u.push(o("props", h(l.props))), l.setupState !== $ && u.push(o("setup", l.setupState)), l.data !== $ && u.push(o("data", h(l.data)));
    const p = a(l, "computed");
    p && u.push(o("computed", p));
    const w = a(l, "inject");
    return w && u.push(o("injected", w)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: l }]
    ]), u;
  }
  function o(l, u) {
    return u = R({}, u), Object.keys(u).length ? [
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
        ...Object.keys(u).map((p) => [
          "div",
          {},
          ["span", s, p + ": "],
          c(u[p], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(l, u = !0) {
    return typeof l == "number" ? ["span", t, l] : typeof l == "string" ? ["span", n, JSON.stringify(l)] : typeof l == "boolean" ? ["span", s, l] : y(l) ? ["object", { object: u ? h(l) : l }] : ["span", n, String(l)];
  }
  function a(l, u) {
    const p = l.type;
    if (O(p))
      return;
    const w = {};
    for (const C in l.ctx)
      f(p, C, u) && (w[C] = l.ctx[C]);
    return w;
  }
  function f(l, u, p) {
    const w = l[p];
    if (b(w) && w.includes(u) || y(w) && u in w || l.extends && f(l.extends, u, p) || l.mixins && l.mixins.some((C) => f(C, u, p)))
      return !0;
  }
  function d(l) {
    return V(l) ? "ShallowRef" : l.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
var Wr = {};
function Kr() {
  Hr();
}
Wr.NODE_ENV !== "production" && Kr();
const Lr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Se = window.jQuery, Ee = (e) => e === void 0 ? e : Se.fn.bootstrapTable.utils.extend(!0, Array.isArray(e) ? [] : {}, e), zr = {
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
    this.$table = Se(this.$el), this.$table.on("all.bs.table", (e, t, n) => {
      let s = Se.fn.bootstrapTable.events[t];
      s = s.replace(/([A-Z])/g, "-$1").toLowerCase(), this.$emit("on-all", ...n), this.$emit(s, ...n);
    }), this._initTable();
  },
  beforeUnmount() {
    this.$table.bootstrapTable("destroy");
  },
  methods: {
    _initTable() {
      const e = {
        ...Ee(this.options),
        columns: Ee(this.columns),
        data: Ee(this.data)
      };
      this._hasInit ? this.refreshOptions(e) : (this.$table.bootstrapTable(e), this._hasInit = !0);
    },
    ...(() => {
      const e = {};
      for (const t of Se.fn.bootstrapTable.methods)
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
        this.load(Ee(this.data));
      },
      deep: !0
    }
  }
};
function Ur(e, t, n, s, r, i) {
  return xr(), Dr("table");
}
const Br = /* @__PURE__ */ Lr(zr, [["render", Ur]]);
export {
  Br as default
};
