var $h = e => {
    throw TypeError(e)
}
;
var rc = (e, t, n) => t.has(e) || $h("Cannot " + n);
var N = (e, t, n) => (rc(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , ee = (e, t, n) => t.has(e) ? $h("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , H = (e, t, n, r) => (rc(e, t, "write to private field"),
r ? r.call(e, n) : t.set(e, n),
n)
  , _e = (e, t, n) => (rc(e, t, "access private method"),
n);
var Oo = (e, t, n, r) => ({
    set _(i) {
        H(e, t, i, n)
    },
    get _() {
        return N(e, t, r)
    }
});
function Ab(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
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
    new MutationObserver(i => {
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
function uy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var dy = {
    exports: {}
}
  , yl = {}
  , fy = {
    exports: {}
}
  , Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo = Symbol.for("react.element")
  , Rb = Symbol.for("react.portal")
  , Mb = Symbol.for("react.fragment")
  , Db = Symbol.for("react.strict_mode")
  , Lb = Symbol.for("react.profiler")
  , Ob = Symbol.for("react.provider")
  , Ib = Symbol.for("react.context")
  , Fb = Symbol.for("react.forward_ref")
  , _b = Symbol.for("react.suspense")
  , Vb = Symbol.for("react.memo")
  , zb = Symbol.for("react.lazy")
  , Uh = Symbol.iterator;
function Bb(e) {
    return e === null || typeof e != "object" ? null : (e = Uh && e[Uh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var hy = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , py = Object.assign
  , my = {};
function Qi(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = my,
    this.updater = n || hy
}
Qi.prototype.isReactComponent = {};
Qi.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Qi.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function gy() {}
gy.prototype = Qi.prototype;
function Ld(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = my,
    this.updater = n || hy
}
var Od = Ld.prototype = new gy;
Od.constructor = Ld;
py(Od, Qi.prototype);
Od.isPureReactComponent = !0;
var Wh = Array.isArray
  , yy = Object.prototype.hasOwnProperty
  , Id = {
    current: null
}
  , vy = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function xy(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            yy.call(t, r) && !vy.hasOwnProperty(r) && (i[r] = t[r]);
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
        $$typeof: xo,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Id.current
    }
}
function $b(e, t) {
    return {
        $$typeof: xo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Fd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xo
}
function Ub(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Hh = /\/+/g;
function ic(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Ub("" + e.key) : t.toString(36)
}
function ca(e, t, n, r, i) {
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
            case xo:
            case Rb:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + ic(o, 0) : r,
        Wh(i) ? (n = "",
        e != null && (n = e.replace(Hh, "$&/") + "/"),
        ca(i, t, n, "", function(c) {
            return c
        })) : i != null && (Fd(i) && (i = $b(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Hh, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Wh(e))
        for (var a = 0; a < e.length; a++) {
            s = e[a];
            var l = r + ic(s, a);
            o += ca(s, t, n, l, i)
        }
    else if (l = Bb(e),
    typeof l == "function")
        for (e = l.call(e),
        a = 0; !(s = e.next()).done; )
            s = s.value,
            l = r + ic(s, a++),
            o += ca(s, t, n, l, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function Io(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return ca(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function Wb(e) {
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
var Xe = {
    current: null
}
  , ua = {
    transition: null
}
  , Hb = {
    ReactCurrentDispatcher: Xe,
    ReactCurrentBatchConfig: ua,
    ReactCurrentOwner: Id
};
function wy() {
    throw Error("act(...) is not supported in production builds of React.")
}
Q.Children = {
    map: Io,
    forEach: function(e, t, n) {
        Io(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Io(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return Io(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Fd(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
Q.Component = Qi;
Q.Fragment = Mb;
Q.Profiler = Lb;
Q.PureComponent = Ld;
Q.StrictMode = Db;
Q.Suspense = _b;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hb;
Q.act = wy;
Q.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = py({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = Id.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var a = e.type.defaultProps;
        for (l in t)
            yy.call(t, l) && !vy.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l])
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
        $$typeof: xo,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
Q.createContext = function(e) {
    return e = {
        $$typeof: Ib,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Ob,
        _context: e
    },
    e.Consumer = e
}
;
Q.createElement = xy;
Q.createFactory = function(e) {
    var t = xy.bind(null, e);
    return t.type = e,
    t
}
;
Q.createRef = function() {
    return {
        current: null
    }
}
;
Q.forwardRef = function(e) {
    return {
        $$typeof: Fb,
        render: e
    }
}
;
Q.isValidElement = Fd;
Q.lazy = function(e) {
    return {
        $$typeof: zb,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Wb
    }
}
;
Q.memo = function(e, t) {
    return {
        $$typeof: Vb,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
Q.startTransition = function(e) {
    var t = ua.transition;
    ua.transition = {};
    try {
        e()
    } finally {
        ua.transition = t
    }
}
;
Q.unstable_act = wy;
Q.useCallback = function(e, t) {
    return Xe.current.useCallback(e, t)
}
;
Q.useContext = function(e) {
    return Xe.current.useContext(e)
}
;
Q.useDebugValue = function() {}
;
Q.useDeferredValue = function(e) {
    return Xe.current.useDeferredValue(e)
}
;
Q.useEffect = function(e, t) {
    return Xe.current.useEffect(e, t)
}
;
Q.useId = function() {
    return Xe.current.useId()
}
;
Q.useImperativeHandle = function(e, t, n) {
    return Xe.current.useImperativeHandle(e, t, n)
}
;
Q.useInsertionEffect = function(e, t) {
    return Xe.current.useInsertionEffect(e, t)
}
;
Q.useLayoutEffect = function(e, t) {
    return Xe.current.useLayoutEffect(e, t)
}
;
Q.useMemo = function(e, t) {
    return Xe.current.useMemo(e, t)
}
;
Q.useReducer = function(e, t, n) {
    return Xe.current.useReducer(e, t, n)
}
;
Q.useRef = function(e) {
    return Xe.current.useRef(e)
}
;
Q.useState = function(e) {
    return Xe.current.useState(e)
}
;
Q.useSyncExternalStore = function(e, t, n) {
    return Xe.current.useSyncExternalStore(e, t, n)
}
;
Q.useTransition = function() {
    return Xe.current.useTransition()
}
;
Q.version = "18.3.1";
fy.exports = Q;
var b = fy.exports;
const M = uy(b)
  , _d = Ab({
    __proto__: null,
    default: M
}, [b]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kb = b
  , Gb = Symbol.for("react.element")
  , qb = Symbol.for("react.fragment")
  , Yb = Object.prototype.hasOwnProperty
  , Qb = Kb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Xb = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function by(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Yb.call(t, r) && !Xb.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Gb,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Qb.current
    }
}
yl.Fragment = qb;
yl.jsx = by;
yl.jsxs = by;
dy.exports = yl;
var d = dy.exports
  , Sy = {
    exports: {}
}
  , ht = {}
  , Cy = {
    exports: {}
}
  , Ty = {};
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
    function t(P, j) {
        var O = P.length;
        P.push(j);
        e: for (; 0 < O; ) {
            var U = O - 1 >>> 1
              , B = P[U];
            if (0 < i(B, j))
                P[U] = j,
                P[O] = B,
                O = U;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var j = P[0]
          , O = P.pop();
        if (O !== j) {
            P[0] = O;
            e: for (var U = 0, B = P.length, Y = B >>> 1; U < Y; ) {
                var X = 2 * (U + 1) - 1
                  , Se = P[X]
                  , Fe = X + 1
                  , te = P[Fe];
                if (0 > i(Se, O))
                    Fe < B && 0 > i(te, Se) ? (P[U] = te,
                    P[Fe] = O,
                    U = Fe) : (P[U] = Se,
                    P[X] = O,
                    U = X);
                else if (Fe < B && 0 > i(te, O))
                    P[U] = te,
                    P[Fe] = O,
                    U = Fe;
                else
                    break e
            }
        }
        return j
    }
    function i(P, j) {
        var O = P.sortIndex - j.sortIndex;
        return O !== 0 ? O : P.id - j.id
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
      , f = null
      , h = 3
      , p = !1
      , x = !1
      , y = !1
      , w = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var j = n(c); j !== null; ) {
            if (j.callback === null)
                r(c);
            else if (j.startTime <= P)
                r(c),
                j.sortIndex = j.expirationTime,
                t(l, j);
            else
                break;
            j = n(c)
        }
    }
    function S(P) {
        if (y = !1,
        v(P),
        !x)
            if (n(l) !== null)
                x = !0,
                $(C);
            else {
                var j = n(c);
                j !== null && V(S, j.startTime - P)
            }
    }
    function C(P, j) {
        x = !1,
        y && (y = !1,
        g(k),
        k = -1),
        p = !0;
        var O = h;
        try {
            for (v(j),
            f = n(l); f !== null && (!(f.expirationTime > j) || P && !z()); ) {
                var U = f.callback;
                if (typeof U == "function") {
                    f.callback = null,
                    h = f.priorityLevel;
                    var B = U(f.expirationTime <= j);
                    j = e.unstable_now(),
                    typeof B == "function" ? f.callback = B : f === n(l) && r(l),
                    v(j)
                } else
                    r(l);
                f = n(l)
            }
            if (f !== null)
                var Y = !0;
            else {
                var X = n(c);
                X !== null && V(S, X.startTime - j),
                Y = !1
            }
            return Y
        } finally {
            f = null,
            h = O,
            p = !1
        }
    }
    var T = !1
      , E = null
      , k = -1
      , A = 5
      , R = -1;
    function z() {
        return !(e.unstable_now() - R < A)
    }
    function I() {
        if (E !== null) {
            var P = e.unstable_now();
            R = P;
            var j = !0;
            try {
                j = E(!0, P)
            } finally {
                j ? K() : (T = !1,
                E = null)
            }
        } else
            T = !1
    }
    var K;
    if (typeof m == "function")
        K = function() {
            m(I)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , q = L.port2;
        L.port1.onmessage = I,
        K = function() {
            q.postMessage(null)
        }
    } else
        K = function() {
            w(I, 0)
        }
        ;
    function $(P) {
        E = P,
        T || (T = !0,
        K())
    }
    function V(P, j) {
        k = w(function() {
            P(e.unstable_now())
        }, j)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || p || (x = !0,
        $(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return h
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    }
    ,
    e.unstable_next = function(P) {
        switch (h) {
        case 1:
        case 2:
        case 3:
            var j = 3;
            break;
        default:
            j = h
        }
        var O = h;
        h = j;
        try {
            return P()
        } finally {
            h = O
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, j) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var O = h;
        h = P;
        try {
            return j()
        } finally {
            h = O
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, j, O) {
        var U = e.unstable_now();
        switch (typeof O == "object" && O !== null ? (O = O.delay,
        O = typeof O == "number" && 0 < O ? U + O : U) : O = U,
        P) {
        case 1:
            var B = -1;
            break;
        case 2:
            B = 250;
            break;
        case 5:
            B = 1073741823;
            break;
        case 4:
            B = 1e4;
            break;
        default:
            B = 5e3
        }
        return B = O + B,
        P = {
            id: u++,
            callback: j,
            priorityLevel: P,
            startTime: O,
            expirationTime: B,
            sortIndex: -1
        },
        O > U ? (P.sortIndex = O,
        t(c, P),
        n(l) === null && P === n(c) && (y ? (g(k),
        k = -1) : y = !0,
        V(S, O - U))) : (P.sortIndex = B,
        t(l, P),
        x || p || (x = !0,
        $(C))),
        P
    }
    ,
    e.unstable_shouldYield = z,
    e.unstable_wrapCallback = function(P) {
        var j = h;
        return function() {
            var O = h;
            h = j;
            try {
                return P.apply(this, arguments)
            } finally {
                h = O
            }
        }
    }
}
)(Ty);
Cy.exports = Ty;
var Zb = Cy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jb = b
  , dt = Zb;
function D(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Ey = new Set
  , Bs = {};
function Kr(e, t) {
    Vi(e, t),
    Vi(e + "Capture", t)
}
function Vi(e, t) {
    for (Bs[e] = t,
    e = 0; e < t.length; e++)
        Ey.add(t[e])
}
var vn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , tu = Object.prototype.hasOwnProperty
  , eS = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Kh = {}
  , Gh = {};
function tS(e) {
    return tu.call(Gh, e) ? !0 : tu.call(Kh, e) ? !1 : eS.test(e) ? Gh[e] = !0 : (Kh[e] = !0,
    !1)
}
function nS(e, t, n, r) {
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
function rS(e, t, n, r) {
    if (t === null || typeof t > "u" || nS(e, t, n, r))
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
function Ze(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Ie[e] = new Ze(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Ie[t] = new Ze(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Ie[e] = new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Ie[e] = new Ze(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Ie[e] = new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Ie[e] = new Ze(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Ie[e] = new Ze(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Ie[e] = new Ze(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Ie[e] = new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Vd = /[\-:]([a-z])/g;
function zd(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Vd, zd);
    Ie[t] = new Ze(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Vd, zd);
    Ie[t] = new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Vd, zd);
    Ie[t] = new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Ie[e] = new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Ie.xlinkHref = new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Ie[e] = new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function Bd(e, t, n, r) {
    var i = Ie.hasOwnProperty(t) ? Ie[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (rS(t, n, i, r) && (n = null),
    r || i === null ? tS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var En = Jb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Fo = Symbol.for("react.element")
  , si = Symbol.for("react.portal")
  , oi = Symbol.for("react.fragment")
  , $d = Symbol.for("react.strict_mode")
  , nu = Symbol.for("react.profiler")
  , ky = Symbol.for("react.provider")
  , Py = Symbol.for("react.context")
  , Ud = Symbol.for("react.forward_ref")
  , ru = Symbol.for("react.suspense")
  , iu = Symbol.for("react.suspense_list")
  , Wd = Symbol.for("react.memo")
  , _n = Symbol.for("react.lazy")
  , Ny = Symbol.for("react.offscreen")
  , qh = Symbol.iterator;
function us(e) {
    return e === null || typeof e != "object" ? null : (e = qh && e[qh] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ye = Object.assign, sc;
function bs(e) {
    if (sc === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            sc = t && t[1] || ""
        }
    return `
` + sc + e
}
var oc = !1;
function ac(e, t) {
    if (!e || oc)
        return "";
    oc = !0;
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
        oc = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? bs(e) : ""
}
function iS(e) {
    switch (e.tag) {
    case 5:
        return bs(e.type);
    case 16:
        return bs("Lazy");
    case 13:
        return bs("Suspense");
    case 19:
        return bs("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = ac(e.type, !1),
        e;
    case 11:
        return e = ac(e.type.render, !1),
        e;
    case 1:
        return e = ac(e.type, !0),
        e;
    default:
        return ""
    }
}
function su(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case oi:
        return "Fragment";
    case si:
        return "Portal";
    case nu:
        return "Profiler";
    case $d:
        return "StrictMode";
    case ru:
        return "Suspense";
    case iu:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Py:
            return (e.displayName || "Context") + ".Consumer";
        case ky:
            return (e._context.displayName || "Context") + ".Provider";
        case Ud:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Wd:
            return t = e.displayName || null,
            t !== null ? t : su(e.type) || "Memo";
        case _n:
            t = e._payload,
            e = e._init;
            try {
                return su(e(t))
            } catch {}
        }
    return null
}
function sS(e) {
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
        return su(t);
    case 8:
        return t === $d ? "StrictMode" : "Mode";
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
function or(e) {
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
function jy(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function oS(e) {
    var t = jy(e) ? "checked" : "value"
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
function _o(e) {
    e._valueTracker || (e._valueTracker = oS(e))
}
function Ay(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = jy(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Aa(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ou(e, t) {
    var n = t.checked;
    return ye({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Yh(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = or(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Ry(e, t) {
    t = t.checked,
    t != null && Bd(e, "checked", t, !1)
}
function au(e, t) {
    Ry(e, t);
    var n = or(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? lu(e, t.type, n) : t.hasOwnProperty("defaultValue") && lu(e, t.type, or(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Qh(e, t, n) {
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
function lu(e, t, n) {
    (t !== "number" || Aa(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ss = Array.isArray;
function Si(e, t, n, r) {
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
        for (n = "" + or(n),
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
function cu(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(D(91));
    return ye({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Xh(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(D(92));
            if (Ss(n)) {
                if (1 < n.length)
                    throw Error(D(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: or(n)
    }
}
function My(e, t) {
    var n = or(t.value)
      , r = or(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Zh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Dy(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function uu(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Dy(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Vo, Ly = function(e) {
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
        for (Vo = Vo || document.createElement("div"),
        Vo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Vo.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function $s(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Ps = {
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
  , aS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ps).forEach(function(e) {
    aS.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Ps[t] = Ps[e]
    })
});
function Oy(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ps.hasOwnProperty(e) && Ps[e] ? ("" + t).trim() : t + "px"
}
function Iy(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Oy(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var lS = ye({
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
function du(e, t) {
    if (t) {
        if (lS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(D(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(D(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(D(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(D(62))
    }
}
function fu(e, t) {
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
var hu = null;
function Hd(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var pu = null
  , Ci = null
  , Ti = null;
function Jh(e) {
    if (e = So(e)) {
        if (typeof pu != "function")
            throw Error(D(280));
        var t = e.stateNode;
        t && (t = Sl(t),
        pu(e.stateNode, e.type, t))
    }
}
function Fy(e) {
    Ci ? Ti ? Ti.push(e) : Ti = [e] : Ci = e
}
function _y() {
    if (Ci) {
        var e = Ci
          , t = Ti;
        if (Ti = Ci = null,
        Jh(e),
        t)
            for (e = 0; e < t.length; e++)
                Jh(t[e])
    }
}
function Vy(e, t) {
    return e(t)
}
function zy() {}
var lc = !1;
function By(e, t, n) {
    if (lc)
        return e(t, n);
    lc = !0;
    try {
        return Vy(e, t, n)
    } finally {
        lc = !1,
        (Ci !== null || Ti !== null) && (zy(),
        _y())
    }
}
function Us(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Sl(n);
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
        throw Error(D(231, t, typeof n));
    return n
}
var mu = !1;
if (vn)
    try {
        var ds = {};
        Object.defineProperty(ds, "passive", {
            get: function() {
                mu = !0
            }
        }),
        window.addEventListener("test", ds, ds),
        window.removeEventListener("test", ds, ds)
    } catch {
        mu = !1
    }
function cS(e, t, n, r, i, s, o, a, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var Ns = !1
  , Ra = null
  , Ma = !1
  , gu = null
  , uS = {
    onError: function(e) {
        Ns = !0,
        Ra = e
    }
};
function dS(e, t, n, r, i, s, o, a, l) {
    Ns = !1,
    Ra = null,
    cS.apply(uS, arguments)
}
function fS(e, t, n, r, i, s, o, a, l) {
    if (dS.apply(this, arguments),
    Ns) {
        if (Ns) {
            var c = Ra;
            Ns = !1,
            Ra = null
        } else
            throw Error(D(198));
        Ma || (Ma = !0,
        gu = c)
    }
}
function Gr(e) {
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
function $y(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function ep(e) {
    if (Gr(e) !== e)
        throw Error(D(188))
}
function hS(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Gr(e),
        t === null)
            throw Error(D(188));
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
                    return ep(i),
                    e;
                if (s === r)
                    return ep(i),
                    t;
                s = s.sibling
            }
            throw Error(D(188))
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
                    throw Error(D(189))
            }
        }
        if (n.alternate !== r)
            throw Error(D(190))
    }
    if (n.tag !== 3)
        throw Error(D(188));
    return n.stateNode.current === n ? e : t
}
function Uy(e) {
    return e = hS(e),
    e !== null ? Wy(e) : null
}
function Wy(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Wy(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Hy = dt.unstable_scheduleCallback
  , tp = dt.unstable_cancelCallback
  , pS = dt.unstable_shouldYield
  , mS = dt.unstable_requestPaint
  , we = dt.unstable_now
  , gS = dt.unstable_getCurrentPriorityLevel
  , Kd = dt.unstable_ImmediatePriority
  , Ky = dt.unstable_UserBlockingPriority
  , Da = dt.unstable_NormalPriority
  , yS = dt.unstable_LowPriority
  , Gy = dt.unstable_IdlePriority
  , vl = null
  , nn = null;
function vS(e) {
    if (nn && typeof nn.onCommitFiberRoot == "function")
        try {
            nn.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var $t = Math.clz32 ? Math.clz32 : bS
  , xS = Math.log
  , wS = Math.LN2;
function bS(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (xS(e) / wS | 0) | 0
}
var zo = 64
  , Bo = 4194304;
function Cs(e) {
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
function La(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var a = o & ~i;
        a !== 0 ? r = Cs(a) : (s &= o,
        s !== 0 && (r = Cs(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = Cs(o) : s !== 0 && (r = Cs(s));
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
            n = 31 - $t(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function SS(e, t) {
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
function CS(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - $t(s)
          , a = 1 << o
          , l = i[o];
        l === -1 ? (!(a & n) || a & r) && (i[o] = SS(a, t)) : l <= t && (e.expiredLanes |= a),
        s &= ~a
    }
}
function yu(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function qy() {
    var e = zo;
    return zo <<= 1,
    !(zo & 4194240) && (zo = 64),
    e
}
function cc(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function wo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - $t(t),
    e[t] = n
}
function TS(e, t) {
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
        var i = 31 - $t(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function Gd(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - $t(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var ne = 0;
function Yy(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Qy, qd, Xy, Zy, Jy, vu = !1, $o = [], Xn = null, Zn = null, Jn = null, Ws = new Map, Hs = new Map, zn = [], ES = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function np(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Xn = null;
        break;
    case "dragenter":
    case "dragleave":
        Zn = null;
        break;
    case "mouseover":
    case "mouseout":
        Jn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ws.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Hs.delete(t.pointerId)
    }
}
function fs(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = So(t),
    t !== null && qd(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function kS(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Xn = fs(Xn, e, t, n, r, i),
        !0;
    case "dragenter":
        return Zn = fs(Zn, e, t, n, r, i),
        !0;
    case "mouseover":
        return Jn = fs(Jn, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Ws.set(s, fs(Ws.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Hs.set(s, fs(Hs.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function ev(e) {
    var t = kr(e.target);
    if (t !== null) {
        var n = Gr(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = $y(n),
                t !== null) {
                    e.blockedOn = t,
                    Jy(e.priority, function() {
                        Xy(n)
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
function da(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = xu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            hu = r,
            n.target.dispatchEvent(r),
            hu = null
        } else
            return t = So(n),
            t !== null && qd(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function rp(e, t, n) {
    da(e) && n.delete(t)
}
function PS() {
    vu = !1,
    Xn !== null && da(Xn) && (Xn = null),
    Zn !== null && da(Zn) && (Zn = null),
    Jn !== null && da(Jn) && (Jn = null),
    Ws.forEach(rp),
    Hs.forEach(rp)
}
function hs(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    vu || (vu = !0,
    dt.unstable_scheduleCallback(dt.unstable_NormalPriority, PS)))
}
function Ks(e) {
    function t(i) {
        return hs(i, e)
    }
    if (0 < $o.length) {
        hs($o[0], e);
        for (var n = 1; n < $o.length; n++) {
            var r = $o[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Xn !== null && hs(Xn, e),
    Zn !== null && hs(Zn, e),
    Jn !== null && hs(Jn, e),
    Ws.forEach(t),
    Hs.forEach(t),
    n = 0; n < zn.length; n++)
        r = zn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < zn.length && (n = zn[0],
    n.blockedOn === null); )
        ev(n),
        n.blockedOn === null && zn.shift()
}
var Ei = En.ReactCurrentBatchConfig
  , Oa = !0;
function NS(e, t, n, r) {
    var i = ne
      , s = Ei.transition;
    Ei.transition = null;
    try {
        ne = 1,
        Yd(e, t, n, r)
    } finally {
        ne = i,
        Ei.transition = s
    }
}
function jS(e, t, n, r) {
    var i = ne
      , s = Ei.transition;
    Ei.transition = null;
    try {
        ne = 4,
        Yd(e, t, n, r)
    } finally {
        ne = i,
        Ei.transition = s
    }
}
function Yd(e, t, n, r) {
    if (Oa) {
        var i = xu(e, t, n, r);
        if (i === null)
            xc(e, t, r, Ia, n),
            np(e, r);
        else if (kS(i, e, t, n, r))
            r.stopPropagation();
        else if (np(e, r),
        t & 4 && -1 < ES.indexOf(e)) {
            for (; i !== null; ) {
                var s = So(i);
                if (s !== null && Qy(s),
                s = xu(e, t, n, r),
                s === null && xc(e, t, r, Ia, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            xc(e, t, r, null, n)
    }
}
var Ia = null;
function xu(e, t, n, r) {
    if (Ia = null,
    e = Hd(r),
    e = kr(e),
    e !== null)
        if (t = Gr(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = $y(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ia = e,
    null
}
function tv(e) {
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
        switch (gS()) {
        case Kd:
            return 1;
        case Ky:
            return 4;
        case Da:
        case yS:
            return 16;
        case Gy:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Gn = null
  , Qd = null
  , fa = null;
function nv() {
    if (fa)
        return fa;
    var e, t = Qd, n = t.length, r, i = "value"in Gn ? Gn.value : Gn.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return fa = i.slice(e, 1 < r ? 1 - r : void 0)
}
function ha(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Uo() {
    return !0
}
function ip() {
    return !1
}
function pt(e) {
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
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Uo : ip,
        this.isPropagationStopped = ip,
        this
    }
    return ye(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Uo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Uo)
        },
        persist: function() {},
        isPersistent: Uo
    }),
    t
}
var Xi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Xd = pt(Xi), bo = ye({}, Xi, {
    view: 0,
    detail: 0
}), AS = pt(bo), uc, dc, ps, xl = ye({}, bo, {
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
    getModifierState: Zd,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ps && (ps && e.type === "mousemove" ? (uc = e.screenX - ps.screenX,
        dc = e.screenY - ps.screenY) : dc = uc = 0,
        ps = e),
        uc)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : dc
    }
}), sp = pt(xl), RS = ye({}, xl, {
    dataTransfer: 0
}), MS = pt(RS), DS = ye({}, bo, {
    relatedTarget: 0
}), fc = pt(DS), LS = ye({}, Xi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), OS = pt(LS), IS = ye({}, Xi, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), FS = pt(IS), _S = ye({}, Xi, {
    data: 0
}), op = pt(_S), VS = {
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
}, zS = {
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
}, BS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function $S(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = BS[e]) ? !!t[e] : !1
}
function Zd() {
    return $S
}
var US = ye({}, bo, {
    key: function(e) {
        if (e.key) {
            var t = VS[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = ha(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zS[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Zd,
    charCode: function(e) {
        return e.type === "keypress" ? ha(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? ha(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , WS = pt(US)
  , HS = ye({}, xl, {
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
  , ap = pt(HS)
  , KS = ye({}, bo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Zd
})
  , GS = pt(KS)
  , qS = ye({}, Xi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , YS = pt(qS)
  , QS = ye({}, xl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , XS = pt(QS)
  , ZS = [9, 13, 27, 32]
  , Jd = vn && "CompositionEvent"in window
  , js = null;
vn && "documentMode"in document && (js = document.documentMode);
var JS = vn && "TextEvent"in window && !js
  , rv = vn && (!Jd || js && 8 < js && 11 >= js)
  , lp = " "
  , cp = !1;
function iv(e, t) {
    switch (e) {
    case "keyup":
        return ZS.indexOf(t.keyCode) !== -1;
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
function sv(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var ai = !1;
function eC(e, t) {
    switch (e) {
    case "compositionend":
        return sv(t);
    case "keypress":
        return t.which !== 32 ? null : (cp = !0,
        lp);
    case "textInput":
        return e = t.data,
        e === lp && cp ? null : e;
    default:
        return null
    }
}
function tC(e, t) {
    if (ai)
        return e === "compositionend" || !Jd && iv(e, t) ? (e = nv(),
        fa = Qd = Gn = null,
        ai = !1,
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
        return rv && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var nC = {
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
function up(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!nC[e.type] : t === "textarea"
}
function ov(e, t, n, r) {
    Fy(r),
    t = Fa(t, "onChange"),
    0 < t.length && (n = new Xd("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var As = null
  , Gs = null;
function rC(e) {
    yv(e, 0)
}
function wl(e) {
    var t = ui(e);
    if (Ay(t))
        return e
}
function iC(e, t) {
    if (e === "change")
        return t
}
var av = !1;
if (vn) {
    var hc;
    if (vn) {
        var pc = "oninput"in document;
        if (!pc) {
            var dp = document.createElement("div");
            dp.setAttribute("oninput", "return;"),
            pc = typeof dp.oninput == "function"
        }
        hc = pc
    } else
        hc = !1;
    av = hc && (!document.documentMode || 9 < document.documentMode)
}
function fp() {
    As && (As.detachEvent("onpropertychange", lv),
    Gs = As = null)
}
function lv(e) {
    if (e.propertyName === "value" && wl(Gs)) {
        var t = [];
        ov(t, Gs, e, Hd(e)),
        By(rC, t)
    }
}
function sC(e, t, n) {
    e === "focusin" ? (fp(),
    As = t,
    Gs = n,
    As.attachEvent("onpropertychange", lv)) : e === "focusout" && fp()
}
function oC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return wl(Gs)
}
function aC(e, t) {
    if (e === "click")
        return wl(t)
}
function lC(e, t) {
    if (e === "input" || e === "change")
        return wl(t)
}
function cC(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ht = typeof Object.is == "function" ? Object.is : cC;
function qs(e, t) {
    if (Ht(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!tu.call(t, i) || !Ht(e[i], t[i]))
            return !1
    }
    return !0
}
function hp(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function pp(e, t) {
    var n = hp(e);
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
        n = hp(n)
    }
}
function cv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? cv(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function uv() {
    for (var e = window, t = Aa(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Aa(e.document)
    }
    return t
}
function ef(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function uC(e) {
    var t = uv()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && cv(n.ownerDocument.documentElement, n)) {
        if (r !== null && ef(n)) {
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
                i = pp(n, s);
                var o = pp(n, r);
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
var dC = vn && "documentMode"in document && 11 >= document.documentMode
  , li = null
  , wu = null
  , Rs = null
  , bu = !1;
function mp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    bu || li == null || li !== Aa(r) || (r = li,
    "selectionStart"in r && ef(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Rs && qs(Rs, r) || (Rs = r,
    r = Fa(wu, "onSelect"),
    0 < r.length && (t = new Xd("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = li)))
}
function Wo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var ci = {
    animationend: Wo("Animation", "AnimationEnd"),
    animationiteration: Wo("Animation", "AnimationIteration"),
    animationstart: Wo("Animation", "AnimationStart"),
    transitionend: Wo("Transition", "TransitionEnd")
}
  , mc = {}
  , dv = {};
vn && (dv = document.createElement("div").style,
"AnimationEvent"in window || (delete ci.animationend.animation,
delete ci.animationiteration.animation,
delete ci.animationstart.animation),
"TransitionEvent"in window || delete ci.transitionend.transition);
function bl(e) {
    if (mc[e])
        return mc[e];
    if (!ci[e])
        return e;
    var t = ci[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in dv)
            return mc[e] = t[n];
    return e
}
var fv = bl("animationend")
  , hv = bl("animationiteration")
  , pv = bl("animationstart")
  , mv = bl("transitionend")
  , gv = new Map
  , gp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function pr(e, t) {
    gv.set(e, t),
    Kr(t, [e])
}
for (var gc = 0; gc < gp.length; gc++) {
    var yc = gp[gc]
      , fC = yc.toLowerCase()
      , hC = yc[0].toUpperCase() + yc.slice(1);
    pr(fC, "on" + hC)
}
pr(fv, "onAnimationEnd");
pr(hv, "onAnimationIteration");
pr(pv, "onAnimationStart");
pr("dblclick", "onDoubleClick");
pr("focusin", "onFocus");
pr("focusout", "onBlur");
pr(mv, "onTransitionEnd");
Vi("onMouseEnter", ["mouseout", "mouseover"]);
Vi("onMouseLeave", ["mouseout", "mouseover"]);
Vi("onPointerEnter", ["pointerout", "pointerover"]);
Vi("onPointerLeave", ["pointerout", "pointerover"]);
Kr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Ts = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , pC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));
function yp(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    fS(r, t, void 0, e),
    e.currentTarget = null
}
function yv(e, t) {
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
                    yp(i, a, c),
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
                    yp(i, a, c),
                    s = l
                }
        }
    }
    if (Ma)
        throw e = gu,
        Ma = !1,
        gu = null,
        e
}
function ae(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = new Set);
    var r = e + "__bubble";
    n.has(r) || (vv(t, e, 2, !1),
    n.add(r))
}
function vc(e, t, n) {
    var r = 0;
    t && (r |= 4),
    vv(n, e, r, t)
}
var Ho = "_reactListening" + Math.random().toString(36).slice(2);
function Ys(e) {
    if (!e[Ho]) {
        e[Ho] = !0,
        Ey.forEach(function(n) {
            n !== "selectionchange" && (pC.has(n) || vc(n, !1, e),
            vc(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ho] || (t[Ho] = !0,
        vc("selectionchange", !1, t))
    }
}
function vv(e, t, n, r) {
    switch (tv(t)) {
    case 1:
        var i = NS;
        break;
    case 4:
        i = jS;
        break;
    default:
        i = Yd
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !mu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function xc(e, t, n, r, i) {
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
                    if (o = kr(a),
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
    By(function() {
        var c = s
          , u = Hd(n)
          , f = [];
        e: {
            var h = gv.get(e);
            if (h !== void 0) {
                var p = Xd
                  , x = e;
                switch (e) {
                case "keypress":
                    if (ha(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    p = WS;
                    break;
                case "focusin":
                    x = "focus",
                    p = fc;
                    break;
                case "focusout":
                    x = "blur",
                    p = fc;
                    break;
                case "beforeblur":
                case "afterblur":
                    p = fc;
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
                    p = sp;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    p = MS;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    p = GS;
                    break;
                case fv:
                case hv:
                case pv:
                    p = OS;
                    break;
                case mv:
                    p = YS;
                    break;
                case "scroll":
                    p = AS;
                    break;
                case "wheel":
                    p = XS;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    p = FS;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    p = ap
                }
                var y = (t & 4) !== 0
                  , w = !y && e === "scroll"
                  , g = y ? h !== null ? h + "Capture" : null : h;
                y = [];
                for (var m = c, v; m !== null; ) {
                    v = m;
                    var S = v.stateNode;
                    if (v.tag === 5 && S !== null && (v = S,
                    g !== null && (S = Us(m, g),
                    S != null && y.push(Qs(m, S, v)))),
                    w)
                        break;
                    m = m.return
                }
                0 < y.length && (h = new p(h,x,null,n,u),
                f.push({
                    event: h,
                    listeners: y
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover",
                p = e === "mouseout" || e === "pointerout",
                h && n !== hu && (x = n.relatedTarget || n.fromElement) && (kr(x) || x[xn]))
                    break e;
                if ((p || h) && (h = u.window === u ? u : (h = u.ownerDocument) ? h.defaultView || h.parentWindow : window,
                p ? (x = n.relatedTarget || n.toElement,
                p = c,
                x = x ? kr(x) : null,
                x !== null && (w = Gr(x),
                x !== w || x.tag !== 5 && x.tag !== 6) && (x = null)) : (p = null,
                x = c),
                p !== x)) {
                    if (y = sp,
                    S = "onMouseLeave",
                    g = "onMouseEnter",
                    m = "mouse",
                    (e === "pointerout" || e === "pointerover") && (y = ap,
                    S = "onPointerLeave",
                    g = "onPointerEnter",
                    m = "pointer"),
                    w = p == null ? h : ui(p),
                    v = x == null ? h : ui(x),
                    h = new y(S,m + "leave",p,n,u),
                    h.target = w,
                    h.relatedTarget = v,
                    S = null,
                    kr(u) === c && (y = new y(g,m + "enter",x,n,u),
                    y.target = v,
                    y.relatedTarget = w,
                    S = y),
                    w = S,
                    p && x)
                        t: {
                            for (y = p,
                            g = x,
                            m = 0,
                            v = y; v; v = ti(v))
                                m++;
                            for (v = 0,
                            S = g; S; S = ti(S))
                                v++;
                            for (; 0 < m - v; )
                                y = ti(y),
                                m--;
                            for (; 0 < v - m; )
                                g = ti(g),
                                v--;
                            for (; m--; ) {
                                if (y === g || g !== null && y === g.alternate)
                                    break t;
                                y = ti(y),
                                g = ti(g)
                            }
                            y = null
                        }
                    else
                        y = null;
                    p !== null && vp(f, h, p, y, !1),
                    x !== null && w !== null && vp(f, w, x, y, !0)
                }
            }
            e: {
                if (h = c ? ui(c) : window,
                p = h.nodeName && h.nodeName.toLowerCase(),
                p === "select" || p === "input" && h.type === "file")
                    var C = iC;
                else if (up(h))
                    if (av)
                        C = lC;
                    else {
                        C = oC;
                        var T = sC
                    }
                else
                    (p = h.nodeName) && p.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (C = aC);
                if (C && (C = C(e, c))) {
                    ov(f, C, n, u);
                    break e
                }
                T && T(e, h, c),
                e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && lu(h, "number", h.value)
            }
            switch (T = c ? ui(c) : window,
            e) {
            case "focusin":
                (up(T) || T.contentEditable === "true") && (li = T,
                wu = c,
                Rs = null);
                break;
            case "focusout":
                Rs = wu = li = null;
                break;
            case "mousedown":
                bu = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                bu = !1,
                mp(f, n, u);
                break;
            case "selectionchange":
                if (dC)
                    break;
            case "keydown":
            case "keyup":
                mp(f, n, u)
            }
            var E;
            if (Jd)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var k = "onCompositionStart";
                        break e;
                    case "compositionend":
                        k = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        k = "onCompositionUpdate";
                        break e
                    }
                    k = void 0
                }
            else
                ai ? iv(e, n) && (k = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
            k && (rv && n.locale !== "ko" && (ai || k !== "onCompositionStart" ? k === "onCompositionEnd" && ai && (E = nv()) : (Gn = u,
            Qd = "value"in Gn ? Gn.value : Gn.textContent,
            ai = !0)),
            T = Fa(c, k),
            0 < T.length && (k = new op(k,e,null,n,u),
            f.push({
                event: k,
                listeners: T
            }),
            E ? k.data = E : (E = sv(n),
            E !== null && (k.data = E)))),
            (E = JS ? eC(e, n) : tC(e, n)) && (c = Fa(c, "onBeforeInput"),
            0 < c.length && (u = new op("onBeforeInput","beforeinput",null,n,u),
            f.push({
                event: u,
                listeners: c
            }),
            u.data = E))
        }
        yv(f, t)
    })
}
function Qs(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Fa(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Us(e, n),
        s != null && r.unshift(Qs(e, s, i)),
        s = Us(e, t),
        s != null && r.push(Qs(e, s, i))),
        e = e.return
    }
    return r
}
function ti(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function vp(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n
          , l = a.alternate
          , c = a.stateNode;
        if (l !== null && l === r)
            break;
        a.tag === 5 && c !== null && (a = c,
        i ? (l = Us(n, s),
        l != null && o.unshift(Qs(n, l, a))) : i || (l = Us(n, s),
        l != null && o.push(Qs(n, l, a)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var mC = /\r\n?/g
  , gC = /\u0000|\uFFFD/g;
function xp(e) {
    return (typeof e == "string" ? e : "" + e).replace(mC, `
`).replace(gC, "")
}
function Ko(e, t, n) {
    if (t = xp(t),
    xp(e) !== t && n)
        throw Error(D(425))
}
function _a() {}
var Su = null
  , Cu = null;
function Tu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Eu = typeof setTimeout == "function" ? setTimeout : void 0
  , yC = typeof clearTimeout == "function" ? clearTimeout : void 0
  , wp = typeof Promise == "function" ? Promise : void 0
  , vC = typeof queueMicrotask == "function" ? queueMicrotask : typeof wp < "u" ? function(e) {
    return wp.resolve(null).then(e).catch(xC)
}
: Eu;
function xC(e) {
    setTimeout(function() {
        throw e
    })
}
function wc(e, t) {
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
                    Ks(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Ks(t)
}
function er(e) {
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
function bp(e) {
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
var Zi = Math.random().toString(36).slice(2)
  , tn = "__reactFiber$" + Zi
  , Xs = "__reactProps$" + Zi
  , xn = "__reactContainer$" + Zi
  , ku = "__reactEvents$" + Zi
  , wC = "__reactListeners$" + Zi
  , bC = "__reactHandles$" + Zi;
function kr(e) {
    var t = e[tn];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[xn] || n[tn]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = bp(e); e !== null; ) {
                    if (n = e[tn])
                        return n;
                    e = bp(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function So(e) {
    return e = e[tn] || e[xn],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function ui(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(D(33))
}
function Sl(e) {
    return e[Xs] || null
}
var Pu = []
  , di = -1;
function mr(e) {
    return {
        current: e
    }
}
function le(e) {
    0 > di || (e.current = Pu[di],
    Pu[di] = null,
    di--)
}
function ie(e, t) {
    di++,
    Pu[di] = e.current,
    e.current = t
}
var ar = {}
  , We = mr(ar)
  , nt = mr(!1)
  , zr = ar;
function zi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return ar;
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
function rt(e) {
    return e = e.childContextTypes,
    e != null
}
function Va() {
    le(nt),
    le(We)
}
function Sp(e, t, n) {
    if (We.current !== ar)
        throw Error(D(168));
    ie(We, t),
    ie(nt, n)
}
function xv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(D(108, sS(e) || "Unknown", i));
    return ye({}, n, r)
}
function za(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ar,
    zr = We.current,
    ie(We, e),
    ie(nt, nt.current),
    !0
}
function Cp(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(D(169));
    n ? (e = xv(e, t, zr),
    r.__reactInternalMemoizedMergedChildContext = e,
    le(nt),
    le(We),
    ie(We, e)) : le(nt),
    ie(nt, n)
}
var hn = null
  , Cl = !1
  , bc = !1;
function wv(e) {
    hn === null ? hn = [e] : hn.push(e)
}
function SC(e) {
    Cl = !0,
    wv(e)
}
function gr() {
    if (!bc && hn !== null) {
        bc = !0;
        var e = 0
          , t = ne;
        try {
            var n = hn;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            hn = null,
            Cl = !1
        } catch (i) {
            throw hn !== null && (hn = hn.slice(e + 1)),
            Hy(Kd, gr),
            i
        } finally {
            ne = t,
            bc = !1
        }
    }
    return null
}
var fi = []
  , hi = 0
  , Ba = null
  , $a = 0
  , xt = []
  , wt = 0
  , Br = null
  , mn = 1
  , gn = "";
function Cr(e, t) {
    fi[hi++] = $a,
    fi[hi++] = Ba,
    Ba = e,
    $a = t
}
function bv(e, t, n) {
    xt[wt++] = mn,
    xt[wt++] = gn,
    xt[wt++] = Br,
    Br = e;
    var r = mn;
    e = gn;
    var i = 32 - $t(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - $t(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        mn = 1 << 32 - $t(t) + i | n << i | r,
        gn = s + e
    } else
        mn = 1 << s | n << i | r,
        gn = e
}
function tf(e) {
    e.return !== null && (Cr(e, 1),
    bv(e, 1, 0))
}
function nf(e) {
    for (; e === Ba; )
        Ba = fi[--hi],
        fi[hi] = null,
        $a = fi[--hi],
        fi[hi] = null;
    for (; e === Br; )
        Br = xt[--wt],
        xt[wt] = null,
        gn = xt[--wt],
        xt[wt] = null,
        mn = xt[--wt],
        xt[wt] = null
}
var lt = null
  , at = null
  , de = !1
  , Bt = null;
function Sv(e, t) {
    var n = bt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Tp(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        at = er(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        lt = e,
        at = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Br !== null ? {
            id: mn,
            overflow: gn
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = bt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        lt = e,
        at = null,
        !0) : !1;
    default:
        return !1
    }
}
function Nu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ju(e) {
    if (de) {
        var t = at;
        if (t) {
            var n = t;
            if (!Tp(e, t)) {
                if (Nu(e))
                    throw Error(D(418));
                t = er(n.nextSibling);
                var r = lt;
                t && Tp(e, t) ? Sv(r, n) : (e.flags = e.flags & -4097 | 2,
                de = !1,
                lt = e)
            }
        } else {
            if (Nu(e))
                throw Error(D(418));
            e.flags = e.flags & -4097 | 2,
            de = !1,
            lt = e
        }
    }
}
function Ep(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    lt = e
}
function Go(e) {
    if (e !== lt)
        return !1;
    if (!de)
        return Ep(e),
        de = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Tu(e.type, e.memoizedProps)),
    t && (t = at)) {
        if (Nu(e))
            throw Cv(),
            Error(D(418));
        for (; t; )
            Sv(e, t),
            t = er(t.nextSibling)
    }
    if (Ep(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(D(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            at = er(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            at = null
        }
    } else
        at = lt ? er(e.stateNode.nextSibling) : null;
    return !0
}
function Cv() {
    for (var e = at; e; )
        e = er(e.nextSibling)
}
function Bi() {
    at = lt = null,
    de = !1
}
function rf(e) {
    Bt === null ? Bt = [e] : Bt.push(e)
}
var CC = En.ReactCurrentBatchConfig;
function ms(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(D(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(D(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var a = i.refs;
                o === null ? delete a[s] : a[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(D(284));
        if (!n._owner)
            throw Error(D(290, e))
    }
    return e
}
function qo(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function kp(e) {
    var t = e._init;
    return t(e._payload)
}
function Tv(e) {
    function t(g, m) {
        if (e) {
            var v = g.deletions;
            v === null ? (g.deletions = [m],
            g.flags |= 16) : v.push(m)
        }
    }
    function n(g, m) {
        if (!e)
            return null;
        for (; m !== null; )
            t(g, m),
            m = m.sibling;
        return null
    }
    function r(g, m) {
        for (g = new Map; m !== null; )
            m.key !== null ? g.set(m.key, m) : g.set(m.index, m),
            m = m.sibling;
        return g
    }
    function i(g, m) {
        return g = ir(g, m),
        g.index = 0,
        g.sibling = null,
        g
    }
    function s(g, m, v) {
        return g.index = v,
        e ? (v = g.alternate,
        v !== null ? (v = v.index,
        v < m ? (g.flags |= 2,
        m) : v) : (g.flags |= 2,
        m)) : (g.flags |= 1048576,
        m)
    }
    function o(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function a(g, m, v, S) {
        return m === null || m.tag !== 6 ? (m = Nc(v, g.mode, S),
        m.return = g,
        m) : (m = i(m, v),
        m.return = g,
        m)
    }
    function l(g, m, v, S) {
        var C = v.type;
        return C === oi ? u(g, m, v.props.children, S, v.key) : m !== null && (m.elementType === C || typeof C == "object" && C !== null && C.$$typeof === _n && kp(C) === m.type) ? (S = i(m, v.props),
        S.ref = ms(g, m, v),
        S.return = g,
        S) : (S = wa(v.type, v.key, v.props, null, g.mode, S),
        S.ref = ms(g, m, v),
        S.return = g,
        S)
    }
    function c(g, m, v, S) {
        return m === null || m.tag !== 4 || m.stateNode.containerInfo !== v.containerInfo || m.stateNode.implementation !== v.implementation ? (m = jc(v, g.mode, S),
        m.return = g,
        m) : (m = i(m, v.children || []),
        m.return = g,
        m)
    }
    function u(g, m, v, S, C) {
        return m === null || m.tag !== 7 ? (m = _r(v, g.mode, S, C),
        m.return = g,
        m) : (m = i(m, v),
        m.return = g,
        m)
    }
    function f(g, m, v) {
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return m = Nc("" + m, g.mode, v),
            m.return = g,
            m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case Fo:
                return v = wa(m.type, m.key, m.props, null, g.mode, v),
                v.ref = ms(g, null, m),
                v.return = g,
                v;
            case si:
                return m = jc(m, g.mode, v),
                m.return = g,
                m;
            case _n:
                var S = m._init;
                return f(g, S(m._payload), v)
            }
            if (Ss(m) || us(m))
                return m = _r(m, g.mode, v, null),
                m.return = g,
                m;
            qo(g, m)
        }
        return null
    }
    function h(g, m, v, S) {
        var C = m !== null ? m.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : a(g, m, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Fo:
                return v.key === C ? l(g, m, v, S) : null;
            case si:
                return v.key === C ? c(g, m, v, S) : null;
            case _n:
                return C = v._init,
                h(g, m, C(v._payload), S)
            }
            if (Ss(v) || us(v))
                return C !== null ? null : u(g, m, v, S, null);
            qo(g, v)
        }
        return null
    }
    function p(g, m, v, S, C) {
        if (typeof S == "string" && S !== "" || typeof S == "number")
            return g = g.get(v) || null,
            a(m, g, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
            case Fo:
                return g = g.get(S.key === null ? v : S.key) || null,
                l(m, g, S, C);
            case si:
                return g = g.get(S.key === null ? v : S.key) || null,
                c(m, g, S, C);
            case _n:
                var T = S._init;
                return p(g, m, v, T(S._payload), C)
            }
            if (Ss(S) || us(S))
                return g = g.get(v) || null,
                u(m, g, S, C, null);
            qo(m, S)
        }
        return null
    }
    function x(g, m, v, S) {
        for (var C = null, T = null, E = m, k = m = 0, A = null; E !== null && k < v.length; k++) {
            E.index > k ? (A = E,
            E = null) : A = E.sibling;
            var R = h(g, E, v[k], S);
            if (R === null) {
                E === null && (E = A);
                break
            }
            e && E && R.alternate === null && t(g, E),
            m = s(R, m, k),
            T === null ? C = R : T.sibling = R,
            T = R,
            E = A
        }
        if (k === v.length)
            return n(g, E),
            de && Cr(g, k),
            C;
        if (E === null) {
            for (; k < v.length; k++)
                E = f(g, v[k], S),
                E !== null && (m = s(E, m, k),
                T === null ? C = E : T.sibling = E,
                T = E);
            return de && Cr(g, k),
            C
        }
        for (E = r(g, E); k < v.length; k++)
            A = p(E, g, k, v[k], S),
            A !== null && (e && A.alternate !== null && E.delete(A.key === null ? k : A.key),
            m = s(A, m, k),
            T === null ? C = A : T.sibling = A,
            T = A);
        return e && E.forEach(function(z) {
            return t(g, z)
        }),
        de && Cr(g, k),
        C
    }
    function y(g, m, v, S) {
        var C = us(v);
        if (typeof C != "function")
            throw Error(D(150));
        if (v = C.call(v),
        v == null)
            throw Error(D(151));
        for (var T = C = null, E = m, k = m = 0, A = null, R = v.next(); E !== null && !R.done; k++,
        R = v.next()) {
            E.index > k ? (A = E,
            E = null) : A = E.sibling;
            var z = h(g, E, R.value, S);
            if (z === null) {
                E === null && (E = A);
                break
            }
            e && E && z.alternate === null && t(g, E),
            m = s(z, m, k),
            T === null ? C = z : T.sibling = z,
            T = z,
            E = A
        }
        if (R.done)
            return n(g, E),
            de && Cr(g, k),
            C;
        if (E === null) {
            for (; !R.done; k++,
            R = v.next())
                R = f(g, R.value, S),
                R !== null && (m = s(R, m, k),
                T === null ? C = R : T.sibling = R,
                T = R);
            return de && Cr(g, k),
            C
        }
        for (E = r(g, E); !R.done; k++,
        R = v.next())
            R = p(E, g, k, R.value, S),
            R !== null && (e && R.alternate !== null && E.delete(R.key === null ? k : R.key),
            m = s(R, m, k),
            T === null ? C = R : T.sibling = R,
            T = R);
        return e && E.forEach(function(I) {
            return t(g, I)
        }),
        de && Cr(g, k),
        C
    }
    function w(g, m, v, S) {
        if (typeof v == "object" && v !== null && v.type === oi && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Fo:
                e: {
                    for (var C = v.key, T = m; T !== null; ) {
                        if (T.key === C) {
                            if (C = v.type,
                            C === oi) {
                                if (T.tag === 7) {
                                    n(g, T.sibling),
                                    m = i(T, v.props.children),
                                    m.return = g,
                                    g = m;
                                    break e
                                }
                            } else if (T.elementType === C || typeof C == "object" && C !== null && C.$$typeof === _n && kp(C) === T.type) {
                                n(g, T.sibling),
                                m = i(T, v.props),
                                m.ref = ms(g, T, v),
                                m.return = g,
                                g = m;
                                break e
                            }
                            n(g, T);
                            break
                        } else
                            t(g, T);
                        T = T.sibling
                    }
                    v.type === oi ? (m = _r(v.props.children, g.mode, S, v.key),
                    m.return = g,
                    g = m) : (S = wa(v.type, v.key, v.props, null, g.mode, S),
                    S.ref = ms(g, m, v),
                    S.return = g,
                    g = S)
                }
                return o(g);
            case si:
                e: {
                    for (T = v.key; m !== null; ) {
                        if (m.key === T)
                            if (m.tag === 4 && m.stateNode.containerInfo === v.containerInfo && m.stateNode.implementation === v.implementation) {
                                n(g, m.sibling),
                                m = i(m, v.children || []),
                                m.return = g,
                                g = m;
                                break e
                            } else {
                                n(g, m);
                                break
                            }
                        else
                            t(g, m);
                        m = m.sibling
                    }
                    m = jc(v, g.mode, S),
                    m.return = g,
                    g = m
                }
                return o(g);
            case _n:
                return T = v._init,
                w(g, m, T(v._payload), S)
            }
            if (Ss(v))
                return x(g, m, v, S);
            if (us(v))
                return y(g, m, v, S);
            qo(g, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        m !== null && m.tag === 6 ? (n(g, m.sibling),
        m = i(m, v),
        m.return = g,
        g = m) : (n(g, m),
        m = Nc(v, g.mode, S),
        m.return = g,
        g = m),
        o(g)) : n(g, m)
    }
    return w
}
var $i = Tv(!0)
  , Ev = Tv(!1)
  , Ua = mr(null)
  , Wa = null
  , pi = null
  , sf = null;
function of() {
    sf = pi = Wa = null
}
function af(e) {
    var t = Ua.current;
    le(Ua),
    e._currentValue = t
}
function Au(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function ki(e, t) {
    Wa = e,
    sf = pi = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (tt = !0),
    e.firstContext = null)
}
function kt(e) {
    var t = e._currentValue;
    if (sf !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        pi === null) {
            if (Wa === null)
                throw Error(D(308));
            pi = e,
            Wa.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            pi = pi.next = e;
    return t
}
var Pr = null;
function lf(e) {
    Pr === null ? Pr = [e] : Pr.push(e)
}
function kv(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    lf(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    wn(e, r)
}
function wn(e, t) {
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
var Vn = !1;
function cf(e) {
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
function Pv(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function yn(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function tr(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    J & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        wn(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    lf(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    wn(e, n)
}
function pa(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gd(e, n)
    }
}
function Pp(e, t) {
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
function Ha(e, t, n, r) {
    var i = e.updateQueue;
    Vn = !1;
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
        var f = i.baseState;
        o = 0,
        u = c = l = null,
        a = s;
        do {
            var h = a.lane
              , p = a.eventTime;
            if ((r & h) === h) {
                u !== null && (u = u.next = {
                    eventTime: p,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var x = e
                      , y = a;
                    switch (h = t,
                    p = n,
                    y.tag) {
                    case 1:
                        if (x = y.payload,
                        typeof x == "function") {
                            f = x.call(p, f, h);
                            break e
                        }
                        f = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = y.payload,
                        h = typeof x == "function" ? x.call(p, f, h) : x,
                        h == null)
                            break e;
                        f = ye({}, f, h);
                        break e;
                    case 2:
                        Vn = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                h = i.effects,
                h === null ? i.effects = [a] : h.push(a))
            } else
                p = {
                    eventTime: p,
                    lane: h,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                u === null ? (c = u = p,
                l = f) : u = u.next = p,
                o |= h;
            if (a = a.next,
            a === null) {
                if (a = i.shared.pending,
                a === null)
                    break;
                h = a,
                a = h.next,
                h.next = null,
                i.lastBaseUpdate = h,
                i.shared.pending = null
            }
        } while (!0);
        if (u === null && (l = f),
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
        Ur |= o,
        e.lanes = o,
        e.memoizedState = f
    }
}
function Np(e, t, n) {
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
                    throw Error(D(191, i));
                i.call(r)
            }
        }
}
var Co = {}
  , rn = mr(Co)
  , Zs = mr(Co)
  , Js = mr(Co);
function Nr(e) {
    if (e === Co)
        throw Error(D(174));
    return e
}
function uf(e, t) {
    switch (ie(Js, t),
    ie(Zs, e),
    ie(rn, Co),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : uu(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = uu(t, e)
    }
    le(rn),
    ie(rn, t)
}
function Ui() {
    le(rn),
    le(Zs),
    le(Js)
}
function Nv(e) {
    Nr(Js.current);
    var t = Nr(rn.current)
      , n = uu(t, e.type);
    t !== n && (ie(Zs, e),
    ie(rn, n))
}
function df(e) {
    Zs.current === e && (le(rn),
    le(Zs))
}
var pe = mr(0);
function Ka(e) {
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
var Sc = [];
function ff() {
    for (var e = 0; e < Sc.length; e++)
        Sc[e]._workInProgressVersionPrimary = null;
    Sc.length = 0
}
var ma = En.ReactCurrentDispatcher
  , Cc = En.ReactCurrentBatchConfig
  , $r = 0
  , ge = null
  , Pe = null
  , Re = null
  , Ga = !1
  , Ms = !1
  , eo = 0
  , TC = 0;
function Ve() {
    throw Error(D(321))
}
function hf(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ht(e[n], t[n]))
            return !1;
    return !0
}
function pf(e, t, n, r, i, s) {
    if ($r = s,
    ge = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    ma.current = e === null || e.memoizedState === null ? NC : jC,
    e = n(r, i),
    Ms) {
        s = 0;
        do {
            if (Ms = !1,
            eo = 0,
            25 <= s)
                throw Error(D(301));
            s += 1,
            Re = Pe = null,
            t.updateQueue = null,
            ma.current = AC,
            e = n(r, i)
        } while (Ms)
    }
    if (ma.current = qa,
    t = Pe !== null && Pe.next !== null,
    $r = 0,
    Re = Pe = ge = null,
    Ga = !1,
    t)
        throw Error(D(300));
    return e
}
function mf() {
    var e = eo !== 0;
    return eo = 0,
    e
}
function Qt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Re === null ? ge.memoizedState = Re = e : Re = Re.next = e,
    Re
}
function Pt() {
    if (Pe === null) {
        var e = ge.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Pe.next;
    var t = Re === null ? ge.memoizedState : Re.next;
    if (t !== null)
        Re = t,
        Pe = e;
    else {
        if (e === null)
            throw Error(D(310));
        Pe = e,
        e = {
            memoizedState: Pe.memoizedState,
            baseState: Pe.baseState,
            baseQueue: Pe.baseQueue,
            queue: Pe.queue,
            next: null
        },
        Re === null ? ge.memoizedState = Re = e : Re = Re.next = e
    }
    return Re
}
function to(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Tc(e) {
    var t = Pt()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
    n.lastRenderedReducer = e;
    var r = Pe
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
            if (($r & u) === u)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                l === null ? (a = l = f,
                o = r) : l = l.next = f,
                ge.lanes |= u,
                Ur |= u
            }
            c = c.next
        } while (c !== null && c !== s);
        l === null ? o = r : l.next = a,
        Ht(r, t.memoizedState) || (tt = !0),
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
            ge.lanes |= s,
            Ur |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Ec(e) {
    var t = Pt()
      , n = t.queue;
    if (n === null)
        throw Error(D(311));
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
        Ht(s, t.memoizedState) || (tt = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function jv() {}
function Av(e, t) {
    var n = ge
      , r = Pt()
      , i = t()
      , s = !Ht(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    tt = !0),
    r = r.queue,
    gf(Dv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || Re !== null && Re.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        no(9, Mv.bind(null, n, r, i, t), void 0, null),
        Me === null)
            throw Error(D(349));
        $r & 30 || Rv(n, t, i)
    }
    return i
}
function Rv(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ge.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ge.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function Mv(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Lv(t) && Ov(e)
}
function Dv(e, t, n) {
    return n(function() {
        Lv(t) && Ov(e)
    })
}
function Lv(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ht(e, n)
    } catch {
        return !0
    }
}
function Ov(e) {
    var t = wn(e, 1);
    t !== null && Ut(t, e, 1, -1)
}
function jp(e) {
    var t = Qt();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: to,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = PC.bind(null, ge, e),
    [t.memoizedState, e]
}
function no(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ge.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ge.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Iv() {
    return Pt().memoizedState
}
function ga(e, t, n, r) {
    var i = Qt();
    ge.flags |= e,
    i.memoizedState = no(1 | t, n, void 0, r === void 0 ? null : r)
}
function Tl(e, t, n, r) {
    var i = Pt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Pe !== null) {
        var o = Pe.memoizedState;
        if (s = o.destroy,
        r !== null && hf(r, o.deps)) {
            i.memoizedState = no(t, n, s, r);
            return
        }
    }
    ge.flags |= e,
    i.memoizedState = no(1 | t, n, s, r)
}
function Ap(e, t) {
    return ga(8390656, 8, e, t)
}
function gf(e, t) {
    return Tl(2048, 8, e, t)
}
function Fv(e, t) {
    return Tl(4, 2, e, t)
}
function _v(e, t) {
    return Tl(4, 4, e, t)
}
function Vv(e, t) {
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
function zv(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Tl(4, 4, Vv.bind(null, t, e), n)
}
function yf() {}
function Bv(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hf(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function $v(e, t) {
    var n = Pt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && hf(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Uv(e, t, n) {
    return $r & 21 ? (Ht(n, t) || (n = qy(),
    ge.lanes |= n,
    Ur |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    tt = !0),
    e.memoizedState = n)
}
function EC(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Cc.transition;
    Cc.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = n,
        Cc.transition = r
    }
}
function Wv() {
    return Pt().memoizedState
}
function kC(e, t, n) {
    var r = rr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Hv(e))
        Kv(t, n);
    else if (n = kv(e, t, n, r),
    n !== null) {
        var i = Qe();
        Ut(n, e, r, i),
        Gv(n, t, r)
    }
}
function PC(e, t, n) {
    var r = rr(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Hv(e))
        Kv(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , a = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = a,
                Ht(a, o)) {
                    var l = t.interleaved;
                    l === null ? (i.next = i,
                    lf(t)) : (i.next = l.next,
                    l.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = kv(e, t, i, r),
        n !== null && (i = Qe(),
        Ut(n, e, r, i),
        Gv(n, t, r))
    }
}
function Hv(e) {
    var t = e.alternate;
    return e === ge || t !== null && t === ge
}
function Kv(e, t) {
    Ms = Ga = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Gv(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Gd(e, n)
    }
}
var qa = {
    readContext: kt,
    useCallback: Ve,
    useContext: Ve,
    useEffect: Ve,
    useImperativeHandle: Ve,
    useInsertionEffect: Ve,
    useLayoutEffect: Ve,
    useMemo: Ve,
    useReducer: Ve,
    useRef: Ve,
    useState: Ve,
    useDebugValue: Ve,
    useDeferredValue: Ve,
    useTransition: Ve,
    useMutableSource: Ve,
    useSyncExternalStore: Ve,
    useId: Ve,
    unstable_isNewReconciler: !1
}
  , NC = {
    readContext: kt,
    useCallback: function(e, t) {
        return Qt().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: kt,
    useEffect: Ap,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ga(4194308, 4, Vv.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ga(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ga(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = Qt();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = Qt();
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
        e = e.dispatch = kC.bind(null, ge, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = Qt();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: jp,
    useDebugValue: yf,
    useDeferredValue: function(e) {
        return Qt().memoizedState = e
    },
    useTransition: function() {
        var e = jp(!1)
          , t = e[0];
        return e = EC.bind(null, e[1]),
        Qt().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ge
          , i = Qt();
        if (de) {
            if (n === void 0)
                throw Error(D(407));
            n = n()
        } else {
            if (n = t(),
            Me === null)
                throw Error(D(349));
            $r & 30 || Rv(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        Ap(Dv.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        no(9, Mv.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = Qt()
          , t = Me.identifierPrefix;
        if (de) {
            var n = gn
              , r = mn;
            n = (r & ~(1 << 32 - $t(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = eo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = TC++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , jC = {
    readContext: kt,
    useCallback: Bv,
    useContext: kt,
    useEffect: gf,
    useImperativeHandle: zv,
    useInsertionEffect: Fv,
    useLayoutEffect: _v,
    useMemo: $v,
    useReducer: Tc,
    useRef: Iv,
    useState: function() {
        return Tc(to)
    },
    useDebugValue: yf,
    useDeferredValue: function(e) {
        var t = Pt();
        return Uv(t, Pe.memoizedState, e)
    },
    useTransition: function() {
        var e = Tc(to)[0]
          , t = Pt().memoizedState;
        return [e, t]
    },
    useMutableSource: jv,
    useSyncExternalStore: Av,
    useId: Wv,
    unstable_isNewReconciler: !1
}
  , AC = {
    readContext: kt,
    useCallback: Bv,
    useContext: kt,
    useEffect: gf,
    useImperativeHandle: zv,
    useInsertionEffect: Fv,
    useLayoutEffect: _v,
    useMemo: $v,
    useReducer: Ec,
    useRef: Iv,
    useState: function() {
        return Ec(to)
    },
    useDebugValue: yf,
    useDeferredValue: function(e) {
        var t = Pt();
        return Pe === null ? t.memoizedState = e : Uv(t, Pe.memoizedState, e)
    },
    useTransition: function() {
        var e = Ec(to)[0]
          , t = Pt().memoizedState;
        return [e, t]
    },
    useMutableSource: jv,
    useSyncExternalStore: Av,
    useId: Wv,
    unstable_isNewReconciler: !1
};
function It(e, t) {
    if (e && e.defaultProps) {
        t = ye({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Ru(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ye({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var El = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Gr(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe()
          , i = rr(e)
          , s = yn(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = tr(e, s, i),
        t !== null && (Ut(t, e, i, r),
        pa(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Qe()
          , i = rr(e)
          , s = yn(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = tr(e, s, i),
        t !== null && (Ut(t, e, i, r),
        pa(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Qe()
          , r = rr(e)
          , i = yn(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = tr(e, i, r),
        t !== null && (Ut(t, e, r, n),
        pa(t, e, r))
    }
};
function Rp(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !qs(n, r) || !qs(i, s) : !0
}
function qv(e, t, n) {
    var r = !1
      , i = ar
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = kt(s) : (i = rt(t) ? zr : We.current,
    r = t.contextTypes,
    s = (r = r != null) ? zi(e, i) : ar),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = El,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function Mp(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null)
}
function Mu(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    cf(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = kt(s) : (s = rt(t) ? zr : We.current,
    i.context = zi(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (Ru(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && El.enqueueReplaceState(i, i.state, null),
    Ha(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Wi(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += iS(r),
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
function kc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Du(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var RC = typeof WeakMap == "function" ? WeakMap : Map;
function Yv(e, t, n) {
    n = yn(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Qa || (Qa = !0,
        Uu = r),
        Du(e, t)
    }
    ,
    n
}
function Qv(e, t, n) {
    n = yn(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            Du(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        Du(e, t),
        typeof r != "function" && (nr === null ? nr = new Set([this]) : nr.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function Dp(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new RC;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = HC.bind(null, e, t, n),
    t.then(e, e))
}
function Lp(e) {
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
function Op(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yn(-1, 1),
    t.tag = 2,
    tr(n, t, 1))),
    n.lanes |= 1),
    e)
}
var MC = En.ReactCurrentOwner
  , tt = !1;
function Ke(e, t, n, r) {
    t.child = e === null ? Ev(t, null, n, r) : $i(t, e.child, n, r)
}
function Ip(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return ki(t, i),
    r = pf(e, t, n, r, s, i),
    n = mf(),
    e !== null && !tt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    bn(e, t, i)) : (de && n && tf(t),
    t.flags |= 1,
    Ke(e, t, r, i),
    t.child)
}
function Fp(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Ef(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Xv(e, t, s, r, i)) : (e = wa(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : qs,
        n(o, r) && e.ref === t.ref)
            return bn(e, t, i)
    }
    return t.flags |= 1,
    e = ir(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Xv(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (qs(s, r) && e.ref === t.ref)
            if (tt = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (tt = !0);
            else
                return t.lanes = e.lanes,
                bn(e, t, i)
    }
    return Lu(e, t, n, r, i)
}
function Zv(e, t, n) {
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
            ie(gi, st),
            st |= n;
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
                ie(gi, st),
                st |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            ie(gi, st),
            st |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        ie(gi, st),
        st |= r;
    return Ke(e, t, i, n),
    t.child
}
function Jv(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Lu(e, t, n, r, i) {
    var s = rt(n) ? zr : We.current;
    return s = zi(t, s),
    ki(t, i),
    n = pf(e, t, n, r, s, i),
    r = mf(),
    e !== null && !tt ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    bn(e, t, i)) : (de && r && tf(t),
    t.flags |= 1,
    Ke(e, t, n, i),
    t.child)
}
function _p(e, t, n, r, i) {
    if (rt(n)) {
        var s = !0;
        za(t)
    } else
        s = !1;
    if (ki(t, i),
    t.stateNode === null)
        ya(e, t),
        qv(t, n, r),
        Mu(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , a = t.memoizedProps;
        o.props = a;
        var l = o.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = kt(c) : (c = rt(n) ? zr : We.current,
        c = zi(t, c));
        var u = n.getDerivedStateFromProps
          , f = typeof u == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== r || l !== c) && Mp(t, o, r, c),
        Vn = !1;
        var h = t.memoizedState;
        o.state = h,
        Ha(t, r, o, i),
        l = t.memoizedState,
        a !== r || h !== l || nt.current || Vn ? (typeof u == "function" && (Ru(t, n, u, r),
        l = t.memoizedState),
        (a = Vn || Rp(t, n, a, r, h, l, c)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
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
        Pv(e, t),
        a = t.memoizedProps,
        c = t.type === t.elementType ? a : It(t.type, a),
        o.props = c,
        f = t.pendingProps,
        h = o.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = kt(l) : (l = rt(n) ? zr : We.current,
        l = zi(t, l));
        var p = n.getDerivedStateFromProps;
        (u = typeof p == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== f || h !== l) && Mp(t, o, r, l),
        Vn = !1,
        h = t.memoizedState,
        o.state = h,
        Ha(t, r, o, i);
        var x = t.memoizedState;
        a !== f || h !== x || nt.current || Vn ? (typeof p == "function" && (Ru(t, n, p, r),
        x = t.memoizedState),
        (c = Vn || Rp(t, n, c, r, h, x, l) || !1) ? (u || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, l),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, l)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        o.props = r,
        o.state = x,
        o.context = l,
        r = c) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Ou(e, t, n, r, s, i)
}
function Ou(e, t, n, r, i, s) {
    Jv(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && Cp(t, n, !1),
        bn(e, t, s);
    r = t.stateNode,
    MC.current = t;
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = $i(t, e.child, null, s),
    t.child = $i(t, null, a, s)) : Ke(e, t, a, s),
    t.memoizedState = r.state,
    i && Cp(t, n, !0),
    t.child
}
function e0(e) {
    var t = e.stateNode;
    t.pendingContext ? Sp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Sp(e, t.context, !1),
    uf(e, t.containerInfo)
}
function Vp(e, t, n, r, i) {
    return Bi(),
    rf(i),
    t.flags |= 256,
    Ke(e, t, n, r),
    t.child
}
var Iu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Fu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function t0(e, t, n) {
    var r = t.pendingProps, i = pe.current, s = !1, o = (t.flags & 128) !== 0, a;
    if ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    ie(pe, i & 1),
    e === null)
        return ju(t),
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
        s.pendingProps = o) : s = Nl(o, r, 0, null),
        e = _r(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Fu(n),
        t.memoizedState = Iu,
        e) : vf(t, o));
    if (i = e.memoizedState,
    i !== null && (a = i.dehydrated,
    a !== null))
        return DC(e, t, o, r, a, i, n);
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
        t.deletions = null) : (r = ir(i, l),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        a !== null ? s = ir(a, s) : (s = _r(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Fu(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Iu,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = ir(s, {
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
function vf(e, t) {
    return t = Nl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Yo(e, t, n, r) {
    return r !== null && rf(r),
    $i(t, e.child, null, n),
    e = vf(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function DC(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = kc(Error(D(422))),
        Yo(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Nl({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = _r(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && $i(t, e.child, null, o),
        t.child.memoizedState = Fu(o),
        t.memoizedState = Iu,
        s);
    if (!(t.mode & 1))
        return Yo(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var a = r.dgst;
        return r = a,
        s = Error(D(419)),
        r = kc(s, r, void 0),
        Yo(e, t, o, r)
    }
    if (a = (o & e.childLanes) !== 0,
    tt || a) {
        if (r = Me,
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
            wn(e, i),
            Ut(r, e, i, -1))
        }
        return Tf(),
        r = kc(Error(D(421))),
        Yo(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = KC.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    at = er(i.nextSibling),
    lt = t,
    de = !0,
    Bt = null,
    e !== null && (xt[wt++] = mn,
    xt[wt++] = gn,
    xt[wt++] = Br,
    mn = e.id,
    gn = e.overflow,
    Br = t),
    t = vf(t, r.children),
    t.flags |= 4096,
    t)
}
function zp(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    Au(e.return, t, n)
}
function Pc(e, t, n, r, i) {
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
function n0(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Ke(e, t, r.children, n),
    r = pe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && zp(e, n, t);
                else if (e.tag === 19)
                    zp(e, n, t);
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
    if (ie(pe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && Ka(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Pc(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && Ka(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Pc(t, !0, n, null, s);
            break;
        case "together":
            Pc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ya(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function bn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Ur |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(D(153));
    if (t.child !== null) {
        for (e = t.child,
        n = ir(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = ir(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function LC(e, t, n) {
    switch (t.tag) {
    case 3:
        e0(t),
        Bi();
        break;
    case 5:
        Nv(t);
        break;
    case 1:
        rt(t.type) && za(t);
        break;
    case 4:
        uf(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        ie(Ua, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (ie(pe, pe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? t0(e, t, n) : (ie(pe, pe.current & 1),
            e = bn(e, t, n),
            e !== null ? e.sibling : null);
        ie(pe, pe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return n0(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        ie(pe, pe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Zv(e, t, n)
    }
    return bn(e, t, n)
}
var r0, _u, i0, s0;
r0 = function(e, t) {
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
_u = function() {}
;
i0 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        Nr(rn.current);
        var s = null;
        switch (n) {
        case "input":
            i = ou(e, i),
            r = ou(e, r),
            s = [];
            break;
        case "select":
            i = ye({}, i, {
                value: void 0
            }),
            r = ye({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = cu(e, i),
            r = cu(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = _a)
        }
        du(n, r);
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
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Bs.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
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
                    l != null && a !== l && (s = s || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (s = s || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Bs.hasOwnProperty(c) ? (l != null && c === "onScroll" && ae("scroll", e),
                    s || a === l || (s = [])) : (s = s || []).push(c, l))
        }
        n && (s = s || []).push("style", n);
        var c = s;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
s0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function gs(e, t) {
    if (!de)
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
function ze(e) {
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
function OC(e, t, n) {
    var r = t.pendingProps;
    switch (nf(t),
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
        return ze(t),
        null;
    case 1:
        return rt(t.type) && Va(),
        ze(t),
        null;
    case 3:
        return r = t.stateNode,
        Ui(),
        le(nt),
        le(We),
        ff(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Go(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Bt !== null && (Ku(Bt),
        Bt = null))),
        _u(e, t),
        ze(t),
        null;
    case 5:
        df(t);
        var i = Nr(Js.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            i0(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(D(166));
                return ze(t),
                null
            }
            if (e = Nr(rn.current),
            Go(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[tn] = t,
                r[Xs] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ae("cancel", r),
                    ae("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ae("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Ts.length; i++)
                        ae(Ts[i], r);
                    break;
                case "source":
                    ae("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ae("error", r),
                    ae("load", r);
                    break;
                case "details":
                    ae("toggle", r);
                    break;
                case "input":
                    Yh(r, s),
                    ae("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    ae("invalid", r);
                    break;
                case "textarea":
                    Xh(r, s),
                    ae("invalid", r)
                }
                du(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var a = s[o];
                        o === "children" ? typeof a == "string" ? r.textContent !== a && (s.suppressHydrationWarning !== !0 && Ko(r.textContent, a, e),
                        i = ["children", a]) : typeof a == "number" && r.textContent !== "" + a && (s.suppressHydrationWarning !== !0 && Ko(r.textContent, a, e),
                        i = ["children", "" + a]) : Bs.hasOwnProperty(o) && a != null && o === "onScroll" && ae("scroll", r)
                    }
                switch (n) {
                case "input":
                    _o(r),
                    Qh(r, s, !0);
                    break;
                case "textarea":
                    _o(r),
                    Zh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = _a)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Dy(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[tn] = t,
                e[Xs] = r,
                r0(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = fu(n, r),
                    n) {
                    case "dialog":
                        ae("cancel", e),
                        ae("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ae("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Ts.length; i++)
                            ae(Ts[i], e);
                        i = r;
                        break;
                    case "source":
                        ae("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ae("error", e),
                        ae("load", e),
                        i = r;
                        break;
                    case "details":
                        ae("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Yh(e, r),
                        i = ou(e, r),
                        ae("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ye({}, r, {
                            value: void 0
                        }),
                        ae("invalid", e);
                        break;
                    case "textarea":
                        Xh(e, r),
                        i = cu(e, r),
                        ae("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    du(n, i),
                    a = i;
                    for (s in a)
                        if (a.hasOwnProperty(s)) {
                            var l = a[s];
                            s === "style" ? Iy(e, l) : s === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0,
                            l != null && Ly(e, l)) : s === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && $s(e, l) : typeof l == "number" && $s(e, "" + l) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Bs.hasOwnProperty(s) ? l != null && s === "onScroll" && ae("scroll", e) : l != null && Bd(e, s, l, o))
                        }
                    switch (n) {
                    case "input":
                        _o(e),
                        Qh(e, r, !1);
                        break;
                    case "textarea":
                        _o(e),
                        Zh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + or(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Si(e, !!r.multiple, s, !1) : r.defaultValue != null && Si(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = _a)
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
        return ze(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            s0(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(D(166));
            if (n = Nr(Js.current),
            Nr(rn.current),
            Go(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[tn] = t,
                (s = r.nodeValue !== n) && (e = lt,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Ko(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Ko(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[tn] = t,
                t.stateNode = r
        }
        return ze(t),
        null;
    case 13:
        if (le(pe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (de && at !== null && t.mode & 1 && !(t.flags & 128))
                Cv(),
                Bi(),
                t.flags |= 98560,
                s = !1;
            else if (s = Go(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(D(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(D(317));
                    s[tn] = t
                } else
                    Bi(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ze(t),
                s = !1
            } else
                Bt !== null && (Ku(Bt),
                Bt = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || pe.current & 1 ? Ne === 0 && (Ne = 3) : Tf())),
        t.updateQueue !== null && (t.flags |= 4),
        ze(t),
        null);
    case 4:
        return Ui(),
        _u(e, t),
        e === null && Ys(t.stateNode.containerInfo),
        ze(t),
        null;
    case 10:
        return af(t.type._context),
        ze(t),
        null;
    case 17:
        return rt(t.type) && Va(),
        ze(t),
        null;
    case 19:
        if (le(pe),
        s = t.memoizedState,
        s === null)
            return ze(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                gs(s, !1);
            else {
                if (Ne !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = Ka(e),
                        o !== null) {
                            for (t.flags |= 128,
                            gs(s, !1),
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
                            return ie(pe, pe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && we() > Hi && (t.flags |= 128,
                r = !0,
                gs(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Ka(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    gs(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !de)
                        return ze(t),
                        null
                } else
                    2 * we() - s.renderingStartTime > Hi && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    gs(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = we(),
        t.sibling = null,
        n = pe.current,
        ie(pe, r ? n & 1 | 2 : n & 1),
        t) : (ze(t),
        null);
    case 22:
    case 23:
        return Cf(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? st & 1073741824 && (ze(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(D(156, t.tag))
}
function IC(e, t) {
    switch (nf(t),
    t.tag) {
    case 1:
        return rt(t.type) && Va(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Ui(),
        le(nt),
        le(We),
        ff(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return df(t),
        null;
    case 13:
        if (le(pe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(D(340));
            Bi()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return le(pe),
        null;
    case 4:
        return Ui(),
        null;
    case 10:
        return af(t.type._context),
        null;
    case 22:
    case 23:
        return Cf(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Qo = !1
  , $e = !1
  , FC = typeof WeakSet == "function" ? WeakSet : Set
  , F = null;
function mi(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                xe(e, t, r)
            }
        else
            n.current = null
}
function Vu(e, t, n) {
    try {
        n()
    } catch (r) {
        xe(e, t, r)
    }
}
var Bp = !1;
function _C(e, t) {
    if (Su = Oa,
    e = uv(),
    ef(e)) {
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
                      , f = e
                      , h = null;
                    t: for (; ; ) {
                        for (var p; f !== n || i !== 0 && f.nodeType !== 3 || (a = o + i),
                        f !== s || r !== 0 && f.nodeType !== 3 || (l = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (p = f.firstChild) !== null; )
                            h = f,
                            f = p;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (h === n && ++c === i && (a = o),
                            h === s && ++u === r && (l = o),
                            (p = f.nextSibling) !== null)
                                break;
                            f = h,
                            h = f.parentNode
                        }
                        f = p
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
    for (Cu = {
        focusedElem: e,
        selectionRange: n
    },
    Oa = !1,
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
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var y = x.memoizedProps
                                  , w = x.memoizedState
                                  , g = t.stateNode
                                  , m = g.getSnapshotBeforeUpdate(t.elementType === t.type ? y : It(t.type, y), w);
                                g.__reactInternalSnapshotBeforeUpdate = m
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(D(163))
                        }
                } catch (S) {
                    xe(t, t.return, S)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    F = e;
                    break
                }
                F = t.return
            }
    return x = Bp,
    Bp = !1,
    x
}
function Ds(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Vu(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function kl(e, t) {
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
function zu(e) {
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
function o0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    o0(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[tn],
    delete t[Xs],
    delete t[ku],
    delete t[wC],
    delete t[bC])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function a0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function $p(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || a0(e.return))
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
function Bu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = _a));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bu(e, t, n),
        e = e.sibling; e !== null; )
            Bu(e, t, n),
            e = e.sibling
}
function $u(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for ($u(e, t, n),
        e = e.sibling; e !== null; )
            $u(e, t, n),
            e = e.sibling
}
var De = null
  , zt = !1;
function Mn(e, t, n) {
    for (n = n.child; n !== null; )
        l0(e, t, n),
        n = n.sibling
}
function l0(e, t, n) {
    if (nn && typeof nn.onCommitFiberUnmount == "function")
        try {
            nn.onCommitFiberUnmount(vl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        $e || mi(n, t);
    case 6:
        var r = De
          , i = zt;
        De = null,
        Mn(e, t, n),
        De = r,
        zt = i,
        De !== null && (zt ? (e = De,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : De.removeChild(n.stateNode));
        break;
    case 18:
        De !== null && (zt ? (e = De,
        n = n.stateNode,
        e.nodeType === 8 ? wc(e.parentNode, n) : e.nodeType === 1 && wc(e, n),
        Ks(e)) : wc(De, n.stateNode));
        break;
    case 4:
        r = De,
        i = zt,
        De = n.stateNode.containerInfo,
        zt = !0,
        Mn(e, t, n),
        De = r,
        zt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!$e && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Vu(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Mn(e, t, n);
        break;
    case 1:
        if (!$e && (mi(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (a) {
                xe(n, t, a)
            }
        Mn(e, t, n);
        break;
    case 21:
        Mn(e, t, n);
        break;
    case 22:
        n.mode & 1 ? ($e = (r = $e) || n.memoizedState !== null,
        Mn(e, t, n),
        $e = r) : Mn(e, t, n);
        break;
    default:
        Mn(e, t, n)
    }
}
function Up(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new FC),
        t.forEach(function(r) {
            var i = GC.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Mt(e, t) {
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
                        De = a.stateNode,
                        zt = !1;
                        break e;
                    case 3:
                        De = a.stateNode.containerInfo,
                        zt = !0;
                        break e;
                    case 4:
                        De = a.stateNode.containerInfo,
                        zt = !0;
                        break e
                    }
                    a = a.return
                }
                if (De === null)
                    throw Error(D(160));
                l0(s, o, i),
                De = null,
                zt = !1;
                var l = i.alternate;
                l !== null && (l.return = null),
                i.return = null
            } catch (c) {
                xe(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            c0(t, e),
            t = t.sibling
}
function c0(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Mt(t, e),
        Yt(e),
        r & 4) {
            try {
                Ds(3, e, e.return),
                kl(3, e)
            } catch (y) {
                xe(e, e.return, y)
            }
            try {
                Ds(5, e, e.return)
            } catch (y) {
                xe(e, e.return, y)
            }
        }
        break;
    case 1:
        Mt(t, e),
        Yt(e),
        r & 512 && n !== null && mi(n, n.return);
        break;
    case 5:
        if (Mt(t, e),
        Yt(e),
        r & 512 && n !== null && mi(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                $s(i, "")
            } catch (y) {
                xe(e, e.return, y)
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
                    a === "input" && s.type === "radio" && s.name != null && Ry(i, s),
                    fu(a, o);
                    var c = fu(a, s);
                    for (o = 0; o < l.length; o += 2) {
                        var u = l[o]
                          , f = l[o + 1];
                        u === "style" ? Iy(i, f) : u === "dangerouslySetInnerHTML" ? Ly(i, f) : u === "children" ? $s(i, f) : Bd(i, u, f, c)
                    }
                    switch (a) {
                    case "input":
                        au(i, s);
                        break;
                    case "textarea":
                        My(i, s);
                        break;
                    case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var p = s.value;
                        p != null ? Si(i, !!s.multiple, p, !1) : h !== !!s.multiple && (s.defaultValue != null ? Si(i, !!s.multiple, s.defaultValue, !0) : Si(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Xs] = s
                } catch (y) {
                    xe(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Mt(t, e),
        Yt(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (y) {
                xe(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Mt(t, e),
        Yt(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Ks(t.containerInfo)
            } catch (y) {
                xe(e, e.return, y)
            }
        break;
    case 4:
        Mt(t, e),
        Yt(e);
        break;
    case 13:
        Mt(t, e),
        Yt(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (bf = we())),
        r & 4 && Up(e);
        break;
    case 22:
        if (u = n !== null && n.memoizedState !== null,
        e.mode & 1 ? ($e = (c = $e) || u,
        Mt(t, e),
        $e = c) : Mt(t, e),
        Yt(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !u && e.mode & 1)
                for (F = e,
                u = e.child; u !== null; ) {
                    for (f = F = u; F !== null; ) {
                        switch (h = F,
                        p = h.child,
                        h.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ds(4, h, h.return);
                            break;
                        case 1:
                            mi(h, h.return);
                            var x = h.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = h,
                                n = h.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (y) {
                                    xe(r, n, y)
                                }
                            }
                            break;
                        case 5:
                            mi(h, h.return);
                            break;
                        case 22:
                            if (h.memoizedState !== null) {
                                Hp(f);
                                continue
                            }
                        }
                        p !== null ? (p.return = h,
                        F = p) : Hp(f)
                    }
                    u = u.sibling
                }
            e: for (u = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (u === null) {
                        u = f;
                        try {
                            i = f.stateNode,
                            c ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (a = f.stateNode,
                            l = f.memoizedProps.style,
                            o = l != null && l.hasOwnProperty("display") ? l.display : null,
                            a.style.display = Oy("display", o))
                        } catch (y) {
                            xe(e, e.return, y)
                        }
                    }
                } else if (f.tag === 6) {
                    if (u === null)
                        try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (y) {
                            xe(e, e.return, y)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    u === f && (u = null),
                    f = f.return
                }
                u === f && (u = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        Mt(t, e),
        Yt(e),
        r & 4 && Up(e);
        break;
    case 21:
        break;
    default:
        Mt(t, e),
        Yt(e)
    }
}
function Yt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (a0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(D(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && ($s(i, ""),
                r.flags &= -33);
                var s = $p(e);
                $u(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , a = $p(e);
                Bu(e, a, o);
                break;
            default:
                throw Error(D(161))
            }
        } catch (l) {
            xe(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function VC(e, t, n) {
    F = e,
    u0(e)
}
function u0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
        var i = F
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Qo;
            if (!o) {
                var a = i.alternate
                  , l = a !== null && a.memoizedState !== null || $e;
                a = Qo;
                var c = $e;
                if (Qo = o,
                ($e = l) && !c)
                    for (F = i; F !== null; )
                        o = F,
                        l = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Kp(i) : l !== null ? (l.return = o,
                        F = l) : Kp(i);
                for (; s !== null; )
                    F = s,
                    u0(s),
                    s = s.sibling;
                F = i,
                Qo = a,
                $e = c
            }
            Wp(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            F = s) : Wp(e)
    }
}
function Wp(e) {
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
                        $e || kl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !$e)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : It(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && Np(t, s, r);
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
                            Np(t, o, n)
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
                                    var f = u.dehydrated;
                                    f !== null && Ks(f)
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
                        throw Error(D(163))
                    }
                $e || t.flags & 512 && zu(t)
            } catch (h) {
                xe(t, t.return, h)
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
function Hp(e) {
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
function Kp(e) {
    for (; F !== null; ) {
        var t = F;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    kl(4, t)
                } catch (l) {
                    xe(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        xe(t, i, l)
                    }
                }
                var s = t.return;
                try {
                    zu(t)
                } catch (l) {
                    xe(t, s, l)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    zu(t)
                } catch (l) {
                    xe(t, o, l)
                }
            }
        } catch (l) {
            xe(t, t.return, l)
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
var zC = Math.ceil
  , Ya = En.ReactCurrentDispatcher
  , xf = En.ReactCurrentOwner
  , Ct = En.ReactCurrentBatchConfig
  , J = 0
  , Me = null
  , Te = null
  , Oe = 0
  , st = 0
  , gi = mr(0)
  , Ne = 0
  , ro = null
  , Ur = 0
  , Pl = 0
  , wf = 0
  , Ls = null
  , et = null
  , bf = 0
  , Hi = 1 / 0
  , fn = null
  , Qa = !1
  , Uu = null
  , nr = null
  , Xo = !1
  , qn = null
  , Xa = 0
  , Os = 0
  , Wu = null
  , va = -1
  , xa = 0;
function Qe() {
    return J & 6 ? we() : va !== -1 ? va : va = we()
}
function rr(e) {
    return e.mode & 1 ? J & 2 && Oe !== 0 ? Oe & -Oe : CC.transition !== null ? (xa === 0 && (xa = qy()),
    xa) : (e = ne,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : tv(e.type)),
    e) : 1
}
function Ut(e, t, n, r) {
    if (50 < Os)
        throw Os = 0,
        Wu = null,
        Error(D(185));
    wo(e, n, r),
    (!(J & 2) || e !== Me) && (e === Me && (!(J & 2) && (Pl |= n),
    Ne === 4 && Bn(e, Oe)),
    it(e, r),
    n === 1 && J === 0 && !(t.mode & 1) && (Hi = we() + 500,
    Cl && gr()))
}
function it(e, t) {
    var n = e.callbackNode;
    CS(e, t);
    var r = La(e, e === Me ? Oe : 0);
    if (r === 0)
        n !== null && tp(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && tp(n),
        t === 1)
            e.tag === 0 ? SC(Gp.bind(null, e)) : wv(Gp.bind(null, e)),
            vC(function() {
                !(J & 6) && gr()
            }),
            n = null;
        else {
            switch (Yy(r)) {
            case 1:
                n = Kd;
                break;
            case 4:
                n = Ky;
                break;
            case 16:
                n = Da;
                break;
            case 536870912:
                n = Gy;
                break;
            default:
                n = Da
            }
            n = v0(n, d0.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function d0(e, t) {
    if (va = -1,
    xa = 0,
    J & 6)
        throw Error(D(327));
    var n = e.callbackNode;
    if (Pi() && e.callbackNode !== n)
        return null;
    var r = La(e, e === Me ? Oe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Za(e, r);
    else {
        t = r;
        var i = J;
        J |= 2;
        var s = h0();
        (Me !== e || Oe !== t) && (fn = null,
        Hi = we() + 500,
        Fr(e, t));
        do
            try {
                UC();
                break
            } catch (a) {
                f0(e, a)
            }
        while (!0);
        of(),
        Ya.current = s,
        J = i,
        Te !== null ? t = 0 : (Me = null,
        Oe = 0,
        t = Ne)
    }
    if (t !== 0) {
        if (t === 2 && (i = yu(e),
        i !== 0 && (r = i,
        t = Hu(e, i))),
        t === 1)
            throw n = ro,
            Fr(e, 0),
            Bn(e, r),
            it(e, we()),
            n;
        if (t === 6)
            Bn(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !BC(i) && (t = Za(e, r),
            t === 2 && (s = yu(e),
            s !== 0 && (r = s,
            t = Hu(e, s))),
            t === 1))
                throw n = ro,
                Fr(e, 0),
                Bn(e, r),
                it(e, we()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(D(345));
            case 2:
                Tr(e, et, fn);
                break;
            case 3:
                if (Bn(e, r),
                (r & 130023424) === r && (t = bf + 500 - we(),
                10 < t)) {
                    if (La(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        Qe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = Eu(Tr.bind(null, e, et, fn), t);
                    break
                }
                Tr(e, et, fn);
                break;
            case 4:
                if (Bn(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - $t(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = we() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zC(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Eu(Tr.bind(null, e, et, fn), r);
                    break
                }
                Tr(e, et, fn);
                break;
            case 5:
                Tr(e, et, fn);
                break;
            default:
                throw Error(D(329))
            }
        }
    }
    return it(e, we()),
    e.callbackNode === n ? d0.bind(null, e) : null
}
function Hu(e, t) {
    var n = Ls;
    return e.current.memoizedState.isDehydrated && (Fr(e, t).flags |= 256),
    e = Za(e, t),
    e !== 2 && (t = et,
    et = n,
    t !== null && Ku(t)),
    e
}
function Ku(e) {
    et === null ? et = e : et.push.apply(et, e)
}
function BC(e) {
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
                        if (!Ht(s(), i))
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
function Bn(e, t) {
    for (t &= ~wf,
    t &= ~Pl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - $t(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Gp(e) {
    if (J & 6)
        throw Error(D(327));
    Pi();
    var t = La(e, 0);
    if (!(t & 1))
        return it(e, we()),
        null;
    var n = Za(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = yu(e);
        r !== 0 && (t = r,
        n = Hu(e, r))
    }
    if (n === 1)
        throw n = ro,
        Fr(e, 0),
        Bn(e, t),
        it(e, we()),
        n;
    if (n === 6)
        throw Error(D(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Tr(e, et, fn),
    it(e, we()),
    null
}
function Sf(e, t) {
    var n = J;
    J |= 1;
    try {
        return e(t)
    } finally {
        J = n,
        J === 0 && (Hi = we() + 500,
        Cl && gr())
    }
}
function Wr(e) {
    qn !== null && qn.tag === 0 && !(J & 6) && Pi();
    var t = J;
    J |= 1;
    var n = Ct.transition
      , r = ne;
    try {
        if (Ct.transition = null,
        ne = 1,
        e)
            return e()
    } finally {
        ne = r,
        Ct.transition = n,
        J = t,
        !(J & 6) && gr()
    }
}
function Cf() {
    st = gi.current,
    le(gi)
}
function Fr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    yC(n)),
    Te !== null)
        for (n = Te.return; n !== null; ) {
            var r = n;
            switch (nf(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Va();
                break;
            case 3:
                Ui(),
                le(nt),
                le(We),
                ff();
                break;
            case 5:
                df(r);
                break;
            case 4:
                Ui();
                break;
            case 13:
                le(pe);
                break;
            case 19:
                le(pe);
                break;
            case 10:
                af(r.type._context);
                break;
            case 22:
            case 23:
                Cf()
            }
            n = n.return
        }
    if (Me = e,
    Te = e = ir(e.current, null),
    Oe = st = t,
    Ne = 0,
    ro = null,
    wf = Pl = Ur = 0,
    et = Ls = null,
    Pr !== null) {
        for (t = 0; t < Pr.length; t++)
            if (n = Pr[t],
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
        Pr = null
    }
    return e
}
function f0(e, t) {
    do {
        var n = Te;
        try {
            if (of(),
            ma.current = qa,
            Ga) {
                for (var r = ge.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                Ga = !1
            }
            if ($r = 0,
            Re = Pe = ge = null,
            Ms = !1,
            eo = 0,
            xf.current = null,
            n === null || n.return === null) {
                Ne = 1,
                ro = t,
                Te = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , a = n
                  , l = t;
                if (t = Oe,
                a.flags |= 32768,
                l !== null && typeof l == "object" && typeof l.then == "function") {
                    var c = l
                      , u = a
                      , f = u.tag;
                    if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = u.alternate;
                        h ? (u.updateQueue = h.updateQueue,
                        u.memoizedState = h.memoizedState,
                        u.lanes = h.lanes) : (u.updateQueue = null,
                        u.memoizedState = null)
                    }
                    var p = Lp(o);
                    if (p !== null) {
                        p.flags &= -257,
                        Op(p, o, a, s, t),
                        p.mode & 1 && Dp(s, c, t),
                        t = p,
                        l = c;
                        var x = t.updateQueue;
                        if (x === null) {
                            var y = new Set;
                            y.add(l),
                            t.updateQueue = y
                        } else
                            x.add(l);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Dp(s, c, t),
                            Tf();
                            break e
                        }
                        l = Error(D(426))
                    }
                } else if (de && a.mode & 1) {
                    var w = Lp(o);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256),
                        Op(w, o, a, s, t),
                        rf(Wi(l, a));
                        break e
                    }
                }
                s = l = Wi(l, a),
                Ne !== 4 && (Ne = 2),
                Ls === null ? Ls = [s] : Ls.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var g = Yv(s, l, t);
                        Pp(s, g);
                        break e;
                    case 1:
                        a = l;
                        var m = s.type
                          , v = s.stateNode;
                        if (!(s.flags & 128) && (typeof m.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (nr === null || !nr.has(v)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var S = Qv(s, a, t);
                            Pp(s, S);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            m0(n)
        } catch (C) {
            t = C,
            Te === n && n !== null && (Te = n = n.return);
            continue
        }
        break
    } while (!0)
}
function h0() {
    var e = Ya.current;
    return Ya.current = qa,
    e === null ? qa : e
}
function Tf() {
    (Ne === 0 || Ne === 3 || Ne === 2) && (Ne = 4),
    Me === null || !(Ur & 268435455) && !(Pl & 268435455) || Bn(Me, Oe)
}
function Za(e, t) {
    var n = J;
    J |= 2;
    var r = h0();
    (Me !== e || Oe !== t) && (fn = null,
    Fr(e, t));
    do
        try {
            $C();
            break
        } catch (i) {
            f0(e, i)
        }
    while (!0);
    if (of(),
    J = n,
    Ya.current = r,
    Te !== null)
        throw Error(D(261));
    return Me = null,
    Oe = 0,
    Ne
}
function $C() {
    for (; Te !== null; )
        p0(Te)
}
function UC() {
    for (; Te !== null && !pS(); )
        p0(Te)
}
function p0(e) {
    var t = y0(e.alternate, e, st);
    e.memoizedProps = e.pendingProps,
    t === null ? m0(e) : Te = t,
    xf.current = null
}
function m0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = IC(n, t),
            n !== null) {
                n.flags &= 32767,
                Te = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Ne = 6,
                Te = null;
                return
            }
        } else if (n = OC(n, t, st),
        n !== null) {
            Te = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            Te = t;
            return
        }
        Te = t = e
    } while (t !== null);
    Ne === 0 && (Ne = 5)
}
function Tr(e, t, n) {
    var r = ne
      , i = Ct.transition;
    try {
        Ct.transition = null,
        ne = 1,
        WC(e, t, n, r)
    } finally {
        Ct.transition = i,
        ne = r
    }
    return null
}
function WC(e, t, n, r) {
    do
        Pi();
    while (qn !== null);
    if (J & 6)
        throw Error(D(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(D(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (TS(e, s),
    e === Me && (Te = Me = null,
    Oe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Xo || (Xo = !0,
    v0(Da, function() {
        return Pi(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Ct.transition,
        Ct.transition = null;
        var o = ne;
        ne = 1;
        var a = J;
        J |= 4,
        xf.current = null,
        _C(e, n),
        c0(n, e),
        uC(Cu),
        Oa = !!Su,
        Cu = Su = null,
        e.current = n,
        VC(n),
        mS(),
        J = a,
        ne = o,
        Ct.transition = s
    } else
        e.current = n;
    if (Xo && (Xo = !1,
    qn = e,
    Xa = i),
    s = e.pendingLanes,
    s === 0 && (nr = null),
    vS(n.stateNode),
    it(e, we()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (Qa)
        throw Qa = !1,
        e = Uu,
        Uu = null,
        e;
    return Xa & 1 && e.tag !== 0 && Pi(),
    s = e.pendingLanes,
    s & 1 ? e === Wu ? Os++ : (Os = 0,
    Wu = e) : Os = 0,
    gr(),
    null
}
function Pi() {
    if (qn !== null) {
        var e = Yy(Xa)
          , t = Ct.transition
          , n = ne;
        try {
            if (Ct.transition = null,
            ne = 16 > e ? 16 : e,
            qn === null)
                var r = !1;
            else {
                if (e = qn,
                qn = null,
                Xa = 0,
                J & 6)
                    throw Error(D(331));
                var i = J;
                for (J |= 4,
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
                                        Ds(8, u, s)
                                    }
                                    var f = u.child;
                                    if (f !== null)
                                        f.return = u,
                                        F = f;
                                    else
                                        for (; F !== null; ) {
                                            u = F;
                                            var h = u.sibling
                                              , p = u.return;
                                            if (o0(u),
                                            u === c) {
                                                F = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = p,
                                                F = h;
                                                break
                                            }
                                            F = p
                                        }
                                }
                            }
                            var x = s.alternate;
                            if (x !== null) {
                                var y = x.child;
                                if (y !== null) {
                                    x.child = null;
                                    do {
                                        var w = y.sibling;
                                        y.sibling = null,
                                        y = w
                                    } while (y !== null)
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
                                    Ds(9, s, s.return)
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                F = g;
                                break e
                            }
                            F = s.return
                        }
                }
                var m = e.current;
                for (F = m; F !== null; ) {
                    o = F;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null)
                        v.return = o,
                        F = v;
                    else
                        e: for (o = m; F !== null; ) {
                            if (a = F,
                            a.flags & 2048)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        kl(9, a)
                                    }
                                } catch (C) {
                                    xe(a, a.return, C)
                                }
                            if (a === o) {
                                F = null;
                                break e
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                S.return = a.return,
                                F = S;
                                break e
                            }
                            F = a.return
                        }
                }
                if (J = i,
                gr(),
                nn && typeof nn.onPostCommitFiberRoot == "function")
                    try {
                        nn.onPostCommitFiberRoot(vl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n,
            Ct.transition = t
        }
    }
    return !1
}
function qp(e, t, n) {
    t = Wi(n, t),
    t = Yv(e, t, 1),
    e = tr(e, t, 1),
    t = Qe(),
    e !== null && (wo(e, 1, t),
    it(e, t))
}
function xe(e, t, n) {
    if (e.tag === 3)
        qp(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                qp(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nr === null || !nr.has(r))) {
                    e = Wi(n, e),
                    e = Qv(t, e, 1),
                    t = tr(t, e, 1),
                    e = Qe(),
                    t !== null && (wo(t, 1, e),
                    it(t, e));
                    break
                }
            }
            t = t.return
        }
}
function HC(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Qe(),
    e.pingedLanes |= e.suspendedLanes & n,
    Me === e && (Oe & n) === n && (Ne === 4 || Ne === 3 && (Oe & 130023424) === Oe && 500 > we() - bf ? Fr(e, 0) : wf |= n),
    it(e, t)
}
function g0(e, t) {
    t === 0 && (e.mode & 1 ? (t = Bo,
    Bo <<= 1,
    !(Bo & 130023424) && (Bo = 4194304)) : t = 1);
    var n = Qe();
    e = wn(e, t),
    e !== null && (wo(e, t, n),
    it(e, n))
}
function KC(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    g0(e, n)
}
function GC(e, t) {
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
        throw Error(D(314))
    }
    r !== null && r.delete(t),
    g0(e, n)
}
var y0;
y0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || nt.current)
            tt = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return tt = !1,
                LC(e, t, n);
            tt = !!(e.flags & 131072)
        }
    else
        tt = !1,
        de && t.flags & 1048576 && bv(t, $a, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        ya(e, t),
        e = t.pendingProps;
        var i = zi(t, We.current);
        ki(t, n),
        i = pf(null, t, r, e, i, n);
        var s = mf();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        rt(r) ? (s = !0,
        za(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        cf(t),
        i.updater = El,
        t.stateNode = i,
        i._reactInternals = t,
        Mu(t, r, e, n),
        t = Ou(null, t, r, !0, s, n)) : (t.tag = 0,
        de && s && tf(t),
        Ke(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (ya(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = YC(r),
            e = It(r, e),
            i) {
            case 0:
                t = Lu(null, t, r, e, n);
                break e;
            case 1:
                t = _p(null, t, r, e, n);
                break e;
            case 11:
                t = Ip(null, t, r, e, n);
                break e;
            case 14:
                t = Fp(null, t, r, It(r.type, e), n);
                break e
            }
            throw Error(D(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : It(r, i),
        Lu(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : It(r, i),
        _p(e, t, r, i, n);
    case 3:
        e: {
            if (e0(t),
            e === null)
                throw Error(D(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            Pv(e, t),
            Ha(t, r, null, n);
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
                    i = Wi(Error(D(423)), t),
                    t = Vp(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Wi(Error(D(424)), t),
                    t = Vp(e, t, r, n, i);
                    break e
                } else
                    for (at = er(t.stateNode.containerInfo.firstChild),
                    lt = t,
                    de = !0,
                    Bt = null,
                    n = Ev(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Bi(),
                r === i) {
                    t = bn(e, t, n);
                    break e
                }
                Ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Nv(t),
        e === null && ju(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        Tu(r, i) ? o = null : s !== null && Tu(r, s) && (t.flags |= 32),
        Jv(e, t),
        Ke(e, t, o, n),
        t.child;
    case 6:
        return e === null && ju(t),
        null;
    case 13:
        return t0(e, t, n);
    case 4:
        return uf(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = $i(t, null, r, n) : Ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : It(r, i),
        Ip(e, t, r, i, n);
    case 7:
        return Ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            ie(Ua, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (Ht(s.value, o)) {
                    if (s.children === i.children && !nt.current) {
                        t = bn(e, t, n);
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
                                        l = yn(-1, n & -n),
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
                                    Au(s.return, n, t),
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
                                throw Error(D(341));
                            o.lanes |= n,
                            a = o.alternate,
                            a !== null && (a.lanes |= n),
                            Au(o, n, t),
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
            Ke(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        ki(t, n),
        i = kt(i),
        r = r(i),
        t.flags |= 1,
        Ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = It(r, t.pendingProps),
        i = It(r.type, i),
        Fp(e, t, r, i, n);
    case 15:
        return Xv(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : It(r, i),
        ya(e, t),
        t.tag = 1,
        rt(r) ? (e = !0,
        za(t)) : e = !1,
        ki(t, n),
        qv(t, r, i),
        Mu(t, r, i, n),
        Ou(null, t, r, !0, e, n);
    case 19:
        return n0(e, t, n);
    case 22:
        return Zv(e, t, n)
    }
    throw Error(D(156, t.tag))
}
;
function v0(e, t) {
    return Hy(e, t)
}
function qC(e, t, n, r) {
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
function bt(e, t, n, r) {
    return new qC(e,t,n,r)
}
function Ef(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function YC(e) {
    if (typeof e == "function")
        return Ef(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Ud)
            return 11;
        if (e === Wd)
            return 14
    }
    return 2
}
function ir(e, t) {
    var n = e.alternate;
    return n === null ? (n = bt(e.tag, t, e.key, e.mode),
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
function wa(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Ef(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case oi:
            return _r(n.children, i, s, t);
        case $d:
            o = 8,
            i |= 8;
            break;
        case nu:
            return e = bt(12, n, t, i | 2),
            e.elementType = nu,
            e.lanes = s,
            e;
        case ru:
            return e = bt(13, n, t, i),
            e.elementType = ru,
            e.lanes = s,
            e;
        case iu:
            return e = bt(19, n, t, i),
            e.elementType = iu,
            e.lanes = s,
            e;
        case Ny:
            return Nl(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ky:
                    o = 10;
                    break e;
                case Py:
                    o = 9;
                    break e;
                case Ud:
                    o = 11;
                    break e;
                case Wd:
                    o = 14;
                    break e;
                case _n:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(D(130, e == null ? e : typeof e, ""))
        }
    return t = bt(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function _r(e, t, n, r) {
    return e = bt(7, e, r, t),
    e.lanes = n,
    e
}
function Nl(e, t, n, r) {
    return e = bt(22, e, r, t),
    e.elementType = Ny,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Nc(e, t, n) {
    return e = bt(6, e, null, t),
    e.lanes = n,
    e
}
function jc(e, t, n) {
    return t = bt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function QC(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = cc(0),
    this.expirationTimes = cc(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = cc(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function kf(e, t, n, r, i, s, o, a, l) {
    return e = new QC(e,t,n,a,l),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = bt(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    cf(s),
    e
}
function XC(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: si,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function x0(e) {
    if (!e)
        return ar;
    e = e._reactInternals;
    e: {
        if (Gr(e) !== e || e.tag !== 1)
            throw Error(D(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (rt(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(D(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (rt(n))
            return xv(e, n, t)
    }
    return t
}
function w0(e, t, n, r, i, s, o, a, l) {
    return e = kf(n, r, !0, e, i, s, o, a, l),
    e.context = x0(null),
    n = e.current,
    r = Qe(),
    i = rr(n),
    s = yn(r, i),
    s.callback = t ?? null,
    tr(n, s, i),
    e.current.lanes = i,
    wo(e, i, r),
    it(e, r),
    e
}
function jl(e, t, n, r) {
    var i = t.current
      , s = Qe()
      , o = rr(i);
    return n = x0(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = yn(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = tr(i, t, o),
    e !== null && (Ut(e, i, o, s),
    pa(e, i, o)),
    o
}
function Ja(e) {
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
function Yp(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Pf(e, t) {
    Yp(e, t),
    (e = e.alternate) && Yp(e, t)
}
function ZC() {
    return null
}
var b0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Nf(e) {
    this._internalRoot = e
}
Al.prototype.render = Nf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(D(409));
    jl(e, t, null, null)
}
;
Al.prototype.unmount = Nf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Wr(function() {
            jl(null, e, null, null)
        }),
        t[xn] = null
    }
}
;
function Al(e) {
    this._internalRoot = e
}
Al.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Zy();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < zn.length && t !== 0 && t < zn[n].priority; n++)
            ;
        zn.splice(n, 0, e),
        n === 0 && ev(e)
    }
}
;
function jf(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Rl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Qp() {}
function JC(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var c = Ja(o);
                s.call(c)
            }
        }
        var o = w0(t, r, e, 0, null, !1, !1, "", Qp);
        return e._reactRootContainer = o,
        e[xn] = o.current,
        Ys(e.nodeType === 8 ? e.parentNode : e),
        Wr(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function() {
            var c = Ja(l);
            a.call(c)
        }
    }
    var l = kf(e, 0, !1, null, null, !1, !1, "", Qp);
    return e._reactRootContainer = l,
    e[xn] = l.current,
    Ys(e.nodeType === 8 ? e.parentNode : e),
    Wr(function() {
        jl(t, l, n, r)
    }),
    l
}
function Ml(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var a = i;
            i = function() {
                var l = Ja(o);
                a.call(l)
            }
        }
        jl(t, o, e, i)
    } else
        o = JC(n, t, e, i, r);
    return Ja(o)
}
Qy = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Cs(t.pendingLanes);
            n !== 0 && (Gd(t, n | 1),
            it(t, we()),
            !(J & 6) && (Hi = we() + 500,
            gr()))
        }
        break;
    case 13:
        Wr(function() {
            var r = wn(e, 1);
            if (r !== null) {
                var i = Qe();
                Ut(r, e, 1, i)
            }
        }),
        Pf(e, 1)
    }
}
;
qd = function(e) {
    if (e.tag === 13) {
        var t = wn(e, 134217728);
        if (t !== null) {
            var n = Qe();
            Ut(t, e, 134217728, n)
        }
        Pf(e, 134217728)
    }
}
;
Xy = function(e) {
    if (e.tag === 13) {
        var t = rr(e)
          , n = wn(e, t);
        if (n !== null) {
            var r = Qe();
            Ut(n, e, t, r)
        }
        Pf(e, t)
    }
}
;
Zy = function() {
    return ne
}
;
Jy = function(e, t) {
    var n = ne;
    try {
        return ne = e,
        t()
    } finally {
        ne = n
    }
}
;
pu = function(e, t, n) {
    switch (t) {
    case "input":
        if (au(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Sl(r);
                    if (!i)
                        throw Error(D(90));
                    Ay(r),
                    au(r, i)
                }
            }
        }
        break;
    case "textarea":
        My(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Si(e, !!n.multiple, t, !1)
    }
}
;
Vy = Sf;
zy = Wr;
var eT = {
    usingClientEntryPoint: !1,
    Events: [So, ui, Sl, Fy, _y, Sf]
}
  , ys = {
    findFiberByHostInstance: kr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , tT = {
    bundleType: ys.bundleType,
    version: ys.version,
    rendererPackageName: ys.rendererPackageName,
    rendererConfig: ys.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: En.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Uy(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: ys.findFiberByHostInstance || ZC,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zo.isDisabled && Zo.supportsFiber)
        try {
            vl = Zo.inject(tT),
            nn = Zo
        } catch {}
}
ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eT;
ht.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!jf(t))
        throw Error(D(200));
    return XC(e, t, null, n)
}
;
ht.createRoot = function(e, t) {
    if (!jf(e))
        throw Error(D(299));
    var n = !1
      , r = ""
      , i = b0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = kf(e, 1, !1, null, null, n, !1, r, i),
    e[xn] = t.current,
    Ys(e.nodeType === 8 ? e.parentNode : e),
    new Nf(t)
}
;
ht.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","),
        Error(D(268, e)));
    return e = Uy(t),
    e = e === null ? null : e.stateNode,
    e
}
;
ht.flushSync = function(e) {
    return Wr(e)
}
;
ht.hydrate = function(e, t, n) {
    if (!Rl(t))
        throw Error(D(200));
    return Ml(null, e, t, !0, n)
}
;
ht.hydrateRoot = function(e, t, n) {
    if (!jf(e))
        throw Error(D(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = b0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = w0(t, null, e, 1, n ?? null, i, !1, s, o),
    e[xn] = t.current,
    Ys(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Al(t)
}
;
ht.render = function(e, t, n) {
    if (!Rl(t))
        throw Error(D(200));
    return Ml(null, e, t, !1, n)
}
;
ht.unmountComponentAtNode = function(e) {
    if (!Rl(e))
        throw Error(D(40));
    return e._reactRootContainer ? (Wr(function() {
        Ml(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[xn] = null
        })
    }),
    !0) : !1
}
;
ht.unstable_batchedUpdates = Sf;
ht.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Rl(n))
        throw Error(D(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(D(38));
    return Ml(e, t, n, !1, r)
}
;
ht.version = "18.3.1-next-f1338f8080-20240426";
function S0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0)
        } catch (e) {
            console.error(e)
        }
}
S0(),
Sy.exports = ht;
var To = Sy.exports;
const C0 = uy(To);
var T0, Xp = To;
T0 = Xp.createRoot,
Xp.hydrateRoot;
const nT = 1
  , rT = 1e6;
let Ac = 0;
function iT() {
    return Ac = (Ac + 1) % Number.MAX_SAFE_INTEGER,
    Ac.toString()
}
const Rc = new Map
  , Zp = e => {
    if (Rc.has(e))
        return;
    const t = setTimeout( () => {
        Rc.delete(e),
        Is({
            type: "REMOVE_TOAST",
            toastId: e
        })
    }
    , rT);
    Rc.set(e, t)
}
  , sT = (e, t) => {
    switch (t.type) {
    case "ADD_TOAST":
        return {
            ...e,
            toasts: [t.toast, ...e.toasts].slice(0, nT)
        };
    case "UPDATE_TOAST":
        return {
            ...e,
            toasts: e.toasts.map(n => n.id === t.toast.id ? {
                ...n,
                ...t.toast
            } : n)
        };
    case "DISMISS_TOAST":
        {
            const {toastId: n} = t;
            return n ? Zp(n) : e.toasts.forEach(r => {
                Zp(r.id)
            }
            ),
            {
                ...e,
                toasts: e.toasts.map(r => r.id === n || n === void 0 ? {
                    ...r,
                    open: !1
                } : r)
            }
        }
    case "REMOVE_TOAST":
        return t.toastId === void 0 ? {
            ...e,
            toasts: []
        } : {
            ...e,
            toasts: e.toasts.filter(n => n.id !== t.toastId)
        }
    }
}
  , ba = [];
let Sa = {
    toasts: []
};
function Is(e) {
    Sa = sT(Sa, e),
    ba.forEach(t => {
        t(Sa)
    }
    )
}
function oT({...e}) {
    const t = iT()
      , n = i => Is({
        type: "UPDATE_TOAST",
        toast: {
            ...i,
            id: t
        }
    })
      , r = () => Is({
        type: "DISMISS_TOAST",
        toastId: t
    });
    return Is({
        type: "ADD_TOAST",
        toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: i => {
                i || r()
            }
        }
    }),
    {
        id: t,
        dismiss: r,
        update: n
    }
}
function E0() {
    const [e,t] = b.useState(Sa);
    return b.useEffect( () => (ba.push(t),
    () => {
        const n = ba.indexOf(t);
        n > -1 && ba.splice(n, 1)
    }
    ), [e]),
    {
        ...e,
        toast: oT,
        dismiss: n => Is({
            type: "DISMISS_TOAST",
            toastId: n
        })
    }
}
function be(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(i) {
        if (e == null || e(i),
        n === !1 || !i.defaultPrevented)
            return t == null ? void 0 : t(i)
    }
}
function Jp(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function k0(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = Jp(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : Jp(e[i], null)
                }
            }
    }
}
function ft(...e) {
    return b.useCallback(k0(...e), e)
}
function Ji(e, t=[]) {
    let n = [];
    function r(s, o) {
        const a = b.createContext(o)
          , l = n.length;
        n = [...n, o];
        const c = f => {
            var g;
            const {scope: h, children: p, ...x} = f
              , y = ((g = h == null ? void 0 : h[e]) == null ? void 0 : g[l]) || a
              , w = b.useMemo( () => x, Object.values(x));
            return d.jsx(y.Provider, {
                value: w,
                children: p
            })
        }
        ;
        c.displayName = s + "Provider";
        function u(f, h) {
            var y;
            const p = ((y = h == null ? void 0 : h[e]) == null ? void 0 : y[l]) || a
              , x = b.useContext(p);
            if (x)
                return x;
            if (o !== void 0)
                return o;
            throw new Error(`\`${f}\` must be used within \`${s}\``)
        }
        return [c, u]
    }
    const i = () => {
        const s = n.map(o => b.createContext(o));
        return function(a) {
            const l = (a == null ? void 0 : a[e]) || s;
            return b.useMemo( () => ({
                [`__scope${e}`]: {
                    ...a,
                    [e]: l
                }
            }), [a, l])
        }
    }
    ;
    return i.scopeName = e,
    [r, aT(i, ...t)]
}
function aT(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(i => ({
            useScope: i(),
            scopeName: i.scopeName
        }));
        return function(s) {
            const o = r.reduce( (a, {useScope: l, scopeName: c}) => {
                const f = l(s)[`__scope${c}`];
                return {
                    ...a,
                    ...f
                }
            }
            , {});
            return b.useMemo( () => ({
                [`__scope${t.scopeName}`]: o
            }), [o])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function el(e) {
    const t = cT(e)
      , n = b.forwardRef( (r, i) => {
        const {children: s, ...o} = r
          , a = b.Children.toArray(s)
          , l = a.find(dT);
        if (l) {
            const c = l.props.children
              , u = a.map(f => f === l ? b.Children.count(c) > 1 ? b.Children.only(null) : b.isValidElement(c) ? c.props.children : null : f);
            return d.jsx(t, {
                ...o,
                ref: i,
                children: b.isValidElement(c) ? b.cloneElement(c, void 0, u) : null
            })
        }
        return d.jsx(t, {
            ...o,
            ref: i,
            children: s
        })
    }
    );
    return n.displayName = `${e}.Slot`,
    n
}
var lT = el("Slot");
function cT(e) {
    const t = b.forwardRef( (n, r) => {
        const {children: i, ...s} = n;
        if (b.isValidElement(i)) {
            const o = hT(i)
              , a = fT(s, i.props);
            return i.type !== b.Fragment && (a.ref = r ? k0(r, o) : o),
            b.cloneElement(i, a)
        }
        return b.Children.count(i) > 1 ? b.Children.only(null) : null
    }
    );
    return t.displayName = `${e}.SlotClone`,
    t
}
var P0 = Symbol("radix.slottable");
function uT(e) {
    const t = ({children: n}) => d.jsx(d.Fragment, {
        children: n
    });
    return t.displayName = `${e}.Slottable`,
    t.__radixId = P0,
    t
}
function dT(e) {
    return b.isValidElement(e) && typeof e.type == "function" && "__radixId"in e.type && e.type.__radixId === P0
}
function fT(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const i = e[r]
          , s = t[r];
        /^on[A-Z]/.test(r) ? i && s ? n[r] = (...a) => {
            const l = s(...a);
            return i(...a),
            l
        }
        : i && (n[r] = i) : r === "style" ? n[r] = {
            ...i,
            ...s
        } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function hT(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function N0(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Ji(t)
      , [i,s] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , o = y => {
        const {scope: w, children: g} = y
          , m = M.useRef(null)
          , v = M.useRef(new Map).current;
        return d.jsx(i, {
            scope: w,
            itemMap: v,
            collectionRef: m,
            children: g
        })
    }
    ;
    o.displayName = t;
    const a = e + "CollectionSlot"
      , l = el(a)
      , c = M.forwardRef( (y, w) => {
        const {scope: g, children: m} = y
          , v = s(a, g)
          , S = ft(w, v.collectionRef);
        return d.jsx(l, {
            ref: S,
            children: m
        })
    }
    );
    c.displayName = a;
    const u = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , h = el(u)
      , p = M.forwardRef( (y, w) => {
        const {scope: g, children: m, ...v} = y
          , S = M.useRef(null)
          , C = ft(w, S)
          , T = s(u, g);
        return M.useEffect( () => (T.itemMap.set(S, {
            ref: S,
            ...v
        }),
        () => void T.itemMap.delete(S))),
        d.jsx(h, {
            [f]: "",
            ref: C,
            children: m
        })
    }
    );
    p.displayName = u;
    function x(y) {
        const w = s(e + "CollectionConsumer", y);
        return M.useCallback( () => {
            const m = w.collectionRef.current;
            if (!m)
                return [];
            const v = Array.from(m.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (T, E) => v.indexOf(T.ref.current) - v.indexOf(E.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: o,
        Slot: c,
        ItemSlot: p
    }, x, r]
}
var pT = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Ae = pT.reduce( (e, t) => {
    const n = el(`Primitive.${t}`)
      , r = b.forwardRef( (i, s) => {
        const {asChild: o, ...a} = i
          , l = o ? n : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        d.jsx(l, {
            ...a,
            ref: s
        })
    }
    );
    return r.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: r
    }
}
, {});
function j0(e, t) {
    e && To.flushSync( () => e.dispatchEvent(t))
}
function lr(e) {
    const t = b.useRef(e);
    return b.useEffect( () => {
        t.current = e
    }
    ),
    b.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function mT(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = lr(e);
    b.useEffect( () => {
        const r = i => {
            i.key === "Escape" && n(i)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var gT = "DismissableLayer", Gu = "dismissableLayer.update", yT = "dismissableLayer.pointerDownOutside", vT = "dismissableLayer.focusOutside", em, A0 = b.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Af = b.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: s, onInteractOutside: o, onDismiss: a, ...l} = e
      , c = b.useContext(A0)
      , [u,f] = b.useState(null)
      , h = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,p] = b.useState({})
      , x = ft(t, E => f(E))
      , y = Array.from(c.layers)
      , [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1)
      , g = y.indexOf(w)
      , m = u ? y.indexOf(u) : -1
      , v = c.layersWithOutsidePointerEventsDisabled.size > 0
      , S = m >= g
      , C = wT(E => {
        const k = E.target
          , A = [...c.branches].some(R => R.contains(k));
        !S || A || (i == null || i(E),
        o == null || o(E),
        E.defaultPrevented || a == null || a())
    }
    , h)
      , T = bT(E => {
        const k = E.target;
        [...c.branches].some(R => R.contains(k)) || (s == null || s(E),
        o == null || o(E),
        E.defaultPrevented || a == null || a())
    }
    , h);
    return mT(E => {
        m === c.layers.size - 1 && (r == null || r(E),
        !E.defaultPrevented && a && (E.preventDefault(),
        a()))
    }
    , h),
    b.useEffect( () => {
        if (u)
            return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (em = h.body.style.pointerEvents,
            h.body.style.pointerEvents = "none"),
            c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            tm(),
            () => {
                n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = em)
            }
    }
    , [u, h, n, c]),
    b.useEffect( () => () => {
        u && (c.layers.delete(u),
        c.layersWithOutsidePointerEventsDisabled.delete(u),
        tm())
    }
    , [u, c]),
    b.useEffect( () => {
        const E = () => p({});
        return document.addEventListener(Gu, E),
        () => document.removeEventListener(Gu, E)
    }
    , []),
    d.jsx(Ae.div, {
        ...l,
        ref: x,
        style: {
            pointerEvents: v ? S ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: be(e.onFocusCapture, T.onFocusCapture),
        onBlurCapture: be(e.onBlurCapture, T.onBlurCapture),
        onPointerDownCapture: be(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Af.displayName = gT;
var xT = "DismissableLayerBranch"
  , R0 = b.forwardRef( (e, t) => {
    const n = b.useContext(A0)
      , r = b.useRef(null)
      , i = ft(t, r);
    return b.useEffect( () => {
        const s = r.current;
        if (s)
            return n.branches.add(s),
            () => {
                n.branches.delete(s)
            }
    }
    , [n.branches]),
    d.jsx(Ae.div, {
        ...e,
        ref: i
    })
}
);
R0.displayName = xT;
function wT(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = lr(e)
      , r = b.useRef(!1)
      , i = b.useRef( () => {}
    );
    return b.useEffect( () => {
        const s = a => {
            if (a.target && !r.current) {
                let l = function() {
                    M0(yT, n, c, {
                        discrete: !0
                    })
                };
                const c = {
                    originalEvent: a
                };
                a.pointerType === "touch" ? (t.removeEventListener("click", i.current),
                i.current = l,
                t.addEventListener("click", i.current, {
                    once: !0
                })) : l()
            } else
                t.removeEventListener("click", i.current);
            r.current = !1
        }
          , o = window.setTimeout( () => {
            t.addEventListener("pointerdown", s)
        }
        , 0);
        return () => {
            window.clearTimeout(o),
            t.removeEventListener("pointerdown", s),
            t.removeEventListener("click", i.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function bT(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = lr(e)
      , r = b.useRef(!1);
    return b.useEffect( () => {
        const i = s => {
            s.target && !r.current && M0(vT, n, {
                originalEvent: s
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", i),
        () => t.removeEventListener("focusin", i)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function tm() {
    const e = new CustomEvent(Gu);
    document.dispatchEvent(e)
}
function M0(e, t, n, {discrete: r}) {
    const i = n.originalEvent.target
      , s = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? j0(i, s) : i.dispatchEvent(s)
}
var ST = Af
  , CT = R0
  , on = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {}
  , TT = "Portal"
  , D0 = b.forwardRef( (e, t) => {
    var a;
    const {container: n, ...r} = e
      , [i,s] = b.useState(!1);
    on( () => s(!0), []);
    const o = n || i && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
    return o ? C0.createPortal(d.jsx(Ae.div, {
        ...r,
        ref: t
    }), o) : null
}
);
D0.displayName = TT;
function ET(e, t) {
    return b.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Dl = e => {
    const {present: t, children: n} = e
      , r = kT(t)
      , i = typeof n == "function" ? n({
        present: r.isPresent
    }) : b.Children.only(n)
      , s = ft(r.ref, PT(i));
    return typeof n == "function" || r.isPresent ? b.cloneElement(i, {
        ref: s
    }) : null
}
;
Dl.displayName = "Presence";
function kT(e) {
    const [t,n] = b.useState()
      , r = b.useRef(null)
      , i = b.useRef(e)
      , s = b.useRef("none")
      , o = e ? "mounted" : "unmounted"
      , [a,l] = ET(o, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return b.useEffect( () => {
        const c = Jo(r.current);
        s.current = a === "mounted" ? c : "none"
    }
    , [a]),
    on( () => {
        const c = r.current
          , u = i.current;
        if (u !== e) {
            const h = s.current
              , p = Jo(c);
            e ? l("MOUNT") : p === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && h !== p ? "ANIMATION_OUT" : "UNMOUNT"),
            i.current = e
        }
    }
    , [e, l]),
    on( () => {
        if (t) {
            let c;
            const u = t.ownerDocument.defaultView ?? window
              , f = p => {
                const y = Jo(r.current).includes(p.animationName);
                if (p.target === t && y && (l("ANIMATION_END"),
                !i.current)) {
                    const w = t.style.animationFillMode;
                    t.style.animationFillMode = "forwards",
                    c = u.setTimeout( () => {
                        t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w)
                    }
                    )
                }
            }
              , h = p => {
                p.target === t && (s.current = Jo(r.current))
            }
            ;
            return t.addEventListener("animationstart", h),
            t.addEventListener("animationcancel", f),
            t.addEventListener("animationend", f),
            () => {
                u.clearTimeout(c),
                t.removeEventListener("animationstart", h),
                t.removeEventListener("animationcancel", f),
                t.removeEventListener("animationend", f)
            }
        } else
            l("ANIMATION_END")
    }
    , [t, l]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(a),
        ref: b.useCallback(c => {
            r.current = c ? getComputedStyle(c) : null,
            n(c)
        }
        , [])
    }
}
function Jo(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function PT(e) {
    var r, i;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var NT = _d[" useInsertionEffect ".trim().toString()] || on;
function Ll({prop: e, defaultProp: t, onChange: n= () => {}
, caller: r}) {
    const [i,s,o] = jT({
        defaultProp: t,
        onChange: n
    })
      , a = e !== void 0
      , l = a ? e : i;
    {
        const u = b.useRef(e !== void 0);
        b.useEffect( () => {
            const f = u.current;
            f !== a && console.warn(`${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            u.current = a
        }
        , [a, r])
    }
    const c = b.useCallback(u => {
        var f;
        if (a) {
            const h = AT(u) ? u(e) : u;
            h !== e && ((f = o.current) == null || f.call(o, h))
        } else
            s(u)
    }
    , [a, e, s, o]);
    return [l, c]
}
function jT({defaultProp: e, onChange: t}) {
    const [n,r] = b.useState(e)
      , i = b.useRef(n)
      , s = b.useRef(t);
    return NT( () => {
        s.current = t
    }
    , [t]),
    b.useEffect( () => {
        var o;
        i.current !== n && ((o = s.current) == null || o.call(s, n),
        i.current = n)
    }
    , [n, i]),
    [n, r, s]
}
function AT(e) {
    return typeof e == "function"
}
var RT = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , MT = "VisuallyHidden"
  , Ol = b.forwardRef( (e, t) => d.jsx(Ae.span, {
    ...e,
    ref: t,
    style: {
        ...RT,
        ...e.style
    }
}));
Ol.displayName = MT;
var DT = Ol
  , Rf = "ToastProvider"
  , [Mf,LT,OT] = N0("Toast")
  , [L0,yL] = Ji("Toast", [OT])
  , [IT,Il] = L0(Rf)
  , O0 = e => {
    const {__scopeToast: t, label: n="Notification", duration: r=5e3, swipeDirection: i="right", swipeThreshold: s=50, children: o} = e
      , [a,l] = b.useState(null)
      , [c,u] = b.useState(0)
      , f = b.useRef(!1)
      , h = b.useRef(!1);
    return n.trim() || console.error(`Invalid prop \`label\` supplied to \`${Rf}\`. Expected non-empty \`string\`.`),
    d.jsx(Mf.Provider, {
        scope: t,
        children: d.jsx(IT, {
            scope: t,
            label: n,
            duration: r,
            swipeDirection: i,
            swipeThreshold: s,
            toastCount: c,
            viewport: a,
            onViewportChange: l,
            onToastAdd: b.useCallback( () => u(p => p + 1), []),
            onToastRemove: b.useCallback( () => u(p => p - 1), []),
            isFocusedToastEscapeKeyDownRef: f,
            isClosePausedRef: h,
            children: o
        })
    })
}
;
O0.displayName = Rf;
var I0 = "ToastViewport"
  , FT = ["F8"]
  , qu = "toast.viewportPause"
  , Yu = "toast.viewportResume"
  , F0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, hotkey: r=FT, label: i="Notifications ({hotkey})", ...s} = e
      , o = Il(I0, n)
      , a = LT(n)
      , l = b.useRef(null)
      , c = b.useRef(null)
      , u = b.useRef(null)
      , f = b.useRef(null)
      , h = ft(t, f, o.onViewportChange)
      , p = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , x = o.toastCount > 0;
    b.useEffect( () => {
        const w = g => {
            var v;
            r.length !== 0 && r.every(S => g[S] || g.code === S) && ((v = f.current) == null || v.focus())
        }
        ;
        return document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
    }
    , [r]),
    b.useEffect( () => {
        const w = l.current
          , g = f.current;
        if (x && w && g) {
            const m = () => {
                if (!o.isClosePausedRef.current) {
                    const T = new CustomEvent(qu);
                    g.dispatchEvent(T),
                    o.isClosePausedRef.current = !0
                }
            }
              , v = () => {
                if (o.isClosePausedRef.current) {
                    const T = new CustomEvent(Yu);
                    g.dispatchEvent(T),
                    o.isClosePausedRef.current = !1
                }
            }
              , S = T => {
                !w.contains(T.relatedTarget) && v()
            }
              , C = () => {
                w.contains(document.activeElement) || v()
            }
            ;
            return w.addEventListener("focusin", m),
            w.addEventListener("focusout", S),
            w.addEventListener("pointermove", m),
            w.addEventListener("pointerleave", C),
            window.addEventListener("blur", m),
            window.addEventListener("focus", v),
            () => {
                w.removeEventListener("focusin", m),
                w.removeEventListener("focusout", S),
                w.removeEventListener("pointermove", m),
                w.removeEventListener("pointerleave", C),
                window.removeEventListener("blur", m),
                window.removeEventListener("focus", v)
            }
        }
    }
    , [x, o.isClosePausedRef]);
    const y = b.useCallback( ({tabbingDirection: w}) => {
        const m = a().map(v => {
            const S = v.ref.current
              , C = [S, ...QT(S)];
            return w === "forwards" ? C : C.reverse()
        }
        );
        return (w === "forwards" ? m.reverse() : m).flat()
    }
    , [a]);
    return b.useEffect( () => {
        const w = f.current;
        if (w) {
            const g = m => {
                var C, T, E;
                const v = m.altKey || m.ctrlKey || m.metaKey;
                if (m.key === "Tab" && !v) {
                    const k = document.activeElement
                      , A = m.shiftKey;
                    if (m.target === w && A) {
                        (C = c.current) == null || C.focus();
                        return
                    }
                    const I = y({
                        tabbingDirection: A ? "backwards" : "forwards"
                    })
                      , K = I.findIndex(L => L === k);
                    Mc(I.slice(K + 1)) ? m.preventDefault() : A ? (T = c.current) == null || T.focus() : (E = u.current) == null || E.focus()
                }
            }
            ;
            return w.addEventListener("keydown", g),
            () => w.removeEventListener("keydown", g)
        }
    }
    , [a, y]),
    d.jsxs(CT, {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", p),
        tabIndex: -1,
        style: {
            pointerEvents: x ? void 0 : "none"
        },
        children: [x && d.jsx(Qu, {
            ref: c,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "forwards"
                });
                Mc(w)
            }
        }), d.jsx(Mf.Slot, {
            scope: n,
            children: d.jsx(Ae.ol, {
                tabIndex: -1,
                ...s,
                ref: h
            })
        }), x && d.jsx(Qu, {
            ref: u,
            onFocusFromOutsideViewport: () => {
                const w = y({
                    tabbingDirection: "backwards"
                });
                Mc(w)
            }
        })]
    })
}
);
F0.displayName = I0;
var _0 = "ToastFocusProxy"
  , Qu = b.forwardRef( (e, t) => {
    const {__scopeToast: n, onFocusFromOutsideViewport: r, ...i} = e
      , s = Il(_0, n);
    return d.jsx(Ol, {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: {
            position: "fixed"
        },
        onFocus: o => {
            var c;
            const a = o.relatedTarget;
            !((c = s.viewport) != null && c.contains(a)) && r()
        }
    })
}
);
Qu.displayName = _0;
var Eo = "Toast"
  , _T = "toast.swipeStart"
  , VT = "toast.swipeMove"
  , zT = "toast.swipeCancel"
  , BT = "toast.swipeEnd"
  , V0 = b.forwardRef( (e, t) => {
    const {forceMount: n, open: r, defaultOpen: i, onOpenChange: s, ...o} = e
      , [a,l] = Ll({
        prop: r,
        defaultProp: i ?? !0,
        onChange: s,
        caller: Eo
    });
    return d.jsx(Dl, {
        present: n || a,
        children: d.jsx(WT, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: lr(e.onPause),
            onResume: lr(e.onResume),
            onSwipeStart: be(e.onSwipeStart, c => {
                c.currentTarget.setAttribute("data-swipe", "start")
            }
            ),
            onSwipeMove: be(e.onSwipeMove, c => {
                const {x: u, y: f} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "move"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`)
            }
            ),
            onSwipeCancel: be(e.onSwipeCancel, c => {
                c.currentTarget.setAttribute("data-swipe", "cancel"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
            }
            ),
            onSwipeEnd: be(e.onSwipeEnd, c => {
                const {x: u, y: f} = c.detail.delta;
                c.currentTarget.setAttribute("data-swipe", "end"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`),
                c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                l(!1)
            }
            )
        })
    })
}
);
V0.displayName = Eo;
var [$T,UT] = L0(Eo, {
    onClose() {}
})
  , WT = b.forwardRef( (e, t) => {
    const {__scopeToast: n, type: r="foreground", duration: i, open: s, onClose: o, onEscapeKeyDown: a, onPause: l, onResume: c, onSwipeStart: u, onSwipeMove: f, onSwipeCancel: h, onSwipeEnd: p, ...x} = e
      , y = Il(Eo, n)
      , [w,g] = b.useState(null)
      , m = ft(t, L => g(L))
      , v = b.useRef(null)
      , S = b.useRef(null)
      , C = i || y.duration
      , T = b.useRef(0)
      , E = b.useRef(C)
      , k = b.useRef(0)
      , {onToastAdd: A, onToastRemove: R} = y
      , z = lr( () => {
        var q;
        (w == null ? void 0 : w.contains(document.activeElement)) && ((q = y.viewport) == null || q.focus()),
        o()
    }
    )
      , I = b.useCallback(L => {
        !L || L === 1 / 0 || (window.clearTimeout(k.current),
        T.current = new Date().getTime(),
        k.current = window.setTimeout(z, L))
    }
    , [z]);
    b.useEffect( () => {
        const L = y.viewport;
        if (L) {
            const q = () => {
                I(E.current),
                c == null || c()
            }
              , $ = () => {
                const V = new Date().getTime() - T.current;
                E.current = E.current - V,
                window.clearTimeout(k.current),
                l == null || l()
            }
            ;
            return L.addEventListener(qu, $),
            L.addEventListener(Yu, q),
            () => {
                L.removeEventListener(qu, $),
                L.removeEventListener(Yu, q)
            }
        }
    }
    , [y.viewport, C, l, c, I]),
    b.useEffect( () => {
        s && !y.isClosePausedRef.current && I(C)
    }
    , [s, C, y.isClosePausedRef, I]),
    b.useEffect( () => (A(),
    () => R()), [A, R]);
    const K = b.useMemo( () => w ? K0(w) : null, [w]);
    return y.viewport ? d.jsxs(d.Fragment, {
        children: [K && d.jsx(HT, {
            __scopeToast: n,
            role: "status",
            "aria-live": r === "foreground" ? "assertive" : "polite",
            "aria-atomic": !0,
            children: K
        }), d.jsx($T, {
            scope: n,
            onClose: z,
            children: To.createPortal(d.jsx(Mf.ItemSlot, {
                scope: n,
                children: d.jsx(ST, {
                    asChild: !0,
                    onEscapeKeyDown: be(a, () => {
                        y.isFocusedToastEscapeKeyDownRef.current || z(),
                        y.isFocusedToastEscapeKeyDownRef.current = !1
                    }
                    ),
                    children: d.jsx(Ae.li, {
                        role: "status",
                        "aria-live": "off",
                        "aria-atomic": !0,
                        tabIndex: 0,
                        "data-state": s ? "open" : "closed",
                        "data-swipe-direction": y.swipeDirection,
                        ...x,
                        ref: m,
                        style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style
                        },
                        onKeyDown: be(e.onKeyDown, L => {
                            L.key === "Escape" && (a == null || a(L.nativeEvent),
                            L.nativeEvent.defaultPrevented || (y.isFocusedToastEscapeKeyDownRef.current = !0,
                            z()))
                        }
                        ),
                        onPointerDown: be(e.onPointerDown, L => {
                            L.button === 0 && (v.current = {
                                x: L.clientX,
                                y: L.clientY
                            })
                        }
                        ),
                        onPointerMove: be(e.onPointerMove, L => {
                            if (!v.current)
                                return;
                            const q = L.clientX - v.current.x
                              , $ = L.clientY - v.current.y
                              , V = !!S.current
                              , P = ["left", "right"].includes(y.swipeDirection)
                              , j = ["left", "up"].includes(y.swipeDirection) ? Math.min : Math.max
                              , O = P ? j(0, q) : 0
                              , U = P ? 0 : j(0, $)
                              , B = L.pointerType === "touch" ? 10 : 2
                              , Y = {
                                x: O,
                                y: U
                            }
                              , X = {
                                originalEvent: L,
                                delta: Y
                            };
                            V ? (S.current = Y,
                            ea(VT, f, X, {
                                discrete: !1
                            })) : nm(Y, y.swipeDirection, B) ? (S.current = Y,
                            ea(_T, u, X, {
                                discrete: !1
                            }),
                            L.target.setPointerCapture(L.pointerId)) : (Math.abs(q) > B || Math.abs($) > B) && (v.current = null)
                        }
                        ),
                        onPointerUp: be(e.onPointerUp, L => {
                            const q = S.current
                              , $ = L.target;
                            if ($.hasPointerCapture(L.pointerId) && $.releasePointerCapture(L.pointerId),
                            S.current = null,
                            v.current = null,
                            q) {
                                const V = L.currentTarget
                                  , P = {
                                    originalEvent: L,
                                    delta: q
                                };
                                nm(q, y.swipeDirection, y.swipeThreshold) ? ea(BT, p, P, {
                                    discrete: !0
                                }) : ea(zT, h, P, {
                                    discrete: !0
                                }),
                                V.addEventListener("click", j => j.preventDefault(), {
                                    once: !0
                                })
                            }
                        }
                        )
                    })
                })
            }), y.viewport)
        })]
    }) : null
}
)
  , HT = e => {
    const {__scopeToast: t, children: n, ...r} = e
      , i = Il(Eo, t)
      , [s,o] = b.useState(!1)
      , [a,l] = b.useState(!1);
    return qT( () => o(!0)),
    b.useEffect( () => {
        const c = window.setTimeout( () => l(!0), 1e3);
        return () => window.clearTimeout(c)
    }
    , []),
    a ? null : d.jsx(D0, {
        asChild: !0,
        children: d.jsx(Ol, {
            ...r,
            children: s && d.jsxs(d.Fragment, {
                children: [i.label, " ", n]
            })
        })
    })
}
  , KT = "ToastTitle"
  , z0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return d.jsx(Ae.div, {
        ...r,
        ref: t
    })
}
);
z0.displayName = KT;
var GT = "ToastDescription"
  , B0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e;
    return d.jsx(Ae.div, {
        ...r,
        ref: t
    })
}
);
B0.displayName = GT;
var $0 = "ToastAction"
  , U0 = b.forwardRef( (e, t) => {
    const {altText: n, ...r} = e;
    return n.trim() ? d.jsx(H0, {
        altText: n,
        asChild: !0,
        children: d.jsx(Df, {
            ...r,
            ref: t
        })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${$0}\`. Expected non-empty \`string\`.`),
    null)
}
);
U0.displayName = $0;
var W0 = "ToastClose"
  , Df = b.forwardRef( (e, t) => {
    const {__scopeToast: n, ...r} = e
      , i = UT(W0, n);
    return d.jsx(H0, {
        asChild: !0,
        children: d.jsx(Ae.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: be(e.onClick, i.onClose)
        })
    })
}
);
Df.displayName = W0;
var H0 = b.forwardRef( (e, t) => {
    const {__scopeToast: n, altText: r, ...i} = e;
    return d.jsx(Ae.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...i,
        ref: t
    })
}
);
function K0(e) {
    const t = [];
    return Array.from(e.childNodes).forEach(r => {
        if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        YT(r)) {
            const i = r.ariaHidden || r.hidden || r.style.display === "none"
              , s = r.dataset.radixToastAnnounceExclude === "";
            if (!i)
                if (s) {
                    const o = r.dataset.radixToastAnnounceAlt;
                    o && t.push(o)
                } else
                    t.push(...K0(r))
        }
    }
    ),
    t
}
function ea(e, t, n, {discrete: r}) {
    const i = n.originalEvent.currentTarget
      , s = new CustomEvent(e,{
        bubbles: !0,
        cancelable: !0,
        detail: n
    });
    t && i.addEventListener(e, t, {
        once: !0
    }),
    r ? j0(i, s) : i.dispatchEvent(s)
}
var nm = (e, t, n=0) => {
    const r = Math.abs(e.x)
      , i = Math.abs(e.y)
      , s = r > i;
    return t === "left" || t === "right" ? s && r > n : !s && i > n
}
;
function qT(e= () => {}
) {
    const t = lr(e);
    on( () => {
        let n = 0
          , r = 0;
        return n = window.requestAnimationFrame( () => r = window.requestAnimationFrame(t)),
        () => {
            window.cancelAnimationFrame(n),
            window.cancelAnimationFrame(r)
        }
    }
    , [t])
}
function YT(e) {
    return e.nodeType === e.ELEMENT_NODE
}
function QT(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const i = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Mc(e) {
    const t = document.activeElement;
    return e.some(n => n === t ? !0 : (n.focus(),
    document.activeElement !== t))
}
var XT = O0
  , G0 = F0
  , q0 = V0
  , Y0 = z0
  , Q0 = B0
  , X0 = U0
  , Z0 = Df;
function J0(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var i = e.length;
            for (t = 0; t < i; t++)
                e[t] && (n = J0(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function ex() {
    for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
        (e = arguments[n]) && (t = J0(e)) && (r && (r += " "),
        r += t);
    return r
}
const rm = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , im = ex
  , tx = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return im(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: i, defaultVariants: s} = t
      , o = Object.keys(i).map(c => {
        const u = n == null ? void 0 : n[c]
          , f = s == null ? void 0 : s[c];
        if (u === null)
            return null;
        const h = rm(u) || rm(f);
        return i[c][h]
    }
    )
      , a = n && Object.entries(n).reduce( (c, u) => {
        let[f,h] = u;
        return h === void 0 || (c[f] = h),
        c
    }
    , {})
      , l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (c, u) => {
        let {class: f, className: h, ...p} = u;
        return Object.entries(p).every(x => {
            let[y,w] = x;
            return Array.isArray(w) ? w.includes({
                ...s,
                ...a
            }[y]) : {
                ...s,
                ...a
            }[y] === w
        }
        ) ? [...c, f, h] : c
    }
    , []);
    return im(e, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ZT = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , nx = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var JT = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eE = b.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i="", children: s, iconNode: o, ...a}, l) => b.createElement("svg", {
    ref: l,
    ...JT,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: nx("lucide", i),
    ...a
}, [...o.map( ([c,u]) => b.createElement(c, u)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ce = (e, t) => {
    const n = b.forwardRef( ({className: r, ...i}, s) => b.createElement(eE, {
        ref: s,
        iconNode: t,
        className: nx(`lucide-${ZT(e)}`, r),
        ...i
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = ce("ArrowLeft", [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = ce("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = ce("ArrowUpRight", [["path", {
    d: "M7 7h10v10",
    key: "1tivn9"
}], ["path", {
    d: "M7 17 17 7",
    key: "1vkiza"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tE = ce("Briefcase", [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nE = ce("Calendar", [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lf = ce("ChartColumn", [["path", {
    d: "M3 3v16a2 2 0 0 0 2 2h16",
    key: "c24i48"
}], ["path", {
    d: "M18 17V9",
    key: "2bz60n"
}], ["path", {
    d: "M13 17V5",
    key: "1frdt8"
}], ["path", {
    d: "M8 17v-3",
    key: "17ska0"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rE = ce("ChevronDown", [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Of = ce("CircleCheckBig", [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sx = ce("Clock", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16 14",
    key: "68esgv"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iE = ce("Eye", [["path", {
    d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
    key: "1nclc0"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "3",
    key: "1v7zrd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = ce("Globe", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sE = ce("Heart", [["path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
    key: "c3ymky"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = ce("Layers", [["path", {
    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
    key: "8b97xw"
}], ["path", {
    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
    key: "dd6zsq"
}], ["path", {
    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
    key: "ep9fru"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = ce("Lightbulb", [["path", {
    d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
    key: "1gvzjb"
}], ["path", {
    d: "M9 18h6",
    key: "x1upvd"
}], ["path", {
    d: "M10 22h4",
    key: "ceow96"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oE = ce("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = ce("MapPin", [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const aE = ce("Menu", [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lE = ce("Phone", [["path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    key: "foiqr5"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cE = ce("Send", [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _f = ce("Shield", [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uE = ce("Target", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "6",
    key: "1vlfrh"
}], ["circle", {
    cx: "12",
    cy: "12",
    r: "2",
    key: "1c9p78"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = ce("TrendingUp", [["polyline", {
    points: "22 7 13.5 15.5 8.5 10.5 2 17",
    key: "126l90"
}], ["polyline", {
    points: "16 7 22 7 22 13",
    key: "kwv8wd"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zf = ce("Users", [["path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
    key: "1yyitq"
}], ["circle", {
    cx: "9",
    cy: "7",
    r: "4",
    key: "nufk8"
}], ["path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87",
    key: "kshegd"
}], ["path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75",
    key: "1da9ce"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = ce("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = ce("Zap", [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]])
  , Bf = "-"
  , dE = e => {
    const t = hE(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    return {
        getClassGroupId: o => {
            const a = o.split(Bf);
            return a[0] === "" && a.length !== 1 && a.shift(),
            ux(a, t) || fE(o)
        }
        ,
        getConflictingClassGroupIds: (o, a) => {
            const l = n[o] || [];
            return a && r[o] ? [...l, ...r[o]] : l
        }
    }
}
  , ux = (e, t) => {
    var o;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , i = r ? ux(e.slice(1), r) : void 0;
    if (i)
        return i;
    if (t.validators.length === 0)
        return;
    const s = e.join(Bf);
    return (o = t.validators.find( ({validator: a}) => a(s))) == null ? void 0 : o.classGroupId
}
  , sm = /^\[(.+)\]$/
  , fE = e => {
    if (sm.test(e)) {
        const t = sm.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
  , hE = e => {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return mE(Object.entries(e.classGroups), n).forEach( ([s,o]) => {
        Xu(o, r, s, t)
    }
    ),
    r
}
  , Xu = (e, t, n, r) => {
    e.forEach(i => {
        if (typeof i == "string") {
            const s = i === "" ? t : om(t, i);
            s.classGroupId = n;
            return
        }
        if (typeof i == "function") {
            if (pE(i)) {
                Xu(i(r), t, n, r);
                return
            }
            t.validators.push({
                validator: i,
                classGroupId: n
            });
            return
        }
        Object.entries(i).forEach( ([s,o]) => {
            Xu(o, om(t, s), n, r)
        }
        )
    }
    )
}
  , om = (e, t) => {
    let n = e;
    return t.split(Bf).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
  , pE = e => e.isThemeGetter
  , mE = (e, t) => t ? e.map( ([n,r]) => {
    const i = r.map(s => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map( ([o,a]) => [t + o, a])) : s);
    return [n, i]
}
) : e
  , gE = e => {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    const i = (s, o) => {
        n.set(s, o),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    ;
    return {
        get(s) {
            let o = n.get(s);
            if (o !== void 0)
                return o;
            if ((o = r.get(s)) !== void 0)
                return i(s, o),
                o
        },
        set(s, o) {
            n.has(s) ? n.set(s, o) : i(s, o)
        }
    }
}
  , dx = "!"
  , yE = e => {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , i = t[0]
      , s = t.length
      , o = a => {
        const l = [];
        let c = 0, u = 0, f;
        for (let w = 0; w < a.length; w++) {
            let g = a[w];
            if (c === 0) {
                if (g === i && (r || a.slice(w, w + s) === t)) {
                    l.push(a.slice(u, w)),
                    u = w + s;
                    continue
                }
                if (g === "/") {
                    f = w;
                    continue
                }
            }
            g === "[" ? c++ : g === "]" && c--
        }
        const h = l.length === 0 ? a : a.substring(u)
          , p = h.startsWith(dx)
          , x = p ? h.substring(1) : h
          , y = f && f > u ? f - u : void 0;
        return {
            modifiers: l,
            hasImportantModifier: p,
            baseClassName: x,
            maybePostfixModifierPosition: y
        }
    }
    ;
    return n ? a => n({
        className: a,
        parseClassName: o
    }) : o
}
  , vE = e => {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
  , xE = e => ({
    cache: gE(e.cacheSize),
    parseClassName: yE(e),
    ...dE(e)
})
  , wE = /\s+/
  , bE = (e, t) => {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i} = t
      , s = []
      , o = e.trim().split(wE);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
        const c = o[l]
          , {modifiers: u, hasImportantModifier: f, baseClassName: h, maybePostfixModifierPosition: p} = n(c);
        let x = !!p
          , y = r(x ? h.substring(0, p) : h);
        if (!y) {
            if (!x) {
                a = c + (a.length > 0 ? " " + a : a);
                continue
            }
            if (y = r(h),
            !y) {
                a = c + (a.length > 0 ? " " + a : a);
                continue
            }
            x = !1
        }
        const w = vE(u).join(":")
          , g = f ? w + dx : w
          , m = g + y;
        if (s.includes(m))
            continue;
        s.push(m);
        const v = i(y, x);
        for (let S = 0; S < v.length; ++S) {
            const C = v[S];
            s.push(g + C)
        }
        a = c + (a.length > 0 ? " " + a : a)
    }
    return a
}
;
function SE() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = fx(t)) && (r && (r += " "),
        r += n);
    return r
}
const fx = e => {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = fx(e[r])) && (n && (n += " "),
        n += t);
    return n
}
;
function CE(e, ...t) {
    let n, r, i, s = o;
    function o(l) {
        const c = t.reduce( (u, f) => f(u), e());
        return n = xE(c),
        r = n.cache.get,
        i = n.cache.set,
        s = a,
        a(l)
    }
    function a(l) {
        const c = r(l);
        if (c)
            return c;
        const u = bE(l, n);
        return i(l, u),
        u
    }
    return function() {
        return s(SE.apply(null, arguments))
    }
}
const oe = e => {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
  , hx = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , TE = /^\d+\/\d+$/
  , EE = new Set(["px", "full", "screen"])
  , kE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , PE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , NE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , jE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , AE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , un = e => Ni(e) || EE.has(e) || TE.test(e)
  , Dn = e => es(e, "length", _E)
  , Ni = e => !!e && !Number.isNaN(Number(e))
  , Dc = e => es(e, "number", Ni)
  , vs = e => !!e && Number.isInteger(Number(e))
  , RE = e => e.endsWith("%") && Ni(e.slice(0, -1))
  , G = e => hx.test(e)
  , Ln = e => kE.test(e)
  , ME = new Set(["length", "size", "percentage"])
  , DE = e => es(e, ME, px)
  , LE = e => es(e, "position", px)
  , OE = new Set(["image", "url"])
  , IE = e => es(e, OE, zE)
  , FE = e => es(e, "", VE)
  , xs = () => !0
  , es = (e, t, n) => {
    const r = hx.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
  , _E = e => PE.test(e) && !NE.test(e)
  , px = () => !1
  , VE = e => jE.test(e)
  , zE = e => AE.test(e)
  , BE = () => {
    const e = oe("colors")
      , t = oe("spacing")
      , n = oe("blur")
      , r = oe("brightness")
      , i = oe("borderColor")
      , s = oe("borderRadius")
      , o = oe("borderSpacing")
      , a = oe("borderWidth")
      , l = oe("contrast")
      , c = oe("grayscale")
      , u = oe("hueRotate")
      , f = oe("invert")
      , h = oe("gap")
      , p = oe("gradientColorStops")
      , x = oe("gradientColorStopPositions")
      , y = oe("inset")
      , w = oe("margin")
      , g = oe("opacity")
      , m = oe("padding")
      , v = oe("saturate")
      , S = oe("scale")
      , C = oe("sepia")
      , T = oe("skew")
      , E = oe("space")
      , k = oe("translate")
      , A = () => ["auto", "contain", "none"]
      , R = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , z = () => ["auto", G, t]
      , I = () => [G, t]
      , K = () => ["", un, Dn]
      , L = () => ["auto", Ni, G]
      , q = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , $ = () => ["solid", "dashed", "dotted", "double", "none"]
      , V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , j = () => ["", "0", G]
      , O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , U = () => [Ni, G];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [xs],
            spacing: [un, Dn],
            blur: ["none", "", Ln, G],
            brightness: U(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Ln, G],
            borderSpacing: I(),
            borderWidth: K(),
            contrast: U(),
            grayscale: j(),
            hueRotate: U(),
            invert: j(),
            gap: I(),
            gradientColorStops: [e],
            gradientColorStopPositions: [RE, Dn],
            inset: z(),
            margin: z(),
            opacity: U(),
            padding: I(),
            saturate: U(),
            scale: U(),
            sepia: j(),
            skew: U(),
            space: I(),
            translate: I()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", G]
            }],
            container: ["container"],
            columns: [{
                columns: [Ln]
            }],
            "break-after": [{
                "break-after": O()
            }],
            "break-before": [{
                "break-before": O()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...q(), G]
            }],
            overflow: [{
                overflow: R()
            }],
            "overflow-x": [{
                "overflow-x": R()
            }],
            "overflow-y": [{
                "overflow-y": R()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [y]
            }],
            "inset-x": [{
                "inset-x": [y]
            }],
            "inset-y": [{
                "inset-y": [y]
            }],
            start: [{
                start: [y]
            }],
            end: [{
                end: [y]
            }],
            top: [{
                top: [y]
            }],
            right: [{
                right: [y]
            }],
            bottom: [{
                bottom: [y]
            }],
            left: [{
                left: [y]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", vs, G]
            }],
            basis: [{
                basis: z()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", G]
            }],
            grow: [{
                grow: j()
            }],
            shrink: [{
                shrink: j()
            }],
            order: [{
                order: ["first", "last", "none", vs, G]
            }],
            "grid-cols": [{
                "grid-cols": [xs]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", vs, G]
                }, G]
            }],
            "col-start": [{
                "col-start": L()
            }],
            "col-end": [{
                "col-end": L()
            }],
            "grid-rows": [{
                "grid-rows": [xs]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [vs, G]
                }, G]
            }],
            "row-start": [{
                "row-start": L()
            }],
            "row-end": [{
                "row-end": L()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", G]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", G]
            }],
            gap: [{
                gap: [h]
            }],
            "gap-x": [{
                "gap-x": [h]
            }],
            "gap-y": [{
                "gap-y": [h]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [m]
            }],
            px: [{
                px: [m]
            }],
            py: [{
                py: [m]
            }],
            ps: [{
                ps: [m]
            }],
            pe: [{
                pe: [m]
            }],
            pt: [{
                pt: [m]
            }],
            pr: [{
                pr: [m]
            }],
            pb: [{
                pb: [m]
            }],
            pl: [{
                pl: [m]
            }],
            m: [{
                m: [w]
            }],
            mx: [{
                mx: [w]
            }],
            my: [{
                my: [w]
            }],
            ms: [{
                ms: [w]
            }],
            me: [{
                me: [w]
            }],
            mt: [{
                mt: [w]
            }],
            mr: [{
                mr: [w]
            }],
            mb: [{
                mb: [w]
            }],
            ml: [{
                ml: [w]
            }],
            "space-x": [{
                "space-x": [E]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [E]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", G, t]
            }],
            "min-w": [{
                "min-w": [G, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [G, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [Ln]
                }, Ln]
            }],
            h: [{
                h: [G, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [G, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [G, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", Ln, Dn]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Dc]
            }],
            "font-family": [{
                font: [xs]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", G]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Ni, Dc]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", un, G]
            }],
            "list-image": [{
                "list-image": ["none", G]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", G]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [g]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [g]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...$(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", un, Dn]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", un, G]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", G]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", G]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [g]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...q(), LE]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", DE]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, IE]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [x]
            }],
            "gradient-via-pos": [{
                via: [x]
            }],
            "gradient-to-pos": [{
                to: [x]
            }],
            "gradient-from": [{
                from: [p]
            }],
            "gradient-via": [{
                via: [p]
            }],
            "gradient-to": [{
                to: [p]
            }],
            rounded: [{
                rounded: [s]
            }],
            "rounded-s": [{
                "rounded-s": [s]
            }],
            "rounded-e": [{
                "rounded-e": [s]
            }],
            "rounded-t": [{
                "rounded-t": [s]
            }],
            "rounded-r": [{
                "rounded-r": [s]
            }],
            "rounded-b": [{
                "rounded-b": [s]
            }],
            "rounded-l": [{
                "rounded-l": [s]
            }],
            "rounded-ss": [{
                "rounded-ss": [s]
            }],
            "rounded-se": [{
                "rounded-se": [s]
            }],
            "rounded-ee": [{
                "rounded-ee": [s]
            }],
            "rounded-es": [{
                "rounded-es": [s]
            }],
            "rounded-tl": [{
                "rounded-tl": [s]
            }],
            "rounded-tr": [{
                "rounded-tr": [s]
            }],
            "rounded-br": [{
                "rounded-br": [s]
            }],
            "rounded-bl": [{
                "rounded-bl": [s]
            }],
            "border-w": [{
                border: [a]
            }],
            "border-w-x": [{
                "border-x": [a]
            }],
            "border-w-y": [{
                "border-y": [a]
            }],
            "border-w-s": [{
                "border-s": [a]
            }],
            "border-w-e": [{
                "border-e": [a]
            }],
            "border-w-t": [{
                "border-t": [a]
            }],
            "border-w-r": [{
                "border-r": [a]
            }],
            "border-w-b": [{
                "border-b": [a]
            }],
            "border-w-l": [{
                "border-l": [a]
            }],
            "border-opacity": [{
                "border-opacity": [g]
            }],
            "border-style": [{
                border: [...$(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [a]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [a]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [g]
            }],
            "divide-style": [{
                divide: $()
            }],
            "border-color": [{
                border: [i]
            }],
            "border-color-x": [{
                "border-x": [i]
            }],
            "border-color-y": [{
                "border-y": [i]
            }],
            "border-color-s": [{
                "border-s": [i]
            }],
            "border-color-e": [{
                "border-e": [i]
            }],
            "border-color-t": [{
                "border-t": [i]
            }],
            "border-color-r": [{
                "border-r": [i]
            }],
            "border-color-b": [{
                "border-b": [i]
            }],
            "border-color-l": [{
                "border-l": [i]
            }],
            "divide-color": [{
                divide: [i]
            }],
            "outline-style": [{
                outline: ["", ...$()]
            }],
            "outline-offset": [{
                "outline-offset": [un, G]
            }],
            "outline-w": [{
                outline: [un, Dn]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: K()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [g]
            }],
            "ring-offset-w": [{
                "ring-offset": [un, Dn]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", Ln, FE]
            }],
            "shadow-color": [{
                shadow: [xs]
            }],
            opacity: [{
                opacity: [g]
            }],
            "mix-blend": [{
                "mix-blend": [...V(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": V()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [l]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", Ln, G]
            }],
            grayscale: [{
                grayscale: [c]
            }],
            "hue-rotate": [{
                "hue-rotate": [u]
            }],
            invert: [{
                invert: [f]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [l]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [c]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [u]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [f]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [g]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [o]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [o]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [o]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", G]
            }],
            duration: [{
                duration: U()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", G]
            }],
            delay: [{
                delay: U()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", G]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [S]
            }],
            "scale-x": [{
                "scale-x": [S]
            }],
            "scale-y": [{
                "scale-y": [S]
            }],
            rotate: [{
                rotate: [vs, G]
            }],
            "translate-x": [{
                "translate-x": [k]
            }],
            "translate-y": [{
                "translate-y": [k]
            }],
            "skew-x": [{
                "skew-x": [T]
            }],
            "skew-y": [{
                "skew-y": [T]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", G]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", G]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", G]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [un, Dn, Dc]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
  , $E = CE(BE);
function mt(...e) {
    return $E(ex(e))
}
const UE = XT
  , mx = b.forwardRef( ({className: e, ...t}, n) => d.jsx(G0, {
    ref: n,
    className: mt("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...t
}));
mx.displayName = G0.displayName;
const WE = tx("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , gx = b.forwardRef( ({className: e, variant: t, ...n}, r) => d.jsx(q0, {
    ref: r,
    className: mt(WE({
        variant: t
    }), e),
    ...n
}));
gx.displayName = q0.displayName;
const HE = b.forwardRef( ({className: e, ...t}, n) => d.jsx(X0, {
    ref: n,
    className: mt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50", e),
    ...t
}));
HE.displayName = X0.displayName;
const yx = b.forwardRef( ({className: e, ...t}, n) => d.jsx(Z0, {
    ref: n,
    className: mt("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
    "toast-close": "",
    ...t,
    children: d.jsx(lx, {
        className: "h-4 w-4"
    })
}));
yx.displayName = Z0.displayName;
const vx = b.forwardRef( ({className: e, ...t}, n) => d.jsx(Y0, {
    ref: n,
    className: mt("text-sm font-semibold", e),
    ...t
}));
vx.displayName = Y0.displayName;
const xx = b.forwardRef( ({className: e, ...t}, n) => d.jsx(Q0, {
    ref: n,
    className: mt("text-sm opacity-90", e),
    ...t
}));
xx.displayName = Q0.displayName;
function KE() {
    const {toasts: e} = E0();
    return d.jsxs(UE, {
        children: [e.map(function({id: t, title: n, description: r, action: i, ...s}) {
            return d.jsxs(gx, {
                ...s,
                children: [d.jsxs("div", {
                    className: "grid gap-1",
                    children: [n && d.jsx(vx, {
                        children: n
                    }), r && d.jsx(xx, {
                        children: r
                    })]
                }), i, d.jsx(yx, {})]
            }, t)
        }), d.jsx(mx, {})]
    })
}
var am = ["light", "dark"]
  , GE = "(prefers-color-scheme: dark)"
  , qE = b.createContext(void 0)
  , YE = {
    setTheme: e => {}
    ,
    themes: []
}
  , QE = () => {
    var e;
    return (e = b.useContext(qE)) != null ? e : YE
}
;
b.memo( ({forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: s, value: o, attrs: a, nonce: l}) => {
    let c = s === "system"
      , u = n === "class" ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map(x => `'${x}'`).join(",")})`};` : `var d=document.documentElement,n='${n}',s='setAttribute';`
      , f = i ? am.includes(s) && s ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'` : "if(e==='light'||e==='dark')d.style.colorScheme=e" : ""
      , h = (x, y=!1, w=!0) => {
        let g = o ? o[x] : x
          , m = y ? x + "|| ''" : `'${g}'`
          , v = "";
        return i && w && !y && am.includes(x) && (v += `d.style.colorScheme = '${x}';`),
        n === "class" ? y || g ? v += `c.add(${m})` : v += "null" : g && (v += `d[s](n,${m})`),
        v
    }
      , p = e ? `!function(){${u}${h(e)}}()` : r ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${GE}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}${c ? "" : "else{" + h(s, !1, !1) + "}"}${f}}catch(e){}}()` : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${h(o ? "x[e]" : "e", !0)}}else{${h(s, !1, !1)};}${f}}catch(t){}}();`;
    return b.createElement("script", {
        nonce: l,
        dangerouslySetInnerHTML: {
            __html: p
        }
    })
}
);
var XE = e => {
    switch (e) {
    case "success":
        return ek;
    case "info":
        return nk;
    case "warning":
        return tk;
    case "error":
        return rk;
    default:
        return null
    }
}
  , ZE = Array(12).fill(0)
  , JE = ({visible: e, className: t}) => M.createElement("div", {
    className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
    "data-visible": e
}, M.createElement("div", {
    className: "sonner-spinner"
}, ZE.map( (n, r) => M.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${r}`
}))))
  , ek = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , tk = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , nk = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , rk = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, M.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , ik = M.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, M.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), M.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , sk = () => {
    let[e,t] = M.useState(document.hidden);
    return M.useEffect( () => {
        let n = () => {
            t(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", n),
        () => window.removeEventListener("visibilitychange", n)
    }
    , []),
    e
}
  , Zu = 1
  , ok = class {
    constructor() {
        this.subscribe = e => (this.subscribers.push(e),
        () => {
            let t = this.subscribers.indexOf(e);
            this.subscribers.splice(t, 1)
        }
        ),
        this.publish = e => {
            this.subscribers.forEach(t => t(e))
        }
        ,
        this.addToast = e => {
            this.publish(e),
            this.toasts = [...this.toasts, e]
        }
        ,
        this.create = e => {
            var t;
            let {message: n, ...r} = e
              , i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : Zu++
              , s = this.toasts.find(a => a.id === i)
              , o = e.dismissible === void 0 ? !0 : e.dismissible;
            return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i),
            s ? this.toasts = this.toasts.map(a => a.id === i ? (this.publish({
                ...a,
                ...e,
                id: i,
                title: n
            }),
            {
                ...a,
                ...e,
                id: i,
                dismissible: o,
                title: n
            }) : a) : this.addToast({
                title: n,
                ...r,
                dismissible: o,
                id: i
            }),
            i
        }
        ,
        this.dismiss = e => (this.dismissedToasts.add(e),
        e || this.toasts.forEach(t => {
            this.subscribers.forEach(n => n({
                id: t.id,
                dismiss: !0
            }))
        }
        ),
        this.subscribers.forEach(t => t({
            id: e,
            dismiss: !0
        })),
        e),
        this.message = (e, t) => this.create({
            ...t,
            message: e
        }),
        this.error = (e, t) => this.create({
            ...t,
            message: e,
            type: "error"
        }),
        this.success = (e, t) => this.create({
            ...t,
            type: "success",
            message: e
        }),
        this.info = (e, t) => this.create({
            ...t,
            type: "info",
            message: e
        }),
        this.warning = (e, t) => this.create({
            ...t,
            type: "warning",
            message: e
        }),
        this.loading = (e, t) => this.create({
            ...t,
            type: "loading",
            message: e
        }),
        this.promise = (e, t) => {
            if (!t)
                return;
            let n;
            t.loading !== void 0 && (n = this.create({
                ...t,
                promise: e,
                type: "loading",
                message: t.loading,
                description: typeof t.description != "function" ? t.description : void 0
            }));
            let r = e instanceof Promise ? e : e(), i = n !== void 0, s, o = r.then(async l => {
                if (s = ["resolve", l],
                M.isValidElement(l))
                    i = !1,
                    this.create({
                        id: n,
                        type: "default",
                        message: l
                    });
                else if (lk(l) && !l.ok) {
                    i = !1;
                    let c = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error
                      , u = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: c,
                        description: u
                    })
                } else if (t.success !== void 0) {
                    i = !1;
                    let c = typeof t.success == "function" ? await t.success(l) : t.success
                      , u = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "success",
                        message: c,
                        description: u
                    })
                }
            }
            ).catch(async l => {
                if (s = ["reject", l],
                t.error !== void 0) {
                    i = !1;
                    let c = typeof t.error == "function" ? await t.error(l) : t.error
                      , u = typeof t.description == "function" ? await t.description(l) : t.description;
                    this.create({
                        id: n,
                        type: "error",
                        message: c,
                        description: u
                    })
                }
            }
            ).finally( () => {
                var l;
                i && (this.dismiss(n),
                n = void 0),
                (l = t.finally) == null || l.call(t)
            }
            ), a = () => new Promise( (l, c) => o.then( () => s[0] === "reject" ? c(s[1]) : l(s[1])).catch(c));
            return typeof n != "string" && typeof n != "number" ? {
                unwrap: a
            } : Object.assign(n, {
                unwrap: a
            })
        }
        ,
        this.custom = (e, t) => {
            let n = (t == null ? void 0 : t.id) || Zu++;
            return this.create({
                jsx: e(n),
                id: n,
                ...t
            }),
            n
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(e => !this.dismissedToasts.has(e.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
  , Je = new ok
  , ak = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Zu++;
    return Je.addToast({
        title: e,
        ...t,
        id: n
    }),
    n
}
  , lk = e => e && typeof e == "object" && "ok"in e && typeof e.ok == "boolean" && "status"in e && typeof e.status == "number"
  , ck = ak
  , uk = () => Je.toasts
  , dk = () => Je.getActiveToasts();
Object.assign(ck, {
    success: Je.success,
    info: Je.info,
    warning: Je.warning,
    error: Je.error,
    custom: Je.custom,
    message: Je.message,
    promise: Je.promise,
    dismiss: Je.dismiss,
    loading: Je.loading
}, {
    getHistory: uk,
    getToasts: dk
});
function fk(e, {insertAt: t}={}) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , r = document.createElement("style");
    r.type = "text/css",
    t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
    r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e))
}
fk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ta(e) {
    return e.label !== void 0
}
var hk = 3
  , pk = "32px"
  , mk = "16px"
  , lm = 4e3
  , gk = 356
  , yk = 14
  , vk = 20
  , xk = 200;
function Dt(...e) {
    return e.filter(Boolean).join(" ")
}
function wk(e) {
    let[t,n] = e.split("-")
      , r = [];
    return t && r.push(t),
    n && r.push(n),
    r
}
var bk = e => {
    var t, n, r, i, s, o, a, l, c, u, f;
    let {invert: h, toast: p, unstyled: x, interacting: y, setHeights: w, visibleToasts: g, heights: m, index: v, toasts: S, expanded: C, removeToast: T, defaultRichColors: E, closeButton: k, style: A, cancelButtonStyle: R, actionButtonStyle: z, className: I="", descriptionClassName: K="", duration: L, position: q, gap: $, loadingIcon: V, expandByDefault: P, classNames: j, icons: O, closeButtonAriaLabel: U="Close toast", pauseWhenPageIsHidden: B} = e
      , [Y,X] = M.useState(null)
      , [Se,Fe] = M.useState(null)
      , [te,Yr] = M.useState(!1)
      , [kn,xr] = M.useState(!1)
      , [Pn,Qr] = M.useState(!1)
      , [Nn,Mo] = M.useState(!1)
      , [Jl,Do] = M.useState(!1)
      , [ec,ls] = M.useState(0)
      , [Xr,Ih] = M.useState(0)
      , cs = M.useRef(p.duration || L || lm)
      , Fh = M.useRef(null)
      , wr = M.useRef(null)
      , bb = v === 0
      , Sb = v + 1 <= g
      , gt = p.type
      , Zr = p.dismissible !== !1
      , Cb = p.className || ""
      , Tb = p.descriptionClassName || ""
      , Lo = M.useMemo( () => m.findIndex(W => W.toastId === p.id) || 0, [m, p.id])
      , Eb = M.useMemo( () => {
        var W;
        return (W = p.closeButton) != null ? W : k
    }
    , [p.closeButton, k])
      , _h = M.useMemo( () => p.duration || L || lm, [p.duration, L])
      , tc = M.useRef(0)
      , Jr = M.useRef(0)
      , Vh = M.useRef(0)
      , ei = M.useRef(null)
      , [kb,Pb] = q.split("-")
      , zh = M.useMemo( () => m.reduce( (W, re, ue) => ue >= Lo ? W : W + re.height, 0), [m, Lo])
      , Bh = sk()
      , Nb = p.invert || h
      , nc = gt === "loading";
    Jr.current = M.useMemo( () => Lo * $ + zh, [Lo, zh]),
    M.useEffect( () => {
        cs.current = _h
    }
    , [_h]),
    M.useEffect( () => {
        Yr(!0)
    }
    , []),
    M.useEffect( () => {
        let W = wr.current;
        if (W) {
            let re = W.getBoundingClientRect().height;
            return Ih(re),
            w(ue => [{
                toastId: p.id,
                height: re,
                position: p.position
            }, ...ue]),
            () => w(ue => ue.filter(jt => jt.toastId !== p.id))
        }
    }
    , [w, p.id]),
    M.useLayoutEffect( () => {
        if (!te)
            return;
        let W = wr.current
          , re = W.style.height;
        W.style.height = "auto";
        let ue = W.getBoundingClientRect().height;
        W.style.height = re,
        Ih(ue),
        w(jt => jt.find(At => At.toastId === p.id) ? jt.map(At => At.toastId === p.id ? {
            ...At,
            height: ue
        } : At) : [{
            toastId: p.id,
            height: ue,
            position: p.position
        }, ...jt])
    }
    , [te, p.title, p.description, w, p.id]);
    let jn = M.useCallback( () => {
        xr(!0),
        ls(Jr.current),
        w(W => W.filter(re => re.toastId !== p.id)),
        setTimeout( () => {
            T(p)
        }
        , xk)
    }
    , [p, T, w, Jr]);
    M.useEffect( () => {
        if (p.promise && gt === "loading" || p.duration === 1 / 0 || p.type === "loading")
            return;
        let W;
        return C || y || B && Bh ? ( () => {
            if (Vh.current < tc.current) {
                let re = new Date().getTime() - tc.current;
                cs.current = cs.current - re
            }
            Vh.current = new Date().getTime()
        }
        )() : cs.current !== 1 / 0 && (tc.current = new Date().getTime(),
        W = setTimeout( () => {
            var re;
            (re = p.onAutoClose) == null || re.call(p, p),
            jn()
        }
        , cs.current)),
        () => clearTimeout(W)
    }
    , [C, y, p, gt, B, Bh, jn]),
    M.useEffect( () => {
        p.delete && jn()
    }
    , [jn, p.delete]);
    function jb() {
        var W, re, ue;
        return O != null && O.loading ? M.createElement("div", {
            className: Dt(j == null ? void 0 : j.loader, (W = p == null ? void 0 : p.classNames) == null ? void 0 : W.loader, "sonner-loader"),
            "data-visible": gt === "loading"
        }, O.loading) : V ? M.createElement("div", {
            className: Dt(j == null ? void 0 : j.loader, (re = p == null ? void 0 : p.classNames) == null ? void 0 : re.loader, "sonner-loader"),
            "data-visible": gt === "loading"
        }, V) : M.createElement(JE, {
            className: Dt(j == null ? void 0 : j.loader, (ue = p == null ? void 0 : p.classNames) == null ? void 0 : ue.loader),
            visible: gt === "loading"
        })
    }
    return M.createElement("li", {
        tabIndex: 0,
        ref: wr,
        className: Dt(I, Cb, j == null ? void 0 : j.toast, (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast, j == null ? void 0 : j.default, j == null ? void 0 : j[gt], (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[gt]),
        "data-sonner-toast": "",
        "data-rich-colors": (r = p.richColors) != null ? r : E,
        "data-styled": !(p.jsx || p.unstyled || x),
        "data-mounted": te,
        "data-promise": !!p.promise,
        "data-swiped": Jl,
        "data-removed": kn,
        "data-visible": Sb,
        "data-y-position": kb,
        "data-x-position": Pb,
        "data-index": v,
        "data-front": bb,
        "data-swiping": Pn,
        "data-dismissible": Zr,
        "data-type": gt,
        "data-invert": Nb,
        "data-swipe-out": Nn,
        "data-swipe-direction": Se,
        "data-expanded": !!(C || P && te),
        style: {
            "--index": v,
            "--toasts-before": v,
            "--z-index": S.length - v,
            "--offset": `${kn ? ec : Jr.current}px`,
            "--initial-height": P ? "auto" : `${Xr}px`,
            ...A,
            ...p.style
        },
        onDragEnd: () => {
            Qr(!1),
            X(null),
            ei.current = null
        }
        ,
        onPointerDown: W => {
            nc || !Zr || (Fh.current = new Date,
            ls(Jr.current),
            W.target.setPointerCapture(W.pointerId),
            W.target.tagName !== "BUTTON" && (Qr(!0),
            ei.current = {
                x: W.clientX,
                y: W.clientY
            }))
        }
        ,
        onPointerUp: () => {
            var W, re, ue, jt;
            if (Nn || !Zr)
                return;
            ei.current = null;
            let At = Number(((W = wr.current) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , An = Number(((re = wr.current) == null ? void 0 : re.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , br = new Date().getTime() - ((ue = Fh.current) == null ? void 0 : ue.getTime())
              , Rt = Y === "x" ? At : An
              , Rn = Math.abs(Rt) / br;
            if (Math.abs(Rt) >= vk || Rn > .11) {
                ls(Jr.current),
                (jt = p.onDismiss) == null || jt.call(p, p),
                Fe(Y === "x" ? At > 0 ? "right" : "left" : An > 0 ? "down" : "up"),
                jn(),
                Mo(!0),
                Do(!1);
                return
            }
            Qr(!1),
            X(null)
        }
        ,
        onPointerMove: W => {
            var re, ue, jt, At;
            if (!ei.current || !Zr || ((re = window.getSelection()) == null ? void 0 : re.toString().length) > 0)
                return;
            let An = W.clientY - ei.current.y
              , br = W.clientX - ei.current.x
              , Rt = (ue = e.swipeDirections) != null ? ue : wk(q);
            !Y && (Math.abs(br) > 1 || Math.abs(An) > 1) && X(Math.abs(br) > Math.abs(An) ? "x" : "y");
            let Rn = {
                x: 0,
                y: 0
            };
            Y === "y" ? (Rt.includes("top") || Rt.includes("bottom")) && (Rt.includes("top") && An < 0 || Rt.includes("bottom") && An > 0) && (Rn.y = An) : Y === "x" && (Rt.includes("left") || Rt.includes("right")) && (Rt.includes("left") && br < 0 || Rt.includes("right") && br > 0) && (Rn.x = br),
            (Math.abs(Rn.x) > 0 || Math.abs(Rn.y) > 0) && Do(!0),
            (jt = wr.current) == null || jt.style.setProperty("--swipe-amount-x", `${Rn.x}px`),
            (At = wr.current) == null || At.style.setProperty("--swipe-amount-y", `${Rn.y}px`)
        }
    }, Eb && !p.jsx ? M.createElement("button", {
        "aria-label": U,
        "data-disabled": nc,
        "data-close-button": !0,
        onClick: nc || !Zr ? () => {}
        : () => {
            var W;
            jn(),
            (W = p.onDismiss) == null || W.call(p, p)
        }
        ,
        className: Dt(j == null ? void 0 : j.closeButton, (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.closeButton)
    }, (s = O == null ? void 0 : O.close) != null ? s : ik) : null, p.jsx || b.isValidElement(p.title) ? p.jsx ? p.jsx : typeof p.title == "function" ? p.title() : p.title : M.createElement(M.Fragment, null, gt || p.icon || p.promise ? M.createElement("div", {
        "data-icon": "",
        className: Dt(j == null ? void 0 : j.icon, (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.icon)
    }, p.promise || p.type === "loading" && !p.icon ? p.icon || jb() : null, p.type !== "loading" ? p.icon || (O == null ? void 0 : O[gt]) || XE(gt) : null) : null, M.createElement("div", {
        "data-content": "",
        className: Dt(j == null ? void 0 : j.content, (a = p == null ? void 0 : p.classNames) == null ? void 0 : a.content)
    }, M.createElement("div", {
        "data-title": "",
        className: Dt(j == null ? void 0 : j.title, (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title)
    }, typeof p.title == "function" ? p.title() : p.title), p.description ? M.createElement("div", {
        "data-description": "",
        className: Dt(K, Tb, j == null ? void 0 : j.description, (c = p == null ? void 0 : p.classNames) == null ? void 0 : c.description)
    }, typeof p.description == "function" ? p.description() : p.description) : null), b.isValidElement(p.cancel) ? p.cancel : p.cancel && ta(p.cancel) ? M.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: p.cancelButtonStyle || R,
        onClick: W => {
            var re, ue;
            ta(p.cancel) && Zr && ((ue = (re = p.cancel).onClick) == null || ue.call(re, W),
            jn())
        }
        ,
        className: Dt(j == null ? void 0 : j.cancelButton, (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.cancelButton)
    }, p.cancel.label) : null, b.isValidElement(p.action) ? p.action : p.action && ta(p.action) ? M.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: p.actionButtonStyle || z,
        onClick: W => {
            var re, ue;
            ta(p.action) && ((ue = (re = p.action).onClick) == null || ue.call(re, W),
            !W.defaultPrevented && jn())
        }
        ,
        className: Dt(j == null ? void 0 : j.actionButton, (f = p == null ? void 0 : p.classNames) == null ? void 0 : f.actionButton)
    }, p.action.label) : null))
}
;
function cm() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e
}
function Sk(e, t) {
    let n = {};
    return [e, t].forEach( (r, i) => {
        let s = i === 1
          , o = s ? "--mobile-offset" : "--offset"
          , a = s ? mk : pk;
        function l(c) {
            ["top", "right", "bottom", "left"].forEach(u => {
                n[`${o}-${u}`] = typeof c == "number" ? `${c}px` : c
            }
            )
        }
        typeof r == "number" || typeof r == "string" ? l(r) : typeof r == "object" ? ["top", "right", "bottom", "left"].forEach(c => {
            r[c] === void 0 ? n[`${o}-${c}`] = a : n[`${o}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c]
        }
        ) : l(a)
    }
    ),
    n
}
var Ck = b.forwardRef(function(e, t) {
    let {invert: n, position: r="bottom-right", hotkey: i=["altKey", "KeyT"], expand: s, closeButton: o, className: a, offset: l, mobileOffset: c, theme: u="light", richColors: f, duration: h, style: p, visibleToasts: x=hk, toastOptions: y, dir: w=cm(), gap: g=yk, loadingIcon: m, icons: v, containerAriaLabel: S="Notifications", pauseWhenPageIsHidden: C} = e
      , [T,E] = M.useState([])
      , k = M.useMemo( () => Array.from(new Set([r].concat(T.filter(B => B.position).map(B => B.position)))), [T, r])
      , [A,R] = M.useState([])
      , [z,I] = M.useState(!1)
      , [K,L] = M.useState(!1)
      , [q,$] = M.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , V = M.useRef(null)
      , P = i.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , j = M.useRef(null)
      , O = M.useRef(!1)
      , U = M.useCallback(B => {
        E(Y => {
            var X;
            return (X = Y.find(Se => Se.id === B.id)) != null && X.delete || Je.dismiss(B.id),
            Y.filter( ({id: Se}) => Se !== B.id)
        }
        )
    }
    , []);
    return M.useEffect( () => Je.subscribe(B => {
        if (B.dismiss) {
            E(Y => Y.map(X => X.id === B.id ? {
                ...X,
                delete: !0
            } : X));
            return
        }
        setTimeout( () => {
            C0.flushSync( () => {
                E(Y => {
                    let X = Y.findIndex(Se => Se.id === B.id);
                    return X !== -1 ? [...Y.slice(0, X), {
                        ...Y[X],
                        ...B
                    }, ...Y.slice(X + 1)] : [B, ...Y]
                }
                )
            }
            )
        }
        )
    }
    ), []),
    M.useEffect( () => {
        if (u !== "system") {
            $(u);
            return
        }
        if (u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")),
        typeof window > "u")
            return;
        let B = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            B.addEventListener("change", ({matches: Y}) => {
                $(Y ? "dark" : "light")
            }
            )
        } catch {
            B.addListener( ({matches: X}) => {
                try {
                    $(X ? "dark" : "light")
                } catch (Se) {
                    console.error(Se)
                }
            }
            )
        }
    }
    , [u]),
    M.useEffect( () => {
        T.length <= 1 && I(!1)
    }
    , [T]),
    M.useEffect( () => {
        let B = Y => {
            var X, Se;
            i.every(Fe => Y[Fe] || Y.code === Fe) && (I(!0),
            (X = V.current) == null || X.focus()),
            Y.code === "Escape" && (document.activeElement === V.current || (Se = V.current) != null && Se.contains(document.activeElement)) && I(!1)
        }
        ;
        return document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
    }
    , [i]),
    M.useEffect( () => {
        if (V.current)
            return () => {
                j.current && (j.current.focus({
                    preventScroll: !0
                }),
                j.current = null,
                O.current = !1)
            }
    }
    , [V.current]),
    M.createElement("section", {
        ref: t,
        "aria-label": `${S} ${P}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, k.map( (B, Y) => {
        var X;
        let[Se,Fe] = B.split("-");
        return T.length ? M.createElement("ol", {
            key: B,
            dir: w === "auto" ? cm() : w,
            tabIndex: -1,
            ref: V,
            className: a,
            "data-sonner-toaster": !0,
            "data-theme": q,
            "data-y-position": Se,
            "data-lifted": z && T.length > 1 && !s,
            "data-x-position": Fe,
            style: {
                "--front-toast-height": `${((X = A[0]) == null ? void 0 : X.height) || 0}px`,
                "--width": `${gk}px`,
                "--gap": `${g}px`,
                ...p,
                ...Sk(l, c)
            },
            onBlur: te => {
                O.current && !te.currentTarget.contains(te.relatedTarget) && (O.current = !1,
                j.current && (j.current.focus({
                    preventScroll: !0
                }),
                j.current = null))
            }
            ,
            onFocus: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || O.current || (O.current = !0,
                j.current = te.relatedTarget)
            }
            ,
            onMouseEnter: () => I(!0),
            onMouseMove: () => I(!0),
            onMouseLeave: () => {
                K || I(!1)
            }
            ,
            onDragEnd: () => I(!1),
            onPointerDown: te => {
                te.target instanceof HTMLElement && te.target.dataset.dismissible === "false" || L(!0)
            }
            ,
            onPointerUp: () => L(!1)
        }, T.filter(te => !te.position && Y === 0 || te.position === B).map( (te, Yr) => {
            var kn, xr;
            return M.createElement(bk, {
                key: te.id,
                icons: v,
                index: Yr,
                toast: te,
                defaultRichColors: f,
                duration: (kn = y == null ? void 0 : y.duration) != null ? kn : h,
                className: y == null ? void 0 : y.className,
                descriptionClassName: y == null ? void 0 : y.descriptionClassName,
                invert: n,
                visibleToasts: x,
                closeButton: (xr = y == null ? void 0 : y.closeButton) != null ? xr : o,
                interacting: K,
                position: B,
                style: y == null ? void 0 : y.style,
                unstyled: y == null ? void 0 : y.unstyled,
                classNames: y == null ? void 0 : y.classNames,
                cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle,
                actionButtonStyle: y == null ? void 0 : y.actionButtonStyle,
                removeToast: U,
                toasts: T.filter(Pn => Pn.position == te.position),
                heights: A.filter(Pn => Pn.position == te.position),
                setHeights: R,
                expandByDefault: s,
                gap: g,
                loadingIcon: m,
                expanded: z,
                pauseWhenPageIsHidden: C,
                swipeDirections: e.swipeDirections
            })
        }
        )) : null
    }
    ))
});
const Tk = ({...e}) => {
    const {theme: t="system"} = QE();
    return d.jsx(Ck, {
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
            }
        },
        ...e
    })
}
;
var Ek = _d[" useId ".trim().toString()] || ( () => {}
)
  , kk = 0;
function wx(e) {
    const [t,n] = b.useState(Ek());
    return on( () => {
        n(r => r ?? String(kk++))
    }
    , [e]),
    t ? `radix-${t}` : ""
}
const Pk = ["top", "right", "bottom", "left"]
  , cr = Math.min
  , ot = Math.max
  , tl = Math.round
  , na = Math.floor
  , ur = e => ({
    x: e,
    y: e
})
  , Nk = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , jk = {
    start: "end",
    end: "start"
};
function Ju(e, t, n) {
    return ot(e, cr(t, n))
}
function Sn(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Cn(e) {
    return e.split("-")[0]
}
function ts(e) {
    return e.split("-")[1]
}
function $f(e) {
    return e === "x" ? "y" : "x"
}
function Uf(e) {
    return e === "y" ? "height" : "width"
}
function dr(e) {
    return ["top", "bottom"].includes(Cn(e)) ? "y" : "x"
}
function Wf(e) {
    return $f(dr(e))
}
function Ak(e, t, n) {
    n === void 0 && (n = !1);
    const r = ts(e)
      , i = Wf(e)
      , s = Uf(i);
    let o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (o = nl(o)),
    [o, nl(o)]
}
function Rk(e) {
    const t = nl(e);
    return [ed(e), t, ed(t)]
}
function ed(e) {
    return e.replace(/start|end/g, t => jk[t])
}
function Mk(e, t, n) {
    const r = ["left", "right"]
      , i = ["right", "left"]
      , s = ["top", "bottom"]
      , o = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
        return t ? s : o;
    default:
        return []
    }
}
function Dk(e, t, n, r) {
    const i = ts(e);
    let s = Mk(Cn(e), n === "start", r);
    return i && (s = s.map(o => o + "-" + i),
    t && (s = s.concat(s.map(ed)))),
    s
}
function nl(e) {
    return e.replace(/left|right|bottom|top/g, t => Nk[t])
}
function Lk(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function bx(e) {
    return typeof e != "number" ? Lk(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function rl(e) {
    const {x: t, y: n, width: r, height: i} = e;
    return {
        width: r,
        height: i,
        top: n,
        left: t,
        right: t + r,
        bottom: n + i,
        x: t,
        y: n
    }
}
function um(e, t, n) {
    let {reference: r, floating: i} = e;
    const s = dr(t)
      , o = Wf(t)
      , a = Uf(o)
      , l = Cn(t)
      , c = s === "y"
      , u = r.x + r.width / 2 - i.width / 2
      , f = r.y + r.height / 2 - i.height / 2
      , h = r[a] / 2 - i[a] / 2;
    let p;
    switch (l) {
    case "top":
        p = {
            x: u,
            y: r.y - i.height
        };
        break;
    case "bottom":
        p = {
            x: u,
            y: r.y + r.height
        };
        break;
    case "right":
        p = {
            x: r.x + r.width,
            y: f
        };
        break;
    case "left":
        p = {
            x: r.x - i.width,
            y: f
        };
        break;
    default:
        p = {
            x: r.x,
            y: r.y
        }
    }
    switch (ts(t)) {
    case "start":
        p[o] -= h * (n && c ? -1 : 1);
        break;
    case "end":
        p[o] += h * (n && c ? -1 : 1);
        break
    }
    return p
}
const Ok = async (e, t, n) => {
    const {placement: r="bottom", strategy: i="absolute", middleware: s=[], platform: o} = n
      , a = s.filter(Boolean)
      , l = await (o.isRTL == null ? void 0 : o.isRTL(t));
    let c = await o.getElementRects({
        reference: e,
        floating: t,
        strategy: i
    })
      , {x: u, y: f} = um(c, r, l)
      , h = r
      , p = {}
      , x = 0;
    for (let y = 0; y < a.length; y++) {
        const {name: w, fn: g} = a[y]
          , {x: m, y: v, data: S, reset: C} = await g({
            x: u,
            y: f,
            initialPlacement: r,
            placement: h,
            strategy: i,
            middlewareData: p,
            rects: c,
            platform: o,
            elements: {
                reference: e,
                floating: t
            }
        });
        u = m ?? u,
        f = v ?? f,
        p = {
            ...p,
            [w]: {
                ...p[w],
                ...S
            }
        },
        C && x <= 50 && (x++,
        typeof C == "object" && (C.placement && (h = C.placement),
        C.rects && (c = C.rects === !0 ? await o.getElementRects({
            reference: e,
            floating: t,
            strategy: i
        }) : C.rects),
        {x: u, y: f} = um(c, h, l)),
        y = -1)
    }
    return {
        x: u,
        y: f,
        placement: h,
        strategy: i,
        middlewareData: p
    }
}
;
async function io(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: i, platform: s, rects: o, elements: a, strategy: l} = e
      , {boundary: c="clippingAncestors", rootBoundary: u="viewport", elementContext: f="floating", altBoundary: h=!1, padding: p=0} = Sn(t, e)
      , x = bx(p)
      , w = a[h ? f === "floating" ? "reference" : "floating" : f]
      , g = rl(await s.getClippingRect({
        element: (n = await (s.isElement == null ? void 0 : s.isElement(w))) == null || n ? w : w.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
        boundary: c,
        rootBoundary: u,
        strategy: l
    }))
      , m = f === "floating" ? {
        x: r,
        y: i,
        width: o.floating.width,
        height: o.floating.height
    } : o.reference
      , v = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating))
      , S = await (s.isElement == null ? void 0 : s.isElement(v)) ? await (s.getScale == null ? void 0 : s.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = rl(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: a,
        rect: m,
        offsetParent: v,
        strategy: l
    }) : m);
    return {
        top: (g.top - C.top + x.top) / S.y,
        bottom: (C.bottom - g.bottom + x.bottom) / S.y,
        left: (g.left - C.left + x.left) / S.x,
        right: (C.right - g.right + x.right) / S.x
    }
}
const Ik = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: i, rects: s, platform: o, elements: a, middlewareData: l} = t
          , {element: c, padding: u=0} = Sn(e, t) || {};
        if (c == null)
            return {};
        const f = bx(u)
          , h = {
            x: n,
            y: r
        }
          , p = Wf(i)
          , x = Uf(p)
          , y = await o.getDimensions(c)
          , w = p === "y"
          , g = w ? "top" : "left"
          , m = w ? "bottom" : "right"
          , v = w ? "clientHeight" : "clientWidth"
          , S = s.reference[x] + s.reference[p] - h[p] - s.floating[x]
          , C = h[p] - s.reference[p]
          , T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
        let E = T ? T[v] : 0;
        (!E || !await (o.isElement == null ? void 0 : o.isElement(T))) && (E = a.floating[v] || s.floating[x]);
        const k = S / 2 - C / 2
          , A = E / 2 - y[x] / 2 - 1
          , R = cr(f[g], A)
          , z = cr(f[m], A)
          , I = R
          , K = E - y[x] - z
          , L = E / 2 - y[x] / 2 + k
          , q = Ju(I, L, K)
          , $ = !l.arrow && ts(i) != null && L !== q && s.reference[x] / 2 - (L < I ? R : z) - y[x] / 2 < 0
          , V = $ ? L < I ? L - I : L - K : 0;
        return {
            [p]: h[p] + V,
            data: {
                [p]: q,
                centerOffset: L - q - V,
                ...$ && {
                    alignmentOffset: V
                }
            },
            reset: $
        }
    }
})
  , Fk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, middlewareData: s, rects: o, initialPlacement: a, platform: l, elements: c} = t
              , {mainAxis: u=!0, crossAxis: f=!0, fallbackPlacements: h, fallbackStrategy: p="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: y=!0, ...w} = Sn(e, t);
            if ((n = s.arrow) != null && n.alignmentOffset)
                return {};
            const g = Cn(i)
              , m = dr(a)
              , v = Cn(a) === a
              , S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating))
              , C = h || (v || !y ? [nl(a)] : Rk(a))
              , T = x !== "none";
            !h && T && C.push(...Dk(a, y, x, S));
            const E = [a, ...C]
              , k = await io(t, w)
              , A = [];
            let R = ((r = s.flip) == null ? void 0 : r.overflows) || [];
            if (u && A.push(k[g]),
            f) {
                const L = Ak(i, o, S);
                A.push(k[L[0]], k[L[1]])
            }
            if (R = [...R, {
                placement: i,
                overflows: A
            }],
            !A.every(L => L <= 0)) {
                var z, I;
                const L = (((z = s.flip) == null ? void 0 : z.index) || 0) + 1
                  , q = E[L];
                if (q)
                    return {
                        data: {
                            index: L,
                            overflows: R
                        },
                        reset: {
                            placement: q
                        }
                    };
                let $ = (I = R.filter(V => V.overflows[0] <= 0).sort( (V, P) => V.overflows[1] - P.overflows[1])[0]) == null ? void 0 : I.placement;
                if (!$)
                    switch (p) {
                    case "bestFit":
                        {
                            var K;
                            const V = (K = R.filter(P => {
                                if (T) {
                                    const j = dr(P.placement);
                                    return j === m || j === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(j => j > 0).reduce( (j, O) => j + O, 0)]).sort( (P, j) => P[1] - j[1])[0]) == null ? void 0 : K[0];
                            V && ($ = V);
                            break
                        }
                    case "initialPlacement":
                        $ = a;
                        break
                    }
                if (i !== $)
                    return {
                        reset: {
                            placement: $
                        }
                    }
            }
            return {}
        }
    }
};
function dm(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function fm(e) {
    return Pk.some(t => e[t] >= 0)
}
const _k = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...i} = Sn(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const s = await io(t, {
                        ...i,
                        elementContext: "reference"
                    })
                      , o = dm(s, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: o,
                            referenceHidden: fm(o)
                        }
                    }
                }
            case "escaped":
                {
                    const s = await io(t, {
                        ...i,
                        altBoundary: !0
                    })
                      , o = dm(s, n.floating);
                    return {
                        data: {
                            escapedOffsets: o,
                            escaped: fm(o)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function Vk(e, t) {
    const {placement: n, platform: r, elements: i} = e
      , s = await (r.isRTL == null ? void 0 : r.isRTL(i.floating))
      , o = Cn(n)
      , a = ts(n)
      , l = dr(n) === "y"
      , c = ["left", "top"].includes(o) ? -1 : 1
      , u = s && l ? -1 : 1
      , f = Sn(t, e);
    let {mainAxis: h, crossAxis: p, alignmentAxis: x} = typeof f == "number" ? {
        mainAxis: f,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis
    };
    return a && typeof x == "number" && (p = a === "end" ? x * -1 : x),
    l ? {
        x: p * u,
        y: h * c
    } : {
        x: h * c,
        y: p * u
    }
}
const zk = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: i, y: s, placement: o, middlewareData: a} = t
              , l = await Vk(t, e);
            return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
                x: i + l.x,
                y: s + l.y,
                data: {
                    ...l,
                    placement: o
                }
            }
        }
    }
}
  , Bk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: i} = t
              , {mainAxis: s=!0, crossAxis: o=!1, limiter: a={
                fn: w => {
                    let {x: g, y: m} = w;
                    return {
                        x: g,
                        y: m
                    }
                }
            }, ...l} = Sn(e, t)
              , c = {
                x: n,
                y: r
            }
              , u = await io(t, l)
              , f = dr(Cn(i))
              , h = $f(f);
            let p = c[h]
              , x = c[f];
            if (s) {
                const w = h === "y" ? "top" : "left"
                  , g = h === "y" ? "bottom" : "right"
                  , m = p + u[w]
                  , v = p - u[g];
                p = Ju(m, p, v)
            }
            if (o) {
                const w = f === "y" ? "top" : "left"
                  , g = f === "y" ? "bottom" : "right"
                  , m = x + u[w]
                  , v = x - u[g];
                x = Ju(m, x, v)
            }
            const y = a.fn({
                ...t,
                [h]: p,
                [f]: x
            });
            return {
                ...y,
                data: {
                    x: y.x - n,
                    y: y.y - r,
                    enabled: {
                        [h]: s,
                        [f]: o
                    }
                }
            }
        }
    }
}
  , $k = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: i, rects: s, middlewareData: o} = t
              , {offset: a=0, mainAxis: l=!0, crossAxis: c=!0} = Sn(e, t)
              , u = {
                x: n,
                y: r
            }
              , f = dr(i)
              , h = $f(f);
            let p = u[h]
              , x = u[f];
            const y = Sn(a, t)
              , w = typeof y == "number" ? {
                mainAxis: y,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...y
            };
            if (l) {
                const v = h === "y" ? "height" : "width"
                  , S = s.reference[h] - s.floating[v] + w.mainAxis
                  , C = s.reference[h] + s.reference[v] - w.mainAxis;
                p < S ? p = S : p > C && (p = C)
            }
            if (c) {
                var g, m;
                const v = h === "y" ? "width" : "height"
                  , S = ["top", "left"].includes(Cn(i))
                  , C = s.reference[f] - s.floating[v] + (S && ((g = o.offset) == null ? void 0 : g[f]) || 0) + (S ? 0 : w.crossAxis)
                  , T = s.reference[f] + s.reference[v] + (S ? 0 : ((m = o.offset) == null ? void 0 : m[f]) || 0) - (S ? w.crossAxis : 0);
                x < C ? x = C : x > T && (x = T)
            }
            return {
                [h]: p,
                [f]: x
            }
        }
    }
}
  , Uk = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: i, rects: s, platform: o, elements: a} = t
              , {apply: l= () => {}
            , ...c} = Sn(e, t)
              , u = await io(t, c)
              , f = Cn(i)
              , h = ts(i)
              , p = dr(i) === "y"
              , {width: x, height: y} = s.floating;
            let w, g;
            f === "top" || f === "bottom" ? (w = f,
            g = h === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = f,
            w = h === "end" ? "top" : "bottom");
            const m = y - u.top - u.bottom
              , v = x - u.left - u.right
              , S = cr(y - u[w], m)
              , C = cr(x - u[g], v)
              , T = !t.middlewareData.shift;
            let E = S
              , k = C;
            if ((n = t.middlewareData.shift) != null && n.enabled.x && (k = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (E = m),
            T && !h) {
                const R = ot(u.left, 0)
                  , z = ot(u.right, 0)
                  , I = ot(u.top, 0)
                  , K = ot(u.bottom, 0);
                p ? k = x - 2 * (R !== 0 || z !== 0 ? R + z : ot(u.left, u.right)) : E = y - 2 * (I !== 0 || K !== 0 ? I + K : ot(u.top, u.bottom))
            }
            await l({
                ...t,
                availableWidth: k,
                availableHeight: E
            });
            const A = await o.getDimensions(a.floating);
            return x !== A.width || y !== A.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Fl() {
    return typeof window < "u"
}
function ns(e) {
    return Sx(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function ut(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function cn(e) {
    var t;
    return (t = (Sx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function Sx(e) {
    return Fl() ? e instanceof Node || e instanceof ut(e).Node : !1
}
function Kt(e) {
    return Fl() ? e instanceof Element || e instanceof ut(e).Element : !1
}
function an(e) {
    return Fl() ? e instanceof HTMLElement || e instanceof ut(e).HTMLElement : !1
}
function hm(e) {
    return !Fl() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ut(e).ShadowRoot
}
function ko(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: i} = Gt(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
}
function Wk(e) {
    return ["table", "td", "th"].includes(ns(e))
}
function _l(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Hf(e) {
    const t = Kf()
      , n = Kt(e) ? Gt(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function Hk(e) {
    let t = fr(e);
    for (; an(t) && !Ki(t); ) {
        if (Hf(t))
            return t;
        if (_l(t))
            return null;
        t = fr(t)
    }
    return null
}
function Kf() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Ki(e) {
    return ["html", "body", "#document"].includes(ns(e))
}
function Gt(e) {
    return ut(e).getComputedStyle(e)
}
function Vl(e) {
    return Kt(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function fr(e) {
    if (ns(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || hm(e) && e.host || cn(e);
    return hm(t) ? t.host : t
}
function Cx(e) {
    const t = fr(e);
    return Ki(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : an(t) && ko(t) ? t : Cx(t)
}
function so(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const i = Cx(e)
      , s = i === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , o = ut(i);
    if (s) {
        const a = td(o);
        return t.concat(o, o.visualViewport || [], ko(i) ? i : [], a && n ? so(a) : [])
    }
    return t.concat(i, so(i, [], n))
}
function td(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Tx(e) {
    const t = Gt(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const i = an(e)
      , s = i ? e.offsetWidth : n
      , o = i ? e.offsetHeight : r
      , a = tl(n) !== s || tl(r) !== o;
    return a && (n = s,
    r = o),
    {
        width: n,
        height: r,
        $: a
    }
}
function Gf(e) {
    return Kt(e) ? e : e.contextElement
}
function ji(e) {
    const t = Gf(e);
    if (!an(t))
        return ur(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: i, $: s} = Tx(t);
    let o = (s ? tl(n.width) : n.width) / r
      , a = (s ? tl(n.height) : n.height) / i;
    return (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    {
        x: o,
        y: a
    }
}
const Kk = ur(0);
function Ex(e) {
    const t = ut(e);
    return !Kf() || !t.visualViewport ? Kk : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function Gk(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== ut(e) ? !1 : t
}
function Hr(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const i = e.getBoundingClientRect()
      , s = Gf(e);
    let o = ur(1);
    t && (r ? Kt(r) && (o = ji(r)) : o = ji(e));
    const a = Gk(s, n, r) ? Ex(s) : ur(0);
    let l = (i.left + a.x) / o.x
      , c = (i.top + a.y) / o.y
      , u = i.width / o.x
      , f = i.height / o.y;
    if (s) {
        const h = ut(s)
          , p = r && Kt(r) ? ut(r) : r;
        let x = h
          , y = td(x);
        for (; y && r && p !== x; ) {
            const w = ji(y)
              , g = y.getBoundingClientRect()
              , m = Gt(y)
              , v = g.left + (y.clientLeft + parseFloat(m.paddingLeft)) * w.x
              , S = g.top + (y.clientTop + parseFloat(m.paddingTop)) * w.y;
            l *= w.x,
            c *= w.y,
            u *= w.x,
            f *= w.y,
            l += v,
            c += S,
            x = ut(y),
            y = td(x)
        }
    }
    return rl({
        width: u,
        height: f,
        x: l,
        y: c
    })
}
function qk(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: i} = e;
    const s = i === "fixed"
      , o = cn(r)
      , a = t ? _l(t.floating) : !1;
    if (r === o || a && s)
        return n;
    let l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , c = ur(1);
    const u = ur(0)
      , f = an(r);
    if ((f || !f && !s) && ((ns(r) !== "body" || ko(o)) && (l = Vl(r)),
    an(r))) {
        const h = Hr(r);
        c = ji(r),
        u.x = h.x + r.clientLeft,
        u.y = h.y + r.clientTop
    }
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + u.x,
        y: n.y * c.y - l.scrollTop * c.y + u.y
    }
}
function Yk(e) {
    return Array.from(e.getClientRects())
}
function nd(e, t) {
    const n = Vl(e).scrollLeft;
    return t ? t.left + n : Hr(cn(e)).left + n
}
function Qk(e) {
    const t = cn(e)
      , n = Vl(e)
      , r = e.ownerDocument.body
      , i = ot(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , s = ot(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let o = -n.scrollLeft + nd(e);
    const a = -n.scrollTop;
    return Gt(r).direction === "rtl" && (o += ot(t.clientWidth, r.clientWidth) - i),
    {
        width: i,
        height: s,
        x: o,
        y: a
    }
}
function Xk(e, t) {
    const n = ut(e)
      , r = cn(e)
      , i = n.visualViewport;
    let s = r.clientWidth
      , o = r.clientHeight
      , a = 0
      , l = 0;
    if (i) {
        s = i.width,
        o = i.height;
        const c = Kf();
        (!c || c && t === "fixed") && (a = i.offsetLeft,
        l = i.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: a,
        y: l
    }
}
function Zk(e, t) {
    const n = Hr(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , i = n.left + e.clientLeft
      , s = an(e) ? ji(e) : ur(1)
      , o = e.clientWidth * s.x
      , a = e.clientHeight * s.y
      , l = i * s.x
      , c = r * s.y;
    return {
        width: o,
        height: a,
        x: l,
        y: c
    }
}
function pm(e, t, n) {
    let r;
    if (t === "viewport")
        r = Xk(e, n);
    else if (t === "document")
        r = Qk(cn(e));
    else if (Kt(t))
        r = Zk(t, n);
    else {
        const i = Ex(e);
        r = {
            ...t,
            x: t.x - i.x,
            y: t.y - i.y
        }
    }
    return rl(r)
}
function kx(e, t) {
    const n = fr(e);
    return n === t || !Kt(n) || Ki(n) ? !1 : Gt(n).position === "fixed" || kx(n, t)
}
function Jk(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = so(e, [], !1).filter(a => Kt(a) && ns(a) !== "body")
      , i = null;
    const s = Gt(e).position === "fixed";
    let o = s ? fr(e) : e;
    for (; Kt(o) && !Ki(o); ) {
        const a = Gt(o)
          , l = Hf(o);
        !l && a.position === "fixed" && (i = null),
        (s ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ko(o) && !l && kx(e, o)) ? r = r.filter(u => u !== o) : i = a,
        o = fr(o)
    }
    return t.set(e, r),
    r
}
function eP(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: i} = e;
    const o = [...n === "clippingAncestors" ? _l(t) ? [] : Jk(t, this._c) : [].concat(n), r]
      , a = o[0]
      , l = o.reduce( (c, u) => {
        const f = pm(t, u, i);
        return c.top = ot(f.top, c.top),
        c.right = cr(f.right, c.right),
        c.bottom = cr(f.bottom, c.bottom),
        c.left = ot(f.left, c.left),
        c
    }
    , pm(t, a, i));
    return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top
    }
}
function tP(e) {
    const {width: t, height: n} = Tx(e);
    return {
        width: t,
        height: n
    }
}
function nP(e, t, n) {
    const r = an(t)
      , i = cn(t)
      , s = n === "fixed"
      , o = Hr(e, !0, s, t);
    let a = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const l = ur(0);
    if (r || !r && !s)
        if ((ns(t) !== "body" || ko(i)) && (a = Vl(t)),
        r) {
            const p = Hr(t, !0, s, t);
            l.x = p.x + t.clientLeft,
            l.y = p.y + t.clientTop
        } else
            i && (l.x = nd(i));
    let c = 0
      , u = 0;
    if (i && !r && !s) {
        const p = i.getBoundingClientRect();
        u = p.top + a.scrollTop,
        c = p.left + a.scrollLeft - nd(i, p)
    }
    const f = o.left + a.scrollLeft - l.x - c
      , h = o.top + a.scrollTop - l.y - u;
    return {
        x: f,
        y: h,
        width: o.width,
        height: o.height
    }
}
function Lc(e) {
    return Gt(e).position === "static"
}
function mm(e, t) {
    if (!an(e) || Gt(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    let n = e.offsetParent;
    return cn(e) === n && (n = n.ownerDocument.body),
    n
}
function Px(e, t) {
    const n = ut(e);
    if (_l(e))
        return n;
    if (!an(e)) {
        let i = fr(e);
        for (; i && !Ki(i); ) {
            if (Kt(i) && !Lc(i))
                return i;
            i = fr(i)
        }
        return n
    }
    let r = mm(e, t);
    for (; r && Wk(r) && Lc(r); )
        r = mm(r, t);
    return r && Ki(r) && Lc(r) && !Hf(r) ? n : r || Hk(e) || n
}
const rP = async function(e) {
    const t = this.getOffsetParent || Px
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: nP(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function iP(e) {
    return Gt(e).direction === "rtl"
}
const sP = {
    convertOffsetParentRelativeRectToViewportRelativeRect: qk,
    getDocumentElement: cn,
    getClippingRect: eP,
    getOffsetParent: Px,
    getElementRects: rP,
    getClientRects: Yk,
    getDimensions: tP,
    getScale: ji,
    isElement: Kt,
    isRTL: iP
};
function oP(e, t) {
    let n = null, r;
    const i = cn(e);
    function s() {
        var a;
        clearTimeout(r),
        (a = n) == null || a.disconnect(),
        n = null
    }
    function o(a, l) {
        a === void 0 && (a = !1),
        l === void 0 && (l = 1),
        s();
        const {left: c, top: u, width: f, height: h} = e.getBoundingClientRect();
        if (a || t(),
        !f || !h)
            return;
        const p = na(u)
          , x = na(i.clientWidth - (c + f))
          , y = na(i.clientHeight - (u + h))
          , w = na(c)
          , m = {
            rootMargin: -p + "px " + -x + "px " + -y + "px " + -w + "px",
            threshold: ot(0, cr(1, l)) || 1
        };
        let v = !0;
        function S(C) {
            const T = C[0].intersectionRatio;
            if (T !== l) {
                if (!v)
                    return o();
                T ? o(!1, T) : r = setTimeout( () => {
                    o(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(S,{
                ...m,
                root: i.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(S,m)
        }
        n.observe(e)
    }
    return o(!0),
    s
}
function aP(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: i=!0, ancestorResize: s=!0, elementResize: o=typeof ResizeObserver == "function", layoutShift: a=typeof IntersectionObserver == "function", animationFrame: l=!1} = r
      , c = Gf(e)
      , u = i || s ? [...c ? so(c) : [], ...so(t)] : [];
    u.forEach(g => {
        i && g.addEventListener("scroll", n, {
            passive: !0
        }),
        s && g.addEventListener("resize", n)
    }
    );
    const f = c && a ? oP(c, n) : null;
    let h = -1
      , p = null;
    o && (p = new ResizeObserver(g => {
        let[m] = g;
        m && m.target === c && p && (p.unobserve(t),
        cancelAnimationFrame(h),
        h = requestAnimationFrame( () => {
            var v;
            (v = p) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    c && !l && p.observe(c),
    p.observe(t));
    let x, y = l ? Hr(e) : null;
    l && w();
    function w() {
        const g = Hr(e);
        y && (g.x !== y.x || g.y !== y.y || g.width !== y.width || g.height !== y.height) && n(),
        y = g,
        x = requestAnimationFrame(w)
    }
    return n(),
    () => {
        var g;
        u.forEach(m => {
            i && m.removeEventListener("scroll", n),
            s && m.removeEventListener("resize", n)
        }
        ),
        f == null || f(),
        (g = p) == null || g.disconnect(),
        p = null,
        l && cancelAnimationFrame(x)
    }
}
const lP = zk
  , cP = Bk
  , uP = Fk
  , dP = Uk
  , fP = _k
  , gm = Ik
  , hP = $k
  , pP = (e, t, n) => {
    const r = new Map
      , i = {
        platform: sP,
        ...n
    }
      , s = {
        ...i.platform,
        _c: r
    };
    return Ok(e, t, {
        ...i,
        platform: s
    })
}
;
var Ca = typeof document < "u" ? b.useLayoutEffect : b.useEffect;
function il(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, i;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!il(e[r], t[r]))
                    return !1;
            return !0
        }
        if (i = Object.keys(e),
        n = i.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, i[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const s = i[r];
            if (!(s === "_owner" && e.$$typeof) && !il(e[s], t[s]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Nx(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function ym(e, t) {
    const n = Nx(e);
    return Math.round(t * n) / n
}
function Oc(e) {
    const t = b.useRef(e);
    return Ca( () => {
        t.current = e
    }
    ),
    t
}
function mP(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: i, elements: {reference: s, floating: o}={}, transform: a=!0, whileElementsMounted: l, open: c} = e
      , [u,f] = b.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [h,p] = b.useState(r);
    il(h, r) || p(r);
    const [x,y] = b.useState(null)
      , [w,g] = b.useState(null)
      , m = b.useCallback(P => {
        P !== T.current && (T.current = P,
        y(P))
    }
    , [])
      , v = b.useCallback(P => {
        P !== E.current && (E.current = P,
        g(P))
    }
    , [])
      , S = s || x
      , C = o || w
      , T = b.useRef(null)
      , E = b.useRef(null)
      , k = b.useRef(u)
      , A = l != null
      , R = Oc(l)
      , z = Oc(i)
      , I = Oc(c)
      , K = b.useCallback( () => {
        if (!T.current || !E.current)
            return;
        const P = {
            placement: t,
            strategy: n,
            middleware: h
        };
        z.current && (P.platform = z.current),
        pP(T.current, E.current, P).then(j => {
            const O = {
                ...j,
                isPositioned: I.current !== !1
            };
            L.current && !il(k.current, O) && (k.current = O,
            To.flushSync( () => {
                f(O)
            }
            ))
        }
        )
    }
    , [h, t, n, z, I]);
    Ca( () => {
        c === !1 && k.current.isPositioned && (k.current.isPositioned = !1,
        f(P => ({
            ...P,
            isPositioned: !1
        })))
    }
    , [c]);
    const L = b.useRef(!1);
    Ca( () => (L.current = !0,
    () => {
        L.current = !1
    }
    ), []),
    Ca( () => {
        if (S && (T.current = S),
        C && (E.current = C),
        S && C) {
            if (R.current)
                return R.current(S, C, K);
            K()
        }
    }
    , [S, C, K, R, A]);
    const q = b.useMemo( () => ({
        reference: T,
        floating: E,
        setReference: m,
        setFloating: v
    }), [m, v])
      , $ = b.useMemo( () => ({
        reference: S,
        floating: C
    }), [S, C])
      , V = b.useMemo( () => {
        const P = {
            position: n,
            left: 0,
            top: 0
        };
        if (!$.floating)
            return P;
        const j = ym($.floating, u.x)
          , O = ym($.floating, u.y);
        return a ? {
            ...P,
            transform: "translate(" + j + "px, " + O + "px)",
            ...Nx($.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: j,
            top: O
        }
    }
    , [n, a, $.floating, u.x, u.y]);
    return b.useMemo( () => ({
        ...u,
        update: K,
        refs: q,
        elements: $,
        floatingStyles: V
    }), [u, K, q, $, V])
}
const gP = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: i} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? gm({
                element: r.current,
                padding: i
            }).fn(n) : {} : r ? gm({
                element: r,
                padding: i
            }).fn(n) : {}
        }
    }
}
  , yP = (e, t) => ({
    ...lP(e),
    options: [e, t]
})
  , vP = (e, t) => ({
    ...cP(e),
    options: [e, t]
})
  , xP = (e, t) => ({
    ...hP(e),
    options: [e, t]
})
  , wP = (e, t) => ({
    ...uP(e),
    options: [e, t]
})
  , bP = (e, t) => ({
    ...dP(e),
    options: [e, t]
})
  , SP = (e, t) => ({
    ...fP(e),
    options: [e, t]
})
  , CP = (e, t) => ({
    ...gP(e),
    options: [e, t]
});
var TP = "Arrow"
  , jx = b.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: i=5, ...s} = e;
    return d.jsx(Ae.svg, {
        ...s,
        ref: t,
        width: r,
        height: i,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : d.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
jx.displayName = TP;
var EP = jx;
function kP(e) {
    const [t,n] = b.useState(void 0);
    return on( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(i => {
                if (!Array.isArray(i) || !i.length)
                    return;
                const s = i[0];
                let o, a;
                if ("borderBoxSize"in s) {
                    const l = s.borderBoxSize
                      , c = Array.isArray(l) ? l[0] : l;
                    o = c.inlineSize,
                    a = c.blockSize
                } else
                    o = e.offsetWidth,
                    a = e.offsetHeight;
                n({
                    width: o,
                    height: a
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var Ax = "Popper"
  , [Rx,Mx] = Ji(Ax)
  , [vL,Dx] = Rx(Ax)
  , Lx = "PopperAnchor"
  , Ox = b.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...i} = e
      , s = Dx(Lx, n)
      , o = b.useRef(null)
      , a = ft(t, o);
    return b.useEffect( () => {
        s.onAnchorChange((r == null ? void 0 : r.current) || o.current)
    }
    ),
    r ? null : d.jsx(Ae.div, {
        ...i,
        ref: a
    })
}
);
Ox.displayName = Lx;
var qf = "PopperContent"
  , [PP,NP] = Rx(qf)
  , Ix = b.forwardRef( (e, t) => {
    var te, Yr, kn, xr, Pn, Qr;
    const {__scopePopper: n, side: r="bottom", sideOffset: i=0, align: s="center", alignOffset: o=0, arrowPadding: a=0, avoidCollisions: l=!0, collisionBoundary: c=[], collisionPadding: u=0, sticky: f="partial", hideWhenDetached: h=!1, updatePositionStrategy: p="optimized", onPlaced: x, ...y} = e
      , w = Dx(qf, n)
      , [g,m] = b.useState(null)
      , v = ft(t, Nn => m(Nn))
      , [S,C] = b.useState(null)
      , T = kP(S)
      , E = (T == null ? void 0 : T.width) ?? 0
      , k = (T == null ? void 0 : T.height) ?? 0
      , A = r + (s !== "center" ? "-" + s : "")
      , R = typeof u == "number" ? u : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...u
    }
      , z = Array.isArray(c) ? c : [c]
      , I = z.length > 0
      , K = {
        padding: R,
        boundary: z.filter(AP),
        altBoundary: I
    }
      , {refs: L, floatingStyles: q, placement: $, isPositioned: V, middlewareData: P} = mP({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...Nn) => aP(...Nn, {
            animationFrame: p === "always"
        }),
        elements: {
            reference: w.anchor
        },
        middleware: [yP({
            mainAxis: i + k,
            alignmentAxis: o
        }), l && vP({
            mainAxis: !0,
            crossAxis: !1,
            limiter: f === "partial" ? xP() : void 0,
            ...K
        }), l && wP({
            ...K
        }), bP({
            ...K,
            apply: ({elements: Nn, rects: Mo, availableWidth: Jl, availableHeight: Do}) => {
                const {width: ec, height: ls} = Mo.reference
                  , Xr = Nn.floating.style;
                Xr.setProperty("--radix-popper-available-width", `${Jl}px`),
                Xr.setProperty("--radix-popper-available-height", `${Do}px`),
                Xr.setProperty("--radix-popper-anchor-width", `${ec}px`),
                Xr.setProperty("--radix-popper-anchor-height", `${ls}px`)
            }
        }), S && CP({
            element: S,
            padding: a
        }), RP({
            arrowWidth: E,
            arrowHeight: k
        }), h && SP({
            strategy: "referenceHidden",
            ...K
        })]
    })
      , [j,O] = Vx($)
      , U = lr(x);
    on( () => {
        V && (U == null || U())
    }
    , [V, U]);
    const B = (te = P.arrow) == null ? void 0 : te.x
      , Y = (Yr = P.arrow) == null ? void 0 : Yr.y
      , X = ((kn = P.arrow) == null ? void 0 : kn.centerOffset) !== 0
      , [Se,Fe] = b.useState();
    return on( () => {
        g && Fe(window.getComputedStyle(g).zIndex)
    }
    , [g]),
    d.jsx("div", {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...q,
            transform: V ? q.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: Se,
            "--radix-popper-transform-origin": [(xr = P.transformOrigin) == null ? void 0 : xr.x, (Pn = P.transformOrigin) == null ? void 0 : Pn.y].join(" "),
            ...((Qr = P.hide) == null ? void 0 : Qr.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: d.jsx(PP, {
            scope: n,
            placedSide: j,
            onArrowChange: C,
            arrowX: B,
            arrowY: Y,
            shouldHideArrow: X,
            children: d.jsx(Ae.div, {
                "data-side": j,
                "data-align": O,
                ...y,
                ref: v,
                style: {
                    ...y.style,
                    animation: V ? void 0 : "none"
                }
            })
        })
    })
}
);
Ix.displayName = qf;
var Fx = "PopperArrow"
  , jP = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , _x = b.forwardRef(function(t, n) {
    const {__scopePopper: r, ...i} = t
      , s = NP(Fx, r)
      , o = jP[s.placedSide];
    return d.jsx("span", {
        ref: s.onArrowChange,
        style: {
            position: "absolute",
            left: s.arrowX,
            top: s.arrowY,
            [o]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[s.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[s.placedSide],
            visibility: s.shouldHideArrow ? "hidden" : void 0
        },
        children: d.jsx(EP, {
            ...i,
            ref: n,
            style: {
                ...i.style,
                display: "block"
            }
        })
    })
});
_x.displayName = Fx;
function AP(e) {
    return e !== null
}
var RP = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, g, m;
        const {placement: n, rects: r, middlewareData: i} = t
          , o = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0
          , a = o ? 0 : e.arrowWidth
          , l = o ? 0 : e.arrowHeight
          , [c,u] = Vx(n)
          , f = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[u]
          , h = (((g = i.arrow) == null ? void 0 : g.x) ?? 0) + a / 2
          , p = (((m = i.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let x = ""
          , y = "";
        return c === "bottom" ? (x = o ? f : `${h}px`,
        y = `${-l}px`) : c === "top" ? (x = o ? f : `${h}px`,
        y = `${r.floating.height + l}px`) : c === "right" ? (x = `${-l}px`,
        y = o ? f : `${p}px`) : c === "left" && (x = `${r.floating.width + l}px`,
        y = o ? f : `${p}px`),
        {
            data: {
                x,
                y
            }
        }
    }
});
function Vx(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var MP = Ox
  , DP = Ix
  , LP = _x
  , [zl,xL] = Ji("Tooltip", [Mx])
  , Yf = Mx()
  , zx = "TooltipProvider"
  , OP = 700
  , vm = "tooltip.open"
  , [IP,Bx] = zl(zx)
  , $x = e => {
    const {__scopeTooltip: t, delayDuration: n=OP, skipDelayDuration: r=300, disableHoverableContent: i=!1, children: s} = e
      , o = b.useRef(!0)
      , a = b.useRef(!1)
      , l = b.useRef(0);
    return b.useEffect( () => {
        const c = l.current;
        return () => window.clearTimeout(c)
    }
    , []),
    d.jsx(IP, {
        scope: t,
        isOpenDelayedRef: o,
        delayDuration: n,
        onOpen: b.useCallback( () => {
            window.clearTimeout(l.current),
            o.current = !1
        }
        , []),
        onClose: b.useCallback( () => {
            window.clearTimeout(l.current),
            l.current = window.setTimeout( () => o.current = !0, r)
        }
        , [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: b.useCallback(c => {
            a.current = c
        }
        , []),
        disableHoverableContent: i,
        children: s
    })
}
;
$x.displayName = zx;
var Ux = "Tooltip"
  , [wL,Bl] = zl(Ux)
  , rd = "TooltipTrigger"
  , FP = b.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = Bl(rd, n)
      , s = Bx(rd, n)
      , o = Yf(n)
      , a = b.useRef(null)
      , l = ft(t, a, i.onTriggerChange)
      , c = b.useRef(!1)
      , u = b.useRef(!1)
      , f = b.useCallback( () => c.current = !1, []);
    return b.useEffect( () => () => document.removeEventListener("pointerup", f), [f]),
    d.jsx(MP, {
        asChild: !0,
        ...o,
        children: d.jsx(Ae.button, {
            "aria-describedby": i.open ? i.contentId : void 0,
            "data-state": i.stateAttribute,
            ...r,
            ref: l,
            onPointerMove: be(e.onPointerMove, h => {
                h.pointerType !== "touch" && !u.current && !s.isPointerInTransitRef.current && (i.onTriggerEnter(),
                u.current = !0)
            }
            ),
            onPointerLeave: be(e.onPointerLeave, () => {
                i.onTriggerLeave(),
                u.current = !1
            }
            ),
            onPointerDown: be(e.onPointerDown, () => {
                i.open && i.onClose(),
                c.current = !0,
                document.addEventListener("pointerup", f, {
                    once: !0
                })
            }
            ),
            onFocus: be(e.onFocus, () => {
                c.current || i.onOpen()
            }
            ),
            onBlur: be(e.onBlur, i.onClose),
            onClick: be(e.onClick, i.onClose)
        })
    })
}
);
FP.displayName = rd;
var _P = "TooltipPortal"
  , [bL,VP] = zl(_P, {
    forceMount: void 0
})
  , Gi = "TooltipContent"
  , Wx = b.forwardRef( (e, t) => {
    const n = VP(Gi, e.__scopeTooltip)
      , {forceMount: r=n.forceMount, side: i="top", ...s} = e
      , o = Bl(Gi, e.__scopeTooltip);
    return d.jsx(Dl, {
        present: r || o.open,
        children: o.disableHoverableContent ? d.jsx(Hx, {
            side: i,
            ...s,
            ref: t
        }) : d.jsx(zP, {
            side: i,
            ...s,
            ref: t
        })
    })
}
)
  , zP = b.forwardRef( (e, t) => {
    const n = Bl(Gi, e.__scopeTooltip)
      , r = Bx(Gi, e.__scopeTooltip)
      , i = b.useRef(null)
      , s = ft(t, i)
      , [o,a] = b.useState(null)
      , {trigger: l, onClose: c} = n
      , u = i.current
      , {onPointerInTransitChange: f} = r
      , h = b.useCallback( () => {
        a(null),
        f(!1)
    }
    , [f])
      , p = b.useCallback( (x, y) => {
        const w = x.currentTarget
          , g = {
            x: x.clientX,
            y: x.clientY
        }
          , m = HP(g, w.getBoundingClientRect())
          , v = KP(g, m)
          , S = GP(y.getBoundingClientRect())
          , C = YP([...v, ...S]);
        a(C),
        f(!0)
    }
    , [f]);
    return b.useEffect( () => () => h(), [h]),
    b.useEffect( () => {
        if (l && u) {
            const x = w => p(w, u)
              , y = w => p(w, l);
            return l.addEventListener("pointerleave", x),
            u.addEventListener("pointerleave", y),
            () => {
                l.removeEventListener("pointerleave", x),
                u.removeEventListener("pointerleave", y)
            }
        }
    }
    , [l, u, p, h]),
    b.useEffect( () => {
        if (o) {
            const x = y => {
                const w = y.target
                  , g = {
                    x: y.clientX,
                    y: y.clientY
                }
                  , m = (l == null ? void 0 : l.contains(w)) || (u == null ? void 0 : u.contains(w))
                  , v = !qP(g, o);
                m ? h() : v && (h(),
                c())
            }
            ;
            return document.addEventListener("pointermove", x),
            () => document.removeEventListener("pointermove", x)
        }
    }
    , [l, u, o, c, h]),
    d.jsx(Hx, {
        ...e,
        ref: s
    })
}
)
  , [BP,$P] = zl(Ux, {
    isInside: !1
})
  , UP = uT("TooltipContent")
  , Hx = b.forwardRef( (e, t) => {
    const {__scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: s, onPointerDownOutside: o, ...a} = e
      , l = Bl(Gi, n)
      , c = Yf(n)
      , {onClose: u} = l;
    return b.useEffect( () => (document.addEventListener(vm, u),
    () => document.removeEventListener(vm, u)), [u]),
    b.useEffect( () => {
        if (l.trigger) {
            const f = h => {
                const p = h.target;
                p != null && p.contains(l.trigger) && u()
            }
            ;
            return window.addEventListener("scroll", f, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", f, {
                capture: !0
            })
        }
    }
    , [l.trigger, u]),
    d.jsx(Af, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: u,
        children: d.jsxs(DP, {
            "data-state": l.stateAttribute,
            ...c,
            ...a,
            ref: t,
            style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [d.jsx(UP, {
                children: r
            }), d.jsx(BP, {
                scope: n,
                isInside: !0,
                children: d.jsx(DT, {
                    id: l.contentId,
                    role: "tooltip",
                    children: i || r
                })
            })]
        })
    })
}
);
Wx.displayName = Gi;
var Kx = "TooltipArrow"
  , WP = b.forwardRef( (e, t) => {
    const {__scopeTooltip: n, ...r} = e
      , i = Yf(n);
    return $P(Kx, n).isInside ? null : d.jsx(LP, {
        ...i,
        ...r,
        ref: t
    })
}
);
WP.displayName = Kx;
function HP(e, t) {
    const n = Math.abs(t.top - e.y)
      , r = Math.abs(t.bottom - e.y)
      , i = Math.abs(t.right - e.x)
      , s = Math.abs(t.left - e.x);
    switch (Math.min(n, r, i, s)) {
    case s:
        return "left";
    case i:
        return "right";
    case n:
        return "top";
    case r:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function KP(e, t, n=5) {
    const r = [];
    switch (t) {
    case "top":
        r.push({
            x: e.x - n,
            y: e.y + n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "bottom":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y - n
        });
        break;
    case "left":
        r.push({
            x: e.x + n,
            y: e.y - n
        }, {
            x: e.x + n,
            y: e.y + n
        });
        break;
    case "right":
        r.push({
            x: e.x - n,
            y: e.y - n
        }, {
            x: e.x - n,
            y: e.y + n
        });
        break
    }
    return r
}
function GP(e) {
    const {top: t, right: n, bottom: r, left: i} = e;
    return [{
        x: i,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: i,
        y: r
    }]
}
function qP(e, t) {
    const {x: n, y: r} = e;
    let i = !1;
    for (let s = 0, o = t.length - 1; s < t.length; o = s++) {
        const a = t[s]
          , l = t[o]
          , c = a.x
          , u = a.y
          , f = l.x
          , h = l.y;
        u > r != h > r && n < (f - c) * (r - u) / (h - u) + c && (i = !i)
    }
    return i
}
function YP(e) {
    const t = e.slice();
    return t.sort( (n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0),
    QP(t)
}
function QP(e) {
    if (e.length <= 1)
        return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const i = e[r];
        for (; t.length >= 2; ) {
            const s = t[t.length - 1]
              , o = t[t.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                t.pop();
            else
                break
        }
        t.push(i)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const i = e[r];
        for (; n.length >= 2; ) {
            const s = n[n.length - 1]
              , o = n[n.length - 2];
            if ((s.x - o.x) * (i.y - o.y) >= (s.y - o.y) * (i.x - o.x))
                n.pop();
            else
                break
        }
        n.push(i)
    }
    return n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
var XP = $x
  , Gx = Wx;
const ZP = XP
  , JP = b.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => d.jsx(Gx, {
    ref: r,
    sideOffset: t,
    className: mt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...n
}));
JP.displayName = Gx.displayName;
var $l = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(e) {
        return this.listeners.add(e),
        this.onSubscribe(),
        () => {
            this.listeners.delete(e),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Ul = typeof window > "u" || "Deno"in globalThis;
function Ft() {}
function e2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function t2(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function n2(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}
function id(e, t) {
    return typeof e == "function" ? e(t) : e
}
function r2(e, t) {
    return typeof e == "function" ? e(t) : e
}
function xm(e, t) {
    const {type: n="all", exact: r, fetchStatus: i, predicate: s, queryKey: o, stale: a} = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Qf(o, t.options))
                return !1
        } else if (!ao(t.queryKey, o))
            return !1
    }
    if (n !== "all") {
        const l = t.isActive();
        if (n === "active" && !l || n === "inactive" && l)
            return !1
    }
    return !(typeof a == "boolean" && t.isStale() !== a || i && i !== t.state.fetchStatus || s && !s(t))
}
function wm(e, t) {
    const {exact: n, status: r, predicate: i, mutationKey: s} = e;
    if (s) {
        if (!t.options.mutationKey)
            return !1;
        if (n) {
            if (oo(t.options.mutationKey) !== oo(s))
                return !1
        } else if (!ao(t.options.mutationKey, s))
            return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}
function Qf(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || oo)(e)
}
function oo(e) {
    return JSON.stringify(e, (t, n) => sd(n) ? Object.keys(n).sort().reduce( (r, i) => (r[i] = n[i],
    r), {}) : n)
}
function ao(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every(n => ao(e[n], t[n])) : !1
}
function qx(e, t) {
    if (e === t)
        return e;
    const n = bm(e) && bm(t);
    if (n || sd(e) && sd(t)) {
        const r = n ? e : Object.keys(e)
          , i = r.length
          , s = n ? t : Object.keys(t)
          , o = s.length
          , a = n ? [] : {}
          , l = new Set(r);
        let c = 0;
        for (let u = 0; u < o; u++) {
            const f = n ? u : s[u];
            (!n && l.has(f) || n) && e[f] === void 0 && t[f] === void 0 ? (a[f] = void 0,
            c++) : (a[f] = qx(e[f], t[f]),
            a[f] === e[f] && e[f] !== void 0 && c++)
        }
        return i === o && c === i ? e : a
    }
    return t
}
function bm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}
function sd(e) {
    if (!Sm(e))
        return !1;
    const t = e.constructor;
    if (t === void 0)
        return !0;
    const n = t.prototype;
    return !(!Sm(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function Sm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}
function i2(e) {
    return new Promise(t => {
        setTimeout(t, e)
    }
    )
}
function s2(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? qx(e, t) : t
}
function o2(e, t, n=0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}
function a2(e, t, n=0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Xf = Symbol();
function Yx(e, t) {
    return !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Xf ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
var Rr, $n, Ri, ny, l2 = (ny = class extends $l {
    constructor() {
        super();
        ee(this, Rr);
        ee(this, $n);
        ee(this, Ri);
        H(this, Ri, t => {
            if (!Ul && window.addEventListener) {
                const n = () => t();
                return window.addEventListener("visibilitychange", n, !1),
                () => {
                    window.removeEventListener("visibilitychange", n)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, $n) || this.setEventListener(N(this, Ri))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, $n)) == null || t.call(this),
        H(this, $n, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Ri, t),
        (n = N(this, $n)) == null || n.call(this),
        H(this, $n, t(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        ))
    }
    setFocused(t) {
        N(this, Rr) !== t && (H(this, Rr, t),
        this.onFocus())
    }
    onFocus() {
        const t = this.isFocused();
        this.listeners.forEach(n => {
            n(t)
        }
        )
    }
    isFocused() {
        var t;
        return typeof N(this, Rr) == "boolean" ? N(this, Rr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
    }
}
,
Rr = new WeakMap,
$n = new WeakMap,
Ri = new WeakMap,
ny), Qx = new l2, Mi, Un, Di, ry, c2 = (ry = class extends $l {
    constructor() {
        super();
        ee(this, Mi, !0);
        ee(this, Un);
        ee(this, Di);
        H(this, Di, t => {
            if (!Ul && window.addEventListener) {
                const n = () => t(!0)
                  , r = () => t(!1);
                return window.addEventListener("online", n, !1),
                window.addEventListener("offline", r, !1),
                () => {
                    window.removeEventListener("online", n),
                    window.removeEventListener("offline", r)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Un) || this.setEventListener(N(this, Di))
    }
    onUnsubscribe() {
        var t;
        this.hasListeners() || ((t = N(this, Un)) == null || t.call(this),
        H(this, Un, void 0))
    }
    setEventListener(t) {
        var n;
        H(this, Di, t),
        (n = N(this, Un)) == null || n.call(this),
        H(this, Un, t(this.setOnline.bind(this)))
    }
    setOnline(t) {
        N(this, Mi) !== t && (H(this, Mi, t),
        this.listeners.forEach(r => {
            r(t)
        }
        ))
    }
    isOnline() {
        return N(this, Mi)
    }
}
,
Mi = new WeakMap,
Un = new WeakMap,
Di = new WeakMap,
ry), sl = new c2;
function u2() {
    let e, t;
    const n = new Promise( (i, s) => {
        e = i,
        t = s
    }
    );
    n.status = "pending",
    n.catch( () => {}
    );
    function r(i) {
        Object.assign(n, i),
        delete n.resolve,
        delete n.reject
    }
    return n.resolve = i => {
        r({
            status: "fulfilled",
            value: i
        }),
        e(i)
    }
    ,
    n.reject = i => {
        r({
            status: "rejected",
            reason: i
        }),
        t(i)
    }
    ,
    n
}
function d2(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}
function Xx(e) {
    return (e ?? "online") === "online" ? sl.isOnline() : !0
}
var Zx = class extends Error {
    constructor(e) {
        super("CancelledError"),
        this.revert = e == null ? void 0 : e.revert,
        this.silent = e == null ? void 0 : e.silent
    }
}
;
function Ic(e) {
    return e instanceof Zx
}
function Jx(e) {
    let t = !1, n = 0, r = !1, i;
    const s = u2()
      , o = y => {
        var w;
        r || (h(new Zx(y)),
        (w = e.abort) == null || w.call(e))
    }
      , a = () => {
        t = !0
    }
      , l = () => {
        t = !1
    }
      , c = () => Qx.isFocused() && (e.networkMode === "always" || sl.isOnline()) && e.canRun()
      , u = () => Xx(e.networkMode) && e.canRun()
      , f = y => {
        var w;
        r || (r = !0,
        (w = e.onSuccess) == null || w.call(e, y),
        i == null || i(),
        s.resolve(y))
    }
      , h = y => {
        var w;
        r || (r = !0,
        (w = e.onError) == null || w.call(e, y),
        i == null || i(),
        s.reject(y))
    }
      , p = () => new Promise(y => {
        var w;
        i = g => {
            (r || c()) && y(g)
        }
        ,
        (w = e.onPause) == null || w.call(e)
    }
    ).then( () => {
        var y;
        i = void 0,
        r || (y = e.onContinue) == null || y.call(e)
    }
    )
      , x = () => {
        if (r)
            return;
        let y;
        const w = n === 0 ? e.initialPromise : void 0;
        try {
            y = w ?? e.fn()
        } catch (g) {
            y = Promise.reject(g)
        }
        Promise.resolve(y).then(f).catch(g => {
            var T;
            if (r)
                return;
            const m = e.retry ?? (Ul ? 0 : 3)
              , v = e.retryDelay ?? d2
              , S = typeof v == "function" ? v(n, g) : v
              , C = m === !0 || typeof m == "number" && n < m || typeof m == "function" && m(n, g);
            if (t || !C) {
                h(g);
                return
            }
            n++,
            (T = e.onFail) == null || T.call(e, n, g),
            i2(S).then( () => c() ? void 0 : p()).then( () => {
                t ? h(g) : x()
            }
            )
        }
        )
    }
    ;
    return {
        promise: s,
        cancel: o,
        continue: () => (i == null || i(),
        s),
        cancelRetry: a,
        continueRetry: l,
        canStart: u,
        start: () => (u() ? x() : p().then(x),
        s)
    }
}
var f2 = e => setTimeout(e, 0);
function h2() {
    let e = []
      , t = 0
      , n = a => {
        a()
    }
      , r = a => {
        a()
    }
      , i = f2;
    const s = a => {
        t ? e.push(a) : i( () => {
            n(a)
        }
        )
    }
      , o = () => {
        const a = e;
        e = [],
        a.length && i( () => {
            r( () => {
                a.forEach(l => {
                    n(l)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: a => {
            let l;
            t++;
            try {
                l = a()
            } finally {
                t--,
                t || o()
            }
            return l
        }
        ,
        batchCalls: a => (...l) => {
            s( () => {
                a(...l)
            }
            )
        }
        ,
        schedule: s,
        setNotifyFunction: a => {
            n = a
        }
        ,
        setBatchNotifyFunction: a => {
            r = a
        }
        ,
        setScheduler: a => {
            i = a
        }
    }
}
var Ge = h2(), Mr, iy, ew = (iy = class {
    constructor() {
        ee(this, Mr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        t2(this.gcTime) && H(this, Mr, setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(e) {
        this.gcTime = Math.max(this.gcTime || 0, e ?? (Ul ? 1 / 0 : 5 * 60 * 1e3))
    }
    clearGcTimeout() {
        N(this, Mr) && (clearTimeout(N(this, Mr)),
        H(this, Mr, void 0))
    }
}
,
Mr = new WeakMap,
iy), Li, Dr, vt, Lr, Be, yo, Or, _t, dn, sy, p2 = (sy = class extends ew {
    constructor(t) {
        super();
        ee(this, _t);
        ee(this, Li);
        ee(this, Dr);
        ee(this, vt);
        ee(this, Lr);
        ee(this, Be);
        ee(this, yo);
        ee(this, Or);
        H(this, Or, !1),
        H(this, yo, t.defaultOptions),
        this.setOptions(t.options),
        this.observers = [],
        H(this, Lr, t.client),
        H(this, vt, N(this, Lr).getQueryCache()),
        this.queryKey = t.queryKey,
        this.queryHash = t.queryHash,
        H(this, Li, g2(this.options)),
        this.state = t.state ?? N(this, Li),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var t;
        return (t = N(this, Be)) == null ? void 0 : t.promise
    }
    setOptions(t) {
        this.options = {
            ...N(this, yo),
            ...t
        },
        this.updateGcTime(this.options.gcTime)
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, vt).remove(this)
    }
    setData(t, n) {
        const r = s2(this.state.data, t, this.options);
        return _e(this, _t, dn).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual
        }),
        r
    }
    setState(t, n) {
        _e(this, _t, dn).call(this, {
            type: "setState",
            state: t,
            setStateOptions: n
        })
    }
    cancel(t) {
        var r, i;
        const n = (r = N(this, Be)) == null ? void 0 : r.promise;
        return (i = N(this, Be)) == null || i.cancel(t),
        n ? n.then(Ft).catch(Ft) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, Li))
    }
    isActive() {
        return this.observers.some(t => r2(t.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Xf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(t => id(t.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(t=0) {
        return this.state.data === void 0 ? !0 : t === "static" ? !1 : this.state.isInvalidated ? !0 : !n2(this.state.dataUpdatedAt, t)
    }
    onFocus() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Be)) == null || n.continue()
    }
    onOnline() {
        var n;
        const t = this.observers.find(r => r.shouldFetchOnReconnect());
        t == null || t.refetch({
            cancelRefetch: !1
        }),
        (n = N(this, Be)) == null || n.continue()
    }
    addObserver(t) {
        this.observers.includes(t) || (this.observers.push(t),
        this.clearGcTimeout(),
        N(this, vt).notify({
            type: "observerAdded",
            query: this,
            observer: t
        }))
    }
    removeObserver(t) {
        this.observers.includes(t) && (this.observers = this.observers.filter(n => n !== t),
        this.observers.length || (N(this, Be) && (N(this, Or) ? N(this, Be).cancel({
            revert: !0
        }) : N(this, Be).cancelRetry()),
        this.scheduleGc()),
        N(this, vt).notify({
            type: "observerRemoved",
            query: this,
            observer: t
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || _e(this, _t, dn).call(this, {
            type: "invalidate"
        })
    }
    fetch(t, n) {
        var c, u, f;
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, Be))
                return N(this, Be).continueRetry(),
                N(this, Be).promise
        }
        if (t && this.setOptions(t),
        !this.options.queryFn) {
            const h = this.observers.find(p => p.options.queryFn);
            h && this.setOptions(h.options)
        }
        const r = new AbortController
          , i = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (H(this, Or, !0),
                r.signal)
            })
        }
          , s = () => {
            const h = Yx(this.options, n)
              , x = ( () => {
                const y = {
                    client: N(this, Lr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return i(y),
                y
            }
            )();
            return H(this, Or, !1),
            this.options.persister ? this.options.persister(h, x, this) : h(x)
        }
          , a = ( () => {
            const h = {
                fetchOptions: n,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, Lr),
                state: this.state,
                fetchFn: s
            };
            return i(h),
            h
        }
        )();
        (c = this.options.behavior) == null || c.onFetch(a, this),
        H(this, Dr, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((u = a.fetchOptions) == null ? void 0 : u.meta)) && _e(this, _t, dn).call(this, {
            type: "fetch",
            meta: (f = a.fetchOptions) == null ? void 0 : f.meta
        });
        const l = h => {
            var p, x, y, w;
            Ic(h) && h.silent || _e(this, _t, dn).call(this, {
                type: "error",
                error: h
            }),
            Ic(h) || ((x = (p = N(this, vt).config).onError) == null || x.call(p, h, this),
            (w = (y = N(this, vt).config).onSettled) == null || w.call(y, this.state.data, h, this)),
            this.scheduleGc()
        }
        ;
        return H(this, Be, Jx({
            initialPromise: n == null ? void 0 : n.initialPromise,
            fn: a.fetchFn,
            abort: r.abort.bind(r),
            onSuccess: h => {
                var p, x, y, w;
                if (h === void 0) {
                    l(new Error(`${this.queryHash} data is undefined`));
                    return
                }
                try {
                    this.setData(h)
                } catch (g) {
                    l(g);
                    return
                }
                (x = (p = N(this, vt).config).onSuccess) == null || x.call(p, h, this),
                (w = (y = N(this, vt).config).onSettled) == null || w.call(y, h, this.state.error, this),
                this.scheduleGc()
            }
            ,
            onError: l,
            onFail: (h, p) => {
                _e(this, _t, dn).call(this, {
                    type: "failed",
                    failureCount: h,
                    error: p
                })
            }
            ,
            onPause: () => {
                _e(this, _t, dn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                _e(this, _t, dn).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: a.options.retry,
            retryDelay: a.options.retryDelay,
            networkMode: a.options.networkMode,
            canRun: () => !0
        })),
        N(this, Be).start()
    }
}
,
Li = new WeakMap,
Dr = new WeakMap,
vt = new WeakMap,
Lr = new WeakMap,
Be = new WeakMap,
yo = new WeakMap,
Or = new WeakMap,
_t = new WeakSet,
dn = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                fetchFailureCount: t.failureCount,
                fetchFailureReason: t.error
            };
        case "pause":
            return {
                ...r,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...r,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...r,
                ...m2(r.data, this.options),
                fetchMeta: t.meta ?? null
            };
        case "success":
            return H(this, Dr, void 0),
            {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!t.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
        case "error":
            const i = t.error;
            return Ic(i) && i.revert && N(this, Dr) ? {
                ...N(this, Dr),
                fetchStatus: "idle"
            } : {
                ...r,
                error: i,
                errorUpdateCount: r.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: r.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...r,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...r,
                ...t.state
            }
        }
    }
    ;
    this.state = n(this.state),
    Ge.batch( () => {
        this.observers.forEach(r => {
            r.onQueryUpdate()
        }
        ),
        N(this, vt).notify({
            query: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
sy);
function m2(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Xx(t.networkMode) ? "fetching" : "paused",
        ...e === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function g2(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData
      , n = t !== void 0
      , r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Zt, oy, y2 = (oy = class extends $l {
    constructor(t={}) {
        super();
        ee(this, Zt);
        this.config = t,
        H(this, Zt, new Map)
    }
    build(t, n, r) {
        const i = n.queryKey
          , s = n.queryHash ?? Qf(i, n);
        let o = this.get(s);
        return o || (o = new p2({
            client: t,
            queryKey: i,
            queryHash: s,
            options: t.defaultQueryOptions(n),
            state: r,
            defaultOptions: t.getQueryDefaults(i)
        }),
        this.add(o)),
        o
    }
    add(t) {
        N(this, Zt).has(t.queryHash) || (N(this, Zt).set(t.queryHash, t),
        this.notify({
            type: "added",
            query: t
        }))
    }
    remove(t) {
        const n = N(this, Zt).get(t.queryHash);
        n && (t.destroy(),
        n === t && N(this, Zt).delete(t.queryHash),
        this.notify({
            type: "removed",
            query: t
        }))
    }
    clear() {
        Ge.batch( () => {
            this.getAll().forEach(t => {
                this.remove(t)
            }
            )
        }
        )
    }
    get(t) {
        return N(this, Zt).get(t)
    }
    getAll() {
        return [...N(this, Zt).values()]
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => xm(n, r))
    }
    findAll(t={}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter(r => xm(t, r)) : n
    }
    notify(t) {
        Ge.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    onFocus() {
        Ge.batch( () => {
            this.getAll().forEach(t => {
                t.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Ge.batch( () => {
            this.getAll().forEach(t => {
                t.onOnline()
            }
            )
        }
        )
    }
}
,
Zt = new WeakMap,
oy), Jt, He, Ir, en, On, ay, v2 = (ay = class extends ew {
    constructor(t) {
        super();
        ee(this, en);
        ee(this, Jt);
        ee(this, He);
        ee(this, Ir);
        this.mutationId = t.mutationId,
        H(this, He, t.mutationCache),
        H(this, Jt, []),
        this.state = t.state || x2(),
        this.setOptions(t.options),
        this.scheduleGc()
    }
    setOptions(t) {
        this.options = t,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(t) {
        N(this, Jt).includes(t) || (N(this, Jt).push(t),
        this.clearGcTimeout(),
        N(this, He).notify({
            type: "observerAdded",
            mutation: this,
            observer: t
        }))
    }
    removeObserver(t) {
        H(this, Jt, N(this, Jt).filter(n => n !== t)),
        this.scheduleGc(),
        N(this, He).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t
        })
    }
    optionalRemove() {
        N(this, Jt).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, He).remove(this))
    }
    continue() {
        var t;
        return ((t = N(this, Ir)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
    }
    async execute(t) {
        var s, o, a, l, c, u, f, h, p, x, y, w, g, m, v, S, C, T, E, k;
        const n = () => {
            _e(this, en, On).call(this, {
                type: "continue"
            })
        }
        ;
        H(this, Ir, Jx({
            fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
            onFail: (A, R) => {
                _e(this, en, On).call(this, {
                    type: "failed",
                    failureCount: A,
                    error: R
                })
            }
            ,
            onPause: () => {
                _e(this, en, On).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, He).canRun(this)
        }));
        const r = this.state.status === "pending"
          , i = !N(this, Ir).canStart();
        try {
            if (r)
                n();
            else {
                _e(this, en, On).call(this, {
                    type: "pending",
                    variables: t,
                    isPaused: i
                }),
                await ((o = (s = N(this, He).config).onMutate) == null ? void 0 : o.call(s, t, this));
                const R = await ((l = (a = this.options).onMutate) == null ? void 0 : l.call(a, t));
                R !== this.state.context && _e(this, en, On).call(this, {
                    type: "pending",
                    context: R,
                    variables: t,
                    isPaused: i
                })
            }
            const A = await N(this, Ir).start();
            return await ((u = (c = N(this, He).config).onSuccess) == null ? void 0 : u.call(c, A, t, this.state.context, this)),
            await ((h = (f = this.options).onSuccess) == null ? void 0 : h.call(f, A, t, this.state.context)),
            await ((x = (p = N(this, He).config).onSettled) == null ? void 0 : x.call(p, A, null, this.state.variables, this.state.context, this)),
            await ((w = (y = this.options).onSettled) == null ? void 0 : w.call(y, A, null, t, this.state.context)),
            _e(this, en, On).call(this, {
                type: "success",
                data: A
            }),
            A
        } catch (A) {
            try {
                throw await ((m = (g = N(this, He).config).onError) == null ? void 0 : m.call(g, A, t, this.state.context, this)),
                await ((S = (v = this.options).onError) == null ? void 0 : S.call(v, A, t, this.state.context)),
                await ((T = (C = N(this, He).config).onSettled) == null ? void 0 : T.call(C, void 0, A, this.state.variables, this.state.context, this)),
                await ((k = (E = this.options).onSettled) == null ? void 0 : k.call(E, void 0, A, t, this.state.context)),
                A
            } finally {
                _e(this, en, On).call(this, {
                    type: "error",
                    error: A
                })
            }
        } finally {
            N(this, He).runNext(this)
        }
    }
}
,
Jt = new WeakMap,
He = new WeakMap,
Ir = new WeakMap,
en = new WeakSet,
On = function(t) {
    const n = r => {
        switch (t.type) {
        case "failed":
            return {
                ...r,
                failureCount: t.failureCount,
                failureReason: t.error
            };
        case "pause":
            return {
                ...r,
                isPaused: !0
            };
        case "continue":
            return {
                ...r,
                isPaused: !1
            };
        case "pending":
            return {
                ...r,
                context: t.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: t.isPaused,
                status: "pending",
                variables: t.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...r,
                data: t.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...r,
                data: void 0,
                error: t.error,
                failureCount: r.failureCount + 1,
                failureReason: t.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = n(this.state),
    Ge.batch( () => {
        N(this, Jt).forEach(r => {
            r.onMutationUpdate(t)
        }
        ),
        N(this, He).notify({
            mutation: this,
            type: "updated",
            action: t
        })
    }
    )
}
,
ay);
function x2() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var pn, Vt, vo, ly, w2 = (ly = class extends $l {
    constructor(t={}) {
        super();
        ee(this, pn);
        ee(this, Vt);
        ee(this, vo);
        this.config = t,
        H(this, pn, new Set),
        H(this, Vt, new Map),
        H(this, vo, 0)
    }
    build(t, n, r) {
        const i = new v2({
            mutationCache: this,
            mutationId: ++Oo(this, vo)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i),
        i
    }
    add(t) {
        N(this, pn).add(t);
        const n = ra(t);
        if (typeof n == "string") {
            const r = N(this, Vt).get(n);
            r ? r.push(t) : N(this, Vt).set(n, [t])
        }
        this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        if (N(this, pn).delete(t)) {
            const n = ra(t);
            if (typeof n == "string") {
                const r = N(this, Vt).get(n);
                if (r)
                    if (r.length > 1) {
                        const i = r.indexOf(t);
                        i !== -1 && r.splice(i, 1)
                    } else
                        r[0] === t && N(this, Vt).delete(n)
            }
        }
        this.notify({
            type: "removed",
            mutation: t
        })
    }
    canRun(t) {
        const n = ra(t);
        if (typeof n == "string") {
            const r = N(this, Vt).get(n)
              , i = r == null ? void 0 : r.find(s => s.state.status === "pending");
            return !i || i === t
        } else
            return !0
    }
    runNext(t) {
        var r;
        const n = ra(t);
        if (typeof n == "string") {
            const i = (r = N(this, Vt).get(n)) == null ? void 0 : r.find(s => s !== t && s.state.isPaused);
            return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        Ge.batch( () => {
            N(this, pn).forEach(t => {
                this.notify({
                    type: "removed",
                    mutation: t
                })
            }
            ),
            N(this, pn).clear(),
            N(this, Vt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, pn))
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return this.getAll().find(r => wm(n, r))
    }
    findAll(t={}) {
        return this.getAll().filter(n => wm(t, n))
    }
    notify(t) {
        Ge.batch( () => {
            this.listeners.forEach(n => {
                n(t)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const t = this.getAll().filter(n => n.state.isPaused);
        return Ge.batch( () => Promise.all(t.map(n => n.continue().catch(Ft))))
    }
}
,
pn = new WeakMap,
Vt = new WeakMap,
vo = new WeakMap,
ly);
function ra(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id
}
function Cm(e) {
    return {
        onFetch: (t, n) => {
            var u, f, h, p, x;
            const r = t.options
              , i = (h = (f = (u = t.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : f.fetchMore) == null ? void 0 : h.direction
              , s = ((p = t.state.data) == null ? void 0 : p.pages) || []
              , o = ((x = t.state.data) == null ? void 0 : x.pageParams) || [];
            let a = {
                pages: [],
                pageParams: []
            }
              , l = 0;
            const c = async () => {
                let y = !1;
                const w = v => {
                    Object.defineProperty(v, "signal", {
                        enumerable: !0,
                        get: () => (t.signal.aborted ? y = !0 : t.signal.addEventListener("abort", () => {
                            y = !0
                        }
                        ),
                        t.signal)
                    })
                }
                  , g = Yx(t.options, t.fetchOptions)
                  , m = async (v, S, C) => {
                    if (y)
                        return Promise.reject();
                    if (S == null && v.pages.length)
                        return Promise.resolve(v);
                    const E = ( () => {
                        const z = {
                            client: t.client,
                            queryKey: t.queryKey,
                            pageParam: S,
                            direction: C ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        return w(z),
                        z
                    }
                    )()
                      , k = await g(E)
                      , {maxPages: A} = t.options
                      , R = C ? a2 : o2;
                    return {
                        pages: R(v.pages, k, A),
                        pageParams: R(v.pageParams, S, A)
                    }
                }
                ;
                if (i && s.length) {
                    const v = i === "backward"
                      , S = v ? b2 : Tm
                      , C = {
                        pages: s,
                        pageParams: o
                    }
                      , T = S(r, C);
                    a = await m(C, T, v)
                } else {
                    const v = e ?? s.length;
                    do {
                        const S = l === 0 ? o[0] ?? r.initialPageParam : Tm(r, a);
                        if (l > 0 && S == null)
                            break;
                        a = await m(a, S),
                        l++
                    } while (l < v)
                }
                return a
            }
            ;
            t.options.persister ? t.fetchFn = () => {
                var y, w;
                return (w = (y = t.options).persister) == null ? void 0 : w.call(y, c, {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            }
            : t.fetchFn = c
        }
    }
}
function Tm(e, {pages: t, pageParams: n}) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0
}
function b2(e, {pages: t, pageParams: n}) {
    var r;
    return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0
}
var ve, Wn, Hn, Oi, Ii, Kn, Fi, _i, cy, S2 = (cy = class {
    constructor(e={}) {
        ee(this, ve);
        ee(this, Wn);
        ee(this, Hn);
        ee(this, Oi);
        ee(this, Ii);
        ee(this, Kn);
        ee(this, Fi);
        ee(this, _i);
        H(this, ve, e.queryCache || new y2),
        H(this, Wn, e.mutationCache || new w2),
        H(this, Hn, e.defaultOptions || {}),
        H(this, Oi, new Map),
        H(this, Ii, new Map),
        H(this, Kn, 0)
    }
    mount() {
        Oo(this, Kn)._++,
        N(this, Kn) === 1 && (H(this, Fi, Qx.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, ve).onFocus())
        }
        )),
        H(this, _i, sl.subscribe(async e => {
            e && (await this.resumePausedMutations(),
            N(this, ve).onOnline())
        }
        )))
    }
    unmount() {
        var e, t;
        Oo(this, Kn)._--,
        N(this, Kn) === 0 && ((e = N(this, Fi)) == null || e.call(this),
        H(this, Fi, void 0),
        (t = N(this, _i)) == null || t.call(this),
        H(this, _i, void 0))
    }
    isFetching(e) {
        return N(this, ve).findAll({
            ...e,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(e) {
        return N(this, Wn).findAll({
            ...e,
            status: "pending"
        }).length
    }
    getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, ve).get(t.queryHash)) == null ? void 0 : n.state.data
    }
    ensureQueryData(e) {
        const t = this.defaultQueryOptions(e)
          , n = N(this, ve).build(this, t)
          , r = n.state.data;
        return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(id(t.staleTime, n)) && this.prefetchQuery(t),
        Promise.resolve(r))
    }
    getQueriesData(e) {
        return N(this, ve).findAll(e).map( ({queryKey: t, state: n}) => {
            const r = n.data;
            return [t, r]
        }
        )
    }
    setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({
            queryKey: e
        })
          , i = N(this, ve).get(r.queryHash)
          , s = i == null ? void 0 : i.state.data
          , o = e2(t, s);
        if (o !== void 0)
            return N(this, ve).build(this, r).setData(o, {
                ...n,
                manual: !0
            })
    }
    setQueriesData(e, t, n) {
        return Ge.batch( () => N(this, ve).findAll(e).map( ({queryKey: r}) => [r, this.setQueryData(r, t, n)]))
    }
    getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({
            queryKey: e
        });
        return (n = N(this, ve).get(t.queryHash)) == null ? void 0 : n.state
    }
    removeQueries(e) {
        const t = N(this, ve);
        Ge.batch( () => {
            t.findAll(e).forEach(n => {
                t.remove(n)
            }
            )
        }
        )
    }
    resetQueries(e, t) {
        const n = N(this, ve);
        return Ge.batch( () => (n.findAll(e).forEach(r => {
            r.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...e
        }, t)))
    }
    cancelQueries(e, t={}) {
        const n = {
            revert: !0,
            ...t
        }
          , r = Ge.batch( () => N(this, ve).findAll(e).map(i => i.cancel(n)));
        return Promise.all(r).then(Ft).catch(Ft)
    }
    invalidateQueries(e, t={}) {
        return Ge.batch( () => (N(this, ve).findAll(e).forEach(n => {
            n.invalidate()
        }
        ),
        (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...e,
            type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
        }, t)))
    }
    refetchQueries(e, t={}) {
        const n = {
            ...t,
            cancelRefetch: t.cancelRefetch ?? !0
        }
          , r = Ge.batch( () => N(this, ve).findAll(e).filter(i => !i.isDisabled() && !i.isStatic()).map(i => {
            let s = i.fetch(void 0, n);
            return n.throwOnError || (s = s.catch(Ft)),
            i.state.fetchStatus === "paused" ? Promise.resolve() : s
        }
        ));
        return Promise.all(r).then(Ft)
    }
    fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = N(this, ve).build(this, t);
        return n.isStaleByTime(id(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data)
    }
    prefetchQuery(e) {
        return this.fetchQuery(e).then(Ft).catch(Ft)
    }
    fetchInfiniteQuery(e) {
        return e.behavior = Cm(e.pages),
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Ft).catch(Ft)
    }
    ensureInfiniteQueryData(e) {
        return e.behavior = Cm(e.pages),
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
        return sl.isOnline() ? N(this, Wn).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, ve)
    }
    getMutationCache() {
        return N(this, Wn)
    }
    getDefaultOptions() {
        return N(this, Hn)
    }
    setDefaultOptions(e) {
        H(this, Hn, e)
    }
    setQueryDefaults(e, t) {
        N(this, Oi).set(oo(e), {
            queryKey: e,
            defaultOptions: t
        })
    }
    getQueryDefaults(e) {
        const t = [...N(this, Oi).values()]
          , n = {};
        return t.forEach(r => {
            ao(e, r.queryKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    setMutationDefaults(e, t) {
        N(this, Ii).set(oo(e), {
            mutationKey: e,
            defaultOptions: t
        })
    }
    getMutationDefaults(e) {
        const t = [...N(this, Ii).values()]
          , n = {};
        return t.forEach(r => {
            ao(e, r.mutationKey) && Object.assign(n, r.defaultOptions)
        }
        ),
        n
    }
    defaultQueryOptions(e) {
        if (e._defaulted)
            return e;
        const t = {
            ...N(this, Hn).queries,
            ...this.getQueryDefaults(e.queryKey),
            ...e,
            _defaulted: !0
        };
        return t.queryHash || (t.queryHash = Qf(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Xf && (t.enabled = !1),
        t
    }
    defaultMutationOptions(e) {
        return e != null && e._defaulted ? e : {
            ...N(this, Hn).mutations,
            ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
            ...e,
            _defaulted: !0
        }
    }
    clear() {
        N(this, ve).clear(),
        N(this, Wn).clear()
    }
}
,
ve = new WeakMap,
Wn = new WeakMap,
Hn = new WeakMap,
Oi = new WeakMap,
Ii = new WeakMap,
Kn = new WeakMap,
Fi = new WeakMap,
_i = new WeakMap,
cy), C2 = b.createContext(void 0), T2 = ({client: e, children: t}) => (b.useEffect( () => (e.mount(),
() => {
    e.unmount()
}
), [e]),
d.jsx(C2.Provider, {
    value: e,
    children: t
}));
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function lo() {
    return lo = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    lo.apply(this, arguments)
}
var Yn;
(function(e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
}
)(Yn || (Yn = {}));
const Em = "popstate";
function E2(e) {
    e === void 0 && (e = {});
    function t(r, i) {
        let {pathname: s, search: o, hash: a} = r.location;
        return od("", {
            pathname: s,
            search: o,
            hash: a
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }
    function n(r, i) {
        return typeof i == "string" ? i : ol(i)
    }
    return P2(t, n, null, e)
}
function Ee(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
function tw(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}
function k2() {
    return Math.random().toString(36).substr(2, 8)
}
function km(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}
function od(e, t, n, r) {
    return n === void 0 && (n = null),
    lo({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? rs(t) : t, {
        state: n,
        key: t && t.key || r || k2()
    })
}
function ol(e) {
    let {pathname: t="/", search: n="", hash: r=""} = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
}
function rs(e) {
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
function P2(e, t, n, r) {
    r === void 0 && (r = {});
    let {window: i=document.defaultView, v5Compat: s=!1} = r
      , o = i.history
      , a = Yn.Pop
      , l = null
      , c = u();
    c == null && (c = 0,
    o.replaceState(lo({}, o.state, {
        idx: c
    }), ""));
    function u() {
        return (o.state || {
            idx: null
        }).idx
    }
    function f() {
        a = Yn.Pop;
        let w = u()
          , g = w == null ? null : w - c;
        c = w,
        l && l({
            action: a,
            location: y.location,
            delta: g
        })
    }
    function h(w, g) {
        a = Yn.Push;
        let m = od(y.location, w, g);
        c = u() + 1;
        let v = km(m, c)
          , S = y.createHref(m);
        try {
            o.pushState(v, "", S)
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError")
                throw C;
            i.location.assign(S)
        }
        s && l && l({
            action: a,
            location: y.location,
            delta: 1
        })
    }
    function p(w, g) {
        a = Yn.Replace;
        let m = od(y.location, w, g);
        c = u();
        let v = km(m, c)
          , S = y.createHref(m);
        o.replaceState(v, "", S),
        s && l && l({
            action: a,
            location: y.location,
            delta: 0
        })
    }
    function x(w) {
        let g = i.location.origin !== "null" ? i.location.origin : i.location.href
          , m = typeof w == "string" ? w : ol(w);
        return m = m.replace(/ $/, "%20"),
        Ee(g, "No window.location.(origin|href) available to create URL for href: " + m),
        new URL(m,g)
    }
    let y = {
        get action() {
            return a
        },
        get location() {
            return e(i, o)
        },
        listen(w) {
            if (l)
                throw new Error("A history only accepts one active listener");
            return i.addEventListener(Em, f),
            l = w,
            () => {
                i.removeEventListener(Em, f),
                l = null
            }
        },
        createHref(w) {
            return t(i, w)
        },
        createURL: x,
        encodeLocation(w) {
            let g = x(w);
            return {
                pathname: g.pathname,
                search: g.search,
                hash: g.hash
            }
        },
        push: h,
        replace: p,
        go(w) {
            return o.go(w)
        }
    };
    return y
}
var Pm;
(function(e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
}
)(Pm || (Pm = {}));
function N2(e, t, n) {
    return n === void 0 && (n = "/"),
    j2(e, t, n, !1)
}
function j2(e, t, n, r) {
    let i = typeof t == "string" ? rs(t) : t
      , s = Zf(i.pathname || "/", n);
    if (s == null)
        return null;
    let o = nw(e);
    A2(o);
    let a = null;
    for (let l = 0; a == null && l < o.length; ++l) {
        let c = B2(s);
        a = V2(o[l], c, r)
    }
    return a
}
function nw(e, t, n, r) {
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
    let i = (s, o, a) => {
        let l = {
            relativePath: a === void 0 ? s.path || "" : a,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: o,
            route: s
        };
        l.relativePath.startsWith("/") && (Ee(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        l.relativePath = l.relativePath.slice(r.length));
        let c = sr([r, l.relativePath])
          , u = n.concat(l);
        s.children && s.children.length > 0 && (Ee(s.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')),
        nw(s.children, t, u, c)),
        !(s.path == null && !s.index) && t.push({
            path: c,
            score: F2(c, s.index),
            routesMeta: u
        })
    }
    ;
    return e.forEach( (s, o) => {
        var a;
        if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
        else
            for (let l of rw(s.path))
                i(s, o, l)
    }
    ),
    t
}
function rw(e) {
    let t = e.split("/");
    if (t.length === 0)
        return [];
    let[n,...r] = t
      , i = n.endsWith("?")
      , s = n.replace(/\?$/, "");
    if (r.length === 0)
        return i ? [s, ""] : [s];
    let o = rw(r.join("/"))
      , a = [];
    return a.push(...o.map(l => l === "" ? s : [s, l].join("/"))),
    i && a.push(...o),
    a.map(l => e.startsWith("/") && l === "" ? "/" : l)
}
function A2(e) {
    e.sort( (t, n) => t.score !== n.score ? n.score - t.score : _2(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const R2 = /^:[\w-]+$/
  , M2 = 3
  , D2 = 2
  , L2 = 1
  , O2 = 10
  , I2 = -2
  , Nm = e => e === "*";
function F2(e, t) {
    let n = e.split("/")
      , r = n.length;
    return n.some(Nm) && (r += I2),
    t && (r += D2),
    n.filter(i => !Nm(i)).reduce( (i, s) => i + (R2.test(s) ? M2 : s === "" ? L2 : O2), r)
}
function _2(e, t) {
    return e.length === t.length && e.slice(0, -1).every( (r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}
function V2(e, t, n) {
    let {routesMeta: r} = e
      , i = {}
      , s = "/"
      , o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a]
          , c = a === r.length - 1
          , u = s === "/" ? t : t.slice(s.length) || "/"
          , f = jm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: c
        }, u)
          , h = l.route;
        if (!f && c && n && !r[r.length - 1].route.index && (f = jm({
            path: l.relativePath,
            caseSensitive: l.caseSensitive,
            end: !1
        }, u)),
        !f)
            return null;
        Object.assign(i, f.params),
        o.push({
            params: i,
            pathname: sr([s, f.pathname]),
            pathnameBase: H2(sr([s, f.pathnameBase])),
            route: h
        }),
        f.pathnameBase !== "/" && (s = sr([s, f.pathnameBase]))
    }
    return o
}
function jm(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let[n,r] = z2(e.path, e.caseSensitive, e.end)
      , i = t.match(n);
    if (!i)
        return null;
    let s = i[0]
      , o = s.replace(/(.)\/+$/, "$1")
      , a = i.slice(1);
    return {
        params: r.reduce( (c, u, f) => {
            let {paramName: h, isOptional: p} = u;
            if (h === "*") {
                let y = a[f] || "";
                o = s.slice(0, s.length - y.length).replace(/(.)\/+$/, "$1")
            }
            const x = a[f];
            return p && !x ? c[h] = void 0 : c[h] = (x || "").replace(/%2F/g, "/"),
            c
        }
        , {}),
        pathname: s,
        pathnameBase: o,
        pattern: e
    }
}
function z2(e, t, n) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    tw(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = []
      , i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (o, a, l) => (r.push({
        paramName: a,
        isOptional: l != null
    }),
    l ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }),
    i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i,t ? void 0 : "i"), r]
}
function B2(e) {
    try {
        return e.split("/").map(t => decodeURIComponent(t).replace(/\//g, "%2F")).join("/")
    } catch (t) {
        return tw(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")),
        e
    }
}
function Zf(e, t) {
    if (t === "/")
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase()))
        return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length
      , r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}
function $2(e, t) {
    t === void 0 && (t = "/");
    let {pathname: n, search: r="", hash: i=""} = typeof e == "string" ? rs(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : U2(n, t) : t,
        search: K2(r),
        hash: G2(i)
    }
}
function U2(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }
    ),
    n.length > 1 ? n.join("/") : "/"
}
function Fc(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function W2(e) {
    return e.filter( (t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}
function iw(e, t) {
    let n = W2(e);
    return t ? n.map( (r, i) => i === n.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}
function sw(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = rs(e) : (i = lo({}, e),
    Ee(!i.pathname || !i.pathname.includes("?"), Fc("?", "pathname", "search", i)),
    Ee(!i.pathname || !i.pathname.includes("#"), Fc("#", "pathname", "hash", i)),
    Ee(!i.search || !i.search.includes("#"), Fc("#", "search", "hash", i)));
    let s = e === "" || i.pathname === "", o = s ? "/" : i.pathname, a;
    if (o == null)
        a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let h = o.split("/");
            for (; h[0] === ".."; )
                h.shift(),
                f -= 1;
            i.pathname = h.join("/")
        }
        a = f >= 0 ? t[f] : "/"
    }
    let l = $2(i, a)
      , c = o && o !== "/" && o.endsWith("/")
      , u = (s || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"),
    l
}
const sr = e => e.join("/").replace(/\/\/+/g, "/")
  , H2 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/")
  , K2 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e
  , G2 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function q2(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data"in e
}
const ow = ["post", "put", "patch", "delete"];
new Set(ow);
const Y2 = ["get", ...ow];
new Set(Y2);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function co() {
    return co = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    co.apply(this, arguments)
}
const Jf = b.createContext(null)
  , Q2 = b.createContext(null)
  , qr = b.createContext(null)
  , Wl = b.createContext(null)
  , yr = b.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , aw = b.createContext(null);
function X2(e, t) {
    let {relative: n} = t === void 0 ? {} : t;
    Po() || Ee(!1);
    let {basename: r, navigator: i} = b.useContext(qr)
      , {hash: s, pathname: o, search: a} = uw(e, {
        relative: n
    })
      , l = o;
    return r !== "/" && (l = o === "/" ? r : sr([r, o])),
    i.createHref({
        pathname: l,
        search: a,
        hash: s
    })
}
function Po() {
    return b.useContext(Wl) != null
}
function is() {
    return Po() || Ee(!1),
    b.useContext(Wl).location
}
function lw(e) {
    b.useContext(qr).static || b.useLayoutEffect(e)
}
function Z2() {
    let {isDataRoute: e} = b.useContext(yr);
    return e ? dN() : J2()
}
function J2() {
    Po() || Ee(!1);
    let e = b.useContext(Jf)
      , {basename: t, future: n, navigator: r} = b.useContext(qr)
      , {matches: i} = b.useContext(yr)
      , {pathname: s} = is()
      , o = JSON.stringify(iw(i, n.v7_relativeSplatPath))
      , a = b.useRef(!1);
    return lw( () => {
        a.current = !0
    }
    ),
    b.useCallback(function(c, u) {
        if (u === void 0 && (u = {}),
        !a.current)
            return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let f = sw(c, JSON.parse(o), s, u.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : sr([t, f.pathname])),
        (u.replace ? r.replace : r.push)(f, u.state, u)
    }, [t, r, o, s, e])
}
function cw() {
    let {matches: e} = b.useContext(yr)
      , t = e[e.length - 1];
    return t ? t.params : {}
}
function uw(e, t) {
    let {relative: n} = t === void 0 ? {} : t
      , {future: r} = b.useContext(qr)
      , {matches: i} = b.useContext(yr)
      , {pathname: s} = is()
      , o = JSON.stringify(iw(i, r.v7_relativeSplatPath));
    return b.useMemo( () => sw(e, JSON.parse(o), s, n === "path"), [e, o, s, n])
}
function eN(e, t) {
    return tN(e, t)
}
function tN(e, t, n, r) {
    Po() || Ee(!1);
    let {navigator: i} = b.useContext(qr)
      , {matches: s} = b.useContext(yr)
      , o = s[s.length - 1]
      , a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let c = is(), u;
    if (t) {
        var f;
        let w = typeof t == "string" ? rs(t) : t;
        l === "/" || (f = w.pathname) != null && f.startsWith(l) || Ee(!1),
        u = w
    } else
        u = c;
    let h = u.pathname || "/"
      , p = h;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + h.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let x = N2(e, {
        pathname: p
    })
      , y = oN(x && x.map(w => Object.assign({}, w, {
        params: Object.assign({}, a, w.params),
        pathname: sr([l, i.encodeLocation ? i.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? l : sr([l, i.encodeLocation ? i.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), s, n, r);
    return t && y ? b.createElement(Wl.Provider, {
        value: {
            location: co({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: Yn.Pop
        }
    }, y) : y
}
function nN() {
    let e = uN()
      , t = q2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e)
      , n = e instanceof Error ? e.stack : null
      , i = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return b.createElement(b.Fragment, null, b.createElement("h2", null, "Unexpected Application Error!"), b.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? b.createElement("pre", {
        style: i
    }, n) : null, null)
}
const rN = b.createElement(nN, null);
class iN extends b.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? b.createElement(yr.Provider, {
            value: this.props.routeContext
        }, b.createElement(aw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function sN(e) {
    let {routeContext: t, match: n, children: r} = e
      , i = b.useContext(Jf);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    b.createElement(yr.Provider, {
        value: t
    }, r)
}
function oN(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null) {
        var s;
        if (!n)
            return null;
        if (n.errors)
            e = n.matches;
        else if ((s = r) != null && s.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else
            return null
    }
    let o = e
      , a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let u = o.findIndex(f => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        u >= 0 || Ee(!1),
        o = o.slice(0, Math.min(o.length, u + 1))
    }
    let l = !1
      , c = -1;
    if (n && r && r.v7_partialHydration)
        for (let u = 0; u < o.length; u++) {
            let f = o[u];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = u),
            f.route.id) {
                let {loaderData: h, errors: p} = n
                  , x = f.route.loader && h[f.route.id] === void 0 && (!p || p[f.route.id] === void 0);
                if (f.route.lazy || x) {
                    l = !0,
                    c >= 0 ? o = o.slice(0, c + 1) : o = [o[0]];
                    break
                }
            }
        }
    return o.reduceRight( (u, f, h) => {
        let p, x = !1, y = null, w = null;
        n && (p = a && f.route.id ? a[f.route.id] : void 0,
        y = f.route.errorElement || rN,
        l && (c < 0 && h === 0 ? (x = !0,
        w = null) : c === h && (x = !0,
        w = f.route.hydrateFallbackElement || null)));
        let g = t.concat(o.slice(0, h + 1))
          , m = () => {
            let v;
            return p ? v = y : x ? v = w : f.route.Component ? v = b.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = u,
            b.createElement(sN, {
                match: f,
                routeContext: {
                    outlet: u,
                    matches: g,
                    isDataRoute: n != null
                },
                children: v
            })
        }
        ;
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? b.createElement(iN, {
            location: n.location,
            revalidation: n.revalidation,
            component: y,
            error: p,
            children: m(),
            routeContext: {
                outlet: null,
                matches: g,
                isDataRoute: !0
            }
        }) : m()
    }
    , null)
}
var dw = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e
}(dw || {})
  , al = function(e) {
    return e.UseBlocker = "useBlocker",
    e.UseLoaderData = "useLoaderData",
    e.UseActionData = "useActionData",
    e.UseRouteError = "useRouteError",
    e.UseNavigation = "useNavigation",
    e.UseRouteLoaderData = "useRouteLoaderData",
    e.UseMatches = "useMatches",
    e.UseRevalidator = "useRevalidator",
    e.UseNavigateStable = "useNavigate",
    e.UseRouteId = "useRouteId",
    e
}(al || {});
function aN(e) {
    let t = b.useContext(Jf);
    return t || Ee(!1),
    t
}
function lN(e) {
    let t = b.useContext(Q2);
    return t || Ee(!1),
    t
}
function cN(e) {
    let t = b.useContext(yr);
    return t || Ee(!1),
    t
}
function fw(e) {
    let t = cN()
      , n = t.matches[t.matches.length - 1];
    return n.route.id || Ee(!1),
    n.route.id
}
function uN() {
    var e;
    let t = b.useContext(aw)
      , n = lN(al.UseRouteError)
      , r = fw(al.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function dN() {
    let {router: e} = aN(dw.UseNavigateStable)
      , t = fw(al.UseNavigateStable)
      , n = b.useRef(!1);
    return lw( () => {
        n.current = !0
    }
    ),
    b.useCallback(function(i, s) {
        s === void 0 && (s = {}),
        n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, co({
            fromRouteId: t
        }, s)))
    }, [e, t])
}
function fN(e, t) {
    e == null || e.v7_startTransition,
    e == null || e.v7_relativeSplatPath
}
function yt(e) {
    Ee(!1)
}
function hN(e) {
    let {basename: t="/", children: n=null, location: r, navigationType: i=Yn.Pop, navigator: s, static: o=!1, future: a} = e;
    Po() && Ee(!1);
    let l = t.replace(/^\/*/, "/")
      , c = b.useMemo( () => ({
        basename: l,
        navigator: s,
        static: o,
        future: co({
            v7_relativeSplatPath: !1
        }, a)
    }), [l, a, s, o]);
    typeof r == "string" && (r = rs(r));
    let {pathname: u="/", search: f="", hash: h="", state: p=null, key: x="default"} = r
      , y = b.useMemo( () => {
        let w = Zf(u, l);
        return w == null ? null : {
            location: {
                pathname: w,
                search: f,
                hash: h,
                state: p,
                key: x
            },
            navigationType: i
        }
    }
    , [l, u, f, h, p, x, i]);
    return y == null ? null : b.createElement(qr.Provider, {
        value: c
    }, b.createElement(Wl.Provider, {
        children: n,
        value: y
    }))
}
function pN(e) {
    let {children: t, location: n} = e;
    return eN(ad(t), n)
}
new Promise( () => {}
);
function ad(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return b.Children.forEach(e, (r, i) => {
        if (!b.isValidElement(r))
            return;
        let s = [...t, i];
        if (r.type === b.Fragment) {
            n.push.apply(n, ad(r.props.children, s));
            return
        }
        r.type !== yt && Ee(!1),
        !r.props.index || !r.props.children || Ee(!1);
        let o = {
            id: r.props.id || s.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (o.children = ad(r.props.children, s)),
        n.push(o)
    }
    ),
    n
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ld() {
    return ld = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }
    ,
    ld.apply(this, arguments)
}
function mN(e, t) {
    if (e == null)
        return {};
    var n = {}, r = Object.keys(e), i, s;
    for (s = 0; s < r.length; s++)
        i = r[s],
        !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
function gN(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function yN(e, t) {
    return e.button === 0 && (!t || t === "_self") && !gN(e)
}
const vN = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , xN = "6";
try {
    window.__reactRouterVersion = xN
} catch {}
const wN = "startTransition"
  , Am = _d[wN];
function bN(e) {
    let {basename: t, children: n, future: r, window: i} = e
      , s = b.useRef();
    s.current == null && (s.current = E2({
        window: i,
        v5Compat: !0
    }));
    let o = s.current
      , [a,l] = b.useState({
        action: o.action,
        location: o.location
    })
      , {v7_startTransition: c} = r || {}
      , u = b.useCallback(f => {
        c && Am ? Am( () => l(f)) : l(f)
    }
    , [l, c]);
    return b.useLayoutEffect( () => o.listen(u), [o, u]),
    b.useEffect( () => fN(r), [r]),
    b.createElement(hN, {
        basename: t,
        children: n,
        location: a.location,
        navigationType: a.action,
        navigator: o,
        future: r
    })
}
const SN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , CN = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , fe = b.forwardRef(function(t, n) {
    let {onClick: r, relative: i, reloadDocument: s, replace: o, state: a, target: l, to: c, preventScrollReset: u, viewTransition: f} = t, h = mN(t, vN), {basename: p} = b.useContext(qr), x, y = !1;
    if (typeof c == "string" && CN.test(c) && (x = c,
    SN))
        try {
            let v = new URL(window.location.href)
              , S = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c)
              , C = Zf(S.pathname, p);
            S.origin === v.origin && C != null ? c = C + S.search + S.hash : y = !0
        } catch {}
    let w = X2(c, {
        relative: i
    })
      , g = TN(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: u,
        relative: i,
        viewTransition: f
    });
    function m(v) {
        r && r(v),
        v.defaultPrevented || g(v)
    }
    return b.createElement("a", ld({}, h, {
        href: x || w,
        onClick: y || s ? r : m,
        ref: n,
        target: l
    }))
});
var Rm;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(Rm || (Rm = {}));
var Mm;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(Mm || (Mm = {}));
function TN(e, t) {
    let {target: n, replace: r, state: i, preventScrollReset: s, relative: o, viewTransition: a} = t === void 0 ? {} : t
      , l = Z2()
      , c = is()
      , u = uw(e, {
        relative: o
    });
    return b.useCallback(f => {
        if (yN(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : ol(c) === ol(u);
            l(e, {
                replace: h,
                state: i,
                preventScrollReset: s,
                relative: o,
                viewTransition: a
            })
        }
    }
    , [c, l, u, r, i, n, e, s, o, a])
}
const eh = b.createContext({});
function th(e) {
    const t = b.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const hw = typeof window < "u"
  , pw = hw ? b.useLayoutEffect : b.useEffect
  , Hl = b.createContext(null);
function nh(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function ll(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
const ln = (e, t, n) => n > t ? t : n < e ? e : n;
let Kl = () => {}
  , qi = () => {}
;
const Tn = {}
  , mw = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function gw(e) {
    return typeof e == "object" && e !== null
}
const yw = e => /^0[^.\s]+$/u.test(e);
function vw(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const Tt = e => e
  , EN = (e, t) => n => t(e(n))
  , No = (...e) => e.reduce(EN)
  , uo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
;
class rh {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return nh(this.subscriptions, t),
        () => ll(this.subscriptions, t)
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
const Et = e => e * 1e3
  , St = e => e / 1e3;
function xw(e, t) {
    return t ? e * (1e3 / t) : 0
}
const ww = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , kN = 1e-7
  , PN = 12;
function NN(e, t, n, r, i) {
    let s, o, a = 0;
    do
        o = t + (n - t) / 2,
        s = ww(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > kN && ++a < PN);
    return o
}
function jo(e, t, n, r) {
    if (e === t && n === r)
        return Tt;
    const i = s => NN(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : ww(i(s), t, r)
}
const bw = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Sw = e => t => 1 - e(1 - t)
  , Cw = jo(.33, 1.53, .69, .99)
  , ih = Sw(Cw)
  , Tw = bw(ih)
  , Ew = e => (e *= 2) < 1 ? .5 * ih(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , sh = e => 1 - Math.sin(Math.acos(e))
  , kw = Sw(sh)
  , Pw = bw(sh)
  , jN = jo(.42, 0, 1, 1)
  , AN = jo(0, 0, .58, 1)
  , Nw = jo(.42, 0, .58, 1)
  , RN = e => Array.isArray(e) && typeof e[0] != "number"
  , jw = e => Array.isArray(e) && typeof e[0] == "number"
  , Dm = {
    linear: Tt,
    easeIn: jN,
    easeInOut: Nw,
    easeOut: AN,
    circIn: sh,
    circInOut: Pw,
    circOut: kw,
    backIn: ih,
    backInOut: Tw,
    backOut: Cw,
    anticipate: Ew
}
  , MN = e => typeof e == "string"
  , Lm = e => {
    if (jw(e)) {
        qi(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
        const [t,n,r,i] = e;
        return jo(t, n, r, i)
    } else if (MN(e))
        return qi(Dm[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"),
        Dm[e];
    return e
}
  , ia = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]
  , Om = {
    value: null,
    addProjectionMetrics: null
};
function DN(e, t) {
    let n = new Set
      , r = new Set
      , i = !1
      , s = !1;
    const o = new WeakSet;
    let a = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , l = 0;
    function c(f) {
        o.has(f) && (u.schedule(f),
        e()),
        l++,
        f(a)
    }
    const u = {
        schedule: (f, h=!1, p=!1) => {
            const y = p && i ? n : r;
            return h && o.add(f),
            y.has(f) || y.add(f),
            f
        }
        ,
        cancel: f => {
            r.delete(f),
            o.delete(f)
        }
        ,
        process: f => {
            if (a = f,
            i) {
                s = !0;
                return
            }
            i = !0,
            [n,r] = [r, n],
            n.forEach(c),
            t && Om.value && Om.value.frameloop[t].push(l),
            l = 0,
            n.clear(),
            i = !1,
            s && (s = !1,
            u.process(f))
        }
    };
    return u
}
const LN = 40;
function Aw(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = ia.reduce( (v, S) => (v[S] = DN(s, t ? S : void 0),
    v), {})
      , {setup: a, read: l, resolveKeyframes: c, preUpdate: u, update: f, preRender: h, render: p, postRender: x} = o
      , y = () => {
        const v = Tn.useManualTiming ? i.timestamp : performance.now();
        n = !1,
        Tn.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(v - i.timestamp, LN), 1)),
        i.timestamp = v,
        i.isProcessing = !0,
        a.process(i),
        l.process(i),
        c.process(i),
        u.process(i),
        f.process(i),
        h.process(i),
        p.process(i),
        x.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , w = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(y)
    }
    ;
    return {
        schedule: ia.reduce( (v, S) => {
            const C = o[S];
            return v[S] = (T, E=!1, k=!1) => (n || w(),
            C.schedule(T, E, k)),
            v
        }
        , {}),
        cancel: v => {
            for (let S = 0; S < ia.length; S++)
                o[ia[S]].cancel(v)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: se, cancel: hr, state: Le, steps: _c} = Aw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Tt, !0);
let Ta;
function ON() {
    Ta = void 0
}
const qe = {
    now: () => (Ta === void 0 && qe.set(Le.isProcessing || Tn.useManualTiming ? Le.timestamp : performance.now()),
    Ta),
    set: e => {
        Ta = e,
        queueMicrotask(ON)
    }
}
  , Rw = e => t => typeof t == "string" && t.startsWith(e)
  , Mw = Rw("--")
  , IN = Rw("var(--")
  , oh = e => IN(e) ? FN.test(e.split("/*")[0].trim()) : !1
  , FN = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Im(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const ss = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , fo = {
    ...ss,
    transform: e => ln(0, 1, e)
}
  , sa = {
    ...ss,
    default: 1
}
  , Fs = e => Math.round(e * 1e5) / 1e5
  , ah = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function _N(e) {
    return e == null
}
const VN = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , lh = (e, t) => n => !!(typeof n == "string" && VN.test(n) && n.startsWith(e) || t && !_N(n) && Object.prototype.hasOwnProperty.call(n, t))
  , Dw = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,a] = r.match(ah);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1
    }
}
  , zN = e => ln(0, 255, e)
  , Vc = {
    ...ss,
    transform: e => Math.round(zN(e))
}
  , jr = {
    test: lh("rgb", "red"),
    parse: Dw("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Vc.transform(e) + ", " + Vc.transform(t) + ", " + Vc.transform(n) + ", " + Fs(fo.transform(r)) + ")"
};
function BN(e) {
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
const cd = {
    test: lh("#"),
    parse: BN,
    transform: jr.transform
}
  , Ao = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , In = Ao("deg")
  , sn = Ao("%")
  , _ = Ao("px")
  , $N = Ao("vh")
  , UN = Ao("vw")
  , Fm = {
    ...sn,
    parse: e => sn.parse(e) / 100,
    transform: e => sn.transform(e * 100)
}
  , yi = {
    test: lh("hsl", "hue"),
    parse: Dw("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + sn.transform(Fs(t)) + ", " + sn.transform(Fs(n)) + ", " + Fs(fo.transform(r)) + ")"
}
  , Ce = {
    test: e => jr.test(e) || cd.test(e) || yi.test(e),
    parse: e => jr.test(e) ? jr.parse(e) : yi.test(e) ? yi.parse(e) : cd.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? jr.transform(e) : yi.transform(e),
    getAnimatableNone: e => {
        const t = Ce.parse(e);
        return t.alpha = 0,
        Ce.transform(t)
    }
}
  , WN = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function HN(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(ah)) == null ? void 0 : t.length) || 0) + (((n = e.match(WN)) == null ? void 0 : n.length) || 0) > 0
}
const Lw = "number"
  , Ow = "color"
  , KN = "var"
  , GN = "var("
  , _m = "${}"
  , qN = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ho(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const a = t.replace(qN, l => (Ce.test(l) ? (r.color.push(s),
    i.push(Ow),
    n.push(Ce.parse(l))) : l.startsWith(GN) ? (r.var.push(s),
    i.push(KN),
    n.push(l)) : (r.number.push(s),
    i.push(Lw),
    n.push(parseFloat(l))),
    ++s,
    _m)).split(_m);
    return {
        values: n,
        split: a,
        indexes: r,
        types: i
    }
}
function Iw(e) {
    return ho(e).values
}
function Fw(e) {
    const {split: t, types: n} = ho(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const a = n[o];
                a === Lw ? s += Fs(i[o]) : a === Ow ? s += Ce.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const YN = e => typeof e == "number" ? 0 : Ce.test(e) ? Ce.getAnimatableNone(e) : e;
function QN(e) {
    const t = Iw(e);
    return Fw(e)(t.map(YN))
}
const Wt = {
    test: HN,
    parse: Iw,
    createTransformer: Fw,
    getAnimatableNone: QN
};
function zc(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function XN({hue: e, saturation: t, lightness: n, alpha: r}) {
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
        i = zc(l, a, e + 1 / 3),
        s = zc(l, a, e),
        o = zc(l, a, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function cl(e, t) {
    return n => n > 0 ? t : e
}
const me = (e, t, n) => e + (t - e) * n
  , Bc = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , ZN = [cd, jr, yi]
  , JN = e => ZN.find(t => t.test(e));
function Vm(e) {
    const t = JN(e);
    if (Kl(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"),
    !t)
        return !1;
    let n = t.parse(e);
    return t === yi && (n = XN(n)),
    n
}
const zm = (e, t) => {
    const n = Vm(e)
      , r = Vm(t);
    if (!n || !r)
        return cl(e, t);
    const i = {
        ...n
    };
    return s => (i.red = Bc(n.red, r.red, s),
    i.green = Bc(n.green, r.green, s),
    i.blue = Bc(n.blue, r.blue, s),
    i.alpha = me(n.alpha, r.alpha, s),
    jr.transform(i))
}
  , ud = new Set(["none", "hidden"]);
function ej(e, t) {
    return ud.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function tj(e, t) {
    return n => me(e, t, n)
}
function ch(e) {
    return typeof e == "number" ? tj : typeof e == "string" ? oh(e) ? cl : Ce.test(e) ? zm : ij : Array.isArray(e) ? _w : typeof e == "object" ? Ce.test(e) ? zm : nj : cl
}
function _w(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => ch(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function nj(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = ch(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function rj(e, t) {
    const n = []
      , r = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let i = 0; i < t.values.length; i++) {
        const s = t.types[i]
          , o = e.indexes[s][r[s]]
          , a = e.values[o] ?? 0;
        n[i] = a,
        r[s]++
    }
    return n
}
const ij = (e, t) => {
    const n = Wt.createTransformer(t)
      , r = ho(e)
      , i = ho(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? ud.has(e) && !i.values.length || ud.has(t) && !r.values.length ? ej(e, t) : No(_w(rj(r, i), i.values), n) : (Kl(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"),
    cl(e, t))
}
;
function Vw(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? me(e, t, n) : ch(e)(e, t)
}
const sj = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: (n=!0) => se.update(t, n),
        stop: () => hr(t),
        now: () => Le.isProcessing ? Le.timestamp : qe.now()
    }
}
  , zw = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
  , ul = 2e4;
function uh(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < ul; )
        t += n,
        r = e.next(t);
    return t >= ul ? 1 / 0 : t
}
function oj(e, t=100, n) {
    const r = n({
        ...e,
        keyframes: [0, t]
    })
      , i = Math.min(uh(r), ul);
    return {
        type: "keyframes",
        ease: s => r.next(i * s).value / t,
        duration: St(i)
    }
}
const aj = 5;
function Bw(e, t, n) {
    const r = Math.max(t - aj, 0);
    return xw(n - e(r), t - r)
}
const he = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , $c = .001;
function lj({duration: e=he.duration, bounce: t=he.bounce, velocity: n=he.velocity, mass: r=he.mass}) {
    let i, s;
    Kl(e <= Et(he.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let o = 1 - t;
    o = ln(he.minDamping, he.maxDamping, o),
    e = ln(he.minDuration, he.maxDuration, St(e)),
    o < 1 ? (i = c => {
        const u = c * o
          , f = u * e
          , h = u - n
          , p = dd(c, o)
          , x = Math.exp(-f);
        return $c - h / p * x
    }
    ,
    s = c => {
        const f = c * o * e
          , h = f * n + n
          , p = Math.pow(o, 2) * Math.pow(c, 2) * e
          , x = Math.exp(-f)
          , y = dd(Math.pow(c, 2), o);
        return (-i(c) + $c > 0 ? -1 : 1) * ((h - p) * x) / y
    }
    ) : (i = c => {
        const u = Math.exp(-c * e)
          , f = (c - n) * e + 1;
        return -$c + u * f
    }
    ,
    s = c => {
        const u = Math.exp(-c * e)
          , f = (n - c) * (e * e);
        return u * f
    }
    );
    const a = 5 / e
      , l = uj(i, s, a);
    if (e = Et(e),
    isNaN(l))
        return {
            stiffness: he.stiffness,
            damping: he.damping,
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
const cj = 12;
function uj(e, t, n) {
    let r = n;
    for (let i = 1; i < cj; i++)
        r = r - e(r) / t(r);
    return r
}
function dd(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const dj = ["duration", "bounce"]
  , fj = ["stiffness", "damping", "mass"];
function Bm(e, t) {
    return t.some(n => e[n] !== void 0)
}
function hj(e) {
    let t = {
        velocity: he.velocity,
        stiffness: he.stiffness,
        damping: he.damping,
        mass: he.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Bm(e, fj) && Bm(e, dj))
        if (t.velocity = 0,
        e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * ln(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: he.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = lj({
                ...e,
                velocity: 0
            });
            t = {
                ...t,
                ...n,
                mass: he.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function dl(e=he.visualDuration, t=he.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , a = {
        done: !1,
        value: s
    }
      , {stiffness: l, damping: c, mass: u, duration: f, velocity: h, isResolvedFromDuration: p} = hj({
        ...n,
        velocity: -St(n.velocity || 0)
    })
      , x = h || 0
      , y = c / (2 * Math.sqrt(l * u))
      , w = o - s
      , g = St(Math.sqrt(l / u))
      , m = Math.abs(w) < 5;
    r || (r = m ? he.restSpeed.granular : he.restSpeed.default),
    i || (i = m ? he.restDelta.granular : he.restDelta.default);
    let v;
    if (y < 1) {
        const C = dd(g, y);
        v = T => {
            const E = Math.exp(-y * g * T);
            return o - E * ((x + y * g * w) / C * Math.sin(C * T) + w * Math.cos(C * T))
        }
    } else if (y === 1)
        v = C => o - Math.exp(-g * C) * (w + (x + g * w) * C);
    else {
        const C = g * Math.sqrt(y * y - 1);
        v = T => {
            const E = Math.exp(-y * g * T)
              , k = Math.min(C * T, 300);
            return o - E * ((x + y * g * w) * Math.sinh(k) + C * w * Math.cosh(k)) / C
        }
    }
    const S = {
        calculatedDuration: p && f || null,
        next: C => {
            const T = v(C);
            if (p)
                a.done = C >= f;
            else {
                let E = C === 0 ? x : 0;
                y < 1 && (E = C === 0 ? Et(x) : Bw(v, C, T));
                const k = Math.abs(E) <= r
                  , A = Math.abs(o - T) <= i;
                a.done = k && A
            }
            return a.value = a.done ? o : T,
            a
        }
        ,
        toString: () => {
            const C = Math.min(uh(S), ul)
              , T = zw(E => S.next(C * E).value, C, 30);
            return C + "ms " + T
        }
        ,
        toTransition: () => {}
    };
    return S
}
dl.applyToOptions = e => {
    const t = oj(e, 100, dl);
    return e.ease = t.ease,
    e.duration = Et(t.duration),
    e.type = "keyframes",
    e
}
;
function fd({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: a, max: l, restDelta: c=.5, restSpeed: u}) {
    const f = e[0]
      , h = {
        done: !1,
        value: f
    }
      , p = k => a !== void 0 && k < a || l !== void 0 && k > l
      , x = k => a === void 0 ? l : l === void 0 || Math.abs(a - k) < Math.abs(l - k) ? a : l;
    let y = n * t;
    const w = f + y
      , g = o === void 0 ? w : o(w);
    g !== w && (y = g - f);
    const m = k => -y * Math.exp(-k / r)
      , v = k => g + m(k)
      , S = k => {
        const A = m(k)
          , R = v(k);
        h.done = Math.abs(A) <= c,
        h.value = h.done ? g : R
    }
    ;
    let C, T;
    const E = k => {
        p(h.value) && (C = k,
        T = dl({
            keyframes: [h.value, x(h.value)],
            velocity: Bw(v, k, h.value),
            damping: i,
            stiffness: s,
            restDelta: c,
            restSpeed: u
        }))
    }
    ;
    return E(0),
    {
        calculatedDuration: null,
        next: k => {
            let A = !1;
            return !T && C === void 0 && (A = !0,
            S(k),
            E(k)),
            C !== void 0 && k >= C ? T.next(k - C) : (!A && S(k),
            h)
        }
    }
}
function pj(e, t, n) {
    const r = []
      , i = n || Tn.mix || Vw
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let a = i(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || Tt : t;
            a = No(l, a)
        }
        r.push(a)
    }
    return r
}
function mj(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (qi(s === t.length, "Both input and output ranges must be the same length", "range-length"),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const a = pj(t, r, i)
      , l = a.length
      , c = u => {
        if (o && u < e[0])
            return t[0];
        let f = 0;
        if (l > 1)
            for (; f < e.length - 2 && !(u < e[f + 1]); f++)
                ;
        const h = uo(e[f], e[f + 1], u);
        return a[f](h)
    }
    ;
    return n ? u => c(ln(e[0], e[s - 1], u)) : c
}
function gj(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = uo(0, t, r);
        e.push(me(n, 1, i))
    }
}
function yj(e) {
    const t = [0];
    return gj(t, e.length - 1),
    t
}
function vj(e, t) {
    return e.map(n => n * t)
}
function xj(e, t) {
    return e.map( () => t || Nw).splice(0, e.length - 1)
}
function _s({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = RN(r) ? r.map(Lm) : Lm(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = vj(n && n.length === t.length ? n : yj(t), e)
      , a = mj(o, t, {
        ease: Array.isArray(i) ? i : xj(t, i)
    });
    return {
        calculatedDuration: e,
        next: l => (s.value = a(l),
        s.done = l >= e,
        s)
    }
}
const wj = e => e !== null;
function dh(e, {repeat: t, repeatType: n="loop"}, r, i=1) {
    const s = e.filter(wj)
      , a = i < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
    return !a || r === void 0 ? s[a] : r
}
const bj = {
    decay: fd,
    inertia: fd,
    tween: _s,
    keyframes: _s,
    spring: dl
};
function $w(e) {
    typeof e.type == "string" && (e.type = bj[e.type])
}
class fh {
    constructor() {
        this.updateFinished()
    }
    get finished() {
        return this._finished
    }
    updateFinished() {
        this._finished = new Promise(t => {
            this.resolve = t
        }
        )
    }
    notifyFinished() {
        this.resolve()
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
}
const Sj = e => e / 100;
class hh extends fh {
    constructor(t) {
        super(),
        this.state = "idle",
        this.startTime = null,
        this.isStopped = !1,
        this.currentTime = 0,
        this.holdTime = null,
        this.playbackSpeed = 1,
        this.stop = () => {
            var r, i;
            const {motionValue: n} = this.options;
            n && n.updatedAt !== qe.now() && this.tick(qe.now()),
            this.isStopped = !0,
            this.state !== "idle" && (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r))
        }
        ,
        this.options = t,
        this.initAnimation(),
        this.play(),
        t.autoplay === !1 && this.pause()
    }
    initAnimation() {
        const {options: t} = this;
        $w(t);
        const {type: n=_s, repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = t;
        let {keyframes: a} = t;
        const l = n || _s;
        l !== _s && typeof a[0] != "number" && (this.mixKeyframes = No(Sj, Vw(a[0], a[1])),
        a = [0, 100]);
        const c = l({
            ...t,
            keyframes: a
        });
        s === "mirror" && (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o
        })),
        c.calculatedDuration === null && (c.calculatedDuration = uh(c));
        const {calculatedDuration: u} = c;
        this.calculatedDuration = u,
        this.resolvedDuration = u + i,
        this.totalDuration = this.resolvedDuration * (r + 1) - i,
        this.generator = c
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n
    }
    tick(t, n=!1) {
        const {generator: r, totalDuration: i, mixKeyframes: s, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l} = this;
        if (this.startTime === null)
            return r.next(0);
        const {delay: c=0, keyframes: u, repeat: f, repeatType: h, repeatDelay: p, type: x, onUpdate: y, finalKeyframe: w} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - i / this.speed, this.startTime)),
        n ? this.currentTime = t : this.updateTime(t);
        const g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1)
          , m = this.playbackSpeed >= 0 ? g < 0 : g > i;
        this.currentTime = Math.max(g, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = i);
        let v = this.currentTime
          , S = r;
        if (f) {
            const k = Math.min(this.currentTime, i) / a;
            let A = Math.floor(k)
              , R = k % 1;
            !R && k >= 1 && (R = 1),
            R === 1 && A--,
            A = Math.min(A, f + 1),
            !!(A % 2) && (h === "reverse" ? (R = 1 - R,
            p && (R -= p / a)) : h === "mirror" && (S = o)),
            v = ln(0, 1, R) * a
        }
        const C = m ? {
            done: !1,
            value: u[0]
        } : S.next(v);
        s && (C.value = s(C.value));
        let {done: T} = C;
        !m && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= i : this.currentTime <= 0);
        const E = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
        return E && x !== fd && (C.value = dh(u, this.options, w, this.speed)),
        y && y(C.value),
        E && this.finish(),
        C
    }
    then(t, n) {
        return this.finished.then(t, n)
    }
    get duration() {
        return St(this.calculatedDuration)
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + St(t)
    }
    get time() {
        return St(this.currentTime)
    }
    set time(t) {
        var n;
        t = Et(t),
        this.currentTime = t,
        this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
        (n = this.driver) == null || n.start(!1)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        this.updateTime(qe.now());
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = St(this.currentTime))
    }
    play() {
        var i, s;
        if (this.isStopped)
            return;
        const {driver: t=sj, startTime: n} = this.options;
        this.driver || (this.driver = t(o => this.tick(o))),
        (s = (i = this.options).onPlay) == null || s.call(i);
        const r = this.driver.now();
        this.state === "finished" ? (this.updateFinished(),
        this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n ?? r),
        this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        this.state = "paused",
        this.updateTime(qe.now()),
        this.holdTime = this.currentTime
    }
    complete() {
        this.state !== "running" && this.play(),
        this.state = "finished",
        this.holdTime = null
    }
    finish() {
        var t, n;
        this.notifyFinished(),
        this.teardown(),
        this.state = "finished",
        (n = (t = this.options).onComplete) == null || n.call(t)
    }
    cancel() {
        var t, n;
        this.holdTime = null,
        this.startTime = 0,
        this.tick(0),
        this.teardown(),
        (n = (t = this.options).onCancel) == null || n.call(t)
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.startTime = this.holdTime = null
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
    attachTimeline(t) {
        var n;
        return this.options.allowFlatten && (this.options.type = "keyframes",
        this.options.ease = "linear",
        this.initAnimation()),
        (n = this.driver) == null || n.stop(),
        t.observe(this)
    }
}
function Cj(e) {
    for (let t = 1; t < e.length; t++)
        e[t] ?? (e[t] = e[t - 1])
}
const Ar = e => e * 180 / Math.PI
  , hd = e => {
    const t = Ar(Math.atan2(e[1], e[0]));
    return pd(t)
}
  , Tj = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: hd,
    rotateZ: hd,
    skewX: e => Ar(Math.atan(e[1])),
    skewY: e => Ar(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}
  , pd = e => (e = e % 360,
e < 0 && (e += 360),
e)
  , $m = hd
  , Um = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , Wm = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , Ej = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Um,
    scaleY: Wm,
    scale: e => (Um(e) + Wm(e)) / 2,
    rotateX: e => pd(Ar(Math.atan2(e[6], e[5]))),
    rotateY: e => pd(Ar(Math.atan2(-e[2], e[0]))),
    rotateZ: $m,
    rotate: $m,
    skewX: e => Ar(Math.atan(e[4])),
    skewY: e => Ar(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function md(e) {
    return e.includes("scale") ? 1 : 0
}
function gd(e, t) {
    if (!e || e === "none")
        return md(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, i;
    if (n)
        r = Ej,
        i = n;
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        r = Tj,
        i = a
    }
    if (!i)
        return md(t);
    const s = r[t]
      , o = i[1].split(",").map(Pj);
    return typeof s == "function" ? s(o) : o[s]
}
const kj = (e, t) => {
    const {transform: n="none"} = getComputedStyle(e);
    return gd(n, t)
}
;
function Pj(e) {
    return parseFloat(e.trim())
}
const os = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , as = new Set(os)
  , Hm = e => e === ss || e === _
  , Nj = new Set(["x", "y", "z"])
  , jj = os.filter(e => !Nj.has(e));
function Aj(e) {
    const t = [];
    return jj.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const Qn = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: (e, {transform: t}) => gd(t, "x"),
    y: (e, {transform: t}) => gd(t, "y")
};
Qn.translateX = Qn.x;
Qn.translateY = Qn.y;
const Vr = new Set;
let yd = !1
  , vd = !1
  , xd = !1;
function Uw() {
    if (vd) {
        const e = Array.from(Vr).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = Aj(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var a;
                (a = r.getValue(s)) == null || a.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    vd = !1,
    yd = !1,
    Vr.forEach(e => e.complete(xd)),
    Vr.clear()
}
function Ww() {
    Vr.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (vd = !0)
    }
    )
}
function Rj() {
    xd = !0,
    Ww(),
    Uw(),
    xd = !1
}
class ph {
    constructor(t, n, r, i, s, o=!1) {
        this.state = "pending",
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.state = "scheduled",
        this.isAsync ? (Vr.add(this),
        yd || (yd = !0,
        se.read(Ww),
        se.resolveKeyframes(Uw))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        if (t[0] === null) {
            const s = i == null ? void 0 : i.get()
              , o = t[t.length - 1];
            if (s !== void 0)
                t[0] = s;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a)
            }
            t[0] === void 0 && (t[0] = o),
            i && s === void 0 && i.set(t[0])
        }
        Cj(t)
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t=!1) {
        this.state = "complete",
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
        Vr.delete(this)
    }
    cancel() {
        this.state === "scheduled" && (Vr.delete(this),
        this.state = "pending")
    }
    resume() {
        this.state === "pending" && this.scheduleResolve()
    }
}
const Mj = e => e.startsWith("--");
function Dj(e, t, n) {
    Mj(t) ? e.style.setProperty(t, n) : e.style[t] = n
}
const Lj = {};
function Hw(e, t) {
    const n = vw(e);
    return () => Lj[t] ?? n()
}
const Oj = Hw( () => window.ScrollTimeline !== void 0, "scrollTimeline")
  , Kw = Hw( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , Es = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , Km = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Es([0, .65, .55, 1]),
    circOut: Es([.55, 0, 1, .45]),
    backIn: Es([.31, .01, .66, -.59]),
    backOut: Es([.33, 1.53, .69, .99])
};
function Gw(e, t) {
    if (e)
        return typeof e == "function" ? Kw() ? zw(e, t) : "ease-out" : jw(e) ? Es(e) : Array.isArray(e) ? e.map(n => Gw(n, t) || Km.easeOut) : Km[e]
}
function Ij(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: a="easeOut", times: l}={}, c=void 0) {
    const u = {
        [t]: n
    };
    l && (u.offset = l);
    const f = Gw(a, i);
    Array.isArray(f) && (u.easing = f);
    const h = {
        delay: r,
        duration: i,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    };
    return c && (h.pseudoElement = c),
    e.animate(u, h)
}
function qw(e) {
    return typeof e == "function" && "applyToOptions"in e
}
function Fj({type: e, ...t}) {
    return qw(e) && Kw() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300),
    t.ease ?? (t.ease = "easeOut"),
    t)
}
class Yw extends fh {
    constructor(t) {
        if (super(),
        this.finishedTime = null,
        this.isStopped = !1,
        this.manualStartTime = null,
        !t)
            return;
        const {element: n, name: r, keyframes: i, pseudoElement: s, allowFlatten: o=!1, finalKeyframe: a, onComplete: l} = t;
        this.isPseudoElement = !!s,
        this.allowFlatten = o,
        this.options = t,
        qi(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
        const c = Fj(t);
        this.animation = Ij(n, r, i, c, s),
        c.autoplay === !1 && this.animation.pause(),
        this.animation.onfinish = () => {
            if (this.finishedTime = this.time,
            !s) {
                const u = dh(i, this.options, a, this.speed);
                this.updateMotionValue ? this.updateMotionValue(u) : Dj(n, r, u),
                this.animation.cancel()
            }
            l == null || l(),
            this.notifyFinished()
        }
    }
    play() {
        this.isStopped || (this.manualStartTime = null,
        this.animation.play(),
        this.state === "finished" && this.updateFinished())
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t)
    }
    cancel() {
        try {
            this.animation.cancel()
        } catch {}
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = !0;
        const {state: t} = this;
        t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
        this.isPseudoElement || this.cancel())
    }
    commitStyles() {
        var n, r, i;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement && (t != null && t.isConnected) && ((i = (r = this.animation).commitStyles) == null || i.call(r))
    }
    get duration() {
        var n, r;
        const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
        return St(Number(t))
    }
    get iterationDuration() {
        const {delay: t=0} = this.options || {};
        return this.duration + St(t)
    }
    get time() {
        return St(Number(this.animation.currentTime) || 0)
    }
    set time(t) {
        this.manualStartTime = null,
        this.finishedTime = null,
        this.animation.currentTime = Et(t)
    }
    get speed() {
        return this.animation.playbackRate
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null),
        this.animation.playbackRate = t
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime)
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t
    }
    attachTimeline({timeline: t, observe: n}) {
        var r;
        return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({
            easing: "linear"
        })),
        this.animation.onfinish = null,
        t && Oj() ? (this.animation.timeline = t,
        Tt) : n(this)
    }
}
const Qw = {
    anticipate: Ew,
    backInOut: Tw,
    circInOut: Pw
};
function _j(e) {
    return e in Qw
}
function Vj(e) {
    typeof e.ease == "string" && _j(e.ease) && (e.ease = Qw[e.ease])
}
const Uc = 10;
class zj extends Yw {
    constructor(t) {
        Vj(t),
        $w(t),
        super(t),
        t.startTime !== void 0 && (this.startTime = t.startTime),
        this.options = t
    }
    updateMotionValue(t) {
        const {motionValue: n, onUpdate: r, onComplete: i, element: s, ...o} = this.options;
        if (!n)
            return;
        if (t !== void 0) {
            n.set(t);
            return
        }
        const a = new hh({
            ...o,
            autoplay: !1
        })
          , l = Math.max(Uc, qe.now() - this.startTime)
          , c = ln(0, Uc, l - Uc);
        n.setWithVelocity(a.sample(Math.max(0, l - c)).value, a.sample(l).value, c),
        a.stop()
    }
}
const Gm = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Wt.test(e) || e === "0") && !e.startsWith("url("));
function Bj(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function $j(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = Gm(i, t)
      , a = Gm(s, t);
    return Kl(o === a, `You are trying to animate ${t} from "${i}" to "${s}". "${o ? s : i}" is not an animatable value.`, "value-not-animatable"),
    !o || !a ? !1 : Bj(e) || (n === "spring" || qw(n)) && r
}
function wd(e) {
    e.duration = 0,
    e.type = "keyframes"
}
const Uj = new Set(["opacity", "clipPath", "filter", "transform"])
  , Wj = vw( () => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Hj(e) {
    var u;
    const {motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: s, type: o} = e;
    if (!(((u = t == null ? void 0 : t.owner) == null ? void 0 : u.current)instanceof HTMLElement))
        return !1;
    const {onUpdate: l, transformTemplate: c} = t.owner.getProps();
    return Wj() && n && Uj.has(n) && (n !== "transform" || !c) && !l && !r && i !== "mirror" && s !== 0 && o !== "inertia"
}
const Kj = 40;
class Gj extends fh {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", keyframes: a, name: l, motionValue: c, element: u, ...f}) {
        var x;
        super(),
        this.stop = () => {
            var y, w;
            this._animation && (this._animation.stop(),
            (y = this.stopTimeline) == null || y.call(this)),
            (w = this.keyframeResolver) == null || w.cancel()
        }
        ,
        this.createdAt = qe.now();
        const h = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            name: l,
            motionValue: c,
            element: u,
            ...f
        }
          , p = (u == null ? void 0 : u.KeyframeResolver) || ph;
        this.keyframeResolver = new p(a, (y, w, g) => this.onKeyframesResolved(y, w, h, !g),l,c,u),
        (x = this.keyframeResolver) == null || x.scheduleResolve()
    }
    onKeyframesResolved(t, n, r, i) {
        var w, g;
        this.keyframeResolver = void 0;
        const {name: s, type: o, velocity: a, delay: l, isHandoff: c, onUpdate: u} = r;
        this.resolvedAt = qe.now(),
        $j(t, s, o, a) || ((Tn.instantAnimations || !l) && (u == null || u(dh(t, r, n))),
        t[0] = t[t.length - 1],
        wd(r),
        r.repeat = 0);
        const h = {
            startTime: i ? this.resolvedAt ? this.resolvedAt - this.createdAt > Kj ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t
        }
          , p = !c && Hj(h)
          , x = (g = (w = h.motionValue) == null ? void 0 : w.owner) == null ? void 0 : g.current
          , y = p ? new zj({
            ...h,
            element: x
        }) : new hh(h);
        y.finished.then( () => {
            this.notifyFinished()
        }
        ).catch(Tt),
        this.pendingTimeline && (this.stopTimeline = y.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
        this._animation = y
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished
    }
    then(t, n) {
        return this.finished.finally(t).then( () => {}
        )
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(),
        Rj()),
        this._animation
    }
    get duration() {
        return this.animation.duration
    }
    get iterationDuration() {
        return this.animation.iterationDuration
    }
    get time() {
        return this.animation.time
    }
    set time(t) {
        this.animation.time = t
    }
    get speed() {
        return this.animation.speed
    }
    get state() {
        return this.animation.state
    }
    set speed(t) {
        this.animation.speed = t
    }
    get startTime() {
        return this.animation.startTime
    }
    attachTimeline(t) {
        return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t,
        () => this.stop()
    }
    play() {
        this.animation.play()
    }
    pause() {
        this.animation.pause()
    }
    complete() {
        this.animation.complete()
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(),
        (t = this.keyframeResolver) == null || t.cancel()
    }
}
function Xw(e, t, n, r=0, i=1) {
    const s = Array.from(e).sort( (c, u) => c.sortNodePosition(u)).indexOf(t)
      , o = e.size
      , a = (o - 1) * r;
    return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r
}
const qj = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Yj(e) {
    const t = qj.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
const Qj = 4;
function Zw(e, t, n=1) {
    qi(n <= Qj, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [r,i] = Yj(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return mw(o) ? parseFloat(o) : o
    }
    return oh(i) ? Zw(i, t, n + 1) : i
}
const Xj = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Zj = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , Jj = {
    type: "keyframes",
    duration: .8
}
  , eA = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , tA = (e, {keyframes: t}) => t.length > 2 ? Jj : as.has(e) ? e.startsWith("scale") ? Zj(t[1]) : Xj : eA
  , nA = e => e !== null;
function rA(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(nA)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
function Jw(e, t) {
    if (e != null && e.inherit && t) {
        const {inherit: n, ...r} = e;
        return {
            ...t,
            ...r
        }
    }
    return e
}
function mh(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? Jw(n, e) : n
}
function iA({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: a, from: l, elapsed: c, ...u}) {
    return !!Object.keys(u).length
}
const gh = (e, t, n, r={}, i, s) => o => {
    const a = mh(r, e) || {}
      , l = a.delay || r.delay || 0;
    let {elapsed: c=0} = r;
    c = c - Et(l);
    const u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: h => {
            t.set(h),
            a.onUpdate && a.onUpdate(h)
        }
        ,
        onComplete: () => {
            o(),
            a.onComplete && a.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    iA(a) || Object.assign(u, tA(e, u)),
    u.duration && (u.duration = Et(u.duration)),
    u.repeatDelay && (u.repeatDelay = Et(u.repeatDelay)),
    u.from !== void 0 && (u.keyframes[0] = u.from);
    let f = !1;
    if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (wd(u),
    u.delay === 0 && (f = !0)),
    (Tn.instantAnimations || Tn.skipAnimations || i != null && i.shouldSkipAnimations) && (f = !0,
    wd(u),
    u.delay = 0),
    u.allowFlatten = !a.type && !a.ease,
    f && !s && t.get() !== void 0) {
        const h = rA(u.keyframes, a);
        if (h !== void 0) {
            se.update( () => {
                u.onUpdate(h),
                u.onComplete()
            }
            );
            return
        }
    }
    return a.isSync ? new hh(u) : new Gj(u)
}
;
function qm(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function yh(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = qm(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = qm(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
function Ai(e, t, n) {
    const r = e.getProps();
    return yh(r, t, n !== void 0 ? n : r.custom, e)
}
const e1 = new Set(["width", "height", "top", "left", "right", "bottom", ...os])
  , Ym = 30
  , sA = e => !isNaN(parseFloat(e));
class oA {
    constructor(t, n={}) {
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = r => {
            var s;
            const i = qe.now();
            if (this.updatedAt !== i && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
                for (const o of this.dependents)
                    o.dirty()
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = qe.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = sA(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new rh);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            se.read( () => {
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
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current)
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set),
        this.dependents.add(t)
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t)
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = qe.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ym)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ym);
        return xw(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
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
        var t, n;
        (t = this.dependents) == null || t.clear(),
        (n = this.events.destroy) == null || n.notify(),
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Yi(e, t) {
    return new oA(e,t)
}
const bd = e => Array.isArray(e);
function aA(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Yi(n))
}
function lA(e) {
    return bd(e) ? e[e.length - 1] || 0 : e
}
function cA(e, t) {
    const n = Ai(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const a = lA(s[o]);
        aA(e, o, a)
    }
}
const Ue = e => !!(e && e.getVelocity);
function uA(e) {
    return !!(Ue(e) && e.add)
}
function Sd(e, t) {
    const n = e.getValue("willChange");
    if (uA(n))
        return n.add(t);
    if (!n && Tn.WillChange) {
        const r = new Tn.WillChange("auto");
        e.addValue("willChange", r),
        r.add(t)
    }
}
function vh(e) {
    return e.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
}
const dA = "framerAppearId"
  , t1 = "data-" + vh(dA);
function n1(e) {
    return e.props[t1]
}
function fA({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function r1(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s, transitionEnd: o, ...a} = t;
    const l = e.getDefaultTransition();
    s = s ? Jw(s, l) : l;
    const c = s == null ? void 0 : s.reduceMotion;
    r && (s = r);
    const u = []
      , f = i && e.animationState && e.animationState.getState()[i];
    for (const h in a) {
        const p = e.getValue(h, e.latestValues[h] ?? null)
          , x = a[h];
        if (x === void 0 || f && fA(f, h))
            continue;
        const y = {
            delay: n,
            ...mh(s || {}, h)
        }
          , w = p.get();
        if (w !== void 0 && !p.isAnimating && !Array.isArray(x) && x === w && !y.velocity)
            continue;
        let g = !1;
        if (window.MotionHandoffAnimation) {
            const S = n1(e);
            if (S) {
                const C = window.MotionHandoffAnimation(S, h, se);
                C !== null && (y.startTime = C,
                g = !0)
            }
        }
        Sd(e, h);
        const m = c ?? e.shouldReduceMotion;
        p.start(gh(h, p, x, m && e1.has(h) ? {
            type: !1
        } : y, e, g));
        const v = p.animation;
        v && u.push(v)
    }
    if (o) {
        const h = () => se.update( () => {
            o && cA(e, o)
        }
        );
        u.length ? Promise.all(u).then(h) : h()
    }
    return u
}
function Cd(e, t, n={}) {
    var l;
    const r = Ai(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(r1(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (c=0) => {
        const {delayChildren: u=0, staggerChildren: f, staggerDirection: h} = i;
        return hA(e, t, c, u, f, h, n)
    }
    : () => Promise.resolve()
      , {when: a} = i;
    if (a) {
        const [c,u] = a === "beforeChildren" ? [s, o] : [o, s];
        return c().then( () => u())
    } else
        return Promise.all([s(), o(n.delay)])
}
function hA(e, t, n=0, r=0, i=0, s=1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
        a.push(Cd(l, t, {
            ...o,
            delay: n + (typeof r == "function" ? 0 : r) + Xw(e.variantChildren, l, r, i, s)
        }).then( () => l.notify("AnimationComplete", t)));
    return Promise.all(a)
}
function pA(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => Cd(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Cd(e, t, n);
    else {
        const i = typeof t == "function" ? Ai(e, t, n.custom) : t;
        r = Promise.all(r1(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const mA = {
    test: e => e === "auto",
    parse: e => e
}
  , i1 = e => t => t.test(e)
  , s1 = [ss, _, sn, In, UN, $N, mA]
  , Qm = e => s1.find(i1(e));
function gA(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || yw(e) : !0
}
const yA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function vA(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(ah) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = yA.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const xA = /\b([a-z-]*)\(.*?\)/gu
  , Td = {
    ...Wt,
    getAnimatableNone: e => {
        const t = e.match(xA);
        return t ? t.map(vA).join(" ") : e
    }
}
  , Ed = {
    ...Wt,
    getAnimatableNone: e => {
        const t = Wt.parse(e);
        return Wt.createTransformer(e)(t.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
            ...r,
            alpha: 1
        } : r))
    }
}
  , Xm = {
    ...ss,
    transform: Math.round
}
  , wA = {
    rotate: In,
    rotateX: In,
    rotateY: In,
    rotateZ: In,
    scale: sa,
    scaleX: sa,
    scaleY: sa,
    scaleZ: sa,
    skew: In,
    skewX: In,
    skewY: In,
    distance: _,
    translateX: _,
    translateY: _,
    translateZ: _,
    x: _,
    y: _,
    z: _,
    perspective: _,
    transformPerspective: _,
    opacity: fo,
    originX: Fm,
    originY: Fm,
    originZ: _
}
  , xh = {
    borderWidth: _,
    borderTopWidth: _,
    borderRightWidth: _,
    borderBottomWidth: _,
    borderLeftWidth: _,
    borderRadius: _,
    borderTopLeftRadius: _,
    borderTopRightRadius: _,
    borderBottomRightRadius: _,
    borderBottomLeftRadius: _,
    width: _,
    maxWidth: _,
    height: _,
    maxHeight: _,
    top: _,
    right: _,
    bottom: _,
    left: _,
    inset: _,
    insetBlock: _,
    insetBlockStart: _,
    insetBlockEnd: _,
    insetInline: _,
    insetInlineStart: _,
    insetInlineEnd: _,
    padding: _,
    paddingTop: _,
    paddingRight: _,
    paddingBottom: _,
    paddingLeft: _,
    paddingBlock: _,
    paddingBlockStart: _,
    paddingBlockEnd: _,
    paddingInline: _,
    paddingInlineStart: _,
    paddingInlineEnd: _,
    margin: _,
    marginTop: _,
    marginRight: _,
    marginBottom: _,
    marginLeft: _,
    marginBlock: _,
    marginBlockStart: _,
    marginBlockEnd: _,
    marginInline: _,
    marginInlineStart: _,
    marginInlineEnd: _,
    fontSize: _,
    backgroundPositionX: _,
    backgroundPositionY: _,
    ...wA,
    zIndex: Xm,
    fillOpacity: fo,
    strokeOpacity: fo,
    numOctaves: Xm
}
  , bA = {
    ...xh,
    color: Ce,
    backgroundColor: Ce,
    outlineColor: Ce,
    fill: Ce,
    stroke: Ce,
    borderColor: Ce,
    borderTopColor: Ce,
    borderRightColor: Ce,
    borderBottomColor: Ce,
    borderLeftColor: Ce,
    filter: Td,
    WebkitFilter: Td,
    mask: Ed,
    WebkitMask: Ed
}
  , o1 = e => bA[e]
  , SA = new Set([Td, Ed]);
function a1(e, t) {
    let n = o1(e);
    return SA.has(n) || (n = Wt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const CA = new Set(["auto", "none", "0"]);
function TA(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !CA.has(s) && ho(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = a1(n, i)
}
class EA extends ph {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let u = 0; u < t.length; u++) {
            let f = t[u];
            if (typeof f == "string" && (f = f.trim(),
            oh(f))) {
                const h = Zw(f, n.current);
                h !== void 0 && (t[u] = h),
                u === t.length - 1 && (this.finalKeyframe = f)
            }
        }
        if (this.resolveNoneKeyframes(),
        !e1.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = Qm(i)
          , a = Qm(s)
          , l = Im(i)
          , c = Im(s);
        if (l !== c && Qn[r]) {
            this.needsMeasurement = !0;
            return
        }
        if (o !== a)
            if (Hm(o) && Hm(a))
                for (let u = 0; u < t.length; u++) {
                    const f = t[u];
                    typeof f == "string" && (t[u] = parseFloat(f))
                }
            else
                Qn[r] && (this.needsMeasurement = !0)
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            (t[i] === null || gA(t[i])) && r.push(i);
        r.length && TA(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = Qn[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var a;
        const {element: t, name: n, unresolvedKeyframes: r} = this;
        if (!t || !t.current)
            return;
        const i = t.getValue(n);
        i && i.jump(this.measuredOrigin, !1);
        const s = r.length - 1
          , o = r[s];
        r[s] = Qn[n](t.measureViewportBox(), window.getComputedStyle(t.current)),
        o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
        (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach( ([l,c]) => {
            t.getValue(l).set(c)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const kA = new Set(["opacity", "clipPath", "filter", "transform"]);
function l1(e, t, n) {
    if (e == null)
        return [];
    if (e instanceof EventTarget)
        return [e];
    if (typeof e == "string") {
        const i = document.querySelectorAll(e);
        return i ? Array.from(i) : []
    }
    return Array.from(e).filter(r => r != null)
}
const c1 = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function kd(e) {
    return gw(e) && "offsetHeight"in e
}
const {schedule: wh, cancel: SL} = Aw(queueMicrotask, !1)
  , Ot = {
    x: !1,
    y: !1
};
function u1() {
    return Ot.x || Ot.y
}
function PA(e) {
    return e === "x" || e === "y" ? Ot[e] ? null : (Ot[e] = !0,
    () => {
        Ot[e] = !1
    }
    ) : Ot.x || Ot.y ? null : (Ot.x = Ot.y = !0,
    () => {
        Ot.x = Ot.y = !1
    }
    )
}
function d1(e, t) {
    const n = l1(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function NA(e) {
    return !(e.pointerType === "touch" || u1())
}
function jA(e, t, n={}) {
    const [r,i,s] = d1(e, n);
    return r.forEach(o => {
        let a = !1, l = !1, c;
        const u = () => {
            o.removeEventListener("pointerleave", x)
        }
          , f = w => {
            c && (c(w),
            c = void 0),
            u()
        }
          , h = w => {
            a = !1,
            window.removeEventListener("pointerup", h),
            window.removeEventListener("pointercancel", h),
            l && (l = !1,
            f(w))
        }
          , p = () => {
            a = !0,
            window.addEventListener("pointerup", h, i),
            window.addEventListener("pointercancel", h, i)
        }
          , x = w => {
            if (w.pointerType !== "touch") {
                if (a) {
                    l = !0;
                    return
                }
                f(w)
            }
        }
          , y = w => {
            if (!NA(w))
                return;
            l = !1;
            const g = t(o, w);
            typeof g == "function" && (c = g,
            o.addEventListener("pointerleave", x, i))
        }
        ;
        o.addEventListener("pointerenter", y, i),
        o.addEventListener("pointerdown", p, i)
    }
    ),
    s
}
const f1 = (e, t) => t ? e === t ? !0 : f1(e, t.parentElement) : !1
  , bh = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , AA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function RA(e) {
    return AA.has(e.tagName) || e.isContentEditable === !0
}
const MA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function DA(e) {
    return MA.has(e.tagName) || e.isContentEditable === !0
}
const Ea = new WeakSet;
function Zm(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Wc(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const LA = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Zm( () => {
        if (Ea.has(n))
            return;
        Wc(n, "down");
        const i = Zm( () => {
            Wc(n, "up")
        }
        )
          , s = () => Wc(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Jm(e) {
    return bh(e) && !u1()
}
const eg = new WeakSet;
function OA(e, t, n={}) {
    const [r,i,s] = d1(e, n)
      , o = a => {
        const l = a.currentTarget;
        if (!Jm(a) || eg.has(a))
            return;
        Ea.add(l),
        n.stopPropagation && eg.add(a);
        const c = t(l, a)
          , u = (p, x) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            Ea.has(l) && Ea.delete(l),
            Jm(p) && typeof c == "function" && c(p, {
                success: x
            })
        }
          , f = p => {
            u(p, l === window || l === document || n.useGlobalTarget || f1(l, p.target))
        }
          , h = p => {
            u(p, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i)
    }
    ;
    return r.forEach(a => {
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        kd(a) && (a.addEventListener("focus", c => LA(c, i)),
        !RA(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0))
    }
    ),
    s
}
function Sh(e) {
    return gw(e) && "ownerSVGElement"in e
}
const ka = new WeakMap;
let Fn;
const h1 = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Sh(r) && "getBBox"in r ? r.getBBox()[t] : r[n]
  , IA = h1("inline", "width", "offsetWidth")
  , FA = h1("block", "height", "offsetHeight");
function _A({target: e, borderBoxSize: t}) {
    var n;
    (n = ka.get(e)) == null || n.forEach(r => {
        r(e, {
            get width() {
                return IA(e, t)
            },
            get height() {
                return FA(e, t)
            }
        })
    }
    )
}
function VA(e) {
    e.forEach(_A)
}
function zA() {
    typeof ResizeObserver > "u" || (Fn = new ResizeObserver(VA))
}
function BA(e, t) {
    Fn || zA();
    const n = l1(e);
    return n.forEach(r => {
        let i = ka.get(r);
        i || (i = new Set,
        ka.set(r, i)),
        i.add(t),
        Fn == null || Fn.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const i = ka.get(r);
            i == null || i.delete(t),
            i != null && i.size || Fn == null || Fn.unobserve(r)
        }
        )
    }
}
const Pa = new Set;
let vi;
function $A() {
    vi = () => {
        const e = {
            get width() {
                return window.innerWidth
            },
            get height() {
                return window.innerHeight
            }
        };
        Pa.forEach(t => t(e))
    }
    ,
    window.addEventListener("resize", vi)
}
function UA(e) {
    return Pa.add(e),
    vi || $A(),
    () => {
        Pa.delete(e),
        !Pa.size && typeof vi == "function" && (window.removeEventListener("resize", vi),
        vi = void 0)
    }
}
function tg(e, t) {
    return typeof e == "function" ? UA(e) : BA(e, t)
}
function WA(e) {
    return Sh(e) && e.tagName === "svg"
}
const HA = [...s1, Ce, Wt]
  , KA = e => HA.find(i1(e))
  , ng = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , xi = () => ({
    x: ng(),
    y: ng()
})
  , rg = () => ({
    min: 0,
    max: 0
})
  , ke = () => ({
    x: rg(),
    y: rg()
})
  , GA = new WeakMap;
function Gl(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
function po(e) {
    return typeof e == "string" || Array.isArray(e)
}
const Ch = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Th = ["initial", ...Ch];
function ql(e) {
    return Gl(e.animate) || Th.some(t => po(e[t]))
}
function p1(e) {
    return !!(ql(e) || e.variants)
}
function qA(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Ue(i))
            e.addValue(r, i);
        else if (Ue(s))
            e.addValue(r, Yi(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Yi(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const Pd = {
    current: null
}
  , m1 = {
    current: !1
}
  , YA = typeof window < "u";
function QA() {
    if (m1.current = !0,
    !!YA)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Pd.current = e.matches;
            e.addEventListener("change", t),
            t()
        } else
            Pd.current = !1
}
const ig = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let fl = {};
function g1(e) {
    fl = e
}
function XA() {
    return fl
}
class ZA {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, skipAnimations: s, blockInitialAnimation: o, visualState: a}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.shouldSkipAnimations = !1,
        this.values = new Map,
        this.KeyframeResolver = ph,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.hasBeenMounted = !1,
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const p = qe.now();
            this.renderScheduledAt < p && (this.renderScheduledAt = p,
            se.render(this.render, !1, !0))
        }
        ;
        const {latestValues: c, renderState: u} = a;
        this.latestValues = c,
        this.baseTarget = {
            ...c
        },
        this.initialValues = n.initial ? {
            ...c
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.skipAnimationsConfig = s,
        this.options = l,
        this.blockInitialAnimation = !!o,
        this.isControllingVariants = ql(n),
        this.isVariantNode = p1(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: f, ...h} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const p in h) {
            const x = h[p];
            c[p] !== void 0 && Ue(x) && x.set(c[p])
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const i in this.initialValues)
                (n = this.values.get(i)) == null || n.jump(this.initialValues[i]),
                this.latestValues[i] = this.initialValues[i];
        this.current = t,
        GA.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (i, s) => this.bindToMotionValue(s, i)),
        this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (m1.current || QA(),
        this.shouldReduceMotion = Pd.current),
        this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
        (r = this.parent) == null || r.addChild(this),
        this.update(this.props, this.presenceContext),
        this.hasBeenMounted = !0
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
        hr(this.notifyUpdate),
        hr(this.render),
        this.valueSubscriptions.forEach(n => n()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events)
            this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(),
            r.isMounted = !1)
        }
        this.current = null
    }
    addChild(t) {
        this.children.add(t),
        this.enteringChildren ?? (this.enteringChildren = new Set),
        this.enteringChildren.add(t)
    }
    removeChild(t) {
        this.children.delete(t),
        this.enteringChildren && this.enteringChildren.delete(t)
    }
    bindToMotionValue(t, n) {
        if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
        n.accelerate && kA.has(t) && this.current instanceof HTMLElement) {
            const {factory: o, keyframes: a, times: l, ease: c, duration: u} = n.accelerate
              , f = new Yw({
                element: this.current,
                name: t,
                keyframes: a,
                times: l,
                ease: c,
                duration: Et(u)
            })
              , h = o(f);
            this.valueSubscriptions.set(t, () => {
                h(),
                f.cancel()
            }
            );
            return
        }
        const r = as.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && se.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender()
        }
        );
        let s;
        typeof window < "u" && window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s && s(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in fl) {
            const n = fl[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ke()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < ig.length; r++) {
            const i = ig[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = qA(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues),
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
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
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
        return r === void 0 && n !== void 0 && (r = Yi(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options);
        return r != null && (typeof r == "string" && (mw(r) || yw(r)) ? r = parseFloat(r) : !KA(r) && Wt.test(n) && (r = a1(t, n)),
        this.setBaseTarget(t, Ue(r) ? r.get() : r)),
        Ue(r) ? r.get() : r
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var s;
        const {initial: n} = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = yh(this.props, n, (s = this.presenceContext) == null ? void 0 : s.custom);
            o && (r = o[t])
        }
        if (n && r !== void 0)
            return r;
        const i = this.getBaseTargetFromProps(this.props, t);
        return i !== void 0 && !Ue(i) ? i : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new rh),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
    scheduleRenderMicrotask() {
        wh.render(this.render)
    }
}
class y1 extends ZA {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = EA
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ue(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
class vr {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function v1({top: e, left: t, right: n, bottom: r}) {
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
function JA({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function eR(e, t) {
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
function Hc(e) {
    return e === void 0 || e === 1
}
function Nd({scale: e, scaleX: t, scaleY: n}) {
    return !Hc(e) || !Hc(t) || !Hc(n)
}
function Er(e) {
    return Nd(e) || x1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function x1(e) {
    return sg(e.x) || sg(e.y)
}
function sg(e) {
    return e && e !== "0%"
}
function hl(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function og(e, t, n, r, i) {
    return i !== void 0 && (e = hl(e, i, r)),
    hl(e, n, r) + t
}
function jd(e, t=0, n=1, r, i) {
    e.min = og(e.min, t, n, r, i),
    e.max = og(e.max, t, n, r, i)
}
function w1(e, {x: t, y: n}) {
    jd(e.x, t.translate, t.scale, t.originPoint),
    jd(e.y, n.translate, n.scale, n.originPoint)
}
const ag = .999999999999
  , lg = 1.0000000000001;
function tR(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
        s = n[a],
        o = s.projectionDelta;
        const {visualElement: l} = s.options;
        l && l.props.style && l.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && bi(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        w1(e, o)),
        r && Er(s.latestValues) && bi(e, s.latestValues))
    }
    t.x < lg && t.x > ag && (t.x = 1),
    t.y < lg && t.y > ag && (t.y = 1)
}
function wi(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function cg(e, t, n, r, i=.5) {
    const s = me(e.min, e.max, i);
    jd(e, t, n, s, r)
}
function bi(e, t) {
    cg(e.x, t.x, t.scaleX, t.scale, t.originX),
    cg(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function b1(e, t) {
    return v1(eR(e.getBoundingClientRect(), t))
}
function nR(e, t, n) {
    const r = b1(e, n)
      , {scroll: i} = t;
    return i && (wi(r.x, i.offset.x),
    wi(r.y, i.offset.y)),
    r
}
const rR = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , iR = os.length;
function sR(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < iR; s++) {
        const o = os[s]
          , a = e[o];
        if (a === void 0)
            continue;
        let l = !0;
        if (typeof a == "number")
            l = a === (o.startsWith("scale") ? 1 : 0);
        else {
            const c = parseFloat(a);
            l = o.startsWith("scale") ? c === 1 : c === 0
        }
        if (!l || n) {
            const c = c1(a, xh[o]);
            if (!l) {
                i = !1;
                const u = rR[o] || o;
                r += `${u}(${c}) `
            }
            n && (t[o] = c)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function Eh(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , a = !1;
    for (const l in t) {
        const c = t[l];
        if (as.has(l)) {
            o = !0;
            continue
        } else if (Mw(l)) {
            i[l] = c;
            continue
        } else {
            const u = c1(c, xh[l]);
            l.startsWith("origin") ? (a = !0,
            s[l] = u) : r[l] = u
        }
    }
    if (t.transform || (o || n ? r.transform = sR(t, e.transform, n) : r.transform && (r.transform = "none")),
    a) {
        const {originX: l="50%", originY: c="50%", originZ: u=0} = s;
        r.transformOrigin = `${l} ${c} ${u}`
    }
}
function S1(e, {style: t, vars: n}, r, i) {
    const s = e.style;
    let o;
    for (o in t)
        s[o] = t[o];
    i == null || i.applyProjectionStyles(s, r);
    for (o in n)
        s.setProperty(o, n[o])
}
function ug(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const ws = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (_.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = ug(e, t.target.x)
          , r = ug(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , oR = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Wt.parse(e);
        if (i.length > 5)
            return r;
        const s = Wt.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , a = n.x.scale * t.x
          , l = n.y.scale * t.y;
        i[0 + o] /= a,
        i[1 + o] /= l;
        const c = me(a, l, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
    }
}
  , Ad = {
    borderRadius: {
        ...ws,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: ws,
    borderTopRightRadius: ws,
    borderBottomLeftRadius: ws,
    borderBottomRightRadius: ws,
    boxShadow: oR
};
function C1(e, {layout: t, layoutId: n}) {
    return as.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ad[e] || e === "opacity")
}
function kh(e, t, n) {
    var o;
    const r = e.style
      , i = t == null ? void 0 : t.style
      , s = {};
    if (!r)
        return s;
    for (const a in r)
        (Ue(r[a]) || i && Ue(i[a]) || C1(a, e) || ((o = n == null ? void 0 : n.getValue(a)) == null ? void 0 : o.liveStyle) !== void 0) && (s[a] = r[a]);
    return s
}
function aR(e) {
    return window.getComputedStyle(e)
}
class lR extends y1 {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = S1
    }
    readValueFromInstance(t, n) {
        var r;
        if (as.has(n))
            return (r = this.projection) != null && r.isProjecting ? md(n) : kj(t, n);
        {
            const i = aR(t)
              , s = (Mw(n) ? i.getPropertyValue(n) : i[n]) || 0;
            return typeof s == "string" ? s.trim() : s
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return b1(t, n)
    }
    build(t, n, r) {
        Eh(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return kh(t, n, r)
    }
}
const cR = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , uR = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function dR(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? cR : uR;
    e[s.offset] = `${-r}`,
    e[s.array] = `${t} ${n}`
}
const fR = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function T1(e, {attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: s=1, pathOffset: o=0, ...a}, l, c, u) {
    if (Eh(e, a, c),
    l) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: f, style: h} = e;
    f.transform && (h.transform = f.transform,
    delete f.transform),
    (h.transform || f.transformOrigin) && (h.transformOrigin = f.transformOrigin ?? "50% 50%",
    delete f.transformOrigin),
    h.transform && (h.transformBox = (u == null ? void 0 : u.transformBox) ?? "fill-box",
    delete f.transformBox);
    for (const p of fR)
        f[p] !== void 0 && (h[p] = f[p],
        delete f[p]);
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && dR(f, i, s, o, !1)
}
const E1 = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , k1 = e => typeof e == "string" && e.toLowerCase() === "svg";
function hR(e, t, n, r) {
    S1(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(E1.has(i) ? i : vh(i), t.attrs[i])
}
function P1(e, t, n) {
    const r = kh(e, t, n);
    for (const i in e)
        if (Ue(e[i]) || Ue(t[i])) {
            const s = os.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
class pR extends y1 {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ke
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (as.has(n)) {
            const r = o1(n);
            return r && r.default || 0
        }
        return n = E1.has(n) ? n : vh(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return P1(t, n, r)
    }
    build(t, n, r) {
        T1(t, n, this.isSVGTag, r.transformTemplate, r.style)
    }
    renderInstance(t, n, r, i) {
        hR(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = k1(t.tagName),
        super.mount(t)
    }
}
const mR = Th.length;
function N1(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? N1(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < mR; n++) {
        const r = Th[n]
          , i = e.props[r];
        (po(i) || i === !1) && (t[r] = i)
    }
    return t
}
function j1(e, t) {
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
const gR = [...Ch].reverse()
  , yR = Ch.length;
function vR(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => pA(e, n, r)))
}
function xR(e) {
    let t = vR(e)
      , n = dg()
      , r = !0;
    const i = l => (c, u) => {
        var h;
        const f = Ai(e, u, l === "exit" ? (h = e.presenceContext) == null ? void 0 : h.custom : void 0);
        if (f) {
            const {transition: p, transitionEnd: x, ...y} = f;
            c = {
                ...c,
                ...y,
                ...x
            }
        }
        return c
    }
    ;
    function s(l) {
        t = l(e)
    }
    function o(l) {
        const {props: c} = e
          , u = N1(e.parent) || {}
          , f = []
          , h = new Set;
        let p = {}
          , x = 1 / 0;
        for (let w = 0; w < yR; w++) {
            const g = gR[w]
              , m = n[g]
              , v = c[g] !== void 0 ? c[g] : u[g]
              , S = po(v)
              , C = g === l ? m.isActive : null;
            C === !1 && (x = w);
            let T = v === u[g] && v !== c[g] && S;
            if (T && r && e.manuallyAnimateOnMount && (T = !1),
            m.protectedKeys = {
                ...p
            },
            !m.isActive && C === null || !v && !m.prevProp || Gl(v) || typeof v == "boolean")
                continue;
            if (g === "exit" && m.isActive && C !== !0) {
                m.prevResolvedValues && (p = {
                    ...p,
                    ...m.prevResolvedValues
                });
                continue
            }
            const E = wR(m.prevProp, v);
            let k = E || g === l && m.isActive && !T && S || w > x && S
              , A = !1;
            const R = Array.isArray(v) ? v : [v];
            let z = R.reduce(i(g), {});
            C === !1 && (z = {});
            const {prevResolvedValues: I={}} = m
              , K = {
                ...I,
                ...z
            }
              , L = V => {
                k = !0,
                h.has(V) && (A = !0,
                h.delete(V)),
                m.needsAnimating[V] = !0;
                const P = e.getValue(V);
                P && (P.liveStyle = !1)
            }
            ;
            for (const V in K) {
                const P = z[V]
                  , j = I[V];
                if (p.hasOwnProperty(V))
                    continue;
                let O = !1;
                bd(P) && bd(j) ? O = !j1(P, j) : O = P !== j,
                O ? P != null ? L(V) : h.add(V) : P !== void 0 && h.has(V) ? L(V) : m.protectedKeys[V] = !0
            }
            m.prevProp = v,
            m.prevResolvedValues = z,
            m.isActive && (p = {
                ...p,
                ...z
            }),
            r && e.blockInitialAnimation && (k = !1);
            const q = T && E;
            k && (!q || A) && f.push(...R.map(V => {
                const P = {
                    type: g
                };
                if (typeof V == "string" && r && !q && e.manuallyAnimateOnMount && e.parent) {
                    const {parent: j} = e
                      , O = Ai(j, V);
                    if (j.enteringChildren && O) {
                        const {delayChildren: U} = O.transition || {};
                        P.delay = Xw(j.enteringChildren, e, U)
                    }
                }
                return {
                    animation: V,
                    options: P
                }
            }
            ))
        }
        if (h.size) {
            const w = {};
            if (typeof c.initial != "boolean") {
                const g = Ai(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                g && g.transition && (w.transition = g.transition)
            }
            h.forEach(g => {
                const m = e.getBaseTarget(g)
                  , v = e.getValue(g);
                v && (v.liveStyle = !0),
                w[g] = m ?? null
            }
            ),
            f.push({
                animation: w
            })
        }
        let y = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (y = !1),
        r = !1,
        y ? t(f) : Promise.resolve()
    }
    function a(l, c) {
        var f;
        if (n[l].isActive === c)
            return Promise.resolve();
        (f = e.variantChildren) == null || f.forEach(h => {
            var p;
            return (p = h.animationState) == null ? void 0 : p.setActive(l, c)
        }
        ),
        n[l].isActive = c;
        const u = o(l);
        for (const h in n)
            n[h].protectedKeys = {};
        return u
    }
    return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = dg()
        }
    }
}
function wR(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !j1(t, e) : !1
}
function Sr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function dg() {
    return {
        animate: Sr(!0),
        whileInView: Sr(),
        whileHover: Sr(),
        whileTap: Sr(),
        whileDrag: Sr(),
        whileFocus: Sr(),
        exit: Sr()
    }
}
function fg(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Lt(e, t) {
    fg(e.x, t.x),
    fg(e.y, t.y)
}
function hg(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
const A1 = 1e-4
  , bR = 1 - A1
  , SR = 1 + A1
  , R1 = .01
  , CR = 0 - R1
  , TR = 0 + R1;
function Ye(e) {
    return e.max - e.min
}
function ER(e, t, n) {
    return Math.abs(e - t) <= n
}
function pg(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = me(t.min, t.max, e.origin),
    e.scale = Ye(n) / Ye(t),
    e.translate = me(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= bR && e.scale <= SR || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= CR && e.translate <= TR || isNaN(e.translate)) && (e.translate = 0)
}
function Vs(e, t, n, r) {
    pg(e.x, t.x, n.x, r ? r.originX : void 0),
    pg(e.y, t.y, n.y, r ? r.originY : void 0)
}
function mg(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ye(t)
}
function kR(e, t, n) {
    mg(e.x, t.x, n.x),
    mg(e.y, t.y, n.y)
}
function gg(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ye(t)
}
function pl(e, t, n) {
    gg(e.x, t.x, n.x),
    gg(e.y, t.y, n.y)
}
function yg(e, t, n, r, i) {
    return e -= t,
    e = hl(e, 1 / n, r),
    i !== void 0 && (e = hl(e, 1 / i, r)),
    e
}
function PR(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (sn.test(t) && (t = parseFloat(t),
    t = me(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let a = me(s.min, s.max, r);
    e === s && (a -= t),
    e.min = yg(e.min, t, n, a, i),
    e.max = yg(e.max, t, n, a, i)
}
function vg(e, t, [n,r,i], s, o) {
    PR(e, t[n], t[r], t[i], t.scale, s, o)
}
const NR = ["x", "scaleX", "originX"]
  , jR = ["y", "scaleY", "originY"];
function xg(e, t, n, r) {
    vg(e.x, t, NR, n ? n.x : void 0, r ? r.x : void 0),
    vg(e.y, t, jR, n ? n.y : void 0, r ? r.y : void 0)
}
function wg(e) {
    return e.translate === 0 && e.scale === 1
}
function M1(e) {
    return wg(e.x) && wg(e.y)
}
function bg(e, t) {
    return e.min === t.min && e.max === t.max
}
function AR(e, t) {
    return bg(e.x, t.x) && bg(e.y, t.y)
}
function Sg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function D1(e, t) {
    return Sg(e.x, t.x) && Sg(e.y, t.y)
}
function Cg(e) {
    return Ye(e.x) / Ye(e.y)
}
function Tg(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
function Xt(e) {
    return [e("x"), e("y")]
}
function RR(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: c, rotate: u, rotateX: f, rotateY: h, skewX: p, skewY: x} = n;
        c && (r = `perspective(${c}px) ${r}`),
        u && (r += `rotate(${u}deg) `),
        f && (r += `rotateX(${f}deg) `),
        h && (r += `rotateY(${h}deg) `),
        p && (r += `skewX(${p}deg) `),
        x && (r += `skewY(${x}deg) `)
    }
    const a = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`),
    r || "none"
}
const L1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , MR = L1.length
  , Eg = e => typeof e == "string" ? parseFloat(e) : e
  , kg = e => typeof e == "number" || _.test(e);
function DR(e, t, n, r, i, s) {
    i ? (e.opacity = me(0, n.opacity ?? 1, LR(r)),
    e.opacityExit = me(t.opacity ?? 1, 0, OR(r))) : s && (e.opacity = me(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < MR; o++) {
        const a = `border${L1[o]}Radius`;
        let l = Pg(t, a)
          , c = Pg(n, a);
        if (l === void 0 && c === void 0)
            continue;
        l || (l = 0),
        c || (c = 0),
        l === 0 || c === 0 || kg(l) === kg(c) ? (e[a] = Math.max(me(Eg(l), Eg(c), r), 0),
        (sn.test(c) || sn.test(l)) && (e[a] += "%")) : e[a] = c
    }
    (t.rotate || n.rotate) && (e.rotate = me(t.rotate || 0, n.rotate || 0, r))
}
function Pg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const LR = O1(0, .5, kw)
  , OR = O1(.5, .95, Tt);
function O1(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(uo(e, t, r))
}
function IR(e, t, n) {
    const r = Ue(e) ? e : Yi(e);
    return r.start(gh("", r, t, n)),
    r.animation
}
function mo(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const FR = (e, t) => e.depth - t.depth;
class _R {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        nh(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        ll(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(FR),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function VR(e, t) {
    const n = qe.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (hr(r),
        e(s - t))
    }
    ;
    return se.setup(r, !0),
    () => hr(r)
}
function Na(e) {
    return Ue(e) ? e.get() : e
}
class zR {
    constructor() {
        this.members = []
    }
    add(t) {
        nh(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead)
                continue;
            const i = r.instance;
            i && i.isConnected === !1 && r.isPresent !== !1 && !r.snapshot && ll(this.members, r)
        }
        t.scheduleRender()
    }
    remove(t) {
        if (ll(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i]
              , o = s.instance;
            if (s.isPresent !== !1 && (!o || o.isConnected !== !1)) {
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
            t.scheduleRender();
            const i = r.options.layoutDependency
              , s = t.options.layoutDependency;
            if (!(i !== void 0 && s !== void 0 && i === s)) {
                const l = r.instance;
                l && l.isConnected === !1 && !r.snapshot || (t.resumeFrom = r,
                n && (t.resumeFrom.preserveOpacity = !0),
                r.snapshot && (t.snapshot = r.snapshot,
                t.snapshot.latestValues = r.animationValues || r.latestValues),
                t.root && t.root.isUpdating && (t.isLayoutDirty = !0))
            }
            const {crossfade: a} = t.options;
            a === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const ja = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
}
  , Kc = ["", "X", "Y", "Z"]
  , BR = 1e3;
let $R = 0;
function Gc(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function I1(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = n1(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", se, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && I1(r)
}
function F1({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, a=t == null ? void 0 : t()) {
            this.id = $R++,
            this.animationId = 0,
            this.animationCommitId = 0,
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
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.layoutVersion = 0,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                this.nodes.forEach(HR),
                this.nodes.forEach(YR),
                this.nodes.forEach(QR),
                this.nodes.forEach(KR)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.linkedParentVersion = 0,
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
            this.root === this && (this.nodes = new _R)
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new rh),
            this.eventHandlers.get(o).add(a)
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o) {
            if (this.instance)
                return;
            this.isSVG = Sh(o) && !WA(o),
            this.instance = o;
            const {layoutId: a, layout: l, visualElement: c} = this.options;
            if (c && !c.current && c.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e) {
                let u, f = 0;
                const h = () => this.root.updateBlockedByResize = !1;
                se.read( () => {
                    f = window.innerWidth
                }
                ),
                e(o, () => {
                    const p = window.innerWidth;
                    p !== f && (f = p,
                    this.root.updateBlockedByResize = !0,
                    u && u(),
                    u = VR(h, 250),
                    ja.hasAnimatedSinceResize && (ja.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Ag)))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || l) && this.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: f, hasRelativeLayoutChanged: h, layout: p}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || c.getDefaultTransition() || tM
                  , {onLayoutAnimationStart: y, onLayoutAnimationComplete: w} = c.getProps()
                  , g = !this.targetLayout || !D1(this.targetLayout, p)
                  , m = !f && h;
                if (this.options.layoutRoot || this.resumeFrom || m || f && (g || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0);
                    const v = {
                        ...mh(x, "layout"),
                        onPlay: y,
                        onComplete: w
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (v.delay = 0,
                    v.type = !1),
                    this.startAnimation(v),
                    this.setAnimationOrigin(u, m)
                } else
                    f || Ag(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = p
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
            this.eventHandlers.clear(),
            hr(this.updateProjection)
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
            this.nodes && this.nodes.forEach(XR),
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
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && I1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let u = 0; u < this.path.length; u++) {
                const f = this.path[u];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
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
                this.nodes.forEach(Ng);
                return
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(jg);
                return
            }
            this.animationCommitId = this.animationId,
            this.isUpdating ? (this.isUpdating = !1,
            this.nodes.forEach(qR),
            this.nodes.forEach(UR),
            this.nodes.forEach(WR)) : this.nodes.forEach(jg),
            this.clearAllSnapshots();
            const a = qe.now();
            Le.delta = ln(0, 1e3 / 60, a - Le.timestamp),
            Le.timestamp = a,
            Le.isProcessing = !0,
            _c.update.process(Le),
            _c.preRender.process(Le),
            _c.render.process(Le),
            Le.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            wh.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(GR),
            this.sharedNodes.forEach(ZR)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            se.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            se.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure(),
            this.snapshot && !Ye(this.snapshot.measuredBox.x) && !Ye(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
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
            this.layoutVersion++,
            this.layoutCorrected = ke(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: a} = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1),
            a && this.instance) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , a = this.projectionDelta && !M1(this.projectionDelta)
              , l = this.getTransformTemplate()
              , c = l ? l(this.latestValues, "") : void 0
              , u = c !== this.prevTransformTemplateValue;
            o && this.instance && (a || Er(this.latestValues) || u) && (i(this.instance, c),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return o && (l = this.removeTransform(l)),
            nM(l),
            {
                animationId: this.root.animationId,
                measuredBox: a,
                layoutBox: l,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var c;
            const {visualElement: o} = this.options;
            if (!o)
                return ke();
            const a = o.measureViewportBox();
            if (!(((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some(rM))) {
                const {scroll: u} = this.root;
                u && (wi(a.x, u.offset.x),
                wi(a.y, u.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = ke();
            if (Lt(a, o),
            (l = this.scroll) != null && l.wasRoot)
                return a;
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c]
                  , {scroll: f, options: h} = u;
                u !== this.root && f && h.layoutScroll && (f.wasRoot && Lt(a, o),
                wi(a.x, f.offset.x),
                wi(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(o, a=!1) {
            const l = ke();
            Lt(l, o);
            for (let c = 0; c < this.path.length; c++) {
                const u = this.path[c];
                !a && u.options.layoutScroll && u.scroll && u !== u.root && bi(l, {
                    x: -u.scroll.offset.x,
                    y: -u.scroll.offset.y
                }),
                Er(u.latestValues) && bi(l, u.latestValues)
            }
            return Er(this.latestValues) && bi(l, this.latestValues),
            l
        }
        removeTransform(o) {
            const a = ke();
            Lt(a, o);
            for (let l = 0; l < this.path.length; l++) {
                const c = this.path[l];
                if (!c.instance || !Er(c.latestValues))
                    continue;
                Nd(c.latestValues) && c.updateSnapshot();
                const u = ke()
                  , f = c.measurePageBox();
                Lt(u, f),
                xg(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u)
            }
            return Er(this.latestValues) && xg(a, this.latestValues),
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
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Le.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var p;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: u, layoutId: f} = this.options;
            if (!this.layout || !(u || f))
                return;
            this.resolvedRelativeTargetAt = Le.timestamp;
            const h = this.getClosestProjectingParent();
            h && this.linkedParentVersion !== h.layoutVersion && !h.options.layoutRoot && this.removeRelativeTarget(),
            !this.targetDelta && !this.relativeTarget && (h && h.layout ? this.createRelativeTarget(h, this.layout.layoutBox, h.layout.layoutBox) : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ke(),
            this.targetWithTransforms = ke()),
            this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            kR(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Lt(this.target, this.layout.layoutBox),
            w1(this.target, this.targetDelta)) : Lt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            h && !!h.resumingFrom == !!this.resumingFrom && !h.options.layoutScroll && h.target && this.animationProgress !== 1 ? this.createRelativeTarget(h, this.target, h.target) : this.relativeParent = this.relativeTarget = void 0))
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Nd(this.parent.latestValues) || x1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        createRelativeTarget(o, a, l) {
            this.relativeParent = o,
            this.linkedParentVersion = o.layoutVersion,
            this.forceRelativeParentToResolveTarget(),
            this.relativeTarget = ke(),
            this.relativeTargetOrigin = ke(),
            pl(this.relativeTargetOrigin, a, l),
            Lt(this.relativeTarget, this.relativeTargetOrigin)
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0
        }
        calcProjection() {
            var x;
            const o = this.getLead()
              , a = !!this.resumingFrom || this !== o;
            let l = !0;
            if ((this.isProjectionDirty || (x = this.parent) != null && x.isProjectionDirty) && (l = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
            this.resolvedRelativeTargetAt === Le.timestamp && (l = !1),
            l)
                return;
            const {layout: c, layoutId: u} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || u))
                return;
            Lt(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , h = this.treeScale.y;
            tR(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox,
            o.targetWithTransforms = ke());
            const {target: p} = o;
            if (!p) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (hg(this.prevProjectionDelta.x, this.projectionDelta.x),
            hg(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Vs(this.projectionDelta, this.layoutCorrected, p, this.latestValues),
            (this.treeScale.x !== f || this.treeScale.y !== h || !Tg(this.projectionDelta.x, this.prevProjectionDelta.x) || !Tg(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", p))
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var a;
            if ((a = this.options.visualElement) == null || a.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = xi(),
            this.projectionDelta = xi(),
            this.projectionDeltaWithTransform = xi()
        }
        setAnimationOrigin(o, a=!1) {
            const l = this.snapshot
              , c = l ? l.latestValues : {}
              , u = {
                ...this.latestValues
            }
              , f = xi();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !a;
            const h = ke()
              , p = l ? l.source : void 0
              , x = this.layout ? this.layout.source : void 0
              , y = p !== x
              , w = this.getStack()
              , g = !w || w.members.length <= 1
              , m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(eM));
            this.animationProgress = 0;
            let v;
            this.mixTargetDelta = S => {
                const C = S / 1e3;
                Rg(f.x, o.x, C),
                Rg(f.y, o.y, C),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (pl(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                JR(this.relativeTarget, this.relativeTargetOrigin, h, C),
                v && AR(this.relativeTarget, v) && (this.isProjectionDirty = !1),
                v || (v = ke()),
                Lt(v, this.relativeTarget)),
                y && (this.animationValues = u,
                DR(u, c, this.latestValues, C, m, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = C
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            var a, l, c;
            this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || c.stop(),
            this.pendingAnimation && (hr(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = se.update( () => {
                ja.hasAnimatedSinceResize = !0,
                this.motionValue || (this.motionValue = Yi(0)),
                this.motionValue.jump(0, !1),
                this.currentAnimation = IR(this.motionValue, [0, 1e3], {
                    ...o,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: u => {
                        this.mixTargetDelta(u),
                        o.onUpdate && o.onUpdate(u)
                    }
                    ,
                    onStop: () => {}
                    ,
                    onComplete: () => {
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
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(BR),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: a, target: l, layout: c, latestValues: u} = o;
            if (!(!a || !l || !c)) {
                if (this !== o && this.layout && c && _1(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
                    l = this.target || ke();
                    const f = Ye(this.layout.layoutBox.x);
                    l.x.min = o.target.x.min,
                    l.x.max = l.x.min + f;
                    const h = Ye(this.layout.layoutBox.y);
                    l.y.min = o.target.y.min,
                    l.y.max = l.y.min + h
                }
                Lt(a, l),
                bi(a, u),
                Vs(this.projectionDeltaWithTransform, this.layoutCorrected, a, u)
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new zR),
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
            var a;
            const {layoutId: o} = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this
        }
        getPrevLead() {
            var a;
            const {layoutId: o} = this.options;
            return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0
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
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let a = !1;
            const {latestValues: l} = o;
            if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0),
            !a)
                return;
            const c = {};
            l.z && Gc("z", o, c, this.animationValues);
            for (let u = 0; u < Kc.length; u++)
                Gc(`rotate${Kc[u]}`, o, c, this.animationValues),
                Gc(`skew${Kc[u]}`, o, c, this.animationValues);
            o.render();
            for (const u in c)
                o.setStaticValue(u, c[u]),
                this.animationValues && (this.animationValues[u] = c[u]);
            o.scheduleRender()
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                this.needsReset = !1,
                o.visibility = "",
                o.opacity = "",
                o.pointerEvents = Na(a == null ? void 0 : a.pointerEvents) || "",
                o.transform = l ? l(this.latestValues, "") : "none";
                return
            }
            const c = this.getLead();
            if (!this.projectionDelta || !this.layout || !c.target) {
                this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                o.pointerEvents = Na(a == null ? void 0 : a.pointerEvents) || ""),
                this.hasProjected && !Er(this.latestValues) && (o.transform = l ? l({}, "") : "none",
                this.hasProjected = !1);
                return
            }
            o.visibility = "";
            const u = c.animationValues || c.latestValues;
            this.applyTransformsToTarget();
            let f = RR(this.projectionDeltaWithTransform, this.treeScale, u);
            l && (f = l(u, f)),
            o.transform = f;
            const {x: h, y: p} = this.projectionDelta;
            o.transformOrigin = `${h.origin * 100}% ${p.origin * 100}% 0`,
            c.animationValues ? o.opacity = c === this ? u.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : u.opacityExit : o.opacity = c === this ? u.opacity !== void 0 ? u.opacity : "" : u.opacityExit !== void 0 ? u.opacityExit : 0;
            for (const x in Ad) {
                if (u[x] === void 0)
                    continue;
                const {correct: y, applyTo: w, isCSSVariable: g} = Ad[x]
                  , m = f === "none" ? u[x] : y(u[x], c);
                if (w) {
                    const v = w.length;
                    for (let S = 0; S < v; S++)
                        o[w[S]] = m
                } else
                    g ? this.options.visualElement.renderState.vars[x] = m : o[x] = m
            }
            this.options.layoutId && (o.pointerEvents = c === this ? Na(a == null ? void 0 : a.pointerEvents) || "" : "none")
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop()
            }
            ),
            this.root.nodes.forEach(Ng),
            this.root.sharedNodes.clear()
        }
    }
}
function UR(e) {
    e.updateLayout()
}
function WR(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = t.source !== e.layout.source;
        s === "size" ? Xt(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f]
              , p = Ye(h);
            h.min = r[f].min,
            h.max = h.min + p
        }
        ) : _1(s, t.layoutBox, r) && Xt(f => {
            const h = o ? t.measuredBox[f] : t.layoutBox[f]
              , p = Ye(r[f]);
            h.max = h.min + p,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + p)
        }
        );
        const a = xi();
        Vs(a, r, t.layoutBox);
        const l = xi();
        o ? Vs(l, e.applyTransform(i, !0), t.measuredBox) : Vs(l, r, t.layoutBox);
        const c = !M1(a);
        let u = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: h, layout: p} = f;
                if (h && p) {
                    const x = ke();
                    pl(x, t.layoutBox, h.layoutBox);
                    const y = ke();
                    pl(y, r, p.layoutBox),
                    D1(x, y) || (u = !0),
                    f.options.layoutRoot && (e.relativeTarget = y,
                    e.relativeTargetOrigin = x,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: c,
            hasRelativeLayoutChanged: u
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function HR(e) {
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function KR(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function GR(e) {
    e.clearSnapshot()
}
function Ng(e) {
    e.clearMeasurements()
}
function jg(e) {
    e.isLayoutDirty = !1
}
function qR(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Ag(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function YR(e) {
    e.resolveTargetDelta()
}
function QR(e) {
    e.calcProjection()
}
function XR(e) {
    e.resetSkewAndRotation()
}
function ZR(e) {
    e.removeLeadSnapshot()
}
function Rg(e, t, n) {
    e.translate = me(t.translate, 0, n),
    e.scale = me(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Mg(e, t, n, r) {
    e.min = me(t.min, n.min, r),
    e.max = me(t.max, n.max, r)
}
function JR(e, t, n, r) {
    Mg(e.x, t.x, n.x, r),
    Mg(e.y, t.y, n.y, r)
}
function eM(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const tM = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Dg = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Lg = Dg("applewebkit/") && !Dg("chrome/") ? Math.round : Tt;
function Og(e) {
    e.min = Lg(e.min),
    e.max = Lg(e.max)
}
function nM(e) {
    Og(e.x),
    Og(e.y)
}
function _1(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !ER(Cg(t), Cg(n), .2)
}
function rM(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot)
}
const iM = F1({
    attachResizeListener: (e, t) => mo(e, "resize", t),
    measureScroll: () => {
        var e, t;
        return {
            x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
            y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0
        }
    }
    ,
    checkIsScrollRoot: () => !0
})
  , qc = {
    current: void 0
}
  , V1 = F1({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!qc.current) {
            const e = new iM({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            qc.current = e
        }
        return qc.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , Ph = b.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
function Ig(e, t) {
    if (typeof e == "function")
        return e(t);
    e != null && (e.current = t)
}
function sM(...e) {
    return t => {
        let n = !1;
        const r = e.map(i => {
            const s = Ig(i, t);
            return !n && typeof s == "function" && (n = !0),
            s
        }
        );
        if (n)
            return () => {
                for (let i = 0; i < r.length; i++) {
                    const s = r[i];
                    typeof s == "function" ? s() : Ig(e[i], null)
                }
            }
    }
}
function oM(...e) {
    return b.useCallback(sM(...e), e)
}
class aM extends b.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent
              , i = kd(r) && r.offsetWidth || 0
              , s = kd(r) && r.offsetHeight || 0
              , o = this.props.sizeRef.current;
            o.height = n.offsetHeight || 0,
            o.width = n.offsetWidth || 0,
            o.top = n.offsetTop,
            o.left = n.offsetLeft,
            o.right = i - o.width - o.left,
            o.bottom = s - o.height - o.top
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function lM({children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: s}) {
    var h;
    const o = b.useId()
      , a = b.useRef(null)
      , l = b.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    })
      , {nonce: c} = b.useContext(Ph)
      , u = ((h = e.props) == null ? void 0 : h.ref) ?? (e == null ? void 0 : e.ref)
      , f = oM(a, u);
    return b.useInsertionEffect( () => {
        const {width: p, height: x, top: y, left: w, right: g, bottom: m} = l.current;
        if (t || s === !1 || !a.current || !p || !x)
            return;
        const v = n === "left" ? `left: ${w}` : `right: ${g}`
          , S = r === "bottom" ? `bottom: ${m}` : `top: ${y}`;
        a.current.dataset.motionPopId = o;
        const C = document.createElement("style");
        c && (C.nonce = c);
        const T = i ?? document.head;
        return T.appendChild(C),
        C.sheet && C.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${p}px !important;
            height: ${x}px !important;
            ${v}px !important;
            ${S}px !important;
          }
        `),
        () => {
            T.contains(C) && T.removeChild(C)
        }
    }
    , [t]),
    d.jsx(aM, {
        isPresent: t,
        childRef: a,
        sizeRef: l,
        pop: s,
        children: s === !1 ? e : b.cloneElement(e, {
            ref: f
        })
    })
}
const cM = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o, anchorX: a, anchorY: l, root: c}) => {
    const u = th(uM)
      , f = b.useId();
    let h = !0
      , p = b.useMemo( () => (h = !1,
    {
        id: f,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: x => {
            u.set(x, !0);
            for (const y of u.values())
                if (!y)
                    return;
            r && r()
        }
        ,
        register: x => (u.set(x, !1),
        () => u.delete(x))
    }), [n, u, r]);
    return s && h && (p = {
        ...p
    }),
    b.useMemo( () => {
        u.forEach( (x, y) => u.set(y, !1))
    }
    , [n]),
    b.useEffect( () => {
        !n && !u.size && r && r()
    }
    , [n]),
    e = d.jsx(lM, {
        pop: o === "popLayout",
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: c,
        children: e
    }),
    d.jsx(Hl.Provider, {
        value: p,
        children: e
    })
}
;
function uM() {
    return new Map
}
function z1(e=!0) {
    const t = b.useContext(Hl);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = b.useId();
    b.useEffect( () => {
        if (e)
            return i(s)
    }
    , [e]);
    const o = b.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const oa = e => e.key || "";
function Fg(e) {
    const t = [];
    return b.Children.forEach(e, n => {
        b.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const dM = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1, anchorX: a="left", anchorY: l="top", root: c}) => {
    const [u,f] = z1(o)
      , h = b.useMemo( () => Fg(e), [e])
      , p = o && !u ? [] : h.map(oa)
      , x = b.useRef(!0)
      , y = b.useRef(h)
      , w = th( () => new Map)
      , g = b.useRef(new Set)
      , [m,v] = b.useState(h)
      , [S,C] = b.useState(h);
    pw( () => {
        x.current = !1,
        y.current = h;
        for (let k = 0; k < S.length; k++) {
            const A = oa(S[k]);
            p.includes(A) ? (w.delete(A),
            g.current.delete(A)) : w.get(A) !== !0 && w.set(A, !1)
        }
    }
    , [S, p.length, p.join("-")]);
    const T = [];
    if (h !== m) {
        let k = [...h];
        for (let A = 0; A < S.length; A++) {
            const R = S[A]
              , z = oa(R);
            p.includes(z) || (k.splice(A, 0, R),
            T.push(R))
        }
        return s === "wait" && T.length && (k = T),
        C(Fg(k)),
        v(h),
        null
    }
    const {forceRender: E} = b.useContext(eh);
    return d.jsx(d.Fragment, {
        children: S.map(k => {
            const A = oa(k)
              , R = o && !u ? !1 : h === S || p.includes(A)
              , z = () => {
                if (g.current.has(A))
                    return;
                if (g.current.add(A),
                w.has(A))
                    w.set(A, !0);
                else
                    return;
                let I = !0;
                w.forEach(K => {
                    K || (I = !1)
                }
                ),
                I && (E == null || E(),
                C(y.current),
                o && (f == null || f()),
                r && r())
            }
            ;
            return d.jsx(cM, {
                isPresent: R,
                initial: !x.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: i,
                mode: s,
                root: c,
                onExitComplete: R ? void 0 : z,
                anchorX: a,
                anchorY: l,
                children: k
            }, A)
        }
        )
    })
}
  , B1 = b.createContext({
    strict: !1
})
  , _g = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
};
let Vg = !1;
function fM() {
    if (Vg)
        return;
    const e = {};
    for (const t in _g)
        e[t] = {
            isEnabled: n => _g[t].some(r => !!n[r])
        };
    g1(e),
    Vg = !0
}
function $1() {
    return fM(),
    XA()
}
function hM(e) {
    const t = $1();
    for (const n in e)
        t[n] = {
            ...t[n],
            ...e[n]
        };
    g1(t)
}
const pM = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function ml(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || pM.has(e)
}
let U1 = e => !ml(e);
function mM(e) {
    typeof e == "function" && (U1 = t => t.startsWith("on") ? !ml(t) : e(t))
}
try {
    mM(require("@emotion/is-prop-valid").default)
} catch {}
function gM(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (U1(i) || n === !0 && ml(i) || !t && !ml(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
const Yl = b.createContext({});
function yM(e, t) {
    if (ql(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || po(n) ? n : void 0,
            animate: po(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function vM(e) {
    const {initial: t, animate: n} = yM(e, b.useContext(Yl));
    return b.useMemo( () => ({
        initial: t,
        animate: n
    }), [zg(t), zg(n)])
}
function zg(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Nh = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function W1(e, t, n) {
    for (const r in t)
        !Ue(t[r]) && !C1(r, n) && (e[r] = t[r])
}
function xM({transformTemplate: e}, t) {
    return b.useMemo( () => {
        const n = Nh();
        return Eh(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function wM(e, t) {
    const n = e.style || {}
      , r = {};
    return W1(r, n, e),
    Object.assign(r, xM(e, t)),
    r
}
function bM(e, t) {
    const n = {}
      , r = wM(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
const H1 = () => ({
    ...Nh(),
    attrs: {}
});
function SM(e, t, n, r) {
    const i = b.useMemo( () => {
        const s = H1();
        return T1(s, t, k1(r), e.transformTemplate, e.style),
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
        W1(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
const CM = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function jh(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(CM.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function TM(e, t, n, {latestValues: r}, i, s=!1, o) {
    const l = (o ?? jh(e) ? SM : bM)(t, r, i, e)
      , c = gM(t, typeof e == "string", s)
      , u = e !== b.Fragment ? {
        ...c,
        ...l,
        ref: n
    } : {}
      , {children: f} = t
      , h = b.useMemo( () => Ue(f) ? f.get() : f, [f]);
    return b.createElement(e, {
        ...u,
        children: h
    })
}
function EM({scrapeMotionValuesFromProps: e, createRenderState: t}, n, r, i) {
    return {
        latestValues: kM(n, r, i, e),
        renderState: t()
    }
}
function kM(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const h in s)
        i[h] = Na(s[h]);
    let {initial: o, animate: a} = e;
    const l = ql(e)
      , c = p1(e);
    t && c && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    a === void 0 && (a = t.animate));
    let u = n ? n.initial === !1 : !1;
    u = u || o === !1;
    const f = u ? a : o;
    if (f && typeof f != "boolean" && !Gl(f)) {
        const h = Array.isArray(f) ? f : [f];
        for (let p = 0; p < h.length; p++) {
            const x = yh(e, h[p]);
            if (x) {
                const {transitionEnd: y, transition: w, ...g} = x;
                for (const m in g) {
                    let v = g[m];
                    if (Array.isArray(v)) {
                        const S = u ? v.length - 1 : 0;
                        v = v[S]
                    }
                    v !== null && (i[m] = v)
                }
                for (const m in y)
                    i[m] = y[m]
            }
        }
    }
    return i
}
const K1 = e => (t, n) => {
    const r = b.useContext(Yl)
      , i = b.useContext(Hl)
      , s = () => EM(e, t, r, i);
    return n ? s() : th(s)
}
  , PM = K1({
    scrapeMotionValuesFromProps: kh,
    createRenderState: Nh
})
  , NM = K1({
    scrapeMotionValuesFromProps: P1,
    createRenderState: H1
})
  , jM = Symbol.for("motionComponentSymbol");
function AM(e, t, n) {
    const r = b.useRef(n);
    b.useInsertionEffect( () => {
        r.current = n
    }
    );
    const i = b.useRef(null);
    return b.useCallback(s => {
        var a;
        s && ((a = e.onMount) == null || a.call(e, s)),
        t && (s ? t.mount(s) : t.unmount());
        const o = r.current;
        if (typeof o == "function")
            if (s) {
                const l = o(s);
                typeof l == "function" && (i.current = l)
            } else
                i.current ? (i.current(),
                i.current = null) : o(s);
        else
            o && (o.current = s)
    }
    , [t])
}
const G1 = b.createContext({});
function ii(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function RM(e, t, n, r, i, s) {
    var v, S;
    const {visualElement: o} = b.useContext(Yl)
      , a = b.useContext(B1)
      , l = b.useContext(Hl)
      , c = b.useContext(Ph)
      , u = c.reducedMotion
      , f = c.skipAnimations
      , h = b.useRef(null)
      , p = b.useRef(!1);
    r = r || a.renderer,
    !h.current && r && (h.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: l,
        blockInitialAnimation: l ? l.initial === !1 : !1,
        reducedMotionConfig: u,
        skipAnimations: f,
        isSVG: s
    }),
    p.current && h.current && (h.current.manuallyAnimateOnMount = !0));
    const x = h.current
      , y = b.useContext(G1);
    x && !x.projection && i && (x.type === "html" || x.type === "svg") && MM(h.current, n, i, y);
    const w = b.useRef(!1);
    b.useInsertionEffect( () => {
        x && w.current && x.update(n, l)
    }
    );
    const g = n[t1]
      , m = b.useRef(!!g && !((v = window.MotionHandoffIsComplete) != null && v.call(window, g)) && ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, g)));
    return pw( () => {
        p.current = !0,
        x && (w.current = !0,
        window.MotionIsMounted = !0,
        x.updateFeatures(),
        x.scheduleRenderMicrotask(),
        m.current && x.animationState && x.animationState.animateChanges())
    }
    ),
    b.useEffect( () => {
        x && (!m.current && x.animationState && x.animationState.animateChanges(),
        m.current && (queueMicrotask( () => {
            var C;
            (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, g)
        }
        ),
        m.current = !1),
        x.enteringChildren = void 0)
    }
    ),
    x
}
function MM(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: c, layoutCrossfade: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : q1(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || a && ii(a),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        crossfade: u,
        layoutScroll: l,
        layoutRoot: c
    })
}
function q1(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : q1(e.parent)
}
function Yc(e, {forwardMotionProps: t=!1, type: n}={}, r, i) {
    r && hM(r);
    const s = n ? n === "svg" : jh(e)
      , o = s ? NM : PM;
    function a(c, u) {
        let f;
        const h = {
            ...b.useContext(Ph),
            ...c,
            layoutId: DM(c)
        }
          , {isStatic: p} = h
          , x = vM(c)
          , y = o(c, p);
        if (!p && hw) {
            LM();
            const w = OM(h);
            f = w.MeasureLayout,
            x.visualElement = RM(e, y, h, i, w.ProjectionNode, s)
        }
        return d.jsxs(Yl.Provider, {
            value: x,
            children: [f && x.visualElement ? d.jsx(f, {
                visualElement: x.visualElement,
                ...h
            }) : null, TM(e, c, AM(y, x.visualElement, u), y, p, t, s)]
        })
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = b.forwardRef(a);
    return l[jM] = e,
    l
}
function DM({layoutId: e}) {
    const t = b.useContext(eh).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function LM(e, t) {
    b.useContext(B1).strict
}
function OM(e) {
    const t = $1()
      , {drag: n, layout: r} = t;
    if (!n && !r)
        return {};
    const i = {
        ...n,
        ...r
    };
    return {
        MeasureLayout: n != null && n.isEnabled(e) || r != null && r.isEnabled(e) ? i.MeasureLayout : void 0,
        ProjectionNode: i.ProjectionNode
    }
}
function IM(e, t) {
    if (typeof Proxy > "u")
        return Yc;
    const n = new Map
      , r = (s, o) => Yc(s, o, e, t)
      , i = (s, o) => r(s, o);
    return new Proxy(i,{
        get: (s, o) => o === "create" ? r : (n.has(o) || n.set(o, Yc(o, void 0, e, t)),
        n.get(o))
    })
}
const FM = (e, t) => t.isSVG ?? jh(e) ? new pR(t) : new lR(t,{
    allowProjection: e !== b.Fragment
});
class _M extends vr {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = xR(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Gl(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) == null || t.call(this)
    }
}
let VM = 0;
class zM extends vr {
    constructor() {
        super(...arguments),
        this.id = VM++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => {
            n(this.id)
        }
        )
    }
    mount() {
        const {register: t, onExitComplete: n} = this.node.presenceContext || {};
        n && n(this.id),
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const BM = {
    animation: {
        Feature: _M
    },
    exit: {
        Feature: zM
    }
};
function Ro(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const $M = e => t => bh(t) && e(t, Ro(t));
function zs(e, t, n, r) {
    return mo(e, t, $M(n), r)
}
const Y1 = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Bg = (e, t) => Math.abs(e - t);
function UM(e, t) {
    const n = Bg(e.x, t.x)
      , r = Bg(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
const $g = new Set(["auto", "scroll"]);
class Q1 {
    constructor(t, n, {transformPagePoint: r, contextWindow: i=window, dragSnapToOrigin: s=!1, distanceThreshold: o=3, element: a}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.scrollPositions = new Map,
        this.removeScrollListeners = null,
        this.onElementScroll = p => {
            this.handleScroll(p.target)
        }
        ,
        this.onWindowScroll = () => {
            this.handleScroll(window)
        }
        ,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const p = Xc(this.lastMoveEventInfo, this.history)
              , x = this.startEvent !== null
              , y = UM(p.offset, {
                x: 0,
                y: 0
            }) >= this.distanceThreshold;
            if (!x && !y)
                return;
            const {point: w} = p
              , {timestamp: g} = Le;
            this.history.push({
                ...w,
                timestamp: g
            });
            const {onStart: m, onMove: v} = this.handlers;
            x || (m && m(this.lastMoveEvent, p),
            this.startEvent = this.lastMoveEvent),
            v && v(this.lastMoveEvent, p)
        }
        ,
        this.handlePointerMove = (p, x) => {
            this.lastMoveEvent = p,
            this.lastMoveEventInfo = Qc(x, this.transformPagePoint),
            se.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (p, x) => {
            this.end();
            const {onEnd: y, onSessionEnd: w, resumeAnimation: g} = this.handlers;
            if ((this.dragSnapToOrigin || !this.startEvent) && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const m = Xc(p.type === "pointercancel" ? this.lastMoveEventInfo : Qc(x, this.transformPagePoint), this.history);
            this.startEvent && y && y(p, m),
            w && w(p, m)
        }
        ,
        !bh(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.distanceThreshold = o,
        this.contextWindow = i || window;
        const l = Ro(t)
          , c = Qc(l, this.transformPagePoint)
          , {point: u} = c
          , {timestamp: f} = Le;
        this.history = [{
            ...u,
            timestamp: f
        }];
        const {onSessionStart: h} = n;
        h && h(t, Xc(c, this.history)),
        this.removeListeners = No(zs(this.contextWindow, "pointermove", this.handlePointerMove), zs(this.contextWindow, "pointerup", this.handlePointerUp), zs(this.contextWindow, "pointercancel", this.handlePointerUp)),
        a && this.startScrollTracking(a)
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            ($g.has(r.overflowX) || $g.has(r.overflowY)) && this.scrollPositions.set(n, {
                x: n.scrollLeft,
                y: n.scrollTop
            }),
            n = n.parentElement
        }
        this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY
        }),
        window.addEventListener("scroll", this.onElementScroll, {
            capture: !0
        }),
        window.addEventListener("scroll", this.onWindowScroll),
        this.removeScrollListeners = () => {
            window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0
            }),
            window.removeEventListener("scroll", this.onWindowScroll)
        }
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n)
            return;
        const r = t === window
          , i = r ? {
            x: window.scrollX,
            y: window.scrollY
        } : {
            x: t.scrollLeft,
            y: t.scrollTop
        }
          , s = {
            x: i.x - n.x,
            y: i.y - n.y
        };
        s.x === 0 && s.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += s.x,
        this.lastMoveEventInfo.point.y += s.y) : this.history.length > 0 && (this.history[0].x -= s.x,
        this.history[0].y -= s.y),
        this.scrollPositions.set(t, i),
        se.update(this.updatePoint, !0))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        this.removeScrollListeners && this.removeScrollListeners(),
        this.scrollPositions.clear(),
        hr(this.updatePoint)
    }
}
function Qc(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Ug(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Xc({point: e}, t) {
    return {
        point: e,
        delta: Ug(e, X1(t)),
        offset: Ug(e, WM(t)),
        velocity: HM(t, .1)
    }
}
function WM(e) {
    return e[0]
}
function X1(e) {
    return e[e.length - 1]
}
function HM(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = X1(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > Et(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    r === e[0] && e.length > 2 && i.timestamp - r.timestamp > Et(t) * 2 && (r = e[1]);
    const s = St(i.timestamp - r.timestamp);
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
function KM(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? me(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? me(n, e, r.max) : Math.min(e, n)),
    e
}
function Wg(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function GM(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: Wg(e.x, n, i),
        y: Wg(e.y, t, r)
    }
}
function Hg(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function qM(e, t) {
    return {
        x: Hg(e.x, t.x),
        y: Hg(e.y, t.y)
    }
}
function YM(e, t) {
    let n = .5;
    const r = Ye(e)
      , i = Ye(t);
    return i > r ? n = uo(t.min, t.max - r, e.min) : r > i && (n = uo(e.min, e.max - i, t.min)),
    ln(0, 1, n)
}
function QM(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Rd = .35;
function XM(e=Rd) {
    return e === !1 ? e = 0 : e === !0 && (e = Rd),
    {
        x: Kg(e, "left", "right"),
        y: Kg(e, "top", "bottom")
    }
}
function Kg(e, t, n) {
    return {
        min: Gg(e, t),
        max: Gg(e, n)
    }
}
function Gg(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const ZM = new WeakMap;
class JM {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ke(),
        this.latestPointerEvent = null,
        this.latestPanInfo = null,
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1, distanceThreshold: r}={}) {
        const {presenceContext: i} = this.visualElement;
        if (i && i.isPresent === !1)
            return;
        const s = f => {
            n && this.snapToCursor(Ro(f).point),
            this.stopAnimation()
        }
          , o = (f, h) => {
            const {drag: p, dragPropagation: x, onDragStart: y} = this.getProps();
            if (p && !x && (this.openDragLock && this.openDragLock(),
            this.openDragLock = PA(p),
            !this.openDragLock))
                return;
            this.latestPointerEvent = f,
            this.latestPanInfo = h,
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Xt(g => {
                let m = this.getAxisMotionValue(g).get() || 0;
                if (sn.test(m)) {
                    const {projection: v} = this.visualElement;
                    if (v && v.layout) {
                        const S = v.layout.layoutBox[g];
                        S && (m = Ye(S) * (parseFloat(m) / 100))
                    }
                }
                this.originPoint[g] = m
            }
            ),
            y && se.update( () => y(f, h), !1, !0),
            Sd(this.visualElement, "transform");
            const {animationState: w} = this.visualElement;
            w && w.setActive("whileDrag", !0)
        }
          , a = (f, h) => {
            this.latestPointerEvent = f,
            this.latestPanInfo = h;
            const {dragPropagation: p, dragDirectionLock: x, onDirectionLock: y, onDrag: w} = this.getProps();
            if (!p && !this.openDragLock)
                return;
            const {offset: g} = h;
            if (x && this.currentDirection === null) {
                this.currentDirection = tD(g),
                this.currentDirection !== null && y && y(this.currentDirection);
                return
            }
            this.updateAxis("x", h.point, g),
            this.updateAxis("y", h.point, g),
            this.visualElement.render(),
            w && se.update( () => w(f, h), !1, !0)
        }
          , l = (f, h) => {
            this.latestPointerEvent = f,
            this.latestPanInfo = h,
            this.stop(f, h),
            this.latestPointerEvent = null,
            this.latestPanInfo = null
        }
          , c = () => {
            const {dragSnapToOrigin: f} = this.getProps();
            (f || this.constraints) && this.startAnimation({
                x: 0,
                y: 0
            })
        }
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Q1(t,{
            onSessionStart: s,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: c
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            distanceThreshold: r,
            contextWindow: Y1(this.visualElement),
            element: this.visualElement.current
        })
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent
          , i = n || this.latestPanInfo
          , s = this.isDragging;
        if (this.cancel(),
        !s || !i || !r)
            return;
        const {velocity: o} = i;
        this.startAnimation(o);
        const {onDragEnd: a} = this.getProps();
        a && se.postRender( () => a(r, i))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.endPanSession();
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    endPanSession() {
        this.panSession && this.panSession.end(),
        this.panSession = void 0
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !aa(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = KM(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var s;
        const {dragConstraints: t, dragElastic: n} = this.getProps()
          , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (s = this.visualElement.projection) == null ? void 0 : s.layout
          , i = this.constraints;
        t && ii(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = GM(r.layoutBox, t) : this.constraints = !1,
        this.elastic = XM(n),
        i !== this.constraints && !ii(t) && r && this.constraints && !this.hasMutatedConstraints && Xt(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = QM(r.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !ii(t))
            return !1;
        const r = t.current;
        qi(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
        const {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = nR(r, i.root, this.visualElement.getTransformPagePoint());
        let o = qM(i.layout.layoutBox, s);
        if (n) {
            const a = n(JA(o));
            this.hasMutatedConstraints = !!a,
            a && (o = v1(a))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: a} = this.getProps()
          , l = this.constraints || {}
          , c = Xt(u => {
            if (!aa(u, n, this.currentDirection))
                return;
            let f = l && l[u] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const h = i ? 200 : 1e6
              , p = i ? 40 : 1e7
              , x = {
                type: "inertia",
                velocity: r ? t[u] : 0,
                bounceStiffness: h,
                bounceDamping: p,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...f
            };
            return this.startAxisValueAnimation(u, x)
        }
        );
        return Promise.all(c).then(a)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Sd(this.visualElement, t),
        r.start(gh(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Xt(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Xt(n => {
            const {drag: r} = this.getProps();
            if (!aa(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: a} = i.layout.layoutBox[n]
                  , l = s.get() || 0;
                s.set(t[n] - me(o, a, .5) + l)
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!ii(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Xt(o => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                i[o] = YM({
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
        this.constraints = !1,
        this.resolveConstraints(),
        Xt(o => {
            if (!aa(o, t, null))
                return;
            const a = this.getAxisMotionValue(o)
              , {min: l, max: c} = this.constraints[o];
            a.set(me(l, c, i[o]))
        }
        ),
        this.visualElement.render()
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        ZM.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = zs(t, "pointerdown", c => {
            const {drag: u, dragListener: f=!0} = this.getProps()
              , h = c.target
              , p = h !== t && DA(h);
            u && f && !p && this.start(c)
        }
        );
        let r;
        const i = () => {
            const {dragConstraints: c} = this.getProps();
            ii(c) && c.current && (this.constraints = this.resolveRefConstraints(),
            r || (r = eD(t, c.current, () => this.scalePositionWithinConstraints())))
        }
          , {projection: s} = this.visualElement
          , o = s.addEventListener("measure", i);
        s && !s.layout && (s.root && s.root.updateScroll(),
        s.updateLayout()),
        se.read(i);
        const a = mo(window, "resize", () => this.scalePositionWithinConstraints())
          , l = s.addEventListener("didUpdate", ({delta: c, hasLayoutChanged: u}) => {
            this.isDragging && u && (Xt(f => {
                const h = this.getAxisMotionValue(f);
                h && (this.originPoint[f] += c[f].translate,
                h.set(h.get() + c[f].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            a(),
            n(),
            o(),
            l && l(),
            r && r()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=Rd, dragMomentum: a=!0} = t;
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
function qg(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return
        }
        e()
    }
}
function eD(e, t, n) {
    const r = tg(e, qg(n))
      , i = tg(t, qg(n));
    return () => {
        r(),
        i()
    }
}
function aa(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function tD(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class nD extends vr {
    constructor(t) {
        super(t),
        this.removeGroupControls = Tt,
        this.removeListeners = Tt,
        this.controls = new JM(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Tt
    }
    update() {
        const {dragControls: t} = this.node.getProps()
          , {dragControls: n} = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(),
        t && (this.removeGroupControls = t.subscribe(this.controls)))
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners(),
        this.controls.isDragging || this.controls.endPanSession()
    }
}
const Zc = e => (t, n) => {
    e && se.update( () => e(t, n), !1, !0)
}
;
class rD extends vr {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Tt
    }
    onPointerDown(t) {
        this.session = new Q1(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Y1(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Zc(t),
            onStart: Zc(n),
            onMove: Zc(r),
            onEnd: (s, o) => {
                delete this.session,
                i && se.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = zs(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
let Jc = !1;
class iD extends b.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        Jc && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove()
        })),
        ja.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , {projection: o} = r;
        return o && (o.isPresent = s,
        t.layoutDependency !== n && o.setOptions({
            ...o.options,
            layoutDependency: n
        }),
        Jc = !0,
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || se.postRender( () => {
            const a = o.getStack();
            (!a || !a.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        wh.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        Jc = !0,
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
function Z1(e) {
    const [t,n] = z1()
      , r = b.useContext(eh);
    return d.jsx(iD, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: b.useContext(G1),
        isPresent: t,
        safeToRemove: n
    })
}
const sD = {
    pan: {
        Feature: rD
    },
    drag: {
        Feature: nD,
        ProjectionNode: V1,
        MeasureLayout: Z1
    }
};
function Yg(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && se.postRender( () => s(t, Ro(t)))
}
class oD extends vr {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = jA(t, (n, r) => (Yg(this.node, r, "Start"),
        i => Yg(this.node, i, "End"))))
    }
    unmount() {}
}
class aD extends vr {
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
        this.unmount = No(mo(this.node.current, "focus", () => this.onFocus()), mo(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function Qg(e, t, n) {
    const {props: r} = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled)
        return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && se.postRender( () => s(t, Ro(t)))
}
class lD extends vr {
    mount() {
        const {current: t} = this.node;
        if (!t)
            return;
        const {globalTapTarget: n, propagate: r} = this.node.props;
        this.unmount = OA(t, (i, s) => (Qg(this.node, s, "Start"),
        (o, {success: a}) => Qg(this.node, o, a ? "End" : "Cancel")), {
            useGlobalTarget: n,
            stopPropagation: (r == null ? void 0 : r.tap) === !1
        })
    }
    unmount() {}
}
const Md = new WeakMap
  , eu = new WeakMap
  , cD = e => {
    const t = Md.get(e.target);
    t && t(e)
}
  , uD = e => {
    e.forEach(cD)
}
;
function dD({root: e, ...t}) {
    const n = e || document;
    eu.has(n) || eu.set(n, {});
    const r = eu.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(uD,{
        root: e,
        ...t
    })),
    r[i]
}
function fD(e, t, n) {
    const r = dD(t);
    return Md.set(e, n),
    r.observe(e),
    () => {
        Md.delete(e),
        r.unobserve(e)
    }
}
const hD = {
    some: 0,
    all: 1
};
class pD extends vr {
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
            threshold: typeof i == "number" ? i : hD[i]
        }
          , a = l => {
            const {isIntersecting: c} = l;
            if (this.isInView === c || (this.isInView = c,
            s && !c && this.hasEnteredView))
                return;
            c && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", c);
            const {onViewportEnter: u, onViewportLeave: f} = this.node.getProps()
              , h = c ? u : f;
            h && h(l)
        }
        ;
        return fD(this.node.current, o, a)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(mD(t, n)) && this.startObserver()
    }
    unmount() {}
}
function mD({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const gD = {
    inView: {
        Feature: pD
    },
    tap: {
        Feature: lD
    },
    focus: {
        Feature: aD
    },
    hover: {
        Feature: oD
    }
}
  , yD = {
    layout: {
        ProjectionNode: V1,
        MeasureLayout: Z1
    }
}
  , vD = {
    ...BM,
    ...gD,
    ...sD,
    ...yD
}
  , Z = IM(vD, FM)
  , xD = tx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            hero: "bg-accent text-accent-foreground font-semibold hover:brightness-110 shadow-lg hover:shadow-xl",
            "hero-outline": "border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-md px-8 text-base",
            xl: "h-14 rounded-lg px-10 text-lg",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , je = b.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...i}, s) => {
    const o = r ? lT : "button";
    return d.jsx(o, {
        className: mt(xD({
            variant: t,
            size: n,
            className: e
        })),
        ref: s,
        ...i
    })
}
);
je.displayName = "Button";
const Xg = [{
    label: "Home",
    path: "/"
}, {
    label: "About",
    path: "/about"
}, {
    label: "Services",
    path: "/services"
}, {
    label: "Portfolio",
    path: "/portfolio"
}, {
    label: "Blog",
    path: "/blog"
}, {
    label: "Careers",
    path: "/careers"
}, {
    label: "Contact",
    path: "/contact"
}]
  , wD = () => {
    const [e,t] = b.useState(!1)
      , n = is();
    return d.jsxs("header", {
        className: "sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border",
        children: [d.jsxs("div", {
            className: "container mx-auto flex items-center justify-between h-16 px-4 lg:px-8",
            children: [d.jsxs(fe, {
                to: "/",
                className: "flex items-center gap-2",
                children: [d.jsx("div", {
                    className: "w-8 h-8 rounded-md bg-accent flex items-center justify-center",
                    children: d.jsx("span", {
                        className: "font-bold text-accent-foreground text-sm",
                        children: "N"
                    })
                }), d.jsx("span", {
                    className: "text-xl font-bold tracking-tight text-foreground",
                    style: {
                        fontFamily: "var(--font-heading)"
                    },
                    children: "Nexus"
                })]
            }), d.jsx("nav", {
                className: "hidden lg:flex items-center gap-1",
                children: Xg.map(r => d.jsx(fe, {
                    to: r.path,
                    className: `px-3 py-2 text-sm font-medium rounded-md transition-colors ${n.pathname === r.path ? "text-accent-foreground bg-accent/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                    children: r.label
                }, r.path))
            }), d.jsxs("div", {
                className: "hidden lg:flex items-center gap-3",
                children: [d.jsx(je, {
                    variant: "ghost",
                    size: "sm",
                    asChild: !0,
                    children: d.jsx(fe, {
                        to: "/faq",
                        children: "FAQ"
                    })
                }), d.jsx(je, {
                    size: "sm",
                    asChild: !0,
                    children: d.jsx(fe, {
                        to: "/contact",
                        children: "Get Started"
                    })
                })]
            }), d.jsx("button", {
                className: "lg:hidden p-2 text-foreground",
                onClick: () => t(!e),
                children: e ? d.jsx(lx, {
                    size: 24
                }) : d.jsx(aE, {
                    size: 24
                })
            })]
        }), d.jsx(dM, {
            children: e && d.jsx(Z.div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: "auto",
                    opacity: 1
                },
                exit: {
                    height: 0,
                    opacity: 0
                },
                className: "lg:hidden overflow-hidden border-b border-border bg-card",
                children: d.jsxs("nav", {
                    className: "flex flex-col p-4 gap-1",
                    children: [Xg.map(r => d.jsx(fe, {
                        to: r.path,
                        onClick: () => t(!1),
                        className: `px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${n.pathname === r.path ? "text-accent-foreground bg-accent/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`,
                        children: r.label
                    }, r.path)), d.jsx("div", {
                        className: "mt-3 pt-3 border-t border-border",
                        children: d.jsx(je, {
                            className: "w-full",
                            size: "sm",
                            asChild: !0,
                            children: d.jsx(fe, {
                                to: "/contact",
                                onClick: () => t(!1),
                                children: "Get Started"
                            })
                        })
                    })]
                })
            })
        })]
    })
}
  , bD = {
    Company: [{
        label: "About Us",
        path: "/about"
    }, {
        label: "Careers",
        path: "/careers"
    }, {
        label: "Contact",
        path: "/contact"
    }, {
        label: "FAQ",
        path: "/faq"
    }],
    Services: [{
        label: "Strategy Consulting",
        path: "/services/strategy"
    }, {
        label: "Digital Transformation",
        path: "/services/digital"
    }, {
        label: "Brand Development",
        path: "/services/brand"
    }, {
        label: "All Services",
        path: "/services"
    }],
    Resources: [{
        label: "Blog",
        path: "/blog"
    }, {
        label: "Case Studies",
        path: "/portfolio"
    }, {
        label: "Insights",
        path: "/blog"
    }]
}
  , SD = () => d.jsx("footer", {
    className: "bg-primary text-primary-foreground",
    children: d.jsxs("div", {
        className: "container mx-auto px-4 lg:px-8 py-16",
        children: [d.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10",
            children: [d.jsxs("div", {
                children: [d.jsxs("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [d.jsx("div", {
                        className: "w-8 h-8 rounded-md bg-accent flex items-center justify-center",
                        children: d.jsx("span", {
                            className: "font-bold text-accent-foreground text-sm",
                            children: "N"
                        })
                    }), d.jsx("span", {
                        className: "text-xl font-bold tracking-tight",
                        style: {
                            fontFamily: "var(--font-heading)"
                        },
                        children: "Nexus"
                    })]
                }), d.jsx("p", {
                    className: "text-primary-foreground/70 text-sm leading-relaxed max-w-xs",
                    children: "Driving business growth through strategic consulting and innovative digital solutions since 2010."
                })]
            }), Object.entries(bD).map( ([e,t]) => d.jsxs("div", {
                children: [d.jsx("h4", {
                    className: "font-semibold text-sm uppercase tracking-wider mb-4 text-primary-foreground/50",
                    children: e
                }), d.jsx("ul", {
                    className: "space-y-2.5",
                    children: t.map(n => d.jsx("li", {
                        children: d.jsxs(fe, {
                            to: n.path,
                            className: "text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1 group",
                            children: [n.label, d.jsx(ix, {
                                size: 12,
                                className: "opacity-0 group-hover:opacity-100 transition-opacity"
                            })]
                        })
                    }, n.label))
                })]
            }, e))]
        }), d.jsxs("div", {
            className: "mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4",
            children: [d.jsxs("p", {
                className: "text-xs text-primary-foreground/40",
                children: ["© ", new Date().getFullYear(), " Nexus Corp. All rights reserved."]
            }), d.jsxs("div", {
                className: "flex gap-6",
                children: [d.jsx("a", {
                    href: "#",
                    className: "text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors",
                    children: "Privacy"
                }), d.jsx("a", {
                    href: "#",
                    className: "text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors",
                    children: "Terms"
                }), d.jsx("a", {
                    href: "#",
                    className: "text-xs text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors",
                    children: "Cookies"
                })]
            })]
        })]
    })
})
  , Nt = ({children: e}) => d.jsxs("div", {
    className: "min-h-screen flex flex-col",
    children: [d.jsx(wD, {}), d.jsx("main", {
        className: "flex-1",
        children: e
    }), d.jsx(SD, {})]
})
  , go = ({label: e, title: t, description: n, center: r=!0}) => d.jsxs(Z.div, {
    initial: {
        opacity: 0,
        y: 20
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0,
        margin: "-50px"
    },
    transition: {
        duration: .5
    },
    className: `mb-12 ${r ? "text-center" : ""}`,
    children: [e && d.jsx("span", {
        className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3",
        children: e
    }), d.jsx("h2", {
        className: "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight",
        children: t
    }), n && d.jsx("p", {
        className: "mt-4 text-muted-foreground max-w-2xl leading-relaxed text-lg mx-auto",
        children: n
    })]
})
  , CD = [{
    value: "500+",
    label: "Projects Delivered"
}, {
    value: "98%",
    label: "Client Satisfaction"
}, {
    value: "15+",
    label: "Years Experience"
}, {
    value: "40+",
    label: "Countries Served"
}]
  , TD = [{
    icon: Vf,
    title: "Strategy Consulting",
    desc: "Data-driven strategies that accelerate growth and maximize market position."
}, {
    icon: _f,
    title: "Risk Management",
    desc: "Comprehensive risk assessment and mitigation frameworks for enterprise stability."
}, {
    icon: Ff,
    title: "Innovation Lab",
    desc: "Cutting-edge R&D solutions that transform ideas into competitive advantages."
}, {
    icon: If,
    title: "Digital Transformation",
    desc: "End-to-end digital modernization for scalable, future-ready operations."
}, {
    icon: Lf,
    title: "Analytics & Insights",
    desc: "Advanced analytics platforms that turn data into actionable business intelligence."
}, {
    icon: zf,
    title: "Talent Advisory",
    desc: "Strategic talent acquisition and development programs for organizational excellence."
}]
  , ED = [{
    quote: "Nexus transformed our operations and doubled our efficiency within 18 months.",
    author: "Sarah Chen",
    role: "CEO, TechVista Inc."
}, {
    quote: "Their strategic insights gave us the confidence to enter three new markets successfully.",
    author: "Marcus Webb",
    role: "VP Strategy, GlobalEdge"
}, {
    quote: "The most professional consulting team we've ever worked with. Results speak for themselves.",
    author: "Elena Ruiz",
    role: "COO, Meridian Group"
}]
  , ni = {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0,
        margin: "-50px"
    },
    transition: {
        duration: .5
    }
}
  , kD = () => d.jsxs(Nt, {
    children: [d.jsxs("section", {
        className: "relative bg-hero-gradient text-primary-foreground overflow-hidden",
        children: [d.jsx("div", {
            className: "absolute inset-0",
            children: d.jsx("img", {
                src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
                alt: "Modern skyscraper",
                className: "w-full h-full object-cover opacity-10"
            })
        }), d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8 py-24 md:py-32 lg:py-40 relative z-10",
            children: d.jsxs(Z.div, {
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .7
                },
                className: "max-w-3xl",
                children: [d.jsx("span", {
                    className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-6",
                    children: "Strategic Consulting & Advisory"
                }), d.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6",
                    children: "Building the Future of Business Excellence"
                }), d.jsx("p", {
                    className: "text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 leading-relaxed",
                    children: "We partner with forward-thinking organizations to drive measurable growth, navigate complexity, and unlock new possibilities."
                }), d.jsxs("div", {
                    className: "flex flex-wrap gap-4",
                    children: [d.jsx(je, {
                        variant: "hero",
                        size: "xl",
                        asChild: !0,
                        children: d.jsxs(fe, {
                            to: "/contact",
                            children: ["Start a Project ", d.jsx(ct, {
                                size: 18
                            })]
                        })
                    }), d.jsx(je, {
                        variant: "hero-outline",
                        size: "xl",
                        asChild: !0,
                        children: d.jsx(fe, {
                            to: "/portfolio",
                            children: "View Our Work"
                        })
                    })]
                })]
            })
        })]
    }), d.jsx("section", {
        className: "border-b border-border",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsx("div", {
                className: "grid grid-cols-2 lg:grid-cols-4",
                children: CD.map( (e, t) => d.jsxs(Z.div, {
                    ...ni,
                    transition: {
                        duration: .5,
                        delay: t * .1
                    },
                    className: "py-10 px-6 text-center border-r last:border-r-0 border-border",
                    children: [d.jsx("div", {
                        className: "text-3xl md:text-4xl font-bold text-foreground mb-1",
                        children: e.value
                    }), d.jsx("div", {
                        className: "text-sm text-muted-foreground",
                        children: e.label
                    })]
                }, e.label))
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [d.jsx(go, {
                label: "What We Do",
                title: "Services That Drive Results",
                description: "Comprehensive consulting solutions tailored to your unique business challenges and growth objectives."
            }), d.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: TD.map( (e, t) => d.jsxs(Z.div, {
                    ...ni,
                    transition: {
                        duration: .4,
                        delay: t * .08
                    },
                    className: "group p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1",
                    children: [d.jsx("div", {
                        className: "w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors",
                        children: d.jsx(e.icon, {
                            size: 22,
                            className: "text-accent"
                        })
                    }), d.jsx("h3", {
                        className: "text-lg font-semibold text-foreground mb-2",
                        children: e.title
                    }), d.jsx("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: e.desc
                    })]
                }, e.title))
            }), d.jsx("div", {
                className: "text-center mt-10",
                children: d.jsx(je, {
                    variant: "outline",
                    size: "lg",
                    asChild: !0,
                    children: d.jsxs(fe, {
                        to: "/services",
                        children: ["Explore All Services ", d.jsx(ct, {
                            size: 16
                        })]
                    })
                })
            })]
        })
    }), d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8 text-center",
            children: d.jsxs(Z.div, {
                ...ni,
                children: [d.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "Ready to Transform Your Business?"
                }), d.jsx("p", {
                    className: "text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg",
                    children: "Let's discuss how we can help you achieve your strategic goals."
                }), d.jsx(je, {
                    variant: "hero",
                    size: "xl",
                    asChild: !0,
                    children: d.jsxs(fe, {
                        to: "/contact",
                        children: ["Get in Touch ", d.jsx(ct, {
                            size: 18
                        })]
                    })
                })]
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28 bg-section-gradient",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [d.jsx(go, {
                label: "Client Testimonials",
                title: "Trusted by Industry Leaders"
            }), d.jsx("div", {
                className: "grid md:grid-cols-3 gap-6",
                children: ED.map( (e, t) => d.jsxs(Z.div, {
                    ...ni,
                    transition: {
                        duration: .4,
                        delay: t * .1
                    },
                    className: "p-8 rounded-xl bg-card border border-border shadow-card",
                    children: [d.jsxs("p", {
                        className: "text-foreground leading-relaxed mb-6 italic",
                        children: ['"', e.quote, '"']
                    }), d.jsxs("div", {
                        children: [d.jsx("div", {
                            className: "font-semibold text-foreground text-sm",
                            children: e.author
                        }), d.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: e.role
                        })]
                    })]
                }, e.author))
            })]
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-16 items-center",
                children: [d.jsxs(Z.div, {
                    ...ni,
                    children: [d.jsx("span", {
                        className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3",
                        children: "Why Nexus"
                    }), d.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-foreground mb-6",
                        children: "A Partner You Can Trust"
                    }), d.jsx("p", {
                        className: "text-muted-foreground leading-relaxed mb-8",
                        children: "With over 15 years of experience across industries, we bring deep expertise, proven methodologies, and a relentless focus on delivering measurable outcomes."
                    }), d.jsx("ul", {
                        className: "space-y-4",
                        children: ["Proven track record with Fortune 500 companies", "Dedicated team of 200+ consultants globally", "Proprietary frameworks & methodologies", "End-to-end support from strategy to execution"].map(e => d.jsxs("li", {
                            className: "flex items-start gap-3",
                            children: [d.jsx(Of, {
                                size: 18,
                                className: "text-accent mt-0.5 shrink-0"
                            }), d.jsx("span", {
                                className: "text-sm text-foreground",
                                children: e
                            })]
                        }, e))
                    })]
                }), d.jsxs(Z.div, {
                    ...ni,
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    className: "relative",
                    children: [d.jsx("div", {
                        className: "aspect-[4/3] rounded-2xl overflow-hidden",
                        children: d.jsx("img", {
                            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
                            alt: "Team collaborating in modern office",
                            className: "w-full h-full object-cover",
                            loading: "lazy"
                        })
                    }), d.jsxs("div", {
                        className: "absolute -bottom-6 -left-6 bg-card rounded-xl p-5 shadow-elevated border border-border",
                        children: [d.jsx("div", {
                            className: "text-2xl font-bold text-foreground",
                            children: "4.9/5"
                        }), d.jsx("div", {
                            className: "text-xs text-muted-foreground",
                            children: "Client Rating"
                        })]
                    })]
                })]
            })
        })
    })]
})
  , la = {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0
    },
    transition: {
        duration: .5
    }
}
  , PD = [{
    icon: uE,
    title: "Our Mission",
    text: "To empower organizations with actionable strategies and innovative solutions that deliver sustainable growth and lasting competitive advantage."
}, {
    icon: iE,
    title: "Our Vision",
    text: "To be the world's most trusted advisory partner, shaping the future of business through excellence, integrity, and transformative thinking."
}, {
    icon: sE,
    title: "Our Values",
    text: "Integrity, innovation, collaboration, and an unwavering commitment to client success drive every decision we make."
}]
  , ND = [{
    name: "Alexandra Reid",
    role: "Chief Executive Officer",
    initials: "AR",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
}, {
    name: "James Nakamura",
    role: "Managing Partner",
    initials: "JN",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
}, {
    name: "Priya Sharma",
    role: "Head of Strategy",
    initials: "PS",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
}, {
    name: "David Okonkwo",
    role: "Chief Technology Officer",
    initials: "DO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
}, {
    name: "Maria Santos",
    role: "VP, Client Relations",
    initials: "MS",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
}, {
    name: "Thomas Fischer",
    role: "Director of Innovation",
    initials: "TF",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
}]
  , jD = () => d.jsxs(Nt, {
    children: [d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsxs(Z.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [d.jsx("span", {
                    className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4",
                    children: "About Us"
                }), d.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight",
                    children: "Shaping Business Since 2010"
                }), d.jsx("p", {
                    className: "mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed",
                    children: "Born from a passion for problem-solving, Nexus has grown into a global consultancy trusted by hundreds of organizations worldwide."
                })]
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-16 items-center",
                children: [d.jsxs(Z.div, {
                    ...la,
                    children: [d.jsx("span", {
                        className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-3",
                        children: "Our Story"
                    }), d.jsx("h2", {
                        className: "text-3xl md:text-4xl font-bold text-foreground mb-6",
                        children: "From Startup to Global Leader"
                    }), d.jsxs("div", {
                        className: "space-y-4 text-muted-foreground leading-relaxed",
                        children: [d.jsx("p", {
                            children: "Founded in 2010 by a group of industry veterans, Nexus began with a simple belief: businesses deserve advisory partners who are as invested in their success as they are."
                        }), d.jsx("p", {
                            children: "Over the years, we've expanded from a boutique consultancy to a global firm with offices in 12 countries, serving clients across technology, finance, healthcare, and manufacturing."
                        }), d.jsx("p", {
                            children: "Today, our team of 200+ professionals continues to push boundaries, combining deep industry knowledge with cutting-edge methodologies to deliver transformative results."
                        })]
                    })]
                }), d.jsx(Z.div, {
                    ...la,
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    children: d.jsxs("div", {
                        className: "aspect-[4/3] rounded-2xl overflow-hidden relative",
                        children: [d.jsx("img", {
                            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
                            alt: "Modern corporate office space",
                            className: "w-full h-full object-cover",
                            loading: "lazy"
                        }), d.jsx("div", {
                            className: "absolute inset-0 bg-primary/20"
                        })]
                    })
                })]
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28 bg-section-gradient",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsx("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: PD.map( (e, t) => d.jsxs(Z.div, {
                    ...la,
                    transition: {
                        duration: .4,
                        delay: t * .1
                    },
                    className: "p-8 rounded-xl bg-card border border-border shadow-card",
                    children: [d.jsx("div", {
                        className: "w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5",
                        children: d.jsx(e.icon, {
                            size: 22,
                            className: "text-accent"
                        })
                    }), d.jsx("h3", {
                        className: "text-xl font-semibold text-foreground mb-3",
                        children: e.title
                    }), d.jsx("p", {
                        className: "text-sm text-muted-foreground leading-relaxed",
                        children: e.text
                    })]
                }, e.title))
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [d.jsx(go, {
                label: "Leadership",
                title: "Meet Our Team",
                description: "Experienced leaders driving innovation and excellence across every engagement."
            }), d.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                children: ND.map( (e, t) => d.jsxs(Z.div, {
                    ...la,
                    transition: {
                        duration: .4,
                        delay: t * .08
                    },
                    className: "group p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300",
                    children: [d.jsx("div", {
                        className: "w-20 h-20 rounded-full overflow-hidden mb-4",
                        children: d.jsx("img", {
                            src: e.image,
                            alt: e.name,
                            className: "w-full h-full object-cover",
                            loading: "lazy"
                        })
                    }), d.jsx("h4", {
                        className: "font-semibold text-foreground",
                        children: e.name
                    }), d.jsx("p", {
                        className: "text-sm text-muted-foreground",
                        children: e.role
                    })]
                }, e.name))
            })]
        })
    })]
})
  , Zg = {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0
    },
    transition: {
        duration: .5
    }
}
  , AD = [{
    icon: Vf,
    title: "Strategy Consulting",
    slug: "strategy",
    desc: "Define winning strategies aligned with your vision and market dynamics. From market entry to growth acceleration, we build roadmaps that deliver.",
    features: ["Market Analysis", "Growth Strategy", "M&A Advisory", "Go-to-Market Planning"]
}, {
    icon: If,
    title: "Digital Transformation",
    slug: "digital",
    desc: "Modernize your technology stack, digitize processes, and build scalable digital platforms that drive efficiency and innovation.",
    features: ["Cloud Migration", "Process Automation", "Digital Platforms", "Change Management"]
}, {
    icon: Ff,
    title: "Innovation & R&D",
    slug: "innovation",
    desc: "Turn ideas into market-ready products with our structured innovation methodology and rapid prototyping capabilities.",
    features: ["Design Thinking", "Rapid Prototyping", "MVP Development", "Innovation Workshops"]
}, {
    icon: _f,
    title: "Risk & Compliance",
    slug: "risk",
    desc: "Navigate regulatory complexity with confidence through comprehensive risk frameworks and compliance solutions.",
    features: ["Risk Assessment", "Regulatory Compliance", "Cybersecurity", "Business Continuity"]
}, {
    icon: Lf,
    title: "Data & Analytics",
    slug: "analytics",
    desc: "Unlock the power of your data with advanced analytics, machine learning, and business intelligence solutions.",
    features: ["Data Strategy", "Predictive Analytics", "BI Dashboards", "Data Governance"]
}, {
    icon: zf,
    title: "Talent & Organization",
    slug: "talent",
    desc: "Build high-performing teams and organizations through strategic talent management and culture transformation.",
    features: ["Executive Search", "Org Design", "Leadership Development", "Culture Programs"]
}, {
    icon: ox,
    title: "Operations Excellence",
    slug: "operations",
    desc: "Optimize end-to-end operations for maximum efficiency, cost reduction, and quality improvement.",
    features: ["Process Optimization", "Supply Chain", "Lean Six Sigma", "Cost Reduction"]
}, {
    icon: cx,
    title: "Brand & Marketing",
    slug: "brand",
    desc: "Build powerful brands and marketing strategies that resonate with your audience and drive measurable growth.",
    features: ["Brand Strategy", "Content Marketing", "Digital Campaigns", "Market Research"]
}]
  , RD = () => d.jsxs(Nt, {
    children: [d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsxs(Z.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [d.jsx("span", {
                    className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4",
                    children: "Our Services"
                }), d.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight",
                    children: "Solutions That Drive Results"
                }), d.jsx("p", {
                    className: "mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed",
                    children: "Comprehensive consulting services designed to address your most critical business challenges."
                })]
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: AD.map( (e, t) => d.jsx(Z.div, {
                    ...Zg,
                    transition: {
                        duration: .4,
                        delay: t * .06
                    },
                    children: d.jsxs(fe, {
                        to: `/services/${e.slug}`,
                        className: "group block p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 h-full",
                        children: [d.jsxs("div", {
                            className: "flex items-start justify-between mb-5",
                            children: [d.jsx("div", {
                                className: "w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors",
                                children: d.jsx(e.icon, {
                                    size: 22,
                                    className: "text-accent"
                                })
                            }), d.jsx(ct, {
                                size: 18,
                                className: "text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all"
                            })]
                        }), d.jsx("h3", {
                            className: "text-xl font-semibold text-foreground mb-2",
                            children: e.title
                        }), d.jsx("p", {
                            className: "text-sm text-muted-foreground leading-relaxed mb-5",
                            children: e.desc
                        }), d.jsx("div", {
                            className: "flex flex-wrap gap-2",
                            children: e.features.map(n => d.jsx("span", {
                                className: "text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground",
                                children: n
                            }, n))
                        })]
                    })
                }, e.slug))
            })
        })
    }), d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8 text-center",
            children: d.jsxs(Z.div, {
                ...Zg,
                children: [d.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "Need a Custom Solution?"
                }), d.jsx("p", {
                    className: "text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg",
                    children: "Our team is ready to build a tailored approach for your specific challenges."
                }), d.jsx(je, {
                    variant: "hero",
                    size: "xl",
                    asChild: !0,
                    children: d.jsxs(fe, {
                        to: "/contact",
                        children: ["Schedule a Consultation ", d.jsx(ct, {
                            size: 18
                        })]
                    })
                })]
            })
        })
    })]
})
  , MD = {
    strategy: {
        icon: Vf,
        title: "Strategy Consulting",
        hero: "Define winning strategies that drive sustainable growth.",
        description: "Our strategy consulting practice helps organizations navigate complexity, identify opportunities, and build actionable roadmaps that deliver measurable results.",
        features: ["Competitive landscape analysis", "Growth strategy development", "Market entry planning", "M&A due diligence & integration", "Portfolio optimization", "Scenario planning & forecasting"],
        process: [{
            step: "Discovery",
            desc: "Deep-dive into your business, market, and competitive landscape."
        }, {
            step: "Analysis",
            desc: "Data-driven insights and strategic framework development."
        }, {
            step: "Strategy",
            desc: "Collaborative roadmap design with clear milestones."
        }, {
            step: "Execution",
            desc: "Hands-on support through implementation and beyond."
        }]
    },
    digital: {
        icon: If,
        title: "Digital Transformation",
        hero: "Modernize your business for the digital age.",
        description: "We guide organizations through every stage of digital transformation, from strategy to implementation, ensuring technology investments deliver real value.",
        features: ["Digital strategy & roadmapping", "Cloud infrastructure design", "Process automation & optimization", "Legacy system modernization", "Digital product development", "Change management & training"],
        process: [{
            step: "Assess",
            desc: "Evaluate current digital maturity and identify gaps."
        }, {
            step: "Design",
            desc: "Architect the target state and transformation roadmap."
        }, {
            step: "Build",
            desc: "Implement solutions with agile delivery methodology."
        }, {
            step: "Scale",
            desc: "Optimize, measure, and scale across the organization."
        }]
    },
    innovation: {
        icon: Ff,
        title: "Innovation & R&D",
        hero: "Transform ideas into market-ready solutions.",
        description: "Our innovation practice combines design thinking, rapid experimentation, and deep domain expertise to help you build products and services that customers love.",
        features: ["Innovation strategy & governance", "Design thinking workshops", "Rapid prototyping & MVP development", "Technology scouting & evaluation", "Innovation culture programs", "Patent & IP strategy"],
        process: [{
            step: "Ideate",
            desc: "Generate and prioritize high-potential ideas."
        }, {
            step: "Prototype",
            desc: "Build rapid prototypes to test assumptions."
        }, {
            step: "Validate",
            desc: "Test with real users and iterate based on feedback."
        }, {
            step: "Launch",
            desc: "Go to market with confidence and scale."
        }]
    },
    risk: {
        icon: _f,
        title: "Risk & Compliance",
        hero: "Navigate uncertainty with confidence.",
        description: "Our risk practice helps organizations identify, assess, and mitigate risks while ensuring compliance with evolving regulatory requirements.",
        features: ["Enterprise risk assessment", "Regulatory compliance programs", "Cybersecurity strategy", "Business continuity planning", "Internal audit optimization", "Third-party risk management"],
        process: [{
            step: "Identify",
            desc: "Map risk landscape and regulatory requirements."
        }, {
            step: "Assess",
            desc: "Quantify risks and prioritize mitigation efforts."
        }, {
            step: "Mitigate",
            desc: "Implement controls, policies, and procedures."
        }, {
            step: "Monitor",
            desc: "Continuous monitoring and reporting frameworks."
        }]
    },
    analytics: {
        icon: Lf,
        title: "Data & Analytics",
        hero: "Turn data into your competitive advantage.",
        description: "We help organizations build data-driven cultures with advanced analytics, machine learning, and business intelligence solutions that deliver actionable insights.",
        features: ["Data strategy & governance", "Advanced analytics & ML models", "BI dashboard development", "Data lake & warehouse design", "Real-time analytics platforms", "AI/ML proof of concepts"],
        process: [{
            step: "Strategize",
            desc: "Define data vision, governance, and architecture."
        }, {
            step: "Integrate",
            desc: "Consolidate data sources and build pipelines."
        }, {
            step: "Analyze",
            desc: "Develop models, dashboards, and insights."
        }, {
            step: "Operationalize",
            desc: "Embed analytics into business processes."
        }]
    },
    talent: {
        icon: zf,
        title: "Talent & Organization",
        hero: "Build the teams that build the future.",
        description: "Our talent practice helps organizations attract, develop, and retain top talent while building cultures that drive performance and innovation.",
        features: ["Executive search & recruitment", "Organization design & restructuring", "Leadership development programs", "Employee experience optimization", "Culture transformation", "Workforce planning & analytics"],
        process: [{
            step: "Diagnose",
            desc: "Assess organizational health and talent gaps."
        }, {
            step: "Design",
            desc: "Create target operating model and talent strategy."
        }, {
            step: "Develop",
            desc: "Build programs, processes, and capabilities."
        }, {
            step: "Sustain",
            desc: "Measure impact and drive continuous improvement."
        }]
    },
    operations: {
        icon: ox,
        title: "Operations Excellence",
        hero: "Optimize every aspect of your operations.",
        description: "We help organizations achieve operational excellence through process optimization, lean methodologies, and technology-enabled transformation.",
        features: ["Process mapping & optimization", "Supply chain transformation", "Lean Six Sigma programs", "Cost reduction initiatives", "Quality management systems", "Operational KPI frameworks"],
        process: [{
            step: "Map",
            desc: "Document current processes and identify bottlenecks."
        }, {
            step: "Optimize",
            desc: "Redesign processes for maximum efficiency."
        }, {
            step: "Implement",
            desc: "Deploy improvements with change management support."
        }, {
            step: "Measure",
            desc: "Track KPIs and drive continuous improvement."
        }]
    },
    brand: {
        icon: cx,
        title: "Brand & Marketing",
        hero: "Build brands that resonate and convert.",
        description: "Our brand practice helps organizations build compelling brand identities and marketing strategies that drive awareness, engagement, and growth.",
        features: ["Brand strategy & positioning", "Visual identity development", "Content strategy & creation", "Digital marketing campaigns", "Market research & segmentation", "Customer journey mapping"],
        process: [{
            step: "Research",
            desc: "Understand market, audience, and competition."
        }, {
            step: "Position",
            desc: "Define brand strategy and messaging framework."
        }, {
            step: "Create",
            desc: "Develop creative assets and campaigns."
        }, {
            step: "Launch",
            desc: "Execute, measure, and optimize performance."
        }]
    }
}
  , DD = () => {
    const {slug: e} = cw()
      , t = MD[e || ""];
    if (!t)
        return d.jsx(Nt, {
            children: d.jsxs("div", {
                className: "container mx-auto px-4 py-20 text-center",
                children: [d.jsx("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: "Service Not Found"
                }), d.jsx(je, {
                    asChild: !0,
                    children: d.jsx(fe, {
                        to: "/services",
                        children: "Back to Services"
                    })
                })]
            })
        });
    const n = t.icon;
    return d.jsxs(Nt, {
        children: [d.jsx("section", {
            className: "bg-hero-gradient text-primary-foreground py-20 md:py-28",
            children: d.jsx("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: d.jsxs(Z.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [d.jsxs(fe, {
                        to: "/services",
                        className: "inline-flex items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors",
                        children: [d.jsx(rx, {
                            size: 14
                        }), " All Services"]
                    }), d.jsxs("div", {
                        className: "flex items-center gap-4 mb-6",
                        children: [d.jsx("div", {
                            className: "w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center",
                            children: d.jsx(n, {
                                size: 28,
                                className: "text-accent"
                            })
                        }), d.jsx("h1", {
                            className: "text-4xl md:text-5xl font-bold",
                            children: t.title
                        })]
                    }), d.jsx("p", {
                        className: "text-xl text-primary-foreground/70 max-w-xl",
                        children: t.hero
                    })]
                })
            })
        }), d.jsx("section", {
            className: "py-20",
            children: d.jsx("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: d.jsxs("div", {
                    className: "grid lg:grid-cols-2 gap-16",
                    children: [d.jsxs(Z.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        children: [d.jsx("h2", {
                            className: "text-3xl font-bold text-foreground mb-4",
                            children: "Overview"
                        }), d.jsx("p", {
                            className: "text-muted-foreground leading-relaxed mb-8",
                            children: t.description
                        }), d.jsx("h3", {
                            className: "font-semibold text-foreground mb-4",
                            children: "Key Capabilities"
                        }), d.jsx("ul", {
                            className: "space-y-3",
                            children: t.features.map(r => d.jsxs("li", {
                                className: "flex items-start gap-3",
                                children: [d.jsx(Of, {
                                    size: 16,
                                    className: "text-accent mt-0.5 shrink-0"
                                }), d.jsx("span", {
                                    className: "text-sm text-foreground",
                                    children: r
                                })]
                            }, r))
                        })]
                    }), d.jsxs(Z.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: !0
                        },
                        transition: {
                            delay: .2
                        },
                        children: [d.jsx("h2", {
                            className: "text-3xl font-bold text-foreground mb-8",
                            children: "Our Process"
                        }), d.jsx("div", {
                            className: "space-y-6",
                            children: t.process.map( (r, i) => d.jsxs("div", {
                                className: "flex gap-4",
                                children: [d.jsxs("div", {
                                    className: "flex flex-col items-center",
                                    children: [d.jsx("div", {
                                        className: "w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm shrink-0",
                                        children: i + 1
                                    }), i < t.process.length - 1 && d.jsx("div", {
                                        className: "w-px h-full bg-border mt-2"
                                    })]
                                }), d.jsxs("div", {
                                    className: "pb-6",
                                    children: [d.jsx("h4", {
                                        className: "font-semibold text-foreground",
                                        children: r.step
                                    }), d.jsx("p", {
                                        className: "text-sm text-muted-foreground mt-1",
                                        children: r.desc
                                    })]
                                })]
                            }, r.step))
                        })]
                    })]
                })
            })
        }), d.jsx("section", {
            className: "bg-hero-gradient text-primary-foreground py-16",
            children: d.jsxs("div", {
                className: "container mx-auto px-4 lg:px-8 text-center",
                children: [d.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Ready to Get Started?"
                }), d.jsxs("p", {
                    className: "text-primary-foreground/70 mb-8 max-w-md mx-auto",
                    children: ["Let's discuss how ", t.title.toLowerCase(), " can transform your business."]
                }), d.jsx(je, {
                    variant: "hero",
                    size: "xl",
                    asChild: !0,
                    children: d.jsxs(fe, {
                        to: "/contact",
                        children: ["Contact Us ", d.jsx(ct, {
                            size: 18
                        })]
                    })
                })]
            })
        })]
    })
}
  , Jg = {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0
    },
    transition: {
        duration: .5
    }
}
  , LD = [{
    title: "Global Bank Digital Overhaul",
    client: "FinanceCore Ltd.",
    industry: "Financial Services",
    result: "+45% Operational Efficiency",
    desc: "Led a comprehensive digital transformation program for a top-20 global bank, modernizing core banking systems and introducing AI-driven customer analytics.",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80"
}, {
    title: "E-Commerce Scale-Up Strategy",
    client: "ShopWave",
    industry: "Retail & E-Commerce",
    result: "3x Revenue Growth",
    desc: "Developed and executed a multi-channel growth strategy that tripled revenue within 24 months, including marketplace expansion and D2C optimization.",
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
}, {
    title: "Healthcare Supply Chain Optimization",
    client: "MedLine Corp.",
    industry: "Healthcare",
    result: "-30% Supply Costs",
    desc: "Redesigned end-to-end supply chain operations for a national healthcare provider, reducing costs by 30% while improving delivery reliability.",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80"
}, {
    title: "Tech Startup Market Entry",
    client: "NovaTech AI",
    industry: "Technology",
    result: "$50M Series B",
    desc: "Guided an AI startup through market positioning, go-to-market strategy, and investor readiness, resulting in a successful $50M Series B round.",
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"
}, {
    title: "Manufacturing 4.0 Transformation",
    client: "SteelWorks Global",
    industry: "Manufacturing",
    result: "+60% Productivity",
    desc: "Implemented Industry 4.0 solutions across 12 facilities, including IoT sensors, predictive maintenance, and automated quality control systems.",
    color: "bg-primary",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80"
}, {
    title: "Energy Transition Roadmap",
    client: "GreenPower Inc.",
    industry: "Energy",
    result: "Carbon Neutral by 2028",
    desc: "Created a comprehensive energy transition strategy including renewable energy adoption, carbon offset programs, and sustainability reporting frameworks.",
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80"
}]
  , OD = () => d.jsxs(Nt, {
    children: [d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsxs(Z.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [d.jsx("span", {
                    className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4",
                    children: "Portfolio"
                }), d.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight",
                    children: "Case Studies & Success Stories"
                }), d.jsx("p", {
                    className: "mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed",
                    children: "Real results delivered for real businesses across industries and geographies."
                })]
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsx("div", {
                className: "grid md:grid-cols-2 gap-6",
                children: LD.map( (e, t) => d.jsxs(Z.div, {
                    ...Jg,
                    transition: {
                        duration: .4,
                        delay: t * .08
                    },
                    className: "group rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden",
                    children: [d.jsx("div", {
                        className: "aspect-[16/9] overflow-hidden",
                        children: d.jsx("img", {
                            src: e.image,
                            alt: e.title,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                            loading: "lazy"
                        })
                    }), d.jsxs("div", {
                        className: "p-8",
                        children: [d.jsxs("div", {
                            className: "flex items-start justify-between mb-4",
                            children: [d.jsxs("div", {
                                children: [d.jsx("span", {
                                    className: "text-xs font-medium text-muted-foreground uppercase tracking-wide",
                                    children: e.industry
                                }), d.jsx("h3", {
                                    className: "text-xl font-semibold text-foreground mt-1",
                                    children: e.title
                                })]
                            }), d.jsx(ix, {
                                size: 18,
                                className: "text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1"
                            })]
                        }), d.jsx("p", {
                            className: "text-sm text-muted-foreground leading-relaxed mb-5",
                            children: e.desc
                        }), d.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [d.jsx("span", {
                                className: "text-xs text-muted-foreground",
                                children: e.client
                            }), d.jsx("span", {
                                className: "text-sm font-semibold text-accent",
                                children: e.result
                            })]
                        })]
                    })]
                }, e.title))
            })
        })
    }), d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8 text-center",
            children: d.jsxs(Z.div, {
                ...Jg,
                children: [d.jsx("h2", {
                    className: "text-3xl md:text-4xl font-bold mb-4",
                    children: "Have a Similar Challenge?"
                }), d.jsx("p", {
                    className: "text-primary-foreground/70 max-w-lg mx-auto mb-8 text-lg",
                    children: "Let's explore how we can help you achieve similar results."
                }), d.jsx(je, {
                    variant: "hero",
                    size: "xl",
                    asChild: !0,
                    children: d.jsxs(fe, {
                        to: "/contact",
                        children: ["Start the Conversation ", d.jsx(ct, {
                            size: 18
                        })]
                    })
                })]
            })
        })
    })]
})
  , ey = {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0
    },
    transition: {
        duration: .5
    }
}
  , ri = [{
    slug: "future-of-ai-in-consulting",
    title: "The Future of AI in Management Consulting",
    excerpt: "How artificial intelligence is reshaping the consulting industry and what it means for businesses seeking advisory services.",
    category: "Technology",
    date: "Feb 15, 2026",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
}, {
    slug: "sustainable-business-strategy",
    title: "Building a Sustainable Business Strategy for 2026",
    excerpt: "Key frameworks and approaches for integrating sustainability into your core business strategy without sacrificing profitability.",
    category: "Strategy",
    date: "Feb 8, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
}, {
    slug: "digital-transformation-mistakes",
    title: "5 Common Digital Transformation Mistakes (and How to Avoid Them)",
    excerpt: "Lessons learned from hundreds of digital transformation projects across industries.",
    category: "Digital",
    date: "Jan 28, 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
}, {
    slug: "remote-work-culture",
    title: "Cultivating High-Performance Culture in Hybrid Teams",
    excerpt: "Practical strategies for building strong organizational culture when your team is distributed across locations and time zones.",
    category: "Leadership",
    date: "Jan 20, 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
}, {
    slug: "data-driven-decision-making",
    title: "From Data to Decisions: A Leader's Guide to Analytics",
    excerpt: "How to build a data-driven decision-making culture that empowers teams and drives better business outcomes.",
    category: "Analytics",
    date: "Jan 12, 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
}, {
    slug: "supply-chain-resilience",
    title: "Building Supply Chain Resilience in an Uncertain World",
    excerpt: "Strategies and frameworks for creating adaptive, resilient supply chains that can withstand disruption.",
    category: "Operations",
    date: "Jan 5, 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
}]
  , ID = () => d.jsxs(Nt, {
    children: [d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsxs(Z.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [d.jsx("span", {
                    className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4",
                    children: "Blog & Insights"
                }), d.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight",
                    children: "Perspectives & Insights"
                }), d.jsx("p", {
                    className: "mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed",
                    children: "Thought leadership, industry analysis, and practical frameworks from our experts."
                })]
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [d.jsx(Z.div, {
                ...ey,
                className: "mb-12",
                children: d.jsx(fe, {
                    to: `/blog/${ri[0].slug}`,
                    className: "group block rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden",
                    children: d.jsxs("div", {
                        className: "grid lg:grid-cols-2",
                        children: [d.jsx("div", {
                            className: "aspect-[16/10] lg:aspect-auto min-h-[240px]",
                            children: d.jsx("img", {
                                src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
                                alt: "AI and technology",
                                className: "w-full h-full object-cover",
                                loading: "lazy"
                            })
                        }), d.jsxs("div", {
                            className: "p-8 lg:p-10 flex flex-col justify-center",
                            children: [d.jsxs("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [d.jsx("span", {
                                    className: "text-xs font-medium text-accent",
                                    children: ri[0].category
                                }), d.jsx("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: ri[0].date
                                })]
                            }), d.jsx("h2", {
                                className: "text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors",
                                children: ri[0].title
                            }), d.jsx("p", {
                                className: "text-muted-foreground leading-relaxed mb-4",
                                children: ri[0].excerpt
                            }), d.jsxs("span", {
                                className: "inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all",
                                children: ["Read More ", d.jsx(ct, {
                                    size: 14
                                })]
                            })]
                        })]
                    })
                })
            }), d.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: ri.slice(1).map( (e, t) => d.jsx(Z.div, {
                    ...ey,
                    transition: {
                        duration: .4,
                        delay: t * .08
                    },
                    children: d.jsxs(fe, {
                        to: `/blog/${e.slug}`,
                        className: "group block h-full rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden",
                        children: [d.jsx("div", {
                            className: "aspect-[16/9] overflow-hidden",
                            children: d.jsx("img", {
                                src: e.image,
                                alt: e.title,
                                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                loading: "lazy"
                            })
                        }), d.jsxs("div", {
                            className: "p-6",
                            children: [d.jsxs("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [d.jsx("span", {
                                    className: "text-xs font-medium text-accent",
                                    children: e.category
                                }), d.jsx("span", {
                                    className: "text-xs text-muted-foreground",
                                    children: e.readTime
                                })]
                            }), d.jsx("h3", {
                                className: "font-semibold text-foreground mb-2 group-hover:text-accent transition-colors leading-snug",
                                children: e.title
                            }), d.jsx("p", {
                                className: "text-sm text-muted-foreground line-clamp-2",
                                children: e.excerpt
                            }), d.jsxs("span", {
                                className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all",
                                children: ["Read ", d.jsx(ct, {
                                    size: 14
                                })]
                            })]
                        })]
                    })
                }, e.slug))
            })]
        })
    })]
})
  , FD = {
    "future-of-ai-in-consulting": {
        title: "The Future of AI in Management Consulting",
        category: "Technology",
        date: "February 15, 2026",
        readTime: "8 min read",
        content: ["Artificial intelligence is fundamentally reshaping the management consulting industry. From automated data analysis to predictive modeling, AI tools are enabling consultants to deliver deeper insights faster than ever before.", "The integration of large language models and machine learning platforms has created new possibilities for scenario planning, market analysis, and operational optimization. Firms that embrace these technologies are finding themselves able to serve clients more effectively while reducing engagement timelines.", "However, the human element remains irreplaceable. Strategic thinking, stakeholder management, and the ability to navigate organizational politics are skills that AI cannot replicate. The most successful consulting firms will be those that find the right balance between technological leverage and human expertise.", "Looking ahead, we expect AI to become a standard part of every consultant's toolkit. The question is no longer whether to adopt AI, but how to integrate it most effectively into existing workflows and client delivery models.", "For businesses seeking consulting services, this evolution means faster time-to-insight, more data-driven recommendations, and ultimately better outcomes. The firms that invest in AI capabilities today will be best positioned to deliver value tomorrow."]
    },
    "sustainable-business-strategy": {
        title: "Building a Sustainable Business Strategy for 2026",
        category: "Strategy",
        date: "February 8, 2026",
        readTime: "6 min read",
        content: ["Sustainability is no longer a nice-to-have — it's a business imperative. Companies that fail to integrate environmental and social considerations into their core strategy risk falling behind competitors, losing customers, and facing regulatory penalties.", "The key to successful sustainability integration is treating it as a strategic advantage rather than a compliance burden. Organizations that approach sustainability proactively often discover new revenue streams, improved operational efficiency, and stronger brand loyalty.", "Start by conducting a comprehensive materiality assessment to identify which sustainability issues matter most to your stakeholders and business. This helps prioritize efforts and allocate resources effectively.", "Next, set clear, measurable targets aligned with frameworks like the UN Sustainable Development Goals or Science-Based Targets initiative. Transparency in reporting builds trust with investors, customers, and regulators.", "Finally, embed sustainability into your culture and operations. This means integrating ESG considerations into procurement decisions, product development, and talent management — not just creating a standalone sustainability department."]
    },
    "digital-transformation-mistakes": {
        title: "5 Common Digital Transformation Mistakes",
        category: "Digital",
        date: "January 28, 2026",
        readTime: "7 min read",
        content: ["Having guided hundreds of organizations through digital transformation, we've observed consistent patterns in what separates successful initiatives from failed ones.", "Mistake #1: Starting with technology instead of strategy. Too many organizations jump to vendor selection before clearly defining what business outcomes they want to achieve. Always start with the 'why' before the 'how'.", "Mistake #2: Underestimating change management. Technology implementation is often the easier part. Getting people to adopt new ways of working requires dedicated effort, communication, and training.", "Mistake #3: Trying to transform everything at once. Successful digital transformation is iterative. Start with high-impact, lower-risk initiatives that build momentum and demonstrate value.", "Mistake #4: Neglecting data foundations. Advanced analytics and AI capabilities require clean, well-governed data. Invest in your data infrastructure early.", "Mistake #5: Lack of executive sponsorship. Digital transformation requires sustained commitment from senior leadership. Without it, initiatives lose momentum and organizational support."]
    },
    "remote-work-culture": {
        title: "Cultivating High-Performance Culture in Hybrid Teams",
        category: "Leadership",
        date: "January 20, 2026",
        readTime: "5 min read",
        content: ["The shift to hybrid work has permanently changed how organizations think about culture, collaboration, and performance management.", "Building culture in a distributed environment requires intentional effort. It doesn't happen organically the way it might in a fully co-located team. Leaders must design rituals, communication patterns, and feedback mechanisms that bridge the physical divide.", "Key practices include regular virtual town halls, asynchronous documentation of decisions and context, and structured opportunities for social connection. The goal is to ensure remote team members feel equally informed and included.", "Performance management must also evolve. Focus on outcomes rather than activity. Set clear expectations, provide regular feedback, and trust your team to manage their own time and environment.", "The organizations that thrive in the hybrid era will be those that view it not as a constraint but as an opportunity to build more inclusive, resilient, and productive teams."]
    },
    "data-driven-decision-making": {
        title: "From Data to Decisions: A Leader's Guide",
        category: "Analytics",
        date: "January 12, 2026",
        readTime: "9 min read",
        content: ["In an era of information abundance, the ability to make data-informed decisions has become a critical leadership competency.", "Building a data-driven organization starts at the top. Leaders must model data-informed decision-making, ask for evidence to support recommendations, and invest in the tools and capabilities their teams need.", "A common pitfall is treating data as a replacement for judgment rather than a complement to it. The best decisions combine quantitative analysis with qualitative insights, industry experience, and strategic intuition.", "To build analytics capabilities, start with clear business questions rather than data. Work backward from the decisions you need to make to identify what data and analysis would be most valuable.", "Invest in data literacy across your organization. Analytics shouldn't be the sole domain of data scientists — every business leader should be able to interpret data, ask the right questions, and challenge assumptions."]
    },
    "supply-chain-resilience": {
        title: "Building Supply Chain Resilience",
        category: "Operations",
        date: "January 5, 2026",
        readTime: "6 min read",
        content: ["Recent global disruptions have exposed the fragility of traditional supply chain models built primarily for efficiency. The new imperative is resilience — the ability to absorb shocks, adapt quickly, and continue delivering value.", "Resilience doesn't mean abandoning efficiency. Rather, it means finding the right balance between cost optimization and risk mitigation. This requires a fundamentally different approach to supply chain design and management.", "Key strategies include diversifying supplier bases, building strategic inventory buffers for critical components, investing in supply chain visibility platforms, and developing scenario-based contingency plans.", "Technology plays a crucial role. IoT sensors, AI-powered demand forecasting, and digital twins enable organizations to detect disruptions earlier and respond more quickly.", "The most resilient supply chains are also the most collaborative. Building deep relationships with key suppliers, sharing data transparently, and co-investing in capabilities creates a supply network that is stronger than the sum of its parts."]
    }
}
  , _D = () => {
    const {slug: e} = cw()
      , t = FD[e || ""];
    return t ? d.jsxs(Nt, {
        children: [d.jsx("section", {
            className: "bg-hero-gradient text-primary-foreground py-16 md:py-24",
            children: d.jsx("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: d.jsxs(Z.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [d.jsxs(fe, {
                        to: "/blog",
                        className: "inline-flex items-center gap-1 text-primary-foreground/60 hover:text-primary-foreground text-sm mb-6 transition-colors",
                        children: [d.jsx(rx, {
                            size: 14
                        }), " All Posts"]
                    }), d.jsx("span", {
                        className: "block text-xs font-semibold uppercase tracking-widest text-accent mb-3",
                        children: t.category
                    }), d.jsx("h1", {
                        className: "text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight mb-4",
                        children: t.title
                    }), d.jsxs("div", {
                        className: "flex items-center gap-4 text-primary-foreground/60 text-sm",
                        children: [d.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [d.jsx(nE, {
                                size: 14
                            }), " ", t.date]
                        }), d.jsxs("span", {
                            className: "flex items-center gap-1",
                            children: [d.jsx(sx, {
                                size: 14
                            }), " ", t.readTime]
                        })]
                    })]
                })
            })
        }), d.jsx("section", {
            className: "py-16 md:py-20",
            children: d.jsxs("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: [d.jsx(Z.article, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .5,
                        delay: .2
                    },
                    className: "max-w-2xl mx-auto",
                    children: t.content.map( (n, r) => d.jsx("p", {
                        className: "text-foreground leading-relaxed mb-6 text-lg",
                        children: n
                    }, r))
                }), d.jsxs("div", {
                    className: "max-w-2xl mx-auto mt-12 pt-8 border-t border-border text-center",
                    children: [d.jsx("p", {
                        className: "text-muted-foreground mb-4",
                        children: "Enjoyed this article?"
                    }), d.jsx(je, {
                        asChild: !0,
                        children: d.jsxs(fe, {
                            to: "/blog",
                            children: ["Read More Insights ", d.jsx(ct, {
                                size: 16
                            })]
                        })
                    })]
                })]
            })
        })]
    }) : d.jsx(Nt, {
        children: d.jsxs("div", {
            className: "container mx-auto px-4 py-20 text-center",
            children: [d.jsx("h1", {
                className: "text-2xl font-bold mb-4",
                children: "Post Not Found"
            }), d.jsx(je, {
                asChild: !0,
                children: d.jsx(fe, {
                    to: "/blog",
                    children: "Back to Blog"
                })
            })]
        })
    })
}
  , ks = b.forwardRef( ({className: e, type: t, ...n}, r) => d.jsx("input", {
    type: t,
    className: mt("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
    ref: r,
    ...n
}));
ks.displayName = "Input";
const J1 = b.forwardRef( ({className: e, ...t}, n) => d.jsx("textarea", {
    className: mt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
    ref: n,
    ...t
}));
J1.displayName = "Textarea";
const VD = [{
    icon: oE,
    label: "Email",
    value: "hello@nexuscorp.com"
}, {
    icon: lE,
    label: "Phone",
    value: "+1 (555) 123-4567"
}, {
    icon: ax,
    label: "Office",
    value: "350 Fifth Ave, New York, NY 10118"
}]
  , zD = () => {
    const [e,t] = b.useState(!1)
      , {toast: n} = E0()
      , r = i => {
        i.preventDefault(),
        t(!0),
        n({
            title: "Message Sent",
            description: "We'll get back to you within 24 hours."
        })
    }
    ;
    return d.jsxs(Nt, {
        children: [d.jsx("section", {
            className: "bg-hero-gradient text-primary-foreground py-20 md:py-28",
            children: d.jsx("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: d.jsxs(Z.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .6
                    },
                    children: [d.jsx("span", {
                        className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4",
                        children: "Contact Us"
                    }), d.jsx("h1", {
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight",
                        children: "Let's Start a Conversation"
                    }), d.jsx("p", {
                        className: "mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed",
                        children: "Ready to transform your business? Get in touch and we'll respond within 24 hours."
                    })]
                })
            })
        }), d.jsx("section", {
            className: "py-20 md:py-28",
            children: d.jsx("div", {
                className: "container mx-auto px-4 lg:px-8",
                children: d.jsxs("div", {
                    className: "grid lg:grid-cols-5 gap-16",
                    children: [d.jsx(Z.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5
                        },
                        className: "lg:col-span-3",
                        children: e ? d.jsxs("div", {
                            className: "text-center py-16 rounded-xl bg-card border border-border",
                            children: [d.jsx(Of, {
                                size: 48,
                                className: "text-accent mx-auto mb-4"
                            }), d.jsx("h3", {
                                className: "text-2xl font-bold text-foreground mb-2",
                                children: "Thank You!"
                            }), d.jsx("p", {
                                className: "text-muted-foreground",
                                children: "We've received your message and will be in touch soon."
                            }), d.jsx(je, {
                                className: "mt-6",
                                onClick: () => t(!1),
                                children: "Send Another Message"
                            })]
                        }) : d.jsxs("form", {
                            onSubmit: r,
                            className: "space-y-6",
                            children: [d.jsxs("div", {
                                className: "grid sm:grid-cols-2 gap-4",
                                children: [d.jsxs("div", {
                                    children: [d.jsx("label", {
                                        className: "text-sm font-medium text-foreground mb-2 block",
                                        children: "First Name"
                                    }), d.jsx(ks, {
                                        placeholder: "John",
                                        required: !0
                                    })]
                                }), d.jsxs("div", {
                                    children: [d.jsx("label", {
                                        className: "text-sm font-medium text-foreground mb-2 block",
                                        children: "Last Name"
                                    }), d.jsx(ks, {
                                        placeholder: "Doe",
                                        required: !0
                                    })]
                                })]
                            }), d.jsxs("div", {
                                children: [d.jsx("label", {
                                    className: "text-sm font-medium text-foreground mb-2 block",
                                    children: "Work Email"
                                }), d.jsx(ks, {
                                    type: "email",
                                    placeholder: "john@company.com",
                                    required: !0
                                })]
                            }), d.jsxs("div", {
                                children: [d.jsx("label", {
                                    className: "text-sm font-medium text-foreground mb-2 block",
                                    children: "Company"
                                }), d.jsx(ks, {
                                    placeholder: "Your Company"
                                })]
                            }), d.jsxs("div", {
                                children: [d.jsx("label", {
                                    className: "text-sm font-medium text-foreground mb-2 block",
                                    children: "How Can We Help?"
                                }), d.jsx(J1, {
                                    placeholder: "Tell us about your project or challenge...",
                                    className: "min-h-[140px]",
                                    required: !0
                                })]
                            }), d.jsxs(je, {
                                type: "submit",
                                size: "lg",
                                className: "w-full sm:w-auto",
                                children: ["Send Message ", d.jsx(cE, {
                                    size: 16
                                })]
                            })]
                        })
                    }), d.jsxs(Z.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: .5,
                            delay: .2
                        },
                        className: "lg:col-span-2 space-y-8",
                        children: [d.jsxs("div", {
                            children: [d.jsx("h3", {
                                className: "text-xl font-semibold text-foreground mb-6",
                                children: "Get in Touch"
                            }), d.jsx("div", {
                                className: "space-y-5",
                                children: VD.map(i => d.jsxs("div", {
                                    className: "flex items-start gap-4",
                                    children: [d.jsx("div", {
                                        className: "w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0",
                                        children: d.jsx(i.icon, {
                                            size: 18,
                                            className: "text-accent"
                                        })
                                    }), d.jsxs("div", {
                                        children: [d.jsx("div", {
                                            className: "text-sm font-medium text-foreground",
                                            children: i.label
                                        }), d.jsx("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: i.value
                                        })]
                                    })]
                                }, i.label))
                            })]
                        }), d.jsxs("div", {
                            className: "p-6 rounded-xl bg-muted",
                            children: [d.jsx("h4", {
                                className: "font-semibold text-foreground mb-2",
                                children: "Office Hours"
                            }), d.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Monday – Friday: 9:00 AM – 6:00 PM EST"
                            }), d.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Weekend: By appointment only"
                            })]
                        })]
                    })]
                })
            })
        })]
    })
}
;
var Ql = "Collapsible"
  , [BD,eb] = Ji(Ql)
  , [$D,Ah] = BD(Ql)
  , tb = b.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, open: r, defaultOpen: i, disabled: s, onOpenChange: o, ...a} = e
      , [l,c] = Ll({
        prop: r,
        defaultProp: i ?? !1,
        onChange: o,
        caller: Ql
    });
    return d.jsx($D, {
        scope: n,
        disabled: s,
        contentId: wx(),
        open: l,
        onOpenToggle: b.useCallback( () => c(u => !u), [c]),
        children: d.jsx(Ae.div, {
            "data-state": Mh(l),
            "data-disabled": s ? "" : void 0,
            ...a,
            ref: t
        })
    })
}
);
tb.displayName = Ql;
var nb = "CollapsibleTrigger"
  , rb = b.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, ...r} = e
      , i = Ah(nb, n);
    return d.jsx(Ae.button, {
        type: "button",
        "aria-controls": i.contentId,
        "aria-expanded": i.open || !1,
        "data-state": Mh(i.open),
        "data-disabled": i.disabled ? "" : void 0,
        disabled: i.disabled,
        ...r,
        ref: t,
        onClick: be(e.onClick, i.onOpenToggle)
    })
}
);
rb.displayName = nb;
var Rh = "CollapsibleContent"
  , ib = b.forwardRef( (e, t) => {
    const {forceMount: n, ...r} = e
      , i = Ah(Rh, e.__scopeCollapsible);
    return d.jsx(Dl, {
        present: n || i.open,
        children: ({present: s}) => d.jsx(UD, {
            ...r,
            ref: t,
            present: s
        })
    })
}
);
ib.displayName = Rh;
var UD = b.forwardRef( (e, t) => {
    const {__scopeCollapsible: n, present: r, children: i, ...s} = e
      , o = Ah(Rh, n)
      , [a,l] = b.useState(r)
      , c = b.useRef(null)
      , u = ft(t, c)
      , f = b.useRef(0)
      , h = f.current
      , p = b.useRef(0)
      , x = p.current
      , y = o.open || a
      , w = b.useRef(y)
      , g = b.useRef(void 0);
    return b.useEffect( () => {
        const m = requestAnimationFrame( () => w.current = !1);
        return () => cancelAnimationFrame(m)
    }
    , []),
    on( () => {
        const m = c.current;
        if (m) {
            g.current = g.current || {
                transitionDuration: m.style.transitionDuration,
                animationName: m.style.animationName
            },
            m.style.transitionDuration = "0s",
            m.style.animationName = "none";
            const v = m.getBoundingClientRect();
            f.current = v.height,
            p.current = v.width,
            w.current || (m.style.transitionDuration = g.current.transitionDuration,
            m.style.animationName = g.current.animationName),
            l(r)
        }
    }
    , [o.open, r]),
    d.jsx(Ae.div, {
        "data-state": Mh(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        id: o.contentId,
        hidden: !y,
        ...s,
        ref: u,
        style: {
            "--radix-collapsible-content-height": h ? `${h}px` : void 0,
            "--radix-collapsible-content-width": x ? `${x}px` : void 0,
            ...e.style
        },
        children: y && i
    })
}
);
function Mh(e) {
    return e ? "open" : "closed"
}
var WD = tb
  , HD = rb
  , KD = ib
  , GD = b.createContext(void 0);
function qD(e) {
    const t = b.useContext(GD);
    return e || t || "ltr"
}
var qt = "Accordion"
  , YD = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
  , [Dh,QD,XD] = N0(qt)
  , [Xl,TL] = Ji(qt, [XD, eb])
  , Lh = eb()
  , sb = M.forwardRef( (e, t) => {
    const {type: n, ...r} = e
      , i = r
      , s = r;
    return d.jsx(Dh.Provider, {
        scope: e.__scopeAccordion,
        children: n === "multiple" ? d.jsx(tL, {
            ...s,
            ref: t
        }) : d.jsx(eL, {
            ...i,
            ref: t
        })
    })
}
);
sb.displayName = qt;
var [ob,ZD] = Xl(qt)
  , [ab,JD] = Xl(qt, {
    collapsible: !1
})
  , eL = M.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: i= () => {}
    , collapsible: s=!1, ...o} = e
      , [a,l] = Ll({
        prop: n,
        defaultProp: r ?? "",
        onChange: i,
        caller: qt
    });
    return d.jsx(ob, {
        scope: e.__scopeAccordion,
        value: M.useMemo( () => a ? [a] : [], [a]),
        onItemOpen: l,
        onItemClose: M.useCallback( () => s && l(""), [s, l]),
        children: d.jsx(ab, {
            scope: e.__scopeAccordion,
            collapsible: s,
            children: d.jsx(lb, {
                ...o,
                ref: t
            })
        })
    })
}
)
  , tL = M.forwardRef( (e, t) => {
    const {value: n, defaultValue: r, onValueChange: i= () => {}
    , ...s} = e
      , [o,a] = Ll({
        prop: n,
        defaultProp: r ?? [],
        onChange: i,
        caller: qt
    })
      , l = M.useCallback(u => a( (f=[]) => [...f, u]), [a])
      , c = M.useCallback(u => a( (f=[]) => f.filter(h => h !== u)), [a]);
    return d.jsx(ob, {
        scope: e.__scopeAccordion,
        value: o,
        onItemOpen: l,
        onItemClose: c,
        children: d.jsx(ab, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: d.jsx(lb, {
                ...s,
                ref: t
            })
        })
    })
}
)
  , [nL,Zl] = Xl(qt)
  , lb = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, disabled: r, dir: i, orientation: s="vertical", ...o} = e
      , a = M.useRef(null)
      , l = ft(a, t)
      , c = QD(n)
      , f = qD(i) === "ltr"
      , h = be(e.onKeyDown, p => {
        var k;
        if (!YD.includes(p.key))
            return;
        const x = p.target
          , y = c().filter(A => {
            var R;
            return !((R = A.ref.current) != null && R.disabled)
        }
        )
          , w = y.findIndex(A => A.ref.current === x)
          , g = y.length;
        if (w === -1)
            return;
        p.preventDefault();
        let m = w;
        const v = 0
          , S = g - 1
          , C = () => {
            m = w + 1,
            m > S && (m = v)
        }
          , T = () => {
            m = w - 1,
            m < v && (m = S)
        }
        ;
        switch (p.key) {
        case "Home":
            m = v;
            break;
        case "End":
            m = S;
            break;
        case "ArrowRight":
            s === "horizontal" && (f ? C() : T());
            break;
        case "ArrowDown":
            s === "vertical" && C();
            break;
        case "ArrowLeft":
            s === "horizontal" && (f ? T() : C());
            break;
        case "ArrowUp":
            s === "vertical" && T();
            break
        }
        const E = m % g;
        (k = y[E].ref.current) == null || k.focus()
    }
    );
    return d.jsx(nL, {
        scope: n,
        disabled: r,
        direction: i,
        orientation: s,
        children: d.jsx(Dh.Slot, {
            scope: n,
            children: d.jsx(Ae.div, {
                ...o,
                "data-orientation": s,
                ref: l,
                onKeyDown: r ? void 0 : h
            })
        })
    })
}
)
  , gl = "AccordionItem"
  , [rL,Oh] = Xl(gl)
  , cb = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, value: r, ...i} = e
      , s = Zl(gl, n)
      , o = ZD(gl, n)
      , a = Lh(n)
      , l = wx()
      , c = r && o.value.includes(r) || !1
      , u = s.disabled || e.disabled;
    return d.jsx(rL, {
        scope: n,
        open: c,
        disabled: u,
        triggerId: l,
        children: d.jsx(WD, {
            "data-orientation": s.orientation,
            "data-state": mb(c),
            ...a,
            ...i,
            ref: t,
            disabled: u,
            open: c,
            onOpenChange: f => {
                f ? o.onItemOpen(r) : o.onItemClose(r)
            }
        })
    })
}
);
cb.displayName = gl;
var ub = "AccordionHeader"
  , db = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , i = Zl(qt, n)
      , s = Oh(ub, n);
    return d.jsx(Ae.h3, {
        "data-orientation": i.orientation,
        "data-state": mb(s.open),
        "data-disabled": s.disabled ? "" : void 0,
        ...r,
        ref: t
    })
}
);
db.displayName = ub;
var Dd = "AccordionTrigger"
  , fb = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , i = Zl(qt, n)
      , s = Oh(Dd, n)
      , o = JD(Dd, n)
      , a = Lh(n);
    return d.jsx(Dh.ItemSlot, {
        scope: n,
        children: d.jsx(HD, {
            "aria-disabled": s.open && !o.collapsible || void 0,
            "data-orientation": i.orientation,
            id: s.triggerId,
            ...a,
            ...r,
            ref: t
        })
    })
}
);
fb.displayName = Dd;
var hb = "AccordionContent"
  , pb = M.forwardRef( (e, t) => {
    const {__scopeAccordion: n, ...r} = e
      , i = Zl(qt, n)
      , s = Oh(hb, n)
      , o = Lh(n);
    return d.jsx(KD, {
        role: "region",
        "aria-labelledby": s.triggerId,
        "data-orientation": i.orientation,
        ...o,
        ...r,
        ref: t,
        style: {
            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
            ...e.style
        }
    })
}
);
pb.displayName = hb;
function mb(e) {
    return e ? "open" : "closed"
}
var iL = sb
  , sL = cb
  , oL = db
  , gb = fb
  , yb = pb;
const aL = iL
  , vb = b.forwardRef( ({className: e, ...t}, n) => d.jsx(sL, {
    ref: n,
    className: mt("border-b", e),
    ...t
}));
vb.displayName = "AccordionItem";
const xb = b.forwardRef( ({className: e, children: t, ...n}, r) => d.jsx(oL, {
    className: "flex",
    children: d.jsxs(gb, {
        ref: r,
        className: mt("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", e),
        ...n,
        children: [t, d.jsx(rE, {
            className: "h-4 w-4 shrink-0 transition-transform duration-200"
        })]
    })
}));
xb.displayName = gb.displayName;
const wb = b.forwardRef( ({className: e, children: t, ...n}, r) => d.jsx(yb, {
    ref: r,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...n,
    children: d.jsx("div", {
        className: mt("pb-4 pt-0", e),
        children: t
    })
}));
wb.displayName = yb.displayName;
const lL = [{
    q: "What industries does Nexus serve?",
    a: "We serve clients across technology, financial services, healthcare, manufacturing, energy, retail, and the public sector. Our consultants bring deep domain expertise in each industry."
}, {
    q: "How long does a typical engagement last?",
    a: "Engagement durations vary based on scope and complexity. Strategy projects typically run 8–12 weeks, while transformation programs can span 6–18 months. We tailor our approach to your timeline and objectives."
}, {
    q: "What makes Nexus different from other consulting firms?",
    a: "We combine deep industry expertise with a results-oriented approach. Unlike traditional firms, we stay engaged through implementation, ensuring our strategies translate into measurable outcomes."
}, {
    q: "Do you work with startups or only large enterprises?",
    a: "We work with organizations of all sizes, from growth-stage startups to Fortune 500 enterprises. Our service models are flexible and can be adapted to your organization's needs and budget."
}, {
    q: "How does pricing work?",
    a: "We offer flexible pricing models including project-based fixed fees, retainer arrangements, and success-based pricing for select engagement types. We'll recommend the model that best fits your needs during our initial consultation."
}, {
    q: "What is your approach to data security and confidentiality?",
    a: "Data security is paramount. We maintain SOC 2 Type II compliance, use enterprise-grade encryption, and all team members sign strict NDAs. Your information is handled with the highest level of confidentiality."
}, {
    q: "Can you provide references from past clients?",
    a: "Absolutely. We're happy to connect you with references from clients in your industry. Just ask during our initial conversation and we'll arrange introductions."
}, {
    q: "How do we get started?",
    a: "Simply reach out through our contact page or email us at hello@nexuscorp.com. We'll schedule an initial consultation to understand your needs and propose a tailored approach."
}]
  , cL = () => d.jsxs(Nt, {
    children: [d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-20 md:py-28",
        children: d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: d.jsxs(Z.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [d.jsx("span", {
                    className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4",
                    children: "FAQ"
                }), d.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight",
                    children: "Frequently Asked Questions"
                }), d.jsx("p", {
                    className: "mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed",
                    children: "Find answers to common questions about our services, approach, and how we work with clients."
                })]
            })
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8 max-w-3xl",
            children: [d.jsx(Z.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .5
                },
                children: d.jsx(aL, {
                    type: "single",
                    collapsible: !0,
                    className: "space-y-3",
                    children: lL.map( (e, t) => d.jsxs(vb, {
                        value: `item-${t}`,
                        className: "bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-elevated transition-shadow",
                        children: [d.jsx(xb, {
                            className: "text-left font-semibold text-foreground hover:no-underline py-5",
                            children: e.q
                        }), d.jsx(wb, {
                            className: "text-muted-foreground leading-relaxed pb-5",
                            children: e.a
                        })]
                    }, t))
                })
            }), d.jsxs("div", {
                className: "text-center mt-16",
                children: [d.jsx("p", {
                    className: "text-muted-foreground mb-4",
                    children: "Still have questions?"
                }), d.jsx(je, {
                    size: "lg",
                    asChild: !0,
                    children: d.jsxs(fe, {
                        to: "/contact",
                        children: ["Contact Us ", d.jsx(ct, {
                            size: 16
                        })]
                    })
                })]
            })]
        })
    })]
})
  , ty = {
    initial: {
        opacity: 0,
        y: 30
    },
    whileInView: {
        opacity: 1,
        y: 0
    },
    viewport: {
        once: !0
    },
    transition: {
        duration: .5
    }
}
  , uL = ["Competitive compensation & equity", "Unlimited PTO policy", "Remote-first flexibility", "Learning & development budget", "Health, dental, and vision", "Annual team retreats"]
  , dL = [{
    title: "Senior Strategy Consultant",
    dept: "Strategy",
    location: "New York / Remote",
    type: "Full-time"
}, {
    title: "Data Scientist",
    dept: "Analytics",
    location: "San Francisco",
    type: "Full-time"
}, {
    title: "Digital Transformation Lead",
    dept: "Digital",
    location: "London / Hybrid",
    type: "Full-time"
}, {
    title: "UX/UI Designer",
    dept: "Innovation",
    location: "Remote",
    type: "Full-time"
}, {
    title: "Business Analyst",
    dept: "Operations",
    location: "New York",
    type: "Full-time"
}, {
    title: "Marketing Manager",
    dept: "Brand",
    location: "Remote",
    type: "Full-time"
}]
  , fL = () => d.jsxs(Nt, {
    children: [d.jsxs("section", {
        className: "relative bg-hero-gradient text-primary-foreground py-20 md:py-28 overflow-hidden",
        children: [d.jsx("div", {
            className: "absolute inset-0",
            children: d.jsx("img", {
                src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
                alt: "Team working together",
                className: "w-full h-full object-cover opacity-15"
            })
        }), d.jsx("div", {
            className: "container mx-auto px-4 lg:px-8 relative z-10",
            children: d.jsxs(Z.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: .6
                },
                children: [d.jsx("span", {
                    className: "inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4",
                    children: "Careers"
                }), d.jsx("h1", {
                    className: "text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl leading-tight",
                    children: "Shape the Future With Us"
                }), d.jsx("p", {
                    className: "mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed",
                    children: "Join a team of brilliant minds solving the world's most complex business challenges."
                })]
            })
        })]
    }), d.jsx("section", {
        className: "py-20 md:py-28 bg-section-gradient",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [d.jsx(go, {
                label: "Why Join Us",
                title: "Benefits & Perks",
                description: "We invest in our people because they're our greatest asset."
            }), d.jsx("div", {
                className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto",
                children: uL.map( (e, t) => d.jsxs(Z.div, {
                    ...ty,
                    transition: {
                        duration: .3,
                        delay: t * .06
                    },
                    className: "flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card",
                    children: [d.jsx("div", {
                        className: "w-2 h-2 rounded-full bg-accent shrink-0"
                    }), d.jsx("span", {
                        className: "text-sm font-medium text-foreground",
                        children: e
                    })]
                }, e))
            })]
        })
    }), d.jsx("section", {
        className: "py-20 md:py-28",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8",
            children: [d.jsx(go, {
                label: "Open Positions",
                title: "Current Openings",
                description: "Explore opportunities across our global offices."
            }), d.jsx("div", {
                className: "max-w-3xl mx-auto space-y-4",
                children: dL.map( (e, t) => d.jsxs(Z.div, {
                    ...ty,
                    transition: {
                        duration: .3,
                        delay: t * .06
                    },
                    className: "group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 gap-4",
                    children: [d.jsxs("div", {
                        children: [d.jsx("h3", {
                            className: "font-semibold text-foreground group-hover:text-accent transition-colors",
                            children: e.title
                        }), d.jsxs("div", {
                            className: "flex flex-wrap items-center gap-3 mt-1.5 text-xs text-muted-foreground",
                            children: [d.jsxs("span", {
                                className: "flex items-center gap-1",
                                children: [d.jsx(tE, {
                                    size: 12
                                }), " ", e.dept]
                            }), d.jsxs("span", {
                                className: "flex items-center gap-1",
                                children: [d.jsx(ax, {
                                    size: 12
                                }), " ", e.location]
                            }), d.jsxs("span", {
                                className: "flex items-center gap-1",
                                children: [d.jsx(sx, {
                                    size: 12
                                }), " ", e.type]
                            })]
                        })]
                    }), d.jsxs(je, {
                        variant: "outline",
                        size: "sm",
                        className: "shrink-0 self-start sm:self-center",
                        children: ["Apply ", d.jsx(ct, {
                            size: 14
                        })]
                    })]
                }, e.title))
            })]
        })
    }), d.jsx("section", {
        className: "bg-hero-gradient text-primary-foreground py-16",
        children: d.jsxs("div", {
            className: "container mx-auto px-4 lg:px-8 text-center",
            children: [d.jsx("h2", {
                className: "text-3xl font-bold mb-4",
                children: "Don't See Your Role?"
            }), d.jsx("p", {
                className: "text-primary-foreground/70 max-w-md mx-auto mb-8",
                children: "We're always looking for exceptional talent. Send us your resume."
            }), d.jsx(je, {
                variant: "hero",
                size: "xl",
                asChild: !0,
                children: d.jsxs(fe, {
                    to: "/contact",
                    children: ["Get in Touch ", d.jsx(ct, {
                        size: 18
                    })]
                })
            })]
        })
    })]
})
  , hL = () => {
    const e = is();
    return b.useEffect( () => {
        console.error("404 Error: User attempted to access non-existent route:", e.pathname)
    }
    , [e.pathname]),
    d.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-muted",
        children: d.jsxs("div", {
            className: "text-center",
            children: [d.jsx("h1", {
                className: "mb-4 text-4xl font-bold",
                children: "404"
            }), d.jsx("p", {
                className: "mb-4 text-xl text-muted-foreground",
                children: "Oops! Page not found"
            }), d.jsx("a", {
                href: "/",
                className: "text-primary underline hover:text-primary/90",
                children: "Return to Home"
            })]
        })
    })
}
  , pL = new S2
  , mL = () => d.jsx(T2, {
    client: pL,
    children: d.jsxs(ZP, {
        children: [d.jsx(KE, {}), d.jsx(Tk, {}), d.jsx(bN, {
            children: d.jsxs(pN, {
                children: [d.jsx(yt, {
                    path: "/",
                    element: d.jsx(kD, {})
                }), d.jsx(yt, {
                    path: "/about",
                    element: d.jsx(jD, {})
                }), d.jsx(yt, {
                    path: "/services",
                    element: d.jsx(RD, {})
                }), d.jsx(yt, {
                    path: "/services/:slug",
                    element: d.jsx(DD, {})
                }), d.jsx(yt, {
                    path: "/portfolio",
                    element: d.jsx(OD, {})
                }), d.jsx(yt, {
                    path: "/blog",
                    element: d.jsx(ID, {})
                }), d.jsx(yt, {
                    path: "/blog/:slug",
                    element: d.jsx(_D, {})
                }), d.jsx(yt, {
                    path: "/contact",
                    element: d.jsx(zD, {})
                }), d.jsx(yt, {
                    path: "/faq",
                    element: d.jsx(cL, {})
                }), d.jsx(yt, {
                    path: "/careers",
                    element: d.jsx(fL, {})
                }), d.jsx(yt, {
                    path: "*",
                    element: d.jsx(hL, {})
                })]
            })
        })]
    })
});
T0(document.getElementById("root")).render(d.jsx(mL, {}));
