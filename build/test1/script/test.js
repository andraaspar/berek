var illa;
(function (illa) {
    illa.GLOBAL = (function () {
        return this;
    })();

    illa.classByType = (function () {
        var classes = 'Boolean Number String Function Array Date RegExp Object Error'.split(' ');
        var result = {};
        for (var i = 0, n = classes.length; i < n; i++) {
            result['[object ' + classes[i] + ']'] = classes[i].toLowerCase();
        }
        return result;
    })();

    function isString(v) {
        return typeof v == 'string';
    }
    illa.isString = isString;

    function isBoolean(v) {
        return typeof v == 'boolean';
    }
    illa.isBoolean = isBoolean;

    function isNumber(v) {
        return typeof v == 'number';
    }
    illa.isNumber = isNumber;

    function isFunction(v) {
        return typeof v == 'function';
    }
    illa.isFunction = isFunction;

    function isArray(v) {
        return illa.getType(v) == 'array';
    }
    illa.isArray = isArray;

    if (Array.isArray)
        illa.isArray = Array.isArray;

    function isUndefined(v) {
        return typeof v == 'undefined';
    }
    illa.isUndefined = isUndefined;

    function isNull(v) {
        return v === null;
    }
    illa.isNull = isNull;

    function isUndefinedOrNull(v) {
        return typeof v == 'undefined' || v === null;
    }
    illa.isUndefinedOrNull = isUndefinedOrNull;

    function isObjectNotNull(v) {
        var t = typeof v;
        return t == 'object' && v !== null || t == 'function';
    }
    illa.isObjectNotNull = isObjectNotNull;

    function getType(v) {
        var result = '';
        if (v == null) {
            result = v + '';
        } else {
            result = typeof v;
            if (result == 'object' || result == 'function') {
                result = illa.classByType[toString.call(v)] || 'object';
            }
        }
        return result;
    }
    illa.getType = getType;

    function as(c, v) {
        return v instanceof c ? v : null;
    }
    illa.as = as;

    function bind(fn, obj) {
        if (!fn)
            throw 'No function.';
        return function () {
            return fn.apply(obj, arguments);
        };
    }
    illa.bind = bind;

    if (Function.prototype.bind) {
        illa.bind = function (fn, obj) {
            return fn.call.apply(fn.bind, arguments);
        };
    }
})(illa || (illa = {}));
var illa;
(function (illa) {
    var ArrayUtil = (function () {
        function ArrayUtil() {
        }
        ArrayUtil.indexOf = function (a, v, fromIndex) {
            if (Array.prototype.indexOf) {
                return Array.prototype.indexOf.call(a, v, fromIndex);
            } else {
                var length = a.length;
                if (fromIndex == null) {
                    fromIndex = 0;
                } else if (fromIndex < 0) {
                    fromIndex = Math.max(0, length + fromIndex);
                }
                for (var i = fromIndex; i < length; i++) {
                    if (i in a && a[i] === v) {
                        return i;
                    }
                }
            }
            return -1;
        };

        ArrayUtil.removeFirst = function (a, v) {
            var i = this.indexOf(a, v);
            var removed = i >= 0;
            if (removed) {
                a.splice(i, 1)[0];
            }
            return removed;
        };

        ArrayUtil.removeAll = function (a, v) {
            var removed = false;
            for (var i = a.length - 1; i >= 0; i--) {
                if (a[i] === v) {
                    a.splice(i, 1);
                    removed = true;
                }
            }
            return removed;
        };
        return ArrayUtil;
    })();
    illa.ArrayUtil = ArrayUtil;
})(illa || (illa = {}));
var illa;
(function (illa) {
    var Log = (function () {
        function Log() {
        }
        Log.log = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            var console = illa.GLOBAL.console;
            if (console && console.log) {
                if (console.log.apply) {
                    console.log.apply(console, args);
                } else {
                    console.log(args.join(' '));
                }
            }
        };
        Log.info = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            var console = illa.GLOBAL.console;
            if (console && console.info) {
                if (console.info.apply) {
                    console.info.apply(console, args);
                } else {
                    console.info(args.join(' '));
                }
            } else {
                Log.log.apply(this, args);
            }
        };
        Log.warn = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            var console = illa.GLOBAL.console;
            if (console && console.warn) {
                if (console.warn.apply) {
                    console.warn.apply(console, args);
                } else {
                    console.warn(args.join(' '));
                }
            } else {
                Log.log.apply(this, args);
            }
        };
        Log.error = function () {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                args[_i] = arguments[_i + 0];
            }
            var console = illa.GLOBAL.console;
            if (console && console.error) {
                if (console.error.apply) {
                    console.error.apply(console, args);
                } else {
                    console.error(args.join(' '));
                }
            } else {
                Log.log.apply(this, args);
            }
        };
        Log.logIf = function (test) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            if (test) {
                Log.log.apply(this, [test].concat(args));
            }
        };
        Log.infoIf = function (test) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            if (test) {
                Log.info.apply(this, [test].concat(args));
            }
        };
        Log.warnIf = function (test) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            if (test) {
                Log.warn.apply(this, [test].concat(args));
            }
        };
        Log.errorIf = function (test) {
            var args = [];
            for (var _i = 0; _i < (arguments.length - 1); _i++) {
                args[_i] = arguments[_i + 1];
            }
            if (test) {
                Log.error.apply(this, [test].concat(args));
            }
        };
        return Log;
    })();
    illa.Log = Log;
})(illa || (illa = {}));
var illa;
(function (illa) {
    var StringUtil = (function () {
        function StringUtil() {
        }
        StringUtil.escapeHTML = function (str) {
            return str.replace(/[&<>"']/g, function (s) {
                return StringUtil.CHAR_TO_HTML[s];
            });
        };

        StringUtil.castNicely = function (str) {
            return str == null ? '' : String(str);
        };

        StringUtil.trim = function (str) {
            return str.replace(/^\s+|\s+$/g, '');
        };
        StringUtil.CHAR_TO_HTML = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return StringUtil;
    })();
    illa.StringUtil = StringUtil;
})(illa || (illa = {}));
var illa;
(function (illa) {
    var EventCallbackReg = (function () {
        function EventCallbackReg(callback, thisObj) {
            this.callback = callback;
            this.thisObj = thisObj;
        }
        return EventCallbackReg;
    })();
    illa.EventCallbackReg = EventCallbackReg;
})(illa || (illa = {}));
var illa;
(function (illa) {
    var Event = (function () {
        function Event(type, target) {
            this.type = type;
            this.target = target;
            this.isPropagationStopped = false;
            this.isImmediatePropagationStopped = false;
        }
        Event.prototype.dispatch = function () {
            this.processHandler(this.target);
        };

        Event.prototype.processHandler = function (handler) {
            this.currentTarget = handler;
            var callbackRegs = handler.getCallbackRegsByType(this.type).slice(0);
            for (var i = 0, n = callbackRegs.length; i < n; i++) {
                var callbackReg = callbackRegs[i];
                callbackReg.callback.call(callbackReg.thisObj, this);
                if (this.isImmediatePropagationStopped)
                    break;
            }
            if (!this.isPropagationStopped) {
                var parentHandler = handler.getEventParent();
                if (parentHandler)
                    this.processHandler(parentHandler);
            }
        };

        Event.prototype.getType = function () {
            return this.type;
        };

        Event.prototype.getTarget = function () {
            return this.target;
        };

        Event.prototype.getCurrentTarget = function () {
            return this.currentTarget;
        };

        Event.prototype.setIsPropagationStopped = function (flag) {
            this.isPropagationStopped = flag;
        };

        Event.prototype.getIsPropagationStopped = function () {
            return this.isPropagationStopped;
        };

        Event.prototype.setStopImmediatePropagation = function (flag) {
            this.isImmediatePropagationStopped = flag;
        };

        Event.prototype.getIsImmediatePropagationStopped = function () {
            return this.isImmediatePropagationStopped;
        };
        return Event;
    })();
    illa.Event = Event;
})(illa || (illa = {}));
var illa;
(function (illa) {
    var EventHandler = (function () {
        function EventHandler() {
            this.callbacksByType = {};
        }
        EventHandler.prototype.getCallbackRegsByType = function (type) {
            var result = this.callbacksByType[type];
            if (!illa.isArray(result))
                result = [];
            return result;
        };

        EventHandler.prototype.getEventParent = function () {
            return null;
        };

        EventHandler.prototype.addEventCallback = function (type, cb, thisObj) {
            var reg = new illa.EventCallbackReg(cb, thisObj);
            if (illa.isArray(this.callbacksByType[type])) {
                this.removeEventCallback(type, cb, thisObj);
                this.callbacksByType[type].push(reg);
            } else {
                this.callbacksByType[type] = [reg];
            }
        };

        EventHandler.prototype.removeEventCallback = function (type, cb, thisObj) {
            var callbacks = this.callbacksByType[type];
            if (illa.isArray(callbacks)) {
                for (var i = 0, n = callbacks.length; i < n; i++) {
                    var callback = callbacks[i];
                    if (callback.callback === cb && callback.thisObj === thisObj) {
                        callbacks.splice(i, 1);
                        break;
                    }
                }
            }
        };

        EventHandler.prototype.removeAllEventCallbacks = function () {
            this.callbacksByType = {};
        };
        return EventHandler;
    })();
    illa.EventHandler = EventHandler;
})(illa || (illa = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var illa;
(function (illa) {
    var Ticker = (function (_super) {
        __extends(Ticker, _super);
        function Ticker() {
            _super.call(this);
            this.supportsAnimationFrame = illa.isFunction(illa.GLOBAL.requestAnimationFrame) && illa.isFunction(illa.GLOBAL.cancelAnimationFrame);
            this.onTickBound = illa.bind(this.onTick, this);
            this.tickCount = 0;
            this.setIsStarted(true);
        }
        Ticker.prototype.getIsStarted = function () {
            return !illa.isUndefined(this.intervalID);
        };

        Ticker.prototype.setIsStarted = function (flag) {
            if (this.getIsStarted() == flag)
                return;

            if (flag) {
                if (this.supportsAnimationFrame) {
                    this.intervalID = requestAnimationFrame(this.onTickBound);
                } else {
                    this.intervalID = setInterval(this.onTickBound, 1000 / 60);
                }
            } else {
                if (this.supportsAnimationFrame) {
                    cancelAnimationFrame(this.intervalID);
                } else {
                    clearInterval(this.intervalID);
                }
                this.intervalID = undefined;
            }
        };

        Ticker.prototype.getSupportsAnimationFrame = function () {
            return this.supportsAnimationFrame;
        };

        Ticker.prototype.onTick = function () {
            this.tickCount++;
            if (this.supportsAnimationFrame) {
                this.intervalID = requestAnimationFrame(this.onTickBound);
            }
            new illa.Event(Ticker.EVENT_TICK, this).dispatch();
        };

        Ticker.prototype.getTickCount = function () {
            return this.tickCount;
        };
        Ticker.EVENT_TICK = 'illa_Ticker_EVENT_TICK';
        return Ticker;
    })(illa.EventHandler);
    illa.Ticker = Ticker;
})(illa || (illa = {}));
var berek;
(function (berek) {
    (function (jquery) {
        jquery.$ = window['jQuery'];
    })(berek.jquery || (berek.jquery = {}));
    var jquery = berek.jquery;
})(berek || (berek = {}));
var illa;
(function (illa) {
    (function (Axis2D) {
        Axis2D[Axis2D["X"] = 0] = "X";
        Axis2D[Axis2D["Y"] = 1] = "Y";
    })(illa.Axis2D || (illa.Axis2D = {}));
    var Axis2D = illa.Axis2D;
})(illa || (illa = {}));
var berek;
(function (berek) {
    var ScrollbarUtil = (function () {
        function ScrollbarUtil(box) {
            this.defaultWidth = NaN;
            this.defaultHeight = NaN;
            if (box) {
                this.box = box;
            } else {
                this.box = berek.jquery.$('<div>');
            }
            this.box.addClass(ScrollbarUtil.CSS_CLASS);
            this.box.appendTo('body');
        }
        ScrollbarUtil.prototype.getDefaultSize = function (axis) {
            var result = NaN;

            if (isNaN(this.defaultWidth)) {
                var boxElement = this.box[0];
                this.defaultWidth = boxElement.offsetWidth - boxElement.clientWidth;
                this.defaultHeight = boxElement.offsetHeight - boxElement.clientHeight;
            }

            switch (axis) {
                case 0 /* X */:
                    result = this.defaultWidth;
                    break;
                case 1 /* Y */:
                    result = this.defaultHeight;
                    break;
            }

            return result;
        };

        ScrollbarUtil.prototype.clearDefaultSizeCache = function () {
            this.defaultWidth = NaN;
        };

        ScrollbarUtil.isVisibleOn = function (jq, axis) {
            var elem = jq[0];
            if (!elem)
                return false;
            var overflow = '';
            switch (axis) {
                case 0 /* X */:
                    overflow = jq.css('overflow-x');
                    break;
                case 1 /* Y */:
                    overflow = jq.css('overflow-y');
                    break;
            }
            switch (overflow) {
                case 'scroll':
                    return true;
                case 'auto':
                    switch (axis) {
                        case 0 /* X */:
                            return elem.scrollWidth > jq.innerWidth();
                        case 1 /* Y */:
                            return elem.scrollHeight > jq.innerHeight();
                    }
                    break;
            }
            return false;
        };
        ScrollbarUtil.CSS_CLASS = 'berek-ScrollbarUtil-box';
        return ScrollbarUtil;
    })();
    berek.ScrollbarUtil = ScrollbarUtil;
})(berek || (berek = {}));
var illa;
(function (illa) {
    var UnitTest = (function () {
        function UnitTest() {
            this.testCount = 0;
            this.successCount = 0;
            this.failCount = 0;
        }
        UnitTest.prototype.assert = function (test, desc) {
            if (typeof desc === "undefined") { desc = ''; }
            this.testCount++;
            if (test === true) {
                this.successCount++;
            } else {
                this.failCount++;
                if (desc) {
                    this.warn('Test failed: ' + desc);
                } else {
                    throw 'Test failed.';
                }
            }
            return test;
        };

        UnitTest.prototype.assertThrowsError = function (fn, desc) {
            if (typeof desc === "undefined") { desc = ''; }
            var errorThrown = false;
            try  {
                fn();
            } catch (e) {
                errorThrown = true;
            }
            return this.assert(errorThrown, desc);
        };

        UnitTest.prototype.printStats = function () {
            this.info(this.testCount + ' tests completed: ' + this.successCount + ' succeeded, ' + this.failCount + ' failed.');
        };

        UnitTest.prototype.info = function () {
            var r = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                r[_i] = arguments[_i + 0];
            }
            illa.Log.info.apply(illa.Log, r);
        };

        UnitTest.prototype.warn = function () {
            var r = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                r[_i] = arguments[_i + 0];
            }
            illa.Log.warn.apply(illa.Log, r);
        };
        return UnitTest;
    })();
    illa.UnitTest = UnitTest;
})(illa || (illa = {}));
var berek;
(function (berek) {
    var UnitTest = (function (_super) {
        __extends(UnitTest, _super);
        function UnitTest(printTarget) {
            _super.call(this);
            this.printTarget = printTarget;
        }
        UnitTest.prototype.info = function () {
            var r = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                r[_i] = arguments[_i + 0];
            }
            if (this.printTarget) {
                var out = berek.jquery.$('<p>').text(r.join(' '));
                this.printTarget.append(out);
            } else {
                _super.prototype.info.apply(this, r);
            }
        };

        UnitTest.prototype.warn = function () {
            var r = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                r[_i] = arguments[_i + 0];
            }
            if (this.printTarget) {
                var out = berek.jquery.$('<p>').text(r.join(' ')).prepend('<b>WARNING: </b>');
                this.printTarget.append(out);
            } else {
                _super.prototype.warn.apply(this, r);
            }
        };
        return UnitTest;
    })(illa.UnitTest);
    berek.UnitTest = UnitTest;
})(berek || (berek = {}));
var test1;
(function (test1) {
    var jquery = berek.jquery;

    var Main = (function () {
        function Main() {
            jquery.$(illa.bind(this.onDOMLoaded, this));
        }
        Main.prototype.onDOMLoaded = function () {
            var u = this.unitTest = new berek.UnitTest(jquery.$('body'));
            u.info('Testing...');

            var scrollbarUtil = new berek.ScrollbarUtil();
            u.assert(illa.isNumber(scrollbarUtil.getDefaultSize(0 /* X */)), 'ScrollbarUtil.getDefaultSize 1');
            u.assert(illa.isNumber(scrollbarUtil.getDefaultSize(1 /* Y */)), 'ScrollbarUtil.getDefaultSize 2');
            u.assert(scrollbarUtil.getDefaultSize(0 /* X */) >= 0, 'ScrollbarUtil.getDefaultSize 3');
            u.assert(scrollbarUtil.getDefaultSize(1 /* Y */) >= 0, 'ScrollbarUtil.getDefaultSize 4');

            var scrolling = jquery.$('<div style="overflow-x: scroll; overflow-y: scroll">');
            var scrolling2 = jquery.$('<div style="overflow: scroll">');
            var nonScrolling = jquery.$('<div style="overflow-x: hidden; overflow-y: hidden">');
            var nonScrolling2 = jquery.$('<div style="overflow-x: visible; overflow-y: visible">');
            var nonScrolling3 = jquery.$('<div style="overflow: visible">');

            u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling, 0 /* X */), 'ScrollbarUtil.isVisibleOn 1');
            u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling, 1 /* Y */), 'ScrollbarUtil.isVisibleOn 2');
            u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling, 0 /* X */) === false, 'ScrollbarUtil.isVisibleOn 3');
            u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling, 1 /* Y */) === false, 'ScrollbarUtil.isVisibleOn 4');
            u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling2, 0 /* X */) === false, 'ScrollbarUtil.isVisibleOn 5');
            u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling2, 1 /* Y */) === false, 'ScrollbarUtil.isVisibleOn 6');
            u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling2, 0 /* X */), 'ScrollbarUtil.isVisibleOn 7');
            u.assert(berek.ScrollbarUtil.isVisibleOn(scrolling2, 1 /* Y */), 'ScrollbarUtil.isVisibleOn 8');
            u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling3, 0 /* X */) === false, 'ScrollbarUtil.isVisibleOn 9');
            u.assert(berek.ScrollbarUtil.isVisibleOn(nonScrolling3, 1 /* Y */) === false, 'ScrollbarUtil.isVisibleOn 10');

            u.printStats();
        };
        return Main;
    })();
    test1.Main = Main;
})(test1 || (test1 = {}));

var test1Main = new test1.Main();
