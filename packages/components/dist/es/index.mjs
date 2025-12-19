import { defineComponent as G, computed as D, watch as ce, h as vn, onMounted as It, createElementBlock as M, openBlock as T, normalizeStyle as za, normalizeClass as Pe, createVNode as Z, unref as pn, normalizeProps as hi, guardReactiveProps as gi, ref as H, createCommentVNode as qe, createElementVNode as _, renderSlot as re, provide as yi, inject as bi, createTextVNode as hn, toDisplayString as gn, Transition as yn, mergeProps as xi, toHandlers as wi, withCtx as Je, withDirectives as bt, vShow as xt, createBlock as Ua, Teleport as Ai, onUnmounted as Ha, Fragment as Gn, renderList as Si, render as Kn, isRef as Oi, onBeforeUnmount as ki, withModifiers as Pi } from "vue";
function ue(e) {
  return e.install = (t) => {
    const n = e.name;
    n && t.component(n, e);
  }, e;
}
const Ei = (e = []) => ({
  install: (n) => {
    e.forEach((a) => n.use(a));
  },
  version: "0.0.1"
});
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function Xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Ii(e) {
  if (Array.isArray(e)) return e;
}
function Ci(e) {
  if (Array.isArray(e)) return Xt(e);
}
function ji(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ti(e, t) {
  for (var n = 0; n < t.length; n++) {
    var a = t[n];
    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, Va(a.key), a);
  }
}
function $i(e, t, n) {
  return t && Ti(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function pt(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = bn(e)) || t) {
      n && (e = n);
      var a = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return a >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[a++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: r
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o, i = !0, s = !1;
  return {
    s: function() {
      n = n.call(e);
    },
    n: function() {
      var l = n.next();
      return i = l.done, l;
    },
    e: function(l) {
      s = !0, o = l;
    },
    f: function() {
      try {
        i || n.return == null || n.return();
      } finally {
        if (s) throw o;
      }
    }
  };
}
function k(e, t, n) {
  return (t = Va(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ni(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Fi(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var a, r, o, i, s = [], l = !0, f = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        l = !1;
      } else for (; !(l = (a = o.call(n)).done) && (s.push(a.value), s.length !== t); l = !0) ;
    } catch (u) {
      f = !0, r = u;
    } finally {
      try {
        if (!l && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (f) throw r;
      }
    }
    return s;
  }
}
function Di() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _i() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? qn(Object(n), !0).forEach(function(a) {
      k(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qn(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Ct(e, t) {
  return Ii(e) || Fi(e, t) || bn(e, t) || Di();
}
function ee(e) {
  return Ci(e) || Ni(e) || bn(e) || _i();
}
function Li(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Va(e) {
  var t = Li(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function wt(e) {
  "@babel/helpers - typeof";
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wt(e);
}
function bn(e, t) {
  if (e) {
    if (typeof e == "string") return Xt(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Xt(e, t) : void 0;
  }
}
var Jn = function() {
}, xn = {}, Ya = {}, Xa = null, Ga = {
  mark: Jn,
  measure: Jn
};
try {
  typeof window < "u" && (xn = window), typeof document < "u" && (Ya = document), typeof MutationObserver < "u" && (Xa = MutationObserver), typeof performance < "u" && (Ga = performance);
} catch {
}
var Mi = xn.navigator || {}, Qn = Mi.userAgent, Zn = Qn === void 0 ? "" : Qn, de = xn, I = Ya, ea = Xa, ct = Ga;
de.document;
var le = !!I.documentElement && !!I.head && typeof I.addEventListener == "function" && typeof I.createElement == "function", Ka = ~Zn.indexOf("MSIE") || ~Zn.indexOf("Trident/"), Rt, Ri = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Bi = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, qa = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fab: "brands",
    "fa-brands": "brands"
  },
  duotone: {
    fa: "solid",
    fad: "solid",
    "fa-solid": "solid",
    "fa-duotone": "solid",
    fadr: "regular",
    "fa-regular": "regular",
    fadl: "light",
    "fa-light": "light",
    fadt: "thin",
    "fa-thin": "thin"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid",
    fasdr: "regular",
    "fa-regular": "regular",
    fasdl: "light",
    "fa-light": "light",
    fasdt: "thin",
    "fa-thin": "thin"
  },
  slab: {
    "fa-regular": "regular",
    faslr: "regular"
  },
  "slab-press": {
    "fa-regular": "regular",
    faslpr: "regular"
  },
  thumbprint: {
    "fa-light": "light",
    fatl: "light"
  },
  whiteboard: {
    "fa-semibold": "semibold",
    fawsb: "semibold"
  },
  notdog: {
    "fa-solid": "solid",
    fans: "solid"
  },
  "notdog-duo": {
    "fa-solid": "solid",
    fands: "solid"
  },
  etch: {
    "fa-solid": "solid",
    faes: "solid"
  },
  jelly: {
    "fa-regular": "regular",
    fajr: "regular"
  },
  "jelly-fill": {
    "fa-regular": "regular",
    fajfr: "regular"
  },
  "jelly-duo": {
    "fa-regular": "regular",
    fajdr: "regular"
  },
  chisel: {
    "fa-regular": "regular",
    facr: "regular"
  },
  utility: {
    "fa-semibold": "semibold",
    fausb: "semibold"
  },
  "utility-duo": {
    "fa-semibold": "semibold",
    faudsb: "semibold"
  },
  "utility-fill": {
    "fa-semibold": "semibold",
    faufsb: "semibold"
  }
}, Wi = {
  GROUP: "duotone-group",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ja = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], $ = "classic", tt = "duotone", Qa = "sharp", Za = "sharp-duotone", er = "chisel", tr = "etch", nr = "jelly", ar = "jelly-duo", rr = "jelly-fill", ir = "notdog", or = "notdog-duo", sr = "slab", lr = "slab-press", fr = "thumbprint", ur = "utility", cr = "utility-duo", dr = "utility-fill", mr = "whiteboard", zi = "Classic", Ui = "Duotone", Hi = "Sharp", Vi = "Sharp Duotone", Yi = "Chisel", Xi = "Etch", Gi = "Jelly", Ki = "Jelly Duo", qi = "Jelly Fill", Ji = "Notdog", Qi = "Notdog Duo", Zi = "Slab", eo = "Slab Press", to = "Thumbprint", no = "Utility", ao = "Utility Duo", ro = "Utility Fill", io = "Whiteboard", vr = [$, tt, Qa, Za, er, tr, nr, ar, rr, ir, or, sr, lr, fr, ur, cr, dr, mr];
Rt = {}, k(k(k(k(k(k(k(k(k(k(Rt, $, zi), tt, Ui), Qa, Hi), Za, Vi), er, Yi), tr, Xi), nr, Gi), ar, Ki), rr, qi), ir, Ji), k(k(k(k(k(k(k(k(Rt, or, Qi), sr, Zi), lr, eo), fr, to), ur, no), cr, ao), dr, ro), mr, io);
var oo = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  duotone: {
    900: "fad",
    400: "fadr",
    300: "fadl",
    100: "fadt"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds",
    400: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  slab: {
    400: "faslr"
  },
  "slab-press": {
    400: "faslpr"
  },
  whiteboard: {
    600: "fawsb"
  },
  thumbprint: {
    300: "fatl"
  },
  notdog: {
    900: "fans"
  },
  "notdog-duo": {
    900: "fands"
  },
  etch: {
    900: "faes"
  },
  chisel: {
    400: "facr"
  },
  jelly: {
    400: "fajr"
  },
  "jelly-fill": {
    400: "fajfr"
  },
  "jelly-duo": {
    400: "fajdr"
  },
  utility: {
    600: "fausb"
  },
  "utility-duo": {
    600: "faudsb"
  },
  "utility-fill": {
    600: "faufsb"
  }
}, so = {
  "Font Awesome 7 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 7 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 7 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 7 Duotone": {
    900: "fad",
    400: "fadr",
    normal: "fadr",
    300: "fadl",
    100: "fadt"
  },
  "Font Awesome 7 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 7 Sharp Duotone": {
    900: "fasds",
    400: "fasdr",
    normal: "fasdr",
    300: "fasdl",
    100: "fasdt"
  },
  "Font Awesome 7 Jelly": {
    400: "fajr",
    normal: "fajr"
  },
  "Font Awesome 7 Jelly Fill": {
    400: "fajfr",
    normal: "fajfr"
  },
  "Font Awesome 7 Jelly Duo": {
    400: "fajdr",
    normal: "fajdr"
  },
  "Font Awesome 7 Slab": {
    400: "faslr",
    normal: "faslr"
  },
  "Font Awesome 7 Slab Press": {
    400: "faslpr",
    normal: "faslpr"
  },
  "Font Awesome 7 Thumbprint": {
    300: "fatl",
    normal: "fatl"
  },
  "Font Awesome 7 Notdog": {
    900: "fans",
    normal: "fans"
  },
  "Font Awesome 7 Notdog Duo": {
    900: "fands",
    normal: "fands"
  },
  "Font Awesome 7 Etch": {
    900: "faes",
    normal: "faes"
  },
  "Font Awesome 7 Chisel": {
    400: "facr",
    normal: "facr"
  },
  "Font Awesome 7 Whiteboard": {
    600: "fawsb",
    normal: "fawsb"
  },
  "Font Awesome 7 Utility": {
    600: "fausb",
    normal: "fausb"
  },
  "Font Awesome 7 Utility Duo": {
    600: "faudsb",
    normal: "faudsb"
  },
  "Font Awesome 7 Utility Fill": {
    600: "faufsb",
    normal: "faufsb"
  }
}, lo = /* @__PURE__ */ new Map([["classic", {
  defaultShortPrefixId: "fas",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin", "brands"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["duotone", {
  defaultShortPrefixId: "fad",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp", {
  defaultShortPrefixId: "fass",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["sharp-duotone", {
  defaultShortPrefixId: "fasds",
  defaultStyleId: "solid",
  styleIds: ["solid", "regular", "light", "thin"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["chisel", {
  defaultShortPrefixId: "facr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["etch", {
  defaultShortPrefixId: "faes",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["jelly", {
  defaultShortPrefixId: "fajr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-duo", {
  defaultShortPrefixId: "fajdr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["jelly-fill", {
  defaultShortPrefixId: "fajfr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["notdog", {
  defaultShortPrefixId: "fans",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["notdog-duo", {
  defaultShortPrefixId: "fands",
  defaultStyleId: "solid",
  styleIds: ["solid"],
  futureStyleIds: [],
  defaultFontWeight: 900
}], ["slab", {
  defaultShortPrefixId: "faslr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["slab-press", {
  defaultShortPrefixId: "faslpr",
  defaultStyleId: "regular",
  styleIds: ["regular"],
  futureStyleIds: [],
  defaultFontWeight: 400
}], ["thumbprint", {
  defaultShortPrefixId: "fatl",
  defaultStyleId: "light",
  styleIds: ["light"],
  futureStyleIds: [],
  defaultFontWeight: 300
}], ["utility", {
  defaultShortPrefixId: "fausb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-duo", {
  defaultShortPrefixId: "faudsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["utility-fill", {
  defaultShortPrefixId: "faufsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}], ["whiteboard", {
  defaultShortPrefixId: "fawsb",
  defaultStyleId: "semibold",
  styleIds: ["semibold"],
  futureStyleIds: [],
  defaultFontWeight: 600
}]]), fo = {
  chisel: {
    regular: "facr"
  },
  classic: {
    brands: "fab",
    light: "fal",
    regular: "far",
    solid: "fas",
    thin: "fat"
  },
  duotone: {
    light: "fadl",
    regular: "fadr",
    solid: "fad",
    thin: "fadt"
  },
  etch: {
    solid: "faes"
  },
  jelly: {
    regular: "fajr"
  },
  "jelly-duo": {
    regular: "fajdr"
  },
  "jelly-fill": {
    regular: "fajfr"
  },
  notdog: {
    solid: "fans"
  },
  "notdog-duo": {
    solid: "fands"
  },
  sharp: {
    light: "fasl",
    regular: "fasr",
    solid: "fass",
    thin: "fast"
  },
  "sharp-duotone": {
    light: "fasdl",
    regular: "fasdr",
    solid: "fasds",
    thin: "fasdt"
  },
  slab: {
    regular: "faslr"
  },
  "slab-press": {
    regular: "faslpr"
  },
  thumbprint: {
    light: "fatl"
  },
  utility: {
    semibold: "fausb"
  },
  "utility-duo": {
    semibold: "faudsb"
  },
  "utility-fill": {
    semibold: "faufsb"
  },
  whiteboard: {
    semibold: "fawsb"
  }
}, pr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], ta = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, uo = ["kit"], co = "kit", mo = "kit-duotone", vo = "Kit", po = "Kit Duotone";
k(k({}, co, vo), mo, po);
var ho = {
  kit: {
    "fa-kit": "fak"
  }
}, go = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, yo = {
  kit: {
    fak: "fa-kit"
  }
}, na = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Bt, dt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, bo = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], xo = "classic", wo = "duotone", Ao = "sharp", So = "sharp-duotone", Oo = "chisel", ko = "etch", Po = "jelly", Eo = "jelly-duo", Io = "jelly-fill", Co = "notdog", jo = "notdog-duo", To = "slab", $o = "slab-press", No = "thumbprint", Fo = "utility", Do = "utility-duo", _o = "utility-fill", Lo = "whiteboard", Mo = "Classic", Ro = "Duotone", Bo = "Sharp", Wo = "Sharp Duotone", zo = "Chisel", Uo = "Etch", Ho = "Jelly", Vo = "Jelly Duo", Yo = "Jelly Fill", Xo = "Notdog", Go = "Notdog Duo", Ko = "Slab", qo = "Slab Press", Jo = "Thumbprint", Qo = "Utility", Zo = "Utility Duo", es = "Utility Fill", ts = "Whiteboard";
Bt = {}, k(k(k(k(k(k(k(k(k(k(Bt, xo, Mo), wo, Ro), Ao, Bo), So, Wo), Oo, zo), ko, Uo), Po, Ho), Eo, Vo), Io, Yo), Co, Xo), k(k(k(k(k(k(k(k(Bt, jo, Go), To, Ko), $o, qo), No, Jo), Fo, Qo), Do, Zo), _o, es), Lo, ts);
var ns = "kit", as = "kit-duotone", rs = "Kit", is = "Kit Duotone";
k(k({}, ns, rs), as, is);
var os = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  duotone: {
    "fa-regular": "fadr",
    "fa-light": "fadl",
    "fa-thin": "fadt"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds",
    "fa-regular": "fasdr",
    "fa-light": "fasdl",
    "fa-thin": "fasdt"
  },
  slab: {
    "fa-regular": "faslr"
  },
  "slab-press": {
    "fa-regular": "faslpr"
  },
  whiteboard: {
    "fa-semibold": "fawsb"
  },
  thumbprint: {
    "fa-light": "fatl"
  },
  notdog: {
    "fa-solid": "fans"
  },
  "notdog-duo": {
    "fa-solid": "fands"
  },
  etch: {
    "fa-solid": "faes"
  },
  jelly: {
    "fa-regular": "fajr"
  },
  "jelly-fill": {
    "fa-regular": "fajfr"
  },
  "jelly-duo": {
    "fa-regular": "fajdr"
  },
  chisel: {
    "fa-regular": "facr"
  },
  utility: {
    "fa-semibold": "fausb"
  },
  "utility-duo": {
    "fa-semibold": "faudsb"
  },
  "utility-fill": {
    "fa-semibold": "faufsb"
  }
}, ss = {
  classic: ["fas", "far", "fal", "fat", "fad"],
  duotone: ["fadr", "fadl", "fadt"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  slab: ["faslr"],
  "slab-press": ["faslpr"],
  whiteboard: ["fawsb"],
  thumbprint: ["fatl"],
  notdog: ["fans"],
  "notdog-duo": ["fands"],
  etch: ["faes"],
  jelly: ["fajr"],
  "jelly-fill": ["fajfr"],
  "jelly-duo": ["fajdr"],
  chisel: ["facr"],
  utility: ["fausb"],
  "utility-duo": ["faudsb"],
  "utility-fill": ["faufsb"]
}, Gt = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  duotone: {
    fadr: "fa-regular",
    fadl: "fa-light",
    fadt: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid",
    fasdr: "fa-regular",
    fasdl: "fa-light",
    fasdt: "fa-thin"
  },
  slab: {
    faslr: "fa-regular"
  },
  "slab-press": {
    faslpr: "fa-regular"
  },
  whiteboard: {
    fawsb: "fa-semibold"
  },
  thumbprint: {
    fatl: "fa-light"
  },
  notdog: {
    fans: "fa-solid"
  },
  "notdog-duo": {
    fands: "fa-solid"
  },
  etch: {
    faes: "fa-solid"
  },
  jelly: {
    fajr: "fa-regular"
  },
  "jelly-fill": {
    fajfr: "fa-regular"
  },
  "jelly-duo": {
    fajdr: "fa-regular"
  },
  chisel: {
    facr: "fa-regular"
  },
  utility: {
    fausb: "fa-semibold"
  },
  "utility-duo": {
    faudsb: "fa-semibold"
  },
  "utility-fill": {
    faufsb: "fa-semibold"
  }
}, ls = ["fa-solid", "fa-regular", "fa-light", "fa-thin", "fa-duotone", "fa-brands", "fa-semibold"], hr = ["fa", "fas", "far", "fal", "fat", "fad", "fadr", "fadl", "fadt", "fab", "fass", "fasr", "fasl", "fast", "fasds", "fasdr", "fasdl", "fasdt", "faslr", "faslpr", "fawsb", "fatl", "fans", "fands", "faes", "fajr", "fajfr", "fajdr", "facr", "fausb", "faudsb", "faufsb"].concat(bo, ls), fs = ["solid", "regular", "light", "thin", "duotone", "brands", "semibold"], gr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], us = gr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), cs = ["aw", "fw", "pull-left", "pull-right"], ds = [].concat(ee(Object.keys(ss)), fs, cs, ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "inverse", "layers", "layers-bottom-left", "layers-bottom-right", "layers-counter", "layers-text", "layers-top-left", "layers-top-right", "li", "pull-end", "pull-start", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", "width-auto", "width-fixed", dt.GROUP, dt.SWAP_OPACITY, dt.PRIMARY, dt.SECONDARY]).concat(gr.map(function(e) {
  return "".concat(e, "x");
})).concat(us.map(function(e) {
  return "w-".concat(e);
})), ms = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, ie = "___FONT_AWESOME___", Kt = 16, yr = "fa", br = "svg-inline--fa", Se = "data-fa-i2svg", qt = "data-fa-pseudo-element", vs = "data-fa-pseudo-element-pending", wn = "data-prefix", An = "data-icon", aa = "fontawesome-i2svg", ps = "async", hs = ["HTML", "HEAD", "STYLE", "SCRIPT"], xr = ["::before", "::after", ":before", ":after"], wr = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}();
function nt(e) {
  return new Proxy(e, {
    get: function(n, a) {
      return a in n ? n[a] : n[$];
    }
  });
}
var Ar = m({}, qa);
Ar[$] = m(m(m(m({}, {
  "fa-duotone": "duotone"
}), qa[$]), ta.kit), ta["kit-duotone"]);
var gs = nt(Ar), Jt = m({}, fo);
Jt[$] = m(m(m(m({}, {
  duotone: "fad"
}), Jt[$]), na.kit), na["kit-duotone"]);
var ra = nt(Jt), Qt = m({}, Gt);
Qt[$] = m(m({}, Qt[$]), yo.kit);
var Sn = nt(Qt), Zt = m({}, os);
Zt[$] = m(m({}, Zt[$]), ho.kit);
nt(Zt);
var ys = Ri, Sr = "fa-layers-text", bs = Bi, xs = m({}, oo);
nt(xs);
var ws = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Wt = Wi, As = [].concat(ee(uo), ee(ds)), He = de.FontAwesomeConfig || {};
function Ss(e) {
  var t = I.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Os(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (I && typeof I.querySelector == "function") {
  var ks = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ks.forEach(function(e) {
    var t = Ct(e, 2), n = t[0], a = t[1], r = Os(Ss(n));
    r != null && (He[a] = r);
  });
}
var Or = {
  styleDefault: "solid",
  familyDefault: $,
  cssPrefix: yr,
  replacementClass: br,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  searchPseudoElements: !1,
  searchPseudoElementsWarnings: !0,
  searchPseudoElementsFullScan: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
He.familyPrefix && (He.cssPrefix = He.familyPrefix);
var Te = m(m({}, Or), He);
Te.autoReplaceSvg || (Te.observeMutations = !1);
var w = {};
Object.keys(Or).forEach(function(e) {
  Object.defineProperty(w, e, {
    enumerable: !0,
    set: function(n) {
      Te[e] = n, Ve.forEach(function(a) {
        return a(w);
      });
    },
    get: function() {
      return Te[e];
    }
  });
});
Object.defineProperty(w, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    Te.cssPrefix = t, Ve.forEach(function(n) {
      return n(w);
    });
  },
  get: function() {
    return Te.cssPrefix;
  }
});
de.FontAwesomeConfig = w;
var Ve = [];
function Ps(e) {
  return Ve.push(e), function() {
    Ve.splice(Ve.indexOf(e), 1);
  };
}
var Ie = Kt, te = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Es(e) {
  if (!(!e || !le)) {
    var t = I.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = I.head.childNodes, a = null, r = n.length - 1; r > -1; r--) {
      var o = n[r], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (a = o);
    }
    return I.head.insertBefore(t, a), e;
  }
}
var Is = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ia() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Is[Math.random() * 62 | 0];
  return t;
}
function Le(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function On(e) {
  return e.classList ? Le(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function kr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Cs(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(kr(e[n]), '" ');
  }, "").trim();
}
function jt(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function kn(e) {
  return e.size !== te.size || e.x !== te.x || e.y !== te.y || e.rotate !== te.rotate || e.flipX || e.flipY;
}
function js(e) {
  var t = e.transform, n = e.containerWidth, a = e.iconWidth, r = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(i, " ").concat(s)
  }, f = {
    transform: "translate(".concat(a / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: f
  };
}
function Ts(e) {
  var t = e.transform, n = e.width, a = n === void 0 ? Kt : n, r = e.height, o = r === void 0 ? Kt : r, i = "";
  return Ka ? i += "translate(".concat(t.x / Ie - a / 2, "em, ").concat(t.y / Ie - o / 2, "em) ") : i += "translate(calc(-50% + ".concat(t.x / Ie, "em), calc(-50% + ").concat(t.y / Ie, "em)) "), i += "scale(".concat(t.size / Ie * (t.flipX ? -1 : 1), ", ").concat(t.size / Ie * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var $s = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;
function Pr() {
  var e = yr, t = br, n = w.cssPrefix, a = w.replacementClass, r = $s;
  if (n !== e || a !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(o, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(a));
  }
  return r;
}
var oa = !1;
function zt() {
  w.autoAddCss && !oa && (Es(Pr()), oa = !0);
}
var Ns = {
  mixout: function() {
    return {
      dom: {
        css: Pr,
        insertCss: zt
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        zt();
      },
      beforeI2svg: function() {
        zt();
      }
    };
  }
}, oe = de || {};
oe[ie] || (oe[ie] = {});
oe[ie].styles || (oe[ie].styles = {});
oe[ie].hooks || (oe[ie].hooks = {});
oe[ie].shims || (oe[ie].shims = []);
var Q = oe[ie], Er = [], Ir = function() {
  I.removeEventListener("DOMContentLoaded", Ir), At = 1, Er.map(function(t) {
    return t();
  });
}, At = !1;
le && (At = (I.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(I.readyState), At || I.addEventListener("DOMContentLoaded", Ir));
function Fs(e) {
  le && (At ? setTimeout(e, 0) : Er.push(e));
}
function at(e) {
  var t = e.tag, n = e.attributes, a = n === void 0 ? {} : n, r = e.children, o = r === void 0 ? [] : r;
  return typeof e == "string" ? kr(e) : "<".concat(t, " ").concat(Cs(a), ">").concat(o.map(at).join(""), "</").concat(t, ">");
}
function sa(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ut = function(t, n, a, r) {
  var o = Object.keys(t), i = o.length, s = n, l, f, u;
  for (a === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = a); l < i; l++)
    f = o[l], u = s(u, t[f], f, t);
  return u;
};
function Cr(e) {
  return ee(e).length !== 1 ? null : e.codePointAt(0).toString(16);
}
function la(e) {
  return Object.keys(e).reduce(function(t, n) {
    var a = e[n], r = !!a.icon;
    return r ? t[a.iconName] = a.icon : t[n] = a, t;
  }, {});
}
function en(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.skipHooks, r = a === void 0 ? !1 : a, o = la(t);
  typeof Q.hooks.addPack == "function" && !r ? Q.hooks.addPack(e, la(t)) : Q.styles[e] = m(m({}, Q.styles[e] || {}), o), e === "fas" && en("fa", t);
}
var Qe = Q.styles, Ds = Q.shims, jr = Object.keys(Sn), _s = jr.reduce(function(e, t) {
  return e[t] = Object.keys(Sn[t]), e;
}, {}), Pn = null, Tr = {}, $r = {}, Nr = {}, Fr = {}, Dr = {};
function Ls(e) {
  return ~As.indexOf(e);
}
function Ms(e, t) {
  var n = t.split("-"), a = n[0], r = n.slice(1).join("-");
  return a === e && r !== "" && !Ls(r) ? r : null;
}
var _r = function() {
  var t = function(o) {
    return Ut(Qe, function(i, s, l) {
      return i[l] = Ut(s, o, {}), i;
    }, {});
  };
  Tr = t(function(r, o, i) {
    if (o[3] && (r[o[3]] = i), o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        r[l.toString(16)] = i;
      });
    }
    return r;
  }), $r = t(function(r, o, i) {
    if (r[i] = i, o[2]) {
      var s = o[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        r[l] = i;
      });
    }
    return r;
  }), Dr = t(function(r, o, i) {
    var s = o[2];
    return r[i] = i, s.forEach(function(l) {
      r[l] = i;
    }), r;
  });
  var n = "far" in Qe || w.autoFetchSvg, a = Ut(Ds, function(r, o) {
    var i = o[0], s = o[1], l = o[2];
    return s === "far" && !n && (s = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: s,
      iconName: l
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: l
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Nr = a.names, Fr = a.unicodes, Pn = Tt(w.styleDefault, {
    family: w.familyDefault
  });
};
Ps(function(e) {
  Pn = Tt(e.styleDefault, {
    family: w.familyDefault
  });
});
_r();
function En(e, t) {
  return (Tr[e] || {})[t];
}
function Rs(e, t) {
  return ($r[e] || {})[t];
}
function we(e, t) {
  return (Dr[e] || {})[t];
}
function Lr(e) {
  return Nr[e] || {
    prefix: null,
    iconName: null
  };
}
function Bs(e) {
  var t = Fr[e], n = En("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function me() {
  return Pn;
}
var Mr = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ws(e) {
  var t = $, n = jr.reduce(function(a, r) {
    return a[r] = "".concat(w.cssPrefix, "-").concat(r), a;
  }, {});
  return vr.forEach(function(a) {
    (e.includes(n[a]) || e.some(function(r) {
      return _s[a].includes(r);
    })) && (t = a);
  }), t;
}
function Tt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, a = n === void 0 ? $ : n, r = gs[a][e];
  if (a === tt && !e)
    return "fad";
  var o = ra[a][e] || ra[a][r], i = e in Q.styles ? e : null, s = o || i || null;
  return s;
}
function zs(e) {
  var t = [], n = null;
  return e.forEach(function(a) {
    var r = Ms(w.cssPrefix, a);
    r ? n = r : a && t.push(a);
  }), {
    iconName: n,
    rest: t
  };
}
function fa(e) {
  return e.sort().filter(function(t, n, a) {
    return a.indexOf(t) === n;
  });
}
var ua = hr.concat(pr);
function $t(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.skipLookups, a = n === void 0 ? !1 : n, r = null, o = fa(e.filter(function(v) {
    return ua.includes(v);
  })), i = fa(e.filter(function(v) {
    return !ua.includes(v);
  })), s = o.filter(function(v) {
    return r = v, !Ja.includes(v);
  }), l = Ct(s, 1), f = l[0], u = f === void 0 ? null : f, d = Ws(o), h = m(m({}, zs(i)), {}, {
    prefix: Tt(u, {
      family: d
    })
  });
  return m(m(m({}, h), Ys({
    values: e,
    family: d,
    styles: Qe,
    config: w,
    canonical: h,
    givenPrefix: r
  })), Us(a, r, h));
}
function Us(e, t, n) {
  var a = n.prefix, r = n.iconName;
  if (e || !a || !r)
    return {
      prefix: a,
      iconName: r
    };
  var o = t === "fa" ? Lr(r) : {}, i = we(a, r);
  return r = o.iconName || i || r, a = o.prefix || a, a === "far" && !Qe.far && Qe.fas && !w.autoFetchSvg && (a = "fas"), {
    prefix: a,
    iconName: r
  };
}
var Hs = vr.filter(function(e) {
  return e !== $ || e !== tt;
}), Vs = Object.keys(Gt).filter(function(e) {
  return e !== $;
}).map(function(e) {
  return Object.keys(Gt[e]);
}).flat();
function Ys(e) {
  var t = e.values, n = e.family, a = e.canonical, r = e.givenPrefix, o = r === void 0 ? "" : r, i = e.styles, s = i === void 0 ? {} : i, l = e.config, f = l === void 0 ? {} : l, u = n === tt, d = t.includes("fa-duotone") || t.includes("fad"), h = f.familyDefault === "duotone", v = a.prefix === "fad" || a.prefix === "fa-duotone";
  if (!u && (d || h || v) && (a.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (a.prefix = "fab"), !a.prefix && Hs.includes(n)) {
    var A = Object.keys(s).find(function(g) {
      return Vs.includes(g);
    });
    if (A || f.autoFetchSvg) {
      var y = lo.get(n).defaultShortPrefixId;
      a.prefix = y, a.iconName = we(a.prefix, a.iconName) || a.iconName;
    }
  }
  return (a.prefix === "fa" || o === "fa") && (a.prefix = me() || "fas"), a;
}
var Xs = /* @__PURE__ */ function() {
  function e() {
    ji(this, e), this.definitions = {};
  }
  return $i(e, [{
    key: "add",
    value: function() {
      for (var n = this, a = arguments.length, r = new Array(a), o = 0; o < a; o++)
        r[o] = arguments[o];
      var i = r.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        n.definitions[s] = m(m({}, n.definitions[s] || {}), i[s]), en(s, i[s]);
        var l = Sn[$][s];
        l && en(l, i[s]), _r();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, a) {
      var r = a.prefix && a.iconName && a.icon ? {
        0: a
      } : a;
      return Object.keys(r).map(function(o) {
        var i = r[o], s = i.prefix, l = i.iconName, f = i.icon, u = f[2];
        n[s] || (n[s] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (n[s][d] = f);
        }), n[s][l] = f;
      }), n;
    }
  }]);
}(), ca = [], Ce = {}, je = {}, Gs = Object.keys(je);
function Ks(e, t) {
  var n = t.mixoutsTo;
  return ca = e, Ce = {}, Object.keys(je).forEach(function(a) {
    Gs.indexOf(a) === -1 && delete je[a];
  }), ca.forEach(function(a) {
    var r = a.mixout ? a.mixout() : {};
    if (Object.keys(r).forEach(function(i) {
      typeof r[i] == "function" && (n[i] = r[i]), wt(r[i]) === "object" && Object.keys(r[i]).forEach(function(s) {
        n[i] || (n[i] = {}), n[i][s] = r[i][s];
      });
    }), a.hooks) {
      var o = a.hooks();
      Object.keys(o).forEach(function(i) {
        Ce[i] || (Ce[i] = []), Ce[i].push(o[i]);
      });
    }
    a.provides && a.provides(je);
  }), n;
}
function tn(e, t) {
  for (var n = arguments.length, a = new Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++)
    a[r - 2] = arguments[r];
  var o = Ce[e] || [];
  return o.forEach(function(i) {
    t = i.apply(null, [t].concat(a));
  }), t;
}
function Oe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  var r = Ce[e] || [];
  r.forEach(function(o) {
    o.apply(null, n);
  });
}
function ve() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return je[e] ? je[e].apply(null, t) : void 0;
}
function nn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || me();
  if (t)
    return t = we(n, t) || t, sa(Rr.definitions, n, t) || sa(Q.styles, n, t);
}
var Rr = new Xs(), qs = function() {
  w.autoReplaceSvg = !1, w.observeMutations = !1, Oe("noAuto");
}, Js = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return le ? (Oe("beforeI2svg", t), ve("pseudoElements2svg", t), ve("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    w.autoReplaceSvg === !1 && (w.autoReplaceSvg = !0), w.observeMutations = !0, Fs(function() {
      Zs({
        autoReplaceSvgRoot: n
      }), Oe("watch", t);
    });
  }
}, Qs = {
  icon: function(t) {
    if (t === null)
      return null;
    if (wt(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: we(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], a = Tt(t[0]);
      return {
        prefix: a,
        iconName: we(a, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(w.cssPrefix, "-")) > -1 || t.match(ys))) {
      var r = $t(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: r.prefix || me(),
        iconName: we(r.prefix, r.iconName) || r.iconName
      };
    }
    if (typeof t == "string") {
      var o = me();
      return {
        prefix: o,
        iconName: we(o, t) || t
      };
    }
  }
}, U = {
  noAuto: qs,
  config: w,
  dom: Js,
  parse: Qs,
  library: Rr,
  findIconDefinition: nn,
  toHtml: at
}, Zs = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, a = n === void 0 ? I : n;
  (Object.keys(Q.styles).length > 0 || w.autoFetchSvg) && le && w.autoReplaceSvg && U.dom.i2svg({
    node: a
  });
};
function Nt(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(a) {
        return at(a);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (le) {
        var a = I.createElement("div");
        return a.innerHTML = e.html, a.children;
      }
    }
  }), e;
}
function el(e) {
  var t = e.children, n = e.main, a = e.mask, r = e.attributes, o = e.styles, i = e.transform;
  if (kn(i) && n.found && !a.found) {
    var s = n.width, l = n.height, f = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = jt(m(m({}, o), {}, {
      "transform-origin": "".concat(f.x + i.x / 16, "em ").concat(f.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: r,
    children: t
  }];
}
function tl(e) {
  var t = e.prefix, n = e.iconName, a = e.children, r = e.attributes, o = e.symbol, i = o === !0 ? "".concat(t, "-").concat(w.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: m(m({}, r), {}, {
        id: i
      }),
      children: a
    }]
  }];
}
function nl(e) {
  var t = ["aria-label", "aria-labelledby", "title", "role"];
  return t.some(function(n) {
    return n in e;
  });
}
function In(e) {
  var t = e.icons, n = t.main, a = t.mask, r = e.prefix, o = e.iconName, i = e.transform, s = e.symbol, l = e.maskId, f = e.extra, u = e.watchable, d = u === void 0 ? !1 : u, h = a.found ? a : n, v = h.width, A = h.height, y = [w.replacementClass, o ? "".concat(w.cssPrefix, "-").concat(o) : ""].filter(function(S) {
    return f.classes.indexOf(S) === -1;
  }).filter(function(S) {
    return S !== "" || !!S;
  }).concat(f.classes).join(" "), g = {
    children: [],
    attributes: m(m({}, f.attributes), {}, {
      "data-prefix": r,
      "data-icon": o,
      class: y,
      role: f.attributes.role || "img",
      viewBox: "0 0 ".concat(v, " ").concat(A)
    })
  };
  !nl(f.attributes) && !f.attributes["aria-hidden"] && (g.attributes["aria-hidden"] = "true"), d && (g.attributes[Se] = "");
  var c = m(m({}, g), {}, {
    prefix: r,
    iconName: o,
    main: n,
    mask: a,
    maskId: l,
    transform: i,
    symbol: s,
    styles: m({}, f.styles)
  }), p = a.found && n.found ? ve("generateAbstractMask", c) || {
    children: [],
    attributes: {}
  } : ve("generateAbstractIcon", c) || {
    children: [],
    attributes: {}
  }, O = p.children, b = p.attributes;
  return c.children = O, c.attributes = b, s ? tl(c) : el(c);
}
function da(e) {
  var t = e.content, n = e.width, a = e.height, r = e.transform, o = e.extra, i = e.watchable, s = i === void 0 ? !1 : i, l = m(m({}, o.attributes), {}, {
    class: o.classes.join(" ")
  });
  s && (l[Se] = "");
  var f = m({}, o.styles);
  kn(r) && (f.transform = Ts({
    transform: r,
    width: n,
    height: a
  }), f["-webkit-transform"] = f.transform);
  var u = jt(f);
  u.length > 0 && (l.style = u);
  var d = [];
  return d.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), d;
}
function al(e) {
  var t = e.content, n = e.extra, a = m(m({}, n.attributes), {}, {
    class: n.classes.join(" ")
  }), r = jt(n.styles);
  r.length > 0 && (a.style = r);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), o;
}
var Ht = Q.styles;
function an(e) {
  var t = e[0], n = e[1], a = e.slice(4), r = Ct(a, 1), o = r[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(w.cssPrefix, "-").concat(Wt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(Wt.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(Wt.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
var rl = {
  found: !1,
  width: 512,
  height: 512
};
function il(e, t) {
  !wr && !w.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function rn(e, t) {
  var n = t;
  return t === "fa" && w.styleDefault !== null && (t = me()), new Promise(function(a, r) {
    if (n === "fa") {
      var o = Lr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Ht[t] && Ht[t][e]) {
      var i = Ht[t][e];
      return a(an(i));
    }
    il(e, t), a(m(m({}, rl), {}, {
      icon: w.showMissingIcons && e ? ve("missingIconAbstract") || {} : {}
    }));
  });
}
var ma = function() {
}, on = w.measurePerformance && ct && ct.mark && ct.measure ? ct : {
  mark: ma,
  measure: ma
}, Ue = 'FA "7.1.0"', ol = function(t) {
  return on.mark("".concat(Ue, " ").concat(t, " begins")), function() {
    return Br(t);
  };
}, Br = function(t) {
  on.mark("".concat(Ue, " ").concat(t, " ends")), on.measure("".concat(Ue, " ").concat(t), "".concat(Ue, " ").concat(t, " begins"), "".concat(Ue, " ").concat(t, " ends"));
}, Cn = {
  begin: ol,
  end: Br
}, ht = function() {
};
function va(e) {
  var t = e.getAttribute ? e.getAttribute(Se) : null;
  return typeof t == "string";
}
function sl(e) {
  var t = e.getAttribute ? e.getAttribute(wn) : null, n = e.getAttribute ? e.getAttribute(An) : null;
  return t && n;
}
function ll(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(w.replacementClass);
}
function fl() {
  if (w.autoReplaceSvg === !0)
    return gt.replace;
  var e = gt[w.autoReplaceSvg];
  return e || gt.replace;
}
function ul(e) {
  return I.createElementNS("http://www.w3.org/2000/svg", e);
}
function cl(e) {
  return I.createElement(e);
}
function Wr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, a = n === void 0 ? e.tag === "svg" ? ul : cl : n;
  if (typeof e == "string")
    return I.createTextNode(e);
  var r = a(e.tag);
  Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  });
  var o = e.children || [];
  return o.forEach(function(i) {
    r.appendChild(Wr(i, {
      ceFn: a
    }));
  }), r;
}
function dl(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var gt = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(r) {
        n.parentNode.insertBefore(Wr(r), n);
      }), n.getAttribute(Se) === null && w.keepOriginalSource) {
        var a = I.createComment(dl(n));
        n.parentNode.replaceChild(a, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], a = t[1];
    if (~On(n).indexOf(w.replacementClass))
      return gt.replace(t);
    var r = new RegExp("".concat(w.cssPrefix, "-.*"));
    if (delete a[0].attributes.id, a[0].attributes.class) {
      var o = a[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === w.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      a[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", o.toNode.join(" "));
    }
    var i = a.map(function(s) {
      return at(s);
    }).join(`
`);
    n.setAttribute(Se, ""), n.innerHTML = i;
  }
};
function pa(e) {
  e();
}
function zr(e, t) {
  var n = typeof t == "function" ? t : ht;
  if (e.length === 0)
    n();
  else {
    var a = pa;
    w.mutateApproach === ps && (a = de.requestAnimationFrame || pa), a(function() {
      var r = fl(), o = Cn.begin("mutate");
      e.map(r), o(), n();
    });
  }
}
var jn = !1;
function Ur() {
  jn = !0;
}
function sn() {
  jn = !1;
}
var St = null;
function ha(e) {
  if (ea && w.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? ht : t, a = e.nodeCallback, r = a === void 0 ? ht : a, o = e.pseudoElementsCallback, i = o === void 0 ? ht : o, s = e.observeMutationsRoot, l = s === void 0 ? I : s;
    St = new ea(function(f) {
      if (!jn) {
        var u = me();
        Le(f).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !va(d.addedNodes[0]) && (w.searchPseudoElements && i(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && w.searchPseudoElements && i([d.target], !0), d.type === "attributes" && va(d.target) && ~ws.indexOf(d.attributeName))
            if (d.attributeName === "class" && sl(d.target)) {
              var h = $t(On(d.target)), v = h.prefix, A = h.iconName;
              d.target.setAttribute(wn, v || u), A && d.target.setAttribute(An, A);
            } else ll(d.target) && r(d.target);
        });
      }
    }), le && St.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function ml() {
  St && St.disconnect();
}
function vl(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(a, r) {
    var o = r.split(":"), i = o[0], s = o.slice(1);
    return i && s.length > 0 && (a[i] = s.join(":").trim()), a;
  }, {})), n;
}
function pl(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), a = e.innerText !== void 0 ? e.innerText.trim() : "", r = $t(On(e));
  return r.prefix || (r.prefix = me()), t && n && (r.prefix = t, r.iconName = n), r.iconName && r.prefix || (r.prefix && a.length > 0 && (r.iconName = Rs(r.prefix, e.innerText) || En(r.prefix, Cr(e.innerText))), !r.iconName && w.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function hl(e) {
  var t = Le(e.attributes).reduce(function(n, a) {
    return n.name !== "class" && n.name !== "style" && (n[a.name] = a.value), n;
  }, {});
  return t;
}
function gl() {
  return {
    iconName: null,
    prefix: null,
    transform: te,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function ga(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = pl(e), a = n.iconName, r = n.prefix, o = n.rest, i = hl(e), s = tn("parseNodeAttributes", {}, e), l = t.styleParser ? vl(e) : [];
  return m({
    iconName: a,
    prefix: r,
    transform: te,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: l,
      attributes: i
    }
  }, s);
}
var yl = Q.styles;
function Hr(e) {
  var t = w.autoReplaceSvg === "nest" ? ga(e, {
    styleParser: !1
  }) : ga(e);
  return ~t.extra.classes.indexOf(Sr) ? ve("generateLayersText", e, t) : ve("generateSvgReplacementMutation", e, t);
}
function bl() {
  return [].concat(ee(pr), ee(hr));
}
function ya(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!le) return Promise.resolve();
  var n = I.documentElement.classList, a = function(d) {
    return n.add("".concat(aa, "-").concat(d));
  }, r = function(d) {
    return n.remove("".concat(aa, "-").concat(d));
  }, o = w.autoFetchSvg ? bl() : Ja.concat(Object.keys(yl));
  o.includes("fa") || o.push("fa");
  var i = [".".concat(Sr, ":not([").concat(Se, "])")].concat(o.map(function(u) {
    return ".".concat(u, ":not([").concat(Se, "])");
  })).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = Le(e.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    a("pending"), r("complete");
  else
    return Promise.resolve();
  var l = Cn.begin("onTree"), f = s.reduce(function(u, d) {
    try {
      var h = Hr(d);
      h && u.push(h);
    } catch (v) {
      wr || v.name === "MissingIcon" && console.error(v);
    }
    return u;
  }, []);
  return new Promise(function(u, d) {
    Promise.all(f).then(function(h) {
      zr(h, function() {
        a("active"), a("complete"), r("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(h) {
      l(), d(h);
    });
  });
}
function xl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Hr(e).then(function(n) {
    n && zr([n], t);
  });
}
function wl(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = (t || {}).icon ? t : nn(t || {}), r = n.mask;
    return r && (r = (r || {}).icon ? r : nn(r || {})), e(a, m(m({}, n), {}, {
      mask: r
    }));
  };
}
var Al = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = n.transform, r = a === void 0 ? te : a, o = n.symbol, i = o === void 0 ? !1 : o, s = n.mask, l = s === void 0 ? null : s, f = n.maskId, u = f === void 0 ? null : f, d = n.classes, h = d === void 0 ? [] : d, v = n.attributes, A = v === void 0 ? {} : v, y = n.styles, g = y === void 0 ? {} : y;
  if (t) {
    var c = t.prefix, p = t.iconName, O = t.icon;
    return Nt(m({
      type: "icon"
    }, t), function() {
      return Oe("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), In({
        icons: {
          main: an(O),
          mask: l ? an(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: c,
        iconName: p,
        transform: m(m({}, te), r),
        symbol: i,
        maskId: u,
        extra: {
          attributes: A,
          styles: g,
          classes: h
        }
      });
    });
  }
}, Sl = {
  mixout: function() {
    return {
      icon: wl(Al)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = ya, n.nodeCallback = xl, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var a = n.node, r = a === void 0 ? I : a, o = n.callback, i = o === void 0 ? function() {
      } : o;
      return ya(r, i);
    }, t.generateSvgReplacementMutation = function(n, a) {
      var r = a.iconName, o = a.prefix, i = a.transform, s = a.symbol, l = a.mask, f = a.maskId, u = a.extra;
      return new Promise(function(d, h) {
        Promise.all([rn(r, o), l.iconName ? rn(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var A = Ct(v, 2), y = A[0], g = A[1];
          d([n, In({
            icons: {
              main: y,
              mask: g
            },
            prefix: o,
            iconName: r,
            transform: i,
            symbol: s,
            maskId: f,
            extra: u,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, t.generateAbstractIcon = function(n) {
      var a = n.children, r = n.attributes, o = n.main, i = n.transform, s = n.styles, l = jt(s);
      l.length > 0 && (r.style = l);
      var f;
      return kn(i) && (f = ve("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), a.push(f || o.icon), {
        children: a,
        attributes: r
      };
    };
  }
}, Ol = {
  mixout: function() {
    return {
      layer: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.classes, o = r === void 0 ? [] : r;
        return Nt({
          type: "layer"
        }, function() {
          Oe("beforeDOMElementCreation", {
            assembler: n,
            params: a
          });
          var i = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              i = i.concat(l.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(w.cssPrefix, "-layers")].concat(ee(o)).join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, kl = {
  mixout: function() {
    return {
      counter: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        a.title;
        var r = a.classes, o = r === void 0 ? [] : r, i = a.attributes, s = i === void 0 ? {} : i, l = a.styles, f = l === void 0 ? {} : l;
        return Nt({
          type: "counter",
          content: n
        }, function() {
          return Oe("beforeDOMElementCreation", {
            content: n,
            params: a
          }), al({
            content: n.toString(),
            extra: {
              attributes: s,
              styles: f,
              classes: ["".concat(w.cssPrefix, "-layers-counter")].concat(ee(o))
            }
          });
        });
      }
    };
  }
}, Pl = {
  mixout: function() {
    return {
      text: function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = a.transform, o = r === void 0 ? te : r, i = a.classes, s = i === void 0 ? [] : i, l = a.attributes, f = l === void 0 ? {} : l, u = a.styles, d = u === void 0 ? {} : u;
        return Nt({
          type: "text",
          content: n
        }, function() {
          return Oe("beforeDOMElementCreation", {
            content: n,
            params: a
          }), da({
            content: n,
            transform: m(m({}, te), o),
            extra: {
              attributes: f,
              styles: d,
              classes: ["".concat(w.cssPrefix, "-layers-text")].concat(ee(s))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, a) {
      var r = a.transform, o = a.extra, i = null, s = null;
      if (Ka) {
        var l = parseInt(getComputedStyle(n).fontSize, 10), f = n.getBoundingClientRect();
        i = f.width / l, s = f.height / l;
      }
      return Promise.resolve([n, da({
        content: n.innerHTML,
        width: i,
        height: s,
        transform: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, Vr = new RegExp('"', "ug"), ba = [1105920, 1112319], xa = m(m(m(m({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), so), ms), go), ln = Object.keys(xa).reduce(function(e, t) {
  return e[t.toLowerCase()] = xa[t], e;
}, {}), El = Object.keys(ln).reduce(function(e, t) {
  var n = ln[t];
  return e[t] = n[900] || ee(Object.entries(n))[0][1], e;
}, {});
function Il(e) {
  var t = e.replace(Vr, "");
  return Cr(ee(t)[0] || "");
}
function Cl(e) {
  var t = e.getPropertyValue("font-feature-settings").includes("ss01"), n = e.getPropertyValue("content"), a = n.replace(Vr, ""), r = a.codePointAt(0), o = r >= ba[0] && r <= ba[1], i = a.length === 2 ? a[0] === a[1] : !1;
  return o || i || t;
}
function jl(e, t) {
  var n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), a = parseInt(t), r = isNaN(a) ? "normal" : a;
  return (ln[n] || {})[r] || El[n];
}
function wa(e, t) {
  var n = "".concat(vs).concat(t.replace(":", "-"));
  return new Promise(function(a, r) {
    if (e.getAttribute(n) !== null)
      return a();
    var o = Le(e.children), i = o.filter(function(x) {
      return x.getAttribute(qt) === t;
    })[0], s = de.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), f = l.match(bs), u = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (i && !f)
      return e.removeChild(i), a();
    if (f && d !== "none" && d !== "") {
      var h = s.getPropertyValue("content"), v = jl(l, u), A = Il(h), y = f[0].startsWith("FontAwesome"), g = Cl(s), c = En(v, A), p = c;
      if (y) {
        var O = Bs(A);
        O.iconName && O.prefix && (c = O.iconName, v = O.prefix);
      }
      if (c && !g && (!i || i.getAttribute(wn) !== v || i.getAttribute(An) !== p)) {
        e.setAttribute(n, p), i && e.removeChild(i);
        var b = gl(), S = b.extra;
        S.attributes[qt] = t, rn(c, v).then(function(x) {
          var P = In(m(m({}, b), {}, {
            icons: {
              main: x,
              mask: Mr()
            },
            prefix: v,
            iconName: p,
            extra: S,
            watchable: !0
          })), E = I.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(E, e.firstChild) : e.appendChild(E), E.outerHTML = P.map(function(C) {
            return at(C);
          }).join(`
`), e.removeAttribute(n), a();
        }).catch(r);
      } else
        a();
    } else
      a();
  });
}
function Tl(e) {
  return Promise.all([wa(e, "::before"), wa(e, "::after")]);
}
function $l(e) {
  return e.parentNode !== document.head && !~hs.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(qt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var Nl = function(t) {
  return !!t && xr.some(function(n) {
    return t.includes(n);
  });
}, Fl = function(t) {
  if (!t) return [];
  var n = /* @__PURE__ */ new Set(), a = t.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  a = a.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(f) {
      return f.trim();
    });
  });
  var r = pt(a), o;
  try {
    for (r.s(); !(o = r.n()).done; ) {
      var i = o.value;
      if (Nl(i)) {
        var s = xr.reduce(function(l, f) {
          return l.replace(f, "");
        }, i);
        s !== "" && s !== "*" && n.add(s);
      }
    }
  } catch (l) {
    r.e(l);
  } finally {
    r.f();
  }
  return n;
};
function Aa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (le) {
    var n;
    if (t)
      n = e;
    else if (w.searchPseudoElementsFullScan)
      n = e.querySelectorAll("*");
    else {
      var a = /* @__PURE__ */ new Set(), r = pt(document.styleSheets), o;
      try {
        for (r.s(); !(o = r.n()).done; ) {
          var i = o.value;
          try {
            var s = pt(i.cssRules), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var f = l.value, u = Fl(f.selectorText), d = pt(u), h;
                try {
                  for (d.s(); !(h = d.n()).done; ) {
                    var v = h.value;
                    a.add(v);
                  }
                } catch (y) {
                  d.e(y);
                } finally {
                  d.f();
                }
              }
            } catch (y) {
              s.e(y);
            } finally {
              s.f();
            }
          } catch (y) {
            w.searchPseudoElementsWarnings && console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href, " (").concat(y.message, `)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`));
          }
        }
      } catch (y) {
        r.e(y);
      } finally {
        r.f();
      }
      if (!a.size) return;
      var A = Array.from(a).join(", ");
      try {
        n = e.querySelectorAll(A);
      } catch {
      }
    }
    return new Promise(function(y, g) {
      var c = Le(n).filter($l).map(Tl), p = Cn.begin("searchPseudoElements");
      Ur(), Promise.all(c).then(function() {
        p(), sn(), y();
      }).catch(function() {
        p(), sn(), g();
      });
    });
  }
}
var Dl = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Aa, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var a = n.node, r = a === void 0 ? I : a;
      w.searchPseudoElements && Aa(r);
    };
  }
}, Sa = !1, _l = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ur(), Sa = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        ha(tn("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        ml();
      },
      watch: function(n) {
        var a = n.observeMutationsRoot;
        Sa ? sn() : ha(tn("mutationObserverCallbacks", {
          observeMutationsRoot: a
        }));
      }
    };
  }
}, Oa = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(a, r) {
    var o = r.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return a.flipX = !0, a;
    if (i && s === "v")
      return a.flipY = !0, a;
    if (s = parseFloat(s), isNaN(s))
      return a;
    switch (i) {
      case "grow":
        a.size = a.size + s;
        break;
      case "shrink":
        a.size = a.size - s;
        break;
      case "left":
        a.x = a.x - s;
        break;
      case "right":
        a.x = a.x + s;
        break;
      case "up":
        a.y = a.y - s;
        break;
      case "down":
        a.y = a.y + s;
        break;
      case "rotate":
        a.rotate = a.rotate + s;
        break;
    }
    return a;
  }, n);
}, Ll = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Oa(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-transform");
        return r && (n.transform = Oa(r)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var a = n.main, r = n.transform, o = n.containerWidth, i = n.iconWidth, s = {
        transform: "translate(".concat(o / 2, " 256)")
      }, l = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), f = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), u = "rotate(".concat(r.rotate, " 0 0)"), d = {
        transform: "".concat(l, " ").concat(f, " ").concat(u)
      }, h = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, v = {
        outer: s,
        inner: d,
        path: h
      };
      return {
        tag: "g",
        attributes: m({}, v.outer),
        children: [{
          tag: "g",
          attributes: m({}, v.inner),
          children: [{
            tag: a.icon.tag,
            children: a.icon.children,
            attributes: m(m({}, a.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
}, Vt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function ka(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ml(e) {
  return e.tag === "g" ? e.children : [e];
}
var Rl = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-mask"), o = r ? $t(r.split(" ").map(function(i) {
          return i.trim();
        })) : Mr();
        return o.prefix || (o.prefix = me()), n.mask = o, n.maskId = a.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var a = n.children, r = n.attributes, o = n.main, i = n.mask, s = n.maskId, l = n.transform, f = o.width, u = o.icon, d = i.width, h = i.icon, v = js({
        transform: l,
        containerWidth: d,
        iconWidth: f
      }), A = {
        tag: "rect",
        attributes: m(m({}, Vt), {}, {
          fill: "white"
        })
      }, y = u.children ? {
        children: u.children.map(ka)
      } : {}, g = {
        tag: "g",
        attributes: m({}, v.inner),
        children: [ka(m({
          tag: u.tag,
          attributes: m(m({}, u.attributes), v.path)
        }, y))]
      }, c = {
        tag: "g",
        attributes: m({}, v.outer),
        children: [g]
      }, p = "mask-".concat(s || ia()), O = "clip-".concat(s || ia()), b = {
        tag: "mask",
        attributes: m(m({}, Vt), {}, {
          id: p,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [A, c]
      }, S = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: O
          },
          children: Ml(h)
        }, b]
      };
      return a.push(S, {
        tag: "rect",
        attributes: m({
          fill: "currentColor",
          "clip-path": "url(#".concat(O, ")"),
          mask: "url(#".concat(p, ")")
        }, Vt)
      }), {
        children: a,
        attributes: r
      };
    };
  }
}, Bl = {
  provides: function(t) {
    var n = !1;
    de.matchMedia && (n = de.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var a = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      a.push({
        tag: "path",
        attributes: m(m({}, r), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = m(m({}, o), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: m(m({}, r), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: m(m({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: m(m({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), a.push(s), a.push({
        tag: "path",
        attributes: m(m({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: m(m({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || a.push({
        tag: "path",
        attributes: m(m({}, r), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: m(m({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: a
      };
    };
  }
}, Wl = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, a) {
        var r = a.getAttribute("data-fa-symbol"), o = r === null ? !1 : r === "" ? !0 : r;
        return n.symbol = o, n;
      }
    };
  }
}, zl = [Ns, Sl, Ol, kl, Pl, Dl, _l, Ll, Rl, Bl, Wl];
Ks(zl, {
  mixoutsTo: U
});
U.noAuto;
var Yr = U.config, Ul = U.library;
U.dom;
var Ot = U.parse;
U.findIconDefinition;
U.toHtml;
var Hl = U.icon;
U.layer;
var Vl = U.text;
U.counter;
function fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, a = Array(t); n < t; n++) a[n] = e[n];
  return a;
}
function Yl(e) {
  if (Array.isArray(e)) return fn(e);
}
function F(e, t, n) {
  return (t = Ql(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Xl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Pa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t && (a = a.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), n.push.apply(n, a);
  }
  return n;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pa(Object(n), !0).forEach(function(a) {
      F(e, a, n[a]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach(function(a) {
      Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(n, a));
    });
  }
  return e;
}
function Kl(e, t) {
  if (e == null) return {};
  var n, a, r = ql(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function ql(e, t) {
  if (e == null) return {};
  var n = {};
  for (var a in e) if ({}.hasOwnProperty.call(e, a)) {
    if (t.indexOf(a) !== -1) continue;
    n[a] = e[a];
  }
  return n;
}
function un(e) {
  return Yl(e) || Xl(e) || Zl(e) || Gl();
}
function Jl(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var a = n.call(e, t);
    if (typeof a != "object") return a;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ql(e) {
  var t = Jl(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function kt(e) {
  "@babel/helpers - typeof";
  return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, kt(e);
}
function Zl(e, t) {
  if (e) {
    if (typeof e == "string") return fn(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? fn(e, t) : void 0;
  }
}
function Ye(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? F({}, e, t) : {};
}
function ef(e) {
  var t, n = (t = {
    "fa-spin": e.spin,
    "fa-pulse": e.pulse,
    // the fixedWidth property has been deprecated as of version 7.0.0
    "fa-fw": e.fixedWidth,
    "fa-border": e.border,
    "fa-li": e.listItem,
    "fa-inverse": e.inverse,
    "fa-flip": e.flip === !0,
    "fa-flip-horizontal": e.flip === "horizontal" || e.flip === "both",
    "fa-flip-vertical": e.flip === "vertical" || e.flip === "both"
  }, F(F(F(F(F(F(F(F(F(F(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-rotate-by", e.rotateBy), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), F(F(F(F(t, "fa-flash", e.flash), "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse), "fa-width-auto", e.widthAuto));
  return Object.keys(n).map(function(a) {
    return n[a] ? a : null;
  }).filter(function(a) {
    return a;
  });
}
var tf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xr = { exports: {} };
(function(e) {
  (function(t) {
    var n = function(c, p, O) {
      if (!f(p) || d(p) || h(p) || v(p) || l(p))
        return p;
      var b, S = 0, x = 0;
      if (u(p))
        for (b = [], x = p.length; S < x; S++)
          b.push(n(c, p[S], O));
      else {
        b = {};
        for (var P in p)
          Object.prototype.hasOwnProperty.call(p, P) && (b[c(P, O)] = n(c, p[P], O));
      }
      return b;
    }, a = function(c, p) {
      p = p || {};
      var O = p.separator || "_", b = p.split || /(?=[A-Z])/;
      return c.split(b).join(O);
    }, r = function(c) {
      return A(c) ? c : (c = c.replace(/[\-_\s]+(.)?/g, function(p, O) {
        return O ? O.toUpperCase() : "";
      }), c.substr(0, 1).toLowerCase() + c.substr(1));
    }, o = function(c) {
      var p = r(c);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, i = function(c, p) {
      return a(c, p).toLowerCase();
    }, s = Object.prototype.toString, l = function(c) {
      return typeof c == "function";
    }, f = function(c) {
      return c === Object(c);
    }, u = function(c) {
      return s.call(c) == "[object Array]";
    }, d = function(c) {
      return s.call(c) == "[object Date]";
    }, h = function(c) {
      return s.call(c) == "[object RegExp]";
    }, v = function(c) {
      return s.call(c) == "[object Boolean]";
    }, A = function(c) {
      return c = c - 0, c === c;
    }, y = function(c, p) {
      var O = p && "process" in p ? p.process : p;
      return typeof O != "function" ? c : function(b, S) {
        return O(b, c, S);
      };
    }, g = {
      camelize: r,
      decamelize: i,
      pascalize: o,
      depascalize: i,
      camelizeKeys: function(c, p) {
        return n(y(r, p), c);
      },
      decamelizeKeys: function(c, p) {
        return n(y(i, p), c, p);
      },
      pascalizeKeys: function(c, p) {
        return n(y(o, p), c);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = g : t.humps = g;
  })(tf);
})(Xr);
var nf = Xr.exports, af = ["class", "style"];
function rf(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var a = n.indexOf(":"), r = nf.camelize(n.slice(0, a)), o = n.slice(a + 1).trim();
    return t[r] = o, t;
  }, {});
}
function of(e) {
  return e.split(/\s+/).reduce(function(t, n) {
    return t[n] = !0, t;
  }, {});
}
function Tn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var a = (e.children || []).map(function(l) {
    return Tn(l);
  }), r = Object.keys(e.attributes || {}).reduce(function(l, f) {
    var u = e.attributes[f];
    switch (f) {
      case "class":
        l.class = of(u);
        break;
      case "style":
        l.style = rf(u);
        break;
      default:
        l.attrs[f] = u;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var o = n.style, i = o === void 0 ? {} : o, s = Kl(n, af);
  return vn(e.tag, J(J(J({}, t), {}, {
    class: r.class,
    style: J(J({}, r.style), i)
  }, r.attrs), s), a);
}
var Gr = !1;
try {
  Gr = process.env.NODE_ENV === "production";
} catch {
}
function sf() {
  if (!Gr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Ea(e) {
  if (e && kt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ot.icon)
    return Ot.icon(e);
  if (e === null)
    return null;
  if (kt(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
var lf = G({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(t) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(t) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    maskId: {
      type: String,
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(t) {
        return ["right", "left"].indexOf(t) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(t) {
        return [90, 180, 270].indexOf(Number.parseInt(t, 10)) > -1;
      }
    },
    // the rotateBy property is only supported in version 7.0.0 and later
    rotateBy: {
      type: Boolean,
      default: !1
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(t) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(t) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    titleId: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    },
    // the widthAuto property is only supported in version 7.0.0 and later
    widthAuto: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.attrs, r = D(function() {
      return Ea(t.icon);
    }), o = D(function() {
      return Ye("classes", ef(t));
    }), i = D(function() {
      return Ye("transform", typeof t.transform == "string" ? Ot.transform(t.transform) : t.transform);
    }), s = D(function() {
      return Ye("mask", Ea(t.mask));
    }), l = D(function() {
      var u = J(J(J(J({}, o.value), i.value), s.value), {}, {
        symbol: t.symbol,
        maskId: t.maskId
      });
      return u.title = t.title, u.titleId = t.titleId, Hl(r.value, u);
    });
    ce(l, function(u) {
      if (!u)
        return sf("Could not find one or more icon(s)", r.value, s.value);
    }, {
      immediate: !0
    });
    var f = D(function() {
      return l.value ? Tn(l.value.abstract[0], {}, a) : null;
    });
    return function() {
      return f.value;
    };
  }
});
G({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(t, n) {
    var a = n.slots, r = Yr.familyPrefix, o = D(function() {
      return ["".concat(r, "-layers")].concat(un(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return vn("div", {
        class: o.value
      }, a.default ? a.default() : []);
    };
  }
});
G({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(t) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(t) > -1;
      }
    }
  },
  setup: function(t, n) {
    var a = n.attrs, r = Yr.familyPrefix, o = D(function() {
      return Ye("classes", [].concat(un(t.counter ? ["".concat(r, "-layers-counter")] : []), un(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), i = D(function() {
      return Ye("transform", typeof t.transform == "string" ? Ot.transform(t.transform) : t.transform);
    }), s = D(function() {
      var f = Vl(t.value.toString(), J(J({}, i.value), o.value)), u = f.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), l = D(function() {
      return Tn(s.value, {}, a);
    });
    return function() {
      return l.value;
    };
  }
});
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var ff = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]
};
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
var uf = {
  prefix: "far",
  iconName: "lemon",
  icon: [448, 512, [127819], "f094", "M368 80c-3.2 0-6.2 .4-8.9 1.3-19.1 5.5-46.1 10.7-74.3 3.3-57.4-14.9-124.6 7.4-174.7 57.5S37.7 259.4 52.6 316.8c7.3 28.2 2.2 55.2-3.3 74.3-.8 2.8-1.3 5.8-1.3 8.9 0 17.7 14.3 32 32 32 3.2 0 6.2-.4 8.9-1.3 19.1-5.5 46.1-10.7 74.3-3.3 57.4 14.9 124.6-7.4 174.7-57.5s72.4-117.3 57.5-174.7c-7.3-28.2-2.2-55.2 3.3-74.3 .8-2.8 1.3-5.8 1.3-8.9 0-17.7-14.3-32-32-32zm0-48c44.2 0 80 35.8 80 80 0 7.7-1.1 15.2-3.1 22.3-4.6 15.8-7.1 32.9-3 48.9 20.1 77.6-10.9 161.5-70 220.7s-143.1 90.2-220.7 70c-16-4.1-33-1.6-48.9 3-7.1 2-14.6 3.1-22.3 3.1-44.2 0-80-35.8-80-80 0-7.7 1.1-15.2 3.1-22.3 4.6-15.8 7.1-32.9 3-48.9-20.1-77.6 10.9-161.5 70-220.7S219.3 18 296.8 38.1c16 4.1 33 1.6 48.9-3 7.1-2 14.6-3.1 22.3-3.1zM246.7 167c-52 15.2-96.5 59.7-111.7 111.7-3.7 12.7-17.1 20-29.8 16.3S85.2 278 89 265.3c19.8-67.7 76.6-124.5 144.3-144.3 12.7-3.7 26.1 3.6 29.8 16.3s-3.6 26.1-16.3 29.8z"]
};
const Ia = /* @__PURE__ */ new Set(), cf = {
  // solid图标
  "fa-solid fa-xmark": ff,
  // regular图标
  "fa-lemon fa-regular": uf
}, mt = (e) => {
  if (typeof e == "string") {
    if (Ia.has(e))
      return;
    const t = cf[e];
    t ? (Ul.add(t), Ia.add(e)) : console.warn(`Icon ${e} not found in built-in icons. Please import it manually.`);
  }
}, $e = /* @__PURE__ */ G({
  name: "WsIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    color: {},
    type: {},
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: { type: [String, Boolean] },
    icon: {},
    mask: {},
    maskId: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    rotateBy: { type: Boolean },
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    titleId: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    widthAuto: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return ce(() => t.icon, (n) => {
      (typeof n == "string" || typeof n == "object" && n !== null && "prefix" in n && "iconName" in n) && mt(n);
    }, { immediate: !0 }), It(() => {
      (typeof t.icon == "string" || typeof t.icon == "object" && t.icon !== null && "prefix" in t.icon && "iconName" in t.icon) && mt(t.icon);
    }), (n, a) => (T(), M("i", {
      class: Pe(["ws-icon", {
        [`ws-icon--${e.type}`]: e.type
      }]),
      style: za(n.styleShell4ChageColor)
    }, [
      Z(pn(lf), hi(gi(n.$props)), null, 16)
    ], 6));
  }
}), df = ["disabled", "autofocus", "type"], mf = { key: 0 }, vf = /* @__PURE__ */ G({
  name: "WsButton",
  __name: "Button",
  props: {
    type: {},
    size: {},
    plain: { type: Boolean },
    disabled: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    icon: {},
    nativetype: { default: "button" },
    autofocus: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { expose: t, emit: n }) {
    const a = n, r = H();
    t({
      ref: r
    });
    const o = (i) => {
      a("click", i);
    };
    return (i, s) => (T(), M("button", {
      class: Pe(["ws-button", {
        [`ws-button--${e.type}`]: e.type,
        [`ws-button--${e.size}`]: e.size,
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-disabled": e.disabled,
        icon: e.icon
      }]),
      ref_key: "_ref",
      ref: r,
      disabled: e.disabled,
      autofocus: e.autofocus,
      type: e.nativetype,
      onClick: o
    }, [
      e.icon ? (T(), M("span", mf, [
        Z($e, { icon: e.icon }, null, 8, ["icon"])
      ])) : qe("", !0),
      _("span", null, [
        re(i.$slots, "default", {}, void 0, !0)
      ])
    ], 10, df));
  }
}), Me = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, r] of t)
    n[a] = r;
  return n;
}, pf = /* @__PURE__ */ Me(vf, [["__scopeId", "data-v-db5c0089"]]), Kr = Symbol("collapseItemProvider"), hf = /* @__PURE__ */ G({
  name: "WsCollapse",
  __name: "Collapse",
  props: {
    modelValue: {},
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, r = H(n.modelValue ?? []), o = (i) => {
      if (n.accordion && r.value.length > 0) {
        r.value.indexOf(i) > -1 ? r.value = [] : (r.value = [], r.value.push(i)), a("update:modelValue", r.value), a("change:modelValue", r.value);
        return;
      }
      const s = r.value.indexOf(i);
      s > -1 ? r.value.splice(s, 1) : r.value.push(i), a("update:modelValue", r.value), a("change:modelValue", r.value);
    };
    return ce(() => n.modelValue, () => {
      r.value = n.modelValue ?? [];
    }), yi(Kr, {
      handleItemClick: o,
      ItemActivateList: r
    }), (i, s) => (T(), M("div", {
      class: Pe(["ws-collapse", {
        "is-accordion": e.accordion
      }])
    }, [
      re(i.$slots, "default")
    ], 2));
  }
}), gf = ["id"], yf = { class: "ws-collapse__icon" }, bf = ["id"], xf = /* @__PURE__ */ G({
  name: "WsCollapseItem",
  __name: "CollapseItem",
  props: {
    name: {},
    title: {},
    disabled: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = bi(Kr), n = e, a = D(() => t == null ? void 0 : t.ItemActivateList.value.includes(n.name)), r = () => {
      n.disabled || t == null || t.handleItemClick(n.name);
    }, o = {
      "before-enter"(i) {
        i.style.height = "0px";
      },
      enter(i) {
        i.style.height = `${i.scrollHeight}px`;
      },
      "after-enter"(i) {
        i.style.height = "";
      },
      "before-leave"(i) {
        i.style.height = `${i.scrollHeight}px`;
      },
      leave(i) {
        i.style.height = "0px";
      },
      "after-leave"(i) {
        i.style.height = "";
      }
    };
    return (i, s) => (T(), M("div", {
      class: Pe(["ws-collapse-item", {
        "is-disabled": e.disabled,
        "is-active": a.value
      }])
    }, [
      _("div", {
        class: "ws-collapse__header",
        id: `collapse-item-header-${e.name}`,
        onClick: r
      }, [
        re(i.$slots, "title", {}, () => [
          hn(gn(e.title), 1)
        ], !0),
        _("div", yf, [
          Z($e, { icon: "fa-solid fa-angle-down" })
        ])
      ], 8, gf),
      Z(yn, xi({ name: "slide" }, wi(o)), {
        default: Je(() => [
          bt(_("div", null, [
            _("div", {
              class: "ws-collapse__content",
              id: `collapse-item-content-${e.name}`
            }, [
              re(i.$slots, "content", {}, void 0, !0)
            ], 8, bf)
          ], 512), [
            [xt, a.value]
          ])
        ]),
        _: 3
      }, 16)
    ], 2));
  }
}), wf = /* @__PURE__ */ Me(xf, [["__scopeId", "data-v-72c72d8d"]]), Af = {
  key: 0,
  class: "ws-toast__icon"
}, Sf = { key: 1 }, Of = { key: 2 }, kf = /* @__PURE__ */ G({
  name: "WsToast",
  __name: "Toast",
  props: {
    context: {},
    closable: { type: Boolean, default: !1 },
    icon: {},
    type: {},
    disapper: { default: 2500 },
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "change:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = H(n.modelValue), r = t, o = function() {
      a.value = !1, r("update:modelValue", a.value), r("change:modelValue", a.value), console.log(a.value);
    };
    return ce(() => n.modelValue, () => a.value = n.modelValue), ce(() => a.value, () => {
      a.value && setTimeout(() => {
        o();
      }, n.disapper);
    }), (i, s) => (T(), Ua(Ai, { to: "body" }, [
      _("div", {
        class: Pe(["ws-toast", {
          [`ws-toast--${e.type}`]: e.type,
          "is-active": a.value
        }])
      }, [
        e.icon ? (T(), M("div", Af, [
          Z($e, {
            icon: e.icon,
            type: e.type
          }, null, 8, ["icon", "type"])
        ])) : qe("", !0),
        e.context ? (T(), M("span", Sf, gn(e.context), 1)) : (T(), M("span", Of, [
          re(i.$slots, "default", {}, void 0, !0)
        ])),
        e.closable ? (T(), M("span", {
          key: 3,
          class: "ws-toast__close",
          onClick: o
        }, [
          Z($e, {
            icon: "fa-solid fa-xmark",
            type: e.type
          }, null, 8, ["type"])
        ])) : qe("", !0)
      ], 2)
    ]));
  }
}), Pf = /* @__PURE__ */ Me(kf, [["__scopeId", "data-v-85b5e622"]]);
var R = "top", Y = "bottom", X = "right", B = "left", $n = "auto", rt = [R, Y, X, B], Ne = "start", Ze = "end", Ef = "clippingParents", qr = "viewport", We = "popper", If = "reference", Ca = /* @__PURE__ */ rt.reduce(function(e, t) {
  return e.concat([t + "-" + Ne, t + "-" + Ze]);
}, []), Jr = /* @__PURE__ */ [].concat(rt, [$n]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ne, t + "-" + Ze]);
}, []), Cf = "beforeRead", jf = "read", Tf = "afterRead", $f = "beforeMain", Nf = "main", Ff = "afterMain", Df = "beforeWrite", _f = "write", Lf = "afterWrite", Mf = [Cf, jf, Tf, $f, Nf, Ff, Df, _f, Lf];
function ae(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function z(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ke(e) {
  var t = z(e).Element;
  return e instanceof t || e instanceof Element;
}
function V(e) {
  var t = z(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Nn(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = z(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var a = t.styles[n] || {}, r = t.attributes[n] || {}, o = t.elements[n];
    !V(o) || !ae(o) || (Object.assign(o.style, a), Object.keys(r).forEach(function(i) {
      var s = r[i];
      s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Bf(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(a) {
      var r = t.elements[a], o = t.attributes[a] || {}, i = Object.keys(t.styles.hasOwnProperty(a) ? t.styles[a] : n[a]), s = i.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !V(r) || !ae(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
const Wf = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Rf,
  effect: Bf,
  requires: ["computeStyles"]
};
function ne(e) {
  return e.split("-")[0];
}
var Ae = Math.max, Pt = Math.min, Fe = Math.round;
function cn() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qr() {
  return !/^((?!chrome|android).)*safari/i.test(cn());
}
function De(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var a = e.getBoundingClientRect(), r = 1, o = 1;
  t && V(e) && (r = e.offsetWidth > 0 && Fe(a.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Fe(a.height) / e.offsetHeight || 1);
  var i = ke(e) ? z(e) : window, s = i.visualViewport, l = !Qr() && n, f = (a.left + (l && s ? s.offsetLeft : 0)) / r, u = (a.top + (l && s ? s.offsetTop : 0)) / o, d = a.width / r, h = a.height / o;
  return {
    width: d,
    height: h,
    top: u,
    right: f + d,
    bottom: u + h,
    left: f,
    x: f,
    y: u
  };
}
function Fn(e) {
  var t = De(e), n = e.offsetWidth, a = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - a) <= 1 && (a = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: a
  };
}
function Zr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Nn(n)) {
    var a = t;
    do {
      if (a && e.isSameNode(a))
        return !0;
      a = a.parentNode || a.host;
    } while (a);
  }
  return !1;
}
function se(e) {
  return z(e).getComputedStyle(e);
}
function zf(e) {
  return ["table", "td", "th"].indexOf(ae(e)) >= 0;
}
function pe(e) {
  return ((ke(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ft(e) {
  return ae(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Nn(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pe(e)
  );
}
function ja(e) {
  return !V(e) || // https://github.com/popperjs/popper-core/issues/837
  se(e).position === "fixed" ? null : e.offsetParent;
}
function Uf(e) {
  var t = /firefox/i.test(cn()), n = /Trident/i.test(cn());
  if (n && V(e)) {
    var a = se(e);
    if (a.position === "fixed")
      return null;
  }
  var r = Ft(e);
  for (Nn(r) && (r = r.host); V(r) && ["html", "body"].indexOf(ae(r)) < 0; ) {
    var o = se(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function it(e) {
  for (var t = z(e), n = ja(e); n && zf(n) && se(n).position === "static"; )
    n = ja(n);
  return n && (ae(n) === "html" || ae(n) === "body" && se(n).position === "static") ? t : n || Uf(e) || t;
}
function Dn(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xe(e, t, n) {
  return Ae(e, Pt(t, n));
}
function Hf(e, t, n) {
  var a = Xe(e, t, n);
  return a > n ? n : a;
}
function ei() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ti(e) {
  return Object.assign({}, ei(), e);
}
function ni(e, t) {
  return t.reduce(function(n, a) {
    return n[a] = e, n;
  }, {});
}
var Vf = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, ti(typeof t != "number" ? t : ni(t, rt));
};
function Yf(e) {
  var t, n = e.state, a = e.name, r = e.options, o = n.elements.arrow, i = n.modifiersData.popperOffsets, s = ne(n.placement), l = Dn(s), f = [B, X].indexOf(s) >= 0, u = f ? "height" : "width";
  if (!(!o || !i)) {
    var d = Vf(r.padding, n), h = Fn(o), v = l === "y" ? R : B, A = l === "y" ? Y : X, y = n.rects.reference[u] + n.rects.reference[l] - i[l] - n.rects.popper[u], g = i[l] - n.rects.reference[l], c = it(o), p = c ? l === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, O = y / 2 - g / 2, b = d[v], S = p - h[u] - d[A], x = p / 2 - h[u] / 2 + O, P = Xe(b, x, S), E = l;
    n.modifiersData[a] = (t = {}, t[E] = P, t.centerOffset = P - x, t);
  }
}
function Xf(e) {
  var t = e.state, n = e.options, a = n.element, r = a === void 0 ? "[data-popper-arrow]" : a;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || Zr(t.elements.popper, r) && (t.elements.arrow = r));
}
const Gf = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Yf,
  effect: Xf,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function _e(e) {
  return e.split("-")[1];
}
var Kf = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function qf(e, t) {
  var n = e.x, a = e.y, r = t.devicePixelRatio || 1;
  return {
    x: Fe(n * r) / r || 0,
    y: Fe(a * r) / r || 0
  };
}
function Ta(e) {
  var t, n = e.popper, a = e.popperRect, r = e.placement, o = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, h = i.x, v = h === void 0 ? 0 : h, A = i.y, y = A === void 0 ? 0 : A, g = typeof u == "function" ? u({
    x: v,
    y
  }) : {
    x: v,
    y
  };
  v = g.x, y = g.y;
  var c = i.hasOwnProperty("x"), p = i.hasOwnProperty("y"), O = B, b = R, S = window;
  if (f) {
    var x = it(n), P = "clientHeight", E = "clientWidth";
    if (x === z(n) && (x = pe(n), se(x).position !== "static" && s === "absolute" && (P = "scrollHeight", E = "scrollWidth")), x = x, r === R || (r === B || r === X) && o === Ze) {
      b = Y;
      var C = d && x === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[P]
      );
      y -= C - a.height, y *= l ? 1 : -1;
    }
    if (r === B || (r === R || r === Y) && o === Ze) {
      O = X;
      var j = d && x === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[E]
      );
      v -= j - a.width, v *= l ? 1 : -1;
    }
  }
  var N = Object.assign({
    position: s
  }, f && Kf), K = u === !0 ? qf({
    x: v,
    y
  }, z(n)) : {
    x: v,
    y
  };
  if (v = K.x, y = K.y, l) {
    var L;
    return Object.assign({}, N, (L = {}, L[b] = p ? "0" : "", L[O] = c ? "0" : "", L.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + y + "px)" : "translate3d(" + v + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, N, (t = {}, t[b] = p ? y + "px" : "", t[O] = c ? v + "px" : "", t.transform = "", t));
}
function Jf(e) {
  var t = e.state, n = e.options, a = n.gpuAcceleration, r = a === void 0 ? !0 : a, o = n.adaptive, i = o === void 0 ? !0 : o, s = n.roundOffsets, l = s === void 0 ? !0 : s, f = {
    placement: ne(t.placement),
    variation: _e(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ta(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ta(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Qf = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Jf,
  data: {}
};
var vt = {
  passive: !0
};
function Zf(e) {
  var t = e.state, n = e.instance, a = e.options, r = a.scroll, o = r === void 0 ? !0 : r, i = a.resize, s = i === void 0 ? !0 : i, l = z(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && f.forEach(function(u) {
    u.addEventListener("scroll", n.update, vt);
  }), s && l.addEventListener("resize", n.update, vt), function() {
    o && f.forEach(function(u) {
      u.removeEventListener("scroll", n.update, vt);
    }), s && l.removeEventListener("resize", n.update, vt);
  };
}
const eu = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Zf,
  data: {}
};
var tu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function yt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return tu[t];
  });
}
var nu = {
  start: "end",
  end: "start"
};
function $a(e) {
  return e.replace(/start|end/g, function(t) {
    return nu[t];
  });
}
function _n(e) {
  var t = z(e), n = t.pageXOffset, a = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: a
  };
}
function Ln(e) {
  return De(pe(e)).left + _n(e).scrollLeft;
}
function au(e, t) {
  var n = z(e), a = pe(e), r = n.visualViewport, o = a.clientWidth, i = a.clientHeight, s = 0, l = 0;
  if (r) {
    o = r.width, i = r.height;
    var f = Qr();
    (f || !f && t === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: s + Ln(e),
    y: l
  };
}
function ru(e) {
  var t, n = pe(e), a = _n(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, o = Ae(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Ae(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -a.scrollLeft + Ln(e), l = -a.scrollTop;
  return se(r || n).direction === "rtl" && (s += Ae(n.clientWidth, r ? r.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function Mn(e) {
  var t = se(e), n = t.overflow, a = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + a);
}
function ai(e) {
  return ["html", "body", "#document"].indexOf(ae(e)) >= 0 ? e.ownerDocument.body : V(e) && Mn(e) ? e : ai(Ft(e));
}
function Ge(e, t) {
  var n;
  t === void 0 && (t = []);
  var a = ai(e), r = a === ((n = e.ownerDocument) == null ? void 0 : n.body), o = z(a), i = r ? [o].concat(o.visualViewport || [], Mn(a) ? a : []) : a, s = t.concat(i);
  return r ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ge(Ft(i)))
  );
}
function dn(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function iu(e, t) {
  var n = De(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Na(e, t, n) {
  return t === qr ? dn(au(e, n)) : ke(t) ? iu(t, n) : dn(ru(pe(e)));
}
function ou(e) {
  var t = Ge(Ft(e)), n = ["absolute", "fixed"].indexOf(se(e).position) >= 0, a = n && V(e) ? it(e) : e;
  return ke(a) ? t.filter(function(r) {
    return ke(r) && Zr(r, a) && ae(r) !== "body";
  }) : [];
}
function su(e, t, n, a) {
  var r = t === "clippingParents" ? ou(e) : [].concat(t), o = [].concat(r, [n]), i = o[0], s = o.reduce(function(l, f) {
    var u = Na(e, f, a);
    return l.top = Ae(u.top, l.top), l.right = Pt(u.right, l.right), l.bottom = Pt(u.bottom, l.bottom), l.left = Ae(u.left, l.left), l;
  }, Na(e, i, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ri(e) {
  var t = e.reference, n = e.element, a = e.placement, r = a ? ne(a) : null, o = a ? _e(a) : null, i = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case R:
      l = {
        x: i,
        y: t.y - n.height
      };
      break;
    case Y:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case X:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case B:
      l = {
        x: t.x - n.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var f = r ? Dn(r) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (o) {
      case Ne:
        l[f] = l[f] - (t[u] / 2 - n[u] / 2);
        break;
      case Ze:
        l[f] = l[f] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function et(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = a === void 0 ? e.placement : a, o = n.strategy, i = o === void 0 ? e.strategy : o, s = n.boundary, l = s === void 0 ? Ef : s, f = n.rootBoundary, u = f === void 0 ? qr : f, d = n.elementContext, h = d === void 0 ? We : d, v = n.altBoundary, A = v === void 0 ? !1 : v, y = n.padding, g = y === void 0 ? 0 : y, c = ti(typeof g != "number" ? g : ni(g, rt)), p = h === We ? If : We, O = e.rects.popper, b = e.elements[A ? p : h], S = su(ke(b) ? b : b.contextElement || pe(e.elements.popper), l, u, i), x = De(e.elements.reference), P = ri({
    reference: x,
    element: O,
    placement: r
  }), E = dn(Object.assign({}, O, P)), C = h === We ? E : x, j = {
    top: S.top - C.top + c.top,
    bottom: C.bottom - S.bottom + c.bottom,
    left: S.left - C.left + c.left,
    right: C.right - S.right + c.right
  }, N = e.modifiersData.offset;
  if (h === We && N) {
    var K = N[r];
    Object.keys(j).forEach(function(L) {
      var he = [X, Y].indexOf(L) >= 0 ? 1 : -1, ge = [R, Y].indexOf(L) >= 0 ? "y" : "x";
      j[L] += K[ge] * he;
    });
  }
  return j;
}
function lu(e, t) {
  t === void 0 && (t = {});
  var n = t, a = n.placement, r = n.boundary, o = n.rootBoundary, i = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, f = l === void 0 ? Jr : l, u = _e(a), d = u ? s ? Ca : Ca.filter(function(A) {
    return _e(A) === u;
  }) : rt, h = d.filter(function(A) {
    return f.indexOf(A) >= 0;
  });
  h.length === 0 && (h = d);
  var v = h.reduce(function(A, y) {
    return A[y] = et(e, {
      placement: y,
      boundary: r,
      rootBoundary: o,
      padding: i
    })[ne(y)], A;
  }, {});
  return Object.keys(v).sort(function(A, y) {
    return v[A] - v[y];
  });
}
function fu(e) {
  if (ne(e) === $n)
    return [];
  var t = yt(e);
  return [$a(e), t, $a(t)];
}
function uu(e) {
  var t = e.state, n = e.options, a = e.name;
  if (!t.modifiersData[a]._skip) {
    for (var r = n.mainAxis, o = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !0 : i, l = n.fallbackPlacements, f = n.padding, u = n.boundary, d = n.rootBoundary, h = n.altBoundary, v = n.flipVariations, A = v === void 0 ? !0 : v, y = n.allowedAutoPlacements, g = t.options.placement, c = ne(g), p = c === g, O = l || (p || !A ? [yt(g)] : fu(g)), b = [g].concat(O).reduce(function(Ee, fe) {
      return Ee.concat(ne(fe) === $n ? lu(t, {
        placement: fe,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: A,
        allowedAutoPlacements: y
      }) : fe);
    }, []), S = t.rects.reference, x = t.rects.popper, P = /* @__PURE__ */ new Map(), E = !0, C = b[0], j = 0; j < b.length; j++) {
      var N = b[j], K = ne(N), L = _e(N) === Ne, he = [R, Y].indexOf(K) >= 0, ge = he ? "width" : "height", W = et(t, {
        placement: N,
        boundary: u,
        rootBoundary: d,
        altBoundary: h,
        padding: f
      }), q = he ? L ? X : B : L ? Y : R;
      S[ge] > x[ge] && (q = yt(q));
      var ot = yt(q), ye = [];
      if (o && ye.push(W[K] <= 0), s && ye.push(W[q] <= 0, W[ot] <= 0), ye.every(function(Ee) {
        return Ee;
      })) {
        C = N, E = !1;
        break;
      }
      P.set(N, ye);
    }
    if (E)
      for (var st = A ? 3 : 1, Dt = function(fe) {
        var Be = b.find(function(ft) {
          var be = P.get(ft);
          if (be)
            return be.slice(0, fe).every(function(_t) {
              return _t;
            });
        });
        if (Be)
          return C = Be, "break";
      }, Re = st; Re > 0; Re--) {
        var lt = Dt(Re);
        if (lt === "break") break;
      }
    t.placement !== C && (t.modifiersData[a]._skip = !0, t.placement = C, t.reset = !0);
  }
}
const cu = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: uu,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Fa(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function Da(e) {
  return [R, X, Y, B].some(function(t) {
    return e[t] >= 0;
  });
}
function du(e) {
  var t = e.state, n = e.name, a = t.rects.reference, r = t.rects.popper, o = t.modifiersData.preventOverflow, i = et(t, {
    elementContext: "reference"
  }), s = et(t, {
    altBoundary: !0
  }), l = Fa(i, a), f = Fa(s, r, o), u = Da(l), d = Da(f);
  t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: f,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const mu = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: du
};
function vu(e, t, n) {
  var a = ne(e), r = [B, R].indexOf(a) >= 0 ? -1 : 1, o = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, i = o[0], s = o[1];
  return i = i || 0, s = (s || 0) * r, [B, X].indexOf(a) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function pu(e) {
  var t = e.state, n = e.options, a = e.name, r = n.offset, o = r === void 0 ? [0, 0] : r, i = Jr.reduce(function(u, d) {
    return u[d] = vu(d, t.rects, o), u;
  }, {}), s = i[t.placement], l = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[a] = i;
}
const hu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pu
};
function gu(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = ri({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const yu = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: gu,
  data: {}
};
function bu(e) {
  return e === "x" ? "y" : "x";
}
function xu(e) {
  var t = e.state, n = e.options, a = e.name, r = n.mainAxis, o = r === void 0 ? !0 : r, i = n.altAxis, s = i === void 0 ? !1 : i, l = n.boundary, f = n.rootBoundary, u = n.altBoundary, d = n.padding, h = n.tether, v = h === void 0 ? !0 : h, A = n.tetherOffset, y = A === void 0 ? 0 : A, g = et(t, {
    boundary: l,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), c = ne(t.placement), p = _e(t.placement), O = !p, b = Dn(c), S = bu(b), x = t.modifiersData.popperOffsets, P = t.rects.reference, E = t.rects.popper, C = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, j = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (x) {
    if (o) {
      var L, he = b === "y" ? R : B, ge = b === "y" ? Y : X, W = b === "y" ? "height" : "width", q = x[b], ot = q + g[he], ye = q - g[ge], st = v ? -E[W] / 2 : 0, Dt = p === Ne ? P[W] : E[W], Re = p === Ne ? -E[W] : -P[W], lt = t.elements.arrow, Ee = v && lt ? Fn(lt) : {
        width: 0,
        height: 0
      }, fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ei(), Be = fe[he], ft = fe[ge], be = Xe(0, P[W], Ee[W]), _t = O ? P[W] / 2 - st - be - Be - j.mainAxis : Dt - be - Be - j.mainAxis, ui = O ? -P[W] / 2 + st + be + ft + j.mainAxis : Re + be + ft + j.mainAxis, Lt = t.elements.arrow && it(t.elements.arrow), ci = Lt ? b === "y" ? Lt.clientTop || 0 : Lt.clientLeft || 0 : 0, Rn = (L = N == null ? void 0 : N[b]) != null ? L : 0, di = q + _t - Rn - ci, mi = q + ui - Rn, Bn = Xe(v ? Pt(ot, di) : ot, q, v ? Ae(ye, mi) : ye);
      x[b] = Bn, K[b] = Bn - q;
    }
    if (s) {
      var Wn, vi = b === "x" ? R : B, pi = b === "x" ? Y : X, xe = x[S], ut = S === "y" ? "height" : "width", zn = xe + g[vi], Un = xe - g[pi], Mt = [R, B].indexOf(c) !== -1, Hn = (Wn = N == null ? void 0 : N[S]) != null ? Wn : 0, Vn = Mt ? zn : xe - P[ut] - E[ut] - Hn + j.altAxis, Yn = Mt ? xe + P[ut] + E[ut] - Hn - j.altAxis : Un, Xn = v && Mt ? Hf(Vn, xe, Yn) : Xe(v ? Vn : zn, xe, v ? Yn : Un);
      x[S] = Xn, K[S] = Xn - xe;
    }
    t.modifiersData[a] = K;
  }
}
const wu = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: xu,
  requiresIfExists: ["offset"]
};
function Au(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Su(e) {
  return e === z(e) || !V(e) ? _n(e) : Au(e);
}
function Ou(e) {
  var t = e.getBoundingClientRect(), n = Fe(t.width) / e.offsetWidth || 1, a = Fe(t.height) / e.offsetHeight || 1;
  return n !== 1 || a !== 1;
}
function ku(e, t, n) {
  n === void 0 && (n = !1);
  var a = V(t), r = V(t) && Ou(t), o = pe(t), i = De(e, r, n), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (a || !a && !n) && ((ae(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Mn(o)) && (s = Su(t)), V(t) ? (l = De(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Ln(o))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function Pu(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), a = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function r(o) {
    n.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && r(l);
      }
    }), a.push(o);
  }
  return e.forEach(function(o) {
    n.has(o.name) || r(o);
  }), a;
}
function Eu(e) {
  var t = Pu(e);
  return Mf.reduce(function(n, a) {
    return n.concat(t.filter(function(r) {
      return r.phase === a;
    }));
  }, []);
}
function Iu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Cu(e) {
  var t = e.reduce(function(n, a) {
    var r = n[a.name];
    return n[a.name] = r ? Object.assign({}, r, a, {
      options: Object.assign({}, r.options, a.options),
      data: Object.assign({}, r.data, a.data)
    }) : a, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var _a = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function La() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(a) {
    return !(a && typeof a.getBoundingClientRect == "function");
  });
}
function ju(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, a = n === void 0 ? [] : n, r = t.defaultOptions, o = r === void 0 ? _a : r;
  return function(s, l, f) {
    f === void 0 && (f = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _a, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], h = !1, v = {
      state: u,
      setOptions: function(c) {
        var p = typeof c == "function" ? c(u.options) : c;
        y(), u.options = Object.assign({}, o, u.options, p), u.scrollParents = {
          reference: ke(s) ? Ge(s) : s.contextElement ? Ge(s.contextElement) : [],
          popper: Ge(l)
        };
        var O = Eu(Cu([].concat(a, u.options.modifiers)));
        return u.orderedModifiers = O.filter(function(b) {
          return b.enabled;
        }), A(), v.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!h) {
          var c = u.elements, p = c.reference, O = c.popper;
          if (La(p, O)) {
            u.rects = {
              reference: ku(p, it(O), u.options.strategy === "fixed"),
              popper: Fn(O)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var b = 0; b < u.orderedModifiers.length; b++) {
              if (u.reset === !0) {
                u.reset = !1, b = -1;
                continue;
              }
              var S = u.orderedModifiers[b], x = S.fn, P = S.options, E = P === void 0 ? {} : P, C = S.name;
              typeof x == "function" && (u = x({
                state: u,
                options: E,
                name: C,
                instance: v
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Iu(function() {
        return new Promise(function(g) {
          v.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        y(), h = !0;
      }
    };
    if (!La(s, l))
      return v;
    v.setOptions(f).then(function(g) {
      !h && f.onFirstUpdate && f.onFirstUpdate(g);
    });
    function A() {
      u.orderedModifiers.forEach(function(g) {
        var c = g.name, p = g.options, O = p === void 0 ? {} : p, b = g.effect;
        if (typeof b == "function") {
          var S = b({
            state: u,
            name: c,
            instance: v,
            options: O
          }), x = function() {
          };
          d.push(S || x);
        }
      });
    }
    function y() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return v;
  };
}
var Tu = [eu, yu, Qf, Wf, hu, cu, wu, Gf, mu], $u = /* @__PURE__ */ ju({
  defaultModifiers: Tu
});
function Nu(e, t) {
  const n = (a) => {
    e.value && a.target && (e.value.contains(a.target) || t(a));
  };
  It(() => {
    document.addEventListener("click", n);
  }), Ha(() => {
    document.removeEventListener("click", n);
  });
}
var Fu = typeof global == "object" && global && global.Object === Object && global, Du = typeof self == "object" && self && self.Object === Object && self, ii = Fu || Du || Function("return this")(), Et = ii.Symbol, oi = Object.prototype, _u = oi.hasOwnProperty, Lu = oi.toString, ze = Et ? Et.toStringTag : void 0;
function Mu(e) {
  var t = _u.call(e, ze), n = e[ze];
  try {
    e[ze] = void 0;
    var a = !0;
  } catch {
  }
  var r = Lu.call(e);
  return a && (t ? e[ze] = n : delete e[ze]), r;
}
var Ru = Object.prototype, Bu = Ru.toString;
function Wu(e) {
  return Bu.call(e);
}
var zu = "[object Null]", Uu = "[object Undefined]", Ma = Et ? Et.toStringTag : void 0;
function Hu(e) {
  return e == null ? e === void 0 ? Uu : zu : Ma && Ma in Object(e) ? Mu(e) : Wu(e);
}
function Vu(e) {
  return e != null && typeof e == "object";
}
var Yu = "[object Symbol]";
function Xu(e) {
  return typeof e == "symbol" || Vu(e) && Hu(e) == Yu;
}
var Gu = /\s/;
function Ku(e) {
  for (var t = e.length; t-- && Gu.test(e.charAt(t)); )
    ;
  return t;
}
var qu = /^\s+/;
function Ju(e) {
  return e && e.slice(0, Ku(e) + 1).replace(qu, "");
}
function mn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ra = NaN, Qu = /^[-+]0x[0-9a-f]+$/i, Zu = /^0b[01]+$/i, ec = /^0o[0-7]+$/i, tc = parseInt;
function Ba(e) {
  if (typeof e == "number")
    return e;
  if (Xu(e))
    return Ra;
  if (mn(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = mn(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ju(e);
  var n = Zu.test(e);
  return n || ec.test(e) ? tc(e.slice(2), n ? 2 : 8) : Qu.test(e) ? Ra : +e;
}
var Yt = function() {
  return ii.Date.now();
}, nc = "Expected a function", ac = Math.max, rc = Math.min;
function ic(e, t, n) {
  var a, r, o, i, s, l, f = 0, u = !1, d = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(nc);
  t = Ba(t) || 0, mn(n) && (u = !!n.leading, d = "maxWait" in n, o = d ? ac(Ba(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h);
  function v(x) {
    var P = a, E = r;
    return a = r = void 0, f = x, i = e.apply(E, P), i;
  }
  function A(x) {
    return f = x, s = setTimeout(c, t), u ? v(x) : i;
  }
  function y(x) {
    var P = x - l, E = x - f, C = t - P;
    return d ? rc(C, o - E) : C;
  }
  function g(x) {
    var P = x - l, E = x - f;
    return l === void 0 || P >= t || P < 0 || d && E >= o;
  }
  function c() {
    var x = Yt();
    if (g(x))
      return p(x);
    s = setTimeout(c, y(x));
  }
  function p(x) {
    return s = void 0, h && a ? v(x) : (a = r = void 0, i);
  }
  function O() {
    s !== void 0 && clearTimeout(s), f = 0, a = l = r = s = void 0;
  }
  function b() {
    return s === void 0 ? i : p(Yt());
  }
  function S() {
    var x = Yt(), P = g(x);
    if (a = arguments, r = this, l = x, P) {
      if (s === void 0)
        return A(l);
      if (d)
        return clearTimeout(s), s = setTimeout(c, t), v(l);
    }
    return s === void 0 && (s = setTimeout(c, t)), i;
  }
  return S.cancel = O, S.flush = b, S;
}
const oc = /* @__PURE__ */ G({
  name: "WsTooltip",
  __name: "ToolTip",
  props: {
    trigger: { default: "hover" },
    content: {},
    placement: { default: "bottom" },
    modelValue: { type: Boolean },
    popperOptions: {},
    transition: { default: "fade" },
    changeDelay: { default: 0 },
    minWidth: { default: void 0 },
    maxWidth: { default: 200 },
    autoWidth: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change:modelValue"],
  setup(e, { expose: t, emit: n }) {
    const a = e, r = D(() => ({
      placement: a.placement,
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 9]
          }
        },
        {
          name: "computeStyles",
          options: {
            adaptive: !0
          }
        },
        {
          name: "preventOverflow",
          options: {
            padding: 8
          }
        },
        {
          name: "flip",
          options: {
            padding: 8
          }
        }
      ],
      ...a.popperOptions
    })), o = n, i = H(a.modelValue ?? !1);
    let s = null;
    const l = H(), f = H(), u = H();
    Nu(l, () => {
      a.trigger == "click" && h(!1);
    });
    const d = (g) => {
      i.value = g, o("update:modelValue", i.value), o("change:modelValue", i.value);
    }, h = ic((g) => d(g), a.changeDelay), v = (g) => {
      a.trigger == "click" ? (h(!i.value), console.log(a)) : a.trigger == "hover" && h(!g);
    };
    ce(() => a.modelValue, (g) => {
      i.value = g;
    }), ce(i, (g) => {
      u.value && f.value && g ? s = $u(u.value, f.value, r.value) : s == null || s.destroy();
    }, { flush: "post" });
    function A() {
      a.trigger == "manaul" && h(!0);
    }
    function y() {
      a.trigger == "manaul" && h(!1);
    }
    return t({
      show: A,
      hide: y
    }), Ha(() => {
      s && (s == null || s.destroy());
    }), (g, c) => (T(), M("div", {
      class: "ws-tooltip",
      onMouseenter: c[1] || (c[1] = (p) => a.trigger == "hover" ? v(!1) : null),
      onMouseleave: c[2] || (c[2] = (p) => a.trigger == "hover" ? v(!0) : null),
      ref_key: "tooltiprootNode",
      ref: l
    }, [
      _("div", {
        class: "ws-tooltip__trigger",
        ref_key: "triggerNode",
        ref: u,
        onClick: c[0] || (c[0] = (p) => a.trigger == "click" ? v() : null)
      }, [
        _("div", null, [
          re(g.$slots, "default", {}, void 0, !0)
        ])
      ], 512),
      bt(_("div", {
        class: "ws-tooltip__popper",
        ref_key: "poperNode",
        ref: f
      }, [
        Z(yn, { name: e.transition }, {
          default: Je(() => [
            bt(_("div", null, [
              _("div", null, [
                re(g.$slots, "content", {}, () => [
                  hn(gn(e.content), 1)
                ], !0)
              ]),
              c[3] || (c[3] = _("div", { id: "arrow" }, null, -1))
            ], 512), [
              [xt, i.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ], 512), [
        [xt, i.value]
      ])
    ], 544));
  }
}), si = /* @__PURE__ */ Me(oc, [["__scopeId", "data-v-1984ce6e"]]), li = G({
  props: {
    vNode: {
      type: [String, Object],
      require: !0
    }
  },
  setup(e) {
    return () => e.vNode;
  }
}), sc = { class: "ws-dropdown" }, lc = { class: "ws-dropdown__menu" }, fc = {
  key: 0,
  role: "separator",
  class: "item-separator"
}, uc = ["id", "onClick"], cc = /* @__PURE__ */ G({
  name: "WsDropDown",
  __name: "DropDown",
  props: {
    DropDownMenuOptions: {},
    trigger: {},
    content: {},
    placement: { default: "bottom" },
    modelValue: { type: Boolean },
    popperOptions: {},
    transition: {},
    changeDelay: { default: 50 },
    minWidth: {},
    maxWidth: {},
    autoWidth: { type: Boolean }
  },
  emits: ["visiable-change", "update:select"],
  setup(e, { expose: t, emit: n }) {
    const a = n, r = e, o = (s) => {
      if (s.disabled) return;
      const l = s.key;
      a("update:select", l), console.log(s);
    }, i = H(null);
    return t({
      show: () => {
        var s;
        return console.log(r.trigger), (s = i.value) == null ? void 0 : s.show();
      },
      hide: () => {
        var s;
        return (s = i.value) == null ? void 0 : s.hide();
      }
    }), (s, l) => (T(), M("div", sc, [
      Z(si, {
        "change-delay": r.changeDelay,
        "v-model": r.modelValue,
        placement: r.placement,
        changedelay: r.changeDelay,
        ref_key: "DpToolTipRef",
        ref: i,
        "popper-options": r.popperOptions,
        trigger: r.trigger
      }, {
        content: Je(() => [
          _("ul", lc, [
            (T(!0), M(Gn, null, Si(r.DropDownMenuOptions, (f) => (T(), M(Gn, {
              key: f.key
            }, [
              f.divided ? (T(), M("li", fc)) : qe("", !0),
              _("li", {
                class: Pe(["ws-dropdown-item", {
                  "is-disabled": f.disabled,
                  "is-divided": f.divided
                }]),
                id: `dropdown-item-${f.key}`,
                onClick: (u) => o(f)
              }, [
                Z(pn(li), {
                  "v-node": f.label
                }, null, 8, ["v-node"])
              ], 10, uc)
            ], 64))), 128))
          ])
        ]),
        default: Je(() => [
          re(s.$slots, "default", {}, () => [
            l[0] || (l[0] = hn("DropDownTriggerSlot", -1))
          ], !0)
        ]),
        _: 3
      }, 8, ["change-delay", "v-model", "placement", "changedelay", "popper-options", "trigger"])
    ]));
  }
}), dc = /* @__PURE__ */ Me(cc, [["__scopeId", "data-v-5f77a0cd"]]), Ke = H([]), Wa = /* @__PURE__ */ (() => {
  let e = 0;
  return {
    get value() {
      return e;
    },
    // 获取当前 id
    set value(t) {
      e = t;
    }
    // 增加 id
  };
})(), bc = (e) => {
  Wa.value += 1;
  const t = `messageNode_${Wa.value}`, n = document.createElement("div"), r = {
    ...e,
    onDestory: () => {
      Kn(null, n);
      const s = Ke.value.findIndex((l) => l.id == t);
      s != -1 && Ke.value.splice(s, 1);
    },
    messageId: t
  }, o = vn(fi, r), i = {
    id: t,
    vnode: o,
    props: r
  };
  return Ke.value.push(i), Kn(o, n), document.body.appendChild(n.firstElementChild), i;
}, mc = (e) => {
  var n, a;
  const t = Ke.value.findIndex((r) => r.id === e);
  if (t <= 0)
    return 0;
  {
    const r = Ke.value[t - 1];
    return (a = (n = r == null ? void 0 : r.vnode.component) == null ? void 0 : n.exposed) == null ? void 0 : a.bottomOffset.value;
  }
};
function vc(e, t, n) {
  Oi(e) ? ce(e, (a, r) => {
    r == null || r.removeEventListener(t, n), a == null || a.addEventListener(t, n);
  }) : (It(() => {
    e.addEventListener(t, n);
  }), ki(() => {
    e.removeEventListener(t, n);
  }));
}
const pc = { class: "ws-message__content" }, hc = /* @__PURE__ */ G({
  name: "WsMessage",
  __name: "Message",
  props: {
    message: {},
    duration: { default: 1e3 },
    showClose: { type: Boolean },
    type: { default: "info" },
    offset: { default: 3 },
    messageId: {},
    onDestory: {}
  },
  setup(e, { expose: t }) {
    const n = H(!1), a = H(), r = H(0), o = D(() => mc(h.messageId) + h.offset), i = D(() => `top: ${o.value ?? 0}px`), s = D(() => o.value + r.value);
    t({
      bottomOffset: s
    });
    let l;
    function f() {
      if (h.duration == 0) {
        n.value = !0;
        return;
      }
      l = setTimeout(() => {
        n.value = !1;
      }, h.duration);
    }
    function u() {
      clearTimeout(l);
    }
    function d() {
      n.value = !1;
    }
    const h = e;
    function v(g) {
      g.code == "Escape" && (n.value = !1);
    }
    vc(document, "keydown", v), It(() => {
      n.value = !0, f();
    });
    const A = () => {
      var g;
      r.value = ((g = a.value) == null ? void 0 : g.offsetHeight) ?? 0;
    }, y = () => {
      h.onDestory();
    };
    return (g, c) => (T(), Ua(yn, {
      name: "fade-up",
      onAfterLeave: y,
      onEnter: A
    }, {
      default: Je(() => [
        bt(_("div", {
          class: Pe(["ws-message", {
            [`ws-message--${e.type}`]: e.type,
            "is-close": e.showClose
          }]),
          ref_key: "messageRef",
          ref: a,
          role: "alert",
          style: za(i.value),
          onMouseenter: u,
          onMouseleave: f
        }, [
          _("div", pc, [
            re(g.$slots, "default", {}, () => [
              Z(pn(li), { "v-node": e.message }, null, 8, ["v-node"])
            ], !0)
          ]),
          e.showClose ? (T(), M("div", {
            key: 0,
            class: "ws-message__close",
            onClick: Pi(d, ["stop"])
          }, [
            Z($e, { icon: "fa-solid fa-xmark" })
          ])) : qe("", !0)
        ], 38), [
          [xt, n.value]
        ])
      ]),
      _: 3
    }));
  }
}), fi = /* @__PURE__ */ Me(hc, [["__scopeId", "data-v-c603c8f2"]]), gc = [
  ue(pf),
  ue($e),
  ue(hf),
  ue(wf),
  ue(Pf),
  ue(si),
  ue(dc),
  ue(fi)
], xc = Ei(gc);
export {
  pf as WsButton,
  hf as WsCollapse,
  wf as WsCollapseItem,
  dc as WsDropDown,
  $e as WsIcon,
  fi as WsMessage,
  Pf as WsToast,
  si as WsToolTip,
  bc as createMessage,
  xc as default
};
