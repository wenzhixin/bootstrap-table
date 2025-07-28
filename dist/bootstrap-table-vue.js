var ne = {};
const W = ne.NODE_ENV !== "production" ? Object.freeze({}) : {}, Ne = ne.NODE_ENV !== "production" ? Object.freeze([]) : [], Ee = () => {
}, we = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), z = Object.assign, g = Array.isArray, O = (e) => typeof e == "function", E = (e) => typeof e == "string", Ce = (e) => typeof e == "symbol", w = (e) => e !== null && typeof e == "object";
let ee;
const H = () => ee || (ee = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function G(e) {
  if (g(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = E(o) ? xe(o) : G(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (E(e) || w(e))
    return e;
}
const Se = /;(?![^(]*\))/g, Oe = /:([^]+)/, ke = /\/\*[^]*?\*\//g;
function xe(e) {
  const t = {};
  return e.replace(ke, "").split(Se).forEach((n) => {
    if (n) {
      const o = n.split(Oe);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Q(e) {
  let t = "";
  if (E(e))
    t = e;
  else if (g(e))
    for (let n = 0; n < e.length; n++) {
      const o = Q(e[n]);
      o && (t += o + " ");
    }
  else if (w(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ce)
);
function oe(e) {
  return K(e) ? oe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function K(e) {
  return !!(e && e.__v_isReadonly);
}
function B(e) {
  return !!(e && e.__v_isShallow);
}
function L(e) {
  return e ? !!e.__v_raw : !1;
}
function C(e) {
  const t = e && e.__v_raw;
  return t ? C(t) : e;
}
function Z(e) {
  return e ? e.__v_isRef === !0 : !1;
}
var f = {};
const S = [];
function Te(e) {
  S.push(e);
}
function Re() {
  S.pop();
}
let j = !1;
function R(e, ...t) {
  if (j) return;
  j = !0;
  const n = S.length ? S[S.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ve();
  if (o)
    X(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var l, c;
          return (c = (l = r.toString) == null ? void 0 : l.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${ye(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Ie(s)), console.warn(...r);
  }
  j = !1;
}
function Ve() {
  let e = S[S.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ie(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...$e(n));
  }), t;
}
function $e({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${ye(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Fe(e.props), r] : [s + r];
}
function Fe(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...re(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function re(e, t, n) {
  return E(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Z(t) ? (t = re(e, C(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = C(t), n ? t : [`${e}=`, t]);
}
const se = {
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
function X(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    ie(s, t, n);
  }
}
function ie(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: l } = t && t.appContext.config || W;
  if (t) {
    let c = t.parent;
    const a = t.proxy, m = f.NODE_ENV !== "production" ? se[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const y = c.ec;
      if (y) {
        for (let i = 0; i < y.length; i++)
          if (y[i](e, a, m) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      X(r, null, 10, [
        e,
        a,
        m
      ]);
      return;
    }
  }
  De(e, n, s, o, l);
}
function De(e, t, n, o = !0, s = !1) {
  if (f.NODE_ENV !== "production") {
    const r = se[t];
    if (n && Te(n), R(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Re(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const p = [];
let b = -1;
const x = [];
let N = null, k = 0;
const Ae = /* @__PURE__ */ Promise.resolve();
let Y = null;
const Pe = 100;
function Me(e) {
  let t = b + 1, n = p.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = p[o], r = V(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Ue(e) {
  if (!(e.flags & 1)) {
    const t = V(e), n = p[p.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= V(n) ? p.push(e) : p.splice(Me(t), 0, e), e.flags |= 1, le();
  }
}
function le() {
  Y || (Y = Ae.then(ce));
}
function ze(e) {
  g(e) ? x.push(...e) : N && e.id === -1 ? N.splice(k + 1, 0, e) : e.flags & 1 || (x.push(e), e.flags |= 1), le();
}
function He(e) {
  if (x.length) {
    const t = [...new Set(x)].sort(
      (n, o) => V(n) - V(o)
    );
    if (x.length = 0, N) {
      N.push(...t);
      return;
    }
    for (N = t, f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), k = 0; k < N.length; k++) {
      const n = N[k];
      f.NODE_ENV !== "production" && ae(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    N = null, k = 0;
  }
}
const V = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ce(e) {
  f.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = f.NODE_ENV !== "production" ? (n) => ae(e, n) : Ee;
  try {
    for (b = 0; b < p.length; b++) {
      const n = p[b];
      if (n && !(n.flags & 8)) {
        if (f.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), X(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; b < p.length; b++) {
      const n = p[b];
      n && (n.flags &= -2);
    }
    b = -1, p.length = 0, He(e), Y = null, (p.length || x.length) && ce(e);
  }
}
function ae(e, t) {
  const n = e.get(t) || 0;
  if (n > Pe) {
    const o = t.i, s = o && ge(o.type);
    return ie(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
const J = /* @__PURE__ */ new Map();
f.NODE_ENV !== "production" && (H().__VUE_HMR_RUNTIME__ = {
  createRecord: q(Be),
  rerender: q(je),
  reload: q(Je)
});
const A = /* @__PURE__ */ new Map();
function Be(e, t) {
  return A.has(e) ? !1 : (A.set(e, {
    initialDef: P(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function P(e) {
  return be(e) ? e.__vccOpts : e;
}
function je(e, t) {
  const n = A.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, P(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Je(e, t) {
  const n = A.get(e);
  if (!n) return;
  t = P(t), te(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], l = P(r.type);
    let c = J.get(l);
    c || (l !== n.initialDef && te(l, t), J.set(l, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? Ue(() => {
      r.parent.update(), c.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(l);
  }
  ze(() => {
    J.clear();
  });
}
function te(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function q(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let M = null, qe = null;
const We = (e) => e.__isTeleport;
function ue(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ue(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
H().requestIdleCallback;
H().cancelIdleCallback;
const Ke = Symbol.for("v-ndc"), Le = {};
f.NODE_ENV !== "production" && (Le.ownKeys = (e) => (R(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const Ye = {}, fe = (e) => Object.getPrototypeOf(e) === Ye, Ge = (e) => e.__isSuspense, de = Symbol.for("v-fgt"), Qe = Symbol.for("v-txt"), Ze = Symbol.for("v-cmt"), $ = [];
let h = null;
function Xe(e = !1) {
  $.push(h = e ? null : []);
}
function ve() {
  $.pop(), h = $[$.length - 1] || null;
}
function et(e) {
  return e.dynamicChildren = h || Ne, ve(), h && h.push(e), e;
}
function tt(e, t, n, o, s, r) {
  return et(
    he(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function nt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ot = (...e) => me(
  ...e
), pe = ({ key: e }) => e ?? null, F = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? E(e) || Z(e) || O(e) ? { i: M, r: e, k: t, f: !!n } : e : null);
function he(e, t = null, n = null, o = 0, s = null, r = e === de ? 0 : 1, l = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pe(t),
    ref: t && F(t),
    scopeId: qe,
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
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: M
  };
  return c ? (v(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= E(n) ? 8 : 16), f.NODE_ENV !== "production" && a.key !== a.key && R("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !l && // has current parent block
  h && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && h.push(a), a;
}
const rt = f.NODE_ENV !== "production" ? ot : me;
function me(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Ke) && (f.NODE_ENV !== "production" && !e && R(`Invalid vnode type when creating vnode: ${e}.`), e = Ze), nt(e)) {
    const c = U(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && v(c, n), !r && h && (c.shapeFlag & 6 ? h[h.indexOf(e)] = c : h.push(c)), c.patchFlag = -2, c;
  }
  if (be(e) && (e = e.__vccOpts), t) {
    t = st(t);
    let { class: c, style: a } = t;
    c && !E(c) && (t.class = Q(c)), w(a) && (L(a) && !g(a) && (a = z({}, a)), t.style = G(a));
  }
  const l = E(e) ? 1 : Ge(e) ? 128 : We(e) ? 64 : w(e) ? 4 : O(e) ? 2 : 0;
  return f.NODE_ENV !== "production" && l & 4 && L(e) && (e = C(e), R(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), he(
    e,
    t,
    n,
    o,
    s,
    l,
    r,
    !0
  );
}
function st(e) {
  return e ? L(e) || fe(e) ? z({}, e) : e : null;
}
function U(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: l, children: c, transition: a } = e, m = t ? lt(s || {}, t) : s, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: m,
    key: m && pe(m),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? g(r) ? r.concat(F(t)) : [r, F(t)] : F(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: f.NODE_ENV !== "production" && l === -1 && g(c) ? c.map(_e) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== de ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && U(e.ssContent),
    ssFallback: e.ssFallback && U(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && ue(
    y,
    a.clone(y)
  ), y;
}
function _e(e) {
  const t = U(e);
  return g(e.children) && (t.children = e.children.map(_e)), t;
}
function it(e = " ", t = 0) {
  return rt(Qe, null, e, t);
}
function v(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (g(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), v(e, s()), s._c && (s._d = !0));
      return;
    } else
      n = 32, !t._ && !fe(t) && (t._ctx = M);
  else O(t) ? (t = { default: t, _ctx: M }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [it(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function lt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Q([t.class, o.class]));
      else if (s === "style")
        t.style = G([t.style, o.style]);
      else if (we(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(g(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
{
  const e = H(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => n
  );
}
const ct = /(?:^|[-_])(\w)/g, at = (e) => e.replace(ct, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ge(e, t = !0) {
  return O(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ye(e, t, n = !1) {
  let o = ge(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const l in r)
        if (r[l] === t)
          return l;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? at(o) : n ? "App" : "Anonymous";
}
function be(e) {
  return O(e) && "__vccOpts" in e;
}
function ut() {
  if (f.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(i) {
      if (!w(i))
        return null;
      if (i.__isVue)
        return ["div", e, "VueInstance"];
      if (Z(i)) {
        const u = i.value;
        return [
          "div",
          {},
          ["span", e, y(i)],
          "<",
          c(u),
          ">"
        ];
      } else {
        if (oe(i))
          return [
            "div",
            {},
            ["span", e, B(i) ? "ShallowReactive" : "Reactive"],
            "<",
            c(i),
            `>${K(i) ? " (readonly)" : ""}`
          ];
        if (K(i))
          return [
            "div",
            {},
            ["span", e, B(i) ? "ShallowReadonly" : "Readonly"],
            "<",
            c(i),
            ">"
          ];
      }
      return null;
    },
    hasBody(i) {
      return i && i.__isVue;
    },
    body(i) {
      if (i && i.__isVue)
        return [
          "div",
          {},
          ...r(i.$)
        ];
    }
  };
  function r(i) {
    const u = [];
    i.type.props && i.props && u.push(l("props", C(i.props))), i.setupState !== W && u.push(l("setup", i.setupState)), i.data !== W && u.push(l("data", C(i.data)));
    const d = a(i, "computed");
    d && u.push(l("computed", d));
    const _ = a(i, "inject");
    return _ && u.push(l("injected", _)), u.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: i }]
    ]), u;
  }
  function l(i, u) {
    return u = z({}, u), Object.keys(u).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        i
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(u).map((d) => [
          "div",
          {},
          ["span", o, d + ": "],
          c(u[d], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(i, u = !0) {
    return typeof i == "number" ? ["span", t, i] : typeof i == "string" ? ["span", n, JSON.stringify(i)] : typeof i == "boolean" ? ["span", o, i] : w(i) ? ["object", { object: u ? C(i) : i }] : ["span", n, String(i)];
  }
  function a(i, u) {
    const d = i.type;
    if (O(d))
      return;
    const _ = {};
    for (const T in i.ctx)
      m(d, T, u) && (_[T] = i.ctx[T]);
    return _;
  }
  function m(i, u, d) {
    const _ = i[d];
    if (g(_) && _.includes(u) || w(_) && u in _ || i.extends && m(i.extends, u, d) || i.mixins && i.mixins.some((T) => m(T, u, d)))
      return !0;
  }
  function y(i) {
    return B(i) ? "ShallowRef" : i.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
var ft = {};
function dt() {
  ut();
}
ft.NODE_ENV !== "production" && dt();
const pt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, D = window.jQuery, I = (e) => e === void 0 ? e : D.fn.bootstrapTable.utils.extend(!0, Array.isArray(e) ? [] : {}, e), ht = {
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
    this.$table = D(this.$el), this.$table.on("all.bs.table", (e, t, n) => {
      let o = D.fn.bootstrapTable.events[t];
      o = o.replace(/([A-Z])/g, "-$1").toLowerCase(), this.$emit("on-all", ...n), this.$emit(o, ...n);
    }), this._initTable();
  },
  beforeUnmount() {
    this.$table.bootstrapTable("destroy");
  },
  methods: {
    _initTable() {
      const e = {
        ...I(this.options),
        columns: I(this.columns),
        data: I(this.data)
      };
      this._hasInit ? this.refreshOptions(e) : (this.$table.bootstrapTable(e), this._hasInit = !0);
    },
    ...(() => {
      const e = {};
      for (const t of D.fn.bootstrapTable.methods)
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
        this.load(I(this.data));
      },
      deep: !0
    }
  }
};
function mt(e, t, n, o, s, r) {
  return Xe(), tt("table");
}
const _t = /* @__PURE__ */ pt(ht, [["render", mt]]);
export {
  _t as default
};
