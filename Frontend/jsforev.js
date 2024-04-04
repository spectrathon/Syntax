var Hk = Object.defineProperty;
var Wk = (e,t,n)=>t in e ? Hk(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var z = (e,t,n)=>(Wk(e, typeof t != "symbol" ? t + "" : t, n),
n);
function Uk(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: ()=>r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i=>{
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var un = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kc(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var jx = {
    exports: {}
}
  , Cc = {}
  , Ex = {
    exports: {}
}
  , G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo = Symbol.for("react.element")
  , Gk = Symbol.for("react.portal")
  , Yk = Symbol.for("react.fragment")
  , Xk = Symbol.for("react.strict_mode")
  , Kk = Symbol.for("react.profiler")
  , Qk = Symbol.for("react.provider")
  , Zk = Symbol.for("react.context")
  , qk = Symbol.for("react.forward_ref")
  , Jk = Symbol.for("react.suspense")
  , eC = Symbol.for("react.memo")
  , tC = Symbol.for("react.lazy")
  , Yg = Symbol.iterator;
function nC(e) {
    return e === null || typeof e != "object" ? null : (e = Yg && e[Yg] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Mx = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Tx = Object.assign
  , Ox = {};
function us(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ox,
    this.updater = n || Mx
}
us.prototype.isReactComponent = {};
us.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
us.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Ax() {}
Ax.prototype = us.prototype;
function Zh(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Ox,
    this.updater = n || Mx
}
var qh = Zh.prototype = new Ax;
qh.constructor = Zh;
Tx(qh, us.prototype);
qh.isPureReactComponent = !0;
var Xg = Array.isArray
  , Lx = Object.prototype.hasOwnProperty
  , Jh = {
    current: null
}
  , Dx = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Rx(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Lx.call(t, r) && !Dx.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1)
        i.children = n;
    else if (1 < a) {
        for (var l = Array(a), c = 0; c < a; c++)
            l[c] = arguments[c + 2];
        i.children = l
    }
    if (e && e.defaultProps)
        for (r in a = e.defaultProps,
        a)
            i[r] === void 0 && (i[r] = a[r]);
    return {
        $$typeof: Xo,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Jh.current
    }
}
function rC(e, t) {
    return {
        $$typeof: Xo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ep(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Xo
}
function iC(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Kg = /\/+/g;
function _u(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? iC("" + e.key) : t.toString(36)
}
function ol(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Xo:
            case Gk:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + _u(o, 0) : r,
        Xg(i) ? (n = "",
        e != null && (n = e.replace(Kg, "$&/") + "/"),
        ol(i, t, n, "", function(c) {
            return c
        })) : i != null && (ep(i) && (i = rC(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Kg, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Xg(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + _u(s, a);
            o += ol(s, t, n, l, i)
        }
    else if (l = nC(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + _u(s, a++),
            o += ol(s, t, n, l, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function fa(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ol(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function sC(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var nt = {
    current: null
}
  , al = {
    transition: null
}
  , oC = {
    ReactCurrentDispatcher: nt,
    ReactCurrentBatchConfig: al,
    ReactCurrentOwner: Jh
};
G.Children = {
    map: fa,
    forEach: function(e, t, n) {
        fa(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return fa(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return fa(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ep(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
G.Component = us;
G.Fragment = Yk;
G.Profiler = Kk;
G.PureComponent = Zh;
G.StrictMode = Xk;
G.Suspense = Jk;
G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oC;
G.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Tx({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = Jh.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            Lx.call(t, l) && !Dx.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var c = 0; c < l; c++)
            a[c] = arguments[c + 2];
        r.children = a
    }
    return {
        $$typeof: Xo,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
G.createContext = function(e) {
    return e = {
        $$typeof: Zk,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Qk,
        _context: e
    },
    e.Consumer = e
}
;
G.createElement = Rx;
G.createFactory = function(e) {
    var t = Rx.bind(null, e);
    return t.type = e,
    t
}
;
G.createRef = function() {
    return {
        current: null
    }
}
;
G.forwardRef = function(e) {
    return {
        $$typeof: qk,
        render: e
    }
}
;
G.isValidElement = ep;
G.lazy = function(e) {
    return {
        $$typeof: tC,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: sC
    }
}
;
G.memo = function(e, t) {
    return {
        $$typeof: eC,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
G.startTransition = function(e) {
    var t = al.transition;
    al.transition = {};
    try {
        e()
    } finally {
        al.transition = t
    }
}
;
G.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
}
;
G.useCallback = function(e, t) {
    return nt.current.useCallback(e, t)
}
;
G.useContext = function(e) {
    return nt.current.useContext(e)
}
;
G.useDebugValue = function() {}
;
G.useDeferredValue = function(e) {
    return nt.current.useDeferredValue(e)
}
;
G.useEffect = function(e, t) {
    return nt.current.useEffect(e, t)
}
;
G.useId = function() {
    return nt.current.useId()
}
;
G.useImperativeHandle = function(e, t, n) {
    return nt.current.useImperativeHandle(e, t, n)
}
;
G.useInsertionEffect = function(e, t) {
    return nt.current.useInsertionEffect(e, t)
}
;
G.useLayoutEffect = function(e, t) {
    return nt.current.useLayoutEffect(e, t)
}
;
G.useMemo = function(e, t) {
    return nt.current.useMemo(e, t)
}
;
G.useReducer = function(e, t, n) {
    return nt.current.useReducer(e, t, n)
}
;
G.useRef = function(e) {
    return nt.current.useRef(e)
}
;
G.useState = function(e) {
    return nt.current.useState(e)
}
;
G.useSyncExternalStore = function(e, t, n) {
    return nt.current.useSyncExternalStore(e, t, n)
}
;
G.useTransition = function() {
    return nt.current.useTransition()
}
;
G.version = "18.2.0";
Ex.exports = G;
var x = Ex.exports;
const de = kc(x)
  , po = Uk({
    __proto__: null,
    default: de
}, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aC = x
  , lC = Symbol.for("react.element")
  , cC = Symbol.for("react.fragment")
  , uC = Object.prototype.hasOwnProperty
  , dC = aC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , fC = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Fx(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        uC.call(t, r) && !fC.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: lC,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: dC.current
    }
}
Cc.Fragment = cC;
Cc.jsx = Fx;
Cc.jsxs = Fx;
jx.exports = Cc;
var h = jx.exports
  , Rd = {}
  , Ix = {
    exports: {}
}
  , Pt = {}
  , Nx = {
    exports: {}
}
  , Vx = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, R) {
        var D = E.length;
        E.push(R);
        e: for (; 0 < D; ) {
            var I = D - 1 >>> 1
              , H = E[I];
            if (0 < i(H, R))
                E[I] = R,
                E[D] = H,
                D = I;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var R = E[0]
          , D = E.pop();
        if (D !== R) {
            E[0] = D;
            e: for (var I = 0, H = E.length, pe = H >>> 1; I < pe; ) {
                var be = 2 * (I + 1) - 1
                  , Ve = E[be]
                  , ae = be + 1
                  , Bt = E[ae];
                if (0 > i(Ve, D))
                    ae < H && 0 > i(Bt, Ve) ? (E[I] = Bt,
                    E[ae] = D,
                    I = ae) : (E[I] = Ve,
                    E[be] = D,
                    I = be);
                else if (ae < H && 0 > i(Bt, D))
                    E[I] = Bt,
                    E[ae] = D,
                    I = ae;
                else
                    break e
            }
        }
        return R
    }
    function i(E, R) {
        var D = E.sortIndex - R.sortIndex;
        return D !== 0 ? D : E.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , a = o.now();
        e.unstable_now = function() {
            return o.now() - a
        }
    }
    var l = []
      , c = []
      , u = 1
      , d = null
      , f = 3
      , p = !1
      , g = !1
      , v = !1
      , S = typeof setTimeout == "function" ? setTimeout : null
      , y = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(E) {
        for (var R = n(c); R !== null; ) {
            if (R.callback === null)
                r(c);
            else if (R.startTime <= E)
                r(c),
                R.sortIndex = R.expirationTime,
                t(l, R);
            else
                break;
            R = n(c)
        }
    }
    function w(E) {
        if (v = !1,
        b(E),
        !g)
            if (n(l) !== null)
                g = !0,
                V(k);
            else {
                var R = n(c);
                R !== null && W(w, R.startTime - E)
            }
    }
    function k(E, R) {
        g = !1,
        v && (v = !1,
        y(C),
        C = -1),
        p = !0;
        var D = f;
        try {
            for (b(R),
            d = n(l); d !== null && (!(d.expirationTime > R) || E && !O()); ) {
                var I = d.callback;
                if (typeof I == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var H = I(d.expirationTime <= R);
                    R = e.unstable_now(),
                    typeof H == "function" ? d.callback = H : d === n(l) && r(l),
                    b(R)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var pe = !0;
            else {
                var be = n(c);
                be !== null && W(w, be.startTime - R),
                pe = !1
            }
            return pe
        } finally {
            d = null,
            f = D,
            p = !1
        }
    }
    var P = !1
      , _ = null
      , C = -1
      , j = 5
      , M = -1;
    function O() {
        return !(e.unstable_now() - M < j)
    }
    function A() {
        if (_ !== null) {
            var E = e.unstable_now();
            M = E;
            var R = !0;
            try {
                R = _(!0, E)
            } finally {
                R ? N() : (P = !1,
                _ = null)
            }
        } else
            P = !1
    }
    var N;
    if (typeof m == "function")
        N = function() {
            m(A)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var B = new MessageChannel
          , L = B.port2;
        B.port1.onmessage = A,
        N = function() {
            L.postMessage(null)
        }
    } else
        N = function() {
            S(A, 0)
        }
        ;
    function V(E) {
        _ = E,
        P || (P = !0,
        N())
    }
    function W(E, R) {
        C = S(function() {
            E(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        g || p || (g = !0,
        V(k))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(E) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var R = 3;
            break;
        default:
            R = f
        }
        var D = f;
        f = R;
        try {
            return E()
        } finally {
            f = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, R) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var D = f;
        f = E;
        try {
            return R()
        } finally {
            f = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, R, D) {
        var I = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? I + D : I) : D = I,
        E) {
        case 1:
            var H = -1;
            break;
        case 2:
            H = 250;
            break;
        case 5:
            H = 1073741823;
            break;
        case 4:
            H = 1e4;
            break;
        default:
            H = 5e3
        }
        return H = D + H,
        E = {
            id: u++,
            callback: R,
            priorityLevel: E,
            startTime: D,
            expirationTime: H,
            sortIndex: -1
        },
        D > I ? (E.sortIndex = D,
        t(c, E),
        n(l) === null && E === n(c) && (v ? (y(C),
        C = -1) : v = !0,
        W(w, D - I))) : (E.sortIndex = H,
        t(l, E),
        g || p || (g = !0,
        V(k))),
        E
    }
    ,
    e.unstable_shouldYield = O,
    e.unstable_wrapCallback = function(E) {
        var R = f;
        return function() {
            var D = f;
            f = R;
            try {
                return E.apply(this, arguments)
            } finally {
                f = D
            }
        }
    }
}
)(Vx);
Nx.exports = Vx;
var hC = Nx.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bx = x
  , kt = hC;
function T(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var zx = new Set
  , go = {};
function li(e, t) {
    Ki(e, t),
    Ki(e + "Capture", t)
}
function Ki(e, t) {
    for (go[e] = t,
    e = 0; e < t.length; e++)
        zx.add(t[e])
}
var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Fd = Object.prototype.hasOwnProperty
  , pC = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Qg = {}
  , Zg = {};
function gC(e) {
    return Fd.call(Zg, e) ? !0 : Fd.call(Qg, e) ? !1 : pC.test(e) ? Zg[e] = !0 : (Qg[e] = !0,
    !1)
}
function mC(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function vC(e, t, n, r) {
    if (t === null || typeof t > "u" || mC(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function rt(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    We[e] = new rt(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    We[t] = new rt(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    We[e] = new rt(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    We[e] = new rt(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    We[e] = new rt(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    We[e] = new rt(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    We[e] = new rt(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    We[e] = new rt(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    We[e] = new rt(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var tp = /[\-:]([a-z])/g;
function np(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(tp, np);
    We[t] = new rt(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(tp, np);
    We[t] = new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(tp, np);
    We[t] = new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    We[e] = new rt(e,1,!1,e.toLowerCase(),null,!1,!1)
});
We.xlinkHref = new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    We[e] = new rt(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function rp(e, t, n, r) {
    var i = We.hasOwnProperty(t) ? We[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (vC(t, n, i, r) && (n = null),
    r || i === null ? gC(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var In = Bx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ha = Symbol.for("react.element")
  , Si = Symbol.for("react.portal")
  , wi = Symbol.for("react.fragment")
  , ip = Symbol.for("react.strict_mode")
  , Id = Symbol.for("react.profiler")
  , $x = Symbol.for("react.provider")
  , Hx = Symbol.for("react.context")
  , sp = Symbol.for("react.forward_ref")
  , Nd = Symbol.for("react.suspense")
  , Vd = Symbol.for("react.suspense_list")
  , op = Symbol.for("react.memo")
  , zn = Symbol.for("react.lazy")
  , Wx = Symbol.for("react.offscreen")
  , qg = Symbol.iterator;
function ws(e) {
    return e === null || typeof e != "object" ? null : (e = qg && e[qg] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var he = Object.assign, ku;
function Bs(e) {
    if (ku === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ku = t && t[1] || ""
        }
    return `
` + ku + e
}
var Cu = !1;
function Pu(e, t) {
    if (!e || Cu)
        return "";
    Cu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, a = s.length - 1; 1 <= o && 0 <= a && i[o] !== s[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (i[o] !== s[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || i[o] !== s[a]) {
                                var l = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)),
                                l
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Cu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Bs(e) : ""
}
function yC(e) {
    switch (e.tag) {
    case 5:
        return Bs(e.type);
    case 16:
        return Bs("Lazy");
    case 13:
        return Bs("Suspense");
    case 19:
        return Bs("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Pu(e.type, !1),
        e;
    case 11:
        return e = Pu(e.type.render, !1),
        e;
    case 1:
        return e = Pu(e.type, !0),
        e;
    default:
        return ""
    }
}
function Bd(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case wi:
        return "Fragment";
    case Si:
        return "Portal";
    case Id:
        return "Profiler";
    case ip:
        return "StrictMode";
    case Nd:
        return "Suspense";
    case Vd:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Hx:
            return (e.displayName || "Context") + ".Consumer";
        case $x:
            return (e._context.displayName || "Context") + ".Provider";
        case sp:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case op:
            return t = e.displayName || null,
            t !== null ? t : Bd(e.type) || "Memo";
        case zn:
            t = e._payload,
            e = e._init;
            try {
                return Bd(e(t))
            } catch {}
        }
    return null
}
function xC(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Bd(t);
    case 8:
        return t === ip ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function pr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Ux(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function bC(e) {
    var t = Ux(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function pa(e) {
    e._valueTracker || (e._valueTracker = bC(e))
}
function Gx(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Ux(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Tl(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function zd(e, t) {
    var n = t.checked;
    return he({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Jg(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = pr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Yx(e, t) {
    t = t.checked,
    t != null && rp(e, "checked", t, !1)
}
function $d(e, t) {
    Yx(e, t);
    var n = pr(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Hd(e, t.type, n) : t.hasOwnProperty("defaultValue") && Hd(e, t.type, pr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function em(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Hd(e, t, n) {
    (t !== "number" || Tl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var zs = Array.isArray;
function Bi(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + pr(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Wd(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(T(91));
    return he({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function tm(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(T(92));
            if (zs(n)) {
                if (1 < n.length)
                    throw Error(T(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: pr(n)
    }
}
function Xx(e, t) {
    var n = pr(t.value)
      , r = pr(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function nm(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Kx(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function Ud(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Kx(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ga, Qx = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (ga = ga || document.createElement("div"),
        ga.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = ga.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function mo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ks = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , SC = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ks).forEach(function(e) {
    SC.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ks[t] = Ks[e]
    })
});
function Zx(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ks.hasOwnProperty(e) && Ks[e] ? ("" + t).trim() : t + "px"
}
function qx(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Zx(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var wC = he({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Gd(e, t) {
    if (t) {
        if (wC[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(T(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(T(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(T(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(T(62))
    }
}
function Yd(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Xd = null;
function ap(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Kd = null
  , zi = null
  , $i = null;
function rm(e) {
    if (e = Zo(e)) {
        if (typeof Kd != "function")
            throw Error(T(280));
        var t = e.stateNode;
        t && (t = Tc(t),
        Kd(e.stateNode, e.type, t))
    }
}
function Jx(e) {
    zi ? $i ? $i.push(e) : $i = [e] : zi = e
}
function eb() {
    if (zi) {
        var e = zi
          , t = $i;
        if ($i = zi = null,
        rm(e),
        t)
            for (e = 0; e < t.length; e++)
                rm(t[e])
    }
}
function tb(e, t) {
    return e(t)
}
function nb() {}
var ju = !1;
function rb(e, t, n) {
    if (ju)
        return e(t, n);
    ju = !0;
    try {
        return tb(e, t, n)
    } finally {
        ju = !1,
        (zi !== null || $i !== null) && (nb(),
        eb())
    }
}
function vo(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Tc(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(T(231, t, typeof n));
    return n
}
var Qd = !1;
if (An)
    try {
        var _s = {};
        Object.defineProperty(_s, "passive", {
            get: function() {
                Qd = !0
            }
        }),
        window.addEventListener("test", _s, _s),
        window.removeEventListener("test", _s, _s)
    } catch {
        Qd = !1
    }
function _C(e, t, n, r, i, s, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var Qs = !1
  , Ol = null
  , Al = !1
  , Zd = null
  , kC = {
    onError: function(e) {
        Qs = !0,
        Ol = e
    }
};
function CC(e, t, n, r, i, s, o, a, l) {
    Qs = !1,
    Ol = null,
    _C.apply(kC, arguments)
}
function PC(e, t, n, r, i, s, o, a, l) {
    if (CC.apply(this, arguments),
    Qs) {
        if (Qs) {
            var c = Ol;
            Qs = !1,
            Ol = null
        } else
            throw Error(T(198));
        Al || (Al = !0,
        Zd = c)
    }
}
function ci(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function ib(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function im(e) {
    if (ci(e) !== e)
        throw Error(T(188))
}
function jC(e) {
    var t = e.alternate;
    if (!t) {
        if (t = ci(e),
        t === null)
            throw Error(T(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return im(i),
                    e;
                if (s === r)
                    return im(i),
                    t;
                s = s.sibling
            }
            throw Error(T(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, a = i.child; a; ) {
                if (a === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (a === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = s.child; a; ) {
                    if (a === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (a === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(T(189))
            }
        }
        if (n.alternate !== r)
            throw Error(T(190))
    }
    if (n.tag !== 3)
        throw Error(T(188));
    return n.stateNode.current === n ? e : t
}
function sb(e) {
    return e = jC(e),
    e !== null ? ob(e) : null
}
function ob(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = ob(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var ab = kt.unstable_scheduleCallback
  , sm = kt.unstable_cancelCallback
  , EC = kt.unstable_shouldYield
  , MC = kt.unstable_requestPaint
  , Se = kt.unstable_now
  , TC = kt.unstable_getCurrentPriorityLevel
  , lp = kt.unstable_ImmediatePriority
  , lb = kt.unstable_UserBlockingPriority
  , Ll = kt.unstable_NormalPriority
  , OC = kt.unstable_LowPriority
  , cb = kt.unstable_IdlePriority
  , Pc = null
  , on = null;
function AC(e) {
    if (on && typeof on.onCommitFiberRoot == "function")
        try {
            on.onCommitFiberRoot(Pc, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : RC
  , LC = Math.log
  , DC = Math.LN2;
function RC(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (LC(e) / DC | 0) | 0
}
var ma = 64
  , va = 4194304;
function $s(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Dl(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = $s(a) : (s &= o,
        s !== 0 && (r = $s(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = $s(o) : s !== 0 && (r = $s(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Yt(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function FC(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function IC(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - Yt(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = FC(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function qd(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function ub() {
    var e = ma;
    return ma <<= 1,
    !(ma & 4194240) && (ma = 64),
    e
}
function Eu(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Ko(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Yt(t),
    e[t] = n
}
function NC(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Yt(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function cp(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Yt(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var q = 0;
function db(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var fb, up, hb, pb, gb, Jd = !1, ya = [], nr = null, rr = null, ir = null, yo = new Map, xo = new Map, Wn = [], VC = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function om(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        nr = null;
        break;
    case "dragenter":
    case "dragleave":
        rr = null;
        break;
    case "mouseover":
    case "mouseout":
        ir = null;
        break;
    case "pointerover":
    case "pointerout":
        yo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        xo.delete(t.pointerId)
    }
}
function ks(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = Zo(t),
    t !== null && up(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function BC(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return nr = ks(nr, e, t, n, r, i),
        !0;
    case "dragenter":
        return rr = ks(rr, e, t, n, r, i),
        !0;
    case "mouseover":
        return ir = ks(ir, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return yo.set(s, ks(yo.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        xo.set(s, ks(xo.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function mb(e) {
    var t = $r(e.target);
    if (t !== null) {
        var n = ci(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = ib(n),
                t !== null) {
                    e.blockedOn = t,
                    gb(e.priority, function() {
                        hb(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function ll(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ef(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Xd = r,
            n.target.dispatchEvent(r),
            Xd = null
        } else
            return t = Zo(n),
            t !== null && up(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function am(e, t, n) {
    ll(e) && n.delete(t)
}
function zC() {
    Jd = !1,
    nr !== null && ll(nr) && (nr = null),
    rr !== null && ll(rr) && (rr = null),
    ir !== null && ll(ir) && (ir = null),
    yo.forEach(am),
    xo.forEach(am)
}
function Cs(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    Jd || (Jd = !0,
    kt.unstable_scheduleCallback(kt.unstable_NormalPriority, zC)))
}
function bo(e) {
    function t(i) {
        return Cs(i, e)
    }
    if (0 < ya.length) {
        Cs(ya[0], e);
        for (var n = 1; n < ya.length; n++) {
            var r = ya[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (nr !== null && Cs(nr, e),
    rr !== null && Cs(rr, e),
    ir !== null && Cs(ir, e),
    yo.forEach(t),
    xo.forEach(t),
    n = 0; n < Wn.length; n++)
        r = Wn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Wn.length && (n = Wn[0],
    n.blockedOn === null); )
        mb(n),
        n.blockedOn === null && Wn.shift()
}
var Hi = In.ReactCurrentBatchConfig
  , Rl = !0;
function $C(e, t, n, r) {
    var i = q
      , s = Hi.transition;
    Hi.transition = null;
    try {
        q = 1,
        dp(e, t, n, r)
    } finally {
        q = i,
        Hi.transition = s
    }
}
function HC(e, t, n, r) {
    var i = q
      , s = Hi.transition;
    Hi.transition = null;
    try {
        q = 4,
        dp(e, t, n, r)
    } finally {
        q = i,
        Hi.transition = s
    }
}
function dp(e, t, n, r) {
    if (Rl) {
        var i = ef(e, t, n, r);
        if (i === null)
            Nu(e, t, r, Fl, n),
            om(e, r);
        else if (BC(i, e, t, n, r))
            r.stopPropagation();
        else if (om(e, r),
        t & 4 && -1 < VC.indexOf(e)) {
            for (; i !== null; ) {
                var s = Zo(i);
                if (s !== null && fb(s),
                s = ef(e, t, n, r),
                s === null && Nu(e, t, r, Fl, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            Nu(e, t, r, null, n)
    }
}
var Fl = null;
function ef(e, t, n, r) {
    if (Fl = null,
    e = ap(r),
    e = $r(e),
    e !== null)
        if (t = ci(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = ib(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Fl = e,
    null
}
function vb(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (TC()) {
        case lp:
            return 1;
        case lb:
            return 4;
        case Ll:
        case OC:
            return 16;
        case cb:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Gn = null
  , fp = null
  , cl = null;
function yb() {
    if (cl)
        return cl;
    var e, t = fp, n = t.length, r, i = "value"in Gn ? Gn.value : Gn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return cl = i.slice(e, 1 < r ? 1 - r : void 0)
}
function ul(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function xa() {
    return !0
}
function lm() {
    return !1
}
function jt(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (n = e[a],
            this[a] = n ? n(s) : s[a]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? xa : lm,
        this.isPropagationStopped = lm,
        this
    }
    return he(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = xa)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = xa)
        },
        persist: function() {},
        isPersistent: xa
    }),
    t
}
var ds = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, hp = jt(ds), Qo = he({}, ds, {
    view: 0,
    detail: 0
}), WC = jt(Qo), Mu, Tu, Ps, jc = he({}, Qo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pp,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Ps && (Ps && e.type === "mousemove" ? (Mu = e.screenX - Ps.screenX,
        Tu = e.screenY - Ps.screenY) : Tu = Mu = 0,
        Ps = e),
        Mu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Tu
    }
}), cm = jt(jc), UC = he({}, jc, {
    dataTransfer: 0
}), GC = jt(UC), YC = he({}, Qo, {
    relatedTarget: 0
}), Ou = jt(YC), XC = he({}, ds, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), KC = jt(XC), QC = he({}, ds, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), ZC = jt(QC), qC = he({}, ds, {
    data: 0
}), um = jt(qC), JC = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, eP = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, tP = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function nP(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = tP[e]) ? !!t[e] : !1
}
function pp() {
    return nP
}
var rP = he({}, Qo, {
    key: function(e) {
        if (e.key) {
            var t = JC[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ul(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eP[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pp,
    charCode: function(e) {
        return e.type === "keypress" ? ul(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ul(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , iP = jt(rP)
  , sP = he({}, jc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , dm = jt(sP)
  , oP = he({}, Qo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pp
})
  , aP = jt(oP)
  , lP = he({}, ds, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , cP = jt(lP)
  , uP = he({}, jc, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , dP = jt(uP)
  , fP = [9, 13, 27, 32]
  , gp = An && "CompositionEvent"in window
  , Zs = null;
An && "documentMode"in document && (Zs = document.documentMode);
var hP = An && "TextEvent"in window && !Zs
  , xb = An && (!gp || Zs && 8 < Zs && 11 >= Zs)
  , fm = String.fromCharCode(32)
  , hm = !1;
function bb(e, t) {
    switch (e) {
    case "keyup":
        return fP.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Sb(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var _i = !1;
function pP(e, t) {
    switch (e) {
    case "compositionend":
        return Sb(t);
    case "keypress":
        return t.which !== 32 ? null : (hm = !0,
        fm);
    case "textInput":
        return e = t.data,
        e === fm && hm ? null : e;
    default:
        return null
    }
}
function gP(e, t) {
    if (_i)
        return e === "compositionend" || !gp && bb(e, t) ? (e = yb(),
        cl = fp = Gn = null,
        _i = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return xb && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var mP = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function pm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mP[e.type] : t === "textarea"
}
function wb(e, t, n, r) {
    Jx(r),
    t = Il(t, "onChange"),
    0 < t.length && (n = new hp("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var qs = null
  , So = null;
function vP(e) {
    Lb(e, 0)
}
function Ec(e) {
    var t = Pi(e);
    if (Gx(t))
        return e
}
function yP(e, t) {
    if (e === "change")
        return t
}
var _b = !1;
if (An) {
    var Au;
    if (An) {
        var Lu = "oninput"in document;
        if (!Lu) {
            var gm = document.createElement("div");
            gm.setAttribute("oninput", "return;"),
            Lu = typeof gm.oninput == "function"
        }
        Au = Lu
    } else
        Au = !1;
    _b = Au && (!document.documentMode || 9 < document.documentMode)
}
function mm() {
    qs && (qs.detachEvent("onpropertychange", kb),
    So = qs = null)
}
function kb(e) {
    if (e.propertyName === "value" && Ec(So)) {
        var t = [];
        wb(t, So, e, ap(e)),
        rb(vP, t)
    }
}
function xP(e, t, n) {
    e === "focusin" ? (mm(),
    qs = t,
    So = n,
    qs.attachEvent("onpropertychange", kb)) : e === "focusout" && mm()
}
function bP(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ec(So)
}
function SP(e, t) {
    if (e === "click")
        return Ec(t)
}
function wP(e, t) {
    if (e === "input" || e === "change")
        return Ec(t)
}
function _P(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Qt = typeof Object.is == "function" ? Object.is : _P;
function wo(e, t) {
    if (Qt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Fd.call(t, i) || !Qt(e[i], t[i]))
            return !1
    }
    return !0
}
function vm(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function ym(e, t) {
    var n = vm(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = vm(n)
    }
}
function Cb(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Cb(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Pb() {
    for (var e = window, t = Tl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Tl(e.document)
    }
    return t
}
function mp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function kP(e) {
    var t = Pb()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Cb(n.ownerDocument.documentElement, n)) {
        if (r !== null && mp(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = ym(n, s);
                var o = ym(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var CP = An && "documentMode"in document && 11 >= document.documentMode
  , ki = null
  , tf = null
  , Js = null
  , nf = !1;
function xm(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    nf || ki == null || ki !== Tl(r) || (r = ki,
    "selectionStart"in r && mp(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Js && wo(Js, r) || (Js = r,
    r = Il(tf, "onSelect"),
    0 < r.length && (t = new hp("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = ki)))
}
function ba(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ci = {
    animationend: ba("Animation", "AnimationEnd"),
    animationiteration: ba("Animation", "AnimationIteration"),
    animationstart: ba("Animation", "AnimationStart"),
    transitionend: ba("Transition", "TransitionEnd")
}
  , Du = {}
  , jb = {};
An && (jb = document.createElement("div").style,
"AnimationEvent"in window || (delete Ci.animationend.animation,
delete Ci.animationiteration.animation,
delete Ci.animationstart.animation),
"TransitionEvent"in window || delete Ci.transitionend.transition);
function Mc(e) {
    if (Du[e])
        return Du[e];
    if (!Ci[e])
        return e;
    var t = Ci[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in jb)
            return Du[e] = t[n];
    return e
}
var Eb = Mc("animationend")
  , Mb = Mc("animationiteration")
  , Tb = Mc("animationstart")
  , Ob = Mc("transitionend")
  , Ab = new Map
  , bm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xr(e, t) {
    Ab.set(e, t),
    li(t, [e])
}
for (var Ru = 0; Ru < bm.length; Ru++) {
    var Fu = bm[Ru]
      , PP = Fu.toLowerCase()
      , jP = Fu[0].toUpperCase() + Fu.slice(1);
    xr(PP, "on" + jP)
}
xr(Eb, "onAnimationEnd");
xr(Mb, "onAnimationIteration");
xr(Tb, "onAnimationStart");
xr("dblclick", "onDoubleClick");
xr("focusin", "onFocus");
xr("focusout", "onBlur");
xr(Ob, "onTransitionEnd");
Ki("onMouseEnter", ["mouseout", "mouseover"]);
Ki("onMouseLeave", ["mouseout", "mouseover"]);
Ki("onPointerEnter", ["pointerout", "pointerover"]);
Ki("onPointerLeave", ["pointerout", "pointerover"]);
li("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
li("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
li("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
li("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
li("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
li("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , EP = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hs));
function Sm(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    PC(r, t, void 0, e),
    e.currentTarget = null
}
function Lb(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o]
                      , l = a.instance
                      , c = a.currentTarget;
                    if (a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Sm(i, a, c),
                    s = l
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (a = r[o],
                    l = a.instance,
                    c = a.currentTarget,
                    a = a.listener,
                    l !== s && i.isPropagationStopped())
                        break e;
                    Sm(i, a, c),
                    s = l
                }
        }
    }
    if (Al)
        throw e = Zd,
        Al = !1,
        Zd = null,
        e
}
function re(e, t) {
    var n = t[lf];
    n === void 0 && (n = t[lf] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Db(t, e, 2, !1),
    n.add(r))
}
function Iu(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Db(n, e, r, t)
}
var Sa = "_reactListening" + Math.random().toString(36).slice(2);
function _o(e) {
    if (!e[Sa]) {
        e[Sa] = !0,
        zx.forEach(function(n) {
            n !== "selectionchange" && (EP.has(n) || Iu(n, !1, e),
            Iu(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Sa] || (t[Sa] = !0,
        Iu("selectionchange", !1, t))
    }
}
function Db(e, t, n, r) {
    switch (vb(t)) {
    case 1:
        var i = $C;
        break;
    case 4:
        i = HC;
        break;
    default:
        i = dp
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !Qd || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function Nu(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || a.nodeType === 8 && a.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if ((l === 3 || l === 4) && (l = o.stateNode.containerInfo,
                        l === i || l.nodeType === 8 && l.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = $r(a),
                    o === null)
                        return;
                    if (l = o.tag,
                    l === 5 || l === 6) {
                        r = s = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            r = r.return
        }
    rb(function() {
        var c = s
          , u = ap(n)
          , d = [];
        e: {
            var f = Ab.get(e);
            if (f !== void 0) {
                var p = hp
                  , g = e;
                switch (e) {
                case "keypress":
                    if (ul(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = iP;
                    break;
                case "focusin":
                    g = "focus",
                    p = Ou;
                    break;
                case "focusout":
                    g = "blur",
                    p = Ou;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = Ou;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    p = cm;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = GC;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = aP;
                    break;
                case Eb:
                case Mb:
                case Tb:
                    p = KC;
                    break;
                case Ob:
                    p = cP;
                    break;
                case "scroll":
                    p = WC;
                    break;
                case "wheel":
                    p = dP;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = ZC;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = dm
                }
                var v = (t & 4) !== 0
                  , S = !v && e === "scroll"
                  , y = v ? f !== null ? f + "Capture" : null : f;
                v = [];
                for (var m = c, b; m !== null; ) {
                    b = m;
                    var w = b.stateNode;
                    if (b.tag === 5 && w !== null && (b = w,
                    y !== null && (w = vo(m, y),
                    w != null && v.push(ko(m, w, b)))),
                    S)
                        break;
                    m = m.return
                }
                0 < v.length && (f = new p(f,g,null,n,u),
                d.push({
                    event: f,
                    listeners: v
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                f && n !== Xd && (g = n.relatedTarget || n.fromElement) && ($r(g) || g[Ln]))
                    break e;
                if ((p || f) && (f = u.window === u ? u : (f = u.ownerDocument) ? f.defaultView || f.parentWindow : window,
                p ? (g = n.relatedTarget || n.toElement,
                p = c,
                g = g ? $r(g) : null,
                g !== null && (S = ci(g),
                g !== S || g.tag !== 5 && g.tag !== 6) && (g = null)) : (p = null,
                g = c),
                p !== g)) {
                    if (v = cm,
                    w = "onMouseLeave",
                    y = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (v = dm,
                    w = "onPointerLeave",
                    y = "onPointerEnter",
                    m = "pointer"),
                    S = p == null ? f : Pi(p),
                    b = g == null ? f : Pi(g),
                    f = new v(w,m + "leave",p,n,u),
                    f.target = S,
                    f.relatedTarget = b,
                    w = null,
                    $r(u) === c && (v = new v(y,m + "enter",g,n,u),
                    v.target = b,
                    v.relatedTarget = S,
                    w = v),
                    S = w,
                    p && g)
                        t: {
                            for (v = p,
                            y = g,
                            m = 0,
                            b = v; b; b = mi(b))
                                m++;
                            for (b = 0,
                            w = y; w; w = mi(w))
                                b++;
                            for (; 0 < m - b; )
                                v = mi(v),
                                m--;
                            for (; 0 < b - m; )
                                y = mi(y),
                                b--;
                            for (; m--; ) {
                                if (v === y || y !== null && v === y.alternate)
                                    break t;
                                v = mi(v),
                                y = mi(y)
                            }
                            v = null
                        }
                    else
                        v = null;
                    p !== null && wm(d, f, p, v, !1),
                    g !== null && S !== null && wm(d, S, g, v, !0)
                }
            }
            e: {
                if (f = c ? Pi(c) : window,
                p = f.nodeName && f.nodeName.toLowerCase(),
                p === "select" || p === "input" && f.type === "file")
                    var k = yP;
                else if (pm(f))
                    if (_b)
                        k = wP;
                    else {
                        k = bP;
                        var P = xP
                    }
                else
                    (p = f.nodeName) && p.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (k = SP);
                if (k && (k = k(e, c))) {
                    wb(d, k, n, u);
                    break e
                }
                P && P(e, f, c),
                e === "focusout" && (P = f._wrapperState) && P.controlled && f.type === "number" && Hd(f, "number", f.value)
            }
            switch (P = c ? Pi(c) : window,
            e) {
            case "focusin":
                (pm(P) || P.contentEditable === "true") && (ki = P,
                tf = c,
                Js = null);
                break;
            case "focusout":
                Js = tf = ki = null;
                break;
            case "mousedown":
                nf = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                nf = !1,
                xm(d, n, u);
                break;
            case "selectionchange":
                if (CP)
                    break;
            case "keydown":
            case "keyup":
                xm(d, n, u)
            }
            var _;
            if (gp)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                _i ? bb(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (xb && n.locale !== "ko" && (_i || C !== "onCompositionStart" ? C === "onCompositionEnd" && _i && (_ = yb()) : (Gn = u,
            fp = "value"in Gn ? Gn.value : Gn.textContent,
            _i = !0)),
            P = Il(c, C),
            0 < P.length && (C = new um(C,e,null,n,u),
            d.push({
                event: C,
                listeners: P
            }),
            _ ? C.data = _ : (_ = Sb(n),
            _ !== null && (C.data = _)))),
            (_ = hP ? pP(e, n) : gP(e, n)) && (c = Il(c, "onBeforeInput"),
            0 < c.length && (u = new um("onBeforeInput","beforeinput",null,n,u),
            d.push({
                event: u,
                listeners: c
            }),
            u.data = _))
        }
        Lb(d, t)
    })
}
function ko(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Il(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = vo(e, n),
        s != null && r.unshift(ko(e, s, i)),
        s = vo(e, t),
        s != null && r.push(ko(e, s, i))),
        e = e.return
    }
    return r
}
function mi(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function wm(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        i ? (l = vo(n, s),
        l != null && o.unshift(ko(n, l, a))) : i || (l = vo(n, s),
        l != null && o.push(ko(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var MP = /\r\n?/g
  , TP = /\u0000|\uFFFD/g;
function _m(e) {
    return (typeof e == "string" ? e : "" + e).replace(MP, `
`).replace(TP, "")
}
function wa(e, t, n) {
    if (t = _m(t),
    _m(e) !== t && n)
        throw Error(T(425))
}
function Nl() {}
var rf = null
  , sf = null;
function of(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var af = typeof setTimeout == "function" ? setTimeout : void 0
  , OP = typeof clearTimeout == "function" ? clearTimeout : void 0
  , km = typeof Promise == "function" ? Promise : void 0
  , AP = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
    return km.resolve(null).then(e).catch(LP)
}
: af;
function LP(e) {
    setTimeout(function() {
        throw e
    })
}
function Vu(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    bo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    bo(t)
}
function sr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Cm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var fs = Math.random().toString(36).slice(2)
  , sn = "__reactFiber$" + fs
  , Co = "__reactProps$" + fs
  , Ln = "__reactContainer$" + fs
  , lf = "__reactEvents$" + fs
  , DP = "__reactListeners$" + fs
  , RP = "__reactHandles$" + fs;
function $r(e) {
    var t = e[sn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ln] || n[sn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Cm(e); e !== null; ) {
                    if (n = e[sn])
                        return n;
                    e = Cm(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function Zo(e) {
    return e = e[sn] || e[Ln],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Pi(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(T(33))
}
function Tc(e) {
    return e[Co] || null
}
var cf = []
  , ji = -1;
function br(e) {
    return {
        current: e
    }
}
function se(e) {
    0 > ji || (e.current = cf[ji],
    cf[ji] = null,
    ji--)
}
function ne(e, t) {
    ji++,
    cf[ji] = e.current,
    e.current = t
}
var gr = {}
  , Qe = br(gr)
  , ct = br(!1)
  , ti = gr;
function Qi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return gr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function ut(e) {
    return e = e.childContextTypes,
    e != null
}
function Vl() {
    se(ct),
    se(Qe)
}
function Pm(e, t, n) {
    if (Qe.current !== gr)
        throw Error(T(168));
    ne(Qe, t),
    ne(ct, n)
}
function Rb(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(T(108, xC(e) || "Unknown", i));
    return he({}, n, r)
}
function Bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || gr,
    ti = Qe.current,
    ne(Qe, e),
    ne(ct, ct.current),
    !0
}
function jm(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(T(169));
    n ? (e = Rb(e, t, ti),
    r.__reactInternalMemoizedMergedChildContext = e,
    se(ct),
    se(Qe),
    ne(Qe, e)) : se(ct),
    ne(ct, n)
}
var Sn = null
  , Oc = !1
  , Bu = !1;
function Fb(e) {
    Sn === null ? Sn = [e] : Sn.push(e)
}
function FP(e) {
    Oc = !0,
    Fb(e)
}
function Sr() {
    if (!Bu && Sn !== null) {
        Bu = !0;
        var e = 0
          , t = q;
        try {
            var n = Sn;
            for (q = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Sn = null,
            Oc = !1
        } catch (i) {
            throw Sn !== null && (Sn = Sn.slice(e + 1)),
            ab(lp, Sr),
            i
        } finally {
            q = t,
            Bu = !1
        }
    }
    return null
}
var Ei = []
  , Mi = 0
  , zl = null
  , $l = 0
  , At = []
  , Lt = 0
  , ni = null
  , kn = 1
  , Cn = "";
function Lr(e, t) {
    Ei[Mi++] = $l,
    Ei[Mi++] = zl,
    zl = e,
    $l = t
}
function Ib(e, t, n) {
    At[Lt++] = kn,
    At[Lt++] = Cn,
    At[Lt++] = ni,
    ni = e;
    var r = kn;
    e = Cn;
    var i = 32 - Yt(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Yt(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        kn = 1 << 32 - Yt(t) + i | n << i | r,
        Cn = s + e
    } else
        kn = 1 << s | n << i | r,
        Cn = e
}
function vp(e) {
    e.return !== null && (Lr(e, 1),
    Ib(e, 1, 0))
}
function yp(e) {
    for (; e === zl; )
        zl = Ei[--Mi],
        Ei[Mi] = null,
        $l = Ei[--Mi],
        Ei[Mi] = null;
    for (; e === ni; )
        ni = At[--Lt],
        At[Lt] = null,
        Cn = At[--Lt],
        At[Lt] = null,
        kn = At[--Lt],
        At[Lt] = null
}
var wt = null
  , yt = null
  , le = !1
  , Gt = null;
function Nb(e, t) {
    var n = Dt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Em(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        wt = e,
        yt = sr(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        wt = e,
        yt = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = ni !== null ? {
            id: kn,
            overflow: Cn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Dt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        wt = e,
        yt = null,
        !0) : !1;
    default:
        return !1
    }
}
function uf(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function df(e) {
    if (le) {
        var t = yt;
        if (t) {
            var n = t;
            if (!Em(e, t)) {
                if (uf(e))
                    throw Error(T(418));
                t = sr(n.nextSibling);
                var r = wt;
                t && Em(e, t) ? Nb(r, n) : (e.flags = e.flags & -4097 | 2,
                le = !1,
                wt = e)
            }
        } else {
            if (uf(e))
                throw Error(T(418));
            e.flags = e.flags & -4097 | 2,
            le = !1,
            wt = e
        }
    }
}
function Mm(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    wt = e
}
function _a(e) {
    if (e !== wt)
        return !1;
    if (!le)
        return Mm(e),
        le = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !of(e.type, e.memoizedProps)),
    t && (t = yt)) {
        if (uf(e))
            throw Vb(),
            Error(T(418));
        for (; t; )
            Nb(e, t),
            t = sr(t.nextSibling)
    }
    if (Mm(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(T(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            yt = sr(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            yt = null
        }
    } else
        yt = wt ? sr(e.stateNode.nextSibling) : null;
    return !0
}
function Vb() {
    for (var e = yt; e; )
        e = sr(e.nextSibling)
}
function Zi() {
    yt = wt = null,
    le = !1
}
function xp(e) {
    Gt === null ? Gt = [e] : Gt.push(e)
}
var IP = In.ReactCurrentBatchConfig;
function Ht(e, t) {
    if (e && e.defaultProps) {
        t = he({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Hl = br(null)
  , Wl = null
  , Ti = null
  , bp = null;
function Sp() {
    bp = Ti = Wl = null
}
function wp(e) {
    var t = Hl.current;
    se(Hl),
    e._currentValue = t
}
function ff(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Wi(e, t) {
    Wl = e,
    bp = Ti = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (lt = !0),
    e.firstContext = null)
}
function It(e) {
    var t = e._currentValue;
    if (bp !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Ti === null) {
            if (Wl === null)
                throw Error(T(308));
            Ti = e,
            Wl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Ti = Ti.next = e;
    return t
}
var Hr = null;
function _p(e) {
    Hr === null ? Hr = [e] : Hr.push(e)
}
function Bb(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    _p(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Dn(e, r)
}
function Dn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var $n = !1;
function kp(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function zb(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function En(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function or(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    X & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Dn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    _p(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Dn(e, n)
}
function dl(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        cp(e, n)
    }
}
function Tm(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Ul(e, t, n, r) {
    var i = e.updateQueue;
    $n = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var l = a
          , c = l.next;
        l.next = null,
        o === null ? s = c : o.next = c,
        o = l;
        var u = e.alternate;
        u !== null && (u = u.updateQueue,
        a = u.lastBaseUpdate,
        a !== o && (a === null ? u.firstBaseUpdate = c : a.next = c,
        u.lastBaseUpdate = l))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
        u = c = l = null,
        a = s;
        do {
            var f = a.lane
              , p = a.eventTime;
            if ((r & f) === f) {
                u !== null && (u = u.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var g = e
                      , v = a;
                    switch (f = t,
                    p = n,
                    v.tag) {
                    case 1:
                        if (g = v.payload,
                        typeof g == "function") {
                            d = g.call(p, d, f);
                            break e
                        }
                        d = g;
                        break e;
                    case 3:
                        g.flags = g.flags & -65537 | 128;
                    case 0:
                        if (g = v.payload,
                        f = typeof g == "function" ? g.call(p, d, f) : g,
                        f == null)
                            break e;
                        d = he({}, d, f);
                        break e;
                    case 2:
                        $n = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [a] : f.push(a))
            } else
                p = {
                    eventTime: p,
                    lane: f,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                u === null ? (c = u = p,
                l = d) : u = u.next = p,
                o |= f;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                f = a,
                a = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (1);
        if (u === null && (l = d),
        i.baseState = l,
        i.firstBaseUpdate = c,
        i.lastBaseUpdate = u,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        ii |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function Om(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(T(191, i));
                i.call(r)
            }
        }
}
var $b = new Bx.Component().refs;
function hf(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : he({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ac = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? ci(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = tt()
          , i = lr(e)
          , s = En(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = or(e, s, i),
        t !== null && (Xt(t, e, i, r),
        dl(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = tt()
          , i = lr(e)
          , s = En(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = or(e, s, i),
        t !== null && (Xt(t, e, i, r),
        dl(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = tt()
          , r = lr(e)
          , i = En(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = or(e, i, r),
        t !== null && (Xt(t, e, r, n),
        dl(t, e, r))
    }
};
function Am(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !wo(n, r) || !wo(i, s) : !0
}
function Hb(e, t, n) {
    var r = !1
      , i = gr
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = It(s) : (i = ut(t) ? ti : Qe.current,
    r = t.contextTypes,
    s = (r = r != null) ? Qi(e, i) : gr),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Ac,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Lm(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ac.enqueueReplaceState(t, t.state, null)
}
function pf(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = $b,
    kp(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = It(s) : (s = ut(t) ? ti : Qe.current,
    i.context = Qi(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (hf(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Ac.enqueueReplaceState(i, i.state, null),
    Ul(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function js(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(T(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(T(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                a === $b && (a = i.refs = {}),
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(T(284));
        if (!n._owner)
            throw Error(T(290, e))
    }
    return e
}
function ka(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(T(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Dm(e) {
    var t = e._init;
    return t(e._payload)
}
function Wb(e) {
    function t(y, m) {
        if (e) {
            var b = y.deletions;
            b === null ? (y.deletions = [m],
            y.flags |= 16) : b.push(m)
        }
    }
    function n(y, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(y, m),
            m = m.sibling;
        return null
    }
    function r(y, m) {
        for (y = new Map; m !== null; )
            m.key !== null ? y.set(m.key, m) : y.set(m.index, m),
            m = m.sibling;
        return y
    }
    function i(y, m) {
        return y = cr(y, m),
        y.index = 0,
        y.sibling = null,
        y
    }
    function s(y, m, b) {
        return y.index = b,
        e ? (b = y.alternate,
        b !== null ? (b = b.index,
        b < m ? (y.flags |= 2,
        m) : b) : (y.flags |= 2,
        m)) : (y.flags |= 1048576,
        m)
    }
    function o(y) {
        return e && y.alternate === null && (y.flags |= 2),
        y
    }
    function a(y, m, b, w) {
        return m === null || m.tag !== 6 ? (m = Yu(b, y.mode, w),
        m.return = y,
        m) : (m = i(m, b),
        m.return = y,
        m)
    }
    function l(y, m, b, w) {
        var k = b.type;
        return k === wi ? u(y, m, b.props.children, w, b.key) : m !== null && (m.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zn && Dm(k) === m.type) ? (w = i(m, b.props),
        w.ref = js(y, m, b),
        w.return = y,
        w) : (w = vl(b.type, b.key, b.props, null, y.mode, w),
        w.ref = js(y, m, b),
        w.return = y,
        w)
    }
    function c(y, m, b, w) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== b.containerInfo || m.stateNode.implementation !== b.implementation ? (m = Xu(b, y.mode, w),
        m.return = y,
        m) : (m = i(m, b.children || []),
        m.return = y,
        m)
    }
    function u(y, m, b, w, k) {
        return m === null || m.tag !== 7 ? (m = Kr(b, y.mode, w, k),
        m.return = y,
        m) : (m = i(m, b),
        m.return = y,
        m)
    }
    function d(y, m, b) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = Yu("" + m, y.mode, b),
            m.return = y,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case ha:
                return b = vl(m.type, m.key, m.props, null, y.mode, b),
                b.ref = js(y, null, m),
                b.return = y,
                b;
            case Si:
                return m = Xu(m, y.mode, b),
                m.return = y,
                m;
            case zn:
                var w = m._init;
                return d(y, w(m._payload), b)
            }
            if (zs(m) || ws(m))
                return m = Kr(m, y.mode, b, null),
                m.return = y,
                m;
            ka(y, m)
        }
        return null
    }
    function f(y, m, b, w) {
        var k = m !== null ? m.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return k !== null ? null : a(y, m, "" + b, w);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case ha:
                return b.key === k ? l(y, m, b, w) : null;
            case Si:
                return b.key === k ? c(y, m, b, w) : null;
            case zn:
                return k = b._init,
                f(y, m, k(b._payload), w)
            }
            if (zs(b) || ws(b))
                return k !== null ? null : u(y, m, b, w, null);
            ka(y, b)
        }
        return null
    }
    function p(y, m, b, w, k) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return y = y.get(b) || null,
            a(m, y, "" + w, k);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case ha:
                return y = y.get(w.key === null ? b : w.key) || null,
                l(m, y, w, k);
            case Si:
                return y = y.get(w.key === null ? b : w.key) || null,
                c(m, y, w, k);
            case zn:
                var P = w._init;
                return p(y, m, b, P(w._payload), k)
            }
            if (zs(w) || ws(w))
                return y = y.get(b) || null,
                u(m, y, w, k, null);
            ka(m, w)
        }
        return null
    }
    function g(y, m, b, w) {
        for (var k = null, P = null, _ = m, C = m = 0, j = null; _ !== null && C < b.length; C++) {
            _.index > C ? (j = _,
            _ = null) : j = _.sibling;
            var M = f(y, _, b[C], w);
            if (M === null) {
                _ === null && (_ = j);
                break
            }
            e && _ && M.alternate === null && t(y, _),
            m = s(M, m, C),
            P === null ? k = M : P.sibling = M,
            P = M,
            _ = j
        }
        if (C === b.length)
            return n(y, _),
            le && Lr(y, C),
            k;
        if (_ === null) {
            for (; C < b.length; C++)
                _ = d(y, b[C], w),
                _ !== null && (m = s(_, m, C),
                P === null ? k = _ : P.sibling = _,
                P = _);
            return le && Lr(y, C),
            k
        }
        for (_ = r(y, _); C < b.length; C++)
            j = p(_, y, C, b[C], w),
            j !== null && (e && j.alternate !== null && _.delete(j.key === null ? C : j.key),
            m = s(j, m, C),
            P === null ? k = j : P.sibling = j,
            P = j);
        return e && _.forEach(function(O) {
            return t(y, O)
        }),
        le && Lr(y, C),
        k
    }
    function v(y, m, b, w) {
        var k = ws(b);
        if (typeof k != "function")
            throw Error(T(150));
        if (b = k.call(b),
        b == null)
            throw Error(T(151));
        for (var P = k = null, _ = m, C = m = 0, j = null, M = b.next(); _ !== null && !M.done; C++,
        M = b.next()) {
            _.index > C ? (j = _,
            _ = null) : j = _.sibling;
            var O = f(y, _, M.value, w);
            if (O === null) {
                _ === null && (_ = j);
                break
            }
            e && _ && O.alternate === null && t(y, _),
            m = s(O, m, C),
            P === null ? k = O : P.sibling = O,
            P = O,
            _ = j
        }
        if (M.done)
            return n(y, _),
            le && Lr(y, C),
            k;
        if (_ === null) {
            for (; !M.done; C++,
            M = b.next())
                M = d(y, M.value, w),
                M !== null && (m = s(M, m, C),
                P === null ? k = M : P.sibling = M,
                P = M);
            return le && Lr(y, C),
            k
        }
        for (_ = r(y, _); !M.done; C++,
        M = b.next())
            M = p(_, y, C, M.value, w),
            M !== null && (e && M.alternate !== null && _.delete(M.key === null ? C : M.key),
            m = s(M, m, C),
            P === null ? k = M : P.sibling = M,
            P = M);
        return e && _.forEach(function(A) {
            return t(y, A)
        }),
        le && Lr(y, C),
        k
    }
    function S(y, m, b, w) {
        if (typeof b == "object" && b !== null && b.type === wi && b.key === null && (b = b.props.children),
        typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case ha:
                e: {
                    for (var k = b.key, P = m; P !== null; ) {
                        if (P.key === k) {
                            if (k = b.type,
                            k === wi) {
                                if (P.tag === 7) {
                                    n(y, P.sibling),
                                    m = i(P, b.props.children),
                                    m.return = y,
                                    y = m;
                                    break e
                                }
                            } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === zn && Dm(k) === P.type) {
                                n(y, P.sibling),
                                m = i(P, b.props),
                                m.ref = js(y, P, b),
                                m.return = y,
                                y = m;
                                break e
                            }
                            n(y, P);
                            break
                        } else
                            t(y, P);
                        P = P.sibling
                    }
                    b.type === wi ? (m = Kr(b.props.children, y.mode, w, b.key),
                    m.return = y,
                    y = m) : (w = vl(b.type, b.key, b.props, null, y.mode, w),
                    w.ref = js(y, m, b),
                    w.return = y,
                    y = w)
                }
                return o(y);
            case Si:
                e: {
                    for (P = b.key; m !== null; ) {
                        if (m.key === P)
                            if (m.tag === 4 && m.stateNode.containerInfo === b.containerInfo && m.stateNode.implementation === b.implementation) {
                                n(y, m.sibling),
                                m = i(m, b.children || []),
                                m.return = y,
                                y = m;
                                break e
                            } else {
                                n(y, m);
                                break
                            }
                        else
                            t(y, m);
                        m = m.sibling
                    }
                    m = Xu(b, y.mode, w),
                    m.return = y,
                    y = m
                }
                return o(y);
            case zn:
                return P = b._init,
                S(y, m, P(b._payload), w)
            }
            if (zs(b))
                return g(y, m, b, w);
            if (ws(b))
                return v(y, m, b, w);
            ka(y, b)
        }
        return typeof b == "string" && b !== "" || typeof b == "number" ? (b = "" + b,
        m !== null && m.tag === 6 ? (n(y, m.sibling),
        m = i(m, b),
        m.return = y,
        y = m) : (n(y, m),
        m = Yu(b, y.mode, w),
        m.return = y,
        y = m),
        o(y)) : n(y, m)
    }
    return S
}
var qi = Wb(!0)
  , Ub = Wb(!1)
  , qo = {}
  , an = br(qo)
  , Po = br(qo)
  , jo = br(qo);
function Wr(e) {
    if (e === qo)
        throw Error(T(174));
    return e
}
function Cp(e, t) {
    switch (ne(jo, t),
    ne(Po, e),
    ne(an, qo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ud(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = Ud(t, e)
    }
    se(an),
    ne(an, t)
}
function Ji() {
    se(an),
    se(Po),
    se(jo)
}
function Gb(e) {
    Wr(jo.current);
    var t = Wr(an.current)
      , n = Ud(t, e.type);
    t !== n && (ne(Po, e),
    ne(an, n))
}
function Pp(e) {
    Po.current === e && (se(an),
    se(Po))
}
var ce = br(0);
function Gl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var zu = [];
function jp() {
    for (var e = 0; e < zu.length; e++)
        zu[e]._workInProgressVersionPrimary = null;
    zu.length = 0
}
var fl = In.ReactCurrentDispatcher
  , $u = In.ReactCurrentBatchConfig
  , ri = 0
  , fe = null
  , je = null
  , Le = null
  , Yl = !1
  , eo = !1
  , Eo = 0
  , NP = 0;
function Ge() {
    throw Error(T(321))
}
function Ep(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Qt(e[n], t[n]))
            return !1;
    return !0
}
function Mp(e, t, n, r, i, s) {
    if (ri = s,
    fe = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    fl.current = e === null || e.memoizedState === null ? $P : HP,
    e = n(r, i),
    eo) {
        s = 0;
        do {
            if (eo = !1,
            Eo = 0,
            25 <= s)
                throw Error(T(301));
            s += 1,
            Le = je = null,
            t.updateQueue = null,
            fl.current = WP,
            e = n(r, i)
        } while (eo)
    }
    if (fl.current = Xl,
    t = je !== null && je.next !== null,
    ri = 0,
    Le = je = fe = null,
    Yl = !1,
    t)
        throw Error(T(300));
    return e
}
function Tp() {
    var e = Eo !== 0;
    return Eo = 0,
    e
}
function tn() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Le === null ? fe.memoizedState = Le = e : Le = Le.next = e,
    Le
}
function Nt() {
    if (je === null) {
        var e = fe.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = je.next;
    var t = Le === null ? fe.memoizedState : Le.next;
    if (t !== null)
        Le = t,
        je = e;
    else {
        if (e === null)
            throw Error(T(310));
        je = e,
        e = {
            memoizedState: je.memoizedState,
            baseState: je.baseState,
            baseQueue: je.baseQueue,
            queue: je.queue,
            next: null
        },
        Le === null ? fe.memoizedState = Le = e : Le = Le.next = e
    }
    return Le
}
function Mo(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Hu(e) {
    var t = Nt()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = je
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var a = o = null
          , l = null
          , c = s;
        do {
            var u = c.lane;
            if ((ri & u) === u)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var d = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = d,
                o = r) : l = l.next = d,
                fe.lanes |= u,
                ii |= u
            }
            c = c.next
        } while (c !== null && c !== s);
        l === null ? o = r : l.next = a,
        Qt(r, t.memoizedState) || (lt = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            fe.lanes |= s,
            ii |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Wu(e) {
    var t = Nt()
      , n = t.queue;
    if (n === null)
        throw Error(T(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        Qt(s, t.memoizedState) || (lt = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function Yb() {}
function Xb(e, t) {
    var n = fe
      , r = Nt()
      , i = t()
      , s = !Qt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    lt = !0),
    r = r.queue,
    Op(Zb.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Le !== null && Le.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        To(9, Qb.bind(null, n, r, i, t), void 0, null),
        Re === null)
            throw Error(T(349));
        ri & 30 || Kb(n, t, i)
    }
    return i
}
function Kb(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Qb(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    qb(t) && Jb(e)
}
function Zb(e, t, n) {
    return n(function() {
        qb(t) && Jb(e)
    })
}
function qb(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Qt(e, n)
    } catch {
        return !0
    }
}
function Jb(e) {
    var t = Dn(e, 1);
    t !== null && Xt(t, e, 1, -1)
}
function Rm(e) {
    var t = tn();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Mo,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = zP.bind(null, fe, e),
    [t.memoizedState, e]
}
function To(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = fe.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    fe.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function eS() {
    return Nt().memoizedState
}
function hl(e, t, n, r) {
    var i = tn();
    fe.flags |= e,
    i.memoizedState = To(1 | t, n, void 0, r === void 0 ? null : r)
}
function Lc(e, t, n, r) {
    var i = Nt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (je !== null) {
        var o = je.memoizedState;
        if (s = o.destroy,
        r !== null && Ep(r, o.deps)) {
            i.memoizedState = To(t, n, s, r);
            return
        }
    }
    fe.flags |= e,
    i.memoizedState = To(1 | t, n, s, r)
}
function Fm(e, t) {
    return hl(8390656, 8, e, t)
}
function Op(e, t) {
    return Lc(2048, 8, e, t)
}
function tS(e, t) {
    return Lc(4, 2, e, t)
}
function nS(e, t) {
    return Lc(4, 4, e, t)
}
function rS(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function iS(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Lc(4, 4, rS.bind(null, t, e), n)
}
function Ap() {}
function sS(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ep(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function oS(e, t) {
    var n = Nt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ep(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function aS(e, t, n) {
    return ri & 21 ? (Qt(n, t) || (n = ub(),
    fe.lanes |= n,
    ii |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    lt = !0),
    e.memoizedState = n)
}
function VP(e, t) {
    var n = q;
    q = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = $u.transition;
    $u.transition = {};
    try {
        e(!1),
        t()
    } finally {
        q = n,
        $u.transition = r
    }
}
function lS() {
    return Nt().memoizedState
}
function BP(e, t, n) {
    var r = lr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    cS(e))
        uS(t, n);
    else if (n = Bb(e, t, n, r),
    n !== null) {
        var i = tt();
        Xt(n, e, r, i),
        dS(n, t, r)
    }
}
function zP(e, t, n) {
    var r = lr(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (cS(e))
        uS(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                Qt(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    _p(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Bb(e, t, i, r),
        n !== null && (i = tt(),
        Xt(n, e, r, i),
        dS(n, t, r))
    }
}
function cS(e) {
    var t = e.alternate;
    return e === fe || t !== null && t === fe
}
function uS(e, t) {
    eo = Yl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function dS(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        cp(e, n)
    }
}
var Xl = {
    readContext: It,
    useCallback: Ge,
    useContext: Ge,
    useEffect: Ge,
    useImperativeHandle: Ge,
    useInsertionEffect: Ge,
    useLayoutEffect: Ge,
    useMemo: Ge,
    useReducer: Ge,
    useRef: Ge,
    useState: Ge,
    useDebugValue: Ge,
    useDeferredValue: Ge,
    useTransition: Ge,
    useMutableSource: Ge,
    useSyncExternalStore: Ge,
    useId: Ge,
    unstable_isNewReconciler: !1
}
  , $P = {
    readContext: It,
    useCallback: function(e, t) {
        return tn().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: It,
    useEffect: Fm,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        hl(4194308, 4, rS.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return hl(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return hl(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = tn();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = tn();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = BP.bind(null, fe, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = tn();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Rm,
    useDebugValue: Ap,
    useDeferredValue: function(e) {
        return tn().memoizedState = e
    },
    useTransition: function() {
        var e = Rm(!1)
          , t = e[0];
        return e = VP.bind(null, e[1]),
        tn().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = fe
          , i = tn();
        if (le) {
            if (n === void 0)
                throw Error(T(407));
            n = n()
        } else {
            if (n = t(),
            Re === null)
                throw Error(T(349));
            ri & 30 || Kb(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        Fm(Zb.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        To(9, Qb.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = tn()
          , t = Re.identifierPrefix;
        if (le) {
            var n = Cn
              , r = kn;
            n = (r & ~(1 << 32 - Yt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Eo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = NP++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , HP = {
    readContext: It,
    useCallback: sS,
    useContext: It,
    useEffect: Op,
    useImperativeHandle: iS,
    useInsertionEffect: tS,
    useLayoutEffect: nS,
    useMemo: oS,
    useReducer: Hu,
    useRef: eS,
    useState: function() {
        return Hu(Mo)
    },
    useDebugValue: Ap,
    useDeferredValue: function(e) {
        var t = Nt();
        return aS(t, je.memoizedState, e)
    },
    useTransition: function() {
        var e = Hu(Mo)[0]
          , t = Nt().memoizedState;
        return [e, t]
    },
    useMutableSource: Yb,
    useSyncExternalStore: Xb,
    useId: lS,
    unstable_isNewReconciler: !1
}
  , WP = {
    readContext: It,
    useCallback: sS,
    useContext: It,
    useEffect: Op,
    useImperativeHandle: iS,
    useInsertionEffect: tS,
    useLayoutEffect: nS,
    useMemo: oS,
    useReducer: Wu,
    useRef: eS,
    useState: function() {
        return Wu(Mo)
    },
    useDebugValue: Ap,
    useDeferredValue: function(e) {
        var t = Nt();
        return je === null ? t.memoizedState = e : aS(t, je.memoizedState, e)
    },
    useTransition: function() {
        var e = Wu(Mo)[0]
          , t = Nt().memoizedState;
        return [e, t]
    },
    useMutableSource: Yb,
    useSyncExternalStore: Xb,
    useId: lS,
    unstable_isNewReconciler: !1
};
function es(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += yC(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Uu(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function gf(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var UP = typeof WeakMap == "function" ? WeakMap : Map;
function fS(e, t, n) {
    n = En(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ql || (Ql = !0,
        Cf = r),
        gf(e, t)
    }
    ,
    n
}
function hS(e, t, n) {
    n = En(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            gf(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        gf(e, t),
        typeof r != "function" && (ar === null ? ar = new Set([this]) : ar.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Im(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new UP;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = sj.bind(null, e, t, n),
    t.then(e, e))
}
function Nm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Vm(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = En(-1, 1),
    t.tag = 2,
    or(n, t, 1))),
    n.lanes |= 1),
    e)
}
var GP = In.ReactCurrentOwner
  , lt = !1;
function et(e, t, n, r) {
    t.child = e === null ? Ub(t, null, n, r) : qi(t, e.child, n, r)
}
function Bm(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Wi(t, i),
    r = Mp(e, t, n, r, s, i),
    n = Tp(),
    e !== null && !lt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Rn(e, t, i)) : (le && n && vp(t),
    t.flags |= 1,
    et(e, t, r, i),
    t.child)
}
function zm(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Bp(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        pS(e, t, s, r, i)) : (e = vl(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : wo,
        n(o, r) && e.ref === t.ref)
            return Rn(e, t, i)
    }
    return t.flags |= 1,
    e = cr(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function pS(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (wo(s, r) && e.ref === t.ref)
            if (lt = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (lt = !0);
            else
                return t.lanes = e.lanes,
                Rn(e, t, i)
    }
    return mf(e, t, n, r, i)
}
function gS(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            ne(Ai, mt),
            mt |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                ne(Ai, mt),
                mt |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ne(Ai, mt),
            mt |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ne(Ai, mt),
        mt |= r;
    return et(e, t, i, n),
    t.child
}
function mS(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function mf(e, t, n, r, i) {
    var s = ut(n) ? ti : Qe.current;
    return s = Qi(t, s),
    Wi(t, i),
    n = Mp(e, t, n, r, s, i),
    r = Tp(),
    e !== null && !lt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Rn(e, t, i)) : (le && r && vp(t),
    t.flags |= 1,
    et(e, t, n, i),
    t.child)
}
function $m(e, t, n, r, i) {
    if (ut(n)) {
        var s = !0;
        Bl(t)
    } else
        s = !1;
    if (Wi(t, i),
    t.stateNode === null)
        pl(e, t),
        Hb(t, n, r),
        pf(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = It(c) : (c = ut(n) ? ti : Qe.current,
        c = Qi(t, c));
        var u = n.getDerivedStateFromProps
          , d = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== c) && Lm(t, o, r, c),
        $n = !1;
        var f = t.memoizedState;
        o.state = f,
        Ul(t, r, o, i),
        l = t.memoizedState,
        a !== r || f !== l || ct.current || $n ? (typeof u == "function" && (hf(t, n, u, r),
        l = t.memoizedState),
        (a = $n || Am(t, n, a, r, f, l, c)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = l),
        o.props = r,
        o.state = l,
        o.context = c,
        r = a) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        zb(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : Ht(t.type, a),
        o.props = c,
        d = t.pendingProps,
        f = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = It(l) : (l = ut(n) ? ti : Qe.current,
        l = Qi(t, l));
        var p = n.getDerivedStateFromProps;
        (u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== d || f !== l) && Lm(t, o, r, l),
        $n = !1,
        f = t.memoizedState,
        o.state = f,
        Ul(t, r, o, i);
        var g = t.memoizedState;
        a !== d || f !== g || ct.current || $n ? (typeof p == "function" && (hf(t, n, p, r),
        g = t.memoizedState),
        (c = $n || Am(t, n, c, r, f, g, l) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = g),
        o.props = r,
        o.state = g,
        o.context = l,
        r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return vf(e, t, n, r, s, i)
}
function vf(e, t, n, r, i, s) {
    mS(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && jm(t, n, !1),
        Rn(e, t, s);
    r = t.stateNode,
    GP.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = qi(t, e.child, null, s),
    t.child = qi(t, null, a, s)) : et(e, t, a, s),
    t.memoizedState = r.state,
    i && jm(t, n, !0),
    t.child
}
function vS(e) {
    var t = e.stateNode;
    t.pendingContext ? Pm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Pm(e, t.context, !1),
    Cp(e, t.containerInfo)
}
function Hm(e, t, n, r, i) {
    return Zi(),
    xp(i),
    t.flags |= 256,
    et(e, t, n, r),
    t.child
}
var yf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function xf(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function yS(e, t, n) {
    var r = t.pendingProps, i = ce.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    ne(ce, i & 1),
    e === null)
        return df(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Fc(o, r, 0, null),
        e = Kr(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = xf(n),
        t.memoizedState = yf,
        e) : Lp(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return YP(e, t, o, r, a, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        a = i.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = l,
        t.deletions = null) : (r = cr(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = cr(a, s) : (s = Kr(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? xf(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = yf,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = cr(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Lp(e, t) {
    return t = Fc({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ca(e, t, n, r) {
    return r !== null && xp(r),
    qi(t, e.child, null, n),
    e = Lp(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function YP(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Uu(Error(T(422))),
        Ca(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Fc({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = Kr(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && qi(t, e.child, null, o),
        t.child.memoizedState = xf(o),
        t.memoizedState = yf,
        s);
    if (!(t.mode & 1))
        return Ca(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(T(419)),
        r = Uu(s, r, void 0),
        Ca(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    lt || a) {
        if (r = Re,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            Dn(e, i),
            Xt(r, e, i, -1))
        }
        return Vp(),
        r = Uu(Error(T(421))),
        Ca(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = oj.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    yt = sr(i.nextSibling),
    wt = t,
    le = !0,
    Gt = null,
    e !== null && (At[Lt++] = kn,
    At[Lt++] = Cn,
    At[Lt++] = ni,
    kn = e.id,
    Cn = e.overflow,
    ni = t),
    t = Lp(t, r.children),
    t.flags |= 4096,
    t)
}
function Wm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    ff(e.return, t, n)
}
function Gu(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function xS(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (et(e, t, r.children, n),
    r = ce.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Wm(e, n, t);
                else if (e.tag === 19)
                    Wm(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (ne(ce, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Gl(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Gu(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Gl(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Gu(t, !0, n, null, s);
            break;
        case "together":
            Gu(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function pl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Rn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    ii |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(T(153));
    if (t.child !== null) {
        for (e = t.child,
        n = cr(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = cr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function XP(e, t, n) {
    switch (t.tag) {
    case 3:
        vS(t),
        Zi();
        break;
    case 5:
        Gb(t);
        break;
    case 1:
        ut(t.type) && Bl(t);
        break;
    case 4:
        Cp(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        ne(Hl, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ne(ce, ce.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? yS(e, t, n) : (ne(ce, ce.current & 1),
            e = Rn(e, t, n),
            e !== null ? e.sibling : null);
        ne(ce, ce.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return xS(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        ne(ce, ce.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        gS(e, t, n)
    }
    return Rn(e, t, n)
}
var bS, bf, SS, wS;
bS = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
bf = function() {}
;
SS = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Wr(an.current);
        var s = null;
        switch (n) {
        case "input":
            i = zd(e, i),
            r = zd(e, r),
            s = [];
            break;
        case "select":
            i = he({}, i, {
                value: void 0
            }),
            r = he({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Wd(e, i),
            r = Wd(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Nl)
        }
        Gd(n, r);
        var o;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var a = i[c];
                    for (o in a)
                        a.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (go.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (a = i != null ? i[c] : void 0,
            r.hasOwnProperty(c) && l !== a && (l != null || a != null))
                if (c === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || l && l.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in l)
                            l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}),
                            n[o] = l[o])
                    } else
                        n || (s || (s = []),
                        s.push(c, n)),
                        n = l;
                else
                    c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                    a = a ? a.__html : void 0,
                    l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (go.hasOwnProperty(c) ? (l != null && c === "onScroll" && re("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(c, l))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
wS = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Es(e, t) {
    if (!le)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ye(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function KP(e, t, n) {
    var r = t.pendingProps;
    switch (yp(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ye(t),
        null;
    case 1:
        return ut(t.type) && Vl(),
        Ye(t),
        null;
    case 3:
        return r = t.stateNode,
        Ji(),
        se(ct),
        se(Qe),
        jp(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (_a(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Gt !== null && (Ef(Gt),
        Gt = null))),
        bf(e, t),
        Ye(t),
        null;
    case 5:
        Pp(t);
        var i = Wr(jo.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            SS(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(T(166));
                return Ye(t),
                null
            }
            if (e = Wr(an.current),
            _a(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[sn] = t,
                r[Co] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    re("cancel", r),
                    re("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    re("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Hs.length; i++)
                        re(Hs[i], r);
                    break;
                case "source":
                    re("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    re("error", r),
                    re("load", r);
                    break;
                case "details":
                    re("toggle", r);
                    break;
                case "input":
                    Jg(r, s),
                    re("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    re("invalid", r);
                    break;
                case "textarea":
                    tm(r, s),
                    re("invalid", r)
                }
                Gd(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && wa(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && wa(r.textContent, a, e),
                        i = ["children", "" + a]) : go.hasOwnProperty(o) && a != null && o === "onScroll" && re("scroll", r)
                    }
                switch (n) {
                case "input":
                    pa(r),
                    em(r, s, !0);
                    break;
                case "textarea":
                    pa(r),
                    nm(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = Nl)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Kx(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[sn] = t,
                e[Co] = r,
                bS(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = Yd(n, r),
                    n) {
                    case "dialog":
                        re("cancel", e),
                        re("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        re("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Hs.length; i++)
                            re(Hs[i], e);
                        i = r;
                        break;
                    case "source":
                        re("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        re("error", e),
                        re("load", e),
                        i = r;
                        break;
                    case "details":
                        re("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Jg(e, r),
                        i = zd(e, r),
                        re("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = he({}, r, {
                            value: void 0
                        }),
                        re("invalid", e);
                        break;
                    case "textarea":
                        tm(e, r),
                        i = Wd(e, r),
                        re("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Gd(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? qx(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Qx(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && mo(e, l) : typeof l == "number" && mo(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (go.hasOwnProperty(s) ? l != null && s === "onScroll" && re("scroll", e) : l != null && rp(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        pa(e),
                        em(e, r, !1);
                        break;
                    case "textarea":
                        pa(e),
                        nm(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + pr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Bi(e, !!r.multiple, s, !1) : r.defaultValue != null && Bi(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = Nl)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return Ye(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            wS(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(T(166));
            if (n = Wr(jo.current),
            Wr(an.current),
            _a(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[sn] = t,
                (s = r.nodeValue !== n) && (e = wt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        wa(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && wa(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[sn] = t,
                t.stateNode = r
        }
        return Ye(t),
        null;
    case 13:
        if (se(ce),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (le && yt !== null && t.mode & 1 && !(t.flags & 128))
                Vb(),
                Zi(),
                t.flags |= 98560,
                s = !1;
            else if (s = _a(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(T(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(T(317));
                    s[sn] = t
                } else
                    Zi(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                Ye(t),
                s = !1
            } else
                Gt !== null && (Ef(Gt),
                Gt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || ce.current & 1 ? Ee === 0 && (Ee = 3) : Vp())),
        t.updateQueue !== null && (t.flags |= 4),
        Ye(t),
        null);
    case 4:
        return Ji(),
        bf(e, t),
        e === null && _o(t.stateNode.containerInfo),
        Ye(t),
        null;
    case 10:
        return wp(t.type._context),
        Ye(t),
        null;
    case 17:
        return ut(t.type) && Vl(),
        Ye(t),
        null;
    case 19:
        if (se(ce),
        s = t.memoizedState,
        s === null)
            return Ye(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                Es(s, !1);
            else {
                if (Ee !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Gl(e),
                        o !== null) {
                            for (t.flags |= 128,
                            Es(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return ne(ce, ce.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && Se() > ts && (t.flags |= 128,
                r = !0,
                Es(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Gl(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Es(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !le)
                        return Ye(t),
                        null
                } else
                    2 * Se() - s.renderingStartTime > ts && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Es(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = Se(),
        t.sibling = null,
        n = ce.current,
        ne(ce, r ? n & 1 | 2 : n & 1),
        t) : (Ye(t),
        null);
    case 22:
    case 23:
        return Np(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? mt & 1073741824 && (Ye(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : Ye(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(T(156, t.tag))
}
function QP(e, t) {
    switch (yp(t),
    t.tag) {
    case 1:
        return ut(t.type) && Vl(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Ji(),
        se(ct),
        se(Qe),
        jp(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Pp(t),
        null;
    case 13:
        if (se(ce),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(T(340));
            Zi()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return se(ce),
        null;
    case 4:
        return Ji(),
        null;
    case 10:
        return wp(t.type._context),
        null;
    case 22:
    case 23:
        return Np(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Pa = !1
  , Ke = !1
  , ZP = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function Oi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                ge(e, t, r)
            }
        else
            n.current = null
}
function Sf(e, t, n) {
    try {
        n()
    } catch (r) {
        ge(e, t, r)
    }
}
var Um = !1;
function qP(e, t) {
    if (rf = Rl,
    e = Pb(),
    mp(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , l = -1
                      , c = 0
                      , u = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var p; d !== n || i !== 0 && d.nodeType !== 3 || (a = o + i),
                        d !== s || r !== 0 && d.nodeType !== 3 || (l = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (p = d.firstChild) !== null; )
                            f = d,
                            d = p;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++c === i && (a = o),
                            f === s && ++u === r && (l = o),
                            (p = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = p
                    }
                    n = a === -1 || l === -1 ? null : {
                        start: a,
                        end: l
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (sf = {
        focusedElem: e,
        selectionRange: n
    },
    Rl = !1,
    F = t; F !== null; )
        if (t = F,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            F = e;
        else
            for (; F !== null; ) {
                t = F;
                try {
                    var g = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (g !== null) {
                                var v = g.memoizedProps
                                  , S = g.memoizedState
                                  , y = t.stateNode
                                  , m = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : Ht(t.type, v), S);
                                y.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var b = t.stateNode.containerInfo;
                            b.nodeType === 1 ? b.textContent = "" : b.nodeType === 9 && b.documentElement && b.removeChild(b.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(T(163))
                        }
                } catch (w) {
                    ge(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return g = Um,
    Um = !1,
    g
}
function to(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Sf(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Dc(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function wf(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function _S(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    _S(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[sn],
    delete t[Co],
    delete t[lf],
    delete t[DP],
    delete t[RP])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function kS(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Gm(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || kS(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function _f(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Nl));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (_f(e, t, n),
        e = e.sibling; e !== null; )
            _f(e, t, n),
            e = e.sibling
}
function kf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (kf(e, t, n),
        e = e.sibling; e !== null; )
            kf(e, t, n),
            e = e.sibling
}
var ze = null
  , Wt = !1;
function Nn(e, t, n) {
    for (n = n.child; n !== null; )
        CS(e, t, n),
        n = n.sibling
}
function CS(e, t, n) {
    if (on && typeof on.onCommitFiberUnmount == "function")
        try {
            on.onCommitFiberUnmount(Pc, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ke || Oi(n, t);
    case 6:
        var r = ze
          , i = Wt;
        ze = null,
        Nn(e, t, n),
        ze = r,
        Wt = i,
        ze !== null && (Wt ? (e = ze,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ze.removeChild(n.stateNode));
        break;
    case 18:
        ze !== null && (Wt ? (e = ze,
        n = n.stateNode,
        e.nodeType === 8 ? Vu(e.parentNode, n) : e.nodeType === 1 && Vu(e, n),
        bo(e)) : Vu(ze, n.stateNode));
        break;
    case 4:
        r = ze,
        i = Wt,
        ze = n.stateNode.containerInfo,
        Wt = !0,
        Nn(e, t, n),
        ze = r,
        Wt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ke && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Sf(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Nn(e, t, n);
        break;
    case 1:
        if (!Ke && (Oi(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                ge(n, t, a)
            }
        Nn(e, t, n);
        break;
    case 21:
        Nn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ke = (r = Ke) || n.memoizedState !== null,
        Nn(e, t, n),
        Ke = r) : Nn(e, t, n);
        break;
    default:
        Nn(e, t, n)
    }
}
function Ym(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new ZP),
        t.forEach(function(r) {
            var i = aj.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function zt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        ze = a.stateNode,
                        Wt = !1;
                        break e;
                    case 3:
                        ze = a.stateNode.containerInfo,
                        Wt = !0;
                        break e;
                    case 4:
                        ze = a.stateNode.containerInfo,
                        Wt = !0;
                        break e
                    }
                    a = a.return
                }
                if (ze === null)
                    throw Error(T(160));
                CS(s, o, i),
                ze = null,
                Wt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (c) {
                ge(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            PS(t, e),
            t = t.sibling
}
function PS(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (zt(t, e),
        Jt(e),
        r & 4) {
            try {
                to(3, e, e.return),
                Dc(3, e)
            } catch (v) {
                ge(e, e.return, v)
            }
            try {
                to(5, e, e.return)
            } catch (v) {
                ge(e, e.return, v)
            }
        }
        break;
    case 1:
        zt(t, e),
        Jt(e),
        r & 512 && n !== null && Oi(n, n.return);
        break;
    case 5:
        if (zt(t, e),
        Jt(e),
        r & 512 && n !== null && Oi(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                mo(i, "")
            } catch (v) {
                ge(e, e.return, v)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , a = e.type
              , l = e.updateQueue;
            if (e.updateQueue = null,
            l !== null)
                try {
                    a === "input" && s.type === "radio" && s.name != null && Yx(i, s),
                    Yd(a, o);
                    var c = Yd(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var u = l[o]
                          , d = l[o + 1];
                        u === "style" ? qx(i, d) : u === "dangerouslySetInnerHTML" ? Qx(i, d) : u === "children" ? mo(i, d) : rp(i, u, d, c)
                    }
                    switch (a) {
                    case "input":
                        $d(i, s);
                        break;
                    case "textarea":
                        Xx(i, s);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        p != null ? Bi(i, !!s.multiple, p, !1) : f !== !!s.multiple && (s.defaultValue != null ? Bi(i, !!s.multiple, s.defaultValue, !0) : Bi(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Co] = s
                } catch (v) {
                    ge(e, e.return, v)
                }
        }
        break;
    case 6:
        if (zt(t, e),
        Jt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(T(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (v) {
                ge(e, e.return, v)
            }
        }
        break;
    case 3:
        if (zt(t, e),
        Jt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                bo(t.containerInfo)
            } catch (v) {
                ge(e, e.return, v)
            }
        break;
    case 4:
        zt(t, e),
        Jt(e);
        break;
    case 13:
        zt(t, e),
        Jt(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Fp = Se())),
        r & 4 && Ym(e);
        break;
    case 22:
        if (u = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Ke = (c = Ke) || u,
        zt(t, e),
        Ke = c) : zt(t, e),
        Jt(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !u && e.mode & 1)
                for (F = e,
                u = e.child; u !== null; ) {
                    for (d = F = u; F !== null; ) {
                        switch (f = F,
                        p = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            to(4, f, f.return);
                            break;
                        case 1:
                            Oi(f, f.return);
                            var g = f.stateNode;
                            if (typeof g.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    g.props = t.memoizedProps,
                                    g.state = t.memoizedState,
                                    g.componentWillUnmount()
                                } catch (v) {
                                    ge(r, n, v)
                                }
                            }
                            break;
                        case 5:
                            Oi(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                Km(d);
                                continue
                            }
                        }
                        p !== null ? (p.return = f,
                        F = p) : Km(d)
                    }
                    u = u.sibling
                }
            e: for (u = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (u === null) {
                        u = d;
                        try {
                            i = d.stateNode,
                            c ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = d.stateNode,
                            l = d.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Zx("display", o))
                        } catch (v) {
                            ge(e, e.return, v)
                        }
                    }
                } else if (d.tag === 6) {
                    if (u === null)
                        try {
                            d.stateNode.nodeValue = c ? "" : d.memoizedProps
                        } catch (v) {
                            ge(e, e.return, v)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    u === d && (u = null),
                    d = d.return
                }
                u === d && (u = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        zt(t, e),
        Jt(e),
        r & 4 && Ym(e);
        break;
    case 21:
        break;
    default:
        zt(t, e),
        Jt(e)
    }
}
function Jt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (kS(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(T(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (mo(i, ""),
                r.flags &= -33);
                var s = Gm(e);
                kf(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = Gm(e);
                _f(e, a, o);
                break;
            default:
                throw Error(T(161))
            }
        } catch (l) {
            ge(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function JP(e, t, n) {
    F = e,
    jS(e)
}
function jS(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var i = F
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Pa;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || Ke;
                a = Pa;
                var c = Ke;
                if (Pa = o,
                (Ke = l) && !c)
                    for (F = i; F !== null; )
                        o = F,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Qm(i) : l !== null ? (l.return = o,
                        F = l) : Qm(i);
                for (; s !== null; )
                    F = s,
                    jS(s),
                    s = s.sibling;
                F = i,
                Pa = a,
                Ke = c
            }
            Xm(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            F = s) : Xm(e)
    }
}
function Xm(e) {
    for (; F !== null; ) {
        var t = F;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ke || Dc(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ke)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Ht(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Om(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Om(t, o, n)
                        }
                        break;
                    case 5:
                        var a = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = a;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var d = u.dehydrated;
                                    d !== null && bo(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(T(163))
                    }
                Ke || t.flags & 512 && wf(t)
            } catch (f) {
                ge(t, t.return, f)
            }
        }
        if (t === e) {
            F = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Km(e) {
    for (; F !== null; ) {
        var t = F;
        if (t === e) {
            F = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            F = n;
            break
        }
        F = t.return
    }
}
function Qm(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Dc(4, t)
                } catch (l) {
                    ge(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        ge(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    wf(t)
                } catch (l) {
                    ge(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    wf(t)
                } catch (l) {
                    ge(t, o, l)
                }
            }
        } catch (l) {
            ge(t, t.return, l)
        }
        if (t === e) {
            F = null;
            break
        }
        var a = t.sibling;
        if (a !== null) {
            a.return = t.return,
            F = a;
            break
        }
        F = t.return
    }
}
var ej = Math.ceil
  , Kl = In.ReactCurrentDispatcher
  , Dp = In.ReactCurrentOwner
  , Ft = In.ReactCurrentBatchConfig
  , X = 0
  , Re = null
  , ke = null
  , $e = 0
  , mt = 0
  , Ai = br(0)
  , Ee = 0
  , Oo = null
  , ii = 0
  , Rc = 0
  , Rp = 0
  , no = null
  , ot = null
  , Fp = 0
  , ts = 1 / 0
  , bn = null
  , Ql = !1
  , Cf = null
  , ar = null
  , ja = !1
  , Yn = null
  , Zl = 0
  , ro = 0
  , Pf = null
  , gl = -1
  , ml = 0;
function tt() {
    return X & 6 ? Se() : gl !== -1 ? gl : gl = Se()
}
function lr(e) {
    return e.mode & 1 ? X & 2 && $e !== 0 ? $e & -$e : IP.transition !== null ? (ml === 0 && (ml = ub()),
    ml) : (e = q,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : vb(e.type)),
    e) : 1
}
function Xt(e, t, n, r) {
    if (50 < ro)
        throw ro = 0,
        Pf = null,
        Error(T(185));
    Ko(e, n, r),
    (!(X & 2) || e !== Re) && (e === Re && (!(X & 2) && (Rc |= n),
    Ee === 4 && Un(e, $e)),
    dt(e, r),
    n === 1 && X === 0 && !(t.mode & 1) && (ts = Se() + 500,
    Oc && Sr()))
}
function dt(e, t) {
    var n = e.callbackNode;
    IC(e, t);
    var r = Dl(e, e === Re ? $e : 0);
    if (r === 0)
        n !== null && sm(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && sm(n),
        t === 1)
            e.tag === 0 ? FP(Zm.bind(null, e)) : Fb(Zm.bind(null, e)),
            AP(function() {
                !(X & 6) && Sr()
            }),
            n = null;
        else {
            switch (db(r)) {
            case 1:
                n = lp;
                break;
            case 4:
                n = lb;
                break;
            case 16:
                n = Ll;
                break;
            case 536870912:
                n = cb;
                break;
            default:
                n = Ll
            }
            n = RS(n, ES.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function ES(e, t) {
    if (gl = -1,
    ml = 0,
    X & 6)
        throw Error(T(327));
    var n = e.callbackNode;
    if (Ui() && e.callbackNode !== n)
        return null;
    var r = Dl(e, e === Re ? $e : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ql(e, r);
    else {
        t = r;
        var i = X;
        X |= 2;
        var s = TS();
        (Re !== e || $e !== t) && (bn = null,
        ts = Se() + 500,
        Xr(e, t));
        do
            try {
                rj();
                break
            } catch (a) {
                MS(e, a)
            }
        while (1);
        Sp(),
        Kl.current = s,
        X = i,
        ke !== null ? t = 0 : (Re = null,
        $e = 0,
        t = Ee)
    }
    if (t !== 0) {
        if (t === 2 && (i = qd(e),
        i !== 0 && (r = i,
        t = jf(e, i))),
        t === 1)
            throw n = Oo,
            Xr(e, 0),
            Un(e, r),
            dt(e, Se()),
            n;
        if (t === 6)
            Un(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !tj(i) && (t = ql(e, r),
            t === 2 && (s = qd(e),
            s !== 0 && (r = s,
            t = jf(e, s))),
            t === 1))
                throw n = Oo,
                Xr(e, 0),
                Un(e, r),
                dt(e, Se()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(T(345));
            case 2:
                Dr(e, ot, bn);
                break;
            case 3:
                if (Un(e, r),
                (r & 130023424) === r && (t = Fp + 500 - Se(),
                10 < t)) {
                    if (Dl(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        tt(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = af(Dr.bind(null, e, ot, bn), t);
                    break
                }
                Dr(e, ot, bn);
                break;
            case 4:
                if (Un(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Yt(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = Se() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ej(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = af(Dr.bind(null, e, ot, bn), r);
                    break
                }
                Dr(e, ot, bn);
                break;
            case 5:
                Dr(e, ot, bn);
                break;
            default:
                throw Error(T(329))
            }
        }
    }
    return dt(e, Se()),
    e.callbackNode === n ? ES.bind(null, e) : null
}
function jf(e, t) {
    var n = no;
    return e.current.memoizedState.isDehydrated && (Xr(e, t).flags |= 256),
    e = ql(e, t),
    e !== 2 && (t = ot,
    ot = n,
    t !== null && Ef(t)),
    e
}
function Ef(e) {
    ot === null ? ot = e : ot.push.apply(ot, e)
}
function tj(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!Qt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Un(e, t) {
    for (t &= ~Rp,
    t &= ~Rc,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Yt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Zm(e) {
    if (X & 6)
        throw Error(T(327));
    Ui();
    var t = Dl(e, 0);
    if (!(t & 1))
        return dt(e, Se()),
        null;
    var n = ql(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = qd(e);
        r !== 0 && (t = r,
        n = jf(e, r))
    }
    if (n === 1)
        throw n = Oo,
        Xr(e, 0),
        Un(e, t),
        dt(e, Se()),
        n;
    if (n === 6)
        throw Error(T(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Dr(e, ot, bn),
    dt(e, Se()),
    null
}
function Ip(e, t) {
    var n = X;
    X |= 1;
    try {
        return e(t)
    } finally {
        X = n,
        X === 0 && (ts = Se() + 500,
        Oc && Sr())
    }
}
function si(e) {
    Yn !== null && Yn.tag === 0 && !(X & 6) && Ui();
    var t = X;
    X |= 1;
    var n = Ft.transition
      , r = q;
    try {
        if (Ft.transition = null,
        q = 1,
        e)
            return e()
    } finally {
        q = r,
        Ft.transition = n,
        X = t,
        !(X & 6) && Sr()
    }
}
function Np() {
    mt = Ai.current,
    se(Ai)
}
function Xr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    OP(n)),
    ke !== null)
        for (n = ke.return; n !== null; ) {
            var r = n;
            switch (yp(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Vl();
                break;
            case 3:
                Ji(),
                se(ct),
                se(Qe),
                jp();
                break;
            case 5:
                Pp(r);
                break;
            case 4:
                Ji();
                break;
            case 13:
                se(ce);
                break;
            case 19:
                se(ce);
                break;
            case 10:
                wp(r.type._context);
                break;
            case 22:
            case 23:
                Np()
            }
            n = n.return
        }
    if (Re = e,
    ke = e = cr(e.current, null),
    $e = mt = t,
    Ee = 0,
    Oo = null,
    Rp = Rc = ii = 0,
    ot = no = null,
    Hr !== null) {
        for (t = 0; t < Hr.length; t++)
            if (n = Hr[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        Hr = null
    }
    return e
}
function MS(e, t) {
    do {
        var n = ke;
        try {
            if (Sp(),
            fl.current = Xl,
            Yl) {
                for (var r = fe.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Yl = !1
            }
            if (ri = 0,
            Le = je = fe = null,
            eo = !1,
            Eo = 0,
            Dp.current = null,
            n === null || n.return === null) {
                Ee = 1,
                Oo = t,
                ke = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = $e,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , u = a
                      , d = u.tag;
                    if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = u.alternate;
                        f ? (u.updateQueue = f.updateQueue,
                        u.memoizedState = f.memoizedState,
                        u.lanes = f.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var p = Nm(o);
                    if (p !== null) {
                        p.flags &= -257,
                        Vm(p, o, a, s, t),
                        p.mode & 1 && Im(s, c, t),
                        t = p,
                        l = c;
                        var g = t.updateQueue;
                        if (g === null) {
                            var v = new Set;
                            v.add(l),
                            t.updateQueue = v
                        } else
                            g.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Im(s, c, t),
                            Vp();
                            break e
                        }
                        l = Error(T(426))
                    }
                } else if (le && a.mode & 1) {
                    var S = Nm(o);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256),
                        Vm(S, o, a, s, t),
                        xp(es(l, a));
                        break e
                    }
                }
                s = l = es(l, a),
                Ee !== 4 && (Ee = 2),
                no === null ? no = [s] : no.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var y = fS(s, l, t);
                        Tm(s, y);
                        break e;
                    case 1:
                        a = l;
                        var m = s.type
                          , b = s.stateNode;
                        if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || b !== null && typeof b.componentDidCatch == "function" && (ar === null || !ar.has(b)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var w = hS(s, a, t);
                            Tm(s, w);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            AS(n)
        } catch (k) {
            t = k,
            ke === n && n !== null && (ke = n = n.return);
            continue
        }
        break
    } while (1)
}
function TS() {
    var e = Kl.current;
    return Kl.current = Xl,
    e === null ? Xl : e
}
function Vp() {
    (Ee === 0 || Ee === 3 || Ee === 2) && (Ee = 4),
    Re === null || !(ii & 268435455) && !(Rc & 268435455) || Un(Re, $e)
}
function ql(e, t) {
    var n = X;
    X |= 2;
    var r = TS();
    (Re !== e || $e !== t) && (bn = null,
    Xr(e, t));
    do
        try {
            nj();
            break
        } catch (i) {
            MS(e, i)
        }
    while (1);
    if (Sp(),
    X = n,
    Kl.current = r,
    ke !== null)
        throw Error(T(261));
    return Re = null,
    $e = 0,
    Ee
}
function nj() {
    for (; ke !== null; )
        OS(ke)
}
function rj() {
    for (; ke !== null && !EC(); )
        OS(ke)
}
function OS(e) {
    var t = DS(e.alternate, e, mt);
    e.memoizedProps = e.pendingProps,
    t === null ? AS(e) : ke = t,
    Dp.current = null
}
function AS(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = QP(n, t),
            n !== null) {
                n.flags &= 32767,
                ke = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ee = 6,
                ke = null;
                return
            }
        } else if (n = KP(n, t, mt),
        n !== null) {
            ke = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ke = t;
            return
        }
        ke = t = e
    } while (t !== null);
    Ee === 0 && (Ee = 5)
}
function Dr(e, t, n) {
    var r = q
      , i = Ft.transition;
    try {
        Ft.transition = null,
        q = 1,
        ij(e, t, n, r)
    } finally {
        Ft.transition = i,
        q = r
    }
    return null
}
function ij(e, t, n, r) {
    do
        Ui();
    while (Yn !== null);
    if (X & 6)
        throw Error(T(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(T(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (NC(e, s),
    e === Re && (ke = Re = null,
    $e = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || ja || (ja = !0,
    RS(Ll, function() {
        return Ui(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Ft.transition,
        Ft.transition = null;
        var o = q;
        q = 1;
        var a = X;
        X |= 4,
        Dp.current = null,
        qP(e, n),
        PS(n, e),
        kP(sf),
        Rl = !!rf,
        sf = rf = null,
        e.current = n,
        JP(n),
        MC(),
        X = a,
        q = o,
        Ft.transition = s
    } else
        e.current = n;
    if (ja && (ja = !1,
    Yn = e,
    Zl = i),
    s = e.pendingLanes,
    s === 0 && (ar = null),
    AC(n.stateNode),
    dt(e, Se()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Ql)
        throw Ql = !1,
        e = Cf,
        Cf = null,
        e;
    return Zl & 1 && e.tag !== 0 && Ui(),
    s = e.pendingLanes,
    s & 1 ? e === Pf ? ro++ : (ro = 0,
    Pf = e) : ro = 0,
    Sr(),
    null
}
function Ui() {
    if (Yn !== null) {
        var e = db(Zl)
          , t = Ft.transition
          , n = q;
        try {
            if (Ft.transition = null,
            q = 16 > e ? 16 : e,
            Yn === null)
                var r = !1;
            else {
                if (e = Yn,
                Yn = null,
                Zl = 0,
                X & 6)
                    throw Error(T(331));
                var i = X;
                for (X |= 4,
                F = e.current; F !== null; ) {
                    var s = F
                      , o = s.child;
                    if (F.flags & 16) {
                        var a = s.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var c = a[l];
                                for (F = c; F !== null; ) {
                                    var u = F;
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        to(8, u, s)
                                    }
                                    var d = u.child;
                                    if (d !== null)
                                        d.return = u,
                                        F = d;
                                    else
                                        for (; F !== null; ) {
                                            u = F;
                                            var f = u.sibling
                                              , p = u.return;
                                            if (_S(u),
                                            u === c) {
                                                F = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = p,
                                                F = f;
                                                break
                                            }
                                            F = p
                                        }
                                }
                            }
                            var g = s.alternate;
                            if (g !== null) {
                                var v = g.child;
                                if (v !== null) {
                                    g.child = null;
                                    do {
                                        var S = v.sibling;
                                        v.sibling = null,
                                        v = S
                                    } while (v !== null)
                                }
                            }
                            F = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        F = o;
                    else
                        e: for (; F !== null; ) {
                            if (s = F,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    to(9, s, s.return)
                                }
                            var y = s.sibling;
                            if (y !== null) {
                                y.return = s.return,
                                F = y;
                                break e
                            }
                            F = s.return
                        }
                }
                var m = e.current;
                for (F = m; F !== null; ) {
                    o = F;
                    var b = o.child;
                    if (o.subtreeFlags & 2064 && b !== null)
                        b.return = o,
                        F = b;
                    else
                        e: for (o = m; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Dc(9, a)
                                    }
                                } catch (k) {
                                    ge(a, a.return, k)
                                }
                            if (a === o) {
                                F = null;
                                break e
                            }
                            var w = a.sibling;
                            if (w !== null) {
                                w.return = a.return,
                                F = w;
                                break e
                            }
                            F = a.return
                        }
                }
                if (X = i,
                Sr(),
                on && typeof on.onPostCommitFiberRoot == "function")
                    try {
                        on.onPostCommitFiberRoot(Pc, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            q = n,
            Ft.transition = t
        }
    }
    return !1
}
function qm(e, t, n) {
    t = es(n, t),
    t = fS(e, t, 1),
    e = or(e, t, 1),
    t = tt(),
    e !== null && (Ko(e, 1, t),
    dt(e, t))
}
function ge(e, t, n) {
    if (e.tag === 3)
        qm(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                qm(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ar === null || !ar.has(r))) {
                    e = es(n, e),
                    e = hS(t, e, 1),
                    t = or(t, e, 1),
                    e = tt(),
                    t !== null && (Ko(t, 1, e),
                    dt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function sj(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = tt(),
    e.pingedLanes |= e.suspendedLanes & n,
    Re === e && ($e & n) === n && (Ee === 4 || Ee === 3 && ($e & 130023424) === $e && 500 > Se() - Fp ? Xr(e, 0) : Rp |= n),
    dt(e, t)
}
function LS(e, t) {
    t === 0 && (e.mode & 1 ? (t = va,
    va <<= 1,
    !(va & 130023424) && (va = 4194304)) : t = 1);
    var n = tt();
    e = Dn(e, t),
    e !== null && (Ko(e, t, n),
    dt(e, n))
}
function oj(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    LS(e, n)
}
function aj(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(T(314))
    }
    r !== null && r.delete(t),
    LS(e, n)
}
var DS;
DS = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ct.current)
            lt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return lt = !1,
                XP(e, t, n);
            lt = !!(e.flags & 131072)
        }
    else
        lt = !1,
        le && t.flags & 1048576 && Ib(t, $l, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        pl(e, t),
        e = t.pendingProps;
        var i = Qi(t, Qe.current);
        Wi(t, n),
        i = Mp(null, t, r, e, i, n);
        var s = Tp();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        ut(r) ? (s = !0,
        Bl(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        kp(t),
        i.updater = Ac,
        t.stateNode = i,
        i._reactInternals = t,
        pf(t, r, e, n),
        t = vf(null, t, r, !0, s, n)) : (t.tag = 0,
        le && s && vp(t),
        et(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (pl(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = cj(r),
            e = Ht(r, e),
            i) {
            case 0:
                t = mf(null, t, r, e, n);
                break e;
            case 1:
                t = $m(null, t, r, e, n);
                break e;
            case 11:
                t = Bm(null, t, r, e, n);
                break e;
            case 14:
                t = zm(null, t, r, Ht(r.type, e), n);
                break e
            }
            throw Error(T(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ht(r, i),
        mf(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ht(r, i),
        $m(e, t, r, i, n);
    case 3:
        e: {
            if (vS(t),
            e === null)
                throw Error(T(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            zb(e, t),
            Ul(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = es(Error(T(423)), t),
                    t = Hm(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = es(Error(T(424)), t),
                    t = Hm(e, t, r, n, i);
                    break e
                } else
                    for (yt = sr(t.stateNode.containerInfo.firstChild),
                    wt = t,
                    le = !0,
                    Gt = null,
                    n = Ub(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Zi(),
                r === i) {
                    t = Rn(e, t, n);
                    break e
                }
                et(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Gb(t),
        e === null && df(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        of(r, i) ? o = null : s !== null && of(r, s) && (t.flags |= 32),
        mS(e, t),
        et(e, t, o, n),
        t.child;
    case 6:
        return e === null && df(t),
        null;
    case 13:
        return yS(e, t, n);
    case 4:
        return Cp(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = qi(t, null, r, n) : et(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ht(r, i),
        Bm(e, t, r, i, n);
    case 7:
        return et(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return et(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return et(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            ne(Hl, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (Qt(s.value, o)) {
                    if (s.children === i.children && !ct.current) {
                        t = Rn(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var a = s.dependencies;
                        if (a !== null) {
                            o = s.child;
                            for (var l = a.firstContext; l !== null; ) {
                                if (l.context === r) {
                                    if (s.tag === 1) {
                                        l = En(-1, n & -n),
                                        l.tag = 2;
                                        var c = s.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var u = c.pending;
                                            u === null ? l.next = l : (l.next = u.next,
                                            u.next = l),
                                            c.pending = l
                                        }
                                    }
                                    s.lanes |= n,
                                    l = s.alternate,
                                    l !== null && (l.lanes |= n),
                                    ff(s.return, n, t),
                                    a.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(T(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            ff(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            et(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Wi(t, n),
        i = It(i),
        r = r(i),
        t.flags |= 1,
        et(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Ht(r, t.pendingProps),
        i = Ht(r.type, i),
        zm(e, t, r, i, n);
    case 15:
        return pS(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Ht(r, i),
        pl(e, t),
        t.tag = 1,
        ut(r) ? (e = !0,
        Bl(t)) : e = !1,
        Wi(t, n),
        Hb(t, r, i),
        pf(t, r, i, n),
        vf(null, t, r, !0, e, n);
    case 19:
        return xS(e, t, n);
    case 22:
        return gS(e, t, n)
    }
    throw Error(T(156, t.tag))
}
;
function RS(e, t) {
    return ab(e, t)
}
function lj(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Dt(e, t, n, r) {
    return new lj(e,t,n,r)
}
function Bp(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function cj(e) {
    if (typeof e == "function")
        return Bp(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === sp)
            return 11;
        if (e === op)
            return 14
    }
    return 2
}
function cr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Dt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function vl(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Bp(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case wi:
            return Kr(n.children, i, s, t);
        case ip:
            o = 8,
            i |= 8;
            break;
        case Id:
            return e = Dt(12, n, t, i | 2),
            e.elementType = Id,
            e.lanes = s,
            e;
        case Nd:
            return e = Dt(13, n, t, i),
            e.elementType = Nd,
            e.lanes = s,
            e;
        case Vd:
            return e = Dt(19, n, t, i),
            e.elementType = Vd,
            e.lanes = s,
            e;
        case Wx:
            return Fc(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case $x:
                    o = 10;
                    break e;
                case Hx:
                    o = 9;
                    break e;
                case sp:
                    o = 11;
                    break e;
                case op:
                    o = 14;
                    break e;
                case zn:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(T(130, e == null ? e : typeof e, ""))
        }
    return t = Dt(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function Kr(e, t, n, r) {
    return e = Dt(7, e, r, t),
    e.lanes = n,
    e
}
function Fc(e, t, n, r) {
    return e = Dt(22, e, r, t),
    e.elementType = Wx,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Yu(e, t, n) {
    return e = Dt(6, e, null, t),
    e.lanes = n,
    e
}
function Xu(e, t, n) {
    return t = Dt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function uj(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Eu(0),
    this.expirationTimes = Eu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Eu(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function zp(e, t, n, r, i, s, o, a, l) {
    return e = new uj(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Dt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    kp(s),
    e
}
function dj(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Si,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function FS(e) {
    if (!e)
        return gr;
    e = e._reactInternals;
    e: {
        if (ci(e) !== e || e.tag !== 1)
            throw Error(T(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (ut(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(T(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ut(n))
            return Rb(e, n, t)
    }
    return t
}
function IS(e, t, n, r, i, s, o, a, l) {
    return e = zp(n, r, !0, e, i, s, o, a, l),
    e.context = FS(null),
    n = e.current,
    r = tt(),
    i = lr(n),
    s = En(r, i),
    s.callback = t ?? null,
    or(n, s, i),
    e.current.lanes = i,
    Ko(e, i, r),
    dt(e, r),
    e
}
function Ic(e, t, n, r) {
    var i = t.current
      , s = tt()
      , o = lr(i);
    return n = FS(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = En(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = or(i, t, o),
    e !== null && (Xt(e, i, o, s),
    dl(e, i, o)),
    o
}
function Jl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Jm(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function $p(e, t) {
    Jm(e, t),
    (e = e.alternate) && Jm(e, t)
}
function fj() {
    return null
}
var NS = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Hp(e) {
    this._internalRoot = e
}
Nc.prototype.render = Hp.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(T(409));
    Ic(e, t, null, null)
}
;
Nc.prototype.unmount = Hp.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        si(function() {
            Ic(null, e, null, null)
        }),
        t[Ln] = null
    }
}
;
function Nc(e) {
    this._internalRoot = e
}
Nc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = pb();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Wn.length && t !== 0 && t < Wn[n].priority; n++)
            ;
        Wn.splice(n, 0, e),
        n === 0 && mb(e)
    }
}
;
function Wp(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Vc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function e0() {}
function hj(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = Jl(o);
                s.call(c)
            }
        }
        var o = IS(t, r, e, 0, null, !1, !1, "", e0);
        return e._reactRootContainer = o,
        e[Ln] = o.current,
        _o(e.nodeType === 8 ? e.parentNode : e),
        si(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = Jl(l);
            a.call(c)
        }
    }
    var l = zp(e, 0, !1, null, null, !1, !1, "", e0);
    return e._reactRootContainer = l,
    e[Ln] = l.current,
    _o(e.nodeType === 8 ? e.parentNode : e),
    si(function() {
        Ic(t, l, n, r)
    }),
    l
}
function Bc(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Jl(o);
                a.call(l)
            }
        }
        Ic(t, o, e, i)
    } else
        o = hj(n, t, e, i, r);
    return Jl(o)
}
fb = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = $s(t.pendingLanes);
            n !== 0 && (cp(t, n | 1),
            dt(t, Se()),
            !(X & 6) && (ts = Se() + 500,
            Sr()))
        }
        break;
    case 13:
        si(function() {
            var r = Dn(e, 1);
            if (r !== null) {
                var i = tt();
                Xt(r, e, 1, i)
            }
        }),
        $p(e, 1)
    }
}
;
up = function(e) {
    if (e.tag === 13) {
        var t = Dn(e, 134217728);
        if (t !== null) {
            var n = tt();
            Xt(t, e, 134217728, n)
        }
        $p(e, 134217728)
    }
}
;
hb = function(e) {
    if (e.tag === 13) {
        var t = lr(e)
          , n = Dn(e, t);
        if (n !== null) {
            var r = tt();
            Xt(n, e, t, r)
        }
        $p(e, t)
    }
}
;
pb = function() {
    return q
}
;
gb = function(e, t) {
    var n = q;
    try {
        return q = e,
        t()
    } finally {
        q = n
    }
}
;
Kd = function(e, t, n) {
    switch (t) {
    case "input":
        if ($d(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Tc(r);
                    if (!i)
                        throw Error(T(90));
                    Gx(r),
                    $d(r, i)
                }
            }
        }
        break;
    case "textarea":
        Xx(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Bi(e, !!n.multiple, t, !1)
    }
}
;
tb = Ip;
nb = si;
var pj = {
    usingClientEntryPoint: !1,
    Events: [Zo, Pi, Tc, Jx, eb, Ip]
}
  , Ms = {
    findFiberByHostInstance: $r,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom"
}
  , gj = {
    bundleType: Ms.bundleType,
    version: Ms.version,
    rendererPackageName: Ms.rendererPackageName,
    rendererConfig: Ms.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: In.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = sb(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ms.findFiberByHostInstance || fj,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ea.isDisabled && Ea.supportsFiber)
        try {
            Pc = Ea.inject(gj),
            on = Ea
        } catch {}
}
Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pj;
Pt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wp(t))
        throw Error(T(200));
    return dj(e, t, null, n)
}
;
Pt.createRoot = function(e, t) {
    if (!Wp(e))
        throw Error(T(299));
    var n = !1
      , r = ""
      , i = NS;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = zp(e, 1, !1, null, null, n, !1, r, i),
    e[Ln] = t.current,
    _o(e.nodeType === 8 ? e.parentNode : e),
    new Hp(t)
}
;
Pt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(T(188)) : (e = Object.keys(e).join(","),
        Error(T(268, e)));
    return e = sb(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Pt.flushSync = function(e) {
    return si(e)
}
;
Pt.hydrate = function(e, t, n) {
    if (!Vc(t))
        throw Error(T(200));
    return Bc(null, e, t, !0, n)
}
;
Pt.hydrateRoot = function(e, t, n) {
    if (!Wp(e))
        throw Error(T(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = NS;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = IS(t, null, e, 1, n ?? null, i, !1, s, o),
    e[Ln] = t.current,
    _o(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Nc(t)
}
;
Pt.render = function(e, t, n) {
    if (!Vc(t))
        throw Error(T(200));
    return Bc(null, e, t, !1, n)
}
;
Pt.unmountComponentAtNode = function(e) {
    if (!Vc(e))
        throw Error(T(40));
    return e._reactRootContainer ? (si(function() {
        Bc(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ln] = null
        })
    }),
    !0) : !1
}
;
Pt.unstable_batchedUpdates = Ip;
Pt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Vc(n))
        throw Error(T(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(T(38));
    return Bc(e, t, n, !1, r)
}
;
Pt.version = "18.2.0-next-9e3b772b8-20220608";
function VS() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(VS)
        } catch (e) {
            console.error(e)
        }
}
VS(),
Ix.exports = Pt;
var BS = Ix.exports;
const mj = kc(BS);
var t0 = BS;
Rd.createRoot = t0.createRoot,
Rd.hydrateRoot = t0.hydrateRoot;
/**
 * @remix-run/router v1.0.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ao() {
    return Ao = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ao.apply(this, arguments)
}
var Xn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Xn || (Xn = {}));
const n0 = "popstate";
function vj(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return Mf("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : Lo(i)
    }
    return bj(t, n, null, e)
}
function yj() {
    return Math.random().toString(36).substr(2, 8)
}
function r0(e) {
    return {
        usr: e.state,
        key: e.key
    }
}
function Mf(e, t, n, r) {
    return n === void 0 && (n = null),
    Ao({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? hs(t) : t, {
        state: n,
        key: t && t.key || r || yj()
    })
}
function Lo(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function hs(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n),
        e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r),
        e = e.substr(0, r)),
        e && (t.pathname = e)
    }
    return t
}
function xj(e) {
    let t = typeof window < "u" && typeof window.location < "u" && window.location.origin !== "null" ? window.location.origin : "unknown://unknown"
      , n = typeof e == "string" ? e : Lo(e);
    return new URL(n,t)
}
function bj(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = Xn.Pop
      , l = null;
    function c() {
        a = Xn.Pop,
        l && l({
            action: a,
            location: f.location
        })
    }
    function u(p, g) {
        a = Xn.Push;
        let v = Mf(f.location, p, g);
        n && n(v, p);
        let S = r0(v)
          , y = f.createHref(v);
        try {
            o.pushState(S, "", y)
        } catch {
            i.location.assign(y)
        }
        s && l && l({
            action: a,
            location: f.location
        })
    }
    function d(p, g) {
        a = Xn.Replace;
        let v = Mf(f.location, p, g);
        n && n(v, p);
        let S = r0(v)
          , y = f.createHref(v);
        o.replaceState(S, "", y),
        s && l && l({
            action: a,
            location: f.location
        })
    }
    let f = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(p) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(n0, c),
            l = p,
            ()=>{
                i.removeEventListener(n0, c),
                l = null
            }
        },
        createHref(p) {
            return t(i, p)
        },
        encodeLocation(p) {
            let g = xj(Lo(p));
            return Ao({}, p, {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            })
        },
        push: u,
        replace: d,
        go(p) {
            return o.go(p)
        }
    };
    return f
}
var i0;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(i0 || (i0 = {}));
function Sj(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? hs(t) : t
      , i = $S(r.pathname || "/", n);
    if (i == null)
        return null;
    let s = zS(e);
    wj(s);
    let o = null;
    for (let a = 0; o == null && a < s.length; ++a)
        o = Oj(s[a], Dj(i));
    return o
}
function zS(e, t, n, r) {
    return t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((i,s)=>{
        let o = {
            relativePath: i.path || "",
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: s,
            route: i
        };
        o.relativePath.startsWith("/") && (Fe(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        o.relativePath = o.relativePath.slice(r.length));
        let a = ur([r, o.relativePath])
          , l = n.concat(o);
        i.children && i.children.length > 0 && (Fe(i.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + a + '".')),
        zS(i.children, t, l, a)),
        !(i.path == null && !i.index) && t.push({
            path: a,
            score: Mj(a, i.index),
            routesMeta: l
        })
    }
    ),
    t
}
function wj(e) {
    e.sort((t,n)=>t.score !== n.score ? n.score - t.score : Tj(t.routesMeta.map(r=>r.childrenIndex), n.routesMeta.map(r=>r.childrenIndex)))
}
const _j = /^:\w+$/
  , kj = 3
  , Cj = 2
  , Pj = 1
  , jj = 10
  , Ej = -2
  , s0 = e=>e === "*";
function Mj(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(s0) && (r += Ej),
    t && (r += Cj),
    n.filter(i=>!s0(i)).reduce((i,s)=>i + (_j.test(s) ? kj : s === "" ? Pj : jj), r)
}
function Tj(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r,i)=>r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function Oj(e, t) {
    let {routesMeta: n} = e
      , r = {}
      , i = "/"
      , s = [];
    for (let o = 0; o < n.length; ++o) {
        let a = n[o]
          , l = o === n.length - 1
          , c = i === "/" ? t : t.slice(i.length) || "/"
          , u = Aj({
            path: a.relativePath,
            caseSensitive: a.caseSensitive,
            end: l
        }, c);
        if (!u)
            return null;
        Object.assign(r, u.params);
        let d = a.route;
        s.push({
            params: r,
            pathname: ur([i, u.pathname]),
            pathnameBase: Nj(ur([i, u.pathnameBase])),
            route: d
        }),
        u.pathnameBase !== "/" && (i = ur([i, u.pathnameBase]))
    }
    return s
}
function Aj(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = Lj(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce((c,u,d)=>{
            if (u === "*") {
                let f = a[d] || "";
                o = s.slice(0, s.length - f.length).replace(/(.)\/+$/, "$1")
            }
            return c[u] = Rj(a[d] || "", u),
            c
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function Lj(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Up(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (o,a)=>(r.push(a),
    "([^\\/]+)"));
    return e.endsWith("*") ? (r.push("*"),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function Dj(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Up(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Rj(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return Up(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")),
        e
    }
}
function $S(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function Fe(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function Up(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function Fj(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? hs(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : Ij(n, t) : t,
        search: Vj(r),
        hash: Bj(i)
    }
}
function Ij(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i=>{
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Ku(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function HS(e) {
    return e.filter((t,n)=>n === 0 || t.route.path && t.route.path.length > 0)
}
function WS(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = hs(e) : (i = Ao({}, e),
    Fe(!i.pathname || !i.pathname.includes("?"), Ku("?", "pathname", "search", i)),
    Fe(!i.pathname || !i.pathname.includes("#"), Ku("#", "pathname", "hash", i)),
    Fe(!i.search || !i.search.includes("#"), Ku("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a;
    if (r || o == null)
        a = n;
    else {
        let d = t.length - 1;
        if (o.startsWith("..")) {
            let f = o.split("/");
            for (; f[0] === ".."; )
                f.shift(),
                d -= 1;
            i.pathname = f.join("/")
        }
        a = d >= 0 ? t[d] : "/"
    }
    let l = Fj(i, a)
      , c = o && o !== "/" && o.endsWith("/")
      , u = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"),
    l
}
const ur = e=>e.join("/").replace(/\/\/+/g, "/")
  , Nj = e=>e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , Vj = e=>!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , Bj = e=>!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class zj {
    constructor(t, n, r) {
        this.status = t,
        this.statusText = n || "",
        this.data = r
    }
}
function $j(e) {
    return e instanceof zj
}
const Hj = new Set(["POST", "PUT", "PATCH", "DELETE"]);
[...Hj];
/**
 * React Router v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Tf() {
    return Tf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Tf.apply(this, arguments)
}
function Wj(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const Uj = typeof Object.is == "function" ? Object.is : Wj
  , {useState: Gj, useEffect: Yj, useLayoutEffect: Xj, useDebugValue: Kj} = po;
function Qj(e, t, n) {
    const r = t()
      , [{inst: i},s] = Gj({
        inst: {
            value: r,
            getSnapshot: t
        }
    });
    return Xj(()=>{
        i.value = r,
        i.getSnapshot = t,
        Qu(i) && s({
            inst: i
        })
    }
    , [e, r, t]),
    Yj(()=>(Qu(i) && s({
        inst: i
    }),
    e(()=>{
        Qu(i) && s({
            inst: i
        })
    }
    )), [e]),
    Kj(r),
    r
}
function Qu(e) {
    const t = e.getSnapshot
      , n = e.value;
    try {
        const r = t();
        return !Uj(n, r)
    } catch {
        return !0
    }
}
function Zj(e, t, n) {
    return t()
}
const qj = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , Jj = !qj
  , eE = Jj ? Zj : Qj;
"useSyncExternalStore"in po && (e=>e.useSyncExternalStore)(po);
const tE = x.createContext(null)
  , nE = x.createContext(null)
  , US = x.createContext(null)
  , Gp = x.createContext(null)
  , zc = x.createContext(null)
  , ps = x.createContext({
    outlet: null,
    matches: []
})
  , GS = x.createContext(null);
function rE(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Jo() || Fe(!1);
    let {basename: r, navigator: i} = x.useContext(Gp)
      , {hash: s, pathname: o, search: a} = YS(e, {
        relative: n
    })
      , l = o;
    return r !== "/" && (l = o === "/" ? r : ur([r, o])),
    i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function Jo() {
    return x.useContext(zc) != null
}
function gs() {
    return Jo() || Fe(!1),
    x.useContext(zc).location
}
function iE() {
    Jo() || Fe(!1);
    let {basename: e, navigator: t} = x.useContext(Gp)
      , {matches: n} = x.useContext(ps)
      , {pathname: r} = gs()
      , i = JSON.stringify(HS(n).map(a=>a.pathnameBase))
      , s = x.useRef(!1);
    return x.useEffect(()=>{
        s.current = !0
    }
    ),
    x.useCallback(function(a, l) {
        if (l === void 0 && (l = {}),
        !s.current)
            return;
        if (typeof a == "number") {
            t.go(a);
            return
        }
        let c = WS(a, JSON.parse(i), r, l.relative === "path");
        e !== "/" && (c.pathname = c.pathname === "/" ? e : ur([e, c.pathname])),
        (l.replace ? t.replace : t.push)(c, l.state, l)
    }, [e, t, i, r])
}
const sE = x.createContext(null);
function oE(e) {
    let t = x.useContext(ps).outlet;
    return t && x.createElement(sE.Provider, {
        value: e
    }, t)
}
function YS(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {matches: r} = x.useContext(ps)
      , {pathname: i} = gs()
      , s = JSON.stringify(HS(r).map(o=>o.pathnameBase));
    return x.useMemo(()=>WS(e, JSON.parse(s), i, n === "path"), [e, s, i, n])
}
function aE(e, t) {
    Jo() || Fe(!1);
    let n = x.useContext(US)
      , {matches: r} = x.useContext(ps)
      , i = r[r.length - 1]
      , s = i ? i.params : {};
    i && i.pathname;
    let o = i ? i.pathnameBase : "/";
    i && i.route;
    let a = gs(), l;
    if (t) {
        var c;
        let g = typeof t == "string" ? hs(t) : t;
        o === "/" || (c = g.pathname) != null && c.startsWith(o) || Fe(!1),
        l = g
    } else
        l = a;
    let u = l.pathname || "/"
      , d = o === "/" ? u : u.slice(o.length) || "/"
      , f = Sj(e, {
        pathname: d
    })
      , p = dE(f && f.map(g=>Object.assign({}, g, {
        params: Object.assign({}, s, g.params),
        pathname: ur([o, g.pathname]),
        pathnameBase: g.pathnameBase === "/" ? o : ur([o, g.pathnameBase])
    })), r, n || void 0);
    return t && p ? x.createElement(zc.Provider, {
        value: {
            location: Tf({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, l),
            navigationType: Xn.Pop
        }
    }, p) : p
}
function lE() {
    let e = hE()
      , t = $j(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , r = "rgba(200,200,200, 0.5)"
      , i = {
        padding: "0.5rem",
        backgroundColor: r
    }
      , s = {
        padding: "2px 4px",
        backgroundColor: r
    };
    return x.createElement(x.Fragment, null, x.createElement("h2", null, "Unhandled Thrown Error!"), x.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? x.createElement("pre", {
        style: i
    }, n) : null, x.createElement("p", null, "💿 Hey developer 👋"), x.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", x.createElement("code", {
        style: s
    }, "errorElement"), " props on ", x.createElement("code", {
        style: s
    }, "<Route>")))
}
class cE extends x.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ? {
            error: t.error,
            location: t.location
        } : {
            error: t.error || n.error,
            location: n.location
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error ? x.createElement(GS.Provider, {
            value: this.state.error,
            children: this.props.component
        }) : this.props.children
    }
}
function uE(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = x.useContext(tE);
    return i && n.route.errorElement && (i._deepestRenderedBoundaryId = n.route.id),
    x.createElement(ps.Provider, {
        value: t
    }, r)
}
function dE(e, t, n) {
    if (t === void 0 && (t = []),
    e == null)
        if (n != null && n.errors)
            e = n.matches;
        else
            return null;
    let r = e
      , i = n == null ? void 0 : n.errors;
    if (i != null) {
        let s = r.findIndex(o=>o.route.id && (i == null ? void 0 : i[o.route.id]));
        s >= 0 || Fe(!1),
        r = r.slice(0, Math.min(r.length, s + 1))
    }
    return r.reduceRight((s,o,a)=>{
        let l = o.route.id ? i == null ? void 0 : i[o.route.id] : null
          , c = n ? o.route.errorElement || x.createElement(lE, null) : null
          , u = ()=>x.createElement(uE, {
            match: o,
            routeContext: {
                outlet: s,
                matches: t.concat(r.slice(0, a + 1))
            }
        }, l ? c : o.route.element !== void 0 ? o.route.element : s);
        return n && (o.route.errorElement || a === 0) ? x.createElement(cE, {
            location: n.location,
            component: c,
            error: l,
            children: u()
        }) : u()
    }
    , null)
}
var o0;
(function(e) {
    e.UseRevalidator = "useRevalidator"
}
)(o0 || (o0 = {}));
var Of;
(function(e) {
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator"
}
)(Of || (Of = {}));
function fE(e) {
    let t = x.useContext(US);
    return t || Fe(!1),
    t
}
function hE() {
    var e;
    let t = x.useContext(GS)
      , n = fE(Of.UseRouteError)
      , r = x.useContext(ps)
      , i = r.matches[r.matches.length - 1];
    return t || (r || Fe(!1),
    i.route.id || Fe(!1),
    (e = n.errors) == null ? void 0 : e[i.route.id])
}
function pE(e) {
    return oE(e.context)
}
function Rr(e) {
    Fe(!1)
}
function gE(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Xn.Pop, navigator: s, static: o=!1} = e;
    Jo() && Fe(!1);
    let a = t.replace(/^\/*/, "/")
      , l = x.useMemo(()=>({
        basename: a,
        navigator: s,
        static: o
    }), [a, s, o]);
    typeof r == "string" && (r = hs(r));
    let {pathname: c="/", search: u="", hash: d="", state: f=null, key: p="default"} = r
      , g = x.useMemo(()=>{
        let v = $S(c, a);
        return v == null ? null : {
            pathname: v,
            search: u,
            hash: d,
            state: f,
            key: p
        }
    }
    , [a, c, u, d, f, p]);
    return g == null ? null : x.createElement(Gp.Provider, {
        value: l
    }, x.createElement(zc.Provider, {
        children: n,
        value: {
            location: g,
            navigationType: i
        }
    }))
}
function mE(e) {
    let {children: t, location: n} = e
      , r = x.useContext(nE)
      , i = r && !t ? r.router.routes : Af(t);
    return aE(i, n)
}
var a0;
(function(e) {
    e[e.pending = 0] = "pending",
    e[e.success = 1] = "success",
    e[e.error = 2] = "error"
}
)(a0 || (a0 = {}));
new Promise(()=>{}
);
function Af(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return x.Children.forEach(e, (r,i)=>{
        if (!x.isValidElement(r))
            return;
        if (r.type === x.Fragment) {
            n.push.apply(n, Af(r.props.children, t));
            return
        }
        r.type !== Rr && Fe(!1),
        !r.props.index || !r.props.children || Fe(!1);
        let s = [...t, i]
          , o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            hasErrorBoundary: r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle
        };
        r.props.children && (o.children = Af(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Lf() {
    return Lf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Lf.apply(this, arguments)
}
function vE(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function yE(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function xE(e, t) {
    return e.button === 0 && (!t || t === "_self") && !yE(e)
}
const bE = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function SE(e) {
    let {basename: t, children: n, window: r} = e
      , i = x.useRef();
    i.current == null && (i.current = vj({
        window: r,
        v5Compat: !0
    }));
    let s = i.current
      , [o,a] = x.useState({
        action: s.action,
        location: s.location
    });
    return x.useLayoutEffect(()=>s.listen(a), [s]),
    x.createElement(gE, {
        basename: t,
        children: n,
        location: o.location,
        navigationType: o.action,
        navigator: s
    })
}
const ec = x.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: s, replace: o, state: a, target: l, to: c, preventScrollReset: u} = t
      , d = vE(t, bE)
      , f = rE(c, {
        relative: i
    })
      , p = wE(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: i
    });
    function g(v) {
        r && r(v),
        v.defaultPrevented || p(v)
    }
    return x.createElement("a", Lf({}, d, {
        href: f,
        onClick: s ? r : g,
        ref: n,
        target: l
    }))
});
var l0;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmitImpl = "useSubmitImpl",
    e.UseFetcher = "useFetcher"
}
)(l0 || (l0 = {}));
var c0;
(function(e) {
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(c0 || (c0 = {}));
function wE(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: s, relative: o} = t === void 0 ? {} : t
      , a = iE()
      , l = gs()
      , c = YS(e, {
        relative: o
    });
    return x.useCallback(u=>{
        if (xE(u, n)) {
            u.preventDefault();
            let d = r !== void 0 ? r : Lo(l) === Lo(c);
            a(e, {
                replace: d,
                state: i,
                preventScrollReset: s,
                relative: o
            })
        }
    }
    , [l, a, c, r, i, n, e, s, o])
}
var XS = {
    exports: {}
}
  , _E = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , kE = _E
  , CE = kE;
function KS() {}
function QS() {}
QS.resetWarningCache = KS;
var PE = function() {
    function e(r, i, s, o, a, l) {
        if (l !== CE) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation",
            c
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: QS,
        resetWarningCache: KS
    };
    return n.PropTypes = n,
    n
};
XS.exports = PE();
var jE = XS.exports;
const Do = kc(jE);
var u0, d0, f0;
function Df() {
    return Df = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Df.apply(this, arguments)
}
var ZS = function(t) {
    return x.createElement("svg", Df({
        xmlns: "http://www.w3.org/2000/svg",
        width: 53,
        height: 19,
        fill: "none"
    }, t), u0 || (u0 = x.createElement("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M9.296.43a1.056 1.056 0 0 0-1.717.02L.19 11.006a1.055 1.055 0 0 0 .866 1.66h4.222v5.278a1.056 1.056 0 0 0 1.921.605l7.39-10.556a1.056 1.056 0 0 0-.866-1.66H9.5V1.055C9.5.83 9.43.61 9.296.43Zm16.762 7.572V4.31h6.734V.748h-11.18V19h11.18v-3.562h-6.734v-4.004h5.954V8.002h-5.954ZM46.338 19 52.812.748h-4.706l-4.55 13.78L39.032.748H34.3L40.774 19h5.564Z",
        clipRule: "evenodd"
    })), d0 || (d0 = x.createElement("path", {
        fill: "url(#logo_svg__a)",
        fillRule: "evenodd",
        d: "M9.296.43a1.056 1.056 0 0 0-1.717.02L.19 11.006a1.055 1.055 0 0 0 .866 1.66h4.222v5.278a1.056 1.056 0 0 0 1.921.605l7.39-10.556a1.056 1.056 0 0 0-.866-1.66H9.5V1.055C9.5.83 9.43.61 9.296.43Zm16.762 7.572V4.31h6.734V.748h-11.18V19h11.18v-3.562h-6.734v-4.004h5.954V8.002h-5.954ZM46.338 19 52.812.748h-4.706l-4.55 13.78L39.032.748H34.3L40.774 19h5.564Z",
        clipRule: "evenodd"
    })), f0 || (f0 = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "logo_svg__a",
        x1: 0,
        x2: 43.35,
        y1: 19,
        y2: -12.87,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })))))
};
var h0;
function Rf() {
    return Rf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Rf.apply(this, arguments)
}
var EE = function(t) {
    return x.createElement("svg", Rf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 18,
        fill: "none"
    }, t), h0 || (h0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M1.293 1.293A1 1 0 0 0 1 2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293ZM1.293 9.293A1 1 0 0 0 1 10v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293ZM13.293 9.293A1 1 0 0 0 13 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-.707.293Z"
    })))
}, p0, g0;
function Ff() {
    return Ff = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Ff.apply(this, arguments)
}
var ME = function(t) {
    return x.createElement("svg", Ff({
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 21,
        fill: "none"
    }, t), p0 || (p0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M14.657 14.657 10.414 18.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z"
    })), g0 || (g0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M11.121 11.121A3 3 0 1 0 6.88 6.878a3 3 0 0 0 4.242 4.243Z"
    })))
}, m0;
function If() {
    return If = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    If.apply(this, arguments)
}
var TE = function(t) {
    return x.createElement("svg", If({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 18,
        fill: "none"
    }, t), m0 || (m0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "m7 17-5.447-2.724A1 1 0 0 1 1 13.382V2.618a1 1 0 0 1 1.447-.894L7 4m0 13V4m0 13 6-3M7 4l6-3m0 13 4.553 2.276A1 1 0 0 0 19 15.382V4.618a1 1 0 0 0-.553-.894L13 1m0 13V1"
    })))
}, v0;
function Nf() {
    return Nf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Nf.apply(this, arguments)
}
var OE = function(t) {
    return x.createElement("svg", Nf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 20,
        fill: "none"
    }, t), v0 || (v0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M10.828 7.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656ZM3.05 14.05A7 7 0 0 1 15 19H1a7 7 0 0 1 2.05-4.95Z"
    })))
}, y0;
function Vf() {
    return Vf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Vf.apply(this, arguments)
}
var AE = function(t) {
    return x.createElement("svg", Vf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none"
    }, t), y0 || (y0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "m1 4 3 1m0 0-3 9a5.002 5.002 0 0 0 6.001 0L4 5Zm0 0 3 9M4 5l6-2m0 0 6 2m-6-2V1m0 2v16m6-14 3-1m-3 1-3 9a5.002 5.002 0 0 0 6.001 0L16 5Zm-6 14H7m3 0h3"
    })))
}, x0, b0, S0, w0, _0, k0, C0, P0, j0, E0;
function Bf() {
    return Bf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Bf.apply(this, arguments)
}
var LE = function(t) {
    return x.createElement("svg", Bf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 18,
        fill: "none"
    }, t), x0 || (x0 = x.createElement("path", {
        fill: "url(#Vector_svg__a)",
        d: "M1.293 1.293A1 1 0 0 0 1 2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293Z"
    })), b0 || (b0 = x.createElement("path", {
        fill: "url(#Vector_svg__b)",
        d: "M1.293 9.293A1 1 0 0 0 1 10v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293Z"
    })), S0 || (S0 = x.createElement("path", {
        fill: "url(#Vector_svg__c)",
        d: "M13.293 9.293A1 1 0 0 0 13 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-.707.293Z"
    })), w0 || (w0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M1.293 1.293A1 1 0 0 0 1 2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293Z"
    })), _0 || (_0 = x.createElement("path", {
        stroke: "url(#Vector_svg__d)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M1.293 1.293A1 1 0 0 0 1 2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293Z"
    })), k0 || (k0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M1.293 9.293A1 1 0 0 0 1 10v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293Z"
    })), C0 || (C0 = x.createElement("path", {
        stroke: "url(#Vector_svg__e)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M1.293 9.293A1 1 0 0 0 1 10v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H2a1 1 0 0 0-.707.293Z"
    })), P0 || (P0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M13.293 9.293A1 1 0 0 0 13 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-.707.293Z"
    })), j0 || (j0 = x.createElement("path", {
        stroke: "url(#Vector_svg__f)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M13.293 9.293A1 1 0 0 0 13 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-.707.293Z"
    })), E0 || (E0 = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "Vector_svg__a",
        x1: 1,
        x2: 189.294,
        y1: 9,
        y2: 118.524,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })), x.createElement("linearGradient", {
        id: "Vector_svg__b",
        x1: 1,
        x2: 189.294,
        y1: 9,
        y2: 118.524,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })), x.createElement("linearGradient", {
        id: "Vector_svg__c",
        x1: 1,
        x2: 189.294,
        y1: 9,
        y2: 118.524,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })), x.createElement("linearGradient", {
        id: "Vector_svg__d",
        x1: 1,
        x2: 253,
        y1: 9,
        y2: 8,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })), x.createElement("linearGradient", {
        id: "Vector_svg__e",
        x1: 1,
        x2: 253,
        y1: 9,
        y2: 8,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })), x.createElement("linearGradient", {
        id: "Vector_svg__f",
        x1: 1,
        x2: 253,
        y1: 9,
        y2: 8,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })))))
}, M0, T0, O0, A0, L0;
function zf() {
    return zf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    zf.apply(this, arguments)
}
var DE = function(t) {
    return x.createElement("svg", zf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 18,
        height: 21,
        fill: "none"
    }, t), M0 || (M0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M14.657 14.657 10.414 18.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z"
    })), T0 || (T0 = x.createElement("path", {
        stroke: "url(#Vector-1_svg__a)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M14.657 14.657 10.414 18.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0v0Z"
    })), O0 || (O0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M11.121 11.121A3 3 0 1 0 6.88 6.878a3 3 0 0 0 4.242 4.243Z"
    })), A0 || (A0 = x.createElement("path", {
        stroke: "url(#Vector-1_svg__b)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M11.121 11.121A3 3 0 1 0 6.88 6.878a3 3 0 0 0 4.242 4.243Z"
    })), L0 || (L0 = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "Vector-1_svg__a",
        x1: 1,
        x2: 253.001,
        y1: 10.243,
        y2: 9.377,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })), x.createElement("linearGradient", {
        id: "Vector-1_svg__b",
        x1: 6,
        x2: 100.5,
        y1: 9,
        y2: 8.625,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })))))
}, D0, R0, F0;
function $f() {
    return $f = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    $f.apply(this, arguments)
}
var RE = function(t) {
    return x.createElement("svg", $f({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 18,
        fill: "none"
    }, t), D0 || (D0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "m7 17-5.447-2.724A1 1 0 0 1 1 13.382V2.618a1 1 0 0 1 1.447-.894L7 4m0 13V4m0 13 6-3M7 4l6-3m0 13 4.553 2.276A1 1 0 0 0 19 15.382V4.618a1 1 0 0 0-.553-.894L13 1m0 13V1"
    })), R0 || (R0 = x.createElement("path", {
        stroke: "url(#Vector-2_svg__a)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m7 17-5.447-2.724A1 1 0 0 1 1 13.382V2.618a1 1 0 0 1 1.447-.894L7 4m0 13V4m0 13 6-3M7 4l6-3m0 13 4.553 2.276A1 1 0 0 0 19 15.382V4.618a1 1 0 0 0-.553-.894L13 1m0 13V1"
    })), F0 || (F0 = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "Vector-2_svg__a",
        x1: 1,
        x2: 284.499,
        y1: 9,
        y2: 7.734,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })))))
}, I0, N0, V0, B0, z0;
function Hf() {
    return Hf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Hf.apply(this, arguments)
}
var FE = function(t) {
    return x.createElement("svg", Hf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 16,
        height: 20,
        fill: "none"
    }, t), I0 || (I0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M10.828 7.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656Z"
    })), N0 || (N0 = x.createElement("path", {
        stroke: "url(#Vector-3_svg__a)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M10.828 7.828a4 4 0 1 0-5.656-5.656 4 4 0 0 0 5.656 5.656Z"
    })), V0 || (V0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M3.05 14.05A7 7 0 0 1 15 19H1a7 7 0 0 1 2.05-4.95Z"
    })), B0 || (B0 = x.createElement("path", {
        stroke: "url(#Vector-3_svg__b)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M3.05 14.05A7 7 0 0 1 15 19H1a7 7 0 0 1 2.05-4.95Z"
    })), z0 || (z0 = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "Vector-3_svg__a",
        x1: 1,
        x2: 221.501,
        y1: 10,
        y2: 9.319,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })), x.createElement("linearGradient", {
        id: "Vector-3_svg__b",
        x1: 1,
        x2: 221.501,
        y1: 10,
        y2: 9.319,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })))))
}, $0;
function Wf() {
    return Wf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Wf.apply(this, arguments)
}
var IE = function(t) {
    return x.createElement("svg", Wf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 20,
        height: 20,
        fill: "none"
    }, t), $0 || ($0 = x.createElement("path", {
        stroke: "#4adda2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "m1 4 3 1m0 0-3 9a5.002 5.002 0 0 0 6.001 0L4 5Zm0 0 3 9M4 5l6-2m0 0 6 2m-6-2V1m0 2v16m6-14 3-1m-3 1-3 9a5.002 5.002 0 0 0 6.001 0L16 5Zm-6 14H7m3 0h3"
    })))
};
const qS = ({hendleCloseSidebar: e})=>{
    const t = gs().pathname;
    de.useEffect(()=>{
        e()
    }
    , [t]);
    const n = [{
        id: 1,
        name: "Dashboard",
        link: "/",
        svg: EE,
        svgActive: LE
    }, {
        id: 2,
        name: "Stations",
        link: "/stations",
        svg: ME,
        svgActive: DE
    }, {
        id: 3,
        name: "My Trips",
        link: "/my-trips",
        svg: TE,
        svgActive: RE
    }, {
        id: 4,
        name: "Account",
        link: "/account",
        svg: OE,
        svgActive: FE
    }, {
        id: 5,
        name: "Subscription plan",
        link: t,
        svg: AE,
        svgActive: IE
    }];
    return h.jsx("nav", {
        className: "nav-buttons",
        children: h.jsx("ul", {
            children: n.map(({id: r, name: i, link: s, svg: o, svgActive: a})=>{
                const l = t === s && r !== 5 ? " active" : "";
                return h.jsx(ec, {
                    to: s,
                    children: h.jsxs("li", {
                        className: l,
                        children: [h.jsx("div", {
                            children: t === s && r !== 5 ? h.jsx(a, {
                                className: "svg-button"
                            }) : h.jsx(o, {
                                className: "svg-button"
                            })
                        }), i]
                    })
                }, r)
            }
            )
        })
    })
}
;
qS.propTypes = {
    hendleCloseSidebar: Do.func.isRequired
};
const NE = "/assets/tesla-84dfc585.svg"
  , VE = "/assets/nissan-4b72c3d4.svg";
var H0;
function Uf() {
    return Uf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Uf.apply(this, arguments)
}
var BE = function(t) {
    return x.createElement("svg", Uf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 11,
        height: 11,
        fill: "none"
    }, t), H0 || (H0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 1.5,
        d: "M5.5 1v4.5m0 4.5V5.5m0 0H10 1"
    })))
};
const Yp = "/assets/plus-7fbd0c71.svg";
var W0;
function Gf() {
    return Gf = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Gf.apply(this, arguments)
}
var U0 = function(t) {
    return x.createElement("svg", Gf({
        xmlns: "http://www.w3.org/2000/svg",
        width: 22,
        height: 5,
        fill: "none"
    }, t), W0 || (W0 = x.createElement("path", {
        stroke: "#fff",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeOpacity: .3,
        strokeWidth: 2,
        d: "M2.25 2.25h.013m8.737 0h.012m8.738 0h.012M3.5 2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm8.75 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm8.75 0a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
    })))
};
const Yf = "/assets/three-dots-14572150.svg"
  , zE = ()=>h.jsxs("div", {
    className: "my-cars",
    children: [h.jsxs("div", {
        children: [h.jsx("h4", {
            children: "My Cars"
        }), h.jsx(BE, {})]
    }), h.jsxs("ul", {
        className: "my-cars__cars",
        children: [h.jsxs("li", {
            className: "my-cars__car",
            children: [h.jsxs("div", {
                className: "my-cars__model",
                children: [h.jsx("div", {
                    children: h.jsx("img", {
                        src: NE,
                        alt: "Tesla"
                    })
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Tesla"
                    }), h.jsx("h4", {
                        children: "Model X"
                    })]
                })]
            }), h.jsx("div", {
                className: "my-cars__divider"
            }), h.jsxs("div", {
                className: "my-cars__info",
                children: [h.jsxs("div", {
                    children: [h.jsx("h5", {
                        children: "Battery"
                    }), h.jsx("h4", {
                        className: "quite-battery",
                        children: "58%"
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h5", {
                        children: "Range"
                    }), h.jsx("h4", {
                        children: "120 miles"
                    })]
                }), h.jsx(U0, {})]
            })]
        }), h.jsxs("li", {
            className: "my-cars__car",
            children: [h.jsxs("div", {
                className: "my-cars__model",
                children: [h.jsx("div", {
                    children: h.jsx("img", {
                        src: VE,
                        alt: "Nissan"
                    })
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Nissan"
                    }), h.jsx("h4", {
                        children: "Leaf"
                    })]
                })]
            }), h.jsx("div", {
                className: "my-cars__divider"
            }), h.jsxs("div", {
                className: "my-cars__info",
                children: [h.jsxs("div", {
                    children: [h.jsx("h5", {
                        children: "Battery"
                    }), h.jsx("h4", {
                        className: "low-battery",
                        children: "18%"
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h5", {
                        children: "Range"
                    }), h.jsx("h4", {
                        children: "45 miles"
                    })]
                }), h.jsx(U0, {})]
            })]
        })]
    })]
});
const JS = x.createContext({
    transformPagePoint: e=>e,
    isStatic: !1,
    reducedMotion: "never"
})
  , $c = x.createContext({})
  , Xp = x.createContext(null)
  , Hc = typeof document < "u"
  , $E = Hc ? x.useLayoutEffect : x.useEffect
  , ew = x.createContext({
    strict: !1
});
function HE(e, t, n, r) {
    const {visualElement: i} = x.useContext($c)
      , s = x.useContext(ew)
      , o = x.useContext(Xp)
      , a = x.useContext(JS).reducedMotion
      , l = x.useRef();
    r = r || s.renderer,
    !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: a
    }));
    const c = l.current;
    x.useInsertionEffect(()=>{
        c && c.update(n, o)
    }
    );
    const u = x.useRef(!!window.HandoffAppearAnimations);
    return $E(()=>{
        c && (c.render(),
        u.current && c.animationState && c.animationState.animateChanges())
    }
    ),
    x.useEffect(()=>{
        c && (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        window.HandoffAppearAnimations = void 0,
        u.current = !1)
    }
    ),
    c
}
function Li(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function WE(e, t, n) {
    return x.useCallback(r=>{
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Li(n) && (n.current = r))
    }
    , [t])
}
function Ro(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Wc(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const Kp = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Qp = ["initial", ...Kp];
function Uc(e) {
    return Wc(e.animate) || Qp.some(t=>Ro(e[t]))
}
function tw(e) {
    return !!(Uc(e) || e.variants)
}
function UE(e, t) {
    if (Uc(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || Ro(n) ? n : void 0,
            animate: Ro(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function GE(e) {
    const {initial: t, animate: n} = UE(e, x.useContext($c));
    return x.useMemo(()=>({
        initial: t,
        animate: n
    }), [G0(t), G0(n)])
}
function G0(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Y0 = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , Fo = {};
for (const e in Y0)
    Fo[e] = {
        isEnabled: t=>Y0[e].some(n=>!!t[n])
    };
function YE(e) {
    for (const t in e)
        Fo[t] = {
            ...Fo[t],
            ...e[t]
        }
}
const nw = x.createContext({})
  , rw = x.createContext({})
  , XE = Symbol.for("motionComponentSymbol");
function KE({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && YE(e);
    function s(a, l) {
        let c;
        const u = {
            ...x.useContext(JS),
            ...a,
            layoutId: QE(a)
        }
          , {isStatic: d} = u
          , f = GE(a)
          , p = r(a, d);
        if (!d && Hc) {
            f.visualElement = HE(i, p, u, t);
            const g = x.useContext(rw)
              , v = x.useContext(ew).strict;
            f.visualElement && (c = f.visualElement.loadFeatures(u, v, e, g))
        }
        return x.createElement($c.Provider, {
            value: f
        }, c && f.visualElement ? x.createElement(c, {
            visualElement: f.visualElement,
            ...u
        }) : null, n(i, a, WE(p, f.visualElement, l), p, d, f.visualElement))
    }
    const o = x.forwardRef(s);
    return o[XE] = i,
    o
}
function QE({layoutId: e}) {
    const t = x.useContext(nw).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function ZE(e) {
    function t(r, i={}) {
        return KE(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r,i)=>(n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
const qE = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Zp(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(qE.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const tc = {};
function JE(e) {
    Object.assign(tc, e)
}
const ea = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , ui = new Set(ea);
function iw(e, {layout: t, layoutId: n}) {
    return ui.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!tc[e] || e === "opacity")
}
const ft = e=>!!(e && e.getVelocity)
  , eM = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , tM = ea.length;
function nM(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let s = "";
    for (let o = 0; o < tM; o++) {
        const a = ea[o];
        if (e[a] !== void 0) {
            const l = eM[a] || a;
            s += `${l}(${e[a]}) `
        }
    }
    return t && !e.z && (s += "translateZ(0)"),
    s = s.trim(),
    i ? s = i(e, r ? "" : s) : n && r && (s = "none"),
    s
}
const sw = e=>t=>typeof t == "string" && t.startsWith(e)
  , ow = sw("--")
  , Xf = sw("var(--")
  , rM = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , iM = (e,t)=>t && typeof e == "number" ? t.transform(e) : e
  , mr = (e,t,n)=>Math.min(Math.max(n, e), t)
  , di = {
    test: e=>typeof e == "number",
    parse: parseFloat,
    transform: e=>e
}
  , io = {
    ...di,
    transform: e=>mr(0, 1, e)
}
  , Ma = {
    ...di,
    default: 1
}
  , so = e=>Math.round(e * 1e5) / 1e5
  , Gc = /(-)?([\d]*\.?[\d])+/g
  , aw = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , sM = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ta(e) {
    return typeof e == "string"
}
const na = e=>({
    test: t=>ta(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t=>`${t}${e}`
})
  , Bn = na("deg")
  , ln = na("%")
  , $ = na("px")
  , oM = na("vh")
  , aM = na("vw")
  , X0 = {
    ...ln,
    parse: e=>ln.parse(e) / 100,
    transform: e=>ln.transform(e * 100)
}
  , K0 = {
    ...di,
    transform: Math.round
}
  , lw = {
    borderWidth: $,
    borderTopWidth: $,
    borderRightWidth: $,
    borderBottomWidth: $,
    borderLeftWidth: $,
    borderRadius: $,
    radius: $,
    borderTopLeftRadius: $,
    borderTopRightRadius: $,
    borderBottomRightRadius: $,
    borderBottomLeftRadius: $,
    width: $,
    maxWidth: $,
    height: $,
    maxHeight: $,
    size: $,
    top: $,
    right: $,
    bottom: $,
    left: $,
    padding: $,
    paddingTop: $,
    paddingRight: $,
    paddingBottom: $,
    paddingLeft: $,
    margin: $,
    marginTop: $,
    marginRight: $,
    marginBottom: $,
    marginLeft: $,
    rotate: Bn,
    rotateX: Bn,
    rotateY: Bn,
    rotateZ: Bn,
    scale: Ma,
    scaleX: Ma,
    scaleY: Ma,
    scaleZ: Ma,
    skew: Bn,
    skewX: Bn,
    skewY: Bn,
    distance: $,
    translateX: $,
    translateY: $,
    translateZ: $,
    x: $,
    y: $,
    z: $,
    perspective: $,
    transformPerspective: $,
    opacity: io,
    originX: X0,
    originY: X0,
    originZ: $,
    zIndex: K0,
    fillOpacity: io,
    strokeOpacity: io,
    numOctaves: K0
};
function qp(e, t, n, r) {
    const {style: i, vars: s, transform: o, transformOrigin: a} = e;
    let l = !1
      , c = !1
      , u = !0;
    for (const d in t) {
        const f = t[d];
        if (ow(d)) {
            s[d] = f;
            continue
        }
        const p = lw[d]
          , g = iM(f, p);
        if (ui.has(d)) {
            if (l = !0,
            o[d] = g,
            !u)
                continue;
            f !== (p.default || 0) && (u = !1)
        } else
            d.startsWith("origin") ? (c = !0,
            a[d] = g) : i[d] = g
    }
    if (t.transform || (l || r ? i.transform = nM(e.transform, n, u, r) : i.transform && (i.transform = "none")),
    c) {
        const {originX: d="50%", originY: f="50%", originZ: p=0} = a;
        i.transformOrigin = `${d} ${f} ${p}`
    }
}
const Jp = ()=>({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function cw(e, t, n) {
    for (const r in t)
        !ft(t[r]) && !iw(r, n) && (e[r] = t[r])
}
function lM({transformTemplate: e}, t, n) {
    return x.useMemo(()=>{
        const r = Jp();
        return qp(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function cM(e, t, n) {
    const r = e.style || {}
      , i = {};
    return cw(i, r, e),
    Object.assign(i, lM(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
}
function uM(e, t, n) {
    const r = {}
      , i = cM(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const dM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);
function nc(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || dM.has(e)
}
let uw = e=>!nc(e);
function fM(e) {
    e && (uw = t=>t.startsWith("on") ? !nc(t) : e(t))
}
try {
    fM(require("@emotion/is-prop-valid").default)
} catch {}
function hM(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (uw(i) || n === !0 && nc(i) || !t && !nc(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Q0(e, t, n) {
    return typeof e == "string" ? e : $.transform(t + n * e)
}
function pM(e, t, n) {
    const r = Q0(t, e.x, e.width)
      , i = Q0(n, e.y, e.height);
    return `${r} ${i}`
}
const gM = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , mM = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function vM(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? gM : mM;
    e[s.offset] = $.transform(-r);
    const o = $.transform(t)
      , a = $.transform(n);
    e[s.array] = `${o} ${a}`
}
function eg(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: a=1, pathOffset: l=0, ...c}, u, d, f) {
    if (qp(e, c, u, f),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: p, style: g, dimensions: v} = e;
    p.transform && (v && (g.transform = p.transform),
    delete p.transform),
    v && (i !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = pM(v, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    o !== void 0 && vM(p, o, a, l, !1)
}
const dw = ()=>({
    ...Jp(),
    attrs: {}
})
  , tg = e=>typeof e == "string" && e.toLowerCase() === "svg";
function yM(e, t, n, r) {
    const i = x.useMemo(()=>{
        const s = dw();
        return eg(s, t, {
            enableHardwareAcceleration: !1
        }, tg(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        cw(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function xM(e=!1) {
    return (n,r,i,{latestValues: s},o)=>{
        const l = (Zp(n) ? yM : uM)(r, s, o, n)
          , u = {
            ...hM(r, typeof n == "string", e),
            ...l,
            ref: i
        }
          , {children: d} = r
          , f = x.useMemo(()=>ft(d) ? d.get() : d, [d]);
        return x.createElement(n, {
            ...u,
            children: f
        })
    }
}
const ng = e=>e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function fw(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const hw = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function pw(e, t, n, r) {
    fw(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(hw.has(i) ? i : ng(i), t.attrs[i])
}
function rg(e, t) {
    const {style: n} = e
      , r = {};
    for (const i in n)
        (ft(n[i]) || t.style && ft(t.style[i]) || iw(i, e)) && (r[i] = n[i]);
    return r
}
function gw(e, t) {
    const n = rg(e, t);
    for (const r in e)
        if (ft(e[r]) || ft(t[r])) {
            const i = ea.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r]
        }
    return n
}
function ig(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
function bM(e) {
    const t = x.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const rc = e=>Array.isArray(e)
  , SM = e=>!!(e && typeof e == "object" && e.mix && e.toValue)
  , wM = e=>rc(e) ? e[e.length - 1] || 0 : e;
function yl(e) {
    const t = ft(e) ? e.get() : e;
    return SM(t) ? t.toValue() : t
}
function _M({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, s) {
    const o = {
        latestValues: kM(r, i, s, e),
        renderState: t()
    };
    return n && (o.mount = a=>n(r, a, o)),
    o
}
const mw = e=>(t,n)=>{
    const r = x.useContext($c)
      , i = x.useContext(Xp)
      , s = ()=>_M(e, t, r, i);
    return n ? s() : bM(s)
}
;
function kM(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const f in s)
        i[f] = yl(s[f]);
    let {initial: o, animate: a} = e;
    const l = Uc(e)
      , c = tw(e);
    t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || o === !1;
    const d = u ? a : o;
    return d && typeof d != "boolean" && !Wc(d) && (Array.isArray(d) ? d : [d]).forEach(p=>{
        const g = ig(e, p);
        if (!g)
            return;
        const {transitionEnd: v, transition: S, ...y} = g;
        for (const m in y) {
            let b = y[m];
            if (Array.isArray(b)) {
                const w = u ? b.length - 1 : 0;
                b = b[w]
            }
            b !== null && (i[m] = b)
        }
        for (const m in v)
            i[m] = v[m]
    }
    ),
    i
}
const me = e=>e;
class Z0 {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function CM(e) {
    let t = new Z0
      , n = new Z0
      , r = 0
      , i = !1
      , s = !1;
    const o = new WeakSet
      , a = {
        schedule: (l,c=!1,u=!1)=>{
            const d = u && i
              , f = d ? t : n;
            return c && o.add(l),
            f.add(l) && d && i && (r = t.order.length),
            l
        }
        ,
        cancel: l=>{
            n.remove(l),
            o.delete(l)
        }
        ,
        process: l=>{
            if (i) {
                s = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let c = 0; c < r; c++) {
                    const u = t.order[c];
                    u(l),
                    o.has(u) && (a.schedule(u),
                    e())
                }
            i = !1,
            s && (s = !1,
            a.process(l))
        }
    };
    return a
}
const Ta = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , PM = 40;
function jM(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = Ta.reduce((d,f)=>(d[f] = CM(()=>n = !0),
    d), {})
      , o = d=>s[d].process(i)
      , a = ()=>{
        const d = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, PM), 1),
        i.timestamp = d,
        i.isProcessing = !0,
        Ta.forEach(o),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(a))
    }
      , l = ()=>{
        n = !0,
        r = !0,
        i.isProcessing || e(a)
    }
    ;
    return {
        schedule: Ta.reduce((d,f)=>{
            const p = s[f];
            return d[f] = (g,v=!1,S=!1)=>(n || l(),
            p.schedule(g, v, S)),
            d
        }
        , {}),
        cancel: d=>Ta.forEach(f=>s[f].cancel(d)),
        state: i,
        steps: s
    }
}
const {schedule: oe, cancel: Fn, state: Ae, steps: Zu} = jM(typeof requestAnimationFrame < "u" ? requestAnimationFrame : me, !0)
  , EM = {
    useVisualState: mw({
        scrapeMotionValuesFromProps: gw,
        createRenderState: dw,
        onMount: (e,t,{renderState: n, latestValues: r})=>{
            oe.read(()=>{
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            oe.render(()=>{
                eg(n, r, {
                    enableHardwareAcceleration: !1
                }, tg(t.tagName), e.transformTemplate),
                pw(t, n)
            }
            )
        }
    })
}
  , MM = {
    useVisualState: mw({
        scrapeMotionValuesFromProps: rg,
        createRenderState: Jp
    })
};
function TM(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...Zp(e) ? EM : MM,
        preloadedFeatures: n,
        useRender: xM(t),
        createVisualElement: r,
        Component: e
    }
}
function Pn(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    ()=>e.removeEventListener(t, n)
}
const vw = e=>e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Yc(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const OM = e=>t=>vw(t) && e(t, Yc(t));
function Mn(e, t, n, r) {
    return Pn(e, t, OM(n), r)
}
const AM = (e,t)=>n=>t(e(n))
  , dr = (...e)=>e.reduce(AM);
function yw(e) {
    let t = null;
    return ()=>{
        const n = ()=>{
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const q0 = yw("dragHorizontal")
  , J0 = yw("dragVertical");
function xw(e) {
    let t = !1;
    if (e === "y")
        t = J0();
    else if (e === "x")
        t = q0();
    else {
        const n = q0()
          , r = J0();
        n && r ? t = ()=>{
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function bw() {
    const e = xw(!0);
    return e ? (e(),
    !1) : !0
}
class wr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function ev(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , i = (s,o)=>{
        if (s.type === "touch" || bw())
            return;
        const a = e.getProps();
        e.animationState && a.whileHover && e.animationState.setActive("whileHover", t),
        a[r] && oe.update(()=>a[r](s, o))
    }
    ;
    return Mn(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class LM extends wr {
    mount() {
        this.unmount = dr(ev(this.node, !0), ev(this.node, !1))
    }
    unmount() {}
}
class DM extends wr {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = dr(Pn(this.node.current, "focus", ()=>this.onFocus()), Pn(this.node.current, "blur", ()=>this.onBlur()))
    }
    unmount() {}
}
const Sw = (e,t)=>t ? e === t ? !0 : Sw(e, t.parentElement) : !1;
function qu(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Yc(n))
}
class RM extends wr {
    constructor() {
        super(...arguments),
        this.removeStartListeners = me,
        this.removeEndListeners = me,
        this.removeAccessibleListeners = me,
        this.startPointerPress = (t,n)=>{
            if (this.removeEndListeners(),
            this.isPressing)
                return;
            const r = this.node.getProps()
              , s = Mn(window, "pointerup", (a,l)=>{
                if (!this.checkPressEnd())
                    return;
                const {onTap: c, onTapCancel: u} = this.node.getProps();
                oe.update(()=>{
                    Sw(this.node.current, a.target) ? c && c(a, l) : u && u(a, l)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , o = Mn(window, "pointercancel", (a,l)=>this.cancelPress(a, l), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = dr(s, o),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = ()=>{
            const t = s=>{
                if (s.key !== "Enter" || this.isPressing)
                    return;
                const o = a=>{
                    a.key !== "Enter" || !this.checkPressEnd() || qu("up", (l,c)=>{
                        const {onTap: u} = this.node.getProps();
                        u && oe.update(()=>u(l, c))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = Pn(this.node.current, "keyup", o),
                qu("down", (a,l)=>{
                    this.startPress(a, l)
                }
                )
            }
              , n = Pn(this.node.current, "keydown", t)
              , r = ()=>{
                this.isPressing && qu("cancel", (s,o)=>this.cancelPress(s, o))
            }
              , i = Pn(this.node.current, "blur", r);
            this.removeAccessibleListeners = dr(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && oe.update(()=>r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !bw()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && oe.update(()=>r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = Mn(this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = Pn(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = dr(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const Kf = new WeakMap
  , Ju = new WeakMap
  , FM = e=>{
    const t = Kf.get(e.target);
    t && t(e)
}
  , IM = e=>{
    e.forEach(FM)
}
;
function NM({root: e, ...t}) {
    const n = e || document;
    Ju.has(n) || Ju.set(n, {});
    const r = Ju.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(IM,{
        root: e,
        ...t
    })),
    r[i]
}
function VM(e, t, n) {
    const r = NM(t);
    return Kf.set(e, n),
    r.observe(e),
    ()=>{
        Kf.delete(e),
        r.unobserve(e)
    }
}
const BM = {
    some: 0,
    all: 1
};
class zM extends wr {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : BM[i]
        }
          , a = l=>{
            const {isIntersecting: c} = l;
            if (this.isInView === c || (this.isInView = c,
            s && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: u, onViewportLeave: d} = this.node.getProps()
              , f = c ? u : d;
            f && f(l)
        }
        ;
        return VM(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some($M(t, n)) && this.startObserver()
    }
    unmount() {}
}
function $M({viewport: e={}}, {viewport: t={}}={}) {
    return n=>e[n] !== t[n]
}
const HM = {
    inView: {
        Feature: zM
    },
    tap: {
        Feature: RM
    },
    focus: {
        Feature: DM
    },
    hover: {
        Feature: LM
    }
};
function ww(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function WM(e) {
    const t = {};
    return e.values.forEach((n,r)=>t[r] = n.get()),
    t
}
function UM(e) {
    const t = {};
    return e.values.forEach((n,r)=>t[r] = n.getVelocity()),
    t
}
function Xc(e, t, n) {
    const r = e.getProps();
    return ig(r, t, n !== void 0 ? n : r.custom, WM(e), UM(e))
}
const GM = "framerAppearId"
  , YM = "data-" + ng(GM);
let XM = me
  , sg = me;
const fr = e=>e * 1e3
  , Tn = e=>e / 1e3
  , KM = {
    current: !1
}
  , _w = e=>Array.isArray(e) && typeof e[0] == "number";
function kw(e) {
    return !!(!e || typeof e == "string" && Cw[e] || _w(e) || Array.isArray(e) && e.every(kw))
}
const Ws = ([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Cw = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ws([0, .65, .55, 1]),
    circOut: Ws([.55, 0, 1, .45]),
    backIn: Ws([.31, .01, .66, -.59]),
    backOut: Ws([.33, 1.53, .69, .99])
};
function Pw(e) {
    if (e)
        return _w(e) ? Ws(e) : Array.isArray(e) ? e.map(Pw) : Cw[e]
}
function QM(e, t, n, {delay: r=0, duration: i, repeat: s=0, repeatType: o="loop", ease: a, times: l}={}) {
    const c = {
        [t]: n
    };
    l && (c.offset = l);
    const u = Pw(a);
    return Array.isArray(u) && (c.easing = u),
    e.animate(c, {
        delay: r,
        duration: i,
        easing: Array.isArray(u) ? "linear" : u,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function ZM(e, {repeat: t, repeatType: n="loop"}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const jw = (e,t,n)=>(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , qM = 1e-7
  , JM = 12;
function eT(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = jw(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > qM && ++a < JM);
    return o
}
function ra(e, t, n, r) {
    if (e === t && n === r)
        return me;
    const i = s=>eT(s, 0, 1, e, n);
    return s=>s === 0 || s === 1 ? s : jw(i(s), t, r)
}
const tT = ra(.42, 0, 1, 1)
  , nT = ra(0, 0, .58, 1)
  , Ew = ra(.42, 0, .58, 1)
  , rT = e=>Array.isArray(e) && typeof e[0] != "number"
  , Mw = e=>t=>t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Tw = e=>t=>1 - e(1 - t)
  , Ow = e=>1 - Math.sin(Math.acos(e))
  , og = Tw(Ow)
  , iT = Mw(og)
  , Aw = ra(.33, 1.53, .69, .99)
  , ag = Tw(Aw)
  , sT = Mw(ag)
  , oT = e=>(e *= 2) < 1 ? .5 * ag(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , aT = {
    linear: me,
    easeIn: tT,
    easeInOut: Ew,
    easeOut: nT,
    circIn: Ow,
    circInOut: iT,
    circOut: og,
    backIn: ag,
    backInOut: sT,
    backOut: Aw,
    anticipate: oT
}
  , tv = e=>{
    if (Array.isArray(e)) {
        sg(e.length === 4);
        const [t,n,r,i] = e;
        return ra(t, n, r, i)
    } else if (typeof e == "string")
        return aT[e];
    return e
}
  , lg = (e,t)=>n=>!!(ta(n) && sM.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , Lw = (e,t,n)=>r=>{
    if (!ta(r))
        return r;
    const [i,s,o,a] = r.match(Gc);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , lT = e=>mr(0, 255, e)
  , ed = {
    ...di,
    transform: e=>Math.round(lT(e))
}
  , Ur = {
    test: lg("rgb", "red"),
    parse: Lw("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1})=>"rgba(" + ed.transform(e) + ", " + ed.transform(t) + ", " + ed.transform(n) + ", " + so(io.transform(r)) + ")"
};
function cT(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Qf = {
    test: lg("#"),
    parse: cT,
    transform: Ur.transform
}
  , Di = {
    test: lg("hsl", "hue"),
    parse: Lw("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1})=>"hsla(" + Math.round(e) + ", " + ln.transform(so(t)) + ", " + ln.transform(so(n)) + ", " + so(io.transform(r)) + ")"
}
  , Je = {
    test: e=>Ur.test(e) || Qf.test(e) || Di.test(e),
    parse: e=>Ur.test(e) ? Ur.parse(e) : Di.test(e) ? Di.parse(e) : Qf.parse(e),
    transform: e=>ta(e) ? e : e.hasOwnProperty("red") ? Ur.transform(e) : Di.transform(e)
}
  , ue = (e,t,n)=>-n * e + n * t + e;
function td(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function uT({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const a = n < .5 ? n * (1 + t) : n + t - n * t
          , l = 2 * n - a;
        i = td(l, a, e + 1 / 3),
        s = td(l, a, e),
        o = td(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
const nd = (e,t,n)=>{
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
  , dT = [Qf, Ur, Di]
  , fT = e=>dT.find(t=>t.test(e));
function nv(e) {
    const t = fT(e);
    let n = t.parse(e);
    return t === Di && (n = uT(n)),
    n
}
const Dw = (e,t)=>{
    const n = nv(e)
      , r = nv(t)
      , i = {
        ...n
    };
    return s=>(i.red = nd(n.red, r.red, s),
    i.green = nd(n.green, r.green, s),
    i.blue = nd(n.blue, r.blue, s),
    i.alpha = ue(n.alpha, r.alpha, s),
    Ur.transform(i))
}
;
function hT(e) {
    var t, n;
    return isNaN(e) && ta(e) && (((t = e.match(Gc)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(aw)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Rw = {
    regex: rM,
    countKey: "Vars",
    token: "${v}",
    parse: me
}
  , Fw = {
    regex: aw,
    countKey: "Colors",
    token: "${c}",
    parse: Je.parse
}
  , Iw = {
    regex: Gc,
    countKey: "Numbers",
    token: "${n}",
    parse: di.parse
};
function rd(e, {regex: t, countKey: n, token: r, parse: i}) {
    const s = e.tokenised.match(t);
    s && (e["num" + n] = s.length,
    e.tokenised = e.tokenised.replace(t, r),
    e.values.push(...s.map(i)))
}
function ic(e) {
    const t = e.toString()
      , n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && rd(n, Rw),
    rd(n, Fw),
    rd(n, Iw),
    n
}
function Nw(e) {
    return ic(e).values
}
function Vw(e) {
    const {values: t, numColors: n, numVars: r, tokenised: i} = ic(e)
      , s = t.length;
    return o=>{
        let a = i;
        for (let l = 0; l < s; l++)
            l < r ? a = a.replace(Rw.token, o[l]) : l < r + n ? a = a.replace(Fw.token, Je.transform(o[l])) : a = a.replace(Iw.token, so(o[l]));
        return a
    }
}
const pT = e=>typeof e == "number" ? 0 : e;
function gT(e) {
    const t = Nw(e);
    return Vw(e)(t.map(pT))
}
const vr = {
    test: hT,
    parse: Nw,
    createTransformer: Vw,
    getAnimatableNone: gT
}
  , Bw = (e,t)=>n=>`${n > 0 ? t : e}`;
function zw(e, t) {
    return typeof e == "number" ? n=>ue(e, t, n) : Je.test(e) ? Dw(e, t) : e.startsWith("var(") ? Bw(e, t) : Hw(e, t)
}
const $w = (e,t)=>{
    const n = [...e]
      , r = n.length
      , i = e.map((s,o)=>zw(s, t[o]));
    return s=>{
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
  , mT = (e,t)=>{
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = zw(e[i], t[i]));
    return i=>{
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
  , Hw = (e,t)=>{
    const n = vr.createTransformer(t)
      , r = ic(e)
      , i = ic(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? dr($w(r.values, i.values), n) : Bw(e, t)
}
  , Io = (e,t,n)=>{
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , rv = (e,t)=>n=>ue(e, t, n);
function vT(e) {
    return typeof e == "number" ? rv : typeof e == "string" ? Je.test(e) ? Dw : Hw : Array.isArray(e) ? $w : typeof e == "object" ? mT : rv
}
function yT(e, t, n) {
    const r = []
      , i = n || vT(e[0])
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || me : t;
            a = dr(l, a)
        }
        r.push(a)
    }
    return r
}
function Ww(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (sg(s === t.length),
    s === 1)
        return ()=>t[0];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const o = yT(t, r, i)
      , a = o.length
      , l = c=>{
        let u = 0;
        if (a > 1)
            for (; u < e.length - 2 && !(c < e[u + 1]); u++)
                ;
        const d = Io(e[u], e[u + 1], c);
        return o[u](d)
    }
    ;
    return n ? c=>l(mr(e[0], e[s - 1], c)) : l
}
function xT(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = Io(0, t, r);
        e.push(ue(n, 1, i))
    }
}
function bT(e) {
    const t = [0];
    return xT(t, e.length - 1),
    t
}
function ST(e, t) {
    return e.map(n=>n * t)
}
function wT(e, t) {
    return e.map(()=>t || Ew).splice(0, e.length - 1)
}
function sc({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = rT(r) ? r.map(tv) : tv(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = ST(n && n.length === t.length ? n : bT(t), e)
      , a = Ww(o, t, {
        ease: Array.isArray(i) ? i : wT(t, i)
    });
    return {
        calculatedDuration: e,
        next: l=>(s.value = a(l),
        s.done = l >= e,
        s)
    }
}
function Uw(e, t) {
    return t ? e * (1e3 / t) : 0
}
const _T = 5;
function Gw(e, t, n) {
    const r = Math.max(t - _T, 0);
    return Uw(n - e(r), t - r)
}
const id = .001
  , kT = .01
  , iv = 10
  , CT = .05
  , PT = 1;
function jT({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, s;
    XM(e <= fr(iv));
    let o = 1 - t;
    o = mr(CT, PT, o),
    e = mr(kT, iv, Tn(e)),
    o < 1 ? (i = c=>{
        const u = c * o
          , d = u * e
          , f = u - n
          , p = Zf(c, o)
          , g = Math.exp(-d);
        return id - f / p * g
    }
    ,
    s = c=>{
        const d = c * o * e
          , f = d * n + n
          , p = Math.pow(o, 2) * Math.pow(c, 2) * e
          , g = Math.exp(-d)
          , v = Zf(Math.pow(c, 2), o);
        return (-i(c) + id > 0 ? -1 : 1) * ((f - p) * g) / v
    }
    ) : (i = c=>{
        const u = Math.exp(-c * e)
          , d = (c - n) * e + 1;
        return -id + u * d
    }
    ,
    s = c=>{
        const u = Math.exp(-c * e)
          , d = (n - c) * (e * e);
        return u * d
    }
    );
    const a = 5 / e
      , l = MT(i, s, a);
    if (e = fr(e),
    isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const c = Math.pow(l, 2) * r;
        return {
            stiffness: c,
            damping: o * 2 * Math.sqrt(r * c),
            duration: e
        }
    }
}
const ET = 12;
function MT(e, t, n) {
    let r = n;
    for (let i = 1; i < ET; i++)
        r = r - e(r) / t(r);
    return r
}
function Zf(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const TT = ["duration", "bounce"]
  , OT = ["stiffness", "damping", "mass"];
function sv(e, t) {
    return t.some(n=>e[n] !== void 0)
}
function AT(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!sv(e, OT) && sv(e, TT)) {
        const n = jT(e);
        t = {
            ...t,
            ...n,
            velocity: 0,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function Yw({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const i = e[0]
      , s = e[e.length - 1]
      , o = {
        done: !1,
        value: i
    }
      , {stiffness: a, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f} = AT(r)
      , p = u ? -Tn(u) : 0
      , g = l / (2 * Math.sqrt(a * c))
      , v = s - i
      , S = Tn(Math.sqrt(a / c))
      , y = Math.abs(v) < 5;
    n || (n = y ? .01 : 2),
    t || (t = y ? .005 : .5);
    let m;
    if (g < 1) {
        const b = Zf(S, g);
        m = w=>{
            const k = Math.exp(-g * S * w);
            return s - k * ((p + g * S * v) / b * Math.sin(b * w) + v * Math.cos(b * w))
        }
    } else if (g === 1)
        m = b=>s - Math.exp(-S * b) * (v + (p + S * v) * b);
    else {
        const b = S * Math.sqrt(g * g - 1);
        m = w=>{
            const k = Math.exp(-g * S * w)
              , P = Math.min(b * w, 300);
            return s - k * ((p + g * S * v) * Math.sinh(P) + b * v * Math.cosh(P)) / b
        }
    }
    return {
        calculatedDuration: f && d || null,
        next: b=>{
            const w = m(b);
            if (f)
                o.done = b >= d;
            else {
                let k = p;
                b !== 0 && (g < 1 ? k = Gw(m, b, w) : k = 0);
                const P = Math.abs(k) <= n
                  , _ = Math.abs(s - w) <= t;
                o.done = P && _
            }
            return o.value = o.done ? s : w,
            o
        }
    }
}
function ov({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: c=.5, restSpeed: u}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , p = C=>a !== void 0 && C < a || l !== void 0 && C > l
      , g = C=>a === void 0 ? l : l === void 0 || Math.abs(a - C) < Math.abs(l - C) ? a : l;
    let v = n * t;
    const S = d + v
      , y = o === void 0 ? S : o(S);
    y !== S && (v = y - d);
    const m = C=>-v * Math.exp(-C / r)
      , b = C=>y + m(C)
      , w = C=>{
        const j = m(C)
          , M = b(C);
        f.done = Math.abs(j) <= c,
        f.value = f.done ? y : M
    }
    ;
    let k, P;
    const _ = C=>{
        p(f.value) && (k = C,
        P = Yw({
            keyframes: [f.value, g(f.value)],
            velocity: Gw(b, C, f.value),
            damping: i,
            stiffness: s,
            restDelta: c,
            restSpeed: u
        }))
    }
    ;
    return _(0),
    {
        calculatedDuration: null,
        next: C=>{
            let j = !1;
            return !P && k === void 0 && (j = !0,
            w(C),
            _(C)),
            k !== void 0 && C > k ? P.next(C - k) : (!j && w(C),
            f)
        }
    }
}
const LT = e=>{
    const t = ({timestamp: n})=>e(n);
    return {
        start: ()=>oe.update(t, !0),
        stop: ()=>Fn(t),
        now: ()=>Ae.isProcessing ? Ae.timestamp : performance.now()
    }
}
  , av = 2e4;
function lv(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < av; )
        t += n,
        r = e.next(t);
    return t >= av ? 1 / 0 : t
}
const DT = {
    decay: ov,
    inertia: ov,
    tween: sc,
    keyframes: sc,
    spring: Yw
};
function oc({autoplay: e=!0, delay: t=0, driver: n=LT, keyframes: r, type: i="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: a="loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f}) {
    let p = 1, g = !1, v, S;
    const y = ()=>{
        S = new Promise(I=>{
            v = I
        }
        )
    }
    ;
    y();
    let m;
    const b = DT[i] || sc;
    let w;
    b !== sc && typeof r[0] != "number" && (w = Ww([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const k = b({
        ...f,
        keyframes: r
    });
    let P;
    a === "mirror" && (P = b({
        ...f,
        keyframes: [...r].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let _ = "idle"
      , C = null
      , j = null
      , M = null;
    k.calculatedDuration === null && s && (k.calculatedDuration = lv(k));
    const {calculatedDuration: O} = k;
    let A = 1 / 0
      , N = 1 / 0;
    O !== null && (A = O + o,
    N = A * (s + 1) - o);
    let B = 0;
    const L = I=>{
        if (j === null)
            return;
        p > 0 && (j = Math.min(j, I)),
        p < 0 && (j = Math.min(I - N / p, j)),
        C !== null ? B = C : B = Math.round(I - j) * p;
        const H = B - t * (p >= 0 ? 1 : -1)
          , pe = p >= 0 ? H < 0 : H > N;
        B = Math.max(H, 0),
        _ === "finished" && C === null && (B = N);
        let be = B
          , Ve = k;
        if (s) {
            const Cr = B / A;
            let fn = Math.floor(Cr)
              , qe = Cr % 1;
            !qe && Cr >= 1 && (qe = 1),
            qe === 1 && fn--,
            fn = Math.min(fn, s + 1);
            const pi = !!(fn % 2);
            pi && (a === "reverse" ? (qe = 1 - qe,
            o && (qe -= o / A)) : a === "mirror" && (Ve = P));
            let Pr = mr(0, 1, qe);
            B > N && (Pr = a === "reverse" && pi ? 1 : 0),
            be = Pr * A
        }
        const ae = pe ? {
            done: !1,
            value: r[0]
        } : Ve.next(be);
        w && (ae.value = w(ae.value));
        let {done: Bt} = ae;
        !pe && O !== null && (Bt = p >= 0 ? B >= N : B <= 0);
        const ys = C === null && (_ === "finished" || _ === "running" && Bt);
        return d && d(ae.value),
        ys && E(),
        ae
    }
      , V = ()=>{
        m && m.stop(),
        m = void 0
    }
      , W = ()=>{
        _ = "idle",
        V(),
        v(),
        y(),
        j = M = null
    }
      , E = ()=>{
        _ = "finished",
        u && u(),
        V(),
        v()
    }
      , R = ()=>{
        if (g)
            return;
        m || (m = n(L));
        const I = m.now();
        l && l(),
        C !== null ? j = I - C : (!j || _ === "finished") && (j = I),
        _ === "finished" && y(),
        M = j,
        C = null,
        _ = "running",
        m.start()
    }
    ;
    e && R();
    const D = {
        then(I, H) {
            return S.then(I, H)
        },
        get time() {
            return Tn(B)
        },
        set time(I) {
            I = fr(I),
            B = I,
            C !== null || !m || p === 0 ? C = I : j = m.now() - I / p
        },
        get duration() {
            const I = k.calculatedDuration === null ? lv(k) : k.calculatedDuration;
            return Tn(I)
        },
        get speed() {
            return p
        },
        set speed(I) {
            I === p || !m || (p = I,
            D.time = Tn(B))
        },
        get state() {
            return _
        },
        play: R,
        pause: ()=>{
            _ = "paused",
            C = B
        }
        ,
        stop: ()=>{
            g = !0,
            _ !== "idle" && (_ = "idle",
            c && c(),
            W())
        }
        ,
        cancel: ()=>{
            M !== null && L(M),
            W()
        }
        ,
        complete: ()=>{
            _ = "finished"
        }
        ,
        sample: I=>(j = 0,
        L(I))
    };
    return D
}
function RT(e) {
    let t;
    return ()=>(t === void 0 && (t = e()),
    t)
}
const FT = RT(()=>Object.hasOwnProperty.call(Element.prototype, "animate"))
  , IT = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , Oa = 10
  , NT = 2e4
  , VT = (e,t)=>t.type === "spring" || e === "backgroundColor" || !kw(t.ease);
function BT(e, t, {onUpdate: n, onComplete: r, ...i}) {
    if (!(FT() && IT.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let o = !1, a, l;
    const c = ()=>{
        l = new Promise(m=>{
            a = m
        }
        )
    }
    ;
    c();
    let {keyframes: u, duration: d=300, ease: f, times: p} = i;
    if (VT(t, i)) {
        const m = oc({
            ...i,
            repeat: 0,
            delay: 0
        });
        let b = {
            done: !1,
            value: u[0]
        };
        const w = [];
        let k = 0;
        for (; !b.done && k < NT; )
            b = m.sample(k),
            w.push(b.value),
            k += Oa;
        p = void 0,
        u = w,
        d = k - Oa,
        f = "linear"
    }
    const g = QM(e.owner.current, t, u, {
        ...i,
        duration: d,
        ease: f,
        times: p
    });
    i.syncStart && (g.startTime = Ae.isProcessing ? Ae.timestamp : document.timeline ? document.timeline.currentTime : performance.now());
    const v = ()=>g.cancel()
      , S = ()=>{
        oe.update(v),
        a(),
        c()
    }
    ;
    return g.onfinish = ()=>{
        e.set(ZM(u, i)),
        r && r(),
        S()
    }
    ,
    {
        then(m, b) {
            return l.then(m, b)
        },
        attachTimeline(m) {
            return g.timeline = m,
            g.onfinish = null,
            me
        },
        get time() {
            return Tn(g.currentTime || 0)
        },
        set time(m) {
            g.currentTime = fr(m)
        },
        get speed() {
            return g.playbackRate
        },
        set speed(m) {
            g.playbackRate = m
        },
        get duration() {
            return Tn(d)
        },
        play: ()=>{
            o || (g.play(),
            Fn(v))
        }
        ,
        pause: ()=>g.pause(),
        stop: ()=>{
            if (o = !0,
            g.playState === "idle")
                return;
            const {currentTime: m} = g;
            if (m) {
                const b = oc({
                    ...i,
                    autoplay: !1
                });
                e.setWithVelocity(b.sample(m - Oa).value, b.sample(m).value, Oa)
            }
            S()
        }
        ,
        complete: ()=>g.finish(),
        cancel: S
    }
}
function zT({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    const i = ()=>(n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: me,
        pause: me,
        stop: me,
        then: s=>(s(),
        Promise.resolve()),
        cancel: me,
        complete: me
    });
    return t ? oc({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
const $T = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , HT = e=>({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , WT = {
    type: "keyframes",
    duration: .8
}
  , UT = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , GT = (e,{keyframes: t})=>t.length > 2 ? WT : ui.has(e) ? e.startsWith("scale") ? HT(t[1]) : $T : UT
  , qf = (e,t)=>e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (vr.test(t) || t === "0") && !t.startsWith("url("))
  , YT = new Set(["brightness", "contrast", "saturate", "opacity"]);
function XT(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Gc) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = YT.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const KT = /([a-z-]*)\(.*?\)/g
  , Jf = {
    ...vr,
    getAnimatableNone: e=>{
        const t = e.match(KT);
        return t ? t.map(XT).join(" ") : e
    }
}
  , QT = {
    ...lw,
    color: Je,
    backgroundColor: Je,
    outlineColor: Je,
    fill: Je,
    stroke: Je,
    borderColor: Je,
    borderTopColor: Je,
    borderRightColor: Je,
    borderBottomColor: Je,
    borderLeftColor: Je,
    filter: Jf,
    WebkitFilter: Jf
}
  , cg = e=>QT[e];
function Xw(e, t) {
    let n = cg(e);
    return n !== Jf && (n = vr),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Kw = e=>/^0[^.\s]+$/.test(e);
function ZT(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || Kw(e)
}
function qT(e, t, n, r) {
    const i = qf(t, n);
    let s;
    Array.isArray(n) ? s = [...n] : s = [null, n];
    const o = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let c = 0; c < s.length; c++)
        s[c] === null && (s[c] = c === 0 ? o : s[c - 1]),
        ZT(s[c]) && l.push(c),
        typeof s[c] == "string" && s[c] !== "none" && s[c] !== "0" && (a = s[c]);
    if (i && l.length && a)
        for (let c = 0; c < l.length; c++) {
            const u = l[c];
            s[u] = Xw(t, a)
        }
    return s
}
function JT({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...u}) {
    return !!Object.keys(u).length
}
function Qw(e, t) {
    return e[t] || e.default || e
}
const ug = (e,t,n,r={})=>i=>{
    const s = Qw(r, e) || {}
      , o = s.delay || r.delay || 0;
    let {elapsed: a=0} = r;
    a = a - fr(o);
    const l = qT(t, e, n, s)
      , c = l[0]
      , u = l[l.length - 1]
      , d = qf(e, c)
      , f = qf(e, u);
    let p = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -a,
        onUpdate: g=>{
            t.set(g),
            s.onUpdate && s.onUpdate(g)
        }
        ,
        onComplete: ()=>{
            i(),
            s.onComplete && s.onComplete()
        }
    };
    if (JT(s) || (p = {
        ...p,
        ...GT(e, p)
    }),
    p.duration && (p.duration = fr(p.duration)),
    p.repeatDelay && (p.repeatDelay = fr(p.repeatDelay)),
    !d || !f || KM.current || s.type === !1)
        return zT(p);
    if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const g = BT(t, e, p);
        if (g)
            return g
    }
    return oc(p)
}
;
function ac(e) {
    return !!(ft(e) && e.add)
}
const Zw = e=>/^\-?\d*\.?\d+$/.test(e);
function dg(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function fg(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class hg {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return dg(this.subscriptions, t),
        ()=>fg(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const e5 = e=>!isNaN(parseFloat(e));
class t5 {
    constructor(t, n={}) {
        this.version = "10.16.4",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r,i=!0)=>{
            this.prev = this.current,
            this.current = r;
            const {delta: s, timestamp: o} = Ae;
            this.lastUpdated !== o && (this.timeDelta = s,
            this.lastUpdated = o,
            oe.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = ()=>oe.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r})=>{
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = e5(this.current),
        this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new hg);
        const r = this.events[t].add(n);
        return t === "change" ? ()=>{
            r(),
            oe.read(()=>{
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = t,
        this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? Uw(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n=>{
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then(()=>{
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function ns(e, t) {
    return new t5(e,t)
}
const qw = e=>t=>t.test(e)
  , n5 = {
    test: e=>e === "auto",
    parse: e=>e
}
  , Jw = [di, $, ln, Bn, aM, oM, n5]
  , Ts = e=>Jw.find(qw(e))
  , r5 = [...Jw, Je, vr]
  , i5 = e=>r5.find(qw(e));
function s5(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ns(n))
}
function o5(e, t) {
    const n = Xc(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n ? e.makeTargetAnimatable(n, !1) : {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = wM(s[o]);
        s5(e, o, a)
    }
}
function a5(e, t, n) {
    var r, i;
    const s = Object.keys(t).filter(a=>!e.hasValue(a))
      , o = s.length;
    if (o)
        for (let a = 0; a < o; a++) {
            const l = s[a]
              , c = t[l];
            let u = null;
            Array.isArray(c) && (u = c[0]),
            u === null && (u = (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && i !== void 0 ? i : t[l]),
            u != null && (typeof u == "string" && (Zw(u) || Kw(u)) ? u = parseFloat(u) : !i5(u) && vr.test(c) && (u = Xw(l, c)),
            e.addValue(l, ns(u, {
                owner: e
            })),
            n[l] === void 0 && (n[l] = u),
            u !== null && e.setBaseTarget(l, u))
        }
}
function l5(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function c5(e, t, n) {
    const r = {};
    for (const i in e) {
        const s = l5(i, t);
        if (s !== void 0)
            r[i] = s;
        else {
            const o = n.getValue(i);
            o && (r[i] = o.get())
        }
    }
    return r
}
function u5({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function e_(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s=e.getDefaultTransition(), transitionEnd: o, ...a} = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (s = r);
    const c = []
      , u = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
        const f = e.getValue(d)
          , p = a[d];
        if (!f || p === void 0 || u && u5(u, d))
            continue;
        const g = {
            delay: n,
            elapsed: 0,
            ...s
        };
        if (window.HandoffAppearAnimations && !f.hasAnimated) {
            const S = e.getProps()[YM];
            S && (g.elapsed = window.HandoffAppearAnimations(S, d, f, oe),
            g.syncStart = !0)
        }
        f.start(ug(d, f, p, e.shouldReduceMotion && ui.has(d) ? {
            type: !1
        } : g));
        const v = f.animation;
        ac(l) && (l.add(d),
        v.then(()=>l.remove(d))),
        c.push(v)
    }
    return o && Promise.all(c).then(()=>{
        o && o5(e, o)
    }
    ),
    c
}
function eh(e, t, n={}) {
    const r = Xc(e, t, n.custom);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? ()=>Promise.all(e_(e, r, n)) : ()=>Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (l=0)=>{
        const {delayChildren: c=0, staggerChildren: u, staggerDirection: d} = i;
        return d5(e, t, c + l, u, d, n)
    }
    : ()=>Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [l,c] = a === "beforeChildren" ? [s, o] : [o, s];
        return l().then(()=>c())
    } else
        return Promise.all([s(), o(n.delay)])
}
function d5(e, t, n=0, r=0, i=1, s) {
    const o = []
      , a = (e.variantChildren.size - 1) * r
      , l = i === 1 ? (c=0)=>c * r : (c=0)=>a - c * r;
    return Array.from(e.variantChildren).sort(f5).forEach((c,u)=>{
        c.notify("AnimationStart", t),
        o.push(eh(c, t, {
            ...s,
            delay: n + l(u)
        }).then(()=>c.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function f5(e, t) {
    return e.sortNodePosition(t)
}
function h5(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s=>eh(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = eh(e, t, n);
    else {
        const i = typeof t == "function" ? Xc(e, t, n.custom) : t;
        r = Promise.all(e_(e, i, n))
    }
    return r.then(()=>e.notify("AnimationComplete", t))
}
const p5 = [...Kp].reverse()
  , g5 = Kp.length;
function m5(e) {
    return t=>Promise.all(t.map(({animation: n, options: r})=>h5(e, n, r)))
}
function v5(e) {
    let t = m5(e);
    const n = x5();
    let r = !0;
    const i = (l,c)=>{
        const u = Xc(e, c);
        if (u) {
            const {transition: d, transitionEnd: f, ...p} = u;
            l = {
                ...l,
                ...p,
                ...f
            }
        }
        return l
    }
    ;
    function s(l) {
        t = l(e)
    }
    function o(l, c) {
        const u = e.getProps()
          , d = e.getVariantContext(!0) || {}
          , f = []
          , p = new Set;
        let g = {}
          , v = 1 / 0;
        for (let y = 0; y < g5; y++) {
            const m = p5[y]
              , b = n[m]
              , w = u[m] !== void 0 ? u[m] : d[m]
              , k = Ro(w)
              , P = m === c ? b.isActive : null;
            P === !1 && (v = y);
            let _ = w === d[m] && w !== u[m] && k;
            if (_ && r && e.manuallyAnimateOnMount && (_ = !1),
            b.protectedKeys = {
                ...g
            },
            !b.isActive && P === null || !w && !b.prevProp || Wc(w) || typeof w == "boolean")
                continue;
            const C = y5(b.prevProp, w);
            let j = C || m === c && b.isActive && !_ && k || y > v && k;
            const M = Array.isArray(w) ? w : [w];
            let O = M.reduce(i, {});
            P === !1 && (O = {});
            const {prevResolvedValues: A={}} = b
              , N = {
                ...A,
                ...O
            }
              , B = L=>{
                j = !0,
                p.delete(L),
                b.needsAnimating[L] = !0
            }
            ;
            for (const L in N) {
                const V = O[L]
                  , W = A[L];
                g.hasOwnProperty(L) || (V !== W ? rc(V) && rc(W) ? !ww(V, W) || C ? B(L) : b.protectedKeys[L] = !0 : V !== void 0 ? B(L) : p.add(L) : V !== void 0 && p.has(L) ? B(L) : b.protectedKeys[L] = !0)
            }
            b.prevProp = w,
            b.prevResolvedValues = O,
            b.isActive && (g = {
                ...g,
                ...O
            }),
            r && e.blockInitialAnimation && (j = !1),
            j && !_ && f.push(...M.map(L=>({
                animation: L,
                options: {
                    type: m,
                    ...l
                }
            })))
        }
        if (p.size) {
            const y = {};
            p.forEach(m=>{
                const b = e.getBaseTarget(m);
                b !== void 0 && (y[m] = b)
            }
            ),
            f.push({
                animation: y
            })
        }
        let S = !!f.length;
        return r && u.initial === !1 && !e.manuallyAnimateOnMount && (S = !1),
        r = !1,
        S ? t(f) : Promise.resolve()
    }
    function a(l, c, u) {
        var d;
        if (n[l].isActive === c)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(p=>{
            var g;
            return (g = p.animationState) === null || g === void 0 ? void 0 : g.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        const f = o(u, l);
        for (const p in n)
            n[p].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: ()=>n
    }
}
function y5(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !ww(t, e) : !1
}
function Er(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function x5() {
    return {
        animate: Er(!0),
        whileInView: Er(),
        whileHover: Er(),
        whileTap: Er(),
        whileDrag: Er(),
        whileFocus: Er(),
        exit: Er()
    }
}
class b5 extends wr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = v5(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        Wc(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let S5 = 0;
class w5 extends wr {
    constructor() {
        super(...arguments),
        this.id = S5++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i)
            return;
        const s = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && s.then(()=>n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const _5 = {
    animation: {
        Feature: b5
    },
    exit: {
        Feature: w5
    }
}
  , cv = (e,t)=>Math.abs(e - t);
function k5(e, t) {
    const n = cv(e.x, t.x)
      , r = cv(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class t_ {
    constructor(t, n, {transformPagePoint: r}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.updatePoint = ()=>{
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const c = od(this.lastMoveEventInfo, this.history)
              , u = this.startEvent !== null
              , d = k5(c.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!u && !d)
                return;
            const {point: f} = c
              , {timestamp: p} = Ae;
            this.history.push({
                ...f,
                timestamp: p
            });
            const {onStart: g, onMove: v} = this.handlers;
            u || (g && g(this.lastMoveEvent, c),
            this.startEvent = this.lastMoveEvent),
            v && v(this.lastMoveEvent, c)
        }
        ,
        this.handlePointerMove = (c,u)=>{
            this.lastMoveEvent = c,
            this.lastMoveEventInfo = sd(u, this.transformPagePoint),
            oe.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (c,u)=>{
            if (this.end(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const {onEnd: d, onSessionEnd: f} = this.handlers
              , p = od(c.type === "pointercancel" ? this.lastMoveEventInfo : sd(u, this.transformPagePoint), this.history);
            this.startEvent && d && d(c, p),
            f && f(c, p)
        }
        ,
        !vw(t))
            return;
        this.handlers = n,
        this.transformPagePoint = r;
        const i = Yc(t)
          , s = sd(i, this.transformPagePoint)
          , {point: o} = s
          , {timestamp: a} = Ae;
        this.history = [{
            ...o,
            timestamp: a
        }];
        const {onSessionStart: l} = n;
        l && l(t, od(s, this.history)),
        this.removeListeners = dr(Mn(window, "pointermove", this.handlePointerMove), Mn(window, "pointerup", this.handlePointerUp), Mn(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        Fn(this.updatePoint)
    }
}
function sd(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function uv(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function od({point: e}, t) {
    return {
        point: e,
        delta: uv(e, n_(t)),
        offset: uv(e, C5(t)),
        velocity: P5(t, .1)
    }
}
function C5(e) {
    return e[0]
}
function n_(e) {
    return e[e.length - 1]
}
function P5(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = n_(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > fr(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = Tn(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function Ct(e) {
    return e.max - e.min
}
function th(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function dv(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = ue(t.min, t.max, e.origin),
    e.scale = Ct(n) / Ct(t),
    (th(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = ue(n.min, n.max, e.origin) - e.originPoint,
    (th(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function oo(e, t, n, r) {
    dv(e.x, t.x, n.x, r ? r.originX : void 0),
    dv(e.y, t.y, n.y, r ? r.originY : void 0)
}
function fv(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ct(t)
}
function j5(e, t, n) {
    fv(e.x, t.x, n.x),
    fv(e.y, t.y, n.y)
}
function hv(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ct(t)
}
function ao(e, t, n) {
    hv(e.x, t.x, n.x),
    hv(e.y, t.y, n.y)
}
function E5(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? ue(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ue(n, e, r.max) : Math.min(e, n)),
    e
}
function pv(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function M5(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: pv(e.x, n, i),
        y: pv(e.y, t, r)
    }
}
function gv(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function T5(e, t) {
    return {
        x: gv(e.x, t.x),
        y: gv(e.y, t.y)
    }
}
function O5(e, t) {
    let n = .5;
    const r = Ct(e)
      , i = Ct(t);
    return i > r ? n = Io(t.min, t.max - r, e.min) : r > i && (n = Io(e.min, e.max - i, t.min)),
    mr(0, 1, n)
}
function A5(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const nh = .35;
function L5(e=nh) {
    return e === !1 ? e = 0 : e === !0 && (e = nh),
    {
        x: mv(e, "left", "right"),
        y: mv(e, "top", "bottom")
    }
}
function mv(e, t, n) {
    return {
        min: vv(e, t),
        max: vv(e, n)
    }
}
function vv(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const yv = ()=>({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Ri = ()=>({
    x: yv(),
    y: yv()
})
  , xv = ()=>({
    min: 0,
    max: 0
})
  , we = ()=>({
    x: xv(),
    y: xv()
});
function nn(e) {
    return [e("x"), e("y")]
}
function r_({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function D5({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function R5(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function ad(e) {
    return e === void 0 || e === 1
}
function rh({scale: e, scaleX: t, scaleY: n}) {
    return !ad(e) || !ad(t) || !ad(n)
}
function Fr(e) {
    return rh(e) || i_(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function i_(e) {
    return bv(e.x) || bv(e.y)
}
function bv(e) {
    return e && e !== "0%"
}
function lc(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Sv(e, t, n, r, i) {
    return i !== void 0 && (e = lc(e, i, r)),
    lc(e, n, r) + t
}
function ih(e, t=0, n=1, r, i) {
    e.min = Sv(e.min, t, n, r, i),
    e.max = Sv(e.max, t, n, r, i)
}
function s_(e, {x: t, y: n}) {
    ih(e.x, t.translate, t.scale, t.originPoint),
    ih(e.y, n.translate, n.scale, n.originPoint)
}
function F5(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const l = s.instance;
        l && l.style && l.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Fi(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        s_(e, o)),
        r && Fr(s.latestValues) && Fi(e, s.latestValues))
    }
    t.x = wv(t.x),
    t.y = wv(t.y)
}
function wv(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function Hn(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function _v(e, t, [n,r,i]) {
    const s = t[i] !== void 0 ? t[i] : .5
      , o = ue(e.min, e.max, s);
    ih(e, t[n], t[r], o, t.scale)
}
const I5 = ["x", "scaleX", "originX"]
  , N5 = ["y", "scaleY", "originY"];
function Fi(e, t) {
    _v(e.x, t, I5),
    _v(e.y, t, N5)
}
function o_(e, t) {
    return r_(R5(e.getBoundingClientRect(), t))
}
function V5(e, t, n) {
    const r = o_(e, n)
      , {scroll: i} = t;
    return i && (Hn(r.x, i.offset.x),
    Hn(r.y, i.offset.y)),
    r
}
const B5 = new WeakMap;
class z5 {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = we(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = l=>{
            this.stopAnimation(),
            n && this.snapToCursor(Yc(l, "page").point)
        }
          , s = (l,c)=>{
            const {drag: u, dragPropagation: d, onDragStart: f} = this.getProps();
            if (u && !d && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = xw(u),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            nn(g=>{
                let v = this.getAxisMotionValue(g).get() || 0;
                if (ln.test(v)) {
                    const {projection: S} = this.visualElement;
                    if (S && S.layout) {
                        const y = S.layout.layoutBox[g];
                        y && (v = Ct(y) * (parseFloat(v) / 100))
                    }
                }
                this.originPoint[g] = v
            }
            ),
            f && oe.update(()=>f(l, c), !1, !0);
            const {animationState: p} = this.visualElement;
            p && p.setActive("whileDrag", !0)
        }
          , o = (l,c)=>{
            const {dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: p} = this.getProps();
            if (!u && !this.openGlobalLock)
                return;
            const {offset: g} = c;
            if (d && this.currentDirection === null) {
                this.currentDirection = $5(g),
                this.currentDirection !== null && f && f(this.currentDirection);
                return
            }
            this.updateAxis("x", c.point, g),
            this.updateAxis("y", c.point, g),
            this.visualElement.render(),
            p && p(l, c)
        }
          , a = (l,c)=>this.stop(l, c);
        this.panSession = new t_(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && oe.update(()=>s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Aa(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = E5(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , {layout: r} = this.visualElement.projection || {}
          , i = this.constraints;
        t && Li(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = M5(r.layoutBox, t) : this.constraints = !1,
        this.elastic = L5(n),
        i !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && nn(s=>{
            this.getAxisMotionValue(s) && (this.constraints[s] = A5(r.layoutBox[s], this.constraints[s]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Li(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = V5(r, i.root, this.visualElement.getTransformPagePoint());
        let o = T5(i.layout.layoutBox, s);
        if (n) {
            const a = n(D5(o));
            this.hasMutatedConstraints = !!a,
            a && (o = r_(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , c = nn(u=>{
            if (!Aa(u, n, this.currentDirection))
                return;
            let d = l && l[u] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , p = i ? 40 : 1e7
              , g = {
                type: "inertia",
                velocity: r ? t[u] : 0,
                bounceStiffness: f,
                bounceDamping: p,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(u, g)
        }
        );
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(ug(t, r, 0, n))
    }
    stopAnimation() {
        nn(t=>this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        nn(n=>{
            const {drag: r} = this.getProps();
            if (!Aa(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n];
                s.set(t[n] - ue(o, a, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Li(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        nn(o=>{
            const a = this.getAxisMotionValue(o);
            if (a) {
                const l = a.get();
                i[o] = O5({
                    min: l,
                    max: l
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        nn(o=>{
            if (!Aa(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: c} = this.constraints[o];
            a.set(ue(l, c, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        B5.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Mn(t, "pointerdown", l=>{
            const {drag: c, dragListener: u=!0} = this.getProps();
            c && u && this.start(l)
        }
        )
          , r = ()=>{
            const {dragConstraints: l} = this.getProps();
            Li(l) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const o = Pn(window, "resize", ()=>this.scalePositionWithinConstraints())
          , a = i.addEventListener("didUpdate", ({delta: l, hasLayoutChanged: c})=>{
            this.isDragging && c && (nn(u=>{
                const d = this.getAxisMotionValue(u);
                d && (this.originPoint[u] += l[u].translate,
                d.set(d.get() + l[u].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return ()=>{
            o(),
            n(),
            s(),
            a && a()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=nh, dragMomentum: a=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: a
        }
    }
}
function Aa(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function $5(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class H5 extends wr {
    constructor(t) {
        super(t),
        this.removeGroupControls = me,
        this.removeListeners = me,
        this.controls = new z5(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || me
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const kv = e=>(t,n)=>{
    e && oe.update(()=>e(t, n))
}
;
class W5 extends wr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = me
    }
    onPointerDown(t) {
        this.session = new t_(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint()
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: kv(t),
            onStart: kv(n),
            onMove: r,
            onEnd: (s,o)=>{
                delete this.session,
                i && oe.update(()=>i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Mn(this.node.current, "pointerdown", t=>this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function U5() {
    const e = x.useContext(Xp);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = x.useId();
    return x.useEffect(()=>r(i), []),
    !t && n ? [!1, ()=>n && n(i)] : [!0]
}
const xl = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Cv(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Os = {
    correct: (e,t)=>{
        if (!t.target)
            return e;
        if (typeof e == "string")
            if ($.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Cv(e, t.target.x)
          , r = Cv(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , G5 = {
    correct: (e,{treeScale: t, projectionDelta: n})=>{
        const r = e
          , i = vr.parse(e);
        if (i.length > 5)
            return r;
        const s = vr.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const c = ue(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
    }
};
class Y5 extends de.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        JE(X5),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", ()=>{
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: ()=>this.safeToRemove()
        })),
        xl.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || oe.postRender(()=>{
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        queueMicrotask(()=>{
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function a_(e) {
    const [t,n] = U5()
      , r = x.useContext(nw);
    return de.createElement(Y5, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: x.useContext(rw),
        isPresent: t,
        safeToRemove: n
    })
}
const X5 = {
    borderRadius: {
        ...Os,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Os,
    borderTopRightRadius: Os,
    borderBottomLeftRadius: Os,
    borderBottomRightRadius: Os,
    boxShadow: G5
}
  , l_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , K5 = l_.length
  , Pv = e=>typeof e == "string" ? parseFloat(e) : e
  , jv = e=>typeof e == "number" || $.test(e);
function Q5(e, t, n, r, i, s) {
    i ? (e.opacity = ue(0, n.opacity !== void 0 ? n.opacity : 1, Z5(r)),
    e.opacityExit = ue(t.opacity !== void 0 ? t.opacity : 1, 0, q5(r))) : s && (e.opacity = ue(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < K5; o++) {
        const a = `border${l_[o]}Radius`;
        let l = Ev(t, a)
          , c = Ev(n, a);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || jv(l) === jv(c) ? (e[a] = Math.max(ue(Pv(l), Pv(c), r), 0),
        (ln.test(c) || ln.test(l)) && (e[a] += "%")) : e[a] = c
    }
    (t.rotate || n.rotate) && (e.rotate = ue(t.rotate || 0, n.rotate || 0, r))
}
function Ev(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Z5 = c_(0, .5, og)
  , q5 = c_(.5, .95, me);
function c_(e, t, n) {
    return r=>r < e ? 0 : r > t ? 1 : n(Io(e, t, r))
}
function Mv(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Tt(e, t) {
    Mv(e.x, t.x),
    Mv(e.y, t.y)
}
function Tv(e, t, n, r, i) {
    return e -= t,
    e = lc(e, 1 / n, r),
    i !== void 0 && (e = lc(e, 1 / i, r)),
    e
}
function J5(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (ln.test(t) && (t = parseFloat(t),
    t = ue(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = ue(s.min, s.max, r);
    e === s && (a -= t),
    e.min = Tv(e.min, t, n, a, i),
    e.max = Tv(e.max, t, n, a, i)
}
function Ov(e, t, [n,r,i], s, o) {
    J5(e, t[n], t[r], t[i], t.scale, s, o)
}
const eO = ["x", "scaleX", "originX"]
  , tO = ["y", "scaleY", "originY"];
function Av(e, t, n, r) {
    Ov(e.x, t, eO, n ? n.x : void 0, r ? r.x : void 0),
    Ov(e.y, t, tO, n ? n.y : void 0, r ? r.y : void 0)
}
function Lv(e) {
    return e.translate === 0 && e.scale === 1
}
function u_(e) {
    return Lv(e.x) && Lv(e.y)
}
function nO(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function d_(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function Dv(e) {
    return Ct(e.x) / Ct(e.y)
}
class rO {
    constructor() {
        this.members = []
    }
    add(t) {
        dg(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (fg(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i=>t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t=>{
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t=>{
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function Rv(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y;
    if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {rotate: l, rotateX: c, rotateY: u} = n;
        l && (r += `rotate(${l}deg) `),
        c && (r += `rotateX(${c}deg) `),
        u && (r += `rotateY(${u}deg) `)
    }
    const o = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`),
    r || "none"
}
const iO = (e,t)=>e.depth - t.depth;
class sO {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        dg(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        fg(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(iO),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function oO(e, t) {
    const n = performance.now()
      , r = ({timestamp: i})=>{
        const s = i - n;
        s >= t && (Fn(r),
        e(s - t))
    }
    ;
    return oe.read(r, !0),
    ()=>Fn(r)
}
function aO(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function lO(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function cO(e, t, n) {
    const r = ft(e) ? e : ns(e);
    return r.start(ug("", r, t, n)),
    r.animation
}
const Fv = ["", "X", "Y", "Z"]
  , Iv = 1e3;
let uO = 0;
const Ir = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function f_({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = uO++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.checkUpdateFailed = ()=>{
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = ()=>{
                Ir.totalNodes = Ir.resolvedTargetDeltas = Ir.recalculatedProjection = 0,
                this.nodes.forEach(hO),
                this.nodes.forEach(yO),
                this.nodes.forEach(xO),
                this.nodes.forEach(pO),
                aO(Ir)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = a ? a.root || a : this,
            this.path = a ? [...a.path, a] : [],
            this.parent = a,
            this.depth = a ? a.depth + 1 : 0;
            for (let l = 0; l < this.path.length; l++)
                this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new sO)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new hg),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, a=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = lO(o),
            this.instance = o;
            const {layoutId: l, layout: c, visualElement: u} = this.options;
            if (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            a && (c || l) && (this.isLayoutDirty = !0),
            e) {
                let d;
                const f = ()=>this.root.updateBlockedByResize = !1;
                e(o, ()=>{
                    this.root.updateBlockedByResize = !0,
                    d && d(),
                    d = oO(f, 250),
                    xl.hasAnimatedSinceResize && (xl.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Vv))
                }
                )
            }
            l && this.root.registerSharedNode(l, this),
            this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: g})=>{
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const v = this.options.transition || u.getDefaultTransition() || kO
                  , {onLayoutAnimationStart: S, onLayoutAnimationComplete: y} = u.getProps()
                  , m = !this.targetLayout || !d_(this.targetLayout, g) || p
                  , b = !f && p;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || b || f && (m || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(d, b);
                    const w = {
                        ...Qw(v, "layout"),
                        onPlay: S,
                        onComplete: y
                    };
                    (u.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    f || Vv(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = g
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            Fn(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(bO),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const d = this.path[u];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: a, layout: l} = this.options;
            if (a === void 0 && !l)
                return;
            const c = this.getTransformTemplate();
            this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(Nv);
                return
            }
            this.isUpdating || this.nodes.forEach(mO),
            this.isUpdating = !1,
            this.nodes.forEach(vO),
            this.nodes.forEach(dO),
            this.nodes.forEach(fO),
            this.clearAllSnapshots();
            const a = performance.now();
            Ae.delta = mr(0, 1e3 / 60, a - Ae.timestamp),
            Ae.timestamp = a,
            Ae.isProcessing = !0,
            Zu.update.process(Ae),
            Zu.preRender.process(Ae),
            Zu.render.process(Ae),
            Ae.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask(()=>this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(gO),
            this.sharedNodes.forEach(SO)
        }
        scheduleUpdateProjection() {
            oe.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount() {
            oe.postRender(()=>{
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++)
                    this.path[l].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = we(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform
              , a = this.projectionDelta && !u_(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , u = c !== this.prevTransformTemplateValue;
            o && (a || Fr(this.latestValues) || u) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            CO(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: o} = this.options;
            if (!o)
                return we();
            const a = o.measureViewportBox()
              , {scroll: l} = this.root;
            return l && (Hn(a.x, l.offset.x),
            Hn(a.y, l.offset.y)),
            a
        }
        removeElementScroll(o) {
            const a = we();
            Tt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l]
                  , {scroll: u, options: d} = c;
                if (c !== this.root && u && d.layoutScroll) {
                    if (u.isRoot) {
                        Tt(a, o);
                        const {scroll: f} = this.root;
                        f && (Hn(a.x, -f.offset.x),
                        Hn(a.y, -f.offset.y))
                    }
                    Hn(a.x, u.offset.x),
                    Hn(a.y, u.offset.y)
                }
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = we();
            Tt(l, o);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && Fi(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                Fr(u.latestValues) && Fi(l, u.latestValues)
            }
            return Fr(this.latestValues) && Fi(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = we();
            Tt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !Fr(c.latestValues))
                    continue;
                rh(c.latestValues) && c.updateSnapshot();
                const u = we()
                  , d = c.measurePageBox();
                Tt(u, d),
                Av(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return Fr(this.latestValues) && Av(a, this.latestValues),
            a
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var a;
            const l = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
            const c = !!this.resumingFrom || this !== l;
            if (!(o || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: d, layoutId: f} = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = Ae.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const p = this.getClosestProjectingParent();
                    p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = we(),
                    this.relativeTargetOrigin = we(),
                    ao(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox),
                    Tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = we(),
                    this.targetWithTransforms = we()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    j5(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Tt(this.target, this.layout.layoutBox),
                    s_(this.target, this.targetDelta)) : Tt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const p = this.getClosestProjectingParent();
                        p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = we(),
                        this.relativeTargetOrigin = we(),
                        ao(this.relativeTargetOrigin, this.target, p.target),
                        Tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Ir.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || rh(this.parent.latestValues) || i_(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const a = this.getLead()
              , l = !!this.resumingFrom || this !== a;
            let c = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (c = !1),
            l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1),
            this.resolvedRelativeTargetAt === Ae.timestamp && (c = !1),
            c)
                return;
            const {layout: u, layoutId: d} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || d))
                return;
            Tt(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , p = this.treeScale.y;
            F5(this.layoutCorrected, this.treeScale, this.path, l),
            a.layout && !a.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (a.target = a.layout.layoutBox);
            const {target: g} = a;
            if (!g) {
                this.projectionTransform && (this.projectionDelta = Ri(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = Ri(),
            this.projectionDeltaWithTransform = Ri());
            const v = this.projectionTransform;
            oo(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
            this.projectionTransform = Rv(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== v || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", g)),
            Ir.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            o) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , c = l ? l.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , d = Ri();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const f = we()
              , p = l ? l.source : void 0
              , g = this.layout ? this.layout.source : void 0
              , v = p !== g
              , S = this.getStack()
              , y = !S || S.members.length <= 1
              , m = !!(v && !y && this.options.crossfade === !0 && !this.path.some(_O));
            this.animationProgress = 0;
            let b;
            this.mixTargetDelta = w=>{
                const k = w / 1e3;
                Bv(d.x, o.x, k),
                Bv(d.y, o.y, k),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ao(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                wO(this.relativeTarget, this.relativeTargetOrigin, f, k),
                b && nO(this.relativeTarget, b) && (this.isProjectionDirty = !1),
                b || (b = we()),
                Tt(b, this.relativeTarget)),
                v && (this.animationValues = u,
                Q5(u, c, this.latestValues, k, m, y)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = k
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (Fn(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = oe.update(()=>{
                xl.hasAnimatedSinceResize = !0,
                this.currentAnimation = cO(0, Iv, {
                    ...o,
                    onUpdate: a=>{
                        this.mixTargetDelta(a),
                        o.onUpdate && o.onUpdate(a)
                    }
                    ,
                    onComplete: ()=>{
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Iv),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: c, latestValues: u} = o;
            if (!(!a || !l || !c)) {
                if (this !== o && this.layout && c && h_(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || we();
                    const d = Ct(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = Ct(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + f
                }
                Tt(a, l),
                Fi(a, u),
                oo(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new rO),
            this.sharedNodes.get(o).add(a);
            const c = a.options.initialPromotionConfig;
            a.promote({
                transition: c ? c.transition : void 0,
                preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(a) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: a} = this.options;
            return a ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: a, preserveFollowOpacity: l}={}) {
            const c = this.getStack();
            c && c.promote(this, l),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            a && this.setOptions({
                transition: a
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0),
            !a)
                return;
            const c = {};
            for (let u = 0; u < Fv.length; u++) {
                const d = "rotate" + Fv[u];
                l[d] && (c[d] = l[d],
                o.setStaticValue(d, 0))
            }
            o.render();
            for (const u in c)
                o.setStaticValue(u, c[u]);
            o.scheduleRender()
        }
        getProjectionStyles(o={}) {
            var a, l;
            const c = {};
            if (!this.instance || this.isSVG)
                return c;
            if (this.isVisible)
                c.visibility = "";
            else
                return {
                    visibility: "hidden"
                };
            const u = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                c.opacity = "",
                c.pointerEvents = yl(o.pointerEvents) || "",
                c.transform = u ? u(this.latestValues, "") : "none",
                c;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const v = {};
                return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                v.pointerEvents = yl(o.pointerEvents) || ""),
                this.hasProjected && !Fr(this.latestValues) && (v.transform = u ? u({}, "") : "none",
                this.hasProjected = !1),
                v
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
            c.transform = Rv(this.projectionDeltaWithTransform, this.treeScale, f),
            u && (c.transform = u(f, c.transform));
            const {x: p, y: g} = this.projectionDelta;
            c.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`,
            d.animationValues ? c.opacity = d === this ? (l = (a = f.opacity) !== null && a !== void 0 ? a : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const v in tc) {
                if (f[v] === void 0)
                    continue;
                const {correct: S, applyTo: y} = tc[v]
                  , m = c.transform === "none" ? f[v] : S(f[v], d);
                if (y) {
                    const b = y.length;
                    for (let w = 0; w < b; w++)
                        c[y[w]] = m
                } else
                    c[v] = m
            }
            return this.options.layoutId && (c.pointerEvents = d === this ? yl(o.pointerEvents) || "" : "none"),
            c
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o=>{
                var a;
                return (a = o.currentAnimation) === null || a === void 0 ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Nv),
            this.root.sharedNodes.clear()
        }
    }
}
function dO(e) {
    e.updateLayout()
}
function fO(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? nn(d=>{
            const f = o ? n.measuredBox[d] : n.layoutBox[d]
              , p = Ct(f);
            f.min = r[d].min,
            f.max = f.min + p
        }
        ) : h_(s, n.layoutBox, r) && nn(d=>{
            const f = o ? n.measuredBox[d] : n.layoutBox[d]
              , p = Ct(r[d]);
            f.max = f.min + p,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + p)
        }
        );
        const a = Ri();
        oo(a, r, n.layoutBox);
        const l = Ri();
        o ? oo(l, e.applyTransform(i, !0), n.measuredBox) : oo(l, r, n.layoutBox);
        const c = !u_(a);
        let u = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: p} = d;
                if (f && p) {
                    const g = we();
                    ao(g, n.layoutBox, f.layoutBox);
                    const v = we();
                    ao(v, r, p.layoutBox),
                    d_(g, v) || (u = !0),
                    d.options.layoutRoot && (e.relativeTarget = v,
                    e.relativeTargetOrigin = g,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: u
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function hO(e) {
    Ir.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function pO(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function gO(e) {
    e.clearSnapshot()
}
function Nv(e) {
    e.clearMeasurements()
}
function mO(e) {
    e.isLayoutDirty = !1
}
function vO(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Vv(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function yO(e) {
    e.resolveTargetDelta()
}
function xO(e) {
    e.calcProjection()
}
function bO(e) {
    e.resetRotation()
}
function SO(e) {
    e.removeLeadSnapshot()
}
function Bv(e, t, n) {
    e.translate = ue(t.translate, 0, n),
    e.scale = ue(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function zv(e, t, n, r) {
    e.min = ue(t.min, n.min, r),
    e.max = ue(t.max, n.max, r)
}
function wO(e, t, n, r) {
    zv(e.x, t.x, n.x, r),
    zv(e.y, t.y, n.y, r)
}
function _O(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const kO = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , $v = e=>typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
  , Hv = $v("applewebkit/") && !$v("chrome/") ? Math.round : me;
function Wv(e) {
    e.min = Hv(e.min),
    e.max = Hv(e.max)
}
function CO(e) {
    Wv(e.x),
    Wv(e.y)
}
function h_(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !th(Dv(t), Dv(n), .2)
}
const PO = f_({
    attachResizeListener: (e,t)=>Pn(e, "resize", t),
    measureScroll: ()=>({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: ()=>!0
})
  , ld = {
    current: void 0
}
  , p_ = f_({
    measureScroll: e=>({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: ()=>{
        if (!ld.current) {
            const e = new PO({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            ld.current = e
        }
        return ld.current
    }
    ,
    resetTransform: (e,t)=>{
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e=>window.getComputedStyle(e).position === "fixed"
})
  , jO = {
    pan: {
        Feature: W5
    },
    drag: {
        Feature: H5,
        ProjectionNode: p_,
        MeasureLayout: a_
    }
}
  , EO = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function MO(e) {
    const t = EO.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function sh(e, t, n=1) {
    const [r,i] = MO(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return Zw(o) ? parseFloat(o) : o
    } else
        return Xf(i) ? sh(i, t, n + 1) : i
}
function TO(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(i=>{
        const s = i.get();
        if (!Xf(s))
            return;
        const o = sh(s, r);
        o && i.set(o)
    }
    );
    for (const i in t) {
        const s = t[i];
        if (!Xf(s))
            continue;
        const o = sh(s, r);
        o && (t[i] = o,
        n || (n = {}),
        n[i] === void 0 && (n[i] = s))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const OO = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , g_ = e=>OO.has(e)
  , AO = e=>Object.keys(e).some(g_)
  , Uv = e=>e === di || e === $
  , Gv = (e,t)=>parseFloat(e.split(", ")[t])
  , Yv = (e,t)=>(n,{transform: r})=>{
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
        return Gv(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? Gv(s[1], e) : 0
    }
}
  , LO = new Set(["x", "y", "z"])
  , DO = ea.filter(e=>!LO.has(e));
function RO(e) {
    const t = [];
    return DO.forEach(n=>{
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
const rs = {
    width: ({x: e},{paddingLeft: t="0", paddingRight: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e},{paddingTop: t="0", paddingBottom: n="0"})=>e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e,{top: t})=>parseFloat(t),
    left: (e,{left: t})=>parseFloat(t),
    bottom: ({y: e},{top: t})=>parseFloat(t) + (e.max - e.min),
    right: ({x: e},{left: t})=>parseFloat(t) + (e.max - e.min),
    x: Yv(4, 13),
    y: Yv(5, 14)
};
rs.translateX = rs.x;
rs.translateY = rs.y;
const FO = (e,t,n)=>{
    const r = t.measureViewportBox()
      , i = t.current
      , s = getComputedStyle(i)
      , {display: o} = s
      , a = {};
    o === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(c=>{
        a[c] = rs[c](r, s)
    }
    ),
    t.render();
    const l = t.measureViewportBox();
    return n.forEach(c=>{
        const u = t.getValue(c);
        u && u.jump(a[c]),
        e[c] = rs[c](l, s)
    }
    ),
    e
}
  , IO = (e,t,n={},r={})=>{
    t = {
        ...t
    },
    r = {
        ...r
    };
    const i = Object.keys(t).filter(g_);
    let s = []
      , o = !1;
    const a = [];
    if (i.forEach(l=>{
        const c = e.getValue(l);
        if (!e.hasValue(l))
            return;
        let u = n[l]
          , d = Ts(u);
        const f = t[l];
        let p;
        if (rc(f)) {
            const g = f.length
              , v = f[0] === null ? 1 : 0;
            u = f[v],
            d = Ts(u);
            for (let S = v; S < g && f[S] !== null; S++)
                p ? sg(Ts(f[S]) === p) : p = Ts(f[S])
        } else
            p = Ts(f);
        if (d !== p)
            if (Uv(d) && Uv(p)) {
                const g = c.get();
                typeof g == "string" && c.set(parseFloat(g)),
                typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === $ && (t[l] = f.map(parseFloat))
            } else
                d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (o || (s = RO(e),
                o = !0),
                a.push(l),
                r[l] = r[l] !== void 0 ? r[l] : t[l],
                c.jump(f))
    }
    ),
    a.length) {
        const l = a.indexOf("height") >= 0 ? window.pageYOffset : null
          , c = FO(t, e, a);
        return s.length && s.forEach(([u,d])=>{
            e.getValue(u).set(d)
        }
        ),
        e.render(),
        Hc && l !== null && window.scrollTo({
            top: l
        }),
        {
            target: c,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function NO(e, t, n, r) {
    return AO(t) ? IO(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const VO = (e,t,n,r)=>{
    const i = TO(e, t, r);
    return t = i.target,
    r = i.transitionEnd,
    NO(e, t, n, r)
}
  , oh = {
    current: null
}
  , m_ = {
    current: !1
};
function BO() {
    if (m_.current = !0,
    !!Hc)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = ()=>oh.current = e.matches;
            e.addListener(t),
            t()
        } else
            oh.current = !1
}
function zO(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const s = t[i]
          , o = n[i];
        if (ft(s))
            e.addValue(i, s),
            ac(r) && r.add(i);
        else if (ft(o))
            e.addValue(i, ns(s, {
                owner: e
            })),
            ac(r) && r.remove(i);
        else if (o !== s)
            if (e.hasValue(i)) {
                const a = e.getValue(i);
                !a.hasAnimated && a.set(s)
            } else {
                const a = e.getStaticValue(i);
                e.addValue(i, ns(a !== void 0 ? a : s, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const Xv = new WeakMap
  , v_ = Object.keys(Fo)
  , $O = v_.length
  , Kv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , HO = Qp.length;
class WO {
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues),
        this.render = ()=>{
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = ()=>oe.render(this.render, !1, !0);
        const {latestValues: a, renderState: l} = s;
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = l,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.isControllingVariants = Uc(n),
        this.isVariantNode = tw(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: c, ...u} = this.scrapeMotionValuesFromProps(n, {});
        for (const d in u) {
            const f = u[d];
            a[d] !== void 0 && ft(f) && (f.set(a[d], !1),
            ac(c) && c.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
        Xv.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n,r)=>this.bindToMotionValue(r, n)),
        m_.current || BO(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : oh.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Xv.delete(this.current),
        this.projection && this.projection.unmount(),
        Fn(this.notifyUpdate),
        Fn(this.render),
        this.valueSubscriptions.forEach(t=>t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = ui.has(t)
          , i = n.on("change", o=>{
            this.latestValues[t] = o,
            this.props.onUpdate && oe.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, ()=>{
            i(),
            s()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, i, s) {
        let o, a;
        for (let l = 0; l < $O; l++) {
            const c = v_[l]
              , {isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p} = Fo[c];
            f && (o = f),
            u(n) && (!this.features[c] && d && (this.features[c] = new d(this)),
            p && (a = p))
        }
        if (!this.projection && o) {
            this.projection = new o(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p} = n;
            this.projection.setOptions({
                layoutId: l,
                layout: c,
                alwaysMeasureLayout: !!u || d && Li(d),
                visualElement: this,
                scheduleRender: ()=>this.scheduleRender(),
                animationType: typeof c == "string" ? c : "both",
                initialPromotionConfig: s,
                layoutScroll: f,
                layoutRoot: p
            })
        }
        return a
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : we()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n=!0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Kv.length; r++) {
            const i = Kv[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = zO(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < HO; r++) {
            const i = Qp[r]
              , s = this.props[i];
            (Ro(s) || s === !1) && (n[i] = s)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            ()=>n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = ns(n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props
          , i = typeof r == "string" || typeof r == "object" ? (n = ig(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !ft(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new hg),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class y_ extends WO {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: i}, s) {
        let o = c5(r, t || {}, this);
        if (i && (n && (n = i(n)),
        r && (r = i(r)),
        o && (o = i(o))),
        s) {
            a5(this, r, o);
            const a = VO(this, r, o, n);
            n = a.transitionEnd,
            r = a.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function UO(e) {
    return window.getComputedStyle(e)
}
class GO extends y_ {
    readValueFromInstance(t, n) {
        if (ui.has(n)) {
            const r = cg(n);
            return r && r.default || 0
        } else {
            const r = UO(t)
              , i = (ow(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return o_(t, n)
    }
    build(t, n, r, i) {
        qp(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return rg(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        ft(t) && (this.childSubscription = t.on("change", n=>{
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, i) {
        fw(t, n, r, i)
    }
}
class YO extends y_ {
    constructor() {
        super(...arguments),
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (ui.has(n)) {
            const r = cg(n);
            return r && r.default || 0
        }
        return n = hw.has(n) ? n : ng(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return we()
    }
    scrapeMotionValuesFromProps(t, n) {
        return gw(t, n)
    }
    build(t, n, r, i) {
        eg(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        pw(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = tg(t.tagName),
        super.mount(t)
    }
}
const XO = (e,t)=>Zp(e) ? new YO(t,{
    enableHardwareAcceleration: !1
}) : new GO(t,{
    enableHardwareAcceleration: !0
})
  , KO = {
    layout: {
        ProjectionNode: p_,
        MeasureLayout: a_
    }
}
  , QO = {
    ..._5,
    ...HM,
    ...jO,
    ...KO
}
  , De = ZE((e,t)=>TM(e, t, QO, XO))
  , ZO = "/assets/advertLogo-1b9d6db7.svg"
  , qO = ()=>h.jsx("article", {
    className: "advert-button",
    children: h.jsxs("div", {
        className: "advert-button__content",
        children: [h.jsx("img", {
            src: ZO,
            alt: "Logo"
        }), h.jsx("h4", {
            children: "Sell Your Energy"
        }), h.jsx("h5", {
            children: "Earn up to $250/week "
        }), h.jsx(De.button, {
            className: "btn-primary",
            whileHover: {
                scale: 1
            },
            whileTap: {
                scale: 1
            },
            children: "Learn More"
        })]
    })
})
  , x_ = ({isActiveSidebar: e, hendleCloseSidebar: t})=>h.jsxs("aside", {
    className: `sidebar ${e ? "active" : ""}`,
    children: [h.jsxs("div", {
        className: "logo",
        children: [h.jsxs(ec, {
            to: "/",
            children: [h.jsx(ZS, {
                className: "svg-logo"
            }), h.jsx("h1", {
                children: "HUB"
            })]
        }), h.jsx("div", {
            className: "logo__shadow"
        })]
    }), h.jsx(qS, {
        hendleCloseSidebar: t
    }), h.jsx(zE, {}), h.jsx(qO, {})]
});
x_.propTypes = {
    hendleCloseSidebar: Do.func.isRequired,
    isActiveSidebar: Do.bool.isRequired
};
const JO = "/assets/search-82dde56a.svg"
  , eA = "/assets/info-outline-f1593c37.svg"
  , tA = "/assets/moon-theme-eb5e0873.svg"
  , nA = "/assets/notifications-none-daf116d6.svg"
  , rA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAYAAACoYAD2AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2oSURBVHgBnVhZbFxn2X7mzHZm92zxvidOXEiatmmiX2lDIC2orX6aSPz6b9pChUBqAhISF1W5YSsqcEdBRXBBIRSQkEqbFLpQ6jRpQ4qzOE7iNN7ixPbYnvF4PPt2ZubwfGd8nPHEadN+8vGZs33f8z3v/hoCgYCKTzFcLhf27duHnTt3YsuWLfB4PGhtbYWqqjAYDJidnUUoFNLOg4ODOH36NObm5vBphuGTgBTA9u/fr4HbtWvX6n0B7PixY4hFF7H7/vuxobGZM994VqlUtPPZs2fx6quv4siRI/gk47ZBPv744zh06JAGVPuQbJVKJcyRrd++8EucOH4cBgIhGtx1993o6dmIfV/6Ijq6N+La1CTu+OxW7RsxBMMvvPDCbYP9WJAtLS149tlnNbHq4MTIZjL46Y9/iBNksKxW4Ha6kM9lIFsssNlkmMwm2CxmPPjIl+HzBfE/e/fC5fasmVuI/8knn/xYNTDa7fYf3Orho48+iueffx7d3d0aOF3fxDhJ5v78x8NYXIwg6HKg2eeB1chnBFzI5ZBKpzEXiWJ2+jrGx64QqB/dGzetfq+qBrgJ+sCB/SgUFFy4MIxPDPLgwYN4+umnIcvy6sSSJGlAj7z8Mn7yo+8jshSF3+2CqpQQXorBoBRQyudRKRWhUhUayOhyMgmr1UZUZdy35wtrNirOVquM3bt3a7+Fca03TLcC+NRTT63sWF1lUR+vH30F0dgy71XQIFvw8F392La1H81NTTA7nbBQ5JHFKGQJeGvgBN66MIbF+RDyxQJBWVcAiv8VsXVt/oMHD4nVNF39WJCPPfaYBvCGWNTVXevXi2RN3C2VK9i4wYuH992Hxs4uyB4fjA639m5rr4JSNgGX3Yoz49cp9hkMvPF3PHzg//hc0ixeklZcAGcTyxw69C3NqOoNSqq9EEYiLLgWUK0L0YfdbtOu927uwEO7tsLhdsJI9gxUBwPFirKyMrsRbr8P2/u6kM3ncHrwAw2YkED1rG1fO/ipNuczzzyj4bglyBdffHHVxegA9VEr8kQiAbvFhN1cvCkYhIlghMFAbKakrB6CbrF4f08nvzeivaMH5XJZY04cBoOqiVycVe1dYUxuPPfcc+uDFJas70AHIwxFZ7Uqnurrza1tsJtMGiOT07N4+70PMDx0EcvhBSiFIuKRCM6fPovjA+/i6sRVtDQGYTRKUJTiTVK6sd6N63vvvRdPPPHEzSCFsdQCrJ1Iv1dlAfj8vgfhls0IR5cQiixBoUW/d+xdDBw9glIxh6nhM/j3m69DSScRC0c1a6/QaLp6e+uArdV5fQM6Hl2qks6iiLu1L9WK2Wg0rrlnyqdhMRmxubsdHtlEfSvinju3wu1xw8gpWwmm7447eF9BS7OPRxBepw29Qd8NdjSpSJoRrbeuEPuBAweq6+kgb6V/4rfOoH5/c18fPDYLGmgwe7+wD1bZjgqN5drYGNSiwgW82PflR+kzC5C4Qjy6gLt7u9DW0rQCCmv8pc6oPr+uViJHOHz4MCShhzt27Fizi3qRi1Fr4W5mPFZOlM3QcRdLBGlDZHoai9EY7+WQSSSRmgvR2o0EL4y9hI2tLbC6vHV8qSvHWmJqdVOI3CR+6JGk/sXandY+a+rdDGeDR/OXs9emmP1EMHR5HP88ewHHhi8zTLrwyEMPojgxiubODqQZ01WZTtzu0pgUBndj7rWi1rEIUsQ7DzzwQBXkR1FfuzP9HYvNhq27P4/o+ZMIhedwYmCSRpRA0OZAb2snrXsBr/ztNRSMKvY/eD9iqQyMwQ5IFuvK3FqytCJ69SYp1q4rpGwSBlP7Qi0Y/Xe9Yovrvf/7FfzsnTfIqBd2owl7+ragvasNfffsRHF5GRUlhwsTDIfJDM6OjOGhpw5orFWn0s8qdCarDl5as4YY/f39kGpBrge23kXoE7VRjCWHF+euzqCpvRldjD4qjWdxagLJzDK8zX6kef2v/wwhJsnY8pltt1ijCraeGH1oOtnc3KxdCB2ofaH+WlcBHbjZbMZXHv86fvL976FstqFIJ15gJIoPn8eWboo8n8HJkXHE0hl852vfZoQ0opoT1xplhesYVpmtTQf1syBRWk/E9TuqzyX18QAz79aAH5euXsM7F8eRY+gLej1kMoO/vH0Cs9E4du64F3vo/KvRa3ViTRer96SbiKhlWxwm8aLwg/VZT61+1BuSzujJt/+JTpuEq2Tx2nwUMbqeJo9LBDjEc0X0NAZwl9uKiX+/h02792hirSYWOhjDqqh1gmuB6iClmZmZdVnUX65UymtY1Z8tseh649e/IigndrX50WA1okifuRhPaX7xS9u34Fv/z9Ih4MXQB+/zmbIyh7oq2tpl66WmD1FamNJM8+sf6NdVX7U2bBVZGoTGx/H73/0O2xhx8g4TtvX1oLMpgDKDot/XgHYmFN09XfA2NiGdWIZPtWP45CDu3LkdFodjzVrr+egqOVU/KfJL0+joqFY317JUO7Qd85yZX8DY0BDyI8NQLk0hl02joa8bmfwSHF4XOtuqGZQoN/yNG+AhQKvDCTlTxFTagOzgEAzz05hr9KMcbETrpk2sXRw3lRP16qWBFHWFiN31D7WYrSjITU1h+Did9tQs4mTliz0tkFua0cC0bGQxgV3drVBMRa3Qsjntmm7JNjurRQvTNgXzRROmKf5OtwNO+lMT88y//fkVtDFMOrvbsHnXDpg3NK4ravH7zJkzMA0MDNzkF0uFAhIXRhAaPA2VCcKbcwsIsJiKBz0IqUz9qX9pVojlTBaZZAndn22DlQWZi469XKkah9FsRXwyjOmiAWPzcXjoN68QtDmZR6ipAfM0rPT5S7DmUnC6fHD39xF0N+qH6H6YUqmUVqXp4XGJ7uT1vx9Bb6oImTs3+D2o5KmfVgNcDpYNqTxsrPBMLKiisSSuJ6LABHDf174OM+ts4RRMFhn50AKbAsOYYIZkMVmorxWYK0b60ix8shPLuTzSS1nkSpx74jpiswvIbbqOHZ/bsyp2waIwHM3PCDbFGBk8g8O/+QPmGMqcZCLHRJVKhsxyiuEtxeKfuy8ygeVnsVgKLmMBY4U8UgQuexph3dABuakHZh9Vggmxk+4nE7oGU3aJ5e8ykokUdTmPEhOOGH+n6E+j2SyUcgkmxo6h8x/i1JE3V0UtWjJiaPnk0aNH8c1vfgMvvcybZNBC0QV6WxCIJ2FvD2JTkw8BOm1GN2wrVuBva8aouYSpiBOdfhvZKZApMsL80WJVtZA8wLKB3MFisGKSTYI+GlkHE1mT2Yg8k2aXtIy4bMDmpiCamDSnbVSPi1GMXZlAz2wIrJJWQWrNgSLZmRj9EPf3tbMEpYITyO6mRhiECPjy1Yk5eJkbtslGtNBt+snuZU7UbvOilfr3maIKK3duYUZuqJZ9ZCmL7cyC0kqZ4AJ0+iZsYgYssww28puxC5NooFoEXBa4F5fhYio3Q1uQWeBtcFnx6z/+CVeuXKm6KV1B3z/1H0gXJ/G5DRuQY9oVL2VRzhVQpL/ysCxIMpoIIGYWVAbG4RLBSCzGFKMZ/oAPTlqt8KHapHze3dIGmTrrYgkhUZxpGk2FsVpldHMy7heKeZbBJiQofhHxZliklacWsJcGGT89tMriGpBi/Gr4HMys9IJ0JWPhJah2CxIsb5h/I2cxMiOxM+MNoMAizEiDSLKFIpHVuJLAdPg6s/DyDRfCZkCReWRZUiEqpIzYADeo0jWZ+I2ZTYUK10nRCCtUg5GZBc7vQMpQwHdfemmNha/pYESoxL849T62bt2OD6k3mbSCwSmWA+zrFEsFBObCWDAy7LllnOW7ToI3stbpsrJkFQ0D0ZHgX5GsWpPLYBGE5QoZZOvlKiXTTp3NMY0rp2wYpFdx0uCCaRlFJiZJ6mW5IuHnr72JUDJxa5BivDV1FXMWGxzcZd8mRqJ0Ci2yAxFhMDQELxdMmwyQFfYn82XqzXXqnBMGcwYOLmRokLQgMELrNlPM50IR2OUcXU4KGckOF0VtKEvo8HphLVHHaUhyNoMwvcT49DUcGxmph7R+w+ri6Ag6GhuRb+9GNBJDVErRut30a8tcmKJzyoix3u7t6uLuqexksVgqVzsYFLfQMZmXBkWFg64M9LcOqofEvtAy9d1AryGCbZL6KIXjBFHB5fAM3hlZv/23LkhNpcJhvHyZcdrdgI0sRTe2e9GRKsAbCGDBYYZjPgyFaVoiQT9ZMEJhpBHNVDEqpQqrxiwbVlmkGeNVRqn5pQjS23rgC7q0Jiu3h9BMFE5rGX9lKndudvpWUG4NUoxTY6Owk4keiqfdI6MhnkOj2c7I4sLGsgF+hW6dDal7/F7R0dHMUGQvlUoJdgcNhG6nx6wwUvnRQRXpslrQQjfD8hFJI9n78ApeOj/ITeY+CsZHgxQjy8boX4dOIZJaxFe7+xCUGpGhX82wVPDSt0klYmPXViKTJYY60UcX4m6m+7LRJ47mFCjZGMoszibHp+BnazDJtsyr507jL5cu4nbGx4LUx7sTE9rxyOZ+3Mn8EWqVsSJrlEQ2iVyliAYBMJujK6pooi4w7JXo0PPsD1Woq5cWwzg+NIzXJsfIXuF2l759kPr4ByOTODzMijq8fvS3NaFcLKPN54OLSYdCcCLRmGOsT7BaPD83i9GlJYxHwlqM/jTjv5lzFGjzo19rAAAAAElFTkSuQmCC";
var Qv;
function ah() {
    return ah = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ah.apply(this, arguments)
}
var iA = function(t) {
    return x.createElement("svg", ah({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
    }, t), Qv || (Qv = x.createElement("g", {
        "data-name": "Layer 2"
    }, x.createElement("path", {
        d: "M28 10H4a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2ZM28 17H4a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2ZM28 24H4a1 1 0 0 1 0-2h24a1 1 0 0 1 0 2Z"
    }))), x.createElement("path", {
        d: "M0 0h32v32H0z",
        style: {
            fill: "none"
        }
    }))
}, Zv;
function lh() {
    return lh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    lh.apply(this, arguments)
}
var sA = function(t) {
    return x.createElement("svg", lh({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24"
    }, t), Zv || (Zv = x.createElement("path", {
        d: "M4.293 18.293 10.586 12 4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293a1 1 0 1 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 1 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414Z"
    })))
};
const oA = [{
    id: 1,
    name: "Dashboard",
    link: "/"
}, {
    id: 2,
    name: "Stations",
    link: "/stations"
}, {
    id: 3,
    name: "My Trips",
    link: "/my-trips"
}, {
    id: 4,
    name: "Account",
    link: "/account"
}, {
    id: 5,
    name: "Subscription plan",
    link: "/subscription-plan"
}]
  , b_ = ({hendleOpenSidebar: e, isActiveSidebar: t})=>{
    const n = gs().pathname
      , r = oA.filter(i=>i.link === n)[0].name;
    return h.jsxs("header", {
        children: [h.jsxs("div", {
            className: "header",
            children: [h.jsxs("div", {
                children: [h.jsxs("h5", {
                    children: ["Pages / ", r]
                }), h.jsx("h1", {
                    children: r
                })]
            }), h.jsxs("div", {
                className: "user-panel",
                children: [h.jsx("div", {
                    children: h.jsxs("label", {
                        children: [h.jsx("img", {
                            src: JO,
                            alt: "Search"
                        }), h.jsx("input", {
                            type: "text",
                            placeholder: "Search"
                        })]
                    })
                }), h.jsx("img", {
                    src: nA,
                    alt: "Notifications"
                }), h.jsx("img", {
                    src: tA,
                    alt: "Moon"
                }), h.jsx("img", {
                    src: eA,
                    alt: "Info"
                }), h.jsx(ec, {
                    to: "/account",
                    children: h.jsx("img", {
                        src: rA,
                        alt: "User Photo"
                    })
                })]
            })]
        }), h.jsxs("div", {
            className: "mobile-header",
            children: [h.jsxs("div", {
                className: "logo",
                children: [h.jsxs(ec, {
                    to: "/",
                    children: [h.jsx(ZS, {
                        className: "svg-logo"
                    }), h.jsxs("h1", {
                        children: ["HUB ", h.jsxs("span", {
                            children: ["> ", r]
                        })]
                    })]
                }), h.jsx("div", {
                    className: "logo__shadow"
                })]
            }), t ? h.jsx(sA, {
                onClick: e
            }) : h.jsx(iA, {
                onClick: e
            })]
        })]
    })
}
;
b_.propTypes = {
    hendleOpenSidebar: Do.func.isRequired,
    isActiveSidebar: Do.bool.isRequired
};
const S_ = ({children: e, clazzName: t, durationTime: n})=>h.jsx(De.div, {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    },
    transition: {
        duration: n
    },
    className: t,
    children: e
})
  , aA = ()=>{
    const [e,t] = de.useState(!1)
      , n = ()=>{
        t(!e)
    }
      , r = ()=>{
        t(!1)
    }
    ;
    return h.jsxs("div", {
        className: "app",
        children: [h.jsx(x_, {
            hendleCloseSidebar: r,
            isActiveSidebar: e
        }), h.jsxs("div", {
            className: "app-contant",
            children: [h.jsx(b_, {
                hendleOpenSidebar: n,
                isActiveSidebar: e
            }), h.jsxs("div", {
                className: "content-without-header",
                children: [h.jsx(pE, {}), e && h.jsx(S_, {
                    clazzName: "blackout",
                    durationTime: 1
                })]
            })]
        })]
    })
}
;
const lA = "/assets/charging-fc67d0d5.svg"
  , cA = ()=>h.jsxs("section", {
    className: "ev-cars",
    children: [h.jsxs("div", {
        className: "ev-cars__title",
        children: [h.jsx("h2", {
            children: "EV cars"
        }), h.jsxs("h3", {
            children: ["Nissan Leaf", h.jsx("span", {
                className: "gradient-1",
                children: "Tesla X"
            }), " ", h.jsx("img", {
                src: Yp,
                alt: "add"
            })]
        })]
    }), h.jsxs("div", {
        className: "ev-cars__info",
        children: [h.jsxs("div", {
            children: [h.jsx("h3", {
                children: "Time"
            }), h.jsxs("h4", {
                children: [h.jsx("span", {
                    children: "5:21"
                }), " h"]
            })]
        }), h.jsxs("div", {
            children: [h.jsx("h3", {
                children: "Battery"
            }), h.jsxs("h4", {
                children: [h.jsx("span", {
                    className: "gradient-1",
                    children: "88"
                }), " %"]
            })]
        }), h.jsxs("div", {
            children: [h.jsx("h3", {
                children: "Power reserve"
            }), h.jsxs("h4", {
                children: [h.jsx("span", {
                    children: "428"
                }), " km"]
            })]
        })]
    }), h.jsx("div", {
        style: {
            marginTop: "20px"
        },
        children: h.jsx("img", {
            src: lA,
            alt: "Charging"
        })
    }), h.jsxs("div", {
        className: "range-battery",
        children: [h.jsx(De.div, {
            className: "range-battery__filling",
            initial: {
                width: "0%"
            },
            animate: {
                width: "72%"
            },
            transition: {
                duration: 2
            }
        }), h.jsxs("div", {
            children: [h.jsxs("h4", {
                children: [h.jsx("span", {
                    children: "3:31"
                }), " h"]
            }), h.jsx("h3", {
                children: "Remaining"
            })]
        })]
    })]
});
const pg = "/assets/arrowDown-504a2c16.svg"
  , uA = "/assets/rangeTextBettary-fa80b428.svg"
  , dA = "/assets/rangeTextGas-582b51b6.svg"
  , fA = 15
  , hA = 3
  , pA = ()=>{
    const [e,t] = de.useState(0)
      , [n,r] = de.useState(0);
    return de.useEffect(()=>{
        e < fA && setTimeout(()=>t(i=>i + 1), [95]),
        n < hA && setTimeout(()=>r(i=>i + 1), [95])
    }
    , [e, n]),
    h.jsxs("section", {
        className: "gas-savings",
        children: [h.jsxs("div", {
            className: "gas-savings__title",
            children: [h.jsx("h2", {
                children: "Gas Savings"
            }), h.jsxs("h3", {
                children: ["Year", h.jsx("img", {
                    src: pg,
                    alt: "add"
                })]
            })]
        }), h.jsxs("div", {
            className: "gas-savings__info",
            children: [h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Saved money"
                }), h.jsxs("h4", {
                    children: ["$ ", h.jsx("span", {
                        children: "1,716"
                    })]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Using private"
                }), h.jsxs("h4", {
                    children: ["$ ", h.jsx("span", {
                        children: "259"
                    })]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "m³, not burned"
                }), h.jsxs("h4", {
                    children: [h.jsx("span", {
                        children: "39"
                    }), " O₂"]
                })]
            })]
        }), h.jsxs("div", {
            className: "range-battery",
            children: [h.jsx("div", {
                className: "range-battery__range",
                children: [...new Array(15)].map((i,s)=>h.jsx(De.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: s + 1 <= n ? "active" : ""
                }, s))
            }), h.jsxs("div", {
                className: "range-battery__amount",
                children: [h.jsx("img", {
                    src: uA,
                    alt: "Range Text Bettary"
                }), h.jsx("h3", {
                    children: "Total spent"
                })]
            })]
        }), h.jsxs("div", {
            className: "range-gas",
            children: [h.jsx("div", {
                className: "range-gas__range",
                children: [...new Array(15)].map((i,s)=>h.jsx(De.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: s + 1 <= e ? "active" : ""
                }, s))
            }), h.jsxs("div", {
                className: "range-gas__amount",
                children: [h.jsx("img", {
                    src: dA,
                    alt: "Range Text Bettary"
                }), h.jsx("h3", {
                    children: "Gas equal."
                })]
            })]
        })]
    })
}
;
const gA = "/assets/home-0823c7f5.svg"
  , w_ = "/assets/location-1da3586b.svg"
  , mA = "/assets/plusCircle-f1b1d18f.svg"
  , vA = "/assets/bgQuickTripPlaner-1feb11bc.png";
var qv;
function ch() {
    return ch = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ch.apply(this, arguments)
}
var Us = function(t) {
    return x.createElement("svg", ch({
        xmlns: "http://www.w3.org/2000/svg",
        width: 8,
        height: 4,
        fill: "none"
    }, t), qv || (qv = x.createElement("path", {
        fill: "#fff",
        d: "M7.916 0 3.958 3.958-.001 0h7.917Z"
    })))
};
const cd = [{
    value: "Tesla Model X",
    label: "Tesla Model X"
}, {
    value: "Nissan Leaf",
    label: "Nissan Leaf"
}]
  , yA = ()=>{
    var o;
    const [e,t] = x.useState("")
      , [n,r] = x.useState(!1)
      , i = a=>{
        t(a)
    }
      , s = ()=>{
        r(!n)
    }
    ;
    return h.jsxs("div", {
        onClick: s,
        className: "custom-select ",
        children: [h.jsx("div", {
            className: "custom-select__selected",
            children: e ? (o = cd.find(a=>a.value === e)) == null ? void 0 : o.label : cd[0].label
        }), h.jsx("div", {
            children: h.jsx(Us, {
                className: n ? "arrow-up" : "arrow-down"
            })
        }), n && h.jsx("ul", {
            className: "custom-select__options",
            children: cd.map(a=>h.jsx("li", {
                className: "custom-select__option",
                onClick: ()=>i(a.value),
                children: a.label
            }, a.value))
        })]
    })
}
  , xA = ()=>{
    const [e,t] = x.useState(!0)
      , n = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    return h.jsxs("section", {
        className: "quick-trip-planer",
        children: [h.jsxs("div", {
            className: "quick-trip-planer__title",
            children: [h.jsx("h2", {
                children: "Quick Trip Planer"
            }), h.jsx("img", {
                src: Yp,
                alt: "add"
            })]
        }), h.jsxs("div", {
            className: "quick-trip-planer__content",
            children: [h.jsx("img", {
                src: vA,
                alt: "Quick Trip Planer"
            }), h.jsxs("div", {
                className: "quick-trip-planer__wrapper",
                children: [h.jsxs("div", {
                    children: [h.jsx(yA, {}), h.jsx("div", {
                        className: "quick-input",
                        children: h.jsxs("label", {
                            children: [h.jsx("img", {
                                src: w_,
                                alt: "Your Location"
                            }), h.jsx("input", {
                                type: "text",
                                placeholder: "Your Location"
                            })]
                        })
                    }), h.jsx("div", {
                        className: "quick-input",
                        style: {
                            marginTop: "37px"
                        },
                        children: h.jsxs("label", {
                            children: [h.jsx("img", {
                                src: gA,
                                alt: "Home"
                            }), h.jsx("input", {
                                type: "text",
                                placeholder: "Home"
                            })]
                        })
                    }), h.jsx("div", {
                        className: "connect-line",
                        children: h.jsx("div", {
                            children: h.jsx("img", {
                                src: mA,
                                alt: "Plus Circle"
                            })
                        })
                    })]
                }), h.jsxs("div", {
                    children: [h.jsxs("div", {
                        className: "check-box",
                        children: [h.jsxs("div", {
                            className: "check-box__descr",
                            children: [h.jsx("h4", {
                                children: "Total Range"
                            }), h.jsxs("h3", {
                                children: [h.jsx("span", {
                                    children: "325"
                                }), " miles"]
                            }), h.jsx("h4", {
                                className: "gradient-1",
                                children: "You’re all set."
                            }), h.jsx("h4", {
                                className: "gradient-1",
                                children: "Drive safely!"
                            })]
                        }), h.jsx("div", {
                            className: "check-box__check-box",
                            "data-ison": e,
                            onClick: ()=>t(!e),
                            children: h.jsx(De.div, {
                                className: "check-box__handle",
                                "data-ison": e,
                                layout: !0,
                                transition: n
                            })
                        })]
                    }), h.jsx(De.button, {
                        whileHover: {
                            scale: 1
                        },
                        whileTap: {
                            scale: 1
                        },
                        children: "Get Directions"
                    })]
                })]
            })]
        })]
    })
}
;
var Jv, ey, ty, ny;
function uh() {
    return uh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    uh.apply(this, arguments)
}
var bA = function(t) {
    return x.createElement("svg", uh({
        xmlns: "http://www.w3.org/2000/svg",
        width: 30,
        height: 30,
        fill: "none"
    }, t), Jv || (Jv = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#back_svg__a)"
    })), ey || (ey = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#back_svg__b)"
    })), ty || (ty = x.createElement("path", {
        fill: "#141414",
        fillRule: "evenodd",
        d: "M12.85 8.274a.938.938 0 0 1 0 1.326l-2.15 2.15h5.237a6.563 6.563 0 0 1 6.563 6.562v1.875a.938.938 0 0 1-1.875 0v-1.875a4.688 4.688 0 0 0-4.688-4.687h-5.236l2.15 2.15a.94.94 0 0 1-.297 1.542.936.936 0 0 1-1.03-.217l-3.75-3.75a.937.937 0 0 1 0-1.325l3.75-3.75a.938.938 0 0 1 1.326 0Z",
        clipRule: "evenodd"
    })), ny || (ny = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "back_svg__a",
        x1: 30,
        x2: 0,
        y1: 14.571,
        y2: 14.584,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#fff",
        stopOpacity: .6
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#fff",
        stopOpacity: .3
    })), x.createElement("linearGradient", {
        id: "back_svg__b",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#A720D6"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#C37AE5"
    })))))
}, ry, iy, sy, oy, ay, ly, cy;
function dh() {
    return dh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    dh.apply(this, arguments)
}
var SA = function(t) {
    return x.createElement("svg", dh({
        xmlns: "http://www.w3.org/2000/svg",
        width: 30,
        height: 30,
        fill: "none"
    }, t), ry || (ry = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#home_svg__a)"
    })), iy || (iy = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#home_svg__b)"
    })), sy || (sy = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#home_svg__c)"
    })), oy || (oy = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#home_svg__d)"
    })), ay || (ay = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#home_svg__e)"
    })), ly || (ly = x.createElement("path", {
        fill: "#141414",
        d: "M15.664 6.774a.94.94 0 0 0-1.328 0l-6.572 6.563a.937.937 0 0 0 .667 1.589.94.94 0 0 0 .66-.263l.275-.275v6.175a.937.937 0 0 0 .94.937h1.877a.94.94 0 0 0 .94-.938v-1.875a.937.937 0 0 1 .938-.937h1.878a.94.94 0 0 1 .939.938v1.875a.937.937 0 0 0 .939.937h1.878a.94.94 0 0 0 .939-.938v-6.174l.275.275a.94.94 0 0 0 1.591-.667.937.937 0 0 0-.263-.659l-6.573-6.563Z"
    })), cy || (cy = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "home_svg__a",
        x1: 30,
        x2: 0,
        y1: 14.571,
        y2: 14.584,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#141414",
        stopOpacity: .6
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#141414",
        stopOpacity: .3
    })), x.createElement("linearGradient", {
        id: "home_svg__b",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#A720D6"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#C37AE5"
    })), x.createElement("linearGradient", {
        id: "home_svg__c",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#D6C420"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#E5DA7A"
    })), x.createElement("linearGradient", {
        id: "home_svg__d",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D6CB"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5DF"
    })), x.createElement("linearGradient", {
        id: "home_svg__e",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        offset: 0,
        stopColor: "#D67720"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#E5AD7A"
    })))))
}, uy, dy, fy, hy;
function fh() {
    return fh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    fh.apply(this, arguments)
}
var wA = function(t) {
    return x.createElement("svg", fh({
        xmlns: "http://www.w3.org/2000/svg",
        width: 30,
        height: 30,
        fill: "none"
    }, t), uy || (uy = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "#D9D9D9"
    })), dy || (dy = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#evHub_svg__a)"
    })), fy || (fy = x.createElement("path", {
        fill: "#141414",
        fillRule: "evenodd",
        d: "M16.393 5.189a1.07 1.07 0 0 1 .75 1.022v5.357h4.285a1.071 1.071 0 0 1 .879 1.685l-7.5 10.713a1.072 1.072 0 0 1-1.95-.614v-5.356H8.572a1.072 1.072 0 0 1-.879-1.686l7.5-10.713a1.072 1.072 0 0 1 1.2-.407v-.001Z",
        clipRule: "evenodd"
    })), hy || (hy = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "evHub_svg__a",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#20D691"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#7AE5B5"
    })))))
}, py, gy, my, vy, yy;
function hh() {
    return hh = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    hh.apply(this, arguments)
}
var _A = function(t) {
    return x.createElement("svg", hh({
        xmlns: "http://www.w3.org/2000/svg",
        width: 30,
        height: 30,
        fill: "none"
    }, t), py || (py = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#work_svg__a)"
    })), gy || (gy = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#work_svg__b)"
    })), my || (my = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#work_svg__c)"
    })), vy || (vy = x.createElement("g", {
        fill: "#141414"
    }, x.createElement("path", {
        fillRule: "evenodd",
        d: "M11.25 11.25v-.938A2.812 2.812 0 0 1 14.063 7.5h1.874a2.812 2.812 0 0 1 2.813 2.813v.937h1.875a1.875 1.875 0 0 1 1.875 1.875v3.347c-2.4.89-4.94 1.343-7.5 1.34-2.56.003-5.1-.45-7.5-1.34v-3.347a1.875 1.875 0 0 1 1.875-1.875h1.875Zm1.875-.938a.938.938 0 0 1 .938-.937h1.874a.937.937 0 0 1 .938.938v.937h-3.75v-.938ZM14.063 15a.938.938 0 0 1 .937-.938h.01a.938.938 0 0 1 0 1.876H15a.938.938 0 0 1-.938-.938Z",
        clipRule: "evenodd"
    }), x.createElement("path", {
        d: "M7.5 18.461v2.164A1.875 1.875 0 0 0 9.375 22.5h11.25a1.875 1.875 0 0 0 1.875-1.875v-2.164a23.415 23.415 0 0 1-7.5 1.227c-2.621 0-5.144-.432-7.5-1.227Z"
    }))), yy || (yy = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "work_svg__a",
        x1: 30,
        x2: 0,
        y1: 14.571,
        y2: 14.584,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#fff",
        stopOpacity: .6
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#fff",
        stopOpacity: .3
    })), x.createElement("linearGradient", {
        id: "work_svg__b",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#A720D6"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#C37AE5"
    })), x.createElement("linearGradient", {
        id: "work_svg__c",
        x1: 0,
        x2: 35.455,
        y1: 30,
        y2: 20.623,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#D6C420"
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#E5DA7A"
    })))))
}, xy, by, Sy;
function ph() {
    return ph = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ph.apply(this, arguments)
}
var kA = function(t) {
    return x.createElement("svg", ph({
        xmlns: "http://www.w3.org/2000/svg",
        width: 30,
        height: 30,
        fill: "none"
    }, t), xy || (xy = x.createElement("circle", {
        cx: 15,
        cy: 15,
        r: 15,
        fill: "url(#other_svg__a)"
    })), by || (by = x.createElement("path", {
        fill: "#141414",
        d: "M11.25 15.075a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm5.625 0a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm3.75 1.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
    })), Sy || (Sy = x.createElement("defs", null, x.createElement("linearGradient", {
        id: "other_svg__a",
        x1: 30,
        x2: 0,
        y1: 14.571,
        y2: 14.584,
        gradientUnits: "userSpaceOnUse"
    }, x.createElement("stop", {
        stopColor: "#fff",
        stopOpacity: .6
    }), x.createElement("stop", {
        offset: 1,
        stopColor: "#fff",
        stopOpacity: .3
    })))))
};
const CA = [{
    name: "EV Hub",
    percent: "31",
    svg: bA
}, {
    name: "Work",
    percent: "29",
    svg: SA
}, {
    name: "Home",
    percent: "17",
    svg: wA
}, {
    name: "Sell back",
    percent: "13",
    svg: _A
}, {
    name: "Other",
    percent: "10",
    svg: kA
}];
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function ia(e) {
    return e + .5 | 0
}
const Kn = (e,t,n)=>Math.max(Math.min(e, n), t);
function Gs(e) {
    return Kn(ia(e * 2.55), 0, 255)
}
function hr(e) {
    return Kn(ia(e * 255), 0, 255)
}
function wn(e) {
    return Kn(ia(e / 2.55) / 100, 0, 1)
}
function wy(e) {
    return Kn(ia(e * 100), 0, 100)
}
const Ot = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}
  , gh = [..."0123456789ABCDEF"]
  , PA = e=>gh[e & 15]
  , jA = e=>gh[(e & 240) >> 4] + gh[e & 15]
  , La = e=>(e & 240) >> 4 === (e & 15)
  , EA = e=>La(e.r) && La(e.g) && La(e.b) && La(e.a);
function MA(e) {
    var t = e.length, n;
    return e[0] === "#" && (t === 4 || t === 5 ? n = {
        r: 255 & Ot[e[1]] * 17,
        g: 255 & Ot[e[2]] * 17,
        b: 255 & Ot[e[3]] * 17,
        a: t === 5 ? Ot[e[4]] * 17 : 255
    } : (t === 7 || t === 9) && (n = {
        r: Ot[e[1]] << 4 | Ot[e[2]],
        g: Ot[e[3]] << 4 | Ot[e[4]],
        b: Ot[e[5]] << 4 | Ot[e[6]],
        a: t === 9 ? Ot[e[7]] << 4 | Ot[e[8]] : 255
    })),
    n
}
const TA = (e,t)=>e < 255 ? t(e) : "";
function OA(e) {
    var t = EA(e) ? PA : jA;
    return e ? "#" + t(e.r) + t(e.g) + t(e.b) + TA(e.a, t) : void 0
}
const AA = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function __(e, t, n) {
    const r = t * Math.min(n, 1 - n)
      , i = (s,o=(s + e / 30) % 12)=>n - r * Math.max(Math.min(o - 3, 9 - o, 1), -1);
    return [i(0), i(8), i(4)]
}
function LA(e, t, n) {
    const r = (i,s=(i + e / 60) % 6)=>n - n * t * Math.max(Math.min(s, 4 - s, 1), 0);
    return [r(5), r(3), r(1)]
}
function DA(e, t, n) {
    const r = __(e, 1, .5);
    let i;
    for (t + n > 1 && (i = 1 / (t + n),
    t *= i,
    n *= i),
    i = 0; i < 3; i++)
        r[i] *= 1 - t - n,
        r[i] += t;
    return r
}
function RA(e, t, n, r, i) {
    return e === i ? (t - n) / r + (t < n ? 6 : 0) : t === i ? (n - e) / r + 2 : (e - t) / r + 4
}
function gg(e) {
    const n = e.r / 255
      , r = e.g / 255
      , i = e.b / 255
      , s = Math.max(n, r, i)
      , o = Math.min(n, r, i)
      , a = (s + o) / 2;
    let l, c, u;
    return s !== o && (u = s - o,
    c = a > .5 ? u / (2 - s - o) : u / (s + o),
    l = RA(n, r, i, u, s),
    l = l * 60 + .5),
    [l | 0, c || 0, a]
}
function mg(e, t, n, r) {
    return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, r)).map(hr)
}
function vg(e, t, n) {
    return mg(__, e, t, n)
}
function FA(e, t, n) {
    return mg(DA, e, t, n)
}
function IA(e, t, n) {
    return mg(LA, e, t, n)
}
function k_(e) {
    return (e % 360 + 360) % 360
}
function NA(e) {
    const t = AA.exec(e);
    let n = 255, r;
    if (!t)
        return;
    t[5] !== r && (n = t[6] ? Gs(+t[5]) : hr(+t[5]));
    const i = k_(+t[2])
      , s = +t[3] / 100
      , o = +t[4] / 100;
    return t[1] === "hwb" ? r = FA(i, s, o) : t[1] === "hsv" ? r = IA(i, s, o) : r = vg(i, s, o),
    {
        r: r[0],
        g: r[1],
        b: r[2],
        a: n
    }
}
function VA(e, t) {
    var n = gg(e);
    n[0] = k_(n[0] + t),
    n = vg(n),
    e.r = n[0],
    e.g = n[1],
    e.b = n[2]
}
function BA(e) {
    if (!e)
        return;
    const t = gg(e)
      , n = t[0]
      , r = wy(t[1])
      , i = wy(t[2]);
    return e.a < 255 ? `hsla(${n}, ${r}%, ${i}%, ${wn(e.a)})` : `hsl(${n}, ${r}%, ${i}%)`
}
const _y = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
}
  , ky = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
};
function zA() {
    const e = {}
      , t = Object.keys(ky)
      , n = Object.keys(_y);
    let r, i, s, o, a;
    for (r = 0; r < t.length; r++) {
        for (o = a = t[r],
        i = 0; i < n.length; i++)
            s = n[i],
            a = a.replace(s, _y[s]);
        s = parseInt(ky[o], 16),
        e[a] = [s >> 16 & 255, s >> 8 & 255, s & 255]
    }
    return e
}
let Da;
function $A(e) {
    Da || (Da = zA(),
    Da.transparent = [0, 0, 0, 0]);
    const t = Da[e.toLowerCase()];
    return t && {
        r: t[0],
        g: t[1],
        b: t[2],
        a: t.length === 4 ? t[3] : 255
    }
}
const HA = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function WA(e) {
    const t = HA.exec(e);
    let n = 255, r, i, s;
    if (t) {
        if (t[7] !== r) {
            const o = +t[7];
            n = t[8] ? Gs(o) : Kn(o * 255, 0, 255)
        }
        return r = +t[1],
        i = +t[3],
        s = +t[5],
        r = 255 & (t[2] ? Gs(r) : Kn(r, 0, 255)),
        i = 255 & (t[4] ? Gs(i) : Kn(i, 0, 255)),
        s = 255 & (t[6] ? Gs(s) : Kn(s, 0, 255)),
        {
            r,
            g: i,
            b: s,
            a: n
        }
    }
}
function UA(e) {
    return e && (e.a < 255 ? `rgba(${e.r}, ${e.g}, ${e.b}, ${wn(e.a)})` : `rgb(${e.r}, ${e.g}, ${e.b})`)
}
const ud = e=>e <= .0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - .055
  , vi = e=>e <= .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4);
function GA(e, t, n) {
    const r = vi(wn(e.r))
      , i = vi(wn(e.g))
      , s = vi(wn(e.b));
    return {
        r: hr(ud(r + n * (vi(wn(t.r)) - r))),
        g: hr(ud(i + n * (vi(wn(t.g)) - i))),
        b: hr(ud(s + n * (vi(wn(t.b)) - s))),
        a: e.a + n * (t.a - e.a)
    }
}
function Ra(e, t, n) {
    if (e) {
        let r = gg(e);
        r[t] = Math.max(0, Math.min(r[t] + r[t] * n, t === 0 ? 360 : 1)),
        r = vg(r),
        e.r = r[0],
        e.g = r[1],
        e.b = r[2]
    }
}
function C_(e, t) {
    return e && Object.assign(t || {}, e)
}
function Cy(e) {
    var t = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    return Array.isArray(e) ? e.length >= 3 && (t = {
        r: e[0],
        g: e[1],
        b: e[2],
        a: 255
    },
    e.length > 3 && (t.a = hr(e[3]))) : (t = C_(e, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }),
    t.a = hr(t.a)),
    t
}
function YA(e) {
    return e.charAt(0) === "r" ? WA(e) : NA(e)
}
class No {
    constructor(t) {
        if (t instanceof No)
            return t;
        const n = typeof t;
        let r;
        n === "object" ? r = Cy(t) : n === "string" && (r = MA(t) || $A(t) || YA(t)),
        this._rgb = r,
        this._valid = !!r
    }
    get valid() {
        return this._valid
    }
    get rgb() {
        var t = C_(this._rgb);
        return t && (t.a = wn(t.a)),
        t
    }
    set rgb(t) {
        this._rgb = Cy(t)
    }
    rgbString() {
        return this._valid ? UA(this._rgb) : void 0
    }
    hexString() {
        return this._valid ? OA(this._rgb) : void 0
    }
    hslString() {
        return this._valid ? BA(this._rgb) : void 0
    }
    mix(t, n) {
        if (t) {
            const r = this.rgb
              , i = t.rgb;
            let s;
            const o = n === s ? .5 : n
              , a = 2 * o - 1
              , l = r.a - i.a
              , c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
            s = 1 - c,
            r.r = 255 & c * r.r + s * i.r + .5,
            r.g = 255 & c * r.g + s * i.g + .5,
            r.b = 255 & c * r.b + s * i.b + .5,
            r.a = o * r.a + (1 - o) * i.a,
            this.rgb = r
        }
        return this
    }
    interpolate(t, n) {
        return t && (this._rgb = GA(this._rgb, t._rgb, n)),
        this
    }
    clone() {
        return new No(this.rgb)
    }
    alpha(t) {
        return this._rgb.a = hr(t),
        this
    }
    clearer(t) {
        const n = this._rgb;
        return n.a *= 1 - t,
        this
    }
    greyscale() {
        const t = this._rgb
          , n = ia(t.r * .3 + t.g * .59 + t.b * .11);
        return t.r = t.g = t.b = n,
        this
    }
    opaquer(t) {
        const n = this._rgb;
        return n.a *= 1 + t,
        this
    }
    negate() {
        const t = this._rgb;
        return t.r = 255 - t.r,
        t.g = 255 - t.g,
        t.b = 255 - t.b,
        this
    }
    lighten(t) {
        return Ra(this._rgb, 2, t),
        this
    }
    darken(t) {
        return Ra(this._rgb, 2, -t),
        this
    }
    saturate(t) {
        return Ra(this._rgb, 1, t),
        this
    }
    desaturate(t) {
        return Ra(this._rgb, 1, -t),
        this
    }
    rotate(t) {
        return VA(this._rgb, t),
        this
    }
}
/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
function gn() {}
const XA = (()=>{
    let e = 0;
    return ()=>e++
}
)();
function Z(e) {
    return e === null || typeof e > "u"
}
function ie(e) {
    if (Array.isArray && Array.isArray(e))
        return !0;
    const t = Object.prototype.toString.call(e);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]"
}
function Y(e) {
    return e !== null && Object.prototype.toString.call(e) === "[object Object]"
}
function ye(e) {
    return (typeof e == "number" || e instanceof Number) && isFinite(+e)
}
function gt(e, t) {
    return ye(e) ? e : t
}
function U(e, t) {
    return typeof e > "u" ? t : e
}
const KA = (e,t)=>typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 * t : +e;
function ee(e, t, n) {
    if (e && typeof e.call == "function")
        return e.apply(n, t)
}
function Q(e, t, n, r) {
    let i, s, o;
    if (ie(e))
        if (s = e.length,
        r)
            for (i = s - 1; i >= 0; i--)
                t.call(n, e[i], i);
        else
            for (i = 0; i < s; i++)
                t.call(n, e[i], i);
    else if (Y(e))
        for (o = Object.keys(e),
        s = o.length,
        i = 0; i < s; i++)
            t.call(n, e[o[i]], o[i])
}
function cc(e, t) {
    let n, r, i, s;
    if (!e || !t || e.length !== t.length)
        return !1;
    for (n = 0,
    r = e.length; n < r; ++n)
        if (i = e[n],
        s = t[n],
        i.datasetIndex !== s.datasetIndex || i.index !== s.index)
            return !1;
    return !0
}
function uc(e) {
    if (ie(e))
        return e.map(uc);
    if (Y(e)) {
        const t = Object.create(null)
          , n = Object.keys(e)
          , r = n.length;
        let i = 0;
        for (; i < r; ++i)
            t[n[i]] = uc(e[n[i]]);
        return t
    }
    return e
}
function P_(e) {
    return ["__proto__", "prototype", "constructor"].indexOf(e) === -1
}
function QA(e, t, n, r) {
    if (!P_(e))
        return;
    const i = t[e]
      , s = n[e];
    Y(i) && Y(s) ? Vo(i, s, r) : t[e] = uc(s)
}
function Vo(e, t, n) {
    const r = ie(t) ? t : [t]
      , i = r.length;
    if (!Y(e))
        return e;
    n = n || {};
    const s = n.merger || QA;
    let o;
    for (let a = 0; a < i; ++a) {
        if (o = r[a],
        !Y(o))
            continue;
        const l = Object.keys(o);
        for (let c = 0, u = l.length; c < u; ++c)
            s(l[c], e, o, n)
    }
    return e
}
function lo(e, t) {
    return Vo(e, t, {
        merger: ZA
    })
}
function ZA(e, t, n) {
    if (!P_(e))
        return;
    const r = t[e]
      , i = n[e];
    Y(r) && Y(i) ? lo(r, i) : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = uc(i))
}
const Py = {
    "": e=>e,
    x: e=>e.x,
    y: e=>e.y
};
function qA(e) {
    const t = e.split(".")
      , n = [];
    let r = "";
    for (const i of t)
        r += i,
        r.endsWith("\\") ? r = r.slice(0, -1) + "." : (n.push(r),
        r = "");
    return n
}
function JA(e) {
    const t = qA(e);
    return n=>{
        for (const r of t) {
            if (r === "")
                break;
            n = n && n[r]
        }
        return n
    }
}
function is(e, t) {
    return (Py[t] || (Py[t] = JA(t)))(e)
}
function yg(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
const Bo = e=>typeof e < "u"
  , yr = e=>typeof e == "function"
  , jy = (e,t)=>{
    if (e.size !== t.size)
        return !1;
    for (const n of e)
        if (!t.has(n))
            return !1;
    return !0
}
;
function e3(e) {
    return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu"
}
const Ce = Math.PI
  , _t = 2 * Ce
  , t3 = _t + Ce
  , dc = Number.POSITIVE_INFINITY
  , n3 = Ce / 180
  , xt = Ce / 2
  , Mr = Ce / 4
  , Ey = Ce * 2 / 3
  , Qn = Math.log10
  , cn = Math.sign;
function co(e, t, n) {
    return Math.abs(e - t) < n
}
function My(e) {
    const t = Math.round(e);
    e = co(e, t, e / 1e3) ? t : e;
    const n = Math.pow(10, Math.floor(Qn(e)))
      , r = e / n;
    return (r <= 1 ? 1 : r <= 2 ? 2 : r <= 5 ? 5 : 10) * n
}
function r3(e) {
    const t = []
      , n = Math.sqrt(e);
    let r;
    for (r = 1; r < n; r++)
        e % r === 0 && (t.push(r),
        t.push(e / r));
    return n === (n | 0) && t.push(n),
    t.sort((i,s)=>i - s).pop(),
    t
}
function zo(e) {
    return !isNaN(parseFloat(e)) && isFinite(e)
}
function i3(e, t) {
    const n = Math.round(e);
    return n - t <= e && n + t >= e
}
function j_(e, t, n) {
    let r, i, s;
    for (r = 0,
    i = e.length; r < i; r++)
        s = e[r][n],
        isNaN(s) || (t.min = Math.min(t.min, s),
        t.max = Math.max(t.max, s))
}
function Zn(e) {
    return e * (Ce / 180)
}
function xg(e) {
    return e * (180 / Ce)
}
function Ty(e) {
    if (!ye(e))
        return;
    let t = 1
      , n = 0;
    for (; Math.round(e * t) / t !== e; )
        t *= 10,
        n++;
    return n
}
function s3(e, t) {
    const n = t.x - e.x
      , r = t.y - e.y
      , i = Math.sqrt(n * n + r * r);
    let s = Math.atan2(r, n);
    return s < -.5 * Ce && (s += _t),
    {
        angle: s,
        distance: i
    }
}
function mh(e, t) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
function o3(e, t) {
    return (e - t + t3) % _t - Ce
}
function vt(e) {
    return (e % _t + _t) % _t
}
function E_(e, t, n, r) {
    const i = vt(e)
      , s = vt(t)
      , o = vt(n)
      , a = vt(s - i)
      , l = vt(o - i)
      , c = vt(i - s)
      , u = vt(i - o);
    return i === s || i === o || r && s === o || a > l && c < u
}
function bt(e, t, n) {
    return Math.max(t, Math.min(n, e))
}
function a3(e) {
    return bt(e, -32768, 32767)
}
function qn(e, t, n, r=1e-6) {
    return e >= Math.min(t, n) - r && e <= Math.max(t, n) + r
}
function bg(e, t, n) {
    n = n || (o=>e[o] < t);
    let r = e.length - 1, i = 0, s;
    for (; r - i > 1; )
        s = i + r >> 1,
        n(s) ? i = s : r = s;
    return {
        lo: i,
        hi: r
    }
}
const Gr = (e,t,n,r)=>bg(e, n, r ? i=>{
    const s = e[i][t];
    return s < n || s === n && e[i + 1][t] === n
}
: i=>e[i][t] < n)
  , l3 = (e,t,n)=>bg(e, n, r=>e[r][t] >= n);
function c3(e, t, n) {
    let r = 0
      , i = e.length;
    for (; r < i && e[r] < t; )
        r++;
    for (; i > r && e[i - 1] > n; )
        i--;
    return r > 0 || i < e.length ? e.slice(r, i) : e
}
const M_ = ["push", "pop", "shift", "splice", "unshift"];
function u3(e, t) {
    if (e._chartjs) {
        e._chartjs.listeners.push(t);
        return
    }
    Object.defineProperty(e, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
            listeners: [t]
        }
    }),
    M_.forEach(n=>{
        const r = "_onData" + yg(n)
          , i = e[n];
        Object.defineProperty(e, n, {
            configurable: !0,
            enumerable: !1,
            value(...s) {
                const o = i.apply(this, s);
                return e._chartjs.listeners.forEach(a=>{
                    typeof a[r] == "function" && a[r](...s)
                }
                ),
                o
            }
        })
    }
    )
}
function Oy(e, t) {
    const n = e._chartjs;
    if (!n)
        return;
    const r = n.listeners
      , i = r.indexOf(t);
    i !== -1 && r.splice(i, 1),
    !(r.length > 0) && (M_.forEach(s=>{
        delete e[s]
    }
    ),
    delete e._chartjs)
}
function T_(e) {
    const t = new Set(e);
    return t.size === e.length ? e : Array.from(t)
}
const O_ = function() {
    return typeof window > "u" ? function(e) {
        return e()
    }
    : window.requestAnimationFrame
}();
function A_(e, t) {
    let n = []
      , r = !1;
    return function(...i) {
        n = i,
        r || (r = !0,
        O_.call(window, ()=>{
            r = !1,
            e.apply(t, n)
        }
        ))
    }
}
function d3(e, t) {
    let n;
    return function(...r) {
        return t ? (clearTimeout(n),
        n = setTimeout(e, t, r)) : e.apply(this, r),
        t
    }
}
const Sg = e=>e === "start" ? "left" : e === "end" ? "right" : "center"
  , Xe = (e,t,n)=>e === "start" ? t : e === "end" ? n : (t + n) / 2
  , f3 = (e,t,n,r)=>e === (r ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function h3(e, t, n) {
    const r = t.length;
    let i = 0
      , s = r;
    if (e._sorted) {
        const {iScale: o, _parsed: a} = e
          , l = o.axis
          , {min: c, max: u, minDefined: d, maxDefined: f} = o.getUserBounds();
        d && (i = bt(Math.min(Gr(a, l, c).lo, n ? r : Gr(t, l, o.getPixelForValue(c)).lo), 0, r - 1)),
        f ? s = bt(Math.max(Gr(a, o.axis, u, !0).hi + 1, n ? 0 : Gr(t, l, o.getPixelForValue(u), !0).hi + 1), i, r) - i : s = r - i
    }
    return {
        start: i,
        count: s
    }
}
function p3(e) {
    const {xScale: t, yScale: n, _scaleRanges: r} = e
      , i = {
        xmin: t.min,
        xmax: t.max,
        ymin: n.min,
        ymax: n.max
    };
    if (!r)
        return e._scaleRanges = i,
        !0;
    const s = r.xmin !== t.min || r.xmax !== t.max || r.ymin !== n.min || r.ymax !== n.max;
    return Object.assign(r, i),
    s
}
const Fa = e=>e === 0 || e === 1
  , Ay = (e,t,n)=>-(Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * _t / n))
  , Ly = (e,t,n)=>Math.pow(2, -10 * e) * Math.sin((e - t) * _t / n) + 1
  , uo = {
    linear: e=>e,
    easeInQuad: e=>e * e,
    easeOutQuad: e=>-e * (e - 2),
    easeInOutQuad: e=>(e /= .5) < 1 ? .5 * e * e : -.5 * (--e * (e - 2) - 1),
    easeInCubic: e=>e * e * e,
    easeOutCubic: e=>(e -= 1) * e * e + 1,
    easeInOutCubic: e=>(e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2),
    easeInQuart: e=>e * e * e * e,
    easeOutQuart: e=>-((e -= 1) * e * e * e - 1),
    easeInOutQuart: e=>(e /= .5) < 1 ? .5 * e * e * e * e : -.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: e=>e * e * e * e * e,
    easeOutQuint: e=>(e -= 1) * e * e * e * e + 1,
    easeInOutQuint: e=>(e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: e=>-Math.cos(e * xt) + 1,
    easeOutSine: e=>Math.sin(e * xt),
    easeInOutSine: e=>-.5 * (Math.cos(Ce * e) - 1),
    easeInExpo: e=>e === 0 ? 0 : Math.pow(2, 10 * (e - 1)),
    easeOutExpo: e=>e === 1 ? 1 : -Math.pow(2, -10 * e) + 1,
    easeInOutExpo: e=>Fa(e) ? e : e < .5 ? .5 * Math.pow(2, 10 * (e * 2 - 1)) : .5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: e=>e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1),
    easeOutCirc: e=>Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: e=>(e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: e=>Fa(e) ? e : Ay(e, .075, .3),
    easeOutElastic: e=>Fa(e) ? e : Ly(e, .075, .3),
    easeInOutElastic(e) {
        return Fa(e) ? e : e < .5 ? .5 * Ay(e * 2, .1125, .45) : .5 + .5 * Ly(e * 2 - 1, .1125, .45)
    },
    easeInBack(e) {
        return e * e * ((1.70158 + 1) * e - 1.70158)
    },
    easeOutBack(e) {
        return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1
    },
    easeInOutBack(e) {
        let t = 1.70158;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    },
    easeInBounce: e=>1 - uo.easeOutBounce(1 - e),
    easeOutBounce(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    },
    easeInOutBounce: e=>e < .5 ? uo.easeInBounce(e * 2) * .5 : uo.easeOutBounce(e * 2 - 1) * .5 + .5
};
function wg(e) {
    if (e && typeof e == "object") {
        const t = e.toString();
        return t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
    }
    return !1
}
function Dy(e) {
    return wg(e) ? e : new No(e)
}
function dd(e) {
    return wg(e) ? e : new No(e).saturate(.5).darken(.1).hexString()
}
const g3 = ["x", "y", "borderWidth", "radius", "tension"]
  , m3 = ["color", "borderColor", "backgroundColor"];
function v3(e) {
    e.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    }),
    e.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t=>t !== "onProgress" && t !== "onComplete" && t !== "fn"
    }),
    e.set("animations", {
        colors: {
            type: "color",
            properties: m3
        },
        numbers: {
            type: "number",
            properties: g3
        }
    }),
    e.describe("animations", {
        _fallback: "animation"
    }),
    e.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: t=>t | 0
                }
            }
        }
    })
}
function y3(e) {
    e.set("layout", {
        autoPadding: !0,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    })
}
const Ry = new Map;
function x3(e, t) {
    t = t || {};
    const n = e + JSON.stringify(t);
    let r = Ry.get(n);
    return r || (r = new Intl.NumberFormat(e,t),
    Ry.set(n, r)),
    r
}
function _g(e, t, n) {
    return x3(t, n).format(e)
}
const L_ = {
    values(e) {
        return ie(e) ? e : "" + e
    },
    numeric(e, t, n) {
        if (e === 0)
            return "0";
        const r = this.chart.options.locale;
        let i, s = e;
        if (n.length > 1) {
            const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
            (c < 1e-4 || c > 1e15) && (i = "scientific"),
            s = b3(e, n)
        }
        const o = Qn(Math.abs(s))
          , a = isNaN(o) ? 1 : Math.max(Math.min(-1 * Math.floor(o), 20), 0)
          , l = {
            notation: i,
            minimumFractionDigits: a,
            maximumFractionDigits: a
        };
        return Object.assign(l, this.options.ticks.format),
        _g(e, r, l)
    },
    logarithmic(e, t, n) {
        if (e === 0)
            return "0";
        const r = n[t].significand || e / Math.pow(10, Math.floor(Qn(e)));
        return [1, 2, 3, 5, 10, 15].includes(r) || t > .8 * n.length ? L_.numeric.call(this, e, t, n) : ""
    }
};
function b3(e, t) {
    let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)),
    n
}
var Kc = {
    formatters: L_
};
function S3(e) {
    e.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t,n)=>n.lineWidth,
            tickColor: (t,n)=>n.color,
            offset: !1
        },
        border: {
            display: !0,
            dash: [],
            dashOffset: 0,
            width: 1
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: Kc.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }),
    e.route("scale.ticks", "color", "", "color"),
    e.route("scale.grid", "color", "", "borderColor"),
    e.route("scale.border", "color", "", "borderColor"),
    e.route("scale.title", "color", "", "color"),
    e.describe("scale", {
        _fallback: !1,
        _scriptable: t=>!t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
        _indexable: t=>t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
    }),
    e.describe("scales", {
        _fallback: "scale"
    }),
    e.describe("scale.ticks", {
        _scriptable: t=>t !== "backdropPadding" && t !== "callback",
        _indexable: t=>t !== "backdropPadding"
    })
}
const oi = Object.create(null)
  , vh = Object.create(null);
function fo(e, t) {
    if (!t)
        return e;
    const n = t.split(".");
    for (let r = 0, i = n.length; r < i; ++r) {
        const s = n[r];
        e = e[s] || (e[s] = Object.create(null))
    }
    return e
}
function fd(e, t, n) {
    return typeof t == "string" ? Vo(fo(e, t), n) : Vo(fo(e, ""), t)
}
class w3 {
    constructor(t, n) {
        this.animation = void 0,
        this.backgroundColor = "rgba(0,0,0,0.1)",
        this.borderColor = "rgba(0,0,0,0.1)",
        this.color = "#666",
        this.datasets = {},
        this.devicePixelRatio = r=>r.chart.platform.getDevicePixelRatio(),
        this.elements = {},
        this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
        this.font = {
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            size: 12,
            style: "normal",
            lineHeight: 1.2,
            weight: null
        },
        this.hover = {},
        this.hoverBackgroundColor = (r,i)=>dd(i.backgroundColor),
        this.hoverBorderColor = (r,i)=>dd(i.borderColor),
        this.hoverColor = (r,i)=>dd(i.color),
        this.indexAxis = "x",
        this.interaction = {
            mode: "nearest",
            intersect: !0,
            includeInvisible: !1
        },
        this.maintainAspectRatio = !0,
        this.onHover = null,
        this.onClick = null,
        this.parsing = !0,
        this.plugins = {},
        this.responsive = !0,
        this.scale = void 0,
        this.scales = {},
        this.showLine = !0,
        this.drawActiveElementsOnTop = !0,
        this.describe(t),
        this.apply(n)
    }
    set(t, n) {
        return fd(this, t, n)
    }
    get(t) {
        return fo(this, t)
    }
    describe(t, n) {
        return fd(vh, t, n)
    }
    override(t, n) {
        return fd(oi, t, n)
    }
    route(t, n, r, i) {
        const s = fo(this, t)
          , o = fo(this, r)
          , a = "_" + n;
        Object.defineProperties(s, {
            [a]: {
                value: s[n],
                writable: !0
            },
            [n]: {
                enumerable: !0,
                get() {
                    const l = this[a]
                      , c = o[i];
                    return Y(l) ? Object.assign({}, c, l) : U(l, c)
                },
                set(l) {
                    this[a] = l
                }
            }
        })
    }
    apply(t) {
        t.forEach(n=>n(this))
    }
}
var xe = new w3({
    _scriptable: e=>!e.startsWith("on"),
    _indexable: e=>e !== "events",
    hover: {
        _fallback: "interaction"
    },
    interaction: {
        _scriptable: !1,
        _indexable: !1
    }
},[v3, y3, S3]);
function _3(e) {
    return !e || Z(e.size) || Z(e.family) ? null : (e.style ? e.style + " " : "") + (e.weight ? e.weight + " " : "") + e.size + "px " + e.family
}
function fc(e, t, n, r, i) {
    let s = t[i];
    return s || (s = t[i] = e.measureText(i).width,
    n.push(i)),
    s > r && (r = s),
    r
}
function k3(e, t, n, r) {
    r = r || {};
    let i = r.data = r.data || {}
      , s = r.garbageCollect = r.garbageCollect || [];
    r.font !== t && (i = r.data = {},
    s = r.garbageCollect = [],
    r.font = t),
    e.save(),
    e.font = t;
    let o = 0;
    const a = n.length;
    let l, c, u, d, f;
    for (l = 0; l < a; l++)
        if (d = n[l],
        d != null && !ie(d))
            o = fc(e, i, s, o, d);
        else if (ie(d))
            for (c = 0,
            u = d.length; c < u; c++)
                f = d[c],
                f != null && !ie(f) && (o = fc(e, i, s, o, f));
    e.restore();
    const p = s.length / 2;
    if (p > n.length) {
        for (l = 0; l < p; l++)
            delete i[s[l]];
        s.splice(0, p)
    }
    return o
}
function Tr(e, t, n) {
    const r = e.currentDevicePixelRatio
      , i = n !== 0 ? Math.max(n / 2, .5) : 0;
    return Math.round((t - i) * r) / r + i
}
function Fy(e, t) {
    t = t || e.getContext("2d"),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore()
}
function yh(e, t, n, r) {
    D_(e, t, n, r, null)
}
function D_(e, t, n, r, i) {
    let s, o, a, l, c, u, d, f;
    const p = t.pointStyle
      , g = t.rotation
      , v = t.radius;
    let S = (g || 0) * n3;
    if (p && typeof p == "object" && (s = p.toString(),
    s === "[object HTMLImageElement]" || s === "[object HTMLCanvasElement]")) {
        e.save(),
        e.translate(n, r),
        e.rotate(S),
        e.drawImage(p, -p.width / 2, -p.height / 2, p.width, p.height),
        e.restore();
        return
    }
    if (!(isNaN(v) || v <= 0)) {
        switch (e.beginPath(),
        p) {
        default:
            i ? e.ellipse(n, r, i / 2, v, 0, 0, _t) : e.arc(n, r, v, 0, _t),
            e.closePath();
            break;
        case "triangle":
            u = i ? i / 2 : v,
            e.moveTo(n + Math.sin(S) * u, r - Math.cos(S) * v),
            S += Ey,
            e.lineTo(n + Math.sin(S) * u, r - Math.cos(S) * v),
            S += Ey,
            e.lineTo(n + Math.sin(S) * u, r - Math.cos(S) * v),
            e.closePath();
            break;
        case "rectRounded":
            c = v * .516,
            l = v - c,
            o = Math.cos(S + Mr) * l,
            d = Math.cos(S + Mr) * (i ? i / 2 - c : l),
            a = Math.sin(S + Mr) * l,
            f = Math.sin(S + Mr) * (i ? i / 2 - c : l),
            e.arc(n - d, r - a, c, S - Ce, S - xt),
            e.arc(n + f, r - o, c, S - xt, S),
            e.arc(n + d, r + a, c, S, S + xt),
            e.arc(n - f, r + o, c, S + xt, S + Ce),
            e.closePath();
            break;
        case "rect":
            if (!g) {
                l = Math.SQRT1_2 * v,
                u = i ? i / 2 : l,
                e.rect(n - u, r - l, 2 * u, 2 * l);
                break
            }
            S += Mr;
        case "rectRot":
            d = Math.cos(S) * (i ? i / 2 : v),
            o = Math.cos(S) * v,
            a = Math.sin(S) * v,
            f = Math.sin(S) * (i ? i / 2 : v),
            e.moveTo(n - d, r - a),
            e.lineTo(n + f, r - o),
            e.lineTo(n + d, r + a),
            e.lineTo(n - f, r + o),
            e.closePath();
            break;
        case "crossRot":
            S += Mr;
        case "cross":
            d = Math.cos(S) * (i ? i / 2 : v),
            o = Math.cos(S) * v,
            a = Math.sin(S) * v,
            f = Math.sin(S) * (i ? i / 2 : v),
            e.moveTo(n - d, r - a),
            e.lineTo(n + d, r + a),
            e.moveTo(n + f, r - o),
            e.lineTo(n - f, r + o);
            break;
        case "star":
            d = Math.cos(S) * (i ? i / 2 : v),
            o = Math.cos(S) * v,
            a = Math.sin(S) * v,
            f = Math.sin(S) * (i ? i / 2 : v),
            e.moveTo(n - d, r - a),
            e.lineTo(n + d, r + a),
            e.moveTo(n + f, r - o),
            e.lineTo(n - f, r + o),
            S += Mr,
            d = Math.cos(S) * (i ? i / 2 : v),
            o = Math.cos(S) * v,
            a = Math.sin(S) * v,
            f = Math.sin(S) * (i ? i / 2 : v),
            e.moveTo(n - d, r - a),
            e.lineTo(n + d, r + a),
            e.moveTo(n + f, r - o),
            e.lineTo(n - f, r + o);
            break;
        case "line":
            o = i ? i / 2 : Math.cos(S) * v,
            a = Math.sin(S) * v,
            e.moveTo(n - o, r - a),
            e.lineTo(n + o, r + a);
            break;
        case "dash":
            e.moveTo(n, r),
            e.lineTo(n + Math.cos(S) * (i ? i / 2 : v), r + Math.sin(S) * v);
            break;
        case !1:
            e.closePath();
            break
        }
        e.fill(),
        t.borderWidth > 0 && e.stroke()
    }
}
function jn(e, t, n) {
    return n = n || .5,
    !t || e && e.x > t.left - n && e.x < t.right + n && e.y > t.top - n && e.y < t.bottom + n
}
function Qc(e, t) {
    e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip()
}
function Zc(e) {
    e.restore()
}
function C3(e, t, n, r, i) {
    if (!t)
        return e.lineTo(n.x, n.y);
    if (i === "middle") {
        const s = (t.x + n.x) / 2;
        e.lineTo(s, t.y),
        e.lineTo(s, n.y)
    } else
        i === "after" != !!r ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
    e.lineTo(n.x, n.y)
}
function P3(e, t, n, r) {
    if (!t)
        return e.lineTo(n.x, n.y);
    e.bezierCurveTo(r ? t.cp1x : t.cp2x, r ? t.cp1y : t.cp2y, r ? n.cp2x : n.cp1x, r ? n.cp2y : n.cp1y, n.x, n.y)
}
function j3(e, t) {
    t.translation && e.translate(t.translation[0], t.translation[1]),
    Z(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline)
}
function E3(e, t, n, r, i) {
    if (i.strikethrough || i.underline) {
        const s = e.measureText(r)
          , o = t - s.actualBoundingBoxLeft
          , a = t + s.actualBoundingBoxRight
          , l = n - s.actualBoundingBoxAscent
          , c = n + s.actualBoundingBoxDescent
          , u = i.strikethrough ? (l + c) / 2 : c;
        e.strokeStyle = e.fillStyle,
        e.beginPath(),
        e.lineWidth = i.decorationWidth || 2,
        e.moveTo(o, u),
        e.lineTo(a, u),
        e.stroke()
    }
}
function M3(e, t) {
    const n = e.fillStyle;
    e.fillStyle = t.color,
    e.fillRect(t.left, t.top, t.width, t.height),
    e.fillStyle = n
}
function ai(e, t, n, r, i, s={}) {
    const o = ie(t) ? t : [t]
      , a = s.strokeWidth > 0 && s.strokeColor !== "";
    let l, c;
    for (e.save(),
    e.font = i.string,
    j3(e, s),
    l = 0; l < o.length; ++l)
        c = o[l],
        s.backdrop && M3(e, s.backdrop),
        a && (s.strokeColor && (e.strokeStyle = s.strokeColor),
        Z(s.strokeWidth) || (e.lineWidth = s.strokeWidth),
        e.strokeText(c, n, r, s.maxWidth)),
        e.fillText(c, n, r, s.maxWidth),
        E3(e, n, r, c, s),
        r += Number(i.lineHeight);
    e.restore()
}
function $o(e, t) {
    const {x: n, y: r, w: i, h: s, radius: o} = t;
    e.arc(n + o.topLeft, r + o.topLeft, o.topLeft, 1.5 * Ce, Ce, !0),
    e.lineTo(n, r + s - o.bottomLeft),
    e.arc(n + o.bottomLeft, r + s - o.bottomLeft, o.bottomLeft, Ce, xt, !0),
    e.lineTo(n + i - o.bottomRight, r + s),
    e.arc(n + i - o.bottomRight, r + s - o.bottomRight, o.bottomRight, xt, 0, !0),
    e.lineTo(n + i, r + o.topRight),
    e.arc(n + i - o.topRight, r + o.topRight, o.topRight, 0, -xt, !0),
    e.lineTo(n + o.topLeft, r)
}
const T3 = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/
  , O3 = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function A3(e, t) {
    const n = ("" + e).match(T3);
    if (!n || n[1] === "normal")
        return t * 1.2;
    switch (e = +n[2],
    n[3]) {
    case "px":
        return e;
    case "%":
        e /= 100;
        break
    }
    return t * e
}
const L3 = e=>+e || 0;
function R_(e, t) {
    const n = {}
      , r = Y(t)
      , i = r ? Object.keys(t) : t
      , s = Y(e) ? r ? o=>U(e[o], e[t[o]]) : o=>e[o] : ()=>e;
    for (const o of i)
        n[o] = L3(s(o));
    return n
}
function F_(e) {
    return R_(e, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    })
}
function Qr(e) {
    return R_(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
}
function Ze(e) {
    const t = F_(e);
    return t.width = t.left + t.right,
    t.height = t.top + t.bottom,
    t
}
function Me(e, t) {
    e = e || {},
    t = t || xe.font;
    let n = U(e.size, t.size);
    typeof n == "string" && (n = parseInt(n, 10));
    let r = U(e.style, t.style);
    r && !("" + r).match(O3) && (console.warn('Invalid font style specified: "' + r + '"'),
    r = void 0);
    const i = {
        family: U(e.family, t.family),
        lineHeight: A3(U(e.lineHeight, t.lineHeight), n),
        size: n,
        style: r,
        weight: U(e.weight, t.weight),
        string: ""
    };
    return i.string = _3(i),
    i
}
function Ia(e, t, n, r) {
    let i = !0, s, o, a;
    for (s = 0,
    o = e.length; s < o; ++s)
        if (a = e[s],
        a !== void 0 && (t !== void 0 && typeof a == "function" && (a = a(t),
        i = !1),
        n !== void 0 && ie(a) && (a = a[n % a.length],
        i = !1),
        a !== void 0))
            return r && !i && (r.cacheable = !1),
            a
}
function D3(e, t, n) {
    const {min: r, max: i} = e
      , s = KA(t, (i - r) / 2)
      , o = (a,l)=>n && a === 0 ? 0 : a + l;
    return {
        min: o(r, -Math.abs(s)),
        max: o(i, s)
    }
}
function _r(e, t) {
    return Object.assign(Object.create(e), t)
}
function kg(e, t=[""], n, r, i=()=>e[0]) {
    const s = n || e;
    typeof r > "u" && (r = B_("_fallback", e));
    const o = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: e,
        _rootScopes: s,
        _fallback: r,
        _getTarget: i,
        override: a=>kg([a, ...e], t, s, r)
    };
    return new Proxy(o,{
        deleteProperty(a, l) {
            return delete a[l],
            delete a._keys,
            delete e[0][l],
            !0
        },
        get(a, l) {
            return N_(a, l, ()=>$3(l, t, e, a))
        },
        getOwnPropertyDescriptor(a, l) {
            return Reflect.getOwnPropertyDescriptor(a._scopes[0], l)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(e[0])
        },
        has(a, l) {
            return Ny(a).includes(l)
        },
        ownKeys(a) {
            return Ny(a)
        },
        set(a, l, c) {
            const u = a._storage || (a._storage = i());
            return a[l] = u[l] = c,
            delete a._keys,
            !0
        }
    })
}
function ss(e, t, n, r) {
    const i = {
        _cacheable: !1,
        _proxy: e,
        _context: t,
        _subProxy: n,
        _stack: new Set,
        _descriptors: I_(e, r),
        setContext: s=>ss(e, s, n, r),
        override: s=>ss(e.override(s), t, n, r)
    };
    return new Proxy(i,{
        deleteProperty(s, o) {
            return delete s[o],
            delete e[o],
            !0
        },
        get(s, o, a) {
            return N_(s, o, ()=>F3(s, o, a))
        },
        getOwnPropertyDescriptor(s, o) {
            return s._descriptors.allKeys ? Reflect.has(e, o) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(e, o)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(e)
        },
        has(s, o) {
            return Reflect.has(e, o)
        },
        ownKeys() {
            return Reflect.ownKeys(e)
        },
        set(s, o, a) {
            return e[o] = a,
            delete s[o],
            !0
        }
    })
}
function I_(e, t={
    scriptable: !0,
    indexable: !0
}) {
    const {_scriptable: n=t.scriptable, _indexable: r=t.indexable, _allKeys: i=t.allKeys} = e;
    return {
        allKeys: i,
        scriptable: n,
        indexable: r,
        isScriptable: yr(n) ? n : ()=>n,
        isIndexable: yr(r) ? r : ()=>r
    }
}
const R3 = (e,t)=>e ? e + yg(t) : t
  , Cg = (e,t)=>Y(t) && e !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function N_(e, t, n) {
    if (Object.prototype.hasOwnProperty.call(e, t))
        return e[t];
    const r = n();
    return e[t] = r,
    r
}
function F3(e, t, n) {
    const {_proxy: r, _context: i, _subProxy: s, _descriptors: o} = e;
    let a = r[t];
    return yr(a) && o.isScriptable(t) && (a = I3(t, a, e, n)),
    ie(a) && a.length && (a = N3(t, a, e, o.isIndexable)),
    Cg(t, a) && (a = ss(a, i, s && s[t], o)),
    a
}
function I3(e, t, n, r) {
    const {_proxy: i, _context: s, _subProxy: o, _stack: a} = n;
    if (a.has(e))
        throw new Error("Recursion detected: " + Array.from(a).join("->") + "->" + e);
    a.add(e);
    let l = t(s, o || r);
    return a.delete(e),
    Cg(e, l) && (l = Pg(i._scopes, i, e, l)),
    l
}
function N3(e, t, n, r) {
    const {_proxy: i, _context: s, _subProxy: o, _descriptors: a} = n;
    if (typeof s.index < "u" && r(e))
        return t[s.index % t.length];
    if (Y(t[0])) {
        const l = t
          , c = i._scopes.filter(u=>u !== l);
        t = [];
        for (const u of l) {
            const d = Pg(c, i, e, u);
            t.push(ss(d, s, o && o[e], a))
        }
    }
    return t
}
function V_(e, t, n) {
    return yr(e) ? e(t, n) : e
}
const V3 = (e,t)=>e === !0 ? t : typeof e == "string" ? is(t, e) : void 0;
function B3(e, t, n, r, i) {
    for (const s of t) {
        const o = V3(n, s);
        if (o) {
            e.add(o);
            const a = V_(o._fallback, n, i);
            if (typeof a < "u" && a !== n && a !== r)
                return a
        } else if (o === !1 && typeof r < "u" && n !== r)
            return null
    }
    return !1
}
function Pg(e, t, n, r) {
    const i = t._rootScopes
      , s = V_(t._fallback, n, r)
      , o = [...e, ...i]
      , a = new Set;
    a.add(r);
    let l = Iy(a, o, n, s || n, r);
    return l === null || typeof s < "u" && s !== n && (l = Iy(a, o, s, l, r),
    l === null) ? !1 : kg(Array.from(a), [""], i, s, ()=>z3(t, n, r))
}
function Iy(e, t, n, r, i) {
    for (; n; )
        n = B3(e, t, n, r, i);
    return n
}
function z3(e, t, n) {
    const r = e._getTarget();
    t in r || (r[t] = {});
    const i = r[t];
    return ie(i) && Y(n) ? n : i || {}
}
function $3(e, t, n, r) {
    let i;
    for (const s of t)
        if (i = B_(R3(s, e), n),
        typeof i < "u")
            return Cg(e, i) ? Pg(n, r, e, i) : i
}
function B_(e, t) {
    for (const n of t) {
        if (!n)
            continue;
        const r = n[e];
        if (typeof r < "u")
            return r
    }
}
function Ny(e) {
    let t = e._keys;
    return t || (t = e._keys = H3(e._scopes)),
    t
}
function H3(e) {
    const t = new Set;
    for (const n of e)
        for (const r of Object.keys(n).filter(i=>!i.startsWith("_")))
            t.add(r);
    return Array.from(t)
}
const W3 = Number.EPSILON || 1e-14
  , os = (e,t)=>t < e.length && !e[t].skip && e[t]
  , z_ = e=>e === "x" ? "y" : "x";
function U3(e, t, n, r) {
    const i = e.skip ? t : e
      , s = t
      , o = n.skip ? t : n
      , a = mh(s, i)
      , l = mh(o, s);
    let c = a / (a + l)
      , u = l / (a + l);
    c = isNaN(c) ? 0 : c,
    u = isNaN(u) ? 0 : u;
    const d = r * c
      , f = r * u;
    return {
        previous: {
            x: s.x - d * (o.x - i.x),
            y: s.y - d * (o.y - i.y)
        },
        next: {
            x: s.x + f * (o.x - i.x),
            y: s.y + f * (o.y - i.y)
        }
    }
}
function G3(e, t, n) {
    const r = e.length;
    let i, s, o, a, l, c = os(e, 0);
    for (let u = 0; u < r - 1; ++u)
        if (l = c,
        c = os(e, u + 1),
        !(!l || !c)) {
            if (co(t[u], 0, W3)) {
                n[u] = n[u + 1] = 0;
                continue
            }
            i = n[u] / t[u],
            s = n[u + 1] / t[u],
            a = Math.pow(i, 2) + Math.pow(s, 2),
            !(a <= 9) && (o = 3 / Math.sqrt(a),
            n[u] = i * o * t[u],
            n[u + 1] = s * o * t[u])
        }
}
function Y3(e, t, n="x") {
    const r = z_(n)
      , i = e.length;
    let s, o, a, l = os(e, 0);
    for (let c = 0; c < i; ++c) {
        if (o = a,
        a = l,
        l = os(e, c + 1),
        !a)
            continue;
        const u = a[n]
          , d = a[r];
        o && (s = (u - o[n]) / 3,
        a[`cp1${n}`] = u - s,
        a[`cp1${r}`] = d - s * t[c]),
        l && (s = (l[n] - u) / 3,
        a[`cp2${n}`] = u + s,
        a[`cp2${r}`] = d + s * t[c])
    }
}
function X3(e, t="x") {
    const n = z_(t)
      , r = e.length
      , i = Array(r).fill(0)
      , s = Array(r);
    let o, a, l, c = os(e, 0);
    for (o = 0; o < r; ++o)
        if (a = l,
        l = c,
        c = os(e, o + 1),
        !!l) {
            if (c) {
                const u = c[t] - l[t];
                i[o] = u !== 0 ? (c[n] - l[n]) / u : 0
            }
            s[o] = a ? c ? cn(i[o - 1]) !== cn(i[o]) ? 0 : (i[o - 1] + i[o]) / 2 : i[o - 1] : i[o]
        }
    G3(e, i, s),
    Y3(e, s, t)
}
function Na(e, t, n) {
    return Math.max(Math.min(e, n), t)
}
function K3(e, t) {
    let n, r, i, s, o, a = jn(e[0], t);
    for (n = 0,
    r = e.length; n < r; ++n)
        o = s,
        s = a,
        a = n < r - 1 && jn(e[n + 1], t),
        s && (i = e[n],
        o && (i.cp1x = Na(i.cp1x, t.left, t.right),
        i.cp1y = Na(i.cp1y, t.top, t.bottom)),
        a && (i.cp2x = Na(i.cp2x, t.left, t.right),
        i.cp2y = Na(i.cp2y, t.top, t.bottom)))
}
function Q3(e, t, n, r, i) {
    let s, o, a, l;
    if (t.spanGaps && (e = e.filter(c=>!c.skip)),
    t.cubicInterpolationMode === "monotone")
        X3(e, i);
    else {
        let c = r ? e[e.length - 1] : e[0];
        for (s = 0,
        o = e.length; s < o; ++s)
            a = e[s],
            l = U3(c, a, e[Math.min(s + 1, o - (r ? 0 : 1)) % o], t.tension),
            a.cp1x = l.previous.x,
            a.cp1y = l.previous.y,
            a.cp2x = l.next.x,
            a.cp2y = l.next.y,
            c = a
    }
    t.capBezierPoints && K3(e, n)
}
function $_() {
    return typeof window < "u" && typeof document < "u"
}
function jg(e) {
    let t = e.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host),
    t
}
function hc(e, t, n) {
    let r;
    return typeof e == "string" ? (r = parseInt(e, 10),
    e.indexOf("%") !== -1 && (r = r / 100 * t.parentNode[n])) : r = e,
    r
}
const qc = e=>e.ownerDocument.defaultView.getComputedStyle(e, null);
function Z3(e, t) {
    return qc(e).getPropertyValue(t)
}
const q3 = ["top", "right", "bottom", "left"];
function Zr(e, t, n) {
    const r = {};
    n = n ? "-" + n : "";
    for (let i = 0; i < 4; i++) {
        const s = q3[i];
        r[s] = parseFloat(e[t + "-" + s + n]) || 0
    }
    return r.width = r.left + r.right,
    r.height = r.top + r.bottom,
    r
}
const J3 = (e,t,n)=>(e > 0 || t > 0) && (!n || !n.shadowRoot);
function eL(e, t) {
    const n = e.touches
      , r = n && n.length ? n[0] : e
      , {offsetX: i, offsetY: s} = r;
    let o = !1, a, l;
    if (J3(i, s, e.target))
        a = i,
        l = s;
    else {
        const c = t.getBoundingClientRect();
        a = r.clientX - c.left,
        l = r.clientY - c.top,
        o = !0
    }
    return {
        x: a,
        y: l,
        box: o
    }
}
function Nr(e, t) {
    if ("native"in e)
        return e;
    const {canvas: n, currentDevicePixelRatio: r} = t
      , i = qc(n)
      , s = i.boxSizing === "border-box"
      , o = Zr(i, "padding")
      , a = Zr(i, "border", "width")
      , {x: l, y: c, box: u} = eL(e, n)
      , d = o.left + (u && a.left)
      , f = o.top + (u && a.top);
    let {width: p, height: g} = t;
    return s && (p -= o.width + a.width,
    g -= o.height + a.height),
    {
        x: Math.round((l - d) / p * n.width / r),
        y: Math.round((c - f) / g * n.height / r)
    }
}
function tL(e, t, n) {
    let r, i;
    if (t === void 0 || n === void 0) {
        const s = jg(e);
        if (!s)
            t = e.clientWidth,
            n = e.clientHeight;
        else {
            const o = s.getBoundingClientRect()
              , a = qc(s)
              , l = Zr(a, "border", "width")
              , c = Zr(a, "padding");
            t = o.width - c.width - l.width,
            n = o.height - c.height - l.height,
            r = hc(a.maxWidth, s, "clientWidth"),
            i = hc(a.maxHeight, s, "clientHeight")
        }
    }
    return {
        width: t,
        height: n,
        maxWidth: r || dc,
        maxHeight: i || dc
    }
}
const Va = e=>Math.round(e * 10) / 10;
function nL(e, t, n, r) {
    const i = qc(e)
      , s = Zr(i, "margin")
      , o = hc(i.maxWidth, e, "clientWidth") || dc
      , a = hc(i.maxHeight, e, "clientHeight") || dc
      , l = tL(e, t, n);
    let {width: c, height: u} = l;
    if (i.boxSizing === "content-box") {
        const f = Zr(i, "border", "width")
          , p = Zr(i, "padding");
        c -= p.width + f.width,
        u -= p.height + f.height
    }
    return c = Math.max(0, c - s.width),
    u = Math.max(0, r ? c / r : u - s.height),
    c = Va(Math.min(c, o, l.maxWidth)),
    u = Va(Math.min(u, a, l.maxHeight)),
    c && !u && (u = Va(c / 2)),
    (t !== void 0 || n !== void 0) && r && l.height && u > l.height && (u = l.height,
    c = Va(Math.floor(u * r))),
    {
        width: c,
        height: u
    }
}
function Vy(e, t, n) {
    const r = t || 1
      , i = Math.floor(e.height * r)
      , s = Math.floor(e.width * r);
    e.height = Math.floor(e.height),
    e.width = Math.floor(e.width);
    const o = e.canvas;
    return o.style && (n || !o.style.height && !o.style.width) && (o.style.height = `${e.height}px`,
    o.style.width = `${e.width}px`),
    e.currentDevicePixelRatio !== r || o.height !== i || o.width !== s ? (e.currentDevicePixelRatio = r,
    o.height = i,
    o.width = s,
    e.ctx.setTransform(r, 0, 0, r, 0, 0),
    !0) : !1
}
const rL = function() {
    let e = !1;
    try {
        const t = {
            get passive() {
                return e = !0,
                !1
            }
        };
        window.addEventListener("test", null, t),
        window.removeEventListener("test", null, t)
    } catch {}
    return e
}();
function By(e, t) {
    const n = Z3(e, t)
      , r = n && n.match(/^(\d+)(\.\d+)?px$/);
    return r ? +r[1] : void 0
}
function Vr(e, t, n, r) {
    return {
        x: e.x + n * (t.x - e.x),
        y: e.y + n * (t.y - e.y)
    }
}
function iL(e, t, n, r) {
    return {
        x: e.x + n * (t.x - e.x),
        y: r === "middle" ? n < .5 ? e.y : t.y : r === "after" ? n < 1 ? e.y : t.y : n > 0 ? t.y : e.y
    }
}
function sL(e, t, n, r) {
    const i = {
        x: e.cp2x,
        y: e.cp2y
    }
      , s = {
        x: t.cp1x,
        y: t.cp1y
    }
      , o = Vr(e, i, n)
      , a = Vr(i, s, n)
      , l = Vr(s, t, n)
      , c = Vr(o, a, n)
      , u = Vr(a, l, n);
    return Vr(c, u, n)
}
const oL = function(e, t) {
    return {
        x(n) {
            return e + e + t - n
        },
        setWidth(n) {
            t = n
        },
        textAlign(n) {
            return n === "center" ? n : n === "right" ? "left" : "right"
        },
        xPlus(n, r) {
            return n - r
        },
        leftForLtr(n, r) {
            return n - r
        }
    }
}
  , aL = function() {
    return {
        x(e) {
            return e
        },
        setWidth(e) {},
        textAlign(e) {
            return e
        },
        xPlus(e, t) {
            return e + t
        },
        leftForLtr(e, t) {
            return e
        }
    }
};
function Gi(e, t, n) {
    return e ? oL(t, n) : aL()
}
function H_(e, t) {
    let n, r;
    (t === "ltr" || t === "rtl") && (n = e.canvas.style,
    r = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")],
    n.setProperty("direction", t, "important"),
    e.prevTextDirection = r)
}
function W_(e, t) {
    t !== void 0 && (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]))
}
function U_(e) {
    return e === "angle" ? {
        between: E_,
        compare: o3,
        normalize: vt
    } : {
        between: qn,
        compare: (t,n)=>t - n,
        normalize: t=>t
    }
}
function zy({start: e, end: t, count: n, loop: r, style: i}) {
    return {
        start: e % n,
        end: t % n,
        loop: r && (t - e + 1) % n === 0,
        style: i
    }
}
function lL(e, t, n) {
    const {property: r, start: i, end: s} = n
      , {between: o, normalize: a} = U_(r)
      , l = t.length;
    let {start: c, end: u, loop: d} = e, f, p;
    if (d) {
        for (c += l,
        u += l,
        f = 0,
        p = l; f < p && o(a(t[c % l][r]), i, s); ++f)
            c--,
            u--;
        c %= l,
        u %= l
    }
    return u < c && (u += l),
    {
        start: c,
        end: u,
        loop: d,
        style: e.style
    }
}
function G_(e, t, n) {
    if (!n)
        return [e];
    const {property: r, start: i, end: s} = n
      , o = t.length
      , {compare: a, between: l, normalize: c} = U_(r)
      , {start: u, end: d, loop: f, style: p} = lL(e, t, n)
      , g = [];
    let v = !1, S = null, y, m, b;
    const w = ()=>l(i, b, y) && a(i, b) !== 0
      , k = ()=>a(s, y) === 0 || l(s, b, y)
      , P = ()=>v || w()
      , _ = ()=>!v || k();
    for (let C = u, j = u; C <= d; ++C)
        m = t[C % o],
        !m.skip && (y = c(m[r]),
        y !== b && (v = l(y, i, s),
        S === null && P() && (S = a(y, i) === 0 ? C : j),
        S !== null && _() && (g.push(zy({
            start: S,
            end: C,
            loop: f,
            count: o,
            style: p
        })),
        S = null),
        j = C,
        b = y));
    return S !== null && g.push(zy({
        start: S,
        end: d,
        loop: f,
        count: o,
        style: p
    })),
    g
}
function Y_(e, t) {
    const n = []
      , r = e.segments;
    for (let i = 0; i < r.length; i++) {
        const s = G_(r[i], e.points, t);
        s.length && n.push(...s)
    }
    return n
}
function cL(e, t, n, r) {
    let i = 0
      , s = t - 1;
    if (n && !r)
        for (; i < t && !e[i].skip; )
            i++;
    for (; i < t && e[i].skip; )
        i++;
    for (i %= t,
    n && (s += i); s > i && e[s % t].skip; )
        s--;
    return s %= t,
    {
        start: i,
        end: s
    }
}
function uL(e, t, n, r) {
    const i = e.length
      , s = [];
    let o = t, a = e[t], l;
    for (l = t + 1; l <= n; ++l) {
        const c = e[l % i];
        c.skip || c.stop ? a.skip || (r = !1,
        s.push({
            start: t % i,
            end: (l - 1) % i,
            loop: r
        }),
        t = o = c.stop ? l : null) : (o = l,
        a.skip && (t = l)),
        a = c
    }
    return o !== null && s.push({
        start: t % i,
        end: o % i,
        loop: r
    }),
    s
}
function dL(e, t) {
    const n = e.points
      , r = e.options.spanGaps
      , i = n.length;
    if (!i)
        return [];
    const s = !!e._loop
      , {start: o, end: a} = cL(n, i, s, r);
    if (r === !0)
        return $y(e, [{
            start: o,
            end: a,
            loop: s
        }], n, t);
    const l = a < o ? a + i : a
      , c = !!e._fullLoop && o === 0 && a === i - 1;
    return $y(e, uL(n, o, l, c), n, t)
}
function $y(e, t, n, r) {
    return !r || !r.setContext || !n ? t : fL(e, t, n, r)
}
function fL(e, t, n, r) {
    const i = e._chart.getContext()
      , s = Hy(e.options)
      , {_datasetIndex: o, options: {spanGaps: a}} = e
      , l = n.length
      , c = [];
    let u = s
      , d = t[0].start
      , f = d;
    function p(g, v, S, y) {
        const m = a ? -1 : 1;
        if (g !== v) {
            for (g += l; n[g % l].skip; )
                g -= m;
            for (; n[v % l].skip; )
                v += m;
            g % l !== v % l && (c.push({
                start: g % l,
                end: v % l,
                loop: S,
                style: y
            }),
            u = y,
            d = v % l)
        }
    }
    for (const g of t) {
        d = a ? d : g.start;
        let v = n[d % l], S;
        for (f = d + 1; f <= g.end; f++) {
            const y = n[f % l];
            S = Hy(r.setContext(_r(i, {
                type: "segment",
                p0: v,
                p1: y,
                p0DataIndex: (f - 1) % l,
                p1DataIndex: f % l,
                datasetIndex: o
            }))),
            hL(S, u) && p(d, f - 1, g.loop, u),
            v = y,
            u = S
        }
        d < f - 1 && p(d, f - 1, g.loop, u)
    }
    return c
}
function Hy(e) {
    return {
        backgroundColor: e.backgroundColor,
        borderCapStyle: e.borderCapStyle,
        borderDash: e.borderDash,
        borderDashOffset: e.borderDashOffset,
        borderJoinStyle: e.borderJoinStyle,
        borderWidth: e.borderWidth,
        borderColor: e.borderColor
    }
}
function hL(e, t) {
    if (!t)
        return !1;
    const n = []
      , r = function(i, s) {
        return wg(s) ? (n.includes(s) || n.push(s),
        n.indexOf(s)) : s
    };
    return JSON.stringify(e, r) !== JSON.stringify(t, r)
}
/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */
class pL {
    constructor() {
        this._request = null,
        this._charts = new Map,
        this._running = !1,
        this._lastDate = void 0
    }
    _notify(t, n, r, i) {
        const s = n.listeners[i]
          , o = n.duration;
        s.forEach(a=>a({
            chart: t,
            initial: n.initial,
            numSteps: o,
            currentStep: Math.min(r - n.start, o)
        }))
    }
    _refresh() {
        this._request || (this._running = !0,
        this._request = O_.call(window, ()=>{
            this._update(),
            this._request = null,
            this._running && this._refresh()
        }
        ))
    }
    _update(t=Date.now()) {
        let n = 0;
        this._charts.forEach((r,i)=>{
            if (!r.running || !r.items.length)
                return;
            const s = r.items;
            let o = s.length - 1, a = !1, l;
            for (; o >= 0; --o)
                l = s[o],
                l._active ? (l._total > r.duration && (r.duration = l._total),
                l.tick(t),
                a = !0) : (s[o] = s[s.length - 1],
                s.pop());
            a && (i.draw(),
            this._notify(i, r, t, "progress")),
            s.length || (r.running = !1,
            this._notify(i, r, t, "complete"),
            r.initial = !1),
            n += s.length
        }
        ),
        this._lastDate = t,
        n === 0 && (this._running = !1)
    }
    _getAnims(t) {
        const n = this._charts;
        let r = n.get(t);
        return r || (r = {
            running: !1,
            initial: !0,
            items: [],
            listeners: {
                complete: [],
                progress: []
            }
        },
        n.set(t, r)),
        r
    }
    listen(t, n, r) {
        this._getAnims(t).listeners[n].push(r)
    }
    add(t, n) {
        !n || !n.length || this._getAnims(t).items.push(...n)
    }
    has(t) {
        return this._getAnims(t).items.length > 0
    }
    start(t) {
        const n = this._charts.get(t);
        n && (n.running = !0,
        n.start = Date.now(),
        n.duration = n.items.reduce((r,i)=>Math.max(r, i._duration), 0),
        this._refresh())
    }
    running(t) {
        if (!this._running)
            return !1;
        const n = this._charts.get(t);
        return !(!n || !n.running || !n.items.length)
    }
    stop(t) {
        const n = this._charts.get(t);
        if (!n || !n.items.length)
            return;
        const r = n.items;
        let i = r.length - 1;
        for (; i >= 0; --i)
            r[i].cancel();
        n.items = [],
        this._notify(t, n, Date.now(), "complete")
    }
    remove(t) {
        return this._charts.delete(t)
    }
}
var yn = new pL;
const Wy = "transparent"
  , gL = {
    boolean(e, t, n) {
        return n > .5 ? t : e
    },
    color(e, t, n) {
        const r = Dy(e || Wy)
          , i = r.valid && Dy(t || Wy);
        return i && i.valid ? i.mix(r, n).hexString() : t
    },
    number(e, t, n) {
        return e + (t - e) * n
    }
};
class mL {
    constructor(t, n, r, i) {
        const s = n[r];
        i = Ia([t.to, i, s, t.from]);
        const o = Ia([t.from, s, i]);
        this._active = !0,
        this._fn = t.fn || gL[t.type || typeof o],
        this._easing = uo[t.easing] || uo.linear,
        this._start = Math.floor(Date.now() + (t.delay || 0)),
        this._duration = this._total = Math.floor(t.duration),
        this._loop = !!t.loop,
        this._target = n,
        this._prop = r,
        this._from = o,
        this._to = i,
        this._promises = void 0
    }
    active() {
        return this._active
    }
    update(t, n, r) {
        if (this._active) {
            this._notify(!1);
            const i = this._target[this._prop]
              , s = r - this._start
              , o = this._duration - s;
            this._start = r,
            this._duration = Math.floor(Math.max(o, t.duration)),
            this._total += s,
            this._loop = !!t.loop,
            this._to = Ia([t.to, n, i, t.from]),
            this._from = Ia([t.from, i, n])
        }
    }
    cancel() {
        this._active && (this.tick(Date.now()),
        this._active = !1,
        this._notify(!1))
    }
    tick(t) {
        const n = t - this._start
          , r = this._duration
          , i = this._prop
          , s = this._from
          , o = this._loop
          , a = this._to;
        let l;
        if (this._active = s !== a && (o || n < r),
        !this._active) {
            this._target[i] = a,
            this._notify(!0);
            return
        }
        if (n < 0) {
            this._target[i] = s;
            return
        }
        l = n / r % 2,
        l = o && l > 1 ? 2 - l : l,
        l = this._easing(Math.min(1, Math.max(0, l))),
        this._target[i] = this._fn(s, a, l)
    }
    wait() {
        const t = this._promises || (this._promises = []);
        return new Promise((n,r)=>{
            t.push({
                res: n,
                rej: r
            })
        }
        )
    }
    _notify(t) {
        const n = t ? "res" : "rej"
          , r = this._promises || [];
        for (let i = 0; i < r.length; i++)
            r[i][n]()
    }
}
class X_ {
    constructor(t, n) {
        this._chart = t,
        this._properties = new Map,
        this.configure(n)
    }
    configure(t) {
        if (!Y(t))
            return;
        const n = Object.keys(xe.animation)
          , r = this._properties;
        Object.getOwnPropertyNames(t).forEach(i=>{
            const s = t[i];
            if (!Y(s))
                return;
            const o = {};
            for (const a of n)
                o[a] = s[a];
            (ie(s.properties) && s.properties || [i]).forEach(a=>{
                (a === i || !r.has(a)) && r.set(a, o)
            }
            )
        }
        )
    }
    _animateOptions(t, n) {
        const r = n.options
          , i = yL(t, r);
        if (!i)
            return [];
        const s = this._createAnimations(i, r);
        return r.$shared && vL(t.options.$animations, r).then(()=>{
            t.options = r
        }
        , ()=>{}
        ),
        s
    }
    _createAnimations(t, n) {
        const r = this._properties
          , i = []
          , s = t.$animations || (t.$animations = {})
          , o = Object.keys(n)
          , a = Date.now();
        let l;
        for (l = o.length - 1; l >= 0; --l) {
            const c = o[l];
            if (c.charAt(0) === "$")
                continue;
            if (c === "options") {
                i.push(...this._animateOptions(t, n));
                continue
            }
            const u = n[c];
            let d = s[c];
            const f = r.get(c);
            if (d)
                if (f && d.active()) {
                    d.update(f, u, a);
                    continue
                } else
                    d.cancel();
            if (!f || !f.duration) {
                t[c] = u;
                continue
            }
            s[c] = d = new mL(f,t,c,u),
            i.push(d)
        }
        return i
    }
    update(t, n) {
        if (this._properties.size === 0) {
            Object.assign(t, n);
            return
        }
        const r = this._createAnimations(t, n);
        if (r.length)
            return yn.add(this._chart, r),
            !0
    }
}
function vL(e, t) {
    const n = []
      , r = Object.keys(t);
    for (let i = 0; i < r.length; i++) {
        const s = e[r[i]];
        s && s.active() && n.push(s.wait())
    }
    return Promise.all(n)
}
function yL(e, t) {
    if (!t)
        return;
    let n = e.options;
    if (!n) {
        e.options = t;
        return
    }
    return n.$shared && (e.options = n = Object.assign({}, n, {
        $shared: !1,
        $animations: {}
    })),
    n
}
function Uy(e, t) {
    const n = e && e.options || {}
      , r = n.reverse
      , i = n.min === void 0 ? t : 0
      , s = n.max === void 0 ? t : 0;
    return {
        start: r ? s : i,
        end: r ? i : s
    }
}
function xL(e, t, n) {
    if (n === !1)
        return !1;
    const r = Uy(e, n)
      , i = Uy(t, n);
    return {
        top: i.end,
        right: r.end,
        bottom: i.start,
        left: r.start
    }
}
function bL(e) {
    let t, n, r, i;
    return Y(e) ? (t = e.top,
    n = e.right,
    r = e.bottom,
    i = e.left) : t = n = r = i = e,
    {
        top: t,
        right: n,
        bottom: r,
        left: i,
        disabled: e === !1
    }
}
function K_(e, t) {
    const n = []
      , r = e._getSortedDatasetMetas(t);
    let i, s;
    for (i = 0,
    s = r.length; i < s; ++i)
        n.push(r[i].index);
    return n
}
function Gy(e, t, n, r={}) {
    const i = e.keys
      , s = r.mode === "single";
    let o, a, l, c;
    if (t !== null) {
        for (o = 0,
        a = i.length; o < a; ++o) {
            if (l = +i[o],
            l === n) {
                if (r.all)
                    continue;
                break
            }
            c = e.values[l],
            ye(c) && (s || t === 0 || cn(t) === cn(c)) && (t += c)
        }
        return t
    }
}
function SL(e) {
    const t = Object.keys(e)
      , n = new Array(t.length);
    let r, i, s;
    for (r = 0,
    i = t.length; r < i; ++r)
        s = t[r],
        n[r] = {
            x: s,
            y: e[s]
        };
    return n
}
function Yy(e, t) {
    const n = e && e.options.stacked;
    return n || n === void 0 && t.stack !== void 0
}
function wL(e, t, n) {
    return `${e.id}.${t.id}.${n.stack || n.type}`
}
function _L(e) {
    const {min: t, max: n, minDefined: r, maxDefined: i} = e.getUserBounds();
    return {
        min: r ? t : Number.NEGATIVE_INFINITY,
        max: i ? n : Number.POSITIVE_INFINITY
    }
}
function kL(e, t, n) {
    const r = e[t] || (e[t] = {});
    return r[n] || (r[n] = {})
}
function Xy(e, t, n, r) {
    for (const i of t.getMatchingVisibleMetas(r).reverse()) {
        const s = e[i.index];
        if (n && s > 0 || !n && s < 0)
            return i.index
    }
    return null
}
function Ky(e, t) {
    const {chart: n, _cachedMeta: r} = e
      , i = n._stacks || (n._stacks = {})
      , {iScale: s, vScale: o, index: a} = r
      , l = s.axis
      , c = o.axis
      , u = wL(s, o, r)
      , d = t.length;
    let f;
    for (let p = 0; p < d; ++p) {
        const g = t[p]
          , {[l]: v, [c]: S} = g
          , y = g._stacks || (g._stacks = {});
        f = y[c] = kL(i, u, v),
        f[a] = S,
        f._top = Xy(f, o, !0, r.type),
        f._bottom = Xy(f, o, !1, r.type);
        const m = f._visualValues || (f._visualValues = {});
        m[a] = S
    }
}
function hd(e, t) {
    const n = e.scales;
    return Object.keys(n).filter(r=>n[r].axis === t).shift()
}
function CL(e, t) {
    return _r(e, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: "default",
        type: "dataset"
    })
}
function PL(e, t, n) {
    return _r(e, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: n,
        index: t,
        mode: "default",
        type: "data"
    })
}
function As(e, t) {
    const n = e.controller.index
      , r = e.vScale && e.vScale.axis;
    if (r) {
        t = t || e._parsed;
        for (const i of t) {
            const s = i._stacks;
            if (!s || s[r] === void 0 || s[r][n] === void 0)
                return;
            delete s[r][n],
            s[r]._visualValues !== void 0 && s[r]._visualValues[n] !== void 0 && delete s[r]._visualValues[n]
        }
    }
}
const pd = e=>e === "reset" || e === "none"
  , Qy = (e,t)=>t ? e : Object.assign({}, e)
  , jL = (e,t,n)=>e && !t.hidden && t._stacked && {
    keys: K_(n, !0),
    values: null
};
class Yi {
    constructor(t, n) {
        this.chart = t,
        this._ctx = t.ctx,
        this.index = n,
        this._cachedDataOpts = {},
        this._cachedMeta = this.getMeta(),
        this._type = this._cachedMeta.type,
        this.options = void 0,
        this._parsing = !1,
        this._data = void 0,
        this._objectData = void 0,
        this._sharedOptions = void 0,
        this._drawStart = void 0,
        this._drawCount = void 0,
        this.enableOptionSharing = !1,
        this.supportsDecimation = !1,
        this.$context = void 0,
        this._syncList = [],
        this.datasetElementType = new.target.datasetElementType,
        this.dataElementType = new.target.dataElementType,
        this.initialize()
    }
    initialize() {
        const t = this._cachedMeta;
        this.configure(),
        this.linkScales(),
        t._stacked = Yy(t.vScale, t),
        this.addElements(),
        this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
    }
    updateIndex(t) {
        this.index !== t && As(this._cachedMeta),
        this.index = t
    }
    linkScales() {
        const t = this.chart
          , n = this._cachedMeta
          , r = this.getDataset()
          , i = (d,f,p,g)=>d === "x" ? f : d === "r" ? g : p
          , s = n.xAxisID = U(r.xAxisID, hd(t, "x"))
          , o = n.yAxisID = U(r.yAxisID, hd(t, "y"))
          , a = n.rAxisID = U(r.rAxisID, hd(t, "r"))
          , l = n.indexAxis
          , c = n.iAxisID = i(l, s, o, a)
          , u = n.vAxisID = i(l, o, s, a);
        n.xScale = this.getScaleForId(s),
        n.yScale = this.getScaleForId(o),
        n.rScale = this.getScaleForId(a),
        n.iScale = this.getScaleForId(c),
        n.vScale = this.getScaleForId(u)
    }
    getDataset() {
        return this.chart.data.datasets[this.index]
    }
    getMeta() {
        return this.chart.getDatasetMeta(this.index)
    }
    getScaleForId(t) {
        return this.chart.scales[t]
    }
    _getOtherScale(t) {
        const n = this._cachedMeta;
        return t === n.iScale ? n.vScale : n.iScale
    }
    reset() {
        this._update("reset")
    }
    _destroy() {
        const t = this._cachedMeta;
        this._data && Oy(this._data, this),
        t._stacked && As(t)
    }
    _dataCheck() {
        const t = this.getDataset()
          , n = t.data || (t.data = [])
          , r = this._data;
        if (Y(n))
            this._data = SL(n);
        else if (r !== n) {
            if (r) {
                Oy(r, this);
                const i = this._cachedMeta;
                As(i),
                i._parsed = []
            }
            n && Object.isExtensible(n) && u3(n, this),
            this._syncList = [],
            this._data = n
        }
    }
    addElements() {
        const t = this._cachedMeta;
        this._dataCheck(),
        this.datasetElementType && (t.dataset = new this.datasetElementType)
    }
    buildOrUpdateElements(t) {
        const n = this._cachedMeta
          , r = this.getDataset();
        let i = !1;
        this._dataCheck();
        const s = n._stacked;
        n._stacked = Yy(n.vScale, n),
        n.stack !== r.stack && (i = !0,
        As(n),
        n.stack = r.stack),
        this._resyncElements(t),
        (i || s !== n._stacked) && Ky(this, n._parsed)
    }
    configure() {
        const t = this.chart.config
          , n = t.datasetScopeKeys(this._type)
          , r = t.getOptionScopes(this.getDataset(), n, !0);
        this.options = t.createResolver(r, this.getContext()),
        this._parsing = this.options.parsing,
        this._cachedDataOpts = {}
    }
    parse(t, n) {
        const {_cachedMeta: r, _data: i} = this
          , {iScale: s, _stacked: o} = r
          , a = s.axis;
        let l = t === 0 && n === i.length ? !0 : r._sorted, c = t > 0 && r._parsed[t - 1], u, d, f;
        if (this._parsing === !1)
            r._parsed = i,
            r._sorted = !0,
            f = i;
        else {
            ie(i[t]) ? f = this.parseArrayData(r, i, t, n) : Y(i[t]) ? f = this.parseObjectData(r, i, t, n) : f = this.parsePrimitiveData(r, i, t, n);
            const p = ()=>d[a] === null || c && d[a] < c[a];
            for (u = 0; u < n; ++u)
                r._parsed[u + t] = d = f[u],
                l && (p() && (l = !1),
                c = d);
            r._sorted = l
        }
        o && Ky(this, f)
    }
    parsePrimitiveData(t, n, r, i) {
        const {iScale: s, vScale: o} = t
          , a = s.axis
          , l = o.axis
          , c = s.getLabels()
          , u = s === o
          , d = new Array(i);
        let f, p, g;
        for (f = 0,
        p = i; f < p; ++f)
            g = f + r,
            d[f] = {
                [a]: u || s.parse(c[g], g),
                [l]: o.parse(n[g], g)
            };
        return d
    }
    parseArrayData(t, n, r, i) {
        const {xScale: s, yScale: o} = t
          , a = new Array(i);
        let l, c, u, d;
        for (l = 0,
        c = i; l < c; ++l)
            u = l + r,
            d = n[u],
            a[l] = {
                x: s.parse(d[0], u),
                y: o.parse(d[1], u)
            };
        return a
    }
    parseObjectData(t, n, r, i) {
        const {xScale: s, yScale: o} = t
          , {xAxisKey: a="x", yAxisKey: l="y"} = this._parsing
          , c = new Array(i);
        let u, d, f, p;
        for (u = 0,
        d = i; u < d; ++u)
            f = u + r,
            p = n[f],
            c[u] = {
                x: s.parse(is(p, a), f),
                y: o.parse(is(p, l), f)
            };
        return c
    }
    getParsed(t) {
        return this._cachedMeta._parsed[t]
    }
    getDataElement(t) {
        return this._cachedMeta.data[t]
    }
    applyStack(t, n, r) {
        const i = this.chart
          , s = this._cachedMeta
          , o = n[t.axis]
          , a = {
            keys: K_(i, !0),
            values: n._stacks[t.axis]._visualValues
        };
        return Gy(a, o, s.index, {
            mode: r
        })
    }
    updateRangeFromParsed(t, n, r, i) {
        const s = r[n.axis];
        let o = s === null ? NaN : s;
        const a = i && r._stacks[n.axis];
        i && a && (i.values = a,
        o = Gy(i, s, this._cachedMeta.index)),
        t.min = Math.min(t.min, o),
        t.max = Math.max(t.max, o)
    }
    getMinMax(t, n) {
        const r = this._cachedMeta
          , i = r._parsed
          , s = r._sorted && t === r.iScale
          , o = i.length
          , a = this._getOtherScale(t)
          , l = jL(n, r, this.chart)
          , c = {
            min: Number.POSITIVE_INFINITY,
            max: Number.NEGATIVE_INFINITY
        }
          , {min: u, max: d} = _L(a);
        let f, p;
        function g() {
            p = i[f];
            const v = p[a.axis];
            return !ye(p[t.axis]) || u > v || d < v
        }
        for (f = 0; f < o && !(!g() && (this.updateRangeFromParsed(c, t, p, l),
        s)); ++f)
            ;
        if (s) {
            for (f = o - 1; f >= 0; --f)
                if (!g()) {
                    this.updateRangeFromParsed(c, t, p, l);
                    break
                }
        }
        return c
    }
    getAllParsedValues(t) {
        const n = this._cachedMeta._parsed
          , r = [];
        let i, s, o;
        for (i = 0,
        s = n.length; i < s; ++i)
            o = n[i][t.axis],
            ye(o) && r.push(o);
        return r
    }
    getMaxOverflow() {
        return !1
    }
    getLabelAndValue(t) {
        const n = this._cachedMeta
          , r = n.iScale
          , i = n.vScale
          , s = this.getParsed(t);
        return {
            label: r ? "" + r.getLabelForValue(s[r.axis]) : "",
            value: i ? "" + i.getLabelForValue(s[i.axis]) : ""
        }
    }
    _update(t) {
        const n = this._cachedMeta;
        this.update(t || "default"),
        n._clip = bL(U(this.options.clip, xL(n.xScale, n.yScale, this.getMaxOverflow())))
    }
    update(t) {}
    draw() {
        const t = this._ctx
          , n = this.chart
          , r = this._cachedMeta
          , i = r.data || []
          , s = n.chartArea
          , o = []
          , a = this._drawStart || 0
          , l = this._drawCount || i.length - a
          , c = this.options.drawActiveElementsOnTop;
        let u;
        for (r.dataset && r.dataset.draw(t, s, a, l),
        u = a; u < a + l; ++u) {
            const d = i[u];
            d.hidden || (d.active && c ? o.push(d) : d.draw(t, s))
        }
        for (u = 0; u < o.length; ++u)
            o[u].draw(t, s)
    }
    getStyle(t, n) {
        const r = n ? "active" : "default";
        return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(r) : this.resolveDataElementOptions(t || 0, r)
    }
    getContext(t, n, r) {
        const i = this.getDataset();
        let s;
        if (t >= 0 && t < this._cachedMeta.data.length) {
            const o = this._cachedMeta.data[t];
            s = o.$context || (o.$context = PL(this.getContext(), t, o)),
            s.parsed = this.getParsed(t),
            s.raw = i.data[t],
            s.index = s.dataIndex = t
        } else
            s = this.$context || (this.$context = CL(this.chart.getContext(), this.index)),
            s.dataset = i,
            s.index = s.datasetIndex = this.index;
        return s.active = !!n,
        s.mode = r,
        s
    }
    resolveDatasetElementOptions(t) {
        return this._resolveElementOptions(this.datasetElementType.id, t)
    }
    resolveDataElementOptions(t, n) {
        return this._resolveElementOptions(this.dataElementType.id, n, t)
    }
    _resolveElementOptions(t, n="default", r) {
        const i = n === "active"
          , s = this._cachedDataOpts
          , o = t + "-" + n
          , a = s[o]
          , l = this.enableOptionSharing && Bo(r);
        if (a)
            return Qy(a, l);
        const c = this.chart.config
          , u = c.datasetElementScopeKeys(this._type, t)
          , d = i ? [`${t}Hover`, "hover", t, ""] : [t, ""]
          , f = c.getOptionScopes(this.getDataset(), u)
          , p = Object.keys(xe.elements[t])
          , g = ()=>this.getContext(r, i, n)
          , v = c.resolveNamedOptions(f, p, g, d);
        return v.$shared && (v.$shared = l,
        s[o] = Object.freeze(Qy(v, l))),
        v
    }
    _resolveAnimations(t, n, r) {
        const i = this.chart
          , s = this._cachedDataOpts
          , o = `animation-${n}`
          , a = s[o];
        if (a)
            return a;
        let l;
        if (i.options.animation !== !1) {
            const u = this.chart.config
              , d = u.datasetAnimationScopeKeys(this._type, n)
              , f = u.getOptionScopes(this.getDataset(), d);
            l = u.createResolver(f, this.getContext(t, r, n))
        }
        const c = new X_(i,l && l.animations);
        return l && l._cacheable && (s[o] = Object.freeze(c)),
        c
    }
    getSharedOptions(t) {
        if (t.$shared)
            return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
    }
    includeOptions(t, n) {
        return !n || pd(t) || this.chart._animationsDisabled
    }
    _getSharedOptions(t, n) {
        const r = this.resolveDataElementOptions(t, n)
          , i = this._sharedOptions
          , s = this.getSharedOptions(r)
          , o = this.includeOptions(n, s) || s !== i;
        return this.updateSharedOptions(s, n, r),
        {
            sharedOptions: s,
            includeOptions: o
        }
    }
    updateElement(t, n, r, i) {
        pd(i) ? Object.assign(t, r) : this._resolveAnimations(n, i).update(t, r)
    }
    updateSharedOptions(t, n, r) {
        t && !pd(n) && this._resolveAnimations(void 0, n).update(t, r)
    }
    _setStyle(t, n, r, i) {
        t.active = i;
        const s = this.getStyle(n, i);
        this._resolveAnimations(n, r, i).update(t, {
            options: !i && this.getSharedOptions(s) || s
        })
    }
    removeHoverStyle(t, n, r) {
        this._setStyle(t, r, "active", !1)
    }
    setHoverStyle(t, n, r) {
        this._setStyle(t, r, "active", !0)
    }
    _removeDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !1)
    }
    _setDatasetHoverStyle() {
        const t = this._cachedMeta.dataset;
        t && this._setStyle(t, void 0, "active", !0)
    }
    _resyncElements(t) {
        const n = this._data
          , r = this._cachedMeta.data;
        for (const [a,l,c] of this._syncList)
            this[a](l, c);
        this._syncList = [];
        const i = r.length
          , s = n.length
          , o = Math.min(s, i);
        o && this.parse(0, o),
        s > i ? this._insertElements(i, s - i, t) : s < i && this._removeElements(s, i - s)
    }
    _insertElements(t, n, r=!0) {
        const i = this._cachedMeta
          , s = i.data
          , o = t + n;
        let a;
        const l = c=>{
            for (c.length += n,
            a = c.length - 1; a >= o; a--)
                c[a] = c[a - n]
        }
        ;
        for (l(s),
        a = t; a < o; ++a)
            s[a] = new this.dataElementType;
        this._parsing && l(i._parsed),
        this.parse(t, n),
        r && this.updateElements(s, t, n, "reset")
    }
    updateElements(t, n, r, i) {}
    _removeElements(t, n) {
        const r = this._cachedMeta;
        if (this._parsing) {
            const i = r._parsed.splice(t, n);
            r._stacked && As(r, i)
        }
        r.data.splice(t, n)
    }
    _sync(t) {
        if (this._parsing)
            this._syncList.push(t);
        else {
            const [n,r,i] = t;
            this[n](r, i)
        }
        this.chart._dataChanges.push([this.index, ...t])
    }
    _onDataPush() {
        const t = arguments.length;
        this._sync(["_insertElements", this.getDataset().data.length - t, t])
    }
    _onDataPop() {
        this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
    }
    _onDataShift() {
        this._sync(["_removeElements", 0, 1])
    }
    _onDataSplice(t, n) {
        n && this._sync(["_removeElements", t, n]);
        const r = arguments.length - 2;
        r && this._sync(["_insertElements", t, r])
    }
    _onDataUnshift() {
        this._sync(["_insertElements", 0, arguments.length])
    }
}
z(Yi, "defaults", {}),
z(Yi, "datasetElementType", null),
z(Yi, "dataElementType", null);
function EL(e, t) {
    if (!e._cache.$bar) {
        const n = e.getMatchingVisibleMetas(t);
        let r = [];
        for (let i = 0, s = n.length; i < s; i++)
            r = r.concat(n[i].controller.getAllParsedValues(e));
        e._cache.$bar = T_(r.sort((i,s)=>i - s))
    }
    return e._cache.$bar
}
function ML(e) {
    const t = e.iScale
      , n = EL(t, e.type);
    let r = t._length, i, s, o, a;
    const l = ()=>{
        o === 32767 || o === -32768 || (Bo(a) && (r = Math.min(r, Math.abs(o - a) || r)),
        a = o)
    }
    ;
    for (i = 0,
    s = n.length; i < s; ++i)
        o = t.getPixelForValue(n[i]),
        l();
    for (a = void 0,
    i = 0,
    s = t.ticks.length; i < s; ++i)
        o = t.getPixelForTick(i),
        l();
    return r
}
function TL(e, t, n, r) {
    const i = n.barThickness;
    let s, o;
    return Z(i) ? (s = t.min * n.categoryPercentage,
    o = n.barPercentage) : (s = i * r,
    o = 1),
    {
        chunk: s / r,
        ratio: o,
        start: t.pixels[e] - s / 2
    }
}
function OL(e, t, n, r) {
    const i = t.pixels
      , s = i[e];
    let o = e > 0 ? i[e - 1] : null
      , a = e < i.length - 1 ? i[e + 1] : null;
    const l = n.categoryPercentage;
    o === null && (o = s - (a === null ? t.end - t.start : a - s)),
    a === null && (a = s + s - o);
    const c = s - (s - Math.min(o, a)) / 2 * l;
    return {
        chunk: Math.abs(a - o) / 2 * l / r,
        ratio: n.barPercentage,
        start: c
    }
}
function AL(e, t, n, r) {
    const i = n.parse(e[0], r)
      , s = n.parse(e[1], r)
      , o = Math.min(i, s)
      , a = Math.max(i, s);
    let l = o
      , c = a;
    Math.abs(o) > Math.abs(a) && (l = a,
    c = o),
    t[n.axis] = c,
    t._custom = {
        barStart: l,
        barEnd: c,
        start: i,
        end: s,
        min: o,
        max: a
    }
}
function Q_(e, t, n, r) {
    return ie(e) ? AL(e, t, n, r) : t[n.axis] = n.parse(e, r),
    t
}
function Zy(e, t, n, r) {
    const i = e.iScale
      , s = e.vScale
      , o = i.getLabels()
      , a = i === s
      , l = [];
    let c, u, d, f;
    for (c = n,
    u = n + r; c < u; ++c)
        f = t[c],
        d = {},
        d[i.axis] = a || i.parse(o[c], c),
        l.push(Q_(f, d, s, c));
    return l
}
function gd(e) {
    return e && e.barStart !== void 0 && e.barEnd !== void 0
}
function LL(e, t, n) {
    return e !== 0 ? cn(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1)
}
function DL(e) {
    let t, n, r, i, s;
    return e.horizontal ? (t = e.base > e.x,
    n = "left",
    r = "right") : (t = e.base < e.y,
    n = "bottom",
    r = "top"),
    t ? (i = "end",
    s = "start") : (i = "start",
    s = "end"),
    {
        start: n,
        end: r,
        reverse: t,
        top: i,
        bottom: s
    }
}
function RL(e, t, n, r) {
    let i = t.borderSkipped;
    const s = {};
    if (!i) {
        e.borderSkipped = s;
        return
    }
    if (i === !0) {
        e.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0
        };
        return
    }
    const {start: o, end: a, reverse: l, top: c, bottom: u} = DL(e);
    i === "middle" && n && (e.enableBorderRadius = !0,
    (n._top || 0) === r ? i = c : (n._bottom || 0) === r ? i = u : (s[qy(u, o, a, l)] = !0,
    i = c)),
    s[qy(i, o, a, l)] = !0,
    e.borderSkipped = s
}
function qy(e, t, n, r) {
    return r ? (e = FL(e, t, n),
    e = Jy(e, n, t)) : e = Jy(e, t, n),
    e
}
function FL(e, t, n) {
    return e === t ? n : e === n ? t : e
}
function Jy(e, t, n) {
    return e === "start" ? t : e === "end" ? n : e
}
function IL(e, {inflateAmount: t}, n) {
    e.inflateAmount = t === "auto" ? n === 1 ? .33 : 0 : t
}
class bl extends Yi {
    parsePrimitiveData(t, n, r, i) {
        return Zy(t, n, r, i)
    }
    parseArrayData(t, n, r, i) {
        return Zy(t, n, r, i)
    }
    parseObjectData(t, n, r, i) {
        const {iScale: s, vScale: o} = t
          , {xAxisKey: a="x", yAxisKey: l="y"} = this._parsing
          , c = s.axis === "x" ? a : l
          , u = o.axis === "x" ? a : l
          , d = [];
        let f, p, g, v;
        for (f = r,
        p = r + i; f < p; ++f)
            v = n[f],
            g = {},
            g[s.axis] = s.parse(is(v, c), f),
            d.push(Q_(is(v, u), g, o, f));
        return d
    }
    updateRangeFromParsed(t, n, r, i) {
        super.updateRangeFromParsed(t, n, r, i);
        const s = r._custom;
        s && n === this._cachedMeta.vScale && (t.min = Math.min(t.min, s.min),
        t.max = Math.max(t.max, s.max))
    }
    getMaxOverflow() {
        return 0
    }
    getLabelAndValue(t) {
        const n = this._cachedMeta
          , {iScale: r, vScale: i} = n
          , s = this.getParsed(t)
          , o = s._custom
          , a = gd(o) ? "[" + o.start + ", " + o.end + "]" : "" + i.getLabelForValue(s[i.axis]);
        return {
            label: "" + r.getLabelForValue(s[r.axis]),
            value: a
        }
    }
    initialize() {
        this.enableOptionSharing = !0,
        super.initialize();
        const t = this._cachedMeta;
        t.stack = this.getDataset().stack
    }
    update(t) {
        const n = this._cachedMeta;
        this.updateElements(n.data, 0, n.data.length, t)
    }
    updateElements(t, n, r, i) {
        const s = i === "reset"
          , {index: o, _cachedMeta: {vScale: a}} = this
          , l = a.getBasePixel()
          , c = a.isHorizontal()
          , u = this._getRuler()
          , {sharedOptions: d, includeOptions: f} = this._getSharedOptions(n, i);
        for (let p = n; p < n + r; p++) {
            const g = this.getParsed(p)
              , v = s || Z(g[a.axis]) ? {
                base: l,
                head: l
            } : this._calculateBarValuePixels(p)
              , S = this._calculateBarIndexPixels(p, u)
              , y = (g._stacks || {})[a.axis]
              , m = {
                horizontal: c,
                base: v.base,
                enableBorderRadius: !y || gd(g._custom) || o === y._top || o === y._bottom,
                x: c ? v.head : S.center,
                y: c ? S.center : v.head,
                height: c ? S.size : Math.abs(v.size),
                width: c ? Math.abs(v.size) : S.size
            };
            f && (m.options = d || this.resolveDataElementOptions(p, t[p].active ? "active" : i));
            const b = m.options || t[p].options;
            RL(m, b, y, o),
            IL(m, b, u.ratio),
            this.updateElement(t[p], p, m, i)
        }
    }
    _getStacks(t, n) {
        const {iScale: r} = this._cachedMeta
          , i = r.getMatchingVisibleMetas(this._type).filter(l=>l.controller.options.grouped)
          , s = r.options.stacked
          , o = []
          , a = l=>{
            const c = l.controller.getParsed(n)
              , u = c && c[l.vScale.axis];
            if (Z(u) || isNaN(u))
                return !0
        }
        ;
        for (const l of i)
            if (!(n !== void 0 && a(l)) && ((s === !1 || o.indexOf(l.stack) === -1 || s === void 0 && l.stack === void 0) && o.push(l.stack),
            l.index === t))
                break;
        return o.length || o.push(void 0),
        o
    }
    _getStackCount(t) {
        return this._getStacks(void 0, t).length
    }
    _getStackIndex(t, n, r) {
        const i = this._getStacks(t, r)
          , s = n !== void 0 ? i.indexOf(n) : -1;
        return s === -1 ? i.length - 1 : s
    }
    _getRuler() {
        const t = this.options
          , n = this._cachedMeta
          , r = n.iScale
          , i = [];
        let s, o;
        for (s = 0,
        o = n.data.length; s < o; ++s)
            i.push(r.getPixelForValue(this.getParsed(s)[r.axis], s));
        const a = t.barThickness;
        return {
            min: a || ML(n),
            pixels: i,
            start: r._startPixel,
            end: r._endPixel,
            stackCount: this._getStackCount(),
            scale: r,
            grouped: t.grouped,
            ratio: a ? 1 : t.categoryPercentage * t.barPercentage
        }
    }
    _calculateBarValuePixels(t) {
        const {_cachedMeta: {vScale: n, _stacked: r, index: i}, options: {base: s, minBarLength: o}} = this
          , a = s || 0
          , l = this.getParsed(t)
          , c = l._custom
          , u = gd(c);
        let d = l[n.axis], f = 0, p = r ? this.applyStack(n, l, r) : d, g, v;
        p !== d && (f = p - d,
        p = d),
        u && (d = c.barStart,
        p = c.barEnd - c.barStart,
        d !== 0 && cn(d) !== cn(c.barEnd) && (f = 0),
        f += d);
        const S = !Z(s) && !u ? s : f;
        let y = n.getPixelForValue(S);
        if (this.chart.getDataVisibility(t) ? g = n.getPixelForValue(f + p) : g = y,
        v = g - y,
        Math.abs(v) < o) {
            v = LL(v, n, a) * o,
            d === a && (y -= v / 2);
            const m = n.getPixelForDecimal(0)
              , b = n.getPixelForDecimal(1)
              , w = Math.min(m, b)
              , k = Math.max(m, b);
            y = Math.max(Math.min(y, k), w),
            g = y + v,
            r && !u && (l._stacks[n.axis]._visualValues[i] = n.getValueForPixel(g) - n.getValueForPixel(y))
        }
        if (y === n.getPixelForValue(a)) {
            const m = cn(v) * n.getLineWidthForValue(a) / 2;
            y += m,
            v -= m
        }
        return {
            size: v,
            base: y,
            head: g,
            center: g + v / 2
        }
    }
    _calculateBarIndexPixels(t, n) {
        const r = n.scale
          , i = this.options
          , s = i.skipNull
          , o = U(i.maxBarThickness, 1 / 0);
        let a, l;
        if (n.grouped) {
            const c = s ? this._getStackCount(t) : n.stackCount
              , u = i.barThickness === "flex" ? OL(t, n, i, c) : TL(t, n, i, c)
              , d = this._getStackIndex(this.index, this._cachedMeta.stack, s ? t : void 0);
            a = u.start + u.chunk * d + u.chunk / 2,
            l = Math.min(o, u.chunk * u.ratio)
        } else
            a = r.getPixelForValue(this.getParsed(t)[r.axis], t),
            l = Math.min(o, n.min * n.ratio);
        return {
            base: a - l / 2,
            head: a + l / 2,
            center: a,
            size: l
        }
    }
    draw() {
        const t = this._cachedMeta
          , n = t.vScale
          , r = t.data
          , i = r.length;
        let s = 0;
        for (; s < i; ++s)
            this.getParsed(s)[n.axis] !== null && r[s].draw(this._ctx)
    }
}
z(bl, "id", "bar"),
z(bl, "defaults", {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: .8,
    barPercentage: .9,
    grouped: !0,
    animations: {
        numbers: {
            type: "number",
            properties: ["x", "y", "base", "width", "height"]
        }
    }
}),
z(bl, "overrides", {
    scales: {
        _index_: {
            type: "category",
            offset: !0,
            grid: {
                offset: !0
            }
        },
        _value_: {
            type: "linear",
            beginAtZero: !0
        }
    }
});
class Xi extends Yi {
    initialize() {
        this.enableOptionSharing = !0,
        this.supportsDecimation = !0,
        super.initialize()
    }
    update(t) {
        const n = this._cachedMeta
          , {dataset: r, data: i=[], _dataset: s} = n
          , o = this.chart._animationsDisabled;
        let {start: a, count: l} = h3(n, i, o);
        this._drawStart = a,
        this._drawCount = l,
        p3(n) && (a = 0,
        l = i.length),
        r._chart = this.chart,
        r._datasetIndex = this.index,
        r._decimated = !!s._decimated,
        r.points = i;
        const c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0),
        c.segment = this.options.segment,
        this.updateElement(r, void 0, {
            animated: !o,
            options: c
        }, t),
        this.updateElements(i, a, l, t)
    }
    updateElements(t, n, r, i) {
        const s = i === "reset"
          , {iScale: o, vScale: a, _stacked: l, _dataset: c} = this._cachedMeta
          , {sharedOptions: u, includeOptions: d} = this._getSharedOptions(n, i)
          , f = o.axis
          , p = a.axis
          , {spanGaps: g, segment: v} = this.options
          , S = zo(g) ? g : Number.POSITIVE_INFINITY
          , y = this.chart._animationsDisabled || s || i === "none"
          , m = n + r
          , b = t.length;
        let w = n > 0 && this.getParsed(n - 1);
        for (let k = 0; k < b; ++k) {
            const P = t[k]
              , _ = y ? P : {};
            if (k < n || k >= m) {
                _.skip = !0;
                continue
            }
            const C = this.getParsed(k)
              , j = Z(C[p])
              , M = _[f] = o.getPixelForValue(C[f], k)
              , O = _[p] = s || j ? a.getBasePixel() : a.getPixelForValue(l ? this.applyStack(a, C, l) : C[p], k);
            _.skip = isNaN(M) || isNaN(O) || j,
            _.stop = k > 0 && Math.abs(C[f] - w[f]) > S,
            v && (_.parsed = C,
            _.raw = c.data[k]),
            d && (_.options = u || this.resolveDataElementOptions(k, P.active ? "active" : i)),
            y || this.updateElement(P, k, _, i),
            w = C
        }
    }
    getMaxOverflow() {
        const t = this._cachedMeta
          , n = t.dataset
          , r = n.options && n.options.borderWidth || 0
          , i = t.data || [];
        if (!i.length)
            return r;
        const s = i[0].size(this.resolveDataElementOptions(0))
          , o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
        return Math.max(r, s, o) / 2
    }
    draw() {
        const t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw()
    }
}
z(Xi, "id", "line"),
z(Xi, "defaults", {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
}),
z(Xi, "overrides", {
    scales: {
        _index_: {
            type: "category"
        },
        _value_: {
            type: "linear"
        }
    }
});
function Or() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
}
class Eg {
    constructor(t) {
        z(this, "options");
        this.options = t || {}
    }
    static override(t) {
        Object.assign(Eg.prototype, t)
    }
    init() {}
    formats() {
        return Or()
    }
    parse() {
        return Or()
    }
    format() {
        return Or()
    }
    add() {
        return Or()
    }
    diff() {
        return Or()
    }
    startOf() {
        return Or()
    }
    endOf() {
        return Or()
    }
}
var NL = {
    _date: Eg
};
function VL(e, t, n, r) {
    const {controller: i, data: s, _sorted: o} = e
      , a = i._cachedMeta.iScale;
    if (a && t === a.axis && t !== "r" && o && s.length) {
        const l = a._reversePixels ? l3 : Gr;
        if (r) {
            if (i._sharedOptions) {
                const c = s[0]
                  , u = typeof c.getRange == "function" && c.getRange(t);
                if (u) {
                    const d = l(s, t, n - u)
                      , f = l(s, t, n + u);
                    return {
                        lo: d.lo,
                        hi: f.hi
                    }
                }
            }
        } else
            return l(s, t, n)
    }
    return {
        lo: 0,
        hi: s.length - 1
    }
}
function sa(e, t, n, r, i) {
    const s = e.getSortedVisibleDatasetMetas()
      , o = n[t];
    for (let a = 0, l = s.length; a < l; ++a) {
        const {index: c, data: u} = s[a]
          , {lo: d, hi: f} = VL(s[a], t, o, i);
        for (let p = d; p <= f; ++p) {
            const g = u[p];
            g.skip || r(g, c, p)
        }
    }
}
function BL(e) {
    const t = e.indexOf("x") !== -1
      , n = e.indexOf("y") !== -1;
    return function(r, i) {
        const s = t ? Math.abs(r.x - i.x) : 0
          , o = n ? Math.abs(r.y - i.y) : 0;
        return Math.sqrt(Math.pow(s, 2) + Math.pow(o, 2))
    }
}
function md(e, t, n, r, i) {
    const s = [];
    return !i && !e.isPointInArea(t) || sa(e, n, t, function(a, l, c) {
        !i && !jn(a, e.chartArea, 0) || a.inRange(t.x, t.y, r) && s.push({
            element: a,
            datasetIndex: l,
            index: c
        })
    }, !0),
    s
}
function zL(e, t, n, r) {
    let i = [];
    function s(o, a, l) {
        const {startAngle: c, endAngle: u} = o.getProps(["startAngle", "endAngle"], r)
          , {angle: d} = s3(o, {
            x: t.x,
            y: t.y
        });
        E_(d, c, u) && i.push({
            element: o,
            datasetIndex: a,
            index: l
        })
    }
    return sa(e, n, t, s),
    i
}
function $L(e, t, n, r, i, s) {
    let o = [];
    const a = BL(n);
    let l = Number.POSITIVE_INFINITY;
    function c(u, d, f) {
        const p = u.inRange(t.x, t.y, i);
        if (r && !p)
            return;
        const g = u.getCenterPoint(i);
        if (!(!!s || e.isPointInArea(g)) && !p)
            return;
        const S = a(t, g);
        S < l ? (o = [{
            element: u,
            datasetIndex: d,
            index: f
        }],
        l = S) : S === l && o.push({
            element: u,
            datasetIndex: d,
            index: f
        })
    }
    return sa(e, n, t, c),
    o
}
function vd(e, t, n, r, i, s) {
    return !s && !e.isPointInArea(t) ? [] : n === "r" && !r ? zL(e, t, n, i) : $L(e, t, n, r, i, s)
}
function e1(e, t, n, r, i) {
    const s = []
      , o = n === "x" ? "inXRange" : "inYRange";
    let a = !1;
    return sa(e, n, t, (l,c,u)=>{
        l[o](t[n], i) && (s.push({
            element: l,
            datasetIndex: c,
            index: u
        }),
        a = a || l.inRange(t.x, t.y, i))
    }
    ),
    r && !a ? [] : s
}
var HL = {
    evaluateInteractionItems: sa,
    modes: {
        index(e, t, n, r) {
            const i = Nr(t, e)
              , s = n.axis || "x"
              , o = n.includeInvisible || !1
              , a = n.intersect ? md(e, i, s, r, o) : vd(e, i, s, !1, r, o)
              , l = [];
            return a.length ? (e.getSortedVisibleDatasetMetas().forEach(c=>{
                const u = a[0].index
                  , d = c.data[u];
                d && !d.skip && l.push({
                    element: d,
                    datasetIndex: c.index,
                    index: u
                })
            }
            ),
            l) : []
        },
        dataset(e, t, n, r) {
            const i = Nr(t, e)
              , s = n.axis || "xy"
              , o = n.includeInvisible || !1;
            let a = n.intersect ? md(e, i, s, r, o) : vd(e, i, s, !1, r, o);
            if (a.length > 0) {
                const l = a[0].datasetIndex
                  , c = e.getDatasetMeta(l).data;
                a = [];
                for (let u = 0; u < c.length; ++u)
                    a.push({
                        element: c[u],
                        datasetIndex: l,
                        index: u
                    })
            }
            return a
        },
        point(e, t, n, r) {
            const i = Nr(t, e)
              , s = n.axis || "xy"
              , o = n.includeInvisible || !1;
            return md(e, i, s, r, o)
        },
        nearest(e, t, n, r) {
            const i = Nr(t, e)
              , s = n.axis || "xy"
              , o = n.includeInvisible || !1;
            return vd(e, i, s, n.intersect, r, o)
        },
        x(e, t, n, r) {
            const i = Nr(t, e);
            return e1(e, i, "x", n.intersect, r)
        },
        y(e, t, n, r) {
            const i = Nr(t, e);
            return e1(e, i, "y", n.intersect, r)
        }
    }
};
const Z_ = ["left", "top", "right", "bottom"];
function Ls(e, t) {
    return e.filter(n=>n.pos === t)
}
function t1(e, t) {
    return e.filter(n=>Z_.indexOf(n.pos) === -1 && n.box.axis === t)
}
function Ds(e, t) {
    return e.sort((n,r)=>{
        const i = t ? r : n
          , s = t ? n : r;
        return i.weight === s.weight ? i.index - s.index : i.weight - s.weight
    }
    )
}
function WL(e) {
    const t = [];
    let n, r, i, s, o, a;
    for (n = 0,
    r = (e || []).length; n < r; ++n)
        i = e[n],
        {position: s, options: {stack: o, stackWeight: a=1}} = i,
        t.push({
            index: n,
            box: i,
            pos: s,
            horizontal: i.isHorizontal(),
            weight: i.weight,
            stack: o && s + o,
            stackWeight: a
        });
    return t
}
function UL(e) {
    const t = {};
    for (const n of e) {
        const {stack: r, pos: i, stackWeight: s} = n;
        if (!r || !Z_.includes(i))
            continue;
        const o = t[r] || (t[r] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        o.count++,
        o.weight += s
    }
    return t
}
function GL(e, t) {
    const n = UL(e)
      , {vBoxMaxWidth: r, hBoxMaxHeight: i} = t;
    let s, o, a;
    for (s = 0,
    o = e.length; s < o; ++s) {
        a = e[s];
        const {fullSize: l} = a.box
          , c = n[a.stack]
          , u = c && a.stackWeight / c.weight;
        a.horizontal ? (a.width = u ? u * r : l && t.availableWidth,
        a.height = i) : (a.width = r,
        a.height = u ? u * i : l && t.availableHeight)
    }
    return n
}
function YL(e) {
    const t = WL(e)
      , n = Ds(t.filter(c=>c.box.fullSize), !0)
      , r = Ds(Ls(t, "left"), !0)
      , i = Ds(Ls(t, "right"))
      , s = Ds(Ls(t, "top"), !0)
      , o = Ds(Ls(t, "bottom"))
      , a = t1(t, "x")
      , l = t1(t, "y");
    return {
        fullSize: n,
        leftAndTop: r.concat(s),
        rightAndBottom: i.concat(l).concat(o).concat(a),
        chartArea: Ls(t, "chartArea"),
        vertical: r.concat(i).concat(l),
        horizontal: s.concat(o).concat(a)
    }
}
function n1(e, t, n, r) {
    return Math.max(e[n], t[n]) + Math.max(e[r], t[r])
}
function q_(e, t) {
    e.top = Math.max(e.top, t.top),
    e.left = Math.max(e.left, t.left),
    e.bottom = Math.max(e.bottom, t.bottom),
    e.right = Math.max(e.right, t.right)
}
function XL(e, t, n, r) {
    const {pos: i, box: s} = n
      , o = e.maxPadding;
    if (!Y(i)) {
        n.size && (e[i] -= n.size);
        const d = r[n.stack] || {
            size: 0,
            count: 1
        };
        d.size = Math.max(d.size, n.horizontal ? s.height : s.width),
        n.size = d.size / d.count,
        e[i] += n.size
    }
    s.getPadding && q_(o, s.getPadding());
    const a = Math.max(0, t.outerWidth - n1(o, e, "left", "right"))
      , l = Math.max(0, t.outerHeight - n1(o, e, "top", "bottom"))
      , c = a !== e.w
      , u = l !== e.h;
    return e.w = a,
    e.h = l,
    n.horizontal ? {
        same: c,
        other: u
    } : {
        same: u,
        other: c
    }
}
function KL(e) {
    const t = e.maxPadding;
    function n(r) {
        const i = Math.max(t[r] - e[r], 0);
        return e[r] += i,
        i
    }
    e.y += n("top"),
    e.x += n("left"),
    n("right"),
    n("bottom")
}
function QL(e, t) {
    const n = t.maxPadding;
    function r(i) {
        const s = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return i.forEach(o=>{
            s[o] = Math.max(t[o], n[o])
        }
        ),
        s
    }
    return r(e ? ["left", "right"] : ["top", "bottom"])
}
function Ys(e, t, n, r) {
    const i = [];
    let s, o, a, l, c, u;
    for (s = 0,
    o = e.length,
    c = 0; s < o; ++s) {
        a = e[s],
        l = a.box,
        l.update(a.width || t.w, a.height || t.h, QL(a.horizontal, t));
        const {same: d, other: f} = XL(t, n, a, r);
        c |= d && i.length,
        u = u || f,
        l.fullSize || i.push(a)
    }
    return c && Ys(i, t, n, r) || u
}
function Ba(e, t, n, r, i) {
    e.top = n,
    e.left = t,
    e.right = t + r,
    e.bottom = n + i,
    e.width = r,
    e.height = i
}
function r1(e, t, n, r) {
    const i = n.padding;
    let {x: s, y: o} = t;
    for (const a of e) {
        const l = a.box
          , c = r[a.stack] || {
            count: 1,
            placed: 0,
            weight: 1
        }
          , u = a.stackWeight / c.weight || 1;
        if (a.horizontal) {
            const d = t.w * u
              , f = c.size || l.height;
            Bo(c.start) && (o = c.start),
            l.fullSize ? Ba(l, i.left, o, n.outerWidth - i.right - i.left, f) : Ba(l, t.left + c.placed, o, d, f),
            c.start = o,
            c.placed += d,
            o = l.bottom
        } else {
            const d = t.h * u
              , f = c.size || l.width;
            Bo(c.start) && (s = c.start),
            l.fullSize ? Ba(l, s, i.top, f, n.outerHeight - i.bottom - i.top) : Ba(l, s, t.top + c.placed, f, d),
            c.start = s,
            c.placed += d,
            s = l.right
        }
    }
    t.x = s,
    t.y = o
}
var Rt = {
    addBox(e, t) {
        e.boxes || (e.boxes = []),
        t.fullSize = t.fullSize || !1,
        t.position = t.position || "top",
        t.weight = t.weight || 0,
        t._layers = t._layers || function() {
            return [{
                z: 0,
                draw(n) {
                    t.draw(n)
                }
            }]
        }
        ,
        e.boxes.push(t)
    },
    removeBox(e, t) {
        const n = e.boxes ? e.boxes.indexOf(t) : -1;
        n !== -1 && e.boxes.splice(n, 1)
    },
    configure(e, t, n) {
        t.fullSize = n.fullSize,
        t.position = n.position,
        t.weight = n.weight
    },
    update(e, t, n, r) {
        if (!e)
            return;
        const i = Ze(e.options.layout.padding)
          , s = Math.max(t - i.width, 0)
          , o = Math.max(n - i.height, 0)
          , a = YL(e.boxes)
          , l = a.vertical
          , c = a.horizontal;
        Q(e.boxes, v=>{
            typeof v.beforeLayout == "function" && v.beforeLayout()
        }
        );
        const u = l.reduce((v,S)=>S.box.options && S.box.options.display === !1 ? v : v + 1, 0) || 1
          , d = Object.freeze({
            outerWidth: t,
            outerHeight: n,
            padding: i,
            availableWidth: s,
            availableHeight: o,
            vBoxMaxWidth: s / 2 / u,
            hBoxMaxHeight: o / 2
        })
          , f = Object.assign({}, i);
        q_(f, Ze(r));
        const p = Object.assign({
            maxPadding: f,
            w: s,
            h: o,
            x: i.left,
            y: i.top
        }, i)
          , g = GL(l.concat(c), d);
        Ys(a.fullSize, p, d, g),
        Ys(l, p, d, g),
        Ys(c, p, d, g) && Ys(l, p, d, g),
        KL(p),
        r1(a.leftAndTop, p, d, g),
        p.x += p.w,
        p.y += p.h,
        r1(a.rightAndBottom, p, d, g),
        e.chartArea = {
            left: p.left,
            top: p.top,
            right: p.left + p.w,
            bottom: p.top + p.h,
            height: p.h,
            width: p.w
        },
        Q(a.chartArea, v=>{
            const S = v.box;
            Object.assign(S, e.chartArea),
            S.update(p.w, p.h, {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            })
        }
        )
    }
};
class J_ {
    acquireContext(t, n) {}
    releaseContext(t) {
        return !1
    }
    addEventListener(t, n, r) {}
    removeEventListener(t, n, r) {}
    getDevicePixelRatio() {
        return 1
    }
    getMaximumSize(t, n, r, i) {
        return n = Math.max(0, n || t.width),
        r = r || t.height,
        {
            width: n,
            height: Math.max(0, i ? Math.floor(n / i) : r)
        }
    }
    isAttached(t) {
        return !0
    }
    updateConfig(t) {}
}
class ZL extends J_ {
    acquireContext(t) {
        return t && t.getContext && t.getContext("2d") || null
    }
    updateConfig(t) {
        t.options.animation = !1
    }
}
const Sl = "$chartjs"
  , qL = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
}
  , i1 = e=>e === null || e === "";
function JL(e, t) {
    const n = e.style
      , r = e.getAttribute("height")
      , i = e.getAttribute("width");
    if (e[Sl] = {
        initial: {
            height: r,
            width: i,
            style: {
                display: n.display,
                height: n.height,
                width: n.width
            }
        }
    },
    n.display = n.display || "block",
    n.boxSizing = n.boxSizing || "border-box",
    i1(i)) {
        const s = By(e, "width");
        s !== void 0 && (e.width = s)
    }
    if (i1(r))
        if (e.style.height === "")
            e.height = e.width / (t || 2);
        else {
            const s = By(e, "height");
            s !== void 0 && (e.height = s)
        }
    return e
}
const e2 = rL ? {
    passive: !0
} : !1;
function e4(e, t, n) {
    e.addEventListener(t, n, e2)
}
function t4(e, t, n) {
    e.canvas.removeEventListener(t, n, e2)
}
function n4(e, t) {
    const n = qL[e.type] || e.type
      , {x: r, y: i} = Nr(e, t);
    return {
        type: n,
        chart: t,
        native: e,
        x: r !== void 0 ? r : null,
        y: i !== void 0 ? i : null
    }
}
function pc(e, t) {
    for (const n of e)
        if (n === t || n.contains(t))
            return !0
}
function r4(e, t, n) {
    const r = e.canvas
      , i = new MutationObserver(s=>{
        let o = !1;
        for (const a of s)
            o = o || pc(a.addedNodes, r),
            o = o && !pc(a.removedNodes, r);
        o && n()
    }
    );
    return i.observe(document, {
        childList: !0,
        subtree: !0
    }),
    i
}
function i4(e, t, n) {
    const r = e.canvas
      , i = new MutationObserver(s=>{
        let o = !1;
        for (const a of s)
            o = o || pc(a.removedNodes, r),
            o = o && !pc(a.addedNodes, r);
        o && n()
    }
    );
    return i.observe(document, {
        childList: !0,
        subtree: !0
    }),
    i
}
const Ho = new Map;
let s1 = 0;
function t2() {
    const e = window.devicePixelRatio;
    e !== s1 && (s1 = e,
    Ho.forEach((t,n)=>{
        n.currentDevicePixelRatio !== e && t()
    }
    ))
}
function s4(e, t) {
    Ho.size || window.addEventListener("resize", t2),
    Ho.set(e, t)
}
function o4(e) {
    Ho.delete(e),
    Ho.size || window.removeEventListener("resize", t2)
}
function a4(e, t, n) {
    const r = e.canvas
      , i = r && jg(r);
    if (!i)
        return;
    const s = A_((a,l)=>{
        const c = i.clientWidth;
        n(a, l),
        c < i.clientWidth && n()
    }
    , window)
      , o = new ResizeObserver(a=>{
        const l = a[0]
          , c = l.contentRect.width
          , u = l.contentRect.height;
        c === 0 && u === 0 || s(c, u)
    }
    );
    return o.observe(i),
    s4(e, s),
    o
}
function yd(e, t, n) {
    n && n.disconnect(),
    t === "resize" && o4(e)
}
function l4(e, t, n) {
    const r = e.canvas
      , i = A_(s=>{
        e.ctx !== null && n(n4(s, e))
    }
    , e);
    return e4(r, t, i),
    i
}
class c4 extends J_ {
    acquireContext(t, n) {
        const r = t && t.getContext && t.getContext("2d");
        return r && r.canvas === t ? (JL(t, n),
        r) : null
    }
    releaseContext(t) {
        const n = t.canvas;
        if (!n[Sl])
            return !1;
        const r = n[Sl].initial;
        ["height", "width"].forEach(s=>{
            const o = r[s];
            Z(o) ? n.removeAttribute(s) : n.setAttribute(s, o)
        }
        );
        const i = r.style || {};
        return Object.keys(i).forEach(s=>{
            n.style[s] = i[s]
        }
        ),
        n.width = n.width,
        delete n[Sl],
        !0
    }
    addEventListener(t, n, r) {
        this.removeEventListener(t, n);
        const i = t.$proxies || (t.$proxies = {})
          , o = {
            attach: r4,
            detach: i4,
            resize: a4
        }[n] || l4;
        i[n] = o(t, n, r)
    }
    removeEventListener(t, n) {
        const r = t.$proxies || (t.$proxies = {})
          , i = r[n];
        if (!i)
            return;
        ({
            attach: yd,
            detach: yd,
            resize: yd
        }[n] || t4)(t, n, i),
        r[n] = void 0
    }
    getDevicePixelRatio() {
        return window.devicePixelRatio
    }
    getMaximumSize(t, n, r, i) {
        return nL(t, n, r, i)
    }
    isAttached(t) {
        const n = jg(t);
        return !!(n && n.isConnected)
    }
}
function u4(e) {
    return !$_() || typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas ? ZL : c4
}
var sl;
let kr = (sl = class {
    constructor() {
        z(this, "x");
        z(this, "y");
        z(this, "active", !1);
        z(this, "options");
        z(this, "$animations")
    }
    tooltipPosition(t) {
        const {x: n, y: r} = this.getProps(["x", "y"], t);
        return {
            x: n,
            y: r
        }
    }
    hasValue() {
        return zo(this.x) && zo(this.y)
    }
    getProps(t, n) {
        const r = this.$animations;
        if (!n || !r)
            return this;
        const i = {};
        return t.forEach(s=>{
            i[s] = r[s] && r[s].active() ? r[s]._to : this[s]
        }
        ),
        i
    }
}
,
z(sl, "defaults", {}),
z(sl, "defaultRoutes"),
sl);
function d4(e, t) {
    const n = e.options.ticks
      , r = f4(e)
      , i = Math.min(n.maxTicksLimit || r, r)
      , s = n.major.enabled ? p4(t) : []
      , o = s.length
      , a = s[0]
      , l = s[o - 1]
      , c = [];
    if (o > i)
        return g4(t, c, s, o / i),
        c;
    const u = h4(s, t, i);
    if (o > 0) {
        let d, f;
        const p = o > 1 ? Math.round((l - a) / (o - 1)) : null;
        for (za(t, c, u, Z(p) ? 0 : a - p, a),
        d = 0,
        f = o - 1; d < f; d++)
            za(t, c, u, s[d], s[d + 1]);
        return za(t, c, u, l, Z(p) ? t.length : l + p),
        c
    }
    return za(t, c, u),
    c
}
function f4(e) {
    const t = e.options.offset
      , n = e._tickSize()
      , r = e._length / n + (t ? 0 : 1)
      , i = e._maxLength / n;
    return Math.floor(Math.min(r, i))
}
function h4(e, t, n) {
    const r = m4(e)
      , i = t.length / n;
    if (!r)
        return Math.max(i, 1);
    const s = r3(r);
    for (let o = 0, a = s.length - 1; o < a; o++) {
        const l = s[o];
        if (l > i)
            return l
    }
    return Math.max(i, 1)
}
function p4(e) {
    const t = [];
    let n, r;
    for (n = 0,
    r = e.length; n < r; n++)
        e[n].major && t.push(n);
    return t
}
function g4(e, t, n, r) {
    let i = 0, s = n[0], o;
    for (r = Math.ceil(r),
    o = 0; o < e.length; o++)
        o === s && (t.push(e[o]),
        i++,
        s = n[i * r])
}
function za(e, t, n, r, i) {
    const s = U(r, 0)
      , o = Math.min(U(i, e.length), e.length);
    let a = 0, l, c, u;
    for (n = Math.ceil(n),
    i && (l = i - r,
    n = l / Math.floor(l / n)),
    u = s; u < 0; )
        a++,
        u = Math.round(s + a * n);
    for (c = Math.max(s, 0); c < o; c++)
        c === u && (t.push(e[c]),
        a++,
        u = Math.round(s + a * n))
}
function m4(e) {
    const t = e.length;
    let n, r;
    if (t < 2)
        return !1;
    for (r = e[0],
    n = 1; n < t; ++n)
        if (e[n] - e[n - 1] !== r)
            return !1;
    return r
}
const v4 = e=>e === "left" ? "right" : e === "right" ? "left" : e
  , o1 = (e,t,n)=>t === "top" || t === "left" ? e[t] + n : e[t] - n
  , a1 = (e,t)=>Math.min(t || e, e);
function l1(e, t) {
    const n = []
      , r = e.length / t
      , i = e.length;
    let s = 0;
    for (; s < i; s += r)
        n.push(e[Math.floor(s)]);
    return n
}
function y4(e, t, n) {
    const r = e.ticks.length
      , i = Math.min(t, r - 1)
      , s = e._startPixel
      , o = e._endPixel
      , a = 1e-6;
    let l = e.getPixelForTick(i), c;
    if (!(n && (r === 1 ? c = Math.max(l - s, o - l) : t === 0 ? c = (e.getPixelForTick(1) - l) / 2 : c = (l - e.getPixelForTick(i - 1)) / 2,
    l += i < t ? c : -c,
    l < s - a || l > o + a)))
        return l
}
function x4(e, t) {
    Q(e, n=>{
        const r = n.gc
          , i = r.length / 2;
        let s;
        if (i > t) {
            for (s = 0; s < i; ++s)
                delete n.data[r[s]];
            r.splice(0, i)
        }
    }
    )
}
function Rs(e) {
    return e.drawTicks ? e.tickLength : 0
}
function c1(e, t) {
    if (!e.display)
        return 0;
    const n = Me(e.font, t)
      , r = Ze(e.padding);
    return (ie(e.text) ? e.text.length : 1) * n.lineHeight + r.height
}
function b4(e, t) {
    return _r(e, {
        scale: t,
        type: "scale"
    })
}
function S4(e, t, n) {
    return _r(e, {
        tick: n,
        index: t,
        type: "tick"
    })
}
function w4(e, t, n) {
    let r = Sg(e);
    return (n && t !== "right" || !n && t === "right") && (r = v4(r)),
    r
}
function _4(e, t, n, r) {
    const {top: i, left: s, bottom: o, right: a, chart: l} = e
      , {chartArea: c, scales: u} = l;
    let d = 0, f, p, g;
    const v = o - i
      , S = a - s;
    if (e.isHorizontal()) {
        if (p = Xe(r, s, a),
        Y(n)) {
            const y = Object.keys(n)[0]
              , m = n[y];
            g = u[y].getPixelForValue(m) + v - t
        } else
            n === "center" ? g = (c.bottom + c.top) / 2 + v - t : g = o1(e, n, t);
        f = a - s
    } else {
        if (Y(n)) {
            const y = Object.keys(n)[0]
              , m = n[y];
            p = u[y].getPixelForValue(m) - S + t
        } else
            n === "center" ? p = (c.left + c.right) / 2 - S + t : p = o1(e, n, t);
        g = Xe(r, o, i),
        d = n === "left" ? -xt : xt
    }
    return {
        titleX: p,
        titleY: g,
        maxWidth: f,
        rotation: d
    }
}
class fi extends kr {
    constructor(t) {
        super(),
        this.id = t.id,
        this.type = t.type,
        this.options = void 0,
        this.ctx = t.ctx,
        this.chart = t.chart,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.width = void 0,
        this.height = void 0,
        this._margins = {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        this.maxWidth = void 0,
        this.maxHeight = void 0,
        this.paddingTop = void 0,
        this.paddingBottom = void 0,
        this.paddingLeft = void 0,
        this.paddingRight = void 0,
        this.axis = void 0,
        this.labelRotation = void 0,
        this.min = void 0,
        this.max = void 0,
        this._range = void 0,
        this.ticks = [],
        this._gridLineItems = null,
        this._labelItems = null,
        this._labelSizes = null,
        this._length = 0,
        this._maxLength = 0,
        this._longestTextCache = {},
        this._startPixel = void 0,
        this._endPixel = void 0,
        this._reversePixels = !1,
        this._userMax = void 0,
        this._userMin = void 0,
        this._suggestedMax = void 0,
        this._suggestedMin = void 0,
        this._ticksLength = 0,
        this._borderValue = 0,
        this._cache = {},
        this._dataLimitsCached = !1,
        this.$context = void 0
    }
    init(t) {
        this.options = t.setContext(this.getContext()),
        this.axis = t.axis,
        this._userMin = this.parse(t.min),
        this._userMax = this.parse(t.max),
        this._suggestedMin = this.parse(t.suggestedMin),
        this._suggestedMax = this.parse(t.suggestedMax)
    }
    parse(t, n) {
        return t
    }
    getUserBounds() {
        let {_userMin: t, _userMax: n, _suggestedMin: r, _suggestedMax: i} = this;
        return t = gt(t, Number.POSITIVE_INFINITY),
        n = gt(n, Number.NEGATIVE_INFINITY),
        r = gt(r, Number.POSITIVE_INFINITY),
        i = gt(i, Number.NEGATIVE_INFINITY),
        {
            min: gt(t, r),
            max: gt(n, i),
            minDefined: ye(t),
            maxDefined: ye(n)
        }
    }
    getMinMax(t) {
        let {min: n, max: r, minDefined: i, maxDefined: s} = this.getUserBounds(), o;
        if (i && s)
            return {
                min: n,
                max: r
            };
        const a = this.getMatchingVisibleMetas();
        for (let l = 0, c = a.length; l < c; ++l)
            o = a[l].controller.getMinMax(this, t),
            i || (n = Math.min(n, o.min)),
            s || (r = Math.max(r, o.max));
        return n = s && n > r ? r : n,
        r = i && n > r ? n : r,
        {
            min: gt(n, gt(r, n)),
            max: gt(r, gt(n, r))
        }
    }
    getPadding() {
        return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0
        }
    }
    getTicks() {
        return this.ticks
    }
    getLabels() {
        const t = this.chart.data;
        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
    }
    getLabelItems(t=this.chart.chartArea) {
        return this._labelItems || (this._labelItems = this._computeLabelItems(t))
    }
    beforeLayout() {
        this._cache = {},
        this._dataLimitsCached = !1
    }
    beforeUpdate() {
        ee(this.options.beforeUpdate, [this])
    }
    update(t, n, r) {
        const {beginAtZero: i, grace: s, ticks: o} = this.options
          , a = o.sampleSize;
        this.beforeUpdate(),
        this.maxWidth = t,
        this.maxHeight = n,
        this._margins = r = Object.assign({
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }, r),
        this.ticks = null,
        this._labelSizes = null,
        this._gridLineItems = null,
        this._labelItems = null,
        this.beforeSetDimensions(),
        this.setDimensions(),
        this.afterSetDimensions(),
        this._maxLength = this.isHorizontal() ? this.width + r.left + r.right : this.height + r.top + r.bottom,
        this._dataLimitsCached || (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        this._range = D3(this, s, i),
        this._dataLimitsCached = !0),
        this.beforeBuildTicks(),
        this.ticks = this.buildTicks() || [],
        this.afterBuildTicks();
        const l = a < this.ticks.length;
        this._convertTicksToLabels(l ? l1(this.ticks, a) : this.ticks),
        this.configure(),
        this.beforeCalculateLabelRotation(),
        this.calculateLabelRotation(),
        this.afterCalculateLabelRotation(),
        o.display && (o.autoSkip || o.source === "auto") && (this.ticks = d4(this, this.ticks),
        this._labelSizes = null,
        this.afterAutoSkip()),
        l && this._convertTicksToLabels(this.ticks),
        this.beforeFit(),
        this.fit(),
        this.afterFit(),
        this.afterUpdate()
    }
    configure() {
        let t = this.options.reverse, n, r;
        this.isHorizontal() ? (n = this.left,
        r = this.right) : (n = this.top,
        r = this.bottom,
        t = !t),
        this._startPixel = n,
        this._endPixel = r,
        this._reversePixels = t,
        this._length = r - n,
        this._alignToPixels = this.options.alignToPixels
    }
    afterUpdate() {
        ee(this.options.afterUpdate, [this])
    }
    beforeSetDimensions() {
        ee(this.options.beforeSetDimensions, [this])
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth,
        this.left = 0,
        this.right = this.width) : (this.height = this.maxHeight,
        this.top = 0,
        this.bottom = this.height),
        this.paddingLeft = 0,
        this.paddingTop = 0,
        this.paddingRight = 0,
        this.paddingBottom = 0
    }
    afterSetDimensions() {
        ee(this.options.afterSetDimensions, [this])
    }
    _callHooks(t) {
        this.chart.notifyPlugins(t, this.getContext()),
        ee(this.options[t], [this])
    }
    beforeDataLimits() {
        this._callHooks("beforeDataLimits")
    }
    determineDataLimits() {}
    afterDataLimits() {
        this._callHooks("afterDataLimits")
    }
    beforeBuildTicks() {
        this._callHooks("beforeBuildTicks")
    }
    buildTicks() {
        return []
    }
    afterBuildTicks() {
        this._callHooks("afterBuildTicks")
    }
    beforeTickToLabelConversion() {
        ee(this.options.beforeTickToLabelConversion, [this])
    }
    generateTickLabels(t) {
        const n = this.options.ticks;
        let r, i, s;
        for (r = 0,
        i = t.length; r < i; r++)
            s = t[r],
            s.label = ee(n.callback, [s.value, r, t], this)
    }
    afterTickToLabelConversion() {
        ee(this.options.afterTickToLabelConversion, [this])
    }
    beforeCalculateLabelRotation() {
        ee(this.options.beforeCalculateLabelRotation, [this])
    }
    calculateLabelRotation() {
        const t = this.options
          , n = t.ticks
          , r = a1(this.ticks.length, t.ticks.maxTicksLimit)
          , i = n.minRotation || 0
          , s = n.maxRotation;
        let o = i, a, l, c;
        if (!this._isVisible() || !n.display || i >= s || r <= 1 || !this.isHorizontal()) {
            this.labelRotation = i;
            return
        }
        const u = this._getLabelSizes()
          , d = u.widest.width
          , f = u.highest.height
          , p = bt(this.chart.width - d, 0, this.maxWidth);
        a = t.offset ? this.maxWidth / r : p / (r - 1),
        d + 6 > a && (a = p / (r - (t.offset ? .5 : 1)),
        l = this.maxHeight - Rs(t.grid) - n.padding - c1(t.title, this.chart.options.font),
        c = Math.sqrt(d * d + f * f),
        o = xg(Math.min(Math.asin(bt((u.highest.height + 6) / a, -1, 1)), Math.asin(bt(l / c, -1, 1)) - Math.asin(bt(f / c, -1, 1)))),
        o = Math.max(i, Math.min(s, o))),
        this.labelRotation = o
    }
    afterCalculateLabelRotation() {
        ee(this.options.afterCalculateLabelRotation, [this])
    }
    afterAutoSkip() {}
    beforeFit() {
        ee(this.options.beforeFit, [this])
    }
    fit() {
        const t = {
            width: 0,
            height: 0
        }
          , {chart: n, options: {ticks: r, title: i, grid: s}} = this
          , o = this._isVisible()
          , a = this.isHorizontal();
        if (o) {
            const l = c1(i, n.options.font);
            if (a ? (t.width = this.maxWidth,
            t.height = Rs(s) + l) : (t.height = this.maxHeight,
            t.width = Rs(s) + l),
            r.display && this.ticks.length) {
                const {first: c, last: u, widest: d, highest: f} = this._getLabelSizes()
                  , p = r.padding * 2
                  , g = Zn(this.labelRotation)
                  , v = Math.cos(g)
                  , S = Math.sin(g);
                if (a) {
                    const y = r.mirror ? 0 : S * d.width + v * f.height;
                    t.height = Math.min(this.maxHeight, t.height + y + p)
                } else {
                    const y = r.mirror ? 0 : v * d.width + S * f.height;
                    t.width = Math.min(this.maxWidth, t.width + y + p)
                }
                this._calculatePadding(c, u, S, v)
            }
        }
        this._handleMargins(),
        a ? (this.width = this._length = n.width - this._margins.left - this._margins.right,
        this.height = t.height) : (this.width = t.width,
        this.height = this._length = n.height - this._margins.top - this._margins.bottom)
    }
    _calculatePadding(t, n, r, i) {
        const {ticks: {align: s, padding: o}, position: a} = this.options
          , l = this.labelRotation !== 0
          , c = a !== "top" && this.axis === "x";
        if (this.isHorizontal()) {
            const u = this.getPixelForTick(0) - this.left
              , d = this.right - this.getPixelForTick(this.ticks.length - 1);
            let f = 0
              , p = 0;
            l ? c ? (f = i * t.width,
            p = r * n.height) : (f = r * t.height,
            p = i * n.width) : s === "start" ? p = n.width : s === "end" ? f = t.width : s !== "inner" && (f = t.width / 2,
            p = n.width / 2),
            this.paddingLeft = Math.max((f - u + o) * this.width / (this.width - u), 0),
            this.paddingRight = Math.max((p - d + o) * this.width / (this.width - d), 0)
        } else {
            let u = n.height / 2
              , d = t.height / 2;
            s === "start" ? (u = 0,
            d = t.height) : s === "end" && (u = n.height,
            d = 0),
            this.paddingTop = u + o,
            this.paddingBottom = d + o
        }
    }
    _handleMargins() {
        this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left),
        this._margins.top = Math.max(this.paddingTop, this._margins.top),
        this._margins.right = Math.max(this.paddingRight, this._margins.right),
        this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
    }
    afterFit() {
        ee(this.options.afterFit, [this])
    }
    isHorizontal() {
        const {axis: t, position: n} = this.options;
        return n === "top" || n === "bottom" || t === "x"
    }
    isFullSize() {
        return this.options.fullSize
    }
    _convertTicksToLabels(t) {
        this.beforeTickToLabelConversion(),
        this.generateTickLabels(t);
        let n, r;
        for (n = 0,
        r = t.length; n < r; n++)
            Z(t[n].label) && (t.splice(n, 1),
            r--,
            n--);
        this.afterTickToLabelConversion()
    }
    _getLabelSizes() {
        let t = this._labelSizes;
        if (!t) {
            const n = this.options.ticks.sampleSize;
            let r = this.ticks;
            n < r.length && (r = l1(r, n)),
            this._labelSizes = t = this._computeLabelSizes(r, r.length, this.options.ticks.maxTicksLimit)
        }
        return t
    }
    _computeLabelSizes(t, n, r) {
        const {ctx: i, _longestTextCache: s} = this
          , o = []
          , a = []
          , l = Math.floor(n / a1(n, r));
        let c = 0, u = 0, d, f, p, g, v, S, y, m, b, w, k;
        for (d = 0; d < n; d += l) {
            if (g = t[d].label,
            v = this._resolveTickFontOptions(d),
            i.font = S = v.string,
            y = s[S] = s[S] || {
                data: {},
                gc: []
            },
            m = v.lineHeight,
            b = w = 0,
            !Z(g) && !ie(g))
                b = fc(i, y.data, y.gc, b, g),
                w = m;
            else if (ie(g))
                for (f = 0,
                p = g.length; f < p; ++f)
                    k = g[f],
                    !Z(k) && !ie(k) && (b = fc(i, y.data, y.gc, b, k),
                    w += m);
            o.push(b),
            a.push(w),
            c = Math.max(b, c),
            u = Math.max(w, u)
        }
        x4(s, n);
        const P = o.indexOf(c)
          , _ = a.indexOf(u)
          , C = j=>({
            width: o[j] || 0,
            height: a[j] || 0
        });
        return {
            first: C(0),
            last: C(n - 1),
            widest: C(P),
            highest: C(_),
            widths: o,
            heights: a
        }
    }
    getLabelForValue(t) {
        return t
    }
    getPixelForValue(t, n) {
        return NaN
    }
    getValueForPixel(t) {}
    getPixelForTick(t) {
        const n = this.ticks;
        return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
    }
    getPixelForDecimal(t) {
        this._reversePixels && (t = 1 - t);
        const n = this._startPixel + t * this._length;
        return a3(this._alignToPixels ? Tr(this.chart, n, 0) : n)
    }
    getDecimalForPixel(t) {
        const n = (t - this._startPixel) / this._length;
        return this._reversePixels ? 1 - n : n
    }
    getBasePixel() {
        return this.getPixelForValue(this.getBaseValue())
    }
    getBaseValue() {
        const {min: t, max: n} = this;
        return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
    }
    getContext(t) {
        const n = this.ticks || [];
        if (t >= 0 && t < n.length) {
            const r = n[t];
            return r.$context || (r.$context = S4(this.getContext(), t, r))
        }
        return this.$context || (this.$context = b4(this.chart.getContext(), this))
    }
    _tickSize() {
        const t = this.options.ticks
          , n = Zn(this.labelRotation)
          , r = Math.abs(Math.cos(n))
          , i = Math.abs(Math.sin(n))
          , s = this._getLabelSizes()
          , o = t.autoSkipPadding || 0
          , a = s ? s.widest.width + o : 0
          , l = s ? s.highest.height + o : 0;
        return this.isHorizontal() ? l * r > a * i ? a / r : l / i : l * i < a * r ? l / r : a / i
    }
    _isVisible() {
        const t = this.options.display;
        return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0
    }
    _computeGridLineItems(t) {
        const n = this.axis
          , r = this.chart
          , i = this.options
          , {grid: s, position: o, border: a} = i
          , l = s.offset
          , c = this.isHorizontal()
          , d = this.ticks.length + (l ? 1 : 0)
          , f = Rs(s)
          , p = []
          , g = a.setContext(this.getContext())
          , v = g.display ? g.width : 0
          , S = v / 2
          , y = function(V) {
            return Tr(r, V, v)
        };
        let m, b, w, k, P, _, C, j, M, O, A, N;
        if (o === "top")
            m = y(this.bottom),
            _ = this.bottom - f,
            j = m - S,
            O = y(t.top) + S,
            N = t.bottom;
        else if (o === "bottom")
            m = y(this.top),
            O = t.top,
            N = y(t.bottom) - S,
            _ = m + S,
            j = this.top + f;
        else if (o === "left")
            m = y(this.right),
            P = this.right - f,
            C = m - S,
            M = y(t.left) + S,
            A = t.right;
        else if (o === "right")
            m = y(this.left),
            M = t.left,
            A = y(t.right) - S,
            P = m + S,
            C = this.left + f;
        else if (n === "x") {
            if (o === "center")
                m = y((t.top + t.bottom) / 2 + .5);
            else if (Y(o)) {
                const V = Object.keys(o)[0]
                  , W = o[V];
                m = y(this.chart.scales[V].getPixelForValue(W))
            }
            O = t.top,
            N = t.bottom,
            _ = m + S,
            j = _ + f
        } else if (n === "y") {
            if (o === "center")
                m = y((t.left + t.right) / 2);
            else if (Y(o)) {
                const V = Object.keys(o)[0]
                  , W = o[V];
                m = y(this.chart.scales[V].getPixelForValue(W))
            }
            P = m - S,
            C = P - f,
            M = t.left,
            A = t.right
        }
        const B = U(i.ticks.maxTicksLimit, d)
          , L = Math.max(1, Math.ceil(d / B));
        for (b = 0; b < d; b += L) {
            const V = this.getContext(b)
              , W = s.setContext(V)
              , E = a.setContext(V)
              , R = W.lineWidth
              , D = W.color
              , I = E.dash || []
              , H = E.dashOffset
              , pe = W.tickWidth
              , be = W.tickColor
              , Ve = W.tickBorderDash || []
              , ae = W.tickBorderDashOffset;
            w = y4(this, b, l),
            w !== void 0 && (k = Tr(r, w, R),
            c ? P = C = M = A = k : _ = j = O = N = k,
            p.push({
                tx1: P,
                ty1: _,
                tx2: C,
                ty2: j,
                x1: M,
                y1: O,
                x2: A,
                y2: N,
                width: R,
                color: D,
                borderDash: I,
                borderDashOffset: H,
                tickWidth: pe,
                tickColor: be,
                tickBorderDash: Ve,
                tickBorderDashOffset: ae
            }))
        }
        return this._ticksLength = d,
        this._borderValue = m,
        p
    }
    _computeLabelItems(t) {
        const n = this.axis
          , r = this.options
          , {position: i, ticks: s} = r
          , o = this.isHorizontal()
          , a = this.ticks
          , {align: l, crossAlign: c, padding: u, mirror: d} = s
          , f = Rs(r.grid)
          , p = f + u
          , g = d ? -u : p
          , v = -Zn(this.labelRotation)
          , S = [];
        let y, m, b, w, k, P, _, C, j, M, O, A, N = "middle";
        if (i === "top")
            P = this.bottom - g,
            _ = this._getXAxisLabelAlignment();
        else if (i === "bottom")
            P = this.top + g,
            _ = this._getXAxisLabelAlignment();
        else if (i === "left") {
            const L = this._getYAxisLabelAlignment(f);
            _ = L.textAlign,
            k = L.x
        } else if (i === "right") {
            const L = this._getYAxisLabelAlignment(f);
            _ = L.textAlign,
            k = L.x
        } else if (n === "x") {
            if (i === "center")
                P = (t.top + t.bottom) / 2 + p;
            else if (Y(i)) {
                const L = Object.keys(i)[0]
                  , V = i[L];
                P = this.chart.scales[L].getPixelForValue(V) + p
            }
            _ = this._getXAxisLabelAlignment()
        } else if (n === "y") {
            if (i === "center")
                k = (t.left + t.right) / 2 - p;
            else if (Y(i)) {
                const L = Object.keys(i)[0]
                  , V = i[L];
                k = this.chart.scales[L].getPixelForValue(V)
            }
            _ = this._getYAxisLabelAlignment(f).textAlign
        }
        n === "y" && (l === "start" ? N = "top" : l === "end" && (N = "bottom"));
        const B = this._getLabelSizes();
        for (y = 0,
        m = a.length; y < m; ++y) {
            b = a[y],
            w = b.label;
            const L = s.setContext(this.getContext(y));
            C = this.getPixelForTick(y) + s.labelOffset,
            j = this._resolveTickFontOptions(y),
            M = j.lineHeight,
            O = ie(w) ? w.length : 1;
            const V = O / 2
              , W = L.color
              , E = L.textStrokeColor
              , R = L.textStrokeWidth;
            let D = _;
            o ? (k = C,
            _ === "inner" && (y === m - 1 ? D = this.options.reverse ? "left" : "right" : y === 0 ? D = this.options.reverse ? "right" : "left" : D = "center"),
            i === "top" ? c === "near" || v !== 0 ? A = -O * M + M / 2 : c === "center" ? A = -B.highest.height / 2 - V * M + M : A = -B.highest.height + M / 2 : c === "near" || v !== 0 ? A = M / 2 : c === "center" ? A = B.highest.height / 2 - V * M : A = B.highest.height - O * M,
            d && (A *= -1),
            v !== 0 && !L.showLabelBackdrop && (k += M / 2 * Math.sin(v))) : (P = C,
            A = (1 - O) * M / 2);
            let I;
            if (L.showLabelBackdrop) {
                const H = Ze(L.backdropPadding)
                  , pe = B.heights[y]
                  , be = B.widths[y];
                let Ve = A - H.top
                  , ae = 0 - H.left;
                switch (N) {
                case "middle":
                    Ve -= pe / 2;
                    break;
                case "bottom":
                    Ve -= pe;
                    break
                }
                switch (_) {
                case "center":
                    ae -= be / 2;
                    break;
                case "right":
                    ae -= be;
                    break
                }
                I = {
                    left: ae,
                    top: Ve,
                    width: be + H.width,
                    height: pe + H.height,
                    color: L.backdropColor
                }
            }
            S.push({
                label: w,
                font: j,
                textOffset: A,
                options: {
                    rotation: v,
                    color: W,
                    strokeColor: E,
                    strokeWidth: R,
                    textAlign: D,
                    textBaseline: N,
                    translation: [k, P],
                    backdrop: I
                }
            })
        }
        return S
    }
    _getXAxisLabelAlignment() {
        const {position: t, ticks: n} = this.options;
        if (-Zn(this.labelRotation))
            return t === "top" ? "left" : "right";
        let i = "center";
        return n.align === "start" ? i = "left" : n.align === "end" ? i = "right" : n.align === "inner" && (i = "inner"),
        i
    }
    _getYAxisLabelAlignment(t) {
        const {position: n, ticks: {crossAlign: r, mirror: i, padding: s}} = this.options
          , o = this._getLabelSizes()
          , a = t + s
          , l = o.widest.width;
        let c, u;
        return n === "left" ? i ? (u = this.right + s,
        r === "near" ? c = "left" : r === "center" ? (c = "center",
        u += l / 2) : (c = "right",
        u += l)) : (u = this.right - a,
        r === "near" ? c = "right" : r === "center" ? (c = "center",
        u -= l / 2) : (c = "left",
        u = this.left)) : n === "right" ? i ? (u = this.left + s,
        r === "near" ? c = "right" : r === "center" ? (c = "center",
        u -= l / 2) : (c = "left",
        u -= l)) : (u = this.left + a,
        r === "near" ? c = "left" : r === "center" ? (c = "center",
        u += l / 2) : (c = "right",
        u = this.right)) : c = "right",
        {
            textAlign: c,
            x: u
        }
    }
    _computeLabelArea() {
        if (this.options.ticks.mirror)
            return;
        const t = this.chart
          , n = this.options.position;
        if (n === "left" || n === "right")
            return {
                top: 0,
                left: this.left,
                bottom: t.height,
                right: this.right
            };
        if (n === "top" || n === "bottom")
            return {
                top: this.top,
                left: 0,
                bottom: this.bottom,
                right: t.width
            }
    }
    drawBackground() {
        const {ctx: t, options: {backgroundColor: n}, left: r, top: i, width: s, height: o} = this;
        n && (t.save(),
        t.fillStyle = n,
        t.fillRect(r, i, s, o),
        t.restore())
    }
    getLineWidthForValue(t) {
        const n = this.options.grid;
        if (!this._isVisible() || !n.display)
            return 0;
        const i = this.ticks.findIndex(s=>s.value === t);
        return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0
    }
    drawGrid(t) {
        const n = this.options.grid
          , r = this.ctx
          , i = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
        let s, o;
        const a = (l,c,u)=>{
            !u.width || !u.color || (r.save(),
            r.lineWidth = u.width,
            r.strokeStyle = u.color,
            r.setLineDash(u.borderDash || []),
            r.lineDashOffset = u.borderDashOffset,
            r.beginPath(),
            r.moveTo(l.x, l.y),
            r.lineTo(c.x, c.y),
            r.stroke(),
            r.restore())
        }
        ;
        if (n.display)
            for (s = 0,
            o = i.length; s < o; ++s) {
                const l = i[s];
                n.drawOnChartArea && a({
                    x: l.x1,
                    y: l.y1
                }, {
                    x: l.x2,
                    y: l.y2
                }, l),
                n.drawTicks && a({
                    x: l.tx1,
                    y: l.ty1
                }, {
                    x: l.tx2,
                    y: l.ty2
                }, {
                    color: l.tickColor,
                    width: l.tickWidth,
                    borderDash: l.tickBorderDash,
                    borderDashOffset: l.tickBorderDashOffset
                })
            }
    }
    drawBorder() {
        const {chart: t, ctx: n, options: {border: r, grid: i}} = this
          , s = r.setContext(this.getContext())
          , o = r.display ? s.width : 0;
        if (!o)
            return;
        const a = i.setContext(this.getContext(0)).lineWidth
          , l = this._borderValue;
        let c, u, d, f;
        this.isHorizontal() ? (c = Tr(t, this.left, o) - o / 2,
        u = Tr(t, this.right, a) + a / 2,
        d = f = l) : (d = Tr(t, this.top, o) - o / 2,
        f = Tr(t, this.bottom, a) + a / 2,
        c = u = l),
        n.save(),
        n.lineWidth = s.width,
        n.strokeStyle = s.color,
        n.beginPath(),
        n.moveTo(c, d),
        n.lineTo(u, f),
        n.stroke(),
        n.restore()
    }
    drawLabels(t) {
        if (!this.options.ticks.display)
            return;
        const r = this.ctx
          , i = this._computeLabelArea();
        i && Qc(r, i);
        const s = this.getLabelItems(t);
        for (const o of s) {
            const a = o.options
              , l = o.font
              , c = o.label
              , u = o.textOffset;
            ai(r, c, 0, u, l, a)
        }
        i && Zc(r)
    }
    drawTitle() {
        const {ctx: t, options: {position: n, title: r, reverse: i}} = this;
        if (!r.display)
            return;
        const s = Me(r.font)
          , o = Ze(r.padding)
          , a = r.align;
        let l = s.lineHeight / 2;
        n === "bottom" || n === "center" || Y(n) ? (l += o.bottom,
        ie(r.text) && (l += s.lineHeight * (r.text.length - 1))) : l += o.top;
        const {titleX: c, titleY: u, maxWidth: d, rotation: f} = _4(this, l, n, a);
        ai(t, r.text, 0, 0, s, {
            color: r.color,
            maxWidth: d,
            rotation: f,
            textAlign: w4(a, n, i),
            textBaseline: "middle",
            translation: [c, u]
        })
    }
    draw(t) {
        this._isVisible() && (this.drawBackground(),
        this.drawGrid(t),
        this.drawBorder(),
        this.drawTitle(),
        this.drawLabels(t))
    }
    _layers() {
        const t = this.options
          , n = t.ticks && t.ticks.z || 0
          , r = U(t.grid && t.grid.z, -1)
          , i = U(t.border && t.border.z, 0);
        return !this._isVisible() || this.draw !== fi.prototype.draw ? [{
            z: n,
            draw: s=>{
                this.draw(s)
            }
        }] : [{
            z: r,
            draw: s=>{
                this.drawBackground(),
                this.drawGrid(s),
                this.drawTitle()
            }
        }, {
            z: i,
            draw: ()=>{
                this.drawBorder()
            }
        }, {
            z: n,
            draw: s=>{
                this.drawLabels(s)
            }
        }]
    }
    getMatchingVisibleMetas(t) {
        const n = this.chart.getSortedVisibleDatasetMetas()
          , r = this.axis + "AxisID"
          , i = [];
        let s, o;
        for (s = 0,
        o = n.length; s < o; ++s) {
            const a = n[s];
            a[r] === this.id && (!t || a.type === t) && i.push(a)
        }
        return i
    }
    _resolveTickFontOptions(t) {
        const n = this.options.ticks.setContext(this.getContext(t));
        return Me(n.font)
    }
    _maxDigits() {
        const t = this._resolveTickFontOptions(0).lineHeight;
        return (this.isHorizontal() ? this.width : this.height) / t
    }
}
class $a {
    constructor(t, n, r) {
        this.type = t,
        this.scope = n,
        this.override = r,
        this.items = Object.create(null)
    }
    isForType(t) {
        return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
    }
    register(t) {
        const n = Object.getPrototypeOf(t);
        let r;
        P4(n) && (r = this.register(n));
        const i = this.items
          , s = t.id
          , o = this.scope + "." + s;
        if (!s)
            throw new Error("class does not have id: " + t);
        return s in i || (i[s] = t,
        k4(t, o, r),
        this.override && xe.override(t.id, t.overrides)),
        o
    }
    get(t) {
        return this.items[t]
    }
    unregister(t) {
        const n = this.items
          , r = t.id
          , i = this.scope;
        r in n && delete n[r],
        i && r in xe[i] && (delete xe[i][r],
        this.override && delete oi[r])
    }
}
function k4(e, t, n) {
    const r = Vo(Object.create(null), [n ? xe.get(n) : {}, xe.get(t), e.defaults]);
    xe.set(t, r),
    e.defaultRoutes && C4(t, e.defaultRoutes),
    e.descriptors && xe.describe(t, e.descriptors)
}
function C4(e, t) {
    Object.keys(t).forEach(n=>{
        const r = n.split(".")
          , i = r.pop()
          , s = [e].concat(r).join(".")
          , o = t[n].split(".")
          , a = o.pop()
          , l = o.join(".");
        xe.route(s, i, l, a)
    }
    )
}
function P4(e) {
    return "id"in e && "defaults"in e
}
class j4 {
    constructor() {
        this.controllers = new $a(Yi,"datasets",!0),
        this.elements = new $a(kr,"elements"),
        this.plugins = new $a(Object,"plugins"),
        this.scales = new $a(fi,"scales"),
        this._typedRegistries = [this.controllers, this.scales, this.elements]
    }
    add(...t) {
        this._each("register", t)
    }
    remove(...t) {
        this._each("unregister", t)
    }
    addControllers(...t) {
        this._each("register", t, this.controllers)
    }
    addElements(...t) {
        this._each("register", t, this.elements)
    }
    addPlugins(...t) {
        this._each("register", t, this.plugins)
    }
    addScales(...t) {
        this._each("register", t, this.scales)
    }
    getController(t) {
        return this._get(t, this.controllers, "controller")
    }
    getElement(t) {
        return this._get(t, this.elements, "element")
    }
    getPlugin(t) {
        return this._get(t, this.plugins, "plugin")
    }
    getScale(t) {
        return this._get(t, this.scales, "scale")
    }
    removeControllers(...t) {
        this._each("unregister", t, this.controllers)
    }
    removeElements(...t) {
        this._each("unregister", t, this.elements)
    }
    removePlugins(...t) {
        this._each("unregister", t, this.plugins)
    }
    removeScales(...t) {
        this._each("unregister", t, this.scales)
    }
    _each(t, n, r) {
        [...n].forEach(i=>{
            const s = r || this._getRegistryForType(i);
            r || s.isForType(i) || s === this.plugins && i.id ? this._exec(t, s, i) : Q(i, o=>{
                const a = r || this._getRegistryForType(o);
                this._exec(t, a, o)
            }
            )
        }
        )
    }
    _exec(t, n, r) {
        const i = yg(t);
        ee(r["before" + i], [], r),
        n[t](r),
        ee(r["after" + i], [], r)
    }
    _getRegistryForType(t) {
        for (let n = 0; n < this._typedRegistries.length; n++) {
            const r = this._typedRegistries[n];
            if (r.isForType(t))
                return r
        }
        return this.plugins
    }
    _get(t, n, r) {
        const i = n.get(t);
        if (i === void 0)
            throw new Error('"' + t + '" is not a registered ' + r + ".");
        return i
    }
}
var rn = new j4;
class E4 {
    constructor() {
        this._init = []
    }
    notify(t, n, r, i) {
        n === "beforeInit" && (this._init = this._createDescriptors(t, !0),
        this._notify(this._init, t, "install"));
        const s = i ? this._descriptors(t).filter(i) : this._descriptors(t)
          , o = this._notify(s, t, n, r);
        return n === "afterDestroy" && (this._notify(s, t, "stop"),
        this._notify(this._init, t, "uninstall")),
        o
    }
    _notify(t, n, r, i) {
        i = i || {};
        for (const s of t) {
            const o = s.plugin
              , a = o[r]
              , l = [n, i, s.options];
            if (ee(a, l, o) === !1 && i.cancelable)
                return !1
        }
        return !0
    }
    invalidate() {
        Z(this._cache) || (this._oldCache = this._cache,
        this._cache = void 0)
    }
    _descriptors(t) {
        if (this._cache)
            return this._cache;
        const n = this._cache = this._createDescriptors(t);
        return this._notifyStateChanges(t),
        n
    }
    _createDescriptors(t, n) {
        const r = t && t.config
          , i = U(r.options && r.options.plugins, {})
          , s = M4(r);
        return i === !1 && !n ? [] : O4(t, s, i, n)
    }
    _notifyStateChanges(t) {
        const n = this._oldCache || []
          , r = this._cache
          , i = (s,o)=>s.filter(a=>!o.some(l=>a.plugin.id === l.plugin.id));
        this._notify(i(n, r), t, "stop"),
        this._notify(i(r, n), t, "start")
    }
}
function M4(e) {
    const t = {}
      , n = []
      , r = Object.keys(rn.plugins.items);
    for (let s = 0; s < r.length; s++)
        n.push(rn.getPlugin(r[s]));
    const i = e.plugins || [];
    for (let s = 0; s < i.length; s++) {
        const o = i[s];
        n.indexOf(o) === -1 && (n.push(o),
        t[o.id] = !0)
    }
    return {
        plugins: n,
        localIds: t
    }
}
function T4(e, t) {
    return !t && e === !1 ? null : e === !0 ? {} : e
}
function O4(e, {plugins: t, localIds: n}, r, i) {
    const s = []
      , o = e.getContext();
    for (const a of t) {
        const l = a.id
          , c = T4(r[l], i);
        c !== null && s.push({
            plugin: a,
            options: A4(e.config, {
                plugin: a,
                local: n[l]
            }, c, o)
        })
    }
    return s
}
function A4(e, {plugin: t, local: n}, r, i) {
    const s = e.pluginScopeKeys(t)
      , o = e.getOptionScopes(r, s);
    return n && t.defaults && o.push(t.defaults),
    e.createResolver(o, i, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    })
}
function xh(e, t) {
    const n = xe.datasets[e] || {};
    return ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
}
function L4(e, t) {
    let n = e;
    return e === "_index_" ? n = t : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
}
function D4(e, t) {
    return e === t ? "_index_" : "_value_"
}
function u1(e) {
    if (e === "x" || e === "y" || e === "r")
        return e
}
function R4(e) {
    if (e === "top" || e === "bottom")
        return "x";
    if (e === "left" || e === "right")
        return "y"
}
function bh(e, ...t) {
    if (u1(e))
        return e;
    for (const n of t) {
        const r = n.axis || R4(n.position) || e.length > 1 && u1(e[0].toLowerCase());
        if (r)
            return r
    }
    throw new Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)
}
function d1(e, t, n) {
    if (n[t + "AxisID"] === e)
        return {
            axis: t
        }
}
function F4(e, t) {
    if (t.data && t.data.datasets) {
        const n = t.data.datasets.filter(r=>r.xAxisID === e || r.yAxisID === e);
        if (n.length)
            return d1(e, "x", n[0]) || d1(e, "y", n[0])
    }
    return {}
}
function I4(e, t) {
    const n = oi[e.type] || {
        scales: {}
    }
      , r = t.scales || {}
      , i = xh(e.type, t)
      , s = Object.create(null);
    return Object.keys(r).forEach(o=>{
        const a = r[o];
        if (!Y(a))
            return console.error(`Invalid scale configuration for scale: ${o}`);
        if (a._proxy)
            return console.warn(`Ignoring resolver passed as options for scale: ${o}`);
        const l = bh(o, a, F4(o, e), xe.scales[a.type])
          , c = D4(l, i)
          , u = n.scales || {};
        s[o] = lo(Object.create(null), [{
            axis: l
        }, a, u[l], u[c]])
    }
    ),
    e.data.datasets.forEach(o=>{
        const a = o.type || e.type
          , l = o.indexAxis || xh(a, t)
          , u = (oi[a] || {}).scales || {};
        Object.keys(u).forEach(d=>{
            const f = L4(d, l)
              , p = o[f + "AxisID"] || f;
            s[p] = s[p] || Object.create(null),
            lo(s[p], [{
                axis: f
            }, r[p], u[d]])
        }
        )
    }
    ),
    Object.keys(s).forEach(o=>{
        const a = s[o];
        lo(a, [xe.scales[a.type], xe.scale])
    }
    ),
    s
}
function n2(e) {
    const t = e.options || (e.options = {});
    t.plugins = U(t.plugins, {}),
    t.scales = I4(e, t)
}
function r2(e) {
    return e = e || {},
    e.datasets = e.datasets || [],
    e.labels = e.labels || [],
    e
}
function N4(e) {
    return e = e || {},
    e.data = r2(e.data),
    n2(e),
    e
}
const f1 = new Map
  , i2 = new Set;
function Ha(e, t) {
    let n = f1.get(e);
    return n || (n = t(),
    f1.set(e, n),
    i2.add(n)),
    n
}
const Fs = (e,t,n)=>{
    const r = is(t, n);
    r !== void 0 && e.add(r)
}
;
class V4 {
    constructor(t) {
        this._config = N4(t),
        this._scopeCache = new Map,
        this._resolverCache = new Map
    }
    get platform() {
        return this._config.platform
    }
    get type() {
        return this._config.type
    }
    set type(t) {
        this._config.type = t
    }
    get data() {
        return this._config.data
    }
    set data(t) {
        this._config.data = r2(t)
    }
    get options() {
        return this._config.options
    }
    set options(t) {
        this._config.options = t
    }
    get plugins() {
        return this._config.plugins
    }
    update() {
        const t = this._config;
        this.clearCache(),
        n2(t)
    }
    clearCache() {
        this._scopeCache.clear(),
        this._resolverCache.clear()
    }
    datasetScopeKeys(t) {
        return Ha(t, ()=>[[`datasets.${t}`, ""]])
    }
    datasetAnimationScopeKeys(t, n) {
        return Ha(`${t}.transition.${n}`, ()=>[[`datasets.${t}.transitions.${n}`, `transitions.${n}`], [`datasets.${t}`, ""]])
    }
    datasetElementScopeKeys(t, n) {
        return Ha(`${t}-${n}`, ()=>[[`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""]])
    }
    pluginScopeKeys(t) {
        const n = t.id
          , r = this.type;
        return Ha(`${r}-plugin-${n}`, ()=>[[`plugins.${n}`, ...t.additionalOptionScopes || []]])
    }
    _cachedScopes(t, n) {
        const r = this._scopeCache;
        let i = r.get(t);
        return (!i || n) && (i = new Map,
        r.set(t, i)),
        i
    }
    getOptionScopes(t, n, r) {
        const {options: i, type: s} = this
          , o = this._cachedScopes(t, r)
          , a = o.get(n);
        if (a)
            return a;
        const l = new Set;
        n.forEach(u=>{
            t && (l.add(t),
            u.forEach(d=>Fs(l, t, d))),
            u.forEach(d=>Fs(l, i, d)),
            u.forEach(d=>Fs(l, oi[s] || {}, d)),
            u.forEach(d=>Fs(l, xe, d)),
            u.forEach(d=>Fs(l, vh, d))
        }
        );
        const c = Array.from(l);
        return c.length === 0 && c.push(Object.create(null)),
        i2.has(n) && o.set(n, c),
        c
    }
    chartOptionScopes() {
        const {options: t, type: n} = this;
        return [t, oi[n] || {}, xe.datasets[n] || {}, {
            type: n
        }, xe, vh]
    }
    resolveNamedOptions(t, n, r, i=[""]) {
        const s = {
            $shared: !0
        }
          , {resolver: o, subPrefixes: a} = h1(this._resolverCache, t, i);
        let l = o;
        if (z4(o, n)) {
            s.$shared = !1,
            r = yr(r) ? r() : r;
            const c = this.createResolver(t, r, a);
            l = ss(o, r, c)
        }
        for (const c of n)
            s[c] = l[c];
        return s
    }
    createResolver(t, n, r=[""], i) {
        const {resolver: s} = h1(this._resolverCache, t, r);
        return Y(n) ? ss(s, n, void 0, i) : s
    }
}
function h1(e, t, n) {
    let r = e.get(t);
    r || (r = new Map,
    e.set(t, r));
    const i = n.join();
    let s = r.get(i);
    return s || (s = {
        resolver: kg(t, n),
        subPrefixes: n.filter(a=>!a.toLowerCase().includes("hover"))
    },
    r.set(i, s)),
    s
}
const B4 = e=>Y(e) && Object.getOwnPropertyNames(e).reduce((t,n)=>t || yr(e[n]), !1);
function z4(e, t) {
    const {isScriptable: n, isIndexable: r} = I_(e);
    for (const i of t) {
        const s = n(i)
          , o = r(i)
          , a = (o || s) && e[i];
        if (s && (yr(a) || B4(a)) || o && ie(a))
            return !0
    }
    return !1
}
var $4 = "4.4.0";
const H4 = ["top", "bottom", "left", "right", "chartArea"];
function p1(e, t) {
    return e === "top" || e === "bottom" || H4.indexOf(e) === -1 && t === "x"
}
function g1(e, t) {
    return function(n, r) {
        return n[e] === r[e] ? n[t] - r[t] : n[e] - r[e]
    }
}
function m1(e) {
    const t = e.chart
      , n = t.options.animation;
    t.notifyPlugins("afterRender"),
    ee(n && n.onComplete, [e], t)
}
function W4(e) {
    const t = e.chart
      , n = t.options.animation;
    ee(n && n.onProgress, [e], t)
}
function s2(e) {
    return $_() && typeof e == "string" ? e = document.getElementById(e) : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
}
const wl = {}
  , v1 = e=>{
    const t = s2(e);
    return Object.values(wl).filter(n=>n.canvas === t).pop()
}
;
function U4(e, t, n) {
    const r = Object.keys(e);
    for (const i of r) {
        const s = +i;
        if (s >= t) {
            const o = e[i];
            delete e[i],
            (n > 0 || s > t) && (e[s + n] = o)
        }
    }
}
function G4(e, t, n, r) {
    return !n || e.type === "mouseout" ? null : r ? t : e
}
function Wa(e, t, n) {
    return e.options.clip ? e[n] : t[n]
}
function Y4(e, t) {
    const {xScale: n, yScale: r} = e;
    return n && r ? {
        left: Wa(n, t, "left"),
        right: Wa(n, t, "right"),
        top: Wa(r, t, "top"),
        bottom: Wa(r, t, "bottom")
    } : t
}
var Vn;
let On = (Vn = class {
    static register(...t) {
        rn.add(...t),
        y1()
    }
    static unregister(...t) {
        rn.remove(...t),
        y1()
    }
    constructor(t, n) {
        const r = this.config = new V4(n)
          , i = s2(t)
          , s = v1(i);
        if (s)
            throw new Error("Canvas is already in use. Chart with ID '" + s.id + "' must be destroyed before the canvas with ID '" + s.canvas.id + "' can be reused.");
        const o = r.createResolver(r.chartOptionScopes(), this.getContext());
        this.platform = new (r.platform || u4(i)),
        this.platform.updateConfig(r);
        const a = this.platform.acquireContext(i, o.aspectRatio)
          , l = a && a.canvas
          , c = l && l.height
          , u = l && l.width;
        if (this.id = XA(),
        this.ctx = a,
        this.canvas = l,
        this.width = u,
        this.height = c,
        this._options = o,
        this._aspectRatio = this.aspectRatio,
        this._layers = [],
        this._metasets = [],
        this._stacks = void 0,
        this.boxes = [],
        this.currentDevicePixelRatio = void 0,
        this.chartArea = void 0,
        this._active = [],
        this._lastEvent = void 0,
        this._listeners = {},
        this._responsiveListeners = void 0,
        this._sortedMetasets = [],
        this.scales = {},
        this._plugins = new E4,
        this.$proxies = {},
        this._hiddenIndices = {},
        this.attached = !1,
        this._animationsDisabled = void 0,
        this.$context = void 0,
        this._doResize = d3(d=>this.update(d), o.resizeDelay || 0),
        this._dataChanges = [],
        wl[this.id] = this,
        !a || !l) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return
        }
        yn.listen(this, "complete", m1),
        yn.listen(this, "progress", W4),
        this._initialize(),
        this.attached && this.update()
    }
    get aspectRatio() {
        const {options: {aspectRatio: t, maintainAspectRatio: n}, width: r, height: i, _aspectRatio: s} = this;
        return Z(t) ? n && s ? s : i ? r / i : null : t
    }
    get data() {
        return this.config.data
    }
    set data(t) {
        this.config.data = t
    }
    get options() {
        return this._options
    }
    set options(t) {
        this.config.options = t
    }
    get registry() {
        return rn
    }
    _initialize() {
        return this.notifyPlugins("beforeInit"),
        this.options.responsive ? this.resize() : Vy(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins("afterInit"),
        this
    }
    clear() {
        return Fy(this.canvas, this.ctx),
        this
    }
    stop() {
        return yn.stop(this),
        this
    }
    resize(t, n) {
        yn.running(this) ? this._resizeBeforeDraw = {
            width: t,
            height: n
        } : this._resize(t, n)
    }
    _resize(t, n) {
        const r = this.options
          , i = this.canvas
          , s = r.maintainAspectRatio && this.aspectRatio
          , o = this.platform.getMaximumSize(i, t, n, s)
          , a = r.devicePixelRatio || this.platform.getDevicePixelRatio()
          , l = this.width ? "resize" : "attach";
        this.width = o.width,
        this.height = o.height,
        this._aspectRatio = this.aspectRatio,
        Vy(this, a, !0) && (this.notifyPlugins("resize", {
            size: o
        }),
        ee(r.onResize, [this, o], this),
        this.attached && this._doResize(l) && this.render())
    }
    ensureScalesHaveIDs() {
        const n = this.options.scales || {};
        Q(n, (r,i)=>{
            r.id = i
        }
        )
    }
    buildOrUpdateScales() {
        const t = this.options
          , n = t.scales
          , r = this.scales
          , i = Object.keys(r).reduce((o,a)=>(o[a] = !1,
        o), {});
        let s = [];
        n && (s = s.concat(Object.keys(n).map(o=>{
            const a = n[o]
              , l = bh(o, a)
              , c = l === "r"
              , u = l === "x";
            return {
                options: a,
                dposition: c ? "chartArea" : u ? "bottom" : "left",
                dtype: c ? "radialLinear" : u ? "category" : "linear"
            }
        }
        ))),
        Q(s, o=>{
            const a = o.options
              , l = a.id
              , c = bh(l, a)
              , u = U(a.type, o.dtype);
            (a.position === void 0 || p1(a.position, c) !== p1(o.dposition)) && (a.position = o.dposition),
            i[l] = !0;
            let d = null;
            if (l in r && r[l].type === u)
                d = r[l];
            else {
                const f = rn.getScale(u);
                d = new f({
                    id: l,
                    type: u,
                    ctx: this.ctx,
                    chart: this
                }),
                r[d.id] = d
            }
            d.init(a, t)
        }
        ),
        Q(i, (o,a)=>{
            o || delete r[a]
        }
        ),
        Q(r, o=>{
            Rt.configure(this, o, o.options),
            Rt.addBox(this, o)
        }
        )
    }
    _updateMetasets() {
        const t = this._metasets
          , n = this.data.datasets.length
          , r = t.length;
        if (t.sort((i,s)=>i.index - s.index),
        r > n) {
            for (let i = n; i < r; ++i)
                this._destroyDatasetMeta(i);
            t.splice(n, r - n)
        }
        this._sortedMetasets = t.slice(0).sort(g1("order", "index"))
    }
    _removeUnreferencedMetasets() {
        const {_metasets: t, data: {datasets: n}} = this;
        t.length > n.length && delete this._stacks,
        t.forEach((r,i)=>{
            n.filter(s=>s === r._dataset).length === 0 && this._destroyDatasetMeta(i)
        }
        )
    }
    buildOrUpdateControllers() {
        const t = []
          , n = this.data.datasets;
        let r, i;
        for (this._removeUnreferencedMetasets(),
        r = 0,
        i = n.length; r < i; r++) {
            const s = n[r];
            let o = this.getDatasetMeta(r);
            const a = s.type || this.config.type;
            if (o.type && o.type !== a && (this._destroyDatasetMeta(r),
            o = this.getDatasetMeta(r)),
            o.type = a,
            o.indexAxis = s.indexAxis || xh(a, this.options),
            o.order = s.order || 0,
            o.index = r,
            o.label = "" + s.label,
            o.visible = this.isDatasetVisible(r),
            o.controller)
                o.controller.updateIndex(r),
                o.controller.linkScales();
            else {
                const l = rn.getController(a)
                  , {datasetElementType: c, dataElementType: u} = xe.datasets[a];
                Object.assign(l, {
                    dataElementType: rn.getElement(u),
                    datasetElementType: c && rn.getElement(c)
                }),
                o.controller = new l(this,r),
                t.push(o.controller)
            }
        }
        return this._updateMetasets(),
        t
    }
    _resetElements() {
        Q(this.data.datasets, (t,n)=>{
            this.getDatasetMeta(n).controller.reset()
        }
        , this)
    }
    reset() {
        this._resetElements(),
        this.notifyPlugins("reset")
    }
    update(t) {
        const n = this.config;
        n.update();
        const r = this._options = n.createResolver(n.chartOptionScopes(), this.getContext())
          , i = this._animationsDisabled = !r.animation;
        if (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins("beforeUpdate", {
            mode: t,
            cancelable: !0
        }) === !1)
            return;
        const s = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let o = 0;
        for (let c = 0, u = this.data.datasets.length; c < u; c++) {
            const {controller: d} = this.getDatasetMeta(c)
              , f = !i && s.indexOf(d) === -1;
            d.buildOrUpdateElements(f),
            o = Math.max(+d.getMaxOverflow(), o)
        }
        o = this._minPadding = r.layout.autoPadding ? o : 0,
        this._updateLayout(o),
        i || Q(s, c=>{
            c.reset()
        }
        ),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", {
            mode: t
        }),
        this._layers.sort(g1("z", "_idx"));
        const {_active: a, _lastEvent: l} = this;
        l ? this._eventHandler(l, !0) : a.length && this._updateHoverStyles(a, a, !0),
        this.render()
    }
    _updateScales() {
        Q(this.scales, t=>{
            Rt.removeBox(this, t)
        }
        ),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales()
    }
    _checkEventBindings() {
        const t = this.options
          , n = new Set(Object.keys(this._listeners))
          , r = new Set(t.events);
        (!jy(n, r) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(),
        this.bindEvents())
    }
    _updateHiddenIndices() {
        const {_hiddenIndices: t} = this
          , n = this._getUniformDataChanges() || [];
        for (const {method: r, start: i, count: s} of n) {
            const o = r === "_removeElements" ? -s : s;
            U4(t, i, o)
        }
    }
    _getUniformDataChanges() {
        const t = this._dataChanges;
        if (!t || !t.length)
            return;
        this._dataChanges = [];
        const n = this.data.datasets.length
          , r = s=>new Set(t.filter(o=>o[0] === s).map((o,a)=>a + "," + o.splice(1).join(",")))
          , i = r(0);
        for (let s = 1; s < n; s++)
            if (!jy(i, r(s)))
                return;
        return Array.from(i).map(s=>s.split(",")).map(s=>({
            method: s[1],
            start: +s[2],
            count: +s[3]
        }))
    }
    _updateLayout(t) {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: !0
        }) === !1)
            return;
        Rt.update(this, this.width, this.height, t);
        const n = this.chartArea
          , r = n.width <= 0 || n.height <= 0;
        this._layers = [],
        Q(this.boxes, i=>{
            r && i.position === "chartArea" || (i.configure && i.configure(),
            this._layers.push(...i._layers()))
        }
        , this),
        this._layers.forEach((i,s)=>{
            i._idx = s
        }
        ),
        this.notifyPlugins("afterLayout")
    }
    _updateDatasets(t) {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode: t,
            cancelable: !0
        }) !== !1) {
            for (let n = 0, r = this.data.datasets.length; n < r; ++n)
                this.getDatasetMeta(n).controller.configure();
            for (let n = 0, r = this.data.datasets.length; n < r; ++n)
                this._updateDataset(n, yr(t) ? t({
                    datasetIndex: n
                }) : t);
            this.notifyPlugins("afterDatasetsUpdate", {
                mode: t
            })
        }
    }
    _updateDataset(t, n) {
        const r = this.getDatasetMeta(t)
          , i = {
            meta: r,
            index: t,
            mode: n,
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetUpdate", i) !== !1 && (r.controller._update(n),
        i.cancelable = !1,
        this.notifyPlugins("afterDatasetUpdate", i))
    }
    render() {
        this.notifyPlugins("beforeRender", {
            cancelable: !0
        }) !== !1 && (yn.has(this) ? this.attached && !yn.running(this) && yn.start(this) : (this.draw(),
        m1({
            chart: this
        })))
    }
    draw() {
        let t;
        if (this._resizeBeforeDraw) {
            const {width: r, height: i} = this._resizeBeforeDraw;
            this._resize(r, i),
            this._resizeBeforeDraw = null
        }
        if (this.clear(),
        this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
            cancelable: !0
        }) === !1)
            return;
        const n = this._layers;
        for (t = 0; t < n.length && n[t].z <= 0; ++t)
            n[t].draw(this.chartArea);
        for (this._drawDatasets(); t < n.length; ++t)
            n[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw")
    }
    _getSortedDatasetMetas(t) {
        const n = this._sortedMetasets
          , r = [];
        let i, s;
        for (i = 0,
        s = n.length; i < s; ++i) {
            const o = n[i];
            (!t || o.visible) && r.push(o)
        }
        return r
    }
    getSortedVisibleDatasetMetas() {
        return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets() {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: !0
        }) === !1)
            return;
        const t = this.getSortedVisibleDatasetMetas();
        for (let n = t.length - 1; n >= 0; --n)
            this._drawDataset(t[n]);
        this.notifyPlugins("afterDatasetsDraw")
    }
    _drawDataset(t) {
        const n = this.ctx
          , r = t._clip
          , i = !r.disabled
          , s = Y4(t, this.chartArea)
          , o = {
            meta: t,
            index: t.index,
            cancelable: !0
        };
        this.notifyPlugins("beforeDatasetDraw", o) !== !1 && (i && Qc(n, {
            left: r.left === !1 ? 0 : s.left - r.left,
            right: r.right === !1 ? this.width : s.right + r.right,
            top: r.top === !1 ? 0 : s.top - r.top,
            bottom: r.bottom === !1 ? this.height : s.bottom + r.bottom
        }),
        t.controller.draw(),
        i && Zc(n),
        o.cancelable = !1,
        this.notifyPlugins("afterDatasetDraw", o))
    }
    isPointInArea(t) {
        return jn(t, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(t, n, r, i) {
        const s = HL.modes[n];
        return typeof s == "function" ? s(this, t, r, i) : []
    }
    getDatasetMeta(t) {
        const n = this.data.datasets[t]
          , r = this._metasets;
        let i = r.filter(s=>s && s._dataset === n).pop();
        return i || (i = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: n && n.order || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1
        },
        r.push(i)),
        i
    }
    getContext() {
        return this.$context || (this.$context = _r(null, {
            chart: this,
            type: "chart"
        }))
    }
    getVisibleDatasetCount() {
        return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(t) {
        const n = this.data.datasets[t];
        if (!n)
            return !1;
        const r = this.getDatasetMeta(t);
        return typeof r.hidden == "boolean" ? !r.hidden : !n.hidden
    }
    setDatasetVisibility(t, n) {
        const r = this.getDatasetMeta(t);
        r.hidden = !n
    }
    toggleDataVisibility(t) {
        this._hiddenIndices[t] = !this._hiddenIndices[t]
    }
    getDataVisibility(t) {
        return !this._hiddenIndices[t]
    }
    _updateVisibility(t, n, r) {
        const i = r ? "show" : "hide"
          , s = this.getDatasetMeta(t)
          , o = s.controller._resolveAnimations(void 0, i);
        Bo(n) ? (s.data[n].hidden = !r,
        this.update()) : (this.setDatasetVisibility(t, r),
        o.update(s, {
            visible: r
        }),
        this.update(a=>a.datasetIndex === t ? i : void 0))
    }
    hide(t, n) {
        this._updateVisibility(t, n, !1)
    }
    show(t, n) {
        this._updateVisibility(t, n, !0)
    }
    _destroyDatasetMeta(t) {
        const n = this._metasets[t];
        n && n.controller && n.controller._destroy(),
        delete this._metasets[t]
    }
    _stop() {
        let t, n;
        for (this.stop(),
        yn.remove(this),
        t = 0,
        n = this.data.datasets.length; t < n; ++t)
            this._destroyDatasetMeta(t)
    }
    destroy() {
        this.notifyPlugins("beforeDestroy");
        const {canvas: t, ctx: n} = this;
        this._stop(),
        this.config.clearCache(),
        t && (this.unbindEvents(),
        Fy(t, n),
        this.platform.releaseContext(n),
        this.canvas = null,
        this.ctx = null),
        delete wl[this.id],
        this.notifyPlugins("afterDestroy")
    }
    toBase64Image(...t) {
        return this.canvas.toDataURL(...t)
    }
    bindEvents() {
        this.bindUserEvents(),
        this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
    }
    bindUserEvents() {
        const t = this._listeners
          , n = this.platform
          , r = (s,o)=>{
            n.addEventListener(this, s, o),
            t[s] = o
        }
          , i = (s,o,a)=>{
            s.offsetX = o,
            s.offsetY = a,
            this._eventHandler(s)
        }
        ;
        Q(this.options.events, s=>r(s, i))
    }
    bindResponsiveEvents() {
        this._responsiveListeners || (this._responsiveListeners = {});
        const t = this._responsiveListeners
          , n = this.platform
          , r = (l,c)=>{
            n.addEventListener(this, l, c),
            t[l] = c
        }
          , i = (l,c)=>{
            t[l] && (n.removeEventListener(this, l, c),
            delete t[l])
        }
          , s = (l,c)=>{
            this.canvas && this.resize(l, c)
        }
        ;
        let o;
        const a = ()=>{
            i("attach", a),
            this.attached = !0,
            this.resize(),
            r("resize", s),
            r("detach", o)
        }
        ;
        o = ()=>{
            this.attached = !1,
            i("resize", s),
            this._stop(),
            this._resize(0, 0),
            r("attach", a)
        }
        ,
        n.isAttached(this.canvas) ? a() : o()
    }
    unbindEvents() {
        Q(this._listeners, (t,n)=>{
            this.platform.removeEventListener(this, n, t)
        }
        ),
        this._listeners = {},
        Q(this._responsiveListeners, (t,n)=>{
            this.platform.removeEventListener(this, n, t)
        }
        ),
        this._responsiveListeners = void 0
    }
    updateHoverStyle(t, n, r) {
        const i = r ? "set" : "remove";
        let s, o, a, l;
        for (n === "dataset" && (s = this.getDatasetMeta(t[0].datasetIndex),
        s.controller["_" + i + "DatasetHoverStyle"]()),
        a = 0,
        l = t.length; a < l; ++a) {
            o = t[a];
            const c = o && this.getDatasetMeta(o.datasetIndex).controller;
            c && c[i + "HoverStyle"](o.element, o.datasetIndex, o.index)
        }
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(t) {
        const n = this._active || []
          , r = t.map(({datasetIndex: s, index: o})=>{
            const a = this.getDatasetMeta(s);
            if (!a)
                throw new Error("No dataset found at index " + s);
            return {
                datasetIndex: s,
                element: a.data[o],
                index: o
            }
        }
        );
        !cc(r, n) && (this._active = r,
        this._lastEvent = null,
        this._updateHoverStyles(r, n))
    }
    notifyPlugins(t, n, r) {
        return this._plugins.notify(this, t, n, r)
    }
    isPluginEnabled(t) {
        return this._plugins._cache.filter(n=>n.plugin.id === t).length === 1
    }
    _updateHoverStyles(t, n, r) {
        const i = this.options.hover
          , s = (l,c)=>l.filter(u=>!c.some(d=>u.datasetIndex === d.datasetIndex && u.index === d.index))
          , o = s(n, t)
          , a = r ? t : s(t, n);
        o.length && this.updateHoverStyle(o, i.mode, !1),
        a.length && i.mode && this.updateHoverStyle(a, i.mode, !0)
    }
    _eventHandler(t, n) {
        const r = {
            event: t,
            replay: n,
            cancelable: !0,
            inChartArea: this.isPointInArea(t)
        }
          , i = o=>(o.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", r, i) === !1)
            return;
        const s = this._handleEvent(t, n, r.inChartArea);
        return r.cancelable = !1,
        this.notifyPlugins("afterEvent", r, i),
        (s || r.changed) && this.render(),
        this
    }
    _handleEvent(t, n, r) {
        const {_active: i=[], options: s} = this
          , o = n
          , a = this._getActiveElements(t, i, r, o)
          , l = e3(t)
          , c = G4(t, this._lastEvent, r, l);
        r && (this._lastEvent = null,
        ee(s.onHover, [t, a, this], this),
        l && ee(s.onClick, [t, a, this], this));
        const u = !cc(a, i);
        return (u || n) && (this._active = a,
        this._updateHoverStyles(a, i, n)),
        this._lastEvent = c,
        u
    }
    _getActiveElements(t, n, r, i) {
        if (t.type === "mouseout")
            return [];
        if (!r)
            return n;
        const s = this.options.hover;
        return this.getElementsAtEventForMode(t, s.mode, s, i)
    }
}
,
z(Vn, "defaults", xe),
z(Vn, "instances", wl),
z(Vn, "overrides", oi),
z(Vn, "registry", rn),
z(Vn, "version", $4),
z(Vn, "getChart", v1),
Vn);
function y1() {
    return Q(On.instances, e=>e._plugins.invalidate())
}
function o2(e, t, n=t) {
    e.lineCap = U(n.borderCapStyle, t.borderCapStyle),
    e.setLineDash(U(n.borderDash, t.borderDash)),
    e.lineDashOffset = U(n.borderDashOffset, t.borderDashOffset),
    e.lineJoin = U(n.borderJoinStyle, t.borderJoinStyle),
    e.lineWidth = U(n.borderWidth, t.borderWidth),
    e.strokeStyle = U(n.borderColor, t.borderColor)
}
function X4(e, t, n) {
    e.lineTo(n.x, n.y)
}
function K4(e) {
    return e.stepped ? C3 : e.tension || e.cubicInterpolationMode === "monotone" ? P3 : X4
}
function a2(e, t, n={}) {
    const r = e.length
      , {start: i=0, end: s=r - 1} = n
      , {start: o, end: a} = t
      , l = Math.max(i, o)
      , c = Math.min(s, a)
      , u = i < o && s < o || i > a && s > a;
    return {
        count: r,
        start: l,
        loop: t.loop,
        ilen: c < l && !u ? r + c - l : c - l
    }
}
function Q4(e, t, n, r) {
    const {points: i, options: s} = t
      , {count: o, start: a, loop: l, ilen: c} = a2(i, n, r)
      , u = K4(s);
    let {move: d=!0, reverse: f} = r || {}, p, g, v;
    for (p = 0; p <= c; ++p)
        g = i[(a + (f ? c - p : p)) % o],
        !g.skip && (d ? (e.moveTo(g.x, g.y),
        d = !1) : u(e, v, g, f, s.stepped),
        v = g);
    return l && (g = i[(a + (f ? c : 0)) % o],
    u(e, v, g, f, s.stepped)),
    !!l
}
function Z4(e, t, n, r) {
    const i = t.points
      , {count: s, start: o, ilen: a} = a2(i, n, r)
      , {move: l=!0, reverse: c} = r || {};
    let u = 0, d = 0, f, p, g, v, S, y;
    const m = w=>(o + (c ? a - w : w)) % s
      , b = ()=>{
        v !== S && (e.lineTo(u, S),
        e.lineTo(u, v),
        e.lineTo(u, y))
    }
    ;
    for (l && (p = i[m(0)],
    e.moveTo(p.x, p.y)),
    f = 0; f <= a; ++f) {
        if (p = i[m(f)],
        p.skip)
            continue;
        const w = p.x
          , k = p.y
          , P = w | 0;
        P === g ? (k < v ? v = k : k > S && (S = k),
        u = (d * u + w) / ++d) : (b(),
        e.lineTo(w, k),
        g = P,
        d = 0,
        v = S = k),
        y = k
    }
    b()
}
function Sh(e) {
    const t = e.options
      , n = t.borderDash && t.borderDash.length;
    return !e._decimated && !e._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !n ? Z4 : Q4
}
function q4(e) {
    return e.stepped ? iL : e.tension || e.cubicInterpolationMode === "monotone" ? sL : Vr
}
function J4(e, t, n, r) {
    let i = t._path;
    i || (i = t._path = new Path2D,
    t.path(i, n, r) && i.closePath()),
    o2(e, t.options),
    e.stroke(i)
}
function eD(e, t, n, r) {
    const {segments: i, options: s} = t
      , o = Sh(t);
    for (const a of i)
        o2(e, s, a.style),
        e.beginPath(),
        o(e, t, a, {
            start: n,
            end: n + r - 1
        }) && e.closePath(),
        e.stroke()
}
const tD = typeof Path2D == "function";
function nD(e, t, n, r) {
    tD && !t.options.segment ? J4(e, t, n, r) : eD(e, t, n, r)
}
class Jn extends kr {
    constructor(t) {
        super(),
        this.animated = !0,
        this.options = void 0,
        this._chart = void 0,
        this._loop = void 0,
        this._fullLoop = void 0,
        this._path = void 0,
        this._points = void 0,
        this._segments = void 0,
        this._decimated = !1,
        this._pointsUpdated = !1,
        this._datasetIndex = void 0,
        t && Object.assign(this, t)
    }
    updateControlPoints(t, n) {
        const r = this.options;
        if ((r.tension || r.cubicInterpolationMode === "monotone") && !r.stepped && !this._pointsUpdated) {
            const i = r.spanGaps ? this._loop : this._fullLoop;
            Q3(this._points, r, t, i, n),
            this._pointsUpdated = !0
        }
    }
    set points(t) {
        this._points = t,
        delete this._segments,
        delete this._path,
        this._pointsUpdated = !1
    }
    get points() {
        return this._points
    }
    get segments() {
        return this._segments || (this._segments = dL(this, this.options.segment))
    }
    first() {
        const t = this.segments
          , n = this.points;
        return t.length && n[t[0].start]
    }
    last() {
        const t = this.segments
          , n = this.points
          , r = t.length;
        return r && n[t[r - 1].end]
    }
    interpolate(t, n) {
        const r = this.options
          , i = t[n]
          , s = this.points
          , o = Y_(this, {
            property: n,
            start: i,
            end: i
        });
        if (!o.length)
            return;
        const a = []
          , l = q4(r);
        let c, u;
        for (c = 0,
        u = o.length; c < u; ++c) {
            const {start: d, end: f} = o[c]
              , p = s[d]
              , g = s[f];
            if (p === g) {
                a.push(p);
                continue
            }
            const v = Math.abs((i - p[n]) / (g[n] - p[n]))
              , S = l(p, g, v, r.stepped);
            S[n] = t[n],
            a.push(S)
        }
        return a.length === 1 ? a[0] : a
    }
    pathSegment(t, n, r) {
        return Sh(this)(t, this, n, r)
    }
    path(t, n, r) {
        const i = this.segments
          , s = Sh(this);
        let o = this._loop;
        n = n || 0,
        r = r || this.points.length - n;
        for (const a of i)
            o &= s(t, this, a, {
                start: n,
                end: n + r - 1
            });
        return !!o
    }
    draw(t, n, r, i) {
        const s = this.options || {};
        (this.points || []).length && s.borderWidth && (t.save(),
        nD(t, this, r, i),
        t.restore()),
        this.animated && (this._pointsUpdated = !1,
        this._path = void 0)
    }
}
z(Jn, "id", "line"),
z(Jn, "defaults", {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
}),
z(Jn, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
}),
z(Jn, "descriptors", {
    _scriptable: !0,
    _indexable: t=>t !== "borderDash" && t !== "fill"
});
function x1(e, t, n, r) {
    const i = e.options
      , {[n]: s} = e.getProps([n], r);
    return Math.abs(t - s) < i.radius + i.hitRadius
}
class _l extends kr {
    constructor(n) {
        super();
        z(this, "parsed");
        z(this, "skip");
        z(this, "stop");
        this.options = void 0,
        this.parsed = void 0,
        this.skip = void 0,
        this.stop = void 0,
        n && Object.assign(this, n)
    }
    inRange(n, r, i) {
        const s = this.options
          , {x: o, y: a} = this.getProps(["x", "y"], i);
        return Math.pow(n - o, 2) + Math.pow(r - a, 2) < Math.pow(s.hitRadius + s.radius, 2)
    }
    inXRange(n, r) {
        return x1(this, n, "x", r)
    }
    inYRange(n, r) {
        return x1(this, n, "y", r)
    }
    getCenterPoint(n) {
        const {x: r, y: i} = this.getProps(["x", "y"], n);
        return {
            x: r,
            y: i
        }
    }
    size(n) {
        n = n || this.options || {};
        let r = n.radius || 0;
        r = Math.max(r, r && n.hoverRadius || 0);
        const i = r && n.borderWidth || 0;
        return (r + i) * 2
    }
    draw(n, r) {
        const i = this.options;
        this.skip || i.radius < .1 || !jn(this, r, this.size(i) / 2) || (n.strokeStyle = i.borderColor,
        n.lineWidth = i.borderWidth,
        n.fillStyle = i.backgroundColor,
        yh(n, i, this.x, this.y))
    }
    getRange() {
        const n = this.options || {};
        return n.radius + n.hitRadius
    }
}
z(_l, "id", "point"),
z(_l, "defaults", {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
}),
z(_l, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
});
function l2(e, t) {
    const {x: n, y: r, base: i, width: s, height: o} = e.getProps(["x", "y", "base", "width", "height"], t);
    let a, l, c, u, d;
    return e.horizontal ? (d = o / 2,
    a = Math.min(n, i),
    l = Math.max(n, i),
    c = r - d,
    u = r + d) : (d = s / 2,
    a = n - d,
    l = n + d,
    c = Math.min(r, i),
    u = Math.max(r, i)),
    {
        left: a,
        top: c,
        right: l,
        bottom: u
    }
}
function er(e, t, n, r) {
    return e ? 0 : bt(t, n, r)
}
function rD(e, t, n) {
    const r = e.options.borderWidth
      , i = e.borderSkipped
      , s = F_(r);
    return {
        t: er(i.top, s.top, 0, n),
        r: er(i.right, s.right, 0, t),
        b: er(i.bottom, s.bottom, 0, n),
        l: er(i.left, s.left, 0, t)
    }
}
function iD(e, t, n) {
    const {enableBorderRadius: r} = e.getProps(["enableBorderRadius"])
      , i = e.options.borderRadius
      , s = Qr(i)
      , o = Math.min(t, n)
      , a = e.borderSkipped
      , l = r || Y(i);
    return {
        topLeft: er(!l || a.top || a.left, s.topLeft, 0, o),
        topRight: er(!l || a.top || a.right, s.topRight, 0, o),
        bottomLeft: er(!l || a.bottom || a.left, s.bottomLeft, 0, o),
        bottomRight: er(!l || a.bottom || a.right, s.bottomRight, 0, o)
    }
}
function sD(e) {
    const t = l2(e)
      , n = t.right - t.left
      , r = t.bottom - t.top
      , i = rD(e, n / 2, r / 2)
      , s = iD(e, n / 2, r / 2);
    return {
        outer: {
            x: t.left,
            y: t.top,
            w: n,
            h: r,
            radius: s
        },
        inner: {
            x: t.left + i.l,
            y: t.top + i.t,
            w: n - i.l - i.r,
            h: r - i.t - i.b,
            radius: {
                topLeft: Math.max(0, s.topLeft - Math.max(i.t, i.l)),
                topRight: Math.max(0, s.topRight - Math.max(i.t, i.r)),
                bottomLeft: Math.max(0, s.bottomLeft - Math.max(i.b, i.l)),
                bottomRight: Math.max(0, s.bottomRight - Math.max(i.b, i.r))
            }
        }
    }
}
function xd(e, t, n, r) {
    const i = t === null
      , s = n === null
      , a = e && !(i && s) && l2(e, r);
    return a && (i || qn(t, a.left, a.right)) && (s || qn(n, a.top, a.bottom))
}
function oD(e) {
    return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight
}
function aD(e, t) {
    e.rect(t.x, t.y, t.w, t.h)
}
function bd(e, t, n={}) {
    const r = e.x !== n.x ? -t : 0
      , i = e.y !== n.y ? -t : 0
      , s = (e.x + e.w !== n.x + n.w ? t : 0) - r
      , o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
    return {
        x: e.x + r,
        y: e.y + i,
        w: e.w + s,
        h: e.h + o,
        radius: e.radius
    }
}
class kl extends kr {
    constructor(t) {
        super(),
        this.options = void 0,
        this.horizontal = void 0,
        this.base = void 0,
        this.width = void 0,
        this.height = void 0,
        this.inflateAmount = void 0,
        t && Object.assign(this, t)
    }
    draw(t) {
        const {inflateAmount: n, options: {borderColor: r, backgroundColor: i}} = this
          , {inner: s, outer: o} = sD(this)
          , a = oD(o.radius) ? $o : aD;
        t.save(),
        (o.w !== s.w || o.h !== s.h) && (t.beginPath(),
        a(t, bd(o, n, s)),
        t.clip(),
        a(t, bd(s, -n, o)),
        t.fillStyle = r,
        t.fill("evenodd")),
        t.beginPath(),
        a(t, bd(s, n)),
        t.fillStyle = i,
        t.fill(),
        t.restore()
    }
    inRange(t, n, r) {
        return xd(this, t, n, r)
    }
    inXRange(t, n) {
        return xd(this, t, null, n)
    }
    inYRange(t, n) {
        return xd(this, null, t, n)
    }
    getCenterPoint(t) {
        const {x: n, y: r, base: i, horizontal: s} = this.getProps(["x", "y", "base", "horizontal"], t);
        return {
            x: s ? (n + i) / 2 : n,
            y: s ? r : (r + i) / 2
        }
    }
    getRange(t) {
        return t === "x" ? this.width / 2 : this.height / 2
    }
}
z(kl, "id", "bar"),
z(kl, "defaults", {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
}),
z(kl, "defaultRoutes", {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
});
function lD(e, t, n) {
    const r = e.segments
      , i = e.points
      , s = t.points
      , o = [];
    for (const a of r) {
        let {start: l, end: c} = a;
        c = Mg(l, c, i);
        const u = wh(n, i[l], i[c], a.loop);
        if (!t.segments) {
            o.push({
                source: a,
                target: u,
                start: i[l],
                end: i[c]
            });
            continue
        }
        const d = Y_(t, u);
        for (const f of d) {
            const p = wh(n, s[f.start], s[f.end], f.loop)
              , g = G_(a, i, p);
            for (const v of g)
                o.push({
                    source: v,
                    target: f,
                    start: {
                        [n]: b1(u, p, "start", Math.max)
                    },
                    end: {
                        [n]: b1(u, p, "end", Math.min)
                    }
                })
        }
    }
    return o
}
function wh(e, t, n, r) {
    if (r)
        return;
    let i = t[e]
      , s = n[e];
    return e === "angle" && (i = vt(i),
    s = vt(s)),
    {
        property: e,
        start: i,
        end: s
    }
}
function cD(e, t) {
    const {x: n=null, y: r=null} = e || {}
      , i = t.points
      , s = [];
    return t.segments.forEach(({start: o, end: a})=>{
        a = Mg(o, a, i);
        const l = i[o]
          , c = i[a];
        r !== null ? (s.push({
            x: l.x,
            y: r
        }),
        s.push({
            x: c.x,
            y: r
        })) : n !== null && (s.push({
            x: n,
            y: l.y
        }),
        s.push({
            x: n,
            y: c.y
        }))
    }
    ),
    s
}
function Mg(e, t, n) {
    for (; t > e; t--) {
        const r = n[t];
        if (!isNaN(r.x) && !isNaN(r.y))
            break
    }
    return t
}
function b1(e, t, n, r) {
    return e && t ? r(e[n], t[n]) : e ? e[n] : t ? t[n] : 0
}
function c2(e, t) {
    let n = []
      , r = !1;
    return ie(e) ? (r = !0,
    n = e) : n = cD(e, t),
    n.length ? new Jn({
        points: n,
        options: {
            tension: 0
        },
        _loop: r,
        _fullLoop: r
    }) : null
}
function S1(e) {
    return e && e.fill !== !1
}
function uD(e, t, n) {
    let i = e[t].fill;
    const s = [t];
    let o;
    if (!n)
        return i;
    for (; i !== !1 && s.indexOf(i) === -1; ) {
        if (!ye(i))
            return i;
        if (o = e[i],
        !o)
            return !1;
        if (o.visible)
            return i;
        s.push(i),
        i = o.fill
    }
    return !1
}
function dD(e, t, n) {
    const r = gD(e);
    if (Y(r))
        return isNaN(r.value) ? !1 : r;
    let i = parseFloat(r);
    return ye(i) && Math.floor(i) === i ? fD(r[0], t, i, n) : ["origin", "start", "end", "stack", "shape"].indexOf(r) >= 0 && r
}
function fD(e, t, n, r) {
    return (e === "-" || e === "+") && (n = t + n),
    n === t || n < 0 || n >= r ? !1 : n
}
function hD(e, t) {
    let n = null;
    return e === "start" ? n = t.bottom : e === "end" ? n = t.top : Y(e) ? n = t.getPixelForValue(e.value) : t.getBasePixel && (n = t.getBasePixel()),
    n
}
function pD(e, t, n) {
    let r;
    return e === "start" ? r = n : e === "end" ? r = t.options.reverse ? t.min : t.max : Y(e) ? r = e.value : r = t.getBaseValue(),
    r
}
function gD(e) {
    const t = e.options
      , n = t.fill;
    let r = U(n && n.target, n);
    return r === void 0 && (r = !!t.backgroundColor),
    r === !1 || r === null ? !1 : r === !0 ? "origin" : r
}
function mD(e) {
    const {scale: t, index: n, line: r} = e
      , i = []
      , s = r.segments
      , o = r.points
      , a = vD(t, n);
    a.push(c2({
        x: null,
        y: t.bottom
    }, r));
    for (let l = 0; l < s.length; l++) {
        const c = s[l];
        for (let u = c.start; u <= c.end; u++)
            yD(i, o[u], a)
    }
    return new Jn({
        points: i,
        options: {}
    })
}
function vD(e, t) {
    const n = []
      , r = e.getMatchingVisibleMetas("line");
    for (let i = 0; i < r.length; i++) {
        const s = r[i];
        if (s.index === t)
            break;
        s.hidden || n.unshift(s.dataset)
    }
    return n
}
function yD(e, t, n) {
    const r = [];
    for (let i = 0; i < n.length; i++) {
        const s = n[i]
          , {first: o, last: a, point: l} = xD(s, t, "x");
        if (!(!l || o && a)) {
            if (o)
                r.unshift(l);
            else if (e.push(l),
            !a)
                break
        }
    }
    e.push(...r)
}
function xD(e, t, n) {
    const r = e.interpolate(t, n);
    if (!r)
        return {};
    const i = r[n]
      , s = e.segments
      , o = e.points;
    let a = !1
      , l = !1;
    for (let c = 0; c < s.length; c++) {
        const u = s[c]
          , d = o[u.start][n]
          , f = o[u.end][n];
        if (qn(i, d, f)) {
            a = i === d,
            l = i === f;
            break
        }
    }
    return {
        first: a,
        last: l,
        point: r
    }
}
class u2 {
    constructor(t) {
        this.x = t.x,
        this.y = t.y,
        this.radius = t.radius
    }
    pathSegment(t, n, r) {
        const {x: i, y: s, radius: o} = this;
        return n = n || {
            start: 0,
            end: _t
        },
        t.arc(i, s, o, n.end, n.start, !0),
        !r.bounds
    }
    interpolate(t) {
        const {x: n, y: r, radius: i} = this
          , s = t.angle;
        return {
            x: n + Math.cos(s) * i,
            y: r + Math.sin(s) * i,
            angle: s
        }
    }
}
function bD(e) {
    const {chart: t, fill: n, line: r} = e;
    if (ye(n))
        return SD(t, n);
    if (n === "stack")
        return mD(e);
    if (n === "shape")
        return !0;
    const i = wD(e);
    return i instanceof u2 ? i : c2(i, r)
}
function SD(e, t) {
    const n = e.getDatasetMeta(t);
    return n && e.isDatasetVisible(t) ? n.dataset : null
}
function wD(e) {
    return (e.scale || {}).getPointPositionForValue ? kD(e) : _D(e)
}
function _D(e) {
    const {scale: t={}, fill: n} = e
      , r = hD(n, t);
    if (ye(r)) {
        const i = t.isHorizontal();
        return {
            x: i ? r : null,
            y: i ? null : r
        }
    }
    return null
}
function kD(e) {
    const {scale: t, fill: n} = e
      , r = t.options
      , i = t.getLabels().length
      , s = r.reverse ? t.max : t.min
      , o = pD(n, t, s)
      , a = [];
    if (r.grid.circular) {
        const l = t.getPointPositionForValue(0, s);
        return new u2({
            x: l.x,
            y: l.y,
            radius: t.getDistanceFromCenterForValue(o)
        })
    }
    for (let l = 0; l < i; ++l)
        a.push(t.getPointPositionForValue(l, o));
    return a
}
function Sd(e, t, n) {
    const r = bD(t)
      , {line: i, scale: s, axis: o} = t
      , a = i.options
      , l = a.fill
      , c = a.backgroundColor
      , {above: u=c, below: d=c} = l || {};
    r && i.points.length && (Qc(e, n),
    CD(e, {
        line: i,
        target: r,
        above: u,
        below: d,
        area: n,
        scale: s,
        axis: o
    }),
    Zc(e))
}
function CD(e, t) {
    const {line: n, target: r, above: i, below: s, area: o, scale: a} = t
      , l = n._loop ? "angle" : t.axis;
    e.save(),
    l === "x" && s !== i && (w1(e, r, o.top),
    _1(e, {
        line: n,
        target: r,
        color: i,
        scale: a,
        property: l
    }),
    e.restore(),
    e.save(),
    w1(e, r, o.bottom)),
    _1(e, {
        line: n,
        target: r,
        color: s,
        scale: a,
        property: l
    }),
    e.restore()
}
function w1(e, t, n) {
    const {segments: r, points: i} = t;
    let s = !0
      , o = !1;
    e.beginPath();
    for (const a of r) {
        const {start: l, end: c} = a
          , u = i[l]
          , d = i[Mg(l, c, i)];
        s ? (e.moveTo(u.x, u.y),
        s = !1) : (e.lineTo(u.x, n),
        e.lineTo(u.x, u.y)),
        o = !!t.pathSegment(e, a, {
            move: o
        }),
        o ? e.closePath() : e.lineTo(d.x, n)
    }
    e.lineTo(t.first().x, n),
    e.closePath(),
    e.clip()
}
function _1(e, t) {
    const {line: n, target: r, property: i, color: s, scale: o} = t
      , a = lD(n, r, i);
    for (const {source: l, target: c, start: u, end: d} of a) {
        const {style: {backgroundColor: f=s}={}} = l
          , p = r !== !0;
        e.save(),
        e.fillStyle = f,
        PD(e, o, p && wh(i, u, d)),
        e.beginPath();
        const g = !!n.pathSegment(e, l);
        let v;
        if (p) {
            g ? e.closePath() : k1(e, r, d, i);
            const S = !!r.pathSegment(e, c, {
                move: g,
                reverse: !0
            });
            v = g && S,
            v || k1(e, r, u, i)
        }
        e.closePath(),
        e.fill(v ? "evenodd" : "nonzero"),
        e.restore()
    }
}
function PD(e, t, n) {
    const {top: r, bottom: i} = t.chart.chartArea
      , {property: s, start: o, end: a} = n || {};
    s === "x" && (e.beginPath(),
    e.rect(o, r, a - o, i - r),
    e.clip())
}
function k1(e, t, n, r) {
    const i = t.interpolate(n, r);
    i && e.lineTo(i.x, i.y)
}
var jD = {
    id: "filler",
    afterDatasetsUpdate(e, t, n) {
        const r = (e.data.datasets || []).length
          , i = [];
        let s, o, a, l;
        for (o = 0; o < r; ++o)
            s = e.getDatasetMeta(o),
            a = s.dataset,
            l = null,
            a && a.options && a instanceof Jn && (l = {
                visible: e.isDatasetVisible(o),
                index: o,
                fill: dD(a, o, r),
                chart: e,
                axis: s.controller.options.indexAxis,
                scale: s.vScale,
                line: a
            }),
            s.$filler = l,
            i.push(l);
        for (o = 0; o < r; ++o)
            l = i[o],
            !(!l || l.fill === !1) && (l.fill = uD(i, o, n.propagate))
    },
    beforeDraw(e, t, n) {
        const r = n.drawTime === "beforeDraw"
          , i = e.getSortedVisibleDatasetMetas()
          , s = e.chartArea;
        for (let o = i.length - 1; o >= 0; --o) {
            const a = i[o].$filler;
            a && (a.line.updateControlPoints(s, a.axis),
            r && a.fill && Sd(e.ctx, a, s))
        }
    },
    beforeDatasetsDraw(e, t, n) {
        if (n.drawTime !== "beforeDatasetsDraw")
            return;
        const r = e.getSortedVisibleDatasetMetas();
        for (let i = r.length - 1; i >= 0; --i) {
            const s = r[i].$filler;
            S1(s) && Sd(e.ctx, s, e.chartArea)
        }
    },
    beforeDatasetDraw(e, t, n) {
        const r = t.meta.$filler;
        !S1(r) || n.drawTime !== "beforeDatasetDraw" || Sd(e.ctx, r, e.chartArea)
    },
    defaults: {
        propagate: !0,
        drawTime: "beforeDatasetDraw"
    }
};
const C1 = (e,t)=>{
    let {boxHeight: n=t, boxWidth: r=t} = e;
    return e.usePointStyle && (n = Math.min(n, t),
    r = e.pointStyleWidth || Math.min(r, t)),
    {
        boxWidth: r,
        boxHeight: n,
        itemHeight: Math.max(t, n)
    }
}
  , ED = (e,t)=>e !== null && t !== null && e.datasetIndex === t.datasetIndex && e.index === t.index;
class P1 extends kr {
    constructor(t) {
        super(),
        this._added = !1,
        this.legendHitBoxes = [],
        this._hoveredItem = null,
        this.doughnutMode = !1,
        this.chart = t.chart,
        this.options = t.options,
        this.ctx = t.ctx,
        this.legendItems = void 0,
        this.columnSizes = void 0,
        this.lineWidths = void 0,
        this.maxHeight = void 0,
        this.maxWidth = void 0,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.height = void 0,
        this.width = void 0,
        this._margins = void 0,
        this.position = void 0,
        this.weight = void 0,
        this.fullSize = void 0
    }
    update(t, n, r) {
        this.maxWidth = t,
        this.maxHeight = n,
        this._margins = r,
        this.setDimensions(),
        this.buildLabels(),
        this.fit()
    }
    setDimensions() {
        this.isHorizontal() ? (this.width = this.maxWidth,
        this.left = this._margins.left,
        this.right = this.width) : (this.height = this.maxHeight,
        this.top = this._margins.top,
        this.bottom = this.height)
    }
    buildLabels() {
        const t = this.options.labels || {};
        let n = ee(t.generateLabels, [this.chart], this) || [];
        t.filter && (n = n.filter(r=>t.filter(r, this.chart.data))),
        t.sort && (n = n.sort((r,i)=>t.sort(r, i, this.chart.data))),
        this.options.reverse && n.reverse(),
        this.legendItems = n
    }
    fit() {
        const {options: t, ctx: n} = this;
        if (!t.display) {
            this.width = this.height = 0;
            return
        }
        const r = t.labels
          , i = Me(r.font)
          , s = i.size
          , o = this._computeTitleHeight()
          , {boxWidth: a, itemHeight: l} = C1(r, s);
        let c, u;
        n.font = i.string,
        this.isHorizontal() ? (c = this.maxWidth,
        u = this._fitRows(o, s, a, l) + 10) : (u = this.maxHeight,
        c = this._fitCols(o, i, a, l) + 10),
        this.width = Math.min(c, t.maxWidth || this.maxWidth),
        this.height = Math.min(u, t.maxHeight || this.maxHeight)
    }
    _fitRows(t, n, r, i) {
        const {ctx: s, maxWidth: o, options: {labels: {padding: a}}} = this
          , l = this.legendHitBoxes = []
          , c = this.lineWidths = [0]
          , u = i + a;
        let d = t;
        s.textAlign = "left",
        s.textBaseline = "middle";
        let f = -1
          , p = -u;
        return this.legendItems.forEach((g,v)=>{
            const S = r + n / 2 + s.measureText(g.text).width;
            (v === 0 || c[c.length - 1] + S + 2 * a > o) && (d += u,
            c[c.length - (v > 0 ? 0 : 1)] = 0,
            p += u,
            f++),
            l[v] = {
                left: 0,
                top: p,
                row: f,
                width: S,
                height: i
            },
            c[c.length - 1] += S + a
        }
        ),
        d
    }
    _fitCols(t, n, r, i) {
        const {ctx: s, maxHeight: o, options: {labels: {padding: a}}} = this
          , l = this.legendHitBoxes = []
          , c = this.columnSizes = []
          , u = o - t;
        let d = a
          , f = 0
          , p = 0
          , g = 0
          , v = 0;
        return this.legendItems.forEach((S,y)=>{
            const {itemWidth: m, itemHeight: b} = MD(r, n, s, S, i);
            y > 0 && p + b + 2 * a > u && (d += f + a,
            c.push({
                width: f,
                height: p
            }),
            g += f + a,
            v++,
            f = p = 0),
            l[y] = {
                left: g,
                top: p,
                col: v,
                width: m,
                height: b
            },
            f = Math.max(f, m),
            p += b + a
        }
        ),
        d += f,
        c.push({
            width: f,
            height: p
        }),
        d
    }
    adjustHitBoxes() {
        if (!this.options.display)
            return;
        const t = this._computeTitleHeight()
          , {legendHitBoxes: n, options: {align: r, labels: {padding: i}, rtl: s}} = this
          , o = Gi(s, this.left, this.width);
        if (this.isHorizontal()) {
            let a = 0
              , l = Xe(r, this.left + i, this.right - this.lineWidths[a]);
            for (const c of n)
                a !== c.row && (a = c.row,
                l = Xe(r, this.left + i, this.right - this.lineWidths[a])),
                c.top += this.top + t + i,
                c.left = o.leftForLtr(o.x(l), c.width),
                l += c.width + i
        } else {
            let a = 0
              , l = Xe(r, this.top + t + i, this.bottom - this.columnSizes[a].height);
            for (const c of n)
                c.col !== a && (a = c.col,
                l = Xe(r, this.top + t + i, this.bottom - this.columnSizes[a].height)),
                c.top = l,
                c.left += this.left + i,
                c.left = o.leftForLtr(o.x(c.left), c.width),
                l += c.height + i
        }
    }
    isHorizontal() {
        return this.options.position === "top" || this.options.position === "bottom"
    }
    draw() {
        if (this.options.display) {
            const t = this.ctx;
            Qc(t, this),
            this._draw(),
            Zc(t)
        }
    }
    _draw() {
        const {options: t, columnSizes: n, lineWidths: r, ctx: i} = this
          , {align: s, labels: o} = t
          , a = xe.color
          , l = Gi(t.rtl, this.left, this.width)
          , c = Me(o.font)
          , {padding: u} = o
          , d = c.size
          , f = d / 2;
        let p;
        this.drawTitle(),
        i.textAlign = l.textAlign("left"),
        i.textBaseline = "middle",
        i.lineWidth = .5,
        i.font = c.string;
        const {boxWidth: g, boxHeight: v, itemHeight: S} = C1(o, d)
          , y = function(P, _, C) {
            if (isNaN(g) || g <= 0 || isNaN(v) || v < 0)
                return;
            i.save();
            const j = U(C.lineWidth, 1);
            if (i.fillStyle = U(C.fillStyle, a),
            i.lineCap = U(C.lineCap, "butt"),
            i.lineDashOffset = U(C.lineDashOffset, 0),
            i.lineJoin = U(C.lineJoin, "miter"),
            i.lineWidth = j,
            i.strokeStyle = U(C.strokeStyle, a),
            i.setLineDash(U(C.lineDash, [])),
            o.usePointStyle) {
                const M = {
                    radius: v * Math.SQRT2 / 2,
                    pointStyle: C.pointStyle,
                    rotation: C.rotation,
                    borderWidth: j
                }
                  , O = l.xPlus(P, g / 2)
                  , A = _ + f;
                D_(i, M, O, A, o.pointStyleWidth && g)
            } else {
                const M = _ + Math.max((d - v) / 2, 0)
                  , O = l.leftForLtr(P, g)
                  , A = Qr(C.borderRadius);
                i.beginPath(),
                Object.values(A).some(N=>N !== 0) ? $o(i, {
                    x: O,
                    y: M,
                    w: g,
                    h: v,
                    radius: A
                }) : i.rect(O, M, g, v),
                i.fill(),
                j !== 0 && i.stroke()
            }
            i.restore()
        }
          , m = function(P, _, C) {
            ai(i, C.text, P, _ + S / 2, c, {
                strikethrough: C.hidden,
                textAlign: l.textAlign(C.textAlign)
            })
        }
          , b = this.isHorizontal()
          , w = this._computeTitleHeight();
        b ? p = {
            x: Xe(s, this.left + u, this.right - r[0]),
            y: this.top + u + w,
            line: 0
        } : p = {
            x: this.left + u,
            y: Xe(s, this.top + w + u, this.bottom - n[0].height),
            line: 0
        },
        H_(this.ctx, t.textDirection);
        const k = S + u;
        this.legendItems.forEach((P,_)=>{
            i.strokeStyle = P.fontColor,
            i.fillStyle = P.fontColor;
            const C = i.measureText(P.text).width
              , j = l.textAlign(P.textAlign || (P.textAlign = o.textAlign))
              , M = g + f + C;
            let O = p.x
              , A = p.y;
            l.setWidth(this.width),
            b ? _ > 0 && O + M + u > this.right && (A = p.y += k,
            p.line++,
            O = p.x = Xe(s, this.left + u, this.right - r[p.line])) : _ > 0 && A + k > this.bottom && (O = p.x = O + n[p.line].width + u,
            p.line++,
            A = p.y = Xe(s, this.top + w + u, this.bottom - n[p.line].height));
            const N = l.x(O);
            if (y(N, A, P),
            O = f3(j, O + g + f, b ? O + M : this.right, t.rtl),
            m(l.x(O), A, P),
            b)
                p.x += M + u;
            else if (typeof P.text != "string") {
                const B = c.lineHeight;
                p.y += d2(P, B) + u
            } else
                p.y += k
        }
        ),
        W_(this.ctx, t.textDirection)
    }
    drawTitle() {
        const t = this.options
          , n = t.title
          , r = Me(n.font)
          , i = Ze(n.padding);
        if (!n.display)
            return;
        const s = Gi(t.rtl, this.left, this.width)
          , o = this.ctx
          , a = n.position
          , l = r.size / 2
          , c = i.top + l;
        let u, d = this.left, f = this.width;
        if (this.isHorizontal())
            f = Math.max(...this.lineWidths),
            u = this.top + c,
            d = Xe(t.align, d, this.right - f);
        else {
            const g = this.columnSizes.reduce((v,S)=>Math.max(v, S.height), 0);
            u = c + Xe(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight())
        }
        const p = Xe(a, d, d + f);
        o.textAlign = s.textAlign(Sg(a)),
        o.textBaseline = "middle",
        o.strokeStyle = n.color,
        o.fillStyle = n.color,
        o.font = r.string,
        ai(o, n.text, p, u, r)
    }
    _computeTitleHeight() {
        const t = this.options.title
          , n = Me(t.font)
          , r = Ze(t.padding);
        return t.display ? n.lineHeight + r.height : 0
    }
    _getLegendItemAt(t, n) {
        let r, i, s;
        if (qn(t, this.left, this.right) && qn(n, this.top, this.bottom)) {
            for (s = this.legendHitBoxes,
            r = 0; r < s.length; ++r)
                if (i = s[r],
                qn(t, i.left, i.left + i.width) && qn(n, i.top, i.top + i.height))
                    return this.legendItems[r]
        }
        return null
    }
    handleEvent(t) {
        const n = this.options;
        if (!AD(t.type, n))
            return;
        const r = this._getLegendItemAt(t.x, t.y);
        if (t.type === "mousemove" || t.type === "mouseout") {
            const i = this._hoveredItem
              , s = ED(i, r);
            i && !s && ee(n.onLeave, [t, i, this], this),
            this._hoveredItem = r,
            r && !s && ee(n.onHover, [t, r, this], this)
        } else
            r && ee(n.onClick, [t, r, this], this)
    }
}
function MD(e, t, n, r, i) {
    const s = TD(r, e, t, n)
      , o = OD(i, r, t.lineHeight);
    return {
        itemWidth: s,
        itemHeight: o
    }
}
function TD(e, t, n, r) {
    let i = e.text;
    return i && typeof i != "string" && (i = i.reduce((s,o)=>s.length > o.length ? s : o)),
    t + n.size / 2 + r.measureText(i).width
}
function OD(e, t, n) {
    let r = e;
    return typeof t.text != "string" && (r = d2(t, n)),
    r
}
function d2(e, t) {
    const n = e.text ? e.text.length : 0;
    return t * n
}
function AD(e, t) {
    return !!((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (e === "click" || e === "mouseup"))
}
var f2 = {
    id: "legend",
    _element: P1,
    start(e, t, n) {
        const r = e.legend = new P1({
            ctx: e.ctx,
            options: n,
            chart: e
        });
        Rt.configure(e, r, n),
        Rt.addBox(e, r)
    },
    stop(e) {
        Rt.removeBox(e, e.legend),
        delete e.legend
    },
    beforeUpdate(e, t, n) {
        const r = e.legend;
        Rt.configure(e, r, n),
        r.options = n
    },
    afterUpdate(e) {
        const t = e.legend;
        t.buildLabels(),
        t.adjustHitBoxes()
    },
    afterEvent(e, t) {
        t.replay || e.legend.handleEvent(t.event)
    },
    defaults: {
        display: !0,
        position: "top",
        align: "center",
        fullSize: !0,
        reverse: !1,
        weight: 1e3,
        onClick(e, t, n) {
            const r = t.datasetIndex
              , i = n.chart;
            i.isDatasetVisible(r) ? (i.hide(r),
            t.hidden = !0) : (i.show(r),
            t.hidden = !1)
        },
        onHover: null,
        onLeave: null,
        labels: {
            color: e=>e.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(e) {
                const t = e.data.datasets
                  , {labels: {usePointStyle: n, pointStyle: r, textAlign: i, color: s, useBorderRadius: o, borderRadius: a}} = e.legend.options;
                return e._getSortedDatasetMetas().map(l=>{
                    const c = l.controller.getStyle(n ? 0 : void 0)
                      , u = Ze(c.borderWidth);
                    return {
                        text: t[l.index].label,
                        fillStyle: c.backgroundColor,
                        fontColor: s,
                        hidden: !l.visible,
                        lineCap: c.borderCapStyle,
                        lineDash: c.borderDash,
                        lineDashOffset: c.borderDashOffset,
                        lineJoin: c.borderJoinStyle,
                        lineWidth: (u.width + u.height) / 4,
                        strokeStyle: c.borderColor,
                        pointStyle: r || c.pointStyle,
                        rotation: c.rotation,
                        textAlign: i || c.textAlign,
                        borderRadius: o && (a || c.borderRadius),
                        datasetIndex: l.index
                    }
                }
                , this)
            }
        },
        title: {
            color: e=>e.chart.options.color,
            display: !1,
            position: "center",
            text: ""
        }
    },
    descriptors: {
        _scriptable: e=>!e.startsWith("on"),
        labels: {
            _scriptable: e=>!["generateLabels", "filter", "sort"].includes(e)
        }
    }
};
class h2 extends kr {
    constructor(t) {
        super(),
        this.chart = t.chart,
        this.options = t.options,
        this.ctx = t.ctx,
        this._padding = void 0,
        this.top = void 0,
        this.bottom = void 0,
        this.left = void 0,
        this.right = void 0,
        this.width = void 0,
        this.height = void 0,
        this.position = void 0,
        this.weight = void 0,
        this.fullSize = void 0
    }
    update(t, n) {
        const r = this.options;
        if (this.left = 0,
        this.top = 0,
        !r.display) {
            this.width = this.height = this.right = this.bottom = 0;
            return
        }
        this.width = this.right = t,
        this.height = this.bottom = n;
        const i = ie(r.text) ? r.text.length : 1;
        this._padding = Ze(r.padding);
        const s = i * Me(r.font).lineHeight + this._padding.height;
        this.isHorizontal() ? this.height = s : this.width = s
    }
    isHorizontal() {
        const t = this.options.position;
        return t === "top" || t === "bottom"
    }
    _drawArgs(t) {
        const {top: n, left: r, bottom: i, right: s, options: o} = this
          , a = o.align;
        let l = 0, c, u, d;
        return this.isHorizontal() ? (u = Xe(a, r, s),
        d = n + t,
        c = s - r) : (o.position === "left" ? (u = r + t,
        d = Xe(a, i, n),
        l = Ce * -.5) : (u = s - t,
        d = Xe(a, n, i),
        l = Ce * .5),
        c = i - n),
        {
            titleX: u,
            titleY: d,
            maxWidth: c,
            rotation: l
        }
    }
    draw() {
        const t = this.ctx
          , n = this.options;
        if (!n.display)
            return;
        const r = Me(n.font)
          , s = r.lineHeight / 2 + this._padding.top
          , {titleX: o, titleY: a, maxWidth: l, rotation: c} = this._drawArgs(s);
        ai(t, n.text, 0, 0, r, {
            color: n.color,
            maxWidth: l,
            rotation: c,
            textAlign: Sg(n.align),
            textBaseline: "middle",
            translation: [o, a]
        })
    }
}
function LD(e, t) {
    const n = new h2({
        ctx: e.ctx,
        options: t,
        chart: e
    });
    Rt.configure(e, n, t),
    Rt.addBox(e, n),
    e.titleBlock = n
}
var p2 = {
    id: "title",
    _element: h2,
    start(e, t, n) {
        LD(e, n)
    },
    stop(e) {
        const t = e.titleBlock;
        Rt.removeBox(e, t),
        delete e.titleBlock
    },
    beforeUpdate(e, t, n) {
        const r = e.titleBlock;
        Rt.configure(e, r, n),
        r.options = n
    },
    defaults: {
        align: "center",
        display: !1,
        font: {
            weight: "bold"
        },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: !0,
        _indexable: !1
    }
};
const Xs = {
    average(e) {
        if (!e.length)
            return !1;
        let t, n, r = 0, i = 0, s = 0;
        for (t = 0,
        n = e.length; t < n; ++t) {
            const o = e[t].element;
            if (o && o.hasValue()) {
                const a = o.tooltipPosition();
                r += a.x,
                i += a.y,
                ++s
            }
        }
        return {
            x: r / s,
            y: i / s
        }
    },
    nearest(e, t) {
        if (!e.length)
            return !1;
        let n = t.x, r = t.y, i = Number.POSITIVE_INFINITY, s, o, a;
        for (s = 0,
        o = e.length; s < o; ++s) {
            const l = e[s].element;
            if (l && l.hasValue()) {
                const c = l.getCenterPoint()
                  , u = mh(t, c);
                u < i && (i = u,
                a = l)
            }
        }
        if (a) {
            const l = a.tooltipPosition();
            n = l.x,
            r = l.y
        }
        return {
            x: n,
            y: r
        }
    }
};
function en(e, t) {
    return t && (ie(t) ? Array.prototype.push.apply(e, t) : e.push(t)),
    e
}
function xn(e) {
    return (typeof e == "string" || e instanceof String) && e.indexOf(`
`) > -1 ? e.split(`
`) : e
}
function DD(e, t) {
    const {element: n, datasetIndex: r, index: i} = t
      , s = e.getDatasetMeta(r).controller
      , {label: o, value: a} = s.getLabelAndValue(i);
    return {
        chart: e,
        label: o,
        parsed: s.getParsed(i),
        raw: e.data.datasets[r].data[i],
        formattedValue: a,
        dataset: s.getDataset(),
        dataIndex: i,
        datasetIndex: r,
        element: n
    }
}
function j1(e, t) {
    const n = e.chart.ctx
      , {body: r, footer: i, title: s} = e
      , {boxWidth: o, boxHeight: a} = t
      , l = Me(t.bodyFont)
      , c = Me(t.titleFont)
      , u = Me(t.footerFont)
      , d = s.length
      , f = i.length
      , p = r.length
      , g = Ze(t.padding);
    let v = g.height
      , S = 0
      , y = r.reduce((w,k)=>w + k.before.length + k.lines.length + k.after.length, 0);
    if (y += e.beforeBody.length + e.afterBody.length,
    d && (v += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom),
    y) {
        const w = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
        v += p * w + (y - p) * l.lineHeight + (y - 1) * t.bodySpacing
    }
    f && (v += t.footerMarginTop + f * u.lineHeight + (f - 1) * t.footerSpacing);
    let m = 0;
    const b = function(w) {
        S = Math.max(S, n.measureText(w).width + m)
    };
    return n.save(),
    n.font = c.string,
    Q(e.title, b),
    n.font = l.string,
    Q(e.beforeBody.concat(e.afterBody), b),
    m = t.displayColors ? o + 2 + t.boxPadding : 0,
    Q(r, w=>{
        Q(w.before, b),
        Q(w.lines, b),
        Q(w.after, b)
    }
    ),
    m = 0,
    n.font = u.string,
    Q(e.footer, b),
    n.restore(),
    S += g.width,
    {
        width: S,
        height: v
    }
}
function RD(e, t) {
    const {y: n, height: r} = t;
    return n < r / 2 ? "top" : n > e.height - r / 2 ? "bottom" : "center"
}
function FD(e, t, n, r) {
    const {x: i, width: s} = r
      , o = n.caretSize + n.caretPadding;
    if (e === "left" && i + s + o > t.width || e === "right" && i - s - o < 0)
        return !0
}
function ID(e, t, n, r) {
    const {x: i, width: s} = n
      , {width: o, chartArea: {left: a, right: l}} = e;
    let c = "center";
    return r === "center" ? c = i <= (a + l) / 2 ? "left" : "right" : i <= s / 2 ? c = "left" : i >= o - s / 2 && (c = "right"),
    FD(c, e, t, n) && (c = "center"),
    c
}
function E1(e, t, n) {
    const r = n.yAlign || t.yAlign || RD(e, n);
    return {
        xAlign: n.xAlign || t.xAlign || ID(e, t, n, r),
        yAlign: r
    }
}
function ND(e, t) {
    let {x: n, width: r} = e;
    return t === "right" ? n -= r : t === "center" && (n -= r / 2),
    n
}
function VD(e, t, n) {
    let {y: r, height: i} = e;
    return t === "top" ? r += n : t === "bottom" ? r -= i + n : r -= i / 2,
    r
}
function M1(e, t, n, r) {
    const {caretSize: i, caretPadding: s, cornerRadius: o} = e
      , {xAlign: a, yAlign: l} = n
      , c = i + s
      , {topLeft: u, topRight: d, bottomLeft: f, bottomRight: p} = Qr(o);
    let g = ND(t, a);
    const v = VD(t, l, c);
    return l === "center" ? a === "left" ? g += c : a === "right" && (g -= c) : a === "left" ? g -= Math.max(u, f) + i : a === "right" && (g += Math.max(d, p) + i),
    {
        x: bt(g, 0, r.width - t.width),
        y: bt(v, 0, r.height - t.height)
    }
}
function Ua(e, t, n) {
    const r = Ze(n.padding);
    return t === "center" ? e.x + e.width / 2 : t === "right" ? e.x + e.width - r.right : e.x + r.left
}
function T1(e) {
    return en([], xn(e))
}
function BD(e, t, n) {
    return _r(e, {
        tooltip: t,
        tooltipItems: n,
        type: "tooltip"
    })
}
function O1(e, t) {
    const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return n ? e.override(n) : e
}
const g2 = {
    beforeTitle: gn,
    title(e) {
        if (e.length > 0) {
            const t = e[0]
              , n = t.chart.data.labels
              , r = n ? n.length : 0;
            if (this && this.options && this.options.mode === "dataset")
                return t.dataset.label || "";
            if (t.label)
                return t.label;
            if (r > 0 && t.dataIndex < r)
                return n[t.dataIndex]
        }
        return ""
    },
    afterTitle: gn,
    beforeBody: gn,
    beforeLabel: gn,
    label(e) {
        if (this && this.options && this.options.mode === "dataset")
            return e.label + ": " + e.formattedValue || e.formattedValue;
        let t = e.dataset.label || "";
        t && (t += ": ");
        const n = e.formattedValue;
        return Z(n) || (t += n),
        t
    },
    labelColor(e) {
        const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
        return {
            borderColor: n.borderColor,
            backgroundColor: n.backgroundColor,
            borderWidth: n.borderWidth,
            borderDash: n.borderDash,
            borderDashOffset: n.borderDashOffset,
            borderRadius: 0
        }
    },
    labelTextColor() {
        return this.options.bodyColor
    },
    labelPointStyle(e) {
        const n = e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);
        return {
            pointStyle: n.pointStyle,
            rotation: n.rotation
        }
    },
    afterLabel: gn,
    afterBody: gn,
    beforeFooter: gn,
    footer: gn,
    afterFooter: gn
};
function st(e, t, n, r) {
    const i = e[t].call(n, r);
    return typeof i > "u" ? g2[t].call(n, r) : i
}
class _h extends kr {
    constructor(t) {
        super(),
        this.opacity = 0,
        this._active = [],
        this._eventPosition = void 0,
        this._size = void 0,
        this._cachedAnimations = void 0,
        this._tooltipItems = [],
        this.$animations = void 0,
        this.$context = void 0,
        this.chart = t.chart,
        this.options = t.options,
        this.dataPoints = void 0,
        this.title = void 0,
        this.beforeBody = void 0,
        this.body = void 0,
        this.afterBody = void 0,
        this.footer = void 0,
        this.xAlign = void 0,
        this.yAlign = void 0,
        this.x = void 0,
        this.y = void 0,
        this.height = void 0,
        this.width = void 0,
        this.caretX = void 0,
        this.caretY = void 0,
        this.labelColors = void 0,
        this.labelPointStyles = void 0,
        this.labelTextColors = void 0
    }
    initialize(t) {
        this.options = t,
        this._cachedAnimations = void 0,
        this.$context = void 0
    }
    _resolveAnimations() {
        const t = this._cachedAnimations;
        if (t)
            return t;
        const n = this.chart
          , r = this.options.setContext(this.getContext())
          , i = r.enabled && n.options.animation && r.animations
          , s = new X_(this.chart,i);
        return i._cacheable && (this._cachedAnimations = Object.freeze(s)),
        s
    }
    getContext() {
        return this.$context || (this.$context = BD(this.chart.getContext(), this, this._tooltipItems))
    }
    getTitle(t, n) {
        const {callbacks: r} = n
          , i = st(r, "beforeTitle", this, t)
          , s = st(r, "title", this, t)
          , o = st(r, "afterTitle", this, t);
        let a = [];
        return a = en(a, xn(i)),
        a = en(a, xn(s)),
        a = en(a, xn(o)),
        a
    }
    getBeforeBody(t, n) {
        return T1(st(n.callbacks, "beforeBody", this, t))
    }
    getBody(t, n) {
        const {callbacks: r} = n
          , i = [];
        return Q(t, s=>{
            const o = {
                before: [],
                lines: [],
                after: []
            }
              , a = O1(r, s);
            en(o.before, xn(st(a, "beforeLabel", this, s))),
            en(o.lines, st(a, "label", this, s)),
            en(o.after, xn(st(a, "afterLabel", this, s))),
            i.push(o)
        }
        ),
        i
    }
    getAfterBody(t, n) {
        return T1(st(n.callbacks, "afterBody", this, t))
    }
    getFooter(t, n) {
        const {callbacks: r} = n
          , i = st(r, "beforeFooter", this, t)
          , s = st(r, "footer", this, t)
          , o = st(r, "afterFooter", this, t);
        let a = [];
        return a = en(a, xn(i)),
        a = en(a, xn(s)),
        a = en(a, xn(o)),
        a
    }
    _createItems(t) {
        const n = this._active
          , r = this.chart.data
          , i = []
          , s = []
          , o = [];
        let a = [], l, c;
        for (l = 0,
        c = n.length; l < c; ++l)
            a.push(DD(this.chart, n[l]));
        return t.filter && (a = a.filter((u,d,f)=>t.filter(u, d, f, r))),
        t.itemSort && (a = a.sort((u,d)=>t.itemSort(u, d, r))),
        Q(a, u=>{
            const d = O1(t.callbacks, u);
            i.push(st(d, "labelColor", this, u)),
            s.push(st(d, "labelPointStyle", this, u)),
            o.push(st(d, "labelTextColor", this, u))
        }
        ),
        this.labelColors = i,
        this.labelPointStyles = s,
        this.labelTextColors = o,
        this.dataPoints = a,
        a
    }
    update(t, n) {
        const r = this.options.setContext(this.getContext())
          , i = this._active;
        let s, o = [];
        if (!i.length)
            this.opacity !== 0 && (s = {
                opacity: 0
            });
        else {
            const a = Xs[r.position].call(this, i, this._eventPosition);
            o = this._createItems(r),
            this.title = this.getTitle(o, r),
            this.beforeBody = this.getBeforeBody(o, r),
            this.body = this.getBody(o, r),
            this.afterBody = this.getAfterBody(o, r),
            this.footer = this.getFooter(o, r);
            const l = this._size = j1(this, r)
              , c = Object.assign({}, a, l)
              , u = E1(this.chart, r, c)
              , d = M1(r, c, u, this.chart);
            this.xAlign = u.xAlign,
            this.yAlign = u.yAlign,
            s = {
                opacity: 1,
                x: d.x,
                y: d.y,
                width: l.width,
                height: l.height,
                caretX: a.x,
                caretY: a.y
            }
        }
        this._tooltipItems = o,
        this.$context = void 0,
        s && this._resolveAnimations().update(this, s),
        t && r.external && r.external.call(this, {
            chart: this.chart,
            tooltip: this,
            replay: n
        })
    }
    drawCaret(t, n, r, i) {
        const s = this.getCaretPosition(t, r, i);
        n.lineTo(s.x1, s.y1),
        n.lineTo(s.x2, s.y2),
        n.lineTo(s.x3, s.y3)
    }
    getCaretPosition(t, n, r) {
        const {xAlign: i, yAlign: s} = this
          , {caretSize: o, cornerRadius: a} = r
          , {topLeft: l, topRight: c, bottomLeft: u, bottomRight: d} = Qr(a)
          , {x: f, y: p} = t
          , {width: g, height: v} = n;
        let S, y, m, b, w, k;
        return s === "center" ? (w = p + v / 2,
        i === "left" ? (S = f,
        y = S - o,
        b = w + o,
        k = w - o) : (S = f + g,
        y = S + o,
        b = w - o,
        k = w + o),
        m = S) : (i === "left" ? y = f + Math.max(l, u) + o : i === "right" ? y = f + g - Math.max(c, d) - o : y = this.caretX,
        s === "top" ? (b = p,
        w = b - o,
        S = y - o,
        m = y + o) : (b = p + v,
        w = b + o,
        S = y + o,
        m = y - o),
        k = b),
        {
            x1: S,
            x2: y,
            x3: m,
            y1: b,
            y2: w,
            y3: k
        }
    }
    drawTitle(t, n, r) {
        const i = this.title
          , s = i.length;
        let o, a, l;
        if (s) {
            const c = Gi(r.rtl, this.x, this.width);
            for (t.x = Ua(this, r.titleAlign, r),
            n.textAlign = c.textAlign(r.titleAlign),
            n.textBaseline = "middle",
            o = Me(r.titleFont),
            a = r.titleSpacing,
            n.fillStyle = r.titleColor,
            n.font = o.string,
            l = 0; l < s; ++l)
                n.fillText(i[l], c.x(t.x), t.y + o.lineHeight / 2),
                t.y += o.lineHeight + a,
                l + 1 === s && (t.y += r.titleMarginBottom - a)
        }
    }
    _drawColorBox(t, n, r, i, s) {
        const o = this.labelColors[r]
          , a = this.labelPointStyles[r]
          , {boxHeight: l, boxWidth: c} = s
          , u = Me(s.bodyFont)
          , d = Ua(this, "left", s)
          , f = i.x(d)
          , p = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0
          , g = n.y + p;
        if (s.usePointStyle) {
            const v = {
                radius: Math.min(c, l) / 2,
                pointStyle: a.pointStyle,
                rotation: a.rotation,
                borderWidth: 1
            }
              , S = i.leftForLtr(f, c) + c / 2
              , y = g + l / 2;
            t.strokeStyle = s.multiKeyBackground,
            t.fillStyle = s.multiKeyBackground,
            yh(t, v, S, y),
            t.strokeStyle = o.borderColor,
            t.fillStyle = o.backgroundColor,
            yh(t, v, S, y)
        } else {
            t.lineWidth = Y(o.borderWidth) ? Math.max(...Object.values(o.borderWidth)) : o.borderWidth || 1,
            t.strokeStyle = o.borderColor,
            t.setLineDash(o.borderDash || []),
            t.lineDashOffset = o.borderDashOffset || 0;
            const v = i.leftForLtr(f, c)
              , S = i.leftForLtr(i.xPlus(f, 1), c - 2)
              , y = Qr(o.borderRadius);
            Object.values(y).some(m=>m !== 0) ? (t.beginPath(),
            t.fillStyle = s.multiKeyBackground,
            $o(t, {
                x: v,
                y: g,
                w: c,
                h: l,
                radius: y
            }),
            t.fill(),
            t.stroke(),
            t.fillStyle = o.backgroundColor,
            t.beginPath(),
            $o(t, {
                x: S,
                y: g + 1,
                w: c - 2,
                h: l - 2,
                radius: y
            }),
            t.fill()) : (t.fillStyle = s.multiKeyBackground,
            t.fillRect(v, g, c, l),
            t.strokeRect(v, g, c, l),
            t.fillStyle = o.backgroundColor,
            t.fillRect(S, g + 1, c - 2, l - 2))
        }
        t.fillStyle = this.labelTextColors[r]
    }
    drawBody(t, n, r) {
        const {body: i} = this
          , {bodySpacing: s, bodyAlign: o, displayColors: a, boxHeight: l, boxWidth: c, boxPadding: u} = r
          , d = Me(r.bodyFont);
        let f = d.lineHeight
          , p = 0;
        const g = Gi(r.rtl, this.x, this.width)
          , v = function(C) {
            n.fillText(C, g.x(t.x + p), t.y + f / 2),
            t.y += f + s
        }
          , S = g.textAlign(o);
        let y, m, b, w, k, P, _;
        for (n.textAlign = o,
        n.textBaseline = "middle",
        n.font = d.string,
        t.x = Ua(this, S, r),
        n.fillStyle = r.bodyColor,
        Q(this.beforeBody, v),
        p = a && S !== "right" ? o === "center" ? c / 2 + u : c + 2 + u : 0,
        w = 0,
        P = i.length; w < P; ++w) {
            for (y = i[w],
            m = this.labelTextColors[w],
            n.fillStyle = m,
            Q(y.before, v),
            b = y.lines,
            a && b.length && (this._drawColorBox(n, t, w, g, r),
            f = Math.max(d.lineHeight, l)),
            k = 0,
            _ = b.length; k < _; ++k)
                v(b[k]),
                f = d.lineHeight;
            Q(y.after, v)
        }
        p = 0,
        f = d.lineHeight,
        Q(this.afterBody, v),
        t.y -= s
    }
    drawFooter(t, n, r) {
        const i = this.footer
          , s = i.length;
        let o, a;
        if (s) {
            const l = Gi(r.rtl, this.x, this.width);
            for (t.x = Ua(this, r.footerAlign, r),
            t.y += r.footerMarginTop,
            n.textAlign = l.textAlign(r.footerAlign),
            n.textBaseline = "middle",
            o = Me(r.footerFont),
            n.fillStyle = r.footerColor,
            n.font = o.string,
            a = 0; a < s; ++a)
                n.fillText(i[a], l.x(t.x), t.y + o.lineHeight / 2),
                t.y += o.lineHeight + r.footerSpacing
        }
    }
    drawBackground(t, n, r, i) {
        const {xAlign: s, yAlign: o} = this
          , {x: a, y: l} = t
          , {width: c, height: u} = r
          , {topLeft: d, topRight: f, bottomLeft: p, bottomRight: g} = Qr(i.cornerRadius);
        n.fillStyle = i.backgroundColor,
        n.strokeStyle = i.borderColor,
        n.lineWidth = i.borderWidth,
        n.beginPath(),
        n.moveTo(a + d, l),
        o === "top" && this.drawCaret(t, n, r, i),
        n.lineTo(a + c - f, l),
        n.quadraticCurveTo(a + c, l, a + c, l + f),
        o === "center" && s === "right" && this.drawCaret(t, n, r, i),
        n.lineTo(a + c, l + u - g),
        n.quadraticCurveTo(a + c, l + u, a + c - g, l + u),
        o === "bottom" && this.drawCaret(t, n, r, i),
        n.lineTo(a + p, l + u),
        n.quadraticCurveTo(a, l + u, a, l + u - p),
        o === "center" && s === "left" && this.drawCaret(t, n, r, i),
        n.lineTo(a, l + d),
        n.quadraticCurveTo(a, l, a + d, l),
        n.closePath(),
        n.fill(),
        i.borderWidth > 0 && n.stroke()
    }
    _updateAnimationTarget(t) {
        const n = this.chart
          , r = this.$animations
          , i = r && r.x
          , s = r && r.y;
        if (i || s) {
            const o = Xs[t.position].call(this, this._active, this._eventPosition);
            if (!o)
                return;
            const a = this._size = j1(this, t)
              , l = Object.assign({}, o, this._size)
              , c = E1(n, t, l)
              , u = M1(t, l, c, n);
            (i._to !== u.x || s._to !== u.y) && (this.xAlign = c.xAlign,
            this.yAlign = c.yAlign,
            this.width = a.width,
            this.height = a.height,
            this.caretX = o.x,
            this.caretY = o.y,
            this._resolveAnimations().update(this, u))
        }
    }
    _willRender() {
        return !!this.opacity
    }
    draw(t) {
        const n = this.options.setContext(this.getContext());
        let r = this.opacity;
        if (!r)
            return;
        this._updateAnimationTarget(n);
        const i = {
            width: this.width,
            height: this.height
        }
          , s = {
            x: this.x,
            y: this.y
        };
        r = Math.abs(r) < .001 ? 0 : r;
        const o = Ze(n.padding)
          , a = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
        n.enabled && a && (t.save(),
        t.globalAlpha = r,
        this.drawBackground(s, t, i, n),
        H_(t, n.textDirection),
        s.y += o.top,
        this.drawTitle(s, t, n),
        this.drawBody(s, t, n),
        this.drawFooter(s, t, n),
        W_(t, n.textDirection),
        t.restore())
    }
    getActiveElements() {
        return this._active || []
    }
    setActiveElements(t, n) {
        const r = this._active
          , i = t.map(({datasetIndex: a, index: l})=>{
            const c = this.chart.getDatasetMeta(a);
            if (!c)
                throw new Error("Cannot find a dataset at index " + a);
            return {
                datasetIndex: a,
                element: c.data[l],
                index: l
            }
        }
        )
          , s = !cc(r, i)
          , o = this._positionChanged(i, n);
        (s || o) && (this._active = i,
        this._eventPosition = n,
        this._ignoreReplayEvents = !0,
        this.update(!0))
    }
    handleEvent(t, n, r=!0) {
        if (n && this._ignoreReplayEvents)
            return !1;
        this._ignoreReplayEvents = !1;
        const i = this.options
          , s = this._active || []
          , o = this._getActiveElements(t, s, n, r)
          , a = this._positionChanged(o, t)
          , l = n || !cc(o, s) || a;
        return l && (this._active = o,
        (i.enabled || i.external) && (this._eventPosition = {
            x: t.x,
            y: t.y
        },
        this.update(!0, n))),
        l
    }
    _getActiveElements(t, n, r, i) {
        const s = this.options;
        if (t.type === "mouseout")
            return [];
        if (!i)
            return n;
        const o = this.chart.getElementsAtEventForMode(t, s.mode, s, r);
        return s.reverse && o.reverse(),
        o
    }
    _positionChanged(t, n) {
        const {caretX: r, caretY: i, options: s} = this
          , o = Xs[s.position].call(this, t, n);
        return o !== !1 && (r !== o.x || i !== o.y)
    }
}
z(_h, "positioners", Xs);
var m2 = {
    id: "tooltip",
    _element: _h,
    positioners: Xs,
    afterInit(e, t, n) {
        n && (e.tooltip = new _h({
            chart: e,
            options: n
        }))
    },
    beforeUpdate(e, t, n) {
        e.tooltip && e.tooltip.initialize(n)
    },
    reset(e, t, n) {
        e.tooltip && e.tooltip.initialize(n)
    },
    afterDraw(e) {
        const t = e.tooltip;
        if (t && t._willRender()) {
            const n = {
                tooltip: t
            };
            if (e.notifyPlugins("beforeTooltipDraw", {
                ...n,
                cancelable: !0
            }) === !1)
                return;
            t.draw(e.ctx),
            e.notifyPlugins("afterTooltipDraw", n)
        }
    },
    afterEvent(e, t) {
        if (e.tooltip) {
            const n = t.replay;
            e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0)
        }
    },
    defaults: {
        enabled: !0,
        external: null,
        position: "average",
        backgroundColor: "rgba(0,0,0,0.8)",
        titleColor: "#fff",
        titleFont: {
            weight: "bold"
        },
        titleSpacing: 2,
        titleMarginBottom: 6,
        titleAlign: "left",
        bodyColor: "#fff",
        bodySpacing: 2,
        bodyFont: {},
        bodyAlign: "left",
        footerColor: "#fff",
        footerSpacing: 2,
        footerMarginTop: 6,
        footerFont: {
            weight: "bold"
        },
        footerAlign: "left",
        padding: 6,
        caretPadding: 2,
        caretSize: 5,
        cornerRadius: 6,
        boxHeight: (e,t)=>t.bodyFont.size,
        boxWidth: (e,t)=>t.bodyFont.size,
        multiKeyBackground: "#fff",
        displayColors: !0,
        boxPadding: 0,
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 0,
        animation: {
            duration: 400,
            easing: "easeOutQuart"
        },
        animations: {
            numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"]
            },
            opacity: {
                easing: "linear",
                duration: 200
            }
        },
        callbacks: g2
    },
    defaultRoutes: {
        bodyFont: "font",
        footerFont: "font",
        titleFont: "font"
    },
    descriptors: {
        _scriptable: e=>e !== "filter" && e !== "itemSort" && e !== "external",
        _indexable: !1,
        callbacks: {
            _scriptable: !1,
            _indexable: !1
        },
        animation: {
            _fallback: !1
        },
        animations: {
            _fallback: "animation"
        }
    },
    additionalOptionScopes: ["interaction"]
};
const zD = (e,t,n,r)=>(typeof t == "string" ? (n = e.push(t) - 1,
r.unshift({
    index: n,
    label: t
})) : isNaN(t) && (n = null),
n);
function $D(e, t, n, r) {
    const i = e.indexOf(t);
    if (i === -1)
        return zD(e, t, n, r);
    const s = e.lastIndexOf(t);
    return i !== s ? n : i
}
const HD = (e,t)=>e === null ? null : bt(Math.round(e), 0, t);
function A1(e) {
    const t = this.getLabels();
    return e >= 0 && e < t.length ? t[e] : e
}
class gc extends fi {
    constructor(t) {
        super(t),
        this._startValue = void 0,
        this._valueRange = 0,
        this._addedLabels = []
    }
    init(t) {
        const n = this._addedLabels;
        if (n.length) {
            const r = this.getLabels();
            for (const {index: i, label: s} of n)
                r[i] === s && r.splice(i, 1);
            this._addedLabels = []
        }
        super.init(t)
    }
    parse(t, n) {
        if (Z(t))
            return null;
        const r = this.getLabels();
        return n = isFinite(n) && r[n] === t ? n : $D(r, t, U(n, t), this._addedLabels),
        HD(n, r.length - 1)
    }
    determineDataLimits() {
        const {minDefined: t, maxDefined: n} = this.getUserBounds();
        let {min: r, max: i} = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (r = 0),
        n || (i = this.getLabels().length - 1)),
        this.min = r,
        this.max = i
    }
    buildTicks() {
        const t = this.min
          , n = this.max
          , r = this.options.offset
          , i = [];
        let s = this.getLabels();
        s = t === 0 && n === s.length - 1 ? s : s.slice(t, n + 1),
        this._valueRange = Math.max(s.length - (r ? 0 : 1), 1),
        this._startValue = this.min - (r ? .5 : 0);
        for (let o = t; o <= n; o++)
            i.push({
                value: o
            });
        return i
    }
    getLabelForValue(t) {
        return A1.call(this, t)
    }
    configure() {
        super.configure(),
        this.isHorizontal() || (this._reversePixels = !this._reversePixels)
    }
    getPixelForValue(t) {
        return typeof t != "number" && (t = this.parse(t)),
        t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }
    getPixelForTick(t) {
        const n = this.ticks;
        return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
    }
    getValueForPixel(t) {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
    }
    getBasePixel() {
        return this.bottom
    }
}
z(gc, "id", "category"),
z(gc, "defaults", {
    ticks: {
        callback: A1
    }
});
function WD(e, t) {
    const n = []
      , {bounds: i, step: s, min: o, max: a, precision: l, count: c, maxTicks: u, maxDigits: d, includeBounds: f} = e
      , p = s || 1
      , g = u - 1
      , {min: v, max: S} = t
      , y = !Z(o)
      , m = !Z(a)
      , b = !Z(c)
      , w = (S - v) / (d + 1);
    let k = My((S - v) / g / p) * p, P, _, C, j;
    if (k < 1e-14 && !y && !m)
        return [{
            value: v
        }, {
            value: S
        }];
    j = Math.ceil(S / k) - Math.floor(v / k),
    j > g && (k = My(j * k / g / p) * p),
    Z(l) || (P = Math.pow(10, l),
    k = Math.ceil(k * P) / P),
    i === "ticks" ? (_ = Math.floor(v / k) * k,
    C = Math.ceil(S / k) * k) : (_ = v,
    C = S),
    y && m && s && i3((a - o) / s, k / 1e3) ? (j = Math.round(Math.min((a - o) / k, u)),
    k = (a - o) / j,
    _ = o,
    C = a) : b ? (_ = y ? o : _,
    C = m ? a : C,
    j = c - 1,
    k = (C - _) / j) : (j = (C - _) / k,
    co(j, Math.round(j), k / 1e3) ? j = Math.round(j) : j = Math.ceil(j));
    const M = Math.max(Ty(k), Ty(_));
    P = Math.pow(10, Z(l) ? M : l),
    _ = Math.round(_ * P) / P,
    C = Math.round(C * P) / P;
    let O = 0;
    for (y && (f && _ !== o ? (n.push({
        value: o
    }),
    _ < o && O++,
    co(Math.round((_ + O * k) * P) / P, o, L1(o, w, e)) && O++) : _ < o && O++); O < j; ++O) {
        const A = Math.round((_ + O * k) * P) / P;
        if (m && A > a)
            break;
        n.push({
            value: A
        })
    }
    return m && f && C !== a ? n.length && co(n[n.length - 1].value, a, L1(a, w, e)) ? n[n.length - 1].value = a : n.push({
        value: a
    }) : (!m || C === a) && n.push({
        value: C
    }),
    n
}
function L1(e, t, {horizontal: n, minRotation: r}) {
    const i = Zn(r)
      , s = (n ? Math.sin(i) : Math.cos(i)) || .001
      , o = .75 * t * ("" + e).length;
    return Math.min(t / s, o)
}
class mc extends fi {
    constructor(t) {
        super(t),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._endValue = void 0,
        this._valueRange = 0
    }
    parse(t, n) {
        return Z(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t
    }
    handleTickRangeOptions() {
        const {beginAtZero: t} = this.options
          , {minDefined: n, maxDefined: r} = this.getUserBounds();
        let {min: i, max: s} = this;
        const o = l=>i = n ? i : l
          , a = l=>s = r ? s : l;
        if (t) {
            const l = cn(i)
              , c = cn(s);
            l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0)
        }
        if (i === s) {
            let l = s === 0 ? 1 : Math.abs(s * .05);
            a(s + l),
            t || o(i - l)
        }
        this.min = i,
        this.max = s
    }
    getTickLimit() {
        const t = this.options.ticks;
        let {maxTicksLimit: n, stepSize: r} = t, i;
        return r ? (i = Math.ceil(this.max / r) - Math.floor(this.min / r) + 1,
        i > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${r} would result generating up to ${i} ticks. Limiting to 1000.`),
        i = 1e3)) : (i = this.computeTickLimit(),
        n = n || 11),
        n && (i = Math.min(n, i)),
        i
    }
    computeTickLimit() {
        return Number.POSITIVE_INFINITY
    }
    buildTicks() {
        const t = this.options
          , n = t.ticks;
        let r = this.getTickLimit();
        r = Math.max(2, r);
        const i = {
            maxTicks: r,
            bounds: t.bounds,
            min: t.min,
            max: t.max,
            precision: n.precision,
            step: n.stepSize,
            count: n.count,
            maxDigits: this._maxDigits(),
            horizontal: this.isHorizontal(),
            minRotation: n.minRotation || 0,
            includeBounds: n.includeBounds !== !1
        }
          , s = this._range || this
          , o = WD(i, s);
        return t.bounds === "ticks" && j_(o, this, "value"),
        t.reverse ? (o.reverse(),
        this.start = this.max,
        this.end = this.min) : (this.start = this.min,
        this.end = this.max),
        o
    }
    configure() {
        const t = this.ticks;
        let n = this.min
          , r = this.max;
        if (super.configure(),
        this.options.offset && t.length) {
            const i = (r - n) / Math.max(t.length - 1, 1) / 2;
            n -= i,
            r += i
        }
        this._startValue = n,
        this._endValue = r,
        this._valueRange = r - n
    }
    getLabelForValue(t) {
        return _g(t, this.chart.options.locale, this.options.ticks.format)
    }
}
class vc extends mc {
    determineDataLimits() {
        const {min: t, max: n} = this.getMinMax(!0);
        this.min = ye(t) ? t : 0,
        this.max = ye(n) ? n : 1,
        this.handleTickRangeOptions()
    }
    computeTickLimit() {
        const t = this.isHorizontal()
          , n = t ? this.width : this.height
          , r = Zn(this.options.ticks.minRotation)
          , i = (t ? Math.sin(r) : Math.cos(r)) || .001
          , s = this._resolveTickFontOptions(0);
        return Math.ceil(n / Math.min(40, s.lineHeight / i))
    }
    getPixelForValue(t) {
        return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }
    getValueForPixel(t) {
        return this._startValue + this.getDecimalForPixel(t) * this._valueRange
    }
}
z(vc, "id", "linear"),
z(vc, "defaults", {
    ticks: {
        callback: Kc.formatters.numeric
    }
});
const Wo = e=>Math.floor(Qn(e))
  , Ar = (e,t)=>Math.pow(10, Wo(e) + t);
function D1(e) {
    return e / Math.pow(10, Wo(e)) === 1
}
function R1(e, t, n) {
    const r = Math.pow(10, n)
      , i = Math.floor(e / r);
    return Math.ceil(t / r) - i
}
function UD(e, t) {
    const n = t - e;
    let r = Wo(n);
    for (; R1(e, t, r) > 10; )
        r++;
    for (; R1(e, t, r) < 10; )
        r--;
    return Math.min(r, Wo(e))
}
function GD(e, {min: t, max: n}) {
    t = gt(e.min, t);
    const r = []
      , i = Wo(t);
    let s = UD(t, n)
      , o = s < 0 ? Math.pow(10, Math.abs(s)) : 1;
    const a = Math.pow(10, s)
      , l = i > s ? Math.pow(10, i) : 0
      , c = Math.round((t - l) * o) / o
      , u = Math.floor((t - l) / a / 10) * a * 10;
    let d = Math.floor((c - u) / Math.pow(10, s))
      , f = gt(e.min, Math.round((l + u + d * Math.pow(10, s)) * o) / o);
    for (; f < n; )
        r.push({
            value: f,
            major: D1(f),
            significand: d
        }),
        d >= 10 ? d = d < 15 ? 15 : 20 : d++,
        d >= 20 && (s++,
        d = 2,
        o = s >= 0 ? 1 : o),
        f = Math.round((l + u + d * Math.pow(10, s)) * o) / o;
    const p = gt(e.max, f);
    return r.push({
        value: p,
        major: D1(p),
        significand: d
    }),
    r
}
class F1 extends fi {
    constructor(t) {
        super(t),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._valueRange = 0
    }
    parse(t, n) {
        const r = mc.prototype.parse.apply(this, [t, n]);
        if (r === 0) {
            this._zero = !0;
            return
        }
        return ye(r) && r > 0 ? r : null
    }
    determineDataLimits() {
        const {min: t, max: n} = this.getMinMax(!0);
        this.min = ye(t) ? Math.max(0, t) : null,
        this.max = ye(n) ? Math.max(0, n) : null,
        this.options.beginAtZero && (this._zero = !0),
        this._zero && this.min !== this._suggestedMin && !ye(this._userMin) && (this.min = t === Ar(this.min, 0) ? Ar(this.min, -1) : Ar(this.min, 0)),
        this.handleTickRangeOptions()
    }
    handleTickRangeOptions() {
        const {minDefined: t, maxDefined: n} = this.getUserBounds();
        let r = this.min
          , i = this.max;
        const s = a=>r = t ? r : a
          , o = a=>i = n ? i : a;
        r === i && (r <= 0 ? (s(1),
        o(10)) : (s(Ar(r, -1)),
        o(Ar(i, 1)))),
        r <= 0 && s(Ar(i, -1)),
        i <= 0 && o(Ar(r, 1)),
        this.min = r,
        this.max = i
    }
    buildTicks() {
        const t = this.options
          , n = {
            min: this._userMin,
            max: this._userMax
        }
          , r = GD(n, this);
        return t.bounds === "ticks" && j_(r, this, "value"),
        t.reverse ? (r.reverse(),
        this.start = this.max,
        this.end = this.min) : (this.start = this.min,
        this.end = this.max),
        r
    }
    getLabelForValue(t) {
        return t === void 0 ? "0" : _g(t, this.chart.options.locale, this.options.ticks.format)
    }
    configure() {
        const t = this.min;
        super.configure(),
        this._startValue = Qn(t),
        this._valueRange = Qn(this.max) - Qn(t)
    }
    getPixelForValue(t) {
        return (t === void 0 || t === 0) && (t = this.min),
        t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (Qn(t) - this._startValue) / this._valueRange)
    }
    getValueForPixel(t) {
        const n = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + n * this._valueRange)
    }
}
z(F1, "id", "logarithmic"),
z(F1, "defaults", {
    ticks: {
        callback: Kc.formatters.logarithmic,
        major: {
            enabled: !0
        }
    }
});
function kh(e) {
    const t = e.ticks;
    if (t.display && e.display) {
        const n = Ze(t.backdropPadding);
        return U(t.font && t.font.size, xe.font.size) + n.height
    }
    return 0
}
function YD(e, t, n) {
    return n = ie(n) ? n : [n],
    {
        w: k3(e, t.string, n),
        h: n.length * t.lineHeight
    }
}
function I1(e, t, n, r, i) {
    return e === r || e === i ? {
        start: t - n / 2,
        end: t + n / 2
    } : e < r || e > i ? {
        start: t - n,
        end: t
    } : {
        start: t,
        end: t + n
    }
}
function XD(e) {
    const t = {
        l: e.left + e._padding.left,
        r: e.right - e._padding.right,
        t: e.top + e._padding.top,
        b: e.bottom - e._padding.bottom
    }
      , n = Object.assign({}, t)
      , r = []
      , i = []
      , s = e._pointLabels.length
      , o = e.options.pointLabels
      , a = o.centerPointLabels ? Ce / s : 0;
    for (let l = 0; l < s; l++) {
        const c = o.setContext(e.getPointLabelContext(l));
        i[l] = c.padding;
        const u = e.getPointPosition(l, e.drawingArea + i[l], a)
          , d = Me(c.font)
          , f = YD(e.ctx, d, e._pointLabels[l]);
        r[l] = f;
        const p = vt(e.getIndexAngle(l) + a)
          , g = Math.round(xg(p))
          , v = I1(g, u.x, f.w, 0, 180)
          , S = I1(g, u.y, f.h, 90, 270);
        KD(n, t, p, v, S)
    }
    e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    e._pointLabelItems = qD(e, r, i)
}
function KD(e, t, n, r, i) {
    const s = Math.abs(Math.sin(n))
      , o = Math.abs(Math.cos(n));
    let a = 0
      , l = 0;
    r.start < t.l ? (a = (t.l - r.start) / s,
    e.l = Math.min(e.l, t.l - a)) : r.end > t.r && (a = (r.end - t.r) / s,
    e.r = Math.max(e.r, t.r + a)),
    i.start < t.t ? (l = (t.t - i.start) / o,
    e.t = Math.min(e.t, t.t - l)) : i.end > t.b && (l = (i.end - t.b) / o,
    e.b = Math.max(e.b, t.b + l))
}
function QD(e, t, n) {
    const r = e.drawingArea
      , {extra: i, additionalAngle: s, padding: o, size: a} = n
      , l = e.getPointPosition(t, r + i + o, s)
      , c = Math.round(xg(vt(l.angle + xt)))
      , u = tR(l.y, a.h, c)
      , d = JD(c)
      , f = eR(l.x, a.w, d);
    return {
        visible: !0,
        x: l.x,
        y: u,
        textAlign: d,
        left: f,
        top: u,
        right: f + a.w,
        bottom: u + a.h
    }
}
function ZD(e, t) {
    if (!t)
        return !0;
    const {left: n, top: r, right: i, bottom: s} = e;
    return !(jn({
        x: n,
        y: r
    }, t) || jn({
        x: n,
        y: s
    }, t) || jn({
        x: i,
        y: r
    }, t) || jn({
        x: i,
        y: s
    }, t))
}
function qD(e, t, n) {
    const r = []
      , i = e._pointLabels.length
      , s = e.options
      , {centerPointLabels: o, display: a} = s.pointLabels
      , l = {
        extra: kh(s) / 2,
        additionalAngle: o ? Ce / i : 0
    };
    let c;
    for (let u = 0; u < i; u++) {
        l.padding = n[u],
        l.size = t[u];
        const d = QD(e, u, l);
        r.push(d),
        a === "auto" && (d.visible = ZD(d, c),
        d.visible && (c = d))
    }
    return r
}
function JD(e) {
    return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right"
}
function eR(e, t, n) {
    return n === "right" ? e -= t : n === "center" && (e -= t / 2),
    e
}
function tR(e, t, n) {
    return n === 90 || n === 270 ? e -= t / 2 : (n > 270 || n < 90) && (e -= t),
    e
}
function nR(e, t, n) {
    const {left: r, top: i, right: s, bottom: o} = n
      , {backdropColor: a} = t;
    if (!Z(a)) {
        const l = Qr(t.borderRadius)
          , c = Ze(t.backdropPadding);
        e.fillStyle = a;
        const u = r - c.left
          , d = i - c.top
          , f = s - r + c.width
          , p = o - i + c.height;
        Object.values(l).some(g=>g !== 0) ? (e.beginPath(),
        $o(e, {
            x: u,
            y: d,
            w: f,
            h: p,
            radius: l
        }),
        e.fill()) : e.fillRect(u, d, f, p)
    }
}
function rR(e, t) {
    const {ctx: n, options: {pointLabels: r}} = e;
    for (let i = t - 1; i >= 0; i--) {
        const s = e._pointLabelItems[i];
        if (!s.visible)
            continue;
        const o = r.setContext(e.getPointLabelContext(i));
        nR(n, o, s);
        const a = Me(o.font)
          , {x: l, y: c, textAlign: u} = s;
        ai(n, e._pointLabels[i], l, c + a.lineHeight / 2, a, {
            color: o.color,
            textAlign: u,
            textBaseline: "middle"
        })
    }
}
function v2(e, t, n, r) {
    const {ctx: i} = e;
    if (n)
        i.arc(e.xCenter, e.yCenter, t, 0, _t);
    else {
        let s = e.getPointPosition(0, t);
        i.moveTo(s.x, s.y);
        for (let o = 1; o < r; o++)
            s = e.getPointPosition(o, t),
            i.lineTo(s.x, s.y)
    }
}
function iR(e, t, n, r, i) {
    const s = e.ctx
      , o = t.circular
      , {color: a, lineWidth: l} = t;
    !o && !r || !a || !l || n < 0 || (s.save(),
    s.strokeStyle = a,
    s.lineWidth = l,
    s.setLineDash(i.dash),
    s.lineDashOffset = i.dashOffset,
    s.beginPath(),
    v2(e, n, o, r),
    s.closePath(),
    s.stroke(),
    s.restore())
}
function sR(e, t, n) {
    return _r(e, {
        label: n,
        index: t,
        type: "pointLabel"
    })
}
class Ga extends mc {
    constructor(t) {
        super(t),
        this.xCenter = void 0,
        this.yCenter = void 0,
        this.drawingArea = void 0,
        this._pointLabels = [],
        this._pointLabelItems = []
    }
    setDimensions() {
        const t = this._padding = Ze(kh(this.options) / 2)
          , n = this.width = this.maxWidth - t.width
          , r = this.height = this.maxHeight - t.height;
        this.xCenter = Math.floor(this.left + n / 2 + t.left),
        this.yCenter = Math.floor(this.top + r / 2 + t.top),
        this.drawingArea = Math.floor(Math.min(n, r) / 2)
    }
    determineDataLimits() {
        const {min: t, max: n} = this.getMinMax(!1);
        this.min = ye(t) && !isNaN(t) ? t : 0,
        this.max = ye(n) && !isNaN(n) ? n : 0,
        this.handleTickRangeOptions()
    }
    computeTickLimit() {
        return Math.ceil(this.drawingArea / kh(this.options))
    }
    generateTickLabels(t) {
        mc.prototype.generateTickLabels.call(this, t),
        this._pointLabels = this.getLabels().map((n,r)=>{
            const i = ee(this.options.pointLabels.callback, [n, r], this);
            return i || i === 0 ? i : ""
        }
        ).filter((n,r)=>this.chart.getDataVisibility(r))
    }
    fit() {
        const t = this.options;
        t.display && t.pointLabels.display ? XD(this) : this.setCenterPoint(0, 0, 0, 0)
    }
    setCenterPoint(t, n, r, i) {
        this.xCenter += Math.floor((t - n) / 2),
        this.yCenter += Math.floor((r - i) / 2),
        this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, r, i))
    }
    getIndexAngle(t) {
        const n = _t / (this._pointLabels.length || 1)
          , r = this.options.startAngle || 0;
        return vt(t * n + Zn(r))
    }
    getDistanceFromCenterForValue(t) {
        if (Z(t))
            return NaN;
        const n = this.drawingArea / (this.max - this.min);
        return this.options.reverse ? (this.max - t) * n : (t - this.min) * n
    }
    getValueForDistanceFromCenter(t) {
        if (Z(t))
            return NaN;
        const n = t / (this.drawingArea / (this.max - this.min));
        return this.options.reverse ? this.max - n : this.min + n
    }
    getPointLabelContext(t) {
        const n = this._pointLabels || [];
        if (t >= 0 && t < n.length) {
            const r = n[t];
            return sR(this.getContext(), t, r)
        }
    }
    getPointPosition(t, n, r=0) {
        const i = this.getIndexAngle(t) - xt + r;
        return {
            x: Math.cos(i) * n + this.xCenter,
            y: Math.sin(i) * n + this.yCenter,
            angle: i
        }
    }
    getPointPositionForValue(t, n) {
        return this.getPointPosition(t, this.getDistanceFromCenterForValue(n))
    }
    getBasePosition(t) {
        return this.getPointPositionForValue(t || 0, this.getBaseValue())
    }
    getPointLabelPosition(t) {
        const {left: n, top: r, right: i, bottom: s} = this._pointLabelItems[t];
        return {
            left: n,
            top: r,
            right: i,
            bottom: s
        }
    }
    drawBackground() {
        const {backgroundColor: t, grid: {circular: n}} = this.options;
        if (t) {
            const r = this.ctx;
            r.save(),
            r.beginPath(),
            v2(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length),
            r.closePath(),
            r.fillStyle = t,
            r.fill(),
            r.restore()
        }
    }
    drawGrid() {
        const t = this.ctx
          , n = this.options
          , {angleLines: r, grid: i, border: s} = n
          , o = this._pointLabels.length;
        let a, l, c;
        if (n.pointLabels.display && rR(this, o),
        i.display && this.ticks.forEach((u,d)=>{
            if (d !== 0) {
                l = this.getDistanceFromCenterForValue(u.value);
                const f = this.getContext(d)
                  , p = i.setContext(f)
                  , g = s.setContext(f);
                iR(this, p, l, o, g)
            }
        }
        ),
        r.display) {
            for (t.save(),
            a = o - 1; a >= 0; a--) {
                const u = r.setContext(this.getPointLabelContext(a))
                  , {color: d, lineWidth: f} = u;
                !f || !d || (t.lineWidth = f,
                t.strokeStyle = d,
                t.setLineDash(u.borderDash),
                t.lineDashOffset = u.borderDashOffset,
                l = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max),
                c = this.getPointPosition(a, l),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(c.x, c.y),
                t.stroke())
            }
            t.restore()
        }
    }
    drawBorder() {}
    drawLabels() {
        const t = this.ctx
          , n = this.options
          , r = n.ticks;
        if (!r.display)
            return;
        const i = this.getIndexAngle(0);
        let s, o;
        t.save(),
        t.translate(this.xCenter, this.yCenter),
        t.rotate(i),
        t.textAlign = "center",
        t.textBaseline = "middle",
        this.ticks.forEach((a,l)=>{
            if (l === 0 && !n.reverse)
                return;
            const c = r.setContext(this.getContext(l))
              , u = Me(c.font);
            if (s = this.getDistanceFromCenterForValue(this.ticks[l].value),
            c.showLabelBackdrop) {
                t.font = u.string,
                o = t.measureText(a.label).width,
                t.fillStyle = c.backdropColor;
                const d = Ze(c.backdropPadding);
                t.fillRect(-o / 2 - d.left, -s - u.size / 2 - d.top, o + d.width, u.size + d.height)
            }
            ai(t, a.label, 0, -s, u, {
                color: c.color,
                strokeColor: c.textStrokeColor,
                strokeWidth: c.textStrokeWidth
            })
        }
        ),
        t.restore()
    }
    drawTitle() {}
}
z(Ga, "id", "radialLinear"),
z(Ga, "defaults", {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
        display: !0,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
    },
    grid: {
        circular: !1
    },
    startAngle: 0,
    ticks: {
        showLabelBackdrop: !0,
        callback: Kc.formatters.numeric
    },
    pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: !0,
        font: {
            size: 10
        },
        callback(t) {
            return t
        },
        padding: 5,
        centerPointLabels: !1
    }
}),
z(Ga, "defaultRoutes", {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
}),
z(Ga, "descriptors", {
    angleLines: {
        _fallback: "grid"
    }
});
const Jc = {
    millisecond: {
        common: !0,
        size: 1,
        steps: 1e3
    },
    second: {
        common: !0,
        size: 1e3,
        steps: 60
    },
    minute: {
        common: !0,
        size: 6e4,
        steps: 60
    },
    hour: {
        common: !0,
        size: 36e5,
        steps: 24
    },
    day: {
        common: !0,
        size: 864e5,
        steps: 30
    },
    week: {
        common: !1,
        size: 6048e5,
        steps: 4
    },
    month: {
        common: !0,
        size: 2628e6,
        steps: 12
    },
    quarter: {
        common: !1,
        size: 7884e6,
        steps: 4
    },
    year: {
        common: !0,
        size: 3154e7
    }
}
  , at = Object.keys(Jc);
function N1(e, t) {
    return e - t
}
function V1(e, t) {
    if (Z(t))
        return null;
    const n = e._adapter
      , {parser: r, round: i, isoWeekday: s} = e._parseOpts;
    let o = t;
    return typeof r == "function" && (o = r(o)),
    ye(o) || (o = typeof r == "string" ? n.parse(o, r) : n.parse(o)),
    o === null ? null : (i && (o = i === "week" && (zo(s) || s === !0) ? n.startOf(o, "isoWeek", s) : n.startOf(o, i)),
    +o)
}
function B1(e, t, n, r) {
    const i = at.length;
    for (let s = at.indexOf(e); s < i - 1; ++s) {
        const o = Jc[at[s]]
          , a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
        if (o.common && Math.ceil((n - t) / (a * o.size)) <= r)
            return at[s]
    }
    return at[i - 1]
}
function oR(e, t, n, r, i) {
    for (let s = at.length - 1; s >= at.indexOf(n); s--) {
        const o = at[s];
        if (Jc[o].common && e._adapter.diff(i, r, o) >= t - 1)
            return o
    }
    return at[n ? at.indexOf(n) : 0]
}
function aR(e) {
    for (let t = at.indexOf(e) + 1, n = at.length; t < n; ++t)
        if (Jc[at[t]].common)
            return at[t]
}
function z1(e, t, n) {
    if (!n)
        e[t] = !0;
    else if (n.length) {
        const {lo: r, hi: i} = bg(n, t)
          , s = n[r] >= t ? n[r] : n[i];
        e[s] = !0
    }
}
function lR(e, t, n, r) {
    const i = e._adapter
      , s = +i.startOf(t[0].value, r)
      , o = t[t.length - 1].value;
    let a, l;
    for (a = s; a <= o; a = +i.add(a, 1, r))
        l = n[a],
        l >= 0 && (t[l].major = !0);
    return t
}
function $1(e, t, n) {
    const r = []
      , i = {}
      , s = t.length;
    let o, a;
    for (o = 0; o < s; ++o)
        a = t[o],
        i[a] = o,
        r.push({
            value: a,
            major: !1
        });
    return s === 0 || !n ? r : lR(e, r, i, n)
}
class yc extends fi {
    constructor(t) {
        super(t),
        this._cache = {
            data: [],
            labels: [],
            all: []
        },
        this._unit = "day",
        this._majorUnit = void 0,
        this._offsets = {},
        this._normalized = !1,
        this._parseOpts = void 0
    }
    init(t, n={}) {
        const r = t.time || (t.time = {})
          , i = this._adapter = new NL._date(t.adapters.date);
        i.init(n),
        lo(r.displayFormats, i.formats()),
        this._parseOpts = {
            parser: r.parser,
            round: r.round,
            isoWeekday: r.isoWeekday
        },
        super.init(t),
        this._normalized = n.normalized
    }
    parse(t, n) {
        return t === void 0 ? null : V1(this, t)
    }
    beforeLayout() {
        super.beforeLayout(),
        this._cache = {
            data: [],
            labels: [],
            all: []
        }
    }
    determineDataLimits() {
        const t = this.options
          , n = this._adapter
          , r = t.time.unit || "day";
        let {min: i, max: s, minDefined: o, maxDefined: a} = this.getUserBounds();
        function l(c) {
            !o && !isNaN(c.min) && (i = Math.min(i, c.min)),
            !a && !isNaN(c.max) && (s = Math.max(s, c.max))
        }
        (!o || !a) && (l(this._getLabelBounds()),
        (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))),
        i = ye(i) && !isNaN(i) ? i : +n.startOf(Date.now(), r),
        s = ye(s) && !isNaN(s) ? s : +n.endOf(Date.now(), r) + 1,
        this.min = Math.min(i, s - 1),
        this.max = Math.max(i + 1, s)
    }
    _getLabelBounds() {
        const t = this.getLabelTimestamps();
        let n = Number.POSITIVE_INFINITY
          , r = Number.NEGATIVE_INFINITY;
        return t.length && (n = t[0],
        r = t[t.length - 1]),
        {
            min: n,
            max: r
        }
    }
    buildTicks() {
        const t = this.options
          , n = t.time
          , r = t.ticks
          , i = r.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && i.length && (this.min = this._userMin || i[0],
        this.max = this._userMax || i[i.length - 1]);
        const s = this.min
          , o = this.max
          , a = c3(i, s, o);
        return this._unit = n.unit || (r.autoSkip ? B1(n.minUnit, this.min, this.max, this._getLabelCapacity(s)) : oR(this, a.length, n.minUnit, this.min, this.max)),
        this._majorUnit = !r.major.enabled || this._unit === "year" ? void 0 : aR(this._unit),
        this.initOffsets(i),
        t.reverse && a.reverse(),
        $1(this, a, this._majorUnit)
    }
    afterAutoSkip() {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t=>+t.value))
    }
    initOffsets(t=[]) {
        let n = 0, r = 0, i, s;
        this.options.offset && t.length && (i = this.getDecimalForValue(t[0]),
        t.length === 1 ? n = 1 - i : n = (this.getDecimalForValue(t[1]) - i) / 2,
        s = this.getDecimalForValue(t[t.length - 1]),
        t.length === 1 ? r = s : r = (s - this.getDecimalForValue(t[t.length - 2])) / 2);
        const o = t.length < 3 ? .5 : .25;
        n = bt(n, 0, o),
        r = bt(r, 0, o),
        this._offsets = {
            start: n,
            end: r,
            factor: 1 / (n + 1 + r)
        }
    }
    _generate() {
        const t = this._adapter
          , n = this.min
          , r = this.max
          , i = this.options
          , s = i.time
          , o = s.unit || B1(s.minUnit, n, r, this._getLabelCapacity(n))
          , a = U(i.ticks.stepSize, 1)
          , l = o === "week" ? s.isoWeekday : !1
          , c = zo(l) || l === !0
          , u = {};
        let d = n, f, p;
        if (c && (d = +t.startOf(d, "isoWeek", l)),
        d = +t.startOf(d, c ? "day" : o),
        t.diff(r, n, o) > 1e5 * a)
            throw new Error(n + " and " + r + " are too far apart with stepSize of " + a + " " + o);
        const g = i.ticks.source === "data" && this.getDataTimestamps();
        for (f = d,
        p = 0; f < r; f = +t.add(f, a, o),
        p++)
            z1(u, f, g);
        return (f === r || i.bounds === "ticks" || p === 1) && z1(u, f, g),
        Object.keys(u).sort(N1).map(v=>+v)
    }
    getLabelForValue(t) {
        const n = this._adapter
          , r = this.options.time;
        return r.tooltipFormat ? n.format(t, r.tooltipFormat) : n.format(t, r.displayFormats.datetime)
    }
    format(t, n) {
        const i = this.options.time.displayFormats
          , s = this._unit
          , o = n || i[s];
        return this._adapter.format(t, o)
    }
    _tickFormatFunction(t, n, r, i) {
        const s = this.options
          , o = s.ticks.callback;
        if (o)
            return ee(o, [t, n, r], this);
        const a = s.time.displayFormats
          , l = this._unit
          , c = this._majorUnit
          , u = l && a[l]
          , d = c && a[c]
          , f = r[n]
          , p = c && d && f && f.major;
        return this._adapter.format(t, i || (p ? d : u))
    }
    generateTickLabels(t) {
        let n, r, i;
        for (n = 0,
        r = t.length; n < r; ++n)
            i = t[n],
            i.label = this._tickFormatFunction(i.value, n, t)
    }
    getDecimalForValue(t) {
        return t === null ? NaN : (t - this.min) / (this.max - this.min)
    }
    getPixelForValue(t) {
        const n = this._offsets
          , r = this.getDecimalForValue(t);
        return this.getPixelForDecimal((n.start + r) * n.factor)
    }
    getValueForPixel(t) {
        const n = this._offsets
          , r = this.getDecimalForPixel(t) / n.factor - n.end;
        return this.min + r * (this.max - this.min)
    }
    _getLabelSize(t) {
        const n = this.options.ticks
          , r = this.ctx.measureText(t).width
          , i = Zn(this.isHorizontal() ? n.maxRotation : n.minRotation)
          , s = Math.cos(i)
          , o = Math.sin(i)
          , a = this._resolveTickFontOptions(0).size;
        return {
            w: r * s + a * o,
            h: r * o + a * s
        }
    }
    _getLabelCapacity(t) {
        const n = this.options.time
          , r = n.displayFormats
          , i = r[n.unit] || r.millisecond
          , s = this._tickFormatFunction(t, 0, $1(this, [t], this._majorUnit), i)
          , o = this._getLabelSize(s)
          , a = Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) - 1;
        return a > 0 ? a : 1
    }
    getDataTimestamps() {
        let t = this._cache.data || [], n, r;
        if (t.length)
            return t;
        const i = this.getMatchingVisibleMetas();
        if (this._normalized && i.length)
            return this._cache.data = i[0].controller.getAllParsedValues(this);
        for (n = 0,
        r = i.length; n < r; ++n)
            t = t.concat(i[n].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t)
    }
    getLabelTimestamps() {
        const t = this._cache.labels || [];
        let n, r;
        if (t.length)
            return t;
        const i = this.getLabels();
        for (n = 0,
        r = i.length; n < r; ++n)
            t.push(V1(this, i[n]));
        return this._cache.labels = this._normalized ? t : this.normalize(t)
    }
    normalize(t) {
        return T_(t.sort(N1))
    }
}
z(yc, "id", "time"),
z(yc, "defaults", {
    bounds: "data",
    adapters: {},
    time: {
        parser: !1,
        unit: !1,
        round: !1,
        isoWeekday: !1,
        minUnit: "millisecond",
        displayFormats: {}
    },
    ticks: {
        source: "auto",
        callback: !1,
        major: {
            enabled: !1
        }
    }
});
function Ya(e, t, n) {
    let r = 0, i = e.length - 1, s, o, a, l;
    n ? (t >= e[r].pos && t <= e[i].pos && ({lo: r, hi: i} = Gr(e, "pos", t)),
    {pos: s, time: a} = e[r],
    {pos: o, time: l} = e[i]) : (t >= e[r].time && t <= e[i].time && ({lo: r, hi: i} = Gr(e, "time", t)),
    {time: s, pos: a} = e[r],
    {time: o, pos: l} = e[i]);
    const c = o - s;
    return c ? a + (l - a) * (t - s) / c : a
}
class H1 extends yc {
    constructor(t) {
        super(t),
        this._table = [],
        this._minPos = void 0,
        this._tableRange = void 0
    }
    initOffsets() {
        const t = this._getTimestampsForTable()
          , n = this._table = this.buildLookupTable(t);
        this._minPos = Ya(n, this.min),
        this._tableRange = Ya(n, this.max) - this._minPos,
        super.initOffsets(t)
    }
    buildLookupTable(t) {
        const {min: n, max: r} = this
          , i = []
          , s = [];
        let o, a, l, c, u;
        for (o = 0,
        a = t.length; o < a; ++o)
            c = t[o],
            c >= n && c <= r && i.push(c);
        if (i.length < 2)
            return [{
                time: n,
                pos: 0
            }, {
                time: r,
                pos: 1
            }];
        for (o = 0,
        a = i.length; o < a; ++o)
            u = i[o + 1],
            l = i[o - 1],
            c = i[o],
            Math.round((u + l) / 2) !== c && s.push({
                time: c,
                pos: o / (a - 1)
            });
        return s
    }
    _generate() {
        const t = this.min
          , n = this.max;
        let r = super.getDataTimestamps();
        return (!r.includes(t) || !r.length) && r.splice(0, 0, t),
        (!r.includes(n) || r.length === 1) && r.push(n),
        r.sort((i,s)=>i - s)
    }
    _getTimestampsForTable() {
        let t = this._cache.all || [];
        if (t.length)
            return t;
        const n = this.getDataTimestamps()
          , r = this.getLabelTimestamps();
        return n.length && r.length ? t = this.normalize(n.concat(r)) : t = n.length ? n : r,
        t = this._cache.all = t,
        t
    }
    getDecimalForValue(t) {
        return (Ya(this._table, t) - this._minPos) / this._tableRange
    }
    getValueForPixel(t) {
        const n = this._offsets
          , r = this.getDecimalForPixel(t) / n.factor - n.end;
        return Ya(this._table, r * this._tableRange + this._minPos, !0)
    }
}
z(H1, "id", "timeseries"),
z(H1, "defaults", yc.defaults);
const y2 = "label";
function W1(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t)
}
function cR(e, t) {
    const n = e.options;
    n && t && Object.assign(n, t)
}
function x2(e, t) {
    e.labels = t
}
function b2(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : y2;
    const r = [];
    e.datasets = t.map(i=>{
        const s = e.datasets.find(o=>o[n] === i[n]);
        return !s || !i.data || r.includes(s) ? {
            ...i
        } : (r.push(s),
        Object.assign(s, i),
        s)
    }
    )
}
function uR(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y2;
    const n = {
        labels: [],
        datasets: []
    };
    return x2(n, e.labels),
    b2(n, e.datasets, t),
    n
}
function dR(e, t) {
    const {height: n=150, width: r=300, redraw: i=!1, datasetIdKey: s, type: o, data: a, options: l, plugins: c=[], fallbackContent: u, updateMode: d, ...f} = e
      , p = x.useRef(null)
      , g = x.useRef()
      , v = ()=>{
        p.current && (g.current = new On(p.current,{
            type: o,
            data: uR(a, s),
            options: l && {
                ...l
            },
            plugins: c
        }),
        W1(t, g.current))
    }
      , S = ()=>{
        W1(t, null),
        g.current && (g.current.destroy(),
        g.current = null)
    }
    ;
    return x.useEffect(()=>{
        !i && g.current && l && cR(g.current, l)
    }
    , [i, l]),
    x.useEffect(()=>{
        !i && g.current && x2(g.current.config.data, a.labels)
    }
    , [i, a.labels]),
    x.useEffect(()=>{
        !i && g.current && a.datasets && b2(g.current.config.data, a.datasets, s)
    }
    , [i, a.datasets]),
    x.useEffect(()=>{
        g.current && (i ? (S(),
        setTimeout(v)) : g.current.update(d))
    }
    , [i, l, a.labels, a.datasets, d]),
    x.useEffect(()=>{
        g.current && (S(),
        setTimeout(v))
    }
    , [o]),
    x.useEffect(()=>(v(),
    ()=>S()), []),
    de.createElement("canvas", Object.assign({
        ref: p,
        role: "img",
        height: n,
        width: r
    }, f), u)
}
const fR = x.forwardRef(dR);
function S2(e, t) {
    return On.register(t),
    x.forwardRef((n,r)=>de.createElement(fR, Object.assign({}, n, {
        ref: r,
        type: e
    })))
}
const hR = S2("line", Xi)
  , pR = S2("bar", bl);
On.register(gc, vc, kl, p2, m2, f2);
const gR = ()=>{
    const [e,t] = de.useState(window.innerWidth)
      , [n,r] = de.useState(e > 600 ? 14 : 5)
      , i = ()=>{
        t(window.innerWidth),
        e > 600 ? r(14) : r(5)
    }
    ;
    de.useEffect(()=>(window.addEventListener("resize", i),
    ()=>{
        window.removeEventListener("resize", i)
    }
    ), [e]);
    const s = {
        labels: Array(31).fill(""),
        datasets: [{
            data: [50, 49, 48, 47, 46, 45, 44, 45, 46, 47, 48, 49, 50, 48, 47, 45, 47, 48, 49, 50, 48, 45, 43, 45, 47, 49, 50, 49, 48, 47, 46],
            backgroundColor: "#2DD896",
            barThickness: n
        }, {
            data: [2, 3, 5, 7, 10, 11, 12, 10, 10, 12, 14, 10, 10, 10, 12, 15, 17, 20, 17, 15, 12, 9, 6, 4, 2, 0, 0, 0, 2, 3, 5],
            backgroundColor: "#DFD257",
            barThickness: n
        }, {
            data: [25, 24, 23, 22, 20, 19, 17, 16, 15, 13, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 2, 3, 4, 10, 10, 13, 16, 20, 23, 26],
            backgroundColor: "#DF9857",
            barThickness: n
        }, {
            data: [0, 1, 2, 3, 4, 10, 6, 9, 12, 14, 16, 18, 20, 22, 24, 25, 26, 25, 24, 22, 20, 19, 18, 15, 12, 10, 8, 10, 6, 3, 0],
            backgroundColor: "#B755DF",
            barThickness: n
        }, {
            data: [23, 23, 22, 21, 20, 15, 21, 20, 17, 14, 10, 13, 12, 14, 13, 13, 9, 7, 10, 13, 20, 25, 30, 32, 29, 31, 29, 25, 24, 24, 23],
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            barThickness: n
        }]
    }
      , o = {
        animation: {
            easing: "easeInOutQuad",
            duration: 1800
        },
        maintainAspectRatio: !1,
        responsive: !0,
        scales: {
            y: {
                stacked: !0,
                ticks: {
                    display: !1
                },
                grid: {
                    display: !1
                }
            },
            x: {
                stacked: !0,
                ticks: {
                    display: !1
                }
            }
        },
        plugins: {
            legend: {
                display: !1
            }
        }
    };
    return h.jsx(pR, {
        options: o,
        data: s
    })
}
  , mR = ()=>{
    const e = ["05.08", "13.08", "20.08", "28.08", "05.09"];
    return h.jsxs("section", {
        className: "charge-statistics",
        children: [h.jsxs("div", {
            className: "charge-statistics__title",
            children: [h.jsx("h2", {
                children: "Charge statistics"
            }), h.jsxs("h3", {
                children: ["Month", h.jsx("img", {
                    src: pg,
                    alt: "add"
                })]
            })]
        }), h.jsxs("div", {
            className: "charge-statistics__info",
            children: [h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Total spent"
                }), h.jsxs("h4", {
                    children: ["$ ", h.jsx("span", {
                        children: "87"
                    })]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Total charged"
                }), h.jsxs("h4", {
                    children: [h.jsx("span", {
                        children: "324 "
                    }), " kWh"]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Total time"
                }), h.jsxs("h4", {
                    children: [h.jsx("span", {
                        children: "52"
                    }), " hr"]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Visited stations"
                }), h.jsx("h4", {
                    children: h.jsx("span", {
                        children: "43"
                    })
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Parking time"
                }), h.jsxs("h4", {
                    children: [h.jsx("span", {
                        children: "11"
                    }), " hr"]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Cycle Count"
                }), h.jsx("h4", {
                    children: h.jsx("span", {
                        children: "651"
                    })
                })]
            })]
        }), h.jsxs("div", {
            className: "charge-statistics__chart",
            children: [h.jsx("div", {
                children: h.jsx(gR, {})
            }), h.jsx("div", {
                children: e.map(t=>h.jsx("h3", {
                    children: t
                }, t))
            })]
        }), h.jsx("div", {
            className: "charge-statistics__footer-info",
            children: CA.map(({name: t, percent: n, svg: r})=>h.jsxs("div", {
                children: [h.jsx(r, {}), h.jsxs("h3", {
                    children: [t, " -  "]
                }), h.jsxs("h3", {
                    children: [n, "%"]
                })]
            }, t))
        })]
    })
}
;
const vR = "/assets/teslaCity-a2bda4ca.png"
  , yR = "/assets/olsunCity-417963f6.png"
  , xR = ()=>{
    const [e,t] = de.useState("Tesla")
      , n = r=>e === r ? "active" : "";
    return h.jsxs(h.Fragment, {
        children: [h.jsxs("li", {
            className: "item-station",
            children: [h.jsxs("div", {
                "data-row-1": !0,
                children: [h.jsxs("div", {
                    children: [h.jsx("img", {
                        src: vR,
                        alt: "Tesla Station"
                    }), h.jsx("div", {
                        children: h.jsx("h4", {
                            children: "4.8"
                        })
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h3", {
                        children: "Tesla Station"
                    }), h.jsx("h4", {
                        children: "1780 N Beale Rd, Marysville"
                    }), h.jsx("h4", {
                        children: "Ports Available"
                    }), h.jsx("h3", {
                        children: "10"
                    })]
                })]
            }), h.jsxs("div", {
                "data-row-2": !0,
                children: [h.jsxs("div", {
                    className: n("Tesla"),
                    onClick: ()=>t("Tesla"),
                    children: [h.jsxs("h4", {
                        children: ["Tesla ", h.jsx("span", {
                            children: "(AC/DC)"
                        })]
                    }), h.jsxs("h4", {
                        children: ["100 ", h.jsx("span", {
                            children: "kW"
                        })]
                    }), h.jsx("div", {
                        children: h.jsx("div", {})
                    })]
                }), h.jsxs("div", {
                    className: n("Nissan"),
                    onClick: ()=>t("Nissan"),
                    children: [h.jsxs("h4", {
                        children: ["Nissan ", h.jsx("span", {
                            children: "(DC)"
                        })]
                    }), h.jsxs("h4", {
                        children: ["60 ", h.jsx("span", {
                            children: "kW"
                        })]
                    }), h.jsx("div", {
                        children: h.jsx("div", {})
                    })]
                })]
            }), h.jsxs("div", {
                "data-row-3": !0,
                children: [h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Parking Fee"
                    }), h.jsx("h3", {
                        children: "$0.1"
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Arrive"
                    }), h.jsxs("div", {
                        children: [h.jsx("h3", {
                            children: "Today 09:15"
                        }), " ", h.jsx(Us, {})]
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Per kwh"
                    }), h.jsx("h3", {
                        children: "$0.5"
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Depart"
                    }), h.jsxs("div", {
                        children: [h.jsx("h3", {
                            children: "Today 11:25"
                        }), " ", h.jsx(Us, {})]
                    })]
                })]
            }), h.jsxs("div", {
                "data-row-4": !0,
                children: [h.jsx("button", {
                    children: "Book"
                }), h.jsx("button", {
                    children: "Support"
                })]
            })]
        }), h.jsxs("li", {
            className: "item-station",
            children: [h.jsxs("div", {
                "data-row-1": !0,
                children: [h.jsxs("div", {
                    children: [h.jsx("img", {
                        src: yR,
                        alt: "Tesla Station"
                    }), h.jsx("div", {
                        children: h.jsx("h4", {
                            children: "4.5"
                        })
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h3", {
                        children: "Olsun Station"
                    }), h.jsx("h4", {
                        children: "11931 Giusti Rd, Herald"
                    }), h.jsx("h4", {
                        children: "Ports Available"
                    }), h.jsx("h3", {
                        children: "7"
                    })]
                })]
            }), h.jsxs("div", {
                "data-row-2": !0,
                children: [h.jsxs("div", {
                    className: n("Tesla #2"),
                    onClick: ()=>t("Tesla #2"),
                    children: [h.jsxs("h4", {
                        children: ["Tesla ", h.jsx("span", {
                            children: "(AC/DC)"
                        })]
                    }), h.jsxs("h4", {
                        children: ["100 ", h.jsx("span", {
                            children: "kW"
                        })]
                    }), h.jsx("div", {
                        children: h.jsx("div", {})
                    })]
                }), h.jsxs("div", {
                    className: n("Nissan #2"),
                    onClick: ()=>t("Nissan #2"),
                    children: [h.jsxs("h4", {
                        children: ["Nissan ", h.jsx("span", {
                            children: "(DC)"
                        })]
                    }), h.jsxs("h4", {
                        children: ["50 ", h.jsx("span", {
                            children: "kW"
                        })]
                    }), h.jsx("div", {
                        children: h.jsx("div", {})
                    })]
                })]
            }), h.jsxs("div", {
                "data-row-3": !0,
                children: [h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Parking Fee"
                    }), h.jsx("h3", {
                        children: "$0.2"
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Arrive"
                    }), h.jsxs("div", {
                        children: [h.jsx("h3", {
                            children: "Today 09:11"
                        }), " ", h.jsx(Us, {})]
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Per kwh"
                    }), h.jsx("h3", {
                        children: "$0.6"
                    })]
                }), h.jsxs("div", {
                    children: [h.jsx("h4", {
                        children: "Depart"
                    }), h.jsxs("div", {
                        children: [h.jsx("h3", {
                            children: "Today 11:45"
                        }), " ", h.jsx(Us, {})]
                    })]
                })]
            }), h.jsxs("div", {
                "data-row-4": !0,
                children: [h.jsx("button", {
                    children: "Book"
                }), h.jsx("button", {
                    children: "Support"
                })]
            })]
        })]
    })
}
;
const bR = ()=>h.jsxs("section", {
    className: "stations-list",
    children: [h.jsxs("div", {
        className: "stations-list__title",
        children: [h.jsx("h2", {
            children: "Stations list"
        }), h.jsxs("div", {
            children: [h.jsx("h3", {
                className: "gradient-1",
                children: " Favorite"
            }), h.jsx("h3", {
                children: "All"
            })]
        })]
    }), h.jsx("ul", {
        children: h.jsx(xR, {})
    })]
});
const SR = ()=>h.jsxs("main", {
    className: "dashboard",
    children: [h.jsxs("div", {
        children: [h.jsx(cA, {}), h.jsx(pA, {}), h.jsx(xA, {})]
    }), h.jsxs("div", {
        children: [h.jsx(mR, {}), h.jsx(bR, {})]
    })]
});
var w2 = {}
  , as = {};
Object.defineProperty(as, "__esModule", {
    value: !0
});
as.cssValue = as.parseLengthAndUnit = void 0;
var wR = {
    cm: !0,
    mm: !0,
    in: !0,
    px: !0,
    pt: !0,
    pc: !0,
    em: !0,
    ex: !0,
    ch: !0,
    rem: !0,
    vw: !0,
    vh: !0,
    vmin: !0,
    vmax: !0,
    "%": !0
};
function _2(e) {
    if (typeof e == "number")
        return {
            value: e,
            unit: "px"
        };
    var t, n = (e.match(/^[0-9.]*/) || "").toString();
    n.includes(".") ? t = parseFloat(n) : t = parseInt(n, 10);
    var r = (e.match(/[^0-9]*$/) || "").toString();
    return wR[r] ? {
        value: t,
        unit: r
    } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(t, "px.")),
    {
        value: t,
        unit: "px"
    })
}
as.parseLengthAndUnit = _2;
function _R(e) {
    var t = _2(e);
    return "".concat(t.value).concat(t.unit)
}
as.cssValue = _R;
var eu = {};
Object.defineProperty(eu, "__esModule", {
    value: !0
});
eu.createAnimation = void 0;
var kR = function(e, t, n) {
    var r = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window > "u" || !window.document)
        return r;
    var i = document.createElement("style");
    document.head.appendChild(i);
    var s = i.sheet
      , o = `
    @keyframes `.concat(r, ` {
      `).concat(t, `
    }
  `);
    return s && s.insertRule(o, 0),
    r
};
eu.createAnimation = kR;
var xc = un && un.__assign || function() {
    return xc = Object.assign || function(e) {
        for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
        }
        return e
    }
    ,
    xc.apply(this, arguments)
}
  , CR = un && un.__createBinding || (Object.create ? function(e, t, n, r) {
    r === void 0 && (r = n);
    var i = Object.getOwnPropertyDescriptor(t, n);
    (!i || ("get"in i ? !t.__esModule : i.writable || i.configurable)) && (i = {
        enumerable: !0,
        get: function() {
            return t[n]
        }
    }),
    Object.defineProperty(e, r, i)
}
: function(e, t, n, r) {
    r === void 0 && (r = n),
    e[r] = t[n]
}
)
  , PR = un && un.__setModuleDefault || (Object.create ? function(e, t) {
    Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
    })
}
: function(e, t) {
    e.default = t
}
)
  , jR = un && un.__importStar || function(e) {
    if (e && e.__esModule)
        return e;
    var t = {};
    if (e != null)
        for (var n in e)
            n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && CR(t, e, n);
    return PR(t, e),
    t
}
  , ER = un && un.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
;
Object.defineProperty(w2, "__esModule", {
    value: !0
});
var wd = jR(x)
  , Xa = as
  , MR = eu
  , TR = (0,
MR.createAnimation)("BounceLoader", "0% {transform: scale(0)} 50% {transform: scale(1.0)} 100% {transform: scale(0)}", "bounce");
function OR(e) {
    var t = e.loading
      , n = t === void 0 ? !0 : t
      , r = e.color
      , i = r === void 0 ? "#000000" : r
      , s = e.speedMultiplier
      , o = s === void 0 ? 1 : s
      , a = e.cssOverride
      , l = a === void 0 ? {} : a
      , c = e.size
      , u = c === void 0 ? 60 : c
      , d = ER(e, ["loading", "color", "speedMultiplier", "cssOverride", "size"])
      , f = function(g) {
        var v = g === 1 ? "".concat(1 / o, "s") : "0s";
        return {
            position: "absolute",
            height: (0,
            Xa.cssValue)(u),
            width: (0,
            Xa.cssValue)(u),
            backgroundColor: i,
            borderRadius: "100%",
            opacity: .6,
            top: 0,
            left: 0,
            animationFillMode: "both",
            animation: "".concat(TR, " ").concat(2.1 / o, "s ").concat(v, " infinite ease-in-out")
        }
    }
      , p = xc({
        display: "inherit",
        position: "relative",
        width: (0,
        Xa.cssValue)(u),
        height: (0,
        Xa.cssValue)(u)
    }, l);
    return n ? wd.createElement("span", xc({
        style: p
    }, d), wd.createElement("span", {
        style: f(1)
    }), wd.createElement("span", {
        style: f(2)
    })) : null
}
var AR = w2.default = OR;
const LR = "/assets/locationColor-09b6af0b.svg"
  , DR = "/assets/searchGray-3a1d6d16.svg"
  , RR = "/assets/map-1-9b7bacc1.png"
  , FR = "/assets/map-2-b4b5c69c.png"
  , IR = "/assets/map-3-73caab5d.png"
  , NR = {
    display: "block",
    margin: "0 auto",
    borderColor: "red"
}
  , VR = ({isActiveSelect: e})=>{
    const [t,n] = de.useState(!1);
    de.useEffect(()=>{
        t && n(!1),
        setTimeout(()=>{
            n(!0)
        }
        , [1500])
    }
    , [e]);
    const r = i=>{
        switch (i) {
        case 1:
            return RR;
        case 2:
            return FR;
        case 3:
            return IR
        }
    }
    ;
    return h.jsxs("section", {
        className: "map",
        children: [h.jsxs("div", {
            className: "map__title",
            children: [h.jsxs("div", {
                children: [h.jsx("img", {
                    src: LR,
                    alt: "Location Color"
                }), h.jsx("h2", {
                    children: "New York, United States of America"
                })]
            }), h.jsx("div", {
                children: h.jsxs("label", {
                    children: [h.jsx("img", {
                        src: DR,
                        alt: "Search"
                    }), h.jsx("input", {
                        type: "text",
                        placeholder: "Search"
                    })]
                })
            })]
        }), t ? h.jsx(De.img, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 1
            },
            src: r(e),
            alt: "Map"
        }) : h.jsx("div", {
            children: h.jsx(AR, {
                color: "#33D999",
                loading: !0,
                cssOverride: NR,
                size: 80,
                speedMultiplier: 2
            })
        })]
    })
}
  , BR = "/assets/LogoLightning-484794e4.svg"
  , k2 = "/assets/arrowRight-74076b04.svg"
  , zR = "/assets/car-49f98f25.png"
  , $R = "/assets/small-8cdf151b.png";
On.register(gc, vc, _l, Jn, p2, m2, f2, jD, Xi);
const HR = e=>{
    const t = ["#20D691", "#7AE5B5"]
      , n = e.chart.ctx.createLinearGradient(0, 0, 0, e.chart.height);
    return n.addColorStop(0, t[0]),
    n.addColorStop(1, t[1]),
    n
}
;
class Tg extends Xi {
    draw() {
        super.draw(arguments);
        const t = this.chart.ctx
          , n = t.stroke;
        t.stroke = function() {
            t.save(),
            t.shadowColor = "#20D691",
            t.shadowBlur = 3,
            t.shadowOffsetX = 0,
            t.shadowOffsetY = 0,
            n.apply(this, arguments),
            t.restore()
        }
    }
}
Tg.id = "shadowline";
var Px;
Tg.defaults = (Px = On == null ? void 0 : On.LineController) == null ? void 0 : Px.defaults;
On.register(Tg);
const WR = ()=>{
    const n = {
        labels: Array(10).fill(""),
        datasets: [{
            type: "shadowline",
            label: "",
            data: [23, 54, 32, 45, 65, 67, 32, 45, 23, 50],
            borderColor: HR,
            borderWidth: 2,
            tension: .4,
            order: 1,
            radius: 0,
            fill: !0,
            backgroundColor: i=>{
                const s = ["rgba(255, 255, 255, 0.00)", "rgba(32, 214, 145, 0.35)"];
                if (!i.chart.chartArea)
                    return;
                const {ctx: o, chartArea: {top: a, bottom: l}} = i.chart
                  , c = o.createLinearGradient(0, a, 0, l);
                return c.addColorStop(0, s[1]),
                c.addColorStop(1, s[0]),
                c
            }
        }]
    }
      , r = {
        interaction: {
            intersect: !1
        },
        animation: {
            easing: "easeInOutQuad",
            duration: 2e3
        },
        maintainAspectRatio: !1,
        responsive: !0,
        categoryPercentage: .4,
        scales: {
            y: {
                min: 10,
                max: 90,
                beginAtZero: !1,
                ticks: {
                    display: !1
                },
                grid: {
                    display: !1
                },
                border: {
                    display: !1
                }
            },
            x: {
                beginAtZero: !0,
                ticks: {
                    display: !1
                },
                grid: {
                    display: !1
                }
            }
        },
        plugins: {
            tooltip: {
                enabled: !1
            },
            legend: {
                display: !1
            }
        },
        pointLabels: {
            color: "#8186AF"
        }
    };
    return h.jsx(hR, {
        data: n,
        options: r
    })
}
  , UR = ()=>h.jsxs("section", {
    className: "vehicle-stats",
    children: [h.jsxs("div", {
        className: "quick-trip-planer__title",
        children: [h.jsx("h2", {
            children: "Vehicle Stats"
        }), h.jsx("img", {
            src: Yf,
            alt: "dots"
        })]
    }), h.jsx("img", {
        src: zR,
        alt: "car"
    }), h.jsxs("div", {
        className: "vehicle-stats__discription",
        children: [h.jsxs("div", {
            children: [h.jsx("h3", {
                children: "EV"
            }), h.jsx("h4", {
                children: "Tesla"
            })]
        }), h.jsxs("div", {
            children: [h.jsx("h3", {
                children: "Battery"
            }), h.jsx("h4", {
                className: "gradient-1",
                children: "80%"
            })]
        }), h.jsxs("div", {
            children: [h.jsx("h3", {
                children: "Range"
            }), h.jsx("h4", {
                children: "340 miles"
            })]
        }), h.jsxs("div", {
            children: [h.jsx("h3", {
                children: "Temp"
            }), h.jsx("h4", {
                children: "75.2°F"
            })]
        })]
    }), h.jsxs("div", {
        "data-discription": !0,
        children: [h.jsxs("div", {
            className: "vehicle-stats__discription-status",
            children: [h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Battery Status"
                }), h.jsxs("h4", {
                    className: "gradient-1",
                    children: [h.jsx("img", {
                        src: BR,
                        alt: "logo"
                    }), " Good"]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Time Left"
                }), h.jsx("h4", {
                    children: "4:56 h"
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Model"
                }), h.jsx("h4", {
                    children: "Tesla X"
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Activity Time"
                }), h.jsx("h4", {
                    children: "1:24 h"
                })]
            })]
        }), h.jsxs("div", {
            className: "vehicle-stats__discription-station",
            children: [h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Time Left"
                }), h.jsx("h4", {
                    children: "4:56 h"
                })]
            }), h.jsxs("div", {
                children: [h.jsxs("h4", {
                    children: ["1.5 ", h.jsx("span", {
                        children: "mi"
                    })]
                }), h.jsx("img", {
                    src: k2,
                    alt: "Arrow Right"
                })]
            }), h.jsx("img", {
                src: $R,
                alt: "map"
            })]
        })]
    }), h.jsxs("div", {
        className: "vehicle-stats__chart",
        children: [h.jsxs("div", {
            children: [h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Avg Energy"
                }), h.jsxs("h4", {
                    children: ["67 ", h.jsx("span", {
                        children: "kW"
                    })]
                })]
            }), h.jsx("img", {
                src: Yf,
                alt: "dots"
            })]
        }), h.jsx("div", {
            children: h.jsx(WR, {})
        })]
    })]
});
const GR = "/assets/filling-9e04e615.svg"
  , YR = "/assets/close-b87abdd5.svg"
  , XR = [{
    id: 1,
    nameStation: "Tesla Station",
    miles: 1.5,
    price: .6,
    slot: 5
}, {
    id: 2,
    nameStation: "Super Charger",
    miles: 2.3,
    price: .8,
    slot: 9
}, {
    id: 3,
    nameStation: "Shell Station",
    miles: 3.1,
    price: 1.3,
    slot: 4
}]
  , KR = ({hendleActiveSelect: e, isActiveSelect: t})=>h.jsx("ul", {
    className: "select-paths",
    children: XR.map(({id: n, nameStation: r, miles: i, price: s, slot: o})=>h.jsxs("li", {
        className: t === n ? "active" : "",
        onClick: ()=>e(n),
        children: [h.jsxs("div", {
            children: [h.jsx("img", {
                src: GR,
                alt: "filling"
            }), h.jsx("div", {
                children: h.jsx("img", {
                    src: Yf,
                    alt: "dots"
                })
            })]
        }), h.jsxs("div", {
            children: [h.jsxs("h2", {
                children: [i, " ", h.jsx("span", {
                    children: "miles"
                })]
            }), h.jsx("div", {
                children: h.jsx("img", {
                    src: t === n ? YR : k2,
                    alt: "close"
                })
            })]
        }), h.jsx("h4", {
            children: r
        }), h.jsxs("div", {
            children: [h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Type"
                }), h.jsx("h4", {
                    children: "DC"
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Price"
                }), h.jsxs("h4", {
                    children: ["$", s, " ", h.jsx("span", {
                        children: "kW"
                    })]
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Slot"
                }), h.jsx("h4", {
                    children: o
                })]
            })]
        })]
    }, n))
});
const QR = ()=>{
    const [e,t] = de.useState(1)
      , n = r=>{
        t(r)
    }
    ;
    return h.jsxs("main", {
        className: "stations",
        children: [h.jsx(VR, {
            isActiveSelect: e
        }), h.jsx(UR, {}), h.jsx(KR, {
            isActiveSelect: e,
            hendleActiveSelect: n
        })]
    })
}
  , ZR = ()=>h.jsx("main", {
    style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh"
    },
    children: h.jsxs("div", {
        style: {
            textAlign: "center"
        },
        children: [h.jsx("h2", {
            style: {
                color: "#4adda2",
                fontSize: "40px"
            },
            children: "404"
        }), h.jsx("h3", {
            children: "Sorry, That Page Doesn't Exist"
        })]
    })
});
const qR = "/assets/trips-894846be.png"
  , JR = "/assets/milkStreet-f7d8a448.svg";
const e6 = "/assets/location-f4d4d6d9.svg"
  , t6 = "/assets/finish-96d1a942.svg"
  , n6 = "/assets/cartPay-006ce003.svg"
  , r6 = "/assets/visaPay-58e00295.svg"
  , i6 = "/assets/arrowsTopAndUp-08c4b8dc.svg"
  , U1 = "/assets/trips-info-495fcd72.png"
  , s6 = {
    hidden: {
        opacity: 1,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: .3,
            staggerChildren: .2,
            duration: .5
        }
    }
}
  , Is = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
}
  , o6 = ()=>h.jsxs("div", {
    className: "trip-info",
    children: [h.jsx("div", {
        className: "trip-info__line"
    }), h.jsxs(De.div, {
        className: "trip-info__main-content",
        variants: s6,
        initial: "hidden",
        animate: "visible",
        children: [h.jsxs(De.div, {
            className: "trip-info__start-finish",
            variants: Is,
            children: [h.jsx("div", {
                children: h.jsx("img", {
                    src: e6,
                    alt: "start"
                })
            }), h.jsxs("div", {
                children: [h.jsxs("h3", {
                    children: ["Nathan Hill ", h.jsx("span", {
                        children: "started from"
                    }), " Portland St."]
                }), h.jsx("h3", {
                    children: h.jsx("span", {
                        children: "6:12 PM, 11 Aug, 23"
                    })
                })]
            })]
        }), h.jsxs(De.div, {
            "data-marks": !0,
            variants: Is,
            children: [h.jsx("div", {
                children: "1"
            }), h.jsx("div", {}), h.jsxs("div", {
                className: "trip-info__first-descr",
                children: [h.jsxs("div", {
                    children: [h.jsxs("div", {
                        children: [h.jsx("h4", {
                            children: "Tesla Station"
                        }), h.jsx("h5", {
                            children: h.jsx("span", {
                                children: "1780 N Beale Rd, Marysville"
                            })
                        })]
                    }), h.jsx("h5", {
                        children: h.jsx("span", {
                            children: "11:09 AM, 29 Aug, 2023"
                        })
                    })]
                }), h.jsxs("div", {
                    children: [h.jsxs("div", {
                        children: [h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Charging Speed"
                            }), h.jsxs("h4", {
                                children: ["150-350 ", h.jsx("span", {
                                    children: "kW"
                                })]
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Chargers"
                            }), h.jsx("h4", {
                                children: "4"
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Plugs"
                            }), h.jsx("h4", {
                                children: "CCS/SAE"
                            })]
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Parking"
                            }), h.jsx("h4", {
                                children: "Free"
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Cost"
                            }), h.jsxs("h4", {
                                children: ["$0.59 ", h.jsx("span", {
                                    children: "kWh"
                                })]
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Method"
                            }), h.jsxs("h4", {
                                children: [h.jsx("img", {
                                    src: n6,
                                    alt: "Cart Pay"
                                }), " & cash"]
                            })]
                        })]
                    }), h.jsx("img", {
                        src: U1,
                        alt: "Trips Info"
                    })]
                })]
            })]
        }), h.jsxs(De.div, {
            className: "trip-info__middle",
            variants: Is,
            children: [h.jsxs("div", {
                children: [h.jsx("div", {}), h.jsx("div", {
                    children: h.jsx("img", {
                        src: i6,
                        alt: "arrows"
                    })
                })]
            }), h.jsxs("h3", {
                children: [h.jsx("span", {
                    children: "Expand"
                }), " 1 more ", h.jsx("span", {
                    children: "stops from this time period"
                })]
            })]
        }), h.jsxs(De.div, {
            "data-marks": !0,
            style: {
                marginTop: "20px"
            },
            variants: Is,
            children: [h.jsx("div", {
                children: "2"
            }), h.jsx("div", {}), h.jsxs("div", {
                className: "trip-info__first-descr",
                children: [h.jsxs("div", {
                    children: [h.jsxs("div", {
                        children: [h.jsx("h4", {
                            children: "Olsun Station"
                        }), h.jsx("h5", {
                            children: h.jsx("span", {
                                children: "11931 Giusti Rd, Herald"
                            })
                        })]
                    }), h.jsx("h5", {
                        children: h.jsx("span", {
                            children: "11:05 AM, 29 Aug, 2023"
                        })
                    })]
                }), h.jsxs("div", {
                    children: [h.jsxs("div", {
                        children: [h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Charging Speed"
                            }), h.jsxs("h4", {
                                children: ["50 ", h.jsx("span", {
                                    children: "kW"
                                })]
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Chargers"
                            }), h.jsx("h4", {
                                children: "6"
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Plugs"
                            }), h.jsx("h4", {
                                children: "CHADEMO"
                            })]
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Parking"
                            }), h.jsx("h4", {
                                children: "Free"
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Cost"
                            }), h.jsx("h4", {
                                children: "$0.00 / Free"
                            })]
                        }), h.jsxs("div", {
                            children: [h.jsx("h4", {
                                children: "Method"
                            }), h.jsxs("h4", {
                                children: [h.jsx("img", {
                                    src: r6,
                                    alt: "Visa Pay"
                                }), " & cash"]
                            })]
                        })]
                    }), h.jsx("img", {
                        src: U1,
                        alt: "Trips Info"
                    })]
                })]
            })]
        }), h.jsxs(De.div, {
            className: "trip-info__start-finish",
            style: {
                marginTop: "70px"
            },
            variants: Is,
            children: [h.jsx("div", {
                children: h.jsx("img", {
                    src: t6,
                    alt: "finish"
                })
            }), h.jsxs("div", {
                children: [h.jsxs("h3", {
                    children: ["Nathan Hill ", h.jsx("span", {
                        children: "finished on"
                    }), " Milk St."]
                }), h.jsx("h3", {
                    children: h.jsx("span", {
                        children: "6:23 PM, 29 Aug, 23"
                    })
                })]
            })]
        })]
    })]
})
  , a6 = ()=>h.jsxs("section", {
    className: "trips",
    children: [h.jsxs("div", {
        className: "trips__title",
        children: [h.jsx("h2", {
            children: "Plan a route"
        }), h.jsxs("h3", {
            children: ["Month", h.jsx("img", {
                src: pg,
                alt: "add"
            })]
        }), h.jsx("img", {
            src: Yp,
            alt: "plus"
        })]
    }), h.jsxs("div", {
        className: "trips__content",
        children: [h.jsxs(S_, {
            clazzName: "trips__map",
            durationTime: 1,
            children: [h.jsx("img", {
                src: qR,
                alt: "trips"
            }), h.jsxs("div", {
                children: [h.jsx("div", {
                    className: "quick-input",
                    children: h.jsxs("label", {
                        children: [h.jsx("img", {
                            src: w_,
                            alt: "Your Location"
                        }), h.jsx("input", {
                            type: "text",
                            placeholder: "Your Location"
                        })]
                    })
                }), h.jsx("div", {
                    className: "quick-input",
                    children: h.jsxs("label", {
                        children: [h.jsx("img", {
                            src: JR,
                            alt: "Milk Street"
                        }), h.jsx("input", {
                            type: "text",
                            placeholder: "Milk Street"
                        })]
                    })
                })]
            }), h.jsx("div", {
                children: h.jsx(De.button, {
                    whileHover: {
                        scale: 1
                    },
                    whileTap: {
                        scale: 1
                    },
                    children: "Get Directions"
                })
            })]
        }), h.jsx("div", {
            className: "trips__info",
            children: h.jsx(o6, {})
        })]
    })]
});
const l6 = ()=>h.jsxs("section", {
    className: "support",
    children: [h.jsxs("div", {
        children: [h.jsx("p", {
            children: "You can upload your trips from another application using your mail."
        }), h.jsxs("p", {
            children: ["Support: ", h.jsx("a", {
                href: "mailto:evhubhelp@gmail.com",
                children: "evhubhelp@gmail.com"
            })]
        })]
    }), h.jsx("div", {
        children: h.jsx(De.button, {
            whileHover: {
                scale: 1
            },
            whileTap: {
                scale: 1
            },
            children: "Upload"
        })
    })]
})
  , c6 = ()=>h.jsxs("main", {
    children: [h.jsx(a6, {}), h.jsx(l6, {})]
});
function oa(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Ie(e) {
    "@babel/helpers - typeof";
    return Ie = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    Ie(e)
}
function u6(e, t) {
    if (Ie(e) !== "object" || e === null)
        return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(e, t || "default");
        if (Ie(r) !== "object")
            return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function C2(e) {
    var t = u6(e, "string");
    return Ie(t) === "symbol" ? t : String(t)
}
function G1(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value"in r && (r.writable = !0),
        Object.defineProperty(e, C2(r.key), r)
    }
}
function aa(e, t, n) {
    return t && G1(e.prototype, t),
    n && G1(e, n),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    e
}
function Ch(e, t) {
    return Ch = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
        return r.__proto__ = i,
        r
    }
    ,
    Ch(e, t)
}
function P2(e, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(e, "prototype", {
        writable: !1
    }),
    t && Ch(e, t)
}
function bc(e) {
    return bc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }
    ,
    bc(e)
}
function d6() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function Ph(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function f6(e, t) {
    if (t && (Ie(t) === "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return Ph(e)
}
function j2(e) {
    var t = d6();
    return function() {
        var r = bc(e), i;
        if (t) {
            var s = bc(this).constructor;
            i = Reflect.construct(r, arguments, s)
        } else
            i = r.apply(this, arguments);
        return f6(this, i)
    }
}
var E2 = {
    exports: {}
};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
    (function() {
        var t = {}.hasOwnProperty;
        function n() {
            for (var r = [], i = 0; i < arguments.length; i++) {
                var s = arguments[i];
                if (s) {
                    var o = typeof s;
                    if (o === "string" || o === "number")
                        r.push(s);
                    else if (Array.isArray(s)) {
                        if (s.length) {
                            var a = n.apply(null, s);
                            a && r.push(a)
                        }
                    } else if (o === "object") {
                        if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) {
                            r.push(s.toString());
                            continue
                        }
                        for (var l in s)
                            t.call(s, l) && s[l] && r.push(l)
                    }
                }
            }
            return r.join(" ")
        }
        e.exports ? (n.default = n,
        e.exports = n) : window.classNames = n
    }
    )()
}
)(E2);
var h6 = E2.exports;
const Og = kc(h6);
function Sc() {
    return Sc = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    Sc.apply(this, arguments)
}
var M2 = {
    exports: {}
}
  , J = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne = typeof Symbol == "function" && Symbol.for
  , Ag = Ne ? Symbol.for("react.element") : 60103
  , Lg = Ne ? Symbol.for("react.portal") : 60106
  , tu = Ne ? Symbol.for("react.fragment") : 60107
  , nu = Ne ? Symbol.for("react.strict_mode") : 60108
  , ru = Ne ? Symbol.for("react.profiler") : 60114
  , iu = Ne ? Symbol.for("react.provider") : 60109
  , su = Ne ? Symbol.for("react.context") : 60110
  , Dg = Ne ? Symbol.for("react.async_mode") : 60111
  , ou = Ne ? Symbol.for("react.concurrent_mode") : 60111
  , au = Ne ? Symbol.for("react.forward_ref") : 60112
  , lu = Ne ? Symbol.for("react.suspense") : 60113
  , p6 = Ne ? Symbol.for("react.suspense_list") : 60120
  , cu = Ne ? Symbol.for("react.memo") : 60115
  , uu = Ne ? Symbol.for("react.lazy") : 60116
  , g6 = Ne ? Symbol.for("react.block") : 60121
  , m6 = Ne ? Symbol.for("react.fundamental") : 60117
  , v6 = Ne ? Symbol.for("react.responder") : 60118
  , y6 = Ne ? Symbol.for("react.scope") : 60119;
function Et(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case Ag:
            switch (e = e.type,
            e) {
            case Dg:
            case ou:
            case tu:
            case ru:
            case nu:
            case lu:
                return e;
            default:
                switch (e = e && e.$$typeof,
                e) {
                case su:
                case au:
                case uu:
                case cu:
                case iu:
                    return e;
                default:
                    return t
                }
            }
        case Lg:
            return t
        }
    }
}
function T2(e) {
    return Et(e) === ou
}
J.AsyncMode = Dg;
J.ConcurrentMode = ou;
J.ContextConsumer = su;
J.ContextProvider = iu;
J.Element = Ag;
J.ForwardRef = au;
J.Fragment = tu;
J.Lazy = uu;
J.Memo = cu;
J.Portal = Lg;
J.Profiler = ru;
J.StrictMode = nu;
J.Suspense = lu;
J.isAsyncMode = function(e) {
    return T2(e) || Et(e) === Dg
}
;
J.isConcurrentMode = T2;
J.isContextConsumer = function(e) {
    return Et(e) === su
}
;
J.isContextProvider = function(e) {
    return Et(e) === iu
}
;
J.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ag
}
;
J.isForwardRef = function(e) {
    return Et(e) === au
}
;
J.isFragment = function(e) {
    return Et(e) === tu
}
;
J.isLazy = function(e) {
    return Et(e) === uu
}
;
J.isMemo = function(e) {
    return Et(e) === cu
}
;
J.isPortal = function(e) {
    return Et(e) === Lg
}
;
J.isProfiler = function(e) {
    return Et(e) === ru
}
;
J.isStrictMode = function(e) {
    return Et(e) === nu
}
;
J.isSuspense = function(e) {
    return Et(e) === lu
}
;
J.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === tu || e === ou || e === ru || e === nu || e === lu || e === p6 || typeof e == "object" && e !== null && (e.$$typeof === uu || e.$$typeof === cu || e.$$typeof === iu || e.$$typeof === su || e.$$typeof === au || e.$$typeof === m6 || e.$$typeof === v6 || e.$$typeof === y6 || e.$$typeof === g6)
}
;
J.typeOf = Et;
M2.exports = J;
var x6 = M2.exports
  , jh = {}
  , b6 = function(t) {};
function S6(e, t) {}
function w6(e, t) {}
function _6() {
    jh = {}
}
function O2(e, t, n) {
    !t && !jh[n] && (e(!1, n),
    jh[n] = !0)
}
function du(e, t) {
    O2(S6, e, t)
}
function k6(e, t) {
    O2(w6, e, t)
}
du.preMessage = b6;
du.resetWarned = _6;
du.noteOnce = k6;
function te(e, t, n) {
    return t = C2(t),
    t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
function Y1(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        n.push.apply(n, r)
    }
    return n
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Y1(Object(n), !0).forEach(function(r) {
            te(e, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y1(Object(n)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return e
}
function A2(e, t, n) {
    var r = x.useRef({});
    return (!("value"in r.current) || n(r.current.condition, t)) && (r.current.value = e(),
    r.current.condition = t),
    r.current.value
}
function C6(e, t) {
    typeof e == "function" ? e(t) : Ie(e) === "object" && e && "current"in e && (e.current = t)
}
function P6(e) {
    var t, n, r = x6.isMemo(e) ? e.type.type : e.type;
    return !(typeof r == "function" && !((t = r.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((n = e.prototype) !== null && n !== void 0 && n.render))
}
function j6(e) {
    return e instanceof HTMLElement || e instanceof SVGElement
}
function E6(e) {
    return j6(e) ? e : e instanceof de.Component ? mj.findDOMNode(e) : null
}
function Eh(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function M6(e) {
    if (Array.isArray(e))
        return Eh(e)
}
function L2(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function Rg(e, t) {
    if (e) {
        if (typeof e == "string")
            return Eh(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name),
        n === "Map" || n === "Set")
            return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return Eh(e, t)
    }
}
function T6() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function hi(e) {
    return M6(e) || L2(e) || Rg(e) || T6()
}
var D2 = function(t) {
    return +setTimeout(t, 16)
}
  , R2 = function(t) {
    return clearTimeout(t)
};
typeof window < "u" && "requestAnimationFrame"in window && (D2 = function(t) {
    return window.requestAnimationFrame(t)
}
,
R2 = function(t) {
    return window.cancelAnimationFrame(t)
}
);
var X1 = 0
  , Fg = new Map;
function F2(e) {
    Fg.delete(e)
}
var Mh = function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    X1 += 1;
    var r = X1;
    function i(s) {
        if (s === 0)
            F2(r),
            t();
        else {
            var o = D2(function() {
                i(s - 1)
            });
            Fg.set(r, o)
        }
    }
    return i(n),
    r
};
Mh.cancel = function(e) {
    var t = Fg.get(e);
    return F2(t),
    R2(t)
}
;
function Ig(e) {
    for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r,
    i -= 4)
        n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
        n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
        n ^= n >>> 24,
        t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (i) {
    case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(r) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13,
    t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16),
    ((t ^ t >>> 15) >>> 0).toString(36)
}
function O6(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function Th(e, t) {
    if (e == null)
        return {};
    var n = O6(e, t), r, i;
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++)
            r = s[i],
            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}
function A6(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
      , r = new Set;
    function i(s, o) {
        var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1
          , l = r.has(s);
        if (du(!l, "Warning: There may be circular references"),
        l)
            return !1;
        if (s === o)
            return !0;
        if (n && a > 1)
            return !1;
        r.add(s);
        var c = a + 1;
        if (Array.isArray(s)) {
            if (!Array.isArray(o) || s.length !== o.length)
                return !1;
            for (var u = 0; u < s.length; u++)
                if (!i(s[u], o[u], c))
                    return !1;
            return !0
        }
        if (s && o && Ie(s) === "object" && Ie(o) === "object") {
            var d = Object.keys(s);
            return d.length !== Object.keys(o).length ? !1 : d.every(function(f) {
                return i(s[f], o[f], c)
            })
        }
        return !1
    }
    return i(e, t)
}
var K1 = "%"
  , L6 = function() {
    function e(t) {
        oa(this, e),
        te(this, "instanceId", void 0),
        te(this, "cache", new Map),
        this.instanceId = t
    }
    return aa(e, [{
        key: "get",
        value: function(n) {
            return this.cache.get(n.join(K1)) || null
        }
    }, {
        key: "update",
        value: function(n, r) {
            var i = n.join(K1)
              , s = this.cache.get(i)
              , o = r(s);
            o === null ? this.cache.delete(i) : this.cache.set(i, o)
        }
    }]),
    e
}()
  , Oh = "data-token-hash"
  , qr = "data-css-hash"
  , Ii = "__cssinjs_instance__";
function D6() {
    var e = Math.random().toString(12).slice(2);
    if (typeof document < "u" && document.head && document.body) {
        var t = document.body.querySelectorAll("style[".concat(qr, "]")) || []
          , n = document.head.firstChild;
        Array.from(t).forEach(function(i) {
            i[Ii] = i[Ii] || e,
            i[Ii] === e && document.head.insertBefore(i, n)
        });
        var r = {};
        Array.from(document.querySelectorAll("style[".concat(qr, "]"))).forEach(function(i) {
            var s = i.getAttribute(qr);
            if (r[s]) {
                if (i[Ii] === e) {
                    var o;
                    (o = i.parentNode) === null || o === void 0 || o.removeChild(i)
                }
            } else
                r[s] = !0
        })
    }
    return new L6(e)
}
var R6 = x.createContext({
    hashPriority: "low",
    cache: D6(),
    defaultCache: !0
});
const Ng = R6;
function dn() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
function F6(e, t) {
    if (!e)
        return !1;
    if (e.contains)
        return e.contains(t);
    for (var n = t; n; ) {
        if (n === e)
            return !0;
        n = n.parentNode
    }
    return !1
}
var Q1 = "data-rc-order"
  , Z1 = "data-rc-priority"
  , I6 = "rc-util-key"
  , Ah = new Map;
function I2() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , t = e.mark;
    return t ? t.startsWith("data-") ? t : "data-".concat(t) : I6
}
function fu(e) {
    if (e.attachTo)
        return e.attachTo;
    var t = document.querySelector("head");
    return t || document.body
}
function N6(e) {
    return e === "queue" ? "prependQueue" : e ? "prepend" : "append"
}
function N2(e) {
    return Array.from((Ah.get(e) || e).children).filter(function(t) {
        return t.tagName === "STYLE"
    })
}
function V2(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!dn())
        return null;
    var n = t.csp
      , r = t.prepend
      , i = t.priority
      , s = i === void 0 ? 0 : i
      , o = N6(r)
      , a = o === "prependQueue"
      , l = document.createElement("style");
    l.setAttribute(Q1, o),
    a && s && l.setAttribute(Z1, "".concat(s)),
    n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce),
    l.innerHTML = e;
    var c = fu(t)
      , u = c.firstChild;
    if (r) {
        if (a) {
            var d = N2(c).filter(function(f) {
                if (!["prepend", "prependQueue"].includes(f.getAttribute(Q1)))
                    return !1;
                var p = Number(f.getAttribute(Z1) || 0);
                return s >= p
            });
            if (d.length)
                return c.insertBefore(l, d[d.length - 1].nextSibling),
                l
        }
        c.insertBefore(l, u)
    } else
        c.appendChild(l);
    return l
}
function B2(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = fu(t);
    return N2(n).find(function(r) {
        return r.getAttribute(I2(t)) === e
    })
}
function z2(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = B2(e, t);
    if (n) {
        var r = fu(t);
        r.removeChild(n)
    }
}
function V6(e, t) {
    var n = Ah.get(e);
    if (!n || !F6(document, n)) {
        var r = V2("", t)
          , i = r.parentNode;
        Ah.set(e, i),
        e.removeChild(r)
    }
}
function wc(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , r = fu(n);
    V6(r, n);
    var i = B2(t, n);
    if (i) {
        var s, o;
        if ((s = n.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce)) {
            var a;
            i.nonce = (a = n.csp) === null || a === void 0 ? void 0 : a.nonce
        }
        return i.innerHTML !== e && (i.innerHTML = e),
        i
    }
    var l = V2(e, n);
    return l.setAttribute(I2(n), t),
    l
}
function $2(e) {
    if (Array.isArray(e))
        return e
}
function B6(e, t) {
    var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (n != null) {
        var r, i, s, o, a = [], l = !0, c = !1;
        try {
            if (s = (n = n.call(e)).next,
            t === 0) {
                if (Object(n) !== n)
                    return;
                l = !1
            } else
                for (; !(l = (r = s.call(n)).done) && (a.push(r.value),
                a.length !== t); l = !0)
                    ;
        } catch (u) {
            c = !0,
            i = u
        } finally {
            try {
                if (!l && n.return != null && (o = n.return(),
                Object(o) !== o))
                    return
            } finally {
                if (c)
                    throw i
            }
        }
        return a
    }
}
function H2() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function ve(e, t) {
    return $2(e) || B6(e, t) || Rg(e, t) || H2()
}
function z6(e, t) {
    if (e.length !== t.length)
        return !1;
    for (var n = 0; n < e.length; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
var Vg = function() {
    function e() {
        oa(this, e),
        te(this, "cache", void 0),
        te(this, "keys", void 0),
        te(this, "cacheCallTimes", void 0),
        this.cache = new Map,
        this.keys = [],
        this.cacheCallTimes = 0
    }
    return aa(e, [{
        key: "size",
        value: function() {
            return this.keys.length
        }
    }, {
        key: "internalGet",
        value: function(n) {
            var r, i, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
                map: this.cache
            };
            return n.forEach(function(a) {
                if (!o)
                    o = void 0;
                else {
                    var l, c;
                    o = (l = o) === null || l === void 0 || (c = l.map) === null || c === void 0 ? void 0 : c.get(a)
                }
            }),
            (r = o) !== null && r !== void 0 && r.value && s && (o.value[1] = this.cacheCallTimes++),
            (i = o) === null || i === void 0 ? void 0 : i.value
        }
    }, {
        key: "get",
        value: function(n) {
            var r;
            return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0]
        }
    }, {
        key: "has",
        value: function(n) {
            return !!this.internalGet(n)
        }
    }, {
        key: "set",
        value: function(n, r) {
            var i = this;
            if (!this.has(n)) {
                if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
                    var s = this.keys.reduce(function(c, u) {
                        var d = ve(c, 2)
                          , f = d[1];
                        return i.internalGet(u)[1] < f ? [u, i.internalGet(u)[1]] : c
                    }, [this.keys[0], this.cacheCallTimes])
                      , o = ve(s, 1)
                      , a = o[0];
                    this.delete(a)
                }
                this.keys.push(n)
            }
            var l = this.cache;
            n.forEach(function(c, u) {
                if (u === n.length - 1)
                    l.set(c, {
                        value: [r, i.cacheCallTimes++]
                    });
                else {
                    var d = l.get(c);
                    d ? d.map || (d.map = new Map) : l.set(c, {
                        map: new Map
                    }),
                    l = l.get(c).map
                }
            })
        }
    }, {
        key: "deleteByPath",
        value: function(n, r) {
            var i = n.get(r[0]);
            if (r.length === 1) {
                var s;
                return i.map ? n.set(r[0], {
                    map: i.map
                }) : n.delete(r[0]),
                (s = i.value) === null || s === void 0 ? void 0 : s[0]
            }
            var o = this.deleteByPath(i.map, r.slice(1));
            return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]),
            o
        }
    }, {
        key: "delete",
        value: function(n) {
            if (this.has(n))
                return this.keys = this.keys.filter(function(r) {
                    return !z6(r, n)
                }),
                this.deleteByPath(this.cache, n)
        }
    }]),
    e
}();
te(Vg, "MAX_CACHE_SIZE", 20);
te(Vg, "MAX_CACHE_OFFSET", 5);
var q1 = 0
  , W2 = function() {
    function e(t) {
        oa(this, e),
        te(this, "derivatives", void 0),
        te(this, "id", void 0),
        this.derivatives = Array.isArray(t) ? t : [t],
        this.id = q1,
        t.length === 0 && (t.length > 0,
        void 0),
        q1 += 1
    }
    return aa(e, [{
        key: "getDerivativeToken",
        value: function(n) {
            return this.derivatives.reduce(function(r, i) {
                return i(n, r)
            }, void 0)
        }
    }]),
    e
}()
  , _d = new Vg;
function Lh(e) {
    var t = Array.isArray(e) ? e : [e];
    return _d.has(t) || _d.set(t, new W2(t)),
    _d.get(t)
}
var J1 = new WeakMap;
function _c(e) {
    var t = J1.get(e) || "";
    return t || (Object.keys(e).forEach(function(n) {
        var r = e[n];
        t += n,
        r instanceof W2 ? t += r.id : r && Ie(r) === "object" ? t += _c(r) : t += r
    }),
    J1.set(e, t)),
    t
}
function $6(e, t) {
    return Ig("".concat(t, "_").concat(_c(e)))
}
var ho = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, "")
  , U2 = "_bAmBoO_";
function H6(e, t, n) {
    if (dn()) {
        var r, i;
        wc(e, ho);
        var s = document.createElement("div");
        s.style.position = "fixed",
        s.style.left = "0",
        s.style.top = "0",
        t == null || t(s),
        document.body.appendChild(s);
        var o = n ? n(s) : (r = getComputedStyle(s).content) === null || r === void 0 ? void 0 : r.includes(U2);
        return (i = s.parentNode) === null || i === void 0 || i.removeChild(s),
        z2(ho),
        o
    }
    return !1
}
var kd = void 0;
function W6() {
    return kd === void 0 && (kd = H6("@layer ".concat(ho, " { .").concat(ho, ' { content: "').concat(U2, '"!important; } }'), function(e) {
        e.className = ho
    })),
    kd
}
var ex = dn() ? x.useLayoutEffect : x.useEffect
  , U6 = function(t, n) {
    var r = x.useRef(!0);
    ex(function() {
        return t(r.current)
    }, n),
    ex(function() {
        return r.current = !1,
        function() {
            r.current = !0
        }
    }, [])
}
  , G6 = K({}, po)
  , tx = G6.useInsertionEffect
  , Y6 = function(t, n, r) {
    x.useMemo(t, r),
    U6(function() {
        return n(!0)
    }, r)
}
  , X6 = tx ? function(e, t, n) {
    return tx(function() {
        return e(),
        t()
    }, n)
}
: Y6;
const K6 = X6;
var Q6 = K({}, po)
  , Z6 = Q6.useInsertionEffect
  , q6 = function(t) {
    var n = []
      , r = !1;
    function i(s) {
        r || n.push(s)
    }
    return x.useEffect(function() {
        return r = !1,
        function() {
            r = !0,
            n.length && n.forEach(function(s) {
                return s()
            })
        }
    }, t),
    i
}
  , J6 = function() {
    return function(t) {
        t()
    }
}
  , eF = typeof Z6 < "u" ? q6 : J6;
const tF = eF;
function G2(e, t, n, r, i) {
    var s = x.useContext(Ng)
      , o = s.cache
      , a = [e].concat(hi(t))
      , l = a.join("_")
      , c = tF([l])
      , u = function(g) {
        o.update(a, function(v) {
            var S = v || []
              , y = ve(S, 2)
              , m = y[0]
              , b = m === void 0 ? 0 : m
              , w = y[1]
              , k = w
              , P = k || n()
              , _ = [b, P];
            return g ? g(_) : _
        })
    };
    x.useMemo(function() {
        u()
    }, [l]);
    var d = o.get(a)
      , f = d[1];
    return K6(function() {
        i == null || i(f)
    }, function(p) {
        return u(function(g) {
            var v = ve(g, 2)
              , S = v[0]
              , y = v[1];
            return p && S === 0 && (i == null || i(f)),
            [S + 1, y]
        }),
        function() {
            o.update(a, function(g) {
                var v = g || []
                  , S = ve(v, 2)
                  , y = S[0]
                  , m = y === void 0 ? 0 : y
                  , b = S[1]
                  , w = m - 1;
                return w === 0 ? (c(function() {
                    return r == null ? void 0 : r(b, !1)
                }),
                null) : [m - 1, b]
            })
        }
    }, [l]),
    f
}
var nF = {}
  , rF = "css"
  , zr = new Map;
function iF(e) {
    zr.set(e, (zr.get(e) || 0) + 1)
}
function sF(e, t) {
    if (typeof document < "u") {
        var n = document.querySelectorAll("style[".concat(Oh, '="').concat(e, '"]'));
        n.forEach(function(r) {
            if (r[Ii] === t) {
                var i;
                (i = r.parentNode) === null || i === void 0 || i.removeChild(r)
            }
        })
    }
}
var oF = 0;
function aF(e, t) {
    zr.set(e, (zr.get(e) || 0) - 1);
    var n = Array.from(zr.keys())
      , r = n.filter(function(i) {
        var s = zr.get(i) || 0;
        return s <= 0
    });
    n.length - r.length > oF && r.forEach(function(i) {
        sF(i, t),
        zr.delete(i)
    })
}
var lF = function(t, n, r, i) {
    var s = r.getDerivativeToken(t)
      , o = K(K({}, s), n);
    return i && (o = i(o)),
    o
};
function cF(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
      , r = x.useContext(Ng)
      , i = r.cache.instanceId
      , s = n.salt
      , o = s === void 0 ? "" : s
      , a = n.override
      , l = a === void 0 ? nF : a
      , c = n.formatToken
      , u = n.getComputedToken
      , d = x.useMemo(function() {
        return Object.assign.apply(Object, [{}].concat(hi(t)))
    }, [t])
      , f = x.useMemo(function() {
        return _c(d)
    }, [d])
      , p = x.useMemo(function() {
        return _c(l)
    }, [l])
      , g = G2("token", [o, e.id, f, p], function() {
        var v = u ? u(d, l, e) : lF(d, l, e, c)
          , S = $6(v, o);
        v._tokenKey = S,
        iF(S);
        var y = "".concat(rF, "-").concat(Ig(S));
        return v._hashId = y,
        [v, y]
    }, function(v) {
        aF(v[0]._tokenKey, i)
    });
    return g
}
var uF = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
}
  , Y2 = "comm"
  , X2 = "rule"
  , K2 = "decl"
  , dF = "@import"
  , fF = "@keyframes"
  , hF = "@layer"
  , pF = Math.abs
  , Bg = String.fromCharCode;
function Q2(e) {
    return e.trim()
}
function Cl(e, t, n) {
    return e.replace(t, n)
}
function gF(e, t) {
    return e.indexOf(t)
}
function Uo(e, t) {
    return e.charCodeAt(t) | 0
}
function Go(e, t, n) {
    return e.slice(t, n)
}
function _n(e) {
    return e.length
}
function mF(e) {
    return e.length
}
function Ka(e, t) {
    return t.push(e),
    e
}
var hu = 1
  , ls = 1
  , Z2 = 0
  , Vt = 0
  , _e = 0
  , ms = "";
function zg(e, t, n, r, i, s, o, a) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: i,
        children: s,
        line: hu,
        column: ls,
        length: o,
        return: "",
        siblings: a
    }
}
function vF() {
    return _e
}
function yF() {
    return _e = Vt > 0 ? Uo(ms, --Vt) : 0,
    ls--,
    _e === 10 && (ls = 1,
    hu--),
    _e
}
function Kt() {
    return _e = Vt < Z2 ? Uo(ms, Vt++) : 0,
    ls++,
    _e === 10 && (ls = 1,
    hu++),
    _e
}
function Jr() {
    return Uo(ms, Vt)
}
function Pl() {
    return Vt
}
function pu(e, t) {
    return Go(ms, e, t)
}
function Dh(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function xF(e) {
    return hu = ls = 1,
    Z2 = _n(ms = e),
    Vt = 0,
    []
}
function bF(e) {
    return ms = "",
    e
}
function Cd(e) {
    return Q2(pu(Vt - 1, Rh(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function SF(e) {
    for (; (_e = Jr()) && _e < 33; )
        Kt();
    return Dh(e) > 2 || Dh(_e) > 3 ? "" : " "
}
function wF(e, t) {
    for (; --t && Kt() && !(_e < 48 || _e > 102 || _e > 57 && _e < 65 || _e > 70 && _e < 97); )
        ;
    return pu(e, Pl() + (t < 6 && Jr() == 32 && Kt() == 32))
}
function Rh(e) {
    for (; Kt(); )
        switch (_e) {
        case e:
            return Vt;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Rh(_e);
            break;
        case 40:
            e === 41 && Rh(e);
            break;
        case 92:
            Kt();
            break
        }
    return Vt
}
function _F(e, t) {
    for (; Kt() && e + _e !== 47 + 10; )
        if (e + _e === 42 + 42 && Jr() === 47)
            break;
    return "/*" + pu(t, Vt - 1) + "*" + Bg(e === 47 ? e : Kt())
}
function kF(e) {
    for (; !Dh(Jr()); )
        Kt();
    return pu(e, Vt)
}
function CF(e) {
    return bF(jl("", null, null, null, [""], e = xF(e), 0, [0], e))
}
function jl(e, t, n, r, i, s, o, a, l) {
    for (var c = 0, u = 0, d = o, f = 0, p = 0, g = 0, v = 1, S = 1, y = 1, m = 0, b = "", w = i, k = s, P = r, _ = b; S; )
        switch (g = m,
        m = Kt()) {
        case 40:
            if (g != 108 && Uo(_, d - 1) == 58) {
                gF(_ += Cl(Cd(m), "&", "&\f"), "&\f") != -1 && (y = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            _ += Cd(m);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            _ += SF(g);
            break;
        case 92:
            _ += wF(Pl() - 1, 7);
            continue;
        case 47:
            switch (Jr()) {
            case 42:
            case 47:
                Ka(PF(_F(Kt(), Pl()), t, n, l), l);
                break;
            default:
                _ += "/"
            }
            break;
        case 123 * v:
            a[c++] = _n(_) * y;
        case 125 * v:
        case 59:
        case 0:
            switch (m) {
            case 0:
            case 125:
                S = 0;
            case 59 + u:
                y == -1 && (_ = Cl(_, /\f/g, "")),
                p > 0 && _n(_) - d && Ka(p > 32 ? rx(_ + ";", r, n, d - 1, l) : rx(Cl(_, " ", "") + ";", r, n, d - 2, l), l);
                break;
            case 59:
                _ += ";";
            default:
                if (Ka(P = nx(_, t, n, c, u, i, a, b, w = [], k = [], d, s), s),
                m === 123)
                    if (u === 0)
                        jl(_, t, P, P, w, s, d, a, k);
                    else
                        switch (f === 99 && Uo(_, 3) === 110 ? 100 : f) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                            jl(e, P, P, r && Ka(nx(e, P, P, 0, 0, i, a, b, i, w = [], d, k), k), i, k, d, a, r ? w : k);
                            break;
                        default:
                            jl(_, P, P, P, [""], k, 0, a, k)
                        }
            }
            c = u = p = 0,
            v = y = 1,
            b = _ = "",
            d = o;
            break;
        case 58:
            d = 1 + _n(_),
            p = g;
        default:
            if (v < 1) {
                if (m == 123)
                    --v;
                else if (m == 125 && v++ == 0 && yF() == 125)
                    continue
            }
            switch (_ += Bg(m),
            m * v) {
            case 38:
                y = u > 0 ? 1 : (_ += "\f",
                -1);
                break;
            case 44:
                a[c++] = (_n(_) - 1) * y,
                y = 1;
                break;
            case 64:
                Jr() === 45 && (_ += Cd(Kt())),
                f = Jr(),
                u = d = _n(b = _ += kF(Pl())),
                m++;
                break;
            case 45:
                g === 45 && _n(_) == 2 && (v = 0)
            }
        }
    return s
}
function nx(e, t, n, r, i, s, o, a, l, c, u, d) {
    for (var f = i - 1, p = i === 0 ? s : [""], g = mF(p), v = 0, S = 0, y = 0; v < r; ++v)
        for (var m = 0, b = Go(e, f + 1, f = pF(S = o[v])), w = e; m < g; ++m)
            (w = Q2(S > 0 ? p[m] + " " + b : Cl(b, /&\f/g, p[m]))) && (l[y++] = w);
    return zg(e, t, n, i === 0 ? X2 : a, l, c, u, d)
}
function PF(e, t, n, r) {
    return zg(e, t, n, Y2, Bg(vF()), Go(e, 2, -2), 0, r)
}
function rx(e, t, n, r, i) {
    return zg(e, t, n, K2, Go(e, 0, r), Go(e, r + 1, -1), r, i)
}
function Fh(e, t) {
    for (var n = "", r = 0; r < e.length; r++)
        n += t(e[r], r, e, t) || "";
    return n
}
function jF(e, t, n, r) {
    switch (e.type) {
    case hF:
        if (e.children.length)
            break;
    case dF:
    case K2:
        return e.return = e.return || e.value;
    case Y2:
        return "";
    case fF:
        return e.return = e.value + "{" + Fh(e.children, r) + "}";
    case X2:
        if (!_n(e.value = e.props.join(",")))
            return ""
    }
    return _n(n = Fh(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
var ix = "data-ant-cssinjs-cache-path", q2 = "_FILE_STYLE__", ei, J2 = !0;
function EF() {
    if (!ei && (ei = {},
    dn())) {
        var e = document.createElement("div");
        e.className = ix,
        e.style.position = "fixed",
        e.style.visibility = "hidden",
        e.style.top = "-9999px",
        document.body.appendChild(e);
        var t = getComputedStyle(e).content || "";
        t = t.replace(/^"/, "").replace(/"$/, ""),
        t.split(";").forEach(function(i) {
            var s = i.split(":")
              , o = ve(s, 2)
              , a = o[0]
              , l = o[1];
            ei[a] = l
        });
        var n = document.querySelector("style[".concat(ix, "]"));
        if (n) {
            var r;
            J2 = !1,
            (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
        }
        document.body.removeChild(e)
    }
}
function MF(e) {
    return EF(),
    !!ei[e]
}
function TF(e) {
    var t = ei[e]
      , n = null;
    if (t && dn())
        if (J2)
            n = q2;
        else {
            var r = document.querySelector("style[".concat(qr, '="').concat(ei[e], '"]'));
            r ? n = r.innerHTML : delete ei[e]
        }
    return [n, t]
}
var sx = dn()
  , OF = "_skip_check_"
  , ek = "_multi_value_";
function ox(e) {
    var t = Fh(CF(e), jF);
    return t.replace(/\{%%%\:[^;];}/g, ";")
}
function AF(e) {
    return Ie(e) === "object" && e && (OF in e || ek in e)
}
function LF(e, t, n) {
    if (!t)
        return e;
    var r = ".".concat(t)
      , i = n === "low" ? ":where(".concat(r, ")") : r
      , s = e.split(",").map(function(o) {
        var a, l = o.trim().split(/\s+/), c = l[0] || "", u = ((a = c.match(/^\w+/)) === null || a === void 0 ? void 0 : a[0]) || "";
        return c = "".concat(u).concat(i).concat(c.slice(u.length)),
        [c].concat(hi(l.slice(1))).join(" ")
    });
    return s.join(",")
}
var DF = function e(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
        root: !0,
        parentSelectors: []
    }
      , i = r.root
      , s = r.injectHash
      , o = r.parentSelectors
      , a = n.hashId
      , l = n.layer;
    n.path;
    var c = n.hashPriority
      , u = n.transformers
      , d = u === void 0 ? [] : u;
    n.linters;
    var f = ""
      , p = {};
    function g(b) {
        var w = b.getName(a);
        if (!p[w]) {
            var k = e(b.style, n, {
                root: !1,
                parentSelectors: o
            })
              , P = ve(k, 1)
              , _ = P[0];
            p[w] = "@keyframes ".concat(b.getName(a)).concat(_)
        }
    }
    function v(b) {
        var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        return b.forEach(function(k) {
            Array.isArray(k) ? v(k, w) : k && w.push(k)
        }),
        w
    }
    var S = v(Array.isArray(t) ? t : [t]);
    if (S.forEach(function(b) {
        var w = typeof b == "string" && !i ? {} : b;
        if (typeof w == "string")
            f += "".concat(w, `
`);
        else if (w._keyframe)
            g(w);
        else {
            var k = d.reduce(function(P, _) {
                var C;
                return (_ == null || (C = _.visit) === null || C === void 0 ? void 0 : C.call(_, P)) || P
            }, w);
            Object.keys(k).forEach(function(P) {
                var _ = k[P];
                if (Ie(_) === "object" && _ && (P !== "animationName" || !_._keyframe) && !AF(_)) {
                    var C = !1
                      , j = P.trim()
                      , M = !1;
                    (i || s) && a ? j.startsWith("@") ? C = !0 : j = LF(P, a, c) : i && !a && (j === "&" || j === "") && (j = "",
                    M = !0);
                    var O = e(_, n, {
                        root: M,
                        injectHash: C,
                        parentSelectors: [].concat(hi(o), [j])
                    })
                      , A = ve(O, 2)
                      , N = A[0]
                      , B = A[1];
                    p = K(K({}, p), B),
                    f += "".concat(j).concat(N)
                } else {
                    let E = function(R, D) {
                        var I = R.replace(/[A-Z]/g, function(pe) {
                            return "-".concat(pe.toLowerCase())
                        })
                          , H = D;
                        !uF[R] && typeof H == "number" && H !== 0 && (H = "".concat(H, "px")),
                        R === "animationName" && D !== null && D !== void 0 && D._keyframe && (g(D),
                        H = D.getName(a)),
                        f += "".concat(I, ":").concat(H, ";")
                    };
                    var W = E, L, V = (L = _ == null ? void 0 : _.value) !== null && L !== void 0 ? L : _;
                    Ie(_) === "object" && _ !== null && _ !== void 0 && _[ek] && Array.isArray(V) ? V.forEach(function(R) {
                        E(P, R)
                    }) : E(P, V)
                }
            })
        }
    }),
    !i)
        f = "{".concat(f, "}");
    else if (l && W6()) {
        var y = l.split(",")
          , m = y[y.length - 1].trim();
        f = "@layer ".concat(m, " {").concat(f, "}"),
        y.length > 1 && (f = "@layer ".concat(l, "{%%%:%}").concat(f))
    }
    return [f, p]
};
function RF(e, t) {
    return Ig("".concat(e.join("%")).concat(t))
}
function FF() {
    return null
}
function Ih(e, t) {
    var n = e.token
      , r = e.path
      , i = e.hashId
      , s = e.layer
      , o = e.nonce
      , a = e.clientOnly
      , l = e.order
      , c = l === void 0 ? 0 : l
      , u = x.useContext(Ng)
      , d = u.autoClear;
    u.mock;
    var f = u.defaultCache
      , p = u.hashPriority
      , g = u.container
      , v = u.ssrInline
      , S = u.transformers
      , y = u.linters
      , m = u.cache
      , b = n._tokenKey
      , w = [b].concat(hi(r))
      , k = sx
      , P = G2("style", w, function() {
        var O = w.join("|");
        if (MF(O)) {
            var A = TF(O)
              , N = ve(A, 2)
              , B = N[0]
              , L = N[1];
            if (B)
                return [B, b, L, {}, a, c]
        }
        var V = t()
          , W = DF(V, {
            hashId: i,
            hashPriority: p,
            layer: s,
            path: r.join("-"),
            transformers: S,
            linters: y
        })
          , E = ve(W, 2)
          , R = E[0]
          , D = E[1]
          , I = ox(R)
          , H = RF(w, I);
        return [I, b, H, D, a, c]
    }, function(O, A) {
        var N = ve(O, 3)
          , B = N[2];
        (A || d) && sx && z2(B, {
            mark: qr
        })
    }, function(O) {
        var A = ve(O, 4)
          , N = A[0];
        A[1];
        var B = A[2]
          , L = A[3];
        if (k && N !== q2) {
            var V = {
                mark: qr,
                prepend: "queue",
                attachTo: g,
                priority: c
            }
              , W = typeof o == "function" ? o() : o;
            W && (V.csp = {
                nonce: W
            });
            var E = wc(N, B, V);
            E[Ii] = m.instanceId,
            E.setAttribute(Oh, b),
            Object.keys(L).forEach(function(R) {
                wc(ox(L[R]), "_effect-".concat(R), V)
            })
        }
    })
      , _ = ve(P, 3)
      , C = _[0]
      , j = _[1]
      , M = _[2];
    return function(O) {
        var A;
        if (!v || k || !f)
            A = x.createElement(FF, null);
        else {
            var N;
            A = x.createElement("style", Sc({}, (N = {},
            te(N, Oh, j),
            te(N, qr, M),
            N), {
                dangerouslySetInnerHTML: {
                    __html: C
                }
            }))
        }
        return x.createElement(x.Fragment, null, A, O)
    }
}
function yi(e) {
    return e.notSplit = !0,
    e
}
yi(["borderTop", "borderBottom"]),
yi(["borderTop"]),
yi(["borderBottom"]),
yi(["borderLeft", "borderRight"]),
yi(["borderLeft"]),
yi(["borderRight"]);
var IF = x.createContext({});
const NF = IF;
function VF(e) {
    return $2(e) || L2(e) || Rg(e) || H2()
}
function Nh(e, t) {
    for (var n = e, r = 0; r < t.length; r += 1) {
        if (n == null)
            return;
        n = n[t[r]]
    }
    return n
}
function tk(e, t, n, r) {
    if (!t.length)
        return n;
    var i = VF(t), s = i[0], o = i.slice(1), a;
    return !e && typeof s == "number" ? a = [] : Array.isArray(e) ? a = hi(e) : a = K({}, e),
    r && n === void 0 && o.length === 1 ? delete a[s][o[0]] : a[s] = tk(a[s], o, n, r),
    a
}
function Pd(e, t, n) {
    var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
    return t.length && r && n === void 0 && !Nh(e, t.slice(0, -1)) ? e : tk(e, t, n, r)
}
function BF(e) {
    return Ie(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype
}
function ax(e) {
    return Array.isArray(e) ? [] : {}
}
var zF = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function $F() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    var r = ax(t[0]);
    return t.forEach(function(i) {
        function s(o, a) {
            var l = new Set(a)
              , c = Nh(i, o)
              , u = Array.isArray(c);
            if (u || BF(c)) {
                if (!l.has(c)) {
                    l.add(c);
                    var d = Nh(r, o);
                    u ? r = Pd(r, o, []) : (!d || Ie(d) !== "object") && (r = Pd(r, o, ax(c))),
                    zF(c).forEach(function(f) {
                        s([].concat(hi(o), [f]), l)
                    })
                }
            } else
                r = Pd(r, o, c)
        }
        s([])
    }),
    r
}
const HF = x.createContext(void 0)
  , WF = {
    items_per_page: "/ page",
    jump_to: "Go to",
    jump_to_confirm: "confirm",
    page: "Page",
    prev_page: "Previous Page",
    next_page: "Next Page",
    prev_5: "Previous 5 Pages",
    next_5: "Next 5 Pages",
    prev_3: "Previous 3 Pages",
    next_3: "Next 3 Pages",
    page_size: "Page Size"
};
var UF = {
    locale: "en_US",
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "OK",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "select time",
    dateSelect: "select date",
    weekSelect: "Choose a week",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthBeforeYear: !0,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
};
const GF = {
    placeholder: "Select time",
    rangePlaceholder: ["Start time", "End time"]
}
  , nk = GF
  , YF = {
    lang: Object.assign({
        placeholder: "Select date",
        yearPlaceholder: "Select year",
        quarterPlaceholder: "Select quarter",
        monthPlaceholder: "Select month",
        weekPlaceholder: "Select week",
        rangePlaceholder: ["Start date", "End date"],
        rangeYearPlaceholder: ["Start year", "End year"],
        rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
        rangeMonthPlaceholder: ["Start month", "End month"],
        rangeWeekPlaceholder: ["Start week", "End week"]
    }, UF),
    timePickerLocale: Object.assign({}, nk)
}
  , lx = YF
  , ht = "${label} is not a valid ${type}"
  , XF = {
    locale: "en",
    Pagination: WF,
    DatePicker: lx,
    TimePicker: nk,
    Calendar: lx,
    global: {
        placeholder: "Please select"
    },
    Table: {
        filterTitle: "Filter menu",
        filterConfirm: "OK",
        filterReset: "Reset",
        filterEmptyText: "No filters",
        filterCheckall: "Select all items",
        filterSearchPlaceholder: "Search in filters",
        emptyText: "No data",
        selectAll: "Select current page",
        selectInvert: "Invert current page",
        selectNone: "Clear all data",
        selectionAll: "Select all data",
        sortTitle: "Sort",
        expand: "Expand row",
        collapse: "Collapse row",
        triggerDesc: "Click to sort descending",
        triggerAsc: "Click to sort ascending",
        cancelSort: "Click to cancel sorting"
    },
    Tour: {
        Next: "Next",
        Previous: "Previous",
        Finish: "Finish"
    },
    Modal: {
        okText: "OK",
        cancelText: "Cancel",
        justOkText: "OK"
    },
    Popconfirm: {
        okText: "OK",
        cancelText: "Cancel"
    },
    Transfer: {
        titles: ["", ""],
        searchPlaceholder: "Search here",
        itemUnit: "item",
        itemsUnit: "items",
        remove: "Remove",
        selectCurrent: "Select current page",
        removeCurrent: "Remove current page",
        selectAll: "Select all data",
        removeAll: "Remove all data",
        selectInvert: "Invert current page"
    },
    Upload: {
        uploading: "Uploading...",
        removeFile: "Remove file",
        uploadError: "Upload error",
        previewFile: "Preview file",
        downloadFile: "Download file"
    },
    Empty: {
        description: "No data"
    },
    Icon: {
        icon: "icon"
    },
    Text: {
        edit: "Edit",
        copy: "Copy",
        copied: "Copied",
        expand: "Expand"
    },
    PageHeader: {
        back: "Back"
    },
    Form: {
        optional: "(optional)",
        defaultValidateMessages: {
            default: "Field validation error for ${label}",
            required: "Please enter ${label}",
            enum: "${label} must be one of [${enum}]",
            whitespace: "${label} cannot be a blank character",
            date: {
                format: "${label} date format is invalid",
                parse: "${label} cannot be converted to a date",
                invalid: "${label} is an invalid date"
            },
            types: {
                string: ht,
                method: ht,
                array: ht,
                object: ht,
                number: ht,
                date: ht,
                boolean: ht,
                integer: ht,
                float: ht,
                regexp: ht,
                email: ht,
                url: ht,
                hex: ht
            },
            string: {
                len: "${label} must be ${len} characters",
                min: "${label} must be at least ${min} characters",
                max: "${label} must be up to ${max} characters",
                range: "${label} must be between ${min}-${max} characters"
            },
            number: {
                len: "${label} must be equal to ${len}",
                min: "${label} must be minimum ${min}",
                max: "${label} must be maximum ${max}",
                range: "${label} must be between ${min}-${max}"
            },
            array: {
                len: "Must be ${len} ${label}",
                min: "At least ${min} ${label}",
                max: "At most ${max} ${label}",
                range: "The amount of ${label} must be between ${min}-${max}"
            },
            pattern: {
                mismatch: "${label} does not match the pattern ${pattern}"
            }
        }
    },
    Image: {
        preview: "Preview"
    },
    QRCode: {
        expired: "QR code expired",
        refresh: "Refresh"
    },
    ColorPicker: {
        presetEmpty: "Empty"
    }
}
  , gu = XF;
Object.assign({}, gu.Modal);
let El = [];
const cx = ()=>El.reduce((e,t)=>Object.assign(Object.assign({}, e), t), gu.Modal);
function KF(e) {
    if (e) {
        const t = Object.assign({}, e);
        return El.push(t),
        cx(),
        ()=>{
            El = El.filter(n=>n !== t),
            cx()
        }
    }
    Object.assign({}, gu.Modal)
}
const QF = x.createContext(void 0)
  , rk = QF
  , ZF = "internalMark"
  , qF = e=>{
    const {locale: t={}, children: n, _ANT_MARK__: r} = e;
    x.useEffect(()=>KF(t && t.Modal), [t]);
    const i = x.useMemo(()=>Object.assign(Object.assign({}, t), {
        exist: !0
    }), [t]);
    return x.createElement(rk.Provider, {
        value: i
    }, n)
}
  , JF = qF
  , eI = "5.9.0";
function He(e, t) {
    tI(e) && (e = "100%");
    var n = nI(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)),
    e)
}
function Qa(e) {
    return Math.min(1, Math.max(0, e))
}
function tI(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}
function nI(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}
function ik(e) {
    return e = parseFloat(e),
    (isNaN(e) || e < 0 || e > 1) && (e = 1),
    e
}
function Za(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e
}
function Yr(e) {
    return e.length === 1 ? "0" + e : String(e)
}
function rI(e, t, n) {
    return {
        r: He(e, 255) * 255,
        g: He(t, 255) * 255,
        b: He(n, 255) * 255
    }
}
function ux(e, t, n) {
    e = He(e, 255),
    t = He(t, 255),
    n = He(n, 255);
    var r = Math.max(e, t, n)
      , i = Math.min(e, t, n)
      , s = 0
      , o = 0
      , a = (r + i) / 2;
    if (r === i)
        o = 0,
        s = 0;
    else {
        var l = r - i;
        switch (o = a > .5 ? l / (2 - r - i) : l / (r + i),
        r) {
        case e:
            s = (t - n) / l + (t < n ? 6 : 0);
            break;
        case t:
            s = (n - e) / l + 2;
            break;
        case n:
            s = (e - t) / l + 4;
            break
        }
        s /= 6
    }
    return {
        h: s,
        s: o,
        l: a
    }
}
function jd(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function iI(e, t, n) {
    var r, i, s;
    if (e = He(e, 360),
    t = He(t, 100),
    n = He(n, 100),
    t === 0)
        i = n,
        s = n,
        r = n;
    else {
        var o = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - o;
        r = jd(a, o, e + 1 / 3),
        i = jd(a, o, e),
        s = jd(a, o, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: i * 255,
        b: s * 255
    }
}
function Vh(e, t, n) {
    e = He(e, 255),
    t = He(t, 255),
    n = He(n, 255);
    var r = Math.max(e, t, n)
      , i = Math.min(e, t, n)
      , s = 0
      , o = r
      , a = r - i
      , l = r === 0 ? 0 : a / r;
    if (r === i)
        s = 0;
    else {
        switch (r) {
        case e:
            s = (t - n) / a + (t < n ? 6 : 0);
            break;
        case t:
            s = (n - e) / a + 2;
            break;
        case n:
            s = (e - t) / a + 4;
            break
        }
        s /= 6
    }
    return {
        h: s,
        s: l,
        v: o
    }
}
function sI(e, t, n) {
    e = He(e, 360) * 6,
    t = He(t, 100),
    n = He(n, 100);
    var r = Math.floor(e)
      , i = e - r
      , s = n * (1 - t)
      , o = n * (1 - i * t)
      , a = n * (1 - (1 - i) * t)
      , l = r % 6
      , c = [n, o, s, s, a, n][l]
      , u = [a, n, n, o, s, s][l]
      , d = [s, s, a, n, n, o][l];
    return {
        r: c * 255,
        g: u * 255,
        b: d * 255
    }
}
function Bh(e, t, n, r) {
    var i = [Yr(Math.round(e).toString(16)), Yr(Math.round(t).toString(16)), Yr(Math.round(n).toString(16))];
    return r && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}
function oI(e, t, n, r, i) {
    var s = [Yr(Math.round(e).toString(16)), Yr(Math.round(t).toString(16)), Yr(Math.round(n).toString(16)), Yr(aI(r))];
    return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("")
}
function aI(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}
function dx(e) {
    return pt(e) / 255
}
function pt(e) {
    return parseInt(e, 16)
}
function lI(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
var zh = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
function bi(e) {
    var t = {
        r: 0,
        g: 0,
        b: 0
    }
      , n = 1
      , r = null
      , i = null
      , s = null
      , o = !1
      , a = !1;
    return typeof e == "string" && (e = dI(e)),
    typeof e == "object" && (mn(e.r) && mn(e.g) && mn(e.b) ? (t = rI(e.r, e.g, e.b),
    o = !0,
    a = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : mn(e.h) && mn(e.s) && mn(e.v) ? (r = Za(e.s),
    i = Za(e.v),
    t = sI(e.h, r, i),
    o = !0,
    a = "hsv") : mn(e.h) && mn(e.s) && mn(e.l) && (r = Za(e.s),
    s = Za(e.l),
    t = iI(e.h, r, s),
    o = !0,
    a = "hsl"),
    Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)),
    n = ik(n),
    {
        ok: o,
        format: e.format || a,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n
    }
}
var cI = "[-\\+]?\\d+%?"
  , uI = "[-\\+]?\\d*\\.\\d+%?"
  , tr = "(?:".concat(uI, ")|(?:").concat(cI, ")")
  , Ed = "[\\s|\\(]+(".concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")\\s*\\)?")
  , Md = "[\\s|\\(]+(".concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")[,|\\s]+(").concat(tr, ")\\s*\\)?")
  , $t = {
    CSS_UNIT: new RegExp(tr),
    rgb: new RegExp("rgb" + Ed),
    rgba: new RegExp("rgba" + Md),
    hsl: new RegExp("hsl" + Ed),
    hsla: new RegExp("hsla" + Md),
    hsv: new RegExp("hsv" + Ed),
    hsva: new RegExp("hsva" + Md),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function dI(e) {
    if (e = e.trim().toLowerCase(),
    e.length === 0)
        return !1;
    var t = !1;
    if (zh[e])
        e = zh[e],
        t = !0;
    else if (e === "transparent")
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    var n = $t.rgb.exec(e);
    return n ? {
        r: n[1],
        g: n[2],
        b: n[3]
    } : (n = $t.rgba.exec(e),
    n ? {
        r: n[1],
        g: n[2],
        b: n[3],
        a: n[4]
    } : (n = $t.hsl.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        l: n[3]
    } : (n = $t.hsla.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        l: n[3],
        a: n[4]
    } : (n = $t.hsv.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        v: n[3]
    } : (n = $t.hsva.exec(e),
    n ? {
        h: n[1],
        s: n[2],
        v: n[3],
        a: n[4]
    } : (n = $t.hex8.exec(e),
    n ? {
        r: pt(n[1]),
        g: pt(n[2]),
        b: pt(n[3]),
        a: dx(n[4]),
        format: t ? "name" : "hex8"
    } : (n = $t.hex6.exec(e),
    n ? {
        r: pt(n[1]),
        g: pt(n[2]),
        b: pt(n[3]),
        format: t ? "name" : "hex"
    } : (n = $t.hex4.exec(e),
    n ? {
        r: pt(n[1] + n[1]),
        g: pt(n[2] + n[2]),
        b: pt(n[3] + n[3]),
        a: dx(n[4] + n[4]),
        format: t ? "name" : "hex8"
    } : (n = $t.hex3.exec(e),
    n ? {
        r: pt(n[1] + n[1]),
        g: pt(n[2] + n[2]),
        b: pt(n[3] + n[3]),
        format: t ? "name" : "hex"
    } : !1)))))))))
}
function mn(e) {
    return !!$t.CSS_UNIT.exec(String(e))
}
var St = function() {
    function e(t, n) {
        t === void 0 && (t = ""),
        n === void 0 && (n = {});
        var r;
        if (t instanceof e)
            return t;
        typeof t == "number" && (t = lI(t)),
        this.originalInput = t;
        var i = bi(t);
        this.originalInput = t,
        this.r = i.r,
        this.g = i.g,
        this.b = i.b,
        this.a = i.a,
        this.roundA = Math.round(100 * this.a) / 100,
        this.format = (r = n.format) !== null && r !== void 0 ? r : i.format,
        this.gradientType = n.gradientType,
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        this.isValid = i.ok
    }
    return e.prototype.isDark = function() {
        return this.getBrightness() < 128
    }
    ,
    e.prototype.isLight = function() {
        return !this.isDark()
    }
    ,
    e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }
    ,
    e.prototype.getLuminance = function() {
        var t = this.toRgb(), n, r, i, s = t.r / 255, o = t.g / 255, a = t.b / 255;
        return s <= .03928 ? n = s / 12.92 : n = Math.pow((s + .055) / 1.055, 2.4),
        o <= .03928 ? r = o / 12.92 : r = Math.pow((o + .055) / 1.055, 2.4),
        a <= .03928 ? i = a / 12.92 : i = Math.pow((a + .055) / 1.055, 2.4),
        .2126 * n + .7152 * r + .0722 * i
    }
    ,
    e.prototype.getAlpha = function() {
        return this.a
    }
    ,
    e.prototype.setAlpha = function(t) {
        return this.a = ik(t),
        this.roundA = Math.round(100 * this.a) / 100,
        this
    }
    ,
    e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0
    }
    ,
    e.prototype.toHsv = function() {
        var t = Vh(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }
    ,
    e.prototype.toHsvString = function() {
        var t = Vh(this.r, this.g, this.b)
          , n = Math.round(t.h * 360)
          , r = Math.round(t.s * 100)
          , i = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toHsl = function() {
        var t = ux(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }
    ,
    e.prototype.toHslString = function() {
        var t = ux(this.r, this.g, this.b)
          , n = Math.round(t.h * 360)
          , r = Math.round(t.s * 100)
          , i = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(i, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1),
        Bh(this.r, this.g, this.b, t)
    }
    ,
    e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1),
        "#" + this.toHex(t)
    }
    ,
    e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1),
        oI(this.r, this.g, this.b, this.a, t)
    }
    ,
    e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1),
        "#" + this.toHex8(t)
    }
    ,
    e.prototype.toHexShortString = function(t) {
        return t === void 0 && (t = !1),
        this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }
    ,
    e.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }
    ,
    e.prototype.toRgbString = function() {
        var t = Math.round(this.r)
          , n = Math.round(this.g)
          , r = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toPercentageRgb = function() {
        var t = function(n) {
            return "".concat(Math.round(He(n, 255) * 100), "%")
        };
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }
    ,
    e.prototype.toPercentageRgbString = function() {
        var t = function(n) {
            return Math.round(He(n, 255) * 100)
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }
    ,
    e.prototype.toName = function() {
        if (this.a === 0)
            return "transparent";
        if (this.a < 1)
            return !1;
        for (var t = "#" + Bh(this.r, this.g, this.b, !1), n = 0, r = Object.entries(zh); n < r.length; n++) {
            var i = r[n]
              , s = i[0]
              , o = i[1];
            if (t === o)
                return s
        }
        return !1
    }
    ,
    e.prototype.toString = function(t) {
        var n = !!t;
        t = t ?? this.format;
        var r = !1
          , i = this.a < 1 && this.a >= 0
          , s = !n && i && (t.startsWith("hex") || t === "name");
        return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()),
        t === "prgb" && (r = this.toPercentageRgbString()),
        (t === "hex" || t === "hex6") && (r = this.toHexString()),
        t === "hex3" && (r = this.toHexString(!0)),
        t === "hex4" && (r = this.toHex8String(!0)),
        t === "hex8" && (r = this.toHex8String()),
        t === "name" && (r = this.toName()),
        t === "hsl" && (r = this.toHslString()),
        t === "hsv" && (r = this.toHsvString()),
        r || this.toHexString())
    }
    ,
    e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }
    ,
    e.prototype.clone = function() {
        return new e(this.toString())
    }
    ,
    e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l += t / 100,
        n.l = Qa(n.l),
        new e(n)
    }
    ,
    e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))),
        n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))),
        n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))),
        new e(n)
    }
    ,
    e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l -= t / 100,
        n.l = Qa(n.l),
        new e(n)
    }
    ,
    e.prototype.tint = function(t) {
        return t === void 0 && (t = 10),
        this.mix("white", t)
    }
    ,
    e.prototype.shade = function(t) {
        return t === void 0 && (t = 10),
        this.mix("black", t)
    }
    ,
    e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s -= t / 100,
        n.s = Qa(n.s),
        new e(n)
    }
    ,
    e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s += t / 100,
        n.s = Qa(n.s),
        new e(n)
    }
    ,
    e.prototype.greyscale = function() {
        return this.desaturate(100)
    }
    ,
    e.prototype.spin = function(t) {
        var n = this.toHsl()
          , r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r,
        new e(n)
    }
    ,
    e.prototype.mix = function(t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb()
          , i = new e(t).toRgb()
          , s = n / 100
          , o = {
            r: (i.r - r.r) * s + r.r,
            g: (i.g - r.g) * s + r.g,
            b: (i.b - r.b) * s + r.b,
            a: (i.a - r.a) * s + r.a
        };
        return new e(o)
    }
    ,
    e.prototype.analogous = function(t, n) {
        t === void 0 && (t = 6),
        n === void 0 && (n = 30);
        var r = this.toHsl()
          , i = 360 / n
          , s = [this];
        for (r.h = (r.h - (i * t >> 1) + 720) % 360; --t; )
            r.h = (r.h + i) % 360,
            s.push(new e(r));
        return s
    }
    ,
    e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360,
        new e(t)
    }
    ,
    e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var n = this.toHsv(), r = n.h, i = n.s, s = n.v, o = [], a = 1 / t; t--; )
            o.push(new e({
                h: r,
                s: i,
                v: s
            })),
            s = (s + a) % 1;
        return o
    }
    ,
    e.prototype.splitcomplement = function() {
        var t = this.toHsl()
          , n = t.h;
        return [this, new e({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), new e({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }
    ,
    e.prototype.onBackground = function(t) {
        var n = this.toRgb()
          , r = new e(t).toRgb()
          , i = n.a + r.a * (1 - n.a);
        return new e({
            r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
            g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
            b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
            a: i
        })
    }
    ,
    e.prototype.triad = function() {
        return this.polyad(3)
    }
    ,
    e.prototype.tetrad = function() {
        return this.polyad(4)
    }
    ,
    e.prototype.polyad = function(t) {
        for (var n = this.toHsl(), r = n.h, i = [this], s = 360 / t, o = 1; o < t; o++)
            i.push(new e({
                h: (r + o * s) % 360,
                s: n.s,
                l: n.l
            }));
        return i
    }
    ,
    e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString()
    }
    ,
    e
}()
  , qa = 2
  , fx = .16
  , fI = .05
  , hI = .05
  , pI = .15
  , sk = 5
  , ok = 4
  , gI = [{
    index: 7,
    opacity: .15
}, {
    index: 6,
    opacity: .25
}, {
    index: 5,
    opacity: .3
}, {
    index: 5,
    opacity: .45
}, {
    index: 5,
    opacity: .65
}, {
    index: 5,
    opacity: .85
}, {
    index: 4,
    opacity: .9
}, {
    index: 3,
    opacity: .95
}, {
    index: 2,
    opacity: .97
}, {
    index: 1,
    opacity: .98
}];
function hx(e) {
    var t = e.r
      , n = e.g
      , r = e.b
      , i = Vh(t, n, r);
    return {
        h: i.h * 360,
        s: i.s,
        v: i.v
    }
}
function Ja(e) {
    var t = e.r
      , n = e.g
      , r = e.b;
    return "#".concat(Bh(t, n, r, !1))
}
function mI(e, t, n) {
    var r = n / 100
      , i = {
        r: (t.r - e.r) * r + e.r,
        g: (t.g - e.g) * r + e.g,
        b: (t.b - e.b) * r + e.b
    };
    return i
}
function px(e, t, n) {
    var r;
    return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - qa * t : Math.round(e.h) + qa * t : r = n ? Math.round(e.h) + qa * t : Math.round(e.h) - qa * t,
    r < 0 ? r += 360 : r >= 360 && (r -= 360),
    r
}
function gx(e, t, n) {
    if (e.h === 0 && e.s === 0)
        return e.s;
    var r;
    return n ? r = e.s - fx * t : t === ok ? r = e.s + fx : r = e.s + fI * t,
    r > 1 && (r = 1),
    n && t === sk && r > .1 && (r = .1),
    r < .06 && (r = .06),
    Number(r.toFixed(2))
}
function mx(e, t, n) {
    var r;
    return n ? r = e.v + hI * t : r = e.v - pI * t,
    r > 1 && (r = 1),
    Number(r.toFixed(2))
}
function cs(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = bi(e), i = sk; i > 0; i -= 1) {
        var s = hx(r)
          , o = Ja(bi({
            h: px(s, i, !0),
            s: gx(s, i, !0),
            v: mx(s, i, !0)
        }));
        n.push(o)
    }
    n.push(Ja(r));
    for (var a = 1; a <= ok; a += 1) {
        var l = hx(r)
          , c = Ja(bi({
            h: px(l, a),
            s: gx(l, a),
            v: mx(l, a)
        }));
        n.push(c)
    }
    return t.theme === "dark" ? gI.map(function(u) {
        var d = u.index
          , f = u.opacity
          , p = Ja(mI(bi(t.backgroundColor || "#141414"), bi(n[d]), f * 100));
        return p
    }) : n
}
var Td = {
    red: "#F5222D",
    volcano: "#FA541C",
    orange: "#FA8C16",
    gold: "#FAAD14",
    yellow: "#FADB14",
    lime: "#A0D911",
    green: "#52C41A",
    cyan: "#13C2C2",
    blue: "#1677FF",
    geekblue: "#2F54EB",
    purple: "#722ED1",
    magenta: "#EB2F96",
    grey: "#666666"
}
  , Od = {}
  , Ad = {};
Object.keys(Td).forEach(function(e) {
    Od[e] = cs(Td[e]),
    Od[e].primary = Od[e][5],
    Ad[e] = cs(Td[e], {
        theme: "dark",
        backgroundColor: "#141414"
    }),
    Ad[e].primary = Ad[e][5]
});
const vI = e=>{
    const {controlHeight: t} = e;
    return {
        controlHeightSM: t * .75,
        controlHeightXS: t * .5,
        controlHeightLG: t * 1.25
    }
}
  , yI = vI;
function xI(e) {
    const {sizeUnit: t, sizeStep: n} = e;
    return {
        sizeXXL: t * (n + 8),
        sizeXL: t * (n + 4),
        sizeLG: t * (n + 2),
        sizeMD: t * (n + 1),
        sizeMS: t * n,
        size: t * n,
        sizeSM: t * (n - 1),
        sizeXS: t * (n - 2),
        sizeXXS: t * (n - 3)
    }
}
const ak = {
    blue: "#1677ff",
    purple: "#722ED1",
    cyan: "#13C2C2",
    green: "#52C41A",
    magenta: "#EB2F96",
    pink: "#eb2f96",
    red: "#F5222D",
    orange: "#FA8C16",
    yellow: "#FADB14",
    volcano: "#FA541C",
    geekblue: "#2F54EB",
    gold: "#FAAD14",
    lime: "#A0D911"
}
  , bI = Object.assign(Object.assign({}, ak), {
    colorPrimary: "#1677ff",
    colorSuccess: "#52c41a",
    colorWarning: "#faad14",
    colorError: "#ff4d4f",
    colorInfo: "#1677ff",
    colorLink: "",
    colorTextBase: "",
    colorBgBase: "",
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: "solid",
    motionUnit: .1,
    motionBase: 0,
    motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0
})
  , mu = bI;
function SI(e, t) {
    let {generateColorPalettes: n, generateNeutralColorPalettes: r} = t;
    const {colorSuccess: i, colorWarning: s, colorError: o, colorInfo: a, colorPrimary: l, colorBgBase: c, colorTextBase: u} = e
      , d = n(l)
      , f = n(i)
      , p = n(s)
      , g = n(o)
      , v = n(a)
      , S = r(c, u)
      , y = e.colorLink || e.colorInfo
      , m = n(y);
    return Object.assign(Object.assign({}, S), {
        colorPrimaryBg: d[1],
        colorPrimaryBgHover: d[2],
        colorPrimaryBorder: d[3],
        colorPrimaryBorderHover: d[4],
        colorPrimaryHover: d[5],
        colorPrimary: d[6],
        colorPrimaryActive: d[7],
        colorPrimaryTextHover: d[8],
        colorPrimaryText: d[9],
        colorPrimaryTextActive: d[10],
        colorSuccessBg: f[1],
        colorSuccessBgHover: f[2],
        colorSuccessBorder: f[3],
        colorSuccessBorderHover: f[4],
        colorSuccessHover: f[4],
        colorSuccess: f[6],
        colorSuccessActive: f[7],
        colorSuccessTextHover: f[8],
        colorSuccessText: f[9],
        colorSuccessTextActive: f[10],
        colorErrorBg: g[1],
        colorErrorBgHover: g[2],
        colorErrorBorder: g[3],
        colorErrorBorderHover: g[4],
        colorErrorHover: g[5],
        colorError: g[6],
        colorErrorActive: g[7],
        colorErrorTextHover: g[8],
        colorErrorText: g[9],
        colorErrorTextActive: g[10],
        colorWarningBg: p[1],
        colorWarningBgHover: p[2],
        colorWarningBorder: p[3],
        colorWarningBorderHover: p[4],
        colorWarningHover: p[4],
        colorWarning: p[6],
        colorWarningActive: p[7],
        colorWarningTextHover: p[8],
        colorWarningText: p[9],
        colorWarningTextActive: p[10],
        colorInfoBg: v[1],
        colorInfoBgHover: v[2],
        colorInfoBorder: v[3],
        colorInfoBorderHover: v[4],
        colorInfoHover: v[4],
        colorInfo: v[6],
        colorInfoActive: v[7],
        colorInfoTextHover: v[8],
        colorInfoText: v[9],
        colorInfoTextActive: v[10],
        colorLinkHover: m[4],
        colorLink: m[6],
        colorLinkActive: m[7],
        colorBgMask: new St("#000").setAlpha(.45).toRgbString(),
        colorWhite: "#fff"
    })
}
const wI = e=>{
    let t = e
      , n = e
      , r = e
      , i = e;
    return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16),
    e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2),
    e > 4 && e < 8 ? i = 4 : e >= 8 && (i = 6),
    {
        borderRadius: e > 16 ? 16 : e,
        borderRadiusXS: r,
        borderRadiusSM: n,
        borderRadiusLG: t,
        borderRadiusOuter: i
    }
}
  , _I = wI;
function kI(e) {
    const {motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i} = e;
    return Object.assign({
        motionDurationFast: `${(n + t).toFixed(1)}s`,
        motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
        motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
        lineWidthBold: i + 1
    }, _I(r))
}
const vn = (e,t)=>new St(e).setAlpha(t).toRgbString()
  , Ns = (e,t)=>new St(e).darken(t).toHexString()
  , CI = e=>{
    const t = cs(e);
    return {
        1: t[0],
        2: t[1],
        3: t[2],
        4: t[3],
        5: t[4],
        6: t[5],
        7: t[6],
        8: t[4],
        9: t[5],
        10: t[6]
    }
}
  , PI = (e,t)=>{
    const n = e || "#fff"
      , r = t || "#000";
    return {
        colorBgBase: n,
        colorTextBase: r,
        colorText: vn(r, .88),
        colorTextSecondary: vn(r, .65),
        colorTextTertiary: vn(r, .45),
        colorTextQuaternary: vn(r, .25),
        colorFill: vn(r, .15),
        colorFillSecondary: vn(r, .06),
        colorFillTertiary: vn(r, .04),
        colorFillQuaternary: vn(r, .02),
        colorBgLayout: Ns(n, 4),
        colorBgContainer: Ns(n, 0),
        colorBgElevated: Ns(n, 0),
        colorBgSpotlight: vn(r, .85),
        colorBorder: Ns(n, 15),
        colorBorderSecondary: Ns(n, 6)
    }
}
;
function jI(e) {
    const t = new Array(10).fill(null).map((n,r)=>{
        const i = r - 1
          , s = e * Math.pow(2.71828, i / 5)
          , o = r > 1 ? Math.floor(s) : Math.ceil(s);
        return Math.floor(o / 2) * 2
    }
    );
    return t[1] = e,
    t.map(n=>{
        const r = n + 8;
        return {
            size: n,
            lineHeight: r / n
        }
    }
    )
}
const EI = e=>{
    const t = jI(e)
      , n = t.map(i=>i.size)
      , r = t.map(i=>i.lineHeight);
    return {
        fontSizeSM: n[0],
        fontSize: n[1],
        fontSizeLG: n[2],
        fontSizeXL: n[3],
        fontSizeHeading1: n[6],
        fontSizeHeading2: n[5],
        fontSizeHeading3: n[4],
        fontSizeHeading4: n[3],
        fontSizeHeading5: n[2],
        lineHeight: r[1],
        lineHeightLG: r[2],
        lineHeightSM: r[0],
        lineHeightHeading1: r[6],
        lineHeightHeading2: r[5],
        lineHeightHeading3: r[4],
        lineHeightHeading4: r[3],
        lineHeightHeading5: r[2]
    }
}
  , MI = EI;
function TI(e) {
    const t = Object.keys(ak).map(n=>{
        const r = cs(e[n]);
        return new Array(10).fill(1).reduce((i,s,o)=>(i[`${n}-${o + 1}`] = r[o],
        i[`${n}${o + 1}`] = r[o],
        i), {})
    }
    ).reduce((n,r)=>(n = Object.assign(Object.assign({}, n), r),
    n), {});
    return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), SI(e, {
        generateColorPalettes: CI,
        generateNeutralColorPalettes: PI
    })), MI(e.fontSize)), xI(e)), yI(e)), kI(e))
}
const lk = Lh(TI)
  , ck = {
    token: mu,
    hashed: !0
}
  , uk = de.createContext(ck);
function Ld(e) {
    return e >= 0 && e <= 255
}
function el(e, t) {
    const {r: n, g: r, b: i, a: s} = new St(e).toRgb();
    if (s < 1)
        return e;
    const {r: o, g: a, b: l} = new St(t).toRgb();
    for (let c = .01; c <= 1; c += .01) {
        const u = Math.round((n - o * (1 - c)) / c)
          , d = Math.round((r - a * (1 - c)) / c)
          , f = Math.round((i - l * (1 - c)) / c);
        if (Ld(u) && Ld(d) && Ld(f))
            return new St({
                r: u,
                g: d,
                b: f,
                a: Math.round(c * 100) / 100
            }).toRgbString()
    }
    return new St({
        r: n,
        g: r,
        b: i,
        a: 1
    }).toRgbString()
}
var OI = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
;
function dk(e) {
    const {override: t} = e
      , n = OI(e, ["override"])
      , r = Object.assign({}, t);
    Object.keys(mu).forEach(f=>{
        delete r[f]
    }
    );
    const i = Object.assign(Object.assign({}, n), r)
      , s = 480
      , o = 576
      , a = 768
      , l = 992
      , c = 1200
      , u = 1600;
    if (i.motion === !1) {
        const f = "0s";
        i.motionDurationFast = f,
        i.motionDurationMid = f,
        i.motionDurationSlow = f
    }
    return Object.assign(Object.assign(Object.assign({}, i), {
        colorFillContent: i.colorFillSecondary,
        colorFillContentHover: i.colorFill,
        colorFillAlter: i.colorFillQuaternary,
        colorBgContainerDisabled: i.colorFillTertiary,
        colorBorderBg: i.colorBgContainer,
        colorSplit: el(i.colorBorderSecondary, i.colorBgContainer),
        colorTextPlaceholder: i.colorTextQuaternary,
        colorTextDisabled: i.colorTextQuaternary,
        colorTextHeading: i.colorText,
        colorTextLabel: i.colorTextSecondary,
        colorTextDescription: i.colorTextTertiary,
        colorTextLightSolid: i.colorWhite,
        colorHighlight: i.colorError,
        colorBgTextHover: i.colorFillSecondary,
        colorBgTextActive: i.colorFill,
        colorIcon: i.colorTextTertiary,
        colorIconHover: i.colorText,
        colorErrorOutline: el(i.colorErrorBg, i.colorBgContainer),
        colorWarningOutline: el(i.colorWarningBg, i.colorBgContainer),
        fontSizeIcon: i.fontSizeSM,
        lineWidthFocus: i.lineWidth * 4,
        lineWidth: i.lineWidth,
        controlOutlineWidth: i.lineWidth * 2,
        controlInteractiveSize: i.controlHeight / 2,
        controlItemBgHover: i.colorFillTertiary,
        controlItemBgActive: i.colorPrimaryBg,
        controlItemBgActiveHover: i.colorPrimaryBgHover,
        controlItemBgActiveDisabled: i.colorFill,
        controlTmpOutline: i.colorFillQuaternary,
        controlOutline: el(i.colorPrimaryBg, i.colorBgContainer),
        lineType: i.lineType,
        borderRadius: i.borderRadius,
        borderRadiusXS: i.borderRadiusXS,
        borderRadiusSM: i.borderRadiusSM,
        borderRadiusLG: i.borderRadiusLG,
        fontWeightStrong: 600,
        opacityLoading: .65,
        linkDecoration: "none",
        linkHoverDecoration: "none",
        linkFocusDecoration: "none",
        controlPaddingHorizontal: 12,
        controlPaddingHorizontalSM: 8,
        paddingXXS: i.sizeXXS,
        paddingXS: i.sizeXS,
        paddingSM: i.sizeSM,
        padding: i.size,
        paddingMD: i.sizeMD,
        paddingLG: i.sizeLG,
        paddingXL: i.sizeXL,
        paddingContentHorizontalLG: i.sizeLG,
        paddingContentVerticalLG: i.sizeMS,
        paddingContentHorizontal: i.sizeMS,
        paddingContentVertical: i.sizeSM,
        paddingContentHorizontalSM: i.size,
        paddingContentVerticalSM: i.sizeXS,
        marginXXS: i.sizeXXS,
        marginXS: i.sizeXS,
        marginSM: i.sizeSM,
        margin: i.size,
        marginMD: i.sizeMD,
        marginLG: i.sizeLG,
        marginXL: i.sizeXL,
        marginXXL: i.sizeXXL,
        boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
        screenXS: s,
        screenXSMin: s,
        screenXSMax: o - 1,
        screenSM: o,
        screenSMMin: o,
        screenSMMax: a - 1,
        screenMD: a,
        screenMDMin: a,
        screenMDMax: l - 1,
        screenLG: l,
        screenLGMin: l,
        screenLGMax: c - 1,
        screenXL: c,
        screenXLMin: c,
        screenXLMax: u - 1,
        screenXXL: u,
        screenXXLMin: u,
        boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
        boxShadowCard: `
      0 1px 2px -2px ${new St("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new St("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new St("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
        boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
        boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
        boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
    }), r)
}
var vx = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
;
const fk = (e,t,n)=>{
    const r = n.getDerivativeToken(e)
      , {override: i} = t
      , s = vx(t, ["override"]);
    let o = Object.assign(Object.assign({}, r), {
        override: i
    });
    return o = dk(o),
    s && Object.entries(s).forEach(a=>{
        let[l,c] = a;
        const {theme: u} = c
          , d = vx(c, ["theme"]);
        let f = d;
        u && (f = fk(Object.assign(Object.assign({}, o), d), {
            override: d
        }, u)),
        o[l] = f
    }
    ),
    o
}
;
function vu() {
    const {token: e, hashed: t, theme: n, components: r} = de.useContext(uk)
      , i = `${eI}-${t || ""}`
      , s = n || lk
      , [o,a] = cF(s, [mu, e], {
        salt: i,
        override: Object.assign({
            override: e
        }, r),
        getComputedToken: fk,
        formatToken: dk
    });
    return [s, o, t ? a : ""]
}
function Ml(e) {
    var t = x.useRef(!1)
      , n = x.useState(e)
      , r = ve(n, 2)
      , i = r[0]
      , s = r[1];
    x.useEffect(function() {
        return t.current = !1,
        function() {
            t.current = !0
        }
    }, []);
    function o(a, l) {
        l && t.current || s(a)
    }
    return [i, o]
}
const hk = "anticon"
  , AI = (e,t)=>t || (e ? `ant-${e}` : "ant")
  , vs = x.createContext({
    getPrefixCls: AI,
    iconPrefixCls: hk
})
  , LI = ()=>({
    display: "inline-flex",
    alignItems: "center",
    color: "inherit",
    fontStyle: "normal",
    lineHeight: 0,
    textAlign: "center",
    textTransform: "none",
    verticalAlign: "-0.125em",
    textRendering: "optimizeLegibility",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    "> *": {
        lineHeight: 1
    },
    svg: {
        display: "inline-block"
    }
})
  , DI = e=>({
    a: {
        color: e.colorLink,
        textDecoration: e.linkDecoration,
        backgroundColor: "transparent",
        outline: "none",
        cursor: "pointer",
        transition: `color ${e.motionDurationSlow}`,
        "-webkit-text-decoration-skip": "objects",
        "&:hover": {
            color: e.colorLinkHover
        },
        "&:active": {
            color: e.colorLinkActive
        },
        "&:active,\n  &:hover": {
            textDecoration: e.linkHoverDecoration,
            outline: 0
        },
        "&:focus": {
            textDecoration: e.linkFocusDecoration,
            outline: 0
        },
        "&[disabled]": {
            color: e.colorTextDisabled,
            cursor: "not-allowed"
        }
    }
})
  , RI = (e,t)=>{
    const {fontFamily: n, fontSize: r} = e
      , i = `[class^="${t}"], [class*=" ${t}"]`;
    return {
        [i]: {
            fontFamily: n,
            fontSize: r,
            boxSizing: "border-box",
            "&::before, &::after": {
                boxSizing: "border-box"
            },
            [i]: {
                boxSizing: "border-box",
                "&::before, &::after": {
                    boxSizing: "border-box"
                }
            }
        }
    }
}
  , pk = typeof CSSINJS_STATISTIC < "u";
let $h = !0;
function Hh() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    if (!pk)
        return Object.assign.apply(Object, [{}].concat(t));
    $h = !1;
    const r = {};
    return t.forEach(i=>{
        Object.keys(i).forEach(o=>{
            Object.defineProperty(r, o, {
                configurable: !0,
                enumerable: !0,
                get: ()=>i[o]
            })
        }
        )
    }
    ),
    $h = !0,
    r
}
const yx = {};
function FI() {}
function II(e) {
    let t, n = e, r = FI;
    return pk && (t = new Set,
    n = new Proxy(e,{
        get(i, s) {
            return $h && t.add(s),
            i[s]
        }
    }),
    r = (i,s)=>{
        var o;
        yx[i] = {
            global: Array.from(t),
            component: Object.assign(Object.assign({}, (o = yx[i]) === null || o === void 0 ? void 0 : o.component), s)
        }
    }
    ),
    {
        token: n,
        keys: t,
        flush: r
    }
}
const NI = (e,t)=>{
    const [n,r] = vu();
    return Ih({
        theme: n,
        token: r,
        hashId: "",
        path: ["ant-design-icons", e],
        nonce: ()=>t == null ? void 0 : t.nonce
    }, ()=>[{
        [`.${e}`]: Object.assign(Object.assign({}, LI()), {
            [`.${e} .${e}-icon`]: {
                display: "block"
            }
        })
    }])
}
  , gk = NI;
function mk(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = Array.isArray(e) ? e : [e, e]
      , [s] = i
      , o = i.join("-");
    return a=>{
        const [l,c,u] = vu()
          , {getPrefixCls: d, iconPrefixCls: f, csp: p} = x.useContext(vs)
          , g = d()
          , v = {
            theme: l,
            token: c,
            hashId: u,
            nonce: ()=>p == null ? void 0 : p.nonce,
            clientOnly: r.clientOnly,
            order: r.order || -999
        };
        return Ih(Object.assign(Object.assign({}, v), {
            clientOnly: !1,
            path: ["Shared", g]
        }), ()=>[{
            "&": DI(c)
        }]),
        gk(f),
        [Ih(Object.assign(Object.assign({}, v), {
            path: [o, a, f]
        }), ()=>{
            const {token: S, flush: y} = II(c)
              , m = Object.assign({}, c[s]);
            if (r.deprecatedTokens) {
                const {deprecatedTokens: C} = r;
                C.forEach(j=>{
                    let[M,O] = j;
                    var A;
                    (m != null && m[M] || m != null && m[O]) && ((A = m[O]) !== null && A !== void 0 || (m[O] = m == null ? void 0 : m[M]))
                }
                )
            }
            const b = typeof n == "function" ? n(Hh(S, m ?? {})) : n
              , w = Object.assign(Object.assign({}, b), m)
              , k = `.${a}`
              , P = Hh(S, {
                componentCls: k,
                prefixCls: a,
                iconCls: `.${f}`,
                antCls: `.${g}`
            }, w)
              , _ = t(P, {
                hashId: u,
                prefixCls: a,
                rootPrefixCls: g,
                iconPrefixCls: f,
                overrideComponentToken: m
            });
            return y(s, w),
            [r.resetStyle === !1 ? null : RI(c, a), _]
        }
        ), u]
    }
}
const VI = `-ant-${Date.now()}-${Math.random()}`;
function BI(e, t) {
    const n = {}
      , r = (o,a)=>{
        let l = o.clone();
        return l = (a == null ? void 0 : a(l)) || l,
        l.toRgbString()
    }
      , i = (o,a)=>{
        const l = new St(o)
          , c = cs(l.toRgbString());
        n[`${a}-color`] = r(l),
        n[`${a}-color-disabled`] = c[1],
        n[`${a}-color-hover`] = c[4],
        n[`${a}-color-active`] = c[6],
        n[`${a}-color-outline`] = l.clone().setAlpha(.2).toRgbString(),
        n[`${a}-color-deprecated-bg`] = c[0],
        n[`${a}-color-deprecated-border`] = c[2]
    }
    ;
    if (t.primaryColor) {
        i(t.primaryColor, "primary");
        const o = new St(t.primaryColor)
          , a = cs(o.toRgbString());
        a.forEach((c,u)=>{
            n[`primary-${u + 1}`] = c
        }
        ),
        n["primary-color-deprecated-l-35"] = r(o, c=>c.lighten(35)),
        n["primary-color-deprecated-l-20"] = r(o, c=>c.lighten(20)),
        n["primary-color-deprecated-t-20"] = r(o, c=>c.tint(20)),
        n["primary-color-deprecated-t-50"] = r(o, c=>c.tint(50)),
        n["primary-color-deprecated-f-12"] = r(o, c=>c.setAlpha(c.getAlpha() * .12));
        const l = new St(a[0]);
        n["primary-color-active-deprecated-f-30"] = r(l, c=>c.setAlpha(c.getAlpha() * .3)),
        n["primary-color-active-deprecated-d-02"] = r(l, c=>c.darken(2))
    }
    return t.successColor && i(t.successColor, "success"),
    t.warningColor && i(t.warningColor, "warning"),
    t.errorColor && i(t.errorColor, "error"),
    t.infoColor && i(t.infoColor, "info"),
    `
  :root {
    ${Object.keys(n).map(o=>`--${e}-${o}: ${n[o]};`).join(`
`)}
  }
  `.trim()
}
function zI(e, t) {
    const n = BI(e, t);
    dn() && wc(n, `${VI}-dynamic-theme`)
}
const Wh = x.createContext(!1)
  , $I = e=>{
    let {children: t, disabled: n} = e;
    const r = x.useContext(Wh);
    return x.createElement(Wh.Provider, {
        value: n ?? r
    }, t)
}
  , HI = Wh
  , Uh = x.createContext(void 0)
  , WI = e=>{
    let {children: t, size: n} = e;
    const r = x.useContext(Uh);
    return x.createElement(Uh.Provider, {
        value: n || r
    }, t)
}
  , $g = Uh;
function UI() {
    const e = x.useContext(HI)
      , t = x.useContext($g);
    return {
        componentDisabled: e,
        componentSize: t
    }
}
function GI(e, t) {
    const n = e || {}
      , r = n.inherit === !1 || !t ? ck : t;
    return A2(()=>{
        if (!e)
            return t;
        const i = Object.assign({}, r.components);
        return Object.keys(e.components || {}).forEach(s=>{
            i[s] = Object.assign(Object.assign({}, i[s]), e.components[s])
        }
        ),
        Object.assign(Object.assign(Object.assign({}, r), n), {
            token: Object.assign(Object.assign({}, r.token), n.token),
            components: i
        })
    }
    , [n, r], (i,s)=>i.some((o,a)=>{
        const l = s[a];
        return !A6(o, l, !0)
    }
    ))
}
var YI = ["children"]
  , vk = x.createContext({});
function XI(e) {
    var t = e.children
      , n = Th(e, YI);
    return x.createElement(vk.Provider, {
        value: n
    }, t)
}
var KI = function(e) {
    P2(n, e);
    var t = j2(n);
    function n() {
        return oa(this, n),
        t.apply(this, arguments)
    }
    return aa(n, [{
        key: "render",
        value: function() {
            return this.props.children
        }
    }]),
    n
}(x.Component)
  , Br = "none"
  , tl = "appear"
  , nl = "enter"
  , rl = "leave"
  , xx = "none"
  , Ut = "prepare"
  , Ni = "start"
  , Vi = "active"
  , Hg = "end"
  , yk = "prepared";
function bx(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit".concat(e)] = "webkit".concat(t),
    n["Moz".concat(e)] = "moz".concat(t),
    n["ms".concat(e)] = "MS".concat(t),
    n["O".concat(e)] = "o".concat(t.toLowerCase()),
    n
}
function QI(e, t) {
    var n = {
        animationend: bx("Animation", "AnimationEnd"),
        transitionend: bx("Transition", "TransitionEnd")
    };
    return e && ("AnimationEvent"in t || delete n.animationend.animation,
    "TransitionEvent"in t || delete n.transitionend.transition),
    n
}
var ZI = QI(dn(), typeof window < "u" ? window : {})
  , xk = {};
if (dn()) {
    var qI = document.createElement("div");
    xk = qI.style
}
var il = {};
function bk(e) {
    if (il[e])
        return il[e];
    var t = ZI[e];
    if (t)
        for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
            var s = n[i];
            if (Object.prototype.hasOwnProperty.call(t, s) && s in xk)
                return il[e] = t[s],
                il[e]
        }
    return ""
}
var Sk = bk("animationend")
  , wk = bk("transitionend")
  , _k = !!(Sk && wk)
  , Sx = Sk || "animationend"
  , wx = wk || "transitionend";
function _x(e, t) {
    if (!e)
        return null;
    if (Ie(e) === "object") {
        var n = t.replace(/-\w/g, function(r) {
            return r[1].toUpperCase()
        });
        return e[n]
    }
    return "".concat(e, "-").concat(t)
}
const JI = function(e) {
    var t = x.useRef()
      , n = x.useRef(e);
    n.current = e;
    var r = x.useCallback(function(o) {
        n.current(o)
    }, []);
    function i(o) {
        o && (o.removeEventListener(wx, r),
        o.removeEventListener(Sx, r))
    }
    function s(o) {
        t.current && t.current !== o && i(t.current),
        o && o !== t.current && (o.addEventListener(wx, r),
        o.addEventListener(Sx, r),
        t.current = o)
    }
    return x.useEffect(function() {
        return function() {
            i(t.current)
        }
    }, []),
    [s, i]
};
var kk = dn() ? x.useLayoutEffect : x.useEffect;
const e8 = function() {
    var e = x.useRef(null);
    function t() {
        Mh.cancel(e.current)
    }
    function n(r) {
        var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
        t();
        var s = Mh(function() {
            i <= 1 ? r({
                isCanceled: function() {
                    return s !== e.current
                }
            }) : n(r, i - 1)
        });
        e.current = s
    }
    return x.useEffect(function() {
        return function() {
            t()
        }
    }, []),
    [n, t]
};
var t8 = [Ut, Ni, Vi, Hg]
  , n8 = [Ut, yk]
  , Ck = !1
  , r8 = !0;
function Pk(e) {
    return e === Vi || e === Hg
}
const i8 = function(e, t, n) {
    var r = Ml(xx)
      , i = ve(r, 2)
      , s = i[0]
      , o = i[1]
      , a = e8()
      , l = ve(a, 2)
      , c = l[0]
      , u = l[1];
    function d() {
        o(Ut, !0)
    }
    var f = t ? n8 : t8;
    return kk(function() {
        if (s !== xx && s !== Hg) {
            var p = f.indexOf(s)
              , g = f[p + 1]
              , v = n(s);
            v === Ck ? o(g, !0) : g && c(function(S) {
                function y() {
                    S.isCanceled() || o(g, !0)
                }
                v === !0 ? y() : Promise.resolve(v).then(y)
            })
        }
    }, [e, s]),
    x.useEffect(function() {
        return function() {
            u()
        }
    }, []),
    [d, s]
};
function s8(e, t, n, r) {
    var i = r.motionEnter
      , s = i === void 0 ? !0 : i
      , o = r.motionAppear
      , a = o === void 0 ? !0 : o
      , l = r.motionLeave
      , c = l === void 0 ? !0 : l
      , u = r.motionDeadline
      , d = r.motionLeaveImmediately
      , f = r.onAppearPrepare
      , p = r.onEnterPrepare
      , g = r.onLeavePrepare
      , v = r.onAppearStart
      , S = r.onEnterStart
      , y = r.onLeaveStart
      , m = r.onAppearActive
      , b = r.onEnterActive
      , w = r.onLeaveActive
      , k = r.onAppearEnd
      , P = r.onEnterEnd
      , _ = r.onLeaveEnd
      , C = r.onVisibleChanged
      , j = Ml()
      , M = ve(j, 2)
      , O = M[0]
      , A = M[1]
      , N = Ml(Br)
      , B = ve(N, 2)
      , L = B[0]
      , V = B[1]
      , W = Ml(null)
      , E = ve(W, 2)
      , R = E[0]
      , D = E[1]
      , I = x.useRef(!1)
      , H = x.useRef(null);
    function pe() {
        return n()
    }
    var be = x.useRef(!1);
    function Ve() {
        V(Br, !0),
        D(null, !0)
    }
    function ae(Ue) {
        var Te = pe();
        if (!(Ue && !Ue.deadline && Ue.target !== Te)) {
            var Oe = be.current, Mt;
            L === tl && Oe ? Mt = k == null ? void 0 : k(Te, Ue) : L === nl && Oe ? Mt = P == null ? void 0 : P(Te, Ue) : L === rl && Oe && (Mt = _ == null ? void 0 : _(Te, Ue)),
            L !== Br && Oe && Mt !== !1 && Ve()
        }
    }
    var Bt = JI(ae)
      , ys = ve(Bt, 1)
      , Cr = ys[0]
      , fn = function(Te) {
        var Oe, Mt, jr;
        switch (Te) {
        case tl:
            return Oe = {},
            te(Oe, Ut, f),
            te(Oe, Ni, v),
            te(Oe, Vi, m),
            Oe;
        case nl:
            return Mt = {},
            te(Mt, Ut, p),
            te(Mt, Ni, S),
            te(Mt, Vi, b),
            Mt;
        case rl:
            return jr = {},
            te(jr, Ut, g),
            te(jr, Ni, y),
            te(jr, Vi, w),
            jr;
        default:
            return {}
        }
    }
      , qe = x.useMemo(function() {
        return fn(L)
    }, [L])
      , pi = i8(L, !e, function(Ue) {
        if (Ue === Ut) {
            var Te = qe[Ut];
            return Te ? Te(pe()) : Ck
        }
        if (hn in qe) {
            var Oe;
            D(((Oe = qe[hn]) === null || Oe === void 0 ? void 0 : Oe.call(qe, pe(), null)) || null)
        }
        return hn === Vi && (Cr(pe()),
        u > 0 && (clearTimeout(H.current),
        H.current = setTimeout(function() {
            ae({
                deadline: !0
            })
        }, u))),
        hn === yk && Ve(),
        r8
    })
      , Pr = ve(pi, 2)
      , xu = Pr[0]
      , hn = Pr[1]
      , bu = Pk(hn);
    be.current = bu,
    kk(function() {
        A(t);
        var Ue = I.current;
        I.current = !0;
        var Te;
        !Ue && t && a && (Te = tl),
        Ue && t && s && (Te = nl),
        (Ue && !t && c || !Ue && d && !t && c) && (Te = rl);
        var Oe = fn(Te);
        Te && (e || Oe[Ut]) ? (V(Te),
        xu()) : V(Br)
    }, [t]),
    x.useEffect(function() {
        (L === tl && !a || L === nl && !s || L === rl && !c) && V(Br)
    }, [a, s, c]),
    x.useEffect(function() {
        return function() {
            I.current = !1,
            clearTimeout(H.current)
        }
    }, []);
    var xs = x.useRef(!1);
    x.useEffect(function() {
        O && (xs.current = !0),
        O !== void 0 && L === Br && ((xs.current || O) && (C == null || C(O)),
        xs.current = !0)
    }, [O, L]);
    var bs = R;
    return qe[Ut] && hn === Ni && (bs = K({
        transition: "none"
    }, bs)),
    [L, hn, bs, O ?? t]
}
function o8(e) {
    var t = e;
    Ie(e) === "object" && (t = e.transitionSupport);
    function n(i, s) {
        return !!(i.motionName && t && s !== !1)
    }
    var r = x.forwardRef(function(i, s) {
        var o = i.visible
          , a = o === void 0 ? !0 : o
          , l = i.removeOnLeave
          , c = l === void 0 ? !0 : l
          , u = i.forceRender
          , d = i.children
          , f = i.motionName
          , p = i.leavedClassName
          , g = i.eventProps
          , v = x.useContext(vk)
          , S = v.motion
          , y = n(i, S)
          , m = x.useRef()
          , b = x.useRef();
        function w() {
            try {
                return m.current instanceof HTMLElement ? m.current : E6(b.current)
            } catch {
                return null
            }
        }
        var k = s8(y, a, w, i)
          , P = ve(k, 4)
          , _ = P[0]
          , C = P[1]
          , j = P[2]
          , M = P[3]
          , O = x.useRef(M);
        M && (O.current = !0);
        var A = x.useCallback(function(D) {
            m.current = D,
            C6(s, D)
        }, [s]), N, B = K(K({}, g), {}, {
            visible: a
        });
        if (!d)
            N = null;
        else if (_ === Br)
            M ? N = d(K({}, B), A) : !c && O.current && p ? N = d(K(K({}, B), {}, {
                className: p
            }), A) : u || !c && !p ? N = d(K(K({}, B), {}, {
                style: {
                    display: "none"
                }
            }), A) : N = null;
        else {
            var L, V;
            C === Ut ? V = "prepare" : Pk(C) ? V = "active" : C === Ni && (V = "start");
            var W = _x(f, "".concat(_, "-").concat(V));
            N = d(K(K({}, B), {}, {
                className: Og(_x(f, _), (L = {},
                te(L, W, W && V),
                te(L, f, typeof f == "string"),
                L)),
                style: j
            }), A)
        }
        if (x.isValidElement(N) && P6(N)) {
            var E = N
              , R = E.ref;
            R || (N = x.cloneElement(N, {
                ref: A
            }))
        }
        return x.createElement(KI, {
            ref: b
        }, N)
    });
    return r.displayName = "CSSMotion",
    r
}
const a8 = o8(_k);
var Gh = "add"
  , Yh = "keep"
  , Xh = "remove"
  , Dd = "removed";
function l8(e) {
    var t;
    return e && Ie(e) === "object" && "key"in e ? t = e : t = {
        key: e
    },
    K(K({}, t), {}, {
        key: String(t.key)
    })
}
function Kh() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return e.map(l8)
}
function c8() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
      , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
      , n = []
      , r = 0
      , i = t.length
      , s = Kh(e)
      , o = Kh(t);
    s.forEach(function(c) {
        for (var u = !1, d = r; d < i; d += 1) {
            var f = o[d];
            if (f.key === c.key) {
                r < d && (n = n.concat(o.slice(r, d).map(function(p) {
                    return K(K({}, p), {}, {
                        status: Gh
                    })
                })),
                r = d),
                n.push(K(K({}, f), {}, {
                    status: Yh
                })),
                r += 1,
                u = !0;
                break
            }
        }
        u || n.push(K(K({}, c), {}, {
            status: Xh
        }))
    }),
    r < i && (n = n.concat(o.slice(r).map(function(c) {
        return K(K({}, c), {}, {
            status: Gh
        })
    })));
    var a = {};
    n.forEach(function(c) {
        var u = c.key;
        a[u] = (a[u] || 0) + 1
    });
    var l = Object.keys(a).filter(function(c) {
        return a[c] > 1
    });
    return l.forEach(function(c) {
        n = n.filter(function(u) {
            var d = u.key
              , f = u.status;
            return d !== c || f !== Xh
        }),
        n.forEach(function(u) {
            u.key === c && (u.status = Yh)
        })
    }),
    n
}
var u8 = ["component", "children", "onVisibleChanged", "onAllRemoved"]
  , d8 = ["status"]
  , f8 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function h8(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : a8
      , n = function(r) {
        P2(s, r);
        var i = j2(s);
        function s() {
            var o;
            oa(this, s);
            for (var a = arguments.length, l = new Array(a), c = 0; c < a; c++)
                l[c] = arguments[c];
            return o = i.call.apply(i, [this].concat(l)),
            te(Ph(o), "state", {
                keyEntities: []
            }),
            te(Ph(o), "removeKey", function(u) {
                var d = o.state.keyEntities
                  , f = d.map(function(p) {
                    return p.key !== u ? p : K(K({}, p), {}, {
                        status: Dd
                    })
                });
                return o.setState({
                    keyEntities: f
                }),
                f.filter(function(p) {
                    var g = p.status;
                    return g !== Dd
                }).length
            }),
            o
        }
        return aa(s, [{
            key: "render",
            value: function() {
                var a = this
                  , l = this.state.keyEntities
                  , c = this.props
                  , u = c.component
                  , d = c.children
                  , f = c.onVisibleChanged
                  , p = c.onAllRemoved
                  , g = Th(c, u8)
                  , v = u || x.Fragment
                  , S = {};
                return f8.forEach(function(y) {
                    S[y] = g[y],
                    delete g[y]
                }),
                delete g.keys,
                x.createElement(v, g, l.map(function(y, m) {
                    var b = y.status
                      , w = Th(y, d8)
                      , k = b === Gh || b === Yh;
                    return x.createElement(t, Sc({}, S, {
                        key: w.key,
                        visible: k,
                        eventProps: w,
                        onVisibleChanged: function(_) {
                            if (f == null || f(_, {
                                key: w.key
                            }),
                            !_) {
                                var C = a.removeKey(w.key);
                                C === 0 && p && p()
                            }
                        }
                    }), function(P, _) {
                        return d(K(K({}, P), {}, {
                            index: m
                        }), _)
                    })
                }))
            }
        }], [{
            key: "getDerivedStateFromProps",
            value: function(a, l) {
                var c = a.keys
                  , u = l.keyEntities
                  , d = Kh(c)
                  , f = c8(u, d);
                return {
                    keyEntities: f.filter(function(p) {
                        var g = u.find(function(v) {
                            var S = v.key;
                            return p.key === S
                        });
                        return !(g && g.status === Dd && p.status === Xh)
                    })
                }
            }
        }]),
        s
    }(x.Component);
    return te(n, "defaultProps", {
        component: "div"
    }),
    n
}
h8(_k);
function p8(e) {
    const {children: t} = e
      , [,n] = vu()
      , {motion: r} = n
      , i = x.useRef(!1);
    return i.current = i.current || r === !1,
    i.current ? x.createElement(XI, {
        motion: r
    }, t) : t
}
var g8 = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
;
const m8 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"]
  , v8 = "ant";
let jk;
function y8() {
    return jk || v8
}
function x8(e) {
    return Object.keys(e).some(t=>t.endsWith("Color"))
}
const b8 = e=>{
    let {prefixCls: t, iconPrefixCls: n, theme: r} = e;
    t !== void 0 && (jk = t),
    r && x8(r) && zI(y8(), r)
}
  , S8 = e=>{
    const {children: t, csp: n, autoInsertSpaceInButton: r, alert: i, anchor: s, form: o, locale: a, componentSize: l, direction: c, space: u, virtual: d, dropdownMatchSelectWidth: f, popupMatchSelectWidth: p, popupOverflow: g, legacyLocale: v, parentContext: S, iconPrefixCls: y, theme: m, componentDisabled: b, segmented: w, statistic: k, spin: P, calendar: _, carousel: C, cascader: j, collapse: M, typography: O, checkbox: A, descriptions: N, divider: B, drawer: L, skeleton: V, steps: W, image: E, layout: R, list: D, mentions: I, modal: H, progress: pe, result: be, slider: Ve, breadcrumb: ae, menu: Bt, pagination: ys, input: Cr, empty: fn, badge: qe, radio: pi, rate: Pr, switch: xu, transfer: hn, avatar: bu, message: xs, tag: bs, table: Ue, card: Te, tabs: Oe, timeline: Mt, timePicker: jr, upload: Mk, notification: Tk, tree: Ok, colorPicker: Ak, datePicker: Lk, wave: Dk} = e
      , Rk = x.useCallback((Pe,Be)=>{
        const {prefixCls: Zt} = e;
        if (Be)
            return Be;
        const qt = Zt || S.getPrefixCls("");
        return Pe ? `${qt}-${Pe}` : qt
    }
    , [S.getPrefixCls, e.prefixCls])
      , gi = y || S.iconPrefixCls || hk
      , Fk = gi !== S.iconPrefixCls
      , Ss = n || S.csp
      , Ik = gk(gi, Ss)
      , Su = GI(m, S.theme)
      , wu = {
        csp: Ss,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: s,
        locale: a || v,
        direction: c,
        space: u,
        virtual: d,
        popupMatchSelectWidth: p ?? f,
        popupOverflow: g,
        getPrefixCls: Rk,
        iconPrefixCls: gi,
        theme: Su,
        segmented: w,
        statistic: k,
        spin: P,
        calendar: _,
        carousel: C,
        cascader: j,
        collapse: M,
        typography: O,
        checkbox: A,
        descriptions: N,
        divider: B,
        drawer: L,
        skeleton: V,
        steps: W,
        image: E,
        input: Cr,
        layout: R,
        list: D,
        mentions: I,
        modal: H,
        progress: pe,
        result: be,
        slider: Ve,
        breadcrumb: ae,
        menu: Bt,
        pagination: ys,
        empty: fn,
        badge: qe,
        radio: pi,
        rate: Pr,
        switch: xu,
        transfer: hn,
        avatar: bu,
        message: xs,
        tag: bs,
        table: Ue,
        card: Te,
        tabs: Oe,
        timeline: Mt,
        timePicker: jr,
        upload: Mk,
        notification: Tk,
        tree: Ok,
        colorPicker: Ak,
        datePicker: Lk,
        wave: Dk
    }
      , ca = Object.assign({}, S);
    Object.keys(wu).forEach(Pe=>{
        wu[Pe] !== void 0 && (ca[Pe] = wu[Pe])
    }
    ),
    m8.forEach(Pe=>{
        const Be = e[Pe];
        Be && (ca[Pe] = Be)
    }
    );
    const ua = A2(()=>ca, ca, (Pe,Be)=>{
        const Zt = Object.keys(Pe)
          , qt = Object.keys(Be);
        return Zt.length !== qt.length || Zt.some(da=>Pe[da] !== Be[da])
    }
    )
      , Nk = x.useMemo(()=>({
        prefixCls: gi,
        csp: Ss
    }), [gi, Ss]);
    let it = Fk ? Ik(t) : t;
    const Wg = x.useMemo(()=>{
        var Pe, Be, Zt, qt;
        return $F(((Pe = gu.Form) === null || Pe === void 0 ? void 0 : Pe.defaultValidateMessages) || {}, ((Zt = (Be = ua.locale) === null || Be === void 0 ? void 0 : Be.Form) === null || Zt === void 0 ? void 0 : Zt.defaultValidateMessages) || {}, ((qt = ua.form) === null || qt === void 0 ? void 0 : qt.validateMessages) || {}, (o == null ? void 0 : o.validateMessages) || {})
    }
    , [ua, o == null ? void 0 : o.validateMessages]);
    Object.keys(Wg).length > 0 && (it = x.createElement(HF.Provider, {
        value: Wg
    }, t)),
    a && (it = x.createElement(JF, {
        locale: a,
        _ANT_MARK__: ZF
    }, it)),
    (gi || Ss) && (it = x.createElement(NF.Provider, {
        value: Nk
    }, it)),
    l && (it = x.createElement(WI, {
        size: l
    }, it)),
    it = x.createElement(p8, null, it);
    const Vk = x.useMemo(()=>{
        const Pe = Su || {}
          , {algorithm: Be, token: Zt, components: qt} = Pe
          , da = g8(Pe, ["algorithm", "token", "components"])
          , Ug = Be && (!Array.isArray(Be) || Be.length > 0) ? Lh(Be) : lk
          , Gg = {};
        return Object.entries(qt || {}).forEach(Bk=>{
            let[zk,$k] = Bk;
            const pn = Object.assign({}, $k);
            "algorithm"in pn && (pn.algorithm === !0 ? pn.theme = Ug : (Array.isArray(pn.algorithm) || typeof pn.algorithm == "function") && (pn.theme = Lh(pn.algorithm)),
            delete pn.algorithm),
            Gg[zk] = pn
        }
        ),
        Object.assign(Object.assign({}, da), {
            theme: Ug,
            token: Object.assign(Object.assign({}, mu), Zt),
            components: Gg
        })
    }
    , [Su]);
    return m && (it = x.createElement(uk.Provider, {
        value: Vk
    }, it)),
    b !== void 0 && (it = x.createElement($I, {
        disabled: b
    }, it)),
    x.createElement(vs.Provider, {
        value: ua
    }, it)
}
  , la = e=>{
    const t = x.useContext(vs)
      , n = x.useContext(rk);
    return x.createElement(S8, Object.assign({
        parentContext: t,
        legacyLocale: n
    }, e))
}
;
la.ConfigContext = vs;
la.SizeContext = $g;
la.config = b8;
la.useConfig = UI;
Object.defineProperty(la, "SizeContext", {
    get: ()=>$g
});
const Yo = ["xxl", "xl", "lg", "md", "sm", "xs"]
  , w8 = e=>({
    xs: `(max-width: ${e.screenXSMax}px)`,
    sm: `(min-width: ${e.screenSM}px)`,
    md: `(min-width: ${e.screenMD}px)`,
    lg: `(min-width: ${e.screenLG}px)`,
    xl: `(min-width: ${e.screenXL}px)`,
    xxl: `(min-width: ${e.screenXXL}px)`
})
  , _8 = e=>{
    const t = e
      , n = [].concat(Yo).reverse();
    return n.forEach((r,i)=>{
        const s = r.toUpperCase()
          , o = `screen${s}Min`
          , a = `screen${s}`;
        if (!(t[o] <= t[a]))
            throw new Error(`${o}<=${a} fails : !(${t[o]}<=${t[a]})`);
        if (i < n.length - 1) {
            const l = `screen${s}Max`;
            if (!(t[a] <= t[l]))
                throw new Error(`${a}<=${l} fails : !(${t[a]}<=${t[l]})`);
            const u = `screen${n[i + 1].toUpperCase()}Min`;
            if (!(t[l] <= t[u]))
                throw new Error(`${l}<=${u} fails : !(${t[l]}<=${t[u]})`)
        }
    }
    ),
    e
}
;
function k8() {
    const [,e] = vu()
      , t = w8(_8(e));
    return de.useMemo(()=>{
        const n = new Map;
        let r = -1
          , i = {};
        return {
            matchHandlers: {},
            dispatch(s) {
                return i = s,
                n.forEach(o=>o(i)),
                n.size >= 1
            },
            subscribe(s) {
                return n.size || this.register(),
                r += 1,
                n.set(r, s),
                s(i),
                r
            },
            unsubscribe(s) {
                n.delete(s),
                n.size || this.unregister()
            },
            unregister() {
                Object.keys(t).forEach(s=>{
                    const o = t[s]
                      , a = this.matchHandlers[o];
                    a == null || a.mql.removeListener(a == null ? void 0 : a.listener)
                }
                ),
                n.clear()
            },
            register() {
                Object.keys(t).forEach(s=>{
                    const o = t[s]
                      , a = c=>{
                        let {matches: u} = c;
                        this.dispatch(Object.assign(Object.assign({}, i), {
                            [s]: u
                        }))
                    }
                      , l = window.matchMedia(o);
                    l.addListener(a),
                    this.matchHandlers[o] = {
                        mql: l,
                        listener: a
                    },
                    a(l)
                }
                )
            },
            responsiveMap: t
        }
    }
    , [e])
}
const C8 = x.createContext({})
  , Ek = C8
  , P8 = e=>{
    const {componentCls: t} = e;
    return {
        [t]: {
            display: "flex",
            flexFlow: "row wrap",
            minWidth: 0,
            "&::before, &::after": {
                display: "flex"
            },
            "&-no-wrap": {
                flexWrap: "nowrap"
            },
            "&-start": {
                justifyContent: "flex-start"
            },
            "&-center": {
                justifyContent: "center"
            },
            "&-end": {
                justifyContent: "flex-end"
            },
            "&-space-between": {
                justifyContent: "space-between"
            },
            "&-space-around": {
                justifyContent: "space-around"
            },
            "&-space-evenly": {
                justifyContent: "space-evenly"
            },
            "&-top": {
                alignItems: "flex-start"
            },
            "&-middle": {
                alignItems: "center"
            },
            "&-bottom": {
                alignItems: "flex-end"
            }
        }
    }
}
  , j8 = e=>{
    const {componentCls: t} = e;
    return {
        [t]: {
            position: "relative",
            maxWidth: "100%",
            minHeight: 1
        }
    }
}
  , E8 = (e,t)=>{
    const {componentCls: n, gridColumns: r} = e
      , i = {};
    for (let s = r; s >= 0; s--)
        s === 0 ? (i[`${n}${t}-${s}`] = {
            display: "none"
        },
        i[`${n}-push-${s}`] = {
            insetInlineStart: "auto"
        },
        i[`${n}-pull-${s}`] = {
            insetInlineEnd: "auto"
        },
        i[`${n}${t}-push-${s}`] = {
            insetInlineStart: "auto"
        },
        i[`${n}${t}-pull-${s}`] = {
            insetInlineEnd: "auto"
        },
        i[`${n}${t}-offset-${s}`] = {
            marginInlineStart: 0
        },
        i[`${n}${t}-order-${s}`] = {
            order: 0
        }) : (i[`${n}${t}-${s}`] = [{
            "--ant-display": "block",
            display: "block"
        }, {
            display: "var(--ant-display)",
            flex: `0 0 ${s / r * 100}%`,
            maxWidth: `${s / r * 100}%`
        }],
        i[`${n}${t}-push-${s}`] = {
            insetInlineStart: `${s / r * 100}%`
        },
        i[`${n}${t}-pull-${s}`] = {
            insetInlineEnd: `${s / r * 100}%`
        },
        i[`${n}${t}-offset-${s}`] = {
            marginInlineStart: `${s / r * 100}%`
        },
        i[`${n}${t}-order-${s}`] = {
            order: s
        });
    return i
}
  , Qh = (e,t)=>E8(e, t)
  , M8 = (e,t,n)=>({
    [`@media (min-width: ${t}px)`]: Object.assign({}, Qh(e, n))
})
  , T8 = mk("Grid", e=>[P8(e)])
  , O8 = mk("Grid", e=>{
    const t = Hh(e, {
        gridColumns: 24
    })
      , n = {
        "-sm": t.screenSMMin,
        "-md": t.screenMDMin,
        "-lg": t.screenLGMin,
        "-xl": t.screenXLMin,
        "-xxl": t.screenXXLMin
    };
    return [j8(t), Qh(t, ""), Qh(t, "-xs"), Object.keys(n).map(r=>M8(t, n[r], r)).reduce((r,i)=>Object.assign(Object.assign({}, r), i), {})]
}
);
var A8 = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
;
function L8(e) {
    return typeof e == "number" ? `${e} ${e} auto` : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e) ? `0 0 ${e}` : e
}
const D8 = ["xs", "sm", "md", "lg", "xl", "xxl"]
  , R8 = x.forwardRef((e,t)=>{
    const {getPrefixCls: n, direction: r} = x.useContext(vs)
      , {gutter: i, wrap: s} = x.useContext(Ek)
      , {prefixCls: o, span: a, order: l, offset: c, push: u, pull: d, className: f, children: p, flex: g, style: v} = e
      , S = A8(e, ["prefixCls", "span", "order", "offset", "push", "pull", "className", "children", "flex", "style"])
      , y = n("col", o)
      , [m,b] = O8(y);
    let w = {};
    D8.forEach(_=>{
        let C = {};
        const j = e[_];
        typeof j == "number" ? C.span = j : typeof j == "object" && (C = j || {}),
        delete S[_],
        w = Object.assign(Object.assign({}, w), {
            [`${y}-${_}-${C.span}`]: C.span !== void 0,
            [`${y}-${_}-order-${C.order}`]: C.order || C.order === 0,
            [`${y}-${_}-offset-${C.offset}`]: C.offset || C.offset === 0,
            [`${y}-${_}-push-${C.push}`]: C.push || C.push === 0,
            [`${y}-${_}-pull-${C.pull}`]: C.pull || C.pull === 0,
            [`${y}-${_}-flex-${C.flex}`]: C.flex || C.flex === "auto",
            [`${y}-rtl`]: r === "rtl"
        })
    }
    );
    const k = Og(y, {
        [`${y}-${a}`]: a !== void 0,
        [`${y}-order-${l}`]: l,
        [`${y}-offset-${c}`]: c,
        [`${y}-push-${u}`]: u,
        [`${y}-pull-${d}`]: d
    }, f, w, b)
      , P = {};
    if (i && i[0] > 0) {
        const _ = i[0] / 2;
        P.paddingLeft = _,
        P.paddingRight = _
    }
    return g && (P.flex = L8(g),
    s === !1 && !P.minWidth && (P.minWidth = 0)),
    m(x.createElement("div", Object.assign({}, S, {
        style: Object.assign(Object.assign({}, P), v),
        className: k,
        ref: t
    }), p))
}
)
  , xi = R8;
var F8 = globalThis && globalThis.__rest || function(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
    return n
}
;
function kx(e, t) {
    const [n,r] = x.useState(typeof e == "string" ? e : "")
      , i = ()=>{
        if (typeof e == "string" && r(e),
        typeof e == "object")
            for (let s = 0; s < Yo.length; s++) {
                const o = Yo[s];
                if (!t[o])
                    continue;
                const a = e[o];
                if (a !== void 0) {
                    r(a);
                    return
                }
            }
    }
    ;
    return x.useEffect(()=>{
        i()
    }
    , [JSON.stringify(e), t]),
    n
}
const I8 = x.forwardRef((e,t)=>{
    const {prefixCls: n, justify: r, align: i, className: s, style: o, children: a, gutter: l=0, wrap: c} = e
      , u = F8(e, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"])
      , {getPrefixCls: d, direction: f} = x.useContext(vs)
      , [p,g] = x.useState({
        xs: !0,
        sm: !0,
        md: !0,
        lg: !0,
        xl: !0,
        xxl: !0
    })
      , [v,S] = x.useState({
        xs: !1,
        sm: !1,
        md: !1,
        lg: !1,
        xl: !1,
        xxl: !1
    })
      , y = kx(i, v)
      , m = kx(r, v)
      , b = x.useRef(l)
      , w = k8();
    x.useEffect(()=>{
        const V = w.subscribe(W=>{
            S(W);
            const E = b.current || 0;
            (!Array.isArray(E) && typeof E == "object" || Array.isArray(E) && (typeof E[0] == "object" || typeof E[1] == "object")) && g(W)
        }
        );
        return ()=>w.unsubscribe(V)
    }
    , []);
    const k = ()=>{
        const V = [void 0, void 0];
        return (Array.isArray(l) ? l : [l, void 0]).forEach((E,R)=>{
            if (typeof E == "object")
                for (let D = 0; D < Yo.length; D++) {
                    const I = Yo[D];
                    if (p[I] && E[I] !== void 0) {
                        V[R] = E[I];
                        break
                    }
                }
            else
                V[R] = E
        }
        ),
        V
    }
      , P = d("row", n)
      , [_,C] = T8(P)
      , j = k()
      , M = Og(P, {
        [`${P}-no-wrap`]: c === !1,
        [`${P}-${m}`]: m,
        [`${P}-${y}`]: y,
        [`${P}-rtl`]: f === "rtl"
    }, s, C)
      , O = {}
      , A = j[0] != null && j[0] > 0 ? j[0] / -2 : void 0;
    A && (O.marginLeft = A,
    O.marginRight = A),
    [,O.rowGap] = j;
    const [N,B] = j
      , L = x.useMemo(()=>({
        gutter: [N, B],
        wrap: c
    }), [N, B, c]);
    return _(x.createElement(Ek.Provider, {
        value: L
    }, x.createElement("div", Object.assign({}, u, {
        className: M,
        style: Object.assign(Object.assign({}, O), o),
        ref: t
    }), a)))
}
)
  , N8 = I8;
const V8 = "/assets/edit-8b0e5e62.svg"
  , B8 = "/assets/user-photo-bigger-e16b0f36.png";
const yu = ({name: e, paddingPx: t, styleProp: n})=>{
    const r = {
        ...n,
        padding: t
    };
    return h.jsx(De.button, {
        "data-primary-btn": !0,
        whileHover: {
            scale: 1
        },
        whileTap: {
            scale: 1
        },
        style: r,
        children: e
    })
}
  , z8 = ()=>h.jsxs("section", {
    className: "my-account",
    children: [h.jsxs("div", {
        className: "my-account__title",
        children: [h.jsx("h2", {
            children: "My Account"
        }), h.jsx("img", {
            src: V8,
            alt: "edit"
        })]
    }), h.jsxs("div", {
        className: "my-account__descr",
        children: [h.jsxs("div", {
            children: [h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Name"
                }), h.jsx("h3", {
                    children: "Nathan Hill"
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Location"
                }), h.jsx("h3", {
                    children: "New York"
                })]
            }), h.jsxs("div", {
                children: [h.jsx("h3", {
                    children: "Date of Birth"
                }), h.jsx("h3", {
                    children: "05.01.1993"
                })]
            })]
        }), h.jsxs("div", {
            children: [h.jsx("img", {
                src: B8,
                alt: "photo"
            }), h.jsx(yu, {
                name: "More Info",
                paddingPx: "7px 30px"
            })]
        })]
    })]
});
const Vs = ({name: e, day: t, imbBg: n, percent: r, ImgClass: i, parentClass: s})=>h.jsxs("section", {
    className: `try-now ${s}`,
    children: [h.jsxs("div", {
        className: "try-now__title",
        children: [h.jsx("h2", {
            children: e
        }), h.jsxs("h3", {
            children: [t, " day left"]
        })]
    }), h.jsxs("div", {
        className: "try-now__content",
        children: [h.jsx("img", {
            src: n,
            alt: e,
            className: i
        }), h.jsxs("h2", {
            className: "gradient-1",
            children: [r, "% OFF"]
        }), h.jsx(yu, {
            name: "TRY NOW",
            paddingPx: "8px 30px",
            styleProp: {
                fontWeight: "700"
            }
        })]
    })]
})
  , $8 = "/assets/cyberMonday-e97d5157.png"
  , Cx = "/assets/forNissan-f30d995e.svg"
  , H8 = "/assets/GreenWeek-809b1cc2.svg"
  , W8 = "/assets/ForTesla-7038c7cd.svg";
const U8 = "/assets/wantMore-9ba72473.svg"
  , G8 = ()=>h.jsxs("section", {
    className: "card-more",
    children: [h.jsx("img", {
        src: U8,
        alt: "bg"
    }), h.jsx("h2", {
        children: "Do you want to see more ?"
    }), h.jsx(yu, {
        name: "More",
        paddingPx: "8px 30px",
        styleProp: {
            fontWeight: "700"
        }
    })]
});
const Y8 = ({data: e, isActive: t, hendleActiveCard: n})=>{
    const {name: r, twelveToEightAM: i, eightToTwelveAM: s, twelveToSixPM: o, sessionFee: a, reservation: l, rete: c} = e;
    return h.jsxs("section", {
        className: "cards-amount",
        children: [h.jsx("div", {
            className: "cards-amount__title",
            children: h.jsx("h2", {
                children: r
            })
        }), h.jsxs("div", {
            className: "cards-amount__content-time",
            children: [h.jsx("h3", {
                "data-circle": "blue",
                children: "12 AM - 8 AM"
            }), h.jsxs("h3", {
                children: ["$", i, " ", h.jsx("span", {
                    children: "per kWh"
                })]
            }), h.jsx("h3", {
                "data-circle": "green",
                children: "8 AM - 12 AM"
            }), h.jsxs("h3", {
                children: ["$", s, " ", h.jsx("span", {
                    children: "per kWh"
                })]
            }), h.jsx("h3", {
                "data-circle": "yellow",
                children: "12 PM - 6 PM"
            }), h.jsxs("h3", {
                children: ["$", o, " ", h.jsx("span", {
                    children: "per kWh"
                })]
            })]
        }), h.jsxs("div", {
            className: "cards-amount__content-amount",
            children: [h.jsx("h3", {
                children: "Session Fee"
            }), h.jsxs("h3", {
                children: ["$", a.toFixed(2)]
            }), h.jsx("h3", {
                children: "Reservation"
            }), h.jsxs("h3", {
                children: ["$", l.toFixed(2)]
            }), h.jsx("h3", {
                children: "Rate"
            }), h.jsxs("h3", {
                children: ["$", c.toFixed(2), " ", h.jsx("span", {
                    children: "per month"
                })]
            })]
        }), h.jsx("div", {
            className: "cards-amount__btn",
            onClick: ()=>n(r),
            children: t === r ? h.jsx("div", {
                children: h.jsx("h3", {
                    children: "Current Plan"
                })
            }) : h.jsx(yu, {
                name: "Get started",
                paddingPx: "7px 0",
                styleProp: {
                    width: "100%"
                }
            })
        })]
    })
}
  , X8 = [{
    name: "Pay As You Go",
    twelveToEightAM: .37,
    eightToTwelveAM: .47,
    twelveToSixPM: .57,
    sessionFee: .99,
    reservation: 2.99,
    rete: 0
}, {
    name: "EV Hub Basic",
    twelveToEightAM: .37,
    eightToTwelveAM: .47,
    twelveToSixPM: .57,
    sessionFee: .99,
    reservation: 2.99,
    rete: .99
}, {
    name: "EV Hub Plus",
    twelveToEightAM: .31,
    eightToTwelveAM: .39,
    twelveToSixPM: .47,
    sessionFee: 0,
    reservation: 0,
    rete: 6.99
}, {
    name: "EV Hub Pro",
    twelveToEightAM: .24,
    eightToTwelveAM: .32,
    twelveToSixPM: .38,
    sessionFee: 0,
    reservation: 0,
    rete: 12.99
}];
const K8 = ()=>h.jsxs("section", {
    className: "try",
    children: [h.jsxs("div", {
        children: [h.jsxs("p", {
            children: ["Charge only once a month and want to prepay? Try the prepaid plan to add a ", h.jsx("span", {
                className: "gradient-1",
                children: "$4.99"
            }), " charging credit to your account each month."]
        }), h.jsxs("p", {
            children: ["Support: ", h.jsx("a", {
                href: "mailto:help@evhub.com",
                children: "help@evhub.com"
            })]
        })]
    }), h.jsx("div", {
        children: h.jsx(De.button, {
            whileHover: {
                scale: 1
            },
            whileTap: {
                scale: 1
            },
            children: "Try"
        })
    })]
})
  , Q8 = ()=>{
    const [e,t] = de.useState("Pay As You Go")
      , n = r=>{
        t(r)
    }
    ;
    return h.jsx("main", {
        children: h.jsxs(N8, {
            gutter: [32, 32],
            children: [h.jsx(xi, {
                className: "gutter-row",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6,
                children: h.jsx(z8, {})
            }), h.jsxs(xi, {
                className: "gutter-row",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6,
                children: [h.jsx(Vs, {
                    name: "Cyber Monday",
                    day: 1,
                    percent: 50,
                    imbBg: $8,
                    ImgClass: "left"
                }), h.jsx(Vs, {
                    name: "For Nissan",
                    day: 1,
                    percent: 10,
                    imbBg: Cx,
                    ImgClass: "center",
                    parentClass: "mt-30px"
                })]
            }), h.jsxs(xi, {
                className: "gutter-row",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6,
                children: [h.jsx(Vs, {
                    name: "Green Week",
                    day: 7,
                    percent: 25,
                    imbBg: H8,
                    ImgClass: "center"
                }), h.jsx(Vs, {
                    name: "Green Month",
                    day: 30,
                    percent: 10,
                    imbBg: Cx,
                    ImgClass: "center",
                    parentClass: "mt-30px"
                })]
            }), h.jsxs(xi, {
                className: "gutter-row",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6,
                children: [h.jsx(Vs, {
                    name: "For Tesla",
                    day: 7,
                    percent: 10,
                    imbBg: W8,
                    ImgClass: "center"
                }), h.jsx(G8, {})]
            }), X8.map(r=>h.jsx(xi, {
                className: "gutter-row",
                xs: 24,
                sm: 24,
                md: 12,
                lg: 12,
                xl: 12,
                xxl: 6,
                children: h.jsx(Y8, {
                    data: r,
                    isActive: e,
                    hendleActiveCard: n
                })
            }, r.name)), h.jsx(xi, {
                xs: 24,
                children: h.jsx(K8, {})
            })]
        })
    })
}
  , Z8 = ()=>h.jsx(SE, {
    children: h.jsx(mE, {
        children: h.jsxs(Rr, {
            path: "/",
            element: h.jsx(aA, {}),
            children: [h.jsx(Rr, {
                index: !0,
                element: h.jsx(SR, {})
            }), h.jsx(Rr, {
                path: "stations",
                element: h.jsx(QR, {})
            }), h.jsx(Rr, {
                path: "my-trips",
                element: h.jsx(c6, {})
            }), h.jsx(Rr, {
                path: "account",
                element: h.jsx(Q8, {})
            }), h.jsx(Rr, {
                path: "*",
                element: h.jsx(ZR, {})
            })]
        })
    })
})
  , q8 = ()=>h.jsx(Z8, {});
Rd.createRoot(document.getElementById("root")).render(h.jsx(de.StrictMode, {
    children: h.jsx(q8, {})
}));