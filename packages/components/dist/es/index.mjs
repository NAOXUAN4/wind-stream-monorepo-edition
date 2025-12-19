import { defineComponent as G, computed as T, watch as ce, h as da, onMounted as It, createElementBlock as M, openBlock as $, normalizeStyle as zn, normalizeClass as Pe, createVNode as Z, unref as ma, normalizeProps as hi, guardReactiveProps as gi, ref as H, createCommentVNode as qe, createElementVNode as _, renderSlot as re, provide as yi, inject as bi, createTextVNode as va, toDisplayString as pa, Transition as ha, mergeProps as xi, toHandlers as wi, withCtx as Je, withDirectives as yt, vShow as bt, createBlock as Un, Teleport as Ai, onUnmounted as Hn, Fragment as Ya, renderList as Si, render as Xa, isRef as Oi, onBeforeUnmount as ki, withModifiers as Pi } from "vue";
function ue(e) {
  return e.install = (t) => {
    const a = e.name;
    a && t.component(a, e);
  }, e;
}
const Ii = (e = []) => ({
  install: (a) => {
    e.forEach((n) => a.use(n));
  },
  version: "0.0.1"
});
/*!
 * Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */
function Yt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function Ei(e) {
  if (Array.isArray(e)) return e;
}
function Ci(e) {
  if (Array.isArray(e)) return Yt(e);
}
function ji(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ti(e, t) {
  for (var a = 0; a < t.length; a++) {
    var n = t[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Vn(n.key), n);
  }
}
function $i(e, t, a) {
  return t && Ti(e.prototype, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function vt(e, t) {
  var a = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = ga(e)) || t) {
      a && (e = a);
      var n = 0, r = function() {
      };
      return {
        s: r,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
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
      a = a.call(e);
    },
    n: function() {
      var l = a.next();
      return i = l.done, l;
    },
    e: function(l) {
      s = !0, o = l;
    },
    f: function() {
      try {
        i || a.return == null || a.return();
      } finally {
        if (s) throw o;
      }
    }
  };
}
function k(e, t, a) {
  return (t = Vn(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Ni(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Fi(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n, r, o, i, s = [], l = !0, f = !1;
    try {
      if (o = (a = a.call(e)).next, t === 0) {
        if (Object(a) !== a) return;
        l = !1;
      } else for (; !(l = (n = o.call(a)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (u) {
      f = !0, r = u;
    } finally {
      try {
        if (!l && a.return != null && (i = a.return(), Object(i) !== i)) return;
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
function Ga(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ga(Object(a), !0).forEach(function(n) {
      k(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ga(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function Et(e, t) {
  return Ei(e) || Fi(e, t) || ga(e, t) || Di();
}
function ee(e) {
  return Ci(e) || Ni(e) || ga(e) || _i();
}
function Li(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Vn(e) {
  var t = Li(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function xt(e) {
  "@babel/helpers - typeof";
  return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xt(e);
}
function ga(e, t) {
  if (e) {
    if (typeof e == "string") return Yt(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? Yt(e, t) : void 0;
  }
}
var Ka = function() {
}, ya = {}, Yn = {}, Xn = null, Gn = {
  mark: Ka,
  measure: Ka
};
try {
  typeof window < "u" && (ya = window), typeof document < "u" && (Yn = document), typeof MutationObserver < "u" && (Xn = MutationObserver), typeof performance < "u" && (Gn = performance);
} catch {
}
var Mi = ya.navigator || {}, qa = Mi.userAgent, Ja = qa === void 0 ? "" : qa, de = ya, E = Yn, Qa = Xn, ct = Gn;
de.document;
var le = !!E.documentElement && !!E.head && typeof E.addEventListener == "function" && typeof E.createElement == "function", Kn = ~Ja.indexOf("MSIE") || ~Ja.indexOf("Trident/"), Mt, Ri = /fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/, Bi = /Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i, qn = {
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
}, Jn = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], N = "classic", tt = "duotone", Qn = "sharp", Zn = "sharp-duotone", er = "chisel", tr = "etch", ar = "jelly", nr = "jelly-duo", rr = "jelly-fill", ir = "notdog", or = "notdog-duo", sr = "slab", lr = "slab-press", fr = "thumbprint", ur = "utility", cr = "utility-duo", dr = "utility-fill", mr = "whiteboard", zi = "Classic", Ui = "Duotone", Hi = "Sharp", Vi = "Sharp Duotone", Yi = "Chisel", Xi = "Etch", Gi = "Jelly", Ki = "Jelly Duo", qi = "Jelly Fill", Ji = "Notdog", Qi = "Notdog Duo", Zi = "Slab", eo = "Slab Press", to = "Thumbprint", ao = "Utility", no = "Utility Duo", ro = "Utility Fill", io = "Whiteboard", vr = [N, tt, Qn, Zn, er, tr, ar, nr, rr, ir, or, sr, lr, fr, ur, cr, dr, mr];
Mt = {}, k(k(k(k(k(k(k(k(k(k(Mt, N, zi), tt, Ui), Qn, Hi), Zn, Vi), er, Yi), tr, Xi), ar, Gi), nr, Ki), rr, qi), ir, Ji), k(k(k(k(k(k(k(k(Mt, or, Qi), sr, Zi), lr, eo), fr, to), ur, ao), cr, no), dr, ro), mr, io);
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
}, pr = ["fak", "fa-kit", "fakd", "fa-kit-duotone"], Za = {
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
}, en = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
}, Rt, dt = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, bo = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone", "fa-thumbprint", "fa-whiteboard", "fa-notdog", "fa-notdog-duo", "fa-chisel", "fa-etch", "fa-jelly", "fa-jelly-fill", "fa-jelly-duo", "fa-slab", "fa-slab-press", "fa-utility", "fa-utility-duo", "fa-utility-fill"], xo = "classic", wo = "duotone", Ao = "sharp", So = "sharp-duotone", Oo = "chisel", ko = "etch", Po = "jelly", Io = "jelly-duo", Eo = "jelly-fill", Co = "notdog", jo = "notdog-duo", To = "slab", $o = "slab-press", No = "thumbprint", Fo = "utility", Do = "utility-duo", _o = "utility-fill", Lo = "whiteboard", Mo = "Classic", Ro = "Duotone", Bo = "Sharp", Wo = "Sharp Duotone", zo = "Chisel", Uo = "Etch", Ho = "Jelly", Vo = "Jelly Duo", Yo = "Jelly Fill", Xo = "Notdog", Go = "Notdog Duo", Ko = "Slab", qo = "Slab Press", Jo = "Thumbprint", Qo = "Utility", Zo = "Utility Duo", es = "Utility Fill", ts = "Whiteboard";
Rt = {}, k(k(k(k(k(k(k(k(k(k(Rt, xo, Mo), wo, Ro), Ao, Bo), So, Wo), Oo, zo), ko, Uo), Po, Ho), Io, Vo), Eo, Yo), Co, Xo), k(k(k(k(k(k(k(k(Rt, jo, Go), To, Ko), $o, qo), No, Jo), Fo, Qo), Do, Zo), _o, es), Lo, ts);
var as = "kit", ns = "kit-duotone", rs = "Kit", is = "Kit Duotone";
k(k({}, as, rs), ns, is);
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
}, Xt = {
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
}, ie = "___FONT_AWESOME___", Gt = 16, yr = "fa", br = "svg-inline--fa", Se = "data-fa-i2svg", Kt = "data-fa-pseudo-element", vs = "data-fa-pseudo-element-pending", ba = "data-prefix", xa = "data-icon", tn = "fontawesome-i2svg", ps = "async", hs = ["HTML", "HEAD", "STYLE", "SCRIPT"], xr = ["::before", "::after", ":before", ":after"], wr = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}();
function at(e) {
  return new Proxy(e, {
    get: function(a, n) {
      return n in a ? a[n] : a[N];
    }
  });
}
var Ar = m({}, qn);
Ar[N] = m(m(m(m({}, {
  "fa-duotone": "duotone"
}), qn[N]), Za.kit), Za["kit-duotone"]);
var gs = at(Ar), qt = m({}, fo);
qt[N] = m(m(m(m({}, {
  duotone: "fad"
}), qt[N]), en.kit), en["kit-duotone"]);
var an = at(qt), Jt = m({}, Xt);
Jt[N] = m(m({}, Jt[N]), yo.kit);
var wa = at(Jt), Qt = m({}, os);
Qt[N] = m(m({}, Qt[N]), ho.kit);
at(Qt);
var ys = Ri, Sr = "fa-layers-text", bs = Bi, xs = m({}, oo);
at(xs);
var ws = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Bt = Wi, As = [].concat(ee(uo), ee(ds)), He = de.FontAwesomeConfig || {};
function Ss(e) {
  var t = E.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function Os(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (E && typeof E.querySelector == "function") {
  var ks = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-search-pseudo-elements-warnings", "searchPseudoElementsWarnings"], ["data-search-pseudo-elements-full-scan", "searchPseudoElementsFullScan"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ks.forEach(function(e) {
    var t = Et(e, 2), a = t[0], n = t[1], r = Os(Ss(a));
    r != null && (He[n] = r);
  });
}
var Or = {
  styleDefault: "solid",
  familyDefault: N,
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
    set: function(a) {
      Te[e] = a, Ve.forEach(function(n) {
        return n(w);
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
    Te.cssPrefix = t, Ve.forEach(function(a) {
      return a(w);
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
var Ee = Gt, te = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function Is(e) {
  if (!(!e || !le)) {
    var t = E.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var a = E.head.childNodes, n = null, r = a.length - 1; r > -1; r--) {
      var o = a[r], i = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (n = o);
    }
    return E.head.insertBefore(t, n), e;
  }
}
var Es = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function nn() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Es[Math.random() * 62 | 0];
  return t;
}
function Le(e) {
  for (var t = [], a = (e || []).length >>> 0; a--; )
    t[a] = e[a];
  return t;
}
function Aa(e) {
  return e.classList ? Le(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function kr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Cs(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, '="').concat(kr(e[a]), '" ');
  }, "").trim();
}
function Ct(e) {
  return Object.keys(e || {}).reduce(function(t, a) {
    return t + "".concat(a, ": ").concat(e[a].trim(), ";");
  }, "");
}
function Sa(e) {
  return e.size !== te.size || e.x !== te.x || e.y !== te.y || e.rotate !== te.rotate || e.flipX || e.flipY;
}
function js(e) {
  var t = e.transform, a = e.containerWidth, n = e.iconWidth, r = {
    transform: "translate(".concat(a / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), i = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(i, " ").concat(s)
  }, f = {
    transform: "translate(".concat(n / 2 * -1, " -256)")
  };
  return {
    outer: r,
    inner: l,
    path: f
  };
}
function Ts(e) {
  var t = e.transform, a = e.width, n = a === void 0 ? Gt : a, r = e.height, o = r === void 0 ? Gt : r, i = "";
  return Kn ? i += "translate(".concat(t.x / Ee - n / 2, "em, ").concat(t.y / Ee - o / 2, "em) ") : i += "translate(calc(-50% + ".concat(t.x / Ee, "em), calc(-50% + ").concat(t.y / Ee, "em)) "), i += "scale(".concat(t.size / Ee * (t.flipX ? -1 : 1), ", ").concat(t.size / Ee * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
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
  var e = yr, t = br, a = w.cssPrefix, n = w.replacementClass, r = $s;
  if (a !== e || n !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), i = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    r = r.replace(o, ".".concat(a, "-")).replace(i, "--".concat(a, "-")).replace(s, ".".concat(n));
  }
  return r;
}
var rn = !1;
function Wt() {
  w.autoAddCss && !rn && (Is(Pr()), rn = !0);
}
var Ns = {
  mixout: function() {
    return {
      dom: {
        css: Pr,
        insertCss: Wt
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Wt();
      },
      beforeI2svg: function() {
        Wt();
      }
    };
  }
}, oe = de || {};
oe[ie] || (oe[ie] = {});
oe[ie].styles || (oe[ie].styles = {});
oe[ie].hooks || (oe[ie].hooks = {});
oe[ie].shims || (oe[ie].shims = []);
var Q = oe[ie], Ir = [], Er = function() {
  E.removeEventListener("DOMContentLoaded", Er), wt = 1, Ir.map(function(t) {
    return t();
  });
}, wt = !1;
le && (wt = (E.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(E.readyState), wt || E.addEventListener("DOMContentLoaded", Er));
function Fs(e) {
  le && (wt ? setTimeout(e, 0) : Ir.push(e));
}
function nt(e) {
  var t = e.tag, a = e.attributes, n = a === void 0 ? {} : a, r = e.children, o = r === void 0 ? [] : r;
  return typeof e == "string" ? kr(e) : "<".concat(t, " ").concat(Cs(n), ">").concat(o.map(nt).join(""), "</").concat(t, ">");
}
function on(e, t, a) {
  if (e && e[t] && e[t][a])
    return {
      prefix: t,
      iconName: a,
      icon: e[t][a]
    };
}
var zt = function(t, a, n, r) {
  var o = Object.keys(t), i = o.length, s = a, l, f, u;
  for (n === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = n); l < i; l++)
    f = o[l], u = s(u, t[f], f, t);
  return u;
};
function Cr(e) {
  return ee(e).length !== 1 ? null : e.codePointAt(0).toString(16);
}
function sn(e) {
  return Object.keys(e).reduce(function(t, a) {
    var n = e[a], r = !!n.icon;
    return r ? t[n.iconName] = n.icon : t[a] = n, t;
  }, {});
}
function Zt(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = a.skipHooks, r = n === void 0 ? !1 : n, o = sn(t);
  typeof Q.hooks.addPack == "function" && !r ? Q.hooks.addPack(e, sn(t)) : Q.styles[e] = m(m({}, Q.styles[e] || {}), o), e === "fas" && Zt("fa", t);
}
var Qe = Q.styles, Ds = Q.shims, jr = Object.keys(wa), _s = jr.reduce(function(e, t) {
  return e[t] = Object.keys(wa[t]), e;
}, {}), Oa = null, Tr = {}, $r = {}, Nr = {}, Fr = {}, Dr = {};
function Ls(e) {
  return ~As.indexOf(e);
}
function Ms(e, t) {
  var a = t.split("-"), n = a[0], r = a.slice(1).join("-");
  return n === e && r !== "" && !Ls(r) ? r : null;
}
var _r = function() {
  var t = function(o) {
    return zt(Qe, function(i, s, l) {
      return i[l] = zt(s, o, {}), i;
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
  var a = "far" in Qe || w.autoFetchSvg, n = zt(Ds, function(r, o) {
    var i = o[0], s = o[1], l = o[2];
    return s === "far" && !a && (s = "fas"), typeof i == "string" && (r.names[i] = {
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
  Nr = n.names, Fr = n.unicodes, Oa = jt(w.styleDefault, {
    family: w.familyDefault
  });
};
Ps(function(e) {
  Oa = jt(e.styleDefault, {
    family: w.familyDefault
  });
});
_r();
function ka(e, t) {
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
  var t = Fr[e], a = ka("fas", e);
  return t || (a ? {
    prefix: "fas",
    iconName: a
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function me() {
  return Oa;
}
var Mr = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function Ws(e) {
  var t = N, a = jr.reduce(function(n, r) {
    return n[r] = "".concat(w.cssPrefix, "-").concat(r), n;
  }, {});
  return vr.forEach(function(n) {
    (e.includes(a[n]) || e.some(function(r) {
      return _s[n].includes(r);
    })) && (t = n);
  }), t;
}
function jt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.family, n = a === void 0 ? N : a, r = gs[n][e];
  if (n === tt && !e)
    return "fad";
  var o = an[n][e] || an[n][r], i = e in Q.styles ? e : null, s = o || i || null;
  return s;
}
function zs(e) {
  var t = [], a = null;
  return e.forEach(function(n) {
    var r = Ms(w.cssPrefix, n);
    r ? a = r : n && t.push(n);
  }), {
    iconName: a,
    rest: t
  };
}
function ln(e) {
  return e.sort().filter(function(t, a, n) {
    return n.indexOf(t) === a;
  });
}
var fn = hr.concat(pr);
function Tt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.skipLookups, n = a === void 0 ? !1 : a, r = null, o = ln(e.filter(function(v) {
    return fn.includes(v);
  })), i = ln(e.filter(function(v) {
    return !fn.includes(v);
  })), s = o.filter(function(v) {
    return r = v, !Jn.includes(v);
  }), l = Et(s, 1), f = l[0], u = f === void 0 ? null : f, d = Ws(o), h = m(m({}, zs(i)), {}, {
    prefix: jt(u, {
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
  })), Us(n, r, h));
}
function Us(e, t, a) {
  var n = a.prefix, r = a.iconName;
  if (e || !n || !r)
    return {
      prefix: n,
      iconName: r
    };
  var o = t === "fa" ? Lr(r) : {}, i = we(n, r);
  return r = o.iconName || i || r, n = o.prefix || n, n === "far" && !Qe.far && Qe.fas && !w.autoFetchSvg && (n = "fas"), {
    prefix: n,
    iconName: r
  };
}
var Hs = vr.filter(function(e) {
  return e !== N || e !== tt;
}), Vs = Object.keys(Xt).filter(function(e) {
  return e !== N;
}).map(function(e) {
  return Object.keys(Xt[e]);
}).flat();
function Ys(e) {
  var t = e.values, a = e.family, n = e.canonical, r = e.givenPrefix, o = r === void 0 ? "" : r, i = e.styles, s = i === void 0 ? {} : i, l = e.config, f = l === void 0 ? {} : l, u = a === tt, d = t.includes("fa-duotone") || t.includes("fad"), h = f.familyDefault === "duotone", v = n.prefix === "fad" || n.prefix === "fa-duotone";
  if (!u && (d || h || v) && (n.prefix = "fad"), (t.includes("fa-brands") || t.includes("fab")) && (n.prefix = "fab"), !n.prefix && Hs.includes(a)) {
    var A = Object.keys(s).find(function(g) {
      return Vs.includes(g);
    });
    if (A || f.autoFetchSvg) {
      var y = lo.get(a).defaultShortPrefixId;
      n.prefix = y, n.iconName = we(n.prefix, n.iconName) || n.iconName;
    }
  }
  return (n.prefix === "fa" || o === "fa") && (n.prefix = me() || "fas"), n;
}
var Xs = /* @__PURE__ */ function() {
  function e() {
    ji(this, e), this.definitions = {};
  }
  return $i(e, [{
    key: "add",
    value: function() {
      for (var a = this, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      var i = r.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        a.definitions[s] = m(m({}, a.definitions[s] || {}), i[s]), Zt(s, i[s]);
        var l = wa[N][s];
        l && Zt(l, i[s]), _r();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(a, n) {
      var r = n.prefix && n.iconName && n.icon ? {
        0: n
      } : n;
      return Object.keys(r).map(function(o) {
        var i = r[o], s = i.prefix, l = i.iconName, f = i.icon, u = f[2];
        a[s] || (a[s] = {}), u.length > 0 && u.forEach(function(d) {
          typeof d == "string" && (a[s][d] = f);
        }), a[s][l] = f;
      }), a;
    }
  }]);
}(), un = [], Ce = {}, je = {}, Gs = Object.keys(je);
function Ks(e, t) {
  var a = t.mixoutsTo;
  return un = e, Ce = {}, Object.keys(je).forEach(function(n) {
    Gs.indexOf(n) === -1 && delete je[n];
  }), un.forEach(function(n) {
    var r = n.mixout ? n.mixout() : {};
    if (Object.keys(r).forEach(function(i) {
      typeof r[i] == "function" && (a[i] = r[i]), xt(r[i]) === "object" && Object.keys(r[i]).forEach(function(s) {
        a[i] || (a[i] = {}), a[i][s] = r[i][s];
      });
    }), n.hooks) {
      var o = n.hooks();
      Object.keys(o).forEach(function(i) {
        Ce[i] || (Ce[i] = []), Ce[i].push(o[i]);
      });
    }
    n.provides && n.provides(je);
  }), a;
}
function ea(e, t) {
  for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
    n[r - 2] = arguments[r];
  var o = Ce[e] || [];
  return o.forEach(function(i) {
    t = i.apply(null, [t].concat(n));
  }), t;
}
function Oe(e) {
  for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    a[n - 1] = arguments[n];
  var r = Ce[e] || [];
  r.forEach(function(o) {
    o.apply(null, a);
  });
}
function ve() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return je[e] ? je[e].apply(null, t) : void 0;
}
function ta(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, a = e.prefix || me();
  if (t)
    return t = we(a, t) || t, on(Rr.definitions, a, t) || on(Q.styles, a, t);
}
var Rr = new Xs(), qs = function() {
  w.autoReplaceSvg = !1, w.observeMutations = !1, Oe("noAuto");
}, Js = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return le ? (Oe("beforeI2svg", t), ve("pseudoElements2svg", t), ve("i2svg", t)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot;
    w.autoReplaceSvg === !1 && (w.autoReplaceSvg = !0), w.observeMutations = !0, Fs(function() {
      Zs({
        autoReplaceSvgRoot: a
      }), Oe("watch", t);
    });
  }
}, Qs = {
  icon: function(t) {
    if (t === null)
      return null;
    if (xt(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: we(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var a = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], n = jt(t[0]);
      return {
        prefix: n,
        iconName: we(n, a) || a
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(w.cssPrefix, "-")) > -1 || t.match(ys))) {
      var r = Tt(t.split(" "), {
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
  findIconDefinition: ta,
  toHtml: nt
}, Zs = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = t.autoReplaceSvgRoot, n = a === void 0 ? E : a;
  (Object.keys(Q.styles).length > 0 || w.autoFetchSvg) && le && w.autoReplaceSvg && U.dom.i2svg({
    node: n
  });
};
function $t(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(n) {
        return nt(n);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (le) {
        var n = E.createElement("div");
        return n.innerHTML = e.html, n.children;
      }
    }
  }), e;
}
function el(e) {
  var t = e.children, a = e.main, n = e.mask, r = e.attributes, o = e.styles, i = e.transform;
  if (Sa(i) && a.found && !n.found) {
    var s = a.width, l = a.height, f = {
      x: s / l / 2,
      y: 0.5
    };
    r.style = Ct(m(m({}, o), {}, {
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
  var t = e.prefix, a = e.iconName, n = e.children, r = e.attributes, o = e.symbol, i = o === !0 ? "".concat(t, "-").concat(w.cssPrefix, "-").concat(a) : o;
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
      children: n
    }]
  }];
}
function al(e) {
  var t = ["aria-label", "aria-labelledby", "title", "role"];
  return t.some(function(a) {
    return a in e;
  });
}
function Pa(e) {
  var t = e.icons, a = t.main, n = t.mask, r = e.prefix, o = e.iconName, i = e.transform, s = e.symbol, l = e.maskId, f = e.extra, u = e.watchable, d = u === void 0 ? !1 : u, h = n.found ? n : a, v = h.width, A = h.height, y = [w.replacementClass, o ? "".concat(w.cssPrefix, "-").concat(o) : ""].filter(function(S) {
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
  !al(f.attributes) && !f.attributes["aria-hidden"] && (g.attributes["aria-hidden"] = "true"), d && (g.attributes[Se] = "");
  var c = m(m({}, g), {}, {
    prefix: r,
    iconName: o,
    main: a,
    mask: n,
    maskId: l,
    transform: i,
    symbol: s,
    styles: m({}, f.styles)
  }), p = n.found && a.found ? ve("generateAbstractMask", c) || {
    children: [],
    attributes: {}
  } : ve("generateAbstractIcon", c) || {
    children: [],
    attributes: {}
  }, O = p.children, b = p.attributes;
  return c.children = O, c.attributes = b, s ? tl(c) : el(c);
}
function cn(e) {
  var t = e.content, a = e.width, n = e.height, r = e.transform, o = e.extra, i = e.watchable, s = i === void 0 ? !1 : i, l = m(m({}, o.attributes), {}, {
    class: o.classes.join(" ")
  });
  s && (l[Se] = "");
  var f = m({}, o.styles);
  Sa(r) && (f.transform = Ts({
    transform: r,
    width: a,
    height: n
  }), f["-webkit-transform"] = f.transform);
  var u = Ct(f);
  u.length > 0 && (l.style = u);
  var d = [];
  return d.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), d;
}
function nl(e) {
  var t = e.content, a = e.extra, n = m(m({}, a.attributes), {}, {
    class: a.classes.join(" ")
  }), r = Ct(a.styles);
  r.length > 0 && (n.style = r);
  var o = [];
  return o.push({
    tag: "span",
    attributes: n,
    children: [t]
  }), o;
}
var Ut = Q.styles;
function aa(e) {
  var t = e[0], a = e[1], n = e.slice(4), r = Et(n, 1), o = r[0], i = null;
  return Array.isArray(o) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(w.cssPrefix, "-").concat(Bt.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(Bt.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(w.cssPrefix, "-").concat(Bt.PRIMARY),
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
    height: a,
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
function na(e, t) {
  var a = t;
  return t === "fa" && w.styleDefault !== null && (t = me()), new Promise(function(n, r) {
    if (a === "fa") {
      var o = Lr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && Ut[t] && Ut[t][e]) {
      var i = Ut[t][e];
      return n(aa(i));
    }
    il(e, t), n(m(m({}, rl), {}, {
      icon: w.showMissingIcons && e ? ve("missingIconAbstract") || {} : {}
    }));
  });
}
var dn = function() {
}, ra = w.measurePerformance && ct && ct.mark && ct.measure ? ct : {
  mark: dn,
  measure: dn
}, Ue = 'FA "7.1.0"', ol = function(t) {
  return ra.mark("".concat(Ue, " ").concat(t, " begins")), function() {
    return Br(t);
  };
}, Br = function(t) {
  ra.mark("".concat(Ue, " ").concat(t, " ends")), ra.measure("".concat(Ue, " ").concat(t), "".concat(Ue, " ").concat(t, " begins"), "".concat(Ue, " ").concat(t, " ends"));
}, Ia = {
  begin: ol,
  end: Br
}, pt = function() {
};
function mn(e) {
  var t = e.getAttribute ? e.getAttribute(Se) : null;
  return typeof t == "string";
}
function sl(e) {
  var t = e.getAttribute ? e.getAttribute(ba) : null, a = e.getAttribute ? e.getAttribute(xa) : null;
  return t && a;
}
function ll(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(w.replacementClass);
}
function fl() {
  if (w.autoReplaceSvg === !0)
    return ht.replace;
  var e = ht[w.autoReplaceSvg];
  return e || ht.replace;
}
function ul(e) {
  return E.createElementNS("http://www.w3.org/2000/svg", e);
}
function cl(e) {
  return E.createElement(e);
}
function Wr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = t.ceFn, n = a === void 0 ? e.tag === "svg" ? ul : cl : a;
  if (typeof e == "string")
    return E.createTextNode(e);
  var r = n(e.tag);
  Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  });
  var o = e.children || [];
  return o.forEach(function(i) {
    r.appendChild(Wr(i, {
      ceFn: n
    }));
  }), r;
}
function dl(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var ht = {
  replace: function(t) {
    var a = t[0];
    if (a.parentNode)
      if (t[1].forEach(function(r) {
        a.parentNode.insertBefore(Wr(r), a);
      }), a.getAttribute(Se) === null && w.keepOriginalSource) {
        var n = E.createComment(dl(a));
        a.parentNode.replaceChild(n, a);
      } else
        a.remove();
  },
  nest: function(t) {
    var a = t[0], n = t[1];
    if (~Aa(a).indexOf(w.replacementClass))
      return ht.replace(t);
    var r = new RegExp("".concat(w.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      var o = n[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === w.replacementClass || l.match(r) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? a.removeAttribute("class") : a.setAttribute("class", o.toNode.join(" "));
    }
    var i = n.map(function(s) {
      return nt(s);
    }).join(`
`);
    a.setAttribute(Se, ""), a.innerHTML = i;
  }
};
function vn(e) {
  e();
}
function zr(e, t) {
  var a = typeof t == "function" ? t : pt;
  if (e.length === 0)
    a();
  else {
    var n = vn;
    w.mutateApproach === ps && (n = de.requestAnimationFrame || vn), n(function() {
      var r = fl(), o = Ia.begin("mutate");
      e.map(r), o(), a();
    });
  }
}
var Ea = !1;
function Ur() {
  Ea = !0;
}
function ia() {
  Ea = !1;
}
var At = null;
function pn(e) {
  if (Qa && w.observeMutations) {
    var t = e.treeCallback, a = t === void 0 ? pt : t, n = e.nodeCallback, r = n === void 0 ? pt : n, o = e.pseudoElementsCallback, i = o === void 0 ? pt : o, s = e.observeMutationsRoot, l = s === void 0 ? E : s;
    At = new Qa(function(f) {
      if (!Ea) {
        var u = me();
        Le(f).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !mn(d.addedNodes[0]) && (w.searchPseudoElements && i(d.target), a(d.target)), d.type === "attributes" && d.target.parentNode && w.searchPseudoElements && i([d.target], !0), d.type === "attributes" && mn(d.target) && ~ws.indexOf(d.attributeName))
            if (d.attributeName === "class" && sl(d.target)) {
              var h = Tt(Aa(d.target)), v = h.prefix, A = h.iconName;
              d.target.setAttribute(ba, v || u), A && d.target.setAttribute(xa, A);
            } else ll(d.target) && r(d.target);
        });
      }
    }), le && At.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function ml() {
  At && At.disconnect();
}
function vl(e) {
  var t = e.getAttribute("style"), a = [];
  return t && (a = t.split(";").reduce(function(n, r) {
    var o = r.split(":"), i = o[0], s = o.slice(1);
    return i && s.length > 0 && (n[i] = s.join(":").trim()), n;
  }, {})), a;
}
function pl(e) {
  var t = e.getAttribute("data-prefix"), a = e.getAttribute("data-icon"), n = e.innerText !== void 0 ? e.innerText.trim() : "", r = Tt(Aa(e));
  return r.prefix || (r.prefix = me()), t && a && (r.prefix = t, r.iconName = a), r.iconName && r.prefix || (r.prefix && n.length > 0 && (r.iconName = Rs(r.prefix, e.innerText) || ka(r.prefix, Cr(e.innerText))), !r.iconName && w.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (r.iconName = e.firstChild.data)), r;
}
function hl(e) {
  var t = Le(e.attributes).reduce(function(a, n) {
    return a.name !== "class" && a.name !== "style" && (a[n.name] = n.value), a;
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
function hn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, a = pl(e), n = a.iconName, r = a.prefix, o = a.rest, i = hl(e), s = ea("parseNodeAttributes", {}, e), l = t.styleParser ? vl(e) : [];
  return m({
    iconName: n,
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
  var t = w.autoReplaceSvg === "nest" ? hn(e, {
    styleParser: !1
  }) : hn(e);
  return ~t.extra.classes.indexOf(Sr) ? ve("generateLayersText", e, t) : ve("generateSvgReplacementMutation", e, t);
}
function bl() {
  return [].concat(ee(pr), ee(hr));
}
function gn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!le) return Promise.resolve();
  var a = E.documentElement.classList, n = function(d) {
    return a.add("".concat(tn, "-").concat(d));
  }, r = function(d) {
    return a.remove("".concat(tn, "-").concat(d));
  }, o = w.autoFetchSvg ? bl() : Jn.concat(Object.keys(yl));
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
    n("pending"), r("complete");
  else
    return Promise.resolve();
  var l = Ia.begin("onTree"), f = s.reduce(function(u, d) {
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
        n("active"), n("complete"), r("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch(function(h) {
      l(), d(h);
    });
  });
}
function xl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Hr(e).then(function(a) {
    a && zr([a], t);
  });
}
function wl(e) {
  return function(t) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = (t || {}).icon ? t : ta(t || {}), r = a.mask;
    return r && (r = (r || {}).icon ? r : ta(r || {})), e(n, m(m({}, a), {}, {
      mask: r
    }));
  };
}
var Al = function(t) {
  var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = a.transform, r = n === void 0 ? te : n, o = a.symbol, i = o === void 0 ? !1 : o, s = a.mask, l = s === void 0 ? null : s, f = a.maskId, u = f === void 0 ? null : f, d = a.classes, h = d === void 0 ? [] : d, v = a.attributes, A = v === void 0 ? {} : v, y = a.styles, g = y === void 0 ? {} : y;
  if (t) {
    var c = t.prefix, p = t.iconName, O = t.icon;
    return $t(m({
      type: "icon"
    }, t), function() {
      return Oe("beforeDOMElementCreation", {
        iconDefinition: t,
        params: a
      }), Pa({
        icons: {
          main: aa(O),
          mask: l ? aa(l.icon) : {
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
      mutationObserverCallbacks: function(a) {
        return a.treeCallback = gn, a.nodeCallback = xl, a;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(a) {
      var n = a.node, r = n === void 0 ? E : n, o = a.callback, i = o === void 0 ? function() {
      } : o;
      return gn(r, i);
    }, t.generateSvgReplacementMutation = function(a, n) {
      var r = n.iconName, o = n.prefix, i = n.transform, s = n.symbol, l = n.mask, f = n.maskId, u = n.extra;
      return new Promise(function(d, h) {
        Promise.all([na(r, o), l.iconName ? na(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var A = Et(v, 2), y = A[0], g = A[1];
          d([a, Pa({
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
    }, t.generateAbstractIcon = function(a) {
      var n = a.children, r = a.attributes, o = a.main, i = a.transform, s = a.styles, l = Ct(s);
      l.length > 0 && (r.style = l);
      var f;
      return Sa(i) && (f = ve("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(f || o.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, Ol = {
  mixout: function() {
    return {
      layer: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.classes, o = r === void 0 ? [] : r;
        return $t({
          type: "layer"
        }, function() {
          Oe("beforeDOMElementCreation", {
            assembler: a,
            params: n
          });
          var i = [];
          return a(function(s) {
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
      counter: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        n.title;
        var r = n.classes, o = r === void 0 ? [] : r, i = n.attributes, s = i === void 0 ? {} : i, l = n.styles, f = l === void 0 ? {} : l;
        return $t({
          type: "counter",
          content: a
        }, function() {
          return Oe("beforeDOMElementCreation", {
            content: a,
            params: n
          }), nl({
            content: a.toString(),
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
      text: function(a) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, o = r === void 0 ? te : r, i = n.classes, s = i === void 0 ? [] : i, l = n.attributes, f = l === void 0 ? {} : l, u = n.styles, d = u === void 0 ? {} : u;
        return $t({
          type: "text",
          content: a
        }, function() {
          return Oe("beforeDOMElementCreation", {
            content: a,
            params: n
          }), cn({
            content: a,
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
    t.generateLayersText = function(a, n) {
      var r = n.transform, o = n.extra, i = null, s = null;
      if (Kn) {
        var l = parseInt(getComputedStyle(a).fontSize, 10), f = a.getBoundingClientRect();
        i = f.width / l, s = f.height / l;
      }
      return Promise.resolve([a, cn({
        content: a.innerHTML,
        width: i,
        height: s,
        transform: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, Vr = new RegExp('"', "ug"), yn = [1105920, 1112319], bn = m(m(m(m({}, {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  }
}), so), ms), go), oa = Object.keys(bn).reduce(function(e, t) {
  return e[t.toLowerCase()] = bn[t], e;
}, {}), Il = Object.keys(oa).reduce(function(e, t) {
  var a = oa[t];
  return e[t] = a[900] || ee(Object.entries(a))[0][1], e;
}, {});
function El(e) {
  var t = e.replace(Vr, "");
  return Cr(ee(t)[0] || "");
}
function Cl(e) {
  var t = e.getPropertyValue("font-feature-settings").includes("ss01"), a = e.getPropertyValue("content"), n = a.replace(Vr, ""), r = n.codePointAt(0), o = r >= yn[0] && r <= yn[1], i = n.length === 2 ? n[0] === n[1] : !1;
  return o || i || t;
}
function jl(e, t) {
  var a = e.replace(/^['"]|['"]$/g, "").toLowerCase(), n = parseInt(t), r = isNaN(n) ? "normal" : n;
  return (oa[a] || {})[r] || Il[a];
}
function xn(e, t) {
  var a = "".concat(vs).concat(t.replace(":", "-"));
  return new Promise(function(n, r) {
    if (e.getAttribute(a) !== null)
      return n();
    var o = Le(e.children), i = o.filter(function(x) {
      return x.getAttribute(Kt) === t;
    })[0], s = de.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), f = l.match(bs), u = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (i && !f)
      return e.removeChild(i), n();
    if (f && d !== "none" && d !== "") {
      var h = s.getPropertyValue("content"), v = jl(l, u), A = El(h), y = f[0].startsWith("FontAwesome"), g = Cl(s), c = ka(v, A), p = c;
      if (y) {
        var O = Bs(A);
        O.iconName && O.prefix && (c = O.iconName, v = O.prefix);
      }
      if (c && !g && (!i || i.getAttribute(ba) !== v || i.getAttribute(xa) !== p)) {
        e.setAttribute(a, p), i && e.removeChild(i);
        var b = gl(), S = b.extra;
        S.attributes[Kt] = t, na(c, v).then(function(x) {
          var P = Pa(m(m({}, b), {}, {
            icons: {
              main: x,
              mask: Mr()
            },
            prefix: v,
            iconName: p,
            extra: S,
            watchable: !0
          })), I = E.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(I, e.firstChild) : e.appendChild(I), I.outerHTML = P.map(function(C) {
            return nt(C);
          }).join(`
`), e.removeAttribute(a), n();
        }).catch(r);
      } else
        n();
    } else
      n();
  });
}
function Tl(e) {
  return Promise.all([xn(e, "::before"), xn(e, "::after")]);
}
function $l(e) {
  return e.parentNode !== document.head && !~hs.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Kt) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
var Nl = function(t) {
  return !!t && xr.some(function(a) {
    return t.includes(a);
  });
}, Fl = function(t) {
  if (!t) return [];
  var a = /* @__PURE__ */ new Set(), n = t.split(/,(?![^()]*\))/).map(function(l) {
    return l.trim();
  });
  n = n.flatMap(function(l) {
    return l.includes("(") ? l : l.split(",").map(function(f) {
      return f.trim();
    });
  });
  var r = vt(n), o;
  try {
    for (r.s(); !(o = r.n()).done; ) {
      var i = o.value;
      if (Nl(i)) {
        var s = xr.reduce(function(l, f) {
          return l.replace(f, "");
        }, i);
        s !== "" && s !== "*" && a.add(s);
      }
    }
  } catch (l) {
    r.e(l);
  } finally {
    r.f();
  }
  return a;
};
function wn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (le) {
    var a;
    if (t)
      a = e;
    else if (w.searchPseudoElementsFullScan)
      a = e.querySelectorAll("*");
    else {
      var n = /* @__PURE__ */ new Set(), r = vt(document.styleSheets), o;
      try {
        for (r.s(); !(o = r.n()).done; ) {
          var i = o.value;
          try {
            var s = vt(i.cssRules), l;
            try {
              for (s.s(); !(l = s.n()).done; ) {
                var f = l.value, u = Fl(f.selectorText), d = vt(u), h;
                try {
                  for (d.s(); !(h = d.n()).done; ) {
                    var v = h.value;
                    n.add(v);
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
      if (!n.size) return;
      var A = Array.from(n).join(", ");
      try {
        a = e.querySelectorAll(A);
      } catch {
      }
    }
    return new Promise(function(y, g) {
      var c = Le(a).filter($l).map(Tl), p = Ia.begin("searchPseudoElements");
      Ur(), Promise.all(c).then(function() {
        p(), ia(), y();
      }).catch(function() {
        p(), ia(), g();
      });
    });
  }
}
var Dl = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(a) {
        return a.pseudoElementsCallback = wn, a;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(a) {
      var n = a.node, r = n === void 0 ? E : n;
      w.searchPseudoElements && wn(r);
    };
  }
}, An = !1, _l = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Ur(), An = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        pn(ea("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        ml();
      },
      watch: function(a) {
        var n = a.observeMutationsRoot;
        An ? ia() : pn(ea("mutationObserverCallbacks", {
          observeMutationsRoot: n
        }));
      }
    };
  }
}, Sn = function(t) {
  var a = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(n, r) {
    var o = r.toLowerCase().split("-"), i = o[0], s = o.slice(1).join("-");
    if (i && s === "h")
      return n.flipX = !0, n;
    if (i && s === "v")
      return n.flipY = !0, n;
    if (s = parseFloat(s), isNaN(s))
      return n;
    switch (i) {
      case "grow":
        n.size = n.size + s;
        break;
      case "shrink":
        n.size = n.size - s;
        break;
      case "left":
        n.x = n.x - s;
        break;
      case "right":
        n.x = n.x + s;
        break;
      case "up":
        n.y = n.y - s;
        break;
      case "down":
        n.y = n.y + s;
        break;
      case "rotate":
        n.rotate = n.rotate + s;
        break;
    }
    return n;
  }, a);
}, Ll = {
  mixout: function() {
    return {
      parse: {
        transform: function(a) {
          return Sn(a);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-transform");
        return r && (a.transform = Sn(r)), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(a) {
      var n = a.main, r = a.transform, o = a.containerWidth, i = a.iconWidth, s = {
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
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: m(m({}, n.icon.attributes), v.path)
          }]
        }]
      };
    };
  }
}, Ht = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function On(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Ml(e) {
  return e.tag === "g" ? e.children : [e];
}
var Rl = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-mask"), o = r ? Tt(r.split(" ").map(function(i) {
          return i.trim();
        })) : Mr();
        return o.prefix || (o.prefix = me()), a.mask = o, a.maskId = n.getAttribute("data-fa-mask-id"), a;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(a) {
      var n = a.children, r = a.attributes, o = a.main, i = a.mask, s = a.maskId, l = a.transform, f = o.width, u = o.icon, d = i.width, h = i.icon, v = js({
        transform: l,
        containerWidth: d,
        iconWidth: f
      }), A = {
        tag: "rect",
        attributes: m(m({}, Ht), {}, {
          fill: "white"
        })
      }, y = u.children ? {
        children: u.children.map(On)
      } : {}, g = {
        tag: "g",
        attributes: m({}, v.inner),
        children: [On(m({
          tag: u.tag,
          attributes: m(m({}, u.attributes), v.path)
        }, y))]
      }, c = {
        tag: "g",
        attributes: m({}, v.outer),
        children: [g]
      }, p = "mask-".concat(s || nn()), O = "clip-".concat(s || nn()), b = {
        tag: "mask",
        attributes: m(m({}, Ht), {}, {
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
      return n.push(S, {
        tag: "rect",
        attributes: m({
          fill: "currentColor",
          "clip-path": "url(#".concat(O, ")"),
          mask: "url(#".concat(p, ")")
        }, Ht)
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Bl = {
  provides: function(t) {
    var a = !1;
    de.matchMedia && (a = de.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var n = [], r = {
        fill: "currentColor"
      }, o = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
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
      return a || s.children.push({
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
      }), n.push(s), n.push({
        tag: "path",
        attributes: m(m({}, r), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: a ? [] : [{
          tag: "animate",
          attributes: m(m({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), a || n.push({
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
        children: n
      };
    };
  }
}, Wl = {
  hooks: function() {
    return {
      parseNodeAttributes: function(a, n) {
        var r = n.getAttribute("data-fa-symbol"), o = r === null ? !1 : r === "" ? !0 : r;
        return a.symbol = o, a;
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
var St = U.parse;
U.findIconDefinition;
U.toHtml;
var Hl = U.icon;
U.layer;
var Vl = U.text;
U.counter;
function sa(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
  return n;
}
function Yl(e) {
  if (Array.isArray(e)) return sa(e);
}
function D(e, t, a) {
  return (t = Ql(t)) in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a, e;
}
function Xl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Gl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kn(e, t) {
  var a = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), a.push.apply(a, n);
  }
  return a;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kn(Object(a), !0).forEach(function(n) {
      D(e, n, a[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : kn(Object(a)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
    });
  }
  return e;
}
function Kl(e, t) {
  if (e == null) return {};
  var a, n, r = ql(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) a = o[n], t.indexOf(a) === -1 && {}.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
  }
  return r;
}
function ql(e, t) {
  if (e == null) return {};
  var a = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    a[n] = e[n];
  }
  return a;
}
function la(e) {
  return Yl(e) || Xl(e) || Zl(e) || Gl();
}
function Jl(e, t) {
  if (typeof e != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var n = a.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ql(e) {
  var t = Jl(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Ot(e) {
  "@babel/helpers - typeof";
  return Ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function Zl(e, t) {
  if (e) {
    if (typeof e == "string") return sa(e, t);
    var a = {}.toString.call(e).slice(8, -1);
    return a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set" ? Array.from(e) : a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? sa(e, t) : void 0;
  }
}
function Ye(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? D({}, e, t) : {};
}
function ef(e) {
  var t, a = (t = {
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
  }, D(D(D(D(D(D(D(D(D(D(t, "fa-".concat(e.size), e.size !== null), "fa-rotate-".concat(e.rotation), e.rotation !== null), "fa-rotate-by", e.rotateBy), "fa-pull-".concat(e.pull), e.pull !== null), "fa-swap-opacity", e.swapOpacity), "fa-bounce", e.bounce), "fa-shake", e.shake), "fa-beat", e.beat), "fa-fade", e.fade), "fa-beat-fade", e.beatFade), D(D(D(D(t, "fa-flash", e.flash), "fa-spin-pulse", e.spinPulse), "fa-spin-reverse", e.spinReverse), "fa-width-auto", e.widthAuto));
  return Object.keys(a).map(function(n) {
    return a[n] ? n : null;
  }).filter(function(n) {
    return n;
  });
}
var tf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xr = { exports: {} };
(function(e) {
  (function(t) {
    var a = function(c, p, O) {
      if (!f(p) || d(p) || h(p) || v(p) || l(p))
        return p;
      var b, S = 0, x = 0;
      if (u(p))
        for (b = [], x = p.length; S < x; S++)
          b.push(a(c, p[S], O));
      else {
        b = {};
        for (var P in p)
          Object.prototype.hasOwnProperty.call(p, P) && (b[c(P, O)] = a(c, p[P], O));
      }
      return b;
    }, n = function(c, p) {
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
      return n(c, p).toLowerCase();
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
        return a(y(r, p), c);
      },
      decamelizeKeys: function(c, p) {
        return a(y(i, p), c, p);
      },
      pascalizeKeys: function(c, p) {
        return a(y(o, p), c);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    e.exports ? e.exports = g : t.humps = g;
  })(tf);
})(Xr);
var af = Xr.exports, nf = ["class", "style"];
function rf(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, a) {
    var n = a.indexOf(":"), r = af.camelize(a.slice(0, n)), o = a.slice(n + 1).trim();
    return t[r] = o, t;
  }, {});
}
function of(e) {
  return e.split(/\s+/).reduce(function(t, a) {
    return t[a] = !0, t;
  }, {});
}
function Ca(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof e == "string")
    return e;
  var n = (e.children || []).map(function(l) {
    return Ca(l);
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
  a.class;
  var o = a.style, i = o === void 0 ? {} : o, s = Kl(a, nf);
  return da(e.tag, J(J(J({}, t), {}, {
    class: r.class,
    style: J(J({}, r.style), i)
  }, r.attrs), s), n);
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
function Pn(e) {
  if (e && Ot(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (St.icon)
    return St.icon(e);
  if (e === null)
    return null;
  if (Ot(e) === "object" && e.prefix && e.iconName)
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
  setup: function(t, a) {
    var n = a.attrs, r = T(function() {
      return Pn(t.icon);
    }), o = T(function() {
      return Ye("classes", ef(t));
    }), i = T(function() {
      return Ye("transform", typeof t.transform == "string" ? St.transform(t.transform) : t.transform);
    }), s = T(function() {
      return Ye("mask", Pn(t.mask));
    }), l = T(function() {
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
    var f = T(function() {
      return l.value ? Ca(l.value.abstract[0], {}, n) : null;
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
  setup: function(t, a) {
    var n = a.slots, r = Yr.familyPrefix, o = T(function() {
      return ["".concat(r, "-layers")].concat(la(t.fixedWidth ? ["".concat(r, "-fw")] : []));
    });
    return function() {
      return da("div", {
        class: o.value
      }, n.default ? n.default() : []);
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
  setup: function(t, a) {
    var n = a.attrs, r = Yr.familyPrefix, o = T(function() {
      return Ye("classes", [].concat(la(t.counter ? ["".concat(r, "-layers-counter")] : []), la(t.position ? ["".concat(r, "-layers-").concat(t.position)] : [])));
    }), i = T(function() {
      return Ye("transform", typeof t.transform == "string" ? St.transform(t.transform) : t.transform);
    }), s = T(function() {
      var f = Vl(t.value.toString(), J(J({}, i.value), o.value)), u = f.abstract;
      return t.counter && (u[0].attributes.class = u[0].attributes.class.replace("fa-layers-text", "")), u[0];
    }), l = T(function() {
      return Ca(s.value, {}, n);
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
const In = /* @__PURE__ */ new Set(), cf = {
  // solid图标
  "fa-solid fa-xmark": ff,
  // regular图标
  "fa-lemon fa-regular": uf
}, En = (e) => {
  if (typeof e == "string") {
    if (In.has(e))
      return;
    const t = cf[e];
    t ? (Ul.add(t), In.add(e)) : console.warn(`Icon ${e} not found in built-in icons. Please import it manually.`);
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
    ce(() => t.icon, (n) => {
      n && En(n);
    }, { immediate: !0 }), It(() => {
      t.icon && En(t.icon);
    });
    const a = T(() => t.color ? { color: t.color } : {});
    return (n, r) => ($(), M("i", {
      class: Pe(["ws-icon", {
        [`ws-icon--${e.type}`]: e.type
      }]),
      style: zn(a.value)
    }, [
      Z(ma(lf), hi(gi(n.$props)), null, 16)
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
  setup(e, { expose: t, emit: a }) {
    const n = a, r = H();
    t({
      ref: r
    });
    const o = (i) => {
      n("click", i);
    };
    return (i, s) => ($(), M("button", {
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
      e.icon ? ($(), M("span", mf, [
        Z($e, { icon: e.icon }, null, 8, ["icon"])
      ])) : qe("", !0),
      _("span", null, [
        re(i.$slots, "default", {}, void 0, !0)
      ])
    ], 10, df));
  }
}), Me = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, r] of t)
    a[n] = r;
  return a;
}, pf = /* @__PURE__ */ Me(vf, [["__scopeId", "data-v-db5c0089"]]), Kr = Symbol("collapseItemProvider"), hf = /* @__PURE__ */ G({
  name: "WsCollapse",
  __name: "Collapse",
  props: {
    modelValue: {},
    accordion: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change:modelValue"],
  setup(e, { emit: t }) {
    const a = e, n = t, r = H(a.modelValue ?? []), o = (i) => {
      if (a.accordion && r.value.length > 0) {
        r.value.indexOf(i) > -1 ? r.value = [] : (r.value = [], r.value.push(i)), n("update:modelValue", r.value), n("change:modelValue", r.value);
        return;
      }
      const s = r.value.indexOf(i);
      s > -1 ? r.value.splice(s, 1) : r.value.push(i), n("update:modelValue", r.value), n("change:modelValue", r.value);
    };
    return ce(() => a.modelValue, () => {
      r.value = a.modelValue ?? [];
    }), yi(Kr, {
      handleItemClick: o,
      ItemActivateList: r
    }), (i, s) => ($(), M("div", {
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
    const t = bi(Kr), a = e, n = T(() => t == null ? void 0 : t.ItemActivateList.value.includes(a.name)), r = () => {
      a.disabled || t == null || t.handleItemClick(a.name);
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
    return (i, s) => ($(), M("div", {
      class: Pe(["ws-collapse-item", {
        "is-disabled": e.disabled,
        "is-active": n.value
      }])
    }, [
      _("div", {
        class: "ws-collapse__header",
        id: `collapse-item-header-${e.name}`,
        onClick: r
      }, [
        re(i.$slots, "title", {}, () => [
          va(pa(e.title), 1)
        ], !0),
        _("div", yf, [
          Z($e, { icon: "fa-solid fa-angle-down" })
        ])
      ], 8, gf),
      Z(ha, xi({ name: "slide" }, wi(o)), {
        default: Je(() => [
          yt(_("div", null, [
            _("div", {
              class: "ws-collapse__content",
              id: `collapse-item-content-${e.name}`
            }, [
              re(i.$slots, "content", {}, void 0, !0)
            ], 8, bf)
          ], 512), [
            [bt, n.value]
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
    const a = e, n = H(a.modelValue), r = t, o = function() {
      n.value = !1, r("update:modelValue", n.value), r("change:modelValue", n.value), console.log(n.value);
    };
    return ce(() => a.modelValue, () => n.value = a.modelValue), ce(() => n.value, () => {
      n.value && setTimeout(() => {
        o();
      }, a.disapper);
    }), (i, s) => ($(), Un(Ai, { to: "body" }, [
      _("div", {
        class: Pe(["ws-toast", {
          [`ws-toast--${e.type}`]: e.type,
          "is-active": n.value
        }])
      }, [
        e.icon ? ($(), M("div", Af, [
          Z($e, {
            icon: e.icon,
            type: e.type
          }, null, 8, ["icon", "type"])
        ])) : qe("", !0),
        e.context ? ($(), M("span", Sf, pa(e.context), 1)) : ($(), M("span", Of, [
          re(i.$slots, "default", {}, void 0, !0)
        ])),
        e.closable ? ($(), M("span", {
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
var R = "top", Y = "bottom", X = "right", B = "left", ja = "auto", rt = [R, Y, X, B], Ne = "start", Ze = "end", If = "clippingParents", qr = "viewport", We = "popper", Ef = "reference", Cn = /* @__PURE__ */ rt.reduce(function(e, t) {
  return e.concat([t + "-" + Ne, t + "-" + Ze]);
}, []), Jr = /* @__PURE__ */ [].concat(rt, [ja]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ne, t + "-" + Ze]);
}, []), Cf = "beforeRead", jf = "read", Tf = "afterRead", $f = "beforeMain", Nf = "main", Ff = "afterMain", Df = "beforeWrite", _f = "write", Lf = "afterWrite", Mf = [Cf, jf, Tf, $f, Nf, Ff, Df, _f, Lf];
function ne(e) {
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
function Ta(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = z(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rf(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(a) {
    var n = t.styles[a] || {}, r = t.attributes[a] || {}, o = t.elements[a];
    !V(o) || !ne(o) || (Object.assign(o.style, n), Object.keys(r).forEach(function(i) {
      var s = r[i];
      s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function Bf(e) {
  var t = e.state, a = {
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
  return Object.assign(t.elements.popper.style, a.popper), t.styles = a, t.elements.arrow && Object.assign(t.elements.arrow.style, a.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var r = t.elements[n], o = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : a[n]), s = i.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !V(r) || !ne(r) || (Object.assign(r.style, s), Object.keys(o).forEach(function(l) {
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
function ae(e) {
  return e.split("-")[0];
}
var Ae = Math.max, kt = Math.min, Fe = Math.round;
function fa() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Qr() {
  return !/^((?!chrome|android).)*safari/i.test(fa());
}
function De(e, t, a) {
  t === void 0 && (t = !1), a === void 0 && (a = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  t && V(e) && (r = e.offsetWidth > 0 && Fe(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Fe(n.height) / e.offsetHeight || 1);
  var i = ke(e) ? z(e) : window, s = i.visualViewport, l = !Qr() && a, f = (n.left + (l && s ? s.offsetLeft : 0)) / r, u = (n.top + (l && s ? s.offsetTop : 0)) / o, d = n.width / r, h = n.height / o;
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
function $a(e) {
  var t = De(e), a = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - a) <= 1 && (a = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: a,
    height: n
  };
}
function Zr(e, t) {
  var a = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (a && Ta(a)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function se(e) {
  return z(e).getComputedStyle(e);
}
function zf(e) {
  return ["table", "td", "th"].indexOf(ne(e)) >= 0;
}
function pe(e) {
  return ((ke(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Nt(e) {
  return ne(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Ta(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    pe(e)
  );
}
function jn(e) {
  return !V(e) || // https://github.com/popperjs/popper-core/issues/837
  se(e).position === "fixed" ? null : e.offsetParent;
}
function Uf(e) {
  var t = /firefox/i.test(fa()), a = /Trident/i.test(fa());
  if (a && V(e)) {
    var n = se(e);
    if (n.position === "fixed")
      return null;
  }
  var r = Nt(e);
  for (Ta(r) && (r = r.host); V(r) && ["html", "body"].indexOf(ne(r)) < 0; ) {
    var o = se(r);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function it(e) {
  for (var t = z(e), a = jn(e); a && zf(a) && se(a).position === "static"; )
    a = jn(a);
  return a && (ne(a) === "html" || ne(a) === "body" && se(a).position === "static") ? t : a || Uf(e) || t;
}
function Na(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Xe(e, t, a) {
  return Ae(e, kt(t, a));
}
function Hf(e, t, a) {
  var n = Xe(e, t, a);
  return n > a ? a : n;
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
function ai(e, t) {
  return t.reduce(function(a, n) {
    return a[n] = e, a;
  }, {});
}
var Vf = function(t, a) {
  return t = typeof t == "function" ? t(Object.assign({}, a.rects, {
    placement: a.placement
  })) : t, ti(typeof t != "number" ? t : ai(t, rt));
};
function Yf(e) {
  var t, a = e.state, n = e.name, r = e.options, o = a.elements.arrow, i = a.modifiersData.popperOffsets, s = ae(a.placement), l = Na(s), f = [B, X].indexOf(s) >= 0, u = f ? "height" : "width";
  if (!(!o || !i)) {
    var d = Vf(r.padding, a), h = $a(o), v = l === "y" ? R : B, A = l === "y" ? Y : X, y = a.rects.reference[u] + a.rects.reference[l] - i[l] - a.rects.popper[u], g = i[l] - a.rects.reference[l], c = it(o), p = c ? l === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, O = y / 2 - g / 2, b = d[v], S = p - h[u] - d[A], x = p / 2 - h[u] / 2 + O, P = Xe(b, x, S), I = l;
    a.modifiersData[n] = (t = {}, t[I] = P, t.centerOffset = P - x, t);
  }
}
function Xf(e) {
  var t = e.state, a = e.options, n = a.element, r = n === void 0 ? "[data-popper-arrow]" : n;
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
  var a = e.x, n = e.y, r = t.devicePixelRatio || 1;
  return {
    x: Fe(a * r) / r || 0,
    y: Fe(n * r) / r || 0
  };
}
function Tn(e) {
  var t, a = e.popper, n = e.popperRect, r = e.placement, o = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, f = e.adaptive, u = e.roundOffsets, d = e.isFixed, h = i.x, v = h === void 0 ? 0 : h, A = i.y, y = A === void 0 ? 0 : A, g = typeof u == "function" ? u({
    x: v,
    y
  }) : {
    x: v,
    y
  };
  v = g.x, y = g.y;
  var c = i.hasOwnProperty("x"), p = i.hasOwnProperty("y"), O = B, b = R, S = window;
  if (f) {
    var x = it(a), P = "clientHeight", I = "clientWidth";
    if (x === z(a) && (x = pe(a), se(x).position !== "static" && s === "absolute" && (P = "scrollHeight", I = "scrollWidth")), x = x, r === R || (r === B || r === X) && o === Ze) {
      b = Y;
      var C = d && x === S && S.visualViewport ? S.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        x[P]
      );
      y -= C - n.height, y *= l ? 1 : -1;
    }
    if (r === B || (r === R || r === Y) && o === Ze) {
      O = X;
      var j = d && x === S && S.visualViewport ? S.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        x[I]
      );
      v -= j - n.width, v *= l ? 1 : -1;
    }
  }
  var F = Object.assign({
    position: s
  }, f && Kf), K = u === !0 ? qf({
    x: v,
    y
  }, z(a)) : {
    x: v,
    y
  };
  if (v = K.x, y = K.y, l) {
    var L;
    return Object.assign({}, F, (L = {}, L[b] = p ? "0" : "", L[O] = c ? "0" : "", L.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + y + "px)" : "translate3d(" + v + "px, " + y + "px, 0)", L));
  }
  return Object.assign({}, F, (t = {}, t[b] = p ? y + "px" : "", t[O] = c ? v + "px" : "", t.transform = "", t));
}
function Jf(e) {
  var t = e.state, a = e.options, n = a.gpuAcceleration, r = n === void 0 ? !0 : n, o = a.adaptive, i = o === void 0 ? !0 : o, s = a.roundOffsets, l = s === void 0 ? !0 : s, f = {
    placement: ae(t.placement),
    variation: _e(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: r,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Tn(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Tn(Object.assign({}, f, {
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
var mt = {
  passive: !0
};
function Zf(e) {
  var t = e.state, a = e.instance, n = e.options, r = n.scroll, o = r === void 0 ? !0 : r, i = n.resize, s = i === void 0 ? !0 : i, l = z(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && f.forEach(function(u) {
    u.addEventListener("scroll", a.update, mt);
  }), s && l.addEventListener("resize", a.update, mt), function() {
    o && f.forEach(function(u) {
      u.removeEventListener("scroll", a.update, mt);
    }), s && l.removeEventListener("resize", a.update, mt);
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
function gt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return tu[t];
  });
}
var au = {
  start: "end",
  end: "start"
};
function $n(e) {
  return e.replace(/start|end/g, function(t) {
    return au[t];
  });
}
function Fa(e) {
  var t = z(e), a = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: a,
    scrollTop: n
  };
}
function Da(e) {
  return De(pe(e)).left + Fa(e).scrollLeft;
}
function nu(e, t) {
  var a = z(e), n = pe(e), r = a.visualViewport, o = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (r) {
    o = r.width, i = r.height;
    var f = Qr();
    (f || !f && t === "fixed") && (s = r.offsetLeft, l = r.offsetTop);
  }
  return {
    width: o,
    height: i,
    x: s + Da(e),
    y: l
  };
}
function ru(e) {
  var t, a = pe(e), n = Fa(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, o = Ae(a.scrollWidth, a.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), i = Ae(a.scrollHeight, a.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -n.scrollLeft + Da(e), l = -n.scrollTop;
  return se(r || a).direction === "rtl" && (s += Ae(a.clientWidth, r ? r.clientWidth : 0) - o), {
    width: o,
    height: i,
    x: s,
    y: l
  };
}
function _a(e) {
  var t = se(e), a = t.overflow, n = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(a + r + n);
}
function ni(e) {
  return ["html", "body", "#document"].indexOf(ne(e)) >= 0 ? e.ownerDocument.body : V(e) && _a(e) ? e : ni(Nt(e));
}
function Ge(e, t) {
  var a;
  t === void 0 && (t = []);
  var n = ni(e), r = n === ((a = e.ownerDocument) == null ? void 0 : a.body), o = z(n), i = r ? [o].concat(o.visualViewport || [], _a(n) ? n : []) : n, s = t.concat(i);
  return r ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(Ge(Nt(i)))
  );
}
function ua(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function iu(e, t) {
  var a = De(e, !1, t === "fixed");
  return a.top = a.top + e.clientTop, a.left = a.left + e.clientLeft, a.bottom = a.top + e.clientHeight, a.right = a.left + e.clientWidth, a.width = e.clientWidth, a.height = e.clientHeight, a.x = a.left, a.y = a.top, a;
}
function Nn(e, t, a) {
  return t === qr ? ua(nu(e, a)) : ke(t) ? iu(t, a) : ua(ru(pe(e)));
}
function ou(e) {
  var t = Ge(Nt(e)), a = ["absolute", "fixed"].indexOf(se(e).position) >= 0, n = a && V(e) ? it(e) : e;
  return ke(n) ? t.filter(function(r) {
    return ke(r) && Zr(r, n) && ne(r) !== "body";
  }) : [];
}
function su(e, t, a, n) {
  var r = t === "clippingParents" ? ou(e) : [].concat(t), o = [].concat(r, [a]), i = o[0], s = o.reduce(function(l, f) {
    var u = Nn(e, f, n);
    return l.top = Ae(u.top, l.top), l.right = kt(u.right, l.right), l.bottom = kt(u.bottom, l.bottom), l.left = Ae(u.left, l.left), l;
  }, Nn(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function ri(e) {
  var t = e.reference, a = e.element, n = e.placement, r = n ? ae(n) : null, o = n ? _e(n) : null, i = t.x + t.width / 2 - a.width / 2, s = t.y + t.height / 2 - a.height / 2, l;
  switch (r) {
    case R:
      l = {
        x: i,
        y: t.y - a.height
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
        x: t.x - a.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var f = r ? Na(r) : null;
  if (f != null) {
    var u = f === "y" ? "height" : "width";
    switch (o) {
      case Ne:
        l[f] = l[f] - (t[u] / 2 - a[u] / 2);
        break;
      case Ze:
        l[f] = l[f] + (t[u] / 2 - a[u] / 2);
        break;
    }
  }
  return l;
}
function et(e, t) {
  t === void 0 && (t = {});
  var a = t, n = a.placement, r = n === void 0 ? e.placement : n, o = a.strategy, i = o === void 0 ? e.strategy : o, s = a.boundary, l = s === void 0 ? If : s, f = a.rootBoundary, u = f === void 0 ? qr : f, d = a.elementContext, h = d === void 0 ? We : d, v = a.altBoundary, A = v === void 0 ? !1 : v, y = a.padding, g = y === void 0 ? 0 : y, c = ti(typeof g != "number" ? g : ai(g, rt)), p = h === We ? Ef : We, O = e.rects.popper, b = e.elements[A ? p : h], S = su(ke(b) ? b : b.contextElement || pe(e.elements.popper), l, u, i), x = De(e.elements.reference), P = ri({
    reference: x,
    element: O,
    placement: r
  }), I = ua(Object.assign({}, O, P)), C = h === We ? I : x, j = {
    top: S.top - C.top + c.top,
    bottom: C.bottom - S.bottom + c.bottom,
    left: S.left - C.left + c.left,
    right: C.right - S.right + c.right
  }, F = e.modifiersData.offset;
  if (h === We && F) {
    var K = F[r];
    Object.keys(j).forEach(function(L) {
      var he = [X, Y].indexOf(L) >= 0 ? 1 : -1, ge = [R, Y].indexOf(L) >= 0 ? "y" : "x";
      j[L] += K[ge] * he;
    });
  }
  return j;
}
function lu(e, t) {
  t === void 0 && (t = {});
  var a = t, n = a.placement, r = a.boundary, o = a.rootBoundary, i = a.padding, s = a.flipVariations, l = a.allowedAutoPlacements, f = l === void 0 ? Jr : l, u = _e(n), d = u ? s ? Cn : Cn.filter(function(A) {
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
    })[ae(y)], A;
  }, {});
  return Object.keys(v).sort(function(A, y) {
    return v[A] - v[y];
  });
}
function fu(e) {
  if (ae(e) === ja)
    return [];
  var t = gt(e);
  return [$n(e), t, $n(t)];
}
function uu(e) {
  var t = e.state, a = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var r = a.mainAxis, o = r === void 0 ? !0 : r, i = a.altAxis, s = i === void 0 ? !0 : i, l = a.fallbackPlacements, f = a.padding, u = a.boundary, d = a.rootBoundary, h = a.altBoundary, v = a.flipVariations, A = v === void 0 ? !0 : v, y = a.allowedAutoPlacements, g = t.options.placement, c = ae(g), p = c === g, O = l || (p || !A ? [gt(g)] : fu(g)), b = [g].concat(O).reduce(function(Ie, fe) {
      return Ie.concat(ae(fe) === ja ? lu(t, {
        placement: fe,
        boundary: u,
        rootBoundary: d,
        padding: f,
        flipVariations: A,
        allowedAutoPlacements: y
      }) : fe);
    }, []), S = t.rects.reference, x = t.rects.popper, P = /* @__PURE__ */ new Map(), I = !0, C = b[0], j = 0; j < b.length; j++) {
      var F = b[j], K = ae(F), L = _e(F) === Ne, he = [R, Y].indexOf(K) >= 0, ge = he ? "width" : "height", W = et(t, {
        placement: F,
        boundary: u,
        rootBoundary: d,
        altBoundary: h,
        padding: f
      }), q = he ? L ? X : B : L ? Y : R;
      S[ge] > x[ge] && (q = gt(q));
      var ot = gt(q), ye = [];
      if (o && ye.push(W[K] <= 0), s && ye.push(W[q] <= 0, W[ot] <= 0), ye.every(function(Ie) {
        return Ie;
      })) {
        C = F, I = !1;
        break;
      }
      P.set(F, ye);
    }
    if (I)
      for (var st = A ? 3 : 1, Ft = function(fe) {
        var Be = b.find(function(ft) {
          var be = P.get(ft);
          if (be)
            return be.slice(0, fe).every(function(Dt) {
              return Dt;
            });
        });
        if (Be)
          return C = Be, "break";
      }, Re = st; Re > 0; Re--) {
        var lt = Ft(Re);
        if (lt === "break") break;
      }
    t.placement !== C && (t.modifiersData[n]._skip = !0, t.placement = C, t.reset = !0);
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
function Fn(e, t, a) {
  return a === void 0 && (a = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - a.y,
    right: e.right - t.width + a.x,
    bottom: e.bottom - t.height + a.y,
    left: e.left - t.width - a.x
  };
}
function Dn(e) {
  return [R, X, Y, B].some(function(t) {
    return e[t] >= 0;
  });
}
function du(e) {
  var t = e.state, a = e.name, n = t.rects.reference, r = t.rects.popper, o = t.modifiersData.preventOverflow, i = et(t, {
    elementContext: "reference"
  }), s = et(t, {
    altBoundary: !0
  }), l = Fn(i, n), f = Fn(s, r, o), u = Dn(l), d = Dn(f);
  t.modifiersData[a] = {
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
function vu(e, t, a) {
  var n = ae(e), r = [B, R].indexOf(n) >= 0 ? -1 : 1, o = typeof a == "function" ? a(Object.assign({}, t, {
    placement: e
  })) : a, i = o[0], s = o[1];
  return i = i || 0, s = (s || 0) * r, [B, X].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function pu(e) {
  var t = e.state, a = e.options, n = e.name, r = a.offset, o = r === void 0 ? [0, 0] : r, i = Jr.reduce(function(u, d) {
    return u[d] = vu(d, t.rects, o), u;
  }, {}), s = i[t.placement], l = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = i;
}
const hu = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: pu
};
function gu(e) {
  var t = e.state, a = e.name;
  t.modifiersData[a] = ri({
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
  var t = e.state, a = e.options, n = e.name, r = a.mainAxis, o = r === void 0 ? !0 : r, i = a.altAxis, s = i === void 0 ? !1 : i, l = a.boundary, f = a.rootBoundary, u = a.altBoundary, d = a.padding, h = a.tether, v = h === void 0 ? !0 : h, A = a.tetherOffset, y = A === void 0 ? 0 : A, g = et(t, {
    boundary: l,
    rootBoundary: f,
    padding: d,
    altBoundary: u
  }), c = ae(t.placement), p = _e(t.placement), O = !p, b = Na(c), S = bu(b), x = t.modifiersData.popperOffsets, P = t.rects.reference, I = t.rects.popper, C = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, j = typeof C == "number" ? {
    mainAxis: C,
    altAxis: C
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, C), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (x) {
    if (o) {
      var L, he = b === "y" ? R : B, ge = b === "y" ? Y : X, W = b === "y" ? "height" : "width", q = x[b], ot = q + g[he], ye = q - g[ge], st = v ? -I[W] / 2 : 0, Ft = p === Ne ? P[W] : I[W], Re = p === Ne ? -I[W] : -P[W], lt = t.elements.arrow, Ie = v && lt ? $a(lt) : {
        width: 0,
        height: 0
      }, fe = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ei(), Be = fe[he], ft = fe[ge], be = Xe(0, P[W], Ie[W]), Dt = O ? P[W] / 2 - st - be - Be - j.mainAxis : Ft - be - Be - j.mainAxis, ui = O ? -P[W] / 2 + st + be + ft + j.mainAxis : Re + be + ft + j.mainAxis, _t = t.elements.arrow && it(t.elements.arrow), ci = _t ? b === "y" ? _t.clientTop || 0 : _t.clientLeft || 0 : 0, La = (L = F == null ? void 0 : F[b]) != null ? L : 0, di = q + Dt - La - ci, mi = q + ui - La, Ma = Xe(v ? kt(ot, di) : ot, q, v ? Ae(ye, mi) : ye);
      x[b] = Ma, K[b] = Ma - q;
    }
    if (s) {
      var Ra, vi = b === "x" ? R : B, pi = b === "x" ? Y : X, xe = x[S], ut = S === "y" ? "height" : "width", Ba = xe + g[vi], Wa = xe - g[pi], Lt = [R, B].indexOf(c) !== -1, za = (Ra = F == null ? void 0 : F[S]) != null ? Ra : 0, Ua = Lt ? Ba : xe - P[ut] - I[ut] - za + j.altAxis, Ha = Lt ? xe + P[ut] + I[ut] - za - j.altAxis : Wa, Va = v && Lt ? Hf(Ua, xe, Ha) : Xe(v ? Ua : Ba, xe, v ? Ha : Wa);
      x[S] = Va, K[S] = Va - xe;
    }
    t.modifiersData[n] = K;
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
  return e === z(e) || !V(e) ? Fa(e) : Au(e);
}
function Ou(e) {
  var t = e.getBoundingClientRect(), a = Fe(t.width) / e.offsetWidth || 1, n = Fe(t.height) / e.offsetHeight || 1;
  return a !== 1 || n !== 1;
}
function ku(e, t, a) {
  a === void 0 && (a = !1);
  var n = V(t), r = V(t) && Ou(t), o = pe(t), i = De(e, r, a), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !a) && ((ne(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  _a(o)) && (s = Su(t)), V(t) ? (l = De(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : o && (l.x = Da(o))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function Pu(e) {
  var t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function r(o) {
    a.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function(s) {
      if (!a.has(s)) {
        var l = t.get(s);
        l && r(l);
      }
    }), n.push(o);
  }
  return e.forEach(function(o) {
    a.has(o.name) || r(o);
  }), n;
}
function Iu(e) {
  var t = Pu(e);
  return Mf.reduce(function(a, n) {
    return a.concat(t.filter(function(r) {
      return r.phase === n;
    }));
  }, []);
}
function Eu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(a) {
      Promise.resolve().then(function() {
        t = void 0, a(e());
      });
    })), t;
  };
}
function Cu(e) {
  var t = e.reduce(function(a, n) {
    var r = a[n.name];
    return a[n.name] = r ? Object.assign({}, r, n, {
      options: Object.assign({}, r.options, n.options),
      data: Object.assign({}, r.data, n.data)
    }) : n, a;
  }, {});
  return Object.keys(t).map(function(a) {
    return t[a];
  });
}
var _n = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ln() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
    t[a] = arguments[a];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function ju(e) {
  e === void 0 && (e = {});
  var t = e, a = t.defaultModifiers, n = a === void 0 ? [] : a, r = t.defaultOptions, o = r === void 0 ? _n : r;
  return function(s, l, f) {
    f === void 0 && (f = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, _n, o),
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
        var O = Iu(Cu([].concat(n, u.options.modifiers)));
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
          if (Ln(p, O)) {
            u.rects = {
              reference: ku(p, it(O), u.options.strategy === "fixed"),
              popper: $a(O)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(j) {
              return u.modifiersData[j.name] = Object.assign({}, j.data);
            });
            for (var b = 0; b < u.orderedModifiers.length; b++) {
              if (u.reset === !0) {
                u.reset = !1, b = -1;
                continue;
              }
              var S = u.orderedModifiers[b], x = S.fn, P = S.options, I = P === void 0 ? {} : P, C = S.name;
              typeof x == "function" && (u = x({
                state: u,
                options: I,
                name: C,
                instance: v
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Eu(function() {
        return new Promise(function(g) {
          v.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        y(), h = !0;
      }
    };
    if (!Ln(s, l))
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
  const a = (n) => {
    e.value && n.target && (e.value.contains(n.target) || t(n));
  };
  It(() => {
    document.addEventListener("click", a);
  }), Hn(() => {
    document.removeEventListener("click", a);
  });
}
var Fu = typeof global == "object" && global && global.Object === Object && global, Du = typeof self == "object" && self && self.Object === Object && self, ii = Fu || Du || Function("return this")(), Pt = ii.Symbol, oi = Object.prototype, _u = oi.hasOwnProperty, Lu = oi.toString, ze = Pt ? Pt.toStringTag : void 0;
function Mu(e) {
  var t = _u.call(e, ze), a = e[ze];
  try {
    e[ze] = void 0;
    var n = !0;
  } catch {
  }
  var r = Lu.call(e);
  return n && (t ? e[ze] = a : delete e[ze]), r;
}
var Ru = Object.prototype, Bu = Ru.toString;
function Wu(e) {
  return Bu.call(e);
}
var zu = "[object Null]", Uu = "[object Undefined]", Mn = Pt ? Pt.toStringTag : void 0;
function Hu(e) {
  return e == null ? e === void 0 ? Uu : zu : Mn && Mn in Object(e) ? Mu(e) : Wu(e);
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
function ca(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Rn = NaN, Qu = /^[-+]0x[0-9a-f]+$/i, Zu = /^0b[01]+$/i, ec = /^0o[0-7]+$/i, tc = parseInt;
function Bn(e) {
  if (typeof e == "number")
    return e;
  if (Xu(e))
    return Rn;
  if (ca(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ca(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ju(e);
  var a = Zu.test(e);
  return a || ec.test(e) ? tc(e.slice(2), a ? 2 : 8) : Qu.test(e) ? Rn : +e;
}
var Vt = function() {
  return ii.Date.now();
}, ac = "Expected a function", nc = Math.max, rc = Math.min;
function ic(e, t, a) {
  var n, r, o, i, s, l, f = 0, u = !1, d = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(ac);
  t = Bn(t) || 0, ca(a) && (u = !!a.leading, d = "maxWait" in a, o = d ? nc(Bn(a.maxWait) || 0, t) : o, h = "trailing" in a ? !!a.trailing : h);
  function v(x) {
    var P = n, I = r;
    return n = r = void 0, f = x, i = e.apply(I, P), i;
  }
  function A(x) {
    return f = x, s = setTimeout(c, t), u ? v(x) : i;
  }
  function y(x) {
    var P = x - l, I = x - f, C = t - P;
    return d ? rc(C, o - I) : C;
  }
  function g(x) {
    var P = x - l, I = x - f;
    return l === void 0 || P >= t || P < 0 || d && I >= o;
  }
  function c() {
    var x = Vt();
    if (g(x))
      return p(x);
    s = setTimeout(c, y(x));
  }
  function p(x) {
    return s = void 0, h && n ? v(x) : (n = r = void 0, i);
  }
  function O() {
    s !== void 0 && clearTimeout(s), f = 0, n = l = r = s = void 0;
  }
  function b() {
    return s === void 0 ? i : p(Vt());
  }
  function S() {
    var x = Vt(), P = g(x);
    if (n = arguments, r = this, l = x, P) {
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
  setup(e, { expose: t, emit: a }) {
    const n = e, r = T(() => ({
      placement: n.placement,
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
      ...n.popperOptions
    })), o = a, i = H(n.modelValue ?? !1);
    let s = null;
    const l = H(), f = H(), u = H();
    Nu(l, () => {
      n.trigger == "click" && h(!1);
    });
    const d = (g) => {
      i.value = g, o("update:modelValue", i.value), o("change:modelValue", i.value);
    }, h = ic((g) => d(g), n.changeDelay), v = (g) => {
      n.trigger == "click" ? (h(!i.value), console.log(n)) : n.trigger == "hover" && h(!g);
    };
    ce(() => n.modelValue, (g) => {
      i.value = g;
    }), ce(i, (g) => {
      u.value && f.value && g ? s = $u(u.value, f.value, r.value) : s == null || s.destroy();
    }, { flush: "post" });
    function A() {
      n.trigger == "manaul" && h(!0);
    }
    function y() {
      n.trigger == "manaul" && h(!1);
    }
    return t({
      show: A,
      hide: y
    }), Hn(() => {
      s && (s == null || s.destroy());
    }), (g, c) => ($(), M("div", {
      class: "ws-tooltip",
      onMouseenter: c[1] || (c[1] = (p) => n.trigger == "hover" ? v(!1) : null),
      onMouseleave: c[2] || (c[2] = (p) => n.trigger == "hover" ? v(!0) : null),
      ref_key: "tooltiprootNode",
      ref: l
    }, [
      _("div", {
        class: "ws-tooltip__trigger",
        ref_key: "triggerNode",
        ref: u,
        onClick: c[0] || (c[0] = (p) => n.trigger == "click" ? v() : null)
      }, [
        _("div", null, [
          re(g.$slots, "default", {}, void 0, !0)
        ])
      ], 512),
      yt(_("div", {
        class: "ws-tooltip__popper",
        ref_key: "poperNode",
        ref: f
      }, [
        Z(ha, { name: e.transition }, {
          default: Je(() => [
            yt(_("div", null, [
              _("div", null, [
                re(g.$slots, "content", {}, () => [
                  va(pa(e.content), 1)
                ], !0)
              ]),
              c[3] || (c[3] = _("div", { id: "arrow" }, null, -1))
            ], 512), [
              [bt, i.value]
            ])
          ]),
          _: 3
        }, 8, ["name"])
      ], 512), [
        [bt, i.value]
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
  setup(e, { expose: t, emit: a }) {
    const n = a, r = e, o = (s) => {
      if (s.disabled) return;
      const l = s.key;
      n("update:select", l), console.log(s);
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
    }), (s, l) => ($(), M("div", sc, [
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
            ($(!0), M(Ya, null, Si(r.DropDownMenuOptions, (f) => ($(), M(Ya, {
              key: f.key
            }, [
              f.divided ? ($(), M("li", fc)) : qe("", !0),
              _("li", {
                class: Pe(["ws-dropdown-item", {
                  "is-disabled": f.disabled,
                  "is-divided": f.divided
                }]),
                id: `dropdown-item-${f.key}`,
                onClick: (u) => o(f)
              }, [
                Z(ma(li), {
                  "v-node": f.label
                }, null, 8, ["v-node"])
              ], 10, uc)
            ], 64))), 128))
          ])
        ]),
        default: Je(() => [
          re(s.$slots, "default", {}, () => [
            l[0] || (l[0] = va("DropDownTriggerSlot", -1))
          ], !0)
        ]),
        _: 3
      }, 8, ["change-delay", "v-model", "placement", "changedelay", "popper-options", "trigger"])
    ]));
  }
}), dc = /* @__PURE__ */ Me(cc, [["__scopeId", "data-v-5f77a0cd"]]), Ke = H([]), Wn = /* @__PURE__ */ (() => {
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
  Wn.value += 1;
  const t = `messageNode_${Wn.value}`, a = document.createElement("div"), r = {
    ...e,
    onDestory: () => {
      Xa(null, a);
      const s = Ke.value.findIndex((l) => l.id == t);
      s != -1 && Ke.value.splice(s, 1);
    },
    messageId: t
  }, o = da(fi, r), i = {
    id: t,
    vnode: o,
    props: r
  };
  return Ke.value.push(i), Xa(o, a), document.body.appendChild(a.firstElementChild), i;
}, mc = (e) => {
  var a, n;
  const t = Ke.value.findIndex((r) => r.id === e);
  if (t <= 0)
    return 0;
  {
    const r = Ke.value[t - 1];
    return (n = (a = r == null ? void 0 : r.vnode.component) == null ? void 0 : a.exposed) == null ? void 0 : n.bottomOffset.value;
  }
};
function vc(e, t, a) {
  Oi(e) ? ce(e, (n, r) => {
    r == null || r.removeEventListener(t, a), n == null || n.addEventListener(t, a);
  }) : (It(() => {
    e.addEventListener(t, a);
  }), ki(() => {
    e.removeEventListener(t, a);
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
    const a = H(!1), n = H(), r = H(0), o = T(() => mc(h.messageId) + h.offset), i = T(() => `top: ${o.value ?? 0}px`), s = T(() => o.value + r.value);
    t({
      bottomOffset: s
    });
    let l;
    function f() {
      if (h.duration == 0) {
        a.value = !0;
        return;
      }
      l = setTimeout(() => {
        a.value = !1;
      }, h.duration);
    }
    function u() {
      clearTimeout(l);
    }
    function d() {
      a.value = !1;
    }
    const h = e;
    function v(g) {
      g.code == "Escape" && (a.value = !1);
    }
    vc(document, "keydown", v), It(() => {
      a.value = !0, f();
    });
    const A = () => {
      var g;
      r.value = ((g = n.value) == null ? void 0 : g.offsetHeight) ?? 0;
    }, y = () => {
      h.onDestory();
    };
    return (g, c) => ($(), Un(ha, {
      name: "fade-up",
      onAfterLeave: y,
      onEnter: A
    }, {
      default: Je(() => [
        yt(_("div", {
          class: Pe(["ws-message", {
            [`ws-message--${e.type}`]: e.type,
            "is-close": e.showClose
          }]),
          ref_key: "messageRef",
          ref: n,
          role: "alert",
          style: zn(i.value),
          onMouseenter: u,
          onMouseleave: f
        }, [
          _("div", pc, [
            re(g.$slots, "default", {}, () => [
              Z(ma(li), { "v-node": e.message }, null, 8, ["v-node"])
            ], !0)
          ]),
          e.showClose ? ($(), M("div", {
            key: 0,
            class: "ws-message__close",
            onClick: Pi(d, ["stop"])
          }, [
            Z($e, { icon: "fa-solid fa-xmark" })
          ])) : qe("", !0)
        ], 38), [
          [bt, a.value]
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
], xc = Ii(gc);
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
